/* ── Course Data ── Digital Innovations AEP ─────────────── */

const UNITS = [
  {
    id: 0,
    title: "Foundations of AI",
    icon: "🧠",
    colour: "#6366f1",
    lessons: [
      { id:1, difficulty:"beginner", title:"Your AI Footprint",                 desc:"Audit your daily interactions with AI systems and map your personal AI ecosystem.", tags:["activity","discussion"], objectives:["Identify AI systems in everyday life","Map personal AI usage","Critically evaluate your reliance on AI tools and what it costs you"], resources:["r5"] },
      { id:2, difficulty:"intermediate", title:"The Parrot vs. The Librarian",       desc:"Explore the difference between pattern-matching language models and true understanding.", tags:["debate","theory"], objectives:["Distinguish stochastic parrots from knowledge retrieval","Analyse LLM capabilities and limits","Form an evidence-based opinion on AI understanding","Apply adversarial testing to reveal AI limitations"], resources:["r4"] },
      { id:3, difficulty:"beginner", title:"How a Machine Learns (Unplugged)",   desc:"Walk through supervised learning with a hands-on, no-computer activity.", tags:["unplugged","activity"], objectives:["Explain training, validation & test sets","Demonstrate overfitting vs. generalisation","Relate unplugged model to real ML pipelines"], resources:["r5"] },
      { id:4, difficulty:"intermediate", title:"The Black Box",                      desc:"Investigate why complex models are hard to interpret and what explainability means.", tags:["theory","discussion"], objectives:["Define model interpretability","Evaluate trade-offs between accuracy and explainability","Discuss real-world consequences of opaque models"], resources:["r9","r4"] },
      { id:5, difficulty:"intermediate", title:"Bias In, Bias Out",                  desc:"Examine how training data bias leads to unfair AI outcomes using real case studies.", tags:["case-study","ethics"], objectives:["Identify sources of data bias","Analyse biased AI outcomes","Propose bias-mitigation strategies"], resources:["r9"] },
      { id:6, difficulty:"intermediate", title:"The Data Harvest",                   desc:"Explore how personal data is collected, stored and used to train AI models.", tags:["research","ethics"], objectives:["Trace data supply chains","Evaluate privacy implications","Assess consent and data rights"], resources:["r9","r5"] },
      { id:7, difficulty:"beginner", title:"The Trolley Problem Goes Digital",   desc:"Apply classic ethical dilemmas to autonomous systems and AI decision-making.", tags:["debate","ethics"], objectives:["Apply utilitarian and deontological frameworks to AI","Debate autonomous vehicle ethics","Evaluate moral agency of AI systems"], resources:["r9","r4"] },
      { id:8, difficulty:"intermediate", title:"Human in the Loop",                  desc:"Analyse when and why human oversight is essential in AI-assisted decisions.", tags:["case-study","theory"], objectives:["Define human-in-the-loop, on-the-loop, out-of-the-loop","Evaluate oversight requirements by domain","Design appropriate human-AI collaboration models"], resources:["r9","r4"] },
      { id:45, difficulty:"intermediate", title:"What Can You Trust?",               desc:"Examine how AI challenges the foundations of knowledge — and build a personal framework for evaluating information in an AI-saturated world.", tags:["theory","discussion","critical-thinking"], objectives:["Define epistemic concepts: truth, evidence, justified belief","Analyse how AI undermines traditional sources of knowledge","Apply the CRAAP test and epistemic calibration to AI outputs","Build a personal verification framework for AI-era claims"], resources:["r4","r5"] },
      { id:51, difficulty:"intermediate", title:"Breaking the Illusion: Tokens & How LLMs Work", desc:"Discover that AI doesn't read text — it processes numbers. Understand tokenisation, the autocomplete engine, and why this architecture explains both AI's greatest strengths and its strangest, most consistent failures.", tags:["theory","skills"], objectives:["Explain how LLMs convert text to tokens and tokens to probabilities","Demonstrate why LLMs fail at character-level tasks like the Strawberry Problem","Connect the token architecture to hallucination and generic output","Use structured prompting techniques to work with — not against — the token architecture"], resources:["r3"] },
    ]
  },
  {
    id: 1,
    title: "Prompt Engineering & Research",
    icon: "✍️",
    colour: "#8b5cf6",
    lessons: [
      { id:9, difficulty:"intermediate", title:"Prompt Architecture",                desc:"Learn the PTFC framework — Persona, Task, Format, Context — for effective prompting with Claude and Gemini.", tags:["practical","framework"], objectives:["Apply the PTFC framework","Build effective prompts for Claude and Gemini","Iterate prompts for improved output","Critically assess when AI prompting is the right tool — and when it is not"], resources:["r17","r3"], prereqs:[1,2] },
      { id:10, difficulty:"intermediate", title:"Synthetic Creativity & Copyright",    desc:"Debate whether AI-generated content can be creative and who owns the output.", tags:["debate","ethics"], objectives:["Analyse copyright law and AI-generated works","Debate ownership of AI outputs","Evaluate impact on creative industries","Challenge your own assumptions about creativity, authorship, and originality"], resources:["r14"] },
      { id:11, difficulty:"intermediate", title:"Deep Research & Career Disruption",   desc:"Use AI research tools to investigate how AI is reshaping industries and careers.", tags:["research","discussion"], objectives:["Conduct AI-assisted deep research","Triangulate AI research claims against primary sources","Analyse career disruption data","Evaluate future workforce scenarios with appropriate scepticism"], resources:["r5"], prereqs:[9] },
      { id:12, difficulty:"intermediate", title:"The Revision Loop",                   desc:"Use iterative prompt refinement to improve AI outputs for academic tasks.", tags:["practical","activity"], objectives:["Implement systematic prompt iteration","Use AI as a revision partner","Critically evaluate and reject AI suggestions that weaken your argument"], resources:["r3","r17"], prereqs:[9] },
      { id:46, difficulty:"intermediate", title:"Trust, But Verify",                  desc:"Build practical skills for fact-checking AI outputs — identifying hallucinations, tracing claims to primary sources, and knowing when AI simply cannot be trusted.", tags:["practical","skills","critical-thinking"], objectives:["Identify and classify the four main types of AI hallucination","Apply the VERIFY workflow to any AI-generated research","Establish personal habits for responsible AI-assisted work","Evaluate which sources can and cannot corroborate AI claims"], resources:["r3"] },
      { id:52, difficulty:"advanced", title:"Prompt Injection & Adversarial AI",     desc:"Understand the #1 security risk for AI applications: prompt injection. Learn how attackers embed instructions in content AI reads, why defence is genuinely hard, and what least-privilege design means in practice.", tags:["theory","skills","ethics"], objectives:["Distinguish direct from indirect prompt injection and explain why both work","Evaluate the limits of common defensive techniques against prompt injection","Apply least-privilege principles when designing AI-powered systems","Assess ethical and legal responsibility when AI systems are compromised"], resources:["r9"], prereqs:[9,46] },
      { id:53, difficulty:"advanced", title:"RAG & AI Agents",                       desc:"Go beyond the chatbox — understand how Retrieval-Augmented Generation grounds AI in real documents, and how agents use tools to take actions in the world. Learn to design, evaluate, and question these systems.", tags:["theory","practical"], objectives:["Explain the RAG pipeline from document indexing to grounded generation","Describe the ReAct agent architecture and common tool types","Design a RAG system for a real use case and identify its failure modes","Evaluate the oversight challenges that arise when agents act faster than humans can supervise"], resources:["r1","r3"], prereqs:[9,52] },
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
      { id:47, difficulty:"intermediate", title:"The AI Content Flood",             desc:"Develop practical media literacy for an internet saturated with AI-generated text, images, and arguments — and learn to navigate it without being misled.", tags:["practical","skills","case-study","critical-thinking"], objectives:["Identify linguistic and visual markers of AI-generated content","Apply SIFT methodology and detection tools to real examples","Evaluate the societal consequences of AI-generated misinformation at scale","Develop a personal media literacy protocol for AI-era content"], resources:["r16","r5"] },
      { id:49, difficulty:"advanced", title:"AI and Democracy",                    desc:"Investigate how AI-generated content, micro-targeting, and influence operations are reshaping elections — and what democratic societies can do about it.", tags:["debate","ethics","policy","critical-thinking"], objectives:["Analyse documented cases of AI-driven electoral interference","Evaluate the effectiveness of platform policies and electoral AI laws","Debate the tension between free expression and election integrity","Propose evidence-based safeguards for AI in democratic processes"], resources:["r12","r10"] },
      { id:54, difficulty:"intermediate", title:"The Hidden Costs: Energy & Human Labour", desc:"Investigate the physical and human costs that don't appear on AI's pricing page — from nuclear-powered data centres to the Kenyan workers paid $1.32/hr to label trauma so models would learn to refuse it.", tags:["research","ethics","data","case-study"], objectives:["Quantify the energy and water consumption of AI training and inference","Explain how RLHF works and identify the human labour supply chain that underpins it","Evaluate the argument that AI companies bear supply chain responsibility for contractor welfare","Analyse how the costs and benefits of AI are distributed across different communities globally"], resources:["r18","r9"] },
      { id:55, difficulty:"advanced", title:"Copyright & Training Data",             desc:"Examine the landmark NYT vs. OpenAI lawsuit and the contested legal and ethical questions around training data — who owns what AI learned from, and what a fair system might look like.", tags:["debate","ethics","policy","research"], objectives:["Explain how modern LLMs are trained and the role of large-scale text corpora","Analyse the four fair-use factors and apply them to AI training data cases","Compare US and EU legal frameworks for AI copyright compliance","Evaluate what a fair licensing or compensation regime for training data creators would require"], resources:["r14","r12"] },
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
      { id:19, difficulty:"advanced", title:"Drafting the Document",              desc:"Write a formal AI acceptable use policy using professional drafting techniques.", tags:["practical","writing"], objectives:["Structure a formal policy document","Use precise policy language","Include enforcement mechanisms"], resources:["r10"], prereqs:[17,18] },
      { id:20, difficulty:"advanced", title:"Ratification",                       desc:"Present, debate and vote on class AI policies in a simulated governance process.", tags:["presentation","debate"], objectives:["Present policy proposals","Engage in democratic debate","Ratify through voting process"], resources:["r10"], prereqs:[19] },
      { id:50, difficulty:"intermediate", title:"Mini-Project: Build Something Small", desc:"Apply everything from Units 1–3 in a focused one-lesson build: design, prompt, test and present a small AI-powered tool. Low stakes — this is about practising the process before the capstone.", tags:["practical","build","activity"], objectives:["Apply the PTFC framework to a real build task","Identify and address one ethical consideration in your design","Test your tool with a real user and gather feedback","Reflect on what you would do differently in the capstone"], resources:["r1","r3","r9"], prereqs:[9,12,20] },
    ]
  },
  {
    id: 4,
    title: "Capstone Project",
    icon: "🚀",
    colour: "#22c55e",
    lessons: [
      { id:21, difficulty:"intermediate", title:"From Consumer to Co-Creator",        desc:"Shift mindset from using AI to building with AI — introduction to the capstone.", tags:["introduction","planning"], objectives:["Understand capstone requirements","Shift from consumer to creator mindset","Explore project possibilities"], resources:["r1","r5"] },
      { id:22, difficulty:"advanced", title:"Defining the Problem Statement",     desc:"Craft a clear, focused problem statement that your capstone will address.", tags:["planning","writing"], objectives:["Write a focused problem statement","Validate problem significance","Define success criteria"], resources:["r1"], prereqs:[21] },
      { id:23, difficulty:"advanced", title:"Ethics by Design",                   desc:"Build ethical considerations into your project from the ground up.", tags:["ethics","planning"], objectives:["Apply ethics-by-design principles","Identify potential harms","Build in safeguards and transparency"], resources:["r9"], prereqs:[22] },
      { id:24, difficulty:"advanced", title:"Project Planning & Architecture",    desc:"Create a project plan with milestones, sprints and technical architecture.", tags:["planning","practical"], objectives:["Create a sprint-based project plan","Design technical architecture","Set measurable milestones"], resources:["r1","r6"], prereqs:[22] },
      { id:25, difficulty:"advanced", title:"Applying Prompt Architecture",       desc:"Design the prompts your project will use, applying the PTFC framework at scale.", tags:["practical","framework"], objectives:["Design production-quality prompts","Create prompt libraries","Test prompts systematically"], resources:["r17","r3"], prereqs:[24] },
      { id:26, difficulty:"advanced", title:"Logic Flows & Edge Cases",           desc:"Map out logic flows and identify edge cases before building.", tags:["planning","analysis"], objectives:["Create logic flow diagrams","Identify and handle edge cases","Design error handling strategies"], resources:["r1"], prereqs:[24] },
      { id:27, difficulty:"advanced", title:"Sprint 0 — The Foundation",          desc:"Build the foundational layer of your capstone project.", tags:["build","practical"], objectives:["Set up project infrastructure","Implement core functionality","Establish testing approach"], resources:["r6"], prereqs:[25,26] },
      { id:28, difficulty:"advanced", title:"Initial Peer Review",                desc:"Give and receive structured feedback on Sprint 0 deliverables.", tags:["review","collaboration"], objectives:["Give constructive peer feedback","Receive and process criticism","Iterate based on feedback"], resources:["r8"], prereqs:[27] },
      { id:29, difficulty:"advanced", title:"Deep Work Session 1",                desc:"Extended build session with teacher check-ins and structured progress tracking.", tags:["build","practical"], objectives:["Make meaningful progress on capstone","Document decisions and blockers","Maintain sprint diary"], resources:["r6"], prereqs:[28] },
      { id:30, difficulty:"advanced", title:"Deep Work Session 2",                desc:"Continue building with focus on integrating feedback from peer review.", tags:["build","practical"], objectives:["Integrate peer feedback","Resolve identified issues","Advance core features"], resources:["r6","r8"], prereqs:[29] },
      { id:31, difficulty:"advanced", title:"Deep Work Session 3",                desc:"Mid-project build session focusing on testing and refinement.", tags:["build","testing"], objectives:["Conduct systematic testing","Refine user experience","Document progress in sprint diary"], resources:["r6"], prereqs:[30] },
      { id:32, difficulty:"advanced", title:"Deep Work Session 4",                desc:"Pre-audit build session — polish, test and prepare for ethical audit.", tags:["build","practical"], objectives:["Complete core functionality","Polish user interface","Prepare for ethical audit"], resources:["r6","r9"], prereqs:[31] },
      { id:33, difficulty:"advanced", title:"Deep Work Session 5",                desc:"Final build session — incorporate audit findings and prepare deliverables.", tags:["build","practical"], objectives:["Address audit findings","Finalise all deliverables","Complete documentation"], resources:["r6"], prereqs:[32] },
      { id:34, difficulty:"advanced", title:"The Ethical Audit",                   desc:"Conduct a formal ethical audit of your project using a structured checklist.", tags:["ethics","assessment","critical-thinking"], objectives:["Apply ethical audit checklist","Identify ethical risks","Document mitigations and trade-offs","Critically challenge your own design decisions — steelman the strongest objection to your project"], resources:["r9"], prereqs:[33] },
      { id:35, difficulty:"advanced", title:"The Pitch Deck",                      desc:"Create a compelling presentation that communicates your project's value.", tags:["presentation","practical"], objectives:["Structure a pitch deck","Communicate technical concepts clearly","Design compelling visuals"], resources:["r2"], prereqs:[34] },
      { id:36, difficulty:"advanced", title:"Dress Rehearsal",                     desc:"Practice your presentation with peer feedback before the final showcase.", tags:["presentation","review"], objectives:["Deliver a timed presentation","Receive presentation feedback","Refine delivery and content"], resources:["r2","r7","r8"], prereqs:[35] },
    ]
  },
  {
    id: 5,
    title: "Presentations & Reflection",
    icon: "🎤",
    colour: "#ef4444",
    lessons: [
      { id:41, difficulty:"intermediate", title:"The Automated Graduate",              desc:"Explore how AI will shape higher education and graduate employment.", tags:["discussion","research"], objectives:["Analyse AI in higher education","Evaluate graduate employability","Plan personal development strategy","Identify which cognitive skills AI cannot replace — and how to develop them"], resources:["r5"] },
      { id:48, difficulty:"intermediate", title:"Thinking With vs. Thinking For",   desc:"Investigate what cognitive offloading really costs — and build a personal framework for using AI as a thinking partner rather than a thinking substitute.", tags:["reflection","discussion","critical-thinking"], objectives:["Define cognitive offloading and its documented risks","Explain the 'desirable difficulties' principle and why struggle builds competence","Distinguish productive AI use from harmful over-reliance","Design personal protocols for maintaining cognitive independence"], resources:["r4"] },
      { id:37, difficulty:"advanced", title:"Presentations — Group 1",            desc:"First group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:38, difficulty:"advanced", title:"Presentations — Group 2",            desc:"Second group delivers capstone presentations to panel and peers.", tags:["presentation","assessment"], objectives:["Deliver capstone presentation","Respond to panel questions","Demonstrate project understanding"], resources:["r7"] },
      { id:39, difficulty:"advanced", title:"Viva Voce — Session 1",              desc:"Individual oral examination on your capstone project and course learning.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:40, difficulty:"advanced", title:"Viva Voce — Session 2",              desc:"Continuation of viva voce examinations.", tags:["assessment","viva"], objectives:["Articulate design decisions","Defend ethical choices","Reflect on learning journey"], resources:["r19"] },
      { id:42, difficulty:"intermediate", title:"The Personal Statement Audit",        desc:"Use AI tools critically to review and improve personal statements.", tags:["practical","writing"], objectives:["Critically use AI writing tools","Identify and reject AI suggestions that dilute your authentic voice","Improve personal statement quality while maintaining intellectual ownership"], resources:["r17","r3"] },
      { id:43, difficulty:"intermediate", title:"Course Retrospective",                desc:"Reflect on the entire course using structured retrospective techniques.", tags:["reflection","discussion","critical-thinking"], objectives:["Apply retrospective frameworks","Identify how your critical thinking about AI has evolved","Articulate what you now know that you didn't when you started","Celebrate achievements"], resources:["r4"] },
      { id:44, difficulty:"advanced", title:"The AI Manifesto",                    desc:"Write your personal AI manifesto — your principles for living and working with AI.", tags:["writing","reflection","critical-thinking"], objectives:["Synthesise course learning into a coherent personal position","Articulate evidence-based AI principles — not just opinions","Address the tensions and trade-offs in your own thinking","Create a forward-looking manifesto you can genuinely defend"], resources:["r11","r4"] },
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
  { id:"r17", title:"PTFC Framework Reference Card",         cat:"framework",  desc:"Quick-reference card for the Persona-Task-Format-Context prompt framework, with worked examples for Claude and Gemini." },
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
<textarea class="resource-field" rows="2" placeholder="e.g. &quot;Every year, 800,000 pupils fail to access the mental health support they need...&quot;"></textarea></div>
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
<textarea class="resource-field" rows="2" placeholder="e.g. Write a paragraph explaining neural networks to a Year 9 pupil..."></textarea></div>
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
<li>What would you tell a pupil starting this course next year?</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Practice answer — choose one question above</label>
<textarea class="resource-field" rows="3" placeholder="Question chosen: ... / My answer: ..."></textarea></div>
<div class="resource-template-section"><h5>Section 5: Policy &amp; Society</h5>
<ul>
<li>Should AI tools like the ones you used be available to all pupils, or should access be restricted?</li>
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
<textarea class="resource-field" rows="2" placeholder="Title: AI Acceptable Use Policy — [Institution Name]\nScope: This policy applies to all pupils, staff and visitors who use AI tools in..."></textarea></div>
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
<p>Review how leading universities approach AI use by pupils. Use this to identify patterns, gaps and best practices for your own policy drafting.</p>
<div class="resource-template-section"><h5>Policy A — Conservative Approach</h5>
<ul>
<li><strong>Stance:</strong> AI use is prohibited in assessed work unless explicitly stated otherwise.</li>
<li><strong>Disclosure:</strong> Not required (use is banned).</li>
<li><strong>Enforcement:</strong> AI-generated text treated as academic misconduct; same penalties as plagiarism.</li>
<li><strong>Strengths:</strong> Clear, simple to understand and enforce.</li>
<li><strong>Weaknesses:</strong> Does not prepare pupils for AI-integrated workplaces; hard to enforce reliably.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A pupil at this university would..."></textarea></div>
<div class="resource-template-section"><h5>Policy B — Permissive with Disclosure</h5>
<ul>
<li><strong>Stance:</strong> AI use is permitted; pupils must declare it with a standardised statement.</li>
<li><strong>Disclosure:</strong> Mandatory declaration specifying which tools used and how.</li>
<li><strong>Enforcement:</strong> Failure to disclose = misconduct; content itself is not penalised.</li>
<li><strong>Strengths:</strong> Builds AI literacy; mirrors professional norms; transparent.</li>
<li><strong>Weaknesses:</strong> Risk of over-reliance; assessment validity questions; unequal AI tool access.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A pupil at this university would..."></textarea></div>
<div class="resource-template-section"><h5>Policy C — Task-by-Task Specification</h5>
<ul>
<li><strong>Stance:</strong> Each assessment brief specifies exactly which AI use is permitted for that task.</li>
<li><strong>Disclosure:</strong> Required where AI use is permitted.</li>
<li><strong>Enforcement:</strong> Use beyond stated permissions treated as misconduct.</li>
<li><strong>Strengths:</strong> Flexible; allows AI use in authentic contexts; pedagogically intentional.</li>
<li><strong>Weaknesses:</strong> Confusing across modules; extra burden on lecturers to specify clearly.</li>
</ul>
<label style="font-size:.8rem;color:var(--text-muted)">Your analysis</label>
<textarea class="resource-field" rows="2" placeholder="I think this approach works / fails because... A pupil at this university would..."></textarea></div>
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

  r8: `<h4>Peer Review Feedback Form</h4>
<p>Give honest, specific feedback. Vague comments like "it was good" are not helpful. Use evidence from what you actually saw or read.</p>
<div class="resource-template-section"><h5>Project Reviewed</h5>
<input class="resource-field" placeholder="Pupil / team name and project title...">
</div>
<div class="resource-template-section"><h5>Two Stars — What is working well?</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Identify two specific strengths. Say what they are AND why they work.</p>
<label style="font-size:.8rem;color:var(--text-muted)">Star 1</label>
<textarea class="resource-field" rows="2" placeholder="The [specific element] works well because..."></textarea>
<label style="font-size:.8rem;color:var(--text-muted);margin-top:8px;display:block">Star 2</label>
<textarea class="resource-field" rows="2" placeholder="I particularly liked [specific element] because..."></textarea>
</div>
<div class="resource-template-section"><h5>One Wish — What could be improved?</h5>
<p style="font-size:.8rem;color:var(--text-muted)">One actionable suggestion. Be specific — say what to change and how, not just that something is weak.</p>
<textarea class="resource-field" rows="3" placeholder="I think the project would be stronger if... specifically by..."></textarea>
</div>
<div class="resource-template-section"><h5>Ethical Consideration</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Is there an ethical dimension the creator may not have considered?</p>
<textarea class="resource-field" rows="2" placeholder="Have you considered what happens if... / A potential risk I noticed was..."></textarea>
</div>
<div class="resource-template-section"><h5>One Question for the Creator</h5>
<textarea class="resource-field" rows="2" placeholder="I'm curious about why you chose... / What would happen if a user..."></textarea>
</div>`,

  r10: `<h4>AI Policy Drafting Template</h4>
<p>Use this template to draft a formal AI Acceptable Use Policy. Each section includes guidance notes. Delete the guidance notes before submitting your final policy.</p>
<div class="resource-template-section"><h5>Section 1 — Purpose and Scope</h5>
<p style="font-size:.8rem;color:var(--text-muted)">State clearly what this policy covers, who it applies to, and why it exists. Avoid vague language — be specific about which AI tools and which people are covered.</p>
<textarea class="resource-field" rows="4" placeholder="This policy governs the use of artificial intelligence tools by [pupils / staff / both] at [school name]. It applies to all AI-assisted activities including [list specific tools or categories]. The purpose of this policy is to..."></textarea>
</div>
<div class="resource-template-section"><h5>Section 2 — Definitions</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Define key terms so there is no ambiguity. What counts as an AI tool? What is AI-generated content? What is acceptable use?</p>
<textarea class="resource-field" rows="4" placeholder="'AI tool' means any software using machine learning to generate text, images, code, or other content, including but not limited to: ChatGPT, Claude, Gemini, Copilot, and Midjourney.\n'AI-assisted work' means...\n'Acceptable use' means..."></textarea>
</div>
<div class="resource-template-section"><h5>Section 3 — Acceptable Uses</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Be specific. 'Acceptable use' means different things in different contexts — research, drafting, coding, revision, and accessibility all have different norms.</p>
<textarea class="resource-field" rows="5" placeholder="The following uses of AI tools are permitted:\n• Using AI to research topics, provided all AI-generated claims are independently verified\n• Using AI to generate a first draft, provided the pupil substantially revises and takes ownership\n• Using AI for accessibility purposes (e.g. text-to-speech, grammar assistance)\n• [Add your own...]"></textarea>
</div>
<div class="resource-template-section"><h5>Section 4 — Prohibited Uses</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Be equally specific about what is not allowed. Include academic integrity implications.</p>
<textarea class="resource-field" rows="5" placeholder="The following uses are prohibited:\n• Submitting AI-generated content as your own original work in any assessed task\n• Using AI to generate exam answers or controlled assessment responses\n• Using AI to fabricate citations, references, or evidence\n• [Add your own...]"></textarea>
</div>
<div class="resource-template-section"><h5>Section 5 — Transparency Requirements</h5>
<p style="font-size:.8rem;color:var(--text-muted)">How should pupils disclose AI use? A simple, clear mechanism is better than a complex one nobody follows.</p>
<textarea class="resource-field" rows="3" placeholder="Where AI tools have been used in the preparation of any work, pupils must disclose this by [method — e.g. adding a brief note at the end of the submission stating which tool was used and how]..."></textarea>
</div>
<div class="resource-template-section"><h5>Section 6 — Enforcement and Review</h5>
<textarea class="resource-field" rows="3" placeholder="Breaches of this policy will be treated as [academic misconduct / a disciplinary matter]. This policy will be reviewed annually. Last reviewed: [date]. Next review: [date]."></textarea>
</div>`,

  r11: `<h4>AI Manifesto Template</h4>
<p>Your AI Manifesto is a personal document — your principles for how you will live and work with AI. It should be honest, specific, and forward-looking. Aim for 400–600 words.</p>
<div class="resource-template-section"><h5>Opening Statement — Who are you, and where do you stand?</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Don't start with a definition of AI. Start with yourself. What does AI mean in your life right now?</p>
<textarea class="resource-field" rows="4" placeholder="I am writing this at a moment when... / My relationship with AI began when... / I believe that AI is..."></textarea>
</div>
<div class="resource-template-section"><h5>Principle 1 — On using AI honestly</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What does honest AI use mean to you? When will you disclose it? When will you refuse to use it?</p>
<textarea class="resource-field" rows="3" placeholder="I commit to... / I will always... / I will never use AI to..."></textarea>
</div>
<div class="resource-template-section"><h5>Principle 2 — On thinking critically about AI outputs</h5>
<p style="font-size:.8rem;color:var(--text-muted)">What habits will you cultivate to avoid over-reliance or uncritical acceptance?</p>
<textarea class="resource-field" rows="3" placeholder="When AI gives me an answer, I will... / I will question AI most when... / I will not accept AI output without..."></textarea>
</div>
<div class="resource-template-section"><h5>Principle 3 — On AI and fairness</h5>
<p style="font-size:.8rem;color:var(--text-muted)">How will you think about who benefits and who is harmed by the AI tools you use?</p>
<textarea class="resource-field" rows="3" placeholder="I believe AI should be... / I am concerned about... / When I use AI, I will consider its impact on..."></textarea>
</div>
<div class="resource-template-section"><h5>Principle 4 — On AI in your future career</h5>
<p style="font-size:.8rem;color:var(--text-muted)">How will you use AI as a collaborator, not a replacement for your own thinking?</p>
<textarea class="resource-field" rows="3" placeholder="In my future career, I want to use AI to... / I will protect my ability to... / The skills I will not outsource to AI are..."></textarea>
</div>
<div class="resource-template-section"><h5>Closing Commitment</h5>
<p style="font-size:.8rem;color:var(--text-muted)">End with a statement you actually mean — not a slogan, but a real commitment.</p>
<textarea class="resource-field" rows="3" placeholder="The most important thing I have learned about AI this year is... / Going forward, I commit to... / I want to be someone who..."></textarea>
</div>`,

  r12: `<h4>Global AI Regulation Jigsaw Cards</h4>
<p>Cut these cards out (or use the table below). Each group receives one region's card and becomes the expert on that approach. Then regroup so every new group has one expert from each region.</p>
<div class="resource-template-section">
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
  <thead><tr style="background:rgba(99,102,241,.15)">
    <th style="padding:8px;border:1px solid var(--border);text-align:left">Region</th>
    <th style="padding:8px;border:1px solid var(--border);text-align:left">Approach</th>
    <th style="padding:8px;border:1px solid var(--border);text-align:left">Key Law / Policy</th>
    <th style="padding:8px;border:1px solid var(--border);text-align:left">Strengths</th>
    <th style="padding:8px;border:1px solid var(--border);text-align:left">Criticisms</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid var(--border)"><strong>🇪🇺 European Union</strong></td><td style="padding:8px;border:1px solid var(--border)">Risk-based, precautionary, legally binding</td><td style="padding:8px;border:1px solid var(--border)">EU AI Act (2024) — four risk tiers; bans social scoring; fines up to €35m or 7% global turnover</td><td style="padding:8px;border:1px solid var(--border)">Comprehensive; protects citizens; sets global standard</td><td style="padding:8px;border:1px solid var(--border)">May slow innovation; compliance burden on startups; hard to enforce extraterritorially</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border)"><strong>🇬🇧 United Kingdom</strong></td><td style="padding:8px;border:1px solid var(--border)">Pro-innovation, sector-led, principles-based</td><td style="padding:8px;border:1px solid var(--border)">AI Opportunities Action Plan (2025); AI Safety Institute; no single AI law — existing regulators apply their own rules</td><td style="padding:8px;border:1px solid var(--border)">Flexible; avoids over-regulation; attracts investment</td><td style="padding:8px;border:1px solid var(--border)">Fragmented; no binding rules; weaker citizen protections than EU</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border)"><strong>🇺🇸 United States</strong></td><td style="padding:8px;border:1px solid var(--border)">Voluntary standards, executive action, no federal AI law</td><td style="padding:8px;border:1px solid var(--border)">NIST AI Risk Management Framework (2023); Biden Executive Order (2023); state-level laws (California, Colorado)</td><td style="padding:8px;border:1px solid var(--border)">Industry-friendly; allows rapid development; NIST framework is internationally respected</td><td style="padding:8px;border:1px solid var(--border)">Voluntary compliance; no enforceable rights; patchwork of state laws</td></tr>
    <tr><td style="padding:8px;border:1px solid var(--border)"><strong>🇨🇳 China</strong></td><td style="padding:8px;border:1px solid var(--border)">State-directed, content-focused, supports domestic champions</td><td style="padding:8px;border:1px solid var(--border)">Algorithmic Recommendation Rules (2022); Generative AI Regulations (2023); AI companies must get government approval before public launch</td><td style="padding:8px;border:1px solid var(--border)">Fast rule-making; controls disinformation; supports strategic AI goals</td><td style="padding:8px;border:1px solid var(--border)">Restricts free expression; rules tailored to political priorities; limited transparency</td></tr>
  </tbody>
</table>
</div>
<div class="resource-template-section"><h5>Discussion Questions (use after the jigsaw)</h5>
<ul>
<li>Which approach best protects individual citizens? Which best supports innovation?</li>
<li>Should AI regulation be global? Who would enforce it?</li>
<li>The EU AI Act applies to any company selling to EU citizens, even if based in the US or China. Is this appropriate?</li>
<li>What does the UK's approach tell you about its post-Brexit priorities?</li>
</ul></div>`,

  r15: `<h4>Surveillance & Facial Recognition Debate Pack</h4>
<p><strong>Motion:</strong> "This House believes that the use of live facial recognition technology in public spaces should be permanently banned in the UK."</p>
<div class="resource-template-section"><h5>Background: The Facts</h5>
<ul>
<li>The Metropolitan Police has used live facial recognition (LFR) at public events since 2020. South Wales Police have used it since 2017.</li>
<li>The UK has no specific law governing LFR — police use it under general policing powers.</li>
<li>A 2019 study by the University of Essex found the Met's LFR system had an 81% false positive rate in trials.</li>
<li>A 2021 MIT study found facial recognition error rates up to 34% higher for darker-skinned women than lighter-skinned men.</li>
<li>In 2023, Oportun (a US lender) was fined for using facial recognition to screen loan applicants — the FTC's first such enforcement action.</li>
<li>China has deployed LFR across 600+ cities, linked to its Social Credit System.</li>
<li>The EU AI Act classifies real-time LFR in public spaces as high-risk and limits its use to specific, narrow circumstances.</li>
</ul></div>
<div class="resource-template-section"><h5>Proposition: Arguments FOR the ban</h5>
<ul>
<li><strong>Bias and inaccuracy:</strong> High false positive rates mean innocent people — disproportionately people of colour — are wrongly flagged and potentially detained.</li>
<li><strong>Chilling effect on free assembly:</strong> Knowing you are being identified at a protest, demonstration, or public event deters lawful political participation.</li>
<li><strong>No clear legal basis:</strong> There is no specific law authorising LFR in the UK — its use is a constitutional grey area that Parliament has never debated.</li>
<li><strong>Irreversibility:</strong> Once a surveillance infrastructure is built, it is rarely dismantled — the risk of mission creep is high.</li>
</ul></div>
<div class="resource-template-section"><h5>Opposition: Arguments AGAINST the ban</h5>
<ul>
<li><strong>Crime prevention:</strong> The Met reported LFR identified 45 wanted suspects in a single month in 2023, including those wanted for serious offences.</li>
<li><strong>Technology improves:</strong> Accuracy rates are improving rapidly; banning the technology now prevents future, more accurate deployments.</li>
<li><strong>Proportionate to threat:</strong> CCTV — also a form of mass surveillance — is widely accepted; LFR is more targeted, not less.</li>
<li><strong>Democratic legitimacy:</strong> The public and elected police commissioners have broadly supported its use in specific contexts.</li>
</ul></div>
<div class="resource-template-section"><h5>Debate Structure (suggested)</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Opening speeches: 3 minutes each. Floor debate: 15 minutes. Closing speeches: 90 seconds each. Vote before and after — did anyone change their mind?</p></div>`,

  r16: `<h4>Deepfake Detection Checklist</h4>
<p>Use this checklist when you encounter video, audio, or images that may be AI-generated. No single indicator is conclusive — look for patterns of multiple flags.</p>
<div class="resource-template-section"><h5>Video — Visual Checks</h5>
<ul>
<li>☐ <strong>Face edges:</strong> Does the face boundary look blurred, flickery, or inconsistent at the hairline or jaw?</li>
<li>☐ <strong>Blinking:</strong> Does the person blink unnaturally infrequently, or at odd moments? Early deepfakes rarely blinked.</li>
<li>☐ <strong>Teeth and eyes:</strong> Are teeth unnaturally uniform? Do eyes track realistically or look slightly glassy?</li>
<li>☐ <strong>Lighting consistency:</strong> Does the lighting on the face match the background? Look for mismatched shadows.</li>
<li>☐ <strong>Background distortion:</strong> Does anything behind the person warp or ripple slightly, especially near the face?</li>
<li>☐ <strong>Skin texture:</strong> Is the skin too smooth, waxy, or missing natural texture (pores, stubble)?</li>
</ul></div>
<div class="resource-template-section"><h5>Audio — Voice Checks</h5>
<ul>
<li>☐ <strong>Unnatural rhythm:</strong> Does speech feel slightly mechanical, with unusual pauses or emphasis?</li>
<li>☐ <strong>Breathing:</strong> Is there a lack of natural breathing sounds between sentences?</li>
<li>☐ <strong>Background noise:</strong> Is background audio unusually clean or inconsistent with the video environment?</li>
<li>☐ <strong>Lip sync:</strong> Does the mouth movement match the audio precisely, or is there a slight mismatch at consonants?</li>
</ul></div>
<div class="resource-template-section"><h5>Context — Source Checks</h5>
<ul>
<li>☐ <strong>Reverse image search:</strong> Run a frame through Google Images or TinEye — does the same image appear elsewhere with different context?</li>
<li>☐ <strong>Source credibility:</strong> Who posted it? Is there a verifiable original source?</li>
<li>☐ <strong>Corroboration:</strong> Is this story covered by at least two independent credible outlets?</li>
<li>☐ <strong>Metadata:</strong> Do the file's creation date and claimed date match? Tools like InVID / WeVerify can check video metadata.</li>
<li>☐ <strong>Plausibility:</strong> Does this video make sense given everything else you know? Extraordinary claims require extraordinary evidence.</li>
</ul></div>
<div class="resource-template-section"><h5>Detection Tools (free)</h5>
<ul>
<li><strong>Hive Moderation</strong> — AI content detection for images and video</li>
<li><strong>InVID / WeVerify</strong> — video verification and metadata analysis</li>
<li><strong>Google Reverse Image Search</strong> — drag image to images.google.com</li>
<li><strong>FotoForensics</strong> — image error level analysis</li>
</ul></div>
<div class="resource-template-section"><h5>Remember</h5>
<p style="font-size:.8rem;color:var(--text-muted)">Deepfake technology is improving rapidly — some fakes are now undetectable to the human eye. Context and source verification matter more than visual inspection alone. When in doubt, do not share.</p></div>`,

  r18: `<h4>AI Environmental Impact Factsheet</h4>
<p>All figures below are from peer-reviewed research or official reports. Use these facts to ground your discussions and essays.</p>
<div class="resource-template-section"><h5>Training Energy Costs</h5>
<ul>
<li>Training GPT-3 (2020) consumed an estimated <strong>1,287 MWh</strong> of electricity — equivalent to the annual electricity use of 120 US homes.</li>
<li>Training a large transformer model produces an estimated <strong>284 tonnes of CO₂</strong> — roughly 5× the lifetime emissions of an average car. (Strubell et al., 2019)</li>
<li>Training GPT-4 reportedly cost over <strong>$100 million</strong> and used thousands of Nvidia A100 GPUs running for months.</li>
<li>Training a single large language model can consume as much energy as <strong>100 transatlantic flights</strong>.</li>
</ul></div>
<div class="resource-template-section"><h5>Inference (Running) Costs</h5>
<ul>
<li>A single ChatGPT query uses approximately <strong>10× more energy</strong> than a standard Google Search. (Goldman Sachs, 2024)</li>
<li>If ChatGPT matched Google's query volume (8.5 billion/day), it would require <strong>10 TWh per year</strong> — roughly Ireland's total annual electricity consumption.</li>
<li>Microsoft reports AI is increasing its data centre energy demand by <strong>30% per year</strong>.</li>
</ul></div>
<div class="resource-template-section"><h5>Water Usage</h5>
<ul>
<li>Data centres cool servers using water. Training GPT-3 consumed an estimated <strong>700,000 litres of fresh water</strong>. (Li et al., 2023)</li>
<li>A conversation of 20–50 questions with ChatGPT consumes roughly <strong>500ml of water</strong>.</li>
</ul></div>
<div class="resource-template-section"><h5>The Counter-Argument: AI's Potential to Reduce Emissions</h5>
<ul>
<li>AlphaFold has accelerated drug discovery — potentially reducing the energy cost of years of laboratory work.</li>
<li>DeepMind's AI reduced Google's data centre cooling energy by <strong>40%</strong>.</li>
<li>AI-optimised wind turbine control has increased energy yield by <strong>20%</strong> in trials.</li>
<li>The IEA estimates AI could contribute up to <strong>1.4 Gt CO₂ reduction per year</strong> by 2030 through efficiency gains — but only if its own emissions are managed.</li>
</ul></div>
<div class="resource-template-section"><h5>Discussion Questions</h5>
<ul>
<li>Should AI companies be required to publish their energy and water consumption?</li>
<li>Is it ethical to develop increasingly large AI models given the environmental cost?</li>
<li>Who should pay for the environmental externalities of AI — companies, users, or governments?</li>
</ul></div>`,

  r19: `<h4>Viva Voce Question Bank</h4>
<p>Practise answering these questions out loud — not by reading a prepared script. Your examiner will probe, so prepare to go deeper than your initial answer.</p>
<div class="resource-template-section"><h5>Understanding Your Project</h5>
<ul>
<li>Walk me through how your project works from the user's perspective.</li>
<li>What problem were you trying to solve, and how do you know it was a real problem?</li>
<li>Why did you choose this approach rather than an alternative?</li>
<li>What is the single most technically interesting decision you made, and why did you make it?</li>
<li>If you had twice as much time, what would you add first?</li>
</ul></div>
<div class="resource-template-section"><h5>Ethical Analysis</h5>
<ul>
<li>What is the biggest ethical risk your project creates? What did you do about it?</li>
<li>Who could be harmed by your project — directly or indirectly?</li>
<li>How does your project handle user data? Did you consider privacy by design?</li>
<li>Could your project produce biased outputs? How did you test for this?</li>
<li>If your project was deployed at scale to millions of users, what new risks would emerge?</li>
</ul></div>
<div class="resource-template-section"><h5>Technical and Design Decisions</h5>
<ul>
<li>Why did you choose [specific AI tool or model]? What alternatives did you consider?</li>
<li>Show me your most important prompt. Why is it structured the way it is?</li>
<li>What was the hardest bug or problem you encountered? How did you solve it?</li>
<li>How did you test that your system works as intended?</li>
<li>What assumptions did you make that turned out to be wrong?</li>
</ul></div>
<div class="resource-template-section"><h5>Reflection and Learning</h5>
<ul>
<li>What is the most important thing you learned — not about AI, but about yourself as a learner?</li>
<li>What would you do completely differently if you started again?</li>
<li>How has this project changed how you think about AI?</li>
<li>What do you know now that you wish you had known at the start?</li>
</ul></div>
<div class="resource-template-section"><h5>Connecting to the Wider Course</h5>
<ul>
<li>Which lesson from the course was most useful when building your project? Why?</li>
<li>How does your project relate to the AI regulation landscape we studied?</li>
<li>Does your project raise questions about human oversight? Where is the human in the loop?</li>
<li>If you were writing the policy that governed use of your own project, what would it say?</li>
</ul></div>`,
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
  { term: 'LLM (Large Language Model)', definition: 'An AI model trained on vast amounts of text data that can generate, summarise, translate, and reason about language. Examples include GPT-5.4 (OpenAI), Claude 4.6 (Anthropic), Gemini 3.1 Pro (Google), and Llama (Meta).', lessons: [2, 9, 15] },
  { term: 'Machine Learning', definition: 'A subset of AI where systems learn patterns from data rather than being explicitly programmed. Includes supervised, unsupervised, and reinforcement learning.', lessons: [1, 3] },
  { term: 'Model Interpretability', definition: 'How easily a human can understand the reasoning behind a model\'s predictions. Decision trees are highly interpretable; deep neural networks are not.', lessons: [4] },
  { term: 'Narrow AI', definition: 'AI designed for a single specific task — such as playing chess, filtering spam, or recognising faces. All current AI is narrow AI; it cannot generalise across domains.', lessons: [1] },
  { term: 'Neural Network', definition: 'A computing system inspired by the human brain, consisting of layers of interconnected nodes (neurons). Each connection has a weight that is adjusted during training.', lessons: [3, 4] },
  { term: 'Overfitting', definition: 'When a model memorises training data rather than learning general patterns, performing well on training data but poorly on new, unseen data. Like memorising past exam papers instead of understanding concepts.', lessons: [3] },
  { term: 'Prompt Engineering', definition: 'The skill of crafting effective instructions (prompts) to get high-quality outputs from AI systems. Uses techniques like PTFC, chain-of-thought, and iterative refinement.', lessons: [9, 12, 25, 42] },
  { term: 'PTFC Framework', definition: 'A structured approach to prompt writing: Persona (who the AI should act as), Task (what to do), Format (output structure), and Context (background — your role, audience, purpose, prior knowledge, and constraints). Used with tools such as Claude and Gemini.', lessons: [9, 12, 25] },
  { term: 'Stochastic Parrot', definition: 'A term coined by Bender & Gebru (2021) describing LLMs as sophisticated pattern-matchers that predict probable next tokens without genuine understanding of meaning.', lessons: [2] },
  { term: 'Supervised Learning', definition: 'A type of machine learning where the model learns from labelled examples — data paired with the correct answer. The model learns to map inputs to outputs.', lessons: [3] },
  { term: 'Temperature (AI)', definition: 'A parameter that controls the randomness of AI outputs. Low temperature produces more predictable, focused text; high temperature produces more creative, varied text.', lessons: [9] },
  { term: 'Token', definition: 'The basic unit of text that LLMs process — roughly a word or word fragment. GPT-4 processes text as sequences of tokens, not as whole sentences or meanings.', lessons: [2, 9] },
  { term: 'Training Data', definition: 'The dataset used to teach a machine learning model. The quality, representativeness, and biases in training data directly determine the model\'s capabilities and limitations.', lessons: [3, 5] },
  { term: 'Utilitarianism', definition: 'An ethical framework that judges actions by their consequences — the right action is the one that produces the greatest good for the greatest number of people.', lessons: [7] },
  { term: 'Viva Voce', definition: 'An oral examination where pupils defend their work by answering questions from examiners. Tests understanding, reasoning, and the ability to articulate decisions.', lessons: [39, 40] },
];

/* ── AI News Headlines (curated, verified) ───────────────────────── */
// All stories are real. Recent items link to The Neuron (theneuron.ai) — a daily AI newsletter.
// Teachers: add new articles via the Admin Dashboard → Manage News tab.
const AI_NEWS = [
  /* ── 2026 — from The Neuron ── */
  { headline: "Google just gave away its best AI — Gemini 2.5 Pro goes free for all users", source: "The Neuron", date: "Apr 2026", tag: "tools", url: "https://www.theneuron.ai/newsletter/google-just-gave-away-its-best-ai/" },
  { headline: "OpenAI's President reveals what the company is betting everything on", source: "The Neuron", date: "Apr 2026", tag: "industry", url: "https://www.theneuron.ai/newsletter/openai-s-president-just-told-you-exactly-what-the-company-is-betting-everything-on/" },
  { headline: "This is how we'd teach AI from scratch in 2026", source: "The Neuron", date: "Mar 2026", tag: "policy", url: "https://www.theneuron.ai/newsletter/this-is-how-we-d-teach-ai-from-scratch-in-2026/" },
  { headline: "Anthropic leaked Claude Mythos — and cybersecurity stocks crashed", source: "The Neuron", date: "Mar 2026", tag: "industry", url: "https://www.theneuron.ai/newsletter/anthropic-leaked-claude-mythos-cybersecurity-stocks-crashed/" },
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
    teacherNote: "🚩 Two serious problems. First, asking AI to write your personal statement is an academic integrity issue — UCAS prohibits this and universities use AI detection tools. Second, 'Make it sound like me' is the least useful format instruction possible since the AI has no idea who you are. Use AI to critique YOUR draft (see Dev's exemplar above), not to replace your voice.",
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
    role: "Mathematician & Computer Scientist",
    dates: "1912 – 1954",
    bio: "British mathematician who laid the theoretical foundations of computation and AI. During WWII he was central to breaking the Enigma code. He proposed the Turing Test in 1950 as a criterion for machine intelligence. Awarded a royal pardon posthumously in 2013.",
    icon: "🇬🇧"
  },
  "John McCarthy": {
    role: "Computer Scientist",
    dates: "1927 – 2011",
    bio: "American computer scientist who coined the term 'Artificial Intelligence' at the 1956 Dartmouth Conference. Inventor of the Lisp programming language and a pioneer of time-sharing computing. Stanford AI Lab founder.",
    icon: "🇺🇸"
  },
  "Marvin Minsky": {
    role: "Cognitive Scientist & AI Pioneer",
    dates: "1927 – 2016",
    bio: "Co-founder of MIT's AI laboratory. Influential theorist on neural networks and cognitive architectures. His book 'The Society of Mind' (1986) proposed that intelligence arises from the interaction of many simple processes.",
    icon: "🇺🇸"
  },
  "Arthur Samuel": {
    role: "Computer Scientist",
    dates: "1901 – 1990",
    bio: "IBM researcher who coined the term 'machine learning' in 1959. Created one of the earliest self-learning programs — a checkers-playing AI that improved by playing games against itself, demonstrating learning without explicit programming.",
    icon: "🇺🇸"
  },
  "Frank Rosenblatt": {
    role: "Psychologist & Computer Scientist",
    dates: "1928 – 1971",
    bio: "American researcher who invented the Perceptron in 1957 — the first computational model of a neuron capable of supervised learning. His work was foundational to modern neural networks, though interest waned after Minsky's 1969 critique.",
    icon: "🇺🇸"
  },
  "Joseph Weizenbaum": {
    role: "Computer Scientist",
    dates: "1923 – 2008",
    bio: "MIT professor who created ELIZA (1966), one of the first chatbot programs. He was disturbed by how readily users attributed understanding to his program and became a prominent critic of AI, arguing in 'Computer Power and Human Reason' (1976) that some human decisions should never be delegated to machines.",
    icon: "🇩🇪🇺🇸"
  },
  "Geoffrey Hinton": {
    role: "Cognitive Psychologist & Computer Scientist",
    dates: "1947 –",
    bio: "Often called the 'Godfather of Deep Learning'. Co-authored the key backpropagation paper (1986) and, with his pupils, created AlexNet (2012) which triggered the deep learning revolution. Left Google in 2023 to speak freely about AI risks. Awarded the 2024 Nobel Prize in Physics alongside John Hopfield.",
    icon: "🇬🇧🇨🇦"
  },
  "Yann LeCun": {
    role: "Computer Scientist",
    dates: "1960 –",
    bio: "Pioneer of convolutional neural networks (CNNs). His LeNet system (1989) was the first to successfully apply backpropagation to real-world image recognition — reading handwritten digits on cheques for US banks. Chief AI Scientist at Meta. Turing Award 2018.",
    icon: "🇫🇷🇺🇸"
  },
  "Yoshua Bengio": {
    role: "Computer Scientist",
    dates: "1964 –",
    bio: "Co-founder of the deep learning revolution alongside Hinton and LeCun. Director of the Montreal Institute for Learning Algorithms. A leading advocate for AI safety and ethics. Turing Award 2018.",
    icon: "🇨🇦"
  },
  "Fei-Fei Li": {
    role: "Computer Scientist",
    dates: "1976 –",
    bio: "Professor at Stanford and co-director of the Stanford Human-Centered AI Institute. Creator of ImageNet (2009), the large-scale visual database that enabled the deep learning revolution in computer vision. Former Chief Scientist of AI at Google Cloud.",
    icon: "🇨🇳🇺🇸"
  },
  "Ian Goodfellow": {
    role: "Machine Learning Researcher",
    dates: "1985 –",
    bio: "Inventor of Generative Adversarial Networks (GANs) in 2014 — a breakthrough technique where two neural networks compete against each other to generate increasingly realistic synthetic data. Formerly at Google Brain and Apple.",
    icon: "🇺🇸"
  },
  "Demis Hassabis": {
    role: "Neuroscientist & Entrepreneur",
    dates: "1976 –",
    bio: "Co-founder and CEO of DeepMind (acquired by Google in 2014). Led the AlphaGo, AlphaFold and Gemini projects. A former child chess prodigy, he combines neuroscience and computer science to build AI that learns like the human brain. Knighted in 2023.",
    icon: "🇬🇧"
  },
  "Sam Altman": {
    role: "Entrepreneur & CEO",
    dates: "1985 –",
    bio: "CEO of OpenAI, which he has led since 2019. Oversaw the launch of GPT-3, GPT-4, DALL-E, and ChatGPT — the fastest consumer product to reach 100 million users. Briefly fired and reinstated by OpenAI's board in November 2023 in a highly publicised governance crisis.",
    icon: "🇺🇸"
  },
  "Ilya Sutskever": {
    role: "Machine Learning Researcher",
    dates: "1985 –",
    bio: "Co-founder of OpenAI and co-inventor of AlexNet. Chief Scientist at OpenAI until 2024 when he left to found Safe Superintelligence Inc. One of the most cited researchers in deep learning history.",
    icon: "🇷🇺🇮🇱🇨🇦"
  },
  "John Hopfield": {
    role: "Physicist & Neuroscientist",
    dates: "1933 –",
    bio: "Princeton physicist who invented the Hopfield Network in 1982 — a type of recurrent neural network with associative memory inspired by spin glasses in physics. Awarded the 2024 Nobel Prize in Physics alongside Geoffrey Hinton for foundational discoveries enabling machine learning.",
    icon: "🇺🇸"
  },
  "Ashish Vaswani": {
    role: "Machine Learning Researcher",
    dates: "1985 –",
    bio: "Lead author of the landmark 2017 paper 'Attention Is All You Need', which introduced the Transformer architecture that underpins virtually every modern large language model, including GPT-4, Claude, and Gemini.",
    icon: "🇮🇳🇺🇸"
  },
  "Dario Amodei": {
    role: "Neuroscientist & Entrepreneur",
    dates: "1983 –",
    bio: "Co-founder and CEO of Anthropic, which he founded in 2021 after leaving OpenAI as VP of Research. A leading voice on AI safety, he has argued that frontier AI poses genuine existential risks and that safety and capability research must advance together. Anthropic created Claude, one of the leading AI assistants, and pioneered Constitutional AI — a method of training AI systems to be helpful, harmless, and honest.",
    icon: "🇺🇸"
  },
  "Liang Wenfeng": {
    role: "Entrepreneur & AI Researcher",
    dates: "1985 –",
    bio: "Co-founder and CEO of DeepSeek, the Chinese AI lab that shocked the AI world in January 2025 by releasing R1 — a reasoning model matching OpenAI's o1 performance at a fraction of the training cost. A former hedge fund founder, Wenfeng pivoted to AI research and built one of the most efficient AI labs in the world, challenging assumptions about the necessity of Western compute dominance.",
    icon: "🇨🇳"
  },
  "Sundar Pichai": {
    role: "Chief Executive Officer",
    dates: "1972 –",
    bio: "CEO of Alphabet (Google's parent company) since 2019. Under his leadership Google has made major AI bets: acquiring DeepMind, launching Gemini, embedding AI across Google Search and Workspace, and competing directly with OpenAI. Born in Chennai, India, Pichai studied at IIT Kharagpur before earning an MS from Stanford and MBA from Wharton.",
    icon: "🇮🇳🇺🇸"
  }
};

const AI_TIMELINE = [
  {
    year: 1943,
    title: "First Mathematical Neuron",
    summary: "McCulloch & Pitts publish a mathematical model of how neurons work — the first formal description of a computational brain cell.",
    detail: "Warren McCulloch and Walter Pitts published 'A Logical Calculus of the Ideas Immanent in Nervous Activity', proposing that neurons could be modelled as binary logic gates. This gave AI its first theoretical toolkit: the idea that intelligence could be built from simple on/off units wired together.",
    people: [],
    category: "theory",
    icon: "🧠"
  },
  {
    year: 1950,
    title: "The Turing Test",
    summary: "Alan Turing asks 'Can machines think?' and proposes the Imitation Game as a practical measure of machine intelligence.",
    detail: "In his paper 'Computing Machinery and Intelligence', Turing proposed replacing the unanswerable philosophical question 'can machines think?' with a practical test: if a human interrogator cannot reliably distinguish machine responses from human ones, the machine passes. The paper also anticipated nearly every objection to machine intelligence still debated today.",
    people: ["Alan Turing"],
    category: "theory",
    icon: "💭"
  },
  {
    year: 1952,
    title: "First Self-Learning Program",
    summary: "Arthur Samuel builds a checkers-playing program at IBM that improves by playing games against itself — coining the term 'machine learning'.",
    detail: "Samuel's checkers program was remarkable because it learned to play better than its creator. It memorised positions and evaluated future moves — demonstrating that computers could acquire skills through experience rather than explicit programming. Samuel coined the phrase 'machine learning' to describe this capability.",
    people: ["Arthur Samuel"],
    category: "milestone",
    icon: "♟️"
  },
  {
    year: 1956,
    title: "The Dartmouth Conference — AI is Born",
    summary: "John McCarthy organises a two-month summer workshop at Dartmouth College and coins the term 'Artificial Intelligence'.",
    detail: "McCarthy's proposal stated the conjecture that 'every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.' Attendees included Minsky, Shannon, and Simon. The conference set the agenda for AI research for decades — and named the field.",
    people: ["John McCarthy", "Marvin Minsky"],
    category: "milestone",
    icon: "🎓"
  },
  {
    year: 1957,
    title: "The Perceptron",
    summary: "Frank Rosenblatt invents the Perceptron — the first neural network capable of learning from labelled examples.",
    detail: "Rosenblatt's Perceptron was implemented on IBM hardware and could learn to distinguish simple shapes. It seemed to promise that machines could learn to perceive. The New York Times reported it would 'be able to walk, talk, see, write, reproduce itself and be conscious of its existence'. The optimism collapsed in 1969 when Minsky showed Perceptrons couldn't solve non-linear problems.",
    people: ["Frank Rosenblatt"],
    category: "research",
    icon: "⚡"
  },
  {
    year: 1966,
    title: "ELIZA — The First Chatbot",
    summary: "Joseph Weizenbaum at MIT creates ELIZA, a program that simulates a psychotherapist by reflecting questions back at the user.",
    detail: "ELIZA worked by pattern-matching keywords and reformulating user input as questions. Its most famous script, DOCTOR, mimicked a Rogerian therapist. Weizenbaum was disturbed that users formed emotional attachments to the program, including his own secretary. He spent the rest of his career warning against delegating human decisions to machines.",
    people: ["Joseph Weizenbaum"],
    category: "tools",
    icon: "💬"
  },
  {
    year: 1974,
    title: "First AI Winter",
    summary: "Funding collapses after a UK government report (the Lighthill Report) and US DARPA cuts conclude that AI has massively overpromised and underdelivered.",
    detail: "Sir James Lighthill's 1973 report for the British Science Research Council concluded that no part of AI had produced the major impact promised. Combined with the failure of machine translation projects, DARPA cut AI funding sharply. The term 'AI Winter' was later coined to describe this period of disillusionment, which lasted roughly until 1980.",
    people: [],
    category: "policy",
    icon: "❄️"
  },
  {
    year: 1980,
    title: "Expert Systems Boom",
    summary: "Rule-based 'expert systems' like XCON bring AI into industry — DEC saves millions using AI to configure computers.",
    detail: "Expert systems encoded domain knowledge as thousands of if-then rules. XCON (eXpert CONfigurer) at Digital Equipment Corporation processed 80,000 computer orders in its first year. By the mid-1980s, Fortune 500 companies were spending over a billion dollars a year on expert system development. The boom ended when systems proved too brittle and expensive to maintain.",
    people: [],
    category: "industry",
    icon: "🏭"
  },
  {
    year: 1986,
    title: "Backpropagation Revives Neural Networks",
    summary: "Geoffrey Hinton co-publishes the backpropagation paper, showing how multi-layer neural networks can be trained efficiently — ending the second AI Winter.",
    detail: "Rumelhart, Hinton, and Williams' 1986 paper in Nature showed that errors could be propagated backwards through a network to adjust weights at every layer. This made training deep networks computationally feasible for the first time. Though the technique had been independently discovered before, this paper popularised it and reignited neural network research.",
    people: ["Geoffrey Hinton"],
    category: "research",
    icon: "🔬"
  },
  {
    year: 1989,
    title: "Convolutional Neural Networks & Digit Recognition",
    summary: "Yann LeCun applies neural networks to recognise handwritten digits, reading cheques for US banks — the first practical deep learning application.",
    detail: "LeCun's LeNet demonstrated that convolutional neural networks — networks with shared-weight filters that detect local patterns — could read handwritten postcodes and cheques reliably. By the late 1990s, LeNet was processing over 10% of all cheques in the USA. This was the first large-scale commercial deployment of neural networks.",
    people: ["Yann LeCun"],
    category: "research",
    icon: "✍️"
  },
  {
    year: 1997,
    title: "Deep Blue Defeats Garry Kasparov",
    summary: "IBM's chess computer Deep Blue becomes the first machine to beat a reigning world chess champion in a match under standard chess tournament conditions.",
    detail: "Deep Blue evaluated 200 million positions per second using custom chips and search algorithms. Kasparov accused IBM of cheating after a mysterious move in game 2 that he thought no computer could play. IBM refused a rematch and retired the machine. The victory was a cultural watershed but relied on brute-force search rather than learning — making it distinct from modern AI.",
    people: [],
    category: "milestone",
    icon: "♟️"
  },
  {
    year: 2006,
    title: "Deep Learning Revival",
    summary: "Geoffrey Hinton and Ruslan Salakhutdinov publish a breakthrough paper showing how to train deep belief networks — reigniting interest in neural networks after two decades.",
    detail: "Their paper in Science showed that deep networks could be pre-trained layer-by-layer using unsupervised learning, then fine-tuned. This solved the 'vanishing gradient' problem that had made deep networks untrainable. Combined with growing compute and data, this sparked what became the deep learning revolution of the 2010s.",
    people: ["Geoffrey Hinton"],
    category: "research",
    icon: "🔁"
  },
  {
    year: 2009,
    title: "ImageNet Launched",
    summary: "Fei-Fei Li launches ImageNet — a database of 14 million labelled images that becomes the benchmark for computer vision and the fuel for deep learning.",
    detail: "Li's insight was that the bottleneck in computer vision wasn't algorithms — it was data. ImageNet took three years to build using crowdsourced workers on Amazon Mechanical Turk to label millions of images. The annual ImageNet Large Scale Visual Recognition Challenge (ILSVRC) from 2010 created the competition that AlexNet won so dramatically in 2012.",
    people: ["Fei-Fei Li"],
    category: "research",
    icon: "🖼️"
  },
  {
    year: 2011,
    title: "IBM Watson Wins Jeopardy!",
    summary: "IBM's Watson defeats Jeopardy! champions Ken Jennings and Brad Rutter in a televised match, showcasing natural language understanding at scale.",
    detail: "Watson processed natural language questions, searched its knowledge base, and responded faster than the human champions. Ken Jennings wrote on his final answer 'I for one welcome our new computer overlords.' Watson used over 100 algorithms simultaneously. IBM later deployed Watson Health for cancer diagnosis — with mixed results, highlighting the gap between game-playing and real-world AI.",
    people: [],
    category: "milestone",
    icon: "🎯"
  },
  {
    year: 2012,
    title: "AlexNet — The Deep Learning Revolution",
    summary: "AlexNet wins the ImageNet competition by a massive margin, cutting the error rate nearly in half and triggering the modern era of deep learning.",
    detail: "Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton's AlexNet achieved a top-5 error rate of 15.3% — compared to the runner-up's 26.2%. The key innovations were using ReLU activations, dropout regularisation, and training on GPU hardware. This single result shifted the entire field. Within two years, every top ImageNet entry used deep CNNs.",
    people: ["Geoffrey Hinton", "Ilya Sutskever"],
    category: "milestone",
    icon: "🚀"
  },
  {
    year: 2014,
    title: "GANs Invented",
    summary: "Ian Goodfellow invents Generative Adversarial Networks — a technique where two networks compete to generate increasingly realistic synthetic data.",
    detail: "Goodfellow reportedly conceived the idea during an argument at a Montreal bar and coded the first GAN the same night. A generator network tries to fool a discriminator network; the discriminator tries to spot fakes. The competition drives both to improve. GANs enabled photorealistic face generation, deepfakes, synthetic data, and creative AI tools like DALL-E's predecessors.",
    people: ["Ian Goodfellow"],
    category: "research",
    icon: "🎭"
  },
  {
    year: 2016,
    title: "AlphaGo Defeats Lee Sedol",
    summary: "Google DeepMind's AlphaGo beats world Go champion Lee Sedol 4-1 — a landmark considered a decade ahead of schedule.",
    detail: "Go has more possible positions than atoms in the observable universe, making it impervious to brute-force search. AlphaGo used two deep neural networks and Monte Carlo tree search, trained by both supervised learning from human games and reinforcement learning by playing itself. Lee Sedol called it 'an entity that is neither human nor computer'. DeepMind later released AlphaGo Zero, which learned purely from self-play.",
    people: ["Demis Hassabis"],
    category: "milestone",
    icon: "🔵"
  },
  {
    year: 2017,
    title: '"Attention Is All You Need" — The Transformer',
    summary: "Google researchers publish the Transformer architecture, which becomes the foundation of GPT, Claude, Gemini, and virtually every modern large language model.",
    detail: "The paper introduced the self-attention mechanism: instead of processing text sequentially (as RNNs did), Transformers attend to all tokens simultaneously, learning relationships across the full context. This enabled parallelisation on GPUs and scaling to previously impossible sizes. The Transformer is arguably the most influential AI paper since backpropagation.",
    people: ["Ashish Vaswani"],
    category: "research",
    icon: "🔧"
  },
  {
    year: 2018,
    title: "BERT & The Transfer Learning Era",
    summary: "Google releases BERT — a pre-trained language model that can be fine-tuned for almost any NLP task, dramatically raising performance benchmarks.",
    detail: "BERT (Bidirectional Encoder Representations from Transformers) was pre-trained on the entire Wikipedia and BookCorpus. Fine-tuning it on specific tasks required only small datasets. BERT improved state-of-the-art on 11 different NLP benchmarks simultaneously. It triggered a paradigm shift: instead of training models from scratch per task, the field moved to pre-train once, fine-tune anywhere.",
    people: [],
    category: "research",
    icon: "📚"
  },
  {
    year: 2020,
    title: "GPT-3 — Language Models at Scale",
    summary: "OpenAI releases GPT-3 with 175 billion parameters — the largest language model at the time, capable of writing essays, code, poetry, and passing professional exams.",
    detail: "GPT-3's scale produced qualitatively new capabilities that smaller models lacked — few-shot learning, coherent long-form text, working code, and more. Access was via API only, spurring hundreds of startups. It demonstrated that scaling transformer models on more data and compute kept producing improvements — the so-called 'scaling hypothesis'. The paper 'Language Models are Few-Shot Learners' became one of the most cited in AI history.",
    people: ["Sam Altman", "Ilya Sutskever"],
    category: "tools",
    icon: "📝"
  },
  {
    year: 2021,
    title: "AlphaFold 2 Solves Protein Folding",
    summary: "DeepMind's AlphaFold 2 accurately predicts protein 3D structure from amino acid sequence — solving a 50-year-old grand challenge in biology.",
    detail: "How a protein folds determines its function. Predicting this shape from sequence had been biology's hardest computational problem since 1969. AlphaFold 2 achieved accuracy comparable to expensive experimental techniques. DeepMind released structures for over 200 million proteins — effectively the entire known proteome — for free. Nature called it 'a stunning advance' that will accelerate drug discovery by years.",
    people: ["Demis Hassabis"],
    category: "milestone",
    icon: "🧬"
  },
  {
    year: 2022,
    title: "ChatGPT Launches — AI Goes Mainstream",
    summary: "OpenAI releases ChatGPT in November 2022. It reaches 100 million users in two months — the fastest consumer product in history.",
    detail: "ChatGPT combined GPT-3.5 with Reinforcement Learning from Human Feedback (RLHF) to produce an assistant that felt genuinely useful. It could write code, explain complex topics, draft emails, and pass professional exams. The same year saw DALL-E 2, Stable Diffusion, and Midjourney democratise image generation. 2022 is widely considered the year AI entered public consciousness.",
    people: ["Sam Altman"],
    category: "milestone",
    icon: "🌍"
  },
  {
    year: 2023,
    title: "Frontier AI Safety Becomes Policy",
    summary: "28 nations sign the Bletchley Declaration; the UK hosts the first AI Safety Summit; the EU finalises the AI Act. AI safety shifts from academic to geopolitical priority.",
    detail: "The Bletchley Park summit brought together governments, leading AI companies, and researchers to agree that frontier AI poses potential catastrophic risks requiring international coordination. The EU AI Act — the world's first comprehensive AI law — was agreed in December. In the US, President Biden issued an Executive Order on AI safety. The year marked AI governance becoming a mainstream political issue.",
    people: [],
    category: "policy",
    icon: "🏛️"
  },
  {
    year: 2023,
    title: "Open-Source Models Proliferate",
    summary: "Meta releases Llama 2; Mistral releases Mixtral. Powerful AI becomes freely available to researchers, developers and activists worldwide.",
    detail: "Meta's decision to open-source Llama 2 (70 billion parameters) was controversial — some argued it democratised AI; others that it removed safety guardrails. Within months, the open-source community had produced fine-tuned variants for medicine, law, coding, and more. Mistral's Mixtral 8x7B matched GPT-3.5 performance at a fraction of the compute cost, challenging the assumption that frontier AI required massive corporations.",
    people: [],
    category: "tools",
    icon: "🔓"
  },
  {
    year: 2024,
    title: "EU AI Act Comes Into Force",
    summary: "The world's first comprehensive AI law takes effect in the EU, establishing risk tiers, banning certain uses, and requiring transparency from general-purpose AI models.",
    detail: "The Act classifies AI systems by risk: unacceptable-risk (banned — e.g. social scoring, subliminal manipulation), high-risk (regulated — medical devices, hiring systems, critical infrastructure), and general-purpose AI (must publish training data summaries and comply with copyright law). Companies violating it face fines up to €35 million or 7% of global turnover. The Act will be phased in over three years.",
    people: [],
    category: "policy",
    icon: "⚖️"
  },
  {
    year: 2024,
    title: "Nobel Prize in Physics for AI Foundations",
    summary: "John Hopfield and Geoffrey Hinton are awarded the Nobel Prize in Physics for discoveries that enabled modern machine learning.",
    detail: "The Nobel Committee cited Hopfield's associative memory network (1982) and Hinton's Boltzmann machine as the foundational physics-inspired models that enabled the deep learning revolution. Hinton, who had left Google the previous year to speak freely about AI risks, used his Nobel lecture to warn about existential risks from AI systems that may develop goals misaligned with human welfare.",
    people: ["Geoffrey Hinton", "John Hopfield"],
    category: "milestone",
    icon: "🏆"
  },
  {
    year: 2024,
    title: "Multimodal AI Becomes Standard",
    summary: "GPT-4o, Gemini 1.5 Pro and Claude 3 Opus all launch with voice, image and million-token context capabilities — AI becomes a genuine general assistant.",
    detail: "GPT-4o ('o' for omni) processed voice, image and text natively in real time. Gemini 1.5 Pro offered a 1-million-token context window — enough to process entire codebases or novels. Claude 3 Opus outperformed GPT-4 on key benchmarks. Apple Intelligence brought on-device AI to consumer hardware. The year marked a shift from language-only models to genuinely multimodal AI embedded in everyday devices.",
    people: ["Sam Altman", "Demis Hassabis"],
    category: "tools",
    icon: "🤖"
  },
  {
    year: 2024,
    title: "OpenAI o1 — AI That Thinks Before Answering",
    summary: "OpenAI releases o1, a reasoning model that spends time working through problems before responding — scoring in the top 1% on maths competitions and passing the Bar Exam at the 90th percentile.",
    detail: "Unlike previous models that generated tokens immediately, o1 produces an internal chain of thought before its final answer. It scored in the top 1% on the AMC maths competition and passed the US Bar Exam at the 90th percentile. The model trades speed for accuracy, sometimes taking minutes on hard problems. It marked a new paradigm beyond simply scaling language model training — the beginning of 'test-time compute' as a route to greater intelligence.",
    people: ["Sam Altman"],
    category: "tools",
    icon: "🤔"
  },
  {
    year: 2024,
    title: "Google NotebookLM Goes Viral",
    summary: "Google's NotebookLM launches AI-generated audio discussions of any document — two hosts sound so natural that millions of users struggle to believe they are AI.",
    detail: "NotebookLM's Audio Overview feature generated podcast-style conversations about uploaded documents. The hosts — entirely AI-generated — sounded so natural that the feature went viral on social media in October 2024. Users uploaded academic papers, legal documents, and personal notes to hear AI hosts discuss them. The tool brought AI-generated audio into mainstream awareness and sparked debate about what 'authentic' audio means in the age of generative AI.",
    people: [],
    category: "tools",
    icon: "🎙️"
  },
  {
    year: 2024,
    title: "Sora: Photorealistic Video from Text",
    summary: "OpenAI releases Sora to the public — generating videos up to one minute long from text descriptions, raising immediate concerns about synthetic media and misinformation.",
    detail: "Sora used a diffusion transformer architecture trained on vast amounts of video. It could simulate physical interactions, camera movements, and lighting with striking realism. Public access via ChatGPT subscriptions was granted in December 2024. The release immediately raised concerns about deepfakes, electoral misinformation, and synthetic media in creative industries. Several film studios began negotiations about AI video terms in contracts.",
    people: ["Sam Altman"],
    category: "tools",
    icon: "🎬"
  },
  {
    year: 2025,
    title: "DeepSeek R1 Shocks the AI World",
    summary: "Chinese lab DeepSeek releases R1 open-source — a reasoning model matching OpenAI o1 reportedly trained for under $6 million. Nvidia's stock falls 17% in a single day, wiping $600 billion from its market cap.",
    detail: "DeepSeek R1 was released as open-source in January 2025. It matched or exceeded OpenAI o1 on key benchmarks and reportedly cost a fraction of frontier model training budgets. The release fundamentally challenged Western assumptions about AI dominance and the necessity of expensive Nvidia chips. It triggered the largest single-day market loss in US history when Nvidia shares fell 17%. The event forced a global rethink of AI investment strategy and compute requirements.",
    people: ["Liang Wenfeng"],
    category: "milestone",
    icon: "🌏"
  },
  {
    year: 2025,
    title: "UK AI Opportunities Action Plan",
    summary: "The UK government commits £14 billion in private AI investment, announces AI growth zones, and plans a National Data Library — aiming to become Europe's AI leader.",
    detail: "Published in January 2025, the Action Plan set out 50 recommendations covering compute infrastructure, public sector AI adoption, and AI skills education. It included plans for dedicated AI growth zones with fast-tracked planning permission for data centres. Critics questioned whether the plan adequately addressed safety and ethics. The plan reflected a wider geopolitical race as the US, EU, China, and UK each sought to attract AI investment and talent.",
    people: [],
    category: "policy",
    icon: "🇬🇧"
  },
  {
    year: 2025,
    title: "Claude 3.7 — Extended Thinking Made Visible",
    summary: "Anthropic releases Claude 3.7 Sonnet with 'extended thinking' mode — the model reasons step by step and shows its working to users before giving a final answer.",
    detail: "Unlike OpenAI's o1, which kept its reasoning hidden, Claude 3.7's extended thinking was displayed to users as a collapsible reasoning block. This transparency allowed users to verify the model's reasoning process and catch errors. The model set a new record on SWE-bench (software engineering) with 70.3% and improved significantly on scientific reasoning. Anthropic described it as their most intelligent model and a step toward AI capable of autonomous complex tasks.",
    people: ["Dario Amodei"],
    category: "tools",
    icon: "💭"
  },
  {
    year: 2025,
    title: "Gemini 2.5 Pro — Reasoning at Scale",
    summary: "Google DeepMind releases Gemini 2.5 Pro, combining million-token context with o1-style reasoning — it scores 18.8% on Humanity's Last Exam, the hardest AI benchmark.",
    detail: "Gemini 2.5 Pro topped the LMArena leaderboard — a human-preference ranking — and achieved 18.8% on Humanity's Last Exam, a benchmark of 3,000 questions from university-level specialists that previous models struggled with. It combined Google's existing strength in long-context processing with new step-by-step reasoning capabilities. The release confirmed Google DeepMind as a peer rival to OpenAI and Anthropic at the frontier.",
    people: ["Demis Hassabis", "Sundar Pichai"],
    category: "tools",
    icon: "⭐"
  },
  {
    year: 2025,
    title: "OpenAI o3 — A Leap Toward Expert-Level Reasoning",
    summary: "OpenAI releases o3 and o4-mini. o3 solves 71.7% of Humanity's Last Exam and 96.7% of AIME — approaching human expert performance across maths, science, and coding.",
    detail: "o3 scored 71.7% on Humanity's Last Exam (compared to ~34% for the previous best), 96.7% on the AIME maths competition, and 87.5% on ARC-AGI (versus 85% for average humans). Alongside o3, OpenAI released o4-mini — smaller, faster, and similarly capable for most tasks. GPT-4.1 was also launched optimised for long-context coding. The releases accelerated debate about whether AI had crossed a threshold into expert-level reasoning across multiple domains.",
    people: ["Sam Altman"],
    category: "milestone",
    icon: "🔮"
  },
  {
    year: 2025,
    title: "The Rise of AI Agents",
    summary: "AI systems move from conversation to action — browsing the web, writing and running code, filling forms, and completing multi-step tasks autonomously on users' behalf.",
    detail: "In 2025, AI agents became a central focus for every major lab. OpenAI launched Operator; Anthropic's computer use feature allowed Claude to control any software; Google's Project Mariner could navigate browsers. GitHub Copilot moved from code suggestion to autonomous coding sessions. Microsoft reported Copilot completing workflows of 10,000+ steps. Safety researchers warned of new risks: prompt injection attacks, social engineering by AI, and the difficulty of auditing decisions in multi-agent pipelines.",
    people: ["Sam Altman", "Dario Amodei"],
    category: "tools",
    icon: "🤖"
  },
  {
    year: 2025,
    title: "Claude 4 and the Frontier Consolidates",
    summary: "Anthropic releases Claude 4 (Sonnet and Opus). Three labs — OpenAI, Google DeepMind, and Anthropic — now compete at the frontier with models that can work autonomously on complex tasks for extended periods.",
    detail: "Claude 4's Opus model set new standards for agentic tasks — autonomous multi-step work requiring minimal human oversight. All three frontier labs had now released reasoning models, agentic capabilities, and multimodal tools. The consolidation raised questions about market structure: would AI become a utility controlled by three US companies? Calls for open-source alternatives, regulation, and international competition intensified. The race had produced enormous capability gains but also deepened concentration of power.",
    people: ["Dario Amodei"],
    category: "milestone",
    icon: "✨"
  },
  {
    year: 2025,
    title: "AI Coding Becomes Standard Practice",
    summary: "GitHub reports 40%+ of code in Copilot repositories is AI-generated. The Stack Overflow survey finds 76% of developers use AI daily — reshaping what it means to be a software engineer.",
    detail: "AI-assisted development tools — Cursor, GitHub Copilot, Claude, and Replit — became standard in professional software development. Studies found 55% productivity improvements but also noted increased bug rates requiring more review. Junior developer hiring slowed as companies found AI could handle entry-level tasks. The profession began shifting towards AI architecture, supervision, and system design — skills that AI still cannot replicate. Universities began revising computer science curricula in response.",
    people: [],
    category: "industry",
    icon: "💻"
  },
  {
    year: 2026,
    title: "GPT-5.4 — OpenAI's Most Capable Model",
    summary: "OpenAI releases GPT-5.4, its most capable model, combining advanced reasoning, multimodal inputs, and long-context understanding. Consumer access via ChatGPT Plus (around £16–£20/month in the UK).",
    detail: "GPT-5.4 extended OpenAI's leadership in general-purpose capability, combining the reasoning improvements of the o-series with GPT's conversational breadth. The model handled extended, multi-step tasks across coding, analysis, and creative work. For the first time, ChatGPT's capabilities were meaningfully differentiated from free-tier alternatives, intensifying debate about equity of access in education. UK subscriptions were priced around £16–£20/month — equivalent to a school textbook per month.",
    people: ["Sam Altman"],
    category: "tools",
    icon: "🔮"
  },
  {
    year: 2026,
    title: "Gemini 3.1 Pro — Google's Integrated Frontier Model",
    summary: "Google releases Gemini 3.1 Pro, deeply integrated into Google Workspace, Android, and Google Search — making frontier AI accessible to anyone with a Google account.",
    detail: "Gemini 3.1 Pro brought frontier-level capability to users through Google's existing product ecosystem: Gmail, Docs, Drive, and Search. For education, its integration with Google Workspace for Education meant many schools — including those on Google accounts — could access state-of-the-art AI without a separate subscription. Haileybury pupils have access to Gemini through their school Google accounts. The release intensified competition with OpenAI and Anthropic and raised questions about data privacy when pupils use school-integrated AI tools.",
    people: ["Demis Hassabis", "Sundar Pichai"],
    category: "tools",
    icon: "⭐"
  },
  {
    year: 2026,
    title: "Claude 4.6 — Anthropic's Latest Sonnet and Opus",
    summary: "Anthropic releases Claude 4.6 Sonnet and Opus — models combining strong reasoning, a 200,000-token context window, and Anthropic's Constitutional AI safety approach.",
    detail: "Claude 4.6 extended Anthropic's focus on safe, steerable AI. The Sonnet model balanced speed and capability for everyday tasks; Opus targeted complex reasoning and agentic workflows. Both offered a 200,000-token context window — roughly 150,000 words, about two full novels. Claude.ai remained accessible via web, with a free tier and paid subscriptions. Anthropic's continued focus on safety and transparency made Claude a frequent choice for education and research contexts where reliability and honest uncertainty-signalling mattered.",
    people: ["Dario Amodei", "Daniela Amodei"],
    category: "tools",
    icon: "🔵"
  },
  {
    year: 2026,
    title: "AI in Every Pocket — and Every Classroom",
    summary: "Frontier AI models are embedded in smartphones, laptops, search engines, and school software. Every major tech platform integrates AI by default, and educational institutions worldwide debate how to teach alongside it.",
    detail: "By 2026, AI had moved from a specialised tool to ambient infrastructure. Apple Intelligence processed queries on-device; Microsoft Copilot was embedded in Windows and Office; Google AI mode transformed Search. In education, the question shifted from 'should pupils use AI?' to 'how do we teach with and about AI responsibly?' The UK Department for Education published its first national AI in education framework. Research showed pupils who used AI effectively outperformed those who avoided it — but also those who over-relied on it without critical engagement.",
    people: [],
    category: "policy",
    icon: "🌍"
  }
];
