// HVAC 117 - Module 1: Advanced Circuit Analysis
module.exports = {
  number: 1,
  slug: "advanced-circuit-analysis",
  title: "Advanced Circuit Analysis",
  estTime: "3–4 hours",
  objectives: [
    "Solve series circuits for total resistance, current, and the voltage dropped across each component.",
    "Solve parallel circuits for branch currents, total current, and equivalent resistance.",
    "Reduce a series-parallel network step by step and find the current through and voltage across any branch.",
    "Explain why voltage-drop testing must be done on a live, loaded circuit, and use it to locate a high-resistance connection.",
    "Calculate the heat wasted at a bad connection using P = I²R and explain why small resistances matter at high current."
  ],
  sections: [
    {
      heading: "Series Circuits Revisited: One Path, Shared Current",
      html: `
<p>In a <strong>series circuit</strong> there is exactly one path for current, so the same current flows through every component. Resistances add directly, and the source voltage divides among the components in proportion to their resistance. Those two facts, plus Ohm's law, solve any series circuit you will meet in the field.</p>
<div class="formula">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> &nbsp;&nbsp;|&nbsp;&nbsp; I = E ÷ R<sub>total</sub> &nbsp;&nbsp;|&nbsp;&nbsp; E<sub>drop</sub> = I × R</div>
<p><strong>Worked example.</strong> A 24 V control source feeds three series resistances of 10 Ω, 20 Ω, and 30 Ω — think of two switch contacts and a relay coil simplified to resistances. Total resistance is 10 + 20 + 30 = 60 Ω. Current is 24 ÷ 60 = 0.4 A everywhere. The drops are 0.4 × 10 = 4 V, 0.4 × 20 = 8 V, and 0.4 × 30 = 12 V. Check: 4 + 8 + 12 = 24 V, exactly the source. That check — drops must sum to the source voltage — is your built-in error detector on every circuit problem.</p>
<p>Notice the pattern: the largest resistance takes the largest share of the voltage. That is why one corroded contact in a series control string can steal enough voltage to keep a relay or contactor coil from pulling in, while every other component in the string is perfectly good. The coil does not care that the other parts are fine; it only sees what is left after the drops ahead of it.</p>
<div class="callout"><strong>Key idea:</strong> In series, current is the great equalizer — the same everywhere — and voltage is the divider. If a load in a series string is starved, measure the drop across each element: the healthy load shows its normal drop, and the unwanted resistance shows up as a drop where no drop belongs.</div>
<p>An open anywhere in a series circuit stops all current, and the full source voltage then appears across the open point — a fact Module 11 turns into a complete troubleshooting method.</p>`
    },
    {
      heading: "Parallel Circuits: One Voltage, Divided Current",
      html: `
<p>In a <strong>parallel circuit</strong> every branch connects directly across the source, so every branch sees the full source voltage. Current divides among the branches: the lowest-resistance branch carries the most current. Branch currents add to the total current, and the equivalent resistance is always <em>smaller</em> than the smallest branch — adding paths can only make it easier for current to flow.</p>
<div class="formula">1 ÷ R<sub>eq</sub> = 1 ÷ R<sub>1</sub> + 1 ÷ R<sub>2</sub> + 1 ÷ R<sub>3</sub> &nbsp;&nbsp;|&nbsp;&nbsp; Two equal resistors in parallel: R<sub>eq</sub> = R ÷ 2</div>
<p><strong>Worked example.</strong> Three branches of 20 Ω, 30 Ω, and 60 Ω sit across 120 V. Branch currents are 120 ÷ 20 = 6 A, 120 ÷ 30 = 4 A, and 120 ÷ 60 = 2 A, for a total of 12 A. Equivalent resistance is 120 ÷ 12 = 10 Ω — indeed less than the smallest branch, 20 Ω. Check with the reciprocal formula: 1/20 + 1/30 + 1/60 = 3/60 + 2/60 + 1/60 = 6/60 = 1/10, so R<sub>eq</sub> = 10 Ω. Both routes agree.</p>
<p>Field meaning: parallel loads are independent. One branch can open — a burned-out crankcase heater, say — and the others never notice, which is why you cannot judge parallel branches by total current alone. It also explains why adding loads to a circuit raises total current and can trip protection even though each individual load is normal.</p>
<div class="callout"><strong>Key idea:</strong> In parallel, voltage is the equalizer and current divides. A shorted branch is the dangerous case: its resistance collapses toward zero, total current soars, and the protective device — not the other branches — ends the event.</div>`
    },
    {
      heading: "Series-Parallel Networks: Reduce, Then Expand",
      html: `
<p>Real equipment is neither purely series nor purely parallel. A contactor coil in series with a parallel pair of safety switches, or two parallel loads fed through a common fuse and switch, are <strong>series-parallel networks</strong>. The solving method never changes: <strong>reduce</strong> the network to one equivalent resistance, find the total current, then <strong>expand</strong> back out, working the voltages and currents level by level.</p>
<p><strong>Worked example.</strong> A 120 V source feeds a 10 Ω series resistance (a switch and wiring, simplified) in series with a parallel pair of 20 Ω and 20 Ω loads. Step 1, reduce the parallel pair: two equal 20 Ω resistors give 10 Ω. Step 2, add the series part: 10 + 10 = 20 Ω total. Step 3, total current: 120 ÷ 20 = 6 A — this 6 A flows through the series element. Step 4, expand: the series element drops 6 × 10 = 60 V, leaving 120 − 60 = 60 V across the parallel pair. Step 5, branch currents: 60 ÷ 20 = 3 A each, and 3 + 3 = 6 A, matching the total. Every number cross-checks.</p>
<p>Read that example as a warning. The parallel loads were designed for 120 V but receive only 60 V because the series element takes the other half. In real equipment the "series element" is supposed to be a near-zero-resistance switch or wire. When it corrodes, it becomes a real resistance, and the loads downstream are starved in exact proportion — the math above is the math of a chattering contactor.</p>
<div class="callout"><strong>Key idea:</strong> Never guess at a combination circuit. Reduce, solve the total, then expand one level at a time, checking that branch currents sum to the total and section voltages sum to the source. The checks catch your arithmetic before it becomes a misdiagnosis.</div>`
    },
    {
      heading: "Troubleshooting by Voltage Drop",
      html: `
<p><strong>Voltage-drop testing</strong> is the fastest way to find unwanted resistance in a live circuit. The principle comes straight from Ohm's law: any resistance carrying current drops voltage, E = I × R. A good switch, contact, or wire has almost no resistance, so under load it should drop almost no voltage. A corroded contact has real resistance, so it drops measurable voltage — and steals exactly that much from the load.</p>
<p>Technique matters. The circuit must be <strong>energized and carrying its normal current</strong>, because with no current there is no drop (I × R = 0 × R = 0) and the fault hides. Place one meter lead on each side of the component being tested — across a closed switch, across a contactor pole, along a length of wire — and read the drop directly. Then measure across the load: load voltage plus all the drops around the loop must equal the source voltage.</p>
<p><strong>Worked example.</strong> A unit is fed 240 V. Under load, the load itself measures 231 V. Measuring across one closed contactor pole shows 9 V. Nine volts across a closed contact is a failed contact: it should read essentially zero. The missing voltage is accounted for — 231 + 9 = 240 — and the pitted pole is also a heater, dissipating power exactly where you least want it.</p>
<div class="callout"><strong>Key idea:</strong> A voltage reading across a <em>closed</em> switch or contact means that component is dropping voltage it should not drop. The bigger the reading under load, the worse the connection. Measuring voltage <em>to ground</em> instead can mislead you through alternate paths; measuring <em>across</em> the component never lies about that component.</div>`
    },
    {
      heading: "Why Small Resistances Burn: P = I²R at Connections",
      html: `
<p>A bad connection is not just a voltage thief; it is a small electric heater installed in the worst possible place. The power wasted at a resistance is:</p>
<div class="formula">P = I² × R</div>
<p>Because current is squared, high-current circuits suffer most. <strong>Worked example.</strong> A loose lug develops just 0.1 Ω of resistance in a circuit carrying 30 A. The drop is 30 × 0.1 = 3 V — easy to overlook. But the heat is 30² × 0.1 = 900 × 0.1 = 90 W dissipated at that one lug, roughly a soldering iron's worth of heat concentrated on a terminal. That heat oxidizes the metal, which raises the resistance, which makes more heat — a self-feeding failure that ends in a burned wire or a failed terminal.</p>
<p>The same math at control-circuit currents is gentler but still diagnostic: 0.5 Ω at 2 A drops 1 V and wastes 2 W. The drop is the symptom you can measure; the heat is the damage you are preventing by finding it early.</p>
<ul>
<li><strong>High drop, cool circuit:</strong> suspect your test setup first — the circuit must actually be loaded.</li>
<li><strong>Drop concentrated at one device:</strong> that device is the fault — contacts, a switch, a splice.</li>
<li><strong>Drop spread along a wire run:</strong> suspect an undersized or damaged conductor, or current far above design.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Voltage-drop testing converts an invisible problem — resistance — into a number you can read on a live circuit without disconnecting anything. Master it here; Modules 5, 11, and 12 use it on contactors, starters, and intermittent faults.</div>`
    }
  ],
  keyTerms: [
    { term: "Series circuit", def: "A circuit with only one path for current; the same current flows through every component." },
    { term: "Parallel circuit", def: "A circuit in which each branch connects directly across the source and receives full source voltage." },
    { term: "Series-parallel network", def: "A circuit combining series and parallel sections, solved by reducing it to one equivalent resistance and then expanding back out." },
    { term: "Equivalent resistance", def: "The single resistance that draws the same total current from the source as the whole network it replaces." },
    { term: "Voltage drop", def: "The voltage consumed across a resistance carrying current, E = I × R; the drops around a loop sum to the source voltage." },
    { term: "Voltage-drop testing", def: "Measuring the voltage across a component while the circuit is live and loaded to expose unwanted resistance." },
    { term: "Branch current", def: "The current through one parallel path; branch currents sum to the total current." },
    { term: "Kirchhoff's voltage rule (applied)", def: "The practical rule that all voltage drops around a closed loop add up to the source voltage." },
    { term: "High-resistance connection", def: "A corroded, loose, or pitted joint that drops voltage under load and converts electrical power to heat." },
    { term: "Loaded circuit", def: "A circuit energized and carrying its normal operating current — the required condition for voltage-drop testing." },
    { term: "Closed-contact drop", def: "The voltage measured across a closed switch or contactor pole; near zero when healthy, significant when the contact is failing." },
    { term: "P = I²R heating", def: "The power wasted as heat at a resistance; it grows with the square of current, which is why bad joints fail fastest on high-current circuits." },
    { term: "Voltage divider", def: "A series string in which voltage divides among the resistances in proportion to their values." },
    { term: "Open circuit", def: "A break that stops all current in a series path; full source voltage appears across the break." },
    { term: "Short circuit", def: "An unintended near-zero-resistance path that lets current rise until a protective device opens the circuit." },
    { term: "Total current", def: "In parallel, the sum of all branch currents; the current the source and its protection must supply." },
    { term: "Starved load", def: "A load receiving less than its rated voltage because unwanted resistance elsewhere in series is dropping part of the supply." },
    { term: "Reduce and expand", def: "The combination-circuit method: collapse parallel groups to equivalents, solve the total, then work back out level by level." }
  ],
  video: {
    title: "How to Calculate Three-Phase Voltage Imbalance Description",
    embedUrl: "https://www.youtube.com/embed/-8UXB92-G-I",
    note: "Watch how the presenter uses a meter as a voltage-drop device across the L and T sides of a contactor under load — the same across-the-component technique taught in this module, shown here on three-phase equipment. The imbalance calculation itself returns in Module 4; focus now on where the probes go and why the circuit must be running.",
    more: [
      { title: "High Voltage Hopscotch -  Goodman Electric Heat Circuit | HVAC Electrical Troubleshooting", url: "https://www.youtube.com/watch?v=FuhmB22z8g8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A series circuit has resistances of 5 Ω, 15 Ω, and 20 Ω on a 120 V source. Find total resistance, circuit current, and the voltage drop across each resistor. Verify your drops.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R<sub>total</sub> = 5 + 15 + 20 = 40 Ω. Step 2: I = 120 ÷ 40 = 3 A through every resistor. Step 3: Drops: 3 × 5 = 15 V; 3 × 15 = 45 V; 3 × 20 = 60 V. Step 4: Verify: 15 + 45 + 60 = 120 V, matching the source. <strong>Answers: 40 Ω, 3 A, 15 V / 45 V / 60 V.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Two parallel branches of 12 Ω and 24 Ω are connected across 120 V. Find each branch current, the total current, and the equivalent resistance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Branch currents: 120 ÷ 12 = 10 A and 120 ÷ 24 = 5 A. Step 2: Total current = 10 + 5 = 15 A. Step 3: R<sub>eq</sub> = 120 ÷ 15 = 8 Ω. Step 4: Check by reciprocals: 1/12 + 1/24 = 2/24 + 1/24 = 3/24 = 1/8, so R<sub>eq</sub> = 8 Ω, and 8 Ω is less than the smallest branch (12 Ω), as it must be. <strong>Answers: 10 A, 5 A, 15 A, 8 Ω.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 240 V source feeds a 20 Ω series resistor in series with a parallel pair of 40 Ω and 40 Ω. Find total resistance, total current, the voltage across the parallel section, and each branch current.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Reduce the parallel pair: two equal 40 Ω resistors = 20 Ω. Step 2: Total R = 20 + 20 = 40 Ω. Step 3: Total current = 240 ÷ 40 = 6 A. Step 4: The series resistor drops 6 × 20 = 120 V, leaving 240 − 120 = 120 V across the parallel section. Step 5: Branch currents: 120 ÷ 40 = 3 A each; 3 + 3 = 6 A, matching the total. <strong>Answers: 40 Ω, 6 A, 120 V, 3 A per branch.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Under load, a motor supplied at 240 V measures only 228 V at its terminals. Voltage-drop tests show 7 V across the disconnect switch and the rest lost across the contactor. How much drops across the contactor, and what do the readings mean?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total lost voltage = 240 − 228 = 12 V. Step 2: Contactor drop = 12 − 7 = 5 V. Step 3: Interpret: both readings should be near zero across closed devices. A 7 V drop condemns the disconnect contacts and a 5 V drop condemns the contactor pole — <strong>two failing components in series, each stealing voltage</strong>. Repair or replace both; fixing only one still leaves the motor under voltage.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A poor splice has 0.2 Ω resistance in a circuit carrying 20 A. Find the voltage drop at the splice and the heat it produces. Repeat both for 5 A and explain the difference.</p>",
      solution: "<p><strong>Solution:</strong> At 20 A: drop = 20 × 0.2 = 4 V; heat = 20² × 0.2 = 400 × 0.2 = 80 W. At 5 A: drop = 5 × 0.2 = 1 V; heat = 25 × 0.2 = 5 W. <strong>Explanation:</strong> the drop grows in proportion to current, but heat grows with the square of current — quadrupling current multiplied heat sixteen times (5 W to 80 W). That is why the same sloppy splice that survives in a control circuit cooks in a power circuit.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A technician measures 0 V across a closed contactor pole with the unit off and declares the contactor good. The compressor still fails to start when called. Give two reasons the test proved nothing.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Voltage drop requires current — E = I × R. With the unit off, I = 0, so the drop is 0 V across <em>any</em> resistance, good or bad. The test would read 0 V across a badly pitted pole. Step 2: Voltage-drop testing must be performed energized, under normal load, with the call active so current is actually flowing through the contacts. Only then does a reading across the closed pole (or its absence) mean anything.</p>"
    }
  ],
  quiz: [
    {
      q: "In a series circuit of 10 Ω, 10 Ω, and 20 Ω on 100 V, the circuit current is:",
      choices: ["1 A", "2.5 A", "5 A", "10 A"],
      answer: 1,
      explanation: "Correct: (b). Total resistance is 10 + 10 + 20 = 40 Ω, so I = 100 ÷ 40 = 2.5 A, the same through every resistor. (a) 1 A would require 100 Ω of total resistance. (c) 5 A results from using only part of the resistance. (d) 10 A treats a single 10 Ω resistor as the whole circuit."
    },
    {
      q: "Two 30 Ω resistors in parallel have an equivalent resistance of:",
      choices: ["60 Ω", "30 Ω", "15 Ω", "0 Ω"],
      answer: 2,
      explanation: "Correct: (c). Equal resistors in parallel divide by the number of paths: 30 ÷ 2 = 15 Ω. (a) 60 Ω is the series sum. (b) 30 Ω ignores that a second path was added. (d) 0 Ω would be a short circuit, not two healthy resistors."
    },
    {
      q: "A closed contactor pole measures 6 V across it while the unit runs. The correct conclusion is:",
      choices: ["Normal — contacts always drop some voltage", "The pole has unwanted resistance and is failing", "The meter is on the wrong scale", "The load is shorted"],
      answer: 1,
      explanation: "Correct: (b). A healthy closed contact drops essentially 0 V under load; 6 V across it means pitted or burned contact material is acting as a resistor and stealing 6 V from the load. (a) is wrong — measurable drop across a closed contact is a defect, not a norm. (c) is wrong — the reading is consistent and meaningful. (d) is wrong — a shorted load would drive current and protection response, not a neat 6 V across the pole."
    },
    {
      q: "Voltage-drop testing gives a valid result only when the circuit is:",
      choices: ["De-energized with the component removed", "Energized and carrying current", "Tested with an ohmmeter", "Tested to ground from one side"],
      answer: 1,
      explanation: "Correct: (b). Drop equals I × R, so without current there is no drop to measure, no matter how bad the connection is. (a) A removed component can be ohm-checked, but that is a different test. (c) Ohmmeters are never used on live circuits and cannot show load-dependent drops. (d) Voltage to ground can appear through alternate paths and does not isolate the component."
    },
    {
      q: "In a parallel circuit across 60 V with branches of 10 Ω, 15 Ω, and 30 Ω, total current is:",
      choices: ["7 A", "12 A", "2 A", "55 A"],
      answer: 1,
      explanation: "Correct: (b). Each branch sees the full 60 V: 60 ÷ 10 = 6 A, 60 ÷ 15 = 4 A, and 60 ÷ 30 = 2 A, totaling 6 + 4 + 2 = 12 A. (a) 7 A matches no branch combination. (c) 2 A is only the smallest branch's current. (d) 55 A comes from adding the resistances (10 + 15 + 30), which is a series rule misapplied to a parallel circuit."
    },
    {
      q: "A connection has 0.25 Ω resistance and carries 16 A. The heat produced at the connection is:",
      choices: ["4 W", "64 W", "16 W", "1 W"],
      answer: 1,
      explanation: "Correct: (b). P = I²R = 16² × 0.25 = 256 × 0.25 = 64 W. (a) 4 W is the voltage drop (16 × 0.25), not the power. (c) 16 W uses current without squaring it correctly. (d) 1 W matches no correct calculation."
    },
    {
      q: "While reducing a series-parallel network, your first move should be to:",
      choices: ["Add every resistor in the circuit together", "Collapse each parallel group into its equivalent resistance", "Measure the source voltage", "Assume the largest resistor carries all the current"],
      answer: 1,
      explanation: "Correct: (b). Reduce parallel groups first, then combine series elements, solve the total, and expand back out. (a) Adding everything treats parallel branches as series and overstates resistance. (c) Source voltage is needed later, not for reduction. (d) In parallel the largest resistor carries the least current, so the assumption is backwards."
    },
    {
      q: "An open occurs in one branch of a three-branch parallel circuit. The other two branches:",
      choices: ["Stop working because the circuit is broken", "Keep working at full source voltage", "Receive double voltage", "Draw the opened branch's current as well"],
      answer: 1,
      explanation: "Correct: (b). Parallel branches are independent: each still connects across the source at full voltage and draws its own normal current. (a) describes a series circuit, where one open stops everything. (c) Voltage cannot double; the source sets it. (d) The surviving branches draw only their own current — total current actually falls by the opened branch's share."
    }
  ],
  studyGuide: `
<h3>Module 1 — Advanced Circuit Analysis: Quick Reference</h3>
<p><strong>Series:</strong> resistances add; current is the same everywhere; drops divide in proportion to resistance and must sum to the source voltage.</p>
<div class="formula">R<sub>T</sub> = R<sub>1</sub> + R<sub>2</sub> + … &nbsp;|&nbsp; I = E ÷ R<sub>T</sub> &nbsp;|&nbsp; E<sub>drop</sub> = I × R</div>
<p><strong>Parallel:</strong> every branch gets full source voltage; branch currents add; equivalent resistance is always less than the smallest branch. Two equal resistors: R ÷ 2.</p>
<p><strong>Series-parallel:</strong> reduce parallel groups first → solve total current → expand level by level. Check: branch currents sum to total; section voltages sum to source.</p>
<p><strong>Voltage-drop testing:</strong> circuit live and loaded; measure ACROSS the component. Closed switch/contactor pole ≈ 0 V is healthy; any real reading under load is unwanted resistance stealing voltage from the load.</p>
<div class="formula">Heat at a bad joint: P = I² × R — current is squared, so high-current joints fail fastest.</div>
<p><strong>Watch out:</strong> an unloaded circuit shows no drop across even a terrible connection — I = 0 means E<sub>drop</sub> = 0. Always test under a real call for operation.</p>
`
};
