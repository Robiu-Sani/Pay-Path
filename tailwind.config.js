/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(135deg, #016c6b, #054b5a, #073d51, #0a2f47, #0a2540)",
      },
    },
  },
  plugins: [require("daisyui")],
};
