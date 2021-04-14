<script>
	export let isMobile;
</script>

<fieldset
	class="filters"
	class:filters--mobile={isMobile}
	class:filters--desktop={!isMobile}>
	<legend>
		Filters:
	</legend>
	<div class="tag">
		<input type="checkbox" id="video-game-tab" name="video-game-tab" value="Bike">
		<label for="video-game-tab">Video Game</label>
	</div>
	<div class="tag">
		<input type="checkbox" id="web-development-tag" name="web-development-tag" value="Car">
		<label for="web-development-tag">Web Development</label>
	</div>
	<div class="tag">
		<input type="checkbox" id="kaios-tag" name="kaios-tag" value="Boat">
		<label for="kaios-tag">KaiOS</label>
	</div>
	<div class="tag">
		<input type="checkbox" id="ui-design-tag" name="ui-design-tag" value="Boat">
		<label for="ui-design-tag">UI Design</label>
	</div>
	<div class="tag">
		<input type="checkbox" id="mobile-design-tag" name="mobile-design-tag" value="Boat">
		<label for="mobile-design-tag">Mobile Design</label>
	</div>
	<div class="tag">
		<input type="checkbox" id="mobile-development-tag" name="mobile-development-tag" value="Boat">
		<label for="mobile-development-tag">Mobile Development</label>
	</div>
</fieldset>

<style lang="scss">
	@import '../../styles/utils.scss';
	@import '../../styles/page.scss';

	.filters {
			display: block;
			margin-top: rem-calc(24);
			border: none;
			outline: none;

			&--mobile {
				@include media('>phone-medium') {
					display: none;
				}
			}

			&--desktop {
				display: none;

				@include media('>phone-medium') {
					display: block;
				}
			}

			legend {
				display: block;
				margin-bottom: rem-calc(16);
			}
		}
</style>