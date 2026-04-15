/* ── Curated Slide Content: Advanced Lessons (51–55) ── */

var SLIDES_ADVANCED = {

  // ── L51: Breaking the Illusion — Tokens & How LLMs Work (Unit 0) ─────────────
  51: [
    {
      type: 'hook',
      title: 'Breaking the Illusion: The Strawberry Problem',
      body: 'Type this into any major AI assistant: <em>"How many times does the letter r appear in the word strawberry?"</em> Most will say two. Some say three. Try again and the same model may give a different answer. The correct answer is three — but that is not the interesting part. The interesting part is <em>why</em> this is hard.<br><br>A human counts letters by reading each character in sequence: s, t, r, a, w, b, e, r, r, y. Simple. But language models do not read text. They process <strong>tokens</strong> — compressed sub-word chunks produced by a tokeniser before the model ever sees your input. The word "strawberry" is typically split into three tokens: <code>Str</code>, <code>aw</code>, <code>berry</code>. None of those tokens is the letter <em>r</em> in isolation. The model has no mechanism to count characters within tokens — because individual characters are not units it has ever operated on.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">~4</span><span class="sl">characters per token on average in English text</span></div><div class="hook-stat-mini"><span class="sv">100k+</span><span class="sl">unique tokens in GPT-4\'s vocabulary</span></div><div class="hook-stat-mini"><span class="sv">3 tokens</span><span class="sl">how "strawberry" is typically split by a modern tokeniser</span></div></div>This is not a bug that will be fixed in the next model release. It is the architecture. And everything AI can and cannot do follows from it.'
    },
    {
      type: 'concept',
      title: 'What Is a Token?',
      body: 'Before any text reaches a language model, it passes through a <strong>tokeniser</strong> — a component that splits raw text into a sequence of integer IDs. The model never sees letters or words. It sees numbers. The tokeniser\'s vocabulary is fixed at training time and typically contains around 100,000 entries for modern models, covering common sub-word fragments, punctuation, and a handful of whole common words.',
      bullets: [
        '<strong>Sub-word units:</strong> Most tokens are fragments, not whole words. "Unhelpful" splits as <code>un</code> + <code>helpful</code>. "Tokenisation" splits as <code>Token</code>, <code>is</code>, <code>ation</code>. Common short words ("the", "a", "is") are usually single tokens. Technical terms and proper nouns — especially unfamiliar ones — split into many small fragments, which is part of why AI struggles with them',
        '<strong>Context window:</strong> A model\'s working memory is measured in tokens, not words or pages. GPT-4\'s 128,000-token context window holds approximately 96,000 words — roughly a novel\'s worth. Crucially, when you exceed this limit, earlier content is simply lost. The model has no way to summarise or compress what it has "read" — it just stops seeing it',
        '<strong>The equity problem:</strong> English text averages around 4 characters per token. Chinese text averages 1.5–2 characters per token, meaning Chinese speakers need roughly twice as many tokens to convey the same information. In API pricing (where you pay per token) and in context window usage, this is a direct cost borne by non-English users — the result of tokenisers optimised almost entirely on English data',
        '<strong>Why arithmetic is hard:</strong> The number 784 may be tokenised as <code>78</code> + <code>4</code> — splitting a semantically unified quantity into arbitrary fragments. The model then tries to reason about these fragments as separate tokens. This is why multi-digit arithmetic is notoriously unreliable: the model is reasoning about pieces of numbers, not numbers themselves'
      ],
      callout: 'The model has no concept of "a word". It has no concept of "a letter". It processes streams of integers assigned by a tokeniser, and has learned what tends to follow what. Everything downstream — every fluent sentence, every confident hallucination, every surprisingly good argument — begins here, as a lookup table of sub-word chunks.'
    },
    {
      type: 'concept',
      title: 'The Prediction Machine',
      body: 'Once text is tokenised, the transformer architecture performs one operation: given all the tokens seen so far, what token should come next? This is called <strong>autoregressive generation</strong>. The model produces a probability distribution across all 100,000+ tokens in its vocabulary and samples from it. It does this once per token, one token at a time, until it generates a stop sequence or reaches a length limit.',
      bullets: [
        '<strong>How it learned:</strong> During training on trillions of tokens of text, the model repeatedly predicted the next token, compared its prediction to the actual next token in the document, and adjusted its internal weights to reduce error. This is self-supervised learning — no human labels needed. The signal comes from the structure of language itself, across billions of documents',
        '<strong>Temperature:</strong> A parameter controlling how the model samples from its probability distribution. At temperature 0, it always picks the single most probable token — output is deterministic, safe, and predictable. At temperature 1, it samples proportionally from the distribution — more varied. Above 1, low-probability tokens get a bigger chance — more creative, more likely to be wrong. Most chat interfaces default to around 0.7',
        '<strong>Why outputs feel generic:</strong> Maximum-probability tokens are, by definition, the most common, most expected, most "average" choices. When you ask an AI to write a poem and it produces something pleasant but unremarkable — technically correct, emotionally inert — that is the probability distribution working as intended. Generic output is what sampling from a well-trained distribution produces when it is not pushed toward the tails',
        '<strong>Hallucination as a structural property:</strong> The model has no fact-checking mechanism. It generates whatever token is most statistically plausible given what came before — drawing on patterns in its training data. If that training data contains plausible-sounding but false statements about some topic (and it does, at scale), the model will learn to reproduce them confidently. Hallucination is not a malfunction. It is the prediction engine doing exactly what it was built to do, with imperfect signal'
      ],
      callout: 'When an LLM states something confidently and wrongly, it is not lying. It does not have access to the concept of truth. It generated a token sequence that was statistically plausible given what it had seen before. The distinction matters enormously for how you use these tools — and how much you trust them without verification.'
    },
    {
      type: 'activity',
      title: 'Break the Model',
      instructions: 'Use a live AI assistant — Claude, ChatGPT, or Gemini — to run these tests. Record what you find and what each result tells you about the token architecture. The goal is not to mock the AI for failing, but to build an accurate mental model of what it actually is.',
      steps: [
        '<strong>Character counting:</strong> Ask the AI to count the occurrences of each letter in these words: "strawberry", "banana", "rhythm", your own name. Note where it fails. Ask it to try again. Does prompting it to "think step by step" help? Why might it?',
        '<strong>Character decomposition:</strong> Ask the AI: "Write out the word BANANA one letter at a time, with a hyphen between each letter." Then immediately ask: "Now count the B\'s, A\'s, and N\'s in what you just wrote." Does explicit decomposition in the prompt change the result? What does this tell you about how tokens interact with reasoning?',
        '<strong>Arithmetic with formatting:</strong> Ask the AI to add 784 + 263. Then ask it to add 7,840 + 2,630. Then try 17,849 + 32,416. Do commas in numbers change the result? They change the tokenisation — see if you can spot the pattern',
        '<strong>Temperature in the wild:</strong> Ask the AI to complete this sentence five times without repeating itself: "The most important quality in a leader is…" Do the completions cluster toward similar, expected answers? Ask it to "give a surprising, unconventional answer." How much does framing shift it toward the tail of the distribution?',
        '<strong>Reflection:</strong> Write one paragraph — without AI help — on how your mental model of AI changed during this activity. What will you do differently as a result?'
      ]
    },
    {
      type: 'discussion',
      title: 'Seeming vs. Being',
      questions: [
        { num: 1, text: 'If a language model produces a fluent, accurate explanation of quantum entanglement, does it "understand" quantum entanglement? What would understanding require that next-token prediction cannot provide — and is there a clean line between them?' },
        { num: 2, text: 'Some AI researchers argue that intelligence is substrate-independent: if a system consistently behaves as if it understands something, the internal mechanism is philosophically irrelevant. Does knowing the token architecture change your view of this argument — or does it not matter how the output is produced, only that it is correct?' },
        { num: 3, text: 'GPT-4\'s training data contains billions of examples of humans being wrong — textbook errors, medical misinformation, confident falsehoods stated in plausible prose. The model has learned the statistical patterns of all of it. What does this imply about the default level of trust we should place in AI-generated information?' }
      ]
    },
    {
      type: 'quiz',
      question: 'Why do large language models typically fail when asked to count how many times a specific letter appears in a word like "strawberry"?',
      options: [
        'The model lacks a spell-checker and cannot inspect letter sequences directly',
        'Language models process text as sub-word tokens rather than individual characters, making character-level counting structurally impossible without explicit decomposition in the prompt',
        'Character counting falls outside the model\'s training data, so it has no examples to learn from',
        'The model deliberately approximates answers to reduce computational cost'
      ],
      correct: 1,
      explanation: 'Language models process text through a tokeniser that groups characters into sub-word chunks before the model ever sees the input. "Strawberry" might be split into tokens like "Str", "aw", and "berry" — none of which is an individual letter. The model has no mechanism to count characters within tokens because characters are not units it operates on. This is a structural limitation, not a training gap. It generalises to any task requiring character-level manipulation: anagram solving, spelling checks, or identifying whether a word contains a specific letter. Prompting the model to first write out the word letter-by-letter forces character decomposition into the token stream, which is why "think step by step" sometimes helps — it changes what the model sees before it has to answer.'
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        { icon: '🔢', label: 'Text becomes numbers first', text: 'Every input is converted into integer token IDs before the model sees it. The model never reads letters, words, or sentences — only fragments assigned by a tokeniser trained primarily on English data' },
        { icon: '🎲', label: 'Prediction, not reasoning', text: 'LLMs generate one token at a time by sampling from a probability distribution over their entire vocabulary. Temperature controls how adventurously — or cautiously — they sample. There is no internal reasoning process behind the output; only learned statistical associations' },
        { icon: '⚠️', label: 'Hallucination is architectural', text: 'Confidently wrong answers are not malfunctions. They are the prediction engine generating statistically plausible continuations that happen to be false. The model has no access to truth — only to patterns. Verify independently, always' },
        { icon: '🛠️', label: 'Know the tool to use it well', text: 'Understanding tokens explains why AI is strong at fluent prose and weak at character manipulation, arithmetic, and novel reasoning. It tells you when to trust output at face value and when to push back with structured decomposition' }
      ]
    }
  ],

};
