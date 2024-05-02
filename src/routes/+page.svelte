<script lang="ts">
	import PageLayout from '$spark/layouts/MainLayout.svelte';
	import { _ } from 'svelte-i18n';

	import {
		Txt2Img,
		Img2Img,
		InstalledModels,
		ModelBrowser,
		Settings,
		OutputImages,
		Downloads,
		Queue,
		type Pages,
		pages
	} from '$pages';

	import ThemeSwitcher from '$spark/ui/ThemeSwitcher.svelte';

	import IconSettings from 'lucide-svelte/icons/settings';

	let page: Pages = 'txt2img';
	let settingsOpen = false;
</script>

<PageLayout>
	<div slot="nav" class="h-full">
		{#each pages as p}
			<div class="tooltip tooltip-right" data-tip={$_(p.title)}>
				<button
					class="btn mb-2 h-[48px] w-[48px] p-2 {page === p.page ? 'btn-primary' : ''}"
					on:click={() => {
						page = p.page;
					}}
				>
					<svelte:component this={p.icon} />
				</button>
			</div>
		{/each}

		<!--
			<Separator class="mb-4 mt-2 w-[48px]" />
		-->

		<div class="absolute left-2 bottom-0 tooltip tooltip-right" data-tip="Settings...">
			<button class="btn mb-2 h-[48px] w-[48px] p-2" on:click={() => {}}>
				<IconSettings />
			</button>
		</div>
	</div>

	{#if page === 'txt2img'}
		<Txt2Img />
	{:else if page === 'img2img'}
		<Img2Img />
	{:else if page === 'modelBrowser'}
		<ModelBrowser />
	{:else if page === 'installedModels'}
		<InstalledModels />
	{:else if page === 'outputImages'}
		<OutputImages />
	{:else if page === 'queue'}
		<Queue />
	{:else if page === 'downloads'}
		<Downloads />
	{/if}
</PageLayout>
