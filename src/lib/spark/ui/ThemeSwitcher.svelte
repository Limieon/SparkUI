<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import IconSun from 'lucide-svelte/icons/sun';
	import IconMoon from 'lucide-svelte/icons/moon';

	onMount(() => {
		themeChange(false);
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

	let value = 1;
	let theme = themes[1];

	function onChnage() {
		value++;
		if (value >= themes.length) value = 0;

		theme = themes[value];
		console.log(theme);
	}

	let classNames = '';
	export { classNames as class };
</script>

<button class="btn p-0 {classNames} justify-normal pl-2" on:click={onChnage}>
	<svelte:component this={themes[value].icon} />
	<p class="text-lg ml-1">{themes[value].name}</p>
</button>
