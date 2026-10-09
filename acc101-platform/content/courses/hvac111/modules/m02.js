// HVAC 111 - Module 2: Voltage, Current, Resistance & Ohm's Law
module.exports = {
  number: 2,
  slug: "ohms-law",
  title: "Voltage, Current, Resistance & Ohm's Law",
  estTime: "3–4 hours",
  objectives: [
    "Define voltage, current, and resistance with their units and symbols.",
    "Use Ohm's law (E = I × R) in all three forms to solve for any one quantity.",
    "Use the power law (P = E × I) and combine it with Ohm's law to find power, current, or resistance.",
    "Predict qualitatively how current changes when voltage or resistance changes in a circuit.",
    "Apply Ohm's law to real HVAC/R loads: contactor coils, heater elements, and control circuits.",
    "Convert between volts, millivolts, amps, and milliamps correctly in calculations."
  ],
  sections: [
    {
      heading: "The Three Quantities: Pressure, Flow, and Opposition",
      html: `
<p>Every electrical calculation in this program rests on three quantities. <strong>Voltage</strong> (symbol <strong>E</strong>, measured in <strong>volts</strong>) is electrical pressure — the force that pushes charge through a circuit. It always exists <em>between two points</em>: you measure it across a component or between two conductors. <strong>Current</strong> (symbol <strong>I</strong>, measured in <strong>amperes</strong>, or amps) is the rate of charge flow — how much electricity is actually moving through a conductor. <strong>Resistance</strong> (symbol <strong>R</strong>, measured in <strong>ohms</strong>, Ω) is opposition to that flow: every conductor, coil, and heating element pushes back against current to some degree.</p>
<p>The water analogy holds up well: voltage is water pressure, current is flow rate, and resistance is the narrowness of the pipe. Raise the pressure and flow increases. Narrow the pipe and flow decreases. HVAC/R examples are everywhere: a 240-volt supply is twice the "pressure" of a 120-volt supply; a contactor coil offers high resistance, so at 24 volts it draws a small current; a strip-heater element offers low resistance, so at 240 volts it draws a large current and converts it to heat.</p>
<p>Two habits will save you endless errors. First, <strong>voltage is measured in parallel (across), current in series (through)</strong> — Module 7 turns this into meter technique. Second, watch prefixes: control circuits discuss <strong>milliamps</strong> (thousandths of an amp) and flame-sensing circuits even microamps. Convert before you calculate: 500 mA = 0.5 A; 0.25 A = 250 mA.</p>
<div class="callout"><strong>Key idea:</strong> Voltage does not "flow" and current is not "used up." Voltage pushes, current flows, resistance opposes — and the load, through its resistance, decides how much current a given voltage will push through it.</div>`
    },
    {
      heading: "Ohm's Law and the Triangle",
      html: `
<p><strong>Ohm's law</strong> states the fixed relationship between the three quantities in a resistive circuit:</p>
<div class="formula">E = I × R &nbsp;&nbsp;|&nbsp;&nbsp; I = E ÷ R &nbsp;&nbsp;|&nbsp;&nbsp; R = E ÷ I</div>
<p>The Ohm's law triangle — E on top, I and R below — lets you recover any form: cover the quantity you want, and the other two show the operation. Cover E: I × R. Cover I: E over R (divide). Cover R: E over I.</p>
<p><strong>Worked Example 1.</strong> A 24-volt control transformer feeds a contactor coil with 48 Ω of resistance. How much current does the coil draw? I = E ÷ R = 24 ÷ 48 = <strong>0.5 A</strong>. Check the size of the answer: half an amp is a believable coil draw for a control circuit — if your arithmetic had produced 50 A, you would know instantly that something was upside down.</p>
<p><strong>Worked Example 2.</strong> A defrost heater draws 10 A on a 240-volt supply. What is its resistance? R = E ÷ I = 240 ÷ 10 = <strong>24 Ω</strong>. Notice the same numbers rearranged: given any two, the third follows. Also notice what happens if this 24 Ω heater were mistakenly connected to 120 volts: I = 120 ÷ 24 = 5 A — half the voltage, half the current, and (as the next section shows) only a quarter of the heat.</p>
<p><strong>Worked Example 3.</strong> A relay coil measures 12 Ω and draws 2 A in a test circuit. What voltage is applied? E = I × R = 2 × 12 = <strong>24 V</strong> — a standard control voltage, confirming the setup.</p>
<div class="callout"><strong>Key idea:</strong> Always sanity-check against reality: control coils draw fractions of an amp to a few amps; heating elements draw many amps; a result of 4,800 A means a decimal point escaped, not a discovery.</div>`
    },
    {
      heading: "Electrical Power: P = E × I",
      html: `
<p><strong>Power</strong> (symbol <strong>P</strong>, measured in <strong>watts</strong>) is the rate at which electrical energy is converted — into heat in a resistance element, into magnetism and motion in a motor, into light in a lamp. For resistive loads the fundamental relation is:</p>
<div class="formula">P = E × I</div>
<p><strong>Worked Example 4.</strong> The defrost heater from Example 2 (240 V, 10 A) converts P = 240 × 10 = <strong>2,400 W</strong> of electrical energy to heat. Now substitute Ohm's law into the power law and you get two more forms. Since I = E ÷ R: P = E × (E ÷ R) = E² ÷ R = 240² ÷ 24 = 57,600 ÷ 24 = <strong>2,400 W</strong> ✓. And since E = I × R: P = I² × R = 10² × 24 = <strong>2,400 W</strong> ✓. All three forms must agree; if they do not, an arithmetic error is hiding somewhere.</p>
<p>The E² ÷ R form explains Example 2's warning: power depends on the <em>square</em> of voltage. Halve the voltage on a fixed resistance (240 V → 120 V) and power falls to (1/2)² = <strong>one quarter</strong>: 2,400 W becomes 600 W. This is why a dual-voltage heater connected to the wrong tap barely warms, and why low supply voltage starves heating equipment while barely bothering a lamp.</p>
<p><strong>Worked Example 5.</strong> A crankcase heater is rated 70 W at 240 V. Its current is I = P ÷ E = 70 ÷ 240 ≈ <strong>0.29 A</strong>, and its resistance is R = E² ÷ P = 57,600 ÷ 70 ≈ <strong>823 Ω</strong>. Small wattage, high resistance, small current — the pattern is consistent every time: compare 823 Ω with the defrost heater's 24 Ω.</p>
<div class="callout"><strong>Key idea:</strong> You now own four tools — E = I×R, I = E÷R, R = E÷I, P = E×I — plus the combined forms P = E²÷R and P = I²×R. Given any two of E, I, R, P for a resistive load, you can find the other two. This is the largest single skill block in the NATE Core basic-electrical domain.</div>`
    },
    {
      heading: "What Changes What: Proportional Reasoning",
      html: `
<p>Calculations give numbers; proportional reasoning gives understanding. Fix resistance and double the voltage: current doubles (I = E ÷ R), and power <em>quadruples</em> (because both E and I doubled in P = E × I). Fix voltage and double the resistance: current halves, and power halves. These relationships let you predict a circuit's behavior before you touch a meter — and catch meter readings that cannot be right.</p>
<p><strong>Worked Example 6.</strong> A 120-volt circuit feeds a 60 Ω load. I = 120 ÷ 60 = 2 A; P = 120 × 2 = 240 W. A second identical 60 Ω load is added <em>in the same path</em> (series — Module 3 gives the full rules), making 120 Ω total. Now I = 120 ÷ 120 = 1 A, and total P = 120 × 1 = 120 W. The supply voltage did not change, but adding resistance cut current in half and total power in half. Each load now sees only 60 V (half of 120) and dissipates 60 W — a fact Module 3's voltage-divider rule will formalize.</p>
<p>Temperature sneaks into resistance, too. A cold heating element has slightly lower resistance than a hot one; a cold motor winding draws a brief inrush of current at start before settling. And copper conductors themselves have resistance: a long run of undersized wire drops voltage along its length exactly as any resistor does — E = I × R applied to the wire itself. At 10 A through a total loop resistance of 0.5 Ω, the wire eats 5 V, leaving 235 V of a 240 V supply for the load.</p>
<div class="callout"><strong>Common mistake:</strong> Believing a 20-amp breaker "pushes" 20 amps into anything connected. Breakers limit; loads decide. A 60 Ω load on 120 V draws 2 A whether the breaker is rated 15 A or 20 A — the rating is a ceiling for protection, not a setting for current.</div>`
    },
    {
      heading: "Ohm's Law in the Field — and Its Limits",
      html: `
<p>Where will you actually use this? <strong>Predicting coil current</strong> before powering a replacement contactor (Example 1). <strong>Verifying a heater element:</strong> measure its resistance power-off, compute expected current at nameplate voltage, then compare with your clamp meter — a large mismatch means a failing element, a wrong-voltage connection, or a misread. <strong>Checking transformer loading</strong> (Module 4) starts from the same arithmetic. <strong>Judging a measurement:</strong> a 24 V control circuit drawing 3 A through loads that should total 0.8 A is telling you something is shorted or miswired before anything smokes.</p>
<p>Know the limits, too. Ohm's law in its simple form describes <strong>resistive</strong> behavior. Motor windings and transformer coils oppose current with <em>impedance</em> — resistance plus inductive effects that Module-level AC theory in HVAC 117 treats properly. That is why you cannot predict a running motor's current from its winding resistance alone: a compressor winding may ohm out at 2 Ω, yet the running motor draws far less than 240 ÷ 2 = 120 A, because back-EMF and inductive reactance do most of the opposing once it spins. Use Ohm's law on windings for <em>comparisons and fault checks</em> (open, shorted, grounded), not for running-current predictions.</p>
<p>Similarly, resistance measurements belong on <strong>de-energized, isolated</strong> components: an ohmmeter supplies its own test current and expects to be the only source in the circuit. Module 7 covers the technique; Module 1's rule stands behind it — lock out, prove dead, then measure.</p>
<div class="callout"><strong>Key idea:</strong> Ohm's law is a flashlight, not the sun: perfect for resistive loads, control coils (approximately, for current estimates), voltage-drop reasoning, and sanity checks — and honestly limited on spinning motors, where impedance takes over. Knowing both is what makes the numbers discipline in this course trustworthy.</div>`
    }
  ],
  keyTerms: [
    { term: "Voltage (E)", def: "Electrical pressure — the potential difference between two points that pushes charge through a circuit; measured in volts." },
    { term: "Volt (V)", def: "The unit of voltage (electromotive force)." },
    { term: "Current (I)", def: "The rate of flow of electric charge through a conductor; measured in amperes." },
    { term: "Ampere (A)", def: "The unit of current; control circuits often work in fractions of an amp or milliamps." },
    { term: "Resistance (R)", def: "Opposition to current flow in a conductor or load; measured in ohms." },
    { term: "Ohm (Ω)", def: "The unit of resistance." },
    { term: "Ohm's law", def: "E = I × R: voltage equals current times resistance; rearranged as I = E ÷ R and R = E ÷ I." },
    { term: "Power (P)", def: "The rate of converting electrical energy to heat, motion, or light; measured in watts." },
    { term: "Watt (W)", def: "The unit of power; P = E × I for resistive loads." },
    { term: "Load", def: "Any device that converts electrical energy — a coil, heater, motor, or lamp — and thereby determines current draw." },
    { term: "Milliamp (mA)", def: "One-thousandth of an ampere (0.001 A); common unit in control and sensing circuits." },
    { term: "Voltage drop", def: "The voltage consumed across a resistance as current flows through it; drops around a circuit sum to the supply voltage." },
    { term: "Inrush current", def: "The brief, high current drawn at startup before a motor or device reaches normal operating conditions." },
    { term: "Impedance", def: "Total opposition to AC current, combining resistance with inductive and capacitive reactance; governs motor running current." },
    { term: "Back-EMF", def: "A voltage generated by a spinning motor that opposes the supply and limits running current." },
    { term: "Resistive load", def: "A load, such as a heating element, whose opposition is essentially pure resistance and which obeys Ohm's law directly." },
    { term: "Short circuit", def: "An unintended very-low-resistance path that allows dangerously high current to flow." },
    { term: "Open circuit", def: "A break in the current path; resistance is effectively infinite and current is zero." }
  ],
  video: {
    title: "Trades Math - Ohm's Law and the Power Law",
    embedUrl: "https://www.youtube.com/embed/pw2nEub2cdg",
    note: "A trades-focused lesson that works Ohm's law and the power law separately and then together, solving for voltage, current, resistance, and power with numerous examples — exactly the calculation set in this module. Follow along with pencil in hand and pause to solve each example before the instructor does.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A gas valve solenoid coil has a resistance of 12 Ω and is powered by a 24 V control circuit. Find the current draw and the power consumed.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: I = E ÷ R = 24 ÷ 12 = <strong>2 A</strong>. Step 2: P = E × I = 24 × 2 = <strong>48 W</strong>. Step 3: Check with P = E² ÷ R = 576 ÷ 12 = 48 W ✓. A 2 A draw is high for a small solenoid but consistent for a 12 Ω coil at 24 V — the arithmetic, not the intuition, governs.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An electric strip heater draws 20.8 A at 240 V (round to 20.8). Find its resistance and wattage.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R = E ÷ I = 240 ÷ 20.8 ≈ <strong>11.5 Ω</strong>. Step 2: P = E × I = 240 × 20.8 = <strong>4,992 W ≈ 5 kW</strong> — a standard strip-heater size, which confirms the numbers hang together.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A replacement contactor coil is rated 24 V and draws 0.25 A. What is its resistance, and what would its current be if it were accidentally powered at 120 V (before it fails)?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R = E ÷ I = 24 ÷ 0.25 = <strong>96 Ω</strong>. Step 2: At 120 V, I = 120 ÷ 96 = <strong>1.25 A</strong> — five times rated current (voltage went up 5×, so current went up 5×), and power rises 25×: the coil overheats and fails quickly. This is why control-voltage mistakes destroy parts.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A heater element measures 15 Ω. Compute its current and wattage on (a) 240 V and (b) 208 V, a common commercial supply.</p>",
      solution: "<p><strong>Solution:</strong> (a) I = 240 ÷ 15 = 16 A; P = 240 × 16 = <strong>3,840 W</strong>. (b) I = 208 ÷ 15 ≈ 13.87 A; P = 208 × 13.87 ≈ <strong>2,884 W</strong>. Step 3: Compare — voltage fell by about 13%, but power fell by about 25%, because power follows the square of voltage (208² ÷ 15 = 2,884 ✓). Equipment rated at 240 V delivers noticeably less heat on 208 V.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A control circuit's total load is 0.75 A at 24 V. Express the current in milliamps and find the circuit's total effective resistance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 0.75 A × 1,000 = <strong>750 mA</strong>. Step 2: R = E ÷ I = 24 ÷ 0.75 = <strong>32 Ω</strong>. Step 3: Sanity check the direction — less than one amp at 24 V implies a resistance in the tens of ohms, not single digits.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A long wire run has a total loop resistance of 0.4 Ω and carries 15 A to a condenser. How much voltage is lost in the wire, and what voltage reaches the unit from a 240 V supply?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Voltage drop = I × R = 15 × 0.4 = <strong>6 V</strong>. Step 2: Voltage at the unit = 240 − 6 = <strong>234 V</strong>. Step 3: The wire also wastes P = I² × R = 225 × 0.4 = 90 W as heat along the run — a real (if modest) loss, and the reason long runs call for larger conductors.</p>"
    }
  ],
  quiz: [
    {
      q: "A 24 V transformer powers a relay coil of 60 Ω. The coil current is:",
      choices: ["2.5 A", "0.4 A", "1,440 A", "0.04 A"],
      answer: 1,
      explanation: "Correct: (b). I = E ÷ R = 24 ÷ 60 = 0.4 A. (a) 2.5 A inverts the division (60 ÷ 24). (c) 1,440 multiplies instead of dividing (24 × 60). (d) 0.04 A is off by a factor of ten — a decimal slip."
    },
    {
      q: "A heating element draws 12 A at 120 V. Its power consumption is:",
      choices: ["10 W", "1,440 W", "132 W", "14,400 W"],
      answer: 1,
      explanation: "Correct: (b). P = E × I = 120 × 12 = 1,440 W. (a) 10 W is E ÷ I. (c) 132 W adds the numbers. (d) 14,400 W is a factor-of-ten slip from the correct product."
    },
    {
      q: "If voltage applied to a fixed resistance is doubled, the power dissipated becomes:",
      choices: ["Twice as much", "Half as much", "Four times as much", "Unchanged"],
      answer: 2,
      explanation: "Correct: (c). Doubling E doubles I (I = E ÷ R), and P = E × I, so both factors double: 2 × 2 = 4. (a) counts only one of the two doublings. (b) reverses the relationship. (d) would require current to halve exactly as voltage doubles, which Ohm's law contradicts at fixed R."
    },
    {
      q: "A motor winding measures 3 Ω. Why is the running current NOT 240 V ÷ 3 Ω = 80 A?",
      choices: ["Ohm's law does not apply to electricity in motors at all", "Once spinning, back-EMF and inductive reactance (impedance) oppose current far more than winding resistance alone", "The winding resistance rises to exactly cancel the voltage", "Meters cannot measure current above 40 A"],
      answer: 1,
      explanation: "Correct: (b). Running current is set by total impedance, dominated by inductive effects and back-EMF in a spinning motor. (a) Ohm's law still applies — to impedance in AC analysis (HVAC 117), not to resistance alone. (c) Resistance changes only slightly with temperature; nothing 'exactly cancels.' (d) Clamp meters routinely measure well above 40 A."
    },
    {
      q: "0.35 A expressed in milliamps is:",
      choices: ["35 mA", "3.5 mA", "350 mA", "3,500 mA"],
      answer: 2,
      explanation: "Correct: (c). Multiply by 1,000: 0.35 × 1,000 = 350 mA. (a) and (b) divide by powers of ten instead of multiplying. (d) multiplies by 10,000."
    },
    {
      q: "A load has a resistance of 10 Ω and dissipates 1,000 W. The current through it is:",
      choices: ["100 A", "10 A", "1 A", "31.6 A is impossible to determine without voltage — but current can be found from P = I² × R"],
      answer: 1,
      explanation: "Correct: (b). From P = I² × R, I = √(P ÷ R) = √(1,000 ÷ 10) = √100 = 10 A. (a) 100 A would dissipate 100² × 10 = 100,000 W. (c) 1 A dissipates only 10 W. (d) is wrong because P and R alone do determine I through the combined power form — and the check E = I × R = 100 V, P = E × I = 1,000 W confirms it."
    },
    {
      q: "Current in a circuit is measured by placing the meter or clamp:",
      choices: ["Across the load, in parallel", "Around a single conductor (clamp) or in series with the circuit, so the circuit current passes through the measurement path", "Across the power source with the load disconnected", "Between any two ground points"],
      answer: 1,
      explanation: "Correct: (b). Current is a through-quantity: a clamp encircles one conductor, or an in-line meter becomes part of the series path. (a) describes voltage measurement; putting an in-line current meter in parallel creates a near-short. (c) and (d) measure nothing meaningful about load current."
    },
    {
      q: "A 5,000 W heater is rated at 240 V. Connected to 240 V it draws about 20.8 A. If supply voltage sags to 216 V (90%), the heater's output is approximately:",
      choices: ["5,000 W — wattage is constant", "4,500 W (90% of rating)", "4,050 W (81% of rating, because power follows voltage squared)", "5,556 W"],
      answer: 2,
      explanation: "Correct: (c). R = 240² ÷ 5,000 ≈ 11.52 Ω. At 216 V: P = 216² ÷ 11.52 = 46,656 ÷ 11.52 ≈ 4,050 W, which is 0.9² = 0.81 of rating. (a) Wattage is only constant if resistance changes to compensate — a fixed element's does not. (b) uses a linear ratio instead of the squared relationship. (d) goes the wrong direction entirely."
    }
  ],
  studyGuide: `
<h3>Module 2 — Voltage, Current, Resistance & Ohm's Law: Quick Reference</h3>
<p><strong>Quantities:</strong> Voltage E (volts) = pressure, measured across. Current I (amps) = flow, measured through/around one conductor. Resistance R (ohms Ω) = opposition.</p>
<div class="formula">E = I × R &nbsp;|&nbsp; I = E ÷ R &nbsp;|&nbsp; R = E ÷ I &nbsp;|&nbsp; P = E × I &nbsp;|&nbsp; P = E² ÷ R &nbsp;|&nbsp; P = I² × R</div>
<p><strong>Anchor examples:</strong> 24 V across 48 Ω → 0.5 A. 240 V across 24 Ω → 10 A → 2,400 W. 70 W at 240 V → 0.29 A, ≈823 Ω.</p>
<p><strong>Proportional rules:</strong> Fixed R: double E → double I, quadruple P. Halve E → quarter P. Fixed E: double R → half I, half P.</p>
<p><strong>Conversions:</strong> 1 A = 1,000 mA. Convert before calculating.</p>
<p><strong>Limits:</strong> Simple Ohm's law governs resistive loads. Spinning motors are governed by impedance + back-EMF — use winding ohms for fault comparisons, not running-current prediction. Measure resistance only on de-energized, isolated parts.</p>
<p><strong>Field uses:</strong> Predict coil current, verify heater elements (measure Ω → compute A → compare with clamp), spot voltage drop in wire runs (E = I × R on the wire itself), and sanity-check every reading against believable ranges.</p>
`
};
