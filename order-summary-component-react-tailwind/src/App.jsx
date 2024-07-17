import illustrationHero from "./images/illustration-hero.svg";
import iconMusic from "./images/icon-music.svg";

function App() {

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-pale-blue p-6 text-base font-red-hat sm:text-[14px]">
        <div className="bg-white rounded-xl overflow-hidden text-center max-w-[350px] shadow-2xl ">
          <img src={illustrationHero} alt="illustrationHero"></img>
          <div className="flex flex-col items-center py-8 px-7 gap-4">
            <h1 className="font-700">Order Summary</h1>
            <p className="opacity-60 font-500">You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!</p>
          </div>

          <div className="flex flex-col items-center px-5 gap-4 sm:px-7 ">
            <div className="w-full bg-very-pale-blue rounded-xl py-4">
              <div className="flex gap-8 justify-between px-4 items-center flex-wrap align-bottom">
                <div className="flex gap-4">
                  <img src={iconMusic} alt="iconMusic"></img>
                  <div className="text-left text-[15px] sm:text-[14px]">
                    <p className="font-900 ">Annual Plan</p>
                    <p className="opacity-60 font-700">$59.99/year</p>
                  </div>
                </div>
                <a href="#" className="underline font-900 text-[14px] sm:text-[13px]  text-bright-blue hover:text-opacity-70 hover:no-underline hover:cursor-pointer">Change</a>
              </div>
            </div>


            <button className="w-full bg-bright-blue  hover:bg-opacity-70 p-4 rounded-xl text-white font-900 shadow-2xl">Proceed to Payment</button>

            <p className="mb-8 font-700 opacity-60">Cancel Order</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
