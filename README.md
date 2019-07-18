# Kora Winter - "Bitter"

###### Please note this is a work in progress website and documentation, so content and appearance will change during time.

## 1. Introduction 👋

My name is Steve and I'm a Junior Full Stack Web Developer from Berlin, Germany. I graduated from coding bootcamp [SPICED Academy](https://www.spiced-academy.com/) in May 2019 and this was my final project. I've had the idea and concept for this website long before I started at [SPICED Academy](https://www.spiced-academy.com/), but before attending I was lacking the necessary skills to actually create it. 

Kora Winter is a metal band from Germany and this website accompanies the release of their upcoming release on September 13th 2019 called "Bitter". I've also worked with them together for years by now and this was a very obvious choice for me as a final project. 😎

This website was build with a JavaScript library called [React](https://reactjs.org/) and [the code for the parallax scrolling experience](https://keithclark.co.uk/articles/pure-css-parallax-websites/demo3/) was originally written by Keith Clark. His code was heavily customized for this project to meet the vision I had in mind.

## 2. Idea 💡

You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. So you two dig up, dig up dinosaurs? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?

## 3. Structure 🗂

```
App.js
|–– Video.js
|–– Tourdates.js (if available)
|–– Band.js
|–– Merch.js
|–– Spotify.js
|–– SocialMedia.js
|–– LegalNotice.js
```
### 1. `Video.js`

<img src="/images/01_video_component.png">

God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Did he just throw my cat out of the window? Did he just throw my cat out of the window? Do you have any idea how long it takes those cups to decompose.

### 2.1 `Tourdates.js` (if available)

<img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">

God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Did he just throw my cat out of the window? Did he just throw my cat out of the window? Do you have any idea how long it takes those cups to decompose.

### 2.2 `Band.js`

<img src="/images/02_band_component.png">

I gave it a cold? I gave it a virus. A computer virus. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!

### 3. `Merch.js`

<img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">

I gave it a cold? I gave it a virus. A computer virus. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!

### 4. `Spotify.js`

<img src="/images/03_spotify_component.png">

God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Did he just throw my cat out of the window? Did he just throw my cat out of the window? Do you have any idea how long it takes those cups to decompose.

### 5. `SocialMedia.js`

<img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">

I gave it a cold? I gave it a virus. A computer virus. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!

### 6. `LegalNotice.js`

<img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">

God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Did he just throw my cat out of the window? Did he just throw my cat out of the window? Do you have any idea how long it takes those cups to decompose.


## 4. To Do List ⚠️

- create table of contents for documentation

- Use video and pictures with lower resolution to decrease loading time

- Make `LegalNotice.js` a modal / pop up

- Update "Bitter" artwork in `Spotify.js`

- Update media queries as certain components don't display correctly in certain resolutions

- Create `Merch.js` similar to `Band.js` (background image with another image on top)

- Check for cross browser compatibility:
  - Firefox: LGTM
  - Chrome: problem with bottom layers
  - Opera: "Bitter" logo only partially displayed, big gap between bottom layer and `div.parallax`
  - Safari: big gap between bottom layer and `div.parallax`