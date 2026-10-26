/* AEP specialist lessons, reviewed 26 October 2026. Shared lessons use the Removes source. */
var SLIDES_U3U4 = {
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
