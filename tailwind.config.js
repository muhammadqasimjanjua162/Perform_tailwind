/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "250px",
        tablet: "768px",
        // => @media (min-width: 992px) { ... }
      },
      fontSize: {
        xs: "0.6rem",
      },
      colors: {
        primary: "#243c5a",
      },
    },
  },
  plugins: [],
};
