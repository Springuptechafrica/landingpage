module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#fcf3f4",
          500: "#adadad",
          700: "#636363",
          900: "#38030b",
        },
        black: { 900: "#000000", "900_0a": "#0000000a" },
        red: { 900: "#cd0a24", "900_01": "#ca0925" },
        pink: { 800: "#a90836" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 4.05px  14px 1.01px #0000000a" },
      fontFamily: { inter: "Inter", proximanova: "Proxima Nova" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
