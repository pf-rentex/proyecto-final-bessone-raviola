const colors = require('tailwindcss/colors');
const ownColors = require('./colors');

module.exports = {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1768px',
    },
    colors: {
        ...ownColors,
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
        indigo: colors.indigo,
        green: colors.green,
        yellow: colors.yellow,
    },
    fontFamily: {
        primary: ['Fredoka One', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        boxShadow: {
            'inner-xl': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)',
        },
        outline: {
            error: '1.5px solid #e31212',
        },
        colors: {
            myOwn: '#004e7d',
        },
        spacing: {
            128: '32rem',
            144: '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        },
    },
};
