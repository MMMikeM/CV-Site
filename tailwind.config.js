const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: colors.emerald,
        primary: colors.lightBlue,
        gray: {
          850: "#18212F",
          925: "#0D121E",
          950: "#090C14",
        },
      },
      fontFamily: {
        sans: [
          "Recursive",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
