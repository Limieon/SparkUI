<script lang="ts">
	import { Popup } from '$spark/ui/popup';

	export let open: boolean = false;

	function onApply() {}
	function onClose() {}
	function onCancel() {}
</script>

<Popup bind:open title="Settings" close="OK" {onApply} {onCancel} {onClose}>
	<div class="grid grid-cols-[20%_auto] h-full gap-2">
		<ul class="menu overflow-y-auto p-2">
			<li><a href="#general">General</a></li>
			<li><a href="#server">Server</a></li>
			<li>
				<ul>
					<li><a href="#test">Test</a></li>
				</ul>
			</li>
		</ul>

		<div class="overflow-y-auto border-l-2 border-neutral-content p-2">
			<section id="general" />
			<h2 class="underline">General</h2>
			{#each { length: 200 } as _}
				<p>-</p>
			{/each}
			<section id="server" />
			<h2 class="underline">Server</h2>
			{#each { length: 50 } as _}
				<p>-</p>
			{/each}
			<section id="test" />
			<h3>Test</h3>
			{#each { length: 150 } as _}
				<p>-</p>
			{/each}
		</div>
	</div>
</Popup>
