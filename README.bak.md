# Kyaw Zin Hein Portfolio

Modern portfolio built with React + Vite, Tailwind CSS, Framer Motion, and subtle Three.js effects.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Three Fiber + Three.js

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env
```

Set your Formspree endpoint in `.env`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

3. Start development server:

```bash
npm run dev
```

4. Build production bundle:

```bash
npm run build
```

## Contact Form (Working Email Service)

The contact form sends submissions to Formspree using `fetch`.

- Create a form at Formspree
- Copy your endpoint URL
- Add it to `VITE_FORMSPREE_ENDPOINT` in `.env`

Fallback behavior:

- If `VITE_FORMSPREE_ENDPOINT` is missing, the form still works by opening a prefilled `mailto:` draft.
- If Formspree request fails, it automatically falls back to `mailto:`.

## Performance Notes

- Three.js scene is hidden on smaller screens (`lg` and below)
- Canvas DPR is capped (`[1, 1.5]`)
- Antialias is disabled for lower GPU cost
- Respects reduced-motion preferences by disabling the 3D scene

## Deploy

This project is deploy-ready for Vercel or Netlify.
