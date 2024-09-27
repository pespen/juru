<script lang="ts">
  import { onMount } from 'svelte';

  export let correctPassword: string;
  export let onSuccess: () => void;
  
  let password: string = '';
  let isAuthenticated: boolean = false;
  let errorMessage: string = '';

  const isDev: boolean = import.meta.env.VITE_ENV === 'dev';

  onMount(() => {
    if (isDev) {
      const storedPassword = sessionStorage.getItem('password');
      if (storedPassword === correctPassword) {
        isAuthenticated = true;
        onSuccess();
      }
    } else {
      isAuthenticated = true;
      onSuccess();
    }
  });

  function handleLogin() {
    if (password === correctPassword) {
      sessionStorage.setItem('password', password);
      isAuthenticated = true;
      errorMessage = '';
      onSuccess(); 
    } else {
      errorMessage = 'Feil passord';
    }
  }
</script>

{#if !isAuthenticated && isDev}
  <div class="flex flex-col items-center justify-center min-h-screen bg-light-1">
    <h1 class="text-2xl text-light-6 font-bold mb-4">Skriv inn passord</h1>
    <input type="password" bind:value={password} class="border p-2 mb-4" />
    <button on:click={handleLogin} class="bg-light-6 text-light-1 p-2">Logg inn</button>
    {#if errorMessage}
      <p class="text-red-500 mt-2">{errorMessage}</p>
    {/if}
  </div>
{/if}
