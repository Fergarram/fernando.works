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
	<link href={request.permalink} rel="canonical" />
</svelte:head>

<div class="bg-darker-gray">
	<Nav hydrate-client={{}} />
		<main class="bg-darker-gray pb-40">
			<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
				<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
					{@html fields.heading }
				</h1>
				<div class="page-content max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-16">
					<p>
						The main goal of my research is to figure out how to build artificial minds. I'm publicly documenting my research and work so that it may serve others as a means of inspiration or entertainment. My long-term goal is to enable people to have their own artificial minds to do the things they want them to do. My job here would be to provide with tools to successfully create, train and raise artificial minds or super-minds.
					</p>
					<p>
						Having said this, I recommend you start with my <a href={helpers.permalinks['research-detail']({ slug: 'introduction' })}>introductory publication</a>, there I give an overview of what's to expect of this work.
					</p>
					<h2>
						Publications
					</h2>
					<p>
						My research and notes are mainly published here for the readers. But if you're curious, you can also take a look at my <a href="//obscurity.wiki/">personal wiki</a>. My wiki is basically where I dump most of my thoughts about artificial minds, computers, etc. It's inspired by <a href="https://wiki.xxiivv.com/site/home.html">XXIIVV</a>.
					</p>
					<ul class="list-roman pl-5">
						{#each data.posts.reverse() as post}
							<li>
								<a href={helpers.permalinks['research-detail']({ slug: post.slug })}>
									{ post.frontmatter.title }
								</a>
							</li>
						{/each}
					</ul>
					<h2>
						Support my work
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