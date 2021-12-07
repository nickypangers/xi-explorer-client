module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#0ecc5f",
        secondary: "#F0F7EE",
        dark: "#042A2B",
        action: "#6184D8",
        alert: "#A31621",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
