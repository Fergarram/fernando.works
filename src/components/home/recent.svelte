<script>
	import article1 from '../../assets/article1.jpg';
	import article2 from '../../assets/article2.jpg';

	export let fields = {
		heading: 'Recent Publications',
		cta: {
			label: 'See Archive',
			url: '/blog'
		}
	};

	const posts = [
		{
			title: 'Amateur Archaeology KaiOS Edition',
			type: 'project',
			date: '07-07-2021',
			dateFormatted: 'July 7, 2021',
			showType: true,
			mainTag: 'Video Game',
			tags: [ 'Video Game', 'Web Development' ],
			buttonLabel: '',
			link: '/projects/how-can-i-get-involved',
			thumb: {
				url: article1,
				alt: 'cover alt'
			}
		},
		{
			title: 'The window based personal website that I almost ended up using',
			type: 'Blog post',
			date: '07-07-2021',
			dateFormatted: 'July 7, 2021',
			showType: true,
			mainTag: null,
			tags: null,
			buttonLabel: '',
			link: '/blog/how-can-i-get-involved',
			thumb: {
				url: article2,
				alt: 'cover alt'
			}
		},
		{
			title: 'Amateur Archaeology KaiOS Edition',
			type: 'project',
			date: '07-07-2021',
			dateFormatted: 'July 7, 2021',
			showType: true,
			mainTag: 'Video Game',
			tags: [ 'Video Game', 'Web Development' ],
			buttonLabel: '',
			link: '/projects/how-can-i-get-involved',
			thumb: {
				url: article1,
				alt: 'cover alt'
			}
		},
		{
			title: 'The window based personal website that I almost ended up using',
			type: 'Blog post',
			date: '07-07-2021',
			dateFormatted: 'July 7, 2021',
			showType: true,
			mainTag: null,
			tags: null,
			buttonLabel: '',
			link: '/blog/how-can-i-get-involved',
			thumb: {
				url: article2,
				alt: 'cover alt'
			}
		}
	];
</script>

<style>
	.responsive-thumb {
		height: 50vw;
		max-height: 13.75rem;
	}

	@media screen and (min-width: 37.5rem) {
		.responsive-thumb {
			height: 23.5vw;
		}
	}

	@media screen and (min-width: 48rem) {
		.responsive-thumb {
			height: 22.5vw;
			max-height: 100%;
		}
	}

	@media screen and (min-width: 80rem) {
		.responsive-thumb {
			height: 16rem;
		}
	}
</style>

<section class="bg-light-gray pt-12 md:pt-16 lg:pt-20 xl:pt-28 pb-60">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<h2 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-6 md:mb-10">
			{@html fields.heading }
		</h2>
		<a class="inline-block link-button mb-16" href={ fields.cta.url }>
			{ fields.cta.label }
		</a>
		<div class="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 md:gap-x-12 lg:gap-x-20 xl:gap-x-36">
			{#each posts as post }
				<article class="max-w-sm sm:max-w-none">
					<a href={ post.link } rel=prefetch class="block relative overflow-hidden rounded-md" aria-label="Read Article">
						<span aria-hidden="true" class="block absolute top-0 left-0 bg-black text-white text-12 uppercase rounded-md ml-4 mt-4 px-3 py-2 font-semibold shadow-cat z-10">
							{ post.type }
						</span>
						<img
							class="rounded-md w-full responsive-thumb object-cover object-center transform hover:scale-105 transition-transform duration-500"
							alt={ post.thumb.alt }
							src={ post.thumb.url }
						/>
					</a>
					<span class="inline-block mt-6 text-24 lg:text-32 leading-125 font-bold">
						{ post.title }
					</span>
					{#if post.tags }
						<ul class="hidden lg:flex flex-wrap mt-3">
							{#each post.tags as tag }
								<li class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black mr-5 my-2 last:mr-0">
									{ tag }
								</li>
							{/each}
						</ul>
					{/if}
					<a class="inline-block link-button mt-4" rel=prefetch href={ post.link }>
						{ post.type === 'project' ? 'See Project' : 'Read Article' }
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>