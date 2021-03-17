<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import HeroBlock from '../components/home/hero-block.svelte';
	import Feed from '../components/home/feed.svelte';
</script>

<svelte:head>
	<title>Home - Fernando.Works</title>
</svelte:head>

<Header />

<main class="main">
	<div class="main__wrapper">
		<HeroBlock
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
		</HeroBlock>
		<HeroBlock
			title="Podcast"
			imageSrc="assets/podcast.jpg"
			imageAlt="Kid yelling to a microphone">
			<p>
				I host a podcast called <a href="/">Digital Crafters</a> where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
			</p>
			<a class="link-button" href="/podcast">
				See episodes
			</a>
		</HeroBlock>
		<HeroBlock
			title="Work"
			imageSrc="assets/work.jpg"
			imageAlt="Kid building with legos"
			fixedContent={ true }>
			<p>
				A mix of web toys, real websites, mobile apps, video games, and ui design mocks.
			</p>
			<!-- <a class="link-button" href="/work">
				See all projects
			</a> -->
			<div slot="feed">
				<Feed type="work"/>
			</div>
		</HeroBlock>
		<HeroBlock
			title="Blog"
			imageSrc="assets/blog.jpg"
			imageAlt="Old man reading newspapper"
			fixedContent={ true }>
			<p>
				I like to write about my projects, ideas, success and failures within my career.
			</p>
			<!-- <a class="link-button" href="/work">
				See all writings
			</a> -->
			<div slot="feed">
				<Feed type="blog"/>
			</div>
		</HeroBlock>
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