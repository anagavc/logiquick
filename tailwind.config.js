/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sec: "#05BB75",
      pry: {
        50: "#F0F9FF",
        100: "#232E51",
      },
      red: {
        100: "#EB5757",
        200: "#e91e63",
      },
      white: "#ffffff",
      current: "currentColor",
      grey: "#AAC0C5",
    },
    fontFamily: {
      heading: ["Poppins"],
      body: ["Lato"],
    },
    extend: {
      scale: {
        flip: "-1",
      },
    },
  },
  plugins: [],
};
