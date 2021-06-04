<script>
	import article1 from '../../assets/article1.jpg';
	import article2 from '../../assets/article2.jpg';
</script>

<section class="bg-light-gray pt-12 md:pt-16 lg:pt-20 xl:pt-28 pb-60">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<h2 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-6 md:mb-10">
			Recent Publications
		</h2>
		<a class="inline-block link-button mb-16" href="/">
			See Archive
		</a>
		<div class="grid sm:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-36">
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
			<article class="max-w-sm sm:max-w-none">
				<a href="/" class="block relative overflow-hidden rounded-md" aria-label="Read Article">
					<span aria-hidden="true" class="block absolute top-0 left-0 bg-black text-white text-12 uppercase rounded-md ml-4 mt-4 px-3 py-2 font-semibold shadow-cat z-10">
						Blog post
					</span>
					<img
						class="rounded-md w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-500"
						alt=""
						src={article2}
					/>
				</a>
				<span class="inline-block mt-6 text-24 lg:text-32 leading-125 font-bold">
					The window based personal website that I almost ended up using
				</span>
				<a class="inline-block link-button mt-6" href="/">
					Read Article
				</a>
			</article>
		</div>
	</div>
</section>