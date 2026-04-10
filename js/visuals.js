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

};
