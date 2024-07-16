/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',

        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontSize: {
        'base': '16px', 
      },
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif'],
      },
      fontWeight: {
        '500': 500,
        '700': 700,
        '900': 900,
      },
    },
  },
  plugins: [],
}
