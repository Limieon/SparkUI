<script lang="ts">
	import Avatar from '$spark/ui/Avatar.svelte';

	import IconUser from 'lucide-svelte/icons/user-round';
	import IconEdit from 'lucide-svelte/icons/pencil';
	import IconManage from 'lucide-svelte/icons/settings';
	import IconLogout from 'lucide-svelte/icons/log-out';

	export let name;
	export let email;

	let classNames: string = '';
	export { classNames as class };
</script>

<div
	class="fixed z-50 bg-base-100 w-fit rounded-xl border-neutral-content border-2 drop-shadow-2xl {classNames}"
>
	<div class="grid grid-cols-[max-content_auto] p-4">
		<Avatar avatar="https://picsum.photos/128" class="w-14 h-14 col-span-1 row-span-2 mr-6" />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>

	<button class="btn-block btn-ghost justify-start grid grid-cols-[max-content_auto] items-center"
		><IconUser class="ml-8 mr-10 h-10" /> View Profile</button
	>
	<button class="btn-block btn-ghost justify-start grid grid-cols-[max-content_auto] items-center"
		><IconEdit class="ml-8 mr-10 h-10" />Edit Profile</button
	>
	<button class="btn-block btn-ghost justify-start grid grid-cols-[max-content_auto] items-center"
		><IconManage class="ml-8 mr-10 h-10" />Manage Account</button
	>
	<button
		class="btn-block btn-ghost justify-start grid grid-cols-[max-content_auto] items-center text-red-500 mt-4"
		><IconLogout class="ml-8 mr-10 h-10" />Sign Out</button
	>
</div>
