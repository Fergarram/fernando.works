<script>
	import Nav from '../../components/nav.svelte';
	import Foot from '../../components/foot.svelte';

	export let data, request;
</script>

<svelte:head>
	<title>Page Not Found - Fernando Works</title>
	<link rel="icon" type="image/png" href="/icon-48-red.png">
	<meta name="description" content="" />
</svelte:head>

<div class="bg-red min-h-screen">
	<Nav hydrate-client={{}} />
		<main class="pb-64">
			<section class="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 mb-4 md:mb-8">
				<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-6 xs:mb-10 sm:mb-12">
					Error 404
				</h1>
				<p class="max-w-30em font-normal text-18 xs:text-20 md:text-24 leading-150">
					Looks, like the page you are looking for doesn't exist.
				</p>

				<a class="link-button inline-block mt-6" href="/">
					Return Home
				</a>
			</section>
		</main>
	<Foot />
</div>