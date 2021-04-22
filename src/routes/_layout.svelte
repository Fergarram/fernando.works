<script>
	import Nav from '../components/Nav.svelte';
	import Foot from '../components/Foot.svelte';

	export let segment;
</script>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Foot />