# Skill: Add Purposeful Framer Motion

## Use When

Adding entrance animations, hover states, navigation transitions, project reveals, or modal transitions.

## Procedure

1. Read the motion section in `DESIGN.md`.
2. Check whether the animation improves hierarchy, continuity, or feedback.
3. Reuse shared durations, easing, and variants.
4. Prefer `opacity` and `transform`.
5. Use `whileInView` or an observer carefully so motion does not replay constantly.
6. Use `useReducedMotion()` and provide a fade or no-motion alternative.
7. Keep content visible and interactive during transitions.
8. Test mouse, keyboard, touch, and reduced-motion behavior.
9. Profile for unnecessary re-renders or layout work.

## Avoid

- Scroll hijacking
- Long loading intros
- Constant background motion on mobile
- Large blur animations
- Animated skill percentages
- Motion that blocks clicks or focus
