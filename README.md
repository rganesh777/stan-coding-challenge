# Stan Web Coding Challenge

> Welcome to the Stan Web Coding Challenge!

## How to run the App

Prerequisites: Node.js (>=16) and npm (or yarn).

1. Install dependencies

   - npm: `npm install`

2. Start dev server (Vite)

   - npm: `npm run dev`

3. Build for production

   - npm: `npm run build`

4. Run tests
   - npm: `npm test`

---

## How did you decide on the technical and architectural choices used as part of your solution?

- React + TypeScript for type safety and familiar component model.
- React Router for route-based pages.
- React.lazy + Suspense for route code-splitting to reduce initial bundle size.
- Single shared data hook (useMediaFeed) with a small module-level cache to avoid duplicate network requests and provide a simple refetch API.
- React.memo for MediaCard to prevent unnecessary re-renders.
- SCSS modules for scoped styling and predictable class names.
- Semantic elements (header, nav, main, footer), ul/li in nav, alt text for images, focus-visible styles.
- Unit tests with Vitest + Testing Library.

---

### Are there any improvements you could make to your submission?

- Add a robust error boundary for UI-level error handling.
- More accessibility work (WCAG checks, keyboard flows).
- Add E2E tests (Cypress/Playwright) and visual regression tests.
- Add CI (lint, types, tests) and automated deployments.
- Improve type strictness and linting rules for consistent code quality.

---

### What would you do differently if you were allocated more time?

- Implement server-side rendering or static generation for the listing pages to improve first-contentful-paint.
- Implement searching, filtering, sorting UI, and infinite scroll with pagination.
- check for accessibility issues.
- Add more tests (unit, integration, E2E) and set up continuous integration (lint, test, build).
- Further refine UI/UX details, spacing, and responsive behaviour.
- Add breadcrumbs navigation.
- SEO - page title, meta tags, og tags.
- Add reusable utility classes for common layout and styling patterns, reducing repetition and improving consistency across the app.
