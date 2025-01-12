/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['Mooli', 'sans-serif'], // Add the custom font here
      },
      boxShadow: {
        gold: '0px 2px 10px rgba(255, 215, 0, 0.9)', // Gold shadow
      },
      colors: {
        customBg: '#ecd8c0', // Add your custom color
      },
    },
  },
  plugins: [],
}

