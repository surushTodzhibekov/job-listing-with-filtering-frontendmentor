/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "c-primary": "hsl(180, 29%, 50%)",
      "c-neutral-lightest": "hsl(180, 52%, 96%)",
      "c-neutral-light": "hsl(180, 31%, 90%)",
      "c-neutral-lighter": "hsl(180, 52%, 96%)",
      "c-neutral-dark": "hsl(180, 8%, 52%)",
      "c-neutral-darker": "hsl(180, 14%, 20%)",
    },
    fontFamily: {
      primary: ["League Spartan", "sans-serif"],
    },
    fontSize: {
      lg: "1.25rem",
      md: "0.938rem",
    },
  },
  plugins: [],
};
