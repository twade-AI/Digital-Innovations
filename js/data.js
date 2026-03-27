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
<p>Build your pitch deck slide-by-slide. Each section below maps to one slide in your presentation.</p>
<div class="resource-template-section"><h5>Slide 1 — Hook / Problem</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Open with a striking statistic, question or story that makes the problem feel real. One sentence max.</p>
<textarea class="resource-field" rows="2" placeholder="e.g. &quot;Every year, 800,000 students fail to access the mental health support they need...&quot;"></textarea></div>
<div class="resource-template-section"><h5>Slide 2 — Your Solution</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Describe your project in plain language. What does it do? How does it work?</p>
<textarea class="resource-field" rows="3" placeholder="Our project is... It works by... The key feature is..."></textarea></div>
<div class="resource-template-section"><h5>Slide 3 — Target Audience</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Who will use this? Be specific — age, context, needs.</p>
<textarea class="resource-field" rows="2" placeholder="Primary users: ... Secondary stakeholders: ..."></textarea></div>
<div class="resource-template-section"><h5>Slide 4 — Demo / Screenshot</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Describe what you will show — a live demo, walkthrough, or key screenshot. Note the 2–3 features to highlight.</p>
<textarea class="resource-field" rows="3" placeholder="We will demo... The key interactions to show are... We will highlight..."></textarea></div>
<div class="resource-template-section"><h5>Slide 5 — Ethical Considerations</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What ethical risks exist and how have you addressed them? Panels expect this.</p>
<textarea class="resource-field" rows="3" placeholder="Key risks identified: ... Mitigations built in: ... Trade-offs accepted: ..."></textarea></div>
<div class="resource-template-section"><h5>Slide 6 — What We Learned</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Reflect on the build process. What surprised you? What would you do differently?</p>
<textarea class="resource-field" rows="3" placeholder="Biggest technical challenge: ... Most important lesson: ... If we had more time: ..."></textarea></div>
<div class="resource-template-section"><h5>Slide 7 — Q&amp;A Preparation</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Anticipate the three toughest questions you could be asked and draft your answers.</p>
<textarea class="resource-field" rows="4" placeholder="Q1: ... A: ...\nQ2: ... A: ...\nQ3: ... A: ..."></textarea></div>`,

  r3: `<h4>Prompt Iteration Log</h4>
<p>Log each version of your prompt here. Tracking iterations helps you understand what works and why.</p>
<div class="resource-template-section"><h5>Task / Goal</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What are you trying to get the AI to produce?</p>
<textarea class="resource-field" rows="2" placeholder="e.g. Write a paragraph explaining neural networks to a Year 9 student..."></textarea></div>
<div class="resource-template-section"><h5>Iteration 1</h5>
<label style="font-size:.8rem;color:var(--text-muted)">Prompt used</label>
<textarea class="resource-field" rows="2" placeholder="Paste your first prompt here..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Output quality (1–5) &amp; notes</label>
<input class="resource-field" placeholder="Score: _/5 — What was good? What was missing?"></div>
<div class="resource-template-section"><h5>Iteration 2</h5>
<label style="font-size:.8rem;color:var(--text-muted)">What you changed and why</label>
<input class="resource-field" placeholder="I added / removed / changed... because...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Prompt used</label>
<textarea class="resource-field" rows="2" placeholder="Paste your revised prompt here..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Output quality (1–5) &amp; notes</label>
<input class="resource-field" placeholder="Score: _/5 — Improvement? New problems?"></div>
<div class="resource-template-section"><h5>Iteration 3</h5>
<label style="font-size:.8rem;color:var(--text-muted)">What you changed and why</label>
<input class="resource-field" placeholder="I added / removed / changed... because...">
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Prompt used</label>
<textarea class="resource-field" rows="2" placeholder="Paste your revised prompt here..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Output quality (1–5) &amp; notes</label>
<input class="resource-field" placeholder="Score: _/5 — Improvement? New problems?"></div>
<div class="resource-template-section"><h5>Final Reflection</h5>
<textarea class="resource-field" rows="3" placeholder="What made the biggest difference across iterations? What prompt engineering principle did you discover?"></textarea></div>`,

  r4: `<h4>Reflective Essay Guide</h4>
<p>Use this framework to write a structured reflective essay on your AI learning journey. Aim for 600–900 words.</p>
<ul>
<li><strong>Introduction:</strong> Set the scene — where were you when this course began? What did you think AI was?</li>
<li><strong>Key Turning Point:</strong> Identify the lesson, activity or moment that most changed your thinking.</li>
<li><strong>Critical Incident:</strong> Describe one specific thing you built, said or did. Use concrete detail.</li>
<li><strong>Analysis:</strong> Why did this matter? Connect it to wider themes (ethics, society, your future).</li>
<li><strong>Conclusion:</strong> Where are you now? What will you do differently because of this course?</li>
</ul>
<div class="resource-template-section"><h5>Introduction Draft</h5>
<textarea class="resource-field" rows="4" placeholder="Before this course, I thought AI was... My relationship with AI tools was... I expected this course would..."></textarea></div>
<div class="resource-template-section"><h5>Key Turning Point</h5>
<textarea class="resource-field" rows="3" placeholder="The lesson / activity that most changed my thinking was... because..."></textarea></div>
<div class="resource-template-section"><h5>Critical Incident (What happened?)</h5>
<textarea class="resource-field" rows="4" placeholder="Describe the specific moment in detail: what you did, what the AI produced, how you felt, what you noticed..."></textarea></div>
<div class="resource-template-section"><h5>Analysis (Why did it matter?)</h5>
<textarea class="resource-field" rows="4" placeholder="This matters because... It connects to the wider theme of... In terms of my future..."></textarea></div>
<div class="resource-template-section"><h5>Conclusion — Your Position Now</h5>
<textarea class="resource-field" rows="3" placeholder="My view of AI has changed from... to... Going forward, I will... The most important thing I am taking away is..."></textarea></div>
<div class="resource-template-section"><h5>Useful Sentence Starters</h5>
<p style="font-size:.8rem;color:var(--text-muted)">This made me realise... / I was surprised to find... / Contrary to my initial assumption... / What struck me most was... / In hindsight... / I now understand that...</p></div>`,

  r5: `<h4>Skills Audit Template</h4>
<p>Rate yourself honestly in each area using the scale: <strong>1 = Novice</strong> | <strong>2 = Developing</strong> | <strong>3 = Competent</strong> | <strong>4 = Proficient</strong> | <strong>5 = Expert</strong></p>
<div class="resource-template-section"><h5>AI Literacy Skills</h5>
<ul>
<li>Understanding how LLMs work (training, tokens, temperature) — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Identifying AI strengths, limitations and failure modes — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Evaluating AI-generated content critically — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Applying ethical frameworks to AI use — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
</ul></div>
<div class="resource-template-section"><h5>Prompt Engineering Skills</h5>
<ul>
<li>Writing clear, structured prompts (PTFC framework) — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Iterating prompts to improve outputs — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Using AI for research and fact-checking — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Maintaining academic integrity when using AI — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
</ul></div>
<div class="resource-template-section"><h5>Technical &amp; Project Skills</h5>
<ul>
<li>Planning and managing a project (sprints, milestones) — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Building / prototyping an AI-powered tool — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Testing and debugging systematically — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Documenting decisions and trade-offs — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
</ul></div>
<div class="resource-template-section"><h5>Professional Skills</h5>
<ul>
<li>Communicating technical ideas clearly — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Giving and receiving constructive feedback — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Presenting confidently to an audience — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
<li>Adapting to new tools and challenges — Rate: <input class="resource-field" style="width:60px;display:inline" placeholder="1–5"></li>
</ul></div>
<div class="resource-template-section"><h5>Priority Development Areas</h5>
<textarea class="resource-field" rows="3" placeholder="Based on my ratings, the 3 areas I most want to develop are... I will work on these by..."></textarea></div>`,

  r7: `<h4>Presentation Assessment Rubric</h4>
<p>Assessors use this rubric to evaluate capstone presentations. Each criterion is scored 1–4.</p>
<div class="resource-template-section"><h5>Criterion 1: Project Understanding</h5>
<ul>
<li><strong>4 — Excellent:</strong> Demonstrates deep understanding of all aspects; handles complex questions fluently.</li>
<li><strong>3 — Good:</strong> Clear understanding of the project; answers most questions confidently.</li>
<li><strong>2 — Developing:</strong> Basic understanding evident; some gaps when probed.</li>
<li><strong>1 — Beginning:</strong> Limited understanding; struggles to explain key decisions.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Score &amp; Evidence</label>
<input class="resource-field" placeholder="Score: _/4 — Notes: ..."></div>
<div class="resource-template-section"><h5>Criterion 2: Ethical Analysis</h5>
<ul>
<li><strong>4 — Excellent:</strong> Proactively identifies ethical tensions; nuanced discussion of trade-offs.</li>
<li><strong>3 — Good:</strong> Addresses main ethical considerations with reasonable depth.</li>
<li><strong>2 — Developing:</strong> Mentions ethics but analysis is surface-level.</li>
<li><strong>1 — Beginning:</strong> Ethical considerations absent or only mentioned when prompted.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Score &amp; Evidence</label>
<input class="resource-field" placeholder="Score: _/4 — Notes: ..."></div>
<div class="resource-template-section"><h5>Criterion 3: Communication &amp; Clarity</h5>
<ul>
<li><strong>4 — Excellent:</strong> Articulate, well-paced, engages the audience; technical concepts made accessible.</li>
<li><strong>3 — Good:</strong> Clear delivery; mostly accessible language; good structure.</li>
<li><strong>2 — Developing:</strong> Understandable but some jargon or pacing issues.</li>
<li><strong>1 — Beginning:</strong> Difficult to follow; relies heavily on notes or slides.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Score &amp; Evidence</label>
<input class="resource-field" placeholder="Score: _/4 — Notes: ..."></div>
<div class="resource-template-section"><h5>Criterion 4: Technical Quality</h5>
<ul>
<li><strong>4 — Excellent:</strong> Polished, functional demo; thoughtful design decisions explained.</li>
<li><strong>3 — Good:</strong> Working demo with minor issues; key decisions justified.</li>
<li><strong>2 — Developing:</strong> Partial demo or prototype; some decisions unexplained.</li>
<li><strong>1 — Beginning:</strong> Demo not functional; limited evidence of technical work.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Score &amp; Evidence</label>
<input class="resource-field" placeholder="Score: _/4 — Notes: ..."></div>
<div class="resource-template-section"><h5>Criterion 5: Reflection &amp; Growth</h5>
<ul>
<li><strong>4 — Excellent:</strong> Insightful reflection; honest about challenges; clear sense of learning.</li>
<li><strong>3 — Good:</strong> Genuine reflection; identifies what they would do differently.</li>
<li><strong>2 — Developing:</strong> Some reflection but mostly descriptive rather than analytical.</li>
<li><strong>1 — Beginning:</strong> Little evidence of reflection; challenges not acknowledged.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Score &amp; Evidence</label>
<input class="resource-field" placeholder="Score: _/4 — Notes: ..."></div>
<div class="resource-template-section"><h5>Overall Score &amp; Summary Feedback</h5>
<input class="resource-field" placeholder="Total: _/20">
<textarea class="resource-field" rows="3" placeholder="Strengths: ...\nAreas for development: ...\nStand-out moment: ..."></textarea></div>`,
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
