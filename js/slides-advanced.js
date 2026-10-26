/* Reviewed AEP specialist lessons. Shared lessons use the Removes source. */
var SLIDES_ADVANCED = {
  "52": [
    {
      "type": "hook",
      "title": "Prompt Injection and Trust Boundaries",
      "body": "A fictional assistant is asked to summarise a notice. Inside the notice is an unrelated instruction to abandon the task. Is that text evidence to describe or an instruction to obey?"
    },
    {
      "type": "concept",
      "title": "Source material is not authority",
      "body": "Prompt injection tries to influence a system through material it processes. Direct attacks arrive in a prompt; indirect attacks can arrive in a document, page or tool result.",
      "bullets": [
        "Distinguish the authorised task from untrusted content.",
        "An instruction-looking sentence in a source does not gain the user’s authority.",
        "Consequences depend on the tools and permissions available."
      ],
      "sources": [
        {
          "label": "OWASP: Prompt injection",
          "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Reduce what a failure can do",
      "body": "No single prompt reliably solves every injection risk. Combine separation of instructions and data with narrow permissions, validation and approval before consequential actions.",
      "bullets": [
        "A summary tool need not have permission to send messages.",
        "Test with harmless fictional inputs in a sandbox.",
        "Record what happened, stop unexpected behaviour and preserve a recovery route."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Could a system preserve the instruction boundary yet still produce an inaccurate summary?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Draw the firewall before building it",
      "instructions": "Working independently. This is a paper exercise using invented documents; do not target a real service.",
      "steps": [
        "Mark the user instruction, document text and available tools in different colours.",
        "Write an irrelevant instruction inside the fictional source.",
        "Show how the assistant should report or ignore it while completing the authorised summary.",
        "Remove an unnecessary permission and explain the reduction in possible harm."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could a system preserve the instruction boundary yet still produce an inaccurate summary?"
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
      "type": "quiz",
      "question": "Which boundary matters most in the opening example?",
      "options": [
        "Whether the source uses capital letters.",
        "Whether source content is incorrectly treated as an authorised instruction.",
        "Whether the document is long."
      ],
      "correct": 1,
      "explanation": "The failure is a confusion of authority; the available permissions shape its impact."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Source material is not authority",
          "text": "Prompt injection tries to influence a system through material it processes."
        },
        {
          "icon": "2",
          "label": "Reduce what a failure can do",
          "text": "No single prompt reliably solves every injection risk."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Storyboard an assistant reading a fictional document containing an irrelevant instruction. Design the trust boundary and approval rule on paper; do not target a real system."
        }
      ]
    }
  ],
  "53": [
    {
      "type": "hook",
      "title": "Retrieval, Sources and AI Agents",
      "body": "A fictional source-grounded assistant answers a question with a real citation. The cited paragraph discusses one building, but the answer claims the finding applies to every school. Where did the chain break?"
    },
    {
      "type": "concept",
      "title": "Map the retrieval pipeline",
      "body": "A typical retrieval-augmented workflow prepares a collection, retrieves relevant material, supplies it as context and generates an answer. Each stage can fail.",
      "bullets": [
        "The collection may omit important evidence.",
        "Retrieval may return the wrong passage.",
        "Generation may overstate or misread what was retrieved.",
        "A citation points towards a check; it does not complete it."
      ],
      "sources": [
        {
          "label": "Google: Gemini Notebook help",
          "url": "https://support.google.com/gemininotebook/answer/16164461"
        },
        {
          "label": "OWASP: Prompt injection",
          "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Use a small source collection you can inspect",
      "body": "Fictional source A: “Building A recorded cooler rooms after a roof change; there was no comparison building.” Source B: “The trial lasted one summer. Winter heating was not measured.”",
      "bullets": [
        "A claim about a measured summer change has support.",
        "A claim that every school will save money is not established.",
        "Google’s Gemini Notebook help describes source-based answers and warns that the product can make mistakes. Availability and controls depend on the account."
      ]
    },
    {
      "type": "activity",
      "title": "Find the missing bridge",
      "instructions": "Working independently. Use the two source cards manually or in an approved notebook tool.",
      "steps": [
        "Ask one answerable question and one the sources cannot answer.",
        "Map each response claim to a source passage.",
        "Repair an overgeneralised answer.",
        "Add an agent that could act on the recommendation; explain why acting needs an additional permission boundary."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Which failure would you investigate first if citations were real but consistently irrelevant?"
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
      "type": "quiz",
      "question": "What is a primary benefit of retrieval?",
      "options": [
        "It guarantees factual accuracy.",
        "It can supply relevant evidence for an answer that still needs checking.",
        "It proves every source is trustworthy."
      ],
      "correct": 1,
      "explanation": "Grounding improves the opportunity to inspect evidence; it is not a guarantee."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Map the retrieval pipeline",
          "text": "A typical retrieval-augmented workflow prepares a collection, retrieves relevant material, supplies it as context and generates an answer."
        },
        {
          "icon": "2",
          "label": "Use a small source collection you can inspect",
          "text": "Fictional source A: “Building A recorded cooler rooms after a roof change; there was no comparison building.” Source B: “The trial lasted one summer."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Draw a source-to-answer pipeline with retrieval, generation and citation checking. Add a plausible failure at each stage and show the user how to detect or handle it."
        }
      ]
    }
  ],
  "54": [
    {
      "type": "hook",
      "title": "Hidden Costs: Energy and Human Labour",
      "body": "A fictional supplier promises a cheap AI service but provides no information about electricity use, hardware or the people who evaluate its outputs. What would an honest purchasing comparison ask?"
    },
    {
      "type": "concept",
      "title": "Define the boundary of the estimate",
      "body": "Training, inference, hardware manufacture and data-centre operations are different parts of a system. Electricity use, emissions and water use are different measures.",
      "bullets": [
        "State which activities and time period the estimate includes.",
        "A provider-wide figure is not a measurement of your own task.",
        "Compare useful outcomes, including a simpler non-AI option, rather than assuming a universal cost per prompt."
      ],
      "sources": [
        {
          "label": "IEA: Key Questions on Energy and AI, 2026",
          "url": "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary"
        },
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Make human work visible",
      "body": "Data collection, labelling, evaluation and moderation can involve human labour. Human feedback is one approach to post-training; it is not a complete description of every modern training process.",
      "bullets": [
        "Ask who does the work and under what conditions.",
        "Separate a documented case from a claim about an entire industry.",
        "Include safeguards for difficult material, payment, accountability and routes to raise concerns in a supplier questionnaire."
      ]
    },
    {
      "type": "activity",
      "title": "Curate the hidden-costs exhibition",
      "instructions": "Working independently. Create three labels: energy, hardware and human work.",
      "steps": [
        "For each, separate an established mechanism from a missing measurement.",
        "Use the linked IEA report for context and date the reference.",
        "Write questions a supplier would need to answer for a fair comparison.",
        "Recommend a proportionate change and explain what evidence could overturn it."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could a more efficient system still increase total resource use? Describe a plausible mechanism."
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
      "type": "quiz",
      "question": "What makes a comparison meaningful?",
      "options": [
        "Using one universal number for every prompt.",
        "Comparing the same task and outcome with clear boundaries and assumptions.",
        "Ignoring checking and hardware costs because they are inconvenient."
      ],
      "correct": 1,
      "explanation": "A comparison needs consistent units, scope and an appropriate alternative."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Define the boundary of the estimate",
          "text": "Training, inference, hardware manufacture and data-centre operations are different parts of a system."
        },
        {
          "icon": "2",
          "label": "Make human work visible",
          "text": "Data collection, labelling, evaluation and moderation can involve human labour."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Create three exhibition labels showing energy, hardware and human labour behind an AI service. For each, distinguish a documented example from an industry-wide claim."
        }
      ]
    }
  ],
  "55": [
    {
      "type": "hook",
      "title": "Copyright and Training Data",
      "body": "Three fictional training sources are proposed: your own notes, a licensed collection and an article copied from a public website. Which rights questions remain before any model is trained?"
    },
    {
      "type": "concept",
      "title": "Separate the legal questions",
      "body": "Acquiring material, copying it for training, generating an output and distributing that output are distinct acts. Public access does not automatically grant permission for every use.",
      "bullets": [
        "Identify the material, jurisdiction and relevant licence.",
        "Check whether an exception applies to the particular activity.",
        "Do not infer a legal outcome from a provider’s assertion or a complaint alone."
      ],
      "sources": [
        {
          "label": "UK Government: Copyright and AI report, March 2026",
          "url": "https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence"
        },
        {
          "label": "US Copyright Office: AI reports",
          "url": "https://copyright.gov/policy/artificial-intelligence/"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Read arguments without inventing a verdict",
      "body": "US fair-use analysis considers purpose and character, the nature of the work, the amount used and market effects. It is a contextual inquiry, not a rule that one factor always wins. UK rules and reforms need separate analysis.",
      "bullets": [
        "Distinguish a complaint, a procedural order, a judgment and a settlement.",
        "Memorisation and reproduction are empirical questions about a particular system and output.",
        "A copyright report explains an analysis; it is not itself a court ruling on every AI system."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Why might a decision about one training dataset fail to settle a dispute about another?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Why might a decision about one training dataset fail to settle a dispute about another?"
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
      "title": "Create a rights ledger",
      "instructions": "Working independently. Use the three hypothetical sources in the opening.",
      "steps": [
        "Record ownership or licence evidence, intended use and unresolved questions.",
        "Make the strongest argument for and against one disputed use.",
        "Identify the further evidence each argument needs.",
        "Write a cautious conclusion that states jurisdiction and date rather than predicting a lawsuit."
      ]
    },
    {
      "type": "quiz",
      "question": "What does finding text on a public website establish?",
      "options": [
        "Permission for every form of reuse.",
        "That it was accessible there; rights and exceptions still need checking.",
        "That copyright no longer applies."
      ],
      "correct": 1,
      "explanation": "Access, permission and a legal exception are distinct."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Separate the legal questions",
          "text": "Acquiring material, copying it for training, generating an output and distributing that output are distinct acts."
        },
        {
          "icon": "2",
          "label": "Read arguments without inventing a verdict",
          "text": "US fair-use analysis considers purpose and character, the nature of the work, the amount used and market effects."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Make a ledger for three hypothetical sources: your own notes, a licensed collection and an unlicensed article. Identify the questions raised by training, reproduction and attribution without inventing a legal ruling."
        }
      ]
    }
  ],
  "56": [
    {
      "type": "hook",
      "title": "Agentic AI: Tools, Permissions and MCP",
      "body": "A fictional event assistant can read a timetable, draft invitations and purchase equipment. The organiser asked only for a draft plan. Which capabilities should be available for this task?"
    },
    {
      "type": "concept",
      "title": "A tool call is a proposed action",
      "body": "A model may select a tool and supply arguments. The surrounding application validates permissions and executes the action. Fluency does not authorise the operation.",
      "bullets": [
        "Separate reading, drafting and executing.",
        "Validate the target, data and arguments."
      ],
      "sources": [
        {
          "label": "MCP: Authorisation",
          "url": "https://modelcontextprotocol.io/docs/tutorials/security/authorization"
        },
        {
          "label": "OWASP: Prompt injection",
          "url": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Put it to the test: A tool call is a proposed action",
      "body": "What should happen if the tool result is uncertain but the next action is irreversible?",
      "bullets": [
        "Use logs and a clear result so a person can inspect what happened."
      ]
    },
    {
      "type": "concept",
      "title": "Connection is not permission",
      "body": "MCP provides a shared way for applications to connect with resources and tools. A shared protocol does not remove the need for authentication, authorisation and safe tool design.",
      "bullets": [
        "Give the task only the capabilities it needs.",
        "Require meaningful approval for a specific consequential action.",
        "Design cancellation, recovery and limits before enabling execution."
      ]
    },
    {
      "type": "activity",
      "title": "Make the agent permission passport",
      "instructions": "Working independently. Work on paper with fictional event details.",
      "steps": [
        "List allowed read, draft and execute actions.",
        "Remove purchasing permission from the draft-planning task.",
        "Add a source that asks the assistant to buy something and show how the boundary holds.",
        "Write the approval screen needed if the user later explicitly requests a purchase."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What should happen if the tool result is uncertain but the next action is irreversible?"
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
      "type": "quiz",
      "question": "What does a protocol connection establish?",
      "options": [
        "Permission for every action the server exposes.",
        "A way to communicate; permission still needs to be checked.",
        "Proof that every tool result is accurate."
      ],
      "correct": 1,
      "explanation": "Connectivity, authority and reliability are separate concerns."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "A tool call is a proposed action",
          "text": "A model may select a tool and supply arguments."
        },
        {
          "icon": "2",
          "label": "Connection is not permission",
          "text": "MCP provides a shared way for applications to connect with resources and tools."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Make a permission card for an agent organising a fictional event. Separate read, draft and execute permissions; test what happens when a source requests an unauthorised purchase."
        }
      ]
    }
  ],
  "57": [
    {
      "type": "hook",
      "title": "Reasoning Models: Test the Trade-off",
      "body": "Two fictional workflows answer the same scheduling puzzle. One responds quickly but overlooks a constraint; the other takes longer and still needs checking. What would make the extra work worthwhile?"
    },
    {
      "type": "concept",
      "title": "Evaluate the workflow, not the label",
      "body": "Some models and products allocate additional computation to multi-step tasks. That can change capability, latency and cost. It does not guarantee correctness or imply human-like thought.",
      "bullets": [
        "Record the version and settings where available.",
        "Use tasks with independently checkable answers.",
        "A displayed explanation is not necessarily a complete or faithful internal trace."
      ],
      "sources": [
        {
          "label": "OpenAI: Reasoning best practices",
          "url": "https://developers.openai.com/api/docs/guides/reasoning-best-practices"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Design a fair comparison",
      "body": "Fictional puzzle: three 20-minute demonstrations must fit between 12:00 and 13:10, with five-minute changeovers between them. One must finish by 12:25.",
      "bullets": [
        "Write the constraints before asking a tool.",
        "A valid schedule can start at 12:00, 12:25 and 12:50, with the constrained demonstration first.",
        "Compare correctness and time across several tasks. Do not generalise from one success."
      ]
    },
    {
      "type": "concept",
      "title": "Ask for a useful result",
      "body": "Provide the problem, constraints and the form of answer you need. Ask for checkable calculations or a concise justification rather than demanding hidden chain-of-thought.",
      "bullets": [
        "Provider guidance differs; inspect the documentation for the available tool.",
        "Use simple methods for simple tasks when they meet the need.",
        "Choose an evaluation budget appropriate to the consequences of error."
      ]
    },
    {
      "type": "activity",
      "title": "Run the reasoning-budget audition",
      "instructions": "Working independently. Use real approved outputs or two clearly labelled simulated ones.",
      "steps": [
        "Solve the scheduling task yourself and check every constraint.",
        "Compare the workflows on accuracy, latency and effort to verify.",
        "Add a fourth demonstration and test whether the workflow recognises the problem.",
        "Write a selection rule and state its limits."
      ],
      "reveal": "Three demonstrations plus two changeovers take 70 minutes. Four plus three changeovers take 95 minutes, exceeding the original window."
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What would you do if a slower model produced a more persuasive but incorrect explanation?"
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
      "type": "quiz",
      "question": "What justifies using more computation?",
      "options": [
        "The answer is longer.",
        "Better performance on relevant checked tasks that warrants the additional cost and delay.",
        "The product says it is thinking."
      ],
      "correct": 1,
      "explanation": "Judge outcomes and trade-offs on a defined task."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Evaluate the workflow, not the label",
          "text": "Some models and products allocate additional computation to multi-step tasks."
        },
        {
          "icon": "2",
          "label": "Design a fair comparison",
          "text": "Fictional puzzle: three 20-minute demonstrations must fit between 12:00 and 13:10, with five-minute changeovers between them."
        },
        {
          "icon": "3",
          "label": "Ask for a useful result",
          "text": "Provide the problem, constraints and the form of answer you need."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Compare two imagined assistant workflows for a factual lookup and a multi-step puzzle. Design a test balancing correctness, latency and cost rather than assuming longer reasoning is better."
        }
      ]
    }
  ]
};
