const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MySQL bağlantısı
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'whitelist_db'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL bağlantısı başarılı');
  
  // Veritabanı tablosunu oluştur
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS whitelist (
      id INT AUTO_INCREMENT PRIMARY KEY,
      wallet_address VARCHAR(255) NOT NULL,
      discord_username VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  connection.query(createTableQuery, (err) => {
    if (err) {
      console.error('Tablo oluşturma hatası:', err);
    }
  });
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
    await connection.promise().execute(query, [walletAddress, discordUsername]);
    res.json({ success: true, message: 'Kayıt başarılı' });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).json({ success: false, message: 'Kayıt sırasında bir hata oluştu' });
  }
});

// Site teması endpoint'i
app.post('/api/theme', (req, res) => {
  const { color } = req.body;
  // Burada renk değerini veritabanına kaydedebilirsiniz
  res.json({ success: true, message: 'Tema rengi güncellendi' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
