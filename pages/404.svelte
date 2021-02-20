<svelte:head>
	<title>Page not found - Fernando.Works</title>
</svelte:head>

<main class="main">
	<div class="main__wrapper">
		<section class="section">
			<header class="section__header">
				<h1 class="section__title">
					404
				</h1>
			</header>
			<div class="section__content">
				<p>
					Page not found
				</p>
				<a class="link-button" href="/">Back home</a>
			</div>
		</section>
	</div>
</main>

<style lang="scss">
	@import '../styles/utils.scss';

	.main {
		&__wrapper {
			@extend %container;

			padding: rem-calc(24) rem-calc(20);

			@include media('>phone-medium') {
				display: grid;
				grid-template-columns: 1fr 1fr;
				column-gap: rem-calc(20);
			}
		}
	}

	.section {
		margin-bottom: rem-calc(64);

		&__header {
			display: flex;
			align-items: center;
			margin-bottom: rem-calc(24);
		}

		&__picture {
			display: block;

			&-image {
				height: fluid('phone-xsmall', 'phone-small', 72px, 86px);
				object-fit: cover;
				object-position: center;

				@include media('>phone-small') {
					height: rem-calc(90);
				}

				@include media('>phone-medium') {
					height: rem-calc(72);
				}
			}
		}

		&__title {
			margin-right: fluid('phone-xsmall', 'phone-small', 16px, 24px);
			font-family: $font-oswald;
			font-size: fluid('phone-xsmall', 'phone-small', 48px, 64px);
			letter-spacing: calc-letter(-5%);
			font-weight: 700;
			text-transform: uppercase;

			@include media('>phone-small') {
				font-size: rem-calc(64);
				margin-right: rem-calc(24);
			}

			@include media('>phone-medium') {
				font-size: rem-calc(48);
				margin-right: rem-calc(16);
			}
		}

		&__content {
			line-height: 1.5;
			font-weight: 500;

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			p {
				margin-bottom: rem-calc(20);
			}
		}
	}

	.link-button {
		display: block;
		margin-bottom: rem-calc(20);
	}
</style>