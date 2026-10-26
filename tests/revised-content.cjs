const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={};vm.createContext(c);vm.runInContext('var GCSE_UNITS=[],SLIDES_GCSE={};\n'+fs.readFileSync('js/revised-curriculum.js','utf8'),c);
const ids=c.REVISED_UNITS.flatMap(u=>u.lessons.map(l=>l.id));
assert.equal(ids.length,14);assert.equal(new Set(ids).size,14);assert.deepEqual(Array.from(c.REVISED_UNITS,u=>u.lessons.length),[8,6]);
let slides=0;for(const id of ids){let d=c.REVISED_SLIDES[id];assert(d.length>=4,'content '+id);assert.equal(d.at(-1).type,'exit-ticket','independent exit '+id);for(const s of d){slides++;assert(!JSON.stringify(s).includes('Place official'),'placeholder');if(s.type==='quiz')assert(s.correct>=0&&s.correct<s.options.length);}}
assert(!c.REVISED_SLIDES[201]);assert(!c.REVISED_SLIDES[240]);assert.equal(c.REVISED_LESSON_REDIRECTS[202],102);
console.log({projectSessions:ids.length,slides});
