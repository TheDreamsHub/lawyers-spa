/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots': "url('/src/assets/dots.png')",
        'logo': "url('/src/assets/logo.png')",
        'vectors': "url('/src/assets/vectors.png')",
        'hero': "url('/src/assets/hero_background.png')",
      }
    },
  },
  plugins: [],
}