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
      <main className="bg-Cream min-h-screen text-sm font-Montserrat grid place-content-center">

        <div className="mx-4 overflow-hidden rounded-lg sm:max-w-[600px] sm:grid sm:grid-cols-2">
          <img src={imageSrc} alt="perfume" />

          <div className="bg-white p-6 grid place-content-center gap-4 sm:px-8 sm:gap-5">
            <p className=" text-Dark-grayish-blue font-medium uppercase tracking-[0.25em]">perfume</p>

            <h1 className="text-Very-dark-blue font-Fraunces font-bold">Gabrielle Essence Eau De Parfum</h1>

            <p className="text-Dark-grayish-blue font-Montserrat font-medium leading-6">
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>

            <div className="flex items-center space-x-5">
              <h1 className="text-Dark-cyan font-Fraunces font-bold">$149.99</h1>
              <p className="text-Dark-grayish-blue line-through font-Montserrat font-medium ">$169.99</p>
            </div>

            <button className="bg-Dark-cyan text-White font-Montserrat font-bold flex justify-center items-center space-x-2 rounded-lg py-4 border-none
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
