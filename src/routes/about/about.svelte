<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request, helpers;
	export let fields = {
		image: {
			url: '/images/about.jpg',
			alt: 'Fernando semi-squating looking at the sky on top of an ancient mexican pyramid.'
		},
		heading: 'About Me',
		content: `
			<p>My name is Fernando Garcia. I love computers because they make me think everything is possible. I make websites and apps for a living, whether I’m designing or coding them.</p>

			<p>On my digital free time, I love to write, make video games, design mockups or work on <a href="/projects/">interesting side projects</a>. For some reason I can’t stop having ideas of things to create with my computer, particularly <a href="/cognitive-research/">artificial minds</a>, so I just write them down.</p>
		`,
		links: [
			{
				label: 'LinkedIn',
				url: 'https://www.linkedin.com/in/fergarram/',
				external: true
			},
			{
				label: 'Twitter',
				url: 'https://twitter.com/_fergarram_/',
				external: true
			},
			{
				label: 'Email',
				url: 'mailto:hello@fernando.works',
				external: false
			},
		]
	};
</script>

<svelte:head>
	<title>About - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-green.png">
	<meta name="description" content="My name is Fernando Garcia. I love computers because they make me think everything is possible." />
	<link href={request.permalink} rel="canonical" />
</svelte:head>

<style>
	:global(.about-cover .custom-ejs) {
		height: 100%;
	}
</style>

<div class="bg-green">
	<Nav hydrate-client={{}} />
		<main class="bg-green pb-40">
			<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
				{@html helpers.shortcode({
					name: 'picture',
					props: {
						ignoreCssString: true,
						src: fields.image.url,
						alt: fields.image.alt,
						wrap: 'about-cover block mb-8 md:mb-16 w-full max-w-xl h-48 xs:h-56 sm:h-80 md:h-96 rounded-md overflow-hidden full-image-cover',
						maxWidth: 1280
					},
				})}
				<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
					{@html fields.heading }
				</h1>
				<div class="page-content max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-16">
					{@html fields.content }
				</div>
				<ul class="flex mb-10">
					{#each fields.links as link}
						<li class="w-1/3 sm:w-auto flex mb-3 sm:mr-10 last:mr-0">
							<a
								class="link-button"
								href={ link.url }
								target={ link.external ? '_blank' : null }
								rel={ link.external ? 'noopener' : 'prefetch' }>
								{ link.label }
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</main>
	<Foot />
</div>