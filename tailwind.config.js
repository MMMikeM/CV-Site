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
          850: "#1d222b",
          925: "#0e121b",
          950: "#0b0d13",
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
