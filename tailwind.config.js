/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['business'],
					primary: '#3730a3', // Indigo-800
					secondary: '#1d4ed8', // Blue-700
					'secondary-content': '#fafafa', // Neutral-50
					accent: '#fbbf24', // Amber-400
					neutral: '#262626', // Neutral-800
					'base-100': '#27272a', // Zinc-800
					'base-200': '#18181b', // Zinc-900
					'base-300': '#09090b' // Zinc-950
				}
			},
			'business'
		]
	},
	plugins: [require('daisyui')]
};
