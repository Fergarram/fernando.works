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
	import cover from '../../assets/amateur.jpg';
	export let post;
</script>

<svelte:head>
	<title>Amateur Archaeology KaiOS Edition</title>
</svelte:head>

<article class="bg-dark-gray min-h-screen pt-20 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
	<div class="max-w-screen-xl mx-auto sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4">
		<picture class="block">
			<img
				class="w-full h-auto min-h-cover object-center object-cover"
				alt=""
				src={cover}
			/>
		</picture>
	</div>
	<div class="max-w-screen-xl mx-auto px-4 xs:px-12 md:px-16 lg:px-20 xl:px-28">
		<ul class="flex flex-wrap mb-4 xs:mb-8">
			<li class="h-max-content bg-black-a-40 px-3 py-2 rounded-md uppercase text-12 font-semibold text-white mr-5 my-2">
				Video Game
			</li>
			<li class="h-max-content bg-black-a-40 px-3 py-2 rounded-md uppercase text-12 font-semibold text-white mr-5 my-2">
				Web Development
			</li>
		</ul>
		<h1 class="font-bold text-44 md:text-64 leading-125 tracking-title mb-4">
			Amateur Archaeology KaiOS Edition
		</h1>
		<time class="block text-24 sm:text-28 font-thin " datetime="2021-07-07">
			April 2020
		</time>
		<ul class="flex flex-wrap mb-14 sm:mb-20 md:mb-24 lg:mb-32 mt-16">
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					play game
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					fork code
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Read devlog
				</a>
			</li>
		</ul>
		<div class="article-content">
			{ @html post.html }
		</div>
	</div>
</article>
