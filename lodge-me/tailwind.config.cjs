/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('./Assets/ourproductImg.png')",
      },
    },
  },
  plugins: [],
};