const posts = [
	{
		title: 'Amateur Archaeology KaiOS Edition',
		slug: 'amateur-archaeology-kaios-edition',
		date: '02-22-2020',
		dateFormatted: 'Feb 2020',
		links: [
			{
				label: 'Play Game',
				url: '/amateur-archaeology/'
			},
			{
				label: 'Fork Code',
				url: 'https://github.com/Fergarram/amateur-archaeology/'
			},
			{
				label: 'Read Devlog',
				url: '/blog/creating-a-game-for-feature-phones-using-javascript'
			}
		],
		primaryTag: 'Video Game',
		secondaryTags: [ 'Web Development', 'KaiOS', 'Svelte', 'Webpack', 'WebGL' ],
		cover: {
			url: '/assets/amateur-archaeology-project.png',
			alt: '' // ADD SOMETHING!
		},
		html: `
			<p>Back in December of 2015, my cousin <a href="https://flogar.itch.io/">Mario</a> and I created a game called <a href="https://fergarram.itch.io/amateur-archaeology-iii">Amateur Archaeology III</a> for the <a href="https://gm48.net/">GM48 Jam</a>. As this supposes, we built this game using Game Maker 8. Mario implemented the initial idea and all the visual and audio assets for the game. Once that was in place I polished and implemented the “complex” mechanics of the game like the level generation.</p>

			<figure>
				<img style="max-width: 25rem; height: auto;" src="https://img.itch.zone/aW1hZ2UvMzEwOTIvMTMxMzQwLnBuZw==/347x500/KIOOAZ.png" alt="Screenshot of the GM48 version" />
				<figcaption>
					Screenshot of GM48 jam version
				</figcaption>
			</figure>

			<p>Amateur Archaeology KaiOS Edition, is a remake of the original idea developed using Javascript and WebGL for KaiOS-powered feature phones such as the Nokia 8110 aka The Banana Phone.</p>

			<h2 id="Scope">Scope</h2>
			<p>This project started as a way of trying out development for the KaiOS platform. I wanted to make a small game that would allow me quickly implement something meaningful. I thought that I could make this game in a weekend or two but in really took about two times that. I went into more detail in the <a href="/blog">devlog</a>. Something else that motivated me to work on this project was the idea of implementing a “simulator” to see how an app or game would look like inside a phone shell, so I implemented it, too.</p>

			<h2 id="Tech stack and tools">Tech stack and tools</h2>
			<p>I wanted the ability to easily test the game in my mac and real phone without having to run different build scripts. For the simulator, I used Svelte since I had recently found out about it and wanted to give it a try for a small project like this. I also didn’t want to use any third-party dependencies for the actual game (or the project) but ended up using Howler.js for audio playback. I wrote more details in the devlog about these decisions.</p>

			<p>Here’s a summary of the tools used:</p>
			<ul><li>Webpack for bundling
			</li><li>Svelte for simulator
			</li><li>WebGL for graphics rendering
			</li><li>Howler.js for audio playback
			</li><li>Aseprite for sprites and game UI
			</li><li>Sketch for phone shell and level design
			</li></ul>

			<h2 id="Conclusion">Conclusion</h2>
			<p>I learned a ton about developing with WebGL directly and about video game development in general. There’s a lot of room for improvement, specifically lowering the amount of draw calls to just about two or three. The KaiOS development experience also has a lot of room to improve but I was surprised of how easy it can be if you’ve worked with web tools before. Not only that but the KaiOS platform is full of potential! This game surpassed the thousands of downloads in the first weeks which was completely mind-blowing.</p>
		`
	},
	{
		title: 'Nuestro.Voto',
		slug: 'nuestro-voto',
		date: '05-28-2021',
		dateFormatted: 'May 2021',
		primaryTag: 'Product',
		secondaryTags: [ 'UI/UX Design', 'Web Development', 'Svelte' ],
		cover: {
			url: '/assets/nuestro.jpg',
			alt: '' // ADD SOMETHING!
		},
		html: `
			<h2>About the project</h2>
			<p>This project was built using vanilla Javascript using the WebGL API.</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
