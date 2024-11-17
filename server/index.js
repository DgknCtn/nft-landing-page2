const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// CORS ayarları
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourfrontend.com'] // Frontend domain'inizi buraya ekleyeceğiz
    : ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// MySQL bağlantısı
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'joinv_anth',
  password: process.env.DB_PASSWORD || 'vanth0697',
  database: process.env.DB_NAME || 'whitelist_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL bağlantısı başarılı');
  
  // Veritabanı tablolarını oluştur
  const createWhitelistTable = `
    CREATE TABLE IF NOT EXISTS whitelist (
      id INT AUTO_INCREMENT PRIMARY KEY,
      wallet_address VARCHAR(255) NOT NULL,
      discord_username VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  const createThemeTable = `
    CREATE TABLE IF NOT EXISTS theme_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      color VARCHAR(7) NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
  
  connection.query(createWhitelistTable, (err) => {
    if (err) {
      console.error('Whitelist tablo oluşturma hatası:', err);
    }
  });

  connection.query(createThemeTable, (err) => {
    if (err) {
      console.error('Theme tablo oluşturma hatası:', err);
    }
  });
  connection.release();
});

// Whitelist kayıt endpoint'i
app.post('/api/whitelist', async (req, res) => {
  const { walletAddress, discordUsername } = req.body;
  
  if (!walletAddress || !discordUsername) {
    return res.status(400).json({ 
      success: false, 
      message: 'Cüzdan adresi ve Discord kullanıcı adı gerekli' 
    });
  }

  const query = 'INSERT INTO whitelist (wallet_address, discord_username) VALUES (?, ?)';
  
  try {
    const connection = await pool.getConnection();
    await connection.promise().execute(query, [walletAddress, discordUsername]);
    connection.release();
    res.json({ success: true, message: 'Kayıt başarılı' });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).json({ success: false, message: 'Kayıt sırasında bir hata oluştu' });
  }
});

// Site teması endpoint'i
app.post('/api/theme', async (req, res) => {
  const { color } = req.body;
  
  if (!color) {
    return res.status(400).json({ success: false, message: 'Renk değeri gerekli' });
  }

  try {
    // Önce mevcut tema ayarını kontrol et
    const connection = await pool.getConnection();
    const [rows] = await connection.promise().query('SELECT id FROM theme_settings LIMIT 1');
    connection.release();
    
    if (rows.length > 0) {
      // Mevcut ayarı güncelle
      const connection = await pool.getConnection();
      await connection.promise().execute(
        'UPDATE theme_settings SET color = ? WHERE id = ?',
        [color, rows[0].id]
      );
      connection.release();
    } else {
      // Yeni ayar ekle
      const connection = await pool.getConnection();
      await connection.promise().execute(
        'INSERT INTO theme_settings (color) VALUES (?)',
        [color]
      );
      connection.release();
    }
    
    res.json({ success: true, message: 'Tema rengi güncellendi' });
  } catch (error) {
    console.error('Tema güncelleme hatası:', error);
    res.status(500).json({ success: false, message: 'Tema güncellenirken bir hata oluştu' });
  }
});

// Mevcut tema rengini getir
app.get('/api/theme', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.promise().query('SELECT color FROM theme_settings ORDER BY updated_at DESC LIMIT 1');
    connection.release();
    res.json({ success: true, color: rows[0]?.color || '#000000' });
  } catch (error) {
    console.error('Tema getirme hatası:', error);
    res.status(500).json({ success: false, message: 'Tema rengi alınırken bir hata oluştu' });
  }
});

// Serve static files from the dist directory
app.use(express.static('dist'));

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
