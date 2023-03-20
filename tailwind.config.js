/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
      "./index.html",
      "./Src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
            "Raleway", ...defaultTheme.fontFamily.sans,
        ],
      },
        colors: {
            "brand-main-background-color-1": "#dadce0",
            "brand-blue-1": "#1967d2",
            "brand-green-1": "#137333"
        }
    },
  },
  plugins: [],
}
