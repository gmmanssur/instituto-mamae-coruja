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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll var(--speed, 30s) linear infinite",
      },
    },
  },
  plugins: [],
};