const getPosts = (posts) => {
	let tags = [];

	// First loop to get all the primary tags
	posts.forEach( post => {
		if (!tags.includes(post.frontmatter.primaryTag)) {
			tags.push(post.frontmatter.primaryTag);
		}
	});

	// Then loop to get all the secondary tags
	posts.forEach( post => {
		post.frontmatter.secondaryTags.forEach( tag => {
			if (!tags.includes(tag)) {
				tags.push(tag);
			}
		});
	});

	// Give tags a slug
	tags = tags.map(tag => ({
		text: tag,
		slug: tag.replace(/[\W_]+/g, '-')
	}));

	// Additional data
	posts.forEach( post => {
		post.frontmatter.type = 'project';
		post.frontmatter.tags = tags;
	});

	return { posts, tags };
}

module.exports = {
	permalink: '/projects/',
	data: ({ data }) => {
		const { posts, tags } = getPosts( data.markdown['project-detail'] );

		data.posts = posts;
		data.tags = tags;
		data.fields = {
			head: {
				title: "Projects - Fernando Works",
				description: "The things I’ve worked on"
			},
			heading: 'Projects & Work',
			paragraph: 'The things I’ve worked on consist of a mix of toys, websites, mobile apps, videogames, and ui design mocks. Visit my <a class="border-b-2 whitespace-nowrap" ref="noopener" target="_blank" href="https://github.com/Fergarram/">Github</a> for smaller code-only projects.',
		};

		return data;
	},
};
