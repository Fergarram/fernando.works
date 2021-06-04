<script>
	import article1 from '../assets/article1.jpg';
</script>

<article class="max-w-sm sm:max-w-none">
	<a href="/" class="block relative overflow-hidden rounded-md" aria-label="Read Article">
		<span aria-hidden="true" class="block absolute top-0 left-0 bg-black text-white text-12 uppercase rounded-md ml-4 mt-4 px-3 py-2 font-semibold shadow-cat z-10">
			Project
		</span>
		<img
			class="rounded-md w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-500"
			alt=""
			src={article1}
		/>
	</a>
	<span class="inline-block mt-6 text-24 lg:text-32 leading-125 font-bold">
		Amateur Archaeology KaiOS Edition
	</span>
	<ul class="hidden lg:flex flex-wrap mt-3">
		<li class="h-max-content bg-black-a-40 px-3 py-2 rounded-md uppercase text-12 font-semibold text-white mr-5 my-2">
			Video Game
		</li>
		<li class="h-max-content bg-black-a-40 px-3 py-2 rounded-md uppercase text-12 font-semibold text-white mr-5 my-2">
			Web Development
		</li>
	</ul>
	<a class="inline-block link-button mt-4" href="/">
		See Project
	</a>
</article>