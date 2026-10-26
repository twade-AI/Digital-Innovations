const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const read=p=>fs.readFileSync(p,'utf8');const c={};vm.createContext(c);
for(const f of ['slides-gcse','passport-data','learning-updates','evidence-tasks','learning-evidence'])vm.runInContext(read('js/'+f+'.js'),c);
const lessons=c.GCSE_UNITS.flatMap(u=>u.lessons),ids=lessons.map(l=>l.id);
assert.equal(ids.length,40);assert.equal(new Set(ids).size,40);assert.deepEqual(Array.from(ids).sort((a,b)=>a-b),Array.from({length:40},(_,i)=>101+i));
assert.equal(c.GCSE_UNITS.length,7);assert.equal(lessons.filter(l=>l.revision==='r3').length,19);
assert.equal(c.PASSPORT_TRACK.length,20);for(const l of c.PASSPORT_TRACK){assert(ids.includes(l.id));assert.equal(l.title,lessons.find(x=>x.id===l.id).title);}
for(const l of lessons){const d=c.SLIDES_GCSE[l.id];assert.equal(d.filter(s=>s.type==='evidence').length,1);assert.equal(d.at(-1).lessonId,l.id);if(l.revision){assert(d.some(s=>s.type==='activity'));assert(d.some(s=>s.type==='concept'));assert(d.some(s=>s.type==='exit-ticket'));}}
assert(JSON.stringify(c.SLIDES_GCSE[102]).includes('Orbitball'));
assert(JSON.stringify(c.SLIDES_GCSE[108]).includes('cool roof'));
assert(JSON.stringify(c.SLIDES_GCSE[110]).includes('6 minutes'));
assert(JSON.stringify(c.SLIDES_GCSE[114]).includes('=SUM(B2:D2)'));
assert(JSON.stringify(c.SLIDES_GCSE[117]).includes('memory-lab'));
for(const id of [105,112,134,123,129,140,133])assert(c.SLIDES_GCSE[id].some(s=>s.type==='assessment'),'unit assessment '+id);
vm.runInContext(read('js/visuals.js'),c);c.SLIDE_VISUALS['102:8']='OLD WRONG POSITION';vm.runInContext(read('js/studio-visuals.js'),c);assert(!c.SLIDE_VISUALS['102:8']);assert(c.SLIDE_VISUALS['102:1']);
const projects={};vm.createContext(projects);vm.runInContext(read('js/revised-curriculum.js'),projects);
for(const [old,id] of Object.entries(projects.REVISED_LESSON_REDIRECTS)){assert(ids.includes(id));assert(!projects.REVISED_SLIDES[old]);}
assert.equal(Object.keys(projects.REVISED_LESSON_REDIRECTS).length,23);
const home=read('index.html');assert(!home.includes('New classroom lessons'));assert(!home.includes('href="revised.html"'));
assert(!read('removes.html').includes('Open the revised lessons'));
const html=read('export/ai-fluency-track.html');assert(html.includes('Orbitball'));assert(html.includes('=SUM(B2:D2)'));assert(html.includes('noteRevision'));assert(html.includes('"revision":"r3"'));
console.log('40 canonical Removes lessons; 19 replacements; 20 shared Passport lessons; 23 redirects; assessments, visuals, evidence and export passed.');
