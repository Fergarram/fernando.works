<script>
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

<svelte:component this={page} {route} />
