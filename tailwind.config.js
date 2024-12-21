/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f9fafb",
      black: "#030712",
      yellow: "#ffde00",
      blue: "#3b4cca",
      red: "#ef4444",
    },
    extend: {
      screens: {
        "custom-sm": { max: "768px" },
      },
    },
  },
  plugins: [],
}

