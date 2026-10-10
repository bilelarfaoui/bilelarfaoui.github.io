# Bilel Arfaoui Portfolio

Source code for [bilelarfaoui.github.io](https://bilelarfaoui.github.io/).

The portfolio contains my experience, projects, skills, certifications, education, and contact details. It has light and dark themes, a mobile navigation menu, and an enlarged portrait view.

## Stack

- React 19 and TypeScript
- Vite 8 and TanStack Start/Router
- Tailwind CSS 4
- Lucide icons
- Vitest and Testing Library

## Requirements

- Node.js 22 or later
- npm

## Run locally

```sh
npm ci
npm run dev
```

Vite prints the local address in the terminal when the server starts.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the production site. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the test suite once. |
| `npm run test:watch` | Run tests in watch mode. |
| `npm run format` | Format files with Prettier. |

## Deployment

GitHub Actions deploys the site to GitHub Pages on pushes to `main`. The workflow is in `.github/workflows/deploy.yml` and uses Node.js 22.

To create the same static output locally:

```sh
GITHUB_PAGES=true npm run build
```

The build output is written to `dist/client`.

## Project structure

```text
src/
  components/ui/   Shared interface components
  routes/          TanStack Start routes and page content
  assets/          Imported assets, including the portrait
  lib/             Shared utilities and error handling
  styles.css       Tailwind setup, theme tokens, and custom styles
public/            Static files such as the résumé, favicon, and metadata assets
.github/workflows/ GitHub Pages deployment workflow
```

## Content

Page content is in `src/routes/index.tsx`. Shared styles and theme colors are in `src/styles.css`. The résumé is served from `public/Bilel_Arfaoui_Resume.pdf`.
