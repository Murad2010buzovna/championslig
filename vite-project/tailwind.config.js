/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '4rem',

    },
  },
  plugins: [flowbite.plugin()],
};



