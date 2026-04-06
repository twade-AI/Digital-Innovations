/* ── Curated Slide Content: Critical Thinking Lessons (45–48) ── */

var SLIDES_CRITICAL = {

  // ── L46: Trust, But Verify (Unit 1 — Prompt Engineering & Research) ────────
  46: [
    {
      type: 'hook',
      title: 'Trust, But Verify',
      body: 'In February 2023, Google\'s AI assistant Bard was demonstrated to the world. In the demo video, Bard was asked what new discoveries the James Webb Space Telescope had made. It answered confidently — including the claim that Webb had taken the "very first images" of a planet outside our solar system. Astronomers immediately pointed out this was wrong: the first exoplanet image was taken in 2004. The error wiped over $100 billion from Alphabet\'s market value in a single day. A week later, Air Canada\'s chatbot told a bereaved customer he could apply for bereavement fares retroactively — a policy that did not exist. A court ruled Air Canada was liable for its chatbot\'s false promise.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">$100B</span><span class="sl">lost by Alphabet after one AI factual error in a live demo</span></div><div class="hook-stat-mini"><span class="sv">38%</span><span class="sl">of AI-generated medical information contains a significant error (BMJ, 2023)</span></div><div class="hook-stat-mini"><span class="sv">~20%</span><span class="sl">of AI legal citations found to be fabricated in independent audits</span></div></div>AI systems produce errors with the same tone, fluency, and confidence as accurate information. The only defence is verification — and you need a system for it.'
    },
    {
      type: 'concept',
      title: 'The Four Types of AI Hallucination',
      body: 'Not all AI errors are the same. Understanding the type of hallucination helps you know where to look when checking. AI researchers classify hallucinations into four main categories — each with a different verification strategy.',
      bullets: [
        '<strong>Factual hallucinations:</strong> Plausible-sounding claims that are simply wrong — wrong dates, wrong figures, wrong names, wrong locations. Example: "The UK passed the Online Safety Act in 2021" (it was 2023). Verification: always check dates and numbers against a primary source',
        '<strong>Citation hallucinations:</strong> Fabricated references to papers, studies, reports, or books that do not exist — or exist but do not say what the AI claims. Example: the NY lawyer case — 6 hallucinated court cases submitted to a federal judge. Verification: look up every citation independently',
        '<strong>Logical hallucinations:</strong> Valid-seeming reasoning that contains a false premise, a hidden leap, or a category error. The conclusion follows from the argument — but the argument is built on sand. Verification: identify the premises explicitly and check each one',
        '<strong>Temporal hallucinations:</strong> Outdated information presented as current — AI training data has a cutoff, and the model has no way to know things have changed since. Example: AI describing a company\'s current CEO who resigned a year ago. Verification: check currency for anything time-sensitive'
      ],
      callout: 'The most dangerous hallucinations are the ones that are 95% accurate. A fully false claim is easy to dismiss. A claim that is correct except for one crucial detail — a wrong statistic, a misattributed quote — passes initial scrutiny and causes the most damage when acted upon.'
    },
    {
      type: 'concept',
      title: 'The VERIFY Workflow',
      body: 'Professional fact-checkers, researchers, and journalists use structured verification workflows. The VERIFY method adapts these for AI-assisted work — a six-step habit that takes minutes but catches the errors that matter.',
      bullets: [
        '<strong>V — Validate the claim type.</strong> Is this a fact, a statistic, a quote, a date, or an interpretation? Each requires a different verification approach',
        '<strong>E — Extract the specific claim.</strong> Write out the exact, testable assertion in your own words. Vague claims cannot be fact-checked — make it specific before you search',
        '<strong>R — Reach for a primary source.</strong> Not another website, not another AI. A primary source: the original study, the official document, the institution\'s own publication, the legislation',
        '<strong>I — Investigate the numbers.</strong> Statistics are the most commonly hallucinated element. Find the original data set, the methodology, and the exact figure — not a secondary report of it',
        '<strong>F — Find the counter-evidence.</strong> Search specifically for contradictory information. If an AI claim seems perfectly one-sided, ask what the strongest challenge to it is',
        '<strong>Y — Your conclusion, in writing.</strong> Write one sentence stating whether you verified the claim, partially verified it, or could not verify it — and why. This becomes your audit trail'
      ],
      callout: 'Lateral reading is the fastest verification technique researchers have identified: instead of reading deeply into one source, quickly look at what OTHER credible sources say about it. A claim corroborated by three independent sources from different sectors (academic, journalistic, governmental) is far more reliable than any single detailed source.'
    },
    {
      type: 'scenario',
      title: 'The Chemistry Coursework',
      situation: 'Zara is completing an A-Level Chemistry piece on the environmental impact of lithium-ion batteries. She uses Claude to research and gets a detailed response citing "a 2022 Nature Chemistry study finding that lithium extraction produces 15 tonnes of CO₂ per tonne of lithium" and "a 2023 EU directive requiring battery passports for all EVs sold from 2026." Both claims are specific, plausible, and fit her argument perfectly. She has 45 minutes before submission.',
      question: 'What should Zara do — and what is the minimum acceptable verification standard here?',
      choices: [
        {
          text: 'Submit as written — both claims are specific enough to be real, and she does not have time to check both',
          outcome: 'The Nature Chemistry figure is close to reality but significantly overstated — the actual estimate in the cited study is 4–9 tonnes depending on the extraction method. Worse, the "2023 EU directive" conflates two separate pieces of legislation and gets the implementation date wrong. Zara\'s teacher notes both inaccuracies and her score is reduced. The lesson: specificity in a hallucination is not evidence of accuracy — it is a feature of how convincing hallucinations are designed to sound.'
        },
        {
          text: 'Spend 15 minutes verifying the EU directive (easier to find official sources for legislation) and note the Nature Chemistry figure as "approximate" without full citation',
          outcome: 'The EU Battery Regulation is a real document — Zara finds it in under 3 minutes via the EUR-Lex database and corrects the date. She removes the Nature Chemistry citation and uses the approximate figure with a note that it comes from a range of studies. Her teacher appreciates the honesty and asks her to find a real primary source for the CO₂ figure as an extension task. Partial verification done under time pressure, transparently acknowledged, is far better than false precision.'
        },
        {
          text: 'Use the VERIFY workflow on both claims: find the original Nature Chemistry study and the EUR-Lex source for the directive',
          outcome: 'Zara finds the EU Battery Regulation immediately. The Nature Chemistry search takes longer — the exact study Claude described does not exist, but she finds a 2021 paper in Nature Communications with similar methodology and a figure of 6.1 tonnes per tonne of lithium. She updates the citation accordingly. The 15-minute investment produces a substantially more accurate and academically credible piece. Her teacher notes the real citation and her mark reflects the care taken.'
        }
      ]
    },
    {
      type: 'activity',
      title: 'Hallucination Hunt',
      instructions: 'Deliberately induce AI hallucinations and develop your ability to spot them before they cause damage. Use the Prompt Iteration Log from Resources to track your findings.',
      steps: [
        'Choose a topic you know well — a subject you study, a hobby, a local area. This background knowledge will help you spot errors',
        'Ask an AI tool to produce five specific factual claims with citations about your topic. Use a confident prompt: "Give me five specific, cited facts about [topic] including statistics, dates, and research findings"',
        'Before checking anything: mark which claims feel most suspicious and why. Note your gut reactions',
        'Now apply VERIFY to each claim. Record: Claim | Primary source found? | Accurate? | Type of error (if any)',
        'Calculate: How many were fully accurate? Partially accurate? Hallucinated entirely?',
        'Reflect: Which errors did your gut pick up? Which ones fooled you? What made the hallucinations convincing?'
      ]
    },
    {
      type: 'discussion',
      title: 'Who Is Responsible?',
      questions: [
        { num: 1, text: 'Air Canada was held legally liable for its chatbot\'s false promise. Should AI companies be liable when their systems produce harmful false information — or does responsibility always lie with the person who chose to act on it?' },
        { num: 2, text: 'Medical AI tools are increasingly used by patients to self-diagnose. A BMJ study found 38% of AI-generated medical information contains a significant error. Who bears responsibility when a patient is harmed by acting on AI medical advice?' },
        { num: 3, text: 'Professional fact-checkers take 15–20 minutes to verify a single claim thoroughly. In a world where AI produces thousands of claims per second, is systematic verification even scalable? What institutional solutions might work?' }
      ]
    },
    {
      type: 'quiz',
      question: 'What is "lateral reading" in the context of fact-checking?',
      options: [
        'Reading a document from multiple angles to find hidden meaning',
        'Quickly checking what multiple independent sources say about a claim, rather than reading one source deeply',
        'Comparing the left-wing and right-wing perspectives on a news story',
        'Re-reading an AI output multiple times to check for internal consistency'
      ],
      correct: 1,
      explanation: 'Lateral reading — opening multiple tabs and checking what credible, independent sources say about a claim or its source — is the fastest and most reliable verification technique identified by media literacy researchers. It is how professional fact-checkers work. A claim supported by three independent credible sources is far more reliable than any single detailed account.'
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        { icon: '🔬', label: '4 hallucination types', text: 'Factual, citation, logical, and temporal — each requires a different verification strategy. Statistics and citations are the most commonly fabricated.' },
        { icon: '✅', label: 'The VERIFY workflow', text: 'Validate the claim type → Extract the specific claim → Reach for a primary source → Investigate the numbers → Find counter-evidence → Your conclusion in writing' },
        { icon: '↔️', label: 'Lateral reading beats deep reading', text: 'Checking what multiple independent sources say about a claim is faster and more reliable than reading any single source deeply' }
      ]
    }
  ],

  // ── L45: What Can You Trust? (Unit 0 — Foundations) ──────────────────────
  45: [
    {
      type: 'hook',
      title: 'What Can You Trust?',
      body: 'In May 2024, Google launched AI Overviews — an AI-generated summary appearing above all search results. Within days, users discovered it was recommending eating one small rock per day for minerals, suggesting you add glue to pizza to stop the cheese sliding off, and advising that a medical professional would tell you to run with scissors. Google had trained its AI on satirical articles and Reddit jokes — and presented them as factual health advice to millions of users. The AI was not lying. It simply had no concept of what truth is.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">~20%</span><span class="sl">of AI-generated citations in academic studies are fabricated</span></div><div class="hook-stat-mini"><span class="sv">1 in 3</span><span class="sl">students cannot distinguish AI-generated text from expert writing</span></div><div class="hook-stat-mini"><span class="sv">$100B</span><span class="sl">wiped from Alphabet\'s value after a single AI factual error in a demo</span></div></div>If AI can produce confident, fluent, completely false information — how do you know what to trust? The answer starts with understanding how knowledge works.'
    },
    {
      type: 'concept',
      title: 'What Is Epistemology?',
      body: 'Epistemology is the branch of philosophy that asks: what is knowledge, and how do we acquire it? For most of human history, we relied on four sources. AI disrupts every single one of them — not by making knowledge impossible, but by making the question of how you know something far more urgent than it has ever been.',
      bullets: [
        'Perception: We trust what we directly observe. AI disrupts this — deepfakes mean seeing is no longer believing; AI-generated images are visually indistinguishable from photographs',
        'Testimony: We trust what credible people tell us. AI disrupts this — any written testimony can now be fabricated at scale; voice and video of real people can be synthetically generated',
        'Reason: We trust logical inference from true premises. AI disrupts this — AI outputs mimic valid reasoning structures while containing false premises, making the conclusions seem sound',
        'Memory: We trust our own recollection. AI disrupts this — AI-generated false content, seen repeatedly, gets encoded as genuine memory (the "illusory truth" effect)',
        'The result: In an AI-saturated world, your default trust in text, images, voice, and even your own intuitions requires deliberate recalibration'
      ],
      callout: 'This is not a reason to distrust everything. It is a reason to be explicit about WHY you trust something — to move from passive, default trust to active, reasoned trust. That is what this lesson teaches.'
    },
    {
      type: 'concept',
      title: 'The CRAAP Test — Adapted for AI',
      body: 'The CRAAP test was developed by librarians at California State University to evaluate sources. In an era of AI-generated content, it needs updating — but its core logic is more relevant than ever. Apply it to any piece of information you encounter, whether the source is human or machine.',
      bullets: [
        '<strong>Currency</strong> — When was this produced? AI training data has a cutoff date. Any AI claim about recent events should be treated as potentially out of date or fabricated',
        '<strong>Relevance</strong> — Does this actually address the question, or does it sound like it does? AI is exceptionally good at producing plausible-sounding tangential content',
        '<strong>Authority</strong> — Who or what is the original source? "According to studies" or "research shows" in an AI output is not a source — it is a pattern. Demand the specific citation.',
        '<strong>Accuracy</strong> — Can this be verified against an independent primary source? One independent confirmation is the minimum standard; two is better',
        '<strong>Purpose</strong> — Why does this content exist? AI-generated content designed to persuade, sell, or mislead uses the same fluency as content designed to inform'
      ],
      callout: 'The single most important habit: never accept a claim without a traceable, verifiable source. "The AI told me" is not a source. Neither is "I read it online." A source is an author, a date, a publication, and a claim you can find independently.'
    },
    {
      type: 'scenario',
      title: 'The Wikipedia Trap',
      situation: 'Amir is writing a history essay on the causes of the 2008 financial crisis. He asks Claude for a summary and receives a fluent, detailed three-paragraph answer citing "the Federal Reserve\'s 2009 report on mortgage-backed securities," "a 2011 Harvard study showing 73% of subprime loans were issued fraudulently," and "economist Janet Yellen\'s 2008 warning about systemic risk." The essay is due tomorrow. The citations look specific and authoritative. Amir does not have time to check them all.',
      question: 'What should Amir do, and what does his response reveal about his epistemic habits?',
      choices: [
        {
          text: 'Use the citations as written — they are specific enough that they must be real, and Claude rarely makes up statistics',
          outcome: 'Two of the three citations do not exist. The Federal Reserve report cited has a different title and does not contain the claim attributed to it. The "Harvard study" cannot be found. Amir\'s teacher flags the essay for academic integrity review. The experience reveals a critical gap: confidence in an AI\'s tone is not evidence of accuracy.'
        },
        {
          text: 'Use only the general argument from Claude, remove the specific citations, and find real sources for the key claims independently',
          outcome: 'Amir spends 30 minutes on Google Scholar and the Federal Reserve website. He finds real sources for two of the three claims — slightly different figures, but credible. The third claim turns out to be more contested than Claude implied. His essay is more accurate and more nuanced as a result. He has used AI as a starting point for thinking, not a substitute for it.'
        },
        {
          text: 'Ask Claude to verify its own citations and accept the answer if it confirms them',
          outcome: 'Claude confirms all three citations confidently. This is the worst possible outcome — AI cannot verify its own hallucinations. It will produce a plausible-sounding confirmation of a fabricated source with the same fluency as a real one. Self-verification is not verification. An AI telling you its own output is accurate is not evidence.'
        }
      ]
    },
    {
      type: 'activity',
      title: 'The Claim Audit',
      instructions: 'Take five AI-generated claims and trace each one to a primary source — or prove it cannot be verified. This is the core skill of epistemic independence.',
      steps: [
        'Ask an AI tool (Claude, Gemini, or ChatGPT) to give you five specific factual claims with citations on any topic you are currently studying',
        'For each claim, record: the exact claim, the source cited, and your initial confidence that it is true (1–5)',
        'Attempt to verify each claim independently: search for the specific source, find the exact figure or quote in a primary document',
        'Classify each: Verified (found the source, claim is accurate) / Partially true (source exists but claim is exaggerated or misrepresented) / Unverifiable (source cannot be found) / False (source exists but says something different)',
        'Calculate your accuracy rate: how many of the five were fully verified?',
        'Reflect: Did any claim seem very convincing but turn out to be wrong? What made it convincing?'
      ]
    },
    {
      type: 'discussion',
      title: 'Truth in an AI World',
      questions: [
        { num: 1, text: 'If AI can produce fluent, confident, wrong information — and humans consistently rate AI writing as credible — what does this mean for the concept of "doing your own research"? Is individual research still meaningful?' },
        { num: 2, text: 'The "illusory truth" effect shows that simply seeing a claim repeatedly makes people believe it, regardless of its truth. AI generates enormous volumes of content. What are the long-term consequences for shared social knowledge?' },
        { num: 3, text: 'Some philosophers argue that in practice, all knowledge is social — we rely on testimony from others because we cannot personally verify most things we believe. Does AI make this dependence more dangerous, or just more visible?' }
      ]
    },
    {
      type: 'quiz',
      question: 'When an AI system like Claude or ChatGPT produces a fabricated citation, what is the most accurate explanation?',
      options: [
        'The AI is deliberately lying to appear more helpful',
        'The AI has a bug that causes it to occasionally invent sources',
        'The AI predicts plausible-sounding text with no mechanism for knowing whether it is true',
        'The AI\'s training data contained false information that it is repeating'
      ],
      correct: 2,
      explanation: 'LLMs generate text by predicting statistically probable next tokens — they have no truth-checking mechanism. A fabricated citation sounds exactly like a real one in the probability distribution the model learned from. This is not a bug that will be fixed; it is a fundamental property of how these systems work.'
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        { icon: '🧠', label: 'Epistemology is now a practical skill', text: 'Understanding how knowledge is justified — not just what you believe — is essential when AI produces fluent falsehoods at scale' },
        { icon: '🔍', label: 'CRAAP applies to AI outputs', text: 'Currency, Relevance, Authority, Accuracy, Purpose — every claim needs a traceable primary source, not a confident AI assertion' },
        { icon: '⚠️', label: 'AI cannot verify itself', text: 'Asking an AI to confirm its own output is not verification. The same mechanism that generated the claim will confirm it with equal confidence' }
      ]
    }
  ],

