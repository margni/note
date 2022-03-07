# mNote

[![mNote Logo](public/logo192.png)](https://note.margni.com)

[mNote](https://note.margni.com) is an extremely minimal note taking web app.

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
    -   Most code in module to reduce initial download size
-   Uses Firestore realtime database to sync changes instantaneously
-   Pin Notes
-   Search Notes
-   Tag Notes

### Appearance

Designed to be extremely minimal. Design and layout component architecture inspired by Material Design.

CSS modules for componentized CSS rather than something like BEM. Avoided SASS/CSS-in-JS type solutions just for the sake of simplicity.

Uses iconography to make the application largely language agnostic for sighted users (Better accessibility is on the roadmap).

### Technical

Designed for experimenting with PWA concepts and Firebase, some technical aspects may not be appropriate for real-world applications; Some hacky experimental code, poor test coverage, not using 3rd party libraries and generally trying to keep things more simple than one otherwise would.

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
