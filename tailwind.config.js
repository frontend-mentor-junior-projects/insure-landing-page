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
			backgroundImage: {
				'mobile-nav':
					"url('../public/assets/images/bg-pattern-mobile-nav.svg')",
				'hww-desktop':
					"url('../public/assets/images/bg-pattern-how-we-work-desktop.svg')",
				'hww-mobile':
					"url('../public/assets/images/bg-pattern-how-we-work-mobile.svg')",
				'footer-desktop':
					"url('../public/assets/images/bg-pattern-footer-desktop.svg')",
				'footer-mobile':
					"url('../public/assets/images/bg-pattern-footer-mobile.svg')",
				'pattern-left-mobile':
					"url('../public/assets/images/bg-pattern-intro-left-mobile.svg')",
				'pattern-right-mobile':
					"url('../public/assets/images/bg-pattern-intro-right-mobile.svg')",
				'patterns-mobile':
					"url('../public/assets/images/bg-pattern-intro-left-mobile.svg'), url('../public/assets/images/bg-pattern-intro-right-mobile.svg')",
			},
		},
	},
	plugins: [],
}
