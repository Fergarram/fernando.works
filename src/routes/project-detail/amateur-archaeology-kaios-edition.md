---
title: 'Amateur Archaeology: KaiOS Edition'
description: ''
author: Fernando Garcia
date: '2020-02-22'
dateFormatted: 'Feb 2020'
links:
  - label: 'Play Game'
    url: '/amateur-archaeology/'
  - label: 'Fork Code'
    url: 'https://github.com/Fergarram/amateur-archaeology/'
  - label: 'Read Devlog'
    url: '/journal/creating-a-game-for-feature-phones-using-javascript'
primaryTag: 'Video Game'
secondaryTags:
  - Web Development
  - KaiOS
  - Svelte
  - Webpack
  - WebGL
cover:
  url: '/images/amateur-archaeology-project.png'
  alt: ''
---

Back in December of 2015, my cousin [Mario](https://flogar.itch.io/) and I created a game called [Amateur Archaeology III](https://fergarram.itch.io/amateur-archaeology-iii) for the [GM48 Jam](https://gm48.net/). As this supposes, we built this game using Game Maker 8. Mario implemented the initial idea and all the visual and audio assets for the game. Once that was in place I polished and implemented the “complex” mechanics of the game like the level generation.

Amateur Archaeology KaiOS Edition, is a remaster of the original idea developed using Javascript and WebGL for KaiOS-powered feature phones such as the Nokia 8110 aka “Banana Phone”.

## Scope
This project started as a way of trying out development for the KaiOS platform. I wanted to make a small game that would allow me quickly implement something meaningful. I thought that I could make this game in a weekend or two but in really took about two times that. I went into more detail in the devlog. Something else that motivated me to work on this project was the idea of implementing a “simulator” to see how an app or game would look like inside a phone shell, so I implemented it, too.

## Tech stack and tools
I wanted the ability to easily test the game in my mac and real phone without having to run different build scripts. For the simulator, I used Svelte since I had recently found out about it and wanted to give it a try for a small project like this. I also didn’t want to use any third-party dependencies for the actual game (or the project) but ended up using Howler.js for audio playback. I wrote more details in the devlog about these decisions.

Here’s a summary of the tools used:
* Webpack for bundling
* Svelte for simulator
* WebGL for graphics rendering
* Howler.js for audio playback
* Aseprite for sprites and game UI
* Sketch for phone shell and level design

## Conclusion
I learned a ton about developing with WebGL directly and about video game development in general. There’s a lot of room for improvement, specifically lowering the amount of draw calls to just about two or three. The KaiOS development experience also has a lot of room to improve but I was surprised of how easy it can be if you’ve worked with web tools before. Not only that but the KaiOS platform is full of potential! This game surpassed the thousands of downloads in the first weeks which was completely mind-blowing.