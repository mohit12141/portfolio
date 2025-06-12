/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  // Scan all your components for classes
  ],
  darkMode: 'class',  // Enables class-based dark mode via <html class="dark">
  theme: {
    extend: {
      colors: {
        primary: '#66A5AD',    // Your custom primary color
        secondary: '#C4DFE6',  // Your custom secondary color
        textDark: '#1F2937'    // For better dark mode support
      }
    }
  },
  plugins: []
}
