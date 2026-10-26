const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={};c.window=c;vm.createContext(c);
for(const f of ['data','slides-gcse','aep-curriculum','slides-u1u2','slides-u3u4','slides-u5u6','slides-critical','slides-advanced','slides-companions','quiz-bank','visuals','labs','learning-updates','shared-content-review','studio-visuals','aep-enrichment','evidence-tasks','learning-evidence'])vm.runInContext(fs.readFileSync('js/'+f+'.js','utf8'),c);
const units=vm.runInContext('UNITS',c),ids=units.flatMap(u=>u.lessons.map(l=>l.id)),all=Object.assign({},c.SLIDES_U1U2,c.SLIDES_U3U4,c.SLIDES_U5U6,c.SLIDES_CRITICAL,c.SLIDES_ADVANCED,c.SLIDES_COMPANIONS);
assert.equal(units.length,6);assert.equal(ids.length,59);assert.equal(new Set(ids).size,59);
assert.deepEqual(Array.from(ids).sort((a,b)=>a-b),Array.from({length:59},(_,i)=>i+1));
// These positions predate the refresh. Notes and reflections use lesson ID + slide index.
const baseline=JSON.parse(fs.readFileSync('tests/fixtures/aep-slide-positions.json','utf8'));
let slides=0,labs=0,quizzes=0;
for(const id of ids){const shared=c.AEP_SHARED_LESSONS[id];if(shared){assert(!all[id],'no duplicate deck '+id);assert(c.SLIDES_GCSE[shared].at(-1).type==='evidence');continue;}const deck=all[id],base=deck.filter(s=>s.type!=='evidence');assert.equal(base.length,baseline[id].length,'base count '+id);
 assert.deepEqual(Array.from(base.map((s,i)=>s.type==='discussion'?i:null).filter(i=>i!==null)),baseline[id].reflections,'reflection positions '+id);
 assert.equal(deck.filter(s=>s.type==='evidence').length,1,'evidence '+id);
 assert.equal(deck.at(-1).type,'evidence');assert(base.some(s=>s.type==='activity'),'independent activity '+id);
 assert(base.some(s=>s.sources&&s.sources.length),'source links '+id);
 assert(Object.keys(c.SLIDE_VISUALS).some(k=>k.startsWith(id+':')),'diagram '+id);
 assert(c.DI_EVIDENCE_TASKS[id].transfer&&!c.DI_EVIDENCE_TASKS[id].transfer.includes('your the '));
 const injected=c.DI_LABS_INJECT(id,deck);assert.equal(injected.at(-1).type,'evidence');assert.equal(injected.filter(s=>s.type==='evidence').length,1);
 for(const s of injected){slides++;if(s.type==='activity')assert(/Working independently/.test(s.instructions),'solo '+id+':'+s.title);if(s.type==='widget'){labs++;assert(s.intro&&s.debrief,'lab framing '+id);}if(s.type==='quiz'){quizzes++;assert(s.options[s.correct]&&s.explanation,'valid quiz '+id);}}
 for(const q of c.QUIZ_BANK[id])assert(q.options[q.correct]&&q.explanation);
}
const text=JSON.stringify(all);for(const phrase of ['universities use AI detection','$6M','300 million jobs','23% more','single factor most important','Why LLMs Fail at Character','embedded in the software of every autonomous vehicle','Thaler v. Vidal'])assert(!text.includes(phrase),'obsolete claim '+phrase);
assert(text.includes('350')&&text.includes('4,000'));
const resources=vm.runInContext('RESOURCE_CONTENT',c);for(const id of ['r12','r13','r14','r15','r16','r17','r18','r20'])assert(resources[id].includes('Reviewed 26 October 2026'));
assert(!resources.r14.includes('UK and US copyright law requires a human'));
assert(!resources.r20.includes('suicide'));
assert(fs.readFileSync('index.html','utf8').includes('js/aep-enrichment.js'));
assert(fs.readFileSync('sw.js','utf8').includes("'./js/aep-enrichment.js'"));
console.log(JSON.stringify({lessons:ids.length,sharedLessons:Object.keys(c.AEP_SHARED_LESSONS).length,specialistLessons:Object.keys(all).length,slides,reviewedLabSlides:labs,quizzes,stableBaseCounts:true,stableReflectionPositions:true,evidenceAndSources:true}));
