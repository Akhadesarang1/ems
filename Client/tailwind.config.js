/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // New, smoother aurora animation for the background
        "aurora-bg": "aurora-bg 20s ease infinite",
      },
      keyframes: {
        "aurora-bg": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // This custom plugin adds a variant for the browser's autofill state.
      addVariant("autofill", "&:-webkit-autofill");
    },
  ],
};
