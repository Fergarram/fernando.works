<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request;
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
	<meta name="description" content="" />
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
						The main goal of my research is to figure out how to build artificial minds. I'm publicly documenting my research and work so that it may serve others as a means of inspiration or entertainment. In any case, since the concepts I talk about are very tecnical, I'm assuming you have some background in programming or at least are interested in how computers or minds work.
					</p>
					<p>
						Having said this, I recommend you start with my <a href="/introduction">introductory post</a>, there I give an overview of what's to expect of this work and some very needed disambiguation.
					</p>
					<h2>
						Publications
					</h2>
					<p>
						All public work will initially be uploaded to my <a href="//obscurity.wiki">personal wiki</a>. This makes it easier for me to not get distracted by being able to use my rudimentary linux laptop. Here's a list of the most recent publications, there's no time delay between my wiki and this site so expect this to be always up to date.
					</p>
					<ul class="list-roman pl-5">
						<li>
							<a href="/cognitive-research/introduction">
								An introduction to artificial minds
							</a>
						</li>
					</ul>
					<h2>
						Support my work
					</h2>
					<p>
						Lastly, if you would like to support my work and get notified whenever I publish something, you can follow me on these social media platforms.
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