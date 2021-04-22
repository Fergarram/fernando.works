<script>
	import logo from '../assets/logo.svg';

	export let segment;
</script>

<header class="max-w-screen-xl mx-auto px-4 xs:px-12 md:px-16 lg:px-20 xl:px-28">
	<div class="absolute pt-8">
		<img alt="Fernando.Works" src={logo} />
		<nav class="pt-8">
			<ul class="font-mono uppercase font-semibold flex">
				<li class="mr-4">
					<a
						aria-current="{segment === 'projects' ? 'page' : undefined}"
						href="projects">
						projects
					</a>
				</li>
				<li class="mr-4">
					<a
						aria-current="{segment === 'blog' ? 'page' : undefined}"
						href="blog">
						blog
					</a>
				</li>
				<li class="mr-4">
					<a
						rel=prefetch aria-current="{segment === 'podcast' ? 'page' : undefined}"
						href="podcast">
						podcast
					</a>
				</li>
				<li>
					<a
						rel=prefetch aria-current="{segment === 'bio' ? 'page' : undefined}"
						href="bio">
						bio
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>