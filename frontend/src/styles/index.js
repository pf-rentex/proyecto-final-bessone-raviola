const colors = require('tailwindcss/colors');
const ownColors = require('./colors');

module.exports = {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    colors: {
        ...ownColors,
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        lightGray: '#D7DFE2',
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
    },
    fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        colors: {
          'myOwn': '#004e7d',
        },
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        }
    }
}
