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
      },
      animation: {
        growX: 'growX 1s ease forwards',
        growY: 'growY 1s ease forwards',
      },
      keyframes: {
        growX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        growY: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      }
    },
  },
  plugins: [],
}