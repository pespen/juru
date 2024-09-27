<script>
  import Hourglass from './hourglass.svelte';
  import LogoWithText from '../assets/juru-logo-with-text.svg'
</script>

<div class="relative flex flex-col items-center justify-center min-h-screen text-gray-900 overflow-hidden gap-y-6">
  <img src={LogoWithText} alt="LogoWithText" class="mt-4 w-[200px]"/>
  <Hourglass color="#6b7280"/>
  <h1 class="text-5xl font-bold text-gray-500">Coming soon</h1>
</div>