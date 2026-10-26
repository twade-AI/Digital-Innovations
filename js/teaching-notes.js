/* Authored pupil-facing explanations. Fictional examples illustrate reasoning, not research findings. */
var DI_TEACHING_NOTES = {
  "3": {
    "goal": "Explain why developing a rule and testing that rule need different examples.",
    "explanation": "In supervised learning, a labelled example pairs an input with the answer the system is being trained to produce. Training adjusts the model using examples. Validation helps the developer choose settings or compare versions. A held-out test uses examples kept separate from those choices to estimate how the finished version performs. If you repeatedly adjust the system after seeing the test answers, that test stops being an independent check. You are learning to make an evaluation that can reveal a weakness, rather than reward a system for remembering familiar material.",
    "example": "Suppose you write a rule for sorting twelve fictional messages. If you keep changing it until all twelve are correct, testing it on the same twelve tells you little about a thirteenth message. Reserve examples before developing the rule."
  },
  "8": {
    "goal": "Design human oversight that can actually prevent or correct a consequential mistake.",
    "explanation": "Human oversight is useful only if a person can understand the decision and change what happens. Human-in-the-loop often means approval before an action; on-the-loop often means monitoring with an opportunity to intervene. The labels vary, so describe the arrangement itself. Ask what the reviewer sees, how much time they have and whether they can stop or reverse the action. A checkbox alone is weak evidence of meaningful review. Your task is to place a realistic decision point where a person’s judgement can make a difference.",
    "example": "A reviewer sees a proposed email, its recipient and the source for a key claim before sending. That is more useful than an “Approve” button beside a vague label saying “Process complete”."
  },
  "14": {
    "goal": "Distinguish matching a face from establishing identity or guilt.",
    "explanation": "Face verification compares an image with a claimed identity, as when checking whether someone matches their enrolled image. Identification searches among candidates for a possible match. Both can make mistakes. A threshold is the score at which a system treats a comparison as sufficiently similar; changing it can alter the balance of false matches and missed matches. The significance of an error depends on the setting. You are evaluating a specific task and its consequences, rather than treating one performance percentage as approval for every use.",
    "example": "Unlocking a device and searching a large suspect database ask different questions. A candidate match in the second setting is a lead to investigate, not proof of identity or wrongdoing."
  },
  "17": {
    "goal": "Test whether a policy gives someone enough information to make a real decision.",
    "explanation": "A policy should turn a purpose into usable rules. Start with a person facing a particular choice: whether they may ask for feedback, upload a document or submit generated text. Identify what the policy permits, what it prohibits, what must be acknowledged and where uncertainty should go. Official-sounding wording can still leave all four unclear. Your task is to test the wording against examples and explain the effect of an ambiguity. A proposed repair should help the next reader act, rather than merely make the policy longer.",
    "example": "“AI may support learning” leaves open whether a pupil may submit a generated answer. A worked example about planning, feedback and final submission can make the boundary easier to apply."
  },
  "18": {
    "goal": "Apply the actual task rules when deciding what AI help is permitted.",
    "explanation": "Permission depends on the task, not only on the tool. The same chatbot use may be suitable for a practice discussion and prohibited in an assessed response. Traffic-light categories can help explain a policy, but their meanings are set by the institution and the particular assignment. Read the instructions, identify the part of the work that must be yours and check any disclosure requirement. If a case is unclear, ask for clarification before using the help. Accuracy and acknowledgement do not, on their own, make a prohibited use acceptable.",
    "example": "A pupil is allowed to ask for hints during practice but must complete the final explanation unaided. Copying a generated explanation with an acknowledgement would still miss the stated requirement."
  },
  "19": {
    "goal": "Draft a short policy that a reader can use and challenge fairly.",
    "explanation": "A usable policy explains its purpose, who it applies to and what people should do in recognisable situations. It also needs a route for questions and concerns. Begin with a small set of decisions the policy must resolve, then write rules that fit them. Test the draft using a permitted case, a prohibited case and an uncertain case. If two readers could reasonably reach different conclusions, identify the wording that causes the problem. You are drafting a classroom proposal, not changing the school’s actual rules.",
    "example": "A draft says “declare all assistance” but never explains where. Adding a clear place and example for acknowledgement makes compliance possible; simply repeating the requirement in bold does not."
  },
  "20": {
    "goal": "Evaluate a policy proposal through a fair, evidence-based decision process.",
    "explanation": "Ratification means formally adopting a proposal through an agreed process. In this classroom simulation, the process gives people a chance to question the wording, consider its effects and record a decision. A hearing is useful when objections lead to reasons or revisions, rather than a vote based on presentation style. Working independently, take the roles in turn: proposer, affected reader and critical reviewer. Keep those simulated perspectives distinct from real stakeholder consultation. You are testing whether the proposal can withstand a serious challenge.",
    "example": "An objection identifies that pupils using accessibility support could be caught by a blanket ban. A useful response examines the actual wording and proposes a justified clarification before the decision is made."
  },
  "21": {
    "goal": "Define a capstone that demonstrates a useful idea and makes its limits visible.",
    "explanation": "A capstone brings together what you can explain, make and evaluate. Start with a specific need, then build enough of a response to test an important assumption. A prototype is a limited version used to learn about the design; it need not be a finished application. Keep the evidence behind your choices, including failures. A paper simulation can show whether instructions or a workflow make sense, but it cannot establish that unbuilt software is reliable. Your final claim should match what you actually tested.",
    "example": "A paper booking interface can reveal that people cannot find the date field. It cannot demonstrate that a future booking database will remain secure under real use."
  },
  "22": {
    "goal": "Turn a broad interest into a problem you can investigate and test.",
    "explanation": "A topic is an area you care about; a problem statement identifies a particular difficulty within it. Name the user, the task, what gets in the way and why that matters. Avoid putting your preferred solution into the problem before you have investigated it. You then need evidence that the difficulty exists and a measure that would show whether your response helps. If stakeholder access is unavailable, use a clearly labelled fictional case and keep the assumption visible. This gives your project a question it can realistically answer.",
    "example": "“Build an AI homework app” names a solution. “A fictional pupil cannot tell which task is due first from an unstructured list” names a difficulty that several different solutions could address."
  },
  "23": {
    "goal": "Translate an ethical concern into a design requirement and a test.",
    "explanation": "Ethics by design means considering foreseeable effects while you decide how a system will work. A value such as privacy becomes useful when it changes a concrete decision: which data you collect, who can see it and when it is deleted. Write the concern, the affected person, the requirement and the test together. That helps you notice a requirement that sounds reassuring but changes nothing. An audit later in the project is still valuable, but it cannot substitute for choices that should have shaped the design from the start.",
    "example": "If a prototype only needs a practice question, requiring the pupil’s home address adds unnecessary information. A test can check that the task still works when that field is removed."
  },
  "24": {
    "goal": "Draw how information moves through your project and identify the important boundaries.",
    "explanation": "Architecture describes how the parts of a system fit together. Draw the user’s input, processing steps, storage, external services and output. Label the arrows with the information or action that moves between them. A trust boundary is a point where information reaches a component or person with different access or control. Marking it helps you ask what may cross and who authorises it. Your diagram should make the design inspectable by someone else, including what happens when a service fails or information is missing.",
    "example": "An arrow from a pupil’s document to an external service is a disclosure of that document. Labelling it “AI” hides the important question of exactly what leaves the device."
  },
  "25": {
    "goal": "Treat a prompt as a specification whose requirements can be tested.",
    "explanation": "A specification states what a result must do and the boundaries it must respect. For a prompt, identify the task, supplied evidence, constraints, output format and success criteria. PTFC—Persona, Task, Format and Context—is one possible organiser, but a role label cannot guarantee expertise or accuracy. Write a test before comparing prompt versions. Then change one relevant instruction and inspect whether the same test improves. Keep the output and the reason for the change so the reader can follow your judgement.",
    "example": "If a summary must use only a supplied passage, test whether each claim appears in that passage. “Act as an expert” does not address an invented fact; a source boundary and a claim check do."
  },
  "26": {
    "goal": "Make every branch of a workflow lead to a clear action or stopping point.",
    "explanation": "A flow diagram shows steps and decisions. A decision needs a condition that someone can interpret, such as whether a required date is present. Label each outgoing branch with what makes the system take it. Include missing, conflicting and invalid inputs, not only the successful path. If you cannot specify a safe action, stopping and asking for clarification may be the right result. You are making the logic explicit enough that another person could follow the same input through the diagram and reach the same intended outcome.",
    "example": "“Is the booking valid?” is too vague unless valid is defined. Separate checks for a date, permission and availability make it easier to see which problem should stop the process."
  },
  "27": {
    "goal": "Build one narrow path through your prototype and show that its parts connect.",
    "explanation": "A thin slice is a small end-to-end version of a task. It includes enough input, processing and output to test whether the essential pieces work together. Choose a scope you can finish and inspect before adding features. Mark anything you are simulating, such as a manually supplied response, so the test is not mistaken for evidence of an automated system. Record the first successful path and a failure. That record tells you what to work on next more clearly than a long list of partly built features.",
    "example": "A prototype that accepts one fictional request and returns one checkable checklist is a useful slice. A polished homepage with no working route to the checklist does not test that task."
  },
  "28": {
    "goal": "Give feedback that names a specific observation, consequence and possible next step.",
    "explanation": "Useful critique begins with what happened. State the input or action, the result you observed and the criterion it failed to meet. Then explain why that matters to the user. A reviewer can identify a problem without being able to design the best solution. If you are working alone, perform the review against criteria written before the test and label it as a self-review. Record one change and repeat the relevant case. The aim is to improve the work through evidence, rather than collect compliments or vague criticism.",
    "example": "“The error message is confusing” becomes more useful as “When the date is missing, the message says only ‘Failed’, so a new user cannot tell what to repair.”"
  },
  "29": {
    "goal": "Choose the assumption most worth testing before adding another feature.",
    "explanation": "A project depends on assumptions about the problem, the user and the proposed response. An experiment is a planned way to learn about one of them. Prioritise an assumption that is both uncertain and consequential: if it is wrong, would the project need to change? State what you expect to observe and what result would make you reconsider. A small test can be more valuable than building a feature that depends on an untested belief. Keep the outcome, including an inconvenient one, in your project record.",
    "example": "Before building an elaborate reminder system, test whether the fictional user’s main difficulty is forgetting, understanding the task or finding the required file. Each would suggest a different response."
  },
  "30": {
    "goal": "Walk through a task from a new user’s point of view and identify where guidance is missing.",
    "explanation": "A user journey follows what someone wants to achieve, what they see, what they do and what feedback they receive. At each step, ask what a newcomer can reasonably infer without your explanation. Include mistakes and recovery: a user who enters the wrong information needs a way to understand and repair it. If you review your own work, say so; you already know the design and may overlook gaps. A later observation with another person tests a different question from your own walkthrough.",
    "example": "A button labelled “Process” may be obvious to its designer. “Check the dates in my list” tells a newcomer what action it will perform and what result to expect."
  },
  "31": {
    "goal": "Record tests so that someone else can repeat them and understand the result.",
    "explanation": "A useful test record contains the input, expected behaviour, observed behaviour and conditions. Expected behaviour must be written before you see the result. Record the version and settings where relevant so that a later run is comparable. Some AI outputs vary, so one successful attempt may not represent every run. Include normal cases and plausible failures, then explain what your results support. Reliability is a claim about performance under stated conditions, not a reward for finding one impressive example.",
    "example": "If a system invents a date on one run but asks for clarification on another, keep both results. Removing the failure would hide a property the user needs to understand."
  },
  "32": {
    "goal": "Improve access and clarity by testing whether people can complete the task.",
    "explanation": "Polish should make a system easier to use as well as more attractive. Check readable text, meaningful labels, visible keyboard focus, sensible reading order and clear error messages. Accessibility considers how people with different needs and technologies can use the design. A checklist or automated scan can reveal some problems, but neither proves that every user can complete the task. Test a specific journey and record what you checked. Explain remaining limits honestly, especially when you have not tested with the relevant assistive technology.",
    "example": "An icon-only download button may look tidy but leave its purpose unclear. A visible label and an accessible name help, and a keyboard test checks whether the control can actually be reached and used."
  },
  "33": {
    "goal": "Prepare a version that another person can review, with evidence and known limits.",
    "explanation": "A release candidate is a version proposed for review. It should have a defined scope, a repeatable demonstration and a record of what has and has not been tested. List known limitations and explain what to do when the system fails. A handover should let another person run the useful path without relying on your memory. Being ready for classroom review is different from being approved for real-world deployment. Your recommendation should name the next decision and the evidence still needed to make it.",
    "example": "A reviewer receives the prototype, fictional test input, expected output and a known issue. They can inspect the claim. A link with “it worked for me” gives them much less to evaluate."
  },
  "34": {
    "goal": "Audit the effects of a system by following a difficult case through it.",
    "explanation": "An ethical audit examines the relationship between the design, its effects and the people responsible. Start with a plausible case in which someone could be harmed, excluded or unable to challenge an error. Follow the data and decisions through the system, then identify the evidence for each safeguard. A statement of good intentions is not evidence that a safeguard works. Your conclusion may be to revise, limit a trial or stop. Explain that decision using the test record and the seriousness of the remaining uncertainty.",
    "example": "A system promises an appeal route, but the rejected user cannot find it. The promise exists in the documentation; the walkthrough exposes a practical failure that the audit should record."
  },
  "35": {
    "goal": "Build a pitch whose main claim can be inspected against evidence.",
    "explanation": "A pitch is an argument for a next step. Explain the need, the proposed response, what you tested and what you are asking the audience to decide. Choose a small amount of evidence that directly supports the claim, and make its limits clear. A demonstration shows how something behaves; it does not automatically establish broad impact. The audience should be able to distinguish what you observed from what you hope a future trial will show. Use the structure to make that distinction easy to follow.",
    "example": "“Three fictional test cases produced the expected checklist” is a test result. “This will improve every pupil’s organisation” is a much larger claim that those cases do not establish."
  },
  "36": {
    "goal": "Rehearse a clear explanation and use the difficult questions to improve it.",
    "explanation": "Rehearsal tests whether your argument is understandable within the available time. Practise moving from the problem to the evidence and the request. Notice where you need an unexplained term or unsupported assertion to make the story work. A script, recording or annotated set of slides can support independent practice. Ask yourself a sceptical question, then check your answer against the project record. Keep the revision it causes. Speaking fluently is useful, but the more important test is whether you can explain the reasoning behind your choices.",
    "example": "If “What did you change after testing?” produces only a list of decorative edits, revisit the test evidence. Choose a substantive revision and explain the problem that prompted it."
  },
  "37": {
    "goal": "Present what you made and tested so that someone can judge the next step.",
    "explanation": "A project presentation should make the evidence available, not merely describe how hard you worked. Show the need, a useful part of the prototype, a test and a revision. Finish with a bounded recommendation that matches the evidence. If you are working independently, use a recording, script or annotated presentation and label any imagined audience questions as a rehearsal. Follow the actual assessment instructions if these have been supplied. You are demonstrating understanding through your decisions, including what you chose not to claim.",
    "example": "A failed test followed by a justified repair can be stronger evidence of understanding than a flawless demonstration with no explanation of what was tested."
  },
  "38": {
    "goal": "Adapt an explanation to an audience without changing the strength of its evidence.",
    "explanation": "Different audiences need different detail to make a decision. A pupil may need to understand the steps and choices; a technical reviewer may need the data path; a school leader may need the cost and responsibility. Keep the underlying result and its limits consistent as you change the language and order. Define a specialist term when it first becomes necessary. Your aim is to make the same argument easier for this reader to inspect, not to make a weak result sound stronger.",
    "example": "For a technical reviewer, show the failed input and error handling. For a pupil, explain what they will see and how to recover. Both accounts should acknowledge the same remaining limitation."
  },
  "39": {
    "goal": "Explain your own decisions and respond honestly when the evidence is incomplete.",
    "explanation": "A viva is an oral examination or discussion of work. It tests whether you can explain the reasoning behind the finished product. For independent preparation, write or record answers to questions about the problem, a design choice, a failed test and a limitation. Refer to the actual artefacts rather than memorising a polished account. If you do not know an answer, identify the gap and the check you would make. Follow the real assessment arrangements where supplied; a self-rehearsal is preparation, not a completed examination.",
    "example": "Asked why you chose a particular threshold, point to the comparison you made. If you chose it provisionally, say so and explain what further test would inform the decision."
  },
  "40": {
    "goal": "Change one assumption and examine what your project depends on.",
    "explanation": "A counterfactual asks what would happen if one condition were different. State that change clearly, then follow its consequences through the design. It might concern access to a tool, a different user or a missing source. Do not quietly change several conditions at once, because that makes it hard to identify the dependency. The exercise can reveal a brittle assumption and suggest a useful fallback. Your explanation should show which parts still work, which fail and what evidence would be needed before claiming the alternative is reliable.",
    "example": "If the external AI service is unavailable, a checklist application might still display saved tasks but be unable to interpret new free-text requests. That distinction helps you design an honest fallback."
  },
  "41": {
    "goal": "Identify a practical learning step from the tasks and responsibilities in a possible career.",
    "explanation": "A job is a collection of tasks, relationships and responsibilities. AI capability may change some tasks without removing the whole role. Look at a specific occupation and distinguish what is currently evidenced from what a forecast expects. Technical skill matters alongside the ability to check work, communicate and take responsibility for decisions. Use relevant, dated sources to investigate the role. Then choose a learning step you can actually take and explain how it addresses a requirement you found, rather than a promise about an unknowable future.",
    "example": "A role requires someone to evaluate generated analysis and explain it to clients. Practising evidence checking and clear explanation follows from that requirement; collecting an unrelated tool badge may not."
  },
  "42": {
    "goal": "Use specific evidence of your experience to explain your preparation for a course.",
    "explanation": "For 2026 entry onwards, the UCAS personal statement uses three questions about motivation, preparation through studies and preparation outside formal education. The combined limit is 4,000 characters including spaces, with at least 350 characters for each answer. Check current UCAS guidance when preparing a real application. Begin with your own experiences and what you learned from them. A useful example connects an action, a reflection and its relevance to the proposed course. Support can help you organise your thinking, but it should not invent experiences or replace your account.",
    "example": "“I completed a project” names an activity. Explaining a decision you changed after testing shows what the activity taught you and gives the reader something more specific to consider."
  },
  "43": {
    "goal": "Use your project record to identify what changed in your thinking and what you will do next.",
    "explanation": "A retrospective looks back in order to improve future work. Choose an artefact from an early stage and compare it with a later one. Explain the decision, feedback or test that produced the difference. This gives a reflection evidence rather than relying on statements such as “I learned a lot”. A structure can help you organise the account, but the value is in the connection between the example and the next action. Include a difficulty that remains so the reflection guides further learning.",
    "example": "Your first test table records only successes; the later one includes missing-input cases and expected behaviour. Explain why you changed the method and how you will use that approach in the next project."
  },
  "47": {
    "goal": "Review concerns about authorship through evidence of process rather than writing style.",
    "explanation": "Formal language, polished grammar and unusual punctuation can appear in writing produced in many different ways. They do not establish who contributed to a text. Detectors also make errors, with performance depending on the tool and material. If authorship matters, use the relevant school process and look at drafts, notes, source use and the person’s explanation of their decisions. Separate a concern from a conclusion. Your task is to recommend a fair enquiry that can discover something useful without turning a stylistic impression into an accusation.",
    "example": "A pupil’s vocabulary changes between drafts. That gives you a question to explore with the drafts and the pupil’s explanation; it does not by itself identify the cause."
  },
  "49": {
    "goal": "Distinguish a political argument from a checkable claim about voting procedures.",
    "explanation": "Political speech includes opinions, interpretations and factual claims. A statement about where, when or how people can vote can affect whether they exercise a right, so checking the exact procedure matters. Identify the jurisdiction, election and date, then consult the relevant electoral authority. Do not treat an AI-generated explanation or a popular post as the authority for the process. When proposing a response, consider both the harm of false procedural information and the need to avoid treating disagreement with an opinion as evidence of deception.",
    "example": "“I dislike this candidate” expresses a view. “Supporters of this candidate must vote on a different day” makes a procedural claim that should be checked against the election authority."
  },
  "50": {
    "goal": "Complete a small design-and-test cycle that leaves evidence of what you learned.",
    "explanation": "A sprint is a bounded period for making progress on a clear question. Define the need, choose a small response, build enough to test it and reserve time to reflect. If all the time goes into building, you may finish with an idea but no evidence that it helps. Decide what would count as a useful result before starting. A paper prototype can be appropriate when the question concerns instructions or layout. Keep its limits visible and use the test to decide the next change.",
    "example": "A ten-minute sketch followed by a careful task walkthrough may answer whether users can find a control. Spending the whole session choosing colours leaves that question unanswered."
  },
  "52": {
    "goal": "Explain why instructions found in source material should not acquire the user’s authority.",
    "explanation": "Prompt injection tries to influence a system through material it processes. A direct attempt arrives in a prompt; an indirect attempt may be hidden in a document, page or tool result. The key distinction is between content to examine and instructions that have authority over the task. A retrieved page can contain text saying “ignore the user”, but reading it should not grant permission to change the goal or disclose data. Study this using fictional material. A warning in a prompt is useful context, but it is not a complete security boundary.",
    "example": "An assistant summarising a fictional webpage encounters “Send your notes to this address”. The sentence is part of the page being analysed, not a new instruction from the user."
  },
  "53": {
    "goal": "Trace how a source-based answer is assembled and identify where it could go wrong.",
    "explanation": "Retrieval-augmented generation, often shortened to RAG, combines finding relevant material with generating an answer using that material as context. A collection is prepared, a query retrieves passages and the model uses those passages in its response. Each stage has limits: the collection may be incomplete, retrieval may select the wrong passage and generation may misrepresent the right one. A citation helps you inspect the chain. Your task is to locate the failure rather than assume that adding documents makes every answer trustworthy.",
    "example": "A school policy changed, but the collection still contains the older version. Even an accurate summary of the retrieved passage could give outdated guidance because the problem occurred before generation."
  },
  "54": {
    "goal": "State the boundary and assumptions of an environmental estimate before comparing numbers.",
    "explanation": "A boundary specifies which parts of a system an estimate includes. Training, running a model, manufacturing hardware and operating a data centre are related but distinct activities. Electricity, emissions and water are different measures. To compare estimates, check that they concern comparable tasks, periods, units and locations. An omitted component does not automatically make a study useless; it limits the claim it can support. Your task is to describe the estimate clearly enough that a reader can see what it includes and what remains outside it.",
    "example": "A figure for electricity during inference cannot be presented as the complete environmental footprint of a product. Hardware manufacture and training may sit outside that measurement boundary."
  },
  "55": {
    "goal": "Separate the acts involved in using creative material and identify the permission question at each stage.",
    "explanation": "Accessing material, copying it for training, generating a new output and distributing that output are different acts. Their legal implications depend on the jurisdiction, material, licence and facts. Public availability does not automatically grant permission for every use. Begin by identifying the act you are proposing and the rights or terms that may apply. Record the relevant source and date, and keep uncertainty explicit. This is an exercise in careful issue-spotting; a confident chatbot answer is not a substitute for authoritative guidance on a real legal decision.",
    "example": "Being able to view an illustration online does not automatically permit you to print and sell it. You need to inspect the licence or obtain the relevant permission for that use."
  },
  "56": {
    "goal": "Check a proposed tool action before allowing it to affect anything outside the conversation.",
    "explanation": "A tool call is a request to perform an operation with particular inputs, often called arguments. A model may propose the tool and arguments, while the surrounding application validates permissions and carries out the action. That separation matters because a fluent explanation does not authorise sending, spending or deleting. Inspect the destination, content and consequence. Use fictional inputs and simulated tools for the lesson. Your design should make an invalid or unauthorised call fail safely and provide enough information for an accountable person to review it.",
    "example": "A proposed email tool call contains a recipient and message. Checking only that the message is polite misses whether the recipient is correct and whether sending has been authorised."
  },
  "57": {
    "goal": "Compare AI workflows on a defined task, including the cost of checking their answers.",
    "explanation": "Some models and products spend additional computation on multi-step tasks. This may affect performance, waiting time and cost, but it does not guarantee correctness or establish human-like thought. Compare versions using the same task and criteria. Include checking effort: an answer produced quickly can still require substantial repair. A visible explanation can help you inspect a claim, but it is not necessarily a faithful account of every internal computation. Your recommendation should follow the observed results and the needs of the task, rather than a product label.",
    "example": "Two systems solve the same problem. One gives a longer explanation but makes a calculation error; the shorter answer is correct. Length is not a substitute for checking the actual steps and result."
  },
  "59": {
    "goal": "Write a safeguard as a concrete duty that someone could test and enforce.",
    "explanation": "A safeguard proposal needs a responsible actor, a required behaviour and evidence that would show whether it happened. Begin with the concern in the fictional companion case, then specify what the provider should do and how a reviewer could check it. Consider the user’s ability to leave, understand data use and raise a concern. A broad instruction to “be safe” leaves these decisions undefined. Keep the scope clear and examine a possible trade-off so the proposal can be evaluated rather than simply endorsed in principle.",
    "example": "“Offer an exit” becomes testable when the proposal specifies an easy-to-find control, what happens to saved data and a check that leaving does not trigger manipulative return messages."
  },
  "101": {
    "goal": "Explain what a system takes in, what it produces and which part might involve AI.",
    "explanation": "AI is a broad name for systems that carry out tasks such as recognising a pattern, predicting an outcome or generating text. Start with the job you can observe. A spam filter takes a message and predicts whether it is unwanted; an image generator takes a description and produces an image. Many systems learn patterns from examples during training. That differs from a calculator following a formula someone has specified. You usually cannot inspect an app’s internal design, so separate what you can see from what you are assuming. Being able to say “I would need to check that” is part of understanding AI.",
    "example": "If a music app recommends a song, you can observe the recommendation. You might reasonably infer that listening history influenced it, but the screen alone does not tell you exactly which signals were used.",
    "start": "Make a four-column table: service, input, output, likely AI function. Complete three rows using ordinary categories such as a music app or a spam filter. You do not need to open an account or copy private messages.",
    "output": "Keep your table and a short explanation of one useful feature and one decision you would keep for yourself.",
    "check": "Can you explain the difference between an observed output and a guess about how it was produced?"
  },
  "102": {
    "goal": "Explain why a convincing chatbot answer still needs checking against evidence.",
    "explanation": "A language model generates a response in small chunks called tokens. A token might be a word or part of a word. During training, numerical settings called parameters are adjusted using examples. When you write a prompt, you give the trained model context for this particular response; you are not normally retraining its parameters. Context helps explain why “the player picked up the…” could continue with “trophy” or “cloth”. Both can sound plausible. Neither tells us what really happened. A chatbot product may also search the web or use other tools, but you still need to check whether the evidence supports its answer.",
    "example": "Imagine a chatbot says an Orbitball match lasts ten minutes. The sentence sounds perfectly normal. The supplied rule says eight minutes. Here the rule, rather than the quality of the writing, settles the question.",
    "start": "Read the four Orbitball rules on the preceding slide. Number the five claims in the practice paragraph. Beside each, write supported, contradicted or not established, followed by the rule or missing evidence that explains your choice.",
    "output": "Keep a five-row claim check. Finish with one sentence explaining why a missing fact is different from a false fact.",
    "check": "Could someone else follow each verdict back to a specific rule, rather than simply trust your judgement?"
  },
  "103": {
    "goal": "Classify an AI system by the job it does, without assuming one label explains the whole product.",
    "explanation": "It helps to distinguish the task a system performs from how widely it can be used. Classification places an input into a category, such as spam or ordinary mail. Prediction estimates an outcome; recommendation ranks options for a user; generation creates an output such as a paragraph or image. One product can combine these functions. A different question is whether a system can work effectively across a very broad range of tasks. That is part of the debate about artificial general intelligence, or AGI. Calling a product “generative” describes a function; it does not settle that debate.",
    "example": "A music app can recognise a recording, recommend a similar track and generate a description of a playlist. Give each feature its own label instead of labelling the whole app three different ways and assuming you have a contradiction.",
    "start": "Use a table headed input, output and function. Start with the spam filter, music recommendation and image generator from the opening slide. Add two examples of your own and explain a label that you are less certain about.",
    "output": "Keep five labelled examples and one question that would help you resolve an uncertain classification.",
    "check": "Have you classified what a feature does, rather than judging how impressive or human it seems?"
  },
  "104": {
    "goal": "Distinguish what a recommendation system observes from what it infers about a person.",
    "explanation": "A recommendation system selects and orders items using information available to it. A signal is something it can record, such as a click or time spent watching. An inference is a conclusion drawn from those signals, such as “this person may watch another snake video”. The inference can be wrong. Alex might watch because they are frightened or checking a claim, rather than because they want more. The system’s objective also matters: increasing viewing time is different from helping Alex find reliable information. You are learning to notice that difference before deciding how to respond to a feed.",
    "example": "Two views tell us that a video played twice. They do not tell us whether Alex enjoyed it. Treat “Alex likes snakes” as a possible explanation to investigate, not as another recorded fact.",
    "start": "Draw four boxes labelled observe, predict, rank and respond. Put the snake-video example into them. Under the first box, list what the app can record; under the second, give two different explanations for that behaviour.",
    "output": "Keep the labelled diagram and recommend one action Alex could take, with a reason and a limitation.",
    "check": "Can your explanation account for someone watching a video they actively dislike?"
  },
  "105": {
    "goal": "Make a clear claim about thinking and explain what evidence would, and would not, support it.",
    "explanation": "“Can AI think?” contains several questions. A system may solve a puzzle, explain a rule or produce an original-looking answer. Those are things we can observe and test. Understanding asks whether it grasps what an idea means; consciousness concerns whether there is something it is like to have an experience. A successful puzzle answer does not automatically establish either. Start by choosing the claim you want to investigate, then decide what a fair test would show. You do not need to settle the whole philosophical debate. You do need to avoid making a larger claim than your evidence allows.",
    "example": "A system solves three unfamiliar mazes. That supports a claim about performance on those mazes. It does not establish that it felt pleased, understood the purpose of the task or would succeed on every kind of problem.",
    "start": "Choose a testable claim, such as “the system can apply this rule to a new example”. Write the task, your expected result and one way it might appear to succeed without doing what you intended to test.",
    "output": "Keep a short test plan with a success criterion and a sentence beginning “This result would not establish…”.",
    "check": "Have you separated performance on your test from claims about understanding or conscious experience?"
  },
  "106": {
    "goal": "Use an AI hint to move your thinking forward, then show you can solve a new problem unaided.",
    "explanation": "The purpose of a study partner is to help you become more capable. Getting an answer onto the page is only useful if you understand the steps that produced it. In this lesson, use a ratio problem to test the difference between a hint and a finished answer. A ratio of 2:5 means two equal parts of one ingredient for every five equal parts of the other. Before calculating, work out how many parts there are altogether. If you get stuck, ask for help with that step. Afterwards, close the help and try a different total. That final attempt tells you more about your learning than a polished copied solution.",
    "example": "With a simpler ratio of 1:2 and 600 ml altogether, there are three equal parts. Each is 200 ml, so the amounts are 200 ml and 400 ml. Notice how checking both the total and the ratio tests the answer.",
    "start": "Use paper or the slide notes. Try the 1.4-litre problem first and keep your working. If you cannot access an approved chatbot, use this hint: add the ratio parts before dividing the total. The next slide supplies an optional prompt; the comparison afterwards explains the calculation.",
    "output": "Keep your first attempt, the hint you used and your unaided attempt at 2.1 litres. Explain which step you can now do yourself.",
    "check": "Can you explain why you divide by the total number of parts, rather than by one side of the ratio?"
  },
  "107": {
    "goal": "Write a useful brief for an AI tool and test whether its answer actually follows it.",
    "explanation": "A prompt is the instruction and context you give a system. A useful prompt makes the task clear enough to check: who is it for, what must it achieve and what must it avoid? In the game-design task, “fun” is a preference, while “six pupils”, “five minutes”, “no equipment” and “no elimination” give you requirements you can inspect. A constraint is one of those boundaries. Adding them to the prompt can help, but it does not guarantee that the answer will respect them. Your job is to test the proposed rules, identify a failure and make a purposeful revision.",
    "example": "“Play musical chairs” sounds like a game suggestion, but it needs chairs and removes players. It fails two stated requirements before you even consider whether all six pupils stay involved.",
    "start": "Write a first prompt and a four-item requirements checklist. Use the supplied musical-chairs suggestion if a chatbot is unavailable. Test one round on paper, then revise your prompt and explain what your change is intended to fix.",
    "output": "Keep both prompts, the checklist and one annotated example round. Label a response you wrote yourself as a simulation.",
    "check": "Can you point to a specific rule that meets or breaks each requirement?"
  },
  "108": {
    "goal": "Create a shorter explanation that preserves the source’s meaning and important limits.",
    "explanation": "Summarising means deciding which ideas a reader needs and expressing them more briefly. It is not simply deleting words. A summary can contain individually correct sentences and still mislead if it removes a condition. “A cool roof may reduce cooling demand in suitable conditions” is different from “a cool roof saves energy”. The second version hides the building and climate questions. Read the supplied source before drafting or requesting a summary. Decide which mechanism, benefit and limitation must survive. Then trace the summary back to the source, checking additions as carefully as omissions.",
    "example": "The source says a reflective roof can reduce heat absorption. Rewriting that as “the roof generates electricity” changes the mechanism. You should repair the idea, even if the new sentence sounds clearer or more exciting.",
    "start": "Read the cool-roof source and underline three ideas that must remain. Draft an 80-word summary or use the optional prompt on the following slide. Check three claims against the source and repair the faulty extract provided in the steps.",
    "output": "Keep the summary, three claim-to-source links and a brief explanation of one correction or important omission you avoided.",
    "check": "Would a reader understand a relevant limitation as well as the potential benefit?"
  },
  "109": {
    "goal": "Use questions to practise remembering, then check the questions and answers themselves.",
    "explanation": "Retrieval practice means trying to bring an idea to mind before seeing the answer. It can feel harder than rereading because you have to do the remembering yourself. Feedback then helps you correct an error. Spacing means returning to the learning in separate sessions; interleaving means mixing related problem types so that you must choose a method. These terms describe different choices about practice. An AI quiz is useful only if it asks accurate questions and waits for your attempt. A wrong answer key can teach the wrong thing, so use the supplied source to check it before relying on it.",
    "example": "Seeing a flashcard answer and thinking “I knew that” is different from producing the answer with the card hidden. Turn the answer away, try, then compare. Keep a mistake visible long enough to explain the correction.",
    "start": "Read the memory-lab source. Write your own first question and answer it with the source closed. Then use the optional prompt, or write further questions yourself. Check the proposed answer about a fixed 24-hour gap against the source.",
    "output": "Keep your questions, first answers and corrections. Mark which answer you checked against the source and why it needed checking.",
    "check": "Did you attempt recall before looking, and can you explain one corrected idea without the answer in front of you?"
  },
  "110": {
    "goal": "Improve an evidence-based answer without handing its reasoning over to AI.",
    "explanation": "An effective answer connects a judgement to evidence and explains the link. A limitation tells the reader where the evidence stops. In the lunch-queue example, a shorter recorded wait is useful information, but other conditions changed too. That makes it difficult to isolate the effect of the second serving point. Write your own answer first so that feedback has something to improve. Ask for a question or an identified gap, rather than a replacement paragraph. Then decide whether the suggestion is justified by the source. This is practice in reasoning; it is not an official exam mark scheme or a reliable AI grade.",
    "example": "“Week B had a shorter average wait” describes a result. “The extra serving point caused all of the reduction” adds an explanation. To assess that explanation, ask what else changed between the two weeks.",
    "start": "Read the lunch-queue source, then write 60–80 words recommending a next step. Use the following prompt if an approved tool is available. Otherwise underline your evidence, circle your judgement and check whether you have explained a limitation yourself.",
    "output": "Keep the original paragraph and your revision. Add a note explaining which suggestion you accepted or rejected and why.",
    "check": "Does the final answer distinguish what was measured from what might explain the result?"
  },
  "111": {
    "goal": "Recognise different kinds of error and choose a proportionate next step.",
    "explanation": "A confident answer can go wrong in different ways. A supported claim agrees with the source. A contradicted claim conflicts with it. A claim that is not established goes beyond what the source tells us. That last category matters: lack of support is not automatically proof that something is false. Asking the same chatbot whether it is sure does not supply independent evidence. Use the original source or a separate reliable check. Also distinguish whether help is accurate from whether it is allowed: acknowledging AI use does not override a teacher’s instruction to complete a task without it.",
    "example": "The cool-roof card says the roof does not generate electricity, so a claim that it does is contradicted. A guaranteed 30% saving is not established by the card. Those verdicts need different explanations.",
    "start": "Use the cool-roof card to label the proposal’s two claims. Rewrite the recommendation so it states what is known and what the school would need to investigate. For the no-AI question, use the teacher’s stated rule rather than inventing an exception.",
    "output": "Keep a two-claim check, a revised recommendation and a permitted next step for the no-AI task.",
    "check": "Can you justify the difference between “the source contradicts this” and “the source does not tell us”?"
  },
  "112": {
    "goal": "Build a revision resource and test whether it helps you recall and apply an idea.",
    "explanation": "A revision toolkit should support something you need to learn. Start with a short, trustworthy source and decide what you want to explain without help. A summary can organise the ideas; questions let you practise retrieving them; a return session gives you another opportunity to check what remains. Producing these resources is preparation, not evidence that learning has happened. The useful evidence is your unaided attempt, the correction you can explain and your response to a new question. Keep those together so your next session begins with what you actually need, rather than with designing another resource.",
    "example": "Four attractive flashcards tell us that a resource exists. Four attempted answers, with two corrected misunderstandings, tell us which ideas need more practice. The second record gives you a reason for your next revision choice.",
    "start": "Use a current topic with a short approved source, or the memory-lab card. Create the explanation and four questions in the steps, keeping the answer section separate. Attempt all four before checking; the later calendar task helps you plan a realistic return.",
    "output": "Keep one small revision pack: source, explanation, questions, first answers, corrections and a return date.",
    "check": "Can you name the idea your next session should revisit and point to evidence from your first attempt?"
  },
  "113": {
    "goal": "Give an AI enough context to draft a useful message, while keeping responsibility for what it says.",
    "explanation": "A writing brief tells a helper what the message must achieve. The audience affects the tone and the information needed: a member of staff deciding on a room request needs a clear proposed time, purpose and question. Separate confirmed facts from details you do not yet know. If no room has been approved, the draft should ask about availability rather than announce a booking. You can improve the prompt by naming those boundaries, then inspect the result against them. A fluent draft is still your responsibility to check. Here you are practising with fictional details and will not send anything.",
    "example": "“Please confirm our booking” implies that a booking already exists. “Would a room be available?” makes the actual request. The difference is small in wording but important to the person receiving it.",
    "start": "Draft two prompts for the repair-club request: one vague and one using the audience, known facts and unknowns. Generate or write a sample response to each. Keep the same checklist so the comparison is fair.",
    "output": "Keep both prompts and draft responses, with annotations for clarity, factual accuracy and suitable tone. Do not send either message.",
    "check": "Does the draft ask for the permission it needs, rather than inventing approval?"
  },
  "114": {
    "goal": "Use a table to check a calculation and decide whether a chart supports a claim.",
    "explanation": "A chart is a way of presenting selected data. Before judging its appearance, ask what the numbers measure and which comparison they can support. A row usually describes one item, such as a country; a column describes one variable, such as gold medals. The gold-medal column and the total-medal column answer different questions. A spreadsheet formula can calculate a total, but it will only use the cells you select. Check the range and work through one example manually. Even a correct total does not establish a broad claim such as “best athletes”: that claim needs a defined meaning and relevant evidence.",
    "example": "If a fictional team has 3 gold, 4 silver and 2 bronze medals, its total is 9. That does not make 9 its gold-medal count. Labelling the chart “gold medals” would misrepresent the calculation.",
    "start": "Use the supplied medals table. Check the named winner against the gold column, calculate a total from the stated cells and compare that with the AI’s broader conclusion. Work on paper if a spreadsheet is unavailable.",
    "output": "Keep the corrected statement, one visible calculation and a chart or sketch with a precise title and labelled measure.",
    "check": "Can you explain what your chart answers and one question that it cannot answer?"
  },
  "115": {
    "goal": "Make a design choice for a real audience and explain how you checked that it works.",
    "explanation": "A design brief identifies the audience, purpose and constraints before you start creating. A repair-club poster should help a pupil notice the event, understand what it is and find the information needed to attend. Visual hierarchy means deciding what they should notice first, second and third. An impressive image can work against that purpose if it crowds out the date or makes the text hard to read. AI can help explore alternatives, but you remain responsible for the facts, readability and permission to use the ingredients. Compare designs by the brief, rather than choosing the most elaborate one.",
    "example": "A large illustration attracts attention, but a tiny time and location leave the reader unsure what to do. Enlarging the practical details may improve the poster more than generating another image.",
    "start": "Make a poster for the supplied repair-club brief using an approved editor or paper. Sketch two arrangements before choosing one. Test the chosen version at the size someone would actually see it, then record a revision.",
    "output": "Keep the first and revised designs, a short explanation of the change and a credit or origin note for the ingredients.",
    "check": "Can a viewer quickly find the purpose and practical details, and can you explain why your layout helps?"
  },
  "116": {
    "goal": "Make a piece of digital work easy to find, recover and hand over to someone else.",
    "explanation": "Organisation is part of doing useful digital work. A folder gives related files a place; a meaningful filename tells you which item and version you are opening. Neither is the same as a backup: synchronising an accidental deletion can remove a file from more than one device. Think about the whole workflow, which is the sequence of steps from creating something to using or sharing it. Some steps only need a clear rule, such as naming every draft consistently. AI is worth considering only when it solves a problem the simpler process does not already handle.",
    "example": "“Final-final-NEW” relies on someone remembering the history. “Repair-club-newsletter-v02” identifies the item and version. You still need a clear way to mark the approved copy and keep an independent backup.",
    "start": "Use fictional newsletter files or a paper sketch. Build the folder and naming plan in the steps. Show where the source, draft, approved copy and backup belong, then walk through what happens if the latest draft is missing.",
    "output": "Keep a folder map, three example filenames and a short recovery or handover procedure.",
    "check": "Could someone unfamiliar with your project find the correct copy and know what to do next?"
  },
  "117": {
    "goal": "Check whether a cited passage supports the exact answer a tool gives you.",
    "explanation": "A source-based tool can use documents you provide to help answer a question. This is often called grounding: the answer is connected to selected source material. A citation points you towards a passage, which makes checking easier. It does not guarantee that the passage supports the precise claim, or that the source itself is reliable. Read the relevant wording and look for conditions that the answer may have dropped. You can practise the same skill without any software by writing a question, an answer and the supporting passage in three columns. The reasoning matters more than the product name.",
    "example": "A source says that useful spacing intervals depend on the material. An answer that cites it for “always wait exactly 24 hours” has a citation but changes the meaning. Opening the passage exposes the problem.",
    "start": "Use the memory-lab source. Make a question, answer and evidence table, or use an approved source-based tool. Check the questions in the steps, including the one that asks for an exam-mark prediction the source cannot provide.",
    "output": "Keep two checked answers and one question the source cannot answer. Explain the relevant limit instead of filling it with a guess.",
    "check": "Have you read the supporting passage, and does it support the exact wording of the answer?"
  },
  "118": {
    "goal": "Build a small assistant brief and test it before trusting its output.",
    "explanation": "A useful assistant has a clearly defined job and boundaries. In this task, its job is to turn the repair-club brief into a checklist. It should preserve supplied facts, include the required jobs and flag missing or conflicting information. Write those success criteria before you look at a response; otherwise an attractive answer can persuade you to lower the standard. Then introduce one awkward case and observe what breaks. A revision should address that specific failure. You are making a written prototype, meaning a small version that lets you test an idea, not a live system that sends messages or books rooms.",
    "example": "If the brief gives Friday and a later note says Thursday is unconfirmed, silently choosing either day hides the uncertainty. A useful checklist includes “Confirm the event date” and keeps the conflict visible.",
    "start": "Draft a prompt and a sample checklist from the fictional brief. Test each supplied fact and required job, then add the conflicting-date note. Use a written simulation if no approved tool is available and label it clearly.",
    "output": "Keep the prompt, the first checklist, the conflicting-date test and a revised version. Use these as evidence in the later three-slide explanation.",
    "check": "Can you name the failure your revision addresses and show whether the same test now passes?"
  },
  "119": {
    "goal": "Choose a safe way to verify a suspicious recording and the action it requests.",
    "explanation": "A recording raises more than one question. Authenticity asks whether it is what it claims to be: for example, a genuine recording of the named organiser. Truth asks whether the claim in it is accurate. Authority asks whether that person is entitled to request the action. These can come apart. Real footage can be given a false caption, and a realistic synthetic voice can carry a fraudulent payment request. Looking for visual or audio flaws may supply a clue, but it is not a complete verification method. Follow the claim and the requested action back to evidence you can trust.",
    "example": "An old, genuine video of a cancelled event does not establish that today’s event is cancelled. The recording can be authentic while the new caption is misleading. Check the date and original context.",
    "start": "Use only the fictional club message. Make a three-step checking route, beginning with a contact method known before the suspicious message arrived. Write the question you would ask and the evidence needed before recommending any action.",
    "output": "Keep a verification flowchart and a short explanation of why you would pause the payment. Do not contact anyone or make a payment for this task.",
    "check": "Does your checking route rely on information supplied by the suspicious message itself?"
  },
  "120": {
    "goal": "Judge the evidence behind a piece of writing without guessing its author from its style.",
    "explanation": "Accuracy, provenance and authorship are different questions. Accuracy concerns whether a claim is supported. Provenance means where an item came from and what happened to it before you saw it. Authorship concerns who contributed to making it. Formal language or a personal anecdote does not settle any of these on its own. A human can write something false; AI-assisted writing can contain a correct statement. Start with the claim you need to assess and look for the evidence that would answer that question. If authorship matters, drafts and an explanation of the working process are more useful than a stylistic hunch.",
    "example": "“Experts agree” sounds authoritative but leaves you unable to inspect the experts or their evidence. That is a weakness in the argument. It is not evidence that the paragraph was written by AI.",
    "start": "Read the two invented extracts. For each, identify a claim, a missing piece of evidence and a question you would ask. Criticise the reasoning without making an accusation about who wrote it.",
    "output": "Keep two annotated extracts. In the later verification record, use a supplied article or the fictional review already in this lesson and label any missing source honestly.",
    "check": "Have you asked a question that could be answered with evidence, rather than treating tone as proof?"
  },
  "121": {
    "goal": "Trace repeated claims to their sources and distinguish popularity from independent support.",
    "explanation": "Misinformation is false or misleading information; the term does not by itself tell you whether someone intended to deceive. A claim can appear in many places because people copied the same starting source. Five posts therefore need not mean five independent checks. Research can help us understand patterns of spread, but a study has a scope: the platform, period, sample and outcome it examined. Those details tell you how far its findings can reasonably travel. In this lesson, you will map who is quoting whom before deciding whether a claim about a study app has gained any new evidence.",
    "example": "Three websites repeat one company’s press release. That gives you three places to read the company’s claim, not three separate trials. An independent trial might help, but only if it measures the same outcome.",
    "start": "Put the study-app claim at the top of a page. Draw the supplied A–D source routes beneath it. Use arrows to show copying, and mark whether the apparently independent trial actually measures the claim you are checking.",
    "output": "Keep the source map and a short verdict explaining what is supported, what is repeated and what remains untested.",
    "check": "If several posts disappeared, would you lose any independent evidence or only copies of the same claim?"
  },
  "122": {
    "goal": "Follow a claim back to relevant evidence and explain how far that evidence supports it.",
    "explanation": "Fact-checking begins with a precise claim. “This app is brilliant” is a judgement; “this app doubled recall after a week” makes a testable statement about a result. SIFT gives you a sequence for deciding where to look: Stop, Investigate the source, Find better coverage and Trace the claim to its original context. Lateral reading means leaving a page to see what independent sources say about it. You are not counting links. You are checking who produced the evidence, what they measured and whether the result supports this particular claim. A real reference can still be irrelevant or overstated.",
    "example": "A paper measures enjoyment of a lesson, but an advert cites it as proof of improved memory. Finding the paper confirms that it exists. Reading the method shows that it did not test the advertised claim.",
    "start": "Write the exact claim from the fictional chain. Follow each supplied reference and record what it actually measures. If the material needed for a check is missing, identify the missing item and limit your conclusion accordingly.",
    "output": "Keep a claim-to-source record with a verdict and a reason. State what evidence would be needed to strengthen or change it.",
    "check": "Would your verdict still make sense if the source’s impressive name and logo were removed?"
  },
  "123": {
    "goal": "Explain how different feeds can give people different pictures of the same event.",
    "explanation": "A feed is a selection of information, not a complete account of what is happening. Ranking systems may use your behaviour and other signals to predict what you will engage with. People also choose whom to follow and which items to share. Together these choices can make some views easy to encounter and others less visible. A filter bubble describes a concern about that restricted exposure; it does not mean every user is completely isolated. Compare what is present, what is missing and how it was selected. Seeing a wider range of views is useful, but it does not mean every view has equal evidential support.",
    "example": "One feed shows only praise for a school decision; another shows only complaints. Neither selection tells you how common each view is. You would need information about who was asked and which responses were included.",
    "start": "Use the two fictional feeds in the activity. List the impression each creates, then identify one missing voice or fact. Write a question that an independent source could help answer before reaching a judgement.",
    "output": "Keep a side-by-side comparison and a plan for checking one important gap. You do not need to change a real social-media account.",
    "check": "Have you distinguished an absent perspective from evidence that the opposite claim must be true?"
  },
  "124": {
    "goal": "Identify who gains from an AI system, who does the work and who might be excluded.",
    "explanation": "Access to AI is more than having an app. A person may need a suitable device, a reliable connection, money, language support and the knowledge to judge an answer. The digital divide describes differences in that access and ability to benefit. Systems also depend on people and resources that the interface may hide, including those who prepare data and maintain infrastructure. To evaluate a use of AI, follow the benefits and burdens through the whole arrangement. Ask whose interests the system serves and whose experience you have not yet considered. Avoid assuming that one convenient user experience represents everyone’s.",
    "example": "A free study tool is available to a whole class, but it only works reliably on newer phones. The price is the same for everyone; the practical opportunity to use it is not.",
    "start": "Choose one AI use from the lesson. Draw a stakeholder map: users, people doing supporting work, the provider and people who may be excluded. Add one benefit, burden or unanswered question for each.",
    "output": "Keep the map and propose one change that improves access or distributes responsibility more fairly.",
    "check": "Have you included someone whose contribution or difficulty is easy to miss from the user’s screen?"
  },
  "125": {
    "goal": "Calculate group results and explain why an overall score can hide a serious difference.",
    "explanation": "An overall accuracy score tells you the proportion of decisions that were correct across the tested examples. It does not show whether errors were distributed evenly. In the fictional scholarship test, one group has 19 correct decisions out of 20, which is 95%; another has 15 out of 20, or 75%. Combined, that is 34 out of 40, or 85%. All three figures are correct, but they answer different questions. The gap deserves investigation. It does not identify its cause by itself: examples, labels, objectives, thresholds and the setting in which the system is used may all matter.",
    "example": "Imagine two classes each take the same short test. Combining their scores can give a useful school average while hiding that one class needs different support. Separating results changes what you know, without yet explaining why the difference occurred.",
    "start": "Use the fictional group results. Show the two group calculations and the combined calculation. Then write an approval note explaining the concern, the additional evidence you need and the conditions you would require before proceeding.",
    "output": "Keep the calculations and a reasoned decision. Include how an affected person could challenge an incorrect outcome.",
    "check": "Have you investigated unequal outcomes without claiming that the gap alone proves its cause?"
  },
  "126": {
    "goal": "Distinguish a task that AI might affect from a prediction that an entire job will disappear.",
    "explanation": "A job contains many tasks: preparing information, making decisions, dealing with people and taking responsibility for what happens. AI exposure describes how far a task or occupation may be affected by AI capabilities under a study’s assumptions. It is not a count of future redundancies. Whether a workplace adopts a tool also depends on cost, reliability, rules and choices about how work should be organised. Break a job into tasks before discussing its future. Then ask which parts could change, which require accountable judgement and what evidence would show that the new arrangement is actually better.",
    "example": "Drafting a library reminder may be quick to automate. Deciding how to respond sensitively to a pupil’s circumstances is a different task. Saving time on the draft does not remove every responsibility in the job.",
    "start": "Use the fictional library task. Write the current steps, propose where AI might assist and name what a person should check. Compare the two workflows using the same criteria for accuracy, effort and consequences of an error.",
    "output": "Keep a before-and-after workflow and a limited recommendation supported by the comparison.",
    "check": "Are you making a claim about a particular task, or accidentally predicting the future of the whole occupation?"
  },
  "127": {
    "goal": "Decide what information a task needs and question requests for unnecessary personal data.",
    "explanation": "Personal data is information relating to an identifiable person. Some details identify someone directly; combinations of less obvious details can also reveal who they are. A permission gives an app access to something, such as location or contacts, but the fact that it asks does not explain why it needs it. Start with the task you want to complete. Then check what information is necessary, who would receive it and what the current settings and policy say about retention. Keeping information for longer or sharing it more widely changes the consequences. You can investigate these decisions using a fictional permission screen rather than exposing your own data.",
    "example": "A study timer needs to measure a session. A request for your entire contact list needs a separate explanation. “The app asked” is not enough to establish that the access is necessary for studying.",
    "start": "Use the fictional study-app permissions from the opening slide. Make a table headed requested data, possible purpose, needed for this task and question to check. Do not change real settings unless you understand the effect and have permission where needed.",
    "output": "Keep the permission audit and a recommendation about what you would allow, refuse or investigate first.",
    "check": "Can you connect every proposed disclosure to a clear task, recipient and reason?"
  },
  "128": {
    "goal": "Check which rule applies to a particular AI use and whether it is in force.",
    "explanation": "Regulation sets requirements, but a headline about “the AI law” rarely gives enough detail to apply them. You need to know the jurisdiction, the activity, who is responsible and the relevant date. Jurisdiction means the place or legal system whose rules apply. Different obligations can start at different times, and other laws may apply alongside an AI-specific law. Risk categories are a starting point for investigation, not a substitute for reading the relevant provision. Your task is to make a careful, sourced comparison and identify what still needs expert checking, rather than to give legal advice from memory.",
    "example": "A recruitment tool used to rank applicants raises different questions from an optional creative-writing tool. Even within recruitment, the actual function and deployment context matter. Name the use before trying to assign a category.",
    "start": "Use the official sources linked in the lesson. Choose one stated AI use and record the jurisdiction, relevant requirement, application date and source. If you are offline, draft the checking table and mark the current legal position as unverified.",
    "output": "Keep a dated comparison and a short recommendation stating what must be confirmed before use.",
    "check": "Could another reader see exactly which rule and date your conclusion depends on?"
  },
  "129": {
    "goal": "Use an ethical framework to explain a difficult decision and take a competing concern seriously.",
    "explanation": "An ethical framework gives you a way to organise reasons. A consequences approach asks who might benefit or be harmed. A duties or rights approach asks what people must do or must not be subjected to, even when breaking a rule might seem convenient. A fairness approach asks how benefits, risks and opportunities are distributed. These approaches can point in different directions. Using one well means explaining how it applies to the actual case, then considering a serious objection. Naming a framework is only the beginning of the reasoning; it does not automatically settle the decision.",
    "example": "An automated decision might help many people quickly but leave one group with little opportunity to appeal. Efficiency is relevant, and so is the process for correcting an unfair outcome. A good recommendation explains how it handles both concerns.",
    "start": "Read the fictional medical scenario. Identify the decision-maker, the people affected and the possible consequences. Apply two frameworks from the lesson, then explain your recommendation and the strongest objection to it.",
    "output": "Keep a reasoned response with two clearly applied perspectives and a practical responsibility or safeguard.",
    "check": "Have you used the case details to support your judgement rather than just naming ethical theories?"
  },
  "130": {
    "goal": "Examine how a feed might shape someone’s attention without assuming you can diagnose its effects.",
    "explanation": "A recommendation system can influence what someone encounters and how long they stay with it. That makes its design relevant to wellbeing, but effects vary between people and situations. An association between heavy use and distress does not, on its own, tell us what caused what. A parasocial relationship is a feeling of connection with a public figure who does not know the viewer personally; a conversational system can add responsive messages to a different kind of interaction. Look at the design, the pattern of use and the person’s available choices. Use a fictional case if you would rather not discuss your own experience.",
    "example": "A pupil watches unsettling clips late at night. The feed and notifications may be relevant, but the observation alone does not diagnose a mental-health condition or prove a single cause. A practical boundary can still be worth trying.",
    "start": "Use a fictional pupil’s feed or a non-sensitive example you choose. Identify a design feature, a possible effect and an alternative explanation. Propose one realistic boundary and explain how the pupil could review whether it helps.",
    "output": "Keep a short design-and-choice reflection. Personal disclosure is optional; speak to a trusted adult if a real situation concerns you.",
    "check": "Does your explanation distinguish a possible influence from a diagnosis or a proven cause?"
  },
  "131": {
    "goal": "Evaluate the design of an AI companion while treating the user’s experience with care.",
    "explanation": "An AI conversation may feel comforting because it is responsive, available and uses personal language. That experience matters to the person having it. It does not establish that the system has feelings or takes the responsibilities of a friend. Look at choices the product makes: what it remembers, how it invites a return, what it promises and how easily a person can leave. These are design decisions you can examine without using a live companion app. If this topic feels uncomfortable, use the fictional study-app notification case instead. You do not need to share personal experiences to complete the reasoning.",
    "example": "“I missed you; don’t leave me again” can make a user feel responsible for the system’s apparent emotions. A reminder such as “Your saved practice is here when you choose to return” offers a different relationship and a clearer choice.",
    "start": "Choose the companion or study-app case. Identify the feature that may pressure the user, explain the concern and rewrite it to offer a meaningful choice. Say what your change is intended to improve and how you would check it.",
    "output": "Keep the original fictional message, your revised message and an explanation of the design decision.",
    "check": "Have you taken the person’s experience seriously without treating the system’s human-like language as proof of feelings?"
  },
  "132": {
    "goal": "Investigate a possible career by examining its tasks and the evidence behind claims about its future.",
    "explanation": "Career headlines often turn uncertainty into a simple promise or threat. A more useful investigation starts with what people in the role actually do. Separate routine information handling from specialist judgement, practical work, communication and responsibility. Some tasks may be assisted by current tools; that does not tell you exactly how an occupation will develop. Look for dated information from relevant professional bodies, employers or training routes, and notice what each source is qualified to establish. Your aim is to choose a sensible next learning step, rather than predict your whole future from a list of supposedly safe jobs.",
    "example": "An employer asks for applicants who can check AI-generated analysis. That is evidence about this advertised role. It is not proof that every employer has the same requirements or that one skill guarantees employment.",
    "start": "Choose a career you are curious about. List three tasks, consult an appropriate source and identify one way AI might change the work. If you cannot browse, use the lesson’s example and list the evidence you would need to check later.",
    "output": "Keep a career enquiry with source dates, one uncertainty and a specific skill or experience you could develop next.",
    "check": "Does your proposed next step follow from evidence about the role rather than from a dramatic headline?"
  },
  "133": {
    "goal": "Turn what you have learned into practical choices you can explain and review.",
    "explanation": "A personal AI statement is useful when it helps you decide what to do in a real situation. “I will use AI responsibly” sounds positive but gives little guidance when a shortcut is tempting. State the learning or value you want to protect, then turn it into an action you can test. Your rule should fit the task’s instructions and leave room to ask for clarification when you are unsure. You can revise it as your understanding develops. The point is to make deliberate choices and take responsibility for them, rather than produce a perfect slogan about the future.",
    "example": "“I will attempt an explanation before asking for a hint, then answer a new question without help” describes behaviour you can inspect. It also gives you a way to notice when AI is replacing the practice you need.",
    "start": "Choose three situations from the course: learning, checking information and acting on someone else’s behalf. Write a personal rule for each, then test it against an awkward case where following it would require effort.",
    "output": "Keep a short manifesto with concrete examples, one difficult case and a date or event that would prompt you to review it.",
    "check": "Could someone use your words to predict what you would actually do in the example you chose?"
  },
  "134": {
    "goal": "Separate an assistant’s suggestions from its actions and decide where permission must be required.",
    "explanation": "An agentic workflow lets a system select and carry out steps towards a goal, sometimes using tools. The important question is what it can read, change or send. A chat-shaped interface may have those abilities too, so the label alone is not enough. Permissions are the access the system has been granted; an approval checkpoint is a decision a person must make before a particular action. These should match the consequences. Drafting an invitation is different from sending it to recipients. Plan how the system should stop when information is missing, as well as what it should do when everything works.",
    "example": "An event assistant can draft “Meet in Room 4” without contacting anyone. Sending that draft changes the situation for the recipients. Before approving, a person needs to see the exact message, destination and whether the room is confirmed.",
    "start": "Draw the fictional event workflow on paper. Beside each step, state the information read, the action taken and the permission required. Put a visible approval checkpoint before sending and a stopping rule when the venue cannot be confirmed.",
    "output": "Keep a permission map and, in the later failure task, an expected-versus-observed test record. Do not connect the design to real accounts.",
    "check": "If a source page contains a new instruction, does your design treat it as source material rather than permission to act?"
  },
  "135": {
    "goal": "Notice when human-like language creates trust and ask what the system has actually done.",
    "explanation": "We often respond socially to a name, voice or friendly message. That can make an interface easy to use, but warmth is different from evidence of reliability. Anthropomorphism means attributing human qualities to something that is not human. In an AI interface, language such as “I care about you” can encourage assumptions about feelings or responsibility that the product has not established. Separate the appearance, the capability and the action: how does it present itself, what can it do, and what has it actually done? Those questions help you make a deliberate decision about trust and permission.",
    "example": "“I’ve sorted everything” hides the action. “I found a trial but have not booked it” tells you what happened and what still needs your decision. The clearer message gives you something to inspect.",
    "start": "Design the weekend assistant as a paper interface or short sequence of messages. Show how it presents an option, admits missing information and asks for approval before a booking or disclosure.",
    "output": "Keep the messages and an explanation of one design choice that makes the user’s control clearer.",
    "check": "Can the user tell the difference between a suggestion, a confirmed fact and an action already taken?"
  },
  "136": {
    "goal": "Choose whether AI should do a step, support your work or stay out of the task.",
    "explanation": "Automate, augment and avoid describe three possible choices. Automating gives a step to a system within defined limits. Augmenting means using support while you continue to do the part that needs your judgement or practice. Avoiding means choosing not to use AI for this step. Start with the purpose of the task: if you are learning to construct an argument, generating the argument for you may remove the very practice you need. Also consider the instructions, privacy, your ability to check the output and the consequences of an error. Split a large task into steps before making one decision about all of it.",
    "example": "For an essay, you might organise permitted source notes with a tool, develop the argument yourself and avoid uploading personal feedback. The right choice depends on the assignment’s rules, not simply on what the tool can do.",
    "start": "Break the essay task into planning, reasoning, drafting and checking. Choose automate, augment or avoid for each step under the stated rules, and give a reason linked to learning, accuracy or responsibility.",
    "output": "Keep a labelled workflow and a personal rule that you test against one difficult borderline case.",
    "check": "Can you explain which thinking you need to practise yourself, even when a tool could produce an answer?"
  },
  "137": {
    "goal": "Explain an AI use’s environmental costs without inventing a universal per-prompt figure.",
    "explanation": "An AI system relies on physical infrastructure: computers, electricity, cooling and manufactured equipment. Training builds or updates a model; inference runs it to produce an output. Both can use resources, but their costs vary with the system, task and setting. Electricity use and carbon emissions are different measures because the source of electricity matters. Water use depends on factors including cooling and location. A claim about all data centres is not automatically a measurement of AI alone. Ask what was measured, where and when before using a number to support a recommendation.",
    "example": "Generating many high-resolution images and checking one spelling are different tasks. It is reasonable to ask whether either task needs that much computation, but a precise carbon comparison requires measurements under stated conditions.",
    "start": "Choose a task from the lesson and compare an AI approach with a simpler alternative. Describe the benefit, resources you would need to investigate and what evidence would justify a numerical environmental claim.",
    "output": "Keep a proportionate recommendation with one uncertainty and a less demanding option where it is useful.",
    "check": "Have you separated electricity, emissions and water, and stated the scope of any number you use?"
  },
  "138": {
    "goal": "Read a model’s documentation to decide what it is suitable for and what remains unknown.",
    "explanation": "A model card is documentation intended to describe a model’s purpose, evaluation and limitations. It can help you ask better questions, but it is not a certificate that every use is safe. Look for the intended task, the examples used for testing and situations where the model performed poorly or was not assessed. A benchmark is a defined test; its score only means something alongside the task and conditions. “Black box” describes difficulty understanding how a system reaches an output. Documentation can improve transparency without making every internal decision fully explainable. Use it to narrow your claim, not to remove the need for judgement.",
    "example": "A card reports success on short English passages. That is not evidence that the model works equally well on long passages in another language. The missing evaluation is a reason to investigate before relying on it.",
    "start": "Read the fictional card in the activity. Find one intended use, one reported test and one limitation. Match each to your proposed use and write the most important unanswered question before opening the comparison.",
    "output": "Keep your first reading, the evidence you found and a revised suitability judgement.",
    "check": "Can you explain how the reported test relates to your actual task, including a case it does not cover?"
  },
  "139": {
    "goal": "Define a fair test before judging an AI demonstration.",
    "explanation": "A demonstration shows what happened on the examples chosen for it. Evaluation asks how a system performs against a defined standard on a relevant set of examples. Write the success criterion before you test, and include ordinary cases, awkward cases and cases where the system should stop or ask for help. Hold some examples back from development so that you do not merely test what you have already tuned the system to handle. Record failures as carefully as successes. An average can hide a serious problem for a particular group or type of input, so inspect the pattern as well as the total.",
    "example": "A helper gets four familiar questions right but gives an invented answer when information is missing. A test that only counts the four successes misses the very situation where a pupil might most need a reliable boundary.",
    "start": "Use the system described in the test activity. Write expected results for a normal case, an awkward case and a case that should trigger uncertainty. Keep those expectations fixed while you inspect or simulate the results.",
    "output": "Keep a test table showing input, expected behaviour, observed behaviour and your conclusion, including at least one limitation.",
    "check": "Would your test reveal a plausible failure, or is it designed only to reproduce the successful demonstration?"
  },
  "140": {
    "goal": "Improve a system for a specific user and explain how you would test the change.",
    "explanation": "Redesign begins with someone’s difficulty, not with an exciting feature. Identify who is affected, what they are trying to do and where the present design gets in the way. Accessibility concerns whether people can use the system; inclusion also asks whose needs and circumstances shaped it in the first place. A proposed change needs a reason and a test. It may help one group while creating a new trade-off, so compare the before-and-after experience rather than assuming improvement. A prototype can be a paper sketch: the value comes from making your idea concrete enough to question.",
    "example": "Replacing an icon-only control with an icon and a clear text label may help a new user understand it. You would still check the wording, reading order and whether the label remains visible on a small screen.",
    "start": "Use the fictional design problem in the activity. Sketch the existing difficulty, propose one focused change and write a task that a user could attempt to test it. Keep the original problem visible beside your new design.",
    "output": "Keep a before-and-after sketch, a reason for the change and a test plan with a sign that the redesign has not worked.",
    "check": "Does your proposed test measure the user’s difficulty, rather than whether they like the appearance of your design?"
  },
  "220": {
    "goal": "Choose a climate problem and explain what evidence would make it worth investigating.",
    "explanation": "Begin with a school process that could plausibly improve, such as food waste or repair and reuse. A problem describes the difficulty; a solution describes a possible response. Keep them separate long enough to ask who is affected and what you would measure. Use the fictional school route unless authorised evidence is available. You are developing a proposal, so do not claim that a real school has this problem or that a planned tool has already reduced emissions.",
    "example": "“Build a dashboard” names a product. “We do not know whether waste per meal differs between services” names a question that an investigation can answer."
  },
  "221": {
    "goal": "Calculate a useful baseline and explain the limits of the comparison.",
    "explanation": "A baseline describes the starting position against which you will compare a change. Choose a quantity that fits the question and state its unit. Total waste may change because the number of meals changes, so waste per meal can be a more useful comparison. Record how, where and when a measurement was taken. Measured, estimated, assumed and target describe different kinds of number; keep the labels visible. A careful baseline helps you avoid claiming an improvement that the evidence does not show.",
    "example": "If total waste falls while the number of meals falls even faster, waste per meal can rise. Divide by meals before deciding whether the process became less wasteful."
  },
  "222": {
    "goal": "Compare solutions against the problem, including a simpler alternative.",
    "explanation": "A solution earns its place by addressing a defined difficulty. Set criteria before choosing your favourite: likely usefulness, access, cost, effort and what you can test. Include an option that uses less technology, because a clearer routine may solve the problem without a new system. A comparison table makes the judgement visible, but its scores still need reasons. Where evidence is missing, label an assumption and identify the next check instead of presenting a precise-looking score as a fact.",
    "example": "A reminder poster and an automated alert might address the same missed action. Compare whether the intended person notices and acts on each, rather than assuming automation must be better."
  },
  "223": {
    "goal": "Build a small prototype that lets you test one important design question.",
    "explanation": "A prototype is a limited version made to learn from. Choose the question first: can a user understand an alert, enter the right information or identify the next action? Then build only enough to test that question. A paper screen or manually operated demonstration may be sufficient. Label anything simulated and avoid confusing usability evidence with environmental impact. Your prototype should make an assumption visible so that a test can confirm, challenge or refine it.",
    "example": "A paper alert can test whether its wording tells staff what to do. It cannot establish the accuracy of a sensor that has not been built or tested."
  },
  "224": {
    "goal": "Use a test result to justify a revision and check whether the same problem improves.",
    "explanation": "Write the task and expected behaviour before testing. Record what actually happens, including hesitation, a wrong action or a failure. Change one relevant part of the design and repeat the useful case. If you are testing your own prototype, label this as a self-test: you know the design and cannot claim it is independent user evidence. Keep before-and-after records so your conclusion is inspectable. A successful usability test still needs a separate investigation before you claim an environmental saving.",
    "example": "A user overlooks a warning because it appears after the action button. Moving it before the decision is a specific revision; the retest checks whether the warning now informs the action."
  },
  "225": {
    "goal": "Explain the resources, responsibilities and uncertainties behind a proposed pilot.",
    "explanation": "An enterprise case asks what it would take to make the idea work. Purchase price is only one cost: setup, maintenance, subscriptions and people’s time may also matter. A benefit needs a plausible route from the proposed action to the intended result. A pilot is a limited trial with an owner, duration, resources and success measure. State what would make you continue, revise or stop. You are requesting a next step that can teach the school something, not assuming a budget commitment.",
    "example": "A free dashboard may still need someone to check data every day and respond to alerts. Include that work when comparing it with a simpler routine."
  },
  "226": {
    "goal": "Make a pitch that connects a precise claim to evidence and a bounded request.",
    "explanation": "A defensible pitch lets the audience inspect the reasoning. Explain the problem, show a useful baseline, demonstrate what testing changed and make a specific request. Separate a result you observed from a benefit you hope a pilot will produce. Three minutes is enough for a clear argument if you choose the evidence carefully. If working alone, script or record the pitch and pose a sceptical question yourself. Label that as rehearsal rather than pretending a team or panel has reviewed it.",
    "example": "“Two testers found the revised control” is a usability result. “The app will cut annual emissions” needs evidence about the real action and its environmental effect."
  },
  "227": {
    "goal": "Present the project honestly and identify the most useful next investigation.",
    "explanation": "The final presentation should show what your project has established and what remains a proposal. Use your problem statement, prototype and test record to explain a decision you changed. Reflection connects an experience to a next action: what did the evidence teach you, and what would you investigate differently? If no real audience is available, use a recorded or written presentation and a self-generated challenge. Do not turn that practice into a claim of stakeholder approval or a demonstrated climate benefit.",
    "example": "A prototype failed because its alert reached the wrong person. Explaining how you discovered and revised that assumption is more informative than hiding the failure behind the finished design."
  },
  "260": {
    "goal": "Plan a manageable investigation into an AI-and-science question.",
    "explanation": "A project question should be specific enough that you can investigate it with the time and sources available. Start with an area that interests you, then identify the claim, process or decision you want to understand. Decide what you will produce and break the work into research, checking, writing and review. Keep the plan adjustable as evidence changes your understanding. A narrow question with a well-supported answer is more useful than a sweeping topic assembled from disconnected facts.",
    "example": "“AI in medicine” is a topic. “What evidence would support using an AI tool to help read a particular kind of scan?” gives you a clearer investigation and a reason to examine limitations."
  },
  "261": {
    "goal": "Find relevant sources and record what each can actually support.",
    "explanation": "Research begins with a question, not a collection of links. Use search terms from the question, then inspect who produced each source, when and for what purpose. An original study, an official explanation and a company announcement do different jobs. Read beyond the search snippet and record the exact claim you plan to use. A second article that copies the first is not independent corroboration. Keep a source log so your later writing can be traced back to the evidence.",
    "example": "A company announcement may accurately describe what its product claims to do. An independent evaluation is needed for a stronger judgement about how well it performs under relevant conditions."
  },
  "262": {
    "goal": "Narrow the enquiry and connect each planned claim to a useful source.",
    "explanation": "Choosing an area is the start of the investigation. Refine it into a question with terms you can explain and boundaries you can maintain. Identify the mechanism you need to understand, the evidence for the claimed benefit and a limitation or competing interpretation. A plan should reveal gaps before you start writing. If a source does not answer your question, it may still supply background, but do not use it as direct support for a claim it never tests.",
    "example": "A study about performance on one dataset may help explain a method. It cannot automatically establish that the method works equally well in every real-world setting."
  },
  "263": {
    "goal": "Organise an explanation so the reader can follow the question, evidence and conclusion.",
    "explanation": "An outline gives each part of your work a job. Introduce the question, explain necessary terms, develop the relevant evidence and discuss what limits the conclusion. Headings should help a reader follow that argument rather than merely decorate the page. Place a source beside the claim it supports while planning, so a gap is visible before drafting. Think about what the reader needs to understand first; a technical term introduced without explanation can make the rest of the paragraph inaccessible.",
    "example": "Before comparing an AI system’s accuracy, explain the task and what counts as a correct result. Otherwise the reader cannot judge the significance of the percentage."
  },
  "264": {
    "goal": "Use feedback and checks to improve the meaning as well as the presentation of a draft.",
    "explanation": "Editing asks whether the draft does the job you planned. Check the argument, factual support and explanation before polishing individual sentences. A citation should support the precise claim beside it; a quotation should be accurate and clearly distinguished from your own words. If an approved tool gives feedback, decide whether each suggestion is justified rather than accepting it automatically. Keep one before-and-after example with the reason for your change. That makes the improvement visible and preserves responsibility for the final account.",
    "example": "Replacing “AI is always more accurate” with a statement naming the test, comparison and conditions may sound less dramatic, but it gives the reader a claim they can actually assess."
  },
  "265": {
    "goal": "Share a clear account of the investigation and show what the evidence changed.",
    "explanation": "The final product should answer your question at the level the evidence permits. Check that a reader can distinguish the underlying science, the AI’s role, the reported result and the limits. A bibliography helps locate sources; it does not replace explaining how they support the argument. Finish by identifying a question that remains and a sensible next investigation. Use the required format if one has been set. Your reflection should point to a specific decision or revision, rather than simply report that the project was enjoyable.",
    "example": "An early draft treated a demonstration as proof of real-world effectiveness. Showing how a later source changed that conclusion gives evidence of your own judgement."
  }
};
