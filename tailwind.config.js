/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg,#67e8f9,#dc2687)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};