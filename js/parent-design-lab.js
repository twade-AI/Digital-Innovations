/* Original parent design workshop. Session memory only; never awards course progress. */
(function (root) {
  'use strict';
  var VERSION = 'design-lab-v1', contexts = Object.create(null), serial = 0;
  var stages = ['Agree success', 'Choose a draft', 'Try it', 'Revise', 'Try again', 'Change the brief', 'Your decision', 'Your design'];
  var drafts = [
    {name:'Plenty for everyone', targets:[6,6,6,6], rotate:true, description:'Give each of four people six counters. Everyone takes a turn arranging their own area.'},
    {name:'Let the fastest lead', targets:[3,3,3,3], rotate:false, description:'Make four groups of three. The fastest person makes every move while the others watch.'},
    {name:'Build together', targets:[3,3,3,3], rotate:true, description:'Make four groups of three. Take turns adding one counter, then each person explains a group.'}
  ];
  var revisions = [
    {name:'Keep equal groups; share the turns',targets:[3,3,3,3],rotate:true,reason:'Keep the arithmetic approachable and give everyone a turn.'},
    {name:'Make a pattern; share the turns',targets:[1,2,4,5],rotate:true,reason:'Add a reasoning challenge: explain the difference between neighbouring groups.'},
    {name:'Give each person four',targets:[4,4,4,4],rotate:true,reason:'A tempting change, but check the equipment before accepting it.'}
  ];
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function sum(list) { return list.reduce(function(a,b){return a+b;},0); }
  function initial(variant) {
    return {version:VERSION,variant:variant==='sixth'?'sixth':'family',stage:0,criteria:[false,false,false],design:null,revision:null,board:[0,0,0,0],result:null,round:false,decision:null,message:''};
  }
  function advanced(state) { return state.variant==='sixth'; }
  function target(state) { return state.stage===2 ? drafts[state.design] : revisions[state.revision]; }
  function limit(state) { return state.stage===5 ? 10 : 12; }
  function evaluate(state) {
    var amount=sum(state.board), cap=limit(state);
    if (state.stage===5) {
      var changedOK=amount===10&&state.board.every(function(n){return n>=1;});
      return {ok:changedOK, message:changedOK ? 'Your revised allocation uses all ten and leaves something in every area. You changed the target when the available resources changed. Now judge whether this is the best arrangement for the people involved.' : 'Use all ten, with at least one in each area. The new brief allows unequal groups. Change your arrangement, then test it again.'};
    }
    var rule=target(state), required=sum(rule.targets);
    if(state.stage===4&&state.round){
      var difference=state.board.reduce(function(n,value,i){return n+Math.abs(value-rule.targets[i]);},0);
      var roundOK=amount===12&&difference===2&&state.board.every(function(n){return n>=1;});
      return {ok:roundOK,message:roundOK?'You moved one counter to a different area. The groups changed but the total stayed twelve: subtracting one and adding it elsewhere balance. Everyone still has something to work with. Which area gained, which lost, and why would you choose that change?':'Move exactly one counter from one area to another, leaving every area with at least one. Return one with −, then place it elsewhere with +. The groups must change while the total stays twelve.'};
    }
    if (required>cap) return {ok:false,message:'The draft needs '+required+' but you have only '+cap+'. Your board makes the shortfall visible. A confident instruction cannot supply the missing '+(required-cap)+'. Change the target rather than pretending the plan fits.'};
    if (amount!==cap||state.board.some(function(n,i){return n!==rule.targets[i];})) return {ok:false,message:'The quantities can fit, but this arrangement does not yet match the target. Compare each area with its target, move counters using − and +, then test again.'};
    if (!rule.rotate) return {ok:false,message:'The quantities fit: four groups of three use twelve. But one person made all twelve moves. The other three had no part in the decisions. Revise who takes a turn, as well as checking the numbers.'};
    return {ok:true,message:'The arrangement matches the target and uses twelve. With turns rotating, each person makes three moves. That meets our equipment and participation checks. You still need to judge the challenge and ask each person to explain their thinking.'};
  }
  function reduce(state,action) {
    var s=JSON.parse(JSON.stringify(state)), i=action.index;
    s.message='';
    if (action.type==='reset') return initial(s.variant);
    if (action.type==='variant'&&s.stage===0) {s.variant=action.value==='sixth'?'sixth':'family';return s;}
    if (action.type==='criterion'&&s.stage===0&&Number.isInteger(i)&&i>=0&&i<3) {s.criteria[i]=!s.criteria[i];return s;}
    if (action.type==='agree'&&s.stage===0) {
      if(s.criteria.every(Boolean)){s.stage=1;s.message='Success agreed. Now inspect three supplied drafts.';}else{s.message='Agree all three checks first: resources, time and everyone thinking.';}return s;
    }
    if (action.type==='design'&&s.stage===1&&Number.isInteger(i)&&drafts[i]) {s.design=i;s.board=[0,0,0,0];s.stage=2;s.message='Try the selected rule on the board. You can see whether its quantities and turns work.';return s;}
    if (action.type==='move'&&[2,4,5].indexOf(s.stage)!==-1&&Number.isInteger(i)&&i>=0&&i<4&&[1,-1].indexOf(action.delta)!==-1) {
      if(action.delta===1&&sum(s.board)<limit(s)){s.board[i]++;s.result=null;}
      if(action.delta===-1&&s.board[i]>0){s.board[i]--;s.result=null;}
      s.message='Area '+(i+1)+': '+s.board[i]+'. '+(limit(s)-sum(s.board))+' left to place.';return s;
    }
    if(action.type==='test'&&[2,4,5].indexOf(s.stage)!==-1){s.result=evaluate(s);s.message=s.result.message;return s;}
    if(action.type==='revise'&&s.stage===2&&s.result){s.stage=3;s.result=null;s.message='Keep what worked. Choose a specific change to test.';return s;}
    if(action.type==='revision'&&s.stage===3&&Number.isInteger(i)&&revisions[i]){s.revision=i;s.stage=4;s.board=[0,0,0,0];s.result=null;s.round=false;return s;}
    if(action.type==='rechoose'&&s.stage===4){s.stage=3;s.result=null;return s;}
    if(action.type==='play'&&s.stage===4&&!s.round&&s.result&&s.result.ok){s.round=true;s.result=null;s.message='Play one reasoning round: move one counter, keep the total, and keep every area involved.';return s;}
    if(action.type==='restore'&&s.stage===4&&s.round){s.board=target(s).targets.slice();s.result=null;s.message='The tested arrangement is restored. Move one counter to a different area.';return s;}
    if(action.type==='change'&&s.stage===4&&s.round&&s.result&&s.result.ok){s.stage=5;s.board=[0,0,0,0];s.result=null;s.message='Fresh constraint: only ten remain. Design your own allocation, with at least one in each area.';return s;}
    if(action.type==='reflect'&&s.stage===5&&s.result&&s.result.ok){s.stage=6;s.message='The changed arrangement works. Name the judgement you brought to it.';return s;}
    if(action.type==='decision'&&s.stage===6&&Number.isInteger(i)&&i>=0&&i<3){s.decision=i;s.stage=7;s.message='Your design summary is ready. Use the lesson checks when you are ready to finish the lesson.';return s;}
    return s;
  }
  function button(label,action,index,extra) {
    return '<button type="button" class="btn btn-secondary pdl-button" data-lab-action="'+esc(action)+'"'+(index!=null?' data-index="'+index+'"':'')+' data-focus="'+esc(action+(index==null?'':'-'+index))+'"'+(extra||'')+'>'+esc(label)+'</button>';
  }
  function terms(s) {return advanced(s)?{unit:'budget tokens',person:'committee member',areas:['Welcome desk','Workshop table','Refreshment stand','Quiet space']}:{unit:'counters',person:'player',areas:['Area one','Area two','Area three','Area four']};}
  function prompt(s) {
    return advanced(s)?'Invent three plans for a fictional school enterprise event planning game. Four committee members have twelve budget tokens to allocate across a welcome desk, workshop table, refreshment stand and quiet space. Allow ten minutes: two to explain, six to test, two to review. Use no additional resources. Everyone must make and explain a decision. State the allocation and turn-taking rule clearly. Show the total and identify any assumptions. Use fictional details only; tokens are not real prices.': 'Invent three designs for a ten-minute reasoning game for four people using exactly twelve counters. Allow two minutes to explain, six to test, and two to review. Everyone must take part and explain a decision. Use no extra equipment or elimination. Give exact target groups and turn-taking rules, show the total, and identify assumptions. Use fictional details only.';
  }
  function optional(s,id) {
    return '<details class="pdl-tool"><summary>Optional: try your own adult Gemini account</summary><p>Everything here works without an account. If you want a fresh draft, open Gemini in another tab or window and use only this fictional brief. A personal adult account is not a route around the approved school tools and task permissions for pupil work.</p><p id="'+id+'-prompt-label">Fictional prompt — ready to copy</p><pre id="'+id+'-prompt" class="pdl-prompt" tabindex="0" aria-labelledby="'+id+'-prompt-label">'+esc(prompt(s))+'</pre><div class="pdl-actions">'+button('Copy fictional prompt','copy')+'<a class="btn btn-secondary" href="https://gemini.google.com/" target="_blank" rel="noopener">Open Gemini in a new tab</a></div><p>Use the same checks on its response. These three supplied drafts are original simulated outputs, not a record of a live Gemini conversation.</p></details>';
  }
  function criteria(s) {
    return '<fieldset class="pdl-criteria"><legend>Agree what a successful design must do</legend>'+[
      'Use only twelve '+terms(s).unit+' across four areas.',
      'Fit ten minutes: two to explain, six to try it, two to review.',
      'Give all four people a turn and a decision to explain.'
    ].map(function(text,i){return '<label class="pdl-criterion"><input type="checkbox" data-lab-criterion="'+i+'" data-focus="criterion-'+i+'"'+(s.criteria[i]?' checked':'')+'> <span>'+esc(text)+'</span></label>';}).join('')+'</fieldset>';
  }
  function cards(s,isRevision) {
    var list=isRevision?revisions:drafts;
    return '<div class="pdl-designs">'+list.map(function(item,i){
      var desc=isRevision?item.reason:item.description;
      if(advanced(s)) {
        if(!isRevision)desc=i===0?'Allocate six tokens to each of four stands. Every committee member takes a turn.':i===1?'Allocate three to each stand. Let the most confident committee member make every decision.':'Allocate three to each stand. Rotate the four committee members and ask each to explain an allocation.';
        else desc=i===0?'Give each stand three tokens and share the decisions.':i===1?'Try allocations of one, two, four and five. Explain why some stands receive more; these are fictional priorities, not verified prices.':'Give each stand four. Check whether the total still fits before accepting the change.';
      }
      return '<article class="pdl-design"><span class="pdl-eyebrow">'+(isRevision?'Revision ':'Supplied draft ')+String.fromCharCode(65+i)+'</span><h4>'+esc(item.name)+'</h4><p>'+esc(desc)+'</p><p class="pdl-target">Target: '+item.targets.join(' + ')+'</p>'+button(isRevision?'Try this revision':'Try this draft',isRevision?'revision':'design',i)+'</article>';
    }).join('')+'</div>';
  }
  function board(s,id) {
    var t=terms(s),total=sum(s.board),cap=limit(s),changed=s.stage===5,rule=changed?null:target(s);
    var rotate=changed||rule.rotate;
    var people=[0,1,2,3].map(function(i){return rotate?Math.floor(total/4)+(i<total%4?1:0):(i===0?total:0);});
    return '<div class="pdl-workbench"><p class="pdl-bank"><strong>'+esc(String(cap-total))+' '+esc(t.unit)+' left</strong> · '+total+' of '+cap+' placed</p><div class="pdl-counter-bank" aria-hidden="true">'+Array.from({length:cap-total},function(){return '<span class="pdl-token"></span>';}).join('')+'</div><p>Use + to place one and − to return one. You control all four roles in this rehearsal. The turn totals below show what the selected rule would give each person after this many placements; they are not a record of real participants.</p><div class="pdl-board">'+s.board.map(function(n,i){
      return '<section class="pdl-area" aria-labelledby="'+id+'-area-'+i+'"><h4 id="'+id+'-area-'+i+'">'+esc(t.areas[i])+'</h4><p>'+(changed?'At least one':((s.round?'Starting group: ':'Target: ')+rule.targets[i]))+' · <strong>Placed: '+n+'</strong></p><div class="pdl-pile" aria-hidden="true">'+Array.from({length:n},function(){return '<span class="pdl-token"></span>';}).join('')+'</div><div class="pdl-counter-controls">'+button('−','minus',i,' aria-label="Return one from '+esc(t.areas[i])+'"'+(n===0?' disabled':''))+'<span class="pdl-count" aria-hidden="true">'+n+'</span>'+button('+','plus',i,' aria-label="Place one in '+esc(t.areas[i])+'"'+(total===cap?' disabled':''))+'</div></section>';
    }).join('')+'</div><div class="pdl-turns"><h4>Participation under this rule</h4><ul>'+people.map(function(n,i){return '<li>'+esc(t.person)+' '+(i+1)+': '+n+' moves</li>';}).join('')+'</ul><p>'+esc(rotate?'Turns rotate through all four people. In the real activity, each person also explains one choice.':'The first person makes every move. The others watch.')+'</p></div>'+button('Test this arrangement','test')+'</div>';
  }
  function stageHTML(s,id) {
    var t=terms(s),html='';
    if(s.stage===0) {
      html='<p>This is a fresh brief. Keep the earlier lesson example separate: this challenge has <strong>four people, twelve '+esc(t.unit)+' and ten minutes</strong>. Design, try and improve it here. There is no paper task and no account required.</p><fieldset class="pdl-variant"><legend>Choose your setting</legend><label><input type="radio" name="'+id+'-variant" data-lab-variant="family" data-focus="variant-family"'+(!advanced(s)?' checked':'')+'> Family reasoning game</label><label><input type="radio" name="'+id+'-variant" data-lab-variant="sixth" data-focus="variant-sixth"'+(advanced(s)?' checked':'')+'> Sixth Form: school event / enterprise</label></fieldset>';
      html+='<p>'+esc(advanced(s)?'Four committee members are planning a fictional event. Use tokens to explore how a limited budget might be shared. They are units in a planning game, not prices or evidence that an event is affordable.':'Four people build arrangements with counters. The aim is to explain a choice, rather than finish faster than someone else.')+'</p>'+criteria(s)+button('Agree the brief and explore drafts','agree')+optional(s,id);
    } else if(s.stage===1) {
      html='<p>These are three original, simulated AI drafts. Choose one to investigate. You can start with a draft you suspect will fail: seeing the failure helps you decide what to change.</p>'+cards(s,false);
    } else if(s.stage===2) {
      html='<p><strong>'+esc(drafts[s.design].name)+'</strong>. Build the target shown in each area. If you run out, test what you have. Test the participation rule as well as the total.</p>'+board(s,id);
      if(s.result)html+='<div class="pdl-result '+(s.result.ok?'is-valid':'needs-revision')+'"><h4>Your first test</h4><p>'+esc(s.result.message)+'</p>'+button('Choose a revision','revise')+'</div>';
    } else if(s.stage===3) {
      html='<p>Keep the ten-minute timetable. Choose a rule change you can explain, then test its numbers and participation. Two revisions can work; they make different demands on the group.</p>'+cards(s,true);
    } else if(s.stage===4) {
      html=s.round?'<p><strong>Play a reasoning round.</strong> Move exactly one counter to a different area, keeping every area non-empty. Before you touch a button, predict which quantities will change and which will stay the same. Use − to return one, then + elsewhere.</p><p>'+esc(advanced(s)?'This represents moving one budget token from one stand to another. Which priority would that change serve? The total budget cannot increase.':'In a real four-person game, rotate who chooses a move, predicts its effect, makes it and checks the explanation. Each person should get a turn at each role. Repeat for six minutes, then review for two.')+'</p>':'<p><strong>'+esc(revisions[s.revision].name)+'</strong>. Do not assume that changing the wording has fixed the plan. Build it again and test.</p>';
      html+=board(s,id);
      if(s.round)html+=button('Restore the starting arrangement','restore');
      if(s.result)html+='<div class="pdl-result '+(s.result.ok?'is-valid':'needs-revision')+'"><h4>Your revision test</h4><p>'+esc(s.result.message)+'</p>'+(s.result.ok?(s.round?button('Try a changed brief','change'):button('Play one reasoning round','play')):(s.round?'':button('Choose a different revision','rechoose')))+'</div>';
      else html+='<div class="pdl-actions">'+button('Choose a different revision','rechoose')+'</div>';
    } else if(s.stage===5) {
      html='<p><strong>Two '+esc(t.unit)+' are no longer available.</strong> There are now ten. Your tested twelve-unit plan needs two more than are available, so reusing it unchanged fails the resource check. Keep four people involved and give every area at least one. Unequal groups are allowed. Choose your own allocation using the board; more than one arrangement can work.</p><p>'+esc(advanced(s)?'Decide where you would protect resources and where you could reduce them. You would still need real costs, permissions and access requirements before planning an actual event.':'You might make a balanced arrangement or a pattern worth explaining. The original targets no longer govern this fresh brief.')+'</p>'+board(s,id);
      if(s.result)html+='<div class="pdl-result '+(s.result.ok?'is-valid':'needs-revision')+'"><h4>Your changed-brief test</h4><p>'+esc(s.result.message)+'</p>'+(s.result.ok?button('Name your decision','reflect'):'')+'</div>';
    } else if(s.stage===6) {
      html='<p>Your allocation is <strong>'+esc(s.board.join(' + '))+' = 10</strong>. Which human decision matters most in the version you would use? Choose the reason you can defend. There is no single correct preference.</p><div class="pdl-decisions">'+button('I prioritised everyone taking part','decision',0)+button(advanced(s)?'I chose where a limited budget would help most':'I chose a useful level of challenge','decision',1)+button('I kept the rules simple enough to explain','decision',2)+'</div>';
    } else {
      var reasons=['You kept participation in view. In a real session, check that taking a turn also gives someone a meaningful choice.',advanced(s)?'You made a priority decision. Before using it in a real event, check costs, permissions and access needs with the people involved.':'You chose the level of challenge. Ask each person to explain a choice, and adjust the support rather than assuming the same task suits everyone.','You valued clear rules. Try explaining one round aloud; notice where another person needs clarification.'];
      html='<div class="pdl-summary"><h4>You changed the design, then checked it.</h4><dl><dt>Starting draft</dt><dd>'+esc(drafts[s.design].name)+'</dd><dt>Tested revision</dt><dd>'+esc(revisions[s.revision].name)+'</dd><dt>Changed brief</dt><dd>'+esc(s.board.join(' + '))+' = 10; every area receives at least one.</dd><dt>Your human decision</dt><dd>'+esc(reasons[s.decision])+'</dd></dl><p>The tool can suggest possibilities. You decide what success means, notice what fails and judge whether the revised plan suits the people taking part.</p><p><strong>Try together, if useful:</strong> invite someone to explain your final arrangement, or choose a different one. You can share the screen and take turns. No child account is needed.</p></div>'+optional(s,id);
    }
    return '<h3 class="pdl-stage-title" tabindex="-1">'+(s.stage+1)+'. '+esc(stages[s.stage])+'</h3>'+html;
  }
  function inner(s,id) {
    return '<ol class="pdl-progress" aria-label="Workshop stages">'+stages.map(function(name,i){return '<li'+(i===s.stage?' aria-current="step"':'')+'>'+esc(name)+'</li>';}).join('')+'</ol><div class="pdl-stage">'+stageHTML(s,id)+'</div><div class="pdl-footer"><p>You can return to this practice while the page stays open. Reloading starts it again. Use the three lesson checks to finish the lesson.</p>'+button('Start this workshop again','reset')+'</div>';
  }
  function render(slide) {
    if(!slide||slide.type!=='parent-design-lab')return '';
    var key=VERSION+':'+String(slide.lessonId||304)+':'+String(slide.labId||'creative');
    if(!contexts[key])contexts[key]={id:'parent-design-'+(++serial),state:initial(slide.variant),key:key};
    var c=contexts[key];
    return '<section class="parent-design-lab" data-design-key="'+esc(key)+'" aria-labelledby="'+c.id+'-title"><span class="slide-badge badge-activity">Design lab · 10–15 minutes</span><h2 id="'+c.id+'-title" class="slide-title">'+esc(slide.title||'A fresh brief: four people, twelve counters')+'</h2><div data-lab-content>'+inner(c.state,c.id)+'</div><div class="pdl-live" data-lab-status role="status" aria-live="polite" aria-atomic="true">'+esc(c.state.message)+'</div></section>';
  }
  function refresh(element,c,focusKey,previousStage) {
    element.querySelector('[data-lab-content]').innerHTML=inner(c.state,c.id);
    element.querySelector('[data-lab-status]').textContent=c.state.message;
    var focus=c.state.stage!==previousStage?element.querySelector('.pdl-stage-title'):null;
    if(!focus&&focusKey)focus=Array.from(element.querySelectorAll('[data-focus]')).find(function(node){return node.getAttribute('data-focus')===focusKey&&!node.disabled;});
    // After the last available counter is placed, its + button becomes disabled.
    if(!focus)focus=element.querySelector('[data-lab-action="test"]')||element.querySelector('.pdl-stage-title');
    if(focus)focus.focus({preventScroll:true});
  }
  function selectPrompt(text,status) {
    text.focus();
    var selection=root.getSelection&&root.getSelection();
    if(selection&&root.document&&root.document.createRange){
      var range=root.document.createRange();range.selectNodeContents(text);
      selection.removeAllRanges();selection.addRange(range);
      status.textContent='The prompt is selected. Use your device’s Copy command.';
    } else status.textContent='Copy was unavailable. Select the displayed prompt and use your device’s Copy command.';
  }
  function mount(container) {
    if(!container||!container.querySelectorAll)return;
    var nodes=Array.from(container.querySelectorAll('.parent-design-lab'));
    if(container.classList&&container.classList.contains('parent-design-lab'))nodes.unshift(container);
    nodes.forEach(function(element){
      if(element._parentDesignMounted)return;element._parentDesignMounted=true;
      var c=contexts[element.getAttribute('data-design-key')];if(!c)return;
      element.addEventListener('click',function(event){
        var control=event.target.closest('[data-lab-action]');if(!control||!element.contains(control))return;
        var action=control.getAttribute('data-lab-action'),index=Number(control.getAttribute('data-index')),previous=c.state.stage;
        if(action==='copy'){
          var text=element.querySelector('.pdl-prompt'),status=element.querySelector('[data-lab-status]');
          if(root.navigator&&root.navigator.clipboard&&root.navigator.clipboard.writeText){root.navigator.clipboard.writeText(prompt(c.state)).then(function(){status.textContent='Fictional prompt copied. Paste it into your own adult chat if you choose.';}).catch(function(){selectPrompt(text,status);});}
          else{selectPrompt(text,status);}
          return;
        }
        c.state=reduce(c.state,{type:action==='plus'||action==='minus'?'move':action,index:index,delta:action==='plus'?1:-1});
        refresh(element,c,control.getAttribute('data-focus'),previous);
      });
      element.addEventListener('change',function(event){
        var control=event.target,previous=c.state.stage;
        if(control.hasAttribute('data-lab-criterion'))c.state=reduce(c.state,{type:'criterion',index:Number(control.getAttribute('data-lab-criterion'))});
        else if(control.hasAttribute('data-lab-variant'))c.state=reduce(c.state,{type:'variant',value:control.getAttribute('data-lab-variant')});
        else return;
        refresh(element,c,control.getAttribute('data-focus'),previous);
      });
    });
  }
  root.DI_PARENT_DESIGN={render:render,mount:mount,_test:{initial:initial,reduce:reduce,evaluate:evaluate,prompt:prompt}};
})(typeof window!=='undefined'?window:globalThis);
