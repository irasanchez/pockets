<script>
	import FeatureCard from './FeatureCard.svelte';
	/**
	 * @type {any[]}
	 */
	let features = [
		{
			title: "Put your money in your pocket",
			description: `You can make a pocket for anything: a bill, a goal, a budget category you always forget to account for, whatever you'll need to put money towards.`
		},
		{
			title: 'Have confidence in your budget',
			description: `Just like the envelope system in real life, money in a pocket can't be spent on accident and is ready when you need it.`
		},
		{
			title: "Prioritize and plan for the future",
			description: `With pockets, you can sort, pause, reinstate, and transfer money from one pocket to another or between bank accounts.`
		},
		{
			title: "Keep it simple",
			description: `I built this, because I was pulling my hair out trying to manage variable income in a world with invariable, unforgiving bills. I hope it helps you do the same.`
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
