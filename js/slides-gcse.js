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
    body: '3 billion people used an AI tool in 2024. But most couldn\'t explain how it actually works. Let\'s fix that — because understanding AI gives you power over it.',
    callout: 'AI is not robots. It\'s not magic. It\'s not thinking. It\'s pattern recognition at massive scale — and once you understand that, everything else makes sense.'
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
    callout: 'A famous US military AI was trained to spot tanks in photos. It scored 100% on training — then failed completely on new images. The "tank" photos had all been taken on sunny days; the "no tank" photos on cloudy days. It had learned to detect sunshine, not tanks.'
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
    callout: 'Research suggests the average person now interacts with AI over 200 times a day — most without realising it. Awareness is the first step towards agency.'
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
    body: 'There\'s an AI that beats every human alive at chess. It\'s also completely useless at making a cup of tea, writing an essay, or recognising a face. This tells you something important about how AI actually works.',
    callout: 'Most AI is a narrow specialist — extraordinary at one thing, nothing outside it.'
  },
  {
    type: 'concept',
    title: 'Narrow AI vs General AI',
    bullets: [
      { term: 'Narrow AI', def: 'Designed for one specific task. The chess AI knows nothing about language, cooking, or emotions — and never will' },
      { term: 'General AI (AGI)', def: 'Could do anything a human can — reason, learn new skills, adapt. Does not exist yet' },
      { term: 'Where we are', def: 'All current AI is narrow. Some is extraordinarily capable within its domain' },
      { term: 'The gap', def: 'Even the most impressive AI chatbot can\'t tie its shoes, read a room, or learn from a single conversation the way a child can' }
    ]
  },
  {
    type: 'concept',
    title: 'Types of AI You\'ll Encounter',
    bullets: [
      { term: 'Generative AI', def: 'Creates new content — text, images, music, video (ChatGPT, DALL-E, Midjourney)' },
      { term: 'Classifiers', def: 'Sorts things into categories — spam/not spam, cat/not cat, cancerous/not cancerous' },
      { term: 'Recommendation engines', def: 'Predicts what you want to see next (TikTok, Spotify, Netflix)' },
      { term: 'Computer vision', def: 'Interprets images — face recognition, medical scans, self-driving car cameras' },
      { term: 'Speech recognition', def: 'Converts audio to text (Siri, Alexa, live subtitles)' }
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
      { icon: '🎯', label: 'All current AI is narrow', text: 'excellent in one domain, useless outside it' },
      { icon: '🔮', label: 'AGI is hypothetical', text: 'no general-purpose AI exists — it remains a future possibility' },
      { icon: '📂', label: 'Many types', text: 'generative, classifiers, recommenders, vision, speech' },
      { icon: '🤔', label: 'Specialist ≠ intelligent', text: 'beating humans at chess doesn\'t make something smart in any general sense' }
    ]
  }
];

SLIDES_GCSE[104] = [
  {
    type: 'hook',
    title: 'AI in Your Everyday Life',
    body: 'You\'ve probably already used AI at least 5 times today — and most of it was invisible. The AI shaping your daily life isn\'t the dramatic kind from films. It\'s quiet, embedded, and everywhere.',
    callout: 'Understanding which parts of your digital life are AI-driven gives you more control over how they affect you.'
  },
  {
    type: 'concept',
    title: 'Recommendation Engines — The Hidden DJ',
    body: 'TikTok, Spotify, Netflix, YouTube — all use AI to predict what you\'ll watch or listen to next. Every second of your attention is data.',
    bullets: [
      'They optimise for engagement — keeping you watching, not for your wellbeing',
      'They don\'t know what\'s "good for you" — only what you\'ve clicked on before',
      'Over time, they build a feedback loop: you see more of what you already like',
      'Your "For You" page isn\'t for you — it\'s for keeping you on the platform'
    ]
  },
  {
    type: 'concept',
    title: 'AI Running Silently in the Background',
    bullets: [
      { term: 'Autocomplete', def: 'Your phone predicts your next word as you type' },
      { term: 'Spam filters', def: 'Email AI classifies messages before you see them' },
      { term: 'Face unlock', def: 'Computer vision matches your face against stored biometric data' },
      { term: 'Google Translate', def: 'Neural machine translation across 130+ languages' },
      { term: 'Fraud detection', def: 'Your bank\'s AI flags unusual transactions in milliseconds' },
      { term: 'Search ranking', def: 'AI decides which results appear first — and which you never see' }
    ]
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
    explanation: 'Recommendation algorithms optimise for engagement — specifically the time you spend on the platform. This is different from what\'s good for you. The algorithm doesn\'t know what\'s "best" — it only knows what you\'ve clicked on before.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '👁️', label: 'AI is infrastructure', text: 'embedded invisibly in almost every digital product' },
      { icon: '📊', label: 'Recommendations optimise for engagement', text: 'not your benefit or wellbeing' },
      { icon: '💡', label: 'Awareness matters', text: 'knowing AI is there changes how consciously you engage with it' },
      { icon: '🔄', label: 'Feedback loops', text: 'AI learns from your behaviour and shapes your future experience' }
    ]
  }
];

SLIDES_GCSE[105] = [
  {
    type: 'hook',
    title: 'Can AI Think?',
    body: 'In 2023, an AI passed the US medical licensing exam — the test doctors take to practice medicine — with a score that would get it hired. Does that mean it can think? Does it understand medicine?',
    callout: 'Passing a test and understanding the subject are very different things. This lesson explores what that difference actually means.'
  },
  {
    type: 'concept',
    title: 'A Pattern-Matching Machine That Got Very Good',
    body: 'A useful way to think about a modern chatbot: it\'s a pattern-matching machine that got extraordinarily good at predicting text. Some researchers call this a "stochastic parrot" — it produces language that sounds right because it\'s seen billions of examples of text that sounds right. It\'s not "thinking" the thoughts behind the words.',
    bullets: [
      'It has read more text than any human ever will — trillions of words',
      'It has noticed which words tend to follow which, in which contexts',
      'When it "answers" a question, it\'s predicting the most plausible next words',
      'That can be incredibly useful — and also completely wrong, while sounding fine'
    ],
    callout: 'Fluent does not mean true. A parrot that has been trained for thousands of years can sound wise — but there\'s no one home behind the beak.'
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
    body: 'MIT researchers found AI tutoring systems produced learning gains equivalent to a human tutor — in 30% of the time. Khan Academy\'s AI tutor "Khanmigo" provides Socratic dialogue 24/7, adapting to each student\'s level. Students who use AI tools well are outperforming those who don\'t — but not because AI does their work for them. Because it helps them understand, practise, and fill gaps faster.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">30%</span><span class="sl">of the time — AI tutoring matched human tutors in MIT study</span></div><div class="hook-stat-mini"><span class="sv">3am</span><span class="sl">AI is available when no human tutor is — patient, unlimited, judgment-free</span></div><div class="hook-stat-mini"><span class="sv">10×</span><span class="sl">you can ask the same question 10 ways until it clicks — without embarrassment</span></div><div class="hook-stat-mini"><span class="sv">0</span><span class="sl">AI can\'t sit your exam for you — the understanding must be yours</span></div></div>',
    callout: 'Think of AI as a private tutor available at 3am who never gets impatient, never judges you, and will explain the same thing ten different ways until it clicks.'
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
    body: '"Tell me about World War 2" gets a wall of generic text. "Explain the 3 main causes of WW2 in bullet points for a Year 11 History student, using specific examples" gets something you can actually use.',
    callout: 'The difference between a useful AI response and a useless one is almost always the quality of your question.'
  },
  {
    type: 'concept',
    title: 'The Anatomy of a Great Prompt — CTFC',
    bullets: [
      { term: 'Context', def: 'Who you are and what you\'re doing: "I\'m a Year 11 student revising for GCSE Geography"' },
      { term: 'Task', def: 'Exactly what you want: "explain the water cycle"' },
      { term: 'Format', def: 'How you want it: "in 5 bullet points / as a table / as a quiz"' },
      { term: 'Constraint', def: 'Any limits: "in under 100 words / avoid jargon / include real examples"' }
    ],
    callout: 'The single biggest upgrade: add "I\'m studying for GCSE [subject]" or "explain this like I\'m 14". Immediately better responses.'
  },
  {
    type: 'concept',
    title: 'The Pro Version — PTFC',
    body: 'Professionals and prompt engineers often use a slightly different four-letter framework: PTFC. It\'s the same idea with one tweak — they put Persona (who the AI should act as) at the front.',
    bullets: [
      { term: 'P — Persona', def: 'Who you want the AI to be: "Act as an experienced GCSE History examiner"' },
      { term: 'T — Task', def: 'Exactly what you want done: "analyse the causes of the First World War"' },
      { term: 'F — Format', def: 'How you want it: "3 paragraphs, each with a specific example, max 300 words"' },
      { term: 'C — Context (or Constraint)', def: 'Your situation and any limits: "I\'m a Year 10 student, AQA board, I struggle with evaluation"' }
    ],
    callout: 'CTFC and PTFC are basically the same framework. If you see "PTFC" in a tutorial or job advert for a prompt engineer, it\'s the same skill you\'re learning here.'
  },
  {
    type: 'concept',
    title: 'Prompting Is a Conversation',
    body: 'Don\'t expect perfection first time. Treat it like a back-and-forth with a tutor.',
    bullets: [
      'Follow up: "That\'s still too complex — can you simplify the third point?"',
      'Ask for alternatives: "Give me a different way to explain that"',
      'Push back: "My textbook says X — is that different from what you said? Which is right?"',
      'Narrow it down: "Focus just on the economic causes, not the political ones"'
    ]
  },
  {
    type: 'concept',
    title: 'Before and After — Real Upgrades',
    body: 'Look at the difference context and format make. Same AI, same second, completely different output.',
    bullets: [
      { term: '❌ Before', def: '"Tell me about QE."' },
      { term: '✅ After', def: '"Act as an AQA A-Level Economics examiner. Analyse how Quantitative Easing affected UK inflation 2009–2022, in a structured essay plan with an intro, three analytical paragraphs with named economists, and a conclusion. Max 600 words. UK English."' },
      { term: '❌ Before', def: '"Explain photosynthesis."' },
      { term: '✅ After', def: '"I\'m a GCSE Biology student. Explain the light-dependent reactions in 4 numbered steps (max 2 sentences each), then give me 3 self-test questions. I always confuse photosystems I and II."' }
    ],
    callout: 'The AI\'s capability is identical in each pair. The only thing that changed is how precisely you told it what you wanted.'
  },
  {
    type: 'activity',
    title: 'Upgrade These Prompts',
    task: 'Each prompt below is too vague. In the notes box, rewrite each one using: Context + Task + Format + Constraint.',
    steps: [
      '"What is osmosis?" → Better: ?',
      '"Help me with my essay" → Better: ?',
      '"Explain Shakespeare" → Better: ?',
      '"Revision help" → Better: ?'
    ],
    callout: 'Example upgrade: "What is osmosis?" → "I\'m revising GCSE Biology. Explain osmosis in 4 bullet points using a simple real-world example, avoiding technical jargon."'
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
    explanation: 'Context is the biggest upgrade: telling AI who you are ("Year 11 student revising GCSE Biology"), what you need ("explain osmosis"), and the format ("in 4 bullet points, no jargon") transforms a generic response into a targeted one. Specificity is the lever.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🎯', label: 'Specificity is the upgrade', text: 'vague prompts get vague answers' },
      { icon: '📋', label: 'Context + Task + Format + Constraint', text: 'the formula that works every time' },
      { icon: '🔄', label: 'Iterate', text: 'the first answer is rarely the best — the conversation improves it' },
      { icon: '💬', label: 'You can push back', text: 'disagree with AI and ask it to reconsider' }
    ]
  }
];

SLIDES_GCSE[108] = [
  {
    type: 'hook',
    title: 'Using AI to Summarise',
    body: 'Your Chemistry textbook chapter is 18 pages. Your exam is tomorrow at 9am. AI can help you create a study sheet in minutes — but only if you stay switched on while you do it.',
    callout: 'Passive summarising (paste, read, feel done) is almost useless. Active summarising (check, question, fill gaps) is powerful.'
  },
  {
    type: 'concept',
    title: 'What Summarisation Actually Does',
    body: 'AI reads the text and keeps the most frequently emphasised points. By definition, things get left out — and what gets left out might be exactly what the examiner asks about.',
    bullets: [
      'Summaries are starting points, not endpoints',
      'AI doesn\'t know what your examiner values — it just compresses',
      'You might memorise a summary that misses the key detail',
      'The solution: always check the summary against your specification or textbook'
    ]
  },
  {
    type: 'concept',
    title: 'Active vs Passive Summarising',
    bullets: [
      { term: '❌ Passive', def: 'Paste text in, read the summary, feel done. You\'ve outsourced thinking.' },
      { term: '✅ Active', def: 'Read the summary, ask "what\'s missing?", ask follow-up questions' },
      { term: '✅ Better', def: 'Ask AI to summarise, then ask it to quiz you on the material' },
      { term: '✅ Best', def: 'Write your own summary first, then use AI to fill the gaps you missed' }
    ]
  },
  {
    type: 'concept',
    title: 'The Revision Loop',
    body: 'Great revision isn\'t a one-way street of reading then hoping. It\'s a loop. Every time you go round, you learn more. AI makes the loop faster — but you still have to travel it.',
    bullets: [
      { term: '1. Explain', def: 'Ask AI to explain the topic clearly. Read it. Try to re-say it without looking' },
      { term: '2. Quiz', def: 'Ask AI to test you — questions first, answers later. Try to answer from memory' },
      { term: '3. Feedback', def: 'Check your answers against the AI\'s. Note specifically what you got wrong and why' },
      { term: '4. Consolidate', def: 'Write your own summary from memory. Check it. Round back to step 1 on anything shaky' }
    ],
    callout: 'Explain → Quiz → Feedback → Consolidate → Explain again. Each loop tightens your understanding. The loop is what expert tutors do — AI just lets you run it alone, on demand.'
  },
  {
    type: 'concept',
    title: 'The Cross-Check Habit',
    body: 'AI summaries compress — and compression means information is lost. Some of what gets lost may be exactly what your examiner rewards. Build the cross-check habit now — it will save you marks.',
    bullets: [
      'Cross-check against your exam board specification (the official list of what you must know)',
      'Cross-check against your textbook or class notes — does the AI match?',
      'If something is different, don\'t assume AI is right — find which source is correct',
      'For any number, date, or citation: verify independently before you trust it'
    ],
    callout: 'AI cannot verify itself. Asking the AI "are you sure?" will usually get you the same confident wrong answer, in slightly different words. You need an outside source.'
  },
  {
    type: 'activity',
    title: 'Summarise and Check',
    task: 'Think of a topic you\'re currently revising. In the notes box, answer these questions:',
    steps: [
      'Write 3–5 key points you\'d expect a good summary to cover',
      'Think: what would an examiner definitely want you to know?',
      'Write a follow-up prompt you\'d use to check for gaps — e.g. "Did you cover [X]?"',
      'Write a prompt to turn the summary into a 5-question quiz'
    ],
    callout: 'Power tip: ask AI to summarise, then separately ask "What are the most commonly missed points in GCSE exams on this topic?" — it gives you the high-value gaps.'
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
    explanation: 'AI summarises by keeping the most frequently emphasised points — but it doesn\'t know what YOUR examiner values. A key detail that gets cut might be exactly what the exam asks about. Always cross-check against your specification.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '✂️', label: 'Summaries always lose information', text: 'check them against your spec' },
      { icon: '🧠', label: 'Active beats passive', text: 'question the summary, don\'t just read it' },
      { icon: '🔍', label: 'Ask for what\'s missing', text: 'the gaps matter as much as what\'s there' },
      { icon: '⚡', label: 'AI + your brain', text: 'more powerful than either alone' }
    ]
  }
];

SLIDES_GCSE[109] = [
  {
    type: 'hook',
    title: 'Quizzing Yourself with AI',
    body: 'Re-reading your notes feels productive but barely improves exam performance. Research consistently shows that testing yourself is the single most effective revision technique. AI can generate unlimited tests on any topic.',
    callout: 'The testing effect: the effort of trying to remember something strengthens the memory. Getting it wrong and learning the right answer is especially powerful.'
  },
  {
    type: 'concept',
    title: 'Why Quizzes Work Better Than Re-reading',
    bullets: [
      { term: 'Retrieval practice', def: 'The act of trying to retrieve information strengthens the memory trace' },
      { term: 'Desirable difficulty', def: 'The struggle to remember is what causes the learning — easy revision = little learning' },
      { term: 'Spacing effect', def: 'Spreading quizzes out over days beats cramming everything the night before' },
      { term: 'Transfer', def: 'Being tested on unfamiliar questions (like AI generates) prepares you for exam questions you\'ve never seen' }
    ]
  },
  {
    type: 'concept',
    title: 'The Science — Three Named Effects',
    body: 'Self-quizzing with AI isn\'t just "a good idea". It taps three of the most well-replicated findings in cognitive science. Name them so you know why you\'re doing what you\'re doing.',
    bullets: [
      { term: 'Retrieval practice (the testing effect)', def: 'Trying to pull information out of your head strengthens the memory more than anything else. Quizzing > re-reading, every time' },
      { term: 'Spacing effect', def: 'The SAME amount of revision, spread over days, produces much better retention than crammed into one session. Short daily quizzes > one long one' },
      { term: 'Generation effect', def: 'Producing an answer yourself — even a wrong one — before seeing the right answer creates a stronger memory than reading the right answer first. Try, THEN check' }
    ],
    callout: 'These aren\'t tricks. They\'re how human memory actually works. AI just makes it easy to apply them to any subject, any time. If you use AI but skip these principles, you lose most of the benefit.'
  },
  {
    type: 'concept',
    title: 'Writing a Quiz Prompt That Actually Works',
    body: 'The more specific your request, the more useful the questions.',
    bullets: [
      'Include: subject, topic, year level, number of questions',
      'Specify question types: multiple choice, short answer, true/false, fill-in-the-blank',
      'Ask for questions FIRST — then answers separately so you test yourself',
      'Ask for explanations of wrong answers — that\'s where the learning happens'
    ],
    callout: 'Example: "Generate 6 GCSE Biology multiple-choice questions on DNA structure. Give me just the questions first. When I say ANSWERS, give me the correct answers with brief explanations."'
  },
  {
    type: 'activity',
    title: 'Design Your Quiz Prompt',
    task: 'Pick a topic you\'re currently revising. In the notes box, write the best possible quiz prompt for it.',
    steps: [
      'Include: subject, specific topic, year level (GCSE)',
      'Specify: number and type of questions',
      'Include the instruction to give questions first, answers when you ask',
      'Add: "Explain why each wrong answer is wrong" — the most powerful version'
    ],
    callout: 'If you have access to an AI tool right now, try your prompt and see what you get!'
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
    explanation: 'Retrieval practice works because the act of struggling to remember something strengthens the memory trace. Re-reading is passive — you recognise information without having to retrieve it. Getting a question wrong and learning the right answer is especially powerful for long-term retention.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🧪', label: 'Testing beats re-reading', text: 'retrieval practice is the most effective revision technique' },
      { icon: '🤖', label: 'AI = unlimited practice tests', text: 'on any topic, any format, any time' },
      { icon: '📋', label: 'Get questions first', text: 'test yourself before asking for answers' },
      { icon: '❌', label: 'Wrong answers teach most', text: 'ask AI to explain why wrong answers are wrong' }
    ]
  }
];

SLIDES_GCSE[110] = [
  {
    type: 'hook',
    title: 'Exam Technique with AI',
    body: 'You can know everything about a topic and still underperform in an exam if your structure is poor. A well-organised answer with slightly less knowledge often outscores a disorganised one with more. AI can help you fix structure before you sit the exam.',
    callout: 'Most marks are lost on structure and incomplete answers — not on total lack of knowledge.'
  },
  {
    type: 'concept',
    title: 'Using AI to Plan Essays and Structured Answers',
    bullets: [
      'Share your essay plan and ask AI to critique the structure',
      'Ask if you\'ve addressed all parts of the question — multi-part questions are where marks slip',
      'Ask AI to check argument logic: does each point follow from the last?',
      'Ask what a top-mark answer would include that yours doesn\'t'
    ],
    callout: 'Useful prompt: "Here is my essay plan for this GCSE English question: [paste question]. What\'s missing? What would a Grade 9 answer include that mine doesn\'t?"'
  },
  {
    type: 'concept',
    title: 'Getting Useful Feedback — What to Ask For',
    body: '"Is this good?" gets a less useful answer than specific questions.',
    bullets: [
      '"Does my introduction clearly state my argument?"',
      '"Is this PEEL structure correct?" (Point, Evidence, Explanation, Link)',
      '"Have I used specific evidence or is this too vague?"',
      '"What is the weakest point in my argument?"',
      '"Give me one sentence I could add to strengthen my conclusion"'
    ]
  },
  {
    type: 'concept',
    title: 'Worked Example — PTFC for Feedback',
    body: 'Apply the PTFC framework from Lesson 107 to a real feedback prompt. Here\'s one for a GCSE History essay plan on the causes of the First World War.',
    bullets: [
      { term: 'P — Persona', def: '"Act as an experienced AQA GCSE History examiner who marks at Grade 9 level."' },
      { term: 'T — Task', def: '"Critique the essay plan below. Identify what is missing, what is weakest, and what a Grade 9 answer would include that mine does not."' },
      { term: 'F — Format', def: '"Give me: (a) 3 bullet points of what\'s missing, (b) 1 specific sentence I could add to strengthen my argument, (c) 1 follow-up question I should answer myself."' },
      { term: 'C — Context', def: '"Question: \'Explain why the Schlieffen Plan failed.\' My plan: [paste 5 bullet points]. I\'m a Year 11 student. My weakest skill is linking evidence to the question."' }
    ],
    callout: 'Give AI the exam question, the plan, and your known weak spot. You\'ll get targeted feedback, not generic advice.'
  },
  {
    type: 'activity',
    title: 'Critique Your Own Work',
    task: 'Think of an essay question from a subject you\'re currently revising. In the notes box:',
    steps: [
      'Write the exam question (or make up a realistic one)',
      'Write a brief 3–5 bullet point essay plan',
      'Write the follow-up prompt you\'d use to get AI feedback on it — using PTFC',
      'Include: the original question, your plan, and what specifically you want critiqued'
    ],
    callout: 'Key: give AI the actual exam question alongside your plan — it needs to know what you\'re being asked to answer.'
  },
  {
    type: 'concept',
    title: 'What AI Cannot Tell You',
    body: 'AI can critique structure, point out gaps, and suggest phrasing. It cannot tell you whether you actually understand the material — only you (and your teacher) can do that.',
    bullets: [
      'AI cannot tell whether you could reproduce this answer without its help',
      'AI cannot tell whether you understand the concept or just matched its phrasing',
      'AI cannot tell whether you\'ll be able to adapt when the exam question is worded differently',
      'The acid test: close the laptop, put the plan away, try to explain the topic aloud — to yourself, to a friend, to the wall. If you can\'t, you don\'t understand it yet'
    ],
    callout: 'If AI rewrites your introduction and it "sounds better" — ask yourself: could I have written that? Could I do it again under exam conditions? If no, the improvement is borrowed, not earned.'
  },
  {
    type: 'quiz',
    question: 'You get AI feedback saying your essay introduction is "well-structured but could be more specific." What\'s the right next step?',
    options: [
      'Ask AI to rewrite the introduction for you and submit that version',
      'Ignore the feedback — AI doesn\'t know your marking criteria',
      'Use the feedback to identify the gap, then rewrite the introduction yourself',
      'Ask AI for a higher mark to override its feedback'
    ],
    correct: 2,
    explanation: 'AI feedback is most valuable when it identifies a gap you then fill yourself. If AI rewrites for you, you haven\'t practised the skill — and you won\'t be able to reproduce it in an exam. The feedback tells you what to fix; your brain does the actual fixing.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🏗️', label: 'Structure can be improved before the exam', text: 'AI can critique your plan, not just your final answer' },
      { icon: '❓', label: 'Ask specific questions', text: '"What\'s missing?" beats "Is this good?"' },
      { icon: '✍️', label: 'You still write the answer', text: 'AI helps you write a better one, not write it for you' },
      { icon: '🔍', label: 'PTFC for feedback', text: 'Persona + Task + Format + Context works for critique prompts too' },
      { icon: '📊', label: 'Technique is learnable', text: 'practising with feedback closes gaps before they cost you marks' }
    ]
  }
];

SLIDES_GCSE[111] = [
  {
    type: 'hook',
    title: 'Avoiding the Traps',
    body: 'A 2024 study found that 89% of UK universities now have an AI policy — but only 23% of students had actually read it. Meanwhile, 67% admitted to using AI for coursework regularly. AI detection tools have accuracy rates of only 39–76% — barely better than guessing in some cases. And AI frequently "hallucinates" confident-sounding facts that are completely false.<div class="hook-stats-row"><div class="hook-stat-mini"><span class="sv">67%</span><span class="sl">of students use AI for coursework — but most don\'t know their school\'s rules</span></div><div class="hook-stat-mini"><span class="sv">39–76%</span><span class="sl">accuracy of AI detection tools — this is why they aren\'t reliable evidence</span></div><div class="hook-stat-mini"><span class="sv">🎭</span><span class="sl">AI "hallucinations" — confident wrong answers — are common and hard to spot</span></div><div class="hook-stat-mini"><span class="sv">3</span><span class="sl">traps: plagiarism, hallucinations, over-reliance — all avoidable</span></div></div>',
    callout: 'There are three traps that catch students out: plagiarism, hallucinations, and over-reliance. All three are avoidable — if you know what to look for.'
  },
  {
    type: 'concept',
    title: 'The Plagiarism Line — Where It Is',
    bullets: [
      '✅ Using AI to understand a concept: fine in most schools',
      '✅ Using AI to give feedback on your writing: usually fine',
      '❌ Submitting AI-written work as your own: academic misconduct',
      '❌ Copying an AI answer without understanding it: missing the point and the marks',
      'Check your school\'s specific policy — rules vary',
      'Practical rule: if you couldn\'t explain it verbally to your teacher, you shouldn\'t submit it'
    ]
  },
  {
    type: 'concept',
    title: 'Hallucinations — When AI Confidently Lies',
    body: 'AI models sometimes generate completely false information that sounds entirely plausible. They don\'t know they\'re wrong — there\'s no truth-checker inside.',
    bullets: [
      'Fake research papers cited with real-sounding authors and journals',
      'Wrong historical dates, incorrect laws, non-existent places',
      'Especially dangerous for revision: you might memorise a wrong fact',
      'The fix: always cross-check factual claims against your textbook or a reliable source'
    ]
  },
  {
    type: 'concept',
    title: 'Over-reliance — The Quietest Trap',
    body: 'Plagiarism gets you caught. Hallucinations embarrass you. Over-reliance is the one that slowly damages you without you noticing — you stop practising the thinking the exam actually tests.',
    bullets: [
      { term: 'What it looks like', def: 'You can produce decent work with AI, but struggle in a closed-book exam where no AI is available' },
      { term: 'Why it happens', def: 'Every time AI does the thinking for you, you skip the reps that build the skill' },
      { term: 'Research warning', def: 'A 2025 MIT study used EEG scans to show students who used AI for essays had lower brain engagement and remembered less of their own writing afterwards' },
      { term: 'The fix', def: 'Use AI to check your thinking, not to replace it. First draft, first plan, first attempt — always you' }
    ],
    sources: [
      { label: 'MIT Media Lab (2025) — Your Brain on ChatGPT: EEG study of cognitive cost', url: 'https://www.media.mit.edu/publications/your-brain-on-chatgpt/' }
    ]
  },
  {
    type: 'scenario',
    title: 'Spot the Risk',
    situation: 'Jamie is revising GCSE Chemistry. He asks ChatGPT to explain electrolysis. The explanation sounds great, Jamie is confident. He doesn\'t check it against his textbook. In the exam, his answer includes one critical error that ChatGPT invented — a detail that doesn\'t match his specification.',
    question: 'What single step would have prevented this? What should Jamie do differently next time?'
  },
  {
    type: 'activity',
    title: 'Audit Your Last AI Session',
    task: 'Think about the most recent time you used AI for school work. In the notes box, answer each question honestly — this is for you, not a teacher.',
    steps: [
      'What did you ask AI to do? (e.g. explain, plan, draft, rewrite, summarise)',
      'Of the output, how much went into your final work unchanged? (roughly %)',
      'Did you verify any factual claims against a textbook, spec, or reliable source?',
      'Could you re-do the same task right now with no AI? Be honest.',
      'Which of the three traps (plagiarism / hallucination / over-reliance) were you closest to?',
      'One sentence: what will you do differently next time?'
    ],
    reveal: '<strong>What to notice:</strong> If you answered "most of it" to question 2 and "not really" to question 4, you\'re building brittle knowledge — good until the AI disappears. The fix isn\'t to stop using AI; it\'s to use it for understanding, then close the tab and produce the work yourself.'
  },
  {
    type: 'quiz',
    question: 'Which of these is the safest use of AI for GCSE coursework in most schools?',
    options: [
      'Pasting the question into ChatGPT and submitting the answer it gives you',
      'Asking AI to explain a concept you don\'t understand, then writing your own answer in your own words',
      'Using AI to completely rewrite your essay so it "sounds better"',
      'Getting AI to invent sources and quotes to strengthen your argument'
    ],
    correct: 1,
    explanation: 'Option B uses AI as a study aid — to help you understand — then you do the writing. Options A and C submit AI work as your own (misconduct). Option D fabricates evidence (also misconduct, and hallucinations make it dangerous). When in doubt: could you explain this to your teacher verbally? If not, you shouldn\'t submit it.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚖️', label: 'Submitting AI work as yours = misconduct', text: 'check your school policy; the line is clear' },
      { icon: '🎭', label: 'Hallucinations are real', text: 'AI will confidently give you wrong facts — always cross-check' },
      { icon: '🧠', label: 'Over-reliance costs you skill', text: 'skipping the thinking is the trap that damages you slowly' },
      { icon: '👩‍🏫', label: 'Teachers know your writing', text: 'a sudden quality jump is an obvious flag' },
      { icon: '📖', label: 'Understand then close the tab', text: 'use AI to understand, then write in your own words' }
    ]
  }
];

SLIDES_GCSE[112] = [
  {
    type: 'hook',
    title: 'Your Revision Toolkit',
    body: 'The best revision system uses AI in exactly the right places — and keeps you doing the actual thinking. Here\'s how to build one that works for any subject, any exam.',
    callout: 'The key rule: AI helps you before and after you try — never instead of trying.'
  },
  {
    type: 'concept',
    title: 'A 4-Step AI-Assisted Revision Workflow',
    bullets: [
      { term: '1. Understand', def: 'Use AI to explain concepts you don\'t get: "explain X like I\'m 14, using an example"' },
      { term: '2. Practise', def: 'Generate questions, then answer them without looking at notes' },
      { term: '3. Feedback', def: 'Share your answer with AI and ask what\'s missing or incorrect' },
      { term: '4. Consolidate', def: 'Write your own notes from memory, then check them against the original' }
    ],
    callout: 'This cycle mirrors how expert tutors work — AI just makes it available to everyone, for free, at any hour.'
  },
  {
    type: 'concept',
    title: 'Knowing When NOT to Use AI',
    bullets: [
      'When you haven\'t tried the problem yourself first',
      'When the task is building a skill (writing, problem-solving, critical analysis)',
      'When you\'re about to submit the output as your own work',
      'When you\'re too tired to evaluate what it says critically',
      'When the subject rewards struggle — some understanding only comes from wrestling with hard material'
    ]
  },
  {
    type: 'activity',
    title: 'Build Your Revision Plan',
    task: 'Pick one subject you\'re currently revising. In the notes box, write a specific AI-assisted revision plan for one topic within it.',
    steps: [
      'Topic: what specifically are you revising?',
      'Understand step: what would you ask AI to explain?',
      'Practise step: what kind of questions would you ask it to generate?',
      'Feedback step: what would you submit for AI review?',
      'Consolidate step: how would you check your own notes?'
    ],
    callout: 'Make it specific — "explain osmosis" is better than "help with biology".'
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
    explanation: 'The key rule is that you must engage with and own the output. Submitting AI-generated work as your own is plagiarism — and more importantly, you learn nothing from it. AI should accelerate your learning, not replace it.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🔄', label: 'Understand → Practise → Feedback → Consolidate', text: 'a cycle that works for any subject' },
      { icon: '✋', label: 'Always try first', text: 'AI improves your effort — it doesn\'t replace it' },
      { icon: '🚫', label: 'Know when not to use it', text: 'some skills only develop through struggle' },
      { icon: '🛠️', label: 'A complete toolkit', text: 'explain, quiz, feedback, summarise — four powerful uses' },
      { icon: '🧑‍🎓', label: 'You are the learner', text: 'AI is the tool. That distinction matters.' }
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
    bullets: [
      { term: 'Role', def: '"Act as a patient GCSE tutor" — sets the tone and level of the response' },
      { term: 'Task', def: '"Explain how the heart pumps blood" — be specific about exactly what you want' },
      { term: 'Context', def: '"I\'m studying GCSE Biology, Unit 3" — tells AI what level to pitch at' },
      { term: 'Format', def: '"In 5 bullet points, in simple language" — shapes how the response looks' },
      { term: 'Constraint', def: '"Avoid medical jargon, under 150 words" — prevents the common pitfalls' }
    ],
    callout: 'You don\'t need all five every time — but the more specific you are, the more useful the output.'
  },
  {
    type: 'concept',
    title: 'Common Prompting Mistakes',
    bullets: [
      { term: 'Too vague', def: '"Help me with biology" — AI doesn\'t know what you need, so it guesses broadly' },
      { term: 'No format', def: 'You get whatever the AI decides — not necessarily what\'s useful' },
      { term: 'No iteration', def: 'Accepting the first response even when it\'s not quite right' },
      { term: 'Treating it like a search engine', def: 'AI is best in conversation, not single one-shot queries' }
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
    task: 'For each pair below, decide which prompt gets a better response and explain why in the notes box.',
    steps: [
      'A: "What is globalisation?" vs B: "Explain globalisation and its effects for GCSE Geography in 4 points, using real examples"',
      'A: "Write me an essay" vs B: "Give feedback on this essay plan: [plan]. What would improve it for a top grade?"',
      'A: "What causes climate change?" vs B: "List the 5 main human causes of climate change with one specific piece of evidence for each"'
    ],
    reveal: '<strong>In every case, B is better</strong> — because it\'s specific about what\'s needed, who it\'s for, and what format works.'
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
      { icon: '🎯', label: 'Specificity wins', text: 'the single biggest upgrade to any prompt' },
      { icon: '📋', label: 'Role + Task + Context + Format + Constraint', text: 'five levers, use as many as you need' },
      { icon: '🔄', label: 'Iterate', text: 'the conversation improves the output — first try is rarely best' },
      { icon: '🤝', label: 'Collaborate, don\'t command', text: 'treat it like working with a tutor, not issuing an order' }
    ]
  }
];

SLIDES_GCSE[114] = [
  {
    type: 'hook',
    title: 'Evaluating AI Output',
    body: 'AI can be wrong, outdated, overconfident and misleading — all while sounding perfectly authoritative. Knowing how to evaluate what it gives you is now one of the most important skills you can build.',
    callout: 'Confident language from an AI is not evidence of accuracy. These are completely separate things.'
  },
  {
    type: 'concept',
    title: '4 Checks for Any AI Response',
    bullets: [
      { term: '1. Does it answer the question?', def: 'AI sometimes sidesteps or gives a related answer — check it addressed what you actually asked' },
      { term: '2. Is it verifiable?', def: 'Can you find this in a textbook, official source, or reputable website?' },
      { term: '3. Is it up to date?', def: 'AI knowledge has a cut-off — events, laws, and research from recent years may be wrong' },
      { term: '4. Does it match what you know?', def: 'If it contradicts your textbook or lessons — investigate, don\'t just accept' }
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
    bullets: [
      'Specific statistics with no source — frequently invented',
      'Names of papers, books or studies — often hallucinated',
      'Very confident language about genuinely uncertain topics',
      'Perfect-sounding answers to genuinely complex questions',
      'No nuance — real issues rarely have clean, simple answers'
    ]
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
    bullets: [
      { term: 'Text', def: 'Articles, stories, poetry, scripts, code, song lyrics — at high volume and speed' },
      { term: 'Images', def: 'Photorealistic, artistic, illustrated, in any style — from a text description' },
      { term: 'Music', def: 'Original compositions in any genre, with specific instruments, mood, tempo' },
      { term: 'Video', def: 'Short films and animations — rapidly improving in quality' },
      { term: 'Voice', def: 'Cloned voices, synthetic speech that sounds indistinguishable from real people' }
    ]
  },
  {
    type: 'concept',
    title: 'Collaboration vs Replacement',
    body: 'Most professional creators now use AI as part of their workflow — for drafts, ideas, and reference. But the question of what AI adds vs what it replaces is genuinely contested.',
    bullets: [
      'AI is very good at: volume, variation, speed, remixing existing styles',
      'Humans are better at: original vision, emotional resonance, cultural context, intention',
      'Key question: is AI being creative, or recombining patterns from millions of human creators?',
      'Real risk: if AI produces "good enough" content at near-zero cost, what happens to creative industries?'
    ]
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
    body: 'The smartest use of AI isn\'t asking it to think for you. It\'s using it to save time on tasks that don\'t require thinking — so you have more time for the things that actually matter.',
    callout: 'But there\'s a hidden cost: skills you don\'t practise, you lose. Some tasks are boring for a reason.'
  },
  {
    type: 'concept',
    title: 'Tasks AI Handles Well',
    bullets: [
      'Formatting and restructuring documents',
      'Converting text between formats (essay → bullet points, notes → table)',
      'Translating text between languages',
      'Generating first drafts for you to edit and improve',
      'Summarising long documents',
      'Writing repetitive emails or templates',
      'Organising a list of ideas into a coherent structure'
    ]
  },
  {
    type: 'activity',
    title: 'Sort the Tasks',
    task: 'In the notes box, make two lists from your school life:',
    steps: [
      'List A — Tasks AI could usefully handle (saves time, low learning value)',
      'List B — Tasks AI should NOT handle for you (builds skills, understanding, or creativity)',
      'Think about: homework, revision, essays, note-taking, research, creative projects, problem-solving'
    ],
    callout: 'The question isn\'t "can AI do this?" — it\'s "should I let it?" Some tasks are worth doing yourself even if AI would be faster.'
  },
  {
    type: 'concept',
    title: 'The Hidden Cost of Automation',
    body: 'Researchers call this "cognitive offloading" — moving mental work from your brain to a tool. Some offloading is fine (calculators). Some quietly erodes skills you actually need.',
    bullets: [
      { term: 'Skills you don\'t practise, you lose', def: 'Writing, mental arithmetic, memory — regular use keeps them sharp' },
      { term: 'Writing shapes thinking', def: 'Outsourcing writing can mean outsourcing the thinking that writing forces you to do' },
      { term: 'Productive struggle', def: 'Some tasks are hard for a reason — that difficulty is where the learning happens' },
      { term: 'Dependence risk', def: 'If AI tools become unavailable, what can you still do without them?' },
      { term: 'The GPS effect', def: 'Studies show heavy GPS users lose navigation ability. Heavy AI users risk losing the thinking skills they delegate.' }
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
    type: 'quiz',
    question: 'Which of these is the best use of AI automation?',
    options: [
      'Writing your English essay so you can spend time on other subjects',
      'Solving your Maths problem set so you can check your answers',
      'Converting a set of notes into a formatted table or summary sheet',
      'Re-reading your History notes while AI summarises them for you'
    ],
    correct: 2,
    explanation: 'Converting notes into a formatted table is genuinely repetitive — AI saves time without replacing a skill you need to build. Writing your essay or solving your problem set removes the learning. Re-reading while AI summarises means you do neither activity properly.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '⚙️', label: 'Use AI for genuinely repetitive tasks', text: 'formatting, converting, drafting templates' },
      { icon: '🧠', label: 'Keep the thinking for yourself', text: 'creativity, analysis, problem-solving' },
      { icon: '⚠️', label: 'Hidden cost of automation', text: 'skills you delegate you may lose' },
      { icon: '✅', label: 'Automate wisely', text: 'save time, not skills' }
    ]
  }
];

SLIDES_GCSE[117] = [
  {
    type: 'hook',
    title: 'Working with AI Tools',
    body: 'ChatGPT, Claude, Gemini — they all look similar and all answer questions in full sentences. But they were trained differently, have different strengths, and behave differently in ways that matter.',
    callout: 'Knowing which tool to use for which task gets you better results faster.'
  },
  {
    type: 'concept',
    title: 'How the Major Tools Compare',
    bullets: [
      { term: 'ChatGPT (OpenAI)', def: 'Most widely used; strong general reasoning; good for coding, creative tasks, broad questions' },
      { term: 'Claude (Anthropic)', def: 'Strong at long documents and nuanced analysis; careful about safety; good for detailed feedback' },
      { term: 'Gemini (Google)', def: 'Integrated with Google Search; best for current information and web-connected tasks' },
      { term: 'Microsoft Copilot', def: 'Built into Windows and Office apps; useful for document and spreadsheet tasks' },
      { term: 'All of them', def: 'Can be wrong — the brand name doesn\'t guarantee accuracy. Always verify.' }
    ]
  },
  {
    type: 'concept',
    title: 'Choosing the Right Tool',
    bullets: [
      { term: 'Current news / recent events', def: 'Gemini or Bing — these have live web access' },
      { term: 'Long documents / nuanced feedback', def: 'Claude — handles lengthy text well' },
      { term: 'Coding help', def: 'Any major model — ChatGPT and Claude both strong' },
      { term: 'School revision in general', def: 'Whichever you have access to — then verify important facts' },
      { term: 'Check your school\'s policy', def: 'Some schools permit certain tools but not others — always check first' }
    ]
  },
  {
    type: 'quiz',
    question: 'You need information about something that happened last week for a project. Which is the best approach?',
    options: [
      'Ask any AI chatbot — they all have up-to-date information',
      'Use an AI tool with live web search, like Gemini or Bing Copilot',
      'AI tools can\'t help with current events at all',
      'Use a chatbot with a knowledge cut-off and trust the answer'
    ],
    correct: 1,
    explanation: 'Most AI chatbots have a knowledge cut-off and won\'t know about last week. Tools with live web search (Gemini, Bing) can retrieve current information — but still verify what they return.'
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
      { icon: '🔧', label: 'Different tools have different strengths', text: 'match the tool to the task' },
      { icon: '📅', label: 'For current events, use live search', text: 'Gemini or Bing for recent information' },
      { icon: '📜', label: 'Check your school\'s policy', text: 'permitted tools vary between schools' },
      { icon: '🔒', label: 'Free tiers may train on your input', text: 'keep private and personal data out of public chatbots' },
      { icon: '⚠️', label: 'No tool guarantees accuracy', text: 'verify regardless of which one you use' }
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
    body: 'Professional prompt engineers spend real time crafting, testing and iterating. The difference between a mediocre and excellent prompt can be the difference between wasted time and a genuinely useful result.',
    bullets: [
      'Specify the role: "Act as a patient GCSE tutor who explains things clearly"',
      'Specify the exact output: format, length, style, tone',
      'Anticipate problems: "Don\'t include anything requiring university-level knowledge"',
      'Build in quality checks: "Flag anything you\'re not certain about"',
      'Iterate: test it, see where it falls short, refine'
    ]
  },
  {
    type: 'activity',
    title: 'The Challenge — Choose One',
    task: 'Pick one task below and write the best possible prompt for it. In the notes box, write your full prompt including role, task, context, format, and constraints.',
    steps: [
      'Task A: Get AI to create a revision quiz for a GCSE topic you\'re currently studying',
      'Task B: Get AI to give you detailed, useful feedback on an essay plan',
      'Task C: Get AI to explain the most difficult concept in your hardest subject in a way that finally makes sense to you'
    ],
    callout: 'Challenge: write it so clearly that someone could hand it to any AI tool and get a useful response — without changing a word.'
  },
  {
    type: 'concept',
    title: 'What Makes It Work — The Debrief',
    bullets: [
      { term: 'Specificity', def: 'Beats vagueness every time — the more precise, the less room for unhelpful guessing' },
      { term: 'Tell it who it\'s talking to', def: '"A 15-year-old GCSE student" completely changes the level and tone' },
      { term: 'Format instructions', def: 'Numbered list, table, bullet points — make responses instantly more usable' },
      { term: '"Flag uncertainty"', def: 'Asking AI to say when it\'s unsure catches hallucinations before they mislead you' }
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
    explanation: 'Iteration is a core prompting skill. The first response is rarely the best. A specific follow-up that narrows the topic, requests a different format, or asks for examples usually produces a significantly more useful response than starting over or accepting a mediocre answer.'
  },
  {
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '🏆', label: 'Prompting is a learnable skill', text: 'it improves with deliberate practice' },
      { icon: '🎯', label: 'Specificity, format, context', text: 'your three main levers' },
      { icon: '🔄', label: 'Always iterate', text: 'rarely get the best result first time' },
      { icon: '💼', label: 'This is a professional skill', text: 'increasingly valued across every industry' }
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
    body: 'Two people can search the exact same thing on Google and see completely different results. Your algorithm has built you a personalised version of the internet — and you might not know how narrow it\'s become.',
    callout: 'A filter bubble isn\'t something that happens to other people. It\'s happening to all of us — including you.'
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
    type: 'summary',
    title: 'What You\'ve Learned',
    points: [
      { icon: '📥', label: 'Biased data produces biased AI', text: 'the model reflects the patterns in its training — including human discrimination' },
      { icon: '🤖', label: 'The AI isn\'t "trying" to discriminate', text: 'it\'s replicating patterns from history — but the harm is the same' },
      { icon: '⚖️', label: 'Real consequences', text: 'Robert Williams arrested wrongly. CV systems filtering out women. Healthcare AI working worse for some patients.' },
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
    body: 'An AI correctly diagnosed a patient with a rare condition. The doctor overrode the AI\'s diagnosis based on his own clinical judgment. The patient died. Later analysis confirmed the AI was right. Who bears responsibility?',
    callout: 'AI ethics isn\'t a philosophy exercise. It involves real decisions, real systems, and real consequences.'
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
