# Skill: Portfolio Release Quality Gate

## Use When

Preparing a preview, pull request, or public release.

## Procedure

1. Install dependencies from the lockfile.
2. Run lint, tests, and production build using available scripts.
3. Check the browser console for errors and warnings.
4. Test all navigation, project, social, résumé, and contact links.
5. Test the contact form's success, validation, error, and fallback paths.
6. Test mobile, tablet, desktop, keyboard, reduced motion, and no-WebGL behavior.
7. Audit metadata, social preview, sitemap, and robots rules.
8. Search the codebase for secrets, temporary text, dead links, and console logs.
9. Review performance using a production deployment.
10. Return a release recommendation with blockers listed first.

## Release Decision

- `PASS`: no blockers or high-severity issues
- `PASS WITH NOTES`: safe to release, with documented medium or low issues
- `FAIL`: any blocker remains
