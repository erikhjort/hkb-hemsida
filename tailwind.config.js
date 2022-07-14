/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hkbgray: "#d6d3d6",
        hkbgraydarkmode: "#5c5c5c",
        hkbred: "#7e052e",
        hkbtext: "#000000",
        hkbdarkmodetext: "#ffffff",
        hkbbg: "#ffffff",
        hkbdarkmodebg: "#1e1e1e",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
