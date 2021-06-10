<svelte:head>
	<title>Bio - Fernando Garcia</title>
</svelte:head>

<script>
	import photo from '../assets/about.jpg';

	export let fields = {
		image: {
			url: photo,
			alt: 'Fernando semi-squating looking at the sky on top of an ancient mexican pyramid.'
		},
		heading: 'About Me',
		content: `
			<p>
				As you could already tell, my name is Fernando Garcia. I am a frontend developer currently based in Mexico. I specialize in web technology although I have <a href="/">created apps</a> for Android and iOS, too.
			</p>
			<p>
				My prefered frontend frameworks are usually VueJS, Svelte, or NextJS. It really depends on who the project is for and what the requirements are.
			</p>
			<p>
				Although, I’ll push for Vue for more complex web applications and Next for headless marketing sites since it’s a more developed ecosystem. For personal projects, I will most likely use Svelte or Vue, though.
			</p>
			<h2>
				More stuff about me lol
			</h2>
			<p>
				I am really passionate about UI design and software development. I love to write about my experiences and document what I learn or observe.
			</p>
			<p>
				Generally, you’ll find me playing around with fun toys like the Raspberry Pi, joining a game jam, or messing around with Ansi C and Linux. I’ve always wanted to create my own OS since I was a child. But, as it turns out, doing so is way more challenging than I would have thought. Still, this doesn’t stop me of dreaming and writing a few notes about <a href="/">how operating systems might evolve in the future</a>.
			</p>
			<p>
				I also happen to host a <a href="/">podcast</a>. I really enjoy talking with other creatives out there making a living (or trying to) by building stuff with their computers. It’s really cool that in this day and age I can simply contact anyone in the world and have a call. It’s just mind blowing.
			</p>
			<p>
				Just how you can send me a message right now ;)
			</p>
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
				url: 'mailto:fergarram@gmail.com',
				external: false
			},
		]
	};
</script>

<section class="bg-green pb-40">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<picture class="block mb-8 md:mb-16">
			<img
				class="w-full max-w-xl h-48 xs:h-56 sm:h-80 md:h-96 rounded-md object-cover object-center"
				alt={ fields.image.alt }
				src={ fields.image.url }
			/>
		</picture>
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
</section>