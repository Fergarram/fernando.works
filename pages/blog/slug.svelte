<script>
	import Header from '../../components/layout/header.svelte';
	export let markdown = '';
</script>

<svelte:head>
	<title>{'Blog title'} - Fernando.Works</title>
</svelte:head>

<Header title="Blog"/>

<main class="main">
	<h1 id="Let’s write software (draft)">Let’s write software (draft)</h1>
	<p><span class='hashtag'>#blog & writing#</span></p>

	<p>Let’s write software that empowers context-aware apps. Maybe just as a first step. At least while we wait for the new generation of mind-full software.</p>

	<p>You know those moments when you could simply tell your phone “don’t rotate while I’m reading with my phone held up above my face.”</p>

	<h2>The day all software companies will die</h2>
	<p>One day, there will only be one app for each thing you do. And apps, will move around a single source of data and information per category of data. The only remaining survivors will be curated feeds of information. Eventually, you won’t have three three note taking apps that basically do the same thing. You’ll have only one option, because that’s going to be the best option. The UX will be exactly what YOU need. Instead, there are going to be API integrations. For your bank account for example, you might have a single graphical interface for all your bank accounts, but it will connect to different APIs asking for the data you need. You could automate things on the frontend and achieve the same thing on the backend.</p>
</main>

<footer>
	Copyright © Fernando Garcia. All rights reserved.
</footer>

<style lang="scss">
	@import '../../styles/utils.scss';
	@import '../../styles/page.scss';
</style>