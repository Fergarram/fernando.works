<script>
	import cover from '../../assets/dc-cover.jpg';
</script>

<section class="bg-yellow py-32">
	<div class="max-w-screen-xl mx-auto px-4 sm:px-8 md:pl-16 md:pr-0 lg:px-20 xl:px-28 grid md:grid-cols-12 gap-8 lg:gap-16">
		<div class="md:col-span-7 order-2 md:order-none">
			<h2 class="font-bold text-44 leading-115 sm:text-64 mb-10">
				Podcast-<i>er</i>
			</h2>
			<p class="max-w-24em font-light text-20 sm:text-24 leading-150 mb-10">
				I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations.
			</p>
			<a class="link-button" href="/">
				Learn More
			</a>
		</div>
		<picture class="block md:col-span-5 self-center order-1 md:order-none">
			<img
				class="w-48 md:w-80 h-auto rounded-xs"
				alt="Digital Crafters' podcast cover."
				src={cover}
			/>
		</picture>
	</div>
</section>