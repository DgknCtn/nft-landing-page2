import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'About', path: '/about' },
      { name: 'Roadmap', path: '/roadmap' },
      { name: 'Whitepaper', path: '/whitepaper' },
    ],
    community: [
      { name: 'Whitelist', path: '/whitelist' },
      { name: 'Stake', path: '/stake' },
    ],
    social: [
      { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/vanthnft' },
      { name: 'Discord', icon: <MessageCircle className="h-5 w-5" />, url: 'https://discord.gg/vanthnft' },
      { name: 'Website', icon: <Globe className="h-5 w-5" />, url: 'https://vanthnft.com' },
    ],
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              VANTH
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Join the exclusive VANTH NFT community and be part of the future of digital art and gaming.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            {currentYear} VANTH NFT Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;