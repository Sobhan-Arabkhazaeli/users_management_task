/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Neometric_500: "Neometric medium",
      },
      colors: {
        main: "var(--color-main)",
        Navy: "var(--color-Navy)",
        zinc: "var(--color-zinc)",
        purple: "var(--color-purple)",
        menu: "var(--color-menu)",
      },
    },
  },
  plugins: [],
};
