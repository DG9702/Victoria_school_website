/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        school: {
          red: '#8c191b',
          orange: '#e98724',
          green: '#0b9444',
          darkGreen: '#056839',
          gray: '#353131',
          lightGray: '#f5f5f5',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        vollkorn: ['Vollkorn', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};