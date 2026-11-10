/* Parent workshops. Original fictional practice packs; no written submissions or learner account required. */
var PARENT_LESSONS = typeof PARENT_LESSONS === 'undefined' ? [] : PARENT_LESSONS;
PARENT_LESSONS.push(
{
  "id": 304,
  "n": 4,
  "title": "Gemini practical: ask, inspect, improve",
  "minutes": 30,
  "goal": "Give a clear brief, inspect a response and make a purposeful revision.",
  "desc": "Plan a family games session with Gemini. Check the numbers, improve the rules and decide whether the plan works. Supplied examples let you try every check here too.",
  "slides": [
    {
      "type": "hook",
      "title": "Would this actually work?",
      "body": "You ask AI to plan a family games afternoon. Seconds later, you have a neatly organised answer. Then you try to set it up: there are too few counters, the timings run over and it needs equipment you do not have.<br><br>Let’s work through that problem. You will give Gemini a clear brief, check its plan and ask for a specific improvement.",
      "callout": "Open Gemini alongside the lesson, or work with the supplied responses. The questions are answered on screen."
    },
    {
      "type": "concept",
      "title": "Choose your route",
      "body": "Put Gemini and this lesson side by side in two windows, or switch between browser tabs. On a phone, switch tabs or work with the examples here.",
      "bullets": [
        {
          "term": "Try Gemini",
          "def": "Use your own eligible adult account at <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener\">gemini.google.com</a>. The free text chat is enough for this task; account limits and availability vary."
        },
        {
          "term": "Use the practice responses",
          "def": "Use the simulated responses and on-screen questions here. Choose this route if you prefer to stay in the lesson or reach a tool limit."
        },
        {
          "term": "Keep it fictional",
          "def": "Use only the details supplied in this workshop. Do not add a child’s name, school, photograph, report or family messages."
        }
      ],
      "callout": "For Haileybury pupil work, use the school-approved tools and accounts at home as well as in school. Check age requirements and teacher instructions, and acknowledge meaningful AI help. Keep your personal account for this adult practice.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current policy available through the School Portal"
        },
        {
          "label": "Google: Gemini sign-in requirements",
          "url": "https://support.google.com/gemini/answer/13278668?hl=en"
        },
        {
          "label": "Google: Gemini limits and availability",
          "url": "https://support.google.com/gemini/answer/16275805?hl=en"
        }
      ],
      "sourceNote": "Product documentation checked 10 November 2026. Account screens and availability may differ."
    },
    {
      "type": "concept",
      "title": "A prompt is a brief",
      "body": "A <strong>prompt</strong> is the request you give an AI tool. Compare “Plan a game” with “Plan a 20-minute reasoning game for 12 people using 24 counters”.<br><br>The second request gives the tool a clear task and gives you something to check. A useful brief sets out the purpose, relevant facts, boundaries and the kind of answer you need.",
      "bullets": [
        {
          "term": "Purpose",
          "def": "What should the activity achieve?"
        },
        {
          "term": "Facts",
          "def": "How many people, what equipment and how much time?"
        },
        {
          "term": "Boundaries",
          "def": "What must the plan include or avoid?"
        },
        {
          "term": "Useful output",
          "def": "Would a short timetable, a checklist or a worked example help you judge it?"
        }
      ],
      "callout": "Human judgement first: you set the purpose and decide whether the answer meets it."
    },
    {
      "type": "activity",
      "title": "Start with a deliberately vague request · 2 minutes",
      "instructions": "Try this prompt, or inspect the simulated response below: <strong>“Plan a fun family game.”</strong>",
      "steps": [
        "In your adult account, start a new conversation, copy the request into the message box and send it. Wait for the reply. Leave attachments and connected apps unused for this task.",
        "Read the response. Notice two details it had to assume because you had not supplied them.",
        "Practice route: use this simulated answer: “Divide everyone into four teams. Each team uses a tablet to complete a 30-minute treasure hunt.”"
      ],
      "revealLabel": "Compare your observations",
      "reveal": "The response assumes four teams, access to tablets and at least 30 minutes. Your request gave it none of those details. Supply the missing information, then check whether the next plan fits.",
      "callout": "If Gemini asks questions before planning, consider which details those questions help it establish.",
      "copyText": "Plan a fun family game."
    },
    {
      "type": "concept",
      "title": "Here are all the facts",
      "body": "Here is the brief for our invented family games session.<br><br><strong>People:</strong> 12 participants.<br><strong>Space:</strong> three tables.<br><strong>Equipment:</strong> 24 counters in total, paper and pencils.<br><strong>Time:</strong> 20 minutes, including explanation and finishing.<br><strong>Purpose:</strong> everyone should take part in a reasoning game.<br><strong>Boundary:</strong> no screens, extra equipment or elimination.",
      "callout": "Before asking AI, make one decision yourself: how many people and counters could each table have?",
      "revealLabel": "Check the starting arithmetic",
      "reveal": "Three tables can each have four people and eight counters. That uses all 12 people and all 24 counters. Two counters per person would also use 24. This simple calculation gives you an independent check on the answer."
    },
    {
      "type": "activity",
      "title": "Give it a brief you can check · 3 minutes",
      "instructions": "Copy this fictional prompt into Gemini, or use it to judge the next slide’s simulated response:<br><br>“Plan a 20-minute reasoning game for a fictional family session with 12 participants at three tables. We have 24 counters in total, paper and pencils. Everyone must take part; no screens, extra equipment or elimination. Include explanation time and finishing time. Give the group sizes, counters per table, a timetable and rules clear enough to follow. Identify any assumptions.”",
      "steps": [
        "Read the request before sending it. Check the people, tables, equipment, time, purpose and boundaries. Stay in the same conversation so you can compare the vague request with the clearer one.",
        "Keep the response beside the original facts. A confident tone is not evidence that the numbers work.",
        "With the supplied example, predict where the plan might fail, then check the next response."
      ],
      "callout": "Treat the answer as a draft. Decide which parts work and which need changing.",
      "copyText": "Plan a 20-minute reasoning game for a fictional family session with 12 participants at three tables. We have 24 counters in total, paper and pencils. Everyone must take part; no screens, extra equipment or elimination. Include explanation time and finishing time. Give the group sizes, counters per table, a timetable and rules clear enough to follow. Identify any assumptions."
    },
    {
      "type": "parent-interaction",
      "title": "Put this answer on trial · 4 minutes",
      "question": {
        "kind": "select",
        "prompt": "The brief allows 12 people, 24 counters and 20 minutes, with no extra equipment or elimination. A simulated response proposes the details below. Select every detail that breaks the brief.",
        "options": [
          "Three tables with four people at each.",
          "Three counters for every person.",
          "Five minutes explaining, 12 playing and five sharing.",
          "A speaker signals each round.",
          "People with wrong answers sit out."
        ],
        "correct": [
          1,
          2,
          3,
          4
        ],
        "explanation": "Three tables of four correctly seats 12. Three counters each needs 36; the timings total 22 minutes; a speaker is extra equipment; sitting out breaks the participation rule. A plan can get one detail right and still need several repairs."
      }
    },
    {
      "type": "activity",
      "title": "Ask for a purposeful revision · 3 minutes",
      "instructions": "A follow-up prompt is a new instruction in the same conversation. Tell the tool exactly what failed and what a better answer must do.",
      "steps": [
        "For the example, ask: “Keep three groups of four. You used 36 counters and 22 minutes, but the limits are 24 counters and 20 minutes. Remove the speaker and elimination. Revise the plan, show the totals and explain one round.” With your live response, name the problems you actually found.",
        "Practice route: decide whether two counters each and a 3 + 12 + 5 minute timetable would fit, then compare with the worked plan on the next slide.",
        "Check the revised plan against the original brief, including the parts that worked before. If the first plan already fits, ask for a useful missing detail, such as an example round."
      ],
      "callout": "“Make it better” leaves the problem vague. “Keep the grouping; fix these four constraints” gives you a useful revision to inspect.",
      "copyText": "Keep three groups of four. Check that the revised plan uses only 24 counters and 20 minutes, without a speaker or elimination. Show the totals and explain one round. Keep any parts that already fit the brief."
    },
    {
      "type": "concept",
      "title": "A worked plan you could actually run",
      "body": "<strong>Set-up:</strong> three groups of four, with eight counters per table.<br><strong>0–3 minutes:</strong> explain the game. Each group must find two equal rows using all eight counters, then explain why the rows are equal.<br><strong>3–15 minutes:</strong> four rounds of three minutes. Find equal groups of eight counters in a new arrangement each round. Rotate four roles: arrange, count, explain and question. Discuss whether a new arrangement is mathematically different.<br><strong>15–20 minutes:</strong> each table shares one explanation. Nobody is eliminated.",
      "callout": "Check it: 3 × 4 = 12 people; 3 × 8 = 24 counters; 3 + 12 + 5 = 20 minutes. No extra equipment. The four roles rotate so each person participates.",
      "revealLabel": "What still needs your judgement?",
      "reveal": "The numbers fit. Now consider whether the game offers the right challenge for the group. The first task gives two rows of four. Other equal groupings include one group of eight, four groups of two and eight groups of one. Different layouts can represent the same grouping, giving you something useful to discuss with the players."
    },
    {
      "type": "concept",
      "title": "Choose a check that fits the claim",
      "body": "Check the counter allocation against the brief and your own calculation. For a real-world detail, such as “the library is open on Sunday”, go to the library’s current information or contact it through a known route.<br><br>The check depends on the claim. Your brief settles how many counters are available; the library settles its opening hours.",
      "bullets": [
        {
          "term": "If a Sources link appears",
          "def": "Open the linked page and find the passage that supports the exact claim. A related page may mention the library without confirming Sunday opening."
        },
        {
          "term": "If no link appears",
          "def": "Locate the relevant source independently. If you cannot establish the fact, treat it as unverified and keep it out of the confirmed plan."
        }
      ],
      "callout": "Check quantities with the supplied facts; check changing real-world details with a relevant current source; judge suitability with the people involved.",
      "sources": [
        {
          "label": "Google: sources and related links in Gemini",
          "url": "https://support.google.com/gemini/answer/14143489?hl=en"
        }
      ]
    },
    {
      "type": "scenario",
      "title": "The revised answer says “guaranteed to engage everyone”",
      "situation": "The plan now fits the numbers. It finishes with: “This activity is guaranteed to engage every child.” You have not supplied ages, interests or access needs.",
      "question": "What would you do with that claim?",
      "choices": [
        {
          "text": "Keep it because all the arithmetic checks out.",
          "outcome": "The quantities fit. You still need to consider the group’s interests, the level of challenge and access needs."
        },
        {
          "text": "Remove the guarantee and judge the plan for the actual group.",
          "outcome": "Yes. Keep the workable structure and adjust it for the people taking part. You can make those decisions without uploading personal records."
        },
        {
          "text": "Upload a pupil report so Gemini can guarantee the right activity.",
          "outcome": "Keep the report private. Discuss adjustments with the person or school, then describe the practical requirement without identifying details—for example, keeping the activity seated."
        }
      ]
    },
    {
      "type": "activity",
      "title": "Can you use the checking routine without AI? · 2 minutes",
      "instructions": "Close the response or look away. A new fictional session has <strong>15 people, three tables, 30 counters and the same 20-minute limit</strong>. Work out a fair distribution and name one thing arithmetic alone cannot decide.",
      "steps": [
        "Work out the number of people and counters per table in your head.",
        "Check that multiplying each amount by three returns the given totals.",
        "Think of one decision arithmetic cannot settle, then reveal the comparison."
      ],
      "revealLabel": "Check your independent answer",
      "reveal": "Five people and ten counters per table: 3 × 5 = 15 and 3 × 10 = 30. Two counters each also works. Arithmetic alone cannot establish enjoyment, appropriate difficulty or accessibility. The four-role rotation in the earlier plan would need adapting for five people."
    },
    {
      "type": "summary",
      "title": "Keep the judgement, not just the answer",
      "points": [
        {
          "label": "Human judgement first",
          "text": "Set the purpose, check the result and own the final decision."
        },
        {
          "label": "Don’t steal the struggle",
          "text": "Do a small part yourself first. It gives you something independent to compare."
        },
        {
          "label": "Transparent by default",
          "text": "Say what the tool drafted and what you checked or changed."
        },
        {
          "label": "Dignity and care",
          "text": "Use the supplied practice details and keep family information private."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Now apply the checking routine to three decisions.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A new plan has 18 people, three tables and 36 counters. Which allocation uses everything equally?",
        "options": [
          "Six people and 12 counters at each table.",
          "Six people and 18 counters at each table.",
          "Three people and 12 counters at each table."
        ],
        "correct": 0,
        "explanation": "Three groups of six use 18 people. Three lots of 12 use 36 counters. Check people and equipment separately; one correct total does not establish the other."
      },
      {
        "kind": "select",
        "prompt": "A real family plan says the local library opens on Sunday and the activity is guaranteed to suit everyone. Which actions would improve your decision? Select all that apply.",
        "options": [
          "Check the library’s current information through its own website or known contact route.",
          "Accept the opening time if Gemini includes any link about libraries.",
          "Judge the activity for the actual participants and remove the unsupported guarantee.",
          "Upload a child’s report so the guarantee becomes reliable."
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "Check Sunday opening against the library’s current information. Then judge the activity for the people taking part. A related link does not confirm the hours, and a personal report does not establish that everyone will enjoy it."
      },
      {
        "kind": "order",
        "prompt": "Put this draft-and-revise routine in order.",
        "options": [
          "Inspect the draft against the facts and boundaries.",
          "Recheck the revised draft, including parts that were previously correct.",
          "Give the purpose, facts and boundaries in the request.",
          "Ask for a specific revision to a problem you found."
        ],
        "correct": [
          2,
          0,
          3,
          1
        ],
        "explanation": "Start with a checkable brief, inspect the response, request a purposeful correction, then recheck. A revision can introduce a fresh problem."
      }
    ]
  }
},
{
  "id": 307,
  "n": 7,
  "title": "Gemini practical: a study coach, one step at a time",
  "minutes": 30,
  "goal": "Request useful help and check what can be done afterwards without it.",
  "desc": "Try a small problem, ask for the smallest useful hint, then tackle a changed problem independently. Practise with Gemini or a complete coaching transcript.",
  "slides": [
    {
      "type": "hook",
      "title": "“I understand it when it explains it.” What happens next?",
      "body": "Your child reads an explanation and says, “That makes sense.” A few minutes later, a similar question leaves them stuck.<br><br>Today you will try that experience yourself: attempt a short problem, use an AI hint and then tackle a changed question with the explanation closed. Notice which part of the help lets you take the next step.",
      "callout": "Answer silently or aloud, and keep the access support you normally use. The aim is to do the thinking yourself."
    },
    {
      "type": "concept",
      "title": "A study coach leaves you a job to do",
      "body": "A <strong>study coach</strong> uses questions, hints and feedback to help someone make progress. A useful hint directs attention to the next step and leaves the learner to take it. Judge the AI response by what it asks you to do.",
      "bullets": [
        {
          "term": "Useful support",
          "def": "“What does one group contain?” directs attention while leaving the calculation to you."
        },
        {
          "term": "Taking over",
          "def": "“Here is the completed answer; copy it” removes the task you were meant to practise."
        },
        {
          "term": "Independent check",
          "def": "A changed question with the help closed shows more than saying the explanation made sense."
        }
      ],
      "callout": "Don’t steal the struggle: reduce an unhelpful obstacle, but leave the important thinking with the learner."
    },
    {
      "type": "concept",
      "title": "Open the tool, or use the transcript",
      "body": "Open <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener\">Gemini</a> with your own eligible adult account in another tab or beside this lesson. Google’s web instructions list <strong>Add files → More tools → Guided Learning</strong>. This is Gemini’s learning-focused mode.<br><br>If that option is missing, use ordinary text chat with the supplied coaching prompt. To stay in the lesson, use the transcript below: it contains the problem, hints and worked answer.",
      "callout": "Use the supplied practice problem. Keep pupil reports and assessed homework out of your personal account.",
      "sources": [
        {
          "label": "Google: Guided Learning",
          "url": "https://support.google.com/gemini/answer/16448384"
        },
        {
          "label": "Google: family access guidance",
          "url": "https://support.google.com/gemini/answer/16109150?hl=en"
        }
      ],
      "sourceNote": "Based on Google documentation checked 10 November 2026. Features and access differ by account and device."
    },
    {
      "type": "activity",
      "title": "Make a first attempt · 3 minutes",
      "instructions": "A fictional mosaic pattern uses <strong>two blue counters for every three yellow counters</strong>. You need <strong>20 counters altogether</strong>. How many should be blue and how many yellow?<br><br>A <strong>ratio</strong> describes the relative amounts. Here, 2:3 gives a group of two blue and three yellow. Repeat that group to build a larger pattern while keeping the same ratio.",
      "steps": [
        "Picture repeated groups of two blue and three yellow, or use counters to build them.",
        "Notice the first step you are unsure about. That is where a hint should help.",
        "Have a go before opening the worked solution so you can judge which hint helps."
      ],
      "callout": "If you are already confident, explain the method silently or aloud, then judge how well the coaching would support a beginner."
    },
    {
      "type": "activity",
      "title": "Ask for the smallest useful hint · 3 minutes",
      "instructions": "Use this prompt in Guided Learning or ordinary chat. Practice route: read it and continue to the next slide.<br><br>“I am an adult practising a fictional learning task. A mix uses two blue counters for every three yellow counters, with 20 counters altogether. Be a study coach. Ask what I have tried. Give one hint at a time and wait for my answer. Do not give the final numbers before I attempt them. Help me explain the reasoning.”",
      "steps": [
        "Send the coaching request, then reply with your attempt. For example: “I can make one group of two blue and three yellow, but I am not sure how to reach 20.”",
        "Read the first response. Did it ask or hint, or immediately solve everything?",
        "Take the next step yourself before asking for another hint. If the hint is unclear, ask: “Explain that hint with one small example, then give me a step to try.”"
      ],
      "callout": "Pause after each reply. Has it helped you see what to do next?",
      "copyText": "I am an adult practising a fictional learning task. A mix uses two blue counters for every three yellow counters, with 20 counters altogether. Be a study coach. Ask what I have tried. Give one hint at a time and wait for my answer. Do not give the final numbers before I attempt them. Help me explain the reasoning."
    },
    {
      "type": "scenario",
      "title": "Which response leaves useful thinking?",
      "situation": "You say, “I am not sure how to use the 20.” Here are three simulated coaching responses.",
      "question": "Which is the most useful next response?",
      "choices": [
        {
          "text": "“The answer is eight blue and 12 yellow. Use that answer.”",
          "outcome": "The numbers are correct, but it bypasses the thinking. A correct answer can still be poor coaching at this stage."
        },
        {
          "text": "“In one 2:3 group, how many counters are there altogether?”",
          "outcome": "This focuses attention on the five-counter group and leaves you to calculate how many such groups make 20. It is a small, useful next step."
        },
        {
          "text": "“This is easy. You should know ratios by now.”",
          "outcome": "This gives the learner no next step and makes asking for help harder. Good feedback keeps the conversation open."
        }
      ]
    },
    {
      "type": "activity",
      "title": "Work through only as much help as you need · 4 minutes",
      "instructions": "Use this <strong>coaching transcript</strong> one question at a time. If you are using Gemini, compare its hints with this sequence.<br><br><strong>Coach:</strong> “How many counters are in one group of two blue and three yellow?”<br><strong>You:</strong> answer silently or aloud.<br><strong>Coach:</strong> “How many of those groups fit into 20?”<br><strong>You:</strong> answer silently or aloud.<br><strong>Coach:</strong> “Use that number of groups to find each colour.”",
      "steps": [
        "Pause after each question. Look away from the later lines, or have someone read one prompt at a time if helpful. Stop seeking hints once you can continue.",
        "Notice which hint helps you see the next step. If none is needed, consider why the sequence could help a beginner.",
        "Check whether the two colour totals add to 20 before revealing the worked answer."
      ],
      "revealLabel": "See the reasoning after your attempt",
      "reveal": "One group contains 2 + 3 = 5 counters. Twenty counters make 20 ÷ 5 = 4 groups. Four groups contain 4 × 2 = 8 blue and 4 × 3 = 12 yellow. The total is 8 + 12 = 20, and 8:12 simplifies to 2:3."
    },
    {
      "type": "parent-interaction",
      "title": "Even a coaching explanation needs checking · 2 minutes",
      "question": {
        "kind": "choice",
        "prompt": "A simulated coach says: “For a 2:3 pattern with 20 counters, multiply both parts by 20: use 40 blue and 60 yellow.” Which judgement is accurate?",
        "options": [
          "It must be correct because 40:60 is the same ratio as 2:3.",
          "It keeps the ratio but gives 100 counters, so it fails the total of 20.",
          "It is wrong because the blue and yellow quantities must be equal."
        ],
        "correct": 1,
        "explanation": "40 + 60 = 100. The ratio is preserved, but the required total is not. There are four five-counter groups in 20, giving eight blue and 12 yellow. Even useful-looking coaching needs a simple factual check."
      }
    },
    {
      "type": "activity",
      "title": "Close the help. Change the problem. · 3 minutes",
      "instructions": "Now try a pattern with <strong>three blue counters for every two yellow counters</strong> and <strong>25 counters altogether</strong>. Close Gemini and the earlier solution. Explain how your answer fits both the total and the ratio. Keep counters or read-aloud support if you use them.",
      "steps": [
        "Try the changed problem silently or aloud before revealing the answer.",
        "Find the number of five-counter groups, then use it for each colour.",
        "If you need another hint, identify the step it helps with. Return later to a 3:2 pattern with 30 counters: that gives 18 blue and 12 yellow. Check that you can explain how the groups produce those amounts."
      ],
      "revealLabel": "Check the independent answer",
      "reveal": "A 3:2 group contains five counters. Twenty-five makes five groups, so there are 5 × 3 = 15 blue and 5 × 2 = 10 yellow. The total is 25, and 15:10 simplifies to 3:2. Repeating eight and 12 would copy the earlier answer without applying the method."
    },
    {
      "type": "scenario",
      "title": "Bring it back to a parent conversation",
      "situation": "A fictional child says: “Gemini explained my practice question and I got it. Can I stop now?” The school allows AI explanations for this practice activity.",
      "question": "What is a useful response?",
      "choices": [
        {
          "text": "“Good. Can you try a slightly different one with the explanation closed, then tell me your method?”",
          "outcome": "This checks whether the explanation helped. Keep the new question manageable and use their attempt to decide what needs practising next."
        },
        {
          "text": "“Let me ask Gemini for all tomorrow’s answers as well.”",
          "outcome": "That would replace the practice and may break the school’s instructions. More completed answers are not evidence of more understanding."
        },
        {
          "text": "“If you needed AI, you clearly did not learn anything.”",
          "outcome": "A hint is part of learning. Look at what the child can explain and do afterwards."
        }
      ]
    },
    {
      "type": "concept",
      "title": "The same habit works beyond maths",
      "body": "Imagine a teacher has allowed an approved AI tool to explain a practice reading task. The pupil needs to explain why a fictional character changes their mind.<br><br><strong>Taking over:</strong> “Write my paragraph for me.”<br><strong>A useful coaching request:</strong> “I have chosen this line as evidence. Ask me one question that helps me explain how it supports my point. Do not write the paragraph.”<br><br>The parent can then ask the pupil to explain the link in their own words and check it against the text. An AI response that invents a quotation needs correcting, even if the writing sounds impressive.",
      "callout": "If the method is unfamiliar or conflicts with the source, check the class materials or ask the teacher. Help your child find the next step using the approach they are learning."
    },
    {
      "type": "scenario",
      "title": "The tool can help. Is this use permitted?",
      "situation": "A Haileybury pupil brings home a school task with no clear AI permission. You know your personal Gemini account could explain it. They suggest using your account because their school account does not offer the same feature.",
      "question": "What should happen before using AI for this real task?",
      "choices": [
        {
          "text": "Use the parent’s account because explanation is always allowed.",
          "outcome": "Check permission first. A parent’s personal account must not replace the approved school route, including at home."
        },
        {
          "text": "Check the task instructions and ask the teacher if permission is unclear; use only the approved school tool and account if authorised.",
          "outcome": "Yes. Follow the task instructions and the approved school route, respect age restrictions, keep personal information out and acknowledge meaningful AI help."
        },
        {
          "text": "Copy the final answer and avoid mentioning the account used.",
          "outcome": "That replaces the learning and conceals assistance. Transparent by default means being honest about meaningful help and following the task’s boundaries."
        }
      ],
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current policy available through the School Portal"
        }
      ]
    },
    {
      "type": "concept",
      "title": "What if the tool keeps taking over?",
      "body": "Say: <strong>“Pause. Do not solve the problem. Ask one question about my current step and wait.”</strong> Then judge the next reply.<br><br>If it still gives whole answers, put it aside. Try an approved textbook example, a teacher’s explanation or the hint sequence here. Choose the support that helps the learner take the next step.",
      "bullets": [
        {
          "term": "School rules still apply",
          "def": "Check the task instructions before using AI for pupil work."
        },
        {
          "term": "Be clear about support",
          "def": "“I used one hint about grouping; I did the changed question myself” describes the process honestly."
        },
        {
          "term": "Notice the person",
          "def": "A tired or frustrated child may need a break or human explanation, rather than more generated text."
        }
      ],
      "callout": "Watch the learner’s response. Are they making progress, or just receiving more text?"
    },
    {
      "type": "summary",
      "title": "The useful check comes after the hint",
      "points": [
        {
          "label": "Try first",
          "text": "Make an initial attempt and notice where you get stuck."
        },
        {
          "label": "Ask for less",
          "text": "Use one question or hint, then do the next step yourself."
        },
        {
          "label": "Check the support",
          "text": "A plausible explanation can still fail a simple total check."
        },
        {
          "label": "Try something changed",
          "text": "A changed problem with the generated solution closed shows whether you can use the idea."
        },
        {
          "label": "Be transparent and kind",
          "text": "Name the help used; treat mistakes as a route to the next useful step."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Choose the next step in these coaching situations, then put the routine in order.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "A pupil’s school account lacks a feature available on your personal account. AI permission for the homework is unclear. What should happen first?",
        "options": [
          "Use the adult account because it is only an explanation.",
          "Check the task instructions and ask the teacher; use only the approved route if authorised.",
          "Use any account, then add an acknowledgement afterwards."
        ],
        "correct": 1,
        "explanation": "Check the task instructions and use the approved school route. Our adult practice is separate from pupil work. Acknowledging AI use does not create permission to use it."
      },
      {
        "kind": "select",
        "prompt": "A learner is more confused after three long hints. Which responses could help? Select all that apply.",
        "options": [
          "Ask which word or step is unclear.",
          "Require a much longer explanation before allowing a break.",
          "Try one concrete example, or pause for a break or human explanation.",
          "Remove their usual read-aloud support to make the attempt truly independent."
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "Locate the obstacle and choose a manageable response. A longer answer may repeat the confusion. Independence means retaining the learner’s thinking, not withdrawing appropriate access support."
      },
      {
        "kind": "order",
        "prompt": "Order a useful study-coach routine for an authorised practice task.",
        "options": [
          "Use a small hint that addresses the point of difficulty.",
          "Try a changed question with the explanation out of view.",
          "Make a first attempt and notice the sticking point.",
          "Do the next step yourself and check whether the hint was accurate."
        ],
        "correct": [
          2,
          0,
          3,
          1
        ],
        "explanation": "An attempt reveals what help is needed. A hint should leave a next step for the learner. A changed question then checks whether the method can be used independently."
      }
    ]
  }
},
{
  "id": 309,
  "n": 9,
  "title": "Gemini Notebook practical: start with sources",
  "minutes": 35,
  "goal": "Create a source-based enquiry and inspect what a citation actually supports.",
  "desc": "Check a time change in two fictional club notices. Follow the citations and decide what the documents tell you—and what you still need to ask.",
  "slides": [
    {
      "type": "hook",
      "title": "It has a citation. What does that establish?",
      "body": "An answer says the club starts at 16:00 and points to a document. That sounds reassuring, until you notice a later correction saying 16:30.<br><br>A <strong>citation</strong> points you towards supporting material. It gives you something to inspect; it does not make the answer automatically right. Today you will check two claims and one question the documents cannot settle.",
      "callout": "Read the source cards, follow the claims back to the text and make your choices on screen."
    },
    {
      "type": "concept",
      "title": "Meet Gemini Notebook",
      "body": "<strong>Gemini Notebook, formerly NotebookLM,</strong> is Google’s tool for working with source material. A <strong>source</strong> is a document or other material you ask it to use. Open the standalone tool at <a href=\"https://notebook.google.com/\" target=\"_blank\" rel=\"noopener\">notebook.google.com</a>.<br><br>You select the sources, ask a question and inspect the passages cited in the answer. We will practise with two short club notices.",
      "callout": "The useful habit is moving between the answer and the original source. A source itself can be incomplete, outdated or mistaken.",
      "sources": [
        {
          "label": "Google: NotebookLM becomes Gemini Notebook",
          "url": "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/"
        },
        {
          "label": "Google: notebook chat, sources and citations",
          "url": "https://support.google.com/gemininotebook/answer/16179559?hl=en"
        }
      ]
    },
    {
      "type": "concept",
      "title": "A small, private practice notebook",
      "body": "Use your own eligible adult account, with Notebook in another tab or beside the lesson. Alternatively, work with the source cards and simulated answers here. Use those examples if a feature is missing or you reach an account limit; no upgrade is needed.",
      "bullets": [
        {
          "term": "Use only the practice pack",
          "def": "The notices on the next slide are invented for this exercise. Use them rather than pupil reports, family correspondence or confidential school material."
        },
        {
          "term": "Keep it restricted",
          "def": "Leave “Anyone with a link” off. A simplified Chat View can still expose source material to viewers."
        },
        {
          "term": "Know the account",
          "def": "Personal and school-managed accounts have different access and data terms. For pupil work, follow the approved school route."
        }
      ],
      "callout": "Check the material and sharing settings before you add a source.",
      "sources": [
        {
          "label": "Google: Notebook privacy",
          "url": "https://support.google.com/gemininotebook/answer/17004255?hl=en"
        },
        {
          "label": "Google: public notebook source access",
          "url": "https://support.google.com/gemininotebook/answer/16322204?hl=en"
        },
        {
          "label": "Google: eligibility",
          "url": "https://support.google.com/gemininotebook/answer/16164461?hl=en"
        }
      ],
      "sourceNote": "Based on Google documentation checked 10 November 2026. Screens, limits and features differ by account and device."
    },
    {
      "type": "concept",
      "title": "Your complete fictional source pack",
      "body": "<strong>Source A — Original club notice, issued 1 November 2026</strong><br>“The model-making club opens at 16:00. Each group can use 12 wooden pieces. Glue is supplied. The notice does not specify the date of the meeting.”<br><br><strong>Source B — Correction to that notice, issued 3 November 2026</strong><br>“This corrects the opening time in the original model-making club notice. The club now opens at 16:30. Each group can still use 12 wooden pieces. The final model must be freestanding. The date of the meeting is not specified.”",
      "callout": "“Issued” tells you when a notice was written. It does not tell you when the club meets. “Freestanding” means the model can support itself without being held or propped against something.",
      "copyText": "Source A — Original club notice, issued 1 November 2026\nThe model-making club opens at 16:00. Each group can use 12 wooden pieces. Glue is supplied. The notice does not specify the date of the meeting.\n\nSource B — Correction to that notice, issued 3 November 2026\nThis corrects the opening time in the original model-making club notice. The club now opens at 16:30. Each group can still use 12 wooden pieces. The final model must be freestanding. The date of the meeting is not specified."
    },
    {
      "type": "activity",
      "title": "Set up the enquiry · 4 minutes",
      "instructions": "Open <a href=\"https://notebook.google.com/\" target=\"_blank\" rel=\"noopener\">Gemini Notebook</a> in a browser and sign in with your own eligible adult account. If you are using the supplied examples, read both source cards and continue to the questions.",
      "steps": [
        "Create a notebook called “Practice club notices”. Keep this lesson open beside it or in another tab.",
        "In Sources, choose Add source and the pasted/copied-text option. Paste the complete pack with its Source A and Source B headings, or add the notices separately. If the label differs, look for the text-paste option.",
        "Once the sources are ready, select the complete pack. Open the imported text and check that both notices, their titles and final sentences arrived. Fix missing text before asking a question.",
        "If adding text is unavailable, use the source cards here and continue with the same enquiry."
      ],
      "callout": "For Haileybury pupil work, use school-approved tools and accounts, including at home. Check age requirements and teacher permission, keep personal information out and acknowledge meaningful AI help.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current policy available through the School Portal"
        },
        {
          "label": "Google: create a notebook",
          "url": "https://support.google.com/gemininotebook/answer/16206563?hl=en"
        },
        {
          "label": "Google: source selection in chat",
          "url": "https://support.google.com/gemininotebook/answer/16179559?hl=en"
        }
      ]
    },
    {
      "type": "activity",
      "title": "Ask questions with a checking purpose · 3 minutes",
      "instructions": "Enter this request, or use it to assess the next slide’s simulated answer:<br><br>“Using only Source A and Source B in the selected club notice pack, what is the current opening time, how many wooden pieces can each group use, and what date is the meeting? Cite the supporting passage for each answer. Explain any correction or conflict. If the sources do not establish an answer, say so rather than guessing.”",
      "steps": [
        "Paste the request into the notebook’s chat/message area. Read the reply for the three claims you will check. With the supplied examples, continue to the next slide.",
        "Ask for the three specific answers and their evidence. A general summary could overlook the missing date.",
        "Keep three questions in mind: current time, wooden pieces per group and meeting date. Judge each separately when you inspect the sources."
      ],
      "callout": "Check each answer against the notices, including any confident claim about the meeting date.",
      "copyText": "Using only Source A and Source B in the selected club notice pack, what is the current opening time, how many wooden pieces can each group use, and what date is the meeting? Cite the supporting passage for each answer. Explain any correction or conflict. If the sources do not establish an answer, say so rather than guessing."
    },
    {
      "type": "parent-interaction",
      "title": "Audit this plausible answer · 4 minutes",
      "question": {
        "kind": "select",
        "prompt": "A simulated answer says: “The club opens at 16:00 [A]. Each group can use 12 wooden pieces [B]. The meeting is on 3 November [B].” A gives the old time. B explicitly changes it to 16:30 and says the meeting date is not specified. Select every accurate judgement.",
        "options": [
          "The current-time claim is outdated because B explicitly corrects A.",
          "The allowance of 12 pieces per group is supported.",
          "The meeting date is established because B was issued on 3 November.",
          "The meeting date remains unknown from these notices."
        ],
        "correct": [
          0,
          1,
          3
        ],
        "explanation": "The correction establishes 16:30, and both notices support 12 pieces per group. An issue date is not an event date. Citation labels tell you where to inspect; they do not establish every interpretation."
      }
    },
    {
      "type": "concept",
      "title": "What to do with a real citation",
      "body": "Select a citation in notebook chat to open the source passage. On a computer, hovering can also preview the quoted text.<br><br>Read the surrounding sentences. Does the passage support the exact claim? Does another selected source correct it? What is still unanswered?",
      "bullets": [
        {
          "term": "It mentions the topic",
          "def": "A document can mention a date without saying it is the meeting date. Read what the date refers to."
        },
        {
          "term": "It supports the claim",
          "def": "The relevant passage states the fact or provides a clear basis for the conclusion."
        },
        {
          "term": "It settles the real-world question",
          "def": "For a real event, also check that the source is reliable, current and about that event. Here we are checking the facts in our invented pack."
        }
      ],
      "sources": [
        {
          "label": "Google: inspect notebook citations",
          "url": "https://support.google.com/gemininotebook/answer/16179559?hl=en"
        }
      ]
    },
    {
      "type": "concept",
      "title": "If the answer is missing something",
      "body": "Suppose your live answer uses only Source A and gives 16:00. First check that Source B is present in the imported text and that its source is selected. Then ask: <strong>“Compare the opening times in Source A and Source B. Which passage explicitly changes the earlier notice?”</strong><br><br>If there is no clickable citation, open the source yourself and locate the passage. If the tool keeps missing it, stop asking and use your own source-based judgement. You already have enough information to check this small pack.",
      "callout": "If all three answers are right, find the passages that confirm them. Then use the supplied example to practise spotting the errors."
    },
    {
      "type": "concept",
      "title": "What the sources tell us",
      "body": "<strong>Current opening time: 16:30.</strong> Source B says, “The club now opens at 16:30” and explicitly corrects A’s earlier time.<br><br><strong>Wooden pieces: 12 per group.</strong> Source B says, “Each group can still use 12 wooden pieces”; A agrees.<br><br><strong>Meeting date: unknown from these sources.</strong> The issue dates belong to the notices. Both texts say the meeting date is not specified.",
      "callout": "The date is still missing. For a real meeting, ask the organiser through a known contact route before making plans.",
      "revealLabel": "Why not always trust the newest document?",
      "reveal": "B explicitly corrects the same club notice. That connection is what matters. A later date alone does not establish that a document changes an earlier one; check that it addresses the same event and fact."
    },
    {
      "type": "scenario",
      "title": "Make the answer more useful without inventing anything",
      "situation": "You need to tell someone when to arrive. Notebook gives 16:30 and says the meeting date is unknown.",
      "question": "Which message would you send in this fictional situation?",
      "choices": [
        {
          "text": "“The corrected time is 16:30; I still need the meeting date from the organiser.”",
          "outcome": "This gives the confirmed time and identifies the next thing to check. The organiser can then supply the missing date."
        },
        {
          "text": "“It must be 3 November because that is the newest date.”",
          "outcome": "That confuses a notice’s issue date with an event date. The text explicitly says the meeting date is not specified."
        },
        {
          "text": "“Notebook is unreliable, so none of the source facts can be used.”",
          "outcome": "That goes too far. The evidence supports a time and material allowance. The skill is judging each claim rather than accepting or rejecting everything together."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A new notice arrives · 3 minutes",
      "instructions": "Use this new fictional text without asking the tool:<br><br><strong>Source C — Storage note, issued 4 November 2026:</strong> “There are 60 wooden pieces in the cupboard for the club. This note makes no change to the allowance of 12 pieces per group. The meeting date is still to be confirmed.”",
      "steps": [
        "An answer now says, “Each group can use 60 pieces.” Decide why that interpretation fails.",
        "Work out how many full 12-piece allocations the stock could supply. Does that tell you how many groups will attend?",
        "Compare your judgement with the explanation below."
      ],
      "revealLabel": "Check your independent answer",
      "reveal": "Sixty is the total stock, not the allowance per group. The allowance remains 12. Sixty can supply five full allocations because 60 ÷ 12 = 5, but the sources do not say five groups will attend. Source C explicitly preserves the allowance and leaves the meeting date unresolved."
    },
    {
      "type": "summary",
      "title": "Follow the evidence all the way back",
      "points": [
        {
          "label": "Human judgement first",
          "text": "Ask what the passage establishes, not just whether a citation exists."
        },
        {
          "label": "Don’t steal the struggle",
          "text": "Read and judge the source yourself before relying on the generated summary."
        },
        {
          "label": "Transparent by default",
          "text": "Distinguish supported facts, corrections and unanswered questions."
        },
        {
          "label": "Dignity and care",
          "text": "Keep practice material fictional and notebook sharing restricted."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Now use the same checking habit with a new notice and two practical decisions.",
    "questions": [
      {
        "kind": "select",
        "prompt": "A new storage note says there are 60 pieces in total, the allowance remains 12 per group, and the meeting date is unconfirmed. Select all conclusions the note supports.",
        "options": [
          "The stock could supply five full 12-piece allocations.",
          "Exactly five groups will attend.",
          "Each group may use 60 pieces because this is the newest notice.",
          "The allowance remains 12 per group."
        ],
        "correct": [
          0,
          3
        ],
        "explanation": "60 ÷ 12 = 5 possible full allocations. That does not establish attendance. The note explicitly preserves 12 per group; being newer does not change what its words say."
      },
      {
        "kind": "choice",
        "prompt": "Notebook gives a plausible answer but no usable citation. What is the most useful next step?",
        "options": [
          "Treat the polished answer as verified because the source was uploaded.",
          "Open the source yourself and locate support for the precise claim; leave it unverified if you cannot.",
          "Ask for a more confident answer so the uncertainty disappears."
        ],
        "correct": 1,
        "explanation": "You can inspect the original text without a clickable citation. A confident answer or a successful upload does not establish that a particular claim follows from the material."
      },
      {
        "kind": "order",
        "prompt": "Order these steps for checking an answer from a small source pack.",
        "options": [
          "Ask the focused question using the selected pack.",
          "Inspect the cited or relevant passage and any correction.",
          "Check that the intended source text imported completely and is selected.",
          "Decide which claims are supported and which remain unknown."
        ],
        "correct": [
          2,
          0,
          1,
          3
        ],
        "explanation": "Check the material available to the tool first. Then ask the question, examine the evidence and make a claim-by-claim judgement."
      }
    ]
  }
},
{
  "id": 310,
  "n": 10,
  "title": "Gemini Notebook practical: make resources, then test the learning",
  "minutes": 35,
  "goal": "Choose a study format for a purpose and check it against the source.",
  "desc": "Build a tiny study pack from invented game rules, catch a planted error and use the rules with the resource closed. Choose a live tool or the complete simulated pack.",
  "slides": [
    {
      "type": "hook",
      "title": "A folder full of resources is not the same as learning",
      "body": "You have made a quiz, a set of flashcards and an audio summary. What does your child do with them?<br><br>In this workshop you will choose one resource, check it against the source and then use it to learn something. Our invented game rules give us a small set of facts to work with—and a few mistakes to catch.",
      "callout": "Generate one resource or use the supplied quiz. Then try the on-screen checks."
    },
    {
      "type": "concept",
      "title": "Choose a format for a reason",
      "body": "A study resource should give the learner a useful job. Decide what that job is before choosing a button.",
      "bullets": [
        {
          "term": "Flashcards",
          "def": "A question on one side and an answer on the other. Answer before revealing; otherwise you are mainly rereading."
        },
        {
          "term": "Quiz",
          "def": "A small set of questions with feedback. Useful for finding a gap, provided the questions and answer key are accurate."
        },
        {
          "term": "Mind map",
          "def": "A diagram of connected ideas. Rebuild a small part from memory, then check what you missed."
        },
        {
          "term": "Audio overview",
          "def": "A generated spoken summary. Pause afterwards and explain the idea yourself. Listening alone does not show you can use it."
        }
      ],
      "callout": "We will use a five-question quiz. You can generate it in Notebook or work with the version here."
    },
    {
      "type": "concept",
      "title": "The entire source: fictional Orbitball rules",
      "body": "<strong>Orbitball — original practice rules</strong><br>1. A team has four players.<br>2. A round lasts six minutes.<br>3. A blue target earns two points; a gold target earns five points.<br>4. A player may carry only one ball at a time.<br>5. If the scores are tied at the end of the round, play one extra minute.<br><br>Orbitball is invented for this workshop. These five rules are the whole source: they leave some questions, including a second tie, unanswered.",
      "callout": "Read the rules once. Then look away and name any two. This gives you a first attempt to compare with the later check.",
      "copyText": "Orbitball — original fictional practice rules\n1. A team has four players.\n2. A round lasts six minutes.\n3. A blue target earns two points; a gold target earns five points.\n4. A player may carry only one ball at a time.\n5. If the scores are tied at the end of the round, play one extra minute.\nThese invented rules do not specify what happens after a second tie or how many teams take part in a match."
    },
    {
      "type": "activity",
      "title": "Create one small resource · 4 minutes",
      "instructions": "Open <a href=\"https://notebook.google.com/\" target=\"_blank\" rel=\"noopener\">Gemini Notebook</a> with your own eligible adult account in another tab or beside this lesson. Create a restricted notebook called “Orbitball practice”. In Sources, use the copied/pasted-text option to add the title and five rules from the previous slide.<br><br>To work in the lesson instead, keep the rules in view and use the supplied quiz.",
      "steps": [
        "Open the imported source and check that all five rules arrived. Select only Orbitball so the earlier club notices cannot influence the task. In the Studio area, look for Quizzes or Flashcards; if unavailable, use the chat or supplied-quiz route below.",
        "Use this instruction where a prompt is offered: “Create five short questions using only the Orbitball rules. Put the questions first and the answer key afterwards. Give a brief explanation for each answer. Do not add rules that are not in the source.” If there is no prompt field, generate the available format and inspect it.",
        "Wait for generation to finish, then open the result. If Studio options are missing, paste the request into notebook chat or use the supplied quiz. If it makes more than five questions, choose five that the rules can answer.",
        "Keep the notebook private and use only the supplied practice rules."
      ],
      "callout": "For Haileybury pupil work, use school-approved tools and accounts at home as well as in school. Follow age requirements and teacher instructions, keep personal information out and acknowledge meaningful AI help.",
      "sources": [
        {
          "label": "Haileybury AI Parent Guide, updated 4 November 2026; current policy available through the School Portal"
        },
        {
          "label": "Google: notebook flashcards and quizzes",
          "url": "https://support.google.com/gemininotebook/answer/16958963?hl=en"
        },
        {
          "label": "Google: notebook usage limits",
          "url": "https://support.google.com/gemininotebook/answer/17670842?hl=en"
        }
      ],
      "sourceNote": "Documentation checked 10 November 2026; screens and account access vary. Generation requires edit access to the notebook.",
      "copyText": "Create five short questions using only the Orbitball rules. Put the questions first and the answer key afterwards. Give a brief explanation for each answer. Do not add rules that are not in the source."
    },
    {
      "type": "parent-interaction",
      "title": "Check the key before you trust the quiz · 4 minutes",
      "question": {
        "kind": "select",
        "prompt": "The original Orbitball rules say: four players per team; a six-minute round; blue targets score two and gold five; carry one ball; one extra minute after a tie. A simulated quiz contains the answers below. Select every answer that needs correcting.",
        "options": [
          "A team has four players.",
          "A round lasts eight minutes.",
          "A gold target earns five points.",
          "A player can carry two balls.",
          "A tied round gets one extra minute."
        ],
        "correct": [
          1,
          3
        ],
        "explanation": "Correct eight minutes to six and two balls to one. The other answers match the supplied rules. With a live resource, inspect the questions and explanations as well: a correct-looking key may accompany an unsupported question."
      }
    },
    {
      "type": "activity",
      "title": "Now use the corrected quiz · 3 minutes",
      "instructions": "Look away from the source and previous answer key. Think or say your answers before revealing the feedback.<br><br>1. How many players are on a team?<br>2. How long is a normal round?<br>3. How many points does a gold target earn?<br>4. How many balls may one player carry at a time?<br>5. What happens if the scores are tied at the end of a round?",
      "steps": [
        "Answer all five without looking first. “I do not remember” is useful information.",
        "Reveal the key, compare and identify one item to revisit if needed.",
        "For flashcards, use the same questions one at a time and answer before turning each over."
      ],
      "revealLabel": "Check your recall",
      "reveal": "1. Four players. 2. Six minutes. 3. Five points. 4. One ball. 5. One extra minute of play. These follow rules 1–5. If you missed one, explain the correction to yourself and try that question again after a gap. The useful check is whether you can retrieve the answer with it out of view."
    },
    {
      "type": "concept",
      "title": "What would a map or audio overview add?",
      "body": "A map shows connections between ideas; audio gives you a spoken explanation. Give yourself a task after using either format.<br><br><strong>Map in text:</strong> Orbitball → team: four players; round: six minutes; scoring: blue two / gold five; carrying: one ball; tie: one extra minute.<br><br><strong>Spoken-summary example, provided as text:</strong> “Each four-player team plays a six-minute round. Blue targets score two and gold targets five. Carry one ball at a time. If the scores are tied, play one extra minute.”",
      "callout": "Try Studio’s Audio Overview or Mind Map if available, or use the text above. Check it against the rules, then close it and explain two rules or connections yourself.",
      "sources": [
        {
          "label": "Google: Audio Overviews and possible inaccuracies",
          "url": "https://support.google.com/gemininotebook/answer/16212820?hl=en"
        },
        {
          "label": "Google: Notebook study outputs",
          "url": "https://support.google.com/gemininotebook/answer/16164461?hl=en"
        }
      ]
    },
    {
      "type": "scenario",
      "title": "The resource is beautiful. Does it teach?",
      "situation": "A fictional parent makes an audio summary for revision. Their child listens while scrolling, then says, “Finished.” There has been no attempt to recall or use the ideas.",
      "question": "What is a useful next step?",
      "choices": [
        {
          "text": "Generate a longer summary so the child spends more time listening.",
          "outcome": "First find out what the child can explain or apply. Use that to decide whether another resource would help."
        },
        {
          "text": "Ask for one idea in their own words and one small application, with the summary closed.",
          "outcome": "This turns the resource into a learning activity. Keep the question manageable and use the answer to decide what needs revisiting."
        },
        {
          "text": "Tell the child audio resources never help anyone.",
          "outcome": "Audio is useful for some learners. Help the child do something with what they heard: explain an idea, answer a question or try an example."
        }
      ]
    },
    {
      "type": "activity",
      "title": "Use the rules in a new situation · 4 minutes",
      "instructions": "Close the quiz, source and tool. Try these new questions before checking:<br><br><strong>A.</strong> A team hits three blue targets and one gold target. What is its score?<br><strong>B.</strong> The score is tied after six minutes. What happens next?<br><strong>C.</strong> A player says, “Two balls should be allowed because there are four players.” Is that supported?",
      "steps": [
        "Work out A silently or aloud, including how the blue and gold scores combine.",
        "For B and C, recall the rule that settles the question.",
        "If you need the source, reopen it. Then try a changed scoring question later: two gold and one blue score 12. Keep read-aloud or other access support; the useful check is whether you can supply the reasoning yourself."
      ],
      "revealLabel": "Check the application answers",
      "reveal": "A: 3 × 2 + 5 = 11 points. B: play one extra minute. C: no; the carrying rule allows one ball per player at a time. Team size does not change that rule. These questions use the facts in a situation rather than asking only for isolated recall."
    },
    {
      "type": "activity",
      "title": "Find the boundary of the source · 2 minutes",
      "instructions": "One more question: <strong>What happens if the teams are still tied after the extra minute?</strong> Decide what the source establishes before considering a new rule.",
      "steps": [
        "Check whether any of the five rules answers the question.",
        "Decide whether there is a supported answer or whether the rules leave this unresolved.",
        "If you invent a sensible extra rule, label it as your proposal. Do not present it as something the source already says."
      ],
      "revealLabel": "Check the boundary",
      "reveal": "The source leaves a second tie unresolved. “Play until someone scores” is a possible rule you could propose, but it is an addition. Keep that distinction clear when you check a generated study resource."
    },
    {
      "type": "scenario",
      "title": "The source changes. Has the quiz changed too?",
      "situation": "A new fictional rule sheet explicitly replaces rule 3: gold targets now earn four points. You have updated the source in your notebook. An earlier generated quiz still says five.",
      "question": "What should you do before using that quiz?",
      "choices": [
        {
          "text": "Trust the old quiz because it came from the same notebook.",
          "outcome": "The notebook name does not establish which source version an output used. Google documents that changing a source does not update existing Studio outputs."
        },
        {
          "text": "Label the old quiz as outdated, regenerate or replace affected items, then check them against the revised rule.",
          "outcome": "Yes. The gold-target card and any scoring question need checking. Three blue and one gold now score 3 × 2 + 4 = 10. This is a new version of the rules, not a correction to your earlier 11-point answer."
        },
        {
          "text": "Change only the title so everyone knows it is new.",
          "outcome": "A new title does not repair stale answers. Inspect the questions, key and explanations that depend on the changed fact."
        }
      ],
      "callout": "Keep track of the version: the original rules give five points for gold; this revised example gives four.",
      "sources": [
        {
          "label": "Google: sources and unchanged existing Studio outputs",
          "url": "https://support.google.com/gemininotebook/answer/16215270?hl=en"
        }
      ]
    },
    {
      "type": "concept",
      "title": "Make a revision routine small enough to use",
      "body": "For an authorised revision task, use this routine:<br><br><strong>Attempt:</strong> answer a few questions with the source closed.<br><strong>Check:</strong> compare your answers and the generated key with the original material.<br><strong>Repair:</strong> explain one correction in your own words.<br><strong>Return:</strong> try a changed question after a gap.<br><br>Choose a return point that fits your day, such as tomorrow after breakfast. If the original source changes, check the old quiz or summary against it and replace affected items.",
      "callout": "The tool prepares the practice; the learner retrieves, explains and applies. Choose a return point, then continue to the checks."
    },
    {
      "type": "summary",
      "title": "Make less. Use it better.",
      "points": [
        {
          "label": "Choose a purpose",
          "text": "Use a quiz, cards, map or audio because it supports a particular learning task."
        },
        {
          "label": "Keep human judgement first",
          "text": "Check generated questions and answers against the original source."
        },
        {
          "label": "Be transparent",
          "text": "Recognise whether an answer comes from your own understanding, the source or a new proposal."
        },
        {
          "label": "Protect dignity and care",
          "text": "Offer readable alternatives and appropriate support; keep personal material out of the practice tool."
        },
        {
          "label": "Show the learning",
          "text": "Your independent 11-point calculation and source-boundary judgement matter more than the number of resources made."
        }
      ]
    }
  ],
  "completion": {
    "intro": "Check a calculation, spot what the source leaves unanswered and put the repair steps in order.",
    "questions": [
      {
        "kind": "choice",
        "prompt": "Using the original rules — blue targets score two and gold targets five — a team hits three blue targets and one gold target. What is its score?",
        "options": [
          "11 points: three lots of two, plus five.",
          "21 points: add two and five, then multiply by three.",
          "10 points: use the revised gold rule from the separate example."
        ],
        "correct": 0,
        "explanation": "The original source gives 3 × 2 + 5 = 11. Keep source versions separate: the later four-point example was an explicit rule change, not the rule for this question."
      },
      {
        "kind": "select",
        "prompt": "The original rules specify four players per team and one extra minute after a tied round. Which questions cannot be answered from those facts? Select all that apply.",
        "options": [
          "What happens if the teams are still tied after the extra minute?",
          "How many players are on one team?",
          "How many teams take part in a match?",
          "How long is the first extra period after a tie?"
        ],
        "correct": [
          0,
          2
        ],
        "explanation": "The rules establish team size and one extra minute. They do not specify the number of teams or a second-tie procedure. A plausible extra rule is a proposal, not an established fact."
      },
      {
        "kind": "order",
        "prompt": "A revised source changes a scoring rule, but an old generated quiz still uses the previous value. Order the repair steps.",
        "options": [
          "Regenerate or replace affected quiz items.",
          "Check the exact change in the revised source.",
          "Check the new questions, answers and explanations against that source.",
          "Identify old outputs and questions that depend on the changed rule."
        ],
        "correct": [
          1,
          3,
          0,
          2
        ],
        "explanation": "Establish the change, find what it affects, repair those items, then verify the new result. Existing Studio outputs do not automatically change when the source changes."
      }
    ]
  }
}
);
