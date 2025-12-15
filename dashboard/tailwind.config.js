/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: {
					light: "oklch(98.4% 0.003 247.858)",
					dark: "oklch(20.8% 0.042 265.755)",
				},
				surface: {
					light: "oklch(92.9% 0.013 255.508)",
					dark: "oklch(27.9% 0.041 260.031)",
				},
				primary: {
					DEFAULT: "oklch(0.60 0.15 250)", // Blue
					dark: "oklch(0.65 0.15 250)",
				},
				secondary: {
					DEFAULT: "oklch(0.65 0.20 150)", // Green
					dark: "oklch(0.70 0.20 150)",
				},
				text: {
					main: {
						light: "oklch(0.20 0 0)",
						dark: "oklch(0.95 0 0)",
					},
					muted: {
						light: "oklch(0.55 0 0)",
						dark: "oklch(0.70 0 0)",
					},
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
