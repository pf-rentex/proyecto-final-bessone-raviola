const defaultTheme = require('./src/styles/index');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: defaultTheme,
  variants: {
    extend: {},
  },
  plugins: [],
}
