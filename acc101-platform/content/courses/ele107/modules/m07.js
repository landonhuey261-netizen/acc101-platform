// ele107 - Module 7: Three-Phase Transformer Connections
module.exports = {
  "number": 7,
  "slug": "three-phase-transformer-connections",
  "title": "Three-Phase Transformer Connections",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the four three-phase transformer connections: delta-delta, wye-wye, delta-wye, and wye-delta.",
    "Explain why delta-wye is the most common distribution connection.",
    "Calculate line and phase voltages and currents for wye and delta connections.",
    "Explain the 208Y/120 V and 480Y/277 V systems and where each is used.",
    "Describe open-delta (V-V) operation and its reduced capacity."
  ],
  "sections": [
    {
      "heading": "Four Ways to Connect Three Windings",
      "html": "<p>A three-phase transformer is three single-phase transformers in one tank (or three separate units banked together), and each side can be connected in delta or wye, giving four combinations. In a <strong>delta-delta (Δ-Δ)</strong> connection, both sides are triangles: no neutral, high reliability, and the bank keeps working at reduced capacity if one unit fails (open delta). In a <strong>wye-wye (Y-Y)</strong> connection, both sides have neutrals, which suits systems that need a neutral on both sides, but third-harmonic currents can cause problems unless the neutral is solidly grounded.</p>\n<p>The <strong>delta-wye (Δ-Y)</strong> connection is the workhorse of commercial and industrial distribution: the primary is delta, which traps third-harmonic currents inside the delta, and the secondary is wye, which gives a neutral for 120 V loads. The <strong>wye-delta (Y-Δ)</strong> connection is used mainly at the start of transmission lines, where a grounded wye primary suits the high-voltage system and the delta secondary feeds a three-wire load. Each connection also introduces a phase shift — delta-wye and wye-delta shift the secondary voltage 30 degrees from the primary — and that shift matters when transformers are paralleled.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Delta traps harmonics and needs no neutral; wye gives you a neutral. Delta-wye combines both, which is why it feeds most commercial buildings.</div>"
    },
    {
      "heading": "208Y/120 V and 480Y/277 V Systems",
      "html": "<p>Two wye systems dominate North American buildings. A <strong>208Y/120 V</strong> system has 120 V from any phase to the neutral and 208 V between any two phases (120 × √3 = 208). It feeds receptacles, lighting, and small equipment at 120 V, and three-phase motors and larger equipment at 208 V. A <strong>480Y/277 V</strong> system has 277 V phase-to-neutral — the voltage used for commercial fluorescent and LED lighting — and 480 V phase-to-phase for large motors, HVAC equipment, and distribution to step-down transformers that make 208Y/120 V for the rest of the building.</p>\n<p>Knowing which system you are standing in front of is a safety matter as much as a technical one: 277 V lighting circuits look like 120 V circuits until you meter them, and the shock and arc-flash hazards are much greater. Always verify the system voltage with a meter before working, and never assume a lighting circuit is 120 V because it looks like one. The voltage is marked on the panel schedule and the transformer nameplate — read both.</p>"
    },
    {
      "heading": "Line vs Phase: The √3 Rules",
      "html": "<p>Every wye and delta calculation uses the same two rules. In <strong>wye</strong>: line voltage = √3 × phase voltage, and line current = phase current. In <strong>delta</strong>: line voltage = phase voltage, and line current = √3 × phase current. The power formula is the same either way: three-phase power P = √3 × Vline × Iline × power factor. Keep the two rules straight by remembering what each connection joins: wye joins windings at a point, so voltages add across two windings (√3), while currents flow straight through; delta joins windings in a loop, so currents add at each corner (√3), while the voltage across each winding is the full line voltage.</p>\n<p>Worked example: a 45 kVA, 480 V to 208Y/120 V, three-phase, delta-wye transformer. Primary full-load current = 45,000 / (480 × 1.732) = 54.1 A. Secondary full-load current = 45,000 / (208 × 1.732) = 124.9 A. Those two numbers are the starting point for every protection and conductor decision in Module 8, and the same arithmetic works for any three-phase transformer if you use the line voltages.</p>"
    },
    {
      "heading": "Open Delta, Polarity, and Paralleling",
      "html": "<p>If one transformer of a delta-delta bank fails, the remaining two can keep running as an <strong>open delta (V-V)</strong> — but only at 57.7% of the bank's original capacity, not two-thirds as many people guess. The missing unit's share cannot be picked up fully because the two remaining units carry currents that are out of phase with their voltages. Open delta is an emergency measure or a way to serve a small three-phase load cheaply, not a permanent design choice.</p>\n<p><strong>Polarity</strong> is the relative direction of the windings, marked by dots or by H1/X1 terminal markings. Getting polarity wrong in a bank means the windings fight each other, producing circulating currents, heat, and wrong voltages. Transformers are paralleled only when their voltage ratios, impedances, and phase shifts match — a delta-wye transformer (30-degree shift) can never be paralleled with a delta-delta or wye-wye transformer (no shift). Before paralleling, the phasing is verified with a voltmeter across the open tie: zero volts across each corresponding phase pair means the phasing is right.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Expecting an open-delta bank to carry two-thirds of its original load. It carries 57.7% — the 1/√3 factor — so a 45 kVA bank becomes about a 26 kVA bank, and loading it to 30 kVA will overheat it.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Four connections: Δ-Δ, Y-Y, Δ-Y, Y-Δ. Delta-wye is the standard distribution connection because it traps harmonics and provides a neutral.</li>\n<li>208Y/120 V: 120 V phase-to-neutral, 208 V phase-to-phase. 480Y/277 V: 277 V phase-to-neutral, 480 V phase-to-phase.</li>\n<li>Wye: line V = √3 × phase V, line I = phase I. Delta: line V = phase V, line I = √3 × phase I.</li>\n<li>Three-phase full-load current: I = kVA × 1,000 / (Vline × √3).</li>\n<li>Open delta carries 57.7% of the bank's capacity. Paralleling needs matching ratios, impedances, and phase shifts.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating 277 V lighting as if it were 120 V. Verify the system voltage at the panel schedule and with a meter before working — 277 V is a much more serious shock hazard.</div>\n<p><strong>Ready-to-Work link:</strong> If you can calculate the line currents of a 45 kVA delta-wye transformer and explain why delta-wye is the standard, you have this module. Module 8 covers sizing and protection.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Delta-delta (Δ-Δ)", "def": "A three-phase connection with both sides in delta; no neutral, reliable, can run open-delta." },
    { "term": "Wye-wye (Y-Y)", "def": "A three-phase connection with both sides in wye; neutrals on both sides." },
    { "term": "Delta-wye (Δ-Y)", "def": "The most common distribution connection: delta primary traps harmonics, wye secondary gives a neutral." },
    { "term": "Wye-delta (Y-Δ)", "def": "A connection used mainly at transmission step-up points; grounded wye primary, delta secondary." },
    { "term": "208Y/120 V", "def": "A wye system with 120 V phase-to-neutral and 208 V phase-to-phase." },
    { "term": "480Y/277 V", "def": "A wye system with 277 V phase-to-neutral and 480 V phase-to-phase." },
    { "term": "Line voltage", "def": "The voltage between any two phase conductors." },
    { "term": "Phase voltage", "def": "The voltage across one winding, or from a phase to the neutral in a wye system." },
    { "term": "Open delta (V-V)", "def": "Two transformers of a delta bank running after one fails; capacity drops to 57.7%." },
    { "term": "Polarity", "def": "The relative winding direction, marked by dots or H1/X1 terminals; wrong polarity causes circulating currents." },
    { "term": "Phase shift", "def": "The 30-degree angle between primary and secondary voltages in delta-wye and wye-delta connections." },
    { "term": "Neutral", "def": "The common point of a wye connection, usually grounded, that gives the phase-to-neutral voltage." },
    { "term": "Third harmonics", "def": "Distortion currents at three times the line frequency that a delta connection traps and circulates internally." },
    { "term": "Paralleling", "def": "Connecting two transformers together to share a load; requires matching ratios, impedances, and phase shifts." }
  ],
  "video": {
    "title": "Chalk Talk: Delta Delta",
    "embedUrl": "https://www.youtube.com/embed/K2VJqhcu7HY",
    "note": "A chalk-talk walkthrough of the delta-delta transformer connection — follow the winding diagrams and watch how the three single-phase units combine into a three-phase bank.",
    "more": [
      { "title": "Selecting Three-Phase Transformer Winding Connections | EM Lecture 5C", "url": "https://www.youtube.com/watch?v=sSUxk_06CAA" },
      { "title": "Three-Phase Power Explained: Wye, Delta & Phasors | Power Systems 01", "url": "https://www.youtube.com/watch?v=VUV_g5x_RGM" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 45 kVA, 480 V to 208Y/120 V, three-phase, delta-wye transformer: what are the primary and secondary full-load currents?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Primary I = 45,000 / (480 × 1.732) = 45,000 / 831.4 = 54.1 A. Step 2: Secondary I = 45,000 / (208 × 1.732) = 45,000 / 360.3 = 124.9 A. Step 3: About 54 A on the primary, about 125 A on the secondary.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A wye system has a phase voltage of 277 V. What is the line voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In wye, line voltage = √3 × phase voltage. Step 2: 1.732 × 277 = 480 V. Step 3: This is the 480Y/277 V system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A delta-connected load has a phase current of 20 A. What is the line current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In delta, line current = √3 × phase current. Step 2: 1.732 × 20 = 34.6 A. Step 3: The line carries about 35 A while each winding carries 20 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 30 kVA delta-delta bank loses one transformer and runs open-delta. What is its new capacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Open delta carries 57.7% of the original capacity. Step 2: 30 × 0.577 = 17.3 kVA. Step 3: The bank can now carry only about 17 kVA — not 20 kVA — so loads must be shed or the unit replaced.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A building needs 120 V receptacles and 208 V three-phase motors. Which transformer connection and system voltage fit, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A delta-wye transformer giving 208Y/120 V. Step 2: The wye secondary provides a neutral for the 120 V receptacles. Step 3: The same secondary gives 208 V phase-to-phase for the three-phase motors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Can a delta-wye transformer be paralleled with a delta-delta transformer? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: The delta-wye connection shifts the secondary voltage 30 degrees from the primary; the delta-delta connection has no shift. Step 3: Paralleling them would put the two secondaries out of phase, causing large circulating currents and damage.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The most common three-phase distribution connection is:",
      "choices": [ "Delta-delta", "Wye-wye", "Delta-wye", "Wye-delta" ],
      "answer": 2,
      "explanation": "Correct: (c). Delta-wye traps harmonics on the primary and gives a neutral on the secondary. (a) Delta-delta has no neutral. (b) Wye-wye has harmonic problems. (d) Wye-delta is mainly for transmission step-up."
    },
    {
      "q": "In a 208Y/120 V system, the voltage between two phases is:",
      "choices": [ "120 V", "208 V", "240 V", "277 V" ],
      "answer": 1,
      "explanation": "Correct: (b). 120 × √3 = 208 V. (a) 120 V is phase-to-neutral. (c) 240 V belongs to the residential 120/240 V system. (d) 277 V is the phase-to-neutral voltage of the 480Y system."
    },
    {
      "q": "In a wye connection, the line current equals:",
      "choices": [ "√3 times the phase current", "The phase current", "Half the phase current", "Three times the phase current" ],
      "answer": 1,
      "explanation": "Correct: (b). In wye, line current = phase current. (a) That is the delta relationship. (c) and (d) are not wye relationships."
    },
    {
      "q": "A 45 kVA, 480 V, three-phase transformer has a primary full-load current of about:",
      "choices": [ "94 A", "54 A", "125 A", "25 A" ],
      "answer": 1,
      "explanation": "Correct: (b). 45,000 / (480 × 1.732) = 54.1 A. (a) 94 A is the single-phase result. (c) 125 A is the secondary current at 208 V. (d) 25 A is too small by half."
    },
    {
      "q": "An open-delta bank carries what percentage of its original capacity?",
      "choices": [ "Two-thirds (66.7%)", "57.7%", "50%", "100% — it carries the full load" ],
      "answer": 1,
      "explanation": "Correct: (b). Open delta carries 1/√3 = 57.7%. (a) Two-thirds is the common wrong guess. (c) 50% is too low. (d) One missing unit cannot carry the full load."
    },
    {
      "q": "The 277 V in a 480Y/277 V system is used mainly for:",
      "choices": [ "Receptacles", "Commercial lighting", "Residential ranges", "Single-phase motors" ],
      "answer": 1,
      "explanation": "Correct: (b). 277 V feeds commercial lighting. (a) Receptacles are 120 V. (c) Ranges use 240 V residential service. (d) Single-phase motors typically use 120 V or 240 V."
    },
    {
      "q": "Delta-wye and wye-delta connections shift the secondary voltage by:",
      "choices": [ "0 degrees", "30 degrees", "90 degrees", "120 degrees" ],
      "answer": 1,
      "explanation": "Correct: (b). The shift is 30 degrees. (a) Delta-delta and wye-wye have no shift. (c) and (d) are not the connection phase shift."
    },
    {
      "q": "Two transformers can be paralleled only if they match in:",
      "choices": [ "Color and manufacturer", "Voltage ratio, impedance, and phase shift", "Weight and size", "Age and installation date" ],
      "answer": 1,
      "explanation": "Correct: (b). Ratio, impedance, and phase shift must match or circulating currents result. (a) Color and brand do not matter. (c) Weight and size do not matter electrically. (d) Age does not matter if the electrical characteristics match."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Three-Phase Transformer Connections: Quick Reference</h3>\n<p><strong>Core idea:</strong> Delta traps harmonics and needs no neutral; wye gives a neutral. Delta-wye is the standard distribution connection.</p>\n<p><strong>Systems:</strong> 208Y/120 V (120 V to neutral, 208 V phase-to-phase) · 480Y/277 V (277 V to neutral, 480 V phase-to-phase).</p>\n<p><strong>Wye:</strong> Line V = √3 × phase V, line I = phase I. <strong>Delta:</strong> Line V = phase V, line I = √3 × phase I.</p>\n<p><strong>3-phase FLA:</strong> I = kVA × 1,000 / (Vline × √3).</p>\n<p><strong>Open delta:</strong> 57.7% capacity. <strong>Phase shift:</strong> Δ-Y and Y-Δ shift 30° — never parallel with a 0°-shift transformer.</p>\n<p><strong>Self-check:</strong> Calculate the line currents of a 45 kVA 480→208Y/120 V transformer. If you can, you have this module.</p>\n"
};
