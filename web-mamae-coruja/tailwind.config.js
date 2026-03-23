/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        franks: ["Franks", "sans-serif"],
        polly: ["Polly Rounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};