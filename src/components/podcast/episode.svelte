<script>
	export let episode;
</script>

<article class="mb-12 max-w-xl md:mb-20">
	<picture class="block mb-4 sm:mb-6">
		<img
			src={episode.photo}
			alt={episode.guest}
			class="w-36 h-36 border-4"
		/>
	</picture>
	<h3 class="font-semibold text-24 sm:text-28 lg:text-32 leading-115 tracking-title mb-5 sm:mb-6">
		Episode {episode.number}  —  <span class="whitespace-nowrap">{episode.guest}</span>
	</h3>
	<p class="text-18 md:text-20 font-normal leading-150 mb-6">
		{@html episode.summary}
	</p>
	<ul class="flex flex-wrap">
		<li class="w-1/2 xs:w-1/3 sm:w-auto flex mb-3 sm:mr-10">
			<a class="link-button" href={episode.youtubeUrl}>
				Youtube
			</a>
		</li>
		<li class="w-1/2 xs:w-1/3 sm:w-auto flex mb-3 sm:mr-10">
			<a class="link-button" href={episode.spotifyUrl}>
				Spotify
			</a>
		</li>
		<li class="w-1/2 xs:w-1/3 sm:w-auto flex mb-3">
			<a class="link-button" href={episode.amazonUrl}>
				Amazon
			</a>
		</li>
	</ul>
</article>