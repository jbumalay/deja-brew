# Deja Brew

A fictional specialty coffee concept landing page designed as a polished portfolio project built with React, TypeScript, and Vite.

> Deja Brew is a concept project for portfolio and brand storytelling. It does not represent an actual café, reservation flow, or real business operation.

## Overview

Deja Brew is a design-forward coffee brand concept that explores how a familiar neighborhood café can feel warm, memorable, and quietly premium. The experience blends editorial storytelling, restrained motion, and carefully composed product sections to evoke the ritual of daily coffee without relying on a real booking or commerce backend.

This project was built to showcase:

- a refined hospitality-inspired brand identity
- clean, editorial visual composition across a landing-page experience
- strong storytelling through product, place, and atmosphere
- responsive, accessible UI patterns in a multi-section layout
- a portfolio-ready front-end concept without business logic complexity

## Project goals

- Create a café brand that feels familiar, tactile, and premium
- Translate mood and ritual into a cohesive front-end experience
- Present signature drinks, brand story, and place details with clear hierarchy
- Build a smooth, responsive experience across desktop and mobile layouts
- Keep the interface polished, accessible, and approachable for portfolio review

## Features

- Hero section with atmospheric messaging and clear calls to action
- Signature menu highlighting specialty drinks and descriptions
- Brand story and manifesto sections that establish the café’s perspective
- Café experience collage showcasing the sensory identity of the space
- Location and neighborhood details for a grounded sense of place
- Newsletter signup to complete the landing-page flow
- Responsive layout, subtle motion reveal, and consistent component structure

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting started

```bash
npm install
npm run dev
```

The app runs on `http://localhost:8443` by default.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the built app locally |
| `npm run format` | Format the project with `oxfmt` |

## Project structure

```text
.
├── LICENSE
├── README.md
├── README-FORMAT.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.svg
├── screenshots/
│   ├── 01-hero.png
│   ├── 02-menu.png
│   ├── 03-story.png
│   ├── 04-manifesto.png
│   ├── 05-experience.png
│   ├── 06-location.png
│   ├── 07-newsletter.png
│   ├── 08-footer.png
│   ├── 09-full-page.png
│   └── 10-mobile-hero.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── CafeExperience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── Manifesto.tsx
│   │   ├── MemoryStamp.tsx
│   │   ├── Navbar.tsx
│   │   ├── Newsletter.tsx
│   │   ├── SignatureMenu.tsx
│   │   ├── Story.tsx
│   │   └── MapIllustration.tsx
│   └── data/
│       ├── highlights.ts
│       ├── menu.ts
│       ├── nav.ts
│       ├── photos.ts
│       └── place.ts
```

## Design direction

The visual language is intentionally warm and understated:

- earthy neutrals and soft coffee-inspired tones
- layered typography and calm editorial rhythm
- strong information hierarchy with generous whitespace
- tactile storytelling that feels intimate and lived-in
- minimal but meaningful interaction to support the brand atmosphere

## Accessibility notes

- semantic landmark structure and clear reading order
- visible keyboard focus styling and interactive affordances
- accessible contrast and readable text sizing
- responsive layouts designed for varied screen sizes
- reduced-motion support for reveal-based transitions

## License

[MIT](./LICENSE) © 2026 Jerome Andrei Abumalay

## Notes

Deja Brew is best understood as a polished front-end concept and brand exercise. It demonstrates how a boutique café identity can be translated into a responsive, immersive landing page while emphasizing atmosphere, clarity, and narrative design in a portfolio-ready format.