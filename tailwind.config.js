/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fbcb7e',
          300: '#f9a842',
          400: '#f78c1e',
          500: '#f97316',
          600: '#ea5a0c',
          700: '#c2440c',
          800: '#9a3611',
          900: '#7c2f12',
        },
      },
    },
  },
  plugins: [],
}

