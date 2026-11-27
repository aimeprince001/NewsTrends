# NewsTrends (New Trendz)

A React and Vite news-reading interface with category browsing, article pages, search, bookmarks, reading history, profile preferences, and English, French, and Kinyarwanda translations.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm ci
npm run build
npm run preview
```

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the Vite app and deploys the `dist` directory to GitHub Pages when changes are pushed to `main`.

GitHub Pages publishing must be configured to use **GitHub Actions** in repository Settings → Pages.

## Important limitations

- The displayed article content is currently sample/demo content in `src/data/newsData.js`; it is not connected to a live news API.
- Login and profile data are stored in browser `localStorage`. This is a front-end demo, not secure production authentication or a shared user database.
