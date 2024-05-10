import { qrCode } from './assets/images'

function App() {

  return (
    <>
      <div className='flex justify-center items-center bg-Light-gray min-h-screen text-[15px]' >
        <div className='w-[320px] h-full bg-white p-4 rounded-[20px]'>
          <img src={qrCode} alt='qr code'
          className='rounded-[10px]'/>
          <div className='font-Outfit flex flex-col text-center gap-4 px-2 py-4'>
            <h2 className=' text-Dark-blue  font-extrabold text-[23px] px-1 leading-8'>
              Improve your front-end skills by building projects
            </h2>
            <p className='text-Grayish-blue px-1'>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
