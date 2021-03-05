<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
</script>

<svelte:head>
	<title>Creating a video game for feature phones using JavaScript - Fernando.Works</title>
</svelte:head>

<Header title="Blog post"/>

<main class="main">
	<article class="main__wrapper">
		<header class="header">
			<div class="header__text-col">
				<h1 class="header__title">
					Creating a video game for feature phones using JavaScript
				</h1>
				<time class="header__date" datetime="2021-03-01">
					March 1, 2021
				</time>
			</div>
			<figure class="header__figure">
				<img
					src="/temp/full-cover.jpg"
					alt="Post banner"
				/>
				<figcaption>
					<p>Screenshot of retro-looking site.</p>
				</figcaption>
			</figure>
		</header>
		<div class="content">
			<h2 id="Introduction">Introduction</h2>
			<p>This is one of those projects which are born after a burst of excitement but you end up not finishing it, to the uncomfortable point were it isn’t good enough to publish but it is good enough to talk about it.</p>

			<p>So, in this series I will share with you how I retake this project and finish it to the MVP point in <s>two weekends</s>!</p>

			<h2 id="What the project is about">What the project is about</h2>
			<p>I bought a banana phone after watching some video about this (I don’t remember exactly what video it was). The fact that I could create apps for a feature phone using web technologies blew my mind — I remember being a kid and creating what we now call “feature phones” using small and thin wood rectangles that (for some strange reason) were laying around in my house. I would make different designs using tape, rubber bands, nails and color markers.</p>

			<p>Anyways, I bought the thing and went on to enable development mode and got a Hello World app running.</p>

			<p>A few months past by and suddenly decided I wanted to do something with it. I though of remaking <a href="https://fergarram.itch.io/amateur-archaeology-iii">a game I made</a> for a game jam some years ago using Game Maker.  This was the perfect idea, the game was simple enough so I started on working on it.</p>

			<h2 id="Defining the MVP">Defining the MVP</h2>
			<p>As a starting point it should have the same functionalities as the original game with some variations and additions:</p>

			<ul><li>Infinite diggin' (done before this devlog started)
			</li><li>Intro screen
			</li><li>Dialogs (UI)
			</li><li>Treasures - with different rewards
			</li><li>Time, score and game states
			</li><li>Foes - Fire and Scorpions
			</li><li>Randomized hue (can change)
			</li></ul>

			<h3 id="Game Rules">Game Rules</h3>
			<ol start="1"><li>Game objective is to reach the score goal before time runs out.
			</li><li>If you pass the score goal you get extra time for the next level.
			</li></ol>

			<h2 id="Day 1">Day 1</h2>
			<p>I’ll start by taking the intro image from the original game and adapting it to the resolution of the Banana Phone (240 x 320px). I use <a href="https://www.aseprite.org/">Aseprite</a> for manipulating pixels and <a href="https://www.sketch.com/">Sketch</a> for… level design? I like to use Sketch for moving the assets around and prototyping ideas.</p>
			<picture><img src='/temp/blog-1.jpg' alt="Screenshot of game in first week"></picture>
		</div>
	</article>
</main>

<Footer />

<style lang="scss">
	@import '../styles/utils.scss';
	@import '../styles/page.scss';

	.main__wrapper {
		@extend %container;
	}

	.header {
		display: grid;

		@include media('>tablet-large') {
			grid-template-columns: 0.9fr 1.1fr;
			align-items: center;
		}

		&__text-col {
			order: 2;
			padding: rem-calc(16);

			@include media('>phone-medium') {
				padding: rem-calc(24) rem-calc(32);
			}

			@include media('>tablet') {
				width: rem-calc(768);
				padding: rem-calc(32);
				margin: 0 auto;
			}

			@include media('>tablet-large') {
				width: auto;
				margin: 0;
			}
		}

		&__title {
			margin-top: rem-calc(8);
			font-family: $font-oswald;
			font-weight: 700;
			font-size: rem-calc(34);
			line-height: 1.4;
			letter-spacing: -0.05em;

			@include media('>phone-medium') {
				font-size: rem-calc(46);
			}

			@include media('>tablet') {
				margin-top: rem-calc(12);
				font-size: rem-calc(56);
			}

			@include media('>tablet-large') {
				margin-top: 0;
				font-size: rem-calc(48);
			}

			@include media('>desktop-small') {
				font-size: fluid('desktop-small', 'desktop-medium', 48px, 64px);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(64);
			}
		}

		&__date {
			display: block;
			margin-top: 1.15em;
			font-size: rem-calc(14);
			font-weight: 300;
			padding-left: rem-calc(4);

			@include media('>phone-medium') {
				font-size: rem-calc(16);
			}

			@include media('>desktop-small') {
				margin-top: 2em;
			}
		}

		&__figure {
			display: block;
			order: 1;

			@include media('>tablet-large') {
				order: 2;
			}

			img {
				width: 100%;
				height: 60vw;
				object-fit: cover;
				object-position: center;

				@include media('>tablet-large') {
					height: 38vw;
				}

				@include media('>desktop-small') {
					max-height: rem-calc(520);
				}
			}

			figcaption {
				font-size: rem-calc(12);
				font-weight: 300;
				text-align: center;
				margin-top: rem-calc(4);

				@include media('>tablet') {
					font-size: rem-calc(16);
				}

				@include media('>desktop-small') {
					font-size: rem-calc(14);
				}
			}
		}
	}

	.content {
		padding: rem-calc(16);
		font-size: rem-calc(14);
		line-height: 1.7;

		@include media('>phone-medium') {
			padding: rem-calc(16) rem-calc(32);
			font-size: rem-calc(18);
		}

		@include media('>tablet') {
			max-width: rem-calc(768);
			margin: 0 auto;
			font-size: rem-calc(18);
		}

		@include media('>tablet-large') {
			max-width: 48em;
			margin-top: rem-calc(80);
		}

		:global(p) {
			margin-bottom: 1.5em;
		}

		:global(h2) {
			margin-top: 1.2em;
			margin-bottom: 0.8em;
			font-family: $font-oswald;
			font-weight: 700;
			font-size: rem-calc(24);
			line-height: 1.35;
			letter-spacing: -0.05em;

			@include media('>phone-medium') {
				font-size: rem-calc(32);
			}

			@include media('>tablet') {
				font-size: rem-calc(36);
			}

			@include media('>tablet-large') {
				margin-top: 1.5em;
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(40);
			}
		}

		:global(h3) {
			margin-top: 1.2em;
			margin-bottom: 0.8em;
			font-family: $font-oswald;
			font-weight: 500;
			font-size: rem-calc(20);
			line-height: 1.35;
			letter-spacing: -0.05em;

			@include media('>phone-medium') {
				font-size: rem-calc(22);
			}

			@include media('>tablet') {
				font-size: rem-calc(28);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(32);
			}
		}

		:global(h2:first-child) {
			margin-top: 0;
		}

		:global(a) {
			font-weight: 700;
		}

		:global(ol) {
			padding-left: rem-calc(24);
		}

		:global(ol li) {
			margin-bottom: rem-calc(8);
		}

		:global(ol li::marker) {
			font-style: italic;
			font-weight: 600;
		}

		:global(ul) {
			list-style-type: none;
		}

		:global(ul li) {
			display: flex;
			margin-bottom: rem-calc(8);
		}

		:global(ul li::before) {
			content: '';
			display: block;
			min-width: rem-calc(4);
			min-height: rem-calc(4);
			max-width: rem-calc(4);
			max-height: rem-calc(4);
			margin-right: 8px;
			margin-top: 8px;
			border-radius: 50%;
			border: 2px solid black;

			@include media('>phone-medium') {
				margin-top: rem-calc(12);
			}
		}

		:global(picture) {
			display: block;

			@include media('>phone-medium') {
				margin: rem-calc(32) 0;
			}
		}
	}
</style>