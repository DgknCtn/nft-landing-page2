import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to VANTH NFT Collection
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our exclusive collection of 4,444 unique digital artworks on the blockchain
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors duration-200">
            Explore Collection
          </button>
          <button className="px-8 py-3 bg-transparent border border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors duration-200">
            Join Whitelist
          </button>
        </div>
      </motion.div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">4,444 Unique NFTs</h3>
          <p className="text-gray-400">Each VANTH NFT is uniquely generated and stored on the blockchain</p>
        </div>
        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">Stake & Earn</h3>
          <p className="text-gray-400">Stake your VANTH NFTs to earn VNTH tokens and exclusive rewards</p>
        </div>
        <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">Community First</h3>
          <p className="text-gray-400">Join our growing community and be part of the VANTH ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default Home;