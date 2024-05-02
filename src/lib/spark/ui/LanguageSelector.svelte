<script lang="ts">
	import 'flag-icons/css/flag-icons.min.css';
	import { validators } from 'tailwind-merge';

	import { locale } from 'svelte-i18n';

	type Language = {
		name: string;
		locale: string;
		icon: string;
	};

	const languages: Language[] = [
		{
			name: 'German',
			locale: 'de',
			icon: '🇩🇪'
		},
		{
			name: 'English',
			locale: 'en',
			icon: '🇺🇸'
		}
	].sort((a, b) => {
		return a.name < b.name ? -1 : 1;
	});

	let value = 0;
	let language = languages[0];

	function onChnage() {
		language = languages[value];
		console.log(language);
		locale.set(language.locale);
	}

	let classNames = '';
	export { classNames as class };
</script>

<select class="select text-xl {classNames}" bind:value on:change={onChnage}>
	{#each languages as l, i}
		<option value={i} class="text-lg">{l.icon} {l.name}</option>
	{/each}
</select>
