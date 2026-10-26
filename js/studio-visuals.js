/* Original explanatory diagrams. Labels stay as HTML text so they reflow and
   remain readable on phones; decorative arrows are hidden from screen readers. */
(function(){
  if(typeof SLIDE_VISUALS==='undefined')return;
  // Replacement decks have new slide positions; discard the old position-based artwork.
  if(typeof GCSE_UNITS!=='undefined')GCSE_UNITS.forEach(function(u){u.lessons.forEach(function(l){if(/^r[34]$/.test(l.revision))Object.keys(SLIDE_VISUALS).forEach(function(k){if(k.split(':')[0]===String(l.id))delete SLIDE_VISUALS[k];});});});
  var lessons={
    101:[['Examples','Adjust parameters','Test the model'],'Training learns patterns. Using a model means applying it to new inputs.'],
    102:[['Context','Predict tokens','Response'],'A plausible continuation is not a fact-check. Check claims against evidence.'],
    104:[['Observe a signal','Estimate relevance','Rank the feed'],'The same watch can have different intentions. Behaviour is evidence; intention is an inference.'],
    106:[['Try it yourself','Use one hint','Try a new problem'],'The final unaided attempt shows what you can do without the assistant.'],
    109:[['Retrieve','Check & correct','Return later'],'Trying to recall is the work. An attractive quiz is useful only if its answers are accurate.'],
    114:[['Extract the claim','Read the source','Qualify the verdict'],'A real citation can still fail to support a claim. Read the relevant passage.'],
    119:[['Check the claim','Trace the origin','Verify the request'],'Authenticity, truth and authority are separate questions.'],
    121:[['Production','Exposure','Belief or action?'],'Each outcome needs its own evidence. Counting reposts does not count independent sources.'],
    122:[['Exists?','Relevant?','Supports the claim?'],'A real source can still be misused. Check the method and exact passage.'],
    126:[['Task exposure','Adoption choices','Observed outcomes'],'An exposure estimate is not a count of jobs lost.'],
    131:[['User experience','Product design','Evidence and limits'],'Respect the feeling. Investigate the design. Keep human support available.'],
    134:[['Capabilities','Permissions','Check and recover'],'This is a simplified design model, not a universal architecture.'],
    125:[['19 / 20 · Group A','15 / 20 · Group B','Ask what differs'],'Fictional results: 95% versus 75%. An accuracy gap calls for investigation; these figures alone do not establish its cause.'],
    127:[['Define the purpose','Minimise the data','Give people control'],'Collect what the task needs. Explain use, access, retention and deletion.'],
    137:[['Hardware','Training','Everyday use'],'Different stages have different impacts. A comparison needs a clear boundary, location and measurement.'],
    138:[['Intended use','Evaluation','Known limits'],'Read all three together. A model card informs a judgement; it does not guarantee performance.'],
    139:[['Define success','Test unseen cases','Compare outcomes'],'Keep test cases separate from examples used to improve the system. Look beyond one overall score.'],
    140:[['Observe a barrier','Redesign one part','Test it again'],'A better-looking interface is a proposal. Testing gives evidence about whether the change helps.']
  };
  var aliases={201:101,202:102,204:104,207:106,210:109,247:114,224:140,221:125,1:101,51:102,12:106,46:114,5:125,6:127,15:137,4:138,3:139,23:140};
  var decks=Object.assign({},typeof SLIDES_GCSE!=='undefined'?SLIDES_GCSE:{},typeof SLIDES_U1U2!=='undefined'?SLIDES_U1U2:{},typeof SLIDES_U3U4!=='undefined'?SLIDES_U3U4:{},typeof SLIDES_U5U6!=='undefined'?SLIDES_U5U6:{},typeof SLIDES_CRITICAL!=='undefined'?SLIDES_CRITICAL:{},typeof SLIDES_ADVANCED!=='undefined'?SLIDES_ADVANCED:{});
  // Revised baseline uses waste per meal, not the classifier illustration.
  delete aliases[221];
  Object.keys(aliases).forEach(function(id){lessons[id]=lessons[aliases[id]];});
  Object.keys(lessons).forEach(function(id){var deck=decks[id];if(!deck)return;var index=deck.findIndex(function(s){return s.type==='concept';});if(index<0)return;var v=lessons[id];var key=id+':'+index;if(SLIDE_VISUALS[key])return;
    SLIDE_VISUALS[key]='<figure class="studio-diagram"><div class="studio-diagram-row">'+v[0].map(function(label,i){return '<div><span class="diagram-step">0'+(i+1)+'</span><strong>'+label+'</strong></div>';}).join('<span class="diagram-arrow" aria-hidden="true">→</span>')+'</div><figcaption>'+v[1]+'</figcaption></figure>';
  });
})();
