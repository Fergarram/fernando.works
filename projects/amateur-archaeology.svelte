<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import BackIcon from '../components/icons/back.svg.svelte';
</script>

<svelte:head>
	<title>Amateur Archaeology KaiOS Edition - Fernando.Works</title>
</svelte:head>

<Header title="Project Details"/>

<main class="main">
	<article class="main__wrapper">
		<header class="header">
			<a href="/" class="header__back">
				<BackIcon /> See all projects
			</a>
			<div class="header__text-col">
				<h1 class="header__title">
					Amateur Archaeology<br>KaiOS Edition <span>(2020)</span>
				</h1>
				<ul class="header__tags">
					<li class="header__tag">
						🕹 video game
					</li>
					<li class="header__tag">
						📱 KaiOS
					</li>
					<li class="header__tag">
						🌍 Web Development
					</li>
					<li class="header__tag">
						🎤 Talk
					</li>
					<li class="header__tag">
						📝 Devlog
					</li>
				</ul>
				<ul class="header__links">
					<li>
						<a class="link-button" href="/">
							Play the game
						</a>
					</li>
					<li>
						<a class="link-button" href="/">
							Fork the code
						</a>
					</li>
					<li>
						<a class="link-button" href="/">
							Read the devlog
						</a>
					</li>
				</ul>
			</div>
			<picture class="header__picture">
				<img
					src="/temp/amateur.jpg"
					alt="Post banner"
				/>
			</picture>
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

		max-width: rem-calc(1600);
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;

		@include media('>tablet-large') {
			display: grid;
			grid-template-columns: 0.9fr 1.1fr;
			align-items: center;
			padding-top: rem-calc(28);
		}

		&__back {
			position: absolute;
			display: flex;
			align-items: center;
			margin-top: rem-calc(10);
			margin-left: rem-calc(20);
			border: none;
			outline: none;
			color: white;
			background: transparent;
			text-decoration: none;
			font-size: rem-calc(14);
			z-index: 1;

			@include media('>phone-medium') {
				margin-left: rem-calc(36);
				margin-top: rem-calc(24);
			}

			@include media('>tablet-large') {
				top: 0;
				left: 0;
				margin-left: rem-calc(24);
				color: black;
				font-weight: 700;
			}

			@include media('>desktop-small') {
				margin-left: rem-calc(48);
				margin-top: rem-calc(48);
			}

			:global(svg) {
				margin-right: rem-calc(16);
			}

			:global(svg path) {
				@include media('>tablet-large') {
					fill: black;
				}
			}
		}

		&__tags {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
		}

		&__tag {
			padding: rem-calc(6) rem-calc(12);
			margin-right: rem-calc(12);
			margin-bottom: rem-calc(12);
			border-radius: rem-calc(10);
			font-size: rem-calc(12);
			text-transform: capitalize;
			background-color: #CFCFCF;
		}

		&__links {
			margin-top: rem-calc(16);
			list-style: none;
			font-size: rem-calc(14);

			@include media('>phone-medium') {
				display: flex;
				flex-wrap: wrap;
				margin-top: rem-calc(32);
			}

			@include media('>tablet') {
				font-size: rem-calc(16);
			}

			:global(li) {
				@include media('>phone-medium') {
					margin-right: 2em;
					margin-bottom: 1em;
				}
			}

			:global(li:last-child) {
				@include media('>tablet-large') {
					margin-bottom: 0;
				}
			}

			:global(li:last-child a) {
				@include media('>tablet-large') {
					margin-bottom: 0;
				}
			}
		}

		&__text-col {
			position: relative;
			order: 2;
			padding: rem-calc(16);
			z-index: 2;

			@include media('>phone-medium') {
				padding: rem-calc(24) rem-calc(32);
			}

			@include media('>tablet') {
				width: rem-calc(768);
				padding: rem-calc(32);
				margin: 0 auto;
			}

			@include media('>tablet-large') {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: auto;
				margin: 0;
				padding-left: rem-calc(48);
			}

			@include media('>desktop-small') {
				padding-bottom: 0;
			}
		}

		&__title {
			position: absolute;
			top: 0;
			transform: translateY(-120%);
			color: white;
			font-family: $font-oswald;
			font-weight: 500;
			font-size: rem-calc(36);
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
				position: static;
				margin-top: 0;
				margin-bottom: rem-calc(36);
				transform: none;
				font-size: rem-calc(48);
				color: black;
			}

			@include media('>desktop-small') {
				font-size: rem-calc(56);
				margin-bottom: rem-calc(56);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(64);
			}

			@include media('>desktop-mlarge') {
				font-size: rem-calc(72);
			}

			span {
				font-weight: 300;
				font-size: 0.85em;
			}
		}

		&__picture {
			display: block;
			position: relative;
			order: 0;

			@include media('>tablet-large') {
				height: 100%;
				padding: rem-calc(24);
				order: 2;
			}

			@include media('>desktop-small') {
				padding-right: rem-calc(48);
			}

			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 50%;
				background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);

				@include media('>tablet-large') {
					display: none;
				}
			}

			&::after {
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 50%;
				background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);

				@include media('>tablet-large') {
					display: none;
				}
			}

			img {
				width: 100%;
				height: 80vw;
				object-fit: cover;
				object-position: center;
				max-height: rem-calc(345);

				@include media('>phone-medium') {
					max-height: rem-calc(420);
				}

				@include media('>tablet-large') {
					height: 100%;
					max-height: 100%;
					border-radius: rem-calc(10);
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