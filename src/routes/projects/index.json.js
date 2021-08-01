import posts from './_projects.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		link: `projects/${post.slug}`,
		slug: post.slug,
		cover: post.cover,
		primaryTag: post.primaryTag,
		secondaryTags: post.secondaryTags,
		tags: post.tags,
		type: 'project'
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}