<script>
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import Filters from '../components/projects/filters.svelte';
</script>

<svelte:head>
	<title>Projects - Fernando.Works</title>
</svelte:head>

<Header title="Projects" />

<main class="main">
	<div class="main__wrapper">
		<section class="hero">
			<div class="hero__columns">
				<picture class="hero__picture">
					<img
						src="/assets/projects.png"
						alt=""
					/>
				</picture>
				<div class="hero__content">
					<h1 class="hero__title">
						Projects
					</h1>
					<p class="hero__paragraph">
						A mix of toys, marketing websites, mobile apps, videogames, and ui design mocks.
					</p>
					<Filters isMobile={false} />
				</div>
			</div>
			<Filters isMobile={true} />
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
				padding: rem-calc(24);
				padding-top: rem-calc(48);
			}

			@include media('>tablet') {
				padding-top: fluid('tablet', 'tablet-large', 48px, 64px);
			}

			@include media('>tablet-large') {
				padding-top: rem-calc(64);
			}
		}
	}

	.hero {
		&__columns {
			@include media('>phone-medium') {
				display: grid;
				grid-template-columns: 1fr 1fr;
				justify-content: center;
				align-items: center;
			}

			@include media('>tablet-large') {
				align-items: flex-start;
			}

			@include media('>desktop-small') {
				grid-template-columns: 0.8fr 1.2fr;
			}
		}

		&__picture {
			display: block;
			margin-bottom: rem-calc(24);

			@include media('>phone-medium') {
				margin-bottom: 0;
				order: 1;
				transform: translateX(-10%);
			}

			@include media('>desktop-small') {
				transform: translateX(-5%);
			}

			@include media('>desktop-medium') {
				transform: none;
			}

			img {
				object-fit: contain;
				object-position: center;
			}
		}

		&__content {
			@include media('>phone-medium') {
				padding-left: fluid('phone-medium', 'tablet', 28px, 32px);
				padding-right: rem-calc(32);
			}

			@include media('>tablet') {
				padding-right: rem-calc(64);
			}

			@include media('>desktop-medium') {
				padding-left: rem-calc(96);
			}
		}

		&__title {
			margin-bottom: rem-calc(24);
			font-size: fluid('phone-xsmall', 'phone-small', 48px, 64px);
			font-family: $font-oswald;
			letter-spacing: calc-letter(-5%);
			transform: translateX(#{ calc-letter(-5%) });
			font-weight: 700;
			text-transform: uppercase;
			line-height: 0.9;

			@include media('>phone-small') {
				font-size: rem-calc(64);
			}

			@include media('>phone-medium') {
				font-size: rem-calc(48);
			}

			@include media('>tablet') {
				font-size: fluid('tablet', 'tablet-large', 64px, 74px);
			}

			@include media('>tablet-large') {
				margin-top: rem-calc(32);
				font-size: rem-calc(74);
			}

			@include media('>desktop-small') {
				margin-top: rem-calc(48);
				margin-bottom: rem-calc(40);
				font-size: fluid('desktop-small', 'desktop-medium', 86px, 100px);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(100);
			}
		}

		&__paragraph {
			line-height: 1.7;
			font-weight: 400;

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

			:global( & > p ) {
				margin-bottom: rem-calc(20);
			}

			:global( & > p a) {
				white-space: nowrap;
			}
		}
	}
</style>