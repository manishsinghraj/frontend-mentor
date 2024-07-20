import React, { useState } from 'react';
import imageEquilibrium from './assets/images/image-equilibrium.jpg';
import iconEthereumsvg from './assets/images/icon-ethereum.svg';
import iconClock from './assets/images/icon-clock.svg';
import imageAvatar from './assets/images/image-avatar.png';
import ThreejsCube from './ThreejsCube.jsx';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <main className="flex justify-center items-center min-h-screen bg-Very-dark-blue-main p-4">
      <div className="p-5 bg-Very-dark-blue-card rounded-xl text-base text-Soft-blue max-w-[345px]">
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imageEquilibrium} alt="imageEquilibrium" className="rounded-lg group-hover:opacity-40" />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg ">
              <ThreejsCube />
            </div>
          )}
        </div>
        <div className="mt-6">
          <h1 className="text-2xl text-White font-600 mb-4 hover:text-Cyan hover:cursor-pointer">
            Equilibrium #3429
          </h1>
          <p className="mb-4">Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-center items-center gap-2">
            <img src={iconEthereumsvg} alt="iconEthereumsvg" className="w-3" />
            <p className="font-600 text-Cyan">0.041 ETH</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={iconClock} alt="iconClock" className="w-5" />
            <p>3 days left</p>
          </div>
        </div>
        <div className="flex gap-4 border-t border-Very-dark-blue-line pt-4 items-center">
          <img src={imageAvatar} alt="imageAvatar" className="w-9 ring-2 ring-White rounded-full" />
          <p>
            Creation of <span className="text-White hover:text-Cyan hover:cursor-pointer">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
