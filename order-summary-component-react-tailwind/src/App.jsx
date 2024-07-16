import illustrationHero from "./images/illustration-hero.svg";
import iconMusic from "./images/icon-music.svg";

function App() {

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-pale-blue p-6 text-base font-red-hat">
        <div className="bg-white rounded-xl overflow-hidden text-center ">
          <img src={illustrationHero}></img>
          <div className="flex flex-col items-center py-8 px-7 gap-4">
            <h1 className="font-700">Order Summary</h1>
            <p className="opacity-60 font-500">You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!</p>
          </div>

          <div className="flex flex-col items-center px-5 gap-4">
            <div className="w-full bg-very-pale-blue rounded-xl py-4">
              <div className="flex gap-8 justify-center items-center">
                <div className="flex gap-4">
                  <img src={iconMusic} alt="iconMusic"></img>
                  <div className="text-left ">
                    <p className="font-900">Annual Plan</p>
                    <p className="opacity-60 font-700">$59.99/year</p>
                  </div>
                </div>
                <a href="#" className="underline font-900  text-bright-blue hover:text-blue-800 visited:text-purple-600">Change</a>
              </div>
            </div>


            <button className="w-full bg-bright-blue p-4 rounded-xl text-white font-900 shadow-2xl">Proceed to Payment</button>

            <p className="mb-6 font-700 opacity-60">Cancel Order</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
