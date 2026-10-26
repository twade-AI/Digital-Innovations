/* AEP editorial review: 26 October 2026. Lesson IDs and base slide counts retained. */
var AEP_REVIEWED = true;
var SLIDES_U1U2 = {
  "1": [
    {
      "type": "hook",
      "title": "Your AI Footprint",
      "body": "A fictional pupil’s morning includes an alarm, a playlist, a spam filter and a generated revision plan. Which parts involve learned predictions? What can you actually establish from seeing the output?"
    },
    {
      "type": "concept",
      "title": "Classify the job, then investigate the system",
      "body": "AI can classify, predict, recommend or generate. An app can combine a learned model with ordinary software. The product label alone does not establish how every feature works.",
      "bullets": [
        "Separate the input, the operation and the output.",
        "A fixed timer need not learn from data; a recommender may estimate relevance from behaviour.",
        "Distinguish what you observed from what you inferred. Mark uncertain cases rather than forcing a label."
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Draw the decision, not just the app",
      "body": "An ecosystem map should show what moves between people and systems. For a fictional music app: listening history enters, a ranked list leaves, and the listener chooses what to play.",
      "bullets": [
        "The user may want discovery; the service may optimise engagement. Those aims can diverge.",
        "Identify one choice retained by the user and one choice already shaped by the ranking.",
        "Ask what a useful non-AI alternative would do. This gives you a comparison."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Where could your map be wrong? Describe evidence that would change one classification.",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Map a day without exposing a real person",
      "instructions": "Working independently. Use an invented day, not screenshots of private accounts.",
      "steps": [
        "Draw five encounters as a transport map.",
        "Label each station with input, output and likely function.",
        "Add an uncertainty symbol where the method is unknown.",
        "Redesign one interchange to give the user more control. Explain the benefit and a remaining limitation."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Where could your map be wrong? Describe evidence that would change one classification."
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
      "question": "What is the strongest basis for calling a feature AI?",
      "options": [
        "Its interface looks futuristic.",
        "Evidence about the function and how it is produced.",
        "The company uses AI somewhere else."
      ],
      "correct": 1,
      "explanation": "Investigate the particular feature. A product can mix learned models and fixed rules."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Classify the job, then investigate the system",
          "text": "AI can classify, predict, recommend or generate."
        },
        {
          "icon": "2",
          "label": "Draw the decision, not just the app",
          "text": "An ecosystem map should show what moves between people and systems."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Map a fictional day's AI encounters as a transport map. Label data entering each station, decisions leaving it and one place the traveller can intervene."
        }
      ]
    }
  ],
  "2": [
    {
      "type": "hook",
      "title": "Models, Retrieval and Understanding",
      "body": "A fictional assistant confidently says a club was founded in 2018. Its source says 2019. Another answer is correct but has no source. Which answer should you trust, and what does either reveal about understanding?"
    },
    {
      "type": "concept",
      "title": "A model is not the whole product",
      "body": "A language model generates outputs from learned parameters and supplied context. A product may also retrieve documents, search the web or run tools. Inspect the complete workflow before describing its capabilities.<details class=\"independent-route\"><summary>Watch and think: 3Blue1Brown: Large Language Models explained briefly</summary><p>Optional: <a href=\"https://www.youtube.com/watch?v=LPZh9BOjkQs\" target=\"_blank\" rel=\"noopener\">Watch on YouTube</a>.</p><p><strong>Text alternative:</strong> A plausible continuation is not a fact-check. Retrieval and tools can add evidence, which still needs checking.</p><p>Explain one idea with your own example. What would test it?</p></details>",
      "bullets": [
        "Training changes parameters; a new prompt changes context.",
        "A retrieved passage can supply evidence, but it may be irrelevant, incomplete or misread.",
        "Correct performance on a task does not by itself settle philosophical claims about understanding."
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        },
        {
          "label": "Google: Gemini Notebook help",
          "url": "https://support.google.com/gemininotebook/answer/16164461"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Put the metaphors on trial",
      "body": "The parrot metaphor draws attention to fluent imitation. The librarian metaphor draws attention to finding and organising information. Neither is a complete technical account.",
      "bullets": [
        "Ask what each metaphor predicts and where it fails.",
        "A generated citation can look plausible without referring to a real publication.",
        "A system using retrieval can still produce an unsupported conclusion. Check claim against passage."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Design a test that distinguishes retrieval from a plausible guess. What would it leave unresolved?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Audit a miniature source",
      "instructions": "Working independently. Fictional source: “The repair club began in 2019. It meets twice each month. The report does not record membership.” Output: “Founded in 2018, the weekly club has 40 members.”",
      "steps": [
        "Label each output claim supported, contradicted or not established.",
        "Repair the sentence without inventing facts.",
        "Write one museum label using each metaphor.",
        "Explain one limitation of each label."
      ],
      "reveal": "2018 and weekly are contradicted. Forty members is not established. The source supports 2019 and twice each month."
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Design a test that distinguishes retrieval from a plausible guess. What would it leave unresolved?"
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
      "question": "What does a correct answer without a source establish?",
      "options": [
        "That the system consulted the original evidence.",
        "That this answer is correct, if independently checked.",
        "That the system understands in every relevant sense."
      ],
      "correct": 1,
      "explanation": "Performance, evidence retrieval and understanding are different claims."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "A model is not the whole product",
          "text": "A language model generates outputs from learned parameters and supplied context."
        },
        {
          "icon": "2",
          "label": "Put the metaphors on trial",
          "text": "The parrot metaphor draws attention to fluent imitation."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Create two contrasting museum labels for a fictional chatbot's convincing but false answer. Explain what each analogy illuminates and where it breaks down."
        }
      ]
    }
  ],
  "3": [
    {
      "type": "hook",
      "title": "How a Machine Learns",
      "body": "A fictional creature classifier gets every training example right. On four new creatures it gets only two right. Has it learned a useful rule, and what should you investigate before changing it?"
    },
    {
      "type": "video",
      "title": "Optional: What is a neural network?",
      "videoId": "aircAruvnKk",
      "credit": "3Blue1Brown · introductory explanation",
      "intro": "Optional viewing. Write one question before watching, then answer it in your own words. The explanation and activity in this lesson work without the video.<p><strong>Text alternative:</strong> Training adjusts model parameters using examples and an objective. A held-out test helps estimate generalisation; it does not guarantee future performance.</p>"
    },
    {
      "type": "concept",
      "title": "Three different jobs for data",
      "body": "In supervised learning, examples pair inputs with labels. Training adjusts model parameters; validation helps choose settings; a held-out test estimates performance after those choices. Split proportions depend on the task and available data.",
      "bullets": [
        "A hand-written classification rule is a useful analogy, not a miniature neural network.",
        "If you repeatedly adjust a rule using the test results, those results no longer provide an independent final check.",
        "Separate related examples together where necessary to avoid information leaking between splits."
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "A good score has a boundary",
      "body": "Generalisation means performing usefully on unseen examples from the relevant setting. It does not establish that a system has discovered causes or will work in every setting.",
      "bullets": [
        "Overfitting: fitting training-specific detail that does not generalise well.",
        "Underfitting: missing useful structure even in the training examples.",
        "A gap between training and test performance prompts investigation; a tiny test cannot settle the cause.",
        "Ask whether labels, sampling or the deployment setting differ."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. If your classifier gets four out of four right, what can you still not conclude?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Train a paper classifier",
      "instructions": "Working independently. Invent a rule for sorting twelve drawn creatures. Reserve four unseen creatures, test the rule once, and explain one failure without quietly changing the test set.",
      "steps": [
        "Draw twelve fictional creatures with features such as wings, stripes and antennae. Give them two class labels.",
        "Use six examples to write a rule and two to revise it. Reserve the last four until the rule is fixed.",
        "Run the four tests once and record predicted and actual labels.",
        "Invent a creature that exposes a weakness. Explain what a larger independent test should include."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "If your classifier gets four out of four right, what can you still not conclude?"
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
      "question": "Why reserve a test set?",
      "options": [
        "To tune the rule until every test passes.",
        "To estimate performance on examples not used to choose the rule.",
        "To prove the rule will work on all future data."
      ],
      "correct": 1,
      "explanation": "A held-out test limits one source of overoptimism; its size and relevance still matter."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Three different jobs for data",
          "text": "In supervised learning, examples pair inputs with labels."
        },
        {
          "icon": "2",
          "label": "A good score has a boundary",
          "text": "Generalisation means performing usefully on unseen examples from the relevant setting."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Invent a rule for sorting twelve drawn creatures. Reserve four unseen creatures, test the rule once, and explain one failure without quietly changing the test set."
        }
      ]
    }
  ],
  "4": [
    {
      "type": "hook",
      "title": "The Black Box",
      "body": "A fictional scholarship tool rejects an application with the message “score below threshold”. The supplier offers a colourful explanation chart. What would make that chart useful to the applicant?"
    },
    {
      "type": "concept",
      "title": "An explanation has a purpose",
      "body": "Interpretability concerns how we understand a model’s operation. A decision explanation should answer a particular person’s question. A plausible explanation is not necessarily faithful to the mechanism.",
      "bullets": [
        "A developer may need to inspect a failure; an applicant may need to correct data or challenge a decision.",
        "Feature importance shows a relationship within an explanation method, not automatically a causal effect.",
        "Ask how an explanation was produced and tested."
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Turn explanation into a decision receipt",
      "body": "Fictional receipt: “Attendance contributed to the score.” That may sound informative while omitting a data error or an unreasonable criterion.",
      "bullets": [
        "Show the data used, its date and a correction route.",
        "Identify the decision-maker and the limits of the model.",
        "Explain how to obtain review by someone able to change the outcome.",
        "Compare performance and explanation quality separately; do not assume a universal trade-off."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Could a faithful explanation reveal that the underlying rule is unacceptable? Defend your answer.",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Design the inspection hatch",
      "instructions": "Working independently. Work with the fictional scholarship or loan example.",
      "steps": [
        "Draw the receipt a rejected applicant should receive.",
        "Add an incorrect input and show the correction process.",
        "Write a test of whether the explanation faithfully reflects the decision.",
        "Explain one thing that revealing model code alone would not resolve."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could a faithful explanation reveal that the underlying rule is unacceptable? Defend your answer."
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
      "question": "Which change most helps someone challenge a wrong input?",
      "options": [
        "Displaying more technical terminology.",
        "Naming the data used and providing a correction and review route.",
        "Publishing an unexplained score."
      ],
      "correct": 1,
      "explanation": "The information must support a meaningful action, not merely look transparent."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "An explanation has a purpose",
          "text": "Interpretability concerns how we understand a model’s operation."
        },
        {
          "icon": "2",
          "label": "Turn explanation into a decision receipt",
          "text": "Fictional receipt: “Attendance contributed to the score.” That may sound informative while omitting a data error or an unreasonable criterion."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Design a decision receipt for a fictional loan model. Distinguish information that helps a user challenge a decision from information that merely looks technical."
        }
      ]
    }
  ],
  "5": [
    {
      "type": "hook",
      "title": "Bias In, Bias Out",
      "body": "Two fictional groups each have 20 examples in a test. The classifier gets 19 right in group A and 15 right in group B. The supplier advertises 85% accuracy. What has that headline hidden?"
    },
    {
      "type": "video",
      "title": "Optional: Training data and bias",
      "videoId": "x2mRoFNm22g",
      "credit": "Code.org · introductory explanation",
      "intro": "Optional viewing. Write one question before watching, then answer it in your own words. The explanation and activity in this lesson work without the video.<p><strong>Text alternative:</strong> An overall score may conceal unequal errors. Investigate the data, labels, test population and consequences rather than assuming the cause of a gap.</p>"
    },
    {
      "type": "concept",
      "title": "Different questions need different measures",
      "body": "The combined score is 34/40, or 85%. Group A is 95%; group B is 75%. An overall average can hide unequal performance. These are invented teaching figures, not a product evaluation.",
      "bullets": [
        "Check sample size, labels, task and who was included.",
        "Separate false positives from false negatives: their costs can differ.",
        "A small test indicates a question to investigate, not a stable estimate for every user."
      ],
      "sources": [
        {
          "label": "Gender Shades — original 2018 study",
          "url": "https://proceedings.mlr.press/v81/buolamwini18a.html"
        },
        {
          "label": "NIST: Face recognition evaluation",
          "url": "https://pages.nist.gov/frvt/html/frvt11.html"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Keep historical evidence in its proper scope",
      "body": "Gender Shades (2018) evaluated commercial gender classification systems. It was not a current scorecard for every face-recognition product. Its importance here is the method: test performance across relevant groups.",
      "bullets": [
        "Representation gaps are one source of problems; labels, objectives and deployment conditions also matter.",
        "Adding data may help, but cannot by itself decide whether the task or label is appropriate.",
        "Define the harm and a meaningful comparison before declaring a repair fair."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Could improving one fairness measure worsen another? Give a clearly hypothetical example.",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Build a small dataset with a visible gap",
      "instructions": "Working independently. Invent 12 drawn objects with two features; avoid classifying real pupils.",
      "steps": [
        "Write a classification rule and mark which examples it was built from.",
        "Reserve four new examples for testing.",
        "Show one representation gap and predict a failure.",
        "Propose a repair and state what further evidence you need."
      ],
      "reveal": "For the opening test: overall 85%, group A 95%, group B 75%. Report the denominators as well as the percentages."
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could improving one fairness measure worsen another? Give a clearly hypothetical example."
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
      "question": "Why is the overall score insufficient?",
      "options": [
        "Averages are always wrong.",
        "It conceals group differences and says little about error costs.",
        "The larger group must always lose."
      ],
      "correct": 1,
      "explanation": "Inspect disaggregated results and the consequences of each kind of error."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Different questions need different measures",
          "text": "The combined score is 34/40, or 85%."
        },
        {
          "icon": "2",
          "label": "Keep historical evidence in its proper scope",
          "text": "Gender Shades (2018) evaluated commercial gender classification systems."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Build a tiny fictional dataset with a deliberate representation gap. Explain how the gap could affect outcomes, propose a repair and name a new problem the repair might create."
        }
      ]
    }
  ],
  "6": [
    {
      "type": "hook",
      "title": "The Data Harvest",
      "body": "A fictional photo tool asks for an image, a school email and permission to retain uploads. Its notice describes service operation, safety review and optional model improvement separately. What would you check before using it?"
    },
    {
      "type": "concept",
      "title": "Follow the data through distinct purposes",
      "body": "Collection, storage, sharing and model training are different operations. Do not assume every upload is used for training, or that a “private” interface means no data is retained.",
      "bullets": [
        "Identify the account type and relevant terms.",
        "Ask who receives the data, why it is needed and how long it is held.",
        "A deletion request may have limits; read the applicable policy rather than promising a universal right or result."
      ],
      "sources": [
        {
          "label": "DfE: Generative AI and data protection in schools",
          "url": "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools"
        },
        {
          "label": "Google: Gemini Notebook help",
          "url": "https://support.google.com/gemininotebook/answer/16164461"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Permission is more than a tick box",
      "body": "Schools must consider their data-protection responsibilities and approved tools. Consent is one possible lawful basis, not the only one, and a pupil cannot settle a school’s legal obligations by clicking agree.",
      "bullets": [
        "Use fictional material for this exercise.",
        "Reduce unnecessary data before asking how to protect it.",
        "Separate a provider’s contractual promise from evidence that a control works."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What evidence would justify a claim that an upload is excluded from training? What would remain unknown?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Write a data receipt",
      "instructions": "Working independently. Use an invented photo with no real people or identifying information.",
      "steps": [
        "Draw upload, processing, storage, onward sharing and deletion as separate stages.",
        "Write one question for each stage.",
        "Compare a consumer account and a school-managed account without assuming identical terms.",
        "Recommend the minimum data needed for the task and a non-upload alternative."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What evidence would justify a claim that an upload is excluded from training? What would remain unknown?"
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
      "question": "What is the strongest first step when a tool asks for unnecessary personal data?",
      "options": [
        "Supply it because the tool is free.",
        "Reduce the data and check approved use and terms.",
        "Assume a school email makes every use compliant."
      ],
      "correct": 1,
      "explanation": "Data minimisation and a check of the actual purpose and setting come before convenience."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Follow the data through distinct purposes",
          "text": "Collection, storage, sharing and model training are different operations."
        },
        {
          "icon": "2",
          "label": "Permission is more than a tick box",
          "text": "Schools must consider their data-protection responsibilities and approved tools."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Trace an invented photo from upload to possible model use. Mark collection, permission, transformation and deletion questions; do not assume a service uses every upload for training."
        }
      ]
    }
  ],
  "7": [
    {
      "type": "hook",
      "title": "The Trolley Problem Goes Digital",
      "body": "A fictional delivery robot can take a short route through a crowded courtyard or a longer route that may miss a deadline. Its designers optimise delivery time. Who decides which other values the system must respect?"
    },
    {
      "type": "concept",
      "title": "Use ethical lenses without pretending they are code",
      "body": "A thought experiment isolates a question. Real systems operate with uncertain information, technical limits and legal duties. Do not treat a trolley dilemma as a description of how every autonomous vehicle is programmed.",
      "bullets": [
        "Consequences: compare likely benefits and harms, including uncertainty and distribution.",
        "Duties and rights: ask what constraints should protect people even when breaking them would improve a total score.",
        "Virtue ethics: ask what care, honesty and practical judgement demand of designers and operators.",
        "Fairness: consider a rule from the position of the person who bears its cost."
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Draw the responsibility chain",
      "body": "A system can distribute decisions across designers, suppliers, deployers and users. Naming an algorithm does not explain who should prevent harm, investigate a failure or provide a remedy.",
      "bullets": [
        "Distinguish technical causation, moral responsibility and legal liability.",
        "Give a named role authority and resources to intervene.",
        "Record a decision so a later reviewer can reconstruct it.",
        "A human signature is insufficient if the person cannot understand or change the action."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Would your rule change if the delivery were urgent medicine? Which facts would matter?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Two ethics, one decision",
      "instructions": "Working independently. Storyboard an autonomous-system dilemma twice, once from a consequences-first view and once from a duties-first view. Defend a choice and its cost.",
      "steps": [
        "Storyboard the courtyard case using a consequences-first approach.",
        "Draw a second version using a rule protecting pedestrian access.",
        "Explain where the versions agree and where they conflict.",
        "Choose a policy, name its cost and specify who can stop the robot."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Would your rule change if the delivery were urgent medicine? Which facts would matter?"
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
      "question": "What does an ethical framework contribute?",
      "options": [
        "A guaranteed legal answer.",
        "A way to expose reasons, values and trade-offs.",
        "A replacement for testing a system."
      ],
      "correct": 1,
      "explanation": "Ethical reasoning supports scrutiny; it does not replace technical evidence or applicable law."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Use ethical lenses without pretending they are code",
          "text": "A thought experiment isolates a question."
        },
        {
          "icon": "2",
          "label": "Draw the responsibility chain",
          "text": "A system can distribute decisions across designers, suppliers, deployers and users."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Storyboard an autonomous-system dilemma twice, once from a consequences-first view and once from a duties-first view. Defend a choice and its cost."
        }
      ]
    }
  ],
  "8": [
    {
      "type": "hook",
      "title": "Human in the Loop",
      "body": "A fictional appointment assistant moves a booking automatically. A staff member can approve it, but sees only a green tick and has two seconds to respond. Is that meaningful oversight?"
    },
    {
      "type": "concept",
      "title": "Put oversight where it can change the outcome",
      "body": "Human-in-the-loop often means approval before an action; on-the-loop often means monitoring with a way to intervene; out-of-the-loop means no routine human intervention at that stage. These labels vary, so describe the actual arrangement.",
      "bullets": [
        "What can the person see? Can they inspect the input, evidence and uncertainty?",
        "What can they do? Can they pause, reject, correct or reverse the action?",
        "Do they have enough time, authority and training?",
        "Who helps the affected person challenge a mistake?"
      ],
      "sources": [
        {
          "label": "NIST: Generative AI risk profile",
          "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Match control to consequence",
      "body": "Oversight should respond to the task’s stakes and reversibility. A draft message and a cancelled appointment need different controls.",
      "bullets": [
        "Automation bias means overrelying on a system’s suggestion.",
        "Rubber-stamping can conceal responsibility rather than exercise it.",
        "Use logs and spot checks, and test whether warnings attract useful attention.",
        "Offer a usable fallback when the assistant or reviewer is unavailable."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What should happen when the person responsible for review is unavailable?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Design the human handover",
      "instructions": "Working independently. Draw a three-stage oversight dashboard for a fictional medical scheduling assistant. Show who can inspect, stop and appeal an action, without pretending the exercise is medical advice.",
      "steps": [
        "Draw the assistant’s proposed change, the staff review and the user’s appeal route.",
        "Show the evidence visible at each stage.",
        "Simulate a mistaken cancellation and trace who can reverse it.",
        "Remove one unnecessary approval and strengthen one consequential control. Explain both decisions."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What should happen when the person responsible for review is unavailable?"
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
      "question": "Which is the strongest oversight arrangement?",
      "options": [
        "A named reviewer with no ability to intervene.",
        "A reviewer with relevant evidence, time and authority to reject or reverse the action.",
        "A disclaimer saying humans remain responsible."
      ],
      "correct": 1,
      "explanation": "Responsibility needs practical control and a route to remedy."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Put oversight where it can change the outcome",
          "text": "Human-in-the-loop often means approval before an action; on-the-loop often means monitoring with a way to intervene; out-of-the-loop means no routine human intervention at that stage."
        },
        {
          "icon": "2",
          "label": "Match control to consequence",
          "text": "Oversight should respond to the task’s stakes and reversibility."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Draw a three-stage oversight dashboard for a fictional medical scheduling assistant. Show who can inspect, stop and appeal an action, without pretending the exercise is medical advice."
        }
      ]
    }
  ],
  "9": [
    {
      "type": "hook",
      "title": "Prompt Architecture",
      "body": "A fictional society needs a 90-word invitation. A vague prompt produces a polished message with an invented sponsor and ticket price. Which parts of the brief would have prevented that failure?"
    },
    {
      "type": "concept",
      "title": "Specify the task and the evidence",
      "body": "PTFC is a useful planning aid: persona, task, format and context. It is not a guarantee of accuracy or a scientific ranking of which instruction matters most.",
      "bullets": [
        "Use a role only when it clarifies the task; a role label does not confer expertise.",
        "Provide facts, audience, constraints and a success criterion."
      ],
      "sources": [
        {
          "label": "OpenAI: Reasoning best practices",
          "url": "https://developers.openai.com/api/docs/guides/reasoning-best-practices"
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
      "title": "Put it to the test: Specify the task and the evidence",
      "body": "When would a form or fixed template outperform a generative tool for this task?",
      "bullets": [
        "State what to do when information is missing."
      ]
    },
    {
      "type": "activity",
      "title": "Build and test the prompt",
      "instructions": "Working independently. Use an approved tool or manually write two possible outputs.",
      "steps": [
        "Write the prompt and a test checklist before viewing an answer.",
        "Test a normal brief and a brief containing two conflicting dates.",
        "Record one accepted output and one failure.",
        "Revise the instruction and explain exactly what improved."
      ]
    },
    {
      "type": "concept",
      "title": "Keep the comparison fair",
      "body": "Fictional brief: a repair society event on Friday, 12:45, Room 4; booking is required; price and sponsor are unknown. Draft an invitation without filling the gaps.",
      "bullets": [
        "Check date, time, location and length against the brief.",
        "Change one instruction, then compare outputs against the same criteria.",
        "A tool can help draft; permission to send or book is a separate decision."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. When would a form or fixed template outperform a generative tool for this task?",
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
          "text": "When would a form or fixed template outperform a generative tool for this task?"
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
      "question": "Which is a useful missing-information rule?",
      "options": [
        "Always make a confident guess.",
        "Ask or mark the gap instead of inventing a fact.",
        "Add an expert persona."
      ],
      "correct": 1,
      "explanation": "The response needs a defined way to handle uncertainty."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Specify the task and the evidence",
          "text": "PTFC is a useful planning aid: persona, task, format and context."
        },
        {
          "icon": "2",
          "label": "Keep the comparison fair",
          "text": "Fictional brief: a repair society event on Friday, 12:45, Room 4; booking is required; price and sponsor are unknown."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Draw a prompt as a building plan with purpose, context, constraints and checking. Test its weakest room with an ambiguous user request and redesign it."
        }
      ]
    }
  ],
  "10": [
    {
      "type": "hook",
      "title": "Synthetic Creativity and Copyright",
      "body": "A fictional client asks for “full rights” to a poster combining your layout, a licensed photo and a generated background. Can one sentence about AI ownership settle every part of the request?"
    },
    {
      "type": "concept",
      "title": "Separate contribution, permission and protection",
      "body": "A useful creative record identifies what you made, what you borrowed and what a tool generated. Owning a file does not establish permission to reuse every ingredient.",
      "bullets": [
        "Check the licence and intended use of each borrowed asset.",
        "Record your selection, arrangement and editing decisions.",
        "Distinguish a provider’s contract from the copyright law that applies."
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
      "title": "Name the jurisdiction before making the claim",
      "body": "The UK and US do not have identical rules. The UK’s computer-generated-works provisions and current reform debate need separate consideration from US human-authorship guidance. A government proposal is not automatically a change in law.",
      "bullets": [
        "The UK March 2026 report discusses section 9(3), its uncertainty and possible reform.",
        "The US Copyright Office distinguishes human contribution from purely generated material.",
        "For a real commercial commitment, seek appropriate advice; this exercise identifies questions rather than certifying ownership."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. Could an output be lawful to use but difficult to protect exclusively? Explain the distinction.",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Make the provenance label",
      "instructions": "Working independently. Create a small poem or poster using original or clearly licensed material.",
      "steps": [
        "Label each contribution and any tool used.",
        "Keep two versions showing a human creative decision.",
        "Write three questions to resolve before promising exclusive rights.",
        "Explain which answer could differ between jurisdictions."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "Could an output be lawful to use but difficult to protect exclusively? Explain the distinction."
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
      "question": "Which statement is defensible?",
      "options": [
        "UK and US rules for every AI output are identical.",
        "The answer depends on contribution, use, jurisdiction and current rules.",
        "A tool’s download button guarantees exclusive rights."
      ],
      "correct": 1,
      "explanation": "Avoid turning a complex rights question into a universal slogan."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Separate contribution, permission and protection",
          "text": "A useful creative record identifies what you made, what you borrowed and what a tool generated."
        },
        {
          "icon": "2",
          "label": "Name the jurisdiction before making the claim",
          "text": "The UK and US do not have identical rules."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Curate a tiny poem or poster with a complete contribution label: your choices, borrowed sources and any generated material. Identify a rights question you cannot settle from the output alone."
        }
      ]
    }
  ],
  "11": [
    {
      "type": "hook",
      "title": "Deep Research and the Future of Work",
      "body": "A fictional headline says “AI exposure means this career will disappear”. The underlying study assesses tasks within occupations. What changed between evidence and headline?"
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What evidence would distinguish useful assistance from replacement of an entire role?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "concept",
      "title": "Tasks are not jobs",
      "body": "Occupational exposure estimates concern what a technology might affect. They are not counts of people who have lost jobs or a timetable for a career disappearing.",
      "bullets": [
        "A role combines tasks, responsibility, relationships and local constraints.",
        "Adoption depends on cost, reliability, demand, regulation and organisational choices.",
        "Look for the study’s method, date, population and limitations."
      ],
      "sources": [
        {
          "label": "ILO: Occupational exposure to generative AI, 2025",
          "url": "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure"
        }
      ],
      "sourceNote": "Reviewed 26 October 2026"
    },
    {
      "type": "concept",
      "title": "Build a claim-to-source chain",
      "body": "The ILO’s 2025 index evaluates occupational exposure through task-level analysis. Use it as a model of a defined question, not as a forecast that every exposed task will be automated.",
      "bullets": [
        "Copy the claim you want to check into your own notes.",
        "Find the primary report, locate the relevant measure and compare wording.",
        "Two articles copying the same press release are not independent confirmation."
      ]
    },
    {
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. What evidence would distinguish useful assistance from replacement of an entire role?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Edit the career headline",
      "instructions": "Working independently. Use the fictional headline or a current claim from a named source.",
      "steps": [
        "List three tasks in a career, then identify which part of each might change.",
        "Separate observed adoption, estimated exposure and future predictions.",
        "Write a 100-word newsroom brief with a source date and a limitation.",
        "Choose one skill you can practise now and explain how you would demonstrate it."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "What evidence would distinguish useful assistance from replacement of an entire role?"
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
      "question": "What does a high exposure estimate establish?",
      "options": [
        "That the whole occupation will disappear.",
        "That some tasks may be affected under the study’s method.",
        "That wages must fall by the same percentage."
      ],
      "correct": 1,
      "explanation": "Exposure is a measure with assumptions, not a direct job-loss forecast."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Tasks are not jobs",
          "text": "Occupational exposure estimates concern what a technology might affect."
        },
        {
          "icon": "2",
          "label": "Build a claim-to-source chain",
          "text": "The ILO’s 2025 index evaluates occupational exposure through task-level analysis."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Choose a claim about AI changing work from the lesson. Turn it into a newsroom brief separating measured task exposure, predicted job change and evidence still needed."
        }
      ]
    }
  ],
  "12": [
    {
      "type": "hook",
      "title": "The Revision Loop",
      "body": "A fictional draft argues that a second lunch queue caused shorter waits. Feedback A asks about different menus; feedback B offers a polished rewrite claiming the trial proved causation. Which suggestion deserves your attention?"
    },
    {
      "type": "concept",
      "title": "Protect the thinking you are meant to practise",
      "body": "Assistance should be judged against the learning goal and the actual task instructions. Feedback, rewriting and submitting generated work are different uses. Disclosure does not make prohibited assistance acceptable.<h3>Work from a source you can inspect</h3><p>Fictional trial: one queue averaged six minutes with 120 lunches; two queues averaged four minutes with 100 lunches. Menus differed and each condition ran for five days.</p>",
      "bullets": [
        "Attempt the task first.",
        "Ask for a question or a specific critique before a rewrite.",
        "Check a suggestion against evidence and explain what you accepted or rejected.",
        "The recorded average fell by two minutes.",
        "The evidence does not isolate the effect of the second queue.",
        "A useful revision qualifies the claim and proposes a more informative comparison."
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
      "type": "activity",
      "title": "A harder case",
      "instructions": "Working independently. How would the task change if its instructions prohibited AI entirely?",
      "steps": [
        "Write a first judgement without reopening your notes.",
        "Use one idea or worked example from this lesson to support or challenge it.",
        "State the extra evidence needed before acting.",
        "Keep a first and revised response; explain any change."
      ]
    },
    {
      "type": "activity",
      "title": "Keep an audit trail of the revision",
      "instructions": "Working independently. Use the supplied trial; no chatbot is required.",
      "steps": [
        "Write an 80-word recommendation before reviewing the feedback.",
        "Accept or reject each comment with a reason.",
        "Revise the argument while retaining a limitation.",
        "Close the source and explain the difference between a recorded change and a causal claim."
      ]
    },
    {
      "type": "discussion",
      "title": "Defend your judgement",
      "questions": [
        {
          "num": 1,
          "text": "How would the task change if its instructions prohibited AI entirely?"
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
      "question": "What makes feedback useful for learning?",
      "options": [
        "It removes the need to think.",
        "It helps you identify and repair a specific weakness you can explain.",
        "It always gives a predicted grade."
      ],
      "correct": 1,
      "explanation": "The evidence is in the learner’s decisions and independent follow-up, not the fluency of a rewrite."
    },
    {
      "type": "summary",
      "title": "Take it beyond this lesson",
      "points": [
        {
          "icon": "1",
          "label": "Protect the thinking you are meant to practise",
          "text": "Assistance should be judged against the learning goal and the actual task instructions."
        },
        {
          "icon": "2",
          "label": "Work from a source you can inspect",
          "text": "Fictional trial: one queue averaged six minutes with 120 lunches; two queues averaged four minutes with 100 lunches."
        },
        {
          "icon": "✓",
          "label": "Keep the evidence",
          "text": "Keep a first draft, two competing feedback comments and a revised draft. Annotate one accepted suggestion and one rejected suggestion with reasons connected to the writing's purpose."
        }
      ]
    }
  ]
};
