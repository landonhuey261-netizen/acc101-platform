// HVAC 117 - Module 9: Electronic Controls & Sensors
module.exports = {
  number: 9,
  slug: "electronic-controls-sensors",
  title: "Electronic Controls & Sensors",
  estTime: "3–4 hours",
  objectives: [
    "Describe the sense–decide–act loop by which a control board runs modern HVAC equipment.",
    "Explain NTC and PTC thermistor behavior and test a thermistor against its manufacturer's temperature–resistance chart.",
    "Explain how a pressure transducer converts pressure to a voltage signal and verify one using a reference supplied in the test data.",
    "Interpret common signal ranges (a supplied DC voltage scale and 4–20 mA loops) quantitatively.",
    "Use board fault codes and LED behavior as starting evidence without treating them as verdicts, and apply a sensor-versus-board isolation method."
  ],
  sections: [
    {
      heading: "Boards Think in a Loop: Sense, Decide, Act",
      html: `
<p>A mechanical control is a switch with an opinion about one variable. An electronic <strong>control board</strong> is a small computer running a loop, many times a second: <strong>sense</strong> the world through its inputs, <strong>decide</strong> by comparing those inputs with its programmed rules and setpoints, and <strong>act</strong> through its outputs — relays that close contactor circuits, signals that drive fan motors, commands that stage heat or start defrost. Then it senses again.</p>
<p>Inputs are sensors and switches: thermistors reporting temperatures, transducers reporting pressures, float and limit switches reporting states, thermostat calls arriving as 24 V signals. Outputs are the familiar loads of Modules 5–8 — but now a relay on a board, not a contact in a wire run, may be the thing that closes.</p>
<p>This architecture changes troubleshooting philosophy. The board is only as right as its <em>inputs</em>: a board making a perfectly logical decision from a lying sensor produces a perfectly wrong action. So the board-era diagnostic question is never just "what is the board doing?" but "what does the board <em>believe</em>, and is that belief true?" Fault codes, when they exist, report the board's belief — invaluable evidence, and still only evidence. The rest of this module is about auditing beliefs: testing the sensors that feed the board against independent measurements of the real world.</p>
<div class="callout"><strong>Key idea:</strong> Boards fail, but beliefs fail more often. Prove the sensor against reality before you price the board — a temperature you measure yourself and a resistance you measure yourself outrank any code.</div>`
    },
    {
      heading: "Thermistors: Temperature as Resistance",
      html: `
<p>A <strong>thermistor</strong> is a resistor whose resistance changes predictably with temperature. HVAC boards overwhelmingly use the <strong>NTC</strong> type — Negative Temperature Coefficient: as temperature <em>rises</em>, resistance <em>falls</em>. The <strong>PTC</strong> type does the opposite and appears in roles like motor protection (Module 5) rather than temperature sensing. A very common sensing standard is the "10K" thermistor, specified as 10,000 Ω at 77 °F (25 °C); other ratings exist, which is why the manufacturer's chart for the specific sensor is the only authority for a pass/fail judgment.</p>
<p>The board reads the thermistor by placing it in a voltage-divider circuit and measuring the resulting voltage — turning resistance into a temperature the program can use. Every failure mode distorts that chain:</p>
<ul>
<li><strong>Open sensor or broken lead:</strong> resistance goes to infinity; the board reads an impossible extreme temperature (or a sensor fault).</li>
<li><strong>Shorted sensor or pinched leads:</strong> resistance near zero; the board reads the opposite extreme.</li>
<li><strong>Drifted sensor:</strong> resistance plausible but wrong for the actual temperature; the board runs the equipment on a quietly false reality — wrong defrost decisions, wrong staging, comfort complaints with no fault code at all.</li>
</ul>
<p><strong>Testing method.</strong> Power down, disconnect the sensor from the board (so the board's circuitry cannot color the reading), measure the sensor's temperature independently at the sensor (a thermometer or clamp probe on the same surface/air), measure its resistance with your ohmmeter, and compare with the manufacturer's chart for that exact sensor at that temperature. Agreement (within the chart's stated tolerance, where given) clears the sensor; disagreement condemns it. Also check the reading <em>through the harness</em> — a good sensor behind a corroded connector is a bad input.</p>
<div class="callout"><strong>Key idea:</strong> NTC: hot = low ohms, cold = high ohms. A thermistor is never 'good' in the abstract — only accurate or inaccurate at a measured temperature, against its own chart.</div>`
    },
    {
      heading: "Pressure Transducers: Pressure as Voltage",
      html: `
<p>A <strong>pressure transducer</strong> (often called a pressure sensor) converts refrigerant or air pressure into an electrical signal — commonly a DC voltage that varies linearly with pressure — so a board can know pressures continuously, not just at a switch's two setpoints (Module 8). With continuous pressure, boards can protect compressors intelligently, control electronic expansion valves, and report real operating data.</p>
<p>A typical arrangement supplies the transducer with a stable DC power pair and reads a signal wire whose voltage maps across the transducer's rated pressure range. The mapping is the manufacturer's data for that part — which means any honest field test states its reference before it computes. <strong>Worked example with a stated reference:</strong> a transducer is documented as 0.5 V at 0 psig and 4.5 V at 500 psig. The scale is therefore linear at (500 − 0) ÷ (4.5 − 0.5) = 125 psi per volt above the 0.5 V floor. Your gauge reads 250 psig on that line, so the expected signal is 0.5 + (250 ÷ 125) = 0.5 + 2.0 = 2.5 V. You measure 2.5 V at the board's input: the transducer is telling the truth — if the board then acts as if pressure were wildly different, suspicion moves to the board or its configuration. Measure 0.1 V instead, and the transducer or its power/signal wiring is lying before the board ever votes.</p>
<p>Grounds and supply matter as much as the signal wire: a transducer fed low supply voltage cannot produce a truthful signal span. Test all three wires — supply, ground, signal — against the manufacturer's documentation for that model.</p>
<div class="callout"><strong>Key idea:</strong> Verify a transducer in three numbers: supply present, ground solid, and signal matching an independent gauge reading through the part's documented scale. Skip the scale, and you are not testing — you are guessing with a meter.</div>`
    },
    {
      heading: "Other Signals: 4–20 mA Loops and Switch Inputs",
      html: `
<p>Commercial and larger systems often send sensor information as a <strong>4–20 mA current loop</strong>: the sensor regulates loop current so that the bottom of its measurement range is 4 mA and the top is 20 mA, with values between in strict proportion. Current signaling is prized because wire resistance (Module 1) cannot change a current the way it distorts a voltage, and because a loop reading of 0 mA announces a broken wire unambiguously — a live-zero diagnostic built into the standard.</p>
<p><strong>Worked example with a stated range:</strong> a transducer on a 4–20 mA loop is documented for 0–100 psi. The span is 16 mA for 100 psi, so each mA is worth 100 ÷ 16 = 6.25 psi. Measured loop current is 12 mA, which is (12 − 4) = 8 mA above the floor: 8 × 6.25 = 50 psi — exactly mid-range, as a halfway current should give. Your gauge reading near 50 psi confirms the loop; far from it, the sensor or loop wiring is the story.</p>
<p>Not every board input is analog. <strong>Discrete inputs</strong> — pressure switches, float switches, limit switches, thermostat calls — arrive as simple on/off voltage states, and the board's 'decisions' about them are only as good as the wiring delivering them (Modules 6–8 again). A recurring theme of board-era service: the exotic input gets blamed while a humble float switch full of slime is the actual author of the shutdown.</p>
<div class="callout"><strong>Key idea:</strong> Analog signals (voltage scales, 4–20 mA) carry measurements; discrete inputs carry votes. Test measurements against independent gauges and thermometers; test votes with the rung logic you already know.</div>`
    },
    {
      heading: "Fault Codes, Boards, and the Isolation Method",
      html: `
<p>Boards report their beliefs as <strong>fault codes</strong> — blink patterns, LED displays, or communicating-system messages. Used well, a code narrows the world: it tells you which input the board distrusts or which output failed to prove itself. Used badly, a code becomes a parts list: "sensor code, install sensor" — an approach that fails whenever the code's true author is the harness, the connector, the sensor's mounting, or the board itself.</p>
<p>The professional isolation sequence for any sensor-related code or complaint:</p>
<ol>
<li><strong>Measure reality independently.</strong> Actual temperature (thermometer) or pressure (gauges) at the sensor's location.</li>
<li><strong>Measure the sensor alone.</strong> Disconnected, against its chart or documented scale (Sections 2–3).</li>
<li><strong>Measure the sensor through its harness at the board.</strong> Same value as at the sensor? The delivery path is clean. Different? The harness/connectors are the fault.</li>
<li><strong>Only then judge the board.</strong> A board receiving a truthful, correctly delivered input and still acting on a false belief — or failing to drive a proven output load — has finally earned condemnation, with evidence at every prior step.</li>
</ol>
<p>Also respect board-handling basics: kill power before unplugging harnesses, note that some boards hold configuration in jumpers, switches, or model plugs that must match the old board's setup, and photograph everything before removal. A correctly diagnosed board replaced with a mis-configured twin is a new fault wearing a new part.</p>
<div class="callout"><strong>Key idea:</strong> Reality → sensor → harness → board. The order is the method; skipping to the last step is how good boards end up in the scrap bin and bad sensors stay in the unit.</div>`
    }
  ],
  keyTerms: [
    { term: "Control board", def: "An electronic controller that senses inputs, decides by programmed rules, and drives outputs — the successor to purely electromechanical control chains." },
    { term: "Sense–decide–act loop", def: "The board's continuous cycle of reading inputs, comparing them with rules and setpoints, and energizing outputs." },
    { term: "Thermistor", def: "A temperature-sensitive resistor used as a board input; its resistance follows a manufacturer-published temperature chart." },
    { term: "NTC thermistor", def: "Negative Temperature Coefficient: resistance falls as temperature rises; the standard HVAC temperature-sensing type (e.g., 10,000 Ω at 77 °F for a common 10K sensor)." },
    { term: "PTC thermistor", def: "Positive Temperature Coefficient: resistance rises with temperature; used in roles such as motor protection rather than sensing." },
    { term: "Voltage divider", def: "The circuit a board uses to read a thermistor: the sensor's changing resistance produces a changing voltage the board measures." },
    { term: "Sensor drift", def: "A sensor whose reading is plausible but inaccurate for the true condition, causing wrong board decisions without triggering a fault code." },
    { term: "Pressure transducer", def: "A sensor converting pressure into a proportional electrical signal (commonly a DC voltage) for continuous board monitoring." },
    { term: "Ratiometric / documented scale", def: "A transducer's published mapping between pressure and signal (for example, 0.5 V at 0 psig to 4.5 V at 500 psig in the module's worked example); the required reference for any field test." },
    { term: "4–20 mA loop", def: "A current-signaling standard where 4 mA is the bottom of range and 20 mA the top; immune to wire-resistance distortion, and 0 mA unambiguously means a broken loop." },
    { term: "Analog input", def: "A board input carrying a continuous measurement (temperature, pressure) as a varying voltage, resistance, or current." },
    { term: "Discrete input", def: "A board input carrying a simple on/off state — a switch contact or a 24 V call present or absent." },
    { term: "Fault code", def: "A board-reported indication of which input or output the board distrusts; evidence to start an investigation, not a verdict." },
    { term: "Harness", def: "The wired connector set between sensors/actuators and the board; corrosion or backed-out pins in it corrupt truthful sensors." },
    { term: "Model plug / configuration", def: "The jumpers, switches, or plug that tell a replacement board which equipment it controls; must match the application or the new board behaves wrongly." },
    { term: "Electronic expansion valve (EEV context)", def: "A refrigerant metering valve positioned by a board using transducer and thermistor inputs — an example of why continuous sensing matters." },
    { term: "Board relay output", def: "A small relay on the board that switches a load circuit; a failed board relay mimics a failed external contactor or control." },
    { term: "Independent measurement", def: "Checking a sensor's claim against your own thermometer or gauges — the foundation of sensor-versus-board isolation." }
  ],
  video: {
    title: "HVAC Pressure Transducer Operation and Testing!",
    embedUrl: "https://www.youtube.com/embed/5Y46m_LJn30",
    note: "This AC Service Tech training video explains how a pressure transducer works and demonstrates testing one against known pressures and voltages — the documented-scale method of this module. Pair it with the thermistor lesson in the 'more' list for the temperature side of board inputs.",
    more: [
      { title: "THERMISTOR Operation and Testing! Inverter and Mini Split Training!", url: "https://www.youtube.com/watch?v=V0cyVnTTMBs" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A board shows a coil-sensor fault code on a heat pump. Describe the four-step isolation you will perform before ordering any part, and what each step can prove.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Measure the coil's actual temperature independently (probe on the coil) — establishes reality. Step 2: Disconnect the thermistor and compare its resistance with the manufacturer's chart at that measured temperature — proves or condemns the sensor. Step 3: Reconnect and measure the same resistance through the harness at the board plug — a different value convicts the harness/connectors. Step 4: Only if reality, sensor, and harness all check true do you judge the board (or its configuration). The code started the investigation; it does not get to finish it.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the module's worked transducer reference (0.5 V at 0 psig, 4.5 V at 500 psig): your gauge reads 375 psig. What signal voltage should a truthful transducer produce?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Scale = 500 psi ÷ (4.5 − 0.5) V = 125 psi per volt above the 0.5 V floor. Step 2: Volts above floor = 375 ÷ 125 = 3.0 V. Step 3: Signal = 0.5 + 3.0 = <strong>3.5 V</strong>. A measurement near 3.5 V clears the transducer; a wildly different value points at the transducer or its wiring.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 4–20 mA loop sensor is documented for 0–200 °F. The loop measures 8 mA. What temperature is the sensor reporting? Your thermometer beside it reads within a degree of your answer — interpret.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Signal above floor = 8 − 4 = 4 mA. Step 2: Fraction of span = 4 ÷ 16 = 0.25. Step 3: Temperature = 0.25 × 200 = <strong>50 °F</strong>. Step 4: Your thermometer agrees, so the sensor and loop are truthful — whatever the board is doing wrong lies downstream (board or configuration), not in this input.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An NTC thermistor circuit behaves as if the sensed space is much colder than it is. Give three electrical causes consistent with an NTC sensor, ranked by where they occur in the input chain.</p>",
      solution: "<p><strong>Answer:</strong> For an NTC sensor, 'colder than reality' means the board sees <em>higher</em> resistance than the true temperature warrants. Causes: (1) Sensor: the thermistor has drifted high or is the wrong replacement rating for its chart. (2) Harness: corroded or loose connections adding series resistance between sensor and board. (3) Sensor placement: the sensor is genuinely in a colder spot than the space it claims to measure (fallen off its pipe, sensing the wrong surface) — electrically truthful, physically misplaced. Test in that chain order: sensor alone, through the harness, and inspect its mounting.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A transducer's signal wire reads exactly 0 V at the board, with its documented scale starting at 0.5 V. List what you check before condemning the transducer, and why.</p>",
      solution: "<p><strong>Answer:</strong> A signal below the documented floor usually means the transducer is not producing a signal at all. Check: (1) supply voltage at the transducer (per its documentation) — no power, no signal; (2) its ground connection — a floating ground kills the output; (3) continuity of the signal wire back to the board — an open wire reads 0 V at the receiving end. Only after power, ground, and path are proven does a persistent 0 V output convict the transducer itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why 'the board shows a sensor code' and 'the sensor is bad' are different statements, in two or three sentences a supervisor would accept.</p>",
      solution: "<p><strong>Sample answer:</strong> 'The code tells me the board doesn't trust what it's seeing on that input — it doesn't tell me why. The sensor, its harness, its mounting, and the board's own input circuit can all produce the same code, so I'll prove the sensor against a thermometer and its chart, then prove the harness, before anyone buys a part.'</p>"
    }
  ],
  quiz: [
    {
      q: "For an NTC thermistor, as the sensed temperature rises, its resistance:",
      choices: ["Rises", "Falls", "Stays constant", "Alternates with line frequency"],
      answer: 1,
      explanation: "Correct: (b). NTC means Negative Temperature Coefficient — hotter, lower ohms. (a) describes a PTC device. (c) A constant resistance would report nothing — it would not be a sensor. (d) Resistance in a thermistor follows temperature, not the AC cycle."
    },
    {
      q: "The correct way to judge a thermistor in the field is to:",
      choices: ["Check that it shows some resistance, any resistance", "Compare its measured resistance, at an independently measured temperature, with its manufacturer's chart", "Swap it with any thermistor from the truck", "Measure its voltage while connected and powered, and guess"],
      answer: 1,
      explanation: "Correct: (b). Thermistors are judged at a temperature, against their own chart — because ratings vary (10K is common, not universal). (a) 'Some resistance' passes drifted and wrong-type sensors. (c) A different rating guarantees a lying input. (d) A powered, connected voltage reflects the board's divider and proves nothing without the reference data."
    },
    {
      q: "Using the module's example scale (0.5 V = 0 psig, 4.5 V = 500 psig), a signal of 1.5 V corresponds to:",
      choices: ["50 psig", "125 psig", "250 psig", "375 psig"],
      answer: 1,
      explanation: "Correct: (b). The scale is 125 psi per volt above the 0.5 V floor: 1.5 V is 1.0 V above floor → 125 psig. (a) 50 psig would read 0.9 V. (c) 250 psig reads 2.5 V. (d) 375 psig reads 3.5 V (the module's Problem 2 pattern, reversed)."
    },
    {
      q: "A 4–20 mA loop reads 0 mA. The most direct interpretation is:",
      choices: ["The measurement is at the bottom of its range", "The loop is broken (open wire, dead sensor, or no loop power) — 4 mA, not 0, is the bottom of a live range", "The measured value is extremely high", "The board has shut down the system normally"],
      answer: 1,
      explanation: "Correct: (b). The live-zero design means a healthy loop never reads 0 mA; zero announces an open loop fault. (a) Bottom of range is 4 mA by definition. (c) The top of range is 20 mA, not zero. (d) Normal board states do not open the loop."
    },
    {
      q: "A board repeatedly acts on a temperature that your own thermometer says is wrong, yet no fault code appears. The most likely input problem is:",
      choices: ["An open sensor", "A shorted sensor", "A drifted sensor — plausible but inaccurate readings that fool the board without triggering a fault", "A failed board relay"],
      answer: 2,
      explanation: "Correct: (c). Drift produces values inside the believable range, so the board trusts them and no code sets — the silent failure. (a) An open sensor reads an impossible extreme and usually does set a fault. (b) Same reasoning for a short. (d) A relay failure affects an output's action, not the temperature the board believes."
    },
    {
      q: "Before condemning a control board for a sensor-related fault, the evidence order should be:",
      choices: ["Board first — it is the most expensive part, so rule it out early", "Reality (independent measurement) → sensor alone → sensor through its harness → board", "Replace the sensor first because it is cheapest", "Check refrigerant charge"],
      answer: 1,
      explanation: "Correct: (b). That sequence tests each link of the input chain in order and only convicts the board when truthful input is demonstrably arriving and being misused. (a) Price is not evidence. (c) Cheapest-first swapping is guessing with extra steps and can mask harness faults. (d) Charge does not repair electrical inputs (though separate symptoms may justify separate checks)."
    },
    {
      q: "A pressure transducer's signal can be verified only if you know:",
      choices: ["Its wire colors", "Its documented pressure-to-signal scale and an independent pressure reading", "The board's firmware version", "The age of the unit"],
      answer: 1,
      explanation: "Correct: (b). A voltage means nothing without the mapping that gives it units, and the mapping means nothing without a gauge truth to compare. (a) Colors vary and carry no calibration. (c) Firmware matters for configuration questions, not for whether a signal matches a gauge. (d) Age cannot convert volts to psi."
    },
    {
      q: "You measure a thermistor's resistance at the sensor and it matches the chart. At the board plug, through the harness, the same measurement is far higher. The fault is:",
      choices: ["The sensor", "The harness or its connectors adding resistance", "The board's program", "The thermometer you used"],
      answer: 1,
      explanation: "Correct: (b). The sensor is proven at its own terminals; resistance grew along the delivery path — corrosion, a backed-out pin, or a damaged conductor. (a) is excluded by the at-sensor test. (c) The board cannot change a resistance measured on a disconnected plug. (d) The thermometer was vindicated when the sensor-alone reading matched its chart."
    }
  ],
  studyGuide: `
<h3>Module 9 — Electronic Controls &amp; Sensors: Quick Reference</h3>
<p><strong>Board loop:</strong> sense → decide → act, continuously. Boards act on beliefs; audit beliefs against independent measurements before condemning boards.</p>
<p><strong>Thermistors:</strong> NTC = resistance falls as temperature rises (common 10K type: 10,000 Ω at 77 °F — always judge against the specific sensor's chart). Test disconnected, at an independently measured temperature. Open = one extreme, short = other extreme, drift = plausible-but-wrong, and drift sets no code.</p>
<p><strong>Transducers:</strong> pressure → proportional signal per the part's documented scale. Worked scale: 0.5 V @ 0 psig, 4.5 V @ 500 psig = 125 psi per volt above 0.5 V; 250 psig ↔ 2.5 V. Test supply, ground, and signal.</p>
<p><strong>4–20 mA:</strong> 4 mA = range bottom, 20 mA = top, linear between; 0 mA = broken loop.</p>
<p><strong>Isolation order:</strong> reality → sensor alone → through harness → board last. Photograph and record board configuration (jumpers/model plug) before any swap.</p>
<p><strong>Watch out:</strong> never measure a thermistor's resistance while it is connected and powered — you will read the board's divider network, not the sensor. And never substitute a thermistor of a different rating because the connector fits: the board will believe a fiction with total confidence.</p>
`
};
