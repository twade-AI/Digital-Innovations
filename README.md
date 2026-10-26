# AI and Digital Innovation

Haileybury pupil course: 59 AEP lessons, 40 Removes lessons and a curated 24-lesson Passport pathway.

- [Course review and improvement priorities](review/course-review.html)
- [Revised teaching pathway](revised.html) — 37 lessons and project sessions from the supplied teaching folder, with separate progress and a local work export.
- [Drive reconciliation](review/drive-reconciliation.html)
- [Three design trials](design-trials.html)
- Content checks: `node tests/course-content.cjs` and `node tests/revised-content.cjs`
- Rebuild the portable Passport: `node tools/build-fluency-standalone.mjs`

`js/learning-updates.js` applies reviewed corrections after the authored decks load. Keep lesson IDs and slide positions stable to preserve existing notes and progress. Update cache versions in `sw.js` when deploying HTML/CSS or JavaScript changes.

Serve a copy of the site (excluding `.git`) on localhost for browser tests. Review evidence is in `review/`. External videos require internet access; offline support requires a successful initial cache installation.
