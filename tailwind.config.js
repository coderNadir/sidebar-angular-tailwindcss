/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Roboto"],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
