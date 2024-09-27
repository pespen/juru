/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'light-6': '#2f4858',
				'light-5': '#4e6b73',
				'light-4': '#758f8e',
				'light-3': '#a1b3ac',
				'light-2': '#cfd8cf',
				'light-1': '#fdfef7'
			},
			fontFamily: {
				muli: ['Muli', 'sans-serif']
			}
		}
	},
	plugins: []
};
