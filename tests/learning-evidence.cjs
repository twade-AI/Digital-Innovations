const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const read=p=>fs.readFileSync(p,'utf8');
const c={};vm.createContext(c);
for(const f of ['data','slides-u1u2','slides-u3u4','slides-u5u6','slides-critical','slides-advanced','slides-companions','slides-gcse','passport-data','evidence-tasks','learning-evidence'])vm.runInContext(read('js/'+f+'.js'),c);
const ids=Array.from(c.PASSPORT_IDS);assert.equal(ids.length,20);assert.equal(new Set(ids).size,20);
const removes=c.GCSE_UNITS.flatMap(u=>u.lessons.map(l=>l.id));assert(ids.every(id=>removes.includes(id)));
for(const id of removes){assert.equal(c.SLIDES_GCSE[id].filter(s=>s.type==='evidence').length,1);assert.equal(c.SLIDES_GCSE[id].at(-1).lessonId,id);}
const all=Object.assign({},c.SLIDES_U1U2,c.SLIDES_U3U4,c.SLIDES_U5U6,c.SLIDES_CRITICAL,c.SLIDES_ADVANCED,c.SLIDES_COMPANIONS,c.SLIDES_GCSE);
for(const [id,deck] of Object.entries(all)){assert(deck.at(-1).type==='evidence','missing evidence '+id);assert(c.DI_EVIDENCE_TASKS[id].checks.length===3);}
const previousLengths=Object.fromEntries(Object.entries(all).map(([id,s])=>[id,s.length]));vm.runInContext(read('js/learning-evidence.js'),c);for(const [id,s]of Object.entries(all))assert.equal(s.length,previousLengths[id],'duplicate attachment');
vm.runInContext(read('js/revised-curriculum.js'),c);vm.runInContext(read('js/learning-evidence.js'),c);assert.equal(Object.keys(c.REVISED_SLIDES).length,37);for(const [id,s]of Object.entries(c.REVISED_SLIDES))assert.equal(s.at(-1).lessonId,Number(id));
assert.equal(Object.keys(c.DI_EVIDENCE_TASKS).length,136);assert.equal(new Set(Object.values(c.DI_EVIDENCE_TASKS).map(t=>t.title)).size,136);
const exportPage=read('export/ai-fluency-track.html');assert(!/<script[^>]*src="js\//.test(exportPage));assert(exportPage.includes('fl_progress_removes20_v2'));assert(exportPage.includes('DI-FL20-'));
// Recoverable, safely escaped saved work, including when storage is denied.
c.localStorage={getItem(){return JSON.stringify({response:'<img src=x onerror=alert(1)>',reasoning:'a & b'});}};
let html=c.DI_EVIDENCE.render({lessonId:101});assert(!html.includes('<img src=x'));assert(html.includes('&lt;img'));c.localStorage={getItem(){throw Error('blocked');}};assert(c.DI_EVIDENCE.render({lessonId:101}).includes('Saves on this device only'));
console.log('136 unique evidence briefs; 20 Removes-only Passport lessons; attachment, escaping and export checks passed.');
// Filtered Passport bundles must not acquire or attempt to patch absent AEP decks.
const partial={SLIDES_U3U4:{},SLIDES_GCSE:{101:[]}};vm.createContext(partial);vm.runInContext(read('js/learning-updates.js'),partial);assert.deepEqual(Object.keys(partial.SLIDES_U3U4),[]);
// Appending evidence must keep the previous lab and summary positions intact.
const inject=read('js/labs.js').match(/window\.DI_LABS_INJECT = function \(id, slides\) \{[\s\S]*?\n\};/)[0];const lab={DI_LAB_SLIDES:{101:[{type:'widget',widget:'test'}]},DI_LABS:{test:{} }};lab.window=lab;vm.createContext(lab);vm.runInContext(inject,lab);const base=[{type:'hook'},{type:'summary'}],end={type:'evidence',lessonId:101};assert.equal(JSON.stringify(lab.DI_LABS_INJECT(101,[...base,end])),JSON.stringify([...lab.DI_LABS_INJECT(101,base),end]));
