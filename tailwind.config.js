/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appearAbruptR: {
          '0%': { opacity: 0.1, transform: 'translate(-10px,0px)'},
          '90%': { opacity: 0.1, transform: 'translate(-10px,0px)'},
          '100%': {opacity: 1, transform: 'translate(0px,0px)'}
        },
        appearAbruptL: {
          '0%': { opacity: 0.1, transform: 'translate(10px,0px)'},
          '90%': { opacity: 0.1, transform: 'translate(10px,0px)'},
          '100%': {opacity: 1, transform: 'translate(0px,0px)'}
        }
      },
      animation: {
        'appear1': 'appearAbruptR 0.5s linear',
        'appear2': 'appearAbruptL 0.7s linear',
      },
      fontFamily: {
        Bebas: ['Bebas Neue'],
        Abel: ['Abel'],
        DM: ['DM Sans'],
      }
    },
  },
  plugins: [],
}

