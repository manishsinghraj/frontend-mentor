import SummaryList from "./SummaryList";
import { useState } from "react";
import reactionIcon from "./assets/images/icon-reaction.svg";
import memoryIcon from "./assets/images/icon-memory.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import visualIcon from "./assets/images/icon-visual.svg";

function App() {

  // Your Result
  // 76
  // of 100

  // Great
  // You scored higher than 65 % of the people who have taken these tests.

  //   Summary

  // Reaction
  // 80 / 100

  // Memory
  // 92 / 100

  // Verbal
  // 61 / 100

  // Visual
  // 72 / 100

  // Continue

  const [summaryData, setSummaryData] = useState([
    { category: "Reaction", value: 80, svg: reactionIcon, bgColor: 'bg-Light-red-bg', textColor: 'text-Light-red' },
    { category: "Memory", value: 92, svg: memoryIcon, bgColor: 'bg-Orangey-yellow-bg', textColor: 'text-Orangey-yellow' },
    { category: "Verbal", value: 61, svg: verbalIcon, bgColor: 'bg-Green-teal-bg', textColor : 'text-Green-teal' },
    { category: "Visual", value: 72, svg: visualIcon, bgColor: 'bg-Cobalt-blue-bg', textColor: 'Cobalt-blue' },
  ]);

  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-2 text-font-parah font-Hanken-Grotesk bg-White">

        <div className="bg-gradient-1 text-center text-white flex flex-col gap-5 p-4 rounded-b-3xl">
          <h1>Your Result</h1>
          <div className="bg-gradient-2 rounded-full w-36  h-36 flex items-center justify-center mx-auto">
            <div className="text-center">
              <span className="text-5xl  font-font-w-extra-bold block p-2">76</span>
              <span className="opacity-50">of 100</span>
            </div>
          </div>
          <div className="px-10 text-center space-y-2 mb-6">
            <h2 className="text-2xl">Great</h2>
            <p className="text-[16px] opacity-70">You scored higher than 65 % of the people who have taken these tests.</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="mb-6">Summary</h2>
          <div className="flex flex-col gap-4">
            {summaryData.map((item, index) => {
              return (
                <SummaryList item={item} key={index} />
              )
            })
            }
          <button className="text-center mt-4 w-full bg-Dark-gray-blue text-White rounded-full p-4">
            Continue
          </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
