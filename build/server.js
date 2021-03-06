const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const ncp = require('ncp').ncp;

const args = process.argv.slice(2);
const route = args[0];

// Clean up and prepare 'dist' directory before generating pages.
rimraf.sync(path.resolve(process.cwd(), 'dist/client'));
ncp(path.resolve(process.cwd(), 'static'), path.resolve(process.cwd(), 'dist'), (err) => {
    // Stop in case something went wrong with copying the static folder
    if (err) {
        throw new Error(err);
    }

    // This file comes from the SSR Svelte component.
    const page = require(`../.temp/${route}.js`);

    // Generate HTML files and directories
    const { html, css, head } = page.render();

    // Get the template so that we can replace the placeholders with the SSR stuff.
    const templateFile = path.resolve(process.cwd(), 'build/template.html');
    let template = fs.readFileSync(templateFile, 'utf-8');

    // Replacing with the SSR code.
    template = template.replace('%head%', head);
    template = template.replace('%body%', html);
    template = template.replace('%styles%', `<style>${css.code}</style>`);
    template = template.replace('%scripts%', `<script type="module" src="/client/client.js"></script>`)
    template = template.replace('%scripts%', '')

    // Create posts directory if needed
    if (!fs.existsSync('dist/posts')) {
        fs.mkdirSync('dist/posts');
    }

    // Create projects directory if needed
    if (!fs.existsSync('dist/projects')) {
        fs.mkdirSync('dist/projects');
    }

    // Saving into a file.
    const htmlFile = path.resolve(process.cwd(), `dist/${route}.html`);
    fs.writeFileSync(htmlFile, template);

    // Clean up the .temp SSR directory.
    // rimraf.sync(path.resolve(process.cwd(), '.temp'));
});