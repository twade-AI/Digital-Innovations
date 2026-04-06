/* ── Curated Slide Content: Critical Thinking Lessons (45–48) ── */

var SLIDES_CRITICAL = {

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

