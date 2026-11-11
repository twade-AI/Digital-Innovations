/* Original account-free teaching simulation, inspired by Experience AI's
   training/test distinction. Predictions are scripted, never a trained model.
   All activity state stays in memory; course completion is handled elsewhere. */
(function(root){
  'use strict';
  var groups=[
    {id:'ra',label:'Red apples',singular:'Red apple',kind:'Apple',colour:'red',fill:'#b52f47',initial:24},
    {id:'rt',label:'Red tomatoes',singular:'Red tomato',kind:'Tomato',colour:'red',fill:'#b52f47',initial:24},
    {id:'ga',label:'Green apples',singular:'Green apple',kind:'Apple',colour:'green',fill:'#347647',initial:0},
    {id:'yt',label:'Yellow tomatoes',singular:'Yellow tomato',kind:'Tomato',colour:'yellow',fill:'#e1bb2e',initial:0}
  ];
  var contexts=['clear front view','smaller fruit','fruit tilted to one side','fruit beside a leaf','different-sized fruit','fruit on a patterned cloth','fruit beside another fruit','partly hidden fruit'];
  var states=Object.create(null),choices=[0,2,4,6,8];
  function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function group(id){return groups.find(function(g){return g.id===id;});}
  function newState(){return {phase:0,predictions:[],allocations:{ra:0,rt:0,ga:0,yt:0},round:2,result:null,transfer:null};}
  function keyFor(slide){return String(slide.lessonId||301)+':'+String(slide.labId||'fruit').replace(/[^a-zA-Z0-9_-]/g,'');}
  function svg(g,index){
    var fruit=g.kind==='Apple'
      ? '<path d="M32 21C21 11 8 18 8 32c0 14 11 26 19 22 3-2 7-2 10 0 8 4 19-8 19-22 0-14-13-21-24-11Z" fill="'+g.fill+'" stroke="#263930" stroke-width="2"/><path d="M32 22c0-7 2-12 5-15" fill="none" stroke="#263930" stroke-width="3"/><path d="M35 15c1-8 10-10 15-7-3 7-8 9-15 7Z" fill="#347647" stroke="#263930" stroke-width="1.5"/>'
      : '<circle cx="32" cy="36" r="23" fill="'+g.fill+'" stroke="#263930" stroke-width="2"/><path d="m32 11 4 11 12-4-7 10 9 7-14-2-4 10-4-10-14 2 9-7-7-10 12 4Z" fill="#347647" stroke="#263930" stroke-width="1.5"/>';
    var cover=index===8?'<path d="M43 28h18v34H36Z" fill="#e5e7e3" stroke="#263930" stroke-width="1.5"/>':'';
    return '<svg class="model-fruit" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" focusable="false">'+fruit+cover+'</svg>';
  }
  function item(g,index,round){return {id:'round-'+round+'-'+g.id+'-'+index,group:g.id,kind:g.kind,index:index,context:contexts[index-1]||'clear view'};}
  function predicted(g,training,index){
    if(g.initial>0)return g.kind;
    if(training===0)return g.kind==='Apple'?'Tomato':'Apple';
    if(training===2)return index%2===0?g.kind:(g.kind==='Apple'?'Tomato':'Apple');
    return index%4!==0?g.kind:(g.kind==='Apple'?'Tomato':'Apple');
  }
  function score(items,allocations){
    return items.map(function(example){var g=group(example.group),prediction=predicted(g,allocations[g.id]||0,example.index);return Object.assign({},example,{prediction:prediction,correct:prediction===g.kind});});
  }
  function summarise(items){return groups.map(function(g){var rows=items.filter(function(x){return x.group===g.id;});return {group:g.id,total:rows.length,correct:rows.filter(function(x){return x.correct;}).length};});}
  function baseline(){
    var examples=[];groups.forEach(function(g){examples.push(item(g,1,1),item(g,2,1));});
    var results=score(examples,{ra:0,rt:0,ga:0,yt:0});
    return {heldOut:results,rows:summarise(results),correct:results.filter(function(x){return x.correct;}).length,total:results.length};
  }
  function simulate(allocations,round){
    if(!Number.isInteger(round)||round<2)throw new RangeError('A fresh test round must be numbered 2 or later.');
    var added=[],held=[];
    groups.forEach(function(g){
      var count=allocations&&allocations[g.id];
      if(!choices.includes(count))throw new RangeError('Choose 0, 2, 4, 6 or 8 training examples for every group.');
      for(var i=1;i<=8;i++)(i<=count?added:held).push(item(g,i,round));
    });
    var results=score(held,allocations),rows=summarise(results);
    return {round:round,addedTraining:added,trainingTotal:48+added.length,heldOut:results,rows:rows,correct:results.filter(function(x){return x.correct;}).length,total:results.length,missingGroups:rows.filter(function(r){return r.total===0;}).map(function(r){return r.group;})};
  }
  function records(){return '<div class="model-grid">'+groups.map(function(g){return '<article class="model-card">'+svg(g)+'<h4>'+g.label+'</h4><p>'+g.kind.toLowerCase()+' shape · '+g.colour+' skin</p><p class="model-count"><strong>'+g.initial+'</strong> training examples</p></article>';}).join('')+'</div>';}
  function resultsTable(result,caption){return '<div class="model-table-wrap"><table class="model-results-table"><caption>'+caption+'</caption><thead><tr><th scope="col">Actual fruit</th><th scope="col">Correct predictions</th><th scope="col">What can you see?</th></tr></thead><tbody>'+result.rows.map(function(row){var g=group(row.group);return '<tr><th scope="row">'+g.label+'</th><td>'+row.correct+' of '+row.total+'</td><td>'+(row.total===0?'Not tested in this round':row.correct===row.total?'All correct in this small set':(row.total-row.correct)+' misclassified in this set')+'</td></tr>';}).join('')+'</tbody></table></div>';}
  function individualResults(result){return '<details class="model-details"><summary>Inspect every simulated prediction</summary><div class="model-grid">'+result.heldOut.map(function(x){var g=group(x.group);return '<article class="model-card '+(x.correct?'model-row-correct':'model-row-error')+'">'+svg(g,x.index)+'<h4>'+g.singular+'</h4><p>'+esc(x.id)+' · '+x.context+'</p><p>Simulated prediction: <strong>'+x.prediction+'</strong></p><p><strong>'+(x.correct?'Correct':'Incorrect')+'</strong> · actual label: '+g.kind+'</p></article>';}).join('')+'</div></details>';}
  function predictionFeedback(state){
    var uncovered=['ga','yt'].filter(function(id){return state.predictions.includes(id);});
    return uncovered.length===2?'You picked both groups absent from the training record. They are sensible priorities for testing.':uncovered.length===1?'You picked one group absent from training. Check the other missing group too: both green apples and yellow tomatoes need attention.':'The missing groups deserve particular attention: there were no green apples or yellow tomatoes in the training record. The familiar-looking groups still need testing too.';
  }
  function planFeedback(state){
    var result=simulate(state.allocations,state.round);
    if(result.addedTraining.length===0)return 'Choose some new training examples before running this round. The other examples will stay separate for testing.';
    if(result.total===0)return 'Every example is in training. Keep some back: you currently have no unseen examples with which to test the result.';
    if(result.missingGroups.length)return 'Your test set contains no '+result.missingGroups.map(function(id){return group(id).label.toLowerCase();}).join(' or ')+'. You can run this split, but it cannot tell you how the classifier handles those groups.';
    return 'Your plan keeps at least two unseen examples from each group for testing. Compare the results group by group, as well as looking at the total.';
  }
  function transferResponse(value){return value===1?'Inspecting the groups separately can reveal unequal errors that an overall score hides. Check how the data were gathered and labelled, test on independent representative examples, and consider who would be harmed by a mistake. Keep a person responsible for any consequential decision.':value===0?'An overall score can conceal a group experiencing more errors. Look at the error types and their consequences for each group, using suitable independent test data.':value===2?'Extra examples might help, but improvement needs checking. Unequal performance can have several causes. Keep a fresh test set and human oversight, rather than assuming that adding data has settled the issue.':'';}
  function phaseHTML(state,prefix){
    var back='<button type="button" class="btn btn-secondary" data-model-action="back">← Back</button>';
    if(state.phase===0)return '<h3 data-model-heading tabindex="-1">1. Predict the weak spots</h3><p>The fictional training record contains 48 labelled fruit examples. A label tells the classifier which examples are apples and which are tomatoes.</p>'+records()+'<p class="model-limit">Both kinds of fruit are red in this record. Colour alone cannot distinguish the two labels. The record does not tell us which features a real classifier would learn.</p><fieldset class="model-prediction-options"><legend>Which groups would you watch most closely in a new test?</legend><p>You can choose more than one. Make a prediction before opening the results.</p>'+groups.map(function(g){return '<label><input type="checkbox" data-model-predict="'+g.id+'" data-model-control="predict-'+g.id+'" '+(state.predictions.includes(g.id)?'checked':'')+'> '+g.label+'</label>';}).join('')+'</fieldset><div class="model-actions"><button type="button" class="btn btn-primary" data-model-action="reveal" '+(state.predictions.length?'':'disabled')+'>Reveal eight simulated predictions →</button></div>';
    if(state.phase===1){var first=baseline();return '<h3 data-model-heading tabindex="-1">2. Look beyond the overall score</h3><p class="model-feedback">'+predictionFeedback(state)+'</p><p><strong>'+first.correct+' of '+first.total+' correct</strong> in this first simulated test. There are two new examples of each group.</p>'+resultsTable(first,'First test: eight examples the classifier had not seen')+individualResults(first)+'<p class="model-limit">The errors in this simulation occur on the missing groups. That illustrates a reason to check training coverage. A real investigation would also consider image quality, the labels and the model itself. These eight fictional results do not establish the cause of a real model’s errors.</p><div class="model-actions">'+back+'<button type="button" class="btn btn-primary" data-model-action="plan">Choose the next examples →</button></div>';}
    if(state.phase===2){var planned=simulate(state.allocations,state.round);return '<h3 data-model-heading tabindex="-1">3. Improve the training. Keep a separate test.</h3><p>You have a fresh batch of <strong>32 illustrated examples</strong>: eight from each group. For each group, choose how many to add to training. The rest will be held back, unseen, for testing. The original 48 training examples stay in place.</p><p><strong>Training examples</strong> help a model learn patterns. <strong>Test examples</strong> let you check its predictions afterwards. Decide the split before seeing the new test results. None of the first round’s examples is reused here.</p><div class="model-table-wrap"><table class="model-allocation"><caption>Fresh batch '+state.round+' · eight examples in each group</caption><thead><tr><th scope="col">Group</th><th scope="col">Add to training</th><th scope="col">Keep for testing</th></tr></thead><tbody>'+groups.map(function(g){var id=prefix+'-allocation-'+g.id;return '<tr><th scope="row"><label for="'+id+'">'+g.label+'</label></th><td><select id="'+id+'" aria-label="'+g.label+' added to training" data-model-allocation="'+g.id+'" data-model-control="allocation-'+g.id+'">'+choices.map(function(n){return '<option value="'+n+'" '+(state.allocations[g.id]===n?'selected':'')+'>'+n+' for training</option>';}).join('')+'</select></td><td data-model-heldout="'+g.id+'">'+(8-state.allocations[g.id])+' for testing</td></tr>';}).join('')+'</tbody></table></div><p><strong><span data-model-training-total>'+planned.trainingTotal+'</span> training examples</strong> in total; <strong><span data-model-test-total>'+planned.total+'</span> fresh test examples</strong> held separately.</p><p class="model-feedback" data-model-plan-feedback role="status">'+planFeedback(state)+'</p><div class="model-actions">'+back+'<button type="button" class="btn btn-primary" data-model-action="run" '+(!planned.addedTraining.length||!planned.total?'disabled':'')+'>Run the fresh simulated test →</button></div>';}
    var result=state.result,first=baseline();
    var transferFeedback=transferResponse(state.transfer);
    return '<h3 data-model-heading tabindex="-1">4. What does the fresh test show?</h3><div class="model-comparison"><p>First test: <strong>'+first.correct+' of '+first.total+' correct</strong>.</p><p>Fresh test '+result.round+': <strong>'+result.correct+' of '+result.total+' correct</strong>, after adding '+result.addedTraining.length+' training examples.</p></div>'+resultsTable(result,'Fresh test results, separated by fruit group')+(result.missingGroups.length?'<p class="model-feedback">You did not test '+result.missingGroups.map(function(id){return group(id).label.toLowerCase();}).join(' or ')+'. Leave those results unknown; a strong total cannot fill that gap.</p>':'<p class="model-feedback">Each group was tested. Now inspect the remaining mistakes and the number of examples behind each result.</p>')+individualResults(result)+'<p class="model-limit">These rounds use different test examples and may have different totals. They are not a controlled estimate of improvement. A small set of correct answers gives limited evidence; it does not establish reliability for every fruit or every setting.</p><details class="model-details"><summary>How this simulation produces its results</summary><p>We programmed the first test to classify the red fruit correctly and confuse the unfamiliar colours. Adding examples of a missing group changes some later scripted predictions. A partly hidden example can still go wrong. Moving more examples into training also leaves fewer for testing, so a higher score is not guaranteed. No model is actually trained by these controls.</p></details><section class="model-transfer"><h4>A school application</h4><p>A school is considering a reading-support tool. Its overall results look promising, but you hear that it makes more mistakes with some accents. What is the most useful next step?</p><div class="model-transfer-choices">'+['Rely on the overall score; it combines everyone’s results.','Examine errors across the affected groups, investigate the data and keep human oversight.','Add more examples of the affected accents and assume the problem is fixed.'].map(function(text,i){return '<button type="button" class="btn btn-secondary" data-model-transfer="'+i+'" aria-pressed="'+(state.transfer===i)+'">'+text+'</button>';}).join('')+'</div><p class="model-feedback" id="'+prefix+'-transfer-feedback" role="status" aria-live="polite">'+transferFeedback+'</p></section><details class="model-details"><summary>Take the conversation further</summary><p><strong>Younger teenagers:</strong> which fruit group was missing, and which new examples would you keep back to test it?</p><p><strong>Older teenagers:</strong> before using a system for a decision that affects someone’s opportunities, compare false alarms and missed cases across relevant groups. Ask whether the test set represents the intended use, whether labels and conditions differ, and what human review is needed. A performance gap needs investigation; it does not identify its own cause.</p></details><div class="model-actions"><button type="button" class="btn btn-secondary" data-model-action="revise">Try another split with a fresh batch</button><button type="button" class="btn btn-secondary" data-model-action="reset">Restart the simulation</button></div>';
  }
  function render(slide){
    slide=slide||{};var key=keyFor(slide),state=states[key]||(states[key]=newState()),prefix='model-'+key.replace(/[^a-zA-Z0-9_-]/g,'-');
    return '<section class="parent-model-lab" data-model-key="'+esc(key)+'" aria-labelledby="'+prefix+'-title"><span class="slide-badge badge-activity">Explore a classifier · 5–8 minutes</span><h2 class="slide-title" id="'+prefix+'-title">Predict where the model will struggle</h2><p>The training record, pictures and predictions below are fictional. This programmed simulation lets you try a decision, inspect the result and make a better test. It runs entirely on this page.</p><ol class="model-stage-nav" aria-label="Activity stages">'+['Predict','Inspect','Choose examples','Retest'].map(function(label,i){return '<li'+(state.phase===i?' aria-current="step"':'')+'>'+label+'</li>';}).join('')+'</ol>'+phaseHTML(state,prefix)+'<p class="model-footnote">Your choices stay here while this page is open; reloading starts the simulation again. Use the three lesson checks to finish the lesson. <a href="https://experience-ai.org/en/units/understanding-ai-11-14/lessons/15" target="_blank" rel="noopener">Explore the Experience AI teaching approach that inspired it</a>.</p>'+(state.phase<3?'<button type="button" class="btn btn-secondary" data-model-action="reset">Restart the simulation</button>':'')+'</section>';
  }
  function redraw(element,control,focusHeading){
    var key=element.dataset.modelKey,parts=key.split(':'),holder=document.createElement('div');holder.innerHTML=render({lessonId:parts[0],labId:parts[1]});var replacement=holder.firstElementChild;element.replaceWith(replacement);
    var target=focusHeading?replacement.querySelector('[data-model-heading]'):control?replacement.querySelector('[data-model-control="'+control+'"]'):null;
    if(target){target.focus({preventScroll:!focusHeading});if(focusHeading)target.scrollIntoView({block:'start'});}
  }
  root.DI_PARENT_MODEL={render:render,simulate:simulate,baseline:baseline,inspect:function(lessonId,labId){var state=states[keyFor({lessonId:lessonId,labId:labId})];return state?JSON.parse(JSON.stringify(state)):null;}};
  if(typeof document==='undefined')return;
  document.addEventListener('change',function(event){
    var element=event.target.closest('.parent-model-lab');if(!element)return;var state=states[element.dataset.modelKey];if(!state)return;
    var prediction=event.target.dataset.modelPredict,allocation=event.target.dataset.modelAllocation;
    if(prediction&&state.phase===0&&group(prediction)){state.predictions=Array.from(element.querySelectorAll('[data-model-predict]:checked')).map(function(input){return input.dataset.modelPredict;});element.querySelector('[data-model-action="reveal"]').disabled=!state.predictions.length;}
    if(allocation&&state.phase===2&&group(allocation)&&choices.includes(Number(event.target.value))){
      state.allocations[allocation]=Number(event.target.value);var plan=simulate(state.allocations,state.round);
      element.querySelector('[data-model-heldout="'+allocation+'"]').textContent=(8-state.allocations[allocation])+' for testing';
      element.querySelector('[data-model-training-total]').textContent=plan.trainingTotal;
      element.querySelector('[data-model-test-total]').textContent=plan.total;
      element.querySelector('[data-model-plan-feedback]').textContent=planFeedback(state);
      element.querySelector('[data-model-action="run"]').disabled=!plan.addedTraining.length||!plan.total;
    }
  });
  document.addEventListener('click',function(event){
    var button=event.target.closest('[data-model-action],[data-model-transfer]');if(!button)return;var element=button.closest('.parent-model-lab');if(!element)return;var key=element.dataset.modelKey,state=states[key];if(!state)return;
    if(button.hasAttribute('data-model-transfer')&&state.phase===3){
      state.transfer=Number(button.dataset.modelTransfer);
      element.querySelectorAll('[data-model-transfer]').forEach(function(option){option.setAttribute('aria-pressed',String(Number(option.dataset.modelTransfer)===state.transfer));});
      element.querySelector('.model-transfer [role="status"]').textContent=transferResponse(state.transfer);return;
    }
    var action=button.dataset.modelAction;
    if(action==='reset')states[key]=newState();
    else if(action==='reveal'&&state.phase===0&&state.predictions.length)state.phase=1;
    else if(action==='plan'&&state.phase===1)state.phase=2;
    else if(action==='back'&&(state.phase===1||state.phase===2))state.phase--;
    else if(action==='run'&&state.phase===2){var result=simulate(state.allocations,state.round);if(!result.addedTraining.length||!result.total)return;state.result=result;state.phase=3;state.transfer=null;}
    else if(action==='revise'&&state.phase===3){state.round++;state.phase=2;state.result=null;state.transfer=null;}
    else return;
    redraw(element,null,true);
  });
})(typeof window!=='undefined'?window:globalThis);
