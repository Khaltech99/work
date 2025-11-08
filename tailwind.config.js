/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.jsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

