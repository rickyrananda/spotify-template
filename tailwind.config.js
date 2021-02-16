const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        'gray-sidebar' : '#121212',
        'gray-main-content' : '#181818',
        'gray-friends' : '#232323',
        'gray-bottom' : '#282C34',
        'gray-button' : '#1A1A1A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
