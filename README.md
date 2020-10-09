# mNote

[![Latest Build](https://travis-ci.org/margni/note.svg?branch=master)](https://travis-ci.org/github/margni/note)

[![note.margni.com](public/logo192.png)](https://note.margni.com)

mNote is an extremely minimal note taking web app.

_© Margni Ltd. 2020_

## About

This is built as a technical demonstration for a relatively simple React+Firebase PWA.

**_At this time its intended purpose is exploring these ideas, not to demonstrate a production quality app._**

### Features

-   PWA
    -   Manifest, services worker, etc.
    -   Installable with custom handler
    -   Works Offline
    -   Performant, minimal, native/app-like interface
    -   Dark theme support
    -   Share via Web Share API
-   Uses Firestore realtime database to sync changes instantaneously
-   Pin Notes
-   Search Notes
-   Tag Notes
-   Multilingual; uses iconography instead of words to make the application language agnostic for sighted users (Better accessibility is on the roadmap).

### Appearance

Designed to be extremely minimal. Design and layout component architecture inspired by Material Design.

CSS uses native variables rather than SASS and is also constructed using css modules for componentized CSS rather than something like BEM.

### Technical

Generally trying to keep things as simple as possible. Intentionally not Flux based, this approach may not be suitable for a real-world application.

## ToDo

[To Do](./TODO.md)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
