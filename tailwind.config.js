// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/team/Chuol.JPG')",
        'footer-texture': "url('/team/Camelo.JPG')",
      },
      colors:{
        red:{
          1000:'#fd0000',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
