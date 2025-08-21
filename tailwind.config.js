/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'verdana': ['Verdana'],
        system: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Ubuntu', 'sans-serif']
      },
      colors: {
        cyan: '#054752',
        accent: '#11A753',
        'firm-blue': '#1a3b5d',
        'border': '#9FA4A5',
        'firm-gray': '#253238',
        'footer-link': '#607d8b'
      },
      backgroundColor: {
        'accent': '#11A753',
        'button-idle': '#13C1AC'
      },
      backgroundImage: {
        background: `url('/src/assets/images/background.jpg')`
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-slow': 'fade-in 2s ease-out forwards'
      },
      boxShadow: {
        input: '0px 2px 4px 3px rgba(0, 0, 0, 0.6)'
      }
    }
  },
  plugins: []
}
