import SummaryList from "./SummaryList";
import { useState } from "react";
import reactionIcon from "./assets/images/icon-reaction.svg";
import memoryIcon from "./assets/images/icon-memory.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import visualIcon from "./assets/images/icon-visual.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {

  useGSAP(() => {
    gsap.fromTo('.score', {
      y: 200,
      opacity: 0
    },
      {
        y: 0,
        ease: "power1.inOut",
        opacity: 1,
        stagger: 0.2
      })

    gsap.fromTo('.info', {
      y: 40,
      opacity: 0
    },
      {
        y: 0,
        ease: "circ.inOut",
        opacity: 0.7,
        delay: 1,
      })

    gsap.fromTo('.summary', {
      y: 20,
      opacity: 0
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1
    })
  }, []);


  const [summaryData, setSummaryData] = useState([
    { category: "Reaction", value: 80, svg: reactionIcon, bgColor: 'bg-Light-red-bg', textColor: 'text-Light-red' },
    { category: "Memory", value: 92, svg: memoryIcon, bgColor: 'bg-Orangey-yellow-bg', textColor: 'text-Orangey-yellow' },
    { category: "Verbal", value: 61, svg: verbalIcon, bgColor: 'bg-Green-teal-bg', textColor: 'text-Green-teal' },
    { category: "Visual", value: 72, svg: visualIcon, bgColor: 'bg-Cobalt-blue-bg', textColor: 'text-Cobalt-blue' },
  ]);
  

  return (
    <>
      <main className="flex items-center justify-center sm:min-h-screen bg-White ">
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[700px] mx-auto text-font-parah font-Hanken-Grotesk shadow-2xl bg-White rounded-[36px]">
          <div className="bg-gradient-1 text-center text-white flex flex-col gap-5 p-5 rounded-b-[36px] sm:rounded-[36px]">
            <h1 className="text-Light-lavender font-font-w-bold sm:mt-2">Your Result</h1>
            <div className="bg-gradient-2 rounded-full w-36 h-36 sm:w-48  sm:h-48 flex items-center justify-center mx-auto">
              <div className="text-center">
                <span className="text-5xl font-font-w-extra-bold block p-2 sm:text-7xl score opacity-50"><span className="score">7</span><span className="score">6</span></span>
                <span className="opacity-50">of 100</span>
              </div>
            </div>
            <div className="px-10 text-center mb-4">
              <h2 className="text-2xl mb-2 font-font-w-bold text-Pale-blue score">Great</h2>
              <p className="text-[16px] opacity-70 info">You scored higher than 65 % of the people who have taken these tests.</p>
            </div>
          </div>

          <div className="px-8 py-6 rounded-[36px]">
            <h2 className="mb-5 font-font-w-extra-bold">Summary</h2>
            <div className="flex flex-col gap-[14px] text-[16px]  sm:text-[14px] font-font-w-bold">
              {summaryData.map((item, index) => {
                return (
                  <SummaryList item={item} key={index} />
                )
              })}
              <button className="text-center mt-2 w-full bg-Dark-gray-blue text-Pale-blue text-font-parah rounded-full px-4 py-3 hover:bg-gradient-1">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
