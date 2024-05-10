/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Yellow": "hsl(47, 88%, 63%)",
        "White": "hsl(0, 0%, 100%)",
        "Grey": "hsl(0, 0%, 50%)",
        "Black": "hsl(0, 0%, 7%)"
      },
      fontFamily: {
        "FigTree": ["Figtree", 'sans-serif']
      }
    },
  },
  plugins: [],
}