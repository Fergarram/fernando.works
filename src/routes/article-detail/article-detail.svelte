<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request;
	const { html, frontmatter } = data;
</script>

<svelte:head>
	<title>{frontmatter.title} - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-light-gray.png">
	<meta name="description" content={frontmatter.excerpt} />
	<link href={request.permalink} rel="canonical" />
</svelte:head>

<style>
	.cover {
		width: 100%;
		height: 50vw;
	}

	/* SM */
	@media screen and (min-width: 37.5rem) {
		.cover {
			height: calc((100vw - 6rem) / 2 );
		}
	}

	/* MD */
	@media screen and (min-width: 48rem) {
		.cover {
			height: calc((100vw - 8rem) / 2 );
		}
	}

	/* LG */
	@media screen and (min-width: 64rem) {
		.cover {
			height: calc((100vw - 10rem) / 2 );
		}
	}

	/* XL */
	@media screen and (min-width: 80rem) {
		.cover {
			height: 33rem
		}
	}
</style>

<div class="bg-light-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-light-gray min-h-screen pb-40">
			<article>
				<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-8 xl:mb-16">
					<picture class="cover block">
						<img
							class="w-full h-full object-center object-cover"
							alt={frontmatter.cover.alt}
							src={frontmatter.cover.url}
						/>
					</picture>
				</div>
				<div class="max-w-screen-xl mx-auto px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<h1 class="font-bold text-32 sm:text-44 md:text-48 lg:text-64 leading-125 tracking-title mb-6 md:mb-10 lg:mb-12">
						{ frontmatter.title }
					</h1>
					<time
						class="block font-light text-16 md:text-20 lg:text-24 font-thin mb-8 sm:mb-16 md:mb-20 lg:mb-32"
						datetime={ frontmatter.date }>
						{ frontmatter.dateFormatted }
					</time>
					<div class="article-content">
						{#if html}
							{@html html}
						{:else}
							<p>Oops!! Markdown not found!</p>
						{/if}
					</div>
				</div>
			</article>
		</main>
	<Foot />
</div>