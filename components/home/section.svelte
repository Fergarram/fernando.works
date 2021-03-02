<script>
	export let title;
	export let isFernando = false;
	export let fixedContent = false;
	export let imageSrc;
	export let imageAlt;
</script>

<section class="section">
	<header class="section__header">
		{ #if isFernando }
			<h1 class="section__title">
				{ title }
			</h1>
		{ :else }
			<h2 class="section__title">
				{ title }
			</h2>
		{ /if }
		<picture class="section__picture">
			<img
				class="section__picture-image"
				src={ imageSrc }
				alt={ imageAlt }
			/>
		</picture>
	</header>
	<div
		class="section__content"
		class:section__content--fernando={ isFernando }
		class:section__content--fixed={ fixedContent }>
		<slot></slot>
	</div>
	<slot name="feed"></slot>
</section>

<style lang="scss">
	@import '../../styles/utils.scss';

	.section {
		margin-bottom: rem-calc(64);

		@include media('>phone-medium') {
			margin-bottom: rem-calc(32);
		}

		@include media('>tablet') {
			margin-bottom: rem-calc(64);
		}

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

			:global( & > p ) {
				margin-bottom: rem-calc(20);
			}

			:global( & > p a) {
				white-space: nowrap;
			}

			&--fernando {
				@include media('>tablet') {
					max-width: 25em;
				}

				@include media('>desktop-small') {
					max-width: 30em;
				}
			}

			&--fixed {
				@include media('>phone-medium') {
					// height: rem-calc(72);
				}
			}
		}
	}
</style>