module.exports = {
	purge: {
		enabled: true,
		content: ["./src/**/*.js", "./pages/*.js", "./components/*.js"],
	},
	theme: {
		typography: {
			default: {
				css: {
					h2: {
						fontFamily: "Fira Code",
						color: "black",
						fontSize: "1.5em",
					},
					color: "#333",
					a: {
						color: "#333",
						"&:hover": {
							color: "#92014A",
						},
					},
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
	},
	variants: {
		animation: ["responsive", "hover", "focus"],
	},
	plugins: [require("@tailwindcss/typography")],
};
