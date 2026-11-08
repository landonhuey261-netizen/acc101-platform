// Plumbing 202 - Module 2: Backflow Assemblies: RPZ, DCVA, PVB & SVBA (ASSE 1013/1015/1020/1056)
module.exports = {
  number: 2,
  slug: "backflow-assemblies-rpz-dcva-pvb-svba",
  title: "Backflow Assemblies: RPZ, DCVA, PVB & SVBA (ASSE 1013/1015/1020/1056)",
  estTime: "3–4 hours",
  objectives: [
    "Name the four backflow assemblies and the ASSE standard that governs each one.",
    "Explain how an RPZ works, including its two check valves and its relief valve.",
    "Explain how a DCVA works and where it is used.",
    "Explain how a PVB and an SVBA work, and why they protect against backsiphonage only.",
    "Select the right assembly for a given hazard and a given kind of backflow."
  ],
  sections: [
    {
      heading: "Four Assemblies, Four Standards",
      html: `
<p>There are four backflow prevention assemblies a plumber must know, and each one is governed by its own ASSE standard. The <strong>reduced pressure principle assembly (RP, often called an RPZ)</strong> is governed by <strong>ASSE 1013</strong>. The <strong>double check valve assembly (DCVA, also called a DCA)</strong> is governed by <strong>ASSE 1015</strong>. The <strong>pressure vacuum breaker (PVB)</strong> is governed by <strong>ASSE 1020</strong>. The <strong>spill-resistant vacuum breaker (SVBA, also called an SVB)</strong> is governed by <strong>ASSE 1056</strong>. The ASSE 5110 practical exam tests all four — so a tester must know all four, not just the one on the job in front of them.</p>
<p>The four assemblies fall into two families. The RPZ and the DCVA protect against <strong>both</strong> backpressure and backsiphonage: they have two check valves in series, and they can hold against pressure from either direction. The PVB and the SVBA protect against <strong>backsiphonage only</strong>: they have one check valve and an air inlet, and they cannot hold against backpressure. That single distinction — both directions versus one direction — is the most important fact in this module, and it is the fact that decides which assembly goes on which job.</p>
<p>Every assembly has <strong>test cocks</strong> — small valves that let a tester connect a differential pressure gauge and measure what the assembly is doing. An assembly without test cocks cannot be tested, and an assembly that cannot be tested cannot be proven to work. The test cocks are numbered, and the test procedures in the next module use those numbers.</p>
<div class="callout"><strong>Key idea:</strong> RPZ (1013) and DCVA (1015) stop both backpressure and backsiphonage. PVB (1020) and SVBA (1056) stop backsiphonage only. That is the decision that matters.</div>`
    },
    {
      heading: "The RPZ (ASSE 1013): Two Checks and a Relief Valve",
      html: `
<p>The <strong>reduced pressure principle assembly</strong> — the RP or RPZ — is the strongest backflow protection in common use, and it is the one required for high hazards. Inside it are two independently acting check valves with a zone between them, and a <strong>relief valve</strong> connected to that zone. In normal flow, both checks are open and water flows through. The first check drops the pressure a little; the second check drops it a little more. The relief valve watches the pressure in the zone between the checks and compares it with the supply pressure.</p>
<p>When backflow threatens, the RPZ does something no other assembly does: it <strong>dumps the water out</strong>. If the zone pressure falls to within 2 psi of the supply pressure — meaning the first check is failing and backflow is possible — the relief valve opens and discharges water to a drain. That discharge is the RPZ's signature and its genius: instead of relying on a check valve to hold, it removes the water that would flow backward, so there is nothing left to flow. A relief valve that drips occasionally during pressure fluctuations is normal; a relief valve that pours constantly is telling you a check has failed.</p>
<p>Because the RPZ discharges water, it must be installed where the discharge can go safely — to a drain, never where it can flood a room or freeze — and it must be installed where it can be tested and serviced. It is also the most expensive assembly and the one that needs the most maintenance, which is why it is used for high hazards and not for every hose bibb.</p>
<div class="callout"><strong>Key idea:</strong> The RPZ is two checks plus a relief valve that dumps water when the zone pressure gets too close to supply pressure. It protects high hazards against both backpressure and backsiphonage.</div>`
    },
    {
      heading: "The DCVA (ASSE 1015): Two Checks, No Relief",
      html: `
<p>The <strong>double check valve assembly</strong> — the DCVA or DCA — is two independently acting check valves in series, with test cocks and shutoff valves, and no relief valve. It protects against both backpressure and backsiphonage, like the RPZ, but it has no way to dump water: if both checks fail, backflow can occur. That is why the DCVA is used for <strong>low hazards</strong> — situations where backflow would be a nuisance (a change in taste, odor, or color) rather than a health threat — and not for high hazards.</p>
<p>The DCVA's advantage is simplicity and cost. It has no relief valve to discharge water, so it can be installed in a pit or a vault where an RPZ's discharge would be a problem, and it needs less maintenance. Its disadvantage is that it is only as strong as its two checks: both must hold, and the only way to know they hold is to test them. That is why the DCVA is tested annually (or on the schedule the water authority sets) with a differential pressure gauge, just like the RPZ.</p>
<p>A common DCVA application is a fire sprinkler system or a lawn irrigation system without chemical injection: the hazard is low (stagnant water, not poison), the system can make backpressure (a fire pump), and the assembly must hold against it. The DCVA is the right tool for that job — and the wrong tool for a chemical tank.</p>
<div class="callout"><strong>Key idea:</strong> The DCVA is two checks with no relief valve. It stops both kinds of backflow, but it is for low hazards only — if both checks fail, there is nothing to dump the water.</div>`
    },
    {
      heading: "The PVB and SVBA (ASSE 1020 / 1056): Backsiphonage Only",
      html: `
<p>The <strong>pressure vacuum breaker (PVB, ASSE 1020)</strong> has one check valve and one <strong>air inlet valve</strong>. In normal flow, the check is open and the air inlet is closed. When the supply pressure drops, the check closes and the air inlet opens, admitting air into the line and breaking the siphon. The air inlet is the protection: a siphon cannot pull water through air. The PVB is the standard protection for lawn irrigation systems, and it must be installed at least 12 inches above the highest downstream outlet, with no shutoff valve downstream that could trap pressure against it.</p>
<p>The <strong>spill-resistant vacuum breaker (SVBA, ASSE 1056)</strong> works the same way, with one check and one air inlet, but it is designed not to spill water when it operates — the air inlet opens without discharging. That makes it the right choice indoors, where a PVB's spill would wet a floor: laboratory faucets, hose connections in commercial kitchens, and similar indoor points of use. The SVBA is the indoor cousin of the PVB.</p>
<p>Both vacuum breakers share a hard limit: they protect against <strong>backsiphonage only</strong>. They cannot hold against backpressure, because a downstream pressure higher than the supply will push water backward through the check and past the air inlet. A PVB or SVBA on a system that can make backpressure — a boiler, a pump, a pressurized tank — is the wrong assembly, and the code forbids it.</p>
<div class="callout"><strong>Key idea:</strong> PVB (1020) and SVBA (1056) are one check plus an air inlet. They break siphons, they stop backsiphonage only, and they must never be used where backpressure is possible.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>RPZ — ASSE 1013: two checks plus a relief valve that dumps water. Both backpressure and backsiphonage. High hazards.</li>
<li>DCVA — ASSE 1015: two checks, no relief valve. Both backpressure and backsiphonage. Low hazards only.</li>
<li>PVB — ASSE 1020: one check plus an air inlet. Backsiphonage only. Irrigation; installed 12 inches above the highest outlet.</li>
<li>SVBA — ASSE 1056: one check plus an air inlet, spill-resistant. Backsiphonage only. Indoor use where spilling is a problem.</li>
<li>Every assembly has numbered test cocks for differential-pressure testing; the ASSE 5110 practical tests all four.</li>
<li>Selection rule: high hazard → RPZ or air gap; low hazard with backpressure possible → DCVA; backsiphonage only → PVB or SVBA.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a PVB on a boiler feed or a pressurized system. A vacuum breaker cannot hold against backpressure — the boiler will push its water straight through it.</div>
<div class="callout"><strong>Common mistake:</strong> Installing an RPZ where its relief discharge has nowhere safe to go. The relief valve will discharge, by design — if it discharges onto a floor or into a freezing space, the installation has created a new problem.</div>
<p><strong>Ready-to-Work link:</strong> The next module turns these four assemblies into test procedures, and the course lab walks the RPZ, DCVA, PVB, and SVBA tests step by step — the same sequences the ASSE 5110 practical exam uses.</p>`
    }
  ],
  keyTerms: [
    { term: "RPZ / RP", def: "Reduced pressure principle assembly (ASSE 1013): two check valves plus a relief valve that dumps water; protects against both backpressure and backsiphonage; for high hazards." },
    { term: "DCVA / DCA", def: "Double check valve assembly (ASSE 1015): two check valves, no relief valve; protects against both kinds of backflow; for low hazards." },
    { term: "PVB", def: "Pressure vacuum breaker (ASSE 1020): one check valve plus an air inlet; protects against backsiphonage only; standard for irrigation." },
    { term: "SVBA / SVB", def: "Spill-resistant vacuum breaker (ASSE 1056): one check plus an air inlet that does not spill; backsiphonage only; for indoor use." },
    { term: "Relief valve", def: "The RPZ's valve that opens and discharges water when the zone pressure falls to within 2 psi of supply pressure." },
    { term: "Check valve", def: "A one-way valve that lets water flow forward and closes against reverse flow; every assembly contains one or two." },
    { term: "Air inlet valve", def: "The valve in a PVB or SVBA that opens to admit air and break a siphon when supply pressure drops." },
    { term: "Test cock", def: "A small valve on an assembly for connecting a differential pressure gauge during testing; numbered 1 through 4 on an RPZ." },
    { term: "Zone", def: "The space between the two check valves in an RPZ or DCVA; the relief valve monitors its pressure in an RPZ." },
    { term: "ASSE 1013", def: "The standard for reduced pressure principle assemblies (RPZ)." },
    { term: "ASSE 1015", def: "The standard for double check valve assemblies (DCVA)." },
    { term: "ASSE 1020", def: "The standard for pressure vacuum breakers (PVB)." },
    { term: "ASSE 1056", def: "The standard for spill-resistant vacuum breakers (SVBA)." },
    { term: "Differential pressure gauge", def: "The test instrument (a 5-valve test kit) that measures the pressure difference across a check valve or the relief valve's opening point." }
  ],
  video: {
    title: "Types of Backflow Preventers",
    embedUrl: "https://www.youtube.com/embed/OwTghBvWnI8",
    note: "A master plumber walks through the common types of backflow prevention devices — reduced pressure principle and dual check among them — with hazards, locations, and local requirements. Watch it, then sort each device shown into the two families: both-directions protection or backsiphonage only.",
    more: [
      { title: "How Backflow Preventers Work | Protect Your Home’s Water Supply", url: "https://www.youtube.com/watch?v=wpLNO5FfnEY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A chemical feed tank connects to the potable supply. Which assembly is required, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A chemical tank is a high hazard — backflow could poison the supply. Step 2: The required protection is an RPZ (ASSE 1013) or an air gap. Step 3: The RPZ's two checks plus its relief valve protect against both backpressure and backsiphonage, and the relief valve dumps any water that gets past the first check instead of letting it through.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A lawn irrigation system with no chemical injection needs backflow protection. Which assembly is the standard choice, and what is its installation height rule?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The standard choice is a PVB (ASSE 1020), because irrigation is a backsiphonage risk and the hazard is low. Step 2: The PVB must be installed at least 12 inches above the highest downstream outlet. Step 3: No shutoff valve may be downstream that could trap pressure against it, and the PVB cannot be used if the system can make backpressure (for example, a booster pump).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A fire sprinkler system needs backflow protection. The hazard is low, but a fire pump can create backpressure. Which assembly fits, and why not a PVB?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A DCVA (ASSE 1015) fits: it protects against both backpressure and backsiphonage, and the hazard is low. Step 2: A PVB is wrong because it protects against backsiphonage only — the fire pump's backpressure would push water straight through it. Step 3: The DCVA's lack of a relief valve is acceptable here because the hazard is low and the assembly can be installed where an RPZ's discharge would be a problem.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An RPZ's relief valve drips occasionally when the supply pressure fluctuates, but the assembly passes its annual test. Is the dripping a failure?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — occasional dripping during pressure fluctuations is normal for an RPZ. Step 2: The relief valve is designed to open when the zone pressure gets within 2 psi of supply pressure, and fluctuations can briefly reach that point. Step 3: A relief valve that pours constantly is different: that signals a failed check valve and needs repair. The annual test, not the drip, is the verdict.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A laboratory faucet needs backflow protection, but a PVB would spill water onto the lab bench when it operates. Which assembly is the right choice?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An SVBA (ASSE 1056) is the right choice. Step 2: Like a PVB, it has one check and an air inlet and protects against backsiphonage only — but it is spill-resistant, so it operates without discharging water. Step 3: That makes it the indoor choice where spilling is a problem; it still cannot be used where backpressure is possible.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A plumber installs a DCVA on a boiler feed line. What is wrong, and what should have been installed?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A boiler feed is a high hazard (treated boiler water) and can make backpressure. Step 2: A DCVA is for low hazards only — it has no relief valve, so if both checks fail, boiler water reaches the supply. Step 3: The correct assembly is an RPZ (ASSE 1013) or an air gap, which are the high-hazard protections.</p>"
    }
  ],
  quiz: [
    {
      q: "The RPZ is governed by which ASSE standard?",
      choices: ["ASSE 1013", "ASSE 1015", "ASSE 1020", "ASSE 1056"],
      answer: 0,
      explanation: "Correct: (a). ASSE 1013 is the RPZ standard. (b) 1015 is the DCVA. (c) 1020 is the PVB. (d) 1056 is the SVBA."
    },
    {
      q: "Which assemblies protect against BOTH backpressure and backsiphonage?",
      choices: ["PVB and SVBA", "RPZ and DCVA", "PVB and DCVA", "RPZ and SVBA"],
      answer: 1,
      explanation: "Correct: (b). RPZ and DCVA have two checks and hold against pressure from either direction. (a) PVB and SVBA protect against backsiphonage only. (c) and (d) mix one from each family."
    },
    {
      q: "The RPZ's relief valve opens when:",
      choices: ["The supply pressure is too high", "The zone pressure falls to within 2 psi of the supply pressure", "The second check fails completely", "The assembly is shut off"],
      answer: 1,
      explanation: "Correct: (b). The relief valve opens when the zone-to-supply differential drops to 2 psi. (a) High supply pressure alone does not open it. (c) A failed second check is a different failure. (d) Shutting off the assembly does not open the relief valve."
    },
    {
      q: "A DCVA is used for:",
      choices: ["High hazards", "Low hazards where backpressure is possible", "Backsiphonage only", "Indoor faucets where spilling is a problem"],
      answer: 1,
      explanation: "Correct: (b). The DCVA stops both kinds of backflow but has no relief valve, so it is for low hazards. (a) High hazards need an RPZ or air gap. (c) Backsiphonage-only protection is the PVB/SVBA job. (d) Indoor spill-sensitive use is the SVBA's job."
    },
    {
      q: "A PVB must be installed:",
      choices: ["Below the highest outlet", "At least 12 inches above the highest downstream outlet", "In a pit below grade", "With a shutoff valve downstream"],
      answer: 1,
      explanation: "Correct: (b). The PVB must sit at least 12 inches above the highest outlet it protects. (a) Below the outlet, the air inlet cannot protect it. (c) A pit would flood the air inlet. (d) A downstream shutoff can trap pressure against the PVB."
    },
    {
      q: "The SVBA differs from the PVB mainly in that it:",
      choices: ["Protects against backpressure", "Is spill-resistant, so it can be used indoors without discharging water", "Has two check valves", "Has a relief valve"],
      answer: 1,
      explanation: "Correct: (b). The SVBA operates without spilling, which is why it is the indoor choice. (a) Neither vacuum breaker holds against backpressure. (c) Both have one check valve. (d) Neither has a relief valve — that is the RPZ's feature."
    },
    {
      q: "Test cocks on a backflow assembly are for:",
      choices: ["Draining the assembly in winter", "Connecting a differential pressure gauge to test the assembly", "Flushing the system", "Adjusting the water pressure"],
      answer: 1,
      explanation: "Correct: (b). Test cocks let a tester connect the gauge and measure check and relief performance. (a) Draining uses the shutoff valves and drains, not the test cocks. (c) Flushing is done through the test cocks' flow, but their purpose is testing. (d) Test cocks do not adjust pressure."
    },
    {
      q: "A chemical tank connection needs:",
      choices: ["A PVB", "A DCVA", "An RPZ or an air gap", "An SVBA"],
      answer: 2,
      explanation: "Correct: (c). A chemical tank is a high hazard and needs the strongest protection. (a) A PVB stops backsiphonage only. (b) A DCVA is for low hazards. (d) An SVBA stops backsiphonage only."
    }
  ],
  studyGuide: `
<h3>Module 2 — Backflow Assemblies: Quick Reference</h3>
<p><strong>RPZ (ASSE 1013):</strong> Two checks + relief valve that dumps water at 2 psi differential · Both backpressure and backsiphonage · High hazards.</p>
<p><strong>DCVA (ASSE 1015):</strong> Two checks, no relief valve · Both kinds of backflow · Low hazards only.</p>
<p><strong>PVB (ASSE 1020):</strong> One check + air inlet · Backsiphonage only · Irrigation · 12 in above the highest outlet · No downstream shutoff.</p>
<p><strong>SVBA (ASSE 1056):</strong> One check + air inlet, spill-resistant · Backsiphonage only · Indoor use.</p>
<p><strong>Selection:</strong> High hazard → RPZ or air gap · Low hazard + backpressure possible → DCVA · Backsiphonage only → PVB or SVBA.</p>
<p><strong>Self-check:</strong> Can you name all four assemblies, their standards, and which kinds of backflow each stops, without looking? The ASSE 5110 practical tests all four.</p>
`
};
