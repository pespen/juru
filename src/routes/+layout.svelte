<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';
	import Login from './login.svelte';

	const correctPassword: string = import.meta.env.VITE_PASSWORD;
	let isAuthenticated: boolean = false;

	function handleLoginSuccess() {
		isAuthenticated = true;
	}
</script>

{#if isAuthenticated}
	<div class="flex flex-col min-h-screen">
		<Header />

		<main class="container mx-auto p-10 md:p-20 flex-grow max-w-7xl">
			<slot />
		</main>

		<footer class="p-4">
			<div class="text-center flex flex-col items-center">
				<hr class="border-gray-300 my-4 w-[60%]" />
				<p class="text-light-6">
					&copy; 2024 Juru. Alle rettigheter reservert.
				</p>
			</div>
		</footer>
	</div>
{:else}
	<Login {correctPassword} onSuccess={handleLoginSuccess} />
{/if}
