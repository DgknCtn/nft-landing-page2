import React from 'react';
import { Link } from 'react-router-dom';
import NFTGallery from '../components/NFTGallery';
import Traits from '../components/Traits';
import CountdownTimer from '../components/Countdown';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Countdown Timer */}
        <div className="mt-16">
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#" // Mint sitesi URL'si buraya eklenecek
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            Mint Now
          </a>
        </div>

        {/* NFT Gallery */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Featured Collection
          </h2>
          <NFTGallery />
        </div>

        {/* Traits */}
        <div className="mt-20">
          <Traits />
        </div>
      </div>
    </main>
  );
};

export default Home;