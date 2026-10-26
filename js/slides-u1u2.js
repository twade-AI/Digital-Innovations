/* AEP specialist lessons, reviewed 26 October 2026. Shared lessons use the Removes source. */
var AEP_REVIEWED = true;
var SLIDES_U1U2 = {
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
  ]
};
