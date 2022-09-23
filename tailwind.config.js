/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      minWidth: {
        48: "48rem",
      },
      colors: {
        "nav01-blue-t": "#48C6EF",
        "nav01-blue-v": "#97aeed",
        "nav01-blue-b": "#beccff",
        "nav02-blue-t": "#4FACFE",
        "nav02-blue-v": "#6ac3ff",
        "nav02-blue-b": "#00F2FE",
        "nav03-blue-t": "#89F7FE",
        "nav03-blue-v": "#87c8f5",
        "nav03-blue-b": "#66A6FF",
        "nav04-blue-t": "#A1C4FD",
        "nav04-blue-v": "#a0c5ff",
        "nav04-blue-b": "#C2E9FB",
        "post-bg-t": "#a3d5ff",
        "post-bg-b": "#ccfbff",
        "git-icon-t": "#000",
        "git-icon-b": "#434343",
        "code-icon-t": "#485563",
        "code-icon-b": "#29323c",
        "twitter-icon-t": "#00f2fe",
        "twitter-icon-b": "#4facfe",
        "instagram-icon-t": "#d57eeb",
        "instagram-icon-b": "#fccb90",
      },
      screens: {
        xl: [{ min: "1000px", max: "1400px" }],
        lg: { max: "1000px" },
        md: { max: "768px" },
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
