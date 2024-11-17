import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-8">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            VANTH
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Join the exclusive NFT collection that bridges the gap between art and gaming.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/whitelist"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
          >
            Join Whitelist
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 bg-black/50 border border-cyan-500/20 rounded-lg font-medium hover:bg-cyan-900/20 transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: 'Unique Art',
            description: 'Each NFT is a masterpiece with unique traits and characteristics.',
          },
          {
            title: 'Gaming Integration',
            description: 'Use your NFTs in our upcoming game ecosystem.',
          },
          {
            title: 'Community Rewards',
            description: 'Exclusive benefits and rewards for our NFT holders.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-500/20"
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Ready to Join?</h2>
        <p className="text-gray-400 mb-8">
          Don't miss out on this unique opportunity to be part of something extraordinary.
        </p>
        <Link
          to="/whitelist"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
        >
          Join Whitelist Now
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;