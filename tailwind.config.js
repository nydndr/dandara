module.exports = {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		typography: {
			default: {
				h2: {
					fontSize: "1.2em",
				},
			},
		},
		extend: {
			colors: {
				cover: "#FCFCFC",
				primary: "#92014A",
				secondary: "#FFC703",
				tertiary: "#92FF4F",
				codegray: "#151515",
			},
			fontFamily: {
				coda: ['"Fira Code"', "monospaced"],
				condensed: ['"Roboto Condensed"', "sans-serif"],
			},
			fontSize: {
				// prettier-ignore
				'7xl': '5rem',
				"8xl": "8rem",
			},
		},
		variants: {
			animation: ["responsive", "hover", "focus"],
		},
	},
};
