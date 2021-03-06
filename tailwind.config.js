module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: "Proxima Nova",
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: "#1D8954",
        dark: "#121212",
        light: "#282828",
        lightest: "#838383",
        darkest: "#191414",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
