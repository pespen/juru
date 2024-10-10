<script lang="ts">
	import {
		IconChevronDown,
		IconChevronUp,
		IconMenu2
	} from '@tabler/icons-svelte';
	let isMenuOpen = false;
	let isServicesMenuOpen = false;
	let isMobileServicesMenuOpen = false;
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

	function toggleMobileServicesMenu() {
		isMobileServicesMenuOpen = !isMobileServicesMenuOpen;
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
					} absolute bg-light-2 shadow-lg p-4 mt-2 flex flex-col space-y-2 w-64 z-20`}
					role="menu"
					tabindex="0"
					on:mouseenter={showServicesMenu}
					on:mouseleave={hideServicesMenu}
				>
					<a
						href="/services/courses"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Kurs og foredrag</a
					>
					<a
						href="/services/coaching"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Coaching</a
					>
					<a
						href="/services/cybersecurity"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Cybersikkerhet</a
					>
					<a
						href="/services/privacy"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Personvern</a
					>
					<a
						href="/services/strategy"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Strategisk juridisk rådgivning</a
					>
					<a
						href="/services/international"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Internasjonale forhold</a
					>
					<a
						href="/services/regulation"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Regulering</a
					>
					<a
						href="/services/boardwork"
						class="block text-light-6 hover:text-light-3"
						on:click={closeServicesMenu}>Styrearbeid</a
					>
					<!-- <a
											href="/services/legaladvice"
											class="block text-light-6 hover:text-light-3"
											on:click={closeServicesMenu}>Advokatråd</a
									> -->
				</div>
			</div>
			<a href="/pricing" class="text-light-6 hover:text-light-3">Priser</a>
			<a href="/about" class="text-light-6 hover:text-light-3">Om oss</a>
			<a href="/contact" class="text-light-6 hover:text-light-3">Kontakt</a>
		</div>
		<div class="md:hidden mr-4">
			<button on:click={toggleMenu} class="focus:outline-none">
				<IconMenu2 size={26} />
			</button>
		</div>
	</nav>
	<div
		class={`${
			isMenuOpen ? 'visible max-h-200' : 'invisible max-h-0'
		} absolute top-16 left-0 right-0 bg-light-2 z-50 flex flex-col space-y-4 py-4 shadow-lg transition-max-height duration-400 ease`}
	>
		<button
			on:click={toggleMobileServicesMenu}
			class="text-left px-6 flex justify-between"
		>
			Tjenester
			<span class="ml-2 mr-2">
				{#if isMobileServicesMenuOpen}
					<IconChevronDown />
				{:else}
					<IconChevronUp />
				{/if}
			</span>
		</button>
		{#if isMobileServicesMenuOpen}
			<div class="flex flex-col space-y-4 bg-light-3 w-full py-4">
				<a href="/services/courses" class="pl-8" on:click={toggleMenu}
					>Kurs og foredrag</a
				>
				<a href="/services/coaching" class="pl-8" on:click={toggleMenu}
					>Coaching</a
				>
				<a href="/services/cybersecurity" class="pl-8" on:click={toggleMenu}
					>Cybersikkerhet</a
				>
				<a href="/services/privacy" class="pl-8" on:click={toggleMenu}
					>Personvern</a
				>
				<a href="/services/strategy" class="pl-8" on:click={toggleMenu}
					>Strategisk juridisk rådgivning</a
				>
				<a href="/services/international" class="pl-8" on:click={toggleMenu}
					>Internasjonale forhold</a
				>
				<a href="/services/regulation" class="pl-8" on:click={toggleMenu}
					>Regulering</a
				>
				<a href="/services/boardwork" class="pl-8" on:click={toggleMenu}
					>Styrearbeid</a
				>
				<!-- <a href="/services/legaladvice" on:click={toggleMenu}>Advokatråd</a> -->
			</div>
		{/if}
		<a href="/pricing" class="pl-6" on:click={toggleMenu}>Priser</a>
		<a href="/about" class="pl-6" on:click={toggleMenu}>Om oss</a>
		<a href="/contact" class="pl-6" on:click={toggleMenu}>Kontakt</a>
	</div>
</header>
