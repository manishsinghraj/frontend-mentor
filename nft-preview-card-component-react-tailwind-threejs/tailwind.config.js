/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Soft-blue": "hsl(215, 51%, 70%)",
        "Cyan": "hsl(178, 100%, 50%)",


        "Very-dark-blue-main": "hsl(217, 54%, 11%)",
        "Very-dark-blue-card": "hsl(216, 50%, 16%)",
        "Very-dark-blue-line": "hsl(215, 32%, 27%)",
        "White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "Outfit": ["Outfit", "sans-serif"]
      },
      fontSize: {
        "base": "18px"
      },
      fontWeight: {
        "300": 300,
        "400": 400,
        "600": 600,
      }
    },
  },
  plugins: [],
}

