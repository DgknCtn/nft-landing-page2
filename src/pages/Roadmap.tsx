import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch & Community Building',
      items: [
        'Community launch on Discord and Twitter',
        'Whitelist registration opens',
        'Website launch',
        'Community events and giveaways',
      ],
      status: 'current',
    },
    {
      phase: 'Phase 2',
      title: 'Minting & Collection Release',
      items: [
        'Whitelist mint begins',
        'Public mint opens',
        'Collection reveal',
        'Secondary market listings',
      ],
      status: 'upcoming',
    },
    {
      phase: 'Phase 3',
      title: 'VNTH Token Launch',
      items: [
        'VNTH token development',
        'Smart contract audit',
        'Token distribution plan',
        'Staking mechanism development',
      ],
      status: 'upcoming',
    },
    {
      phase: 'Phase 4',
      title: 'Staking & Rewards',
      items: [
        'Staking platform launch',
        'VNTH rewards distribution begins',
        'Exclusive holder benefits',
        'Partnership announcements',
      ],
      status: 'upcoming',
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
          Project Roadmap
        </h1>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-semibold text-purple-400">{phase.phase}</span>
                  <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${
                    phase.status === 'current' 
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-gray-800/50 text-gray-400'
                  }`}>
                    {phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;