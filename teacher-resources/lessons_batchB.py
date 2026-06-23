# -*- coding: utf-8 -*-
# Removes Course (Year 9) — Teacher Lesson Plans, Batch B (Unit 3).
# Same dict structure/style as build_lesson_plans.py (lessons 101–103).
# Content derived faithfully from js/slides-gcse.js (lessons 113–118, 134, 136).

LESSONS_BATCH = [
    # ===================================================================
    {
        "id": 113,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Prompting 101",
        "big_idea": "Prompting is a learnable skill, not a personality trait. The same "
                    "AI gives very different results depending on how you ask — and the "
                    "single biggest upgrade is specificity, plus treating the first "
                    "answer as a draft to refine.",
        "objectives": [
            "Identify the five building blocks of a strong prompt (Role, Task, Context, Format, Constraint).",
            "Diagnose the common prompting mistakes (too vague, no format, no iteration, treating AI like a search engine, over-specifying).",
            "Rewrite a weak one-line prompt into a specific, well-structured one.",
            "Explain why iteration and 'collaborate, don't command' produce better output than accepting the first answer.",
        ],
        "vocab": [
            ("Prompt", "The instruction you give an AI; its quality largely determines the quality of the output."),
            ("PTFC / RTF / CRISPE", "Different acronyms for the same prompt ingredients — Persona/Role, Task, Format, Context (and Constraint)."),
            ("Role (persona)", "Telling the AI who to act as ('a patient GCSE AQA Biology tutor') — sets tone, vocabulary and level."),
            ("Context", "Your level, exam board, target grade and known weak spots — tells the AI what to pitch at and emphasise."),
            ("Constraint", "Limits that keep output focused — word count, UK English, no jargon, bold key terms."),
            ("Iteration", "Refining a prompt over several rounds; expert prompt engineers use 3–5 to reach a final output."),
            ("Gem / Project", "A saved Role + Context (Gemini Gem, Claude Project) so you never re-type your setup."),
        ],
        "resources": [
            ("Course slides — Lesson 113 'Prompting 101'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Dell'Acqua et al. (Harvard/Wharton, 2023), 'Navigating the Jagged Technological Frontier'", "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700"),
            ("Source: Mollick, E. — 'Centaurs and Cyborgs on the Jagged Frontier' (One Useful Thing, 2023)", "https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged"),
            ("Source: OpenAI prompt engineering cookbook; Anthropic prompt engineering overview", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Open on the two-students story: same task, same AI, but one gets clear useful help and one gets a wall of "
             "generic text — the difference was how they asked. Display the hook stats: people using AI on suitable tasks "
             "produced work rated ~40% higher quality (Dell'Acqua et al., 2023); expert prompt engineers iterate 3–5 times; "
             "and students who just accept the first AI draft can do worse than no AI at all. Frame the lesson: prompting is "
             "a learnable skill — and it all works in Gemini, the AI in their school Google account."),
            ("Main teaching — Anatomy of a great prompt", "12 min",
             "Teach the five building blocks with the slide's examples: Role ('Act as a patient GCSE AQA Biology tutor'), "
             "Task (specific verb + content), Context (Year 11, AQA Paper 1, grade 7, confuses atria/ventricles), Format "
             "('3-sentence overview, then 5 numbered steps, then 3 self-test questions') and Constraint (under 250 words, "
             "UK English, bold key terms). Then run the four/five common mistakes slide — vague, no format, no iteration, "
             "treating it like a search engine, over-specifying with 15 lines when 3–5 is the sweet spot. Emphasise: you "
             "don't need all five every time, but more specificity means more useful output."),
            ("Activity — PTFC builder + Spot the Better Prompt (Gemini)", "15 min",
             "Students use the PTFC builder habit, then do 'Spot the Better Prompt' in pairs: for each A/B pair (e.g. 'What "
             "is globalisation?' vs 'Explain globalisation and its effects for GCSE Geography in 4 points with real "
             "examples') they decide which wins and why, then rewrite the loser to match. Finally each student takes a "
             "real one-line prompt they used this week, adds Role + Context + Format, and runs both versions in Gemini "
             "(gemini.google.com) to compare the before/after."),
            ("Discussion — Prompting, fairness & skill", "5 min",
             "Use the slide's questions: should schools explicitly teach prompt engineering — and what happens to pupils "
             "whose schools ban it? When a brilliant prompt produces essay-standard output, who gets the credit? And will "
             "better AI make prompting matter less or more? Draw out that prompting is genuine, transferable skill."),
            ("Plenary — Exit ticket", "3 min",
             "Run the in-course quiz on the photosynthesis prompts and confirm the answer (the version with context, format "
             "and constraints). Exit ticket: 'Write one PTFC-structured prompt you'll actually use this week.'"),
        ],
        "discussion": [
            "If prompt engineering is a learnable skill that measurably improves AI output quality, should schools explicitly teach it — and what happens to pupils whose schools ban it?",
            "A brilliant prompt can produce essay-standard output. Who gets credit: the pupil for crafting the prompt, or the AI for generating the words? Where do YOU draw the line?",
            "Some argue that as AI gets smarter, prompting will become less important; others say better AI rewards better prompting more. Which do you think is right, and why?",
        ],
        "class_task": (
            "Prompt makeover (Gemini): each pair picks a real revision task and writes a deliberately vague prompt "
            "('explain photosynthesis'), runs it, then rewrites it using Role + Task + Context + Format + Constraint "
            "from the slide's worked GCSE Biology example, and runs that. They paste both outputs into the notes box and "
            "annotate exactly what improved. Stretch the habit: save the winning Role + Context as a Gemini Gem to reuse."
        ),
        "differentiation": (
            "Support: give students the five building-block sentence starters pre-printed so they assemble a prompt by "
            "filling blanks before typing into Gemini. Stretch: have students find the 'over-specifying' failure mode — "
            "deliberately add too much context and show where extra detail starts to confuse rather than help the model."
        ),
        "assessment": (
            "Exit-ticket PTFC prompt (AfL); quality of the before/after annotation in the makeover task; the in-course "
            "quiz (most useful prompt = the GCSE-Biology version with format and constraints, not 'What is photosynthesis?')."
        ),
        "notes": (
            "The Dell'Acqua 40% figure is task-specific — it applies to tasks that suit AI, not all work; say so to keep "
            "it honest. Keep model names current (mid-2026: GPT-5.x, Claude Opus 4.8 / Sonnet 4.6, Gemini 3.x) but the "
            "five-lever framework is model-independent. Remind students Gemini is the school-account tool, so demo there."
        ),
    },
    # ===================================================================
    {
        "id": 114,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Evaluating AI Output",
        "big_idea": "Confident language from an AI is not evidence of accuracy — they "
                    "are completely separate things. Evaluating output with a few fast "
                    "checks is now a core skill, because the most convincing-looking "
                    "details (specific names, stats, citations) are exactly what AI "
                    "invents most often.",
        "objectives": [
            "Apply five fast checks to any AI response (answers the question, verifiable, up to date, matches what you know, hedging).",
            "Name and recognise the four types of hallucination (factual, citation, logical, temporal).",
            "Spot the red flags that signal a likely hallucination, especially fabricated citations and oddly-specific statistics.",
            "Use a verification routine (e.g. SIFT) before quoting AI output in homework or coursework.",
        ],
        "vocab": [
            ("Hallucination", "A confident, plausible-sounding AI answer that is simply false."),
            ("Citation hallucination", "Invented books, papers, URLs or quotes — author and title sound real, the source doesn't exist."),
            ("Temporal hallucination", "Out-of-date information presented as current, because of the model's training cut-off."),
            ("Knowledge cut-off", "The date training data stops; events, laws and research after it may be wrong or missing."),
            ("Hedging", "Vague language ('generally', 'most sources agree') that often signals model uncertainty."),
            ("SIFT", "Caulfield's verification routine: Stop, Investigate the source, Find better coverage, Trace claims to the original."),
            ("Verification", "Cross-checking a claim against a textbook, official source or reputable site before trusting it."),
        ],
        "resources": [
            ("Course slides — Lesson 114 'Evaluating AI Output'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Mata v. Avianca, Inc. (S.D.N.Y., 22 Jun 2023) — ChatGPT-invented case citations sanctioned", "https://www.nytimes.com/2023/06/22/nyregion/lawyers-chatgpt-schwartz-loduca.html"),
            ("Source: Ji, Z. et al. (2023), 'Survey of Hallucination in Natural Language Generation', ACM Computing Surveys", "https://dl.acm.org/doi/10.1145/3571730"),
            ("Source: Caulfield, M. — SIFT (The Four Moves)", "https://hapgood.us/2019/06/19/sift-the-four-moves/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Tell the Mata v. Avianca story: in 2023 attorney Steven Schwartz filed a legal brief citing six past cases "
             "that looked perfect — all six were invented by ChatGPT, and Judge Castel sanctioned him and his firm $5,000. "
             "Display the hook stats (6/6 fake cases, $5k sanction, citation fabrication among the most documented "
             "hallucination types). Write the lesson's line on the board: 'Confident language is not evidence of accuracy.'"),
            ("Main teaching — Five checks + four hallucination types", "12 min",
             "Teach the five fast checks: Does it answer the question? Is it verifiable? Is it up to date (cut-off in "
             "2025–2026)? Does it match what you know (your exam-board source usually wins)? Is it hedging? Then the four "
             "hallucination types — factual (Treaty of Versailles '1920' is wrong, it's 1919), citation (invented "
             "papers/URLs), logical (steps don't add up), temporal (out-of-date as current). Add the SIFT pro-move and "
             "the red flags: specific stats with no source, neat-but-unknown paper titles, over-confident answers on "
             "uncertain topics, AI-generated URLs that 404."),
            ("Activity — Spot the Hallucination + Find the Errors (Gemini)", "15 min",
             "Students do the 'Spot the Hallucination' widget (three responses; the fabricated '2022 study by Dr Sarah "
             "Mitchell at Oxford, 73.2%' is the made-up one) and explain why specificity made it convincing. Then 'Find "
             "the Errors': they mark up the faulty Treaty of Versailles response (signed 1919 not 1920; ended WW1 not WW2) "
             "and list what they'd check. Finally, in Gemini, they try the slide's confidence test — ask 'are you confident "
             "about that claim? Cite your specific source' on a doubtful answer and watch whether the confidence or the "
             "source shifts."),
            ("Discussion — Verification, trust & responsibility", "4 min",
             "Use the slide's questions: if an AI invents a source and you quote it in good faith, are you still "
             "responsible? Should AI be banned for research, or should we teach verification instead? Is a 95%-accurate AI "
             "with confident 5% errors more dangerous than one that's clearly unreliable?"),
            ("Plenary — Exit ticket", "4 min",
             "Run the in-course quiz (the '2022 Dr Sarah Mitchell, 73%' claim → search for it independently, because "
             "specific names/stats/citations are the most hallucinated type). Exit ticket: 'Name the one red flag you'll "
             "watch for from now on, and how you'll check it.'"),
        ],
        "discussion": [
            "If an AI confidently invents a source and you quote it in good faith, are you still responsible? Does it matter that you didn't know it was false?",
            "Some argue AI tools should never be used for research because of hallucination risk; others say the fix is teaching verification, not banning the tool. Which is more realistic for the next 10 years — and why?",
            "Imagine an AI gives 95% accurate information but the 5% errors are confident and convincing. Is that more dangerous than an AI that is clearly unreliable? Why?",
        ],
        "class_task": (
            "Verification challenge (Gemini): each pair asks Gemini a factual question that invites a citation (e.g. "
            "'Give me three academic studies on teenage sleep and screens, with authors and years'), then runs the five "
            "checks and the SIFT routine on the answer — searching each citation independently to see which are real, "
            "misattributed or entirely invented. They record their verdict for each source and a one-line rule they'll "
            "reuse. Reinforces that the convincing details are exactly the ones to verify."
        ),
        "differentiation": (
            "Support: provide the five-checks as a printed checklist students tick against one teacher-chosen AI response. "
            "Stretch: students design their own 'spot the hallucination' trio — two true responses and one believable "
            "fabricated citation — and swap with another pair to catch the fake."
        ),
        "assessment": (
            "Exit-ticket red-flag answer (AfL); accuracy of the 'Find the Errors' mark-up (1919 not 1920; WW1 not WW2); "
            "the in-course quiz (search the Dr Sarah Mitchell study independently before citing it)."
        ),
        "notes": (
            "All current frontier models still hallucinate citations — including the newest — so present this as a "
            "permanent literacy skill, not a flaw being fixed. The Versailles reparations figure in the activity is "
            "roughly correct and the territorial detail partly correct, so reward students who flag the clear errors "
            "(date, war) rather than over-correcting the accurate parts. Stress the JCQ angle: passing off unverified AI "
            "citations in coursework is potential malpractice."
        ),
    },
    # ===================================================================
    {
        "id": 115,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "AI and Creativity",
        "big_idea": "Generative AI can produce output humans judge as creative across "
                    "every medium — but it recombines patterns from millions of human "
                    "creators rather than originating with intent or meaning. Who gets "
                    "credit, who owns it, and who gets paid are live legal and ethical "
                    "fights with real economic stakes.",
        "objectives": [
            "Describe what generative AI can create across text, image, music, video, voice and code.",
            "Distinguish producing creative-looking output from being creative (recombination vs origination).",
            "Explain why purely AI-generated work generally has no copyright protection, and what 'human authorship' adds.",
            "Weigh the collaboration-vs-replacement debate and its impact on creative livelihoods.",
        ],
        "vocab": [
            ("Generative AI", "AI that creates new content — text, images, music, video, voice, code — from a prompt."),
            ("Recombination vs origination", "AI remixes patterns from human-made works; it has no intent, emotion or meaning behind output."),
            ("Human authorship", "The legal test for copyright — the more genuine, evidenced creative choices a person makes, the more protection."),
            ("Training data", "The existing works a model learns from — often human creators' work used without consent or compensation."),
            ("Human-in-the-loop", "Workflow where AI drafts and a human directs, edits and takes responsibility; now standard at major ad agencies."),
            ("Consent-based collaboration", "Compensating creators whose work or likeness is used — e.g. Grimes' 2023 50/50 AI-voice royalty offer."),
            ("Copyright", "Legal protection for original human-authored work; pure prompt-to-output has no author and no protection."),
        ],
        "resources": [
            ("Course slides — Lesson 115 'AI and Creativity'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Roose, K. — 'An A.I.-Generated Picture Won an Art Prize. Artists Aren't Happy.' (NYT, 2 Sep 2022)", "https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html"),
            ("Source: Getty Images v. Stability AI — Complaint (Delaware District Court, Feb 2023)", "https://copyrightlately.com/wp-content/uploads/2023/02/Getty-Images-v.-Stability-AI-Complaint.pdf"),
            ("Source: US Copyright Office — 'Works Containing Material Generated by AI' (March 2023)", "https://www.copyright.gov/ai/ai_policy_guidance.pdf"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Tell the Jason Allen story: in September 2022 his Midjourney image 'Théâtre D'opéra Spatial' won first place "
             "at the Colorado State Fair fine-art competition and artists were furious. Display the hook stats (12M+ images "
             "scraped per the Getty lawsuit; $0 paid to artists whose work trained Midjourney; the NYT v. OpenAI suit "
             "still in active litigation). Ask: did the AI 'create' this — and who, if anyone, deserves the prize?"),
            ("Main teaching — What AI creates + collaboration vs replacement", "12 min",
             "Walk through what AI can create today: text (96% of 2,400+ Authors Guild survey want consent before their "
             "work trains AI), images (Midjourney v6, DALL-E 3), music (Suno, Udio; Universal Music sued Anthropic over "
             "lyrics), video (Sora, Runway, Veo; WGA/SAG-AFTRA 2023 strikes won AI limits), voice (ElevenLabs — used "
             "legitimately for Vader in Obi-Wan, and misused in a 2024 scam costing 6,000+ victims ~£27m) and code (GitHub "
             "Copilot, 1.3M+ paying devs, up to 55% faster). Draw the key distinction: AI is good at volume, variation and "
             "remixing; humans add original vision, emotion, context and moral responsibility."),
            ("Activity — Copyright-Protected or Not? (Gemini)", "15 min",
             "Students do the 'Copyright-Protected or Not?' sort: your own phone photo (protected), a human band's song "
             "(protected), an AI image you significantly repainted by hand (protected in part), the 'Zarya of the Dawn' "
             "comic where you wrote/arranged it but AI made the pictures (protected in part), a single Midjourney prompt "
             "used as-is (no copyright), a full ChatGPT story (no copyright). They then use Gemini to fact-check the "
             "principle — ask it to explain the US Copyright Office's human-authorship test — and verify its answer "
             "against the slide and the cited guidance."),
            ("Discussion — Think & discuss", "5 min",
             "Use the slide's questions: if an AI image wins a competition, who deserves the prize? Is AI remixing human "
             "art different from a human being 'inspired' by other artists? If AI can write a decent song in seconds, "
             "does that devalue human musicians?"),
            ("Plenary — Exit ticket", "3 min",
             "Run the in-course quiz (the 2022 prize win most clearly shows AI can produce output humans judge creative "
             "WITHOUT understanding or intent). Exit ticket: 'In one sentence, what does human creativity add that AI "
             "doesn't?'"),
        ],
        "discussion": [
            "If an AI image wins an art competition, who deserves the prize — the AI, the person who wrote the prompt, or no one?",
            "Is there a difference between AI remixing human art and a human artist being 'inspired' by other artists?",
            "If AI can write a decent song in seconds, does that devalue the work of human musicians?",
        ],
        "class_task": (
            "Authorship audit (Gemini): in pairs, students generate a short creative piece from a single Gemini prompt "
            "(a six-line poem or a story opening), then redo it with substantial human direction — rewriting lines, "
            "choosing structure, adding their own ideas. They document which version, under the slide's human-authorship "
            "test, could hold copyright and why, and write a one-paragraph verdict on where the creative line falls."
        ),
        "differentiation": (
            "Support: pre-sort two of the six copyright items as a class, talking through the human-authorship test, before "
            "students do the rest. Stretch: students research the real 'Zarya of the Dawn' decision and argue whether the "
            "Copyright Office drew the line in the right place."
        ),
        "assessment": (
            "Exit-ticket statement (AfL); accuracy of the copyright sort against the human-authorship rule; the in-course "
            "quiz (AI produces creative-looking output without understanding or intent)."
        ),
        "notes": (
            "Copyright law here is genuinely unsettled and case-by-case — present the US/UK position (human authorship "
            "required, pure prompt-to-output unprotected) as current guidance, not a fixed eternal rule, and note "
            "litigation is ongoing. Keep model/tool names current; the teaching point (recombination, not origination) "
            "is stable. Be sensitive that some pupils may themselves create art or music."
        ),
    },
    # ===================================================================
    {
        "id": 116,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Automating the Boring Stuff",
        "big_idea": "The smartest AI users automate the low-value tasks AROUND them so "
                    "they have energy for the thinking that counts — but skills you don't "
                    "practise, you lose. If a task is on an exam you'll sit, do it "
                    "yourself; if it's mechanical, automate it and reinvest the time.",
        "objectives": [
            "Identify the tasks AI handles well (formatting, translating, first drafts, summarising, templates, reorganising).",
            "Decide whether to automate a task, do it yourself, or judge it case-by-case, using whether the thinking stays yours.",
            "Explain cognitive offloading and why some automation quietly erodes skills you're examined on.",
            "Apply the rule: if it appears on an exam paper you will sit, do NOT automate it.",
        ],
        "vocab": [
            ("Cognitive offloading", "Moving mental work from your brain to a tool — some is fine (writing, calculators), some erodes needed skills."),
            ("Productive struggle", "Bjork's 'desirable difficulties' — the tasks that feel hardest build the deepest learning."),
            ("Automate / do-it-yourself / depends", "The three-way test: mechanical tasks vs examined skills vs 'depends how you use it'."),
            ("First-draft generation", "Using AI for a starting point (emails, outlines, summaries) that you then edit into something real."),
            ("Context window", "How much you can paste at once — Claude handles 200k tokens, roughly a 500-page textbook."),
            ("The GPS effect", "Heavy reliance erodes the underlying skill — GPS users lose navigation ability (Dahmani & Bohbot, 2020)."),
            ("Dependence risk", "Every skill fully delegated to AI is at risk if the tool is unavailable — exams, interviews, power cuts."),
        ],
        "resources": [
            ("Course slides — Lesson 116 'Automating the Boring Stuff'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: McKinsey & Company (2023), 'The economic potential of generative AI'", "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"),
            ("Source: Brynjolfsson, Li & Raymond (Stanford/NBER, 2023), 'Generative AI at Work'", "https://www.nber.org/papers/w31161"),
            ("Source: Gerlich, M. (2025), 'AI Tools in Society: Cognitive Offloading and Critical Thinking' (Societies, MDPI)", "https://www.mdpi.com/2075-4698/15/1/6"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the hook stats: McKinsey (2023) estimated gen AI could help automate activities absorbing 60–70% of "
             "the average employee's time; the Stanford/NBER study (Brynjolfsson et al., 2023) found a ~14% average "
             "productivity gain, biggest for the least-experienced staff; and 0 skills are gained by delegating tasks you "
             "still need to learn. Pose the hidden cost: 'Some tasks are boring for a reason — the boredom is the practice.'"),
            ("Main teaching — Sweet spot + the hidden cost", "12 min",
             "Teach the tasks AI handles well (formatting/restructuring, translating GCSE-level languages, first drafts, "
             "summarising long documents, repetitive templates, reorganising scattered ideas — all where the output has a "
             "clear right shape and a human adds nothing). Then the hidden cost: cognitive offloading, with the Gerlich "
             "2025 finding that the heaviest ChatGPT users scored lowest on the Halpern critical-thinking measure; "
             "productive struggle (Bjork); writing-shapes-thinking (Orwell); the GPS effect. Land the rule of thumb: if it "
             "appears on an exam you'll sit, do NOT automate it."),
            ("Activity — Automate / Do It Yourself / Depends + Sort the Tasks (Gemini)", "15 min",
             "Students do the three-column sort: reformatting notes into a table and generating flashcards from a studied "
             "chapter = automate; writing the English Lit essay and solving the Maths set = do it yourself (and JCQ "
             "malpractice if AI-written); researching coursework and using AI while coding = depends. Then in the notes "
             "box they make two specific lists from THIS term's real tasks (A: useful to automate; B: must do themselves) "
             "plus a grey-area list, and swap with a partner to argue any disagreements. Optional: use Gemini only to "
             "automate a genuinely mechanical task (reformat messy notes into a table) to feel the time saved."),
            ("Discussion — Automation, fairness & futures", "4 min",
             "Use the slide's questions: what does large-scale routine-task automation mean for the job market they'll "
             "enter at 22? What would you say to a classmate who 'uses AI for everything and gets fine grades' before a "
             "closed-book exam? Is automating a skill (handwriting) different from automating a thinking process "
             "(essay-writing), and where's the line?"),
            ("Plenary — Exit ticket", "4 min",
             "Run the in-course quiz (best automation = converting notes into a formatted table; writing the essay/solving "
             "the set is plagiarism and removes learning). Exit ticket: 'Name one task you'll automate this week and one "
             "you'll deliberately keep doing yourself — and why.'"),
        ],
        "discussion": [
            "If gen AI could help automate a large share of routine knowledge-work tasks, what does that mean for the jobs market you'll enter at 22 — and how do you tell which careers are most at risk?",
            "A classmate says 'I use AI for everything and my grades are fine.' What would you say back — and what happens when the grade that matters is a closed-book exam?",
            "Is there a difference between automating a skill (like handwriting, since we all type) and automating a thinking process (like essay-writing)? Where is the line, and who draws it?",
        ],
        "class_task": (
            "Reclaim-the-time task (Gemini): each student picks one genuinely mechanical job from their real week — "
            "reformatting revision notes into a table, turning a chapter summary into flashcards, or drafting a "
            "thank-you email template — and automates it in Gemini. They then write, in the notes box, what they did with "
            "the reclaimed time and one task they refused to automate because it's a skill they're examined on. The split "
            "is the assessed thinking, not the automation."
        ),
        "differentiation": (
            "Support: give a pre-filled set of six task cards to sort into automate / do-it-yourself / depends before "
            "students generate their own lists. Stretch: students take a 'depends' task (e.g. coursework research) and "
            "write the precise boundary that keeps it on the right side of JCQ rules — what AI may do and what it must not."
        ),
        "assessment": (
            "Exit-ticket automate/protect choice (AfL); quality of reasoning in the partner-swap argument; the in-course "
            "quiz (formatting notes into a table is the best automation use)."
        ),
        "notes": (
            "The McKinsey 60–70% figure is about activities/time, not whole jobs being deleted — be precise so students "
            "don't catastrophise. Gerlich 2025 is correlational, not proof of causation; present it as a strong warning "
            "signal, not certainty. Keep tying every 'do it yourself' judgement back to JCQ 2024 malpractice rules for "
            "examined work."
        ),
    },
    # ===================================================================
    {
        "id": 136,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Should I Even Use AI Here?",
        "big_idea": "The most AI-literate skill is knowing when NOT to use AI. 'Managing "
                    "AI' means dividing a task deliberately between human and machine — "
                    "Automate, Augment or Avoid — so human effort goes to judgement, "
                    "voice, learning and relationships. Choosing the boundary is the "
                    "whole skill.",
        "objectives": [
            "Distinguish Automate, Augment and Avoid, and match the right option to a given task.",
            "Use the deciding questions (skill I must own? can I verify it? whose voice? what if it's wrong?) to choose a boundary.",
            "Decompose a multi-step task and assign each step to the human or the AI before starting.",
            "Recognise metacognitive laziness and when AI is actively the wrong tool.",
        ],
        "vocab": [
            ("Manage AI", "The AILit skill of intentional human/AI division of labour — including choosing NOT to use AI."),
            ("Automate", "Hand the whole task to AI — fine for low-stakes, verifiable, repetitive work that's easy to check."),
            ("Augment", "You do the thinking, AI assists (quizzes you, critiques, explains) — where most learning value lives."),
            ("Avoid", "Keep AI out — examined skills, your own voice, private data, closed-book assessment. A valid, literate choice."),
            ("Metacognitive laziness", "When always-on AI fills gaps before you feel them, so you stop noticing what you don't understand (Fan et al., 2025)."),
            ("Durable learning", "Knowledge that lasts and transfers — AI can raise work quality without producing it (OECD, 2026)."),
            ("Decomposition", "Splitting a multi-step task and assigning each step to human or AI based on strengths, before you start."),
        ],
        "resources": [
            ("Course slides — Lesson 136 'Should I Even Use AI Here?'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Lee et al. (2025), 'The Impact of Generative AI on Critical Thinking' (Microsoft Research & CMU, CHI 2025)", "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking/"),
            ("Source: OECD (2026) — AI work-quality gains do not translate into durable learning", "https://doi.org/10.1787/65cd27d4-en"),
            ("Source: Fan et al. (2025), 'Beware of Metacognitive Laziness' (British Journal of Educational Technology)", "https://doi.org/10.1111/bjet.13544"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Open on the lesson's premise: most AI advice is about using AI better — this is about knowing when NOT to. "
             "Display the hook findings: the more workers TRUSTED an AI tool, the LESS critical thinking they applied "
             "(Microsoft/CMU, 2025); AI can raise pupils' work quality but the gains often don't become durable learning, "
             "leaving over-users underprepared for closed-book assessment (OECD, 2026); and 78% of Europeans want digital "
             "skills taught on a par with reading, maths and science (Eurobarometer, 2025). Frame it as the AILit 'Manage "
             "AI' skill."),
            ("Main teaching — Automate / Augment / Avoid", "12 min",
             "Teach the three honest options: Automate (whole task to AI — low-stakes, verifiable, repetitive, like "
             "formatting a reference list); Augment (you think, AI assists — quizzing, critiquing, explaining — where "
             "almost all the learning value lives); Avoid (keep AI out — examined skills, your own voice, private data, "
             "closed-book work; avoiding AI is a valid literate choice). Teach the deciding questions and the trap of "
             "metacognitive laziness (Fan et al., 2025) — always-on AI fills the gap before you feel it. Add 'When AI is "
             "the wrong tool': when you need to learn the skill, can't verify, must use your own voice, the data is "
             "private, or a human relationship is the point."),
            ("Activity — Four Corners + Decompose an Essay (Gemini)", "15 min",
             "Students do the 'Four Corners' sort (AI Only / AI-Supported / Human Only): formatting a finished "
             "bibliography (AI Only); the personal-reflection paragraph (Human Only); generating 20 self-test questions "
             "(AI-Supported); comforting a friend (Human Only); summarising an article to triage (AI-Supported, verify "
             "first); a closed-book exam answer (Human Only). Then 'Decompose an Essay': for each step of a History/English "
             "essay (argument, evidence, structure, sentences, spelling/referencing, final view) they label "
             "Automate/Augment/Avoid in the notes box and compare to the model split. Optional: use Gemini ONLY in the "
             "augment role — have it quiz them or critique their plan, not write for them."),
            ("Discussion — The tempting shortcut", "5 min",
             "Run the 11pm coursework-reflection scenario as a discussion: using Automate/Augment/Avoid, what's the "
             "literate choice? Draw out that the content is an Avoid task (it's your experience, and AI-writing it is "
             "malpractice), while a grammar/clarity check is a fair Automate — and that choosing the boundary deliberately "
             "is the skill."),
            ("Plenary — Exit ticket", "3 min",
             "Run the in-course quiz (managing AI = deliberately deciding which parts of a task to automate, augment or "
             "keep human — explicitly including choosing not to use AI). Exit ticket: 'Name one task this week where "
             "you'll deliberately AVOID AI, and exactly why it must stay yours.'"),
        ],
        "discussion": [
            "Using the Automate / Augment / Avoid framework, what is the literate choice for an 11pm coursework reflection you're tired of — and why does lateness not change the category?",
            "If trusting an AI tool more makes people think less critically (Microsoft/CMU, 2025), how should that change the way you use AI on schoolwork?",
            "AI can raise the quality of your work without producing durable learning (OECD, 2026). When is higher-quality work actually a bad trade for you?",
        ],
        "class_task": (
            "Boundary-design task (Gemini): each student takes one real multi-step assignment from this term, decomposes "
            "it into steps, and labels each step Automate, Augment or Avoid with a one-line justification using the "
            "deciding questions. They then deliberately use Gemini in the augment role only — asking it to quiz them or "
            "critique their plan — and note in the notes box where they kept AI out and why. Stretch students draft a "
            "one-paragraph personal 'acceptable AI-use rule' naming their own no-AI zones, a verification rule and a "
            "declaration rule."
        ),
        "differentiation": (
            "Support: give the deciding questions as a printed flowchart and let students sort three pre-chosen tasks "
            "before tackling the full Four Corners set. Stretch: students complete the slide's '🚀 Write Your Own AI-Use "
            "Rule' extension, including the single hardest edge case for their own rule, and compare it to the school's "
            "actual AI policy."
        ),
        "assessment": (
            "Exit-ticket no-AI-zone (AfL); quality of the essay decomposition against the model split; the in-course quiz "
            "('Manage AI' = deliberate division of labour that includes choosing not to use AI)."
        ),
        "notes": (
            "Both the Microsoft/CMU and OECD findings are about correlation and tendencies, not iron laws — present them "
            "as strong, evidenced warnings. The key message students sometimes miss: Avoid is a SKILLED choice, not a "
            "failure or a refusal to engage. Anchor every 'Avoid' on examined work to JCQ 2024 malpractice rules, and keep "
            "the school's own AI policy to hand for the stretch task."
        ),
    },
    # ===================================================================
    {
        "id": 117,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Working with AI Tools",
        "big_idea": "The big consumer chatbots look identical but were trained and tuned "
                    "differently, so they behave differently — matching the tool to the "
                    "task gets better results faster and keeps your data safer. No tool "
                    "guarantees accuracy, and free tiers may train on what you type.",
        "objectives": [
            "Compare the major AI tools (ChatGPT, Claude, Gemini, NotebookLM, Copilot) by their real strengths.",
            "Choose the right tool for a task: live events, long documents, coding, images, source-grounded revision.",
            "Explain why a two-tool workflow beats brand loyalty, and that all tools can hallucinate.",
            "Apply data-safety judgement about what is safe to paste into a free chatbot.",
        ],
        "vocab": [
            ("Context window", "How much you can paste at once — Claude handles 200k tokens (~500 pages); free tiers are far smaller."),
            ("NotebookLM", "A source-grounded research notebook that answers only from sources you upload, citing each passage."),
            ("Live web search", "Browsing for current information (Gemini, ChatGPT with Search) needed for anything after the cut-off."),
            ("Knowledge cut-off", "The date a model's training stops; without browsing it can invent recent detail."),
            ("Two-tool workflow", "Using the best tool per job (e.g. Claude for long docs, Gemini for current facts) instead of one brand."),
            ("Free-tier data use", "Free chats may be stored and used to train future models unless you opt out; paid/enterprise usually don't."),
            ("School account tools", "Gemini and NotebookLM come free with the school Google account and usually handle data more strictly."),
        ],
        "resources": [
            ("Course slides — Lesson 117 'Working with AI Tools'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("NotebookLM (school Google account)", "https://notebooklm.google.com"),
            ("Source: Reuters / UBS — 'ChatGPT sets record for fastest-growing user base' (Feb 2023)", "https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/"),
            ("Source: LMSYS Chatbot Arena — independent human-preference leaderboard", "https://lmarena.ai/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the hook stats: ChatGPT hit 100M users in 60 days — the fastest-growing consumer app in history "
             "(UBS/Reuters, 2023); the 'big four' LLMs now have 1B+ weekly users combined; and four tools look identical "
             "but behave very differently. Make the point: reach for the wrong one and you can spend longer and get a "
             "weaker result. Remind students they already have two built in — Gemini and NotebookLM in their school "
             "Google account."),
            ("Main teaching — Compare and choose", "12 min",
             "Teach how the tools compare: ChatGPT (latest GPT-5 family, the 'Swiss army knife'); Claude (Anthropic — "
             "strongest on long documents at 200k-token context ≈ 500 pages, and nuanced writing/feedback; consistently "
             "near the top for safety and careful reasoning); Gemini (Google — live Search, Workspace and YouTube "
             "integration, the school-account tool); NotebookLM (source-grounded — answers only from sources you upload, "
             "citing each passage); Copilot (OpenAI models inside Windows/Office). Then the choosing rules: current events "
             "→ Gemini/ChatGPT with Search; long docs/nuanced feedback → Claude; coding → ChatGPT or Claude; image gen/"
             "analysis → ChatGPT/Gemini/Copilot. Stress: all of them hallucinate, so the L114 checks always apply."),
            ("Activity — Match the Tool to the Task (Gemini & NotebookLM)", "15 min",
             "Students do 'Match the Tool to the Task' for the five real student tasks (summarise a 20-page PDF → Claude; "
             "research this-week news → Gemini/Copilot with search; debug Python → ChatGPT/Claude; reformat notes in a "
             "Google Doc → Gemini; essay feedback → Claude), writing one sentence of justification each. Then a hands-on "
             "contrast: in NotebookLM they upload a set of teacher-provided revision notes and ask it to generate a quiz "
             "from ONLY those sources (noting the citations), then ask the same open question in Gemini with live search — "
             "and compare what source-grounding changes."),
            ("Discussion — The wrong tool for the job", "5 min",
             "Run the Priya scenario (40-page History PDF summarised badly in a small-context free tier, richer in "
             "Claude's 200k window) and discuss: what was really happening, and what's the takeaway? Draw out that context "
             "window size matters for long documents, that length and confidence aren't accuracy, and that you must "
             "spot-check against the source even on summarising tasks."),
            ("Plenary — Exit ticket", "3 min",
             "Run both in-course quizzes (last-week info → a tool with live web search like Gemini/ChatGPT with Search; "
             "quiz from exactly 30 uploaded pages → NotebookLM, source-grounded). Exit ticket: 'Name one task you'd send "
             "to NotebookLM rather than Gemini, and why.'"),
        ],
        "discussion": [
            "If the tools look identical but behave differently, how would you actually find out which one fits a task — and is brand loyalty ever justified?",
            "Free tiers may store and train on what you type. Where should the line be for what you'll paste into a free chatbot versus a school-account tool?",
            "No tool guarantees accuracy and all four hallucinate. Does having more tools make you safer or just give you more confident wrong answers to choose from?",
        ],
        "class_task": (
            "Source-grounded vs open-web showdown (NotebookLM + Gemini): pairs upload a teacher-provided document (a few "
            "pages of class notes or an article) into NotebookLM and ask it three factual questions, checking the cited "
            "passages. They then ask the same questions in Gemini and compare answers, noting which tool stayed grounded, "
            "which could go beyond the source, and which needed verifying. They finish with a one-line rule for when to "
            "reach for each tool. Reinforces matching the tool to the task and the L117 data-safety habits."
        ),
        "differentiation": (
            "Support: give a printed 'tool cheat sheet' (one strength per tool) and let students match the five tasks to "
            "it before justifying. Stretch: students design a realistic two-tool workflow for a full coursework task and "
            "explain at each step why that tool, plus where they'd cross-check the output."
        ),
        "assessment": (
            "Exit-ticket NotebookLM choice (AfL); accuracy of the tool-to-task matching and justifications; the two "
            "in-course quizzes (live-search tool for recent events; NotebookLM for source-grounded quizzes)."
        ),
        "notes": (
            "Model line-ups move fast — keep names current for mid-2026 (GPT-5.x, Claude Opus 4.8 / Sonnet 4.6, Gemini "
            "3.x) but the matching principle is stable. Be explicit on data safety: never paste personal, sensitive or "
            "someone else's private information into a free chatbot, and check the school's own policy (JCQ 2024 lets "
            "schools set their own rules) before using any tool for coursework. The Priya point — that context windows "
            "cause silent truncation — is the load-bearing idea."
        ),
    },
    # ===================================================================
    {
        "id": 118,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "Prompt Engineering Challenge",
        "big_idea": "AI is a power tool, not a magic wand: on the right task with your "
                    "judgement steering it and deliberate iteration, it makes you "
                    "dramatically better; used blindly on tasks beyond its 'jagged "
                    "frontier', it makes you worse. Prompt engineering is a genuine, "
                    "learnable skill — now a baseline expectation, not a niche job.",
        "objectives": [
            "Apply professional prompt-engineering habits (specify role, specify output, anticipate problems, build in quality checks, iterate, save what works).",
            "Write a complete PTFC prompt for a real task and run it in an AI tool.",
            "Iterate deliberately — identify what wasn't useful, refine one variable, and compare version 1 to version 2.",
            "Write a portable prompt clear enough that any AI tool would give a useful response unchanged.",
        ],
        "vocab": [
            ("Prompt engineering", "Crafting, testing and iterating prompts as a recognised, learnable discipline — now a baseline skill."),
            ("Jagged frontier", "The uneven edge of AI capability; inside it AI helps, beyond it confident-but-wrong output hurts (Dell'Acqua et al., 2023)."),
            ("Quality check", "A built-in instruction like 'flag anything you're not confident about with [check this]' to catch hallucinations."),
            ("Iteration", "Refining one variable at a time over a few rounds, with diminishing returns after that."),
            ("Portable prompt", "A prompt so clearly specified that any AI tool gives a useful response without changes — the mark of real skill."),
            ("Prompt library", "A saved store of your best prompts (Notes, Google Keep, Claude Projects, custom GPTs) — compound interest on your time."),
            ("PTFC", "Persona/Role, Task, Format, Context — the lever set used to build a strong prompt."),
        ],
        "resources": [
            ("Course slides — Lesson 118 'Prompt Engineering Challenge'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Dell'Acqua, McFowland, Mollick et al. (2023), 'Navigating the Jagged Technological Frontier' (HBS WP 24-013)", "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700"),
            ("Source: Bloomberg — 'AI Prompt Engineer Jobs Pay up to $335,000 a Year' (Mar 2023)", "https://www.bloomberg.com/news/articles/2023-03-29/ai-chatgpt-related-prompt-engineer-jobs-pay-up-to-335-000"),
            ("Source: Anthropic prompt engineering overview; OpenAI Cookbook best practices", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Display the hook stats from the 758-consultant study (Dell'Acqua et al., 2023): on suitable tasks, AI users "
             "produced work rated ~40% higher quality and finished faster — but on tasks beyond AI's 'jagged frontier' "
             "they did WORSE than people with no AI, because they trusted confident wrong output; and a 'prompt engineer' "
             "could earn $300K+ in 2023, now a baseline skill across many jobs. Frame today as practising being the good "
             "kind of user. (Lesson is a 30-min challenge in the slides — give it a full 40-min plan.)"),
            ("Main teaching — What good prompt engineering looks like", "9 min",
             "Teach the six professional habits: specify the role (role-setting measurably improves factual accuracy on "
             "specialist tasks); specify the exact output (format, length, style, tone, UK English); anticipate problems "
             "(pre-empt known failure modes, define technical terms inline); build in quality checks ('flag anything "
             "you're not confident about with [check this]'); iterate deliberately (refine one variable at a time, "
             "diminishing returns after a few rounds); and save what works (a prompt library is compound interest on your "
             "time). Reference Anthropic's and OpenAI's official guides."),
            ("Activity — The Challenge: choose one + iterate (Gemini)", "13 min",
             "Each student picks ONE of the four challenge tasks — a GCSE revision quiz, detailed essay-plan feedback, an "
             "explanation of their hardest concept, or a 5-day revision plan — and writes the best possible PTFC prompt "
             "(role, task, context, format, constraints) in the notes box. They run it in Gemini, read the output "
             "critically, identify the ONE thing that was NOT useful, rewrite the prompt to eliminate that noise, and run "
             "version 2. They paste both outputs and write the single improvement that made the difference. Challenge "
             "extension: make version 2 a portable prompt anyone could hand to any AI unchanged."),
            ("Discussion — Prompt engineering & the future of work", "5 min",
             "Use the slide's questions: is prompt engineering a genuine new skill or a temporary workaround? Now that the "
             "$200k+ standalone role of 2023 has faded into a skill expected of everyone, what skill stays valuable — and "
             "is that what schools should teach? Of the whole Unit 3 toolkit (prompting, evaluation, creativity, "
             "automation judgement, tool selection, professional prompting), which will matter most in their future career?"),
            ("Plenary — Unit 3 recap + exit ticket", "8 min",
             "Run the in-course quiz (best fix for a vague answer = a specific follow-up narrowing the topic and asking "
             "for examples) and the three-question Unit 3 recap (five levers = Role/Task/Context/Format/Constraint; the "
             "jagged-frontier study found worse work when users trusted confident-but-wrong output beyond AI's range; "
             "purely AI-generated images generally have no copyright). Exit ticket: 'Write one PTFC-structured prompt you "
             "plan to use this week, including all four parts.'"),
        ],
        "discussion": [
            "Is prompt engineering a genuine new skill or a short-term workaround that disappears as AI gets better at understanding vague questions? What's the evidence for each view?",
            "'Prompt engineer' was a £200k+ standalone job in 2023 but by 2026 is a skill expected of everyone. If AI keeps improving, what skill stays valuable — and is that what schools should teach?",
            "Across the whole Unit 3 toolkit — prompting, evaluation, creativity boundaries, automation judgement, tool selection and professional prompting — which skill will matter most in the career you're heading toward, and why?",
        ],
        "class_task": (
            "Portable-prompt build (Gemini): each student takes one real task from their week, writes a full PTFC prompt "
            "with a built-in quality check ('flag anything you're unsure about with [check this]'), runs it in Gemini, "
            "then iterates once to remove the least useful part of the output. The deliverable is a 'version 2' prompt so "
            "clearly specified that a partner could paste it into any AI tool unchanged and get a useful result — they "
            "test exactly that by swapping prompts. Best prompts go into a shared class prompt library."
        ),
        "differentiation": (
            "Support: provide a fill-in-the-blanks PTFC template and let students pick the simplest challenge task (the "
            "revision quiz), focusing on a single clean iteration. Stretch: students take on the 2030 'prompt engineer "
            "interview' scenario — design a structured, reusable prompt with role, constraints, a quality check and a test "
            "protocol for a whole team to validate."
        ),
        "assessment": (
            "Exit-ticket PTFC prompt and the Unit 3 recap quiz (summative for the unit); the iteration write-up (version 1 "
            "vs version 2 with the named improvement); the in-course quiz (specific follow-up beats re-asking or accepting)."
        ),
        "notes": (
            "The slide block is a 30-minute challenge and also carries the Unit 3 recap, unit-test and exit-ticket — this "
            "plan stretches it to a full 40 minutes and uses the recap as the plenary. The $300K+ salary is genuinely "
            "historic (2023) and has since normalised into a baseline skill — present it that way, not as a current going "
            "rate. The Unit 3 written assessment is the Prompt-Engineering Portfolio (attached to Lesson 134's slide "
            "block); flag it here so students know where this skill is examined."
        ),
    },
    # ===================================================================
    {
        "id": 134,
        "unit": "Unit 3: Practical AI Skills",
        "ailit": "Create & Manage AI",
        "title": "AI Agents — When AI Does the Doing",
        "big_idea": "A chatbot predicts text and stops; an agent wraps the same model in "
                    "a loop and tools so it can act in the real world — search, click, "
                    "run code, send email. That means everything a chatbot could get "
                    "wrong, an agent can get wrong AND act on, so the safety rule is to "
                    "keep a human in the loop at every irreversible step.",
        "objectives": [
            "State the one-line difference between a chatbot and an agent (tools + a loop, not a bigger model).",
            "Describe the agent loop (observe → think → act → observe) and how tools are the agent's 'hands'.",
            "Identify the three real risks — prompt injection, cascading errors, over-trust — and their shared mitigation.",
            "Apply the four rules for using agents well, judging which tasks to hand over and which to keep.",
        ],
        "vocab": [
            ("AI agent", "An AI that runs a loop — observe, think, pick a tool, act, observe — until a goal is met; it can act, not just reply."),
            ("Agent loop", "The four-step cycle (observe → think → act → observe) run many times per task; debugging it means debugging decisions."),
            ("Tool", "A connector to the outside world — web search, code execution, file access, browser control, calendar/email."),
            ("MCP", "Model Context Protocol (2024) — an open standard letting anyone build a custom tool for any agent."),
            ("Prompt injection", "Hidden instructions inside a page or file the agent reads, which it then obeys; a live, unsolved problem."),
            ("Cascading errors", "A small early mistake the agent then builds dozens of confident actions on top of."),
            ("Human-in-the-loop", "Requiring human approval at every irreversible step (money, messages, deletions) — the core safety principle."),
        ],
        "resources": [
            ("Course slides — Lesson 134 'AI Agents — When AI Does the Doing'", "Removes course, Unit 3"),
            ("Gemini (school Google account)", "https://gemini.google.com"),
            ("Source: Anthropic (2024) — 'Claude can now use computers'", "https://www.anthropic.com/news/3-5-models-and-computer-use"),
            ("Source: OpenAI (2025) — 'Introducing Operator'", "https://openai.com/index/introducing-operator/"),
            ("Source: Simon Willison — 'Prompt injection attacks' (2023, still current); Model Context Protocol spec", "https://modelcontextprotocol.io/"),
        ],
        "sequence": [
            ("Starter — Hook", "5 min",
             "Open on 'The AI That Booked the Holiday': one sentence — 'Plan me a half-term break in Lisbon for four on a "
             "£1,800 budget' — and the agent finds flights, an Airbnb, a restaurant and museum tickets and drafts a "
             "calendar, with each step laid out for you to approve before anything is booked. Display the hook stats: four "
             "major labs shipped agent products in 2024–25 (Operator, Computer Use, Gemini agents, Copilot Actions); "
             "Goldman expects roughly a 24-fold rise in AI usage by 2030; one sentence kicks off a complex multi-step task. "
             "(35-min lesson in the slides — build a full 40-min plan.)"),
            ("Main teaching — Chatbot vs agent, the loop, and the tools", "10 min",
             "Teach the one-line difference: a chatbot predicts text and stops; an agent runs observe → think → act → "
             "observe until the goal is met. Callback to L102: 'an autocomplete that learned to push buttons.' Walk the "
             "four-step loop (a single 'plan me a holiday' request can trigger 50–200 loops) and explain that debugging an "
             "agent is debugging a sequence of decisions, not one wrong word. Then tools as the agent's hands — web "
             "search, code execution, file access, browser control, calendar/email, MCP servers — each a superpower AND a "
             "risk ('every tool is a door'). Cover the three real risks: prompt injection (unsolved), cascading errors, "
             "over-trust — all mitigated by keeping a human in the loop at irreversible steps."),
            ("Activity — Would You Let an Agent Do This? + Design Your Own Agent", "12 min",
             "Students sort the six tasks into Useful / Risky-with-oversight / Terrible idea (summarising papers for an EPQ "
             "= useful; 'reply to anything important' from your email = terrible; research flight prices but don't book = "
             "risky due to prompt injection; 'reorganise my computer' = terrible; generate flashcards to Quizlet = useful; "
             "move money to 'optimise interest' = terrible). Then 'Design Your Own Agent' in the notes box: pick a real "
             "repetitive task, list the specific tools it needs, set the scope cap (Rule 2), name the single action "
             "requiring per-action approval (Rule 3), and answer the worst-case question. Use Gemini to pressure-test "
             "their design — ask it where their agent could be prompt-injected or cascade an error."),
            ("Discussion — The over-trusted agent", "5 min",
             "Run the Amir scenario (gave his agent email, calendar, bank and Amazon access; it ordered a £240 hoodie from "
             "a scam 'staff-discount' email). Discuss the single most important thing to say: the real issue is the setup, "
             "not one bad call — stop giving the agent irreversible money/message authority; it can draft, you click "
             "checkout. Name the principle: human-in-the-loop. Draw out that 'AI bad, stop entirely' is too strong and "
             "loses credibility."),
            ("Plenary — Four rules + exit ticket", "8 min",
             "Recap the four rules (read the plan before it runs; bound the scope; human in the loop at irreversible "
             "steps; start small, grow trust slowly — agents are like interns). Run both in-course quizzes (chatbot vs "
             "agent = tools + loop, not a bigger model; best reason against handing over email = irreversible actions "
             "deserve per-action approval). Exit ticket: 'Name one task you'd confidently give an agent this year and one "
             "you wouldn't even if it got much better — and why the difference.'"),
        ],
        "discussion": [
            "An agent can be wrong AND act on it before you ever see. Which everyday task would you genuinely trust an agent with, and where exactly do you draw the line?",
            "Your friend wants to give an agent access to their email so it can 'handle my life.' What's the single strongest reason to push back?",
            "All three real risks (prompt injection, cascading errors, over-trust) share one mitigation — keeping a human in the loop at irreversible steps. Why is that the permanent rule for any system that acts on your behalf, not just AI?",
        ],
        "class_task": (
            "Agent safety design (Gemini): each student designs an agent for a real 20-minutes-a-week task, specifying the "
            "exact tools (which apps), a scope cap, the one action needing per-action approval, and a written worst-case "
            "answer. They then use Gemini as a critic — asking it where the design could be prompt-injected, where a "
            "cascading error could start, and whether the worst case is acceptable — and revise the design once. The "
            "four rules must be visibly baked in. Note: students design and reason about agents; they do not hand real "
            "accounts or money to any tool."
        ),
        "differentiation": (
            "Support: give the six classify tasks pre-printed and sort them as a guided group before students design their "
            "own agent, using a fill-in template for tools/scope/approval. Stretch: students explain prompt injection "
            "with their own concrete example (e.g. hidden white-on-white text on a webpage) and propose a design feature "
            "that would reduce its impact."
        ),
        "assessment": (
            "Exit-ticket line-drawing (AfL); quality of the agent design with the four rules and a credible worst-case; "
            "the two in-course quizzes (agent = tools + loop; irreversible actions need per-action human approval)."
        ),
        "notes": (
            "Be honest that today's agents are far from perfect — they often need a human to take over for payments and "
            "logins — and that prompt injection is a currently-unsolved problem, so the human-in-the-loop rule is "
            "load-bearing, not optional. Keep it concrete: the real risks are documented failure modes, not 'Skynet'. "
            "The Unit 3 written assessment (Prompt-Engineering Portfolio) is attached to this slide block — point students "
            "to it. Same underlying models power chatbots and agents (mid-2026: GPT-5.x, Claude Opus 4.8 / Sonnet 4.6, "
            "Gemini 3.x); the difference is the tool loop, not model size."
        ),
    },
]
