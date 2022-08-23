/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        textBlue: {
          dark: "#1C264A",
          DEFAULT: "#2E3552",
        },
        ctaOrange: "#FF821B",
        lightBlue: "#F3F3F8",
        offWhite: "#FCFCFD",
      },
    },
  },
  plugins: [],
};
