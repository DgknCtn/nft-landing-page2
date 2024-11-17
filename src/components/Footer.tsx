import React from 'react';

const Footer = () => {
  const partners = [
    { name: 'Partner 1', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner 2', logo: 'https://via.placeholder.com/150' },
    { name: 'Partner 3', logo: 'https://via.placeholder.com/150' },
  ];

  return (
    <footer className="mt-20 bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition-colors duration-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>© 2024 VANTH NFT Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;