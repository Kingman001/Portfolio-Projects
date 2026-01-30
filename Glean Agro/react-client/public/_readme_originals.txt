This folder is populated by the script `scripts/copy-assets-and-php.js`.

- `assets/` will be copied to `/assets/` here so the React app can use original images and other static files.
- All `.php` files (and folder structure) from the original project are copied to `/original/` so LegacyPage components can fetch and render them.

Run `npm run copy-assets` (or `npm install` to trigger postinstall) in `react-client` to populate this folder.
