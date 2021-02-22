<script>
import MobileMenu from "./mobile-menu.svelte";

	export let route;

	let decorativeTitle = '';
	switch(route) {
	case 'podcast':
		decorativeTitle = 'Podcast';
		break;
	}

	let showMenu = false;
</script>

<header class="header">
	<div class="header__sticky">
		<div
			class="header__wrapper"
			class:header__wrapper--show-menu={ showMenu }>
			<a class="header__logo" href="/">
				Fernando.Works { decorativeTitle && '//' }
				{ #if decorativeTitle }
					<span class="header__page-name">
						{ decorativeTitle }
					</span>
				{ /if }
			</a>
			<nav class="nav">
				<ul class="nav__list">
					<li class="nav__item">
						<a
							class="nav__link"
							href="/work">
							Work
						</a>
					</li>
					<li class="nav__item">
						<a
							class="nav__link"
							href="/blog">
							Blog
						</a>
					</li>
					<li class="nav__item">
						<a
							class="nav__link"
							href="/podcast">
							Podcast
						</a>
					</li>
					<li class="nav__item">
						<a
							class="nav__link"
							href="/contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<button
				class="header__menu-button"
				on:click={ () => showMenu = !showMenu }>
				Show Menu
			</button>
			<MobileMenu {showMenu}/>
		</div>
	</div>
</header>

<style lang="scss">
	@import '../../styles/utils.scss';

	.nav {
		display: none;

		@include media('>tablet') {
			display: block;
		}

		&__list {
			display: flex;
			list-style: none;
		}

		&__item {
			margin-left: rem-calc(44);
		}

		&__link {
			color: white;
			text-transform: uppercase;
			font-weight: 500;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.header {
		height: rem-calc(53);

		&__sticky {
			position: fixed;
			width: 100%;
			background: black;
			z-index: 101;
		}

		&__wrapper {
			@extend %container;

			position: relative;
			padding: rem-calc(16) rem-calc(20);

			@include media('>tablet') {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: rem-calc(16) rem-calc(24);
			}

			&--show-menu {
				height: 100vh;

				@include media('>phone-medium') {
					height: auto;
				}
			}
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

		&__menu-button {
			position: absolute;
			top: rem-calc(4);
			right: rem-calc(4);
			width: rem-calc(44);
			height: rem-calc(44);
			outline: none;
			border: none;
			background-color: transparent;
			background-image: url('assets/menu.svg');
			background-size: rem-calc(18) rem-calc(14);
			background-position: center;
			background-repeat: no-repeat;
			font-size: 0;
			cursor: pointer;

			@include media('>tablet') {
				display: none;
			}
		}
	}
</style>