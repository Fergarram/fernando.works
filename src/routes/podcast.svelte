<svelte:head>
	<title>Digital Crafters</title>
</svelte:head>

<script>
	import Episode from '../components/podcast/episode.svelte';
	import photo from '../assets/delete-me.png';
	import rubna from '../assets/rubna.jpg';
	import ray from '../assets/ray.jpg';

	const episodes = [
		{
			guest: 'Ramon Santamaria',
			photo: ray,
			number: 2,
			summary: 'Ruben (<a class="underline" target="_blank" rel="noopener" href="https://twitter.com/rubna_">@rubna_</a>), a game developer from the Netherlands who’s part of <a class="underline" target="_blank" rel="noopener" href="https://sokpop.co/">Sokpop</a>. We talk about his creative process...',
			youtubeUrl: 'https:/youtube.com',
			amazonUrl: 'https:/amazon.com',
			spotifyUrl: 'https:/spotify.com',
		},
		{
			guest: 'Ruben',
			photo: rubna,
			number: 1,
			summary: 'Ruben (<a class="underline" target="_blank" rel="noopener" href="https://twitter.com/rubna_">@rubna_</a>), a game developer from the Netherlands who’s part of <a class="underline" target="_blank" rel="noopener" href="https://sokpop.co/">Sokpop</a>. We talk about his creative process...',
			youtubeUrl: 'https:/youtube.com',
			amazonUrl: 'https:/amazon.com',
			spotifyUrl: 'https:/spotify.com',
		}
	];
</script>

<section class="bg-yellow pt-24 xs:pt-48 md:pt-56 lg:pt-64 pb-12 md:pb-16 lg:pb-20 xl:pb-28">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<picture class="block mb-8 md:mb-16">
			<img
				class="max-w-full h-auto rounded-md"
				alt="Fernando semi-squating looking at the sky on top of an ancient mexican pyramid."
				src={photo}
			/>
		</picture>
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
			Digital Crafters
		</h1>
		<div class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-8 md:mb-16">
			<p>
				I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
			</p>
		</div>
		<ul class="flex flex-wrap">
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Youtube
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Spotify
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3">
				<a class="link-button" href="/">
					Amazon
				</a>
			</li>
		</ul>
	</div>
</section>
<section class="bg-yellow pt-12 pb-60">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<h2 class="font-semibold text-32 sm:text-40 lg:text-44 leading-115 tracking-title mb-12 sm:mb-16 md:mb-20">
			Episodes
		</h2>
		{#each episodes as episode}
			<Episode {episode} />
		{/each}
	</div>
</section>