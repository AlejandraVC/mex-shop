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
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem', // 12px
        x2s: '0.8125rem', // 13px
        sm: '0.875rem', // 14px
        base: '1rem', // Explicitely override defaults with font-size only to avoid line-height
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        x2l: '1.375rem', // 22px
        '2xl': '1.5rem', // 24px
        '2x2l': '1.625rem', // 26px
        '2x3l': '1.75rem', // 28px
        '3xl': '1.875rem', // 30px
        '3x2l': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '4x2l': '2.5rem', // 40px
        '4x3l': '2.75rem', // 44px
        '5xl': '3rem', // 48px
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
