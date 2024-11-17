import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Whitepaper = () => {
  const sections = [
    {
      title: 'Introduction',
      content: 'VANTH represents a revolutionary approach to digital collectibles, combining unique artwork with blockchain technology. Our collection of 4,444 NFTs introduces innovative features and a sustainable ecosystem.',
    },
    {
      title: 'Tokenomics',
      content: 'The VNTH token serves as the backbone of our ecosystem, enabling staking rewards and governance participation. Total supply and distribution mechanisms are designed to ensure long-term sustainability.',
    },
    {
      title: 'Staking Mechanism',
      content: 'VANTH NFT holders can stake their assets to earn VNTH tokens. The staking system is designed to reward long-term holders while maintaining ecosystem stability.',
    },
    {
      title: 'Community Governance',
      content: "Token holders will have the ability to participate in key decisions affecting the project's future through a decentralized governance system.",
    },
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Whitepaper
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-200">
            <FileText className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            The VANTH NFT collection represents a groundbreaking initiative in the digital art space, combining unique artwork with innovative tokenomics and community-driven governance. This whitepaper outlines our vision, technology, and roadmap for creating a sustainable digital art ecosystem.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-purple-500/10 border border-purple-500/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-purple-400">Download Full Version</h3>
          <p className="text-gray-300 mb-4">
            Access the complete whitepaper for detailed technical specifications, tokenomics, and ecosystem details.
          </p>
          <button className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Download Full Whitepaper</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Whitepaper;