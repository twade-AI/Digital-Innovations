/* Build Removes_Course_Slide_Content.docx from js/slides-gcse.js.
   Usage: node tools/build-removes-docx.mjs
   Regenerate whenever Removes lesson content changes, so the printable
   hand-out stays in sync with the site. */
import fs from 'fs';
import vm from 'vm';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const docx = require('docx');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  LevelFormat, ExternalHyperlink, BorderStyle,
} = docx;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'Removes_Course_Slide_Content.docx');

/* ── Load the deck ─────────────────────────────────── */
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/slides-gcse.js'), 'utf8'), ctx);
const UNITS = ctx.GCSE_UNITS;
const SLIDES = ctx.SLIDES_GCSE;
const totalLessons = UNITS.reduce((n, u) => n + u.lessons.length, 0);

/* ── HTML → plain text ─────────────────────────────── */
function unescapeEntities(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
    .replace(/&rarr;/g, '→').replace(/&larr;/g, '←')
    .replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘').replace(/&rsquo;/g, '’')
    .replace(/&hellip;/g, '…').replace(/&middot;/g, '·')
    .replace(/&times;/g, '×');
}
function stripTags(s) {
  return unescapeEntities(String(s).replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}
/* Hook bodies embed a stats row; pull it out as bullet lines. */
function splitHookBody(html) {
  const stats = [];
  const body = String(html).replace(/<div class="hook-stats-row">([\s\S]*?)<\/div>\s*$/, (m, inner) => {
    const re = /<span class="sv">([\s\S]*?)<\/span>\s*<span class="sl">([\s\S]*?)<\/span>/g;
    let mm;
    while ((mm = re.exec(inner))) stats.push(stripTags(mm[1]) + ' — ' + stripTags(mm[2]));
    return '';
  });
  return { text: stripTags(body), stats };
}

/* ── Document pieces ───────────────────────────────── */
const MAGENTA = '9B1844';
const GREY = '6B7280';
const paras = [];
const p = (opts) => paras.push(new Paragraph(opts));
const runs = (text, extra = {}) => [new TextRun({ text, ...extra })];

function bodyPara(text, opts = {}) {
  if (!text) return;
  p({ children: runs(text), spacing: { after: 80 }, ...opts });
}
function labelledPara(label, text) {
  if (!text) return;
  p({
    children: [new TextRun({ text: label + ' ', bold: true, color: MAGENTA }), new TextRun({ text })],
    spacing: { after: 80 },
  });
}
function bullet(children, ref = 'dot') {
  p({ children, numbering: { reference: ref, level: 0 }, spacing: { after: 40 } });
}
function termBullet(term, def) {
  bullet([new TextRun({ text: term, bold: true }), new TextRun({ text: def ? ' — ' + def : '' })]);
}
function sourcesBlock(sources) {
  if (!sources || !sources.length) return;
  p({ children: runs('Sources', { bold: true, size: 16, color: GREY }), spacing: { before: 60, after: 20 } });
  sources.forEach(src => {
    p({
      children: [
        new TextRun({ text: stripTags(src.label), size: 16, color: GREY }),
        ...(src.url ? [new TextRun({ text: '  —  ', size: 16, color: GREY }),
          new ExternalHyperlink({ children: [new TextRun({ text: src.url, size: 16, color: GREY, underline: {} })], link: src.url })] : []),
      ],
      spacing: { after: 20 },
    });
  });
}
function slideBadge(n, slide) {
  let label = 'SLIDE ' + n + ' · ' + slide.type.toUpperCase().replace('-', ' ');
  if (slide.type === 'widget') label += ' · ' + String(slide.widget).toUpperCase();
  p({
    children: runs(label, { bold: true, size: 15, color: MAGENTA }),
    spacing: { before: 200, after: 60 },
    border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'E8CAD6' } },
  });
}
function slideTitle(t) {
  if (!t) return;
  p({ children: runs(stripTags(t), { bold: true, size: 24 }), spacing: { after: 60 } });
}
function stepsBlock(steps) {
  (steps || []).forEach(s => {
    if (typeof s === 'string') bullet(runs(stripTags(s)));
    else if (s && s.question) {
      bullet([new TextRun({ text: stripTags(s.question), bold: true }),
        new TextRun({ text: s.hint ? '  (Hint: ' + stripTags(s.hint) + ')' : '', italics: true, color: GREY })]);
    }
  });
}

function renderSlide(slide, n) {
  slideBadge(n, slide);
  switch (slide.type) {
    case 'hook': {
      slideTitle(slide.title);
      const { text, stats } = splitHookBody(slide.body || '');
      bodyPara(text);
      stats.forEach(s => bullet(runs(s)));
      labelledPara('Key idea:', stripTags(slide.callout || ''));
      sourcesBlock(slide.sources);
      break;
    }
    case 'video':
      slideTitle(slide.title);
      labelledPara('▶ Watch:', stripTags(slide.title) + (slide.credit ? '  ·  ' + stripTags(slide.credit) : ''));
      if (slide.videoId) bodyPara('https://www.youtube.com/watch?v=' + slide.videoId);
      bodyPara(stripTags(slide.intro || ''));
      labelledPara('Tip:', stripTags(slide.callout || ''));
      sourcesBlock(slide.sources);
      break;
    case 'concept':
      slideTitle(slide.title);
      bodyPara(stripTags(slide.body || ''));
      (slide.bullets || []).forEach(b => termBullet(stripTags(b.term), stripTags(b.def || '')));
      labelledPara('Key idea:', stripTags(slide.callout || ''));
      labelledPara('Deeper:', stripTags(slide.reveal || ''));
      sourcesBlock(slide.sources);
      break;
    case 'widget':
      slideTitle(slide.title);
      bodyPara(stripTags(slide.intro || ''));
      if (slide.claim) labelledPara('Claim:', stripTags(slide.claim));
      if (slide.categories) {
        labelledPara('Categories:', slide.categories.map(stripTags).join('  |  '));
        (slide.items || []).forEach(it => {
          bullet([new TextRun({ text: stripTags(it.text) }),
            new TextRun({ text: '  → ' + stripTags(slide.categories[it.correct || 0]), bold: true })]);
          if (it.why) p({ children: runs(stripTags(it.why), { size: 18, color: GREY }), indent: { left: 720 }, spacing: { after: 40 } });
        });
      }
      (slide.snippets || []).forEach(sn => {
        bullet([new TextRun({ text: (sn.correct ? '✗ ' : '✓ '), bold: true }),
          new TextRun({ text: stripTags(sn.text) })]);
        if (sn.why) p({ children: runs(stripTags(sn.why), { size: 18, color: GREY }), indent: { left: 720 }, spacing: { after: 40 } });
      });
      stepsBlock(slide.steps);
      if (slide.verdict) labelledPara('Expert verdict:', stripTags(slide.verdict));
      labelledPara('Note:', stripTags(slide.callout || ''));
      sourcesBlock(slide.sources);
      break;
    case 'activity':
      slideTitle(slide.title);
      labelledPara('Task:', stripTags(slide.task || ''));
      stepsBlock(slide.steps);
      labelledPara('Note:', stripTags(slide.callout || ''));
      labelledPara('Deeper:', stripTags(slide.reveal || ''));
      sourcesBlock(slide.sources);
      break;
    case 'scenario':
      slideTitle(slide.title);
      bodyPara(stripTags(slide.situation || ''));
      if (slide.question) p({ children: runs(stripTags(slide.question), { bold: true }), spacing: { after: 60 } });
      (slide.choices || []).forEach(c => {
        bullet(runs(stripTags(c.text)));
        p({ children: runs('→ ' + stripTags(c.outcome || ''), { size: 18, color: GREY }), indent: { left: 720 }, spacing: { after: 40 } });
      });
      break;
    case 'quiz':
      slideTitle(slide.question);
      (slide.options || []).forEach((o, i) => {
        bullet([new TextRun({ text: i === slide.correct ? '✓ ' : '', bold: true, color: MAGENTA }),
          new TextRun({ text: stripTags(o), bold: i === slide.correct })]);
      });
      labelledPara('Why:', stripTags(slide.explanation || ''));
      sourcesBlock(slide.sources);
      break;
    case 'summary':
      slideTitle(slide.title);
      (slide.points || []).forEach(pt => {
        bullet([new TextRun({ text: (pt.icon ? pt.icon + ' ' : '') }),
          new TextRun({ text: stripTags(pt.label || ''), bold: true }),
          new TextRun({ text: pt.text ? ' — ' + stripTags(pt.text) : '' })]);
      });
      break;
    case 'discussion':
      slideTitle(slide.title);
      bodyPara(stripTags(slide.body || ''));
      (slide.questions || []).forEach(q => bullet(runs((q.num ? q.num + '. ' : '') + stripTags(q.text))));
      break;
    case 'unit-test':
      slideTitle(slide.title);
      bodyPara(stripTags(slide.body || ''));
      (slide.questions || []).forEach((q, qi) => {
        p({ children: runs((qi + 1) + '. ' + stripTags(q.q), { bold: true }), spacing: { before: 80, after: 40 } });
        (q.options || []).forEach((o, i) => {
          bullet([new TextRun({ text: i === q.correct ? '✓ ' : '', bold: true, color: MAGENTA }),
            new TextRun({ text: stripTags(o), bold: i === q.correct })]);
        });
        if (q.explanation) labelledPara('Why:', stripTags(q.explanation));
      });
      break;
    case 'exit-ticket':
      slideTitle(slide.title);
      labelledPara('Prompt:', stripTags(slide.prompt || ''));
      bodyPara(stripTags(slide.body || ''));
      break;
    case 'assessment':
      slideTitle(slide.title);
      bodyPara([slide.domain, slide.time].filter(Boolean).map(stripTags).join('  ·  '));
      labelledPara('Brief:', stripTags(slide.brief || ''));
      stepsBlock(slide.steps);
      if (slide.criteria) labelledPara('Criteria:', stripTags(slide.criteria));
      (slide.rubric || []).forEach(r => termBullet(stripTags(r.level), stripTags(r.text || '')));
      if (slide.prompt) labelledPara('Prompt:', stripTags(slide.prompt));
      break;
    default:
      slideTitle(slide.title || slide.question);
      bodyPara(stripTags(slide.body || slide.intro || ''));
  }
}

/* ── Title page ────────────────────────────────────── */
const exportDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
p({ children: runs('Digital Innovations', { bold: true, size: 56, color: MAGENTA }), spacing: { before: 1200, after: 120 }, alignment: AlignmentType.CENTER });
p({ children: runs('Removes (Year 9) AI Course — Complete Slide Content', { size: 30 }), spacing: { after: 120 }, alignment: AlignmentType.CENTER });
p({ children: runs(UNITS.length + ' units · ' + totalLessons + ' lessons · aligned to the OECD/EU AI Literacy Framework', { size: 22, color: GREY }), spacing: { after: 60 }, alignment: AlignmentType.CENTER });
p({ children: runs('Exported ' + exportDate, { size: 22, color: GREY }), spacing: { after: 400 }, alignment: AlignmentType.CENTER });

/* ── Units, lessons, slides ────────────────────────── */
let lessonNum = 0;
UNITS.forEach(unit => {
  p({
    children: runs(stripTags(unit.title) + (unit.ailit ? '  ·  ' + unit.ailit : ''), { bold: true, size: 30, color: 'FFFFFF' }),
    heading: HeadingLevel.HEADING_1,
    shading: { type: docx.ShadingType.CLEAR, fill: MAGENTA },
    spacing: { before: 360, after: 160 },
    pageBreakBefore: true,
  });
  unit.lessons.forEach(lesson => {
    lessonNum++;
    const deck = SLIDES[lesson.id] || [];
    p({
      children: runs((lesson.icon ? lesson.icon + ' ' : '') + stripTags(lesson.title), { bold: true, size: 30, color: MAGENTA }),
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 40 },
    });
    p({ children: runs((lesson.time || '') + '  ·  Lesson ' + lessonNum + ' of ' + totalLessons + '  ·  ' + deck.length + ' slides', { size: 18, color: GREY }), spacing: { after: 40 } });
    bodyPara(stripTags(lesson.desc || ''));
    deck.forEach((slide, i) => renderSlide(slide, i + 1));
  });
});

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Calibri', size: 21 }, paragraph: { spacing: { line: 264 } } } },
  },
  numbering: {
    config: [{
      reference: 'dot',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 240 } } } }],
    }],
  },
  sections: [{ properties: {}, children: paras }],
});

const buf = await Packer.toBuffer(doc);
fs.writeFileSync(OUT, buf);
console.log('Wrote ' + OUT + ' (' + (buf.length / 1024).toFixed(0) + ' KB) — ' + totalLessons + ' lessons, exported ' + exportDate);
