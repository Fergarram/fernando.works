<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';
	import Episode from '../../components/podcast/episode.svelte';
	const yoyo = '/images/yoyo.jpg';
	const rayray = '/images/rayray.jpg';
	const rubna = '/images/rubna.jpg';
	const ray = '/images/ray.jpg';

	export let data, request, helpers;
	export const fields = {
		images: {
			host: {
				url: yoyo,
				alt: 'Photo of Fernando interviewing a guest'
			},
			guest: {
				url: rayray,
				alt: 'Photo of Ramon Santamaria being interviewed by Fernando'
			}
		},
		heading: 'Digital Crafters',
		paragraph: `I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who aim to make a living out of their digital creations, whether they're tools, video games, or products, they have found a way to fully dedicate themselves to work on the projects they own and love.`,
		links: [
			{
				label: 'Youtube Channel',
				url: 'https://www.youtube.com/channel/UCPBwZWChghNODkWGWDga-tw',
			},
			// {
			// 	label: 'Spotify',
			// 	url: 'https://open.spotify.com/show/4uahTtWC7TVnqrtSAMhoYa?si=8e9932f06d9944d9',
			// },
			// {
			// 	label: 'Amazon',
			// 	url: 'https://music.amazon.com/podcasts/24ca2851-bb56-4bf9-916e-bbfa9031304b/Digital-Crafters',
			// },
		]
	};

	const episodes = [
		{
			guest: 'Alexander Obenauer',
			photo: '/images/alex.jpg',
			number: 5,
            summary: `Alex <a class="underline" target="_blank" rel="noopener" href="https://twitter.com/alexobenauer">(@alexobenauer)</a> is a software developer, designer and consultant who is currently working on the operating system of the future, WonderOS.`,
			youtubeUrl: 'https://www.youtube.com/watch?v=MfvPCztpI2I',
			amazonUrl: '',
			spotifyUrl: '',
		},
		{
			guest: 'Nick Reese',
			photo: '/images/nick.jpeg',
			number: 4,
			summary: `Nick Reese <a class="underline" target="_blank" rel="noopener" href="https://twitter.com/nickreese/">(@nickreese)</a> is the creator of <a class="underline" target="_blank" rel="noopener" href="https://github.com/Elderjs/elderjs">Elder.js</a> and the founder of multiple successful businesses. He's a marketing expert and a very talented web developer.`,
			youtubeUrl: 'https://www.youtube.com/watch?v=FJABMEgYavA',
			amazonUrl: '',
			spotifyUrl: '',
		},
		{
			guest: 'Alejandro Leon',
			photo: '/images/alelepd.jpg',
			number: 3,
			summary: `Alejandro Leon <a class="underline" target="_blank" rel="noopener" href="https://twitter.com/alelepd/">(@alelepd)</a> is the founder and creator of <a class="underline" target="_blank" rel="noopener" href="//spline.design">spline.design</a>. He's a very passionate designer and developer specializing in 3D graphics and UX.`,
			youtubeUrl: 'https://www.youtube.com/watch?v=y7ns-_Ywb3o',
			amazonUrl: '',
			spotifyUrl: '',
		},
		{
			guest: 'Ramon Santamaria',
			photo: ray,
			number: 2,
			summary: `Ramon Santamaria <a class="underline" target="_blank" rel="noopener" href="https://twitter.com/raysan5/">(@raysan5)</a> is the passionate creator of the <a class="underline" target="_blank" rel="noopener" href="https://www.raylib.com/">Raylib library</a>. He's a game development lecturer and very experienced software developer.`,
			youtubeUrl: 'https://www.youtube.com/watch?v=wnbJpdjAHg8',
			amazonUrl: '',
			spotifyUrl: '',
		},
		{
			guest: 'Ruben',
			photo: rubna,
			number: 1,
			summary: `Ruben (<a class="underline" target="_blank" rel="noopener" href="https://twitter.com/rubna_/">@rubna_</a>) is a dedicated game developer from the Netherlands who’s part of <a class="underline" target="_blank" rel="noopener" href="https://sokpop.co/">Sokpop</a>, a team of game developers where each member ships a game every two months.`,
			youtubeUrl: 'https://www.youtube.com/watch?v=co0H6MBKPzk',
			amazonUrl: 'https://music.amazon.com/podcasts/24ca2851-bb56-4bf9-916e-bbfa9031304b/episodes/74f11eca-144f-4bf9-a6ba-29f5db7944a3/digital-crafters-ep-1-ruben-arubna_',
			spotifyUrl: 'https://open.spotify.com/episode/2WehpR6gbJym13La6sZePe?si=2517056630894afa',
		}
	];
</script>

<style>
	:global(.host-picture) {
		display: block;
		width: 70%;
		height: 38vw;
		max-height: 18.5rem;
	}

	:global(.guest-picture) {
		display: block;
		position: absolute;
		width: 45%;
		height: 25vw;
		max-height: 12rem;
		bottom: -15%;
		right: 0;
	}

	:global(.host-picture .custom-ejs) {
		height: 100%;
	}

	:global(.guest-picture .custom-ejs) {
		height: 100%;
	}
</style>

<svelte:head>
	<title>Digital Crafters - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-yellow.png">
	<meta name="description" content="I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers." />
	<link href={request.permalink} rel="canonical" />
</svelte:head>

<div class="bg-yellow">
	<Nav hydrate-client={{}} />
		<main>
			<section class="bg-yellow pb-12 md:pb-16 lg:pb-20 xl:pb-28">
				<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
					<div class="relative mb-10 xs:mb-14 sm:mb-20 md:mb-32 max-w-2xl">
						{@html helpers.shortcode({
							name: 'picture',
							props: {
								ignoreCssString: true,
								src: fields.images.host.url,
								alt: fields.images.host.alt,
								wrap: 'host-picture rounded-md overflow-hidden full-image-cover',
								maxWidth: 700
							},
						})}
						{@html helpers.shortcode({
							name: 'picture',
							props: {
								ignoreCssString: true,
								src: fields.images.guest.url,
								alt: fields.images.guest.alt,
								wrap: 'guest-picture rounded-md overflow-hidden full-image-cover',
								maxWidth: 400
							},
						})}
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
						<Episode {episode} {helpers} />
					{/each}
				</div>
			</section>
		</main>
	<Foot />
</div>
