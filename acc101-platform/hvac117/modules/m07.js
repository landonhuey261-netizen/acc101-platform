// HVAC 117 - Module 7: Thermostats & Low-Voltage Control Wiring
module.exports = {
  number: 7,
  slug: "thermostats-low-voltage-wiring",
  title: "Thermostats & Low-Voltage Control Wiring",
  estTime: "3–4 hours",
  objectives: [
    "Describe the 24 V control circuit from transformer to thermostat to load, and state what the VA rating of the transformer limits.",
    "State the standard terminal designations R, Rc, Rh, W, Y, G, C, and O/B and what each controls.",
    "Explain what a heat anticipator did in a mechanical thermostat and what replaced it in electronic thermostats.",
    "Calculate total control-circuit load in VA and current, and judge it against a transformer's rating.",
    "Diagnose classic low-voltage complaints: no common wire, jumper errors between Rc and Rh, and shorted thermostat cable."
  ],
  sections: [
    {
      heading: "The 24 V Control Circuit: Small Voltage, Whole System",
      html: `
<p>Nearly every residential and light-commercial HVAC system is commanded by a <strong>24 V AC control circuit</strong>. A step-down <strong>transformer</strong> takes line voltage (120 V or 240 V, depending on the equipment) and delivers nominally 24 V AC. That low voltage runs to the thermostat and the control board, and from there out to the loads it commands: contactor coils, gas valve, fan relays, reversing-valve solenoids — each an electromagnetic coil waiting for a thermostat contact to complete its circuit.</p>
<p>Why 24 V? It is high enough to operate coils reliably over long wire runs, low enough to be far safer to handle and to wire with light thermostat cable, and it isolates the delicate user-facing thermostat from line voltage. Module 6's ladder applies directly: the transformer secondary is the pair of rails, the thermostat contacts are the switches, the coils are the rung loads, and <strong>C (common)</strong> is the return rail that completes every circuit.</p>
<p>The transformer's <strong>VA rating</strong> is its budget: the total volt-amperes it can supply continuously. Every coil hung on the circuit spends from that budget. Exceed it and the symptoms are control-flavored misery — voltage sagging under load (Module 1: the transformer becomes the 'series resistance'), chattering contactors, a transformer running hot, and eventually an open transformer winding or a blown control fuse. The next section teaches you to audit the budget.</p>
<div class="callout"><strong>Key idea:</strong> Treat 24 V circuits with the same rigor as line circuits: they have a source with a finite capacity, loads with real current draws, and wiring faults with real consequences — just at thermostat scale.</div>`
    },
    {
      heading: "Auditing the Budget: VA Arithmetic",
      html: `
<p>Control loads are often rated in VA or in amperes at 24 V; either way the audit is simple addition followed by one division.</p>
<div class="formula">Total VA = sum of load VAs &nbsp;|&nbsp; I = VA ÷ 24 V</div>
<p><strong>Worked example.</strong> A job's control loads, from their nameplates and documentation, are: contactor coil 12 VA, gas valve 8 VA, and a fan relay coil 8 VA. Total = 12 + 8 + 8 = 28 VA. Current = 28 ÷ 24 = 1.17 A. Against a 40 VA transformer, the load uses 28 of 40 VA — a comfortable margin, leaving room for the inevitable accessory someone adds later.</p>
<p>Now stress the same arithmetic. Add loads until the total passes the transformer's rating — say accessories push the total to 48 VA on that 40 VA transformer — and the transformer is being asked for 120% of its continuous rating. Expect heat, shortened life, and voltage that collapses exactly when several coils pull in together — which is exactly when the customer notices equipment chattering and dropping out on the hottest day.</p>
<p>Two audit habits follow. First, when adding any accessory — a condensate pump safety, a humidifier solenoid, a new communicating thermostat's power draw — re-add the budget instead of assuming room exists. Second, when a transformer has failed, do not just replace it: an overloaded or shorted circuit will eat the new one on the same schedule. Find the load or the short first (Module 12's blown-fuse case study is this story).</p>
<div class="callout"><strong>Key idea:</strong> VA is a budget, and budgets are audited by addition. Twenty-eight on forty is a plan; forty-eight on forty is a callback with a date on it.</div>`
    },
    {
      heading: "Terminal Designations: The Alphabet of Control Wiring",
      html: `
<p>Standard terminal letters are the closest thing HVAC controls have to a universal language. Learn these cold:</p>
<ul>
<li><strong>R</strong> — 24 V hot from the transformer. <strong>Rc</strong> = R for cooling, <strong>Rh</strong> = R for heating, on systems with separate heating and cooling transformers; a jumper links Rc–Rh when one transformer serves both. Remove that jumper only when there truly are two transformers.</li>
<li><strong>C</strong> — common: the return side of the transformer. Traditionally the thermostat did not need it (it just switched R); modern electronic thermostats need C to power themselves.</li>
<li><strong>W</strong> — heat call: energizes the heating circuit (gas valve/furnace sequence).</li>
<li><strong>Y</strong> — cooling call: energizes the compressor contactor (and usually the cooling fan logic).</li>
<li><strong>G</strong> — fan call: energizes the indoor blower relay/board input for fan operation.</li>
<li><strong>O/B</strong> — heat-pump reversing valve: one terminal, two conventions — energized in cooling on one family of equipment (O) and in heating on another (B). Configuring it backward gives a heat pump that heats on a cooling call.</li>
</ul>
<p>Wire colors are a strong convention — R red, W white, Y yellow, G green, C often blue or black — but a convention is not a guarantee, especially in older or previously serviced buildings. <strong>Verify function at the terminals, never trust color alone.</strong> The most expensive sentence in control work is "the wire was the right color."</p>
<div class="callout"><strong>Key idea:</strong> Terminals are functions, not colors. Land every conductor by the letter it serves at both ends, photograph the original wiring before you touch it, and treat any Rc–Rh jumper as a deliberate decision, not decoration.</div>`
    },
    {
      heading: "Anticipators to Electronics: How Thermostats Got Smart About Overshoot",
      html: `
<p>A mechanical thermostat senses room air, but the heating system keeps radiating after the call ends. Without correction, room temperature overshoots the setpoint, then undershoots waiting for the next call — a slow, uncomfortable swing. The classic cure was the <strong>heat anticipator</strong>: a tiny adjustable heater inside the thermostat, wired in series with the heating circuit, that warmed the thermostat's sensor slightly <em>during</em> the call so the stat opened a bit early and let the system's residual heat coast the room exactly to setpoint.</p>
<p>The anticipator's setting mattered and was electrical: it was set to match the current of the control circuit it sat in — measured with a meter during setup — because the little heater's output depended on the current through it. Set wrong, the system either short-cycled (anticipator too aggressive) or overshot (too weak). Mis-set anticipators were a genuine trade skill and a genuine source of comfort callbacks.</p>
<p>Electronic and programmable thermostats replaced the heated bimetal with a thermistor sensor and logic: the stat learns or is configured with cycle-rate settings and ends calls by algorithm rather than by a heater. No anticipator exists to set — but the same comfort physics remains, and cycle-rate or swing settings are its modern knobs. Electronic stats also changed the wiring: they consume power continuously, needing either a C wire, batteries, or power-stealing designs — which is why "the new thermostat works until the battery dies" and "no C wire in the wall" are now standard diagnostic branches.</p>
<div class="callout"><strong>Key idea:</strong> The anticipator was analog intelligence: a heater that faked the sensor warm to defeat overshoot. Electronics do the same trick in software — and moved the failure modes from mis-set dials to missing common wires and configuration menus.</div>`
    },
    {
      heading: "Low-Voltage Fault Patterns",
      html: `
<p>Four low-voltage patterns generate a large share of no-heat and no-cool calls:</p>
<ul>
<li><strong>The shorted thermostat cable.</strong> A staple through a cable, a screw through a wall, or rodent/chafed insulation shorts R to C or to another conductor. Signature: blown control fuse or a dead transformer, often right after other work in the building. Diagnosis: disconnect loads and cable sections and re-test segment by segment (Module 11's half-splitting) — never keep feeding fuses into an unfound short.</li>
<li><strong>The missing C wire.</strong> An electronic stat installed on an old 4-wire run: works on batteries until they fade, reboots on every call, or steals power and chatters a relay. Cure: pull a C conductor, use an approved adapter, or choose a stat designed for the installation — per the manufacturers involved.</li>
<li><strong>The Rc–Rh jumper error.</strong> Jumper removed on a one-transformer system: the function fed by the unlinked R terminal dies (classically, heat works, cooling never calls, or vice versa). Jumper left in on a true two-transformer system: transformers tied together against instructions. Read the equipment before touching the jumper.</li>
<li><strong>Voltage sag under load.</strong> 24 V at rest, far less with coils pulled in: an overloaded or failing transformer (Section 2) or a high-resistance connection in the control path (Module 1's drop test, at 24 V scale). Measure under load, always.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Low-voltage faults are still faults: shorts blow fuses, budgets get overspent, and jumpers are decisions. The scale is smaller; the method — Module 11's method — is identical.</div>`
    }
  ],
  keyTerms: [
    { term: "Control transformer", def: "A step-down transformer supplying nominal 24 V AC control power from line voltage; rated in VA." },
    { term: "VA rating", def: "The continuous volt-ampere capacity of a transformer; the budget all connected control loads must fit within." },
    { term: "R terminal", def: "The 24 V hot feed to the thermostat from the transformer." },
    { term: "Rc / Rh", def: "Separate R terminals for cooling and heating transformers; jumpered together when a single transformer serves both." },
    { term: "C (common)", def: "The return side of the 24 V transformer; required by most electronic thermostats as their power return." },
    { term: "W terminal", def: "The heating call: thermostat output that energizes the heating sequence." },
    { term: "Y terminal", def: "The cooling call: thermostat output that energizes the compressor contactor circuit." },
    { term: "G terminal", def: "The fan call: thermostat output that energizes the indoor blower." },
    { term: "O/B terminal", def: "The heat-pump reversing-valve output; O energizes the valve in cooling on one equipment family, B in heating on another — configuration must match the equipment." },
    { term: "Heat anticipator", def: "An adjustable miniature heater in a mechanical thermostat, in series with the heat circuit and set to the circuit's current, that ended calls early to prevent temperature overshoot." },
    { term: "Cycle rate / swing", def: "Electronic thermostat settings that control how often and how far around setpoint the equipment cycles — the software successor to the anticipator." },
    { term: "Thermostat cable", def: "The multi-conductor low-voltage cable between thermostat and equipment; vulnerable to staple and screw shorts." },
    { term: "Power-stealing thermostat", def: "An electronic thermostat that powers itself by leaking a small current through a load circuit instead of using a C wire; can cause relay chatter on some equipment." },
    { term: "Control fuse", def: "A small fuse (on the equipment board or inline) protecting the 24 V circuit; its repeated blowing indicates a short to be found, not a fuse to be upsized." },
    { term: "Contactor chatter", def: "Rapid buzzing open-close cycling of a contactor from insufficient or unstable coil voltage — a symptom of sagging control voltage or a failing coil circuit." },
    { term: "Two-transformer system", def: "Equipment with separate heating and cooling transformers, requiring the Rc–Rh jumper to be removed and each R landed on its own feed." },
    { term: "Temperature overshoot", def: "Room temperature coasting past setpoint after a call ends, due to residual system heat — the problem anticipators and cycle algorithms exist to defeat." },
    { term: "Line-voltage thermostat", def: "A thermostat that switches line voltage directly (electric heat, some unit heaters) — not interchangeable with 24 V controls." }
  ],
  video: {
    title: "Thermostat Terminals Fully Explained",
    embedUrl: "https://www.youtube.com/embed/4ERgdc_RRBE",
    note: "A terminal-by-terminal walk-through of the standard designations — what each letter does and how the calls flow — that matches this module's table. Watch it with a thermostat wiring photo of your own if you have one, and name each conductor's function rather than its color.",
    more: [
      { title: "Thermostat Wiring Color Code [Decoded and Explained]", url: "https://www.youtube.com/watch?v=xQd6GERVzVM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Control loads on a proposed installation: contactor coil 10 VA, reversing-valve solenoid 6 VA, gas valve 9 VA, fan relay 6 VA. The transformer is rated 40 VA. Audit the budget and compute the total control current.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total VA = 10 + 6 + 9 + 6 = 31 VA. Step 2: Compare with the rating: 31 VA ≤ 40 VA — acceptable, with 9 VA of headroom. Step 3: Total current = 31 ÷ 24 = 1.29 A. <strong>Answers: 31 VA total, about 1.29 A, within budget.</strong> Note the audit assumes worst-case simultaneous operation — the safe assumption for control design.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> After a thermostat upgrade, a system heats normally but the outdoor unit never starts on a cooling call, and the thermostat shows no sign of life for cooling. The installer removed the Rc–Rh jumper 'because the stat manual showed it removed.' There is one transformer in the system. Explain the fault.</p>",
      solution: "<p><strong>Answer:</strong> With a single transformer, R power reaches only the terminal it is landed on. Removing the Rc–Rh jumper left the cooling side (Rc, and therefore the Y call path) unpowered: the thermostat can run its heating side from Rh, but a Y call switches a dead terminal. Cure: restore the jumper for this one-transformer system per the equipment's wiring — the manual diagram showing it removed assumed a two-transformer installation that this system is not.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A heat pump heats the house on a cooling call and cools on a heating call, right after a thermostat replacement. The refrigerant system is untouched. Most likely cause?</p>",
      solution: "<p><strong>Answer:</strong> The <strong>O/B reversing-valve configuration is backwards</strong> for this equipment family. The thermostat energizes the reversing valve on the wrong call, so the system runs in the opposite mode from the one requested. Fix the stat's O/B setting to match the equipment manufacturer's convention — no refrigerant work required. (Verify by checking which call energizes the valve solenoid with a meter, against the unit's documentation.)</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A mechanical thermostat consistently lets the house overshoot setpoint by several degrees in heating, then the customer reports long off-times. The anticipator is found set far below the measured circuit current. Explain the mechanism.</p>",
      solution: "<p><strong>Answer:</strong> The anticipator is a heater whose output depends on the current through the heat circuit; its dial must be set to that measured current. Set far too low, it produces too little anticipatory heat, so the thermostat's sensor doesn't get its early 'warm fake' — the call runs long, residual heat coasts the house well past setpoint (overshoot), and the long swing back produces the extended off-time. Correct setup: measure the heating control current and set the anticipator to that value per the thermostat's scale.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A new electronic thermostat reboots every time cooling starts and finally goes dark; the old mechanical stat worked for years on the same four wires. The four wires are R, W, Y, G. Explain and give two acceptable cures.</p>",
      solution: "<p><strong>Answer:</strong> The mechanical stat needed no power of its own — it was a passive switch. The electronic stat is itself a load and needs continuous power: with no <strong>C (common)</strong> conductor, it is living on batteries or stealing power, sagging and rebooting when a call changes the circuit, and dying when its reserve is gone. Cures: (1) run a C conductor (or repurpose a spare conductor in the cable, landed as C at both ends); (2) use a manufacturer-approved common-maker adapter or a thermostat designed and approved for no-C installation on this equipment.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> The control fuse blows the moment a cooling call starts, and blows again instantly with a replacement fuse. The heating calls work fine. Outline your isolation sequence without feeding it more fuses.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fault lives in something energized only by a cooling call: the Y path — thermostat Y conductor, the cable run, and the contactor coil circuit outdoors. Step 2: Power down; disconnect the Y conductor at the equipment board and at the outdoor unit, then test segments with an ohmmeter/continuity (cable conductor-to-conductor and to ground, coil resistance) instead of live fuses. Step 3: Reconnect segment by segment — board alone, then cable, then contactor coil — until the shorted segment identifies itself. Step 4: Repair the cause (chafed cable, shorted coil), then fit one correct fuse and prove a full cooling call.</p>"
    }
  ],
  quiz: [
    {
      q: "The C wire to an electronic thermostat is needed because it:",
      choices: ["Carries the cooling call", "Provides the return path so the thermostat can power itself continuously", "Is a spare conductor", "Grounds the thermostat to the chassis"],
      answer: 1,
      explanation: "Correct: (b). The thermostat itself is a load; R brings 24 V hot and C completes its power circuit. (a) The cooling call is Y. (c) C is a working conductor, not a spare. (d) Common is a circuit return, not an equipment ground — confusing the two creates real wiring errors."
    },
    {
      q: "Control loads total 36 VA on a 24 V circuit. The control current is:",
      choices: ["0.67 A", "1.5 A", "36 A", "864 A"],
      answer: 1,
      explanation: "Correct: (b). I = VA ÷ V = 36 ÷ 24 = 1.5 A. (a) 0.67 A inverts the division (24 ÷ 36). (c) 36 A confuses the VA figure with amperes. (d) 864 multiplies the two numbers, which gives watt-style product, not current."
    },
    {
      q: "On a one-transformer system, the Rc–Rh jumper must be:",
      choices: ["Removed, always", "Installed, so both thermostat power sections receive R", "Replaced with a resistor", "Moved to the C terminal"],
      answer: 1,
      explanation: "Correct: (b). One transformer feeds R to one point; the jumper distributes it to both the heating and cooling sides of the thermostat. (a) Removing it starves one side — a classic works-in-one-mode-only fault. (c) Nothing in residential control wiring calls for a jumper resistor. (d) Bridging R to C would short the transformer."
    },
    {
      q: "The heat anticipator in a mechanical thermostat was adjusted to match:",
      choices: ["The room temperature swing desired", "The current of the heating control circuit it was wired in series with", "The transformer's VA rating", "The gas valve's pressure setting"],
      answer: 1,
      explanation: "Correct: (b). The anticipator is a small heater whose warming effect depends on the current flowing through it, so its scale is set to that measured current. (a) Swing is a consequence of correct setting, not the setting reference. (c) VA rating is the transformer's capacity budget, not an anticipator input. (d) Gas pressure is a combustion adjustment, unrelated to the thermostat's anticipator."
    },
    {
      q: "A Y call from the thermostat directly results in:",
      choices: ["The indoor fan only", "The compressor contactor circuit being energized for cooling", "The gas valve opening", "The reversing valve de-energizing in all systems"],
      answer: 1,
      explanation: "Correct: (b). Y is the cooling output; it completes the contactor coil circuit (with the equipment's logic adding fan operation as designed). (a) Fan-only operation is the G call. (c) The gas valve answers W. (d) Reversing-valve response to Y depends on the O/B configuration and equipment family — 'in all systems' makes it false."
    },
    {
      q: "A transformer measures 24 V with no call, but voltage collapses and a contactor chatters when a call pulls in several coils. Likely causes include:",
      choices: ["The thermostat is set too low", "An overloaded transformer or a high-resistance connection in the control path", "Excess refrigerant charge", "A dirty air filter"],
      answer: 1,
      explanation: "Correct: (b). Voltage that holds at rest and sags under load is the signature of a source over its VA budget or of unwanted series resistance — Module 1's drop behavior at 24 V scale. (a) Setpoints command calls; they do not set voltage. (c) Refrigerant charge does not touch control voltage. (d) Filters affect airflow, not the transformer."
    },
    {
      q: "Wire color in thermostat cable should be treated as:",
      choices: ["A guarantee of function", "A helpful convention to be verified against terminal function at both ends", "Irrelevant — only length matters", "Set by the electrical code for low voltage"],
      answer: 1,
      explanation: "Correct: (b). Colors are customary (R red, W white, Y yellow, G green) but prior installers, splices, and older cables break the pattern; terminals define function. (a) Trusting color alone is a documented cause of miswired replacements. (c) Function matters most; color is evidence, not proof. (d) Thermostat color conventions are trade custom, not a code-mandated scheme you can rely on in existing work."
    },
    {
      q: "Total control load is 44 VA on a 40 VA transformer. The correct judgment is:",
      choices: ["Fine — transformers have hidden reserve", "Overloaded: expect heat, sagging voltage under combined calls, and shortened transformer life; reduce load or fit a properly rated transformer per the equipment manufacturer", "Fine if the fuse is upsized", "Overloaded only if the fuse blows"],
      answer: 1,
      explanation: "Correct: (b). The VA rating is a continuous-duty budget; exceeding it by 10% is a design fault regardless of whether a fuse has blown yet. (a) Continuous ratings are not suggestions. (c) A bigger fuse removes protection without adding capacity. (d) The fuse protects against shorts; chronic overload damages the transformer quietly first."
    }
  ],
  studyGuide: `
<h3>Module 7 — Thermostats &amp; Low-Voltage Control Wiring: Quick Reference</h3>
<p><strong>Circuit:</strong> transformer (line V → 24 V AC) → thermostat contacts → coils (contactor, gas valve, relays, solenoids) → back via C. The ladder rules of Module 6 apply at 24 V scale.</p>
<div class="formula">VA budget: total load VA must stay within the transformer rating. I = VA ÷ 24. Example: 28 VA of loads = 1.17 A on a 40 VA transformer — healthy headroom.</div>
<p><strong>Terminals:</strong> R = 24 V hot; Rc/Rh = split R for two-transformer systems (jumper them for one); C = common return (electronic stats need it to live); W = heat; Y = cool (contactor); G = fan; O/B = reversing valve (energized in cool on O systems, in heat on B systems — match the equipment).</p>
<p><strong>Anticipator (legacy):</strong> small series heater in mechanical stats, set to the measured heating-circuit current, ending calls early to beat overshoot. Electronic stats do it with cycle-rate/swing settings.</p>
<p><strong>Signature faults:</strong> blown control fuse on one call only → short in that call's path; stat reboots/dies on 4 wires → missing C; one mode dead after a stat swap → Rc–Rh jumper; 24 V at rest, sag under call → overload or bad connection.</p>
<p><strong>Watch out:</strong> colors are custom, terminals are truth. Photograph before you disconnect.</p>
`
};
