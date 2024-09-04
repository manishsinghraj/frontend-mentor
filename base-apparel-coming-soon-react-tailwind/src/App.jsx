import logo from "./assets/images/logo.svg";
import EmailInput from "./components/EmailInput";
import { useEffect, useState } from "react";
// import heroMobile from "./assets/images/hero-mobile.jpg";
// import heroDesktop from "./assets/images/hero-desktop.jpg";
// import bgPatternDesktop from "./assets/images/bg-pattern-desktop.svg";


function App() {

  const [heroImage, setHeroImage] = useState('bg-heroMobile');


  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 640 ? setHeroImage('bg-heroDesktop') : setHeroImage('bg-heroMobile')
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);




  return (
    <>
      <main role="main" aria-label="base appareal coming soon page"
        className="flex flex-col sm:flex-row text-base font-josefin-sans">

        <div role="region"
          className={`sm:bg-patternDesktop bg-no-repeat bg-cover h-screen sm:flex sm:flex-col sm:space-y-10 sm:px-36 sm:py-8`}>

          <div className="p-7 sm:px-0">
            <img src={logo}
              alt="logo of Base Apparel"
              className="w-28 sm:w-auto" />
          </div>

          <div aria-hidden="true"
            className={`${heroImage} sm:hidden w-screen h-[250px] bg-no-repeat bg-cover`}>
          </div>

          <header role="banner" aria-label="Base Apparel announcement"
            className="flex justify-center items-center pt-14 pb-4 sm:pb-0 text-center leading-10 sm:leading-tight sm:justify-start sm:text-left">
            <h1 className="uppercase tracking-[14px] sm:text-[60px]">
              <span className="text-desaturated-red font-light">We're</span> <br />
              <span className="font-semibold">coming</span> <br />
              <span className="font-semibold">soon</span>
            </h1>
          </header>


          <section role="contentinfo" aria-label="description heading"
            className="text-center w-[85%] sm:w-[90%] m-auto text-desaturated-red font-normal sm:m-0">
            <p className="text-[15px] pb-10 sm:pb-0 sm:text-left sm:text-base">
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to
              stay up-to-date with announcements and our launch deals.
            </p>
          </section>

          <section className="flex justify-center items-center w-full sm:justify-start">
            <EmailInput />
          </section>

        </div>


        <div aria-hidden="true"
          className={`${heroImage} hidden sm:block w-full h-screen bg-no-repeat bg-cover xl:bg-cover`}>
        </div>

      </main>
    </>
  )
}

export default App
