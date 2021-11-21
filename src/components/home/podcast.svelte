<script>
	export let helpers;
	export let fields = {
		heading: 'Podcast<i>er</i>',
		paragraph: 'I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations.',
		cta: {
			label: 'Watch Episodes',
			url: helpers.permalinks['podcast']() + '#episodes'
		},
		logo: {
			url: '/images/dc-cover.jpg',
			alt: "Digital Crafters' podcast cover."
		}
	};
</script>

<section class="bg-yellow py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:pl-16 md:pr-0 lg:px-20 xl:px-28 grid md:grid-cols-12 gap-8 lg:gap-16">
		<div class="md:col-span-7 order-2 md:order-none">
			<h2 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
				{@html fields.heading }
			</h2>
			<p class="max-w-24em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-10">
				{@html fields.paragraph }
			</p>
			<a class="link-button" href={ fields.cta.url }>
				{ fields.cta.label }
			</a>
		</div>
		<picture class="block md:col-span-5 self-center order-1 md:order-none">
			<img
				class="w-40 md:w-80 h-40 md:h-80 rounded-md object-contain object-center transform md:translate-x-10 lg:transform-none"
				alt={ fields.logo.alt }
				src={ fields.logo.url }
			/>
		</picture>
	</div>
</section>