<script>
	import Header from '../components/layout/header.svelte';

	export let route;
</script>

<svelte:head>
	<title>Podcats - Fernando.Works</title>
</svelte:head>

<Header {route} />

<main class="main">
	Podcats
</main>

<footer>
	Copyright © Fernando Garcia. All rights reserved.
</footer>

<style lang="scss">
	@import '../styles/utils.scss';
	@import '../styles/page.scss';
</style>