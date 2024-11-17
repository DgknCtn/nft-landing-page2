const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// MySQL bağlantısı
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware
app.use(cors());
app.use(express.json());

// Ethereum adresi validasyonu
const isValidEthereumAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Discord kullanıcı adı validasyonu
const isValidDiscordUsername = (username) => {
  return /^.{3,32}#[0-9]{4}$/.test(username);
};

// Whitelist API endpoint'i
app.post('/api/whitelist', async (req, res) => {
  const { walletAddress, discordUsername } = req.body;

  // Input validasyonu
  if (!walletAddress || !discordUsername) {
    return res.status(400).json({ message: 'Wallet address and Discord username are required' });
  }

  if (!isValidEthereumAddress(walletAddress)) {
    return res.status(400).json({ message: 'Invalid Ethereum wallet address' });
  }

  if (!isValidDiscordUsername(discordUsername)) {
    return res.status(400).json({ message: 'Invalid Discord username format' });
  }

  try {
    // Veritabanına kayıt
    const [result] = await pool.execute(
      'INSERT INTO whitelist (wallet_address, discord_username) VALUES (?, ?)',
      [walletAddress, discordUsername]
    );

    res.status(201).json({
      message: 'Successfully added to whitelist',
      id: result.insertId
    });
  } catch (error) {
    console.error('Database error:', error);

    // Duplicate entry hatası kontrolü
    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('wallet_address')) {
        return res.status(400).json({ message: 'This wallet address is already whitelisted' });
      }
      if (error.message.includes('discord_username')) {
        return res.status(400).json({ message: 'This Discord username is already whitelisted' });
      }
    }

    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
});

// Whitelist durumu kontrolü endpoint'i
app.get('/api/whitelist/check', async (req, res) => {
  const { walletAddress, discordUsername } = req.query;

  if (!walletAddress && !discordUsername) {
    return res.status(400).json({ message: 'Either wallet address or Discord username is required' });
  }

  try {
    let query = 'SELECT * FROM whitelist WHERE ';
    let params = [];

    if (walletAddress) {
      query += 'wallet_address = ?';
      params.push(walletAddress);
    } else {
      query += 'discord_username = ?';
      params.push(discordUsername);
    }

    const [rows] = await pool.execute(query, params);
    
    res.json({
      isWhitelisted: rows.length > 0,
      data: rows[0] || null
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'An error occurred while checking whitelist status' });
  }
});

// Admin için whitelist listesi endpoint'i
app.get('/api/whitelist/all', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM whitelist ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'An error occurred while fetching whitelist entries' });
  }
});

// Tema rengi API endpoint'i
app.post('/api/theme', (req, res) => {
  const { color } = req.body;
  // Theme color implementation will be added later
  res.json({ success: true, color });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
