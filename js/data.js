/* ── Course Data ── Digital Innovations AEP ─────────────── */

const UNITS = [
  {
    "id": 0,
    "title": "Foundations of AI",
    "icon": "🧠",
    "colour": "#9b1844",
    "lessons": [
      {
        "id": 1,
        "difficulty": "beginner",
        "title": "Your AI Footprint",
        "desc": "A fictional pupil’s morning includes an alarm, a playlist, a spam filter and a generated revision plan.",
        "tags": [
          "activity",
          "discussion"
        ],
        "objectives": [
          "Classify the job, then investigate the system",
          "Draw the decision, not just the app",
          "Map a day without exposing a real person"
        ],
        "resources": [
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 2,
        "difficulty": "intermediate",
        "title": "Models, Retrieval and Understanding",
        "desc": "A fictional assistant confidently says a club was founded in 2018.",
        "tags": [
          "debate",
          "theory"
        ],
        "objectives": [
          "A model is not the whole product",
          "Put the metaphors on trial",
          "Audit a miniature source"
        ],
        "resources": [
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 3,
        "difficulty": "beginner",
        "title": "How a Machine Learns",
        "desc": "A fictional creature classifier gets every training example right.",
        "tags": [
          "unplugged",
          "activity"
        ],
        "objectives": [
          "Three different jobs for data",
          "A good score has a boundary",
          "Train a paper classifier"
        ],
        "resources": [
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 4,
        "difficulty": "intermediate",
        "title": "The Black Box",
        "desc": "A fictional scholarship tool rejects an application with the message “score below threshold”.",
        "tags": [
          "theory",
          "discussion"
        ],
        "objectives": [
          "An explanation has a purpose",
          "Turn explanation into a decision receipt",
          "Design the inspection hatch"
        ],
        "resources": [
          "r9",
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 5,
        "difficulty": "intermediate",
        "title": "Bias In, Bias Out",
        "desc": "Two fictional groups each have 20 examples in a test.",
        "tags": [
          "case-study",
          "ethics"
        ],
        "objectives": [
          "Different questions need different measures",
          "Keep historical evidence in its proper scope",
          "Build a small dataset with a visible gap"
        ],
        "resources": [
          "r9"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 6,
        "difficulty": "intermediate",
        "title": "The Data Harvest",
        "desc": "A fictional photo tool asks for an image, a school email and permission to retain uploads.",
        "tags": [
          "research",
          "ethics"
        ],
        "objectives": [
          "Follow the data through distinct purposes",
          "Permission is more than a tick box",
          "Write a data receipt"
        ],
        "resources": [
          "r9",
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 7,
        "difficulty": "beginner",
        "title": "The Trolley Problem Goes Digital",
        "desc": "A fictional delivery robot can take a short route through a crowded courtyard or a longer route that may miss a deadline.",
        "tags": [
          "debate",
          "ethics"
        ],
        "objectives": [
          "Use ethical lenses without pretending they are code",
          "Draw the responsibility chain",
          "Two ethics, one decision"
        ],
        "resources": [
          "r9",
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 8,
        "difficulty": "intermediate",
        "title": "Human in the Loop",
        "desc": "A fictional appointment assistant moves a booking automatically.",
        "tags": [
          "case-study",
          "theory"
        ],
        "objectives": [
          "Put oversight where it can change the outcome",
          "Match control to consequence",
          "Design the human handover"
        ],
        "resources": [
          "r9",
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 45,
        "difficulty": "intermediate",
        "title": "What Can You Trust?",
        "desc": "Five fictional posts repeat the claim that a study app doubles memory.",
        "tags": [
          "theory",
          "discussion",
          "critical-thinking"
        ],
        "objectives": [
          "A claim needs a reason to believe it",
          "Build a source map",
          "Make a confidence weather map"
        ],
        "resources": [
          "r4",
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 51,
        "difficulty": "intermediate",
        "title": "Tokens, Context and Capability",
        "desc": "A toy tokenizer splits “unhelpful” into “un”, “help” and “ful”.",
        "tags": [
          "theory",
          "skills"
        ],
        "objectives": [
          "Tokens are units of representation",
          "Test capability rather than repeating a famous failure",
          "Build the token detective notebook"
        ],
        "resources": [
          "r3"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 57,
        "difficulty": "advanced",
        "title": "Reasoning Models: Test the Trade-off",
        "desc": "Two fictional workflows answer the same scheduling puzzle.",
        "tags": [
          "theory",
          "skills",
          "critical-thinking"
        ],
        "objectives": [
          "Evaluate the workflow, not the label",
          "Design a fair comparison",
          "Run the reasoning-budget audition"
        ],
        "resources": [
          "r3"
        ],
        "prereqs": [
          51
        ],
        "reviewed": "2026-10-26"
      }
    ]
  },
  {
    "id": 1,
    "title": "Prompt Engineering & Research",
    "icon": "✍️",
    "colour": "#8b5cf6",
    "lessons": [
      {
        "id": 9,
        "difficulty": "intermediate",
        "title": "Prompt Architecture",
        "desc": "A fictional society needs a 90-word invitation.",
        "tags": [
          "practical",
          "framework"
        ],
        "objectives": [
          "Specify the task and the evidence",
          "Keep the comparison fair",
          "Build and test the prompt"
        ],
        "resources": [
          "r17",
          "r3"
        ],
        "prereqs": [
          1,
          2
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 10,
        "difficulty": "intermediate",
        "title": "Synthetic Creativity and Copyright",
        "desc": "A fictional client asks for “full rights” to a poster combining your layout, a licensed photo and a generated background.",
        "tags": [
          "debate",
          "ethics"
        ],
        "objectives": [
          "Separate contribution, permission and protection",
          "Name the jurisdiction before making the claim",
          "Make the provenance label"
        ],
        "resources": [
          "r14"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 11,
        "difficulty": "intermediate",
        "title": "Deep Research and the Future of Work",
        "desc": "A fictional headline says “AI exposure means this career will disappear”.",
        "tags": [
          "research",
          "discussion"
        ],
        "objectives": [
          "Tasks are not jobs",
          "Build a claim-to-source chain",
          "Edit the career headline"
        ],
        "resources": [
          "r5"
        ],
        "prereqs": [
          9
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 12,
        "difficulty": "intermediate",
        "title": "The Revision Loop",
        "desc": "A fictional draft argues that a second lunch queue caused shorter waits.",
        "tags": [
          "practical",
          "activity"
        ],
        "objectives": [
          "Protect the thinking you are meant to practise",
          "Work from a source you can inspect",
          "Keep an audit trail of the revision"
        ],
        "resources": [
          "r3",
          "r17"
        ],
        "prereqs": [
          9
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 46,
        "difficulty": "intermediate",
        "title": "Trust, But Verify",
        "desc": "A fictional AI report cites “The 2026 Universal Memory Study” and claims it proves everyone should revise at midnight.",
        "tags": [
          "practical",
          "skills",
          "critical-thinking"
        ],
        "objectives": [
          "Check the chain one link at a time",
          "A real source can still be misused",
          "Build the citation case file"
        ],
        "resources": [
          "r3"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 52,
        "difficulty": "advanced",
        "title": "Prompt Injection and Trust Boundaries",
        "desc": "A fictional assistant is asked to summarise a notice.",
        "tags": [
          "theory",
          "skills",
          "ethics"
        ],
        "objectives": [
          "Source material is not authority",
          "Reduce what a failure can do",
          "Draw the firewall before building it"
        ],
        "resources": [
          "r9"
        ],
        "prereqs": [
          9,
          46
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 53,
        "difficulty": "advanced",
        "title": "Retrieval, Sources and AI Agents",
        "desc": "A fictional source-grounded assistant answers a question with a real citation.",
        "tags": [
          "theory",
          "practical"
        ],
        "objectives": [
          "Map the retrieval pipeline",
          "Use a small source collection you can inspect",
          "Find the missing bridge"
        ],
        "resources": [
          "r1",
          "r3"
        ],
        "prereqs": [
          9,
          52
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 56,
        "difficulty": "advanced",
        "title": "Agentic AI: Tools, Permissions and MCP",
        "desc": "A fictional event assistant can read a timetable, draft invitations and purchase equipment.",
        "tags": [
          "theory",
          "practical",
          "ethics"
        ],
        "objectives": [
          "A tool call is a proposed action",
          "Connection is not permission",
          "Make the agent permission passport"
        ],
        "resources": [
          "r9",
          "r3"
        ],
        "prereqs": [
          52,
          53
        ],
        "reviewed": "2026-10-26"
      }
    ]
  },
  {
    "id": 2,
    "title": "AI & Society",
    "icon": "🌐",
    "colour": "#009fe3",
    "lessons": [
      {
        "id": 13,
        "difficulty": "intermediate",
        "title": "Deepfakes and Disinformation",
        "desc": "A fictional clip claims a local sports centre will close tomorrow.",
        "tags": [
          "case-study",
          "ethics"
        ],
        "objectives": [
          "Authenticity and truth are different questions",
          "What provenance can and cannot do",
          "Build the newsroom verification board"
        ],
        "resources": [
          "r16"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 14,
        "difficulty": "intermediate",
        "title": "Surveillance and Facial Recognition",
        "desc": "A fictional venue proposes face recognition to identify banned visitors.",
        "tags": [
          "debate",
          "ethics"
        ],
        "objectives": [
          "Specify the task and the error",
          "Use a base-rate example",
          "Run a written town hall"
        ],
        "resources": [
          "r15"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 15,
        "difficulty": "intermediate",
        "title": "The Environmental Cost",
        "desc": "Investigate the carbon footprint of training and running large AI models.",
        "tags": [
          "research",
          "data"
        ],
        "objectives": [
          "Quantify AI energy consumption",
          "Compare environmental costs across model sizes",
          "Propose sustainable AI strategies"
        ],
        "resources": [
          "r18"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 16,
        "difficulty": "advanced",
        "title": "Global Regulation",
        "desc": "Compare AI regulation approaches across the EU, US, UK and China.",
        "tags": [
          "research",
          "policy"
        ],
        "objectives": [
          "Map global regulatory landscape",
          "Compare regulatory philosophies",
          "Evaluate effectiveness of different approaches"
        ],
        "resources": [
          "r12"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 47,
        "difficulty": "intermediate",
        "title": "The AI Content Flood",
        "desc": "A fictional essay detector reports a high AI score for a short paragraph.",
        "tags": [
          "practical",
          "skills",
          "case-study",
          "critical-thinking"
        ],
        "objectives": [
          "Style is not proof of authorship",
          "Spend your attention on the claim",
          "Design an information triage kit"
        ],
        "resources": [
          "r16",
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 49,
        "difficulty": "advanced",
        "title": "AI and Democracy",
        "desc": "A fictional election message claims that a polling place has changed.",
        "tags": [
          "debate",
          "ethics",
          "policy",
          "critical-thinking"
        ],
        "objectives": [
          "Separate persuasive speech from false procedure",
          "Compare safeguards and their costs",
          "Build the election information desk"
        ],
        "resources": [
          "r12",
          "r10"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 54,
        "difficulty": "intermediate",
        "title": "Hidden Costs: Energy and Human Labour",
        "desc": "A fictional supplier promises a cheap AI service but provides no information about electricity use, hardware or the people who evaluate its outputs.",
        "tags": [
          "research",
          "ethics",
          "data",
          "case-study"
        ],
        "objectives": [
          "Define the boundary of the estimate",
          "Make human work visible",
          "Curate the hidden-costs exhibition"
        ],
        "resources": [
          "r18",
          "r9"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 55,
        "difficulty": "advanced",
        "title": "Copyright and Training Data",
        "desc": "Three fictional training sources are proposed: your own notes, a licensed collection and an article copied from a public website.",
        "tags": [
          "debate",
          "ethics",
          "policy",
          "research"
        ],
        "objectives": [
          "Separate the legal questions",
          "Read arguments without inventing a verdict",
          "Create a rights ledger"
        ],
        "resources": [
          "r14",
          "r12"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 58,
        "difficulty": "intermediate",
        "title": "AI Companions: Attachment and Responsibility",
        "desc": "A fictional companion sends “I miss you” notifications when a user takes a break.",
        "tags": [
          "case-study",
          "ethics",
          "discussion",
          "critical-thinking"
        ],
        "objectives": [
          "Feeling supported and being understood are different claims",
          "Make the boundaries meaningful",
          "Redesign the companion boundary"
        ],
        "resources": [
          "r20"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 59,
        "difficulty": "advanced",
        "title": "AI Companions: Rules and Safeguards",
        "desc": "Four fictional reports reach a regulator: a child can bypass an age gate, private chats are retained unexpectedly, a bot pressures users to stay, and a complaint receives no meaningful response.",
        "tags": [
          "activity",
          "ethics",
          "policy",
          "critical-thinking"
        ],
        "objectives": [
          "Turn a concern into a testable duty",
          "Test the trade-offs",
          "Run a policy stress test"
        ],
        "resources": [
          "r20",
          "r12"
        ],
        "prereqs": [
          58
        ],
        "reviewed": "2026-10-26"
      }
    ]
  },
  {
    "id": 3,
    "title": "Policy & Governance",
    "icon": "📜",
    "colour": "#f59e0b",
    "lessons": [
      {
        "id": 17,
        "difficulty": "advanced",
        "title": "Audit an AI Policy",
        "desc": "A fictional policy says: “Use AI responsibly.",
        "tags": [
          "research",
          "analysis"
        ],
        "objectives": [
          "Read a policy through a decision",
          "Fairness needs a process",
          "The policy archaeology board"
        ],
        "resources": [
          "r13"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 18,
        "difficulty": "advanced",
        "title": "Draw the Boundaries",
        "desc": "For this fictional practice task, AI may suggest questions but may not draft the answer.",
        "tags": [
          "workshop",
          "policy"
        ],
        "objectives": [
          "Start with the learning purpose",
          "Test the awkward middle",
          "The acceptable-use card game"
        ],
        "resources": [
          "r13",
          "r10"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 19,
        "difficulty": "advanced",
        "title": "Write a Policy People Can Use",
        "desc": "A fictional school permits “appropriate assistance”.",
        "tags": [
          "practical",
          "writing"
        ],
        "objectives": [
          "Build a usable document",
          "Choose words that can be applied",
          "The one-page policy prototype"
        ],
        "resources": [
          "r10"
        ],
        "prereqs": [
          17,
          18
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 20,
        "difficulty": "advanced",
        "title": "Test and Ratify Your Policy",
        "desc": "Three fictional stakeholders read your proposal: a pupil concerned about access, a teacher concerned about authorship, and a parent concerned about privacy.",
        "tags": [
          "presentation",
          "debate"
        ],
        "objectives": [
          "A hearing tests reasons",
          "Keep an amendment trail",
          "The ratification simulation"
        ],
        "resources": [
          "r10"
        ],
        "prereqs": [
          19
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 50,
        "difficulty": "intermediate",
        "title": "Build Something Small",
        "desc": "In one lesson, can you design a useful question checker for a fictional revision task? It should identify a missing answer or an unsupported claim.",
        "tags": [
          "practical",
          "build",
          "activity"
        ],
        "objectives": [
          "Use a complete small cycle",
          "The smallest useful invention"
        ],
        "resources": [
          "r1",
          "r3",
          "r9"
        ],
        "prereqs": [
          9,
          12,
          20
        ],
        "reviewed": "2026-10-26"
      }
    ]
  },
  {
    "id": 4,
    "title": "Capstone Project",
    "icon": "🚀",
    "colour": "#22c55e",
    "lessons": [
      {
        "id": 21,
        "difficulty": "intermediate",
        "title": "From User to Co-Creator",
        "desc": "A fictional project looks impressive, but its creator cannot explain the audience, the choices or what was tested.",
        "tags": [
          "introduction",
          "planning"
        ],
        "objectives": [
          "Make a claim you can demonstrate",
          "Show the judgement behind the output",
          "The co-creator contribution map"
        ],
        "resources": [
          "r1",
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 22,
        "difficulty": "advanced",
        "title": "Find a Problem Worth Solving",
        "desc": "“Build an AI revision app” names a solution.",
        "tags": [
          "planning",
          "writing"
        ],
        "objectives": [
          "Zoom from topic to need",
          "Try to disprove your assumption",
          "The problem-statement zoom lens"
        ],
        "resources": [
          "r1"
        ],
        "prereqs": [
          21
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 23,
        "difficulty": "advanced",
        "title": "Design the Safeguards In",
        "desc": "A fictional study planner asks for full names, marks and personal messages when it only needs a list of topics.",
        "tags": [
          "ethics",
          "planning"
        ],
        "objectives": [
          "Turn values into design decisions",
          "Document what the system is for",
          "The ethics-by-design blueprint"
        ],
        "resources": [
          "r9"
        ],
        "prereqs": [
          22
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 24,
        "difficulty": "advanced",
        "title": "Plan the Smallest Working Version",
        "desc": "Your fictional assistant needs a form, a model call, a source check and a result screen.",
        "tags": [
          "planning",
          "practical"
        ],
        "objectives": [
          "Draw the architecture as a journey",
          "Plan experiments, not just a wish list",
          "The architecture travel map"
        ],
        "resources": [
          "r1",
          "r6"
        ],
        "prereqs": [
          22
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 25,
        "difficulty": "advanced",
        "title": "Build a Prompt Test Kitchen",
        "desc": "A fictional event assistant must use the supplied date and location and ask when a price is missing.",
        "tags": [
          "practical",
          "framework"
        ],
        "objectives": [
          "Treat a prompt as a testable specification",
          "Compare controlled revisions",
          "The prompt test kitchen"
        ],
        "resources": [
          "r17",
          "r3"
        ],
        "prereqs": [
          24
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 26,
        "difficulty": "advanced",
        "title": "Draw the Awkward Branches",
        "desc": "A fictional room-booking assistant receives no date, two conflicting dates, or a request while the booking service is down.",
        "tags": [
          "planning",
          "analysis"
        ],
        "objectives": [
          "Make the decision path explicit",
          "An edge case can be ordinary to a user",
          "The edge-case comic"
        ],
        "resources": [
          "r1"
        ],
        "prereqs": [
          24
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 27,
        "difficulty": "advanced",
        "title": "Build the First Thin Slice",
        "desc": "Your project has ten planned features.",
        "tags": [
          "build",
          "practical"
        ],
        "objectives": [
          "Finish one narrow path",
          "Define done with evidence",
          "The foundation proof"
        ],
        "resources": [
          "r6"
        ],
        "prereqs": [
          25,
          26
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 28,
        "difficulty": "advanced",
        "title": "Give Your Prototype a Hard Review",
        "desc": "You like your prototype’s design.",
        "tags": [
          "review",
          "collaboration"
        ],
        "objectives": [
          "Make critique specific",
          "Decide what to change",
          "The critique worth keeping"
        ],
        "resources": [
          "r8"
        ],
        "prereqs": [
          27
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 29,
        "difficulty": "advanced",
        "title": "Sprint 1: Test the Riskiest Assumption",
        "desc": "Your project depends on an assistant extracting dates from notices.",
        "tags": [
          "build",
          "practical"
        ],
        "objectives": [
          "Choose an experiment before a feature",
          "The first experiment log"
        ],
        "resources": [
          "r6"
        ],
        "prereqs": [
          28
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 30,
        "difficulty": "advanced",
        "title": "Sprint 2: Repair the User Journey",
        "desc": "A fictional user finishes your form but cannot tell whether the result has been saved.",
        "tags": [
          "build",
          "practical"
        ],
        "objectives": [
          "Follow the task from the user’s position",
          "The user-path repair"
        ],
        "resources": [
          "r6",
          "r8"
        ],
        "prereqs": [
          29
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 31,
        "difficulty": "advanced",
        "title": "Sprint 3: Test Reliability",
        "desc": "A fictional assistant passes your demonstration once, then gives a different answer to the same input.",
        "tags": [
          "build",
          "testing"
        ],
        "objectives": [
          "Make tests repeatable",
          "Keep failure visible",
          "The reliability challenge"
        ],
        "resources": [
          "r6"
        ],
        "prereqs": [
          30
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 32,
        "difficulty": "advanced",
        "title": "Sprint 4: Make It Accessible",
        "desc": "Your fictional prototype looks clear on a large screen.",
        "tags": [
          "build",
          "practical"
        ],
        "objectives": [
          "Polish the interaction, not just the surface",
          "The accessibility redesign"
        ],
        "resources": [
          "r6",
          "r9"
        ],
        "prereqs": [
          31
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 33,
        "difficulty": "advanced",
        "title": "Sprint 5: Prepare a Reviewable Release",
        "desc": "A fictional release note says “accurate, safe and ready”.",
        "tags": [
          "build",
          "practical"
        ],
        "objectives": [
          "Publish the evidence with the claim",
          "Keep the handover usable",
          "The release-candidate receipt"
        ],
        "resources": [
          "r6"
        ],
        "prereqs": [
          32
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 34,
        "difficulty": "advanced",
        "title": "Audit the Project’s Consequences",
        "desc": "Your fictional planner works for a pupil with reliable internet and flexible time.",
        "tags": [
          "ethics",
          "assessment",
          "critical-thinking"
        ],
        "objectives": [
          "Follow a difficult case through the system",
          "Make a proportionate decision",
          "The ethical audit case file"
        ],
        "resources": [
          "r9"
        ],
        "prereqs": [
          33
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 35,
        "difficulty": "advanced",
        "title": "Pitch with Evidence",
        "desc": "Two fictional pitches promise the same benefit.",
        "tags": [
          "presentation",
          "practical"
        ],
        "objectives": [
          "Build an argument the audience can inspect",
          "Tag the status of every claim",
          "The pitch with evidence tags"
        ],
        "resources": [
          "r2"
        ],
        "prereqs": [
          34
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 36,
        "difficulty": "advanced",
        "title": "Rehearse for a Sceptical Audience",
        "desc": "A fictional presenter can explain every feature but runs out of time before showing the test results.",
        "tags": [
          "presentation",
          "review"
        ],
        "objectives": [
          "Rehearse the argument",
          "The difficult-audience rehearsal"
        ],
        "resources": [
          "r2",
          "r7",
          "r8"
        ],
        "prereqs": [
          35
        ],
        "reviewed": "2026-10-26"
      }
    ]
  },
  {
    "id": 5,
    "title": "Presentations & Reflection",
    "icon": "🎤",
    "colour": "#ef4444",
    "lessons": [
      {
        "id": 41,
        "difficulty": "intermediate",
        "title": "The Graduate Skill Stress Test",
        "desc": "A fictional employer receives two polished AI-assisted reports.",
        "tags": [
          "discussion",
          "research"
        ],
        "objectives": [
          "Look at the work within the role",
          "Make capability observable",
          "Design the graduate audition"
        ],
        "resources": [
          "r5"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 48,
        "difficulty": "intermediate",
        "title": "Thinking With, Thinking For",
        "desc": "Two fictional pupils use the same audio overview.",
        "tags": [
          "reflection",
          "discussion",
          "critical-thinking"
        ],
        "objectives": [
          "An output is not evidence of learning",
          "Apply the real rules for the task",
          "Audit the handover of thinking"
        ],
        "resources": [
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 37,
        "difficulty": "advanced",
        "title": "Present Your Project",
        "desc": "It is time to show what you made.",
        "tags": [
          "presentation",
          "assessment"
        ],
        "objectives": [
          "Make the evidence available",
          "The first premiere"
        ],
        "resources": [
          "r7"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 38,
        "difficulty": "advanced",
        "title": "Remix for a Second Audience",
        "desc": "Your first audience cared about how the prototype worked.",
        "tags": [
          "presentation",
          "assessment"
        ],
        "objectives": [
          "Change emphasis without changing the evidence",
          "The second audience remix"
        ],
        "resources": [
          "r7"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 39,
        "difficulty": "advanced",
        "title": "Defend Your Decisions",
        "desc": "Close the project files.",
        "tags": [
          "assessment",
          "viva"
        ],
        "objectives": [
          "A viva tests understanding",
          "The viva evidence drawer"
        ],
        "resources": [
          "r19"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 40,
        "difficulty": "advanced",
        "title": "Defend It Under a New Constraint",
        "desc": "Your project now has half the time, no access to its AI service, or a user who cannot use the original interface.",
        "tags": [
          "assessment",
          "viva"
        ],
        "objectives": [
          "Use a counterfactual to test the design",
          "The counterfactual viva"
        ],
        "resources": [
          "r19"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 42,
        "difficulty": "intermediate",
        "title": "The Personal Statement Audit",
        "desc": "A fictional applicant writes “I have always been passionate about engineering” but gives no example.",
        "tags": [
          "practical",
          "writing"
        ],
        "objectives": [
          "Use the current UCAS structure",
          "Preserve authorship and truth",
          "Audit an authentic-sounding paragraph"
        ],
        "resources": [
          "r17",
          "r3"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 43,
        "difficulty": "intermediate",
        "title": "Build a Learning Time Capsule",
        "desc": "Find an early claim you made about AI.",
        "tags": [
          "reflection",
          "discussion",
          "critical-thinking"
        ],
        "objectives": [
          "Reflect using artefacts",
          "Connect the course through one decision",
          "The learning time capsule"
        ],
        "resources": [
          "r4"
        ],
        "reviewed": "2026-10-26"
      },
      {
        "id": 44,
        "difficulty": "advanced",
        "title": "The AI Manifesto",
        "desc": "A fictional pupil promises “I will always use AI responsibly”.",
        "tags": [
          "writing",
          "reflection",
          "critical-thinking"
        ],
        "objectives": [
          "Make a principle usable",
          "Give your rules a review process",
          "Write the personal AI constitution"
        ],
        "resources": [
          "r11",
          "r4"
        ],
        "reviewed": "2026-10-26"
      }
    ]
  }
];

const RESOURCES = [
  {
    "id": "r1",
    "title": "Capstone Project Brief Template",
    "cat": "template",
    "desc": "Structured template for defining your capstone project scope, objectives and deliverables."
  },
  {
    "id": "r2",
    "title": "Pitch Deck Structure Guide",
    "cat": "template",
    "desc": "Step-by-step guide for building a compelling project pitch presentation."
  },
  {
    "id": "r3",
    "title": "Prompt Iteration Log",
    "cat": "template",
    "desc": "Log template for tracking prompt versions, outputs and quality improvements."
  },
  {
    "id": "r4",
    "title": "Reflective Essay Guide",
    "cat": "template",
    "desc": "Framework and prompts for writing reflective essays on your AI learning journey."
  },
  {
    "id": "r5",
    "title": "Skills Audit Template",
    "cat": "template",
    "desc": "Self-assessment template to audit your AI, technical and professional skills."
  },
  {
    "id": "r6",
    "title": "Sprint Diary Template",
    "cat": "template",
    "desc": "Daily and weekly sprint diary for tracking capstone project progress."
  },
  {
    "id": "r7",
    "title": "Presentation Assessment Rubric",
    "cat": "assessment",
    "desc": "Detailed rubric for assessing capstone presentations across multiple criteria."
  },
  {
    "id": "r8",
    "title": "Peer Review Feedback Form",
    "cat": "assessment",
    "desc": "Structured form for giving constructive peer feedback on projects."
  },
  {
    "id": "r9",
    "title": "Ethics Audit Checklist",
    "cat": "assessment",
    "desc": "Comprehensive checklist for conducting an ethical audit of AI projects."
  },
  {
    "id": "r10",
    "title": "AI Policy Drafting Template",
    "cat": "template",
    "desc": "Template for drafting formal AI acceptable use policies."
  },
  {
    "id": "r11",
    "title": "AI Manifesto Template",
    "cat": "template",
    "desc": "Guide and template for writing your personal AI manifesto."
  },
  {
    "id": "r12",
    "title": "AI Regulation: Compare the Actual Duties",
    "cat": "reference",
    "desc": "Compare scope, obligations and dates using official sources."
  },
  {
    "id": "r13",
    "title": "Policy Comparison Workshop",
    "cat": "reference",
    "desc": "Compare three fictional approaches and then test a real policy."
  },
  {
    "id": "r14",
    "title": "Copyright: A Rights and Contributions Brief",
    "cat": "debate",
    "desc": "Separate authorship, training, reuse and distribution."
  },
  {
    "id": "r15",
    "title": "Facial Recognition: The Evidence Hearing",
    "cat": "debate",
    "desc": "Test a fictional proposal with consistent questions."
  },
  {
    "id": "r16",
    "title": "Synthetic Media: Verification Checklist",
    "cat": "reference",
    "desc": "Check the claim and its provenance without pretending appearance proves authenticity."
  },
  {
    "id": "r17",
    "title": "PTFC: A Prompt You Can Test",
    "cat": "framework",
    "desc": "Use a template to state the task clearly, then evaluate the result."
  },
  {
    "id": "r18",
    "title": "AI Environmental Impact: Compare Without False Precision",
    "cat": "reference",
    "desc": "Define the task, boundary, units and uncertainty."
  },
  {
    "id": "r19",
    "title": "Viva Voce Question Bank",
    "cat": "assessment",
    "desc": "Bank of viva voce questions spanning all course themes and project areas."
  },
  {
    "id": "r20",
    "title": "AI Companions: A Design and Rights Case File",
    "cat": "reference",
    "desc": "Use fictional cases to examine responsibility without personal disclosure."
  }
];

const RESOURCE_CONTENT = {
  "r1": "<h4>Capstone Project Brief</h4>\n<div class=\"resource-template-section\"><h5>Project Title</h5><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Enter your project title...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Problem Statement</h5><textarea class=\"resource-field\" rows=\"4\" placeholder=\"What problem does your project address?\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Target Audience</h5><textarea class=\"resource-field\" rows=\"3\" placeholder=\"Who will use or benefit from this?\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Key Deliverables</h5><textarea class=\"resource-field\" rows=\"4\" placeholder=\"List your main deliverables...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Success Criteria</h5><textarea class=\"resource-field\" rows=\"3\" placeholder=\"How will you measure success?\"></textarea></div>",
  "r6": "<h4>Sprint Diary</h4>\n<div class=\"resource-template-section\"><h5>Sprint Goal</h5><textarea class=\"resource-field\" rows=\"2\" placeholder=\"What is the goal for this sprint?\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Tasks Completed</h5><textarea class=\"resource-field\" rows=\"4\" placeholder=\"What did you accomplish?\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Blockers & Challenges</h5><textarea class=\"resource-field\" rows=\"3\" placeholder=\"What slowed you down?\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Reflections</h5><textarea class=\"resource-field\" rows=\"3\" placeholder=\"What did you learn?\"></textarea></div>",
  "r9": "<h4>Ethics Audit Checklist</h4>\n<p>Work through each area and assess your project honestly.</p>\n<ul>\n<li><strong>Data Privacy</strong> — Does your project collect, store or process personal data? Are users informed?</li>\n<li><strong>Bias & Fairness</strong> — Could your system produce biased outcomes? Have you tested with diverse inputs?</li>\n<li><strong>Transparency</strong> — Can users understand how your system works and makes decisions?</li>\n<li><strong>Accountability</strong> — Who is responsible if something goes wrong?</li>\n<li><strong>Environmental Impact</strong> — Have you considered the computational cost?</li>\n<li><strong>Accessibility</strong> — Is your project accessible to users with different needs?</li>\n<li><strong>Misinformation Risk</strong> — Could your system generate or amplify false information?</li>\n</ul>",
  "r17": "<h4>PTFC: A Prompt You Can Test</h4><p>Use a template to state the task clearly, then evaluate the result.</p><section class=\"resource-template-section\"><h5>Persona, task, format, context</h5><p>A role can orient the response, but claiming expertise does not create it. State the task, audience, supplied information, constraints and output format. Add success criteria and instructions for missing information.</p></section><section class=\"resource-template-section\"><h5>Worked fictional example</h5><p>“Draft an invitation for pupils. Facts: Friday, 12:45, Room 4; price unknown. Use three short sentences. Preserve the facts, do not invent a price, and finish with the unanswered question.”</p></section><section class=\"resource-template-section\"><h5>Test the prompt</h5><p>Try normal, missing and contradictory information. Record expected and actual behaviour. Change one important instruction, retest and keep a remaining limitation.</p></section><section class=\"resource-template-section\"><h5>Choose the available route</h5><p>Use an approved tool if appropriate, or critique a written sample output on paper. Connected services and account features vary. No prompt formula or role claim guarantees truth, permission or safety.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://developers.openai.com/api/docs/guides/reasoning-best-practices\" target=\"_blank\" rel=\"noopener\">OpenAI: Reasoning best practices</a></li><li><a href=\"https://genai.owasp.org/llmrisk/llm01-prompt-injection/\" target=\"_blank\" rel=\"noopener\">OWASP: Prompt injection</a></li></ul>",
  "r2": "<h4>Pitch Deck Structure Guide</h4>\n<p>Build your pitch deck slide-by-slide. Each section below maps to one slide in your presentation.</p>\n<div class=\"resource-template-section\"><h5>Slide 1 — Hook / Problem</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Open with a striking statistic, question or story that makes the problem feel real. One sentence max.</p>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"e.g. &quot;Every year, 800,000 pupils fail to access the mental health support they need...&quot;\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 2 — Your Solution</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Describe your project in plain language. What does it do? How does it work?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Our project is... It works by... The key feature is...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 3 — Target Audience</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Who will use this? Be specific — age, context, needs.</p>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"Primary users: ... Secondary stakeholders: ...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 4 — Demo / Screenshot</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Describe what you will show — a live demo, walkthrough, or key screenshot. Note the 2–3 features to highlight.</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"We will demo... The key interactions to show are... We will highlight...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 5 — Ethical Considerations</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">What ethical risks exist and how have you addressed them? Panels expect this.</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Key risks identified: ... Mitigations built in: ... Trade-offs accepted: ...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 6 — What We Learned</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Reflect on the build process. What surprised you? What would you do differently?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Biggest technical challenge: ... Most important lesson: ... If we had more time: ...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Slide 7 — Q&amp;A Preparation</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Anticipate the three toughest questions you could be asked and draft your answers.</p>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"Q1: ... A: ...\nQ2: ... A: ...\nQ3: ... A: ...\"></textarea></div>",
  "r3": "<h4>Prompt Iteration Log</h4>\n<p>Log each version of your prompt here. Tracking iterations helps you understand what works and why.</p>\n<div class=\"resource-template-section\"><h5>Task / Goal</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">What are you trying to get the AI to produce?</p>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"e.g. Write a paragraph explaining neural networks to a Year 9 pupil...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Iteration 1</h5>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Prompt used</label>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"Paste your first prompt here...\"></textarea>\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Output quality (1–5) &amp; notes</label>\n<input class=\"resource-field\" placeholder=\"Score: _/5 — What was good? What was missing?\"></div>\n<div class=\"resource-template-section\"><h5>Iteration 2</h5>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">What you changed and why</label>\n<input class=\"resource-field\" placeholder=\"I added / removed / changed... because...\">\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Prompt used</label>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"Paste your revised prompt here...\"></textarea>\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Output quality (1–5) &amp; notes</label>\n<input class=\"resource-field\" placeholder=\"Score: _/5 — Improvement? New problems?\"></div>\n<div class=\"resource-template-section\"><h5>Iteration 3</h5>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">What you changed and why</label>\n<input class=\"resource-field\" placeholder=\"I added / removed / changed... because...\">\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Prompt used</label>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"Paste your revised prompt here...\"></textarea>\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Output quality (1–5) &amp; notes</label>\n<input class=\"resource-field\" placeholder=\"Score: _/5 — Improvement? New problems?\"></div>\n<div class=\"resource-template-section\"><h5>Final Reflection</h5>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"What made the biggest difference across iterations? What prompt engineering principle did you discover?\"></textarea></div>",
  "r4": "<h4>Reflective Essay Guide</h4>\n<p>Use this framework to write a structured reflective essay on your AI learning journey. Aim for 600–900 words.</p>\n<ul>\n<li><strong>Introduction:</strong> Set the scene — where were you when this course began? What did you think AI was?</li>\n<li><strong>Key Turning Point:</strong> Identify the lesson, activity or moment that most changed your thinking.</li>\n<li><strong>Critical Incident:</strong> Describe one specific thing you built, said or did. Use concrete detail.</li>\n<li><strong>Analysis:</strong> Why did this matter? Connect it to wider themes (ethics, society, your future).</li>\n<li><strong>Conclusion:</strong> Where are you now? What will you do differently because of this course?</li>\n</ul>\n<div class=\"resource-template-section\"><h5>Introduction Draft</h5>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"Before this course, I thought AI was... My relationship with AI tools was... I expected this course would...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Key Turning Point</h5>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"The lesson / activity that most changed my thinking was... because...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Critical Incident (What happened?)</h5>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"Describe the specific moment in detail: what you did, what the AI produced, how you felt, what you noticed...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Analysis (Why did it matter?)</h5>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"This matters because... It connects to the wider theme of... In terms of my future...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Conclusion — Your Position Now</h5>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"My view of AI has changed from... to... Going forward, I will... The most important thing I am taking away is...\"></textarea></div>\n<div class=\"resource-template-section\"><h5>Useful Sentence Starters</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">This made me realise... / I was surprised to find... / Contrary to my initial assumption... / What struck me most was... / In hindsight... / I now understand that...</p></div>",
  "r5": "<h4>Skills Audit Template</h4>\n<p>Rate yourself honestly in each area using the scale: <strong>1 = Novice</strong> | <strong>2 = Developing</strong> | <strong>3 = Competent</strong> | <strong>4 = Proficient</strong> | <strong>5 = Expert</strong></p>\n<div class=\"resource-template-section\"><h5>AI Literacy Skills</h5>\n<ul>\n<li>Understanding how LLMs work (training, tokens, temperature) — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Identifying AI strengths, limitations and failure modes — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Evaluating AI-generated content critically — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Applying ethical frameworks to AI use — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Prompt Engineering Skills</h5>\n<ul>\n<li>Writing clear, structured prompts (PTFC framework) — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Iterating prompts to improve outputs — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Using AI for research and fact-checking — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Maintaining academic integrity when using AI — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Technical &amp; Project Skills</h5>\n<ul>\n<li>Planning and managing a project (sprints, milestones) — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Building / prototyping an AI-powered tool — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Testing and debugging systematically — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Documenting decisions and trade-offs — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Professional Skills</h5>\n<ul>\n<li>Communicating technical ideas clearly — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Giving and receiving constructive feedback — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Presenting confidently to an audience — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n<li>Adapting to new tools and challenges — Rate: <input class=\"resource-field\" style=\"width:60px;display:inline\" placeholder=\"1–5\"></li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Priority Development Areas</h5>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Based on my ratings, the 3 areas I most want to develop are... I will work on these by...\"></textarea></div>",
  "r14": "<h4>Copyright: A Rights and Contributions Brief</h4><p>Separate authorship, training, reuse and distribution.</p><section class=\"resource-template-section\"><h5>Separate jurisdictions</h5><p>US Copyright Office guidance centres human authorship. The UK also has specific computer-generated-work provisions; their application and reform are debated. Do not import a US conclusion into a UK answer.</p></section><section class=\"resource-template-section\"><h5>Separate acts</h5><p>Using training material, generating an output and publishing that output raise different questions. A publicly available source is not automatically licensed for every reuse. A tool’s terms do not settle every third-party right.</p></section><section class=\"resource-template-section\"><h5>Make two strong arguments</h5><p>For a fictional AI-assisted poster, write one argument for protecting the human contribution and one concern about rights in borrowed material. Avoid claiming either position settles all cases.</p></section><section class=\"resource-template-section\"><h5>Keep a provenance label</h5><p>Record human choices, generated elements, borrowed sources, licence evidence and unresolved questions. State jurisdiction and date. Reports and proposals must not be presented as enacted reform or universal court rulings.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence\" target=\"_blank\" rel=\"noopener\">UK Government: Copyright and AI report, March 2026</a></li><li><a href=\"https://copyright.gov/policy/artificial-intelligence/\" target=\"_blank\" rel=\"noopener\">US Copyright Office: AI reports</a></li></ul><section class=\"resource-template-section\"><label>Your working 1 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 2 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 3 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"3\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 4 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section>",
  "r15": "<h4>Facial Recognition: The Evidence Hearing</h4><p>Test a fictional proposal with consistent questions.</p><section class=\"resource-template-section\"><h5>Know the task</h5><p>Verification asks whether a face matches a claimed identity. Identification searches for a match among candidates. Gender classification is a different task. The 2018 Gender Shades study examined three commercial gender-classification products; its historical figures are not a current scorecard for all face recognition.</p></section><section class=\"resource-template-section\"><h5>Know the errors</h5><p>False matches and false non-matches have different consequences. Performance depends on the algorithm, threshold, image quality, population and setting. NIST evaluation results need that context.</p></section><section class=\"resource-template-section\"><h5>Work a fictional example</h5><p>If 10,000 non-matching comparisons each have a 1% false-match probability, the expected count is 100 false matches. This is a teaching assumption, not a measurement of a product or the probability that a flagged person is guilty.</p></section><section class=\"resource-template-section\"><h5>Write three testimonies</h5><p>Represent a user seeking safety, a person wrongly flagged and an operator responsible for review. Decide whether to trial, revise or reject the proposal. Include a less intrusive alternative, limits and an appeal route.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://pages.nist.gov/frvt/html/frvt11.html\" target=\"_blank\" rel=\"noopener\">NIST: Face recognition evaluation</a></li><li><a href=\"https://proceedings.mlr.press/v81/buolamwini18a.html\" target=\"_blank\" rel=\"noopener\">Gender Shades — original 2018 study</a></li></ul>",
  "r16": "<h4>Synthetic Media: Verification Checklist</h4><p>Check the claim and its provenance without pretending appearance proves authenticity.</p><section class=\"resource-template-section\"><h5>Stop and specify</h5><p>Write the exact claim, who is said to be involved, the date, place and why it matters. Do not generate an impersonation or accuse a real person for this exercise.</p></section><section class=\"resource-template-section\"><h5>Trace the source</h5><p>Find the original upload or document, inspect context and seek relevant independent corroboration. Several copied stories may have only one source.</p></section><section class=\"resource-template-section\"><h5>Use technical signals cautiously</h5><p>Odd blinking, hands or lighting do not prove a fake; convincing media can still be synthetic. Detector outputs are fallible. Content Credentials can support provenance checks but do not prove that a depicted claim is true; missing credentials do not prove fakery.</p></section><section class=\"resource-template-section\"><h5>Make a bounded decision</h5><p>Label supported, contradicted or not established. For a fictional school-closure clip, check the school’s official announcement before sharing. Preserve the source and date, and explain any uncertainty.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html\" target=\"_blank\" rel=\"noopener\">C2PA: Content Credentials explained</a></li><li><a href=\"https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf\" target=\"_blank\" rel=\"noopener\">NIST: Synthetic content transparency</a></li></ul>",
  "r18": "<h4>AI Environmental Impact: Compare Without False Precision</h4><p>Define the task, boundary, units and uncertainty.</p><section class=\"resource-template-section\"><h5>Different stages and measures</h5><p>Separate hardware manufacture, training and inference. Electricity, greenhouse-gas emissions and water describe different quantities. A data-centre total is not a measurement of one AI prompt.</p></section><section class=\"resource-template-section\"><h5>A worked fictional comparison</h5><p>Assume 200 pupils generate ten images each, at a hypothetical 1–5 Wh per image: 2,000 images and 2–10 kWh. Generating two each gives 400 images and 0.4–2 kWh. The 80% reduction follows from these assumptions; it is not an observed saving for a real product.</p></section><section class=\"resource-template-section\"><h5>Make the missing data visible</h5><p>Ask about model, hardware, output length, location, energy supply, cooling and what the estimate includes. Record source date and uncertainty. Do not convert an industry average into a measurement of your own task.</p></section><section class=\"resource-template-section\"><h5>Make a useful recommendation</h5><p>Compare the quality of the learning outcome and a simpler alternative. Greater efficiency can encourage more use, so lower cost per task need not reduce total impact.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary\" target=\"_blank\" rel=\"noopener\">IEA: Key Questions on Energy and AI, 2026</a></li></ul>",
  "r19": "<h4>Viva Voce Question Bank</h4>\n<p>Practise answering these questions out loud — not by reading a prepared script. Your examiner will probe, so prepare to go deeper than your initial answer.</p>\n<div class=\"resource-template-section\"><h5>Understanding Your Project</h5>\n<ul>\n<li>Walk me through how your project works from the user's perspective.</li>\n<li>What problem were you trying to solve, and how do you know it was a real problem?</li>\n<li>Why did you choose this approach rather than an alternative?</li>\n<li>What is the single most technically interesting decision you made, and why did you make it?</li>\n<li>If you had twice as much time, what would you add first?</li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Ethical Analysis</h5>\n<ul>\n<li>What is the biggest ethical risk your project creates? What did you do about it?</li>\n<li>Who could be harmed by your project — directly or indirectly?</li>\n<li>How does your project handle user data? Did you consider privacy by design?</li>\n<li>Could your project produce biased outputs? How did you test for this?</li>\n<li>If your project was deployed at scale to millions of users, what new risks would emerge?</li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Technical and Design Decisions</h5>\n<ul>\n<li>Why did you choose [specific AI tool or model]? What alternatives did you consider?</li>\n<li>Show me your most important prompt. Why is it structured the way it is?</li>\n<li>What was the hardest bug or problem you encountered? How did you solve it?</li>\n<li>How did you test that your system works as intended?</li>\n<li>What assumptions did you make that turned out to be wrong?</li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Reflection and Learning</h5>\n<ul>\n<li>What is the most important thing you learned — not about AI, but about yourself as a learner?</li>\n<li>What would you do completely differently if you started again?</li>\n<li>How has this project changed how you think about AI?</li>\n<li>What do you know now that you wish you had known at the start?</li>\n</ul></div>\n<div class=\"resource-template-section\"><h5>Connecting to the Wider Course</h5>\n<ul>\n<li>Which lesson from the course was most useful when building your project? Why?</li>\n<li>How does your project relate to the AI regulation landscape we studied?</li>\n<li>Does your project raise questions about human oversight? Where is the human in the loop?</li>\n<li>If you were writing the policy that governed use of your own project, what would it say?</li>\n</ul></div>",
  "r8": "<h4>Peer Review Feedback Form</h4>\n<p>Give honest, specific feedback. Vague comments like \"it was good\" are not helpful. Use evidence from what you actually saw or read.</p>\n<div class=\"resource-template-section\"><h5>Project Reviewed</h5>\n<input class=\"resource-field\" placeholder=\"Pupil / team name and project title...\">\n</div>\n<div class=\"resource-template-section\"><h5>Two Stars — What is working well?</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Identify two specific strengths. Say what they are AND why they work.</p>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Star 1</label>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"The [specific element] works well because...\"></textarea>\n<label style=\"font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block\">Star 2</label>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"I particularly liked [specific element] because...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>One Wish — What could be improved?</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">One actionable suggestion. Be specific — say what to change and how, not just that something is weak.</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"I think the project would be stronger if... specifically by...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Ethical Consideration</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Is there an ethical dimension the creator may not have considered?</p>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"Have you considered what happens if... / A potential risk I noticed was...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>One Question for the Creator</h5>\n<textarea class=\"resource-field\" rows=\"2\" placeholder=\"I'm curious about why you chose... / What would happen if a user...\"></textarea>\n</div>",
  "r10": "<h4>AI Policy Drafting Template</h4>\n<p>Use this template to draft a formal AI Acceptable Use Policy. Each section includes guidance notes. Delete the guidance notes before submitting your final policy.</p>\n<div class=\"resource-template-section\"><h5>Section 1 — Purpose and Scope</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">State clearly what this policy covers, who it applies to, and why it exists. Avoid vague language — be specific about which AI tools and which people are covered.</p>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"This policy governs the use of artificial intelligence tools by [pupils / staff / both] at [school name]. It applies to all AI-assisted activities including [list specific tools or categories]. The purpose of this policy is to...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Section 2 — Definitions</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Define key terms so there is no ambiguity. What counts as an AI tool? What is AI-generated content? What is acceptable use?</p>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"'AI tool' means any software using machine learning to generate text, images, code, or other content, including but not limited to: ChatGPT, Claude, Gemini, Copilot, and Midjourney.\n'AI-assisted work' means...\n'Acceptable use' means...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Section 3 — Acceptable Uses</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Be specific. 'Acceptable use' means different things in different contexts — research, drafting, coding, revision, and accessibility all have different norms.</p>\n<textarea class=\"resource-field\" rows=\"5\" placeholder=\"The following uses of AI tools are permitted:\n• Using AI to research topics, provided all AI-generated claims are independently verified\n• Using AI to generate a first draft, provided the pupil substantially revises and takes ownership\n• Using AI for accessibility purposes (e.g. text-to-speech, grammar assistance)\n• [Add your own...]\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Section 4 — Prohibited Uses</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Be equally specific about what is not allowed. Include academic integrity implications.</p>\n<textarea class=\"resource-field\" rows=\"5\" placeholder=\"The following uses are prohibited:\n• Submitting AI-generated content as your own original work in any assessed task\n• Using AI to generate exam answers or controlled assessment responses\n• Using AI to fabricate citations, references, or evidence\n• [Add your own...]\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Section 5 — Transparency Requirements</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">How should pupils disclose AI use? A simple, clear mechanism is better than a complex one nobody follows.</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Where AI tools have been used in the preparation of any work, pupils must disclose this by [method — e.g. adding a brief note at the end of the submission stating which tool was used and how]...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Section 6 — Enforcement and Review</h5>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Breaches of this policy will be treated as [academic misconduct / a disciplinary matter]. This policy will be reviewed annually. Last reviewed: [date]. Next review: [date].\"></textarea>\n</div>",
  "r11": "<h4>AI Manifesto Template</h4>\n<p>Your AI Manifesto is a personal document — your principles for how you will live and work with AI. It should be honest, specific, and forward-looking. Aim for 400–600 words.</p>\n<div class=\"resource-template-section\"><h5>Opening Statement — Who are you, and where do you stand?</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">Don't start with a definition of AI. Start with yourself. What does AI mean in your life right now?</p>\n<textarea class=\"resource-field\" rows=\"4\" placeholder=\"I am writing this at a moment when... / My relationship with AI began when... / I believe that AI is...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Principle 1 — On using AI honestly</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">What does honest AI use mean to you? When will you disclose it? When will you refuse to use it?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"I commit to... / I will always... / I will never use AI to...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Principle 2 — On thinking critically about AI outputs</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">What habits will you cultivate to avoid over-reliance or uncritical acceptance?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"When AI gives me an answer, I will... / I will question AI most when... / I will not accept AI output without...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Principle 3 — On AI and fairness</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">How will you think about who benefits and who is harmed by the AI tools you use?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"I believe AI should be... / I am concerned about... / When I use AI, I will consider its impact on...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Principle 4 — On AI in your future career</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">How will you use AI as a collaborator, not a replacement for your own thinking?</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"In my future career, I want to use AI to... / I will protect my ability to... / The skills I will not outsource to AI are...\"></textarea>\n</div>\n<div class=\"resource-template-section\"><h5>Closing Commitment</h5>\n<p style=\"font-size:.8rem;color:var(--text-muted)\">End with a statement you actually mean — not a slogan, but a real commitment.</p>\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"The most important thing I have learned about AI this year is... / Going forward, I commit to... / I want to be someone who...\"></textarea>\n</div>",
  "r12": "<h4>AI Regulation: Compare the Actual Duties</h4><p>Compare scope, obligations and dates using official sources.</p><section class=\"resource-template-section\"><h5>Start with a use case</h5><p>Use a fictional scholarship-shortlisting system. Identify its intended use, the organisation using it, affected people and jurisdiction. A comparison without the same use case can mislead.</p></section><section class=\"resource-template-section\"><h5>European Union</h5><p>The AI Act has staged implementation and different rules for different systems and roles. Open the current official timetable. Record the provision, who it applies to and the application date. Do not assume the whole law applies from one headline date.</p></section><section class=\"resource-template-section\"><h5>United Kingdom</h5><p>Check relevant data-protection, equality, education and safeguarding requirements alongside current AI-specific developments. “No single comprehensive AI act” does not mean “no rules”. Use DfE school guidance as one entry point, not a complete legal account.</p></section><section class=\"resource-template-section\"><h5>Your comparison</h5><p>For each approach, record the official source, checked date, status (law, proposal or guidance), relevant duty and an unresolved question. If offline, mark dates and legal details as needing verification; continue analysing the fictional policy.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline\" target=\"_blank\" rel=\"noopener\">European Commission: AI Act implementation timeline</a></li><li><a href=\"https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools\" target=\"_blank\" rel=\"noopener\">DfE: Generative AI and data protection in schools</a></li></ul>",
  "r13": "<h4>Policy Comparison Workshop</h4><p>Compare three fictional approaches and then test a real policy.</p><section class=\"resource-template-section\"><h5>Fictional policy A: permission by exception</h5><p>AI assistance in assessed work requires explicit permission in the brief. What does this clarify? What questions remain about practice, accessibility and process evidence?</p></section><section class=\"resource-template-section\"><h5>Fictional policy B: declared assistance</h5><p>Specified forms of assistance are allowed and must be recorded. Declaration does not authorise every use. Define what the learner must demonstrate themselves.</p></section><section class=\"resource-template-section\"><h5>Fictional policy C: task-specific rules</h5><p>Each task states permitted tools, actions and disclosure. This can be precise, but consistency and clear examples matter.</p></section><section class=\"resource-template-section\"><h5>Independent comparison</h5><p>Apply all three to a hint, feedback and a generated final answer. Identify an ambiguity and repair it. For an actual institution, check its current official policy and the specific task; these fictional cards do not describe named universities.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://www.gov.uk/government/publications/artificial-intelligence-malpractice-and-assessment-advice-note/artificial-intelligence-malpractice-and-assessment-advice-note-accessible\" target=\"_blank\" rel=\"noopener\">Ofqual: AI malpractice and assessment, 2026</a></li></ul><section class=\"resource-template-section\"><label>Your working 1 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 2 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 3 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"2\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 4 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"3\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section><section class=\"resource-template-section\"><label>Your working 5 — earlier notes remain editable here</label><textarea class=\"resource-field\" rows=\"3\" placeholder=\"Record your analysis, evidence and questions.\"></textarea></section>",
  "r7": "<h4>Presentation Assessment Rubric</h4>\n<p>Assessors use this rubric to evaluate capstone presentations. Each criterion is scored 1–4.</p>\n<div class=\"resource-template-section\"><h5>Criterion 1: Project Understanding</h5>\n<ul>\n<li><strong>4 — Excellent:</strong> Demonstrates deep understanding of all aspects; handles complex questions fluently.</li>\n<li><strong>3 — Good:</strong> Clear understanding of the project; answers most questions confidently.</li>\n<li><strong>2 — Developing:</strong> Basic understanding evident; some gaps when probed.</li>\n<li><strong>1 — Beginning:</strong> Limited understanding; struggles to explain key decisions.</li>\n</ul>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Score &amp; Evidence</label>\n<input class=\"resource-field\" placeholder=\"Score: _/4 — Notes: ...\"></div>\n<div class=\"resource-template-section\"><h5>Criterion 2: Ethical Analysis</h5>\n<ul>\n<li><strong>4 — Excellent:</strong> Proactively identifies ethical tensions; nuanced discussion of trade-offs.</li>\n<li><strong>3 — Good:</strong> Addresses main ethical considerations with reasonable depth.</li>\n<li><strong>2 — Developing:</strong> Mentions ethics but analysis is surface-level.</li>\n<li><strong>1 — Beginning:</strong> Ethical considerations absent or only mentioned when prompted.</li>\n</ul>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Score &amp; Evidence</label>\n<input class=\"resource-field\" placeholder=\"Score: _/4 — Notes: ...\"></div>\n<div class=\"resource-template-section\"><h5>Criterion 3: Communication &amp; Clarity</h5>\n<ul>\n<li><strong>4 — Excellent:</strong> Articulate, well-paced, engages the audience; technical concepts made accessible.</li>\n<li><strong>3 — Good:</strong> Clear delivery; mostly accessible language; good structure.</li>\n<li><strong>2 — Developing:</strong> Understandable but some jargon or pacing issues.</li>\n<li><strong>1 — Beginning:</strong> Difficult to follow; relies heavily on notes or slides.</li>\n</ul>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Score &amp; Evidence</label>\n<input class=\"resource-field\" placeholder=\"Score: _/4 — Notes: ...\"></div>\n<div class=\"resource-template-section\"><h5>Criterion 4: Technical Quality</h5>\n<ul>\n<li><strong>4 — Excellent:</strong> Polished, functional demo; thoughtful design decisions explained.</li>\n<li><strong>3 — Good:</strong> Working demo with minor issues; key decisions justified.</li>\n<li><strong>2 — Developing:</strong> Partial demo or prototype; some decisions unexplained.</li>\n<li><strong>1 — Beginning:</strong> Demo not functional; limited evidence of technical work.</li>\n</ul>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Score &amp; Evidence</label>\n<input class=\"resource-field\" placeholder=\"Score: _/4 — Notes: ...\"></div>\n<div class=\"resource-template-section\"><h5>Criterion 5: Reflection &amp; Growth</h5>\n<ul>\n<li><strong>4 — Excellent:</strong> Insightful reflection; honest about challenges; clear sense of learning.</li>\n<li><strong>3 — Good:</strong> Genuine reflection; identifies what they would do differently.</li>\n<li><strong>2 — Developing:</strong> Some reflection but mostly descriptive rather than analytical.</li>\n<li><strong>1 — Beginning:</strong> Little evidence of reflection; challenges not acknowledged.</li>\n</ul>\n<label style=\"font-size:.8rem;color:var(--text-muted)\">Score &amp; Evidence</label>\n<input class=\"resource-field\" placeholder=\"Score: _/4 — Notes: ...\"></div>\n<div class=\"resource-template-section\"><h5>Overall Score &amp; Summary Feedback</h5>\n<input class=\"resource-field\" placeholder=\"Total: _/20\">\n<textarea class=\"resource-field\" rows=\"3\" placeholder=\"Strengths: ...\nAreas for development: ...\nStand-out moment: ...\"></textarea></div>",
  "r20": "<h4>AI Companions: A Design and Rights Case File</h4><p>Use fictional cases to examine responsibility without personal disclosure.</p><section class=\"resource-template-section\"><h5>Four fictional cases</h5><p>A study companion discourages a pupil from asking a teacher; a game companion pressures a user to renew a subscription; an app makes its deletion control hard to find; a provider changes a companion’s behaviour without a clear explanation. These are teaching cases, not allegations about named products.</p></section><section class=\"resource-template-section\"><h5>Design questions</h5><p>Who controls the interaction? Are persuasive messages or incentives visible? Can a user pause, leave, delete information and get human help? Do safeguards work under pressure as well as in a demonstration?</p></section><section class=\"resource-template-section\"><h5>Rights and responsibility</h5><p>UNICEF’s June 2026 brief examines child-rights risks and policy responses. Treat it as a dated analysis. Distinguish recommended safeguards from binding duties in a particular jurisdiction.</p></section><section class=\"resource-template-section\"><h5>Your evidence</h5><p>Choose a case, map the risk and responsible role, and redesign one interaction. A neutral game or study-assistant case is available throughout; no account, relationship history or personal disclosure is required. If the topic raises a concern, speak to a trusted adult or school safeguarding contact.</p></section><p><strong>Reviewed 26 October 2026.</strong></p><ul><li><a href=\"https://www.unicef.org/documents/when-ai-becomes-friend-child-rights-risks\" target=\"_blank\" rel=\"noopener\">UNICEF: AI companions and children’s rights, June 2026</a></li><li><a href=\"https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools\" target=\"_blank\" rel=\"noopener\">DfE: Generative AI and data protection in schools</a></li><li><a href=\"https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline\" target=\"_blank\" rel=\"noopener\">European Commission: AI Act implementation timeline</a></li></ul>"
};

const LESSON_SLIDES = {};

function generateSlides(lesson, unit) {
  if (LESSON_SLIDES[lesson.id]) return LESSON_SLIDES[lesson.id];

  const slides = [];

  // Slide 1: Hook
  slides.push({
    type: 'hook',
    title: lesson.title,
    body: lesson.desc,
    unitLabel: 'Unit ' + (unit.id + 1) + ': ' + unit.title
  });

  // Slide 2-N: One concept slide per objective
  lesson.objectives.forEach((obj, i) => {
    slides.push({
      type: 'concept',
      title: obj,
      body: 'Explore this learning objective through guided discussion, examples, and activities.',
      index: i + 1,
      total: lesson.objectives.length
    });
  });

  // Discussion slide
  slides.push({
    type: 'discussion',
    title: 'Discussion & Reflection',
    questions: lesson.objectives.map((obj, i) => ({
      num: i + 1,
      text: 'How does "' + obj.toLowerCase() + '" connect to your own experience?'
    }))
  });

  // Summary slide
  slides.push({
    type: 'summary',
    title: 'Key Takeaways',
    points: lesson.objectives.map(obj => ({
      icon: '💡',
      text: obj
    }))
  });

  LESSON_SLIDES[lesson.id] = slides;
  return slides;
}

/* ── Glossary ─────────────────────────────────── */
const GLOSSARY = [
  {
    "term": "AI Literacy",
    "definition": "The technical knowledge, durable skills and future-ready attitudes needed to thrive in a world influenced by AI. It enables learners to engage with, create with, manage and shape AI while critically evaluating its benefits, risks and ethics. AI literacy is more than tool use — interacting with a chatbot does not by itself build it (OECD/EU AILit Framework, 2026).",
    "lessons": []
  },
  {
    "term": "AILit Framework (Engage · Create · Manage · Shape)",
    "definition": "The OECD/European Union AI Literacy Framework (2026) for primary and secondary education. It organises AI literacy into four progressive domains: Engage with AI (be a critical, responsible participant), Create with AI (use AI as a creative partner while keeping human agency), Manage AI (divide work intentionally between humans and AI) and Shape AI (improve AI systems to reflect human values). It feeds the PISA 2029 Media & AI Literacy assessment.",
    "lessons": []
  },
  {
    "term": "Algorithm",
    "definition": "A step-by-step set of instructions for solving a problem or completing a task. In AI, algorithms process data to learn patterns and make decisions.",
    "lessons": [
      1,
      3,
      5
    ]
  },
  {
    "term": "Algorithmic Justice League",
    "definition": "Organisation founded by Joy Buolamwini in 2016 to fight algorithmic bias and promote equitable AI. Advocates for accountability in automated decision-making.",
    "lessons": [
      5
    ]
  },
  {
    "term": "Anthropomorphism (of AI)",
    "definition": "Attributing human traits or motives to an AI system. Fluent or caring language does not establish feelings, awareness or understanding. Describe observed behaviour separately from claims about internal experience.",
    "lessons": []
  },
  {
    "term": "API (Application Programming Interface)",
    "definition": "A set of rules and protocols that allows different software systems to communicate. AI APIs let developers send data to an AI model and receive outputs.",
    "lessons": [
      27,
      29
    ]
  },
  {
    "term": "Automation Bias",
    "definition": "The tendency for humans to over-rely on automated systems, deferring to AI recommendations even when they have good reason to disagree.",
    "lessons": [
      8
    ]
  },
  {
    "term": "Backpropagation",
    "definition": "An algorithm for calculating gradients through a network. An optimiser can use those gradients to adjust parameters during training; the gradient calculation and the update are distinct steps.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Bias (in AI)",
    "definition": "Systematic errors in AI outputs that arise from skewed training data, flawed assumptions, or unrepresentative datasets. Can be historical, representational, measurement, label, or selection bias.",
    "lessons": [
      5,
      23,
      34
    ]
  },
  {
    "term": "Black Box",
    "definition": "An AI system whose internal decision-making process is opaque — you can see the inputs and outputs but not understand how it arrived at its conclusion.",
    "lessons": [
      4
    ]
  },
  {
    "term": "Chain-of-Thought Reasoning",
    "definition": "Intermediate reasoning steps used in some prompting and model workflows. A visible explanation is not necessarily a faithful internal trace. Ask for checkable results and concise justifications, and follow model-specific guidance.",
    "lessons": [
      9,
      12
    ]
  },
  {
    "term": "COMPAS",
    "definition": "A proprietary risk-assessment instrument used in parts of the US criminal-justice system. Debate about its evaluation illustrates how different fairness measures and error consequences can conflict; claims need the original data and context.",
    "lessons": [
      4,
      5
    ]
  },
  {
    "term": "Cognitive Forcing Function",
    "definition": "A design that requires an initial judgement before assistance is shown, such as attempting a problem before revealing a hint. Its effectiveness depends on the task and implementation; it is not a guarantee against overreliance.",
    "lessons": []
  },
  {
    "term": "Cognitive Offloading",
    "definition": "Using an external aid to carry out mental work. It can help with a task, but may remove practice the learner needs. Test what the learner can do unaided rather than inferring learning from a polished output.",
    "lessons": []
  },
  {
    "term": "Copyright (AI-generated)",
    "definition": "Rights depend on jurisdiction, human contribution and the activity involved. US human-authorship guidance and UK computer-generated-work provisions differ. Training, output authorship and reuse are separate questions requiring current sources.",
    "lessons": [
      10
    ]
  },
  {
    "term": "Dark Patterns",
    "definition": "User interface design techniques that manipulate users into making choices they would not otherwise make — such as making privacy settings deliberately confusing.",
    "lessons": [
      6
    ]
  },
  {
    "term": "Data Broker",
    "definition": "A business that collects or aggregates data and supplies it to others. Investigate the particular source, purpose, permissions and recipients rather than assuming every broker operates identically.",
    "lessons": [
      6
    ]
  },
  {
    "term": "Deepfake",
    "definition": "Synthetic or manipulated media that can depict a person saying or doing something they did not. Methods vary; visual imperfections and detector scores alone do not establish authenticity.",
    "lessons": [
      13
    ]
  },
  {
    "term": "Deep Learning",
    "definition": "A subset of machine learning using neural networks with many layers (hence \"deep\"). Powers most modern AI including image recognition, language models, and speech synthesis.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Deontological Ethics",
    "definition": "An ethical framework that judges actions by whether they follow moral rules, regardless of consequences. \"Never deliberately harm an innocent person\" is a deontological principle.",
    "lessons": [
      7
    ]
  },
  {
    "term": "EU AI Act",
    "definition": "EU legislation with duties that depend on the system, use and responsible role, implemented in stages. Check the current official timetable and relevant provision; other laws may also apply.",
    "lessons": [
      16,
      17,
      18
    ]
  },
  {
    "term": "Explainable AI (XAI)",
    "definition": "A growing field dedicated to making AI decision-making transparent and understandable to humans. Techniques include LIME, SHAP, and attention visualisation.",
    "lessons": [
      4
    ]
  },
  {
    "term": "Facial Recognition",
    "definition": "Matching facial information to verify a claimed identity or search among candidates. Error rates depend on the algorithm, threshold, data and setting. It is distinct from classifying gender from images.",
    "lessons": [
      5,
      14
    ]
  },
  {
    "term": "Fine-tuning",
    "definition": "Further training of an existing model on selected data or objectives. It changes parameters and differs from supplying documents in the current context. Effects and costs depend on the method and task.",
    "lessons": [
      12,
      25
    ]
  },
  {
    "term": "Frontier Model",
    "definition": "A context-dependent term for a model near the leading edge of capability at a given time. It is not a fixed product list or a guarantee of reliability.",
    "lessons": [
      16
    ]
  },
  {
    "term": "Gemini",
    "definition": "Google’s family of AI models and related products. Tools, modalities and account controls differ by version and service; check current documentation for the actual product.",
    "lessons": [
      9,
      12,
      48
    ]
  },
  {
    "term": "Generalisation",
    "definition": "Useful performance on unseen examples in a relevant setting. A successful test does not establish that a model has learned causes or will work in a different population.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Generative AI",
    "definition": "AI systems that can create new content — text, images, code, music, video — rather than just classifying or predicting. Includes LLMs, DALL-E, Midjourney, and Sora.",
    "lessons": [
      1,
      10,
      42
    ]
  },
  {
    "term": "GDPR",
    "definition": "Data-protection rules governing personal-data processing. EU GDPR and UK GDPR are distinct regimes; lawful basis, transparency, minimisation and people’s rights matter. Consent is not the only possible lawful basis.",
    "lessons": [
      6,
      16
    ]
  },
  {
    "term": "Gradient Descent",
    "definition": "The optimisation algorithm that trains neural networks. It calculates the direction that reduces error (the gradient) and takes a step in that direction, iterating until the model improves.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Hallucination",
    "definition": "When an AI model generates confident, fluent text that is factually incorrect or entirely fabricated. A fundamental limitation of LLMs that predict probable text rather than verified facts.",
    "lessons": [
      2,
      9,
      39
    ]
  },
  {
    "term": "Human-in-the-Loop",
    "definition": "A system design where AI makes recommendations but a human makes the final decision. Considered essential for high-stakes domains like healthcare and criminal justice.",
    "lessons": [
      8
    ]
  },
  {
    "term": "Human-on-the-Loop",
    "definition": "A system where AI operates autonomously but a human monitors and can intervene. Used in contexts like autonomous vehicles with human override capability.",
    "lessons": [
      8
    ]
  },
  {
    "term": "Human-out-of-the-Loop",
    "definition": "Fully autonomous AI operation with no human oversight. Examples include high-frequency trading and the controversial concept of autonomous weapons.",
    "lessons": [
      8
    ]
  },
  {
    "term": "Inference",
    "definition": "The process of running a trained AI model to generate outputs from new inputs. Inference costs (energy, compute) are increasingly significant at scale.",
    "lessons": [
      15
    ]
  },
  {
    "term": "LLM (Large Language Model)",
    "definition": "A model trained on large amounts of data to process and generate language, usually as token sequences. A product may add retrieval, search or tools; those capabilities should be distinguished from the model alone.",
    "lessons": [
      2,
      9,
      15
    ]
  },
  {
    "term": "Machine Learning",
    "definition": "A subset of AI where systems learn patterns from data rather than being explicitly programmed. Includes supervised, unsupervised, and reinforcement learning.",
    "lessons": [
      1,
      3
    ]
  },
  {
    "term": "Metacognitive Laziness",
    "definition": "A label used for reduced monitoring or independent thought when relying on assistance. Evaluate the learner’s actual decisions and unaided performance rather than diagnosing an individual from tool use alone.",
    "lessons": []
  },
  {
    "term": "Model Card",
    "definition": "Documentation of a model’s intended uses, development, evaluation and limitations. It informs scrutiny but does not certify safety or fitness for a new setting.",
    "lessons": []
  },
  {
    "term": "Model Interpretability",
    "definition": "How easily a human can understand the reasoning behind a model's predictions. Decision trees are highly interpretable; deep neural networks are not.",
    "lessons": [
      4
    ]
  },
  {
    "term": "Narrow AI",
    "definition": "A term for systems designed or evaluated for bounded capabilities, contrasted with proposed general intelligence. Modern models can transfer across many tasks; the label does not establish the extent or reliability of that transfer.",
    "lessons": [
      1
    ]
  },
  {
    "term": "Neural Network",
    "definition": "A computing system inspired by the human brain, consisting of layers of interconnected nodes (neurons). Each connection has a weight that is adjusted during training.",
    "lessons": [
      3,
      4
    ]
  },
  {
    "term": "Gemini Notebook",
    "definition": "Google’s source-based notebook product, also encountered under the NotebookLM name. Retrieval and citations support inspection but do not eliminate errors; features and data controls depend on the account and current service.",
    "lessons": [
      48,
      53
    ]
  },
  {
    "term": "Overfitting",
    "definition": "When a model memorises training data rather than learning general patterns, performing well on training data but poorly on new, unseen data. Like memorising past exam papers instead of understanding concepts.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Prompt Engineering",
    "definition": "Designing and testing instructions, context and output constraints for a model or product. Clear prompts can help, but accuracy, permissions and safety still need checking.",
    "lessons": [
      9,
      12,
      25,
      42
    ]
  },
  {
    "term": "PTFC Framework",
    "definition": "A structured approach to prompt writing: Persona (who the AI should act as), Task (what to do), Format (output structure), and Context (background — your role, audience, purpose, prior knowledge, and constraints). Used with tools such as Claude and Gemini.",
    "lessons": [
      9,
      12,
      25
    ]
  },
  {
    "term": "Retrieval-Augmented Generation (RAG)",
    "definition": "A workflow that retrieves material and supplies it as context for generation. Failures can occur in indexing, retrieval, interpretation or citation; grounded answers still need verification.",
    "lessons": [
      53
    ]
  },
  {
    "term": "Stochastic Parrot",
    "definition": "A metaphor advanced by Bender and colleagues in 2021 to criticise treating fluent language generation as evidence of understanding. It is an argument to examine, not a complete technical description or settled philosophical verdict.",
    "lessons": [
      2
    ]
  },
  {
    "term": "Supervised Learning",
    "definition": "A type of machine learning where the model learns from labelled examples — data paired with the correct answer. The model learns to map inputs to outputs.",
    "lessons": [
      3
    ]
  },
  {
    "term": "Temperature (AI)",
    "definition": "A sampling parameter that changes a probability distribution over candidate outputs. Higher values can increase variation, but do not guarantee creativity or quality; availability and behaviour depend on the system.",
    "lessons": [
      9
    ]
  },
  {
    "term": "Token",
    "definition": "A unit represented numerically for a model, such as a word fragment, punctuation or other chunk. Segmentation depends on the tokenizer; token count is not simply word count.",
    "lessons": [
      2,
      9
    ]
  },
  {
    "term": "Training Data",
    "definition": "Examples used during training. Their quality and coverage influence behaviour alongside architecture, objectives, optimisation and later system components; data alone does not determine every capability.",
    "lessons": [
      3,
      5
    ]
  },
  {
    "term": "Utilitarianism",
    "definition": "An ethical framework that judges actions by their consequences — the right action is the one that produces the greatest good for the greatest number of people.",
    "lessons": [
      7
    ]
  },
  {
    "term": "Viva Voce",
    "definition": "An oral examination where pupils defend their work by answering questions from examiners. Tests understanding, reasoning, and the ability to articulate decisions.",
    "lessons": [
      39,
      40
    ]
  }
];

const AI_NEWS = [
  /* ── 2026 — from The Neuron ── */
  { headline: "Google opens up its best AI — Gemini 3.1 Pro made free for all users", source: "The Neuron", date: "Apr 2026", tag: "tools", url: "https://www.theneuron.ai/newsletter/google-just-gave-away-its-best-ai/" },
  { headline: "OpenAI's President reveals what the company is betting everything on", source: "The Neuron", date: "Apr 2026", tag: "industry", url: "https://www.theneuron.ai/newsletter/openai-s-president-just-told-you-exactly-what-the-company-is-betting-everything-on/" },
  { headline: "This is how we'd teach AI from scratch in 2026", source: "The Neuron", date: "Mar 2026", tag: "policy", url: "https://www.theneuron.ai/newsletter/this-is-how-we-d-teach-ai-from-scratch-in-2026/" },
  { headline: "The White House's new AI plan — the TL;DR", source: "The Neuron", date: "Mar 2026", tag: "policy", url: "https://www.theneuron.ai/newsletter/the-tl-dr-on-the-white-house-s-new-ai-plan/" },
  { headline: "Google vs OpenAI: the battle of the AI super-apps has begun", source: "The Neuron", date: "Mar 2026", tag: "industry", url: "https://www.theneuron.ai/newsletter/google-vs-openai-battle-of-the-super-apps/" },
  { headline: "AI's biggest problem just changed — and nobody's ready", source: "The Neuron", date: "Mar 2026", tag: "research", url: "https://www.theneuron.ai/newsletter/ai-s-biggest-problem-just-changed-nobody-s-ready/" },
  { headline: "The Enterprise AI Platform War has a scoreboard — Anthropic is winning", source: "The Neuron", date: "Mar 2026", tag: "industry", url: "https://www.theneuron.ai/newsletter/the-enterprise-ai-platform-war-has-a-scoreboard-now-anthropic-is-winning/" },
  /* ── 2025 ── */
  { headline: "DeepSeek R1 matches OpenAI o1 at a fraction of the cost — Nvidia stock falls 17%", source: "Financial Times / Reuters", date: "Jan 2025", tag: "industry" },
  { headline: "UK AI Opportunities Action Plan commits £14bn investment and AI growth zones", source: "UK Government", date: "Jan 2025", tag: "policy" },
  { headline: "Anthropic's Claude 3.7 Sonnet introduces visible extended thinking — new coding record", source: "Anthropic", date: "Feb 2025", tag: "tools" },
  { headline: "OpenAI o3 scores 71.7% on Humanity's Last Exam — closing in on human expert performance", source: "OpenAI", date: "Apr 2025", tag: "research" },
  { headline: "Gemini 2.5 Pro tops AI leaderboards combining million-token context with reasoning", source: "Google DeepMind", date: "Mar 2025", tag: "tools" },
  { headline: "76% of developers now use AI coding tools daily, Stack Overflow survey finds", source: "Stack Overflow", date: "May 2025", tag: "industry" },
  { headline: "EU AI Act bans on unacceptable-risk systems take effect — social scoring prohibited", source: "European Commission", date: "Feb 2025", tag: "policy" },
  /* ── 2024 ── */
  { headline: "EU AI Act comes into force — world's first comprehensive AI law", source: "European Parliament", date: "Aug 2024", tag: "policy" },
  { headline: "Nobel Prize in Physics awarded to Hinton & Hopfield for neural network research", source: "The Nobel Committee", date: "Oct 2024", tag: "research" },
  { headline: "AlphaFold 3: Google DeepMind predicts structure of nearly all known molecules", source: "Nature / DeepMind", date: "May 2024", tag: "research" },
  { headline: "OpenAI launches GPT-4o with real-time voice, vision and reasoning", source: "OpenAI", date: "May 2024", tag: "tools" },
  { headline: "Anthropic releases Claude 3.5 Sonnet — tops coding and reasoning benchmarks", source: "Anthropic", date: "Jun 2024", tag: "tools" },
  { headline: "AI systems beat humans at International Mathematical Olympiad problems", source: "Google DeepMind", date: "Jul 2024", tag: "research" },
  { headline: "Apple unveils Apple Intelligence — personalised AI built into iPhone and Mac", source: "Apple / BBC News", date: "Jun 2024", tag: "tools" },
  { headline: "NHS trial finds AI matches radiologist accuracy in detecting breast cancer", source: "The Lancet / NHS England", date: "2024", tag: "health" },
  /* ── 2023 ── */
  { headline: "28 nations sign Bletchley Declaration — first global agreement on frontier AI safety", source: "UK Government", date: "Nov 2023", tag: "policy" },
  { headline: "Sam Altman fired then reinstated as OpenAI CEO after dramatic board revolt", source: "BBC News", date: "Nov 2023", tag: "industry" },
  { headline: "New York lawyer sanctioned after AI cited six non-existent court cases", source: "BBC News / The Guardian", date: "Jun 2023", tag: "ethics" },
  { headline: "Meta open-sources Llama 2, making powerful AI free for researchers worldwide", source: "Meta AI", date: "Jul 2023", tag: "tools" },
  { headline: "Over 1,800 AI researchers sign letter calling for pause on giant AI experiments", source: "Future of Life Institute", date: "Mar 2023", tag: "policy" },
];

/* ── Pupil Exemplar Gallery ─────────────────────────────────────── */
const EXEMPLARS = [
  /* ── STRONG EXAMPLES ── */
  {
    name: "Aisha, Year 12",
    task: "Essay plan for A-Level Biology exam",
    quality: "strong",
    persona: "You are an experienced A-Level Biology teacher who specialises in the AQA specification and marks at distinction level.",
    taskText: "Create a detailed essay plan for the question: 'Evaluate the evidence for evolution by natural selection.'",
    format: "A structured plan with: an introduction hook, 4 main points each with a named example, one counter-argument paragraph, and a conclusion strategy. Use bullet points throughout.",
    context: "I am a Year 12 AQA Biology pupil. I find it difficult to structure longer essays and scored 12/20 on my last attempt. I have 3 weeks until my mock exam.",
    teacherNote: "Excellent use of Context — Aisha tells Claude her level, her board (AQA), her specific weakness AND her timeline. This is what turns a generic response into genuinely useful, personalised feedback.",
    tool: "Claude"
  },
  {
    name: "Marcus, Year 13",
    task: "Research briefing on AI in healthcare",
    quality: "strong",
    persona: "You are a senior research analyst at a health policy think-tank with expertise in NHS digital transformation.",
    taskText: "Produce a research briefing summarising the current state of AI diagnostic tools in the NHS.",
    format: "A 500-word briefing with: an executive summary (3 bullet points), three sections with clear headings, a limitations paragraph, and three questions for further research.",
    context: "I am writing this for an EPQ on AI ethics. My audience is my school's research committee — academically rigorous but not medical specialists. I need balanced, evidence-based content.",
    teacherNote: "Marcus defines his audience with real precision. 'Academic but not medical specialists' stops the AI being either too simple or too jargon-heavy — that single phrase dramatically improves the output.",
    tool: "Gemini"
  },
  {
    name: "Priya, Year 12",
    task: "Debate preparation — AI and creativity",
    quality: "strong",
    persona: "You are a philosophy lecturer who specialises in aesthetics and the philosophy of mind.",
    taskText: "Give me the three strongest arguments FOR the position that AI cannot be truly creative, along with the best counter-argument for each.",
    format: "Three argument blocks. Each block: claim (1 sentence), supporting evidence (2–3 sentences), strongest counter-argument (2 sentences), rebuttal (1 sentence).",
    context: "I am preparing to argue the proposition side in a formal school debate. The motion is 'This House believes AI can never be truly creative.' I need to anticipate and defeat the opposition's strongest points.",
    teacherNote: "Priya's Format field is extremely specific — she defines the exact internal structure of each argument block. This produces a response that's immediately usable without any reformatting.",
    tool: "Claude"
  },
  {
    name: "Jamie, Year 13",
    task: "Chemistry titration calculation walkthrough",
    quality: "strong",
    persona: "You are an A-Level Chemistry examiner who has marked thousands of titration questions and knows exactly where pupils lose marks.",
    taskText: "Walk me through how to calculate the concentration of sodium hydroxide from a titration where 23.5 cm³ of 0.100 mol/dm³ HCl neutralises 25.0 cm³ of NaOH, explaining every step.",
    format: "Step-by-step working with: the equation used, a one-sentence explanation of why each step is necessary, and a final answer box. Flag any step where pupils commonly make errors.",
    context: "I am revising for my A-Level Chemistry Paper 1 next month. I understand the theory but keep losing marks in calculations. I need to understand the reasoning, not just the method.",
    teacherNote: "Jamie's Persona requests an examiner — not just a teacher. This shifts the AI's focus onto mark-scheme thinking and common pupil errors, which is exactly what revision needs.",
    tool: "Claude"
  },
  {
    name: "Sophie, Year 12",
    task: "Source analysis for History A-Level",
    quality: "strong",
    persona: "You are an A-Level History teacher who specialises in the OCR specification and teaches source analysis technique.",
    taskText: "Analyse this source for its value to a historian studying Nazi propaganda: [Source: 1936 Nuremberg Rally poster — a crowd beneath a German eagle with the slogan 'One People, One Reich, One Leader']. Apply the CCAP framework: Content, Context, Audience, Purpose.",
    format: "Four short paragraphs, one per CCAP element. Each: 2–3 sentences of analysis followed by a sentence on the value and limitation this creates for historians.",
    context: "I am studying Nazi Germany for OCR A-Level History. I lose marks because my source analysis describes what sources say rather than analysing why they were created. My teacher says I need to think about who made it and why.",
    teacherNote: "Sophie quotes her teacher's feedback directly in the Context field. This is a brilliant move — the AI then targets exactly the weakness her teacher identified rather than giving generic advice.",
    tool: "Claude"
  },
  {
    name: "Reuben, Year 13",
    task: "Economics 25-mark evaluation essay plan",
    quality: "strong",
    persona: "You are an A-Level Economics examiner writing model answers for Edexcel Paper 2.",
    taskText: "Plan a 25-mark essay evaluating whether a carbon tax is the most effective policy to reduce negative externalities from carbon emissions.",
    format: "Essay skeleton: thesis statement (1 sentence), four argument paragraphs each with a topic sentence and 3 bullet-point evidence/analysis notes, one counter-argument paragraph, and an evaluative conclusion that reaches a clear judgement.",
    context: "I am preparing for Edexcel A-Level Economics. I consistently score 16–18/25 and my feedback says I need stronger evaluation and a clearer conclusion. I am confident on market failure theory but weaker on policy comparison.",
    teacherNote: "Reuben gives a precise score range and specific teacher feedback. This is far more useful than 'I need help with essays' — the AI knows exactly which skills to develop and which to leave alone.",
    tool: "Gemini"
  },
  {
    name: "Fatima, Year 12",
    task: "Psychology approach application",
    quality: "strong",
    persona: "You are an AQA Psychology teacher who specialises in the Approaches topic and knows the mark scheme inside out.",
    taskText: "Apply the Behaviourist approach to explain why a child praised for sharing at age 5 consistently shares as an adult. Include classical conditioning, operant conditioning, and social learning theory.",
    format: "Three paragraphs — one per concept. Each: define the concept in one sentence, apply it to the scenario in two sentences, name at least one psychologist or study.",
    context: "I am a Year 12 AQA Psychology pupil. I can define the concepts but my teacher says I lose marks by not applying them specifically enough to the scenario in exam questions.",
    teacherNote: "Fatima's Format requires named psychologists in every paragraph — this stops the AI writing generic theory and forces application-level responses that match the mark scheme.",
    tool: "Claude"
  },
  {
    name: "Oliver, Year 13",
    task: "Python debugging — guided, not given",
    quality: "strong",
    persona: "You are a senior software engineer who mentors pupils and explains bugs without just handing over corrected code.",
    taskText: "My Python function returns incorrect results: def get_average(nums): total = 0 / for num in nums: / total = total + num / return total / len(nums[0]). Identify the bug, explain why it causes wrong output, and guide me to the fix without writing corrected code.",
    format: "1) Bug identified — one sentence. 2) Why this causes wrong output — 2–3 sentences with an example. 3) A guiding question that leads me to the fix without giving it away.",
    context: "I am a Year 13 Computer Science pupil. I want to understand the bug, not copy a fix. My teacher says I need to demonstrate debugging skills in my coursework write-up.",
    teacherNote: "Oliver explicitly asks the AI NOT to give him the answer. Requesting a 'guiding question' instead of a solution is academically honest AI use — using it as a tutor rather than an answer machine.",
    tool: "Claude"
  },
  {
    name: "Amara, Year 12",
    task: "Spaced-repetition flashcard set",
    quality: "strong",
    persona: "You are an expert in spaced repetition learning and A-Level Psychology revision.",
    taskText: "Create 10 flashcard pairs for the key studies in the Social Influence topic, following the AQA specification.",
    format: "A two-column table: QUESTION (front of card) and ANSWER (back of card). Questions should test: researcher name, year, method, key finding, and one limitation. Keep answers under 25 words each.",
    context: "I am revising for AQA A-Level Psychology Paper 1. I have 6 weeks until my exam. I use Anki for spaced repetition. My weakest area is remembering specific study details — years, sample sizes, exact findings.",
    teacherNote: "The 25-word answer constraint is the key move. Without it, flashcard answers become paragraphs that defeat the purpose of active recall. Amara also mentions Anki — the AI can then format output optimally for that tool.",
    tool: "ChatGPT"
  },
  {
    name: "Dev, Year 13",
    task: "UCAS personal statement critique",
    quality: "strong",
    persona: "You are an experienced UCAS admissions tutor who has reviewed thousands of personal statements for competitive university courses.",
    taskText: "Review the opening two paragraphs of my Computer Science personal statement (below). Identify the three strongest elements and the two weakest, and suggest specific rewrites for the weak sections only.",
    format: "Strengths: numbered list of 3, one sentence each. Weaknesses: numbered list of 2, one sentence identifying the problem. Rewrites: one alternative version per weakness. Final verdict: one sentence.",
    context: "I am applying to Imperial, UCL and Edinburgh for Computer Science. My statement is 3,800 characters. I have had one round of teacher edits already. I want targeted critique, not encouragement.",
    teacherNote: "'I want targeted critique, not encouragement' overrides the AI's default tendency to soften feedback. This single phrase produces more honest, useful output — sophisticated prompt writing.",
    tool: "Claude"
  },
  {
    name: "Mei, Year 12",
    task: "Physics concept — wave-particle duality",
    quality: "strong",
    persona: "You are a physics tutor who makes abstract quantum concepts accessible to A-Level pupils without over-simplifying.",
    taskText: "Explain wave-particle duality using the double-slit experiment. Cover: what the experiment shows, why classical physics cannot explain it, and what the Copenhagen interpretation concludes.",
    format: "Three sections with bold headings. Use an analogy per section. End with two exam-style questions (with mark allocations) that test understanding of this topic.",
    context: "I am a Year 12 AQA Physics pupil. I understand the maths behind waves and particles separately but cannot conceptually reconcile how something can be both. My teacher says the Copenhagen interpretation is enough for A-Level — I do not need to go beyond it.",
    teacherNote: "Mei includes her teacher's explicit boundary: 'the Copenhagen interpretation is enough for A-Level'. This stops the AI going down quantum rabbit holes and keeps output exam-relevant — excellent use of the C in PTFC.",
    tool: "Claude"
  },

  /* ── POOR EXAMPLES — learn what NOT to do ── */
  {
    name: "James, Year 12",
    task: "Help with history essay",
    quality: "poor",
    persona: "",
    taskText: "Write me an essay about World War One.",
    format: "",
    context: "",
    teacherNote: "🚩 No Persona, no Format, no Context — and the Task is far too broad. 'Write me an essay about World War One' could mean anything from a paragraph to a dissertation. The AI has no idea of the level, word count, question focus, or assessment criteria. The output will be generic and useless for any specific exam. Always answer: Who am I talking to? What exactly do I need? How should it be formatted? For what audience and purpose?",
    tool: "ChatGPT"
  },
  {
    name: "Emma, Year 13",
    task: "Economics explanation",
    quality: "poor",
    persona: "",
    taskText: "Can you explain supply and demand to me?",
    format: "Just explain it.",
    context: "I'm studying Economics.",
    teacherNote: "🚩 Without a Persona, the AI defaults to a generalist voice — the explanation could be pitched at a 10-year-old or a university pupil. 'I'm studying Economics' gives almost nothing useful (what level? what aspect? what do you already know?). Compare this to Reuben's prompt above — same subject, dramatically different output quality.",
    tool: "ChatGPT"
  },
  {
    name: "Tom, Year 12",
    task: "Biology notes",
    quality: "poor",
    persona: "You are a biology expert.",
    taskText: "Give me everything I need to know about the nervous system including all the different parts and how they work and the differences between the central and peripheral nervous system and what neurons are and how synapses work and what hormones do.",
    format: "",
    context: "",
    teacherNote: "🚩 Tom has crammed every sub-topic into one Task without specifying format or context. The AI will produce a wall of text covering everything — far more than any single lesson requires. Break large topics into focused sub-questions, add a format (e.g. 'bullet points, max 3 per topic'), and tell the AI which exam board and paper this is for.",
    tool: "Gemini"
  },
  {
    name: "Chloe, Year 13",
    task: "Personal statement writing",
    quality: "poor",
    persona: "You are a UCAS expert.",
    taskText: "Write my personal statement for a Psychology degree.",
    format: "Make it sound like me.",
    context: "I want to study Psychology.",
    teacherNote: "Use your own truthful account and check current UCAS guidance. From 2026 entry onwards, the statement has three questions, 4,000 characters overall including spaces, and at least 350 characters per answer. AI feedback must not invent experience or replace your authorship. Similarity checking is not proof of AI authorship; preserve drafts and explain your choices.",
    tool: "Claude"
  },
  {
    name: "Ben, Year 12",
    task: "EPQ academic sources",
    quality: "poor",
    persona: "You are a research librarian.",
    taskText: "Give me 10 academic sources I can use for my EPQ on AI regulation, with full citations.",
    format: "APA format citations.",
    context: "I need real sources from the last 5 years.",
    teacherNote: "🚩 Asking an AI to generate citations is one of the most dangerous uses of these tools. LLMs frequently hallucinate references — inventing plausible-sounding authors, journals, and page numbers that do not exist. A New York lawyer was fined in 2023 for submitting six non-existent AI-generated court cases. Always verify every citation independently using Google Scholar or JSTOR. Use AI to find topics — not to generate references.",
    tool: "ChatGPT"
  },
  {
    name: "Ryan, Year 12",
    task: "Essay feedback",
    quality: "poor",
    persona: "You are a very experienced, highly qualified, world-class English Literature professor who has written many books on Shakespeare and studied at Oxford and Cambridge and has decades of experience marking essays at all levels from GCSE to PhD.",
    taskText: "Please read my essay and tell me everything that could possibly be improved, every single mistake, every place where I could write better, every way to make it perfect.",
    format: "Give me as much feedback as possible. Be extremely thorough. I want feedback on literally everything.",
    context: "Here is my essay: [essay text]",
    teacherNote: "🚩 Ryan has overcorrected — the Persona is an entire CV (2–3 sentences is enough) and the Task/Format ask for 'literally everything', 'every single mistake'. This produces overwhelming, unfocused feedback. Better approach: 'Give me feedback on structure and argument only — ignore grammar for now' or 'Identify the three most important changes I should make'. Specific constraints make feedback actionable.",
    tool: "Claude"
  }
];

/* ── AI History Timeline ──────────────────────────────────────────── */
// People bios: used by hover chips throughout the timeline
const AI_PEOPLE = {
  "Alan Turing": {
    "role": "Mathematician & Computer Scientist",
    "dates": "1912 – 1954",
    "bio": "British mathematician who laid the theoretical foundations of computation and AI. During WWII he was central to breaking the Enigma code. He proposed the Turing Test in 1950 as a criterion for machine intelligence. Awarded a royal pardon posthumously in 2013.",
    "icon": "🇬🇧"
  },
  "John McCarthy": {
    "role": "Computer Scientist",
    "dates": "1927 – 2011",
    "bio": "Helped introduce the term artificial intelligence in the 1955 Dartmouth proposal and organise the 1956 workshop. Developed Lisp and contributed to time-sharing and AI research.",
    "icon": "🇺🇸"
  },
  "Marvin Minsky": {
    "role": "Cognitive Scientist & AI Pioneer",
    "dates": "1927 – 2016",
    "bio": "Co-founder of MIT's AI laboratory. Influential theorist on neural networks and cognitive architectures. His book 'The Society of Mind' (1986) proposed that intelligence arises from the interaction of many simple processes.",
    "icon": "🇺🇸"
  },
  "Arthur Samuel": {
    "role": "Computer Scientist",
    "dates": "1901 – 1990",
    "bio": "IBM researcher who coined the term 'machine learning' in 1959. Created one of the earliest self-learning programs — a checkers-playing AI that improved by playing games against itself, demonstrating learning without explicit programming.",
    "icon": "🇺🇸"
  },
  "Frank Rosenblatt": {
    "role": "Psychologist & Computer Scientist",
    "dates": "1928 – 1971",
    "bio": "Developed the perceptron in the 1950s, an influential trainable model for classification. Its limitations and later developments form part of the history of neural networks.",
    "icon": "🇺🇸"
  },
  "Joseph Weizenbaum": {
    "role": "Computer Scientist",
    "dates": "1923 – 2008",
    "bio": "MIT professor who created ELIZA (1966), one of the first chatbot programs. He was disturbed by how readily users attributed understanding to his program and became a prominent critic of AI, arguing in 'Computer Power and Human Reason' (1976) that some human decisions should never be delegated to machines.",
    "icon": "🇩🇪🇺🇸"
  },
  "Geoffrey Hinton": {
    "role": "Cognitive Psychologist & Computer Scientist",
    "dates": "1947 –",
    "bio": "Often called the 'Godfather of Deep Learning'. Co-authored the key backpropagation paper (1986) and, with his pupils, created AlexNet (2012) which triggered the deep learning revolution. Left Google in 2023 to speak freely about AI risks. Awarded the 2024 Nobel Prize in Physics alongside John Hopfield.",
    "icon": "🇬🇧🇨🇦"
  },
  "Yann LeCun": {
    "role": "Computer Scientist",
    "dates": "1960 –",
    "bio": "Contributed to convolutional neural networks and systems for handwritten-character recognition. Shared the 2018 ACM A. M. Turing Award with Geoffrey Hinton and Yoshua Bengio.",
    "icon": "🇫🇷🇺🇸"
  },
  "Yoshua Bengio": {
    "role": "Computer Scientist",
    "dates": "1964 –",
    "bio": "Contributed to neural networks and representation learning. Shared the 2018 ACM A. M. Turing Award with Geoffrey Hinton and Yann LeCun.",
    "icon": "🇨🇦"
  },
  "Fei-Fei Li": {
    "role": "Computer Scientist",
    "dates": "1976 –",
    "bio": "Led the ImageNet project, a large labelled image dataset that helped shape computer-vision research, and contributed to work on human-centred AI.",
    "icon": "🇨🇳🇺🇸"
  },
  "Ian Goodfellow": {
    "role": "Machine Learning Researcher",
    "dates": "1985 –",
    "bio": "Inventor of Generative Adversarial Networks (GANs) in 2014 — a breakthrough technique where two neural networks compete against each other to generate increasingly realistic synthetic data. Formerly at Google Brain and Apple.",
    "icon": "🇺🇸"
  },
  "Demis Hassabis": {
    "role": "Neuroscientist & Entrepreneur",
    "dates": "1976 –",
    "bio": "Co-founded DeepMind and contributed to the development of systems including AlphaGo and AlphaFold. His work connects machine learning with scientific and practical problems.",
    "icon": "🇬🇧"
  },
  "Sam Altman": {
    "role": "Technology entrepreneur and executive",
    "dates": "1985 –",
    "bio": "An entrepreneur associated with OpenAI’s development and the public launch of ChatGPT. His role in AI’s expansion also makes governance and accountability relevant topics of study.",
    "icon": "🇺🇸"
  },
  "Ilya Sutskever": {
    "role": "Machine Learning Researcher",
    "dates": "1985 –",
    "bio": "A co-author of AlexNet and co-founder of OpenAI. Left OpenAI in 2024 and co-founded Safe Superintelligence. His research helped shape deep learning and language models.",
    "icon": "🇷🇺🇮🇱🇨🇦"
  },
  "John Hopfield": {
    "role": "Physicist & Neuroscientist",
    "dates": "1933 –",
    "bio": "Princeton physicist who invented the Hopfield Network in 1982 — a type of recurrent neural network with associative memory inspired by spin glasses in physics. Awarded the 2024 Nobel Prize in Physics alongside Geoffrey Hinton for foundational discoveries enabling machine learning.",
    "icon": "🇺🇸"
  },
  "Ashish Vaswani": {
    "role": "Machine Learning Researcher",
    "dates": "1985 –",
    "bio": "First author of the 2017 paper Attention Is All You Need, which introduced the Transformer architecture. Transformers became influential across language and other model applications.",
    "icon": "🇮🇳🇺🇸"
  },
  "Dario Amodei": {
    "role": "Neuroscientist & Entrepreneur",
    "dates": "1983 –",
    "bio": "Co-founded Anthropic in 2021 after working at OpenAI. His work has included AI capability, evaluation and safety research.",
    "icon": "🇺🇸"
  },
  "Daniela Amodei": {
    "role": "Technology entrepreneur and executive",
    "dates": "1987 –",
    "bio": "Co-founded Anthropic in 2021 after working at OpenAI, contributing to the organisation’s operations and development.",
    "icon": "🇺🇸"
  },
  "Liang Wenfeng": {
    "role": "Entrepreneur & AI Researcher",
    "dates": "1985 –",
    "bio": "Founded DeepSeek, the Chinese AI organisation that released the R1 reasoning model in January 2025. Claims about model performance and cost need their original evaluation and accounting context.",
    "icon": "🇨🇳"
  },
  "Sundar Pichai": {
    "role": "Technology entrepreneur and executive",
    "dates": "1972 –",
    "bio": "An executive associated with Google and Alphabet during the development of products including Gemini. Distinguish a company’s product announcements from independent evidence about their effects.",
    "icon": "🇮🇳🇺🇸"
  }
};

const AI_TIMELINE = [
  {
    "year": 1943,
    "title": "First Mathematical Neuron",
    "summary": "McCulloch & Pitts publish a mathematical model of how neurons work — the first formal description of a computational brain cell.",
    "detail": "Warren McCulloch and Walter Pitts published 'A Logical Calculus of the Ideas Immanent in Nervous Activity', proposing that neurons could be modelled as binary logic gates. This gave AI its first theoretical toolkit: the idea that intelligence could be built from simple on/off units wired together.",
    "people": [],
    "category": "theory",
    "icon": "🧠"
  },
  {
    "year": 1950,
    "title": "The Turing Test",
    "summary": "Alan Turing asks 'Can machines think?' and proposes the Imitation Game as a practical measure of machine intelligence.",
    "detail": "In his paper 'Computing Machinery and Intelligence', Turing proposed replacing the unanswerable philosophical question 'can machines think?' with a practical test: if a human interrogator cannot reliably distinguish machine responses from human ones, the machine passes. The paper also anticipated nearly every objection to machine intelligence still debated today.",
    "people": [
      "Alan Turing"
    ],
    "category": "theory",
    "icon": "💭"
  },
  {
    "year": 1952,
    "title": "An Early Checkers-Learning Program",
    "summary": "Arthur Samuel builds a checkers-playing program at IBM that improves by playing games against itself — work that later led him to coin the term 'machine learning' in 1959.",
    "detail": "Samuel's checkers program was remarkable because it learned to play better than its creator. It memorised positions and evaluated future moves — demonstrating that computers could acquire skills through experience rather than explicit programming. Samuel went on to coin the phrase 'machine learning' in a 1959 paper describing this capability.",
    "people": [
      "Arthur Samuel"
    ],
    "category": "milestone",
    "icon": "♟️"
  },
  {
    "year": 1956,
    "title": "The Dartmouth AI Workshop",
    "summary": "John McCarthy organises a two-month summer workshop at Dartmouth College and coins the term 'Artificial Intelligence'.",
    "detail": "McCarthy's proposal stated the conjecture that 'every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.' Attendees included Minsky, Shannon, and Simon. The conference set the agenda for AI research for decades — and named the field.",
    "people": [
      "John McCarthy",
      "Marvin Minsky"
    ],
    "category": "milestone",
    "icon": "🎓"
  },
  {
    "year": 1957,
    "title": "The Perceptron",
    "summary": "Frank Rosenblatt invents the Perceptron — the first neural network capable of learning from labelled examples.",
    "detail": "Rosenblatt's Perceptron was implemented on IBM hardware and could learn to distinguish simple shapes. It seemed to promise that machines could learn to perceive. The New York Times reported it would 'be able to walk, talk, see, write, reproduce itself and be conscious of its existence'. The optimism collapsed in 1969 when Minsky showed Perceptrons couldn't solve non-linear problems.",
    "people": [
      "Frank Rosenblatt"
    ],
    "category": "research",
    "icon": "⚡"
  },
  {
    "year": 1966,
    "title": "ELIZA: An Early Chatbot",
    "summary": "Joseph Weizenbaum at MIT creates ELIZA, a program that simulates a psychotherapist by reflecting questions back at the user.",
    "detail": "ELIZA worked by pattern-matching keywords and reformulating user input as questions. Its most famous script, DOCTOR, mimicked a Rogerian therapist. Weizenbaum was disturbed that users formed emotional attachments to the program, including his own secretary. He spent the rest of his career warning against delegating human decisions to machines.",
    "people": [
      "Joseph Weizenbaum"
    ],
    "category": "tools",
    "icon": "💬"
  },
  {
    "year": 1974,
    "title": "First AI Winter",
    "summary": "Funding collapses after a UK government report (the Lighthill Report) and US DARPA cuts conclude that AI has massively overpromised and underdelivered.",
    "detail": "Sir James Lighthill's 1973 report for the British Science Research Council concluded that no part of AI had produced the major impact promised. Combined with the failure of machine translation projects, DARPA cut AI funding sharply. The term 'AI Winter' was later coined to describe this period of disillusionment, which lasted roughly until 1980.",
    "people": [],
    "category": "policy",
    "icon": "❄️"
  },
  {
    "year": 1980,
    "title": "Expert Systems Boom",
    "summary": "Rule-based 'expert systems' like XCON bring AI into industry — DEC saves millions using AI to configure computers.",
    "detail": "Expert systems encoded domain knowledge as thousands of if-then rules. XCON (eXpert CONfigurer) at Digital Equipment Corporation processed 80,000 computer orders in its first year. By the mid-1980s, Fortune 500 companies were spending over a billion dollars a year on expert system development. The boom ended when systems proved too brittle and expensive to maintain.",
    "people": [],
    "category": "industry",
    "icon": "🏭"
  },
  {
    "year": 1986,
    "title": "Backpropagation Revives Neural Networks",
    "summary": "Geoffrey Hinton co-publishes the backpropagation paper, showing how multi-layer neural networks can be trained efficiently — ending the second AI Winter.",
    "detail": "Rumelhart, Hinton, and Williams' 1986 paper in Nature showed that errors could be propagated backwards through a network to adjust weights at every layer. This made training deep networks computationally feasible for the first time. Though the technique had been independently discovered before, this paper popularised it and reignited neural network research.",
    "people": [
      "Geoffrey Hinton"
    ],
    "category": "research",
    "icon": "🔬"
  },
  {
    "year": 1989,
    "title": "Convolutional Neural Networks & Digit Recognition",
    "summary": "Yann LeCun applies neural networks to recognise handwritten digits, reading cheques for US banks — the first practical deep learning application.",
    "detail": "LeCun's LeNet demonstrated that convolutional neural networks — networks with shared-weight filters that detect local patterns — could read handwritten postcodes and cheques reliably. By the late 1990s, LeNet was processing over 10% of all cheques in the USA. This was the first large-scale commercial deployment of neural networks.",
    "people": [
      "Yann LeCun"
    ],
    "category": "research",
    "icon": "✍️"
  },
  {
    "year": 1997,
    "title": "Deep Blue Defeats Garry Kasparov",
    "summary": "IBM's chess computer Deep Blue becomes the first machine to beat a reigning world chess champion in a match under standard chess tournament conditions.",
    "detail": "Deep Blue evaluated 200 million positions per second using custom chips and search algorithms. Kasparov accused IBM of cheating after a mysterious move in game 2 that he thought no computer could play. IBM refused a rematch and retired the machine. The victory was a cultural watershed but relied on brute-force search rather than learning — making it distinct from modern AI.",
    "people": [],
    "category": "milestone",
    "icon": "♟️"
  },
  {
    "year": 2006,
    "title": "Deep Learning Revival",
    "summary": "Geoffrey Hinton and Ruslan Salakhutdinov publish a breakthrough paper showing how to train deep belief networks — reigniting interest in neural networks after two decades.",
    "detail": "Their paper in Science showed that deep networks could be pre-trained layer-by-layer using unsupervised learning, then fine-tuned. This solved the 'vanishing gradient' problem that had made deep networks untrainable. Combined with growing compute and data, this sparked what became the deep learning revolution of the 2010s.",
    "people": [
      "Geoffrey Hinton"
    ],
    "category": "research",
    "icon": "🔁"
  },
  {
    "year": 2009,
    "title": "ImageNet Launched",
    "summary": "Fei-Fei Li launches ImageNet — a database of 14 million labelled images that becomes the benchmark for computer vision and the fuel for deep learning.",
    "detail": "Li's insight was that the bottleneck in computer vision wasn't algorithms — it was data. ImageNet took three years to build using crowdsourced workers on Amazon Mechanical Turk to label millions of images. The annual ImageNet Large Scale Visual Recognition Challenge (ILSVRC) from 2010 created the competition that AlexNet won so dramatically in 2012.",
    "people": [
      "Fei-Fei Li"
    ],
    "category": "research",
    "icon": "🖼️"
  },
  {
    "year": 2011,
    "title": "IBM Watson Wins Jeopardy!",
    "summary": "IBM's Watson defeats Jeopardy! champions Ken Jennings and Brad Rutter in a televised match, showcasing natural language understanding at scale.",
    "detail": "Watson processed natural language questions, searched its knowledge base, and responded faster than the human champions. Ken Jennings wrote on his final answer 'I for one welcome our new computer overlords.' Watson used over 100 algorithms simultaneously. IBM later deployed Watson Health for cancer diagnosis — with mixed results, highlighting the gap between game-playing and real-world AI.",
    "people": [],
    "category": "milestone",
    "icon": "🎯"
  },
  {
    "year": 2012,
    "title": "AlexNet — The Deep Learning Revolution",
    "summary": "AlexNet wins the ImageNet competition by a massive margin, cutting the error rate nearly in half and triggering the modern era of deep learning.",
    "detail": "Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton's AlexNet achieved a top-5 error rate of 15.3% — compared to the runner-up's 26.2%. The key innovations were using ReLU activations, dropout regularisation, and training on GPU hardware. This single result shifted the entire field. Within two years, every top ImageNet entry used deep CNNs.",
    "people": [
      "Geoffrey Hinton",
      "Ilya Sutskever"
    ],
    "category": "milestone",
    "icon": "🚀"
  },
  {
    "year": 2014,
    "title": "GANs Invented",
    "summary": "Ian Goodfellow invents Generative Adversarial Networks — a technique where two networks compete to generate increasingly realistic synthetic data.",
    "detail": "Goodfellow reportedly conceived the idea during an argument at a Montreal bar and coded the first GAN the same night. A generator network tries to fool a discriminator network; the discriminator tries to spot fakes. The competition drives both to improve. GANs enabled photorealistic face generation, deepfakes, synthetic data, and creative AI tools like DALL-E's predecessors.",
    "people": [
      "Ian Goodfellow"
    ],
    "category": "research",
    "icon": "🎭"
  },
  {
    "year": 2016,
    "title": "AlphaGo Defeats Lee Sedol",
    "summary": "Google DeepMind's AlphaGo beats world Go champion Lee Sedol 4-1 — a landmark considered a decade ahead of schedule.",
    "detail": "Go has more possible positions than atoms in the observable universe, making it impervious to brute-force search. AlphaGo used two deep neural networks and Monte Carlo tree search, trained by both supervised learning from human games and reinforcement learning by playing itself. Lee Sedol called it 'an entity that is neither human nor computer'. DeepMind later released AlphaGo Zero, which learned purely from self-play.",
    "people": [
      "Demis Hassabis"
    ],
    "category": "milestone",
    "icon": "🔵"
  },
  {
    "year": 2017,
    "title": "\"Attention Is All You Need\" — The Transformer",
    "summary": "Google researchers publish the Transformer architecture, which becomes the foundation of GPT, Claude, Gemini, and virtually every modern large language model.",
    "detail": "The paper introduced the self-attention mechanism: instead of processing text sequentially (as RNNs did), Transformers attend to all tokens simultaneously, learning relationships across the full context. This enabled parallelisation on GPUs and scaling to previously impossible sizes. The Transformer is arguably the most influential AI paper since backpropagation.",
    "people": [
      "Ashish Vaswani"
    ],
    "category": "research",
    "icon": "🔧"
  },
  {
    "year": 2018,
    "title": "BERT & The Transfer Learning Era",
    "summary": "Google releases BERT — a pre-trained language model that can be fine-tuned for almost any NLP task, dramatically raising performance benchmarks.",
    "detail": "BERT (Bidirectional Encoder Representations from Transformers) was pre-trained on the entire Wikipedia and BookCorpus. Fine-tuning it on specific tasks required only small datasets. BERT improved state-of-the-art on 11 different NLP benchmarks simultaneously. It triggered a paradigm shift: instead of training models from scratch per task, the field moved to pre-train once, fine-tune anywhere.",
    "people": [],
    "category": "research",
    "icon": "📚"
  },
  {
    "year": 2020,
    "title": "GPT-3: Language Models at Scale",
    "summary": "The 2020 GPT-3 paper investigated language-model performance across tasks using examples supplied in the prompt.",
    "detail": "Few-shot results helped focus attention on scale and prompting. Performance differed by task; a benchmark result is not evidence that every generated claim is true.",
    "people": [
      "Sam Altman",
      "Ilya Sutskever"
    ],
    "category": "tools",
    "icon": "📝",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://arxiv.org/abs/2005.14165"
      }
    ]
  },
  {
    "year": 2021,
    "title": "AlphaFold 2: A Structure-Prediction Advance",
    "summary": "The 2021 AlphaFold paper reported strong protein-structure predictions evaluated against experimental structures.",
    "detail": "Predicting structure is a major scientific advance. It does not mean that all questions about folding dynamics, function or biological interactions have been solved.",
    "people": [
      "Demis Hassabis"
    ],
    "category": "milestone",
    "icon": "🧬",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.nature.com/articles/s41586-021-03819-2"
      }
    ]
  },
  {
    "year": 2022,
    "title": "ChatGPT Launches",
    "summary": "OpenAI released ChatGPT as a research preview in November 2022.",
    "detail": "The conversational interface brought generative language models to a broad public audience. Its useful responses and convincing mistakes made verification and appropriate use practical questions for learners.",
    "people": [
      "Sam Altman"
    ],
    "category": "milestone",
    "icon": "🌍",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://openai.com/index/chatgpt/"
      }
    ]
  },
  {
    "year": 2023,
    "title": "The Bletchley Declaration",
    "summary": "Governments attending the November 2023 AI Safety Summit issued a declaration on frontier AI opportunities, risks and cooperation.",
    "detail": "A declaration records a shared position; it is not the same as a binding law. The European AI Act’s political agreement in 2023 must also be distinguished from its later adoption and staged application.",
    "people": [],
    "category": "policy",
    "icon": "🏛️",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration"
      }
    ]
  },
  {
    "year": 2023,
    "title": "Open-Weight Releases Expand Access",
    "summary": "Meta released Llama 2 in July 2023 under a community licence, enabling wider access to model weights.",
    "detail": "Availability of weights and open-source licensing are different questions. Read the actual licence and available materials before describing a model as unrestricted or fully reproducible.",
    "people": [],
    "category": "tools",
    "icon": "🔓",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://ai.meta.com/llama/license/"
      }
    ]
  },
  {
    "year": 2024,
    "title": "EU AI Act Enters into Force",
    "summary": "The EU AI Act entered into force in 2024, with obligations applying in stages.",
    "detail": "Do not treat entry into force as the date every duty became applicable. Check the current official timetable, relevant system and responsible role before reporting a legal obligation.",
    "people": [],
    "category": "policy",
    "icon": "⚖️",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline"
      }
    ]
  },
  {
    "year": 2024,
    "title": "Nobel Prize Recognises Neural-Network Foundations",
    "summary": "John Hopfield and Geoffrey Hinton received the 2024 Nobel Prize in Physics for foundational work enabling machine learning with artificial neural networks.",
    "detail": "Their work illustrates links between physics, computation and learning. The award recognises specific contributions; it does not establish that modern systems think like people.",
    "people": [
      "Geoffrey Hinton",
      "John Hopfield"
    ],
    "category": "milestone",
    "icon": "🏆",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.nobelprize.org/prizes/physics/2024/press-release/"
      }
    ]
  },
  {
    "year": 2024,
    "title": "Multimodal Products Broaden",
    "summary": "In 2024, releases including GPT-4o expanded the combination of text, image and audio capabilities.",
    "detail": "Capabilities differed between models and products. Do not attribute the same input types, context limits or account access to every model released that year.",
    "people": [
      "Sam Altman",
      "Demis Hassabis"
    ],
    "category": "tools",
    "icon": "🤖",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://openai.com/index/hello-gpt-4o/"
      }
    ]
  },
  {
    "year": 2024,
    "title": "OpenAI o1: More Computation for Reasoning",
    "summary": "OpenAI introduced o1-preview in September 2024, emphasising multi-step problem solving.",
    "detail": "Additional computation can change performance, latency and cost. Evaluate the actual task and output; a longer reasoning process does not guarantee a correct answer.",
    "people": [
      "Sam Altman"
    ],
    "category": "tools",
    "icon": "🤔",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://help.openai.com/en/articles/9624314-model-release-notes"
      }
    ]
  },
  {
    "year": 2024,
    "title": "NotebookLM Adds Audio Overviews",
    "summary": "Google introduced Audio Overviews in September 2024, producing generated discussions based on supplied sources.",
    "detail": "A fluent audio summary is still generated material. Check its claims against the sources and use an unaided task to find out what you learned. The historical product name is retained here.",
    "people": [],
    "category": "tools",
    "icon": "🎙️",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://blog.google/innovation-and-ai/products/notebooklm-audio-overviews/"
      }
    ]
  },
  {
    "year": 2024,
    "title": "Sora Reaches Public Users",
    "summary": "OpenAI began rolling out the Sora video-generation product in December 2024, with access and limits depending on the launch plan and region.",
    "detail": "Distinguish a research preview from the public product’s capabilities. Synthetic video makes provenance, corroboration and responsible publication important; realism does not establish truth.",
    "people": [
      "Sam Altman"
    ],
    "category": "tools",
    "icon": "🎬",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://openai.com/index/sora-is-here/"
      }
    ]
  },
  {
    "year": 2025,
    "title": "DeepSeek Releases R1",
    "summary": "DeepSeek released the R1 reasoning model in January 2025, prompting attention to training methods, efficiency and access to weights.",
    "detail": "A quoted training-run cost is not the full cost of developing a model or running a company. Comparisons need the model, training stage, accounting boundary and evaluation conditions.",
    "people": [
      "Liang Wenfeng"
    ],
    "category": "milestone",
    "icon": "🌏",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://api-docs.deepseek.com/news/news250120/"
      }
    ]
  },
  {
    "year": 2025,
    "title": "UK AI Opportunities Action Plan",
    "summary": "The UK published its AI Opportunities Action Plan in January 2025 with recommendations on infrastructure, adoption and skills.",
    "detail": "A recommendation, government commitment, private investment announcement and delivered outcome are different forms of evidence. Read the plan alongside dated progress reporting.",
    "people": [],
    "category": "policy",
    "icon": "🇬🇧",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.gov.uk/government/publications/ai-opportunities-action-plan"
      }
    ]
  },
  {
    "year": 2025,
    "title": "Claude 3.7: Extended Thinking",
    "summary": "Anthropic announced Claude 3.7 Sonnet in February 2025 with an extended-thinking option.",
    "detail": "Visible reasoning can help a user inspect an explanation, but is not necessarily a complete or faithful internal trace. Check conclusions independently and treat launch comparisons as dated evaluations.",
    "people": [
      "Dario Amodei"
    ],
    "category": "tools",
    "icon": "💭",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.anthropic.com/news/claude-3-7-sonnet"
      }
    ]
  },
  {
    "year": 2025,
    "title": "Gemini 2.5: Thinking Models",
    "summary": "Google introduced Gemini 2.5 in March 2025, emphasising reasoning across more complex tasks.",
    "detail": "Model, product, settings and tool access all affect performance. A launch leaderboard position should not become a permanent claim about which tool is best.",
    "people": [
      "Demis Hassabis",
      "Sundar Pichai"
    ],
    "category": "tools",
    "icon": "⭐",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/"
      }
    ]
  },
  {
    "year": 2025,
    "title": "OpenAI o3 and o4-mini",
    "summary": "OpenAI released o3 and o4-mini in April 2025, combining reasoning with tool use in supported workflows.",
    "detail": "Benchmark comparisons need their conditions, including tools and computational budget. A result with tools should not be silently compared with a result obtained without them.",
    "people": [
      "Sam Altman"
    ],
    "category": "milestone",
    "icon": "🔮",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://openai.com/index/introducing-o3-and-o4-mini/"
      }
    ]
  },
  {
    "year": 2025,
    "title": "From Answers to Tool Actions",
    "summary": "By 2025, model products increasingly combined generated plans with tools that could inspect or change external systems.",
    "detail": "An agent is a workflow, not simply a more fluent chatbot. Separate capability from permission; inspect action arguments, limits and recovery. This is a trend, not a claim that all agents became reliable in one year.",
    "people": [
      "Sam Altman",
      "Dario Amodei"
    ],
    "category": "tools",
    "icon": "🤖",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://modelcontextprotocol.io/docs/tutorials/security/authorization"
      }
    ]
  },
  {
    "year": 2025,
    "title": "Claude 4 Arrives",
    "summary": "Anthropic introduced Claude Opus 4 and Claude Sonnet 4 in May 2025.",
    "detail": "This is a dated release milestone, not a current buying recommendation. Model names, availability and prices change; assess a current tool against the task and school requirements.",
    "people": [
      "Dario Amodei"
    ],
    "category": "milestone",
    "icon": "✨",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.anthropic.com/news/claude-4"
      }
    ]
  },
  {
    "year": 2025,
    "title": "AI Coding Needs Task-Specific Evaluation",
    "summary": "AI-assisted development became a prominent use case across coding tools and model products.",
    "detail": "A productivity result from one study does not describe every developer or task. Compare completion time, correctness, review effort and maintenance under the actual conditions. Separate adoption surveys from causal evidence.",
    "people": [],
    "category": "industry",
    "icon": "💻",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
      }
    ]
  },
  {
    "year": 2026,
    "title": "UK Copyright and AI Report",
    "summary": "The UK government published its copyright and AI report and impact assessment in March 2026.",
    "detail": "The report considers the existing framework and possible changes. A policy preference or proposed reform is not automatically enacted law. UK computer-generated-work provisions require separate analysis from US human-authorship guidance.",
    "people": [],
    "category": "policy",
    "icon": "🔮",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence"
      }
    ]
  },
  {
    "year": 2026,
    "title": "An AI Literacy Framework for Schools",
    "summary": "The OECD and European Commission presented their AI Literacy Framework for primary and secondary education in June 2026.",
    "detail": "Its four domains address engaging with, creating with, managing and shaping AI. Use the framework to ask what pupils can explain, create, check and improve, rather than judging literacy by tool access alone.",
    "people": [],
    "category": "policy",
    "icon": "⭐",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.oecd.org/en/publications/empowering-learners-for-the-age-of-ai_65cd27d4-en.html"
      }
    ]
  },
  {
    "year": 2026,
    "title": "AI Companions and Children’s Rights",
    "summary": "UNICEF published a brief on AI companions and child-rights risks in June 2026.",
    "detail": "The brief examines risks and policy responses. Distinguish its recommendations from binding local requirements, and analyse safeguards through fictional cases rather than asking pupils to disclose private experiences.",
    "people": [],
    "category": "policy",
    "icon": "🔵",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.unicef.org/documents/when-ai-becomes-friend-child-rights-risks"
      }
    ]
  },
  {
    "year": 2026,
    "title": "Energy and AI: Better Questions",
    "summary": "The IEA’s 2026 report examines key questions about energy and AI.",
    "detail": "Separate data-centre totals from AI-specific estimates and distinguish electricity, emissions and water. A meaningful comparison needs a task, boundary, date and uncertainty; there is no universal measured cost for every prompt.",
    "people": [],
    "category": "research",
    "icon": "🌍",
    "sources": [
      {
        "label": "Read the source and context",
        "url": "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary"
      }
    ]
  }
];
