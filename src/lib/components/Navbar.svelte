<script>
	import animation from '$lib/images/finance-stability.gif';
	import pocketsTitle from '$lib/images/pockets_title.svg';

	import RangeSlider from 'svelte-range-slider-pips';
	import { writable } from 'svelte/store';
	import Features from '$lib/components/Features.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let currentPrice = 10;
	let monthlyOrAnnual = true;
	let email = '';
	let waitlistStatus = writable({
		loading: false,
		error: false,
		success: false,
		message: ''
	});

	/**
	 * Updates the email variable with the value of the input field.
	 * @param {Event} event - The input event.
	 */
	const handleInput = (event) => {
		// @ts-ignore
		email = event.target.value;
	};

	/**
	 * Sends a POST request to the waitlist API with the email address to sign up for the waitlist.
	 * @function signUpForWaitlist
	 * @async
	 * @returns {Promise<void>}
	 */
	const signUpForWaitlist = async () => {
		email = '';
		waitlistStatus = { ...waitlistStatus, loading: true };
		// https://dev--waitlist--pockets.autocode.dev/
		const url = 'https://dev--waitlist--pockets.autocode.dev/';

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({email: email})
			body: JSON.stringify({ email })
		});

		const data = await response.json();

		if (data.includes('exists')) {
			waitlistStatus = {
				...waitlistStatus,
				loading: false,
				error: true,
				message: "You're already on the waitlist!"
			};
		} else if (data.includes('confirmation')) {
			waitlistStatus = { ...waitlistStatus, loading: false, success: true, message: data };
		}
	};

	//reset waitlist status when user starts typing again
	$: if (email) {
		waitlistStatus = {
			...waitlistStatus,
			loading: false,
			error: false,
			success: false,
			message: ''
		};
	}
</script>

<nav
	class="flex mb-16 justify-between items-center py-6 px-10 relative bg-green-400 border-3 border-indigo-900 border-b-8"
>
	<a class="text-lg font-bold" href="/">
		<img class="h-8" src="" alt="" width="auto" />
	</a>
	<h1 class="mx-auto lg:text-9xl font-extrabold text-5xl">
		<img src={pocketsTitle} alt="pockets" aria-label="pockets" />
	</h1>
	<!-- <ul
			class="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			<li>
				<a class="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800" href="#">Product</a>
			</li>
			<li>
				<a class="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800" href="#">Features</a
				>
			</li>
			<li>
				<a class="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800" href="#">Pricing</a>
			</li>
			<li><a class="text-lg font-extrabold hover:text-indigo-800" href="#">Resources</a></li>
		</ul> -->
</nav>
<div class="hidden navbar-menu relative z-50">
	<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
	<nav
		class="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto"
	>
		<div class="flex items-center mb-8">
			<a class="mr-auto text-2xl font-bold leading-none" href="#">
				<img class="h-6" src="" alt="" width="auto" />
			</a>
			<button class="navbar-close">
				<svg
					class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewbox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<div class="my-auto">
			<ul class="py-10">
				<li class="mb-1">
					<a class="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Product</a>
				</li>
				<li class="mb-1">
					<a class="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Features</a>
				</li>
				<li class="mb-1">
					<a class="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Pricing</a>
				</li>
				<li class="mb-1">
					<a class="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Resources</a
					>
				</li>
			</ul>
		</div>
		<div>
			<a
				class="block mb-6 text-center leading-6 text-lg font-extrabold hover:text-indigo-800"
				href="#">Log In</a
			><a
				class="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
				href="#">Sign Up</a
			>
		</div>
	</nav>
</div>

<style>
</style>
