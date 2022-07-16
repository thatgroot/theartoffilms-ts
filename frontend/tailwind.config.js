/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#0d1117",
      gray: "#161b22",
      "gray-light": "#2C2C2C",
      yellow: "#fab702",
      white: "#eeeeee",
    },
  },
  plugins: [],
};
