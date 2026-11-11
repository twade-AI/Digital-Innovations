'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../js/parent-design-lab.js'), 'utf8');
const context = {localStorage: {setItem(){throw new Error('Workshop must not save progress');},getItem(){throw new Error('Workshop must not read progress');}}};
vm.createContext(context);
vm.runInContext(source, context);
const api = context.DI_PARENT_DESIGN;
const {initial, reduce, evaluate} = api._test;
const doAction = (s,type,extra={}) => reduce(s,{type,...extra});
function ready(variant='family') {
  let s=initial(variant);
  for(let i=0;i<3;i++)s=doAction(s,'criterion',{index:i});
  return doAction(s,'agree');
}
function fill(s,amounts) {
  for(let index=0;index<amounts.length;index++)for(let n=0;n<amounts[index];n++)s=doAction(s,'move',{index,delta:1});
  return s;
}
// Agreement cannot be bypassed; forged or out-of-stage controls have no effect.
assert.equal(doAction(initial(),'agree').stage,0);
assert.equal(doAction(initial(),'decision',{index:0}).stage,0);
assert.equal(doAction(initial(),'design',{index:0}).stage,0);
assert.equal(ready().stage,1);

// First draft is arithmetically impossible; actual board never creates counters.
let impossible=doAction(ready(),'design',{index:0});
impossible=fill(impossible,[6,6,6,6]);
assert.equal(impossible.board.reduce((a,b)=>a+b,0),12);
assert.equal(evaluate(impossible).ok,false);
assert.match(evaluate(impossible).message,/24.*12/);
assert.equal(doAction(impossible,'revise').stage,2,'Inspect a test result before revision');
impossible=doAction(impossible,'test');
assert.equal(doAction(impossible,'revise').stage,3);

// A correct total does not pass a failed participation rule.
let monopolised=fill(doAction(ready(),'design',{index:1}),[3,3,3,3]);
assert.equal(evaluate(monopolised).ok,false);
assert.match(evaluate(monopolised).message,/one person/);

// Both valid revisions work in both settings. A reasoning move must happen
// before the changed brief; a correct starting allocation alone is insufficient.
for(const variant of ['family','sixth'])for(const revision of [0,1]) {
  let s=fill(doAction(ready(variant),'design',{index:2}),[3,3,3,3]);
  s=doAction(s,'test');assert.equal(s.result.ok,true);
  s=doAction(s,'revise');s=doAction(s,'revision',{index:revision});
  const targets=revision===0?[3,3,3,3]:[1,2,4,5];
  s=fill(s,targets);s=doAction(s,'test');assert.equal(s.result.ok,true);
  assert.equal(doAction(s,'change').stage,4,'Must play the reasoning round');
  s=doAction(s,'play');assert.equal(s.round,true);
  s=doAction(s,'test');assert.equal(s.result.ok,false,'An unchanged allocation is not a reasoning move');
  s=doAction(s,'move',{index:3,delta:-1});
  s=doAction(s,'move',{index:0,delta:1});
  s=doAction(s,'test');assert.equal(s.result.ok,true);
  s=doAction(s,'change');assert.equal(s.stage,5);
  s=fill(s,[0,0,0,10]);s=doAction(s,'test');assert.equal(s.result.ok,false,'Every area must still be involved');
  // Empty the board and build a distinct valid ten-token design.
  for(let i=0;i<10;i++)s=doAction(s,'move',{index:3,delta:-1});
  s=fill(s,[1,2,3,4]);s=doAction(s,'test');assert.equal(s.result.ok,true);
  s=doAction(s,'reflect');assert.equal(s.stage,6);
  for(let decision=0;decision<3;decision++) {
    const end=doAction(s,'decision',{index:decision});
    assert.equal(end.stage,7,'All defensible human priorities accepted');
    const reset=doAction(end,'reset');
    assert.equal(reset.stage,0);assert.equal(reset.variant,variant);
    assert.equal(reset.board.reduce((a,b)=>a+b,0),0);
    assert.equal(reset.decision,null);
  }
}
// A bad revision cannot reach the fresh constraint and must be repairable.
let bad=doAction(doAction(doAction(fill(doAction(ready(),'design',{index:2}),[3,3,3,3]),'test'),'revise'),'revision',{index:2});
bad=doAction(fill(bad,[4,4,4,4]),'test');
assert.equal(bad.result.ok,false);
assert.equal(doAction(bad,'change').stage,4);
assert.equal(doAction(bad,'rechoose').stage,3);

// Rendering escapes authored text, recognises only its slide type, and remains
// an isolated activity with no completion or persistence dependency.
assert.equal(api.render({type:'concept'}),'');
const html=api.render({type:'parent-design-lab',lessonId:'304" onclick="evil()',labId:'<img>',title:'<script>bad()</script>'});
assert.ok(!html.includes('<script>bad()'));
assert.ok(html.includes('&lt;script&gt;bad()&lt;/script&gt;'));
assert.ok(html.includes('<pre'));
assert.ok(!html.includes('<textarea'));
assert.ok(html.includes('role="status"'));
const progressStart = html.indexOf('<ol class="pdl-progress"');
const progressClose = html.indexOf('</ol>', progressStart);
const stageStart = html.indexOf('<div class="pdl-stage">', progressStart);
assert.ok(progressStart >= 0 && progressClose > progressStart && progressClose < stageStart, 'Close the progress list before the workshop stage');
assert.equal((html.slice(progressStart, progressClose).match(/<li(?: |>|\n)/g) || []).length, 8, 'Progress list contains the eight stage entries');
assert.ok(!/localStorage|PARENT_COMPLETION|gsMarkDone|fetch\(/.test(source));
assert.equal(api._test.prompt(initial('sixth')).includes('tokens are not real prices'),true);
console.log('Parent design lab: resource limits, participation, repairs, reasoning round, changed brief, reset and rendering passed.');
