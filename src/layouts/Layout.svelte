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
	<!-- <link rel="icon" type="image/png" href="favicon.png"> -->
	<!-- <link rel="apple-touch-icon" href="logo-192.png"> -->
</svelte:head>

{@html templateHtml}