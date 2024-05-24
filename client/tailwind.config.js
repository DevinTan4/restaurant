/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      goudy: ["goudy-old-style"],
    },
    extend: {
      colors: {
        beige: "#E4C68F",
        "dark-beige": "#948562",
      },
      screens: {
        desktop: "1366px",
      },
    },
  },
  plugins: [],
};
