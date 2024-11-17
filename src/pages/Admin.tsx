import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';
import '../styles/Admin.css';

// Axios için base URL ayarı
axios.defaults.baseURL = 'http://localhost:3001';

const Admin: React.FC = () => {
  const { themeColor, setThemeColor } = useTheme();
  const [walletAddress, setWalletAddress] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');

  const handleColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    try {
      const response = await axios.post('/api/theme', { color: newColor });
      if (response.data.success) {
        setThemeColor(newColor);
        alert('Tema rengi başarıyla güncellendi!');
      }
    } catch (error) {
      console.error('Tema güncelleme hatası:', error);
      alert('Tema rengi güncellenirken bir hata oluştu!');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/whitelist', {
        walletAddress,
        discordUsername
      });
      if (response.data.success) {
        alert('Başarıyla kaydedildi!');
        setWalletAddress('');
        setDiscordUsername('');
      }
    } catch (error) {
      console.error('Kayıt hatası:', error);
      alert('Kayıt sırasında bir hata oluştu!');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] py-12">
      <div className="admin-container">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          Admin Panel
        </h1>
        
        <div className="theme-section">
          <h2 className="text-2xl font-bold mb-4">Site Teması</h2>
          <div className="color-picker">
            <label>Site Rengi: </label>
            <input 
              type="color" 
              value={themeColor}
              onChange={handleColorChange}
            />
          </div>
        </div>

        <div className="whitelist-section">
          <h2 className="text-2xl font-bold mb-4">Whitelist Yönetimi</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Cüzdan Adresi:</label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Discord Kullanıcı Adı:</label>
              <input
                type="text"
                value={discordUsername}
                onChange={(e) => setDiscordUsername(e.target.value)}
                required
              />
            </div>
            <button type="submit">Kaydet</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
