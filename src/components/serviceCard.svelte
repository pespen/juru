<script>
	export let image;
	export let title;
	export let link;
</script>

<a
	href={link}
	class="block transform transition-transform duration-300 hover:scale-105"
>
	<div class="bg-light-1 rounded-md shadow-md">
		<img
			src={image}
			alt={title}
			class="w-full h-40 object-cover rounded-t-md opacity-65"
			loading="lazy"
		/>
		<div class="p-4">
			<h2 class="text-l">{title}</h2>
		</div>
	</div>
</a>
