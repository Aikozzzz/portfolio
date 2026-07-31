# Modern Portfolio Development Pack

This pack extends the current React and Vite portfolio plan with a public-facing design specification, coordinated subagents, and reusable implementation skills.

## Contents

- `DESIGN.md` — complete product, visual, motion, accessibility, performance, SEO, and release specification
- `AGENTS.md` — orchestration rules and shared quality gate
- `subagents/` — focused agent roles for design, frontend, motion, Three.js, content, quality, and review
- `skills/` — repeatable workflows for common portfolio-development tasks

## Recommended Placement

Copy these files into the portfolio repository:

```text
portfolio/
├── DESIGN.md
├── AGENTS.md
├── subagents/
└── skills/
```

An agentic coding tool can read `AGENTS.md`, then delegate work using the files in `subagents/` and execute the procedures in `skills/`.

## First Implementation Task

Start with this instruction:

```text
Read README.md, DESIGN.md, and AGENTS.md. Audit the current portfolio against DESIGN.md. Implement Phase 1 only: design tokens, semantic layout, responsive navigation, hero, project data structure, and static project cards. Preserve the current contact behavior. Do not add new dependencies unless necessary. Run lint and build, then report changed files, validation results, and remaining work.
```
