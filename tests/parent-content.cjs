const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={};c.window=c;vm.createContext(c);
function run(name){vm.runInContext(fs.readFileSync('js/'+name+'.js','utf8'),c);}
for(const file of ['data','slides-gcse','aep-curriculum','passport-data'])run(file);
const pupilBefore=JSON.stringify({removes:c.GCSE_UNITS,slides:c.SLIDES_GCSE,passport:c.PASSPORT_TRACK,aep:vm.runInContext('UNITS',c)});
for(const file of ['parent-foundations','parent-practicals','parent-decisions','parent-curriculum'])run(file);
assert.equal(JSON.stringify({removes:c.GCSE_UNITS,slides:c.SLIDES_GCSE,passport:c.PASSPORT_TRACK,aep:vm.runInContext('UNITS',c)}),pupilBefore,'Parent assembly must not alter pupil lessons');
assert.equal(c.GCSE_UNITS.flatMap(u=>u.lessons).length,40);assert.equal(c.PASSPORT_TRACK.length,20);assert.equal(vm.runInContext('UNITS.flatMap(u=>u.lessons).length',c),59);
const lessons=c.PARENT_UNITS.flatMap(u=>u.lessons),ids=Array.from(lessons,l=>l.id);
assert.deepEqual(ids,Array.from({length:15},(_,i)=>301+i));
let slides=0,quizzes=0,activities=0,interactions=0,labs=0;
function checkQuestion(q){assert(['choice','select','order'].includes(q.kind));assert(q.prompt&&q.explanation?.length>35);assert(q.options.length>=(q.kind==='choice'?2:3));const indices=q.kind==='choice'?[q.correct]:Array.from(q.correct);assert(indices.length>0&&new Set(indices).size===indices.length);assert(indices.every(i=>Number.isInteger(i)&&i>=0&&i<q.options.length));if(q.kind==='order')assert.equal(indices.length,q.options.length);}
for(const l of c.PARENT_LESSONS){
 assert.equal(l.n,l.id-300);assert(l.goal&&l.desc&&l.title);
 const deck=c.PARENT_SLIDES[l.id];assert(deck.length>=8,`A complete teaching sequence for ${l.id}`);
 assert(deck.some(s=>s.type==='scenario'||s.type==='parent-interaction'),`Decision practice ${l.id}`);
 assert(deck.some(s=>s.reveal||s.question?.explanation),`Worked comparison ${l.id}`);
 assert(deck.some(s=>s.type==='quiz'||s.type==='parent-interaction'||(s.type==='activity'&&s.reveal)),`Understanding check ${l.id}`);
 assert(deck.some(s=>s.type==='parent-interaction'||(s.type==='activity'&&s.steps?.length>=3)),`Usable task or interaction ${l.id}`);
 for(const s of deck){slides++;assert(!['video','iframe'].includes(s.type));assert(!/<(?:iframe|video)\b|youtube(?:-nocookie)?\.com\/embed/i.test(JSON.stringify(s)),`No video dependency ${l.id}`);
  if(s.type==='quiz'){quizzes++;assert(Number.isInteger(s.correct)&&s.correct>=0&&s.correct<s.options.length);assert(s.explanation?.length>40);}
  if(s.type==='activity')activities++;
  if(s.type==='parent-interaction'){interactions++;checkQuestion(s.question);}
  if(['parent-model-lab','parent-design-lab'].includes(s.type)){labs++;assert(s.title&&s.sources?.length,'Labs explain their purpose and attribution');}
  for(const source of s.sources||[]){if(source.url)assert(/^https:\/\//.test(source.url)||(/^removes\.html\?lesson=\d+$/.test(source.url)&&c.GCSE_UNITS.flatMap(u=>u.lessons).some(l=>l.id===Number(source.url.split('=')[1]))));assert(!/docs\.google\.com\/(document|presentation)/.test(source.url||''),'No private source documents in public lesson links');}
 }
 const completion=c.PARENT_COMPLETION[l.id];assert.equal(completion.questions.length,3);completion.questions.forEach(checkQuestion);assert(completion.questions.some(q=>q.kind!=='choice'));assert.equal(deck.at(-1).type,'parent-completion');assert(!l.evidence&&!l.feedback,'No written evidence assignments');
 assert(/Haileybury/.test(JSON.stringify(deck)),`School approach in lesson ${l.id}`);
}
c.localStorage={getItem(){return null;}};
run('course-catalog');assert.equal(c.DI_COURSES.parents.lessons.length,15);assert.equal(c.DI_COURSES.parents.key,'di_parent_v1');
run('work-backup');assert(c.DI_BACKUP.allowed('di_parent_v1'));assert(c.DI_BACKUP.allowed('di_parent_completed_at'));assert(c.DI_BACKUP.allowed('di_evidence_v1_301'));assert(!c.DI_BACKUP.allowed('sb-token'));
console.log(JSON.stringify({parentLessons:15,renderedSlides:slides,teachingSlides:slides-15,quizzes,activities,interactions,interactiveLabs:labs,estimatedMinutes:c.PARENT_LESSONS.reduce((total,l)=>total+l.minutes,0),completionQuestions:45,pupilCountsPreserved:[40,20,59],videoDependencies:0,isolatedIds:true}));
