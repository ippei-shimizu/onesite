/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      colors: {
        "nav01-blue-t": "#48C6EF",
        "nav01-blue-b": "#6F86D6",
        "nav02-blue-t": "#4FACFE",
        "nav02-blue-b": "#00F2FE",
        "nav03-blue-t": "#89F7FE",
        "nav03-blue-b": "#66A6FF",
        "nav04-blue-t": "#A1C4FD",
        "nav04-blue-b": "#C2E9FB",
      },
    },
  },
  plugins: [],
};
