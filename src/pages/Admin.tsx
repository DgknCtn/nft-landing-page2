import React, { useState } from 'react';
import axios from 'axios';

const Admin: React.FC = () => {
  const [themeColor, setThemeColor] = useState('#000000');
  const [walletAddress, setWalletAddress] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');

  const handleColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setThemeColor(newColor);
    // Renk değişikliğini kaydetmek için API çağrısı yapılabilir
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
      alert('Bir hata oluştu!');
      console.error(error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      
      <div className="theme-section">
        <h2>Site Teması</h2>
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
        <h2>Whitelist Yönetimi</h2>
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
  );
};

export default Admin;
