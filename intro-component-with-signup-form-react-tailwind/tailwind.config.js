/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Red": "hsl(0, 100%, 74%)",
        "Green": "hsl(154, 59%, 51%)",
        "Blue": "hsl(248, 32%, 49%)",
        "Dark-Blue": "hsl(249, 10%, 26%)",
        "Grayish-Blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans serif"]
      },
      backgroundImage: {
        "bgIntroDesktop": "url('./src/assets/images/bg-intro-desktop.png')",
        "bgIntroMobile": "url('./src/assets/images/bg-intro-mobile.png')"
      }
    },
  },
  plugins: [],
}

