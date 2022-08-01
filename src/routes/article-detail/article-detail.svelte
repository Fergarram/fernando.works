<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request;
	const { html, frontmatter } = data;
</script>

<svelte:head>
	<title>{frontmatter.title} - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-light-gray.png">
	<meta name="description" content={frontmatter.description} />
	<link href="https://fernando.works{request.permalink}" rel="canonical" />
</svelte:head>

<div class="bg-light-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-light-gray min-h-screen pb-40">
			<article>
				<div class="max-w-screen-xl mx-auto px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<h1 class="font-bold text-32 sm:text-44 md:text-48 lg:text-64 leading-125 tracking-title mb-6 md:mb-10 lg:mb-12">
						{@html frontmatter.title.replace(/ ([^ ]*)$/, '&nbsp;$1') }
					</h1>
					<time
						class="block font-light text-16 md:text-20 lg:text-24 mb-8 sm:mb-16 md:mb-20 lg:mb-32"
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