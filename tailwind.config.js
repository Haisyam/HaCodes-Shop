/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flyonui/dist/js/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1300px",
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    require("@iconify/tailwind"),
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet", "corporate", "luxury", "soft"],
  },
};
