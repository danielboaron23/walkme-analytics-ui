# WalkMe Analytics — UI

A pixel-faithful React reproduction of the WalkMe analytics product, built from Figma, plus a Storybook design system.

## Stack
- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** with a WalkMe design-token layer (`src/index.css`)
- **Recharts** for data viz
- **Storybook 8** (React + Vite) as the living design system
- Fonts: Poppins (headings) + Proxima Nova (body)

## Getting started
```bash
npm install
npm run dev          # app          → http://localhost:5173
npm run storybook    # design system → http://localhost:6007
npm run build        # type-check + production build
npm run build-storybook
```

## What's inside
- **App** (`src/screens`, `src/layout`, `src/components`) — Systems Overview → System dashboard (Overview tab + Smart Walk-Thrus tab with loading → filled, detail drawer with side/wide views, live chart tooltips).
- **Design system** (`src/stories`) — Foundations (colors, typography, spacing, radius, icons), Components (primitives, UI elements, cards, chrome, tables, detail panel, compositions), Charts, and full Pages.
- **Icons** (`src/assets/icons`) — real WalkMe SVGs inlined and recolored via `currentColor` through `Icon.tsx`.

## Structure
```
src/
  assets/        icons, content-icons, brand logos, map/funnel SVGs
  components/
    walkme/      product components + ui/ atoms + charts/ + panel/
  layout/        AppShell, Header, Sidebar, TitleBar, TabStrip
  screens/       SystemsOverview, SystemView
  stories/       Storybook stories (foundations, components, charts, pages)
  index.css      design tokens (Tailwind v4 @theme) + type utilities
```
