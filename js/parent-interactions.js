/* Parent-only interactive checks. Saved answer values are always checked against
   the current authored questions; stored booleans never establish completion. */
(function (root) {
  'use strict';
  var REVISION = 'parent-v2', forms = Object.create(null), blocked = Object.create(null);
  var practice = Object.create(null), serial = 0;
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function questions(id) {
    var item = root.PARENT_COMPLETION && root.PARENT_COMPLETION[id];
    return item && Array.isArray(item.questions) ? item.questions : [];
  }
  function completionKey(id) { return 'di_parent_checks_v1_' + id; }
  function validIndex(value, count) { return Number.isInteger(value) && value >= 0 && value < count; }
  function normalise(question, value) {
    if (!question || !Array.isArray(question.options)) return null;
    var count = question.options.length;
    if (question.kind === 'choice') return validIndex(value, count) ? value : null;
    if (!Array.isArray(value)) return null;
    if (question.kind === 'select') {
      if (value.some(function (v) { return !validIndex(v, count); }) || new Set(value).size !== value.length) return null;
      return value.slice().sort(function (a, b) { return a - b; });
    }
    if (question.kind === 'order') {
      if (value.length !== count || value.some(function (v) { return v !== null && !validIndex(v, count); })) return null;
      return value.slice();
    }
    return null;
  }
  function isCorrect(question, value) {
    var actual = normalise(question, value), expected = normalise(question, question && question.correct);
    if (actual === null || expected === null) return false;
    if (question.kind === 'choice') return actual === expected;
    if (question.kind === 'order' && (actual.indexOf(null) !== -1 || expected.indexOf(null) !== -1 || new Set(actual).size !== actual.length || new Set(expected).size !== expected.length)) return false;
    return actual.length === expected.length && actual.every(function (v, i) { return v === expected[i]; });
  }
  function readRecord(key, list) {
    var raw = null, error = !!blocked[key];
    try { raw = JSON.parse(root.localStorage.getItem(key)); }
    catch (e) { error = true; }
    var saved = raw && raw.revision === REVISION && Array.isArray(raw.answers) ? raw.answers : [];
    var answers = list.map(function (q, i) {
      var item = saved[i], value = normalise(q, item && item.value);
      var submitted = !!item && item.submitted === true && value !== null;
      return {value:value, submitted:submitted, correct:!error && submitted && isCorrect(q, value)};
    });
    return {revision:REVISION, answers:answers, verified:answers.map(function (a) { return a.correct; }), storageError:error};
  }
  function read(id) { return readRecord(completionKey(id), questions(id)); }
  function missing(id) {
    var list = questions(id), saved = read(id);
    if (list.length !== 3) return ['The three lesson checks are not available. Please reload the course.'];
    return list.reduce(function (out, q, i) {
      if (!saved.verified[i]) out.push('Check ' + (i + 1) + ': ' + (q.prompt || 'Choose and check your response'));
      return out;
    }, []);
  }
  function announceChange(id) {
    if (root.document) root.document.dispatchEvent(new root.CustomEvent('parent-checks-changed', {detail:{id:id}, bubbles:true}));
  }
  function save(key, answers) {
    var record = {revision:REVISION, answers:answers.map(function (a) { return {value:a.value, submitted:a.submitted === true}; })};
    var encoded = JSON.stringify(record);
    try {
      root.localStorage.setItem(key, encoded);
      if (root.localStorage.getItem(key) !== encoded) throw new Error('Storage verification failed');
      delete blocked[key];
      return true;
    } catch (e) {
      blocked[key] = true;
      // Remove an older correct record if possible so a failed edit cannot leave
      // stale completion behind on the next visit.
      try { root.localStorage.removeItem(key); } catch (ignored) { /* Announced below. */ }
      return false;
    }
  }
  function recordFor(context) {
    if (context.key) return readRecord(context.key, context.list);
    var answer = practice[context.memoryKey] || {value:null, submitted:false};
    return {answers:[answer], verified:[answer.submitted && isCorrect(context.list[0], answer.value)], storageError:false};
  }
  function feedback(question, answer, error) {
    if (error) return 'Your response could not be saved on this device. Lesson completion is paused. Check your browser storage settings, then choose Check answer again.';
    if (!answer.submitted) return '';
    return (isCorrect(question, answer.value) ? 'Correct. ' : 'Not quite yet. ') + (question.explanation || 'Review the choices and try again.') + (isCorrect(question, answer.value) ? '' : ' You can change your response and check again.');
  }
  function formMarkup(question, context, index) {
    var token = 'parent-check-' + (++serial), state = recordFor(context);
    var answer = state.answers[index] || {value:null, submitted:false}, value = answer.value;
    forms[token] = {context:context, index:index};
    if (!question || !Array.isArray(question.options) || !['choice','select','order'].includes(question.kind)) {
      return '<p role="alert">This check could not be loaded. Please reload the course.</p>';
    }
    var help = question.kind === 'select' ? 'Choose all the answers that apply, then check your answer.' : question.kind === 'order' ? 'Choose a different step for each position, then check the order. Each step must appear once.' : 'Choose one answer, then check your answer.';
    var controls;
    if (question.kind === 'order') {
      controls = '<div class="parent-order-options">' + question.options.map(function (_, position) {
        return '<label for="' + token + '-position-' + position + '"><span>Step ' + (position + 1) + '</span><select id="' + token + '-position-' + position + '" data-parent-position="' + position + '"><option value="">Choose a step…</option>' + question.options.map(function (option, i) {
          return '<option value="' + i + '"' + (Array.isArray(value) && value[position] === i ? ' selected' : '') + '>' + esc(option) + '</option>';
        }).join('') + '</select></label>';
      }).join('') + '</div>';
    } else {
      controls = '<div class="parent-choice-options">' + question.options.map(function (option, i) {
        var checked = question.kind === 'choice' ? value === i : Array.isArray(value) && value.indexOf(i) !== -1;
        return '<label class="parent-choice-option" for="' + token + '-option-' + i + '"><input id="' + token + '-option-' + i + '" type="' + (question.kind === 'select' ? 'checkbox' : 'radio') + '" name="' + token + '-answer" value="' + i + '"' + (checked ? ' checked' : '') + '><span>' + esc(option) + '</span></label>';
      }).join('') + '</div>';
    }
    var message = feedback(question, answer, state.storageError);
    return '<form class="parent-check parent-question" data-parent-check="' + token + '" novalidate><fieldset aria-describedby="' + token + '-help"><legend>' + (context.final ? '<span class="parent-check-number">Check ' + (index + 1) + ' of 3</span>' : '') + esc(question.prompt) + '</legend><p id="' + token + '-help" class="parent-check-help">' + help + '</p>' + controls + '</fieldset><button class="btn btn-primary parent-check-button" type="submit">' + (question.kind === 'order' ? 'Check order' : 'Check answer') + '</button><div class="parent-check-feedback parent-check-status' + (answer.correct ? ' is-correct' : '') + '" id="' + token + '-feedback" role="status" aria-live="polite" aria-atomic="true" tabindex="-1">' + esc(message) + '</div></form>';
  }
  function render(slide) {
    if (!slide) return '';
    var id = slide.lessonId;
    if (slide.type === 'parent-completion') {
      var item = root.PARENT_COMPLETION && root.PARENT_COMPLETION[id], list = questions(id);
      if (list.length !== 3) return '<section class="parent-interactions"><h2 class="slide-title">Lesson checks</h2><p role="alert">The three lesson checks could not be loaded. Please reload the course.</p></section>';
      var finalContext = {id:id, key:completionKey(id), list:list, final:true};
      return '<section class="parent-interactions parent-completion parent-checks" data-parent-lesson="' + esc(id) + '"><h2 class="slide-title">' + esc(slide.title || 'Put it into practice') + '</h2><p class="parent-interaction-intro">' + esc(item.intro || 'Try these three checks. Use the feedback to review your choices and try again.') + '</p>' + list.map(function (q, i) { return formMarkup(q, finalContext, i); }).join('') + '<p class="parent-check-footnote">Check all three answers to finish this lesson. Your choices save on this device.</p></section>';
    }
    if (slide.type !== 'parent-interaction') return '';
    var hasKey = id != null && Number.isInteger(slide.slideIndex);
    var memoryKey = String(id) + ':' + String(slide.slideIndex) + ':' + String(slide.question && slide.question.prompt);
    var context = {id:id, key:hasKey ? 'di_parent_practice_v1_' + id + '_' + slide.slideIndex : null, memoryKey:memoryKey, list:[slide.question], final:false};
    return '<section class="parent-interactions"><h2 class="slide-title">' + esc(slide.title || 'Try it for yourself') + '</h2>' + (slide.intro ? '<p class="parent-interaction-intro">' + esc(slide.intro) + '</p>' : '') + formMarkup(slide.question, context, 0) + '</section>';
  }
  function extract(form, question) {
    if (question.kind === 'choice') {
      var chosen = form.querySelector('input[type="radio"]:checked');
      return chosen ? Number(chosen.value) : null;
    }
    if (question.kind === 'select') return Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(function (input) { return Number(input.value); });
    return Array.from(form.querySelectorAll('select[data-parent-position]')).map(function (select) { return select.value === '' ? null : Number(select.value); });
  }
  function interact(form, submitted) {
    var entry = forms[form.dataset.parentCheck];
    if (!entry) return;
    var context = entry.context, list = context.final ? questions(context.id) : context.list;
    var question = list[entry.index];
    if (!question) return;
    context.list = list;
    var value = normalise(question, extract(form, question)), state = recordFor(context);
    var answer = {value:value, submitted:submitted}, answers = state.answers;
    answers[entry.index] = answer;
    var saved = true;
    if (context.key) saved = save(context.key, answers);
    else practice[context.memoryKey] = answer;
    var output = form.querySelector('.parent-check-feedback');
    var completeInput = value !== null && (question.kind !== 'order' || (value.indexOf(null) === -1 && new Set(value).size === value.length));
    var message = !saved ? feedback(question, answer, true) : !submitted ? 'Answer changed. Choose Check ' + (question.kind === 'order' ? 'order' : 'answer') + ' to confirm your new response.' : !completeInput ? (question.kind === 'order' ? 'Choose a different step for every position, then check the order.' : 'Choose an answer, then check it.') : feedback(question, answer, false);
    output.textContent = message;
    output.classList.toggle('is-correct', saved && submitted && isCorrect(question, value));
    output.classList.toggle('is-error', !saved);
    if (context.final) announceChange(context.id);
    if (submitted) output.focus({preventScroll:true});
  }
  root.DI_PARENT_INTERACTIONS = {render:render, missing:missing, read:read};
  if (!root.document) return;
  root.document.addEventListener('submit', function (event) {
    var form = event.target.closest && event.target.closest('form[data-parent-check]');
    if (!form) return;
    event.preventDefault(); interact(form, true);
  });
  root.document.addEventListener('change', function (event) {
    var form = event.target.closest && event.target.closest('form[data-parent-check]');
    if (form && event.target.matches('input, select')) interact(form, false);
  });
  root.addEventListener('storage', function (event) {
    if (event.key === null) {
      blocked = Object.create(null);
      Object.keys(root.PARENT_COMPLETION || {}).forEach(function (id) { announceChange(Number(id)); });
    } else if (event.key.indexOf('di_parent_checks_v1_') === 0) {
      delete blocked[event.key];
      announceChange(Number(event.key.slice('di_parent_checks_v1_'.length)));
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);
