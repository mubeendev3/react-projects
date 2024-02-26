/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#3AB795', // Define your custom color
        'custom-background': '#2B2D42', // Another custom color
      },
    },
  },
  plugins: [],
}

