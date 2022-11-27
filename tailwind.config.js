/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'dinblue': '#0000f8',
				'brown-meli': '#303126',
				'gray-meli': '#333',
				'background-meli': '#ebebeb'
			},
			backgroundImage: {
				'logo-large':
					"url('https://robertsmart.s3.sa-east-1.amazonaws.com/logo.png')",
				'logo-small':
					"url('https://robertsmart.s3.sa-east-1.amazonaws.com/logo.png')",
				promo:
					"url('https://robertsmart.s3.sa-east-1.amazonaws.com/logo.png')"
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif']
			},
			maxWidth: {
				homescreen: '1184px'
			}
		}
	},
	plugins: []
}
