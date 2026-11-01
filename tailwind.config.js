/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#263D32",
        ivory: "#F5F3ED",
        stone: "#D8D0C1",
        charcoal: "#343936",
        sage: "#A5A18F",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(38, 61, 50, 0.05)",
        lift: "0 8px 20px -10px rgba(38, 61, 50, 0.25)",
      },
    },
  },
  plugins: [],
};
