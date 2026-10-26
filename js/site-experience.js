/* Shared display preferences, course navigation and accessible dialog lifecycle. */
(function(root){
 'use strict';
 function read(k,f){try{return JSON.parse(localStorage.getItem(k))??f;}catch(e){return f;}}
 function get(k,f){try{return localStorage.getItem(k)||f;}catch(e){return f;}}
 function put(k,v){try{localStorage.setItem(k,v);}catch(e){}}
 function prefs(){var h=document.documentElement;h.dataset.theme=get('di_theme',matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');h.dataset.contrast=get('di_contrast','normal');h.dataset.font=get('di_font','normal');}
 prefs();
 function setPref(k,v){put('di_'+k,v);prefs();document.querySelectorAll('[data-display="'+k+'"]').forEach(function(e){e.value=v;});}
 function catalog(){return root.DI_COURSES||{};}
 function track(){var f=location.pathname.split('/').pop(),q=new URLSearchParams(location.search);if(f==='removes.html')return document.body.dataset.track==='aep'||(root.AEP_SHARED_LESSONS&&root.AEP_SHARED_LESSONS[Number(q.get('aep'))]===Number(q.get('lesson')))?'aep':'removes';if(f==='fluency.html')return 'passport';if(f==='revised.html')return q.get('pathway')==='productivity'||Number(q.get('lesson'))>=260?'productivity':'climate';return null;}
 function remember(t,id){if(!catalog()[t])return;put('di_active_course',t);if(id)put('di_resume_'+t,String(id));}
 function url(t,id){var c=catalog()[t];if(!c)return 'index.html';if(!id)return c.url;return (t==='aep'?'index.html?lesson='+id:c.url+(c.url.includes('?')?'&':'?')+'lesson='+id);}
 function next(t){var c=catalog()[t];if(!c)return null;var done=read(c.key,[]);if(!Array.isArray(done))done=[];var last=Number(get('di_resume_'+t,''));return c.lessons.find(function(l){return l.id===last&&!done.includes(l.id);})||c.lessons.find(function(l){return !done.includes(l.id);})||null;}
 function active(){var t=get('di_active_course','');if(catalog()[t])return t;for(var key of ['removes','passport','aep','climate','productivity']){var c=catalog()[key];if(c&&read(c.key,[]).length)return key;}return 'removes';}
 function resume(){var t=active(),l=next(t);remember(t);location.href=url(t,l&&l.id);}
 function resumeLabel(){var t=active(),c=catalog()[t],l=next(t);return c?(l?'Continue '+c.name+' · '+l.title:'Review '+c.name):'Choose a course';}
 function controls(){return '<details class="display-controls"><summary>Reading settings</summary><div class="display-options"><label>Colour theme<select data-display="theme"><option value="light">Light</option><option value="dark">Dark</option></select></label><label>Contrast<select data-display="contrast"><option value="normal">Standard</option><option value="high">High contrast</option></select></label><label>Reading font<select data-display="font"><option value="normal">Course font</option><option value="dyslexic">Lexend</option></select></label>'+(document.body?.dataset.standalone?'':'<a href="work.html">Save or move my work</a>')+'</div></details>';}
 function syncControls(){document.querySelectorAll('[data-display]').forEach(function(e){e.value=get('di_'+e.dataset.display,e.dataset.display==='theme'?document.documentElement.dataset.theme:'normal');});}
 function ready(){
  var t=track();if(t)remember(t);if(t==='climate'||t==='productivity'){var projectContinue=document.querySelector('[onclick="gsContinueCourse()"]');if(projectContinue)projectContinue.textContent='Continue '+catalog()[t].name+' →';}
  var header=document.querySelector('.gs-header,.fl-header,.pf-header,.fm-header,.lab-header');if(header){var box=document.createElement('div');box.className='course-utilities';box.innerHTML=controls();if(Object.keys(catalog()).length)box.insertAdjacentHTML('beforeend','<label class="course-picker">Course<select aria-label="Switch course"><option value="">Choose a course</option>'+Object.keys(catalog()).map(function(k){return '<option value="'+k+'">'+catalog()[k].name+'</option>';}).join('')+'</select></label>');header.after(box);var select=box.querySelector('.course-picker select');if(select){select.value=t||'';select.onchange=function(){remember(this.value);location.href=url(this.value);};}}
  document.querySelectorAll('.modal').forEach(function(m){var footer=m.querySelector('.modal-footer,.lv-footer');if(footer&&!footer.querySelector('.display-controls'))footer.insertAdjacentHTML('beforeend',controls());});
  syncControls();
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!document.querySelector('.modal.open')){var menu=document.querySelector('#settingsMenu.open');if(menu){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');var button=document.getElementById('settingsBtn');button.setAttribute('aria-expanded','false');button.focus();}}});
  document.addEventListener('change',function(e){if(e.target.dataset.display)setPref(e.target.dataset.display,e.target.value);});
  var shell=document.querySelector('.gs-shell,.fl-shell,.pf-shell,.fm-shell');if(shell){shell.setAttribute('role','main');shell.id=shell.id||'course-main';if(!shell.querySelector('h1')){var title=document.createElement('h1');title.className='visually-hidden';title.textContent=document.title;shell.prepend(title);}if(!document.querySelector('.skip-link')){var skip=document.createElement('a');skip.className='skip-link';skip.href='#'+shell.id;skip.textContent='Skip to main content';document.body.prepend(skip);}shell.tabIndex=-1;}
  document.querySelectorAll('.mob-tab-center,#floatContinue').forEach(function(b){b.onclick=resume;b.title=resumeLabel();b.setAttribute('aria-label',resumeLabel());});
  var float=document.getElementById('floatContinueLabel');if(float)float.textContent=resumeLabel();
  var hero=document.querySelector('.studio-hero-actions');if(hero){var r=document.createElement('a');r.className='course-resume';r.href=url(active(),next(active())?.id);r.textContent=resumeLabel();hero.after(r);}
  document.querySelectorAll('.mobile-tabs [data-section="units"],.mobile-tabs [data-section="progress"]').forEach(function(b){var span=b.querySelector('span:last-child');if(span)span.textContent=b.dataset.section==='units'?'AEP units':'AEP progress';});
  document.querySelectorAll('.modal-close').forEach(function(b){b.setAttribute('aria-label','Close lesson');});
  function newsFreshness(){if(!document.getElementById('latestNewsGrid'))return;var status=root.AI_NEWS_STATUS,stamp=status&&new Date(status.refreshedAt),valid=stamp&&!isNaN(stamp),age=valid?Date.now()-stamp.getTime():Infinity;var text=(navigator.onLine?'':'Offline · ')+(valid?'News snapshot refreshed '+stamp.toLocaleString('en-GB')+'. ':'News refresh time is unavailable. ')+(age>48*3600000?'This snapshot may be out of date. ':'')+'Stories have their own publication dates. External sites may require an account.';['latestNewsGrid','fullNewsGrid'].forEach(function(id){var grid=document.getElementById(id);if(!grid)return;var label=document.getElementById(id+'Freshness');if(!label){label=document.createElement('p');label.id=id+'Freshness';label.className='freshness-status';label.setAttribute('role','status');grid.before(label);}label.textContent=text;});}
  newsFreshness();window.addEventListener('online',newsFreshness);window.addEventListener('offline',newsFreshness);document.addEventListener('di-news-updated',newsFreshness);
  var status=document.createElement('p');status.className='visually-hidden';status.setAttribute('role','status');status.setAttribute('aria-live','polite');document.body.append(status);
  var current=null,opener=null,inert=[],announcement='';
  function restore(){inert.forEach(function(x){x.el.inert=x.before;});inert=[];}
  function isolate(m){var child=m;while(child&&child!==document.body){var parent=child.parentElement;if(!parent)break;Array.from(parent.children).forEach(function(el){if(el!==child&&!/^(SCRIPT|STYLE|LINK)$/.test(el.tagName)){inert.push({el:el,before:el.inert});el.inert=true;}});child=parent;}status.inert=false;}
  function heading(m){return m.querySelector('#gsLessonTitle,#aepLessonTitle,#lvLessonTitle,h1,h2,.slide-title')||m;}
  function focus(m){var h=heading(m);h.tabIndex=-1;if(!h.id)h.id='dialog-title';m.setAttribute('aria-labelledby',h.id);h.focus({preventScroll:true});}
  function update(){var open=Array.from(document.querySelectorAll('.modal.open,.qq-modal.open,.kb-overlay.open,.ob-overlay.open,.shortcuts-overlay.open')).filter(function(m){return getComputedStyle(m).display!=='none';}),m=open.at(-1)||null;
   if(m!==current){restore();if(m){if(!current)opener=document.activeElement;current=m;isolate(m);focus(m);syncControls();}else{current=null;var target=opener&&opener.isConnected?opener:document.querySelector('main:not([hidden]),[role=main]:not([hidden])');if(target){target.tabIndex=target.tabIndex<0?-1:target.tabIndex;target.focus({preventScroll:true});}opener=null;}}
   if(m){var footer=m.querySelector('.modal-footer,.lv-footer');if(footer&&!footer.querySelector('.display-controls')){footer.insertAdjacentHTML('beforeend',controls());syncControls();}var title=m.querySelector('.slide-title'),count=m.querySelector('#gsSlideCount,#lvSlideCount,#lvSlideNum,#slideCount');var text=(title?title.textContent:'')+(count?' · '+count.textContent:'');if(text&&text!==announcement){announcement=text;status.textContent=text;}}
  }
  var queued=false;new MutationObserver(function(){if(!queued){queued=true;requestAnimationFrame(function(){queued=false;update();});}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  document.addEventListener('fullscreenchange',function(){if(current&&!current.contains(document.activeElement))focus(current);});update();
 }
 root.DI_SITE={remember:remember,track:track,url:url,next:next,active:active,resume:resume,resumeLabel:resumeLabel,setPref:setPref,controls:controls};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})(window);
