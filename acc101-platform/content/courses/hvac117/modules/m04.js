// HVAC 117 - Module 4: Three-Phase Power & Motors
module.exports = {
  number: 4,
  slug: "three-phase-power-motors",
  title: "Three-Phase Power & Motors",
  estTime: "3–4 hours",
  objectives: [
    "Explain why three-phase motors are inherently self-starting and where three-phase power is used in HVAC work.",
    "Distinguish wye and delta connections and state the √3 relationships between line and phase values in each.",
    "Verify the standard pairs 208Y/120 V and 480Y/277 V using the √3 relationship.",
    "Compute total three-phase power from line voltage, line current, and power factor.",
    "Reverse a three-phase motor's rotation correctly and explain phase loss (single-phasing) and its consequences."
  ],
  sections: [
    {
      heading: "Why Three Phases: A Field That Actually Rotates",
      html: `
<p>Three-phase power delivers three AC voltages, each offset from the next by 120 electrical degrees. Feed those three voltages into three windings spaced around a motor stator and the result is a magnetic field that rotates smoothly and continuously — no start winding, no capacitor, no relay. A three-phase induction motor is <strong>inherently self-starting</strong>, with strong, even torque from standstill.</p>
<p>That simplicity is why commercial HVAC belongs to three-phase: rooftop units, chillers, large compressors, pumps, and cooling-tower fans. Three-phase also moves power efficiently — for the same power, it uses conductor material well and delivers power more evenly than single-phase.</p>
<p>The technician's mental shift is this: stop thinking of "hot and neutral" and start thinking of three line conductors — L1, L2, L3 — any two of which can feed a load, and all three of which feed a motor. Voltages are specified <strong>line-to-line</strong> (between two lines) and, where a neutral exists, <strong>line-to-neutral</strong> (line to the common point). Confusing those two values is the classic beginner's error in this module; the next two sections exist to prevent it.</p>
<div class="callout"><strong>Key idea:</strong> Everything in three-phase work comes back to one number, √3 ≈ 1.732, and one question: "Am I measuring line-to-line or line-to-neutral (or line current versus phase current)?" Answer that question first and the formulas pick themselves.</div>`
    },
    {
      heading: "The Wye Connection: Where 208 Comes From",
      html: `
<p>In a <strong>wye (Y) connection</strong>, one end of each of the three windings joins at a common point, which may be brought out as a <strong>neutral</strong>. The other ends become L1, L2, L3. The geometry of three phasors 120 degrees apart gives the key relationships:</p>
<div class="formula">Wye: E<sub>line</sub> = √3 × E<sub>phase</sub> &nbsp;|&nbsp; I<sub>line</sub> = I<sub>phase</sub></div>
<p><strong>Worked example — the most common service you will meet:</strong> a 208Y/120 V system. Each phase winding sits at 120 V line-to-neutral. Line-to-line: 120 × 1.732 = 207.8 ≈ 208 V. That is why a commercial building offers 208 V for three-phase and larger single-phase loads and 120 V from any line to neutral for ordinary loads — one system, both voltages.</p>
<p><strong>Second standard pair:</strong> 480Y/277 V. Check: 277 × 1.732 = 479.8 ≈ 480 V line-to-line, with 277 V line-to-neutral used for lighting and single-phase loads in larger buildings. If your meter shows about 277 V from a line to neutral, you are on a 480 V wye service — knowing the pair protects you from the expensive mistake of connecting a 240 V or 120 V device where it does not belong.</p>
<p>In a wye, line current and phase (winding) current are the same, because each line conductor is in series with one winding. Keep the pair straight: in wye, <em>voltage</em> gets the √3; current does not.</p>
<div class="callout"><strong>Key idea:</strong> See 120 to neutral, think 208 between lines. See 277 to neutral, think 480 between lines. Multiply the phase voltage by 1.732 and you will never be surprised by a three-phase panel again.</div>`
    },
    {
      heading: "The Delta Connection: The √3 Moves to Current",
      html: `
<p>In a <strong>delta (Δ) connection</strong>, the three windings connect end-to-end in a closed triangle, and the lines attach at the three corners. There is no common neutral point in a basic three-wire delta. The relationships mirror the wye's:</p>
<div class="formula">Delta: E<sub>line</sub> = E<sub>phase</sub> &nbsp;|&nbsp; I<sub>line</sub> = √3 × I<sub>phase</sub></div>
<p>Each winding sits directly between two lines, so the winding sees full line-to-line voltage. But each line conductor feeds <em>two</em> windings at its corner, so line current is the phasor sum — √3 times the current in one winding. <strong>Worked example:</strong> a delta-connected motor whose windings each carry 10 A draws a line current of 10 × 1.732 = 17.3 A. Measure 17.3 A at the starter and the windings are each carrying 10 A — a distinction that matters when you compare clamp-meter readings against winding expectations.</p>
<p>Motors are often dual-rated or reconnectable: the same motor may be wired in one configuration for a lower voltage and another for a higher voltage, following its nameplate diagram exactly. Never re-terminate a multi-lead motor from memory — the diagram on the motor is the authority, and a wrong reconnection applies wrong voltage to every winding.</p>
<p>One field caution belongs here: some delta services are <strong>corner-grounded</strong> or have a <strong>high leg</strong> (in a four-wire, center-tapped delta). Voltage-to-ground readings that look bizarre — one line much higher to ground than the others — are the signature. Identify the service type before connecting any line-to-neutral load.</p>
<div class="callout"><strong>Key idea:</strong> Wye: √3 belongs to voltage. Delta: √3 belongs to current. Write it on the inside of your toolbox lid; half of all three-phase confusion is just those two facts swapped.</div>`
    },
    {
      heading: "Three-Phase Power, Rotation, and Starters",
      html: `
<p>Total power in a balanced three-phase circuit combines all three phases with the √3 factor:</p>
<div class="formula">P = √3 × E<sub>line</sub> × I<sub>line</sub> × PF</div>
<p><strong>Worked example.</strong> A rooftop unit motor draws a balanced 20 A per line at 480 V with power factor 0.85. P = 1.732 × 480 × 20 × 0.85. Step by step: 1.732 × 480 = 831.4; × 20 = 16,627 VA of apparent power; × 0.85 = 14,133 W ≈ 14.1 kW of real power. As in single-phase, the wiring and starter carry the full current regardless of power factor — apparent power sizes the hardware, real power describes the work.</p>
<p><strong>Rotation.</strong> A three-phase motor's rotation is set by the phase sequence of the supply. To reverse it, swap <strong>any two</strong> of the three line leads — L1 and L2, for example. Swapping all three (a rotation of connections) changes nothing, and swapping one lead with nothing is an open circuit, not a reversal. Always verify rotation on first start: a scroll compressor or pump running backward can be damaged or deliver nothing while sounding almost normal, so check rotation before walking away.</p>
<p><strong>Starters.</strong> A three-phase motor is switched by a three-pole contactor — a <strong>starter</strong> — that closes all three lines together and carries a set of overloads watching the motor current (Module 5 takes starters apart in detail). A single pole failing to close is not a "partial start": it is phase loss, the subject of the next section.</p>
<div class="callout"><strong>Key idea:</strong> Swap any two leads to reverse; verify rotation at start-up; and treat every three-phase starter as three single switches that must all agree — the motor depends on all three.</div>`
    },
    {
      heading: "Phase Loss: The Motor Killer",
      html: `
<p><strong>Phase loss</strong>, or single-phasing, is the loss of one of the three lines — a blown fuse, a burned starter pole, a broken conductor, a utility-side failure. The motor does not politely stop. If it was running, it often keeps running on the remaining two lines, drawing sharply increased current through the surviving windings while delivering reduced, uneven torque. From outside, the unit may sound nearly normal while the motor cooks.</p>
<p>The physics is unforgiving: the lost phase's share of the work does not disappear, so the remaining windings carry it — at currents the windings were not built to sustain continuously. Heat builds in exactly the pattern Module 1 described, I²R, and insulation life collapses. If the motor is at standstill when a phase is lost, it may simply hum and refuse to start, since the remaining field cannot produce proper rotating torque — the three-phase cousin of the single-phase starting problem.</p>
<p>Diagnosis is a meter exercise: measure all three line-to-line voltages at the starter, under load where possible — 208/208/208 (or 480 three ways) is health; a missing or sagging pair names the lost phase. Then find <em>why</em>: check the three fuses or breaker, voltage-drop each starter pole under load (Module 1's method catches the burned pole), and inspect terminations. Replacing the motor without fixing the phase loss just feeds the next motor to the same fault.</p>
<p>Protection exists precisely for this: properly applied overloads on the motor circuit and, on larger systems, phase-monitoring relays that refuse to run the machine single-phased. Module 5 covers how those protections are chosen and set.</p>
<div class="callout"><strong>Key idea:</strong> A three-phase motor that "still runs" can be dying. Unbalanced voltages or currents on a three-phase machine are never a watch-and-wait item — find the lost or weak phase before the windings find it for you.</div>`
    }
  ],
  keyTerms: [
    { term: "Three-phase power", def: "Three AC voltages offset by 120 degrees, delivering a smoothly rotating field in motors and efficient power transmission." },
    { term: "Phase (winding) value", def: "The voltage across, or current through, a single winding of a wye or delta system." },
    { term: "Line value", def: "The voltage between two line conductors, or the current in a line conductor — what your meter reads at the starter." },
    { term: "Wye (Y) connection", def: "Windings joined at a common (neutral) point; E-line = √3 × E-phase and I-line = I-phase. Source of 208Y/120 and 480Y/277 systems." },
    { term: "Delta (Δ) connection", def: "Windings connected end-to-end in a triangle; E-line = E-phase and I-line = √3 × I-phase." },
    { term: "√3 relationship", def: "The factor 1.732 linking line and phase values in balanced three-phase systems — applied to voltage in wye, to current in delta." },
    { term: "208Y/120 V system", def: "A wye service giving 208 V line-to-line and 120 V line-to-neutral (120 × 1.732 ≈ 208)." },
    { term: "480Y/277 V system", def: "A wye service giving 480 V line-to-line and 277 V line-to-neutral (277 × 1.732 ≈ 480)." },
    { term: "Balanced load", def: "A three-phase load drawing equal currents at equal power factor on all three phases; the condition the √3 formulas assume." },
    { term: "Three-phase power formula", def: "P = √3 × E-line × I-line × PF for a balanced three-phase load." },
    { term: "Phase sequence / rotation", def: "The order in which the three phase voltages peak; it sets motor rotation direction." },
    { term: "Reversing a three-phase motor", def: "Swapping any two of the three line leads to reverse rotation; verified at first start-up." },
    { term: "Motor starter (three-phase)", def: "A three-pole contactor, usually with overload protection, that switches all three lines to a motor together." },
    { term: "Phase loss (single-phasing)", def: "Loss of one line to a three-phase motor; remaining windings overcurrent and overheat while the motor may keep running." },
    { term: "High leg (wild leg)", def: "In a four-wire center-tapped delta, the line with much higher voltage to ground/neutral; must be identified before making line-to-neutral connections." },
    { term: "Voltage imbalance", def: "Unequal line-to-line voltages on a three-phase system; even small imbalances cause larger current imbalances and motor heating." },
    { term: "Phase monitor", def: "A protective relay that watches for phase loss, reversal, or imbalance and prevents or stops motor operation." },
    { term: "Corner-grounded delta", def: "A delta service with one line conductor intentionally grounded, producing unfamiliar voltage-to-ground readings." }
  ],
  video: {
    title: "Alternating Current, Motors, & Controls",
    embedUrl: "https://www.youtube.com/embed/RG3eljmqyq4",
    note: "This professional-development session covers AC generation and distribution, includes a dedicated wye-versus-delta segment, and finishes with motor types and three-phase motor advantages and controls. Use the wye/delta and three-phase motor sections to anchor this module; the generation material is useful background.",
    more: [
      { title: "Three Phase Electricity Basics and Calculations electrical engineering", url: "https://www.youtube.com/watch?v=qthuFLNSrlg" },
      { title: "How to Calculate Three-Phase Voltage Imbalance Description", url: "https://www.youtube.com/watch?v=-8UXB92-G-I" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A wye system has 120 V line-to-neutral. Compute line-to-line voltage, showing the relationship used.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: In wye, E<sub>line</sub> = √3 × E<sub>phase</sub>. Step 2: 120 × 1.732 = 207.8 V. <strong>Answer: approximately 208 V</strong> — the standard 208Y/120 system.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A delta-connected motor's windings each carry 12 A. What line current should you measure at the starter?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: In delta, I<sub>line</sub> = √3 × I<sub>phase</sub>. Step 2: 12 × 1.732 = 20.8 A. <strong>Answer: approximately 20.8 A per line</strong> (balanced). If a line reads far from this, suspect imbalance or phase trouble, not a 'different formula.'</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A balanced three-phase load draws 15 A per line at 208 V with PF 0.90. Compute real power.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: P = √3 × E<sub>line</sub> × I<sub>line</sub> × PF. Step 2: 1.732 × 208 = 360.3; × 15 = 5,404 VA apparent; × 0.90 = 4,863 W. <strong>Answer: approximately 4.9 kW.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A newly installed three-phase pump runs backward. The installer proposes re-landing all three leads one position over (L1→L2, L2→L3, L3→L1). Will that work? State the correct fix.</p>",
      solution: "<p><strong>Answer:</strong> No. Rotating all three leads preserves the phase sequence, so rotation stays the same. The correct fix: <strong>swap any two leads</strong> — for example, exchange L1 and L2 at the starter load terminals — then re-verify rotation at start-up before leaving the machine in service.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> At a running rooftop unit you measure line-to-line voltages of 208 V, 209 V, and 121 V. Interpret the readings and state your next steps.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Two healthy readings near 208 and one collapsed reading mean the system has effectively lost a phase — the machine is single-phasing (the odd reading is a phantom/backfeed value through the windings, not a real third phase). Step 2: Shut the unit down before the motor overheats. Step 3: Find the cause: test the three fuses/breaker, voltage-drop each starter pole under load, and inspect terminations. Do not reset and hope — a running single-phased motor is being damaged in real time.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why a three-phase motor needs no start capacitor or centrifugal switch, in terms of its magnetic field.</p>",
      solution: "<p><strong>Answer:</strong> The three windings are fed by three voltages 120 degrees apart, so their combined magnetic field rotates continuously on its own — a true rotating field at standstill, producing starting torque directly. A single-phase motor's lone winding produces only a pulsating field, so it needs a phase-split second winding (Modules 2–3) to fake rotation. The three-phase motor gets the real thing for free, which is why it is simpler, self-starting, and preferred for larger loads.</p>"
    }
  ],
  quiz: [
    {
      q: "In a wye connection, the relationship between line and phase voltage is:",
      choices: ["E-line = E-phase", "E-line = √3 × E-phase", "E-line = E-phase ÷ √3", "E-line = 3 × E-phase"],
      answer: 1,
      explanation: "Correct: (b). In wye, line-to-line voltage is 1.732 times the line-to-neutral (phase) voltage — that is where 208 V comes from on a 120 V wye. (a) describes delta voltage. (c) inverts the relationship. (d) Three phases do not triple the voltage; the phasor geometry gives √3, not 3."
    },
    {
      q: "You measure 277 V from a line to neutral. The line-to-line voltage is approximately:",
      choices: ["277 V", "480 V", "240 V", "554 V"],
      answer: 1,
      explanation: "Correct: (b). 277 × 1.732 ≈ 480 V — a 480Y/277 service. (a) 277 V is the phase voltage itself. (c) 240 V belongs to a different class of system entirely. (d) 554 V doubles 277, which no three-phase relationship does."
    },
    {
      q: "In a delta connection, if each winding carries 10 A, line current is about:",
      choices: ["10 A", "30 A", "17.3 A", "5.8 A"],
      answer: 2,
      explanation: "Correct: (c). I-line = √3 × I-phase = 10 × 1.732 = 17.3 A, because each line feeds two windings at its corner. (a) 10 A is the wye current relationship. (b) 30 A incorrectly adds all three windings. (d) 5.8 A divides by √3, the inverse of the correct operation."
    },
    {
      q: "To reverse a three-phase motor, you should:",
      choices: ["Swap all three leads", "Swap any two of the three leads", "Reverse the overload heaters", "Move the neutral to another line"],
      answer: 1,
      explanation: "Correct: (b). Exchanging any two lines reverses the phase sequence and therefore rotation. (a) Rotating all three preserves the sequence — rotation is unchanged. (c) Heaters are protective elements with no effect on sequence. (d) A three-phase motor circuit may not even have a neutral; moving one is not a reversal method and can create a hazard."
    },
    {
      q: "Phase loss (single-phasing) to a running three-phase motor usually causes:",
      choices: ["Immediate, clean shutdown in all cases", "Increased current in the remaining windings and rapid overheating", "The motor to speed up", "No problem — the third phase is a spare"],
      answer: 1,
      explanation: "Correct: (b). The surviving windings inherit the lost phase's work and overcurrent; the motor may keep turning while it cooks. (a) Motors often keep running single-phased — that is the danger. (c) Speed falls and torque becomes uneven, not higher. (d) The third phase is a working member, not a spare."
    },
    {
      q: "A balanced three-phase motor draws 10 A per line at 480 V, PF 0.85. Real power is about:",
      choices: ["4,080 W", "8,314 VA is its real power", "7,067 W", "14,400 W"],
      answer: 2,
      explanation: "Correct: (c). P = 1.732 × 480 × 10 × 0.85: 1.732 × 480 = 831.4; × 10 = 8,314 VA apparent; × 0.85 = 7,067 W. (a) 4,080 W is a single-phase-style calculation on one line (480 × 10 × 0.85) that forgets √3 and the other phases. (b) 8,314 is the apparent power in VA, not real power. (d) 14,400 W would come from 3 × 480 × 10 with no power factor — the naive 'times three' error."
    },
    {
      q: "In a wye system, line current compared with phase (winding) current is:",
      choices: ["√3 times larger", "Equal to it", "√3 times smaller", "Always 120 A"],
      answer: 1,
      explanation: "Correct: (b). In wye each line conductor is in series with one winding, so the same current flows in both. (a) is the delta current relationship. (c) inverts a relationship that does not exist in wye. (d) 120 is a voltage in the standard wye pair, not a current rule."
    },
    {
      q: "A three-phase compressor starts and runs but delivers no capacity while sounding almost normal. A leading electrical suspicion is:",
      choices: ["Low capacitor microfarads", "Wrong phase sequence — the motor is running backward", "A failed centrifugal switch", "A weak start winding"],
      answer: 1,
      explanation: "Correct: (b). Three-phase machines have no capacitors, start windings, or centrifugal switches — choices (a), (c), and (d) are single-phase parts that do not exist here. Reversed sequence runs a scroll or pump backward: it turns and sounds plausible but moves nothing, which is why rotation must be verified at start-up."
    }
  ],
  studyGuide: `
<h3>Module 4 — Three-Phase Power &amp; Motors: Quick Reference</h3>
<div class="formula">Wye: E<sub>line</sub> = √3 × E<sub>phase</sub>, I<sub>line</sub> = I<sub>phase</sub>. &nbsp; Delta: E<sub>line</sub> = E<sub>phase</sub>, I<sub>line</sub> = √3 × I<sub>phase</sub>. &nbsp; √3 ≈ 1.732.</div>
<p><strong>Standard wye pairs:</strong> 208Y/120 V and 480Y/277 V — multiply the smaller number by 1.732 to get the larger.</p>
<div class="formula">Balanced three-phase power: P = √3 × E<sub>line</sub> × I<sub>line</sub> × PF (e.g., 480 V, 20 A, PF 0.85 → ≈ 14.1 kW).</div>
<p><strong>Rotation:</strong> set by phase sequence; swap ANY TWO leads to reverse; rotating all three changes nothing. Verify rotation on every first start.</p>
<p><strong>Phase loss:</strong> one line gone → remaining windings overcurrent and overheat while the motor may keep running. Measure all three line-to-line voltages under load; find the fuse, pole, or conductor at fault before replacing any motor.</p>
<p><strong>Watch out:</strong> unusual voltage-to-ground patterns can indicate a high-leg or corner-grounded delta service — identify the service before connecting line-to-neutral loads, and never re-terminate a multi-lead motor without its nameplate diagram.</p>
`
};
