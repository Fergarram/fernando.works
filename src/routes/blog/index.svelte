<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostCard from '../../components/post-card.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Blog Archive - Fernando.Works</title>
</svelte:head>

<style>
	#order-field {
		-webkit-appearance: none;
	}
</style>

<div class="bg-light-gray min-h-screen pt-28 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
	<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 md:mb-8">
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-8 xs:mb-12 sm:mb-16">
			Blog Archive
		</h1>
		<div class="flex items-center mb-6">
			<svg
				class="mr-3"
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
				aria-label="Pick order"
				class="bg-transparent text-16 cursor-pointer focus:outline-none">
				<option value="newest">Showing newest first</option>
				<option value="oldest">Showing oldest first</option>
			</select>
		</div>
	</section>
	<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-8">
		<PostCard />
		<PostCard />
		<PostCard />
		<PostCard />
		<PostCard />
		<PostCard />
	</section>
</div>