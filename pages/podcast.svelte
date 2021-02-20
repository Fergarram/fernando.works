<script>
	// import WorkFeed from '../components/home/work-feed.svelte';
	// import BlogFeed from '../components/home/blog-feed.svelte';
	import SiteHeader from '../components/layout/site-header.svelte';

	export let route;
</script>

<svelte:head>
	<title>Podcats - Fernando.Works</title>
</svelte:head>

<SiteHeader {route} />

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