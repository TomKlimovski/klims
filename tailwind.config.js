const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite;',
      },
      colors: {
        //  Future Color Scheme
      },
      fontFamily: {
        workSans: ['Work Sans'],
        dmSans: ['DM Sans'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
      indigo: colors.indigo,
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
      rotate: ['first', 'last'],
      backgroundColor: ['first'],
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
