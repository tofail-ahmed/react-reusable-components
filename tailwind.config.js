/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg,#15803d,#dc2626)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};