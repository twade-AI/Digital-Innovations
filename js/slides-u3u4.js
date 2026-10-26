/* AEP editorial review: 26 October 2026. Lesson IDs and base slide counts retained. */
var SLIDES_U3U4 = {
  "13": [
    {
      "type": "hook",
      "title": "Deepfakes and Disinformation",
      "body": "A fictional clip claims a local sports centre will close tomorrow. It has no original source or recording date. A convincing face and voice are visible. What can you establish before sharing it?"
    },
    {
      "type": "concept",
      "title": "Authenticity and truth are different questions",
      "body": "A real recording can be cropped, old or miscaptioned. A synthetic reconstruction can illustrate a true event while still needing a clear label. Ask separately where the file came from and whether its claim is supported.",
      "bullets": [
        "Trace the earliest available version and its context.",
        "Check a relevant original authority through a known channel.",
        "Do not treat visual oddities, fluent speech or a detector score as a verdict."
      ],
      "sources": [
        {
          "label": "C2PA: Content Credentials explained",
          "url": "https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html"
        },
        {
          "label": "NIST: Synthetic content transparency",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "What provenance can and cannot do",
      "body": "Content Credentials can provide information about a file’s history. They do not by themselves prove the claim is true. A missing credential does not prove a file is fake.",
      "bullets": [
        "Look for evidence of source, editing and publication context.",
        "Compare independent reporting rather than repeated copies.",
        "If the evidence is insufficient, report that limit instead of guessing authorship."
      ]
    },
    {
      "type": "activity",
      "title": "Build the newsroom verification board",
      "instructions": "Working independently. Use the fictional sports-centre claim; do not create an impersonation.",
      "steps": [
        "Write the exact claim and the consequence of getting it wrong.",
        "List the original authority and two contextual checks.",
        "Draft a holding message that does not amplify the unverified allegation.",
        "Create a correction template explaining what was checked and what remains unknown."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Would proving that a clip is AI-generated settle whether its caption describes a real event?"
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Would proving that a clip is AI-generated settle whether its caption describes a real event?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "What is the strongest verification move?",
      "options": [
        "Count blinking errors.",
        "Check the closure claim with the centre through a known official channel.",
        "Trust the most widely shared copy."
      ],
      "correct": 1,
      "explanation": "Check the substantive claim against relevant evidence, not appearance alone."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Authenticity and truth are different questions",
          "text": "A real recording can be cropped, old or miscaptioned."
        },
        {
          "icon": "2",
          "label": "What provenance can and cannot do",
          "text": "Content Credentials can provide information about a file’s history."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Produce a verification storyboard for a fictional viral clip with no source or date. Explain what provenance and corroboration could establish without generating an impersonation."
        }
      ]
    }
  ],
  "14": [
    {
      "type": "hook",
      "title": "Surveillance and Facial Recognition",
      "body": "A fictional venue proposes face recognition to identify banned visitors. Its test reports 99% accuracy but gives no false-positive rate, threshold or test population. Is that enough to judge the proposal?"
    },
    {
      "type": "concept",
      "title": "Specify the task and the error",
      "body": "Verification asks whether two images belong to the same person. Identification searches for a person among candidates. Performance depends on the system, threshold, images and evaluation conditions.",
      "bullets": [
        "A false positive wrongly matches different people; a false negative misses a genuine match.",
        "An overall accuracy figure can hide the error most important to a deployment.",
        "NIST evaluations are evidence about particular tests, not a universal rate for all products."
      ],
      "sources": [
        {
          "label": "NIST: Face recognition evaluation",
          "url": "https://pages.nist.gov/frvt/html/frvt11.html"
        },
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Use a base-rate example",
      "body": "Fictional illustration: 10,000 non-matching checks at a 1% false-positive rate would produce about 100 false alerts on average. This is a calculation, not a measurement of a real system.",
      "bullets": [
        "Reducing the rate changes the burden of review.",
        "The number of true matches matters when interpreting an alert.",
        "Accuracy is one issue; necessity, alternatives, data retention and appeal also matter."
      ]
    },
    {
      "type": "activity",
      "title": "Run a written town hall",
      "instructions": "Working independently. Write short testimony from an organiser, a visitor wrongly flagged and a privacy advocate.",
      "steps": [
        "Request the missing evaluation details.",
        "Compare the proposal with a non-biometric alternative.",
        "Set conditions for a limited test or explain why you would reject it.",
        "Include a correction, review and appeal route."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What would make a technically accurate system inappropriate for this venue?"
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What would make a technically accurate system inappropriate for this venue?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "Why does the 99% headline leave important questions unanswered?",
      "options": [
        "Every system with that score is unsafe.",
        "The relevant error, denominator and deployment conditions are unclear.",
        "No numerical evidence is useful."
      ],
      "correct": 1,
      "explanation": "A meaningful evaluation needs the task and consequences as well as a headline score."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Specify the task and the error",
          "text": "Verification asks whether two images belong to the same person."
        },
        {
          "icon": "2",
          "label": "Use a base-rate example",
          "text": "Fictional illustration: 10,000 non-matching checks at a 1% false-positive rate would produce about 100 false alerts on average."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Write three short stakeholder testimonies about a fictional face-recognition proposal, then issue a decision with conditions, an alternative and an appeal route."
        }
      ]
    }
  ],
  "15": [
    {
      "type": "hook",
      "title": "What does an AI answer cost?",
      "body": "A school wants every pupil to generate ten images for a poster. Another teacher suggests sketching first and generating only the strongest idea. Which approach would you recommend? Identify what you would need to know before putting a number on the environmental difference."
    },
    {
      "type": "concept",
      "title": "Measure the right thing",
      "body": "AI uses electricity during training and use. Data centres also support many services other than AI. A number about all data centres is not a measurement of one chatbot.",
      "bullets": [
        "Separate training from inference: building a model and running it are different activities.",
        "Electricity is not the same as emissions: location, timing and energy supply matter.",
        "Water estimates depend on cooling, local conditions and whether electricity-generation water is included.",
        "Per-query estimates vary with model, hardware, output length and task. State assumptions and uncertainty."
      ],
      "sources": [
        {
          "label": "IEA: Key Questions on Energy and AI, 2026",
          "url": "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "A useful result can still have a cost",
      "body": "AI may help optimise systems, but a claimed benefit needs a comparison. Ask what would have happened without it.",
      "bullets": [
        "Define the task and a non-AI alternative.",
        "Compare useful outputs, not just the number of requests.",
        "Consider rebound: cheaper or easier generation may increase total use.",
        "Do not turn a provider-wide average into a measurement of your own prompt."
      ],
      "callout": "Read the source: <a href=\"https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary\" target=\"_blank\" rel=\"noopener\">Evidence and context</a> · Reviewed 26 October 2026"
    },
    {
      "type": "activity",
      "title": "Build an honest estimate",
      "instructions": "Working independently for 12 minutes. These are fictional teaching assumptions, not measurements of a particular product.",
      "steps": [
        "Assume 200 pupils each generate 10 images. Calculate the number of images.",
        "Compare two hypothetical estimates: 1 Wh and 5 Wh per image. Convert each total to kWh by dividing by 1,000.",
        "Now assume pupils sketch first and generate 2 images each. Calculate both totals again.",
        "Explain why you have a range. Name three measurements needed before reporting the school’s actual footprint.",
        "Write a recommendation that considers learning quality as well as energy."
      ],
      "reveal": "First approach: 2,000 images, giving 2–10 kWh under these assumptions. Sketch-first: 400 images, giving 0.4–2 kWh. The reduction is 80% in this simplified example; it is not a measured saving for a real school."
    },
    {
      "type": "discussion",
      "title": "Make the trade-off explicit",
      "questions": [
        {
          "num": 1,
          "text": "When is generating another version worth the cost? Give a concrete example."
        },
        {
          "num": 2,
          "text": "Could a smaller model complete the task equally well? How would you test that?"
        },
        {
          "num": 3,
          "text": "What might your estimate leave out, and could that change your decision?"
        }
      ]
    },
    {
      "type": "scenario",
      "title": "The poster brief",
      "situation": "You have a strong hand-drawn idea and three usable generated images. A classmate proposes generating 100 more because “one might be better”.",
      "question": "What would you do next?",
      "choices": [
        {
          "text": "Generate all 100.",
          "outcome": "You might improve the design, but you have not identified what needs improving. Set a quality criterion before spending more resources."
        },
        {
          "text": "Choose a specific weakness and test one revision.",
          "outcome": "This creates a meaningful comparison. Keep the revision only if it meets the criterion better."
        },
        {
          "text": "Ban all image generation.",
          "outcome": "That reduces this use, but does not explain when the tool adds educational value. A justified boundary is more useful than a blanket response."
        }
      ]
    },
    {
      "type": "quiz",
      "question": "Why should an environmental estimate state a range?",
      "options": [
        "AI never uses electricity.",
        "Every prompt has the same footprint.",
        "Task, hardware and system boundaries affect the estimate.",
        "A range guarantees accuracy."
      ],
      "correct": 2,
      "explanation": "A range makes assumptions visible. It still needs a credible method and does not establish a measured footprint."
    },
    {
      "type": "summary",
      "title": "What you should now be able to explain",
      "points": [
        {
          "icon": "1",
          "label": "Separate measures",
          "text": "Electricity, emissions and water describe different things."
        },
        {
          "icon": "2",
          "label": "Show your working",
          "text": "State the task, assumptions, source date and uncertainty."
        },
        {
          "icon": "3",
          "label": "Make a proportionate choice",
          "text": "Use the evidence to improve the task, not to invent precision."
        },
        {
          "icon": "✓",
          "label": "Check your understanding",
          "text": "Close the lesson. Explain its main idea with a new example. Reopen it, correct anything you missed, and record one question you still have."
        }
      ]
    }
  ],
  "16": [
    {
      "type": "hook",
      "title": "Who should set the rules?",
      "body": "A school is offered an AI system that shortlists pupils for a scholarship. The supplier promises efficiency but will not explain how it checks for unfair outcomes. What would you need before recommending a trial?"
    },
    {
      "type": "concept",
      "title": "A law is not a single start date",
      "body": "The EU AI Act applies in stages. “Fully active in 2025” is incorrect. The official implementation timetable includes later deadlines, so check the provision relevant to the system.",
      "bullets": [
        "Distinguish a law entering into force from obligations becoming applicable.",
        "Identify the jurisdiction, the use of the system and who is responsible.",
        "General-purpose model obligations and rules for particular applications are different.",
        "Record the source and date. A policy announcement is not necessarily an enforceable duty."
      ],
      "sources": [
        {
          "label": "European Commission: AI Act implementation timeline",
          "url": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline"
        },
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Several rules can apply at once",
      "body": "An AI-specific law does not replace privacy, equality, consumer or safeguarding rules. A system can be problematic even where there is no single comprehensive AI act.",
      "bullets": [
        "Describe the decision and who could be harmed.",
        "Ask what data is used and whether that use is justified.",
        "Look for meaningful human review and a route to challenge mistakes.",
        "Separate legal requirements from the additional standards you think the school should set."
      ],
      "callout": "Read the source: <a href=\"https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools\" target=\"_blank\" rel=\"noopener\">Evidence and context</a> · Reviewed 26 October 2026"
    },
    {
      "type": "activity",
      "title": "Write a one-page recommendation",
      "instructions": "Working independently for 15 minutes. Use the scholarship example. This is an educational policy exercise, not legal advice.",
      "steps": [
        "List three questions for the supplier: evidence of accuracy, fairness across relevant groups, and human review.",
        "Read the linked official timetable. Record one applicable date and exactly which obligation it concerns. If offline, write “date needs checking” and continue the policy analysis.",
        "Set out a benefit, a risk, and one condition for a limited trial.",
        "Write a rule specifying who makes the final decision and how a pupil can challenge it.",
        "Test your rule with a pupil incorrectly rejected. Can they find out what happened and obtain a meaningful review?"
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your recommendation",
      "questions": [
        {
          "num": 1,
          "text": "Could a human decision also be biased? What comparison would be fair?"
        },
        {
          "num": 2,
          "text": "What evidence would change your recommendation?"
        },
        {
          "num": 3,
          "text": "If the supplier refuses an audit, who should carry the risk?"
        }
      ]
    },
    {
      "type": "scenario",
      "title": "The supplier’s response",
      "situation": "The supplier offers a discount if the school signs today. It gives only an overall accuracy figure, with no explanation of the test population.",
      "question": "What is the strongest next step?",
      "choices": [
        {
          "text": "Sign because the overall accuracy is high.",
          "outcome": "An average may conceal unequal errors. You also need evidence relevant to the school’s pupils and purpose."
        },
        {
          "text": "Request relevant evaluation evidence and a review process before a decision.",
          "outcome": "This addresses a missing condition. Approval still depends on the evidence and the school’s responsibilities."
        },
        {
          "text": "Put a disclaimer in the prospectus.",
          "outcome": "A disclaimer does not resolve discrimination, privacy or accountability problems."
        }
      ]
    },
    {
      "type": "quiz",
      "question": "What is the safest way to report an AI law’s status?",
      "options": [
        "Say the whole law began on its announcement date.",
        "Give the jurisdiction, relevant obligation, application date and official source.",
        "Copy a chatbot’s confident summary.",
        "Assume all countries follow the same rules."
      ],
      "correct": 1,
      "explanation": "Laws have different scopes and implementation stages. Check the relevant provision and record when you checked it."
    },
    {
      "type": "summary",
      "title": "What you should now be able to explain",
      "points": [
        {
          "icon": "1",
          "label": "Scope",
          "text": "Identify the jurisdiction and actual use."
        },
        {
          "icon": "2",
          "label": "Timing",
          "text": "Check which obligations apply and when."
        },
        {
          "icon": "3",
          "label": "Accountability",
          "text": "Name a responsible decision-maker and a route to challenge harm."
        },
        {
          "icon": "✓",
          "label": "Check your understanding",
          "text": "Close the lesson. Explain its main idea with a new example. Reopen it, correct anything you missed, and record one question you still have."
        }
      ]
    }
  ],
  "17": [
    {
      "type": "hook",
      "title": "Audit an AI Policy",
      "body": "A fictional policy says: “Use AI responsibly. Do not cheat. Staff may check your work.” A pupil wants feedback on an essay plan. Another challenges an accusation. Can either work out what happens next?"
    },
    {
      "type": "concept",
      "title": "Read a policy through a decision",
      "body": "A useful policy connects purpose, permitted actions, disclosure and responsibility. Test the wording against situations rather than judging how official it sounds.",
      "bullets": [
        "Underline an explicit rule; circle an assumption; mark an unanswered question.",
        "Distinguish practice from assessed work and a tool’s availability from permission to use it.",
        "Check who owns the policy and when it will be reviewed."
      ],
      "sources": [
        {
          "label": "Ofqual: AI malpractice and assessment, 2026",
          "url": "https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible"
        },
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Fairness needs a process",
      "body": "A school policy should be read alongside current assessment, data-protection and safeguarding requirements. A detector score alone does not establish misconduct.",
      "bullets": [
        "Ask what evidence a concern rests on and how a pupil can respond.",
        "Define proportionate record-keeping and access to records.",
        "Identify support for pupils who cannot access a tool.",
        "A classroom draft is a proposal, not adopted school policy."
      ]
    },
    {
      "type": "activity",
      "title": "The policy archaeology board",
      "instructions": "Working independently. Analyse a policy excerpt from the lesson or a clearly fictional one. Colour-code explicit rules, assumptions and missing decisions, then identify the first clarification a pupil would need.",
      "steps": [
        "Annotate the three-sentence policy in the opening.",
        "Apply it to planning, feedback and submitting generated prose.",
        "Write the first clarification each pupil needs.",
        "Rewrite one vague sentence and test it with a difficult case."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could a rule be perfectly clear but still unfair? Give an example."
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Could a rule be perfectly clear but still unfair? Give an example.",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "Which is a meaningful policy test?",
      "options": [
        "Count how many times it says responsible.",
        "Check whether two readers can apply it consistently to a concrete case.",
        "Assume any published document is current."
      ],
      "correct": 1,
      "explanation": "An operational test reveals ambiguity and missing procedures."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Read a policy through a decision",
          "text": "A useful policy connects purpose, permitted actions, disclosure and responsibility."
        },
        {
          "icon": "2",
          "label": "Fairness needs a process",
          "text": "A school policy should be read alongside current assessment, data-protection and safeguarding requirements."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Analyse a policy excerpt from the lesson or a clearly fictional one. Colour-code explicit rules, assumptions and missing decisions, then identify the first clarification a pupil would need."
        }
      ]
    }
  ],
  "18": [
    {
      "type": "hook",
      "title": "Draw the Boundaries",
      "body": "For this fictional practice task, AI may suggest questions but may not draft the answer. A pupil asks it for a model paragraph and then copies its structure. Where is the boundary, and what needs clarification?"
    },
    {
      "type": "concept",
      "title": "Start with the learning purpose",
      "body": "Permission depends on the actual task and current rules. A traffic-light label is a teaching aid, not universal permission across subjects, assessments or institutions.",
      "bullets": [
        "Separate brainstorming, explanation, feedback, generation and submission.",
        "Ask which thinking the pupil is expected to demonstrate unaided.",
        "Distinguish declaring assistance from being permitted to use it."
      ],
      "sources": [
        {
          "label": "Ofqual: AI malpractice and assessment, 2026",
          "url": "https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Test the awkward middle",
      "body": "A useful boundary includes examples, a way to ask questions and an accessible alternative. It should not rely on guessing what a tool did.",
      "bullets": [
        "A grammar suggestion can be small, or it can restructure an argument. Examine its effect.",
        "Keep drafts and decisions when the task requires process evidence.",
        "Use fictional work for the policy exercise; do not upload someone else’s assignment."
      ]
    },
    {
      "type": "activity",
      "title": "The acceptable-use card game",
      "instructions": "Working independently. Create six fictional schoolwork scenarios and sort them into permitted, prohibited or needs clarification under a rule you state. Repair the rule when a boundary case exposes ambiguity.",
      "steps": [
        "State the fictional practice rule from the opening.",
        "Write six cards: a hint, a question, an explanation, feedback, a model paragraph and a full answer.",
        "Sort each with a reason; leave genuinely ambiguous cases in needs clarification.",
        "Revise the rule to settle one ambiguity without banning useful learning support."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "How would your rule change for a closed-book assessment of unaided writing?"
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. How would your rule change for a closed-book assessment of unaided writing?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "Does acknowledging AI assistance automatically make it permitted?",
      "options": [
        "Yes, disclosure is always sufficient.",
        "No; the actual task and assessment rules still apply.",
        "Only if the tool is free."
      ],
      "correct": 1,
      "explanation": "Permission and acknowledgement answer different questions."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Start with the learning purpose",
          "text": "Permission depends on the actual task and current rules."
        },
        {
          "icon": "2",
          "label": "Test the awkward middle",
          "text": "A useful boundary includes examples, a way to ask questions and an accessible alternative."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Create six fictional schoolwork scenarios and sort them into permitted, prohibited or needs clarification under a rule you state. Repair the rule when a boundary case exposes ambiguity."
        }
      ]
    }
  ],
  "19": [
    {
      "type": "hook",
      "title": "Write a Policy People Can Use",
      "body": "A fictional school permits “appropriate assistance”. One reader thinks this includes generating an essay; another thinks even a spelling suggestion is banned. Your job is to make the next decision easier."
    },
    {
      "type": "concept",
      "title": "Build a usable document",
      "body": "A short policy needs enough structure to answer who, what, when and why. Clear wording does not remove the need for careful judgement.",
      "bullets": [
        "Purpose and scope: which learners, tasks and services?",
        "Permissions and limits: concrete actions and examples.",
        "Disclosure and records: what to say and where to keep it.",
        "Responsibility, questions, review and appeal: who does what next?"
      ],
      "sources": [
        {
          "label": "Ofqual: AI malpractice and assessment, 2026",
          "url": "https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible"
        },
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Choose words that can be applied",
      "body": "Separate must, may and should. Avoid undefined terms such as excessive or inappropriate when a concrete example would reveal the intended boundary.",
      "bullets": [
        "Write one requirement per sentence.",
        "Name the actor: “Pupils record…” is clearer than “It should be recorded…”.",
        "Test exceptions against fairness, access and the learning purpose.",
        "Label your draft as a proposal; check it against actual school and assessment rules before use."
      ]
    },
    {
      "type": "activity",
      "title": "The one-page policy prototype",
      "instructions": "Working independently. Draft a policy pupils can act on: purpose, permissions, examples, responsibility and appeal. Annotate two places where plain wording prevents a real misunderstanding.",
      "steps": [
        "Draft five short sections using the structure above.",
        "Include an allowed example and a prohibited example.",
        "Test with a pupil who needs an accessible alternative.",
        "Annotate two revisions that prevent misunderstandings."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Which part of your policy would need review when the assessment task changes?"
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Which part of your policy would need review when the assessment task changes?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "Which wording is most actionable?",
      "options": [
        "Use AI sensibly.",
        "For this practice task, record any generated suggestions you used and explain one change you made.",
        "Avoid excessive AI."
      ],
      "correct": 1,
      "explanation": "The second instruction specifies the task, evidence and action."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Build a usable document",
          "text": "A short policy needs enough structure to answer who, what, when and why."
        },
        {
          "icon": "2",
          "label": "Choose words that can be applied",
          "text": "Separate must, may and should."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Draft a policy pupils can act on: purpose, permissions, examples, responsibility and appeal. Annotate two places where plain wording prevents a real misunderstanding."
        }
      ]
    }
  ],
  "20": [
    {
      "type": "hook",
      "title": "Test and Ratify Your Policy",
      "body": "Three fictional stakeholders read your proposal: a pupil concerned about access, a teacher concerned about authorship, and a parent concerned about privacy. They each identify a weakness. Must you accept all three amendments?"
    },
    {
      "type": "concept",
      "title": "A hearing tests reasons",
      "body": "Ratification is a decision to adopt a proposal through an agreed process. A classroom simulation can test that process without claiming to set real school policy.",
      "bullets": [
        "Give each stakeholder a specific concern rather than a caricature.",
        "Separate evidence, values and practical consequences.",
        "Record the decision rule before hearing arguments.",
        "Majority support does not remove legal duties or minority rights."
      ],
      "sources": [
        {
          "label": "Ofqual: AI malpractice and assessment, 2026",
          "url": "https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible"
        },
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Keep an amendment trail",
      "body": "A decision log makes revision visible. Each entry should include the proposed change, the reason, the decision and what happens next.",
      "bullets": [
        "Accept an amendment that resolves a documented problem.",
        "Reject one with a reason connected to purpose or requirements.",
        "Defer a question that needs authoritative information.",
        "Name a review trigger, such as a change in assessment rules."
      ]
    },
    {
      "type": "activity",
      "title": "The ratification simulation",
      "instructions": "Working independently. Stage a written hearing with three fictional stakeholders challenging your policy. Publish a decision log showing an accepted amendment, a rejected amendment and the reasons.",
      "steps": [
        "Write a short challenge from each stakeholder in the opening.",
        "Answer each using a clause from your draft and relevant evidence.",
        "Accept one amendment, reject one and defer one question.",
        "Publish the revised clause and decision log."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What would justify reopening a policy that had overwhelming support?"
        },
        {
          "num": 2,
          "text": "Choose one claim in your work. What supports it, and what does that evidence leave uncertain?"
        },
        {
          "num": 3,
          "text": "Write the strongest reasonable objection to your conclusion. Answer it or revise your view."
        }
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What would justify reopening a policy that had overwhelming support?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "quiz",
      "question": "What should a ratification decision log contain?",
      "options": [
        "Only the final vote.",
        "The proposed changes, decisions and reasons, including unresolved questions.",
        "Only supportive comments."
      ],
      "correct": 1,
      "explanation": "The record should make the reasoning and remaining uncertainty inspectable."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "A hearing tests reasons",
          "text": "Ratification is a decision to adopt a proposal through an agreed process."
        },
        {
          "icon": "2",
          "label": "Keep an amendment trail",
          "text": "A decision log makes revision visible."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Stage a written hearing with three fictional stakeholders challenging your policy. Publish a decision log showing an accepted amendment, a rejected amendment and the reasons."
        }
      ]
    }
  ]
};
