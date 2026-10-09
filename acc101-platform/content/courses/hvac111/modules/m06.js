// HVAC 111 - Module 6: Electric Motors — Types & Starting Devices
module.exports = {
  number: 6,
  slug: "electric-motors-starting-devices",
  title: "Electric Motors: Types & Starting Devices",
  estTime: "3–4 hours",
  objectives: [
    "Explain why a single-phase induction motor cannot start itself without a phase-splitting method.",
    "Compare PSC, CSIR, CSR, and shaded-pole motors by starting method, torque, and typical HVAC/R application.",
    "Identify motor windings and terminals by resistance relationships (common, run, start).",
    "Describe the roles of potential relays, current relays, centrifugal switches, and PTC devices in removing start components.",
    "Explain what a hard-start kit does and when it is — and is not — the right remedy.",
    "Recognize motor protection devices (internal/external overloads) and what their operation signifies."
  ],
  sections: [
    {
      heading: "The Single-Phase Starting Problem",
      html: `
<p>A single-phase AC supply produces a magnetic field in a motor's stator that <em>pulsates</em> — it grows, shrinks, and flips polarity, but it does not rotate. A rotor sitting in a purely pulsating field feels equal pull in both directions: net starting torque is zero, and the motor hums and heats instead of spinning. (Once spinning, the rotor can keep following the pulsations — single-phase motors run fine; they just cannot <em>start</em> unaided.)</p>
<p>Every single-phase motor design is a different answer to the same question: <strong>how do we fake a second phase?</strong> The universal recipe adds an <strong>auxiliary (start) winding</strong>, physically offset from the main (run) winding, and makes its current peak at a different time — using resistance, capacitance, or shading. Two windings, offset in space, carrying currents offset in time, produce a lopsided field that sweeps around the stator: a rotating field. The rotor chases it, and the motor starts.</p>
<p>The capacitor is the best phase-shifter available cheaply: current through a capacitor leads, current through a winding lags, and the spread between the auxiliary and main currents can approach the ideal quarter-cycle offset. That is the complete answer to this course's example question — "Why does a run capacitor help a PSC motor start?" It electrically splits one phase into two so the motor can produce starting (and smoother running) torque.</p>
<div class="callout"><strong>Key idea:</strong> Motor types in this module are not trivia categories; they are a ladder of starting-torque solutions. Learn each type as 'how it splits the phase' + 'what removes the start gear' + 'where it is used,' and the whole family makes sense.</div>`
    },
    {
      heading: "The Four Types: Shaded-Pole, PSC, CSIR, CSR",
      html: `
<ul>
<li><strong>Shaded-pole.</strong> A copper shading ring on part of each stator pole delays that section's field, producing a weak sweep. No capacitor, no switch, nothing to wear out — but very low starting torque and low efficiency. Home: small fans — evaporator fan motors in reach-ins, bath fans, small blowers — where the load starts easily.</li>
<li><strong>PSC (permanent split capacitor).</strong> A run capacitor stays permanently in series with the auxiliary winding. Moderate starting torque, good efficiency and quiet running, no starting switch at all. Home: blower motors, condenser fans, and many hermetic compressors — the workhorse of residential HVAC. Its weakness: starting torque is limited, so a PSC compressor under a heavy load (high head pressure, low voltage) may struggle to start.</li>
<li><strong>CSIR (capacitor start, induction run).</strong> A start capacitor (large µF) plus a starting device gives the auxiliary winding a big phase shift for strong starting torque; once up to speed the device removes the start capacitor and auxiliary winding, and the motor runs as a plain induction motor. Home: larger single-phase compressors and pumps needing real starting muscle.</li>
<li><strong>CSR (capacitor start, capacitor run).</strong> Both capacitors: the start capacitor delivers high starting torque, then drops out, while a run capacitor remains for efficient running. The best (and priciest) of both — common on larger single-phase compressors.</li>
</ul>
<p><strong>Comparing windings by resistance</strong> ties Module 2 to the bench. On a typical hermetic compressor with terminals Common (C), Run (R), and Start (S): the run winding (C–R) has the <em>lowest</em> resistance, the start winding (C–S) reads <em>higher</em>, and S–R (both windings in series) reads the <em>sum</em> of the two. Example pattern: C–R = 1 Ω, C–S = 3 Ω, S–R = 4 Ω ✓ (1 + 3 = 4). If the largest reading is not the sum of the other two, suspect a misidentified terminal or a winding fault. Absolute values vary by motor — the <em>relationship</em> is the diagnostic.</p>
<div class="callout"><strong>Key idea:</strong> Shaded-pole &lt; PSC &lt; CSIR ≈ CSR in starting torque, roughly in that order — and cost/complexity climbs the same ladder. Match the motor type to the starting load; that is why compressors climbing against head pressure wear the heavier gear.</div>`
    },
    {
      heading: "Starting Devices: Relays, Centrifugal Switches, PTCs",
      html: `
<p>Start capacitors and start windings are sprinters: massive effort, no endurance. Something must remove them once the motor reaches most of its running speed — leave a start capacitor in circuit and it overheats; leave a start winding energized on designs not built for it and it burns. Three devices do this job:</p>
<ul>
<li><strong>Centrifugal switch:</strong> mounted on the motor shaft of open motors; spinning weights fling outward and open the start circuit at speed. Mechanical, audible (a click as the motor coasts down), and a common failure point on open-frame motors — a switch stuck open means no start torque; stuck closed cooks the start winding.</li>
<li><strong>Current relay:</strong> its coil sits in series with the run winding. High starting current pulls its contacts closed, feeding the start capacitor/winding; as the motor speeds up and run current falls, the relay drops out and opens the start circuit. Used on smaller hermetic compressors; its contacts and coil must match the motor.</li>
<li><strong>Potential (voltage) relay:</strong> its coil connects across the start winding, sensing the voltage the spinning motor generates there. At startup that voltage is low and the relay's NC contacts feed the start capacitor; as speed (and generated voltage) rises to the relay's pick-up setting, it opens and drops the start capacitor. The standard choice on larger single-phase compressors — and the relay in most hard-start kits. Its ratings (pick-up/drop-out voltage, contact rating) must suit the motor; potential relays are not universal spares.</li>
<li><strong>PTC device:</strong> a positive-temperature-coefficient thermistor. Cold, it conducts and feeds the start winding; its own current heats it within a second or so, its resistance soars, and it effectively switches the start winding off. Simple and silent, found on many small refrigeration compressors. Quirk: it must cool before it can start the motor again — rapid restart attempts fail until it resets.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Substituting starting devices by 'close enough.' A potential relay with the wrong pick-up voltage either drops the start capacitor before the motor is up (stall, overload trip) or holds it in too long (cooked capacitor/winding). Match the device to the motor manufacturer's specification.</div>`
    },
    {
      heading: "Hard-Start Kits: What They Do and When They Help",
      html: `
<p>A <strong>hard-start kit</strong> adds a start capacitor and a potential relay to a PSC compressor that lacks starting assistance. The kit gives the compressor CSIR/CSR-like starting torque: at the instant of starting, the big start capacitor feeds the start winding for a strong phase shift; the potential relay removes it as soon as the compressor is turning properly, leaving the original run capacitor to do its continuous job.</p>
<p><strong>Legitimate uses:</strong> a PSC compressor that struggles to start against equalized-but-stubborn conditions, certain TXV systems that do not equalize pressures during the off cycle (the compressor must start against a pressure difference), long line sets, and marginal low-voltage situations the manufacturer approves a kit for. In those cases the kit is a designed solution, not a hack.</p>
<p><strong>Illegitimate uses:</strong> as a resurrection ritual for a mechanically failing compressor. If the compressor is tight, its valves are gone, or its windings are deteriorating, extra starting torque may produce a few more starts while the real disease progresses — and the callback lands on you. Diagnose first: correct run capacitor µF (Module 4), full voltage at the terminals under load, sound windings (Section 2's resistance relationships), and reasonable pressures. A hard-start kit fixes a <em>torque</em> problem. It does not fix an electrical, refrigerant, or mechanical problem, and installing one to avoid diagnosis is how small problems get expensive.</p>
<div class="callout"><strong>Key idea:</strong> After installing a kit, verify: compressor starts promptly, start components drop out (no lingering start-capacitor hum or heat), and running current is within nameplate. A kit that 'works' while keeping the start capacitor in circuit is a failure in slow motion.</div>`
    },
    {
      heading: "Motor Protection and Reading a No-Start Call",
      html: `
<p>Motors protect themselves because something must. <strong>Overload protectors</strong> — internal (embedded in the windings, invisible) or external (on the compressor shell or in the motor circuit) — open the circuit when current and/or temperature run too high, and reset (automatically on most HVAC units) after cooling. An overload that trips repeatedly is <em>reporting</em>, not malfunctioning: high current from a weak run capacitor, low voltage, a failing bearing adding mechanical load, high head pressure, or a winding beginning to fail. Replace the protector without finding the cause and you have silenced the messenger.</p>
<p><strong>Worked Example — a no-start walk-through.</strong> PSC condenser fan hums but does not spin; compressor starts normally. Sequence: (1) Safety — lock out, prove dead. (2) Spin the blade by hand (power off): it turns freely, so bearings are not seized. (3) Discharge the dual capacitor and test µF: HERM section in spec (compressor healthy ✓ consistent), FAN section reads 0.9 µF against a 5 µF rating — the fan's phase shift is essentially gone. (4) Diagnosis: failed FAN section → replace the dual capacitor → fan starts and runs at normal current. Notice the story the machine told: one good section, one dead section, symptoms sorted exactly along the same line.</p>
<p>Motor topics are the heart of the HVAC Excellence Employment Ready: Electrical expectations and a major slice of NATE Core's basic-electrical domain (the largest NATE Core block). HVAC 117 takes motors further — split-phase variations, three-phase, ECMs — but the diagnostic grammar you built here (windings by resistance, start gear in/out at the right moment, protection as information) carries straight through.</p>
<div class="callout"><strong>Key idea:</strong> Every no-start is one of four stories: no power (Modules 3/5), no phase shift (capacitor/start device), no freedom to turn (mechanical), or a protector saying no (find out why). Sort the story first; the part to replace is the last step, not the first.</div>`
    }
  ],
  keyTerms: [
    { term: "Run winding", def: "The main stator winding, energized whenever the motor runs; on a compressor it has the lowest resistance (Common–Run)." },
    { term: "Start (auxiliary) winding", def: "The offset winding used to create a phase-split rotating field for starting; higher resistance than the run winding." },
    { term: "Rotating magnetic field", def: "The sweeping stator field produced by windings offset in space carrying currents offset in time; the rotor follows it." },
    { term: "PSC motor", def: "Permanent split capacitor motor: a run capacitor permanently serves the auxiliary winding; moderate torque, no start switch." },
    { term: "CSIR motor", def: "Capacitor start, induction run: start capacitor switched in for starting, then removed; motor runs without capacitor assistance." },
    { term: "CSR motor", def: "Capacitor start, capacitor run: start capacitor for starting torque plus a run capacitor retained for running efficiency." },
    { term: "Shaded-pole motor", def: "A small motor using a shading ring to delay part of the pole's field; very low starting torque, used on small fans." },
    { term: "Centrifugal switch", def: "A shaft-mounted switch that opens the start circuit when the motor approaches running speed." },
    { term: "Current relay", def: "A starting relay whose series coil responds to run-winding current to connect/disconnect the start capacitor." },
    { term: "Potential relay", def: "A starting relay whose coil senses start-winding voltage; at pick-up voltage it opens its NC contacts to remove the start capacitor." },
    { term: "PTC start device", def: "A thermistor that conducts when cold to feed the start winding, then heats and effectively disconnects it; must cool before restart." },
    { term: "Hard-start kit", def: "An add-on start capacitor + potential relay giving a PSC compressor extra starting torque." },
    { term: "Starting torque", def: "The turning effort a motor produces at standstill; heavier loads and pressure differences demand more of it." },
    { term: "Overload protector", def: "A temperature/current-sensitive switch that opens a motor circuit on overheating and resets after cooling." },
    { term: "Hermetic compressor", def: "A compressor with motor and pump sealed in one welded shell; terminals are Common, Run, and Start." },
    { term: "Locked rotor", def: "The condition of a powered motor that cannot turn; it draws locked-rotor current and trips protection quickly." },
    { term: "Back-EMF (motor)", def: "Voltage generated by the spinning motor (notably in the start winding) that potential relays sense to time start-capacitor removal." },
    { term: "Single-phasing", def: "Operating a motor with one supply leg lost; causes overheating and failure to start or run properly." }
  ],
  video: {
    title: "HVAC Blower Motor Class! PSC Motor Speeds, Colors, Ohms, Current, Shorts, Air Restrictions!",
    embedUrl: "https://www.youtube.com/embed/EN47pCeeb_M",
    note: "A full class on PSC blower motors: how the capacitor serves starting and running, winding resistance checks, shorts testing, speeds and wire colors, and how airflow restrictions change current draw. It connects this module's motor theory to bench measurements you will make in Module 7.",
    more: [
      { title: "How to Find Common, Start, and Run on a PSC Compressor Motor", url: "https://www.youtube.com/watch?v=NxseKu60kYA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A compressor's terminals read: pair A = 4.5 Ω, pair B = 1.2 Ω, pair C = 3.3 Ω. Identify C, R, and S terminals using the resistance relationships.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The largest reading (4.5 Ω) must be S–R (both windings in series), and indeed 1.2 + 3.3 = 4.5 ✓. Step 2: The two pairs not involving... find the common terminal: C appears in both the smallest (C–R = 1.2 Ω) and middle (C–S = 3.3 Ω) readings; the terminal shared by those two pairs is Common. Step 3: The remaining terminal in the 1.2 Ω pair is Run; in the 3.3 Ω pair, Start. Winding health: consistent sums suggest healthy, unshorted windings.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Match the motor type to the application and justify: (a) reach-in cooler evaporator fan; (b) residential condenser fan; (c) 4-ton single-phase compressor on a TXV system that does not equalize.</p>",
      solution: "<p><strong>Solution:</strong> (a) <strong>Shaded-pole</strong> — tiny fan, trivial starting load, cheapest and simplest. (b) <strong>PSC</strong> — moderate torque, quiet, efficient, no start switch to fail. (c) <strong>CSR</strong> (or PSC + hard-start kit where the manufacturer approves) — starting against unequalized pressure demands high starting torque, plus run-capacitor efficiency for continuous duty.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A CSIR compressor's start capacitor remains in the circuit continuously because its potential relay contacts welded. Predict the failure sequence.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The start capacitor is intermittent-duty; continuous current overheats it — expect case swelling, venting, or rupture, often quickly. Step 2: Simultaneously the start winding, also not rated for continuous full duty on many designs, overheats, stressing its insulation. Step 3: End states: failed capacitor (no start), damaged start winding (no start, possible ground fault), or overload trips. Root cause to replace: the relay AND any component its failure damaged — test the capacitor µF and winding resistances before returning to service.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A small refrigerator compressor with a PTC start device is unplugged and plugged back in 20 seconds later during testing; it hums and trips. After 10 minutes unplugged, it starts normally. Explain.</p>",
      solution: "<p><strong>Explanation:</strong> Step 1: The PTC was still hot from the previous run; hot PTC = very high resistance = start winding effectively disconnected, so the compressor had no starting torque and drew locked-rotor current until its overload opened. Step 2: Ten minutes unplugged let the PTC cool and reset (and pressures equalize, also helping). Step 3: Lesson — PTC systems need a cool-down delay between start attempts; this behavior is normal device physics, not a defect.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A PSC compressor trips its overload a few minutes after starting, every cycle, and its run capacitor tests at 60% of rated µF. Connect the facts.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A weak run capacitor reduces the auxiliary winding's phase shift → the motor produces torque inefficiently and draws excess current to do its work. Step 2: Excess current overheats the motor until the overload — doing its job — opens. Step 3: The overload is the messenger; the capacitor is the message. Replace the capacitor (µF exact, voltage equal-or-higher), then verify running amps against the nameplate.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State two field situations where a hard-start kit is the correct remedy for a PSC compressor, and two where it is the wrong remedy.</p>",
      solution: "<p><strong>Solution:</strong> Correct: (1) a manufacturer-approved application on a TXV system whose pressures do not equalize during the off cycle; (2) a healthy compressor (good windings, good run capacitor, correct voltage) that marginally fails to start under documented low-voltage or long-lineset conditions. Wrong: (1) a mechanically seizing compressor — torque cannot cure a dying pump; (2) a unit whose true fault is a weak run capacitor or low supply voltage — fix the actual cause first; the kit would only mask it.</p>"
    }
  ],
  quiz: [
    {
      q: "A single-phase motor with only a run winding energized will not start because:",
      choices: ["Single-phase power has no voltage", "A single winding produces a pulsating field with equal pull in both directions — zero net starting torque", "The rotor is always locked by the overload", "Capacitors are required to conduct electricity to the motor"],
      answer: 1,
      explanation: "Correct: (b). Without a phase-split auxiliary circuit there is no rotating field and no starting torque. (a) Single-phase power has full voltage — it lacks a second phase, not voltage. (c) Overloads protect; they do not normally lock rotors. (d) The run winding conducts fine without any capacitor — it just cannot start the motor alone."
    },
    {
      q: "Terminal resistances on a compressor read C–R = 2 Ω, C–S = 5 Ω, S–R = 7 Ω. These readings indicate:",
      choices: ["A shorted start winding", "Consistent, healthy windings: the largest reading equals the sum of the other two", "An open run winding", "The terminals are mislabeled by the factory"],
      answer: 1,
      explanation: "Correct: (b). 2 + 5 = 7 ✓ is the signature pattern: run lowest, start higher, S–R the sum. (a) A short would depress one reading and break the sum relationship. (c) An open winding would read OL on its pairs. (d) Nothing in consistent readings suggests mislabeling."
    },
    {
      q: "Which motor type uses NO capacitor and NO start switch, relying on a shading ring?",
      choices: ["PSC", "CSIR", "CSR", "Shaded-pole"],
      answer: 3,
      explanation: "Correct: (d). The shaded-pole motor's copper ring delays part of the pole's flux to fake a rotating field — at very low torque. (a), (b), and (c) are all capacitor-based designs; CSIR adds a starting device as well."
    },
    {
      q: "A potential relay removes the start capacitor when:",
      choices: ["A timer expires after exactly 5 seconds", "The voltage generated in the start winding rises to the relay's pick-up value as the motor reaches speed", "The thermostat is satisfied", "Line voltage drops below 200 V"],
      answer: 1,
      explanation: "Correct: (b). The potential relay senses start-winding (back-EMF) voltage, which climbs with speed — a direct speed signal. (a) It is voltage-triggered, not time-triggered (PTC devices are the time/heat-based ones). (c) The thermostat controls the whole cycle, not the relay's instant of operation. (d) Pick-up is about generated voltage rising, not line voltage falling."
    },
    {
      q: "Leaving a start capacitor in the circuit continuously will most likely:",
      choices: ["Improve efficiency permanently", "Overheat and fail the capacitor (and stress the start winding), because it is rated for intermittent duty only", "Have no effect at all", "Convert the motor to three-phase operation"],
      answer: 1,
      explanation: "Correct: (b). Start capacitors are sprinters — continuous duty destroys them and endangers the start winding. (a) Continuous start capacitance unbalances the motor's designed running condition. (c) Staying in circuit is exactly how welded relay contacts kill compressors. (d) No capacitor arrangement converts single-phase service into three-phase."
    },
    {
      q: "The best first interpretation of a motor overload that trips repeatedly is:",
      choices: ["The overload is defective — replace it", "The overload is reporting excessive current or temperature — find the cause (capacitor, voltage, load, windings)", "The motor needs a hard-start kit in all cases", "Protection devices trip randomly with age"],
      answer: 1,
      explanation: "Correct: (b). Protectors are instruments: repeated trips = a real overload condition to diagnose. (a) Replacing the messenger without diagnosis is the classic error — and a new protector will trip too if the cause remains. (c) Hard-start kits address starting torque only. (d) Random tripping is not normal behavior for a healthy system."
    },
    {
      q: "Compared with a PSC motor, a CSIR motor offers:",
      choices: ["Lower starting torque but better efficiency", "Higher starting torque because a large start capacitor aids starting, then is switched out", "No need for any starting device", "Permanent capacitor assistance while running"],
      answer: 1,
      explanation: "Correct: (b). Capacitor-start = big start capacitor + switching device = strong starting torque; induction-run = it runs without the start gear. (a) reverses the comparison. (c) CSIR absolutely needs a device to remove its start capacitor. (d) Permanent run assistance is the PSC/CSR pattern, not CSIR."
    },
    {
      q: "A PTC start device fails to restart a small compressor immediately after a brief power interruption because:",
      choices: ["The PTC must cool for its resistance to fall enough to feed the start winding again", "PTC devices work only once per day", "The refrigerant must be recovered first", "The overload has a 24-hour reset"],
      answer: 0,
      explanation: "Correct: (a). A hot PTC is a high resistance — the start winding stays effectively disconnected until the device cools. (b) PTCs cycle as often as temperature allows, not once daily. (c) No refrigerant service is involved in a restart delay. (d) Overloads reset in minutes as they cool; there is no 24-hour timer."
    }
  ],
  studyGuide: `
<h3>Module 6 — Electric Motors: Quick Reference</h3>
<p><strong>Core problem:</strong> One phase = pulsating field = zero starting torque. Every design adds an offset auxiliary winding with time-shifted current (resistance, capacitance, or shading) to fake a rotating field.</p>
<p><strong>The ladder (starting torque, low → high):</strong> Shaded-pole (ring; tiny fans) → PSC (run cap always in; blowers, fans, many compressors) → CSIR (start cap + device, removed after start) → CSR (start cap for starting + run cap for running; strongest, costliest).</p>
<p><strong>Winding ID by ohms:</strong> C–R lowest, C–S higher, S–R = the sum of the other two. Sum doesn't check → misidentified terminal or winding fault.</p>
<p><strong>Start-removal devices:</strong> Centrifugal switch (shaft speed, open motors). Current relay (run-current falls as speed rises). Potential relay (start-winding voltage rises to pick-up — most compressor kits). PTC (self-heating thermistor; must cool to reset). Devices are motor-specific — never substitute by 'close.'</p>
<p><strong>Hard-start kit</strong> = start capacitor + potential relay for a PSC compressor. Right for torque problems (non-equalizing TXV, approved low-voltage cases). Wrong for dying compressors, weak run caps, or low voltage you haven't fixed.</p>
<p><strong>Overloads</strong> are messengers: repeated trips mean find the cause — capacitor µF, voltage, mechanical load, windings.</p>
`
};
