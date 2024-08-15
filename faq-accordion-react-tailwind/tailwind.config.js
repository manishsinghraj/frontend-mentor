/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple": "hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(278, 62%, 49%)",
      },
      fontWeight: {
        "font-w-small": 400,
        "font-w-normal": 600,
        "font-w-large": 700,
      },
      fontFamily: {
        "WorkSans": ["Work Sans", "sans-serif"]
      },
      screens: {
        'sm': '375px', // Custom breakpoint for small screens
        'md': '640px', 
        'lg': '768px', 
        'xl': '1024px', 
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}