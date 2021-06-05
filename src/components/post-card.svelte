<script>
	import article1 from '../assets/article1.jpg';

	export let post = {
		title: 'Amateur Archaeology KaiOS Edition',
		type: 'project',
		showType: false,
		mainTag: 'Video Game',
		tags: [ 'Video Game', 'Web Development' ],
		buttonLabel: '',
		link: '/projects/how-can-i-get-involved',
		thumb: {
			url: article1,
			alt: 'cover alt'
		}
	};
</script>

<article class="max-w-sm sm:max-w-none">
	<a href="/" class="block relative overflow-hidden rounded-md" aria-label="Read Article">
		{#if post.showType}
			<span aria-hidden="true" class="block absolute top-0 left-0 bg-black text-white text-12 uppercase rounded-md ml-4 mt-4 px-3 py-2 font-semibold shadow-cat z-10">
				{post.type}
			</span>
		{/if}
		<img
			class="rounded-md w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-500"
			alt={post.thumb.alt}
			src={post.thumb.url}
		/>
	</a>
	<span class="inline-block mt-6 text-24 sm:text-20 md:text-24 lg:text-32 xl:text-24 leading-125 tracking-title font-bold">
		{ post.title }
	</span>
	<span class="inline-block mt-3 h-max-content bg-black-a-70 px-3 py-2 rounded-md uppercase text-12 font-semibold text-white mr-5 my-2 last:mr-0">
		{ post.mainTag }
	</span>
	{#if post.buttonLabel}
		<a class="inline-block link-button mt-4" href="/">
			{ post.buttonLabel }
		</a>
	{/if}
</article>