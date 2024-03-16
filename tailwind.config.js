/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#1D98F0', 
        searchGray:'#536471',
        footer:'#536471',
      }
    },
  },
  plugins: [],
}

