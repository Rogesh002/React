# Simple Restaurant — React Learnings

A restaurant-listing app built step by step while learning React. It lists live restaurants, supports search and filtering, shows a restaurant menu, and demonstrates routing, lazy loading, and Tailwind CSS styling.

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [React DOM](https://react.dev/reference/react-dom) | Rendering to the browser |
| [React Router DOM v6](https://reactrouter.com/) | Client-side routing |
| [Parcel 2](https://parceljs.org/) | Bundler and dev server (HMR, minification, tree shaking) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling (via `@tailwindcss/postcss`) |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:1234)
npm start

# Create a production build in /dist
npm run build
```

## Project Structure

```
React/
├── index.html              # HTML entry point, mounts #root and loads src/app.js
├── index.css               # Global styles + Tailwind import
├── .postcssrc              # PostCSS config enabling the Tailwind plugin
├── package.json
└── src/
    ├── app.js              # App layout + router configuration
    ├── components/
    │   ├── Header.js        # Logo, nav links, Login/Logout toggle
    │   ├── Body.js          # Fetches restaurants, search, Top Rated filter, Reset
    │   ├── RestaurantList.js# Restaurant card (image, name, rating, cuisines, cost)
    │   ├── RestaurantMenu.js# Restaurant details and menu categories/items
    │   ├── Shimmer.js       # Loading skeleton shown while data is fetched
    │   ├── About.js         # About page
    │   ├── Contact.js       # Contact page
    │   ├── Groceries.js     # Groceries page (lazy loaded)
    │   └── Errorhandler.js  # Route error page (useRouteError)
    └── utils/
        ├── constant.js      # LOGO_IMG and RES_IMG (image CDN base URL)
        ├── mockData.js      # Static restaurant data (used before live API)
        └── menuData.json    # Static menu data for RestaurantMenu
```

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Body` | Restaurant list with search and filters |
| `/about` | `About` | About page |
| `/contact` | `Contact` | Contact page |
| `/resMenu/:id` | `RestaurantMenu` | Menu for a restaurant |
| `/groceries` | `Groceries` | Lazy-loaded with `React.lazy()` |
| *(any error)* | `ErrorHandler` | Shows route error status and message |

All child routes render inside the `App` layout through `<Outlet />`, so the `Header` stays on every page.

## Features

- **Live restaurant data** fetched from a public restaurant-listing API in `useEffect`
- **Shimmer UI** shown while data is loading
- **Search** restaurants by name (case-insensitive)
- **Top Rated** filter (rating above 4) and **Reset All**
- **Restaurant cards** with image, name, rating, cuisines and cost for two
- **Restaurant menu page** built from local JSON data, grouped by category
- **Login / Logout** toggle in the header using `useState`
- **Client-side routing** with `createBrowserRouter`, `RouterProvider`, `Link` and `Outlet`
- **Lazy loading / code splitting** for the Groceries page
- **Error page** for unknown routes using `useRouteError`
- **Tailwind CSS** utility classes for layout and styling

## React Concepts Covered

- JSX and functional components
- Props and component composition
- `useState` and `useEffect` hooks
- Conditional rendering (Shimmer vs. content)
- Rendering lists with `map()` and `key`
- Fetching data from an API with `async/await`
- Optional chaining for deeply nested API responses
- React Router: nested routes, dynamic route params, error elements
- `React.lazy` and `Suspense` for code splitting
- Bundling with Parcel and styling with Tailwind via PostCSS

## App Layout Plan

```
Header
 - Logo
 - Nav items
Body
 - Search
 - List of restaurants
     - RestaurantCard
Footer
 - Copyrights
 - Links
 - Address
 - Contacts
```

## Known Limitations / TODO

- `RestaurantMenu` currently reads a fixed restaurant from `menuData.json` and does not yet use the `:id` route param (`useParams`).
- The live restaurant API may be blocked by CORS in some browsers; there is no error state yet, so the Shimmer stays visible if the fetch fails.
- `Groceries` is lazy loaded but not yet wrapped in `<Suspense fallback={...}>`.
- Footer is planned but not yet built.

## Author

**Rogesh** — [GitHub](https://github.com/Rogesh002)
