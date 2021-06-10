<script>
	import avatar from '../../assets/yo.jpg';
	export let fields = {
		heading: 'Fernando Garcia',
		avatar: {
			url: avatar,
			alt: "Fernando wearing a white shirt and cap with a round pair of glasses."
		},
		paragraph: 'I am a Frontend Developer and Designer. I make sure the products I build help their target audience reach their goals while keeping the codebase maintanable and joyful to work on.',
		links: [
			{
				label: 'LinkedIn',
				url: 'https://www.linkedin.com/in/fergarram/',
				external: true
			},
			{
				label: 'Github',
				url: 'https://github.com/fergarram/',
				external: true
			},
			{
				label: 'Behance',
				url: 'https://www.behance.net/fergarram',
				external: true
			},
		]

	};
</script>

<section class="bg-green pb-12 md:pb-16 lg:pb-20 xl:pb-28">
	<div class="max-w-screen-xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28">
		<picture class="block mb-10">
			<img
				class="w-60 h-60 rounded-tr-3xl"
				alt={ fields.avatar.alt }
				src={ fields.avatar.url }
			/>
		</picture>
		<h1 class="font-semibold text-36 xs:text-40 sm:text-44 md:text-48 lg:text-56 xl:text-64 leading-115 tracking-title mb-4 md:mb-8">
			{@html fields.heading }
		</h1>
		<p class="max-w-24em font-normal text-18 xs:text-20 md:text-24 leading-150 mb-16">
			{@html fields.paragraph }
		</p>
		<ul class="flex">
			{#each fields.links as link}
				<li class="mr-6 xs:mr-10 last:mr-0">
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
</section>