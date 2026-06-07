# Euclid – India‑focused Due Diligence Platform

## Overview
Euclid is a single‑page web application that mirrors the functionality of **Harvey.ai** but is tailored for Indian jurisdictions (36 states & union territories).  It provides a chapter‑wise due‑diligence workflow, an interactive topological map of India, state‑specific profiles, and an AI‑powered chat playground.

---

## Tech Stack
- **Build tool:** Vite (vanilla ESM, no framework) 
- **Language:** HTML, JavaScript (ES2022), CSS (vanilla) 
- **Routing:** Hash‑based router in `main.js`
- **Design system:** CSS custom properties, glass‑morphism, gradient accents, Google **Inter** font, micro‑animations via `IntersectionObserver`
- **Data:** Static JSON‑like structure in `data/states.js`

---

## Design System & Visual Aesthetics
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-gold` | `hsl(45, 90%, 55%)` | Primary accent colour (buttons, links) |
| `--bg-glass` | `rgba(255,255,255,0.12) backdrop-filter: blur(12px)` | Glass‑morphism panels |
| `--bg-gradient` | `linear-gradient(135deg, hsl(210,30%,12%), hsl(260,30%,18%))` | Page background |
| `--font-primary` | `"Inter", system-ui, sans-serif` | Global typography |
| `--radius` | `12px` | Rounded corners for cards and modals |

**Key visual patterns**
- **Glassmorphic cards** with subtle shadows and backdrop blur.
- **Gradient hero sections** using the dark‑mode palette.
- **Micro‑animations**: elements with class `.animate-on-scroll` fade‑in & slide‑up when entering the viewport (handled by an `IntersectionObserver` in `main.js`).
- **Hover effects**: smooth scale and colour transitions on interactive tiles.

---

## Project Structure
```
├─ index.html                # Entry point – loads Vite bundle & global CSS
├─ style.css                 # Core design tokens, keyframes, utilities
├─ vite.config.js            # Vite config (ESM, dev server)
├─ package.json & lockfile
├─ data/
│   └─ states.js            # Static data for 36 states/UTs & DD chapters
├─ pages/
│   ├─ home.js              # Landing page – overview & navigation grid
│   ├─ due-diligence.js     # Chapter‑wise due‑diligence explorer
│   ├─ india-map.js         # Interactive topological map of India
│   ├─ state-profile.js     # Dynamic page for a selected state/UT
│   ├─ demo.js              # AI chat playground (simulated responses)
│   ├─ platform.js          # Platform capabilities & architecture
│   ├─ solutions.js         # Product solutions overview
│   ├─ security.js          # Data‑residency & DPDP‑2023 compliance details
│   └─ about.js             # About Euclid & team information
├─ main.js                   # Hash‑router, global event manager, lazy loading
└─ README.md                 # **This file** – project documentation
```

### Page‑by‑Page Breakdown
#### `pages/home.js`
- Renders the hero section with a gradient background.
- Displays a navigation grid of cards linking to each major section.
- Uses glass‑morphic cards (`.card`) with hover scale & accent colour.

#### `pages/due-diligence.js`
- Presents 12 due‑diligence chapters as collapsible panels.
- Each chapter loads its content lazily when opened.
- Utilises smooth height transition and a subtle shadow to convey depth.

#### `pages/india-map.js`
- SVG‑based topological map of India with each state/UT as a clickable region.
- Hover tooltip shows state name & quick stats.
- Clicking a state navigates to its profile via router (`#/state/<code>`).

#### `pages/state-profile.js`
- Dynamically imports data for the selected state from `data/states.js`.
- Shows a glass card with state‑specific due‑diligence checklist, key metrics, and a link to the map.
- Includes animated counters for population, GDP, etc.

#### `pages/demo.js`
- Simple AI‑assistant UI with a text input and message pane.
- Simulated response flow demonstrates how a real LLM could be integrated.
- Uses CSS animations for message fade‑in/out.

#### `pages/platform.js`
- Describes platform architecture, technology stack, and security model.
- Contains a responsive two‑column layout with icons and explanatory text.

#### `pages/solutions.js`
- Grid of product solution cards (Legal, Compliance, Analytics).
- Each card links to a placeholder detailed page (future work).

#### `pages/security.js`
- Highlights compliance with India’s **DPDP Act 2023**.
- Uses a glass‑morphic warning panel to emphasize data‑residency.

#### `pages/about.js`
- Team bios, mission statement, and contact information.
- Includes a subtle background animation of flowing gradients.

---

## Routing (Implemented in `main.js`)
- Hash‑based routes (`#/home`, `#/due-diligence`, `#/india-map`, `#/state/:code`, etc.).
- Lazy‑loads page modules via dynamic `import()` to keep the initial bundle light.
- Global navigation component updates the active link styling.

---

## Development & Build
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5174)
npm run dev

# Build for production
npm run build
```
The build outputs to `dist/` and can be deployed to any static‑host.

---

## Deployment Options
- **GitHub Pages** – `npm run build && npx gh-pages -d dist`
- **Netlify / Vercel** – point the site folder to `dist/`.
- **Custom server** – serve `dist/` with any static file server (NGINX, Apache, etc.).

---

## License
MIT © 2026 Parth Shah (parths301).
```

---

*This README was generated to document the visual design language, page architecture, and development workflow of the Euclid platform.*
