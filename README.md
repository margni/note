# mNote

![Margni](https://circleci.com/gh/margni/note.svg?style=svg)

[note.margni.com](https://note.margni.com)

mNote is an extremely minimal note taking web app.

*© Margni Ltd. 2020*

## About

This is built as a technical demonstration for a bare-bones React+Firebase PWA.

***Please note this is still a work in progress.***

### Features

- PWA
  - Installable/service worker
  - Works Offline
  - Fast, minimal, native/app-like interface
  - Dark theme support
- Uses Firestore realtime database to sync changes instantaneously
- Pin Notes
- Search Notes

### Appearance

Designed to be extremely minimal. Design and layout component architecture inspired by Material Design.

CSS uses native variables rather than SASS and also uses BEM class naming conventions.

### Technical

Does not use Flux style pattern but does use Context for simplicity's sake. This approach may not be appropriate in a real-world application.

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
