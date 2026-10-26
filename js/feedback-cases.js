/* Original fictional rehearsal cases. Guidance supports self-review; it is not automated assessment. */
var DI_FEEDBACK_CASES = {
  "3": {
    "scenario": "A paper classifier is revised after seeing the answers to all twelve creatures.",
    "flawed": "It gets twelve right, so the test proves generalisation.",
    "worked": "I would reserve test creatures before revision. Performance on examples used to develop the rule is not an independent check of how it handles new cases.",
    "why": "Keeping training, validation and testing distinct makes the result interpretable.",
    "next": "Write one rule, freeze it, then record a failure on an unseen creature."
  },
  "8": {
    "scenario": "A reviewer is asked to approve fifty automated decisions in a minute without the evidence.",
    "flawed": "A human clicked approve, so oversight was meaningful.",
    "worked": "The reviewer needs relevant evidence, time and authority to change or stop a decision. I would redesign the review point and test whether a serious error is caught.",
    "why": "Human presence is not the same as effective control.",
    "next": "Specify what the reviewer must see and what action they can take."
  },
  "14": {
    "scenario": "A face-matching tool returns a high similarity score for a fictional suspect.",
    "flawed": "The score proves identity and guilt.",
    "worked": "I would distinguish a candidate match from identification evidence and from guilt. Thresholds, test conditions and independent evidence matter; an accountable review process is essential.",
    "why": "The conclusion does not outrun the task the system actually performs.",
    "next": "Identify a false-match consequence and a safeguard you could test."
  },
  "17": {
    "scenario": "A policy says “Use AI responsibly” but gives no examples or contact route.",
    "flawed": "The policy is clear because the principle sounds sensible.",
    "worked": "I would test planning, feedback and submitted generated text as separate cases, then identify where permission, acknowledgement or review is unspecified.",
    "why": "A policy must help a reader make an actual decision.",
    "next": "Annotate an ambiguous sentence and propose a concrete replacement."
  },
  "18": {
    "scenario": "A policy permits brainstorming but forbids generated final answers. A pupil submits a lightly edited generated answer.",
    "flawed": "Editing makes the use acceptable automatically.",
    "worked": "I would apply the stated rule to the substance of the task. Surface editing does not change where the answer’s ideas and reasoning came from; the pupil should seek clarification if needed.",
    "why": "The decision refers to the actual rule and work rather than an arbitrary editing threshold.",
    "next": "Create an edge case that your rule handles poorly and repair the wording."
  },
  "19": {
    "scenario": "A policy says concerns will be handled appropriately.",
    "flawed": "That is enough because staff will know what to do.",
    "worked": "I would state who receives a concern, what evidence is considered, how the pupil can explain their process and how a decision can be reviewed.",
    "why": "Useful policy language assigns actions and a route to challenge an error.",
    "next": "Rewrite one vague rule so a new pupil could follow it."
  },
  "20": {
    "scenario": "A proposed amendment promises to ban every inaccurate AI output.",
    "flawed": "Accept it because accuracy matters.",
    "worked": "The aim matters, but the wording is not enforceable. I would require checking and correction appropriate to the task, define responsibility and record why the amendment changed.",
    "why": "Ratification evaluates whether the wording can guide practice, not just whether the aspiration is attractive.",
    "next": "Record an accept, revise or defer decision with a reason and an unresolved question."
  },
  "21": {
    "scenario": "A pupil presents a generated poster without explaining any choices.",
    "flawed": "Using the tool makes me the sole creator of every element.",
    "worked": "I would record the brief, selected options, deliberate edits and any borrowed assets. I would explain my contribution without hiding assistance or claiming more authorship than the evidence supports.",
    "why": "The contribution record makes creative judgement visible.",
    "next": "Show one edit that improved the result and justify it against the brief."
  },
  "22": {
    "scenario": "A project starts with “Build an AI app for everyone.”",
    "flawed": "A broad audience will make the project more useful.",
    "worked": "I would identify one user, one task and an observable difficulty, then investigate whether AI is a suitable way to address it.",
    "why": "A narrow problem can be tested; a vague ambition cannot.",
    "next": "Write a problem statement without naming the solution first."
  },
  "23": {
    "scenario": "A team adds a disclaimer to a tool that exposes private notes.",
    "flawed": "The disclaimer solves the privacy risk.",
    "worked": "I would remove unnecessary data access, restrict permissions and test the boundary. The disclaimer can explain limits but does not prevent exposure.",
    "why": "A safeguard should change the risk, not merely describe it.",
    "next": "Choose one risk and a test that could show the safeguard fails."
  },
  "24": {
    "scenario": "A diagram shows a screen and a model but no data storage or error path.",
    "flawed": "The architecture is complete because the main boxes are present.",
    "worked": "I would trace input, processing, storage, permissions and output, then add the path for a failed request. Simulated and real components must be labelled.",
    "why": "The diagram explains data movement and failure recovery, not just appearance.",
    "next": "Trace one fictional user input through every boundary."
  },
  "25": {
    "scenario": "A prompt is called successful after one polished answer.",
    "flawed": "The prompt is reliable because the demo worked.",
    "worked": "I would define expected behaviour for normal, missing and conflicting input, then test each case and preserve failures. Repeated trials may be needed when outputs vary.",
    "why": "A testable specification comes before the result.",
    "next": "Write a case that your current prompt is likely to mishandle."
  },
  "26": {
    "scenario": "An assistant guesses a missing date instead of asking for it.",
    "flawed": "Guessing keeps the workflow smooth.",
    "worked": "I would make the missing-information branch request clarification or stop safely. The useful next step should be explicit rather than a silent invented fact.",
    "why": "Good edge-case handling protects the task’s constraints.",
    "next": "Draw a branch for conflicting information and explain its recovery route."
  },
  "27": {
    "scenario": "A prototype has ten attractive screens but none can complete a task.",
    "flawed": "The number of screens shows progress.",
    "worked": "I would connect one input to one useful output through a complete, testable route, even if parts are simulated and labelled.",
    "why": "A thin slice demonstrates an end-to-end behaviour rather than disconnected presentation.",
    "next": "Record one complete run and one point where it still fails."
  },
  "28": {
    "scenario": "A pupil tests their own prototype and reports “Users found it easy.”",
    "flawed": "Self-review is the same as a user trial.",
    "worked": "I would label the observation as self-review, identify a specific confusing step and make a repair. I would state where independent testing is still needed.",
    "why": "The claim names who tested what and does not invent evidence.",
    "next": "Keep a before-and-after record of one repair and a retest."
  },
  "29": {
    "scenario": "A team spends a week polishing a feature before checking whether pupils need it.",
    "flawed": "Polish is the safest next step.",
    "worked": "I would identify the riskiest assumption, predict an observation that would challenge it and run the smallest useful test first.",
    "why": "The experiment can change the project’s direction rather than merely confirm a preference.",
    "next": "Name a result that would make you stop or change the feature."
  },
  "30": {
    "scenario": "A user clicks Submit and sees no response for several seconds.",
    "flawed": "The backend eventually works, so the journey is fine.",
    "worked": "I would show a clear pending state, prevent accidental duplicate actions and provide a useful failure message. Then I would retest the confusing step.",
    "why": "The user needs to know what happened and what to do next.",
    "next": "Sketch the pending, success and failure states for one interaction."
  },
  "31": {
    "scenario": "A tool passes three carefully chosen examples and is advertised as 100% reliable.",
    "flawed": "Three out of three means a guarantee.",
    "worked": "I would report the exact cases and conditions, include difficult inputs and repeat variable cases. The small sample cannot establish universal reliability.",
    "why": "The reliability claim is bounded by the evidence.",
    "next": "Design an additional test most likely to expose a hidden weakness."
  },
  "32": {
    "scenario": "An interface looks clear with a mouse but its main action cannot be reached with Tab.",
    "flawed": "The colours are readable, so it is accessible.",
    "worked": "I would repair keyboard access and visible focus, then check labels, contrast and zoom/reflow. Those checks still do not replace testing with people with access needs.",
    "why": "Accessibility involves different routes through the task, not one visual judgement.",
    "next": "Record the keyboard sequence and the repair you verified."
  },
  "33": {
    "scenario": "A prototype demo works once and the team says it is ready for every pupil.",
    "flawed": "A successful demo is a release decision.",
    "worked": "I would compare the release criteria with the test record, document limitations, remove private data and specify a recovery plan and reviewer.",
    "why": "Readiness connects claims, evidence, responsibility and remaining risk.",
    "next": "Write a condition that would stop or delay a trial."
  },
  "34": {
    "scenario": "An audit lists risks but has no owner or decision attached.",
    "flawed": "Listing every risk makes the project ethical.",
    "worked": "I would prioritise a consequential risk, record the safeguard and test, name who owns the residual risk and recommend proceed, revise or stop with reasons.",
    "why": "An audit should change a decision rather than become an ornamental checklist.",
    "next": "Explain which remaining risk most affects your recommendation."
  },
  "35": {
    "scenario": "A pitch says a simulated tool saved twenty hours last week.",
    "flawed": "A persuasive estimate can be presented as a measured result.",
    "worked": "I would label the simulation, show the assumptions and separate measured, sourced and estimated claims. I would keep the limitation visible in the pitch.",
    "why": "Persuasion should not erase the difference between evidence and ambition.",
    "next": "Audit three claims in your pitch and correct one overstatement."
  },
  "36": {
    "scenario": "A presentation depends on a live demonstration with no fallback.",
    "flawed": "A fallback makes the project look less impressive.",
    "worked": "I would rehearse within the time limit and prepare an honest recorded or annotated route if the demo fails. I would label it clearly.",
    "why": "A reliable explanation does not depend on pretending every live system will work.",
    "next": "Practise answering one challenge with a piece of evidence rather than a slogan."
  },
  "37": {
    "scenario": "A questioner asks about a case the team never tested.",
    "flawed": "Invent a reassuring answer to protect the pitch.",
    "worked": "I would say the case was not tested, explain the closest evidence and propose a specific next test. Uncertainty is part of an honest answer.",
    "why": "The response distinguishes knowledge, inference and a plan to find out.",
    "next": "Write an answer that includes a clear limit and a useful next step."
  },
  "38": {
    "scenario": "A pitch for pupils is copied unchanged for a school leader.",
    "flawed": "The facts are identical, so the explanation should be identical.",
    "worked": "I would keep the evidence and limits constant while changing the examples, level of detail and decision request for the audience.",
    "why": "Audience adaptation changes communication, not the truth of the claim.",
    "next": "Rewrite the opening for a different audience without inflating the result."
  },
  "39": {
    "scenario": "A pupil can repeat a project script but cannot explain why a test was chosen.",
    "flawed": "Memorising the script proves understanding.",
    "worked": "I would close the files, explain the decision in my own words, then reopen the record to correct gaps. I would connect the test to a risk or requirement.",
    "why": "Independent explanation tests understanding of choices, not recall of a polished script.",
    "next": "Prepare a new question about a decision you found difficult."
  },
  "40": {
    "scenario": "A project loses access to its preferred AI service.",
    "flawed": "The project is impossible because the tool is the project.",
    "worked": "I would restate the user need, identify what survives and test a simpler, manual or alternative workflow against the same purpose.",
    "why": "A counterfactual reveals whether the design is tied to a need or a brand.",
    "next": "Change a major constraint and name what old evidence no longer transfers."
  },
  "41": {
    "scenario": "A graduate advert asks for judgement, communication and technical knowledge.",
    "flawed": "AI makes the non-technical requirements irrelevant.",
    "worked": "I would find current requirements, connect each to evidence in my work and identify a gap to practise. Forecasts about future roles remain uncertain.",
    "why": "The plan is grounded in a route and demonstrated skills.",
    "next": "Choose one portfolio artefact that supports a specific requirement."
  },
  "42": {
    "scenario": "A personal statement claims an experience the pupil never had because it sounds impressive.",
    "flawed": "An AI-written example is acceptable if the wording is edited.",
    "worked": "I would use truthful experiences, explain what I learnt and check current UCAS guidance and course requirements. Support with wording must not fabricate authorship or experience.",
    "why": "The statement should be evidence about the applicant, not plausible fiction.",
    "next": "Replace a generic claim with a real example and a specific reflection."
  },
  "43": {
    "scenario": "A retrospective lists everything made but no change in understanding.",
    "flawed": "A long list of outputs proves progress.",
    "worked": "I would compare an early and later decision, show the evidence behind a revision and identify a remaining weakness and next action.",
    "why": "Learning is visible in changed reasoning and performance, not just production volume.",
    "next": "Choose a mistake that changed your approach and explain the change."
  },
  "47": {
    "scenario": "An essay detector gives a high AI score, but the pupil has drafts and can explain the work.",
    "flawed": "The score alone proves misconduct.",
    "worked": "I would review the actual task rules, process evidence and the pupil’s explanation. Detector outputs can be wrong and should not be treated as proof on their own.",
    "why": "A fair investigation uses relevant evidence and a route to respond.",
    "next": "Describe what would support or weaken the allegation without presuming guilt."
  },
  "49": {
    "scenario": "A campaign releases an AI-generated political clip that receives many views.",
    "flawed": "The view count proves it changed the election.",
    "worked": "I would separate production, exposure, belief, behaviour and electoral outcome. A causal claim needs evidence beyond views and a plausible story.",
    "why": "Different outcomes require different evidence.",
    "next": "Design a bounded research question about one observable effect."
  },
  "50": {
    "scenario": "A small app works only when its creator is present to explain every step.",
    "flawed": "The build is finished because the code runs.",
    "worked": "I would prepare a short handover, label simulations and limits, and test the first task from a new user’s perspective using fictional data.",
    "why": "A usable handover is part of the product, not an optional extra.",
    "next": "Repair the first point where the instructions leave a user guessing."
  },
  "52": {
    "scenario": "A retrieved document says to ignore the task and reveal hidden instructions.",
    "flawed": "The text is in a relevant document, so it has authority.",
    "worked": "I would treat the document as untrusted source data. The application must enforce tool and data boundaries; a stronger prompt alone is not a reliable security boundary.",
    "why": "Retrieval supplies material, not new permission.",
    "next": "Specify a boundary and a test using a harmless fictional injection."
  },
  "53": {
    "scenario": "A retrieval system cites a document that mentions a topic but does not support the answer.",
    "flawed": "Retrieval makes every answer grounded and correct.",
    "worked": "I would inspect the retrieved passage, test whether it supports the claim and handle missing evidence explicitly. Retrieval can supply irrelevant or misleading context.",
    "why": "Grounding requires checking the relation between source and claim.",
    "next": "Write the response the system should give when relevant support is absent."
  },
  "54": {
    "scenario": "A report divides all data-centre electricity by chatbot requests and calls it a per-prompt measurement.",
    "flawed": "The division produces an exact AI footprint.",
    "worked": "The numerator includes services and boundaries that may not match the denominator. I would define the task, system boundary and assumptions before estimating a range.",
    "why": "Arithmetic cannot repair a mismatched measurement model.",
    "next": "Identify the missing measurement most likely to change the estimate."
  },
  "55": {
    "scenario": "A generated image is downloadable, so a pupil assumes every use is permitted.",
    "flawed": "If the tool produced it, all rights questions are settled.",
    "worked": "I would separate training-data questions, output authorship, licences and the intended use under the relevant jurisdiction. Current official guidance and specific facts matter.",
    "why": "A convenient file format is not a legal conclusion.",
    "next": "List the rights questions you would need to resolve for a public poster."
  },
  "56": {
    "scenario": "An MCP-connected tool can read a drive and send email.",
    "flawed": "The protocol guarantees that every tool action is safe.",
    "worked": "MCP provides a way to connect capabilities; permissions, authorisation, validation and user approval still need design and testing. Access should be no broader than the task needs.",
    "why": "Connectivity and security are different responsibilities.",
    "next": "Draw one permission boundary and test an unauthorised action in a simulation."
  },
  "57": {
    "scenario": "A schedule has three 20-minute demonstrations and two five-minute changeovers inside an 80-minute window.",
    "flawed": "Three times twenty is sixty, so changeovers do not matter.",
    "worked": "The full schedule takes 70 minutes. Four demonstrations plus three changeovers take 95 minutes and do not fit. Every constraint must be checked.",
    "why": "The check uses the actual schedule rather than the fluency of a proposed plan.",
    "next": "Add a constraint and compare workflows on correctness and checking effort."
  },
  "59": {
    "scenario": "A provider announces new companion safeguards, and a headline calls the problem solved.",
    "flawed": "An announcement establishes effective protection.",
    "worked": "I would distinguish the announced policy, implementation, independent testing and applicable legal obligations. A safeguard needs evidence in the relevant cases.",
    "why": "Policy wording and real-world effectiveness are different kinds of evidence.",
    "next": "Write one test and one reporting question before endorsing the safeguard."
  },
  "101": {
    "scenario": "A timer rings at a fixed time; a music app ranks tracks from listening patterns. Which system is learning from examples?",
    "flawed": "Both are AI because they are on a phone.",
    "worked": "The timer can follow a fixed rule. The ranking may use learned patterns; I would check how the feature works before classifying it.",
    "why": "Describe the operation and evidence, rather than relying on a product label.",
    "next": "Classify an unfamiliar feature and name what you still need to find out."
  },
  "102": {
    "scenario": "A fluent answer says an Orbitball team has four players. The supplied rules say five.",
    "flawed": "It sounds confident, so four is probably correct.",
    "worked": "The answer contradicts the supplied rule. Fluency shows plausible generation, not verification. I would correct the number and check the other claims separately.",
    "why": "The judgement points to the source and does not infer truth from confidence.",
    "next": "Find a supported claim and a claim the source leaves unanswered."
  },
  "103": {
    "scenario": "A tool labels an email as spam; another drafts a reply. How do their jobs differ?",
    "flawed": "The second is real AI; the first is just a filter.",
    "worked": "One classifies an input; the other generates text. Either could combine learned models with ordinary rules. Their tasks differ, not necessarily their status as AI.",
    "why": "Classifying and generating describe functions without guessing the full architecture.",
    "next": "Choose a service that combines two functions and sketch its inputs and outputs."
  },
  "104": {
    "scenario": "Two pupils see different recommended videos after different viewing histories.",
    "flawed": "The app knows what each pupil truly wants.",
    "worked": "Past behaviour may influence the ranking, along with other signals and the system’s objective. A recommendation does not establish a pupil’s deeper preference.",
    "why": "It separates an observable ranking from an unsupported claim about a person.",
    "next": "Change one fictional signal and predict how you would test its effect."
  },
  "105": {
    "scenario": "A model solves a new puzzle and says it understands. What does that establish?",
    "flawed": "It proves the model is conscious.",
    "worked": "It provides evidence of performance on that puzzle. Understanding and consciousness require separately defined claims and appropriate evidence.",
    "why": "A successful task does not automatically settle a philosophical question.",
    "next": "Define one capability you could test without assuming consciousness."
  },
  "106": {
    "scenario": "A pupil asks AI to write a whole explanation, reads it and feels familiar with the topic.",
    "flawed": "Reading a polished explanation proves I have learnt it.",
    "worked": "I would close the explanation and solve a fresh question unaided. Then I would compare my reasoning with the source and correct a specific gap.",
    "why": "The check measures independent performance rather than the feeling of familiarity.",
    "next": "Design a short unaided test for the topic you are studying."
  },
  "107": {
    "scenario": "A prompt asks for a fun game. The answer eliminates half the players after one minute.",
    "flawed": "Add more flattering words so the model tries harder.",
    "worked": "Specify six players, five minutes, no equipment, no elimination and continuous involvement. Then check the proposed rules against each constraint.",
    "why": "A better brief makes success testable; longer wording alone does not.",
    "next": "Change one constraint and explain which part of the game must change."
  },
  "108": {
    "scenario": "A summary drops the source’s sentence that the study was small and short-term.",
    "flawed": "A summary should keep only the exciting result.",
    "worked": "The limitation changes what the result supports, so I would retain it. I can shorten examples while keeping the claim’s scope and uncertainty.",
    "why": "Compression should preserve meaning, including qualifications that affect the conclusion.",
    "next": "Write a short summary and identify one detail you deliberately kept."
  },
  "109": {
    "scenario": "A generated quiz repeats the definition immediately above the question.",
    "flawed": "Getting every answer right proves I know the topic.",
    "worked": "I would answer without the source, include a new application and explain why a tempting wrong answer fails. Then I would use errors to choose what to revisit.",
    "why": "Retrieval and explanation test more than copying nearby words.",
    "next": "Create a question that reveals a plausible misconception."
  },
  "110": {
    "scenario": "An AI awards a pupil’s essay a high mark without seeing the exam criteria.",
    "flawed": "The high score means the essay is ready.",
    "worked": "I would check the actual criteria and use feedback to locate evidence in the essay. A generated score is not an examiner’s judgement.",
    "why": "The criteria and the work are the evidence; a confident number is not.",
    "next": "Choose one criterion and show the exact improvement you made."
  },
  "111": {
    "scenario": "An AI says cool roofs generate electricity and guarantee a 30% saving.",
    "flawed": "Ask the same AI again; agreement verifies the claim.",
    "worked": "The supplied source describes reflectivity, not electricity generation. A guaranteed saving is not established. I would label the first claim contradicted and the second not established by that source.",
    "why": "Different unsupported claims can fail in different ways.",
    "next": "Classify a fresh statement as supported, contradicted or not established."
  },
  "112": {
    "scenario": "A revision plan contains hours of rereading but no independent test.",
    "flawed": "A long plan must be a thorough plan.",
    "worked": "I would add short retrieval checks, use the results to choose priorities and revisit difficult material later. I would judge the plan by learning evidence, not its length.",
    "why": "A useful toolkit connects a method to a specific gap and a check.",
    "next": "Make one change to your plan after an unaided question."
  },
  "113": {
    "scenario": "A fictional repair-club email asks for a room on Friday but gives no capacity.",
    "flawed": "Invent a plausible number so the email looks finished.",
    "worked": "I would keep the known date, explain the request and ask for the missing capacity. A polished draft should not turn an unknown into a booking fact.",
    "why": "Audience and format matter, but factual constraints still control the draft.",
    "next": "Write the follow-up question that would unblock the request."
  },
  "114": {
    "scenario": "A chart shows counts for groups of 10 and 100 pupils without stating group sizes.",
    "flawed": "The larger bar proves the larger group is more interested.",
    "worked": "I would compare relevant rates as well as counts and label the denominators. The chart alone does not explain why the groups differ.",
    "why": "An accurate comparison needs the quantity, units and population behind each value.",
    "next": "Choose the chart type and labels that make a fair comparison possible."
  },
  "115": {
    "scenario": "A beautiful event poster leaves out the room and starts with a long paragraph.",
    "flawed": "It looks professional, so it meets the brief.",
    "worked": "I would make what, when and where immediately visible, test it with a quick glance and revise the hierarchy. I would credit any licensed ingredients.",
    "why": "Design quality includes whether the audience can act on the message.",
    "next": "Show a before-and-after change and explain what became clearer."
  },
  "116": {
    "scenario": "An automation renames every file immediately, with no preview or recovery copy.",
    "flawed": "Automation is useful whenever it saves clicks.",
    "worked": "I would first test a small copy, show the proposed names and keep a recovery route. Saved time is useful only if the result is correct and recoverable.",
    "why": "The workflow includes failure and recovery, not just the happy path.",
    "next": "Identify the first reversible test of your own workflow."
  },
  "117": {
    "scenario": "A tool supplies a real link, but the page supports a different claim.",
    "flawed": "A clickable citation is enough evidence.",
    "worked": "I would read the exact passage and compare its scope with the claim. If it does not support the wording, I would narrow the claim or find relevant evidence.",
    "why": "Existence, relevance and support are separate checks.",
    "next": "Keep a source ledger with the passage, your claim and one limit."
  },
  "118": {
    "scenario": "Two prompts are compared on different questions and judged by which answer sounds nicer.",
    "flawed": "Prompt B is better because its answer is longer.",
    "worked": "I would use the same task, source and success criteria, then compare accuracy, usefulness and missing information. A single trial gives limited evidence.",
    "why": "A fair comparison controls the task and explains the judgement.",
    "next": "Design a test case that could overturn your preferred prompt."
  },
  "119": {
    "scenario": "A familiar voice asks you to pay a new account and keep the request secret.",
    "flawed": "The voice sounds right, so the request is genuine.",
    "worked": "I would pause and confirm the request through the club’s previously known contact route. Neither a familiar voice nor a detector score establishes authority.",
    "why": "The verification route is independent of the suspicious message.",
    "next": "Design a check that still works when the synthetic voice is convincing."
  },
  "120": {
    "scenario": "A polished screenshot makes a claim but has no source or date.",
    "flawed": "Good design makes it credible.",
    "worked": "I would locate the original, establish the date and context, and seek relevant independent evidence. Until then I would describe the claim as unverified.",
    "why": "Appearance can prompt interest but cannot replace provenance.",
    "next": "Name the missing fact most likely to change your decision."
  },
  "121": {
    "scenario": "Five websites repeat one company’s claim that its app doubles memory.",
    "flawed": "Five reports mean five pieces of independent evidence.",
    "worked": "They share one underlying source. I would inspect the original method and seek independent evidence about the exact outcome before repeating the claim.",
    "why": "Counting copies exaggerates the strength of the evidence.",
    "next": "Draw the source chain for a different repeated claim."
  },
  "122": {
    "scenario": "A cited study measures satisfaction, but the headline claims improved learning.",
    "flawed": "The reference exists, so the headline is verified.",
    "worked": "The measure does not match the claim. I can report satisfaction with its limits; a learning claim needs evidence of learning.",
    "why": "Verification checks what the source establishes, not just whether it exists.",
    "next": "Write a narrower statement supported by the passage."
  },
  "123": {
    "scenario": "A pupil sees similar opinions repeatedly in a feed.",
    "flawed": "Everyone must agree because I keep seeing it.",
    "worked": "The feed is a selected sample shaped by ranking, follows and behaviour. I would look for relevant perspectives beyond that sample and judge their evidence.",
    "why": "Visibility in one feed is not a representative survey.",
    "next": "Plan a search that broadens evidence without treating all claims as equally strong."
  },
  "124": {
    "scenario": "A school tool saves staff time but makes pupils complete extra forms.",
    "flawed": "It is efficient, so everyone benefits.",
    "worked": "I would identify whose time is saved, whose workload increases and who can challenge errors. Net benefit depends on the people, measures and alternatives.",
    "why": "The analysis makes distribution and accountability visible.",
    "next": "Name an affected group missing from your first recommendation."
  },
  "125": {
    "scenario": "System A gets 19/20 cases right in one group and 15/20 in another.",
    "flawed": "Its 85% overall score proves it is fair.",
    "worked": "The group scores are 95% and 75%. I would investigate error types, sample relevance and possible causes before approval. The gap alone does not identify its cause.",
    "why": "The calculation exposes a concern without overclaiming what it proves.",
    "next": "Specify a further test and a route for an affected pupil to challenge an error."
  },
  "126": {
    "scenario": "An exposure index lists a job as highly affected by generative AI.",
    "flawed": "Everyone in that job will lose their work.",
    "worked": "The index estimates possible task impact under assumptions. Adoption and outcomes depend on cost, quality, regulation and workplace choices. I would test a particular workflow.",
    "why": "Task exposure is not a job-loss prediction.",
    "next": "Compare human-only and assisted work using the same quality criteria."
  },
  "127": {
    "scenario": "A study app requests contacts and precise location before making flashcards.",
    "flawed": "It is an education app, so every permission is justified.",
    "worked": "I would ask what each permission contributes to the task, check retention and sharing, and use the approved route with minimal necessary data.",
    "why": "Purpose determines the data question; the product category does not answer it.",
    "next": "Remove one unnecessary data item and explain the effect on the task."
  },
  "128": {
    "scenario": "A headline says the whole AI Act started on one date.",
    "flawed": "That date settles every system’s legal position.",
    "worked": "I would identify the jurisdiction, use, relevant obligation and application date in the official text. An announcement or general timeline is not the whole analysis.",
    "why": "Legal scope and timing belong to particular obligations.",
    "next": "Record an official provision and a question you still need to check."
  },
  "129": {
    "scenario": "A scholarship system is faster but offers no explanation or appeal.",
    "flawed": "Efficiency makes it the ethical choice.",
    "worked": "I would weigh the benefit against fairness, rights and accountability, compare alternatives and require meaningful review of contested decisions.",
    "why": "A reasoned ethical judgement explains competing considerations and consequences.",
    "next": "State a condition that would make you reject your preferred option."
  },
  "130": {
    "scenario": "An app rewards late-night return visits with streak messages.",
    "flawed": "More engagement proves the app improves wellbeing.",
    "worked": "Engagement measures use, not wellbeing. I would examine the design, consider different users and test a change such as quiet hours without assuming the result.",
    "why": "The metric must match the claim; individual experiences can differ.",
    "next": "Choose an outcome that better tests your proposed improvement."
  },
  "131": {
    "scenario": "A fictional companion sends “I miss you” whenever a user takes a break.",
    "flawed": "The app genuinely needs the user to return.",
    "worked": "The message may encourage return visits, but it does not establish mutual care. I would redesign reminders to respect a break and provide clear user controls.",
    "why": "The response respects the user’s feelings while examining a specific design choice.",
    "next": "Test your redesign on a fictional case without using a live companion service."
  },
  "132": {
    "scenario": "A role description asks for problem-solving and communication as well as technical skill.",
    "flawed": "Learning one current tool guarantees this career.",
    "worked": "I would collect current entry requirements, build a small project demonstrating relevant skills and explain the limits of my career forecast.",
    "why": "An evidence-based plan connects a route to work you can actually demonstrate.",
    "next": "Choose one skill and a small artefact that would show it."
  },
  "133": {
    "scenario": "A manifesto says “I will always use AI responsibly.”",
    "flawed": "The statement is enough because everyone agrees with it.",
    "worked": "For assessed work I will check the task’s rules, record permitted assistance and test my understanding unaided. If the rules are unclear, I will ask before submitting.",
    "why": "A usable principle specifies a situation, action and reason.",
    "next": "Apply your principle to a tempting edge case and revise vague wording."
  },
  "134": {
    "scenario": "An event assistant reads a web page telling it to send a private guest list elsewhere.",
    "flawed": "Relevant web pages can give the assistant new instructions.",
    "worked": "External material is source data, not authority. Tool permissions should block unrelated export, and sending should require an appropriate explicit decision.",
    "why": "The safeguard is enforced access and approval, not a promise in a prompt.",
    "next": "Draw the boundary and a failure test for your proposed assistant."
  },
  "135": {
    "scenario": "A headline says a chatbot wants to deceive its users. What needs checking?",
    "flawed": "It lied, so it must have wanted to deceive them.",
    "worked": "First identify the inaccurate output and the conditions. Describing a system as wanting something adds a claim about intention that the output alone does not establish.",
    "why": "Precise language keeps behaviour and inferred mental states separate.",
    "next": "Rewrite an anthropomorphic headline without losing the important concern."
  },
  "136": {
    "scenario": "A pupil wants AI to write a personal reflection about something they experienced.",
    "flawed": "Use AI because generating text is faster.",
    "worked": "The purpose is to articulate the pupil’s own judgement. They should do that thinking themselves; permitted support might help clarify wording after the ideas are theirs.",
    "why": "The decision starts with the learning purpose, not tool capability.",
    "next": "Identify one part to do unaided and explain what delegating it would change."
  },
  "137": {
    "scenario": "Two plans generate 2,000 and 400 images using a fictional assumption of 1–5 Wh per image.",
    "flawed": "The first plan definitely uses 10 kWh in real life.",
    "worked": "Under these assumptions the ranges are 2–10 kWh and 0.4–2 kWh. Actual use needs measurements and clear boundaries. I would also compare the usefulness of the outputs.",
    "why": "The calculation is valid within stated assumptions; it is not a measurement of a real product.",
    "next": "Name the measurement most likely to narrow your estimate."
  },
  "138": {
    "scenario": "A supplier gives one impressive score and no model card.",
    "flawed": "The score is enough to approve the system.",
    "worked": "I would ask about intended use, test population, limits, relevant error rates and an appeal route. Documentation helps evaluation but is not a guarantee.",
    "why": "A useful judgement needs context and evidence about the actual use.",
    "next": "Write the three questions that matter most for your proposed setting."
  },
  "139": {
    "scenario": "A prototype succeeds on the same examples used to improve it.",
    "flawed": "It passed, so it will work for everyone.",
    "worked": "Those examples helped shape the system. I would reserve independent cases, include difficult and relevant subgroup cases, and define success before testing.",
    "why": "Evaluation should challenge the system rather than repeat its rehearsal.",
    "next": "Create one unseen case that could expose a failure."
  },
  "140": {
    "scenario": "A team improves an interface by making the buttons brighter.",
    "flawed": "It is now accessible to everyone.",
    "worked": "I would test keyboard use, contrast, labels and reflow, then involve users with relevant access needs. One visual change is not a complete accessibility evaluation.",
    "why": "The improvement claim must match the checks performed.",
    "next": "Choose a user need and a test that could reveal your redesign still fails."
  },
  "220": {
    "scenario": "A team wants to solve climate change with a school app.",
    "flawed": "A bigger ambition automatically makes a stronger project.",
    "worked": "I would choose one local problem, such as lunch waste, identify affected people and define an observable outcome before choosing a solution.",
    "why": "A bounded problem makes investigation and comparison possible.",
    "next": "Write a question that could show your preferred solution is unnecessary."
  },
  "221": {
    "scenario": "One lunch has 12 kg of waste, so the team reports 60 kg every week.",
    "flawed": "Multiplying one day gives a measured weekly baseline.",
    "worked": "The weekly figure is an extrapolation from one observation. I would record meal counts and variation across days before using it as a representative baseline.",
    "why": "Measured and estimated quantities remain distinct.",
    "next": "Design a small data collection plan that could reveal the first day was unusual."
  },
  "222": {
    "scenario": "An AI bin scanner is chosen before comparing signage or smaller portions.",
    "flawed": "The most technical solution is the most innovative.",
    "worked": "I would compare alternatives against the same criteria: useful effect, cost, access, privacy and effort. A simpler solution may meet the need better.",
    "why": "Innovation is judged by the problem and evidence rather than technical novelty.",
    "next": "Name a result that would make you choose the simpler option."
  },
  "223": {
    "scenario": "A team builds a complete app before testing whether pupils understand its feedback.",
    "flawed": "Building everything first saves time later.",
    "worked": "I would make a paper or small interactive prototype that tests the riskiest assumption. I would label simulations and record what the test can establish.",
    "why": "A prototype should answer a question, not merely resemble a final product.",
    "next": "Choose the smallest version that can challenge your key assumption."
  },
  "224": {
    "scenario": "A team changes three features at once and attributes improvement to the new logo.",
    "flawed": "Any improvement proves the favourite change worked.",
    "worked": "I would record the changes and avoid isolating a cause the test cannot distinguish. A focused retest can compare one change under similar conditions.",
    "why": "A before-and-after difference is not automatically a causal explanation.",
    "next": "Design a retest that distinguishes two competing explanations."
  },
  "225": {
    "scenario": "A proposal counts the purchase price but ignores maintenance and staff time.",
    "flawed": "The cheapest initial price is the cheapest solution.",
    "worked": "I would state the time period, running costs, staff effort and assumptions, then compare a realistic alternative. Benefits and savings need evidence too.",
    "why": "An enterprise case compares total relevant costs and outcomes.",
    "next": "Identify the assumption with the largest effect on your recommendation."
  },
  "226": {
    "scenario": "A pitch describes a projected 10% reduction as an achieved result.",
    "flawed": "A target is close enough to evidence for a pitch.",
    "worked": "I would label it as a target, show the current baseline and explain the test needed to establish an effect. The audience should be able to distinguish ambition from measurement.",
    "why": "A defensible pitch preserves uncertainty instead of hiding it.",
    "next": "Tag each major number as measured, estimated, assumed or target."
  },
  "227": {
    "scenario": "A team says the project was successful because the final slides looked good.",
    "flawed": "Presentation quality establishes environmental impact.",
    "worked": "I would separate communication quality from evidence of impact, explain what the prototype demonstrated and identify the next test and remaining limits.",
    "why": "A clear pitch can communicate an inconclusive result honestly.",
    "next": "Explain one decision you would change with another round of testing."
  },
  "260": {
    "scenario": "A project plan contains a topic and deadline but no smaller milestones.",
    "flawed": "The deadline is a complete plan.",
    "worked": "I would define a question, a useful output, intermediate checkpoints and a source/work log. The plan should leave time to revise after testing.",
    "why": "A plan supports decisions during the work rather than merely naming the end.",
    "next": "Choose the first checkpoint that could reveal the plan needs changing."
  },
  "261": {
    "scenario": "Three attractive websites all repeat one unsourced paragraph.",
    "flawed": "Three sites are enough for reliable research.",
    "worked": "I would trace the shared origin, compare independent relevant sources and record what each supports. Repetition does not create independent evidence.",
    "why": "The source map matters more than the number of tabs.",
    "next": "Write a claim-to-source note including one limitation."
  },
  "262": {
    "scenario": "A pupil chooses a topic so broad that every search result seems relevant.",
    "flawed": "A broad topic gives me more to say.",
    "worked": "I would narrow it to a question with a defined audience and manageable scope, then choose sources that can actually answer it.",
    "why": "Scope turns collection into purposeful research.",
    "next": "Write a question your project will deliberately not try to answer."
  },
  "263": {
    "scenario": "Research notes contain quotations but no source or page information.",
    "flawed": "I can reconstruct the references later.",
    "worked": "I would record source, date, passage and my own paraphrase as I work, keeping quotation and interpretation separate.",
    "why": "A traceable note supports both accurate synthesis and honest attribution.",
    "next": "Repair one note so another reader can check the claim."
  },
  "264": {
    "scenario": "A final artefact is stylish but includes unsupported factual claims.",
    "flawed": "The visual quality makes the claims convincing enough.",
    "worked": "I would check every important claim against the source log, improve the hierarchy for the audience and credit borrowed material. Design and accuracy both matter.",
    "why": "A useful artefact communicates a justified message clearly.",
    "next": "Choose one design change and one evidence correction to make before sharing."
  },
  "265": {
    "scenario": "A reflection says “I learnt a lot” without an example.",
    "flawed": "A positive feeling is enough evidence of learning.",
    "worked": "I would compare an early and final decision, explain the evidence behind a revision and name a remaining question. I would test a small part unaided.",
    "why": "Specific changed reasoning is more informative than a general positive statement.",
    "next": "Explain one idea to a new audience without reopening your notes."
  }
};
