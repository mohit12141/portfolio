/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue 500
        accent: "#1E40AF", // Blue 800
        highlight: "#DBEAFE", // Blue 100
        background: "#F8FAFC", // Slate 50
        textDark: "#1E293B",
        textLight: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
