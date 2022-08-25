/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				"2xl": "1620px",
			},
			fontFamily: {
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				textBlue: {
					dark: "#1C264A",
					DEFAULT: "#2E3552",
					light: "#656b82",
				},
				ctaOrange: "#FF821B",
				lightBlue: "#F3F3F8",
				offWhite: "#FCFCFD",
			},
		},
	},
	plugins: [],
};
