<script>
	export let helpers;
	export let fields = {
		heading: 'Podcast<i>er</i>',
		paragraph: 'I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who aim to make a living out of their digital creations.',
		cta: {
			label: 'Watch Episodes',
			url: helpers.permalinks['podcast']() + '#episodes'
		},
		logo: {
			url: '/images/dc-cover.jpg',
			alt: 'Podcast poster'
		}
	};
</script>

<section class="bg-yellow py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:pl-16 md:pr-0 lg:px-20 xl:px-28 grid md:grid-cols-12 gap-8 lg:gap-16">
		<div class="md:col-span-7 order-2 md:order-none">
			<h2 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
				{@html fields.heading }
			</h2>
			<p class="max-w-24em font-normal text-18 xs:text-20 md:text-24 leading-150 tracking-subtitle mb-10">
				{@html fields.paragraph }
			</p>
			<a class="link-button" href={ fields.cta.url }>
				{ fields.cta.label }
			</a>
		</div>
		{@html helpers.shortcode({
			name: 'picture',
			props: {
				src: fields.logo.url,
				alt: fields.logo.alt,
				wrap: 'block md:col-span-5 self-center order-1 md:order-none overflow-hidden w-40 md:w-80 h-40 md:h-80 rounded-md full-image-contain',
				maxWidth: 320
			},
		})}
	</div>
</section>