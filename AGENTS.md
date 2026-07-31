# Portfolio Development Agents

## Purpose

This file defines how AI agents should collaborate when modernizing Kyaw Zin Hein's public portfolio. The goal is a polished, animated, accessible, and performant website built with React, Vite, Tailwind CSS, Framer Motion, React Three Fiber, and Three.js.

All agents must treat `DESIGN.md` as the source of truth for visual direction and product requirements.

---

## Global Rules

1. Preserve working features unless a change is required.
2. Use small, reviewable changes.
3. Do not add dependencies without a clear benefit.
4. Keep content separate from presentation when practical.
5. Never commit secrets or real environment values.
6. Respect `prefers-reduced-motion` in every animated component.
7. Keep the site usable without WebGL.
8. Use semantic HTML before adding ARIA.
9. Avoid unsupported claims, fake metrics, fake clients, or fake experience.
10. Do not expose private contact details or confidential project information.
11. Run the available lint, test, and build commands before declaring completion.
12. Update relevant documentation when architecture, scripts, environment variables, or content structures change.

---

## Recommended Work Order

1. `ui-ux-agent`
2. `content-seo-agent`
3. `frontend-agent`
4. `motion-agent`
5. `threejs-agent`
6. `accessibility-performance-agent`
7. `qa-review-agent`

Agents may work in parallel only when their file ownership does not overlap.

---

## File Ownership Guidance

| Area | Primary agent |
|---|---|
| Design tokens and layout specification | UI/UX Agent |
| Profile, project, and experience copy | Content & SEO Agent |
| React sections and shared components | Frontend Agent |
| Framer Motion variants and transitions | Motion Agent |
| React Three Fiber scene | Three.js Agent |
| Accessibility and performance fixes | Accessibility & Performance Agent |
| Final review, test plan, and regression checks | QA & Review Agent |

When two agents need to change the same file, the later agent should read the current implementation and make the smallest compatible change.

---

## Required Handoff Format

Every subagent must return:

```text
Summary
- What changed

Files changed
- path/to/file: reason

Validation
- Commands run and results

Risks or follow-up
- Anything unfinished, uncertain, or worth reviewing
```

Do not claim a command passed unless it was actually run.

---

## Shared Quality Gate

A feature is complete only when it:

- Works at mobile and desktop widths
- Is keyboard accessible
- Has visible focus states
- Supports reduced motion
- Does not depend on Three.js to expose important content
- Does not introduce console errors
- Does not break the production build
- Uses final or clearly marked placeholder content
