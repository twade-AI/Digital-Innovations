/* Use the Removes player and canonical slides inside the AEP sequence.
   Content/notes/evidence share canonical IDs; completion keeps the original AEP slot IDs. */
function initAEPSharedPlayer() {
  var params=new URLSearchParams(location.search),slot=Number(params.get('aep'));
  if(!AEP_SHARED_LESSONS[slot]||AEP_SHARED_LESSONS[slot]!==Number(params.get('lesson')))return;
  var canonical=GCSE_UNITS.flatMap(function(u){return u.lessons;}),reverse={};
  Object.keys(AEP_SHARED_LESSONS).forEach(function(id){reverse[AEP_SHARED_LESSONS[id]]=Number(id);});
  function source(id){return AEP_SHARED_LESSONS[id]||id;}
  function original(id){return reverse[id]||id;}
  function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback;}catch(e){return fallback;}}
  GCSE_UNITS=UNITS.map(function(u){return Object.assign({},u,{lessons:u.lessons.map(function(l){return Object.assign({},l,canonical.find(function(c){return c.id===source(l.id);})||{},{id:source(l.id),icon:l.icon||'↗'});})});});
  GS_KEY='di_progress';GS_DATES_KEY='di_completion_dates';GS_XP_AWARDED_KEY='di_aep_shared_xp_v1';gsAwarded=gsLoadAwarded();
  gsLoadProgress=function(){var saved=read(GS_KEY,[]);gsDone=new Set((Array.isArray(saved)?saved:[]).map(source));};
  gsSaveProgress=function(){localStorage.setItem(GS_KEY,JSON.stringify(Array.from(gsDone).map(original)));};
  gsLoadDates=function(){var d=read(GS_DATES_KEY,{}),out={};Object.keys(d).forEach(function(id){out[source(Number(id))]=d[id];});return out;};
  gsSaveDates=function(d){var out={};Object.keys(d).forEach(function(id){out[original(Number(id))]=d[id];});localStorage.setItem(GS_DATES_KEY,JSON.stringify(out));};
  // AEP has its own course completion and spaced review on its course page.
  gsShowComplete=function(){};gsRenderReviewPanel=function(){};
  var open=gsOpenLesson,results=gsShowResults;
  gsOpenLesson=function(id){
    if(!reverse[id]){location.href=aepLessonURL(id);return;}
    slot=original(id);history.replaceState(null,'',aepLessonURL(slot));
    open(id);document.getElementById('gsUnitLabel').textContent='AEP · '+gsGetLesson(id).unit.title;
  };
  gsCloseLesson=function(){location.href='index.html?section=units';};
  gsShowResults=function(wasDone){results(wasDone);var next=gsNextLessonId(gsCurrentId),button=document.getElementById('diResultsPrimary');if(button)button.onclick=function(){location.href=next?aepLessonURL(original(next)):'index.html?section=units';};};
  document.title='AEP · AI and Digital Innovation';document.body.dataset.track='aep';
  document.querySelector('.gs-header-title').textContent='AEP';
  document.querySelector('.gs-back').onclick=gsCloseLesson;
  document.querySelector('a[href="portfolio.html?t=removes"]').href='portfolio.html?t=aep';
  document.getElementById('gsHero').style.display='none';
  var tools=document.querySelector('.gs-course-tools');if(tools)tools.style.display='none';
  document.getElementById('gsComplete').style.display='none';
}
