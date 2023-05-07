const Colors = {
	'primary-100': 'hsl(216, 30%, 68%)',
	'primary-200': 'hsl(256, 26%, 20%)',
	'neutral-100': 'hsl(0, 0%, 98%)',
	'neutral-200': 'hsl(273, 4%, 51%)',
	'neutral-300': 'hsl(270, 9%, 17%)',
}

const SERVICES = [
	{
		id: 0,
		title: 'Snappy Process',
		image: 'assets/images/icon-snappy-process.svg',
		description:
			'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
	},
	{
		id: 1,
		title: 'Affordable Prices',
		image: 'assets/images/icon-affordable-prices.svg',
		description:
			'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
	},
	{
		id: 2,
		title: 'People First',
		image: 'assets/images/icon-people-first.svg',
		description:
			'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
	},
]

const FOOTER_LINKS = [
	{
		title: 'Our Company',
		links: ['How We Work', 'Why Insure?', 'View Plans', 'Reviews'],
	},
	{
		title: 'Help Me',
		links: ['FAQ', 'Terms of Use', 'Privacy Policy', 'Cookies'],
	},
	{
		title: 'Contact',
		links: ['Sales', 'Support', 'Live Chat'],
	},
	{
		title: 'Others',
		links: ['Careers', 'Press', 'Licenses'],
	},
]

export default {
	Colors,
	SERVICES,
	FOOTER_LINKS,
}
