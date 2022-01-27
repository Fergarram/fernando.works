module.exports = {
	permalink: '/cognitive-research/',
	data: ({ data }) => {
		data.posts = data.markdown['research-detail'];
		return data;
	},
};
