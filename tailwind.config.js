/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0072F5",
        secondary: "#7828C8",
        success: "#17C964",
        warning: "#F5A524",
        error: "#F31260",
      },
    },
  },
  plugins: [],
};
