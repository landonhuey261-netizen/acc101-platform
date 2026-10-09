// HVAC 111 - Module 3: Series & Parallel Circuits
module.exports = {
  number: 3,
  slug: "series-parallel-circuits",
  title: "Series & Parallel Circuits",
  estTime: "3–4 hours",
  objectives: [
    "State and apply the rules for current, voltage, and resistance in series circuits.",
    "State and apply the rules for current, voltage, and resistance in parallel circuits.",
    "Compute total resistance for series and parallel combinations, including the two-resistor shortcut.",
    "Use the voltage-divider relationship to find the voltage across any series element.",
    "Recognize how HVAC/R circuits use each topology: safeties in series, loads in parallel.",
    "Diagnose open and short faults by their signatures in each topology."
  ],
  sections: [
    {
      heading: "Series Circuits: One Path, Same Current",
      html: `
<p>A <strong>series circuit</strong> offers current exactly one path: every component is connected end-to-end, so the same current must flow through all of them — there is nowhere else for it to go. Three rules follow:</p>
<ul>
<li><strong>Current is the same everywhere:</strong> I<sub>total</sub> = I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub>.</li>
<li><strong>Resistances add:</strong> R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>.</li>
<li><strong>Voltages add:</strong> the voltage drops across the components sum to the supply voltage — E<sub>supply</sub> = E<sub>1</sub> + E<sub>2</sub> + E<sub>3</sub>.</li>
</ul>
<p><strong>Worked Example 1.</strong> A 24 V control circuit runs through a thermostat contact, a pressure switch, and a relay coil of 40 Ω; the two switches are closed and contribute negligible resistance. Total resistance ≈ 40 Ω, so I = 24 ÷ 40 = <strong>0.6 A</strong> — the same 0.6 A passes through the thermostat, the switch, and the coil. The coil drops essentially all 24 V. Now let the pressure switch open: the single path is broken, current falls to <strong>zero everywhere</strong>, and (as Section 4 shows) the full supply voltage appears across the open switch — a diagnostic gift.</p>
<p><strong>Worked Example 2.</strong> Two heating elements, 12 Ω and 24 Ω, are wired in series across 240 V. R<sub>total</sub> = 36 Ω; I = 240 ÷ 36 ≈ <strong>6.67 A</strong>. Voltage across the 12 Ω element: E = I × R = 6.67 × 12 = <strong>80 V</strong>. Across the 24 Ω element: 6.67 × 24 = <strong>160 V</strong>. Check: 80 + 160 = 240 ✓. Notice the bigger resistor takes the bigger share of voltage — in exact proportion to its resistance. That proportion is the voltage divider, next section.</p>
<div class="callout"><strong>Key idea:</strong> In series, the current is democratic (same for all) but voltage is proportional (each element takes a share sized by its resistance). One open anywhere stops everything — which is precisely why safety switches are wired in series with the load they protect.</div>`
    },
    {
      heading: "The Voltage Divider",
      html: `
<p>Because series current is shared, the voltage across any one series resistor is its fraction of total resistance times the supply:</p>
<div class="formula">E<sub>x</sub> = E<sub>supply</sub> × (R<sub>x</sub> ÷ R<sub>total</sub>)</div>
<p><strong>Worked Example 3.</strong> A 10 Ω and a 30 Ω resistor sit in series across 24 V. R<sub>total</sub> = 40 Ω. The 10 Ω unit takes 24 × (10 ÷ 40) = <strong>6 V</strong>; the 30 Ω unit takes 24 × (30 ÷ 40) = <strong>18 V</strong>. Check via current: I = 24 ÷ 40 = 0.6 A; 0.6 × 10 = 6 V ✓; 0.6 × 30 = 18 V ✓. Two methods, one answer — use whichever the problem hands you numbers for.</p>
<p>Why does a service technician care? Because <strong>voltage-drop troubleshooting is applied voltage dividing.</strong> When you measure where the voltage went, you find the fault: full supply across an open switch means the switch is the break; unexpected voltage dropped across a corroded connection means that connection has become an unwanted series resistor, stealing voltage from the load and heating itself. A contactor coil that receives only 17 V of its 24 V supply will chatter or fail to pull in — the missing 7 V is being dropped somewhere in series with it, and your meter, moved point to point, will find exactly where.</p>
<p>One caution: your meter itself becomes part of the circuit when you measure. A high-impedance digital meter draws negligible current, so its readings on control circuits are honest. But remember Module 1's ghost voltage: an open series path can show misleading small voltages through capacitive coupling. Confirm suspicious readings with a low-impedance setting.</p>
<div class="callout"><strong>Key idea:</strong> In a healthy series control string, closed switches drop ~0 V and the load drops the full supply. Any switch or connection dropping significant voltage while closed is a resistor you did not order — replace or repair it.</div>`
    },
    {
      heading: "Parallel Circuits: Many Paths, Same Voltage",
      html: `
<p>A <strong>parallel circuit</strong> connects each load directly across the supply, giving current multiple independent paths. The rules mirror series:</p>
<ul>
<li><strong>Voltage is the same across every branch:</strong> E<sub>branch</sub> = E<sub>supply</sub>.</li>
<li><strong>Branch currents add:</strong> I<sub>total</sub> = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub>.</li>
<li><strong>Total resistance is less than the smallest branch</strong> and is found by the reciprocal rule: 1 ÷ R<sub>total</sub> = 1 ÷ R<sub>1</sub> + 1 ÷ R<sub>2</sub> + 1 ÷ R<sub>3</sub>.</li>
</ul>
<p><strong>Worked Example 4.</strong> A 24 V transformer feeds two parallel loads: a 48 Ω coil and a 24 Ω coil. Branch currents: I<sub>1</sub> = 24 ÷ 48 = 0.5 A; I<sub>2</sub> = 24 ÷ 24 = 1.0 A. Total current = <strong>1.5 A</strong>. Total resistance: 1 ÷ R<sub>T</sub> = 1/48 + 1/24 = 1/48 + 2/48 = 3/48, so R<sub>T</sub> = 48 ÷ 3 = <strong>16 Ω</strong>. Check: I = E ÷ R<sub>T</sub> = 24 ÷ 16 = 1.5 A ✓. For exactly two resistors, the shortcut R<sub>T</sub> = (R<sub>1</sub> × R<sub>2</sub>) ÷ (R<sub>1</sub> + R<sub>2</sub>) = (48 × 24) ÷ 72 = 16 Ω ✓.</p>
<p>For equal branches the math collapses nicely: n identical resistors in parallel give R<sub>T</sub> = R ÷ n. Three 90 Ω loads in parallel: 30 Ω. This is why adding parallel loads always <em>lowers</em> total resistance and <em>raises</em> total current — every new branch is one more open door. It is also why an overloaded transformer or tripped control fuse often means "too many parallel loads" or "one branch shorted," not a supply problem.</p>
<div class="callout"><strong>Key idea:</strong> Parallel = same voltage, additive currents, total resistance below the smallest branch. Your house, and every multi-load HVAC control circuit, is wired this way so each load gets full voltage and independent operation.</div>`
    },
    {
      heading: "Fault Signatures: Opens and Shorts in Each Topology",
      html: `
<p>Faults announce themselves differently depending on topology, and reading the signature is half of electrical troubleshooting.</p>
<p><strong>Series open</strong> (broken wire, open switch, burned-out element): current zero everywhere; the load is dead; <strong>full supply voltage appears across the open point</strong> and ~0 V across the healthy closed elements (no current, so no drop: E = I × R = 0). Hunt by measuring across each element until you find the one holding the whole supply — that is your open. <strong>Series short</strong> is rarer in control strings — a switch welded closed removes protection but the load still works, which is why welded safeties are insidious: everything "works" until the day the safety was needed.</p>
<p><strong>Parallel open</strong> (one branch broken): only that branch dies. Total current drops by exactly that branch's share, total resistance rises, and the surviving branches keep full voltage and normal operation. A three-branch circuit drawing 1.5 A that now draws 1.0 A has lost a 0.5 A branch — arithmetic as diagnosis. <strong>Parallel short</strong> (one branch's resistance collapses toward zero): total current skyrockets, the fuse or breaker opens, and <em>every</em> branch dies — the fault in one branch takes down the whole circuit through the protective device.</p>
<p><strong>Worked Example 5.</strong> The parallel pair from Example 4 (0.5 A + 1.0 A = 1.5 A total) now blows its control fuse instantly at every replacement. You isolate branches and find the 24 Ω coil now measures 2 Ω. At 24 V that branch alone would draw 24 ÷ 2 = 12 A — the shorted coil is the fuse-blower; the healthy 48 Ω branch (0.5 A) was never the problem. Replace the coil, confirm 16 Ω total (power off, branches reconnected), then power up.</p>
<div class="callout"><strong>Common mistake:</strong> Replacing a blown fuse repeatedly "to see if it holds." A fuse that blows instantly is a measurement, not an inconvenience: it is reporting a short. Find the low-resistance branch with the power off instead of feeding the fault fresh fuses.</div>`
    },
    {
      heading: "How Real HVAC/R Circuits Combine Both",
      html: `
<p>Open any unit's schematic and you will find the same architecture: <strong>loads in parallel, switches and safeties in series with each load.</strong> A condensing unit's compressor contactor coil and the outdoor-fan relay coil are parallel branches off the 24 V control supply — each gets full voltage and can be controlled independently. In series with the contactor coil sits a string of series safeties: thermostat contacts, high-pressure switch, low-pressure switch. Any one opening kills that branch only, leaving the fan branch alive — which is why "outdoor fan runs, compressor doesn't" points you straight at the compressor's series string or its coil branch.</p>
<p>Line-voltage wiring follows the same logic at 240 V: the compressor and condenser fan are parallel loads across L1–L2 (each seeing the full 240 V), while the contactor's contacts sit in series with the compressor to switch it. Defrost heaters, crankcase heaters, and auxiliary strip heat each occupy their own parallel branch with their own series controls and limits.</p>
<p><strong>Worked Example 6 — mixed reasoning.</strong> A 24 V supply feeds two parallel branches. Branch A: a coil of 32 Ω behind closed switches. Branch B: two safeties and a 16 Ω coil in series. Branch currents: A = 24 ÷ 32 = 0.75 A; B = 24 ÷ 16 = 1.5 A. Total draw on the transformer = <strong>2.25 A</strong>. If a safety in Branch B opens, total draw falls to 0.75 A — Branch A never notices. If instead Branch B's coil shorts to 4 Ω, its current jumps to 6 A and the combined 6.75 A demand exceeds a typical small control fuse — everything stops, but the fault lives only in Branch B. Series-parallel reduction — collapse each series string, then combine the parallels — solves any such network, and HVAC 117 builds full troubleshooting method on exactly this skill.</p>
<div class="callout"><strong>Key idea:</strong> Read every schematic as: parallel branches (independent loads) × series strings (control and protection for each load). That single mental model decodes most of the diagrams in Module 8.</div>`
    }
  ],
  keyTerms: [
    { term: "Series circuit", def: "A circuit with a single current path; current is identical through every component." },
    { term: "Parallel circuit", def: "A circuit with multiple branches across the supply; voltage is identical on every branch." },
    { term: "Total resistance (series)", def: "R_T = R_1 + R_2 + ... — series resistances simply add." },
    { term: "Total resistance (parallel)", def: "1/R_T = 1/R_1 + 1/R_2 + ... — the result is always less than the smallest branch resistance." },
    { term: "Product-over-sum", def: "Two-resistor parallel shortcut: R_T = (R_1 × R_2) ÷ (R_1 + R_2)." },
    { term: "Voltage divider", def: "A series network in which each resistor drops a share of supply voltage proportional to its resistance: E_x = E × (R_x ÷ R_T)." },
    { term: "Voltage drop", def: "Voltage consumed across a component carrying current; series drops sum to the supply voltage." },
    { term: "Branch current", def: "The current in one parallel path; branch currents sum to total current." },
    { term: "Open circuit", def: "A broken path; in series it stops all current and takes the full supply voltage across the break." },
    { term: "Short circuit", def: "A path of near-zero resistance; causes very high current and operates the protective device." },
    { term: "Safety string", def: "Series-connected protective switches (pressure, temperature limits) wired so any one opening disables the protected load." },
    { term: "Kirchhoff's voltage law (informal)", def: "The rises and drops around a closed loop balance: series voltage drops sum to the source voltage." },
    { term: "Kirchhoff's current law (informal)", def: "Currents entering a junction equal currents leaving: parallel branch currents sum to the total." },
    { term: "Welded contact", def: "A switch contact fused closed by arcing; defeats the safety it was meant to provide while appearing to 'work.'" },
    { term: "Series-parallel network", def: "A circuit combining both topologies, solved by reducing series strings and parallel groups step by step." },
    { term: "Protective device", def: "A fuse or circuit breaker that opens the circuit when current exceeds its rating." },
    { term: "Ghost voltage", def: "Induced reading on an open conductor from nearby live wiring; distinguish with a low-impedance meter function." },
    { term: "Control circuit", def: "The low-voltage (typically 24 V) circuit of switches and coils that commands line-voltage loads." }
  ],
  video: {
    title: "Visualizing HVAC Excellence (VHE) Ep. 14: Parallel Circuits -- Different Paths… Same Destination",
    embedUrl: "https://www.youtube.com/embed/2kCTT18fvkQ",
    note: "An HVAC Excellence-focused episode that builds parallel circuits with an interactive circuit tool so you can watch voltage, current, and resistance behave as branches are added — the exact rules worked numerically in this module. Note the discussion of where HVAC/R students typically struggle with parallel behavior.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Three resistors — 10 Ω, 20 Ω, and 30 Ω — are in series across 120 V. Find total resistance, circuit current, and the voltage across each resistor.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R_T = 10 + 20 + 30 = <strong>60 Ω</strong>. Step 2: I = 120 ÷ 60 = <strong>2 A</strong> (same everywhere). Step 3: Drops: 2 × 10 = <strong>20 V</strong>; 2 × 20 = <strong>40 V</strong>; 2 × 30 = <strong>60 V</strong>. Step 4: Check: 20 + 40 + 60 = 120 V ✓ — and the largest resistor took the largest share, as the divider rule predicts.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 60 Ω and a 30 Ω load are in parallel on 24 V. Find each branch current, total current, and total resistance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Branch currents: 24 ÷ 60 = 0.4 A; 24 ÷ 30 = 0.8 A. Step 2: Total current = 0.4 + 0.8 = <strong>1.2 A</strong>. Step 3: R_T = (60 × 30) ÷ (60 + 30) = 1,800 ÷ 90 = <strong>20 Ω</strong>. Step 4: Check: 24 ÷ 20 = 1.2 A ✓, and 20 Ω is less than the smallest branch (30 Ω) ✓.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Four identical 80 Ω relay coils are connected in parallel across 24 V. Find total resistance and the current the transformer must supply.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Equal branches: R_T = R ÷ n = 80 ÷ 4 = <strong>20 Ω</strong>. Step 2: Total current = 24 ÷ 20 = <strong>1.2 A</strong>. Step 3: Cross-check by branches: each coil draws 24 ÷ 80 = 0.3 A; 4 × 0.3 = 1.2 A ✓.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A series string has a 15 Ω resistor and an unknown resistor across 24 V. The 15 Ω resistor drops 9 V. Find the current, the unknown resistance, and the voltage across it.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Current comes from the known drop: I = E ÷ R = 9 ÷ 15 = <strong>0.6 A</strong> (same everywhere in series). Step 2: The unknown drops the rest: 24 − 9 = <strong>15 V</strong>. Step 3: R = E ÷ I = 15 ÷ 0.6 = <strong>25 Ω</strong>. Step 4: Check: R_T = 40 Ω; I = 24 ÷ 40 = 0.6 A ✓.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A parallel circuit on 120 V has branches of 40 Ω, 60 Ω, and 120 Ω. Compute total resistance and total current.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Conductances: 1/40 + 1/60 + 1/120 = 3/120 + 2/120 + 1/120 = 6/120 = 1/20, so R_T = <strong>20 Ω</strong>. Step 2: Total current = 120 ÷ 20 = <strong>6 A</strong>. Step 3: Cross-check by branches: 3 A + 2 A + 1 A = 6 A ✓.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A 24 V series control string (thermostat → high-pressure switch → contactor coil) is dead. You measure 24 V across the pressure switch terminals (switch should be closed) and 0 V across the coil. Diagnose the fault and explain the readings.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: In a series string, the element holding the full supply voltage is the open point — here, the <strong>pressure switch is open</strong> (tripped or failed). Step 2: With the path broken, current is zero, so the healthy coil drops E = I × R = 0 V ✓ consistent. Step 3: Determine WHY the switch is open — genuine high pressure or a failed switch — before resetting or replacing; the switch may be reporting, not causing, the problem.</p>"
    }
  ],
  quiz: [
    {
      q: "In a series circuit, which quantity is the same through every component?",
      choices: ["Voltage", "Resistance", "Current", "Power"],
      answer: 2,
      explanation: "Correct: (c). One path means one current everywhere in series. (a) Voltage divides among components in proportion to resistance. (b) Each component has its own resistance; they add but are not 'the same.' (d) Power (E × I) differs per component because each drops a different voltage."
    },
    {
      q: "Resistors of 20 Ω and 20 Ω in parallel have a total resistance of:",
      choices: ["40 Ω", "20 Ω", "10 Ω", "400 Ω"],
      answer: 2,
      explanation: "Correct: (c). Equal branches: R_T = 20 ÷ 2 = 10 Ω (product-over-sum gives (20×20)÷40 = 10 ✓). (a) 40 Ω is the series total. (b) 20 Ω would mean the second branch changed nothing. (d) 400 is the product without dividing by the sum."
    },
    {
      q: "A series circuit of 5 Ω, 10 Ω, and 15 Ω is powered by 60 V. The current is:",
      choices: ["2 A", "4 A", "6 A", "0.5 A"],
      answer: 0,
      explanation: "Correct: (a). R_T = 30 Ω; I = 60 ÷ 30 = 2 A. (b) 4 A uses only part of the resistance. (c) 6 A would need a 10 Ω total. (d) 0.5 A inverts the division."
    },
    {
      q: "One branch of a three-branch parallel circuit opens. What happens to the other branches?",
      choices: ["They lose voltage proportionally", "They continue at full supply voltage; total current falls by the lost branch's share", "They all stop, as in series", "Their resistance doubles"],
      answer: 1,
      explanation: "Correct: (b). Parallel branches are independent: each keeps full voltage, total current drops by exactly the opened branch's current. (a) Voltage does not divide in parallel. (c) describes a series open. (d) Each surviving branch's resistance is unchanged — only total resistance rises."
    },
    {
      q: "In a series string, you measure the full 24 V supply across a closed limit switch and 0 V across the coil. The switch is:",
      choices: ["Operating normally — switches always drop full voltage", "Actually open (failed or tripped), breaking the string", "Shorted to ground", "Drawing too much current"],
      answer: 1,
      explanation: "Correct: (b). A closed, healthy switch drops ~0 V; full supply across it means it is open — the open point in a series string takes the whole voltage. (a) reverses the rule. (c) A ground short would show different readings and usually trip protection. (d) The string's current is zero — the opposite of too much."
    },
    {
      q: "Two parallel branches draw 0.75 A and 1.25 A from a 24 V supply. The total resistance seen by the supply is:",
      choices: ["53.3 Ω", "12 Ω", "24 Ω", "8 Ω"],
      answer: 1,
      explanation: "Correct: (b). Total current = 2.0 A; R_T = 24 ÷ 2.0 = 12 Ω. (a) 53.3 Ω wrongly adds the individual branch resistances (32 + 21.3) as if in series. (c) 24 Ω matches no step. (d) 8 Ω would draw 3 A."
    },
    {
      q: "Why are high- and low-pressure safety switches wired in series with the contactor coil rather than in parallel with it?",
      choices: ["Series wiring uses less copper", "In series, any safety opening removes the coil's only current path; in parallel, an open safety would change nothing", "Parallel wiring would raise the control voltage", "Series wiring increases the coil's resistance"],
      answer: 1,
      explanation: "Correct: (b). Series placement puts the safety in the load's sole path — open safety, dead coil. In parallel, the safety would be an optional extra path; opening it would leave the coil fully powered. (a) Wire savings are negligible and not the purpose. (c) Parallel branches do not change supply voltage. (d) The coil's own resistance is fixed by its construction."
    },
    {
      q: "A 100 Ω and a 25 Ω resistor are in series across 100 V. The voltage across the 25 Ω resistor is:",
      choices: ["80 V", "25 V", "20 V", "50 V"],
      answer: 2,
      explanation: "Correct: (c). Divider: E = 100 × (25 ÷ 125) = 20 V. Check by current: I = 100 ÷ 125 = 0.8 A; 0.8 × 25 = 20 V ✓. (a) 80 V is the drop across the 100 Ω resistor. (b) 25 V confuses the resistance value with a voltage. (d) 50 V would require equal resistances."
    }
  ],
  studyGuide: `
<h3>Module 3 — Series & Parallel Circuits: Quick Reference</h3>
<p><strong>Series:</strong> One path. Current same everywhere. R_T = R_1 + R_2 + ... Voltage drops add to supply. Open anywhere = everything stops; full supply appears across the open point.</p>
<p><strong>Parallel:</strong> Many paths. Voltage same on every branch. Branch currents add to total. 1/R_T = 1/R_1 + 1/R_2 + ...; R_T is always less than the smallest branch. Two-resistor shortcut: (R_1 × R_2) ÷ (R_1 + R_2). Equal branches: R_T = R ÷ n.</p>
<div class="formula">Voltage divider: E_x = E_supply × (R_x ÷ R_T)</div>
<p><strong>Anchors:</strong> 48 Ω ∥ 24 Ω on 24 V → R_T 16 Ω, branches 0.5 A + 1.0 A, total 1.5 A. 12 Ω + 24 Ω in series on 240 V → 6.67 A, drops 80 V / 160 V.</p>
<p><strong>Fault signatures:</strong> Series open → 0 A, full E across the break. Parallel open → one branch dead, total current drops by that branch's share. Parallel short → fuse/breaker opens, everything stops — find the low-Ω branch with power off.</p>
<p><strong>HVAC pattern:</strong> Loads in parallel (each gets full voltage, independent control); switches & safeties in series with the load they command or protect. Collapse series strings first, then combine parallels.</p>
`
};
