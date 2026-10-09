// HVAC 111 - Module 1: Electrical Safety & Lockout/Tagout
module.exports = {
  number: 1,
  slug: "electrical-safety-lockout-tagout",
  title: "Electrical Safety & Lockout/Tagout",
  estTime: "3–4 hours",
  objectives: [
    "Explain how electric current injures the body and why even low-voltage control circuits demand respect.",
    "Distinguish shock hazards from arc-flash and arc-blast hazards on HVAC/R equipment.",
    "Perform the lockout/tagout procedure in the correct order, following the basics of OSHA 29 CFR 1910.147.",
    "Prove a circuit is de-energized using the live-dead-live meter verification method.",
    "Select and inspect the personal protective equipment (PPE) appropriate for electrical service work.",
    "Recognize stored-energy hazards — capacitors, springs, pressure, and gravity — that survive after power is removed."
  ],
  sections: [
    {
      heading: "How Electricity Hurts: Shock, Burns, and Falls",
      html: `
<p>Electricity injures in three main ways: <strong>shock</strong>, <strong>burns</strong>, and the <strong>falls</strong> that shock causes. Shock happens when your body becomes part of a circuit — current enters at one contact point, travels through tissue, and exits at another. What matters most is the amount of current, the path it takes, and how long it flows. Current through the chest is the most dangerous path because it can interfere with the heart's rhythm.</p>
<p>It helps to think in orders of magnitude rather than memorize a chart. A current you can barely feel is around a thousandth of an ampere. Somewhat above that, muscles contract involuntarily — the dreaded "can't let go" reaction, where flexor muscles clamp your hand onto the conductor. Higher currents through the chest can throw the heart into fibrillation, and still higher currents cause deep internal burns. The lesson for the field is simple: there is no "small" contact with line voltage that you should treat casually.</p>
<p>Resistance decides how much current a given voltage pushes through you, and skin resistance changes dramatically with conditions. Dry, calloused skin resists far more than wet, sweaty, or broken skin. A technician kneeling on a damp concrete floor in August, sweat running down both arms, is a much better conductor than the same person in dry winter conditions. That is why the same 120-volt contact one tech shrugs off can seriously injure another.</p>
<div class="callout"><strong>Key idea:</strong> Voltage pushes, current injures, and resistance — including your skin's — decides how much current flows. You cannot control the voltage on the equipment, but you can control your contact points, your PPE, and whether the circuit is energized at all.</div>
<p>Burns are the most common electrical injury in the trades. Contact burns happen where current enters and exits. Arc burns happen at a distance: an electric arc is hotter than the surface of the sun at its core, and it radiates intense heat that can ignite clothing. Finally, never discount the fall: a mild shock on a ladder or rooftop edge can kill through the drop it causes. Treat every energized contact as a combined hazard.</p>`
    },
    {
      heading: "Arc Flash, Arc Blast, and Why Panels Deserve Respect",
      html: `
<p>An <strong>arc flash</strong> is a sudden release of electrical energy through the air between conductors, or from a conductor to ground. It usually starts with a fault: a slipped screwdriver bridging two terminals, a failed component, conductive dust, or a tool dropped across bus bars. The fault current vaporizes metal almost instantly, and the expanding plasma produces the second hazard, the <strong>arc blast</strong> — a pressure wave that can throw a technician backward, rupture eardrums, and drive molten metal and shrapnel outward.</p>
<p>The energy in an arc event depends on the available fault current and how long protective devices take to clear the fault. Service panels, disconnects, and meter bases fed directly from a utility transformer can deliver enormous fault current. That is why two cabinets that both say "240 volts" are not equally dangerous: the one that can deliver more fault current, for longer, releases far more energy in an arc.</p>
<p>Your defenses are distance, clothing, and habit. Wear the PPE your employer's program requires for the task, including eye protection and voltage-rated gloves where specified. Never open or work in a panel with loose clothing, dangling jewelry, or uninsulated tools that could bridge terminals. Keep panel covers on whenever you are not actively working inside — an open, unattended panel in a mechanical room is an invitation to disaster.</p>
<ul>
<li><strong>Never</strong> bypass a fuse or breaker with a jumper "just to test." The protective device is sized to limit fault energy.</li>
<li><strong>Never</strong> assume a disconnect is wired correctly because the handle says OFF — verify with your meter (Section 4).</li>
<li><strong>Never</strong> work energized out of habit. Working live is a deliberate, justified decision, never a default.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Shock is about current through <em>you</em>; arc flash is about energy released <em>around</em> you. PPE, insulated tools, closed covers, and de-energizing before work defend against both.</div>`
    },
    {
      heading: "Lockout/Tagout: The Procedure, Step by Step",
      html: `
<p><strong>Lockout/tagout (LOTO)</strong> is the set of practices that prevents equipment from being energized — by anyone — while you service it. OSHA's standard for the control of hazardous energy, <strong>29 CFR 1910.147</strong>, sets the basics: an energy-control program, locks and tags, trained authorized employees, and procedure inspections. A <strong>lockout</strong> device physically holds an energy-isolating device (a disconnect, breaker, or valve) in the safe position. A <strong>tagout</strong> device is a prominent warning tag; tags warn, but only locks physically restrain.</p>
<p>Use this sequence every time:</p>
<ul>
<li><strong>Step 1 — Notify.</strong> Tell affected employees the equipment will be shut down and locked out, and why.</li>
<li><strong>Step 2 — Identify.</strong> Find every energy source: the electrical disconnect, but also control power, capacitors, gas, water, springs, and gravity loads.</li>
<li><strong>Step 3 — Shut down.</strong> Stop the equipment using its normal controls so it comes to rest in an orderly way.</li>
<li><strong>Step 4 — Isolate.</strong> Operate each energy-isolating device: open the disconnect, close the valve, block the line.</li>
<li><strong>Step 5 — Lock and tag.</strong> Apply your lock and tag to each isolating device. Your lock, your key — nobody else removes it.</li>
<li><strong>Step 6 — Release stored energy.</strong> Discharge capacitors, bleed pressure, block raised loads, let hot surfaces cool as needed.</li>
<li><strong>Step 7 — Verify.</strong> Try the start controls (then return them to OFF) and test for absence of voltage with your meter. This is "proving dead," covered next.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Only the person who applied a lock removes it, except under a specific, documented employer procedure for an absent employee. Cutting off someone else's lock because "the job looks done" is how technicians get killed.</div>
<p>When several technicians work on the same equipment, each person applies their <em>own</em> lock to a multi-lock hasp. The equipment cannot be re-energized until the last lock comes off — meaning the last person out knows everyone is clear. Restoration reverses the logic: inspect the area, confirm guards are back and coworkers are clear, notify affected employees, then remove locks and re-energize in an orderly sequence.</p>`
    },
    {
      heading: "Proving Dead: The Live-Dead-Live Method",
      html: `
<p>A thrown disconnect proves nothing. Disconnects get miswired, handles break internally, blades weld shut, and circuits get back-fed from a second source — a control transformer fed from another panel, a shared neutral, or a generator. The only trustworthy proof is your meter, used correctly, in the <strong>live-dead-live</strong> sequence:</p>
<ul>
<li><strong>Live:</strong> Test your meter on a known live source (a nearby receptacle or a proving unit). Confirm it reads correctly.</li>
<li><strong>Dead:</strong> Test the circuit you are about to touch — phase to phase and each phase to ground. Confirm it reads zero (or only trivial induced "ghost" voltage, which a low-impedance meter setting helps identify).</li>
<li><strong>Live:</strong> Test the meter again on the known live source. This proves the meter did not fail during the dead test.</li>
</ul>
<p>Why the bookends? If your meter's lead broke or its battery died between tests, a "dead" reading on a live circuit would lie to you with total confidence. Live-dead-live turns one fragile reading into a verified fact. This is one of the core safety skills in the NATE Core safety domain and in the NATE Ready-to-Work electrical-safety topics, because employers expect it to be automatic.</p>
<div class="formula">No reading = no proof. A circuit is dead only when a verified meter says so.</div>
<p>Worked habit — a condensing unit call: you open the disconnect and the fan stops. Before touching terminals, you check your meter on the line side of the disconnect (live, full voltage — good, the meter works), then test load-side L1–L2 and each leg to ground (zero — dead), then re-check the line side (live again). Now — and only now — do your hands go in. Total extra time: under a minute. Total protection: the difference between an assumption and a fact.</p>
<div class="callout"><strong>Key idea:</strong> Also watch for <strong>back-feed</strong>: a 24-volt control circuit can be energized from the indoor unit while the outdoor disconnect is open, and some equipment has two separate power feeds. Identify <em>all</em> sources in Step 2 of LOTO, not just the obvious one.</div>`
    },
    {
      heading: "PPE, Tools, and Stored Energy",
      html: `
<p><strong>Personal protective equipment</strong> is the last line of defense, not the first — de-energizing is always the first choice — but when you must test live circuits, PPE is what stands between a mistake and an injury. The everyday kit for HVAC/R electrical work includes:</p>
<ul>
<li><strong>Safety glasses</strong> (and a face shield where arc risk calls for it) — arcs eject molten metal.</li>
<li><strong>Voltage-rated gloves with leather protectors</strong>, inspected before use and air-tested for pinholes, for work where your employer's program requires them.</li>
<li><strong>Non-conductive footwear</strong> and natural-fiber or arc-rated clothing as specified; meltable synthetics worsen burns.</li>
<li><strong>Insulated hand tools</strong> rated for the voltage, with insulation inspected for cuts before use.</li>
<li><strong>A properly rated meter and leads</strong> — the meter's category (CAT) rating must match the environment; a bargain meter with a failed fuse can explode in a panel.</li>
</ul>
<p>Then there is the energy that remains <em>after</em> lockout. <strong>Capacitors</strong> — especially start capacitors and the DC bus capacitors in variable-speed drives — can hold a charge long after power is removed; discharge them through a resistor as the manufacturer directs, then verify with your meter. Fans can windmill and generate voltage. Refrigerant and water systems hold pressure. A blower wheel raised for service can fall. Step 6 of LOTO — release and restrain stored energy — exists because "off" does not mean "empty."</p>
<div class="callout"><strong>Key idea:</strong> Build the order into muscle memory: PPE on, notify, identify, shut down, isolate, lock and tag, release stored energy, verify dead with live-dead-live. In this course's labs and in the field, the safety step always comes first — and it is always graded.</div>
<p>This module feeds directly into the safety topics of the <strong>NATE Core</strong> exam and the <strong>NATE Ready-to-Work</strong> certificate (general safety and electrical safety), and into the safety portions of the <strong>HVAC Excellence Employment Ready: Electrical</strong> topic list. More importantly, it feeds into a career: technicians who lock out every time get to keep having careers.</p>`
    }
  ],
  keyTerms: [
    { term: "Electric shock", def: "Injury caused by current passing through the body; severity depends on current amount, path, and duration." },
    { term: "Arc flash", def: "A sudden release of electrical energy through air between conductors or to ground, producing extreme heat and light." },
    { term: "Arc blast", def: "The pressure wave produced by an arc flash as metal vaporizes and air expands explosively." },
    { term: "Lockout", def: "Placing a lock on an energy-isolating device to hold it in the safe (off) position during service." },
    { term: "Tagout", def: "Placing a prominent warning tag on an energy-isolating device; a tag warns but does not physically restrain." },
    { term: "Energy-isolating device", def: "A physical device that prevents energy release — a disconnect switch, circuit breaker, or line valve (not a push-button or selector switch)." },
    { term: "Hazardous energy", def: "Any stored or potential energy — electrical, mechanical, hydraulic, pneumatic, thermal, chemical, or gravity — that could injure during service." },
    { term: "Stored energy", def: "Energy remaining in a system after shutdown, such as charge in a capacitor or pressure in a line, that must be released or restrained." },
    { term: "Authorized employee", def: "A person trained and authorized to apply locks/tags and service equipment under the LOTO program." },
    { term: "Affected employee", def: "A person who operates or works near equipment under lockout/tagout and must be notified, but does not apply locks." },
    { term: "Proving dead", def: "Verifying the absence of voltage with a meter before touching conductors." },
    { term: "Live-dead-live", def: "Meter verification method: test a known live source, test the target circuit for zero voltage, then re-test the known live source." },
    { term: "Back-feed", def: "Voltage present from an unexpected second source, such as a control circuit fed from another unit or a shared conductor." },
    { term: "Ghost voltage", def: "A small induced voltage reading on a de-energized conductor near live conductors; a low-impedance meter setting helps identify it." },
    { term: "PPE", def: "Personal protective equipment — glasses, gloves, footwear, and clothing worn as the last line of defense." },
    { term: "Voltage-rated gloves", def: "Insulating rubber gloves (worn with leather protectors) rated for the voltage being worked on or near." },
    { term: "CAT rating", def: "The measurement-category safety rating of a meter and leads, indicating the transient energy environment they are built to survive." },
    { term: "Multi-lock hasp", def: "A device allowing several personal locks on one isolating point so every worker controls re-energization." },
    { term: "29 CFR 1910.147", def: "The OSHA standard, 'The control of hazardous energy (lockout/tagout),' covering servicing and maintenance of machines and equipment." }
  ],
  video: {
    title: "HVAC Safety Training for Technicians | Ladders, PPE, Lockout Tagout & More",
    embedUrl: "https://www.youtube.com/embed/dRzbyWDUZ8o",
    note: "A panel of experienced HVAC technicians and safety leads discusses the habits that prevent injuries: ladder setup, PPE, lockout/tagout and testing before touching, and stored-energy hazards. Watch for how often they blame incidents on rushing and complacency rather than lack of knowledge — then compare their LOTO sequence with the one in this module.",
    more: [
      { title: "Lockout Tagout Training Explained | OSHA Lockout Tagout Procedure (LOTO Step-by-Step)", url: "https://www.youtube.com/watch?v=TgA6tdgha-4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A coworker says, \"It's only the 24-volt control circuit — that can't hurt anyone.\" Give two reasons this thinking is still unsafe on a real service call.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The control circuit is fed by a transformer connected to line voltage — working in the same cabinet means your hands are inches from 120/240-volt terminals, and a slip bridges the two. Step 2: Low-voltage work often happens with the power on and guards off, which normalizes skipping LOTO; when the task expands to a motor or contactor, the unsafe habit expands with it. The voltage on the wire you intend to touch is not the only hazard in the enclosure.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Put these LOTO actions in the correct order: (a) Apply locks and tags (b) Verify absence of voltage (c) Notify affected employees (d) Release stored energy (e) Shut down with normal controls (f) Isolate energy sources.</p>",
      solution: "<p><strong>Answer: c, e, f, a, d, b.</strong> Step 1: Notify first so nobody is surprised by the shutdown. Step 2: Shut down with normal controls, then isolate at the disconnect/valve. Step 3: Apply locks and tags so the isolation cannot be undone. Step 4: Release stored energy (capacitors, pressure). Step 5: Verify last — verification only means something once isolation, locking, and stored-energy release are complete.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> You open a disconnect, and your meter reads 0 volts on the load side. Why is that single reading not enough proof the circuit is dead? What do you do about it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A zero reading can mean a dead circuit — or a dead meter: a broken lead, blown meter fuse, wrong dial setting, or dead battery all read zero forever. Step 2: Use live-dead-live: prove the meter on a known live source, re-test the load side phase-to-phase and phase-to-ground, then prove the meter on the live source again. Only the full sandwich makes the zero trustworthy.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Two technicians will replace a blower motor. The lead tech locks the disconnect and says, \"My lock covers both of us.\" What is wrong, and what is the correct practice?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: If the lead tech finishes early or is called away, removing that one lock re-exposes the second tech while hands are still in the machine. Step 2: Correct practice is a multi-lock hasp: each authorized employee applies their own personal lock, and the equipment stays locked until every person has removed their own lock. Control of re-energization must belong to every person at risk, not to one representative.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Name four forms of stored or secondary energy on a typical rooftop unit that can injure you after the disconnect is locked open.</p>",
      solution: "<p><strong>Answer:</strong> Any four: (1) charge stored in run/start capacitors or a drive's DC bus; (2) refrigerant pressure in the sealed system; (3) a windmilling fan generating voltage or simply cutting hands; (4) thermal energy in hot discharge lines and motors; (5) gravity — panels or components that can fall; (6) gas pressure at the heating section. Each must be discharged, bled, blocked, cooled, or avoided as part of LOTO Step 6.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> The only person with the key to a lock has gone home, and a supervisor asks you to cut the lock so production can restart. What does OSHA's standard require instead of simply cutting it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: 29 CFR 1910.147 allows removal by someone other than the person who applied the lock only under a specific, documented employer procedure. Step 2: That procedure includes verifying the employee is not at the facility, making all reasonable efforts to contact them, ensuring they know the lock was removed before they return to work, and confirming the equipment is safe to energize. Step 3: Absent that procedure and those checks, the lock stays on. \"The supervisor said so\" is not a procedure.</p>"
    }
  ],
  quiz: [
    {
      q: "What most directly determines how severely an electric shock injures the body?",
      choices: ["The color of the conductor insulation", "The amount of current, its path through the body, and its duration", "Whether the circuit is labeled series or parallel", "The size of the equipment cabinet"],
      answer: 1,
      explanation: "Correct: (b). Current magnitude, path (especially through the chest), and contact time drive shock injury. (a) Insulation color is a wiring convention and has no effect on a shock in progress. (c) Circuit topology affects current delivery but is not what injures tissue. (d) Cabinet size is irrelevant to shock severity."
    },
    {
      q: "Under OSHA 29 CFR 1910.147, a tagout device differs from a lockout device because a tag:",
      choices: ["Is stronger than a lock", "Physically prevents the disconnect from closing", "Warns against operation but does not physically restrain the device", "May be removed by any employee"],
      answer: 2,
      explanation: "Correct: (c). A tag is a warning only; it attaches with a tie and cannot hold a switch open. (a) A tag has no physical strength role. (b) That describes a lock, the opposite of a tag. (d) Tags, like locks, are removed only by the person who applied them or under a documented employer procedure."
    },
    {
      q: "Which is the correct order for the core LOTO sequence?",
      choices: ["Isolate, notify, shut down, lock, verify, release stored energy", "Notify, shut down, isolate, lock and tag, release stored energy, verify", "Lock, notify, verify, shut down, isolate, release stored energy", "Shut down, verify, lock, notify, isolate, release stored energy"],
      answer: 1,
      explanation: "Correct: (b). Notify → normal shutdown → isolate → lock/tag → release stored energy → verify. (a) Verifying before releasing stored energy leaves capacitor charge in place during the test. (c) Locking before shutdown can force an uncontrolled stop. (d) Verifying before locking means someone can re-energize between your test and your work."
    },
    {
      q: "In the live-dead-live method, the final 'live' step exists to:",
      choices: ["Warm up the meter battery", "Prove the meter still works after the dead test, so the zero reading can be trusted", "Discharge the capacitor in the equipment", "Measure the circuit's current draw"],
      answer: 1,
      explanation: "Correct: (b). If the meter failed during the dead test, the second live check exposes it. (a) Meters do not need warm-up to read voltage. (c) Capacitors are discharged through a resistor per manufacturer instructions, not by a meter check. (d) Live-dead-live is a voltage verification, not a current measurement."
    },
    {
      q: "Two separate power feeds enter one air handler (fan power and a separate electric-heat circuit). For LOTO this means:",
      choices: ["Locking the larger feed is sufficient", "Both feeds must be identified, isolated, and locked", "Only the feed you are touching matters", "The thermostat set to OFF counts as isolation for the second feed"],
      answer: 1,
      explanation: "Correct: (b). Step 2 of LOTO is identifying ALL energy sources; every feed gets isolated and locked. (a) The 'smaller' feed can still kill or can back-feed shared components. (c) Conductors you are not touching can still energize parts you are. (d) A thermostat is a control device, not an energy-isolating device — controls can fail or be overridden."
    },
    {
      q: "Which item is an energy-isolating device under LOTO?",
      choices: ["A thermostat calling switch", "A relay contact", "A manually operated electrical disconnect switch", "The start button on the unit controller"],
      answer: 2,
      explanation: "Correct: (c). A disconnect physically separates conductors and can accept a lock. (a), (b), and (d) are control devices: they operate through control logic, can be overridden or fail closed, and cannot be locked out — OSHA excludes push-buttons and selector switches from the definition."
    },
    {
      q: "After lockout, a start capacitor can still injure you because it:",
      choices: ["Regenerates refrigerant pressure", "Stores an electrical charge that persists after power is removed", "Contains a small battery", "Is always connected to the utility neutral"],
      answer: 1,
      explanation: "Correct: (b). Capacitors store charge; that is their job. Discharge through a resistor as directed and verify with a meter. (a) Pressure is a separate stored-energy hazard of the refrigerant circuit, not the capacitor. (c) Capacitors hold charge electrostatically — no battery involved. (d) A locked-open disconnect separates it from the utility; the hazard is the charge already stored inside."
    },
    {
      q: "Your meter reads about 18 volts AC on a conductor you locked out, using standard voltage mode. The most likely explanation and correct response is:",
      choices: ["The disconnect failed — treat it as fully live and re-lock it", "Induced 'ghost' voltage from nearby live conductors — confirm with a low-impedance setting and continue verification", "The capacitor is recharging itself — wait an hour", "Meter error — ignore any reading under 50 volts"],
      answer: 1,
      explanation: "Correct: (b). High-impedance meters pick up capacitively coupled ghost voltage on floating conductors; a low-impedance (LoZ) function loads it down and shows whether real energy is behind it. (a) A failed disconnect would show full line voltage, not a faint fraction. (c) Capacitors discharge or hold charge; they do not recharge without a source. (d) Small readings are never simply ignored — they are identified."
    }
  ],
  studyGuide: `
<h3>Module 1 — Electrical Safety & Lockout/Tagout: Quick Reference</h3>
<p><strong>Shock:</strong> Injury depends on current amount, path (chest = worst), and duration. Wet skin = low resistance = more current at the same voltage.</p>
<p><strong>Arc flash/blast:</strong> Fault energy released through air — heat, light, pressure, shrapnel. Defenses: de-energize, PPE, insulated tools, covers on.</p>
<p><strong>LOTO sequence (OSHA 29 CFR 1910.147 basics):</strong> 1) Notify affected employees. 2) Identify ALL energy sources. 3) Shut down with normal controls. 4) Isolate at disconnects/valves. 5) Apply your lock + tag (multi-lock hasp for group work). 6) Release stored energy — capacitors, pressure, gravity, heat. 7) Verify: try-start (return to OFF) + meter test.</p>
<p><strong>Proving dead:</strong> Live-dead-live — known live source, target circuit (phase-phase and phase-ground), known live source again. A lone zero reading proves nothing.</p>
<p><strong>Rules that never bend:</strong> Only the lock's owner removes it (absent a documented employer procedure). Tags warn; locks restrain. Control devices (thermostats, relays, push-buttons) are NOT isolating devices. PPE is the last defense, never a substitute for de-energizing.</p>
<p><strong>Cert tie-in:</strong> Safety is a named NATE Core domain and a Ready-to-Work topic area (general + electrical safety); LOTO and meter verification are core HVAC Excellence Employment Ready: Electrical expectations.</p>
`
};
