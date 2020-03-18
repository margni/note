# mNote

![Margni](https://circleci.com/gh/margni/note.svg?style=svg)

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
- Note colours/icons/etc.
- Note sharing (Would be via email and only work if the use is already signed up for simplicity's sake).
  - Just need to extend the security rules, could store a map of uid->email for shares.
  - Share would allow collaboration, or viewing only?
- Text search (would be good as it would require using an external service).
  - Show history of previous searches (will also require a clear history option).
- Delete new empty notes (ie click new then immediately close the note).
- Delete notes which are edited to have no contents.
- Passive notifications (e.g. when a new note is deleted).
- Might it be a good idea to disable running multiple instances (i.e. over multiple tabs)?
- Display a note's text up till the first double new line (i.e. treat the first line as the title).
- Animate reorder on pin/unpin.
- Delete account (i.e. clear all user data) ability.
- Multi-lingual (especially considering there is so little text to translate).
- Should pinning and unpinning change the update time?

### Bugs

- On iOS new note's textarea is not focused (works as expected when editing existing).
- Opening the app while offline results in a blank screen for a considerable amount of time.
- App doesnt navigate to new notes while offline (promise not resolved).

### Code Quality

- Improve firebase encapsulation.
- Not happy with contexts.
- Write more tests!
- Tighten linting rules.

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
