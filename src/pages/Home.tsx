import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Countdown from 'react-countdown';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Home: React.FC = () => {
  const nfts = [
    { id: 1, image: '/images/nft1.png', name: 'NFT #1' },
    { id: 2, image: '/images/nft2.png', name: 'NFT #2' },
    { id: 3, image: '/images/nft3.png', name: 'NFT #3' },
    { id: 4, image: '/images/nft4.png', name: 'NFT #4' },
    { id: 5, image: '/images/nft5.png', name: 'NFT #5' },
  ];

  // Mint başlangıç zamanı (örnek: 7 gün sonra)
  const mintStartTime = Date.now() + 7 * 24 * 60 * 60 * 1000;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 p-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            VANTH NFT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Discover, Collect, and Stake Unique Digital Art
          </p>
          
          {/* Mint Countdown */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Mint Starts In</h3>
            <Countdown
              date={mintStartTime}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{days}</div>
                    <div className="text-sm text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{hours}</div>
                    <div className="text-sm text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{minutes}</div>
                    <div className="text-sm text-gray-400">Mins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{seconds}</div>
                    <div className="text-sm text-gray-400">Secs</div>
                  </div>
                </div>
              )}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* NFT Carousel */}
      <div className="py-20 bg-black/50 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
          Featured Collections
        </h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full max-w-6xl mx-auto"
        >
          {nfts.map((nft) => (
            <SwiperSlide key={nft.id} className="max-w-sm">
              <div className="relative group cursor-pointer mx-4">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full aspect-square object-cover rounded-2xl transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white text-xl font-semibold">{nft.name}</p>
                    <p className="text-gray-300 mt-2">Rare Digital Collectible</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;