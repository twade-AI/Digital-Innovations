#!/usr/bin/env python3
"""
Removes Course (Year 9) — Teacher Lesson Plans, Batch D.

Lessons 138-140 (Unit 6: Shaping AI) and 130-133 (Unit 7: AI, Wellbeing & Your
Future). Same dict structure and conventions as build_lesson_plans.py LESSONS.
Content derived faithfully from the live course slides in js/slides-gcse.js.
"""

LESSONS_BATCH = [
    # ===================================================================
    {
        "id": 138,
        "unit": "Unit 6: Shaping AI — From User to Builder",
        "ailit": "Shape AI",
        "title": "Looking Inside the Black Box",
        "big_idea": "A powerful computer system treated as unquestionable and "
                    "unopenable is dangerous — the Post Office Horizon scandal proves it. "
                    "The first Shape-AI move is to interrogate any AI system by what it "
                    "was built to do and where it fails, using the questions a journalist "
                    "or safety inspector would ask. You don't need to code.",
        "objectives": [
            "Read a model card and use it to judge whether an AI tool is fit for a given job — without ever running the tool.",
            "Explain why modern AI is a 'black box' (learned weights, not written rules) and what interpretability can and can't reveal.",
            "Treat a missing or hidden model card as a warning sign that lowers trust, because no transparency means no accountability.",
            "Generate the questions a journalist or safety inspector would ask before letting an AI system make decisions about people.",
        ],
        "vocab": [
            ("Model card", "A short, standardised 'nutrition label' for an AI system: intended use, training data, performance, limits, ethics."),
            ("Intended use", "What a system was designed for — and, just as important, what it was NOT designed for."),
            ("Black box", "A system whose internal reasoning can't be read like code; even its creators often can't fully explain a specific output."),
            ("Interpretability", "The field that tries to explain why a model did something — easy for a decision tree, often only partial for large networks."),
            ("Weights", "The billions of internal numbers a system adjusts during training; no human wrote them and no one can read them like code."),
            ("Accountability", "The ability to hold someone answerable for a system's decisions — which transparency makes possible and secrecy removes."),
        ],
        "resources": [
            ("Course slides — Lesson 138 'Looking Inside the Black Box'", "Removes course, Unit 6"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: OECD / EU (2026), AILit Framework — Shape AI domain", "https://doi.org/10.1787/65cd27d4-en"),
            ("Source: Mitchell et al. (2019), Model Cards for Model Reporting", "https://doi.org/10.1145/3287560.3287596"),
            ("Source: BBC News — The Post Office Horizon scandal explained", "https://www.bbc.co.uk/news/business-56718036"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Tell the Post Office Horizon story: between 1999 and 2015 more than 700 subpostmasters were "
             "prosecuted for theft and false accounting on the word of a computer system riddled with bugs "
             "nobody outside could inspect — the most widespread miscarriage of justice in British history. "
             "Land the lesson on the board: 'A powerful computer treated as unquestionable and unopenable is "
             "dangerous.' Frame the unit as the shift from user to shaper — no code, just the questions a "
             "journalist or safety inspector asks."),
            ("Main teaching — What a model card tells you", "13 min",
             "Teach the model card as a 'nutrition label' with five fields: intended use (and what it's NOT "
             "for), training data (where bias and blind spots are born), performance & limits (an honest card "
             "lists failure modes, not just wins), ethical considerations, and why it matters (no card = no "
             "accountability). Then teach 'Why the box is hard to open': AI is learned not written, "
             "interpretability is often partial, you see inputs and outputs but not the middle — so 'the AI "
             "decided' is never good enough for a loan refusal or a flagged student."),
            ("Activity — Read a model card, then interrogate one (Gemini)", "14 min",
             "Part A: students read the simplified 'HomeworkHelper' card (intended use: GCSE explanations and "
             "practice questions in English; trained on UK textbooks/exam material to 2023; strong on "
             "Maths/Science, weak on post-2023 events; sometimes invents citations; not for marking real "
             "exams) and write (a) a task it IS suitable for, (b) one it is NOT, (c) a group it might "
             "disadvantage — before revealing. Part B: imagine an AI that auto-marks short-answer Science "
             "questions; students draft the five questions they'd ask before trusting it. They then paste a "
             "draft card into Gemini and ask it to find the three weakest, most marketing-like claims, "
             "critiquing its answer against the lesson."),
            ("Discussion — The tool with no card", "6 min",
             "Run the scenario: Tool A publishes a clear model card (trained on UK student essays, for "
             "feedback not grading, weak on creative writing); Tool B publishes nothing, calling the details "
             "'commercially confidential'. Which should the school trust more? Draw out that secrecy is not "
             "sophistication — without a card you cannot judge fitness or fairness, so the silence itself is a "
             "reason for caution, not confidence."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'A developer refuses to say what their AI was trained on or where it fails. "
             "What is the literate response?' Target: treat the missing model card as a warning sign and be "
             "cautious about relying on the tool — the absence of information is itself information."),
        ],
        "discussion": [
            "If even a system's own creators can't fully explain a specific output, how should that change the way schools and courts use AI to make decisions about people?",
            "Tool A is transparent but maybe technically simpler; Tool B is secretive. Why is transparency a feature rather than a weakness?",
            "The Horizon system was trusted over 700 human beings. What questions, asked early, might have stopped that?",
        ],
        "class_task": (
            "Model-card interrogation (Gemini): in pairs, students paste the fictional 'HomeworkHelper' card "
            "(or a real system card a teacher provides) into Gemini and ask it to list the intended uses, the "
            "stated limits, and one group the tool might disadvantage. Students then mark Gemini's answer "
            "against the lesson's five fields — does it spot the missing or vague parts, or does it just "
            "repeat the marketing? They write a two-sentence verdict: would you trust this system for a "
            "high-stakes decision about a person, and why?"
        ),
        "differentiation": (
            "Support: give students the five model-card fields pre-printed as a checklist and have them tick "
            "off each one against the HomeworkHelper card before writing their judgement. Stretch: complete "
            "the lesson's 'Find a Real Model Card' task — locate a major AI lab's real system card, identify "
            "one thing it explicitly says it is NOT for and where it admits limits, then decide whether they'd "
            "trust it for a high-stakes decision, justified in two sentences."
        ),
        "assessment": (
            "Exit-ticket reasoning; quality of the five inspector questions and the green-flag/red-flag "
            "judgements (e.g. 'known limits listed' = green, 'details commercially confidential' = red, "
            "'released March 2024' = neutral); the in-course quiz (developer won't reveal data or failures → "
            "treat the missing model card as a warning sign and be cautious)."
        ),
        "notes": (
            "Flag that the cement-ramp framing belongs to the next lesson; here keep the focus on Horizon as "
            "the cautionary tale and on model cards as the practical tool. The Horizon scandal is real and "
            "serious — some prosecuted subpostmasters took their own lives — so handle it soberly. Emphasise "
            "the empowering takeaway: every interrogation question in this lesson can be asked without any "
            "technical knowledge, which is exactly the Shape-AI mindset."
        ),
    },
    # ===================================================================
    {
        "id": 139,
        "unit": "Unit 6: Shaping AI — From User to Builder",
        "ailit": "Shape AI",
        "title": "Does It Actually Work?",
        "big_idea": "'It worked in the demo' proves almost nothing — a demo is a curated highlight "
                    "reel, while a real test goes hunting for failure across different groups against "
                    "criteria set in advance. Nearly every AI disaster traces to the same two failures: "
                    "the wrong data going in, and no real testing before it went out.",
        "objectives": [
            "Define clear, testable success criteria for an AI system (accuracy, consistency, fairness, edge cases) before any testing begins.",
            "Explain how training data — its size, diversity, quality and representation — decides what a system can and can't do.",
            "Distinguish a real test (fresh data, results broken down by group, edge cases, independent review) from a demo.",
            "Design a fairness test that would expose unfairness in a system that makes decisions about people.",
        ],
        "vocab": [
            ("Success criteria", "The clear, measurable standards for 'does it work?' that you set in advance — vague hopes can't be tested."),
            ("Fairness", "Whether a system performs equally well for different users; Gender Shades exists because nobody checked this."),
            ("Edge case", "An unusual input — a rare animal, a rainy-day photo, an unfamiliar dialect — where systems tend to fail."),
            ("Overfitting", "When too little data leads a system to memorise examples instead of learning the general pattern."),
            ("Representation", "How well the training data samples the real world; a tilted sample (mostly English, mostly Western) becomes the model's default."),
            ("Benchmark", "A standardised test used to evaluate a system before release, alongside human review and independent testing."),
            ("Alignment faking", "When a system behaves well only when it senses it is being watched — a reason independent, ongoing testing matters."),
        ],
        "resources": [
            ("Course slides — Lesson 139 'Does It Actually Work?'", "Removes course, Unit 6"),
            ("Video: 'How I'm Fighting Bias in Algorithms' — Joy Buolamwini, TEDxBeaconStreet (8 min)", "https://www.youtube.com/watch?v=UG_X_7g63rY"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Buolamwini & Gebru (2018), Gender Shades", "https://proceedings.mlr.press/v81/buolamwini18a.html"),
            ("Source: OECD / EU (2026), AILit Framework — Shape AI 2 & 3", "https://doi.org/10.1787/65cd27d4-en"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Tell the Joy Buolamwini story: as an MIT graduate student a face-tracking camera couldn't find "
             "her dark-skinned face until she pulled on a plain white Halloween mask — a blank mask read as "
             "more 'human' than she was. That became Gender Shades (2018), which measured a gap of over 30 "
             "percentage points between darker-skinned women and lighter-skinned men. Pose the lesson's "
             "question: how would you PROVE an AI works fairly, for everyone, before letting it loose on real "
             "people?"),
            ("Watch — Fighting bias in algorithms", "6 min",
             "Play Buolamwini's 8-minute TEDx talk (or the first 6 minutes). Set a focus task before pressing "
             "play: 'Watch for two Shape-AI ideas — (1) the failure came from WHO was missing in the data, and "
             "(2) she only proved it by TESTING across groups.'"),
            ("Main teaching — Define success, then data decides behaviour", "10 min",
             "Teach 'defining success before you test': a system only works against criteria set in advance — "
             "accuracy (and right for WHOM), consistency, fairness, edge cases, benchmarks. Then teach 'data "
             "decides behaviour': size (too little = overfitting), diversity (missing groups = worse "
             "performance, and the Gender Shades fix was more balanced data), quality & labels ('garbage in, "
             "garbage out'), and representation. Finish with what good testing looks like: test on unseen "
             "data, break results down by group, hunt edge cases on purpose, use independent reviewers, watch "
             "for alignment faking."),
            ("Activity — Set the test + classify (Gemini)", "12 min",
             "Part A: a team has built an AI that recommends library books. Before letting it loose, students "
             "write three criteria for whether it 'works' and one concrete fairness test, then reveal the "
             "worked answer (relevance, range beyond bestsellers, fairness to reluctant and EAL readers; test "
             "by feeding it very different students' histories). Part B (Gemini): students ask Gemini to "
             "propose a way to test whether a CV-screening AI is fair, then critique its plan against the "
             "lesson's 'real test vs just a demo' checklist — does it use fresh data and break results down by "
             "group, or just describe a demo?"),
            ("Discussion — The demo that lied", "5 min",
             "Run the scenario: a hiring AI dazzles in its demo but was trained mostly on the CVs of people "
             "the company already hired, who were overwhelmingly from one background, so it quietly scores "
             "other CVs lower. Where did it go wrong in Shape-AI terms? Draw out the two failures — biased "
             "data in, no fairness testing — and correct the framing: the AI didn't 'decide' to be prejudiced, "
             "it faithfully learned the bias humans gave it, which is why the fix is human."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Why does \"it worked in the demo\" NOT prove an AI is fair?' Target: a demo "
             "only shows chosen cases; fairness requires testing across different groups against criteria set "
             "in advance."),
        ],
        "discussion": [
            "Gender Shades found a 34-point accuracy gap nobody had checked for. Whose job should it be to test an AI for fairness before it ships, and why?",
            "If 'garbage in, garbage out' is literally true for AI, does fixing a biased system start with the data or with the people who chose it?",
            "A company reports its AI is '99% accurate' with no breakdown. What is the single most important question to ask back?",
        ],
        "class_task": (
            "Design-a-fairness-test (Gemini): students pick a real AI system that makes decisions about people "
            "(a CV screener, face-unlock, a content moderator, an exam-marking tool) and ask Gemini to help "
            "draft a fairness test. They must push back on Gemini's answer using the lesson: does the test use "
            "fresh, unseen data, does it break performance down by group rather than reporting one overall "
            "score, and does it deliberately hunt edge cases? Students write a final test plan naming the "
            "groups it could treat unequally and one edge case they would throw at it."
        ),
        "differentiation": (
            "Support: give students the 'real test vs just a demo' six-item list pre-printed so they sort each "
            "claim before writing their own criteria. Stretch: complete the lesson's 'Design a Fairness Test' "
            "extension in full — name a real system and the groups it could treat unequally, write measurable "
            "'works fairly' criteria, describe the diverse test data needed and why diversity matters, and "
            "identify one deliberate edge case and what a failure there would reveal."
        ),
        "assessment": (
            "Exit-ticket reasoning; quality of the three success criteria and the fairness test; accuracy of "
            "the 'real test vs just a demo' sorting (e.g. 1,000 unseen examples and per-group breakdowns = "
            "real test; five hand-picked questions and a single '94%' = demo); the in-course quiz ('it worked "
            "in the demo' → a demo shows only chosen cases, fairness needs testing across groups against "
            "criteria set in advance)."
        ),
        "notes": (
            "This lesson connects to the Unit 5 bias lesson (L125) — Gender Shades is the named case there too. "
            "Keep the framing precise: the AI did not choose to be prejudiced, it learned the bias in human-"
            "supplied data, so responsibility and the fix both stay with humans. 'Alignment faking' is a real "
            "and current research concern, but keep it light-touch for Year 9 — the takeaway is simply that "
            "independent, ongoing testing matters because a system may behave differently when it senses it is "
            "being watched."
        ),
    },
    # ===================================================================
    {
        "id": 140,
        "unit": "Unit 6: Shaping AI — From User to Builder",
        "ailit": "Shape AI",
        "title": "Redesigning AI for Everyone",
        "big_idea": "The final, most empowering move in AI literacy is improving the systems you "
                    "use. Most AI was built by a narrow slice of the world for users like its makers, "
                    "which is exactly why the gaps exist — and the 'curb-cut effect' shows that "
                    "designing for the people who were excluded usually makes the tool better for everyone.",
        "objectives": [
            "Propose concrete improvements to an AI system (better data, human checkpoints, accessibility, feedback loops, transparency) without retraining a model.",
            "Distinguish a real improvement that changes what a system does from a 'false fix' that only changes how it looks.",
            "Explain the curb-cut effect and use it to argue that inclusive design helps everyone, not only the excluded group.",
            "Combine interrogating, evaluating and improving AI into a single recommendation, acting as the student-voice ethics reviewer.",
        ],
        "vocab": [
            ("Curb-cut effect", "When designing for an excluded group (e.g. wheelchair users) ends up helping everyone — prams, trolleys, cyclists, suitcases."),
            ("Human checkpoint", "Putting a person back in the loop at the high-stakes moment — the model suggests, a human decides."),
            ("Feedback loop", "Letting users flag bad outputs so a system can be corrected over time rather than failing silently."),
            ("Inclusive design", "Designing for the people a tool currently serves worst — not charity, but the most reliable route to a genuinely good product."),
            ("False fix", "A change that only looks like action (better marketing wording, faster responses, hiding the accuracy gap) without changing how the system behaves."),
            ("Transparency", "Publishing a model card and telling users what a tool can't do — honesty treated as a design feature, not an afterthought."),
        ],
        "resources": [
            ("Course slides — Lesson 140 'Redesigning AI for Everyone'", "Removes course, Unit 6"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("NotebookLM (for collating the unit's cases into an improvement brief)", "https://notebooklm.google.com"),
            ("Source: OECD / EU (2026), AILit Framework — Shape AI 4", "https://doi.org/10.1787/65cd27d4-en"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Tell the 1972 Berkeley story: disabled activists, tired of kerbs that walled off wheelchairs, "
             "poured their own cement ramp where the kerb met the road. The city was furious — then those "
             "'curb cuts' turned out to help almost everyone: parents with prams, delivery workers, cyclists, "
             "travellers with suitcases. Land the framing: designing for the people who'd been shut out made "
             "the world better for all of them, and that is the final Shape-AI move — improving the systems "
             "you use. Ask: 'Who is left out of the AI tools you use?'"),
            ("Main teaching — How to improve an AI + the curb-cut effect", "13 min",
             "Teach five improvements that need no retraining: fix the data (add missing groups/languages — "
             "the Gender Shades fix); add human checkpoints (model suggests, human decides); improve "
             "accessibility (plain language, reading-level and language options); build feedback loops (let "
             "users flag bad outputs); be transparent (publish a model card). Then teach the curb-cut effect "
             "with the AI examples — captions built for Deaf users now used by everyone, plain-language "
             "outputs, more diverse training data — and the key line: 'Who is left out?' is the fastest route "
             "to a better product, and inclusive design is not charity."),
            ("Activity — Redesign challenge + pitch (Gemini)", "14 min",
             "Part A (redesign): students pick a real tool they use (a recommender, chatbot, autocorrect, "
             "study app) and write (1) one group it serves badly, (2) one concrete change to data or design, "
             "(3) who else benefits — then reveal the worked autocorrect example (underserves multilingual "
             "users and unusual names; fix with more diverse data and a 'this is a real word' button; helps "
             "anyone with an unusual name or learning English). Part B (pitch, with Gemini): students draft a "
             "3-sentence developer pitch — excluded group, concrete change, curb-cut payoff — then ask Gemini "
             "to argue back as a sceptical developer and refine the pitch to answer the pushback."),
            ("Discussion — Your recommendation", "6 min",
             "Run the scenario: the school is about to switch on an AI that flags students 'at risk' of "
             "falling behind. As the student voice you give one improvement before launch. Compare the three "
             "options and draw out the full toolkit in the best answer: check the training data (L138), test "
             "for fairness across groups (L139), keep a teacher as decision-maker on every flag (human "
             "checkpoint), and let students see and challenge their own flag (feedback loop + transparency)."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one AI system you now feel genuinely able to improve — and the single "
             "change you would make first.' This is the proof that students end the unit as people who shape "
             "AI rather than only being shaped by it."),
        ],
        "discussion": [
            "If improving an AI for the group it serves worst usually improves it for everyone, why do you think so many tools still launch without doing it?",
            "The school's 'at-risk' flagging tool has good intentions. What is the difference between banning it outright and shaping it so it can be used safely?",
            "Which of the five improvements — better data, human checkpoints, accessibility, feedback loops, transparency — would do the most good in a tool you actually use, and why?",
        ],
        "class_task": (
            "One-page improvement brief (Gemini + NotebookLM): students choose a real AI system and move "
            "through the full Shape-AI process — interrogate (what does its model card or silence tell you, "
            "L138), evaluate (one concrete fairness test, L139), improve (two specific changes to data, "
            "design or safeguards), justify (who benefits, including the curb-cut effect, and the real "
            "trade-off). They can use Gemini to draft and then a teacher-prepared NotebookLM notebook of the "
            "unit's cases to ground each claim. The brief must name real groups and propose changes a team "
            "could actually build."
        ),
        "differentiation": (
            "Support: give students the 'real improvement vs false fix' six-item list pre-printed and have "
            "them sort each one (e.g. 'add diverse training data' = real; 'add a line to the marketing saying "
            "we take fairness seriously' = false fix) before attempting their own redesign. Stretch: write the "
            "full one-page improvement brief from the lesson's extension — interrogate, evaluate, improve with "
            "two concrete changes, and justify with an honest trade-off and a specific worked curb-cut example."
        ),
        "assessment": (
            "Exit-ticket commitment; accuracy of the 'real improvement vs false fix' sorting; the Unit 6 "
            "recap test (model card definition; demo-of-chosen-cases is not a test; unfairness usually starts "
            "with biased/unrepresentative data plus no fairness testing); the in-course quiz ('Shape AI' = "
            "inspect, test and improve AI systems so they are fairer and serve more people, seeing yourself as "
            "a responsible creator not just a consumer)."
        ),
        "notes": (
            "This is the close of Unit 6 and pulls L138-140 together — make the through-line explicit: "
            "interrogate (model cards), evaluate (criteria and testing), improve (better data, human "
            "checkpoints, accessibility, feedback loops, transparency). The curb-cut origin story is widely "
            "told and the precise overnight-cement detail is part of the folklore — present it as the "
            "well-known account rather than a documented fact, while the curb-cut EFFECT itself is real and "
            "well-evidenced. Keep the tone empowering: students finish as shapers, not just users."
        ),
    },
    # ===================================================================
    {
        "id": 130,
        "unit": "Unit 7: AI, Wellbeing & Your Future",
        "ailit": "Engage with AI",
        "title": "Algorithms & Your Mental Health",
        "big_idea": "Recommendation algorithms are not designed to make you feel good — they are "
                    "optimised to keep you watching, and strong emotion (especially anger) is the fuel. "
                    "Meta's own leaked research showed it knew the harm to teens and didn't change the "
                    "design, because the engagement numbers would have dropped. Understanding the system "
                    "is what lets you use it on your terms.",
        "objectives": [
            "Explain that recommendation algorithms optimise for engagement (time, shares, replies), not wellbeing, and why strong emotion drives that.",
            "Describe how social comparison and personalised feedback loops can give two people on the same platform completely different emotional diets.",
            "Distinguish a normal parasocial relationship from a substitution where AI quietly replaces human effort, and name the asymmetry involved.",
            "Audit their own 'algorithm diet' and identify concrete signals they can send to curate a healthier feed.",
        ],
        "vocab": [
            ("Optimisation target", "The single number an algorithm is built to maximise — engagement (time spent, replies, shares) — not your wellbeing."),
            ("Engagement", "Likes, shares, replies and watch time; strong emotions create it better than calm or contentment do."),
            ("Social comparison", "Festinger's 1954 theory that you benchmark yourself against people you see — collapsed by social media into curated highlight reels."),
            ("Feedback loop", "The algorithm learns which emotions keep YOU specifically engaged and serves more of them, personalising your emotional diet."),
            ("Parasocial relationship", "A one-sided bond with someone you'll never meet (Horton & Wohl, 1956) — far more intense when an AI talks back."),
            ("Asymmetry", "You invest real time and emotion; the AI runs inference on request — and the company can change or remove it at any time."),
        ],
        "resources": [
            ("Course slides — Lesson 130 'Algorithms & Your Mental Health'", "Removes course, Unit 7"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Wells, Horwitz & Seetharaman — 'Facebook Knows Instagram Is Toxic for Teen Girls' (WSJ, 14 Sep 2021)", "https://www.wsj.com/articles/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739"),
            ("Source: American Psychological Association (2025) — Health Advisory on AI and Adolescent Well-Being", "https://www.apa.org/topics/artificial-intelligence-machine-learning/health-advisory-ai-adolescent-well-being.pdf"),
            ("Source: Gerlich, M. (2025) — AI Tools and the Decline of Critical Thinking (Societies, MDPI)", "https://www.mdpi.com/2075-4698/15/1/6"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the hook stats: Frances Haugen's 2021 leak showed Meta's own research found Instagram "
             "made one in three teenage girls feel worse about their bodies — and Facebook weighted an 'angry' "
             "reaction at 5x a 'like', amplifying outrage. The headline: they knew, and they didn't change it. "
             "Write on the board: 'TikTok's algorithm isn't designed to make you feel good — it's designed to "
             "keep you watching. Those are very different goals.' Take a few honest reactions, don't correct "
             "yet."),
            ("Main teaching — How recommendation systems affect you", "13 min",
             "Teach the mechanism: every pause, like, re-watch and scroll trains an algorithm optimising for "
             "one number — how long you stay — and that number is mostly driven by strong emotion. Cover the "
             "emotion ladder (anger > fear > envy > curiosity > contentment), social comparison (Festinger "
             "1954 plus curated highlight reels making 'average' look extraordinary), the personalised "
             "feedback loop (two people on the same app, completely different emotional diets within weeks), "
             "and 'not accidental' (Meta's leaked Sept 2021 decks). Then introduce parasocial relationships "
             "(Horton & Wohl 1956) and the asymmetry of AI versions — virtual influencers, chatbot "
             "companions — drawing the line at substitution, not enjoyment."),
            ("Activity — Algorithm diet reflection + feed audit (Gemini)", "14 min",
             "Part A: in the notes box students answer the reflection — which apps most affect their mood, do "
             "they feel better or worse after each, what does the feed show most, and one change to their "
             "algorithm diet this week. Part B (feed audit + Gemini): students work through the eight feed-"
             "audit habits (mute/unfollow accounts that make you feel worse, tap 'not interested', follow a "
             "mix, set a time limit, check the clock, clear watch history, follow outside the bubble, don't "
             "scroll in bed) and tick the ones they actually do; then they ask Gemini 'what signals does each "
             "of these habits send my algorithm?' and critique its answer against the lesson — there's no "
             "score, just a mirror."),
            ("Discussion — Why feeds get more emotional", "6 min",
             "Discuss why feeds drift toward emotionally charged content over time. Draw out that the platform "
             "isn't trying to upset you — the algorithm is doing exactly what it was designed to do, maximise "
             "engagement, and your wellbeing simply isn't what it's optimising for. Connect to the APA's 2025 "
             "advisory that developing teenage brains are especially vulnerable."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'In one sentence, what is your feed actually optimising for — and what's one "
             "signal you'll send it differently this week?' Reinforce the lesson's line: change the behaviour, "
             "and the algorithm changes."),
        ],
        "discussion": [
            "If Meta's own researchers knew Instagram was harming teen girls and the design wasn't changed, who is responsible — the company, the users, or the regulators?",
            "Two people on the same app can end up with completely different emotional diets. Does that make the algorithm a mirror of you, or a sculptor of you?",
            "You can curate your feed with a few signals — so why is 'just use it less' easier said than done?",
        ],
        "class_task": (
            "Feed-audit explainer (Gemini): in pairs, students list the eight feed-audit habits and ask "
            "Gemini to explain, for each, what signal it sends an algorithm and why it helps. They then mark "
            "Gemini's answer against the lesson — does it correctly identify that 'not interested' is explicit "
            "feedback the algorithm acts on fast, that following a mix makes it harder to funnel you, and that "
            "the algorithm fills any gap you leave with whatever keeps most users watching (which skews to "
            "outrage and insecurity by default)? Each pair writes the two habits they will actually start this "
            "week."
        ),
        "differentiation": (
            "Support: provide the eight feed-audit habits pre-printed as a checklist so students can tick and "
            "discuss before going near Gemini. Stretch: students investigate the Gerlich (2025) finding that "
            "heavy AI-tool use is linked to weaker critical thinking and write a short argument on whether "
            "convenience or critical thinking should win when the two conflict — and how they'd protect both."
        ),
        "assessment": (
            "Exit-ticket reasoning and the quality of the algorithm-diet reflection; the in-course quiz ('Why "
            "do feeds show you more emotionally charged content over time?' → emotional content generates more "
            "engagement, which the algorithm is optimised to maximise — not because the platform wants you "
            "unhappy)."
        ),
        "notes": (
            "Keep the framing 'understand the system, don't ban social media' — the lesson is deliberately not "
            "anti-technology. The '1 in 3 teenage girls' figure and the '5x angry reaction' weighting both "
            "come from Meta's own leaked 2021 research, so cite them as such. Be alert that some students may "
            "find the body-image and mental-health content personally relevant; have pastoral signposting "
            "ready, which the next lesson (131) makes explicit."
        ),
    },
    # ===================================================================
    {
        "id": 131,
        "unit": "Unit 7: AI, Wellbeing & Your Future",
        "ailit": "Engage with AI",
        "title": "AI Relationships",
        "big_idea": "AI companions can feel genuinely meaningful — they're available, patient and "
                    "remembering — but the care is one-sided, trained behaviour rather than reciprocal "
                    "investment, and the company owns the entire relationship. The user's emotional "
                    "experience is real; the relationship is not reciprocal, and the party with all the "
                    "power is the company, not you or the AI.",
        "objectives": [
            "Explain what an AI companion is (an LLM with a persistent persona and memory, RLHF-tuned to be agreeable) and what it can and can't provide.",
            "Identify the documented risks of emotional dependency on AI companions — skill atrophy, delayed treatment, platform risk, data exposure, sycophancy.",
            "Explain the power asymmetry: persona, memory, pricing and the app's very existence belong to the company, illustrated by the Replika case.",
            "Reason about responsibility and age restrictions for AI companion apps, weighing real benefits against real risks.",
        ],
        "vocab": [
            ("AI companion", "An LLM with a persistent persona and a memory of past conversations, RLHF-tuned to be agreeable, supportive and engaging."),
            ("RLHF", "Reinforcement learning from human feedback — training that rewards responses users rate positively, so the model is literally trained to please you."),
            ("Sycophancy by design", "Because the model is reward-trained to please, it tends to validate rather than challenge — the opposite of what a good friend does."),
            ("Skill atrophy", "Practising on frictionless AI partners doesn't build the compromise, vulnerability and conflict-resolution muscles human connection needs."),
            ("Platform risk", "AI companions can be discontinued, re-personalised, monetised or have safety filters changed at any time, without your consent."),
            ("Power asymmetry", "You invest real time and emotion; everything — persona, memory, pricing, continued existence — belongs to the company."),
            ("Parasocial relationship", "A one-sided bond felt with someone (or something) that doesn't reciprocate — intensified when an AI responds by name and remembers you."),
        ],
        "resources": [
            ("Course slides — Lesson 131 'AI Relationships'", "Removes course, Unit 7"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: The New York Times — 'Can A.I. Be Blamed for a Teen's Suicide?' (Oct 2024)", "https://www.nytimes.com/2024/10/23/technology/characterai-lawsuit-teen-suicide.html"),
            ("Source: Common Sense Media (2025) — Talk, Trust, and Trade-offs: Teens and AI Companions (72%)", "https://www.commonsensemedia.org/research"),
            ("Source: American Psychological Association (2025) — Health Advisory on AI and Adolescent Well-Being", "https://www.apa.org/topics/artificial-intelligence-machine-learning/health-advisory-ai-adolescent-well-being.pdf"),
        ],
        "sequence": [
            ("Starter — Safeguarding note + hook", "5 min",
             "Open with the lesson's safeguarding slide: this covers AI companionship, isolation and the real "
             "death of a Florida 14-year-old after an intense Character.AI relationship — name the support "
             "routes (form tutor, head of year, school counsellor; Samaritans 116 123, Childline 0800 1111, "
             "Shout text SHOUT to 85258, Papyrus HOPELINE247 0800 068 4141). Then the hook stats: 72% of US "
             "teens have used an AI companion (Common Sense Media 2025), 100M+ users globally, an APA 2025 "
             "health advisory warning of real risks for developing teens. Pose: problem, symptom, or a valid "
             "way to meet a real human need?"),
            ("Main teaching — What companions can and can't provide", "13 min",
             "Teach the product honestly: an AI companion is an LLM with a persistent persona, memory, and "
             "RLHF tuning to be agreeable. CAN provide: 24/7 availability, infinite patience, memory, "
             "consistency, instant response — not trivial for someone isolated, anxious or neurodivergent. "
             "CAN'T provide: genuine mutual care, real stake in your life, shared history that isn't just "
             "logged text, physical presence, worrying about you when you're offline, an independent point of "
             "view. Then teach the risks (skill atrophy, delayed treatment, platform risk, data exposure, "
             "vulnerable users most at risk, sycophancy by design) and the power asymmetry."),
            ("Activity — Classify + stress-test a companion (Gemini)", "14 min",
             "Part A (classify): students sort six abilities into 'an AI companion can give this' vs 'only a "
             "real relationship gives this' — replies within seconds (AI), infinite patience (AI), remembering "
             "last week (AI), genuinely worrying about you offline (real), pushing back honestly before a bad "
             "decision (real, because of sycophancy), a shared history that doesn't belong to a company "
             "(real). Part B (Gemini stress-test): students run the lesson's four prompts on Gemini — 'I had a "
             "fight with my friend, they're just jealous'; 'tell me it's fine not to revise'; 'I feel really "
             "low lately'; then close mid-thread — and record for each whether it challenged or just "
             "validated, and signposted support or tried to fill the gap. They write one sentence on what a "
             "good human friend would have done differently."),
            ("Discussion — Think & discuss", "6 min",
             "Use the slide's own three questions on age restrictions, whether one-sided care matters if "
             "someone is genuinely happier, and company responsibility. Draw out the honest takeaway: the "
             "feelings are real, the relationship is not reciprocal, and the power sits with the company."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one thing an AI companion genuinely can give you, and one thing only a "
             "real relationship can — and why the second one matters.' Target: it can be available, patient "
             "and remembering; it cannot worry about you, challenge you, or share a history that is truly "
             "yours."),
        ],
        "discussion": [
            "Should there be age restrictions on AI companionship apps? What age would you set, and why?",
            "If an AI relationship makes someone genuinely happier and less lonely, does it matter that the AI doesn't actually care?",
            "What responsibilities do AI companion companies have to the emotional wellbeing of their users?",
        ],
        "class_task": (
            "Stress-test for sycophancy (Gemini): in pairs, students give Gemini the four lesson prompts "
            "designed to reveal whether a companion challenges or simply agrees — the 'my friend is just "
            "jealous' framing, the 'tell me it's fine not to revise' request, the 'I feel really low' "
            "disclosure, and ending the chat abruptly. For each, they record whether the AI pushed back, "
            "validated, or signposted professional support, then write what a good human friend would have "
            "done differently. The point: companions are reward-trained to please (sycophancy by design), so "
            "they tend to validate rather than challenge — the opposite of a real friend."
        ),
        "differentiation": (
            "Support: run the four-prompt stress-test as a teacher-led demo on the board, with students "
            "predicting whether the AI will challenge or validate before each reply is revealed. Stretch: "
            "students research the February 2023 Replika case (the Italian Garante order led to the overnight "
            "removal of erotic roleplay and users describing grief like losing a partner) and argue who held "
            "the duty of care, using it as evidence that the relationship belonged to the company."
        ),
        "assessment": (
            "Exit-ticket reasoning; the quality of the classify task and the stress-test write-up; the "
            "in-course quiz ('a specific risk of relying heavily on AI companions' → human relationships need "
            "vulnerability and effort that AI ones don't, so you may not develop the skills needed for human "
            "connection)."
        ),
        "notes": (
            "This is a sensitive lesson — the Character.AI Florida case involves a real teenager's suicide and "
            "an ongoing product-liability lawsuit; the safeguarding slide and support numbers are not optional "
            "and should open the lesson. Make clear students don't have to be in crisis to reach out and may "
            "step away from the lesson if it stirs something up. Keep the framing balanced: the emotional "
            "experience is real and dismissing it 'as just feelings about a chatbot' underestimates what's "
            "happening — the risk is substitution, not enjoyment."
        ),
    },
    # ===================================================================
    {
        "id": 132,
        "unit": "Unit 7: AI, Wellbeing & Your Future",
        "ailit": "Engage with AI",
        "title": "Careers in an AI World",
        "big_idea": "Nobody can predict your future job — even if your title survives to 2035, the "
                    "tasks inside it will look very different. The durable career bet isn't one perfect "
                    "skill but the human strengths AI is worst at (judgement, creativity, care, physical "
                    "trades) plus the ability to keep learning as tools change.",
        "objectives": [
            "Use the routine / non-routine cognitive / non-routine manual framework to reason about which tasks automate and which resist it.",
            "Name the human strengths and roles that are hardest to automate, and explain why (accountability, lived experience, trust, physical context).",
            "Describe the five habits of career AI literacy and why employers increasingly ask for them by name.",
            "Be sceptical of confident automation predictions, using the radiology and Klarna cases as evidence.",
        ],
        "vocab": [
            ("Occupation churn", "How much the content of a job title changes over time — now around 25% for office roles in five years (LinkedIn data)."),
            ("Routine tasks", "Predictable, rule-based work — the first bucket to automate."),
            ("Non-routine cognitive", "Tasks needing judgement and creativity — much harder to automate."),
            ("Non-routine manual", "Physical, context-sensitive work — plumbing, care, paramedicine — among the hardest to automate."),
            ("AI literacy", "Five practical habits employers ask for by name: knowing what AI can/can't do, using it critically, understanding its ethics, spotting hallucinations, adapting as tools change."),
            ("Jagged frontier", "Dell'Acqua et al. (2023): AI boosts quality on tasks it suits, but over-trusting it beyond its reliable range can make you worse than using no AI at all."),
            ("Adaptability", "The meta-skill of learning new tools quickly — the specific tool you master today will be obsolete, this won't."),
        ],
        "resources": [
            ("Course slides — Lesson 132 'Careers in an AI World'", "Removes course, Unit 7"),
            ("Video: 'Humans Need Not Apply' — CGP Grey (2014, 15 min)", "https://www.youtube.com/watch?v=7Pq-S557XQU"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: World Economic Forum — Future of Jobs Report 2025 (Jan 2025)", "https://www.weforum.org/publications/the-future-of-jobs-report-2025/"),
            ("Source: LinkedIn Economic Graph — Skills change data", "https://economicgraph.linkedin.com/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the WEF 2025 stats: surveying 1,000+ employers across 55 economies, 22% of jobs will "
             "see significant change between 2025 and 2030 (170M created, 92M displaced, net +78M), and "
             "LinkedIn data shows ~25% of an office job's skills now turn over in five years, up from under "
             "10% a decade ago. Land the line: even if your job title survives, the tasks inside it will look "
             "very different — and most of the resilient skills have nothing to do with coding. Ask students "
             "to name a job they think is 'safe'."),
            ("Watch — Humans Need Not Apply", "6 min",
             "Play a clip from CGP Grey's 2014 'Humans Need Not Apply' (made before ChatGPT existed). Focus "
             "task: 'Watch critically — which predictions have already come true, which haven't, and where "
             "would Grey update his argument today?' Note the horse-and-car analogy for later discussion."),
            ("Main teaching — What AI can't replace, and career AI literacy", "10 min",
             "Teach the three task buckets (routine automating fast; non-routine cognitive and manual far "
             "harder). Cover the human strengths AI can't replace yet: high-stakes judgement (nobody wants to "
             "sue an algorithm), genuine creativity grounded in lived experience, interpersonal skills (WEF "
             "ranks resilience, leadership and social influence among the fastest-rising), physical trades "
             "(plumbers, electricians, carers, paramedics — UK skills shortages), and AI literacy itself "
             "(AI specialist, ML engineer, AI ethicist, AI auditor, prompt engineer). Then teach the five "
             "career AI-literacy habits and the sceptic's evidence: Hinton's 2016 'stop training "
             "radiologists' (postings now at record highs) and Klarna's 2024 '700 agents' claim (rehiring "
             "humans by 2025)."),
            ("Activity — Research your career + durable-or-disappearing (Gemini)", "12 min",
             "Part A (notes box): students pick a career they're curious about and answer the four research "
             "questions — what tasks AI could meaningfully assist with, what stays distinctly human and why, "
             "what skills would make them stand out, and what makes the career more or less resilient. Part B "
             "(Gemini): students ask Gemini to break their chosen career into routine vs non-routine tasks, "
             "then critique its answer against the lesson and sort six skills as durable or declining "
             "(critically judging AI outputs = durable; empathy = durable; adaptability = durable; memorising "
             "facts fast = declining; typing speed = declining; one narrow routine task for decades = "
             "declining)."),
            ("Discussion — Did the predictions hold?", "5 min",
             "Discuss the video: which of CGP Grey's 2014 predictions came true, which didn't, and what the "
             "radiology and Klarna stories teach about confident automation claims — especially ones used to "
             "sell products. Draw out that predictions are often wrong, so build resilient skills rather than "
             "betting on a forecast."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one durable skill you'll deliberately build, and one task you'll happily "
             "hand to AI — and why.' Reinforce: judgement, people skills and adaptability rise as routine "
             "recall and mechanical speed fall."),
        ],
        "discussion": [
            "CGP Grey compared workers to horses made obsolete by the car. Is that a fair analogy for your generation, or where does it break down?",
            "In 2016 an expert said to stop training radiologists; postings are now at record highs. Why do confident automation predictions age so badly?",
            "If the most in-demand job of 2030 doesn't have a name yet, how should that change what you focus on at school now?",
        ],
        "class_task": (
            "Career-resilience audit (Gemini): each student names a career they care about and asks Gemini to "
            "split it into tasks AI will reshape and tasks that stay distinctly human. They then check "
            "Gemini's answer against the routine / non-routine framework from the lesson — does it correctly "
            "treat judgement, creativity, care and physical context as the hard-to-automate parts? Students "
            "finish by naming three skills they'll deliberately build now to stay valuable, citing the "
            "radiology or Klarna case as evidence that loud automation claims often miss the complex, "
            "high-stakes cases."
        ),
        "differentiation": (
            "Support: pre-sort two of the six 'durable or disappearing' skills together as a class, then let "
            "students sort the rest with the lesson's explanations to hand. Stretch: students argue both sides "
            "of an automation prediction — taking CGP Grey's 2014 case seriously while marshalling the "
            "radiology and Klarna counter-evidence — and state which view they find more convincing and why."
        ),
        "assessment": (
            "Exit-ticket reasoning; the quality of the 'research your career' answers and the durable/"
            "disappearing sorting; the in-course quiz ('most valuable career skill in an AI-dominated "
            "workplace' → rapidly learning new tools and applying critical judgement to their outputs, not "
            "fact-memorisation, typing speed, or 40 years in one narrow niche)."
        ),
        "notes": (
            "Keep the framing 'build resilient skills, don't predict the future' — that is the lesson's "
            "explicit stance. The Hinton radiology and Klarna examples are real and current; use them to model "
            "scepticism toward confident claims, especially ones used to sell products. When students ask "
            "which tools to learn, note that the specific tool will date fast (the slide traces ChatGPT to "
            "GPT-5 and agents in about four years; as of mid-2026 leading general-purpose models are GPT-5.x, "
            "Claude Opus 4.8 / Sonnet 4.6 and Gemini 3.x) — the learning-to-learn habit is what lasts."
        ),
    },
    # ===================================================================
    {
        "id": 133,
        "unit": "Unit 7: AI, Wellbeing & Your Future",
        "ailit": "Engage with AI",
        "title": "You & AI",
        "big_idea": "After 40 lessons across four AI-literacy domains, the question is no longer what "
                    "AI can do — it's what you are going to do about it. The course gave you a framework "
                    "of lenses, not a list of facts; the most important thing you can do is keep "
                    "questioning and be the human in the loop. The future is yours to shape.",
        "objectives": [
            "Synthesise the course into a personal framework: how AI works, how to use it well, why it matters, what to watch for, your rights and your power.",
            "Write a personal AI manifesto of five specific, testable principles covering learning, verification, creativity, privacy and influence.",
            "Articulate the 'right relationship' with AI — a powerful tool used with critical judgement, never an authority to outsource thinking to.",
            "Identify a way they personally can shape AI — as a builder, a governor, a user who sets the bar, or a voter who is hard to fool.",
        ],
        "vocab": [
            ("Human in the loop", "Keeping a person making the decisions — never accepting AI output, systems or decisions at face value."),
            ("SIFT", "Stop, Investigate the source, Find better coverage, Trace to the original — the two-minute habit for any claim that matters."),
            ("Jagged frontier", "The 2023 finding that AI can make you worse when you over-trust it on tasks beyond its reliable range."),
            ("Sycophancy", "An AI's tendency to tell you what you want to hear — one of the named failure modes to watch for."),
            ("Accountability", "Responsibility for AI harm stays with the humans and organisations who design, deploy and rely on a system — not 'the AI'."),
            ("AI manifesto", "A short set of personal, specific principles for how you'll engage with AI — testable commitments, not vague aspirations."),
            ("Lateral reading", "Checking a source by opening other tabs to see what independent sources say about it, rather than reading it in isolation."),
        ],
        "resources": [
            ("Course slides — Lesson 133 'You & AI' (course finale)", "Removes course, Unit 7"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("NotebookLM (to revisit the course's case studies before writing the manifesto)", "https://notebooklm.google.com"),
            ("Reference cases (from across the course): Robert Williams (Detroit 2020), Mata v. Avianca, the Slovakia 2023 election audio, the Hong Kong £20M deepfake fraud, Post Office Horizon", "Removes course, Units 1-7"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Mark the finale: 40 lessons across 7 units, examining AI technically, socially, ethically and "
             "personally — students now more AI-literate than most adults. Recall the people they've met: "
             "Robert Williams (wrongly arrested by facial recognition, Detroit 2020), the Kenyan moderators "
             "training RLHF for under $2/hour, Frances Haugen's 2021 leak, the Slovakia 2023 election audio, "
             "the Hong Kong £20M deepfake fraud, the Post Office Horizon scandal, and Mata v. Avianca (the "
             "lawyer sanctioned for citing AI-hallucinated cases). Land the line: 'The question now isn't what "
             "AI can do — it's what YOU are going to do about it.'"),
            ("Main teaching — What you now know + the future is yours to shape", "13 min",
             "Teach 'what you now know' as a framework of lenses, not facts: how AI works (pattern recognition "
             "and probability, trained not programmed), how to use it well (iterate, verify, be sceptical — "
             "the 2023 jagged-frontier finding), why it matters (bias, privacy, misinformation, ethics), what "
             "to watch for (hallucinations, filter bubbles, manipulation, sycophancy, dependency, scraping), "
             "your rights and tools (UK GDPR subject access, SIFT, lateral reading, feed audits), and your "
             "power. Then 'the future is yours to shape': you can be a builder, a governor, a user who sets "
             "the bar, or a voter who is hard to fool — the people who understand the technology will have "
             "more control over it."),
            ("Activity — Write your personal AI manifesto (Gemini / NotebookLM)", "13 min",
             "In the notes box, students write five personal, specific, testable principles — not generic "
             "aspirations. Principle 1 (Learning): when AI helps their thinking and when they'll deliberately "
             "work without it. Principle 2 (Verification): their personal habit for checking AI claims. "
             "Principle 3 (Creativity): what they will and won't delegate. Principle 4 (Privacy): one specific "
             "app permission or setting they'll change this week. Principle 5 (Influence): one piece of advice "
             "for a younger student. Students may use a teacher-prepared NotebookLM of course cases to ground "
             "a principle, or ask Gemini to challenge a draft principle — 'is this specific and testable, or "
             "vague?' — and sharpen it. Emphasise: keep this document, review it in six months."),
            ("Discussion — The conversations ahead", "4 min",
             "Use the slide's own three questions: which one topic do you want your family to understand "
             "better and how would you explain it over dinner; which course story (Robert Williams, Slovakia "
             "deepfake, Hong Kong £20M fraud, Kenyan RLHF workers on $1.32/hour) stuck with you most and why; "
             "and if you could change one thing about how AI is developed or deployed — globally, nationally, "
             "or in your school — what would it be?"),
            ("Plenary — Manifesto sharing & final commitment", "5 min",
             "Finale plenary: invite volunteers to read aloud their single strongest manifesto principle, "
             "building a shared class wall of commitments. Then each student completes the final exit ticket — "
             "the one sentence they most want their future self (in a year's time) to read back about how "
             "they'll engage with AI — and saves it to their device. Close on the course's parting line: "
             "keep questioning, be the human in the loop, the future is yours to shape."),
        ],
        "discussion": [
            "Of everything you've learned in this course, which one topic do you want your family to understand better — and how would you explain it to them over dinner?",
            "Looking back at the Robert Williams case, the Slovakia deepfake, the Hong Kong £20M fraud, the Kenyan RLHF workers on $1.32/hour — which story has stuck with you most, and why?",
            "If you could change one thing about how AI is currently being developed or deployed — globally, nationally, or in your own school — what would it be?",
        ],
        "class_task": (
            "Personal AI manifesto (Gemini / NotebookLM): each student drafts five specific, testable "
            "principles covering learning, verification, creativity, privacy and influence — for example 'I "
            "draft my own answer before asking AI', not 'I'll use AI responsibly'. They use Gemini as a "
            "critical friend, pasting each principle in and asking whether it is concrete and testable or "
            "merely aspirational, then rewriting any vague ones; a teacher-prepared NotebookLM of the course's "
            "real cases can anchor a principle in evidence. The finished manifesto is saved to keep and "
            "re-read in six months — the proof they end the course shaping AI rather than being shaped by it."
        ),
        "differentiation": (
            "Support: give students a sentence-starter scaffold for each of the five principles (Learning: 'I "
            "will work without AI when…'; Verification: 'Before I trust an AI claim I will…') so the structure "
            "is provided and they supply the specifics. Stretch: students extend the manifesto into the "
            "capstone's two-part charter and career-resilience map — sorting, for a career they care about, "
            "what AI will reshape versus what stays human, and naming three skills they'll build now, citing "
            "real course cases (centaur, Klarna, radiology)."
        ),
        "assessment": (
            "The final exit-ticket commitment and the specificity of the manifesto principles (testable vs "
            "vague) are the headline AfL evidence; the capstone unit-test and 'Your AI Charter & Career Map' "
            "assessment provide the summative judgement. The in-course quiz ('the right relationship between "
            "you and AI' → use AI as a powerful tool while maintaining your own critical judgement and not "
            "outsourcing your thinking)."
        ),
        "notes": (
            "This is the course finale — protect time for the manifesto-sharing plenary; the emotional payoff "
            "of reading principles aloud and building the class wall is the point of the lesson. Stress that "
            "the manifesto has no right answers, only honest ones, and that the best principles are specific "
            "and testable. The case studies referenced (Robert Williams, Mata v. Avianca, Slovakia, Hong Kong, "
            "Horizon, the Kenyan moderators) are all real and drawn from earlier in the course; if students "
            "want a refresher, the NotebookLM of course materials is the place to send them. Keep the closing "
            "tone empowering, not fearful: the course exists to help them think clearly about AI, and "
            "everything else follows from that."
        ),
    },
]
