<script>
	import avatar from '../assets/yo.jpg';
</script>

<svelte:head>
	<title>Fernando Garcia - UX Developer</title>
</svelte:head>

<section class="bg-green pt-48 pb-40">
	<div class="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-28">
		<picture class="block mb-10">
			<img
				class="w-60 h-60 rounded-full"
				alt="Fernando wearing a white shirt and a white cap with a round pair of glasses."
				src={avatar}
			/>
		</picture>
		<h1 class="font-bold text-44 leading-115 sm:text-64 mb-10">Fernando Garcia</h1>
		<p class="max-w-24em font-light text-20 sm:text-24 leading-150 mb-16">
			I am a <s>Frontend</s> UX Developer, I make sure the products I build help their target audience and are easy to maintain. I create Vue.js applications and business-oriented marketing pages with Next.js and WordPress.
		</p>
		<ul class="flex flex-wrap">
			<li class="w-1/2 sm:w-auto font-mono uppercase font-semibold flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					bio
				</a>
			</li>
			<li class="w-1/2 sm:w-auto font-mono uppercase font-semibold flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					LinkedIn
				</a>
			</li>
			<li class="w-1/2 sm:w-auto font-mono uppercase font-semibold flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Github
				</a>
			</li>
			<li class="w-1/2 sm:w-auto font-mono uppercase font-semibold flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Portfolio
				</a>
			</li>
			<li class="w-1/2 sm:w-auto font-mono uppercase font-semibold flex mb-3">
				<a class="link-button" href="/">
					Twitter
				</a>
			</li>
		</ul>
	</div>
</section>