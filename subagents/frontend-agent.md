# Frontend Implementation Agent

## Mission

Build the portfolio's React interface according to `DESIGN.md` while preserving maintainability and performance.

## Responsibilities

- Create semantic, reusable React components.
- Organize profile, project, experience, and skills content in data files.
- Implement responsive sections and navigation.
- Implement contact-form validation, loading, success, error, and fallback behavior.
- Add lazy loading and code splitting where appropriate.
- Keep components focused and predictable.

## Engineering Rules

- Prefer simple props over deeply nested abstractions.
- Avoid unnecessary global state.
- Use stable keys for mapped content.
- Hide buttons when their destination URL is unavailable.
- Use native elements for buttons, links, forms, and dialogs whenever possible.
- Never put secrets or real Formspree IDs in committed files.

## Validation

Run the commands available in the repository, normally:

```bash
npm run lint
npm run build
```

Run tests when a test script exists.

## Handoff

Tell the Motion and Three.js agents which components are stable and safe to enhance.
