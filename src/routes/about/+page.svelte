<script>
	let pdfFile = '/pwe-cv-pdf.pdf#toolbar=0&navpanes=0';
</script>

<div>
	<h2 class="text-3xl font-bold text-light-6 pb-4">Om oss</h2>
	<iframe src={pdfFile} class="pdf-viewer" title="PDF Document"></iframe>
</div>

<style>
	.pdf-viewer {
		width: 100%;
		height: 500px;
		border: 1px solid #ccc;
	}
</style>
