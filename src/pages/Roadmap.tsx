import React from 'react';

const roadmapData = [
  {
    quarter: 'Q1 2024',
    title: 'Launch Phase',
    items: [
      'Launch of Vanth',
      'Community building activities on Twitter and Discord',
      'Website development and optimization',
      'Collection preparation',
      'Character-specific comic book development'
    ]
  },
  {
    quarter: 'Q2 2024',
    title: 'Minting Phase',
    items: [
      'Whitelist wallet collection process',
      'Initiation of minting process',
      'Special rewards for legendary Vanth holders',
      'Daily rewards through Discord and Twitter channels post-mint'
    ]
  },
  {
    quarter: 'Q3 2024',
    title: 'Staking & Token Phase',
    items: [
      'Launch of staking pool',
      'Secondary market creator earnings arrangements and community profit sharing (to be included in staking pool)',
      'Announcement of $VNTH Token'
    ]
  },
  {
    quarter: 'Q4 2024',
    title: 'Exchange & Metaverse Phase',
    items: [
      'Listing of $VNTH Token on exchanges',
      'Vanth holders can stake $VNTH tokens from the staking pool',
      'Vanth metaverse space and collaboration with established collections',
      'Vanth Gaming launch announcement'
    ]
  },
  {
    quarter: 'Q1 2025',
    title: 'Gaming Phase',
    items: [
      'Vanth Gaming begins',
      'In-game events and token-focused daily and weekly rewards'
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          ROADMAP
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Quarter Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold px-4 py-1 rounded-full text-sm">
                  {phase.quarter}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-xl p-6 pt-8 backdrop-blur-sm group-hover:border-cyan-400/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">
                  {phase.title}
                </h3>

                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Connection Line (except for last item) */}
                {index < roadmapData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;