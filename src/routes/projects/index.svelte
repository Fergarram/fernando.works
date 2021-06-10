<!-- <script context="module">
	export function preload() {
		return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>
 -->
<script>
	import PostCard from '../../components/post-card.svelte';
	import article1 from '../../assets/article1.jpg';
	export let posts = [
		{
			title: 'Amateur Archaeology KaiOS Edition',
			type: 'project',
			date: '07-07-2021',
			dateFormatted: 'July 7, 2021',
			showType: false,
			mainTag: 'Video Game',
			tags: [ 'Video Game', 'Web Development' ],
			buttonLabel: '',
			link: '/projects/how-can-i-get-involved',
			thumb: {
				url: article1,
				alt: 'cover alt'
			}
		},
	];

	let tags = [
		'Raspberry Pi',
		'UX & UI Design',
		'Vue.js',
		'Svelte',
		'Video Game',
		'Web Development',
	];

	tags = tags.map(tag => ({
		text: tag,
		slug: tag.replace(/[\W_]+/g, '-')
	}));

	export let fields = {
		heading: 'Projects',
		paragraph: 'The projects I’ve worked on consist of a mix of toys, websites, mobile apps, videogames, and ui design mocks.',
	};
</script>

<svelte:head>
	<title>Projects - Fernando.Works</title>
</svelte:head>

<style>
	input:checked + label {
		background-color:  rgba(0,0,0,0.7);
		color: white;
	}
</style>

<div class="bg-dark-gray min-h-screen pt-28 xs:pt-32 sm:pt-40 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
	<section class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 md:mb-8">
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
			{@html fields.heading }
		</h1>
		<p class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-10 md:mb-16">
			{ fields.paragraph }
		</p>
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
	</section>
	<section
		id="posts-section"
		aria-live="polite"
		class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-8">
		{#each posts as post}
			<PostCard {post}/>
		{/each}
	</section>
</div>