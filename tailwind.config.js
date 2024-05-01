/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light', 'dark', 'business']
	},
	plugins: [require('daisyui')]
};
