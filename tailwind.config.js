module.exports = {
	purge: ["./components/**/*.js", "./pages/**/*.js"],
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
				yellow: "#FFE400",
				yellowplus: "#FECD1A",
			},
			fontFamily: {
				fivo: ['"Fivo Sans Modern"', "sans-serif"],
				manrope: ['"Manrope"', "sans-serif"],
			},
			fontSize: {
				"16xl": "15rem",
				"11xl": "10rem",
			},
		},
	},
	variants: {
		animation: ["responsive", "hover", "focus"],
	},
	plugins: [require("@tailwindcss/typography")],
};
