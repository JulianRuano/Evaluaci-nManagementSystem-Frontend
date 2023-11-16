/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#E6E6E6',
        secondary: '#777777',
        highlightColor: '#49ACD7'
      }
    }
  },
  plugins: []
}
