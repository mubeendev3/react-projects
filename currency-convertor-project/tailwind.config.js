/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom border colors
        customBorderColor: {
          DEFAULT: '#00E7EC', // Custom border color
          hover: '#00FF00',   // Custom border color on hover
          focus: '#0000FF',   // Custom border color when focused
          active: '#FFFF00',  // Custom border color when active
        },
      },
    },
  },
  plugins: [],
}

