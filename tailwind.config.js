module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1600px', 
      },
      colors: {
        primary: '#131313',
        secondary: '#f6f6f6',
        customGray: '#353535',
        gradient: {
          primary: "#23B4E8",
          secondary: "#2AF598",
        },
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
    },
  },
}
