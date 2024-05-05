<script lang="ts">
	import IconX from 'lucide-svelte/icons/x';

	export let title: string;

	export let open: boolean = false;

	export let customFooter: boolean = false;
	export let customHeader: boolean = false;

	export let apply = 'Apply';
	export let close = 'Close';
	export let cancel = 'Cancel';

	export let onApply: (() => void) | undefined = undefined;
	export let onClose: (() => void) | undefined = undefined;
	export let onCancel: (() => void) | undefined = undefined;
</script>

<div
	class="absolute bg-black top-0 bottom-0 left-0 right-0 z-40 transition-all {open
		? 'bg-opacity-50 backdrop-filter backdrop-blur-lg pointer-events-auto '
		: 'bg-opacity-0 pointer-events-none'}"
	on:click={onClose}
/>

<div
	class="fixed rounded-xl bg-base-300 z-50 top-48 bottom-48 left-96 right-96 flex flex-col backdrop:blur-xl {open
		? 'opacity-100 translate-y-0'
		: 'opacity-0 -translate-y-36'} transition-all"
>
	<!-- Header -->
	<div class="bg-primary rounded-t-xl left-0 right-0 p-2 h-fit">
		{#if customHeader}
			<slot name="header" />
		{:else}
			<button
				class="btn btn-ghost border-neutral-content border-2 w-12 h-12 p-0 float-right"
				on:click={onClose}><IconX /></button
			>

			<h1>{title}</h1>
		{/if}
	</div>

	<!-- Content -->
	<div class="p-2 mb-16 overflow-hidden flex-1">
		<slot />
	</div>

	<!-- Footr -->
	<hr class="w-full absolute bottom-16" />
	<div class="absolute bottom-2 right-2 w-fit">
		{#if customFooter}
			<slot name="footer" />
		{:else}
			<div class="grid grid-flow-col gap-2">
				{#if onClose != undefined}
					<button class="btn btn-primary w-32" on:click={onClose}>{close}</button>
				{/if}
				{#if onCancel != undefined}
					<button class="btn btn-ghost border-neutral-content border-2 w-32" on:click={onCancel}
						>{cancel}</button
					>
				{/if}
				{#if onApply != undefined}
					<button class="btn btn-ghost border-neutral-content border-2 w-32" on:click={onApply}
						>{apply}</button
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
