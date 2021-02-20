// Code splitting would occur from this page component.
import Page from "../components/page.svelte";

// Where Svelte will mount...
const target = document.getElementById("site-main");

// Get the route
const route = location.pathname === '/' ? 'index' : location.pathname.slice(1);

// Export the page instance.
export default new Page({
  target,
  hydrate: true,
  props: { route }
});
