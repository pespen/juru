<script lang="ts">
	import { IconPhone, IconMail } from '@tabler/icons-svelte';

	let email =
		'&#112;&#119;&#101;&#64;&#106;&#117;&#114;&#117;&#46;&#110;&#111;';
	let phone = '&#57;&#48;&#48;&#32;&#52;&#51;&#32;&#49;&#52;&#48;';
	let phoneHref = 'tel:90043140';
</script>

<div>
	<h2 class="text-3xl font-bold text-light-6 mb-4">Kontakt</h2>
	<p class="text-lg text-light-5 flex items-center">
		<IconMail class="mr-2" />
		<a
			href="mailto:&#112;&#119;&#101;&#64;&#106;&#117;&#114;&#117;&#46;&#110;&#111;"
			class="text-blue-600 hover:underline ml-1">{@html email}</a
		>
	</p>
	<p class="text-lg flex items-center mt-2">
		<IconPhone class="mr-2" />
		<a href={phoneHref} class="text-blue-600 hover:underline ml-1"
			>{@html phone}</a
		>
	</p>
</div>
