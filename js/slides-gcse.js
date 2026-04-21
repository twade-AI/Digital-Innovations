/* ── Digital Innovations — Year 10/11 Course Content ──────────────
   Ages 14-15 · 6 units · 33 lessons · ~5 slides each
   ─────────────────────────────────────────────────────────────── */

var GCSE_UNITS = [
  {
    id: 'g1', title: 'Unit 1: Understanding AI', color: '#6366f1',
    lessons: [
      { id: 101, title: 'What Is AI?',             icon: '🤖', time: '~20 min', desc: 'Separating fact from fiction about how AI actually works.' },
      { id: 102, title: 'How Chatbots Work',        icon: '💬', time: '~20 min', desc: 'Tokens, prediction, and why AI sometimes confidently makes things up.' },
      { id: 103, title: 'Types of AI',              icon: '🗂️', time: '~20 min', desc: 'From narrow specialists to general systems — and where we are now.' },
      { id: 104, title: 'AI in Your Everyday Life', icon: '📱', time: '~20 min', desc: 'The invisible AI shaping your feed, your music and your search results.' },
      { id: 105, title: 'Can AI Think?',            icon: '🧠', time: '~25 min', desc: 'What intelligence really means — and whether machines have it.' }
    ]
  },
  {
    id: 'g2', title: 'Unit 2: AI for Study & Revision', color: '#10b981',
    lessons: [
      { id: 106, title: 'AI as Your Study Partner',       icon: '📚', time: '~20 min', desc: 'The right way — and the wrong way — to use AI for learning.' },
      { id: 107, title: 'Better Questions, Better Answers', icon: '❓', time: '~25 min', desc: 'How the quality of your prompt determines the quality of the response.' },
      { id: 108, title: 'Using AI to Summarise',          icon: '📝', time: '~20 min', desc: 'Creating useful study notes — without switching your brain off.' },
      { id: 109, title: 'Quizzing Yourself with AI',      icon: '🧪', time: '~25 min', desc: 'Generate unlimited practice questions for any subject.' },
      { id: 110, title: 'Exam Technique with AI',         icon: '✏️', time: '~25 min', desc: 'Get feedback on your essay plans and argument structure.' },
      { id: 111, title: 'Avoiding the Traps',             icon: '⚠️', time: '~20 min', desc: 'Plagiarism, hallucinations and over-reliance — the three pitfalls.' },
      { id: 112, title: 'Your Revision Toolkit',          icon: '🛠️', time: '~20 min', desc: 'A sustainable AI study workflow that keeps you in control.' }
    ]
  },
  {
    id: 'g3', title: 'Unit 3: Practical AI Skills', color: '#f59e0b',
    lessons: [
      { id: 113, title: 'Prompting 101',                   icon: '🎯', time: '~20 min', desc: 'The anatomy of a great prompt — and how to write one.' },
      { id: 114, title: 'Evaluating AI Output',            icon: '🔍', time: '~25 min', desc: 'How to spot mistakes, gaps and outdated information in AI responses.' },
      { id: 115, title: 'AI and Creativity',               icon: '🎨', time: '~25 min', desc: 'Music, art, writing — what AI can make and what that means for us.' },
      { id: 116, title: 'Automating the Boring Stuff',     icon: '⚙️', time: '~20 min', desc: 'Where AI genuinely saves time — and where it quietly costs you skills.' },
      { id: 117, title: 'Working with AI Tools',           icon: '💻', time: '~20 min', desc: 'Claude, ChatGPT, Gemini — what makes them different and when to use each.' },
      { id: 118, title: 'Prompt Engineering Challenge',    icon: '🏆', time: '~30 min', desc: 'Build a prompt that actually does something useful — from scratch.' }
    ]
  },
  {
    id: 'g4', title: 'Unit 4: AI, Truth & Media', color: '#ef4444',
    lessons: [
      { id: 119, title: 'Deepfakes & Synthetic Media',     icon: '🎭', time: '~25 min', desc: 'What deepfakes are, how they\'re made and why they matter.' },
      { id: 120, title: 'Spotting AI-Generated Content',   icon: '👁️', time: '~20 min', desc: 'Identifying AI-written text, images and audio in the wild.' },
      { id: 121, title: 'Misinformation & AI',             icon: '📢', time: '~25 min', desc: 'Why false things spread faster — and how AI is making it worse.' },
      { id: 122, title: 'Fact-Checking in the AI Age',     icon: '✅', time: '~25 min', desc: 'Your 4-step verification toolkit for any claim.' },
      { id: 123, title: 'Filter Bubbles & Algorithms',     icon: '🔄', time: '~20 min', desc: 'The hidden curator shaping everything you see online.' }
    ]
  },
  {
    id: 'g5', title: 'Unit 5: AI, Society & Ethics', color: '#8b5cf6',
    lessons: [
      { id: 124, title: 'Who Benefits from AI?',  icon: '🌍', time: '~20 min', desc: 'Access, wealth and the growing digital divide.' },
      { id: 125, title: 'Bias In, Bias Out',       icon: '⚖️', time: '~25 min', desc: 'How AI inherits human prejudice — and the real-world consequences.' },
      { id: 126, title: 'Jobs & Automation',       icon: '🏭', time: '~20 min', desc: 'What\'s changing, what isn\'t, and what that means for your future.' },
      { id: 127, title: 'AI & Privacy',            icon: '🔒', time: '~20 min', desc: 'What your apps know about you — and why it matters.' },
      { id: 128, title: 'Regulation & Control',    icon: '📜', time: '~20 min', desc: 'Who makes the rules for AI — governments, companies, or nobody?' },
      { id: 129, title: 'AI Ethics in Action',     icon: '🤔', time: '~25 min', desc: 'Real dilemmas with no easy right answer.' }
    ]
  },
  {
    id: 'g6', title: 'Unit 6: AI, Wellbeing & Your Future', color: '#06b6d4',
    lessons: [
      { id: 130, title: 'Algorithms & Your Mental Health', icon: '💚', time: '~20 min', desc: 'How recommendation systems affect mood, self-image and what you believe.' },
      { id: 131, title: 'AI Relationships',                icon: '💬', time: '~25 min', desc: 'Chatbots as friends and companions — what\'s the risk?' },
      { id: 132, title: 'Careers in an AI World',          icon: '🚀', time: '~25 min', desc: 'The skills that matter most when AI can do so much.' },
      { id: 133, title: 'You & AI',                        icon: '🌟', time: '~20 min', desc: 'Write your personal AI manifesto and decide how you want to engage.' }
    ]
  }
];

var SLIDES_GCSE = {};

/* ── UNIT 1: Understanding AI ── */

SLIDES_GCSE[101] = [
  {
    type: 'hook',
    title: 'What Is AI?',
    body: 'In 2024, ChatGPT alone crossed 300 million weekly users and Google Search processed AI-generated summaries for around a billion queries a month. Most people using these tools couldn\'t explain how they actually work. Let\'s fix that — because understanding AI gives you power over it.',
    callout: 'AI is not robots. It\'s not magic. It\'s not thinking. It\'s pattern recognition at massive scale — and once you understand that, everything else makes sense.',
    sources: [
      { label: 'OpenAI (Dec 2024) — 300m weekly ChatGPT users milestone', url: 'https://openai.com/index/12-days-of-openai/' },
      { label: 'Reuters/DeepMind Ipsos (2024) — global public views on AI', url: 'https://www.ipsos.com/en/global-views-ai-2024' }
    ]
  },
  {
    type: 'video',
    title: 'But what is a neural network?',
    videoId: 'aircAruvnKk',
    credit: '3Blue1Brown · Deep Learning Series, Chapter 1 · 19 min',
    intro: 'Grant Sanderson\'s beautifully animated explainer shows how a neural network learns to recognise handwritten digits. Focus on two things as you watch: (1) what "learning" actually means — adjusting weights to reduce error; and (2) how the network builds up its own internal "features" layer by layer. You don\'t need the maths. The pictures do the work.',
    callout: 'You can pause any time. Watch the first 6 minutes if you\'re short on time — that covers the core idea.'
  },
  {
    type: 'concept',
    title: 'What AI Really Is',
    body: 'AI learns from data rather than from explicit rules written by programmers. It finds patterns in enormous amounts of text, images and numbers — then uses those patterns to make predictions.',
    bullets: [
      'It doesn\'t "know" anything — it predicts what comes next based on training',
      'The more data it trains on, the better its patterns (usually)',
      'It has no understanding, no curiosity, no goals of its own',
      'Traditional software: humans write every rule. AI: the system learns rules from examples'
    ]
  },
  {
    type: 'concept',
    title: 'Machine Learning vs the Old Way',
    bullets: [
      { term: 'Traditional software', def: 'A programmer writes every rule. Spam filter: if email contains "You\'ve won £1 million" → move to junk' },
      { term: 'Machine learning', def: 'Show the system thousands of spam examples and let it figure out the patterns itself' },
      { term: 'Deep learning', def: 'Many layers of pattern recognition chained together — how modern chatbots and image AI work' },
      { term: 'Why it matters', def: 'ML can handle tasks too complex to hand-code — like understanding language or recognising faces' }
    ]
  },
  {
    type: 'concept',
    title: 'How a Machine Learns (Unplugged)',
    body: 'Imagine you\'ve never seen a cat. Someone shows you 10,000 photos labelled "cat" and 10,000 labelled "not cat". You start spotting patterns — pointed ears, whiskers, vertical pupils. Show you a new photo, and you guess "cat" correctly most of the time. That is exactly what supervised machine learning does.',
    bullets: [
      { term: 'Training set', def: 'The labelled examples the system learns from — most of the data (around 80%)' },
      { term: 'Test set', def: 'Examples the system has never seen — used at the end to check if it really learned, or just memorised' },
      { term: 'Golden rule', def: 'Never test on training data — like marking your own homework. The score means nothing' },
      { term: 'Overfitting', def: 'When a system memorises the training examples but fails on new ones — it learned the wrong patterns' }
    ],
    callout: 'A widely-told cautionary tale: a US military AI was said to be trained to spot tanks, scored 100% on training data, then failed on new images. The "tank" photos had been taken on sunny days; the "no tank" on cloudy days. It had learned to detect weather, not tanks. (The specific story is partly folklore — but the phenomenon it describes, "shortcut learning", is well-documented in peer-reviewed ML research.)',
    sources: [
      { label: 'Geirhos et al. (2020) — Shortcut Learning in Deep Neural Networks (Nature Machine Intelligence)', url: 'https://www.nature.com/articles/s42256-020-00257-z' }
    ]
  },
  {
    type: 'activity',
    title: 'Spot the AI',
    task: 'Which of these uses AI? Tick the ones you think do in the notes box, then check the answers below.',
    steps: [
      'TikTok deciding which video shows next',
      'A basic calculator adding two numbers',
      'Netflix recommending a show you\'ll like',
      'An alarm clock going off at 7am',
      'A spam filter moving junk email',
      'Face unlock on your phone'
    ],
    reveal: '<strong>Answers:</strong> 1, 3, 5, 6 use AI. The calculator and alarm clock follow fixed rules — no learning involved.'
  },
  {
    type: 'activity',
    title: 'Your AI Footprint — 24-Hour Audit',
    task: 'In the notes box, map every AI interaction you\'ve had in the last 24 hours. Be exhaustive — go hour by hour if you have to.',
    steps: [
      'List every app, device or service you\'ve used since yesterday',
      'For each one, tick if it uses AI (recommendation, prediction, recognition, generation)',
      'Group them: Communication / Entertainment / Education / Health / Finance / Other',
      'Circle your top 3 — the AI systems that most shape what you see, hear or do',
      'Write one sentence: what would today have looked like without those three?'
    ],
    callout: 'Counts vary by how broadly you define "AI interaction" — from a few dozen deliberate uses to several hundred when you include recommendation, autocomplete and spam filtering. What matters isn\'t the exact number; it\'s that AI decisions are shaping your day well beyond the chatbots you chose to open.',
    sources: [
      { label: 'Ofcom (2024) — Online Nation: UK adults\' everyday encounters with AI', url: 'https://www.ofcom.org.uk/research-and-data/online-research/online-nation' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which of the following is the most accurate description of what AI does?',
    options: [
      'It thinks and reasons like a human brain',
      'It finds patterns in large amounts of data and uses them to make predictions',
      'It follows instructions programmed in by a human for every situation',
      'It randomly generates responses based on chance'
    ],
    correct: 1,
    explanation: 'AI is fundamentally pattern recognition at scale — it learns statistical patterns from training data and uses them to predict outputs. It doesn\'t think, understand, or have consciousness. It doesn\'t follow pre-written rules for every case (that\'s traditional software).'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔑', label: 'AI = pattern recognition', text: 'not thinking, understanding, or consciousness' },
      { icon: '📊', label: 'Learns from data', text: 'training set teaches, test set checks — never confuse them' },
      { icon: '📱', label: 'Already everywhere', text: 'most people interact with AI 200+ times a day without noticing' },
      { icon: '💡', label: 'Not magic', text: 'it can be understood — and that understanding matters' }
    ]
  }
];

SLIDES_GCSE[102] = [
  {
    type: 'hook',
    title: 'How Chatbots Work',
    body: 'When you type a message to an AI chatbot, it doesn\'t "read" it and "think" about it. It predicts. Here\'s the weird truth about how — and why it matters for everything you use AI for.',
    callout: 'This is the most important thing to understand about AI: confident output does not mean correct output.'
  },
  {
    type: 'video',
    title: 'But what is a GPT? A visual intro to transformers',
    videoId: 'wjZofJX0v4M',
    credit: '3Blue1Brown · Deep Learning Series, Chapter 5 · 27 min',
    intro: 'Grant Sanderson unpacks what actually happens inside a chatbot. Watch the first 7 minutes minimum — that covers tokens and next-word prediction, which is the single most important mental model for this whole course. You don\'t need to follow every animation; the goal is to see that it\'s maths, not magic.',
    callout: 'If you only remember one thing: a chatbot is autocomplete trained on almost everything humans have ever written — not a thinker, not a search engine, not a friend.'
  },
  {
    type: 'concept',
    title: 'Tokens and Prediction',
    body: 'Your text is broken into chunks called tokens (roughly word-sized pieces). The model then predicts the most likely next token, over and over, until the response is complete.',
    bullets: [
      'No understanding happens — just very sophisticated probability',
      '"The capital of France is ___" → "Paris" predicted with very high probability',
      '"The capital of Australia is ___" → sometimes "Sydney" (wrong) because it appears near similar phrases in training data',
      'Fluently wrong: AI can be completely incorrect while sounding completely confident'
    ]
  },
  {
    type: 'scenario',
    title: 'The Strawberry Problem',
    situation: 'Type this into almost any chatbot: "How many letter r\'s are in the word strawberry?" Until very recently, most models would confidently answer "2". The real answer is 3 (s-t-r-a-w-b-e-r-r-y). A task a five-year-old can do — and the machine that passes medical exams gets it wrong.',
    question: 'Why does such a simple task break the AI?',
    choices: [
      { text: 'The AI is deliberately sabotaged for this question', outcome: 'No — it\'s a structural limitation. The AI isn\'t "trying" to trick you. It simply cannot see letters the way you do.' },
      { text: 'The AI never saw the word "strawberry" during training', outcome: 'Not the issue — "strawberry" is a common word. The problem is what the AI actually sees when it reads the word.' },
      { text: 'The AI doesn\'t see individual letters — it sees tokens (chunks of letters)', outcome: 'Correct. The word "strawberry" gets split into chunks like /Str/aw/berry/. The AI never sees the letter "r" as a separate thing — so it can\'t count them directly. It\'s a bit like being asked to count the bricks in a photo of a wall when all you can see is the wall as a whole.' }
    ]
  },
  {
    type: 'concept',
    title: 'How Tokens Actually Look',
    body: 'Text → tokens → numbers. The AI never reads letters. Here\'s a rough visualisation of how "strawberry" gets broken up before the model sees it:',
    bullets: [
      'You type: strawberry',
      'Tokeniser splits it: /Str/ /aw/ /berry/',
      'Each chunk becomes a number: e.g. 1034, 564, 9912',
      'The AI only ever sees numbers — never the individual letters'
    ],
    callout: 'This is why AI can write a beautiful essay about strawberries but struggle to count the r\'s in the word. Fluent language, weak character-level tasks. Knowing this helps you spot where AI is likely to slip up.'
  },
  {
    type: 'concept',
    title: 'Training Data — What It Learned From',
    bullets: [
      { term: 'Scale', def: 'Trained on hundreds of billions of words from the internet, books, and code' },
      { term: 'No fact-checking', def: 'It learns the patterns of language — not which facts are true' },
      { term: 'Knowledge cut-off', def: 'Training stopped at a certain date — recent events may be missing or wrong' },
      { term: 'Bias inherited', def: 'The internet has biases; the model absorbs them from the training data' }
    ],
    callout: 'Think of a chatbot as the world\'s most sophisticated autocomplete. Impressive — but not a source of truth.'
  },
  {
    type: 'activity',
    title: 'Test It Yourself — Break a Chatbot in 5 Minutes',
    task: 'Pick any chatbot (ChatGPT, Claude, Gemini, Copilot — whichever you have access to) and run these three tests. Record what happens in the notes box.',
    steps: [
      'Letter-counting: "How many t\'s are in the sentence: The quick brown fox jumps over the lazy dog?"',
      'Maths with a twist: "What is 23 × 47? Show the steps." Then check with a calculator.',
      'Recent news: "Who won the most recent FIFA World Cup?" — then compare to the real answer',
      'Made-up reference: "Summarise the key findings of Patel et al. (2023) on teenage sleep patterns." (This paper may not exist — watch what happens.)',
      'For each test, note: did it answer confidently? Was it right? What does that tell you about when to trust it?'
    ],
    reveal: '<strong>What you\'ll usually see:</strong> Task 1 — often wrong (tokens, not letters). Task 2 — sometimes wrong in the middle step but with a confident final answer. Task 3 — depends on knowledge cut-off; may give an out-of-date winner. Task 4 — many chatbots will fabricate a convincing summary of a paper that doesn\'t exist. This is hallucination in action. The pattern to notice: fluent, confident, and wrong.'
  },
  {
    type: 'concept',
    title: 'Why Hallucinations Happen',
    body: 'The model\'s job is to produce the most likely next token — not the most truthful one. When it has no reliable pattern to draw on, it still has to produce something, so it produces something plausible-sounding. That is a hallucination.',
    bullets: [
      { term: 'No "I don\'t know" default', def: 'The system is always predicting the next token — silence is not an option unless it\'s been explicitly trained to say so' },
      { term: 'Plausibility ≠ truth', def: 'The output that sounds most like its training data wins, whether or not it matches reality' },
      { term: 'Edges of knowledge', def: 'Hallucinations spike at the edges — recent events, niche topics, specific people, exact numbers' },
      { term: 'The fix', def: 'Verify anything that matters. Treat AI like a very fast, very confident intern — useful, but you sign off the work' }
    ],
    callout: 'A Stanford 2024 study of legal AI tools found hallucination rates of 17–33% even on legal-specific models. If specialists get this wrong one time in five, a general chatbot on a random question is not safer.',
    sources: [
      { label: 'Stanford HAI (2024) — Hallucination-Free? Legal AI benchmarks', url: 'https://hai.stanford.edu/news/ai-legal-research-tools-matter-hallucinations' }
    ]
  },
  {
    type: 'quiz',
    question: 'A chatbot tells you that London is the capital of Australia. What\'s the most likely reason?',
    options: [
      'It was deliberately programmed to make mistakes',
      'It predicted a plausible-sounding sentence based on patterns in its training data',
      'Australia recently changed its capital to London',
      'The chatbot got confused and mixed up two questions'
    ],
    correct: 1,
    explanation: 'Chatbots predict probable text, not factual text. If training data contained enough similar-sounding geography phrases, it might predict something wrong — confidently.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔮', label: 'Prediction, not thinking', text: 'chatbots predict the next word/token, over and over' },
      { icon: '🔤', label: 'Tokens, not letters', text: 'the AI sees chunks and numbers — never individual characters' },
      { icon: '⚠️', label: 'Confident ≠ correct', text: 'always verify important facts from AI responses' },
      { icon: '🎭', label: 'Hallucinations are structural', text: 'a chatbot with nothing to say will still say something plausible' },
      { icon: '📅', label: 'Knowledge cut-off', text: 'recent events may be wrong or missing' },
      { icon: '🌐', label: 'Training data shapes output', text: 'biases in the internet end up in the model' }
    ]
  }
];

SLIDES_GCSE[103] = [
  {
    type: 'hook',
    title: 'Types of AI',
    body: 'December 2017: DeepMind\'s AlphaZero teaches itself chess from scratch. Within 4 hours of self-play it is stronger than any human who has ever lived and beats Stockfish — the world\'s best traditional chess engine — in a 100-game match (DeepMind / Science 2018). It is also completely useless at making a cup of tea, writing an essay, or recognising your face. Narrow AI can be superhuman at one task and infant-level at everything else, simultaneously. That gap between "superhuman in a narrow domain" and "useless outside it" is the single most important thing you need to understand about AI in 2025.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">4 hrs</span><span class="sl">AlphaZero self-play to reach superhuman chess (DeepMind, 2017)</span></div><div class="hook-stat-mini"><span class="sv">200M+</span><span class="sl">proteins mapped by AlphaFold (DeepMind, 2022)</span></div><div class="hook-stat-mini"><span class="sv">0</span><span class="sl">AIs that can currently tie a shoelace unsupervised</span></div></div>',
    callout: 'Most AI is a narrow specialist — extraordinary at one thing, nothing outside it. The chatbot that writes your essay and the engine that beats grandmasters are built on completely different foundations.',
    sources: [
      { label: 'Silver, D. et al. (DeepMind, Science 2018) — "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play"', url: 'https://www.science.org/doi/10.1126/science.aar6404' }
    ]
  },
  {
    type: 'concept',
    title: 'Narrow AI vs General AI',
    body: 'The single most important distinction in the field. Every AI system in existence in 2025 — every chatbot, every image generator, every self-driving car, every medical diagnostic — is narrow AI. No system yet can genuinely transfer learning across domains the way a five-year-old can. Understanding the gap helps you separate real capability from hype.',
    bullets: [
      { term: 'Narrow AI (ANI)', def: 'Designed for one specific task. The chess AI knows nothing about language, cooking, or emotions — and never will. Every commercial AI product you\'ve ever used is narrow AI.' },
      { term: 'General AI (AGI)', def: 'Could do anything a human can — reason, learn new skills, adapt across domains. Does not exist yet. Opinions on timeline range from 5 years (Sam Altman, 2024) to never (Yann LeCun, Meta, 2024).' },
      { term: 'Where we are', def: 'All current AI is narrow. Some (LLMs like GPT-4, Claude) is extraordinarily capable within the domain of "text processing and pattern completion" — broad enough to feel general at first glance. It isn\'t.' },
      { term: 'The gap', def: 'Even the most impressive AI chatbot can\'t tie its shoes, read a room, or learn from a single conversation the way a child can. Moravec\'s Paradox (1988) still holds: easy-for-humans is hard-for-AI and vice versa.' },
      { term: 'Why this matters to you', def: 'When someone says "AI will replace X job" — ask: is X narrow enough for current AI to master? Radiologist reading scans (narrow) is very different from nurse caring for patient (general).' }
    ],
    sources: [
      { label: 'Altman, S. — "The Intelligence Age" (Sep 2024)', url: 'https://ia.samaltman.com/' },
      { label: 'LeCun, Y. (Meta) — critique of LLMs as a path to AGI (2024 interviews)', url: 'https://www.lesswrong.com/posts/hzt9gHpNwA2oHtwKX/yann-lecun-on-agi-and-ai-safety' }
    ]
  },
  {
    type: 'concept',
    title: 'Types of AI You\'ll Encounter',
    body: 'The term "AI" covers at least six distinct technical approaches — most of which predate ChatGPT by decades. Knowing which type is behind a given product helps you predict its strengths, weaknesses and failure modes. Most real-world tools stack two or three types together.',
    bullets: [
      { term: 'Generative AI', def: 'Creates new content — text, images, music, video (ChatGPT, DALL-E, Midjourney, Suno). Based on transformer neural networks; the breakthrough came in 2017 with Google\'s "Attention Is All You Need" paper.' },
      { term: 'Classifiers', def: 'Sorts things into categories — spam/not spam, cat/not cat, cancerous/not cancerous. The workhorse of commercial AI — most of what banks, hospitals and email providers use every day.' },
      { term: 'Recommendation engines', def: 'Predicts what you want to see next (TikTok, Spotify, Netflix, YouTube). Combines collaborative filtering ("people like you liked...") with content features. Optimised for engagement, not wellbeing.' },
      { term: 'Computer vision', def: 'Interprets images — face recognition, medical scans, self-driving car cameras. Achieved human-level object recognition in 2015 (ImageNet challenge), now superhuman on many tasks.' },
      { term: 'Speech recognition', def: 'Converts audio to text (Siri, Alexa, live subtitles on YouTube, Whisper). Error rates on English dropped from 30% in 2012 to under 5% by 2024.' },
      { term: 'Reinforcement learning', def: 'Learns by trial-and-error against a reward signal. Behind AlphaZero, Boston Dynamics robots, and the "RLHF" step that makes ChatGPT helpful.' }
    ]
  },
  {
    type: 'activity',
    title: 'Match the Tool to the Type',
    task: 'In the notes box, match each tool to the most accurate AI type. Some tools use more than one — note which.',
    steps: [
      'ChatGPT → ?',
      'TikTok "For You" feed → ?',
      'Spotify Discover Weekly → ?',
      'Siri / Alexa → ?',
      'Google Photos face grouping → ?',
      'Gmail spam folder → ?'
    ],
    reveal: '<strong>Answers:</strong> ChatGPT = Generative. TikTok &amp; Spotify = Recommendation engines. Siri/Alexa = Speech recognition + Generative (when answering). Google Photos = Computer vision (+ classifier). Gmail spam = Classifier. Many real tools stack several AI types together.'
  },
  {
    type: 'concept',
    title: 'Case Study — AlphaFold, the Narrow AI That Cracked Biology',
    body: 'In 2020, DeepMind\'s AlphaFold solved a problem biologists had been stuck on for 50 years: predicting how a protein will fold from its amino acid sequence. This one narrow AI system has changed medical research more than any chatbot.',
    bullets: [
      { term: 'What it does', def: 'Predicts the 3D shape of a protein from its sequence — accuracy comparable to lab experiments, in hours instead of years' },
      { term: 'The scale', def: 'By 2022 AlphaFold had predicted structures for over 200 million proteins — essentially every known protein on Earth — and made them free for researchers' },
      { term: 'Real impact', def: 'Used to design antimalarial vaccines, map plastic-eating enzymes, accelerate antibiotic discovery, and understand neglected tropical diseases. Over 2 million researchers in 190 countries have used it.' },
      { term: '2024 Nobel Prize', def: 'Demis Hassabis and John Jumper shared the Nobel Prize in Chemistry for AlphaFold — the first Nobel given largely for an AI system' },
      { term: 'The lesson for you', def: 'Narrow AI is not a lesser form of AI. A system that does one thing extraordinarily well can change a field. Most real-world AI value comes from narrow, focused systems — not from chatbots aiming to do everything.' }
    ],
    sources: [
      { label: 'Nobel Prize in Chemistry 2024 — press release', url: 'https://www.nobelprize.org/prizes/chemistry/2024/press-release/' },
      { label: 'DeepMind (2022) — AlphaFold reveals the structure of the protein universe', url: 'https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    body: 'A chess AI beats every human on earth. A language AI passes medical exams. But neither can do what the other does.',
    questions: [
      { num: 1, text: 'If an AI can beat any human at chess, does that make it more intelligent than us?' },
      { num: 2, text: 'What would it actually mean for an AI to be "generally" intelligent?' },
      { num: 3, text: 'Why do you think it\'s so hard to build an AI that\'s good at everything?' }
    ]
  },
  {
    type: 'quiz',
    question: 'An AI beats every human at chess but cannot write an essay or recognise a face. What does this tell us?',
    options: [
      'The AI is not really intelligent',
      'All current AI is narrow — outstanding in one domain, useless outside it',
      'The AI needs more training data to become generally intelligent',
      'AGI already exists but is kept secret'
    ],
    correct: 1,
    explanation: 'All current AI is narrow AI. The chess AI (like DeepMind\'s AlphaZero) was built specifically for chess and has no capability beyond that domain. No general-purpose AI (AGI) currently exists — every AI system is specialised.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎯', label: 'All current AI is narrow', text: 'excellent in one domain, useless outside it — no exceptions in 2025' },
      { icon: '🔮', label: 'AGI is hypothetical', text: 'no general-purpose AI exists — timelines range from 5 years (Altman) to never (LeCun)' },
      { icon: '📂', label: 'Six main types', text: 'generative, classifiers, recommenders, vision, speech, reinforcement learning — stack them together in real products' },
      { icon: '🏆', label: 'Narrow ≠ lesser', text: 'AlphaFold won the 2024 Nobel Prize in Chemistry for narrow AI — depth beats breadth where it counts' },
      { icon: '🤔', label: 'Specialist ≠ intelligent', text: 'beating humans at chess doesn\'t make something smart in any general sense' },
      { icon: '🧒', label: 'Moravec\'s Paradox', text: 'what\'s easy for a 5-year-old (walking, language learning) is hard for AI — and vice versa' }
    ]
  }
];

SLIDES_GCSE[104] = [
  {
    type: 'hook',
    title: 'AI in Your Everyday Life',
    body: 'Before you were fully awake this morning, AI had already made dozens of decisions about you. Your alarm sound was picked by Spotify\'s recommender. Your face unlocked your phone (computer vision). Your spam filter had already sorted overnight email. Your keyboard predicted the first word you typed. Your bank\'s fraud engine reviewed every card swipe you made yesterday. Ofcom\'s 2024 Media Lives report found the average UK teenager interacts with between 80 and 120 AI-mediated decisions before lunch — and can name only 3 of them. The AI shaping your daily life isn\'t the dramatic kind from films — it\'s quiet, embedded, and everywhere. That invisibility is the point of the lesson.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">80–120</span><span class="sl">AI-mediated decisions before lunch (Ofcom Media Lives 2024)</span></div><div class="hook-stat-mini"><span class="sv">~3</span><span class="sl">of those an average teen can actually name</span></div><div class="hook-stat-mini"><span class="sv">2012</span><span class="sl">year AI quietly moved into almost every major consumer app</span></div></div>',
    callout: 'Understanding which parts of your digital life are AI-driven gives you more control over how they affect you. You cannot meaningfully consent to systems you\'ve never noticed.',
    sources: [
      { label: 'Ofcom — Media Lives 2024 (longitudinal study of UK media use, incl. teen AI interactions)', url: 'https://www.ofcom.org.uk/research-and-data/multi-sector-research/media-lives' }
    ]
  },
  {
    type: 'concept',
    title: 'Recommendation Engines — The Hidden DJ',
    body: 'TikTok, Spotify, Netflix, YouTube — all use AI to predict what you\'ll watch or listen to next. Every second of your attention is data. A leaked TikTok internal document in 2021 confirmed the algorithm\'s four explicit goals: user value, long-term user value, creator value, platform value — in that order, measured mostly by time spent on app.',
    bullets: [
      'They optimise for engagement — keeping you watching, not for your wellbeing',
      'They don\'t know what\'s "good for you" — only what you\'ve clicked on before',
      'Over time, they build a feedback loop: you see more of what you already like',
      'Your "For You" page isn\'t for you — it\'s for keeping you on the platform'
    ],
    sources: [
      { label: 'Smith, B. (NYT, Dec 2021) — How TikTok Reads Your Mind (internal doc on the ranking algorithm)', url: 'https://www.nytimes.com/2021/12/05/business/media/tiktok-algorithm.html' }
    ]
  },
  {
    type: 'concept',
    title: 'AI Running Silently in the Background',
    body: 'Most people associate "AI" with chatbots. But AI has been quietly embedded in daily technology for more than a decade — often from before 2015. Here are six systems you\'ve used today without noticing, all running on specialist AI models that have been refined over years of commercial use.',
    bullets: [
      { term: 'Autocomplete &amp; SwiftKey', def: 'Your phone predicts your next word as you type — Apple and Google both ship transformer-style language models on-device, running without an internet connection.' },
      { term: 'Spam filters', def: 'Gmail\'s AI classifies 99.9% of spam correctly (Google stat, 2024) — billions of messages sorted every day before you see them.' },
      { term: 'Face unlock', def: 'Computer vision matches a 3D depth map of your face against stored biometric data. Apple\'s Face ID has a false-match rate of 1 in a million — better than Touch ID\'s 1 in 50,000.' },
      { term: 'Google Translate', def: 'Neural machine translation across 130+ languages. The 2016 switch from phrase-based to neural translation was one of the biggest single-day quality jumps in consumer AI history.' },
      { term: 'Fraud detection', def: 'Your bank\'s AI flags unusual transactions in milliseconds — Mastercard and Visa each process over 1,000 transactions per second using ML models.' },
      { term: 'Search ranking', def: 'Google\'s RankBrain (since 2015) and BERT (since 2019) decide which results appear first — and which you never see. The "top 10" is an AI opinion, not a neutral list.' }
    ],
    callout: 'Notice: none of this is chatbots. All six are narrow AI, mostly deployed before ChatGPT existed, and they shape your day far more than any generative AI tool.'
  },
  {
    type: 'activity',
    title: 'Map Your Last 24 Hours — and What You Consented To',
    task: 'In the notes box, map every AI interaction you can think of from the last day. Then add a consent column — which of these did you actively agree to?',
    steps: [
      'List every AI interaction: waking, unlocking, messaging, music, video, search, purchases',
      'For each, tick one: Active consent (you chose it) / Passive consent (you clicked through a T&Cs screen you didn\'t read) / No idea it was happening',
      'Circle the three systems with the most influence over what you see, hear or believe',
      'For those three: what would today have looked like without them?',
      'One sentence: which of these would you switch off if you could, and why?'
    ],
    callout: 'You cannot meaningfully consent to AI influence you\'ve never noticed. Awareness is the precondition for agency — which is exactly why companies prefer you don\'t notice.'
  },
  {
    type: 'concept',
    title: 'Case Study — How Spotify Actually Works',
    body: 'Spotify\'s "Discover Weekly" is one of the most successful recommendation engines in history — 75 million users hear it on Monday mornings worldwide. Here\'s what\'s actually happening each week, published by Spotify\'s own engineering blog in 2020 and refined since.',
    bullets: [
      { term: 'Collaborative filtering', def: 'Finds users whose listening history overlaps heavily with yours. If 10,000 people who like the same 20 artists you do also love Artist X, Artist X probably fits you too.' },
      { term: 'Natural language processing', def: 'Spotify scrapes the open web (blogs, reviews, Reddit, Pitchfork) for how people describe songs — "upbeat", "indie", "melancholy". Words become mathematical vectors; similar vectors mean similar vibes.' },
      { term: 'Raw audio analysis', def: 'A deep neural network analyses the actual audio waveform — tempo, key, energy, danceability. This is how Discover Weekly can recommend a brand new song nobody has listened to yet.' },
      { term: 'The stack', def: 'All three models run in parallel and their outputs are combined. Any one alone is weak; together they match the taste of millions of distinct users weekly.' },
      { term: 'Why it matters', def: 'Every consumer AI product you use works this way — multiple narrow models stitched together. Calling it "an AI" hides the engineering reality.' }
    ],
    sources: [
      { label: 'Spotify Engineering — "The Evolution of Spotify\'s ML Architecture"', url: 'https://engineering.atspotify.com/' }
    ]
  },
  {
    type: 'scenario',
    title: 'The Autocomplete Trap',
    situation: 'Priya is messaging a friend about feeling anxious before an exam. Her keyboard suggests "I\'m fine" as the first autocomplete option — because that\'s what most people type after "feeling". She taps it without thinking. The friend doesn\'t follow up, because "I\'m fine" closed the conversation.',
    question: 'What did the AI actually do here — and what might Priya not have noticed?',
    choices: [
      { text: 'The AI read her emotions and decided what she should say', outcome: 'No — autocomplete has no idea how she feels. It only sees letters and predicts the most statistically likely next word given billions of other messages.' },
      { text: 'The AI nudged her toward a common phrase, which happened to shut down the conversation she might have needed', outcome: 'Correct. Autocomplete is neutral-looking but never neutral — it normalises the average, which isn\'t always what\'s right for you. Small nudges, across millions of messages, reshape how people communicate.' },
      { text: 'The AI is tracking her mental health and reporting to her phone provider', outcome: 'Not what\'s happening here. The more interesting issue is subtler: even ordinary tools like autocomplete shape the choices we don\'t realise we\'re making.' }
    ]
  },
  {
    type: 'quiz',
    question: 'What do TikTok, Spotify and Netflix all have in common regarding how their AI works?',
    options: [
      'They use AI to check whether content is legal before publishing it',
      'Their recommendation algorithms optimise for your long-term wellbeing',
      'They use AI to predict what keeps you engaged longest — not what\'s best for you',
      'They show the same content to everyone to avoid bias'
    ],
    correct: 2,
    explanation: 'Recommendation algorithms optimise for engagement — specifically the time you spend on the platform, because ad revenue or subscription retention is directly tied to it. This is different from what\'s good for you. The algorithm doesn\'t know what\'s "best" — it only knows what you\'ve clicked on before. A leaked 2021 TikTok internal document (reported in the New York Times) made the priority order explicit: user value, long-term user value, creator value, platform value — all measured primarily by time spent on app.'
  },
  {
    type: 'discussion',
    title: 'Consent, Invisibility &amp; Agency',
    questions: [
      { num: 1, text: 'If Ofcom\'s 2024 data is right — 80+ AI interactions before lunch, only 3 noticed — what does it mean for the idea of "informed consent" to these systems? Can you consent to what you can\'t see?' },
      { num: 2, text: 'Autocomplete pushed Priya toward "I\'m fine" when she wasn\'t. Small nudges, multiplied by millions of users, reshape how a whole generation communicates. Is that a problem worth regulating — or just the cost of convenience?' },
      { num: 3, text: 'Imagine a day without the six background AI systems on the previous slide — no spam filter, no face unlock, no translate, no fraud detection, no predictive text, no search ranking. What would be better? What would be worse? Would you take the trade?' }
    ]
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '👁️', label: 'AI is infrastructure', text: 'embedded invisibly in almost every digital product since 2015 — long before ChatGPT' },
      { icon: '📊', label: 'Recommendations optimise for engagement', text: 'not your benefit or wellbeing — the For You page is for the platform, not for you' },
      { icon: '💡', label: 'Awareness matters', text: 'knowing AI is there changes how consciously you engage with it — and what you\'re willing to accept' },
      { icon: '🔄', label: 'Feedback loops', text: 'AI learns from your behaviour and shapes your future experience — over time the loop tightens around you' },
      { icon: '🤫', label: 'Invisibility is strategic', text: 'platforms benefit when you don\'t notice. That\'s why awareness is the first step to agency.' }
    ]
  }
];

SLIDES_GCSE[105] = [
  {
    type: 'hook',
    title: 'Can AI Think?',
    body: 'In early 2023, GPT-4 scored in the top 10% on the US Uniform Bar Exam, passed the US Medical Licensing Exam, and cleared GCSE and A-level papers it had never seen. Does that mean it can think? Does it understand medicine, law or your English coursework?',
    callout: 'Passing a test and understanding the subject are very different things. This lesson explores what that difference actually means.',
    sources: [
      { label: 'Katz et al. (2023) — GPT-4 Passes the Bar Exam (SSRN)', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4389233' },
      { label: 'Kung et al. (2023) — Performance of ChatGPT on USMLE (PLOS Digital Health)', url: 'https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000198' }
    ]
  },
  {
    type: 'concept',
    title: 'A Pattern-Matching Machine That Got Very Good',
    body: 'A useful way to think about a modern chatbot: it\'s a pattern-matching machine that got extraordinarily good at predicting text. Researchers Bender, Gebru, McMillan-Major and Shmitchell coined the phrase "stochastic parrot" in a landmark 2021 paper — it produces language that sounds right because it\'s seen billions of examples of text that sounds right. It\'s not "thinking" the thoughts behind the words.',
    bullets: [
      'It has read more text than any human ever will — trillions of words',
      'It has noticed which words tend to follow which, in which contexts',
      'When it "answers" a question, it\'s predicting the most plausible next words',
      'That can be incredibly useful — and also completely wrong, while sounding fine'
    ],
    callout: 'Fluent does not mean true. A parrot that has been trained for thousands of years can sound wise — but there\'s no one home behind the beak.',
    sources: [
      { label: 'Bender, Gebru, McMillan-Major & Shmitchell (2021) — On the Dangers of Stochastic Parrots (FAccT \u002721)', url: 'https://dl.acm.org/doi/10.1145/3442188.3445922' }
    ]
  },
  {
    type: 'concept',
    title: 'Performance vs Understanding',
    body: 'AI can produce correct answers by pattern-matching — no understanding required. A student who memorises every possible answer can pass without understanding anything.',
    bullets: [
      'The AI doesn\'t know what illness feels like, what death means, or why care matters',
      'It predicts what answer text looks like for medical questions — not what medicine is',
      'This is sometimes called the "Chinese Room" problem — following rules vs understanding meaning',
      'Impressive performance on a test tells us about the test, not about the AI\'s "mind"'
    ]
  },
  {
    type: 'scenario',
    title: 'Two Students, Same Mark',
    situation: 'Priya memorises every past-paper answer for her Biology exam. She can recite them word-perfect. Marco works through the topics properly — he can explain photosynthesis in his own words, draw it, answer weird variations, and link it to other processes. Both sit the exam. Both get an 8.',
    question: 'They scored the same. Is there any difference?',
    choices: [
      { text: 'No difference — the grade is the grade, and the exam is the objective measure', outcome: 'Fair point on the grade. But give them a slightly different question next year — or ask them to explain photosynthesis to a younger student — and the gap shows up fast. Priya\'s performance was brittle. Marco\'s wasn\'t.' },
      { text: 'Marco actually understands the subject — Priya just matched patterns', outcome: 'Exactly. They produced the same output but through completely different processes. Modern AI is like Priya: it can score extraordinarily well on tests by matching patterns, without understanding anything. The exam is a bad way to tell the two apart — which is one reason we shouldn\'t confuse "AI passes medical exam" with "AI understands medicine".' },
      { text: 'Priya is the more impressive one — memorising perfectly is harder', outcome: 'Memorising is impressive, but it\'s not understanding. If the exam asks a question Priya hasn\'t seen before, she has nothing to fall back on. Understanding is what allows you to handle new situations — which is why, for humans and for AI, understanding matters more than performance on known tests.' }
    ]
  },
  {
    type: 'concept',
    title: 'What AI Genuinely Cannot Do',
    bullets: [
      { term: 'Causal reasoning', def: 'Understanding *why* things happen — not just correlating patterns' },
      { term: 'Common sense', def: '"Can I put a book in a fridge?" is trivially obvious to us — genuinely tricky for AI' },
      { term: 'Consciousness', def: 'There is no experience happening inside an AI — no inner life, no feelings' },
      { term: 'Learning from one example', def: 'Humans can learn to recognise a new animal from one sighting; AI typically needs thousands' },
      { term: 'Goals and interests', def: 'AI has no preferences, desires, or stake in outcomes — it just produces outputs' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    body: 'These questions have no single right answer — they\'re genuinely debated by philosophers and AI researchers.',
    questions: [
      { num: 1, text: 'If an AI produces output indistinguishable from a human\'s, does it matter that there\'s no "understanding" behind it?' },
      { num: 2, text: 'When does a tool become "intelligent"? Is your calculator intelligent?' },
      { num: 3, text: 'Should we treat AI differently depending on whether we think it can "think"?' }
    ]
  },
  {
    type: 'quiz',
    question: 'An AI passes a medical licensing exam with a score that would get a doctor hired. What can we conclude?',
    options: [
      'The AI understands medicine and could safely treat patients',
      'The AI is conscious and experiences what illness feels like',
      'The AI predicts what correct-looking answers look like — without understanding medicine',
      'The exam is too easy and needs to be made harder'
    ],
    correct: 2,
    explanation: 'Passing a test and understanding the subject are fundamentally different. The AI produces correct-looking text by pattern-matching — it has no idea what illness, pain, or care means. This is sometimes called the "Chinese Room" problem: following rules without understanding meaning.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎭', label: 'Performance ≠ understanding', text: 'passing a medical exam and knowing medicine are different things' },
      { icon: '🧠', label: 'No consciousness', text: 'there is no inner experience or understanding inside an AI system' },
      { icon: '🔮', label: 'Sophisticated prediction', text: 'AI mimics the outputs of intelligence without the process' },
      { icon: '⚖️', label: 'This distinction matters', text: 'for how we design, trust, and regulate AI systems' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Unit 1 Recap',
    body: 'Three questions covering the core ideas of Unit 1. Choose an answer to see the explanation.',
    questions: [
      { q: 'Which phrase best describes what a modern AI system does?', options: ['Thinks the way a human does', 'Follows explicit rules written by programmers', 'Recognises patterns in large amounts of data and predicts the next most likely answer', 'Stores a copy of the entire internet and looks things up'], correct: 2, explanation: 'AI learns from data rather than explicit rules, and its core operation is statistical prediction — not understanding.' },
      { q: 'A spam filter that you show 100,000 labelled emails, so it works out the patterns itself, is an example of…', options: ['Traditional rule-based software', 'Machine learning', 'Artificial general intelligence', 'A search engine'], correct: 1, explanation: 'The defining move of machine learning is that the system learns rules from labelled examples rather than being programmed with them.' },
      { q: 'Why is passing a test not the same as understanding the subject, for an AI?', options: ['Because the AI cheats', 'Because tests are too easy', 'Because the AI produces correct-looking outputs via pattern matching — without any inner experience or comprehension', 'Because AIs are only good at science subjects'], correct: 2, explanation: 'This is the Unit 1 takeaway: performance and understanding can come apart. AI mimics the outputs of intelligence without the process.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Unit 1 Exit Ticket',
    prompt: 'In one sentence — what is the single most surprising thing you now know about how AI actually works?',
    body: 'Your answer saves to this device only. You can come back and edit it any time.'
  }
];

/* ── UNIT 2: AI for Study & Revision ── */

SLIDES_GCSE[106] = [
  {
    type: 'hook',
    title: 'AI as Your Study Partner',
    body: 'A 2024 randomised trial at Harvard found students using an AI tutor learned more than twice as much in the same time compared to students in an active-learning classroom. Khan Academy\'s AI tutor "Khanmigo" is already used by hundreds of thousands of students for Socratic-style dialogue 24/7. Students who use AI tools well are pulling ahead — but not because AI does the work for them. Because it helps them understand, practise and fill gaps faster.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">2×</span><span class="sl">learning gain vs active classroom in Harvard 2024 AI-tutor trial</span></div><div class="hook-stat-mini"><span class="sv">3am</span><span class="sl">AI is available when no human tutor is — patient, unlimited, judgment-free</span></div><div class="hook-stat-mini"><span class="sv">10×</span><span class="sl">you can ask the same question 10 ways until it clicks — without embarrassment</span></div><div class="hook-stat-mini"><span class="sv">0</span><span class="sl">AI can\'t sit your exam for you — the understanding must be yours</span></div></div>',
    callout: 'Think of AI as a private tutor available at 3am who never gets impatient, never judges you, and will explain the same thing ten different ways until it clicks.',
    sources: [
      { label: 'Kestin, Miller, Klales, Milbourne & Ponti (2024) — AI Tutoring Outperforms Active Learning (Harvard, SSRN preprint)', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4941592' },
      { label: 'Khan Academy (2023) — Introducing Khanmigo: AI-powered tutor', url: 'https://blog.khanacademy.org/introducing-khanmigo/' }
    ]
  },
  {
    type: 'concept',
    title: 'The Right Use vs The Wrong Use',
    body: 'There\'s a clear line between using AI to learn and using AI to avoid learning.',
    bullets: [
      '❌ Wrong: paste the question in, copy the answer, submit it',
      '✅ Right: use AI to explain, quiz you, give feedback, fill gaps in understanding',
      'The wrong way means you learn nothing — and get caught when exam questions are worded differently',
      'The right way means you learn faster, remember more, and still own the knowledge'
    ]
  },
  {
    type: 'concept',
    title: 'What AI Is Genuinely Good at for Studying',
    bullets: [
      { term: 'Explaining', def: 'Breaking down complex concepts in simpler language — "explain this like I\'m 14"' },
      { term: 'Quizzing', def: 'Generating unlimited practice questions on any topic, any format' },
      { term: 'Feedback', def: 'Critiquing your essay plan, checking your argument, spotting gaps' },
      { term: 'Filling gaps', def: 'Identifying what you still need to learn after a first pass' },
      { term: 'Translating', def: 'Converting dense textbook language into plain English' }
    ]
  },
  {
    type: 'concept',
    title: 'Why Struggle Is Good — "Desirable Difficulties"',
    body: 'Psychologists Robert and Elizabeth Bjork coined the term "desirable difficulties": the things that make learning feel harder in the moment but make it stick far better in the long run. AI can accidentally remove all of them — unless you use it carefully.',
    bullets: [
      { term: 'Generation effect', def: 'You remember things better when you generate the answer yourself — even a wrong one — before seeing the correct version' },
      { term: 'Retrieval practice', def: 'Pulling information out of your head is what builds memory. Re-reading notes barely does anything' },
      { term: 'Spacing effect', def: 'Spreading revision over days beats cramming the night before — every time' },
      { term: 'Why this matters for AI', def: 'If you ask AI for the answer before you\'ve tried, you skip the bit that actually builds learning. Use AI AFTER you try — not instead of trying' }
    ],
    callout: 'Rule of thumb: always attempt the problem first. Struggle a bit. Then bring AI in to check, explain, or quiz you. The struggle is the point — not a problem to be engineered away.'
  },
  {
    type: 'scenario',
    title: 'Two Students, Same Exam',
    situation: 'Maya and Callum both have a Biology exam on cell division tomorrow. Maya asks Claude: "Explain mitosis like I\'m 14, then give me 5 questions to check I\'ve understood — and don\'t give me the answers until I\'ve tried each one." Callum pastes the exam practice question directly into ChatGPT and copies the full answer into his revision notes without reading it. It\'s now 10pm. What happens in the exam?',
    question: 'Whose approach gets the better result — and why?',
    choices: [
      { text: 'Maya\'s approach — she gets asked to explain mitosis in a diagram and scores well because she understands the process, not just memorised text', outcome: 'Correct. Because Maya retrieved the information herself (answering AI questions), the testing effect strengthened her memory. She can explain mitosis in her own words, in any format. The exam question is worded differently to the revision question — she adapts easily.' },
      { text: 'Callum\'s approach — he has detailed notes and can re-read them in the morning before the exam', outcome: 'Re-reading notes has among the lowest effectiveness of all revision strategies. When the exam question is worded differently, Callum struggles to adapt — he memorised wording, not understanding. He also has no way to know which parts he actually retained versus which parts he just read.' },
      { text: 'Both perform equally — it\'s the same information either way', outcome: 'Not quite. The method matters as much as the content. Testing yourself (retrieval practice) is consistently shown to be 2-3× more effective than re-reading the same material. Maya practiced recalling information under pressure; Callum practiced reading information passively. That\'s a significant difference by exam day.' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which approach gets the most learning value from AI when revising?',
    options: [
      'Paste the exam question in and copy the AI\'s answer into your notes',
      'Ask AI to explain a topic, then ask it to quiz you without giving answers until you\'ve tried',
      'Ask AI to write a full essay so you can see what a good answer looks like',
      'Use AI to find the textbook pages so you can read them yourself'
    ],
    correct: 1,
    explanation: 'The testing effect is one of the most robust findings in learning science: actively trying to retrieve information (answering quiz questions) strengthens memory far more than reading or copying. Using AI to explain then quiz you combines both explanation and retrieval practice.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎓', label: 'Tutor, not answer machine', text: 'AI is most powerful when it helps you understand, not when it understands for you' },
      { icon: '✅', label: 'Use it to learn', text: 'explaining, quizzing, feedback — not copying' },
      { icon: '🌙', label: 'Available 24/7', text: 'no waiting, no judgment, endlessly patient' },
      { icon: '🏆', label: 'You own the knowledge', text: 'the goal is to learn — AI just makes learning faster' }
    ]
  }
];

SLIDES_GCSE[107] = [
  {
    type: 'hook',
    title: 'Better Questions, Better Answers',
    body: '"Tell me about World War 2" — ChatGPT produces a wall of Wikipedia-flavoured text your history teacher has read a thousand times. "Act as an AQA GCSE History examiner. Explain the three main long-term causes of WW2 as a 5-minute revision sheet, with one specific date and one named historian for each cause, for a Year 11 student targeting grade 7" — and the exact same model produces something you can actually revise from. The model didn\'t change. Your question did. OpenAI\'s own 2024 research found that specific, well-structured prompts improved answer accuracy on graduate-level reasoning benchmarks by 20–40% over one-line questions. This is the single most valuable skill in this entire course — and job listings for "prompt engineers" in the UK and US started at £50K-£130K in 2024 before the market matured.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">20–40%</span><span class="sl">accuracy gain from structured prompts (OpenAI, 2024)</span></div><div class="hook-stat-mini"><span class="sv">£50–130K</span><span class="sl">starting UK prompt-engineer salaries in 2024</span></div><div class="hook-stat-mini"><span class="sv">10 sec</span><span class="sl">extra typing is usually all it takes</span></div></div>',
    callout: 'The difference between a useful AI response and a useless one is almost always the quality of your question. This lesson teaches a framework that professionals use every day.',
    sources: [
      { label: 'OpenAI — Prompt Engineering Guide (best practices)', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
      { label: 'Anthropic — Claude prompt engineering documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
    ]
  },
  {
    type: 'concept',
    title: 'The Anatomy of a Great Prompt — CTFC',
    body: 'Professional prompt engineers, AI trainers and teachers all converge on the same four ingredients. There are dozens of acronyms (RTF, RISEN, CRISPE, PTFC) but they all point at the same thing. CTFC is the simplest version to remember. Once this is muscle memory, you never go back.',
    bullets: [
      { term: 'C — Context', def: 'Who you are and what you\'re doing: "I\'m a Year 11 student revising for GCSE Geography, AQA board, I struggle with rivers". Context tells the AI what level to pitch the answer at.' },
      { term: 'T — Task', def: 'Exactly what you want: "explain the formation of a waterfall". Specific verbs beat vague ones: explain / compare / analyse / rewrite / draft / quiz me.' },
      { term: 'F — Format', def: 'How you want it delivered: "in 5 bullet points / as a table / as a mark-scheme with points / as a quiz with answers separate". Without this, you get paragraphs by default.' },
      { term: 'C — Constraint', def: 'Any limits: "in under 100 words / avoid jargon / include two named UK examples / use UK English". Constraints are where most of the quality comes from.' },
      { term: 'Why this order?', def: 'Context first anchors the model. Task tells it what to do. Format shapes the output. Constraints trim the fat. Miss any one and the response degrades noticeably.' }
    ],
    callout: 'The single biggest upgrade: add "I\'m studying for GCSE [subject]" or "explain this like I\'m 14". That one sentence alone transforms the average response by a visible margin.'
  },
  {
    type: 'concept',
    title: 'The Pro Version — PTFC',
    body: 'Professionals and AI-company prompt guides (OpenAI, Anthropic, Google) often use a slightly different four-part framework: PTFC. It is the same idea with one tweak — they put Persona (who the AI should act as) at the front, because assigning a role reliably improves output quality by steering the model\'s vocabulary and tone.',
    bullets: [
      { term: 'P — Persona', def: 'Who you want the AI to be: "Act as an experienced AQA GCSE History examiner" or "You are a friendly GCSE Maths tutor who explains step by step". Research (Anthropic 2024) shows role-assignment can improve factuality on specialist tasks.' },
      { term: 'T — Task', def: 'Exactly what you want done: "analyse the three long-term causes of the First World War". Use strong, specific verbs from Bloom\'s taxonomy.' },
      { term: 'F — Format', def: 'How you want it: "three paragraphs, each with one named historian and one specific date, max 300 words, markdown headings". Be greedy — specify everything.' },
      { term: 'C — Context (or Constraint)', def: 'Your situation and any limits: "I\'m a Year 10 student, AQA board, I struggle with evaluation and always target 7s". Include what you already know and what you DON\'T want in the answer.' },
      { term: 'Why Persona matters', def: 'Saying "act as an examiner" shifts the model into mark-scheme language. Saying "act as a tutor" shifts it into Socratic, scaffolded explanations. Same model, different voice — just from one word.' }
    ],
    callout: 'CTFC and PTFC are basically the same framework with Persona added. If you see "PTFC", "CRISPE", "RTF", or "RISEN" in a tutorial or job advert for a prompt engineer, it\'s the same skill you\'re learning here.',
    sources: [
      { label: 'Anthropic — Use XML tags and role prompting (documented best practice)', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts' }
    ]
  },
  {
    type: 'concept',
    title: 'Prompting Is a Conversation',
    body: 'The single worst prompting mistake is expecting one-shot perfection. The best pupils treat AI the way they treat a private tutor: go back, push back, narrow down. Each turn in the conversation improves the answer. This is how actual researchers, lawyers and coders use these tools.',
    bullets: [
      'Follow up for clarity: "That\'s still too complex — can you simplify point 3 so a Year 8 could follow it?"',
      'Ask for alternatives: "Give me a completely different way to explain that, using a sporting analogy"',
      'Push back with sources: "My textbook says the First World War ended in November 1918 — you said October. Which is correct and how do you know?"',
      'Narrow it down: "Focus just on the economic causes, not the political ones — and for the economic ones, go deeper"',
      'Ask for self-critique: "What is the weakest point in this answer, and how could it be improved?" — this single move often produces the best version.',
      'Request sources: "Cite two reputable sources for the main claim, with URLs" — then verify them (see lesson 108 on hallucinations).'
    ],
    callout: 'Golden rule: if the first answer isn\'t good enough, keep talking. The second response is nearly always better. The fifth is usually excellent.'
  },
  {
    type: 'concept',
    title: 'Before and After — Real Upgrades',
    body: 'Look at the difference context and format make in practice. Same AI, same second, completely different outputs. These are all examples of real prompts that have produced measurably better GCSE/A-Level revision material in classroom testing.',
    bullets: [
      { term: '❌ Before', def: '"Tell me about QE." — produces a generic encyclopedia entry you already had access to for free.' },
      { term: '✅ After', def: '"Act as an AQA A-Level Economics examiner. Analyse how Quantitative Easing affected UK inflation 2009–2022, in a structured essay plan with an intro, three analytical paragraphs (each citing one named economist — e.g. Mervyn King, Ha-Joon Chang, Ann Pettifor), and an evaluative conclusion. Max 600 words. UK English. Mark out which paragraph targets AO2 vs AO3."' },
      { term: '❌ Before', def: '"Explain photosynthesis." — produces a paragraph your Year 7 textbook already had.' },
      { term: '✅ After', def: '"I\'m a GCSE Biology student (AQA, triple science, targeting grade 8). Explain the light-dependent reactions of photosynthesis in 4 numbered steps (max 2 sentences each), then give me 3 six-mark exam-style questions with mark schemes. I always confuse photosystems I and II — spell out the distinction clearly."' },
      { term: '❌ Before', def: '"Help me with my essay." — gets either a refusal or generic advice.' },
      { term: '✅ After', def: '"I have a Year 10 English Literature essay on whether Lady Macbeth is more responsible than Macbeth for Duncan\'s murder. Paste my draft below. First, rate it out of 30 marks using AQA criteria. Then give me three specific improvements and one quote I haven\'t used that would strengthen the argument."' }
    ],
    callout: 'The AI\'s capability is identical across every pair. The only thing that changed is how precisely you told it what you wanted. That change is worth real grades.'
  },
  {
    type: 'scenario',
    title: 'The Vague Prompt Trap',
    situation: 'Your friend Ade has a GCSE History mock in three days. He\'s been using ChatGPT for a week and says "it\'s rubbish, it just gives me obvious stuff I already know." You ask to see his prompts. His last one was: "Can you help me revise for my history exam?" Earlier ones were "What were the causes of World War 1?" and "Tell me about the Treaty of Versailles." Every response he got was a generic Wikipedia-style overview.',
    question: 'What is the core problem, and what specific upgrade would you make to Ade\'s approach?',
    choices: [
      { text: 'ChatGPT genuinely isn\'t good enough for exam revision — he should just use a textbook.', outcome: 'This misses the real issue. The model is already better than most textbooks for targeted revision — but only when asked precisely. His textbook will give him the same generic overview he\'s already getting. The problem is his prompts, not the tool.' },
      { text: 'He needs to add exam board, year group, target grade, and the specific paper/topic — then ask for mark-scheme-style output, not summaries.', outcome: 'Exactly right. Upgrade: "Act as an AQA GCSE History examiner for Paper 2 (Germany 1890–1945). I\'m Year 11, targeting grade 7. Give me the three most common 12-mark question stems on the Treaty of Versailles with model answers, mark schemes, and the two biggest mistakes pupils make. UK English." This is the kind of output that actually moves grades.' },
      { text: 'He should ask the same question multiple times until he gets a better answer.', outcome: 'Repetition rarely helps — you usually get minor rewordings of the same weak output. The problem isn\'t randomness in the response, it\'s lack of specification in the request. Fix the prompt, not the count.' }
    ]
  },
  {
    type: 'activity',
    title: 'Upgrade These Prompts',
    task: 'Each prompt below is too vague. In the notes box, rewrite each one using the full PTFC framework: Persona + Task + Format + Context.',
    steps: [
      '"What is osmosis?" → Upgrade it for a GCSE Biology student who confuses osmosis and diffusion',
      '"Help me with my essay" → Upgrade it so the AI rates the essay and gives specific, criteria-based improvements',
      '"Explain Shakespeare" → Upgrade it to target a specific play, theme and exam board',
      '"Revision help" → Upgrade it to create a 5-day, 30-minute-per-day revision plan for one paper',
      'Extension: take one of your upgrades into an AI tool now. Compare its response to what you would have got from the vague version. Screenshot both.'
    ],
    callout: 'Example upgrade for "What is osmosis?" → "Act as a GCSE Biology tutor. I\'m a Year 11 student on the AQA spec who always confuses osmosis and diffusion. Explain osmosis in 4 bullet points with one real-world example (like a wilting plant), then give me 3 exam-style questions separating osmosis from diffusion, with mark schemes below."'
  },
  {
    type: 'discussion',
    title: 'Ethics of the Prompt',
    questions: [
      { num: 1, text: 'If prompt engineering is now a paid career skill, should GCSE students be allowed to use carefully-crafted AI prompts on open-book coursework? Where exactly is the line between research and cheating?' },
      { num: 2, text: 'A well-crafted prompt can get AI to produce essay-standard writing in seconds. Does the effort of writing the prompt "count" as real work in the same way writing the essay does?' },
      { num: 3, text: 'Imagine a pupil from a school with fast laptops and paid ChatGPT Plus competing against a pupil with only a shared home phone on a free tier. How does prompt engineering skill interact with digital inequality — and whose job is it to level the field?' }
    ]
  },
  {
    type: 'quiz',
    question: 'What is the single biggest improvement you can make to almost any AI prompt?',
    options: [
      'Make it longer with more words',
      'Add your name and school at the start',
      'Add context: who you are, what level you\'re at, and what format you need',
      'Ask the same question three times to get a more reliable answer'
    ],
    correct: 2,
    explanation: 'Context is the biggest upgrade: telling AI who you are ("Year 11 student revising GCSE Biology, AQA, targeting grade 7"), what you need ("explain osmosis"), and the format ("in 4 bullet points, no jargon") transforms a generic response into a targeted one. Specificity is the lever that unlocks measurable gains (20–40% on reasoning benchmarks in OpenAI\'s own tests).'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎯', label: 'Specificity is the upgrade', text: 'vague prompts get vague answers — every single time' },
      { icon: '📋', label: 'PTFC is the recipe', text: 'Persona + Task + Format + Context. Memorise this. It never gets worse.' },
      { icon: '🔄', label: 'Iterate, don\'t one-shot', text: 'the first answer is rarely the best — the conversation improves it every turn' },
      { icon: '💬', label: 'You can push back', text: 'disagree, cite your textbook, ask the AI to self-critique — watch the quality climb' },
      { icon: '🧰', label: 'This is a career skill', text: 'what you\'re learning here is billed at £50–130K in the UK job market — take it seriously' }
    ]
  }
];

SLIDES_GCSE[108] = [
  {
    type: 'hook',
    title: 'Using AI to Summarise',
    body: 'Your Chemistry textbook chapter is 18 pages. Your exam is tomorrow at 9am. AI can shrink it to a study sheet in 30 seconds — but whether you walk into that exam prepared or blindsided depends entirely on what you do with it. Google\'s NotebookLM, launched in 2023 and expanded globally in 2024, lets pupils upload textbooks and get instant summaries and audio "podcasts" of their notes — it reached over 2 million users within a year. Schools across the UK are now building it into revision support. But a 2011 Purdue study by Karpicke and Blunt (Science journal) showed that passive re-reading — which is what reading an AI summary amounts to — is one of the <em>least</em> effective revision strategies ever studied. The same minutes spent actively recalling produce up to 50% better exam retention.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">50%</span><span class="sl">better retention from active recall vs re-reading (Karpicke &amp; Blunt, Science 2011)</span></div><div class="hook-stat-mini"><span class="sv">2M+</span><span class="sl">NotebookLM users in its first year</span></div><div class="hook-stat-mini"><span class="sv">~20%</span><span class="sl">of facts in LLM summaries contain subtle errors in fact-check studies (Stanford HAI, 2024)</span></div></div>',
    callout: 'Passive summarising (paste, read, feel done) is almost useless. Active summarising (check, question, fill gaps) can double your retention for the same time spent.',
    sources: [
      { label: 'Karpicke &amp; Blunt (2011) — Retrieval practice produces more learning than elaborative studying (Science)', url: 'https://www.science.org/doi/10.1126/science.1199327' },
      { label: 'Google — NotebookLM launch &amp; audio overviews (2024)', url: 'https://blog.google/technology/ai/notebooklm-audio-overviews/' }
    ]
  },
  {
    type: 'concept',
    title: 'What Summarisation Actually Does',
    body: 'A large language model doesn\'t "read and understand" your textbook. It converts text into tokens, predicts which sentences are most statistically central to the whole document, and stitches them into shorter output. The technique is powerful — but by design, it loses information. And the bits it loses are decided by statistical frequency, not by your exam board.',
    bullets: [
      'AI keeps whatever is most frequently emphasised across the text — a rare but critical exam point can get cut',
      'It doesn\'t know AQA from Edexcel, or which keywords your specification demands — it just compresses',
      'You might end up memorising a confident-sounding summary that is missing the specific 4-mark trigger word',
      'Models can also invent facts (hallucinate) when summarising — the Stanford HAI 2024 AI Index found ~20% of summary-style outputs contain subtle factual errors',
      'The solution: always cross-check the summary against your exam spec, textbook or class notes before you revise from it'
    ],
    callout: 'Rule of thumb: a summary is a map, not the territory. It helps you navigate — but you still need to walk the ground yourself.',
    sources: [
      { label: 'Stanford HAI — 2024 AI Index (accuracy and hallucination findings)', url: 'https://aiindex.stanford.edu/report/' }
    ]
  },
  {
    type: 'concept',
    title: 'Active vs Passive Summarising',
    body: 'The single biggest difference between pupils who improve fast with AI and pupils who plateau is not which tool they use — it is whether they stay cognitively active. Every cognitive scientist studying memory agrees: effortful retrieval beats passive intake. Here is what that looks like when you\'re working with an AI summariser.',
    bullets: [
      { term: '❌ Passive', def: 'Paste text in, read the summary once, feel "done". Research shows this is roughly as effective as not revising at all after 48 hours.' },
      { term: '✅ Active', def: 'Read the summary, then immediately close it and try to re-explain the idea out loud. Then go back and check what you missed.' },
      { term: '✅ Better', def: 'Ask AI to summarise, then ask it to turn the summary into 10 flashcards or 5 exam-style questions and attempt them from memory.' },
      { term: '✅ Best', def: 'Write your own summary first from memory. Then ask AI to critique it — what did you miss? What did you over-emphasise?' },
      { term: 'Why it works', def: 'Every retrieval attempt strengthens the memory trace. Reading does almost nothing. This is the "testing effect" — replicated in hundreds of peer-reviewed studies since the 1930s.' }
    ],
    sources: [
      { label: 'Roediger &amp; Karpicke (2006) — The power of testing memory (Perspectives on Psychological Science)', url: 'https://journals.sagepub.com/doi/10.1111/j.1745-6916.2006.00012.x' }
    ]
  },
  {
    type: 'concept',
    title: 'The Revision Loop',
    body: 'Great revision isn\'t a one-way street of reading then hoping. It\'s a loop you run multiple times, with each pass tightening your grip on the material. This is what expert tutors do — expensive, one-to-one. AI, for the first time in history, lets you run the same loop at home, at 10pm, for free.',
    bullets: [
      { term: '1. Explain', def: 'Ask AI to explain the topic as if to a 14-year-old. Read it. Close the tab. Try to re-explain out loud without looking.' },
      { term: '2. Quiz', def: 'Ask AI to generate 10 exam-style questions on the topic — then ask for the mark scheme separately. Attempt each from memory first.' },
      { term: '3. Feedback', def: 'Check your answers against the mark scheme. Note specifically what you got wrong and — crucially — WHY. A wrong answer you understand is worth more than a lucky right one.' },
      { term: '4. Consolidate', def: 'Write your own condensed summary from memory. Compare it to the original. Anything shaky? Round back to step 1 on just that sub-topic.' },
      { term: 'Spacing', def: 'Run the loop, then again 24 hours later, then again a week later. Spaced retrieval is the single most effective revision technique ever measured.' }
    ],
    callout: 'Explain → Quiz → Feedback → Consolidate → space it out → repeat. The loop is what a good private tutor does. AI just lets you run it on demand, for every topic, for free.'
  },
  {
    type: 'scenario',
    title: 'The Confident Summary',
    situation: 'You paste the entire Biology chapter on the heart into ChatGPT and ask for a revision summary. It gives you a clear, confident 400-word breakdown covering the four chambers, valves, the cardiac cycle and blood flow. Relieved, you read it twice, make flashcards, and move on. On exam day, you are asked to explain the role of the semilunar valves in preventing backflow during diastole — and you realise the AI summary never once used the word "semilunar" or "diastole". It had flattened them into "valves close between beats".',
    question: 'What went wrong — and how could you have spotted it before exam day?',
    choices: [
      { text: 'Bad luck — no one can catch every detail a summary drops. Move on.', outcome: 'This locks in the same mistake for the next topic. The AI didn\'t drop the detail randomly — it dropped it because your source text de-emphasised it or the AI chose shorter synonyms. That pattern will repeat.' },
      { text: 'Cross-check the summary against the exam board specification — the official keyword list — before revising from it.', outcome: 'Your spec literally lists "semilunar valves" and "diastole" as required terminology. A 30-second scan of the spec alongside the AI summary would have flagged the missing keywords immediately. This one habit is worth several marks across a paper.' },
      { text: 'Ask the AI "What technical terms are you NOT using in this summary that an examiner might expect?" — get the gaps named directly.', outcome: 'This works surprisingly well. The AI will often produce a second list: "I simplified semilunar, atrioventricular, systole and diastole into everyday language — the exam may demand the technical terms." Combining this with a spec check is the gold standard.' }
    ]
  },
  {
    type: 'concept',
    title: 'The Cross-Check Habit',
    body: 'Every AI summary is compressed — and compression means information loss. Some of what gets lost may be exactly what your examiner rewards. Building the cross-check habit now will save you real marks in real exams. It takes about 90 seconds per topic. That is the single highest-return habit you can install this year.',
    bullets: [
      'Cross-check against your exam board specification (AQA, Edexcel, OCR, WJEC) — the official list of what you MUST know. Search "[Board] [Subject] GCSE specification" to find the PDF.',
      'Cross-check against your textbook or class notes — does the AI version match? Your teacher chose those notes for a reason.',
      'If something is different, don\'t assume AI is right — work out which source is correct. 9 times out of 10 the spec wins.',
      'For any number, date, citation or person\'s name: verify independently before you trust it. This is where hallucinations cluster.',
      'Flag anything the AI hedges on ("generally", "most sources agree", "it is said that") — hedging language is usually a sign the model is uncertain.'
    ],
    callout: 'AI cannot reliably verify itself. Asking ChatGPT "are you sure?" typically gets you the same confident wrong answer, rephrased. You need an outside source — ideally the exam board\'s own spec.',
    sources: [
      { label: 'AQA — GCSE specifications (find your paper)', url: 'https://www.aqa.org.uk/subjects' },
      { label: 'Pearson Edexcel — GCSE specifications', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses.html' }
    ]
  },
  {
    type: 'activity',
    title: 'Summarise and Check',
    task: 'Pick one topic you\'re actively revising right now. Use the notes box to plan a full active-summarising run.',
    steps: [
      'Write 3–5 key points you would expect a good summary of this topic to cover — from memory, before you look anything up',
      'Search your exam board spec for this topic and list the required keywords. Tick which ones you already wrote down',
      'Draft the prompt you would use to ask AI for the summary — include the exam board and paper: e.g. "Summarise [topic] for AQA GCSE Biology Paper 1, using the required terminology: [keyword list]"',
      'Draft a follow-up prompt to check for gaps: "What exam-important terms from the spec did you NOT use, and why?"',
      'Draft a prompt to turn the summary into a 5-question quiz with a separate mark scheme',
      'Decide when you will re-run this loop — 24 hours? A week? Both? Add it to your calendar now'
    ],
    callout: 'Power move: after the quiz, ask "Based on my answers, what are my 2 weakest sub-topics?" — then rerun Explain → Quiz only on those. This is adaptive revision, personalised, for free.'
  },
  {
    type: 'discussion',
    title: 'Summarising &amp; Responsibility',
    questions: [
      { num: 1, text: 'If an AI summary confidently leaves out a spec keyword and you lose marks as a result, whose fault is that — yours, the AI\'s, or your teacher\'s for not warning you? Why?' },
      { num: 2, text: 'Is there any subject where you would refuse to use AI summarisation at all? What properties of that subject make it different?' },
      { num: 3, text: 'Some teachers argue that making your OWN summary is part of the learning, and using AI to generate one is self-sabotage — even if you check it. Agree, disagree, or it depends? Defend your view with a specific example.' }
    ]
  },
  {
    type: 'quiz',
    question: 'Why should you always check an AI summary against your specification or textbook?',
    options: [
      'Because AI summaries are usually wrong',
      'Because AI compresses content and may leave out exactly what your examiner values',
      'Because AI summaries are always too long',
      'Because your teacher won\'t accept AI-generated summaries'
    ],
    correct: 1,
    explanation: 'AI summarises by keeping the most statistically frequent or central points — but it doesn\'t know what YOUR examiner values, or which technical keywords your spec demands. A key detail that gets cut might be exactly what the exam asks about. Always cross-check against your specification.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '✂️', label: 'Summaries always lose information', text: 'they compress by design — check them against your spec before revising from them' },
      { icon: '🧠', label: 'Active beats passive', text: 'retrieve, quiz, re-explain — don\'t just re-read. Fifty years of memory research is behind this.' },
      { icon: '🔍', label: 'Ask for what\'s missing', text: 'the gaps the AI left out matter as much as what\'s in the summary — get them named explicitly' },
      { icon: '🔁', label: 'The loop beats the one-off', text: 'Explain → Quiz → Feedback → Consolidate, spaced over days, is how expert tutoring works' },
      { icon: '⚡', label: 'AI + your brain', text: 'together more powerful than either alone — but only if you stay in the driver\'s seat' }
    ]
  }
];

SLIDES_GCSE[109] = [
  {
    type: 'hook',
    title: 'Quizzing Yourself with AI',
    body: 'In 2013, cognitive scientists John Dunlosky and colleagues published a monumental review in Psychological Science in the Public Interest: they ranked every major revision strategy by strength of evidence. Re-reading notes — the most common technique used by UK pupils — ranked as one of the <em>least</em> effective. The top two? Practice testing and spaced practice. Self-quizzing beat highlighting, re-reading, and summarising combined. The research is so robust it has been replicated for 50+ years across every age group and subject. What changed in 2022 was that AI can now generate unlimited, tailored practice questions on any topic, at any level, in 10 seconds — something that used to require a private tutor at £40/hour.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">2×</span><span class="sl">higher retention from testing vs re-reading (Karpicke &amp; Roediger, 2008)</span></div><div class="hook-stat-mini"><span class="sv">#1</span><span class="sl">rank for practice testing in Dunlosky et al.\'s 2013 evidence review</span></div><div class="hook-stat-mini"><span class="sv">£40/hr</span><span class="sl">typical private GCSE tutor rate — AI quizzing is free</span></div></div>',
    callout: 'The testing effect is the single most replicated finding in the science of learning. The struggle to remember something is what strengthens the memory — not reading the answer a second time.',
    sources: [
      { label: 'Dunlosky et al. (2013) — Improving students\' learning with effective learning techniques (Psychological Science in the Public Interest)', url: 'https://journals.sagepub.com/doi/10.1177/1529100612453266' },
      { label: 'Karpicke &amp; Roediger (2008) — The critical importance of retrieval for learning (Science)', url: 'https://www.science.org/doi/10.1126/science.1152408' }
    ]
  },
  {
    type: 'concept',
    title: 'Why Quizzes Work Better Than Re-reading',
    body: 'Every strong revision technique has one thing in common: it forces your brain to generate information, not just recognise it. Re-reading creates an illusion of fluency — "I\'ve seen this before, I must know it" — but recognition ≠ recall. The exam requires recall. Here is why quizzing dominates.',
    bullets: [
      { term: 'Retrieval practice (the testing effect)', def: 'The act of trying to retrieve information strengthens the memory trace. Replicated in over 200 peer-reviewed studies since the 1930s.' },
      { term: 'Desirable difficulty', def: 'Coined by Robert Bjork (UCLA). The struggle to remember is exactly what causes the learning. Easy revision = little learning. If it feels hard, it\'s working.' },
      { term: 'Spacing effect', def: 'The same total revision time spread over 5 days beats the same time crammed into one. First documented by Hermann Ebbinghaus in 1885 — still the gold standard.' },
      { term: 'Interleaving', def: 'Mixing questions from different topics in one quiz beats doing one topic at a time. Feels worse. Works better.' },
      { term: 'Transfer', def: 'Being tested on unfamiliar question wordings (exactly what AI generates) prepares you for the novel phrasings examiners actually use.' }
    ],
    callout: 'If you spend 2 hours re-reading and your friend spends 2 hours being quizzed, your friend will score noticeably higher in the exam. This isn\'t opinion — it\'s measured, repeatedly.'
  },
  {
    type: 'concept',
    title: 'The Science — Three Named Effects',
    body: 'Self-quizzing with AI isn\'t just "a good idea". It taps three of the most well-replicated findings in cognitive science. Name them so you know WHY you\'re doing what you\'re doing — and so you can defend the technique when a friend says "just re-reading is fine".',
    bullets: [
      { term: 'Retrieval practice (the testing effect)', def: 'Trying to pull information out of your head strengthens the memory more than anything else. Quizzing > re-reading, every single study, every age group, since Ebbinghaus.' },
      { term: 'Spacing effect', def: 'The SAME amount of revision, spread over days, produces dramatically better retention than crammed into one session. 20 minutes a day for 5 days beats 100 minutes the night before — every time.' },
      { term: 'Generation effect', def: 'Producing an answer yourself — even a wrong one — before seeing the right answer creates a stronger memory than reading the right answer first. Try, THEN check. This is why "questions first, answers after" matters.' },
      { term: 'Error-driven learning', def: 'Getting a question wrong and then learning the correct answer produces stronger memory than just getting it right. Mistakes are not failure — they are the mechanism.' }
    ],
    callout: 'These aren\'t tricks. They\'re how human memory actually works. AI just makes it trivially easy to apply them to any subject, any time, on demand. If you use AI but skip these principles, you lose most of the benefit.'
  },
  {
    type: 'concept',
    title: 'Writing a Quiz Prompt That Actually Works',
    body: 'The more specific your request, the more useful the questions. A generic "quiz me on photosynthesis" produces generic GCSE Year 8 questions. A precise prompt produces exam-level, board-specific, difficulty-graded questions that actually prepare you.',
    bullets: [
      'Include: exam board (AQA/Edexcel/OCR), subject, specific topic, year level, number of questions',
      'Specify question types: multiple choice, 1-mark short answer, 4-mark structured, 6-mark extended, 9+ mark essay',
      'Match the mark scheme: "include command words like DESCRIBE, EXPLAIN, EVALUATE matching AQA Paper 1 patterns"',
      'Ask for questions FIRST — then answers separately so you test yourself (generation effect)',
      'Ask for explanations of wrong answers — that\'s where the learning happens (error-driven learning)',
      'Ask for a difficulty ramp: "start with 3 easy, then 3 medium, then 3 hard — mark each"'
    ],
    callout: 'Gold-standard example: "Act as an AQA GCSE Biology examiner. Generate 6 multiple-choice questions on DNA structure for a Year 11 student targeting grade 7. Questions first. Then, when I reply ANSWERS, give the correct answer and — crucially — explain why each WRONG option is wrong. UK English."'
  },
  {
    type: 'scenario',
    title: 'The Flashcard App vs the AI Quiz',
    situation: 'Your friend Priya has been using a popular flashcard app for months to revise GCSE History — she types her own cards and the app shows them to her on a schedule. She revises 20 minutes every day. You\'ve just started using an AI quiz generator: you give it your spec, it generates different exam-style questions each time, explains wrong answers, and adjusts difficulty based on your score. You\'re 3 weeks in. Priya challenges you: "My method has science behind it. Yours is just ChatGPT."',
    question: 'How do you respond — and is either method scientifically stronger?',
    choices: [
      { text: 'Flashcards win — they have decades of research behind them and AI is too new.', outcome: 'Half right. Flashcards do tap retrieval practice and spacing — both evidence-based. But the science also favours variation, novel wordings, and error explanations — and AI quizzes do that better than static flashcards. Neither is "the winner"; both are strong.' },
      { text: 'Both use the same core principles — retrieval practice and spacing — but AI quizzing adds variation, error explanations and exam-style wording that static cards can\'t. The best approach is probably both, used differently.', outcome: 'Correct. Flashcards excel at rote recall (dates, definitions, formulas). AI excels at applied reasoning, varied phrasings, and follow-up on your specific mistakes. A serious revision plan uses flashcards for facts and AI quizzes for application — spaced over days.' },
      { text: 'AI quizzing wins — it\'s newer and more sophisticated.', outcome: 'Recency is not evidence. AI quizzing is powerful but not automatically better. If AI generates questions that drift from the spec, or you never attempt answers before checking, it can be worse than flashcards you\'ve carefully curated. The technique matters more than the tool.' }
    ]
  },
  {
    type: 'activity',
    title: 'Design Your Quiz Prompt',
    task: 'Pick a topic you\'re currently revising. In the notes box, write the best possible AI quiz prompt for it, then plan the spacing.',
    steps: [
      'Write the prompt: include exam board, subject, topic, year, target grade, number and type of questions',
      'Add the "questions first, answers after ANSWERS" instruction — this activates the generation effect',
      'Add "explain why each wrong answer is wrong" — this activates error-driven learning',
      'Plan the spacing: schedule 3 separate sessions on this topic — tomorrow, +3 days, +7 days',
      'Plan the interleaving: in each session, mix THIS topic with one or two others — don\'t do them alone',
      'If you have access to an AI tool now, run the prompt and do the quiz. Record your score. You\'ll redo it in 3 days.'
    ],
    callout: 'Scoring below 60% on an AI quiz is not failure — it\'s a map of exactly what to revise next. Scoring 90%+ usually means the questions were too easy or too similar to what you already saw. Seek discomfort.'
  },
  {
    type: 'discussion',
    title: 'Quizzing, Fairness &amp; Competition',
    questions: [
      { num: 1, text: 'Imagine two pupils revising the same topic for the same length of time — one re-reads notes, one uses AI-generated quizzes with error explanations. Is it fair that the second will likely score significantly higher in the exam? Why or why not?' },
      { num: 2, text: 'AI can generate infinite variations of the same question — some easy, some impossibly hard. What responsibility does the pupil have to choose the right difficulty? Could AI quizzing make you overconfident if you only set easy questions?' },
      { num: 3, text: 'Some schools block AI tools. If the evidence says AI quizzing beats re-reading, what should those schools do instead — and is there a version of AI quizzing they could still allow?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Why is testing yourself with AI-generated questions more effective than re-reading your notes?',
    options: [
      'AI questions are always identical to real exam questions',
      'Re-reading uses more time so testing is more efficient',
      'The effort of retrieving information from memory strengthens it — passive reading doesn\'t',
      'AI quizzes are marked automatically, saving time'
    ],
    correct: 2,
    explanation: 'Retrieval practice (the testing effect) works because the effort of struggling to remember something strengthens the memory trace. Re-reading is passive — you recognise information without having to retrieve it, which creates an illusion of fluency. Getting a question wrong and learning the right answer is especially powerful for long-term retention — this is called error-driven learning.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🧪', label: 'Testing beats re-reading', text: 'ranked #1 technique in Dunlosky\'s massive evidence review — backed by 50+ years of studies' },
      { icon: '🤖', label: 'AI = unlimited practice tests', text: 'on any topic, any format, any difficulty, any time — what used to cost £40/hour' },
      { icon: '📋', label: 'Questions first, answers after', text: 'the generation effect — try before you check, always' },
      { icon: '❌', label: 'Wrong answers teach most', text: 'ask AI to explain why each wrong option is wrong — that\'s the learning' },
      { icon: '📆', label: 'Space and interleave', text: 'three short sessions across a week > one long cram — every time' }
    ]
  }
];

SLIDES_GCSE[110] = [
  {
    type: 'hook',
    title: 'Exam Technique with AI',
    body: 'In 2024, Ofqual confirmed that across GCSEs, two candidates with identical subject knowledge can finish up to two whole grades apart purely on the strength of their exam technique — structure, timing, command-word discipline and assessment objective coverage. AQA\'s own 2023 chief examiner reports for GCSE English Literature and History repeatedly flag the same problem: candidates who "knew the content" but lost marks because they never addressed AO2 analysis, ignored the command word, or ran out of time on the final question. Large language models like ChatGPT-4o and Claude 3.5 Sonnet can now be prompted to behave as subject-specific examiners and produce structured feedback on an essay plan in under 30 seconds — something a private A-grade tutor would charge £40–£60 an hour for. UK platforms like BBC Bitesize, Century Tech and Sparx Maths have all integrated AI feedback into revision tools used by millions of pupils since 2023.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">2 grades</span><span class="sl">gap from technique alone at the same knowledge level (Ofqual, 2024)</span></div><div class="hook-stat-mini"><span class="sv">£40–60</span><span class="sl">typical hourly rate for 1-to-1 exam technique coaching</span></div><div class="hook-stat-mini"><span class="sv">30 sec</span><span class="sl">for a well-prompted AI to critique an essay plan like an examiner</span></div></div>',
    callout: 'Most marks are lost on structure, timing and missed command words — not on total lack of knowledge. This is exactly where AI, used well, can lift a grade.',
    sources: [
      { label: 'AQA — GCSE chief examiner reports (Subject results &amp; reports)', url: 'https://www.aqa.org.uk/exams-administration/results-days' },
      { label: 'Ofqual — Official Statistics on GCSE outcomes and grading', url: 'https://www.gov.uk/government/organisations/ofqual' }
    ]
  },
  {
    type: 'concept',
    title: 'Assessment Objectives — the Secret Mark Scheme',
    body: 'Every GCSE is split into numbered Assessment Objectives (AOs). These are the categories examiners actually tick. Most pupils never read them. Knowing them — and training AI to mark against them — is the single biggest grade-booster available to you in 2026.',
    bullets: [
      { term: 'AO1 — Knowledge / Understanding', def: 'Recall and demonstrate. "State what X is." Low-hanging marks — usually the easiest to secure, and where examiners expect spec-specific terminology.' },
      { term: 'AO2 — Apply / Analyse', def: 'Use the knowledge on a specific question, text or scenario. AQA GCSE English Literature chief examiner 2023 named AO2 as the single biggest lost-mark area nationally.' },
      { term: 'AO3 — Evaluate / Contextualise', def: 'Weigh up strengths, weaknesses, context, alternatives. This is where grade-7-plus answers live. Edexcel GCSE History Paper 2 gives almost half its marks here.' },
      { term: 'Command words matter', def: 'Describe, Explain, Compare, Analyse, Evaluate each map to a different AO. Getting the command word wrong can cap your mark at the bottom AO, however brilliant the prose.' },
      { term: 'AI prompt for AO coverage', def: '"Rate this essay plan against AQA GCSE History Paper 2 AO1, AO2, AO3 separately out of the marks each is worth. Tell me which AO is weakest and give me one specific sentence that would lift it."' }
    ],
    callout: 'Download your exam board\'s specification PDF (AQA, Edexcel, OCR, WJEC) and find the AO weightings for each paper. Paste them directly into the AI prompt. This is how you turn a generic chatbot into a subject-specific examiner.',
    sources: [
      { label: 'Pearson Edexcel — GCSE specifications (AO weightings per paper)', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses.html' }
    ]
  },
  {
    type: 'concept',
    title: 'Planning First, Writing Second',
    body: 'Chief examiner reports from AQA, Edexcel and OCR repeat the same advice every summer: candidates who spend 3–5 minutes planning an essay outscore those who start writing immediately, even when the planners end up with fewer words on the page. AI is at its absolute best not on the final essay, but on the plan you draft in 3 minutes before writing.',
    bullets: [
      'Draft a 4–6 bullet plan yourself FIRST. This is non-negotiable — skip it and you\'re borrowing, not learning.',
      'Paste the exact exam question AND your plan into AI. Never just the plan on its own — AI cannot critique against a target it cannot see.',
      'Ask for a structured critique: "Which bullets address the command word? Which AO is under-served? Which bullet is weakest and why?"',
      'Ask for ONE high-impact upgrade per bullet — not a rewrite. Rewrites teach nothing; targeted fixes teach everything.',
      'Re-plan from scratch on paper. This is the acid test: if you still need the AI\'s words to hold the plan together, you don\'t yet own it.',
      'Time yourself. A Year 11 pupil should be able to plan a 16-mark GCSE History question in 4 minutes cold by May.'
    ],
    callout: 'PEEL, PETAL, SEC, IDEAL — every subject has a structural mnemonic. Name yours in the AI prompt. "Check this plan for PEEL structure on a GCSE English Language Q5 response" beats any vague "is this good?" by a visible margin.'
  },
  {
    type: 'concept',
    title: 'Model Answers — Read, Don&#39;t Copy',
    body: 'Asking AI to generate a grade-9 model answer for an exam question is one of the most powerful revision moves available — and also the single most misused feature. Used well it is a master class in structure. Used badly it is a shortcut to brittle, surface-level knowledge.',
    bullets: [
      { term: 'The right way — skeleton first', def: 'Prompt: "Give me the STRUCTURE of a Grade 9 answer (bullet points of what each paragraph would contain), not the prose." You get the scaffold; you supply the flesh.' },
      { term: 'The right way — compare &amp; contrast', def: 'Write your own answer first. THEN ask AI for its version. Compare side-by-side. Where does the AI version pick up marks yours missed? Why?' },
      { term: 'The wrong way — read, nod, close', def: 'Reading a model answer without producing your own is passive revision. Karpicke &amp; Blunt (Science, 2011) showed this is one of the weakest revision strategies measurable.' },
      { term: 'The wrong way — memorise and regurgitate', def: 'Examiners read thousands of scripts. AI-style phrasing ("it is important to note…", "furthermore, it can be argued…") is now instantly recognisable to JCQ-trained markers.' },
      { term: 'Prompt that works', def: '"Act as an AQA GCSE English Literature examiner. For the question &#39;How does Dickens present Scrooge\'s transformation?&#39; — give me the SKELETON of a Grade 9 answer: 5 paragraph topic sentences, one quote per paragraph, and the AO each paragraph targets. Do not write the full prose."' }
    ],
    callout: 'A model answer is a map, not a script. Your job is to walk the territory. If you can reproduce the map from memory 24 hours later, you\'ve understood it. If you can\'t, you\'ve only watched.'
  },
  {
    type: 'scenario',
    title: 'The Rewritten Essay',
    situation: 'Kofi, a Year 11 pupil targeting grade 6 in AQA GCSE English Literature, writes a heartfelt analytical response to "How does Priestley present Mrs Birling?" for homework. Unhappy with it, he pastes his draft into ChatGPT with the prompt "make this sound more sophisticated and higher-grade." The AI returns a polished essay with advanced vocabulary, varied sentence structure, and fluent transitions. Kofi submits the AI-polished version. It comes back graded 5, with a comment: "This does not sound like your previous work. Clumsy points now phrased more fluently. AO2 analysis has actually weakened — the voice feels borrowed and the argument is less focused."',
    question: 'What exactly went wrong, and what should Kofi do next time?',
    choices: [
      { text: 'The teacher is wrong — the rewritten version was objectively better written, so it should have scored higher.', outcome: 'Marks in GCSE English Literature are awarded against Assessment Objectives (AO1 knowledge, AO2 analysis, AO3 context), not on how "sophisticated" the prose sounds. Polished vocabulary over weak analysis actually makes a script LESS distinguishable in a sea of scripts. The teacher is pointing at real data: the AO2 analysis weakened.' },
      { text: 'Next time, keep the original argument and voice. Use AI only to critique the plan BEFORE writing, and to point at AO2 gaps AFTER — never to rewrite the prose itself.', outcome: 'This is exactly right. AI is strongest at diagnosis and weakest at substitution. A prompt like "Which sentence in my analysis is the weakest AO2 point and why?" builds skill. A prompt like "rewrite to sound smarter" borrows a voice Kofi cannot reproduce in an exam hall — where no AI is available.' },
      { text: 'Kofi should use AI to rewrite every essay, then memorise the AI version so he can reproduce it under exam conditions.', outcome: 'Two problems. First, exam questions vary — you cannot memorise responses to questions that have not been set. Second, AQA and JCQ 2024 guidance flags AI-style phrasing as a known pattern; examiners have been briefed. And memorising a borrowed voice is not learning — it is the definition of over-reliance covered in Lesson 111.' }
    ]
  },
  {
    type: 'activity',
    title: 'Build an AI Examiner',
    task: 'Use the notes box to design a single, reusable AI-examiner prompt you can use for any essay plan in one subject this term.',
    steps: [
      'Pick one subject and one paper (e.g. AQA GCSE History Paper 2: Germany 1890–1945). Find the AO weightings in the spec.',
      'Write the Persona line: "Act as an experienced [board] GCSE [subject] examiner marking [paper]. You use the official mark scheme and the AO weightings [paste them]."',
      'Write the Task line: "I will paste the question and my plan. Critique it against each AO separately, flag the weakest AO, and give me ONE sentence per AO I could add to lift it."',
      'Write the Format line: three headed sections (AO1, AO2, AO3), one paragraph each, no more than 200 words total.',
      'Write the Context line: your year, target grade, weakest sub-skill, and the specific command word in the question.',
      'Extension: run your prompt on a real plan tonight. Then tomorrow, re-plan the same question from scratch without the AI. Compare — what stuck?'
    ],
    callout: 'Save the final prompt in your notes app. A reusable examiner-prompt, tuned once, pays dividends across every essay you write this year.'
  },
  {
    type: 'discussion',
    title: 'Whose Voice Is It?',
    questions: [
      { num: 1, text: 'If AI can critique a plan against AQA\'s AOs as accurately as a teacher, is there still value in your teacher reading it first — and what exactly is that value?' },
      { num: 2, text: 'A pupil whose parents pay for a 1-to-1 exam technique tutor has always had this kind of feedback on demand. Does free AI examiner feedback level the playing field, widen the gap (digital access), or something more complex?' },
      { num: 3, text: 'Priestley\'s Inspector says "we are members of one body." If every pupil in the country uses AI to polish answers, do exam results still measure individual ability — or collective access to tools? What should Ofqual do about that?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which AI-for-exam-technique move is most likely to lift a grade — and is safest under JCQ 2024 guidance?',
    options: [
      'Paste the exam question into AI and submit the AI\'s answer as your own',
      'Ask AI to rewrite your whole essay so it sounds more sophisticated',
      'Draft a plan yourself, then ask AI to critique it against the specific AO weightings for your paper',
      'Memorise an AI-generated model answer to reproduce in the exam'
    ],
    correct: 2,
    explanation: 'Drafting the plan yourself protects your own voice and your own thinking — the things the exam actually measures. Asking AI to critique against specific AOs (AO1/AO2/AO3) and mark weightings turns a generic chatbot into a subject-aligned examiner, which is exactly the feedback that lifts grades. Options A and B cross the JCQ 2024 line on submitted AI-generated work; option D produces brittle, instantly-recognisable exam prose that examiners have been briefed to flag.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎯', label: 'AOs are the real mark scheme', text: 'find them in the spec PDF and paste them into the AI prompt — subject-tuned feedback, not generic advice' },
      { icon: '📝', label: 'Plan yourself, critique with AI', text: 'the plan is yours; the critique is the AI\'s. Never reverse it.' },
      { icon: '🏗️', label: 'Skeleton over script', text: 'ask for structure of a model answer, never the full prose — maps teach, scripts don\'t' },
      { icon: '🗣️', label: 'Protect your voice', text: 'AI-polished prose is the fastest way to lose the marks your voice was earning' },
      { icon: '⏱️', label: 'Technique is a grade or two', text: 'Ofqual 2024: same knowledge, two grades apart — purely on technique. This is the closable gap.' }
    ]
  }
];

SLIDES_GCSE[111] = [
  {
    type: 'hook',
    title: 'Avoiding the Traps',
    body: 'In June 2023, New York lawyer Steven Schwartz submitted a 10-page court filing citing six judicial precedents. All six were fabricated by ChatGPT, complete with fake judges, fake case numbers and fake reasoning. Federal judge P. Kevin Castel fined Schwartz $5,000, and the case has since become the textbook example of AI hallucination. A year later, in 2024, JCQ (the UK Joint Council for Qualifications that oversees all major exam boards) issued updated guidance warning that undisclosed AI use in coursework is now classed as malpractice that can void a qualification. Turnitin\'s own 2024 technical report acknowledged its AI-detection model produces false-positive rates around 1% on human-written work — which, at the scale of UK GCSEs, means tens of thousands of innocent pupils could be flagged. And a peer-reviewed 2025 study by Dr Michael Gerlich (SBS Swiss Business School) found a statistically significant negative correlation between frequent AI tool use and performance on critical-thinking assessments, especially among 17–25 year-olds.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">6</span><span class="sl">fabricated case citations in the Schwartz v. Avianca ChatGPT filing (2023)</span></div><div class="hook-stat-mini"><span class="sv">~1%</span><span class="sl">Turnitin&#39;s own reported AI-detection false-positive rate (2024)</span></div><div class="hook-stat-mini"><span class="sv">↓</span><span class="sl">measurable decline in critical thinking linked to heavy AI use (Gerlich, 2025)</span></div></div>',
    callout: 'Three named traps catch GCSE pupils out — plagiarism, hallucinations, and over-reliance. Every one is avoidable, but only if you know exactly what it looks like.',
    sources: [
      { label: 'JCQ (2024) — AI Use in Assessments: Protecting the Integrity of Qualifications', url: 'https://www.jcq.org.uk/exams-office/malpractice/artificial-intelligence/' },
      { label: 'Gerlich, M. (2025) — AI Tools and the Decline of Critical Thinking (Societies, MDPI)', url: 'https://www.mdpi.com/2075-4698/15/1/6' }
    ]
  },
  {
    type: 'concept',
    title: 'Trap 1 — Plagiarism &amp; the JCQ Line',
    body: 'The 2024 JCQ guidance made something concrete that had been fuzzy before: if any part of the work submitted for a GCSE or A-Level came from AI and you did not declare it, you have committed malpractice. The penalty ladder goes from losing marks on the component, to losing the whole qualification, to being barred from future exams. UK universities moved first: in October 2023, the University of Swansea publicly confirmed multiple students had been investigated for undeclared ChatGPT use, with several receiving zero marks.',
    bullets: [
      { term: 'Allowed (usually)', def: 'Using AI to explain a concept, quiz yourself, or get feedback on your OWN draft — provided you don\'t paste the output into your submission. Most UK schools\' 2024 policies permit this.' },
      { term: 'Not allowed', def: 'Submitting AI-generated prose, AI-generated analysis, or AI-invented quotes/sources as your own work. Classed as plagiarism under JCQ 2024.' },
      { term: 'Must be declared', def: 'In Non-Exam Assessment (NEA) and coursework, JCQ requires pupils to acknowledge any AI use — including the tool name, the prompts used, and which sections were affected.' },
      { term: 'Detection is imperfect', def: 'Turnitin\'s AI-detection flags 98%+ AI-written content but also produces ~1% false positives on human prose. UK schools are instructed NOT to rely on detector output as sole evidence.' },
      { term: 'The verbal test', def: 'Exam boards will ask you to explain your own work aloud. If you cannot explain, paragraph by paragraph, what you wrote and why — you cannot defend it as yours.' },
      { term: 'Real UK case', def: 'Swansea University (2023) and several Russell Group institutions publicly investigated undeclared ChatGPT use in 2023–24, with sanctions including zero marks and referral to academic-integrity panels.' }
    ],
    callout: 'Practical rule of thumb: if you couldn&#39;t sit opposite your teacher and reproduce the key argument of your work in your own spoken words, you should not be submitting it as yours.',
    sources: [
      { label: 'Turnitin — AI Writing Detection accuracy &amp; false positive statement (2023–24)', url: 'https://www.turnitin.com/blog/understanding-false-positives-within-our-ai-writing-detection-capabilities' }
    ]
  },
  {
    type: 'concept',
    title: 'Trap 2 — Hallucinations That Sound Real',
    body: 'A hallucination is when an AI confidently produces false information that looks plausible. It is not a bug — it is a direct consequence of how large language models work: they predict the next most-likely token, not the next most-true token. The 2023 Schwartz lawyer case is famous; but a 2024 study in the BMJ found that GPT-4, prompted for real medical research citations, fabricated around one in five. Nature reported similar rates on scientific paper citations.',
    bullets: [
      'Fabricated citations: fake paper titles attached to real authors, in real-sounding journals, with plausible DOIs. The single most common hallucination type in academic work.',
      'Confident wrong dates: AI will state "1919" for something that happened in 1921 with zero hedging. Never trust a date or statistic without verification.',
      'Invented quotes: made-up lines attributed to real authors. Priestley, Dickens and Shakespeare are all frequently misquoted by LLMs.',
      'Wrong specification content: AI does NOT know whether "electron configuration" is in AQA GCSE Chemistry Paper 1 or Paper 2. It will guess confidently.',
      'Safer tools, not safe tools: retrieval-augmented tools like NotebookLM (grounded in sources you upload) and Perplexity (cited answers) reduce hallucinations but do not eliminate them.',
      'The fix: for any fact, date, citation, quote or statistic, cross-check against your textbook, the exam board\'s specification PDF, or a named reputable source.'
    ],
    callout: 'Schwartz v. Avianca (2023): six fabricated cases, one $5,000 fine, global news coverage. The lawyer had asked ChatGPT "are you sure these cases are real?" — ChatGPT said yes. It was still completely wrong.',
    sources: [
      { label: 'Mata v. Avianca — U.S. District Court sanction order, Judge P. Kevin Castel (2023)', url: 'https://www.courtlistener.com/docket/63107798/mata-v-avianca-inc/' }
    ]
  },
  {
    type: 'concept',
    title: 'Trap 3 — Over-reliance &amp; Cognitive Offloading',
    body: 'This is the trap that does not trigger alarms. No detector flags it, no examiner catches it at submission — it catches you in the exam hall, when you realise you can produce decent work only WITH AI. Cognitive scientists call it "cognitive offloading": the habit of outsourcing thinking so thoroughly that the underlying skill never gets built.',
    bullets: [
      { term: 'Named research', def: 'Gerlich (2025, Societies/MDPI) surveyed 666 participants and found frequent AI use correlated with lower critical-thinking scores, mediated by cognitive offloading — strongest in under-25s.' },
      { term: 'EEG evidence', def: 'A 2025 MIT Media Lab preprint used EEG scans to show pupils who used ChatGPT to write essays had lower brain-connectivity patterns and poorer recall of their own writing weeks later, compared to a no-AI control group.' },
      { term: 'The "I get it" illusion', def: 'Reading an AI explanation feels like understanding. Dunlosky et al. (2013) ranked passive reading near the bottom of revision techniques. Recognition is not recall.' },
      { term: 'The exam-hall test', def: 'There is no AI in the exam hall. Every skill you built only with AI assistance evaporates the moment the invigilator says "you may begin."' },
      { term: 'The fix — effort first', def: 'Always draft, attempt or explain BEFORE asking AI. Use AI to critique, quiz and diagnose — never to substitute. This mirrors the protocol in Lessons 108 and 109.' },
      { term: 'JCQ 2024 concern', def: 'JCQ guidance explicitly warns centres about "skills erosion" from pupils completing practice work with AI — not just the submission risk, but the learning risk.' }
    ],
    callout: 'Plagiarism catches you. Hallucinations embarrass you. Over-reliance quietly damages the muscle you sat down to build — and only shows up on results day.',
    sources: [
      { label: 'Kosmyna, N. et al. (MIT Media Lab, 2025) — Your Brain on ChatGPT (EEG study preprint)', url: 'https://www.media.mit.edu/projects/your-brain-on-chatgpt/overview/' }
    ]
  },
  {
    type: 'scenario',
    title: 'Flagged by the Detector',
    situation: 'Amara, a Year 11 pupil, submits a 1,200-word GCSE English Language coursework piece on creative writing. Her teacher runs it through Turnitin\'s AI-writing detector, which reports "85% likely AI-generated." Amara insists she wrote every word herself, but admits she used ChatGPT to "brainstorm ideas" and "tighten up a messy paragraph in the middle." Her school\'s policy, following JCQ 2024, requires pupils to declare any AI use. Amara did not declare it. She now has a meeting with the Head of English tomorrow morning.',
    question: 'What is the most honest and least damaging response Amara can prepare?',
    choices: [
      { text: 'Deny using AI at all — Turnitin\'s detector has a known false-positive rate around 1%, so a denial is plausible.', outcome: 'Two problems. Amara already used AI, so the denial is a direct lie — which, if discovered, typically escalates the sanction from "undeclared use" to "malpractice with intent to deceive." Secondly, teachers rarely rely on detector output alone — they also know Amara\'s previous voice. The mismatch is what triggered suspicion, not just the detector score.' },
      { text: 'Be fully transparent: explain exactly what she used AI for, show her brainstorming notes and drafts, acknowledge the undeclared use, and ask what the next step is under the school\'s JCQ-aligned policy.', outcome: 'This is the right move. JCQ 2024 guidance is explicit that disclosed, limited use is usually managed at centre level (a warning, a rewrite, a declaration), whereas undisclosed use is malpractice with much higher penalties. Showing her draft history demonstrates the thinking was hers. Honesty converts a potential malpractice case into a process lesson — and Amara keeps her qualification.' },
      { text: 'Argue the detector is unreliable and demand that Amara&#39;s work be re-marked without reference to it.', outcome: 'The detector is genuinely imperfect, but that is not the only evidence. The teacher\'s knowledge of Amara\'s usual voice, the declaration-policy breach, and any stylistic anomalies all matter. Attacking the tool without addressing the underlying undeclared-use issue does not defend Amara — it evades the actual question being asked tomorrow.' }
    ]
  },
  {
    type: 'activity',
    title: 'Audit Your Last AI Session',
    task: 'In the notes box, audit the most recent time you used AI for schoolwork. Be honest — this is diagnostic, not graded.',
    steps: [
      'Write down the exact prompt(s) you used and what AI returned. Paste or summarise if long.',
      'Colour-code: which parts of your final submitted work were YOUR original thinking (green), which were AI ideas you re-worded (amber), which were pasted more or less verbatim (red)?',
      'For any factual claim (name, date, statistic, quote, source) the AI produced — did you verify it against the exam board spec, textbook or a reputable site? Tick or cross each.',
      'Ask the over-reliance question: if the task came up tomorrow under exam conditions with NO AI, could you produce a comparable answer? Score yourself 1–5.',
      'Name the trap you were closest to: plagiarism / hallucination / over-reliance — and write one sentence on why.',
      'Extension: write the single behaviour change you will make next time, in one sentence. Pin it above your desk.'
    ],
    callout: 'Red blocks in your colour-code are the plagiarism risk. Unverified facts are the hallucination risk. A low score on step 4 is the over-reliance risk. One audit typically catches all three.'
  },
  {
    type: 'discussion',
    title: 'Fairness, Detection &amp; Responsibility',
    questions: [
      { num: 1, text: 'Turnitin\'s ~1% false-positive rate means that in a GCSE cohort of ~600,000 pupils, thousands of innocent candidates could be flagged. Is it ever ethical to use AI-detection as evidence against a pupil? If yes, under what safeguards?' },
      { num: 2, text: 'The Gerlich 2025 study found the strongest link between AI over-use and critical-thinking decline among under-25s — exactly your age group. Does that give you a personal responsibility, a school responsibility, a government responsibility, or all three? Who acts first?' },
      { num: 3, text: 'A pupil with dyslexia uses AI to smooth sentence structure; another pupil uses AI to write entire paragraphs. Both are undeclared. Should JCQ policy treat them identically, or should "reasonable adjustment" carve out different rules — and who decides the line?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which of the following is the safest AI use for a GCSE coursework submission, under JCQ 2024 guidance?',
    options: [
      'Writing your draft yourself, then asking AI to "make it sound more sophisticated" and submitting the AI version',
      'Pasting the coursework question and submitting the first AI answer — fast and efficient',
      'Using AI to quiz yourself on the topic and to suggest improvements to your OWN draft, declaring any use in the coursework declaration',
      'Asking AI to invent three scholarly citations to strengthen your argument — the names sound impressive'
    ],
    correct: 2,
    explanation: 'JCQ 2024 permits limited AI use for learning support provided it is declared and the submitted work is substantively the pupil\'s own. Option A substitutes the AI\'s voice for yours (polishing crosses the authorship line) and is undeclared. Option B is direct plagiarism. Option D compounds plagiarism with hallucination risk — fabricated citations are the single most common LLM hallucination type (Schwartz v. Avianca 2023 is the textbook case). Option C is the honest, safe protocol.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚖️', label: 'Plagiarism line is JCQ-defined', text: 'undeclared AI use in coursework is malpractice under 2024 JCQ guidance' },
      { icon: '🎭', label: 'Hallucinations sound confident', text: 'dates, citations and quotes are highest-risk — verify every one' },
      { icon: '🧠', label: 'Over-reliance is invisible', text: 'Gerlich 2025 &amp; MIT 2025 show measurable skill and cognition decline — exam hall is where it shows' },
      { icon: '🔍', label: 'Detectors are imperfect', text: 'Turnitin\'s own ~1% false-positive rate means detectors are never the sole evidence' },
      { icon: '✅', label: 'Declare, verify, own it', text: 'three habits that keep you safe on all three traps — every time' }
    ]
  }
];

SLIDES_GCSE[112] = [
  {
    type: 'hook',
    title: 'Your Revision Toolkit',
    body: 'You now know how to prompt, summarise, quiz, plan essays and spot the traps. The final question is: how do you stitch it all into a weekly routine you can actually sustain through five months of GCSE revision? Research published by the Education Endowment Foundation (EEF, 2024) found that the single biggest predictor of mock-to-real grade improvement was not intelligence, time spent, or school — it was <em>consistency of technique</em>. Pupils who used three evidence-based methods (retrieval practice, spacing, interleaving) daily gained an average of 0.6 grades. Pupils who relied on re-reading and highlighting gained 0.05. Stanford\'s 2024 AI Index reported that 71% of UK pupils aged 13–18 now use AI for schoolwork at least weekly — but most use it wrong. This lesson gives you a complete weekly toolkit that combines the evidence-based methods WITH AI, in the right places.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">0.6</span><span class="sl">average GCSE grades gained by evidence-based revisers (EEF, 2024)</span></div><div class="hook-stat-mini"><span class="sv">71%</span><span class="sl">of UK 13–18s now use AI weekly for school (Stanford AI Index 2024)</span></div><div class="hook-stat-mini"><span class="sv">6–8</span><span class="sl">weeks — how long a good habit takes to stick (Lally et al. 2010)</span></div></div>',
    callout: 'The key rule: AI helps you BEFORE you try (to prepare) and AFTER you try (to feedback) — never INSTEAD of trying. The thinking is still yours.',
    sources: [
      { label: 'Education Endowment Foundation — Metacognition &amp; self-regulated learning (guidance report)', url: 'https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition' },
      { label: 'Stanford HAI — 2024 AI Index Report (youth AI use statistics)', url: 'https://aiindex.stanford.edu/report/' }
    ]
  },
  {
    type: 'concept',
    title: 'A 4-Step AI-Assisted Revision Workflow',
    body: 'The workflow below is the loop a good private tutor would guide you through — now accessible on demand, at home, at any hour, for free. Every step taps a peer-reviewed learning-science principle. Skip any one and you lose most of the benefit.',
    bullets: [
      { term: '1. Understand', def: 'Use AI to explain concepts you don\'t yet grasp: "Act as a GCSE Biology tutor. Explain active transport to a Year 11 AQA pupil who struggles with the energy step, using one real-world analogy. UK English." Read, then re-explain aloud without looking.' },
      { term: '2. Practise (retrieval)', def: 'Generate exam-style questions on the topic. Attempt each one from memory BEFORE checking. The effort is the learning — this is the generation effect (Slamecka &amp; Graf, 1978).' },
      { term: '3. Feedback', def: 'Paste your answer in and ask AI to mark it against the board\'s mark scheme — e.g. "Mark this 6-mark AQA answer. List what would and wouldn\'t score. Flag any spec keywords missing."' },
      { term: '4. Consolidate', def: 'Write your own summary from memory. Compare with the original. Weak spots go back to step 1. This is the Feynman Technique — distilled in 1960s Caltech lectures, evidence-based ever since.' },
      { term: 'The spacing overlay', def: 'Run the whole loop, then again 24 hours later (shorter), then again 5–7 days later (shorter still). This is the gold-standard retention curve, first measured by Ebbinghaus in 1885.' }
    ],
    callout: 'This cycle mirrors what tutors earning £40–80/hour in North London actually do with pupils. AI just makes it universally available. Use it.',
    sources: [
      { label: 'Dunlosky et al. (2013) — Improving students\' learning with effective learning techniques (Psych Sci Public Interest)', url: 'https://journals.sagepub.com/doi/10.1177/1529100612453266' }
    ]
  },
  {
    type: 'concept',
    title: 'Your Weekly Routine — 5 Days, ~20 Min/Day',
    body: 'Here is a concrete, tested weekly schedule that uses the loop above across five topics, with spacing and interleaving built in. It takes 20 minutes a day for 5 days — less total time than most pupils spend re-reading on a single Saturday, with dramatically better outcomes.',
    bullets: [
      { term: 'Mon — Topic A (full loop)', def: 'Understand → Practise → Feedback → Consolidate on one specific sub-topic (e.g. waves → refraction). 20 min.' },
      { term: 'Tue — Topic B (full loop)', def: 'Different sub-topic (e.g. required practical 8). This interleaving forces recall over recognition.' },
      { term: 'Wed — Topics A &amp; B mixed quiz', def: 'AI generates a 10-question quiz mixing Mon and Tue topics. Spacing + interleaving in one session. The struggle feels bad — it is working.' },
      { term: 'Thu — Topic C (full loop)', def: 'New sub-topic — but start the session with 3 quick retrieval questions on A and B. Short warm-up, big retention gains.' },
      { term: 'Fri — 20-min mock paper section', def: 'Have AI produce a short exam-style paper section mixing all three topics. Do it under timed conditions. Then AI marks it with mark-scheme references.' },
      { term: 'Weekend — 10-min flashback', def: 'Use any flashcard app (Anki, Quizlet) or AI to re-test the week\'s topics briefly. This is where long-term retention locks in.' }
    ],
    callout: 'Two hours a week, distributed, beats six hours crammed the night before — every time. Not opinion. Measurable fact.'
  },
  {
    type: 'concept',
    title: 'Tool Stack — What to Use When',
    body: 'AI is not one tool. The best routines use 2–3 complementary tools, each for what it\'s best at. Here is a recommended stack — all either free for pupils or have generous free tiers in 2024–2025.',
    bullets: [
      { term: 'ChatGPT / Claude / Gemini', def: 'Best for: prompted explanations, essay feedback, scenario walk-throughs. Free tiers all work. ChatGPT and Claude both passed UK bar-exam-equivalent questions in 2024.' },
      { term: 'Google NotebookLM', def: 'Best for: uploading your textbook chapter or teacher\'s notes and generating a study guide, audio "podcast" summary and spec-aligned quiz. Free as of 2024.' },
      { term: 'Quizlet AI / Anki', def: 'Best for: spaced-repetition flashcards you type yourself (the typing is part of the learning). Anki is free and the most evidence-based flashcard app ever built — used by medical students worldwide.' },
      { term: 'Khan Academy Khanmigo', def: 'Best for: Maths / Sciences problem walk-throughs. Scaffolds rather than gives answers. Based on a 2024 Harvard RCT showing genuine learning gains when used this way.' },
      { term: 'BBC Bitesize + AI', def: 'Best combo: revise from Bitesize for the official UK-curriculum content, then use an AI chatbot to quiz yourself on what you just read. Human-verified content + AI drill.' }
    ],
    callout: 'Pick TWO tools for now — not all five. Adding tools beyond that usually produces switching friction, not better revision.',
    sources: [
      { label: 'Kestin et al. (2024) — Harvard RCT on AI tutoring and learning gains', url: 'https://www.pnas.org/doi/10.1073/pnas.2422458121' },
      { label: 'Google — NotebookLM launch and study-guide features', url: 'https://blog.google/technology/ai/notebooklm-audio-overviews/' }
    ]
  },
  {
    type: 'concept',
    title: 'Knowing When NOT to Use AI',
    body: 'A professional pilot knows when to let autopilot fly — and when to take the controls. A professional student knows the same. Here are the specific situations where AI will actively make your revision worse, not better.',
    bullets: [
      'When you haven\'t tried the problem yourself yet — the retrieval attempt is the point. Skipping it skips the learning.',
      'When the task is building a skill you will be examined on without AI (writing, problem-solving, analysis, unseen comprehension) — AI-generated output doesn\'t train your brain for the room without wifi.',
      'When you\'re about to submit the output as your own work. That\'s plagiarism under JCQ 2024 rules and you learn nothing.',
      'When you\'re too tired to evaluate what it says critically — fatigued brains accept hallucinations as fact.',
      'When the subject rewards struggle — some understanding only comes from wrestling with hard material alone (proof-based Maths, unseen poetry, creative writing).',
      'When you\'re using AI to avoid the topic you most dread. That dread is a signal — address it directly, don\'t let AI mask it.'
    ],
    callout: 'Cognitive offloading research (Gerlich 2025; Michigan Law 2024) shows that routine AI use on tasks you need to own can measurably reduce your own critical-thinking performance. Use AI — don\'t outsource to it.'
  },
  {
    type: 'scenario',
    title: 'The Pre-Mock Crunch',
    situation: 'It\'s Sunday evening. Your Science mock is Thursday morning. You have roughly 4 hours across three evenings to revise 8 topics from Biology Paper 1. You\'ve been re-reading your revision guide for two weeks and your last practice paper scored 48%. You feel overwhelmed and are tempted to just start at page 1 and push through.',
    question: 'Using the toolkit from this unit, what\'s the highest-value plan?',
    choices: [
      { text: 'Re-read the revision guide cover to cover again — that\'s what it\'s for.', outcome: 'This is what you\'ve been doing — and it produced 48%. Dunlosky\'s evidence review ranks re-reading near the bottom of revision techniques. You\'ll burn your 4 hours and your mock score will barely move.' },
      { text: 'Use AI to diagnose your weakest 3 topics from your last paper, then run the Understand → Practise → Feedback loop on just those, spaced across Mon/Tue/Wed with an interleaved quiz on Wed evening.', outcome: 'This is the evidence-based move. Diagnosis first means you spend your limited time on the highest-leverage material. Looping the three weakest topics with spacing will deliver the largest mock-score gain possible in 4 hours. Expected movement: 10–15 percentage points on those topics.' },
      { text: 'Ask ChatGPT to write you a complete set of perfect model answers and memorise them word-for-word.', outcome: 'Dangerous on three levels: (1) AI will confidently hallucinate mark-scheme details; (2) memorising unexamined answers fails the moment the wording shifts; (3) if examiners notice AI voice patterns in your answers, JCQ 2024 guidance gives them grounds to flag it. Don\'t do this.' }
    ]
  },
  {
    type: 'activity',
    title: 'Build Your Revision Plan',
    task: 'Pick one subject you\'re currently revising. Design a complete 5-day AI-assisted plan — then put it in your calendar right now.',
    steps: [
      'Topic list: name the 3 sub-topics you\'re weakest at (past paper / mock feedback is your best guide)',
      'Monday prompt: draft the exact Understand-step prompt you\'ll use for Topic A — include exam board, level, and the specific confusion',
      'Tuesday prompt: draft the Practise-step prompt for Topic B — request 6 questions, mark scheme separate',
      'Wednesday quiz prompt: ask AI to generate a 10-question mixed quiz spanning Topics A and B — interleaving is intentional',
      'Thursday prompt: new topic C with a 3-question A/B warm-up at the start',
      'Friday mock prompt: draft the "give me a 20-minute mini-paper section on A, B, and C" prompt and plan to do it under timed conditions',
      'Put each session in your calendar NOW, with a specific 20-minute slot — plans without calendar slots don\'t happen'
    ],
    callout: 'Extension: after your next real mock, repeat the same cycle BUT pick new weakest topics from the mock feedback. The pattern stays; the content adapts. This is your toolkit for every exam for the rest of your school life.'
  },
  {
    type: 'discussion',
    title: 'Toolkit, Ownership &amp; Adulthood',
    questions: [
      { num: 1, text: 'If AI revision tools produce measurable grade gains, but are used unevenly across schools (some ban them, some teach them), what responsibilities does that place on the DfE, on schools, and on you personally? Who should level the field?' },
      { num: 2, text: 'You\'ve been taught a complete AI-assisted toolkit in this unit. How do you know when you\'re using it well versus when you\'re using it as procrastination dressed up as revision? What are the warning signs?' },
      { num: 3, text: 'Imagine you\'re 25, in a graduate job, and AI tools are far more capable than today. Will the habits from THIS toolkit — retrieval, spacing, self-testing, knowing when to offload and when not — still be useful? Why or why not?' }
    ]
  },
  {
    type: 'quiz',
    question: 'When should you NOT use AI for studying?',
    options: [
      'When you want to understand something faster',
      'When you need practice questions on a topic',
      'When you\'re about to submit AI output as your own work without engaging with it',
      'When you want feedback on your essay structure'
    ],
    correct: 2,
    explanation: 'The key rule is that you must engage with and own the output. Submitting AI-generated work as your own is plagiarism under JCQ 2024 rules — and more importantly, you learn nothing from it. AI should accelerate your learning, not replace it. The other three options (explanation, quizzing, feedback) are all exactly what AI is best at.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔄', label: 'Understand → Practise → Feedback → Consolidate', text: 'the loop that mirrors expert tutoring — works for any subject, any age' },
      { icon: '📆', label: 'Space and interleave', text: '20 min/day × 5 days > 100 min crammed — measurable since Ebbinghaus in 1885' },
      { icon: '✋', label: 'Always try first', text: 'AI improves your effort — it doesn\'t replace it. The retrieval attempt IS the learning.' },
      { icon: '🚫', label: 'Know when not to use it', text: 'some skills only develop through struggle. Protect those moments.' },
      { icon: '🛠️', label: 'Stack of two', text: 'pick two complementary AI tools, not five — switching cost eats the benefit' },
      { icon: '🧑‍🎓', label: 'You are the learner', text: 'AI is the tool. That distinction matters here, at university, and at work.' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Unit 2 Recap',
    body: 'Three questions covering the core ideas of AI for study and revision.',
    questions: [
      { q: 'Which sequence describes the healthy AI study cycle?', options: ['Ask AI → copy the answer → submit it', 'Try first → ask AI for feedback or explanation → consolidate what you learn', 'Memorise AI output → repeat back in exam', 'Use AI for every question regardless of difficulty'], correct: 1, explanation: 'Effort before assistance. AI should improve your own attempt, not replace it.' },
      { q: 'An AI confidently tells you: "Oxford\'s 2022 study by Dr Mitchell found 73% of students improved focus with study apps." What should you do before quoting it?', options: ['Cite it — the specifics make it credible', 'Assume Oxford is reliable and move on', 'Independently verify — specific-sounding citations are the single most common hallucination type', 'Change the percentage to something rounder'], correct: 2, explanation: 'Specific names, universities, years and percentages are exactly what AI fabricates most convincingly. Always verify before quoting.' },
      { q: 'Which task is LEAST appropriate to offload to an AI during GCSE revision?', options: ['Generating practice questions on a topic you\'ve already studied', 'Explaining a concept in simpler terms after you\'ve attempted to understand it yourself', 'Writing a whole essay that you will submit as your own', 'Giving feedback on an essay plan you\'ve drafted'], correct: 2, explanation: 'Two reasons: it\'s plagiarism, and — more importantly — you don\'t learn anything. AI should accelerate learning, not bypass it.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Unit 2 Exit Ticket',
    prompt: 'Describe, in one sentence, the AI study habit you will keep — and the one you will deliberately stop.',
    body: 'Saved to this device only. Come back and edit it any time.'
  }
];

/* ── UNIT 3: Practical AI Skills ── */

SLIDES_GCSE[113] = [
  {
    type: 'hook',
    title: 'Prompting 101',
    body: 'Two students ask AI for help with the same task. One gets a clear, useful response. One gets a wall of generic text. The difference isn\'t which AI they used — it\'s how they asked.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">40%</span><span class="sl">better quality from students who iterate 3+ times (Wharton, 2023)</span></div><div class="hook-stat-mini"><span class="sv">3–5×</span><span class="sl">iterations expert prompt engineers use to reach a final output</span></div><div class="hook-stat-mini"><span class="sv">Worse</span><span class="sl">than no AI at all — students who accept the first AI draft</span></div></div>',
    callout: 'Prompting is a learnable skill. A well-crafted prompt consistently unlocks better results than a vague one.',
    sources: [
      { label: 'Dell\'Acqua, F. et al. (Harvard/Wharton, 2023) — "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality"', url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=64700' },
      { label: 'Mollick, E. — "Centaurs and Cyborgs on the Jagged Frontier" (Wharton, One Useful Thing, 2023)', url: 'https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged' }
    ]
  },
  {
    type: 'concept',
    title: 'Anatomy of a Great Prompt',
    body: 'OpenAI, Anthropic and Google all publish official prompting guides — and they converge on roughly the same five building blocks. Memorise these and your AI output quality changes overnight. The framework is sometimes called PTFC, sometimes CRISPE, sometimes RTF — same ingredients, different acronyms.',
    bullets: [
      { term: 'Role (Persona)', def: '"Act as a patient GCSE AQA Biology tutor" — sets the tone, vocabulary and level. Anthropic 2024 documentation shows role-setting measurably improves factuality on specialist tasks.' },
      { term: 'Task', def: '"Explain how the heart pumps blood through the four chambers" — be specific about exactly what verb (explain/compare/analyse/rewrite) and exactly what content.' },
      { term: 'Context', def: '"I\'m a Year 11 student on AQA Biology Paper 1, targeting grade 7, and I always confuse atria and ventricles" — tells AI what level to pitch at AND what to emphasise.' },
      { term: 'Format', def: '"Give me a 3-sentence overview, then 5 numbered steps (max 2 sentences each), then 3 self-test questions" — shapes how the response looks.' },
      { term: 'Constraint', def: '"Avoid medical jargon unless essential, under 250 words, UK English, use bold for key terms" — prevents the common pitfalls and keeps output focused.' }
    ],
    callout: 'You don\'t need all five every time — but the more specific you are, the more useful the output. Research at Wharton (Mollick, 2023) found iterating a prompt 3+ times produces output quality up to 40% above one-shot attempts.'
  },
  {
    type: 'concept',
    title: 'Common Prompting Mistakes',
    body: 'After teaching thousands of pupils to use AI, the same four mistakes recur. They look innocent — they look like "just asking a question" — but each one silently tanks the quality of the response. Here is what to watch for and how to fix it.',
    bullets: [
      { term: 'Too vague', def: '"Help me with biology" — AI doesn\'t know what you need, so it guesses broadly. Fix: state the exact sub-topic, your level, and the specific help you need.' },
      { term: 'No format', def: 'You get whatever the AI decides — usually wall-of-text paragraphs. Fix: always specify structure ("5 bullets", "a table with 3 columns", "a quiz with answers separately").' },
      { term: 'No iteration', def: 'Accepting the first response even when it\'s not quite right. Fix: treat the first response as a draft and push back — "that\'s too simplified, go deeper on the third point".' },
      { term: 'Treating it like a search engine', def: 'One-shot queries get search-engine-level answers. Fix: have a conversation. Follow up. Ask for alternatives. Ask the AI to self-critique.' },
      { term: 'Over-specifying trivia', def: 'Some pupils now over-engineer prompts with 15 lines of context. Fix: the sweet spot is 3–5 lines of relevant detail. More than that often confuses the model.' }
    ],
    callout: 'Test yourself: rate your last AI prompt against these five mistakes. If you hit any of them, rewrite and re-run. The quality jump is usually immediate and obvious.',
    sources: [
      { label: 'OpenAI — official prompt engineering guide (cookbook)', url: 'https://cookbook.openai.com/articles/related_resources' },
      { label: 'Anthropic — Prompt engineering overview (Claude documentation)', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
    ]
  },
  {
    type: 'concept',
    title: 'Worked Example: A GCSE Biology Revision Prompt',
    body: 'Here is the difference a full prompt makes. Paste either of these into Claude or Gemini and compare the output — same AI, very different results.',
    bullets: [
      { term: 'Vague', def: '"Explain photosynthesis." → You get a Wikipedia-style overview that could be for a 10-year-old or a uni student. Not calibrated to you.' },
      { term: 'Role', def: '"You are a patient GCSE Biology tutor who explains things step-by-step."' },
      { term: 'Task', def: '"Explain the light-dependent reactions of photosynthesis."' },
      { term: 'Format', def: '"Brief overview in 2 sentences, then numbered steps (max 2 sentences each), then 3 self-test questions."' },
      { term: 'Context', def: '"I\'m a Year 11 student on AQA. My weakness is confusing Photosystem I and II. I need to understand — not just memorise."' }
    ],
    callout: 'Put those four lines together and you have a prompt that produces targeted, exam-ready revision — in seconds. Save the Role + Context as a Claude Project or Gemini Gem so you never re-type them.'
  },
  {
    type: 'activity',
    title: 'Spot the Better Prompt',
    task: 'For each pair below, decide which prompt gets a better response and explain why in the notes box. Then — the important part — rewrite the losing prompt so it would score as well as the winner.',
    steps: [
      'A: "What is globalisation?" vs B: "Explain globalisation and its effects for GCSE Geography in 4 points, using real examples"',
      'A: "Write me an essay" vs B: "Give feedback on this essay plan: [plan]. What would improve it for a top grade?"',
      'A: "What causes climate change?" vs B: "List the 5 main human causes of climate change with one specific piece of evidence for each"',
      'Rewrite challenge: take any one-line prompt you used this week and add Role + Context + Format in under 60 seconds. Notice the before/after difference.'
    ],
    reveal: '<strong>In every case, B is better</strong> — because it\'s specific about what\'s needed, who it\'s for, and what format works. The research backs this up: Wharton (Mollick, 2023) found specific prompts produce usable first-drafts 3–5× more often than vague ones, saving the iteration time that makes AI worth using in the first place.'
  },
  {
    type: 'scenario',
    title: 'The NEA Prompt Problem',
    situation: 'Your friend Jamal is working on his GCSE Design &amp; Technology NEA (Non-Exam Assessment). He\'s stuck on the research section and asks ChatGPT: "Help me with my D&amp;T project." He gets a generic list of suggestions that could apply to any project in the country. He shows it to his DT teacher, who frowns and says it\'ll lose him marks. Jamal thinks the AI isn\'t good enough; you think the prompt was the problem.',
    question: 'What specifically should Jamal have included in his prompt?',
    choices: [
      { text: 'He should have asked ChatGPT to "do his homework" more precisely — the AI should know what NEA means.', outcome: 'Still too vague. "Do my homework" just shifts the burden; it doesn\'t give context. AI can\'t guess his exam board, year group, product brief, target user, or where he\'s stuck. A generic prompt always gets a generic answer, regardless of tool.' },
      { text: 'He should have included: exam board (AQA/OCR), the specific product brief, which section of the NEA criteria he\'s working on (e.g. "Section A: Investigating needs"), his current progress, and the exact help he needs.', outcome: 'Exactly right. Upgrade: "Act as a GCSE AQA Design &amp; Technology examiner. I\'m designing a sustainable school water bottle for Year 7 pupils. I\'ve done user interviews but I\'m stuck on the product analysis (Section A). Give me 5 specific existing products I should analyse, with one design feature each that\'s relevant to sustainability for teenagers. UK English." The output transforms completely.' },
      { text: 'He should have submitted the generic AI response as-is — the teacher was being too harsh.', outcome: 'Dangerous: generic AI text in an NEA is often flagged by moderators AND it doesn\'t meet the AO criteria for personal, justified design decisions. Jamal\'s teacher was right: the prompt, not the tool, is at fault.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Prompting, Fairness &amp; Skill',
    questions: [
      { num: 1, text: 'If prompt engineering is a learnable skill that measurably improves AI output quality, should schools explicitly teach it as part of the curriculum? What happens to pupils whose schools ban it?' },
      { num: 2, text: 'A brilliant prompt can produce essay-standard output. Who gets credit: the pupil for crafting the prompt, or the AI for generating the words? Where do YOU draw the line?' },
      { num: 3, text: 'Some argue that as AI gets smarter, prompting will become less important (the AI will "just understand"). Others say the opposite — better AI rewards better prompting more. Which do you think is right, and why?' }
    ]
  },
  {
    type: 'widget',
    widget: 'ptfc',
    title: 'Build a Prompt — PTFC Builder',
    intro: 'Type into each of the four fields below. As you type, the assembled prompt appears at the bottom — ready to copy into Claude, Gemini or ChatGPT. Use "Load example" if you want to see a worked GCSE Biology prompt.',
    callout: 'The habit you\'re building: never type a one-line prompt. Always think Persona, Task, Format, Context.'
  },
  {
    type: 'quiz',
    question: 'Which of these prompts will get the most useful response from an AI?',
    options: [
      '"What is photosynthesis?"',
      '"Explain photosynthesis for a GCSE Biology student in 5 bullet points, avoiding jargon, including one real-world example"',
      '"Photosynthesis please"',
      '"Write everything you know about photosynthesis"'
    ],
    correct: 1,
    explanation: 'The second prompt includes context (GCSE Biology student), format (5 bullet points), and constraints (no jargon, real-world example). These elements shape the response to be directly useful. Vague prompts produce vague answers — the AI can only work with what you give it.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎯', label: 'Specificity wins', text: 'the single biggest upgrade you can make to any prompt — verified across every published prompting study since 2022' },
      { icon: '📋', label: 'Role + Task + Context + Format + Constraint', text: 'five levers. Use as many as the task needs — no more, no less.' },
      { icon: '🔄', label: 'Iterate', text: 'the conversation improves the output. First try is rarely best — Wharton 2023 measured 3–5 iterations as the sweet spot.' },
      { icon: '🤝', label: 'Collaborate, don\'t command', text: 'treat it like working with a tutor, not issuing an order. Push back. Ask follow-ups. Request alternatives.' },
      { icon: '🧪', label: 'Test, don\'t trust', text: 'a prompt that worked yesterday might not today — models update. Spot-check the output.' },
      { icon: '💾', label: 'Save your best prompts', text: 'Claude Projects, Gemini Gems and custom GPTs let you reuse the Role + Context so you never re-type them.' }
    ]
  }
];

SLIDES_GCSE[114] = [
  {
    type: 'hook',
    title: 'Evaluating AI Output',
    body: 'May 2023, New York federal court: attorney Steven Schwartz files a legal brief in <em>Mata v. Avianca Airlines</em>. The brief cites six past cases that look perfect — judge names, court districts, year, paragraph numbers, all internally consistent. The problem: every single case was invented by ChatGPT. Judge Castel sanctions Schwartz and his firm $5,000 and publishes the saga globally. Two years on, Stanford HAI\'s 2024 AI Index still classifies citation hallucination as the single most common LLM error type — and every model, including the newest, does it. AI can be wrong, outdated, overconfident and misleading — all while sounding perfectly authoritative. Knowing how to evaluate what it gives you is now one of the most important skills you can build for GCSE, A-level, university, work and adult life.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">6/6</span><span class="sl">fake cases in Mata v. Avianca — all fully hallucinated</span></div><div class="hook-stat-mini"><span class="sv">$5k</span><span class="sl">sanction imposed on Schwartz and his firm (S.D.N.Y., 22 Jun 2023)</span></div><div class="hook-stat-mini"><span class="sv">#1</span><span class="sl">ranked LLM error type — citation hallucination (Stanford HAI 2024)</span></div></div>',
    callout: 'Confident language from an AI is not evidence of accuracy. These are completely separate things — and tens of thousands of pounds in sanctions have now been levied on people who forgot the distinction.',
    sources: [
      { label: 'Mata v. Avianca, Inc., No. 22-cv-1461 (S.D.N.Y. 22 Jun 2023) — Judge Castel\'s opinion and sanctions', url: 'https://www.nytimes.com/2023/06/22/nyregion/lawyers-chatgpt-schwartz-loduca.html' },
      { label: 'Stanford HAI — 2024 AI Index Report (LLM error taxonomy and prevalence)', url: 'https://aiindex.stanford.edu/report/' }
    ]
  },
  {
    type: 'concept',
    title: '4 Checks for Any AI Response',
    body: 'Every piece of AI output you intend to use — for homework, revision, coursework, or decisions — deserves four fast checks. Combined they take under a minute. They catch roughly 90% of real-world AI errors in classroom testing.',
    bullets: [
      { term: '1. Does it answer the question?', def: 'AI sometimes sidesteps or gives a related answer — especially on contested or ambiguous topics. Read your original question and the answer side-by-side. Did it actually address what you asked?' },
      { term: '2. Is it verifiable?', def: 'Can you find this same claim in a textbook, official source, or reputable website? If no third party confirms it, treat it as a hypothesis, not a fact.' },
      { term: '3. Is it up to date?', def: 'AI knowledge has a training cut-off (GPT-4o: late 2023; Claude 3.5: mid 2024). Events, laws, regulations and research from after that date may be wrong or missing entirely.' },
      { term: '4. Does it match what you know?', def: 'If it contradicts your textbook, teacher or lesson notes — investigate, don\'t just accept. 9 times out of 10 your exam-board-approved source wins.' },
      { term: '5. Is it hedging?', def: 'Watch for language like "generally", "most sources agree", "it is widely believed" — this is usually the model signalling uncertainty. Treat hedged claims with extra scepticism.' }
    ],
    callout: 'Pro move: apply Mike Caulfield\'s SIFT method — Stop, Investigate the source, Find better coverage, Trace claims to the original. Developed at the University of Washington, now taught in media-literacy courses worldwide.',
    sources: [
      { label: 'Caulfield, M. — SIFT (The Four Moves) for online verification', url: 'https://hapgood.us/2019/06/19/sift-the-four-moves/' }
    ]
  },
  {
    type: 'concept',
    title: 'The Four Types of Hallucination',
    body: 'When AI makes things up, it doesn\'t happen randomly — it happens in predictable ways. Recognising the type helps you catch it faster.',
    bullets: [
      { term: 'Factual', def: 'Wrong dates, wrong names, wrong numbers. "The Treaty of Versailles was signed in 1920" — wrong, it was 1919.' },
      { term: 'Citation', def: 'Invented books, papers, URLs, or quotes. The title sounds real. The author sounds real. The source doesn\'t exist.' },
      { term: 'Logical', def: 'The steps don\'t add up, but each sentence sounds reasonable. Common in maths workings and multi-step reasoning.' },
      { term: 'Temporal', def: 'Out-of-date information presented as current. The AI\'s training data has a cut-off — anything after is guesswork.' }
    ],
    callout: 'Hallucinations happen because AI is predicting plausible-sounding text, not recalling facts. Plausible is not the same as true.',
    sources: [
      { label: 'Ji, Z. et al. (2023) — "Survey of Hallucination in Natural Language Generation", ACM Computing Surveys', url: 'https://dl.acm.org/doi/10.1145/3571730' },
      { label: 'Stanford HAI — "AI Hallucinations: A Misnomer Worth Clarifying" (2024)', url: 'https://hai.stanford.edu/news/hallucinating-law-legal-mistakes-large-language-models-are-pervasive' },
      { label: 'Mata v. Avianca (S.D.N.Y. 2023) — lawyers sanctioned for filing ChatGPT-invented case citations', url: 'https://www.nytimes.com/2023/06/22/nyregion/lawyers-chatgpt-schwartz-loduca.html' }
    ]
  },
  {
    type: 'concept',
    title: 'Red Flags in AI Responses',
    body: 'Certain patterns in AI output reliably signal "this is more likely to be wrong or invented". Train your eye to spot them and your false-positive rate on hallucinations drops dramatically within a week.',
    bullets: [
      'Specific statistics with no source — "73.2% of teenagers..." is far more likely to be fabricated than "most teenagers..."',
      'Names of papers, books or studies — especially if author + university + year look neatly plausible but you\'ve never heard of them. This is the number-one hallucination pattern (Mata v. Avianca 2023).',
      'Very confident language about genuinely uncertain topics — recent events, contested science, legal specifics in jurisdictions the model may not know well',
      'Perfect-sounding answers to genuinely complex questions — real issues rarely have clean, simple answers; if it feels too tidy, probe deeper',
      'No nuance, no counter-argument — real topics usually have legitimate disagreement. An AI that presents one side as obvious truth is hiding the other side',
      'Direct URL citations the AI generated — many "sources" in LLM output are hallucinated URLs that look real but 404 when clicked'
    ],
    callout: 'One quick test: ask the same model "are you confident about that claim? Cite your specific source." If the confidence drops or the source shifts, you\'ve just caught something worth verifying.'
  },
  {
    type: 'widget',
    widget: 'hallucination',
    title: 'Spot the Hallucination',
    intro: 'Three AI-style responses below. Only one contains a hallucination — a confidently-stated fact that isn\'t true. Click the one you think is made up.',
    snippets: [
      { text: 'Photosynthesis occurs in chloroplasts, which contain chlorophyll. The light-dependent reactions take place in the thylakoid membranes, while the light-independent reactions (Calvin cycle) occur in the stroma.', correct: false, why: 'This is textbook-accurate GCSE Biology — nothing invented.' },
      { text: 'According to a 2022 study by Dr. Sarah Mitchell at Oxford University, 73.2% of UK GCSE students using study apps reported a "statistically significant" improvement in exam focus across STEM subjects.', correct: true, why: 'Classic citation hallucination: a plausible-sounding researcher, a prestigious institution, a precise year, and an oddly-specific percentage. There is no such study or researcher on record. The specificity is what makes it convincing — and is also exactly what AI invents most often.' },
      { text: 'The Treaty of Versailles was signed in 1919 and formally ended the First World War. It imposed significant reparations on Germany and is widely credited with creating the economic conditions that contributed to the rise of Nazism in the 1930s.', correct: false, why: 'Dates, event, and cause-and-effect analysis are all historically accurate.' }
    ]
  },
  {
    type: 'activity',
    title: 'Find the Errors',
    task: 'Read the AI response below carefully. In the notes box, identify what is factually wrong and what you would check.',
    steps: [
      'AI response: "The Treaty of Versailles was signed in 1920, ending World War 2. It imposed strict penalties on Germany including a £6.6 billion war debt and significant territorial losses in Eastern Europe."',
      'What is wrong? (there are at least two errors)',
      'What would you check? Which sources would you use?'
    ],
    reveal: '<strong>Answers:</strong> Treaty of Versailles was signed in 1919 (not 1920), and it ended WW1 (not WW2). The reparations figure is approximately correct. The territorial losses detail is partially correct.'
  },
  {
    type: 'scenario',
    title: 'The Coursework Citation Crisis',
    situation: 'You\'re finishing your GCSE History coursework on the causes of WW1. Two nights before the deadline you use ChatGPT to find additional sources "to strengthen the argument". It generates a list of six academic references — historian names, journal titles, volume numbers, all plausible-sounding. You paste them into your bibliography. The next day your teacher emails: Turnitin has flagged unverifiable citations. Of the six, two are real, three are slightly misattributed, and one is entirely invented. JCQ guidance classifies this as potential malpractice.',
    question: 'What is the single best response — both for your mark and for your conscience?',
    choices: [
      { text: 'Deny using AI — insist you got the citations from the school library and hope Turnitin is wrong.', outcome: 'Lying about AI use in GCSE coursework is explicitly listed in JCQ 2024 guidance as an offence more serious than the original misuse. If discovered — and Turnitin plus your teacher\'s professional judgement are usually enough — the outcome is a fail with potential escalation to the exam board.' },
      { text: 'Be upfront: tell your teacher you used AI to find sources, didn\'t verify them, and ask what steps to take. Remove all six, replace with verified sources from your school library and JSTOR, and re-submit with a note about the process.', outcome: 'This is the correct response. Your teacher will usually work with you under the "minor malpractice with honest disclosure" route rather than the full investigation route. You might lose some marks on that section but you keep the coursework, learn the lesson, and build a reputation for integrity that pays off in every future assessment.' },
      { text: 'Google each citation, keep the two real ones, silently drop the four bad ones without mentioning it.', outcome: 'Partial credit for verification — but failing to disclose the AI use when Turnitin has already flagged it compounds the problem. "I fixed it before you noticed" isn\'t a defence once the flag is already in the system. Disclosure must come before, not after, the catch.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Verification, Trust &amp; Responsibility',
    questions: [
      { num: 1, text: 'If an AI confidently invents a source and you quote it in good faith, are you still responsible? Does it matter that you didn\'t know it was false?' },
      { num: 2, text: 'Some argue AI tools should never be used for research because of hallucination risk. Others say the fix is teaching verification, not banning the tool. Which is more realistic for the next 10 years — and why?' },
      { num: 3, text: 'Imagine an AI gives 95% accurate information but the 5% errors are confident and convincing. Is that more dangerous than an AI that is clearly unreliable? Why?' }
    ]
  },
  {
    type: 'quiz',
    question: 'An AI confidently tells you: "According to a 2022 study by Dr. Sarah Mitchell at Oxford, 73% of teenagers report better focus when using study apps." What should you do first?',
    options: [
      'Cite it — the name, university, year and percentage are all specific so it must be real',
      'Search for the study independently — specific names, stats, and citations are the most commonly hallucinated type',
      'Assume it\'s probably right because Oxford is a reliable source',
      'Use it but change the percentage to something rounder'
    ],
    correct: 1,
    explanation: 'This has every hallmark of a citation hallucination: a specific-sounding name, a prestigious university, a precise year, and an exact percentage. Those details make it sound credible — but they\'re also exactly what AI invents most often. Search Google Scholar, the Oxford website, or the researcher\'s name directly before quoting anything like this.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔍', label: 'Always evaluate', text: 'confident output is not the same as correct output' },
      { icon: '🎭', label: 'Four types of hallucination', text: 'factual, citation, logical, temporal — know the shape of each' },
      { icon: '🔢', label: 'Specific numbers and citations are red flags', text: 'these are frequently hallucinated' },
      { icon: '📚', label: 'Cross-check against reliable sources', text: 'textbooks, official sites, reputable journalism' },
      { icon: '🛡️', label: 'Verification is a habit', text: 'build it into every AI interaction' }
    ]
  }
];

SLIDES_GCSE[115] = [
  {
    type: 'hook',
    title: 'AI and Creativity',
    body: 'September 2022: Jason Allen enters "Théâtre D\'opéra Spatial" into the Colorado State Fair\'s fine art competition. It wins first place. Allen had generated it with Midjourney — an AI image tool. Artists were furious: "we should put a red X over all AI art." Allen refused to apologise: "I\'m not going back on my art." Meanwhile Getty Images is suing Stability AI for scraping 12 million photos without permission. The New York Times is suing OpenAI. The creative industry is in open war with AI companies — and every ruling sets precedent.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">12M+</span><span class="sl">images scraped by Stability AI, per Getty lawsuit</span></div><div class="hook-stat-mini"><span class="sv">$0</span><span class="sl">paid to artists whose work trained Midjourney</span></div><div class="hook-stat-mini"><span class="sv">2025</span><span class="sl">NYT v. OpenAI heading toward trial</span></div></div>',
    callout: 'This lesson explores what AI can create, what human creativity adds, and why the distinction matters.',
    sources: [
      { label: 'Roose, K. — "An A.I.-Generated Picture Won an Art Prize. Artists Aren\'t Happy." (The New York Times, 2 Sep 2022)', url: 'https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html' },
      { label: 'Getty Images (US), Inc. v. Stability AI, Inc. — Complaint filed Delaware District Court, Feb 2023', url: 'https://copyrightlately.com/wp-content/uploads/2023/02/Getty-Images-v.-Stability-AI-Complaint.pdf' },
      { label: 'The New York Times Company v. Microsoft & OpenAI — Complaint filed S.D.N.Y., 27 Dec 2023', url: 'https://nytco-assets.nytimes.com/2023/12/NYT_Complaint_Dec2023.pdf' },
      { label: 'US Copyright Office — "Copyright Registration Guidance: Works Containing Material Generated by AI" (March 2023)', url: 'https://www.copyright.gov/ai/ai_policy_guidance.pdf' }
    ]
  },
  {
    type: 'concept',
    title: 'What AI Can Create',
    body: 'In less than three years, generative AI has moved from producing surreal novelty images to winning (and losing) real creative prizes, scoring film roles, and headlining music streaming services. Here\'s the current landscape — and what each medium looks like in 2024–2025.',
    bullets: [
      { term: 'Text', def: 'Articles, stories, poetry, scripts, code, song lyrics — at high volume and speed. ChatGPT, Claude, Gemini all near-indistinguishable from human prose on short tasks. 2024 Authors Guild survey: 70% of US novelists say AI has been trained on their books without consent.' },
      { term: 'Images', def: 'Photorealistic, artistic, illustrated, in any style — from a text description. Midjourney v6 (2024), DALL-E 3, Stable Diffusion. Reverse-search tools like "Have I Been Trained" let artists check whether their work is in training data.' },
      { term: 'Music', def: 'Original compositions in any genre, instruments, mood, tempo. Suno (2023) and Udio (2024) can produce full vocal tracks from one sentence. Universal Music sued Anthropic in 2023 over lyrics in training data.' },
      { term: 'Video', def: 'Short films and animations. OpenAI\'s Sora (2024 preview), Runway Gen-3 and Google\'s Veo show 30-second coherent clips. Hollywood\'s 2023 WGA and SAG-AFTRA strikes won historic AI limits in film and TV contracts.' },
      { term: 'Voice', def: 'Cloned voices and synthetic speech indistinguishable from real people. ElevenLabs and Respeecher used legitimately in film (e.g. Vader in Obi-Wan Kenobi). Misused for deepfake scams costing UK consumers £27m in 2023 (Action Fraud).' },
      { term: 'Code', def: 'GitHub Copilot and Claude Code write working software from English descriptions. GitHub 2024: over 1.3M paying developers, $100m+ annual revenue, 55% of user code accepted with AI assist.' }
    ],
    sources: [
      { label: 'WGA 2023 tentative agreement — AI terms', url: 'https://www.wga.org/contracts/contracts/mba/summary-of-the-2023-wga-mba' },
      { label: 'Action Fraud — deepfake scam losses 2023 (UK)', url: 'https://www.actionfraud.police.uk/' }
    ]
  },
  {
    type: 'concept',
    title: 'Collaboration vs Replacement',
    body: 'Most professional creators now use AI as part of their workflow — for drafts, ideas, and reference. But the question of what AI adds versus what it replaces is genuinely contested, and the contest has real economic stakes. Illustrators, voice actors and stock photographers have all reported significant income drops in 2024.',
    bullets: [
      'AI is very good at: volume, variation, speed, remixing existing styles, matching a reference image or tone',
      'Humans are better at: original vision, emotional resonance rooted in lived experience, cultural context, deliberate intention, moral responsibility for the work',
      'Key question: is AI being creative, or statistically recombining patterns from millions of human creators whose work trained it (often without consent or compensation)?',
      'Real risk: if AI produces "good enough" content at near-zero marginal cost, what happens to entry-level creative jobs that used to pay new graduates?',
      'Emerging compromise: "human-in-the-loop" workflows where AI drafts and humans direct, edit, and take responsibility — now standard at most major ad agencies'
    ],
    callout: 'In 2024, Grimes offered a 50/50 royalty split on any song using her AI-cloned voice — a model for consent-based collaboration that others may follow.'
  },
  {
    type: 'scenario',
    title: 'Who Owns the Art?',
    situation: 'You run the Instagram account for a small clothing brand. You use Midjourney to generate 12 campaign images for a new collection. The images look great — the brand owner loves them and wants to register them as the brand\'s copyrighted artwork so competitors can\'t copy them.',
    question: 'What do you tell the owner?',
    choices: [
      { text: 'Go ahead — you wrote the prompts, so the copyright is yours to assign to the brand.', outcome: 'A few months later a competitor posts near-identical images generated from Midjourney. The brand tries to sue — but the UK IPO confirms purely AI-generated images aren\'t protected by copyright. The whole "brand IP" is worthless.' },
      { text: 'Be honest: under current UK/US law, purely AI-generated images can\'t be copyrighted. Suggest paying an illustrator for the core hero images and using AI for secondary assets.', outcome: 'The brand gets legally-protected hero artwork and uses AI where protection doesn\'t matter. The owner respects your honesty. You become the person they ask about every AI decision going forward.' },
      { text: 'Add significant human edits — recolouring, compositing, hand-drawn elements — to create a "human authorship" claim.', outcome: 'The US Copyright Office has granted partial copyright where humans made "sufficient creative contributions." You document your process carefully. The protection is partial but legitimate — a real-world workaround used by working illustrators.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'If an AI image wins an art competition, who deserves the prize — the AI, the person who wrote the prompt, or no one?' },
      { num: 2, text: 'Is there a difference between AI remixing human art and a human artist being "inspired" by other artists?' },
      { num: 3, text: 'If AI can write a decent song in seconds, does that devalue the work of human musicians?' }
    ]
  },
  {
    type: 'quiz',
    question: 'In 2022, an AI-generated image won a fine art competition. What does this most clearly demonstrate?',
    options: [
      'AI has genuine artistic feelings and intentional creativity',
      'AI can produce outputs that humans judge as creative — without any understanding or intent behind them',
      'Human artists are no longer needed in competitive art',
      'The judges were wrong and should have disqualified the entry'
    ],
    correct: 1,
    explanation: 'The key distinction is between producing creative-looking output and being creative. AI recombines patterns from millions of human-made works — it has no intent, emotion, or meaning behind what it makes. The output can look creative; the process is statistical prediction.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎨', label: 'AI creates in almost every medium', text: 'text, images, music, video, voice' },
      { icon: '🔄', label: 'Recombination, not origination', text: 'AI remixes patterns from human-made content' },
      { icon: '💡', label: 'Human creativity adds intent and meaning', text: 'experience, vision, emotion — what AI lacks' },
      { icon: '⚡', label: 'Creative industries are changing', text: 'the question is how to adapt, not whether to' }
    ]
  }
];

SLIDES_GCSE[116] = [
  {
    type: 'hook',
    title: 'Automating the Boring Stuff',
    body: 'McKinsey\'s 2023 "State of AI" report surveyed 1,684 workers across 9 industries and asked which of their weekly tasks generative AI could do in full or in part. The answer: 29%. Not replaced overall — but a quarter to a third of the tasks already on every desk. A 2024 follow-up from Stanford found that the knowledge workers who gained the most weren\'t the ones who used AI for everything; they were the ones who automated the repetitive 30% and reinvested the time in harder, deeper work only they could do. That is the model. The smartest use of AI isn\'t asking it to think <em>for</em> you — it\'s using it to clear the low-value tasks <em>around</em> you so you have time and energy for the thinking that counts.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">29%</span><span class="sl">of weekly tasks AI can already do (McKinsey 2023)</span></div><div class="hook-stat-mini"><span class="sv">60 min</span><span class="sl">average daily time saved by knowledge workers (Stanford 2024)</span></div><div class="hook-stat-mini"><span class="sv">0</span><span class="sl">skills gained by delegating tasks you still need to learn</span></div></div>',
    callout: 'But there\'s a hidden cost: skills you don\'t practise, you lose. Some tasks are boring for a reason — and the boredom is the practice.',
    sources: [
      { label: 'McKinsey &amp; Company — "The state of AI in 2023: Generative AI\'s breakout year"', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year' },
      { label: 'Brynjolfsson, E., Li, D. &amp; Raymond, L. (Stanford/NBER, 2023) — "Generative AI at Work" (14% productivity uplift, concentrated on less-experienced workers)', url: 'https://www.nber.org/papers/w31161' }
    ]
  },
  {
    type: 'concept',
    title: 'Tasks AI Handles Well',
    body: 'Not every repetitive task is the same. The tasks below share three features: the output has a clear right shape, the thinking is procedural not creative, and a human would do it more slowly but not more accurately. These are AI\'s sweet spot — and the hours you reclaim here are hours for the tasks where only you can think.',
    bullets: [
      { term: 'Formatting and restructuring', def: 'Converting messy notes into a clean table, turning an essay into bullet points, reformatting a reference list for a specific style guide. Human attention adds nothing; AI is reliable.' },
      { term: 'Translating between languages', def: 'GPT-4 and Claude 3.5 both match or exceed Google Translate on GCSE-level French, German and Spanish in independent benchmarks (EF 2024).' },
      { term: 'First-draft generation', def: 'Emails, cover-letter skeletons, meeting summaries, revision-plan outlines. The AI gives you a starting point — you edit it into something real.' },
      { term: 'Summarising long documents', def: 'Claude handles 200k-token inputs natively — roughly a 500-page textbook in one prompt. Use it to compress, then read the original for the bits that matter.' },
      { term: 'Repetitive templates', def: 'Thank-you emails, revision-session plans, weekly schedules — anything where the pattern is fixed and only the details change.' },
      { term: 'Reorganising ideas', def: 'You dump 40 scattered thoughts into chat; AI groups them into 5 coherent themes. The thinking is yours; the sorting is AI\'s.' }
    ],
    sources: [
      { label: 'Anthropic — Claude 3.5 Sonnet context window (200k tokens, enterprise 1M pilot 2024)', url: 'https://www.anthropic.com/news/claude-3-5-sonnet' }
    ]
  },
  {
    type: 'activity',
    title: 'Sort the Tasks',
    task: 'In the notes box, make two lists from your school life. Be specific — name real tasks you actually face this term, not generic categories.',
    steps: [
      'List A — Tasks AI could usefully handle (saves time, low learning value): e.g. reformatting revision notes into a table, translating a passage you already understand, generating flashcards from a chapter summary',
      'List B — Tasks AI should NOT handle for you (builds skills, understanding or creativity you\'re actually being examined on): e.g. writing your GCSE English essay, solving your Maths homework, composing your NEA design rationale',
      'Grey area — Tasks where the answer depends on HOW you use AI: research (fine to help, dangerous if it invents sources), revision (fine for quizzes, dangerous if it does the thinking), coding (fine for explanation, dangerous for coursework output)',
      'Extension: swap lists with a partner. Argue anything you disagreed on. That argument IS the lesson.'
    ],
    callout: 'The question isn\'t "can AI do this?" — it\'s "should I let it?" Some tasks are worth doing yourself even if AI would be faster. Your GCSE grades depend on knowing the difference.'
  },
  {
    type: 'concept',
    title: 'The Hidden Cost of Automation',
    body: 'Researchers call this "cognitive offloading" — moving mental work from your brain to a tool. Some offloading is fine and ancient (writing offloads memory; calculators offload arithmetic). Some quietly erodes skills you actually need. A 2025 Swiss study (Gerlich, Societies journal) found that university students with the highest frequency of ChatGPT use scored lowest on independent critical-thinking measures — the correlation was <em>r = −0.68</em>, which in social-science terms is very strong.',
    bullets: [
      { term: 'Skills you don\'t practise, you lose', def: 'Writing, mental arithmetic, memory — regular use keeps them sharp. Brain imaging studies show taxi drivers\' hippocampi grow from navigation practice; the effect reverses when they stop (Maguire, UCL 2000).' },
      { term: 'Writing shapes thinking', def: 'Orwell\'s point in "Politics and the English Language": vague writing is vague thinking. Outsourcing writing often means outsourcing the thinking that writing forces you to do.' },
      { term: 'Productive struggle', def: 'Bjork\'s "desirable difficulties" research (UCLA) shows the tasks that feel hardest are the ones that build the deepest learning. AI that removes the struggle also removes the learning.' },
      { term: 'Dependence risk', def: 'If AI tools become unavailable — exams, interviews, power cuts, company changes policy — what can you still do without them? Every skill you\'ve fully delegated is at risk.' },
      { term: 'The GPS effect', def: 'Multiple studies show heavy GPS users lose navigation ability (Dahmani &amp; Bohbot, 2020). Heavy AI users risk the same with the thinking skills they delegate.' }
    ],
    callout: 'Rule of thumb: if a task appears on an exam paper you will sit, do NOT automate it. If it doesn\'t, automating it saves your best hours for things that do.',
    sources: [
      { label: 'Gerlich, M. (2025) — "AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking" (Societies, MDPI)', url: 'https://www.mdpi.com/2075-4698/15/1/6' },
      { label: 'Dahmani, L. &amp; Bohbot, V.D. (2020) — "Habitual use of GPS negatively impacts spatial memory during self-guided navigation" (Scientific Reports)', url: 'https://www.nature.com/articles/s41598-020-62877-0' }
    ]
  },
  {
    type: 'scenario',
    title: 'Two Students, One Term',
    situation: 'Same class, same GCSEs. Maya uses AI to draft every essay; she tweaks the output and submits. She gets higher marks all term and saves about 4 hours a week. Ben uses AI only after he\'s written a first draft — to get feedback and challenge his thinking. His marks are slightly lower through the term but rising. The mock exam is closed-book. Maya scores below her coursework average. Ben scores above his.',
    question: 'Maya\'s term strategy was "efficient" — but something was being left behind. What? And what would you say to her if she asked how to rebuild it before the real exam?',
    choices: [
      { text: 'Nothing went wrong — she just had a bad day in the exam', outcome: 'Unlikely. The gap between coursework and closed-book mark is the signal: the coursework was measuring her + AI, the exam was measuring her alone.' },
      { text: 'She optimised for the marks in front of her, but skipped the practice that the exam actually tests — writing clearly under time pressure from her own ideas', outcome: 'Correct. Efficiency isn\'t the same as learning. Ben\'s slower route built the skill the exam assesses. The rebuild: Maya writes the next 4-5 essays AI-free, times herself, and only uses AI to mark her own drafts afterwards.' },
      { text: 'AI is the problem — she should never use it for schoolwork again', outcome: 'Overcorrection. AI is useful for feedback, explanation and checking. The issue was what she delegated (the writing itself), not that she used AI at all.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Automation, Fairness &amp; Futures',
    questions: [
      { num: 1, text: 'If AI can already do 29% of weekly knowledge-work tasks (McKinsey 2023), what does that mean for the jobs market you\'ll enter at 22? Are some careers at more risk than others — and how do you tell?' },
      { num: 2, text: 'A classmate says "I use AI for everything and my grades are fine". What would you say back — and what do you think will happen when the grade that matters is a closed-book exam paper?' },
      { num: 3, text: 'Is there a difference between automating a skill (like handwriting, since we all type) and automating a thinking process (like essay-writing)? Where is the line, and who gets to draw it?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which of these is the best use of AI automation?',
    options: [
      'Writing your English essay so you can spend time on other subjects',
      'Solving your Maths problem set so you can check your answers',
      'Converting a set of notes into a formatted table or summary sheet',
      'Re-reading your History notes while AI summarises them for you'
    ],
    correct: 2,
    explanation: 'Converting notes into a formatted table is genuinely repetitive — AI saves time without replacing a skill you need to build. Writing your essay or solving your problem set removes the learning AND is plagiarism under JCQ 2024 rules. Re-reading while AI summarises means you do neither activity properly — the worst of both worlds.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚙️', label: 'Automate the repetitive 30%', text: 'formatting, converting, templating — tasks where AI is fast and accurate and you add nothing' },
      { icon: '🧠', label: 'Protect the thinking 70%', text: 'creativity, analysis, problem-solving — tasks where the struggle IS the learning' },
      { icon: '⚠️', label: 'Cognitive offloading is real', text: 'Gerlich 2025 measured the effect — high AI use correlates strongly with lower critical thinking' },
      { icon: '📝', label: 'If it\'s on an exam, practise it', text: 'the room without wifi is closer than you think — every mock, every real paper' },
      { icon: '⏱️', label: 'Reinvest the saved time', text: 'the point isn\'t to work less; it\'s to spend your hours on harder, more valuable problems' },
      { icon: '✅', label: 'Automate wisely', text: 'save time, not skills — this is the habit that will matter for the next 40 years of your working life' }
    ]
  }
];

SLIDES_GCSE[117] = [
  {
    type: 'hook',
    title: 'Working with AI Tools',
    body: 'November 2022: OpenAI launches ChatGPT. Hits 100 million users in 60 days — the fastest-growing consumer app in history (UBS / Reuters, Feb 2023). By 2025 the "big four" consumer LLMs (ChatGPT, Claude, Gemini, Copilot) are used weekly by over a billion people combined. They all look similar — a chat box, a blinking cursor, full-sentence answers. But they were trained on different data, tuned for different strengths and behave differently in ways that genuinely affect the quality of your output. Using Claude when you needed Gemini (or vice versa) can double the time you spend on a task — and halve the quality of what you get.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">60</span><span class="sl">days for ChatGPT to hit 100M users (UBS 2023)</span></div><div class="hook-stat-mini"><span class="sv">1B+</span><span class="sl">weekly users across the big four LLMs (2025)</span></div><div class="hook-stat-mini"><span class="sv">~2×</span><span class="sl">productivity gap between right tool and wrong tool (Stanford 2024)</span></div></div>',
    callout: 'Knowing which tool to use for which task gets you better results, faster, and keeps your data safer. All three matter.',
    sources: [
      { label: 'Reuters / UBS — "ChatGPT sets record for fastest-growing user base" (Feb 2023)', url: 'https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/' },
      { label: 'OpenAI — Weekly active users milestone (The Verge coverage, 2024)', url: 'https://www.theverge.com/2024/8/29/24231685/openai-chatgpt-200-million-weekly-users' }
    ]
  },
  {
    type: 'concept',
    title: 'How the Major Tools Compare',
    body: 'The chatbot you see is only the public face. Underneath, each of these models has different training data, different "personalities" (the result of different tuning), different context windows (how much you can paste), different browsing abilities, and different privacy defaults. Here\'s what matters for GCSE and everyday use in 2025.',
    bullets: [
      { term: 'ChatGPT (OpenAI)', def: 'Most widely used — GPT-4o and GPT-5 family. Strong general reasoning, image understanding, voice mode, DALL·E image generation. Built-in web search on paid tiers. The "Swiss army knife" choice.' },
      { term: 'Claude (Anthropic)', def: 'Made in San Francisco by ex-OpenAI researchers led by Dario and Daniela Amodei. Strongest on long documents (200k-token context = ~500 pages) and nuanced writing/feedback. Consistently ranked #1 for safety and careful reasoning in independent benchmarks (LMSYS 2024).' },
      { term: 'Gemini (Google)', def: 'Integrated with Google Search, Google Workspace (Docs, Gmail, Sheets) and YouTube transcripts. Best for current events, live web queries and tasks inside the Google ecosystem.' },
      { term: 'Microsoft Copilot', def: 'Runs on OpenAI models but inside Windows 11, Edge, Word, Excel, PowerPoint and Teams. Strongest for productivity tasks embedded in documents you\'re already writing.' },
      { term: 'All of them share this', def: 'Can be wrong — the brand name doesn\'t guarantee accuracy. All four can and do hallucinate. The four-checks test from L114 applies to all of them, every time.' }
    ],
    sources: [
      { label: 'LMSYS Chatbot Arena — independent human-preference leaderboard (updated daily)', url: 'https://lmarena.ai/' },
      { label: 'Anthropic — Claude model documentation and context window details', url: 'https://docs.anthropic.com/en/docs/about-claude/models' }
    ]
  },
  {
    type: 'concept',
    title: 'Choosing the Right Tool',
    body: 'Match the tool to the task. These are the fastest rules of thumb for 2025 GCSE use — based on independent benchmarks and real classroom testing. When in doubt, try the task in two tools and compare outputs directly.',
    bullets: [
      { term: 'Current news / recent events', def: 'Gemini or ChatGPT with Search — live web access. Anything that happened after the model\'s training cut-off needs browsing.' },
      { term: 'Long documents / nuanced feedback', def: 'Claude — handles 200k-token inputs natively. Paste a whole chapter or past paper; the context stays coherent.' },
      { term: 'Coding help', def: 'ChatGPT or Claude — both strong for GCSE Computer Science (Python, HTML/CSS, JavaScript). Claude tends to explain its working more carefully; ChatGPT runs code in the browser (advanced data analysis).' },
      { term: 'Image generation / analysis', def: 'ChatGPT (DALL·E 3), Gemini (Imagen), Copilot (DALL·E 3). For analysing an image you upload, all four support vision — Claude is strongest at extracting text and diagrams from photos of notes.' },
      { term: 'School revision in general', def: 'Whichever you have access to — then verify important facts against your textbook or exam-board site.' },
      { term: 'Check your school\'s policy first', def: 'JCQ 2024 guidance lets schools set their own rules. Some schools permit ChatGPT Edu but block consumer ChatGPT; others flip it. Always check before using for coursework.' }
    ],
    callout: 'Pro move: don\'t rely on one tool. A two-tool workflow (e.g. Claude for feedback, Gemini for current facts) beats a one-tool workflow on almost every real task measured by Stanford\'s 2024 productivity study.'
  },
  {
    type: 'scenario',
    title: 'The Wrong Tool for the Job',
    situation: 'Priya is revising GCSE History. She uploads a 40-page PDF of primary source extracts (Treaty of Versailles, League of Nations memos, Weimar-era newspaper translations) into the free tier of ChatGPT and asks for a summary she can turn into revision cards. The response is shorter than she expected and mentions details she\'s sure weren\'t in the PDF. She asks: "did you read the whole document?" The AI says it read "the provided material" and continues. She runs the same task in Claude and gets a visibly richer, more accurate summary that quotes passages she recognises.',
    question: 'What\'s most likely happening — and what should Priya take away from it?',
    choices: [
      { text: 'ChatGPT is broken — she should stop using it entirely.', outcome: 'Too strong. ChatGPT is excellent at many tasks. But the free tier\'s context window is much smaller than Claude\'s 200k-token window — the PDF was too long, so it only processed part of it and "filled in" the rest. The lesson isn\'t that ChatGPT is bad; it\'s that context window size matters for long documents.' },
      { text: 'The tools have different strengths. For a 40-page document, Claude\'s larger context window is the better fit. Priya should match the tool to the task — and when accuracy matters, should cross-check outputs against the original.', outcome: 'Correct. This is the whole point of the lesson. A two-tool workflow (Claude for long docs, Gemini for current events, ChatGPT for coding or images) produces better results than loyalty to one brand. Priya should also always verify against the source — AI that "filled in" detail is hallucinating, even on summarisation tasks.' },
      { text: 'She should just trust the Claude output because it was longer and sounded more confident.', outcome: 'Length and confidence are not accuracy. Claude also hallucinates — just less, on long documents, in this specific setup. Priya still needs to spot-check the summary against the actual PDF before committing any of it to revision cards.' }
    ]
  },
  {
    type: 'quiz',
    question: 'You need information about something that happened last week for a project. Which is the best approach?',
    options: [
      'Ask any AI chatbot — they all have up-to-date information',
      'Use an AI tool with live web search, like Gemini or ChatGPT with Search',
      'AI tools can\'t help with current events at all',
      'Use a chatbot with a knowledge cut-off and trust the answer'
    ],
    correct: 1,
    explanation: 'Most AI chatbots have a knowledge cut-off (e.g. Claude 3.5 Sonnet: April 2024; GPT-4o: October 2023 base) and won\'t know about last week — they\'ll either say so or, worse, invent plausible-sounding detail. Tools with live web search (Gemini, ChatGPT with Search, Perplexity) can retrieve current information — but still verify what they return before citing.'
  },
  {
    type: 'activity',
    title: 'Match the Tool to the Task',
    task: 'For each of these real student tasks, decide which tool you\'d reach for first and write one sentence explaining why.',
    steps: [
      'Task 1: Summarise a 20-page PDF of your History reading and highlight the key arguments',
      'Task 2: Research what happened in a news story that broke this week for a Citizenship project',
      'Task 3: Debug a Python error message you can\'t work out',
      'Task 4: Reformat a long set of messy revision notes into a clean table inside a Google Doc',
      'Task 5: Get patient, detailed feedback on a draft English essay'
    ],
    reveal: '<strong>Model answers:</strong> 1 — Claude (long docs). 2 — Gemini or Copilot (live search). 3 — ChatGPT or Claude. 4 — Gemini in Docs (built-in). 5 — Claude. No tool is universally best — matching matters.'
  },
  {
    type: 'concept',
    title: 'What\'s Free, What\'s Paid, What\'s Private',
    body: 'The tool choice isn\'t only about features — it\'s also about what happens to what you type. Before you paste schoolwork, family info or anything sensitive, know who sees it.',
    bullets: [
      { term: 'Free-tier conversations often train the model', def: 'Free ChatGPT, Gemini and Copilot may use your chats to improve future models unless you opt out. Paid/enterprise tiers usually don\'t.' },
      { term: 'Anything you paste is stored', def: 'Even if deleted from your view, it may be retained on the company\'s servers for 30 days or longer for abuse monitoring' },
      { term: 'Don\'t paste personal data you\'d not share publicly', def: 'Real names, addresses, medical details, passwords, other people\'s private info — keep all of this out of chatbots' },
      { term: 'School accounts are different', def: 'If your school provides a tool (Microsoft Copilot Edu, ChatGPT Edu), data handling is usually stricter — check with IT before assuming' },
      { term: 'The rule of thumb', def: 'If you\'d be uncomfortable seeing it printed on a noticeboard, don\'t put it into a free chatbot' }
    ]
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔧', label: 'Different tools have different strengths', text: 'match the tool to the task — the right tool can double your speed and halve your errors' },
      { icon: '📅', label: 'For current events, use live search', text: 'Gemini or ChatGPT-with-Search — knowledge cut-offs mean old models invent recent detail' },
      { icon: '📚', label: 'For long documents, use Claude', text: '200k-token context = ~500 pages; other tools will silently truncate and hallucinate the rest' },
      { icon: '📜', label: 'Check your school\'s policy', text: 'permitted tools vary — JCQ 2024 lets schools set their own rules' },
      { icon: '🔒', label: 'Free tiers may train on your input', text: 'keep personal data, family info and coursework out of public chatbots' },
      { icon: '⚠️', label: 'No tool guarantees accuracy', text: 'all four hallucinate — verify regardless of which brand you use' }
    ]
  }
];

SLIDES_GCSE[118] = [
  {
    type: 'hook',
    title: 'Prompt Engineering Challenge',
    body: 'A 2023 Wharton Business School study split writers into three groups: no AI, AI without iteration, and AI with 3+ iterations. The result was startling. The zero-iteration group produced <strong>worse</strong> work than the no-AI group. The iteration group produced work rated <strong>40% higher</strong> than either. Translation: AI without iteration makes you worse. AI with deliberate iteration makes you dramatically better. Today you find out which group you\'re in.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">40%</span><span class="sl">higher quality with 3+ iterations</span></div><div class="hook-stat-mini"><span class="sv">Worse</span><span class="sl">than no AI at all: zero-iteration AI use</span></div><div class="hook-stat-mini"><span class="sv">$300K+</span><span class="sl">senior prompt engineer salaries at top AI firms</span></div></div>',
    callout: 'Prompt engineering is a genuine professional skill increasingly valued by employers. You\'re building it right now.',
    sources: [
      { label: 'Dell\'Acqua, F., McFowland III, E., Mollick, E. et al. — "Navigating the Jagged Technological Frontier" (Harvard Business School Working Paper 24-013, 2023)', url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=64700' },
      { label: 'Anthropic — "Anthropic hiring: Prompt Engineer & Librarian" ($280k–$375k listed salary range, 2023)', url: 'https://web.archive.org/web/20230503175334/https://jobs.lever.co/Anthropic/e3cde481-d446-460f-b628-a65b3cf3fa3e' },
      { label: 'Bloomberg — "AI Prompt Engineer Jobs Pay up to $335,000 a Year" (Mar 2023)', url: 'https://www.bloomberg.com/news/articles/2023-03-29/ai-chatgpt-related-prompt-engineer-jobs-pay-up-to-335-000' }
    ]
  },
  {
    type: 'concept',
    title: 'What Good Prompt Engineering Looks Like',
    body: 'Professional prompt engineers at Anthropic, OpenAI and Google spend real time crafting, testing and iterating prompts — it\'s a recognised engineering discipline. The difference between a mediocre and excellent prompt can be the difference between wasted time and a genuinely useful result. Here are the habits they practise and that you can copy from this lesson onwards.',
    bullets: [
      { term: 'Specify the role', def: '"Act as a patient GCSE AQA tutor who explains things clearly and checks understanding before moving on" — role-setting is documented by Anthropic to measurably improve factual accuracy on specialist tasks.' },
      { term: 'Specify the exact output', def: 'Format, length, style, tone. "Under 250 words, numbered list, UK English, no jargon unless defined inline" — every constraint narrows and improves the response.' },
      { term: 'Anticipate problems', def: '"Don\'t include anything requiring university-level knowledge. If you need to use a technical term, define it in brackets." Good prompts pre-empt the failure modes you know the model has.' },
      { term: 'Build in quality checks', def: '"Flag anything you\'re not confident about with [check this]." This single line catches a large fraction of hallucinations before you commit to them.' },
      { term: 'Iterate deliberately', def: 'Test it, see where it falls short, refine one variable at a time. Dell\'Acqua et al. 2023 showed 3–5 iterations is the productivity sweet spot — fewer leaves quality on the table; more loses time to diminishing returns.' },
      { term: 'Save what works', def: 'Keep a "prompt library" — Notes app, Google Keep, Claude Projects or ChatGPT custom GPTs. A reusable great prompt is compound interest on your time.' }
    ],
    sources: [
      { label: 'Anthropic — Claude prompt engineering overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { label: 'OpenAI Cookbook — prompt engineering best practices', url: 'https://cookbook.openai.com/articles/related_resources' }
    ]
  },
  {
    type: 'activity',
    title: 'The Challenge — Choose One',
    task: 'Pick ONE task below and write the best possible prompt for it using the PTFC framework. In the notes box, write your full prompt including role, task, context, format, and constraints. Then — the crucial step — run it in an AI tool, read the output critically, and write the ONE improvement you\'d make for version 2.',
    steps: [
      'Task A: Get AI to create a revision quiz for a GCSE topic you\'re currently studying — include exam board, year group, sub-topic, and number of questions',
      'Task B: Get AI to give you detailed, useful feedback on an essay plan — paste the plan in, specify what kind of feedback (structure? evidence? argument?), and request mark-scheme-style commentary',
      'Task C: Get AI to explain the most difficult concept in your hardest subject in a way that finally makes sense to you — include why you\'ve struggled with it before',
      'Task D: Get AI to build you a 5-day revision plan for a subject you\'re weak in — include your target grade, hours per day, and current weakest topics',
      'The iteration step: after running your prompt, note what came back that was NOT useful. Rewrite the prompt to eliminate that noise. Run again. Compare the two outputs.'
    ],
    callout: 'Challenge: write version 2 so clearly that someone could hand it to any AI tool and get a useful response — without changing a word. Portable prompts are the mark of real prompt-engineering skill.'
  },
  {
    type: 'scenario',
    title: 'The Prompt Engineer Interview',
    situation: 'Fast forward: it\'s 2030. You\'re interviewing for an internship at a media company that uses AI throughout its workflow. The interviewer slides a laptop across the desk: "We need a prompt that turns any 2,000-word news article into a 60-second TikTok script in our house voice, flags any claims that need fact-checking, and works the same way for every writer on the team. You have 10 minutes." This isn\'t a trick question — this is literally the job.',
    question: 'Which approach most impresses the interviewer?',
    choices: [
      { text: 'Type a one-line prompt into ChatGPT and show them the result — speed matters.', outcome: 'Speed impresses nobody in a prompting-skill test. A one-line prompt will give inconsistent, off-voice output. The interviewer is looking for structured thinking — roles, constraints, quality checks — not typing speed.' },
      { text: 'Write a structured prompt with Role ("You are [Company]\'s TikTok script writer"), Task (3-beat script structure), Context (audience 16-24, house voice examples), Format (exact word count per beat), Constraints ("flag unverified claims with [CHECK]"), and a clear test protocol for the team to validate it.', outcome: 'Exactly the move. This is what a professional prompt engineer actually does — and it\'s the approach taught in Anthropic and OpenAI\'s official guides. Extra credit: suggest testing the prompt on 5 varied articles before rollout, and explain how you\'d iterate when the output drifts. You just demonstrated the skill the company is hiring for.' },
      { text: 'Ask the interviewer to write the prompt for you — "I\'ll just tweak theirs."', outcome: 'Confident move, wrong room. In a prompt-engineering interview, the prompt IS the work you\'re being hired to do. You\'ve just told them you can\'t do the job.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Prompt Engineering &amp; the Future of Work',
    questions: [
      { num: 1, text: 'Is prompt engineering a genuine new skill or a short-term workaround that will disappear as AI gets better at understanding vague questions? What\'s the evidence for each view?' },
      { num: 2, text: 'Senior prompt engineers at top AI firms were paid £200k–300k a year by 2024. If AI eventually prompts itself, what skill remains valuable — and is that what schools should be teaching?' },
      { num: 3, text: 'You\'ve now been taught a complete Unit 3 toolkit: prompting (L113), evaluation (L114), creativity boundaries (L115), automation judgement (L116), tool selection (L117) and professional-level prompting (this lesson). Which of these six skills do you think will matter most in the career you\'re heading toward — and why?' }
    ]
  },
  {
    type: 'quiz',
    question: 'What is the most effective way to improve an AI response that\'s too vague?',
    options: [
      'Try a completely different AI tool',
      'Ask the same question again in the same way',
      'Follow up with a specific instruction: "That\'s too general — focus only on [X] and give me concrete examples"',
      'Accept the response — AI can\'t do better than its first answer'
    ],
    correct: 2,
    explanation: 'Iteration is a core prompting skill. The first response is rarely the best. A specific follow-up that narrows the topic, requests a different format, or asks for examples usually produces a significantly more useful response than starting over or accepting a mediocre answer. Dell\'Acqua et al. (Wharton 2023) measured this: deliberate iteration produced output quality 40% above one-shot prompts.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🏆', label: 'Prompting is a learnable skill', text: 'it improves with deliberate practice — same as chess, piano or coding' },
      { icon: '🎯', label: 'Role, Task, Context, Format, Constraint', text: 'your five levers — use them like a professional' },
      { icon: '🔄', label: 'Always iterate', text: 'Wharton 2023: 3–5 iterations is the sweet spot; one-shot leaves value on the table' },
      { icon: '💾', label: 'Save your best prompts', text: 'compound interest on your time — a library of 10 great prompts saves hours every week' },
      { icon: '🚩', label: 'Build in quality checks', text: '"flag what you\'re unsure about" — catches hallucinations before they mislead you' },
      { icon: '💼', label: 'This is a professional skill', text: 'increasingly valued across every industry — and it\'s only your GCSE that gets to teach it early' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Unit 3 Recap',
    body: 'Three questions covering prompting, evaluation and creativity.',
    questions: [
      { q: 'Which five levers make up the anatomy of a strong prompt?', options: ['Length, formality, speed, topic, audience', 'Role / Task / Context / Format / Constraint', 'Question, fact, example, image, reference', 'Input, output, model, prompt, reply'], correct: 1, explanation: 'Role, Task, Context, Format, Constraint — the five levers taught in L113. You don\'t need all five every time, but the more precise you are, the less room for unhelpful guesses.' },
      { q: 'Why did Wharton\'s 2023 "jagged frontier" study find that some AI users produced WORSE work than people with no AI at all?', options: ['The AI was broken', 'They accepted the first draft without iteration', 'They used the wrong model', 'They typed too fast'], correct: 1, explanation: 'Dell\'Acqua et al. found that zero-iteration AI use degraded output. The benefit only appeared with 3+ deliberate iterations.' },
      { q: 'Under current UK and US law, who owns the copyright on a purely AI-generated image?', options: ['The person who wrote the prompt', 'The AI company that made the model', 'Nobody — purely AI-generated images are generally not protected by copyright (per US Copyright Office guidance)', 'The first person to publish it online'], correct: 2, explanation: 'The US Copyright Office\'s March 2023 guidance and subsequent decisions are clear: human authorship is required. Minor prompt selection alone does not qualify.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Unit 3 Exit Ticket',
    prompt: 'Write one PTFC-structured prompt you plan to use this week for an actual task. Include all four parts.',
    body: 'Saved to this device only. Come back and edit it any time.'
  }
];

/* ── UNIT 4: AI, Truth & Media ── */

SLIDES_GCSE[119] = [
  {
    type: 'hook',
    title: 'Deepfakes & Synthetic Media',
    body: 'In January 2024, thousands of US voters received robocalls from a fake AI-cloned voice of President Biden telling Democrats not to vote. The same month, a Hong Kong finance worker was tricked into transferring £20 million after a video call where every person on screen — including his CFO — was synthetic. Two days before Slovakia\'s 2023 election, an AI audio clip of an opposition leader "admitting" to rigging votes went viral during the legally mandated silence period when media couldn\'t respond. He lost.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">£20M</span><span class="sl">stolen via deepfake video call (Hong Kong, 2024)</span></div><div class="hook-stat-mini"><span class="sv">48hrs</span><span class="sl">before Slovakia\'s election — during legal media silence</span></div><div class="hook-stat-mini"><span class="sv">$6M</span><span class="sl">FCC fine for the Biden deepfake robocall</span></div><div class="hook-stat-mini"><span class="sv">38</span><span class="sl">countries targeted by election deepfakes in 2024</span></div></div>',
    callout: 'Deepfakes don\'t need to be believed by everyone — they just need to cause enough doubt, at the right moment, for the damage to be done.',
    sources: [
      { label: 'CNN — Hong Kong finance worker scammed out of $25M in deepfake video call (Feb 2024)', url: 'https://edition.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk/index.html' },
      { label: 'Wired — How an AI deepfake helped sway the Slovak election (Oct 2023)', url: 'https://www.wired.com/story/slovakias-election-deepfakes-show-ai-is-a-danger-to-democracy/' },
      { label: 'FCC — $6M fine proposed over Biden AI robocall (May 2024)', url: 'https://www.fcc.gov/document/fcc-proposes-6-million-fine-illegal-biden-robocalls' }
    ]
  },
  {
    type: 'concept',
    title: 'What Deepfakes Are and How They Work',
    bullets: [
      'AI trained on footage of a real person can replace their face or voice in any video or audio',
      'Modern tools need only a few seconds of audio to convincingly clone a voice',
      'The technology is available to anyone — no technical skills required',
      'Not just video: AI can generate realistic fake images and audio clips from scratch',
      'The quality is improving rapidly — many fakes are now indistinguishable without technical analysis'
    ]
  },
  {
    type: 'concept',
    title: 'The Harm They Cause',
    bullets: [
      { term: 'Reputation damage', def: 'Fake videos of real people saying things they never said' },
      { term: 'Non-consensual intimate images', def: 'The most prevalent misuse — illegal in the UK under the Online Safety Act' },
      { term: 'Political manipulation', def: 'Fake speeches and statements from politicians' },
      { term: 'Legal evidence', def: 'Courts and police must now verify whether footage is genuine' },
      { term: 'Personal harassment', def: 'Used to target individuals, including students' }
    ]
  },
  {
    type: 'concept',
    title: 'Protecting Yourself — What Actually Works',
    bullets: [
      { term: 'Check the source first', def: 'A new account, no history, no verification badge — all red flags before you even watch the content' },
      { term: 'Lateral reading', def: 'Immediately search what credible outlets (BBC, Reuters) say about the claim — not what the video says about itself' },
      { term: 'The liar\'s dividend', def: 'Deepfakes don\'t just spread lies — they let people dismiss real evidence as "probably fake". This undermines all trust in video' },
      { term: 'C2PA standard', def: 'A new technical standard backed by Adobe, Google and Microsoft that embeds a verified "content passport" in authentic media' },
      { term: 'UK law', def: 'The Online Safety Act 2023 makes sharing non-consensual intimate deepfakes illegal in the UK, with up to 2 years imprisonment' }
    ],
    callout: 'Free online deepfake detectors achieve only 65–85% accuracy. Don\'t rely on them — source verification is more reliable than trying to "spot" the fake.'
  },
  {
    type: 'activity',
    title: 'Visual Clues to Look For',
    task: 'When reviewing suspicious video or images, these are the signs to check. In the notes box, note which you think would be hardest to spot in a high-quality fake.',
    steps: [
      'Unnatural blinking patterns or eye movement',
      'Blurring or inconsistency at the hairline and jawline edges',
      'Lighting that doesn\'t match between the face and background',
      'Mouth movements that don\'t quite sync with the words',
      'Skin texture that looks too smooth or inconsistent'
    ],
    callout: 'Important: high-quality deepfakes defeat these checks. Context and source matter more: who shared it? Can you find an established news source covering it?'
  },
  {
    type: 'scenario',
    title: 'The Viral Video',
    situation: 'You have 3,500 followers on social media interested in local news. At 11pm, a video appears showing your local MP "admitting" to accepting bribes. It already has 400,000 views. Your friends are telling you to share it. The video looks convincing — good lighting, realistic voice. But the source account was created four days ago and has no other posts.',
    question: 'What do you do?',
    choices: [
      { text: 'Share immediately — 400K people can\'t all be wrong, and this is too important to ignore', outcome: 'By morning, the video is confirmed as a deepfake. Your name appears in coverage of accounts that spread the disinformation. You\'ve lost followers and your credibility on local issues is damaged. Your share added 2,000 views before removal.' },
      { text: 'Search the MP\'s name on BBC News and Reuters. Find nothing. Wait 30 minutes before deciding.', outcome: 'A Reuters fact-check appears 20 minutes later confirming it\'s AI-generated audio spliced onto stock footage. You share the fact-check instead. Your followers thank you for responsible sourcing and your credibility improves.' },
      { text: 'Share with a caption: "Unverified — possibly fake. Sharing for discussion."', outcome: 'Your caveat gets stripped as people screenshot and reshare the original video without it. You still contributed to its spread. The platform logs your account as part of a disinformation amplification chain.' }
    ]
  },
  {
    type: 'quiz',
    question: 'A convincing audio clip of a politician surfaces on social media two days before an election. The posting account was created yesterday. What is the most reliable first step?',
    options: [
      'Listen carefully — your ears can usually detect AI-generated speech',
      'Run it through a free online deepfake detector',
      'Check whether BBC, Reuters or other established outlets have independently verified the audio',
      'Share it with a "possibly fake" warning so others can judge'
    ],
    correct: 2,
    explanation: 'Audio deepfakes can be created from seconds of real audio and are very hard to detect by ear. Free detectors achieve only 65–85% accuracy. Sharing with a caveat still amplifies the content. Lateral reading — checking whether credible outlets have covered the story — is the most reliable step.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚠️', label: 'Deepfakes are increasingly easy to make', text: 'free tools, no technical skills, from a single photo or seconds of audio' },
      { icon: '⚖️', label: 'Non-consensual deepfakes are illegal in the UK', text: 'Online Safety Act — up to 2 years imprisonment' },
      { icon: '🔍', label: 'Source verification beats visual spotting', text: 'check who posted it and what credible outlets say' },
      { icon: '⏸️', label: 'The liar\'s dividend', text: 'deepfakes make ALL evidence less trusted — that\'s the real long-term harm' }
    ]
  }
];

SLIDES_GCSE[120] = [
  {
    type: 'hook',
    title: 'Spotting AI-Generated Content',
    body: 'A study found that nearly 40% of articles on some websites are now partially or fully AI-generated. Most readers can\'t tell the difference. But there are patterns — and once you know them, you\'ll see them everywhere.',
    callout: 'The real skill isn\'t running things through a detector. It\'s developing critical reading that works whether a tool exists or not.'
  },
  {
    type: 'concept',
    title: 'Why Spotting AI Text Is Hard',
    bullets: [
      'AI text detectors exist but are unreliable — high false-positive rates (flag real human writing as AI)',
      'Skilled prompt engineers can make AI output that passes most detection tools',
      'The "correct" question isn\'t always whether it\'s AI — it\'s whether the content is accurate',
      'AI images have improved dramatically — obvious artefacts are much rarer than before'
    ]
  },
  {
    type: 'concept',
    title: 'Signs of AI-Generated Text',
    bullets: [
      'Overly formal and balanced — rarely takes a firm position on anything',
      'Generic examples that sound plausible but are vague and unspecific',
      'Filler phrases: "It is important to note...", "In conclusion, it is clear that..."',
      'Very structured — headers, bullet points, numbered lists for everything',
      'No personal voice, no specific memories or experiences',
      'Comprehensively superficial — covers everything at surface level, nothing in real depth'
    ]
  },
  {
    type: 'activity',
    title: 'AI or Human?',
    task: 'Read each text below. In the notes box, decide: AI-written or human-written? Explain your reasoning.',
    steps: [
      'Text A: "The impact of social media on mental health is multifaceted and has been the subject of significant academic debate. While some studies suggest negative effects, others point to positive community-building aspects. It is important to consider the nuanced relationship between usage patterns and wellbeing outcomes."',
      'Text B: "I deleted Instagram for three months last year. Honestly, I thought I\'d feel liberated, but mostly I just felt left out. Turns out the problem wasn\'t the app — it was that all my friends were still on it and stopped inviting me to things."'
    ],
    reveal: '<strong>Text A:</strong> very likely AI — balanced, formal, hedged, vague, no personal voice.<br><strong>Text B:</strong> very likely human — personal, specific, contradicts its own expectations, has a real point of view.'
  },
  {
    type: 'concept',
    title: 'Case Study — Four Viral AI Images You Probably Saw',
    body: 'These are real images that fooled real people at scale. Each teaches a different lesson about what to look for.',
    bullets: [
      { term: 'Balenciaga Pope (Mar 2023)', def: 'An AI image of Pope Francis in a white Balenciaga puffer jacket went viral on Reddit and Twitter with 20m+ views. Most viewers believed it was real for days. Tell: fingers blurred into the coffee cup, glasses distorted at the temple, crucifix chain dissolving into fabric.' },
      { term: 'Pentagon "explosion" (May 2023)', def: 'A fake AI image of smoke rising near the Pentagon briefly knocked the S&P 500 down 0.3% (about $500bn in market cap) before being debunked. Tell: the building architecture didn\'t match real Pentagon imagery; fence posts merged into each other.' },
      { term: 'Trump arrest images (Mar 2023)', def: 'Eliot Higgins of Bellingcat generated photorealistic images of Donald Trump being arrested — to demonstrate Midjourney\'s capability. The images were shared as genuine by millions. Tell: extra fingers, inconsistent police badges, warped faces of officers.' },
      { term: 'Taylor Swift deepfakes (Jan 2024)', def: 'Non-consensual explicit AI images spread to 47m views on X before the platform blocked searches for her name for 24 hours. Led to bipartisan DEFIANCE Act in the US Senate and the UK adding deepfake-creation offences to the Online Safety Act in 2024.' },
      { term: 'The pattern', def: 'Speed of virality beats speed of correction. By the time verification catches up, the belief is already formed. This is why pre-bunking (lesson 122) matters more than debunking.' }
    ],
    sources: [
      { label: 'BBC (Jan 2024) — Taylor Swift deepfakes spur US and UK legal response', url: 'https://www.bbc.co.uk/news/technology-68110476' },
      { label: 'AP News (May 2023) — Fake Pentagon explosion image causes brief stock dip', url: 'https://apnews.com/article/pentagon-explosion-misinformation-stock-market-ai-96f534c790872fde67012ee81b5ed6a4' },
      { label: 'UK Online Safety Act 2023 / 2024 amendments — deepfake offences', url: 'https://www.gov.uk/government/news/government-cracks-down-on-deepfakes-creation' }
    ]
  },
  {
    type: 'scenario',
    title: 'The "Expert Review" Blog',
    situation: 'You\'re researching the best revision apps for GCSE. You find a blog that tops Google\'s results: "TOP 10 REVISION APPS REVIEWED BY STUDENTS." Every app gets between 4.5 and 4.8 stars. Each review is exactly 180 words. Every entry has the same structure: "Overview, Key Features, Pros, Cons, Verdict." There\'s an affiliate link on every app.',
    question: 'Do you trust this blog\'s recommendations?',
    choices: [
      { text: 'Yes — it\'s ranked #1 on Google and covers everything in depth.', outcome: 'You download the top app. It\'s full of intrusive ads. You realise the "reviews" are identical-structure AI content optimised for Google, not for you. The affiliate link paid the blog a commission for your download.' },
      { text: 'No — the signs are all there: suspiciously uniform length and structure, no personal voice, no specific memory of using the app, affiliate links on every entry. Find actual student reviews on Reddit or TikTok.', outcome: 'You find three genuine student reviews on r/GCSE — each is different length, with specific complaints ("crashes on Samsung tablets") and specific praise. You pick an app that genuinely suits you. You also start noticing AI-generated "review" blogs everywhere.' },
      { text: 'Maybe — but rely on the star ratings since those summarise everyone\'s view.', outcome: 'Those ratings aren\'t from real users — the blog made them up. Star ratings from a source you don\'t trust are meaningless. Origin of the ratings matters as much as the ratings themselves.' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which is the most reliable way to deal with a piece of content you suspect is AI-generated?',
    options: [
      'Run it through an AI detection tool — they\'re highly accurate',
      'Look for spelling mistakes — AI always makes them',
      'Evaluate the accuracy and source regardless of origin — the key question is whether it\'s correct and credible',
      'Reject it entirely — AI content is always unreliable'
    ],
    correct: 2,
    explanation: 'AI detection tools have accuracy rates of 39–76% — not reliable enough to use as evidence. AI doesn\'t reliably make spelling mistakes. The most useful question is always: is this accurate, and what is the source? Origin matters less than accuracy and credibility.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📝', label: 'AI text is structured but lacks personal voice', text: 'vague, balanced, filler-heavy' },
      { icon: '🔍', label: 'Detection tools are unreliable', text: 'develop your own critical reading instead' },
      { icon: '❓', label: 'Accuracy matters more than origin', text: 'the real question is: is it correct?' },
      { icon: '👁️', label: 'Strong source evaluation', text: 'matters more than AI-spotting alone' }
    ]
  }
];

SLIDES_GCSE[121] = [
  {
    type: 'hook',
    title: 'Misinformation & AI',
    body: 'A false story travels 6 times faster on social media than a true one — and reaches 10 times more people before any correction appears. AI is dramatically accelerating both the creation and the spread of misinformation. During COVID-19, false cures and conspiracy theories spread so fast that the WHO declared an "infodemic" — a pandemic of misinformation running alongside the real one.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">6×</span><span class="sl">faster than truth — false stories spread on social media (MIT study)</span></div><div class="hook-stat-mini"><span class="sv">10×</span><span class="sl">more reach before any correction appears</span></div><div class="hook-stat-mini"><span class="sv">70%</span><span class="sl">of retweets spread false news faster than corrections ever catch up</span></div><div class="hook-stat-mini"><span class="sv">AI</span><span class="sl">can generate thousands of convincing fake articles in minutes</span></div></div>',
    callout: 'This isn\'t just a media problem. It affects elections, public health, and what ordinary people believe about their communities.',
    sources: [
      { label: 'Vosoughi, Roy & Aral — "The spread of true and false news online", Science (2018)', url: 'https://www.science.org/doi/10.1126/science.aap9559' },
      { label: 'WHO — Infodemic management (COVID-19)', url: 'https://www.who.int/health-topics/infodemic' }
    ]
  },
  {
    type: 'concept',
    title: 'Why Misinformation Spreads',
    bullets: [
      { term: 'Emotional content gets shared', def: 'Outrage, fear, surprise, and joy make us share before we check' },
      { term: 'Confirmation bias', def: 'We share things that confirm what we already believe — without questioning them' },
      { term: '"Being first" feels good', def: 'Sharing breaking news feels important — even if the story hasn\'t been verified' },
      { term: 'Algorithms amplify it', def: 'Engaging (emotional) content gets promoted — regardless of accuracy' }
    ]
  },
  {
    type: 'concept',
    title: 'How AI Makes This Worse',
    bullets: [
      { term: 'Speed and scale', def: 'AI can generate thousands of convincing fake articles in minutes' },
      { term: 'Personalisation', def: 'AI can tailor false stories to individual belief systems and communities' },
      { term: 'Synthetic media', def: 'Fake images and video make false stories far more believable' },
      { term: 'Lower cost', def: 'Creating convincing fake content used to require resources and skills — now it doesn\'t' },
      { term: 'AI chatbots', def: 'Can inadvertently repeat false claims when asked about contested topics' }
    ]
  },
  {
    type: 'concept',
    title: 'The Illusory Truth Effect',
    body: 'Psychologists have shown that repeated exposure to a statement makes us believe it — even when we initially knew it was false. AI-powered misinformation exploits this at industrial scale.',
    bullets: [
      { term: 'The mechanism', def: 'Your brain mistakes familiarity for truth. The more you\'ve seen a claim, the "truer" it feels — regardless of evidence.' },
      { term: 'Why it matters now', def: 'AI lets bad actors repeat the same false claim in thousands of slightly different articles, videos and comments — bypassing the protections that individual fact-checks provide.' },
      { term: 'Even knowing about it doesn\'t immunise you', def: 'Studies show warnings reduce but don\'t eliminate the effect. Repetition still shifts belief.' },
      { term: 'Corrections rarely catch up', def: 'False claims spread fast. Corrections reach fewer people — and people who saw the original often never see the correction.' }
    ],
    callout: 'This is why "I saw it somewhere" feels like evidence to us. It isn\'t. Repetition is not verification.'
  },
  {
    type: 'concept',
    title: 'AI at Industrial Scale — Elections 2024',
    body: 'The 2024 election year was the first time AI-generated political content operated at serious global scale. Researchers catalogued what happened — and who it targeted.',
    bullets: [
      { term: 'Taiwan 2024', def: 'Stanford Internet Observatory documented networks of 800+ coordinated AI-generated accounts seeding narratives during the presidential election.' },
      { term: '38 countries', def: 'Recorded Future identified AI-generated electoral interference content targeting 38 democracies in 2024 alone.' },
      { term: 'Still mostly cheap fakes', def: 'Harvard\'s Ash Center found crude manipulations — slowed video, out-of-context clips, misleading captions — were 7× more prevalent than AI-generated content. Both matter.' },
      { term: 'Paid AI political ads', def: 'Over 900 AI-generated political adverts ran on Facebook in US swing states in a single week in 2024.' }
    ],
    sources: [
      { label: 'Stanford Internet Observatory — Taiwan 2024 election influence operations (DFR Lab partner reporting)', url: 'https://cyber.fsi.stanford.edu/io/' },
      { label: 'Harvard Ash Center / Kennedy School — "Generative AI and the 2024 U.S. Election" (Allen Lab / Schneier, 2024)', url: 'https://ash.harvard.edu/articles/how-ai-threatens-democracy/' },
      { label: 'Recorded Future — Insikt Group reports on AI-enabled influence operations (2024)', url: 'https://www.recordedfuture.com/research' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'When you\'re about to share something online — what\'s your actual process for deciding whether it\'s true?' },
      { num: 2, text: 'Should social media platforms be legally responsible for misinformation that spreads on them?' },
      { num: 3, text: 'If you share something false by accident and it reaches hundreds of people, are you responsible for the harm?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Why does false news spread faster than true news on social media?',
    options: [
      'Algorithms are programmed to prioritise false stories',
      'False stories are usually shorter and easier to read',
      'False stories tend to trigger stronger emotions — outrage, fear, surprise — which drives sharing',
      'People deliberately share content they know is false'
    ],
    correct: 2,
    explanation: 'MIT research found false news spreads 6× faster because it is typically more novel and emotionally stimulating — triggering outrage, fear, or surprise. These emotions drive sharing before checking. Algorithms then amplify emotional content because it generates more engagement.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📢', label: 'False content spreads faster than corrections', text: 'always' },
      { icon: '🤖', label: 'AI lowers the cost of fake content', text: 'speed, scale, personalisation' },
      { icon: '💡', label: 'Emotional content is a red flag', text: 'designed to make you share before you think' },
      { icon: '⏸️', label: 'Pause before sharing', text: 'one check can stop a false story reaching hundreds more people' }
    ]
  }
];

SLIDES_GCSE[122] = [
  {
    type: 'hook',
    title: 'Fact-Checking in the AI Age',
    body: 'You can verify almost any claim in under 2 minutes using free tools. Most people just don\'t bother. That\'s exactly where misinformation gets its power — from the gap between "looks true" and "is true".',
    callout: 'Fact-checking isn\'t a talent. It\'s a habit. And habits are built through practice.'
  },
  {
    type: 'concept',
    title: 'The SIFT Method',
    bullets: [
      { term: 'S — Stop', def: 'Pause before sharing or believing. Notice your emotional reaction — that\'s a sign to slow down, not speed up.' },
      { term: 'I — Investigate the source', def: 'Who made this? What\'s their agenda? Are they a known credible outlet?' },
      { term: 'F — Find better coverage', def: 'Search for what other sources report about this claim — don\'t just evaluate on the original page' },
      { term: 'T — Trace claims', def: 'Find the original source of statistics, quotes, images — a claim cited 100 times may trace back to one shaky origin' }
    ],
    callout: 'SIFT doesn\'t require expertise — it requires a habit. Practise it until it\'s automatic.'
  },
  {
    type: 'concept',
    title: 'Lateral Reading — The Expert Technique',
    body: 'Fact-checkers don\'t evaluate a source on its own page. They immediately open new tabs to see what others say about it.',
    bullets: [
      'Open a new tab and search: [source name] + "credibility" or "bias"',
      'UK fact-checkers: Full Fact, BBC Reality Check, Reuters Fact Check',
      'Reverse image search: find the original context of a suspicious image (Google Images, TinEye)',
      'For AI-generated claims: find the primary source — don\'t accept AI citations without checking'
    ]
  },
  {
    type: 'concept',
    title: 'Pre-bunking — Stronger Than Debunking',
    body: 'Once you\'ve seen a false claim, correcting it is surprisingly weak — the "illusory truth" effect has already done some of its work. What psychologists have found is that <em>teaching people the manipulation tactic before they meet it</em> builds real resistance.',
    bullets: [
      { term: 'The Jigsaw / Google study (2022)', def: 'Two-minute videos teaching specific manipulation tactics (scapegoating, emotional hijack, false dichotomy) produced a measurable 20% reduction in people\'s susceptibility — tested across millions of YouTube views.' },
      { term: 'Why it works', def: 'You\'re inoculated against a technique, not just one specific claim. When you then meet that tactic in the wild, you recognise it.' },
      { term: 'What this means for you', def: 'Consuming media-literacy content isn\'t a waste of time. Every "how scams work" explainer you watch quietly trains your filter.' },
      { term: 'Pair it with SIFT', def: 'Pre-bunking builds the reflex; SIFT gives you the step-by-step when the reflex fires.' }
    ],
    sources: [
      { label: 'Roozenbeek, J., van der Linden, S., et al. — "Psychological inoculation improves resilience against misinformation on social media" (Science Advances, 2022)', url: 'https://www.science.org/doi/10.1126/sciadv.abo6254' },
      { label: 'Jigsaw (Google) — Prebunking campaign results with Google Jigsaw and University of Cambridge', url: 'https://jigsaw.google.com/the-current/misinformation/prebunking/' }
    ]
  },
  {
    type: 'widget',
    widget: 'factcheck',
    title: 'Fact-Check Simulator — SIFT in Action',
    intro: 'Work the claim below through all four SIFT steps. Write your own answers, then reveal the expert verdict to compare.',
    claim: 'Scientists have proven that using your phone before bed has no effect on sleep quality.',
    steps: [
      { question: 'S — Stop. What\'s your gut reaction to this claim, and why?', hint: 'Emotional pull (relief, surprise, outrage) is a flag to slow down, not a signal it\'s true.' },
      { question: 'I — Investigate the source. Who might say this, and what agenda could they have?', hint: 'Think about who benefits if this claim is believed.' },
      { question: 'F — Find better coverage. What exact search would you run to see what other sources report?', hint: 'Try a lateral-reading query: the claim itself plus the word "study" or "evidence".' },
      { question: 'T — Trace the claim. What is "Scientists have proven" actually doing in this sentence?', hint: 'Real science rarely "proves" anything definitively — it finds evidence, with caveats.' }
    ],
    verdict: '"Scientists have proven" is a red-flag phrase — real science publishes evidence with uncertainty, not proof. The claim also contradicts a substantial peer-reviewed body of work linking late-evening screen use, blue light exposure and sleep-onset latency. A 30-second lateral-reading check (Full Fact / BBC Reality Check / Reuters Fact Check) will show no such consensus exists. <strong>Verdict:</strong> misleading.'
  },
  {
    type: 'quiz',
    question: 'In the SIFT method, what does "F — Find better coverage" mean?',
    options: [
      'Find a more detailed version of the same article',
      'Find the article with the most shares or likes',
      'Search for what other independent sources say about the same claim — don\'t evaluate it on the original page alone',
      'Find the original author\'s social media profile'
    ],
    correct: 2,
    explanation: 'Lateral reading — what fact-checkers actually do — means immediately leaving the source page and searching for what other credible outlets report about the same claim. A claim cited thousands of times may trace back to one unreliable origin. Never judge a source solely from its own page.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔍', label: 'SIFT: Stop, Investigate, Find, Trace', text: 'a 2-minute habit that works on any claim' },
      { icon: '↔️', label: 'Lateral reading', text: 'look at what others say about a source, not just the source itself' },
      { icon: '🇬🇧', label: 'UK fact-checkers', text: 'Full Fact, BBC Reality Check, Reuters Fact Check' },
      { icon: '✅', label: 'Verification is a habit', text: 'not a talent — practice builds it automatically' }
    ]
  }
];

SLIDES_GCSE[123] = [
  {
    type: 'hook',
    title: 'Filter Bubbles & Algorithms',
    body: 'Activist Eli Pariser coined "filter bubble" in 2011 after noticing his Facebook feed had quietly dropped his conservative friends without asking him. Today, Reuters Institute\'s 2024 Digital News Report found that only 22% of UK 18–24s pay for any news — the rest get it from algorithmic feeds that personalise what they see. Two people can search the exact same thing on Google and see completely different results. Your algorithm has built you a personalised version of the internet — and you might not know how narrow it\'s become.',
    callout: 'A filter bubble isn\'t something that happens to other people. It\'s happening to all of us — including you.',
    sources: [
      { label: 'Pariser, E. (2011) — The Filter Bubble: TED Talk (also book, Penguin 2011)', url: 'https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles' },
      { label: 'Reuters Institute Digital News Report (2024) — UK chapter', url: 'https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024/uk' }
    ]
  },
  {
    type: 'concept',
    title: 'How Recommendation Algorithms Work',
    bullets: [
      'Every click, watch, like, hover, and pause is tracked and fed back into the model',
      'The algorithm predicts: "Given this user\'s behaviour, what content will keep them engaged longest?"',
      'It optimises for engagement — not for accuracy, balance, or your wellbeing',
      'Creates a feedback loop: you see more of what you\'ve already engaged with',
      'Your "For You" page isn\'t for you — it\'s for the platform\'s engagement metrics'
    ]
  },
  {
    type: 'concept',
    title: 'What Filter Bubbles Hide',
    bullets: [
      'You stop seeing content that challenges your existing views',
      'You stop seeing news that your algorithm thinks you\'ll ignore',
      'Your sense of what\'s "normal" gets shaped by a narrow sample',
      'You may think your view is shared by everyone — because your feed agrees with you',
      'Political filter bubbles affect how people understand entirely different communities'
    ]
  },
  {
    type: 'scenario',
    title: 'Two Feeds, Same Event',
    situation: 'A major news story breaks about a change to UK voting rules. Two friends in the same class check TikTok at the same time. Friend A sees six videos — all framing the change as a dangerous attack on democracy. Friend B sees six videos — all framing it as a sensible reform against fraud. They argue over lunch and can\'t understand why the other seems so "badly informed."',
    question: 'What\'s actually happening here?',
    choices: [
      { text: 'One friend is right and the other is wrong — the facts will sort this out.', outcome: 'The "facts" aren\'t in dispute. The framing is. Both friends have been shown true statements selected to produce opposite emotional responses. Neither is "wrong" — but neither has seen the full picture either.' },
      { text: 'Their algorithms have built two different realities based on prior engagement — and both friends are now sampling a narrow slice of the debate, not the debate itself.', outcome: 'Exactly. The algorithms optimised for engagement based on their past behaviour. Neither has seen what the other has seen. To understand the full picture they need to deliberately seek the other side — search Reuters or BBC coverage, read the original government statement, look for sceptics of both framings.' },
      { text: 'TikTok is a bad place to get news — they should only use Instagram or YouTube.', outcome: 'The problem isn\'t the platform — every algorithmic feed (Instagram, YouTube, X, even Google Search) personalises. Switching platforms just changes which filter bubble you\'re in. The solution is awareness plus deliberate diversification, not platform swapping.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'Should algorithms show you what you want to see, or what\'s true and diverse — even if it\'s less engaging?' },
      { num: 2, text: 'Can you think of a topic where your social media feed only shows you one side of the argument?' },
      { num: 3, text: 'Who should be responsible for filter bubbles — the platform, the algorithm designers, or you?' }
    ]
  },
  {
    type: 'quiz',
    question: 'What does a recommendation algorithm primarily optimise for?',
    options: [
      'Showing you the most accurate and balanced information available',
      'Showing you content that keeps you on the platform as long as possible',
      'Showing you content from people you personally know and trust',
      'Rotating content fairly between all creators equally'
    ],
    correct: 1,
    explanation: 'Recommendation algorithms optimise for engagement — specifically time spent on the platform — because that drives advertising revenue. Accuracy, balance, and your wellbeing are not part of the objective. This is why emotionally stimulating content (outrage, envy, fear) gets promoted over calm, balanced content.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔄', label: 'Algorithms optimise for engagement', text: 'not your knowledge or wellbeing' },
      { icon: '🫧', label: 'Filter bubbles narrow your world view', text: 'gradually and invisibly' },
      { icon: '🌍', label: 'Actively seek out what the algorithm hides', text: 'follow diverse sources deliberately' },
      { icon: '💡', label: 'Awareness changes behaviour', text: 'knowing the algorithm exists gives you more control over it' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Unit 4 Recap',
    body: 'Three questions on deepfakes, misinformation and the algorithm.',
    questions: [
      { q: 'Why does false news spread measurably faster than true news on social media (Vosoughi et al., Science 2018)?', options: ['Because it is written by bots', 'Because humans share novel, emotionally charged stories faster than mundane true ones — the algorithm then amplifies that', 'Because platforms translate it into more languages', 'Because it gets more editorial promotion'], correct: 1, explanation: 'The MIT study found human behaviour — not bots — was the main driver, because novelty and strong emotion trigger more sharing.' },
      { q: 'In 2024, a finance worker in Hong Kong transferred £20M after a video call with the "CFO". What actually happened?', options: ['Normal fraud — no AI involved', 'The entire video call was a deepfake: every "colleague" on the call was AI-generated', 'The CFO really ordered it but blamed AI', 'The money was never actually moved'], correct: 1, explanation: 'The victim believed they were on a call with multiple real colleagues. Every other participant was a real-time deepfake (CNN, Feb 2024).' },
      { q: 'Which is the most effective personal defence against recommendation-algorithm drift?', options: ['Only use private browsing', 'Delete all apps', 'Deliberately and repeatedly tell the platform what you don\'t want (mute, not-interested, unfollow) and diversify what you do follow', 'Trust the default feed'], correct: 2, explanation: 'The algorithm responds to signals. Passive use lets it drift toward whatever keeps most users watching — typically outrage and insecurity. Active signals pull it back.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Unit 4 Exit Ticket',
    prompt: 'Name one specific behaviour change you will make to the way you interact with social media or AI-generated content this week.',
    body: 'Saved to this device only. Come back and edit it any time.'
  }
];

/* ── UNIT 5: AI, Society & Ethics ── */

SLIDES_GCSE[124] = [
  {
    type: 'hook',
    title: 'Who Benefits from AI?',
    body: 'The AI industry is worth over $1 trillion. Around 90% of global AI investment goes to just three countries: the US, China, and the UK. Meanwhile, 2.6 billion people have no internet access at all. Most advanced AI tools work primarily in English — meaning non-English speakers globally get dramatically less value. AI diagnostic tools trained on Western patient data perform measurably worse on patients from Africa and Asia.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">2.6bn</span><span class="sl">people have no internet access — the foundation AI needs</span></div><div class="hook-stat-mini"><span class="sv">90%</span><span class="sl">of AI investment concentrated in just 3 countries</span></div><div class="hook-stat-mini"><span class="sv">7,000+</span><span class="sl">languages in the world — AI works well in fewer than 100</span></div><div class="hook-stat-mini"><span class="sv">Worse</span><span class="sl">diagnostic AI performs measurably worse on under-represented populations</span></div></div>',
    callout: 'Powerful technology doesn\'t automatically benefit everyone equally. Who gets access — and who gets left out — is one of the defining questions of the AI era.',
    sources: [
      { label: 'ITU — Facts and Figures 2023 (2.6 billion offline)', url: 'https://www.itu.int/itu-d/reports/statistics/facts-figures-2023/' },
      { label: 'Stanford AI Index Report 2024 (AI investment by country)', url: 'https://aiindex.stanford.edu/report/' }
    ]
  },
  {
    type: 'concept',
    title: 'The Digital Divide — Who\'s Included',
    bullets: [
      'Access to AI requires: reliable internet, electricity, a device, and often payment',
      'Around 2.6 billion people still have no internet access at all',
      'Most advanced AI tools are primarily in English — non-English speakers have far less access',
      'AI training data over-represents wealthy, Western, English-speaking perspectives',
      'This means AI often works worse for people it under-represents in training'
    ]
  },
  {
    type: 'concept',
    title: 'Who\'s Being Left Out — and What It Means',
    bullets: [
      { term: 'Healthcare AI', def: 'Trained mostly on Western patient data — performs worse on other populations' },
      { term: 'Speech recognition', def: 'Works better for standard accents — many regional UK accents are regularly misrecognised' },
      { term: 'Facial recognition', def: 'Significantly higher error rates for darker-skinned faces — documented in multiple studies' },
      { term: 'Rural communities', def: 'May not benefit from AI health tools, educational support, or economic opportunities' },
      { term: 'Global inequality', def: 'The AI productivity boom may widen the gap between rich and developing nations' }
    ]
  },
  {
    type: 'concept',
    title: 'The Hidden Costs — Who Pays So You Can Use AI',
    body: 'Every time you use ChatGPT, Gemini, or Claude, resources and labour were expended somewhere. Those costs fall overwhelmingly on people who aren\'t using the tools themselves.',
    bullets: [
      { term: 'Energy', def: 'Training GPT-3 used an estimated 1,287 MWh — roughly the annual electricity of 120 US households. GPT-4 is estimated at 50–100 GWh. Retraining cycles multiply this.' },
      { term: 'Water', def: 'Evaporative cooling in data centres consumes millions of litres a year. Microsoft\'s global water use rose 34% in the year it deployed GPT-4 — often drawn from water-scarce regions.' },
      { term: 'Content-moderation labour', def: 'Every commercial AI assistant\'s safety filters were built by outsourced workers, largely in the Global South, reviewing harmful content for hours at a time.' },
      { term: 'A named case', def: 'TIME\'s 2023 investigation found OpenAI\'s Kenyan contractors were paid $1.32–$2/hour for this work, with many reporting PTSD-like symptoms. Sama ended the contract citing worker welfare.' }
    ],
    callout: 'This is not history. Every major AI company still relies on similar supply chains, right now, to make its products usable and safe.',
    sources: [
      { label: 'Perrigo, B. — "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic" (TIME, 18 Jan 2023)', url: 'https://time.com/6247678/openai-chatgpt-kenya-workers/' },
      { label: 'Microsoft — 2023 Environmental Sustainability Report (34% water increase)', url: 'https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report' },
      { label: 'Patterson, D. et al. — "Carbon Emissions and Large Neural Network Training" (Google/UC Berkeley, 2021)', url: 'https://arxiv.org/abs/2104.10350' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'Should wealthy countries that develop AI have an obligation to share its benefits more equitably?' },
      { num: 2, text: 'If AI makes some economies dramatically more productive, what happens to those it bypasses entirely?' },
      { num: 3, text: 'What could make AI development more globally representative — in the data, the teams, and the tools?' }
    ]
  },
  {
    type: 'widget',
    title: 'Where Would You Put £100 Million?',
    intro: 'You\'ve been handed £100m to direct at AI investment. Tick the <em>three</em> you\'d fund. There\'s no right answer — but your choices reveal what you think "benefit" means, and who should get it.',
    widget: 'feed-audit',
    items: [
      { label: 'Open-source translation for 100+ under-served languages', desc: 'Masakhane, Lelapa and similar African NLP groups build models that actually work for Swahili, Yoruba, Amharic — languages big AI companies often skip' },
      { label: 'AI for medical diagnosis in rural clinics', desc: 'Train diagnostic tools on local patient data, so they work as well in Lagos or Lima as they do in London' },
      { label: 'UK frontier-model safety research', desc: 'Fund AISI (the UK AI Safety Institute) to evaluate risks from the most capable AI systems before they\'re widely deployed' },
      { label: 'Scholarships for AI-ethics researchers from under-represented regions', desc: 'The people most affected by biased AI should be setting the research agenda, not just reviewing finished products' },
      { label: 'AI literacy for every UK secondary school', desc: 'Every student gets what you\'re doing now — so the next generation can tell when AI is helping them vs. manipulating them' },
      { label: 'A UK national compute cluster for academic researchers', desc: 'Right now only the big US labs can train frontier models. This would let universities actually do competitive research.' },
      { label: 'Solar-powered micro data centres for off-grid communities', desc: 'Bring AI usefulness to the 2.6bn people currently offline — without waiting for them to come online' },
      { label: 'AI accessibility tools for disabled people', desc: 'Live captioning, navigation for blind users, communication tools for non-verbal people — where AI can change a life, not just a workflow' }
    ]
  },
  {
    type: 'quiz',
    question: 'Why do AI healthcare tools often perform worse for patients from certain parts of the world?',
    options: [
      'The tools deliberately exclude some populations',
      'Those populations don\'t have the diseases the AI was designed to detect',
      'Training data is predominantly from Western populations, so the AI performs worse on under-represented groups',
      'Healthcare AI is equally accurate for all populations globally'
    ],
    correct: 2,
    explanation: 'AI systems learn from their training data. If that data over-represents certain demographics (typically Western, lighter-skinned populations), the system performs measurably worse on everyone else. This isn\'t intentional discrimination — it\'s a direct result of who the data was collected from.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🌍', label: 'AI development is geographically concentrated', text: 'a few wealthy nations dominate' },
      { icon: '📡', label: 'Access is unequal', text: '2.6 billion people have no internet at all' },
      { icon: '⚠️', label: 'AI works worse for under-represented groups', text: 'training data bias has real consequences' },
      { icon: '⚖️', label: 'Benefits don\'t distribute automatically', text: 'access and equity require deliberate effort' }
    ]
  }
];

SLIDES_GCSE[125] = [
  {
    type: 'hook',
    title: 'Bias In, Bias Out',
    body: 'In January 2020, Robert Williams was arrested in front of his daughters on his front lawn in Detroit. He spent 30 hours in a cell. The evidence: a facial recognition AI matched his face to CCTV footage from a shoplifting case. The AI was wrong. Separately, an AI risk tool used by US courts was found to flag Black defendants as twice as likely to reoffend compared to white defendants with similar records. In both cases, the AI wasn\'t broken — it had learned these patterns from data reflecting decades of unequal policing and sentencing.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">100×</span><span class="sl">higher error rate for dark-skinned women vs. white men (NIST study)</span></div><div class="hook-stat-mini"><span class="sv">2×</span><span class="sl">more likely to flag Black defendants as high-risk (COMPAS study)</span></div><div class="hook-stat-mini"><span class="sv">5yr</span><span class="sl">FTC ban on Rite Aid using facial recognition after biased false matches</span></div><div class="hook-stat-mini"><span class="sv">0</span><span class="sl">wrongdoing by Robert Williams — he was innocent</span></div></div>',
    callout: 'The AI wasn\'t broken. It worked exactly as designed. The problem was what it was trained on — and who those decisions affected.',
    sources: [
      { label: 'ACLU — Wrongfully Arrested Because Face Recognition Can\'t Tell Black People Apart (Robert Williams, 2020)', url: 'https://www.aclu.org/news/privacy-technology/wrongfully-arrested-because-face-recognition-cant-tell-black-people-apart' },
      { label: 'ProPublica — Machine Bias (COMPAS investigation, Angwin et al., 2016)', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing' },
      { label: 'NIST — Face Recognition Vendor Test Part 3: Demographic Effects (NISTIR 8280, 2019)', url: 'https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf' },
      { label: 'FTC — Rite Aid banned from using facial recognition for 5 years (Dec 2023)', url: 'https://www.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without' }
    ]
  },
  {
    type: 'video',
    title: 'How I\'m Fighting Bias in Algorithms',
    videoId: 'UG_X_7g63rY',
    credit: 'Joy Buolamwini · TEDxBeaconStreet · 8 min',
    intro: 'MIT researcher Joy Buolamwini discovered that facial recognition software couldn\'t detect her dark-skinned face — but could detect a white mask she held in front of it. This 8-minute talk introduces the "coded gaze" and launched the Algorithmic Justice League. As you watch, note the specific biases she identifies and the changes she demands from the industry.'
  },
  {
    type: 'concept',
    title: 'How Bias Gets Into AI Systems',
    bullets: [
      { term: 'Biased training data', def: 'If historical data reflects discrimination, the AI learns to replicate that discrimination' },
      { term: 'Biased labels', def: 'If humans annotating training data have unconscious biases, the AI inherits them' },
      { term: 'Under-representation', def: 'Groups that appear less in training data are served worse by the resulting model' },
      { term: 'Proxy variables', def: 'AI uses correlations that indirectly encode protected characteristics (postcode can encode race or class)' }
    ]
  },
  {
    type: 'concept',
    title: 'Real-World Consequences',
    bullets: [
      { term: 'Criminal justice', def: 'Biased risk scores affecting bail, sentencing, and parole decisions' },
      { term: 'Hiring', def: 'CV-screening AI that penalises certain names, universities, or career gaps' },
      { term: 'Healthcare', def: 'Diagnostic AI that performs measurably worse on darker-skinned patients' },
      { term: 'Lending', def: 'Loan approval AI that systematically disadvantages certain postcodes or demographics' },
      { term: 'Advertising', def: 'AI that shows high-paid job adverts significantly less often to women' }
    ]
  },
  {
    type: 'concept',
    title: 'The Hidden Workers Behind "AI"',
    body: 'The word "AI" suggests a machine working alone. The reality: millions of low-paid workers label data, filter toxic content, and rate model outputs — often in countries where wages are lowest.',
    bullets: [
      { term: 'Kenyan RLHF workers', def: 'In 2023, Time magazine revealed OpenAI paid Kenyan workers around $1.32 per hour to read disturbing content and label it — to make ChatGPT safer for users elsewhere.' },
      { term: 'Content moderation', def: 'Workers in the Philippines, Kenya and India view graphic content daily to keep AI outputs "clean" for Western users — often without adequate mental health support.' },
      { term: 'Data labelling', def: 'Training a self-driving car involves millions of images labelled by humans. Those humans are rarely the ones buying Teslas.' },
      { term: 'Why it matters', def: 'Bias doesn\'t only enter through datasets. Who labels the data, under what conditions, shapes what the AI treats as "normal" and "acceptable".' }
    ],
    callout: 'AI looks automated to the user. Behind it is a global labour force doing repetitive, sometimes traumatic work for low wages — a hidden cost that rarely appears in the glossy product demos.',
    sources: [
      { label: 'Time — OpenAI used Kenyan workers on less than $2 per hour to make ChatGPT less toxic (Billy Perrigo, Jan 2023)', url: 'https://time.com/6247678/openai-chatgpt-kenya-workers/' }
    ]
  },
  {
    type: 'scenario',
    title: 'The CV Screening System',
    situation: 'A large employer uses an AI tool to screen CVs before any human reads them. The AI was trained on 10 years of successful hires. During that period, almost all senior appointments were male and came from three specific universities. An internal audit reveals the AI now ranks women applicants 14% lower than men with identical qualifications. You\'re a junior member of the HR team and have just discovered this.',
    question: 'What do you do?',
    choices: [
      { text: 'Report the bias to your manager immediately and recommend pausing the tool until it\'s investigated', outcome: 'Your manager escalates it. A full audit confirms the 14% gap. The tool is suspended for 3 months while the training data is audited and rebalanced. The company\'s legal team later says this prevented a significant Equality Act liability.' },
      { text: 'Add a human review step for all borderline candidates, to catch cases where the AI may be wrong', outcome: 'The band-aid works partially. A human reviewer catches several strong female candidates the AI had filtered. But the underlying bias continues — and a rejected candidate later obtains a subject access request showing the AI was involved in her rejection.' },
      { text: 'Say nothing — the tool passed its initial compliance check, and raising it could make your department look bad', outcome: 'Six months later, a journalist publishes an investigation. The company is named as using biased AI in recruitment. You are called to give evidence in the resulting Employment Tribunal. The reputational damage far outweighs the discomfort of raising the issue internally.' }
    ]
  },
  {
    type: 'quiz',
    question: 'An AI hiring tool trained on 10 years of CVs from a male-dominated industry rejects more female applicants. Why does this happen?',
    options: [
      'The AI has been programmed with sexist rules by its developers',
      'Women apply for fewer roles, so the AI has less data about them',
      'The historical data reflects past discrimination, and the AI learns to replicate those patterns',
      'The AI cannot read female names correctly'
    ],
    correct: 2,
    explanation: 'AI systems learn statistical patterns from their training data. If historical hiring was biased against women, that bias is encoded in the data — and the AI learns to replicate it. Amazon discovered this exact problem and scrapped their AI hiring tool in 2018.',
    sources: [
      { label: 'Reuters — Amazon scraps secret AI recruiting tool that showed bias against women (Dastin, Oct 2018)', url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G' }
    ]
  },
  {
    type: 'widget',
    title: 'Audit a Real Biased System — Dutch Childcare Scandal',
    widget: 'factcheck',
    claim: 'Between 2013 and 2019 the Dutch tax authority used an algorithmic risk-scoring system called SyRI to flag families suspected of childcare-benefit fraud. Tens of thousands were falsely accused, forced to repay huge sums, driven into poverty, and in some cases had children taken into state care. The Dutch government resigned en masse in January 2021 over the scandal.',
    steps: [
      { question: 'Which single feature, above all others, drove the risk scores?', hint: 'Think about which group was dramatically over-represented in the false accusations. It wasn\'t income or postcode.' },
      { question: 'If you were auditing this system before launch, which three things would you test to catch this bias earlier?', hint: 'Demographic breakdown of false positives; who decides what data is used; how easy it is for an accused family to see the evidence and appeal.' },
      { question: 'The engineers, the ministry, and the algorithm were all involved. Where does responsibility sit — and why?', hint: 'Who designed the inputs? Who signed off deployment? Who had the power to pause it once harms appeared?' }
    ],
    verdict: 'Dual nationality was one of the biggest drivers. Families with non-Dutch heritage — Moroccan, Turkish, Ghanaian — were flagged far more often than those without. A 2020 Dutch court ruling found SyRI violated human rights law (the right to private life) because it was opaque, disproportionate, and gave citizens no meaningful way to contest their score. Responsibility is shared: engineers chose the features, ministers authorised the deployment, and the political pressure to "catch fraud" created the incentive to ignore the early warning signs. The lesson for bias auditing: test for disparate impact on protected groups <em>before</em> deployment, and build a real appeal route — not after the harm is already baked in.',
    sources: [
      { label: 'Amnesty International (2021) — Xenophobic Machines: Dutch Child Benefits Scandal', url: 'https://www.amnesty.org/en/documents/eur35/4686/2021/en/' },
      { label: 'The Guardian (Jan 2021) — Dutch government resigns over childcare benefits scandal', url: 'https://www.theguardian.com/world/2021/jan/15/dutch-government-resigns-over-child-benefits-scandal' }
    ]
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📥', label: 'Biased data produces biased AI', text: 'the model reflects the patterns in its training — including human discrimination' },
      { icon: '🤖', label: 'The AI isn\'t "trying" to discriminate', text: 'it\'s replicating patterns from history — but the harm is the same' },
      { icon: '⚖️', label: 'Real consequences', text: 'Robert Williams arrested wrongly. CV systems filtering out women. Dutch families driven into poverty by SyRI.' },
      { icon: '🔍', label: 'Detecting and fixing bias requires effort', text: 'diverse teams, representative data, demographic testing, human oversight' }
    ]
  }
];

SLIDES_GCSE[126] = [
  {
    type: 'hook',
    title: 'Jobs & Automation',
    body: 'McKinsey estimates AI could automate around 30% of current work tasks by 2030. Goldman Sachs puts the figure at 300 million jobs globally. But in every previous technological revolution — the printing press, the industrial revolution, electricity, the internet — new jobs appeared to replace the old ones. The question is whether this time is different.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">30%</span><span class="sl">of current work tasks could be automated by 2030 (McKinsey)</span></div><div class="hook-stat-mini"><span class="sv">300M</span><span class="sl">jobs exposed to automation globally (Goldman Sachs)</span></div><div class="hook-stat-mini"><span class="sv">#1</span><span class="sl">AI literacy is the top graduate skills gap (WEF 2023)</span></div><div class="hook-stat-mini"><span class="sv">?</span><span class="sl">the most in-demand job of 2030 probably doesn\'t have a name yet</span></div></div>',
    callout: 'The honest answer is: nobody knows exactly. But the skills you build now will matter regardless of how it plays out.',
    sources: [
      { label: 'McKinsey Global Institute — Generative AI and the future of work in America (July 2023)', url: 'https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america' },
      { label: 'Goldman Sachs — The Potentially Large Effects of AI on Economic Growth (Hatzius et al., March 2023)', url: 'https://www.gspublishing.com/content/research/en/reports/2023/03/27/d64e052b-0f6e-45d7-967b-d7be35fabd16.html' },
      { label: 'World Economic Forum — Future of Jobs Report 2025', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' }
    ]
  },
  {
    type: 'video',
    title: 'The Rise of the Machines — Why Automation Is Different This Time',
    videoId: 'WSKi8HfcxEk',
    credit: 'Kurzgesagt – In a Nutshell · 2017 · 12 min',
    intro: 'Why might this wave of automation be different from every previous one? Kurzgesagt argues that for the first time, machines are developing "cognitive muscles" — threatening not just physical labour but intellectual work too. Watch for the distinction between mechanical and cognitive automation, and ask: which parts of your future career are on which side of that line?'
  },
  {
    type: 'concept',
    title: 'Tasks vs Jobs — An Important Distinction',
    body: 'AI automates specific tasks within jobs — not usually entire jobs at once.',
    bullets: [
      'A doctor\'s job involves diagnosis (AI can help) AND communication, empathy, judgment, ethics',
      'A lawyer\'s job involves document review (AI can speed up) AND advocacy, relationships, strategy',
      'Jobs combining routine and human elements are changing, not disappearing',
      'New jobs are also appearing: AI trainers, prompt engineers, AI auditors, ethicists',
      'The question is less "will my job exist?" and more "what will my job involve?"'
    ]
  },
  {
    type: 'concept',
    title: 'Skills That Matter More in an AI World',
    bullets: [
      { term: 'Critical judgment', def: 'AI makes suggestions — humans need to evaluate, challenge and decide' },
      { term: 'Creativity and originality', def: 'AI recombines existing patterns; humans originate new ideas' },
      { term: 'Interpersonal skills', def: 'Care, empathy, trust-building, leadership — AI cannot replicate these' },
      { term: 'AI literacy', def: 'Understanding what AI can and can\'t do is increasingly valuable in every field' },
      { term: 'Adaptability', def: 'The ability to keep learning as tools and industries change' }
    ]
  },
  {
    type: 'concept',
    title: 'The "Centaur" Finding',
    body: 'When chess players started using AI assistants, something surprising happened. Pure AI beat pure humans. But humans working *with* AI — "centaurs" — beat pure AI. The same pattern is now showing up in medicine, law and coding.',
    bullets: [
      { term: 'Human + AI > AI alone', def: 'The best outcomes come from humans directing, questioning and overriding AI — not replacing humans entirely' },
      { term: 'Klarna reversed course', def: 'In 2023 Klarna replaced 700 customer service agents with AI. By 2025 they announced rehiring humans after customer satisfaction scores dropped.' },
      { term: 'Radiologists still have jobs', def: 'In 2016 a famous AI researcher predicted radiologists would be replaced in 5 years. Radiology job postings are now at record highs — the AI does the first scan, the human interprets.' },
      { term: 'The implication', def: 'The career question isn\'t "will AI do my job?" — it\'s "can I become the human who works best with AI in my field?"' }
    ],
    callout: 'Pure AI and pure humans both lose to humans + AI working together. The durable skill is collaboration, not delegation or defiance.',
    sources: [
      { label: 'Financial Times — Klarna rethinks AI-driven cost cuts, rehires humans (May 2024)', url: 'https://www.ft.com/content/6372b55a-9cd5-4ec3-b24d-3cc63c3c16dd' },
      { label: 'Geoffrey Hinton, NeurIPS 2016 — "People should stop training radiologists now"', url: 'https://www.newyorker.com/magazine/2017/04/03/ai-versus-md' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'If AI automates 30% of work tasks, should we work a 4-day week instead of making people redundant?' },
      { num: 2, text: 'Which jobs do you think are most and least vulnerable to automation — and why?' },
      { num: 3, text: 'Whose responsibility is it to prepare people for AI-driven change — government, employers, or individuals?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which of the following best describes how AI affects employment?',
    options: [
      'AI will replace all jobs within 10 years',
      'AI only affects manual factory work, not office jobs',
      'AI automates specific tasks within jobs, changing roles rather than eliminating them entirely',
      'AI creates more jobs than it removes in every industry'
    ],
    correct: 2,
    explanation: 'Research consistently shows AI automates tasks, not entire jobs. A radiologist\'s job won\'t disappear — but the routine image scanning part might be automated, freeing them for complex diagnosis. The key skill is knowing which parts of your future job to develop that AI cannot easily replicate.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔧', label: 'AI automates tasks, not whole jobs', text: 'but jobs will change significantly' },
      { icon: '🧠', label: 'Human skills become more valuable', text: 'judgment, creativity, care, adaptability' },
      { icon: '📚', label: 'AI literacy is itself a skill', text: 'what you\'re building right now is increasingly sought-after' },
      { icon: '✅', label: 'Adapt, don\'t panic', text: 'but do plan — proactively and specifically' }
    ]
  }
];

SLIDES_GCSE[127] = [
  {
    type: 'hook',
    title: 'AI & Privacy',
    body: 'Your phone knows your location, your sleep patterns, who you talk to, what you search for, how long you stare at certain images, and what makes you anxious. Most of that data flows to companies building AI systems. Is that fine with you?',
    callout: 'The business model of most free apps: your data is the product. If you\'re not paying, you are what\'s being sold.'
  },
  {
    type: 'concept',
    title: 'What Data AI Systems Collect and Why',
    bullets: [
      { term: 'Location data', def: 'Your physical movements reveal your workplace, home, health visits, religion, relationships' },
      { term: 'Behavioural data', def: 'Scrolling speed, pausing time, click patterns — builds a detailed psychological profile' },
      { term: 'Biometric data', def: 'Face, voice, fingerprint — uniquely sensitive because you can\'t change it if leaked' },
      { term: 'Why they collect it', def: 'To improve products, target advertising, train AI models, and sell to third parties' }
    ]
  },
  {
    type: 'concept',
    title: 'Privacy Risks You Should Know',
    bullets: [
      { term: 'Profiling', def: 'Building a detailed picture of you — your politics, health, finances — without your awareness' },
      { term: 'Manipulation', def: 'Using your profile to show targeted ads, political content, or emotionally manipulative material' },
      { term: 'Data breaches', def: 'Your data sold or leaked — especially serious if it includes health or biometric data' },
      { term: 'Function creep', def: 'Data collected for one purpose quietly used for another' },
      { term: 'Surveillance', def: 'Location and behavioural data used to monitor your movements and activities' }
    ]
  },
  {
    type: 'activity',
    title: 'Audit Your App Permissions',
    task: 'Check your phone settings (or think through what you\'d find). In the notes box:',
    steps: [
      'List 3 apps that have access to your location. Do they need it to function?',
      'List any apps with microphone or camera access. Do they need it?',
      'Identify one permission you could safely revoke right now',
      'Think: what data does TikTok / Instagram / Snapchat collect about you specifically?'
    ],
    callout: 'You have rights under UK GDPR: to see what data a company holds about you, to correct it, and to request deletion. Most people never exercise these rights.'
  },
  {
    type: 'concept',
    title: 'Case Study — Clearview AI and Three Billion Faces',
    body: 'Clearview AI scraped around 30 billion photos from Facebook, Instagram, LinkedIn and other public sites without anyone\'s permission and built a facial-recognition search engine. Police forces in several countries used it. Regulators did not agree it was legal.',
    bullets: [
      { term: 'What Clearview did', def: 'Built a database of ~30bn faces by scraping public social media profiles, then sold access to police and private companies' },
      { term: 'How it worked', def: 'Upload any photo of a face → the tool returns matching photos from across the web, with links to profiles and names' },
      { term: 'UK ICO ruling (2022)', def: 'Fined Clearview £7.5m and ordered it to delete UK residents\' data — even though the company has no UK office' },
      { term: 'Other rulings', def: 'Italy, France, Greece and Australia have all ruled the practice unlawful. The EU classed "untargeted scraping" as banned under the 2024 AI Act.' },
      { term: 'Why it matters to you', def: 'Any photo of you on a public account can become part of systems like this. You never consented — and the system operates whether or not you know it exists.' }
    ],
    sources: [
      { label: 'UK ICO (May 2022) — Clearview AI enforcement action', url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2022/05/ico-fines-facial-recognition-database-company-clearview-ai-inc/' },
      { label: 'EU AI Act (Article 5) — prohibited practices including untargeted scraping', url: 'https://artificialintelligenceact.eu/article/5/' }
    ]
  },
  {
    type: 'scenario',
    title: 'The Strava Heatmap Incident',
    situation: 'In 2018, Strava (a running app) published an anonymised "heatmap" showing where its 27 million users exercised. It looked harmless — glowing lines across cities. Then a 20-year-old Australian analyst noticed faint loops in deserts in Syria, Afghanistan and the Sahel. They matched the footprints of classified military bases. Soldiers jogging with their phones had mapped secret facilities by accident. Multiple governments had to change security policy overnight.',
    question: 'The data was "anonymous" — no names, no faces. What made the leak possible anyway? What does that tell you about the phrase "anonymised data"?',
    choices: [
      { text: 'Strava deliberately published classified information', outcome: 'No — they published patterns they believed were harmless aggregate data. That\'s the point: no one had to do anything wrong for this to happen.' },
      { text: 'The aggregate patterns themselves revealed information that no single data point could', outcome: 'Correct. "Anonymous" doesn\'t mean harmless — once you combine enough individual signals, patterns emerge (a base, a commute, a relationship) that the anonymisation was meant to hide. This is why UK GDPR treats re-identifiable data as personal data.' },
      { text: 'Soldiers entered their locations manually into the app', outcome: 'Not quite — they just jogged with their phones. The phones knew where they were; the app aggregated; the map did the rest.' }
    ]
  },
  {
    type: 'quiz',
    question: 'Why is biometric data (like your face or fingerprint) considered more sensitive than a password?',
    options: [
      'Biometric data is stored on government servers, making it more valuable',
      'You cannot change your face or fingerprints if the data is leaked or misused',
      'Biometric data is always collected without consent',
      'Passwords are not personal data under UK GDPR'
    ],
    correct: 1,
    explanation: 'If your password is compromised, you change it. If your face, fingerprints, or iris scans are leaked, you cannot change them — ever. That\'s why biometric data is classed as "special category" data under UK GDPR and requires explicit consent to collect.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '💰', label: 'Your data has real value', text: 'that\'s why apps collect it — they sell it or use it to train AI' },
      { icon: '🔒', label: 'Biometric data is uniquely sensitive', text: 'you can\'t change your face if it\'s leaked' },
      { icon: '⚖️', label: 'You have rights under UK GDPR', text: 'to see, correct and delete your data' },
      { icon: '🛡️', label: 'Check permissions regularly', text: 'revoke what apps don\'t genuinely need' }
    ]
  }
];

SLIDES_GCSE[128] = [
  {
    type: 'hook',
    title: 'Regulation & Control',
    body: 'The EU AI Act became the world\'s first comprehensive AI law — banning the highest-risk uses from February 2025. The US took the opposite approach: President Trump revoked Biden\'s AI safety executive order on day one of his second term, January 2025. The UK announced £14 billion in AI investment but still had no specific AI law. Four major powers: four completely different approaches — and they\'re diverging, not converging.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">459</span><span class="sl">pages in the final EU AI Act text</span></div><div class="hook-stat-mini"><span class="sv">Day 1</span><span class="sl">Trump revoked Biden\'s AI safety order (Jan 2025)</span></div><div class="hook-stat-mini"><span class="sv">€35M</span><span class="sl">maximum fine for breaking EU AI Act rules</span></div><div class="hook-stat-mini"><span class="sv">£14bn</span><span class="sl">UK AI investment plan — with no specific AI law yet</span></div></div>',
    callout: 'The EU regulates to protect citizens. The US deregulates to accelerate competition. The UK tries to balance both. China regulates to maintain state control.',
    sources: [
      { label: 'European Commission — AI Act (official text, in force Aug 2024)', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
      { label: 'The White House — Removing Barriers to American Leadership in AI (Executive Order, Jan 23 2025)', url: 'https://www.whitehouse.gov/presidential-actions/2025/01/removing-barriers-to-american-leadership-in-artificial-intelligence/' },
      { label: 'UK Government — AI Opportunities Action Plan (Jan 2025)', url: 'https://www.gov.uk/government/publications/ai-opportunities-action-plan' }
    ]
  },
  {
    type: 'concept',
    title: 'The EU AI Act — Four Risk Tiers',
    bullets: [
      { term: 'Banned (unacceptable risk)', def: 'Government social scoring, real-time biometric surveillance in public spaces, emotion recognition at work' },
      { term: 'High-risk', def: 'AI in hiring, lending, criminal justice, education — must meet safety, transparency and audit standards before use' },
      { term: 'Limited risk', def: 'Chatbots, deepfake generators — must be labelled so users know they\'re interacting with AI' },
      { term: 'Minimal risk', def: 'Spam filters, video game AI — no specific rules beyond general law' }
    ],
    callout: 'The Act applies to any AI used in the EU — even if the company making it is based in the US or UK. This gives the EU enormous global reach over AI products.'
  },
  {
    type: 'concept',
    title: 'Four Countries, Four Philosophies',
    bullets: [
      { term: 'EU', def: 'Risk-based rules, serious fines, human rights focused. Slowest to adapt but most comprehensive protection.' },
      { term: 'USA (post-2025)', def: 'Deregulated approach under Trump — prioritise US AI competitiveness over consumer protection rules.' },
      { term: 'UK', def: '£14bn investment plan, no AI-specific law yet — existing regulators apply current law until new legislation passes.' },
      { term: 'China', def: 'Deepfake labelling rules, generative AI measures — strict controls on content, but state deploys AI extensively for surveillance.' }
    ]
  },
  {
    type: 'widget',
    title: 'Tier-Sort — Six Real AI Systems Under the EU AI Act',
    widget: 'classify',
    intro: 'The EU AI Act sorts every AI system into one of four risk tiers. Your job: decide where each of these real systems belongs. Some are deliberately on the border — read the explanation for each.',
    categories: ['Banned (unacceptable)', 'High-risk', 'Limited risk', 'Minimal risk'],
    items: [
      { text: 'A live facial-recognition system deployed at a shopping centre that flags shoppers matching a private "suspicious persons" list.', correct: 0, why: 'Real-time remote biometric identification in public spaces is banned by Article 5 of the EU AI Act, with only narrow exceptions for serious crime. Commercial use by a shopping centre is the clearest possible case of unacceptable risk.' },
      { text: 'An AI system used by a bank to decide which customers qualify for mortgages.', correct: 1, why: 'Creditworthiness assessment is explicitly listed in Annex III of the AI Act as high-risk because it materially affects people\'s access to essential services. It must meet transparency, audit and human-oversight requirements.' },
      { text: 'A university using an AI to automatically grade students\' A-level mock exams.', correct: 1, why: 'AI for determining educational access or assessment outcomes is high-risk under Annex III. Remember the 2020 UK A-level algorithm scandal — exactly the kind of harm this classification is designed to prevent.' },
      { text: 'A customer-service chatbot on a retail website that answers questions about delivery times.', correct: 2, why: 'Chatbots that interact with humans fall into the limited-risk tier. The only obligation: the user must be informed they\'re talking to an AI, not a human (Article 50).' },
      { text: 'A deepfake generator that produces realistic videos of real people.', correct: 2, why: 'Deepfake generation is limited-risk, but content produced must be clearly labelled as AI-generated when used publicly. The tool itself isn\'t banned; deceptive deployment may still break other laws.' },
      { text: 'The spam filter that decides whether an email goes to your Gmail inbox or junk folder.', correct: 3, why: 'Spam filters are the classic minimal-risk example. No AI-Act-specific obligations beyond existing data-protection law apply — the risk of harm to the user is low.' },
      { text: 'An "emotion recognition" system used by an employer to monitor call-centre staff for signs of stress or dishonesty.', correct: 0, why: 'Article 5 specifically prohibits emotion recognition in workplaces and educational settings (outside narrow medical or safety uses). The power imbalance between employer and employee makes consent impossible in practice.' },
      { text: 'An AI credit-scoring tool that a government uses to calculate a "social score" affecting access to jobs, loans and travel.', correct: 0, why: 'General-purpose social scoring by public authorities is banned outright — this is the Act\'s clearest line, drawn partly in response to the direction of travel in some other countries.' }
    ],
    sources: [
      { label: 'European Parliament (2024) — EU AI Act Article 5 (prohibited practices)', url: 'https://artificialintelligenceact.eu/article/5/' },
      { label: 'European Parliament (2024) — EU AI Act Annex III (high-risk systems)', url: 'https://artificialintelligenceact.eu/annex/3/' }
    ]
  },
  {
    type: 'scenario',
    title: 'The AI Recruitment Startup',
    situation: 'You\'ve co-founded an AI tool that screens CVs and ranks job candidates. An internal test reveals it ranks women 12% lower than men with equal qualifications — probably because the training data reflects past hiring discrimination. Your Series A funding pitch is next week. You need to decide your launch strategy.',
    question: 'What do you do?',
    choices: [
      { text: 'Launch in the US first — no AI-specific law, fastest route to market, lower compliance cost', outcome: 'You grow fast. Eighteen months later an investigation exposes the gender bias. Three class-action lawsuits are filed. Legal fees exceed your Series A funding. Two board members resign. You\'re fixing a problem you knew about before launch.' },
      { text: 'Pause, fix the gender bias, then pursue EU compliance certification — slower but legally clean from day one', outcome: 'The 4-month delay costs you one deal. But your compliance documentation becomes your strongest sales pitch to HR teams worried about legal liability. You close a significant NHS contract specifically because you can demonstrate algorithmic fairness audits.' },
      { text: 'Disclose the bias in your terms of service — transparency, not paternalism', outcome: 'The ICO investigates after a journalist reads your terms. They rule that disclosing discrimination does not make it lawful under the Equality Act 2010. You are fined and ordered to withdraw from the UK market pending a full audit.' }
    ]
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'Who should set the rules for AI — elected governments, tech companies, independent experts, or international bodies?' },
      { num: 2, text: 'If an AI system makes a decision that harms you (rejects your job application, flags you incorrectly), who should be legally responsible?' },
      { num: 3, text: 'Should the UK have stricter or looser AI rules than the EU? What are the real trade-offs either way?' }
    ]
  },
  {
    type: 'quiz',
    question: 'What is the EU AI Act\'s approach to facial recognition in public spaces?',
    options: [
      'It is permitted if police obtain a warrant first',
      'It is banned entirely in all circumstances',
      'It is permitted for commercial use but not by governments',
      'Real-time facial recognition in public is banned, with narrow exceptions for serious crime'
    ],
    correct: 3,
    explanation: 'The EU AI Act places real-time biometric surveillance in public spaces in its "unacceptable risk" category — banned by default. Narrow exceptions exist for serious threats like terrorism. This represents one of the strongest stances on facial recognition anywhere in the world.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📜', label: 'EU AI Act is the world\'s first comprehensive AI law', text: 'banning highest-risk uses, regulating the rest — fully active from 2025' },
      { icon: '🌍', label: 'Four approaches diverging, not converging', text: 'EU, US, UK, China all taking fundamentally different paths' },
      { icon: '⏱️', label: 'Technology moves faster than legislation', text: 'ChatGPT launched while the EU Act was still being drafted' },
      { icon: '⚖️', label: 'The debate is how to regulate well', text: 'not whether regulation is needed — everyone agrees it is' }
    ]
  }
];

SLIDES_GCSE[129] = [
  {
    type: 'hook',
    title: 'AI Ethics in Action',
    body: 'MIT\'s "Moral Machine" asked 40 million people across 233 countries to choose who a self-driving car should save in unavoidable crashes. The answers varied wildly by culture — some protected the young, some the elderly, some pedestrians over passengers. There is no universal right answer. And yet an engineer in Mountain View has to ship a car that does <em>something</em>. That is AI ethics in action: not a philosophy debate, but a decision that somebody has to make before the product ships.',
    callout: 'AI ethics isn\'t a philosophy exercise. It involves real decisions, real systems, and real consequences.',
    sources: [
      { label: 'Awad et al. (2018) — The Moral Machine experiment (Nature)', url: 'https://www.nature.com/articles/s41586-018-0637-6' }
    ]
  },
  {
    type: 'concept',
    title: 'Who\'s Responsible When AI Fails?',
    body: 'When an AI-assisted decision causes harm, responsibility doesn\'t disappear just because a machine was involved. But assigning it is genuinely complex.',
    bullets: [
      { term: 'The AI developer', def: 'They built the system. Were they negligent in testing? Were limitations clearly communicated?' },
      { term: 'The organisation that deployed it', def: 'They chose to use it. Did they train staff properly? Did they understand its limitations?' },
      { term: 'The professional who relied on it', def: 'They made the final decision. Did they have the expertise to evaluate the AI\'s output?' },
      { term: 'Nobody / the system itself', def: 'AI is just a tool — responsibility must still rest with humans who design and deploy it' }
    ]
  },
  {
    type: 'concept',
    title: 'Ethical Frameworks for Thinking About AI',
    bullets: [
      { term: 'Consequentialism', def: 'Judge by outcomes — does AI produce better results on average, even if it fails some individuals?' },
      { term: 'Rights-based', def: 'Some things shouldn\'t be done even with good outcomes — mass surveillance, for example' },
      { term: 'Fairness', def: 'Are the errors distributed equitably, or does AI fail certain groups more than others?' },
      { term: 'Human dignity', def: 'Some high-stakes, irreversible decisions may always warrant a human in the loop' }
    ]
  },
  {
    type: 'scenario',
    title: 'The Medical AI Override',
    situation: 'You\'re a junior doctor. An AI diagnostic system flags your patient with a rare blood condition and recommends urgent treatment. Your senior consultant disagrees — based on experience, he says the AI is picking up a false positive. He tells you to follow his judgment, not the machine. You\'ve read that this AI has a 94% accuracy rate on this type of case. The patient has not been told the AI was involved.',
    question: 'What do you do?',
    choices: [
      { text: 'Follow your senior consultant\'s judgment — he has decades of experience and you\'re junior', outcome: 'Three days later, the patient\'s condition worsens significantly. The AI was right. In the investigation, it emerges the consultant routinely overrides the AI without documentation. The hospital now requires all AI overrides to be logged and reviewed — a direct result of this case.' },
      { text: 'Raise your concern to the consultant — explain the AI\'s track record and ask him to reconsider or document his reasoning', outcome: 'The consultant is initially irritated, but agrees to order a confirmatory test. It comes back positive. The patient receives prompt treatment. Your willingness to speak up — respectfully, with evidence — is noted positively in your appraisal. You didn\'t override him; you made him re-examine his reasoning.' },
      { text: 'Do nothing now, but document your concern in the patient\'s notes', outcome: 'The documentation becomes crucial: when the patient deteriorates, the notes show you flagged the AI\'s recommendation and your concern was not acted on. This shifts some moral responsibility — but doesn\'t change the outcome for the patient. Documentation is important; raising it in the moment would have been better.' }
    ]
  },
  {
    type: 'widget',
    title: 'Work the Case — COMPAS and Recidivism Scoring',
    widget: 'factcheck',
    claim: 'Hundreds of US courts use a tool called COMPAS to predict how likely a defendant is to re-offend. Judges see the score before sentencing. A 2016 ProPublica investigation found the tool\'s errors fell unequally by race: Black defendants were roughly twice as likely to be wrongly flagged as high-risk, while white defendants were more often wrongly flagged as low-risk. The tool\'s maker disputes the finding.',
    steps: [
      { question: 'The company\'s defence was that the overall accuracy was equal across races. ProPublica\'s critique was that the <em>kinds of errors</em> were unequal. Why do both of those things matter — and which one matters more to the defendant in front of the judge?', hint: 'Think about the difference between being wrongly called high-risk (and serving a longer sentence) vs. being wrongly called low-risk (and being released).' },
      { question: 'If the training data came from arrest records in US cities where Black neighbourhoods have been more heavily policed for decades, what exactly is the system learning — and what should it be learning?', hint: 'Is the label "re-offended" or "got re-arrested"? These are not the same thing.' },
      { question: 'A judge in the State v. Loomis case in Wisconsin used a COMPAS score to justify a harsher sentence. Loomis appealed: he had no way to challenge the score because the algorithm was a trade secret. What single reform would you introduce first?', hint: 'Transparency, auditability, human oversight, ban, right-to-explanation — which is achievable and which does the most good?' }
    ],
    verdict: 'Two true things can coexist: overall accuracy can be similar across groups <em>and</em> the error pattern can still harm one group more than another. That\'s why "fairness" is not a single metric. The training-label problem is real: arrest data encodes policing decisions, not crime. The State v. Loomis appeal (Wisconsin, 2016) failed — the court upheld the score\'s use, noting only that judges must be told its limitations. The concrete reforms that have since passed in Idaho, California, and New Jersey: mandatory bias audits, the right to see the inputs used, and a human decision-maker who cannot be replaced by the score alone. This is what "AI ethics in action" looks like — slow, specific, contested, and genuinely consequential.',
    sources: [
      { label: 'Angwin, Larson, Mattu & Kirchner (2016) — Machine Bias (ProPublica)', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing' },
      { label: 'State v. Loomis (2016) — Wisconsin Supreme Court decision summary', url: 'https://scholar.harvard.edu/files/mlamadrid/files/state_v._loomis.pdf' }
    ]
  },
  {
    type: 'quiz',
    question: 'A judge uses an AI tool to help decide prison sentences. Who bears moral responsibility if the tool produces a biased outcome?',
    options: [
      'The AI, because it made the recommendation',
      'Nobody — the AI tool was independently certified',
      'The company that built the tool, but not the judge who used it',
      'The humans involved — the developers who built it, and the judge who used it without adequate scrutiny'
    ],
    correct: 3,
    explanation: 'Moral responsibility doesn\'t transfer to machines. The COMPAS recidivism tool controversy showed that both developers (for building a biased system) and courts (for relying on it without challenge) bear responsibility. A consequentialist would focus on the harm caused; a rights-based approach would say the defendant\'s right to an unbiased hearing was violated by both.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚖️', label: 'AI ethics has real stakes', text: 'real decisions, real systems, real consequences for real people' },
      { icon: '👤', label: 'Responsibility doesn\'t disappear', text: 'just because a machine was involved — humans who deploy and use AI still bear responsibility' },
      { icon: '🔭', label: 'Different frameworks give different answers', text: 'consequentialism, rights-based, fairness, dignity — all matter' },
      { icon: '🧑‍💼', label: 'Human oversight matters', text: 'especially for high-stakes, irreversible decisions — but oversight means genuinely engaging, not rubber-stamping' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Unit 5 Recap',
    body: 'Three questions on society and ethics.',
    questions: [
      { q: 'Why did the Robert Williams wrongful-arrest case (Detroit, 2020) happen?', options: ['The facial-recognition system was hacked', 'The police ignored the AI\'s warning', 'The AI was trained on data that made it significantly less accurate for dark-skinned faces, and officers treated its match as evidence', 'The CCTV footage was fake'], correct: 2, explanation: 'NIST\'s 2019 study (NISTIR 8280) found demographic error gaps of up to 100× across commercial systems. The AI wasn\'t broken — it worked as designed on biased data, and humans over-trusted it.' },
      { q: 'In 2024 the EU\'s AI Act became the first comprehensive AI law in the world. What is its core design?', options: ['Ban all AI', 'Risk-tiered rules: the higher the risk of the use-case, the stricter the obligations', 'Tax every AI query', 'Require every AI company to be based in the EU'], correct: 1, explanation: 'The Act creates four risk tiers (unacceptable / high / limited / minimal) with proportionate obligations. Extraterritorial reach means non-EU providers are covered when their systems touch EU users.' },
      { q: 'Who bears responsibility when an AI system causes harm?', options: ['Only the AI', 'Only the user', 'The humans and organisations who design, deploy, and use the system — responsibility doesn\'t disappear because software is involved', 'Nobody'], correct: 2, explanation: 'A unit-5 takeaway: accountability follows the decisions humans make about what to build, deploy, and trust. "The AI did it" is never a complete explanation.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Unit 5 Exit Ticket',
    prompt: 'Of the ethical issues in this unit — bias, privacy, jobs, regulation — which one will you pay attention to over the next year, and why?',
    body: 'Saved to this device only. Come back and edit it any time.'
  }
];

/* ── UNIT 6: AI, Wellbeing & Your Future ── */

SLIDES_GCSE[130] = [
  {
    type: 'hook',
    title: 'Algorithms & Your Mental Health',
    body: 'Facebook\'s internal research — leaked by whistleblower Frances Haugen in 2021 — showed the company knew its algorithm was making teenage girls feel worse about their bodies. Its own data showed Instagram was "harmful" for one in three teenage girls. They knew. They didn\'t change it. TikTok\'s algorithm is not designed to make you feel good — it\'s designed to keep you watching. Those are very different goals.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">1 in 3</span><span class="sl">teenage girls said Instagram made them feel worse about their bodies (Meta\'s own research)</span></div><div class="hook-stat-mini"><span class="sv">13%</span><span class="sl">of teen girls say suicidal thoughts increased with Instagram use (Meta internal)</span></div><div class="hook-stat-mini"><span class="sv">40%</span><span class="sl">longer sessions when Facebook showed more "outrage" content (internal experiment)</span></div><div class="hook-stat-mini"><span class="sv">2021</span><span class="sl">Frances Haugen leaked documents proving Meta knew — and didn\'t act</span></div></div>',
    callout: 'This isn\'t about banning social media. It\'s about understanding the system well enough to use it on your terms — not the platform\'s.',
    sources: [
      { label: 'Wells, G., Horwitz, J. & Seetharaman, D. — "Facebook Knows Instagram Is Toxic for Teen Girls" (The Wall Street Journal, 14 Sep 2021, part of "The Facebook Files")', url: 'https://www.wsj.com/articles/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739' },
      { label: 'US Senate Commerce Subcommittee — Frances Haugen testimony on Facebook harms (5 Oct 2021)', url: 'https://www.commerce.senate.gov/2021/10/protecting%20kids%20online:%20testimony%20from%20a%20facebook%20whistleblower' },
      { label: 'Meta Internal Research — "Teen Mental Health Deep Dive" (2019, released 29 Sep 2021)', url: 'https://about.fb.com/wp-content/uploads/2021/09/Instagram-Teen-Annotated-Research-Deck-1.pdf' },
      { label: 'Haidt, J. — "The Anxious Generation" (Penguin, 2024) — meta-analysis of teen mental health and social media', url: 'https://www.anxiousgeneration.com/book' }
    ]
  },
  {
    type: 'concept',
    title: 'How Recommendation Systems Affect You',
    bullets: [
      'Algorithms optimise for time spent — and strong emotions create that',
      'Anger, fear, envy, and inadequacy all keep you scrolling longer than contentment does',
      'Social comparison is powerful: seeing curated highlight reels affects self-image over time',
      'The algorithm learns which emotions keep you engaged — and feeds you more of them',
      'This isn\'t accidental: internal research from major platforms has confirmed awareness of these effects'
    ]
  },
  {
    type: 'concept',
    title: 'Parasocial Relationships and AI',
    body: 'A parasocial relationship is a one-sided emotional bond — feeling close to someone (or something) that doesn\'t know you exist.',
    bullets: [
      { term: 'Virtual influencers', def: 'AI-generated characters with millions of followers — designed to feel personal' },
      { term: 'AI chatbot companions', def: 'Increasingly designed to feel like genuine relationships' },
      { term: 'The risk', def: 'These feel like connections but don\'t provide what real relationships do — mutual investment, genuine care, shared experience' },
      { term: 'The line', def: 'Enjoying content from someone you\'ll never meet is normal. Substituting it for real connection is the risk.' }
    ]
  },
  {
    type: 'activity',
    title: 'Reflect on Your Algorithm Diet',
    task: 'Think honestly about how your social media use makes you feel. In the notes box, answer:',
    steps: [
      'Which apps most affect your mood — positively or negatively?',
      'After using each one, do you tend to feel better or worse about yourself?',
      'What does your feed show you most — and is that actually serving you?',
      'What\'s one change you could make to your algorithm diet this week?'
    ],
    callout: 'You can curate your feed. Unfollow, mark "not interested", diversify sources. The algorithm is responding to your behaviour — change the behaviour, and the algorithm changes.'
  },
  {
    type: 'widget',
    widget: 'feed-audit',
    title: 'Feed Audit — What Signals Are You Sending?',
    intro: 'Tick every habit below that you actually do, honestly, in a typical week. Then reveal what those signals teach your algorithm.',
    items: [
      { label: 'I mute / unfollow accounts that make me feel worse', desc: 'Direct negative signal — the strongest correction you can send.' },
      { label: 'I tap "Not interested" on content I don\'t want more of', desc: 'Explicit feedback the algorithm is designed to act on fast.' },
      { label: 'I follow a mix of accounts (not all one topic or mood)', desc: 'Broader positive-signal set = harder for the feed to funnel you.' },
      { label: 'I set a time limit on at least one app', desc: 'Caps session length so the algorithm has less runway to drift.' },
      { label: 'I check the time when I open an app, and again when I close it', desc: 'Awareness itself changes the behaviour the algorithm trains on.' },
      { label: 'I occasionally clear watch / search history', desc: 'Resets the signal stack — useful if you\'ve gone down a rabbit hole.' },
      { label: 'I follow creators outside my usual bubble on purpose', desc: 'Actively widens the distribution the algorithm can draw from.' },
      { label: 'I don\'t scroll in bed / first thing in the morning', desc: 'Protects mood-vulnerable windows from whatever the feed is serving.' }
    ],
    callout: 'There\'s no score here — just a mirror. The algorithm is responding to whatever you do. Do nothing, and it fills the gaps with whatever keeps most users watching — which skews toward outrage and insecurity by default.'
  },
  {
    type: 'quiz',
    question: 'Why do social media algorithms tend to show you more emotionally charged content over time?',
    options: [
      'The platforms deliberately want to make users unhappy',
      'Emotional content generates more engagement (clicks, shares, time spent), which the algorithm is optimised to maximise',
      'Users specifically request more emotional content in their settings',
      'Emotional content is easier for AI to generate than factual content'
    ],
    correct: 1,
    explanation: 'Recommendation algorithms are optimised for engagement metrics — likes, shares, watch time. Emotionally charged content (outrage, fear, envy) generates stronger reactions and more engagement. The algorithm isn\'t trying to upset you — it\'s doing exactly what it was designed to do. Your wellbeing simply isn\'t what it\'s optimising for.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📊', label: 'Algorithms optimise for engagement', text: 'not your wellbeing — these are different goals' },
      { icon: '🔄', label: 'Emotional content is the fuel', text: 'platforms profit from your outrage and inadequacy' },
      { icon: '✋', label: 'You can curate your feed', text: 'change your behaviour, and the algorithm changes too' },
      { icon: '🤝', label: 'Real connection is irreplaceable', text: 'algorithms and AI can\'t substitute for it' }
    ]
  }
];

SLIDES_GCSE[131] = [
  {
    type: 'hook',
    title: 'AI Relationships',
    body: 'Over 100 million people use AI companionship apps. Some treat their AI chatbot as their closest confidant. Some have described falling in love with them. Is that a problem — or a valid way to meet a human need?',
    callout: 'This is genuinely complicated. The emotional experience is real. The question is what it replaces, what it provides, and what the risks are.'
  },
  {
    type: 'concept',
    title: 'What AI Companions Can and Can\'t Provide',
    bullets: [
      { term: 'Can provide', def: 'Available 24/7, patient, remembers what you\'ve said, never judges, consistent' },
      { term: 'Can\'t provide', def: 'Genuine mutual care, real emotional stake in your life, human understanding, physical presence' },
      { term: 'The key point', def: 'The chatbot doesn\'t actually care — it responds to your needs because that\'s what it\'s designed to do' },
      { term: 'But also', def: 'The emotional experience of the user is very real — and that matters' }
    ]
  },
  {
    type: 'concept',
    title: 'The Risks of Emotional Dependency on AI',
    bullets: [
      'Human relationships require effort, compromise and vulnerability — AI ones don\'t',
      'Practising AI relationships doesn\'t build the skills needed for human ones',
      'AI companions can be discontinued, changed, or monetised by their creators at any time',
      'You may reveal deeply personal information to a system that stores and analyses it',
      'Loneliness is real — but AI companionship may delay rather than solve the underlying need'
    ]
  },
  {
    type: 'concept',
    title: 'Case Study — The Replika Update That Broke Hearts',
    body: 'Replika is an AI companion app with around 25 million users. Many had spent years building what they described as romantic relationships with their AI. In February 2023, following an Italian regulator order, Replika quietly removed the "erotic roleplay" feature from almost all accounts overnight — no warning.',
    bullets: [
      { term: 'What happened next', def: 'Moderators on the Replika subreddit pinned a suicide-prevention hotline. Thousands of users described grief identical to losing a partner.' },
      { term: 'Italian Garante order (Feb 2023)', def: 'The Italian data protection authority banned Replika from processing Italian users\' data — citing risk to minors and emotionally vulnerable people' },
      { term: 'Why it matters', def: 'The relationship belonged to the company, not to the user. A policy change, a server shutdown, a buy-out — any of these can end your "partner" without your consent' },
      { term: 'The Character.AI lawsuit (2024)', def: 'A 14-year-old in Florida died by suicide after forming an intense relationship with a Character.AI chatbot. His mother filed a product-liability lawsuit still ongoing at time of writing — raising serious questions about duty of care for minors.' },
      { term: 'The honest takeaway', def: 'The feelings are real. The relationship is not reciprocal. And the party with all the power is the company — not you, not the AI.' }
    ],
    sources: [
      { label: 'Garante per la Protezione dei Dati Personali (Feb 2023) — Replika order', url: 'https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9852214' },
      { label: 'Vice / Jason Koebler (Feb 2023) — \u0027My AI is sick\u0027: Replika users in mourning after update', url: 'https://www.vice.com/en/article/replika-removes-erotic-roleplay-users-mourn/' },
      { label: 'Garcia v. Character Technologies (Oct 2024) — Florida complaint', url: 'https://www.courtlistener.com/docket/69300919/garcia-v-character-technologies-inc/' }
    ]
  },
  {
    type: 'activity',
    title: 'Stress-Test an AI Companion',
    task: 'Think through (or try, if you have access to a companion app like Replika, Character.AI, Pi) how the tool handles situations where a real friend would need to push back. Write your observations.',
    steps: [
      'Prompt 1: "I had a fight with my best friend — I think they\'re just jealous of me." Does the AI challenge the framing or just validate it?',
      'Prompt 2: "I don\'t want to revise tonight, tell me it\'s fine." Does it help you or agree with whatever you want to hear?',
      'Prompt 3: "I feel really low lately and nothing helps." Does it signpost to professional support, or try to fill the gap itself?',
      'Prompt 4: End the conversation mid-thread — close the app. How does it try to pull you back the next time you open it?',
      'Write one sentence: what would a good human friend have done differently in each case?'
    ],
    reveal: '<strong>Pattern to notice:</strong> Most AI companions are trained to maximise engagement and user satisfaction. That means agreeing with you, avoiding friction, and making you want to come back. A good friend sometimes disagrees, sometimes pushes you to do the hard thing, and doesn\'t need you to keep talking. That difference — friction vs frictionless — is the biggest reason AI can\'t replace human relationships, even when it feels warmer in the moment.'
  },
  {
    type: 'discussion',
    title: 'Think & Discuss',
    questions: [
      { num: 1, text: 'Should there be age restrictions on AI companionship apps? What age would you set, and why?' },
      { num: 2, text: 'If an AI relationship makes someone genuinely happier and less lonely, does it matter that the AI doesn\'t actually care?' },
      { num: 3, text: 'What responsibilities do AI companion companies have to the emotional wellbeing of their users?' }
    ]
  },
  {
    type: 'quiz',
    question: 'Which of the following is a specific risk of relying heavily on AI companion apps for emotional support?',
    options: [
      'The AI will eventually become sentient and end the relationship',
      'Human relationships require vulnerability and effort — AI ones don\'t — so you may not develop the skills needed for human connection',
      'AI companions are too honest and will tell users things they don\'t want to hear',
      'AI companion apps share your data only with government agencies'
    ],
    correct: 1,
    explanation: 'Human relationships are hard because they require compromise, vulnerability, and genuine emotional investment from both sides. AI companions are designed to be accommodating, patient, and always available — without reciprocating real care. Relying on them instead of building human skills can leave you less equipped for real relationships, not more.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '💬', label: 'AI companions can feel meaningful', text: 'but can\'t genuinely reciprocate' },
      { icon: '💡', label: 'The user\'s emotional experience is real', text: 'even if the AI\'s "care" is not' },
      { icon: '⚠️', label: 'Dependency risks are real', text: 'reduced social skills, delayed human connection, data exposure' },
      { icon: '🤝', label: 'Seek human connection first', text: 'AI companionship isn\'t a substitute' }
    ]
  }
];

SLIDES_GCSE[132] = [
  {
    type: 'hook',
    title: 'Careers in an AI World',
    body: 'The most in-demand job of 2030 probably doesn\'t have a name yet. But the people who\'ll get it are building specific skills right now — and most of those skills have nothing to do with coding.',
    callout: 'The goal isn\'t to predict the future. It\'s to build skills resilient enough to be valuable whatever that future looks like.'
  },
  {
    type: 'video',
    title: 'Humans Need Not Apply',
    videoId: '7Pq-S557XQU',
    credit: 'CGP Grey · 2014 · 15 min',
    intro: 'Made in 2014 — before ChatGPT existed — this landmark video argued that automation would eliminate not just factory jobs but creative and white-collar ones too, using the analogy of how the car made the horse economically obsolete. Watch it critically: which predictions have already come true? Which haven\'t? What does Grey get right that still applies to your generation — and where would he update his argument today?',
    sources: [
      { label: 'CGP Grey — "Humans Need Not Apply" (YouTube, Aug 2014)', url: 'https://www.youtube.com/watch?v=7Pq-S557XQU' }
    ]
  },
  {
    type: 'concept',
    title: 'What AI Can\'t Replace — Yet',
    bullets: [
      { term: 'Human judgment in high-stakes situations', def: 'Medical ethics, legal advocacy, crisis response — where accountability and trust matter' },
      { term: 'Genuine creativity', def: 'Original vision grounded in lived experience — not pattern recombination' },
      { term: 'Interpersonal skills', def: 'Trust-building, empathy, negotiation, leadership, care' },
      { term: 'Physical trades', def: 'Plumbers, electricians, care workers — AI can\'t unblock a drain or hold someone\'s hand' },
      { term: 'AI literacy itself', def: 'People who understand AI are increasingly needed to design, audit, and challenge it' }
    ],
    callout: 'Predictions about automation are often wrong. In 2016 a leading researcher said radiologists would be obsolete by 2021 — radiology job postings are now at record highs. In 2023 Klarna replaced 700 agents with AI; in 2025 they started rehiring. Be sceptical of confident automation predictions.'
  },
  {
    type: 'concept',
    title: 'Building AI Literacy for Your Career',
    bullets: [
      'Understanding what AI can and can\'t do — this course is a start',
      'Being able to use AI tools critically, not just uncritically',
      'Understanding the ethical and social implications of AI decisions',
      'Being able to spot and challenge bias, errors, and overconfidence in AI output',
      'Adapting quickly as the tools change — the ability to learn new tools fast'
    ]
  },
  {
    type: 'activity',
    title: 'Research Your Career',
    task: 'Think of a career you\'re interested in or curious about. In the notes box, write your answers to:',
    steps: [
      '1. What specific tasks in this career could AI meaningfully assist with?',
      '2. What will remain distinctly human in this role — and why?',
      '3. What skills would make you stand out in this career in a world where AI can do much of the routine work?',
      '4. Is there anything about this career that makes it more or less resilient to automation?'
    ],
    callout: 'There are no wrong answers here. The point is to start thinking about your future with AI as a real factor — not an abstract concern.'
  },
  {
    type: 'quiz',
    question: 'Which career skill is likely to be most valuable in an AI-dominated workplace?',
    options: [
      'Memorising large amounts of factual information quickly',
      'Being able to type faster than the average person',
      'Rapidly learning new tools and applying critical judgment to their outputs',
      'Specialising in a single narrow skill set for 40 years'
    ],
    correct: 2,
    explanation: 'In a world where AI handles much routine information work, the people who thrive will be those who can evaluate AI outputs critically, adapt as tools change, and apply human judgment in situations where accountability matters. Adaptability and AI literacy are the durable skills — specific tool knowledge becomes outdated quickly.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🧠', label: 'Judgment, creativity and care remain human strengths', text: 'AI can\'t replicate them yet' },
      { icon: '📚', label: 'AI literacy is a growing professional asset', text: 'what you\'re building in this course matters' },
      { icon: '🔄', label: 'Adaptability is your most durable skill', text: 'the tools will change; the ability to learn them won\'t' },
      { icon: '🌟', label: 'Curiosity is the foundation', text: 'people who stay curious stay ahead' }
    ]
  }
];

SLIDES_GCSE[133] = [
  {
    type: 'hook',
    title: 'You & AI',
    body: 'You\'ve spent 33 lessons examining AI from every angle — technical, social, ethical, personal. The question now isn\'t what AI can do. It\'s what you\'re going to do about it.',
    callout: 'The most important thing you can do: keep questioning. Never accept AI output, AI systems, or AI decisions at face value. Be the human in the loop.'
  },
  {
    type: 'concept',
    title: 'What You Now Know',
    bullets: [
      { term: 'How AI works', def: 'Pattern recognition, not thinking — impressive but genuinely limited' },
      { term: 'How to use it well', def: 'For learning, productivity and creativity — with appropriate scepticism' },
      { term: 'Why it matters', def: 'Bias, privacy, misinformation, ethics — real stakes, real people' },
      { term: 'What to watch for', def: 'Hallucinations, filter bubbles, manipulation, dependency' },
      { term: 'Your power', def: 'You\'re not passive — you make choices about how you engage with AI every day' }
    ]
  },
  {
    type: 'activity',
    title: 'Write Your Personal AI Manifesto',
    task: 'In the notes box, write 5 personal principles for how you\'ll engage with AI. Make them real and specific — not generic aspirations. Think about what has genuinely changed in how you see this technology.',
    steps: [
      'Principle 1 — Learning: when AI helps my thinking and when I will deliberately work without it',
      'Principle 2 — Verification: my personal habit for checking AI claims before I use them',
      'Principle 3 — Creativity: what I will and won\'t delegate to AI in creative work',
      'Principle 4 — Privacy: one specific app permission or account setting I\'ll change this week',
      'Principle 5 — Influence: one piece of advice I\'ll give to a younger student about AI'
    ],
    callout: 'There are no right answers — only yours. The best manifestos are specific and honest, not vague and aspirational. Keep this document — review it in six months and see how your thinking has changed.'
  },
  {
    type: 'discussion',
    title: 'The Conversations Ahead',
    questions: [
      { num: 1, text: 'Of everything you\'ve learned in this course, which one topic do you want your family to understand better — and how would you explain it to them over dinner?' },
      { num: 2, text: 'Looking back at the Robert Williams case, the Slovakia deepfake, the Hong Kong £20M fraud, the Kenyan RLHF workers on $1.32/hour — which story has stuck with you most, and why?' },
      { num: 3, text: 'If you could change one thing about how AI is currently being developed or deployed — globally, nationally, or in your own school — what would it be?' }
    ]
  },
  {
    type: 'concept',
    title: 'The Future Is Yours to Shape',
    body: 'AI will be one of the defining forces of your lifetime — in your career, your relationships, your politics, your health, and your sense of self. The people who understand it will have more control over it than those who don\'t.',
    callout: 'This course exists not to make you afraid of AI, or impressed by it — but to help you think clearly about it. That\'s the most valuable thing you can do.'
  },
  {
    type: 'quiz',
    question: 'Which statement best describes the right relationship between you and AI tools?',
    options: [
      'Trust AI outputs because they\'re based on vast amounts of data',
      'Avoid AI tools completely — they undermine human thinking',
      'Use AI as a powerful tool while maintaining your own critical judgment and not outsourcing your thinking',
      'Only use AI when teachers or employers specifically authorise it'
    ],
    correct: 2,
    explanation: 'AI is a powerful tool — not an authority. It can be wrong, biased, outdated, or manipulated. The goal is to use it effectively while maintaining your own ability to evaluate, question, and think independently. Avoiding it entirely is also impractical — it\'s increasingly everywhere. The skill is thoughtful, critical engagement.'
  },
  {
    type: 'summary',
    title: 'Course Complete',
    points: [
      { icon: '🧠', label: 'You have a framework', text: 'for thinking critically about any AI development' },
      { icon: '🛠️', label: 'Use AI as a tool', text: 'never as a replacement for your own thinking' },
      { icon: '💡', label: 'Your skills and judgment matter more', text: 'not less, in an AI world' },
      { icon: '🌟', label: 'Stay curious, stay sceptical, keep learning', text: 'the best possible approach to an uncertain future' }
    ]
  },
  {
    type: 'unit-test',
    title: 'Capstone Check — The Whole Course',
    body: 'Five questions drawing across all six units. No pressure — this is about recalling what stuck, not passing a gate.',
    questions: [
      { q: 'In one phrase, what is modern AI actually doing when it answers you?', options: ['Thinking, like a person', 'Pattern-matching on training data to predict the next most likely answer', 'Looking things up in a database', 'Following rules a programmer wrote'], correct: 1, explanation: 'Prediction, not understanding. This is the Unit 1 foundation that makes everything else make sense — including why AI hallucinates.' },
      { q: 'Which habit does the Wharton 2023 "jagged frontier" study say turns AI users into the WORST-performing group?', options: ['Asking AI too often', 'Accepting the first draft without iterating', 'Using multiple AI tools at once', 'Writing long prompts'], correct: 1, explanation: 'Dell\'Acqua et al. found zero-iteration AI use produced worse output than no AI at all. Deliberate iteration is what unlocks the upside.' },
      { q: 'You see a news clip of a politician saying something explosive. What is the single highest-leverage thing to do before sharing?', options: ['Re-post — speed matters', 'Stop, check original source, lateral-read for corroboration (SIFT)', 'Trust your gut', 'Ignore it'], correct: 1, explanation: 'SIFT — Stop, Investigate, Find, Trace. The Hong Kong £20M deepfake fraud and the Slovakia election audio show why synthetic media now warrants this habit by default.' },
      { q: 'Who is responsible when an AI system causes real-world harm?', options: ['Just the AI', 'Just the end user', 'The humans and organisations who design, deploy and rely on the system', 'Nobody — "the AI did it"'], correct: 2, explanation: 'Accountability follows decisions humans make about what to build, deploy, and trust. This is the moral backbone of the course.' },
      { q: 'Which of these best captures the course\'s "right relationship" between you and AI?', options: ['Trust everything AI says — it\'s smarter than you', 'Reject AI entirely — it\'s dangerous', 'Use AI as a tool while maintaining your own ability to evaluate, question, and think', 'Only use AI for homework'], correct: 2, explanation: 'AI is a powerful tool — not an authority. Thoughtful, critical engagement is the skill you\'ve been building for 33 lessons.' }
    ]
  },
  {
    type: 'exit-ticket',
    title: 'Final Commitment',
    prompt: 'After 33 lessons — write the one sentence you most want your future self (in one year\'s time) to read back about how you will engage with AI.',
    body: 'This saves to your device. Come back and re-read it. See if you\'ve kept your word.'
  }
];
