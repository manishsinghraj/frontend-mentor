import { useState } from 'react';
import iconStar from "./assets/images/icon-star.svg";
import FAQ from './FAQ.jsx';

function App() {
  const [faqs, setFaqs] = useState([
    {
      q: "What is Frontend Mentor, and how will it help me?",
      a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      q: "Is Frontend Mentor free?",
      a: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      q: "Can I use Frontend Mentor projects in my portfolio?",
      a: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      q: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      a: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ]);

  return (
    <>
      <main className='flex justify-center items-center min-h-screen bg-Light-pink bg-no-repeat bg-[url("./assets/images/background-pattern-mobile.svg")] sm:bg-[url("./assets/images/background-pattern-desktop.svg")] xl:bg-repeat-x'>
        <div className='w-[85%] sm:max-w-[550px] bg-White rounded-lg font-WorkSans text-base p-7 absolute top-36'>
          <div className='flex items-center gap-4 mb-4'>
            <img src={iconStar} alt="iconStar" className='w-6 h-6' />
            <h1 className='font-font-w-large'>FAQs</h1>
          </div>
          <div>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
