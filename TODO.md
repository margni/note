# To Do

## Features

### Picked For Development Next

-   Archive/Soft Delete
-   Enhance Tags UI
-   Global context / account menu.
    -   Link to source
    -   Link to margni
    -   Toggle dark mode
    -   Toggle experimental features

### New Functionality

-   MD support, ideally live edit.
-   Analytics
-   Add a router.
    -   This could be useful for share target, app shortcuts, publicly shared notes, etc.
-   Enhance Web Share https://web.dev/web-share/
-   Web Share Target https://web.dev/web-share-target/
-   App Shortcuts https://web.dev/app-shortcuts/
-   Other login options, or at least email+password
-   Catch and log firestore and auth errors.
-   Note sharing (MVP could be via email and essentially only work if there is a user with that email, either now or in the future).
    -   Just need to extend the security rules, could store a map of uid->email for shares.
    -   Share would allow collaboration, or viewing only?
-   External text search (would be good as it would require using an external service such as Algolia).
-   Show history of previous text searches (will also require a clear history option).
-   Might it be a good idea to disable running multiple instances (i.e. over multiple tabs)?
-   Delete account (i.e. clear all user data) ability.
-   Should pinning and unpinning change the update time?
-   Ability to attach files/images. Note that this could become an issue due to asset size.
    -   See storage, would need to either charge or severely restrict asset size.
    -   Attach links may also be an option, rather than store the file.
-   Encrypt note content so that only the creator can read it.
-   Soft delete (i.e. move to trash and delete after 24 hours or similar).
-   Folders
-   Make URLs clickable (without negatively impacting editing experience).
-   Reminders
-   Push notification for share, reminders, etc.

### Enhanced UX

-   Accessibility!
-   Enhance keyboard navigation and add shortcuts.
-   Drawer menu.
-   Scroll shadows.
-   Service worker should produce notification when reload available.
-   Delete confirmation dialogue.
-   Long press on list.
-   Offline Indicator.
-   Note colours/icons/etc.
-   Passive notifications (e.g. when a new note is deleted).
-   Multi-lingual (especially considering there is so little text to translate).
-   Rich editor (to allow perhaps caret style markdown editing, clickable links, etc.)
-   Ability to explicitly toggle dark mode. (Perhaps add an options menu first.)

### Visual

-   FAB should slide off screen on scroll down and back on on scroll up.
-   Animate reorder on pin/unpin.
-   Consider moving pinning off of main view.

## Bugs

### High

-   Open notes do not seem to receive remote updates.

### Medium

-   Opening the app while offline results in a blank screen for a considerable amount of time.

### Low

-   On iOS new note's textarea is not focused (works as expected when editing existing).

## Code Quality, CI, etc.

-   Currently using CamelCase file names, not sure why.
-   Improve firebase encapsulation.
-   Improve context usage.
-   More tests.
-   Tighten linting rules.
-   Mutation testing; Stryker
-   Deploy tags?
-   Build icon font (instead of using icomoon)
