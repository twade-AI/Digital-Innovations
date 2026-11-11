/* Logic checks for the fictional model lab. Browser integration/accessibility
   are exercised separately in parent-family-browser.cjs. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../js/parent-model-lab.js'),'utf8');
let storageTouches=0,awards=0;
const context={
  localStorage:{getItem(){storageTouches++;throw Error('The lab must not read saved course work');},setItem(){storageTouches++;throw Error('The lab must not save course work');}},
  gsMarkDone(){awards++;throw Error('The lab must not mark a lesson complete');},
  gsAwardOnce(){awards++;throw Error('The lab must not award XP');}
};
context.window=context;vm.createContext(context);vm.runInContext(source,context);
const lab=context.DI_PARENT_MODEL,plain=value=>JSON.parse(JSON.stringify(value));
assert(lab&&typeof lab.render==='function'&&typeof lab.simulate==='function');
const first=plain(lab.baseline());
assert.equal(first.correct,4);assert.equal(first.total,8);
assert.deepEqual(first.rows,[{group:'ra',total:2,correct:2},{group:'rt',total:2,correct:2},{group:'ga',total:2,correct:0},{group:'yt',total:2,correct:0}]);
const initialIDs=new Set(first.heldOut.map(item=>item.id));

// Adding examples of both missing groups changes this scripted result, while
// retaining errors: a small, improved result is not universal reliability.
const diverse={ra:0,rt:0,ga:4,yt:4};
const retest=plain(lab.simulate(diverse,2));
assert.equal(retest.trainingTotal,56);assert.equal(retest.addedTraining.length,8);
assert.equal(retest.correct,22);assert.equal(retest.total,24);
assert(retest.rows.every(row=>row.total>0));assert(retest.heldOut.some(item=>!item.correct));
assert.deepEqual(retest,plain(lab.simulate(diverse,2)),'The same choices produce the same clearly scripted result');
assert.deepEqual(diverse,{ra:0,rt:0,ga:4,yt:4},'Simulation must not mutate the chosen split');

// More of the already-covered red groups leaves the omitted groups unresolved.
const redOnly=plain(lab.simulate({ra:8,rt:8,ga:0,yt:0},2));
assert.equal(redOnly.correct,0);assert.equal(redOnly.total,16);
assert.deepEqual(redOnly.missingGroups,['ra','rt']);

// A perfect total can conceal that neither missing group was tested at all.
const misleading=plain(lab.simulate({ra:0,rt:0,ga:8,yt:8},2));
assert.equal(misleading.correct,misleading.total);
assert.deepEqual(misleading.missingGroups,['ga','yt']);
assert.equal(misleading.rows.find(row=>row.group==='ga').total,0);
assert.equal(misleading.rows.find(row=>row.group==='yt').total,0);

// Moving more cards to training also changes the test set; the displayed result
// should not manufacture a guaranteed improvement or hide the smaller sample.
const smallerTest=plain(lab.simulate({ra:0,rt:0,ga:6,yt:6},2));
assert(smallerTest.total<retest.total);
assert(smallerTest.rows.find(row=>row.group==='ga').correct/smallerTest.rows.find(row=>row.group==='ga').total<retest.rows.find(row=>row.group==='ga').correct/retest.rows.find(row=>row.group==='ga').total);

// Every allowed split conserves all 32 new examples, with no training/test leak.
let splits=0;
for(const ra of [0,2,4,6,8])for(const rt of [0,2,4,6,8])for(const ga of [0,2,4,6,8])for(const yt of [0,2,4,6,8]){
  const allocation={ra,rt,ga,yt},result=plain(lab.simulate(allocation,2));
  const trainingIDs=new Set(result.addedTraining.map(item=>item.id));
  const testIDs=new Set(result.heldOut.map(item=>item.id));
  assert.equal(trainingIDs.size,result.addedTraining.length);assert.equal(testIDs.size,result.total);
  assert.equal(trainingIDs.size+testIDs.size,32);
  assert.equal(result.trainingTotal,48+ra+rt+ga+yt);
  for(const id of testIDs){assert(!trainingIDs.has(id));assert(!initialIDs.has(id));}
  for(const id of trainingIDs)assert(!initialIDs.has(id));
  assert.equal(result.rows.reduce((sum,row)=>sum+row.total,0),result.total);
  assert.equal(result.rows.reduce((sum,row)=>sum+row.correct,0),result.correct);
  assert.equal(result.heldOut.filter(item=>item.prediction===item.kind).length,result.correct);
  for(const row of result.rows)assert.equal(row.total,8-allocation[row.group]);
  splits++;
}
assert.equal(splits,625);
const fresh=plain(lab.simulate(diverse,3));
const oldIDs=new Set([...retest.addedTraining,...retest.heldOut].map(item=>item.id));
assert([...fresh.addedTraining,...fresh.heldOut].every(item=>!oldIDs.has(item.id)),'Revising a plan must use a fresh fictional batch');
assert.throws(()=>lab.simulate({ra:-2,rt:0,ga:4,yt:4},2),/Choose 0, 2, 4, 6 or 8/);
assert.throws(()=>lab.simulate({ra:0,rt:0,ga:4,yt:4},1),/fresh test round/);

// Re-rendering the same authored activity keeps its in-page state, and exposing
// a snapshot to diagnostics cannot mutate that state or another lesson's lab.
const markup=lab.render({lessonId:301,labId:'fruit'});
for(const label of ['Red apples','Red tomatoes','Green apples','Yellow tomatoes','Apple shape','Tomato shape'])assert(markup.toLowerCase().includes(label.toLowerCase()));
assert(markup.includes('aria-hidden="true"'),'Fruit labels must remain available as text independently of the decorative SVG');
assert(markup.includes('Colour alone cannot distinguish the two labels'));
assert(markup.includes('data-model-action="reset"'));
assert(markup.includes('https://experience-ai.org/en/units/understanding-ai-11-14/lessons/15'));
const snapshot=lab.inspect(301,'fruit');snapshot.allocations.ga=8;snapshot.phase=3;
assert.equal(lab.inspect(301,'fruit').phase,0);assert.equal(lab.inspect(301,'fruit').allocations.ga,0);
assert.equal(lab.render({lessonId:301,labId:'fruit'}),markup);
assert.equal(lab.inspect(302,'fruit'),null);
assert.equal(storageTouches,0);assert.equal(awards,0);
const receipt={allowedSplitsVerified:splits,deterministic:true,trainingTestDisjoint:true,freshBatches:true,missingGroupsExplicit:true,noGuaranteedImprovement:true,countsConserved:true,defensiveStateSnapshots:true,storageTouches,awards};
const destination=path.join(process.env.ARTIFACT_DIR||require('node:os').tmpdir(),'parent-model-lab');fs.mkdirSync(destination,{recursive:true});fs.writeFileSync(path.join(destination,'model-lab-validation.json'),JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify(receipt));
