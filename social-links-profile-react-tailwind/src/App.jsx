import avatar from "./assets/images/avatar-jessica.jpeg"
import './App.css'
import Button from './components/Button'

function App() {


  const socialLinks = [
    {
      label: "GitHub",
      value: "https://github.com/manishsinghraj"
    },
    {
      label: "Frontend Mentor",
      value: "https://www.frontendmentor.io/profile/manishsinghraj"
    },
    {
      label: "LinkedIn",
      value: "https://www.frontendmentor.io/profile/manishsinghraj"
    },
    {
      label: "Twitter",
      value: "https://www.frontendmentor.io/profile/manishsinghraj"
    },
    {
      label: "Instagram",
      value: "https://www.frontendmentor.io/profile/manishsinghraj"
    },
  ];



  return (
    <>
      <section className="bg-Off-Black min-h-screen flex justify-center items-center text-[14px] max-sm:text-[12px] font-Inter p-6">

        <div className=" bg-Dark-Grey flex rounded-xl flex-col items-center px-7 py-8 w-[320px] h-full text-center max-sm:w-[300px]">
          <img src={avatar} alt="avatar"
            className=" rounded-full w-16"></img>

          <div className="flex flex-col items-center mt-4 ">
            <h2 className="text-white text-xl max-sm:text-[16px] ">Jessica Randall</h2>
            <p className="text-Green text-xs leading-8 max-sm:text-[10px] max-sm:leading-4">London, United Kingdom</p>
          </div>

          <p className="text-white mt-4 mb-2 text-xs">"Front-end developer and avid reader."</p>

          <div className="flex flex-col items-center w-full flex-1 gap-4 mt-4">
            {socialLinks.map((link) => {
              return (
                <div className="bg-Grey w-full rounded-lg p-2 hover:bg-Green text-white hover:text-black">
                  <Button label={link.label} value={link.value} />
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default App
