<script>
	export let post, helpers, type;
	const link = helpers.permalinks[type]({ slug: post.slug });
</script>

<style>
	:global(.responsive-thumb img) {
		width: 100%;
		height: 50vw;
		max-height: 13.75rem;
		object-fit: cover;
		object-position: center;
	}

	@media screen and (min-width: 37.5rem) {
		:global(.responsive-thumb img) {
			height: 23.5vw;
			max-height: 100%;
		}
	}

	@media screen and (min-width: 80rem) {
		:global(.responsive-thumb img) {
			height: 11rem;
		}
	}
</style>

{#if post.frontmatter}
	<article class="max-w-sm sm:max-w-none">
		<a href={ link } class="block relative overflow-hidden rounded-md" aria-label="Read Article">
			{#if post.frontmatter.showType}
				<span aria-hidden="true" class="block absolute top-0 left-0 bg-black text-white text-12 uppercase rounded-md ml-4 mt-4 px-3 py-2 font-semibold shadow-cat z-10">
					{post.frontmatter.type}
				</span>
			{/if}
			{@html helpers.shortcode({
				name: 'picture',
				props: {
					ignoreCssString: true,
					src: post.frontmatter.cover.url,
					alt: post.frontmatter.cover.alt,
					wrap: 'rounded-md w-full responsive-thumb overflow-hidden',
					maxWidth: 600
				},
			})}
			<!-- <img
				class="rounded-md w-full responsive-thumb object-cover object-center"
				alt={post.frontmatter.cover.alt}
				src={post.frontmatter.cover.url}
			/> -->
		</a>
		<span class="block mt-6 text-24 sm:text-20 md:text-24 lg:text-32 xl:text-24 leading-125 tracking-title font-bold">
			{ post.frontmatter.title }
		</span>
		{#if post.frontmatter.type === 'project'}
			<span class="inline-block mt-3 h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black mr-5 my-2 last:mr-0">
				{ post.frontmatter.primaryTag }
			</span>
		{:else}
			<time
				class="block font-light text-16 md:text-18 xl:text-16 mt-1"
				datetime={ post.frontmatter.date }>
				{ post.frontmatter.dateFormatted }
			</time>
		{/if}
		{#if post.frontmatter.buttonLabel}
			<a class="inline-block link-button mt-4" href={ link }>
				{ post.frontmatter.buttonLabel }
			</a>
		{/if}
	</article>
{:else}
	some error lol
{/if}