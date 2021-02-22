(async function() {
	// Where Svelte will mount...
	const target = document.getElementById("site-main");

	// Get the route
	const route = location.pathname === '/' ? 'index' : location.pathname.slice(1);

	// Get the corresponding page JS bundle
	try {
		new (await import(`../pages/${route}.svelte`)).default({
			target,
			hydrate: true,
			props: { route }
		});

	// Otherwise load the 404 JS bundle
	} catch( error ) {
		new (await import('../pages/404.svelte')).default({
			target,
			hydrate: true,
			props: { route }
		});
	}
})();