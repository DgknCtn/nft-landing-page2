import React, { useState } from 'react';

const Whitelist = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    discordUsername: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration will be implemented later
    alert('Whitelist functionality will be implemented soon!');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Join the Whitelist</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={formData.walletAddress}
              onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="Enter your wallet address"
              required
            />
          </div>
          <div>
            <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-300 mb-2">
              Discord Username
            </label>
            <input
              type="text"
              id="discordUsername"
              value={formData.discordUsername}
              onChange={(e) => setFormData({ ...formData, discordUsername: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="Enter your Discord username"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors duration-200"
          >
            Join Whitelist
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Make sure to join our Discord server and follow us on Twitter to stay updated!
        </p>
      </div>
    </div>
  );
};

export default Whitelist;