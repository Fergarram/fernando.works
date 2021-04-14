<script>
	export let title;
	export let isFernando = false;
	export let single = false;
	export let fixedContent = false;
	export let imageSrc = "";
	export let imageAlt = "";
</script>

<section class="hero-block" class:hero-block--single={ single }>
	<header class="hero-block__header">
		{ #if isFernando }
			<h1 class="hero-block__title">
				{ title }
			</h1>
		{ :else }
			<h2 class="hero-block__title">
				{ title }
			</h2>
		{ /if }
		{ #if imageSrc }
			<picture
				class:hero-block__picture--single={ single }
				class="hero-block__picture">
				<img
					class="hero-block__picture-image"
					src={ imageSrc }
					alt={ imageAlt }
				/>
			</picture>
		{ /if }
	</header>
	<div
		class="hero-block__content"
		class:hero-block__content--fernando={ isFernando }
		class:hero-block__content--fixed={ fixedContent }>
		<slot></slot>
	</div>
	<slot name="feed"></slot>
</section>

<style lang="scss">
	@import '../styles/utils.scss';

	@keyframes entrance {
		0% {
			transform: translateY(2rem);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.hero-block {
		margin-bottom: rem-calc(64);

		@include media('>phone-medium') {
			margin-bottom: rem-calc(32);
		}

		@include media('>tablet') {
			margin-bottom: rem-calc(24);
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
			transform: translateY(0);
			opacity: 0;
			animation-name: entrance;
			animation-delay: 0.2s;
			animation-duration: 1s;
			animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
			animation-fill-mode: forwards;
			animation-iteration-count: 1;

			&-image {
				height: fluid('phone-xsmall', 'phone-small', 72px, 90px);
				object-fit: cover;
				object-position: center;
				border-radius: rem-calc(10);

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

			&--single {
				@include media('>phone-medium') {
					display: none;
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
			transform: translateY(0);
			opacity: 0;
			animation-name: entrance;
			animation-delay: 0s;
			animation-duration: 1s;
			animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
			animation-fill-mode: forwards;
			animation-iteration-count: 1;

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
			line-height: 1.7;
			font-weight: 400;

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				max-width: 30em;
			}

			@include media('>tablet-large') {
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
		}

		&--single {
			.hero-block__title {
				@include media('>phone-medium') {
					font-size: rem-calc(72);
				}

				@include media('>tablet-large') {
					margin-bottom: rem-calc(16);
					font-size: rem-calc(86);
				}

				@include media('>desktop-small') {
					font-size: fluid('desktop-small', 'desktop-medium', 80px, 100px);
				}

				@include media('>desktop-medium') {
					font-size: rem-calc(100);
				}
			}
		}
	}
</style>