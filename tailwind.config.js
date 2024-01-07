/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#106048',
        'grey': 'rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        'primary': ["Hanken Grotesk", "sans-serif"],
        'pop': ["Cy Grotesk", "serif"],
      },
      screens: {
        's991': {'max': '991px'},
        's990': '990px',
      },
      fontSize: {
        'h1': 'calc(1.375rem + 1.5vw)',
      },
    },
  },
  plugins: [],
}

