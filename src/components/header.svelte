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

<style>
  .menu-hidden {
    visibility: hidden;
    max-height: 0;
  }
  .menu-visible {
    visibility: visible;
    max-height: 500px;
    transition: max-height 0.4s ease;
  }
  .dropdown-hidden {
    display: none;
  }
  .dropdown-visible {
    display: block;
  }
  .dropdown-menu {
    width: 250px;
  }
</style>

<header class="bg-light-1 p-4 relative">
  <nav class="flex items-center justify-between">
    <a href="/" class="text-3xl ml-4">
      J U R U
    </a>
    <div class="hidden md:flex space-x-10 mr-10">
      <div class="relative" role="menu" tabindex="0" on:mouseenter={showServicesMenu} on:mouseleave={hideServicesMenu}>
        <span class="cursor-pointer">Tjenester</span>
        <div class="{isServicesMenuOpen ? 'dropdown-visible' : 'dropdown-hidden'} dropdown-menu absolute bg-light-2 shadow-lg p-4 mt-2 flex flex-col space-y-2" role="menu"  tabindex="0" on:mouseenter={showServicesMenu} on:mouseleave={hideServicesMenu}>
          <a href="/tjenester/kurs" class="block" on:click={closeServicesMenu}>Kurs og foredrag</a>
          <a href="/tjenester/coaching" class="block" on:click={closeServicesMenu}>Coaching</a>
          <a href="/tjenester/cybersikkerhet" class="block" on:click={closeServicesMenu}>Cybersikkerhet</a>
          <a href="/tjenester/personvern" class="block" on:click={closeServicesMenu}>Personvern</a>
          <a href="/tjenester/strategi" class="block" on:click={closeServicesMenu}>Strategisk juridisk rådgivning</a>
          <a href="/tjenester/internasjonalt" class="block" on:click={closeServicesMenu}>Internasjonale forhold</a>
          <a href="/tjenester/regulering" class="block" on:click={closeServicesMenu}>Regulering</a>
          <a href="/tjenester/styrearbeid" class="block" on:click={closeServicesMenu}>Styrearbeid</a>
          <a href="/tjenester/advokatç" class="block" on:click={closeServicesMenu}>Advokatråd</a>
        </div>
      </div>
      <a href="/pricing">Priser</a>
      <a href="/about">Om oss</a>
      <a href="/contact">Kontakt</a>
    </div>
    <div class="md:hidden mr-4">
      <button on:click={toggleMenu} class="focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>
  <div class="{isMenuOpen ? 'menu-visible' : 'menu-hidden'} absolute top-16 left-0 right-0 bg-light-2 z-50 flex flex-col items-center space-y-6 p-6 shadow-lg">
    <a href="/tjenester" on:click={toggleMenu}>Tjenester</a>
    <a href="/priser" on:click={toggleMenu}>Priser</a>
    <a href="/om-oss" on:click={toggleMenu}>Om oss</a>
    <a href="/kontakt" on:click={toggleMenu}>Kontakt</a>
  </div>
</header>