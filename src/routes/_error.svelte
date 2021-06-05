<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Error {status} - Fernando Works</title>
</svelte:head>

<div class="bg-red min-h-screen pt-28 xs:pt-44 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 pb-40">
	<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 md:mb-8">
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-6 xs:mb-10 sm:mb-12">
			Error {status}
		</h1>
		<p class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150">
			{#if status === 404}
				Looks, like the page you are looking for doesn't exist.
			{:else}
				{error.message}
			{/if}
		</p>

		{#if dev && error.stack}
			<pre class="mt-4">{error.stack}</pre>
		{/if}

		<a class="link-button inline-block mt-6" href="/projects">
			Return Home
		</a>
	</section>
</div>