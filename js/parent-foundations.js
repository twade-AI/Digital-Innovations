/* Parent course foundations: fictional on-screen practice; November 2026 Parent Guide is the approved school position. */
var PARENT_LESSONS = typeof PARENT_LESSONS === 'undefined' ? [] : PARENT_LESSONS;
PARENT_LESSONS.push(
{
  "id": 301,
  "n": 1,
  "title": "AI in your child’s world",
  "minutes": 15,
  "goal": "Explain three different jobs AI can do, and open a useful conversation about how a young person uses it.",
  "desc": "Start with familiar moments: the feed, the homework question and the convincing chatbot. Work out where your judgement belongs.",
  "slides": [
    {
      "type": "hook",
      "title": "“Everyone is using it.” Where do you start?",
      "body": "<p>A teenager asks a chatbot to explain a science idea. A music app suggests another track. A convincing image appears in a group chat. All three may involve AI, but they raise different questions.</p><p>You do not need to become a computer scientist to take an interest. In this lesson you will identify the job the technology is doing, then practise a conversation that helps a young person think for themselves.</p>",
      "callout": "Allow around 15 minutes. Choose responses on screen and compare the feedback. No writing, account or real family conversation is required."
    },
    {
      "type": "concept",
      "title": "AI is a broad name, not one clever machine",
      "body": "<p>AI describes computer systems designed to carry out tasks such as recognising patterns, making predictions or generating material. Different systems do different jobs. A recommendation system may predict which clip will keep someone watching. Generative AI can produce a new answer, image or sound in response to an instruction.</p><p>That instruction is usually called a <strong>prompt</strong>. Gemini is an example of a generative AI assistant. Its fluent conversation does not establish that it understands your child, knows the answer or has checked the facts.</p>",
      "callout": "Ask “What job is this system doing here?” before deciding whether it is useful.",
      "sources": [
        {
          "label": "DfE: generative AI in education",
          "url": "https://www.gov.uk/government/publications/generative-artificial-intelligence-in-education/generative-artificial-intelligence-ai-in-education"
        }
      ]
    },
    {
      "type": "concept",
      "title": "The same technology can support very different purposes",
      "body": "<p>Consider a fictional pupil, Alex, learning fractions. An explanation using slices of a pizza might help Alex understand why two quarters equal one half. Asking for the finished worksheet may get the page completed while leaving the misunderstanding untouched.</p><p>The important difference is what Alex does with the help. Can Alex explain the idea and use it on another question? Haileybury’s principle <strong>Don’t steal the struggle</strong> asks us to preserve that thinking. A better answer on a screen is not, by itself, evidence of learning.</p>",
      "callout": "A useful first question: “What are you trying to learn or do?”"
    },
    {
      "type": "concept",
      "title": "Four principles to keep beside you",
      "body": "<p>The Haileybury AI Parent Guide offers four principles. They are useful starting points for a conversation, not a substitute for the instructions on a particular task.</p>",
      "bullets": [
        {
          "term": "Human judgement first",
          "text": "People remain responsible for checking an answer and deciding what to do."
        },
        {
          "term": "Don’t steal the struggle",
          "text": "Keep the thinking that develops understanding; offer help that makes the next step possible."
        },
        {
          "term": "Transparent by default",
          "text": "Be honest about what AI contributed and follow the task’s recording requirements."
        },
        {
          "term": "Dignity and care",
          "text": "Consider the people whose information, work or feelings could be affected."
        }
      ],
      "callout": "“Struggle” does not mean leaving someone unsupported. Agreed assistive support stays in place."
    },
    {
      "type": "parent-interaction",
      "title": "Which questions fit the situation?",
      "question": {
        "kind": "select",
        "prompt": "Sam’s app recommends clips; Jo uses a chatbot to make a birthday poem; Ari asks it to explain a maths method. Select every question that checks something useful about these uses.",
        "options": [
          "For Sam: “Are you choosing what to watch, or continuing because another clip keeps appearing?”",
          "For Jo: “Because it is only a birthday poem, can we assume private details are safe to include?”",
          "For Ari: “Can you use the explanation on a different example yourself, keeping agreed support?”",
          "For Jo: “Have you checked the poem suits the person and kept their private details out?”"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "Sam’s question checks purpose and attention; Ari’s checks learning; Jo’s checks judgement and care. A casual creative task still needs sensible privacy choices. None requires inspecting anyone’s actual account."
      }
    },
    {
      "type": "scenario",
      "title": "The conversation at the kitchen table",
      "situation": "<p>A fictional 15-year-old says, “I used AI on the history homework.” You have not seen the task instructions or what the tool did.</p>",
      "question": "Which opening is most likely to give you useful information?",
      "choices": [
        {
          "text": "“Then the homework cannot be yours.”",
          "outcome": "That reaches a conclusion before you know what happened. There may be a legitimate explanation, a permitted use or a problem to resolve. Start by asking about the task and the contribution."
        },
        {
          "text": "“What was the task, and what did AI help you with?”",
          "outcome": "This leaves room for an honest account. Follow with “What did you work out for yourself?” Then check the task instructions together. Curiosity and clear boundaries can work together."
        },
        {
          "text": "“As long as it sounds good, that is fine.”",
          "outcome": "A polished answer does not tell you whether the use was permitted or whether any learning happened. Ask about the process before accepting the outcome."
        }
      ]
    },
    {
      "type": "concept",
      "title": "When the answer is “You don’t get it”",
      "body": "<p>Sometimes a sensible question meets a defensive answer. Try keeping the next step small rather than asking all your questions at once.</p><p><strong>Parent:</strong> “What did the tool help you with?”<br><strong>Teenager:</strong> “You don’t get it. Everyone uses it.”<br><strong>Parent:</strong> “You’re right that I haven’t used it for this task. Show me one useful part. Then we can check what your teacher asked you to do.”<br><strong>Teenager:</strong> “It gave me three arguments.”<br><strong>Parent:</strong> “Which would you choose, and why?”</p><p>The parent does not have to approve the use before understanding it. Asking about one choice creates a starting point; the task rules still need checking.</p>",
      "callout": "With a younger pupil, explore a school-directed example together. With an older teenager, give them room to explain their process; do not make unrestricted access to private chats the price of the conversation."
    },
    {
      "type": "concept",
      "title": "You can be useful without knowing the subject",
      "body": "<p>A parent can help someone organise a task, name a sticking point or decide when to ask a teacher. You do not need to judge every step of an unfamiliar equation.</p><p>Try: “Show me the bit you understand so far.” Give thinking time. Then ask what kind of help would make the next step possible. With an older teenager, agree how they will show responsible choices rather than requiring access to every conversation.</p><p>If you cannot tell whether an explanation is accurate, say so: “I can follow how you approached it, but we need the class source or your teacher to check that part.” This models honest judgement rather than guessing.</p>",
      "callout": "Our course activities work with fictional situations. A real family conversation is optional, never a condition of completion.",
      "sources": [
        {
          "label": "EEF: parental engagement and practical support",
          "url": "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/parental-engagement"
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Check your understanding",
      "question": "A Haileybury pupil has a clear AI explanation of a topic. What best reflects “Don’t steal the struggle”?",
      "options": [
        "Accept it because it sounds confident.",
        "Check task permission, then ask them to explain the idea and try a different example, keeping agreed support.",
        "Remove every support tool before allowing them to continue."
      ],
      "correct": 1,
      "explanation": "Permission comes first. Explaining and applying the idea gives evidence of understanding. Confidence tells you little about what the pupil can do. Preserving the thinking does not mean withdrawing agreed assistive support."
    },
    {
      "type": "summary",
      "title": "Start with interest. Keep the judgement.",
      "points": [
        {
          "label": "Name the job",
          "text": "Recommendation, generation and other AI uses call for different questions."
        },
        {
          "label": "Keep the purpose visible",
          "text": "What is the person trying to learn or achieve?"
        },
        {
          "label": "Ask about the contribution",
          "text": "“What did AI help you with, and what did you work out for yourself?”"
        },
        {
          "label": "Try the conversation",
          "text": "Choose a useful opening and follow-up in the final on-screen cases. You do not need to write a script."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply the four principles to three short decisions. Choose on screen; the explanations will help you revisit anything unclear.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A fictional teenager says, “AI gave me arguments for tomorrow’s discussion.” You have not seen the task. Which response best opens a useful conversation?",
        "options": [
          "“What was the discussion asking you to consider, which argument would you choose, and what did the tool contribute?”",
          "“If the arguments are accurate, there is no need to ask how you prepared.”",
          "“The number of arguments will show whether you have done enough work.”"
        ],
        "correct": 0,
        "explanation": "This establishes purpose, contribution and the learner’s own choice. Then check the task instructions and evidence. Accuracy matters, but does not alone establish permission or understanding."
      },
      {
        "kind": "select",
        "prompt": "A parent wants to apply “Don’t steal the struggle” and “Dignity and care”. Which actions fit? Select all that apply.",
        "options": [
          "Keep agreed read-aloud support while the learner explains a new example.",
          "Ask the learner to identify the choice they made rather than judging only the finished answer.",
          "Remove all tools and support so the attempt is fully independent.",
          "Demand the entire private chat history before asking what the task involved."
        ],
        "correct": [
          0,
          1
        ],
        "explanation": "The target is the learner’s thinking, with appropriate access support retained. Removing every aid confuses access with reasoning; unrestricted access to private chats is not the starting condition for a useful conversation."
      },
      {
        "kind": "order",
        "prompt": "Before trying permitted AI study help, arrange this course’s sequence from purpose to learning check.",
        "options": [
          "Inspect the help and try a fresh example with agreed support.",
          "Identify what the learner is trying to understand and where they are stuck.",
          "Use the permitted help for the specific difficulty.",
          "Check the task permission and school-approved tool/account."
        ],
        "correct": [
          1,
          3,
          2,
          0
        ],
        "explanation": "Start with the learning purpose, establish permission before tool use, use help for that purpose, then inspect the result and check what the learner can do. A tool’s availability is not permission."
      }
    ]
  }
},
{
  "id": 302,
  "n": 2,
  "title": "Why a convincing answer can still be wrong",
  "minutes": 15,
  "goal": "Separate a claim from its evidence and check whether a source supports, contradicts or leaves it uncertain.",
  "desc": "Put a confident answer on trial. Learn to check what matters without becoming suspicious of everything.",
  "slides": [
    {
      "type": "hook",
      "title": "It sounds certain. Is it?",
      "body": "<p>A chatbot gives a precise time, a sensible explanation and a neat list of sources. It feels reassuring. But precision and confidence are features of the answer’s presentation, not proof that the answer is right.</p><p>You will practise a small check you can actually use: take one important claim, open the relevant source, and decide what the source establishes. The practice pack is included, so you do not need to search or sign in.</p>",
      "callout": "Allow around 15 minutes. All practice sources are included. Make your choices on screen; no notes, account or searching are required."
    },
    {
      "type": "concept",
      "title": "How a fluent mistake happens",
      "body": "<p>A generative language model produces text using patterns learned during training and the information available in the conversation or its connected tools. It can generate a plausible sentence without establishing that the sentence is true. Some systems retrieve information, but retrieval does not guarantee that the final answer represents it correctly.</p><p>An invented fact, quotation or reference is often called a <strong>hallucination</strong>. The practical lesson is simple: do not use the tool’s confident wording as your evidence.</p>",
      "sources": [
        {
          "label": "DfE: accuracy and other limitations of generative AI",
          "url": "https://www.gov.uk/government/publications/generative-artificial-intelligence-in-education/generative-artificial-intelligence-ai-in-education"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Three useful verdicts",
      "body": "<p>First turn a broad answer into a claim you can check: “The workshop is free” is more useful than “This looks reliable”. Then read the relevant passage from a suitable source.</p>",
      "bullets": [
        {
          "term": "Supported",
          "text": "The source actually gives the information claimed, within its stated scope."
        },
        {
          "term": "Contradicted",
          "text": "The source gives information that conflicts with the claim."
        },
        {
          "term": "Not established",
          "text": "The source does not settle the point. Missing information is not permission to invent an answer."
        }
      ],
      "callout": "A link beside a sentence is a route to evidence. It is not the evidence check itself."
    },
    {
      "type": "concept",
      "title": "Worked example: a sentence that says too much",
      "body": "<p><strong>Fictional source:</strong> “The museum’s Saturday model-making session starts at 10 am. Booking is required. Entry to the permanent galleries is free.”</p><p><strong>Generated answer:</strong> “The model-making session is free and you can drop in at 10 am.”</p><p>The start time is supported. “Drop in” conflicts with the booking requirement. The workshop price is not established: free gallery entry does not tell us what the separate session costs. A useful correction is: “The session starts at 10 am and requires booking. Check the session fee before booking.”</p>",
      "callout": "Notice the narrow correction. We do not need to declare the whole answer true or false."
    },
    {
      "type": "parent-interaction",
      "title": "Check the repair-club answer",
      "question": {
        "kind": "select",
        "prompt": "Fictional notice: “Friday, 12.45–1.30 pm, Room 4. Six places. Email to request a place; a place is confirmed only when you receive a reply. Bring a broken pencil case or loose button. Electrical items cannot be accepted.” AI says the session starts at 12.45, emailing guarantees a place, the session is free and it can repair headphones. Select every justified verdict.",
        "options": [
          "The 12.45 start time is supported.",
          "A guaranteed place is contradicted: a reply confirming it is needed.",
          "The price is not established by the notice.",
          "Headphone repair is contradicted by the exclusion of electrical items.",
          "The session is free because no price appears."
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "explanation": "Keep the accurate start time, correct the booking claim, state the missing fee information and remove the electrical-item suggestion. Not established is different from false: the notice gives no basis for deciding whether a fee exists."
      }
    },
    {
      "type": "concept",
      "title": "Check more carefully when the consequence matters",
      "body": "<p>You do not need to investigate every word of a birthday poem. Start with claims that affect a decision: a deadline, a cost, a quotation, a safety instruction or the central evidence for an argument. The more consequential the decision, the stronger the check should be.</p><p>A parent might say: “Which claim are you relying on here? Let’s open that source and find the passage.” Ask the pupil to explain the match, then inspect it together. This keeps the checking with the learner instead of making the parent do all the research.</p><p>Haileybury’s <strong>Human judgement first</strong> means taking responsibility for important claims. If you cannot establish one, you can narrow it, leave it out or ask someone qualified to clarify it.</p>",
      "callout": "Being careful does not mean treating everything as false. It means being clear about what you know, what you have checked and what remains uncertain."
    },
    {
      "type": "concept",
      "title": "Choose a source that can answer the question",
      "body": "<p>For a school deadline, use the current school instruction. For a qualification rule, use the relevant awarding body and the school’s guidance. For a health decision, seek an appropriate professional rather than treating a chatbot as a clinician.</p><p>Check the date, author, scope and exact passage. A real page can still be old, concern another country or discuss a different course. Where a claim is disputed or consequential, compare suitable independent evidence. A second chatbot repeating the claim is not an independent verification.</p>",
      "callout": "Haileybury’s “Human judgement first” means the pupil remains responsible for checking. Naming the AI tool does not make its claims reliable."
    },
    {
      "type": "scenario",
      "title": "“But it gave me three references.”",
      "situation": "<p>A fictional pupil’s paragraph cites three articles. One link works, but the article discusses adults while the paragraph makes a claim about 13-year-olds. You have not checked the other links.</p>",
      "question": "What is the most useful next step?",
      "choices": [
        {
          "text": "Accept the paragraph because there are several references.",
          "outcome": "The number of references does not establish that any supports the claim. The source you opened concerns a different group."
        },
        {
          "text": "Check the relevant passages and revise the claim to match the evidence.",
          "outcome": "Yes. The adult study may be useful, but it cannot automatically establish the claim about younger pupils. Check the remaining sources and narrow or remove claims they do not support."
        },
        {
          "text": "Ask the same chatbot whether its references are genuine and stop there.",
          "outcome": "That may help locate a problem, but it does not finish the check. The model can give another confident assurance. Open the sources and inspect the relevant evidence yourself."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "A new checking decision",
      "question": "A fictional club’s general webpage says meetings start at 4 pm. A current dated notice from the same club says “This Thursday only: start at 4.30 pm.” What is the best conclusion for this Thursday?",
      "options": [
        "Use 4 pm because a general webpage is always more authoritative.",
        "Use the specific current notice for this Thursday; check with the organiser if there is still a genuine conflict.",
        "Average the times and arrive at 4.15 pm."
      ],
      "correct": 1,
      "explanation": "The dated notice explicitly describes an exception for the relevant session. Its scope explains the difference; this is not simply a rule that the newest page always wins. If the source or intended session is unclear, ask the organiser rather than inventing a compromise."
    },
    {
      "type": "summary",
      "title": "Keep the useful answer. Check the claim.",
      "points": [
        {
          "label": "Be specific",
          "text": "Identify a claim that matters."
        },
        {
          "label": "Read the source",
          "text": "Check the passage, date and relevance, not just the existence of a link."
        },
        {
          "label": "Use an honest verdict",
          "text": "Supported, contradicted or not established."
        },
        {
          "label": "Change the answer",
          "text": "Correct it, narrow it or leave the uncertainty visible."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Use supported, contradicted and not established to decide what the supplied evidence allows. No written answer is needed.",
    "questions": [
      {
        "kind": "select",
        "prompt": "Fictional source: “Riverside Library’s illustration session is for ages 14–18. It takes place on 9 May. Materials are supplied. Booking opens on 1 April.” Select every justified conclusion.",
        "options": [
          "Any teenager can attend.",
          "The session takes place on 9 May.",
          "Lunch arrangements are not established by this notice.",
          "Booking opens on 1 April.",
          "Supplied materials mean the session and lunch are free."
        ],
        "correct": [
          1,
          2,
          3
        ],
        "explanation": "The date and booking date are explicit. Lunch and price are not stated. “Any teenager” is too broad: the stated range excludes ages 13 and 19. Do not extend one detail into an unsupported promise."
      },
      {
        "kind": "choice",
        "prompt": "A pupil cites a genuine study of adult office workers to claim that AI improves every 13-year-old’s learning. What needs attention first?",
        "options": [
          "Whether the article’s design looks professional.",
          "Whether the studied group and outcome support the claim about young pupils.",
          "Whether another chatbot repeats the same conclusion."
        ],
        "correct": 1,
        "explanation": "A real source can still concern a different group, task or outcome. Inspect the relevant evidence, then narrow or remove unsupported claims. A second chatbot’s agreement does not supply independent evidence."
      },
      {
        "kind": "choice",
        "prompt": "An AI answer gives an exam deadline, but its linked page is from a previous exam series. What should happen before relying on it?",
        "options": [
          "Use the date because the awarding body is authoritative.",
          "Ask the AI to repeat the date more confidently.",
          "Check the current instructions for the relevant qualification and exam series, including school guidance."
        ],
        "correct": 2,
        "explanation": "Authority is only one part of suitability. The relevant date, qualification, exam series and local arrangements must match the decision. If they remain unclear, ask school rather than treating an old page as current."
      }
    ]
  }
},
{
  "id": 303,
  "n": 3,
  "title": "Accounts, privacy and sensible boundaries",
  "minutes": 20,
  "goal": "Choose an appropriate practice route and explain what should stay out of an AI prompt or upload.",
  "desc": "Make the important decisions before the first practical: whose account, which information and what permission?",
  "slides": [
    {
      "type": "hook",
      "title": "Before you click “upload”",
      "body": "<p>A parent wants useful revision advice and considers uploading a child’s school report. It seems convenient: the document already explains the difficulties. But it also contains personal information about a young person and possibly other people.</p><p>We can get useful practice without using that document. This lesson helps you separate account permission, information choices and sharing. You will leave with a short check to use before the practical lessons.</p>",
      "callout": "Allow around 20 minutes. All required choices can be made here without signing in, changing settings or writing anything down."
    },
    {
      "type": "concept",
      "title": "An adult account is not permission for a child",
      "body": "<p>Your own eligible adult account, a child’s personal account and a school-managed account can have different access, settings and protections. A feature available to you may be unavailable or inappropriate for a child. Age, location, account type and school administration all matter.</p><p>Our optional live practicals use your own eligible adult account and fictional material. They do not authorise a child to create an account or use your credentials for schoolwork. If you prefer, use the complete practice examples inside each lesson.</p>",
      "sources": [
        {
          "label": "Google: Gemini sign-in requirements",
          "url": "https://support.google.com/gemini/answer/13278668?hl=en"
        },
        {
          "label": "Google: family guidance and supervised access",
          "url": "https://support.google.com/gemini/answer/16109150?hl=en"
        }
      ],
      "sourceNote": "Account guidance checked November 2026; availability can change."
    },
    {
      "type": "concept",
      "title": "Keep school permission separate from product access",
      "body": "<p><strong>Haileybury-specific guidance, November 2026 parent guide:</strong> approved arrangements cover Gemini and Gemini Notebook, Canva and teacher-created Brisk Bots. Other AI platforms and personal AI accounts are not permitted for schoolwork.</p><p><strong>Removes to Upper Sixth</strong> may use approved AI for general study support, subject to age limits and teacher direction. <strong>Lower School</strong> pupils may use AI only when explicitly instructed by the school. The ability to open an app is not permission to use it.</p><p>For assessed work, follow the teacher’s task instructions and the qualification rules. If your child attends another school, use that school’s current policy. Lesson 6 explains the assessment categories.</p>",
      "callout": "This course’s adult practice is separate from pupil schoolwork. Do not use a child’s credentials or alter school-managed controls."
    },
    {
      "type": "concept",
      "title": "Removing a name is only the first question",
      "body": "<p>A document can identify someone through a combination of details: their year group, unusual circumstances, school, diagnosis or family situation. Replacing a name with initials may leave those clues intact.</p><p>For this course, keep reports, marked pupil work, medical or SEND information, private messages, identifying photographs and school-confidential documents out of AI tools. Use the fictional packs supplied instead. You will still learn the skill without making someone else’s information part of your experiment.</p>",
      "callout": "Haileybury’s “Dignity and care” applies to the information in a prompt, as well as the answer it produces.",
      "sources": [
        {
          "label": "DfE: generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Privacy settings deserve a read, not a guess",
      "body": "<p>In personal Gemini accounts, activity controls, temporary chats, connected apps and feedback can affect how information is handled. Turning off Keep Activity does not mean nothing is stored: Google describes limited retention for future chats and exceptions. Human review can occur.</p><p>Gemini Notebook has its own terms; feedback and account type also matter. Do not assume that an Education account and a personal account receive identical protections. You do not need to master every setting today. Know where the current explanation is, avoid sensitive practice material, and pause when the terms do not fit your purpose.</p>",
      "sources": [
        {
          "label": "Google: Gemini Apps Privacy Hub",
          "url": "https://support.google.com/gemini/answer/13594961?hl=en"
        },
        {
          "label": "Google: Gemini Notebook privacy",
          "url": "https://support.google.com/gemininotebook/answer/17004255?hl=en"
        },
        {
          "label": "Google: managed Notebook accounts",
          "url": "https://support.google.com/gemininotebook/answer/16337734"
        }
      ],
      "sourceNote": "Read against Google guidance checked November 2026; use the current help before changing settings."
    },
    {
      "type": "concept",
      "title": "Sending to a tool and sharing with people are two decisions",
      "body": "<p>There are two separate questions. <strong>Input:</strong> what information are you sending to the service when you paste, upload or connect something? <strong>Sharing:</strong> who can see the conversation, source or notebook afterwards?</p><p>Keeping a notebook unshared does not undo sending its contents to the service. Equally, using an approved account does not mean every document is appropriate to upload or every sharing link is appropriate to send. A link may allow a wider audience than you expect; check its access setting before using it.</p><p>For our practicals, both decisions are simple: use the supplied fictional material and keep the work unshared. Do not connect email, calendars or private files. There is no learning benefit from experimenting with a real child’s information.</p>",
      "callout": "This distinction explains why our before-upload check checks both the information sent and who could see the result."
    },
    {
      "type": "parent-interaction",
      "title": "Choose the suitable practice material",
      "question": {
        "kind": "select",
        "prompt": "You want to practise asking for a revision plan. Which materials fit this course’s practice? Select all that apply.",
        "options": [
          "A real school report with the name covered.",
          "An invented brief about fractions, percentages and ratio, with two imaginary study sessions.",
          "A photograph of the class list to make the answer more realistic.",
          "The course’s supplied fictional learning pack.",
          "A purchased textbook extract published in a publicly shared notebook without checking rights."
        ],
        "correct": [
          1,
          3
        ],
        "explanation": "Invented briefs and the supplied fictional pack let you practise the skill without disclosing child information. Covering a name does not remove all identifying details. A class list concerns other people; owning a textbook does not automatically permit public redistribution."
      }
    },
    {
      "type": "concept",
      "title": "A useful worked check before a practical",
      "body": "<p>Suppose you want Gemini to help plan a fictional community event. Check four things before continuing.</p>",
      "bullets": [
        {
          "term": "Account",
          "text": "I am using my own eligible adult account, or the lesson’s no-account route."
        },
        {
          "term": "Information",
          "text": "My brief is invented and contains no private family, pupil or school information."
        },
        {
          "term": "Permission",
          "text": "I have the right to use the supplied material and am not confusing adult practice with permission for schoolwork."
        },
        {
          "term": "Sharing",
          "text": "I have kept the practice private, connected no private apps and checked the audience before sharing any result. If unclear, I do not share it."
        }
      ],
      "callout": "You do not need to connect email, buy a plan or publish anything for this course."
    },
    {
      "type": "activity",
      "title": "Choose a route you can explain",
      "instructions": "<p>Consider these findings from the lesson: <strong>(1)</strong> turning activity history off is not a promise of no retention; <strong>(2)</strong> account type and product terms can differ; <strong>(3)</strong> feedback and sharing need their own checks.</p><p>Think about which finding changes the decision to use a real school report. Then reveal the explanation. The current help links are optional further reading; all required checks are on screen.</p>",
      "steps": [
        "Consider whether switching history off would give permission to upload someone else’s information.",
        "Choose mentally which practical route suits you: your own eligible adult account with fictional material, or the complete supplied examples.",
        "Reveal the guidance. Both practical routes allow you to complete the same learning."
      ],
      "reveal": "<p>A history setting does not create permission to upload a child’s report or guarantee that information is never retained. The useful choice is to practise with the invented brief. If account eligibility or protections are unclear, use the supplied examples. You can later consult the product’s official help for a real account question without making that investigation a condition of completing this course.</p>",
      "revealLabel": "Compare your thinking",
      "callout": "Optional extension: locate the privacy explanation in your own eligible adult account. No settings changes, screenshots or written notes are required."
    },
    {
      "type": "quiz",
      "title": "Check your understanding",
      "question": "A Lower School pupil can open a named AI tool on a parent’s personal account. May they use it for schoolwork without a school instruction?",
      "options": [
        "Yes, because the tool is named in the guide.",
        "No. Lower School use needs explicit school instruction, and personal AI accounts are not permitted for schoolwork.",
        "Yes, if they acknowledge the help."
      ],
      "correct": 1,
      "explanation": "The November 2026 guide requires explicit school instruction for Lower School use and school-approved account arrangements. Product access and acknowledgement do not grant permission. Older pupils’ general study permission does not override a particular assessment rule either."
    },
    {
      "type": "summary",
      "title": "Make the decision before the upload",
      "points": [
        {
          "label": "Use the right route",
          "text": "Your eligible adult account with fictional data, or the complete no-account lesson."
        },
        {
          "label": "Minimise information",
          "text": "No real child’s information is needed to learn these skills."
        },
        {
          "label": "Read the relevant terms",
          "text": "Product, account type, feedback and sharing affect the picture."
        },
        {
          "label": "Keep permission explicit",
          "text": "A working app is not permission for schoolwork or public sharing."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Decide what is appropriate before information enters a tool. Choose on screen; no upload or account access is required.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A parent wants to paste an identifiable school report into a temporary chat to practise making a study plan. What is the best next step?",
        "options": [
          "Use an invented learning brief; the real report is unnecessary for this practice.",
          "Cover the name and assume the remaining details cannot identify the pupil.",
          "Proceed because temporary chat means there can be no retention or review."
        ],
        "correct": 0,
        "explanation": "Using an invented brief preserves the practice while avoiding unnecessary disclosure. Initials and removed names can leave identifying details. A temporary or history setting does not by itself establish privacy or permission."
      },
      {
        "kind": "select",
        "prompt": "A parent keeps a notebook unshared. Which statements remain true? Select all that apply.",
        "options": [
          "Uploading sources still sends information to the service.",
          "Keeping it unshared automatically permits uploading any private school document.",
          "They still need to consider permission to use the sources and the product/account terms.",
          "Before later sharing a link, they must check who could access it."
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "Sending information to the service and giving other people access are separate decisions. An unshared notebook reduces one sharing route; it does not settle the rights, data or account questions."
      },
      {
        "kind": "choice",
        "prompt": "A Haileybury Lower School pupil can open an AI tool through a parent’s personal account. The school has not instructed its use. Which position matches the current parent guide?",
        "options": [
          "The named tool is enough; any account is acceptable.",
          "Lower School use needs explicit school instruction, and personal AI accounts are not permitted for schoolwork.",
          "Adding an AI acknowledgement makes the account and task acceptable."
        ],
        "correct": 1,
        "explanation": "Product access is not permission. Haileybury’s Lower School instruction requirement and school-approved account arrangements both apply. The adult practice route in this course does not authorise pupil schoolwork."
      }
    ]
  }
},
{
  "id": 305,
  "n": 5,
  "title": "Help with homework without taking over",
  "minutes": 15,
  "goal": "Choose a useful next-step hint and check whether a learner can use it independently.",
  "desc": "Respond to “I’m stuck” with help that leaves the important thinking with the learner.",
  "slides": [
    {
      "type": "hook",
      "title": "“I’m stuck.” It is tempting to finish it.",
      "body": "<p>It is late. A fictional teenager has spent ten minutes on a question and wants to paste it into a chatbot. A complete answer would end the argument. It might also hide the exact misunderstanding that needs attention.</p><p>In this lesson you will compare three kinds of help, choose a useful hint and a short check of understanding. You can practise the whole routine without knowing the teenager’s subject, using the small example supplied.</p>",
      "callout": "Allow around 15 minutes. Choose and compare responses on screen. No account, real homework or written submission is needed."
    },
    {
      "type": "concept",
      "title": "First find the sticking point",
      "body": "<p>“I can’t do it” can mean several things: I do not understand the instruction; I have forgotten a fact; I cannot choose a method; I know what to say but cannot get it onto the page; or I am too tired to continue usefully.</p><p>Start with “What is the task asking, and which part can you already do?” Then choose a proportionate next step: reread an instruction, look at a class example, take a short break, use agreed support or ask the teacher. AI is one possible source of help when permitted. It is not the automatic answer to every difficulty.</p>",
      "sources": [
        {
          "label": "EEF: practical ways parents can support learning",
          "url": "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/parental-engagement"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Keep the thinking; make the next step possible",
      "body": "<p>A useful <strong>scaffold</strong> is temporary support that helps someone do a part they could not yet manage alone. It might be one question, a diagram or a worked example of a different problem. The next important decision still belongs to the learner.</p><p>This is Haileybury’s <strong>Don’t steal the struggle</strong> in practice. It does not mean withholding help or removing agreed assistive tools. If reading aloud enables access to the task, keep that support. Focus the independent check on the knowledge or reasoning being learnt.</p>",
      "callout": "Ask “What thinking should stay with the learner?” That is more useful than counting how many hints they receive.",
      "sources": [
        {
          "label": "EEF: metacognition and self-regulated learning",
          "url": "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Worked example: three responses to the same problem",
      "body": "<p><strong>Fictional task:</strong> a £40 jacket is reduced by 25%. What is the sale price? The learner says, “I know 25% means a quarter, but I don’t know what to do next.” For this practice example, the teacher has permitted a hint but not a generated solution.</p><p><strong>Response A:</strong> “The sale price is £30.” This completes the calculation without finding out what the learner understands.</p><p><strong>Response B:</strong> “Think harder.” This leaves the sticking point untouched.</p><p><strong>Response C:</strong> “Find one quarter of £40. Is that the amount you pay or the amount taken off?” This uses what the learner already knows and leaves a meaningful decision for them.</p>",
      "callout": "A good hint is specific enough to help and limited enough to leave something worth doing."
    },
    {
      "type": "parent-interaction",
      "title": "Which hint leaves the thinking with the learner?",
      "question": {
        "kind": "choice",
        "prompt": "A £60 bag has a 10% reduction. The learner says, “10% is £6, so the bag costs £6.” This fictional task permits a hint. Which response targets the misunderstanding without completing the calculation?",
        "options": [
          "“The answer is £54. Now explain why that must be right.”",
          "“You have correctly found 10%. Does the £6 represent what is taken off or what you still pay?”",
          "“Start again; you need to concentrate more.”"
        ],
        "correct": 1,
        "explanation": "The learner has calculated the reduction correctly but confused its meaning. Naming that correct step and asking what it represents leaves the next decision with them. If the hint does not help, use a clearer representation or seek a teacher’s explanation rather than supplying a paragraph to copy."
      }
    },
    {
      "type": "concept",
      "title": "What if the hint still does not help?",
      "body": "<p>Return to the £60 bag. The learner says: “I still think £6 is the price because that is the number I calculated.” Repeating the hint louder is unlikely to explain the difference.</p><p><strong>Parent:</strong> “On a sale label, ‘£6 off’ describes a saving. Draw the original £60 as a bar and mark the £6 being removed. What does the part left over represent?”<br><strong>Learner:</strong> “The amount I still pay.”<br><strong>Parent:</strong> “Now show how you would find that amount.”</p><p>If the meaning is still unclear, return to a class example or note the sticking point for the teacher. If the learner is exhausted, agree when to return. A parent need not keep inventing explanations until the work is finished.</p>",
      "callout": "The useful decision is what support is needed next. A pause or a precise question for the teacher can be more helpful than a longer AI answer."
    },
    {
      "type": "concept",
      "title": "Make the learning check small and useful",
      "body": "<p>After help, ask for a short explanation or a different example. You are looking for evidence that the idea now makes sense, not setting another exam at the kitchen table.</p><p>If the learner can reproduce the answer but cannot explain the method, the next step may be a clearer example or a teacher’s help. If they can explain and apply it, let them continue. A wrong answer is information about what to revisit, not a reason to add shame or surveillance.</p><p>If the subject is unfamiliar to you, ask the learner to point to the class note that supports their explanation. You can notice a gap without pretending to know the answer. For real Haileybury schoolwork, any AI help must use the approved tool and account and fit the teacher’s task instructions.</p>",
      "callout": "Haileybury’s “Human judgement first” includes noticing when an AI explanation has failed to help. “Transparent by default” means being able to say what help was used."
    },
    {
      "type": "scenario",
      "title": "The hint arrives as a full solution",
      "situation": "<p>A fictional pupil is permitted to use one hint on a practice question. The approved tool ignores the instruction and supplies the whole answer.</p>",
      "question": "What should the parent help the pupil do?",
      "choices": [
        {
          "text": "Copy it, because the pupil asked for a hint.",
          "outcome": "The prompt does not decide whether the response is permitted. The actual contribution exceeded the stated boundary."
        },
        {
          "text": "Stop using that answer, record what happened as required and seek a permitted way to continue.",
          "outcome": "Yes. The pupil can explain that the tool supplied more than requested, ask for guidance where needed and practise a different example. A tool’s mistake does not require hiding its contribution."
        },
        {
          "text": "Make the answer sound less polished.",
          "outcome": "Changing the style would conceal the same contribution. It would not restore the learner’s thinking or make the use permitted."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Check your understanding",
      "question": "A learner uses approved read-aloud support while explaining a method without a generated answer. Is this still a meaningful independent check?",
      "options": [
        "No: independence means removing every aid.",
        "Yes: the learner can still do the relevant thinking while agreed access support remains.",
        "Only if the parent can judge the learner’s diagnosis."
      ],
      "correct": 1,
      "explanation": "Independence concerns the target learning. Agreed support can remove an access barrier without doing the reasoning for the learner. Parents do not need to disclose or judge a diagnosis to apply this principle."
    },
    {
      "type": "summary",
      "title": "A small routine for “I’m stuck”",
      "points": [
        {
          "label": "Check the task",
          "text": "What help is permitted, and what is the learner trying to understand?"
        },
        {
          "label": "Locate the difficulty",
          "text": "Ask what they have tried and what they can already explain."
        },
        {
          "label": "Offer the smallest useful next step",
          "text": "A question, example, explanation or appropriate human support."
        },
        {
          "label": "See what changed",
          "text": "Ask for an explanation or fresh example, keeping agreed access support."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Choose help that addresses the sticking point, preserves the learner’s thinking and respects the task rules.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A fictional science note says energy transfers from warmer surroundings to ice, and melting changes a solid to a liquid. A pupil says, “Ice makes coldness and runs out.” The task permits a question, not a generated paragraph. Which response fits?",
        "options": [
          "“Copy this correct paragraph about melting and read it twice.”",
          "“You noticed the ice changes. According to the note, where is energy coming from and where is it going?”",
          "“Because the answer is wrong, no support should be used.”"
        ],
        "correct": 1,
        "explanation": "This recognises an observation and directs attention to the supplied evidence while leaving the explanation with the pupil. A complete paragraph would replace the contribution the task is meant to elicit."
      },
      {
        "kind": "select",
        "prompt": "After a useful hint, which checks can provide information about understanding? Select all that apply.",
        "options": [
          "Ask the learner to explain a fresh example using agreed read-aloud support if needed.",
          "Assume understanding because the copied answer is correct.",
          "Ask what a key number represents and compare the explanation with the class source.",
          "Remove approved assistive tools because all support invalidates independence."
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "A fresh example and an explanation reveal more about the target thinking. Appropriate access support can stay in place. Copying a correct answer does not show what the learner can explain or apply."
      },
      {
        "kind": "order",
        "prompt": "The task permits a hint. Put this short support routine in order.",
        "options": [
          "Check an explanation or changed example, keeping agreed access support.",
          "Ask what the learner has tried and identify the specific sticking point.",
          "Give the learner time to attempt the next step.",
          "Offer a limited hint or relevant class example."
        ],
        "correct": [
          1,
          3,
          2,
          0
        ],
        "explanation": "Find the difficulty, offer proportionate help, allow the learner to act, then check what changed. If the idea remains unclear or the learner is exhausted, seek suitable support or agree a return point rather than endlessly adding hints."
      }
    ]
  }
},
{
  "id": 306,
  "n": 6,
  "title": "School rules, honesty and assessed work",
  "minutes": 20,
  "goal": "Apply the stated rules for a task, distinguish permission from acknowledgement and ask a clear question when the boundary is unclear.",
  "desc": "Know what is allowed, what needs recording and when to ask. Practise the decisions before the deadline.",
  "slides": [
    {
      "type": "hook",
      "title": "“It was only helping with the wording.”",
      "body": "<p>A fictional pupil has used AI to rewrite a paragraph. On one task that contribution might be permitted; on another it could replace the skill being assessed. Calling it “help” does not settle the question.</p><p>This lesson gives you a way to read the boundary before the work starts. You will use clearly labelled practice instructions, learn the distinction between permission and acknowledgement, and choose a clear question to school.</p>",
      "callout": "Allow around 20 minutes. Use the fictional tasks and on-screen choices. No message, written submission or live assessment work is required."
    },
    {
      "type": "concept",
      "title": "Start with this task, not last week’s permission",
      "body": "<p>Different work has different purposes. Personal practice might develop confidence with a method. Teacher-set homework may check what someone can do independently. Assessed coursework may contribute to a qualification and have specific rules about permitted support.</p><p>Before using AI, identify the type of work, the teacher’s instructions, the permitted tool and account, and any qualification requirements. If these are unclear or appear to conflict, ask the teacher before using AI. Permission on a previous task does not automatically carry over.</p>",
      "callout": "An approved product can still be prohibited for a particular task."
    },
    {
      "type": "concept",
      "title": "Haileybury’s parent guide: read the boundary carefully",
      "body": "<p><strong>Haileybury-specific guidance, November 2026 parent guide:</strong> for assessed work, teachers choose one of three AI Scale levels. Read the level alongside the instructions for the particular task.</p>",
      "callout": "Only expressly permitted AI-generated material may be submitted. Ask first if unsure. GCSE, A-level and IB qualification rules take precedence. Clarify and preserve agreed assistive support.",
      "bullets": [
        {
          "term": "No AI",
          "text": "Complete the task without AI assistance."
        },
        {
          "term": "AI for planning",
          "text": "AI can support ideas and planning, but the submitted work must be the pupil’s own."
        },
        {
          "term": "Full use of AI",
          "text": "AI may be used throughout as directed by the teacher. Pupils must demonstrate understanding and acknowledge its contribution."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Year group and purpose both matter",
      "body": "<p><strong>Haileybury’s general study rule:</strong> Removes to Upper Sixth may use approved AI for general study support, subject to age limits and teacher direction. Lower School pupils may use AI only when explicitly instructed by the school.</p><p>That general permission does not override a teacher’s assessment instruction. A Removes pupil may have permission to use an approved tool for study and still receive a “No AI” assessed task. Likewise, a Lower School pupil cannot assume permission just because an older pupil uses the same tool.</p><p>Use the school-approved arrangements. Personal AI accounts and other AI platforms are not permitted for schoolwork. For another school, check its current rules rather than importing Haileybury’s labels.</p>",
      "callout": "Age eligibility, year-group permission, task instructions and qualification rules all need to fit. A parent’s adult practice account does not replace the approved school route."
    },
    {
      "type": "concept",
      "title": "Permission, acknowledgement and ownership are different",
      "body": "<p><strong>Permission</strong> asks whether this particular use is allowed. <strong>Acknowledgement</strong> explains the help received in the form required. <strong>The pupil’s contribution</strong> is the thinking and work they can honestly claim and explain. Here we mean authorship and responsibility, not a legal judgement about copyright ownership.</p><p>Writing “I used AI” does not make a prohibited use acceptable. Equally, a permitted use may still require prompts, outputs or other records. Follow the actual task and awarding-body instructions rather than inventing a universal format.</p>",
      "sources": [
        {
          "label": "JCQ: current non-examination assessment guidance",
          "url": "https://www.jcq.org.uk/knowledge-hub/non-examination-assessments/"
        },
        {
          "label": "Ofqual: AI, malpractice and assessment advice",
          "url": "https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible"
        }
      ],
      "callout": "JCQ guidance applies within its stated qualifications and scope. It is not the rulebook for every qualification, including IB. Ask school for the applicable guidance."
    },
    {
      "type": "concept",
      "title": "Worked example: allowed planning, prohibited drafting",
      "body": "<p><strong>Fictional task instruction:</strong> “You may use the approved school AI tool to suggest three possible research questions. Choose and refine one yourself. Do not ask AI to draft your response. Submit the prompts and suggestions with your chosen question.”</p><p>A pupil asks for three questions, evaluates them and records the exchange: that fits this instruction. Asking for an opening paragraph goes beyond it, even if the pupil later acknowledges the tool.</p><p>A parent’s useful question is: “Show me what the instruction permits and where your own decision begins.”</p>",
      "callout": "These are invented task instructions for practice. They are not a new school-wide rule.",
      "revealLabel": "See a transparent record for this fictional task",
      "reveal": "<p>A short contribution note could say: “I used the school-approved AI tool to suggest three research questions. I compared them, narrowed one myself and wrote the final response. I checked factual suggestions against the class sources. The prompts and suggestions are attached as this task requires.”</p><p>This note explains the contribution; it does not replace the attached record required by the invented instruction. If the real task asks for a tool name, date, original sources or a particular format, include those too. Never claim to have checked or written something you have not.</p>"
    },
    {
      "type": "parent-interaction",
      "title": "Choose the justified permission decisions",
      "question": {
        "kind": "select",
        "prompt": "Three fictional instructions: A allows AI ideas only, but the pupil wants a final AI-written answer. B says no generative AI and explicitly retains agreed read-aloud support. C says “prepare independently” without explaining AI use, and the pupil wants AI rewriting. Select every justified decision.",
        "options": [
          "A: the final AI-written answer is not permitted by this instruction.",
          "B: the explicitly retained read-aloud support is permitted.",
          "C: ask the teacher before using AI to rewrite.",
          "C: permission from another teacher last week settles this task.",
          "A: acknowledgement would make final AI drafting acceptable."
        ],
        "correct": [
          0,
          1,
          2
        ],
        "explanation": "A allows ideas, not final drafting. B explicitly preserves the support described. C needs clarification before use. Neither a credit nor another task’s permission changes these instructions."
      }
    },
    {
      "type": "concept",
      "title": "When work looks different, ask about the process",
      "body": "<p>An unusually polished paragraph is a reason to be curious, not proof of misconduct. A pupil may have revised carefully, received permitted help or used agreed support. AI detector scores and guesses about style do not establish authorship.</p><p>Ask the pupil to explain their argument and describe their process. Look at relevant drafts or records where appropriate, then follow the school’s process if a concern remains. Avoid uploading the work to an unapproved detector. This protects both accurate judgement and the pupil’s dignity.</p>",
      "callout": "Haileybury’s “Dignity and care” matters when something may have gone wrong. Honest disclosure should lead to a clear next step, not a public accusation."
    },
    {
      "type": "scenario",
      "title": "The deadline is tomorrow",
      "situation": "<p>A fictional pupil admits that AI rewrote a section of assessed work. The task appears to prohibit that help. They suggest changing a few words so no one will notice.</p>",
      "question": "Which response best supports an honest resolution?",
      "choices": [
        {
          "text": "Help disguise the wording before submission.",
          "outcome": "That would conceal the contribution and leave the original permission problem unresolved."
        },
        {
          "text": "Stop using the generated section and contact the teacher promptly, explaining what happened.",
          "outcome": "Yes. Keep any required relevant records and ask how to proceed under the actual assessment rules. Do not promise that deleting a section automatically resolves the issue; school must guide the next step."
        },
        {
          "text": "Ask a detector whether the passage will be flagged.",
          "outcome": "A detector score cannot decide permission, ownership or an appropriate remedy. It also creates another potential disclosure of pupil work."
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Check your understanding",
      "question": "Under Haileybury’s “Transparent by default”, does acknowledging AI make a prohibited use acceptable?",
      "options": [
        "Yes, because the pupil has been honest.",
        "No. Permission and acknowledgement are separate; ask the teacher how to resolve the situation.",
        "Only if the AI contribution is less than half of the work."
      ],
      "correct": 1,
      "explanation": "Honesty matters, but it does not retrospectively grant permission. There is no universal percentage that makes a contribution acceptable. The task and relevant assessment rules determine what may be used and recorded."
    },
    {
      "type": "concept",
      "title": "A question the teacher can answer",
      "body": "<p>A vague “Can we use AI?” may produce an answer too broad for the decision. Name the task and separate the kinds of help.</p><p><strong>Worked draft, not a message to send:</strong> “For the independent presentation, may I use the school-approved tool to explain unfamiliar source vocabulary, or to suggest an outline? Would rewriting my script be outside the permitted level? Which tool/account and records should I use if any help is allowed? Please confirm how my agreed read-aloud support applies.”</p><p>This is specific without attaching private work or demanding a general policy change. An older pupil may ask the question themselves; a parent can help them make it clear. If help has already been used, say what happened honestly rather than presenting it as a future plan.</p>",
      "callout": "This is a worked example to inspect, not a message you need to write or send. It shows how specific questions can resolve a real uncertainty."
    },
    {
      "type": "summary",
      "title": "A useful school question has four parts",
      "points": [
        {
          "label": "Task",
          "text": "Which piece of work are we discussing?"
        },
        {
          "label": "Contribution",
          "text": "What exactly would the tool do: ideas, hints, editing or drafting?"
        },
        {
          "label": "Permission and records",
          "text": "Which tool/account is allowed, and what needs acknowledging or keeping?"
        },
        {
          "label": "Access arrangements",
          "text": "How should agreed support be used for this task? Do not withdraw it by assumption."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply Haileybury’s current guide and the precise instructions supplied. These are decisions, not messages to send.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A fictional geography task is independently written. A pupil wants AI to simplify source reading and rewrite the final answer, and has agreed read-aloud support. Which clarification is most useful?",
        "options": [
          "“Can we use AI for geography?”",
          "“May the approved tool simplify the source, may it rewrite the answer, what records are required, and how does the agreed read-aloud support apply?”",
          "“We will acknowledge everything, so please confirm that any AI help is allowed.”"
        ],
        "correct": 1,
        "explanation": "Separate the contributions so the teacher can answer the actual permission question. Ask about the approved route, required records and agreed support rather than treating “help” as one category or assuming acknowledgement grants permission."
      },
      {
        "kind": "select",
        "prompt": "A fictional task permits three AI-generated research questions, requires the pupil to refine one, prohibits AI drafting, and requires prompts and suggestions to be submitted. Which actions fit? Select all that apply.",
        "options": [
          "Keep the required prompts and suggestions.",
          "Explain which question the pupil chose and how they refined it.",
          "Generate an opening paragraph because only the final paragraph matters.",
          "Write the final response themselves and honestly describe the permitted contribution.",
          "Replace the required record with the words “AI helped” alone."
        ],
        "correct": [
          0,
          1,
          3
        ],
        "explanation": "The contribution and the records must both fit the task. An honest short explanation is useful, but it cannot replace required prompts and outputs or authorise prohibited drafting."
      },
      {
        "kind": "choice",
        "prompt": "A pupil has already used prohibited AI rewriting on assessed work and suggests changing words to hide it. What should the parent support?",
        "options": [
          "Contact the teacher promptly, explain the contribution accurately and follow the applicable process; do not conceal or assume deletion resolves it.",
          "Use an AI detector to judge whether it is safe to submit.",
          "Change the style and add a general acknowledgement."
        ],
        "correct": 0,
        "explanation": "Transparency helps school decide the proper next step. Detector scores and stylistic changes do not determine permission or resolve the assessment issue. Do not promise a particular outcome or remove agreed access support by assumption."
      }
    ]
  }
},
{
  "id": 308,
  "n": 8,
  "title": "Revision that builds independent understanding",
  "minutes": 20,
  "goal": "Choose accurate revision questions, check the reasoning and select a later attempt that tests understanding.",
  "desc": "Try the difference between recognising a tidy summary and being able to explain and use the idea yourself.",
  "slides": [
    {
      "type": "hook",
      "title": "“I’ve read it three times.” What can you do with it?",
      "body": "<p>A set of AI-made notes can look excellent. So can a colourful quiz. The useful question is what happens when the learner has to recall an idea, explain it or use it in a different example.</p><p>You will try a tiny revision cycle yourself using an invented system. This is deliberately unfamiliar: nobody needs to be good at a school subject to take part. Then you will check a flawed generated question and plan a sensible follow-up.</p>",
      "callout": "Allow around 20 minutes. Try the on-screen decisions and inspect the explanations. No account, notes or written submission is needed."
    },
    {
      "type": "concept",
      "title": "Attempt, check, explain, return",
      "body": "<p>Trying to recall an idea makes a gap visible. Checking against a reliable source gives you a chance to correct it. Explaining a reason or applying the idea tests more than recognising familiar words. Returning later can show what remains available after the first practice.</p><p>These steps need appropriate questions and feedback. A quiz is not automatically a good revision tool because AI generated it. Parents can help organise this routine and notice a sticking point; they do not need to replace the subject teacher.</p>",
      "callout": "Keep the scale small: one idea, a short attempt and a clear next step.",
      "sources": [
        {
          "label": "EEF: metacognition and self-regulated learning",
          "url": "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Your source pack: the fictional Lantern Club",
      "body": "<p>Read these invented rules once or twice. You will use them on the next slide.</p><p><strong>Lantern Club dispatch rules:</strong> A parcel is marked <strong>ready</strong> only when it has both a blue label and a recorded weight. A parcel marked ready goes on the <strong>morning van</strong> if it weighs 2 kg or less; a ready parcel over 2 kg goes on the <strong>afternoon van</strong>. A parcel missing either requirement goes to the <strong>checking desk</strong>, whatever its weight.</p><p>Example: a 3 kg parcel with a blue label and recorded weight is ready and goes on the afternoon van. Its weight changes the van, not whether it is ready.</p>",
      "callout": "This is an original fictional practice pack. It describes no real delivery service."
    },
    {
      "type": "parent-interaction",
      "title": "Apply the Lantern Club rules",
      "question": {
        "kind": "select",
        "prompt": "A ready parcel needs both a blue label and a recorded weight. Ready parcels of 2 kg or less use the morning van; heavier ready parcels use the afternoon van. Missing either requirement means the checking desk. Select every correct decision.",
        "options": [
          "Blue label and recorded weight exactly 2 kg: morning van.",
          "Recorded weight 1 kg but no blue label: morning van.",
          "Blue label but no recorded weight: checking desk.",
          "Blue label and recorded weight 3 kg: afternoon van."
        ],
        "correct": [
          0,
          2,
          3
        ],
        "explanation": "Check readiness before van choice. Exactly 2 kg is included in “2 kg or less”. Low weight cannot compensate for a missing blue label. The rules are visible here, so this checks applying them, not recalling them from memory."
      }
    },
    {
      "type": "concept",
      "title": "Worked example: catch a bad AI quiz item",
      "body": "<p><strong>Generated question:</strong> “A 1 kg parcel has no blue label. Which van should it go on?” <strong>Generated answer key:</strong> “Morning, because it is under 2 kg.”</p><p>The question wrongly assumes that the parcel belongs on a van. The answer key ignores the readiness rule. If a parent trusted the key, a correct learner could be told they were wrong.</p><p>A repair is: “Where should a 1 kg parcel without a blue label go, and why?” The correct answer is the checking desk. Check both the question and its explanation against the source before using generated practice.</p>",
      "callout": "Haileybury’s “Human judgement first” applies to the answer key as well as the pupil’s answer."
    },
    {
      "type": "scenario",
      "title": "Choose practice that addresses the misunderstanding",
      "situation": "<p>An imaginary learner keeps choosing a van before checking readiness. You want a short, useful practice sequence using the Lantern Club rules.</p>",
      "question": "Which pair best tests the decision they are missing?",
      "choices": [
        {
          "text": "“What two things make a parcel ready?” followed by “A parcel has a blue label but no recorded weight. Where does it go, and why?”",
          "outcome": "This recalls the condition and then tests its application. The second parcel goes to the checking desk because the recorded weight is missing. The sequence targets the specific misunderstanding."
        },
        {
          "text": "“What colour is the label?” followed by ten questions about the names of the vans.",
          "outcome": "The label colour matters, but these questions do not test checking both readiness requirements before choosing a van. More items are not necessarily more useful practice."
        },
        {
          "text": "Show ten completed examples and ask whether the learner recognises them.",
          "outcome": "Worked examples can help, but recognition alone does not show whether the learner can apply the rule. Follow an example with an opportunity to decide and explain."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Match the check to what you want to learn",
      "body": "<p>The previous on-screen task displayed the rules. It checked whether you could apply them; it did not establish that you remembered them without help. That is still useful information.</p><p>If the goal is remembering the rules, a later recall attempt asks something different. If the goal is applying rules to an unfamiliar parcel, keeping the source visible can still leave meaningful reasoning: choosing a relevant rule and explaining the decision. An answer key would do much of that thinking for the learner.</p><p>Decide what you are checking before removing anything. Keep agreed reading or communication support. For real schoolwork, follow the task’s permission and access arrangements. Independent understanding is not measured by how many useful supports you can take away.</p>",
      "callout": "A parent can ask: “Are we practising remembering the rule, or using it? What should you have available for this attempt?”"
    },
    {
      "type": "concept",
      "title": "Return later; keep the right support",
      "body": "<p>A later attempt with a fresh example can show whether the learner can still explain the idea. Agree a manageable return point, such as the next suitable study session. Do not claim that one fixed interval is perfect for every learner or subject.</p><p>Keep agreed assistive support. If read-aloud enables access to a question, use it while the learner does the reasoning. Haileybury’s <strong>Don’t steal the struggle</strong> protects the thinking, and <strong>Dignity and care</strong> protects access. If a difficulty persists, ask the teacher what to practise rather than endlessly generating more material.</p>",
      "sources": [
        {
          "label": "CAST: access to assistive technologies",
          "url": "https://udlguidelines.cast.org/action-expression/interaction/assistive-technologies/"
        }
      ],
      "revealLabel": "See a manageable later check",
      "reveal": "<p>At the next suitable session, use two fresh cases: <strong>A</strong> has a blue label and recorded weight of 1.5 kg; <strong>B</strong> has a recorded weight of 3 kg but no blue label. Ask where each goes and why. A goes on the morning van; B goes to the checking desk, not the afternoon van.</p><p>If both reasons are clear, move on rather than adding questions for their own sake. If B still goes on a van, revisit the readiness decision with one contrasting pair. For a real subject, use the class source and ask the teacher about persistent difficulties.</p>"
    },
    {
      "type": "quiz",
      "title": "Check your understanding",
      "question": "A fictional pupil gets every answer right while looking at an AI answer key. What is the most useful next step?",
      "options": [
        "Record the topic as mastered.",
        "Offer a fresh permitted question without the generated solution, retain agreed access support and check the reasoning.",
        "Generate a longer answer key."
      ],
      "correct": 1,
      "explanation": "Correct answers with the key available show supported performance. A fresh question and explanation give more information about understanding. Check permission and preserve agreed support; the aim is to see what the pupil can now do, not remove access."
    },
    {
      "type": "summary",
      "title": "A revision resource needs a learning check",
      "points": [
        {
          "label": "Start with a suitable source",
          "text": "Use the supplied fictional pack here. For real Haileybury study, check permitted material, approved tools/accounts and teacher direction before making AI resources."
        },
        {
          "label": "Check the practice",
          "text": "Questions, answers and explanations must match the source and the learning goal."
        },
        {
          "label": "Look for reasoning",
          "text": "A short explanation or changed example reveals more than familiarity with a summary."
        },
        {
          "label": "Plan the return",
          "text": "Choose one manageable later check and a next step if the same difficulty remains."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Test a revision decision, repair a question and choose a sensible learning cycle. Make all responses on screen.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "An AI quiz asks, “A 1 kg parcel has no blue label. Which van?” Its answer key says “morning”. The Lantern Club rules require both a blue label and a recorded weight before any van. What is the right correction?",
        "options": [
          "Keep the key because under 2 kg means morning.",
          "Ask where the parcel should go: the checking desk, because it is not ready.",
          "Use the afternoon van because the label is missing."
        ],
        "correct": 1,
        "explanation": "Both the question’s assumption and the answer key are wrong. The missing label sends the parcel to checking before weight decides a van. Check generated questions as well as answers."
      },
      {
        "kind": "select",
        "prompt": "A fictional history note says a bridge opened in 1880 and shortened the village’s route to market. Which questions go beyond recognising the date without pretending the note establishes more than it does? Select all that apply.",
        "options": [
          "“How might a shorter route affect journeys, and what further evidence would you need to know the actual effect?”",
          "“Why does this prove that every villager became wealthier?”",
          "“What does the note establish, and what does it leave uncertain about trade?”",
          "“What year appears in the sentence?”"
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "The first and third questions ask for explanation and evidence limits. The note does not prove universal prosperity. The date question can check recall, but does not by itself test explanation or application."
      },
      {
        "kind": "order",
        "prompt": "Arrange a small revision cycle that includes feedback and a later check.",
        "options": [
          "Return at a suitable later session to a fresh example with agreed access support.",
          "Attempt one question before seeing its answer.",
          "Use the checked idea to explain a changed example.",
          "Check against the source and correct the particular misunderstanding."
        ],
        "correct": [
          1,
          3,
          2,
          0
        ],
        "explanation": "Attempt, check and correct, apply, then return. The cycle makes a gap visible and checks reasoning. It does not promise mastery from one quiz or require a fixed interval for every learner."
      }
    ]
  }
}
);
