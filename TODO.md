# To Do

## Features

### New Functionality

- Use history api or routing. Essentially just respond to the back button.
- Other login options?
- Catch and log firestore and auth errors.
- Note sharing (Would be via email and only work if the use is already signed up for simplicity's sake).
  - Just need to extend the security rules, could store a map of uid->email for shares.
  - Share would allow collaboration, or viewing only?
- External text search (would be good as it would require using an external service such as Algolia).
- Show history of previous text searches (will also require a clear history option).
- Delete new empty notes (ie click new then immediately close the note).
- Delete notes which are edited to have no contents.
- Might it be a good idea to disable running multiple instances (i.e. over multiple tabs)?
- Delete account (i.e. clear all user data) ability.
- Should pinning and unpinning change the update time?
- Ability to attach files/images. Note that this could become an issue due to asset size.
- Encrypt note content so that only the creator can read it.

### Enhanced UX

- Service worker should produce dialogue when reload available.
- Delete confirmation dialogue.
- Long press on list.
- Offline Indicator.
- Install prompt/enhanced process.
- Note colours/icons/etc.
- Passive notifications (e.g. when a new note is deleted).
- Multi-lingual (especially considering there is so little text to translate).
- Rich editor (to allow perhaps caret style markdown editing, clickable links, etc.)
- Ability to explicitly toggle dark mode. (Perhaps add an options menu first.)

### Visual

- FAB should slide off screen on scroll down and back on on scroll up.
- Animate reorder on pin/unpin.
- Don't limit app width, but on very wide displays limit width of note list and show placeholder content where editor appears.

## Bugs

- Slide-in animation is buggy between 1280px - 1920px wide due to limitation of flex layout of container.
- On iOS new note's textarea is not focused (works as expected when editing existing).
- Opening the app while offline results in a blank screen for a considerable amount of time.
- App doesnt navigate to new notes while offline (promise not resolved).

## Code Quality, CI, etc.

- Improve firebase encapsulation.
- Not happy with contexts.
- Write more tests!
- Tighten linting rules.
- Mutation testing; i.e. Stryker
- Deploy tags?
- Build icon font (instead of using icomoon)
