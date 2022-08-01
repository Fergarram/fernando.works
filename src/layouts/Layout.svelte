<script>
	export let templateHtml;
</script>

<!-- Global Head -->
<svelte:head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta name="theme-color" content="#333333">
	<link rel="stylesheet" type="text/css" href="/style.css">
	<!-- <link rel="manifest" href="manifest.json" crossorigin="use-credentials"> -->
	<!-- <link rel="apple-touch-icon" href="logo-192.png"> -->
	<meta name="author" content="Fernando Garcia" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">
</svelte:head>

{@html templateHtml}