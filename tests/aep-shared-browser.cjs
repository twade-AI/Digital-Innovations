const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
const BASE=process.env.COURSE_URL||'http://127.0.0.1:8000';
(async()=>{
 const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox']});
 const context=await b.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),p=await context.newPage(),errors=[];
 p.on('pageerror',e=>errors.push(e.message));await p.addInitScript(()=>{try{localStorage.setItem('di_onboarded','1');}catch(e){}});
 await p.goto(BASE+'/index.html');const expected=await p.evaluate(()=>Object.entries(AEP_SHARED_LESSONS).map(([slot,id])=>({slot:Number(slot),id,title:findLesson(Number(slot)).lesson.title,slides:JSON.stringify(getLessonSlides(Number(slot)))})));
 let slides=0;
 for(const lesson of expected){
  await p.goto(BASE+'/index.html?lesson='+lesson.slot);await p.waitForURL('**/removes.html?lesson='+lesson.id+'&aep='+lesson.slot);
  await p.waitForSelector('#gsModal.open.di-reading');await p.waitForFunction(()=>{const r=document.getElementById('gsModal').getBoundingClientRect();return Math.abs(r.width-innerWidth)<1;});await p.evaluate(()=>document.fonts.ready);
  assert.equal(await p.locator('#gsLessonTitle').textContent(),lesson.title);
  assert.equal(await p.evaluate(()=>JSON.stringify(gsSlides)),lesson.slides,'same canonical slides '+lesson.id);
  slides+=await p.evaluate(async()=>{for(let i=0;i<gsSlides.length;i++){gsJumpSlide(i);await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const el=document.getElementById('gsSlideArea');if(!el.textContent.trim()||/Slide failed|\[object Object\]/.test(el.textContent))throw Error('Render '+gsCurrentId+':'+i);if(el.scrollWidth>el.clientWidth+1)throw Error('Overflow '+gsCurrentId+':'+i);}return gsSlides.length;});
  assert(await p.locator('.evidence-studio').isVisible());
 }
 // Shared evidence is the same saved object through both entrances; earlier AEP work survives.
 await p.goto(BASE+'/index.html?lesson=1&evidence=1');await p.waitForSelector('.evidence-studio');await p.locator('[data-ev-field=response]').fill('SHARED FOOTPRINT EVIDENCE');
 await p.evaluate(()=>{localStorage.setItem('di_note_1_0','EARLIER AEP NOTE');localStorage.setItem('di_evidence_v1_1',JSON.stringify({response:'EARLIER AEP EVIDENCE',updatedAt:'2026-10-01'}));localStorage.setItem('di_gcse_v1','[104]');});
 await p.locator('#gsNextBtn').click();assert.deepEqual(await p.evaluate(()=>JSON.parse(localStorage.getItem('di_progress'))),[1]);assert.deepEqual(await p.evaluate(()=>JSON.parse(localStorage.getItem('di_gcse_v1'))),[104]);
 await p.locator('#diResultsPrimary').click();await p.waitForURL('**/removes.html?lesson=105&aep=2');await p.waitForSelector('#gsModal.open');
 await p.evaluate(()=>{gsSlideIdx=gsSlides.length-1;gsRenderSlide();});await p.locator('#gsNextBtn').click();await p.locator('#diResultsPrimary').click();await p.waitForURL('**/index.html?lesson=3');await p.waitForSelector('#aepLessonTitle');
 await p.goto(BASE+'/removes.html?lesson=101&evidence=1');await p.waitForSelector('.evidence-studio');assert.equal(await p.locator('[data-ev-field=response]').inputValue(),'SHARED FOOTPRINT EVIDENCE');
 await p.goto(BASE+'/portfolio.html?t=aep');const portfolio=await p.locator('#pfContent').textContent();for(const marker of ['SHARED FOOTPRINT EVIDENCE','EARLIER AEP NOTE','EARLIER AEP EVIDENCE'])assert(portfolio.includes(marker),marker);
 await p.goto(BASE+'/index.html?lesson=4');await p.waitForSelector('#gsModal.open');await p.evaluate(()=>gsCloseLesson());await p.waitForURL('**/index.html?section=units');assert(await p.locator('#section-units').isVisible());
 // Deep links continue to work after installation without a network.
 await p.evaluate(()=>navigator.serviceWorker.ready);await p.reload();await context.setOffline(true);await p.goto(BASE+'/index.html?lesson=5');await p.waitForSelector('#gsModal.open');assert.equal(await p.evaluate(()=>gsCurrentId),125);await context.setOffline(false);
 assert.deepEqual(errors,[]);const result={sharedLessons:expected.length,sharedSlides:slides,canonicalParity:true,phoneOverflow:false,sequenceAndBack:true,separateCourseProgress:true,sharedEvidence:true,earlierWorkPreserved:true,offline:true,errors};
 fs.writeFileSync((process.env.ARTIFACT_DIR||'/tmp')+'/aep-shared-validation.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));await b.close();
})().catch(e=>{console.error(e);process.exit(1);});
