/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': 'hsl(216, 30%, 68%)',
				'primary-200': 'hsl(256, 26%, 20%)',
				'neutral-100': 'hsl(0, 0%, 98%)',
				'neutral-200': 'hsl(273, 4%, 51%)',
				'neutral-300': 'hsl(270, 9%, 17%)',
			},
			fontSize: {
				body: '16px',
			},
			fontFamily: {
				heading: ['DM Serif Display', 'serif'],
				sans: ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
