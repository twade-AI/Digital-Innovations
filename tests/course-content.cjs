const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={};vm.createContext(c);
for(const f of ['data','slides-u1u2','slides-u3u4','slides-u5u6','slides-critical','slides-advanced','slides-companions','slides-gcse','learning-updates'])vm.runInContext(fs.readFileSync('js/'+f+'.js','utf8'),c);
const all=Object.assign({},...Object.entries(c).filter(([k])=>k.startsWith('SLIDES_')).map(([,v])=>v));
let count=0,quizzes=0;for(const [id,slides] of Object.entries(all)){assert(slides.length>0,id);for(const s of slides){count++;if(s.type==='quiz'&&s.options){quizzes++;assert(Number.isInteger(s.correct)&&s.correct>=0&&s.correct<s.options.length,'quiz '+id);}if(s.type==='activity')assert(s.instructions.includes('Working independently'),'independent route '+id);}}
for(const id of [15,16])assert.equal(all[id].length,8,'stable slide positions');
assert(!JSON.stringify(all[16]).includes('fully active 2025'));
assert(JSON.stringify(all[15]).includes('fictional teaching assumptions'));
console.log(JSON.stringify({decks:Object.keys(all).length,slides:count,quizzes},null,2));
