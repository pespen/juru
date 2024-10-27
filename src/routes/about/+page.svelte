<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	// @ts-ignore
	import * as pdfjs from 'pdfjs-dist';
	// @ts-ignore
	import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';
	pdfjs.GlobalWorkerOptions.workerSrc =
		import.meta.url + 'pdfjs-dist/build/pdf.worker.mjs';

	const pdfUrl = '/pwe-cv-pdf.pdf';
	let pdf: any;

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
		pdf = await pdfjs.getDocument(url).promise;
		const container = document.getElementById('pdf-render');
		if (container) {
			container.innerHTML = '';
			for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
				await renderPage(pageNum);
			}
		}
	}

	function handleResize() {
		renderPDF(pdfUrl);
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

<div>
	<h2 class="text-3xl font-bold text-light-6 pb-4">Om oss</h2>
	<div
		id="pdf-render"
		class="overflow-y-scroll border border-gray-300 h space-y-4 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]"
	/>
</div>
