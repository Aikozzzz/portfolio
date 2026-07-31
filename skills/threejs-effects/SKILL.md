# Skill: Add Lightweight Three.js Effects

## Use When

Creating or improving the hero's ambient 3D visual.

## Procedure

1. Confirm the effect is decorative and nonessential.
2. Create a static CSS fallback first.
3. Put React Three Fiber code in a separate lazy-loaded chunk.
4. Render on large screens only unless real-device testing supports more.
5. Respect reduced-motion preferences.
6. Cap DPR at 1.5 and avoid unnecessary antialiasing.
7. Reuse geometry and material instances.
8. Pause or reduce work when hidden or off-screen.
9. Test WebGL failure behavior.
10. Compare production performance before and after the effect.

## Acceptance Criteria

- All hero content remains accessible when the canvas is removed.
- The effect does not interfere with pointer or keyboard interaction.
- No large model or texture is added without documented justification.
- The effect is disabled or simplified for constrained devices.
