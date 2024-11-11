/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nohemi': ['Nohemi', 'sans-serif'],
        'nohemi-ext': ['Nohemi ExtBd', 'sans-serif'],
      },
      colors: {
        'primary': '#EEFE05',
      }
    },
  },
  plugins: [],
}