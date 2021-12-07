const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit', 
	darkMode: 'class', //false,  or 'media' or 'class'
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	], 
	theme: {
		extend: {
			zIndex: {
				'-1': '-1',
				'-2': '-2',
				'-3': '-3',
				'60': '60',
				'70': '70',
			},
			padding: {
				"youtube": "56.25%"
			},
			borderRadius: { 
				"full": "50%",
				"pill": "9999px",
			},  
			colors: {
				fuchsia: colors.fuchsia,
				cyan: colors.cyan, 
				teal: colors.teal,
				orange: colors.orange,
			}, 
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
