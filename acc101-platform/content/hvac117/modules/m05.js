// HVAC 117 - Module 5: Motor Starters, Overloads & Protection
module.exports = {
  number: 5,
  slug: "motor-starters-overloads-protection",
  title: "Motor Starters, Overloads & Protection",
  estTime: "3–4 hours",
  objectives: [
    "State what a motor starter is — a contactor plus overload protection — and what each half does.",
    "Compare thermal (bimetal and melting-alloy) and electronic overloads and explain how each senses an overload.",
    "Set or select overload protection from the motor nameplate full-load amps using the manufacturer's table or dial — never from the branch breaker size.",
    "Distinguish short-circuit/ground-fault protection from overload protection by the fault each one answers and its speed of response.",
    "Diagnose a tripped overload as a symptom to be explained, and explain why oversizing protection to stop trips destroys motors."
  ],
  sections: [
    {
      heading: "What a Starter Is: Switch Plus Guardian",
      html: `
<p>A <strong>motor starter</strong> is two devices with two different jobs sharing one assembly: a <strong>contactor</strong> — an electrically operated switch whose coil, energized by the control circuit, closes heavy contacts to start and stop the motor — and an <strong>overload relay</strong> that watches motor current and opens the control circuit if the motor draws too much current for too long. Coil energized → contacts close → motor runs. Overload trips → coil circuit opens → contacts open → motor stops, even though the control circuit is still "calling."</p>
<p>On small single-phase equipment the same two jobs may be split between a plain contactor and the motor's own internal overload. On commercial three-phase equipment the starter is the standard package, often with one overload element per phase, so that the phase-loss condition of Module 4 — one line lost, the rest overcurrent — trips the starter before the windings are damaged.</p>
<p>Hold the two halves apart in your mind. Contactor problems are switching problems: burned poles, weak coils, chattering. Overload problems are sensing problems: wrong setting, failed heater, a motor genuinely in distress. Swapping the whole starter for every fault is parts-changing, not diagnosis.</p>
<div class="callout"><strong>Key idea:</strong> The contactor answers the control circuit. The overload answers the motor. When a unit will not run, establish which half is refusing — then ask why.</div>`
    },
    {
      heading: "How Overloads Sense Trouble: Heat and Electronics",
      html: `
<p>A motor is damaged by heat, and heat comes from current over time. Overloads are therefore deliberately <em>slow</em>: they must ignore the brief, heavy starting current every motor draws and trip only on current that persists long enough to endanger the windings. That designed-in delay is the defining feature of overload protection.</p>
<p><strong>Thermal overloads</strong> imitate the motor's heating. In a <strong>bimetal</strong> type, current (or a heater beside it) warms a strip of two bonded metals that expand at different rates; sustained overcurrent bends the strip until it mechanically trips the relay open — the same bimetal principle as many built-in motor protectors. In a <strong>melting-alloy</strong> ("heater") type, the motor current passes through a precisely sized heater element; sustained overcurrent melts a solder-type alloy joint that releases a ratchet and trips the device. Both types need cooling time before they can be reset — that behavior is information, not inconvenience.</p>
<p><strong>Electronic overloads</strong> measure current with sensors and compute the motor's thermal state electronically. They typically offer an adjustable current dial, selectable trip behavior for faster or slower response, and often phase-loss sensitivity — tripping quickly when one phase disappears instead of waiting for heat to build. Whichever type is fitted, the principle is identical: model the motor's heat, tolerate the start, trip the sustained excess.</p>
<div class="callout"><strong>Key idea:</strong> An overload is a stopwatch for heat, not a fuse for faults. It should sit silent through every healthy start and speak only when current stays high longer than a healthy motor would ever ask.</div>`
    },
    {
      heading: "Sizing and Setting: The Nameplate Rules",
      html: `
<p>Overload protection is sized to <strong>the motor it protects</strong>, from that motor's nameplate full-load current (FLA), using the starter manufacturer's heater table or dial setting for that value. Not the wire size. Not the breaker. Not the starter's maximum rating. The nameplate.</p>
<p><strong>Worked example.</strong> A motor nameplate reads FLA 12 A. You select the heater from the starter maker's table whose range covers 12 A for that starter, or you set the adjustable dial to 12 A — following that manufacturer's instructions for the specific relay, because tables and dial conventions are manufacturer equipment data, not field improvisation. Now the companion check: the same circuit's breaker might legitimately be much larger (Module text, next section, explains why) — and that larger breaker tells you <em>nothing</em> about where the overload belongs.</p>
<p>Two sizing sins fill service trucks with dead motors. <strong>Oversizing</strong> the heaters or dial "to stop nuisance trips" converts the overload into a decoration: the motor can now cook at a current the relay considers normal. <strong>Undersizing</strong> creates genuine nuisance trips on hot days and heavy loads, which tempts the next technician to commit the first sin. Both begin with not reading the nameplate.</p>
<p>Ambient matters too: a thermal overload in a blazing rooftop starter box and a motor in a cool airstream age differently, which is one reason electronic relays and manufacturer guidance exist. When settings are in question, the manufacturer's table for that exact relay is the authority — and electrical code (NEC Article 430 governs motors and their protection in the U.S.) is the framework your local requirements build on.</p>
<div class="callout"><strong>Key idea:</strong> Protect the motor from its nameplate, protect the conductors with the breaker — and never let either device do the other's job.</div>`
    },
    {
      heading: "Two Different Faults, Two Different Protectors",
      html: `
<p>The most misunderstood idea in motor circuits is that there are <strong>two separate protective jobs</strong>, answered by different devices at different speeds:</p>
<ul>
<li><strong>Short-circuit and ground-fault protection</strong> — the breaker or fuses. A short circuit is a near-zero-resistance fault drawing enormous current. This protection must open <em>almost instantly</em>, before conductors and equipment are destroyed by the fault energy. It is sized to protect the circuit conductors and to ride through motor starting current — which is why its rating can be far above the motor's running current.</li>
<li><strong>Overload protection</strong> — the starter's overload relay (or the motor's internal protector). An overload is a modest excess — a motor straining at, say, well above its FLA for minutes. The breaker barely notices current like that; the overload exists to catch exactly this slow, winding-cooking condition.</li>
</ul>
<p>This division explains the nameplate puzzle from the last section: a motor with FLA 12 A can correctly live on a breaker rated well above 12 A, because the breaker is waiting for a short circuit, while the overload at 12 A guards the motor. Neither is "wrong-sized," and substituting one's judgment for the other's — a bigger overload because the breaker is big, or alarm that the breaker exceeds FLA — marks a technician who has merged two jobs into one.</p>
<div class="callout"><strong>Key idea:</strong> Breaker = fast, huge faults, protects conductors. Overload = slow, modest excess, protects the motor. A tripped overload and a tripped breaker are different sentences in different languages; learn to read both.</div>`
    },
    {
      heading: "When an Overload Trips: Diagnose, Don't Just Reset",
      html: `
<p>An overload trip is a <strong>report</strong>, not a repair order. The relay is telling you the motor drew too much current for too long. Resetting it without finding the reason invites a repeat trip — or worse, teaches the customer to keep resetting until the motor fails permanently.</p>
<p>Work the cause list in order of what the equipment can tell you:</p>
<ul>
<li><strong>Measure actual current</strong> on all lines once the motor runs again, and compare with nameplate FLA. Real overcurrent means a real load or supply problem.</li>
<li><strong>Check voltage at the motor under load</strong> (Module 1 voltage-drop method): low voltage makes a motor draw more current to do the same work and is a classic overload cause.</li>
<li><strong>Check balance on three-phase:</strong> one high leg points to phase trouble or a failing starter pole (Module 4).</li>
<li><strong>Inspect the mechanical side:</strong> tight bearings, a binding pump, an over-tensioned belt, a dirty coil forcing a fan to labor — motors trip overloads for mechanical reasons wearing electrical clothes.</li>
<li><strong>Verify the setting last:</strong> confirm the heaters or dial match this motor's nameplate — wrong protection is possible, but it is the conclusion of the investigation, not its beginning.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Never upsize heaters or a dial to cure tripping. The trip is the cheapest warning you will ever get; silencing the messenger converts a service call into a motor replacement.</div>`
    }
  ],
  keyTerms: [
    { term: "Motor starter", def: "A contactor combined with overload protection in one assembly; the contactor switches the motor, the overload guards it." },
    { term: "Contactor", def: "An electrically operated heavy switch: a coil, energized by the control circuit, that closes main contacts to power a motor or other large load." },
    { term: "Overload relay", def: "The sensing half of a starter that opens the coil circuit when motor current stays excessive long enough to endanger the windings." },
    { term: "Full-load amps (FLA)", def: "The current a motor draws at rated load, printed on its nameplate; the value overload protection is selected from." },
    { term: "Heater element", def: "In a melting-alloy overload, the precisely sized component, chosen from the manufacturer's table for the motor's FLA, whose heat trips the relay." },
    { term: "Bimetal overload", def: "A thermal overload whose two-metal strip bends with heat from sustained overcurrent and mechanically trips the device open." },
    { term: "Melting-alloy overload", def: "A thermal overload in which sustained overcurrent melts a solder-type joint, releasing the mechanism that trips the relay." },
    { term: "Electronic overload", def: "An overload relay that senses current electronically and computes the motor's thermal state; typically adjustable, and often phase-loss sensitive." },
    { term: "Trip", def: "The opening of a protective device in response to a fault or overload condition; a report to be diagnosed, not merely reset." },
    { term: "Manual reset", def: "A protective device that stays open until a person resets it — deliberate, so someone investigates the cause of the trip." },
    { term: "Short-circuit protection", def: "Fast-acting breaker or fuse protection against near-zero-resistance faults drawing extreme current; protects conductors and equipment." },
    { term: "Ground-fault (circuit) protection", def: "Protection that opens the circuit when current leaks to ground through an unintended path, as in a grounded winding." },
    { term: "Overload condition", def: "A modest but sustained current above rating — a straining motor — that overheats windings over minutes rather than destroying the circuit instantly." },
    { term: "Starting (inrush) current", def: "The brief heavy current a motor draws at start; overloads are designed with time delay to ignore it, breakers are sized to ride through it." },
    { term: "Service factor context", def: "Motors are applied within their nameplate ratings; protection selection follows the nameplate and the relay manufacturer's data, not rules of thumb." },
    { term: "Phase-loss protection", def: "Overload or monitor features that trip the starter quickly when one phase is lost, before the remaining windings overheat." },
    { term: "Nuisance trip", def: "A protective opening with no genuine fault behind it; its cure is finding why the device misread conditions, never oversizing the protection." },
    { term: "NEC Article 430", def: "The section of the U.S. National Electrical Code covering motors, motor circuits, and their protection — the framework local rules build on." }
  ],
  video: {
    title: "How a Magnetic Contactor Works Inside | 3D Animation Explained",
    embedUrl: "https://www.youtube.com/embed/wPjB6Qm4D3k",
    note: "A 3D look inside a magnetic contactor — coil, core, armature, main and auxiliary contacts — that ends by pairing the contactor with a thermal overload relay to form a direct-on-line starter, exactly the two-halves idea of this module. Watch the auxiliary contact section closely; Module 6 puts that contact to work as the holding contact.",
    more: [
      { title: "The Master Guide to Fixing Blown Overloads & Tripping Motor Starters! 📐⚡", url: "https://www.youtube.com/watch?v=-7xPtvkTaCo" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A technician replaces a tripped overload's heaters with the next size larger 'because it kept tripping on hot afternoons.' Identify everything wrong with this repair.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The trip was a report — hot afternoons suggest high load, high ambient, low voltage, or a straining motor, none of which was measured. Step 2: Larger heaters raise the current at which protection acts, so the motor can now overheat inside its 'protected' range — the overload has been converted into decoration. Step 3: Correct work: measure running current against nameplate FLA, check voltage under load and three-phase balance, inspect the mechanical load and the starter's ambient, and only then verify the heaters match the manufacturer's table for this motor's FLA.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A motor nameplate reads FLA 18 A. The starter is an adjustable electronic overload. State exactly what value the dial should be set to, and what document governs the setting if the relay's convention is unclear.</p>",
      solution: "<p><strong>Answer:</strong> Set the dial to the motor's nameplate full-load current: <strong>18 A</strong>. If the relay's dial convention (for example, whether the dial reads FLA directly) is unclear, the governing document is the <strong>starter manufacturer's instruction/table for that specific relay</strong> — not the breaker size, not the wire size, and not habit.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Sort these events to the protector that should answer each: (a) a chafed wire shorts line to line; (b) a pump bearing stiffens over a month until the motor draws 130% of FLA continuously; (c) a winding shorts to the motor frame.</p>",
      solution: "<p><strong>Answer:</strong> (a) <strong>Breaker/fuses (short-circuit protection)</strong> — extreme current must be interrupted almost instantly. (b) <strong>Overload relay</strong> — a modest sustained excess the breaker would ignore; the overload's time delay tolerates starts but not a continuous strain. (c) <strong>Short-circuit/ground-fault protection</strong> — a winding-to-frame fault is a ground fault drawing fault current, answered by the breaker/fuse path (and it is also why the motor is condemned once found).</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why doesn't a healthy motor's starting current trip its overload, even though that current is several times FLA?</p>",
      solution: "<p><strong>Answer:</strong> Because overload relays are deliberately time-delayed thermal models of the motor. A healthy start lasts seconds; winding damage from overcurrent needs sustained time at temperature. The relay 'integrates' current over time just as the motor heats, so brief inrush passes and only current that persists beyond the motor's thermal endurance trips the device. A breaker, by contrast, is sized to ride through inrush magnetically while still catching instantaneous faults.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> On a three-phase starter that trips after about twenty minutes of running, your clamp meter shows the three lines at currents that are notably unequal, with one leg far above nameplate FLA and one leg near it. Give the most likely fault family and your next two tests.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Unequal line currents on a three-phase motor point to <strong>supply/starter phase trouble</strong> — a failing (high-resistance or intermittently opening) starter pole, a weak termination, or a supply imbalance driving the motor toward single-phasing. Step 2: Test one — measure all three line-to-line voltages at the starter under load. Step 3: Test two — voltage-drop across each closed starter pole under load (Module 1): the pole with a real drop is the failing contact. Fix the phase problem; the overload was reporting, correctly, the whole time.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain to a customer — in two or three plain sentences, no jargon — why you will not 'just put in a bigger overload' to stop their unit from shutting off.</p>",
      solution: "<p><strong>Sample answer:</strong> 'That device is the motor's heat alarm, set for exactly the motor you own. If I set it higher, the alarm stays quiet while the motor slowly cooks — and then we're replacing a motor instead of fixing what's making it work too hard. Let me find what's overloading it; that's the repair that lasts.'</p>"
    }
  ],
  quiz: [
    {
      q: "A motor starter is best described as:",
      choices: ["A contactor combined with overload protection", "A larger circuit breaker", "A start capacitor with a relay", "A variable-speed drive"],
      answer: 0,
      explanation: "Correct: (a). Starter = contactor (switching) + overload relay (protection) in one assembly. (b) A breaker provides short-circuit protection but is not a starter and offers no motor overload sensing. (c) That is a hard-start kit for single-phase motors. (d) A drive controls speed electronically — a different device class."
    },
    {
      q: "Overload protection for a motor is selected from:",
      choices: ["The branch breaker rating", "The conductor size", "The motor's nameplate full-load amps, using the starter manufacturer's table or dial", "The starter's maximum horsepower rating"],
      answer: 2,
      explanation: "Correct: (c). The overload guards this specific motor, so its setting follows the motor's FLA per the relay maker's data. (a) The breaker is sized for short-circuit duty and conductor protection, often well above FLA. (b) Wire size follows circuit rules, not the motor's thermal limit. (d) The starter's capacity ceiling says what it can carry, not what this motor should be protected at."
    },
    {
      q: "Why are overload relays built with a time delay?",
      choices: ["To make resetting slower", "So the brief, heavy starting current of a healthy motor does not trip them", "To protect against short circuits faster", "Because bimetal is a slow metal"],
      answer: 1,
      explanation: "Correct: (b). The delay models motor heating: seconds of inrush are harmless, minutes of excess are not. (a) Reset convenience is not the purpose. (c) Short circuits are the breaker's fast job; overloads deliberately do not compete there. (d) The bimetal's thermal behavior is the mechanism, but the design goal is tolerating starts while catching sustained overloads."
    },
    {
      q: "The protective device that answers a line-to-line short circuit is the:",
      choices: ["Overload relay", "Breaker or fuses", "Contactor coil", "Potential relay"],
      answer: 1,
      explanation: "Correct: (b). Short-circuit current is enormous and must be cleared almost instantly by the breaker or fuses. (a) Overloads are slow thermal devices for modest sustained excess; they are not short-circuit protection. (c) A coil is a control element, not a protector. (d) A potential relay is a starting switch for single-phase compressors."
    },
    {
      q: "A motor drawing a continuous current well above FLA but far below short-circuit levels will be protected by:",
      choices: ["The breaker, instantly", "The overload, after its time delay", "Nothing — that range is unprotected", "The thermostat"],
      answer: 1,
      explanation: "Correct: (b). That middle range — sustained modest excess — is precisely the overload relay's territory; its thermal delay expires and it opens the coil circuit. (a) The breaker is calibrated for far larger fault currents and will sit silent. (c) The range is protected — by the overload, which exists for exactly this gap. (d) The thermostat commands operation; it is not motor protection."
    },
    {
      q: "Electronic overload relays commonly add which capability beyond basic thermal overloads?",
      choices: ["Refrigerant recovery", "Adjustable current setting and often phase-loss sensitivity", "Capacitor testing", "Automatic motor rewinding"],
      answer: 1,
      explanation: "Correct: (b). Sensing current electronically allows a dial set to FLA and fast response to a lost phase. (a) Recovery is refrigerant work for a different machine entirely. (c) Capacitor testing is a meter function. (d) No protective relay repairs windings."
    },
    {
      q: "An overload trips repeatedly on a unit. The professional response is to:",
      choices: ["Install larger heaters so the job is finished", "Reset it and advise the customer to call again if it recurs", "Measure current and voltage under load, check balance and the mechanical load, then verify the setting against the nameplate", "Replace the motor first, then investigate"],
      answer: 2,
      explanation: "Correct: (c). A trip is data: verify real current, supply voltage under load, phase balance, mechanical strain, and only lastly the protection setting itself. (a) Oversizing silences the protection and cooks the motor. (b) Resets without diagnosis guarantee a callback and possible motor loss. (d) Replacing the motor before finding the cause can feed a new motor to the same fault, e.g., a lost phase."
    },
    {
      q: "In a melting-alloy overload, the component chosen from a table for the motor's FLA is the:",
      choices: ["Contactor coil", "Heater element", "Run capacitor", "Time-delay fuse"],
      answer: 1,
      explanation: "Correct: (b). The heater's thermal behavior is calibrated to the motor it protects, so the correct heater for the nameplate FLA comes from the starter manufacturer's table. (a) Coils are chosen by control voltage. (c) Capacitors belong to single-phase motor starting/running circuits. (d) Fuses provide short-circuit protection, a different job (and are not selected as overload heaters)."
    }
  ],
  studyGuide: `
<h3>Module 5 — Motor Starters, Overloads &amp; Protection: Quick Reference</h3>
<p><strong>Starter = contactor + overload relay.</strong> Contactor answers the control circuit; overload answers the motor. Diagnose which half is refusing.</p>
<p><strong>Overload types:</strong> bimetal (strip bends with heat), melting-alloy (solder joint melts, heater sized by table), electronic (senses current, computes heat, often phase-loss sensitive). All share a deliberate time delay so healthy starting inrush never trips them.</p>
<p><strong>Sizing:</strong> from the protected motor's nameplate FLA via the manufacturer's heater table or dial — never from breaker size, wire size, or starter maximum.</p>
<p><strong>Two protection jobs:</strong> breaker/fuses = short-circuit &amp; ground-fault, near-instant, protects conductors. Overload = sustained modest excess, slow, protects the motor. A breaker rated above FLA alongside an overload set at FLA is correct, not a contradiction.</p>
<p><strong>Trip response:</strong> measure current vs FLA → voltage under load → phase balance → mechanical load → setting last. Never upsize protection to stop trips.</p>
<p><strong>Watch out:</strong> thermal overloads need cool-down before reset; a relay that resets instantly and trips again is telling the same true story twice.</p>
`
};
