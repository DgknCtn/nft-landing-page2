import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'current',
      items: [
        'Community Building & Social Media Launch',
        'Website Development & Launch',
        'Art Creation & Development',
        'Whitelist Opening & Early Access'
      ],
      date: 'Q1 2024'
    },
    {
      phase: 'Phase 2',
      title: 'Pre-Launch',
      status: 'upcoming',
      items: [
        'Smart Contract Development & Audit',
        'Marketing Campaign & Partnerships',
        'Whitepaper Release',
        'Community Events & Giveaways'
      ],
      date: 'Q2 2024'
    },
    {
      phase: 'Phase 3',
      title: 'Launch',
      status: 'upcoming',
      items: [
        'Whitelist Mint Event',
        'Public Mint Launch',
        'Secondary Market Listing',
        'Staking Platform Development'
      ],
      date: 'Q3 2024'
    },
    {
      phase: 'Phase 4',
      title: 'Expansion',
      status: 'upcoming',
      items: [
        'Token Launch & Distribution',
        'DAO Governance Implementation',
        'Exclusive Holder Benefits',
        'Future Collections & Partnerships'
      ],
      date: 'Q4 2024'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          Project Roadmap
        </motion.h1>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full opacity-20" />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/20 z-20" />

                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-8`}>
                  {/* Date */}
                  <div className={`w-32 text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-cyan-400 font-semibold">{phase.date}</span>
                  </div>

                  {/* Content */}
                  <div className="w-1/2 bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-cyan-400">
                        {phase.phase}
                      </h2>
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'current' 
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'bg-gray-800/50 text-gray-400'
                      }`}>
                        {phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-teal-400 mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;