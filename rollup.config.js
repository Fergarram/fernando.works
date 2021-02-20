import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import execute from 'rollup-plugin-execute';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const ClientBundleConfig = {
	input: 'build/client.js',
	output: {
		sourcemap: true,
		format: 'es',
		name: 'app',
		dir: 'dist/client'
	},
	plugins: [
		svelte({
			dev: !production,
			css: function (css) {
				// Still unsure wether this is needed...
				// css.write('dist/styles.css');
			},
			hydratable: true,
			preprocess: sveltePreprocess()
		}),
		resolve({
			browser: true,
			dedupe: importee =>
				importee === 'svelte' || importee.startsWith('svelte/')
		}),
		dynamicImportVars(),
		json(),
		terser()
	]
};

// Apparently get routes from this build process...
const routes = [ 'index', 'podcast' ];

const RouteConfigurations = routes.map( route => {
	return {
		input: `pages/${route}.svelte`,
		output: {
			format: 'cjs',
			dir: '.temp'
		},
		plugins: [
			svelte({
				dev: !production,
				generate: 'ssr',
				preprocess: sveltePreprocess()
			}),
			resolve({
				browser: true,
				dedupe: importee =>
					importee === 'svelte' || importee.startsWith('svelte/')
			}),
			json(),
			dynamicImportVars(),
			execute(`node build/server.js ${route}`)
	  ]
	};
});

// NOTE: It is importantto keep this array order for the server to work correctly!
//       Otherwise, the server.js script will delete the generated client-side code!
export default [ ...RouteConfigurations, ClientBundleConfig ];
