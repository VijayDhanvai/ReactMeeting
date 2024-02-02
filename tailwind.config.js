/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  darkMode: "class", // 'media' for system  default theme
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
