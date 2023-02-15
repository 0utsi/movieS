/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(15rem, 1fr))'
			},
			transitionDuration: {
				'0': '0ms',
				'2000': '2000ms',
			},
		},
	},
	plugins: [],
}
