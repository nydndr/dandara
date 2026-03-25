# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Dandara** is a personal portfolio/product designer website built with Next.js (App Router), React 19, Tailwind CSS v4, and MDX for content.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build with Turbopack
npm run lint     # Run ESLint
npm start        # Start production server
```

No test suite is configured.

## Architecture

### Routing (Next.js App Router)
- `src/app/layout.js` — Root layout with navigation
- `src/app/page.js` — Home/portfolio page
- `src/app/now/page.js` — "Now" page (current focus, based on nownownow.com standard)
- `src/app/globals.css` — Global styles, CSS variables, and custom animations

### Content
- `src/content/now/now.mdx` — The only MDX content file; drives the `/now` page
- `src/app/now/getLatestUpdate.js` — Reads and parses the MDX file using `gray-matter` and `remark`
- MDX is also supported inline via `next-mdx-remote`

### Styling
- Tailwind CSS v4 via PostCSS
- CSS custom properties: `--background` (#fffbef cream), `--foreground` (#353535), `--dandara` (#ffcc00 brand yellow)
- Custom animations defined in `globals.css`: `.dandara-sun` (logo glow), `.stone-display` (hover), highlighter effects
- Fonts: Manrope, Inconsolata, Work Sans (Google Fonts, loaded in layout)
- Tailwind Typography plugin used for prose content

### Path Aliases
- `@/*` maps to `src/*` (configured in `jsconfig.json`)
