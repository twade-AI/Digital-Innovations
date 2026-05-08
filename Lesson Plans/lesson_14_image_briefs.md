# Lesson 14 — Surveillance and Facial Recognition: image briefs

A per-slide image brief for **Lesson 14**. Each entry tells you exactly
what to look for, where to look, and what to paste back into the slide
data once you've picked an image. The slide engine already supports the
`slide.image` field — see "How to wire an image into a slide" at the
bottom — so this brief is the only manual step.

The recommended source is **Wikimedia Commons** because (a) every image
is license-tagged (CC-0, CC-BY, CC-BY-SA, public domain) so attribution
is unambiguous, and (b) there are no API keys or auth, so a teacher (or
admin) can add or swap images without provisioning credentials.

## Slide 1 — Hook: "Surveillance and Facial Recognition"

| field        | value |
|--------------|-------|
| **Search**   | `CCTV camera city street`, `surveillance camera London`, `facial recognition camera` |
| **Wikimedia categories** | `Category:Closed-circuit_television_cameras`, `Category:Surveillance_cameras_in_London` |
| **Concept** | A street-level CCTV camera, ideally one that visually conveys "watched in public" — bonus if it's UK / London context to match the Robert Williams + ICO + North Ayrshire stories in the body. |
| **Mood** | Slightly cold, urban, observational. Avoid stock-photo crowds smiling at cameras. |
| **Alt text** | `A CCTV surveillance camera mounted on a pole above a city street.` |
| **Avoid** | Any identifiable face being scanned (privacy + the lesson's whole point), or a film-still still containing a celebrity. |

## Slide 2 — Concept: "How Facial Recognition Works"

| field        | value |
|--------------|-------|
| **Search**   | `face mesh landmark detection`, `facial landmarks computer vision`, `face recognition diagram`, `facial geometry biometrics` |
| **Wikimedia categories** | `Category:Face_recognition`, `Category:Facial_recognition_systems` |
| **Concept** | A diagram showing facial landmark detection (the dot-mesh on a face) or a faceprint visualisation. Helps pupils picture the technical pipeline described in the bullets — detection → alignment → feature extraction → matching. |
| **Mood** | Technical, instructive, schematic. A good diagram > a stylised stock illustration. |
| **Alt text** | `Diagram showing facial landmarks detected on a human face — points marking eyes, nose, mouth and jaw used to build a faceprint.` |
| **Avoid** | An image of a real identifiable individual having their face scanned — use a diagram, a public-domain demonstration, or an image from an academic paper that's CC-licensed. |

## Slide 3 — Concept: "The Surveillance Debate"

| field        | value |
|--------------|-------|
| **Search**   | `Kings Cross London`, `mass surveillance protest`, `liberty civil liberties`, `Big Brother Watch`, `live facial recognition van` |
| **Wikimedia categories** | `Category:Mass_surveillance`, `Category:Surveillance_in_the_United_Kingdom`, `Category:Privacy_protests` |
| **Concept** | Either (a) a public space with visible surveillance infrastructure (Kings Cross facade, a UK police live-FR van) to ground the Clearview / Met / South Wales examples, or (b) a protest / civil-liberty image to anchor the "for vs against" framing. |
| **Mood** | Documentary, real-world, tension-creating. |
| **Alt text** | (depending on choice) `A police facial-recognition van deployed at a UK street event, with a CCTV camera mounted on its roof.` *or* `Protesters holding "stop facial recognition" signs at a London demonstration.` |
| **Avoid** | Anything from a propaganda or far-right source; anything depicting the Xinjiang context unless from a verified news/CC source — the topic is sensitive and easy to misrepresent. |

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
