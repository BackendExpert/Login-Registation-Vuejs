module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'lg': '1600px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
