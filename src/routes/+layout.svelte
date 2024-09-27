<script lang="ts">
  import "../app.css";
	import Header from "../components/header.svelte";
  import Login from "./login.svelte";

  const correctPassword: string = import.meta.env.VITE_PASSWORD;
  let isAuthenticated: boolean = false;

  function handleLoginSuccess() {
    isAuthenticated = true;
  }
</script>

{#if isAuthenticated}
  <div class="flex flex-col min-h-screen bg-light-1">
    <Header />

    <main class="container mx-auto p-4 flex-grow bg-light-1">
      <slot />
    </main>

    <footer class="p-4 mt-8 bg-light-1">
      <div class="text-center flex flex-col items-center">
        <hr class="border-gray-300 my-4 w-[60%]">
        &copy; 2024 Juru. Alle rettigheter reservert.
      </div>
    </footer>
  </div>
{:else}
  <Login {correctPassword} onSuccess={handleLoginSuccess} />
{/if}