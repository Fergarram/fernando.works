// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'The window based personal website that I almost ended up using',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ol>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ol>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'The window based personal website that I almost ended up using',
		slug: 'how-can-i-get-involved',
		html: `
		<h2>Introduction</h2>
		<p>This is one of those projects which you start after a burst of excitement but end up leaving unfinished to the uncomfortable point where it isn’t good enough to publish but it is good enough to talk about it.</p>
		<p>So, in this series, I will share with you how I retake this project and convert it into an MVP!</p>
		<blockquote>
		<p>You can find the code at my <a class="link" href="https://github.com/Fergarram/amateur-archaeology">Github</a> repo and play the game at <a class="link" href="https://fernando.works/amateur-archaeology">fernando.works/amateur-archaeology</a>.</p>
		</blockquote>
		<h2>About this project</h2>
		<p>I bought a banana phone after watching <a class="link" href="https://www.youtube.com/watch?v=OA_g2bQgOXY">this video</a>. The fact that I could create apps for a feature phone using web technologies blew my mind — I remember being a kid and creating toy feature phones using small and thin wood rectangles that (for some strange reason) were laying around in my house. I would make different designs using tape, rubber bands, nails, and color markers.</p>
		<h3>Testing this</h3>
		<p>Anyways, I bought the thing and went on to enable development mode and got a Hello World app running.</p>
		<h4>Testing this</h4>
		<p>Anyways, I bought the thing and went on to enable development mode and got a Hello World app running.</p>
		<h5>Testing this</h5>
		<p>A few months past by and suddenly decided I wanted to do something with it. I thought of remaking <a class="link" href="https://fergarram.itch.io/amateur-archaeology-iii">a game I made</a> for a game jam some years ago using Game Maker.  This was a perfect idea, the game was simple enough so I started on working on it.</p>
		<h6>Testing this</h6>
		<p>A few months past by and suddenly decided I wanted to do something with it. I thought of remaking <a class="link" href="https://fergarram.itch.io/amateur-archaeology-iii">a game I made</a> for a game jam some years ago using Game Maker.  This was a perfect idea, the game was simple enough so I started on working on it.</p>
		<h2>Defining the MVP</h2>
		<p>As a starting point, the game should have the same functionalities as the original game with some variations and additions:</p>
		<ul>
		<li>Infinite digging (done before this devlog started)</li>
		<li>Intro screen</li>
		<li>Dialogs (UI)</li>
		<li>Treasures - with different rewards</li>
		<li>Time, score, and game states (intro, level start, game over)</li>
		<li>Level Transition Effect (new)</li>
		<li>Foes - Fire and Scorpions</li>
		<li>Randomized hue (didn't implement)</li>
		</ul>
		<h3>Game Rules</h3>
		<ol>
		<li>The objective is to reach the score goal before time runs out.</li>
		<li>If you pass the score goal you get extra time for the next level.</li>
		</ol>
		<h2>Day 1</h2>
		<p>I’ll start by taking the intro image from the original game and adapting it to the resolution of the Banana Phone (240 x 320px). I use <a class="link" href="https://www.aseprite.org/">Aseprite</a> for manipulating pixels and <a class="link" href="https://www.sketch.com/">Sketch</a> for… level design? I like to use Sketch for moving the assets around and prototyping ideas.</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/risd06x3qwcokzaxo6wf.png" alt="Screenshot of Aseprite"></p>
		<p>After, cleaning some pixels with Aseprite I copied the assets to Sketch and placed them where I wanted them:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/ihx07npor3qbqam57fjn.png" alt="Screenshot of Sketch"></p>
		<p>I exported the assets for the game, put them in place, added some logic and animation for the instructions and title and this is how it turned out:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/q092jy8f2bz63qfyriu5.gif" alt="Animation for game intro"></p>
		<p>After testing it on the real phone, I went on to design the score and time UI. This led me to realize that using 1x pixels and 2x pixels at the same time sucks, so I spent some more time playing with the title image and re-drew it:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/yeomzz5cyl5kovx69zmh.png" alt="Screenshot of new intro"></p>
		<p>Now we are talking! And this is the mockup that I came with for the game’s user interface:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/qxo52c6kkg4of7hf9w8n.png" alt="Screenshot of UI"></p>
		<p>Since Aseprite has some algorithm that neatly scales the font in a pixel-art way, I need to export the number renders to make a number font. I decided to skip letters since there is not going to be dynamic text content.</p>
		<p>But, before I continue with that, I need to eat! BRB</p>
		<blockquote>
		<p>About 5 hours later...</p>
		</blockquote>
		<p>Coming back, I thought of what was the most practical and performant way of displaying this custom font. After testing different ideas, the best solution turned out to be to create a font (tff file) using <a class="link" href="https://icomoon.io/app">IcoMoon</a> and manually tracing the pixels in sketch:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/71aksyfx4ipp1mbh6xtb.png" alt="Screenshot of IcoMoon app"></p>
		<p>After some hours of testing, manually tracing pixels to SVGs, tweaking CSS and what not. I concluded that the best way of implementing the user interface for the game (in terms of pixel sharpness and performance) was using HTML and CSS.</p>
		<p>This was the end result:</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/pl12stv06psvjqskluay.jpg" alt="Photo of real phone and computer showing implemented mockup"></p>
		<p>It looks sharp, it is more performant since I didn’t put more logic into the animation frame event.</p>
		<h2>Day 2</h2>
		<p>I separated the UI code to a separate module and started implemented the dialog box. I also created two states for the game: before the game starts, and when the game has started.</p>
		<p>This is it for this two days! Here is the end result:</p>
		<p><img src="https://media.giphy.com/media/dAvG7oMlzXJdSsBU9M/giphy.gif" alt="Video of new intro"></p>
		<h2>Day 3</h2>
		<p>I started by working on the treasure generation. I decided to code the distribution logic based on the <a class="link" href="https://en.wikipedia.org/wiki/Pareto_principle">Pareto Principle</a>. There are 5 possible treasures and one heart which gives you time. I decided to ignore the heart for now.</p>
		<p>I wrote a function that randomizes a horizontal lane of dirt which gets called every time the player moves one grid block down. There is a 5% chance for a dirt block to be a treasure and then we roll the dice again and get a treasure based on the distribution I talked about.</p>
		<blockquote>
		<p>I have decided that I will not publish code in this devlog to keep it slim, but you can take a look at it in the  <a class="link" href="https://github.com/Fergarram/amateur-archaeology">repo</a>.</p>
		</blockquote>
		<p>After playing some minutes with the probabilities, the game looks like this:</p>
		<p><img src="https://media.giphy.com/media/JR7k3C1wVKbVlHdLzb/giphy.gif" alt="Video of player digging"></p>
		<p>I also added some logic that puts “diggable” dirt around a treasure when “air” flows in. (You can see what I mean in the gif below)</p>
		<p>After testing this on the simulator, I went on to test this on the device to see if there were any performance issues. I didn’t find any so I moved on to work on treasure gravity.</p>
		<p>This was a little harder to grasp but after about 2 hours I came up with a solution that didn’t cause any performance issues.</p>
		<p>Fun fact: Today I went to a conference and was coding this during the break and, yes, during a conference too (sorry).</p>
		<p>Here is how the “physics“ look!</p>
		<p><img src="https://media.giphy.com/media/Z8kU4tk4r9jKOVEPTI/giphy.gif" alt="Video of treasures falling"></p>
		<p>Now, I need to work on the “collisions” with the player.</p>
		<p>Another speaker went up and that meant another commit was getting ready. I implemented the “collision” detection (just matching the grid positions with the player). I tested it for a while, found some issues, and headed home after the conference was over.</p>
		<p>I arrived home, fixed those issues, and added the sound for when the player takes treasure.</p>
		<p>I had dinner, took a break, and continued after some time. I implemented the score and time system and made the user interface reactive to it.</p>
		<p>This is how it looks now!</p>
		<p><img src="https://media.giphy.com/media/cJNWN3JdL8LQmiK1S2/giphy.gif" alt="Video of gameplay"></p>
		<p>The next thing to work on is the next level transition and the game over screen.</p>
		<h2>Day 4</h2>
		<p>Ok, so I need to start with the level transition before I jump into the enemies. Here is the to-do list:</p>
		<ul>
		<li>Game state logic — restart the camera, player, score, time, ui, and grid.</li>
		<li>Transition</li>
		<li>Add a sound for when a transition enters.</li>
		<li>Calculate new goals and time.</li>
		</ul>
		<p>While developing this game state reset, I realized that if this was a bigger game I would be in deep trouble if I continued doing this the way I am currently doing. It would quickly become spaghetti code.</p>
		<p>I implemented the game state reset and a Super Mario World style transition. This is how it looks.</p>
		<p><img src="https://media.giphy.com/media/XHAuzs6t48gIWOKlCI/giphy.gif" alt="Video of level transition"></p>
		<p>As you can see I also updated the image of the controls and the dialog border.</p>
		<p>I also worked on the new goal and new time calculations. These are going to be placeholders since the final value will be decided after I add enemies.</p>
		<p>I jumped on Aseprite again and improved the dialog background. I also added a level title to let the player know what level he is currently at.</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/q4xi2cu8u6n54lx0ht3e.png" alt="Screenshot of better UI"></p>
		<h2>Day 5 - Short</h2>
		<p>I started off by implementing the new mocks. I also made it possible to quit the game showing a question dialog.</p>
		<p>I want to make it more performant since I am seeing a lot of lag, so I decided that  I’m going to port this to WebGL.</p>
		<p>I spent the rest of the day trying to use a WebGL <em>light</em> library but I ended up wasting my time trying to fix code that wasn’t mine. So, after a few hours and without any results I decided I was going to use WebGL myself without any libraries and called it a day.</p>
		<h2>Day 6</h2>
		<p>Since today is a holiday in Mexico I don’t have to work today. I’ll be dedicating some more love to this project.</p>
		<p>So, after carefully following a tutorial about <a class="link" href="https://webglfundamentals.org/webgl/lessons/webgl-2d-drawimage.html">how to implement DrawImage</a>, I managed to port most of it! I made some adjustments. I added support for the opacity/alpha channel and also created a <code>drawRect</code> method, and also refactored the transition code.</p>
		<p>After a whole day of work, I managed to port everything that I needed. And now I can use the shader to change the hue as in the original game! (Although I won't)</p>
		<blockquote>
		<p>I made heavy use of <a class="link" href="https://webglfundamentals.org/">WebGL Fundamentals</a>, so if your trying to learn WebGL, I would definitively suggest you start there.</p>
		</blockquote>
		<p>So, it feels slightly smoother now. But, I noticed something else, playing sounds slows down the game. So, I’ll figure out how to improve that on another day. I’ll try to use <a class="link" href="https://github.com/goldfire/howler.js#documentation">Howler.js</a> since it has a sprite functionality which may be good here.</p>
		<h2>Day 7 (noon)</h2>
		<p>I spent my evening using the howler.js library and it solved my problem, now I can play sounds and have no lag!</p>
		<h2>Day 8 (noon)</h2>
		<p>I tried to use the sprite functionality but it turned out to worsen performance. My guess is that batching requires more processing power vs just storing and accessing a bunch of KBs into the memory.</p>
		<p>I also tried using the OGG format for sounds but it wasn’t being reproduced correctly, it was as if it was breaking at times.</p>
		<h2>Day 9 (morning)</h2>
		<p>After doing my daily exercise routine (I don’t commute anymore due to COVID-9), I decided to use my spare time to work on implementing the game over screen. Here is how it looks:</p>
		<p><img src="https://media.giphy.com/media/YPQStZaTfRAzqoLjQw/giphy.gif" alt="Video of game over transition"></p>
		<h2>Day 10</h2>
		<p>The first thing I did today was adding foes to the grid generation algorithm. I added some debug overlays to know which blocks would contain a foe by drawing a red dot on the “bad dirt” block.</p>
		<p>Next, I refactored the treasure instance manager to be a general instance manager. I added the scorpion as if it was another treasure, except, of course, it doesn’t do anything when it touches the player.</p>
		<p>I fixed some bugs and went on to refactor the <code>drawImage</code> method from my canvas helper class so that I could flip an image vertically or horizontally. This, by the way, wasn’t previously possible without the WebGL context. So now that I have this code I’m thinking if I should remove the other flipped sprites for the player or if I should keep them. In any case, I’d like to make it consistent across the code.</p>
		<h2>Day 11 (noon)</h2>
		<p>I updated the code to make the scorpions actually freeze the player for 1 second:</p>
		<p><img src="https://media.giphy.com/media/mCOxtp7Snp33eVj2eo/giphy.gif" alt="Video of scorpions in game"></p>
		<h2>Day 12</h2>
		<p>I started working on the fire code to make it move horizontally and bounce off of walls. My first approach was doing something like a “raycast” where I would know what position would the fire be able to move to. But I struggled with that approach. I did a rubber ducky session with a friend and decided to do a similar approach as what I did with gravity — I made the fire move block-by-block and it worked! Way simpler to read too. Here is how it currently looks like:</p>
		<p><img src="https://media.giphy.com/media/kCF8wBoszZ7MgmgaLQ/giphy.gif" alt="Video of fire in game"></p>
		<p>I alose made the fire be able to burn treasures and scorpions.</p>
		<p>This is it! I’m basically finished with the MVP! I’m thinking about adding something like hue change per 5 levels and making it progressively harder as levels go up. But, to be honest, I just wanted to finish the MVP. I'm not too invested in this project.</p>
		<h2>Remaining Bugs</h2>
		<p>I showed this game to a friend of mine who’s a QA engineer. He found about 5 bugs that I need to fix. Since this game is not such an exciting project to me, I am deciding to leave a small backlog so that /someday, someone/ comes and fixes these. I did fix the critical ones though.</p>
		<h2>Github</h2>
		<p>Now that the MVP is finished, I need to update the README and polish a few things. One of those things is making it a single NPM package. Currently, I have two: one for the simulator and another one for the runner. So I’ll make it just one thing.</p>
		<p>What I want to do is watch the app-core source so that when there is a change I can re-bundle and thus refresh the browser.</p>
		<pre><code>app-core &gt; bundle &gt; simulator includes bundle
						  &gt; runner includes bundle
		</code></pre>
		<p>Something like that. So, what I am thinking is of an approach where you don’t need to have access to the <a class="link" href="https://github.com/Fergarram/banana-app">svelte app</a> from the simulator, but rather just to the compiled simulator which you can inject the script into.</p>
		<blockquote>
		<p>A few hours later</p>
		</blockquote>
		<p>I used  webpack to bundle everything together.</p>
		<p>This approach worked pretty well, now the folder structure is way more readable and easier to use.</p>
		<h2>Publishing on Marketplace</h2>
		<p>So, the process to publish an app to the KaiStore is quite easy, all you have to do is register on the publisher and developer portals on kaiostech.com.</p>
		<p>For now, it seems like using ads is obligatory, so I had to download a JavaScript file that I included on my index.html file so that I could call a function that is added to the window.</p>
		<p>I decided to show ads after the game over screen, right after the user decides to try again or close the game. He always gets the ad, though.</p>
		<h3>A Few Recent Updates</h3>
		<p>I had a small email conversation with the engineers from the KaiStore and after a few days of their testing, my app is now published in the KaiStore!</p>
		<p><img src="https://dev-to-uploads.s3.amazonaws.com/i/epmvzt8s2x5pz1fegjso.jpg" alt="Alt Text"></p>
		<p>I had to rename the game to "Treasure Hunter" since "Amateur Archaeology" is too big!</p>
		<p>Hey! Thanks for taking the time to read this devlog. If you'd like to see more of my work or projects be sure to follow me on the following social media or check my website at <a class="link" href="fernando.works">fernando.works</a>:</p>
		<ul>
		<li>Youtube: <a class="link" href="https://www.youtube.com/channel/UCPBwZWChghNODkWGWDga-tw">Fernando Garcia</a></li>
		<li>Twitter: <a class="link" href="https://twitter.com/_fergarram_">@_fergarram_</a></li>
		<li>LinkedIn: <a class="link" href="https://www.linkedin.com/in/fergarram/">@fergarram</a></li>
		<li>Facebook: <a class="link" href="https://www.facebook.com/fergarram">@fergarram</a></li>
		<li>Instagram: <a class="link" href="https://www.instagram.com/fergarram/">@fergarram</a></li>
		<li>Reddit: <a class="link" href="https://www.reddit.com/user/fergarram">@fergarram</a></li>
		<li>Twitch: <a class="link" href="https://www.twitch.tv/fergarram">@fergarram</a></li>
		</ul>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
