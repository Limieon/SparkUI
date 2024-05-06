<script lang="ts">
	import LanguageSelector from '$spark/ui/LanguageSelector.svelte';
	import ThemeSwitcher from '$spark/ui/ThemeSwitcher.svelte';
	import Avatar from '$spark/ui/Avatar.svelte';

	import { AccountContainer } from '$spark/ui/account';

	let version = 'v1.0';
	let accountMenuOpen = false;
</script>

<svelte:head>
	<title>SparkUI ✨</title>
</svelte:head>

<div class="bg-base-300 h-screen w-screen cursor-default select-none overflow-y-hidden">
	<div class="grid h-full grid-cols-[55px_auto] grid-rows-[60px_auto] gap-1 p-2">
		<!-- Header -->
		<div class="col-span-2 row-span-1">
			<div class="block h-full w-full">
				<div class="group w-fit mt-1">
					<h1 class="float-left text-4xl font-extrabold tracking-tight">✨ SparkUI⚡</h1>
					<h1
						class="float-left text-4xl font-extrabold tracking-tight opacity-0 transition-opacity group-hover:opacity-100"
					>
						- {version}
					</h1>
				</div>

				<button
					class="w-14 h-14 float-right mr-2"
					on:click={() => {
						accountMenuOpen = !accountMenuOpen;
					}}
				>
					<Avatar
						avatar="https://picsum.photos/128"
						class="float-right -mt-1 hover:cursor-pointer"
					/>
				</button>

				<div
					class="absolute top-0 bottom-0 left-0 right-0 z-40 {accountMenuOpen
						? 'pointer-events-auto'
						: 'pointer-events-none'}"
					on:click={() => {
						accountMenuOpen = false;
					}}
				/>

				<AccountContainer
					name="Demo User"
					email="demoaccount@demo.com"
					class="absolute right-4 top-20 transition-[transform_opacity] origin-top-right {accountMenuOpen
						? 'opacity-100 scale-100 pointer-events-auto'
						: 'opacity-0 scale-50 pointer-events-none'}"
				/>

				<!--
					<div class="float-right grid grid-flow-col gap-2 h-full">
						<ThemeSwitcher class="w-48 rounded-lg" />
						<LanguageSelector class="w-48 rounded-lg" />
					</div>
				-->
			</div>
		</div>

		<!-- Sidebar Menu -->

		<div class="col-span-1 row-span-1 block h-full">
			<slot name="nav" />
		</div>

		<!-- Content -->
		<slot />
	</div>
</div>
