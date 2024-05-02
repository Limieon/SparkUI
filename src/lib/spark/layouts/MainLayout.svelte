<script lang="ts">
	let version = 'v1.0';
</script>

<svelte:head>
	<title>SparkUI ✨</title>
</svelte:head>

<div class="bg-base-300 h-screen w-screen cursor-default select-none overflow-y-hidden">
	<div class="grid h-full grid-cols-[55px_auto] grid-rows-[50px_auto] gap-1 p-2">
		<!-- Header -->
		<div class="col-span-2 row-span-1">
			<div class="block h-full w-full">
				<div class="group w-fit">
					<h1 class="float-left text-4xl font-extrabold tracking-tight">✨ SparkUI⚡</h1>
					<h1
						class="float-left text-4xl font-extrabold tracking-tight opacity-0 transition-opacity group-hover:opacity-100"
					>
						- {version}
					</h1>
				</div>
			</div>
		</div>

		<!-- Sidebar Menu -->

		<div class="col-span-1 row-span-1 block">
			<slot name="nav" />
		</div>

		<!-- Content -->
		<slot />
	</div>
</div>
