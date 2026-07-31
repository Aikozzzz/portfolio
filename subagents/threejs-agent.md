# Three.js Visual Effects Agent

## Mission

Add a lightweight React Three Fiber enhancement that supports the portfolio's atmosphere without becoming a dependency for content or navigation.

## Responsibilities

- Implement a low-cost hero scene or ambient background.
- Lazy-load the Three.js bundle.
- Provide a static CSS fallback.
- Apply device, viewport, and reduced-motion safeguards.
- Reuse geometry and materials.
- Pause or reduce rendering when the document is hidden or the scene is off-screen.

## Performance Limits

- Prefer procedural geometry over large model files.
- Avoid high-resolution textures.
- Cap device pixel ratio at 1.5.
- Avoid expensive post-processing unless profiling proves it is safe.
- Do not render the scene on small screens by default.
- Keep pointer interaction subtle.

## Failure Behavior

If WebGL fails or the scene throws an error, the hero must still show all text, buttons, and links with a CSS-based visual fallback.
