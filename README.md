# The Fog Is Lifting

A multilingual library site for Bridges Foundation documentaries, series, books, and courses.

## Stack

- Next.js 15 App Router
- Tailwind CSS 4
- shadcn/ui primitives
- next-intl (`en`, `es`, `he`, `hi`, `zh`)

English is the complete edition. Other locales fall back to English for chapters that were never translated.

## Scripts

```bash
# Start the development server
npm run dev

# Production build
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

## Locales

| Code | Language | Completeness |
|------|----------|--------------|
| en | English | Full library |
| es | Spanish | Core films, series, Quran translation |
| he | Hebrew | Core films and series |
| hi | Hindi | Core films, series, Quran translation |
| zh | Chinese | Core films, series, Quran translation |
