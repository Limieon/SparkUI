<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';

	let currentTheme = 0;

	onMount(() => {
		themeChange(false);

		const rootElement = document.documentElement;
		const theme = rootElement.getAttribute('data-theme');

		for (let i = 0; i < themes.length; ++i) {
			if (themes[i].theme == theme) {
				currentTheme = i;
				break;
			}
		}

		console.log(theme);
	});

	type Theme = {
		name: string;
		theme: string;
		icon: any;
	};

	const themes: Theme[] = [
		{
			name: 'Light',
			theme: 'light',
			icon: IconSun
		},
		{
			name: 'Dark',
			theme: 'dark',
			icon: IconMoon
		}
	];

	let theme = themes[currentTheme];

	function onChnage() {
		currentTheme++;
		if (currentTheme >= themes.length) currentTheme = 0;

		theme = themes[currentTheme];
		console.log(theme);
	}

	let classNames = '';
	export { classNames as class };
</script>

<button
	data-toggle-theme={themes[currentTheme].theme}
	class="btn p-0 {classNames} justify-normal pl-2"
	on:click={onChnage}
>
	<svelte:component this={themes[currentTheme].icon} />
	<p class="text-lg ml-1">{themes[currentTheme].name}</p>
</button>
