// HVAC 132 - Module 11: Heating Controls, Limits & Flame Safety
module.exports = {
  number: 11,
  slug: "heating-controls-limits-flame-safety",
  title: "Heating Controls, Limits & Flame Safety",
  estTime: "3–4 hours",
  objectives: [
    "Draw the conceptual safety chain of a heating appliance: operating controls versus limit controls, and why the two classes must stay independent.",
    "Explain each limit family's sensing and reset behavior: temperature limits, rollout switches, blocked-vent/spill switches, and pressure switches.",
    "Explain how a pressure switch proves draft — what it actually measures, its failure modes, and how to test it with a manometer instead of a jumper.",
    "Describe flame-safety supervision across fuels: rectification (gas), cad cell (oil), thermocouple (pilot) — and the shared rule that safeties are never defeated.",
    "Apply lockout/tagout and prove-dead discipline to heating service, including stored energy (hot surfaces, pressure, springs, capacitors).",
    "Diagnose 'nuisance' limit trips as messages: match each safety's trips to the physical cause it is reporting."
  ],
  sections: [
    {
      heading: "Two Classes of Controls: Operators and Guardians",
      html: `
<p>Every heating control belongs to one of two castes, and confusing them is the root of many field sins:</p>
<ul>
<li><strong>Operating controls</strong> run the show for comfort: the thermostat, the aquastat's operating side, the pressuretrol. They cycle equipment on demand, are expected to act thousands of times, and may be adjusted by setpoint.</li>
<li><strong>Limit (safety) controls</strong> stand guard over failure: high-limit switches, rollout switches, pressure switches, flame supervisors, low-water cutoffs. They act only when something is wrong, they are wired in series with the equipment they protect, and their setpoints are listings, not preferences.</li>
</ul>
<p>The architecture rule that follows: <strong>limits are independent of operating controls</strong>. The high limit doesn't ask the thermostat's opinion; a boiler's LWCO doesn't care that the aquastat wants heat. Independence is what makes the protection real — a failed operating control (a thermostat welded 'on') runs straight into a limit that owes it nothing. It is also why you never 'solve' a tripping limit by raising its setting or relocating its sensor: you would be editing the appliance's listing with a screwdriver, and the next failure in the chain would find no guardian on duty.</p>
<div class="callout"><strong>Key idea:</strong> Operating controls optimize comfort; limits survive faults. Limits trip on causes, not on whims — every trip is a report, and the technician's job is to read the report, not silence the reporter.</div>`
    },
    {
      heading: "Temperature Limits and Rollout Switches",
      html: `
<p><strong>High-limit switches</strong> (furnaces and boilers both) sense temperature where overheating announces itself: in the furnace's heat-exchanger/blower compartment air, or in the boiler's water via an immersion aquastat well. Most furnace limits are <strong>automatic-reset</strong>: they open at their rated temperature and reclose after cooling by their differential. Two field truths: (1) a limit that has cycled hard for a season may drift or weaken — repeated tripping degrades the guardian itself, so chronic-trip furnaces earn a limit test/replacement even after the airflow cause is fixed; (2) the trip is <em>seldom the limit's fault</em> — in furnaces the cause list is airflow (filters, blower, ducts) then firing rate (over-fire, Module 2); in boilers, circulation failure or a genuinely failing operating control.</p>
<p><strong>Rollout switches</strong> guard the burner opening against flame escaping the exchanger (Modules 3–5). Rollout sensing is thermal — a bimetal disc positioned where escaping flame's heat would wash over it — and rollout switches are commonly <strong>manual-reset</strong> by deliberate design: flame outside the box is a 'human must look' event. Their cause list is the serious one: blocked/failed exchanger passage, failed inducer or vent blockage, severe over-firing, delayed ignition. A rollout found tripped converts any call into a forensic inspection — burner-box heat damage, wiring insulation, gas-valve condition — before the appliance runs again.</p>
<p><strong>Blocked-vent (spill) switches</strong> protect natural-draft appliances: mounted at the draft hood, they sense the heat of spilling flue gas when the chimney stops drawing (Module 4) and shut the burner down — the natural-draft world's answer to the pressure switch. Manual-reset on many designs, same philosophy: spillage is a cause-hunt, not a reset.</p>
<div class="callout"><strong>Key idea:</strong> Reset behavior is a message: auto-reset limits supervise chronic conditions (airflow, firing) — manual-reset devices (rollout, spill) flag acute events that demand eyes before re-firing. The reset button is the end of the repair, never the repair.</div>`
    },
    {
      heading: "Pressure Switches: Proving Draft with Numbers",
      html: `
<p>The <strong>pressure switch</strong> (Modules 4–5) is a diaphragm switch actuated by the inducer's pressure/suction, sampled through a small tube from a port on the inducer housing or collector box. It proves two things a motor hum cannot: that air is actually moving (an inducer with a slipped wheel hums fine and moves nothing), and that the vent path accepts the flow (a blocked vent chokes the pressure signature the switch expects).</p>
<p>Testing doctrine — measure, don't jump:</p>
<ol>
<li><strong>Electrical check:</strong> with the inducer running, a closed switch shows ~0 V across it; line/control voltage across it means it never closed (or its contacts failed).</li>
<li><strong>Pneumatic check:</strong> tee a manometer into the sensing tube and compare the actual draft with the switch's stamped setpoint (in inches of water column, printed on the switch). Draft above setpoint + switch open = bad switch. Draft below setpoint = the switch is <em>right</em> and the draft is wrong — go to the inducer, vent, or condensate (Category IV ponding, Module 4).</li>
<li><strong>Tube and port check:</strong> the sensing port and tube clog with debris and condensate; a blocked port shows a perfect switch starved of its signal. Clear with care — never ram a drill bit into a collector box port.</li>
</ol>
<p>Failure modes worth memorizing: diaphragm stiffening with age/heat (setpoint drift), contacts pitted, tube cracked (leaks the sample away), and water in the tube (a condensate slug makes the switch lie intermittently — the classic 'only fails on cold mornings' call after a humid night). And the standing rule: a jumper across a pressure switch is a two-minute attended test in a professional's hands, never a condition to leave — a furnace firing with a jumpered switch has no draft guardian at all.</p>
<div class="callout"><strong>Key idea:</strong> The pressure switch is a witness testifying about draft. Cross-examine it with a manometer: measured draft vs its stamped setpoint separates a lying switch from a truthful one reporting a sick vent path.</div>`
    },
    {
      heading: "Flame Safety Across Fuels, and the One Rule",
      html: `
<p>This course has now shown you three flame guardians, and seeing them as one family cements the principle:</p>
<ul>
<li><strong>Gas, modern:</strong> flame rectification — microamps DC through the flame (Module 3), supervised by the integrated control through trial timing and lockout.</li>
<li><strong>Oil:</strong> cad cell + primary control — light-sensitive resistance with safety timing and lockout (Module 7).</li>
<li><strong>Standing pilot:</strong> thermocouple — heat-generated millivolts holding the safety magnet; flame gone, voltage gone, valve locked (Module 3).</li>
</ul>
<p>Different physics, identical social contract: <em>fuel flows only while flame is verified, and verification lapses shut the fuel first and ask questions later.</em></p>
<p>The one rule that outranks every schedule pressure and customer plea: <strong>a safety control is never bypassed, jumpered, taped, wedged, or 'temporarily' defeated as a leaving condition.</strong> Not the flame circuit, not the pressure switch, not the limit, not the LWCO, not the rollout. Temporarily <em>testing</em> with a jumper — attended, measured, minutes — is diagnostics. Leaving it is gambling with the customer's house and your license, your livelihood, and your conscience. When the part isn't on the truck, the professional options are: shut it down safely, document, communicate, and expedite the part — or provide guidance on safe temporary heat. 'Running but unguarded' is not on the menu, and any employer or customer who demands it has told you something important about themselves.</p>
<div class="callout"><strong>Key idea:</strong> Three flame-proving technologies, one rule: no proof, no fuel — and no technician defeats the proof. Ever. The rule survives contact with cold houses and impatient people; that's what makes it a rule.</div>`
    },
    {
      heading: "Lockout/Tagout and Stored Energy in Heating Work",
      html: `
<p>Heating service is electrical, thermal, pressure, and chemical work in one cabinet. <strong>Lockout/tagout (LOTO)</strong> discipline, scaled to the task:</p>
<ol>
<li><strong>Isolate every energy source:</strong> line power at the disconnect/breaker (lock and tag it when the situation allows), gas at the appliance shutoff for burner work, oil valve for burner work, and — on hydronic/steam systems — respect that the <em>water/steam</em> is also energy: hot, pressurized, and patient.</li>
<li><strong>Prove dead:</strong> test your meter on a known live source, verify the equipment circuit is dead, then re-test the meter ('live-dead-live'). A switch someone else controls is not an isolation you verified.</li>
<li><strong>Mind stored energy:</strong> hot exchangers burn for many minutes after shutdown; capacitors hold charge; springs and blower wheels store motion; a steam boiler holds pressure and a hydronic loop holds hot water under pressure. Opening a system means planning for what it still holds.</li>
<li><strong>Restore deliberately:</strong> tools and jumpers out (count them), guards and doors on, then re-energize and run the full sequence — including watching the safeties you disturbed prove themselves in a normal cycle.</li>
</ol>
<p>Communication is part of the procedure: tell the household the equipment is off and why; a well-meaning family member 'helpfully' restoring power mid-test is a real-world failure mode, and your tag (plus a conversation) is the defense. On multi-technician jobs, each tech applies their own lock; the last lock off is the last set of hands clear.</p>
<div class="callout"><strong>Key idea:</strong> LOTO on heating calls = isolate (electrical + fuel + water/steam), prove dead with a verified meter, respect stored heat/pressure/charge, and restore only when the cabinet is whole and everyone is clear.</div>`
    }
  ],
  keyTerms: [
    { term: "Operating control", def: "A comfort control (thermostat, aquastat operating side, pressuretrol) that cycles equipment on demand." },
    { term: "Limit control", def: "An independent safety control that shuts equipment down when an unsafe condition occurs; wired in series with what it protects." },
    { term: "High-limit switch", def: "A temperature limit that opens on overheating — classically from low airflow (furnace) or failed circulation (boiler)." },
    { term: "Rollout switch", def: "A (usually manual-reset) thermal switch at the burner opening that trips when flame escapes the burner box." },
    { term: "Blocked-vent (spill) switch", def: "A draft-hood-mounted thermal safety that shuts a natural-draft appliance down when flue gas spills into the room." },
    { term: "Pressure switch", def: "A diaphragm switch proving inducer draft against its stamped setpoint (inches of water column) before and during firing." },
    { term: "Setpoint (pressure switch)", def: "The pressure at which a pressure switch actuates, printed on the switch; tested against measured draft with a manometer." },
    { term: "Manual reset", def: "A safety design requiring a human to deliberately reset after a trip — used for acute, must-inspect events." },
    { term: "Automatic reset", def: "A safety design that recloses when the sensed condition returns to normal — used for supervising chronic conditions." },
    { term: "Flame supervision", def: "Continuous verification of flame (rectification, cad cell, thermocouple) gating fuel flow." },
    { term: "Lockout/tagout (LOTO)", def: "Isolating equipment energy sources, locking/tagging them, and proving zero energy before service." },
    { term: "Live-dead-live", def: "The meter verification routine: prove the tester on a live source, test the target circuit dead, re-prove the tester." },
    { term: "Stored energy", def: "Residual hazard after isolation: hot surfaces, pressurized water/steam, charged capacitors, spring tension." },
    { term: "Safety chain", def: "The series arrangement of limits so any open safety disables the protected function." },
    { term: "Nuisance trip", def: "Field slang for a safety opening 'without apparent cause' — in this course, treated as a report with a cause not yet found." },
    { term: "Differential (limit)", def: "The temperature difference between a limit's opening and reclosing points." },
    { term: "Aquastat (limit side)", def: "The boiler's high-limit water-temperature control, independent of its operating control." },
    { term: "Series wiring", def: "Wiring safeties one after another in the same circuit so any one opening breaks the whole chain." }
  ],
  video: {
    title: "Furnace Part 1 - HVAC Training",
    embedUrl: "https://www.youtube.com/embed/nh_TsPWdybE",
    note: "The first part of a two-part furnace training walkthrough: components, safeties, and the checks a technician runs before and during a firing cycle. (Part 2, linked in Module 3, covers the ignition and flame-proving steps in the same sequence.) Use it to put faces on the limit, pressure switch, and control board discussed here.",
    more: [
      { title: "Furnace Part 2 - HVAC Training", url: "https://www.youtube.com/watch?v=Smiwc9Ni0uM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A boiler's operating aquastat fails with its contacts welded, calling for heat forever. Trace what protects the building, naming each layer in the order it acts — and state what single wiring philosophy makes the protection trustworthy.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The burner keeps firing past the operating setpoint; water temperature climbs. Step 2: First guardian: the <strong>high-limit aquastat</strong> — an independent control with its own sensor and contacts, wired in series with the burner circuit — opens at its limit setting and kills the burner regardless of the operating control's demand. Step 3: If temperatures and pressure somehow kept climbing (limit failed too), the <strong>pressure relief valve</strong> — a purely mechanical guardian needing no electricity or logic — discharges water/steam to cap the pressure. Step 4: The philosophy: <em>independence in series</em> — each guardian senses for itself and can veto the whole system alone; no guardian depends on the device it guards against. That is why limits are never wired 'through' the operating control's electronics or adjusted to match a misbehaving operator.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A pressure switch is stamped 0.65 in. w.c. Your manometer, teed into the sensing line with the inducer running, reads 0.90 in. w.c., yet the voltage across the switch stays at control voltage (it never closes). Give the verdict and the repair. Then state the opposite verdict if the manometer had read 0.40 in. w.c.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Draft delivered (0.90) exceeds the switch's setpoint (0.65) — the switch was offered a valid signal and refused it: failed switch (diaphragm/contacts). Repair: replace with the exact setpoint/model specified; verify closure electrically and run the full sequence. Step 2: Opposite case (0.40 < 0.65): the switch is <em>telling the truth</em> — draft is insufficient. Do not replace the switch; hunt the draft: inducer performance (wheel, capacitor, voltage), vent/exchanger restriction, condensate ponding (Category IV), and the sensing port/tube for blockage that might make even 0.40 a lie about the inducer's real pressure. Step 3: The manometer converts a guessing game into arithmetic: compare one honest number against the stamped number, and the guilty party names itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> The pressure switch tests perfect on the bench, and draft at the inducer is strong — yet in place, the switch closes only intermittently, mostly on humid nights. Explain the mechanism and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Suspect the messenger line: the sensing tube and its port. Condensate collecting in a low loop of the tube forms a water slug that the inducer's pressure must push against — the switch sees a damped, delayed, or blocked sample. Humid nights mean more condensate; cold mornings after them are the classic failure window (Module 4's ponding in miniature). Step 2: Contributing variants: a partially clogged port (debris crust) that passes pressure slowly, or a cracked tube leaking the sample — both produce intermittency that a bench test (clean air, direct connection) can't reproduce. Step 3: Fix: clear/replace the tube, route it without low loops so condensate drains back, clean the port gently (never ream it oversize), and consider the manufacturer's condensate management for the collector box if equipped. Step 4: Verify across several cold starts — intermittency is only 'fixed' when it survives the conditions that used to provoke it.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Classify each as operating or limit control, and state whether adjustment by the technician is appropriate: thermostat; pressuretrol; high-limit aquastat; rollout switch; low-water cutoff; gas valve regulator.</p>",
      solution: "<p><strong>Answer:</strong> <strong>Thermostat — operating</strong>: adjustment is its purpose (setpoint is a comfort choice). <strong>Pressuretrol — operating</strong> (steam boiler burner cycling on pressure): set within the manufacturer's/system's low-pressure doctrine; it is an operator, though a disciplined one. <strong>High-limit aquastat — limit</strong>: set only to the appliance listing/specification; never raised to stop trips. <strong>Rollout switch — limit</strong>: a rated device, not adjustable at all; replaced like-for-like when it has done its duty and been proven degraded. <strong>Low-water cutoff — limit</strong>: not a setpoint device in the field; tested and maintained (blowdown), never defeated or 'desensitized.' <strong>Gas valve regulator — a special case</strong>: it is an adjustment point, but only to the rating-plate manifold pressure (Module 2) with a manometer — an operator with a specification leash, not a preference dial. Rule of thumb: if its job is comfort, you may tune it; if its job is survival, you may only restore it to specification.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Write the LOTO sequence for replacing a furnace blower motor, including the two non-electrical energies, and the proof steps. A helper asks why you bother locking when 'the switch is right there on the furnace.' Answer him within your write-up.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Notify the household the furnace is going down. Step 2: Shut off at the furnace switch AND the breaker; apply your lock and tag at the breaker (or disconnect) so no third party can re-energize mid-job. The furnace switch alone fails as isolation because it is unguarded, unlabeled for service, and one curious hand away from 'on' — a lock converts your safety from a hope into a mechanism, and the tag tells the hand <em>why</em> to stop. Step 3: Prove dead, live-dead-live: check the meter on a known source, verify no voltage at the motor leads, re-check the meter. Step 4: Non-electrical energies: discharge/respect the run capacitor (stored charge — treat terminals as live until proven and discharged per procedure); wait for the heat exchanger and motor to cool (stored thermal energy) before hands-in work; on a boiler job you'd add hot pressurized water/steam to the list. Step 5: Pull the motor, keeping track of every disconnected lead (photo before). Step 6: Restore deliberately: connections torqued, capacitor reconnected, wheel clearance checked, cabinet whole, jumpers/tools counted out; remove lock, re-energize, and run a full heat cycle watching amps and sequence. The lock wasn't bureaucracy — it was the difference between 'off because I left it off' and 'off because physics says so.'</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A furnace has tripped its rollout switch twice in a season. The first time, another company 'replaced the switch.' Construct the argument — technical and ethical — for what you do differently this time, and list your inspection points before any re-fire.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Technical argument: rollout switches trip on flame outside the burner box. A switch that trips twice is corroborating testimony; replacing the witness after the first report guaranteed the second event. Your repair target is the flame's escape route, not the alarm. Step 2: Inspection points before re-fire: burner box and cabinet for heat damage; wiring insulation near the opening; heat exchanger inspection (blockage/crack — the prime suspect: a plugged or breached passage pushes flame back out); inducer operation and measured draft (manometer vs pressure-switch setpoint); vent path for blockage; manifold pressure and meter clocking for over-fire; ignition watch (delayed ignition blows flame outward at light-off). Step 3: Ethical frame: resetting/replacing-and-leaving after a known repeat event trades a customer's property and possibly lives for a closed ticket; if the cause cannot be found and fixed today, the appliance stays down with a clear explanation and documentation — 'safe and cold' beats 'warm and burning' every time, and the ticket should say exactly that in plain words.</p>"
    }
  ],
  quiz: [
    {
      q: "The defining feature of a limit control is that it:",
      choices: ["Is adjustable by the homeowner", "Acts independently of the operating controls and is wired in series to veto operation on an unsafe condition", "Cycles the equipment for comfort", "Reports to the thermostat"],
      answer: 1,
      explanation: "Correct: (b) Independence plus series veto is what makes a limit a guardian rather than an advisor. (a) Limits are specification-set, not user preferences. (c) Cycling for comfort is the operating controls' job description. (d) Limits don't report upward for permission — they act directly on the circuit they protect."
    },
    {
      q: "A pressure switch stamped 0.65 in. w.c. shows measured draft of 0.42 in. w.c. at its tube and never closes. The correct conclusion is:",
      choices: ["The switch is defective — replace it", "The switch is telling the truth; draft is insufficient — diagnose the inducer, vent path, and condensate", "The setpoint should be lowered", "The switch should be jumpered until parts arrive"],
      answer: 1,
      explanation: "Correct: (b) 0.42 < 0.65: the offer never reached the asking price. Hunt draft (inducer, blockage, ponded condensate, clogged port). (a) condemns a truthful witness. (c) editing a listing setpoint to fit a sick system is how guardians get dismissed. (d) a jumper left in place removes draft proving entirely — never a leaving condition."
    },
    {
      q: "Manual-reset design on rollout and spill switches exists because:",
      choices: ["Auto-reset parts cost more", "These events (flame escaping, flue gas spilling) require a human to find the cause before re-firing", "They trip too often for auto-reset", "Regulations forbid auto-reset on all safeties"],
      answer: 1,
      explanation: "Correct: (b) The reset <em>is</em> the inspection trigger — the design forces eyes on an acute, dangerous event before another firing is possible. (a) Cost doesn't drive the philosophy; auto-reset devices are common elsewhere. (c) In a healthy system they should essentially never trip — frequency is the symptom, not the rationale. (d) Many safeties (limits, pressure switches) are auto-reset by design; the distinction is deliberate, per hazard type."
    },
    {
      q: "Live-dead-live meter verification means:",
      choices: ["Test two live circuits, then the dead one", "Prove the meter on a known live source, verify the target is dead, then re-prove the meter on the live source", "Leave one lead on a live terminal while testing", "Cycle the breaker three times"],
      answer: 1,
      explanation: "Correct: (b) The sandwich proves the 'dead' reading is a property of the circuit, not of a meter that quietly failed between checks. (a) skips the re-prove step that catches a meter dying mid-task. (c) is a shock procedure, not a verification procedure. (d) Cycling power is not measurement at all — and can energize equipment someone is touching."
    },
    {
      q: "Which pairing of flame guardian to fuel/application is correct?",
      choices: ["Cad cell — modern gas furnace", "Flame rectification — oil burner", "Thermocouple — standing pilot safety", "Pressure switch — flame proving"],
      answer: 2,
      explanation: "Correct: (c) The thermocouple's heat-made millivolts hold a pilot valve's safety magnet — flame proving for standing-pilot appliances. (a) Cad cells read light and belong to oil burners. (b) Rectification is the gas furnace method (flame conductivity), not oil's. (d) Pressure switches prove draft, not flame — both are safeties, but they testify about different things."
    },
    {
      q: "A limit switch that has cycled on overheating all season is finally joined by a fixed filter. The thorough technician also:",
      choices: ["Raises the limit setting 20 degrees as a reward", "Tests/replaces the limit itself — chronic tripping fatigues and can drift the guardian", "Removes the limit since the cause is fixed", "Moves the limit sensor farther from the exchanger"],
      answer: 1,
      explanation: "Correct: (b) Bimetal devices age under repeated high-heat cycling; verifying the guardian after fixing the cause is complete work. (a) Raising a listing setpoint is expressly forbidden practice in this course. (c) Removing a safety is never the sequel to fixing its cause. (d) Relocating a sensor to make it read cooler is defeating by geometry — same sin, extra steps."
    },
    {
      q: "Stored energy that remains after lockout on heating equipment includes:",
      choices: ["Nothing — lockout removes all energy", "Hot exchanger surfaces, charged capacitors, and pressurized hot water/steam", "Only static electricity", "The thermostat's batteries"],
      answer: 1,
      explanation: "Correct: (b) Isolation stops new energy arriving; stored forms persist and burn/cut/shock the unwary. Plan for cooldown, capacitor discharge, and pressure relief per task. (a) is the assumption that injures experienced techs. (c) Static is trivial next to a 200°F exchanger or a charged capacitor. (d) Thermostat batteries endanger no one — a distractor by scale."
    },
    {
      q: "A customer insists you jumper a failed pressure switch 'just for tonight — the kids are cold.' The course-correct response is:",
      choices: ["Jumper it but set the thermostat low", "Refuse the leaving-bypass; offer safe alternatives (expedite the part, guidance on safe temporary heat) and document", "Jumper it if the customer signs the ticket", "Remove the switch entirely so it stops failing"],
      answer: 1,
      explanation: "Correct: (b) A defeated draft guardian is not made acceptable by weather, signatures, or thermostat settings — the fault it was reporting (why did draft fail?) may be a blocked vent actively making CO. (a) and (c) dress the same act in conditions; consent doesn't transfer the physics. (d) Removing the switch is the bypass with extra permanence."
    }
  ],
  studyGuide: `
<h3>Module 11 — Heating Controls, Limits & Flame Safety: Quick Reference</h3>
<p><strong>Two castes:</strong> operating controls (comfort, adjustable) vs limit controls (safety, independent, series-wired, specification-set). Limits veto; they don't advise.</p>
<p><strong>Reset philosophy:</strong> auto-reset = chronic supervision (limit switch ↔ airflow/firing causes). Manual-reset = acute events (rollout, spill) — cause-hunt before re-fire; the button is the END of the repair.</p>
<p><strong>Pressure switch testing:</strong> volts across it (closed ≈ 0 V) + manometer tee: measured draft vs stamped setpoint. Draft low → inducer/vent/condensate/port-tube. Draft good + no close → switch. Water slug in the tube = humid-night intermittency.</p>
<p><strong>Flame guardians:</strong> rectification µA (gas), cad cell (oil), thermocouple mV (pilot). One rule: <strong>no proof, no fuel — and safeties are never defeated as a leaving condition</strong>, under any pressure, with any signature.</p>
<p><strong>LOTO:</strong> isolate ALL sources (power, gas/oil, water/steam pressure) → lock + tag → prove dead live-dead-live → respect stored energy (hot metal, capacitors, pressure) → restore deliberately, count jumpers out, run a full cycle.</p>
`
};
