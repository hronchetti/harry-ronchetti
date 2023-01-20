/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx}",
    "./app/**/*.{html,js,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "grey-100": "#121926",
        "grey-90": "#202939",
        "grey-80": "#364152",
        "grey-70": "#4B5565",
        "grey-60": "#697586",
        "grey-50": "#9AA4B2",
        "grey-40": "#CDD5DF",
        "grey-30": "#E3E8EF",
        "grey-20": "#EEF2F6",
        "grey-10": "#F8FAFC",
        yellow: "#FAC515",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
}
