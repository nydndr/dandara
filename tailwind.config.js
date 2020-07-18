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
				primary: "#212121",
				secondary: "#6F6F6F",
				tertiary: "#C4C4C4",
			},
			fontFamily: {
				condensed: ['"Roboto Condensed"', "sans-serif"],
				fatface: ['"Abril Fatface"', "cursive"],
				vast: ['"Vast Shadow"', "cursive"],
			},
			fontSize: {
				// prettier-ignore
				'7xl': '5rem',
				"8xl": "8rem",
			},
		},
	},
};
