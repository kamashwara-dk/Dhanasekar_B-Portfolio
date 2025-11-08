# Dhanasekar Portfolio (Next.js + Tailwind, animated)

## Install
1. Extract this folder.
2. In VS Code terminal, run:
```
npm install
```
3. Start dev server:
```
npm run dev
```
Open http://localhost:3000

This project avoids `npx` scripts. Tailwind/postcss/ts configs are included already.

### Notes
- Layout uses a consistent `.container` (max-w-7xl) and grid to avoid the earlier uneven hero.
- Animations are pure Tailwind/CSS: `fade-in`, `slide-up`, `float`, plus reveal-on-scroll via IntersectionObserver (no extra libs).
