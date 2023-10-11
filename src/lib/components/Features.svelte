<script>
	import FeatureCard from './FeatureCard.svelte';
	/**
	 * @type {any[]}
	 */
	let features = [
		{
			title: 'Tell your money when and where to go',
			description: `Finance is unpredictable for most people these days. Set up rules by proportion, group
						rules by circumstances, and sit back to watch them work for you.`
		},
		{
			title: "Know what money you've set aside and why",
			description: `Set up a pocket for anything: rent, microloans, student loans, products in priority
						order. And see them all in one place!`
		},
		{
			title: "Keep your spending money separate",
			description: `And do it without opening a million accounts, unless you want to. 🤷‍♀️`
		},
		{
			title: "One financial control center",
			description: `No more having to deal with each bank website to manage automated transfers and bill
						pay.`
		},

	];
</script>

<section class="py-48 bg-yellow-400">
	<div class="container px-4 mx-auto relative">
		<h3 class="max-w-2xl text-3xl md:text-4xl font-extrabold font-heading mb-16">
			Made with <span role="img" aria-label="love">❤️</span> by an independent developer for real
			people in <i>this</i> economy.
		</h3>
		<div class="flex flex-wrap -mx-4 -mb-16">
			{#each features as feature}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</section>

<style></style>
