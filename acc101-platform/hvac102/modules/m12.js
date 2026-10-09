// HVAC 102 - Module 12: Airflow & Electrical Faults + Alternative Refrigerants
module.exports = {
  number: 12,
  slug: "airflow-electrical-alternative-refrigerants",
  title: "Troubleshooting Airflow & Electrical Faults + Alternative Refrigerants",
  estTime: "3–4 hours",
  objectives: [
    "Quantify airflow expectations (about 400 cfm per ton nominal) and measure airflow health with static pressure and temperature split.",
    "Diagnose the low-airflow pattern and separate it from refrigerant-side faults before touching a gauge manifold.",
    "Run a safe, ordered electrical diagnosis: power, control circuit, loads, capacitors, and compressor electrical checks.",
    "Combine airflow, electrical, and refrigerant evidence into a single end-to-end no-cool/weak-cool diagnosis.",
    "Explain the R-410A transition: AIM Act HFC phasedown, A2L refrigerants R-454B and R-32, and why A2Ls are new-equipment refrigerants — not drop-in retrofits."
  ],
  sections: [
    {
      heading: "Airflow: The First Suspect in Every Weak-Cool Call",
      html: `<p>Refrigerant cannot absorb heat that never arrives. Comfort cooling is designed around a nominal <strong>about 400 cfm of air per ton</strong> across the evaporator (manufacturers specify acceptable ranges around that figure) — starve the coil of air and a cascade follows: less heat delivered to boil refrigerant → evaporating temperature and suction pressure fall → the coil surface dips below freezing and frost insulates it further → capacity craters while the compressor, drinking thinner gas at a rising compression ratio (Module 3), works harder for less. The customer reports 'weak cooling and a frozen pipe' — a refrigerant-looking corpse with an airflow murder weapon.</p><p>Field measurement, in order of effort:</p><ul><li><strong>Static pressure:</strong> measure total external static pressure and compare it with the blower's rated capability; high static = the duct system is choking the blower (undersized returns, crushed flex, closed dampers, a filter doing a winter's penance).</li><li><strong>Temperature split</strong> (return minus supply dry-bulb): a useful screening number that runs high when airflow is low (air lingers on the cold coil) and low when airflow is excessive or the coil is not absorbing — always interpreted with humidity in mind, since latent load eats split. Treat it as a screening instrument, not a verdict.</li><li><strong>The evidence walk:</strong> filter, coil face (a matted evaporator is a blanket, not a coil), blower wheel cleanliness and rotation, duct integrity, register dampers, and the condensate story (a coil that froze leaves water evidence).</li></ul><p>The professional rule restated for the last time: <strong>no refrigerant diagnosis stands until airflow is proven.</strong> Module 11's patterns assume it; this module enforces it.</p><div class="callout"><strong>Key idea:</strong> Low suction pressure is a <em>shared symptom</em> — undercharge, restriction, and low airflow all sign it. Airflow is the only one you can prove without opening the refrigerant circuit, so prove it first.</div>`
    },
    {
      heading: "Electrical Diagnosis: Power, Control, Load — in That Order",
      html: `<p>Most 'no-cool' calls are electrical, and the winning method is a ladder, not a leap:</p><ol><li><strong>Line power:</strong> verify supply voltage at the disconnect and at the unit (both legs). A missing leg, a tripped breaker, or a burned disconnect ends the call here. Work live only with the training, PPE, and discipline of the electricity courses — and lockout/tagout for every invasive step.</li><li><strong>Control circuit:</strong> is there a call? Thermostat demand (Y), 24V control voltage present at the board/contactor coil, safeties in the chain closed (high/low pressure switches, condensate float switch — Module 6's controls, now as electrical suspects). Follow the 24V: where it stops is where the fault lives.</li><li><strong>Switching devices:</strong> contactor pulling in? Pitted or welded contacts, a coil drawing silently on a stuck armature, ants in the contactor (a classic) — inspect with power off, actuate by control signal, verify voltage <em>across</em> contacts under load (voltage drop exposes resistance that continuity beeps forgive).</li><li><strong>Loads:</strong> compressor and fan motors — run capacitors measured against their rating (a weak capacitor is the summer's most common motor fault: hard starting, humming, overheating trips), windings checked for shorts/opens/grounds, amp draw against nameplate, start components on the systems that have them.</li><li><strong>The compressor electrical verdict</strong> comes last and carefully: a compressor that hums and trips may be electrically sound and mechanically seized, or electrically failed and mechanically fine — capacitor truth, voltage under load, and winding measurements separate the stories before anyone sells a compressor.</li></ol><p>Intermittents deserve their own respect: heat-dependent board faults, a float switch kissing the water line, a wire rubbed bare that grounds only when the blower vibrates. Log <em>when</em> it fails (hottest hour? after rain? after long runs?) — time patterns are diagnostic evidence, and Module 3's overload trips keep testifying that the protector is the symptom, never the disease.</p><div class="callout"><strong>Key idea:</strong> Power → call → switching → loads. Measure voltage under load, capacitance against rating, and amps against the nameplate — in that order, every time.</div>`
    },
    {
      heading: "The Combined Call: One System, Three Evidence Streams",
      html: `<p>Assemble the whole course on a single weak-cool call. A 3-ton R-410A split runs constantly, house stuck warm, suction line frosting at the outdoor unit.</p><ol><li><strong>Eyes and history first:</strong> filter found collapsed and filthy; the customer 'had the charge checked last year — they added some.' Two evidence streams are already suspicious.</li><li><strong>Airflow stream:</strong> new filter fitted, static pressure now reasonable, coil thawed under fan-only operation (never chip ice; melt it). Temperature split rechecked after thaw.</li><li><strong>Electrical stream:</strong> contactor contacts pitted but passing; capacitor measured within tolerance; amps plausible. Stream cleared with notes.</li><li><strong>Refrigerant stream (only now):</strong> TXV system; superheat ≈ valve setting (innocent), subcooling far above target. Pattern from Module 11: <strong>overcharge</strong> — last year's addition into a low-airflow system (which had impersonated undercharge) is still in there. Recover to target subcooling by weight; the four-value fingerprint normalizes; suction frost gone because the evaporator is finally fed correctly <em>and</em> aired correctly.</li><li><strong>Document:</strong> both faults, both fixes, weighed quantities, final readings with conditions.</li></ol><p>The moral generalizes: real systems fail in combinations, and the most common combination in the field is <em>an original fault plus a previous technician's compensation for it</em>. Diagnose the system in front of you, not the story it arrived with — and leave records that break the cycle for the next tech.</p><div class="callout"><strong>Key idea:</strong> Prove airflow, clear the electrical ladder, then — and only then — believe the gauges. Inherited overcharge on top of an airflow fault is the industry's most repeated two-act play.</div>`
    },
    {
      heading: "Why R-410A Is Being Phased Down: The AIM Act",
      html: `<p>R-410A did nothing wrong on ozone — its ODP is zero — but it is a potent greenhouse gas, and the <strong>American Innovation and Manufacturing (AIM) Act of 2020</strong> directs the EPA to phase down production and consumption of HFCs by <strong>85%</strong> on a schedule running through <strong>2036</strong>. Equipment rules follow the gas: new residential and light-commercial air-conditioning equipment has transitioned to lower-GWP refrigerants, so the installed world a new technician will service splits into eras — R-22 legacy, R-410A mainstream, and the A2L generation now arriving.</p><p>Three practice consequences:</p><ul><li><strong>R-410A is phased <em>down</em>, not banned overnight.</strong> Existing R-410A systems remain serviceable; recovered and reclaimed refrigerant (Module 9's pipeline) grows more valuable as virgin supply tightens. Leak discipline (Module 10) is now also price discipline.</li><li><strong>No drop-in thinking.</strong> The successor refrigerants are specified as part of new-equipment designs — compressors, controls, leak detection, and charge limits engineered together. There is no approved 'pour R-454B into an R-410A unit' procedure; retrofitting A1 equipment with a mildly flammable refrigerant it was never listed for is off the table (Section 5).</li><li><strong>Skills transfer, hardware doesn't.</strong> Superheat, subcooling, evacuation, recovery, and the four-value fingerprint work identically on the new refrigerants — with glide-aware P/T handling (R-454B is a blend) and A2L-rated tools and procedures added. This course's fundamentals are the transition's passport.</li></ul><div class="callout"><strong>Key idea:</strong> AIM Act: HFC production/consumption phased down 85% by 2036. R-410A service continues on recovered/reclaimed supply; new equipment speaks A2L.</div>`
    },
    {
      heading: "Meet the A2Ls: R-454B and R-32",
      html: `<p>ASHRAE safety classification <strong>A2L</strong> means lower toxicity (A) with <strong>mild flammability</strong> (2L — low burning velocity). The two refrigerants carrying the R-410A succession in North American comfort equipment:</p><ul><li><strong>R-454B</strong> — a zeotropic blend (of R-32 and the HFO R-1234yf) engineered as the closest successor to R-410A, with a GWP roughly <strong>78% lower</strong> than R-410A's and a <em>small temperature glide</em> — dew/bubble discipline (Module 8) still applies.</li><li><strong>R-32</strong> — a single-component refrigerant (itself an HFC, with a much lower GWP than R-410A), long used internationally and as a blend ingredient; no glide (single component), so its P/T chart reads like the pure refrigerants of Module 8's anchors.</li></ul><p>What changes in the field with A2Ls:</p><ul><li><strong>Equipment is designed for them:</strong> many new systems carry leak detection and mitigation (sensors that start indoor airflow to dilute a leak), charge limits tied to room volume, and A2L labeling — serviced as the manufacturer specifies, never defeated.</li><li><strong>Tools and cylinders:</strong> use recovery machines, manifolds, leak detectors, and cylinders rated for A2L service. Ventilation and ignition-source discipline join the routine — no open flames near an opened circuit; braze only after recovery and nitrogen purge.</li><li><strong>The universal laws do not change:</strong> never vent, recover with certified equipment, evacuate to ≤500 microns with a decay proof, charge by the method the metering device dictates, keep the three-year records.</li></ul><p>Retrofit concepts close the course honestly: genuine retrofits exist for <em>some</em> transitions (Module 4's oil-changeover world) where a manufacturer publishes an approved procedure. The R-410A → A2L transition is <em>not</em> one of them for existing equipment: flammability reclassifies the appliance, its listing, and its installation rules. Service the R-410A system well for its whole life — and spec an A2L system, engineered as one, when replacement day comes.</p><div class="callout"><strong>Key idea:</strong> A2L = lower toxicity, mildly flammable, much lower GWP. R-454B (blend, small glide) and R-32 (single component) succeed R-410A in NEW equipment only — same fundamentals, A2L-rated tools and procedures.</div>`
    }
  ],
  keyTerms: [
    { term: "Nominal airflow", def: "About 400 cfm per ton across the evaporator as the design center; manufacturers specify the acceptable range." },
    { term: "Total external static pressure", def: "The resistance the blower works against from the duct system and accessories; compared against the blower's rating to judge airflow health." },
    { term: "Temperature split", def: "Return-air minus supply-air dry-bulb temperature; a screening indicator influenced by airflow and latent load." },
    { term: "Low-airflow pattern", def: "Falling suction pressure and evaporating temperature, coil frosting, capacity loss — impersonates refrigerant faults." },
    { term: "Run capacitor", def: "The capacitor that keeps a PSC motor running efficiently; a weak one causes hard starts, hum, heat, and trips — measured against its rating." },
    { term: "Contactor", def: "The power switching relay for compressor/fan loads; pitted or welded contacts corrupt every downstream diagnosis." },
    { term: "Voltage drop under load", def: "Measuring voltage lost across a contact or connection while current flows; exposes resistance that unloaded checks miss." },
    { term: "Condensate float switch", def: "A safety that stops the unit when drain water rises; a frequent 'mystery' no-cool cause." },
    { term: "AIM Act", def: "The 2020 U.S. law directing EPA to phase down HFC production and consumption 85% by 2036." },
    { term: "HFC phasedown", def: "A stepped reduction in supply of high-GWP HFCs; existing equipment remains serviceable, increasingly on reclaimed refrigerant." },
    { term: "A2L classification", def: "ASHRAE safety class: lower toxicity, mildly flammable with low burning velocity." },
    { term: "R-454B", def: "A zeotropic A2L blend (R-32 + R-1234yf) succeeding R-410A in new equipment; GWP roughly 78% lower; small glide — use dew for SH, bubble for SC." },
    { term: "R-32", def: "A single-component A2L refrigerant succeeding R-410A in some new equipment; no glide." },
    { term: "Leak mitigation (A2L systems)", def: "Built-in detection and dilution (e.g., starting indoor airflow) engineered into listed A2L equipment." },
    { term: "Drop-in (prohibited sense)", def: "The fiction that a new refrigerant can simply be poured into equipment never designed or listed for it — there is no approved R-410A→A2L drop-in." },
    { term: "Inherited overcharge", def: "Excess charge added by earlier service compensating for an undiagnosed non-charge fault (classically low airflow)." }
  ],
  video: {
    title: "Measuring Static Pressure on an Air Handler for Airflow CFM!",
    embedUrl: "https://www.youtube.com/embed/eFmDmk1Siqc",
    note: "A field demonstration of measuring static pressure on an air handler to judge airflow — the first measurement this module demands before any refrigerant verdict. Watch how the readings are taken and compared with the blower's capability.",
    more: [
      { title: "Is Your AC Capacitor Bad? Here's How to Test It in Seconds!", url: "https://www.youtube.com/watch?v=bCZcNlMznTA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 3-ton system is suspected of low airflow. State the nominal design airflow, and give two field measurements that test airflow health, with what each result would tell you.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Nominal design airflow ≈ 3 × 400 = <strong>1,200 cfm</strong> (within the manufacturer's specified range). Step 2: <em>Total external static pressure</em> vs. the blower's rating — excessive static means the duct/filter system is choking flow. Step 3: <em>Temperature split</em> as a screen — an abnormally high split (with humidity considered) supports the low-airflow story; combined with visual evidence (filter, coil, wheel), it proves the case before gauges are connected.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A no-cool call: line voltage present at the disconnect, thermostat calling, but the contactor never pulls in and there is no 24V at its coil. Trace the fault domain and the next two checks.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Power exists and a call exists, but control voltage dies before the coil — the fault is in the <strong>control chain</strong>: transformer output, board, or a safety in series (pressure switch, condensate float). Step 2: Check for 24V leaving the transformer/board. Step 3: Then walk the safety chain device by device — where the 24V disappears is the open element; a float switch floating on a clogged drain is the classic find. Fix the cause (clear the drain), not just the switch.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A compressor hums, draws locked-rotor-ish current briefly, and trips. Capacitor measures far below its rating. Give the diagnosis logic and why you do not condemn the compressor yet.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A failed run/start capacitor robs a PSC/CSIR motor of starting and running torque — hum-and-trip is its signature, identical to a seized compressor's first act. Step 2: Replace the capacitor with the correct rating and re-test under proper voltage. Step 3: Only if the compressor still cannot start with a proven capacitor, full voltage under load, and healthy windings do mechanical seizure or internal failure verdicts follow. Cheapest decisive part first, measured — not guessed.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Explain to a customer, accurately and in plain language, why their healthy 8-year-old R-410A system cannot 'just be switched to the new refrigerant.'</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The new refrigerants (R-454B, R-32) are mildly flammable (class A2L); equipment for them is designed and listed as a system — sensors, charge limits, components — for that property. Step 2: Their system was designed and listed for non-flammable R-410A; no manufacturer approves converting it, and doing so would void its listing and create an unengineered flammability risk. Step 3: The good news: R-410A remains serviceable for the system's life (increasingly via reclaimed refrigerant), and when replacement day comes, the new A2L equipment is more efficient as well as lower-GWP.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An R-454B system needs its charge verified. State every way the job differs from the identical job on R-410A, referencing earlier modules.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Glide discipline (Module 8):</em> R-454B is a blend — superheat from the dew point, subcooling from the bubble point; liquid charging only. Step 2: <em>A2L discipline:</em> A2L-rated recovery machine, manifold, leak detector, and cylinder; ventilation and ignition-source control; respect the system's built-in leak-mitigation logic. Step 3: <em>Unchanged:</em> airflow first, method follows metering device, evacuation ≤500 microns with decay proof if opened, no venting, three-year records. Step 4: Same fundamentals, new label — which was the AIM transition's design.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Write the combined-call protocol (airflow/electrical/refrigerant) as five ordered rules.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: History and eyes first — filters, ice, water, oil, prior 'fixes.' Step 2: Prove airflow (static, split, coil/blower/duct evidence) before gauges. Step 3: Climb the electrical ladder — line power, control call, safeties, switching, loads (capacitor truth, amps vs. nameplate). Step 4: Only then take the four-value refrigerant fingerprint and match Module 11's patterns. Step 5: Repair, re-measure everything, and document so the next technician inherits facts instead of folklore.</p>"
    }
  ],
  quiz: [
    {
      q: "Nominal design airflow across a comfort-cooling evaporator is about:",
      choices: ["200 cfm per ton", "400 cfm per ton", "800 cfm per ton", "Airflow does not affect refrigeration performance"],
      answer: 1,
      explanation: "Correct: (b). ~400 cfm/ton is the design center manufacturers build ranges around. (a) Half airflow starves the coil of heat and drives frosting. (c) Double airflow wastes energy, hurts latent removal, and still would not fix a charge fault. (d) is false in both directions — airflow is half the heat-transfer story."
    },
    {
      q: "Low airflow impersonates refrigerant faults because it:",
      choices: ["Raises head pressure first", "Lowers evaporating temperature and suction pressure and can frost the coil — the same opening symptoms as undercharge", "Changes the refrigerant's P/T chart", "Makes superheat impossible to measure"],
      answer: 1,
      explanation: "Correct: (b). Starved of heat, the coil runs cold and suction falls — undercharge's costume. (a) Head pressure typically falls or holds with low indoor airflow in cooling. (c) P/T relationships are refrigerant properties, immune to ducts. (d) Superheat measures fine; it is the <em>interpretation</em> that airflow corrupts."
    },
    {
      q: "The correct order for a no-cool electrical diagnosis is:",
      choices: ["Compressor windings, capacitor, thermostat, breaker", "Line power → control call and safeties → switching devices → loads (capacitors, motors, amps)", "Replace the contactor, then measure", "Gauges first, meter second"],
      answer: 1,
      explanation: "Correct: (b). The ladder isolates the domain before the component. (a) starts at the most expensive suspect. (c) is parts-swapping. (d) A dead unit has no refrigerant story to tell until it can run."
    },
    {
      q: "A weak run capacitor most characteristically causes:",
      choices: ["High subcooling", "Hard starting, humming, overheating and overload trips on the motor it serves", "A tripped high-pressure switch", "Low superheat"],
      answer: 1,
      explanation: "Correct: (b). Capacitors give PSC motors their torque; weakness shows as start/run distress. (a), (c), and (d) are refrigerant-side readings a capacitor cannot set — it can only stop the machine that produces them."
    },
    {
      q: "The AIM Act directs an HFC phasedown of ___ by 2036:",
      choices: ["15%", "50%", "85%", "100% — all HFC use banned in 2036"],
      answer: 2,
      explanation: "Correct: (c). The statutory schedule phases production/consumption down 85% through 2036. (a) and (b) understate the mandate. (d) overstates it — a phasedown is not a total ban, and existing equipment remains serviceable, increasingly on reclaimed refrigerant."
    },
    {
      q: "A2L in a refrigerant's safety classification means:",
      choices: ["Toxic and highly flammable", "Lower toxicity, mildly flammable (low burning velocity)", "Non-toxic and non-flammable", "Approved for use in any older equipment"],
      answer: 1,
      explanation: "Correct: (b). A = lower toxicity; 2L = mild flammability with low flame speed — manageable by engineered equipment design. (a) describes B/A3-class hazards. (c) is the A1 class (R-410A's). (d) A2Ls are specified for equipment designed and listed for them, never a field pour-in."
    },
    {
      q: "R-454B differs from R-32 in a way that changes gauge work because R-454B:",
      choices: ["Is a single component like R-32", "Is a zeotropic blend with a small glide — superheat from dew point, subcooling from bubble point", "Needs no evacuation", "Cannot be recovered"],
      answer: 1,
      explanation: "Correct: (b). Blend discipline from Module 8 applies to R-454B; R-32, single-component, reads off one column. (a) reverses the facts. (c) Evacuation law and physics apply to both. (d) Both are recovered with certified (A2L-rated) equipment."
    },
    {
      q: "A customer asks to convert their R-410A system to R-454B 'since it's basically the same.' The professional answer is:",
      choices: ["Yes, with a longer evacuation", "No — A2L refrigerants belong in equipment designed and listed for them; service the R-410A system properly and choose A2L at replacement", "Yes, if you also change the oil", "Only in winter"],
      answer: 1,
      explanation: "Correct: (b). Flammability reclassifies the appliance, its listing, and its installation rules; no approved drop-in conversion exists. (a) Evacuation quality does not change a listing. (c) Oil is the smallest of the barriers. (d) Season is irrelevant to safety classification."
    }
  ],
  studyGuide: `
<h3>Module 12 — Airflow, Electrical &amp; Alternative Refrigerants: Quick Reference</h3>
<p><strong>Airflow:</strong> ≈400 cfm/ton nominal. Prove it first: static pressure vs. blower rating, temperature split (humidity-aware), filter/coil/wheel/duct evidence. Low airflow = low suction + frosting — undercharge's costume.</p>
<p><strong>Electrical ladder:</strong> line power → control call &amp; safety chain (float switch!) → switching (contactor, voltage drop under load) → loads (capacitor vs. rating, windings, amps vs. nameplate). Overload trips are symptoms.</p>
<p><strong>Combined rule:</strong> airflow, then electrical, then the four-value fingerprint. Beware the inherited overcharge stacked on an airflow fault.</p>
<p><strong>AIM Act:</strong> HFC production/consumption phased down <strong>85% by 2036</strong>. R-410A service continues (reclaimed supply grows); new equipment goes A2L.</p>
<p><strong>A2L:</strong> lower toxicity, mildly flammable. <strong>R-454B</strong> = blend (R-32 + R-1234yf), GWP ~78% below R-410A, small glide → dew for SH, bubble for SC, liquid charging. <strong>R-32</strong> = single component, no glide. A2L-rated tools/cylinders; respect built-in leak mitigation.</p>
<p><strong>Watch out:</strong> there is NO approved R-410A→A2L drop-in. Retrofits exist only where a manufacturer publishes an approved procedure.</p>
`
};
