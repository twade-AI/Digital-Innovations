# Lesson 14 — Surveillance and Facial Recognition: image briefs

A per-slide image brief for **Lesson 14**. Each entry tells you what was
chosen, where it came from, and what you'll need to verify before this
goes anywhere a parent might see it.

The chosen source is **Wikimedia Commons** because (a) every image is
license-tagged (CC-0, CC-BY, CC-BY-SA, public domain) so attribution is
unambiguous, and (b) there are no API keys or auth, so a teacher (or
admin) can add or swap images without provisioning credentials.

## Status — what's already wired in (Lesson 14)

The slide data (`js/slides-u3u4.js`, key `14:`) now sets `image:` on the
three content-heavy slides below. Each `image` uses Wikimedia's
`Special:FilePath/<File>` redirect for the URL, which auto-resolves to
the current revision of the file — so even when files are reuploaded,
the slide keeps working without a code change.

> ⚠ **Verify before going live.** This branch was developed in a
> sandbox without egress to Wikimedia, so the file pages were
> identified via web search but the per-file licence and author lines
> were not fetched. Before merging:
>
> 1. Click the link in each "View on Wikimedia Commons" row below.
> 2. Confirm the image actually fits the slide and is on a free
>    licence (CC-0 / CC-BY / CC-BY-SA / public domain).
> 3. Replace the placeholder `credit:` value (currently
>    `'Wikimedia Commons — File:<name>'`) with the file's named author
>    plus licence, e.g. `'Photo: Carl Berkeley, CC BY-SA 2.0'`, and add
>    a `license:` field.
> 4. If a file no longer fits, swap the URL to a different
>    `Special:FilePath/<File:Name>` from the same Commons category.

## Slide 1 — Hook: "Surveillance and Facial Recognition"

| field        | value |
|--------------|-------|
| **File**     | `File:CCTV CC London Pimlico.JPG` |
| **View on Wikimedia Commons** | https://commons.wikimedia.org/wiki/File:CCTV_CC_London_Pimlico.JPG |
| **Why this image** | A real UK CCTV tower (Pimlico, London) — anchors the body's UK / London / ICO references and the broader "watched in public" theme. |
| **Alt text in slide** | `A CCTV camera tower mounted on the street near Pimlico tube station, London — part of the city's congestion charging surveillance infrastructure.` |
| **Verify** | Click through, confirm CC licence and capture the named author for `credit:` |

## Slide 2 — Concept: "How Facial Recognition Works"

| field        | value |
|--------------|-------|
| **File**     | `File:Face detection.jpg` |
| **View on Wikimedia Commons** | https://commons.wikimedia.org/wiki/File:Face_detection.jpg |
| **Why this image** | A face-detection demo with bounding boxes — visualises the *Detection* step in the bullets (the first stage of the pipeline). If you'd prefer a landmark-mesh diagram instead, swap to a file from `Category:Facial_recognition_system`. |
| **Alt text in slide** | `A face-detection algorithm identifying faces in a photograph by drawing bounding boxes around each detected face.` |
| **Verify** | Confirm CC licence; confirm the photo doesn't contain identifiable people you'd be uncomfortable showing pupils — if it does, swap to a synthetic / illustrated example from `Category:Face_recognition`. |

## Slide 3 — Concept: "The Surveillance Debate"

| field        | value |
|--------------|-------|
| **File**     | `File:CCTV Surveillance Notice.svg` |
| **View on Wikimedia Commons** | https://commons.wikimedia.org/wiki/File:CCTV_Surveillance_Notice.svg |
| **Why this image** | A public CCTV warning sign — visually anchors the "function creep" / "boundary between observed and unobserved" thread. Less repetitive than reusing the slide-1 photo. |
| **Alt text in slide** | `A standard "CCTV in operation" public surveillance notice — the visible signage that marks the boundary between observed and unobserved space.` |
| **Verify** | Confirm CC licence (most warning-sign SVGs on Commons are CC BY-SA 3.0 or 4.0). Capture the licence string for `license:`. |

## Slides 4–5 (activity, discussion) — no image

The activity ("Surveillance Policy Design") and discussion ("Drawing the
Line") are pupil-led. Adding an image would distract from the prompts —
leave them text-only.

---

## How to wire an image into a slide

The renderer already supports an optional `image` field on any slide.
Once you've picked a Wikimedia image:

1. From the file's page on Commons, click **More details** → copy the
   **direct file URL** (it will be on `upload.wikimedia.org/...`). For a
   stable URL that auto-resolves to the current revision, use
   `https://commons.wikimedia.org/wiki/Special:FilePath/<File:Name>`.
2. Note the **author** and **license** from the file's "Licensing"
   section (e.g. `CC-BY-SA 4.0` and the author's name).
3. Open `js/slides-u3u4.js`, find the lesson 14 block (key `14:`), and
   add an `image:` field to the relevant slide:

```js
{
  type: 'hook',
  title: 'Surveillance and Facial Recognition',
  body: '…',
  image: {
    url:       'https://upload.wikimedia.org/wikipedia/commons/…/Surveillance_camera.jpg',
    alt:       'A CCTV surveillance camera mounted on a pole above a city street.',
    credit:    'Photo: Jane Doe',
    license:   'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Surveillance_camera.jpg',
    focus:     'center'      // optional — CSS object-position, e.g. 'top' or 'left center'
  }
}
```

Only `url` is required. Any field can be omitted — the renderer will
silently skip the credit caption if `credit` and `license` are both
empty, and gracefully render nothing at all if `url` is missing or not
http(s).

## Once you're happy with these three

The same brief shape scales to the other 43 lessons. Best candidates
visually (high concept-to-image fit, license-safe imagery available):

- **Lesson 1** — Your AI Footprint (data centre photo)
- **Lesson 6** — The Data Harvest (server room / cookies UI)
- **Lesson 13** — Deepfakes and Disinformation (forensic comparison stills)
- **Lesson 15** — The Environmental Cost (cooling tower, energy infra)
- **Lesson 16** — Global Regulation (EU Parliament, US Capitol)
- **Lesson 22** — Defining the Problem Statement (whiteboard / sticky-note)

Lessons that probably stay text-only: anything labelled "Deep Work",
"Viva Voce", or "Drafting the Document" — these are pupil-task slides
where an image distracts.
