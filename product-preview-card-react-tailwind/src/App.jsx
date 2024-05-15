import perfumeMobile from "./images/image-product-mobile.jpg";
import perfumeDesktop from "./images/image-product-desktop.jpg";
import cartIcon from "./images/icon-cart.svg";
import React, { useState, useEffect } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState(perfumeMobile);

  useEffect(() => {
    function handleResize() {
      setImageSrc(window.innerWidth >= 640 ? perfumeDesktop : perfumeMobile);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <>
      <main className="bg-Cream min-h-screen flex justify-center items-center">

        <div className="px-4 py-6 text-sm sm:flex sm:w-[600px] sm:h-[500px]">
          <img src={imageSrc} alt="perfume" className="w-full rounded-tr-lg rounded-tl-lg" />

          <div className="bg-white rounded-bl-lg rounded-br-lg p-6 ">
            <span className="font-Montserrat text-Dark-grayish-blue font-medium">P E R F U M E</span>

            <div className="px-1.2 py-2 mb-1">
              <h1 className="font-Fraunces text-Very-dark-blue font-bold">Gabrielle Essence Eau De Parfum</h1>
            </div>

            <p className="font-Montserrat font-medium text-Dark-grayish-blue leading-6">
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>

            <div className="mt-2 mb-2 py-4 flex items-center space-x-5">
              <h1 className="font-Fraunces font-bold text-Dark-cyan">$149.99</h1>
              <p className="line-through font-Montserrat font-medium text-Dark-grayish-blue">$169.99</p>
            </div>

            <button className="bg-Dark-cyan font-Montserrat font-medium flex justify-center items-center space-x-2 w-full rounded-lg py-4 text-White
            hover:bg-Dark-hover-cyan">
              <img src={cartIcon} /> <span>Add to Cart</span>
            </button>

          </div>

        </div>

      </main>
    </>
  )
}

export default App
