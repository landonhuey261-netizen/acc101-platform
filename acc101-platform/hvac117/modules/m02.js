// HVAC 117 - Module 2: AC Theory: Inductance, Capacitance & Impedance
module.exports = {
  number: 2,
  slug: "ac-theory-impedance",
  title: "AC Theory: Inductance, Capacitance & Impedance",
  estTime: "3–4 hours",
  objectives: [
    "Explain inductive reactance and capacitive reactance and state how each changes with frequency.",
    "Calculate XL and XC for given component values at 60 Hz.",
    "Combine resistance and net reactance into impedance and solve a series AC circuit for current.",
    "Build the power triangle and compute real power (W), apparent power (VA), reactive power (var), and power factor.",
    "Explain in plain language why a motor circuit draws more current than its wattage alone suggests, and why power factor matters to ampacity and voltage drop."
  ],
  sections: [
    {
      heading: "Why AC Changes the Rules",
      html: `
<p>Everything in Module 1 treated opposition to current as pure resistance. That works for heaters and for DC. Motors and capacitors live on AC, and AC adds a second kind of opposition: <strong>reactance</strong>. Resistance converts electrical energy to heat and is gone. Reactance stores energy in a magnetic or electric field for part of each cycle and hands it back later in the cycle — it opposes current without consuming average power.</p>
<p>That storage is why phase enters the picture. In a pure resistance, voltage and current rise and fall together — they are <strong>in phase</strong>. In a pure inductance, current <strong>lags</strong> voltage, reaching its peak after the voltage peaks. In a pure capacitance, current <strong>leads</strong> voltage. Real HVAC loads — motor windings especially — are mixtures, so current lags voltage by somewhere between 0 and 90 degrees.</p>
<p>The practical stakes are immediate. A motor's current is set not by its resistance alone but by its total opposition, and the utility — and your wire, breaker, and contactor — must carry the full current, including the part that sloshes back and forth doing no net work. This module gives you the arithmetic: reactance first, then impedance, then the power triangle that ties it together.</p>
<div class="callout"><strong>Key idea:</strong> A clamp meter reads the whole current — the working part and the circulating part together. AC circuit math exists to separate those two parts, because they are billed, heated, and troubleshot differently.</div>`
    },
    {
      heading: "Inductive Reactance: Coils Push Back",
      html: `
<p>Every motor winding, transformer coil, and relay coil is an inductor. When AC current tries to change through a coil, the coil's magnetic field pushes back against the change. That opposition is <strong>inductive reactance</strong>, XL, measured in ohms just like resistance:</p>
<div class="formula">X<sub>L</sub> = 2π × f × L</div>
<p>where f is frequency in hertz (60 Hz on North American power) and L is inductance in henries. <strong>Worked example:</strong> a coil of 0.1 H on 60 Hz has XL = 2 × 3.1416 × 60 × 0.1 = 37.7 Ω. Double the frequency and XL doubles; double the inductance and XL doubles. Reactance is frequency-dependent in a way resistance never is.</p>
<p>In an inductor, current lags voltage by up to 90 degrees in the ideal case. A real motor winding is a coil wound with real wire, so it always has some resistance mixed in — which is exactly why motor current lags by less than 90 degrees and why windings get warm.</p>
<p>Field connection: this pushback is what limits current through a healthy motor winding far more than its ohmmeter resistance suggests. A winding that measures only a few ohms with a meter (DC, no frequency, no reactance) may draw a perfectly normal running current on AC because XL is doing most of the limiting. Never condemn a motor by comparing its DC winding resistance to an Ohm's-law calculation at line voltage.</p>
<div class="callout"><strong>Key idea:</strong> XL rises with frequency and inductance. Your ohmmeter measures only the wire's resistance; the running motor is limited mostly by reactance the meter cannot see.</div>`
    },
    {
      heading: "Capacitive Reactance: Capacitors Push Back the Other Way",
      html: `
<p>A capacitor stores energy in an electric field between its plates. On AC it charges and discharges every cycle, and that cycling current meets an opposition called <strong>capacitive reactance</strong>, XC, also in ohms:</p>
<div class="formula">X<sub>C</sub> = 1 ÷ (2π × f × C)</div>
<p>with C in farads. <strong>Worked example:</strong> a 50 µF run capacitor at 60 Hz: XC = 1 ÷ (2 × 3.1416 × 60 × 0.000050) = 1 ÷ 0.01885 ≈ 53 Ω. Note the inverse behavior compared with a coil: <em>raise</em> the capacitance and XC <em>falls</em> — a bigger capacitor passes more AC current. Raise the frequency and XC also falls.</p>
<p>In a capacitor, current <strong>leads</strong> voltage — the opposite phase behavior from an inductor. That opposition is not a curiosity; it is the entire working principle of the single-phase motors in Module 3. A run capacitor placed in series with a motor's start winding creates a current that is out of step with the run winding's current, and that deliberate phase split is what produces starting and running torque from a single-phase supply.</p>
<p>It also explains a capacitor failure symptom. If a run capacitor loses capacitance (a common aging failure), XC rises, start-winding current falls, and the motor loses torque and draws unbalanced current — humming, overheating, or failing to start, even though the capacitor is not open or shorted and may pass a casual continuity check. Only a capacitance measurement against the marked rating and its stated tolerance settles it — the lab for this course is built on exactly that test.</p>
<div class="callout"><strong>Key idea:</strong> XC falls as capacitance or frequency rises. A weakened capacitor is a bigger reactance: less current to the winding it feeds, less torque, more heat everywhere else.</div>`
    },
    {
      heading: "Impedance: Combining Resistance and Reactance",
      html: `
<p>In a series AC circuit, resistance and reactance do not simply add, because their effects are 90 degrees out of step with each other. They combine as the sides of a right triangle, producing <strong>impedance</strong>, Z — the total opposition to AC current:</p>
<div class="formula">Z = √( R² + (X<sub>L</sub> − X<sub>C</sub>)² ) &nbsp;&nbsp;|&nbsp;&nbsp; I = E ÷ Z</div>
<p>Inductive and capacitive reactance oppose each other, so they are subtracted first — a circuit can even reach a point where XL and XC cancel, leaving Z equal to R alone.</p>
<p><strong>Worked example.</strong> A series circuit has R = 30 Ω and a net reactance (XL − XC) of 40 Ω. Then Z = √(30² + 40²) = √(900 + 1600) = √2500 = 50 Ω. On 120 V, current is 120 ÷ 50 = 2.4 A. A technician who ignored reactance would predict 120 ÷ 30 = 4 A — a serious error, and exactly the kind that leads to condemning good parts.</p>
<p>This triangle — 30-40-50 — is worth memorizing as a shape. Whenever resistance and net reactance appear in a 3-4 ratio, impedance is the 5. The same triangle reappears, scaled, in the power calculations of the next section, because voltage, current, and power triangles in a given circuit all share the same angle.</p>
<div class="callout"><strong>Key idea:</strong> Impedance is Ohm's law for AC: use Z where you used R, but build Z from the right triangle of resistance and <em>net</em> reactance — never from a plain sum.</div>`
    },
    {
      heading: "The Power Triangle and Power Factor",
      html: `
<p>Multiply the sides of the impedance triangle by current and you get the <strong>power triangle</strong>, with three distinct quantities:</p>
<ul>
<li><strong>Real power, P</strong> — measured in watts (W). The part that does work and makes heat: P = I² × R. This is what the load is <em>for</em>.</li>
<li><strong>Reactive power, Q</strong> — measured in vars. The part that cycles in and out of fields each cycle, doing no net work but requiring real current to carry it.</li>
<li><strong>Apparent power, S</strong> — measured in volt-amperes (VA). What the source actually supplies: S = E × I. It is the hypotenuse: S = √(P² + Q²).</li>
</ul>
<p><strong>Power factor</strong> is the ratio PF = P ÷ S — also the cosine of the circuit's phase angle. <strong>Continuing the worked example:</strong> with I = 2.4 A and R = 30 Ω, P = 2.4² × 30 = 172.8 W. Q = 2.4² × 40 = 230.4 var. S = 120 × 2.4 = 288 VA. Check: √(172.8² + 230.4²) = 288 VA ✓. PF = 172.8 ÷ 288 = 0.60.</p>
<p>Now a motor-flavored example. A motor draws 10 A at 240 V with a power factor of 0.85: apparent power is 240 × 10 = 2,400 VA, but real power is 2,400 × 0.85 = 2,040 W. The wire, breaker, and contactor must be sized for the full 10 A regardless — current is current. Low power factor means more current for the same work: more voltage drop, more I²R heating, less capacity left in the panel. That is why Module 1's voltage-drop discipline and this module's power factor belong in the same toolbox.</p>
<div class="callout"><strong>Key idea:</strong> Watts do the work; volt-amperes size the wiring. Power factor tells you how much of the current you are carrying is actually earning its keep.</div>`
    }
  ],
  keyTerms: [
    { term: "Reactance", def: "Opposition to AC current from stored field energy in inductors and capacitors; measured in ohms but consumes no average power." },
    { term: "Inductive reactance (XL)", def: "A coil's opposition to AC, XL = 2πfL; rises with frequency and inductance. Current lags voltage in an inductor." },
    { term: "Capacitive reactance (XC)", def: "A capacitor's opposition to AC, XC = 1 ÷ (2πfC); falls as capacitance or frequency rises. Current leads voltage in a capacitor." },
    { term: "Impedance (Z)", def: "Total opposition in an AC circuit: Z = √(R² + (XL − XC)²). Used in place of R in Ohm's law for AC." },
    { term: "Phase angle", def: "The degrees by which current leads or lags voltage in an AC circuit; zero for pure resistance, approaching 90 degrees for pure reactance." },
    { term: "Lagging current", def: "Current peaking after voltage, the normal condition in inductive loads such as motor windings." },
    { term: "Leading current", def: "Current peaking before voltage, characteristic of capacitive circuits." },
    { term: "Real power (W)", def: "The power that performs work or produces heat, P = I²R; the horizontal leg of the power triangle." },
    { term: "Apparent power (VA)", def: "The product of volts and amperes the source must supply, S = E × I; the hypotenuse of the power triangle." },
    { term: "Reactive power (var)", def: "Power that cycles between source and fields without doing net work, Q = I² × net X." },
    { term: "Power factor", def: "The ratio of real to apparent power, PF = P ÷ S, also cos of the phase angle; 1.0 is ideal, motor loads run below 1.0 lagging." },
    { term: "Power triangle", def: "The right-triangle relationship among W, var, and VA, sharing the circuit's phase angle." },
    { term: "Inductance (henries)", def: "A coil's ability to store magnetic energy and oppose changes in current; the property behind XL." },
    { term: "Capacitance (farads)", def: "A capacitor's ability to store electric charge; field capacitors are rated in microfarads (µF)." },
    { term: "Net reactance", def: "XL − XC in a series circuit; the two reactances oppose each other and partially cancel." },
    { term: "Resonance (concept)", def: "The condition XL = XC, where net reactance is zero and impedance equals resistance alone." },
    { term: "RMS values", def: "The effective AC voltage and current values meters read and nameplates state, used in all the calculations in this module." },
    { term: "Lagging power factor correction", def: "Adding capacitance to offset inductive reactance, raising power factor and reducing line current for the same work — the principle run capacitors exploit inside a motor." }
  ],
  video: {
    title: "RLC Circuits | 21.1 General Physics",
    embedUrl: "https://www.youtube.com/embed/KVYNn44N9Tg",
    note: "A clear lecture treatment of exactly this module's content: resistors, capacitors, and inductors in AC circuits, why voltage and current fall out of phase in reactive components, and how reactance is calculated. It is a physics lecture rather than a field video, so translate its resistor-inductor-capacitor examples onto motor windings and run capacitors as you watch.",
    more: [
      { title: "Alternating Current, Motors, & Controls", url: "https://www.youtube.com/watch?v=RG3eljmqyq4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Calculate the inductive reactance of a 0.05 H coil at 60 Hz.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: XL = 2πfL. Step 2: XL = 2 × 3.1416 × 60 × 0.05 = 18.85 Ω. <strong>Answer: approximately 18.8 Ω.</strong> Step 3: Sanity check — reactance is in ohms and grows with both frequency and inductance, as expected.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Calculate the capacitive reactance of a 35 µF capacitor at 60 Hz.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: XC = 1 ÷ (2πfC), with C in farads: 35 µF = 0.000035 F. Step 2: 2 × 3.1416 × 60 × 0.000035 = 0.01319. Step 3: XC = 1 ÷ 0.01319 ≈ 75.8 Ω. <strong>Answer: approximately 76 Ω.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A series circuit has R = 40 Ω, XL = 90 Ω, and XC = 60 Ω on a 200 V source. Find net reactance, impedance, and circuit current.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Net reactance = XL − XC = 90 − 60 = 30 Ω. Step 2: Z = √(40² + 30²) = √(1600 + 900) = √2500 = 50 Ω. Step 3: I = E ÷ Z = 200 ÷ 50 = 4 A. <strong>Answers: 30 Ω net (inductive), Z = 50 Ω, I = 4 A.</strong> Note the net is inductive because XL is larger, so current lags.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A load draws 8 A at 120 V with a power factor of 0.75. Find apparent power and real power.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: S = E × I = 120 × 8 = 960 VA. Step 2: P = S × PF = 960 × 0.75 = 720 W. <strong>Answers: 960 VA apparent, 720 W real.</strong> The remaining share is reactive power circulating in the load's fields — real current the wiring must carry, doing no net work.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> For the circuit in Problem 3, compute real power, reactive power, apparent power, and power factor, and verify the power triangle.</p>",
      solution: "<p><strong>Solution:</strong> Given I = 4 A, R = 40 Ω, net X = 30 Ω, E = 200 V. Step 1: P = I²R = 16 × 40 = 640 W. Step 2: Q = I²X = 16 × 30 = 480 var. Step 3: S = E × I = 200 × 4 = 800 VA. Step 4: Verify: √(640² + 480²) = √(409,600 + 230,400) = √640,000 = 800 VA ✓. Step 5: PF = P ÷ S = 640 ÷ 800 = 0.80 lagging (net reactance is inductive). <strong>Answers: 640 W, 480 var, 800 VA, PF 0.80.</strong></p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A run capacitor ages and loses capacitance. Using XC = 1 ÷ (2πfC), explain step by step what happens to XC, to the current in the winding it feeds, and to the motor.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: C falls, and since C is in the denominator, XC rises. Step 2: Higher XC in series with the start (auxiliary) winding means less current flows in that winding for the same voltage. Step 3: The phase-split between windings weakens, so starting and running torque fall while the run winding carries a larger, unbalanced share. Step 4: Result — a motor that hums, starts hard or not at all, runs hot, and may trip its overload, from a capacitor that is neither open nor shorted. Only a capacitance reading against the marked rating and tolerance proves it.</p>"
    }
  ],
  quiz: [
    {
      q: "Inductive reactance increases when:",
      choices: ["Frequency decreases", "Inductance or frequency increases", "Inductance decreases", "The circuit is switched to DC"],
      answer: 1,
      explanation: "Correct: (b). XL = 2πfL, so XL grows in direct proportion to both frequency and inductance. (a) Lower frequency lowers XL. (c) Lower inductance lowers XL. (d) On DC (f = 0) inductive reactance is zero after the initial transient — a coil is then just its wire resistance."
    },
    {
      q: "A larger run capacitor (more microfarads) has:",
      choices: ["Higher capacitive reactance", "The same reactance — size does not matter", "Lower capacitive reactance", "Reactance only on DC"],
      answer: 2,
      explanation: "Correct: (c). XC = 1 ÷ (2πfC): capacitance is in the denominator, so bigger capacitance means smaller reactance and more current passed. (a) reverses the relationship. (b) is wrong — the formula depends directly on C. (d) is wrong — capacitors block steady DC; reactance is an AC behavior."
    },
    {
      q: "A series circuit has R = 60 Ω and net reactance of 80 Ω. Its impedance is:",
      choices: ["140 Ω", "100 Ω", "20 Ω", "60 Ω"],
      answer: 1,
      explanation: "Correct: (b). Z = √(60² + 80²) = √(3,600 + 6,400) = √10,000 = 100 Ω — the 6-8-10 triangle. (a) 140 Ω adds the two as if they were in phase, which ignores the 90-degree relationship. (c) 20 Ω subtracts them. (d) 60 Ω ignores reactance entirely."
    },
    {
      q: "Current in a typical motor circuit lags voltage because the windings are primarily:",
      choices: ["Capacitive", "Resistive", "Inductive", "Shorted"],
      answer: 2,
      explanation: "Correct: (c). Motor windings are coils — inductors — and inductor current lags voltage. (a) Capacitive circuits produce leading current. (b) Purely resistive circuits are in phase, PF 1.0, like a heater. (d) A short is a fault condition, not a phase relationship."
    },
    {
      q: "Power factor is defined as:",
      choices: ["Real power ÷ apparent power", "Apparent power ÷ real power", "Vars ÷ watts", "Voltage ÷ current"],
      answer: 0,
      explanation: "Correct: (a). PF = P ÷ S (also cos of the phase angle); it can never exceed 1.0. (b) inverts the ratio and would exceed 1. (c) vars ÷ watts is the tangent of the angle, not the power factor. (d) voltage ÷ current is impedance, not power factor."
    },
    {
      q: "A load draws 5 A at 240 V, PF 0.80. Its real power consumption is:",
      choices: ["1,200 W", "960 W", "1,500 W", "240 W"],
      answer: 1,
      explanation: "Correct: (b). S = 240 × 5 = 1,200 VA; P = S × PF = 1,200 × 0.80 = 960 W. (a) 1,200 is the apparent power in VA, not watts. (c) 1,500 W would require PF above 1. (d) 240 W matches no correct step."
    },
    {
      q: "At the condition XL = XC in a series circuit:",
      choices: ["Impedance is at its maximum", "Current is zero", "Impedance equals resistance alone", "Power factor is zero"],
      answer: 2,
      explanation: "Correct: (c). Net reactance is XL − XC = 0, so Z = √(R² + 0) = R — impedance is at its minimum, not maximum, so (a) is backwards. (b) Current is actually at its maximum for the given voltage and R. (d) With no net reactance the circuit is purely resistive in behavior, so PF is 1.0, not zero."
    },
    {
      q: "Why must wire and breakers be sized from apparent power (current) rather than watts alone?",
      choices: ["Watts are not measurable in the field", "Conductors carry the full current, including the reactive portion, and heat by I²R", "Power factor is always 1.0 on motors", "VA and W are the same on AC"],
      answer: 1,
      explanation: "Correct: (b). Every ampere — working or circulating — flows through the wire and heats it by I²R. Sizing by watts alone would undersize the circuit whenever PF is below 1. (a) Watts are measurable; that is not the reason. (c) Motor PF is below 1.0 lagging. (d) VA equals W only at PF 1.0."
    }
  ],
  studyGuide: `
<h3>Module 2 — AC Theory: Inductance, Capacitance &amp; Impedance: Quick Reference</h3>
<div class="formula">X<sub>L</sub> = 2πfL (rises with f and L) &nbsp;|&nbsp; X<sub>C</sub> = 1 ÷ (2πfC) (falls as C or f rises)</div>
<p><strong>Phase:</strong> resistance — in phase; inductor — current lags; capacitor — current leads. Motors are inductive: lagging PF.</p>
<div class="formula">Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²) &nbsp;|&nbsp; I = E ÷ Z</div>
<p><strong>Power triangle:</strong> P (watts, real work) = I²R; Q (vars, circulating) = I²X; S (VA, supplied) = E × I; S = √(P² + Q²).</p>
<div class="formula">Power factor = P ÷ S = cos(angle). Example locked in: R 30 Ω, net X 40 Ω, Z 50 Ω; at 120 V, I = 2.4 A, P = 172.8 W, Q = 230.4 var, S = 288 VA, PF = 0.60.</div>
<p><strong>Field ties:</strong> ohmmeter sees only winding R — reactance limits running current. Weak capacitor → higher XC → less start-winding current → lost torque. Size wire/breakers by current (VA), never by watts alone.</p>
<p><strong>Watch out:</strong> never add R and X as a plain sum, and never subtract them from each other looking for Z — they are legs of a right triangle. If your calculated current at line voltage looks wildly higher than the nameplate running amps, you probably used resistance where impedance belonged.</p>
`
};
