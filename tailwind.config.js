module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
