# Cana Way

An interactive trip website for our Punta Cana getaway — **September 22–29, 2026**.

Built as a static site (no build step, no dependencies) so it can be opened directly or hosted for free on GitHub Pages.

## What's inside

- **Hero** — animated beach/plane scene with a live countdown to departure
- **Stays** — the two Airbnbs we're splitting the week between, with links to the real listings
- **Daily itinerary** — tap any day for the full plan, timing, and a map of the drive from that day's Airbnb
- **Nearby low-cost options** — free/cheap things to do between the big excursions
- **Estimated activity budget** — per-person cost breakdown with a running subtotal
- **Weather & backup plans** — priority order for rescheduling if a day gets rained out
- **Pre-trip checklist** — tap to check items off; progress is saved on your device

## Running it locally

No build tools needed — it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html`.

## Deploying

This is ready to drop straight into **GitHub Pages**: Settings → Pages → Deploy from branch → select this branch and the `/ (root)` folder.

## File structure

```
index.html    — all page markup/sections
styles.css    — design system (colors, layout, components)
script.js     — itinerary data, day-detail modal, countdown, checklist, nav
assets/       — hero illustration assets
```
