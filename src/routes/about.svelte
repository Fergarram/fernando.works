<svelte:head>
	<title>Bio - Fernando Garcia</title>
</svelte:head>

<script>
	import photo from '../assets/about.jpg';
</script>

<section class="bg-green pt-24 xs:pt-48 md:pt-56 lg:pt-64 xl:pt-80 pb-40">
	<div class="max-w-screen-xl mx-auto px-4 xs:px-12 md:px-16 lg:px-20 xl:px-28">
		<h1 class="font-bold text-44 leading-115 tracking-title sm:text-64 mb-8">
			About Me
		</h1>
		<ul class="flex flex-wrap mb-10">
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					LinkedIn
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Twitter
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Dev.to
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Instagram
				</a>
			</li>
		</ul>
		<picture class="block mb-16">
			<img
				class="w-full max-w-xl h-auto rounded-md"
				alt="Fernando semi-squating looking at the sky on top of an ancient mexican pyramid."
				src={photo}
			/>
		</picture>
		<div class="max-w-30em font-light text-20 sm:text-24 leading-150 mb-16">
			<p class="mb-8">
				As you could already tell, my name is Fernando Garcia. I am a frontend developer currently based in Mexico. I specialize in web technology although I have <a class="underline" href="/">created apps</a> for Android and iOS, too.
			</p>
			<p class="mb-8">
				My prefered frontend frameworks are usually VueJS, Svelte, or NextJS. It really depends on who the project is for and what the requirements are.
			</p>
			<p class="mb-8">
				Although, I’ll push for Vue for more complex web applications and Next for headless marketing sites since it’s a more developed ecosystem. For personal projects, I will most likely use Svelte or Vue, though.
			</p>
			<h2 class="font-semibold text-32 sm:text-44 leading-115 tracking-title mt-12 mb-6">
				More stuff about me lol
			</h2>
			<p class="mb-8">
				I am really passionate about UI design and software development. I love to write about my experiences and document what I learn or observe.
			</p>
			<p class="mb-8">
				Generally, you’ll find me playing around with fun toys like the Raspberry Pi, joining a game jam, or messing around with Ansi C and Linux. I’ve always wanted to create my own OS since I was a child. But, as it turns out, doing so is way more challenging than I would have thought. Still, this doesn’t stop me of dreaming and writing a few notes about <a class="underline" href="/">how operating systems might evolve in the future</a>.
			</p>
			<p class="mb-8">
				I also happen to host a <a class="underline" href="/">podcast</a>. I really enjoy talking with other creatives out there making a living (or trying to) by building stuff with their computers. It’s really cool that in this day and age I can simply contact anyone in the world and have a call. It’s just mind blowing.
			</p>
			<p>
				Just how you can send me a message right now ;)
			</p>
		</div>
		<ul class="flex flex-wrap mb-10">
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					LinkedIn
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3 sm:mr-10">
				<a class="link-button" href="/">
					Twitter
				</a>
			</li>
			<li class="w-1/2 sm:w-auto flex mb-3">
				<a class="link-button" href="/">
					Email
				</a>
			</li>
		</ul>
	</div>
</section>