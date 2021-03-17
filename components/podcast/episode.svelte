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
				<a class="link-button" href={ youtube }>
					YouTube
				</a>
			</li>
			<li>
				<a class="link-button" href={ spotify }>
					Spotify
				</a>
			</li>
			<li>
				<a class="link-button" href={ itunes }>
					iTunes
				</a>
			</li>
			<li>
				<a class="link-button" href={ amazon }>
					Amazon
				</a>
			</li>
			<li>
				<button
					class="episode__button"
					on:click={ () => showPlayer = !showPlayer }>
					{ !showPlayer ? 'Show ' : 'Hide ' } Player
				</button>
			</li>
		</ul>
	</div>
	{ #if showPlayer }
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe
			class="episode__player"
			height="200px" width="100%"
			frameborder="no" scrolling="no"
			seamless src={ simplecast }>
		</iframe>
	{ /if }
</article>

<style lang="scss">
	@import '../../styles/utils.scss';
	@import '../../styles/page.scss';

	.episode {
		&__title {
			font-family: $font-oswald;
			font-weight: 700;
			font-size: rem-calc(28);
			letter-spacing: -0.05em;
		}

		&__summary {
			margin-top: rem-calc(24);
			margin-bottom: rem-calc(32);
			line-height: 1.5;
		}

		&__list {
			display: flex;
			flex-wrap: wrap;
			list-style: none;

			li:not(:last-child) {
				margin-right: rem-calc(24);
			}
		}

		&__button {
			font-family: $font-mono;
			padding: rem-calc(2) rem-calc(6);
		}

		&__picture {
			position: relative;
			display: block;
			filter: drop-shadow(0px 4px rem-calc(20) rgba(0, 0, 0, 0.25));
			padding-bottom: rem-calc(12);
			margin-bottom: rem-calc(20);

			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: rem-calc(80);
				height: rem-calc(80);
				background-color: black;
			}

			img {
				position: relative;
				width: rem-calc(80);
				height: rem-calc(80);
				padding: 8px;
				background-color: white;
				object-fit: cover;
				object-position: center;
				transform: translate( 0.75rem, 0.75rem );
			}
		}
	}
</style>