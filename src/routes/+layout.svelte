<script lang="ts">
	import '../app.postcss';
	import {
		ListBox,
		ListBoxItem,
		AppShell,
		AppBar,
		type PopupSettings,
		popup,
		autoModeWatcher
	} from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let comboboxValue: string;

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	import { base } from '$app/paths';
	
</script>
<!-- checks for user light/dark preference-->
<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>

<!-- App Shell -->
<AppShell class="overflow-auto">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="shadow">
			<svelte:fragment slot="lead">
				<p class="text-xl text-primary-500">kdsap @ vt</p>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn variant-ghost"
					href="/"
				>
					Home
				</a>
				<a
					class="btn variant-ghost"
					href="/team"
				>
					The Team
				</a>
				<!--DROP DOWN MENU FOR RESOURCES-->
				<button class="btn variant-ghost w-40" use:popup={popupCombobox}>
					<span class="">Resources</span>
					<i class="fa-solid fa-caret-down" />
				</button>
				<div class="card rounded w-48 shadow-xl py-2" data-popup="popupCombobox">
					<ListBox rounded="rounded-token">
						<ListBoxItem bind:group={comboboxValue} name="medium" value="what we do"
							>What does kdsap do?</ListBoxItem
						>
						<ListBoxItem bind:group={comboboxValue} name="medium" value="get in touch"
							>Get in touch!</ListBoxItem
						>
					</ListBox>
					<div class="arrow bg-surface-100-800-token" />
				</div>
				{#if comboboxValue}
					{#await Promise.resolve()}
						{window.location.href = `${comboboxValue.replace(/\s/g, '')}`}
					{/await}
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
