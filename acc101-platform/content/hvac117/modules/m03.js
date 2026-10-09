// HVAC 117 - Module 3: Single-Phase Motors in Depth
module.exports = {
  number: 3,
  slug: "single-phase-motors-in-depth",
  title: "Single-Phase Motors in Depth",
  estTime: "3–4 hours",
  objectives: [
    "Explain why a single-phase induction motor needs a phase-splitting device to develop starting torque.",
    "Compare PSC, CSIR, CSR, and basic split-phase motors by starting device, torque behavior, and typical HVAC use.",
    "Describe the construction and electrical difference between start and run windings.",
    "Explain how a centrifugal switch or start relay removes the start winding or start capacitor at speed.",
    "Identify Common, Start, and Run terminals from resistance readings, using the rule that the three readings must add up."
  ],
  sections: [
    {
      heading: "The Single-Phase Starting Problem",
      html: `
<p>A single-phase supply, applied to one winding, produces a magnetic field that pulsates but does not rotate. A rotor sitting in a pulsating field has no reason to turn in either direction — the pushes cancel. That is the core problem of every motor in this module: a single-phase induction motor is <strong>not inherently self-starting</strong>.</p>
<p>The universal cure is a second winding, the <strong>start (auxiliary) winding</strong>, placed at an angle to the <strong>run (main) winding</strong> and fed a current that is out of phase with the run winding's current. Two out-of-phase currents in two windings at an angle produce a field with a rotating component, and the rotor follows it. Module 2 supplied the phase-shifting tool: a capacitor in series with a winding makes that winding's current <em>lead</em>, while the run winding's inductive current <em>lags</em>.</p>
<p>Every motor type in this module is a different answer to the same three questions: How do we create the phase split? How much starting torque do we get? And once the rotor is near full speed — where the run winding alone produces torque efficiently — what do we do with the start winding?</p>
<div class="callout"><strong>Key idea:</strong> PSC, CSIR, CSR, and split-phase are not different machines so much as different start-winding strategies. Diagnose them by asking which strategy the nameplate and wiring show, then test exactly the components that strategy depends on.</div>`
    },
    {
      heading: "Start and Run Windings: Built Differently on Purpose",
      html: `
<p>The two windings are wound differently because they have different jobs. The <strong>run winding</strong> is built from heavier wire with lower resistance, designed to carry current continuously for the life of the motor. The <strong>start winding</strong> uses finer wire with higher resistance and is designed — in most types — for a few seconds of duty at a time.</p>
<p>That construction difference is measurable, and it is your identification tool. <strong>Worked example (a hermetic compressor's three terminals):</strong> you measure Common-to-Run = 2 Ω, Common-to-Start = 6 Ω, and Start-to-Run = 8 Ω. Three rules decode it:</p>
<ul>
<li>The largest reading (8 Ω, Start-to-Run) is across both windings in series — those two terminals are Start and Run.</li>
<li>The terminal left out of that pair is <strong>Common</strong>.</li>
<li>From Common, the larger reading (6 Ω) goes to <strong>Start</strong> (fine wire, high resistance); the smaller (2 Ω) goes to <strong>Run</strong> (heavy wire, low resistance).</li>
<li>Check: 2 + 6 = 8. The two small readings must sum to the large one. If they do not, you are misreading, on a wrong scale, or the winding is damaged.</li>
</ul>
<p>Also test each terminal to the shell or ground: a healthy winding reads open (infinite) to ground. Continuity to ground condemns the motor or compressor regardless of how pretty the winding readings look.</p>
<div class="callout"><strong>Key idea:</strong> High reading = Start, low reading = Run, sum check = truth test. Those three facts identify any unlabeled three-terminal single-phase motor and screen it for opens and grounds in one pass.</div>`
    },
    {
      heading: "Split-Phase and CSIR: Resistance Split, Then a Capacitor Boost",
      html: `
<p>The plain <strong>split-phase motor</strong> creates its phase difference with resistance: the start winding's high resistance makes its current more nearly in phase with the voltage, while the run winding's current lags — a modest split and modest starting torque. A starting switch removes the start winding once the motor is up to speed, because that fine-wire winding would overheat if left energized. Split-phase motors suit light starting loads and are the conceptual parent of everything else here.</p>
<p>The <strong>CSIR motor</strong> — Capacitor Start, Induction Run — puts a <strong>start capacitor</strong> in series with the start winding. The capacitor's leading current produces a much stronger phase split and substantially higher starting torque for hard-to-start loads. The trade is duty: a start capacitor is built for brief, intermittent service, and the start circuit must be taken out of the circuit at speed. Leave a start capacitor energized continuously — a welded relay contact will do exactly that — and it can fail, sometimes dramatically, and take the start winding with it.</p>
<p>In open motors the dropout device is usually a <strong>centrifugal switch</strong>; in hermetic compressors, where no switch can live inside the shell, an external <strong>start relay</strong> (current relay or potential relay) does the same job. Either way, the removal typically happens at roughly three-quarters of full speed — the point where the run winding can carry the load alone. Module 5's protection discussion and this course's lab both return to the relay, because a relay that fails to drop the start circuit, or fails to close it, produces classic no-start calls.</p>
<div class="callout"><strong>Key idea:</strong> CSIR = strong start, borrowed time. The start capacitor and start winding are sprinters; the switching device that retires them on schedule is as critical as the capacitor itself.</div>`
    },
    {
      heading: "PSC: The Permanent Split Capacitor Motor",
      html: `
<p>The <strong>PSC motor</strong> — Permanent Split Capacitor — takes the opposite approach to the start winding: instead of removing it, it keeps the auxiliary winding in the circuit permanently, fed through a <strong>run capacitor</strong>. The run capacitor is a lower-microfarad, continuous-duty, oil-filled capacitor built to live in the circuit for the motor's entire run, not a sprinter at all.</p>
<p>Because nothing switches, there is no centrifugal switch or relay to fail, and the motor runs quietly and efficiently with good running torque and power factor for its size — the in-service phase correction of Module 2, built into the motor. That is why PSC motors dominate residential blowers, condenser fans, and many compressors.</p>
<p>The cost is starting torque: with only the modest run capacitor, a PSC motor starts gently. Loads that must start against pressure or at low voltage may need help — a <strong>hard-start kit</strong> (a start capacitor plus a potential relay, added in parallel with the run capacitor) that temporarily upgrades the motor for starting and then drops out, which effectively converts it into the next type for a few seconds.</p>
<p>PSC diagnosis centers on the run capacitor: a weakened capacitor (Module 2) raises XC, starves the auxiliary winding, and produces the hum-and-trip call this course's lab works through. Test capacitance against the marked rating and its marked tolerance; do not pronounce a capacitor good from a beep or a spark.</p>
<div class="callout"><strong>Key idea:</strong> No switch, no relay, no dropout — if a PSC motor will not start, the short list is capacitor, windings, bearings/mechanical load, and voltage. Test them in that order of likelihood and ease.</div>`
    },
    {
      heading: "CSR: Both Capacitors, Each Doing Its Own Job",
      html: `
<p>The <strong>CSR motor</strong> — Capacitor Start, Capacitor Run — combines the previous two: a <strong>start capacitor</strong> in the circuit through a relay for high starting torque, and a <strong>run capacitor</strong> that stays in the circuit permanently for efficient running. It is the high-performance option, common where a compressor must start reliably against real load, and it is the motor you get when a hard-start kit is added to a PSC compressor — many field "CSR" systems began life as PSC.</p>
<p>Wiring tells the story. The run capacitor sits in series with the start winding full-time. The start capacitor connects in parallel with the run capacitor only while the relay contacts are closed; when the relay opens at speed, the start capacitor leaves and the run capacitor carries on alone. A wiring error here — start capacitor landed where it can never drop out — reproduces the CSIR failure mode inside a CSR motor.</p>
<p><strong>Worked identification.</strong> You open a condenser and find two capacitors (or one dual-section can), a potential relay, and a compressor. Before touching anything, classify: capacitor in circuit full-time plus a relay-switched second capacitor = CSR strategy. Your test list writes itself — both capacitances against their marked ratings, relay operation, then winding readings by the Module 3 sum rule.</p>
<div class="callout"><strong>Key idea:</strong> In CSR, ask of each capacitor: "Are you the sprinter or the marathoner?" The start capacitor must leave on schedule; the run capacitor must never leave. Most CSR faults are one of them failing at its own job — or the relay confusing the two.</div>`
    }
  ],
  keyTerms: [
    { term: "Run (main) winding", def: "The heavy-wire, low-resistance winding designed to carry current continuously and produce running torque." },
    { term: "Start (auxiliary) winding", def: "The finer-wire, higher-resistance winding that, fed an out-of-phase current, creates starting torque; removed at speed in most types except PSC/CSR run service." },
    { term: "Phase split", def: "The deliberate time difference between start- and run-winding currents that produces a rotating field component in a single-phase motor." },
    { term: "Split-phase motor", def: "A motor using the start winding's resistance alone to create the phase split; modest starting torque, start winding switched out at speed." },
    { term: "CSIR", def: "Capacitor Start, Induction Run: a start capacitor boosts starting torque, then a switch or relay removes the start circuit at speed." },
    { term: "PSC", def: "Permanent Split Capacitor: the auxiliary winding and a continuous-duty run capacitor remain in circuit permanently; no starting switch." },
    { term: "CSR", def: "Capacitor Start, Capacitor Run: a relay-switched start capacitor for starting plus a permanent run capacitor for running." },
    { term: "Start capacitor", def: "A high-microfarad, intermittent-duty capacitor used only during starting; fails if left energized continuously." },
    { term: "Run capacitor", def: "A lower-microfarad, continuous-duty capacitor that stays in the circuit while the motor runs." },
    { term: "Centrifugal switch", def: "A speed-sensitive switch on an open motor's shaft that opens the start circuit at roughly three-quarters of full speed." },
    { term: "Start relay", def: "A current- or voltage-sensing relay that connects the start capacitor at start and removes it at speed, used on hermetic compressors." },
    { term: "Potential relay", def: "A start relay whose coil senses the rising voltage of the start winding as the motor speeds up, opening its contacts to drop the start capacitor." },
    { term: "Hard-start kit", def: "A start capacitor plus potential relay added in parallel with a run capacitor to give a PSC motor temporary high starting torque." },
    { term: "Common terminal", def: "The terminal where run and start windings join; identified as the terminal left out of the highest resistance pair." },
    { term: "Winding sum rule", def: "Common-to-Start plus Common-to-Run must equal Start-to-Run; a mismatch signals misidentification or winding damage." },
    { term: "Grounded winding", def: "A winding shorted to the motor shell or compressor casing; found by continuity from any terminal to ground and condemns the motor." },
    { term: "Starting torque", def: "The turning force available at standstill; low in PSC, high in CSIR and CSR — the property that decides which motor a hard-starting load needs." },
    { term: "Hermetic compressor motor", def: "A motor sealed inside the compressor shell, identified and tested only through its external Common, Start, and Run terminals." }
  ],
  video: {
    title: "How to Find Common, Start, and Run on a PSC Compressor Motor",
    embedUrl: "https://www.youtube.com/embed/NxseKu60kYA",
    note: "This AC Service Tech training video demonstrates the exact resistance method taught in this module: measuring between compressor terminals, using the largest reading to find the Start–Run pair, and applying the sum rule to name Common, Start, and Run when no diagram is available. It also shows the terminal-to-ground short check.",
    more: [
      { title: "HVAC Blower Motor Class! PSC Motor Speeds, Colors, Ohms, Current, Shorts, Air Restrictions!", url: "https://www.youtube.com/watch?v=EN47pCeeb_M" },
      { title: "Single Phase Induction Motor (Capacitor Induction Motor or AC Motor) explained", url: "https://www.youtube.com/watch?v=FDerrQw99KU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Terminal readings on an unlabeled compressor: A–B = 3 Ω, B–C = 7 Ω, A–C = 10 Ω. Identify Common, Start, and Run, and verify with the sum rule.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The largest reading is A–C = 10 Ω, so A and C are Start and Run in some order, and the leftover terminal, B, is <strong>Common</strong>. Step 2: From Common (B), the larger reading is B–C = 7 Ω, so C is <strong>Start</strong>; the smaller, A–B = 3 Ω, makes A the <strong>Run</strong> terminal. Step 3: Verify: 3 + 7 = 10 ✓. <strong>Answer: Common = B, Start = C, Run = A.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Readings on another motor: C–R = 4 Ω, C–S = 4 Ω, S–R = 12 Ω. What is wrong, and what are the possible causes?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Apply the sum rule: C–R + C–S should equal S–R: 4 + 4 = 8, but S–R reads 12. The readings are internally inconsistent. Step 2: Possible causes: a poor meter connection or wrong scale on one reading, misidentified terminals, or internal winding damage (for example a partially shorted or resistive winding section). Step 3: Retake all three readings carefully with clean connections before condemning the motor — but if the mismatch repeats, the winding is not trustworthy and the motor/compressor is suspect.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Match each job to a motor type and defend the match: (a) a residential blower that must run quietly for hours; (b) a compressor that must start against load on a weak supply; (c) a light-duty fan with an easy start and the lowest cost.</p>",
      solution: "<p><strong>Answer:</strong> (a) <strong>PSC</strong> — continuous-duty run capacitor, no switching parts, quiet and efficient running. (b) <strong>CSR</strong> (or CSIR) — the start capacitor delivers the high starting torque this load needs, and CSR keeps a run capacitor for efficient running. (c) <strong>Split-phase</strong> — resistance split gives modest starting torque, which is all an easy-starting fan needs, with the simplest construction.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A CSIR motor's start relay contacts weld closed. Trace the failure sequence if the motor keeps being called to run.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The relay never opens, so the start capacitor and start winding stay energized after the motor reaches full speed. Step 2: The start capacitor is intermittent-duty; continuous energizing overheats it until it fails. Step 3: The fine-wire start winding, also short-duty, overheats in parallel — it can open or short. Step 4: End state: a motor that once started fine now hums and trips its overload, with a failed capacitor and possibly a ruined winding — all from one welded contact. Always test the switching device, not just the capacitor it controls.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> During winding tests, C–R, C–S, and S–R all satisfy the sum rule, but the meter shows continuity from the Run terminal to the compressor shell. Verdict?</p>",
      solution: "<p><strong>Answer:</strong> The compressor is <strong>grounded</strong> and is condemned. The sum rule only proves the windings relate to each other correctly; the terminal-to-shell test checks insulation from the windings to the casing. A winding shorted to ground is a shock and breaker-tripping hazard and is not repairable in a hermetic unit. Do not energize it again to 'see if it runs.'</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A PSC condenser fan hums but does not turn, and spins freely by hand. List your first three electrical tests in order and what each result would tell you.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Confirm full rated voltage is actually present at the motor leads during the call — rules out a supply or contactor problem. Step 2: Power off, locked out, capacitor discharged — measure the run capacitor's capacitance against its marked rating and tolerance; a weakened capacitor starving the auxiliary winding is the classic cause of this exact symptom. Step 3: Measure winding resistances and apply the sum rule, plus terminal-to-ground, to confirm the windings themselves. Free-spinning by hand already made bearings/mechanical seizure unlikely, so electrical causes lead the list.</p>"
    }
  ],
  quiz: [
    {
      q: "A single-phase motor needs a start winding and a phase-splitting device primarily because:",
      choices: ["One winding on single-phase power produces only a pulsating field with no starting torque", "Single-phase voltage is too low to start any motor", "The run winding cannot carry starting current", "Capacitors store the energy that starts the motor"],
      answer: 0,
      explanation: "Correct: (a). A lone winding's field pulsates in place; the rotor gets equal pushes both ways and no net starting torque. A second winding fed out-of-phase current creates a rotating field component. (b) Voltage level is not the issue — the same voltage runs the motor fine once started. (c) The run winding carries starting current every start. (d) A capacitor phase-shifts current; it does not supply stored starting energy like a battery."
    },
    {
      q: "Which motor keeps its auxiliary winding and run capacitor in the circuit at all times while running?",
      choices: ["CSIR", "Split-phase", "PSC", "None — all motors remove the start winding"],
      answer: 2,
      explanation: "Correct: (c). PSC stands for Permanent Split Capacitor — permanent is literal. (a) CSIR removes its start capacitor and start circuit at speed. (b) Split-phase switches the start winding out. (d) is refuted by PSC and by CSR's run side, which also stays in circuit."
    },
    {
      q: "Terminal readings are C–R = 2 Ω, C–S = 5 Ω, S–R = 7 Ω. The readings tell you:",
      choices: ["The motor is open — readings do not add up", "The windings check consistently: 2 + 5 = 7, and Start is the 5 Ω side from Common", "Start and Run are reversed — Start should read lower", "The windings are shorted to each other"],
      answer: 1,
      explanation: "Correct: (b). The sum rule holds (2 + 5 = 7), and the higher resistance from Common is the fine-wire start winding. (a) The readings add up exactly, so this is wrong. (c) Start wire is finer and higher-resistance by design; lower would be suspicious, not correct. (d) Shorted windings would distort the readings and break the sum, which did not happen."
    },
    {
      q: "The job of the centrifugal switch or start relay is to:",
      choices: ["Protect the motor from overload", "Remove the start capacitor and/or start winding once the motor approaches full speed", "Regulate running speed", "Provide the run capacitor's phase shift"],
      answer: 1,
      explanation: "Correct: (b). It retires the short-duty start components at roughly three-quarters speed, where the run winding can carry the load. (a) Overload protection is the overload device's job (Module 5), not the start switch's. (c) These motors run at a speed set by the supply and pole count; the switch does not regulate it. (d) The capacitor provides phase shift; the relay only connects and disconnects it."
    },
    {
      q: "A start capacitor is different from a run capacitor because a start capacitor is:",
      choices: ["Always physically larger", "Rated for intermittent duty only and must be removed from the circuit after starting", "Filled with oil", "Measured in volts instead of microfarads"],
      answer: 1,
      explanation: "Correct: (b). Start capacitors deliver high microfarads for seconds at a time; continuous duty destroys them. (a) Physical size is not the defining difference and varies by rating. (c) It is run capacitors that are typically oil-filled continuous-duty types. (d) Both are rated in microfarads and in volts."
    },
    {
      q: "Adding a hard-start kit to a PSC compressor effectively gives it, during starting, the behavior of which motor type?",
      choices: ["Split-phase", "Three-phase", "CSR", "Shaded-pole"],
      answer: 2,
      explanation: "Correct: (c). The kit's start capacitor and potential relay parallel the run capacitor for starting, then drop out — start capacitor plus run capacitor is precisely the CSR arrangement. (a) Split-phase uses no capacitor at all. (b) No kit can create a third phase. (d) Shaded-pole is a different, low-torque construction with no capacitor."
    },
    {
      q: "You find continuity from a compressor terminal to the shell. The correct action is:",
      choices: ["Run it briefly to confirm it trips", "Replace the capacitor and retest", "Condemn the compressor as grounded; do not re-energize it", "Reverse Start and Run leads"],
      answer: 2,
      explanation: "Correct: (c). Continuity to the shell means a winding is shorted to ground — an unrepairable, hazardous hermetic failure. (a) Energizing a grounded compressor risks shock and further damage. (b) A capacitor cannot cause or cure a winding-to-shell short. (d) Swapping leads does not remove a ground fault."
    },
    {
      q: "Compared with the run winding, the start winding is built with:",
      choices: ["Heavier wire and lower resistance", "Finer wire and higher resistance", "Identical wire — they differ only in connections", "No insulation, to save space"],
      answer: 1,
      explanation: "Correct: (b). Fine wire gives the start winding its higher resistance, which is both part of the phase split in split-phase designs and your identification clue at the terminals. (a) describes the run winding. (c) The windings differ measurably — that difference is the whole basis of terminal identification. (d) Both windings are fully insulated; an uninsulated winding would short immediately."
    }
  ],
  studyGuide: `
<h3>Module 3 — Single-Phase Motors in Depth: Quick Reference</h3>
<p><strong>Core problem:</strong> one winding on single-phase power = pulsating field, no starting torque. Cure: a second winding fed out-of-phase current (capacitor makes current lead; inductive run winding lags).</p>
<p><strong>Types:</strong> Split-phase — resistance split, start winding switched out. CSIR — start capacitor, switched out at speed, high starting torque. PSC — run capacitor and auxiliary winding stay in forever, gentle start, quiet run. CSR — start capacitor (relay-switched) + run capacitor (permanent); a PSC with a hard-start kit behaves as CSR while starting.</p>
<div class="formula">Terminal ID: largest pair = Start–Run; leftover terminal = Common; from Common, high Ω = Start, low Ω = Run; C–R + C–S must equal S–R.</div>
<p><strong>Dropout:</strong> centrifugal switch (open motors) or start/potential relay (hermetics) removes the start circuit at roughly 3/4 speed. Welded contacts keep a short-duty capacitor and winding energized until they fail.</p>
<p><strong>Ground test:</strong> any terminal-to-shell continuity condemns the motor/compressor. Never re-energize to confirm.</p>
<p><strong>Watch out:</strong> test the switching device with the capacitor — a good new capacitor on a welded relay dies the same death as the old one.</p>
`
};
