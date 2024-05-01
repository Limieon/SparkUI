<script lang="ts">
	import '../main.pcss';
	import { _, locale } from 'svelte-i18n';

	import Button from '$spark/ui/Button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button>{$_('page.title')}</Button>
