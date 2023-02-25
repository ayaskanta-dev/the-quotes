/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark': '#171717',
        'light': '#f5f5f5',
      },
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
