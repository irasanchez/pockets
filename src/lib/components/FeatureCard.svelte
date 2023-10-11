<script>
	/**
	 * @type {{ title: string; description: string; }}
	 */
	export let feature;
</script>

<div class="w-full md:w-1/2 px-4 mb-16">
	<div class="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl">
		<img class="block mb-6" src="" alt="" />
		<h4 class="text-2xl font-extrabold mb-4">{feature.title}</h4>
		<p class="text-lg font-extrabold leading-7 mb-8">
			{feature.description}
		</p>
	</div>
</div>

<style></style>
