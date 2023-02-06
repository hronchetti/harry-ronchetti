const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,tsx}", "./app/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
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
      transitionDelay: {
        150: "150ms",
        300: "300ms",
        450: "450ms",
        600: "600ms",
        750: "750ms",
        900: "900ms",
        1050: "1050ms",
        1200: "1200ms",
        1350: "1350ms",
        1500: "1500ms",
      },
      borderRadius: {
        5: "1.25rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        30: "7.5rem",
      },
      padding: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
}
