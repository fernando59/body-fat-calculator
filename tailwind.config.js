/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants:{
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}
