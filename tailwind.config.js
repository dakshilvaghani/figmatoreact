module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        blue: { 100: "var(--blue_100)" },
        blue_gray: { 900: "var(--blue_gray_900)" },
        gray: { 500: "var(--gray_500)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: { rubik: "Rubik", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
