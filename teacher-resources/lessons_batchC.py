#!/usr/bin/env python3
"""
Removes Course (Year 9) — Teacher Lesson Plans, Batch C.

Units 4 and 5 (lessons 119–129, 137). Same dict structure as
build_lesson_plans.py LESSONS (101–103). Content derived faithfully from
the live course slides in js/slides-gcse.js.
"""

LESSONS_BATCH = [
    # ===================================================================
    {
        "id": 119,
        "unit": "Unit 4: AI, Truth & Media",
        "ailit": "Engage with AI",
        "title": "Deepfakes & Synthetic Media",
        "big_idea": "Deepfakes are now cheap, fast and convincing — a believable "
                    "voice clone needs about 3 seconds of audio and a face swap a "
                    "single photo. They don't need to fool everyone; they just need "
                    "to cause enough doubt at the right moment, which is why "
                    "verifying the SOURCE beats trying to spot the fake by eye.",
        "objectives": [
            "Explain what a deepfake is and how face swaps, voice clones and text-to-video are made.",
            "Describe the main categories of harm — fraud, non-consensual imagery, political manipulation, the liar's dividend.",
            "Judge why source verification (lateral reading) is more reliable than visual 'spotting' or free detectors.",
            "Apply a 'check the source first' routine to a suspicious viral video.",
        ],
        "vocab": [
            ("Deepfake", "Synthetic media made with deep learning — coined on Reddit in 2017 from 'deep learning' + 'fake'."),
            ("Voice cloning", "Recreating a person's voice from 3–30 seconds of clean audio, then making it read any script."),
            ("GAN / diffusion model", "The generative AI methods that learn to swap or generate realistic faces and images."),
            ("Liar's dividend", "When the existence of deepfakes lets people dismiss real evidence as 'probably fake'."),
            ("Lateral reading", "Leaving the page and checking what credible outlets (BBC, Reuters) say about the claim."),
            ("C2PA standard", "A 'content passport' standard (Adobe, Google, Microsoft) embedding provenance in authentic media."),
            ("Online Safety Act 2023", "UK law making sharing non-consensual intimate deepfakes illegal, up to 2 years' imprisonment."),
        ],
        "resources": [
            ("Course slides — Lesson 119 'Deepfakes & Synthetic Media'", "Removes course, Unit 4"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: CNN — Hong Kong worker scammed in deepfake video call (Feb 2024)", "https://edition.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk/index.html"),
            ("Source: MIT Media Lab — Detect Fakes study (Groh et al., PNAS 2022)", "https://www.pnas.org/doi/10.1073/pnas.2110013119"),
            ("Source: UK Online Safety Act 2023", "https://www.legislation.gov.uk/ukpga/2023/50/contents"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the three hook cases: the January 2024 AI-cloned Biden robocall (a proposed $6M FCC fine); "
             "the Hong Kong finance worker who transferred £20M after a video call where every 'colleague', "
             "including the CFO, was synthetic; and the Slovakia 2023 audio fake released during the legal media "
             "silence 48 hours before the vote. Pose the callout: deepfakes don't need to be believed by everyone "
             "— just to cause enough doubt at the right moment. Take 3–4 reactions, don't resolve them yet."),
            ("Main teaching — What they are and the harm", "11 min",
             "Teach the two concept slides. How they're made: GAN/diffusion face swaps, voice clones from ~3 seconds "
             "of audio, Sora-style text-to-video, free and needing no coding. The quality curve: Groh et al. (PNAS "
             "2022, 15,000 people) found humans average just 66% accuracy at telling real from fake — barely better "
             "than a coin flip. Then the six harm categories: reputation, non-consensual intimate images (≈98% of "
             "deepfake video online, now illegal under the Online Safety Act 2023), political manipulation, fraud "
             "(Deloitte forecasts $40bn losses by 2027), legal evidence / the liar's dividend, and personal harassment."),
            ("Activity — Source-check a viral clip (Gemini)", "12 min",
             "Run the 'What Actually Helps?' sort. Students open Gemini and, in pairs, work the classify items: "
             "checking whether BBC/Reuters cover the claim, checking the posting account's age and history, and "
             "reverse-image/clip searching all HELP; studying blinking or a blurry hairline, trusting a free detector "
             "(65–85% accuracy), or sharing with a 'possibly fake' caption do NOT. Then ask Gemini to draft a "
             "5-step 'before I share a suspicious video' checklist, and students critique it against the lesson — "
             "does it lead with the source or with the pixels?"),
            ("Discussion — Trust, truth and democracy", "5 min",
             "Use the slide's own questions. Focus on the liar's dividend: is real evidence being dismissible as "
             "'probably fake' a worse threat than the fakes themselves — and who benefits from the doubt? Link to "
             "the 2024 election year, when dozens of countries saw election deepfakes."),
            ("Scenario — The viral video", "5 min",
             "Run 'The Viral Video': an 11pm clip of your local MP 'admitting' bribes, 400K views, friends urging you "
             "to share, but the source account is four days old. Vote on the three choices, then reveal outcomes — "
             "the responsible move is searching BBC/Reuters and waiting, which lets a fact-check surface."),
            ("Plenary — Exit ticket", "2 min",
             "'A convincing clip drops two days before an election from a day-old account. Name your single most "
             "reliable first step.' Target: lateral reading — check whether established outlets have verified it."),
        ],
        "discussion": [
            "The 'liar's dividend' means real evidence can now be dismissed as 'probably fake'. Is that a worse threat than the fakes themselves? Who benefits from the doubt — and who suffers?",
            "Dozens of countries saw election deepfakes during the 2024 votes. If free elections depend on voters being able to tell what's real, what would YOU want the UK to do before the next General Election? Who should enforce it?",
            "The Online Safety Act makes sharing non-consensual intimate deepfakes illegal with up to 2 years imprisonment. Should the same apply to political deepfakes? What about 'satire'? Where would you draw the line — and how would you write the law?",
        ],
        "class_task": (
            "Source-check drill (Gemini): give pairs a fabricated viral scenario (a leaked 'celebrity confession' "
            "clip from a brand-new account). They ask Gemini to (a) list the steps a professional fact-checker would "
            "take and (b) explain why 'spotting' tells like blinking are unreliable. Students then mark Gemini's "
            "answer against the lesson — does it correctly prioritise the source over the pixels, and does it mention "
            "that free detectors only manage 65–85% accuracy? Write a corrected one-paragraph checklist."
        ),
        "differentiation": (
            "Support: provide the six 'What Actually Helps?' items pre-printed so students sort on paper before using "
            "Gemini. Stretch: students research the C2PA 'content passport' standard and write a paragraph on whether "
            "provenance labelling could realistically fix the liar's dividend, or just shift the problem."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the Gemini critique; the in-course quiz (a convincing pre-election "
            "audio clip from a day-old account → most reliable first step is checking whether BBC/Reuters have "
            "independently verified it, because audio fakes are hard to detect by ear and free detectors are unreliable)."
        ),
        "notes": (
            "Keep this honest: high-quality fakes defeat the visual 'tells' on the activity slide, so present those tells "
            "as a starting glance, not a verdict — context and source matter more. The Groh 66% figure and the "
            "£20M/$40bn statistics are from the cited sources; don't inflate them. Be sensitive: non-consensual "
            "intimate deepfakes have affected UK pupils, so handle that category factually and without examples."
        ),
    },
    # ===================================================================
    {
        "id": 120,
        "unit": "Unit 4: AI, Truth & Media",
        "ailit": "Engage with AI",
        "title": "Spotting AI-Generated Content",
        "big_idea": "AI detectors are unreliable — they wrongly flag innocent students "
                    "and are easily defeated — and humans now spot AI faces barely above "
                    "chance. The durable skill isn't running content through a tool; it's "
                    "asking 'is this accurate and credible?' rather than 'is this AI?', "
                    "because origin is a weaker signal than verifiability.",
        "objectives": [
            "Explain why AI detectors are unreliable and can do real harm (false-positives against non-native writers).",
            "Recognise the common 'tells' of AI text — hedging, generic examples, filler phrases, over-structuring, em-dashes.",
            "Apply the better question — 'is this accurate and credible?' — instead of trying to prove origin.",
            "Use source evaluation to judge AI-style review blogs and viral AI images.",
        ],
        "vocab": [
            ("AI detector", "A tool claiming to label text/images as AI; in practice only 39–76% accurate."),
            ("False positive", "An innocent case wrongly flagged — e.g. a real essay flagged as AI."),
            ("Prompt engineering", "Wording a request so AI output (e.g. with deliberate slips) passes detectors."),
            ("AI 'tells'", "Patterns common in AI text: hedging, vague examples, filler, over-structuring, em-dashes."),
            ("Lateral / source evaluation", "Judging content by who made it and whether it's checkable, not by origin alone."),
            ("Affiliate content", "AI-written 'reviews' optimised for search and commission, not for the reader."),
            ("Pre-bunking", "Learning a manipulation tactic before you meet it, so you recognise it (covered in Lesson 122)."),
        ],
        "resources": [
            ("Course slides — Lesson 120 'Spotting AI-Generated Content'", "Removes course, Unit 4"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: NewsGuard — AI-tracking centre (1,121 AI-generated news sites, Dec 2024)", "https://www.newsguardtech.com/special-reports/ai-tracking-center/"),
            ("Source: Liang et al. (Stanford 2023) — GPT detectors biased against non-native writers (Patterns)", "https://www.cell.com/patterns/fulltext/S2666-3899(23)00130-7"),
            ("Source: University of Waterloo (2024) — people identified AI faces only 61% of the time", "https://uwaterloo.ca/news/media/can-you-tell-difference-between-real-face-and-ai-generated-one"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook stats: NewsGuard's tracker of unreliable AI-generated news sites went from 49 to 1,121 in about "
             "18 months; Sports Illustrated was caught publishing under fake AI 'journalists' with AI faces (Futurism, "
             "Nov 2023); and a 2024 Waterloo study found people identify AI faces only 61% of the time — barely above "
             "chance. Land the callout: the real skill isn't a detector, it's critical reading that works whether a "
             "tool exists or not."),
            ("Main teaching — Why detection fails + the tells", "11 min",
             "Teach 'Why Spotting AI Text Is Hard': Stanford 2023 found detectors flagged non-native English writers' "
             "genuine work as AI 61% of the time; prompt engineering defeats GPTZero/Turnitin/Originality.ai; every "
             "model release breaks detectors; and AI images have lost the old tells (7 fingers, warped eyes). Pivot to "
             "the better question — accuracy and source, not origin. Then teach the text 'tells': over-formal hedging, "
             "generic 'many studies show', filler phrases, over-structuring, no personal voice, comprehensively "
             "superficial, and em-dashes everywhere."),
            ("Activity — AI or Human? + signal checker (Gemini)", "12 min",
             "Run 'AI or Human?': students judge Text A (formal, hedged, vague — likely AI) and Text B (personal, "
             "specific, self-contradicting — likely human) and justify in the notes box before the reveal. Then, in "
             "Gemini, ask it to rewrite Text B in 'default ChatGPT style' and compare which tells appear. Connect to "
             "the in-course 'AI-prose signal checker' widget idea — em-dash density, sentence-length uniformity, "
             "AI-favoured vocabulary — stressing it is a heuristic to train your ear, never evidence to accuse a classmate."),
            ("Case study — Four viral AI images", "5 min",
             "Walk through the Balenciaga Pope, the Pentagon 'explosion' (briefly knocked the S&P 500 ~0.3%), the Trump "
             "arrest images (Bellingcat demo), and the Taylor Swift deepfakes (47M views, prompting the DEFIANCE Act "
             "and UK law changes). Draw the pattern: virality outpaces correction, which is why pre-bunking (next "
             "lessons) beats debunking."),
            ("Scenario — The 'expert review' blog", "5 min",
             "Run the GCSE revision-app blog scenario: every app 4.5–4.8 stars, every review exactly 180 words, same "
             "structure, affiliate link on each. Students decide whether to trust it; reveal that uniformity, no "
             "personal voice and affiliate links signal AI content optimised for Google — find genuine reviews on "
             "r/GCSE instead."),
            ("Plenary — Exit ticket", "2 min",
             "'You suspect a piece of content is AI-generated. What's the most reliable thing to do?' Target: evaluate "
             "its accuracy and source regardless of origin — the question is whether it's correct and credible."),
        ],
        "discussion": [
            "If AI detectors wrongly flag non-native English speakers' genuine writing as AI 61% of the time, what harm does relying on them do — and should schools use them at all?",
            "'Is this accurate?' versus 'Is this AI?' — why is origin a weaker signal than verifiability, and when might origin still matter?",
            "Virality beat correction in every viral-image case. What would actually slow the spread of a convincing fake before it's debunked?",
        ],
        "class_task": (
            "AI-prose detective (Gemini): each student writes a short paragraph in their own voice, then asks Gemini "
            "to rewrite it 'in generic AI style'. They annotate which specific tells appear in the AI version "
            "(em-dashes, filler phrases, hedging, over-structuring, lost personal voice) and write two sentences on "
            "why these are heuristics for training your ear — not proof — and why accusing a classmate on this basis "
            "would be wrong."
        ),
        "differentiation": (
            "Support: give the AI/Human texts with the tells highlighted and have students name each tell before "
            "judging. Stretch: students try to make Gemini produce a paragraph that beats their own tell-spotting "
            "(via prompt engineering) and explain why this proves detectors lose the arms race."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); reasoning quality in the AI/Human justifications; the in-course quiz (most "
            "reliable response to suspected AI content → evaluate accuracy and source regardless of origin, since "
            "detectors are only 39–76% accurate and AI doesn't reliably make spelling mistakes)."
        ),
        "notes": (
            "Stress the safeguarding point hard: AI-prose signal-checkers must never be used to accuse a student — "
            "false positives ruin real pupils, especially EAL students (Stanford 2023). Note the tells are guidance, "
            "not proof, and that the visual image 'tells' (extra fingers) are largely gone by 2024–2026; the honest "
            "teaching point is to verify accuracy and source, not to play spot-the-AI."
        ),
    },
    # ===================================================================
    {
        "id": 121,
        "unit": "Unit 4: AI, Truth & Media",
        "ailit": "Engage with AI",
        "title": "Misinformation & AI",
        "big_idea": "False news spreads roughly six times faster than the truth — not "
                    "because of bots, but because humans share novel, emotionally "
                    "arousing stories before the analytical brain engages (MIT, Science "
                    "2018). Generative AI now collapses the cost of fake content to "
                    "near-zero, supercharging the human reflexes that already make us "
                    "easy to fool.",
        "objectives": [
            "Explain why false news out-travels true news, using the MIT 2018 study and the human drivers behind it.",
            "Describe how generative AI worsens misinformation through speed, scale, personalisation and cost.",
            "Explain the illusory truth effect and why repetition is not verification.",
            "Identify the high-risk signals (emotion, confirmation bias, familiarity, novelty) that make you likely to be fooled.",
        ],
        "vocab": [
            ("Misinformation", "False or misleading content that spreads — whether or not the sharer intends harm."),
            ("Infodemic", "WHO's term for the flood of COVID-19 misinformation running alongside the real pandemic."),
            ("Confirmation bias", "Sharing things that confirm what we already believe, without questioning them (Nickerson 1998)."),
            ("Illusory truth effect", "Repeated exposure makes a claim feel true — your brain mistakes familiarity for truth."),
            ("Engagement algorithm", "A system that promotes emotional content because it drives more interaction, regardless of truth."),
            ("Cheap fakes", "Crude manipulations — slowed video, out-of-context clips, misleading captions — still more common than AI fakes."),
            ("Bot network", "AI-coordinated fake accounts that reshare and like to game recommendation algorithms."),
        ],
        "resources": [
            ("Course slides — Lesson 121 'Misinformation & AI'", "Removes course, Unit 4"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Vosoughi, Roy & Aral — 'The spread of true and false news online', Science (2018)", "https://www.science.org/doi/10.1126/science.aap9559"),
            ("Source: WHO — Infodemic management (COVID-19)", "https://www.who.int/health-topics/infodemic"),
            ("Source: Alan Turing Institute (CETaS, 2024) — AI-Enabled Influence Operations", "https://cetas.turing.ac.uk/publications/ai-enabled-influence-operations-safeguarding-future-elections"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook stats from MIT (Science 2018): the truth took about six times as long to reach people, and "
             "falsehoods were 70% more likely to be retweeted. Add that AI can now generate thousands of convincing "
             "fake articles in minutes, and that the WHO declared a COVID-19 'infodemic'. Ask the class to predict WHY "
             "false news wins, then hold their answers."),
            ("Main teaching — Why it spreads & how AI worsens it", "11 min",
             "Teach 'Why Misinformation Spreads': emotional content (novelty and arousal were MIT's strongest "
             "predictors), confirmation bias, the status of 'being first', engagement-amplifying algorithms (leaked "
             "2021 Facebook research: anger got 5× the reach of a 'like'), and group identity. Then 'How AI Makes This "
             "Worse': speed and scale (NewsGuard tracked 1,121 AI news sites by end of 2024), personalisation, "
             "synthetic media, cost (a £50 fake article in 2020 now costs under 1p), chatbots repeating claims, and "
             "AI-powered amplification. Finish with the illusory truth effect: repetition is not verification."),
            ("Activity — What makes you likely to be fooled? (Gemini)", "12 min",
             "Run the classify widget. In pairs, sort situations into 'high-risk — pause and verify' (a post that makes "
             "you furious, a day-old breaking-news account, a story confirming what you already believe, a claim you've "
             "seen so often it 'feels true') versus 'lower-risk' (an established outlet with named, checkable sources; "
             "a statistic with a named study, year and an openable link). Then ask Gemini for a contested recent claim "
             "and have students apply the same risk signals to its answer — noticing the pattern that high-risk signals "
             "hijack a feeling while lower-risk ones invite checking."),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions on the student's own sharing process, platform responsibility, and personal "
             "responsibility for accidentally sharing something false that reaches hundreds."),
            ("Elections 2024 — reality check", "5 min",
             "Brief the 'AI at Scale — Elections 2024' slide: 70+ countries voted; real cases existed (Slovakia, the "
             "Biden robocall, Taiwan/US influence networks); but Harvard's Ash Center and the Alan Turing Institute "
             "found crude 'cheap fakes' remained more common, and post-election reviews concluded AI did not decisively "
             "swing 2024 — though the threat curve points upward. Both matter; avoid the hype and the complacency."),
            ("Plenary — Exit ticket", "2 min",
             "'Why does false news spread faster than true news?' Target: false stories trigger stronger emotions — "
             "outrage, fear, surprise — which drives sharing before analytical thinking kicks in; algorithms then amplify it."),
        ],
        "discussion": [
            "When you're about to share something online — what's your actual process for deciding whether it's true?",
            "Should social media platforms be legally responsible for misinformation that spreads on them?",
            "If you share something false by accident and it reaches hundreds of people, are you responsible for the harm?",
        ],
        "class_task": (
            "Emotion-bait audit (Gemini): students paste a real (teacher-vetted) viral headline or ask Gemini to "
            "generate a plausible-but-fake one, then label which human driver it exploits — emotion, confirmation "
            "bias, being-first, group identity or illusory truth. They then ask Gemini to rewrite the same claim "
            "neutrally and explain in two sentences how the emotional version was engineered to bypass analytical "
            "thinking. Reinforces that the feeling is the bait."
        ),
        "differentiation": (
            "Support: provide the six classify items pre-printed and sort them as a class before the Gemini step. "
            "Stretch: students research the difference between 'cheap fakes' and AI deepfakes in the 2024 elections "
            "(Turing Institute) and argue which the UK should worry about more, with reasons."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of reasoning in the risk-signal sort; the in-course quiz (why false "
            "news spreads faster → it triggers stronger emotions like outrage, fear and surprise, which drive sharing "
            "before analytical thinking, and algorithms then amplify it)."
        ),
        "notes": (
            "Keep the elections framing balanced — the slides deliberately push back on the headline panic, finding AI's "
            "2024 impact 'limited but rising'. Cite the 6× and 70% figures precisely from MIT 2018, and note that the "
            "study found human behaviour, not bots, was the main driver. If using Gemini to generate a fake headline, "
            "delete it afterwards and frame it clearly as a teaching artefact, never something to share."
        ),
    },
    # ===================================================================
    {
        "id": 122,
        "unit": "Unit 4: AI, Truth & Media",
        "ailit": "Engage with AI",
        "title": "Fact-Checking in the AI Age",
        "big_idea": "Fact-checking isn't a talent — it's a habit you can perform in "
                    "under two minutes. Professional fact-checkers reach sounder "
                    "conclusions faster than PhD historians by 'reading laterally' "
                    "(leaving the page to see what others say about a source), and the "
                    "four SIFT moves — Stop, Investigate, Find, Trace — make that habit "
                    "teachable.",
        "objectives": [
            "Apply the four SIFT moves (Stop, Investigate the source, Find better coverage, Trace claims) to any claim.",
            "Explain lateral reading and why it beats reading a source top-to-bottom (Wineburg & McGrew, Stanford 2018).",
            "Explain why pre-bunking (inoculation) is stronger than debunking after the fact.",
            "Verify an AI-generated citation before quoting it, knowing chatbots fabricate realistic-looking sources.",
        ],
        "vocab": [
            ("SIFT", "Caulfield's four moves: Stop, Investigate the source, Find better coverage, Trace claims."),
            ("Lateral reading", "Opening new tabs to see what independent sources say about a source — what pros actually do."),
            ("Pre-bunking (inoculation)", "Teaching a manipulation tactic before you meet it, building lasting resistance."),
            ("Reverse image search", "Using Google Images / TinEye / Bing to find a photo's true origin and context."),
            ("Hallucination", "An AI confidently inventing a real-looking source (author, journal, year) that doesn't exist."),
            ("UK fact-checkers", "Full Fact, BBC Reality Check, Reuters Fact Check, AFP Fact Check, Channel 4 FactCheck."),
            ("InVID / WeVerify", "An EU-funded browser tool for checking videos for re-uploads and edits."),
        ],
        "resources": [
            ("Course slides — Lesson 122 'Fact-Checking in the AI Age'", "Removes course, Unit 4"),
            ("Play: 'Bad News' — free media-literacy game (Cambridge & DROG)", "https://www.getbadnews.com/en/play"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Wineburg & McGrew (Stanford 2018) — Lateral Reading", "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3048994"),
            ("Source: Roozenbeek & van der Linden et al. — Psychological inoculation (Science Advances, 2022)", "https://www.science.org/doi/10.1126/sciadv.abo6254"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: Mike Caulfield found students read a source top-to-bottom for 'credibility markers' while "
             "professionals immediately open new tabs and search what others say about the source — 'lateral reading'. "
             "Wineburg & McGrew (Stanford 2018) found fact-checkers reached sounder conclusions in a fraction of the "
             "time it took PhD historians. Land the callout: fact-checking is a habit, not a talent — built through the "
             "four SIFT steps."),
            ("Main teaching — SIFT + lateral reading + pre-bunking", "10 min",
             "Teach SIFT: S — Stop (notice your emotional reaction); I — Investigate the source (30 seconds on "
             "Wikipedia / Media Bias-Fact Check); F — Find better coverage (search what independent sources say); "
             "T — Trace claims, quotes and images to the original. Then lateral reading and the UK fact-checkers to "
             "bookmark, reverse image search, and the AI-citation warning (LLMs invent plausible citations — "
             "'hallucination'). Finish with pre-bunking: the Jigsaw/Google 2022 trial reached 5.4M YouTube users and "
             "measurably improved manipulation-spotting; inoculation beats correction."),
            ("Activity — SIFT in action (factcheck widget + Gemini)", "12 min",
             "Work the Fact-Check Simulator claim: 'Scientists have proven that using your phone before bed has no "
             "effect on sleep quality.' Students write their own answers to all four SIFT steps in the notes box, then "
             "reveal the verdict (misleading: 'scientists have proven' is a red-flag phrase and the claim contradicts "
             "peer-reviewed evidence). Then the AI-citation drill: ask Gemini to 'cite three studies on teenage sleep "
             "and screens', and trace each citation to a primary source — flag any it fabricated."),
            ("Game — Bad News pre-bunking", "6 min",
             "Introduce (and, if time/devices allow, start) the free Cambridge/DROG game 'Bad News', tested in the "
             "Science Advances 2022 study. Students play the manipulator to learn the six tactics from the inside — "
             "impersonation, emotion, polarisation, conspiracy, discrediting, trolling — noting that AI can now "
             "automate every one at scale (Lesson 121). (Full play is the home/extension task.)"),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions: when did you last fact-check before sharing, and what stopped you? Should "
             "users run SIFT on every post, or should platforms label unverified claims? What single habit would catch "
             "an AI-invented citation before it reaches your essay?"),
            ("Plenary — Exit ticket", "2 min",
             "'In SIFT, what does F — Find better coverage mean?' Target: search what other independent sources say "
             "about the same claim — don't evaluate it on the original page alone."),
        ],
        "discussion": [
            "When was the last time you fact-checked something before sharing it? If never — what stopped you? Be honest about the real reason: time pressure, emotional reaction, 'it looked right', assumed trust in the source?",
            "Is it reasonable to expect ordinary users to run SIFT on every post, or should platforms (TikTok, Instagram, X, WhatsApp) carry more of the responsibility for labelling unverified claims?",
            "AI chatbots often invent citations that look real — author name, journal, year, page numbers — but don't exist. What's the single habit you would adopt to catch this before quoting it in an essay or exam answer?",
        ],
        "class_task": (
            "Trace-the-citation challenge (Gemini): students ask Gemini for three sources to support a claim of their "
            "choice, then run SIFT's Trace step — searching for each author, journal and year to confirm whether the "
            "source actually exists. They log which (if any) Gemini fabricated and write the one verification habit "
            "they will now use before quoting any AI-supplied source in coursework. Pair with a quick lateral-reading "
            "check using a UK fact-checker (Full Fact / BBC Reality Check)."
        ),
        "differentiation": (
            "Support: provide a SIFT cue-card with the four moves and sentence stems, and work the simulator claim as "
            "a teacher-led think-aloud first. Stretch: students complete all six Bad News badges and, for each tactic, "
            "find a real online example and explain how SIFT would catch it."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); completeness of the four SIFT steps on the simulator claim; the in-course quiz "
            "('F — Find better coverage' → search for what other independent sources say about the same claim, not "
            "evaluating it on the original page). The Unit 4 assessment is a full SIFT fact-check dossier."
        ),
        "notes": (
            "SIFT is Caulfield's method and the lateral-reading evidence is Wineburg & McGrew (Stanford 2018) — cite "
            "both accurately. The Bad News game and the 5.4M-user Jigsaw figure come from the cited sources; the game "
            "takes 15–20 minutes, so set full play as homework if the period is tight. Model tracing an AI citation "
            "yourself first so students see how convincingly fabricated ones can read."
        ),
    },
    # ===================================================================
    {
        "id": 123,
        "unit": "Unit 4: AI, Truth & Media",
        "ailit": "Engage with AI",
        "title": "Filter Bubbles & Algorithms",
        "big_idea": "Recommendation algorithms optimise for engagement — time on the "
                    "platform — not for accuracy, balance or your wellbeing. Over weeks "
                    "they build a personalised, self-reinforcing version of the web that "
                    "quietly stops showing you what you don't engage with, so two people "
                    "can see two different realities of the same event. Awareness, plus "
                    "deliberate diversification, is the defence.",
        "objectives": [
            "Explain how recommendation algorithms work and what they actually optimise for.",
            "Describe what filter bubbles hide and how they skew your sense of what's 'normal'.",
            "Explain why two people can see opposite, equally 'true' feeds about the same event.",
            "Apply deliberate strategies (diverse sources, mute/not-interested) to push back on algorithmic drift.",
        ],
        "vocab": [
            ("Filter bubble", "Pariser's 2011 term for the personalised information world an algorithm builds around you."),
            ("Recommendation algorithm", "An AI that predicts what content will keep you engaged longest, from your every signal."),
            ("Engagement optimisation", "Maximising time-on-app / ad impressions — not truth, balance or wellbeing."),
            ("Feedback loop", "Seeing more of what you engaged with, so you engage more, so the feed narrows further."),
            ("Majority illusion", "Thinking your view is shared by everyone because your feed agrees with you."),
            ("Watch time", "On TikTok, the single most powerful signal feeding the 'For You' model."),
            ("Diversification", "Deliberately following diverse sources and signalling 'not interested' to pull the feed back."),
        ],
        "resources": [
            ("Course slides — Lesson 123 'Filter Bubbles & Algorithms'", "Removes course, Unit 4"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Pariser, E. (2011) — Beware online filter bubbles (TED Talk)", "https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles"),
            ("Source: Reuters Institute Digital News Report 2025 (10% of UK adults pay for online news)", "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025"),
            ("Source: Ofcom — News Consumption in the UK 2025 (TikTok #1 single news source for 12–15s)", "https://www.ofcom.org.uk/media-use-and-attitudes/attitudes-to-news/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: Eli Pariser coined 'filter bubble' in 2011 after his Facebook feed quietly dropped his "
             "conservative friends. By 2025, Reuters found only 10% of UK adults pay for online news, and Ofcom found "
             "TikTok is the single most-used news source for UK 12–15s — the very age group in the room — ahead of the "
             "BBC. A leaked 2021 Facebook test account ('conservative mother') was fed extremist content within 2 days. "
             "Land the callout: a filter bubble isn't something that happens to other people."),
            ("Main teaching — How the algorithm works & what it hides", "11 min",
             "Teach 'How Recommendation Algorithms Work': every click, watch, hover, pause, scroll speed, re-watch and "
             "skip is tracked (on TikTok, watch time is the strongest signal); the core prediction is 'what keeps this "
             "user engaged longest?'; it optimises for engagement, not truth or wellbeing; the feedback loop tightens; "
             "and the feed exists to maximise platform revenue. Then 'What Filter Bubbles Hide': challenging content "
             "disappears, quiet-but-important news goes missing, 'normal' gets skewed, the majority illusion forms, and "
             "cross-community understanding breaks down."),
            ("Activity — Audit and diversify your feed (Gemini)", "12 min",
             "Students reflect on their own 'For You' page: in the notes box, list the last ten things their feed "
             "showed and what topic/viewpoint it under-shows. Then in Gemini: ask it to suggest three credible sources "
             "that would deliberately broaden their view on a topic they care about, and to explain the difference "
             "between 'what you want to see' and 'what's true and diverse'. Students critique Gemini's suggestions and "
             "write one concrete diversification action (follow X, mute Y, tap 'not interested' on Z)."),
            ("Scenario — Two feeds, same event", "5 min",
             "Run 'Two Feeds, Same Event': two classmates see six TikToks each about the same UK voting-rules change — "
             "one set framing it as an attack on democracy, the other as sensible anti-fraud reform — and argue at "
             "lunch. Vote on the three explanations; reveal that their algorithms built two realities from prior "
             "engagement, and the fix is deliberate diversification (Reuters/BBC, the original statement), not platform "
             "swapping."),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions: should algorithms show what you want or what's true and diverse even if less "
             "engaging? Can you name a topic where your feed only shows one side? Who is responsible for filter bubbles "
             "— the platform, the designers, or you?"),
            ("Plenary — Exit ticket", "2 min",
             "'What does a recommendation algorithm primarily optimise for?' Target: content that keeps you on the "
             "platform as long as possible — because that drives ad revenue and retention, not accuracy or wellbeing."),
        ],
        "discussion": [
            "Should algorithms show you what you want to see, or what's true and diverse — even if it's less engaging?",
            "Can you think of a topic where your social media feed only shows you one side of the argument?",
            "Who should be responsible for filter bubbles — the platform, the algorithm designers, or you?",
        ],
        "class_task": (
            "Bubble-buster plan (Gemini): students name a topic they hold a strong view on, then ask Gemini to "
            "(a) summarise the strongest version of the OPPOSING view and (b) suggest three credible, diverse sources. "
            "They critique whether Gemini's summary is genuinely fair or itself one-sided, then write a three-step plan "
            "to deliberately diversify their own feed this week (follow, mute, tap 'not interested'). Grounded in the "
            "lesson's point that awareness plus diversification beats platform-swapping."
        ),
        "differentiation": (
            "Support: provide a structured feed-audit grid (topic / viewpoint shown / viewpoint missing) to scaffold "
            "the reflection before Gemini. Stretch: students research the leaked 2021 Facebook 'angry reaction got 5× "
            "the reach' finding and argue whether engagement optimisation can ever be made safe without changing the "
            "business model."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the diversification plan; the in-course quiz (what algorithms "
            "optimise for → keeping you on the platform as long as possible, because that drives ad revenue and "
            "retention). This is the final Unit 4 lesson, so it also leads into the Unit 4 recap and Fact-Check Dossier."
        ),
        "notes": (
            "Keep the framing non-partisan — the 'two feeds' point is that both friends saw true statements selected "
            "for opposite emotional effect, not that one side is right. The 10%, TikTok-#1 and 2-day figures come from "
            "Reuters 2025, Ofcom 2025 and the 2021 Facebook leak respectively. The honest takeaway is awareness plus "
            "active signalling, not deleting apps or switching platforms (which just changes the bubble)."
        ),
    },
    # ===================================================================
    {
        "id": 124,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "Who Benefits from AI?",
        "big_idea": "Powerful technology does not automatically benefit everyone "
                    "equally. AI investment and capability are hugely concentrated — the "
                    "US drew about 23× the next country's private AI investment in 2025 — "
                    "while 2.2 billion people are still offline, most of 7,000+ languages "
                    "are poorly served, and the hidden human and environmental costs fall "
                    "on people who aren't the ones using the tools.",
        "objectives": [
            "Explain the digital divide and the multiple layers of access AI now requires.",
            "Describe, with evidence, how AI works measurably worse for under-represented groups.",
            "Identify the hidden human and environmental costs of AI and who bears them.",
            "Evaluate what would make AI development more globally representative.",
        ],
        "vocab": [
            ("Digital divide", "The gap between those with effective access to modern digital technology and those without."),
            ("Training-data tilt", "Public-web data over-represents wealthy, Western, English-speaking perspectives."),
            ("Low-resource language", "A language poorly supported by frontier models — fewer than 100 of 7,000+ are well served."),
            ("Algorithmic bias (representation)", "Worse performance on groups under-represented in the training data."),
            ("Content-moderation labour", "Outsourced workers, largely in the Global South, who filter harmful content to make AI safe."),
            ("Compound disadvantage", "Groups already under-served by tech are the ones AI works worst for — a two-layer problem."),
            ("Data centre footprint", "The energy and water (e.g. Microsoft +34%) consumed to train and run AI."),
        ],
        "resources": [
            ("Course slides — Lesson 124 'Who Benefits from AI?'", "Removes course, Unit 5"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: ITU — Facts and Figures 2025 (2.2 billion still offline)", "https://www.itu.int/itu-d/reports/statistics/facts-figures-2025/"),
            ("Source: Stanford AI Index Report 2026 (private AI investment by country)", "https://hai.stanford.edu/ai-index/2026-ai-index-report"),
            ("Source: TIME — OpenAI used Kenyan workers on under $2/hr (Perrigo, Jan 2023)", "https://time.com/6247678/openai-chatgpt-kenya-workers/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook stats: the AI industry is worth over $1 trillion, but in 2025 the US alone drew about $286bn of "
             "private AI investment — roughly 23× the next country, China (Stanford AI Index 2026). Meanwhile 2.2 "
             "billion people have no internet, fewer than 100 of 7,000+ languages are well served, and diagnostic AI "
             "performs worse on under-represented populations. Land the callout: who gets access — and who gets left "
             "out — is a defining question of the AI era."),
            ("Main teaching — Digital divide & who's left out", "11 min",
             "Teach 'The Digital Divide': access needs electricity, internet, a modern device, often a subscription, "
             "and literacy; 2.2 billion are offline (ITU 2025), concentrated in Sub-Saharan Africa and South Asia, "
             "women disproportionately; English dominance and training-data tilt. Then 'Who's Being Left Out' with the "
             "evidence: skin-cancer classifiers worse on Black patients (JAMA 2018); ASR ~2× word-error for Black "
             "American speakers (PNAS 2020); Gender Shades up to 34% error for darker-skinned women (MIT 2018); rural "
             "bandwidth gaps; IMF (2024) 40% of jobs exposed but benefits concentrated in leading economies."),
            ("Activity — Where would you put £100 million? (Gemini)", "12 min",
             "Run the 'feed-audit' widget choices: students pick the three options they'd fund (open-source "
             "translation for under-served languages; rural-clinic diagnostic AI; UK frontier-model safety / AISI; "
             "scholarships for under-represented AI-ethics researchers; AI literacy for every UK school; a national "
             "compute cluster; solar-powered micro data centres; AI accessibility tools). In Gemini, students argue "
             "for their top choice and ask Gemini for the strongest counter-argument — then write a one-paragraph "
             "justification of what 'benefit' means and who should get it."),
            ("Concept — The hidden costs", "5 min",
             "Teach 'The Hidden Costs': training GPT-3 used ~1,287 MWh (≈120 US households' annual electricity), "
             "GPT-4 estimated 50–100 GWh; data-centre cooling consumes millions of litres (Microsoft +34% water); and "
             "content moderation by outsourced workers — TIME's 2023 investigation found OpenAI's Kenyan contractors "
             "paid $1.32–$2/hour, many reporting PTSD-like symptoms. Stress: this is current, not history."),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions: should wealthy AI-developing countries share benefits more equitably? What "
             "happens to economies AI bypasses? What would make AI development more globally representative in data, "
             "teams and tools?"),
            ("Plenary — Exit ticket", "2 min",
             "'Why do AI healthcare tools often perform worse for some populations?' Target: training data is "
             "predominantly from Western populations, so the AI performs worse on under-represented groups — not "
             "intentional, but a direct result of who the data came from."),
        ],
        "discussion": [
            "Should wealthy countries that develop AI have an obligation to share its benefits more equitably?",
            "If AI makes some economies dramatically more productive, what happens to those it bypasses entirely?",
            "What could make AI development more globally representative — in the data, the teams, and the tools?",
        ],
        "class_task": (
            "Investment pitch (Gemini): each student picks one of the eight '£100 million' options and uses Gemini to "
            "research one concrete real-world example (e.g. Masakhane/Lelapa for African-language NLP, or the UK AI "
            "Safety Institute). They then ask Gemini for the strongest objection to their choice and answer it, "
            "producing a short, evidence-backed pitch that makes clear who benefits and who is currently left out. "
            "Grounded in the lesson's data on concentration and exclusion."
        ),
        "differentiation": (
            "Support: provide the eight funding options on cards with the descriptions, and have students rank rather "
            "than research first. Stretch: students cross-reference one of the bias studies (Gender Shades, PNAS 2020, "
            "JAMA 2018) and explain the mechanism — how training-data representation produces the measured gap."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the funding justification and counter-argument; the in-course quiz "
            "(why healthcare AI performs worse for some populations → training data is predominantly Western, so the "
            "AI performs worse on under-represented groups)."
        ),
        "notes": (
            "Cite the headline figures carefully: 23×, 2.2bn, fewer-than-100-languages, and the $1.32–$2/hr Kenyan "
            "moderation pay all come from the slide sources (AI Index 2026, ITU 2025, TIME 2023). Note the widget "
            "intro says '2.6bn offline' for one option while the headline uses 2.2bn (ITU 2025) — use 2.2bn as the "
            "current figure. The Kenyan-moderation content is distressing; describe the conditions factually without "
            "graphic detail."
        ),
    },
    # ===================================================================
    {
        "id": 125,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "Bias In, Bias Out",
        "big_idea": "Biased AI usually isn't broken — it works exactly as designed, "
                    "faithfully replicating the discrimination baked into its training "
                    "data. Robert Williams was wrongly arrested on a false facial-match; "
                    "COMPAS flagged Black defendants as high-risk twice as often. The "
                    "harm is the same whether or not the machine 'intended' it, so "
                    "detecting and fixing bias takes deliberate effort.",
        "objectives": [
            "Explain the four routes by which bias enters AI (biased data, biased labels, under-representation, proxy variables).",
            "Give real-world examples of biased AI and their consequences across justice, hiring, healthcare and lending.",
            "Explain the role of hidden human labour in shaping what AI treats as 'normal'.",
            "Evaluate what's needed to detect and reduce bias (diverse teams, representative data, demographic testing, oversight).",
        ],
        "vocab": [
            ("Biased training data", "If historical data reflects discrimination, the AI learns to replicate it."),
            ("Biased labels", "Unconscious bias in the humans annotating data is inherited by the model."),
            ("Under-representation", "Groups appearing less in training data are served worse by the resulting model."),
            ("Proxy variable", "A feature (e.g. postcode) that indirectly encodes a protected characteristic like race."),
            ("The coded gaze", "Buolamwini's term for the bias built into systems that fail on her dark-skinned face."),
            ("RLHF workers", "People (e.g. Kenyan contractors, ~$1.32/hr) who rate outputs and label toxic content."),
            ("Disparate impact", "When a system's errors fall unequally on a protected group — the thing to test before launch."),
        ],
        "resources": [
            ("Course slides — Lesson 125 'Bias In, Bias Out'", "Removes course, Unit 5"),
            ("Video: 'How I'm Fighting Bias in Algorithms' — Joy Buolamwini, TEDxBeaconStreet (8 min)", "https://www.youtube.com/watch?v=UG_X_7g63rY"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: ProPublica — Machine Bias (COMPAS, Angwin et al., 2016)", "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"),
            ("Source: NIST — Face Recognition Vendor Test Part 3: Demographic Effects (NISTIR 8280, 2019)", "https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: in January 2020 Robert Williams was wrongly arrested in front of his daughters in Detroit on a "
             "false facial-recognition match and held 30 hours — he was innocent. Separately, the COMPAS risk tool "
             "flagged Black defendants as twice as likely to reoffend as white defendants with similar records, and "
             "NIST found up to ~100× higher error for dark-skinned women than white men. Land the callout: the AI "
             "wasn't broken — it worked as designed; the problem was what it was trained on, and who it affected."),
            ("Watch — Joy Buolamwini", "6 min",
             "Play the 8-minute TEDx talk (or first 6 minutes). Focus task: 'What specific biases does she identify, "
             "and what changes does she demand from the industry?' She found facial recognition couldn't detect her "
             "dark-skinned face but could detect a white mask — the 'coded gaze' that launched the Algorithmic Justice League."),
            ("Main teaching — How bias gets in & consequences", "10 min",
             "Teach 'How Bias Gets Into AI Systems': biased training data, biased labels, under-representation, proxy "
             "variables (postcode encoding race/class). Then 'Real-World Consequences': criminal justice risk scores, "
             "CV-screening that penalises certain names/universities/gaps, diagnostic AI worse on darker skin, lending "
             "by postcode, ad systems showing high-paid jobs less to women. Add 'The Hidden Workers': Kenyan RLHF "
             "workers (~$1.32/hr, TIME 2023) and moderation labour shape what AI treats as 'normal'."),
            ("Activity — Audit a real biased system (factcheck widget + Gemini)", "12 min",
             "Work the Dutch childcare-benefits scandal: 2013–2019, a self-learning risk system falsely accused ~26,000 "
             "families, drove many into poverty, and the government resigned in January 2021. Students answer the three "
             "widget questions (which feature drove the scores; what three things they'd test before launch; where "
             "responsibility sits), then reveal — dual nationality was a major driver, the DPA ruled it unlawful and "
             "fined €2.75m, and responsibility was shared. Optionally, ask Gemini to propose a pre-launch bias-audit "
             "checklist and critique it for disparate-impact testing and a real appeal route."),
            ("Scenario — The CV screening system", "5 min",
             "Run the CV-screening scenario: an AI trained on 10 years of male-dominated hires now ranks women 14% "
             "lower than identically qualified men, and you're junior HR. Vote on the three choices; reveal that "
             "reporting it and pausing the tool prevented Equality Act liability, while saying nothing led to a "
             "tribunal — echoing Amazon scrapping its biased tool in 2018."),
            ("Plenary — Exit ticket", "2 min",
             "'An AI hiring tool trained on a male-dominated industry rejects more women — why?' Target: historical "
             "data reflects past discrimination and the AI learns to replicate those patterns (as Amazon found in 2018)."),
        ],
        "discussion": [
            "If an AI isn't 'trying' to discriminate but the harm is identical, does intent matter — for the victim, or for the law?",
            "Postcode can act as a proxy for race or class. Should AI systems be banned from using features that indirectly encode protected characteristics?",
            "Who should be responsible when a biased system like the Dutch childcare algorithm causes mass harm — the engineers, the ministers, or the political pressure that demanded it?",
        ],
        "class_task": (
            "Bias-audit designer (Gemini): in pairs, students take one real case from the lesson (COMPAS, the Dutch "
            "childcare scandal, or Amazon's recruiting tool) and ask Gemini to outline how the bias entered and what "
            "harm resulted. They then design a five-point pre-deployment audit — including demographic breakdown of "
            "false positives and a genuine appeal route — and critique whether Gemini's own suggestions would actually "
            "have caught the bias before launch. Grounded in the slide's 'detecting and fixing bias requires effort'."
        ),
        "differentiation": (
            "Support: provide the four 'how bias gets in' routes as a matching exercise against the real cases before "
            "the activity. Stretch: students explain the 'proxy variable' problem using a worked example and argue "
            "whether removing a protected feature is enough to remove the bias (it usually isn't)."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the bias-audit design; the in-course quiz (male-dominated hiring "
            "data → the historical data reflects past discrimination and the AI learns to replicate it, citing "
            "Amazon's 2018 scrapped tool)."
        ),
        "notes": (
            "Cite cases precisely: Robert Williams (ACLU 2020), COMPAS (ProPublica 2016), NIST's up-to-100× gap "
            "(NISTIR 8280, 2019), the Dutch scandal (~26,000 families, €2.75m fine), and Amazon 2018. The Buolamwini "
            "video is the only video in this batch — preview it and the 'coded gaze' term. Handle the Kenyan-labour "
            "and wrongful-arrest content factually; the point is the systemic mechanism, not individual blame."
        ),
    },
    # ===================================================================
    {
        "id": 137,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "The Environmental Cost of AI",
        "big_idea": "Every prompt has an invisible physical cost — chips draw power and "
                    "water evaporates to cool them — and training one large model can emit "
                    "hundreds of tonnes of CO₂. Yet AI also helps fight climate change. "
                    "Both are true; whether AI is net-positive depends on how it's built "
                    "and used, which turns into one practical habit: before reaching for "
                    "AI, ask whether a greener alternative exists.",
        "objectives": [
            "Describe where AI's environmental footprint comes from across the whole life-cycle.",
            "Explain how AI is also used to fight climate change, and why the net impact is a choice, not a fact.",
            "Apply the 'is there a greener alternative?' habit to decide when a large model is a reasonable fit.",
            "Weigh the trade-offs of a real-world data-centre decision using specifics, not slogans.",
        ],
        "vocab": [
            ("Inference", "The energy cost of each query — tiny alone, but the largest ongoing cost at scale."),
            ("Training", "Months of computation across thousands of chips, using tens of GWh for the largest runs."),
            ("Evaporative cooling", "Using water to cool data centres — millions of litres a year, sometimes in dry regions."),
            ("E-waste", "Discarded chips and servers, a growing electronic-waste stream as hardware is replaced fast."),
            ("Greener alternative", "The lightest tool that does the job — calculator, search or your own memory over a big model."),
            ("Net impact", "Whether AI helps or harms the planet overall — a choice that depends on design and use (Luccioni 2025)."),
            ("Environmental transparency", "Companies reporting energy and water use — you can't improve what nobody measures."),
        ],
        "resources": [
            ("Course slides — Lesson 137 'The Environmental Cost of AI'", "Removes course, Unit 5"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: UNEP (2024) — AI has an environmental problem", "https://www.unep.org/news-and-stories/story/ai-has-environmental-problem"),
            ("Source: Bashir et al. (MIT 2024) — Climate and Sustainability Implications of Generative AI", "https://doi.org/10.21428/e4baedd9.9070dfe7"),
            ("Source: Luccioni et al. (2025) — Misinformation by Omission: environmental transparency in AI", "https://arxiv.org/abs/2506.06790"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: every prompt makes something physical happen in a data centre — chips draw power, water evaporates "
             "to cool them, none of it on your screen. Training one large model can emit hundreds of tonnes of CO₂ "
             "(Bashir et al., MIT 2024), and Microsoft's global water use rose 34% in a generative-AI scale-up year, "
             "often in water-scarce regions. But AI also fights climate change. Land the callout: this isn't about "
             "guilt — it's about using AI consciously, weighing the real-world cost."),
            ("Main teaching — Where the cost comes from & the other side", "11 min",
             "Teach 'Where the Cost Comes From' across the life-cycle (UNEP 2024): making the hardware (mining, chip "
             "manufacture), training the model (tens of GWh), every query/inference (tiny but largest at scale), "
             "cooling with water (millions of litres), and e-waste. Then 'The Other Side': smarter energy grids, "
             "climate modelling, efficiency gains — and the honest verdict that net impact depends on how AI is built "
             "and used (Luccioni et al., 2025), so it's a choice, not a fixed fact."),
            ("Activity — Is there a greener alternative? (Gemini)", "12 min",
             "Run the classify widget. Students sort tasks into 'greener alternative exists' (17×23 → calculator; "
             "capital of Peru → search/memory; spelling → spell-checker; a photorealistic image 'just to see' → don't) "
             "versus 'AI is a reasonable fit' (brainstorming ten title ideas; summarising a 30-page report you must act "
             "on — but verify it). Then, ironically using Gemini, ask it to estimate the relative energy cost of a text "
             "prompt vs an image generation and to suggest a personal 'lightest tool' rule; students critique its "
             "answer against the lesson and write their own rule."),
            ("Scenario — The data centre next door", "5 min",
             "Run 'The Data Centre Next Door': a centre promising 200 jobs and faster internet but drawing millions of "
             "litres from a river the town relies on in dry summers. Vote on the three responses; reveal that the "
             "literate move is asking for specifics — water source and cooling method, energy source, who bears costs "
             "and who gets benefits — before deciding, because a renewable-powered, efficiently-cooled centre in a "
             "water-rich area is very different from a fossil-powered one draining a stressed river."),
            ("Discussion — What you can do", "5 min",
             "Using 'What You Can Actually Do', discuss: reach for the lightest tool; be deliberate not idle (endless "
             "regenerating costs energy); prefer efficient/smaller models; push for transparency (Luccioni 2025); and "
             "keep perspective (a long flight may dwarf your AI use). Debate: do individual habits matter if the real "
             "decisions sit with companies and governments?"),
            ("Plenary — Exit ticket", "2 min",
             "'Which statement best reflects an AI-literate view of AI and the environment?' Target: AI has a genuine "
             "resource footprint AND can help fight climate change; whether it's net-positive depends on how it's "
             "built and used."),
        ],
        "discussion": [
            "Individual choices won't solve AI's footprint — that needs company and government decisions. So do your own habits matter at all, and why?",
            "Should AI companies be legally required to publish their energy and water use, given 'you can't improve what nobody measures'?",
            "A data centre promises 200 jobs but drains a river the town relies on in summer. Who should decide, and what specifics would change your answer?",
        ],
        "class_task": (
            "Greener-alternative ruler (Gemini): students give Gemini a list of six everyday tasks (arithmetic, a "
            "fact lookup, a spelling check, a creative brainstorm, summarising a long report, generating an image "
            "'just to see') and ask it to sort each into 'greener alternative' versus 'AI is a reasonable fit', with a "
            "reason. They mark Gemini's answer against the lesson's classify activity, then write a personal three-line "
            "rule for when they will and won't reach for a large model — directly applying the AILit 'is there a "
            "greener alternative?' habit."
        ),
        "differentiation": (
            "Support: provide the six classify tasks pre-printed so students sort on paper before checking with Gemini. "
            "Stretch: run the 'Follow the Footprint' extension — pick one AI company or data centre, find one citable "
            "energy or water figure, note what it omits (Luccioni 2025 on transparency gaps), map who benefits versus "
            "who bears the cost (link to Lesson 124), and propose one fairer policy or design change."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the greener-alternative rule; the in-course quiz (most AI-literate "
            "view → AI has a genuine footprint AND can help fight climate change; net impact depends on how it's built "
            "and used)."
        ),
        "notes": (
            "Keep the balance the slides insist on: hold both truths at once and avoid both 'AI is destroying the "
            "planet' and 'it's just software'. Cite figures as ranges from the sources (hundreds of tonnes of CO₂ per "
            "large model; tens of GWh for the largest runs; Microsoft +34% water). It's a useful irony that the Gemini "
            "task itself has a footprint — name that explicitly and keep the task purposeful and short, modelling the "
            "'be deliberate, not idle' habit."
        ),
    },
    # ===================================================================
    {
        "id": 126,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "Jobs & Automation",
        "big_idea": "AI automates tasks within jobs, not usually whole jobs in one go — "
                    "most jobs are bundles of 10–30 tasks, and AI is brilliant at some and "
                    "useless at others. The durable finding is the 'centaur' pattern: "
                    "humans working WITH AI beat both pure AI and pure humans, so the "
                    "smart question isn't 'will my job exist?' but 'which human parts "
                    "should I get good at?'",
        "objectives": [
            "Distinguish automating tasks from replacing whole jobs, with examples from medicine, law and teaching.",
            "Identify which tasks AI can largely do today and which stay human strengths (for now).",
            "Explain the 'centaur' finding — that human + AI beats pure AI and pure humans.",
            "Name the skills rising in value in an AI world (WEF 2025) and plan which to develop.",
        ],
        "vocab": [
            ("Task vs job", "A job is a bundle of 10–30 tasks; AI automates tasks, reshaping roles rather than deleting them."),
            ("Automation exposure", "How much of a role's tasks could be automated — McKinsey ~30% by 2030; Goldman 300M jobs."),
            ("Centaur", "A human working with AI, who outperforms both pure AI and pure humans."),
            ("Reskilling / adaptability", "Keeping learning as tools change — the meta-skill that outlasts any single tool."),
            ("Human-strength tasks", "Empathy, judgement under uncertainty, relationship and care — beyond current AI."),
            ("AI literacy", "Knowing what AI can and can't do and using it well — itself a core WEF 2025 skill."),
            ("New AI roles", "Emerging jobs: AI specialists, prompt engineers, AI ethics officers, model-evaluators, red-teamers."),
        ],
        "resources": [
            ("Course slides — Lesson 126 'Jobs & Automation'", "Removes course, Unit 5"),
            ("Video: 'The Rise of the Machines' — Kurzgesagt (12 min)", "https://www.youtube.com/watch?v=WSKi8HfcxEk"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: World Economic Forum — Future of Jobs Report 2025", "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"),
            ("Source: Anthropic Economic Index — AI's impact on tasks and occupations (2024)", "https://www.anthropic.com/news/the-anthropic-economic-index"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook stats: McKinsey estimates AI could automate ~30% of current work tasks by 2030; Goldman Sachs puts "
             "300M jobs globally as exposed; WEF 2025 names AI & big data the fastest-growing skill — and the most "
             "in-demand job of 2030 probably doesn't have a name yet. But every past revolution (printing, "
             "industrial, electricity, internet) created new jobs. Pose the honest question: is this time different?"),
            ("Watch — Kurzgesagt", "6 min",
             "Play the first ~6 minutes of 'The Rise of the Machines'. Focus task: 'What's the distinction between "
             "mechanical and cognitive automation — and which side of that line are the parts of your future career "
             "on?' Kurzgesagt argues machines are developing 'cognitive muscles' for the first time."),
            ("Main teaching — Tasks vs jobs & the centaur finding", "10 min",
             "Teach 'Tasks vs Jobs': AI automates tasks within jobs (MIT, OECD, Goldman, Anthropic's 2024 Economic "
             "Index agree). Doctors — AI-assisted image review but the radiologist signs off; lawyers — Harvey/CoCounsel "
             "draft, but advocacy and trust stay human; teachers — marking and planning drafts, but the pastoral "
             "relationship stays human. Then 'The Centaur Finding': pure AI beat pure humans at chess, but humans + AI "
             "('centaurs') beat pure AI; Klarna said AI did the work of 700 agents in 2024 then rehired humans in 2025 "
             "after quality dropped; radiology job postings are at record highs despite a 2016 prediction."),
            ("Activity — Will AI do this task? (classify + Gemini)", "12 min",
             "Run the classify widget: sort tasks into 'AI can largely do this' (reviewing a chest X-ray to flag "
             "anomalies; drafting a standard contract; marking 100 multiple-choice quizzes) versus 'stays human (for "
             "now)' (breaking difficult news with empathy; persuading a jury; noticing a quiet pupil is struggling). "
             "In Gemini, students pick a career they're interested in, ask Gemini to break it into 10–15 tasks and "
             "label each AI-automatable or human, then critique and correct the answer — landing the question 'which "
             "human parts should I practise now?'"),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions: if AI automates 30% of tasks, should we work a 4-day week instead of making "
             "people redundant? Which jobs are most/least vulnerable, and why? Whose responsibility is it to prepare "
             "people — government, employers or individuals?"),
            ("Plenary — Exit ticket", "2 min",
             "'Which best describes how AI affects employment?' Target: AI automates specific tasks within jobs, "
             "changing roles rather than eliminating them entirely."),
        ],
        "discussion": [
            "If AI automates 30% of work tasks, should we work a 4-day week instead of making people redundant?",
            "Which jobs do you think are most and least vulnerable to automation — and why?",
            "Whose responsibility is it to prepare people for AI-driven change — government, employers, or individuals?",
        ],
        "class_task": (
            "Future-job task map (Gemini): each student names a career they're considering and asks Gemini to list its "
            "main 10–15 tasks, then labels each as 'AI can largely do this' or 'stays human'. They critique Gemini's "
            "labels against the lesson (does it over-claim, like the 2016 'radiologists replaced in 5 years' "
            "prediction?), then write a short plan naming the two human-strength tasks they'll deliberately build — "
            "applying the centaur idea that the durable skill is collaboration, not delegation or defiance."
        ),
        "differentiation": (
            "Support: provide the six classify tasks pre-sorted for one example and have students do the rest before "
            "Gemini. Stretch: students research the Klarna reversal (FT 2025) and the WEF 2025 fastest-rising skills, "
            "and argue which single skill they'd most invest in and why."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of the future-job task map and human-strength plan; the in-course quiz "
            "(AI automates specific tasks within jobs, changing roles rather than eliminating them entirely)."
        ),
        "notes": (
            "The figures (30% McKinsey, 300M Goldman, WEF 2025) and the Klarna/radiology examples come from the slide "
            "sources — present them as estimates, not certainties, and keep the honest 'nobody knows exactly' framing. "
            "The Anthropic Economic Index is one of the cited task-level sources; if students ask about model names, "
            "the current leaders are GPT-5.x, Claude Opus 4.8 / Sonnet 4.6 and Gemini 3.x, but the teaching point is "
            "about tasks, not brands."
        ),
    },
    # ===================================================================
    {
        "id": 127,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "AI & Privacy",
        "big_idea": "If a free app is the product, your data is what's being sold — a "
                    "typical app shares with nine third parties within a minute of "
                    "opening, and most of that data now feeds AI pipelines you never "
                    "knowingly agreed to. Some data (biometric, genetic, location, "
                    "behavioural) is high-stakes because it's permanent or deeply "
                    "revealing, and 'anonymous' data is often reversible.",
        "objectives": [
            "Describe the four main categories of data AI systems collect and why.",
            "Explain why biometric, genetic, location and behavioural data are high-stakes if leaked.",
            "Explain why 'anonymised' aggregate data can still re-identify people (the Strava case).",
            "State your rights under UK GDPR and audit your own app permissions.",
        ],
        "vocab": [
            ("Behavioural data", "Scroll speed, pauses, hovers, what makes you stop — builds an intimate psychological profile."),
            ("Biometric data", "Face, voice, fingerprint, iris — 'special category' under UK GDPR; you can't change it if it leaks."),
            ("Profiling", "Inferring your politics, health, finances or orientation from signals you didn't realise revealed them."),
            ("Function creep", "Data collected for one purpose quietly reused for another (loyalty data sold to insurers)."),
            ("Re-identification", "Recombining 'anonymous' data until patterns expose individuals — as in the Strava heatmap."),
            ("UK GDPR rights", "Subject access (see), rectification (correct), erasure (delete) and the right to object to profiling."),
            ("Scraping", "Harvesting public photos/data without consent — e.g. Clearview's ~30bn faces (£7.5m ICO fine)."),
        ],
        "resources": [
            ("Course slides — Lesson 127 'AI & Privacy'", "Removes course, Unit 5"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Norton — What Information Do Apps Collect? (2023)", "https://us.norton.com/blog/privacy/what-information-do-apps-collect"),
            ("Source: UK ICO — Guide to the UK GDPR", "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"),
            ("Source: UK ICO (May 2022) — Clearview AI enforcement action", "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2022/05/ico-fines-facial-recognition-database-company-clearview-ai-inc/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: your phone knows your location every 5 minutes, your sleep, who you talk to and which posts make "
             "you anxious enough to keep scrolling. The average device runs 40+ apps transmitting data, and Norton "
             "(2023) found a typical app shares with 9 third parties within a minute of opening. The UK ICO fined "
             "Clearview £7.5m for scraping 30bn photos. Land the callout: if you're not paying, you are what's being sold."),
            ("Main teaching — What's collected & the risks", "11 min",
             "Teach 'What Data AI Systems Collect': location (reveals home, work, clinics, religion), behavioural "
             "(arguably more intimate than anything you'd write), biometric ('special category', explicit consent "
             "required), and why (products, ads, training AI, selling to brokers) — all under UK GDPR's lawful-basis "
             "rules the ICO finds companies stretching. Then 'Privacy Risks': profiling (Cambridge Analytica — 270,000 "
             "consents profiled 87 million), manipulation (Matz et al. PNAS 2017: targeted ads up to 40% more clicks), "
             "data breaches (23andMe 2023, ~7M users' genetic data), function creep, and surveillance."),
            ("Activity — How risky if it leaks? + permission audit (Gemini)", "12 min",
             "Run the classify widget: sort data types into 'high-stakes — hard or impossible to undo' (fingerprint/face "
             "scan; precise location history; genetic data; behavioural profile) versus 'lower-stakes — changeable or "
             "trivial' (one account password; favourite film). Then the app-permission audit: in the notes box, list "
             "3 apps with location access (do they need it?), any with mic/camera, one permission to revoke now. In "
             "Gemini, ask it to explain UK GDPR subject-access and erasure rights in plain English, and critique its "
             "accuracy."),
            ("Case study — Clearview AI", "5 min",
             "Teach the Clearview case: ~30bn faces scraped from public profiles, sold to police; the ICO fined it "
             "£7.5m (2022) and ordered deletion; Clearview won a 2023 jurisdiction appeal but the Upper Tribunal "
             "reinstated the ICO's power to fine in 2025 — AI law decided in real time. Italy, France, Greece and "
             "Australia ruled it unlawful; the EU AI Act bans untargeted scraping. Point: any public photo of you can "
             "become part of such systems, without consent."),
            ("Scenario — The Strava heatmap", "5 min",
             "Run the 2018 Strava case: an 'anonymous' heatmap of 27M users' runs accidentally mapped classified "
             "military bases via soldiers jogging with phones. Discuss what made the leak possible and what it tells us "
             "about 'anonymised data'; reveal that aggregate patterns can expose what no single point could, which is "
             "why UK GDPR treats re-identifiable data as personal data."),
            ("Plenary — Exit ticket", "2 min",
             "'Why is biometric data more sensitive than a password?' Target: you cannot change your face or "
             "fingerprints if they leak — that's why they're 'special category' data under UK GDPR requiring explicit consent."),
        ],
        "discussion": [
            "If 'anonymous' aggregate data unmasked secret military bases (Strava 2018), is anonymisation ever a real protection — and what should change?",
            "Most people never exercise their UK GDPR rights to see, correct or delete their data. Why not, and should those rights be made easier to use by default?",
            "Clearview scraped public photos without consent and several countries ruled it unlawful. Should it be illegal to train AI on anything posted publicly online?",
        ],
        "class_task": (
            "Know-your-rights brief (Gemini): students ask Gemini to explain, in plain English, the four UK GDPR rights "
            "relevant to them (subject access, rectification, erasure, objecting to profiling) and how to make a "
            "subject-access request. They fact-check its answer against the ICO summary, flag anything oversimplified "
            "or wrong, then write a short permission-audit plan for their own phone (one permission to revoke, one app "
            "to question). Grounded in the lesson's 'audit your app permissions' activity."
        ),
        "differentiation": (
            "Support: provide the six classify items pre-printed and a glossary card of the four data categories before "
            "the activity. Stretch: students research the Cambridge Analytica or 23andMe case and explain the "
            "mechanism — how a small number of consents (or one breach) exposed millions, linking to profiling and "
            "function creep."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality and accuracy of the GDPR rights brief; the in-course quiz (why "
            "biometric data is more sensitive than a password → you cannot change your face or fingerprints if leaked, "
            "so it's 'special category' data requiring explicit consent)."
        ),
        "notes": (
            "Cite figures from the slide sources: 40+ apps, 9 third parties (Norton 2023), £7.5m Clearview fine, ~7M "
            "23andMe users, Matz 2017's 40%/50% targeting uplift. Note the Clearview legal position is live (2025 "
            "Upper Tribunal) — frame it as ongoing. Keep the framing empowering (you have rights and can act), not "
            "fatalistic, and remind students not to enter any real personal data into Gemini during the task."
        ),
    },
    # ===================================================================
    {
        "id": 128,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "Regulation & Control",
        "big_idea": "The world's major powers are taking fundamentally different — and "
                    "diverging — approaches to AI: the EU regulates by risk tier to "
                    "protect citizens, the US deregulates to accelerate competition, the "
                    "UK relies on existing regulators with no specific AI law yet, and "
                    "China regulates for state control. The live debate isn't whether to "
                    "regulate, but how to regulate well.",
        "objectives": [
            "Explain the EU AI Act's four risk tiers and its extraterritorial reach.",
            "Compare the EU, US, UK and Chinese approaches to AI regulation.",
            "Classify real AI systems into the correct EU AI Act risk tier.",
            "Evaluate the trade-offs of stricter versus looser AI rules.",
        ],
        "vocab": [
            ("EU AI Act", "The world's first comprehensive AI law — risk-tiered, up to €35M fines, in force from 2025."),
            ("Risk tiers", "Banned (unacceptable) / high-risk / limited / minimal — obligations scale with risk."),
            ("Unacceptable risk", "Banned uses: social scoring, real-time public biometric surveillance, workplace emotion recognition."),
            ("High-risk", "AI in hiring, lending, justice, education — must meet safety, transparency and audit standards."),
            ("Extraterritorial reach", "The Act applies to any AI used in the EU, even if the maker is in the US or UK."),
            ("Deregulation", "The US post-2025 approach — prioritising AI competitiveness over consumer-protection rules."),
            ("Existing-regulator model", "The UK approach — ICO, Ofcom and the FCA apply current law, with no AI Act yet."),
        ],
        "resources": [
            ("Course slides — Lesson 128 'Regulation & Control'", "Removes course, Unit 5"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: European Commission — AI Act (official text, in force Aug 2024)", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"),
            ("Source: EU AI Act Article 5 (prohibited practices)", "https://artificialintelligenceact.eu/article/5/"),
            ("Source: UK Government — AI Opportunities Action Plan (Jan 2025)", "https://www.gov.uk/government/publications/ai-opportunities-action-plan"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: the EU AI Act became the world's first comprehensive AI law, banning the highest-risk uses from "
             "February 2025 (459 pages, up to €35M fines). The US took the opposite path — Trump revoked Biden's AI "
             "safety order on day one (Jan 2025). The UK announced £14bn investment but no specific AI law. Four "
             "powers, four approaches — and diverging, not converging. Land the callout summarising each philosophy."),
            ("Main teaching — Risk tiers & four philosophies", "10 min",
             "Teach 'The EU AI Act — Four Risk Tiers': banned (social scoring, real-time public biometric surveillance, "
             "workplace emotion recognition), high-risk (hiring, lending, justice, education — must meet standards "
             "before use), limited (chatbots and deepfake generators must be labelled), minimal (spam filters, game "
             "AI). Stress the extraterritorial reach. Then 'Four Countries, Four Philosophies': EU (risk-based, big "
             "fines, rights-focused), US post-2025 (deregulated), UK (£14bn, existing regulators — ICO/Ofcom/FCA — with "
             "a broader bill expected after the 2026 King's Speech), China (deepfake-labelling and generative rules, "
             "but heavy state surveillance)."),
            ("Activity — Tier-sort six real systems (classify + Gemini)", "12 min",
             "Run the classify widget: students place eight real systems into Banned / High-risk / Limited / Minimal — "
             "live shopping-centre facial recognition (banned, Art. 5); a bank mortgage decision (high-risk, Annex "
             "III); AI grading A-level mocks (high-risk — recall the 2020 UK A-level algorithm scandal); a "
             "delivery-times chatbot (limited, must disclose it's AI); a deepfake generator (limited, must label "
             "output); a Gmail spam filter (minimal); workplace emotion recognition (banned); government social "
             "scoring (banned). In Gemini, students justify two borderline cases and check Gemini's tiering against "
             "the Act."),
            ("Scenario — The AI recruitment startup", "5 min",
             "Run the recruitment-startup scenario: your CV-ranking tool ranks women 12% lower, with Series A next "
             "week. Vote on the three strategies; reveal that launching in the US first led to class actions exceeding "
             "the funding, disclosing bias in the T&Cs didn't make it lawful under the Equality Act 2010, but pausing "
             "to fix the bias and pursue EU compliance became the strongest sales pitch and won an NHS contract."),
            ("Discussion — Think & discuss", "6 min",
             "Use the slide's questions: who should set AI rules — governments, tech firms, independent experts or "
             "international bodies? If an AI decision harms you, who should be legally responsible? Should the UK have "
             "stricter or looser rules than the EU, and what are the real trade-offs?"),
            ("Plenary — Exit ticket", "2 min",
             "'What is the EU AI Act's approach to facial recognition in public spaces?' Target: real-time facial "
             "recognition in public is banned, with narrow exceptions for serious crime."),
        ],
        "discussion": [
            "Who should set the rules for AI — elected governments, tech companies, independent experts, or international bodies?",
            "If an AI system makes a decision that harms you (rejects your job application, flags you incorrectly), who should be legally responsible?",
            "Should the UK have stricter or looser AI rules than the EU? What are the real trade-offs either way?",
        ],
        "class_task": (
            "Regulator's tiering report (Gemini): in pairs, students choose two of the borderline systems from the "
            "tier-sort and ask Gemini which EU AI Act tier each falls into and why. They check Gemini's answer against "
            "the Act's Article 5 (banned) and Annex III (high-risk), correct any errors, and write a short report "
            "recommending which approach — EU, US or UK — they'd want applied to that system in Britain, with reasons. "
            "Grounded in the lesson's risk-tier framework."
        ),
        "differentiation": (
            "Support: provide the four tiers with one example each, and have students sort the clearest cases before "
            "the borderline ones. Stretch: students compare the EU and UK approaches in depth and argue, with "
            "trade-offs, whether the UK should pass an EU-style AI Act or stick with the existing-regulator model."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); accuracy of the tier-sort and the tiering report; the in-course quiz (EU AI Act "
            "on public facial recognition → real-time facial recognition in public is banned, with narrow exceptions "
            "for serious crime)."
        ),
        "notes": (
            "Keep the four-country comparison current and non-partisan: the slides note the UK's broader AI bill is "
            "expected after the 2026 King's Speech following the Oct 2025 'Blueprint for AI regulation' — present this "
            "as the live state of play. Use Article 5 (banned) and Annex III (high-risk) for the tier-sort rationale, "
            "and link the A-level-grading example to the real 2020 UK algorithm scandal so the high-risk tier feels concrete."
        ),
    },
    # ===================================================================
    {
        "id": 129,
        "unit": "Unit 5: AI, Society & Ethics",
        "ailit": "Engage with AI",
        "title": "AI Ethics in Action",
        "big_idea": "AI ethics isn't a philosophy debate — it's real decisions someone "
                    "has to make before a product ships, with real consequences. No "
                    "single ethical test answers every case (MIT's Moral Machine found "
                    "answers vary by culture), so good practice uses several frameworks "
                    "together; and responsibility never disappears just because a machine "
                    "was involved.",
        "objectives": [
            "Explain why responsibility for AI harm rests with humans, and how it's distributed across developer, deployer and user.",
            "Apply five ethical frameworks (consequentialism, rights-based, fairness, dignity, virtue) to an AI case.",
            "Analyse a real case (COMPAS) where overall accuracy hid unequal error patterns.",
            "Argue a reasoned ethical position that treats the opposing view fairly.",
        ],
        "vocab": [
            ("Consequentialism", "Judge by outcomes — does the system produce better results on average?"),
            ("Rights-based (deontology)", "Some things shouldn't be done even for good outcomes (the basis for Article 5 bans)."),
            ("Fairness / distributive justice", "Are errors distributed equitably, or do they fall on certain groups (COMPAS)?"),
            ("Human dignity & autonomy", "High-stakes, irreversible decisions may warrant a meaningful human in the loop."),
            ("Virtue ethics", "Not 'what rule applies?' but 'what kind of person or company do we want to be?'"),
            ("Human-in-the-loop", "Genuine human oversight of an AI decision — engaging, not rubber-stamping."),
            ("Moral Machine", "MIT's 40-million-decision study showing crash-choice ethics vary by culture (Awad et al., 2018)."),
        ],
        "resources": [
            ("Course slides — Lesson 129 'AI Ethics in Action'", "Removes course, Unit 5"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Awad et al. (2018) — The Moral Machine experiment (Nature)", "https://www.nature.com/articles/s41586-018-0637-6"),
            ("Source: Angwin, Larson, Mattu & Kirchner (2016) — Machine Bias / COMPAS (ProPublica)", "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"),
            ("Source: State v. Loomis (2016) — Wisconsin Supreme Court decision summary", "https://scholar.harvard.edu/files/mlamadrid/files/state_v._loomis.pdf"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: MIT's 'Moral Machine' collected 40 million decisions from millions of people across 233 countries "
             "on who a self-driving car should save in unavoidable crashes — and answers varied wildly by culture. "
             "There's no universal right answer, yet an engineer still has to ship a car that does something. Land the "
             "callout: AI ethics isn't a philosophy exercise — it's a decision somebody has to make before the product ships."),
            ("Main teaching — Responsibility & five frameworks", "10 min",
             "Teach 'Who's Responsible When AI Fails?': the developer (negligent testing? clear limits?), the "
             "deploying organisation (trained staff? understood limits?), the professional who relied on it (expertise "
             "to evaluate?), and the principle that responsibility must rest with humans. Then the five frameworks: "
             "consequentialism (outcomes), rights-based (some things shouldn't be done — basis for Article 5 bans), "
             "fairness (COMPAS passed overall accuracy but failed by race), human dignity & autonomy (a human in the "
             "loop for irreversible decisions), and virtue ethics (what kind of company do we want to be?). Stress: "
             "good ethics uses all five together."),
            ("Activity — Work the COMPAS case (factcheck widget + Gemini)", "12 min",
             "Work the COMPAS recidivism widget: hundreds of US courts use it; ProPublica (2016) found Black defendants "
             "roughly twice as likely to be wrongly flagged high-risk. Students answer the three questions (why both "
             "equal-accuracy and unequal-error claims matter and which matters more to the defendant; what the system "
             "actually learns if trained on arrest data from over-policed areas; which single reform they'd introduce). "
             "Reveal: two true things coexist (equal overall accuracy AND unequal error pattern), arrest data encodes "
             "policing not crime, the State v. Loomis appeal failed, and some states (e.g. Idaho 2019) removed the "
             "trade-secret defence. In Gemini, students test one framework against the case and critique its reasoning."),
            ("Scenario — The medical AI override", "5 min",
             "Run 'The Medical AI Override': you're a junior doctor; the AI (94% accurate on this case) flags a rare "
             "blood condition, but your senior consultant overrides it and the patient wasn't told AI was involved. "
             "Vote on the three choices; reveal that respectfully raising the AI's track record and asking him to "
             "reconsider or document led to a confirmatory test and the right outcome — overriding wasn't needed; "
             "engaging was."),
            ("Discussion — Think & discuss", "6 min",
             "Use the slide's questions and the responsibility theme: who bears responsibility when an AI sentencing "
             "tool produces a biased outcome, and which framework best captures the harm? Should high-stakes decisions "
             "always keep a human in the loop?"),
            ("Plenary — Exit ticket", "2 min",
             "'A judge uses an AI tool to help decide sentences. Who bears moral responsibility if it's biased?' "
             "Target: the humans involved — the developers who built it and the judge who used it without adequate scrutiny."),
        ],
        "discussion": [
            "A medical-screening AI saves 1,000 lives but misses 10. A consequentialist says it passes — is that enough, and what would a rights-based or dignity view say?",
            "COMPAS had similar overall accuracy across races but unequal error patterns. Why is 'fairness' not a single metric, and which definition should the courts use?",
            "For high-stakes, irreversible decisions (prison, deportation, child protection), should a meaningful human always be in the loop — even if the AI is statistically more accurate?",
        ],
        "class_task": (
            "Ethical-lens stress test (Gemini): students pick one case from the unit (COMPAS, Clearview, the Dutch "
            "childcare scandal, or the medical override) and ask Gemini to argue it from two of the five frameworks — "
            "e.g. consequentialism versus rights-based. They critique whether Gemini applies each framework correctly, "
            "note where the two lenses disagree, and write a one-paragraph position stating which they find more "
            "convincing and why. This previews the Unit 5 Ethical Position Paper assessment."
        ),
        "differentiation": (
            "Support: provide the five frameworks on cue-cards with a one-line prompt each, and apply two of them to "
            "the medical-override scenario as a class first. Stretch: students take the genuinely strongest "
            "counter-argument to their own COMPAS verdict and answer it with nuance, as required for the 'Exceptional' "
            "rubric band in the unit assessment."
        ),
        "assessment": (
            "Exit-ticket answer (AfL); quality of framework application in the COMPAS work and the Gemini stress test; "
            "the in-course quiz (responsibility for a biased AI sentencing tool → the humans involved: the developers "
            "who built it and the judge who used it without adequate scrutiny). This is the final Unit 5 lesson, "
            "leading into the Unit 5 recap and the 300–500 word Ethical Position Paper."
        ),
        "notes": (
            "Cite the Moral Machine (Awad et al., Nature 2018), COMPAS (ProPublica 2016) and State v. Loomis (Wisconsin "
            "2016) accurately. The key subtlety to land: COMPAS could be equally accurate overall AND still harm one "
            "group more — that's why fairness isn't one metric, and why arrest data ('got re-arrested') is not the "
            "same label as 'crime'. Keep the framing that good ethics uses all five lenses and that 'the AI did it' is "
            "never a complete explanation."
        ),
    },
]
