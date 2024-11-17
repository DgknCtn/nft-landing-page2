import React, { useState } from 'react';
import axios from '../lib/axios';
import { motion } from 'framer-motion';

const Whitelist: React.FC = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    discordUsername: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Ethereum cüzdan adresi validasyonu
  const isValidEthereumAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  // Discord kullanıcı adı validasyonu
  const isValidDiscordUsername = (username: string) => {
    return /^.{3,32}#[0-9]{4}$/.test(username);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Form validasyonu
    if (!isValidEthereumAddress(formData.walletAddress)) {
      setError('Please enter a valid Ethereum wallet address (42 characters starting with 0x)');
      return;
    }

    if (!isValidDiscordUsername(formData.discordUsername)) {
      setError('Please enter a valid Discord username (Example: Username#1234)');
      return;
    }

    setLoading(true);

    try {
      await axios.post('/api/whitelist', formData);
      setSuccess(true);
      setFormData({ walletAddress: '', discordUsername: '' });
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-cyan-500/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Whitelist Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-300 mb-2">
                Ethereum Wallet Address
              </label>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                placeholder="0x..."
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-300 mb-2">
                Discord Username
              </label>
              <input
                type="text"
                id="discordUsername"
                name="discordUsername"
                value={formData.discordUsername}
                onChange={handleChange}
                placeholder="Username#1234"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-cyan-500/20 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-2 bg-red-500/10 p-3 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-teal-400 text-sm mt-2 bg-teal-500/10 p-3 rounded-lg"
              >
                Successfully registered to whitelist!
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:from-cyan-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Register'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Whitelist;