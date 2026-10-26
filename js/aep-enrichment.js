/* Original AEP diagrams and reviewed lab framing, 26 October 2026.
   Keep injected slide counts/order stable for existing saved notes. */
(function () {
  'use strict';
  var diagrams = {
    1:[['Input','Prediction or rule?','User decision'],'Map the feature, not just the product name. Mark what you cannot establish.'],
    2:[['Model','Retrieved evidence','Checked claim'],'Retrieval supplies context. It does not automatically verify the answer.'],
    3:[['Train · 6 examples','Validate · 2','Test · 4'],'The paper exercise separates rule-making from the final check. Real splits depend on the task.'],
    4:[['Decision','Useful explanation','Route to challenge'],'An explanation matters when it helps someone inspect or challenge the decision.'],
    5:[['Group A · 19/20','Group B · 15/20','Overall · 34/40'],'Fictional results: 95%, 75% and 85%. The overall score hides a gap; the figures alone do not establish its cause.'],
    6:[['Purpose','Necessary data','Access and deletion'],'Start with the purpose. Ask who receives the data and how long it is kept.'],
    7:[['Consequences','Duties and rights','Accountable choice'],'Different ethical lenses reveal different reasons. Explain the trade-off.'],
    8:[['Inspect','Intervene','Appeal'],'A human needs relevant evidence, time and authority for oversight to be meaningful.'],
    9:[['Specify','Compare','Revise'],'The event assistant must preserve supplied facts and identify a missing price.'],
    10:[['Human contribution','Borrowed material','Jurisdiction'],'Authorship, licences and applicable law are separate questions.'],
    11:[['Task exposure','Adoption choices','Observed job change'],'Exposure is not a count of jobs lost. Explain the assumptions between each step.'],
    12:[['First draft','Competing feedback','Reasoned revision'],'A useful revision improves the purpose of the work, not just its surface.'],
    13:[['Original source','Date and context','Corroboration'],'A convincing appearance is not proof of authenticity or truth.'],
    14:[['Task and threshold','Error consequences','Human review'],'A match score needs context. It is not a verdict about a person.'],
    15:[['2,000 images','1–5 Wh each','2–10 kWh'],'Fictional assumptions for the worked estimate. Divide Wh by 1,000 to obtain kWh.'],
    16:[['Jurisdiction and use','Relevant obligation','Application date'],'Check the current official provision. An announcement is not necessarily an applicable duty.'],
    17:[['Explicit rule','Hidden assumption','Missing decision'],'Annotate the fictional policy before rewriting it.'],
    18:[['Permitted','Prohibited','Needs clarification'],'Sort the six cards under your stated rule. The task’s actual rules take precedence.'],
    19:[['Who?','Does what?','What happens next?'],'Plain policy language gives a reader an action and a route to resolve uncertainty.'],
    20:[['Proposed amendment','Evidence and reasons','Decision log'],'Accept, reject or defer with a reason. Preserve unresolved questions.'],
    21:[['Human brief','Selection and edit','Contribution record'],'The portfolio should show where your judgement changed the outcome.'],
    22:[['Broad topic','Specific task','Observable need'],'Narrow the problem without assuming AI is the answer.'],
    23:[['Risk','Tested safeguard','Remaining risk'],'A safeguard is a claim until it has been tested in the relevant case.'],
    24:[['Input → interface','Processing → service','Output → recovery'],'Draw storage and permission boundaries around the route. Label real and simulated components.'],
    25:[['Normal input','Missing fact','Contradiction'],'Write expected behaviour before testing. Keep the failures.'],
    26:[['Validate','Clarify or stop','Recover'],'Every awkward branch should lead to a useful action, not a silent guess.'],
    27:[['One input','One complete route','One test record'],'A thin slice connects the essentials. Ten disconnected screens do not.'],
    28:[['Observation','Consequence','Revision and retest'],'Label self-review honestly and identify where independent testing is still needed.'],
    29:[['Assumption','Prediction','Observed result'],'Choose a small experiment that could change the project’s direction.'],
    30:[['User intention','Visible feedback','Useful next action'],'Inspect the first confusing step, then preserve the before-and-after repair.'],
    31:[['Expected','Observed','Repeat and compare'],'Report the cases tested and conditions; a small sample is not a reliability guarantee.'],
    32:[['Keyboard','Zoom and reflow','Clear feedback'],'Three useful checks, not a complete accessibility audit.'],
    33:[['Capability','Evidence and limits','Recovery plan'],'A release candidate is a proposal for review. Its claims must match the tests.'],
    34:[['Affected person','Safeguard and test','Release decision'],'State the remaining risk, its owner and a condition that would stop a trial.'],
    35:[['Measured','Sourced','Assumed'],'Tag claims before pitching. A simulation must remain labelled as a simulation.'],
    36:[['Problem','Evidence','Request'],'Rehearse the argument within the time. Keep a fallback for a failed demo.'],
    37:[['Present','Invite a challenge','State a limit'],'A strong response can include an unanswered question and a plan to investigate it.'],
    38:[['New audience','Changed emphasis','Same evidence'],'Translate the explanation without inflating the claim.'],
    39:[['Close the files','Explain your choice','Reopen and correct'],'An explicit correction is evidence of learning, not something to hide.'],
    40:[['Changed constraint','Surviving purpose','New test'],'Old evidence may not transfer to a redesigned route.'],
    41:[['Task','Unaided attempt','Checked assistance'],'Evaluate what the person can explain and verify, not just the polish of the output.'],
    42:[['Why this course?','How have studies prepared you?','What else has helped?'],'UCAS, 2026 entry onwards: three questions; 4,000 characters overall including spaces; at least 350 per answer.'],
    43:[['Early view','Evidence of change','Next action'],'Build the retrospective around artefacts, not a claim that everything improved.'],
    44:[['Trigger','Action and reason','Review condition'],'Test your commitments against an inconvenient case.'],
    45:[['Supported','Uncertain','Contested'],'Explain the strength and limits of the evidence. Confidence alone is not support.'],
    46:[['Precise claim','Relevant passage','Bounded verdict'],'A real source can still fail to support the particular claim.'],
    47:[['Stop','Trace the evidence','Respond fairly'],'Polished style and a detector score do not establish authorship.'],
    48:[['Attempt','Use support','Try a new question'],'The unaided transfer attempt helps show what has been learned.'],
    49:[['Official authority','Verified correction','Proportionate response'],'Use fictional election material. Preserve uncertainty without amplifying an unsupported claim.'],
    50:[['Define and build','Test three cases','Reflect and rescope'],'Keep the smallest complete experiment, including what failed.'],
    51:[['Text','Tokenizer-specific chunks','Numerical representation'],'The classroom segmentation is a toy example. Actual tokens vary by tokenizer.'],
    52:[['Trusted instruction','Untrusted document','Permission boundary'],'Reading an instruction in a document does not authorise following it.'],
    53:[['Retrieve','Generate','Check each citation'],'Relevant-looking material can still be incomplete or misinterpreted.'],
    54:[['Energy','Hardware','Human work'],'State a mechanism, a measurement and a missing question separately.'],
    55:[['Acquire material','Train','Generate and distribute'],'Rights questions differ across activities and jurisdictions. Public access is not blanket permission.'],
    56:[['Read','Draft','Execute with authority'],'A protocol connection does not grant every action the server exposes.'],
    57:[['12:00–12:20','12:25–12:45','12:50–13:10'],'Worked schedule: three 20-minute demonstrations with two 5-minute changeovers. Put the constrained demonstration first.'],
    58:[['Recognise pressure','Restore control','Find human support'],'Use the fictional study or game scenario. No personal disclosure is needed.'],
    59:[['Observed risk','Responsible role','Testable safeguard'],'Separate a recommended safeguard from a binding duty in a particular jurisdiction.']
  };
  var decks=Object.assign({},SLIDES_U1U2,SLIDES_U3U4,SLIDES_U5U6,SLIDES_CRITICAL,SLIDES_ADVANCED,SLIDES_COMPANIONS);
  if(typeof SLIDE_VISUALS!=='undefined'){
    Object.keys(SLIDE_VISUALS).forEach(function(k){if(decks[k.split(':')[0]])delete SLIDE_VISUALS[k];});
    Object.keys(diagrams).forEach(function(id){var v=diagrams[id],i=decks[id].findIndex(function(s){return s.type==='concept';});
      SLIDE_VISUALS[id+':'+i]='<figure class="studio-diagram"><div class="studio-diagram-row">'+v[0].map(function(label,j){return '<div><span class="diagram-step">0'+(j+1)+'</span><strong>'+label+'</strong></div>';}).join('<span class="diagram-arrow" aria-hidden="true">→</span>')+'</div><figcaption>'+v[1]+'</figcaption></figure>';
    });
  }
  if(typeof DI_LAB_SLIDES==='undefined')return;
  var framing={
    'day-one':['Choose one question and predict the reply before trying an approved tool. If unavailable, draft two plausible answers and identify what an external source would need to check.','A chatbot’s claim about itself is not authoritative product documentation. Record what you observed and what remains unverified.'],
    'word-galaxy':['Explore this simplified picture of similarity between words. It illustrates one idea, not the complete operation of a language model.','Nearby representations can reflect patterns of use. That alone does not settle whether a system understands language.'],
    'chinese-room':['Try the symbol-rule exercise, then state Searle’s argument and a possible objection.','The exercise illustrates a philosophical argument. It does not experimentally settle whether AI can understand.'],
    'pixel-classifier':['Classify the examples, then inspect the difficult case.','The game illustrates uncertainty in classification. It is not a measured comparison with a trained model.'],
    'pattern-tiles':['Study the rule-based examples and predict the next pattern before revealing it.','This is a programmed toy demonstration. Explain what it illustrates and what it cannot show about real training.'],
    'neuron-link':['Change the connection in this simplified illustration and observe the result.','Biological learning and artificial-network optimisation are not identical. The illustration does not demonstrate a full training algorithm.'],
    'classifier-mirror':['Try the deliberately unsupported classifier with fictional choices.','The label is not a reliable inference about you. Ask what evidence a score would need before it should influence a decision.'],
    'skew-trainer':['Change the fictional training balance and compare the group results.','This toy shows one possible source of unequal performance. Bias can also arise from labels, objectives, measurement and deployment.'],
    'peril-promise':['Working independently, place each possibility and write the strongest objection to your own position.','Explain how control, context and consequences could change your judgement.'],
    'prompt-coach':['Try a fictional prompt. Treat the score as a checklist of visible ingredients, then test whether the output would meet the task.','This local heuristic is not an AI quality assessment. A high checklist score does not establish accuracy or safe behaviour.'],
    'wall-drawing':['Run the browser interpretation of an instruction-based drawing more than once.','Distinguish the instruction, implementation and resulting image. An artistic analogy does not settle a copyright question.'],
    'instruction-engine':['Change one instruction at a time and observe the resulting drawing.','This deterministic or randomised drawing program is not a generative language model. Compare the role of instructions without equating the mechanisms.'],
    'rule-painter':['Create two variations yourself, using different rules, and label your choices.','Explain what you directed and what the program supplied. No partner or external account is required.'],
    'bland-paste':['Explore the visual averaging metaphor, then explain where it breaks down.','The most probable outcome is not mathematically the same as the mean. Real generation need not produce a literal average; the display illustrates an aesthetic concern.'],
    'motion-field':['Move the pointer to explore this local visual response.','For a real system, investigate processing, storage, retention and identity linking separately. Face recognition need not use cloud processing.'],
    'energy-counter':['Explore the calculator’s labelled illustrative assumptions, then compare with the lesson’s worked example.','This is not a meter for your device or a universal cost per request. State boundaries and uncertainty before comparing actual products.'],
    'sequence':['Arrange the verification steps. Explain why specifying the claim matters before searching.','Real investigations can loop back as new evidence appears. The sequence is a useful workflow, not a rule that every inquiry must be linear.'],
    'calibration':['Answer the questions and compare confidence with correctness on this small sample.','A confident tone is not a calibrated probability. Calibration can be studied for people and models using relevant evaluations.'],
    'misinfo-network':['Change the delay and inspect this simulated information network.','The spread follows programmed assumptions. It is not evidence that every false claim spreads faster than every correction.'],
    'code-sandbox':['Make three changes to the sample and explain each. A paper storyboard is an alternative if coding is not your chosen project route.','Keep the code or annotated storyboard and a test record. A local prototype can provide useful evidence without public publishing.'],
    'next-word':['Predict continuations in this toy game, then compare plausible and factually supported answers.','Next-token prediction is a central mechanism, not a complete description of every AI product, tool workflow or training stage.'],
    'pipeline':['Follow the distinction between training and using a model in this simplified pipeline.','Context, retrieval and stored product memory can change a response without changing model weights. Provider training and retention practices require separate checks.'],
    'meaning-space':['Explore the displayed word vectors as one illustration of semantic similarity.','Real retrieval may combine embeddings, keyword search, filters and reranking. This display does not reveal a particular provider’s full architecture.'],
    'cosine-compass':['Change the vectors and observe the angle and cosine similarity.','Cosine similarity is one scoring method. A high score is not proof of relevance, truth or support for a claim.'],
    'agent-loop':['Step through the simulated plan, action and observation, including a tool failure.','The application must enforce permissions and validate tool calls. A fluent plan does not authorise execution.']
  };
  Object.keys(decks).forEach(function(id){(DI_LAB_SLIDES[id]||[]).forEach(function(s){if(s.type==='widget'&&framing[s.widget]){s.intro=framing[s.widget][0];s.debrief=framing[s.widget][1];}});});
  function replace(id,index,s){DI_LAB_SLIDES[id][index]=s;}
  replace(9,0,{type:'concept',title:'Ask for a better specification',body:'An assistant can help identify missing requirements. Its proposed prompt is still a draft you must evaluate.',bullets:['Ask which facts or constraints are missing.','Check that the rewrite preserves your actual goal.','Test normal, missing and conflicting inputs.'],callout:'A standing instruction is not a reliable security boundary or a guarantee of behaviour.'});
  replace(10,0,{type:'concept',title:'Direction, execution and contribution',body:'Instruction-based art offers a useful comparison with AI-assisted creation. Compare the roles without assuming that the technologies or legal conclusions are identical.',bullets:['Write a short drawing instruction and execute it twice.','Record which choices the instruction fixes and which the executor makes.','Explain a human contribution and a rights question separately.']});
  replace(10,4,{type:'concept',title:'Specificity without the averaging myth',body:'Generic prompts and familiar conventions can produce generic-looking work. But the most probable outcome is not, by definition, the mathematical average of all training examples.',bullets:['Define a purpose, audience and visual constraint.','Compare two variations against those criteria.','Explain one deliberate edit and its effect.'],callout:'Use the slider as a visual metaphor, not as a diagram of how every model generates.'});
  replace(11,0,{type:'activity',title:'Build a checkable careers notebook',instructions:'Working independently. Use public course or apprenticeship information, or the fictional source-comparison method in this lesson. A paper source ledger works without an account.',steps:['Choose a route and record the exact source and date.','Separate an observed requirement from a forecast about employment.','Check two claims against the original passages.','Mark a missing answer rather than inventing it.','If using an approved source-based notebook, check its citations; source grounding does not eliminate errors.']});
  replace(28,0,{type:'activity',title:'One strength, one useful next step',instructions:'Working independently. Review your own prototype against the brief. An authorised reviewer is optional; label the source of feedback.',steps:['Find the first unclear step in the user journey.','Check one factual or capability claim.','Explain three design decisions using your evidence.','Name one demonstrated strength and one priority repair.','Make the change and retest; keep the before-and-after record.']});
  replace(44,0,{type:'concept',title:'A reasoned decision not to delegate',body:'A practical manifesto can identify work you choose to do yourself and explain why. The point is a considered decision connected to learning, rights or consequences.',bullets:['Name the task and what delegating would change.','Explain the evidence and values behind your decision.','State a review condition where appropriate; some duties remain binding regardless of convenience.']});
  replace(50,1,{type:'activity',title:'Prepare a useful handover',instructions:'Working independently. Keep a local prototype, an annotated file or a paper storyboard. Public publishing is optional and depends on school approval and the service’s account requirements.',steps:['Write a short explanation of how to use the prototype.','Label simulations and known limitations.','Remove personal information and credentials from anything you plan to share.','Test the handover from a new user’s perspective.','If publishing is appropriate, use the current official hosting instructions and test the resulting link. Tool capabilities and free plans can change.']});
})();
