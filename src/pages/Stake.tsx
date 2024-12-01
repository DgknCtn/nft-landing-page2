import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/connectors';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Stake: React.FC = () => {
  const { active, account, activate, deactivate } = useWeb3React();
  const [isStaking, setIsStaking] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');

  const connectWallet = async () => {
    try {
      await activate(injected);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      toast.error('Failed to connect wallet');
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    try {
      deactivate();
      toast.success('Wallet disconnected');
    } catch (error) {
      console.error(error);
    }
  };

  const handleStake = async () => {
    if (!stakeAmount || isNaN(Number(stakeAmount))) {
      toast.error('Please enter a valid amount');
      return;
    }
    setIsStaking(true);
    try {
      // Simulating stake transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Staking successful!');
      setStakeAmount('');
    } catch (error) {
      toast.error('Staking failed');
      console.error(error);
    } finally {
      setIsStaking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Wallet Connection */}
        <div className="flex justify-end mb-8">
          {!active ? (
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={disconnectWallet}
              className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all"
            >
              Disconnect {account?.slice(0, 6)}...{account?.slice(-4)}
            </button>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-gray-400 mb-2">Total Value Locked</h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              $4,234,567
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-gray-400 mb-2">APR</h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              12.5%
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-gray-400 mb-2">Your Rewards</h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {active ? '234.5 VNTH' : '0 VNTH'}
            </p>
          </div>
        </div>

        {/* Staking Interface */}
        {active && (
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Stake Your Tokens
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter amount to stake"
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={handleStake}
                disabled={isStaking || !stakeAmount}
                className={`px-8 py-2 rounded-lg font-semibold transition-all ${
                  isStaking || !stakeAmount
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                }`}
              >
                {isStaking ? 'Staking...' : 'Stake'}
              </button>
            </div>
          </div>
        )}

        {/* Connect Wallet Message */}
        {!active && (
          <div className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Connect Your Wallet
            </h2>
            <p className="text-gray-400">
              Connect your wallet to start staking and earning rewards
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stake;