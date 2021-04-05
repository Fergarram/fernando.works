(async function() {
	// Where Svelte will mount...
	const target = document.getElementById("site-main");

	// Get the route
	const route = location.pathname === '/' ? 'index' : location.pathname.slice(1);

	// Get the corresponding page JS bundle
	try {
		if (route.includes('posts/')) {
			new (await import(`../posts/${route.replace('posts/', '')}.svelte`)).default({
				target,
				hydrate: true
			});
		} else if (route.includes('projects/')) {
			new (await import(`../projects/${route.replace('projects/', '')}.svelte`)).default({
				target,
				hydrate: true
			});
		} else {
			new (await import(`../pages/${route}.svelte`)).default({
				target,
				hydrate: true
			});
		}

	// Otherwise load the 404 JS bundle
	} catch( error ) {
		new (await import('../pages/404.svelte')).default({
			target,
			hydrate: true
		});
	}
})();