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
<!-- 				{#if 1}
					<div class="relative inline-flex items-center mb-6">
						<svg
							class="mr-2"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g id="sort_24px">
								<g id="&#226;&#134;&#179; Dark Color">
									<path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M3 6V8H21V6H3ZM3 18H9V16H3V18ZM15 13H3V11H15V13Z" fill="black"/>
								</g>
							</g>
						</svg>
						<select
							name="order"
							id="order-field"
							aria-controls="posts-section"
							aria-label="Pick order"
							class="bg-transparent text-16 cursor-pointer focus:outline-none">
							<option value="newest">Showing newest first</option>
							<option value="oldest">Showing oldest first</option>
						</select>
					</div>
				{:else}
					<fieldset>
						<legend class="block text-18 xs:text-20 font-normal mb-2">
							Filter by tags:
						</legend>
						<div class="flex flex-wrap">
							{#each tags as tag }
								<div class="mr-3 my-2 last:mr-0">
									<input
										type="checkbox"
										aria-controls="posts-section"
										class="w-0 h-0 absolute opacity-0"
										id={ tag.slug }
										name={ tag.slug }>
									<label
										for={ tag.slug }
										class="block select-none h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black cursor-pointer">
										{ tag.text }
									</label>
								</div>
							{/each}
						</div>
					</fieldset>
				{/if} -->
			</section>
			<!-- <section
				id="posts-section"
				aria-live="polite"
				class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-8">
				{#each data.posts as post}
					<PostCard {post} {helpers} type="article-detail"/>
				{/each}
			</section> -->
			<section
				id="posts-section"
				aria-live="polite"
				class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 grid gap-8">
				{#each data.posts as post}
					<article>
						<a class="block text-24 tracking-subtitle leading-125 font-bold" href={ helpers.permalinks['article-detail']({ slug: post.slug }) }>
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