// Plumbing 122 - Module 8: Cross-Connections & Backflow Basics
module.exports = {
  number: 8,
  slug: "cross-connections-backflow",
  title: "Cross-Connections & Backflow Basics",
  estTime: "3–4 hours",
  objectives: [
    "Define a cross-connection and explain why it threatens the drinking water supply.",
    "Distinguish backsiphonage from backpressure and give a real example of each.",
    "Explain the air gap and why it is the most reliable form of backflow protection.",
    "Compare the four main backflow assemblies — RPZ, DCVA, PVB, SVBA — and state which hazard each protects against.",
    "Explain how to protect the most common residential cross-connections: hose bibbs, lawn irrigation, and boilers."
  ],
  sections: [
    {
      heading: "The Cross-Connection: A Bridge You Never Build",
      html: `
<p>A <strong>cross-connection</strong> is any connection between the potable water supply and a source of contamination — a hose lying in a puddle, a boiler feed line, a lawn irrigation system, a chemical tank. The connection itself is harmless while the water flows in the right direction. The danger is <strong>backflow</strong>: water flowing backwards, from the contaminated side into the drinking water, carrying whatever it touches with it.</p>
<p>Backflow needs two things: a cross-connection and a reversal of flow. The plumber's job is to eliminate the connection where possible and to protect it where it cannot be eliminated. Every fixture, appliance, and system that connects to the water supply is checked for this question: if the flow reversed, what would get into the drinking water?</p>
<p>The stakes are public health, not convenience. Backflow incidents have poisoned whole neighborhoods — fertilizer from a garden hose, chemicals from a boiler, bacteria from a submerged inlet. The code treats backflow protection as a health matter, and inspectors and water utilities test and enforce it. This module is the lead-in to the backflow certification work in the program capstone (Step 10).</p>
<div class="callout"><strong>Key idea:</strong> A cross-connection is a bridge between drinking water and contamination. Backflow is water crossing that bridge in the wrong direction. Protection means breaking the bridge or guarding it.</div>`
    },
    {
      heading: "Two Ways Water Flows Backwards",
      html: `
<p><strong>Backsiphonage</strong> is backflow caused by suction — a drop in supply pressure that pulls water backwards. The classic example is a water main break down the street: pressure in the main falls, and every hose, boiler feed, and irrigation line connected to the system becomes a siphon, pulling its contents toward the main. A garden hose lying in a puddle of fertilizer is the textbook case: the main breaks, the puddle is siphoned up the hose, and fertilizer enters the drinking water.</p>
<p><strong>Backpressure</strong> is backflow caused by pressure on the contaminated side exceeding the supply pressure. A boiler with its own pump, a chemical feed system, or a tall tank of liquid can push its contents backwards into the supply even while the supply pressure is normal. Backpressure is the harder problem to protect against, because the contaminant is being pushed, not pulled — a device that only stops suction will not stop it.</p>
<p>Which hazard a connection presents decides which protection it needs. A connection that can only ever siphon needs backsiphonage protection. A connection that can push needs backpressure protection too. Getting this distinction wrong is the most common backflow error in the field.</p>
<div class="callout"><strong>Key idea:</strong> Backsiphonage is suction pulling water back (a main break). Backpressure is a pump or tank pushing water back. The hazard decides the protection — a suction-only device cannot stop a push.</div>`
    },
    {
      heading: "The Air Gap: Protection You Can See",
      html: `
<p>The <strong>air gap</strong> is the most reliable form of backflow protection, because it is not a device at all — it is a physical separation. A water outlet terminates above the flood-level rim of a receptacle, with a gap of air between the outlet and the highest water level. With no connection between the two, backflow is physically impossible: water cannot climb a gap of air, no matter what the pressures do.</p>
<p>Air gaps are everywhere once you look for them: a faucet above a sink, a dishwasher drain loop, a T&P discharge pipe terminating above a floor drain, a water softener drain line. The gap must be at least twice the diameter of the outlet pipe, and never less than one inch, measured from the outlet to the flood-level rim. A gap that is too small can be bridged by a splash or a surge.</p>
<p>Air gaps are simple and foolproof, but they are not always practical. A boiler feed line, an irrigation main, or a chemical system cannot be fed through an air gap — they need a mechanical assembly. The air gap is the gold standard; the assemblies below are the practical substitutes.</p>
<div class="callout"><strong>Key idea:</strong> An air gap is a physical break between the outlet and the flood-level rim — at least twice the outlet diameter, never less than one inch. No connection means no backflow, ever.</div>`
    },
    {
      heading: "The Four Assemblies",
      html: `
<p>Where an air gap is not practical, the code uses mechanical <strong>backflow assemblies</strong>, each built around check valves and each rated for a hazard level. The <strong>reduced pressure zone assembly (RPZ, ASSE 1013)</strong> is the strongest: two check valves with a relief valve between them that dumps to drain if either check fails. It protects against both backpressure and backsiphonage at high hazard — chemical systems, boilers with treatment, and similar risks. It is also the only assembly that must discharge to a drain, because its relief valve is designed to spill.</p>
<p>The <strong>double check valve assembly (DCVA, ASSE 1015)</strong> has two check valves in series and protects against backpressure and backsiphonage at low hazard — fire sprinkler systems and similar uses where the contaminant is not toxic. The <strong>pressure vacuum breaker (PVB, ASSE 1020)</strong> protects against backsiphonage only, and must be installed at least 12 inches above the highest outlet it serves; it is the common choice for lawn irrigation. The <strong>spill-resistant vacuum breaker (SVBA, ASSE 1056)</strong> is a compact backsiphonage device for laboratory and similar fixtures.</p>
<p>Two rules apply to every assembly: install it where it can be tested and serviced — buried or hidden assemblies are useless — and test it on schedule. RPZ and DCVA assemblies are testable, and many jurisdictions require annual testing by a certified tester. An assembly that has never been tested is an assumption, not a protection.</p>
<div class="callout"><strong>Key idea:</strong> RPZ (ASSE 1013) is the strongest — both hazards, high hazard, with a relief valve. DCVA (ASSE 1015) is two check valves for low hazard. PVB (ASSE 1020) stops backsiphonage only and must sit above the highest outlet. SVBA (ASSE 1056) is a compact backsiphonage device.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>A cross-connection joins potable water to a contamination source; backflow is water crossing it in the wrong direction.</li>
<li>Backsiphonage is suction (a main break); backpressure is a pump or tank pushing back. The hazard decides the protection.</li>
<li>An air gap — at least twice the outlet diameter, never less than one inch — is the most reliable protection.</li>
<li>RPZ (ASSE 1013): both hazards, high hazard, relief valve to drain. DCVA (ASSE 1015): both hazards, low hazard. PVB (ASSE 1020): backsiphonage only, above the highest outlet. SVBA (ASSE 1056): compact backsiphonage device.</li>
<li>Hose bibbs need vacuum breakers; irrigation needs a PVB or RPZ; boilers need an RPZ.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Protecting a backpressure hazard with a backsiphonage-only device. A PVB on a chemical feed system does not stop the pump from pushing chemicals into the supply — only an RPZ does.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a backflow assembly where it cannot be tested or serviced — buried, behind a wall, or above a ceiling. An untestable assembly is an assumption, not a protection.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 expects you to identify cross-connections and backflow devices. The program capstone (Step 10) goes deep on backflow certification (ASSE 5110) — this module is the foundation for it.</p>`
    }
  ],
  keyTerms: [
    { term: "Cross-connection", def: "Any connection between the potable water supply and a source of contamination." },
    { term: "Backflow", def: "Water flowing backwards from a contaminated side into the potable water supply." },
    { term: "Backsiphonage", def: "Backflow caused by suction — a drop in supply pressure pulling water backwards, as in a water main break." },
    { term: "Backpressure", def: "Backflow caused by pressure on the contaminated side exceeding supply pressure, as from a pump or tall tank." },
    { term: "Air gap", def: "A physical separation between a water outlet and the flood-level rim of a receptacle; at least twice the outlet diameter, never less than one inch." },
    { term: "Flood-level rim", def: "The top edge of a fixture or receptacle over which water would spill if the fixture overflowed." },
    { term: "RPZ (ASSE 1013)", def: "Reduced pressure zone assembly: two check valves with a relief valve between them; protects against both backpressure and backsiphonage at high hazard." },
    { term: "DCVA (ASSE 1015)", def: "Double check valve assembly: two check valves in series; protects against both hazards at low hazard." },
    { term: "PVB (ASSE 1020)", def: "Pressure vacuum breaker: protects against backsiphonage only; must be installed above the highest outlet it serves." },
    { term: "SVBA (ASSE 1056)", def: "Spill-resistant vacuum breaker: a compact backsiphonage device for laboratory and similar fixtures." },
    { term: "Hose bibb vacuum breaker", def: "A small vacuum breaker threaded onto a hose bibb to stop backsiphonage through a garden hose." },
    { term: "Relief valve", def: "The valve in an RPZ that opens to drain if either check valve fails, preventing contaminated water from reaching the supply." },
    { term: "High hazard", def: "A cross-connection where backflow could introduce a toxic substance; requires an RPZ or an air gap." },
    { term: "Low hazard", def: "A cross-connection where backflow would be a nuisance or aesthetic problem, not a health threat; a DCVA may be used." },
    { term: "Testable assembly", def: "A backflow assembly with test cocks that allow a certified tester to verify its check valves in place." },
    { term: "Potable water", def: "Water safe for drinking, cooking, and bathing; the supply that backflow protection guards." }
  ],
  video: {
    title: "What is a Backflow Preventer and How Does It Work",
    embedUrl: "https://www.youtube.com/embed/rqJAyZBw2qc",
    note: "How a backflow preventer works inside — watch the check valves and the relief valve do their jobs, then match each assembly to its hazard from this module.",
    more: [
      { title: "Backflow Preventers - What Plumbing Contractors Need for Their Projects", url: "https://www.youtube.com/watch?v=zMDf0oPAETg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A garden hose is lying in a puddle of fertilizer and the water main breaks down the street. Explain what happens and what would have prevented it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The main break drops the supply pressure, creating suction — backsiphonage. Step 2: The hose siphons the fertilizer puddle up the hose and into the drinking water. Step 3: Prevention — a hose bibb vacuum breaker on the sillcock, which stops backsiphonage at the hose. Step 4: The root fix is habit: never leave a hose submerged in anything you would not drink.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A boiler has its own feed pump and a chemical treatment tank. Which hazard does it present, and which assembly is required?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The boiler presents a backpressure hazard — its pump can push treated water back into the supply even at normal supply pressure. Step 2: The chemicals make it a high hazard. Step 3: The required protection is an RPZ (ASSE 1013) or an air gap — the only protections rated for high-hazard backpressure. Step 4: A PVB would not be enough, because it stops suction only.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A lawn irrigation system is fed from the house water supply. Which assembly is commonly used, and what is the installation rule that matters most?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A PVB (ASSE 1020) is the common choice for irrigation, or an RPZ where the local code requires it. Step 2: The PVB must be installed above the highest outlet (sprinkler head) it serves, so backsiphonage cannot pull water back over it. Step 3: It must also be accessible for testing and winterization. Step 4: A PVB installed below the highest head cannot protect the system.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A T&P discharge pipe runs directly into a floor drain with no gap. Explain the hazard and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The direct connection is a cross-connection — a drain backup could flow into the water heater through the discharge pipe. Step 2: The fix is to terminate the discharge through an air gap above the drain, so a backup cannot reach the heater. Step 3: The gap must be at least twice the pipe diameter, never less than one inch. Step 4: Never cap the discharge to hide the problem — capping removes the heater's safety device.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An RPZ is installed in a basement with no floor drain under its relief valve. Explain the problem.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An RPZ's relief valve is designed to discharge water to drain if either check valve fails. Step 2: With no drain, a relief discharge floods the basement — and worse, the assembly may be installed in a way that discourages testing. Step 3: The fix is to pipe the relief discharge to a drain through an air gap, or relocate the assembly where a drain is available. Step 4: An RPZ without a drain is an incomplete installation.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A customer asks why their new irrigation system needs a backflow device when the old one never had one. Explain in two or three plain sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The irrigation line connects your drinking water to the lawn — fertilizer, animal waste, and soil bacteria. Step 2: If the water main breaks, the pressure drop can suck that water back into your drinking water and your neighbors'. Step 3: The backflow device is the guard that stops it, and the code requires it because the risk is to the whole street, not just your yard.</p>"
    }
  ],
  quiz: [
    {
      q: "A hose bibb with no backflow protection is connected to a garden hose lying in a puddle of fertilizer. The hazard is:",
      choices: ["Backsiphonage — a pressure drop can pull the fertilizer into the drinking water", "Thermal expansion", "Water hammer", "Freezing only"],
      answer: 0,
      explanation: "Correct: (a). A pressure drop creates suction that can siphon the puddle back through the hose into the supply. (b) Thermal expansion is a closed-system pressure issue. (c) Water hammer is a shock wave from a closing valve. (d) Freezing is a separate risk, not the contamination hazard."
    },
    {
      q: "Backsiphonage is backflow caused by:",
      choices: ["A pump pushing water backwards", "A drop in supply pressure creating suction", "A water heater overheating", "A pipe freezing"],
      answer: 1,
      explanation: "Correct: (b). Backsiphonage is suction from a pressure drop, such as a main break. (a) describes backpressure. (c) Overheating causes expansion, not siphonage. (d) Freezing blocks flow; it does not siphon."
    },
    {
      q: "Backpressure is backflow caused by:",
      choices: ["A water main break", "Pressure on the contaminated side exceeding supply pressure, as from a pump", "A clogged drain", "A failed PRV"],
      answer: 1,
      explanation: "Correct: (b). Backpressure is a push from the contaminated side. (a) A main break causes backsiphonage, a pull. (c) A clogged drain is a DWV problem. (d) A failed PRV passes high pressure, not contamination."
    },
    {
      q: "The correct assembly for a high-hazard cross-connection (for example, a chemical feed system) is:",
      choices: ["A vacuum breaker (ASSE 1020)", "A double check valve assembly (ASSE 1015)", "A reduced pressure zone assembly, RPZ (ASSE 1013)", "A hose bibb vacuum breaker only"],
      answer: 2,
      explanation: "Correct: (c). An RPZ protects against both backpressure and backsiphonage at high hazard, with a relief valve that dumps to drain if either check fails. (a) A PVB protects against backsiphonage only. (b) A DCVA is for low-hazard connections. (d) A hose bibb breaker protects one hose, not a chemical system."
    },
    {
      q: "A pressure vacuum breaker (PVB, ASSE 1020) protects against:",
      choices: ["Backpressure only", "Backsiphonage only", "Both backpressure and backsiphonage", "Thermal expansion"],
      answer: 1,
      explanation: "Correct: (b). A PVB protects against backsiphonage (suction) only and must be installed above the highest outlet. (a) It does not stop backpressure. (c) That is the RPZ's job. (d) Thermal expansion is handled by an expansion tank."
    },
    {
      q: "An air gap is:",
      choices: ["A mechanical valve that closes against backflow", "A physical separation between a water outlet and the flood-level rim of a receptacle, so backflow is impossible", "A vent pipe through the roof", "A gap in a pipe joint"],
      answer: 1,
      explanation: "Correct: (b). An air gap is a physical break — the most reliable backflow protection because no connection exists to flow back through. (a) describes a mechanical assembly. (c) is a DWV vent. (d) A gap in a joint is a leak."
    },
    {
      q: "An air gap must be at least:",
      choices: ["One-half the outlet diameter", "Twice the outlet diameter, never less than one inch", "Six inches, always", "The same as the pipe length"],
      answer: 1,
      explanation: "Correct: (b). The gap must be at least twice the outlet diameter and never less than one inch. (a) is too small and could be bridged by a splash. (c) Six inches is not the rule — the gap scales with the outlet. (d) Pipe length is irrelevant."
    },
    {
      q: "A double check valve assembly (DCVA, ASSE 1015) is used for:",
      choices: ["High-hazard chemical systems", "Low-hazard connections such as fire sprinkler systems", "Backsiphonage only on hose bibbs", "Thermal expansion control"],
      answer: 1,
      explanation: "Correct: (b). A DCVA has two check valves and protects both hazards at low hazard. (a) High hazard needs an RPZ. (c) A hose bibb uses a vacuum breaker. (d) Expansion control is an expansion tank's job."
    }
  ],
  studyGuide: `
<h3>Module 8 — Cross-Connections & Backflow: Quick Reference</h3>
<p><strong>Core idea:</strong> A cross-connection is a bridge between drinking water and contamination. Backflow is water crossing it the wrong way. Break the bridge or guard it.</p>
<p><strong>Two reversals:</strong> Backsiphonage is suction pulling water back (a main break). Backpressure is a pump or tank pushing water back. The hazard decides the protection.</p>
<div class="formula">Air gap: at least twice the outlet diameter, never less than one inch — the most reliable protection</div>
<p><strong>Assemblies:</strong> RPZ (ASSE 1013) — both hazards, high hazard, relief valve to drain. DCVA (ASSE 1015) — both hazards, low hazard. PVB (ASSE 1020) — backsiphonage only, above the highest outlet. SVBA (ASSE 1056) — compact backsiphonage device.</p>
<p><strong>Common protections:</strong> Hose bibbs — vacuum breaker. Irrigation — PVB or RPZ. Boilers and chemical systems — RPZ or air gap.</p>
<p><strong>Self-check:</strong> A chemical feed system can push chemicals into the supply. Which assembly is required, and why not a PVB? (Answer: an RPZ — a PVB stops suction only, not a push.)</p>
`
};
