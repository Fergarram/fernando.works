const getPosts = (articles, projects, helpers) => {

	// Additional data
	articles.forEach( post => {
		post.frontmatter.type = 'journal';
		post.frontmatter.link = helpers.permalinks['article-detail']({ slug: post.slug });
	});

	projects.forEach( post => {
		post.frontmatter.type = 'project';
		post.frontmatter.link = helpers.permalinks['project-detail']({ slug: post.slug });
	});

	const posts = [ ...articles, ...projects ];

	// TODO: Order by date.

	return posts.slice(0, 4);
}

module.exports = {
	all: () => [{ slug: '/' }],
	permalink: '/',
	data: ({ data, helpers }) => {
		data.posts = getPosts( data.markdown['article-detail'], data.markdown['project-detail'], helpers );
		return data;
	},
};
