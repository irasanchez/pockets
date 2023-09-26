<script>
	let hidden = true;

	function toggleHidden() {
		hidden = !hidden;
	}
</script>

<section>
	<div class="container px-4 mx-auto">
		<nav class="flex justify-between items-center py-8">
			<a class="text-gray-600 text-2xl leading-none" href="#">
				<img class="h-8" src="mockup-assets/logos/shuffle-ux.svg" alt="" width="auto" />
			</a>
			<div class="lg:hidden">
				<button
					class="block navbar-burger text-gray-500 hover:text-gray-600 focus:outline-none"
					on:click={toggleHidden}
				>
					<svg
						class="h-4 w-4"
						fill="currentColor "
						viewbox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<ul class="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
				<!-- <li><a class="text-sm text-gray-500 hover:text-gray-700" href="#">About</a></li> -->
				<!-- <li><a class="text-sm text-gray-500 hover:text-gray-700" href="#">Company</a></li> -->
				<!-- <li><a class="text-sm text-gray-500 hover:text-gray-700" href="#">Features</a></li> -->
				<!-- <li><a class="text-sm text-gray-500 hover:text-gray-700" href="#">Testimonials</a></li> -->
			</ul>
			<!-- <a
				class="hidden lg:block px-6 py-3 text-sm text-gray-500 hover:text-gray-600 font-bold border border-gray-100 hover:border-gray-200 rounded"
				href="#">Contact Us</a
			> -->
		</nav>
		<div class="flex items-center -mx-4 lg:my-10 flex-wrap-reverse lg:flex-wrap">
			<div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-8 md:mb-0 flex-col items-center">
				<form action="#" class="md:w-2/3 flex-col items-center">
					<input
						class="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
						type="email"
						placeholder="E-mail address"
					/>
					<input
						class="w-full py-3 pl-3 mb-4 bg-white border rounded-lg"
						type="password"
						placeholder="Password"
					/>
					<button
						class="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200"
						>Get Started</button
					>
					<a class="text-sm text-gray-500 hover:underline" href="#">Forgot password?</a>
					<a
						class="flex items-center justify-center mt-4 mb-4 py-3 text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg"
						href="#"
					>
						<img class="w-5 h-5 mr-2" src="mockup-assets/socials/facebook.svg" alt="" />
						<span class="text-sm font-bold text-gray-500">Sign in with Facebook</span>
					</a>
					<a
						class="flex items-center justify-center py-3 text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg"
						href="#"
					>
						<img class="w-5 h-5 mr-2" src="mockup-assets/socials/twitter.svg" alt="" />
						<span class="text-sm font-bold text-gray-500">Sign in with Twitter</span>
					</a>
				</form>
			</div>
			<div class="w-full md:w-1/2 px-4">
				<img
					class="object-cover w-full rounded-xl h-72 mb-8"
					src="mockup-assets/images/gray-500-square.png"
					alt=""
				/>
				<h2 class="mb-8 text-4xl lg:text-5xl font-bold max-w-sm">Command your finances.</h2>
				<p class="mb-6 text-lg text-gray-500 leading-loose max-w-lg">
					Pockets allows people to tell their money where and when to go. Make financial plans and
					hit <span aria-hidden="true">▶️</span>.<span class="sr-only invisible">play</span>
				</p>
			</div>
		</div>
		<button
			class="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100"
		>
			<svg
				class="mx-auto text-gray-500"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewbox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>
	<div class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" class:hidden>
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
		<nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-2xl font-semibold leading-none" href="#">
					<img class="h-8" src="mockup-assets/logos/shuffle-ux.svg" alt="" width="auto" />
				</a>
				<button class="navbar-close" on:click={toggleHidden}>
					<svg
						class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
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
			<div>
				<ul>
					<li class="mb-1">
						<a
							class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
							href="#">About</a
						>
					</li>
					<li class="mb-1">
						<a
							class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
							href="#">Company</a
						>
					</li>
					<li class="mb-1">
						<a
							class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
							href="#">Services</a
						>
					</li>
					<li class="mb-1">
						<a
							class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
							href="#">Testimonials</a
						>
					</li>
				</ul>
			</div>
			<div class="mt-auto">
				<div class="pt-6">
					<a
						class="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
						href="#">Contact Us</a
					>
				</div>
				<p class="mt-6 mb-4 text-sm text-center text-gray-400">
					<span>&copy; 2021 All rights reserved.</span>
				</p>
			</div>
		</nav>
	</div>
</section>
<!-- features -->
<section class="py-20">
	<div class="container px-4 mx-auto">
		<div class="flex flex-wrap items-center -mx-4">
			<div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
				<img
					class="rounded-lg w-full object-cover"
					src="mockup-assets/images/gray-500-square.png"
					alt=""
				/>
			</div>
			<div class="w-full lg:w-1/2 px-4">
				<div class="lg:max-w-sm lg:ml-auto">
					<h2 class="mb-12 text-4xl md:text-5xl mt-3 font-bold font-heading">Lorem ipsum</h2>
					<div class="flex mb-6">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">
								Quick problem-solving contact
							</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
					<div class="flex mb-6">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">
								Making changes simple and easy
							</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
					<div class="flex">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">Exchangeable at any time</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container px-4 mx-auto">
		<div class="flex flex-wrap items-center -mx-4">
			<div class="w-full lg:w-1/2 px-4">
				<div class="lg:max-w-sm">
					<h2 class="mb-12 text-4xl md:text-5xl mt-3 font-bold font-heading">Lorem ipsum</h2>
					<div class="flex mb-6">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">
								Quick problem-solving contact
							</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
					<div class="flex mb-6">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">
								Making changes simple and easy
							</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
					<div class="flex">
						<div class="mr-5 text-gray-500">
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewbox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="max-w-sm">
							<h3 class="mb-2 -mt-1 text-2xl font-bold font-heading">Exchangeable at any time</h3>
							<p class="text-gray-500 leading-loose">
								Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus
								vestibulum.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
				<img
					class="rounded-lg w-full object-cover"
					src="mockup-assets/images/gray-500-square.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</section>
