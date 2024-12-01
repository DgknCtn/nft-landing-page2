import React from 'react';
import { motion } from 'framer-motion';
import nft1 from '../assets/nft1.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft4 from '../assets/nft4.png';
import nft5 from '../assets/nft5.png';

const Gallery: React.FC = () => {
  const nfts = [
    { id: 1, image: nft1 },
    { id: 2, image: nft2 },
    { id: 3, image: nft3 },
    { id: 4, image: nft4 },
    { id: 5, image: nft5 }
  ];

  return (
    <div className="py-12 space-y-8 overflow-hidden">
      {/* Üst şerit - Sağa kayan */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex gap-8 w-max"
        >
          {[...nfts, ...nfts, ...nfts].map((nft, index) => (
            <motion.div
              key={`${nft.id}-${index}`}
              className="flex-none w-[300px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={nft.image} alt={`NFT ${nft.id}`} className="w-full h-[300px] object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Alt şerit - Sola kayan */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
          className="flex gap-8 w-max"
        >
          {[...nfts, ...nfts, ...nfts].map((nft, index) => (
            <div
              key={`${nft.id}-${index}-bottom}`}
              className="flex-none w-[250px] rounded-lg overflow-hidden opacity-75 hover:opacity-100 transition-opacity"
            >
              <img src={nft.image} alt={`NFT ${nft.id}`} className="w-full h-[250px] object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
