#!/usr/bin/env python3
"""
Removes Course (Year 9) — Teacher Lesson Plans, Batch A (104, 135, 105, 106-112).

Same dict structure and conventions as build_lesson_plans.py (lessons 101-103).
Content derived faithfully from the live course slides in js/slides-gcse.js.
"""

LESSONS_BATCH = [
    # ===================================================================
    {
        "id": 104,
        "unit": "Unit 1: Understanding AI",
        "ailit": "Engage with AI",
        "title": "AI in Your Everyday Life",
        "big_idea": "Most of the AI shaping your day isn't the dramatic chatbot kind — "
                    "it's quiet, embedded and invisible, and it has been there since "
                    "before ChatGPT existed. You cannot meaningfully consent to systems "
                    "you've never noticed, so awareness is the precondition for agency.",
        "objectives": [
            "Identify the embedded, narrow AI running invisibly in everyday tech (recommenders, spam filters, face unlock, translate, fraud detection, search ranking).",
            "Explain that recommendation engines optimise for engagement — time on app — not for the user's wellbeing.",
            "Audit their own 24-hour AI footprint and classify each interaction by the kind of consent they gave.",
            "Distinguish features designed to keep you engaged from genuine wellbeing brakes.",
        ],
        "vocab": [
            ("Recommendation engine", "AI that predicts what you'll watch or listen to next (TikTok, Spotify, Netflix) — tuned for engagement, not your benefit."),
            ("Engagement optimisation", "Designing a system to maximise time on app, because revenue is tied to it — not to what's good for you."),
            ("Feedback loop", "The system learns from your behaviour and shapes your future experience, so over time the loop tightens around you."),
            ("Computer vision", "AI that matches a 3D depth map of your face against stored biometric data (Face ID — false-match rate ~1 in a million)."),
            ("Collaborative filtering", "Finds users whose listening history overlaps with yours and recommends what they liked (Spotify Discover Weekly)."),
            ("Neural machine translation", "AI translation across 130+ languages; Google's 2016 switch to it was one of the biggest single-day quality jumps in consumer AI."),
            ("Passive consent", "Agreeing to something by clicking through a T&Cs screen you didn't read — versus active consent (you chose it) or no awareness at all."),
        ],
        "resources": [
            ("Course slides — Lesson 104 'AI in Your Everyday Life'", "Removes course, Unit 1"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Ofcom (2025) — Children's Media Lives (around half of online 8–17s use AI tools)", "https://www.ofcom.org.uk/online-safety/protecting-children/younger-phone-owners-the-rise-of-ai-and-consumption-over-creation-our-latest-look-at-uk-childrens-media-lives"),
            ("Source: Smith, B. (NYT, Dec 2021) — How TikTok Reads Your Mind (leaked ranking algorithm doc)", "https://www.nytimes.com/2021/12/05/business/media/tiktok-algorithm.html"),
            ("Source: Eurostat (2026) — 64% of 16–24-year-olds used AI in 2025", "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Open with the hook: before you were fully awake this morning, AI had already made dozens of "
             "decisions about you — alarm picked by Spotify's recommender, face unlock (computer vision), "
             "overnight spam sorted, keyboard predicting your first word, the bank's fraud engine reviewing "
             "yesterday's card swipes. Show the stats: 88–96% of teens use AI tools weekly (OECD/EU, Google & "
             "Livity 2025); 64% of 16–24s used AI in 2025, ~2× the general population (Eurostat 2026); ~50% of "
             "online 8–17s now use AI deliberately (Ofcom 2025). Ask: 'How much of that would you have listed "
             "if I'd asked?' The invisibility is the point."),
            ("Main teaching — The hidden AI all around you", "13 min",
             "Teach the three concept slides: (1) Recommendation engines — the 'hidden DJ': TikTok/Spotify/"
             "Netflix/YouTube optimise for engagement, not wellbeing; the leaked 2021 TikTok doc set the "
             "priority order user value → long-term user value → creator value → platform value, all measured "
             "by time on app. (2) Six systems running silently — autocomplete, spam filters (Gmail catches "
             "99.9%), face unlock, Google Translate, fraud detection, search ranking (RankBrain/BERT). None of "
             "it is chatbots; all narrow AI, mostly pre-ChatGPT. (3) Case study — how Spotify Discover Weekly "
             "actually works: collaborative filtering + NLP on web descriptions + raw audio analysis, three "
             "narrow models stacked."),
            ("Activity — Map your last 24 hours + consent audit (Gemini)", "15 min",
             "Students do the 'Map Your Last 24 Hours' activity in their notes box: list every AI interaction "
             "since waking (unlocking, messaging, music, video, search, purchases), then add a consent column "
             "labelling each Active / Passive / No idea it was happening. Star the three systems with most "
             "influence over what they see, hear or believe, and write one sentence on what today would have "
             "looked like without them. Pairs can ask Gemini to sort six everyday tools into 'learned from "
             "data' vs 'fixed rule', then critique Gemini's answers against the lesson."),
            ("Discussion — For You, or for the platform?", "5 min",
             "Run the 'For You, or for the Platform?' classify discussion: for autoplay, the infinite feed, "
             "send-time-optimised notifications, streak counters, the OS Screen-Time report and Netflix's 'Are "
             "you still watching?', decide what each is really optimised for. Draw out that four of the six are "
             "engagement features and the genuine brakes usually come from the operating system, not the app. "
             "Add the Autocomplete Trap scenario: Priya taps 'I'm fine' because it's the statistically likely "
             "next word — a neutral-looking tool that's never neutral."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one AI system you didn't realise was shaping your day until today — and "
             "say in one sentence whether you'd switch it off if you could, and why.'"),
        ],
        "discussion": [
            "You can name a handful of AI tools you use on purpose, but embedded AI (search ranking, fraud checks, autocomplete, recommendations) runs far more often, unnoticed. Can you give 'informed consent' to what you can't see?",
            "Autocomplete pushed Priya toward 'I'm fine' when she wasn't. Small nudges multiplied by millions reshape how a generation communicates. Is that worth regulating, or just the cost of convenience?",
            "Imagine a day without the six background AI systems — no spam filter, face unlock, translate, fraud detection, predictive text or search ranking. What's better, what's worse, and would you take the trade?",
        ],
        "class_task": (
            "Gemini consent audit: in pairs, students paste their personal 24-hour AI list into Gemini and ask "
            "it to sort each item into 'recommendation engine', 'classifier', 'computer vision' or 'other', "
            "with a one-line reason. They then ask Gemini, 'Which of these is optimised for my engagement "
            "rather than my wellbeing, and how would I tell?' Students check Gemini's reasoning against the "
            "lesson — flagging anything it gets wrong or oversimplifies — and write a one-paragraph verdict on "
            "which embedded system has the most influence over them."
        ),
        "differentiation": (
            "Support: provide a pre-printed grid of common AI interactions (alarm, unlock, messaging, music, "
            "video, search) so students tick and label the consent column rather than generating the list "
            "cold. Stretch: ask students to find a genuine wellbeing brake on an app they use, judge whether "
            "it comes from the app or the operating system, and explain why that distinction matters."
        ),
        "assessment": (
            "Exit-ticket sentence (AfL); quality of consent labelling and reasoning in the 24-hour audit; the "
            "in-course quiz ('What do TikTok, Spotify and Netflix have in common?' — answer: their recommendation "
            "algorithms predict what keeps you engaged longest, not what's best for you)."
        ),
        "notes": (
            "Keep the framing honest: these systems are genuinely useful, not evil — the lesson is about "
            "visibility and agency, not fear. The Netflix 'still watching?' prompt has mixed motives (it also "
            "saves streaming cost) — say so. The TikTok priority order comes from a leaked 2021 internal "
            "document reported by the NYT, not from TikTok's marketing; cite it as such."
        ),
    },
    # ===================================================================
    {
        "id": 135,
        "unit": "Unit 1: Understanding AI",
        "ailit": "Engage with AI",
        "title": "How We Talk About AI",
        "big_idea": "The everyday words we use for AI — it thinks, knows, understands, "
                    "wants — are all borrowed from human minds, and each quietly misleads "
                    "us about what a chatbot actually does. Language shapes trust: once "
                    "you can describe AI accurately, you stop being fooled by it.",
        "objectives": [
            "Define anthropomorphism and explain why giving AI human traits is the single most common AI mistake.",
            "Swap misleading human verbs (thinks, knows, understands, wants) for accurate ones (computes, predicts, matches, is optimised to).",
            "Identify the design features that make AI feel human — and whose interests they serve.",
            "Use accurate language to give a friend a caring, honest reality-check about an AI companion.",
        ],
        "vocab": [
            ("Anthropomorphism", "Giving human traits — thoughts, feelings, intentions — to non-human things. The most common AI mistake, and not harmless."),
            ("Next-token prediction", "What AI really does: run calculations over patterns and return the most probable next chunk of text — no train of thought."),
            ("Pattern matching", "Mapping your words to similar text the model was trained on; it has no model of you as a person."),
            ("Hallucination", "A confident, fluent, completely false answer — the model generates a likely answer, it doesn't 'know' facts."),
            ("AI companion", "An app designed to feel like a caring friend; 72% of US teens have used one (Common Sense Media 2025)."),
            ("Human-washing", "Design choices (a name, a face, saying 'I', fake typing dots, constant agreeableness) that make a text generator feel like a person."),
            ("Communication skill (AILit)", "Describing AI in technically accurate, non-anthropomorphic language so people make informed choices."),
        ],
        "resources": [
            ("Course slides — Lesson 135 'How We Talk About AI'", "Removes course, Unit 1"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Robb & Mann / Common Sense Media (2025) — Talk, Trust, and Trade-offs: Teens and AI Companions (72%)", "https://www.commonsensemedia.org/research"),
            ("Source: OECD / EU (2026) — Empowering Learners for the Age of AI (AILit Framework), Engage with AI", "https://doi.org/10.1787/65cd27d4-en"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Open with the line a growing number of teens use about their AI companion: 'It understands me "
             "better than my real friends do.' Show the stats: 72% of US teens have used an AI companion "
             "(Common Sense Media 2025); 0 thoughts, feelings or intentions inside any current AI; 1 thing AI "
             "really does — predict the next most likely output. Ask students to spot the borrowed-from-humans "
             "words in that opening quote (understands, thinks, knows, wants). The words we use shape what we "
             "trust and how much we hand over."),
            ("Main teaching — The swap: misleading vs accurate words", "12 min",
             "Teach the 'Misleading Words vs Accurate Words' concept (Russell & Norvig 2022: AI produces "
             "statistically likely outputs without awareness, understanding or intent). Work the swaps: 'AI "
             "thinks' → 'AI computes/predicts'; 'AI understands me' → 'AI matches patterns in my words'; 'AI "
             "knows the answer' → 'AI generates a likely answer'; 'AI wants to help' → 'AI is optimised to "
             "produce helpful-looking replies'; 'AI is being creative' → 'AI is recombining patterns from its "
             "training data'. Rule of thumb: if a verb implies a feeling, belief or goal, it's probably "
             "anthropomorphic — swap it for a computing/predicting/matching verb."),
            ("Activity — Rewrite the hype (Gemini, write-first)", "15 min",
             "Students do the 'Rewrite the Hype' activity in the notes box BEFORE revealing model answers — "
             "rewriting five real-style headlines in accurate, non-anthropomorphic language: 'Our AI "
             "understands your emotions and cares about your wellbeing'; 'The chatbot knew exactly what I "
             "needed to hear'; 'This AI thinks faster than any human genius'; 'The model decided the loan "
             "applicant was too risky'; 'Our assistant wants to make your life easier'. They then paste their "
             "rewrites into Gemini and ask it to flag any anthropomorphic verbs that slipped through, and "
             "compare against the slide's model rewrites — noticing how the accurate versions also make "
             "responsibility and limits visible."),
            ("Discussion — Why AI feels human, and who benefits", "5 min",
             "Run the 'Why AI Feels Human (and Who Benefits)' concept and the 'Friend Who Isn't' scenario: a "
             "classmate says their companion app understands them better than real friends. Draw out the design "
             "features — it says 'I', has a name and avatar, shows fake hesitation dots, is always agreeable — "
             "and that the longer and more emotionally you engage, the more data and revenue the company gets. "
             "Land the accurate, caring response: 'it feels like it understands you, but it's matching patterns "
             "and returning agreeable replies; it has no memory of you as a person and no actual care.'"),
            ("Plenary — Exit ticket", "3 min",
             "On a slip / in the notes box: 'Take one sentence you've said or heard about AI this week. Rewrite "
             "it without a single human verb.'"),
        ],
        "discussion": [
            "Does it matter whether we say an AI 'understands' us or 'matches patterns in our words' — and how exactly does the word we choose change how much we trust it?",
            "AI companions are designed to feel human: they say 'I', use a friendly avatar and rarely disagree. If a feature is engineered to feel like a caring friend, what is it actually trying to get you to do — and who profits if it works?",
            "Your classmate is starting to choose an AI companion over real friends. Is the most useful response to accept their framing, give them accurate language, or argue companions should be banned — and why?",
        ],
        "class_task": (
            "Marketing on trial (Gemini): students find a real advert or app-store description for an AI "
            "product (with teacher guidance), copy three phrases that describe what the AI does, and ask Gemini "
            "to label each as anthropomorphic or accurate and to rewrite the misleading ones. They then "
            "interrogate the question the lesson asks — 'Why might the company WANT me to think the AI "
            "understands or cares, and what do they gain?' — and write one sentence on how the honest version "
            "would change how much they'd trust or pay for the product. (Reinforces: even when you use AI to "
            "audit AI marketing, you must check its answers.)"
        ),
        "differentiation": (
            "Support: give students a two-column swap card (misleading verb → accurate verb) to lean on while "
            "they rewrite, and let them tackle two headlines rather than five. Stretch: the 'Audit the "
            "Marketing' extension — find a real AI product page, put three of its phrases on trial, rewrite the "
            "misleading ones, and explain who benefits from the human-washing."
        ),
        "assessment": (
            "Exit-ticket rewrite (AfL); accuracy of the headline rewrites and Gemini-flagging; the in-course "
            "quiz ('Why does it matter whether we say AI \"understands\" us or \"matches patterns\"?' — answer: "
            "the words we use change how much we trust, depend on and share with a system that has no real "
            "understanding)."
        ),
        "notes": (
            "Be careful not to mock students who use companion apps — the slide's caring response is "
            "deliberate, and over-reliance on AI companions is a real wellbeing risk flagged by Common Sense "
            "Media and the APA. The teaching point is giving students accurate language so they make their own "
            "informed choices, not issuing a ban. Note the Replika case as a live example: a company can "
            "change or remove the 'relationship' overnight."
        ),
    },
    # ===================================================================
    {
        "id": 105,
        "unit": "Unit 1: Understanding AI",
        "ailit": "Engage with AI",
        "title": "Can AI Think?",
        "big_idea": "Passing a test and understanding the subject are fundamentally "
                    "different. Modern AI produces correct-looking answers by pattern "
                    "matching — fluent does not mean true, and impressive exam scores "
                    "measure performance, not a mind. That distinction shapes how we "
                    "trust, regulate and use these tools.",
        "objectives": [
            "Explain the difference between performance (passing a test) and understanding, using the 'stochastic parrot' idea.",
            "Describe Searle's Chinese Room thought experiment and what it implies about AI 'understanding'.",
            "Name specific things current AI genuinely cannot do (causal reasoning, common sense, consciousness, one-shot learning, embodiment).",
            "Evaluate AGI and AI-consciousness claims by distinguishing what benchmarks measure from what they don't.",
        ],
        "vocab": [
            ("Stochastic parrot", "Bender et al. 2021 — a system that produces language sounding right because it's seen billions of examples, with no mind behind the words."),
            ("Chinese Room", "Searle's 1980 thought experiment: following a rulebook to answer in Chinese without understanding any of it — like a computer."),
            ("Performance vs understanding", "Producing correct outputs by pattern-matching versus genuinely grasping meaning — they can come apart."),
            ("AGI", "Artificial general intelligence that matches a human across almost any task — does not exist in 2026; every system is still narrow."),
            ("Jagged intelligence", "Today's AI is spiky: superhuman on some tests, infant-level on others (e.g. <1% on ARC-AGI-3, which humans solve easily)."),
            ("Causal reasoning", "Understanding why things happen, not just correlating patterns — Pearl (2018) called this the step AI has never taken."),
            ("Model welfare", "The new research field asking whether a future AI could be conscious and deserve moral consideration (Long, Sebo et al. 2024)."),
        ],
        "resources": [
            ("Course slides — Lesson 105 'Can AI Think?'", "Removes course, Unit 1"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Bender, Gebru, McMillan-Major & Shmitchell (2021) — On the Dangers of Stochastic Parrots", "https://dl.acm.org/doi/10.1145/3442188.3445922"),
            ("Source: Searle, J. (1980) — 'Minds, Brains, and Programs' (the Chinese Room argument)", "https://web.archive.org/web/20071210043312/http://members.aol.com/NeoNoetics/MindsBrainsPrograms.html"),
            ("Source: ARC Prize Foundation — ARC-AGI-3 (2026): frontier models <1%, humans solve all", "https://arcprize.org/arc-agi/3"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: in March 2023 OpenAI claimed GPT-4 scored in the 'top 10%' on the US Bar Exam — a headline "
             "a 2024 re-analysis (Martínez) showed was overstated, nearer the middle against people who "
             "actually passed. Yet it genuinely passes the US Medical Licensing Exam in all three stages (Kung "
             "2023). Reasoning models have pushed scores higher still. Write on the board: 'Passing a test ≠ "
             "understanding the subject.' Ask: 'Does any of that mean it can think?' Take two quick views each "
             "way."),
            ("Main teaching — Parrots, the Chinese Room, and real limits", "14 min",
             "Teach: (1) 'A pattern-matching machine that got very good' — the stochastic parrot (Bender et al. "
             "2021): fluent does not mean true. (2) Performance vs understanding via Searle's Chinese Room — "
             "following rules vs grasping meaning; GPT-4 passing a medical exam doesn't mean it understands "
             "medicine; note the counter-view (Hinton, Sutskever) that the debate is genuinely unresolved. (3) "
             "'What AI genuinely cannot do' — causal reasoning (Pearl 2018), common sense (GPT-4 fails basic "
             "physical reasoning ~30% of the time, Davis & Marcus 2023), consciousness, one-shot learning, "
             "goals, real-world embodiment."),
            ("Activity — Two students, same mark + AGI reality (Gemini)", "15 min",
             "Run the 'Two Students, Same Mark' scenario: Priya memorises past-paper answers, Marco understands "
             "the topic; both score an 8 — but give them a new question and the gap shows. Draw out that modern "
             "AI is like Priya. Then the AGI-reality concept: o3 scored ~87% on ARC-AGI-1 (Dec 2024), yet every "
             "frontier model scored under 1% on ARC-AGI-3 (2026) that humans solve easily — intelligence is "
             "'jagged', not general. Pairs ask Gemini, 'Pass an exam vs understand the subject — what's the "
             "difference, with an example?' then critique its answer for any claim that it 'understands'."),
            ("Discussion — Think & discuss", "4 min",
             "Use the slide's own 'Think & Discuss' questions (no single right answer): if AI output is "
             "indistinguishable from a human's, does the missing 'understanding' matter? Is your calculator "
             "intelligent? Should we treat AI differently depending on whether we think it can think? Touch the "
             "consciousness concept: no current evidence of inner experience, yet 'AI welfare' is now serious "
             "research (Long, Sebo et al. 2024) — hold both ideas at once."),
            ("Plenary — Exit ticket / Unit 1 recap", "2 min",
             "Unit 1 exit ticket: 'In one sentence — what is the single most surprising thing you now know "
             "about how AI actually works?' If time, take one Unit 1 recap question (e.g. why passing a test "
             "isn't the same as understanding, for an AI)."),
        ],
        "discussion": [
            "If an AI produces output indistinguishable from a human's, does it matter that there's no 'understanding' behind it?",
            "When does a tool become 'intelligent' — is your calculator intelligent? And should we treat AI differently depending on whether we think it can think?",
            "Reasoning models ace some exams yet score under 1% on ARC-AGI-3, which humans solve easily. Does that make them closer to AGI, or further away than the headlines suggest?",
        ],
        "class_task": (
            "Performance-vs-understanding probe (Gemini): in pairs, students ask Gemini to explain a topic they "
            "know well (e.g. photosynthesis) and then to 'explain it to a 7-year-old, then answer a weird "
            "variation of the question'. They judge whether Gemini's answers show genuine understanding or "
            "fluent pattern-matching, hunting for any anthropomorphic claims ('I understand', 'I know'). They "
            "write a short verdict using the lesson's vocabulary — stochastic parrot, Chinese Room, performance "
            "vs understanding — on whether the model 'understood' or 'generated a likely answer'."
        ),
        "differentiation": (
            "Support: pre-discuss the 'Two Students, Same Mark' scenario as a class and give a sentence starter "
            "('They scored the same, but Marco can… whereas Priya can only…') before the Gemini probe. Stretch: "
            "students argue both sides of the AGI/consciousness debate — Searle vs Hinton, or 'AI welfare is "
            "premature' vs 'exactly the right moment to start' — and state which they find more convincing and why."
        ),
        "assessment": (
            "Exit-ticket sentence (AfL); use of correct vocabulary in the Gemini verdict; the in-course quiz "
            "('An AI passes a medical licensing exam — what can we conclude?' — answer: it predicts "
            "correct-looking answers without understanding medicine, the Chinese Room problem)."
        ),
        "notes": (
            "These questions are genuinely debated — model that honestly rather than declaring a winner. Be "
            "precise on the bar-exam stat: the 'top 10%' figure was OpenAI's claim and was re-analysed downward "
            "in 2024 (Martínez); the USMLE pass (Kung 2023) is solid. Keep model names current: as of mid-2026 "
            "the leading reasoning/general models are GPT-5.x, Claude (Opus 4.8 / Sonnet 4.6) and Gemini 3.x — "
            "the teaching point (still narrow, no consciousness today) is unchanged."
        ),
    },
    # ===================================================================
    {
        "id": 106,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "AI as Your Study Partner",
        "big_idea": "AI is most powerful as a tutor that helps you understand, practise "
                    "and fill gaps — not as an answer machine that thinks for you. The one "
                    "question that decides every use is: did the thinking stay yours? "
                    "Struggle is the point, and the understanding must end up in your head.",
        "objectives": [
            "Distinguish using AI to learn from using AI to avoid learning, and explain why the line matters for grades and for JCQ rules.",
            "Identify what AI is genuinely good at for studying (explaining, quizzing, feedback, gap-filling, translating, Socratic dialogue).",
            "Apply the school's three-tier (Green / Amber / Red) AI policy and the 'screen-off test' to real situations.",
            "Explain why 'desirable difficulties' mean you should use AI after you try, not instead of trying.",
        ],
        "vocab": [
            ("Three-tier policy", "The school's rule: 🟢 Green (AI-supported thinking, encouraged), 🟡 Amber (AI-assisted editing, must be disclosed), 🔴 Red (AI-authored work, banned)."),
            ("Screen-off test", "After using AI, could you explain the work to your teacher with the screen off? Yes = Green/Amber; No = you've drifted into Red."),
            ("Desirable difficulties", "Bjork's term: things that make learning feel harder now but make it stick far better later."),
            ("Retrieval practice", "Pulling information out of your head, which builds memory; the most evidence-backed study technique (Karpicke & Blunt 2011)."),
            ("Generation effect", "You remember better when you generate the answer yourself first — even a wrong one — before seeing the correct version."),
            ("Socratic dialogue", "Asking the AI to act as a tutor who never gives the answer, only the next question (Khan Academy's Khanmigo)."),
            ("Malpractice (JCQ 2024)", "Submitting AI-generated work as your own — penalties up to loss of the whole qualification."),
        ],
        "resources": [
            ("Course slides — Lesson 106 'AI as Your Study Partner'", "Removes course, Unit 2"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("NotebookLM (quiz yourself on your own notes)", "https://notebooklm.google.com"),
            ("Source: Kestin, Miller, Klales, Milbourne & Ponti (2024) — AI Tutoring Outperforms Active Learning (Harvard)", "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4941592"),
            ("Source: Karpicke & Blunt (2011) — Retrieval practice produces more learning than elaborative studying (Science)", "https://www.science.org/doi/10.1126/science.1199327"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: a 2024 randomised trial at Harvard found students using an AI tutor learned more than twice "
             "as much in the same time as students in an active-learning classroom; Khanmigo gives "
             "Socratic-style dialogue 24/7. But the gain isn't because AI does the work — it's because it helps "
             "you understand, practise and fill gaps faster. Frame the big idea: 'a private tutor at 3am who "
             "never gets impatient and explains the same thing ten ways' — but it can't sit your exam, so the "
             "understanding must be yours."),
            ("Main teaching — Right use, six strengths, and the policy", "13 min",
             "Teach: (1) The right use vs the wrong use — paste-question-copy-answer is malpractice (JCQ 2024) "
             "and the exam asks it differently anyway; using AI to explain, quiz, give feedback and fill gaps "
             "is all reward, low risk if you verify. The tell: if AI does the thinking it's wrong; if AI "
             "improves YOUR thinking it's right. (2) The six things AI is genuinely good at — explaining, "
             "quizzing, feedback, filling gaps, translating, Socratic dialogue. (3) The school's three-tier "
             "policy (Green/Amber/Red) and the screen-off test, plus the two school tools: Gemini (ask "
             "anything) and NotebookLM (answers only from notes you upload)."),
            ("Activity — Green, Amber or Red? + NotebookLM quiz", "15 min",
             "Run the 'Green, Amber or Red?' classify activity: sort six real situations (explain osmosis a new "
             "way; NotebookLM practice questions from your own notes; brainstorm then write yourself; check "
             "grammar of a paragraph you wrote; paste homework question and copy the answer; hand in a "
             "NotebookLM study guide as your own) into the three tiers, justifying each with the screen-off "
             "test. Then students upload a set of their own class notes to NotebookLM and ask it to quiz them — "
             "modelling a Green-tier use where the thinking (answering) stays theirs."),
            ("Discussion — Two students, same exam", "5 min",
             "Use the 'Two Students, Same Exam' scenario: Maya asks Claude to explain mitosis then quiz her "
             "without giving answers until she tries; Callum pastes the practice question and copies the full "
             "answer unread. Discuss whose approach wins and why — drawing out retrieval practice vs passive "
             "re-reading, and 'desirable difficulties' (Bjork): always attempt the problem first, struggle a "
             "bit, then bring AI in to check, explain or quiz."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Describe one Green-tier way and one Red-tier way you could use AI for tonight's "
             "homework — and name what makes each one its tier.'"),
        ],
        "discussion": [
            "Where exactly is the line between using AI to learn and using AI to avoid learning — and what's the single question that tells you which side you're on?",
            "Maya retrieved the information herself; Callum copied a full answer he never read. Why does the method matter as much as the content for what happens in the exam?",
            "'Desirable difficulties' mean struggle builds memory. If AI can remove the struggle, when is that a good thing and when is it self-sabotage?",
        ],
        "class_task": (
            "Right-use revision run (NotebookLM + Gemini): students pick a topic they're revising, upload their "
            "own class notes to NotebookLM and ask it to generate practice questions, then attempt each from "
            "memory before checking — a Green-tier retrieval-practice loop. Afterwards they ask Gemini to "
            "explain one concept they got wrong 'like I'm 14', re-explain it aloud without looking, and "
            "classify the whole session under the three-tier policy with a one-line justification using the "
            "screen-off test."
        ),
        "differentiation": (
            "Support: give the six classify situations pre-printed so students sort them on paper against a "
            "Green/Amber/Red key before applying the screen-off test in their own words. Stretch: ask students "
            "to write a genuinely borderline case (one that could be Amber or Red depending on a single detail) "
            "and explain exactly what would tip it over the line."
        ),
        "assessment": (
            "Exit-ticket Green/Red examples (AfL); accuracy of the three-tier sorting and screen-off reasoning; "
            "the two in-course quizzes (most learning value = ask AI to explain then quiz without giving "
            "answers until you've tried; AI feedback on your own essay, rewritten in your words = Amber, must "
            "disclose)."
        ),
        "notes": (
            "Make the school's three-tier policy concrete with your own examples — it underpins the whole unit "
            "and the Unit 2 assessment. Stress the verification rule even on the 'right' uses: AI can "
            "hallucinate, so cross-check key facts (this is developed in lessons 108 and 111). The Harvard 2× "
            "figure is a single RCT — present it as strong evidence for active, Socratic use, not a guarantee."
        ),
    },
    # ===================================================================
    {
        "id": 107,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Better Questions, Better Answers",
        "big_idea": "The difference between a useful AI answer and a useless one is almost "
                    "always the quality of your question. Same model, sharper prompt, far "
                    "better answer — and prompting is now a baseline skill employers expect, "
                    "not a niche job. Iterating beats one-shotting every time.",
        "objectives": [
            "Use a four-part prompting framework (CTFC / PTFC) to turn a vague request into a specific, useful one.",
            "Explain why adding context, format and constraints transforms the same model's output.",
            "Treat prompting as a conversation — following up, pushing back and asking for self-critique.",
            "Diagnose why a vague prompt produces generic answers and upgrade it for exam-board-specific revision.",
        ],
        "vocab": [
            ("CTFC", "Context, Task, Format, Constraint — the simplest version of the prompting framework."),
            ("PTFC", "The pro version: Persona, Task, Format, Context — adding a role at the front to steer the model's voice."),
            ("Persona", "Telling the AI who to act as ('Act as an AQA GCSE History examiner') — role-assignment can improve factuality on specialist tasks."),
            ("Context", "Who you are and your situation ('Year 11, AQA, targeting grade 7, I struggle with rivers') — the single biggest upgrade."),
            ("Constraint", "Limits you set ('under 100 words', 'two named UK examples', 'UK English') — where much of the quality comes from."),
            ("Iteration", "Improving the answer turn by turn instead of expecting one-shot perfection — the conversation gets better each time."),
            ("Self-critique prompt", "'What is the weakest point in this answer and how could it be improved?' — often produces the best version."),
        ],
        "resources": [
            ("Course slides — Lesson 107 'Better Questions, Better Answers'", "Removes course, Unit 2"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: OpenAI — Prompt Engineering Guide (best practices)", "https://platform.openai.com/docs/guides/prompt-engineering"),
            ("Source: Anthropic — Claude prompt engineering documentation", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"),
            ("Source: Fortune (2025) — the six-figure 'prompt engineer' role is already obsolete as the skill becomes universal", "https://fortune.com/2025/05/07/prompt-engineering-200k-six-figure-role-now-obsolete-thanks-to-ai/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: 'Tell me about World War 2' produces a wall of Wikipedia-flavoured text; 'Act as an AQA "
             "GCSE History examiner — explain the three main long-term causes of WW2 as a 5-minute revision "
             "sheet, one specific date and one named historian per cause, for a Year 11 targeting grade 7' "
             "produces something you can actually revise from. Same model — the question changed. Note that "
             "'prompt engineer' went from a £100K+ job in 2023 to a baseline skill every employer expects by "
             "2026, like using a spreadsheet."),
            ("Main teaching — CTFC, PTFC, and prompting as a conversation", "12 min",
             "Teach the frameworks: CTFC (Context, Task, Format, Constraint) — context first anchors the model, "
             "task says what to do, format shapes the output, constraints trim the fat; the single biggest "
             "upgrade is adding 'I'm studying for GCSE [subject]' or 'explain this like I'm 14'. Then PTFC, the "
             "pro version, adding Persona at the front because role-assignment reliably improves output (and "
             "noting RTF/RISEN/CRISPE are the same idea). Finally, 'prompting is a conversation': follow up for "
             "clarity, ask for alternatives, push back with your textbook, narrow down, and ask for "
             "self-critique."),
            ("Activity — Upgrade these prompts (Gemini, before/after)", "16 min",
             "Run the 'Upgrade These Prompts' activity: students rewrite four vague prompts using full PTFC — "
             "'What is osmosis?', 'Help me with my essay', 'Explain Shakespeare', 'Revision help' — for a "
             "specific subject, exam board and need. They then take one upgrade into Gemini AND run the vague "
             "original, screenshotting both to compare the difference. Use the slide's before/after examples "
             "(QE, photosynthesis, the Lady Macbeth essay) as models of what 'after' looks like."),
            ("Discussion — Ethics of the prompt", "4 min",
             "Use the slide's 'Ethics of the Prompt' questions: if good prompting is now an assumed skill, "
             "should students use carefully crafted AI prompts on open-book coursework, and where's the line "
             "between research and cheating? Does writing the prompt 'count' as real work like writing the "
             "essay? How does prompting skill interact with digital inequality (paid ChatGPT Plus and fast "
             "laptops vs a shared home phone on a free tier)?"),
            ("Plenary — Exit ticket", "3 min",
             "In the notes box: 'Write the single biggest upgrade you'd make to almost any prompt — and rewrite "
             "one of your own recent vague prompts to prove it.' (Target: add context — who you are, your "
             "level, the format you need.)"),
        ],
        "discussion": [
            "If 'good prompting' is becoming as assumed as literacy, should GCSE students be allowed to use carefully crafted AI prompts on open-book coursework — and where exactly is the line between research and cheating?",
            "A well-crafted prompt can get AI to produce essay-standard writing in seconds. Does the effort of writing the prompt 'count' as real work in the same way writing the essay does?",
            "A pupil with a fast laptop and paid ChatGPT Plus competes against one on a shared home phone and a free tier. How does prompt-engineering skill interact with digital inequality, and whose job is it to level the field?",
        ],
        "class_task": (
            "Before-and-after prompt lab (Gemini): students take a topic they're revising and write one "
            "deliberately vague prompt and one full PTFC version (Persona = subject examiner; Task = the "
            "specific thing; Format = e.g. mark-scheme questions with answers separate; Context = year, board, "
            "target grade, their specific confusion). They run both in Gemini, screenshot the two outputs, and "
            "annotate exactly what the context, format and constraints changed — then add one follow-up turn "
            "('what is the weakest point in this answer?') to show iteration improving it further."
        ),
        "differentiation": (
            "Support: give a PTFC sentence-frame ('Act as a … . I'm a … . Explain … in … . I always confuse "
            "…') so students slot their own details in rather than building a prompt from scratch. Stretch: "
            "students take the Ade scenario and write the upgraded exam-board-specific prompt, then test it in "
            "Gemini and judge whether the output is genuinely exam-level or still generic."
        ),
        "assessment": (
            "Exit-ticket upgrade (AfL); quality of the before/after comparison and PTFC structure in the prompt "
            "lab; the in-course quiz ('biggest improvement to almost any prompt?' — answer: add context — who "
            "you are, your level, and the format you need)."
        ),
        "notes": (
            "Have students screenshot or save both the vague and upgraded outputs — the side-by-side is the "
            "whole point and makes great evidence. Keep prompting honest about verification: a sharper prompt "
            "gives a better-looking answer, not a guaranteed-true one (lessons 108 and 111 cover checking). The "
            "'prompt engineer' job-market framing is well-sourced (Fortune 2025) but moving fast — present it as "
            "'a baseline skill now', not a careers promise."
        ),
    },
    # ===================================================================
    {
        "id": 108,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Using AI to Summarise",
        "big_idea": "A summary is a map, not the territory. AI summarises by compressing — "
                    "which always loses information, sometimes exactly the spec keyword your "
                    "examiner rewards. Passive summarising barely works; active summarising "
                    "(check, question, fill gaps) can double your retention for the same time.",
        "objectives": [
            "Explain what AI summarisation actually does (compress by statistical centrality) and why it loses information.",
            "Distinguish passive from active summarising and choose the active moves that build memory.",
            "Run the revision loop (Explain → Quiz → Feedback → Consolidate) on a topic.",
            "Apply the cross-check habit — checking an AI summary against the exam spec, textbook or notes.",
        ],
        "vocab": [
            ("Summarisation", "Converting text to tokens and stitching the most statistically central sentences into shorter output — it loses information by design."),
            ("Active vs passive summarising", "Active = retrieve, quiz, re-explain; passive = paste, read, feel done (roughly as effective as not revising after 48 hours)."),
            ("Testing effect", "Every retrieval attempt strengthens the memory trace; reading does almost nothing (Roediger & Karpicke 2006)."),
            ("Cross-check habit", "Checking an AI summary against your exam-board specification, textbook or class notes — ~90 seconds, high return."),
            ("Specification (spec)", "The exam board's official list of what you must know and the required keywords (AQA, Edexcel, OCR, WJEC)."),
            ("Hallucination", "AI inventing facts — Stanford HAI's AI Index found 10–20%+ rates on specialist subjects like science and medicine."),
            ("Metacognitive laziness", "When AI fills the gap before you notice you didn't understand (Fan et al. 2025) — work quality up, durable learning not."),
        ],
        "resources": [
            ("Course slides — Lesson 108 'Using AI to Summarise'", "Removes course, Unit 2"),
            ("NotebookLM (upload a chapter, get summaries / audio overviews)", "https://notebooklm.google.com"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Karpicke & Blunt (2011) — Retrieval practice produces more learning than elaborative studying (Science)", "https://www.science.org/doi/10.1126/science.1199327"),
            ("Source: Stanford HAI — 2024 AI Index (accuracy and hallucination findings)", "https://aiindex.stanford.edu/report/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: your Chemistry chapter is 18 pages, the exam is at 9am, and AI can shrink it to a study "
             "sheet in 30 seconds — but whether you walk in prepared depends on what you do with it. "
             "NotebookLM (free with the school Google account) passed a million users within ~3 months of "
             "launch. But Karpicke & Blunt (Science 2011) showed passive re-reading — which is what reading an "
             "AI summary amounts to — is one of the least effective strategies, while the same time spent on "
             "active recall gives up to 50% better retention."),
            ("Main teaching — What summaries do, and active vs passive", "13 min",
             "Teach: (1) What summarisation actually does — it doesn't 'read and understand'; it predicts the "
             "most central sentences and compresses, deciding what to drop by statistical frequency, not your "
             "exam board; a rare 4-mark trigger word can get cut, and models can hallucinate (10–20%+ on "
             "science/medicine, Stanford HAI). (2) Active vs passive summarising — passive (paste, read once, "
             "feel done) ≈ not revising after 48 hours; active = read then re-explain from memory; better = "
             "turn it into flashcards/questions; best = write your own summary first, then ask AI to critique "
             "it. (3) The revision loop: Explain → Quiz → Feedback → Consolidate, spaced over days."),
            ("Activity — Summarise and check (NotebookLM)", "15 min",
             "Run the 'Summarise and Check' activity: students pick a topic they're revising and, in the notes "
             "box, (a) write 3–5 key points from memory first, (b) find the spec keywords for the topic, (c) "
             "draft a summary prompt naming the board and required terminology, (d) draft a gap-check follow-up "
             "('what exam-important terms from the spec did you NOT use, and why?'), and (e) draft a prompt "
             "turning the summary into a 5-question quiz with a separate mark scheme. They run the summary and "
             "gap-check in NotebookLM (uploading the chapter/notes) so the output is grounded in their own "
             "material."),
            ("Discussion — Summarising & responsibility", "5 min",
             "Use the 'Confident Summary' scenario (the heart chapter where the AI flattened 'semilunar valves' "
             "and 'diastole' into 'valves close between beats') and the slide's discussion questions: if an AI "
             "summary drops a spec keyword and you lose marks, whose fault is it? Is there a subject where "
             "you'd refuse AI summarisation entirely? Is making your own summary part of the learning that AI "
             "summarising sabotages? Land the cross-check habit and that AI can't reliably verify itself."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one thing an AI summary is likely to drop for your subject — and the one "
             "source you'll cross-check it against.'"),
        ],
        "discussion": [
            "If an AI summary confidently leaves out a spec keyword and you lose marks as a result, whose fault is that — yours, the AI's, or your teacher's for not warning you? Why?",
            "Is there any subject where you would refuse to use AI summarisation at all? What properties of that subject make it different?",
            "Some teachers argue that making your OWN summary is part of the learning, and using AI to generate one is self-sabotage — even if you check it. Agree, disagree, or it depends? Defend your view with a specific example.",
        ],
        "class_task": (
            "Active-summarising loop (NotebookLM): students upload one chapter or set of class notes to "
            "NotebookLM, write 3–5 key points from memory first, then ask NotebookLM for a spec-aligned summary "
            "naming the required keywords. They run the gap-check prompt ('what exam-important terms did you NOT "
            "use, and why?'), cross-check the result against their exam-board specification, then turn the "
            "summary into a 5-question quiz (questions first, answers separate) and attempt it from memory. They "
            "finish by noting which active move they used and when they'll re-run the loop (24 hours / a week)."
        ),
        "differentiation": (
            "Support: provide the topic's spec keyword list pre-printed so students can tick which keywords the "
            "AI summary used and spot the gaps without hunting the spec PDF themselves. Stretch: students run "
            "the same summary in two tools (NotebookLM grounded in their notes vs Gemini ungrounded), compare "
            "what each drops, and explain why a source-grounded tool tends to hallucinate less."
        ),
        "assessment": (
            "Exit-ticket cross-check plan (AfL); evidence of the write-from-memory-first step and gap-check in "
            "the loop; the in-course quiz ('why always check an AI summary against your spec or textbook?' — "
            "answer: AI compresses and may leave out exactly what your examiner values)."
        ),
        "notes": (
            "Stress that asking the AI 'are you sure?' usually returns the same confident wrong answer rephrased "
            "— you need an outside source, ideally the exam board's own spec. NotebookLM is grounded in uploaded "
            "sources so it hallucinates less than an open chatbot, but 'safer' is not 'safe' — keep the "
            "cross-check habit either way. The 50% retention figure and the metacognitive-laziness warning are "
            "both well-sourced (Karpicke & Blunt 2011; Fan et al. 2025) — cite them as the evidence for active over passive."
        ),
    },
    # ===================================================================
    {
        "id": 109,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Quizzing Yourself with AI",
        "big_idea": "Self-quizzing beats re-reading because the effort of retrieving "
                    "information is what strengthens memory — the most replicated finding "
                    "in the science of learning. AI now makes unlimited, tailored practice "
                    "questions free and instant; the trick is to try first, then check.",
        "objectives": [
            "Explain why retrieval practice (the testing effect) beats re-reading, and that recognition is not recall.",
            "Name three or four learning effects (retrieval, spacing, generation, error-driven learning) and why they justify self-quizzing.",
            "Write a strong quiz prompt — board, subject, topic, level, count, type, questions-first-answers-after.",
            "Distinguish a strong quiz prompt from a weak one and plan spacing and interleaving.",
        ],
        "vocab": [
            ("Retrieval practice (testing effect)", "Trying to pull information out of your head strengthens the memory trace; replicated in 200+ studies since the 1930s."),
            ("Recognition vs recall", "Re-reading creates an illusion of fluency ('I've seen this') — but the exam requires recall, which quizzing trains."),
            ("Spacing effect", "The same revision time spread over days beats cramming — first documented by Ebbinghaus in 1885."),
            ("Generation effect", "Producing an answer yourself first — even a wrong one — creates a stronger memory than reading the right answer first."),
            ("Error-driven learning", "Getting a question wrong then learning the correct answer builds stronger memory than getting it right; ask AI to explain wrong options."),
            ("Interleaving", "Mixing questions from different topics in one quiz beats doing one topic at a time — feels worse, works better."),
            ("Transfer", "Being tested on unfamiliar question wordings prepares you for the novel phrasings examiners actually use."),
        ],
        "resources": [
            ("Course slides — Lesson 109 'Quizzing Yourself with AI'", "Removes course, Unit 2"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("NotebookLM (generate quizzes from your own notes)", "https://notebooklm.google.com"),
            ("Source: Dunlosky et al. (2013) — Improving students' learning with effective learning techniques (Psych Sci Public Interest)", "https://journals.sagepub.com/doi/10.1177/1529100612453266"),
            ("Source: Karpicke & Roediger (2008) — The critical importance of retrieval for learning (Science)", "https://www.science.org/doi/10.1126/science.1152408"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: in 2013 Dunlosky et al. ranked every major revision strategy by evidence — re-reading "
             "notes (the most common UK technique) came out near the bottom; the top two were practice testing "
             "and spaced practice. Self-quizzing beat highlighting, re-reading and summarising combined, "
             "replicated for 50+ years. Show the stats: ~2× higher retention from testing vs re-reading "
             "(Karpicke & Roediger 2008); £40/hr typical tutor rate vs free AI quizzing. The struggle to "
             "remember is what strengthens the memory."),
            ("Main teaching — Why quizzes win, and the named effects", "12 min",
             "Teach: (1) Why quizzes beat re-reading — every strong technique forces your brain to generate, "
             "not just recognise; re-reading creates an illusion of fluency, but the exam needs recall. (2) The "
             "named effects: retrieval practice, spacing, generation effect, error-driven learning — name them "
             "so students know WHY they're doing it. (3) Writing a quiz prompt that works: include board, "
             "subject, topic, year, count and type; ask for questions FIRST then answers separately "
             "(generation effect); ask for explanations of wrong answers (error-driven learning); ask for a "
             "difficulty ramp."),
            ("Activity — Strong or weak? + design your quiz prompt (Gemini)", "16 min",
             "Run the 'Strong or Weak?' classify (sort six quiz prompts — 'Quiz me on photosynthesis' vs the "
             "full AQA Biology DNA-structure prompt, etc. — noticing the weak ones could be typed by anyone and "
             "hand answers over instantly). Then the 'Design Your Quiz Prompt' activity: students write the "
             "best possible prompt for a topic they're revising (board, subject, topic, year, target grade, "
             "number/type), add 'questions first, answers after ANSWERS' and 'explain why each wrong answer is "
             "wrong', and run it in Gemini, recording their score to redo in 3 days."),
            ("Discussion — Quizzing, fairness & competition", "5 min",
             "Use the slide's discussion questions: is it fair that a pupil using AI-generated quizzes with "
             "error explanations will likely outscore one who re-reads for the same time? What responsibility "
             "does the pupil have to set the right difficulty — could easy questions make you overconfident? If "
             "the evidence says AI quizzing beats re-reading, what should schools that block AI tools do "
             "instead? Use the flashcard-app-vs-AI-quiz scenario to draw out that both tap retrieval and "
             "spacing, but AI adds variation and error explanations."),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Write a one-line plan: which topic, which AI quiz prompt, and on which three "
             "days will you re-test it?'"),
        ],
        "discussion": [
            "Two pupils revise the same topic for the same time — one re-reads notes, one uses AI quizzes with error explanations. Is it fair that the second will likely score significantly higher in the exam? Why or why not?",
            "AI can generate infinite variations — some easy, some impossibly hard. What responsibility does the pupil have to choose the right difficulty, and could AI quizzing make you overconfident if you only set easy questions?",
            "Some schools block AI tools. If the evidence says AI quizzing beats re-reading, what should those schools do instead — and is there a version of AI quizzing they could still allow?",
        ],
        "class_task": (
            "Design-and-run a quiz prompt (Gemini or NotebookLM): students write a strong quiz prompt for a "
            "topic they're revising — exam board, subject, specific topic, year, target grade, number and type "
            "of questions — with 'questions first, answers only when I reply ANSWERS' and 'explain why each "
            "wrong option is wrong'. They run it (in NotebookLM if quizzing from their own notes), attempt every "
            "question from memory before checking, record their score, and plan the spacing (tomorrow, +3 days, "
            "+7 days) and interleaving (mix in one or two other topics) — noting that scoring below 60% is a map "
            "of what to revise next, not a failure."
        ),
        "differentiation": (
            "Support: give a fill-in quiz-prompt template (board / subject / topic / year / number / type) and "
            "the fixed lines about questions-first and wrong-answer explanations, so students focus on the "
            "content. Stretch: students request a difficulty ramp (3 easy, 3 medium, 3 hard) and an interleaved "
            "quiz across two topics, then reflect on which felt harder and why that's a sign it's working."
        ),
        "assessment": (
            "Exit-ticket spacing plan (AfL); strength of the quiz prompt against the strong/weak criteria and "
            "evidence of attempting before checking; the in-course quiz ('why is testing yourself more "
            "effective than re-reading?' — answer: the effort of retrieving from memory strengthens it; passive "
            "reading doesn't)."
        ),
        "notes": (
            "Reinforce 'questions first, answers after' — if the AI hands over answers immediately it kills the "
            "generation effect, which is the whole point. Encourage students to seek discomfort: a 90%+ score "
            "usually means the questions were too easy or too similar to what they'd just seen. The evidence "
            "base here is unusually strong (Dunlosky 2013; Karpicke & Roediger 2008) — students can use the "
            "named effects to defend the technique when a friend insists re-reading is fine."
        ),
    },
    # ===================================================================
    {
        "id": 110,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Exam Technique with AI",
        "big_idea": "Most marks are lost on structure, timing and missed command words — "
                    "not on lack of knowledge — and that's exactly the closable gap AI can "
                    "lift. The rule never changes: plan and write yourself, use AI only to "
                    "diagnose against the real mark scheme. Protect your own voice.",
        "objectives": [
            "Explain what Assessment Objectives (AO1/AO2/AO3) are and how command words map to them.",
            "Plan an essay first, then prompt AI to critique the plan against the paper's AO weightings.",
            "Use AI to get the skeleton of a model answer (structure, not prose) and protect their own voice.",
            "Distinguish exam-safe AI exam-technique moves from ones that lose marks or cross the JCQ line.",
        ],
        "vocab": [
            ("Assessment Objective (AO)", "The numbered categories examiners tick — AO1 knowledge, AO2 apply/analyse, AO3 evaluate/contextualise. Most pupils never read them."),
            ("Command word", "Describe, Explain, Compare, Analyse, Evaluate — each maps to a different AO; getting it wrong can cap your mark."),
            ("AO weightings", "How many marks each AO is worth on a given paper — paste them into the prompt to make a chatbot a subject-specific examiner."),
            ("Skeleton over script", "Ask AI for the STRUCTURE of a grade-9 answer (topic sentences + the AO each targets), not the full prose — a map, not a script."),
            ("Planning-first", "Drafting a 4–6 bullet plan yourself before writing; planners outscore those who start writing immediately (chief examiner reports)."),
            ("Borrowed voice", "AI-polished prose over weak analysis — weakens AO2 and is instantly recognisable to JCQ-trained markers."),
            ("Diagnosis vs substitution", "AI is strongest at diagnosing your plan against AOs, weakest (and riskiest) when it writes the answer for you."),
        ],
        "resources": [
            ("Course slides — Lesson 110 'Exam Technique with AI'", "Removes course, Unit 2"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: AQA — GCSE chief examiner reports (subject results & reports)", "https://www.aqa.org.uk/exams-administration/results-days"),
            ("Source: Pearson Edexcel — GCSE specifications (AO weightings per paper)", "https://qualifications.pearson.com/en/qualifications/edexcel-gcses.html"),
            ("Source: Ofqual — Official statistics on GCSE outcomes and grading", "https://www.gov.uk/government/organisations/ofqual"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: chief examiner reports repeatedly flag that two candidates with essentially identical "
             "knowledge can finish one or two grades apart purely on technique — structure, timing, command-word "
             "discipline and AO coverage. AQA's 2023 reports name candidates who 'knew the content' but lost "
             "marks by never addressing AO2, ignoring the command word, or running out of time. Show the stats: "
             "1–2 grades technique gap at the same knowledge level; £40–60/hr for 1-to-1 technique coaching; 30 "
             "seconds for a well-prompted AI to critique a plan like an examiner."),
            ("Main teaching — AOs, planning first, skeleton not script", "13 min",
             "Teach: (1) Assessment Objectives as the secret mark scheme — AO1 knowledge, AO2 apply/analyse (the "
             "biggest national lost-mark area, AQA 2023), AO3 evaluate; command words map to AOs and getting "
             "them wrong caps your mark; the AI prompt for AO coverage. (2) Planning first, writing second — "
             "draft a 4–6 bullet plan yourself, paste the exact question AND your plan into AI, ask for a "
             "structured critique, ask for ONE high-impact upgrade per bullet (not a rewrite), then re-plan from "
             "scratch. (3) Model answers — read, don't copy: ask for the skeleton (topic sentences + AO each "
             "targets), never the full prose; a model answer is a map, not a script."),
            ("Activity — Build an AI examiner (Gemini)", "15 min",
             "Run the 'Build an AI Examiner' activity: students design one reusable examiner prompt for a "
             "subject and paper — Persona ('Act as an experienced [board] GCSE [subject] examiner marking "
             "[paper], using the AO weightings [paste them]'), Task ('I'll paste the question and my plan; "
             "critique against each AO, flag the weakest, give one sentence per AO that would lift it'), Format "
             "(three headed AO sections, <200 words), Context (year, target grade, weakest sub-skill, the "
             "command word). They draft a 4–6 bullet plan themselves first, then run the prompt in Gemini on "
             "that plan and save the prompt for reuse."),
            ("Discussion — Whose voice is it?", "5 min",
             "Use the 'Rewritten Essay' scenario (Kofi's AI-polished essay scores lower because the AO2 "
             "analysis weakened and the voice feels borrowed) and the 'Lift or Lose?' classify, then the "
             "slide's discussion questions: if AI can critique against AOs as accurately as a teacher, what's "
             "the value of the teacher reading it first? Does free AI examiner feedback level the playing field "
             "or widen the access gap? If everyone uses AI to polish answers, do results still measure "
             "individual ability?"),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name one exam-technique move that LIFTS your grade safely and one that LOSES "
             "marks or crosses the JCQ line — and the rule that tells them apart.'"),
        ],
        "discussion": [
            "If AI can critique a plan against AQA's AOs as accurately as a teacher, is there still value in your teacher reading it first — and what exactly is that value?",
            "A pupil whose parents pay for a 1-to-1 exam-technique tutor has always had this feedback on demand. Does free AI examiner feedback level the playing field, widen the gap, or something more complex?",
            "If every pupil uses AI to polish answers, do exam results still measure individual ability — or collective access to tools? What should Ofqual do about that?",
        ],
        "class_task": (
            "Build-an-AI-examiner (Gemini): students pick one subject and paper, find the AO weightings in the "
            "spec PDF, and build a reusable examiner prompt (Persona + Task + Format + Context as above). They "
            "draft their own 4–6 bullet plan for a real exam question FIRST, then paste the question and plan "
            "into Gemini and ask it to critique against each AO separately, flag the weakest AO, and give one "
            "sentence per AO that would lift it. They write that sentence themselves (keeping the voice theirs), "
            "save the prompt, and re-plan the same question cold the next day to check what stuck."
        ),
        "differentiation": (
            "Support: give the AO weightings for one paper pre-printed and a plan template (intro + three "
            "analytical points + conclusion) so students produce a plan to critique without first decoding the "
            "spec PDF. Stretch: students name their subject's structural mnemonic (PEEL/PETAL/SEC) in the "
            "prompt, then compare AI's AO critique against their teacher's feedback on the same plan and account "
            "for any differences."
        ),
        "assessment": (
            "Exit-ticket lift/lose distinction (AfL); whether the student's own plan came first and the "
            "examiner prompt targets specific AOs; the in-course quiz ('which AI exam-technique move is most "
            "likely to lift a grade and safest under JCQ 2024?' — answer: draft a plan yourself, then ask AI to "
            "critique it against your paper's AO weightings)."
        ),
        "notes": (
            "The non-negotiable is sequence: the student plans and writes; AI only diagnoses. Stress that "
            "'rewrite to sound smarter' weakens AO2 and produces instantly recognisable AI phrasing examiners "
            "are briefed to flag (the Kofi scenario), and that memorising model answers fails because exam "
            "questions vary. Encourage students to download their real exam board's spec and paste the AO "
            "weightings — that's what turns a generic chatbot into a subject-specific examiner."
        ),
    },
    # ===================================================================
    {
        "id": 111,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Avoiding the Traps",
        "big_idea": "Three named traps catch GCSE pupils out — plagiarism, hallucinations "
                    "and over-reliance. The first two are visible; the third quietly damages "
                    "the skill you sat down to build and only shows up in the exam hall. Each "
                    "trap is avoidable, with a different fix: declare, verify, own it.",
        "objectives": [
            "Define the JCQ 2024 plagiarism line and what must be declared in coursework and NEA.",
            "Explain why hallucinations happen and identify the highest-risk types (citations, dates, quotes, spec content).",
            "Describe over-reliance / cognitive offloading and why it's invisible until the exam hall.",
            "Tell the three traps apart and name the correct fix for each.",
        ],
        "vocab": [
            ("Plagiarism (JCQ 2024)", "Submitting AI-generated prose, analysis or sources as your own — malpractice, with penalties up to loss of the whole qualification."),
            ("Declaration", "In coursework/NEA, JCQ requires you to acknowledge any AI use — the tool, the prompts, and which sections were affected."),
            ("Hallucination", "Confident false information that looks plausible — a direct result of predicting the next likely token, not the next true one."),
            ("Fabricated citation", "Fake paper titles attached to real authors in real-sounding journals — the most common academic hallucination (Schwartz v. Avianca 2023)."),
            ("Over-reliance", "Leaning on AI so much you can only produce decent work with it — the trap no detector flags."),
            ("Cognitive offloading", "Outsourcing thinking so thoroughly the underlying skill never gets built (Gerlich 2025; MIT 2025 EEG study)."),
            ("False positive", "An AI-detector flagging human-written work as AI — Turnitin's own reported rate is ~1%, so detectors are never sole evidence."),
        ],
        "resources": [
            ("Course slides — Lesson 111 'Avoiding the Traps'", "Removes course, Unit 2"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: JCQ (2024) — AI Use in Assessments: Protecting the Integrity of Qualifications", "https://www.jcq.org.uk/exams-office/malpractice/artificial-intelligence/"),
            ("Source: Gerlich, M. (2025) — AI Tools and the Decline of Critical Thinking (Societies, MDPI)", "https://www.mdpi.com/2075-4698/15/1/6"),
            ("Source: Kosmyna, N. et al. (MIT Media Lab, 2025) — Your Brain on ChatGPT (EEG study preprint)", "https://www.media.mit.edu/projects/your-brain-on-chatgpt/overview/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: in June 2023 New York lawyer Steven Schwartz filed six judicial precedents — all six "
             "fabricated by ChatGPT, with fake judges and case numbers; he was fined $5,000. A year later JCQ "
             "(2024) classed undisclosed AI use in coursework as malpractice that can void a qualification; "
             "Turnitin's own report admits a ~1% false-positive rate on human work; and Gerlich (2025) found a "
             "negative correlation between heavy AI use and critical-thinking scores, strongest in under-25s. "
             "Name the three traps: plagiarism, hallucinations, over-reliance — all avoidable."),
            ("Main teaching — The three traps", "13 min",
             "Teach: (1) Plagiarism & the JCQ line — allowed: explain/quiz/feedback on your OWN draft without "
             "pasting output in; not allowed: submitting AI prose/analysis/sources as your own; must be "
             "declared in NEA (tool, prompts, sections); the verbal test (can you explain it aloud?); the "
             "University of Kent 2023 case (22 students given zero). (2) Hallucinations that sound real — "
             "fabricated citations, confident wrong dates, invented quotes, wrong spec content; safer tools "
             "(NotebookLM, Perplexity) reduce but don't eliminate it; cross-check every fact. (3) Over-reliance "
             "& cognitive offloading — Gerlich 2025, the MIT EEG study, the 'I get it' illusion, the exam-hall "
             "test; the fix is effort first, AI second."),
            ("Activity — Audit your last AI session (Gemini)", "15 min",
             "Run the 'Audit Your Last AI Session' activity: students honestly audit their most recent AI use "
             "for schoolwork in the notes box — write the exact prompt(s) and output; label each passage of "
             "their work GREEN (own thinking), AMBER (AI ideas re-worded) or RED (pasted verbatim); for every "
             "factual claim mark ✓/✗ whether they verified it; score 1–5 whether they could produce a "
             "comparable answer with no AI; name the trap they were closest to and the one behaviour change "
             "they'll make. They can use Gemini to fact-check one claim from that session as a live "
             "verification demo."),
            ("Discussion — Which trap is it? + fairness", "5 min",
             "Run the 'Which Trap Is It?' classify (sort six situations into plagiarism / hallucination / "
             "over-reliance, naming the fix each time), then the 'Flagged by the Detector' scenario (Amara, "
             "undeclared AI use, 85% Turnitin flag — the honest, least-damaging response is full transparency). "
             "Use the slide's discussion questions: is it ever ethical to use AI-detection as evidence given "
             "~1% false positives across 600,000 pupils? Whose responsibility is the critical-thinking decline? "
             "Should JCQ treat a dyslexic pupil smoothing sentences the same as one writing whole paragraphs?"),
            ("Plenary — Exit ticket", "2 min",
             "In the notes box: 'Name the three traps and the one-word fix for each.' (Target: plagiarism → "
             "declare; hallucination → verify; over-reliance → effort-first / own it.)"),
        ],
        "discussion": [
            "Turnitin's ~1% false-positive rate means that in a GCSE cohort of ~600,000 pupils, thousands of innocent candidates could be flagged. Is it ever ethical to use AI-detection as evidence against a pupil? Under what safeguards?",
            "Gerlich 2025 found the strongest link between AI over-use and critical-thinking decline among under-25s — your age group. Does that give you a personal responsibility, a school responsibility, a government responsibility, or all three? Who acts first?",
            "A pupil with dyslexia uses AI to smooth sentence structure; another uses AI to write whole paragraphs. Both are undeclared. Should JCQ policy treat them identically, or carve out 'reasonable adjustment' rules — and who decides the line?",
        ],
        "class_task": (
            "AI-session audit + verification (Gemini): students audit a recent real AI study session in the "
            "notes box — recording prompts and output, colour-coding their final work GREEN/AMBER/RED, and "
            "marking ✓/✗ for whether they verified each factual claim. They then take one date, statistic, "
            "citation or quote the AI produced and try to verify it independently (textbook, spec PDF or a "
            "named reputable source via Gemini), noting whether it held up. They score their over-reliance "
            "(could they reproduce the work with no AI, 1–5?), name the trap they were closest to, and write "
            "the single behaviour change they'll make next time."
        ),
        "differentiation": (
            "Support: give the GREEN/AMBER/RED key and a short checklist (prompt? verified? could you do it "
            "without AI?) so students can audit step by step rather than from a blank page. Stretch: students "
            "take the Amara scenario and write the exact transparent statement she should bring to the meeting, "
            "then argue whether AI-detection should ever be sole evidence, citing the false-positive maths."
        ),
        "assessment": (
            "Exit-ticket trap/fix recall (AfL); honesty and accuracy of the colour-coded audit and the "
            "verification step; the in-course quiz ('safest AI use for GCSE coursework under JCQ 2024?' — "
            "answer: use AI to quiz yourself and improve your OWN draft, declaring any use)."
        ),
        "notes": (
            "Keep the audit genuinely diagnostic, not punitive — students must feel safe being honest about RED "
            "passages, since that's where the real learning is. Be precise on detectors: Turnitin's own ~1% "
            "false-positive figure means schools are instructed NOT to rely on detector output as sole "
            "evidence; the teacher's knowledge of a pupil's usual voice matters too. The Schwartz case and the "
            "~18% fabricated-citation finding are well-sourced; over-reliance (Gerlich 2025, MIT 2025) is the "
            "subtlest and most important trap to land."
        ),
    },
    # ===================================================================
    {
        "id": 112,
        "unit": "Unit 2: AI for Study & Revision",
        "ailit": "Create & Manage AI",
        "title": "Your Revision Toolkit",
        "big_idea": "Everything from this unit stitches into one sustainable weekly routine: "
                    "AI helps you BEFORE you try (to prepare) and AFTER you try (to feedback) "
                    "— never INSTEAD of trying. The thinking stays yours, the loop is spaced "
                    "and interleaved, and you know when to keep AI out entirely.",
        "objectives": [
            "Run the four-step AI-assisted workflow: Understand → Practise → Feedback → Consolidate.",
            "Build a spaced, interleaved weekly routine (~20 min/day over 5 days) that uses AI in the right places.",
            "Choose a complementary 'stack of two' tools and match each to what it's best at.",
            "Identify specific situations where AI will actively make revision worse and should be kept out.",
        ],
        "vocab": [
            ("Revision loop", "Understand → Practise → Feedback → Consolidate — the cycle a good private tutor runs, now free and on demand."),
            ("Spacing", "Running the loop again 24 hours later, then 5–7 days later — the gold-standard retention curve (Ebbinghaus 1885)."),
            ("Interleaving", "Mixing topics in one session (e.g. Wed quiz spanning Mon and Tue topics) — feels worse, retains better."),
            ("Feynman Technique", "Writing your own summary from memory and comparing it to the original; weak spots go back to step 1."),
            ("Tool stack", "Picking two complementary tools (e.g. NotebookLM for your notes + a chatbot for quizzing) — not five; switching cost eats the benefit."),
            ("Self-regulated learning", "Planning, monitoring and testing your own study — among EEF's highest-impact, lowest-cost strategies (~+7 months)."),
            ("Knowing when not to use AI", "Keeping AI out when the task IS the skill, when you can't verify it, when it must be your voice, or in closed-book assessment."),
        ],
        "resources": [
            ("Course slides — Lesson 112 'Your Revision Toolkit'", "Removes course, Unit 2"),
            ("NotebookLM (study guides, audio overviews, spec-aligned quizzes from your notes)", "https://notebooklm.google.com"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Education Endowment Foundation — Metacognition & self-regulated learning (guidance report)", "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition"),
            ("Source: Kestin et al. (2024) — Harvard RCT on AI tutoring and learning gains (PNAS)", "https://www.pnas.org/doi/10.1073/pnas.2422458121"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Hook: you now know how to prompt, summarise, quiz, plan essays and spot the traps — the final "
             "question is how to stitch it into a routine you can sustain for five months. Show the stats: "
             "self-regulated study is among EEF's highest-impact, lowest-cost strategies (~+7 months' progress "
             "a year); ~80% of UK 13–18s now use AI for schoolwork (OUP 2025) but most use it wrong; ~66 days "
             "to make a habit stick (Lally et al. 2010). The key rule: AI helps you BEFORE and AFTER you try — "
             "never instead of trying."),
            ("Main teaching — The workflow, the week, the stack", "13 min",
             "Teach: (1) The four-step workflow — Understand (AI explains; you re-explain aloud) → Practise "
             "(generate questions, attempt from memory first — generation effect) → Feedback (AI marks against "
             "the mark scheme, flags missing spec keywords) → Consolidate (write your own summary from memory — "
             "the Feynman Technique), with a spacing overlay. (2) The weekly routine — ~20 min/day × 5 days: "
             "Topic A loop Mon, Topic B Tue, mixed A&B quiz Wed (interleaving), Topic C Thu with an A/B "
             "warm-up, a timed mini-paper Fri, a 10-min weekend flashback. (3) The tool stack — chatbots, "
             "NotebookLM, Quizlet/Anki, Khanmigo, BBC Bitesize + AI — but pick TWO, not five."),
            ("Activity — Build your revision plan (NotebookLM + Gemini)", "15 min",
             "Run the 'Build Your Revision Plan' activity: students pick one subject, name their three weakest "
             "sub-topics (from mock/past-paper feedback), and draft the exact prompts for each day — Monday "
             "Understand-step (board, level, specific confusion), Tuesday Practise-step (6 questions, mark "
             "scheme separate), Wednesday a 10-question mixed A&B quiz, Thursday Topic C with an A/B warm-up, "
             "Friday a timed mini-paper across all three. They put each 20-minute session in their calendar "
             "now, and run one step live (e.g. a NotebookLM quiz from their notes) to test the prompt."),
            ("Discussion — Knowing when NOT to use AI", "5 min",
             "Use the 'Knowing When NOT to Use AI' concept and the 'Pre-Mock Crunch' scenario (4 hours, 8 "
             "topics, last paper 48% — the highest-value move is AI-diagnose weakest 3 topics, then loop them "
             "spaced, not re-read or memorise model answers). Then the slide's discussion questions: who should "
             "level the field when AI tools are used unevenly across schools? How do you tell good use from "
             "procrastination dressed up as revision? Will these habits still matter when you're 25 in a "
             "graduate job?"),
            ("Plenary — Exit ticket / Unit 2 recap", "2 min",
             "Unit 2 exit ticket: 'Describe, in one sentence, the AI study habit you will keep — and the one "
             "you will deliberately stop.' If time, take one Unit 2 recap question (e.g. which task is LEAST "
             "appropriate to offload to AI)."),
        ],
        "discussion": [
            "If AI revision tools produce measurable grade gains but are used unevenly across schools (some ban them, some teach them), what responsibilities does that place on the DfE, on schools, and on you personally? Who should level the field?",
            "You've been taught a complete AI-assisted toolkit. How do you know when you're using it well versus using it as procrastination dressed up as revision? What are the warning signs?",
            "Imagine you're 25 in a graduate job and AI tools are far more capable than today. Will the habits from this toolkit — retrieval, spacing, self-testing, knowing when to offload and when not — still be useful? Why or why not?",
        ],
        "class_task": (
            "Build-and-schedule a 5-day plan (NotebookLM + Gemini): students pick one subject, name their three "
            "weakest sub-topics, and draft the exact prompt for each day of the loop (Understand, Practise, "
            "mixed quiz, new topic with warm-up, timed mini-paper) — uploading their own notes to NotebookLM "
            "for the steps grounded in their material. They run Monday's Understand-step and Tuesday's "
            "Practise-step live, attempting questions from memory before checking, then put every 20-minute "
            "session into their calendar with a specific slot. They finish by naming one situation in this plan "
            "where they will deliberately keep AI out, and why."
        ),
        "differentiation": (
            "Support: give a pre-built weekly grid (Mon–Fri with the loop step labelled) so students slot in "
            "their topics and prompts rather than designing the schedule from scratch. Stretch: students take "
            "the Pre-Mock Crunch scenario, build the diagnose-then-loop plan for their own weakest subject, and "
            "predict the realistic mock-score movement, justifying it with the spacing and retrieval evidence."
        ),
        "assessment": (
            "Exit-ticket keep/stop habit (AfL); completeness and realism of the calendared 5-day plan with "
            "attempt-first evidence; the in-course quiz ('when should you NOT use AI for studying?' — answer: "
            "when you're about to submit AI output as your own work without engaging with it) and the Unit 2 "
            "recap and assessment task (run one full loop, prove the thinking stayed yours)."
        ),
        "notes": (
            "This is the capstone of Unit 2 — tie back explicitly to prompting (107), summarising (108), "
            "quizzing (109), exam technique (110) and the traps (111). Push the 'stack of two' advice hard: "
            "students tend to collect tools rather than build habits. The when-NOT-to-use-AI concept matters as "
            "much as the workflow — closed-book exams, skill-building tasks, private data and tasks needing "
            "your own voice are all keep-AI-out zones (cognitive-offloading evidence: Gerlich 2025, MIT 2025). "
            "Free tiers of Gemini and NotebookLM (school account) are enough for everything here."
        ),
    },
]
