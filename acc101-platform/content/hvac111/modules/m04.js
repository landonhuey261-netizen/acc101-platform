// HVAC 111 - Module 4: Capacitors, Transformers & Power Supplies
module.exports = {
  number: 4,
  slug: "capacitors-transformers-power-supplies",
  title: "Capacitors, Transformers & Power Supplies",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a capacitor does in an AC motor circuit and how capacitance is rated in microfarads.",
    "Distinguish run capacitors from start capacitors by construction, rating, and duty.",
    "Explain how a step-down transformer works and why HVAC controls use 24 volts.",
    "Size a control transformer using its VA rating against total control load.",
    "Identify dual-capacitor terminals (C, FAN, HERM) and predict the effect of a weak capacitor on motor current.",
    "Describe safe capacitor handling: discharge before touching, verify rating and voltage on replacements."
  ],
  sections: [
    {
      heading: "What a Capacitor Actually Does",
      html: `
<p>A <strong>capacitor</strong> stores energy in an electric field between two conductive plates separated by an insulator (the dielectric). In AC motor circuits its magic is timing: current through a capacitor <em>leads</em> the voltage, while current through a motor winding lags. Feed a motor's auxiliary (start) winding through a capacitor and that winding's current shifts out of step with the main winding's current — and two windings carrying out-of-step currents produce a rotating magnetic field, which is what actually spins a single-phase motor (Module 6 develops this fully).</p>
<p>Capacitance is measured in <strong>microfarads (µF, also written MFD)</strong>. A larger µF value means a stronger phase shift and more starting or running assistance, up to the motor manufacturer's specified value. Capacitors also carry a <strong>voltage rating</strong>: the replacement must meet or exceed the original's rated voltage, because the voltage across a run capacitor in a motor circuit can be substantially higher than the supply voltage — a quirk of the motor-capacitor interaction that surprises many new techs. A 370-volt-rated part where a 440-volt part is specified is an undersized replacement waiting to fail.</p>
<p>Capacitors fail gradually and then suddenly: heat, age, and voltage stress erode capacitance year by year. A capacitor that has lost 20% of its µF may still "work" while quietly forcing its motor to draw more current and run hotter — which is why testing µF (Module 7) beats guessing, and why a bulged case or leaked oil means immediate replacement regardless of the reading.</p>
<div class="callout"><strong>Key idea:</strong> Safety first, always: a capacitor can hold a charge after power is off. Shut down, lock out (Module 1), and discharge the capacitor through a resistor before handling terminals — then verify with your meter.</div>`
    },
    {
      heading: "Run Capacitors vs. Start Capacitors",
      html: `
<p>The two families look similar and do related jobs, but they are <strong>not interchangeable</strong>:</p>
<ul>
<li><strong>Run capacitors</strong> stay in the circuit the entire time the motor runs. They are oil-filled, housed in metal (usually oval or round) cans, built for continuous duty, and carry relatively modest ratings — commonly in the single digits to tens of µF. Their job is ongoing: keep the auxiliary winding's current phase-shifted so the motor runs efficiently, quietly, and with better torque.</li>
<li><strong>Start capacitors</strong> deliver a much larger capacitance — commonly well over 100 µF — but only for the fraction of a second to few seconds of startup. They are typically dry, electrolytic, housed in plastic or bakelite cases, and rated for <em>intermittent</em> duty. A starting device (Module 6) removes them from the circuit once the motor is up to speed; leave one in circuit continuously and it will overheat and fail, sometimes violently.</li>
</ul>
<p><strong>Worked reasoning.</strong> A compressor needs strong starting torque for a moment (start capacitor: big µF, brief duty) and modest continuous assistance forever after (run capacitor: small µF, continuous duty). A system with both is the CSR arrangement in Module 6. Substituting a start capacitor as a "run" replacement because the µF is "close enough" fails on duty rating even when the number matches — the part is designed to rest between starts, not to work all day.</p>
<p><strong>Dual run capacitors</strong> package two run capacitors in one can sharing a common terminal: <strong>C</strong> (common), <strong>FAN</strong> (the smaller µF section for the condenser fan motor), and <strong>HERM</strong> (the larger section for the hermetic compressor). A nameplate marking like "45/5 µF" means 45 µF on the HERM side and 5 µF on the FAN side. Wiring the sections backward leaves both motors misassisted — check the stamped terminal labels, not the wire colors you found, because the last technician may have erred.</p>
<div class="callout"><strong>Key idea:</strong> Match three things on any replacement: µF (exact), voltage rating (equal or higher), and type/duty (run for run, start for start). "Close" on any of the three is a comeback scheduled.</div>`
    },
    {
      heading: "Transformers: Making 24 Volts from Line Voltage",
      html: `
<p>A <strong>transformer</strong> transfers AC energy between two coils — the <strong>primary</strong> (input) and <strong>secondary</strong> (output) — through a shared magnetic core, with no electrical connection between them. The voltage ratio follows the turns ratio: fewer turns on the secondary than the primary steps voltage <em>down</em>; more turns steps it <em>up</em>. HVAC control transformers step line voltage down: typically <strong>240 V or 120 V primary to 24 V secondary</strong> (nominal — actual secondary readings commonly run a few volts higher, around 26–28 V unloaded, which is normal).</p>
<p>Why 24 volts for controls? It is low enough to be far safer to work around than line voltage, cheap to wire with small thermostat cable, and standardized across thermostats, gas valves, relays, and contactor coils — one control language for the whole industry. The isolation matters too: because primary and secondary are not electrically connected, a short in a thermostat wire does not put line voltage on the thermostat in the living room.</p>
<p><strong>How it works, briefly:</strong> AC in the primary creates a constantly changing magnetic field in the core; that changing field induces AC in the secondary. No changing field, no output — which is why transformers are AC-only devices. Feed a transformer DC and the field stops changing after the first instant; the primary then behaves like a plain low-resistance coil and overheats.</p>
<p>Transformers fail in recognizable ways: an <strong>open</strong> winding (no secondary voltage at all), a <strong>shorted</strong> winding (overheating, discoloration, blown primary-side protection), or quiet death after a secondary short burned them out — the short being the real fault and the transformer its victim. When you replace a burned transformer without finding what overloaded it, you have installed the next casualty. Module 7 turns these patterns into meter tests.</p>
<div class="callout"><strong>Key idea:</strong> One side of the 24 V secondary is usually bonded as the "common" (C); control circuits are then spoken of as 'hot' (R, 24 V) switching out to loads that return to common. Keep that picture — Module 8's ladder diagrams draw it exactly that way.</div>`
    },
    {
      heading: "VA Ratings: Sizing the Control Power Supply",
      html: `
<p>Transformers are rated in <strong>VA (volt-amperes)</strong> — the product of secondary voltage and the maximum secondary current the transformer can deliver continuously: VA = E × I. A common residential/light-commercial control transformer rating is <strong>40 VA</strong>. At 24 V, that allows I = VA ÷ E = 40 ÷ 24 ≈ <strong>1.67 A</strong> of total control load. A <strong>75 VA</strong> unit allows 75 ÷ 24 ≈ <strong>3.1 A</strong>.</p>
<p><strong>Worked Example 1.</strong> A control circuit powers, simultaneously: a contactor coil drawing 0.4 A, a fan relay coil at 0.3 A, and a zone board plus thermostat load of 0.5 A — total 1.2 A. Required VA = 24 × 1.2 = <strong>28.8 VA</strong>. A 40 VA transformer covers it with margin ✓. Now add a second contactor (0.4 A) and a humidifier solenoid (0.6 A): total 2.2 A → 24 × 2.2 = <strong>52.8 VA</strong> — the 40 VA unit is now undersized; step up to 75 VA. Undersized transformers announce themselves as voltage sag under load: the secondary may read 27 V idle but sink toward 19–20 V when all loads pull in, and coils chatter or drop out exactly when everything calls at once.</p>
<p><strong>Worked Example 2 — primary current surprise.</strong> The same 40 VA transformer on a 240 V primary draws only 40 ÷ 240 ≈ <strong>0.17 A</strong> on the primary at full load. Power (approximately VA here) is conserved across the transformer: step voltage down by 10× and the available current steps up by 10× (minus small losses). This is also why a shorted secondary is so destructive: the secondary can deliver destructive current from a modest primary draw.</p>
<p>Protection matters: many control transformers include an internal fuse or a small breaker button; others rely on an external inline fuse on the secondary or the control board's blade fuse. A repeatedly tripping protection device is the VA section's fault logic in action — total the loads, measure the draw, and find the branch that grew teeth (Module 3's parallel-short signature).</p>
<div class="callout"><strong>Key idea:</strong> Budget a control transformer like a paycheck: list every load that can be on simultaneously, multiply total amps by 24, and choose a VA rating with headroom. This sizing reasoning is squarely in the NATE Ready-to-Work components/measurement territory and the HVAC Excellence Employment Ready: Electrical topics.</div>`
    },
    {
      heading: "Power Supplies, Boards, and Putting It Together",
      html: `
<p>Modern equipment adds one more layer: electronic control boards need <strong>DC power</strong>, so the 24 V AC secondary feeds a small power supply section on the board — rectified and regulated down to the low DC voltages the logic runs on. You do not service board internals in this course, but you must feed boards correctly: correct 24 V AC input, correct polarity of any DC test points per the manufacturer's literature, and a good common/ground path. Most "bad board" diagnoses that are actually bad power are found by verifying input voltage under load before condemning the board.</p>
<p><strong>Worked Example 3 — reading a dual cap call.</strong> A condenser fan runs but the compressor hums and trips its overload. Power off, locked out, capacitor discharged, you test the dual run capacitor: FAN section reads 4.8 µF on a 5 µF rating (within typical tolerance), HERM section reads 21 µF on a 45 µF rating — less than half. Diagnosis: the weak HERM section cannot supply the compressor's start/run phase shift; the compressor draws excessive current trying to start (humming, overload trip) while the fan, on its healthy section, runs normally. Replace with a 45/5 µF dual (or two singles of 45 and 5 µF) at equal-or-higher voltage rating. One weak section condemns the whole can — you cannot replace half a dual capacitor.</p>
<p>Pull the module together: the <strong>transformer</strong> makes safe control power and is budgeted in VA; <strong>capacitors</strong> make single-phase motors startable and efficient and are specified in µF and voltage; <strong>boards</strong> convert control power into logic. Modules 5 and 6 put switches, coils, and motors on this foundation; Module 7 gives you the meter skills to test each piece; Module 8 draws the whole system on one page.</p>
<div class="callout"><strong>Common mistake:</strong> Judging a capacitor by appearance alone, or 'testing' it only for a dead short. Most failed capacitors still look plausible and are not shorted — they are <em>weak</em>. Only a µF measurement against the printed rating makes the call. Appearance condemns the obviously bulged and leaking; the meter condemns the rest.</div>`
    }
  ],
  keyTerms: [
    { term: "Capacitor", def: "A device storing energy in an electric field between plates; in motor circuits it shifts auxiliary-winding current in phase to create starting/running torque." },
    { term: "Microfarad (µF / MFD)", def: "The unit of capacitance used on HVAC motor capacitors." },
    { term: "Dielectric", def: "The insulating material between a capacitor's plates." },
    { term: "Run capacitor", def: "A continuous-duty, oil-filled capacitor that remains in the motor circuit while running; modest µF ratings." },
    { term: "Start capacitor", def: "A high-µF, intermittent-duty capacitor switched into the circuit only during starting, then removed by a starting device." },
    { term: "Dual run capacitor", def: "Two run capacitors in one can sharing a common terminal; terminals labeled C, FAN, and HERM; rated like '45/5 µF.'" },
    { term: "HERM terminal", def: "The dual-capacitor terminal feeding the hermetic compressor section (the larger µF value)." },
    { term: "Voltage rating (capacitor)", def: "The maximum voltage a capacitor is built to withstand; replacements must equal or exceed the original rating." },
    { term: "Transformer", def: "A device transferring AC power between primary and secondary coils via a magnetic core, changing voltage per the turns ratio." },
    { term: "Primary winding", def: "The transformer coil connected to the input (line) voltage." },
    { term: "Secondary winding", def: "The transformer coil delivering the output voltage — 24 V in HVAC control service." },
    { term: "Step-down transformer", def: "A transformer with fewer secondary than primary turns, reducing voltage (e.g., 240 V or 120 V to 24 V)." },
    { term: "Turns ratio", def: "The ratio of primary to secondary winding turns, setting the voltage ratio of the transformer." },
    { term: "VA rating", def: "Volt-amperes: a transformer's capacity rating, VA = secondary volts × maximum secondary amps (e.g., 40 VA ≈ 1.67 A at 24 V)." },
    { term: "Common (C)", def: "The reference side of the 24 V control circuit to which loads return; the other side is the switched 'hot' (R)." },
    { term: "Rectifier", def: "A circuit (on control boards) converting AC to DC for electronic logic power." },
    { term: "Phase shift", def: "The timing offset between currents (or voltages) in AC circuits; capacitors shift auxiliary-winding current to help produce a rotating field." },
    { term: "Tolerance (capacitor)", def: "The allowed percentage deviation from a capacitor's printed µF rating; readings far below rating mean a weak capacitor." }
  ],
  video: {
    title: "HVAC: How To Check a DUAL CAPACITOR With A Multimeter (HVAC Training - Dual Run Capacitor)",
    embedUrl: "https://www.youtube.com/embed/m2wHS4uJUfU",
    note: "A hands-on demonstration of testing a dual run capacitor with a multimeter's capacitance function — C, FAN, and HERM terminals included. Watch how the measured µF is compared against the printed rating to pass or condemn the part, which is exactly the method behind this module's worked example.",
    more: [
      { title: "Is Your AC Capacitor Bad? Here's How to Test It in Seconds!", url: "https://www.youtube.com/watch?v=bCZcNlMznTA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 40 VA control transformer supplies a 24 V circuit. What is the maximum continuous secondary current? A proposed load list totals 1.9 A — is the transformer adequate?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: I = VA ÷ E = 40 ÷ 24 ≈ <strong>1.67 A</strong>. Step 2: The proposed 1.9 A exceeds 1.67 A, so <strong>no</strong> — the transformer is undersized; expect voltage sag and chattering coils under full load. Step 3: Choose the next standard size up, 75 VA (≈3.1 A), leaving headroom.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Loads on one transformer: thermostat/board 0.5 A, contactor coil 0.35 A, fan relay 0.25 A, gas valve 0.6 A — all can be on together. Compute required VA and pick between 40 VA and 75 VA.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total current = 0.5 + 0.35 + 0.25 + 0.6 = <strong>1.7 A</strong>. Step 2: VA = 24 × 1.7 = <strong>40.8 VA</strong>. Step 3: 40.8 VA already exceeds a 40 VA rating before any safety margin — choose the <strong>75 VA</strong> transformer.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A dual capacitor is marked 35/5 µF, 440 V. The FAN section measures 4.9 µF and the HERM section measures 24 µF. Which loads are affected, and what is the correct action?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: FAN: 4.9 vs 5 µF is within a few percent — healthy. Step 2: HERM: 24 vs 35 µF is roughly 31% low — the compressor's section is weak; expect hard starting and high current. Step 3: Replace the entire dual capacitor with a 35/5 µF unit rated 440 V (or higher). One can, one replacement — sections cannot be replaced individually.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A failed run capacitor is rated 7.5 µF, 370 V. On the truck you have: (a) 7.5 µF, 440 V run capacitor; (b) 7.5 µF, 250 V run capacitor; (c) 145–174 µF, 330 V start capacitor. Which is the correct replacement and why are the others wrong?</p>",
      solution: "<p><strong>Solution:</strong> Answer: <strong>(a)</strong>. Step 1: µF matches exactly and 440 V meets-or-exceeds 370 V, same run duty ✓. Step 2: (b) matches µF but its 250 V rating is below the original 370 V — underrated for a circuit where capacitor voltage can exceed supply voltage. Step 3: (c) is a start capacitor — wrong µF by an order of magnitude and intermittent-duty; it would fail in continuous run service.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A transformer nameplate reads: PRI 240 V, SEC 24 V, 75 VA. Find the secondary current capacity and the approximate primary current at full load.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Secondary: I = 75 ÷ 24 ≈ <strong>3.1 A</strong>. Step 2: Primary: VA is (approximately) conserved, so I = 75 ÷ 240 ≈ <strong>0.31 A</strong>. Step 3: Interpretation — stepping voltage down 10:1 steps available current up 10:1; the small primary draw does not mean the secondary is harmless to short.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A system reads 27 V at the transformer secondary with no load, but only 19 V when the thermostat calls and all coils pull in. The transformer is rated 40 VA and measured load current is 2.4 A. Explain what is happening using VA.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Load demand = 24 × 2.4 = <strong>57.6 VA</strong> against a 40 VA rating — the transformer is overloaded. Step 2: An overloaded transformer cannot hold its voltage up; the secondary sags to 19 V under load even though it looks healthy (27 V) unloaded. Step 3: Fix by reducing load (find any unintended extra load) or installing a correctly sized transformer (75 VA) — and check for the shorted coil that may have inflated the draw.</p>"
    }
  ],
  quiz: [
    {
      q: "A run capacitor differs from a start capacitor primarily in that a run capacitor:",
      choices: ["Has a much larger µF value", "Is built for continuous duty and stays in the circuit while the motor runs", "Is used only on three-phase motors", "Requires no voltage rating"],
      answer: 1,
      explanation: "Correct: (b). Run capacitors are oil-filled, continuous-duty, modest µF. (a) Start capacitors have the larger µF values, not run capacitors. (c) Both serve single-phase motors; three-phase motors need no capacitors to start. (d) Every capacitor carries a voltage rating, and respecting it is essential."
    },
    {
      q: "On a dual run capacitor marked 45/5 µF, the 45 µF section connects to the terminal labeled:",
      choices: ["FAN", "C (common) — both sections are 45 µF", "HERM", "The ground lug"],
      answer: 2,
      explanation: "Correct: (c). HERM serves the hermetic compressor and takes the larger section (45 µF); FAN takes the 5 µF section. (a) FAN is the smaller fan-motor section. (b) C is the shared common terminal, not a section value. (d) Dual capacitors have no ground lug terminal in this scheme."
    },
    {
      q: "A 24 V secondary on a 50 VA transformer can supply at most approximately:",
      choices: ["0.48 A", "2.08 A", "1,200 A", "24 A"],
      answer: 1,
      explanation: "Correct: (b). I = VA ÷ E = 50 ÷ 24 ≈ 2.08 A. (a) 0.48 A inverts the division (24 ÷ 50). (c) 1,200 multiplies volts by VA. (d) 24 A confuses the voltage value with current."
    },
    {
      q: "The voltage across a running motor's run capacitor can exceed the supply voltage, so when replacing one you must:",
      choices: ["Always choose a lower voltage rating to be safe", "Match µF exactly and choose a voltage rating equal to or higher than the original", "Ignore voltage rating if µF matches", "Use any start capacitor with a higher µF"],
      answer: 1,
      explanation: "Correct: (b). µF exact, voltage rating equal-or-higher, same duty type. (a) A lower rating invites dielectric failure. (c) Voltage rating is a hard limit, not a suggestion. (d) A start capacitor fails on both µF and duty in run service."
    },
    {
      q: "A control transformer steps 240 V down to 24 V. It works because:",
      choices: ["The secondary has more turns than the primary", "AC in the primary creates a changing magnetic field in the core that induces AC in the secondary", "The core converts AC to DC", "Resistance wire inside drops the extra voltage as heat"],
      answer: 1,
      explanation: "Correct: (b). Induction via a changing field is the transformer principle — and why transformers need AC. (a) More secondary turns would step voltage UP. (c) Transformers output AC; rectifiers make DC. (d) Voltage is transformed magnetically, not burned off as heat (losses are small)."
    },
    {
      q: "Before handling a capacitor's terminals you should:",
      choices: ["Touch both terminals together with a screwdriver to spark it empty", "Shut down and lock out power, discharge the capacitor through a resistor as directed, and verify with a meter", "Nothing — capacitors discharge instantly when power is off", "Wear dry gloves and work quickly"],
      answer: 1,
      explanation: "Correct: (b). Controlled discharge through a resistor plus meter verification is the safe sequence. (a) Dead-shorting with a screwdriver can damage the capacitor and produce a dangerous spark. (c) Capacitors can hold charge long after shutdown — that is the hazard. (d) Speed is not a safety device; the lockout procedure is."
    },
    {
      q: "A weak (low-µF) run capacitor on a compressor typically causes:",
      choices: ["Lower running current and a cooler motor", "Hard starting, higher current draw, and possible overload trips", "Instant fuse operation with no symptoms first", "The condenser fan to run backward permanently"],
      answer: 1,
      explanation: "Correct: (b). Lost phase shift means lost torque efficiency: the motor labors, draws more current, and may trip its overload. (a) A weak capacitor never improves efficiency. (c) Capacitors usually degrade gradually with symptoms (humming, trips) before total failure. (d) Fan direction problems come from wiring errors, not weak µF."
    },
    {
      q: "With no load connected, a healthy 24 V control transformer's secondary commonly measures:",
      choices: ["Exactly 24.00 V at all times", "A few volts above 24 (around 26–28 V), settling nearer 24 V under rated load", "12 V — half voltage until a load connects", "0 V until the thermostat calls"],
      answer: 1,
      explanation: "Correct: (b). Nominal 24 V secondaries characteristically read high when unloaded. (a) 'Nominal' means approximate, not exact. (c) No halving mechanism exists in a transformer. (d) The secondary is energized whenever the primary is — loads draw current, they do not switch the transformer on."
    }
  ],
  studyGuide: `
<h3>Module 4 — Capacitors, Transformers & Power Supplies: Quick Reference</h3>
<p><strong>Capacitor:</strong> Stores energy in an electric field; in motor circuits it phase-shifts auxiliary-winding current to create a rotating field. Rated in µF and volts.</p>
<p><strong>Run vs start:</strong> Run = oil-filled, continuous duty, stays in circuit, modest µF. Start = dry electrolytic, intermittent duty, large µF (often 100+), switched out after start. Never substitute across types.</p>
<p><strong>Dual run cap:</strong> C = common, FAN = smaller µF, HERM = larger µF. "45/5 µF" = 45 HERM / 5 FAN. One weak section = replace the whole can. Replacement rules: µF exact, voltage equal-or-higher, same duty.</p>
<p><strong>Transformer:</strong> Primary → changing magnetic field in core → secondary. Steps 240 V or 120 V down to nominal 24 V (expect ≈26–28 V unloaded). AC only. Isolation between windings protects the control side.</p>
<div class="formula">VA = E × I &nbsp;|&nbsp; 40 VA at 24 V ≈ 1.67 A &nbsp;|&nbsp; 75 VA at 24 V ≈ 3.1 A</div>
<p><strong>Sizing:</strong> Sum all simultaneous load amps × 24 = required VA; choose the next rating up with headroom. Sagging secondary voltage under load = overload until proven otherwise.</p>
<p><strong>Safety:</strong> Lock out, discharge capacitors through a resistor, verify with a meter — before touching terminals.</p>
`
};
