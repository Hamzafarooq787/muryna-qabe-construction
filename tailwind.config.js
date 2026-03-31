/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
  extend: {
    colors: {
      background: '#0f172a',   // must exist
      text: '#f1f5f9',
      surface: '#1e293b',
      card: '#334155',
      accent: '#f59e0b',
    },
  },

  },
  plugins: [],
};