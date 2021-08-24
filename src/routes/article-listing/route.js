module.exports = {
	permalink: '/blog/',
	data: ({ data }) => {
		data.posts = data.markdown['article-detail'];

		return data;
	},
};
