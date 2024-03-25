/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'heroBanner': "url('/src/assets/heroBanner.png')"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

