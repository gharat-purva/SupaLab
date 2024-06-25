// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'customBlue': '#809fb8',
        '618af3': '#618af3',
        'darkgreen': '#1ad598',
        'green': "#d1f7ea",
        'gray': '#f9fbfc',
        'darkgray': "#f1f4f9",
        'darkest': "#809fb8"

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
