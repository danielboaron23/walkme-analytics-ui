# WalkMe Analytics — Project Handoff & Progress Log

> Living status doc. Read this first when resuming the project.
> Last updated: 2026-05-29.

## TL;DR
A pixel-faithful React reproduction of the WalkMe analytics product (from Figma),
plus a Storybook design system, deployed to GitHub Pages.

| What | Where |
|------|-------|
| Live prototype | https://danielboaron23.github.io/walkme-analytics-ui/ |
| Storybook (design system) | https://danielboaron23.github.io/walkme-analytics-ui/storybook/ |
| GitHub repo | https://github.com/danielboaron23/walkme-analytics-ui |
| Client summary (Google Doc) | "WalkMe — Analytics Prototype (סיכום ללקוח)" in Drive |

## Stack
React 19 · Vite 6 · TypeScript · Tailwind CSS v4 · Recharts · Storybook 8.
Fonts: Poppins (headings) + Proxima Nova (body). Icons: real WalkMe SVGs inlined and
recolored via `currentColor` (`src/components/walkme/Icon.tsx`).

## Run it
```bash
npm install
npm run dev            # app           → http://localhost:5173
npm run storybook      # design system → http://localhost:6007
npm run build          # type-check + production build
npm run build-storybook
```

---

## What's done

### Screens / flows
- **Systems Overview** (entry): Top 5 systems (grouped bar), Top systems by engagement
  (multi-line), Monitored systems table (132 rows, search + actions, faded last row).
- **System dashboard** (click a system row): shared chrome (Header, Sidebar, TitleBar,
  Filter, Tabs) + tabbed content.
  - **Overview tab**: Users analysis funnel, Users exposure trend (gradient lines),
    User interaction by content type (horizontal bars w/ real content icons), world map.
  - **Smart Walk-Thrus tab**: click → loading skeleton (~2.5s) → filled (3 KPI cards +
    Summary table with pagination).
- **Interactions**:
  - Table Name cell: hover → blue link chip; click → **detail drawer** ("Time Off Approval").
  - Drawer: 3 stat cards, "Analytics over time" line chart with **live hover tooltip**
    (date + dot + value + "engagements"), "Smart Walk-Thu steps analysis" flow diagram
    with **internal scroll**; the whole drawer scrolls (scrollbar at panel edge).
  - **View toggle** in the drawer header: dropdown (Side view / Wide view); Wide view
    expands the detail to fill the whole main area.

### Design system
- Tokens in `src/index.css` (`@theme`): colors, spacing (sp5–sp80), radius (cr20/30/40/pill),
  fonts, type utilities (`wm-h1..h5`, `wm-t1..t4`).
- Reusable `ui/` atoms: Avatar, Counter, StatusBadge, SearchInput, TextButton, Pagination.
- Icons: 31 UI icons + 10 content icons + 5 brand logos.
- **Storybook: 42 stories** — Foundations (Intro, Colors, Typography, Spacing & Radius,
  Icons), Components (Primitives, UI Elements, Cards, Chrome, Tables, Detail Panel,
  Compositions), Charts, Pages.

### Deployment
- GitHub Pages serves from the **`gh-pages`** branch (built static files); `main` is source.
- Deploys are currently **manual**: build app (`vite build --base=/walkme-analytics-ui/`)
  + Storybook (`SB_BASE=/walkme-analytics-ui/storybook/`) into a folder, push to `gh-pages`,
  request a Pages build.

## Project structure
```
src/
  assets/        icons/ (recolorable SVGs), content-icons/, logos/, screen2/ (map, funnel)
  components/walkme/   product components + ui/ atoms + charts/ + panel/
  layout/        AppShell, Header, Sidebar, TitleBar, TabStrip
  screens/       SystemsOverview, SystemView
  stories/       Storybook (foundations, components, charts, pages)
  index.css      design tokens + type utilities
scripts/         Playwright capture helpers (shot/cap/swt/drawer/livecheck …)
.storybook/      Storybook config (viteFinal adds tailwind plugin + @ alias + SB_BASE)
```

---

## Open items / next steps
1. **Phase B — Figma design-system library** (NOT started). Agreed plan: a NEW dedicated
   Figma file with Primitives + semantic variable collections (scopes + `var()` code syntax),
   foundations docs pages, then components one-at-a-time (atoms→molecules) with variants +
   bindings, then Code Connect + a11y/naming QA. Multi-phase, sequential `use_figma`, with a
   checkpoint per phase.
2. **Auto-deploy CI**: blocked because the `gh` token lacks the `workflow` scope. To enable:
   run `gh auth refresh -h github.com -s workflow`, then add `.github/workflows/deploy.yml`
   (already drafted once) so every push to `main` redeploys Pages. Until then, deploys are manual.
3. **Repo visibility**: currently **public** (needed for free GitHub Pages). Flip to private
   with `gh repo edit ... --visibility private` (requires Pro for Pages on private).
4. **Data is mock** — front-end prototype only; API wiring is a future step.
5. Leftover stray `.html` file in Drive from the first doc attempt (can be trashed).

## Questions to answer when picking this up
- **Next focus?** Build Phase B (Figma DS file) / build more screens/tabs / refine existing
  screens / wire real data?
- **More frames?** If continuing the product UI, which Figma frames next (Active users,
  SmartTips, Onboarding Tasks, ShoutOuts, Launchers, Resources, Shuttles, Surveys,
  Menu & Search, AI Dashboards — currently "coming soon" placeholders)?
- **Auto-deploy CI now?** Run the `gh auth refresh` so pushes deploy automatically?
- **Repo visibility** — keep public, or move to private?
- **Figma DS scope** (if Phase B): everything we've built vs a curated core set; new file
  confirmed.

## Useful references (from memory)
- Memory dir: `~/.claude/projects/-Users-danielboaron-Walkme/memory/` (project, icon-system,
  figma-fidelity notes).
- Figma files: product mockups `H3F6WfQeHW8OUXcD4q6Q6E`; hover/drawer `KBgs7IueV4pTrYlZ2nY69x`.
- Icon gotcha: these Figma SVGs don't work as CSS `mask-image` (no intrinsic size → solid
  square); inline them via `?raw` with colors swapped to `currentColor`.
