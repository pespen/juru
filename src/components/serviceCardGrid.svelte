<script lang="ts">
	import ServiceCard from './serviceCard.svelte';
	const cards = [
		{
			image: '/images/services/courses.webp',
			title: 'Kurs og foredrag',
			link: 'services/courses'
		},
		{
			image: '/images/services/coaching.webp',
			title: 'Coaching',
			link: 'services/coaching'
		},
		{
			image: '/images/services/cybersecurity.webp',
			title: 'Cybersikkerhet',
			link: 'services/cybersecurity'
		},
		{
			image: '/images/services/privacy.webp',
			title: 'Personvern',
			link: 'services/privacy'
		},
		{
			image: '/images/services/strategy.webp',
			title: 'Strategisk juridisk rådgivning',
			link: 'services/strategy'
		},
		{
			image: '/images/services/international.webp',
			title: 'Internasjonale rettsforhold',
			link: 'services/international'
		},
		{
			image: '/images/services/regulation.webp',
			title: 'Regulering',
			link: 'services/regulation'
		},
		{
			image: '/images/services/boardwork.webp',
			title: 'Styrearbeid',
			link: 'services/boardwork'
		},
		{
			image: '/images/services/legaladvice.webp',
			title: 'Advokatråd',
			link: 'services/legaladvice'
		}
	];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
	{#each cards as card}
		<ServiceCard image={card.image} title={card.title} link={card.link} />
	{/each}
</div>
