/* A short, unsaved route through canonical lesson 302. It is not another lesson
   and never submits lesson checks, changes progress or awards a certificate. */
function initParentQuickStart() {
  'use strict';
  var active=false, finished=false, choice=null;
  var titles=['How a fluent mistake happens','Three useful verdicts','Worked example: a sentence that says too much','Check more carefully when the consequence matters'];
  var normalOpen=gsOpenLesson,normalClose=gsCloseLesson,normalNext=gsNextSlide;
  var normalPrev=gsPrevSlide,normalJump=gsJumpSlide,normalMark=gsMarkDone,normalResults=gsShowResults;
  var normalHTML=gsRenderSlideHTML,normalRender=gsRenderSlideInner;
  var homeQuestion='Which claim are you relying on here? Let’s open that source and find the passage.';
  function showNext(show) {
    var next=document.getElementById('gsNextBtn');
    next.hidden=!show;next.style.display=show?'':'none';
    next.style.visibility=show?'visible':'hidden';
    if(show)next.removeAttribute('aria-hidden');else{next.setAttribute('aria-hidden','true');next.disabled=true;}
  }
  function clearRoute() {
    var url=new URL(location.href);
    if(url.searchParams.has('quickstart')){url.searchParams.delete('quickstart');history.replaceState(null,'',url.pathname+url.search+url.hash);}
  }
  function decisionFeedback(value) {
    return value===0?'The source says booking is required. A fluent answer does not remove that condition, and free gallery entry does not establish the workshop fee. Try a response that keeps the supported detail and checks what is missing.':value===1?'That keeps the supported start time, follows the booking requirement and leaves the price open until it is checked. You can keep useful information while correcting what goes beyond the source.':value===2?'The start time is supported. Checking does not mean rejecting everything: keep that detail, correct the booking claim and find out the workshop price. Try again.':'';
  }
  function lastSlide() {
    var answers=[
      'Go at 10 am without booking; the generated answer sounds clear.',
      'Keep 10 am, book ahead and check the model-making fee with the museum.',
      'Treat every detail as wrong and abandon the visit.'
    ];
    var feedback=decisionFeedback(choice);
    return '<section class="slide-scenario parent-quickstart-decision"><span class="slide-badge badge-scenario">Your decision · 3 minutes</span><h2 class="slide-title">What would you do next?</h2><div class="slide-body"><p>Your child wants to use the museum answer to plan a visit. The source gives a 10 am start, requires booking and says the permanent galleries are free. It does not give the separate model-making session’s fee.</p><p>Choose the most useful response. You can try again after reading the feedback.</p></div><div class="scenario-choices">'+answers.map(function(text,i){return '<button type="button" class="scenario-choice'+(choice===i?' scenario-chosen':'')+'" data-quickstart-choice="'+i+'" aria-pressed="'+(choice===i)+'"><span class="scenario-choice-letter">'+['A','B','C'][i]+'</span>'+text+'</button>';}).join('')+'</div><div id="quickstartFeedback" class="scenario-outcome" role="status" aria-live="polite"'+(feedback?'':' hidden')+'>'+feedback+'</div><p class="parent-quickstart-note">This short taster does not mark a course lesson as complete. Your full-course progress stays as it was.</p></section>';
  }
  function summary() {
    finished=true;
    var area=document.getElementById('gsSlideArea');
    area.innerHTML='<section class="parent-results parent-quickstart-summary"><span class="gs-hero-badge">One useful habit to take away</span><h2 class="slide-title">A confident answer still needs a check.</h2><p>You kept the supported detail, corrected the booking claim and spotted the missing price. The same habit helps with a school deadline, a quotation or a revision explanation.</p><div class="parent-quickstart-home"><h3>A question to ask at home</h3><blockquote>'+homeQuestion+'</blockquote><p>Let your child explain the connection. Read the relevant passage together and decide what to keep, change or check next.</p></div><p>This was a ten-minute introduction. It does not count as one of the 15 lessons or change your course completion.</p><div class="parent-result-actions"><button type="button" class="btn btn-primary" id="quickstartStartCourse">Start the full course →</button><button type="button" class="btn btn-secondary" id="quickstartBack">Back to the course overview</button><button type="button" class="btn btn-secondary" id="quickstartFullLesson">Explore the full lesson on checking answers</button></div></section>';
    document.getElementById('quickstartStartCourse').onclick=function(){gsOpenLesson(301);};
    document.getElementById('quickstartBack').onclick=gsCloseLesson;
    document.getElementById('quickstartFullLesson').onclick=function(){gsOpenLesson(302);};
    showNext(false);
    document.getElementById('gsPrevBtn').disabled=false;
    if(window.diSlide&&diSlide.resetScroll)diSlide.resetScroll(area);
    var heading=area.querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});
  }
  function finish() {
    if(choice===1){summary();return;}
    gsSlideIdx=gsSlides.length-1;finished=false;gsRenderSlide();
    var message=document.getElementById('quickstartFeedback');
    if(message){message.hidden=false;message.textContent='Choose the response that keeps what the source supports, corrects the booking instruction and checks the missing price.';message.tabIndex=-1;message.focus({preventScroll:true});}
  }
  function wireSwipe(area) {
    // The normal player uses this same marker, so opening a full lesson later
    // does not install a second gesture listener.
    if(area._swipeInit)return;
    area._swipeInit=true;var x=0,y=0;
    area.addEventListener('touchstart',function(event){x=event.touches[0].clientX;y=event.touches[0].clientY;},{passive:true});
    area.addEventListener('touchend',function(event){var dx=event.changedTouches[0].clientX-x,dy=event.changedTouches[0].clientY-y;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){if(dx<0)gsNextSlide();else gsPrevSlide();}},{passive:true});
  }
  function open() {
    var canonical=SLIDES_GCSE[302]||[],deck=titles.map(function(title){return canonical.find(function(slide){return slide.title===title;});});
    if(deck.some(function(slide){return !slide;})){
      gsShowXPToast('The short introduction could not load. Open lesson 2 from the course below.');return;
    }
    // New array and new slide objects; the canonical lesson and its checks stay intact.
    active=true;finished=false;choice=null;
    gsCurrentId=302;gsSlideIdx=0;gsSession={quizRight:0,quizTotal:0,streak:0};
    gsSlides=deck.map(function(slide){return Object.assign({},slide);}).concat([{type:'parent-quickstart-decision',title:'What would you do next?'}]);
    var url=new URL(location.href);url.searchParams.delete('lesson');url.searchParams.delete('evidence');url.searchParams.set('quickstart','1');
    history.replaceState(null,'',url.pathname+url.search+url.hash);
    document.getElementById('gsUnitLabel').textContent='Try AI in 10 minutes · a short introduction';
    document.getElementById('gsLessonTitle').textContent='Can you trust this answer?';
    document.getElementById('gsPrevBtn').onclick=function(){gsPrevSlide();};
    gsRenderSlide();
    var modal=document.getElementById('gsModal');modal.classList.add('open');
    if(window.diSlide)diSlide.fullscreen.request(modal);
    document.body.style.overflow='hidden';wireSwipe(document.getElementById('gsSlideArea'));
  }
  gsOpenLesson=function(id){
    if(!gsGetLesson(id))return;
    active=false;finished=false;clearRoute();showNext(true);normalOpen(id);
  };
  gsCloseLesson=function(){var wasActive=active;active=false;finished=false;clearRoute();normalClose();showNext(true);if(wasActive){gsSlides=[];gsSlideIdx=0;}};
  gsNextSlide=function(){if(!active){normalNext();return;}if(finished)return;if(gsSlideIdx===gsSlides.length-1){finish();return;}gsSlideIdx++;gsRenderSlide();};
  gsPrevSlide=function(){if(active&&finished){finished=false;gsRenderSlide();return;}normalPrev();};
  gsJumpSlide=function(index){if(active){if(!Number.isInteger(index)||index<0||index>=gsSlides.length)return;finished=false;}normalJump(index);};
  gsMarkDone=function(id){if(active){finish();return false;}return normalMark(id);};
  gsShowResults=function(wasDone){if(active){finish();return;}normalResults(wasDone);};
  gsRenderSlideHTML=function(slide){if(active&&slide.type==='parent-quickstart-decision')return lastSlide();return normalHTML(slide);};
  gsRenderSlideInner=function(){
    if(active&&finished){summary();return;}
    normalRender();if(!active)return;
    showNext(true);
    var area=document.getElementById('gsSlideArea'),next=document.getElementById('gsNextBtn');
    if(gsSlideIdx===0){var intro=document.createElement('p');intro.className='parent-quickstart-intro';intro.textContent='Start here: you will see how a convincing mistake happens, check one museum answer and leave with a decision and a question to ask at home. Everything you need is on these five screens; no AI account is needed.';area.prepend(intro);}
    next.textContent=gsSlideIdx===gsSlides.length-1?'Take the idea home →':'Next →';
    next.disabled=gsSlideIdx===gsSlides.length-1&&choice!==1;
    if(next.disabled)next.title='Choose the best-supported response to continue';else next.removeAttribute('title');
    area.querySelectorAll('[data-quickstart-choice]').forEach(function(button){button.onclick=function(){
      choice=Number(button.dataset.quickstartChoice);
      area.querySelectorAll('[data-quickstart-choice]').forEach(function(option){var selected=Number(option.dataset.quickstartChoice)===choice;option.classList.toggle('scenario-chosen',selected);option.setAttribute('aria-pressed',String(selected));});
      var feedback=document.getElementById('quickstartFeedback');feedback.hidden=false;feedback.textContent=decisionFeedback(choice);
      next.disabled=choice!==1;if(next.disabled)next.title='Choose the best-supported response to continue';else next.removeAttribute('title');
    };});
  };
  window.gsOpenQuickStart=open;
  window.DI_PARENT_QUICKSTART={active:function(){return active;},open:open,close:function(){if(active)gsCloseLesson();}};
  var params=new URLSearchParams(location.search);
  if(params.get('quickstart')==='1'){
    // Avoid the common controller opening a simultaneous lesson deep link first.
    var clean=new URL(location.href);clean.searchParams.delete('lesson');clean.searchParams.delete('evidence');history.replaceState(null,'',clean.pathname+clean.search+clean.hash);
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',open,{once:true});else open();
  }
}
