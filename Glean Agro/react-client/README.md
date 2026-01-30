# Glean Agro — React client

This is a minimal React (Vite) frontend scaffold that references the original site's assets and keeps the existing PHP backend for form handling.

- Quick start

- Install deps

```bash
cd "Glean Agro/react-client"
npm install
```

- Dev server

```bash
npm run dev
```

Notes

API proxy (Option A)

This project includes a small API proxy server that forwards requests to a running PHP server and returns rendered HTML. Start your PHP server (example below) and then start the proxy before running the React dev server.

1. Start PHP server from the project root (Glean Agro):

```powershell
cd "c:\Users\iAmJustJosh\Portfolio-Projects\Glean Agro"
php -S localhost:8000
```

1. Start the API proxy (forwards /api/* to the PHP server):

```powershell
cd "c:\Users\iAmJustJosh\Portfolio-Projects\Glean Agro\react-client"
npm run start-api
```

1. Run the React dev server:

```powershell
npm run dev
```

Notes

- The React `LegacyPage` components first try `/api/<file>.php` (proxied to your PHP server) and then fall back to static copies under `/original/<file>.php`.
- If you prefer the full REST migration (Option B) I can scaffold APIs that query the database directly.
