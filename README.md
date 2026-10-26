# AI and Digital Innovation

Haileybury pupil course: 59 AEP lessons, 40 Removes lessons and a 20-lesson Passport selected entirely from Removes.

- [Creative evidence, Passport selection and current design](review/evidence-and-design.html)
- [Course review and improvement priorities](review/course-review.html)
- [Revised teaching pathway](revised.html) — 37 lessons and project sessions from the supplied teaching folder, with separate progress and a local work export.
- [Drive reconciliation](review/drive-reconciliation.html)
- [Three design trials](design-trials.html)
- Content checks: `node tests/course-content.cjs` and `node tests/revised-content.cjs`
- Rebuild the portable Passport: `node tools/build-fluency-standalone.mjs`

`js/learning-updates.js` applies reviewed corrections after the authored decks load. Keep lesson IDs and slide positions stable to preserve existing notes and progress. Update cache versions in `sw.js` when deploying HTML/CSS or JavaScript changes.

Serve a copy of the site (excluding `.git`) on localhost for browser tests. Review evidence is in `review/`. External videos require internet access; offline support requires a successful initial cache installation.

Every authored lesson has a creative evidence brief in `js/evidence-tasks.js`. `js/learning-evidence.js` appends it without shifting existing slide indices and stores work by lesson ID. Removes and Passport share evidence; Passport completion uses versioned storage. Run `node tests/learning-evidence.cjs` for curriculum, storage and export regression checks.

Browser regression: install Playwright in your test environment, serve a metadata-free copy of the site, then run `node tests/studio-browser.cjs`. Optional `COURSE_URL`, `CHROMIUM_PATH`, `PLAYWRIGHT_MODULE` and `ARTIFACT_DIR` configure the preview, browser and screenshot destination. The script checks responsive layout, Passport rendering, progress migration, evidence persistence/export, portfolio isolation, offline reading and the standalone export.

News rotation: `node scripts/update-news.mjs` fetches 11 public feeds weekly, selects up to 12 recent stories with publisher/maker limits, and adds discussion prompts. Run `node tests/news.mjs` for feed parsing and selection checks. The source guide is in `review/news-sources.html`.
