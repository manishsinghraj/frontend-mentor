/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ## Primary 
        "Light-red-bg": "hsla(0, 100%, 67%, 0.1)",
        "Orangey-yellow-bg": "hsla(39, 100%, 56%, 0.1)",
        "Green-teal-bg": "hsla(166, 100%, 37%, 0.1)",
        "Cobalt-blue-bg": "hsla(234, 85%, 45%, 0.1)",

        "Light-red": "hsl(0, 100%, 67%)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",

        // ## Gradients
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",
        "Violet-blue": "hsla(256, 72%, 46%, 1)",
        "Persian-blue": "hsla(241, 72%, 46%, 0)",

        // ## Neutral
        "White": "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        "Hanken-Grotesk": ["Hanken Grotesk", "sans-serif"]
      },
      fontWeight: {
        "font-w-normal": 500,
        "font-w-bold": 700,
        "font-w-extra-bold": 800,
      },
      fontSize: {
        "font-parah": "18px"
      },
      backgroundImage: theme => ({
        'gradient-1': `linear-gradient(${theme('colors.Light-slate-blue')}, ${theme('colors.Light-royal-blue')})`,
        'gradient-2': `linear-gradient(${theme('colors.Violet-blue')}, ${theme('colors.Persian-blue')})`,
      })
    },
  },
  plugins: [],
}
