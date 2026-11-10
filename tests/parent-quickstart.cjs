/* Real-player regression for the unsaved ten-minute route. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const BASE=process.env.COURSE_URL||'http://127.0.0.1:8000';
const ART=path.join(process.env.ARTIFACT_DIR||require('node:os').tmpdir(),'parent-quickstart');
fs.mkdirSync(ART,{recursive:true});
async function stored(page){return page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).sort().map(key=>[key,localStorage.getItem(key)])));}
async function chooseAndFinish(page){
  await page.evaluate(()=>gsJumpSlide(gsSlides.length-1));
  await page.locator('[data-quickstart-choice="1"]').click();
  await page.locator('#gsNextBtn').click();
  await page.waitForSelector('.parent-quickstart-summary');
}
async function axeCheck(page,label,results){
  if(!process.env.AXE_PATH)return;
  await page.addScriptTag({path:process.env.AXE_PATH});
  const violations=await page.evaluate(async()=>{
    const result=await axe.run('#gsModal',{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa','best-practice']}});
    return result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
  });
  assert.deepEqual(violations,[],label);results.push({label,violations});
}
(async()=>{
  const browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
  const context=await browser.newContext({viewport:{width:1280,height:1000}}),page=await context.newPage();
  const errors=[],accessibility=[];page.on('pageerror',error=>errors.push(error.message));
  try{
    await page.goto(BASE+'/parents.html');await page.waitForSelector('.gs-lesson');
    assert.equal(await page.locator('.gs-lesson').count(),15);
    await page.evaluate(()=>{
      const correct=id=>({revision:'parent-v2',answers:PARENT_COMPLETION[id].questions.map(q=>({value:q.correct,submitted:true}))});
      localStorage.setItem('di_parent_checks_v1_301',JSON.stringify(correct(301)));
      localStorage.setItem('di_parent_v1','[301]');
      localStorage.setItem('di_parent_checks_v1_302',JSON.stringify({revision:'parent-v2',answers:[]}));
      localStorage.setItem('di_note_302_r1_0','Existing private note');
      localStorage.setItem('di_resume_parents','307');localStorage.setItem('di_xp','{"total":9}');
      gsLoadProgress();gsUpdateProgress();
    });
    const before=await stored(page),canonical=await page.evaluate(()=>JSON.stringify(SLIDES_GCSE[302]));
    const fullLength=await page.evaluate(()=>SLIDES_GCSE[302].length);
    await page.locator('[onclick="gsOpenQuickStart()"]').click();
    await page.waitForFunction(()=>DI_PARENT_QUICKSTART.active()&&document.getElementById('gsModal').classList.contains('open'));
    await page.waitForFunction(()=>document.getElementById('gsModal').classList.contains('is-fullscreen'));
    assert.equal(await page.evaluate(()=>gsSlides.length),5);
    assert.equal(await page.evaluate(()=>gsSlides.some(s=>s.type==='parent-completion')),false);
    assert.match(await page.locator('#gsUnitLabel').textContent(),/10 minutes/);
    assert.equal(await page.locator('#gsSlideArea textarea').count(),0);
    await axeCheck(page,'desktop introduction',accessibility);
    // Shared keyboard navigation traverses the four canonical explanations.
    await page.locator('#gsLessonTitle').focus();
    for(let i=1;i<5;i++){await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>gsSlideIdx),i);}
    assert(await page.locator('#gsNextBtn').isDisabled());
    assert.equal(await page.evaluate(()=>gsMarkDone(302)),false);
    await page.evaluate(()=>gsShowResults(false));
    assert.equal(await page.locator('.parent-quickstart-summary').count(),0);
    assert.deepEqual(await stored(page),before,'Blocked finish leaves every saved key unchanged');
    await page.locator('[data-quickstart-choice="0"]').click();
    assert(await page.locator('#gsNextBtn').isDisabled());
    assert.match(await page.locator('#quickstartFeedback').textContent(),/booking is required/);
    // Keyboard activation chooses the supported response, without submitting a course check.
    await page.locator('[data-quickstart-choice="1"]').focus();await page.keyboard.press('Enter');
    assert(!(await page.locator('#gsNextBtn').isDisabled()));
    await axeCheck(page,'desktop decision',accessibility);
    await page.locator('#gsNextBtn').focus();await page.keyboard.press('Enter');
    await page.waitForSelector('.parent-quickstart-summary');
    assert(await page.locator('#gsNextBtn').isHidden(),'Summary footer must not retain an inert Next button');
    await axeCheck(page,'desktop summary',accessibility);
    assert.match(await page.locator('.parent-quickstart-home').textContent(),/Which claim are you relying on/);
    assert.deepEqual(await stored(page),before,'Finished taster leaves progress, checks, notes, XP and resume unchanged');
    assert.equal(await page.evaluate(()=>DI_PARENT_CERTIFICATE.eligibility().count),1);
    assert.equal(await page.evaluate(()=>JSON.stringify(SLIDES_GCSE[302])),canonical);
    await page.locator('#gsModal').screenshot({path:path.join(ART,'quickstart-desktop.png')});
    await page.locator('#quickstartBack').click();
    assert.equal(await page.evaluate(()=>DI_PARENT_QUICKSTART.active()),false);
    assert.equal(await page.evaluate(()=>gsSlides.length),0);
    assert.equal(new URL(page.url()).searchParams.has('quickstart'),false);
    // An ordinary lesson after the taster gets its whole canonical deck and normal completion gate.
    await page.evaluate(()=>gsOpenLesson(302));
    assert.equal(await page.evaluate(()=>gsSlides.length),fullLength);
    assert(await page.locator('#gsNextBtn').isVisible(),'Normal lesson navigation must be restored');
    assert.equal(await page.evaluate(()=>gsSlides.at(-1).type),'parent-completion');
    await page.evaluate(()=>{gsJumpSlide(gsSlides.length-1);gsNextSlide();});
    await page.waitForSelector('.parent-completion-message');
    assert.equal(await page.evaluate(()=>gsDone.has(302)),false);
    await page.evaluate(()=>gsCloseLesson());
    // Fourteen completed lessons cannot gain the fifteenth via the taster.
    await page.evaluate(()=>{
      const ids=Array.from({length:15},(_,i)=>301+i).filter(id=>id!==302);
      for(const id of ids)localStorage.setItem('di_parent_checks_v1_'+id,JSON.stringify({revision:'parent-v2',answers:PARENT_COMPLETION[id].questions.map(q=>({value:q.correct,submitted:true}))}));
      localStorage.setItem('di_parent_v1',JSON.stringify(ids));gsLoadProgress();gsUpdateProgress();
    });
    assert.equal(await page.evaluate(()=>DI_PARENT_CERTIFICATE.eligibility().count),14);
    const fourteen=await stored(page);
    await page.evaluate(()=>gsOpenQuickStart());await chooseAndFinish(page);
    assert.deepEqual(await stored(page),fourteen);
    assert(!(await page.locator('#parentCertificateUnlocked').isVisible()));
    await page.locator('#quickstartFullLesson').click();
    assert.equal(await page.evaluate(()=>DI_PARENT_QUICKSTART.active()),false);
    assert.equal(await page.evaluate(()=>gsSlides.length),fullLength);
    assert(await page.locator('#gsNextBtn').isVisible(),'Normal lesson navigation must be restored');
    assert.equal(await page.evaluate(()=>gsSlideIdx),0);
    await page.evaluate(()=>gsCloseLesson());
    // A deep link opens only the taster even if a stale lesson parameter is present.
    const resume=await page.evaluate(()=>localStorage.getItem('di_resume_parents'));
    await page.goto(BASE+'/parents.html?quickstart=1&lesson=305');
    await page.waitForFunction(()=>DI_PARENT_QUICKSTART.active());
    assert.equal(await page.evaluate(()=>localStorage.getItem('di_resume_parents')),resume);
    assert.equal(await page.evaluate(()=>gsSlides.length),5);
    await page.evaluate(()=>gsOpenLesson(999));assert(await page.evaluate(()=>DI_PARENT_QUICKSTART.active()));
    // Phone layout and the same touch navigation continue to work offline.
    await page.setViewportSize({width:390,height:844});
    await page.evaluate(()=>{
      const area=document.getElementById('gsSlideArea');
      const start=new Event('touchstart');Object.defineProperty(start,'touches',{value:[{clientX:200,clientY:100}]});area.dispatchEvent(start);
      const end=new Event('touchend');Object.defineProperty(end,'changedTouches',{value:[{clientX:80,clientY:110}]});area.dispatchEvent(end);
    });
    assert.equal(await page.evaluate(()=>gsSlideIdx),1);
    await page.evaluate(()=>gsJumpSlide(4));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await axeCheck(page,'phone decision',accessibility);
    await page.locator('#gsModal').screenshot({path:path.join(ART,'quickstart-phone.png')});
    await page.evaluate(()=>navigator.serviceWorker.ready);await page.reload();
    await context.setOffline(true);await page.reload();
    await page.waitForFunction(()=>DI_PARENT_QUICKSTART.active());
    await chooseAndFinish(page);
    assert.equal(await page.evaluate(()=>DI_PARENT_CERTIFICATE.eligibility().count),14);
    await page.locator('#quickstartStartCourse').click();
    assert.equal(await page.evaluate(()=>gsCurrentId),301);
    assert.equal(await page.evaluate(()=>DI_PARENT_QUICKSTART.active()),false);
    assert.equal(await page.evaluate(()=>gsSlides.at(-1).type),'parent-completion');
    await context.setOffline(false);
    // A previously completed source lesson still cannot turn the taster into a normal results screen.
    await page.evaluate(()=>{
      gsCloseLesson();localStorage.setItem('di_parent_checks_v1_302',JSON.stringify({revision:'parent-v2',answers:PARENT_COMPLETION[302].questions.map(q=>({value:q.correct,submitted:true}))}));
      localStorage.setItem('di_parent_v1','[302]');gsLoadProgress();gsUpdateProgress();
    });
    const alreadyComplete=await stored(page);await page.evaluate(()=>gsOpenQuickStart());await chooseAndFinish(page);
    assert.deepEqual(await stored(page),alreadyComplete);
    assert.equal(await page.evaluate(()=>JSON.stringify(SLIDES_GCSE[302])),canonical);
    assert.deepEqual(errors,[]);
    const receipt={canonicalLessonUnchanged:true,normalLessonRestored:true,noSavedWorkWrites:true,resumePreserved:true,certificateGatePreserved:true,alreadyCompletedSourceSafe:true,keyboard:true,mobileTouch:true,offline:true,accessibility,errors};
    fs.writeFileSync(path.join(ART,'quickstart-validation.json'),JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify(receipt));
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
