# AI and Digital Innovation

Four Haileybury AI courses for pupils, parents and carers: Removes (40 lessons), AEP (59 lessons), AI Digital Passport (20 lessons selected entirely from Removes) and AI at Home (15 parent lessons). The Climate Innovation and Digital Productivity projects remain additional pathways.

[AI at Home: A Parent’s Guide](parents.html) adds a separate 15-lesson parent pathway, with four Gemini/Gemini Notebook workshops, complete written teaching and supplied-example alternatives. No video is required. Haileybury’s approach follows the **November 2026 Parent Guide**, including the three assessment levels; the older policy draft is not the parent-course authority. Current task instructions and qualification requirements take precedence.

Parent content is authored in `js/parent-foundations.js`, `js/parent-practicals.js` and `js/parent-decisions.js`, assembled by `js/parent-curriculum.js`. IDs 301–315 keep parent progress separate from pupil work. There are no written assignments: each lesson has on-screen activities and three final choice, selection or ordering checks. `js/parent-interactions.js` validates saved answers against the authored keys under `di_parent_checks_v1_301`–`315` (revision `parent-v2`). Progress uses `di_parent_v1`. Removes and parents share `js/course-player.js`; parent completion and presentation are configured in `js/parent-player.js`. [Work backup](work.html) restores interactive answers and progress, with conflict handling. Gemini practice uses a separate tab or split-screen window, with copyable fictional prompts and complete supplied-example alternatives.

Parent lesson voice: explain the situation, teach the idea and give a clear next step. Use direct, connected prose and concrete examples. Cut repeated procedural reassurance, generic guarantee disclaimers and hedged instructions. Keep qualifications where they change a decision: source uncertainty, account availability, school permission and agreed access support. Preserve the teaching detail; do not replace explanations with slogans or turn uncertainty into certainty.

The personalised Haileybury certificate uses `js/parent-certificate.js`, original brand artwork and Calluna Sans fonts. It generates a landscape A4 PDF locally after all 15 specific lessons and their interactive checks are complete, rechecking eligibility before download. This is a completion record, not a tamper-proof or accredited qualification. Names stay in the browser; unsupported font characters produce a clear message without changing the name.

Run `node tests/parent-content.cjs`, `node tests/parent-browser.cjs` and `node tests/parent-certificate.cjs` after serving the site locally. Browser settings are described below; `AXE_PATH` enables automated accessibility checks. Regenerate the catalog with `node tools/build-course-catalog.cjs` and the standalone Passport with `node tools/build-fluency-standalone.mjs` after shared-asset edits. [Full review and improvements](review/parent-course-review.html), [additional sources](review/parent-content-sources.html) and [optional future recording suggestions](review/parent-recording-plan.html) are separate from the learner journey. Timings are estimates; actual signed-in Google account routes and parent usability still need a human pilot before claims about learning effectiveness.

- [AEP content and fullscreen refresh](review/aep-refresh.html) — 59 lessons, current reference material, creative evidence and an AEP portfolio.
- [Creative evidence, Passport selection and current design](review/evidence-and-design.html)
- [Course review and improvement priorities](review/course-review.html)
- [Removes consolidation](review/removes-consolidation.html) — the newer teaching replaces 19 existing lesson slots; Removes stays at 40 and Passport at 20.
- [Project pathways](revised.html) — the existing eight-session Climate Innovation and six-session Digital Literacy projects, separate from Removes.
- [Drive reconciliation](review/drive-reconciliation.html)
- [Three design trials](design-trials.html)
- Content checks: `node tests/course-content.cjs` and `node tests/revised-content.cjs` and `node tests/removes-consolidation.cjs`
- Rebuild the portable Passport: `node tools/build-fluency-standalone.mjs`

`js/learning-updates.js` applies reviewed corrections after the authored decks load. Keep lesson IDs stable. Replaced decks carry a revision so their new slide notes and exit responses cannot overwrite earlier versions; the portfolio labels earlier notes. Update cache versions in `sw.js` when deploying HTML/CSS or JavaScript changes.

Serve a copy of the site (excluding `.git`) on localhost for browser tests. Review evidence is in `review/`. External videos require internet access; offline support requires a successful initial cache installation.

Every authored pupil lesson has a creative evidence brief in `js/evidence-tasks.js`. `js/learning-evidence.js` appends it without shifting existing slide indices and stores work by lesson ID. Removes and Passport share evidence; Passport completion uses versioned storage. Run `node tests/learning-evidence.cjs` for curriculum, storage and export regression checks.

Browser regression: install Playwright in your test environment, serve a metadata-free copy of the site, then run `node tests/studio-browser.cjs`. Optional `COURSE_URL`, `CHROMIUM_PATH`, `PLAYWRIGHT_MODULE` and `ARTIFACT_DIR` configure the preview, browser and screenshot destination. The script checks responsive layout, Passport rendering, progress migration, evidence persistence/export, portfolio isolation, offline reading and the standalone export.

News rotation: `node scripts/update-news.mjs` fetches 11 public feeds daily at 06:17 UTC via GitHub Actions, selects up to 12 recent stories with publisher/maker limits, and adds discussion prompts. Run `node tests/news.mjs` for feed parsing and selection checks. The workflow explicitly requests a GitHub Pages rebuild after committing new headlines. The browser fetches published news before falling back to its offline copy; run `node tests/news-cache.cjs` to check this. The source guide is in `review/news-sources.html`.

Curriculum consolidation browser check: run `node tests/removes-browser.cjs` with the same preview/Playwright settings. It checks every slide in Removes, Passport and the two project pathways, saved-work revisions, legacy links, project progress migration and offline reading. Results: `review/removes-consolidation-validation.json`.

AEP uses 19 canonical Removes lessons plus 40 specialist lessons. `js/aep-curriculum.js` maps stable AEP slots to their shared content; `js/aep-shared-player.js` keeps AEP navigation and completion separate while sharing notes/evidence. Do not create duplicate decks for mapped lessons. `js/shared-content-review.js` applies corrections across all consumers. Earlier AEP work is retained in the portfolio.

AEP checks: `node tests/aep-content.cjs`, `node tests/aep-browser.cjs` and `node tests/aep-shared-browser.cjs` (same browser settings). They cover 344 specialist slides and 194 shared slides, source parity, responsive fullscreen, navigation, progress separation, saved-work migration, exports and offline deep links. Results and crossover mapping are in `review/aep-refresh.html`.

Learning quality follow-up: [changes, evidence and remaining human checks](review/learning-quality-update.html). `js/feedback-cases.js` supplies 94 authored rehearsal cases; `js/learning-feedback.js` stores first attempts and revisions under canonical lesson IDs. `js/project-source-packs.js` supplies the 14 project packs. These support self-review, not automatic grades.

Shared display/navigation lives in `js/site-experience.js` and `css/experience.css`. Rebuild course metadata after curriculum title changes with `node tools/build-course-catalog.cjs`, then rebuild the standalone Passport. `work.html` provides explicit local backup/restore with conflict preview; it does not replace account sync.

Follow-up checks: `node tests/learning-quality.cjs` and `node tests/experience-browser.cjs` (same browser settings). Run the existing curriculum and AEP/Removes browser suites after changing shared content. Accessibility receipts record the tested routes and incomplete manual checks; use [the pupil-trial guide](review/pupil-trial.html) before making outcome or conformance claims. News freshness is recorded in `AI_NEWS_STATUS`; a local fetch pass is not proof of scheduled publication.

Teaching clarity: [review and example](review/teaching-clarity.html). `js/teaching-notes.js` contains 94 authored purposes, core explanations and examples. `js/teaching-guidance.js` expands the existing decks without changing slide indices or storage revisions, clarifies selected task dependencies and supplies compact per-slide guidance. Load it after evidence data and before player initialisation. Rebuild the standalone Passport after edits. Checks: `node tests/teaching-guidance.cjs` and `node tests/teaching-browser.cjs` (same browser settings; optional `AXE_PATH` enables axe checks). Keep essential task/source material when revising instructions.
