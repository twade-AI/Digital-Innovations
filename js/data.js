/* ── Course Data ── Digital Innovations AEP ─────────────── */

const UNITS = [
  {
    id: 0,
    title: "Foundations of AI",
    icon: "🧠",
    colour: "#6366f1",
    lessons: [
      { id:1, difficulty:"beginner", title:"Your AI Footprint",                 desc:"Audit your daily interactions with AI systems and map your personal AI ecosystem.", tags:["activity","discussion"], objectives:["Identify AI systems in everyday life","Map personal AI usage","Evaluate reliance on AI tools"], resources:["r5"] },
      { id:2, difficulty:"intermediate", title:"The Parrot vs. The Librarian",       desc:"Explore the difference between pattern-matching language models and true understanding.", tags:["debate","theory"], objectives:["Distinguish stochastic parrots from knowledge retrieval","Analyse LLM capabilities and limits","Form an evidence-based opinion on AI understanding"], resources:[] },
      { id:3, difficulty:"beginner", title:"How a Machine Learns (Unplugged)",   desc:"Walk through supervised learning with a hands-on, no-computer activity.", tags:["unplugged","activity"], objectives:["Explain training, validation & test sets","Demonstrate overfitting vs. generalisation","Relate unplugged model to real ML pipelines"], resources:[] },
      { id:4, difficulty:"intermediate", title:"The Black Box",                      desc:"Investigate why complex models are hard to interpret and what explainability means.", tags:["theory","discussion"], objectives:["Define model interpretability","Evaluate trade-offs between accuracy and explainability","Discuss real-world consequences of opaque models"], resources:[] },
      { id:5, difficulty:"intermediate", title:"Bias In, Bias Out",                  desc:"Examine how training data bias leads to unfair AI outcomes using real case studies.", tags:["case-study","ethics"], objectives:["Identify sources of data bias","Analyse biased AI outcomes","Propose bias-mitigation strategies"], resources:["r9"] },
      { id:6, difficulty:"intermediate", title:"The Data Harvest",                   desc:"Explore how personal data is collected, stored and used to train AI models.", tags:["research","ethics"], objectives:["Trace data supply chains","Evaluate privacy implications","Assess consent and data rights"], resources:[] },
      { id:7, difficulty:"beginner", title:"The Trolley Problem Goes Digital",   desc:"Apply classic ethical dilemmas to autonomous systems and AI decision-making.", tags:["debate","ethics"], objectives:["Apply utilitarian and deontological frameworks to AI","Debate autonomous vehicle ethics","Evaluate moral agency of AI systems"], resources:[] },
      { id:8, difficulty:"intermediate", title:"Human in the Loop",                  desc:"Analyse when and why human oversight is essential in AI-assisted decisions.", tags:["case-study","theory"], objectives:["Define human-in-the-loop, on-the-loop, out-of-the-loop","Evaluate oversight requirements by domain","Design appropriate human-AI collaboration models"], resources:[] },
    ]
  },
  {
    id: 1,
    title: "Prompt Engineering & Research",
    icon: "✍️",
    colour: "#8b5cf6",
    lessons: [
      { id:9, difficulty:"intermediate", title:"Prompt Architecture",                desc:"Learn the PTFC framework — Persona, Task, Format, Constraints — for effective prompting.", tags:["practical","framework"], objectives:["Apply the PTFC framework","Iterate prompts for improved output","Evaluate prompt quality criteria"], resources:["r17","r3"] },
      { id:10, difficulty:"intermediate", title:"Synthetic Creativity & Copyright",    desc:"Debate whether AI-generated content can be creative and who owns the output.", tags:["debate","ethics"], objectives:["Analyse copyright law and AI-generated works","Debate ownership of AI outputs","Evaluate impact on creative industries"], resources:["r14"] },
      { id:11, difficulty:"intermediate", title:"Deep Research & Career Disruption",   desc:"Use AI research tools to investigate how AI is reshaping industries and careers.", tags:["research","discussion"], objectives:["Conduct AI-assisted deep research","Analyse career disruption data","Evaluate future workforce scenarios"], resources:["r5"] },
      { id:12, difficulty:"intermediate", title:"The Revision Loop",                   desc:"Use iterative prompt refinement to improve AI outputs for academic tasks.", tags:["practical","activity"], objectives:["Implement systematic prompt iteration","Use AI as a revision partner","Evaluate output quality improvements"], resources:["r3","r17"] },
    ]
  },
  {
    id: 2,
    title: "AI & Society",
    icon: "🌐",
    colour: "#06b6d4",
    lessons: [
      { id:13, difficulty:"intermediate", title:"Deepfakes and Disinformation",       desc:"Analyse deepfake technology, detection methods and societal impact.", tags:["case-study","ethics"], objectives:["Identify deepfake techniques","Apply detection strategies","Evaluate societal risks of synthetic media"], resources:["r16"] },
      { id:14, difficulty:"intermediate", title:"Surveillance and Facial Recognition", desc:"Examine the use of facial recognition in public spaces and its civil liberties implications.", tags:["debate","ethics"], objectives:["Analyse facial recognition technology","Debate surveillance vs. safety","Evaluate civil liberties implications"], resources:["r15"] },
      { id:15, difficulty:"intermediate", title:"The Environmental Cost",              desc:"Investigate the carbon footprint of training and running large AI models.", tags:["research","data"], objectives:["Quantify AI energy consumption","Compare environmental costs across model sizes","Propose sustainable AI strategies"], resources:["r18"] },
      { id:16, difficulty:"advanced", title:"Global Regulation",                   desc:"Compare AI regulation approaches across the EU, US, UK and China.", tags:["research","policy"], objectives:["Map global regulatory landscape","Compare regulatory philosophies","Evaluate effectiveness of different approaches"], resources:["r12"] },
    ]
  },
  {
    id: 3,
    title: "Policy & Governance",
    icon: "📜",
    colour: "#f59e0b",
    lessons: [
      { id:17, difficulty:"advanced", title:"Analysing the Status Quo",           desc:"Audit existing school and university AI policies to identify gaps and strengths.", tags:["research","analysis"], objectives:["Analyse existing AI policies","Identify policy gaps","Benchmark against best practice"], resources:["r13"] },
      { id:18, difficulty:"advanced", title:"Defining Acceptable Use",            desc:"Collaboratively define what acceptable AI use looks like in an educational context.", tags:["workshop","policy"], objectives:["Define acceptable use criteria","Balance innovation with safeguarding","Draft acceptable use principles"], resources:["r13","r10"] },
      { id:19, difficulty:"advanced", title:"Drafting the Document",              desc:"Write a formal AI acceptable use policy using professional drafting techniques.", tags:["practical","writing"], objectives:["Structure a formal policy document","Use precise policy language","Include enforcement mechanisms"], resources:["r10"] },
      { id:20, difficulty:"advanced", title:"Ratification",                       desc:"Present, debate and vote on class AI policies in a simulated governance process.", tags:["presentation","debate"], objectives:["Present policy proposals","Engage in democratic debate","Ratify through voting process"], resources:["r10"] },
    ]
  },
  {
    id: 4,
    title: "Capstone Project",
    icon: "🚀",
    colour: "#22c55e",
    lessons: [
      { id:21, difficulty:"intermediate", title:"From Consumer to Co-Creator",        desc:"Shift mindset from using AI to building with AI — introduction to the capstone.", tags:["introduction","planning"], objectives:["Understand capstone requirements","Shift from consumer to creator mindset","Explore project possibilities"], resources:["r1","r5"] },
      { id:22, difficulty:"advanced", title:"Defining the Problem Statement",     desc:"Craft a clear, focused problem statement that your capstone will address.", tags:["planning","writing"], objectives:["Write a focused problem statement","Validate problem significance","Define success criteria"], resources:["r1"] },
      { id:23, difficulty:"advanced", title:"Ethics by Design",                   desc:"Build ethical considerations into your project from the ground up.", tags:["ethics","planning"], objectives:["Apply ethics-by-design principles","Identify potential harms","Build in safeguards and transparency"], resources:["r9"] },
      { id:24, difficulty:"advanced", title:"Project Planning & Architecture",    desc:"Create a project plan with milestones, sprints and technical architecture.", tags:["planning","practical"], objectives:["Create a sprint-based project plan","Design technical architecture","Set measurable milestones"], resources:["r1","r6"] },
      { id:25, difficulty:"advanced", title:"Applying Prompt Architecture",       desc:"Design the prompts your project will use, applying the PTFC framework at scale.", tags:["practical","framework"], objectives:["Design production-quality prompts","Create prompt libraries","Test prompts systematically"], resources:["r17","r3"] },
      { id:26, difficulty:"advanced", title:"Logic Flows & Edge Cases",           desc:"Map out logic flows and identify edge cases before building.", tags:["planning","analysis"], objectives:["Create logic flow diagrams","Identify and handle edge cases","Design error handling strategies"], resources:["r1"] },
      { id:27, difficulty:"advanced", title:"Sprint 0 — The Foundation",          desc:"Build the foundational layer of your capstone project.", tags:["build","practical"], objectives:["Set up project infrastructure","Implement core functionality","Establish testing approach"], resources:["r6"] },
      { id:28, difficulty:"advanced", title:"Initial Peer Review",                desc:"Give and receive structured feedback on Sprint 0 deliverables.", tags:["review","collaboration"], objectives:["Give constructive peer feedback","Receive and process criticism","Iterate based on feedback"], resources:["r8"] },
      { id:29, difficulty:"advanced", title:"Deep Work Session 1",                desc:"Extended build session with teacher check-ins and structured progress tracking.", tags:["build","practical"], objectives:["Make meaningful progress on capstone","Document decisions and blockers","Maintain sprint diary"], resources:["r6"] },
      { id:30, difficulty:"advanced", title:"Deep Work Session 2",                desc:"Continue building with focus on integrating feedback from peer review.", tags:["build","practical"], objectives:["Integrate peer feedback","Resolve identified issues","Advance core features"], resources:["r6","r8"] },
      { id:31, difficulty:"advanced", title:"Deep Work Session 3",                desc:"Mid-project build session focusing on testing and refinement.", tags:["build","testing"], objectives:["Conduct systematic testing","Refine user experience","Document progress in sprint diary"], resources:["r6"] },
      { id:32, difficulty:"advanced", title:"Deep Work Session 4",                desc:"Pre-audit build session — polish, test and prepare for ethical audit.", tags:["build","practical"], objectives:["Complete core functionality","Polish user interface","Prepare for ethical audit"], resources:["r6","r9"] },
      { id:33, difficulty:"advanced", title:"Deep Work Session 5",                desc:"Final build session — incorporate audit findings and prepare deliverables.", tags:["build","practical"], objectives:["Address audit findings","Finalise all deliverables","Complete documentation"], resources:["r6"] },
      { id:34, difficulty:"advanced", title:"The Ethical Audit",                   desc:"Conduct a formal ethical audit of your project using a structured checklist.", tags:["ethics","assessment"], objectives:["Apply ethical audit checklist","Identify ethical risks","Document mitigations and trade-offs"], resources:["r9"] },
      { id:35, difficulty:"advanced", title:"The Pitch Deck",                      desc:"Create a compelling presentation that communicates your project's value.", tags:["presentation","practical"], objectives:["Structure a pitch deck","Communicate technical concepts clearly","Design compelling visuals"], resources:["r2"] },
      { id:36, difficulty:"advanced", title:"Dress Rehearsal",                     desc:"Practice your presentation with peer feedback before the final showcase.", tags:["presentation","review"], objectives:["Deliver a timed presentation","Receive presentation feedback","Refine delivery and content"], resources:["r2","r7","r8"] },
    ]
  },
  {
    id: 5,
    title: "Presentations & Reflection",
    icon: "🎤",
    colour: "#ef4444",
    lessons: [
      { id:37, difficulty:"advanced", title:"Presentations — Group 1",            desc:"First group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:38, difficulty:"advanced", title:"Presentations — Group 2",            desc:"Second group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:39, difficulty:"advanced", title:"Viva Voce — Session 1",              desc:"Individual oral examination on your capstone project and course learning.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:40, difficulty:"advanced", title:"Viva Voce — Session 2",              desc:"Continuation of viva voce examinations.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:41, difficulty:"intermediate", title:"The Automated Graduate",              desc:"Explore how AI will shape higher education and graduate employment.", tags:["discussion","research"], objectives:["Analyse AI in higher education","Evaluate graduate employability","Plan personal development strategy"], resources:["r5"] },
      { id:42, difficulty:"intermediate", title:"The Personal Statement Audit",        desc:"Use AI tools critically to review and improve personal statements.", tags:["practical","writing"], objectives:["Critically use AI writing tools","Maintain authentic voice","Improve personal statement quality"], resources:["r17","r3"] },
      { id:43, difficulty:"intermediate", title:"Course Retrospective",                desc:"Reflect on the entire course using structured retrospective techniques.", tags:["reflection","discussion"], objectives:["Apply retrospective frameworks","Identify key learnings","Celebrate achievements"], resources:["r4"] },
      { id:44, difficulty:"advanced", title:"The AI Manifesto",                    desc:"Write your personal AI manifesto — your principles for living and working with AI.", tags:["writing","reflection"], objectives:["Synthesise course learning","Articulate personal AI principles","Create a forward-looking manifesto"], resources:["r11","r4"] },
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

  r14: `<h4>Copyright Debate Brief</h4>
<p>This debate asks: <em>"AI-generated creative works should receive the same copyright protection as human-created works."</em> Use the role cards below to prepare your position.</p>
<div class="resource-template-section"><h5>Background: The Legal Landscape</h5>
<ul>
<li>Current UK and US copyright law requires a human author — AI alone cannot hold copyright.</li>
<li>The US Copyright Office has ruled that purely AI-generated images are not copyrightable (Thaler v. Vidal, 2023).</li>
<li>The EU AI Act requires transparency labelling for AI-generated content but does not resolve ownership.</li>
<li>Key tension: if AI outputs cannot be copyrighted, who profits — or who is protected?</li>
</ul></div>
<div class="resource-template-section"><h5>Role Card A — Technology Companies</h5>
<p style="font-size:.8rem;color:var(--text-muted)">You represent a major AI company. Argue FOR copyright protection of AI outputs.</p>
<ul>
<li>Investment argument: Companies invest billions training models — without protection, there is no incentive.</li>
<li>Practical argument: Clear ownership enables licensing, commerce and legal certainty.</li>
<li>Human involvement argument: Humans design the prompt, select the output, curate the result — this is authorship.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your additional arguments / rebuttal preparation</label>
<textarea class="resource-field" rows="2" placeholder="Counter to 'AI can't be creative': ... / Response to 'this undercuts human artists': ..."></textarea></div>
<div class="resource-template-section"><h5>Role Card B — Human Artists &amp; Creators</h5>
<p style="font-size:.8rem;color:var(--text-muted)">You represent an artists' union. Argue AGAINST copyright protection of AI outputs.</p>
<ul>
<li>Creativity argument: Copyright exists to reward human creativity — AI does not create, it recombines.</li>
<li>Training data argument: AI is trained on copyrighted human work without consent or compensation.</li>
<li>Economic argument: If AI outputs are copyrightable, human artists face unfair competition from automated production.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your additional arguments / rebuttal preparation</label>
<textarea class="resource-field" rows="2" placeholder="Counter to 'humans are involved in prompting': ... / Response to 'innovation needs incentives': ..."></textarea></div>
<div class="resource-template-section"><h5>Role Card C — Legal Scholars (Neutral)</h5>
<p style="font-size:.8rem;color:var(--text-muted)">You analyse the arguments from a legal and philosophical perspective. Identify the strongest points on both sides.</p>
<textarea class="resource-field" rows="3" placeholder="The strongest argument FOR is... because...\nThe strongest argument AGAINST is... because...\nThe key legal question that needs resolving is..."></textarea></div>
<div class="resource-template-section"><h5>Your Vote &amp; Reasoning</h5>
<textarea class="resource-field" rows="2" placeholder="After the debate, my position is... because the most persuasive point was..."></textarea></div>`,

  r15: `<h4>Surveillance Debate Pack</h4>
<p>This debate asks: <em>"The benefits of facial recognition technology in public spaces outweigh the risks to civil liberties."</em></p>
<div class="resource-template-section"><h5>Key Evidence — FOR (Benefits)</h5>
<ul>
<li><strong>Crime reduction:</strong> London's Metropolitan Police reported a 70% reduction in wanted persons evading detection using live facial recognition at targeted events (2023).</li>
<li><strong>Missing persons:</strong> Chinese authorities located thousands of missing children using facial recognition between 2018–2022.</li>
<li><strong>Counter-terrorism:</strong> Several airports have used facial recognition to flag individuals on watchlists, preventing travel document fraud.</li>
<li><strong>Consent argument:</strong> CCTV cameras are already ubiquitous in public spaces — facial recognition is an extension, not a new principle.</li>
</ul></div>
<div class="resource-template-section"><h5>Key Evidence — AGAINST (Risks)</h5>
<ul>
<li><strong>Accuracy disparities:</strong> NIST studies found error rates up to 100× higher for Black women than white men in some commercial systems.</li>
<li><strong>Chilling effect:</strong> Research shows people change behaviour — avoiding protests, assemblies — when they know facial recognition is deployed.</li>
<li><strong>Mission creep:</strong> Technology introduced for counter-terrorism has been used to police minor offences and political dissent in authoritarian states.</li>
<li><strong>False positives:</strong> Innocents have been wrongly arrested based on facial recognition matches (Robert Williams, Detroit, 2020).</li>
</ul></div>
<div class="resource-template-section"><h5>Debate Structure</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Each side gets: Opening statement (2 min) → Rebuttal (1 min) → Questions from floor (2 min) → Closing (1 min)</p>
<label style="font-size:.8rem;color:var(--text-muted)">Your opening statement (draft it here)</label>
<textarea class="resource-field" rows="4" placeholder="We [support/oppose] the motion because... Our three key arguments are: 1)... 2)... 3)... Therefore we urge you to vote..."></textarea></div>
<div class="resource-template-section"><h5>Anticipated Counter-Arguments</h5>
<textarea class="resource-field" rows="3" placeholder="They will likely argue... Our rebuttal is...\nThey will likely argue... Our rebuttal is..."></textarea></div>
<div class="resource-template-section"><h5>Post-Debate Reflection</h5>
<textarea class="resource-field" rows="2" placeholder="The argument that most changed my thinking was... because... My final position is..."></textarea></div>`,

  r16: `<h4>Deepfake Detection Checklist</h4>
<p>Work through this checklist when evaluating whether an image, video or audio clip might be AI-generated or manipulated. No single signal is definitive — look for patterns.</p>
<div class="resource-template-section"><h5>Visual — Faces &amp; Skin</h5>
<ul>
<li>Unnatural blurring or smoothing around the hairline or ears</li>
<li>Inconsistent skin texture — too perfect or oddly waxy</li>
<li>Asymmetry in facial features (eyes, ears) that looks digital rather than natural</li>
<li>Jewellery, glasses or accessories that flicker, warp or disappear between frames</li>
<li>Teeth that look blurred, missing or strangely perfect</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Signals spotted in the media you are analysing</label>
<textarea class="resource-field" rows="2" placeholder="I noticed... at [timestamp / location in image]..."></textarea></div>
<div class="resource-template-section"><h5>Visual — Eyes &amp; Lighting</h5>
<ul>
<li>Gaze direction inconsistent — eyes not following natural movement patterns</li>
<li>Blinking rate abnormal (too frequent, too rare, or mechanical)</li>
<li>Lighting on the face inconsistent with background lighting direction</li>
<li>Reflections in eyes that do not match the environment</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Signals spotted</label>
<textarea class="resource-field" rows="2" placeholder="I noticed..."></textarea></div>
<div class="resource-template-section"><h5>Audio Signals</h5>
<ul>
<li>Unnatural cadence — speech rhythm that sounds flat or metronomic</li>
<li>Breathing sounds absent or inserted artificially</li>
<li>Background audio inconsistent with claimed location</li>
<li>Voice tone or accent inconsistencies mid-clip</li>
<li>Lip-sync mismatch — mouth movements do not perfectly match audio</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Signals spotted</label>
<textarea class="resource-field" rows="2" placeholder="I noticed..."></textarea></div>
<div class="resource-template-section"><h5>Context &amp; Source Signals</h5>
<ul>
<li>Source is anonymous, recently created, or has no track record</li>
<li>Content is emotionally charged and designed to provoke an immediate reaction</li>
<li>The person depicted has not commented on or denied the content</li>
<li>Metadata has been stripped or shows editing software</li>
<li>No other verified sources show the same event</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Signals spotted</label>
<textarea class="resource-field" rows="2" placeholder="I noticed..."></textarea></div>
<div class="resource-template-section"><h5>Verification Tools to Use</h5>
<ul>
<li><strong>Reverse image search:</strong> Google Images, TinEye — find original source</li>
<li><strong>Video analysis:</strong> InVID / WeVerify browser extension</li>
<li><strong>AI detection:</strong> Hive Moderation, Illuminarty (use as one signal, not proof)</li>
<li><strong>Metadata:</strong> Jeffrey's Exif Viewer</li>
</ul></div>
<div class="resource-template-section"><h5>Verdict</h5>
<input class="resource-field" placeholder="Confidence this is a deepfake: Low / Medium / High — Key reason: ..."></div>`,

  r18: `<h4>AI Environmental Impact Factsheet</h4>
<p>Training and running AI models has measurable environmental costs. These figures provide a basis for evidence-based discussion.</p>
<div class="resource-template-section"><h5>Training Costs — Large Language Models</h5>
<ul>
<li><strong>GPT-3 (2020):</strong> Estimated 552 tonnes of CO₂ equivalent emitted during training — roughly equivalent to 120 return flights from London to New York.</li>
<li><strong>GPT-4 (2023):</strong> OpenAI has not disclosed training emissions; estimates range from 5× to 50× GPT-3 based on compute estimates.</li>
<li><strong>BLOOM (open-source, 2022):</strong> 25 tonnes CO₂e — significantly lower due to use of low-carbon French nuclear grid electricity.</li>
<li><strong>Key insight:</strong> Where you train matters as much as how much you train — grid carbon intensity varies from ~30gCO₂/kWh (Norway, hydro) to ~700gCO₂/kWh (coal-heavy grids).</li>
</ul></div>
<div class="resource-template-section"><h5>Inference Costs — Running AI at Scale</h5>
<ul>
<li>A single ChatGPT query uses approximately 10× the energy of a standard Google search.</li>
<li>With ~100 million daily ChatGPT users (2024), daily inference energy is estimated at 500+ MWh.</li>
<li>Microsoft reported a 29% increase in water consumption (2022–2023), partly attributed to AI data centre cooling.</li>
<li>Google reported a 48% increase in greenhouse gas emissions between 2019 and 2023, citing AI infrastructure growth.</li>
</ul></div>
<div class="resource-template-section"><h5>Water &amp; Hardware Costs</h5>
<ul>
<li>Training a large model can consume 700,000 litres of fresh water for data centre cooling.</li>
<li>AI chips (GPUs, TPUs) require rare earth metals; mining creates localised environmental degradation.</li>
<li>Hardware refresh cycles of 3–5 years generate significant e-waste.</li>
</ul></div>
<div class="resource-template-section"><h5>Mitigation Strategies</h5>
<ul>
<li><strong>Efficient architectures:</strong> Smaller models (e.g. distillation, quantisation) can match performance at a fraction of the compute.</li>
<li><strong>Green data centres:</strong> Running on renewable energy reduces emissions without changing capability.</li>
<li><strong>Temporal shifting:</strong> Scheduling training during periods of low-carbon grid supply.</li>
<li><strong>Model reuse:</strong> Fine-tuning existing models rather than training from scratch.</li>
</ul></div>
<div class="resource-template-section"><h5>Discussion Questions</h5>
<textarea class="resource-field" rows="3" placeholder="Should AI companies be required to publish emissions data? / Is there a personal responsibility to use AI less? / How do we weigh AI's benefits against its environmental costs?"></textarea></div>
<div class="resource-template-section"><h5>Your Capstone Project — Environmental Estimate</h5>
<textarea class="resource-field" rows="2" placeholder="The AI tools my project uses likely consume... My project's footprint could be reduced by..."></textarea></div>`,

  r19: `<h4>Viva Voce Question Bank</h4>
<p>Prepare for your viva by practising these questions. Your examiner will probe your understanding, not just your memory. Think out loud — reasoning matters as much as answers.</p>
<div class="resource-template-section"><h5>Section 1: Your Capstone Project</h5>
<ul>
<li>In one sentence, what problem does your project solve and for whom?</li>
<li>Walk me through the most important technical decision you made and why you made it.</li>
<li>What would you do differently if you started the project again tomorrow?</li>
<li>How did you test that your project actually works? What did testing reveal?</li>
<li>If a non-technical person used your project, what would confuse them most?</li>
<li>How does your project handle edge cases or unexpected inputs?</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>
<div class="resource-template-section"><h5>Section 2: Ethics &amp; Responsibility</h5>
<ul>
<li>What is the most significant ethical risk in your project and how did you mitigate it?</li>
<li>Could your project cause harm to any group of people, directly or indirectly?</li>
<li>Who should be accountable if your system produces a harmful output?</li>
<li>Is it possible your training data or prompts contain bias? How would you know?</li>
<li>Should your project exist? Make the strongest case against it, then respond.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>
<div class="resource-template-section"><h5>Section 3: AI Concepts</h5>
<ul>
<li>Explain how the AI tools you used actually work — at the level of someone who knows the basics.</li>
<li>What is a token? Why does it matter for your project?</li>
<li>What does "hallucination" mean in the context of LLMs? Did it affect your project?</li>
<li>What is the difference between a model and a system? Which did you build?</li>
<li>If the AI model your project uses is updated or deprecated, what happens to your project?</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>
<div class="resource-template-section"><h5>Section 4: Reflection &amp; Growth</h5>
<ul>
<li>What single thing you learned on this course most changed how you think?</li>
<li>Describe a moment when you were wrong about something related to AI. What changed your mind?</li>
<li>How has your view of AI's potential — and its risks — changed since the start of the course?</li>
<li>What skill from this course will be most useful to you in five years?</li>
<li>What would you tell a student starting this course next year?</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>
<div class="resource-template-section"><h5>Section 5: Policy &amp; Society</h5>
<ul>
<li>Should AI tools like the ones you used be available to all students, or should access be restricted?</li>
<li>Which global AI regulation approach (EU, US, UK, China) do you find most convincing and why?</li>
<li>If you were advising your school's leadership on AI policy, what one rule would you insist on?</li>
<li>What jobs or roles do you think AI will not replace in the next 20 years, and why?</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>`,

  r8: `<h4>Peer Review Feedback Form</h4>
<p>Give honest, specific, constructive feedback. Vague praise ("it was good") does not help your peer improve.</p>
<div class="resource-template-section"><h5>Project Reviewed</h5>
<label style="font-size:.8rem;color:var(--text-muted)">Peer's name &amp; project title</label>
<input class="resource-field" placeholder="Name: ... | Project: ..."></div>
<div class="resource-template-section"><h5>What Works Well</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Identify 2–3 specific strengths. Be concrete — point to actual features, decisions or moments.</p>
<textarea class="resource-field" rows="4" placeholder="1. I was impressed by... because...\n2. The decision to... was effective because...\n3. The way you handled... showed..."></textarea></div>
<div class="resource-template-section"><h5>Areas for Improvement</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Identify 2–3 areas. Frame as "I wonder if..." or "Have you considered...?" — not "this is wrong".</p>
<textarea class="resource-field" rows="4" placeholder="1. I wonder if... could be improved by...\n2. Have you considered... ? It might help with...\n3. One thing that confused me was... — could you clarify...?"></textarea></div>
<div class="resource-template-section"><h5>Ethical Considerations</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Identify any ethical risks you noticed that the creator may have missed.</p>
<textarea class="resource-field" rows="3" placeholder="A potential risk I noticed: ... / Have you thought about the impact on... / The data handling approach might raise concerns around..."></textarea></div>
<div class="resource-template-section"><h5>One Priority Action</h5>
<p style="font-size:.8rem;color:var(--text-muted)">If your peer could only do one thing before their presentation, what should it be?</p>
<textarea class="resource-field" rows="2" placeholder="The single most important thing to do next is..."></textarea></div>
<div class="resource-template-section"><h5>Overall Impression</h5>
<input class="resource-field" placeholder="Overall quality rating: Excellent / Good / Developing / Beginning"></div>`,

  r10: `<h4>AI Policy Drafting Template</h4>
<p>Use this template to draft a formal AI acceptable use policy. Use clear, precise language — avoid ambiguity.</p>
<div class="resource-template-section"><h5>1. Policy Title &amp; Scope</h5>
<textarea class="resource-field" rows="2" placeholder="Title: AI Acceptable Use Policy — [Institution Name]\nScope: This policy applies to all students, staff and visitors who use AI tools in..."></textarea></div>
<div class="resource-template-section"><h5>2. Definitions</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Define key terms to prevent ambiguity. What counts as an "AI tool"? What is "AI-generated content"?</p>
<textarea class="resource-field" rows="4" placeholder="For the purposes of this policy:\n&quot;AI tool&quot; means any software that uses machine learning to generate, summarise, translate or transform content, including but not limited to...\n&quot;AI-generated content&quot; means any text, image, code or data produced by..."></textarea></div>
<div class="resource-template-section"><h5>3. Permitted Uses</h5>
<p style="font-size:.8rem;color:var(--text-muted)">List what is explicitly allowed.</p>
<textarea class="resource-field" rows="4" placeholder="AI tools may be used for:\n• Generating initial ideas or outlines, provided...\n• Checking grammar and clarity, provided...\n• Research assistance, provided outputs are..."></textarea></div>
<div class="resource-template-section"><h5>4. Prohibited Uses</h5>
<p style="font-size:.8rem;color:var(--text-muted)">List what is explicitly forbidden.</p>
<textarea class="resource-field" rows="4" placeholder="AI tools may not be used to:\n• Submit AI-generated work as entirely one's own without...\n• Process sensitive personal data without...\n• Circumvent assessment integrity by..."></textarea></div>
<div class="resource-template-section"><h5>5. Disclosure Requirements</h5>
<textarea class="resource-field" rows="3" placeholder="Users must disclose AI use by... The required disclosure format is... Failure to disclose will result in..."></textarea></div>
<div class="resource-template-section"><h5>6. Enforcement &amp; Consequences</h5>
<textarea class="resource-field" rows="3" placeholder="Breaches of this policy will be handled under... Consequences range from... to... Appeals may be made via..."></textarea></div>
<div class="resource-template-section"><h5>7. Review Date</h5>
<input class="resource-field" placeholder="This policy will be reviewed on: ... | Policy owner: ... | Version: ..."></div>`,

  r11: `<h4>AI Manifesto Template</h4>
<p>A manifesto is a public declaration of your beliefs and intentions. Your AI manifesto captures how you will think, work and live alongside AI — honestly and thoughtfully.</p>
<ul>
<li><strong>Be specific:</strong> "I believe AI should..." is stronger than "AI is important".</li>
<li><strong>Be personal:</strong> Ground principles in your own experience from this course.</li>
<li><strong>Be honest:</strong> Include tensions and things you are still uncertain about.</li>
</ul>
<div class="resource-template-section"><h5>Opening Statement</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Who are you and what is your relationship with AI? (2–3 sentences)</p>
<textarea class="resource-field" rows="3" placeholder="I am... I have spent [time] learning about AI and I have come to believe that..."></textarea></div>
<div class="resource-template-section"><h5>What I Believe About AI</h5>
<p style="font-size:.8rem;color:var(--text-muted)">State 3–5 core beliefs. Start each with "I believe..."</p>
<textarea class="resource-field" rows="5" placeholder="I believe AI is a tool, not a replacement for human judgement, because...\nI believe transparency in AI systems is essential because...\nI believe..."></textarea></div>
<div class="resource-template-section"><h5>How I Will Use AI</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Describe your personal principles for AI use — in education, work and life.</p>
<textarea class="resource-field" rows="4" placeholder="I will use AI to augment my thinking, not replace it. Specifically, I will...\nI will not use AI for... because...\nI will always disclose when..."></textarea></div>
<div class="resource-template-section"><h5>What I Will Advocate For</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What changes do you want to see in how AI is developed, governed or used?</p>
<textarea class="resource-field" rows="3" placeholder="I will advocate for... / I will speak up when I see... / I will support organisations that..."></textarea></div>
<div class="resource-template-section"><h5>My Uncertainties</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What questions about AI do you still not have clear answers to? Intellectual honesty strengthens a manifesto.</p>
<textarea class="resource-field" rows="3" placeholder="I am still uncertain about... / A question I keep returning to is... / I have not fully resolved the tension between..."></textarea></div>
<div class="resource-template-section"><h5>Closing Commitment</h5>
<textarea class="resource-field" rows="2" placeholder="In short, I commit to... because the future of AI depends on people who..."></textarea></div>`,

  r12: `<h4>Regulation Jigsaw Cards</h4>
<p>Each card covers a different regulatory approach. In the jigsaw activity, you become an expert on one region, then teach the others. Use the spaces below to take notes as you research.</p>
<div class="resource-template-section"><h5>Card A — EU AI Act (2024)</h5>
<ul>
<li><strong>Approach:</strong> Risk-based regulation — AI systems classified as Unacceptable, High, Limited or Minimal risk.</li>
<li><strong>Key features:</strong> Banned uses include social scoring and real-time facial recognition in public. High-risk AI (hiring, credit, education) faces strict requirements: transparency, human oversight, data governance.</li>
<li><strong>Enforcement:</strong> Fines up to €35 million or 7% of global turnover.</li>
<li><strong>Criticism:</strong> May stifle innovation; complex compliance burden for SMEs.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your expert notes</label>
<textarea class="resource-field" rows="2" placeholder="Key point to teach others: ... / My view: ..."></textarea></div>
<div class="resource-template-section"><h5>Card B — United States (Sector-by-Sector)</h5>
<ul>
<li><strong>Approach:</strong> No comprehensive federal AI law (as of 2024). Relies on existing sector regulation (FDA for medical AI, FTC for consumer protection) plus voluntary commitments.</li>
<li><strong>Key features:</strong> Executive Order on AI (Oct 2023) required safety testing for frontier models. NIST AI Risk Management Framework is voluntary.</li>
<li><strong>Criticism:</strong> Fragmented; tech companies largely self-regulate; creates regulatory gaps.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your expert notes</label>
<textarea class="resource-field" rows="2" placeholder="Key point to teach others: ... / My view: ..."></textarea></div>
<div class="resource-template-section"><h5>Card C — United Kingdom (Pro-Innovation)</h5>
<ul>
<li><strong>Approach:</strong> Principles-based, sector-led regulation. Existing regulators (ICO, FCA, Ofcom) apply AI principles within their domains rather than a single AI law.</li>
<li><strong>Key features:</strong> Five principles: safety, transparency, fairness, accountability, contestability. AI Safety Institute established 2023 for frontier model evaluation.</li>
<li><strong>Criticism:</strong> May leave gaps between sectors; slower to respond to novel harms.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your expert notes</label>
<textarea class="resource-field" rows="2" placeholder="Key point to teach others: ... / My view: ..."></textarea></div>
<div class="resource-template-section"><h5>Card D — China (State-Directed)</h5>
<ul>
<li><strong>Approach:</strong> Comprehensive government control. Regulations on algorithmic recommendations (2022), deepfakes (2022) and generative AI (2023) require state approval and content alignment.</li>
<li><strong>Key features:</strong> Generative AI services must reflect "core socialist values". Data localisation requirements. State actively funds and directs AI development.</li>
<li><strong>Criticism:</strong> Prioritises control over rights; limited independent oversight.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your expert notes</label>
<textarea class="resource-field" rows="2" placeholder="Key point to teach others: ... / My view: ..."></textarea></div>
<div class="resource-template-section"><h5>Comparison: Key Debate Questions</h5>
<textarea class="resource-field" rows="3" placeholder="Which approach best balances innovation and safety? Which approach best protects citizens? Is global coordination possible? Why or why not?"></textarea></div>`,

  r13: `<h4>University AI Policy Comparison</h4>
<p>Review how leading universities approach AI use by students. Use this to identify patterns, gaps and best practices for your own policy drafting.</p>
<div class="resource-template-section"><h5>Policy A — Conservative Approach</h5>
<ul>
<li><strong>Stance:</strong> AI use is prohibited in assessed work unless explicitly stated otherwise.</li>
<li><strong>Disclosure:</strong> Not required (use is banned).</li>
<li><strong>Enforcement:</strong> AI-generated text treated as academic misconduct; same penalties as plagiarism.</li>
<li><strong>Strengths:</strong> Clear, simple to understand and enforce.</li>
<li><strong>Weaknesses:</strong> Does not prepare students for AI-integrated workplaces; hard to enforce reliably.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A student at this university would..."></textarea></div>
<div class="resource-template-section"><h5>Policy B — Permissive with Disclosure</h5>
<ul>
<li><strong>Stance:</strong> AI use is permitted; students must declare it with a standardised statement.</li>
<li><strong>Disclosure:</strong> Mandatory declaration specifying which tools used and how.</li>
<li><strong>Enforcement:</strong> Failure to disclose = misconduct; content itself is not penalised.</li>
<li><strong>Strengths:</strong> Builds AI literacy; mirrors professional norms; transparent.</li>
<li><strong>Weaknesses:</strong> Risk of over-reliance; assessment validity questions; unequal AI tool access.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A student at this university would..."></textarea></div>
<div class="resource-template-section"><h5>Policy C — Task-by-Task Specification</h5>
<ul>
<li><strong>Stance:</strong> Each assessment brief specifies exactly which AI use is permitted for that task.</li>
<li><strong>Disclosure:</strong> Required where AI use is permitted.</li>
<li><strong>Enforcement:</strong> Use beyond stated permissions treated as misconduct.</li>
<li><strong>Strengths:</strong> Flexible; allows AI use in authentic contexts; pedagogically intentional.</li>
<li><strong>Weaknesses:</strong> Confusing across modules; extra burden on lecturers to specify clearly.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A student at this university would..."></textarea></div>
<div class="resource-template-section"><h5>Cross-Policy Observations</h5>
<textarea class="resource-field" rows="3" placeholder="Common elements across all three: ... / The biggest gap I noticed: ... / The approach I would recommend for our school: ..."></textarea></div>
<div class="resource-template-section"><h5>Design Principles for Your Own Policy</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Based on your analysis, list 3 principles that should underpin any school AI policy.</p>
<textarea class="resource-field" rows="3" placeholder="1. Any school AI policy should... because...\n2. ...\n3. ..."></textarea></div>`,

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

/* ── Glossary ─────────────────────────────────── */
const GLOSSARY = [
  { term: 'Algorithm', definition: 'A step-by-step set of instructions for solving a problem or completing a task. In AI, algorithms process data to learn patterns and make decisions.', lessons: [1, 3, 5] },
  { term: 'Algorithmic Justice League', definition: 'Organisation founded by Joy Buolamwini in 2016 to fight algorithmic bias and promote equitable AI. Advocates for accountability in automated decision-making.', lessons: [5] },
  { term: 'API (Application Programming Interface)', definition: 'A set of rules and protocols that allows different software systems to communicate. AI APIs let developers send data to an AI model and receive outputs.', lessons: [27, 29] },
  { term: 'Automation Bias', definition: 'The tendency for humans to over-rely on automated systems, deferring to AI recommendations even when they have good reason to disagree.', lessons: [8] },
  { term: 'Backpropagation', definition: 'The algorithm neural networks use to learn — it calculates how much each weight contributed to the error and adjusts them to improve. Propagates error backward through the network layers.', lessons: [3] },
  { term: 'Bias (in AI)', definition: 'Systematic errors in AI outputs that arise from skewed training data, flawed assumptions, or unrepresentative datasets. Can be historical, representational, measurement, label, or selection bias.', lessons: [5, 23, 34] },
  { term: 'Black Box', definition: 'An AI system whose internal decision-making process is opaque — you can see the inputs and outputs but not understand how it arrived at its conclusion.', lessons: [4] },
  { term: 'Chain-of-Thought Reasoning', definition: 'A prompting technique where the AI is asked to show its working step by step, improving accuracy on complex reasoning tasks.', lessons: [9, 12] },
  { term: 'COMPAS', definition: 'Correctional Offender Management Profiling for Alternative Sanctions — an algorithmic risk assessment tool used in US courts. A ProPublica investigation found it was biased against Black defendants.', lessons: [4, 5] },
  { term: 'Copyright (AI-generated)', definition: 'Current UK and US law requires a human author for copyright. Purely AI-generated works cannot be copyrighted, creating legal uncertainty around AI outputs.', lessons: [10] },
  { term: 'Dark Patterns', definition: 'User interface design techniques that manipulate users into making choices they would not otherwise make — such as making privacy settings deliberately confusing.', lessons: [6] },
  { term: 'Data Broker', definition: 'A company that collects, aggregates, and sells personal data from multiple sources. The global data broker industry is worth over $300 billion.', lessons: [6] },
  { term: 'Deepfake', definition: 'AI-generated synthetic media (video, audio, or images) that convincingly replaces one person\'s likeness with another. Uses autoencoder neural networks or GANs.', lessons: [13] },
  { term: 'Deep Learning', definition: 'A subset of machine learning using neural networks with many layers (hence "deep"). Powers most modern AI including image recognition, language models, and speech synthesis.', lessons: [3] },
  { term: 'Deontological Ethics', definition: 'An ethical framework that judges actions by whether they follow moral rules, regardless of consequences. "Never deliberately harm an innocent person" is a deontological principle.', lessons: [7] },
  { term: 'EU AI Act', definition: 'The first comprehensive AI regulation in the world (2024). Classifies AI systems by risk level: unacceptable (banned), high (strict requirements), limited (transparency), and minimal (no rules).', lessons: [16, 17, 18] },
  { term: 'Explainable AI (XAI)', definition: 'A growing field dedicated to making AI decision-making transparent and understandable to humans. Techniques include LIME, SHAP, and attention visualisation.', lessons: [4] },
  { term: 'Facial Recognition', definition: 'AI technology that identifies or verifies a person from their facial features. Studies show error rates up to 100x higher for dark-skinned women than light-skinned men.', lessons: [5, 14] },
  { term: 'Fine-tuning', definition: 'Adapting a pre-trained AI model to a specific task by training it on a smaller, specialised dataset. More efficient than training from scratch.', lessons: [12, 25] },
  { term: 'Frontier Model', definition: 'The most capable and potentially risky AI models at the cutting edge of development. The US Executive Order on AI (2023) required safety testing for frontier models.', lessons: [16] },
  { term: 'Generalisation', definition: 'A model\'s ability to perform well on data it has never seen before — not just the data it was trained on. The fundamental goal of machine learning.', lessons: [3] },
  { term: 'Generative AI', definition: 'AI systems that can create new content — text, images, code, music, video — rather than just classifying or predicting. Includes LLMs, DALL-E, Midjourney, and Sora.', lessons: [1, 10, 42] },
  { term: 'GDPR', definition: 'General Data Protection Regulation (EU, 2018). Gives citizens rights over their personal data including the right to access, correct, delete, and receive meaningful information about automated decisions.', lessons: [6, 16] },
  { term: 'Gradient Descent', definition: 'The optimisation algorithm that trains neural networks. It calculates the direction that reduces error (the gradient) and takes a step in that direction, iterating until the model improves.', lessons: [3] },
  { term: 'Hallucination', definition: 'When an AI model generates confident, fluent text that is factually incorrect or entirely fabricated. A fundamental limitation of LLMs that predict probable text rather than verified facts.', lessons: [2, 9, 39] },
  { term: 'Human-in-the-Loop', definition: 'A system design where AI makes recommendations but a human makes the final decision. Considered essential for high-stakes domains like healthcare and criminal justice.', lessons: [8] },
  { term: 'Human-on-the-Loop', definition: 'A system where AI operates autonomously but a human monitors and can intervene. Used in contexts like autonomous vehicles with human override capability.', lessons: [8] },
  { term: 'Human-out-of-the-Loop', definition: 'Fully autonomous AI operation with no human oversight. Examples include high-frequency trading and the controversial concept of autonomous weapons.', lessons: [8] },
  { term: 'Inference', definition: 'The process of running a trained AI model to generate outputs from new inputs. Inference costs (energy, compute) are increasingly significant at scale.', lessons: [15] },
  { term: 'LLM (Large Language Model)', definition: 'An AI model trained on vast amounts of text data that can generate, summarise, translate, and reason about language. Examples include GPT-4, Claude, Gemini, and Llama.', lessons: [2, 9, 15] },
  { term: 'Machine Learning', definition: 'A subset of AI where systems learn patterns from data rather than being explicitly programmed. Includes supervised, unsupervised, and reinforcement learning.', lessons: [1, 3] },
  { term: 'Model Interpretability', definition: 'How easily a human can understand the reasoning behind a model\'s predictions. Decision trees are highly interpretable; deep neural networks are not.', lessons: [4] },
  { term: 'Narrow AI', definition: 'AI designed for a single specific task — such as playing chess, filtering spam, or recognising faces. All current AI is narrow AI; it cannot generalise across domains.', lessons: [1] },
  { term: 'Neural Network', definition: 'A computing system inspired by the human brain, consisting of layers of interconnected nodes (neurons). Each connection has a weight that is adjusted during training.', lessons: [3, 4] },
  { term: 'Overfitting', definition: 'When a model memorises training data rather than learning general patterns, performing well on training data but poorly on new, unseen data. Like memorising past exam papers instead of understanding concepts.', lessons: [3] },
  { term: 'Prompt Engineering', definition: 'The skill of crafting effective instructions (prompts) to get high-quality outputs from AI systems. Uses techniques like PTFC, chain-of-thought, and iterative refinement.', lessons: [9, 12, 25, 42] },
  { term: 'PTFC Framework', definition: 'A structured approach to prompt writing: Persona (who the AI should act as), Task (what to do), Format (output structure), and Constraints (limits and rules).', lessons: [9, 12, 25] },
  { term: 'Stochastic Parrot', definition: 'A term coined by Bender & Gebru (2021) describing LLMs as sophisticated pattern-matchers that predict probable next tokens without genuine understanding of meaning.', lessons: [2] },
  { term: 'Supervised Learning', definition: 'A type of machine learning where the model learns from labelled examples — data paired with the correct answer. The model learns to map inputs to outputs.', lessons: [3] },
  { term: 'Temperature (AI)', definition: 'A parameter that controls the randomness of AI outputs. Low temperature produces more predictable, focused text; high temperature produces more creative, varied text.', lessons: [9] },
  { term: 'Token', definition: 'The basic unit of text that LLMs process — roughly a word or word fragment. GPT-4 processes text as sequences of tokens, not as whole sentences or meanings.', lessons: [2, 9] },
  { term: 'Training Data', definition: 'The dataset used to teach a machine learning model. The quality, representativeness, and biases in training data directly determine the model\'s capabilities and limitations.', lessons: [3, 5] },
  { term: 'Utilitarianism', definition: 'An ethical framework that judges actions by their consequences — the right action is the one that produces the greatest good for the greatest number of people.', lessons: [7] },
  { term: 'Viva Voce', definition: 'An oral examination where students defend their work by answering questions from examiners. Tests understanding, reasoning, and the ability to articulate decisions.', lessons: [39, 40] },
];
