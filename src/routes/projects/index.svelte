<script context="module">
	export function preload() {
		return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
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

<section class="bg-dark-gray min-h-screen pt-20 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
</section>