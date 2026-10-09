// HVAC 127 - Module 6: Electromechanical & Pneumatic Controls
module.exports = {
  number: 6,
  slug: "electromechanical-and-pneumatic-controls",
  title: "Electromechanical & Pneumatic Controls",
  estTime: "3–4 hours",
  objectives: [
    "Describe electromechanical and analog electronic controls and where each still serves.",
    "Explain a pneumatic control system end to end: air supply, main line, controller, branch line, actuator.",
    "State typical main-air and branch-pressure behavior and compute actuator position from branch pressure and spring range.",
    "Distinguish direct-acting from reverse-acting pneumatic controllers and predict the result of each on a valve.",
    "Explain the receiver-controller and name the classic pneumatic failure modes and their symptoms."
  ],
  sections: [
    {
      heading: "Before Electronics: Electromechanical and Analog Control",
      html: `
<p>Two generations of control technology still fill mechanical rooms. <strong>Electromechanical</strong> controls do their sensing and switching with physics you can see: bimetal coils, mercury bulbs, bellows, diaphragms, clock motors, and cam timers. A time-clock with trippers, a mercury-bulb thermostat, a pressure switch with a visible spring — all electromechanical. They are rugged, repairable by inspection, and utterly without memory or communication.</p>
<p><strong>Analog electronic</strong> controls replaced the mechanics with circuits: thermistor sensing, amplifier boards, and continuously varying DC outputs driving electric actuators or triac-switched loads. "Analog" is the key word — signals are smooth voltages, not network numbers. Standalone electronic thermostats, unit ventilator controllers, and many packaged-equipment boards from the pre-network era are analog electronic. They fail differently than mechanics (component-level board faults, drift, dead power supplies) but think the same way: sense, compare against a setpoint dial, drive an output. Module 2's theory applies to all of it unchanged.</p>
<div class="callout"><strong>Key idea:</strong> Technology generations change the hardware, never the loop. Whatever the era of the equipment in front of you, find the sensor, the controller, and the controlled device first — then learn that generation's failure habits.</div>`
    },
    {
      heading: "Pneumatic Controls: Control by Air Pressure",
      html: `
<p>For most of the twentieth century, commercial HVAC control ran on <strong>compressed air</strong>, and vast pneumatic systems remain in service. The architecture mirrors an electrical system exactly, with air as the signal and the power:</p>
<ul>
<li><strong>Air supply:</strong> a compressor, tank, dryer, and filter produce clean, dry air. Dirt and water are the enemies of every small orifice downstream, so air quality is control quality.</li>
<li><strong>Main line:</strong> a pressure-reducing valve (PRV) drops tank pressure to the <strong>main air</strong> pressure distributed to controllers — commonly about <strong>20 psig</strong> (engineering references put typical PRV output around 18–22 psig, with 25 psig a common maximum safe pressure for pneumatic controls).</li>
<li><strong>Controller:</strong> a pneumatic thermostat or receiver-controller takes main air in and meters it into the <strong>branch line</strong> at a pressure that represents its decision.</li>
<li><strong>Branch line:</strong> carries that varying pressure — anywhere from near zero up toward main pressure — to the actuator.</li>
<li><strong>Actuator:</strong> an air motor: a diaphragm or piston against a spring. Branch pressure pushes; the spring pushes back; the stem position is wherever the two balance.</li>
</ul>
<div class="formula">Most actuators stroke fully over a standard spring range, commonly 3–13 psig of branch pressure: 3 psig = one end of travel, 13 psig = the other.</div>
<div class="callout"><strong>Key idea:</strong> A pneumatic controller is a pressure regulator whose setting is its opinion. Read the branch pressure with a gauge and you are reading the controller's mind — the pneumatic equivalent of measuring an output signal.</div>`
    },
    {
      heading: "Branch Pressure Math and Acting Direction",
      html: `
<p>Because the actuator's position is set by the balance of branch pressure against a known spring range, branch pressure readings convert directly to position:</p>
<div class="formula">Actuator position % = (Branch psig − 3) ÷ (13 − 3) × 100 — at 8 psig: (8 − 3) ÷ 10 = 50% of stroke</div>
<p><strong>Worked example:</strong> A damper actuator (3–13 psig range) shows 5.5 psig on the branch gauge. Position = (5.5 − 3) ÷ 10 = <strong>25% open</strong>. If the controller is calling for 80% and the branch sits at 5.5 psig, the controller is not producing the pressure — suspect the controller, its main-air supply, or a branch leak, not the actuator. If branch pressure is correct at 11 psig but the damper sits at 25%, the fault moved downstream: actuator diaphragm, linkage, or a binding damper. Pressure first, then position — the pneumatic half-split.</p>
<p>Now direction. A <strong>direct-acting</strong> controller raises branch pressure as the controlled variable rises; a <strong>reverse-acting</strong> controller lowers branch pressure as the variable rises. Pair the controller with the valve's normal position (NO/NC from Module 1) and you get the system's behavior: a cooling application might use a direct-acting thermostat with a normally-closed chilled-water valve — room warms, branch rises, valve opens, cooling increases. Flip either element and the same parts make a heater. Most field confusion in pneumatics is not broken parts; it is an acting-direction mismatch introduced during a replacement, where the new thermostat's action didn't match the old one's.</p>
<div class="callout"><strong>Common mistake:</strong> Replacing a pneumatic thermostat by part number family without confirming direct/reverse action and spring-range match. The system then controls perfectly — in exactly the wrong direction — and 'works' its way to a freeze or an overheat.</div>`
    },
    {
      heading: "Receiver-Controllers and Pneumatic Failure Modes",
      html: `
<p>A <strong>receiver-controller</strong> is the pneumatic brain for bigger jobs: instead of sensing the variable itself, it receives a small pneumatic signal from a remote <em>transmitter</em> (a temperature or humidity sensor that outputs an air signal) and produces the branch output. One receiver-controller can host reset schedules — for example, resetting discharge-air setpoint as outdoor temperature changes — the pneumatic ancestor of the DDC reset logic in Module 11. Pilot positioners and volume boosters extend the idea to big or distant actuators.</p>
<p>Pneumatics fail in characteristic ways, and each has a pressure signature:</p>
<ul>
<li><strong>Main air low (compressor, PRV, or dryer fault):</strong> every loop on the floor degrades together — check main pressure first whenever 'everything' is wrong.</li>
<li><strong>Branch line leak:</strong> controller works overtime, branch pressure sags below command, actuator stops short; a hiss and a hungry controller are the tells.</li>
<li><strong>Clogged restrictor/filter (dirty, wet air):</strong> the controller becomes sluggish or dead — the tiny orifices that make pneumatic logic possible are the first casualties of bad air.</li>
<li><strong>Actuator diaphragm failure:</strong> correct branch pressure at the gauge tee, no stroke at the stem; air may vent from the actuator case.</li>
<li><strong>Calibration drift:</strong> branch pressures are all believable but the room sits offset — verify sensor against a reference and recalibrate per maker procedure.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> In pneumatics, your multimeter is a pressure gauge. Main pressure, branch pressure, and actuator response are the three readings that bisect every pneumatic fault.</div>
<p>Why learn a 'dead' technology? Because it isn't dead — schools, hospitals, and government buildings run enormous pneumatic estates, hybrid systems put pneumatic actuators under electronic and DDC controllers every day, and the technician who can gauge a branch line is employable in buildings the all-digital tech cannot service.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Electromechanical controls sense/switch with visible physics; analog electronic controls do the same with smooth DC signals. The loop model is unchanged.</li>
<li>Pneumatic path: compressor/dryer → PRV → main air (commonly ~20 psig) → controller → branch line (varying pressure) → spring-opposed actuator.</li>
<li>Standard actuator spring range 3–13 psig: position % = (branch − 3) ÷ 10 × 100.</li>
<li>Direct-acting: variable up → branch up. Reverse-acting: variable up → branch down. Controller action × valve normal position = system behavior.</li>
<li>Receiver-controllers take remote transmitter signals and add strategies like reset.</li>
<li>Signature faults: low main air hurts everything; branch leak sags one loop; dirt/water kills restrictors; diaphragm failure shows pressure without motion.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Judging a pneumatic actuator without a branch gauge reading. 'The damper isn't moving' is three different faults (no signal, no air, no motion) and only the gauge sorts them.</div>
<div class="callout"><strong>Common mistake:</strong> Ignoring air quality. A system with a failed dryer will eat controllers one restrictor at a time; fix the air or you'll be back monthly.</div>
<p><strong>Bridge to DDC:</strong> Notice how naturally pneumatics map onto electronics — main pressure ↔ power supply, branch pressure ↔ analog output, receiver-controller reset ↔ programmed reset. Modules 8–11 reuse every concept here in digital form.</p>`
    }
  ],
  keyTerms: [
    { term: "Electromechanical control", def: "Control using physical mechanisms — bimetal, bellows, cams, mercury switches — to sense and switch." },
    { term: "Analog electronic control", def: "Control using circuits and smooth varying signals (voltages) rather than digital/network data." },
    { term: "Pneumatic control", def: "Control in which compressed air carries both the signal and the power to actuators." },
    { term: "Main air", def: "The regulated supply pressure distributed to pneumatic controllers, commonly about 20 psig." },
    { term: "Branch line", def: "The line carrying the controller's varying output pressure to its actuator." },
    { term: "Branch pressure", def: "The pressure in the branch line; its value represents the controller's output decision." },
    { term: "Pressure-reducing valve (PRV)", def: "The valve dropping compressor tank pressure down to main-air pressure for the control system." },
    { term: "Spring range", def: "The branch-pressure span over which an actuator strokes fully, commonly 3–13 psig." },
    { term: "Diaphragm actuator", def: "An air motor in which branch pressure on a diaphragm works against a spring to position a stem." },
    { term: "Direct-acting controller", def: "A pneumatic controller whose branch pressure rises as the controlled variable rises." },
    { term: "Reverse-acting controller", def: "A pneumatic controller whose branch pressure falls as the controlled variable rises." },
    { term: "Receiver-controller", def: "A pneumatic controller that accepts a remote transmitter's air signal and produces the branch output; can implement reset." },
    { term: "Transmitter (pneumatic)", def: "A remote sensor that converts a measured variable into a proportional pneumatic signal for a receiver-controller." },
    { term: "Restrictor", def: "A tiny fixed orifice in pneumatic controllers that makes pressure-based logic possible; first victim of dirty air." },
    { term: "Reset (control)", def: "Automatically adjusting a setpoint based on another variable, e.g., discharge-air setpoint reset by outdoor temperature." },
    { term: "Positioner", def: "A device that drives an actuator to the exact position commanded, overcoming friction and load forces." },
    { term: "Air dryer", def: "Equipment removing moisture from control air to protect orifices and actuators." },
    { term: "Throttling range", def: "In pneumatic thermostats, the variable change that swings branch pressure through the actuator's spring range (the proportional band analog)." }
  ],
  video: {
    title: "HVAC Tech Tip - Controlling a VAV box with the only Pneumatic controller you will ever need.",
    embedUrl: "https://www.youtube.com/embed/XTjunct3dHA",
    note: "A field tech tip on controlling a VAV box with a pneumatic reset volume controller. Watch how the pneumatic controller, thermostat action, and air volume setpoints interact — a living example of this module's branch-pressure control driving a real terminal unit.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 3–13 psig damper actuator's branch gauge reads (a) 3 psig, (b) 10.5 psig, (c) 13 psig. State the damper position in each case.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Position % = (branch − 3) ÷ 10 × 100. Step 2: (a) (3−3)/10 = <strong>0%</strong> — at the spring end of travel. (b) (10.5−3)/10 = <strong>75%</strong>. (c) (13−3)/10 = <strong>100%</strong> — fully stroked. A gauge plus this formula turns 'the damper looks partly open' into a number you can compare with the controller's command.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An entire floor of pneumatic thermostats stops controlling on the same afternoon, each in a different room with different symptoms. What single reading do you take before opening any thermostat, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Simultaneous multi-loop failure points at the shared resource: the <strong>main air</strong>. Step 2: Read main pressure at the PRV/gauge. If it has sagged far below its normal ~20 psig (compressor down, PRV failed, dryer plugged), every controller downstream is starved. Step 3: Individual thermostats cannot be diagnosed until their supply is restored — the pneumatic version of 'check the transformer before the stat.'</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A cooling application pairs a reverse-acting thermostat with a normally-open chilled-water valve. Walk through what happens as the room warms, and state whether the system heats or cools more. (Valve is NO: spring opens it with no air.)</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Room warms → reverse-acting stat <strong>lowers</strong> branch pressure. Step 2: Lower branch pressure lets the NO valve's spring open it further. Step 3: More chilled water flows, so cooling <strong>increases</strong> as the room warms — correct behavior, achieved with the opposite pairing from the module's direct-acting/NC example. Step 4: Moral — never memorize 'the right combination'; derive behavior from action × normal position every time.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Branch pressure at the actuator tee reads a steady, correct 11 psig for an 80% command, but the valve stem has not moved and air hisses faintly from the actuator housing. Diagnose.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Correct branch pressure rules out the controller, main air, and branch line. Step 2: Pressure present + no motion + air escaping the case = <strong>failed actuator diaphragm</strong> — the pressure vents through the tear instead of building force against the spring. Step 3: Replace/rebuild the actuator; no controller adjustment can compensate for a torn diaphragm.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A pneumatic system has eaten three controllers in a year, each failing sluggish with clogged restrictors. What is the root-cause repair, and why is replacing the fourth controller not it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Restrictors clog from contaminated supply — water and oil carried from a failed dryer/filter or a compressor passing oil. Step 2: Root-cause repair = restore <strong>air quality</strong>: service/replace the dryer and filters, drain the tank, verify the compressor's condition. Step 3: Another controller swap treats the victim, not the cause; the same air will clog the new restrictors on the same schedule.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain what a receiver-controller adds beyond a plain pneumatic thermostat, using a discharge-air reset example.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A plain pneumatic thermostat senses one variable at its own location and produces a branch output. Step 2: A receiver-controller accepts a remote transmitter's signal (here, discharge-air temperature from the duct) and can combine it with a second influence. Step 3: Example: as outdoor air warms, the receiver-controller <strong>resets</strong> the discharge setpoint lower per a schedule, squeezing efficiency the fixed setpoint would waste. That reset logic is the direct ancestor of the DDC reset strategies in Module 11.</p>"
    }
  ],
  quiz: [
    {
      q: "In a pneumatic system, the branch line carries:",
      choices: ["Full compressor tank pressure at all times", "The controller's varying output pressure to the actuator", "Refrigerant to the coil", "Exhaust air from the space"],
      answer: 1,
      explanation: "Correct: (b). Branch pressure is the control signal in air form. (a) Tank pressure lives upstream of the PRV; controllers work from regulated main air. (c) Refrigerant circulates in the refrigeration circuit, never in control tubing. (d) Branch lines are sealed signal lines, not ventilation paths."
    },
    {
      q: "Main air pressure in a typical pneumatic control system is approximately:",
      choices: ["3 psig", "13 psig", "20 psig", "120 psig"],
      answer: 2,
      explanation: "Correct: (c). PRVs commonly deliver about 18–22 psig as main air, roughly 20. (a) and (b) are the ends of the common actuator spring range (branch pressures), not the supply. (d) resembles raw tank pressure territory upstream of the PRV — far above the roughly 25 psig maximum considered safe for control devices."
    },
    {
      q: "An actuator with a 3–13 psig spring range receives 6 psig branch pressure. Its position is:",
      choices: ["6%", "30%", "50%", "60%"],
      answer: 1,
      explanation: "Correct: (b). (6 − 3) ÷ (13 − 3) = 3 ÷ 10 = 30%. (a) confuses the pressure value with percent. (c) would be 8 psig, the middle of the range. (d) comes from computing 6/10 without subtracting the 3 psig spring start — the live-zero-style offset matters here too."
    },
    {
      q: "A direct-acting pneumatic controller, as the controlled variable rises:",
      choices: ["Lowers its branch pressure", "Raises its branch pressure", "Shuts off the main air", "Reverses the actuator spring"],
      answer: 1,
      explanation: "Correct: (b). Direct action: output moves in the same direction as the variable. (a) is the definition of reverse-acting. (c) Main air supply is the PRV/compressor's job, not the controller's response. (d) Springs are hardware constants of the actuator, not something a controller reverses."
    },
    {
      q: "Every pneumatic loop on a floor fails at once. Check first:",
      choices: ["Each thermostat's calibration", "The main air supply (compressor, PRV, dryer)", "Each actuator's diaphragm", "The receiver-controller reset schedule"],
      answer: 1,
      explanation: "Correct: (b). Simultaneous failure of independent loops means their shared resource — main air — is gone or degraded. (a) and (c) treat individual victims of a system-level cause. (d) Reset affects one controlled loop's setpoint, not a floor of dead controllers."
    },
    {
      q: "A receiver-controller differs from a plain pneumatic thermostat because it:",
      choices: ["Uses electricity instead of air", "Accepts a remote transmitter's signal and can add strategies like setpoint reset", "Needs no main air connection", "Only works on cooling"],
      answer: 1,
      explanation: "Correct: (b). The receiver-controller is the remote-input brain of a pneumatic system, and reset schedules are its classic extra. (a) It is still pneumatic end to end. (c) It needs main air like every pneumatic controller. (d) Receiver-controllers serve heating, cooling, and mixed duties."
    },
    {
      q: "Correct branch pressure is measured at the actuator, but the stem doesn't move and air escapes the actuator case. The fault is:",
      choices: ["The controller's calibration", "A torn actuator diaphragm", "Low main air", "A reverse-acting thermostat"],
      answer: 1,
      explanation: "Correct: (b). Pressure arrives; force never builds; air vents through the housing — the diaphragm is breached. (a) Calibration changes what pressure is produced, but the produced pressure here is correct. (c) Low main air would show as low branch pressure. (d) Action direction affects which way it strokes, not whether it strokes at all."
    },
    {
      q: "Repeated restrictor clogging across many pneumatic controllers most likely indicates:",
      choices: ["All controllers were defective", "Poor control-air quality — failed dryer/filtration or oil carryover", "Spring ranges are mismatched", "The building is too old for pneumatics"],
      answer: 1,
      explanation: "Correct: (b). Tiny orifices are the first casualties of wet, dirty air; system-wide clogging is an air-quality diagnosis. (a) Statistically implausible across many devices and years. (c) Mismatched springs change stroke behavior, not clogging. (d) Pneumatic estates run for decades when their air is clean and dry — age alone isn't the cause."
    }
  ],
  studyGuide: `
<h3>Module 6 — Electromechanical & Pneumatic Controls: Quick Reference</h3>
<ul>
<li><strong>Generations:</strong> electromechanical (visible physics) → analog electronic (smooth DC signals) → digital/networked. Same loop every time.</li>
<li><strong>Pneumatic chain:</strong> compressor + dryer + filter → PRV → <strong>main air ≈ 20 psig</strong> (typical PRV output ~18–22; ~25 psig max safe for controls) → controller → <strong>branch line</strong> → spring-opposed actuator.</li>
<li><strong>Spring range 3–13 psig</strong> is the common full-stroke span: position % = (branch − 3) ÷ 10 × 100. 8 psig = 50%.</li>
<li><strong>Direct-acting:</strong> variable ↑ → branch ↑. <strong>Reverse-acting:</strong> variable ↑ → branch ↓. Behavior = controller action × valve/damper normal position. Derive it; never memorize combos.</li>
<li><strong>Receiver-controller:</strong> remote transmitter input + branch output + reset capability — pneumatic ancestor of DDC reset.</li>
<li><strong>Three readings bisect every pneumatic fault:</strong> main pressure, branch pressure, actuator response. All loops dead → main air. One loop's branch sagging → leak or controller. Pressure right, no motion → diaphragm/linkage.</li>
<li><strong>Air quality is control quality:</strong> repeated restrictor clogs = dryer/filter/compressor problem, not controller luck.</li>
</ul>
<p><strong>Tool translation:</strong> in pneumatics the pressure gauge is your multimeter — branch pressure is the controller's spoken opinion.</p>`
};
