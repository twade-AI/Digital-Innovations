/* ── Slide Visuals ── Inline SVG diagrams, keyed by "lessonId:slideIndex"
   All SVGs use currentColor / CSS vars — no external images, never break.  */

var SLIDE_VISUALS = {

  /* ── L1:1 — What Counts as AI? — AI ecosystem map ───────────────── */
  '1:1': `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" aria-label="AI ecosystem diagram">
    <defs>
      <style>
        .vis-text { font-family: system-ui, sans-serif; fill: currentColor; }
        .vis-node { rx:8; ry:8; }
        .vis-line { stroke: currentColor; stroke-opacity:.35; stroke-width:1.5; fill:none; stroke-dasharray:4 3; }
      </style>
    </defs>
    <!-- Centre: AI -->
    <rect x="228" y="85" width="104" height="50" rx="10" fill="rgba(99,102,241,.18)" stroke="rgba(99,102,241,.6)" stroke-width="1.5"/>
    <text x="280" y="108" text-anchor="middle" class="vis-text" font-weight="700" font-size="13" fill="#818cf8">AI Systems</text>
    <text x="280" y="124" text-anchor="middle" class="vis-text" font-size="10" opacity=".7">in your daily life</text>
    <!-- Nodes -->
    <rect x="20"  y="10"  width="110" height="36" rx="7" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.4)" stroke-width="1.2"/>
    <text x="75"  y="32" text-anchor="middle" class="vis-text" font-size="11">📱 Social Feed</text>
    <rect x="420" y="10"  width="110" height="36" rx="7" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.4)" stroke-width="1.2"/>
    <text x="475" y="32" text-anchor="middle" class="vis-text" font-size="11">🎵 Music Recs</text>
    <rect x="20"  y="90"  width="110" height="36" rx="7" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
    <text x="75"  y="112" text-anchor="middle" class="vis-text" font-size="11">🗺 Navigation</text>
    <rect x="420" y="90"  width="110" height="36" rx="7" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
    <text x="475" y="112" text-anchor="middle" class="vis-text" font-size="11">📧 Spam Filter</text>
    <rect x="20"  y="170" width="110" height="36" rx="7" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="75"  y="192" text-anchor="middle" class="vis-text" font-size="11">🛍 Ads &amp; Prices</text>
    <rect x="420" y="170" width="110" height="36" rx="7" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="475" y="192" text-anchor="middle" class="vis-text" font-size="11">🏥 Diagnostics</text>
    <rect x="215" y="175" width="130" height="36" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="280" y="197" text-anchor="middle" class="vis-text" font-size="11">🤖 Chatbots</text>
    <!-- Lines -->
    <line x1="130" y1="28"  x2="228" y2="96"  class="vis-line"/>
    <line x1="420" y1="28"  x2="332" y2="96"  class="vis-line"/>
    <line x1="130" y1="108" x2="228" y2="108" class="vis-line"/>
    <line x1="420" y1="108" x2="332" y2="108" class="vis-line"/>
    <line x1="130" y1="188" x2="228" y2="126" class="vis-line"/>
    <line x1="420" y1="188" x2="332" y2="126" class="vis-line"/>
    <line x1="280" y1="175" x2="280" y2="135" class="vis-line"/>
  </svg>`,

  /* ── L2:1 — The Stochastic Parrot — token prediction diagram ──────── */
  '2:1': `<svg viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg" aria-label="Token prediction diagram">
    <defs><style>.vt{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <!-- Prompt -->
    <rect x="10" y="18" width="520" height="40" rx="8" fill="rgba(99,102,241,.1)" stroke="rgba(99,102,241,.35)" stroke-width="1.2"/>
    <text x="24" y="44" class="vt" font-size="13" font-family="monospace, monospace" fill="#818cf8">"The cat sat on the </text>
    <text x="302" y="44" class="vt" font-size="13" font-family="monospace, monospace" fill="#f59e0b" font-weight="700">___"</text>
    <text x="340" y="44" class="vt" font-size="11" opacity=".5">← predict next token</text>
    <!-- Bars -->
    <text x="10" y="88" class="vt" font-size="10" opacity=".55" font-weight="600">PROBABILITY</text>
    <!-- mat -->
    <text x="10"  y="110" class="vt" font-size="12" font-weight="600">mat</text>
    <rect x="60"  y="98"  width="280" height="18" rx="4" fill="rgba(34,197,94,.25)" stroke="rgba(34,197,94,.5)" stroke-width="1"/>
    <text x="348" y="111" class="vt" font-size="11" fill="#22c55e" font-weight="700">62%</text>
    <!-- floor -->
    <text x="10"  y="136" class="vt" font-size="12" font-weight="600">floor</text>
    <rect x="60"  y="124" width="120" height="18" rx="4" fill="rgba(99,102,241,.2)" stroke="rgba(99,102,241,.4)" stroke-width="1"/>
    <text x="188" y="137" class="vt" font-size="11" fill="#818cf8" font-weight="700">21%</text>
    <!-- chair -->
    <text x="10"  y="162" class="vt" font-size="12" font-weight="600">chair</text>
    <rect x="60"  y="150" width="70"  height="18" rx="4" fill="rgba(245,158,11,.18)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="138" y="163" class="vt" font-size="11" fill="#f59e0b" font-weight="700">12%</text>
    <!-- note -->
    <text x="400" y="116" class="vt" font-size="10" opacity=".55" text-anchor="middle">No understanding —</text>
    <text x="400" y="130" class="vt" font-size="10" opacity=".55" text-anchor="middle">just statistics from</text>
    <text x="400" y="144" class="vt" font-size="10" opacity=".55" text-anchor="middle">billions of examples</text>
    <rect x="358" y="103" width="172" height="52" rx="6" fill="none" stroke="currentColor" stroke-opacity=".15" stroke-width="1" stroke-dasharray="3 2"/>
  </svg>`,

  /* ── L3:2 — Training, Validation & Test Sets — ML pipeline ────────── */
  '3:2': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="ML training pipeline">
    <defs><style>.vp{font-family:system-ui,sans-serif;fill:currentColor}.va{fill:none;stroke:currentColor;stroke-opacity:.4;stroke-width:1.5;marker-end:url(#arr)}</style>
      <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <!-- Data split -->
    <rect x="10" y="60" width="120" height="60" rx="8" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.4)" stroke-width="1.2"/>
    <text x="70" y="85" text-anchor="middle" class="vp" font-size="11" font-weight="700">Raw Data</text>
    <text x="70" y="100" text-anchor="middle" class="vp" font-size="10" opacity=".6">100% of examples</text>
    <!-- Arrow -->
    <line x1="130" y1="90" x2="158" y2="90" class="va"/>
    <!-- Split boxes -->
    <rect x="160" y="20" width="100" height="44" rx="7" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.45)" stroke-width="1.2"/>
    <text x="210" y="40" text-anchor="middle" class="vp" font-size="11" font-weight="700" fill="#22c55e">Training</text>
    <text x="210" y="55" text-anchor="middle" class="vp" font-size="10" opacity=".6">~70%  learn</text>
    <rect x="160" y="74" width="100" height="44" rx="7" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.2"/>
    <text x="210" y="94" text-anchor="middle" class="vp" font-size="11" font-weight="700" fill="#f59e0b">Validation</text>
    <text x="210" y="109" text-anchor="middle" class="vp" font-size="10" opacity=".6">~15%  tune</text>
    <rect x="160" y="128" width="100" height="44" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.2"/>
    <text x="210" y="148" text-anchor="middle" class="vp" font-size="11" font-weight="700" fill="#ef4444">Test</text>
    <text x="210" y="163" text-anchor="middle" class="vp" font-size="10" opacity=".6">~15%  evaluate</text>
    <!-- Lines from split -->
    <line x1="130" y1="90" x2="148" y2="42"  stroke="currentColor" stroke-opacity=".3" stroke-width="1.2" fill="none"/>
    <line x1="148" y1="42"  x2="160" y2="42"  stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>
    <line x1="130" y1="90" x2="160" y2="96"   stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>
    <line x1="130" y1="90" x2="148" y2="150" stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>
    <line x1="148" y1="150" x2="160" y2="150" stroke="currentColor" stroke-opacity=".3" stroke-width="1.2"/>
    <!-- Arrows to Model -->
    <line x1="260" y1="42" x2="340" y2="75" class="va"/>
    <line x1="260" y1="96" x2="340" y2="90" class="va"/>
    <!-- Model box -->
    <rect x="342" y="60" width="110" height="60" rx="8" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.45)" stroke-width="1.2"/>
    <text x="397" y="85" text-anchor="middle" class="vp" font-size="11" font-weight="700" fill="#06b6d4">Model</text>
    <text x="397" y="100" text-anchor="middle" class="vp" font-size="10" opacity=".6">learns weights</text>
    <!-- Arrow to result -->
    <line x1="452" y1="90" x2="490" y2="90" class="va"/>
    <rect x="492" y="72" width="60" height="36" rx="6" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="522" y="90" text-anchor="middle" class="vp" font-size="10" font-weight="700" fill="#22c55e">Score</text>
    <text x="522" y="104" text-anchor="middle" class="vp" font-size="9" opacity=".6">accuracy</text>
    <!-- Test only used once label -->
    <text x="160" y="178" class="vp" font-size="9" opacity=".45">⚠ Test set used ONCE only — at the very end</text>
  </svg>`,

  /* ── L4:1 — What is Interpretability? — Black box ─────────────────── */
  '4:1': `<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" aria-label="Black box AI diagram">
    <defs><style>.vb{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="arrb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="currentColor" opacity=".5"/>
      </marker>
    </defs>
    <!-- Inputs -->
    <text x="10" y="25" class="vb" font-size="10" opacity=".5" font-weight="600">INPUTS</text>
    <rect x="10" y="35" width="100" height="28" rx="5" fill="rgba(99,102,241,.1)" stroke="rgba(99,102,241,.3)" stroke-width="1"/>
    <text x="60" y="53" text-anchor="middle" class="vb" font-size="11">CV / Résumé</text>
    <rect x="10" y="70" width="100" height="28" rx="5" fill="rgba(99,102,241,.1)" stroke="rgba(99,102,241,.3)" stroke-width="1"/>
    <text x="60" y="88" text-anchor="middle" class="vb" font-size="11">Postcode</text>
    <rect x="10" y="105" width="100" height="28" rx="5" fill="rgba(99,102,241,.1)" stroke="rgba(99,102,241,.3)" stroke-width="1"/>
    <text x="60" y="123" text-anchor="middle" class="vb" font-size="11">Education</text>
    <!-- Arrows in -->
    <line x1="110" y1="49"  x2="188" y2="75"  stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arrb)"/>
    <line x1="110" y1="84"  x2="188" y2="84"  stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arrb)"/>
    <line x1="110" y1="119" x2="188" y2="93"  stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arrb)"/>
    <!-- Black Box -->
    <rect x="190" y="48" width="160" height="72" rx="10" fill="rgba(15,23,42,.8)" stroke="rgba(239,68,68,.5)" stroke-width="1.5"/>
    <text x="270" y="78" text-anchor="middle" class="vb" font-size="22">?</text>
    <text x="270" y="97" text-anchor="middle" class="vb" font-size="10" opacity=".5">billions of weights</text>
    <text x="270" y="110" text-anchor="middle" class="vb" font-size="10" opacity=".5">nobody can explain</text>
    <!-- Arrow out -->
    <line x1="350" y1="84" x2="398" y2="84" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arrb)"/>
    <!-- Outputs -->
    <text x="405" y="25" class="vb" font-size="10" opacity=".5" font-weight="600">OUTPUT</text>
    <rect x="400" y="62" width="110" height="44" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="455" y="81" text-anchor="middle" class="vb" font-size="12" font-weight="700" fill="#ef4444">REJECTED</text>
    <text x="455" y="97" text-anchor="middle" class="vb" font-size="10" opacity=".5">No reason given</text>
    <!-- Label -->
    <text x="270" y="140" text-anchor="middle" class="vb" font-size="10" opacity=".4" font-style="italic">The decision is made — but the reasoning is invisible</text>
  </svg>`,

  /* ── L5:2 — Five Sources of Data Bias — pipeline ──────────────────── */
  '5:2': `<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" aria-label="Bias amplification pipeline">
    <defs><style>.vbi{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="arrbi" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" opacity=".7"/>
      </marker>
    </defs>
    <!-- Steps -->
    <rect x="10"  y="45" width="90" height="60" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
    <text x="55"  y="68" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Biased</text>
    <text x="55"  y="82" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Training</text>
    <text x="55"  y="96" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Data</text>

    <line x1="100" y1="75" x2="128" y2="75" stroke="#ef4444" stroke-opacity=".6" stroke-width="1.8" marker-end="url(#arrbi)"/>

    <rect x="130" y="45" width="90" height="60" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="175" y="68" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Model</text>
    <text x="175" y="82" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Learns</text>
    <text x="175" y="96" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Patterns</text>

    <line x1="220" y1="75" x2="248" y2="75" stroke="#ef4444" stroke-opacity=".6" stroke-width="1.8" marker-end="url(#arrbi)"/>

    <rect x="250" y="45" width="90" height="60" rx="8" fill="rgba(239,68,68,.18)" stroke="rgba(239,68,68,.5)" stroke-width="1.2"/>
    <text x="295" y="68" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Biased</text>
    <text x="295" y="82" text-anchor="middle" class="vbi" font-size="10" font-weight="700">Decisions</text>
    <text x="295" y="96" text-anchor="middle" class="vbi" font-size="10" opacity=".7">at scale</text>

    <line x1="340" y1="75" x2="368" y2="75" stroke="#ef4444" stroke-opacity=".6" stroke-width="1.8" marker-end="url(#arrbi)"/>

    <rect x="370" y="45" width="90" height="60" rx="8" fill="rgba(239,68,68,.22)" stroke="rgba(239,68,68,.6)" stroke-width="1.2"/>
    <text x="415" y="71" text-anchor="middle" class="vbi" font-size="10" font-weight="700" fill="#ef4444">Real-World</text>
    <text x="415" y="85" text-anchor="middle" class="vbi" font-size="10" font-weight="700" fill="#ef4444">Harm</text>
    <text x="415" y="99" text-anchor="middle" class="vbi" font-size="10" opacity=".7">people affected</text>

    <!-- Feedback loop arrow -->
    <path d="M460,75 C490,75 510,130 280,135 C50,130 10,100 10,105" fill="none" stroke="#ef4444" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="5 3"/>
    <text x="260" y="148" text-anchor="middle" class="vbi" font-size="9" fill="#ef4444" opacity=".6">↑ Harm reinforces the original bias in future data</text>

    <!-- Example labels -->
    <text x="55"  y="20" text-anchor="middle" class="vbi" font-size="9" opacity=".45">e.g. historical</text>
    <text x="55"  y="32" text-anchor="middle" class="vbi" font-size="9" opacity=".45">hiring records</text>
    <text x="295" y="20" text-anchor="middle" class="vbi" font-size="9" opacity=".45">e.g. loan refusals</text>
    <text x="415" y="20" text-anchor="middle" class="vbi" font-size="9" opacity=".45">e.g. denied</text>
    <text x="415" y="32" text-anchor="middle" class="vbi" font-size="9" opacity=".45">opportunities</text>
  </svg>`,

  /* ── L9:1 — The PTFC Framework ────────────────────────────────────── */
  '9:1': `<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" aria-label="PTFC prompt framework diagram">
    <defs><style>.vf{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <!-- P -->
    <rect x="10"  y="24" width="122" height="92" rx="10" fill="rgba(99,102,241,.13)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="71"  y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#818cf8">P</text>
    <text x="71"  y="70" text-anchor="middle" class="vf" font-size="12" font-weight="700">Persona</text>
    <text x="71"  y="86" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">"Act as an expert</text>
    <text x="71"  y="99" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">in…"</text>
    <!-- T -->
    <rect x="146" y="24" width="122" height="92" rx="10" fill="rgba(6,182,212,.13)" stroke="rgba(6,182,212,.5)" stroke-width="1.5"/>
    <text x="207" y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#06b6d4">T</text>
    <text x="207" y="70" text-anchor="middle" class="vf" font-size="12" font-weight="700">Task</text>
    <text x="207" y="86" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">"Write / summarise /</text>
    <text x="207" y="99" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">analyse…"</text>
    <!-- F -->
    <rect x="282" y="24" width="122" height="92" rx="10" fill="rgba(245,158,11,.13)" stroke="rgba(245,158,11,.5)" stroke-width="1.5"/>
    <text x="343" y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#f59e0b">F</text>
    <text x="343" y="70" text-anchor="middle" class="vf" font-size="12" font-weight="700">Format</text>
    <text x="343" y="86" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">"Bullet list / table /</text>
    <text x="343" y="99" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">3 paragraphs…"</text>
    <!-- C -->
    <rect x="418" y="24" width="132" height="92" rx="10" fill="rgba(34,197,94,.13)" stroke="rgba(34,197,94,.5)" stroke-width="1.5"/>
    <text x="484" y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#22c55e">C</text>
    <text x="484" y="70" text-anchor="middle" class="vf" font-size="12" font-weight="700">Context</text>
    <text x="484" y="86" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">"The audience is /</text>
    <text x="484" y="99" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">background: …"</text>
    <!-- Bottom label -->
    <text x="280" y="130" text-anchor="middle" class="vf" font-size="10" opacity=".45">Combine all four elements for precise, high-quality AI output</text>
  </svg>`,

  /* ── L13:1 — How Deepfakes Work — GAN pipeline ────────────────────── */
  '13:1': `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" aria-label="How deepfakes are made">
    <defs><style>.vd{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="arrd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <!-- Real images input -->
    <rect x="10" y="65" width="100" height="50" rx="8" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="60" y="88" text-anchor="middle" class="vd" font-size="11" font-weight="700">Real Photos</text>
    <text x="60" y="103" text-anchor="middle" class="vd" font-size="10" opacity=".6">target person</text>
    <!-- Arrow -->
    <line x1="110" y1="90" x2="148" y2="90" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arrd)"/>
    <!-- Generator -->
    <rect x="150" y="42" width="110" height="96" rx="9" fill="rgba(99,102,241,.14)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="205" y="68" text-anchor="middle" class="vd" font-size="11" font-weight="700" fill="#818cf8">Generator</text>
    <text x="205" y="84" text-anchor="middle" class="vd" font-size="10" opacity=".6">creates fake</text>
    <text x="205" y="97" text-anchor="middle" class="vd" font-size="10" opacity=".6">face/voice/</text>
    <text x="205" y="110" text-anchor="middle" class="vd" font-size="10" opacity=".6">video frames</text>
    <text x="205" y="128" text-anchor="middle" class="vd" font-size="9" opacity=".45">neural network</text>
    <!-- Arrow -->
    <line x1="260" y1="90" x2="298" y2="90" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arrd)"/>
    <!-- Discriminator -->
    <rect x="300" y="42" width="110" height="96" rx="9" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="355" y="68" text-anchor="middle" class="vd" font-size="11" font-weight="700" fill="#f59e0b">Discriminator</text>
    <text x="355" y="84" text-anchor="middle" class="vd" font-size="10" opacity=".6">tries to spot</text>
    <text x="355" y="97" text-anchor="middle" class="vd" font-size="10" opacity=".6">real vs. fake</text>
    <text x="355" y="110" text-anchor="middle" class="vd" font-size="10" opacity=".6">"Is this real?"</text>
    <text x="355" y="128" text-anchor="middle" class="vd" font-size="9" opacity=".45">neural network</text>
    <!-- Feedback loop -->
    <path d="M355,138 C355,160 205,160 205,138" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="4 3"/>
    <text x="280" y="172" text-anchor="middle" class="vd" font-size="9" opacity=".45">Generator improves each round until fakes are indistinguishable</text>
    <!-- Arrow to output -->
    <line x1="410" y1="90" x2="448" y2="90" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arrd)"/>
    <!-- Output -->
    <rect x="450" y="65" width="100" height="50" rx="8" fill="rgba(239,68,68,.14)" stroke="rgba(239,68,68,.5)" stroke-width="1.5"/>
    <text x="500" y="86" text-anchor="middle" class="vd" font-size="11" font-weight="700" fill="#ef4444">Deepfake</text>
    <text x="500" y="101" text-anchor="middle" class="vd" font-size="10" opacity=".6">convincing fake</text>
    <!-- Labels -->
    <text x="280" y="22" text-anchor="middle" class="vd" font-size="10" opacity=".45" font-weight="600">GAN — Generative Adversarial Network</text>
  </svg>`,

  /* ── L6:1 — The Data Harvest — data broker pipeline ─────────────── */
  '6:1': `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" aria-label="Data broker pipeline">
    <defs>
      <style>.vdb { font-family: system-ui, sans-serif; fill: currentColor; }</style>
      <marker id="arr6" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="currentColor" opacity=".5"/>
      </marker>
    </defs>
    <!-- You -->
    <rect x="10" y="65" width="100" height="50" rx="8" fill="rgba(99,102,241,.15)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="60" y="87" text-anchor="middle" class="vdb" font-size="13" font-weight="700">You</text>
    <text x="60" y="102" text-anchor="middle" class="vdb" font-size="9" opacity=".65">1,500+ data points</text>
    <!-- Sources below -->
    <text x="60" y="133" text-anchor="middle" class="vdb" font-size="9" opacity=".5">📱 apps  🛒 purchases</text>
    <text x="60" y="146" text-anchor="middle" class="vdb" font-size="9" opacity=".5">🗺 location  🖱 clicks</text>
    <!-- Arrow to broker -->
    <line x1="112" y1="90" x2="158" y2="90" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr6)"/>
    <!-- Data Broker -->
    <rect x="160" y="55" width="130" height="70" rx="9" fill="rgba(245,158,11,.14)" stroke="rgba(245,158,11,.55)" stroke-width="1.5"/>
    <text x="225" y="82" text-anchor="middle" class="vdb" font-size="12" font-weight="700" fill="#f59e0b">Data Broker</text>
    <text x="225" y="97" text-anchor="middle" class="vdb" font-size="9" opacity=".7">Axciom · Oracle · Experian</text>
    <text x="225" y="111" text-anchor="middle" class="vdb" font-size="9" opacity=".55">$300B industry</text>
    <!-- Arrows to buyers -->
    <line x1="292" y1="72" x2="346" y2="48" stroke="currentColor" stroke-opacity=".35" stroke-width="1.4" marker-end="url(#arr6)"/>
    <line x1="292" y1="90" x2="346" y2="90" stroke="currentColor" stroke-opacity=".35" stroke-width="1.4" marker-end="url(#arr6)"/>
    <line x1="292" y1="108" x2="346" y2="132" stroke="currentColor" stroke-opacity=".35" stroke-width="1.4" marker-end="url(#arr6)"/>
    <!-- Buyers -->
    <rect x="348" y="22" width="100" height="38" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="398" y="38" text-anchor="middle" class="vdb" font-size="11">🎯 Advertisers</text>
    <text x="398" y="52" text-anchor="middle" class="vdb" font-size="9" opacity=".6">targeted ads</text>
    <rect x="348" y="71" width="100" height="38" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="398" y="87" text-anchor="middle" class="vdb" font-size="11">🏦 Insurers</text>
    <text x="398" y="101" text-anchor="middle" class="vdb" font-size="9" opacity=".6">risk scoring</text>
    <rect x="348" y="120" width="100" height="38" rx="7" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="398" y="136" text-anchor="middle" class="vdb" font-size="11">🏛 Governments</text>
    <text x="398" y="150" text-anchor="middle" class="vdb" font-size="9" opacity=".6">law enforcement</text>
    <!-- Label -->
    <text x="460" y="170" text-anchor="middle" class="vdb" font-size="9" opacity=".4">You never consented. You were never asked.</text>
  </svg>`,

  /* ── L7:1 — The Trolley Problem — AV decision tree ──────────────── */
  '7:1': `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" aria-label="Autonomous vehicle moral decision tree">
    <defs>
      <style>.vtr { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <!-- Car node -->
    <rect x="210" y="12" width="140" height="44" rx="9" fill="rgba(99,102,241,.15)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="280" y="31" text-anchor="middle" class="vtr" font-size="13" font-weight="700">🚗 Autonomous Car</text>
    <text x="280" y="47" text-anchor="middle" class="vtr" font-size="10" opacity=".65">collision unavoidable · 0.2 sec to decide</text>
    <!-- Lines down -->
    <line x1="220" y1="56" x2="100" y2="105" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5"/>
    <line x1="280" y1="56" x2="280" y2="105" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5"/>
    <line x1="340" y1="56" x2="460" y2="105" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5"/>
    <!-- Option A -->
    <rect x="22" y="106" width="156" height="50" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.3"/>
    <text x="100" y="127" text-anchor="middle" class="vtr" font-size="11" font-weight="700">Option A</text>
    <text x="100" y="141" text-anchor="middle" class="vtr" font-size="10" opacity=".7">Swerve left</text>
    <text x="100" y="154" text-anchor="middle" class="vtr" font-size="9" opacity=".55">hit 1 elderly pedestrian</text>
    <!-- Option B -->
    <rect x="200" y="106" width="160" height="50" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1.3"/>
    <text x="280" y="127" text-anchor="middle" class="vtr" font-size="11" font-weight="700">Option B</text>
    <text x="280" y="141" text-anchor="middle" class="vtr" font-size="10" opacity=".7">Hit concrete barrier</text>
    <text x="280" y="154" text-anchor="middle" class="vtr" font-size="9" opacity=".55">likely kills passenger</text>
    <!-- Option C -->
    <rect x="378" y="106" width="160" height="50" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1.3"/>
    <text x="458" y="127" text-anchor="middle" class="vtr" font-size="11" font-weight="700">Option C</text>
    <text x="458" y="141" text-anchor="middle" class="vtr" font-size="10" opacity=".7">Emergency brake</text>
    <text x="458" y="154" text-anchor="middle" class="vtr" font-size="9" opacity=".55">hit group of 5</text>
    <!-- Bottom note -->
    <text x="280" y="178" text-anchor="middle" class="vtr" font-size="9" opacity=".45" font-style="italic">An engineer wrote this code. 40M people gave answers in MIT's Moral Machine — no universal consensus emerged.</text>
  </svg>`,

  /* ── L8:1 — Flash Crash — feedback loop spiral ──────────────────── */
  '8:1': `<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" aria-label="Flash Crash algorithm feedback loop">
    <defs>
      <style>.vfc { font-family: system-ui, sans-serif; fill: currentColor; }</style>
      <marker id="arr8" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <!-- Algo A -->
    <rect x="30" y="60" width="130" height="50" rx="9" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="95" y="81" text-anchor="middle" class="vfc" font-size="12" font-weight="700">Algorithm A</text>
    <text x="95" y="96" text-anchor="middle" class="vfc" font-size="9.5" opacity=".65">sells → price drops</text>
    <!-- Arrow A→B -->
    <path d="M162,80 C230,40 340,40 400,80" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr8)"/>
    <text x="280" y="34" text-anchor="middle" class="vfc" font-size="9" opacity=".5">detects drop → triggers sell</text>
    <!-- Algo B -->
    <rect x="400" y="60" width="130" height="50" rx="9" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="465" y="81" text-anchor="middle" class="vfc" font-size="12" font-weight="700">Algorithm B</text>
    <text x="465" y="96" text-anchor="middle" class="vfc" font-size="9.5" opacity=".65">sells → price drops more</text>
    <!-- Arrow B→A -->
    <path d="M398,100 C330,140 230,140 162,100" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr8)"/>
    <text x="280" y="150" text-anchor="middle" class="vfc" font-size="9" opacity=".5">detects further drop → sells more</text>
    <!-- Result label -->
    <rect x="186" y="60" width="188" height="50" rx="9" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.35)" stroke-width="1.5"/>
    <text x="280" y="79" text-anchor="middle" class="vfc" font-size="12" font-weight="700">Result</text>
    <text x="280" y="95" text-anchor="middle" class="vfc" font-size="10" opacity=".7">−1,000 pts in 36 min</text>
    <text x="280" y="108" text-anchor="middle" class="vfc" font-size="9" opacity=".55">$1 trillion wiped</text>
    <!-- Bottom -->
    <text x="280" y="170" text-anchor="middle" class="vfc" font-size="9" opacity=".4" font-style="italic">No human could intervene fast enough. A circuit breaker paused trading at 2:45pm.</text>
  </svg>`,

  /* ── L10:1 — Synthetic Creativity — copyright chain ─────────────── */
  '10:1': `<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" aria-label="AI copyright ownership chain">
    <defs>
      <style>.vcp { font-family: system-ui, sans-serif; fill: currentColor; }</style>
      <marker id="arr10" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <!-- Artist -->
    <rect x="10" y="55" width="105" height="56" rx="8" fill="rgba(99,102,241,.14)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="62" y="76" text-anchor="middle" class="vcp" font-size="22">🎨</text>
    <text x="62" y="95" text-anchor="middle" class="vcp" font-size="11" font-weight="700">Human Artist</text>
    <text x="62" y="108" text-anchor="middle" class="vcp" font-size="9" opacity=".6">© protected work</text>
    <!-- Arrow -->
    <line x1="117" y1="83" x2="152" y2="83" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr10)"/>
    <text x="134" y="73" text-anchor="middle" class="vcp" font-size="8" opacity=".5">scraped</text>
    <!-- Training Data -->
    <rect x="153" y="55" width="115" height="56" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="210" y="78" text-anchor="middle" class="vcp" font-size="11" font-weight="700" fill="#f59e0b">Training Data</text>
    <text x="210" y="93" text-anchor="middle" class="vcp" font-size="9" opacity=".7">12M+ images</text>
    <text x="210" y="107" text-anchor="middle" class="vcp" font-size="9" opacity=".55">$0 paid to artists</text>
    <!-- Arrow -->
    <line x1="270" y1="83" x2="305" y2="83" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr10)"/>
    <text x="287" y="73" text-anchor="middle" class="vcp" font-size="8" opacity=".5">trains</text>
    <!-- AI Model -->
    <rect x="307" y="55" width="110" height="56" rx="8" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.45)" stroke-width="1.5"/>
    <text x="362" y="78" text-anchor="middle" class="vcp" font-size="11" font-weight="700" fill="#06b6d4">AI Model</text>
    <text x="362" y="93" text-anchor="middle" class="vcp" font-size="9" opacity=".7">Midjourney / DALL-E</text>
    <text x="362" y="107" text-anchor="middle" class="vcp" font-size="9" opacity=".55">Stable Diffusion</text>
    <!-- Arrow -->
    <line x1="419" y1="83" x2="454" y2="83" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr10)"/>
    <text x="436" y="73" text-anchor="middle" class="vcp" font-size="8" opacity=".5">generates</text>
    <!-- Output -->
    <rect x="456" y="55" width="94" height="56" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="503" y="80" text-anchor="middle" class="vcp" font-size="11" font-weight="700">AI Output</text>
    <text x="503" y="95" text-anchor="middle" class="vcp" font-size="11">❓</text>
    <text x="503" y="109" text-anchor="middle" class="vcp" font-size="9" opacity=".6">who owns this?</text>
    <!-- Bottom question -->
    <text x="280" y="140" text-anchor="middle" class="vcp" font-size="10" opacity=".6" font-weight="600">US Copyright Office (2023): AI output cannot be copyrighted.</text>
    <text x="280" y="155" text-anchor="middle" class="vcp" font-size="9" opacity=".45">Getty, NYT, Universal Music are all suing AI companies. Every court ruling sets new precedent.</text>
  </svg>`,

  /* ── L11:1 — Career Disruption — risk spectrum ──────────────────── */
  '11:1': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="AI job disruption risk spectrum">
    <defs>
      <style>.vjd { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <!-- Spectrum bar -->
    <defs>
      <linearGradient id="specGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(239,68,68,.7)"/>
        <stop offset="50%" stop-color="rgba(245,158,11,.6)"/>
        <stop offset="100%" stop-color="rgba(34,197,94,.6)"/>
      </linearGradient>
    </defs>
    <rect x="20" y="30" width="520" height="8" rx="4" fill="url(#specGrad)" opacity=".5"/>
    <!-- Category boxes -->
    <rect x="20" y="50" width="95" height="80" rx="8" fill="rgba(239,68,68,.13)" stroke="rgba(239,68,68,.4)" stroke-width="1.2"/>
    <text x="67" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#ef4444">Most at Risk</text>
    <text x="67" y="84" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Data entry</text>
    <text x="67" y="97" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Basic analysis</text>
    <text x="67" y="110" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Document review</text>
    <text x="67" y="123" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Call centre</text>

    <rect x="125" y="50" width="100" height="80" rx="8" fill="rgba(245,158,11,.11)" stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
    <text x="175" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#f59e0b">Partially</text>
    <text x="175" y="82" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#f59e0b">Disrupted</text>
    <text x="175" y="97" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Paralegal</text>
    <text x="175" y="110" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Basic coding</text>
    <text x="175" y="123" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Journalism</text>

    <rect x="235" y="50" width="100" height="80" rx="8" fill="rgba(99,102,241,.11)" stroke="rgba(99,102,241,.4)" stroke-width="1.2"/>
    <text x="285" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700">Transformed</text>
    <text x="285" y="84" text-anchor="middle" class="vjd" font-size="10" font-weight="700">Not Replaced</text>
    <text x="285" y="100" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Radiologist</text>
    <text x="285" y="113" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Lawyer</text>
    <text x="285" y="126" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Engineer</text>

    <rect x="345" y="50" width="100" height="80" rx="8" fill="rgba(34,197,94,.11)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="395" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#22c55e">New Roles</text>
    <text x="395" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#22c55e">Emerging</text>
    <text x="395" y="84" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#22c55e"> </text>
    <text x="395" y="100" text-anchor="middle" class="vjd" font-size="9" opacity=".7">AI trainer</text>
    <text x="395" y="113" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Prompt engineer</text>
    <text x="395" y="126" text-anchor="middle" class="vjd" font-size="9" opacity=".7">AI ethicist</text>

    <rect x="455" y="50" width="85" height="80" rx="8" fill="rgba(34,197,94,.13)" stroke="rgba(34,197,94,.45)" stroke-width="1.2"/>
    <text x="497" y="70" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#22c55e">Centaur</text>
    <text x="497" y="82" text-anchor="middle" class="vjd" font-size="10" font-weight="700" fill="#22c55e">Zone</text>
    <text x="497" y="98" text-anchor="middle" class="vjd" font-size="9" opacity=".7">Human + AI</text>
    <text x="497" y="111" text-anchor="middle" class="vjd" font-size="9" opacity=".7">beats both</text>
    <text x="497" y="124" text-anchor="middle" class="vjd" font-size="9" opacity=".7">alone</text>
    <!-- Bottom note -->
    <text x="280" y="155" text-anchor="middle" class="vjd" font-size="9" opacity=".45">WEF 2025: 41% of employers plan AI-driven headcount reductions · 77% will hire more people with AI skills</text>
  </svg>`,

  /* ── L14:1 — Facial Recognition — error rate comparison ─────────── */
  '14:1': `<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" aria-label="Facial recognition error rate demographics">
    <defs>
      <style>.vfr { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <text x="20" y="20" class="vfr" font-size="11" font-weight="700" opacity=".7">False positive rate — NIST evaluation</text>
    <!-- Bars (horizontal) -->
    <!-- Light-skinned men: 0.8% -->
    <text x="200" y="48" text-anchor="end" class="vfr" font-size="10" opacity=".75">Light-skinned men</text>
    <rect x="205" y="36" width="8" height="16" rx="2" fill="rgba(34,197,94,.7)"/>
    <text x="218" y="48" class="vfr" font-size="10" font-weight="700" fill="#22c55e">0.8%</text>
    <!-- Light-skinned women: 5% -->
    <text x="200" y="74" text-anchor="end" class="vfr" font-size="10" opacity=".75">Light-skinned women</text>
    <rect x="205" y="62" width="50" height="16" rx="2" fill="rgba(99,102,241,.6)"/>
    <text x="260" y="74" class="vfr" font-size="10" font-weight="700">5.0%</text>
    <!-- Dark-skinned men: 8% -->
    <text x="200" y="100" text-anchor="end" class="vfr" font-size="10" opacity=".75">Dark-skinned men</text>
    <rect x="205" y="88" width="80" height="16" rx="2" fill="rgba(245,158,11,.65)"/>
    <text x="290" y="100" class="vfr" font-size="10" font-weight="700" fill="#f59e0b">8.0%</text>
    <!-- Dark-skinned women: 34.7% -->
    <text x="200" y="126" text-anchor="end" class="vfr" font-size="10" opacity=".75">Dark-skinned women</text>
    <rect x="205" y="114" width="347" height="16" rx="2" fill="rgba(239,68,68,.7)"/>
    <text x="557" y="126" text-anchor="end" class="vfr" font-size="10" font-weight="700" fill="#ef4444">34.7%</text>
    <!-- Scale line -->
    <line x1="205" y1="140" x2="555" y2="140" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/>
    <text x="205" y="152" class="vfr" font-size="9" opacity=".45">0%</text>
    <text x="550" y="152" text-anchor="end" class="vfr" font-size="9" opacity=".45">35%</text>
    <text x="280" y="170" text-anchor="middle" class="vfr" font-size="9" opacity=".5" font-style="italic">43× higher error for dark-skinned women vs. light-skinned men. Robert Williams was wrongfully arrested because of this gap.</text>
  </svg>`,

  /* ── L15:1 — Environmental Cost — energy comparison chart ───────── */
  '15:1': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="AI energy consumption comparison">
    <defs>
      <style>.ven { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="ven" font-size="11" font-weight="700" opacity=".65">Relative Energy Use per Query (log scale)</text>
    <!-- Bar chart — vertical -->
    <!-- Google search: 0.3 Wh baseline -->
    <rect x="55" y="120" width="60" height="18" rx="3" fill="rgba(34,197,94,.6)"/>
    <text x="85" y="132" text-anchor="middle" class="ven" font-size="9" font-weight="700">1×</text>
    <text x="85" y="152" text-anchor="middle" class="ven" font-size="9" opacity=".7">Google</text>
    <text x="85" y="163" text-anchor="middle" class="ven" font-size="9" opacity=".7">search</text>
    <!-- ChatGPT: ~10x -->
    <rect x="155" y="78" width="60" height="60" rx="3" fill="rgba(245,158,11,.6)"/>
    <text x="185" y="105" text-anchor="middle" class="ven" font-size="9" font-weight="700">~10×</text>
    <text x="185" y="152" text-anchor="middle" class="ven" font-size="9" opacity=".7">ChatGPT</text>
    <text x="185" y="163" text-anchor="middle" class="ven" font-size="9" opacity=".7">query</text>
    <!-- Image gen: ~50x -->
    <rect x="255" y="30" width="60" height="108" rx="3" fill="rgba(99,102,241,.5)"/>
    <text x="285" y="82" text-anchor="middle" class="ven" font-size="9" font-weight="700">~50×</text>
    <text x="285" y="152" text-anchor="middle" class="ven" font-size="9" opacity=".7">AI image</text>
    <text x="285" y="163" text-anchor="middle" class="ven" font-size="9" opacity=".7">generation</text>
    <!-- GPT-3 training (lifetime equivalent) -->
    <rect x="355" y="24" width="60" height="114" rx="3" fill="rgba(239,68,68,.5)"/>
    <text x="385" y="78" text-anchor="middle" class="ven" font-size="9" font-weight="700">552t CO₂</text>
    <text x="385" y="90" text-anchor="middle" class="ven" font-size="8" opacity=".7">= 120 cars</text>
    <text x="385" y="152" text-anchor="middle" class="ven" font-size="9" opacity=".7">GPT-3</text>
    <text x="385" y="163" text-anchor="middle" class="ven" font-size="9" opacity=".7">training run</text>
    <!-- Netherlands comparison -->
    <rect x="455" y="18" width="80" height="120" rx="3" fill="rgba(239,68,68,.65)"/>
    <text x="495" y="65" text-anchor="middle" class="ven" font-size="9" font-weight="700" fill="#fca5a5">All AI</text>
    <text x="495" y="78" text-anchor="middle" class="ven" font-size="9" font-weight="700" fill="#fca5a5">data centres</text>
    <text x="495" y="91" text-anchor="middle" class="ven" font-size="8" opacity=".8">=</text>
    <text x="495" y="103" text-anchor="middle" class="ven" font-size="8">🇳🇱 Netherlands</text>
    <text x="495" y="115" text-anchor="middle" class="ven" font-size="8" opacity=".7">annual usage</text>
    <text x="495" y="152" text-anchor="middle" class="ven" font-size="9" opacity=".7">IEA 2024</text>
    <text x="495" y="163" text-anchor="middle" class="ven" font-size="9" opacity=".7">benchmark</text>
  </svg>`,

  /* ── L16:1 — Global Regulation — four-quadrant philosophy map ───── */
  '16:1': `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" aria-label="Global AI regulation philosophy quadrant">
    <defs>
      <style>.vreg { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <!-- Axes -->
    <line x1="280" y1="18" x2="280" y2="182" stroke="currentColor" stroke-opacity=".25" stroke-width="1.5"/>
    <line x1="30" y1="100" x2="530" y2="100" stroke="currentColor" stroke-opacity=".25" stroke-width="1.5"/>
    <!-- Axis labels -->
    <text x="280" y="12" text-anchor="middle" class="vreg" font-size="9" opacity=".5">More Restrictive</text>
    <text x="280" y="195" text-anchor="middle" class="vreg" font-size="9" opacity=".5">More Permissive</text>
    <text x="34" y="98" class="vreg" font-size="9" opacity=".5">State-led</text>
    <text x="490" y="98" text-anchor="end" class="vreg" font-size="9" opacity=".5">Market-led</text>
    <!-- EU — top right (restrictive, market) -->
    <rect x="295" y="24" width="130" height="64" rx="9" fill="rgba(99,102,241,.14)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="360" y="47" text-anchor="middle" class="vreg" font-size="13">🇪🇺</text>
    <text x="360" y="64" text-anchor="middle" class="vreg" font-size="11" font-weight="700">European Union</text>
    <text x="360" y="78" text-anchor="middle" class="vreg" font-size="9" opacity=".7">Protect citizens first</text>
    <!-- China — top left (restrictive, state) -->
    <rect x="135" y="24" width="130" height="64" rx="9" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="200" y="47" text-anchor="middle" class="vreg" font-size="13">🇨🇳</text>
    <text x="200" y="64" text-anchor="middle" class="vreg" font-size="11" font-weight="700">China</text>
    <text x="200" y="78" text-anchor="middle" class="vreg" font-size="9" opacity=".7">State control first</text>
    <!-- UK — bottom right (permissive, market) -->
    <rect x="295" y="112" width="130" height="64" rx="9" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.45)" stroke-width="1.5"/>
    <text x="360" y="135" text-anchor="middle" class="vreg" font-size="13">🇬🇧</text>
    <text x="360" y="152" text-anchor="middle" class="vreg" font-size="11" font-weight="700">United Kingdom</text>
    <text x="360" y="166" text-anchor="middle" class="vreg" font-size="9" opacity=".7">Enable innovation</text>
    <!-- US — bottom left (permissive, market-ish, post-Trump) -->
    <rect x="135" y="112" width="130" height="64" rx="9" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="200" y="135" text-anchor="middle" class="vreg" font-size="13">🇺🇸</text>
    <text x="200" y="152" text-anchor="middle" class="vreg" font-size="11" font-weight="700">United States</text>
    <text x="200" y="166" text-anchor="middle" class="vreg" font-size="9" opacity=".7">Deregulate · compete</text>
  </svg>`,

  /* ── L23:3 — Model Card — anatomy of a transparency document ─────── */
  '23:3': `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" aria-label="Model card anatomy">
    <defs>
      <style>.vmc { font-family: system-ui, sans-serif; fill: currentColor; }</style>
    </defs>
    <!-- Card background -->
    <rect x="10" y="8" width="540" height="180" rx="12" fill="rgba(99,102,241,.06)" stroke="rgba(99,102,241,.3)" stroke-width="1.5"/>
    <text x="280" y="26" text-anchor="middle" class="vmc" font-size="11" font-weight="700" opacity=".6" letter-spacing=".06em">MODEL CARD</text>
    <!-- Six sections in 2×3 grid -->
    <!-- Row 1 -->
    <rect x="22" y="34" width="162" height="65" rx="7" fill="rgba(99,102,241,.1)" stroke="rgba(99,102,241,.3)" stroke-width="1"/>
    <text x="103" y="53" text-anchor="middle" class="vmc" font-size="10" font-weight="700">📋 Model Details</text>
    <text x="103" y="67" text-anchor="middle" class="vmc" font-size="9" opacity=".7">What does it do?</text>
    <text x="103" y="79" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Which AI tools / APIs?</text>
    <text x="103" y="91" text-anchor="middle" class="vmc" font-size="9" opacity=".7">When last updated?</text>

    <rect x="199" y="34" width="162" height="65" rx="7" fill="rgba(6,182,212,.09)" stroke="rgba(6,182,212,.3)" stroke-width="1"/>
    <text x="280" y="53" text-anchor="middle" class="vmc" font-size="10" font-weight="700">🎯 Intended Use</text>
    <text x="280" y="67" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Primary user group?</text>
    <text x="280" y="79" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Designed tasks?</text>
    <text x="280" y="91" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Explicitly NOT for?</text>

    <rect x="376" y="34" width="162" height="65" rx="7" fill="rgba(34,197,94,.09)" stroke="rgba(34,197,94,.3)" stroke-width="1"/>
    <text x="457" y="53" text-anchor="middle" class="vmc" font-size="10" font-weight="700">📊 Performance</text>
    <text x="457" y="67" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Accuracy / effectiveness?</text>
    <text x="457" y="79" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Best-case inputs?</text>
    <text x="457" y="91" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Worst-case inputs?</text>

    <!-- Row 2 -->
    <rect x="22" y="108" width="162" height="65" rx="7" fill="rgba(245,158,11,.09)" stroke="rgba(245,158,11,.3)" stroke-width="1"/>
    <text x="103" y="127" text-anchor="middle" class="vmc" font-size="10" font-weight="700">⚖️ Bias &amp; Fairness</text>
    <text x="103" y="141" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Tested with diverse users?</text>
    <text x="103" y="153" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Demographic differences?</text>
    <text x="103" y="165" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Mitigation steps taken?</text>

    <rect x="199" y="108" width="162" height="65" rx="7" fill="rgba(239,68,68,.09)" stroke="rgba(239,68,68,.3)" stroke-width="1"/>
    <text x="280" y="127" text-anchor="middle" class="vmc" font-size="10" font-weight="700">🚫 Limitations</text>
    <text x="280" y="141" text-anchor="middle" class="vmc" font-size="9" opacity=".7">What can it NOT do?</text>
    <text x="280" y="153" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Inputs that cause failure?</text>
    <text x="280" y="165" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Confidence level?</text>

    <rect x="376" y="108" width="162" height="65" rx="7" fill="rgba(168,85,247,.09)" stroke="rgba(168,85,247,.3)" stroke-width="1"/>
    <text x="457" y="127" text-anchor="middle" class="vmc" font-size="10" font-weight="700">🛡️ Ethics</text>
    <text x="457" y="141" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Potential harms?</text>
    <text x="457" y="153" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Built-in safeguards?</text>
    <text x="457" y="165" text-anchor="middle" class="vmc" font-size="9" opacity=".7">What users must know?</text>
  </svg>`,

  /* ── L24:1 — AI Project Lifecycle — five-stage pipeline ─────────── */
  '24:1': `<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" aria-label="AI project lifecycle five stages">
    <defs>
      <style>.vlc { font-family: system-ui, sans-serif; fill: currentColor; }</style>
      <marker id="arr24" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <!-- Five stages -->
    <!-- 1. Define -->
    <rect x="10" y="45" width="90" height="75" rx="9" fill="rgba(99,102,241,.14)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="55" y="70" text-anchor="middle" class="vlc" font-size="18">🎯</text>
    <text x="55" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Define</text>
    <text x="55" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Problem</text>
    <text x="55" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">framing</text>
    <text x="55" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L21–22</text>
    <!-- Arrow -->
    <line x1="102" y1="82" x2="120" y2="82" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arr24)"/>
    <!-- 2. Design -->
    <rect x="122" y="45" width="90" height="75" rx="9" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.45)" stroke-width="1.5"/>
    <text x="167" y="70" text-anchor="middle" class="vlc" font-size="18">🏗️</text>
    <text x="167" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Design</text>
    <text x="167" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Architecture</text>
    <text x="167" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">&amp; ethics</text>
    <text x="167" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L23–24</text>
    <!-- Arrow -->
    <line x1="214" y1="82" x2="232" y2="82" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arr24)"/>
    <!-- 3. Build -->
    <rect x="234" y="45" width="90" height="75" rx="9" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="279" y="70" text-anchor="middle" class="vlc" font-size="18">⚙️</text>
    <text x="279" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Build</text>
    <text x="279" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Prompt eng.</text>
    <text x="279" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">&amp; sprints</text>
    <text x="279" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L25–35</text>
    <!-- Arrow -->
    <line x1="326" y1="82" x2="344" y2="82" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arr24)"/>
    <!-- 4. Evaluate -->
    <rect x="346" y="45" width="90" height="75" rx="9" fill="rgba(239,68,68,.11)" stroke="rgba(239,68,68,.4)" stroke-width="1.5"/>
    <text x="391" y="70" text-anchor="middle" class="vlc" font-size="18">🧪</text>
    <text x="391" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Evaluate</text>
    <text x="391" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Test, bias</text>
    <text x="391" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">&amp; audit</text>
    <text x="391" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L36–38</text>
    <!-- Arrow -->
    <line x1="438" y1="82" x2="456" y2="82" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arr24)"/>
    <!-- 5. Communicate -->
    <rect x="458" y="45" width="90" height="75" rx="9" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
    <text x="503" y="70" text-anchor="middle" class="vlc" font-size="18">📢</text>
    <text x="503" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Communicate</text>
    <text x="503" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Pitch, reflect</text>
    <text x="503" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">&amp; model card</text>
    <text x="503" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L39–44</text>
    <!-- Iteration arc -->
    <path d="M503,45 C503,18 55,18 55,45" fill="none" stroke="currentColor" stroke-opacity=".2" stroke-width="1.2" stroke-dasharray="5 4" marker-end="url(#arr24)"/>
    <text x="280" y="14" text-anchor="middle" class="vlc" font-size="8.5" opacity=".4" font-style="italic">Professional teams iterate between stages — but never skip Define</text>
  </svg>`,

  /* ── L4:1 — Black Box vs Explainable AI ─────────────────────────────── */
  '4:1': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="Black Box vs Explainable AI comparison">
    <defs>
      <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".5"/></marker>
    </defs>
    <!-- Panel labels -->
    <text x="140" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Black Box</text>
    <text x="420" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Explainable AI</text>
    <!-- Divider -->
    <line x1="280" y1="22" x2="280" y2="155" stroke="currentColor" stroke-opacity=".2" stroke-width="1" stroke-dasharray="5 4"/>
    <!-- LEFT: Input -->
    <rect x="10" y="30" width="75" height="55" rx="6" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.45)" stroke-width="1.2"/>
    <text x="47" y="48" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Input</text>
    <text x="47" y="60" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Age: 32</text>
    <text x="47" y="71" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Income: £40k</text>
    <text x="47" y="82" text-anchor="middle" class="vlc" font-size="8" opacity=".7">History: Clean</text>
    <!-- Arrow -->
    <line x1="85" y1="57" x2="98" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- LEFT: Black box -->
    <rect x="100" y="30" width="80" height="55" rx="6" fill="rgba(15,23,42,.6)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="140" y="60" text-anchor="middle" class="vlc" font-size="26" font-weight="900">?</text>
    <text x="140" y="78" text-anchor="middle" class="vlc" font-size="7" font-style="italic" opacity=".6">hidden layers</text>
    <!-- Arrow -->
    <line x1="180" y1="57" x2="193" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- LEFT: Output -->
    <rect x="195" y="36" width="68" height="44" rx="6" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.5)" stroke-width="1.2"/>
    <text x="229" y="56" text-anchor="middle" class="vlc" font-size="11" font-weight="700">DENY</text>
    <text x="229" y="70" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">No reason given</text>
    <!-- LEFT: Warning note -->
    <text x="140" y="110" text-anchor="middle" class="vlc" font-size="8" fill="rgba(239,68,68,.8)">No explanation — GDPR Art.22 may apply</text>
    <!-- RIGHT: Input -->
    <rect x="290" y="30" width="75" height="55" rx="6" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.45)" stroke-width="1.2"/>
    <text x="327" y="48" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Input</text>
    <text x="327" y="60" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Age: 32</text>
    <text x="327" y="71" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Income: £40k</text>
    <text x="327" y="82" text-anchor="middle" class="vlc" font-size="8" opacity=".7">History: Clean</text>
    <!-- Arrow -->
    <line x1="365" y1="57" x2="378" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- RIGHT: XAI box -->
    <rect x="380" y="30" width="80" height="55" rx="6" fill="rgba(6,182,212,.08)" stroke="rgba(6,182,212,.5)" stroke-width="1.5"/>
    <text x="420" y="50" text-anchor="middle" class="vlc" font-size="8.5" opacity=".9">Income: +42%</text>
    <text x="420" y="63" text-anchor="middle" class="vlc" font-size="8.5" opacity=".9">History: +38%</text>
    <text x="420" y="76" text-anchor="middle" class="vlc" font-size="8.5" opacity=".9">Age: +20%</text>
    <!-- Arrow -->
    <line x1="460" y1="57" x2="473" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- RIGHT: Output -->
    <rect x="475" y="36" width="68" height="44" rx="6" fill="rgba(239,68,68,.12)" stroke="rgba(34,197,94,.5)" stroke-width="1.2"/>
    <text x="509" y="56" text-anchor="middle" class="vlc" font-size="11" font-weight="700">DENY</text>
    <text x="509" y="70" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">No reason given</text>
    <!-- RIGHT: Reason box -->
    <rect x="290" y="122" width="255" height="28" rx="5" fill="rgba(34,197,94,.08)" stroke="rgba(34,197,94,.4)" stroke-width="1"/>
    <text x="417" y="133" text-anchor="middle" class="vlc" font-size="7.5">Reason: income below threshold</text>
    <text x="417" y="144" text-anchor="middle" class="vlc" font-size="7.5">— you can appeal</text>
  </svg>`,

  /* ── L5:1 — Data Bias Feedback Loop ─────────────────────────────────── */
  '5:1': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="Data bias feedback loop diagram">
    <defs>
      <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a5" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".55"/></marker>
    </defs>
    <!-- Node 1: Biased Training Data — top center (280,28) -->
    <rect x="225" y="12" width="110" height="32" rx="8" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.45)" stroke-width="1.5"/>
    <text x="280" y="32" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Biased Training Data</text>
    <!-- Node 2: Biased Model — right (460,80) -->
    <rect x="405" y="64" width="110" height="32" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="460" y="84" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Biased Model</text>
    <!-- Node 3: Biased Decisions — bottom right (390,152) -->
    <rect x="335" y="136" width="110" height="32" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="390" y="156" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Biased Decisions</text>
    <!-- Node 4: Real-World Harm — bottom left (170,152) -->
    <rect x="115" y="136" width="110" height="32" rx="8" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="170" y="156" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Real-World Harm</text>
    <!-- Node 5: Validates Bias — left (100,80) -->
    <rect x="45" y="64" width="110" height="32" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="100" y="84" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Validates Bias</text>
    <!-- Arrows: 1→2 -->
    <path d="M335,32 Q420,32 410,64" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" marker-end="url(#a5)"/>
    <!-- 2→3 -->
    <path d="M460,96 Q450,120 445,136" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" marker-end="url(#a5)"/>
    <!-- 3→4 -->
    <path d="M335,152 Q280,165 225,152" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" marker-end="url(#a5)"/>
    <!-- 4→5 -->
    <path d="M115,152 Q100,130 105,96" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" marker-end="url(#a5)"/>
    <!-- 5→1 -->
    <path d="M100,64 Q140,32 225,28" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.5" marker-end="url(#a5)"/>
    <!-- Centre label -->
    <text x="280" y="91" text-anchor="middle" class="vlc" font-size="10" font-weight="700" opacity=".35">FEEDBACK</text>
    <text x="280" y="104" text-anchor="middle" class="vlc" font-size="10" font-weight="700" opacity=".35">LOOP</text>
  </svg>`,

  /* ── L9:1 — PTFC Prompt Framework ───────────────────────────────────── */
  '9:1': `<svg viewBox="0 0 560 155" xmlns="http://www.w3.org/2000/svg" aria-label="PTFC Prompt Framework diagram">
    <defs>
      <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a9" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".3"/></marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="vlc" font-size="12" font-weight="800">The PTFC Prompt Framework</text>
    <!-- Block P -->
    <rect x="10" y="30" width="125" height="110" rx="8" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.5)" stroke-width="1.5"/>
    <text x="72" y="80" text-anchor="middle" class="vlc" font-size="36" font-weight="900">P</text>
    <text x="72" y="98" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Persona</text>
    <text x="72" y="112" text-anchor="middle" class="vlc" font-size="8" opacity=".65">Who should the</text>
    <text x="72" y="123" text-anchor="middle" class="vlc" font-size="8" opacity=".65">AI act as?</text>
    <!-- Arrow P→T -->
    <line x1="135" y1="85" x2="148" y2="85" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5" marker-end="url(#a9)"/>
    <!-- Block T -->
    <rect x="150" y="30" width="125" height="110" rx="8" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.5)" stroke-width="1.5"/>
    <text x="212" y="80" text-anchor="middle" class="vlc" font-size="36" font-weight="900">T</text>
    <text x="212" y="98" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Task</text>
    <text x="212" y="112" text-anchor="middle" class="vlc" font-size="8" opacity=".65">What do you want</text>
    <text x="212" y="123" text-anchor="middle" class="vlc" font-size="8" opacity=".65">it to do?</text>
    <!-- Arrow T→F -->
    <line x1="275" y1="85" x2="288" y2="85" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5" marker-end="url(#a9)"/>
    <!-- Block F -->
    <rect x="290" y="30" width="125" height="110" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.5)" stroke-width="1.5"/>
    <text x="352" y="80" text-anchor="middle" class="vlc" font-size="36" font-weight="900">F</text>
    <text x="352" y="98" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Format</text>
    <text x="352" y="112" text-anchor="middle" class="vlc" font-size="8" opacity=".65">How should it</text>
    <text x="352" y="123" text-anchor="middle" class="vlc" font-size="8" opacity=".65">structure output?</text>
    <!-- Arrow F→C -->
    <line x1="415" y1="85" x2="428" y2="85" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5" marker-end="url(#a9)"/>
    <!-- Block C -->
    <rect x="430" y="30" width="120" height="110" rx="8" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.5)" stroke-width="1.5"/>
    <text x="490" y="80" text-anchor="middle" class="vlc" font-size="36" font-weight="900">C</text>
    <text x="490" y="98" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Context</text>
    <text x="490" y="112" text-anchor="middle" class="vlc" font-size="8" opacity=".65">Your role, goals</text>
    <text x="490" y="123" text-anchor="middle" class="vlc" font-size="8" opacity=".65">&amp; constraints</text>
  </svg>`,

  /* ── L12:1 — The Revision Loop ───────────────────────────────────────── */
  '12:1': `<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" aria-label="The Revision Loop diagram">
    <defs>
      <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a12" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".5"/></marker>
    </defs>
    <text x="280" y="16" text-anchor="middle" class="vlc" font-size="11" font-weight="700">The Revision Loop</text>
    <!-- Box 1: Draft -->
    <rect x="20" y="40" width="130" height="65" rx="10" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.45)" stroke-width="1.5"/>
    <text x="85" y="63" text-anchor="middle" class="vlc" font-size="18">📝</text>
    <text x="85" y="80" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Your draft</text>
    <text x="85" y="95" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Initial attempt</text>
    <!-- Arrow 1→2 -->
    <line x1="150" y1="72" x2="213" y2="72" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a12)"/>
    <!-- Box 2: AI Feedback -->
    <rect x="215" y="40" width="130" height="65" rx="10" fill="rgba(6,182,212,.1)" stroke="rgba(6,182,212,.45)" stroke-width="1.5"/>
    <text x="280" y="63" text-anchor="middle" class="vlc" font-size="18">🤖</text>
    <text x="280" y="80" text-anchor="middle" class="vlc" font-size="11" font-weight="700">AI suggests</text>
    <text x="280" y="95" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Improvements</text>
    <!-- Arrow 2→3 -->
    <line x1="345" y1="72" x2="408" y2="72" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a12)"/>
    <!-- Box 3: Evaluate -->
    <rect x="410" y="40" width="130" height="65" rx="10" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="475" y="63" text-anchor="middle" class="vlc" font-size="18">⚖️</text>
    <text x="475" y="80" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Your judgement</text>
    <text x="475" y="95" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Keep / Adapt / Reject</text>
    <!-- Return arc -->
    <path d="M475,105 C475,140 85,140 85,105" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="1.2" stroke-dasharray="5 4" marker-end="url(#a12)"/>
    <text x="280" y="148" text-anchor="middle" class="vlc" font-size="8.5" font-style="italic" opacity=".6">Refine &amp; repeat</text>
    <!-- Critical note -->
    <text x="475" y="122" text-anchor="middle" class="vlc" font-size="8" fill="rgba(239,68,68,.75)">Critical step —</text>
    <text x="475" y="133" text-anchor="middle" class="vlc" font-size="8" fill="rgba(239,68,68,.75)">never accept blindly</text>
  </svg>`,

  /* ── L13:1 — Deepfake Detection Checklist ────────────────────────────── */
  '13:1': `<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" aria-label="Deepfake Detection Checklist">
    <defs><style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="16" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Deepfake Detection Checklist</text>
    <!-- Row 1: indigo — Lip & eye sync -->
    <rect x="10" y="28" width="4" height="26" rx="2" fill="rgba(99,102,241,.7)"/>
    <text x="20" y="47" class="vlc" font-size="14">🎭</text>
    <text x="42" y="44" class="vlc" font-size="10" font-weight="700">Lip &amp; eye sync</text>
    <text x="42" y="55" class="vlc" font-size="9" opacity=".7">Check blinking, mouth movement at edges</text>
    <rect x="460" y="31" width="88" height="18" rx="9" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.45)" stroke-width="1"/>
    <text x="504" y="44" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(34,197,94,.9)">CHECK</text>
    <!-- Row 2: cyan — Reverse image search -->
    <rect x="10" y="62" width="4" height="26" rx="2" fill="rgba(6,182,212,.7)"/>
    <text x="20" y="81" class="vlc" font-size="14">🔍</text>
    <text x="42" y="78" class="vlc" font-size="10" font-weight="700">Reverse image search</text>
    <text x="42" y="89" class="vlc" font-size="9" opacity=".7">Google Images or TinEye the key frame</text>
    <rect x="460" y="65" width="88" height="18" rx="9" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.45)" stroke-width="1"/>
    <text x="504" y="78" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(34,197,94,.9)">CHECK</text>
    <!-- Row 3: amber — Metadata & source -->
    <rect x="10" y="96" width="4" height="26" rx="2" fill="rgba(245,158,11,.7)"/>
    <text x="20" y="115" class="vlc" font-size="14">📁</text>
    <text x="42" y="112" class="vlc" font-size="10" font-weight="700">Metadata &amp; source</text>
    <text x="42" y="123" class="vlc" font-size="9" opacity=".7">Who first published? When? On what platform?</text>
    <rect x="460" y="99" width="88" height="18" rx="9" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.45)" stroke-width="1"/>
    <text x="504" y="112" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(34,197,94,.9)">CHECK</text>
    <!-- Row 4: green — Corroborating sources -->
    <rect x="10" y="130" width="4" height="26" rx="2" fill="rgba(34,197,94,.7)"/>
    <text x="20" y="149" class="vlc" font-size="14">📰</text>
    <text x="42" y="146" class="vlc" font-size="10" font-weight="700">Corroborating sources</text>
    <text x="42" y="157" class="vlc" font-size="9" opacity=".7">Find 3+ independent reports of the same event</text>
    <rect x="460" y="133" width="88" height="18" rx="9" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.45)" stroke-width="1"/>
    <text x="504" y="146" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(34,197,94,.9)">CHECK</text>
    <!-- Row 5: red — Platform labels -->
    <rect x="10" y="158" width="4" height="14" rx="2" fill="rgba(239,68,68,.7)"/>
    <text x="20" y="169" class="vlc" font-size="12">🏷️</text>
    <text x="42" y="169" class="vlc" font-size="10" font-weight="700">Platform labels</text>
    <text x="185" y="169" class="vlc" font-size="9" opacity=".7">Look for AI-generated content watermarks</text>
    <rect x="460" y="158" width="88" height="16" rx="8" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.45)" stroke-width="1"/>
    <text x="504" y="169" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(245,158,11,.9)">EMERGING</text>
  </svg>`,

  /* ── L17:1 — Policy Frameworks Spectrum ──────────────────────────────── */
  '17:1': `<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" aria-label="AI Regulatory Approaches spectrum">
    <defs>
      <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <linearGradient id="regGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(239,68,68,.5)"/>
        <stop offset="100%" stop-color="rgba(99,102,241,.5)"/>
      </linearGradient>
    </defs>
    <text x="280" y="16" text-anchor="middle" class="vlc" font-size="12" font-weight="800">AI Regulatory Approaches</text>
    <!-- Gradient bar -->
    <rect x="30" y="45" width="500" height="22" rx="11" fill="url(#regGrad)"/>
    <!-- Axis labels -->
    <text x="30" y="80" class="vlc" font-size="9" font-weight="700">Rules-Based</text>
    <text x="30" y="91" class="vlc" font-size="8" opacity=".65">Specific prohibitions</text>
    <text x="530" y="80" text-anchor="end" class="vlc" font-size="9" font-weight="700">Principles-Based</text>
    <text x="530" y="91" text-anchor="end" class="vlc" font-size="8" opacity=".65">Outcomes-focused</text>
    <!-- Marker: China x=80 -->
    <line x1="80" y1="44" x2="80" y2="28" stroke="currentColor" stroke-opacity=".45" stroke-width="1.2"/>
    <text x="80" y="22" text-anchor="middle" class="vlc" font-size="11">🇨🇳</text>
    <text x="80" y="38" text-anchor="middle" class="vlc" font-size="8" font-weight="700">China</text>
    <text x="80" y="104" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">State control +</text>
    <text x="80" y="114" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">surveillance use</text>
    <!-- Marker: EU x=180 -->
    <line x1="180" y1="44" x2="180" y2="28" stroke="currentColor" stroke-opacity=".45" stroke-width="1.2"/>
    <text x="180" y="22" text-anchor="middle" class="vlc" font-size="11">🇪🇺</text>
    <text x="180" y="38" text-anchor="middle" class="vlc" font-size="8" font-weight="700">EU AI Act</text>
    <text x="180" y="104" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Risk tiers +</text>
    <text x="180" y="114" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">prohibitions</text>
    <!-- Marker: UK x=390 -->
    <line x1="390" y1="44" x2="390" y2="28" stroke="currentColor" stroke-opacity=".45" stroke-width="1.2"/>
    <text x="390" y="22" text-anchor="middle" class="vlc" font-size="11">🇬🇧</text>
    <text x="390" y="38" text-anchor="middle" class="vlc" font-size="8" font-weight="700">UK</text>
    <text x="390" y="104" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Sector-led +</text>
    <text x="390" y="114" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">light touch</text>
    <!-- Marker: US x=490 -->
    <line x1="490" y1="44" x2="490" y2="28" stroke="currentColor" stroke-opacity=".45" stroke-width="1.2"/>
    <text x="490" y="22" text-anchor="middle" class="vlc" font-size="11">🇺🇸</text>
    <text x="490" y="38" text-anchor="middle" class="vlc" font-size="8" font-weight="700">US</text>
    <text x="490" y="104" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Deregulation</text>
    <text x="490" y="114" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">(post 2025)</text>
    <!-- Note -->
    <text x="280" y="138" text-anchor="middle" class="vlc" font-size="9" font-style="italic" opacity=".55">The EU and US are diverging — businesses must comply with both</text>
  </svg>`,

  /* ── L22:1 — Problem Statement Anatomy ───────────────────────────────── */
  '22:1': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="Anatomy of a Strong Problem Statement">
    <defs><style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="16" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Anatomy of a Strong Problem Statement</text>
    <!-- Central statement block -->
    <rect x="20" y="28" width="520" height="60" rx="10" fill="rgba(99,102,241,.06)" stroke="rgba(99,102,241,.3)" stroke-width="1.5"/>
    <!-- Statement text split into 4 colored segments -->
    <text x="30" y="52" class="vlc" font-size="9" font-weight="700" fill="rgba(99,102,241,.9)">[Year 12 students]</text>
    <text x="165" y="52" class="vlc" font-size="9" font-weight="700" fill="rgba(239,68,68,.85)"> who [struggle to revise effectively]</text>
    <text x="30" y="70" class="vlc" font-size="9" font-weight="700" fill="rgba(245,158,11,.85)">lack [adaptive, curriculum-specific support]</text>
    <text x="305" y="70" class="vlc" font-size="9" font-weight="700" fill="rgba(6,182,212,.85)"> — current tools are [generic and don't map to their exam board].</text>
    <!-- Drop lines -->
    <line x1="95" y1="88" x2="75" y2="120" stroke="rgba(99,102,241,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="245" y1="88" x2="200" y2="120" stroke="rgba(239,68,68,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="165" y1="88" x2="340" y2="120" stroke="rgba(245,158,11,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="420" y1="88" x2="470" y2="120" stroke="rgba(6,182,212,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <!-- Annotation boxes -->
    <rect x="20" y="120" width="110" height="30" rx="5" fill="rgba(99,102,241,.12)" stroke="rgba(99,102,241,.4)" stroke-width="1"/>
    <text x="75" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">WHO</text>
    <text x="75" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">Target user</text>
    <rect x="145" y="120" width="110" height="30" rx="5" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1"/>
    <text x="200" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">PROBLEM</text>
    <text x="200" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">Core pain</text>
    <rect x="275" y="120" width="110" height="30" rx="5" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="330" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">GAP</text>
    <text x="330" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">What&apos;s missing</text>
    <rect x="405" y="120" width="130" height="30" rx="5" fill="rgba(6,182,212,.12)" stroke="rgba(6,182,212,.4)" stroke-width="1"/>
    <text x="470" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">CONTEXT</text>
    <text x="470" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">Why now</text>
  </svg>`,

  /* ── L34:1 — Ethical Audit Severity Matrix ───────────────────────────── */
  '34:1': `<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" aria-label="Ethical Audit Priority Matrix">
    <defs><style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Ethical Audit: Priority Matrix</text>
    <!-- Y-axis label -->
    <text x="12" y="95" text-anchor="middle" class="vlc" font-size="9" font-weight="700" opacity=".6" transform="rotate(-90,12,95)">IMPACT</text>
    <!-- X-axis label -->
    <text x="300" y="170" text-anchor="middle" class="vlc" font-size="9" font-weight="700" opacity=".6">EASE OF FIX →</text>
    <!-- Quadrants: top-left, top-right, bottom-left, bottom-right -->
    <!-- Top-left: High impact, Easy fix — indigo -->
    <rect x="60" y="25" width="240" height="65" fill="rgba(99,102,241,.15)" stroke="rgba(99,102,241,.3)" stroke-width="1"/>
    <text x="180" y="53" text-anchor="middle" class="vlc" font-size="13">⚡</text>
    <text x="180" y="68" text-anchor="middle" class="vlc" font-size="10" font-weight="700">FIX NOW</text>
    <text x="180" y="82" text-anchor="middle" class="vlc" font-size="8.5" opacity=".7">High value, quick win</text>
    <!-- Top-right: High impact, Hard fix — red -->
    <rect x="300" y="25" width="240" height="65" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.3)" stroke-width="1"/>
    <text x="420" y="53" text-anchor="middle" class="vlc" font-size="13">🔴</text>
    <text x="420" y="68" text-anchor="middle" class="vlc" font-size="10" font-weight="700">PLAN &amp; MITIGATE</text>
    <text x="420" y="82" text-anchor="middle" class="vlc" font-size="8.5" opacity=".7">Needs a strategy</text>
    <!-- Bottom-left: Low impact, Easy fix — green -->
    <rect x="60" y="90" width="240" height="65" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.3)" stroke-width="1"/>
    <text x="180" y="118" text-anchor="middle" class="vlc" font-size="13">✓</text>
    <text x="180" y="133" text-anchor="middle" class="vlc" font-size="10" font-weight="700">QUICK WIN</text>
    <text x="180" y="147" text-anchor="middle" class="vlc" font-size="8.5" opacity=".7">Low effort, worth doing</text>
    <!-- Bottom-right: Low impact, Hard fix — amber -->
    <rect x="300" y="90" width="240" height="65" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.3)" stroke-width="1"/>
    <text x="420" y="118" text-anchor="middle" class="vlc" font-size="13">📋</text>
    <text x="420" y="133" text-anchor="middle" class="vlc" font-size="10" font-weight="700">ACCEPT &amp; DOCUMENT</text>
    <text x="420" y="147" text-anchor="middle" class="vlc" font-size="8.5" opacity=".7">Acknowledge + monitor</text>
    <!-- Crosshair -->
    <line x1="300" y1="25" x2="300" y2="155" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/>
    <line x1="60" y1="90" x2="540" y2="90" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/>
    <!-- Axis edge labels -->
    <text x="55" y="60" text-anchor="end" class="vlc" font-size="8" opacity=".55">HIGH</text>
    <text x="55" y="122" text-anchor="end" class="vlc" font-size="8" opacity=".55">LOW</text>
    <text x="90" y="162" class="vlc" font-size="8" opacity=".55">EASY</text>
    <text x="505" y="162" class="vlc" font-size="8" opacity=".55">HARD</text>
  </svg>`,

};
