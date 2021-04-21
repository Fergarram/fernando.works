<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import HeroBlock from '../components/hero-block.svelte';
	import Episode from '../components/podcast/episode.svelte';
</script>

<svelte:head>
	<title>Podcats - Fernando.Works</title>
</svelte:head>

<Header title="Podcast" />

<main class="main">
	<div class="main__wrapper">
		<HeroBlock
			title="Podcast"
			isMain={true}
			single={true}>
			<p>
				I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
			</p>
			<picture
				class="main__picture">
				<img
					src="/assets/mic.png"
					alt="Microphone on table"
				/>
			</picture>
		</HeroBlock>
		<section class="main__episodes">
			<Episode
				title="Episode #2 - @raysan5"
				imageSrc="assets/ray.jpg"
				imageAlt="Ramon Santamaria"
				simplecast="https://player.simplecast.com/c5e88d4f-ee4e-43cb-8e03-952f6c34c45c?dark=false"
				spotify=""
				itunes=""
				youtube=""
				amazon="">
				Ramon <a href="twitter.com/rubna_">(@raysan5)</a>, a game developer from the Netherlands who’s part of Sokpop. We talk about his creative process...
			</Episode>
			<Episode
				title="Episode #1 - @rubna_"
				imageSrc="assets/rub.jpg"
				imageAlt="Ruben's twitter avatar"
				simplecast="https://player.simplecast.com/c5e88d4f-ee4e-43cb-8e03-952f6c34c45c?dark=false"
				spotify=""
				itunes=""
				youtube=""
				amazon="">
				Ruben <a href="twitter.com/rubna_">(@rubna_)</a>, a game developer from the Netherlands who’s part of Sokpop. We talk about his creative process...
			</Episode>
		</section>
	</div>
</main>

<Footer />

<style lang="scss">
	@import '../styles/utils.scss';
	@import '../styles/page.scss';

	.main {
		&__wrapper {
			@extend %container;

			position: relative;
			padding: rem-calc(24) rem-calc(20);

			@include media('>phone-small') {
				max-width: rem-calc(425);
			}

			@include media('>phone-medium') {
				max-width: rem-calc(1440);
				padding: fluid('phone-medium', 'tablet', 24px, 48px);
			}

			@include media('>tablet') {
				padding: fluid('tablet', 'tablet-large', 48px, 80px);
			}

			@include media('>tablet-large') {
				padding: rem-calc(80) rem-calc(80);
			}

			@include media('>desktop-small') {
				padding: rem-calc(112) rem-calc(128);
				max-width: rem-calc(1280);
			}
		}

		&__picture {
			display: none;

			@include media('>phone-medium') {
				display: block;
				position: absolute;
				right: 0;
				top: 0;
				transform: translateX(30%);
				z-index: -1;
			}

			@include media('>desktop-small') {
				transform: translateX(10%);
				top: rem-calc(28);
			}

			img {
				width: 50vw;
				max-width: rem-calc(502);
			}
		}

		&__episodes {
			@include media('>phone-medium') {
				margin-top: rem-calc(72);
			}

			@include media('>tablet') {
				max-width: rem-calc(600);
			}
		}

		:global(.hero-block__content) {
			@include media('>phone-medium') {
				width: 65%;
			}

			@include media('>tablet') {
				max-width: 100%;
			}

			@include media('>desktop-small') {
				width: 80%;
				max-width: 40em;
			}
		}
	}
</style>