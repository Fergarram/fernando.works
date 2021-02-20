<script>
	import WorkFeed from '../components/home/work-feed.svelte';
	import BlogFeed from '../components/home/blog-feed.svelte';
	import SiteHeader from '../components/layout/site-header.svelte';

	export let route;
</script>

<svelte:head>
	<title>Home - Fernando.Works</title>
</svelte:head>

<SiteHeader {route} />

<main class="main">
	<div class="main__wrapper">
		<section class="section">
			<header class="section__header">
				<h1 class="section__title">
					Fernando
				</h1>
				<picture class="section__picture">
					<img
						class="section__picture-image"
						src="assets/yo.jpg"
						alt="Fernando wearing a white cap"
					/>
				</picture>
			</header>
			<div class="section__content section__content--fernando">
				<p>
					Web artisan, sleeplessly finding new side projects to <s>never finish</s> invest my free time on.
				</p>
				<p>
					Frontend Developer. UI Designer. Design Technologist wannabe.
				</p>
				<p>
					I like Vue for apps and Svelte for websites.
				</p>
				<a class="link-button" href="/">Download my CV</a>
				<a class="link-button" href="/">Download (old) portfolio</a>
			</div>
		</section>
		<section class="section">
			<header class="section__header">
				<h1 class="section__title">
					Podcast
				</h1>
				<picture class="section__picture">
					<img
						class="section__picture-image"
						src="assets/podcast.jpg"
						alt="Kid yelling to a microphone"
					/>
				</picture>
			</header>
			<div class="section__content">
				<p>
					I host a podcast called <a href="/">Digital Crafters</a> where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
				</p>
				<a class="link-button" href="/podcast">See episodes</a>
			</div>
		</section>
		<section class="section">
			<header class="section__header">
				<h1 class="section__title">
					Work
				</h1>
				<picture class="section__picture">
					<img
						class="section__picture-image"
						src="assets/work.jpg"
						alt="Kid building with legos"
					/>
				</picture>
			</header>
			<div class="section__content">
				<p>
					Tools. Games. Apps. Websites.
				</p>
			</div>
			<WorkFeed />
		</section>
		<section class="section">
			<header class="section__header">
				<h1 class="section__title">
					Blog
				</h1>
				<picture class="section__picture">
					<img
						class="section__picture-image"
						src="assets/blog.jpg"
						alt="Old man reading newspapper"
					/>
				</picture>
			</header>
			<div class="section__content">
				<p>
					I like to write but I’m not as consistent as I’d like to be. Working on it, tho.
				</p>
			</div>
			<BlogFeed />
		</section>
	</div>
</main>

<footer>
	Copyright © Fernando Garcia. All rights reserved.
</footer>

<style lang="scss">
	@import '../styles/utils.scss';
	@import '../styles/page.scss';

	.main {
		&__wrapper {
			@extend %container;

			padding: rem-calc(24) rem-calc(20);

			@include media('>phone-medium') {
				display: grid;
				grid-template-columns: 1fr 1fr;
				column-gap: rem-calc(20);
			}

			@include media('>tablet') {
				padding: rem-calc(48);
				column-gap: rem-calc(32);
			}

			@include media('>tablet-large') {
				padding: rem-calc(48) rem-calc(64);
				column-gap: rem-calc(64);
			}

			@include media('>desktop-small') {
				padding: rem-calc(64) rem-calc(80);
			}

			@include media('>desktop-medium') {
				padding: rem-calc(100);
			}
		}
	}

	.section {
		margin-bottom: rem-calc(64);

		&__header {
			display: flex;
			align-items: center;
			margin-bottom: rem-calc(24);

			@include media('>desktop-small') {
				margin-bottom: rem-calc(32);
			}
		}

		&__picture {
			display: block;

			&-image {
				height: fluid('phone-xsmall', 'phone-small', 72px, 90px);
				object-fit: cover;
				object-position: center;

				@include media('>phone-small') {
					height: rem-calc(90);
				}

				@include media('>phone-medium') {
					height: rem-calc(72);
				}

				@include media('>tablet') {
					height: fluid('tablet', 'tablet-large', 72px, 90px);
				}

				@include media('>tablet-large') {
					height: rem-calc(90);
				}

				@include media('>desktop-small') {
					height: rem-calc(115);
				}
			}
		}

		&__title {
			margin-right: fluid('phone-xsmall', 'phone-small', 16px, 24px);
			font-size: fluid('phone-xsmall', 'phone-small', 48px, 64px);
			font-family: $font-oswald;
			letter-spacing: calc-letter(-5%);
			transform: translateX(#{ calc-letter(-5%) });
			font-weight: 700;
			text-transform: uppercase;
			line-height: 0.9;

			@include media('>phone-small') {
				font-size: rem-calc(64);
				margin-right: rem-calc(24);
			}

			@include media('>phone-medium') {
				font-size: rem-calc(48);
				margin-right: rem-calc(16);
			}

			@include media('>tablet') {
				margin-right: fluid('tablet', 'tablet-large', 16px, 24px);
				font-size: fluid('tablet', 'tablet-large', 48px, 74px);
			}

			@include media('>tablet-large') {
				margin-right: rem-calc(24);
				font-size: rem-calc(74);
			}

			@include media('>desktop-small') {
				margin-right: rem-calc(32);
				font-size: fluid('desktop-small', 'desktop-medium', 80px, 100px);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(100);
			}
		}

		&__content {
			line-height: 1.5;
			font-weight: 500;

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				max-width: 30em;
				font-size: rem-calc(16);
			}

			@include media('>desktop-small') {
				max-width: 32em;
			}

			p {
				margin-bottom: rem-calc(20);
			}

			&--fernando {
				@include media('>tablet') {
					max-width: 25em;
				}

				@include media('>desktop-small') {
					max-width: 30em;
				}
			}
		}
	}

	.link-button {
		display: inline-block;
		margin-bottom: rem-calc(20);

		&:not(:last-child) {
			margin-right: rem-calc(20);
		}
	}
</style>