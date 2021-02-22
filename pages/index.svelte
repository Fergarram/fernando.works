<script>
	import Header from '../components/layout/header.svelte';
	import Section from '../components/home/section.svelte';
	import Feed from '../components/home/feed.svelte';

	export let route;
</script>

<svelte:head>
	<title>Home - Fernando.Works</title>
</svelte:head>

<Header {route} />

<main class="main">
	<div class="main__wrapper">
		<Section
			isFernando={true}
			title="Fernando"
			imageSrc="assets/yo.jpg"
			imageAlt="Fernando wearing a white cap">
			<p>
				Web artisan, sleeplessly finding new side projects to <s>never finish</s> invest my free time on.
			</p>
			<p>
				Frontend Developer. UI Designer. Design Technologist wannabe.
			</p>
			<p>
				I like Vue for apps and Svelte for websites.
			</p>
			<a class="link-button" href="/">
				Download my CV
			</a>
			<a class="link-button" href="/">
				Download (old) portfolio
			</a>
		</Section>
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
		<Section
			title="Work"
			imageSrc="assets/work.jpg"
			imageAlt="Kid building with legos"
			fixedContent={ true }>
			<p>
				Tools. Games. Apps. Websites.
			</p>
			<div slot="feed">
				<Feed type="work"/>
			</div>
		</Section>
		<Section
			title="Blog"
			imageSrc="assets/blog.jpg"
			imageAlt="Old man reading newspapper"
			fixedContent={ true }>
			<p>
				I like to write but I’m not as consistent as I’d like to be. Working on it, tho.
			</p>
			<div slot="feed">
				<Feed type="blog"/>
			</div>
		</Section>
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

			@include media('>phone-small') {
				max-width: rem-calc(425);
			}

			@include media('>phone-medium') {
				display: grid;
				grid-template-columns: 1fr 1fr;
				column-gap: rem-calc(20);
				max-width: rem-calc(1440);
			}

			@include media('>tablet') {
				padding: rem-calc(48);
				gap: rem-calc(32);
			}

			@include media('>tablet-large') {
				padding: rem-calc(48) rem-calc(64);
				gap: rem-calc(64);
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