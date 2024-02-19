/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navbarBg: "#111111",
        navbarTextColor: "#CCCCCC",
        navbarRed: "#FF0000",
        mainOrange: "#EB7813",
        sidebarColor: "#EFEFEF",
      },
      fontFamily: {
        sans: "Fira Sans",
        times: "Merriweather",
      },
    },
  },
  plugins: [],
};
