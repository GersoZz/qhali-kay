/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'serif'],
        body: ['Roboto', 'sans-serif'],
        decoration: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6FFF5',
          100: '#CCFEEA',
          200: '#99FDD5',
          300: '#66FCC0',
          400: '#33FBAB',
          500: '#00FA96',
          600: '#00C878',
          700: '#00965A',
          800: '#00643C',
          900: '#00321E',
        },
        secondary: {
          50: '#FFFDE6',
          100: '#FFF9B3',
          200: '#FFF799',
          300: '#FFF466',
          400: '#FFF033',
          500: '#FFEC00',
          600: '#CCBD00',
          700: '#998E00',
          800: '#665E00',
          900: '#332F00',
        },
        background: '#F8F9FF',
        accent: '#03050F',
      },
    },
  },
  plugins: [],
}

