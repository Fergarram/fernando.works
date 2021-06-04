<script context="module">
	export function preload() {
		return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostCard from '../../components/post-card.svelte';
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Projects - Fernando.Works</title>
</svelte:head>

<div class="bg-dark-gray min-h-screen pt-28 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
	<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4">
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
			Projects
		</h1>
		<p class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-10 md:mb-16">
			The projects I’ve worked on consistof a mix of toys, marketing websites, mobile apps, videogames, and ui design mocks.
		</p>
		<fieldset>
			<legend class="block text-18 xs:text-20 font-normal mb-2">
				Project filters:
			</legend>
			<ul class="flex flex-wrap">
				<li class="mr-3 my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						Raspberry Pi
					</button>
				</li>
				<li class="mr-3 my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						UX & UI Design
					</button>
				</li>
				<li class="mr-3 my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						Vue.js
					</button>
				</li>
				<li class="mr-3 my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						Svelte
					</button>
				</li>
				<li class="mr-3 my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						Video Game
					</button>
				</li>
				<li class="my-2">
					<button class="h-max-content bg-black-a-10 px-3 py-2 rounded-md uppercase text-12 font-semibold text-black">
						Web Development
					</button>
				</li>
			</ul>
		</fieldset>
	</section>
	<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4">
		<PostCard />
	</section>
</div>