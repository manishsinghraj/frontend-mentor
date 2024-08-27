/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Strong-Cyan": "hsl(171, 66%, 44%)",
        "Dark-Strong-Cyan": "hsl(171, 67%, 38%)", // border

        "Light-Blue": "hsl(233, 100%, 69%)",
        "Dark-Light-Blue": "hsl(233, 83%, 64%)", // border

        "Dark-Grayish-Blue": "hsl(210, 10%, 33%)",
        "Grayish-Blue": "hsl(201, 11%, 66%)",
      },
      fontSize: {
        "base": "18px"
      },
      fontFamily: {
        'Bai-Jamjuree': ['Bai Jamjuree', 'sans-serif'],
      },
      fontWeight: {
        "w-normal": 400,
        "w-medium": 600
      },
      backgroundImage: {
        'bgHeaderMobile': "url('./src/assets/images/bg-header-mobile.png') absolute", //not in use
        'bgHeaderDesktop': "url('./src/assets/images/bg-header-desktop.png')", //not in use
      }
    },
  },
  plugins: [],
}


