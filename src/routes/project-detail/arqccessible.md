---
title: 'Arqccessible.com'
description: 'Freelance web design project by Fernando Garcia'
author: Fernando Garcia
date: '2018-06-13'
dateFormatted: 'Jun 2018'
links:
  - label: 'Visit old site'
    url: 'https://arqccesible.com/'
primaryTag: 'Web Design'
secondaryTags:
  - Web Development
  - Vue
  - jQuery ☹️
  - Contentful
  - UI/UX Design
cover:
  url: '/images/arqccessible.jpg'
  alt: 'Mocks of new un-implemented design'
---

## Context

This was one of my first attempts at getting into modern frontend development. Back in 2018, when I was payed to design and build this site, I didn't know about static site generation or server-side rendering tools. I didn't know anything about SEO or what made a good website good.

## Tools

I used Sketch to make the initial design, later on I created a newer version in Figma but those mocks haven't been implemented publicly.

For the frontend I made an ugly mess loading Vue.js from the CDN while also loading jQuery just to query elements in the DOM. For styles I used stylus because it seemed cool. And to glue it all, I wrote my own tool in Node.js to put together all the vue source code, styles and Javascript per page. My reasoning behind this was that I wanted to have real html files behind every route instead of hash routes with a client side router since I didn't know of Nuxt or any SSG tools. So in order to be able to reuse vue components for sections like the header and footer, I created a script that would take my partials and inline them together into html, js and css files per page.