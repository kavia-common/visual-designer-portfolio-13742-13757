# Portfolio Frontend

This React app renders a modern, responsive one‑page portfolio using components converted from static assets.

## Structure

- src/components
  - Nav.jsx, Header.jsx, LogoBar.jsx, Skills.jsx, Gallery.jsx, Testimonials.jsx, Contact.jsx
- src/styles
  - tokens.css (global design tokens and utilities)
  - *.module.css (scoped component styles)
  - Section.module.css (shared section/card grid helpers)
- src/hooks
  - useSmoothScroll.js (anchor smooth scrolling)

## Features

- Accessible semantic markup
- Smooth scrolling for in‑page links
- Responsive layout matching Figma spec (701:1063)
- Contact form with placeholder submit handler (alert)
- Modular CSS modules with global tokens

## Run

- npm start
- npm test
- npm run build

## Customization

- Update global tokens in `src/styles/tokens.css`
- Tweak per‑component styles in corresponding `*.module.css`
- Replace placeholder images and social links with real assets/URLs
