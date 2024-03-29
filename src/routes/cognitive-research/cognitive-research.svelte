<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request, helpers;
	export let fields = {
		heading: 'Cognitive Research',
		links: [
			{
				label: 'Twitter',
				url: 'https://twitter.com/_fergarram_/',
				external: true
			},
			{
				label: 'Dev.to',
				url: 'https://dev.to/fergarram',
				external: true
			},
			{
				label: 'LinkedIn',
				url: 'https://www.linkedin.com/in/fergarram/',
				external: true
			}
		]
	};
</script>

<svelte:head>
	<title>Cognitive Research - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-dark-gray.png">
	<meta name="description" content="Public research about the implementation of artifical minds." />
	<link href="https://fernando.works{request.permalink}" rel="canonical" />
</svelte:head>

<div class="bg-darker-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-darker-gray pb-40">
			<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
				<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
					{@html fields.heading }
				</h1>
				<div class="page-content max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 tracking-subtitle mb-16">
					<p>
						The main goal of my research is to figure out how to build artificial minds. I'm publicly documenting my research and work so that it may serve others a means of inspiration, utility, or entertainment.
					</p>
					<h2>
						Digital Garden
					</h2>
					<p>I highly recommend you visit my public Obsidian vault at <a class="font-medium" rel="noopener" href="https://obscurity.wiki">Obscurity.Wiki</a> where I organize all my ideas about how to implement an artificial mind. I've designed this digital garden to be used as the Obsidian app without the need to download it. You can also think about it as a personal wiki.</p>
					<h2>
						Related Posts
					</h2>
					<p>
						Sometimes I write in a more general sense about what I'm doing.
					</p>
					<div class="grid gap-8 py-6 pl-8 border-l-4 border-black-a-20">
						{#each data.posts as post}
							<article>
								<a class="block text-24 leading-125 font-semibold no-underline hover:underline" href={ helpers.permalinks['article-detail']({ slug: post.slug }) }>
									{ post.frontmatter.title }
								</a>
								<time
									class="block font-light text-16 md:text-18 xl:text-20 mt-1"
									datetime={ post.frontmatter.date }>
									{ post.frontmatter.dateFormatted }
								</time>
							</article>
						{/each}
					</div>
					<h2>
						Support My Work
					</h2>
					<p>
						Lastly, if you would like to support my work you can follow me on these social media platforms and share with your friends.
						{#if 0}
						you can suscribe using your email. I promise you that the only purpose of this is to notify you whenever I do `git push` on this site. It also helps me know that real people are reading.
						{/if}
					</p>
					{#if 0}
					<form>
						<fieldset>
							<label for="email-input">Email:</label>
							<input id="email-input" type="email" required>
							<button type="submit">Get Notified</button>
						</fieldset>
					</form>
					{/if}
				</div>
				<ul class="flex mb-10">
					{#each fields.links as link}
						<li class="w-1/3 sm:w-auto flex mb-3 sm:mr-10 last:mr-0">
							<a
								class="link-button"
								href={ link.url }
								target={ link.external ? '_blank' : null }
								rel={ link.external ? 'noopener' : 'prefetch' }>
								{ link.label }
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</main>
	<Foot />
</div>