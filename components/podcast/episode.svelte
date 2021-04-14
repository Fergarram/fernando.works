<script>
	export let title;
	export let imageSrc;
	export let imageAlt;
	export let simplecast;
	export let spotify;
	export let itunes;
	export let youtube;
	export let amazon;

	let showPlayer = false;
</script>

<article class="episode">
	<picture class="episode__picture">
		<img
			src={ imageSrc }
			alt={ imageAlt }
		/>
	</picture>
	<div class="episode__content">
		<strong class="episode__title">
			{ title }
		</strong>
		<p class="episode__summary">
			<slot></slot>
		</p>
		<ul class="episode__list">
			<li>
				<button
					title="Show inline web player"
					class="episode__button"
					on:click={ () => showPlayer = !showPlayer }>
					{ !showPlayer ? 'Web ' : 'Hide ' } Player
				</button>
			</li>
			<li>
				<a class="link-button" href={ youtube }>
					⎋ YouTube
				</a>
			</li>
			<li>
				<a class="link-button" href={ spotify }>
					⎋ Spotify
				</a>
			</li>
			<!-- <li>
				<a class="link-button" href={ itunes }>
					⎋ iTunes
				</a>
			</li> -->
			<li>
				<a class="link-button" href={ amazon }>
					⎋ Amazon
				</a>
			</li>
		</ul>
		{ #if showPlayer }
			<iframe
				title={ title }
				class="episode__player"
				height="200px" width="100%"
				frameborder="no" scrolling="no"
				seamless src={ simplecast }>
			</iframe>
		{ /if }
	</div>
</article>

<style lang="scss">
	@import '../../styles/utils.scss';
	@import '../../styles/page.scss';

	.episode {
		margin-bottom: rem-calc(48);

		@include media('>phone-medium') {
			display: flex;
		}

		&__title {
			font-family: $font-oswald;
			font-weight: 700;
			font-size: rem-calc(28);
			letter-spacing: -0.05em;

			@include media('>phone-medium') {
				font-size: rem-calc(24);
			}

			@include media('>tablet') {
				font-size: rem-calc(32);
			}
		}

		&__summary {
			margin-top: rem-calc(24);
			margin-bottom: rem-calc(32);
			line-height: 1.5;

			@include media('>phone-medium') {
				margin-top: rem-calc(12);
				margin-bottom: rem-calc(24);
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				font-size: rem-calc(16);
			}
		}

		&__list {
			display: flex;
			flex-wrap: wrap;
			list-style: none;

			li:not(:last-child) {
				margin-right: rem-calc(24);
			}

			li {
				@include media('>phone-medium') {
					font-size: rem-calc(14);
				}

				@include media('>tablet') {
					font-size: rem-calc(16);
				}
			}
		}

		&__button {
			color: $color-link;
			font-family: $font-mono;
			font-weight: 700;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			font-size: rem-calc(16);

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				font-size: rem-calc(16);
			}
		}

		&__picture {
			position: relative;
			display: block;
			filter: drop-shadow(0px 4px rem-calc(20) rgba(0, 0, 0, 0.25));
			padding-bottom: rem-calc(12);
			padding-right: rem-calc(12);
			margin-bottom: rem-calc(20);
			margin-right: rem-calc(20);

			@include media('>phone-medium') {
				margin-top: rem-calc(12);
			}

			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: rem-calc(80);
				height: rem-calc(80);
				background-color: black;
				border-radius: rem-calc(10);
			}

			img {
				position: relative;
				min-width: rem-calc(80);
				width: rem-calc(80);
				height: rem-calc(80);
				padding: 8px;
				background-color: white;
				object-fit: cover;
				object-position: center;
				transform: translate( 0.75rem, 0.75rem );
				border-radius: rem-calc(10);
			}
		}
	}
</style>