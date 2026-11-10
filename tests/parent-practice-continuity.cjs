const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const records = new Map();
const context = {localStorage: {getItem: key => records.get(key) || null}};
context.window = context;
vm.createContext(context);
for (const file of ['parent-foundations', 'parent-practicals', 'parent-decisions', 'parent-curriculum', 'parent-interactions']) {
  vm.runInContext(fs.readFileSync('js/' + file + '.js', 'utf8'), context);
}
const originalIndices = {301: 4, 302: 4, 303: 6, 305: 4, 306: 6, 308: 3};
const render = (lesson, slide, index) => context.DI_PARENT_INTERACTIONS.render({...slide, lessonId: lesson.id, slideIndex: index});
const seed = (id, index, question) => records.set('di_parent_practice_v1_' + id + '_' + index, JSON.stringify({revision: 'parent-v2', answers: [{value: question.correct, submitted: true}]}));
let restored = 0, newQuestions = 0;
for (const lesson of context.PARENT_LESSONS) {
  const seen = new Set();
  lesson.slides.forEach((slide, index) => {
    if (slide.type !== 'parent-interaction') return;
    const keyIndex = Number.isInteger(slide.practiceIndex) ? slide.practiceIndex : index;
    assert(!seen.has(keyIndex), 'Practice keys must be unique within lesson ' + lesson.id);
    seen.add(keyIndex);
    if (keyIndex >= 1000) {
      assert(!render(lesson, slide, index).includes('parent-check-status is-correct'), 'A new question must not inherit an old response');
      newQuestions++;
    }
  });
  if (originalIndices[lesson.id] === undefined) continue;
  const original = lesson.slides.find(slide => slide.type === 'parent-interaction' && slide.practiceIndex === originalIndices[lesson.id]);
  assert(original, 'Preserve the original practice key for lesson ' + lesson.id);
  seed(lesson.id, originalIndices[lesson.id], original.question);
  assert(render(lesson, original, lesson.slides.indexOf(original)).includes('parent-check-status is-correct'), 'Restore a submitted answer after teaching slides move');
  restored++;
  assert.equal(context.DI_PARENT_INTERACTIONS.missing(lesson.id).length, 3, 'Practice answers must not satisfy final lesson checks');
}
// Lessons without an explicit key continue reading their existing positional key.
const practical = context.PARENT_LESSONS.find(lesson => lesson.id === 304);
const index = practical.slides.findIndex(slide => slide.type === 'parent-interaction');
seed(practical.id, index, practical.slides[index].question);
assert(render(practical, practical.slides[index], index).includes('parent-check-status is-correct'));
assert.equal(newQuestions, 2);
console.log(JSON.stringify({restoredFoundationResponses: restored, newQuestionsIsolated: newQuestions, positionalFallback: true, finalChecksStillRequired: true}));
