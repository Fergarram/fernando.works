<script>
	export let showMenu;
</script>

{ #if showMenu }
	<nav class="mobile-menu">
		<ul class="mobile-menu__list">
			<li class="mobile-menu__item">
				<a
					class="mobile-menu__link"
					href="/blog">
					Blog
				</a>
			</li>
			<li class="mobile-menu__item">
				<a
					class="mobile-menu__link"
					href="/projects">
					Projects
				</a>
			</li>
			<li class="mobile-menu__item">
				<a
					class="mobile-menu__link"
					href="/podcast">
					Podcast
				</a>
			</li>
			<li class="mobile-menu__item">
				<a
					class="mobile-menu__link"
					href="/about">
					About
				</a>
			</li>
		</ul>
	</nav>
	<span class="footer">
		All rights reserved.<br>
		Fernando.Works (c) 2020
	</span>
{ /if }

<style lang="scss">
	@import '../../styles/utils.scss';

	.mobile-menu {
		position: relative;
		margin-top: rem-calc(32);

		@include media('>tablet') {
			display: none;
		}

		&__list {
			list-style: none;
		}

		&__item {
			margin-bottom: rem-calc(24);
		}

		&__link {
			font-size: rem-calc(32);
			font-weight: 700;
			text-transform: uppercase;
			color: white;
		}
	}

	.footer {
		display: block;
		position: absolute;
		width: 100%;
		bottom: rem-calc(16);
		left: 0;
		font-size: rem-calc(14);
		color: white;
		text-align: center;

		@include media('>phone-medium') {
			display: none;
		}
	}
</style>