/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#df7128',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [require("flowbite/plugin")],
};

