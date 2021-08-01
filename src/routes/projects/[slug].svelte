<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{ post.title }</title>
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

<article class="bg-dark-gray min-h-screen pb-40">
	<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4">
		<picture class="cover block">
			<img
				class="w-full h-full object-center object-cover"
				alt={post.cover.alt}
				src={post.cover.url}
			/>
		</picture>
	</div>
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<ul class="flex flex-wrap mb-4 xs:mb-8">
			{#each [ post.primaryTag, ...post.secondaryTags ] as tag }
				<li class="h-max-content bg-black-a-10 rounded-md uppercase text-12 font-semibold text-black mr-4 last:mr-0 my-2">
					<!-- Tags should be clickable with url req query -->
					<a class="block w-full h-full px-3 py-2" href="/projects">{ tag }</a>
				</li>
			{/each}
		</ul>
		<h1 class="font-bold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-125 tracking-title mb-4">
			{ post.title }
		</h1>
		<time class="block text-24 font-thin " datetime={ post.date }>
			{ post.dateFormatted }
		</time>
		<ul class="flex flex-wrap mb-6 sm:mb-10 lg:mb-14 mt-10">
			{#each post.links as link }
				<li class="w-full xs:w-1/3 sm:w-auto flex mb-5 sm:mr-10 last:mr-0">
					<a class="link-button" href={ link.url }>
						{ link.label }
					</a>
				</li>
			{/each}
		</ul>
		<div class="article-content">
			{ @html post.html }
		</div>
	</div>
</article>
