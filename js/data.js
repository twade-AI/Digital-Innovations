/* ── Course Data ── Digital Innovations AEP ─────────────── */

const UNITS = [
  {
    id: 0,
    title: "Foundations of AI",
    icon: "🧠",
    colour: "#6366f1",
    lessons: [
      { id:1,  title:"Your AI Footprint",                 desc:"Audit your daily interactions with AI systems and map your personal AI ecosystem.", tags:["activity","discussion"], objectives:["Identify AI systems in everyday life","Map personal AI usage","Evaluate reliance on AI tools"], resources:["r5"] },
      { id:2,  title:"The Parrot vs. The Librarian",       desc:"Explore the difference between pattern-matching language models and true understanding.", tags:["debate","theory"], objectives:["Distinguish stochastic parrots from knowledge retrieval","Analyse LLM capabilities and limits","Form an evidence-based opinion on AI understanding"], resources:[] },
      { id:3,  title:"How a Machine Learns (Unplugged)",   desc:"Walk through supervised learning with a hands-on, no-computer activity.", tags:["unplugged","activity"], objectives:["Explain training, validation & test sets","Demonstrate overfitting vs. generalisation","Relate unplugged model to real ML pipelines"], resources:[] },
      { id:4,  title:"The Black Box",                      desc:"Investigate why complex models are hard to interpret and what explainability means.", tags:["theory","discussion"], objectives:["Define model interpretability","Evaluate trade-offs between accuracy and explainability","Discuss real-world consequences of opaque models"], resources:[] },
      { id:5,  title:"Bias In, Bias Out",                  desc:"Examine how training data bias leads to unfair AI outcomes using real case studies.", tags:["case-study","ethics"], objectives:["Identify sources of data bias","Analyse biased AI outcomes","Propose bias-mitigation strategies"], resources:["r9"] },
      { id:6,  title:"The Data Harvest",                   desc:"Explore how personal data is collected, stored and used to train AI models.", tags:["research","ethics"], objectives:["Trace data supply chains","Evaluate privacy implications","Assess consent and data rights"], resources:[] },
      { id:7,  title:"The Trolley Problem Goes Digital",   desc:"Apply classic ethical dilemmas to autonomous systems and AI decision-making.", tags:["debate","ethics"], objectives:["Apply utilitarian and deontological frameworks to AI","Debate autonomous vehicle ethics","Evaluate moral agency of AI systems"], resources:[] },
      { id:8,  title:"Human in the Loop",                  desc:"Analyse when and why human oversight is essential in AI-assisted decisions.", tags:["case-study","theory"], objectives:["Define human-in-the-loop, on-the-loop, out-of-the-loop","Evaluate oversight requirements by domain","Design appropriate human-AI collaboration models"], resources:[] },
    ]
  },
  {
    id: 1,
    title: "Prompt Engineering & Research",
    icon: "✍️",
    colour: "#8b5cf6",
    lessons: [
      { id:9,  title:"Prompt Architecture",                desc:"Learn the PTFC framework — Persona, Task, Format, Constraints — for effective prompting.", tags:["practical","framework"], objectives:["Apply the PTFC framework","Iterate prompts for improved output","Evaluate prompt quality criteria"], resources:["r17","r3"] },
      { id:10, title:"Synthetic Creativity & Copyright",    desc:"Debate whether AI-generated content can be creative and who owns the output.", tags:["debate","ethics"], objectives:["Analyse copyright law and AI-generated works","Debate ownership of AI outputs","Evaluate impact on creative industries"], resources:["r14"] },
      { id:11, title:"Deep Research & Career Disruption",   desc:"Use AI research tools to investigate how AI is reshaping industries and careers.", tags:["research","discussion"], objectives:["Conduct AI-assisted deep research","Analyse career disruption data","Evaluate future workforce scenarios"], resources:["r5"] },
      { id:12, title:"The Revision Loop",                   desc:"Use iterative prompt refinement to improve AI outputs for academic tasks.", tags:["practical","activity"], objectives:["Implement systematic prompt iteration","Use AI as a revision partner","Evaluate output quality improvements"], resources:["r3","r17"] },
    ]
  },
  {
    id: 2,
    title: "AI & Society",
    icon: "🌐",
    colour: "#06b6d4",
    lessons: [
      { id:13, title:"Deepfakes and Disinformation",       desc:"Analyse deepfake technology, detection methods and societal impact.", tags:["case-study","ethics"], objectives:["Identify deepfake techniques","Apply detection strategies","Evaluate societal risks of synthetic media"], resources:["r16"] },
      { id:14, title:"Surveillance and Facial Recognition", desc:"Examine the use of facial recognition in public spaces and its civil liberties implications.", tags:["debate","ethics"], objectives:["Analyse facial recognition technology","Debate surveillance vs. safety","Evaluate civil liberties implications"], resources:["r15"] },
      { id:15, title:"The Environmental Cost",              desc:"Investigate the carbon footprint of training and running large AI models.", tags:["research","data"], objectives:["Quantify AI energy consumption","Compare environmental costs across model sizes","Propose sustainable AI strategies"], resources:["r18"] },
      { id:16, title:"Global Regulation",                   desc:"Compare AI regulation approaches across the EU, US, UK and China.", tags:["research","policy"], objectives:["Map global regulatory landscape","Compare regulatory philosophies","Evaluate effectiveness of different approaches"], resources:["r12"] },
    ]
  },
  {
    id: 3,
    title: "Policy & Governance",
    icon: "📜",
    colour: "#f59e0b",
    lessons: [
      { id:17, title:"Analysing the Status Quo",           desc:"Audit existing school and university AI policies to identify gaps and strengths.", tags:["research","analysis"], objectives:["Analyse existing AI policies","Identify policy gaps","Benchmark against best practice"], resources:["r13"] },
      { id:18, title:"Defining Acceptable Use",            desc:"Collaboratively define what acceptable AI use looks like in an educational context.", tags:["workshop","policy"], objectives:["Define acceptable use criteria","Balance innovation with safeguarding","Draft acceptable use principles"], resources:["r13","r10"] },
      { id:19, title:"Drafting the Document",              desc:"Write a formal AI acceptable use policy using professional drafting techniques.", tags:["practical","writing"], objectives:["Structure a formal policy document","Use precise policy language","Include enforcement mechanisms"], resources:["r10"] },
      { id:20, title:"Ratification",                       desc:"Present, debate and vote on class AI policies in a simulated governance process.", tags:["presentation","debate"], objectives:["Present policy proposals","Engage in democratic debate","Ratify through voting process"], resources:["r10"] },
    ]
  },
  {
    id: 4,
    title: "Capstone Project",
    icon: "🚀",
    colour: "#22c55e",
    lessons: [
      { id:21, title:"From Consumer to Co-Creator",        desc:"Shift mindset from using AI to building with AI — introduction to the capstone.", tags:["introduction","planning"], objectives:["Understand capstone requirements","Shift from consumer to creator mindset","Explore project possibilities"], resources:["r1","r5"] },
      { id:22, title:"Defining the Problem Statement",     desc:"Craft a clear, focused problem statement that your capstone will address.", tags:["planning","writing"], objectives:["Write a focused problem statement","Validate problem significance","Define success criteria"], resources:["r1"] },
      { id:23, title:"Ethics by Design",                   desc:"Build ethical considerations into your project from the ground up.", tags:["ethics","planning"], objectives:["Apply ethics-by-design principles","Identify potential harms","Build in safeguards and transparency"], resources:["r9"] },
      { id:24, title:"Project Planning & Architecture",    desc:"Create a project plan with milestones, sprints and technical architecture.", tags:["planning","practical"], objectives:["Create a sprint-based project plan","Design technical architecture","Set measurable milestones"], resources:["r1","r6"] },
      { id:25, title:"Applying Prompt Architecture",       desc:"Design the prompts your project will use, applying the PTFC framework at scale.", tags:["practical","framework"], objectives:["Design production-quality prompts","Create prompt libraries","Test prompts systematically"], resources:["r17","r3"] },
      { id:26, title:"Logic Flows & Edge Cases",           desc:"Map out logic flows and identify edge cases before building.", tags:["planning","analysis"], objectives:["Create logic flow diagrams","Identify and handle edge cases","Design error handling strategies"], resources:["r1"] },
      { id:27, title:"Sprint 0 — The Foundation",          desc:"Build the foundational layer of your capstone project.", tags:["build","practical"], objectives:["Set up project infrastructure","Implement core functionality","Establish testing approach"], resources:["r6"] },
      { id:28, title:"Initial Peer Review",                desc:"Give and receive structured feedback on Sprint 0 deliverables.", tags:["review","collaboration"], objectives:["Give constructive peer feedback","Receive and process criticism","Iterate based on feedback"], resources:["r8"] },
      { id:29, title:"Deep Work Session 1",                desc:"Extended build session with teacher check-ins and structured progress tracking.", tags:["build","practical"], objectives:["Make meaningful progress on capstone","Document decisions and blockers","Maintain sprint diary"], resources:["r6"] },
      { id:30, title:"Deep Work Session 2",                desc:"Continue building with focus on integrating feedback from peer review.", tags:["build","practical"], objectives:["Integrate peer feedback","Resolve identified issues","Advance core features"], resources:["r6","r8"] },
      { id:31, title:"Deep Work Session 3",                desc:"Mid-project build session focusing on testing and refinement.", tags:["build","testing"], objectives:["Conduct systematic testing","Refine user experience","Document progress in sprint diary"], resources:["r6"] },
      { id:32, title:"Deep Work Session 4",                desc:"Pre-audit build session — polish, test and prepare for ethical audit.", tags:["build","practical"], objectives:["Complete core functionality","Polish user interface","Prepare for ethical audit"], resources:["r6","r9"] },
      { id:33, title:"Deep Work Session 5",                desc:"Final build session — incorporate audit findings and prepare deliverables.", tags:["build","practical"], objectives:["Address audit findings","Finalise all deliverables","Complete documentation"], resources:["r6"] },
      { id:34, title:"The Ethical Audit",                   desc:"Conduct a formal ethical audit of your project using a structured checklist.", tags:["ethics","assessment"], objectives:["Apply ethical audit checklist","Identify ethical risks","Document mitigations and trade-offs"], resources:["r9"] },
      { id:35, title:"The Pitch Deck",                      desc:"Create a compelling presentation that communicates your project's value.", tags:["presentation","practical"], objectives:["Structure a pitch deck","Communicate technical concepts clearly","Design compelling visuals"], resources:["r2"] },
      { id:36, title:"Dress Rehearsal",                     desc:"Practice your presentation with peer feedback before the final showcase.", tags:["presentation","review"], objectives:["Deliver a timed presentation","Receive presentation feedback","Refine delivery and content"], resources:["r2","r7","r8"] },
    ]
  },
  {
    id: 5,
    title: "Presentations & Reflection",
    icon: "🎤",
    colour: "#ef4444",
    lessons: [
      { id:37, title:"Presentations — Group 1",            desc:"First group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:38, title:"Presentations — Group 2",            desc:"Second group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:39, title:"Viva Voce — Session 1",              desc:"Individual oral examination on your capstone project and course learning.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:40, title:"Viva Voce — Session 2",              desc:"Continuation of viva voce examinations.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:41, title:"The Automated Graduate",              desc:"Explore how AI will shape higher education and graduate employment.", tags:["discussion","research"], objectives:["Analyse AI in higher education","Evaluate graduate employability","Plan personal development strategy"], resources:["r5"] },
      { id:42, title:"The Personal Statement Audit",        desc:"Use AI tools critically to review and improve personal statements.", tags:["practical","writing"], objectives:["Critically use AI writing tools","Maintain authentic voice","Improve personal statement quality"], resources:["r17","r3"] },
      { id:43, title:"Course Retrospective",                desc:"Reflect on the entire course using structured retrospective techniques.", tags:["reflection","discussion"], objectives:["Apply retrospective frameworks","Identify key learnings","Celebrate achievements"], resources:["r4"] },
      { id:44, title:"The AI Manifesto",                    desc:"Write your personal AI manifesto — your principles for living and working with AI.", tags:["writing","reflection"], objectives:["Synthesise course learning","Articulate personal AI principles","Create a forward-looking manifesto"], resources:["r11","r4"] },
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

/* ── Resource Full Content ─────────────────────── */
const RESOURCE_CONTENT = {
  r1: `<h4>Capstone Project Brief</h4>
<div class="resource-template-section"><h5>Project Title</h5><textarea class="resource-field" rows="2" placeholder="Enter your project title..."></textarea></div>
<div class="resource-template-section"><h5>Problem Statement</h5><textarea class="resource-field" rows="4" placeholder="What problem does your project address?"></textarea></div>
<div class="resource-template-section"><h5>Target Audience</h5><textarea class="resource-field" rows="3" placeholder="Who will use or benefit from this?"></textarea></div>
<div class="resource-template-section"><h5>Key Deliverables</h5><textarea class="resource-field" rows="4" placeholder="List your main deliverables..."></textarea></div>
<div class="resource-template-section"><h5>Success Criteria</h5><textarea class="resource-field" rows="3" placeholder="How will you measure success?"></textarea></div>`,

  r6: `<h4>Sprint Diary</h4>
<div class="resource-template-section"><h5>Sprint Goal</h5><textarea class="resource-field" rows="2" placeholder="What is the goal for this sprint?"></textarea></div>
<div class="resource-template-section"><h5>Tasks Completed</h5><textarea class="resource-field" rows="4" placeholder="What did you accomplish?"></textarea></div>
<div class="resource-template-section"><h5>Blockers & Challenges</h5><textarea class="resource-field" rows="3" placeholder="What slowed you down?"></textarea></div>
<div class="resource-template-section"><h5>Reflections</h5><textarea class="resource-field" rows="3" placeholder="What did you learn?"></textarea></div>`,

  r9: `<h4>Ethics Audit Checklist</h4>
<p>Work through each area and assess your project honestly.</p>
<ul>
<li><strong>Data Privacy</strong> — Does your project collect, store or process personal data? Are users informed?</li>
<li><strong>Bias & Fairness</strong> — Could your system produce biased outcomes? Have you tested with diverse inputs?</li>
<li><strong>Transparency</strong> — Can users understand how your system works and makes decisions?</li>
<li><strong>Accountability</strong> — Who is responsible if something goes wrong?</li>
<li><strong>Environmental Impact</strong> — Have you considered the computational cost?</li>
<li><strong>Accessibility</strong> — Is your project accessible to users with different needs?</li>
<li><strong>Misinformation Risk</strong> — Could your system generate or amplify false information?</li>
</ul>`,

  r17: `<h4>PTFC Framework</h4>
<p>Use this framework to structure effective AI prompts:</p>
<ul>
<li><strong>P — Persona:</strong> Who should the AI act as? (e.g. "You are an experienced science teacher")</li>
<li><strong>T — Task:</strong> What exactly should the AI do? Be specific and measurable.</li>
<li><strong>F — Format:</strong> How should the output be structured? (e.g. bullet points, table, essay)</li>
<li><strong>C — Constraints:</strong> What limits or rules apply? (e.g. word count, reading level, tone)</li>
</ul>
<div class="resource-template-section"><h5>Practice: Build a Prompt</h5>
<label style="font-size:.8rem;color:var(--text-muted)">Persona</label><input class="resource-field" placeholder="You are a...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Task</label><input class="resource-field" placeholder="Create / Explain / Analyse...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Format</label><input class="resource-field" placeholder="As a table / In 3 paragraphs...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Constraints</label><input class="resource-field" placeholder="Max 200 words / Year 12 reading level...">
</div>`,

  r2: `<h4>Pitch Deck Structure Guide</h4>
<p>A great pitch deck tells a story. Follow this structure to build yours slide by slide.</p>
<ol style="line-height:1.8">
<li><strong>Title Slide</strong> — Project name, your name, date and one-line tagline.</li>
<li><strong>The Problem</strong> — What pain point or gap does your project address? Use data or a story.</li>
<li><strong>Your Solution</strong> — How does your project solve this? Keep it clear and visual.</li>
<li><strong>Demo / How It Works</strong> — Show, don't tell. Screenshots, flows or a live demo.</li>
<li><strong>Technical Approach</strong> — Key technologies, AI models and architecture decisions.</li>
<li><strong>Ethical Considerations</strong> — How you addressed bias, privacy and transparency.</li>
<li><strong>Impact & Results</strong> — What did you achieve? Metrics, user feedback, test results.</li>
<li><strong>Reflections & Lessons Learned</strong> — What went well? What would you change?</li>
<li><strong>Next Steps</strong> — Where could this project go next?</li>
<li><strong>Q&A</strong> — Prepare 3 likely questions and your answers.</li>
</ol>
<div class="resource-template-section"><h5>Your Tagline</h5><input class="resource-field" placeholder="One sentence that captures your project..."></div>
<div class="resource-template-section"><h5>Key Message</h5><textarea class="resource-field" rows="3" placeholder="What is the single most important thing the audience should remember?"></textarea></div>`,

  r3: `<h4>Prompt Iteration Log</h4>
<p>Track how your prompts evolve. Each iteration should aim to improve output quality.</p>
<div class="resource-template-section"><h5>Prompt Goal</h5><input class="resource-field" placeholder="What are you trying to get the AI to produce?"></div>
<div class="resource-template-section">
<h5>Version 1</h5>
<textarea class="resource-field" rows="3" placeholder="Paste your first prompt attempt..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:6px;display:block">Output Quality (1-5):</label>
<input class="resource-field" placeholder="Rate 1-5 and note what was wrong...">
</div>
<div class="resource-template-section">
<h5>Version 2</h5>
<textarea class="resource-field" rows="3" placeholder="Paste your revised prompt..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:6px;display:block">What did you change and why?</label>
<input class="resource-field" placeholder="e.g. Added persona, tightened constraints...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:6px;display:block">Output Quality (1-5):</label>
<input class="resource-field" placeholder="Rate 1-5 and note improvements...">
</div>
<div class="resource-template-section">
<h5>Version 3</h5>
<textarea class="resource-field" rows="3" placeholder="Paste your final refined prompt..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:6px;display:block">What did you change and why?</label>
<input class="resource-field" placeholder="e.g. Changed format, added examples...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:6px;display:block">Output Quality (1-5):</label>
<input class="resource-field" placeholder="Rate 1-5 and note improvements...">
</div>
<div class="resource-template-section"><h5>Key Takeaway</h5><textarea class="resource-field" rows="2" placeholder="What is the most important lesson from this iteration cycle?"></textarea></div>`,

  r4: `<h4>Reflective Essay Guide</h4>
<p>Use this framework to write a structured, meaningful reflective essay on your AI learning journey.</p>
<div style="background:rgba(99,102,241,.08);border-radius:10px;padding:16px;margin:12px 0">
<h5 style="margin:0 0 8px 0">Suggested Structure</h5>
<ol style="line-height:1.8;margin:0">
<li><strong>Introduction</strong> — Set the scene. What was your starting point with AI?</li>
<li><strong>Description</strong> — What key experiences or activities shaped your understanding?</li>
<li><strong>Analysis</strong> — Why were those moments significant? What did they reveal?</li>
<li><strong>Evaluation</strong> — What went well? What challenged you? How did your views change?</li>
<li><strong>Action Plan</strong> — How will you apply what you have learned going forward?</li>
</ol>
</div>
<h5>Reflective Prompts</h5>
<ul>
<li>What surprised you most about working with AI?</li>
<li>How did your understanding of AI ethics evolve?</li>
<li>What was your biggest challenge, and how did you overcome it?</li>
<li>How has this course changed the way you think about technology?</li>
<li>What skills have you developed that will serve you beyond this course?</li>
</ul>
<div class="resource-template-section"><h5>Draft Your Opening Paragraph</h5><textarea class="resource-field" rows="5" placeholder="Before this course, I thought AI was... Now I understand that..."></textarea></div>`,

  r5: `<h4>Skills Audit</h4>
<p>Rate yourself honestly on each skill area. Use this at the start and end of the course to track growth.</p>
<table style="width:100%;border-collapse:collapse;font-size:.88rem">
<thead><tr style="border-bottom:2px solid var(--border)">
<th style="text-align:left;padding:8px">Skill Area</th>
<th style="text-align:center;padding:8px">Beginner</th>
<th style="text-align:center;padding:8px">Developing</th>
<th style="text-align:center;padding:8px">Competent</th>
<th style="text-align:center;padding:8px">Advanced</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Prompt Engineering</strong></td><td style="text-align:center"><input type="radio" name="s1"></td><td style="text-align:center"><input type="radio" name="s1"></td><td style="text-align:center"><input type="radio" name="s1"></td><td style="text-align:center"><input type="radio" name="s1"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Critical Evaluation of AI Output</strong></td><td style="text-align:center"><input type="radio" name="s2"></td><td style="text-align:center"><input type="radio" name="s2"></td><td style="text-align:center"><input type="radio" name="s2"></td><td style="text-align:center"><input type="radio" name="s2"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>AI Ethics & Responsibility</strong></td><td style="text-align:center"><input type="radio" name="s3"></td><td style="text-align:center"><input type="radio" name="s3"></td><td style="text-align:center"><input type="radio" name="s3"></td><td style="text-align:center"><input type="radio" name="s3"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Research & Analysis</strong></td><td style="text-align:center"><input type="radio" name="s4"></td><td style="text-align:center"><input type="radio" name="s4"></td><td style="text-align:center"><input type="radio" name="s4"></td><td style="text-align:center"><input type="radio" name="s4"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Project Planning</strong></td><td style="text-align:center"><input type="radio" name="s5"></td><td style="text-align:center"><input type="radio" name="s5"></td><td style="text-align:center"><input type="radio" name="s5"></td><td style="text-align:center"><input type="radio" name="s5"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Presentation & Communication</strong></td><td style="text-align:center"><input type="radio" name="s6"></td><td style="text-align:center"><input type="radio" name="s6"></td><td style="text-align:center"><input type="radio" name="s6"></td><td style="text-align:center"><input type="radio" name="s6"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Collaboration & Peer Review</strong></td><td style="text-align:center"><input type="radio" name="s7"></td><td style="text-align:center"><input type="radio" name="s7"></td><td style="text-align:center"><input type="radio" name="s7"></td><td style="text-align:center"><input type="radio" name="s7"></td></tr>
<tr><td style="padding:8px"><strong>Reflective Practice</strong></td><td style="text-align:center"><input type="radio" name="s8"></td><td style="text-align:center"><input type="radio" name="s8"></td><td style="text-align:center"><input type="radio" name="s8"></td><td style="text-align:center"><input type="radio" name="s8"></td></tr>
</tbody></table>
<div class="resource-template-section" style="margin-top:16px"><h5>Strengths</h5><textarea class="resource-field" rows="2" placeholder="Which skills are you most confident in?"></textarea></div>
<div class="resource-template-section"><h5>Development Priorities</h5><textarea class="resource-field" rows="2" placeholder="Which 2-3 skills do you most want to improve?"></textarea></div>`,

  r7: `<h4>Presentation Assessment Rubric</h4>
<p>Use this rubric to assess capstone presentations. Rate each criterion 1-4.</p>
<table style="width:100%;border-collapse:collapse;font-size:.85rem">
<thead><tr style="border-bottom:2px solid var(--border)">
<th style="text-align:left;padding:8px">Criterion</th>
<th style="text-align:center;padding:8px;min-width:60px">1<br><span style="font-weight:400;font-size:.75rem">Limited</span></th>
<th style="text-align:center;padding:8px;min-width:60px">2<br><span style="font-weight:400;font-size:.75rem">Developing</span></th>
<th style="text-align:center;padding:8px;min-width:60px">3<br><span style="font-weight:400;font-size:.75rem">Good</span></th>
<th style="text-align:center;padding:8px;min-width:60px">4<br><span style="font-weight:400;font-size:.75rem">Excellent</span></th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Problem Definition</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Clarity of problem statement and context</span></td><td style="text-align:center"><input type="radio" name="c1"></td><td style="text-align:center"><input type="radio" name="c1"></td><td style="text-align:center"><input type="radio" name="c1"></td><td style="text-align:center"><input type="radio" name="c1"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Technical Quality</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Appropriate use of AI, sound architecture</span></td><td style="text-align:center"><input type="radio" name="c2"></td><td style="text-align:center"><input type="radio" name="c2"></td><td style="text-align:center"><input type="radio" name="c2"></td><td style="text-align:center"><input type="radio" name="c2"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Ethical Awareness</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Evidence of ethical thinking and safeguards</span></td><td style="text-align:center"><input type="radio" name="c3"></td><td style="text-align:center"><input type="radio" name="c3"></td><td style="text-align:center"><input type="radio" name="c3"></td><td style="text-align:center"><input type="radio" name="c3"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Presentation Delivery</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Confidence, pacing, audience engagement</span></td><td style="text-align:center"><input type="radio" name="c4"></td><td style="text-align:center"><input type="radio" name="c4"></td><td style="text-align:center"><input type="radio" name="c4"></td><td style="text-align:center"><input type="radio" name="c4"></td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Visual Design</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Slide quality, layout, supporting visuals</span></td><td style="text-align:center"><input type="radio" name="c5"></td><td style="text-align:center"><input type="radio" name="c5"></td><td style="text-align:center"><input type="radio" name="c5"></td><td style="text-align:center"><input type="radio" name="c5"></td></tr>
<tr><td style="padding:8px"><strong>Q&A Responses</strong><br><span style="font-size:.78rem;color:var(--text-dim)">Depth, composure and accuracy under questioning</span></td><td style="text-align:center"><input type="radio" name="c6"></td><td style="text-align:center"><input type="radio" name="c6"></td><td style="text-align:center"><input type="radio" name="c6"></td><td style="text-align:center"><input type="radio" name="c6"></td></tr>
</tbody></table>
<div class="resource-template-section" style="margin-top:16px"><h5>Overall Comments</h5><textarea class="resource-field" rows="3" placeholder="What were the main strengths and areas for improvement?"></textarea></div>
<div class="resource-template-section"><h5>Suggested Grade</h5><input class="resource-field" placeholder="e.g. Merit, Distinction..."></div>`,
};

/* ── Lesson Slide Content ──────────────────────── */
/* Each lesson can have auto-generated slides based on its data.
   Slides are arrays of objects: { type, title, content }
   Types: hook, concept, example, discussion, activity, summary */

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
