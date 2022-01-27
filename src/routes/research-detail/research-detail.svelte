<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request, helpers;
	const { html, frontmatter } = data;
</script>

<svelte:head>
	<title>{frontmatter.title} - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-dark-gray.png">
	<meta name="description" content={frontmatter.description} />
	<link href={request.permalink} rel="canonical" />
</svelte:head>


<div class="bg-darker-gray">
	<Nav hydrate-client={{}} />
		<main class="min-h-screen pb-40">
			<article>
				<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<h1 class="font-bold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-125 tracking-title mb-4">
						{ frontmatter.title }
					</h1>
					<time class="block text-24 font-light" datetime={ frontmatter.date }>
						{ frontmatter.dateFormatted }
					</time>
					<div class="article-content mt-8 sm:mt-12 lg:mt-20">
						{#if html}
							{@html html}
						{:else}
							<p>Oops!! Markdown not found!</p>
						{/if}
					</div>
					{#if frontmatter.next}
						<a href={helpers.permalinks['research-detail']({ slug: frontmatter.next })}>
							Read next publicaction →
						</a>
					{/if}
				</div>
			</article>
		</main>
	<Foot />
</div>