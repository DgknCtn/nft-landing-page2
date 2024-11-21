import React from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/web3';

const Stake: React.FC = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  };

  const stats = {
    totalStaked: '1,234',
    totalRewards: '5,678',
    apr: '120%',
    lockPeriod: '30 days',
  };

  return (
    <div className="min-h-screen pt-24 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Stake Your NFTs
          </h1>
          <p className="mt-4 text-gray-400">
            Earn rewards by staking your Vanth NFTs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Staked', value: stats.totalStaked },
            { label: 'Total Rewards', value: stats.totalRewards },
            { label: 'APR', value: stats.apr },
            { label: 'Lock Period', value: stats.lockPeriod },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20"
            >
              <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Staking Panel */}
          <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Stake NFTs</h2>
              {active && (
                <button
                  onClick={disconnect}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {account?.slice(0, 6)}...{account?.slice(-4)}
                </button>
              )}
            </div>
            
            {!active ? (
              <button
                onClick={connect}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((nft) => (
                    <div
                      key={nft}
                      className="aspect-square rounded-lg border-2 border-cyan-500/20 hover:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <img
                        src={`/src/assets/nft${nft}.png`}
                        alt={`NFT ${nft}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all">
                  Stake Selected NFTs
                </button>
              </div>
            )}
          </div>

          {/* Rewards Panel */}
          <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6">Your Rewards</h2>
            {!active ? (
              <div className="text-center text-gray-400">
                Connect your wallet to view rewards
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Available Rewards</span>
                    <span className="text-xl font-bold">0.00</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all">
                    Claim Rewards
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Staked NFTs</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Staked NFTs will be displayed here */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;