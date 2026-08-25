# Michael Muniz — Backend & Platform Portfolio

A static React portfolio presenting verified backend engineering outcomes, career history, capabilities, availability, and personal context. The interface uses an operations-console visual language built with semantic HTML and CSS—no runtime API, analytics, remote fonts, or UI framework.

## Content and assets

- Professional claims and metrics are grounded in Michael Muniz’s supplied resume and approved project context.
- `src/content.js` is the factual content boundary; `src/App.jsx` renders the page.
- `src/me.jpg` is the selected profile photo.
- `public/michael-muniz-resume.pdf` is an unchanged downloadable copy of the supplied resume.
- `public/favicon.svg` is the portfolio’s request-path mark.

The page uses native landmarks, ordered headings, descriptive links, keyboard-visible focus states, responsive layouts, and a reduced-motion mode. Decorative request-flow motion is hidden from assistive technology.

## Local development

```sh
yarn install
yarn dev
```

Production build and local preview:

```sh
yarn build
yarn preview
```

## Deployment

```sh
yarn deploy
```

Deployment builds the site and publishes `dist` to the `gh-pages` branch. Deployment is intentionally separate from local validation.
