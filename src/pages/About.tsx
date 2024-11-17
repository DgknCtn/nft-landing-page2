import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gem, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Secure Blockchain',
      description: 'Built on reliable blockchain technology ensuring authenticity and ownership',
    },
    {
      icon: <Gem className="w-8 h-8 text-purple-500" />,
      title: 'Unique Artwork',
      description: 'Each VANTH NFT is uniquely generated with rare attributes and traits',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Strong Community',
      description: 'Join thousands of collectors and artists in our growing ecosystem',
    },
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          About VANTH
        </h1>
        
        <div className="mb-12 bg-black/30 p-8 rounded-lg backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            VANTH is a groundbreaking NFT collection featuring 4,444 unique digital artworks. Each piece is meticulously crafted to represent the fusion of art and blockchain technology, creating a new standard in the digital collectibles space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 p-6 rounded-lg backdrop-blur-sm text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We aim to create a vibrant ecosystem where art, technology, and community converge. Through VANTH, we're building more than just a collection - we're creating a platform for digital expression and value creation.
            </p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">The Future</h2>
            <p className="text-gray-300">
              With the introduction of VNTH tokens and staking mechanisms, we're developing a sustainable ecosystem that rewards our community members while fostering long-term growth and engagement.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;