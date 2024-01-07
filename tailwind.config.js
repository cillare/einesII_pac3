/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#106048',
      },
      fontFamily: {
        'primary': ["Hanken Grotesk", "sans-serif"],
        'pop': ["Cy Grotesk", "serif"],
      },
      screens: {
        '991': {'max': '991px'},
      },
      fontSize: {
        'h1': 'calc(1.375rem + 1.5vw)',
      },
    },
  },
  plugins: [],
}

