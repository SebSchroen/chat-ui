<script lang="ts">
	import { webSearchParameters } from "$lib/stores/webSearchParameters";
	// import CarbonInformation from "~icons/carbon/information"; // Temporarily removed icon import
	import Switch from "./Switch.svelte";
	import IconGoogleG from "$lib/components/icons/IconGoogleG.svelte";

	// Use the update method for reliable store updates
	const toggle = () => {
		webSearchParameters.update(params => ({
			...params,
			googleSearchIsOn: !params.googleSearchIsOn
		}));
	};
</script>

<div
	class="flex h-8 cursor-pointer select-none items-center gap-2 rounded-lg border bg-white p-1.5 shadow-sm hover:shadow-none dark:border-gray-800 dark:bg-gray-900"
	onclick={toggle}
	onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(); }} // Added keydown for accessibility
	aria-checked={$webSearchParameters.googleSearchIsOn}
	aria-label="Google Search Toggle"
	role="switch"
	tabindex="0"
>
	<Switch name="googleSearchIsOn" bind:checked={$webSearchParameters.googleSearchIsOn} />
	<label for="googleSearchIsOn" class="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
		<IconGoogleG classNames="text-sm" /> <!-- Restored Google icon -->
		Google Search
	</label>
	<!-- Temporarily removed info icon and tooltip div -->
</div>
