/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bomani: {
          bg: '#FEFBF3',
          primary: '#EF9587',
          peach: '#EEC3B4',
          accent: '#285D66',
        }
      }
    }
  },
  plugins: []
}


