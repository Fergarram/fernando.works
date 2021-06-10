<script>
	import { stores } from '@sapper/app';
	import Nav from '../components/nav.svelte';
	import Foot from '../components/foot.svelte';

	const { page } = stores();
	export let segment;
</script>

<div
	class:bg-red={ !!$page.error }
	class:min-h-screen={ !!$page.error }>
	<Nav {segment} isErrorPage={ !!$page.error }/>
	<main>
		<slot></slot>
	</main>
	<Foot />
</div>