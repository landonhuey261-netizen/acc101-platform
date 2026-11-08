// Plumbing 201 - Module 11: Special Systems in the Code: Medical Gas, Pools & Hydronics (IPC Ch. 12–14)
module.exports = {
  number: 11,
  slug: "special-systems-medical-gas-pools-hydronics",
  title: "Special Systems in the Code: Medical Gas, Pools & Hydronics (IPC Ch. 12–14)",
  estTime: "3–4 hours",
  objectives: [
    "Locate the IPC's special-system rules: Chapter 12 special piping (medical gas), Chapter 13 nonpotable water, Chapter 14 graywater.",
    "Explain why medical gas systems are governed by NFPA 99 and require special qualifications.",
    "Describe how pools and hot tubs connect to the plumbing system, including indirect waste and backflow protection.",
    "Explain how hydronic heating piping relates to the plumbing code and where its rules live.",
    "State the plumber's limits on special systems: what you may install, what needs a specialist, and what needs a credential."
  ],
  sections: [
    {
      heading: "The Special Chapters: 12, 13, and 14",
      html: `
<p>Most of the IPC governs the systems every building has: water in, waste out, air through the vents. Chapters 12, 13, and 14 govern the systems only some buildings have — and they do it by pointing to other standards as much as by writing their own rules. <strong>Chapter 12, Special Piping and Storage Systems</strong>, covers medical gas and vacuum systems. <strong>Chapter 13, Nonpotable Water Systems</strong>, covers water that is not for drinking: reclaimed water, rainwater, and other alternative supplies. <strong>Chapter 14, Subsurface Graywater Soil Absorption Systems</strong>, covers graywater — the lightly used water from lavatories, showers, and laundry — discharged to soil absorption.</p>
<p>A note on chapter numbers, because the plan for this course described this module as "IPC Ch. 13–14" for medical gas, pools, and hydronics: in the 2021 IPC, medical gas is in <strong>Chapter 12</strong>, nonpotable water is Chapter 13, and graywater is Chapter 14. Pools are not a chapter of their own in the IPC — their plumbing (indirect waste, backflow protection, and water supply) is governed by the chapters that own each part, plus local pool codes. Always verify a chapter number against the edition in your hand; chapter numbers have moved between editions, and a wrong chapter number sends you to the wrong rules.</p>
<p>The pattern across all three chapters is the same: the IPC sets the framework, and a referenced standard or a local rule fills in the details. Your job as a plumber is to know which chapter owns the question and which outside standard it points to — and to know where your qualification ends.</p>
<div class="callout"><strong>Key idea:</strong> Chapter 12 is medical gas, Chapter 13 is nonpotable water, Chapter 14 is graywater. Pools are governed piece by piece across the code, not by one chapter.</div>`
    },
    {
      heading: "Medical Gas: NFPA 99 and the Credential Wall",
      html: `
<p>Medical gas systems — oxygen, medical air, nitrous oxide, nitrogen, carbon dioxide, and medical vacuum — are the most safety-critical piping a plumber will ever meet, because a mistake does not cause a leak: it causes a patient to receive the wrong gas. The IPC's Chapter 12 does not write the medical gas rules itself; it points to <strong>NFPA 99, the Health Care Facilities Code</strong>, which governs the design, installation, testing, and verification of medical gas systems.</p>
<p>Medical gas piping is copper, joined by brazing with a nitrogen purge to prevent oxidation inside the pipe, and every joint is the responsibility of a qualified installer. The qualification is the <strong>ASSE 6010 Medical Gas Systems Installer</strong> credential: at least 4 years of documented experience installing plumbing or mechanical piping, a minimum 32-hour course, a 100-question written exam, and a brazing exam that requires at least 80% penetration of the filler metal. The credential is valid for 3 years. A general plumber without it does not install medical gas piping — full stop.</p>
<p>What you must know for the journeyman exam and for the job is the framework: medical gas is Chapter 12 and NFPA 99, the installer credential is ASSE 6010, the piping is brazed copper with nitrogen purge, and the system is tested and verified by qualified personnel before it is put into service. The detailed installation work belongs to the capstone's ASSE 6010 review and to the credential course itself.</p>
<div class="callout"><strong>Key idea:</strong> Medical gas is NFPA 99 work done by ASSE 6010-credentialed installers. Knowing the framework is your job; doing the brazing without the credential is not.</div>`
    },
    {
      heading: "Pools, Hot Tubs, and Their Plumbing",
      html: `
<p>A swimming pool is a plumbing system with a very large fixture in the middle of it. The pool's water is circulated by a pump through a filter and a heater and back to the pool, and the plumbing that does it must be sized for the flow the pool needs, not for the horsepower on the pump's label. The pool's backwash and drain water is <strong>indirect waste</strong>: it discharges through an air gap to a receptor or to approved disposal, because pool water must never be able to flow back into the potable supply or the sanitary system.</p>
<p>Backflow protection is the pool's most important plumbing rule. The fill line that tops up the pool must be protected against backflow — an air gap or an approved backflow assembly — because pool water is chemically treated and is a high hazard if it reaches drinking water. The same protection applies to a hot tub's fill and to any hose connection at the pool. A pool without backflow protection is a cross-connection waiting for a pressure drop.</p>
<p>Pool piping also has to handle the chemistry: chlorinated water is corrosive to some materials, so pool piping is usually PVC or CPVC rated for the service, and the equipment must be installed with unions and isolation valves so a pump or filter can be serviced without draining the pool. The pool's drains and skimmers are covered by safety rules beyond the plumbing code (suction entrapment prevention), and a plumber working on a pool must know where the plumbing code ends and the pool safety rules begin.</p>
<div class="callout"><strong>Key idea:</strong> A pool's waste is indirect, its fill is backflow-protected, and its piping is sized for flow, not horsepower. Pool water is a high hazard to drinking water.</div>`
    },
    {
      heading: "Hydronics and Nonpotable Water",
      html: `
<p><strong>Hydronic heating</strong> — hot water circulated through radiators, baseboards, or radiant floors — is piping work that plumbers do every day, and it sits at the edge of the plumbing code. The IPC governs the water supply, the backflow protection, and the drainage of a hydronic system, but the heating design itself (boiler sizing, piping layout, controls) is governed by the mechanical code and the manufacturer's instructions. The plumber's code job is to make sure the system's fill line is backflow-protected, its relief discharge goes to an approved place, and its piping is supported and protected like any other piping.</p>
<p><strong>Nonpotable water systems</strong> (Chapter 13) carry water that is not for drinking — reclaimed water, harvested rainwater, and graywater reused for flushing or irrigation. The code's central rule is separation: nonpotable piping must be clearly identified (the code requires purple pipe or purple marking for reclaimed water), must never connect to the potable system except through approved backflow protection, and its outlets must be marked so nobody mistakes them for drinking water. A cross-connection between a nonpotable system and the potable supply is one of the most dangerous mistakes in plumbing.</p>
<p><strong>Graywater</strong> (Chapter 14) is the lightly used water from lavatories, showers, bathtubs, and laundry — never from toilets or kitchen sinks, which the code treats as blackwater. Graywater may be reused for subsurface irrigation through a soil absorption system, with treatment and setbacks set by the code and the local health authority. The plumber's role is the collection and distribution piping; the soil absorption design is the health authority's.</p>
<div class="callout"><strong>Key idea:</strong> Nonpotable water must be marked, separated, and never cross-connected to drinking water. Graywater is lavatory, shower, and laundry water only — never toilet or kitchen waste.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Chapter 12: special piping, including medical gas. Chapter 13: nonpotable water. Chapter 14: graywater. (In the 2021 IPC, medical gas is Chapter 12 — not 13–14.)</li>
<li>Medical gas is governed by NFPA 99 and installed by ASSE 6010-credentialed installers (4 years experience, 32-hour course, 100-question exam, brazing exam at 80% penetration, valid 3 years).</li>
<li>Pool waste is indirect waste; pool fill lines need backflow protection; pool piping is sized for flow, not horsepower.</li>
<li>Hydronic systems: the IPC governs fill-line backflow protection, relief discharge, and piping; heating design is the mechanical code's.</li>
<li>Nonpotable water must be marked (purple for reclaimed water) and never cross-connected to potable water.</li>
<li>Graywater is lavatory, shower, bathtub, and laundry water only — never toilet or kitchen sink waste.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing or servicing medical gas piping without the ASSE 6010 credential. The framework is journeyman knowledge; the work itself is credentialed work.</div>
<div class="callout"><strong>Common mistake:</strong> Filling a pool with an unprotected hose or fill line. Pool water is chemically treated and is a high hazard — the fill needs an air gap or an approved backflow assembly.</div>
<p><strong>Ready-to-Work link:</strong> Special systems are a small part of the journeyman exam but a large part of a working plumber's judgment: knowing which systems need a specialist is what keeps a general plumber out of trouble.</p>`
    }
  ],
  keyTerms: [
    { term: "Chapter 12", def: "IPC Special Piping and Storage Systems, including medical gas and vacuum systems." },
    { term: "Chapter 13", def: "IPC Nonpotable Water Systems: reclaimed water, rainwater, and other water not for drinking." },
    { term: "Chapter 14", def: "IPC Subsurface Graywater Soil Absorption Systems." },
    { term: "NFPA 99", def: "The Health Care Facilities Code, which governs medical gas systems; referenced by IPC Chapter 12." },
    { term: "ASSE 6010", def: "The Medical Gas Systems Installer credential: 4 years experience, 32-hour course, 100-question exam, brazing exam at 80% penetration, valid 3 years." },
    { term: "Medical gas", def: "Oxygen, medical air, nitrous oxide, nitrogen, carbon dioxide, and medical vacuum piped in health care facilities." },
    { term: "Nitrogen purge", def: "Flowing nitrogen through copper pipe during brazing to prevent oxidation inside the joint." },
    { term: "Brazing", def: "Joining metal with a filler metal melted above 840°F; the required joint method for medical gas copper." },
    { term: "Nonpotable water", def: "Water not for drinking: reclaimed, rainwater, or graywater reused for flushing or irrigation." },
    { term: "Reclaimed water", def: "Treated wastewater reused for nonpotable purposes; its piping is marked purple." },
    { term: "Graywater", def: "Lightly used water from lavatories, showers, bathtubs, and laundry — never from toilets or kitchen sinks." },
    { term: "Blackwater", def: "Water containing toilet or kitchen sink waste; never reused as graywater." },
    { term: "Hydronic heating", def: "Heating by circulating hot water through radiators, baseboards, or radiant floors." },
    { term: "Backwash", def: "Reversing flow through a pool filter to clean it; the backwash water is indirect waste." }
  ],
  video: {
    title: "NFPA 99 Explanation",
    embedUrl: "https://www.youtube.com/embed/fFDd7XHyODs",
    note: "An explanation of how NFPA 99 is organized and how a plumbing or mechanical contractor uses it — built for licensing exam candidates. Watch for the structure of the code and the way it governs medical gas and vacuum systems, then compare it with the IPC Chapter 12 framework in this module.",
    more: [
      { title: "Pump room swimming pool System details | by: Supervisor Chris", url: "https://www.youtube.com/watch?v=8q3HX_dQwEM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A hospital asks your company to install oxygen piping. Nobody on the crew holds an ASSE 6010 credential. What do you do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Decline the installation work — medical gas piping requires an ASSE 6010-credentialed installer. Step 2: Explain that the work is governed by NFPA 99 and IPC Chapter 12, and that the credential requires 4 years of experience, a 32-hour course, a written exam, and a brazing exam. Step 3: Refer the hospital to a credentialed medical gas installer, and offer only the work your crew is qualified for.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A pool's fill line is a garden hose dropped into the pool with no backflow protection. What is the hazard, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The hazard is a cross-connection: pool water, chemically treated, can be siphoned back into the drinking water supply if the supply pressure drops. Step 2: The fix is an air gap or an approved backflow prevention assembly on the fill line. Step 3: The pool's waste is also indirect waste — it must discharge through an air gap, never directly into the drainage system.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A building reuses rainwater for toilet flushing. What must be true about the rainwater piping?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The rainwater system is nonpotable (Chapter 13) and must be clearly identified — purple pipe or purple marking for reclaimed water, and marked outlets. Step 2: It must never connect to the potable system except through approved backflow protection. Step 3: Outlets must be marked so nobody mistakes them for drinking water, and the system must be installed and inspected per Chapter 13 and local rules.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A homeowner wants to reuse graywater from the kitchen sink and the toilets for garden irrigation. What do you tell them?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — graywater is lavatory, shower, bathtub, and laundry water only. Step 2: Kitchen sink and toilet water is blackwater, not graywater, and the code does not allow it to be reused as graywater. Step 3: A graywater system may use the lavatories, showers, and laundry, discharging to a subsurface soil absorption system per Chapter 14 and the local health authority.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A hydronic heating system's fill line has no backflow protection, and its relief valve discharges onto the floor. List the two code problems.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fill line needs backflow protection — heating system water contains treatment chemicals and is a hazard to the potable supply. Step 2: The relief discharge must go to an approved place (a receptor or drain), not onto the floor where it creates a scald and slip hazard. Step 3: Both are IPC requirements; the heating design itself is the mechanical code's, but the water connections are the plumbing code's.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A student cites \"IPC Chapter 13\" for medical gas rules. Is that correct for the 2021 IPC? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — in the 2021 IPC, medical gas is in Chapter 12, Special Piping and Storage Systems. Step 2: Chapter 13 is Nonpotable Water Systems, and Chapter 14 is graywater. Step 3: The error matters because the chapter number is the address: citing Chapter 13 sends you to nonpotable water rules, not medical gas, and Chapter 12 points to NFPA 99, which is where the medical gas rules actually live.</p>"
    }
  ],
  quiz: [
    {
      q: "In the 2021 IPC, medical gas systems are in:",
      choices: ["Chapter 11", "Chapter 12", "Chapter 13", "Chapter 14"],
      answer: 1,
      explanation: "Correct: (b). Chapter 12 is Special Piping, including medical gas. (a) Chapter 11 is Storm Drainage. (c) Chapter 13 is Nonpotable Water Systems. (d) Chapter 14 is graywater."
    },
    {
      q: "Medical gas systems are governed by:",
      choices: ["The UPC", "NFPA 99, the Health Care Facilities Code", "The International Residential Code", "OSHA 10"],
      answer: 1,
      explanation: "Correct: (b). IPC Chapter 12 points to NFPA 99. (a) The UPC is a different model code. (c) The IRC covers dwellings, not medical gas. (d) OSHA 10 is safety training, not a gas-system standard."
    },
    {
      q: "The ASSE 6010 medical gas installer credential requires:",
      choices: ["4 years experience, a 32-hour course, a 100-question exam, and a brazing exam at 80% penetration", "No experience and a 4-hour course", "A plumbing license only", "A 100-question exam only"],
      answer: 0,
      explanation: "Correct: (a). All four elements are required, and the credential is valid 3 years. (b) Experience and training are both required. (c) A license alone does not qualify an installer. (d) The exam is one part of a four-part requirement."
    },
    {
      q: "Pool backwash and drain water must discharge:",
      choices: ["Directly into the sanitary sewer", "Indirectly, through an air gap", "Into the storm drain", "Onto the ground"],
      answer: 1,
      explanation: "Correct: (b). Pool waste is indirect waste. (a) A direct connection risks backflow into the pool system. (c) Pool water is not storm water. (d) Ground discharge is not an approved disposal method."
    },
    {
      q: "Reclaimed water piping is identified by:",
      choices: ["Red paint", "Purple pipe or purple marking", "No marking", "Blue tape only"],
      answer: 1,
      explanation: "Correct: (b). The code requires purple identification for reclaimed water piping. (a) Red is not the reclaimed-water color. (c) Unmarked nonpotable piping is a cross-connection hazard. (d) Tape alone is not the code's marking method."
    },
    {
      q: "Graywater includes water from:",
      choices: ["Toilets and kitchen sinks", "Lavatories, showers, bathtubs, and laundry", "Swimming pools", "Boilers"],
      answer: 1,
      explanation: "Correct: (b). Graywater is lightly used water from those fixtures. (a) Toilet and kitchen sink water is blackwater. (c) Pool water is chemically treated and is not graywater. (d) Boiler water is not graywater."
    },
    {
      q: "A pool fill line must have:",
      choices: ["No protection — pool water is clean", "Backflow protection, such as an air gap or an approved assembly", "A larger pipe than the pool drain", "A check valve only"],
      answer: 1,
      explanation: "Correct: (b). Pool water is chemically treated and is a high hazard to drinking water. (a) Pool water is not potable. (c) Pipe size is not the protection. (d) A single check valve is not the code's required protection for a high-hazard connection."
    },
    {
      q: "Medical gas copper is brazed with:",
      choices: ["No purge gas", "A nitrogen purge to prevent oxidation inside the pipe", "Water flowing through the pipe", "A propane torch only"],
      answer: 1,
      explanation: "Correct: (b). Nitrogen purge prevents internal oxidation during brazing. (a) Brazing without purge leaves oxide scale inside the pipe. (c) Water in the pipe during brazing is not the method. (d) The torch type is not the point — the purge is."
    }
  ],
  studyGuide: `
<h3>Module 11 — Special Systems: Quick Reference</h3>
<p><strong>Chapters (2021 IPC):</strong> 12 = Special Piping (medical gas) · 13 = Nonpotable Water · 14 = Graywater. Medical gas is Chapter 12, not 13–14.</p>
<p><strong>Medical gas:</strong> Governed by NFPA 99 · Installed by ASSE 6010 installers (4 yrs experience, 32-hr course, 100-Q exam, brazing exam 80% penetration, valid 3 yrs) · Brazed copper with nitrogen purge.</p>
<p><strong>Pools:</strong> Waste is indirect · Fill needs backflow protection (air gap or approved assembly) · Piping sized for flow, not horsepower · Chlorinated water needs rated materials.</p>
<p><strong>Hydronics:</strong> IPC governs fill-line backflow protection, relief discharge, and piping; heating design is the mechanical code's.</p>
<p><strong>Nonpotable:</strong> Marked (purple for reclaimed) · Never cross-connected to potable water · Outlets marked.</p>
<p><strong>Graywater:</strong> Lavatory, shower, bathtub, laundry only. Never toilet or kitchen sink water.</p>
<p><strong>Self-check:</strong> Can you name the three special chapters and the credential for medical gas work, without looking? That is the module in one breath.</p>
`
};
