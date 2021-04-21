<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import HeroBlock from '../components/hero-block.svelte';
	import Feed from '../components/home/feed.svelte';
</script>

<svelte:head>
	<title>Home - Fernando.Works</title>
</svelte:head>

<Header />

<main class="main">
	<div class="main__wrapper">
		<HeroBlock
			isMain={true}
			title="Fernando"
			imageSrc="assets/yo.jpg"
			imageAlt="Fernando wearing a white cap">
			<p>UX Developer. I make sure the products I build help their target audience and are easy to maintain.</p>
			<p>Experienced making Vue.js applications and business-oriented marketing pages with Next.js and WordPress.</p>
			<a class="link-button" href="/">
				Bio
			</a>
			<a class="link-button" href="/">
				LinkedIn
			</a>
			<a class="link-button" href="/">
				Github
			</a>
			<a class="link-button" href="/">
				Portfolio
			</a>
			<a class="link-button" href="/">
				Twitter
			</a>
		</HeroBlock>
		<HeroBlock
			title="Podcast"
			imageSrc="assets/podcast.jpg"
			imageAlt="Kid yelling to a microphone">
			<p>
				I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations.
			</p>
			<a class="link-button" href="/podcast">
				See all episodes
			</a>
		</HeroBlock>
		<HeroBlock
			title="Projects"
			imageSrc="assets/work.jpg"
			imageAlt="Kid building with legos"
			fixedContent={ true }>
			<p>
				A mix of toys, marketing websites, mobile apps, videogames, and ui design mocks.
			</p>
			<a class="link-button" href="/projects">
				See all projects
			</a>
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
				I like to write about my projects, ideas, successes and failures within my career.
			</p>
			<a class="link-button" href="/work">
				See all writings
			</a>
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