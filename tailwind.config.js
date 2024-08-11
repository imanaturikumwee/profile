/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-green': '#4EE1A0',
      'light-black': '#242424',
      'dark-black' : '#151515',
      'dark-gray' :'#D9D9D9',
       'white' : '#FFFFFF'


    },
    extend: {
      backgroundImage: {
        'ie-bg': "url('./src/assets/emma.jpg')",
      }
    },
  },
  plugins: [],
}

