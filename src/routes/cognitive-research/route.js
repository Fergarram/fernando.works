module.exports = {
	permalink: '/cognitive-research/',
	data: ({ data }) => {
		// There's a weird bug where if I don't destructure this array like so, it flips order on every site regresh...
		data.posts = [ ...data.markdown['research-detail'] ].reverse();
		return data;
	},
};
