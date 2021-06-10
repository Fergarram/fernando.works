<script>
	import logo from '../assets/logo.svg';
	export let segment;
</script>

<header class="relative max-w-screen-xl mx-auto">
	<div class="absolute max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 w-full pt-6 xs:pt-12 md:pt-20 lg:pt-24 flex flex-col sm:flex-row sm:items-center justify-between z-50">
		<a class="block" href="/" aria-label="Home page">
			<img alt="Fernando.Works" src={logo} />
		</a>
		<nav class="hidden sm:block pt-8 sm:pt-0">
			<ul class="font-mono uppercase font-semibold flex">
				<li class="mr-6">
					<a
						rel=prefetch
						aria-current="{segment === 'projects' ? 'page' : undefined}"
						href="projects">
						projects
					</a>
				</li>
				<li class="mr-6">
					<a
						rel=prefetch
						aria-current="{segment === 'blog' ? 'page' : undefined}"
						href="blog">
						blog
					</a>
				</li>
				<li class="mr-6">
					<a
						rel=prefetch
						aria-current="{segment === 'podcast' ? 'page' : undefined}"
						href="podcast">
						podcast
					</a>
				</li>
				<li>
					<a
						rel=prefetch
						aria-current="{segment === 'about' ? 'page' : undefined}"
						href="about">
						About
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>