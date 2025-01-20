/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '650px', 
      },
    },
  },
  plugins: [],
}