module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        10: '10px',
      },
      colors: {
        alert: '#f3173a',
        primary: {
          light: '#91DC5A', // Guac green
          default: '#5EAC24', // Green
          dark: '#47821C', // Dark green
        },
        secondary: '#1F2938',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
