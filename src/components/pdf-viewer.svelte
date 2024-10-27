<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	// @ts-ignore
	import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
	import LoadingIcon from './loading-icon.svelte';
	pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

	const pdfUrl = '/pwe-cv-pdf.pdf';
	let pdf: any;
	let resizeTimeout: number;
	let loading = true;

	async function renderPage(pageNum: number) {
		const page = await pdf.getPage(pageNum);
		const container = document.getElementById('pdf-render');
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		if (container && context) {
			const viewport = page.getViewport({ scale: 1 });
			const scale = container.clientWidth / viewport.width;
			const scaledViewport = page.getViewport({ scale });

			const devicePixelRatio = window.devicePixelRatio || 1;
			canvas.width = scaledViewport.width * devicePixelRatio;
			canvas.height = scaledViewport.height * devicePixelRatio;
			canvas.style.width = `${scaledViewport.width}px`;
			canvas.style.height = `${scaledViewport.height}px`;
			context.scale(devicePixelRatio, devicePixelRatio);

			container.appendChild(canvas);
			page.render({ canvasContext: context, viewport: scaledViewport });
		}
	}

	async function renderPDF(url: string) {
		loading = true;
		pdf = await pdfjs.getDocument(url).promise;
		const container = document.getElementById('pdf-render');
		if (container) {
			container.innerHTML = '';
			for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
				await renderPage(pageNum);
			}
		}
		loading = false;
	}

	function handleResize() {
		clearTimeout(resizeTimeout);
		resizeTimeout = window.setTimeout(() => {
			renderPDF(pdfUrl);
		}, 300);
	}

	function preventScroll(event: Event) {
		event.stopPropagation();
	}

	onMount(() => {
		renderPDF(pdfUrl);
		const container = document.getElementById('pdf-render');
		if (container) {
			container.addEventListener('scroll', preventScroll);
		}
		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		const container = document.getElementById('pdf-render');
		if (container) {
			container.removeEventListener('scroll', preventScroll);
		}
		window.removeEventListener('resize', handleResize);
	});
</script>

<div
	class="overflow-y-scroll border border-gray-300 space-y- h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]"
>
	{#if loading}
		<LoadingIcon />
	{/if}
	<div id="pdf-render" />
</div>
