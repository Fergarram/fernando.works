<script>
	// import Home from '../pages/index.svelte';
	// import Podcast from '../pages/podcast.svelte';
	export let route;
	let page = null;
	(async () => {
		try {
			page = (await import(`../pages/${route}.svelte`)).default;
		} catch( error ) {
			page = (await import('../pages/404.svelte')).default;
		}
	})();
</script>
<!-- {#if route === 'index'}
	<Home {route} />
{:else}
	<Podcast {route} />
{/if} -->
<svelte:component this={page} {route} />
