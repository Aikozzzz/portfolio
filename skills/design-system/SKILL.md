# Skill: Build and Maintain the Portfolio Design System

## Use When

- Creating the initial visual foundation
- Refactoring inconsistent Tailwind classes
- Adding a new section or component family

## Procedure

1. Read `DESIGN.md`.
2. Inspect existing global CSS and Tailwind configuration.
3. Identify repeated values for color, spacing, radii, typography, and shadow.
4. Define a small token set using CSS custom properties or Tailwind theme extensions.
5. Build reusable primitives such as `Container`, `SectionHeading`, `Button`, and `Card`.
6. Replace duplicated styling only where the change is safe and reviewable.
7. Check contrast, focus states, and mobile behavior.
8. Run the build and lint commands.

## Output Standard

- Tokens have clear semantic names.
- Components support normal, hover, focus-visible, disabled, and loading states where relevant.
- Decorative effects do not reduce text contrast.
- The implementation matches the “Midnight Aurora” direction without overusing gradients.
