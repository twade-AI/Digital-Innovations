# AI Fluency Track — standalone export

`ai-fluency-track.html` is the complete AI Fluency Track in **one self-contained
file**. Upload it anywhere as a new page (LMS, intranet, any web host) or open it
straight from disk — it needs no other files and no internet connection
(except for the embedded YouTube videos).

## What's inside

Everything the track needs, gathered from across the site and inlined:

| Bundled content | Source file(s) |
|---|---|
| Page markup, track UI, lesson viewer, certificate | `fluency.html` |
| All styling (site, lesson slides, labs, wow effects, Haileybury brand) | `css/style.css`, `css/lesson.css`, `css/labs.css`, `css/wow.css`, `css/brand.css` |
| Interactive lab widgets | `js/labs.js` |
| Lesson metadata for the 24 lessons | `js/data.js` (`UNITS`, filtered) |
| All 24 slide decks | `js/slides-u1u2.js`, `js/slides-u3u4.js`, `js/slides-u5u6.js`, `js/slides-critical.js`, `js/slides-advanced.js`, `js/slides-gcse.js` (filtered) |
| SVG slide diagrams | `js/visuals.js` (filtered) |
| Slide helpers (fullscreen, escaping, YouTube embeds) | `js/slide-utils.js` |
| Read-aloud (text-to-speech) widget | `js/tts.js` |
| Haileybury logo + favicon | `assets/brand/logo/haileybury-magenta.png`, `icon.svg` (base64) |

The 24 lessons (ids from `FL_TRACK` in `fluency.html`):
1, 2, 51, 5, 8, 9, 12, 52, 53, 45, 46, 47, 13, 15, 54, 55, 49, 48, 41, 44,
136, 138, 139, 140 (the last four reused from the Removes deck, `js/slides-gcse.js`).

Working features: lesson track with sections and progress, full slide viewer
(keyboard, touch swipe, fullscreen, dots), quizzes with answer gating, per-slide
pupil notes, dark/light theme, read-aloud, completion certificate with name +
print. Progress is saved in the browser's localStorage under the same keys as
the main site.

## What was deliberately left out

These only make sense on the full site, so the export removes them:

- **Back / Portfolio / "Browse the full course" links** — they point at
  `index.html` and `portfolio.html`, which won't exist on a new host.
- **"Copy share link" button** — it builds a `verify.html` URL. The printable
  certificate is kept.
- **PWA bits** (`manifest.json`, `sw.js` service-worker registration) — the file
  is already self-contained, so offline caching isn't needed.
- **`js/quiz-bank.js`** — loaded by the live page but never used by the fluency
  engine (quizzes live inside the slide decks).

## Regenerating

After editing any lesson content or `fluency.html`:

```
node tools/build-fluency-standalone.mjs
```

The build reads the lesson list from `FL_TRACK`, so adding or reordering
lessons in `fluency.html` is picked up automatically. Every transform is
anchored to exact strings in the page and fails loudly if the page changes
shape — fix the anchor in the build script and re-run.
