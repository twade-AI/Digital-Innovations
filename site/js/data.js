/* ── Course Data ── Digital Innovations AEP ─────────────── */

const UNITS = [
  {
    id: 0,
    title: "Foundations of AI",
    icon: "🧠",
    colour: "#6366f1",
    lessons: [
      { id:1,  title:"Your AI Footprint",                 desc:"Audit your daily interactions with AI systems and map your personal AI ecosystem.", tags:["activity","discussion"], objectives:["Identify AI systems in everyday life","Map personal AI usage","Evaluate reliance on AI tools"] },
      { id:2,  title:"The Parrot vs. The Librarian",       desc:"Explore the difference between pattern-matching language models and true understanding.", tags:["debate","theory"], objectives:["Distinguish stochastic parrots from knowledge retrieval","Analyse LLM capabilities and limits","Form an evidence-based opinion on AI understanding"] },
      { id:3,  title:"How a Machine Learns (Unplugged)",   desc:"Walk through supervised learning with a hands-on, no-computer activity.", tags:["unplugged","activity"], objectives:["Explain training, validation & test sets","Demonstrate overfitting vs. generalisation","Relate unplugged model to real ML pipelines"] },
      { id:4,  title:"The Black Box",                      desc:"Investigate why complex models are hard to interpret and what explainability means.", tags:["theory","discussion"], objectives:["Define model interpretability","Evaluate trade-offs between accuracy and explainability","Discuss real-world consequences of opaque models"] },
      { id:5,  title:"Bias In, Bias Out",                  desc:"Examine how training data bias leads to unfair AI outcomes using real case studies.", tags:["case-study","ethics"], objectives:["Identify sources of data bias","Analyse biased AI outcomes","Propose bias-mitigation strategies"] },
      { id:6,  title:"The Data Harvest",                   desc:"Explore how personal data is collected, stored and used to train AI models.", tags:["research","ethics"], objectives:["Trace data supply chains","Evaluate privacy implications","Assess consent and data rights"] },
      { id:7,  title:"The Trolley Problem Goes Digital",   desc:"Apply classic ethical dilemmas to autonomous systems and AI decision-making.", tags:["debate","ethics"], objectives:["Apply utilitarian and deontological frameworks to AI","Debate autonomous vehicle ethics","Evaluate moral agency of AI systems"] },
      { id:8,  title:"Human in the Loop",                  desc:"Analyse when and why human oversight is essential in AI-assisted decisions.", tags:["case-study","theory"], objectives:["Define human-in-the-loop, on-the-loop, out-of-the-loop","Evaluate oversight requirements by domain","Design appropriate human-AI collaboration models"] },
    ]
  },
  {
    id: 1,
    title: "Prompt Engineering & Research",
    icon: "✍️",
    colour: "#8b5cf6",
    lessons: [
      { id:9,  title:"Prompt Architecture",                desc:"Learn the PTFC framework — Persona, Task, Format, Constraints — for effective prompting.", tags:["practical","framework"], objectives:["Apply the PTFC framework","Iterate prompts for improved output","Evaluate prompt quality criteria"] },
      { id:10, title:"Synthetic Creativity & Copyright",    desc:"Debate whether AI-generated content can be creative and who owns the output.", tags:["debate","ethics"], objectives:["Analyse copyright law and AI-generated works","Debate ownership of AI outputs","Evaluate impact on creative industries"] },
      { id:11, title:"Deep Research & Career Disruption",   desc:"Use AI research tools to investigate how AI is reshaping industries and careers.", tags:["research","discussion"], objectives:["Conduct AI-assisted deep research","Analyse career disruption data","Evaluate future workforce scenarios"] },
      { id:12, title:"The Revision Loop",                   desc:"Use iterative prompt refinement to improve AI outputs for academic tasks.", tags:["practical","activity"], objectives:["Implement systematic prompt iteration","Use AI as a revision partner","Evaluate output quality improvements"] },
    ]
  },
  {
    id: 2,
    title: "AI & Society",
    icon: "🌐",
    colour: "#06b6d4",
    lessons: [
      { id:13, title:"Deepfakes and Disinformation",       desc:"Analyse deepfake technology, detection methods and societal impact.", tags:["case-study","ethics"], objectives:["Identify deepfake techniques","Apply detection strategies","Evaluate societal risks of synthetic media"] },
      { id:14, title:"Surveillance and Facial Recognition", desc:"Examine the use of facial recognition in public spaces and its civil liberties implications.", tags:["debate","ethics"], objectives:["Analyse facial recognition technology","Debate surveillance vs. safety","Evaluate civil liberties implications"] },
      { id:15, title:"The Environmental Cost",              desc:"Investigate the carbon footprint of training and running large AI models.", tags:["research","data"], objectives:["Quantify AI energy consumption","Compare environmental costs across model sizes","Propose sustainable AI strategies"] },
      { id:16, title:"Global Regulation",                   desc:"Compare AI regulation approaches across the EU, US, UK and China.", tags:["research","policy"], objectives:["Map global regulatory landscape","Compare regulatory philosophies","Evaluate effectiveness of different approaches"] },
    ]
  },
  {
    id: 3,
    title: "Policy & Governance",
    icon: "📜",
    colour: "#f59e0b",
    lessons: [
      { id:17, title:"Analysing the Status Quo",           desc:"Audit existing school and university AI policies to identify gaps and strengths.", tags:["research","analysis"], objectives:["Analyse existing AI policies","Identify policy gaps","Benchmark against best practice"] },
      { id:18, title:"Defining Acceptable Use",            desc:"Collaboratively define what acceptable AI use looks like in an educational context.", tags:["workshop","policy"], objectives:["Define acceptable use criteria","Balance innovation with safeguarding","Draft acceptable use principles"] },
      { id:19, title:"Drafting the Document",              desc:"Write a formal AI acceptable use policy using professional drafting techniques.", tags:["practical","writing"], objectives:["Structure a formal policy document","Use precise policy language","Include enforcement mechanisms"] },
      { id:20, title:"Ratification",                       desc:"Present, debate and vote on class AI policies in a simulated governance process.", tags:["presentation","debate"], objectives:["Present policy proposals","Engage in democratic debate","Ratify through voting process"] },
    ]
  },
  {
    id: 4,
    title: "Capstone Project",
    icon: "🚀",
    colour: "#22c55e",
    lessons: [
      { id:21, title:"From Consumer to Co-Creator",        desc:"Shift mindset from using AI to building with AI — introduction to the capstone.", tags:["introduction","planning"], objectives:["Understand capstone requirements","Shift from consumer to creator mindset","Explore project possibilities"] },
      { id:22, title:"Defining the Problem Statement",     desc:"Craft a clear, focused problem statement that your capstone will address.", tags:["planning","writing"], objectives:["Write a focused problem statement","Validate problem significance","Define success criteria"] },
      { id:23, title:"Ethics by Design",                   desc:"Build ethical considerations into your project from the ground up.", tags:["ethics","planning"], objectives:["Apply ethics-by-design principles","Identify potential harms","Build in safeguards and transparency"] },
      { id:24, title:"Project Planning & Architecture",    desc:"Create a project plan with milestones, sprints and technical architecture.", tags:["planning","practical"], objectives:["Create a sprint-based project plan","Design technical architecture","Set measurable milestones"] },
      { id:25, title:"Applying Prompt Architecture",       desc:"Design the prompts your project will use, applying the PTFC framework at scale.", tags:["practical","framework"], objectives:["Design production-quality prompts","Create prompt libraries","Test prompts systematically"] },
      { id:26, title:"Logic Flows & Edge Cases",           desc:"Map out logic flows and identify edge cases before building.", tags:["planning","analysis"], objectives:["Create logic flow diagrams","Identify and handle edge cases","Design error handling strategies"] },
      { id:27, title:"Sprint 0 — The Foundation",          desc:"Build the foundational layer of your capstone project.", tags:["build","practical"], objectives:["Set up project infrastructure","Implement core functionality","Establish testing approach"] },
      { id:28, title:"Initial Peer Review",                desc:"Give and receive structured feedback on Sprint 0 deliverables.", tags:["review","collaboration"], objectives:["Give constructive peer feedback","Receive and process criticism","Iterate based on feedback"] },
      { id:29, title:"Deep Work Session 1",                desc:"Extended build session with teacher check-ins and structured progress tracking.", tags:["build","practical"], objectives:["Make meaningful progress on capstone","Document decisions and blockers","Maintain sprint diary"] },
      { id:30, title:"Deep Work Session 2",                desc:"Continue building with focus on integrating feedback from peer review.", tags:["build","practical"], objectives:["Integrate peer feedback","Resolve identified issues","Advance core features"] },
      { id:31, title:"Deep Work Session 3",                desc:"Mid-project build session focusing on testing and refinement.", tags:["build","testing"], objectives:["Conduct systematic testing","Refine user experience","Document progress in sprint diary"] },
      { id:32, title:"Deep Work Session 4",                desc:"Pre-audit build session — polish, test and prepare for ethical audit.", tags:["build","practical"], objectives:["Complete core functionality","Polish user interface","Prepare for ethical audit"] },
      { id:33, title:"Deep Work Session 5",                desc:"Final build session — incorporate audit findings and prepare deliverables.", tags:["build","practical"], objectives:["Address audit findings","Finalise all deliverables","Complete documentation"] },
      { id:34, title:"The Ethical Audit",                   desc:"Conduct a formal ethical audit of your project using a structured checklist.", tags:["ethics","assessment"], objectives:["Apply ethical audit checklist","Identify ethical risks","Document mitigations and trade-offs"] },
      { id:35, title:"The Pitch Deck",                      desc:"Create a compelling presentation that communicates your project's value.", tags:["presentation","practical"], objectives:["Structure a pitch deck","Communicate technical concepts clearly","Design compelling visuals"] },
      { id:36, title:"Dress Rehearsal",                     desc:"Practice your presentation with peer feedback before the final showcase.", tags:["presentation","review"], objectives:["Deliver a timed presentation","Receive presentation feedback","Refine delivery and content"] },
    ]
  },
  {
    id: 5,
    title: "Presentations & Reflection",
    icon: "🎤",
    colour: "#ef4444",
    lessons: [
      { id:37, title:"Presentations — Group 1",            desc:"First group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"] },
      { id:38, title:"Presentations — Group 2",            desc:"Second group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"] },
      { id:39, title:"Viva Voce — Session 1",              desc:"Individual oral examination on your capstone project and course learning.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"] },
      { id:40, title:"Viva Voce — Session 2",              desc:"Continuation of viva voce examinations.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"] },
      { id:41, title:"The Automated Graduate",              desc:"Explore how AI will shape higher education and graduate employment.", tags:["discussion","research"], objectives:["Analyse AI in higher education","Evaluate graduate employability","Plan personal development strategy"] },
      { id:42, title:"The Personal Statement Audit",        desc:"Use AI tools critically to review and improve personal statements.", tags:["practical","writing"], objectives:["Critically use AI writing tools","Maintain authentic voice","Improve personal statement quality"] },
      { id:43, title:"Course Retrospective",                desc:"Reflect on the entire course using structured retrospective techniques.", tags:["reflection","discussion"], objectives:["Apply retrospective frameworks","Identify key learnings","Celebrate achievements"] },
      { id:44, title:"The AI Manifesto",                    desc:"Write your personal AI manifesto — your principles for living and working with AI.", tags:["writing","reflection"], objectives:["Synthesise course learning","Articulate personal AI principles","Create a forward-looking manifesto"] },
    ]
  }
];

const RESOURCES = [
  { id:"r1",  title:"Capstone Project Brief Template",       cat:"template",   desc:"Structured template for defining your capstone project scope, objectives and deliverables." },
  { id:"r2",  title:"Pitch Deck Structure Guide",            cat:"template",   desc:"Step-by-step guide for building a compelling project pitch presentation." },
  { id:"r3",  title:"Prompt Iteration Log",                  cat:"template",   desc:"Log template for tracking prompt versions, outputs and quality improvements." },
  { id:"r4",  title:"Reflective Essay Guide",                cat:"template",   desc:"Framework and prompts for writing reflective essays on your AI learning journey." },
  { id:"r5",  title:"Skills Audit Template",                 cat:"template",   desc:"Self-assessment template to audit your AI, technical and professional skills." },
  { id:"r6",  title:"Sprint Diary Template",                 cat:"template",   desc:"Daily and weekly sprint diary for tracking capstone project progress." },
  { id:"r7",  title:"Presentation Assessment Rubric",        cat:"assessment", desc:"Detailed rubric for assessing capstone presentations across multiple criteria." },
  { id:"r8",  title:"Peer Review Feedback Form",             cat:"assessment", desc:"Structured form for giving constructive peer feedback on projects." },
  { id:"r9",  title:"Ethics Audit Checklist",                cat:"assessment", desc:"Comprehensive checklist for conducting an ethical audit of AI projects." },
  { id:"r10", title:"AI Policy Drafting Template",           cat:"template",   desc:"Template for drafting formal AI acceptable use policies." },
  { id:"r11", title:"AI Manifesto Template",                 cat:"template",   desc:"Guide and template for writing your personal AI manifesto." },
  { id:"r12", title:"Regulation Jigsaw Cards",               cat:"reference",  desc:"Printable cards for the global AI regulation jigsaw activity." },
  { id:"r13", title:"University AI Policy Comparison",       cat:"reference",  desc:"Side-by-side comparison of AI policies from leading universities." },
  { id:"r14", title:"Copyright Debate Brief",                cat:"debate",     desc:"Background material and role cards for the AI copyright debate." },
  { id:"r15", title:"Surveillance Debate Pack",              cat:"debate",     desc:"Evidence pack and debate structure for the surveillance and facial recognition debate." },
  { id:"r16", title:"Deepfake Detection Checklist",          cat:"reference",  desc:"Practical checklist for identifying deepfake images, video and audio." },
  { id:"r17", title:"PTFC Framework Reference Card",         cat:"framework",  desc:"Quick-reference card for the Persona-Task-Format-Constraints prompt framework." },
  { id:"r18", title:"AI Environmental Impact Factsheet",     cat:"reference",  desc:"Data-driven factsheet on the environmental cost of training and running AI models." },
  { id:"r19", title:"Viva Voce Question Bank",               cat:"assessment", desc:"Bank of viva voce questions spanning all course themes and project areas." },
];
