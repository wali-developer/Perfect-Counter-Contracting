/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181F2A',
        'darkBlue': '#0C2A68',
        'darkYellow': '#D38312',
        'darkBlack': '#1A1A1A',
        'textGray': '#676767',
        'white': '#fff',
        'black': '#000',
        'light-bg': '#E9ECE8',
        'secondaryRed': {
          DEFAULT: '#C81BB2',
          dark: '#A83279',
        },
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
    }
  },
  plugins: [],
}
