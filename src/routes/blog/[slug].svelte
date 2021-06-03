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

<article class="bg-light-gray min-h-screen pt-20 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 pb-40">
	<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-8 xl:mb-16">
		<picture class="block">
			<img
				class="w-full h-auto min-h-cover object-center object-cover"
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
