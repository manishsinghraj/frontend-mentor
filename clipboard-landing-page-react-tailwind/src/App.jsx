import Button from "./components/Button";

import {
  logo,
  imageComputer,
  imageDevices,
  iconBlacklist,
  iconText,
  iconPreview,
  logoGoogle,
  logoIbm,
  logoMicrosoft,
  logoHp,
  logoVectorGraphics,
  iconFacebook,
  iconTwitter,
  iconInstagram,
  bgHeaderMobile,
  bgHeaderDesktop
} from './assets/images';
import { useEffect, useState } from "react";


function App() {

  const buttons = [
    {
      id: 1,
      label: "Download for iOS",
      link: "null",
      bg: "bg-Strong-Cyan",
      border: "border-Dark-Strong-Cyan"
    },
    {
      id: 2,
      label: "Download for Mac",
      link: "null",
      bg: "bg-Light-Blue",
      border: "border-Dark-Light-Blue"
    }
  ];

  const features = [
    {
      id: 1,
      icon: iconBlacklist,
      name: "Create blacklists",
      description: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
    },
    {
      id: 2,
      icon: iconText,
      name: "Plain text snippets",
      description: "Remove unwanted formatting from copied text for a consistent look."
    },
    {
      id: 3,
      icon: iconPreview,
      name: "Sneak preview",
      description: "Quick preview of all snippets on your Clipboard for easy access."
    },
  ];

  const companyLogos = [
    {
      id: 1,
      logo: logoGoogle,
      name: "google"
    },
    {
      id: 2,
      logo: logoIbm,
      name: "ibm"
    },
    {
      id: 3,
      logo: logoMicrosoft,
      name: "microsoft"
    },
    {
      id: 4,
      logo: logoHp,
      name: "hp"
    },
    {
      id: 5,
      logo: logoVectorGraphics,
      name: "vector graphics"
    },
  ];

  const footerLinks = [
    {
      label: 'FAQs',
      href: '#'
    },
    {
      label: 'Contact Us',
      href: '#'
    },
    {
      label: 'Privacy Policy',
      href: '#'
    },
    {
      label: 'Press Kit',
      href: '#'
    },
    {
      label: 'Install Guide',
      href: '#'
    },
  ];

  const [imageSrc, setImageSrc] = useState(bgHeaderMobile);

  useEffect(() => {
    const handleResize = () => {
      return setImageSrc(window.innerWidth >= 640 ? bgHeaderDesktop : bgHeaderMobile);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <>
      <header>
        <img src={imageSrc} alt="" className="absolute w-full -z-10" />
      </header>

      <main className="text-center p-6 text-[17px] sm:text-base font-Bai-Jamjuree text-Grayish-Blue">

        <section className="mt-28">
          <img src={logo} alt="logo" className="mb-14"></img>
          <div className="max-w-[650px] space-y-6">
            <h1>A history of everything you copy</h1>
            <p> Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
          </div>

          <Button buttons={buttons} />
        </section>


        <section>
          <h2 className="">Keep track of your snippets</h2>
          <p className="pb-12">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
          <div className="flex flex-col gap-12">
            <img src={imageComputer} alt="image computer" className="mb-12" />

            <div className="flex flex-col gap-4">
              <h3>Quick Search</h3>
              <p>Easily search your snippets by content, category, web address, application, and more.</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3>Complete History</h3>
              <p>Retrieve any snippets from the first moment you started using the app.</p>
            </div>

          </div>
        </section>


        <section>
          <h2>Access Clipboard Anywhere</h2>
          <p className="pb-7">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
          <img src={imageDevices} alt="image Devices" />
        </section>

        <section>
          <h2>Supercharge your workflow</h2>
          <p className="pb-20">We’ve got the tools to boost your productivity.</p>

          {features.map((item, _) => {
            return (<div key={item.id} className="flex flex-col justify-center items-center gap-10">
              <img src={item.icon} alt={item.name} />
              <div className="space-y-6 mb-10">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>)
          })}
        </section>


        <section>
          {companyLogos.map((logo, _) => {
            return (
              <div key={logo.id}>
                <div className="space-y-6 mb-10">
                  <img src={logo.logo} alt={logo.name + " logo"} />
                </div>
              </div>
            )
          })}
        </section>


        <section>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
          <Button buttons={buttons} />
        </section>

      </main>

      <footer className="bg-Grayish-Blue p-10 text-center text-[17px] font-Bai-Jamjure">
        <div className="flex flex-col items-center justify-center gap-10">
          <img src={logo} alt="logo" className="w-12"></img>
          <ul className="flex flex-col gap-6 items-center justify-center mb-10">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-10">
          <img src={iconFacebook} alt="Facebook icon" />
          <img src={iconTwitter} alt="Twitter icon" />
          <img src={iconInstagram} alt="Instagram icon" />
        </div>
      </footer>


    </>
  )
}

export default App
