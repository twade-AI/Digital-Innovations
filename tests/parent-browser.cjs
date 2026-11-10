const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
const BASE=process.env.COURSE_URL||'http://127.0.0.1:8000',ART=process.env.ARTIFACT_DIR||'/tmp/parent-course-validation';
fs.mkdirSync(ART,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{localStorage.setItem('di_onboarded','1');Element.prototype.requestFullscreen=()=>Promise.reject(Error('Exercise reading-view fallback'));});
 await page.goto(BASE+'/parents.html');await page.waitForSelector('.gs-lesson');
 assert.equal(await page.locator('.gs-lesson').count(),15);assert.equal(await page.locator('iframe,video').count(),0);
 assert((await page.locator('#parentCourseTitle').textContent()).includes('AI at Home'));
 const sentinel={'di_gcse_v1':'[101]','di_progress':'[5]','fl_progress_removes20_v2':'[101]','di_xp':'{"total":170}','di_evidence_v1_101':'{"response":"PUPIL PRIVATE SENTINEL"}','di_note_101_r3_0':'PUPIL NOTE'};
 await page.evaluate(data=>Object.entries(data).forEach(([k,v])=>localStorage.setItem(k,v)),sentinel);
 // All lesson content must render at phone width, including revealed guidance.
 const rendered=await page.evaluate(async()=>{
  const out=[];for(const l of PARENT_LESSONS){gsOpenLesson(l.id);await new Promise(requestAnimationFrame);for(let i=0;i<gsSlides.length;i++){gsJumpSlide(i);const area=document.getElementById('gsSlideArea');for(const b of area.querySelectorAll('.slide-reveal-btn'))b.click();await new Promise(requestAnimationFrame);if(!area.textContent.trim())throw Error('Empty slide '+l.id+':'+i);if(area.scrollWidth>area.clientWidth+2)throw Error('Overflow '+l.id+':'+i);if(area.querySelector('iframe,video'))throw Error('Video '+l.id);out.push({lesson:l.id,slide:i});}}gsCloseLesson();return out;
 });
 await page.screenshot({path:ART+'/parent-course-phone.png',fullPage:true});
 // No mandatory writing: the final checks use native on-screen controls.
 await page.evaluate(()=>{gsOpenLesson(301);gsJumpSlide(gsSlides.length-1);});
 assert.equal(await page.locator('#gsSlideArea textarea').count(),0);
 await page.locator('#gsNextBtn').click();assert(await page.locator('.parent-completion-message').isVisible());
 assert.equal(await page.evaluate(()=>gsDone.has(301)),false);
 // Exercise choice, multiple-selection and ordering through their real UI.
 async function answerChecks(p,id){
  await p.evaluate(id=>{gsOpenLesson(id);gsJumpSlide(gsSlides.length-1);},id);
  const questions=await p.evaluate(id=>PARENT_COMPLETION[id].questions,id);
  for(let i=0;i<questions.length;i++){
   const q=questions[i],form=p.locator('.parent-question').nth(i);
   if(q.kind==='choice')await form.locator('input[type=radio]').nth(q.correct).check();
   else if(q.kind==='select'){for(const j of q.correct)await form.locator('input[type=checkbox]').nth(j).check();}
   else for(let j=0;j<q.correct.length;j++)await form.locator('select').nth(j).selectOption(String(q.correct[j]));
   await form.locator('button[type=submit]').click();
  }
 }
 await answerChecks(page,301);
 await page.locator('#gsNextBtn').click();await page.waitForSelector('.parent-results');
 assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('di_parent_v1'))),[301]);
 for(const [k,v] of Object.entries(sentinel))assert.equal(await page.evaluate(k=>localStorage.getItem(k),k),v,'Pupil state changed '+k);
 await page.locator('#diResultsPrimary').click();assert.equal(await page.evaluate(()=>gsCurrentId),302);
 await page.reload();assert.equal(await page.evaluate(()=>gsDone.has(301)),true);
 // Save/restore carries interactive check records to another browser.
 await page.goto(BASE+'/work.html');const download=page.waitForEvent('download');await page.locator('#backupBtn').click();const file=await(await download).path(),backup=JSON.parse(fs.readFileSync(file));assert(backup.entries.di_parent_v1);assert(backup.entries.di_parent_checks_v1_301);
 const other=await browser.newContext({viewport:{width:390,height:844}}),q=await other.newPage();q.on('pageerror',e=>errors.push(e.message));await q.goto(BASE+'/work.html');await q.locator('#backupFile').setInputFiles(file);await q.locator('#restoreBtn').click();await q.goto(BASE+'/parents.html');await q.waitForSelector('.gs-lesson');assert.equal(await q.evaluate(()=>gsDone.has(301)),true);
 // Editing a submitted answer revokes completion until rechecked correctly.
 await q.evaluate(()=>{gsOpenLesson(301);gsJumpSlide(gsSlides.length-1);});
 const first=await q.evaluate(()=>PARENT_COMPLETION[301].questions[0]);
 if(first.kind==='choice')await q.locator('.parent-question').first().locator('input[type=radio]').nth((first.correct+1)%first.options.length).check();
 else if(first.kind==='select')await q.locator('.parent-question').first().locator('input[type=checkbox]').first().click();
 else await q.locator('.parent-question').first().locator('select').first().selectOption('');
 assert.equal(await q.evaluate(()=>gsDone.has(301)),false);await other.close();
 // Discoverability, resume and isolated course selection.
 await page.goto(BASE+'/index.html');assert(await page.locator('a[href="parents.html"]').count());await page.evaluate(()=>{DI_SITE.remember('parents',302);handleSearch('AI at Home');});assert(await page.locator('#searchResults a[href*="parents.html"]').count());
 await page.locator('.mob-tab-center').click();await page.waitForURL('**/parents.html?lesson=302');await page.waitForSelector('#gsModal.open');
 await page.waitForFunction(()=>document.activeElement.id==='gsLessonTitle');assert(await page.locator('.gs-shell').evaluate(e=>e.inert));
 await page.locator('#gsModal button:visible').last().focus();await page.keyboard.press('Tab');assert(await page.evaluate(()=>!!document.activeElement.closest('#gsModal')));
 // Ordering controls retain native arrow keys instead of moving the lesson.
 await page.evaluate(()=>{gsOpenLesson(304);gsJumpSlide(gsSlides.length-1);});
 const orderSelect=page.locator('.parent-question select').first();await orderSelect.focus();
 const currentSlide=await page.evaluate(()=>gsSlideIdx);await page.keyboard.press('ArrowDown');
 assert.equal(await page.evaluate(()=>gsSlideIdx),currentSlide);await page.keyboard.press('Escape');assert(await page.locator('#gsModal.open').count());
 // Screen-reader labels and contrast on key lesson surfaces in all supported modes.
 const accessibility=[];
 for(const theme of ['light','dark','high'])for(const target of [{id:303,index:1},{id:309,index:3},{id:315,evidence:true}]){
  await page.goto(BASE+'/parents.html?lesson='+target.id+(target.evidence?'&evidence=1':''));await page.waitForSelector('#gsModal.open');await page.evaluate(target=>gsJumpSlide(target.evidence?gsSlides.length-1:target.index),target);
  await page.evaluate(t=>{DI_SITE.setPref('theme',t==='light'?'light':'dark');DI_SITE.setPref('contrast',t==='high'?'high':'normal');},theme);
  if(process.env.AXE_PATH){await page.addScriptTag({path:process.env.AXE_PATH});const r=await page.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa','best-practice']}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:r.incomplete.map(v=>v.id)};});accessibility.push({theme,lesson:target.id,...r});assert.equal(r.violations.length,0,JSON.stringify(accessibility.at(-1)));}
 }
 await page.setViewportSize({width:320,height:800});await page.evaluate(()=>{document.documentElement.style.fontSize='200%';gsOpenLesson(309);gsJumpSlide(4);});assert(await page.evaluate(()=>{const a=document.getElementById('gsSlideArea');return a.scrollWidth<=a.clientWidth+2}),'200% text reflow');assert(await page.locator('#gsNextBtn').isVisible());await page.screenshot({path:ART+'/parent-lesson-enlarged.png'});
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>{document.documentElement.style.fontSize='';DI_SITE.setPref('contrast','normal');DI_SITE.setPref('theme','light');gsOpenLesson(304);gsJumpSlide(6);});await page.screenshot({path:ART+'/parent-practical-desktop.png'});
 // A successfully installed cache supports new parent deep links offline.
 await page.evaluate(()=>navigator.serviceWorker.ready);await page.reload();await context.setOffline(true);await page.goto(BASE+'/parents.html?lesson=310');await page.waitForSelector('#gsModal.open');assert.equal(await page.evaluate(()=>gsCurrentId),310);assert.equal(await page.locator('#gsSlideArea textarea').count(),0);await context.setOffline(false);
 assert.deepEqual(errors,[]);const result={lessons:15,renderedSlides:rendered.length,noVideo:true,completionGate:true,noWrittenSubmissions:true,backupRestore:true,pupilStatePreserved:true,resume:true,keyboardDialog:true,textReflow:true,offline:true,accessibility,errors};fs.writeFileSync(ART+'/parent-validation.json',JSON.stringify(result,null,2));console.log(JSON.stringify({...result,accessibility:accessibility.length}));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
