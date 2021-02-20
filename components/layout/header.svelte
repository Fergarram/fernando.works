<script>
	export let route;

	let decorativeTitle = '';
	switch(route) {
	case 'podcast':
		decorativeTitle = 'Podcast';
		break;
	}
</script>

<header class="header">
	<div class="header__wrapper">
		<a class="header__logo" href="/">
			Fernando.Works { decorativeTitle && '//' }
			{ #if decorativeTitle }
				<span class="header__page-name">
					{ decorativeTitle }
				</span>
			{ /if }
		</a>
	</div>
</header>

<style lang="scss">
	@import '../../styles/utils.scss';

	.header {
		background: black;
		padding: rem-calc(16) rem-calc(20);

		&__wrapper {
			@extend %container;
		}

		&__logo {
			font-family: $font-oswald;
			font-size: rem-calc(18);
			font-weight: 700;
			text-transform: uppercase;
			color: white;
			text-decoration: none;
		}

		&__page-name {
			font-weight: 300;
		}
	}
</style>