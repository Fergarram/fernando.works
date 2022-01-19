---
title: 'AICA Access'
description: ''
author: Fernando Garcia
date: '2018-01-09'
dateFormatted: 'Jan 2018'
links:
  - label: 'Facebook Page'
    url: 'https://www.facebook.com/AICAAGENCIA'
  # - label: 'Gallery'
  #   url: '#gallery'
primaryTag: 'Mobile App'
secondaryTags:
  - Startup MVP
  - Mobile App
  - UI/UX Design
cover:
  url: '/images/access.jpg'
  alt: 'Multiple mobile screenshots of app'
---

I started working on this project as the only developer and designer in the team back in the year 2018 as part of a startup called AICA. The goal with this app was to allow visually impaired and deaf people in Mexico to read public signs, books, and other graphical forms of information by using augmented reality for LSM (Mexican Sign Language) and descriptive audio playback.

## Scope

The original goal and scope for this MVP was to have an Android app capable of the following:

* Show a video with transparent background of an LSM interpreter when a target is scanned
* Be able to upload new scannable content for users without them updating the app
* A physical sample book for kids to scan and get investors (out of my role scope)

Later on, we had the expected scope creep which added:

* A map that allows users to find accessible places
* Reviews those places' accessibility.
* Relationship between places and scannable targets i.e. food menus

## Design

Using Sketch, I created a v1 mockup for this app which is what I ended up coding. Later on, I realized I could just use Material Design guidelines and created a v2 mockup that never made the light in implementation.

## Tools and tech stack

The main challenge was the AR part. I decided to go with [Vuforia](https://developer.vuforia.com/). For the cloud backend I decided to go with Firebase in order to be able to quickly build an MVP. I used Android Studio with Java, the interface was made with the available tools in Android Studio. Vuforia uses an OpenGL backend wich required me to write a small shader to get that transparent video playback as well as to position the quad relative to the target area.

Here's a summary of tools used:
* Vuforia with OpenGL and GLSL
* Android Studio using Java
* Firebase Realtime Database

## Conclusion

Working solo on this and the other projects in this startup pushed me to learn different development environments and experience some of the drawbacks of working with Android. Design-wise, I was able to test my mockups with real deaf users which taught me a lot about the difference between UI and UX. There's more to say about this project like why it failed even though the MVP was successfully created, but writing this in 2021, I feel I've told this story many times in person so I wont go into detail.
