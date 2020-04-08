# mNote Technical Notepad

## Listen For `beforeinstallprompt`

*Not currently available on iOS*

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

## Offline

### On iOS `Navigator.standalone`

Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.

## Sharing Notes Thoughts

Sharing comes with its pitfalls, especially if we wanted to encrypt notes.

## Searching Notes Thoughts

Easier to do search on the client. Also free (outbound functions require a paid plan).

`firebase functions:config:set algolia.api_key="" algolia.app_id="" algolia.search_key=""`
