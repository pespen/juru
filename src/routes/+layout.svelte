<script lang="ts">
  import "../app.css";
  import Login from "./login.svelte";

  const correctPassword: string = import.meta.env.VITE_PASSWORD;
  let isAuthenticated: boolean = false;

  function handleLoginSuccess() {
    isAuthenticated = true;
  }
</script>

{#if isAuthenticated}
  <slot />
{:else}
  <Login {correctPassword} onSuccess={handleLoginSuccess} />
{/if}
