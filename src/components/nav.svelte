<script>
	import { slide } from 'svelte/transition';

	let isOpen = false;

	const items = [
		{
			label: 'research',
			slug: '/cognitive-research/'
		},
		{
			label: 'projects',
			slug: '/projects/'
		},
		{
			label: 'journal',
			slug: '/journal/'
		},
		{
			label: 'podcast',
			slug: '/podcast/'
		},
		{
			label: 'about',
			slug: '/about/'
		},
	];
</script>

<header class="pb-6">
	<div
		class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 w-full py-6 sm:py-12 md:py-20 lg:py-24 flex items-center justify-between z-50">
		<a
			on:click={ () => isOpen = false }
			class="block"
			href="/"
			aria-label="Home page">
			<img alt="Fernando.Works" src="/images/logo.svg" />
		</a>
		<button
			on:click={ () => isOpen = !isOpen }
			aria-label="Open Menu"
			aria-controls="mobile-menu-section"
			class="md:hidden p-2 hover:bg-black-a-20 focus:outline-none rounded-md transition">
			{#if isOpen }
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/></svg>
			{/if}
		</button>
		<nav
			class="hidden md:block pt-8 sm:pt-0">
			<ul class="font-semibold uppercase font-bold flex">
				{#each items as item }
					<li class="mr-10 last:mr-0 font-mono">
						<a href={ item.slug }>
							{ item.label }
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<section
		id="mobile-menu-section"
		aria-live="polite"
		class="md:hidden">
		{#if isOpen }
			<nav
				transition:slide|local
				class="w-full p-6 xs:px-8 sm:px-12 pt-2">
				<ul class="uppercase font-bold text-24">
					{#each items as item }
						<li class="mb-6 last:mb-0">
							<a
								on:click={ () => isOpen = false }
								class="border-b-3"
								href={ item.slug }>
								{ item.label }
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</section>
</header>