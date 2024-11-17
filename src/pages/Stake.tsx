import React from 'react';
import { Lock } from 'lucide-react';

const Stake = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg max-w-2xl w-full">
        <div className="text-center">
          <Lock className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Staking Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            Stake your VANTH NFTs to earn VNTH tokens. This feature will be available after the collection launch.
          </p>
          <div className="bg-black/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Staking Benefits</h3>
            <ul className="text-left text-gray-400 space-y-2">
              <li>• Earn VNTH tokens daily</li>
              <li>• Access to exclusive rewards</li>
              <li>• Participate in governance</li>
              <li>• Enhanced community benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;