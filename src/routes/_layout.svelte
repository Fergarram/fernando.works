<script>
	import Nav from '../components/nav.svelte';
	import Foot from '../components/foot.svelte';

	export let segment;
</script>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Foot />