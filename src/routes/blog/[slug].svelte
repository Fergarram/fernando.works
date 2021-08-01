<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import cover from '../../assets/article-cover-test.jpg';
	export let post;
</script>

<svelte:head>
	<title>{ post.title }</title>
</svelte:head>

<style>
	.cover {
		width: 100%;
		height: 60vw;
	}

	/* SM */
	@media screen and (min-width: 37.5rem) {
		.cover {
			height: calc((100vw - 6rem) * 0.6);
		}
	}

	/* MD */
	@media screen and (min-width: 48rem) {
		.cover {
			height: calc((100vw - 8rem) * 0.6);
		}
	}

	/* LG */
	@media screen and (min-width: 64rem) {
		.cover {
			height: calc((100vw - 10rem) * 0.6);
		}
	}

	/* XL */
	@media screen and (min-width: 80rem) {
		.cover {
			height: 39.5rem;
		}
	}
</style>


<article class="bg-light-gray min-h-screen pb-40">
	<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-8 xl:mb-16">
		<picture class="cover block">
			<img
				class="w-full h-full object-center object-cover"
				alt=""
				src={cover}
			/>
		</picture>
	</div>
	<div class="max-w-screen-xl mx-auto px-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<h1 class="font-bold text-32 sm:text-44 md:text-48 lg:text-64 leading-125 tracking-title mb-6 md:mb-10 lg:mb-12">
			{ post.title }
		</h1>
		<time class="block font-light text-16 md:text-20 lg:text-24 font-thin mb-8 sm:mb-16 md:mb-20 lg:mb-32" datetime="2021-07-07">July 7, 2021</time>
		<div class="article-content">
			{ @html post.html }
		</div>
	</div>
</article>
