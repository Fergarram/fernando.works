<svelte:head>
	<title>Digital Crafters</title>
</svelte:head>

<script>
	import photo from '../assets/delete-me.png';
</script>

<section class="bg-yellow pt-24 xs:pt-48 md:pt-56 lg:pt-64 xl:pt-80 pb-40">
	<div class="max-w-screen-xl mx-auto px-4 xs:px-12 md:px-16 lg:px-20 xl:px-28">
		<picture class="block mb-16">
			<img
				class="max-w-full h-auto rounded-md"
				alt="Fernando semi-squating looking at the sky on top of an ancient mexican pyramid."
				src={photo}
			/>
		</picture>
		<h1 class="font-bold text-44 leading-115 tracking-title sm:text-64 mb-8">
			Digital Crafters
		</h1>
		<div class="max-w-30em font-light text-20 sm:text-24 leading-150 mb-16">
			<p>
				I host a podcast called Digital Crafters where I have conversations with independent artists, designers, and developers who make a living out of their digital creations — whether it’s a piece of digital art, a tool, game, or product — they have found a way to fully dedicate themselves to work on the projects they own and love.
			</p>
		</div>
		<ul class="flex flex-wrap mb-10">
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Youtube Channel
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Spotify
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3">
				<a class="link-button" href="/">
					Amazon Podcasts
				</a>
			</li>
		</ul>
	</div>
</section>