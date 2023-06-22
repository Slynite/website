/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px', 
      },
      colors: {
        primary: '#131313',
        secondary: '#f6f6f6',
        customGray: '#353535',
        'neutral-850': '#1a1a1a',
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
  plugins: [],
}
