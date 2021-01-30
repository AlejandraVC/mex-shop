module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alert: '#f3173a',
        gray: {
          light: '#f6f6f6',
          medium: '#d2d2d2',
          dark: '#858585',
        },
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
      transitionTimingFunction: {
        'dynamic': 'cubic-bezier(0, 0.5, 0, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
