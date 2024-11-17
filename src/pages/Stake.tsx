import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Stake: React.FC = () => {
  const [stakedAmount, setStakedAmount] = useState('0');

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-center">
          Stake Your VANTH NFTs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Staking Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20"
          >
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">Staking Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Staked NFTs</span>
                <span className="text-white font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Your Staked NFTs</span>
                <span className="text-white font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Rewards Earned</span>
                <span className="text-white font-medium">0 VANTH</span>
              </div>
            </div>
          </motion.div>

          {/* Staking Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20"
          >
            <h2 className="text-xl font-semibold mb-6 text-cyan-400">Stake NFTs</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Amount to Stake
                </label>
                <input
                  type="number"
                  min="0"
                  value={stakedAmount}
                  onChange={(e) => setStakedAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  placeholder="Enter amount"
                />
              </div>
              <button
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
              >
                Stake NFTs
              </button>
              <button
                className="w-full py-3 bg-black/50 border border-cyan-500/20 rounded-lg font-medium text-white hover:bg-cyan-900/20 transition-all duration-200"
              >
                Claim Rewards
              </button>
            </div>
          </motion.div>
        </div>

        {/* Staking Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20"
        >
          <h2 className="text-xl font-semibold mb-6 text-cyan-400">Staking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Rewards
              </h3>
              <p className="text-gray-400">
                Earn VANTH tokens by staking your NFTs. Rewards are distributed daily based on your staking duration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Lock Period
              </h3>
              <p className="text-gray-400">
                Minimum staking period is 7 days. Early unstaking will result in a penalty on rewards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Benefits
              </h3>
              <p className="text-gray-400">
                Stakers get exclusive access to future drops, governance rights, and special events.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stake;