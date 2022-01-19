<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';
	import Hero from '../../components/home/hero.svelte';
	import Podcast from '../../components/home/podcast.svelte';
	import Projects from '../../components/home/projects.svelte';
	import CognitiveResearch from '../../components/home/cognitive-research.svelte';
	import Recent from '../../components/home/recent.svelte';
	export let data, helpers;
</script>

<svelte:head>
	<title>Fernando Garcia</title>
	<link rel="icon" type="image/png" href="/icon-48-green.png">
	<meta name="description" content="I'm Fernando Garcia, a developer and designer. I make products that help their target audience reach their goals." />
	<link href="/" rel="canonical" />
</svelte:head>

<div class="bg-green">
	<Nav hydrate-client={{}} />

	<main>
		<Hero />
		<Podcast {helpers} />
		<CognitiveResearch {helpers} />
		<Projects {helpers} />
		<Recent {data} {helpers} />
	</main>

	<Foot />
</div>