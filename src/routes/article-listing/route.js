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
		post.frontmatter.type = 'article';
		post.frontmatter.tags = tags;
	});

	return { posts, tags };
}


module.exports = {
	permalink: '/archive/',
	data: ({ data }) => {
		const { posts, tags } = getPosts( data.markdown['article-detail'] );

		data.posts = posts;
		data.tags = tags;

		return data;
	},
};
