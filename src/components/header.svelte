<script lang="ts">
	let isMenuOpen = false;
	let isServicesMenuOpen = false;
	let hideTimeout: number;
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	function showServicesMenu() {
		clearTimeout(hideTimeout);
		isServicesMenuOpen = true;
	}
	function hideServicesMenu() {
		hideTimeout = setTimeout(() => {
			isServicesMenuOpen = false;
		}, 200);
	}
	function closeServicesMenu() {
		isServicesMenuOpen = false;
	}
</script>

<header class="p-4 relative">
	<nav class="flex items-center justify-between">
		<a href="/" class="text-3xl ml-4 text-light-6"> J U R U </a>
		<div class="hidden md:flex space-x-10 mr-10">
			<div
				class="relative"
				role="menu"
				tabindex="0"
				on:mouseenter={showServicesMenu}
				on:mouseleave={hideServicesMenu}
			>
				<span class="cursor-pointer text-light-6">Tjenester</span>
				<div
					class={`${
						isServicesMenuOpen ? 'block' : 'hidden'
					} absolute bg-light-2 shadow-lg p-4 mt-2 flex flex-col space-y-2 w-64`}
					role="menu"
					tabindex="0"
					on:mouseenter={showServicesMenu}
					on:mouseleave={hideServicesMenu}
				>
					<a
						href="/services/courses"
						class="block text-light-6"
						on:click={closeServicesMenu}>Kurs og foredrag</a
					>
					<a
						href="/services/coaching"
						class="block text-light-6"
						on:click={closeServicesMenu}>Coaching</a
					>
					<a
						href="/services/cybersecurity"
						class="block text-light-6"
						on:click={closeServicesMenu}>Cybersikkerhet</a
					>
					<a
						href="/services/privacy"
						class="block text-light-6"
						on:click={closeServicesMenu}>Personvern</a
					>
					<a
						href="/services/strategy"
						class="block text-light-6"
						on:click={closeServicesMenu}>Strategisk juridisk rådgivning</a
					>
					<a
						href="/services/international"
						class="block text-light-6"
						on:click={closeServicesMenu}>Internasjonale forhold</a
					>
					<a
						href="/services/regulation"
						class="block text-light-6"
						on:click={closeServicesMenu}>Regulering</a
					>
					<a
						href="/services/boardwork"
						class="block text-light-6"
						on:click={closeServicesMenu}>Styrearbeid</a
					>
					<a
						href="/services/legaladvice"
						class="block text-light-6"
						on:click={closeServicesMenu}>Advokatråd</a
					>
				</div>
			</div>
			<a href="/pricing" class="text-light-6">Priser</a>
			<a href="/about" class="text-light-6">Om oss</a>
			<a href="/contact" class="text-light-6">Kontakt</a>
		</div>
		<div class="md:hidden mr-4">
			<button on:click={toggleMenu} class="focus:outline-none">
				<svg
					class="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
	</nav>
	<div
		class={`${
			isMenuOpen ? 'visible max-h-96' : 'invisible max-h-0'
		} absolute top-16 left-0 right-0 bg-light-2 z-50 flex flex-col items-center space-y-6 p-6 shadow-lg transition-max-height duration-400 ease`}
	>
		<a href="/services" on:click={toggleMenu}>Tjenester</a>
		<a href="/pricing" on:click={toggleMenu}>Priser</a>
		<a href="/about" on:click={toggleMenu}>Om oss</a>
		<a href="/contact" on:click={toggleMenu}>Kontakt</a>
	</div>
</header>
