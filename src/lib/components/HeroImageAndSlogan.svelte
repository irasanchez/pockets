<script>
	import Navbar from './Navbar.svelte';

	import animation from '$lib/images/finance-stability.gif';

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


	<div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
		<div
			class="w-100 lg:mx-auto bg-yellow-400 border-3 border-indigo-900 shadow-md rounded-2xl flex flex-col items-center"
		>
			<h1
				class="text-4xl px-2 md:px-8 lg:font-normal md:text-7xl lg:text-8xl font-heading mt-1 mb-6 max-w-xl mx-auto py-12 lg:px-6 text-center"
			>
				Make your cash flow.
			</h1>
			<img alt="" src={animation} class=" bg-yellow-400 w-full mb-12"  />
		</div>
	</div>


<style>
</style>
