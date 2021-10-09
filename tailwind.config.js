const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: 'class',

  plugins: [require('@tailwindcss/aspect-ratio')],

  theme: {
    colors: {
      light: '#f2f2f2',
      dark: '#0d0d0d',
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      red: colors.red,
      transparent: 'transparent',
      current: 'currentColor',
    },

    fontFamily: {
      core: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      zIndex: {
        '-1': '-1',
        99: 99,
        100: 100,
        999: 999,
      },
      fontSize: {
        '10xl': '11.642rem',
        '11xl': '14.552rem',
        '12xl': '18.19rem',
        '13xl': '22.737rem',
        '14xl': '28.422rem',
        '15xl': '35.527rem',
        '16xl': '44.409rem',
        '17xl': '55.511rem',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      width: {
        '10w': '10wh',
        '20w': '20wh',
        '30w': '30wh',
        '40w': '40wh',
        '50w': '50wh',
        '60w': '60wh',
        '70w': '70wh',
        '80w': '80wh',
        '90w': '90wh',
        '100w': '100wh',
      },
    },
  },
}
