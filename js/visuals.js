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
    <rect x="228" y="85" width="104" height="50" rx="10" fill="rgba(155,24,68,.18)" stroke="rgba(155,24,68,.6)" stroke-width="1.5"/>
    <text x="280" y="108" text-anchor="middle" class="vis-text" font-weight="700" font-size="13" fill="#c64b74">AI Systems</text>
    <text x="280" y="124" text-anchor="middle" class="vis-text" font-size="10" opacity=".7">in your daily life</text>
    <!-- Nodes -->
    <rect x="20"  y="10"  width="110" height="36" rx="7" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.4)" stroke-width="1.2"/>
    <text x="75"  y="32" text-anchor="middle" class="vis-text" font-size="11">📱 Social Feed</text>
    <rect x="420" y="10"  width="110" height="36" rx="7" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.4)" stroke-width="1.2"/>
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
    <rect x="10" y="18" width="520" height="40" rx="8" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.35)" stroke-width="1.2"/>
    <text x="24" y="44" class="vt" font-size="13" font-family="monospace, monospace" fill="#c64b74">"The cat sat on the </text>
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
    <rect x="60"  y="124" width="120" height="18" rx="4" fill="rgba(155,24,68,.2)" stroke="rgba(155,24,68,.4)" stroke-width="1"/>
    <text x="188" y="137" class="vt" font-size="11" fill="#c64b74" font-weight="700">21%</text>
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
    <rect x="10" y="60" width="120" height="60" rx="8" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.4)" stroke-width="1.2"/>
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
    <rect x="342" y="60" width="110" height="60" rx="8" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.45)" stroke-width="1.2"/>
    <text x="397" y="85" text-anchor="middle" class="vp" font-size="11" font-weight="700" fill="#009fe3">Model</text>
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
    <rect x="10" y="35" width="100" height="28" rx="5" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="60" y="53" text-anchor="middle" class="vb" font-size="11">CV / Résumé</text>
    <rect x="10" y="70" width="100" height="28" rx="5" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="60" y="88" text-anchor="middle" class="vb" font-size="11">Postcode</text>
    <rect x="10" y="105" width="100" height="28" rx="5" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
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
    <rect x="10"  y="24" width="122" height="92" rx="10" fill="rgba(155,24,68,.13)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="71"  y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#c64b74">P</text>
    <text x="71"  y="70" text-anchor="middle" class="vf" font-size="12" font-weight="700">Persona</text>
    <text x="71"  y="86" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">"Act as an expert</text>
    <text x="71"  y="99" text-anchor="middle" class="vf" font-size="9.5" opacity=".65">in…"</text>
    <!-- T -->
    <rect x="146" y="24" width="122" height="92" rx="10" fill="rgba(0,159,227,.13)" stroke="rgba(0,159,227,.5)" stroke-width="1.5"/>
    <text x="207" y="50" text-anchor="middle" class="vf" font-size="26" font-weight="800" fill="#009fe3">T</text>
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
    <rect x="150" y="42" width="110" height="96" rx="9" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="205" y="68" text-anchor="middle" class="vd" font-size="11" font-weight="700" fill="#c64b74">Generator</text>
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
    <rect x="10" y="65" width="100" height="50" rx="8" fill="rgba(155,24,68,.15)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
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
    <rect x="210" y="12" width="140" height="44" rx="9" fill="rgba(155,24,68,.15)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
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
    <rect x="186" y="60" width="188" height="50" rx="9" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.35)" stroke-width="1.5"/>
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
    <rect x="10" y="55" width="105" height="56" rx="8" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
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
    <rect x="307" y="55" width="110" height="56" rx="8" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
    <text x="362" y="78" text-anchor="middle" class="vcp" font-size="11" font-weight="700" fill="#009fe3">AI Model</text>
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

    <rect x="235" y="50" width="100" height="80" rx="8" fill="rgba(155,24,68,.11)" stroke="rgba(155,24,68,.4)" stroke-width="1.2"/>
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
    <rect x="205" y="62" width="50" height="16" rx="2" fill="rgba(155,24,68,.6)"/>
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
    <rect x="255" y="30" width="60" height="108" rx="3" fill="rgba(155,24,68,.5)"/>
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
    <rect x="295" y="24" width="130" height="64" rx="9" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="360" y="47" text-anchor="middle" class="vreg" font-size="13">🇪🇺</text>
    <text x="360" y="64" text-anchor="middle" class="vreg" font-size="11" font-weight="700">European Union</text>
    <text x="360" y="78" text-anchor="middle" class="vreg" font-size="9" opacity=".7">Protect citizens first</text>
    <!-- China — top left (restrictive, state) -->
    <rect x="135" y="24" width="130" height="64" rx="9" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="200" y="47" text-anchor="middle" class="vreg" font-size="13">🇨🇳</text>
    <text x="200" y="64" text-anchor="middle" class="vreg" font-size="11" font-weight="700">China</text>
    <text x="200" y="78" text-anchor="middle" class="vreg" font-size="9" opacity=".7">State control first</text>
    <!-- UK — bottom right (permissive, market) -->
    <rect x="295" y="112" width="130" height="64" rx="9" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
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
    <rect x="10" y="8" width="540" height="180" rx="12" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.3)" stroke-width="1.5"/>
    <text x="280" y="26" text-anchor="middle" class="vmc" font-size="11" font-weight="700" opacity=".6" letter-spacing=".06em">MODEL CARD</text>
    <!-- Six sections in 2×3 grid -->
    <!-- Row 1 -->
    <rect x="22" y="34" width="162" height="65" rx="7" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="103" y="53" text-anchor="middle" class="vmc" font-size="10" font-weight="700">📋 Model Details</text>
    <text x="103" y="67" text-anchor="middle" class="vmc" font-size="9" opacity=".7">What does it do?</text>
    <text x="103" y="79" text-anchor="middle" class="vmc" font-size="9" opacity=".7">Which AI tools / APIs?</text>
    <text x="103" y="91" text-anchor="middle" class="vmc" font-size="9" opacity=".7">When last updated?</text>

    <rect x="199" y="34" width="162" height="65" rx="7" fill="rgba(0,159,227,.09)" stroke="rgba(0,159,227,.3)" stroke-width="1"/>
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
    <rect x="10" y="45" width="90" height="75" rx="9" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="55" y="70" text-anchor="middle" class="vlc" font-size="18">🎯</text>
    <text x="55" y="87" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Define</text>
    <text x="55" y="100" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Problem</text>
    <text x="55" y="112" text-anchor="middle" class="vlc" font-size="9" opacity=".65">framing</text>
    <text x="55" y="132" text-anchor="middle" class="vlc" font-size="8" opacity=".45">L21–22</text>
    <!-- Arrow -->
    <line x1="102" y1="82" x2="120" y2="82" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#arr24)"/>
    <!-- 2. Design -->
    <rect x="122" y="45" width="90" height="75" rx="9" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
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
    <rect x="10" y="30" width="75" height="55" rx="6" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.2"/>
    <text x="47" y="48" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Input</text>
    <text x="47" y="60" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Age: 32</text>
    <text x="47" y="71" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Income: £40k</text>
    <text x="47" y="82" text-anchor="middle" class="vlc" font-size="8" opacity=".7">History: Clean</text>
    <!-- Arrow -->
    <line x1="85" y1="57" x2="98" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- LEFT: Black box -->
    <rect x="100" y="30" width="80" height="55" rx="6" fill="rgba(15,23,42,.6)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
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
    <rect x="290" y="30" width="75" height="55" rx="6" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.2"/>
    <text x="327" y="48" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Input</text>
    <text x="327" y="60" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Age: 32</text>
    <text x="327" y="71" text-anchor="middle" class="vlc" font-size="8" opacity=".7">Income: £40k</text>
    <text x="327" y="82" text-anchor="middle" class="vlc" font-size="8" opacity=".7">History: Clean</text>
    <!-- Arrow -->
    <line x1="365" y1="57" x2="378" y2="57" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a4)"/>
    <!-- RIGHT: XAI box -->
    <rect x="380" y="30" width="80" height="55" rx="6" fill="rgba(0,159,227,.08)" stroke="rgba(0,159,227,.5)" stroke-width="1.5"/>
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
    <rect x="225" y="12" width="110" height="32" rx="8" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
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
    <rect x="10" y="30" width="125" height="110" rx="8" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
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
    <rect x="430" y="30" width="120" height="110" rx="8" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.5)" stroke-width="1.5"/>
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
    <rect x="20" y="40" width="130" height="65" rx="10" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
    <text x="85" y="63" text-anchor="middle" class="vlc" font-size="18">📝</text>
    <text x="85" y="80" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Your draft</text>
    <text x="85" y="95" text-anchor="middle" class="vlc" font-size="9" opacity=".65">Initial attempt</text>
    <!-- Arrow 1→2 -->
    <line x1="150" y1="72" x2="213" y2="72" stroke="currentColor" stroke-opacity=".5" stroke-width="1.5" marker-end="url(#a12)"/>
    <!-- Box 2: AI Feedback -->
    <rect x="215" y="40" width="130" height="65" rx="10" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
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
    <rect x="10" y="28" width="4" height="26" rx="2" fill="rgba(155,24,68,.7)"/>
    <text x="20" y="47" class="vlc" font-size="14">🎭</text>
    <text x="42" y="44" class="vlc" font-size="10" font-weight="700">Lip &amp; eye sync</text>
    <text x="42" y="55" class="vlc" font-size="9" opacity=".7">Check blinking, mouth movement at edges</text>
    <rect x="460" y="31" width="88" height="18" rx="9" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.45)" stroke-width="1"/>
    <text x="504" y="44" text-anchor="middle" class="vlc" font-size="8" font-weight="700" fill="rgba(34,197,94,.9)">CHECK</text>
    <!-- Row 2: cyan — Reverse image search -->
    <rect x="10" y="62" width="4" height="26" rx="2" fill="rgba(0,159,227,.7)"/>
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
        <stop offset="100%" stop-color="rgba(155,24,68,.5)"/>
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
    <rect x="20" y="28" width="520" height="60" rx="10" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.3)" stroke-width="1.5"/>
    <!-- Statement text split into 4 colored segments -->
    <text x="30" y="52" class="vlc" font-size="9" font-weight="700" fill="rgba(155,24,68,.9)">[Year 12 pupils]</text>
    <text x="165" y="52" class="vlc" font-size="9" font-weight="700" fill="rgba(239,68,68,.85)"> who [struggle to revise effectively]</text>
    <text x="30" y="70" class="vlc" font-size="9" font-weight="700" fill="rgba(245,158,11,.85)">lack [adaptive, curriculum-specific support]</text>
    <text x="305" y="70" class="vlc" font-size="9" font-weight="700" fill="rgba(0,159,227,.85)"> — current tools are [generic and don't map to their exam board].</text>
    <!-- Drop lines -->
    <line x1="95" y1="88" x2="75" y2="120" stroke="rgba(155,24,68,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="245" y1="88" x2="200" y2="120" stroke="rgba(239,68,68,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="165" y1="88" x2="340" y2="120" stroke="rgba(245,158,11,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="420" y1="88" x2="470" y2="120" stroke="rgba(0,159,227,.4)" stroke-width="1" stroke-dasharray="3 3"/>
    <!-- Annotation boxes -->
    <rect x="20" y="120" width="110" height="30" rx="5" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.4)" stroke-width="1"/>
    <text x="75" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">WHO</text>
    <text x="75" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">Target user</text>
    <rect x="145" y="120" width="110" height="30" rx="5" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" stroke-width="1"/>
    <text x="200" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">PROBLEM</text>
    <text x="200" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">Core pain</text>
    <rect x="275" y="120" width="110" height="30" rx="5" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="330" y="133" text-anchor="middle" class="vlc" font-size="8" font-weight="700">GAP</text>
    <text x="330" y="145" text-anchor="middle" class="vlc" font-size="7.5" opacity=".75">What&apos;s missing</text>
    <rect x="405" y="120" width="130" height="30" rx="5" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.4)" stroke-width="1"/>
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
    <rect x="60" y="25" width="240" height="65" fill="rgba(155,24,68,.15)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
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

  /* ── L3:3 — Overfitting vs. Generalisation ──────────────────────── */
  '3:3': `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" aria-label="Underfitting, good fit, and overfitting comparison">
  <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
  <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Underfitting · Good Fit · Overfitting</text>
  <!-- Panel 1: Underfitting -->
  <rect x="8" y="22" width="162" height="110" rx="9" fill="rgba(245,158,11,.09)" stroke="rgba(245,158,11,.4)" stroke-width="1.5"/>
  <text x="89" y="38" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Underfitting</text>
  <!-- Scatter dots -->
  <circle cx="35" cy="90" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="55" cy="72" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="70" cy="80" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="88" cy="58" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="105" cy="65" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="122" cy="48" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="140" cy="55" r="3.5" fill="rgba(155,24,68,.5)"/>
  <!-- Flat line (too simple) -->
  <line x1="28" y1="72" x2="152" y2="72" stroke="rgba(245,158,11,.8)" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="89" y="115" text-anchor="middle" class="vlc" font-size="8" opacity=".65">Too simple — misses the pattern</text>
  <text x="89" y="126" text-anchor="middle" class="vlc" font-size="8" fill="rgba(245,158,11,.8)" font-weight="600">High bias, low variance</text>

  <!-- Panel 2: Good Fit -->
  <rect x="199" y="22" width="162" height="110" rx="9" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
  <text x="280" y="38" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Good Fit ✓</text>
  <!-- Same dots -->
  <circle cx="226" cy="90" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="246" cy="72" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="261" cy="80" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="279" cy="58" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="296" cy="65" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="313" cy="48" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="331" cy="55" r="3.5" fill="rgba(155,24,68,.5)"/>
  <!-- Smooth curve -->
  <path d="M219,95 Q248,82 261,78 Q276,62 296,63 Q316,50 340,50" fill="none" stroke="rgba(34,197,94,.85)" stroke-width="2.5"/>
  <text x="280" y="115" text-anchor="middle" class="vlc" font-size="8" opacity=".65">Captures the signal, not the noise</text>
  <text x="280" y="126" text-anchor="middle" class="vlc" font-size="8" fill="rgba(34,197,94,.8)" font-weight="600">Balanced bias and variance</text>

  <!-- Panel 3: Overfitting -->
  <rect x="390" y="22" width="162" height="110" rx="9" fill="rgba(239,68,68,.09)" stroke="rgba(239,68,68,.4)" stroke-width="1.5"/>
  <text x="471" y="38" text-anchor="middle" class="vlc" font-size="10" font-weight="700">Overfitting</text>
  <!-- Same dots -->
  <circle cx="417" cy="90" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="437" cy="72" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="452" cy="80" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="470" cy="58" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="487" cy="65" r="3.5" fill="rgba(155,24,68,.5)"/><circle cx="504" cy="48" r="3.5" fill="rgba(155,24,68,.5)"/>
  <circle cx="522" cy="55" r="3.5" fill="rgba(155,24,68,.5)"/>
  <!-- Wiggly line threading every point -->
  <path d="M410,95 C420,88 428,95 437,72 C444,55 448,88 452,80 C456,72 464,45 470,58 C476,70 480,58 487,65 C493,72 498,40 504,48 C510,56 516,48 524,52" fill="none" stroke="rgba(239,68,68,.8)" stroke-width="2.5"/>
  <text x="471" y="115" text-anchor="middle" class="vlc" font-size="8" opacity=".65">Memorised training data — fails on new data</text>
  <text x="471" y="126" text-anchor="middle" class="vlc" font-size="8" fill="rgba(239,68,68,.8)" font-weight="600">Low bias, high variance</text>

  <!-- Bottom note -->
  <text x="280" y="150" text-anchor="middle" class="vlc" font-size="8" opacity=".45" font-style="italic">Test set accuracy reveals the difference — a model that fits training perfectly may fail completely on new data</text>
</svg>`,

  /* ── L20:1 — The Democratic Ratification Process ────────────────── */
  '20:1': `<svg viewBox="0 0 560 168" xmlns="http://www.w3.org/2000/svg" aria-label="Democratic policy ratification process flow">
  <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
  <defs><marker id="a20" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity=".45"/></marker></defs>
  <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">The Policy Ratification Process</text>
  <!-- Stage 1: Proposal -->
  <rect x="8" y="24" width="88" height="52" rx="8" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
  <text x="52" y="44" text-anchor="middle" class="vlc" font-size="16">📋</text>
  <text x="52" y="60" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Proposal</text>
  <text x="52" y="71" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Draft policy</text>
  <!-- Arrow -->
  <line x1="97" y1="50" x2="116" y2="50" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a20)"/>
  <!-- Stage 2: Debate -->
  <rect x="117" y="24" width="88" height="52" rx="8" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
  <text x="161" y="44" text-anchor="middle" class="vlc" font-size="16">💬</text>
  <text x="161" y="60" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Debate</text>
  <text x="161" y="71" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Open floor</text>
  <!-- Arrow -->
  <line x1="206" y1="50" x2="225" y2="50" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a20)"/>
  <!-- Stage 3: Amendment -->
  <rect x="226" y="24" width="108" height="52" rx="8" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
  <text x="280" y="44" text-anchor="middle" class="vlc" font-size="16">✏️</text>
  <text x="280" y="60" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Amendment</text>
  <text x="280" y="71" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Propose changes</text>
  <!-- Arrow -->
  <line x1="335" y1="50" x2="354" y2="50" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a20)"/>
  <!-- Stage 4: Vote -->
  <rect x="355" y="24" width="88" height="52" rx="8" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
  <text x="399" y="44" text-anchor="middle" class="vlc" font-size="16">🗳️</text>
  <text x="399" y="60" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Vote</text>
  <text x="399" y="71" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Simple majority</text>
  <!-- Arrow splits down -->
  <line x1="444" y1="50" x2="464" y2="50" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a20)"/>
  <!-- Stage 5: Decision diamond -->
  <polygon points="480,30 540,50 480,70 420,50" fill="rgba(155,24,68,.08)" stroke="rgba(155,24,68,.4)" stroke-width="1.5"/>
  <text x="480" y="54" text-anchor="middle" class="vlc" font-size="8.5" font-weight="700">Result</text>
  <!-- Down arrows from diamond -->
  <line x1="480" y1="70" x2="430" y2="95" stroke="rgba(34,197,94,.6)" stroke-width="1.5" marker-end="url(#a20)"/>
  <line x1="480" y1="70" x2="530" y2="95" stroke="rgba(239,68,68,.6)" stroke-width="1.5" marker-end="url(#a20)"/>
  <!-- Passed -->
  <rect x="378" y="96" width="104" height="42" rx="8" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
  <text x="430" y="115" text-anchor="middle" class="vlc" font-size="9" font-weight="700" fill="rgba(34,197,94,.9)">✓ RATIFIED</text>
  <text x="430" y="129" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Becomes policy</text>
  <!-- Rejected -->
  <rect x="490" y="96" width="62" height="42" rx="8" fill="rgba(239,68,68,.1)" stroke="rgba(239,68,68,.4)" stroke-width="1.5"/>
  <text x="521" y="115" text-anchor="middle" class="vlc" font-size="9" font-weight="700" fill="rgba(239,68,68,.8)">✗ FAIL</text>
  <text x="521" y="129" text-anchor="middle" class="vlc" font-size="7.5" opacity=".6">Revisit</text>
  <!-- Return arrow for amendment loop -->
  <path d="M161,77 C161,100 226,112 226,77" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#a20)"/>
  <text x="194" y="110" text-anchor="middle" class="vlc" font-size="7.5" opacity=".4" font-style="italic">back to amend</text>
  <!-- Bottom note -->
  <text x="200" y="152" text-anchor="middle" class="vlc" font-size="8" opacity=".45" font-style="italic">Real legislation follows this same process — debate and amendment are not obstacles, they are quality control</text>
</svg>`,

  /* ── L25:1 — From Single Prompts to Prompt Systems ──────────────── */
  '25:1': `<svg viewBox="0 0 560 168" xmlns="http://www.w3.org/2000/svg" aria-label="Prompt system architecture: from single prompts to prompt libraries">
  <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
  <defs><marker id="a25" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity=".4"/></marker></defs>
  <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">From Single Prompts to Prompt Systems</text>
  <!-- Level 1: Ad hoc prompt (top) -->
  <rect x="160" y="22" width="240" height="36" rx="8" fill="rgba(148,163,184,.12)" stroke="rgba(148,163,184,.4)" stroke-width="1.5"/>
  <text x="280" y="37" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Level 1 — Ad Hoc Prompt</text>
  <text x="280" y="51" text-anchor="middle" class="vlc" font-size="8" opacity=".6">One-off, written fresh each time, no consistency</text>
  <line x1="280" y1="58" x2="280" y2="72" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#a25)"/>
  <!-- Level 2: Template (middle) -->
  <rect x="100" y="73" width="360" height="36" rx="8" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
  <text x="280" y="88" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Level 2 — Reusable Template</text>
  <text x="280" y="102" text-anchor="middle" class="vlc" font-size="8" opacity=".6">PTFC structure applied consistently · variables filled per task · saves time</text>
  <line x1="280" y1="109" x2="280" y2="123" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#a25)"/>
  <!-- Level 3: Prompt Library (bottom) -->
  <rect x="20" y="124" width="520" height="36" rx="8" fill="rgba(155,24,68,.13)" stroke="rgba(155,24,68,.5)" stroke-width="2"/>
  <text x="280" y="139" text-anchor="middle" class="vlc" font-size="9" font-weight="700">Level 3 — Prompt Library</text>
  <text x="280" y="153" text-anchor="middle" class="vlc" font-size="8" opacity=".6">Organised · version-controlled · tested · shared with team · different prompts for each use case</text>
  <!-- Width indicators showing growth -->
  <text x="15" y="45" class="vlc" font-size="8" opacity=".35">↔</text>
  <text x="15" y="91" class="vlc" font-size="8" opacity=".35">↔↔</text>
  <text x="10" y="143" class="vlc" font-size="8" opacity=".35">↔↔↔</text>
  <!-- Labels on the side -->
  <text x="545" y="45" text-anchor="end" class="vlc" font-size="7.5" opacity=".4" font-style="italic">beginner</text>
  <text x="545" y="91" text-anchor="end" class="vlc" font-size="7.5" opacity=".4" font-style="italic">intermediate</text>
  <text x="545" y="143" text-anchor="end" class="vlc" font-size="7.5" fill="rgba(155,24,68,.6)" font-weight="600" font-style="italic">production</text>
</svg>`,

  /* ── L44:1 — AI Manifesto: What It Contains ─────────────────────── */
  '44:1': `<svg viewBox="0 0 560 168" xmlns="http://www.w3.org/2000/svg" aria-label="AI manifesto structure: beliefs, principles, and commitments">
  <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
  <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">Structure of a Personal AI Manifesto</text>
  <!-- Layer 1: Core Beliefs (bottom/foundation) -->
  <rect x="20" y="126" width="520" height="38" rx="9" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="2"/>
  <text x="280" y="142" text-anchor="middle" class="vlc" font-size="10" font-weight="800">Layer 1 — Core Beliefs</text>
  <text x="280" y="157" text-anchor="middle" class="vlc" font-size="8.5" opacity=".65">What do I fundamentally believe about AI — its nature, its risks, its potential?</text>
  <!-- Layer 2: Principles -->
  <rect x="70" y="80" width="420" height="38" rx="9" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.45)" stroke-width="1.5"/>
  <text x="280" y="96" text-anchor="middle" class="vlc" font-size="10" font-weight="800">Layer 2 — Principles</text>
  <text x="280" y="111" text-anchor="middle" class="vlc" font-size="8.5" opacity=".65">How will I behave with AI? What rules guide my use — for work, for study, for society?</text>
  <!-- Layer 3: Commitments (top) -->
  <rect x="140" y="34" width="280" height="38" rx="9" fill="rgba(34,197,94,.11)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
  <text x="280" y="50" text-anchor="middle" class="vlc" font-size="10" font-weight="800">Layer 3 — Commitments</text>
  <text x="280" y="65" text-anchor="middle" class="vlc" font-size="8.5" opacity=".65">Specific, verifiable promises I make to myself — and will revisit in one year</text>
  <!-- Foundation label -->
  <text x="280" y="20" text-anchor="middle" class="vlc" font-size="7.5" opacity=".4" font-style="italic">Build from the bottom up — weak beliefs produce weak principles and vague commitments</text>
  <!-- Side brace indicators -->
  <line x1="14" y1="126" x2="14" y2="164" stroke="currentColor" stroke-opacity=".25" stroke-width="2"/>
  <line x1="14" y1="80" x2="14" y2="118" stroke="currentColor" stroke-opacity=".2" stroke-width="2"/>
  <line x1="14" y1="34" x2="14" y2="72" stroke="currentColor" stroke-opacity=".15" stroke-width="2"/>
  <text x="8" y="148" text-anchor="middle" class="vlc" font-size="7" opacity=".3" transform="rotate(-90 8 148)">Foundation</text>
</svg>`,

  /* ── L48:1 — Cognitive Offloading Spectrum ──────────────────────── */
  '48:1': `<svg viewBox="0 0 560 168" xmlns="http://www.w3.org/2000/svg" aria-label="Cognitive offloading spectrum from thinking with AI to thinking for you">
  <style>.vlc{font-family:system-ui,sans-serif;fill:currentColor}</style>
  <defs>
    <linearGradient id="cog48" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgba(34,197,94,.55)"/>
      <stop offset="50%" stop-color="rgba(155,24,68,.4)"/>
      <stop offset="100%" stop-color="rgba(239,68,68,.55)"/>
    </linearGradient>
  </defs>
  <text x="280" y="14" text-anchor="middle" class="vlc" font-size="11" font-weight="700">The Cognitive Offloading Spectrum</text>
  <!-- Spectrum bar -->
  <rect x="30" y="28" width="500" height="20" rx="10" fill="url(#cog48)" opacity=".8"/>
  <!-- Zone labels above -->
  <text x="100" y="24" text-anchor="middle" class="vlc" font-size="9" font-weight="700" fill="rgba(34,197,94,.85)">Thinking WITH AI</text>
  <text x="280" y="24" text-anchor="middle" class="vlc" font-size="9" font-weight="700" opacity=".6">Partnership</text>
  <text x="460" y="24" text-anchor="middle" class="vlc" font-size="9" font-weight="700" fill="rgba(239,68,68,.85)">AI Thinking FOR You</text>
  <!-- Zone 1: Thinking WITH (green) -->
  <rect x="30" y="54" width="155" height="80" rx="8" fill="rgba(34,197,94,.08)" stroke="rgba(34,197,94,.35)" stroke-width="1.2"/>
  <text x="108" y="70" text-anchor="middle" class="vlc" font-size="8.5" font-weight="700">Augmentation ✓</text>
  <text x="108" y="84" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">You do the thinking</text>
  <text x="108" y="96" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">AI handles grunt work</text>
  <text x="108" y="112" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">e.g. AI formats your</text>
  <text x="108" y="123" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">ideas into a table</text>
  <!-- Zone 2: Partnership (indigo) -->
  <rect x="193" y="54" width="174" height="80" rx="8" fill="rgba(155,24,68,.08)" stroke="rgba(155,24,68,.3)" stroke-width="1.2"/>
  <text x="280" y="70" text-anchor="middle" class="vlc" font-size="8.5" font-weight="700">Co-thinking ⚠</text>
  <text x="280" y="84" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Shared reasoning</text>
  <text x="280" y="96" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Requires critical eval.</text>
  <text x="280" y="112" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">e.g. AI drafts essay,</text>
  <text x="280" y="123" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">you rewrite &amp; judge</text>
  <!-- Zone 3: AI thinking FOR you (red) -->
  <rect x="375" y="54" width="155" height="80" rx="8" fill="rgba(239,68,68,.08)" stroke="rgba(239,68,68,.35)" stroke-width="1.2"/>
  <text x="452" y="70" text-anchor="middle" class="vlc" font-size="8.5" font-weight="700">Dependency ✗</text>
  <text x="452" y="84" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">AI decides for you</text>
  <text x="452" y="96" text-anchor="middle" class="vlc" font-size="7.5" opacity=".65">Your skills atrophy</text>
  <text x="452" y="112" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">e.g. copy-paste AI</text>
  <text x="452" y="123" text-anchor="middle" class="vlc" font-size="7.5" opacity=".5" font-style="italic">answer unchanged</text>
  <!-- Bottom note -->
  <text x="280" y="150" text-anchor="middle" class="vlc" font-size="8" opacity=".45" font-style="italic">The goal is augmentation — not elimination of your own thinking. Struggle is how skills are built.</text>
</svg>`,


  /* ── L18:1 — Defining Acceptable Use — innovation vs safeguarding balance ── */
  '18:1': `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" aria-label="Acceptable use balance diagram">
    <defs><style>.v18{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <!-- Centre pillar -->
    <rect x="267" y="80" width="26" height="90" rx="4" fill="rgba(155,24,68,.25)" stroke="rgba(155,24,68,.5)" stroke-width="1.2"/>
    <!-- Beam -->
    <rect x="100" y="76" width="360" height="10" rx="5" fill="rgba(155,24,68,.3)" stroke="rgba(155,24,68,.5)" stroke-width="1.2"/>
    <!-- Pivot -->
    <circle cx="280" cy="81" r="7" fill="rgba(155,24,68,.5)" stroke="rgba(155,24,68,.8)" stroke-width="1.5"/>
    <!-- Left pan — Innovation -->
    <line x1="140" y1="86" x2="140" y2="108" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5"/>
    <rect x="80" y="108" width="120" height="56" rx="8" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
    <text x="140" y="128" text-anchor="middle" class="v18" font-size="18">🚀</text>
    <text x="140" y="146" text-anchor="middle" class="v18" font-size="11" font-weight="700" fill="#22c55e">Innovation</text>
    <text x="140" y="158" text-anchor="middle" class="v18" font-size="9" opacity=".65">Creativity · Efficiency</text>
    <!-- Right pan — Safeguarding -->
    <line x1="420" y1="86" x2="420" y2="108" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5"/>
    <rect x="360" y="108" width="120" height="56" rx="8" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="420" y="128" text-anchor="middle" class="v18" font-size="18">🛡</text>
    <text x="420" y="146" text-anchor="middle" class="v18" font-size="11" font-weight="700" fill="#f59e0b">Safeguarding</text>
    <text x="420" y="158" text-anchor="middle" class="v18" font-size="9" opacity=".65">Integrity · Fairness</text>
    <!-- Centre label -->
    <text x="280" y="190" text-anchor="middle" class="v18" font-size="10" font-weight="700" opacity=".7">Acceptable Use Policy</text>
    <!-- Top label -->
    <text x="280" y="22" text-anchor="middle" class="v18" font-size="12" font-weight="800">Defining the Balance</text>
    <text x="280" y="40" text-anchor="middle" class="v18" font-size="9.5" opacity=".6">An acceptable use policy keeps both sides of the scale in mind</text>
  </svg>`,

  /* ── L19:1 — Drafting the Document — policy document anatomy ──────────── */
  '19:1': `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" aria-label="Policy document anatomy">
    <defs><style>.v19{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <!-- Document outline -->
    <rect x="140" y="10" width="280" height="180" rx="8" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.3)" stroke-width="1.5"/>
    <!-- Dog-ear fold -->
    <polygon points="380,10 420,10 420,40" fill="rgba(155,24,68,.18)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <!-- Section rows -->
    <rect x="156" y="26" width="248" height="22" rx="4" fill="rgba(155,24,68,.18)" stroke="rgba(155,24,68,.4)" stroke-width="1"/>
    <text x="280" y="41" text-anchor="middle" class="v19" font-size="10" font-weight="700">📋 Purpose &amp; Scope</text>
    <rect x="156" y="56" width="248" height="22" rx="4" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.35)" stroke-width="1"/>
    <text x="280" y="71" text-anchor="middle" class="v19" font-size="10" font-weight="700">📖 Definitions</text>
    <rect x="156" y="86" width="248" height="22" rx="4" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.35)" stroke-width="1"/>
    <text x="280" y="101" text-anchor="middle" class="v19" font-size="10" font-weight="700">✅ Acceptable Uses</text>
    <rect x="156" y="116" width="248" height="22" rx="4" fill="rgba(239,68,68,.1)" stroke="rgba(239,68,68,.35)" stroke-width="1"/>
    <text x="280" y="131" text-anchor="middle" class="v19" font-size="10" font-weight="700">🚫 Prohibited Uses</text>
    <rect x="156" y="146" width="248" height="22" rx="4" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.35)" stroke-width="1"/>
    <text x="280" y="161" text-anchor="middle" class="v19" font-size="10" font-weight="700">⚖️ Enforcement &amp; Review</text>
    <text x="280" y="184" text-anchor="middle" class="v19" font-size="8" opacity=".45" font-style="italic">Use precise language — ambiguity creates loopholes</text>
  </svg>`,

  /* ── L21:1 — From Consumer to Co-Creator — mindset spectrum ───────────── */
  '21:1': `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" aria-label="Consumer to co-creator spectrum">
    <defs>
      <style>.v21{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <linearGradient id="spg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#009fe3" stop-opacity=".6"/>
        <stop offset="100%" stop-color="#9b1844" stop-opacity=".8"/>
      </linearGradient>
      <marker id="arr21" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
        <polygon points="0 0,8 3,0 6" fill="url(#spg)"/>
      </marker>
    </defs>
    <text x="280" y="22" text-anchor="middle" class="v21" font-size="12" font-weight="800">The Creator Mindset Shift</text>
    <!-- Arrow bar -->
    <rect x="40" y="70" width="480" height="14" rx="7" fill="url(#spg)" opacity=".25"/>
    <line x1="40" y1="77" x2="510" y2="77" stroke="url(#spg)" stroke-width="2.5" marker-end="url(#arr21)"/>
    <!-- Stage markers -->
    <circle cx="80"  cy="77" r="18" fill="rgba(0,159,227,.15)"  stroke="rgba(0,159,227,.5)"  stroke-width="1.5"/>
    <text x="80"  y="73" text-anchor="middle" class="v21" font-size="16">👤</text>
    <text x="80"  y="108" text-anchor="middle" class="v21" font-size="9" font-weight="700">Consumer</text>
    <text x="80"  y="120" text-anchor="middle" class="v21" font-size="8" opacity=".6">Uses AI outputs</text>

    <circle cx="200" cy="77" r="18" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.4)"  stroke-width="1.5"/>
    <text x="200" y="73" text-anchor="middle" class="v21" font-size="16">🔍</text>
    <text x="200" y="108" text-anchor="middle" class="v21" font-size="9" font-weight="700">Evaluator</text>
    <text x="200" y="120" text-anchor="middle" class="v21" font-size="8" opacity=".6">Questions &amp; tests</text>

    <circle cx="320" cy="77" r="18" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
    <text x="320" y="73" text-anchor="middle" class="v21" font-size="16">⚙️</text>
    <text x="320" y="108" text-anchor="middle" class="v21" font-size="9" font-weight="700">Customiser</text>
    <text x="320" y="120" text-anchor="middle" class="v21" font-size="8" opacity=".6">Adapts &amp; refines</text>

    <circle cx="460" cy="77" r="20" fill="rgba(155,24,68,.22)" stroke="rgba(155,24,68,.65)" stroke-width="2"/>
    <text x="460" y="73" text-anchor="middle" class="v21" font-size="18">🛠</text>
    <text x="460" y="108" text-anchor="middle" class="v21" font-size="9" font-weight="800" fill="#c64b74">Co-Creator</text>
    <text x="460" y="120" text-anchor="middle" class="v21" font-size="8" opacity=".6">Builds with AI</text>

    <text x="280" y="158" text-anchor="middle" class="v21" font-size="9" opacity=".5" font-style="italic">The capstone moves you from the left end to the right end of this spectrum</text>
  </svg>`,

  /* ── L26:1 — Logic Flows & Edge Cases — decision flowchart ────────────── */
  '26:1': `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" aria-label="Logic flow and edge case diagram">
    <defs>
      <style>.v26{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="arr26" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <!-- Start -->
    <ellipse cx="100" cy="30" rx="60" ry="18" fill="rgba(155,24,68,.18)" stroke="rgba(155,24,68,.55)" stroke-width="1.5"/>
    <text x="100" y="35" text-anchor="middle" class="v26" font-size="10" font-weight="700">Start / Input</text>
    <!-- Arrow down -->
    <line x1="100" y1="48" x2="100" y2="68" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr26)"/>
    <!-- Decision diamond -->
    <polygon points="100,70 155,100 100,130 45,100" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.55)" stroke-width="1.5"/>
    <text x="100" y="96" text-anchor="middle" class="v26" font-size="9" font-weight="700">Valid</text>
    <text x="100" y="108" text-anchor="middle" class="v26" font-size="9" font-weight="700">input?</text>
    <!-- YES arrow down -->
    <line x1="100" y1="130" x2="100" y2="152" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr26)"/>
    <text x="112" y="145" class="v26" font-size="9" fill="#22c55e" font-weight="700">YES</text>
    <!-- Happy path box -->
    <rect x="50" y="152" width="100" height="32" rx="6" fill="rgba(34,197,94,.12)" stroke="rgba(34,197,94,.45)" stroke-width="1.5"/>
    <text x="100" y="172" text-anchor="middle" class="v26" font-size="9" font-weight="700">Main Logic</text>
    <!-- NO arrow right -->
    <line x1="155" y1="100" x2="220" y2="100" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#arr26)"/>
    <text x="183" y="94" text-anchor="middle" class="v26" font-size="9" fill="#ef4444" font-weight="700">NO</text>
    <!-- Edge case column header -->
    <text x="380" y="18" text-anchor="middle" class="v26" font-size="10" font-weight="700" opacity=".7">Edge Cases to Handle</text>
    <!-- Edge case boxes -->
    <rect x="220" y="78" width="130" height="26" rx="5" fill="rgba(239,68,68,.1)" stroke="rgba(239,68,68,.4)" stroke-width="1"/>
    <text x="285" y="95" text-anchor="middle" class="v26" font-size="9">Empty / null input</text>
    <rect x="220" y="112" width="130" height="26" rx="5" fill="rgba(239,68,68,.1)" stroke="rgba(239,68,68,.4)" stroke-width="1"/>
    <text x="285" y="129" text-anchor="middle" class="v26" font-size="9">Out-of-range values</text>
    <rect x="365" y="78" width="130" height="26" rx="5" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="430" y="95" text-anchor="middle" class="v26" font-size="9">Unexpected type</text>
    <rect x="365" y="112" width="130" height="26" rx="5" fill="rgba(245,158,11,.1)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="430" y="129" text-anchor="middle" class="v26" font-size="9">Adversarial input</text>
    <rect x="220" y="148" width="275" height="26" rx="5" fill="rgba(155,24,68,.1)" stroke="rgba(155,24,68,.35)" stroke-width="1"/>
    <text x="357" y="165" text-anchor="middle" class="v26" font-size="9">API failure / timeout — graceful fallback?</text>
    <text x="280" y="194" text-anchor="middle" class="v26" font-size="8.5" opacity=".5" font-style="italic">Plan every branch before you write a line of code</text>
  </svg>`,

  /* ── L27:1 — Sprint 0: The Foundation — layered architecture stack ─────── */
  '27:1': `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" aria-label="Foundation layer stack diagram">
    <defs><style>.v27{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v27" font-size="12" font-weight="800">What Sprint 0 Builds</text>
    <!-- Layer 5 (top — future) -->
    <rect x="160" y="30" width="240" height="28" rx="6" fill="rgba(155,24,68,.07)" stroke="rgba(155,24,68,.2)" stroke-width="1" stroke-dasharray="5 3"/>
    <text x="280" y="49" text-anchor="middle" class="v27" font-size="10" opacity=".5" font-style="italic">Future features (later sprints)</text>
    <!-- Layer 4 -->
    <rect x="120" y="62" width="320" height="28" rx="6" fill="rgba(168,85,247,.1)" stroke="rgba(168,85,247,.35)" stroke-width="1.2"/>
    <text x="280" y="78" text-anchor="middle" class="v27" font-size="10" font-weight="700">🎨 UI / Interface skeleton</text>
    <text x="280" y="88" text-anchor="middle" class="v27" font-size="8" opacity=".6">Screens, navigation, basic layout</text>
    <!-- Layer 3 -->
    <rect x="80" y="96" width="400" height="28" rx="6" fill="rgba(0,159,227,.1)" stroke="rgba(0,159,227,.38)" stroke-width="1.2"/>
    <text x="280" y="112" text-anchor="middle" class="v27" font-size="10" font-weight="700">🔌 API &amp; Prompt connections</text>
    <text x="280" y="122" text-anchor="middle" class="v27" font-size="8" opacity=".6">LLM calls, data sources, error handling</text>
    <!-- Layer 2 -->
    <rect x="40" y="130" width="480" height="28" rx="6" fill="rgba(34,197,94,.1)" stroke="rgba(34,197,94,.4)" stroke-width="1.2"/>
    <text x="280" y="146" text-anchor="middle" class="v27" font-size="10" font-weight="700">🧠 Core logic &amp; data flow</text>
    <text x="280" y="156" text-anchor="middle" class="v27" font-size="8" opacity=".6">What your tool actually does — without fluff</text>
    <!-- Layer 1 (foundation) -->
    <rect x="10" y="164" width="540" height="28" rx="6" fill="rgba(155,24,68,.2)" stroke="rgba(155,24,68,.55)" stroke-width="1.8"/>
    <text x="280" y="180" text-anchor="middle" class="v27" font-size="11" font-weight="800">🏗 Project setup &amp; structure</text>
    <text x="280" y="190" text-anchor="middle" class="v27" font-size="8" opacity=".65">Repo · environment · dependencies · naming conventions</text>
  </svg>`,


  /* ── L28:1 — Initial Peer Review — structured feedback loop ───────────── */
  '28:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Peer review feedback cycle">
    <defs>
      <style>.v28{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a28" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".5"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v28" font-size="12" font-weight="800">The Peer Review Cycle</text>
    <!-- Builder -->
    <rect x="30" y="60" width="120" height="70" rx="10" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="90" y="88" text-anchor="middle" class="v28" font-size="22">🛠</text>
    <text x="90" y="108" text-anchor="middle" class="v28" font-size="11" font-weight="700">Builder</text>
    <text x="90" y="121" text-anchor="middle" class="v28" font-size="9" opacity=".65">Shares work</text>
    <!-- Reviewer -->
    <rect x="410" y="60" width="120" height="70" rx="10" fill="rgba(0,159,227,.12)" stroke="rgba(0,159,227,.5)" stroke-width="1.5"/>
    <text x="470" y="88" text-anchor="middle" class="v28" font-size="22">🔍</text>
    <text x="470" y="108" text-anchor="middle" class="v28" font-size="11" font-weight="700">Reviewer</text>
    <text x="470" y="121" text-anchor="middle" class="v28" font-size="9" opacity=".65">Gives feedback</text>
    <!-- Top arrow: share work -->
    <path d="M150,82 Q280,40 410,82" fill="none" stroke="rgba(155,24,68,.5)" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#a28)"/>
    <text x="280" y="50" text-anchor="middle" class="v28" font-size="9" font-weight="700" opacity=".8">Share deliverable →</text>
    <!-- Bottom arrow: feedback -->
    <path d="M410,112 Q280,158 150,112" fill="none" stroke="rgba(0,159,227,.5)" stroke-width="1.8" marker-end="url(#a28)"/>
    <text x="280" y="165" text-anchor="middle" class="v28" font-size="9" font-weight="700" opacity=".8">← Structured feedback</text>
    <!-- Centre: criteria labels -->
    <text x="280" y="86" text-anchor="middle" class="v28" font-size="8.5" opacity=".65">What works · What's unclear</text>
    <text x="280" y="98" text-anchor="middle" class="v28" font-size="8.5" opacity=".65">One concrete improvement</text>
  </svg>`,

  /* ── L29:1 — Deep Work Session 1 — sprint kanban board ───────────────── */
  '29:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Sprint kanban board">
    <defs><style>.v29{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v29" font-size="12" font-weight="800">Your Sprint Board</text>
    <!-- Column: To Do -->
    <rect x="20" y="28" width="158" height="148" rx="8" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.25)" stroke-width="1.2"/>
    <text x="99" y="46" text-anchor="middle" class="v29" font-size="10" font-weight="700" opacity=".7">📋 TO DO</text>
    <rect x="30" y="54" width="138" height="24" rx="5" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="99" y="70" text-anchor="middle" class="v29" font-size="9">Add prompt error handling</text>
    <rect x="30" y="84" width="138" height="24" rx="5" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="99" y="100" text-anchor="middle" class="v29" font-size="9">Write unit tests</text>
    <rect x="30" y="114" width="138" height="24" rx="5" fill="rgba(155,24,68,.12)" stroke="rgba(155,24,68,.3)" stroke-width="1"/>
    <text x="99" y="130" text-anchor="middle" class="v29" font-size="9">Update sprint diary</text>
    <!-- Column: Doing -->
    <rect x="191" y="28" width="158" height="148" rx="8" fill="rgba(245,158,11,.06)" stroke="rgba(245,158,11,.3)" stroke-width="1.2"/>
    <text x="270" y="46" text-anchor="middle" class="v29" font-size="10" font-weight="700" opacity=".7">⚡ IN PROGRESS</text>
    <rect x="201" y="54" width="138" height="24" rx="5" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.4)" stroke-width="1"/>
    <text x="270" y="70" text-anchor="middle" class="v29" font-size="9" font-weight="600">Core logic ← you are here</text>
    <!-- Column: Done -->
    <rect x="362" y="28" width="178" height="148" rx="8" fill="rgba(34,197,94,.06)" stroke="rgba(34,197,94,.3)" stroke-width="1.2"/>
    <text x="451" y="46" text-anchor="middle" class="v29" font-size="10" font-weight="700" opacity=".7">✅ DONE</text>
    <rect x="372" y="54" width="158" height="24" rx="5" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.4)" stroke-width="1"/>
    <text x="451" y="70" text-anchor="middle" class="v29" font-size="9">Project structure set up</text>
    <rect x="372" y="84" width="158" height="24" rx="5" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.4)" stroke-width="1"/>
    <text x="451" y="100" text-anchor="middle" class="v29" font-size="9">Problem statement drafted</text>
    <text x="280" y="182" text-anchor="middle" class="v29" font-size="8" opacity=".45" font-style="italic">Move cards left to right — document blockers honestly</text>
  </svg>`,

  /* ── L30:1 — Deep Work Session 2 — build → feedback → integrate cycle ── */
  '30:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Build feedback integrate cycle">
    <defs>
      <style>.v30{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a30" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v30" font-size="12" font-weight="800">Integrating Feedback</text>
    <!-- Three circles in triangle -->
    <circle cx="140" cy="90"  r="52" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.45)" stroke-width="1.8"/>
    <text x="140" y="83" text-anchor="middle" class="v30" font-size="20">🛠</text>
    <text x="140" y="103" text-anchor="middle" class="v30" font-size="11" font-weight="700">Build</text>
    <text x="140" y="117" text-anchor="middle" class="v30" font-size="8.5" opacity=".65">Add &amp; improve</text>

    <circle cx="420" cy="90"  r="52" fill="rgba(0,159,227,.1)"   stroke="rgba(0,159,227,.45)"  stroke-width="1.8"/>
    <text x="420" y="83" text-anchor="middle" class="v30" font-size="20">💬</text>
    <text x="420" y="103" text-anchor="middle" class="v30" font-size="11" font-weight="700">Review</text>
    <text x="420" y="117" text-anchor="middle" class="v30" font-size="8.5" opacity=".65">Peer + self critique</text>

    <circle cx="280" cy="155" r="52" fill="rgba(34,197,94,.1)"   stroke="rgba(34,197,94,.45)"  stroke-width="1.8"/>
    <text x="280" y="148" text-anchor="middle" class="v30" font-size="20">✅</text>
    <text x="280" y="168" text-anchor="middle" class="v30" font-size="11" font-weight="700">Integrate</text>

    <!-- Arrows between circles -->
    <line x1="192" y1="76" x2="368" y2="76" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#a30)"/>
    <line x1="396" y1="134" x2="312" y2="152" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#a30)"/>
    <line x1="248" y1="152" x2="168" y2="134" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" marker-end="url(#a30)"/>
  </svg>`,

  /* ── L31:1 — Deep Work Session 3 — testing pyramid ───────────────────── */
  '31:1': `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" aria-label="Testing pyramid diagram">
    <defs><style>.v31{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v31" font-size="12" font-weight="800">Testing Strategy</text>
    <!-- Pyramid layers (wide at bottom) -->
    <!-- Layer 1: Unit/prompt tests -->
    <polygon points="80,175 480,175 420,135 140,135" fill="rgba(34,197,94,.15)" stroke="rgba(34,197,94,.5)" stroke-width="1.5"/>
    <text x="280" y="158" text-anchor="middle" class="v31" font-size="11" font-weight="700">🧪 Prompt &amp; logic tests</text>
    <text x="280" y="170" text-anchor="middle" class="v31" font-size="8.5" opacity=".65">Does each function do what you expect?</text>
    <!-- Layer 2: Integration -->
    <polygon points="140,133 420,133 370,95 190,95" fill="rgba(245,158,11,.14)" stroke="rgba(245,158,11,.5)" stroke-width="1.5"/>
    <text x="280" y="116" text-anchor="middle" class="v31" font-size="11" font-weight="700">🔗 Integration tests</text>
    <text x="280" y="128" text-anchor="middle" class="v31" font-size="8.5" opacity=".65">Do the parts work together?</text>
    <!-- Layer 3: User -->
    <polygon points="190,93 370,93 330,57 230,57" fill="rgba(0,159,227,.14)" stroke="rgba(0,159,227,.5)" stroke-width="1.5"/>
    <text x="280" y="78" text-anchor="middle" class="v31" font-size="10" font-weight="700">👤 User tests</text>
    <text x="280" y="89" text-anchor="middle" class="v31" font-size="8" opacity=".65">Can a real person use it?</text>
    <!-- Apex -->
    <polygon points="230,55 330,55 280,28" fill="rgba(155,24,68,.2)" stroke="rgba(155,24,68,.6)" stroke-width="1.5"/>
    <text x="280" y="46" text-anchor="middle" class="v31" font-size="9" font-weight="800">🎯 Goal</text>
    <text x="500" y="160" class="v31" font-size="8" opacity=".5">More</text>
    <text x="500" y="100" class="v31" font-size="8" opacity=".5">↑</text>
    <text x="500" y="50"  class="v31" font-size="8" opacity=".5">Less</text>
  </svg>`,

  /* ── L32:1 — Deep Work Session 4 — pre-audit quality checklist ────────── */
  '32:1': `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" aria-label="Pre-audit quality checklist">
    <defs><style>.v32{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v32" font-size="12" font-weight="800">Pre-Audit Checklist</text>
    <!-- Two-column grid -->
    <!-- Left column -->
    <rect x="20" y="28" width="250" height="152" rx="8" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.25)" stroke-width="1.2"/>
    <text x="145" y="46" text-anchor="middle" class="v32" font-size="10" font-weight="700">⚙️ Functionality</text>
    <text x="36" y="66" class="v32" font-size="9">☐  Core feature works end-to-end</text>
    <text x="36" y="84" class="v32" font-size="9">☐  Edge cases handled gracefully</text>
    <text x="36" y="102" class="v32" font-size="9">☐  Error messages are helpful</text>
    <text x="145" y="122" text-anchor="middle" class="v32" font-size="10" font-weight="700">🎨 User Experience</text>
    <text x="36" y="142" class="v32" font-size="9">☐  A stranger can use it without help</text>
    <text x="36" y="160" class="v32" font-size="9">☐  Output is clear &amp; formatted</text>
    <!-- Right column -->
    <rect x="290" y="28" width="250" height="152" rx="8" fill="rgba(155,24,68,.06)" stroke="rgba(155,24,68,.25)" stroke-width="1.2"/>
    <text x="415" y="46" text-anchor="middle" class="v32" font-size="10" font-weight="700">⚖️ Ethics</text>
    <text x="306" y="66" class="v32" font-size="9">☐  No harmful output possible</text>
    <text x="306" y="84" class="v32" font-size="9">☐  Bias considered &amp; documented</text>
    <text x="306" y="102" class="v32" font-size="9">☐  Limitations disclosed to user</text>
    <text x="415" y="122" text-anchor="middle" class="v32" font-size="10" font-weight="700">📄 Documentation</text>
    <text x="306" y="142" class="v32" font-size="9">☐  Sprint diary is up to date</text>
    <text x="306" y="160" class="v32" font-size="9">☐  Design decisions are recorded</text>
    <text x="280" y="186" text-anchor="middle" class="v32" font-size="8" opacity=".45" font-style="italic">Complete every box before the ethical audit session</text>
  </svg>`,


  /* ── L33:1 — Deep Work Session 5 — final delivery pipeline ───────────── */
  '33:1': `<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" aria-label="Final delivery pipeline">
    <defs>
      <style>.v33{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a33" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v33" font-size="12" font-weight="800">Final Sprint — What to Deliver</text>
    <!-- Five stages in a row -->
    <rect x="10"  y="40" width="88" height="70" rx="8" fill="rgba(34,197,94,.12)"  stroke="rgba(34,197,94,.45)"  stroke-width="1.5"/>
    <text x="54"  y="65" text-anchor="middle" class="v33" font-size="18">💻</text>
    <text x="54"  y="83" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Working</text>
    <text x="54"  y="95" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Code</text>

    <line x1="98"  y1="75" x2="116" y2="75" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a33)"/>

    <rect x="118" y="40" width="88" height="70" rx="8" fill="rgba(0,159,227,.12)"   stroke="rgba(0,159,227,.45)"   stroke-width="1.5"/>
    <text x="162" y="65" text-anchor="middle" class="v33" font-size="18">📄</text>
    <text x="162" y="83" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Sprint</text>
    <text x="162" y="95" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Diary</text>

    <line x1="206" y1="75" x2="224" y2="75" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a33)"/>

    <rect x="226" y="40" width="88" height="70" rx="8" fill="rgba(245,158,11,.12)"  stroke="rgba(245,158,11,.45)"  stroke-width="1.5"/>
    <text x="270" y="65" text-anchor="middle" class="v33" font-size="18">⚖️</text>
    <text x="270" y="83" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Ethics</text>
    <text x="270" y="95" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Report</text>

    <line x1="314" y1="75" x2="332" y2="75" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a33)"/>

    <rect x="334" y="40" width="88" height="70" rx="8" fill="rgba(168,85,247,.12)"  stroke="rgba(168,85,247,.45)"  stroke-width="1.5"/>
    <text x="378" y="65" text-anchor="middle" class="v33" font-size="18">🎤</text>
    <text x="378" y="83" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Pitch</text>
    <text x="378" y="95" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Deck</text>

    <line x1="422" y1="75" x2="440" y2="75" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a33)"/>

    <rect x="442" y="40" width="108" height="70" rx="8" fill="rgba(155,24,68,.18)"  stroke="rgba(155,24,68,.55)"  stroke-width="2"/>
    <text x="496" y="65" text-anchor="middle" class="v33" font-size="18">🏆</text>
    <text x="496" y="83" text-anchor="middle" class="v33" font-size="9.5" font-weight="700">Submission</text>
    <text x="496" y="95" text-anchor="middle" class="v33" font-size="8" opacity=".65">Complete &amp; polished</text>

    <text x="280" y="130" text-anchor="middle" class="v33" font-size="9" opacity=".55" font-style="italic">This is your last build session — close loops, don't open new ones</text>
  </svg>`,

  /* ── L35:1 — The Pitch Deck — slide structure overview ────────────────── */
  '35:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Pitch deck slide structure">
    <defs><style>.v35{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v35" font-size="12" font-weight="800">Pitch Deck Structure</text>
    <!-- Five slide thumbnails -->
    <rect x="12"  y="30" width="92" height="68" rx="6" fill="rgba(155,24,68,.15)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="58"  y="55" text-anchor="middle" class="v35" font-size="20">🎯</text>
    <text x="58"  y="73" text-anchor="middle" class="v35" font-size="9"  font-weight="700">The Problem</text>
    <text x="58"  y="85" text-anchor="middle" class="v35" font-size="7.5" opacity=".6">Who suffers &amp; why?</text>
    <text x="58"  y="112" text-anchor="middle" class="v35" font-size="9"  opacity=".6">1</text>

    <rect x="118" y="30" width="92" height="68" rx="6" fill="rgba(0,159,227,.12)"  stroke="rgba(0,159,227,.5)"  stroke-width="1.5"/>
    <text x="164" y="55" text-anchor="middle" class="v35" font-size="20">💡</text>
    <text x="164" y="73" text-anchor="middle" class="v35" font-size="9"  font-weight="700">Your Solution</text>
    <text x="164" y="85" text-anchor="middle" class="v35" font-size="7.5" opacity=".6">What it does</text>
    <text x="164" y="112" text-anchor="middle" class="v35" font-size="9"  opacity=".6">2</text>

    <rect x="224" y="30" width="112" height="68" rx="6" fill="rgba(34,197,94,.13)"  stroke="rgba(34,197,94,.5)"  stroke-width="2"/>
    <text x="280" y="55" text-anchor="middle" class="v35" font-size="20">🖥</text>
    <text x="280" y="73" text-anchor="middle" class="v35" font-size="9"  font-weight="800">Live Demo</text>
    <text x="280" y="85" text-anchor="middle" class="v35" font-size="7.5" opacity=".6">Show, don't tell</text>
    <text x="280" y="112" text-anchor="middle" class="v35" font-size="9"  opacity=".6" fill="#22c55e">★ Centre your pitch</text>

    <rect x="350" y="30" width="92" height="68" rx="6" fill="rgba(245,158,11,.12)"  stroke="rgba(245,158,11,.5)"  stroke-width="1.5"/>
    <text x="396" y="55" text-anchor="middle" class="v35" font-size="20">⚖️</text>
    <text x="396" y="73" text-anchor="middle" class="v35" font-size="9"  font-weight="700">Ethics &amp; Limits</text>
    <text x="396" y="85" text-anchor="middle" class="v35" font-size="7.5" opacity=".6">Risks you own</text>
    <text x="396" y="112" text-anchor="middle" class="v35" font-size="9"  opacity=".6">4</text>

    <rect x="456" y="30" width="92" height="68" rx="6" fill="rgba(168,85,247,.12)"  stroke="rgba(168,85,247,.5)"  stroke-width="1.5"/>
    <text x="502" y="55" text-anchor="middle" class="v35" font-size="20">🚀</text>
    <text x="502" y="73" text-anchor="middle" class="v35" font-size="9"  font-weight="700">What's Next</text>
    <text x="502" y="85" text-anchor="middle" class="v35" font-size="7.5" opacity=".6">If you had more time…</text>
    <text x="502" y="112" text-anchor="middle" class="v35" font-size="9"  opacity=".6">5</text>

    <text x="280" y="140" text-anchor="middle" class="v35" font-size="9.5" font-weight="700" opacity=".8">Golden rule: one idea per slide, no walls of text</text>
    <text x="280" y="158" text-anchor="middle" class="v35" font-size="8.5" opacity=".55">Your audience will remember the demo — make it flawless</text>
  </svg>`,

  /* ── L36:1 — Dress Rehearsal — timed run-through with feedback ─────────── */
  '36:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Dress rehearsal timeline">
    <defs>
      <style>.v36{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a36" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v36" font-size="12" font-weight="800">The Dress Rehearsal Format</text>
    <!-- Timeline bar -->
    <line x1="40" y1="85" x2="520" y2="85" stroke="currentColor" stroke-opacity=".25" stroke-width="2" marker-end="url(#a36)"/>
    <!-- Segment 1 -->
    <circle cx="80"  cy="85" r="14" fill="rgba(155,24,68,.2)"  stroke="rgba(155,24,68,.55)" stroke-width="1.5"/>
    <text x="80"  y="90" text-anchor="middle" class="v36" font-size="10" font-weight="800">1</text>
    <text x="80"  y="112" text-anchor="middle" class="v36" font-size="9" font-weight="700">Full run</text>
    <text x="80"  y="124" text-anchor="middle" class="v36" font-size="8" opacity=".6">No stopping</text>
    <text x="80"  y="60"  text-anchor="middle" class="v36" font-size="8" opacity=".5">~8 min</text>
    <!-- Segment 2 -->
    <circle cx="210" cy="85" r="14" fill="rgba(0,159,227,.18)"  stroke="rgba(0,159,227,.55)"  stroke-width="1.5"/>
    <text x="210" y="90" text-anchor="middle" class="v36" font-size="10" font-weight="800">2</text>
    <text x="210" y="112" text-anchor="middle" class="v36" font-size="9" font-weight="700">Self-assess</text>
    <text x="210" y="124" text-anchor="middle" class="v36" font-size="8" opacity=".6">What felt off?</text>
    <text x="210" y="60"  text-anchor="middle" class="v36" font-size="8" opacity=".5">2 min</text>
    <!-- Segment 3 -->
    <circle cx="340" cy="85" r="14" fill="rgba(245,158,11,.18)"  stroke="rgba(245,158,11,.55)"  stroke-width="1.5"/>
    <text x="340" y="90" text-anchor="middle" class="v36" font-size="10" font-weight="800">3</text>
    <text x="340" y="112" text-anchor="middle" class="v36" font-size="9" font-weight="700">Peer feedback</text>
    <text x="340" y="124" text-anchor="middle" class="v36" font-size="8" opacity=".6">Two specific points</text>
    <text x="340" y="60"  text-anchor="middle" class="v36" font-size="8" opacity=".5">5 min</text>
    <!-- Segment 4 -->
    <circle cx="470" cy="85" r="14" fill="rgba(34,197,94,.2)"   stroke="rgba(34,197,94,.55)"   stroke-width="1.5"/>
    <text x="470" y="90" text-anchor="middle" class="v36" font-size="10" font-weight="800">4</text>
    <text x="470" y="112" text-anchor="middle" class="v36" font-size="9" font-weight="700">Action list</text>
    <text x="470" y="124" text-anchor="middle" class="v36" font-size="8" opacity=".6">3 things to fix</text>
    <text x="470" y="60"  text-anchor="middle" class="v36" font-size="8" opacity=".5">3 min</text>
    <text x="280" y="155" text-anchor="middle" class="v36" font-size="9" opacity=".55" font-style="italic">Treat it exactly like the real thing — nerves, timer, full demo</text>
  </svg>`,

  /* ── L37:1 — Presentations Group 1 — presentation scoring criteria ────── */
  '37:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Presentation assessment criteria">
    <defs><style>.v37{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v37" font-size="12" font-weight="800">What the Panel Is Looking For</text>
    <!-- Four criteria boxes -->
    <rect x="20"  y="30" width="242" height="64" rx="8" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.4)" stroke-width="1.5"/>
    <text x="36"  y="52" class="v37" font-size="22">🎯</text>
    <text x="68"  y="50" class="v37" font-size="10" font-weight="700">Clarity of problem &amp; solution</text>
    <text x="68"  y="64" class="v37" font-size="8.5" opacity=".65">Does the panel understand what you built</text>
    <text x="68"  y="76" class="v37" font-size="8.5" opacity=".65">and why it matters?</text>

    <rect x="298" y="30" width="242" height="64" rx="8" fill="rgba(0,159,227,.1)"   stroke="rgba(0,159,227,.4)"  stroke-width="1.5"/>
    <text x="314" y="52" class="v37" font-size="22">🖥</text>
    <text x="346" y="50" class="v37" font-size="10" font-weight="700">Demo quality</text>
    <text x="346" y="64" class="v37" font-size="8.5" opacity=".65">Does it work live? Is output meaningful?</text>
    <text x="346" y="76" class="v37" font-size="8.5" opacity=".65">Are edge cases handled gracefully?</text>

    <rect x="20"  y="104" width="242" height="64" rx="8" fill="rgba(245,158,11,.1)"  stroke="rgba(245,158,11,.4)" stroke-width="1.5"/>
    <text x="36"  y="126" class="v37" font-size="22">⚖️</text>
    <text x="68"  y="124" class="v37" font-size="10" font-weight="700">Ethical awareness</text>
    <text x="68"  y="138" class="v37" font-size="8.5" opacity=".65">Can you articulate the risks and how</text>
    <text x="68"  y="150" class="v37" font-size="8.5" opacity=".65">you've mitigated them?</text>

    <rect x="298" y="104" width="242" height="64" rx="8" fill="rgba(34,197,94,.1)"   stroke="rgba(34,197,94,.4)"  stroke-width="1.5"/>
    <text x="314" y="126" class="v37" font-size="22">❓</text>
    <text x="346" y="124" class="v37" font-size="10" font-weight="700">Q&amp;A response</text>
    <text x="346" y="138" class="v37" font-size="8.5" opacity=".65">Do you know your project deeply enough</text>
    <text x="346" y="150" class="v37" font-size="8.5" opacity=".65">to handle unexpected questions?</text>
  </svg>`,

  /* ── L38:1 — Presentations Group 2 — audience and panel setup ─────────── */
  '38:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Presentation room layout and tips">
    <defs><style>.v38{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v38" font-size="12" font-weight="800">Presentation Day — What to Remember</text>
    <!-- Three tip cards -->
    <rect x="20"  y="30" width="158" height="140" rx="10" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.4)" stroke-width="1.5"/>
    <text x="99"  y="58" text-anchor="middle" class="v38" font-size="28">🧘</text>
    <text x="99"  y="80" text-anchor="middle" class="v38" font-size="11" font-weight="800">Before</text>
    <text x="99"  y="96" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">Test your demo on</text>
    <text x="99"  y="108" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">the actual device</text>
    <text x="99"  y="124" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">Have a backup plan</text>
    <text x="99"  y="138" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">if live demo fails</text>
    <text x="99"  y="158" text-anchor="middle" class="v38" font-size="8" opacity=".5" font-style="italic">Screenshots save lives</text>

    <rect x="201" y="30" width="158" height="140" rx="10" fill="rgba(34,197,94,.1)"   stroke="rgba(34,197,94,.4)"  stroke-width="1.5"/>
    <text x="280" y="58" text-anchor="middle" class="v38" font-size="28">🎤</text>
    <text x="280" y="80" text-anchor="middle" class="v38" font-size="11" font-weight="800">During</text>
    <text x="280" y="96" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">Speak to the panel,</text>
    <text x="280" y="108" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">not the screen</text>
    <text x="280" y="124" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">Pause after key points</text>
    <text x="280" y="138" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">Own your limitations</text>
    <text x="280" y="158" text-anchor="middle" class="v38" font-size="8" opacity=".5" font-style="italic">Confidence ≠ certainty</text>

    <rect x="382" y="30" width="158" height="140" rx="10" fill="rgba(245,158,11,.1)"  stroke="rgba(245,158,11,.4)" stroke-width="1.5"/>
    <text x="461" y="58" text-anchor="middle" class="v38" font-size="28">❓</text>
    <text x="461" y="80" text-anchor="middle" class="v38" font-size="11" font-weight="800">Q&amp;A</text>
    <text x="461" y="96" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">"Good question" is</text>
    <text x="461" y="108" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">filler — just answer</text>
    <text x="461" y="124" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">"I don't know, but…"</text>
    <text x="461" y="138" text-anchor="middle" class="v38" font-size="8.5" opacity=".7">is an honest answer</text>
    <text x="461" y="158" text-anchor="middle" class="v38" font-size="8" opacity=".5" font-style="italic">Defend your choices</text>
  </svg>`,


  /* ── L39:1 — Viva Voce Session 1 — question types triangle ───────────── */
  '39:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Viva question types">
    <defs><style>.v39{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v39" font-size="12" font-weight="800">Viva Question Types — Be Ready for All Three</text>
    <!-- Three columns -->
    <rect x="18"  y="30" width="162" height="140" rx="9" fill="rgba(0,159,227,.1)"   stroke="rgba(0,159,227,.45)"  stroke-width="1.5"/>
    <text x="99"  y="56" text-anchor="middle" class="v39" font-size="24">📖</text>
    <text x="99"  y="76" text-anchor="middle" class="v39" font-size="11" font-weight="700">Knowledge</text>
    <text x="99"  y="92" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">"What does X mean?"</text>
    <text x="99"  y="106" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">"How does Y work?"</text>
    <text x="99"  y="124" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">Can you explain your</text>
    <text x="99"  y="136" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">own design choices?</text>
    <text x="99"  y="158" text-anchor="middle" class="v39" font-size="9" fill="#009fe3" font-weight="700">→ Know your project</text>

    <rect x="199" y="30" width="162" height="140" rx="9" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
    <text x="280" y="56" text-anchor="middle" class="v39" font-size="24">🔧</text>
    <text x="280" y="76" text-anchor="middle" class="v39" font-size="11" font-weight="700">Application</text>
    <text x="280" y="92" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">"What if X went wrong?"</text>
    <text x="280" y="106" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">"How would you improve it?"</text>
    <text x="280" y="124" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">Can you think on your</text>
    <text x="280" y="136" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">feet under pressure?</text>
    <text x="280" y="158" text-anchor="middle" class="v39" font-size="9" fill="#c64b74" font-weight="700">→ Think aloud</text>

    <rect x="380" y="30" width="162" height="140" rx="9" fill="rgba(245,158,11,.1)"  stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="461" y="56" text-anchor="middle" class="v39" font-size="24">🪞</text>
    <text x="461" y="76" text-anchor="middle" class="v39" font-size="11" font-weight="700">Reflection</text>
    <text x="461" y="92" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">"What would you do</text>
    <text x="461" y="106" text-anchor="middle" class="v39" font-size="8.5" opacity=".7">differently?"</text>
    <text x="461" y="124" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">Do you understand</text>
    <text x="461" y="136" text-anchor="middle" class="v39" font-size="8" opacity=".55" font-style="italic">your own learning?</text>
    <text x="461" y="158" text-anchor="middle" class="v39" font-size="9" fill="#f59e0b" font-weight="700">→ Be honest</text>
  </svg>`,

  /* ── L40:1 — Viva Voce Session 2 — Q&A strategy ──────────────────────── */
  '40:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Viva Q and A strategy diagram">
    <defs>
      <style>.v40{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a40" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v40" font-size="12" font-weight="800">Answering Any Viva Question</text>
    <!-- Linear flow: Question → Pause → Structure → Answer → Evidence -->
    <rect x="10"  y="55" width="95" height="50" rx="8" fill="rgba(239,68,68,.12)"  stroke="rgba(239,68,68,.45)"  stroke-width="1.5"/>
    <text x="57"  y="76" text-anchor="middle" class="v40" font-size="20">❓</text>
    <text x="57"  y="95" text-anchor="middle" class="v40" font-size="9" font-weight="700">Question</text>

    <line x1="105" y1="80" x2="123" y2="80" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a40)"/>

    <rect x="125" y="55" width="85" height="50" rx="8" fill="rgba(245,158,11,.12)"  stroke="rgba(245,158,11,.45)"  stroke-width="1.5"/>
    <text x="167" y="76" text-anchor="middle" class="v40" font-size="20">⏸</text>
    <text x="167" y="95" text-anchor="middle" class="v40" font-size="9" font-weight="700">Pause &amp; think</text>

    <line x1="210" y1="80" x2="228" y2="80" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a40)"/>

    <rect x="230" y="55" width="100" height="50" rx="8" fill="rgba(155,24,68,.13)"  stroke="rgba(155,24,68,.45)"  stroke-width="1.5"/>
    <text x="280" y="76" text-anchor="middle" class="v40" font-size="20">🗂</text>
    <text x="280" y="95" text-anchor="middle" class="v40" font-size="9" font-weight="700">Structure first</text>

    <line x1="330" y1="80" x2="348" y2="80" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a40)"/>

    <rect x="350" y="55" width="85" height="50" rx="8" fill="rgba(0,159,227,.12)"   stroke="rgba(0,159,227,.45)"   stroke-width="1.5"/>
    <text x="392" y="76" text-anchor="middle" class="v40" font-size="20">💬</text>
    <text x="392" y="95" text-anchor="middle" class="v40" font-size="9" font-weight="700">Answer clearly</text>

    <line x1="435" y1="80" x2="453" y2="80" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a40)"/>

    <rect x="455" y="55" width="95" height="50" rx="8" fill="rgba(34,197,94,.13)"   stroke="rgba(34,197,94,.45)"   stroke-width="1.5"/>
    <text x="502" y="76" text-anchor="middle" class="v40" font-size="20">📎</text>
    <text x="502" y="95" text-anchor="middle" class="v40" font-size="9" font-weight="700">Add evidence</text>

    <!-- Bottom tips -->
    <text x="57"  y="125" text-anchor="middle" class="v40" font-size="7.5" opacity=".55" font-style="italic">Silence is OK</text>
    <text x="167" y="125" text-anchor="middle" class="v40" font-size="7.5" opacity=".55" font-style="italic">3 seconds is fine</text>
    <text x="280" y="125" text-anchor="middle" class="v40" font-size="7.5" opacity=".55" font-style="italic">"There are two parts…"</text>
    <text x="392" y="125" text-anchor="middle" class="v40" font-size="7.5" opacity=".55" font-style="italic">Short sentences</text>
    <text x="502" y="125" text-anchor="middle" class="v40" font-size="7.5" opacity=".55" font-style="italic">Point to your work</text>
    <text x="280" y="160" text-anchor="middle" class="v40" font-size="8.5" opacity=".5" font-style="italic">"I don't know, but my reasoning was…" beats a wrong answer every time</text>
  </svg>`,

  /* ── L41:1 — The Automated Graduate — AI-replaceable vs human-essential ─ */
  '41:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="AI replaceable vs human essential skills matrix">
    <defs><style>.v41{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v41" font-size="12" font-weight="800">Graduate Skills — 2026 and Beyond</text>
    <!-- Left: AI can do -->
    <rect x="18" y="30" width="240" height="145" rx="9" fill="rgba(239,68,68,.08)"  stroke="rgba(239,68,68,.4)" stroke-width="1.5"/>
    <text x="138" y="54" text-anchor="middle" class="v41" font-size="10" font-weight="700" fill="#ef4444">🤖 AI Can Now Do This</text>
    <text x="34"  y="76" class="v41" font-size="9.5" opacity=".8">✗  Summarise documents</text>
    <text x="34"  y="94" class="v41" font-size="9.5" opacity=".8">✗  First-draft writing</text>
    <text x="34"  y="112" class="v41" font-size="9.5" opacity=".8">✗  Basic data analysis</text>
    <text x="34"  y="130" class="v41" font-size="9.5" opacity=".8">✗  Routine coding tasks</text>
    <text x="34"  y="148" class="v41" font-size="9.5" opacity=".8">✗  Pattern recognition</text>
    <text x="34"  y="164" class="v41" font-size="8" opacity=".5" font-style="italic">Commoditised skills lose value fast</text>

    <!-- Right: Humans still win -->
    <rect x="302" y="30" width="240" height="145" rx="9" fill="rgba(34,197,94,.09)"  stroke="rgba(34,197,94,.4)" stroke-width="1.5"/>
    <text x="422" y="54" text-anchor="middle" class="v41" font-size="10" font-weight="700" fill="#22c55e">🧠 Humans Still Lead</text>
    <text x="318" y="76" class="v41" font-size="9.5" opacity=".8">✓  Ethical judgment &amp; accountability</text>
    <text x="318" y="94" class="v41" font-size="9.5" opacity=".8">✓  Novel problem framing</text>
    <text x="318" y="112" class="v41" font-size="9.5" opacity=".8">✓  Stakeholder empathy</text>
    <text x="318" y="130" class="v41" font-size="9.5" opacity=".8">✓  Cross-domain creativity</text>
    <text x="318" y="148" class="v41" font-size="9.5" opacity=".8">✓  Leading &amp; being led</text>
    <text x="318" y="164" class="v41" font-size="8" opacity=".5" font-style="italic">These are your competitive advantages</text>
  </svg>`,

  /* ── L42:1 — Personal Statement Audit — AI-assisted writing process ────── */
  '42:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="AI assisted personal statement writing process">
    <defs>
      <style>.v42{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a42" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v42" font-size="12" font-weight="800">AI-Assisted Writing — The Right Way</text>
    <!-- Step 1: Your raw draft -->
    <rect x="10" y="38" width="110" height="60" rx="8" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="65" y="62" text-anchor="middle" class="v42" font-size="20">✍️</text>
    <text x="65" y="80" text-anchor="middle" class="v42" font-size="9" font-weight="700">Your first draft</text>
    <text x="65" y="92" text-anchor="middle" class="v42" font-size="8" opacity=".6">Authentic voice</text>
    <line x1="120" y1="68" x2="138" y2="68" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a42)"/>
    <!-- Step 2: AI suggestions -->
    <rect x="140" y="38" width="110" height="60" rx="8" fill="rgba(0,159,227,.12)"  stroke="rgba(0,159,227,.45)"  stroke-width="1.5"/>
    <text x="195" y="62" text-anchor="middle" class="v42" font-size="20">🤖</text>
    <text x="195" y="80" text-anchor="middle" class="v42" font-size="9" font-weight="700">AI feedback</text>
    <text x="195" y="92" text-anchor="middle" class="v42" font-size="8" opacity=".6">Structure · Clarity</text>
    <!-- Critical filter — wide and prominent -->
    <line x1="250" y1="68" x2="268" y2="68" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a42)"/>
    <rect x="270" y="30" width="130" height="76" rx="8" fill="rgba(245,158,11,.16)" stroke="rgba(245,158,11,.6)"  stroke-width="2"/>
    <text x="335" y="54" text-anchor="middle" class="v42" font-size="20">🔍</text>
    <text x="335" y="72" text-anchor="middle" class="v42" font-size="10" font-weight="800" fill="#f59e0b">Critical filter</text>
    <text x="335" y="86" text-anchor="middle" class="v42" font-size="8" opacity=".7">Does this still sound</text>
    <text x="335" y="97" text-anchor="middle" class="v42" font-size="8" opacity=".7">like YOU?</text>
    <line x1="400" y1="68" x2="418" y2="68" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a42)"/>
    <!-- Step 4: Final -->
    <rect x="420" y="38" width="130" height="60" rx="8" fill="rgba(34,197,94,.13)"  stroke="rgba(34,197,94,.5)"   stroke-width="1.5"/>
    <text x="485" y="62" text-anchor="middle" class="v42" font-size="20">📄</text>
    <text x="485" y="80" text-anchor="middle" class="v42" font-size="9" font-weight="700">Final statement</text>
    <text x="485" y="92" text-anchor="middle" class="v42" font-size="8" opacity=".6">Genuinely yours</text>
    <!-- Warning below -->
    <rect x="10" y="114" width="540" height="34" rx="7" fill="rgba(239,68,68,.08)" stroke="rgba(239,68,68,.3)" stroke-width="1"/>
    <text x="280" y="130" text-anchor="middle" class="v42" font-size="9" font-weight="700" fill="#ef4444">⚠  Admissions tutors spot AI-generated prose. Accepting AI suggestions that flatten your voice is self-sabotage.</text>
    <text x="280" y="144" text-anchor="middle" class="v42" font-size="8" opacity=".6">Use AI to improve your writing — not to replace your thinking.</text>
    <text x="280" y="172" text-anchor="middle" class="v42" font-size="8" opacity=".45" font-style="italic">The goal: a better version of your authentic voice, not a generic AI essay</text>
  </svg>`,

  /* ── L43:1 — Course Retrospective — Start / Stop / Continue ──────────── */
  '43:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Course retrospective framework">
    <defs><style>.v43{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v43" font-size="12" font-weight="800">Course Retrospective — Three Questions</text>
    <!-- Three columns -->
    <rect x="18"  y="30" width="162" height="145" rx="9" fill="rgba(34,197,94,.1)"   stroke="rgba(34,197,94,.45)"  stroke-width="1.5"/>
    <text x="99"  y="58" text-anchor="middle" class="v43" font-size="28">▶</text>
    <text x="99"  y="80" text-anchor="middle" class="v43" font-size="13" font-weight="800" fill="#22c55e">START</text>
    <text x="99"  y="98" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">What should you begin</text>
    <text x="99"  y="110" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">doing in your next phase</text>
    <text x="99"  y="122" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">of learning — at uni,</text>
    <text x="99"  y="134" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">work, or independently?</text>
    <text x="99"  y="160" text-anchor="middle" class="v43" font-size="8" opacity=".5" font-style="italic">e.g. weekly AI reading</text>

    <rect x="199" y="30" width="162" height="145" rx="9" fill="rgba(239,68,68,.1)"   stroke="rgba(239,68,68,.45)"  stroke-width="1.5"/>
    <text x="280" y="58" text-anchor="middle" class="v43" font-size="28">⏹</text>
    <text x="280" y="80" text-anchor="middle" class="v43" font-size="13" font-weight="800" fill="#ef4444">STOP</text>
    <text x="280" y="98" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">What habit or belief</text>
    <text x="280" y="110" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">about AI did this course</text>
    <text x="280" y="122" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">change? What should</text>
    <text x="280" y="134" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">you leave behind?</text>
    <text x="280" y="160" text-anchor="middle" class="v43" font-size="8" opacity=".5" font-style="italic">e.g. accepting AI blindly</text>

    <rect x="380" y="30" width="162" height="145" rx="9" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
    <text x="461" y="58" text-anchor="middle" class="v43" font-size="28">🔁</text>
    <text x="461" y="80" text-anchor="middle" class="v43" font-size="13" font-weight="800" fill="#c64b74">CONTINUE</text>
    <text x="461" y="98" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">Which skills from this</text>
    <text x="461" y="110" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">course are most worth</text>
    <text x="461" y="122" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">keeping? What will you</text>
    <text x="461" y="134" text-anchor="middle" class="v43" font-size="8.5" opacity=".7">actually use?</text>
    <text x="461" y="160" text-anchor="middle" class="v43" font-size="8" opacity=".5" font-style="italic">e.g. prompt iteration</text>
  </svg>`,


  /* ── L45:1 — What Can You Trust? — epistemic framework ───────────────── */
  '45:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Epistemic framework for evaluating AI claims">
    <defs><style>.v45{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v45" font-size="12" font-weight="800">Evaluating Any AI Claim — Four Lenses</text>
    <!-- Four quadrants -->
    <line x1="280" y1="28" x2="280" y2="178" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/>
    <line x1="20"  y1="103" x2="540" y2="103" stroke="currentColor" stroke-opacity=".2" stroke-width="1"/>

    <rect x="22"  y="30"  width="250" height="68" rx="8" fill="rgba(155,24,68,.1)"  stroke="rgba(155,24,68,.4)" stroke-width="1.2"/>
    <text x="36"  y="52"  class="v45" font-size="20">🔍</text>
    <text x="70"  y="50"  class="v45" font-size="10" font-weight="700">Evidence</text>
    <text x="70"  y="64"  class="v45" font-size="8.5" opacity=".7">What is the actual claim?</text>
    <text x="70"  y="76"  class="v45" font-size="8.5" opacity=".7">Is there verifiable evidence?</text>
    <text x="70"  y="88"  class="v45" font-size="8.5" opacity=".7">How recent is it?</text>

    <rect x="288" y="30"  width="250" height="68" rx="8" fill="rgba(0,159,227,.1)"   stroke="rgba(0,159,227,.4)"  stroke-width="1.2"/>
    <text x="302" y="52"  class="v45" font-size="20">🏛</text>
    <text x="336" y="50"  class="v45" font-size="10" font-weight="700">Source</text>
    <text x="336" y="64"  class="v45" font-size="8.5" opacity=".7">Who made this claim?</text>
    <text x="336" y="76"  class="v45" font-size="8.5" opacity=".7">What do they stand to gain?</text>
    <text x="336" y="88"  class="v45" font-size="8.5" opacity=".7">Peer-reviewed or primary?</text>

    <rect x="22"  y="107" width="250" height="68" rx="8" fill="rgba(245,158,11,.1)"  stroke="rgba(245,158,11,.4)" stroke-width="1.2"/>
    <text x="36"  y="129" class="v45" font-size="20">🧩</text>
    <text x="70"  y="127" class="v45" font-size="10" font-weight="700">Logic</text>
    <text x="70"  y="141" class="v45" font-size="8.5" opacity=".7">Does the reasoning hold?</text>
    <text x="70"  y="153" class="v45" font-size="8.5" opacity=".7">Correlation ≠ causation?</text>
    <text x="70"  y="165" class="v45" font-size="8.5" opacity=".7">Any hidden assumptions?</text>

    <rect x="288" y="107" width="250" height="68" rx="8" fill="rgba(34,197,94,.1)"   stroke="rgba(34,197,94,.4)"  stroke-width="1.2"/>
    <text x="302" y="129" class="v45" font-size="20">🎯</text>
    <text x="336" y="127" class="v45" font-size="10" font-weight="700">Purpose</text>
    <text x="336" y="141" class="v45" font-size="8.5" opacity=".7">Why is this being shared?</text>
    <text x="336" y="153" class="v45" font-size="8.5" opacity=".7">Who benefits if you believe it?</text>
    <text x="336" y="165" class="v45" font-size="8.5" opacity=".7">What's the emotional hook?</text>
  </svg>`,

  /* ── L46:1 — Trust But Verify — VERIFY workflow ───────────────────────── */
  '46:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="VERIFY workflow for fact-checking AI outputs">
    <defs>
      <style>.v46{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a46" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="currentColor" opacity=".4"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v46" font-size="13" font-weight="800">The VERIFY Workflow</text>
    <!-- Six steps in two rows -->
    <!-- Row 1 -->
    <rect x="10"  y="30" width="82" height="62" rx="7" fill="rgba(155,24,68,.16)" stroke="rgba(155,24,68,.55)" stroke-width="1.5"/>
    <text x="51"  y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#c64b74">V</text>
    <text x="51"  y="66" text-anchor="middle" class="v46" font-size="9"  font-weight="700">Vet the claim</text>
    <text x="51"  y="78" text-anchor="middle" class="v46" font-size="7.5" opacity=".6">Exact wording?</text>
    <line x1="92" y1="61" x2="107" y2="61" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a46)"/>

    <rect x="109" y="30" width="82" height="62" rx="7" fill="rgba(0,159,227,.13)"   stroke="rgba(0,159,227,.5)"   stroke-width="1.5"/>
    <text x="150" y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#009fe3">E</text>
    <text x="150" y="66" text-anchor="middle" class="v46" font-size="9"  font-weight="700">Evidence check</text>
    <text x="150" y="78" text-anchor="middle" class="v46" font-size="7.5" opacity=".6">Primary source?</text>
    <line x1="191" y1="61" x2="206" y2="61" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a46)"/>

    <rect x="208" y="30" width="82" height="62" rx="7" fill="rgba(34,197,94,.12)"   stroke="rgba(34,197,94,.5)"   stroke-width="1.5"/>
    <text x="249" y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#22c55e">R</text>
    <text x="249" y="66" text-anchor="middle" class="v46" font-size="9"  font-weight="700">Recency</text>
    <text x="249" y="78" text-anchor="middle" class="v46" font-size="7.5" opacity=".6">Still current?</text>
    <line x1="290" y1="61" x2="305" y2="61" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a46)"/>

    <rect x="307" y="30" width="82" height="62" rx="7" fill="rgba(245,158,11,.13)"  stroke="rgba(245,158,11,.5)"  stroke-width="1.5"/>
    <text x="348" y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#f59e0b">I</text>
    <text x="348" y="66" text-anchor="middle" class="v46" font-size="9"  font-weight="700">Intent</text>
    <text x="348" y="78" text-anchor="middle" class="v46" font-size="7.5" opacity=".6">Who benefits?</text>
    <line x1="389" y1="61" x2="404" y2="61" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a46)"/>

    <rect x="406" y="30" width="82" height="62" rx="7" fill="rgba(168,85,247,.13)"  stroke="rgba(168,85,247,.5)"  stroke-width="1.5"/>
    <text x="447" y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#a855f7">F</text>
    <text x="447" y="66" text-anchor="middle" class="v46" font-size="9"  font-weight="700">Find consensus</text>
    <text x="447" y="78" text-anchor="middle" class="v46" font-size="7.5" opacity=".6">3 sources agree?</text>
    <line x1="488" y1="61" x2="503" y2="61" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a46)"/>

    <rect x="505" y="30" width="45" height="62" rx="7" fill="rgba(239,68,68,.13)"   stroke="rgba(239,68,68,.5)"   stroke-width="1.5"/>
    <text x="527" y="52" text-anchor="middle" class="v46" font-size="15" font-weight="900" fill="#ef4444">Y</text>
    <text x="527" y="66" text-anchor="middle" class="v46" font-size="8"  font-weight="700">Your</text>
    <text x="527" y="78" text-anchor="middle" class="v46" font-size="8"  font-weight="700">call</text>

    <text x="280" y="120" text-anchor="middle" class="v46" font-size="11" font-weight="800">Verify  ·  Evidence  ·  Recency  ·  Intent  ·  Find consensus  ·  Your call</text>
    <rect x="20" y="132" width="520" height="38" rx="7" fill="rgba(155,24,68,.07)" stroke="rgba(155,24,68,.2)" stroke-width="1"/>
    <text x="280" y="149" text-anchor="middle" class="v46" font-size="9" opacity=".75">Apply this to every AI-generated claim before you cite it, share it, or act on it.</text>
    <text x="280" y="163" text-anchor="middle" class="v46" font-size="8.5" opacity=".55">If it fails at any step — flag it, don't forward it.</text>
  </svg>`,

  /* ── L47:1 — The AI Content Flood — SIFT methodology ─────────────────── */
  '47:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="SIFT media literacy methodology">
    <defs><style>.v47{font-family:system-ui,sans-serif;fill:currentColor}</style></defs>
    <text x="280" y="18" text-anchor="middle" class="v47" font-size="13" font-weight="800">SIFT — Your Media Literacy Toolkit</text>
    <!-- Four large cards -->
    <rect x="10"  y="30" width="126" height="140" rx="9" fill="rgba(155,24,68,.12)"  stroke="rgba(155,24,68,.5)" stroke-width="2"/>
    <text x="73"  y="62" text-anchor="middle" class="v47" font-size="28" font-weight="900" fill="#c64b74">S</text>
    <text x="73"  y="82" text-anchor="middle" class="v47" font-size="11" font-weight="800">Stop</text>
    <text x="73"  y="98" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">Pause before</text>
    <text x="73"  y="110" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">you share or react</text>
    <text x="73"  y="128" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">Emotional content</text>
    <text x="73"  y="140" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">triggers fast sharing</text>
    <text x="73"  y="158" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">Slow down</text>

    <rect x="144" y="30" width="126" height="140" rx="9" fill="rgba(0,159,227,.11)"   stroke="rgba(0,159,227,.5)"  stroke-width="2"/>
    <text x="207" y="62" text-anchor="middle" class="v47" font-size="28" font-weight="900" fill="#009fe3">I</text>
    <text x="207" y="82" text-anchor="middle" class="v47" font-size="11" font-weight="800">Investigate</text>
    <text x="207" y="98" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">Check the source,</text>
    <text x="207" y="110" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">not just the content</text>
    <text x="207" y="128" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">Google the site</text>
    <text x="207" y="140" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">before reading it</text>

    <rect x="278" y="30" width="126" height="140" rx="9" fill="rgba(34,197,94,.11)"   stroke="rgba(34,197,94,.5)"  stroke-width="2"/>
    <text x="341" y="62" text-anchor="middle" class="v47" font-size="28" font-weight="900" fill="#22c55e">F</text>
    <text x="341" y="82" text-anchor="middle" class="v47" font-size="11" font-weight="800">Find coverage</text>
    <text x="341" y="98" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">Search for other</text>
    <text x="341" y="110" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">sources on this claim</text>
    <text x="341" y="128" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">Lateral reading —</text>
    <text x="341" y="140" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">leave the page</text>

    <rect x="412" y="30" width="138" height="140" rx="9" fill="rgba(245,158,11,.11)"  stroke="rgba(245,158,11,.5)" stroke-width="2"/>
    <text x="481" y="62" text-anchor="middle" class="v47" font-size="28" font-weight="900" fill="#f59e0b">T</text>
    <text x="481" y="82" text-anchor="middle" class="v47" font-size="11" font-weight="800">Trace claims</text>
    <text x="481" y="98" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">Go upstream to the</text>
    <text x="481" y="110" text-anchor="middle" class="v47" font-size="8.5" opacity=".7">original source</text>
    <text x="481" y="128" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">AI often cites real</text>
    <text x="481" y="140" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">sources incorrectly</text>
    <text x="481" y="158" text-anchor="middle" class="v47" font-size="8" opacity=".5" font-style="italic">— always check</text>
  </svg>`,

  /* ── L49:1 — AI and Democracy — influence operation pipeline ──────────── */
  '49:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="AI influence operation pipeline diagram">
    <defs>
      <style>.v49{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a49" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0,7 3.5,0 7" fill="rgba(239,68,68,.7)"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v49" font-size="12" font-weight="800">How AI-Driven Influence Operations Work</text>
    <!-- Pipeline: 5 stages -->
    <rect x="10"  y="40" width="90" height="60" rx="7" fill="rgba(155,24,68,.13)"  stroke="rgba(155,24,68,.45)" stroke-width="1.5"/>
    <text x="55"  y="62" text-anchor="middle" class="v49" font-size="18">🎯</text>
    <text x="55"  y="78" text-anchor="middle" class="v49" font-size="9"  font-weight="700">Target</text>
    <text x="55"  y="90" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">Identify swing</text>
    <text x="55"  y="100" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">groups via data</text>
    <line x1="100" y1="70" x2="117" y2="70" stroke="rgba(239,68,68,.6)" stroke-width="1.8" marker-end="url(#a49)"/>

    <rect x="119" y="40" width="90" height="60" rx="7" fill="rgba(239,68,68,.1)"   stroke="rgba(239,68,68,.4)"  stroke-width="1.5"/>
    <text x="164" y="62" text-anchor="middle" class="v49" font-size="18">🤖</text>
    <text x="164" y="78" text-anchor="middle" class="v49" font-size="9"  font-weight="700">Generate</text>
    <text x="164" y="90" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">AI creates 1000s</text>
    <text x="164" y="100" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">of tailored posts</text>
    <line x1="209" y1="70" x2="226" y2="70" stroke="rgba(239,68,68,.6)" stroke-width="1.8" marker-end="url(#a49)"/>

    <rect x="228" y="40" width="104" height="60" rx="7" fill="rgba(239,68,68,.12)"  stroke="rgba(239,68,68,.45)" stroke-width="1.5"/>
    <text x="280" y="62" text-anchor="middle" class="v49" font-size="18">👥</text>
    <text x="280" y="78" text-anchor="middle" class="v49" font-size="9"  font-weight="700">Amplify</text>
    <text x="280" y="90" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">Bot networks push</text>
    <text x="280" y="100" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">content to trending</text>
    <line x1="332" y1="70" x2="349" y2="70" stroke="rgba(239,68,68,.6)" stroke-width="1.8" marker-end="url(#a49)"/>

    <rect x="351" y="40" width="90" height="60" rx="7" fill="rgba(239,68,68,.13)"  stroke="rgba(239,68,68,.5)"  stroke-width="2"/>
    <text x="396" y="62" text-anchor="middle" class="v49" font-size="18">📺</text>
    <text x="396" y="78" text-anchor="middle" class="v49" font-size="9"  font-weight="700">Mainstream</text>
    <text x="396" y="90" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">Real media picks</text>
    <text x="396" y="100" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">up the narrative</text>
    <line x1="441" y1="70" x2="458" y2="70" stroke="rgba(239,68,68,.6)" stroke-width="1.8" marker-end="url(#a49)"/>

    <rect x="460" y="40" width="90" height="60" rx="7" fill="rgba(245,158,11,.12)"  stroke="rgba(245,158,11,.45)" stroke-width="1.5"/>
    <text x="505" y="62" text-anchor="middle" class="v49" font-size="18">🗳</text>
    <text x="505" y="78" text-anchor="middle" class="v49" font-size="9"  font-weight="700">Influence</text>
    <text x="505" y="90" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">Voters shift</text>
    <text x="505" y="100" text-anchor="middle" class="v49" font-size="7.5" opacity=".6">behaviour</text>

    <!-- Defence row -->
    <rect x="10" y="118" width="540" height="54" rx="8" fill="rgba(34,197,94,.07)" stroke="rgba(34,197,94,.3)" stroke-width="1"/>
    <text x="280" y="136" text-anchor="middle" class="v49" font-size="10" font-weight="700" fill="#22c55e">🛡 Defences Being Developed</text>
    <text x="90"  y="155" text-anchor="middle" class="v49" font-size="8.5" opacity=".7">AI watermarking</text>
    <text x="220" y="155" text-anchor="middle" class="v49" font-size="8.5" opacity=".7">Platform detection</text>
    <text x="350" y="155" text-anchor="middle" class="v49" font-size="8.5" opacity=".7">Electoral AI laws</text>
    <text x="480" y="155" text-anchor="middle" class="v49" font-size="8.5" opacity=".7">Media literacy</text>
  </svg>`,

  /* ── L50:1 — Mini-Project — design-prompt-test-present cycle ─────────── */
  '50:1': `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" aria-label="Mini project design build test present cycle">
    <defs>
      <style>.v50{font-family:system-ui,sans-serif;fill:currentColor}</style>
      <marker id="a50" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <polygon points="0 0,8 4,0 8" fill="currentColor" opacity=".45"/>
      </marker>
    </defs>
    <text x="280" y="18" text-anchor="middle" class="v50" font-size="12" font-weight="800">Mini-Project — The Process in One Lesson</text>
    <!-- Cycle of 4 stages arranged in a square -->
    <!-- Top-left: Design -->
    <rect x="60" y="36" width="162" height="60" rx="9" fill="rgba(155,24,68,.14)" stroke="rgba(155,24,68,.5)" stroke-width="1.5"/>
    <text x="141" y="60" text-anchor="middle" class="v50" font-size="22">🎯</text>
    <text x="141" y="78" text-anchor="middle" class="v50" font-size="11" font-weight="700">1. Design</text>
    <text x="141" y="90" text-anchor="middle" class="v50" font-size="8" opacity=".65">Problem · User · Scope</text>
    <!-- Top-right: Prompt & Build -->
    <rect x="338" y="36" width="162" height="60" rx="9" fill="rgba(0,159,227,.13)"  stroke="rgba(0,159,227,.5)"  stroke-width="1.5"/>
    <text x="419" y="60" text-anchor="middle" class="v50" font-size="22">✍️</text>
    <text x="419" y="78" text-anchor="middle" class="v50" font-size="11" font-weight="700">2. Prompt &amp; Build</text>
    <text x="419" y="90" text-anchor="middle" class="v50" font-size="8" opacity=".65">PTFC · Iterate · Create</text>
    <!-- Bottom-left: Present -->
    <rect x="60" y="116" width="162" height="60" rx="9" fill="rgba(168,85,247,.13)" stroke="rgba(168,85,247,.5)" stroke-width="1.5"/>
    <text x="141" y="140" text-anchor="middle" class="v50" font-size="22">🎤</text>
    <text x="141" y="158" text-anchor="middle" class="v50" font-size="11" font-weight="700">4. Present</text>
    <text x="141" y="170" text-anchor="middle" class="v50" font-size="8" opacity=".65">Share · Reflect · Learn</text>
    <!-- Bottom-right: Test -->
    <rect x="338" y="116" width="162" height="60" rx="9" fill="rgba(34,197,94,.13)"  stroke="rgba(34,197,94,.5)"  stroke-width="1.5"/>
    <text x="419" y="140" text-anchor="middle" class="v50" font-size="22">🧪</text>
    <text x="419" y="158" text-anchor="middle" class="v50" font-size="11" font-weight="700">3. Test</text>
    <text x="419" y="170" text-anchor="middle" class="v50" font-size="8" opacity=".65">Real user · Edge cases</text>
    <!-- Arrows -->
    <line x1="222" y1="66"  x2="336" y2="66"  stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a50)"/>
    <line x1="419" y1="96"  x2="419" y2="114" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a50)"/>
    <line x1="336" y1="146" x2="222" y2="146" stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a50)"/>
    <line x1="141" y1="114" x2="141" y2="96"  stroke="currentColor" stroke-opacity=".4" stroke-width="1.5" marker-end="url(#a50)"/>
    <!-- Centre note -->
    <text x="280" y="112" text-anchor="middle" class="v50" font-size="9" opacity=".55" font-style="italic">One lesson. Low stakes.</text>
    <text x="280" y="124" text-anchor="middle" class="v50" font-size="9" opacity=".55" font-style="italic">Practise the process.</text>
  </svg>`,

};
