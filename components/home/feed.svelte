<script>
	export let type;
	export let articles = [
		{
			title: 'Window-based retro-looking version of fernando.works',
			link: '/',
			cover: {
				url: 'temp/cover-1.jpg',
				alt: 'Lorem ipsum',
			},
			excerpt: 'I built a video game for feature phones using JavaScript. I shared my experience of working with KaiOS and WebGL.'
		},
		{
			title: 'Window-based retro-looking version of fernando.works',
			link: '/',
			cover: {
				url: 'temp/cover-1.jpg',
				alt: 'Lorem ipsum',
			},
			excerpt: 'I built a video game for feature phones using JavaScript. I shared my experience of working with KaiOS and WebGL.'
		}
	];
</script>

<div class="feed">
	{ #each articles as article }
		<article class="article article--{ type }">
			<a href={ article.link } class="article__cover">
				<img
					src={ article.cover.url }
					alt={ article.cover.alt }
					class="article__cover-image"
				/>
			</a>
			<span class="article__title">
				{ article.title }
			</span>
			<p
				class="article__excerpt">
				{ article.excerpt }
			</p>
			<a href={ article.link } class="link-button article__cta">
				{#if type === 'work'}
					View project
				{:else}
					Read article
				{/if}
			</a>
		</article>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/utils.scss';

	.feed {
		margin-top: rem-calc(32);
	}

	.article {
		margin-bottom: rem-calc(32);

		@include media('>phone-medium') {
			max-width: rem-calc(270);
		}

		@include media('>tablet') {
			max-width: 100%;
		}

		@include media('>tablet-large') {
			margin-bottom: rem-calc(64);
			max-width: rem-calc(416);
		}

		@include media('>desktop-small') {
			max-width: fluid('desktop-small', 'desktop-medium', 416px, 448px);
		}

		@include media('>desktop-medium') {
			max-width: rem-calc(448);
		}

		&__cover {
			display: block;
			width: 100%;
			height: fluid('phone-xsmall', 'phone-small', 128px, 200px);
			margin-bottom: rem-calc(16);
			border-radius: 5px;
			overflow: hidden;

			@include media('>phone-small') {
				width: rem-calc(385);
				height: rem-calc(200);
			}

			@include media('>phone-medium') {
				width: 100%;
				height: rem-calc(128);
			}

			@include media('>tablet') {
				height: fluid('tablet', 'tablet-large', 148px, 200px);
			}

			@include media('>tablet-large') {
				height: rem-calc(200);
			}

			@include media('>desktop-small') {
				height: fluid('desktop-small', 'desktop-medium', 200px, 208px);
			}

			@include media('>desktop-medium') {
				height: rem-calc(208);
			}
		}

		&__cover-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		&__title {
			display: block;
			margin-bottom: rem-calc(16);
			font-size: rem-calc(32);
			font-family: $font-oswald;
			letter-spacing: calc-letter(-5%);
			transform: translateX(#{ calc-letter(-5%) });
			font-weight: 700;
			line-height: 1.4;

			@include media('>phone-medium') {
				font-size: rem-calc(28);
			}

			@include media('>desktop-small') {
				font-size: fluid('desktop-small', 'desktop-medium', 28px, 32px);
			}

			@include media('>desktop-medium') {
				font-size: rem-calc(32);
			}
		}

		&__excerpt {
			display: block;
			margin-bottom: rem-calc(16);
			font-weight: 400;
			line-height: 1.7;

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				font-size: rem-calc(16);
			}
		}

		&__cta {
			display: block;

			@include media('>phone-medium') {
				font-size: rem-calc(14);
			}

			@include media('>tablet') {
				font-size: rem-calc(16);
			}
		}

		&--work {
			.article__title {
				font-size: rem-calc(28);

				@include media('>desktop-small') {
					font-size: fluid('desktop-small', 'desktop-medium', 28px, 32px);
				}

				@include media('>desktop-medium') {
					font-size: rem-calc(32);
				}
			}

			.article__excerpt {
				display: none;

				@include media('>phone-medium') {
					display: block;
				}
			}

			.article__cta {
				display: none;

				@include media('>phone-medium') {
					display: block;
				}
			}
		}
	}
</style>