<script>
	import { stores } from '@sapper/app';
	import Nav from '../components/nav.svelte';
	import Foot from '../components/foot.svelte';

	const { page } = stores();
	export let segment;
</script>

<div
	class:bg-green={ !(!!$page.error) && (segment === undefined || segment === 'about') }
	class:bg-yellow={ !(!!$page.error) && segment === 'podcast' }
	class:bg-dark-gray={ !(!!$page.error) && segment === 'projects' }
	class:bg-light-gray={ !(!!$page.error) && segment === 'blog' }
	class:bg-red={ (!!$page.error) }
	class:min-h-screen={ (!!$page.error) }>
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
	<Foot />
</div>