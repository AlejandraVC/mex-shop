module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alert: '#f3173a',
        primary: {
          default: '#14b6e6',
          dark: '#119bc4',
        },
        secondary: '#9b9b9b',
        success: {
          default: '#509e2f',
          dark: '#458A2E',
        },
        text: {
          default: '#303030',
          light: '#4f4f4f',
        },
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
