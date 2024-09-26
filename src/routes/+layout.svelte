<script>
  import "../app.css";
  import { onMount } from 'svelte';

  const isDev = import.meta.env.VITE_ENV === 'dev';
  const correctPassword = import.meta.env.VITE_PASSWORD
  let password = '';
  let isAuthenticated = false;

  onMount(() => {
    if (isDev) {
      const storedPassword = localStorage.getItem('password');
      if (storedPassword === correctPassword) {
        isAuthenticated = true;
      }
    } else {
      isAuthenticated = true;
    }
  });

  function handleLogin() {
    if (password === correctPassword) {
      localStorage.setItem('password', password);
      isAuthenticated = true;
    } else {
      alert('Feil passord');
    }
  }
</script>

{#if isAuthenticated}
  <slot />
{:else if isDev}
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-4">Skriv inn passord</h1>
    <input type="password" bind:value={password} class="border p-2 mb-4" />
    <button on:click={handleLogin} class="bg-blue-500 text-white p-2">Logg inn</button>
  </div>
{/if}