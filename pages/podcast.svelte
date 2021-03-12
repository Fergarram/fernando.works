<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import Section from '../components/home/section.svelte';
</script>

<svelte:head>
	<title>Podcats - Fernando.Works</title>
</svelte:head>

<Header title="Podcast" />

<main class="main">
	<div class="main__wrapper">
		<Section
			title="Podcast"
			imageSrc="assets/podcast.jpg"
			imageAlt="Kid yelling to a microphone">
			<p>
				I host a podcast called <a href="/">Digital Crafters</a> where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
			</p>
			<a class="link-button" href="/podcast">
				See episodes
			</a>
		</Section>
	</div>
</main>

<Footer />

<style lang="scss">
	@import '../styles/utils.scss';
	@import '../styles/page.scss';

	.main {
		&__wrapper {
			@extend %container;

			padding: rem-calc(24) rem-calc(20);

			@include media('>phone-small') {
				max-width: rem-calc(425);
			}

			@include media('>phone-medium') {
				max-width: rem-calc(1440);
			}

			@include media('>tablet') {
				padding: rem-calc(48);
			}

			@include media('>tablet-large') {
				padding: rem-calc(48) rem-calc(64);
			}

			@include media('>desktop-small') {
				padding: rem-calc(64) rem-calc(80);
			}

			@include media('>desktop-medium') {
				padding: rem-calc(100);
			}
		}
	}
</style>