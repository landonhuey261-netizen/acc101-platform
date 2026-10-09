// HVAC 102 - Module 7: Evacuation & Dehydration: Advanced Practice
module.exports = {
  number: 7,
  slug: "evacuation-dehydration-advanced",
  title: "Evacuation & Dehydration: Advanced Practice",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a deep vacuum actually removes — air, moisture, and other non-condensables — and why microns are the unit of truth.",
    "Execute best-practice evacuation: large hoses, core removal, pump placement, and micron gauge at the system (not the pump).",
    "Perform and interpret a standing (decay) test, separating leak signatures from moisture/outgassing signatures.",
    "Apply triple evacuation with dry nitrogen sweeps when moisture load demands it.",
    "Run a complete post-burnout cleanup: recovery, flushing decisions, cleanup driers, acid testing, and verification before recharge."
  ],
  sections: [
    {
      heading: "Why 500 Microns: What Vacuum Really Does",
      html: `<p>Evacuation is dehydration, not just 'sucking the air out.' A system open for service contains air (a non-condensable that will raise head pressure and falsify every reading in Module 11) and <strong>water</strong> — as vapor, as droplets, and absorbed into POE oil (Module 4). Water is the saboteur: it freezes at the metering device, hydrolyzes oil into acid, and corrodes from inside. The vacuum pump's job is to drop pressure so low that water <em>boils at room temperature</em> and leaves as vapor.</p><p>The unit of truth is the <strong>micron</strong> — one micron is 1/1000 of a millimeter of mercury. Atmosphere is 760,000 microns. The industry evacuation target taught throughout this program is <strong>500 microns or below</strong>: deep enough that moisture boils aggressively at ordinary temperatures and deep enough that a system holding there is demonstrably tight and dry. A compound gauge reading '30 inches' cannot resolve the difference between 800 microns (wet) and 300 microns (dry) — that entire drama happens in the needle's last fraction of travel. This is why the <strong>micron gauge is not optional equipment</strong> at this level: without it you are not measuring evacuation, you are estimating a rumor of it.</p><p>Speed is plumbing, not pump bravado. Vacuum flows through restrictions like water through straws: small charging hoses, Schrader cores in place, and manifold gauge bodies throttle the pump to a fraction of its nameplate. Best practice: largest practical hose diameter, shortest runs, <strong>valve cores removed</strong> with core-removal tools, pump connected as directly to the system as the job allows, and fresh pump oil (oil is the pump's own desiccant — cloudy oil is spent oil).</p><div class="callout"><strong>Key idea:</strong> Target ≤500 microns, measured at the system. Everything else — hose size, cores out, fresh oil — is how you get there in finite time.</div>`
    },
    {
      heading: "The Standing (Decay) Test: The System Testifies",
      html: `<p>Reaching 500 microns proves the pump works. The <strong>standing test</strong> (vacuum decay test) proves the <em>system</em> is tight and dry: isolate the system from the pump (close the core-removal tool valves — never rely on the manifold), leave the micron gauge connected to the system, and watch the pressure over time.</p><ul><li><strong>Holds at or near the pull-down value</strong> (a small rise that levels off well below 1,000 microns): the system is tight and dry. Proceed.</li><li><strong>Rises steadily and keeps rising toward atmosphere:</strong> a leak. Air is entering through a real opening. The slope does not flatten, because the outside reservoir is infinite. Find the leak (Module 10) rather than pulling longer — vacuum is not leak sealant.</li><li><strong>Rises, then levels off at an elevated plateau:</strong> moisture or outgassing. Residual water boils until its vapor pressure equilibrates; refrigerant/oil soaked materials release trapped gas. The plateau is the signature — break the vacuum with dry nitrogen and pull again (triple evacuation, Section 3), and investigate where the water is hiding (wet oil, a water-logged coil).</li></ul><p>Two placement rules make the test honest. First, the micron gauge belongs <strong>on the system, as far from the pump as practical</strong> — a gauge at the pump reads the pump's vacuum, flattering you by hundreds of microns. Second, isolate properly: a decay test through an open manifold reads the hoses' and pump's leaks as if they were the system's.</p><p>Time expectations scale with system size and moisture load; a small dry residential system testifies in minutes, a large wet commercial circuit can take far longer. What does not change is the standard of evidence: a system you will charge must first hold a vacuum like it means it.</p><div class="callout"><strong>Key idea:</strong> Leak = rise that never levels. Moisture = rise that plateaus. Read the shape, not just the number.</div>`
    },
    {
      heading: "Triple Evacuation and Stubborn Moisture",
      html: `<p>Some systems arrive wet beyond one pull-down's patience: a coil that took on water, a circuit open through a rainy week, a burnout washed with condensate. The weapon is <strong>triple evacuation</strong>:</p><ol><li>Pull down toward roughly 1,000–1,500 microns (the first pass removes the bulk of air and loose moisture).</li><li>Break the vacuum with <strong>dry nitrogen</strong> to a slight positive pressure and let it stand briefly — the dry gas dilutes and scavenges residual water vapor throughout the circuit, including pockets the pump's flow pattern missed.</li><li>Pull down again, deeper; repeat the nitrogen break once more; final pull to ≤500 microns and prove it with a standing test.</li></ol><p>Why it works: each nitrogen sweep lowers the <em>concentration</em> of water vapor the next evacuation must remove, and the standing periods let moisture migrate out of oil and dead-end passages into the gas stream where the pump can reach it. Heat helps where it can be applied safely (a warm building, sun on an outdoor coil) because warm water evaporates faster than cold — the same reason a system that sat open in winter fights evacuation hardest.</p><p>Discipline notes: nitrogen is a tool gas here, never a refrigerant substitute, and it is vented as nitrogen (a normal component of air) — refrigerant, by contrast, is never vented under any procedure in this course (Module 9). And when moisture defeats repeated triple evacuations, suspect a reservoir: standing water in a low coil or trap, or saturated POE. Those are mechanical problems (drain it, replace the oil/component) that no amount of pumping cures.</p><div class="callout"><strong>Key idea:</strong> Triple evacuation is dilution engineering: sweep, dilute, remove — then prove dryness with a decay test, not with hope.</div>`
    },
    {
      heading: "After the Burnout: System Cleanup Procedure",
      html: `<p>A motor burnout is a chemical spill inside a sealed circuit: acid, carbon, sludge, and metallic debris distributed everywhere the oil traveled. Installing a new compressor into that soup is how one failure becomes three. The cleanup sequence:</p><ol><li><strong>Recover the refrigerant</strong> with certified equipment into a proper recovery cylinder (Module 9) — burnout refrigerant is contaminated waste, handled and documented as such, never vented and never reused as-is.</li><li><strong>Test before you tear:</strong> an oil acid test on the failed compressor's oil confirms severity and gives you the baseline the cleanup must improve.</li><li><strong>Remove the failed compressor</strong> and account for its oil (Module 4's measurements). Decide on line flushing per the compressor manufacturer's guidance — some manufacturers restrict flush solvents and hold the installer responsible for residue; where flushing is not approved, component replacement and filtration carry the cleanup.</li><li><strong>Install cleanup filtration:</strong> an oversized suction-line cleanup filter-drier plus a new liquid-line drier (Module 6) — the filtration team that will strip acid and debris during the first run hours.</li><li><strong>Evacuate to ≤500 microns with a passing decay test</strong>, charge correctly, and run the system.</li><li><strong>Verify the cleanup:</strong> re-test the oil for acid after the prescribed run period. Clean result → replace the suction cleanup drier with a standard one (or remove it per manufacturer instruction) and fit a fresh liquid-line drier. Still acidic → repeat drier changes and testing until it passes. Document every step — the paper trail is part of the repair (and Module 10's recordkeeping habits apply).</li></ol><p>Also replace the contactor when a burnout is electrical (welded/pitted contacts are a repeat-failure cause) and verify the crankcase heater — cleanup money spent while a migration fault survives is money staged for the next failure.</p><div class="callout"><strong>Key idea:</strong> Burnout cleanup is a verified process, not a parts swap: test, filter, evacuate, run, re-test — and the job is not done until the acid test says so.</div>`
    },
    {
      heading: "Evacuation Failures and Troubleshooting the Pull-Down",
      html: `<p>When a system will not pull down, work the chain from pump outward:</p><ul><li><strong>Pump health:</strong> blank off the pump with the micron gauge directly on it. A healthy pump with fresh oil pulls deep and fast; a pump that stalls high has spent oil, worn vanes, or a gas-ballast left open. Change oil first — it cures more 'bad pumps' than any repair.</li><li><strong>The rig:</strong> cores left in, pinched or permeable hoses, a manifold in the path, leaking core-tool seals. Simplify the rig until the pull improves; the rig is guilty until proven innocent.</li><li><strong>Gauge placement and honesty:</strong> micron gauge on the system, far side from the pump; a gauge reading pump vacuum has ended more investigations wrongly than any leak ever has.</li><li><strong>The system:</strong> genuine leaks (decay rises without plateau), standing water (plateau + slow progress), ice: moisture freezing at a restriction during pull-down can temporarily plug its own exit, faking tightness that 'fails' later as it melts — a reason the decay test is watched over time, not glanced at.</li><li><strong>Refrigerant still present:</strong> a system 'evacuated' over trapped refrigerant or a flooded low side will plateau at that refrigerant's vapor pressure behavior. Verify recovery was complete before blaming the pump.</li></ul><p>Advanced habit: log your pull-downs. Times and decay curves for similar systems build the intuition that separates 'this is slow because it is big and wet' from 'this is slow because it leaks' in the first minutes instead of the second hour.</p><div class="callout"><strong>Key idea:</strong> Prove the pump on a blank-off, prove the rig by simplification, and only then believe the system's testimony.</div>`
    }
  ],
  keyTerms: [
    { term: "Micron", def: "A unit of vacuum equal to 1/1000 of a millimeter of mercury; atmosphere is 760,000 microns." },
    { term: "Evacuation target", def: "In this program: pull the system to 500 microns or below, then verify with a standing test." },
    { term: "Standing (decay) test", def: "Isolating the evacuated system from the pump and watching micron rise over time to judge tightness and dryness." },
    { term: "Leak signature (decay)", def: "A steady micron rise that continues toward atmosphere without leveling — air entering through an opening." },
    { term: "Moisture signature (decay)", def: "A micron rise that levels off at an elevated plateau — water boiling/outgassing until vapor pressure equilibrates." },
    { term: "Non-condensables", def: "Gases such as air that do not condense at system conditions; they raise head pressure and corrupt operating readings." },
    { term: "Valve core removal tool", def: "A fitting that lets Schrader cores be removed for unrestricted evacuation and reinstalled under vacuum." },
    { term: "Micron gauge placement", def: "On the system, as far from the pump as practical, so the reading reflects system vacuum rather than pump vacuum." },
    { term: "Triple evacuation", def: "Three pull-downs with dry-nitrogen breaks between them, diluting residual moisture for removal." },
    { term: "Dry nitrogen sweep", def: "Breaking a vacuum with dry nitrogen to scavenge water vapor from the whole circuit." },
    { term: "Gas ballast", def: "A vacuum-pump feature admitting a small air bleed to help purge moisture from pump oil; left open, it limits ultimate vacuum." },
    { term: "Burnout cleanup", def: "The verified post-burnout process: recovery, acid testing, cleanup filtration, deep evacuation, run-in, and re-testing." },
    { term: "Suction cleanup drier", def: "An oversized temporary filter-drier that strips acid and debris from a contaminated system during cleanup." },
    { term: "Acid test", def: "A test of compressor oil for acid content; the pass/fail evidence that a cleanup is complete." },
    { term: "Blank-off test", def: "Checking a vacuum pump's ultimate vacuum with the gauge directly on the isolated pump." },
    { term: "Outgassing", def: "Release of gas absorbed in materials (oil, elastomers, moisture films) under vacuum; a plateau source in decay tests." }
  ],
  video: {
    title: "Why 500 Microns? Evacuation & Vacuum Decay Test Explained (HVAC)",
    embedUrl: "https://www.youtube.com/embed/XflHH6cNckE",
    note: "A focused explanation of the 500-micron target and how to read a vacuum decay test — the exact evidence standard this module requires before charging. Watch the decay-curve interpretation closely; the assignment asks you to classify curves by shape.",
    more: [
      { title: "HVAC Vacuum Problems: 5 Tips for a Micron Gauge Reading Jumping Around!", url: "https://www.youtube.com/watch?v=Ks3MtPmXDUE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A decay test rises from 420 microns to 900 microns in ten minutes, then holds at 900 for the next twenty. Classify the result and state the next action.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A rise that <strong>levels off at a plateau</strong> is the moisture/outgassing signature, not a leak. Step 2: The system is tight but wet (or materials are outgassing). Step 3: Next action: break the vacuum with dry nitrogen, allow a sweep/stand, and re-evacuate toward ≤500 microns (triple-evacuation method), then repeat the standing test. Charging now would seal today's moisture into tomorrow's acid.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A second system's decay rises steadily — 500, 1,200, 2,500, 5,000 microns — never slowing. Classify it, and explain why 'just pull it longer' is the wrong remedy.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A continuous rise toward atmosphere is a <strong>leak signature</strong> — outside air is entering through an opening. Step 2: Pumping longer cannot win against an infinite reservoir; the vacuum will never hold. Step 3: Remedy: pressurize with dry nitrogen (with the trace method the situation calls for) and find the leak (Module 10 methods), repair, then evacuate and decay-test again.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A technician reports '500 microns' with the gauge teed at the pump inlet, manifold in line, and both Schrader cores in place. List the three rig faults and the fix for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Gauge at the pump</em> — it reads pump vacuum, not system vacuum; move the micron gauge onto the system, far side from the pump. Step 2: <em>Manifold in the path</em> — a restriction and leak source; connect the pump as directly as practical with large hoses. Step 3: <em>Cores in place</em> — Schrader cores throttle vacuum flow severely; remove them with core-removal tools (which also provide the isolation valves for an honest decay test).</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Write the ordered post-burnout cleanup checklist from recovery to sign-off.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Recover contaminated refrigerant with certified equipment; document it. Step 2: Acid-test the failed compressor's oil for a baseline. Step 3: Remove the compressor; measure/account for oil; flush only per manufacturer guidance. Step 4: Fit suction cleanup drier + new liquid-line drier. Step 5: Evacuate ≤500 microns with a passing decay test; charge; run. Step 6: Re-test oil acid — repeat drier changes until clean, then finalize driers. Step 7: Check the accessories (contactor, crankcase heater) and document everything.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A vacuum pump stalls at 2,000 microns blanked off with its gauge. Before condemning the pump, what two service items do you address, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Pump oil</em> — moisture-saturated oil is the most common cause of a high blank-off; change it (possibly twice on a wet-worked pump) and retest. Step 2: <em>Gas ballast position</em> — a ballast left open deliberately limits ultimate vacuum; close it for the final pull per the pump's instructions. Step 3: Only if a serviced, correctly set pump still stalls do internal wear (vanes/seals) become the verdict.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why a system can pass a quick 'needle near 30 inches' glance on a compound gauge and still be unfit to charge. Quantify the blind spot.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Compound gauges resolve inches of mercury; the entire decision range of evacuation — roughly the last few thousand microns down to 500 — compresses into the needle's final fraction of travel. Step 2: 800 microns (still wet) and 300 microns (dry) are indistinguishable on that dial. Step 3: Therefore fitness to charge is established only by a micron gauge on the system plus a decay test; the compound gauge literally cannot see the difference that matters.</p>"
    }
  ],
  quiz: [
    {
      q: "The evacuation target used in this program is:",
      choices: ["29 inches of mercury on a compound gauge", "500 microns or below, verified by a standing test", "1,500 microns is always good enough", "Whatever the pump reaches in 15 minutes"],
      answer: 1,
      explanation: "Correct: (b). Deep vacuum plus decay verification is the standard of evidence. (a) A compound gauge cannot resolve the critical range. (c) 1,500 microns leaves moisture boiling incomplete at room temperature. (d) Time is not a dryness measurement — system size and wetness vary too widely."
    },
    {
      q: "In a decay test, a micron rise that levels off at a plateau indicates:",
      choices: ["A leak to atmosphere", "Moisture or outgassing equilibrating — the system is likely tight but wet", "A broken micron gauge", "A fully charged system"],
      answer: 1,
      explanation: "Correct: (b). Water's vapor pressure creates the plateau; leaks rise without leveling. (a) describes the continuous-rise signature. (c) The gauge is reporting physics, not failing. (d) The system under vacuum contains no charge to be 'full' of."
    },
    {
      q: "The micron gauge should be placed:",
      choices: ["At the pump inlet for the best reading", "On the system, as far from the pump as practical", "On the recovery cylinder", "It does not matter where it goes"],
      answer: 1,
      explanation: "Correct: (b). System-side placement measures the vacuum the system actually experiences. (a) reads pump vacuum and flatters the pull by hundreds of microns. (c) The cylinder is not part of the evacuation measurement. (d) Placement is the difference between evidence and theater."
    },
    {
      q: "Triple evacuation removes stubborn moisture by:",
      choices: ["Using a bigger pump each time", "Breaking the vacuum with dry nitrogen between pull-downs, diluting residual water vapor so the next pull can remove it", "Heating the compressor with a torch", "Adding methanol to the system"],
      answer: 1,
      explanation: "Correct: (b). Dilution plus standing time lets moisture migrate into the gas stream for removal. (a) Pump size does not change dilution chemistry. (c) Torch heat on a compressor is a damage and safety hazard, not a procedure. (d) Additives have no place in a refrigerant circuit."
    },
    {
      q: "After a motor burnout, cleanup is verified complete when:",
      choices: ["The new compressor starts and runs", "The suction line feels cold", "A post-run acid test of the oil comes back clean (after cleanup driers have done their work)", "The customer signs the invoice"],
      answer: 2,
      explanation: "Correct: (c). Acid testing is the objective endpoint; repeat drier changes until it passes. (a) A contaminated system runs fine — briefly. (b) Temperature feel says nothing about chemistry. (d) Sign-off documents the repair; testing <em>decides</em> it."
    },
    {
      q: "Valve cores are removed during evacuation because:",
      choices: ["They are always defective", "They severely restrict vacuum flow, slowing the pull and corrupting readings", "Regulations require discarding them", "They add moisture to the system"],
      answer: 1,
      explanation: "Correct: (b). Core-removal tools take the restriction out of the path and provide isolation valves for the decay test. (a) Cores are reinstalled after service; they are not consumables by default. (c) No such discard rule exists. (d) Cores do not generate moisture."
    },
    {
      q: "A pump that stalls high on a blank-off test should first receive:",
      choices: ["A larger motor", "Fresh vacuum pump oil (and a gas-ballast check)", "A longer hose", "A new micron gauge"],
      answer: 1,
      explanation: "Correct: (b). Spent, moisture-loaded oil is the leading cause of lost ultimate vacuum, and an open ballast deliberately limits depth. (a) Motors do not set ultimate vacuum. (c) Hose length is irrelevant on a blank-off. (d) The gauge is the messenger — verify the pump's consumable first."
    },
    {
      q: "Air left in a system (non-condensables) harms operation mainly by:",
      choices: ["Freezing at the TXV", "Raising head pressure and corrupting pressure-based diagnosis", "Dissolving the compressor oil", "Turning the refrigerant acidic by itself"],
      answer: 1,
      explanation: "Correct: (b). Non-condensables occupy condenser volume and add their partial pressure to head pressure; every P/T inference then lies (Module 11). (a) Freezing is moisture's crime. (c) Air does not dissolve oil away. (d) Acid formation needs moisture and heat chemistry — air alone is a pressure problem, not an acid factory."
    }
  ],
  studyGuide: `
<h3>Module 7 — Evacuation &amp; Dehydration: Quick Reference</h3>
<p><strong>Target:</strong> ≤500 microns, micron gauge ON the system (far from pump), cores removed, large/short hoses, fresh pump oil.</p>
<p><strong>Decay test reading:</strong> holds ≈ dry &amp; tight. Rises then <em>plateaus</em> = moisture/outgassing → nitrogen sweep, re-pull. Rises <em>without leveling</em> = leak → find and fix it; pumping longer never seals a leak.</p>
<p><strong>Triple evacuation:</strong> pull → break with dry nitrogen → stand → pull → break → final pull ≤500 + decay proof. For wet systems; standing water/saturated oil are mechanical fixes, not pumping problems.</p>
<p><strong>Burnout cleanup:</strong> recover (certified equipment, documented) → acid-test old oil → remove compressor, measure oil → cleanup suction drier + new liquid drier → evacuate &amp; decay-test → charge &amp; run → re-test acid; repeat driers until clean → finalize. Check contactor + crankcase heater too.</p>
<p><strong>Slow pull-down order:</strong> blank-off the pump (oil! ballast!) → simplify the rig → trust only system-side microns → then believe the system's leak/moisture testimony.</p>
<p><strong>Watch out:</strong> a compound gauge cannot see the difference between wet (800) and dry (300) microns. No micron gauge + no decay test = no evacuation, whatever the needle suggested.</p>
`
};
