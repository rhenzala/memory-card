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
      gray: "#6b7280",
      "dark-gray": "#1f2937",
      "light-gray": "#e5e7eb",
      red: "#ef4444",
      rose: "#f43f5e",
    },
    extend: {},
  },
  plugins: [],
}

