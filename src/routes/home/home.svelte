<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';
	import Hero from '../../components/home/hero.svelte';
	import Podcast from '../../components/home/podcast.svelte';
	import Projects from '../../components/home/projects.svelte';
	import Recent from '../../components/home/recent.svelte';
	export let data, helpers;
</script>

<svelte:head>
	<title>Home - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-green.png">
	<meta name="description" content="" />
	<link href="/" rel="canonical" />
</svelte:head>

<div class="bg-green">
	<Nav hydrate-client={{}} />

	<main>
		<Hero />
		<Podcast />
		<Projects />
		<Recent />
	</main>

	<Foot />
</div>