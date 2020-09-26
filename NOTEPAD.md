# mNote Technical Notepad

## Listen For `beforeinstallprompt`

https://web.dev/customize-install/

_Not currently available on iOS_

Possibly display an install banner at the bottom or an install button in the AppBar?

```javascript
window.addEventListener('beforeinstallprompt', (e) => {
    // Don't show mini-infobar
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to promote PWA installation
    pwaInstallAvailable(true);
});
```

```javascript
buttonInstall.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    hideMyInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });
});
```

## When Installed

```javascript
window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    console.log('INSTALL: Success');
});
```

## Detect When In PWA Mode

```javascript
window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (navigator.standalone) {
        displayMode = 'standalone-ios';
    }
    if (window.matchMedia('(display-mode: standalone)').matches) {
        displayMode = 'standalone';
    }
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);
});
```

## Conditional CSS

```css
@media all and (display-mode: standalone) {
    body {
        background-color: yellow;
    }
}
```

## Offline

### On iOS `Navigator.standalone`

Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.

## Sharing Notes Thoughts

Sharing comes with its pitfalls, especially if we wanted to encrypt notes.

## Searching Notes Thoughts

Easier to do search on the client. Also free (outbound functions require a paid plan).

`firebase functions:config:set algolia.api_key="" algolia.app_id="" algolia.search_key=""`

## Disable Multiple Tabs

Could potentially just use the enablePersistence error condition?

```js
firebase
    .firestore()
    .enablePersistence({ synchronizeTabs: false })
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
        }
    });
```
