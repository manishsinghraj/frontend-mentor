import './App.css';
import illustration from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp"

function App() {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-Yellow font-FigTree text-base'>
        <div className='flex flex-col justify-center bg-white p-5 rounded-xl border-2 border-black h-full max-lg:w-[375px] lg:w-[384px] shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]'>
          <img src={illustration} alt='illustration'
            className='rounded-tl-xl rounded-tr-xl  ' />
          <div className='mt-6'>
            <button className='bg-Yellow px-4 py-2 rounded-lg font-extrabold cursor-default'>Learning</button>
            <p className='mt-4 font-bold'>Published 21 Dec 2023</p>
            <h2 className='font-extrabold text-[20px] mt-4 mb-4 hover:text-Yellow hover:cursor-pointer'>HTML & CSS foundations</h2>
            <p className='text-Grey'>
              These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
            <div className='mt-4 flex justify-start items-center gap-4'>
              <img src={avatar} alt='avatar'
                className='w-10' />
              <p className='font-extrabold text-black'>Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
