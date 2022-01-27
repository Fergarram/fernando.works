---
title: 'Vision into the future (draft)'
description: 'A glimpse of how the future of computing and artificial minds look like.'
author: Fernando Garcia
date: '2022-01-22'
dateFormatted: 'January 22, 2022'
next: ''
---

I feel that for us humans to be able to fully use computers we need to close the gap between users and software. In order to do that, we need a better way to communicate with our computers. As of today our computers have multiple functions — from complex data management to entertainment of all kinds.

On the other hand, with the more recent space race, a demand for robots will definitely increase. Robots may also represent a way to make humanity a safer place, removing dangerous jobs.

In both cases, something is imminent. We need sentient systems, or as I call them, artificial minds. Conscious digital beings that help us advance civilization (or doom it forever).

These thoughts here are not new, though. They have been laying around for quite some decades now. But something that I haven’t quite seen yet in the AI scene is an animalistic approach to teaching and raising artificial minds or sentient systems. In other words, nobody is thinking about creating AND raising digital babies. If we take a look, most animals that might be considered intelligent learn from their parents example, like most primates and the [American Crow](https://www.birds.cornell.edu/crows/planta.htm).

But to be honest, I don’t want to convince anyone that this is the way to go, not with words. Instead, I want to implement such systems, or at least try to. So in my attempt to do so, I’ll be writing on a daily basis and publishing on weekly or bi-weekly basis depending on how much is worth sharing.

To help myself navigate this crazy journey, I’ll share my mental roadmap.

1. Requirement Definitions
	1. Use Cases — The Where
	2. User Experience — The How
2. Training and development
	1. From being born to becoming an adult
	2. Parenthood — How to teach
	3. Virtual Raising Communities — The Video Game World
3. Cognitive Architecture Overview
	1. Joscha Bach
	2. cass.netlify.com
4. Technical Architecture
	1. Low-level Prototypes and Experiments
	2. Development Tools
	3. Code and Metal — Livewiring

```
* Human-like artificial minds (super-minds)
* Domain-specific artificial minds
* [[ a, `Ego Cells`, `/artificial-minds/ego-cells.html` ]]
* World definition, body interfaces and senses
* Osmosis / Learning techniques for super-minds
* Interoperable controls between humans and super-minds
```

## Requirement Definitions
As with any software project, one needs to have a set of requirements. In this case, I’ll try to explain what the end product may look like and what use cases we can expect.

### Use Cases — The Where

#### Personal Computer Assistants
This one is pretty obvious, we’ve seen this perfectly illustrated in the movie “Her”. But not the main character that Scarlett Johansson plays. I’m talking about the computer voice that Theodore tells to play nostalgic music.

#### Autonomous Robots
This one is very obvious as well. But I don’t envision it as one would expect. I don’t think that a mind would correspond to a specific drone or Boston Dynamic’s Spot. It’s not like we’re going to put a mind in their brain. Instead, artificial minds will use these robots as robots with custom controllers that would be very hard or impossible for us to use effectively with our hands. I’ll explain later on why I think this is the case in the **Training and Development** chapter.

#### Video Game Characters
This is my favorite one. Imagine being able to create a fantastic video game with your personal computer assistant, and on top of that to be able to give actual life to the characters in your world!

#### Simulations and scientific research
The concepts behind implementing artificial minds could bring a new horizon in how we think about solving problems — they give us a new solution space. It’s normal for us humans to anthropomorphize everything. Specially when trying to understand how certain systems or a set of rules work. The mental system that allows us to do that can basically allow us to do the same thing but in a tangible way. We could think of this as a new way to do programming. It might make more sense after going into the **The Technical Architecture** chapter where I talk about ego cells.

### User Experience — The How

Using artificial minds will initially take the form of a chat bot or a very smart command line. For example, say I have a text editor or IDE and I’m trying to visualize an execution path or maybe I want to visualize a dependency graph. Imagine just being able to say something like “Show me all the ways I could get to this breakpoint” or “where are these class methods being used”. It would also change the way IDEs work. We could say “rename this function” and instead of running some sort of algorithm that involves a parser, etc. the assistant knows exactly where to replace those because it has a personal map that it uses to navigate the code.

On a more trivial place, imagine being able to say “Create a copy of all my kids photos you can find in my files and put them in a new album/folder. Then send it to my mom.”

The way I think about it is, imagine you have a friend that knows a ton about your computer and that basically lives inside it. What would you be able to ask him to do for you?