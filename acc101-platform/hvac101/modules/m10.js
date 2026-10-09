// HVAC 101 - Module 10: Evacuation
module.exports = {
  number: 10,
  slug: "evacuation",
  title: "Evacuation",
  estTime: "3–4 hours",
  objectives: [
    "Explain what evacuation removes — air, other non-condensables, and moisture — and the harm each causes if left behind.",
    "Describe a correct evacuation setup: pump, micron gauge placement, large short hoses, and cores removed.",
    "State the target of 500 microns or below and how a standing (decay) test proves or disproves success.",
    "Explain triple evacuation with dry nitrogen and when it earns its extra time.",
    "Interpret micron readings that rise, stall, or fall and match each pattern to its likely cause."
  ],
  sections: [
    {
      heading: "What Evacuation Removes and Why It Must Go",
      html: `
<p>Evacuation is the deep vacuum drawn on a system after it is sealed and before it is charged. It removes two enemies. The first is <strong>air and other non-condensable gases</strong>, which will not condense in the condenser; left inside, they occupy condenser surface, add their pressure to head pressure, and raise discharge temperature and current draw for the life of the system. The second is <strong>moisture</strong>. Water vapor inside a system can freeze at the metering device and intermittently block it, and over time water combines with refrigerant and oil breakdown products to form acids that attack motor insulation and plate bearing surfaces with sludge. A compressor rarely dies of vacuum done well; many die slowly of vacuum done cheaply.</p>
<p>Deep vacuum removes moisture by boiling it. Recall from Module 2 that lowering pressure lowers water's boiling point; at pressures in the hundreds of microns, water inside a system boils at temperatures far below freezing and leaves as vapor through the pump. This is why evacuation is sometimes called dehydration: the vacuum is not merely emptying the pipes, it is coaxing liquid water hiding in oil, in low spots, and on surfaces to become vapor and leave.</p>
<p>Evacuation is not leak testing and not a substitute for it. A system can pull a beautiful vacuum through a leak path that only opens under pressure, and vacuum can temporarily seal some joints that pressure will push open. Tightness is proven by a pressure test; dryness and air removal are proven by vacuum decay. The two proofs answer different questions and both belong in a proper installation or repair sequence.</p>
<div class="callout"><strong>Key idea:</strong> Vacuum removes air and water. Pressure proves tightness. Confusing the two jobs leaves systems that are dry but leaky, or tight but wet — both are failures.</div>`
    },
    {
      heading: "The Setup: Short, Large, and Measured at the System",
      html: `
<p>At deep vacuum, gas molecules are scarce and lazy; every restriction is a traffic jam. A proper setup therefore removes restrictions ruthlessly. Connect the pump with <strong>short, large-diameter, vacuum-rated hoses</strong> — or hard copper — rather than a long manifold hose set with its small passages. Pull the <strong>Schrader cores</strong> out with core-removal tools so the flow path is the full port, not a pinhole. Keep the manifold out of the main path where possible, using vacuum-rated valves to control the rig.</p>
<p>Place the <strong>micron gauge at the system</strong>, on the side opposite or far from the pump connection, so it reads the pressure the system has actually reached. A gauge at the pump will happily report the pump's own neighborhood, hundreds of microns deeper than the far end of a long system. Isolate with a valve arrangement that lets you blank off the pump while leaving the gauge reading the system — that isolation is what makes the standing test possible.</p>
<p>Pump care closes the loop. Fresh oil at the correct level, because contaminated oil caps the pump's ultimate vacuum. Warm the pump per its instructions in cold weather. Verify a suspect rig against a known-tight vessel before blaming the system. And protect the finished vacuum: when the pump stops, a valved-off system keeps its vacuum; an open hose end donates it back to the atmosphere in seconds.</p>
<div class="callout"><strong>Key idea:</strong> Gauge far, hoses fat and short, cores out, oil fresh. Most slow evacuations are rig problems wearing a system costume.</div>`
    },
    {
      heading: "The Target and the Standing Test",
      html: `
<p>The target taught in this program and across the trade is to pull the system to <strong>500 microns or below</strong>. Reaching it momentarily at the gauge is not the finish; the finish is the <strong>standing test</strong>, also called a decay test. Valve the pump off, leave the micron gauge reading the isolated system, and watch. In a dry, tight system the reading rises slightly — residual outgassing and equalization — then levels off and holds below or near the target region. That leveling is the signature of success.</p>
<p><strong>Worked Example — reading a decay test.</strong> A system is isolated at 420 microns. After ten minutes it reads 610 microns and is still creeping upward at a steady rate. Step 1: A small rise that plateaus suggests moisture still boiling off; a rise that continues linearly suggests gas entering — a leak. Step 2: This trace has not plateaued, so it has not passed. Step 3: The next move is diagnosis, not charging: continue evacuation if moisture is suspected (it should eventually dry and level), or pressure-test to find the leak if the rise never slows. Step 4: Only a leveled trace earns the charge.</p>
<p>Numbers keep everyone honest. A system isolated at 480 microns that holds at 520 after fifteen minutes has behaved like a dry, tight system. A system that rockets past 1,000 microns in a minute has a gross leak or an open valve in the rig. A system that climbs to a few thousand and parks there, stubbornly, is often wet: the reading is resting at the vapor pressure of the water still inside, and more pumping time — or triple evacuation — is the cure.</p>
<div class="formula">Pull to 500 microns or below. Isolate. It must level off, not keep climbing.</div>`
    },
    {
      heading: "Triple Evacuation: Breaking Vacuum With Nitrogen",
      html: `
<p><strong>Triple evacuation</strong> repeats the pull three times, breaking the vacuum between pulls with <strong>dry nitrogen</strong> to near atmospheric pressure rather than with air. Each dilution sweeps moisture out with the nitrogen when the next pull starts, the way rinsing a glass three times cleans better than one long soak. The method earns its keep on systems that were open in humid weather, systems with known water entry, and stubborn decay traces that park at a moisture plateau.</p>
<p>The procedure in outline: pull a first vacuum, moderately deep, and break it with dry nitrogen admitted slowly. Let the nitrogen sit briefly to absorb moisture. Pull the second vacuum, break again with dry nitrogen. Pull the third vacuum all the way to the target of 500 microns or below and finish with the standing test. Nitrogen is always dry nitrogen from a regulated cylinder at safe pressure — never air from a shop compressor, which carries exactly the moisture and oil mist the process exists to remove, and never oxygen or refrigerant as a sweep gas.</p>
<p>Judgment applies. A factory-sealed new line set installed on a dry day usually passes a single careful evacuation with a clean decay. Burning field hours on triple evacuation for every job is waste; skipping it on a system that sat open through a rainstorm is false economy that returns as an acid failure. Match the method to the moisture evidence: the decay trace itself is the report that tells you whether the system needed more.</p>
<div class="callout"><strong>Key idea:</strong> Triple evacuation is dilution drying: vacuum, dry nitrogen, vacuum, dry nitrogen, vacuum, prove it. It is prescribed by moisture evidence, not by habit.</div>`
    },
    {
      heading: "Reading the Micron Gauge Like a Diagnostician, Plus a Recap",
      html: `
<p>Micron traces have personalities. A <strong>smooth, slowing fall</strong> toward the target is health. A <strong>stall at a plateau</strong> that lasts and lasts is moisture boiling at its vapor pressure; patience or nitrogen breaks move it. A <strong>rise on isolation that never levels</strong> is a leak or a rig path left open. A reading that <strong>jumps around</strong> can be a gauge placed too close to the pump's pulsing flow, moisture bursts, or a failing sensor — relocate the gauge and verify the rig before inventing system faults. A pump that <strong>cannot pull a blanked-off test vessel deep</strong> is confessing its own oil or mechanical problem.</p>
<p><strong>Worked Example — the helpful manifold.</strong> A system evacuated through a standard manifold and long hoses stalls at 1,800 microns for an hour. Step 1: Before condemning the system, blank the pump and gauge directly together: the rig alone reaches only 900 microns — the rig is the ceiling. Step 2: Change the pump oil, shorten and enlarge the path, pull the cores. Step 3: The same system now falls past 500 and holds. The system was innocent; the measurement chain was the fault, as it so often is.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Evacuation removes air (non-condensables) and moisture; pressure tests prove tightness. Different jobs, both required.</li>
<li>Setup: short, fat, vacuum-rated paths; cores out; gauge at the system, far from the pump; fresh pump oil.</li>
<li>Target 500 microns or below, proven by a standing test that levels off.</li>
<li>Triple evacuation with dry nitrogen breaks is the prescription for moisture-heavy systems.</li>
<li>Traces diagnose: plateau means moisture, endless rise means leak, jitter means rig or gauge.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Evacuation", def: "Drawing a deep vacuum on a sealed system to remove air and moisture before charging." },
    { term: "Dehydration", def: "Removing water from a system by boiling it off under deep vacuum." },
    { term: "Non-condensables", def: "Gases such as air that will not condense in the condenser and raise head pressure if left in a system." },
    { term: "Micron", def: "A unit of absolute pressure; the evacuation target is 500 microns or below." },
    { term: "Standing test (decay test)", def: "Isolating a system from the pump and watching whether its micron reading levels off or keeps climbing." },
    { term: "Triple evacuation", def: "Three vacuum pulls with dry-nitrogen breaks between them to dilute and sweep out stubborn moisture." },
    { term: "Dry nitrogen", def: "Moisture-free nitrogen used for pressure testing and for breaking vacuum during triple evacuation." },
    { term: "Core removal tool", def: "A valved tool that removes Schrader cores to open the full port for evacuation." },
    { term: "Vacuum-rated hose", def: "A hose that holds its shape and seal under vacuum without collapsing or leaking through its walls." },
    { term: "Ultimate vacuum", def: "The deepest vacuum a pump can reach, limited by its condition and oil quality." },
    { term: "Outgassing", def: "The slow release of trapped gases and vapors from materials inside a system under vacuum." },
    { term: "Blank-off test", def: "Testing a pump and gauge isolated together to learn the rig's own best achievable vacuum." },
    { term: "Acid formation", def: "The creation of acids from moisture, heat, refrigerant, and oil breakdown, attacking motors and bearings." },
    { term: "Pressure test", def: "Proving tightness with positive pressure, usually dry nitrogen within equipment limits — distinct from evacuation." },
    { term: "Vapor pressure plateau", def: "The micron level at which residual water's boiling holds the reading steady during evacuation." },
    { term: "Isolation valve", def: "A valve that separates the pump from the system while leaving the micron gauge reading the system." }
  ],
  video: {
    title: "Why 500 Microns? Evacuation & Vacuum Decay Test Explained (HVAC)",
    embedUrl: "https://www.youtube.com/embed/XflHH6cNckE",
    note: "Explains why the trade targets 500 microns and how the vacuum decay (standing) test separates a dry, tight system from a wet or leaking one. Watch how the shape of the decay trace, not just the lowest number reached, carries the verdict.",
    more: [
      { title: "HVAC Vacuum Problems: 5 Tips for a Micron Gauge Reading Jumping Around!", url: "https://www.youtube.com/watch?v=Ks3MtPmXDUE" },
      { title: "Vacuum Practices for Large Jobs", url: "https://www.youtube.com/watch?v=YMoP7wl8a0Y" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Name the two categories of contamination evacuation removes and one specific harm from each if it stays.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Non-condensable gas (air)</strong> — occupies condenser surface and adds pressure, raising head pressure, discharge temperature, and current draw. Step 2: <strong>Moisture</strong> — freezes at the metering device and forms acids with oil and refrigerant breakdown products, attacking motor insulation and bearings.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A system is valved off at 400 microns. Ten minutes later it reads 450; at twenty minutes, 460; at thirty, 462. Verdict and reasoning?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The rise is decelerating and leveling below a reasonable band near the target — the classic trace of a dry, tight system with minor outgassing. Step 2: Verdict: <strong>pass</strong>; proceed to charge. Step 3: A leak would show a steady, unleveling climb, and moisture a higher stubborn plateau.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A system is valved off at 430 microns and climbs steadily to 1,900 microns without slowing. Verdict and next action?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A continuous, unleveling rise means gas is entering — a leak in the system or rig. Step 2: Verdict: <strong>fail</strong>; do not charge. Step 3: Check rig connections first, then pressure-test with dry nitrogen within limits and locate the leak, repair, and evacuate again.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> List the steps of triple evacuation in order and state when it is indicated.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Pull a first vacuum. Step 2: Break it with dry nitrogen to near atmospheric pressure and let it stand briefly. Step 3: Pull a second vacuum and break with dry nitrogen again. Step 4: Pull the third vacuum to 500 microns or below and finish with a standing test. Step 5: Indication — moisture evidence: systems open in humid conditions, known water entry, or a decay trace parked at a moisture plateau.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A pump pulls a manifold rig only to 900 microns when blanked off at the gauge. The connected system stalls at 1,200. What do you fix first and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The rig itself cannot beat 900, so it is the ceiling on any system attached to it; the system's 1,200 tells nothing about the system yet. Step 2: Service the rig first — fresh pump oil, check hoses and seals, shorten and enlarge the path. Step 3: Re-prove the rig deep, then re-evacuate the system and judge its own trace.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why is the micron gauge placed far from the pump rather than beside it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Pressure in a system under evacuation is not uniform; the region near the pump is deepest. Step 2: A gauge at the pump reports the pump's neighborhood and can read hundreds of microns lower than the system's far end. Step 3: Placing the gauge at the system makes the reading testify about the system — the only testimony that counts for the standing test.</p>"
    }
  ],
  quiz: [
    {
      q: "Evacuation primarily removes:",
      choices: ["Refrigerant oil and sludge", "Air and moisture", "Excess refrigerant charge", "Nitrogen used in brazing only"],
      answer: 1,
      explanation: "Correct: (b). Non-condensable air and water vapor are the targets. (a) Oil belongs in the system and is not evacuated out. (c) Charge quantity is set by recovery and charging, not by vacuum depth. (d) Brazing nitrogen leaves during normal service steps; evacuation's standing targets are air and moisture from any source."
    },
    {
      q: "The evacuation target in this program is:",
      choices: ["5,000 microns, roughly", "500 microns or below, proven by a standing test", "29 inHg on the compound gauge", "Any reading below atmospheric"],
      answer: 1,
      explanation: "Correct: (b). The target plus the decay proof is the standard. (a) is ten times too shallow and leaves harmful moisture. (c) A dial cannot resolve the region that matters. (d) Below-atmospheric includes vacuums thousands of microns deep — meaningless as a dryness claim."
    },
    {
      q: "During a standing test, a dry, tight system shows a micron reading that:",
      choices: ["Falls to zero", "Rises slightly, then levels off", "Climbs steadily without slowing", "Returns to atmospheric pressure in minutes"],
      answer: 1,
      explanation: "Correct: (b). Minor outgassing lifts the reading a little, then it parks. (a) Zero is unattainable and unnecessary. (c) describes a leak signature. (d) describes a gross leak or an open rig valve."
    },
    {
      q: "A micron trace that parks for a long time at a few thousand microns most likely means:",
      choices: ["A large leak to atmosphere", "Moisture inside boiling at its vapor pressure — keep pulling or use nitrogen breaks", "The system is ready to charge", "The compressor is running"],
      answer: 1,
      explanation: "Correct: (b). The plateau is water's vapor pressure asserting itself; dehydration is still in progress. (a) A large leak would prevent reaching and holding a plateau that low. (c) Charging now installs the moisture permanently. (d) Compressors are off during evacuation."
    },
    {
      q: "Triple evacuation breaks the vacuum with:",
      choices: ["Shop air", "Refrigerant vapor", "Dry nitrogen", "Oxygen"],
      answer: 2,
      explanation: "Correct: (c). Dry nitrogen dilutes moisture without adding any. (a) Shop air carries moisture and oil mist — the contaminants being removed. (b) Refrigerant as a sweep would be a release and a contamination of the procedure. (d) Oxygen with oil is a combustion hazard and never used."
    },
    {
      q: "Removing Schrader cores during evacuation helps because:",
      choices: ["It lets refrigerant escape faster later", "It removes a major flow restriction from the evacuation path", "It raises the system's pressure rating", "It cleans the cores automatically"],
      answer: 1,
      explanation: "Correct: (b). At deep vacuum, the core's pinhole throttles flow severely; the full port pulls far faster. (a) Cores are reinstalled for service; escape is never a goal. (c) Pressure ratings are set by the vessel, not service fittings. (d) Cores still need inspection and sometimes replacement on their own merits."
    },
    {
      q: "A system pulls quickly to 480 microns at a gauge mounted beside the pump, but the job is not proven because:",
      choices: ["480 is above the target", "The gauge read the pump's neighborhood, not the system; placement must be at the system with a standing test", "Microns cannot be read below 500", "The pump was too large"],
      answer: 1,
      explanation: "Correct: (b). Location and the decay proof make the number meaningful; both were skipped. (a) 480 is below 500 and would satisfy the numeric target if properly measured. (c) Micron gauges read far below 500 routinely. (d) Pump size does not invalidate a properly placed, decay-proven reading."
    },
    {
      q: "Evacuation cannot substitute for a pressure leak test because:",
      choices: ["Vacuum is too strong and damages joints", "Some leaks open only under positive pressure, and vacuum can temporarily seal joints", "Pressure tests are legally the same as evacuation", "Nitrogen is unavailable on most jobs"],
      answer: 1,
      explanation: "Correct: (b). The two tests stress joints in opposite directions and answer different questions. (a) Working vacuum does not damage sound joints. (c) They are distinct procedures with distinct purposes. (d) Nitrogen is a standard truck item for this trade."
    }
  ],
  studyGuide: `
<h3>Module 10 — Evacuation: Quick Reference</h3>
<p><strong>Purpose:</strong> Remove air (non-condensables → high head pressure) and moisture (freezing at the metering device, acid formation). Vacuum dries by boiling water at low pressure.</p>
<div class="formula">Target: 500 microns or below at the system, then a standing test that levels off</div>
<p><strong>Setup:</strong> Pump with fresh oil · short, large, vacuum-rated path · Schrader cores removed · micron gauge at the system, far from pump · rig blank-off checked when results look wrong.</p>
<p><strong>Trace reading:</strong> Levels off = dry and tight. Steadily climbing = leak. Parked plateau = moisture still boiling. Jitter = gauge placement or rig issue.</p>
<p><strong>Triple evacuation:</strong> Vacuum → dry nitrogen break → vacuum → dry nitrogen break → vacuum to target → standing test. Prescribed by moisture evidence (open in humidity, known water entry, stubborn plateau). Never break vacuum with shop air or oxygen.</p>
<p><strong>Not the same:</strong> Pressure test proves tightness; vacuum proves dryness and air removal. A job needs both proofs.</p>
<p><strong>Self-check:</strong> Before charging any system, say out loud which proof you hold for tightness and which for dryness, and what trace earned each one. If either answer is a shrug, the evacuation is not finished — the standing test's leveling trace, not the pump's run time, is the only signature that counts.</p>
`
};
