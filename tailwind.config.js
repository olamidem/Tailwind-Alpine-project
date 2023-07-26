/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "#F3613C",
        brightRedLight: "#F5866A",
        brightRedSupLight: " #FFCCCB",
        darkBlue: "hsl (228, 39%, 23%)",
        darkGrayishBlue: "#90A7A7",
        veryDarkBlue: "#000133",
        veryPaleRed: "hsl (13, 100%, 96%)",
        veryLightGray: "#FAFAFA",
        veryLightOrange: "#FFF0EB",
      },
    },
  },
  plugins: [],
};
