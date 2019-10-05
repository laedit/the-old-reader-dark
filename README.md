# the-old-reader-dark

Dark theme for The Old Reader.

Available on:

 - Firefox: https://addons.mozilla.org/fr/firefox/addon/the-old-reader-dark/
 - Chrome: https://chrome.google.com/webstore/detail/the-old-reader-dark/fpjjphhhciifpfhapopmdfppmhkepmnl

## Permissions needed

 - "*://theoldreader.com/*": access to theoldreader.com page
 - "storage": store the options

 ## Build

```bash
yarn build
```
Produces a firefox version in `build/firefox` and chrome version in `build/chrome`.

### Publish

```bash
yarn package
```
Produces a firefox version in `web-ext-artifacts/firefox` and chrome version in `web-ext-artifacts/chrome`.

Artifacts must then be uploaded on [Mozilla Addons](https://addons.mozilla.org/en-US/developers/) and [Chrome Web Store](https://chrome.google.com/webstore/devconsole/).
