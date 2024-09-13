<script>
  const blocks = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100, // Cover wider area horizontally
    delay: Math.random() * 5,
  }));
</script>

<style>
  @keyframes moveDown {
    0% {
      transform: translateY(-100vh);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }

  .animate-moveDown {
    animation: moveDown 5s linear infinite;
  }
</style>

<div class="relative flex items-center justify-center min-h-screen bg-egg-white text-gray-900 overflow-hidden">
  <div class="absolute inset-0 z-0">
    {#each blocks as block}
      <div
        class="absolute w-12 h-12 bg-gray-500 opacity-30 animate-moveDown"
        style="left: {block.left}%; animation-delay: {block.delay}s;"
      ></div>
    {/each}
  </div>
  <div class="text-center z-10">
    <h1 class="text-5xl font-bold mb-4 text-gray-500">Coming Soon</h1>
  </div>
</div>