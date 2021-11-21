<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';
	import Episode from '../../components/podcast/episode.svelte';
	const yoyo = '/images/yoyo.jpg';
	const rayray = '/images/rayray.jpg';
	const rubna = '/images/rubna.jpg';
	const ray = '/images/ray.jpg';

	export let data, request;
	export const fields = {
		images: {
			host: {
				url: yoyo,
				alt: ''
			},
			guest: {
				url: rayray,
				alt: ''
			}
		},
		heading: 'Digital Crafters',
		paragraph: 'I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.',
		links: [
			{
				label: 'Youtube',
				url: 'https://www.youtube.com/channel/UCPBwZWChghNODkWGWDga-tw',
			},
			{
				label: 'Spotify',
				url: 'https://open.spotify.com/show/1Nluhq1TWoWoaFAhM2K8yN?si=RsvU1lBfTo-2q89GD9XMLQ&dl_branch=1',
			},
			{
				label: 'Amazon',
				url: 'https://music.amazon.com/podcasts/24ca2851-bb56-4bf9-916e-bbfa9031304b/Digital-Crafters',
			},
		]
	};

	const episodes = [
		{
			guest: 'Alejandro Leon',
			photo: '/images/alelepd.jpg',
			number: 3,
			summary: 'Ruben (<a class="underline" target="_blank" rel="noopener" href="https://twitter.com/rubna_">@rubna_</a>), a game developer from the Netherlands who’s part of <a class="underline" target="_blank" rel="noopener" href="https://sokpop.co/">Sokpop</a>. We talk about his creative process...',
			youtubeUrl: 'https:/youtube.com',
			amazonUrl: 'https:/amazon.com',
			spotifyUrl: 'https:/spotify.com',
		},
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

<style>
	.host-picture {
		display: block;
		width: 70%;
		height: 38vw;
		max-height: 18.5rem;
	}

	.guest-picture {
		display: block;
		position: absolute;
		width: 45%;
		height: 25vw;
		max-height: 12rem;
		bottom: -15%;
		right: 0;
	}
</style>

<svelte:head>
	<title>Digital Crafters - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-yellow.png">
	<meta name="description" content="" />
	<link href={request.permalink} rel="canonical" />
</svelte:head>

<div class="bg-yellow">
	<Nav hydrate-client={{}} />
		<main>
			<section class="bg-yellow pb-12 md:pb-16 lg:pb-20 xl:pb-28">
				<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<div class="relative mb-10 xs:mb-14 sm:mb-20 md:mb-32 max-w-2xl">
						<picture class="host-picture">
							<img
								src={ fields.images.host.url }
								alt={ fields.images.host.alt }
								class="rounded-md object-cover object-center w-full h-full"
							/>
						</picture>
						<picture class="guest-picture">
							<img
								src={ fields.images.guest.url }
								alt={ fields.images.guest.alt }
								class="rounded-md object-cover object-center w-full h-full"
							/>
						</picture>
					</div>
					<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
						{@html fields.heading } 
					</h1>
					<div class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-8 md:mb-16">
						<p>
							{@html fields.paragraph }
						</p>
					</div>
					<ul class="flex flex-wrap">
						{#each fields.links as link }
							<li class="w-1/2 xs:w-1/3 sm:w-auto flex mb-3 sm:mr-10 last:mr-0">
								<a class="link-button" rel="noopener" href={ link.url }>
									{ link.label }
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</section>
			<section class="bg-yellow pt-12 pb-60">
				<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<h2 id="episodes" class="font-semibold text-32 sm:text-40 lg:text-44 leading-115 tracking-title mb-12 sm:mb-16 md:mb-20">
						Episodes
					</h2>
					{#each episodes as episode}
						<Episode {episode} />
					{/each}
				</div>
			</section>
		</main>
	<Foot />
</div>
