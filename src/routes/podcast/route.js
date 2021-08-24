module.exports = {
	// template: 'Simple.svelte',
	// layout: 'Layout.svelte',
	// all: async () => [{ slug: 'simple' }],
	permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
	data: async ({ request }) => {
		return {
			content: `
				<p>
					Some HTML content and a shortcode
				</p>
				{{yellow-box class="yellow"}}
					Your content here
				{{/yellow-box}}
			`,
		};
	},
};
