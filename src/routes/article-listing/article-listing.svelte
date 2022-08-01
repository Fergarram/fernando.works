<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';
	import PostCard from '../../components/post-card.svelte';

	export let data, request, helpers;

	const { posts, fields } = data;
</script>

<svelte:head>
	<title>Journal - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-light-gray.png">
	<meta name="description" content="A collection of thoughts that I wanted to make public." />
	<link href="https://fernando.works{request.permalink}" rel="canonical" />
</svelte:head>

<style>
	#order-field {
		-webkit-appearance: none;
	}

	input:checked + label {
		background-color:  rgba(0,0,0,0.7);
		color: white;
	}
</style>

<div class="bg-light-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-light-gray min-h-screen pb-40">
			<section class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 md:mb-8">
				<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-8 xs:mb-12 sm:mb-16">
					Journal
				</h1>
			</section>
			<section
				id="posts-section"
				aria-live="polite"
				class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 grid gap-8">
				{#each data.posts as post}
					<article>
						<a class="block text-24 tracking-subtitle leading-125 font-semibold" href={ helpers.permalinks['article-detail']({ slug: post.slug }) }>
							{ post.frontmatter.title }
						</a>
						<time
							class="block font-light text-16 md:text-18 xl:text-20 mt-1"
							datetime={ post.frontmatter.date }>
							{ post.frontmatter.dateFormatted }
						</time>
					</article>
				{/each}
			</section>
		</main>
	<Foot />
</div>