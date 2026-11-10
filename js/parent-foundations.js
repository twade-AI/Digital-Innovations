/* Parent course foundations: fictional on-screen practice; November 2026 Parent Guide is the approved school position. */
var PARENT_LESSONS = typeof PARENT_LESSONS === 'undefined' ? [] : PARENT_LESSONS;
PARENT_LESSONS.push(
{
  "id": 301,
  "n": 1,
  "title": "AI in your child’s world",
  "minutes": 20,
  "goal": "Explain three different jobs AI can do, and open a useful conversation about how a young person uses it.",
  "desc": "Start with familiar moments: the feed, the homework question and the convincing chatbot. Work out where your judgement belongs.",
  "slides": [
    {
      "type": "hook",
      "title": "“Everyone is using it.” Where do you start?",
      "body": "<p>A teenager asks a chatbot to explain a science idea. A music app suggests another track. A convincing image appears in a group chat. Each raises a different question about how AI shapes what we learn, choose and believe.</p><p>Start by identifying the job the technology is doing. Then ask what the young person is trying to achieve and where their own judgement comes in. You will practise those conversations through the examples in this lesson.</p>",
      "callout": "Allow around 20 minutes, including a three-minute training-data activity. Choose your responses on screen, then use the feedback to check your reasoning."
    },
    {
      "type": "concept",
      "title": "What job is the AI doing?",
      "body": "<p>AI describes computer systems designed to recognise patterns, make predictions or generate material. A recommendation system uses signals about someone’s behaviour to predict what they will want to watch or hear next. Generative AI produces an answer, image or sound in response to an instruction, usually called a <strong>prompt</strong>.</p><p>Gemini is a generative AI assistant. Its conversational style makes it easy to ask a follow-up question. That fluency also makes a mistaken answer sound convincing, so the person using it still needs to check the facts and decide what to do with the response.</p>",
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
      "title": "Training data: which examples did the model see?",
      "body": "<p>During <strong>training</strong>, a model learns patterns from examples. Those examples are its <strong>training data</strong>. A fruit classifier, for instance, can learn to label pictures as apples or other fruit. The examples selected for training influence the patterns it learns.</p><p>Imagine a training collection whose apple pictures are mostly red apples. In a small test using pictures it has not seen before, the model correctly labels eight out of ten red apples and three out of ten green apples. These are invented results for this activity.</p><p>That uneven performance gives us a problem to investigate. Missing examples can contribute to <strong>bias</strong>: a pattern of poorer results for some kinds of input. We need to check the images and test again to find out whether colour, lighting, camera angle or something else explains the difference.</p>",
      "callout": "Ask which examples are missing and how you would test whether the model has learned a useful pattern.",
      "sources": [
        {
          "label": "Google Machine Learning Crash Course: data selection and bias",
          "url": "https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias"
        }
      ]
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 1003,
      "title": "Three-minute activity: test the apple classifier",
      "question": {
        "kind": "select",
        "prompt": "The model trained with mostly red apple examples. It labelled eight out of ten unseen red apples correctly, but only three out of ten unseen green apples. Select every useful next step for investigating this result.",
        "options": [
          "Compare more correctly labelled red and green apple pictures taken under similar lighting and camera angles, keeping them separate from training.",
          "Conclude that every AI model will mistake green apples because colour alone caused these errors.",
          "Review the training examples for missing varieties and conditions, add suitable examples where needed, then test the revised model on new pictures it has not learned from.",
          "Use the same ten green pictures repeatedly for training and testing; improvement on those pictures proves the model recognises all green apples."
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "The first step checks whether the difference persists when other picture conditions are more comparable. The third examines gaps in the training examples and checks improvement on fresh pictures. Reusing the same pictures can reward learning those examples rather than a pattern that works elsewhere. These invented results do not establish that colour caused the errors or that every model would fail. Apply the same question more broadly: whose examples are represented, and for whom have we actually checked the results?"
      }
    },
    {
      "type": "concept",
      "title": "The same technology can support very different purposes",
      "body": "<p>Alex is learning fractions and asks for an explanation of why two quarters equal one half. A diagram of pizza slices gives Alex something to work with: compare the pieces, explain the relationship and try another fraction.</p><p>Now imagine Alex asks for the completed worksheet. The page is finished, but we still need to find out what Alex understands. Haileybury’s principle <strong>Don’t steal the struggle</strong> keeps attention on that learning. After the help, ask Alex to explain the idea and use it on a different question.</p>",
      "callout": "Begin with: “What are you trying to learn or do?”"
    },
    {
      "type": "concept",
      "title": "Four principles to keep beside you",
      "body": "<p>The Haileybury AI Parent Guide sets out four principles for using AI well. Apply them alongside the instructions for the task, so the conversation covers the learning, the contribution of the tool and the people affected.</p>",
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
      "callout": "Keep agreed assistive support in place while the pupil does the thinking the task is designed to develop."
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 4,
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
        "explanation": "Sam’s question checks whether the app is serving a deliberate choice. Ari’s checks whether the explanation led to understanding. Jo’s checks the poem’s suitability and the information shared. Each question connects the tool to the person using it."
      }
    },
    {
      "type": "scenario",
      "title": "The conversation at the kitchen table",
      "situation": "<p>A 15-year-old says, “I used AI on the history homework.” You have not seen the task instructions or what the tool did.</p>",
      "question": "Which opening is most likely to give you useful information?",
      "choices": [
        {
          "text": "“Then the homework cannot be yours.”",
          "outcome": "First find out what the task allowed and what the pupil used AI to do. That gives you the information needed to recognise permitted help or address a problem fairly."
        },
        {
          "text": "“What was the task, and what did AI help you with?”",
          "outcome": "Follow this with “What did you work out for yourself?” Then check the task instructions together. You are asking for an honest account and making the boundary clear."
        },
        {
          "text": "“As long as it sounds good, that is fine.”",
          "outcome": "Ask how the answer was produced and what the pupil can explain. A polished result still needs to meet the task rules and show the pupil’s understanding."
        }
      ]
    },
    {
      "type": "concept",
      "title": "When the answer is “You don’t get it”",
      "body": "<p>Sometimes a sensible question meets a defensive answer. Ask about one choice and give the teenager room to explain it.</p><p><strong>Parent:</strong> “What did the tool help you with?”<br><strong>Teenager:</strong> “You don’t get it. Everyone uses it.”<br><strong>Parent:</strong> “Show me one part that helped. Then let’s look at what your teacher asked you to do.”<br><strong>Teenager:</strong> “It gave me three arguments.”<br><strong>Parent:</strong> “Which would you choose, and why?”</p><p>That last question brings the conversation back to the pupil’s judgement. You can then check the permission and evidence together, with a clearer understanding of what happened.</p>",
      "callout": "With a younger pupil, explore a school-directed example together. Give an older teenager space to explain their process and choose a relevant example to share."
    },
    {
      "type": "concept",
      "title": "You can be useful without knowing the subject",
      "body": "<p>Your role is to help the pupil organise the task, identify the difficulty and recognise when to ask a teacher. Start with “Show me the bit you understand so far.” Give them time to answer, then ask what help would make the next step possible.</p><p>When the subject is unfamiliar, use the class source to check the explanation together. Say: “I can follow how you approached it. Let’s check that part against your notes, or ask your teacher.” This shows the pupil how to handle uncertainty honestly and find the right support.</p>",
      "callout": "Ask the pupil to show where their explanation comes from and what they can now do with it.",
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
      "explanation": "Check permission first, then ask the pupil to explain and apply the idea. This shows what they understand while agreed assistive support remains available."
    },
    {
      "type": "summary",
      "title": "Help them explain their choices",
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
          "text": "Use the final cases to choose an opening question and a follow-up that bring the pupil’s thinking into view."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply the four principles to these three decisions. Check the explanation after each response.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A teenager says, “AI gave me arguments for tomorrow’s discussion.” You have not seen the task. Which response best opens a useful conversation?",
        "options": [
          "“What was the discussion asking you to consider, which argument would you choose, and what did the tool contribute?”",
          "“If the arguments are accurate, there is no need to ask how you prepared.”",
          "“The number of arguments will show whether you have done enough work.”"
        ],
        "correct": 0,
        "explanation": "The opening establishes the purpose, the tool’s contribution and the pupil’s own choice. Follow up by checking the task instructions and the evidence behind the chosen argument."
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
        "explanation": "Keep the focus on the pupil’s thinking and retain agreed access support. Asking them to explain a decision gives you useful information; removing every aid or demanding private chats does not establish understanding."
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
        "explanation": "Identify the learning goal and check permission before using the tool. Then inspect the help and ask the learner to apply the idea. Each step gives the next one a clear purpose."
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
      "body": "<p>A chatbot gives a precise time, a sensible explanation and a neat list of sources. It feels reassuring. The next question is whether those sources support what the answer says.</p><p>In this lesson, take one claim that matters, read the relevant passage and decide what it establishes. You will use the source cards provided, then practise correcting an answer that goes beyond its evidence.</p>",
      "callout": "Allow around 15 minutes. Read each source closely before choosing your verdict."
    },
    {
      "type": "concept",
      "title": "How a fluent mistake happens",
      "body": "<p>A generative language model produces text using patterns learned during training and the information available in the conversation or connected tools. It can put together a plausible sentence even when the fact, quotation or reference is wrong. An invented detail presented as fact is often called a <strong>hallucination</strong>.</p><p>Some systems retrieve information from sources. You still need to check that the answer represents those sources accurately: it might overlook a condition, combine two different claims or add a detail the source never supplied. Open the source and find the passage that supports the claim.</p>",
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
          "text": "The source leaves the point unresolved. State what is missing and check elsewhere if it affects your decision."
        }
      ],
      "callout": "Follow the link, then check the passage. A citation only helps when it supports the claim beside it."
    },
    {
      "type": "concept",
      "title": "Worked example: a sentence that says too much",
      "body": "<p><strong>Fictional source:</strong> “The museum’s Saturday model-making session starts at 10 am. Booking is required. Entry to the permanent galleries is free.”</p><p><strong>Generated answer:</strong> “The model-making session is free and you can drop in at 10 am.”</p><p>The start time is supported. “Drop in” conflicts with the booking requirement. The workshop price is not established: free gallery entry does not tell us what the separate session costs. A useful correction is: “The session starts at 10 am and requires booking. Check the session fee before booking.”</p>",
      "callout": "Keep the correct start time, fix the booking instruction and check the missing price. Each claim needs its own verdict."
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 4,
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
      "body": "<p>Begin with claims that affect a decision: a deadline, a cost, a quotation, a safety instruction or the main evidence for an argument. Give these claims more attention than incidental wording. The consequences help you decide how far to check.</p><p>Ask the pupil: “Which claim are you relying on here? Let’s open that source and find the passage.” Let them explain the connection, then inspect it together. They practise the checking, and you can see how they reached their conclusion.</p><p>This is Haileybury’s <strong>Human judgement first</strong> in action. When the evidence falls short, narrow the claim, leave it out or ask someone qualified to clarify it.</p>",
      "callout": "Be clear about what you know, what you have checked and what still needs an answer."
    },
    {
      "type": "concept",
      "title": "Choose a source that can answer the question",
      "body": "<p>Choose a source with responsibility for the question. For a school deadline, use the current school instruction. For a qualification rule, check the relevant awarding body and school guidance. Take a health concern to an appropriate professional.</p><p>Then check the date, author, scope and exact passage. An official page can still refer to another country, course or year. For a disputed or consequential claim, compare suitable independent evidence. Agreement between two chatbots is a reason to investigate the underlying sources, not confirmation that the claim is true.</p>",
      "callout": "The pupil remains responsible for checking the claims they use and explaining where the evidence comes from."
    },
    {
      "type": "scenario",
      "title": "“But it gave me three references.”",
      "situation": "<p>A pupil’s paragraph cites three articles. One link works, but the article discusses adults while the paragraph makes a claim about 13-year-olds. You have not checked the other links.</p>",
      "question": "What is the most useful next step?",
      "choices": [
        {
          "text": "Accept the paragraph because there are several references.",
          "outcome": "The number of references does not establish that any supports the claim. The source you opened concerns a different group."
        },
        {
          "text": "Check the relevant passages and revise the claim to match the evidence.",
          "outcome": "Read what the adult study actually establishes, then check the remaining sources. Narrow or remove the claim about younger pupils unless relevant evidence supports it."
        },
        {
          "text": "Ask the same chatbot whether its references are genuine and stop there.",
          "outcome": "The chatbot can produce another confident assurance. Open the references and inspect the relevant passages to establish what they support."
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
      "explanation": "The dated notice gives a specific exception for this Thursday, which explains the difference. Match the source to the session you are attending. If that remains unclear, check with the organiser."
    },
    {
      "type": "concept",
      "title": "Inside the Removes course: a convincing voice",
      "body": "<p>Removes lesson 119 asks pupils to examine a fictional sports-club voice note. It sounds like the organiser and requests an urgent payment to changed bank details, with a request to keep it quiet.</p><p><strong>The teaching aim</strong> is to choose a safe way to verify both the recording and the action requested. <strong>AI’s role in the example</strong> is the possibility of a synthetic voice imitating someone familiar. The task examines that capability; pupils are not asked to clone a person’s voice.</p><p><strong>The pupil’s decision</strong> is what evidence would justify acting. They work out how to confirm the request through a previously trusted contact route, while pausing the payment. This puts the source-checking question into a real decision: does a convincing presentation establish the claim or the person’s authority?</p>",
      "callout": "Ask: “What would you need to check before acting, and why would that source answer the question?”",
      "sources": [
        {
          "label": "Explore Removes lesson 119: verify a suspicious recording",
          "url": "removes.html?lesson=119"
        },
        {
          "label": "Haileybury: the school’s approach to AI",
          "url": "https://www.haileybury.com/innovation-research/artificial-intelligence"
        }
      ],
      "sourceNote": "Example from the Removes curriculum. The club message is a fictional teaching scenario."
    },
    {
      "type": "summary",
      "title": "Match the answer to the evidence",
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
    "intro": "Use supported, contradicted and not established to judge the claims in these cases.",
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
        "explanation": "The date and booking date are explicit. Lunch and price are unstated, while “any teenager” extends beyond the listed ages of 14–18. Keep the confirmed details and leave the missing information visible."
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
        "explanation": "Inspect who took part, what they did and what was measured. Those details determine whether the study supports a claim about young pupils. Revise the claim to match the evidence you find."
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
        "explanation": "Check that the source covers the current qualification, exam series and school arrangements. An old official page can contain accurate information for a different year. Ask school if the relevant deadline remains unclear."
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
      "body": "<p>A parent wants revision advice and considers uploading a child’s school report. The document explains the difficulties, but it also carries personal information about the pupil and other people.</p><p>Before uploading, check the account, the information being sent and who can see the result. We will work through those decisions using an invented learning brief, ready for the practical lessons.</p>",
      "callout": "Allow around 20 minutes. Use the examples to decide what belongs in a prompt and what should stay out."
    },
    {
      "type": "concept",
      "title": "Check whose account you are using",
      "body": "<p>An adult’s personal account, a child’s account and a school-managed account can have different access, settings and protections. Check age eligibility, location, account type and school administration before using a feature with a pupil.</p><p>For the live practicals in this course, use your own eligible adult account with the supplied fictional material. The complete worked examples provide another route through the same learning. Pupil schoolwork must follow the school-approved arrangements; sharing your adult login does not provide that permission.</p>",
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
      "title": "Follow the school-approved route",
      "body": "<p><strong>Haileybury-specific guidance, November 2026 parent guide:</strong> approved arrangements cover Gemini and Gemini Notebook, Canva and teacher-created Brisk Bots. Other AI platforms and personal AI accounts are not permitted for schoolwork.</p><p><strong>Removes to Upper Sixth</strong> may use approved AI for general study support, subject to age limits and teacher direction. <strong>Lower School</strong> pupils may use AI only when explicitly instructed by the school. The ability to open an app is not permission to use it.</p><p>For assessed work, follow the teacher’s task instructions and the qualification rules. If your child attends another school, use that school’s current policy. Lesson 6 explains the assessment categories.</p>",
      "callout": "Keep adult practice and pupil schoolwork separate. Use your own account for this course and leave school-managed controls in place."
    },
    {
      "type": "concept",
      "title": "Look beyond the name",
      "body": "<p>A document can identify someone through a combination of details: year group, school, an unusual event, a diagnosis or family circumstances. Initials leave many of those clues intact.</p><p>Use the fictional packs for these practicals. Keep school reports, marked pupil work, medical or SEND information, private messages, identifying photographs and confidential school documents out of the exercise. The invented brief gives the tool the context it needs for the skill you are practising.</p>",
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
      "title": "Check how the product handles information",
      "body": "<p>In personal Gemini accounts, activity controls, temporary chats, connected apps and feedback affect how information is handled. Turning off Keep Activity does not mean nothing is stored: Google describes limited retention for future chats and exceptions, and human review can occur.</p><p>Check the terms for the product and account you are using. Gemini Notebook has its own terms, and Education accounts can have different protections from personal accounts. Use the official help pages below to resolve an account question. If the terms do not fit the intended use, keep the information out of the tool.</p>",
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
      "sourceNote": "Google guidance checked November 2026. Consult the current product help for account-specific decisions."
    },
    {
      "type": "concept",
      "title": "Check the input and the audience",
      "body": "<p>Uploading a source sends information to the service. Sharing a link can then give other people access to the conversation, source or notebook. Check both stages.</p><p>A notebook kept private has still received the uploaded information. An approved account still requires an appropriate source and a deliberate sharing choice. Before sending a link, check exactly who can open it.</p><p>For these practicals, use the supplied fictional material and keep the work unshared. Leave email, calendars and private files disconnected. That gives you a clear boundary while you learn how the tool works.</p>",
      "callout": "Before uploading, ask what you are sending. Before sharing, ask who will be able to see it."
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 6,
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
        "explanation": "The invented brief and supplied pack provide the context needed for practice. A covered name can leave identifying details, a class list exposes other people’s information, and owning a textbook does not grant public redistribution rights."
      }
    },
    {
      "type": "concept",
      "title": "Work through a decision before opening the tool",
      "body": "<p>You want Gemini to help plan a fictional community event. Here is the check that makes the practice appropriate.</p>",
      "bullets": [
        {
          "term": "Account",
          "text": "I use my own eligible adult account or work through the supplied examples."
        },
        {
          "term": "Information",
          "text": "I use the invented event brief and keep private family, pupil and school information out."
        },
        {
          "term": "Permission",
          "text": "I have permission to use the material. Pupil schoolwork follows its own school-approved arrangements."
        },
        {
          "term": "Sharing",
          "text": "I keep this practice unshared and private apps disconnected. Before sharing other work, I check the audience."
        }
      ],
      "callout": "Use the account, information, permission and sharing checks together whenever you start a new task."
    },
    {
      "type": "activity",
      "title": "Does switching history off settle the decision?",
      "instructions": "<p>A parent wants to upload a school report and has switched activity history off. Think through three points: the service may still retain information; account protections differ; and the parent still needs permission to use the document.</p><p>Decide whether the setting resolves the concern, then open the explanation.</p>",
      "steps": [
        "Ask which information in the report is actually needed for the practice.",
        "Compare using the real report with using the invented learning brief supplied in this course.",
        "Choose your route for the practical: your eligible adult account with fictional material, or the worked examples."
      ],
      "reveal": "<p>Use the invented brief. Switching history off neither creates permission to upload the report nor guarantees zero retention. The brief provides the learning context while keeping the pupil’s information out of the exercise.</p><p>If account eligibility or protections are unclear, work through the supplied examples and use the official product help to resolve the account question.</p>",
      "revealLabel": "Compare your thinking",
      "callout": "For a closer look at your own account, open its current privacy explanation and connected-app controls."
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
      "explanation": "Haileybury requires explicit school instruction for Lower School use and school-approved account arrangements. Both must be in place. The general study permission for older pupils also remains subject to the rules for each assessed task."
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
          "text": "Use the supplied fictional brief and include only the information needed for the task."
        },
        {
          "label": "Read the relevant terms",
          "text": "Check the product and account protections, including feedback and sharing."
        },
        {
          "label": "Keep permission explicit",
          "text": "A working app is not permission for schoolwork or public sharing."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply the account, information, permission and sharing checks to these three cases.",
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
        "explanation": "The invented brief gives you the same practice while protecting the pupil’s information. Removing a name can leave identifying details, and temporary-chat settings do not establish permission or guarantee zero retention."
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
        "explanation": "Keeping the notebook unshared limits access by other people. You still need to check what is sent to the service, your permission to use it and the relevant account terms."
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
        "explanation": "Follow both parts of Haileybury’s guidance: explicit school instruction for Lower School use and school-approved account arrangements. A parent’s personal login does not meet those requirements."
      }
    ]
  }
},
{
  "id": 305,
  "n": 5,
  "title": "Help with homework without taking over",
  "minutes": 20,
  "goal": "Choose a useful next-step hint and check whether a learner can use it independently.",
  "desc": "Respond to “I’m stuck” with help that leaves the important thinking with the learner.",
  "slides": [
    {
      "type": "hook",
      "title": "“I’m stuck.” It is tempting to finish it.",
      "body": "<p>It is late. A teenager has spent ten minutes on a question and wants to paste it into a chatbot. A complete answer would finish the question. You would still need to find out what the learner understands.</p><p>Your next question matters. Work out where the learner is stuck, choose help that moves them forward and check what they can do afterwards. We will practise that sequence using a short maths example.</p>",
      "callout": "Allow around 20 minutes. Compare two reasonable forms of help, then choose the next step that fits the learner’s difficulty."
    },
    {
      "type": "concept",
      "title": "First find the sticking point",
      "body": "<p>“I can’t do it” can mean several things: the instruction is unclear, a fact has been forgotten, the method is uncertain, getting ideas onto the page is difficult, or the learner is tired. Each calls for a different response.</p><p>Ask: “What is the task asking, and which part can you already do?” Use the answer to choose the next step. Reread the instruction, look at a class example, take a short break, use agreed support or ask the teacher. Where AI is permitted, give it a specific job that addresses the difficulty you have identified.</p>",
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
      "body": "<p>A <strong>scaffold</strong> supports a part of the task the learner cannot yet manage alone. It might be a question, a diagram or a worked example of a different problem. As the idea becomes clearer, the learner takes on more of the task themselves.</p><p>This is Haileybury’s <strong>Don’t steal the struggle</strong> in practice. Keep the decision that develops understanding with the pupil, and give them the support needed to reach it. Agreed assistive tools stay in place: read-aloud, for example, can provide access to a question while the pupil does the reasoning.</p>",
      "callout": "Ask: “What thinking should stay with the learner, and what would help them take the next step?”",
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
      "callout": "Response C builds on the learner’s correct step and asks them to decide what the reduction means."
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 4,
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
        "explanation": "The calculation is correct; its meaning is the sticking point. Recognise the £6 reduction, then ask what it represents. That leaves the learner to decide how to find the sale price. If the hint fails, use a clearer representation or the class explanation."
      }
    },
    {
      "type": "concept",
      "title": "What if the hint still does not help?",
      "body": "<p>Return to the £60 bag. The learner says: “I still think £6 is the price because that is the number I calculated.” Change the representation so they can see what the number means.</p><p><strong>Parent:</strong> “On a sale label, ‘£6 off’ describes a saving. Draw the original £60 as a bar and mark the £6 being removed. What does the part left over represent?”<br><strong>Learner:</strong> “The amount I still pay.”<br><strong>Parent:</strong> “Now show how you would find that amount.”</p><p>If the difficulty remains, return to a class example or ask the teacher about this particular misunderstanding. If the learner is exhausted, agree when to come back to it.</p>",
      "callout": "Choose the next step from the learner’s response. That might be a clearer example, a break or a specific question for the teacher."
    },
    {
      "type": "scenario",
      "title": "Two useful options. Which would you try first?",
      "situation": "<p>A pupil can calculate 10% but confuses the saving with the price they still pay. Their class notes contain a worked bar diagram that labels both amounts, and they have not looked at it yet. The teacher also permits a question-style hint from the approved school AI tool.</p><p>Both routes can provide useful help. Choose the first step you would take, then compare the reasons.</p>",
      "question": "Which support would you try first in this situation?",
      "choices": [
        {
          "text": "Ask the approved AI tool for one question that helps the pupil distinguish the saving from the sale price.",
          "outcome": "This can work if the hint addresses that distinction and leaves the calculation with the pupil. Check the response before using it: the tool may supply a full solution instead. Here the class diagram already explains the exact distinction, so opening it is an efficient first step. After either route, ask the pupil to explain what each amount represents and solve a fresh example."
        },
        {
          "text": "Open the class worked example and ask the pupil to point to the saving and the amount left to pay.",
          "outcome": "This is the stronger first step for the details supplied: an available class example directly addresses the misunderstanding and uses the taught representation. Ask the pupil to explain the two amounts, then close the worked solution and try a different price. If the example leaves a specific question unresolved, a checked, permitted AI hint can provide another route into that question."
        }
      ]
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 1007,
      "title": "Now change the context",
      "question": {
        "kind": "choice",
        "prompt": "The pupil has now explained the class example correctly. A new problem says a £50 price rises by 10%, and they are unsure how “rises” changes the calculation. The teacher permits a question-style AI hint. The approved tool supplies: “Does the price go up or down? What does 10% represent here?” You have checked that this hint fits the question. Which next step most directly addresses the remaining difficulty?",
        "options": [
          "Use the checked hint, let the pupil decide and calculate, then ask them to explain a different price-rise example with agreed support.",
          "Start again with the same price-reduction example and repeat its steps before letting the pupil consider a rise."
        ],
        "correct": 0,
        "explanation": "The pupil has already explained the reduction example; the remaining difficulty is interpreting a rise. The checked hint targets that decision and leaves the calculation with them. Revisit the class example if its underlying method is still unclear, but repeating it is not the most direct response to the difficulty described here. The pupil should explain that 10% of £50 is £5 and that a rise makes the price £55, then apply the idea to a fresh example. That checks whether the help transferred."
      }
    },
    {
      "type": "concept",
      "title": "Make the learning check small and useful",
      "body": "<p>After the help, ask for a short explanation or a different example. The response shows whether the learner can use the idea. If they explain and apply it, let them continue. If they repeat the answer but cannot explain it, revisit the point that remains unclear.</p><p>When the subject is unfamiliar to you, ask the learner to point to the class note supporting their explanation. You can help them locate the uncertainty and take it to the teacher.</p><p>For Haileybury schoolwork, AI help must use the approved tool and account and follow the teacher’s task instructions. Ask the pupil to explain what help they used and what they worked out themselves.</p>",
      "callout": "Human judgement first means checking whether the help worked. Transparent by default means explaining its contribution honestly."
    },
    {
      "type": "scenario",
      "title": "The hint arrives as a full solution",
      "situation": "<p>A pupil is permitted to use one hint on a practice question. The approved tool ignores the instruction and supplies the whole answer.</p>",
      "question": "What should the parent help the pupil do?",
      "choices": [
        {
          "text": "Copy it, because the pupil asked for a hint.",
          "outcome": "The prompt does not decide whether the response is permitted. The actual contribution exceeded the stated boundary."
        },
        {
          "text": "Stop using that answer, record what happened as required and seek a permitted way to continue.",
          "outcome": "Explain that the tool supplied more than requested, keep the records the task requires and ask how to continue. A different permitted practice example can help check understanding while the original contribution remains visible."
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
      "explanation": "Keep the check focused on the target learning. Read-aloud support provides access to the question while the learner explains the method and does the reasoning."
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
        "explanation": "The question recognises the pupil’s observation and directs attention to the class note. The pupil still has to explain the energy transfer. That is the contribution this task is designed to develop."
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
        "explanation": "A fresh example and an explanation show what the learner can apply. Keep agreed access support in place and compare the reasoning with the class source."
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
        "explanation": "Find the difficulty, offer specific help, give the learner time to act and check what changed. Use the response to decide whether to continue, revisit the idea or seek further support."
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
      "body": "<p>A pupil has used AI to rewrite a paragraph. Whether that is allowed depends on the task: the wording itself may be part of what the teacher is assessing.</p><p>Read the task instructions before using the tool. This lesson shows how Haileybury’s permission levels work, what pupils need to acknowledge and how to ask a clear question when the boundary is uncertain.</p>",
      "callout": "Allow around 20 minutes. Apply the rules supplied in each case, then check the reasons for your choice."
    },
    {
      "type": "concept",
      "title": "Read the instructions for this task",
      "body": "<p>Start with the purpose of the work. Personal practice develops a skill; homework may check independent understanding; assessed coursework can contribute to a qualification. The permitted help depends on that purpose and the instructions given.</p><p>Check the teacher’s directions, the approved tool and account, and any qualification requirements. If they are unclear or appear to conflict, ask the teacher before using AI. A permission given for last week’s task does not carry over automatically.</p>",
      "callout": "An approved product can still be prohibited for a particular task."
    },
    {
      "type": "concept",
      "title": "Haileybury’s three assessment levels",
      "body": "<p><strong>Haileybury AI Parent Guide, November 2026:</strong> teachers choose one of three AI Scale levels for assessed work. Read the level and the task instructions together to establish exactly what is allowed.</p>",
      "callout": "Submit AI-generated material only where expressly permitted. GCSE, A-level and IB qualification rules take precedence; ask the teacher to clarify any uncertainty and confirm the agreed access support.",
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
      "body": "<p><strong>Haileybury’s general study rule:</strong> Removes to Upper Sixth may use approved AI for general study support, subject to age limits and teacher direction. Lower School pupils may use AI only when explicitly instructed by the school.</p><p>Then check the task. A Removes pupil with general study permission can still receive a “No AI” assessment. A Lower School pupil needs explicit school instruction even when an older pupil uses the same tool.</p><p>Use the school-approved arrangements. Personal AI accounts and other AI platforms are not permitted for schoolwork. Families at another school should follow that school’s current rules.</p>",
      "callout": "Check the year-group rule, the account and the task instruction together. Each has a part in deciding whether the use is permitted."
    },
    {
      "type": "concept",
      "title": "Permission, acknowledgement and the pupil’s contribution",
      "body": "<p><strong>Permission</strong> establishes whether the use is allowed. <strong>Acknowledgement</strong> explains the help received in the form required. <strong>The pupil’s contribution</strong> is the thinking and work they can honestly claim and explain.</p><p>Check permission first, then follow the recording requirements. A permitted task may require prompts, outputs or source details alongside the pupil’s explanation. Acknowledging prohibited help does not make it acceptable; the pupil needs to tell the teacher what happened and follow the appropriate process.</p>",
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
      "callout": "Use the guidance for the actual qualification. JCQ documents have a defined scope; school will direct pupils to the relevant rules, including those for IB."
    },
    {
      "type": "concept",
      "title": "Worked example: allowed planning, prohibited drafting",
      "body": "<p><strong>Fictional task instruction:</strong> “You may use the approved school AI tool to suggest three possible research questions. Choose and refine one yourself. Do not ask AI to draft your response. Submit the prompts and suggestions with your chosen question.”</p><p>A pupil asks for three questions, evaluates them and records the exchange: that fits this instruction. Asking for an opening paragraph goes beyond it, even if the pupil later acknowledges the tool.</p><p>A parent’s useful question is: “Show me what the instruction permits and where your own decision begins.”</p>",
      "callout": "In this practice case, the boundary is clear: AI suggests questions; the pupil refines the choice and writes the response.",
      "revealLabel": "See how the pupil explains the contribution",
      "reveal": "<p><strong>Example contribution note:</strong> “I used the school-approved AI tool to suggest three research questions. I compared them, narrowed one myself and wrote the final response. I checked factual suggestions against the class sources. The prompts and suggestions are attached as this task requires.”</p><p>The note explains what happened, and the attached record meets this task’s instruction. For a real assessment, include the tool name, date, sources and other details required by the teacher or awarding body. The record must accurately describe the pupil’s process.</p>"
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 6,
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
      "body": "<p>When a paragraph looks unusually polished, ask the pupil to explain the argument and how they developed it. Careful revision, permitted help and agreed support can all change the finished work. A change in style or an AI detector score does not establish who wrote it.</p><p>Use the pupil’s explanation and relevant drafts or records to understand the process. If a concern remains, follow the school’s procedure. Keep pupil work out of unapproved detectors so that investigating one concern does not create a further disclosure.</p>",
      "callout": "Apply dignity and care by asking fairly, handling the concern privately and making the next step clear."
    },
    {
      "type": "scenario",
      "title": "The deadline is tomorrow",
      "situation": "<p>A pupil admits that AI rewrote a section of assessed work. The task appears to prohibit that help. They suggest changing a few words so no one will notice.</p>",
      "question": "Which response best supports an honest resolution?",
      "choices": [
        {
          "text": "Help disguise the wording before submission.",
          "outcome": "That would conceal the contribution and leave the original permission problem unresolved."
        },
        {
          "text": "Stop using the generated section and contact the teacher promptly, explaining what happened.",
          "outcome": "Tell the teacher what help was used, keep the required records and ask how to proceed under the assessment rules. The school must guide the resolution; deleting or disguising the section does not settle it."
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
      "explanation": "Permission sets the boundary; acknowledgement explains the contribution. Honesty matters when something has gone wrong, and the teacher must guide the next step. The rules do not give a universal percentage of acceptable AI assistance."
    },
    {
      "type": "concept",
      "title": "A question the teacher can answer",
      "body": "<p>Give the teacher enough detail to answer the actual question. Name the task and distinguish the kinds of help the pupil wants.</p><p><strong>Example:</strong> “For the independent presentation, may I use the school-approved tool to explain unfamiliar source vocabulary or suggest an outline? Is rewriting my script permitted? Which tool/account and records should I use? Please confirm how my agreed read-aloud support applies.”</p><p>An older pupil can ask this directly, with a parent helping them clarify the question. If AI has already been used, explain that contribution honestly so the teacher can advise on what happens next.</p>",
      "callout": "Notice how the example separates explaining a source, planning a response and rewriting the pupil’s work."
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
          "text": "Confirm how the pupil’s agreed support applies to this task."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Apply Haileybury’s current guide and the instructions supplied in each case.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A geography task is independently written. A pupil wants AI to simplify source reading and rewrite the final answer, and has agreed read-aloud support. Which clarification is most useful?",
        "options": [
          "“Can we use AI for geography?”",
          "“May the approved tool simplify the source, may it rewrite the answer, what records are required, and how does the agreed read-aloud support apply?”",
          "“We will acknowledge everything, so please confirm that any AI help is allowed.”"
        ],
        "correct": 1,
        "explanation": "The specific question separates source explanation, rewriting, recording and access support. That gives the teacher enough information to clarify each contribution and the approved route."
      },
      {
        "kind": "select",
        "prompt": "A practice task permits three AI-generated research questions, requires the pupil to refine one, prohibits AI drafting, and requires prompts and suggestions to be submitted. Which actions fit? Select all that apply.",
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
        "explanation": "Follow both the permission and the recording requirements. The pupil evaluates and refines a question, writes the final response and includes the required prompts and suggestions with an honest explanation of the help."
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
        "explanation": "An accurate account lets school apply the assessment process. Detector scores and changes of wording cannot resolve the permission issue. Follow the teacher’s advice and retain the pupil’s agreed access support."
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
      "body": "<p>A set of AI-made notes looks excellent, and the learner recognises every point. The next question is what they can recall, explain and apply when a different example appears.</p><p>Work through a short revision cycle using the Lantern Club’s invented parcel rules. You will apply the rules, inspect a flawed AI question and choose practice that addresses a specific misunderstanding.</p>",
      "callout": "Allow around 20 minutes. Use the on-screen decisions to check the questions as carefully as the answers."
    },
    {
      "type": "concept",
      "title": "Attempt, check, explain, return",
      "body": "<p>Begin with an attempt so the learner can see what they know and where they are stuck. Check the answer against a reliable source, correct the misunderstanding and ask them to explain or apply the idea. A later attempt shows what remains available after the first practice.</p><p>Each step depends on a suitable question and useful feedback. Parents can help organise the routine and notice what needs revisiting. If the difficulty persists, use the class explanation and ask the subject teacher what to practise next.</p>",
      "callout": "Start with one idea and a question that shows whether the learner understands it.",
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
      "callout": "Check readiness first, then use the recorded weight to choose a van."
    },
    {
      "type": "parent-interaction",
      "practiceIndex": 3,
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
        "explanation": "Check readiness before choosing a van. Exactly 2 kg is included in “2 kg or less”, and a missing blue label sends even a light parcel to checking. With the rules visible, this task tests how you apply them."
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
          "outcome": "These questions check isolated details. To address the misunderstanding, ask the learner to check both readiness requirements before making the van decision."
        },
        {
          "text": "Show ten completed examples and ask whether the learner recognises them.",
          "outcome": "Use a worked example to explain the decision, then give the learner a fresh parcel to sort and explain. That checks whether they can apply what they have seen."
        }
      ]
    },
    {
      "type": "concept",
      "title": "Match the check to what you want to learn",
      "body": "<p>The on-screen task kept the rules visible, so it checked how you applied them. A later question with the rules closed would check recall as well. Both give useful information when you are clear about the learning goal.</p><p>For application, the learner still needs to select the relevant rule, use it on the parcel and explain the decision. An answer key would supply much of that reasoning. Choose the material available during the attempt to match what you are trying to find out.</p><p>Keep agreed reading and communication support in place. For schoolwork, follow the task’s permission and access arrangements so the check focuses on the intended knowledge or skill.</p>",
      "callout": "Ask: “Are we practising remembering the rule, or using it? What should be available for this attempt?”"
    },
    {
      "type": "concept",
      "title": "Return later; keep the right support",
      "body": "<p>Return to the idea at a suitable later study session with a fresh example. Ask the learner to explain the decision, then use the response to decide whether to move on or revisit a particular point. Choose the timing around the learner, topic and study plan.</p><p>Keep agreed assistive support. Read-aloud can provide access to the question while the learner does the reasoning. Haileybury’s <strong>Don’t steal the struggle</strong> protects that thinking, and <strong>Dignity and care</strong> protects access. Ask the teacher for targeted practice if the same difficulty keeps appearing.</p>",
      "sources": [
        {
          "label": "CAST: access to assistive technologies",
          "url": "https://udlguidelines.cast.org/action-expression/interaction/assistive-technologies/"
        }
      ],
      "revealLabel": "See a manageable later check",
      "reveal": "<p>At the next suitable session, use two fresh cases: <strong>A</strong> has a blue label and recorded weight of 1.5 kg; <strong>B</strong> has a recorded weight of 3 kg but no blue label. Ask where each goes and why. A goes on the morning van; B goes to the checking desk because it is missing a readiness requirement.</p><p>If both reasons are clear, move on. If B is still assigned to a van, compare two parcels with the same weight but different readiness. Ask the learner to explain why the missing requirement changes the decision. For a school subject, use the class source and seek the teacher’s guidance on a persistent difficulty.</p>"
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
      "explanation": "The answer key supported that performance. Give the learner a fresh permitted question and ask for the reasoning, keeping agreed access support. Compare it with the source to find out what they understand."
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
    "intro": "Choose the correction, the useful question and the revision sequence that make understanding visible.",
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
        "explanation": "The first and third questions ask the learner to explain a possible effect and identify the evidence still needed. The note gives the opening date and shorter route; universal prosperity goes beyond it. Recalling the date checks a different part of the learning."
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
        "explanation": "Begin with an attempt, use feedback to correct the misunderstanding, apply the idea and return later. Keep the timing and next question responsive to what the learner needs."
      }
    ]
  }
}
);
