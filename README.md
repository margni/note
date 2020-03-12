# mNote

[note.margni.com](https://note.margni.com)

mNote is an extremely minimal note taking web app.

*© Margni Ltd. 2020*

## About

This is built as a technical demonstration for a bare-bones React+Firebase PWA.

***Please note this is still a work in progress.***

### Appearance

Designed to be extremely minimal. Design and layout component architecture inspired by Material Design.

CSS uses native variables rather than SASS and also uses BEM class naming conventions.

### Technical

Does not use Flux style pattern but does use Context for simplicity's sake. This approach may not be appropriate in a real-world application.

## To Do

### Features

- Use history api or routing. Essentially just respond to the back button.
- Other login options?
- Service worker should produce dialogue when reload available.
- Delete confirmation dialogue.
- Long press on list.
- Offline Indicator.
- Catch and log firestore and auth errors.
- Install prompt/enhanced process.
- FAB should slide off screen on scroll down and back on on scroll up.

### Bugs

- On iOS new note's textarea is not focused (works as expected when editing existing).
- Auth seems unstable, could be something to do with react lifecycle?
- General instability on mobile, may be resolved now.

### Code Quality

- Improve firebase encapsulation.
- Components, separation of concerns and context usage is all a mess.
- Write Tests!
- CI pipeline.
- Tighten linting.

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
