<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request;
	const { html, frontmatter } = data;
</script>

<svelte:head>
	<title>{frontmatter.title} - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-dark-gray.png">
	<meta name="description" content={frontmatter.description} />
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

<div class="bg-dark-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-dark-gray min-h-screen pb-40">
			<article>
				<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4">
					<picture class="cover block">
						<img
							class="w-full h-full object-center object-cover"
							alt={frontmatter.cover.alt}
							src={frontmatter.cover.url}
						/>
					</picture>
				</div>
				<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<ul class="flex flex-wrap mb-4 xs:mb-8">
						{#each [ frontmatter.primaryTag, ...frontmatter.secondaryTags ] as tag }
							<li class="h-max-content bg-black-a-10 rounded-md uppercase text-12 font-semibold text-black mr-4 last:mr-0 my-2">
								<!-- Tags should be clickable with url req query -->
								<a class="block w-full h-full px-3 py-2" href="/projects">{ tag }</a>
							</li>
						{/each}
					</ul>
					<h1 class="font-bold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-125 tracking-title mb-4">
						{ frontmatter.title }
					</h1>
					<time class="block text-24 font-thin " datetime={ frontmatter.date }>
						{ frontmatter.dateFormatted }
					</time>
					<ul class="flex flex-wrap mb-6 sm:mb-10 lg:mb-14 mt-10">
						{#each frontmatter.links as link }
							<li class="w-full xs:w-1/3 sm:w-auto flex mb-5 sm:mr-10 last:mr-0">
								<a class="link-button" href={ link.url }>
									{ link.label }
								</a>
							</li>
						{/each}
					</ul>
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