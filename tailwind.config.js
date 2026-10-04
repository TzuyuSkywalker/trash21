/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        fondo: 'bisque',
        primary: '#49129C',
        secondary: {
          DEFAULT: '#831266',
          100: '#840086',
          200: '#C51297',
        },
        tertiary: '#EF2967',
      },
      fontFamily: {
        'work-black': ['sans-serif'],
        'work-light': ['sans-serif'],
        'work-medium': ['sans-serif'],
      },
    },
  },
  plugins: [],
};
