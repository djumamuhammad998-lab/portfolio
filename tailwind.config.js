/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#120a07',
        cardBg: '#1c110d',
        accentOrange: '#f97316',
        accentOrangeHover: '#ea580c',
      }
    },
  },
  plugins: [],
}