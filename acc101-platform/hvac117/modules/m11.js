// HVAC 117 - Module 11: Systematic Electrical Troubleshooting Method
module.exports = {
  number: 11,
  slug: "systematic-electrical-troubleshooting",
  title: "Systematic Electrical Troubleshooting Method",
  estTime: "3–4 hours",
  objectives: [
    "State the full systematic workflow: interview, observe, verify the complaint, then test from the source outward.",
    "Apply the half-split method to a chain of components and compute how many tests it needs versus sequential testing.",
    "Perform hopscotch voltage testing along a series control chain and interpret every possible reading pattern.",
    "Verify wiring against the diagram conductor by conductor before condemning components.",
    "Use the 'voltage across the load' first test to divide every electrical complaint into 'load failed' versus 'path failed' in one measurement."
  ],
  sections: [
    {
      heading: "Method Before Meters: The Workflow",
      html: `
<p>Every module so far taught you the behavior of components. This module teaches the order in which a professional interrogates them — because the difference between a diagnostician and a parts-changer is rarely knowledge; it is sequence. The workflow:</p>
<ol>
<li><strong>Interview and history.</strong> What exactly happens, when did it start, what changed recently (storms, other trades, thermostat swap, renovation)? Half of Module 12's cases are solved standing at the thermostat with the customer's story.</li>
<li><strong>Observe and verify the complaint.</strong> Put the system in the complained-of mode yourself and watch what actually happens — what runs, what doesn't, what sounds wrong. Never troubleshoot a complaint you have not reproduced.</li>
<li><strong>Establish the source.</strong> Line voltage present and correct? Control voltage present and correct (24 V at the transformer, loaded)? A shocking share of 'component failures' are source failures wearing costumes.</li>
<li><strong>Divide and descend.</strong> Using the load test of Section 2 and the half-split of Section 3, narrow the fault to one segment, then one component — testing along the actual circuit path from the diagram, not around the unit at random.</li>
<li><strong>Repair the cause, prove the repair.</strong> Run the system through the full complained-of operation, and ask why the part failed (Modules 5 and 10's killers: voltage, heat, surges, restriction).</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Random testing finds faults by luck and misses causes by design. The workflow is a funnel: every step is chosen because its answer cuts the remaining possibilities roughly in half, whatever the answer turns out to be.</div>`
    },
    {
      heading: "The First Test: Voltage Across the Load",
      html: `
<p>Once the source is proven, one measurement divides the world. With the system calling for the dead function, measure voltage <strong>directly across the load that should be working</strong> — across the contactor coil, across the gas valve, across the motor's power leads:</p>
<ul>
<li><strong>Full control/line voltage across the load, and the load does nothing:</strong> the load itself has failed. Power is arriving; the device cannot use it. (Confirm an open coil/winding with power off if the device should show continuity — but the verdict is already written.)</li>
<li><strong>No (or low) voltage across the load:</strong> the load is probably fine and the <em>path</em> has failed — one of the switches, contacts, safeties, or conductors between source and load is open or dropping the voltage. Now you troubleshoot the path, and the load leaves the suspect list.</li>
</ul>
<p>This test is Module 1's voltage logic weaponized. It works identically at 24 V across a coil and at line voltage across a motor, and it is the trunk from which both hopscotch (walk the path) and half-splitting (bisect the path) branch. Notice what it does for your parts budget: half of all 'bad components' returned to suppliers were condemned without this ten-second measurement ever being made.</p>
<div class="callout"><strong>Key idea:</strong> Voltage across a silent load = guilty load. No voltage across it = innocent load, guilty path. One reading, and you are never again troubleshooting both halves of the circuit at once.</div>`
    },
    {
      heading: "Half-Splitting: Binary Search with a Meter",
      html: `
<p>When the path is the problem, the path is a chain: source → thermostat contact → safety 1 → safety 2 → board → load, say. Testing components from one end works, but it wastes every test on a single suspect. <strong>Half-splitting</strong> tests the <em>middle</em> of the chain first: one measurement tells you which half contains the fault. Then split that half again. Each test halves the search space.</p>
<p><strong>Worked comparison.</strong> A chain of 8 possible fault points. Testing sequentially from one end takes up to 8 tests (average about 4–5). Half-splitting: test at point 4 (fault is in 1–4 or 5–8), then at the middle of the guilty half (point 2 or 6), then once more — the fault is cornered in about 3 tests, guaranteed. On real equipment, 'points' are accessible terminals: the board's input and output terminals are natural half-split stations, which is why experienced technicians live at the board with the diagram open.</p>
<p>Half-splitting applies to everything divisible: a thermostat cable run (test at the equipment, then at mid-run junctions), a string of safeties (test between the middle pair), a set of parallel branches (disconnect half of them — Module 7's fuse-isolation sequence was half-splitting in work clothes), even a building's worth of daisy-chained devices.</p>
<p>The discipline that makes it work: choose each test point <em>before</em> measuring, such that either answer teaches you something definite. A test whose outcomes you cannot interpret in advance is not a split — it is a wander.</p>
<div class="callout"><strong>Key idea:</strong> Never test the next component; test the middle of what remains. Three well-chosen tests beat eight hopeful ones, and the customer is paying for the difference.</div>`
    },
    {
      heading: "Hopscotch: Walking the Path One Contact at a Time",
      html: `
<p><strong>Hopscotch</strong> is the deliberate, sequential version of path testing — the right tool once the fault is cornered in a short series chain and you want to name the exact open element. The setup: system calling, circuit live, loads downstream dead. Fix one meter lead on the return side (common) as your reference, then move the other lead step by step along the chain from the source toward the load, reading voltage to common at each node:</p>
<ul>
<li>At the source side of the chain: full control voltage (24 V) — power is present.</li>
<li>After each <strong>closed</strong> contact: still ~24 V — the contact passed power along.</li>
<li>The first node where voltage <strong>disappears</strong> marks your fault: the element between the last live node and this dead node is open — a tripped safety, a failed switch, a broken conductor, a loose terminal.</li>
</ul>
<p>The mirror-image technique measures <strong>across</strong> each element instead (Module 6's rung rule): healthy closed contacts and conductors read ~0 V across them; the open element reads the <em>full</em> control voltage across itself — the whole supply piles up across the single break in a series circuit that carries no current. Both techniques read the same truth from two angles; use whichever the terminal access favors.</p>
<p>Safety and sense while hopscotching live circuits: the circuit is energized, so treat every terminal with line-voltage respect where applicable, keep probes deliberate, and re-verify the call is still active if readings suddenly make no sense — a thermostat satisfied mid-test will counterfeit a miracle cure.</p>
<div class="callout"><strong>Key idea:</strong> Hopscotch turns a series chain into a row of witnesses. Power present, present, present, gone — the fault lives between the last 'present' and the first 'gone', and there is only one component living there.</div>`
    },
    {
      heading: "Wiring Verification and Proving the Repair",
      html: `
<p>A large, embarrassing category of electrical faults is not failed components at all: it is <strong>wiring that does not match the diagram</strong> — from a factory error, a previous repair, rodent damage, or a terminal that migrated during someone else's service. Component tests cannot find these faults, because every component is innocent. Only conductor-by-conductor verification can: with power off, trace each wire of the suspect circuit from terminal to terminal against the equipment's diagram, confirming landing, continuity, and the absence of shorts to other conductors or ground.</p>
<p>Build the habit of verifying wiring <em>before</em> the second replacement part, not after the third. Any time a correct new component behaves exactly like the 'failed' old one, the circuit — not the component — is the fault, and the diagram is the only witness that cannot lie to you. Photograph connections before disturbing them (Module 7's rule), and treat any wire found on a terminal the diagram doesn't support as the confession it usually is.</p>
<p>Finally: <strong>prove the repair under the original complaint conditions.</strong> Run the full cycle that failed — not a five-second spin. Re-measure the numbers that convicted the fault (voltage under load, current versus nameplate) and confirm they are now healthy. Then write down what failed and <em>why you believe it failed</em>; intermittent faults (Module 12) are beaten across visits by documentation, not memory.</p>
<div class="callout"><strong>Key idea:</strong> When a good new part acts like the bad old part, stop buying parts and start reading the diagram wire by wire. And a repair is not a repair until the original complaint has been re-run and re-measured dead.</div>`
    }
  ],
  keyTerms: [
    { term: "Verify the complaint", def: "Reproducing the reported malfunction yourself, under the reported conditions, before testing anything." },
    { term: "Load-voltage test", def: "Measuring across a non-working load during a call: full voltage convicts the load; absent voltage acquits it and indicts the path." },
    { term: "Path (control path)", def: "The chain of switches, contacts, safeties, and conductors between the source and a load." },
    { term: "Half-splitting", def: "Testing at the midpoint of the remaining suspect chain so each measurement eliminates half the candidates." },
    { term: "Hopscotch", def: "Sequential live voltage testing node by node along a series chain; the fault lies between the last live node and the first dead one." },
    { term: "Across-the-element test", def: "Measuring voltage across one component: ~0 V for a healthy closed element; full supply voltage across an open element in a dead series circuit." },
    { term: "Reference lead", def: "The meter lead fixed on the return/common side during hopscotch, against which each node is judged." },
    { term: "Test point selection", def: "Choosing a measurement location in advance such that either possible result eliminates a definite set of suspects." },
    { term: "Wiring verification", def: "Power-off, terminal-to-terminal confirmation that every conductor matches the equipment diagram, with continuity and short checks." },
    { term: "Fault tree", def: "The structured set of possible causes for a symptom, pruned by each test result." },
    { term: "Prove the repair", def: "Re-running the original failed operation in full and re-measuring the values that convicted the fault, after the repair." },
    { term: "Root cause", def: "The underlying reason a component failed (heat, voltage, surge, load), as distinct from the failed component itself." },
    { term: "Sequential testing", def: "Testing chain elements one by one from an end; reliable but slow compared with half-splitting." },
    { term: "Natural test station", def: "An accessible terminal set — classically the control board's inputs and outputs — that divides a circuit neatly for half-splitting." },
    { term: "Counterfeit fault", def: "Readings that mimic a fault but are artifacts of test conditions — e.g., a thermostat satisfying mid-test and making a path look healed." },
    { term: "Intermittent fault", def: "A fault that appears and disappears with conditions (heat, vibration, load); fought with documentation, pattern logging, and stress-testing connections." },
    { term: "Parts-changing", def: "Replacing components on suspicion without measurements — the failure mode the systematic method exists to replace." },
    { term: "Source-first rule", def: "Proving line and control voltage (loaded) before any component diagnosis, because source failures masquerade as component failures." }
  ],
  video: {
    title: "High Voltage Hopscotch -  Goodman Electric Heat Circuit | HVAC Electrical Troubleshooting",
    embedUrl: "https://www.youtube.com/embed/FuhmB22z8g8",
    note: "The hopscotch method performed on a real high-voltage electric-heat circuit: a fixed reference and a moving probe walking the chain until voltage disappears at the open element. The circuit is line-voltage, so note the care taken — the identical logic works at 24 V on control chains.",
    more: [
      { title: "How to Read HVAC Schematics (Beginner to Pro – Furnace & AC Explained)", url: "https://www.youtube.com/watch?v=HbMqTEDxPGA" },
      { title: "Wiring Diagram Tracing - Older RHEEM Condenser", url: "https://www.youtube.com/watch?v=lymlJxgzeCk" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A control chain has 16 possible fault points between source and load. In the worst case, how many tests does half-splitting need to corner the fault, and how many might sequential testing need?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Half-splitting halves the field each test: 16 → 8 → 4 → 2 → 1: <strong>4 tests</strong> corner the fault, guaranteed. Step 2: Sequential testing from one end may strike lucky on test 1 but its worst case is <strong>16 tests</strong> — and its average is around 8. The gap is why professionals split first and hopscotch only inside the cornered segment.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A gas valve never opens on a heat call. You measure 24 V directly across the valve's terminals during the call. The wiring and board are new suspects in the customer's theory. Give the verdict and the one confirming test.</p>",
      solution: "<p><strong>Answer:</strong> Verdict: the <strong>gas valve (its coil/solenoid) has failed</strong> — the load-voltage test is decisive: full call voltage is delivered across the load and the load does not respond, so the path (board, wiring) has done its whole job. Confirming test: power off, measure the valve coil's resistance/continuity — an open coil seals the diagnosis before replacement.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Hopscotching a 24 V safety chain (reference on C), you read: at the transformer 24 V; after the thermostat contact 24 V; after the float switch 24 V; after the high-limit switch 0 V; at the coil 0 V. Name the fault and the two candidate explanations you must still separate.</p>",
      solution: "<p><strong>Answer:</strong> The break is the <strong>high-limit switch</strong> (between the last live node and the first dead node). Two explanations remain: (1) the limit has genuinely tripped on its condition (overheating) — a report, requiring the cause found before reset/replacement; or (2) the switch has failed open at normal temperature. Separate them by checking the temperature the switch senses and the switch's behavior against its specification — never just jumper it and leave.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Across-the-element readings on a dead series rung: STOP 0 V, thermostat 0 V, pressure switch 24 V, overload contact 0 V, coil 0 V. Which element is open, and why do the healthy closed elements read zero?</p>",
      solution: "<p><strong>Answer:</strong> The <strong>pressure switch is open</strong>: in a currentless series circuit, the entire supply voltage appears across the single break. The healthy closed elements read ~0 V across themselves because a closed contact is (nearly) the same point electrically on both sides — no resistance carrying no current drops no voltage (E = I × R with I = 0 and R ≈ 0 both give zero).</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A replacement control board behaves identically to the one it replaced on a no-cool call: no output to the contactor. Following this module, what do you do next — and what do you stop doing?</p>",
      solution: "<p><strong>Answer:</strong> Stop replacing parts. Identical behavior from a known-good board says the <em>circuit</em> is the fault: go back to method — verify the board is actually receiving its inputs (thermostat call present at the board's input terminals), verify its power supply under load, and verify wiring conductor-by-conductor against the diagram (a call that never arrives cannot be answered). The original board was most likely innocent; the missing input is the diagnosis to chase.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Write the five-step workflow from this module as a one-line-each checklist suitable for a truck visor, in order.</p>",
      solution: "<p><strong>Sample answer:</strong> 1) Interview — story, timing, recent changes. 2) Verify — reproduce the complaint myself, watch what runs. 3) Source — line voltage and 24 V, loaded, correct. 4) Divide — load-voltage test, half-split the guilty half, hopscotch the cornered chain, verify wiring against the diagram. 5) Repair the cause, then prove it — full re-run of the failed operation, numbers re-measured, findings written down.</p>"
    }
  ],
  quiz: [
    {
      q: "You measure full control voltage across a contactor coil during a cooling call, but the contactor never pulls in. The diagnosis is:",
      choices: ["A path failure upstream", "The coil has failed — the path delivered full voltage and the load cannot use it", "The transformer is overloaded", "A safety switch is open"],
      answer: 1,
      explanation: "Correct: (b). The load-voltage test is decisive: with full voltage across a silent load, the load itself is at fault (confirm the open coil with power off). (a) A path failure would show little or no voltage across the coil. (c) An overloaded transformer sags voltage under load — it would not show full voltage at the coil. (d) An open safety removes voltage from the coil entirely."
    },
    {
      q: "Half-splitting beats sequential testing on a long chain primarily because:",
      choices: ["It uses a more expensive meter", "Each test eliminates about half the remaining suspects regardless of its outcome", "It skips the need for a wiring diagram", "It tests components instead of circuits"],
      answer: 1,
      explanation: "Correct: (b). A midpoint test is informative either way — pass or fail, half the chain is cleared. That is the arithmetic that corners 16 suspects in 4 tests. (a) The same meter does both methods. (c) Test points are chosen from the diagram; the method depends on it. (d) Both methods test the circuit; half-splitting just chooses smarter points."
    },
    {
      q: "While hopscotching to common along a live chain, readings are 24 V, 24 V, 0 V, 0 V at successive nodes. The fault is:",
      choices: ["The source transformer", "The element between the second node (last live) and the third node (first dead)", "The load at the end of the chain", "Every element after the second node"],
      answer: 1,
      explanation: "Correct: (b). Voltage survives up to the last live node and vanishes across one element — that element is open. (a) The source proved itself by feeding two live nodes. (c) The load is downstream of the break and simply receives nothing. (d) The downstream elements read dead because they are beyond the break, not because they are all faulty."
    },
    {
      q: "In a dead series rung, the across-the-element test shows full supply voltage across exactly one switch and ~0 V across all others. That switch is:",
      choices: ["Closed and healthy", "The open element breaking the rung", "Shorted", "The load"],
      answer: 1,
      explanation: "Correct: (b). With no current flowing, the full supply piles up across the single open point; closed healthy elements are electrically one point and drop nothing. (a) inverts the meaning of the test. (c) A shorted element would drop ~0 V and pass power along. (d) The load, if it were the open one, would show the voltage — but the described element is a switch, and the rule names it as the break."
    },
    {
      q: "The correct first electrical checks on almost any no-run complaint, before component tests, are:",
      choices: ["Capacitor microfarads and winding resistances", "Line voltage and control voltage present and correct, under load", "Refrigerant pressures", "Thermostat batteries"],
      answer: 1,
      explanation: "Correct: (b). Source-first: a missing or sagging source counterfeits every component failure downstream. (a) Component tests are meaningless if the component is simply unpowered. (c) Pressures matter for capacity complaints, but a no-run electrical complaint starts with power. (d) Batteries are one small branch of one input, checked after the source itself."
    },
    {
      q: "A brand-new component behaves exactly like the 'failed' one it replaced. The method says:",
      choices: ["The new part is also defective — try a third", "Suspect the circuit and wiring: verify inputs to the assembly and wiring against the diagram conductor by conductor", "The complaint was imaginary", "Increase the fuse size"],
      answer: 1,
      explanation: "Correct: (b). Two parts failing identically is a circuit signature: missing input, wrong wiring, or an unproven source. (a) Doubling down on swaps is parts-changing with extra invoices. (c) You verified the complaint at the start — it is real. (d) Fuse size is never a diagnostic instrument."
    },
    {
      q: "'Proving the repair' means:",
      choices: ["Showing the customer the old part", "Re-running the full originally-failed operation and re-measuring the values that convicted the fault", "Cycling the disconnect once", "Filing the warranty paperwork"],
      answer: 1,
      explanation: "Correct: (b). Only the original conditions can certify the original complaint is dead — and the re-measured numbers (voltage under load, current vs nameplate) prove health, not just motion. (a) Theater, not proof. (c) A momentary spin misses cycle-length and load-dependent faults. (d) Paperwork matters, but it is not verification."
    },
    {
      q: "Why must you choose a hopscotch/half-split test point before measuring?",
      choices: ["To impress the customer", "So that either possible result eliminates a definite set of suspects — a test that cannot change your mind teaches nothing", "Because meters need warm-up time", "To comply with the warranty"],
      answer: 1,
      explanation: "Correct: (b). A diagnostic test is a question with two useful answers. Deciding the interpretation in advance is what turns readings into eliminations. (a) Showmanship is not method. (c) Meters do not need this ritual. (d) No warranty demands test-point planning — good outcomes do."
    }
  ],
  studyGuide: `
<h3>Module 11 — Systematic Electrical Troubleshooting Method: Quick Reference</h3>
<p><strong>Workflow:</strong> interview → verify the complaint → prove the source (line V and 24 V, loaded) → divide and descend → repair the cause and prove the repair.</p>
<p><strong>Load-voltage test (the great divider):</strong> full voltage across a silent load = failed load. No/low voltage = failed path; the load is innocent.</p>
<p><strong>Half-split:</strong> test the midpoint of the remaining chain; each answer clears half. 8 suspects ≈ 3 tests; 16 ≈ 4. Board input/output terminals are natural split stations.</p>
<p><strong>Hopscotch:</strong> reference lead on common, probe walks source → load on the live circuit. Fault = between the last live node and the first dead node. Mirror method: across each element — open element shows full supply; closed healthy elements show ~0 V.</p>
<p><strong>Wiring verification:</strong> when a good new part mimics the old one, go power-off and trace conductor-by-conductor against the diagram. Photograph before disturbing.</p>
<p><strong>Watch out:</strong> confirm the call is still active mid-test — a thermostat satisfying during diagnosis counterfeits both faults and cures.</p>
`
};
