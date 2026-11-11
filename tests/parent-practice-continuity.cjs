const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const baseline = JSON.parse(fs.readFileSync('tests/fixtures/parent-practice-baseline.json', 'utf8'));
function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  return value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
}
const hash = value => crypto.createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');
const records = new Map();
for (const lesson of baseline.lessons) for (const item of lesson.practice) {
  records.set('di_parent_practice_v1_' + lesson.id + '_' + item.keyIndex,
    JSON.stringify({revision: 'parent-v2', answers: [{value: item.correct, submitted: true}]}));
}
const originalRecords = JSON.stringify([...records]);
const context = {localStorage: {
  getItem: key => records.get(key) || null,
  setItem: (key, value) => records.set(key, value),
  removeItem: key => records.delete(key)
}};
context.window = context;
vm.createContext(context);
for (const file of ['parent-foundations', 'parent-practicals', 'parent-decisions', 'parent-curriculum', 'parent-interactions']) {
  vm.runInContext(fs.readFileSync('js/' + file + '.js', 'utf8'), context);
}
let restored = 0, retired = 0, newQuestions = 0;
assert.deepEqual(Array.from(context.PARENT_LESSONS, lesson => lesson.id).sort(), baseline.lessons.map(lesson => lesson.id).sort());
for (const lesson of context.PARENT_LESSONS) {
  const prior = baseline.lessons.find(item => item.id === lesson.id);
  assert.equal(hash(lesson.completion), prior.completionHash, 'Final checks must stay compatible for lesson ' + lesson.id);
  const seen = new Set(), retained = new Set();
  lesson.slides.forEach((slide, index) => {
    if (slide.type !== 'parent-interaction') return;
    const keyIndex = Number.isInteger(slide.practiceIndex) ? slide.practiceIndex : index;
    assert(!seen.has(keyIndex), 'Practice keys must be unique within lesson ' + lesson.id);
    seen.add(keyIndex);
    const questionHash = hash(slide.question);
    const previousAtKey = prior.practice.find(item => item.keyIndex === keyIndex);
    if (previousAtKey) assert.equal(questionHash, previousAtKey.questionHash, 'Never reuse a legacy practice key for a changed question: ' + lesson.id + '/' + keyIndex);
    const previousQuestion = prior.practice.find(item => item.questionHash === questionHash);
    const rendered = context.DI_PARENT_INTERACTIONS.render({...slide, lessonId: lesson.id, slideIndex: index});
    if (previousQuestion) {
      assert.equal(keyIndex, previousQuestion.keyIndex, 'A retained question must keep its saved key');
      assert(rendered.includes('parent-check-status is-correct'), 'A submitted legacy answer must restore after slides move');
      retained.add(keyIndex); restored++;
    } else {
      assert(!rendered.includes('parent-check-status is-correct'), 'A new question must not inherit a saved answer');
      newQuestions++;
    }
  });
  retired += prior.practice.filter(item => !retained.has(item.keyIndex)).length;
  assert.equal(context.DI_PARENT_INTERACTIONS.missing(lesson.id).length, 3, 'Practice answers cannot satisfy final lesson checks');
}
assert.equal(JSON.stringify([...records]), originalRecords, 'Reading new activities must leave all legacy records intact, including retired questions');
// Positional fallback remains supported for an unkeyed question outside the authored curriculum.
const synthetic = {kind: 'choice', prompt: 'Fallback compatibility check', options: ['A', 'B'], correct: 1, explanation: 'The stored selection belongs to this unchanged question.'};
records.set('di_parent_practice_v1_999_7', JSON.stringify({revision: 'parent-v2', answers: [{value: 1, submitted: true}]}));
assert(context.DI_PARENT_INTERACTIONS.render({type: 'parent-interaction', lessonId: 999, slideIndex: 7, question: synthetic}).includes('parent-check-status is-correct'));
console.log(JSON.stringify({restoredLegacyResponses: restored, reservedRetiredKeys: retired, newQuestionsIsolated: newQuestions, unchangedCompletionSets: 15, originalRecordsUntouched: true, positionalFallback: true, finalChecksStillRequired: true}));
