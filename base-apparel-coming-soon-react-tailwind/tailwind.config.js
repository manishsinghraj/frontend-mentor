/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // ### Primary
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-desaturated-red": "hsl(359, 75%, 89%)",
        "soft-red": "hsl(0, 93%, 68%)",

        // ### Neutral
        "dark-grayish-red": "hsl(0, 6%, 24%)",

      },
      fontFamily: {
        'josefin-sans': ["Josefin Sans", "sans-serif"],
      },
      // ### Gradients
      backgroundImage: {
        'gradient-1': "linear-gradient(135deg,  hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        'gradient-2': "linear-gradient(135deg,  hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        "heroDesktop": "url('./assets/images/hero-desktop.jpg')",
        "heroMobile": "url('./assets/images/hero-mobile.jpg')",
        "patternDesktop": "url('./assets/images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
}
