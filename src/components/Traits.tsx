import React from 'react';

const traitCategories = [
  {
    name: 'Type',
    description: 'Unique character types that define the core essence of each Vanth',
    totalVariants: 8,
    rarityLevels: [
      { name: 'Common', percentage: 45 },
      { name: 'Rare', percentage: 35 },
      { name: 'Epic', percentage: 15 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Background',
    description: 'Mystical environments and atmospheric settings',
    totalVariants: 15,
    rarityLevels: [
      { name: 'Common', percentage: 50 },
      { name: 'Rare', percentage: 30 },
      { name: 'Epic', percentage: 15 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Hair',
    description: 'Distinctive hairstyles ranging from ethereal to fierce',
    totalVariants: 20,
    rarityLevels: [
      { name: 'Common', percentage: 45 },
      { name: 'Rare', percentage: 35 },
      { name: 'Epic', percentage: 15 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Eyes',
    description: 'Mesmerizing eye designs with unique patterns and colors',
    totalVariants: 18,
    rarityLevels: [
      { name: 'Common', percentage: 40 },
      { name: 'Rare', percentage: 35 },
      { name: 'Epic', percentage: 20 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Mouth',
    description: 'Expressive mouth features that convey character',
    totalVariants: 12,
    rarityLevels: [
      { name: 'Common', percentage: 45 },
      { name: 'Rare', percentage: 35 },
      { name: 'Epic', percentage: 15 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Clothes',
    description: 'Stylish and mythical attire that defines character status',
    totalVariants: 25,
    rarityLevels: [
      { name: 'Common', percentage: 40 },
      { name: 'Rare', percentage: 35 },
      { name: 'Epic', percentage: 20 },
      { name: 'Legendary', percentage: 5 }
    ]
  },
  {
    name: 'Weapon',
    description: 'Powerful weapons and magical artifacts',
    totalVariants: 20,
    rarityLevels: [
      { name: 'Common', percentage: 40 },
      { name: 'Rare', percentage: 30 },
      { name: 'Epic', percentage: 20 },
      { name: 'Legendary', percentage: 10 }
    ]
  },
  {
    name: 'Accessories',
    description: 'Special items and decorative elements that add unique flair',
    totalVariants: 22,
    rarityLevels: [
      { name: 'Common', percentage: 45 },
      { name: 'Rare', percentage: 30 },
      { name: 'Epic', percentage: 20 },
      { name: 'Legendary', percentage: 5 }
    ]
  }
];

const RarityBar: React.FC<{ percentage: number; color: string }> = ({ percentage, color }) => (
  <div className="h-1.5 rounded-full bg-gray-700/50 overflow-hidden">
    <div
      className={`h-full ${color} transition-all duration-500 rounded-full`}
      style={{ width: `${percentage}%` }}
    />
  </div>
);

const Traits: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {traitCategories.map((trait, index) => (
        <div
          key={index}
          className="p-5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group hover:transform hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
              {trait.name}
            </h3>
            <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
              {trait.totalVariants}
            </span>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 h-12">
            {trait.description}
          </p>

          <div className="space-y-2.5">
            {trait.rarityLevels.map((level, levelIndex) => (
              <div key={levelIndex} className="group/rarity">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs font-medium ${
                    level.name === 'Common' ? 'text-gray-400 group-hover/rarity:text-gray-300' :
                    level.name === 'Rare' ? 'text-blue-400 group-hover/rarity:text-blue-300' :
                    level.name === 'Epic' ? 'text-purple-400 group-hover/rarity:text-purple-300' :
                    'text-yellow-400 group-hover/rarity:text-yellow-300'
                  } transition-colors`}>
                    {level.name}
                  </span>
                  <span className="text-xs text-gray-500">{level.percentage}%</span>
                </div>
                <RarityBar
                  percentage={level.percentage}
                  color={
                    level.name === 'Common' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                    level.name === 'Rare' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                    level.name === 'Epic' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                    'bg-gradient-to-r from-yellow-400 to-yellow-500'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Traits;
