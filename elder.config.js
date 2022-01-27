require('dotenv').config();
module.exports = {
	origin: 'localhost:3000',
	lang: 'en',
	srcDir: 'src',
	distDir: 'public',
	rootDir: process.cwd(),
	build: {},
	prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
	server: {},
	props: {
		hydration: 'hybrid',
		compress: false,
	},
	debug: {
		stacks: false, // Output details of the stack consolidation process.
		hooks: false, // Outputs the details of each hook as they are run.
		performance: false, // Outputs a full performance report of how long it took to run each page.
		build: false, // Gives additional details about the build process.
		automagic: false,
	},
	hooks: {
		// disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
	},
	plugins: {
		'@elderjs/plugin-markdown': {
			routes: ['article-detail', 'project-detail', 'research-detail'],
		},
		'@elderjs/plugin-browser-reload': {
			// this reloads your browser when nodemon restarts your server.
			port: 8080,
			reload: false, // if you are having issues with reloading not working, change to true.
		},
		'@elderjs/plugin-seo-check': {
			display: ['errors', 'warnings'], // If the errors are too verbose remove 'warnings'
			//writeLocation: './report.json', // if you want to write a report of errors
		},
	},
	shortcodes: { closePattern: '}}', openPattern: '{{' },
};
