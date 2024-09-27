<script>
  import "../app.css";
  import { onMount } from 'svelte';

  const isDev = import.meta.env.VITE_ENV === 'dev';
  const correctPassword = import.meta.env.VITE_PASSWORD
  let password = '';
  let isAuthenticated = false;
  let errorMessage = '';

  onMount(() => {
    if (isDev) {
      const storedPassword = sessionStorage.getItem('password');
      if (storedPassword === correctPassword) {
        isAuthenticated = true;
      }
    } else {
      isAuthenticated = true;
    }
  });

  function handleLogin() {
    if (password === correctPassword) {
      sessionStorage.setItem('password', password);
      isAuthenticated = true;
      errorMessage = '';
    } else {
      errorMessage = 'Feil passord';
    }
  }
</script>

{#if isAuthenticated}
  <slot />
{:else if isDev}
  <div class="flex flex-col items-center justify-center min-h-screen bg-light-1">
    <h1 class="text-2xl text-light-5 font-bold mb-4">Skriv inn passord</h1>
    <input type="password" bind:value={password} class="border p-2 mb-4" />
    <button on:click={handleLogin} class="bg-light-6 text-light-1 p-2">Logg inn</button>
    {#if errorMessage}
      <p class="text-red-500 mt-2">{errorMessage}</p>
    {/if}
  </div>
{/if}