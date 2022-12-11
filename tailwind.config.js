/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#191a1b",
        buttonOne: "#191a1b",
        buttonTwo: "#4C5FD5",
        main: "#DADBF1",
        searchBorder: "#dee2e6",
        back: "#DADBF1",
        footer: "#000000"
      }
    },
  },
  plugins: [],
}
