<script>
	export let helpers;
	export let fields = {
		heading: 'Podcast<i>er</i>',
		paragraph: 'I host a podcast where I have conversations with independent artists, designers, engineers and researchers.',
		cta: {
			label: 'Watch Episodes',
			url: helpers.permalinks['podcast']()
		},
		logo: {
			url: '/images/dc-cover.jpg',
			alt: 'Podcast poster'
		}
	};
</script>

<section class="bg-yellow py-12 md:py-16 lg:py-20 xl:py-28">
	<div class="max-w-screen-xl mx-auto px-6 sm:px-12 xs:px-8 md:px-16 lg:px-20 xl:px-28">
		<h2 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
			{@html fields.heading }
		</h2>
		<p class="max-w-24em font-normal text-18 xs:text-20 md:text-24 leading-150 tracking-subtitle mb-10">
			{ fields.paragraph }
		</p>
		<a class="link-button" href={ fields.cta.url }>
			{ fields.cta.label }
		</a>
	</div>
</section>