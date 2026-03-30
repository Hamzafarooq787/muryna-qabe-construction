/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors: {
        surface: "#fbf9f8",
        "on-surface": "#1b1c1c",
        "primary-container": "#ffd700",
        secondary: "#5f5e5e",
      },
    },
  },
  plugins: [],
};