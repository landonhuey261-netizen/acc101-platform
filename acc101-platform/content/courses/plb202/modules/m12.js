// Plumbing 202 - Module 12: Course Review: Protecting the Water Supply
module.exports = {
  number: 12,
  slug: "course-review-protecting-the-water-supply",
  title: "Course Review: Protecting the Water Supply",
  estTime: "3–4 hours",
  objectives: [
    "Trace a single drop of water from the supply main to its legal disposal, naming every protection it passes.",
    "Match each hazard in a building to the right assembly or device.",
    "State the ASSE 5110 pass values for all four assemblies from memory.",
    "Explain what a failed test, a failed pump, or a failed interceptor has in common.",
    "Describe the habits — testing, maintenance, and record-keeping — that keep a water supply safe."
  ],
  sections: [
    {
      heading: "One Drop, Whole Course",
      html: `
<p>Follow a single drop of water through a building and you have the whole course in one story. The drop enters from the supply main, past the backflow assembly that guards the service connection — an RPZ if the building's hazards are high, a DCVA if they are low. It flows to a boiler, where the boiler's feed has its own RPZ, because the boiler can push its treated water backward. It flows to a hose bibb, where a vacuum breaker stops a submerged hose from siphoning its contents back. It flows to a lawn irrigation system, where a PVB sits 12 inches above the highest sprinkler head.</p>
<p>The drop is used — in a shower, a toilet, a kitchen sink — and it becomes wastewater. It flows down a drain, through a trap that holds its seal, past a vent that keeps the trap from siphoning, and into the building drain. If it carries grease, it passes through an interceptor that holds the grease for removal. If the fixtures are below the sewer, an ejector lifts it up. If there is no sewer, a septic tank separates it and a drainfield treats it in the soil. If it is rain, it falls on the roof, runs down a leader, crosses the site through area drains and a catch basin, and is held in a detention basin until it can be released slowly.</p>
<p>Every step in that story is a protection, and every protection is there because a failure at that step has hurt people. The course's job was to teach you to see the story — and the final exam's job is to prove you can.</p>
<div class="callout"><strong>Key idea:</strong> One drop, whole course: assembly, vacuum breaker, trap, vent, interceptor, ejector, drainfield, detention. Every protection exists because a failure at that step has hurt people.</div>`
    },
    {
      heading: "Matching Hazards to Protection",
      html: `
<p>The course's central skill is matching: given a hazard, name the protection. A chemical tank is a high hazard with backpressure possible — an RPZ or an air gap. A fire sprinkler system is a low hazard with backpressure possible — a DCVA. A lawn irrigation system is a backsiphonage risk with a low hazard — a PVB. A laboratory faucet indoors is a backsiphonage risk where spilling is a problem — an SVBA. A boiler feed is a high hazard with backpressure — an RPZ. A pool's fill is a high hazard — an air gap or an RPZ. A pool's backwash is chemically treated waste — an indirect waste connection with an air gap.</p>
<p>The matching rule is always the same: the hazard level decides the strength, and the kind of backflow decides the family. High hazard means the strongest protection; backpressure possible means the both-directions family (RPZ or DCVA); backsiphonage only means the vacuum-breaker family (PVB or SVBA). If you can run that decision for any connection in a building, you can do the job.</p>
<p>The same matching applies outside backflow. A kitchen that produces grease needs an interceptor sized to its total flow. A basement below the sewer needs an ejector, not a sump pump. A home with no sewer needs a septic system sized to its bedrooms and its soil. A site that is paved needs detention. The skill is the same in every case: name the load, name the hazard, and match the device.</p>
<div class="callout"><strong>Key idea:</strong> The hazard level decides the strength; the kind of backflow decides the family. High hazard → RPZ or air gap. Backpressure possible → RPZ or DCVA. Backsiphonage only → PVB or SVBA.</div>`
    },
    {
      heading: "The Numbers You Must Carry",
      html: `
<p>Some numbers from this course must be in your head, not in a book, because the ASSE 5110 practical exam gives no reference card and the field gives no second chance. The RPZ pass values: Check 1 at least <strong>5 psid</strong>, relief valve opens at <strong>2 psid</strong> or higher, Check 2 at least <strong>1 psid</strong>. The DCVA: each check at least <strong>1 psid</strong>. The PVB and SVBA: air inlet opens at <strong>1 psid</strong> or higher, check at least <strong>1 psid</strong>. The ASSE 5110 written exam: <strong>100 questions, 70% to pass, 2 hours, closed book</strong>, after 5 years of experience and a 40-hour course, valid 3 years.</p>
<p>Other numbers from the course: the air gap is at least <strong>twice the pipe diameter, minimum 1 inch</strong>. A PVB sits at least <strong>12 inches</strong> above the highest outlet. A septic tank is pumped every <strong>3 to 5 years</strong> and is typically <strong>1,000 gallons or larger</strong>. A water closet is <strong>1.28 gpf</strong>, a lavatory <strong>1.5 gpm</strong>, a shower <strong>2.0 gpm</strong>. A French drain's pipe has its holes <strong>down</strong> and its trench is lined with <strong>filter fabric</strong>.</p>
<p>These numbers are not trivia. Each one is a pass value, a minimum, or a rule that decides whether a system is safe. The exam will ask for them, and the field will test them.</p>
<div class="callout"><strong>Key idea:</strong> RPZ: 5, 2, 1. DCVA: 1 and 1. PVB/SVBA: air inlet 1, check 1. ASSE 5110: 100 questions, 70%, 2 hours. Air gap: twice the diameter, minimum 1 inch.</div>`
    },
    {
      heading: "What Every Failure Has in Common",
      html: `
<p>A failed backflow test, a failed pump, a failed grease interceptor, and a failed septic system look like different problems, but they have the same shape. In each case, a protection stopped working, nobody noticed, and the failure was discovered by damage — sewage in a basement, grease in a sewer, effluent in a yard, or illness in a neighborhood. The failure was not the event; the failure was the months of unnoticed decline that came before it.</p>
<p>That is why the course keeps returning to the same three habits: <strong>testing</strong>, <strong>maintenance</strong>, and <strong>record-keeping</strong>. Test the assemblies on schedule, and record the actual numbers. Maintain the pumps, the interceptors, and the septic tank on schedule, and record what was done. Keep the reports, so the next person to touch the system knows what was found and what was fixed. A system that is tested, maintained, and recorded is a system whose failures are caught early, when they are cheap and small.</p>
<p>The habits are the job. The assemblies and the pumps and the interceptors are the tools; the habits are what make them work over the years. A plumber who tests, maintains, and records is a plumber whose buildings stay safe — and a plumber who does not is a plumber whose buildings fail quietly until they fail loudly.</p>
<div class="callout"><strong>Key idea:</strong> Every failure has the same shape: a protection stopped working, nobody noticed, and the damage was the discovery. Testing, maintenance, and record-keeping are what catch failures early.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>One drop, whole course: every protection in the building exists because a failure at that step has hurt people.</li>
<li>Matching rule: the hazard level decides the strength; the kind of backflow decides the family (RPZ/DCVA for backpressure, PVB/SVBA for backsiphonage only).</li>
<li>Numbers to carry: RPZ 5, 2, 1 · DCVA 1 and 1 · PVB/SVBA air inlet 1, check 1 · ASSE 5110: 100 questions, 70%, 2 hours · Air gap: twice the diameter, minimum 1 inch · PVB 12 inches above the highest outlet · Septic pumped every 3 to 5 years.</li>
<li>Every failure has the same shape: a protection stopped working, nobody noticed, and the damage was the discovery.</li>
<li>The habits are the job: test on schedule, maintain on schedule, record everything.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Treating the final exam as the end of the learning. The exam proves you know the numbers; the field proves you use them — and the ASSE 5110 credential is the next step, not the last one.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting that real backflow testing and repair require the ASSE 5110 credential and supervised practice. This course teaches the procedures; the credential authorizes the work.</div>
<p><strong>Ready-to-Work link:</strong> The final exam covers all 12 modules. Review the study guides, recite the pass values from memory, and walk a building in your mind matching every hazard to its protection. Then take the exam.</p>`
    }
  ],
  keyTerms: [
    { term: "Backflow assembly", def: "A tested, listed device (RPZ, DCVA, PVB, or SVBA) installed at a cross-connection to stop backflow." },
    { term: "RPZ", def: "Reduced pressure principle assembly (ASSE 1013): two checks plus a relief valve; both kinds of backflow; high hazards." },
    { term: "DCVA", def: "Double check valve assembly (ASSE 1015): two checks, no relief valve; both kinds of backflow; low hazards." },
    { term: "PVB", def: "Pressure vacuum breaker (ASSE 1020): one check plus an air inlet; backsiphonage only." },
    { term: "SVBA", def: "Spill-resistant vacuum breaker (ASSE 1056): one check plus an air inlet, spill-resistant; backsiphonage only." },
    { term: "ASSE 5110", def: "The ASSE credential for backflow prevention assembly testers: 5 years experience, a 40-hour course, a 100-question written exam (70% to pass, 2 hours), and a practical exam; valid 3 years." },
    { term: "Air gap", def: "The unobstructed vertical distance between an outlet and the flood-level rim; at least twice the pipe diameter, minimum 1 inch." },
    { term: "Indirect waste", def: "A waste pipe discharging into a receptor with an air gap, rather than connecting directly to the drainage system." },
    { term: "Cross-connection", def: "Any physical connection between potable water and another system through which backflow could occur." },
    { term: "High hazard", def: "A cross-connection to a toxic or disease-causing substance, where backflow could cause illness or death." },
    { term: "Low hazard", def: "A cross-connection to a substance that is a nuisance (taste, odor, color) but not a health threat." },
    { term: "Test report", def: "The written record of a test or a repair: the assembly, the numbers, the failure, the parts used, and the retest result." },
    { term: "Graywater", def: "Wastewater from tubs, showers, lavatories, and laundry; reusable for toilet flushing and subsurface irrigation." },
    { term: "Septic system", def: "A private on-site wastewater treatment system: tank, distribution, and drainfield." }
  ],
  video: {
    title: "A CRASH COURSE in Backflow Prevention",
    embedUrl: "https://www.youtube.com/embed/5Dm5EPqqqLc",
    note: "A fast, complete review of backflow prevention — the hazards, the assemblies, and the testing — in one sitting. Watch it as your course review, then recite the pass values for all four assemblies from memory before you take the final exam.",
    more: [
      { title: "Water Distribution | Cross Connection Control", url: "https://www.youtube.com/watch?v=Bo9M_1O5d1s" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Trace a drop of water from the supply main to a boiler and back. Name the protection at the boiler feed and explain why it is an RPZ, not a PVB.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The drop enters from the supply main and reaches the boiler feed. Step 2: The protection is an RPZ (ASSE 1013), because a boiler is a high hazard (treated water) and can make backpressure. Step 3: A PVB is wrong because it protects against backsiphonage only — the boiler's pressure would push its water straight through it. Step 4: The RPZ's two checks and relief valve protect against both kinds of backflow.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A building has a lawn irrigation system, a fire sprinkler system, a chemical feed tank, and a laboratory faucet. Match each one to its assembly.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Lawn irrigation — PVB (backsiphonage only, low hazard), 12 inches above the highest outlet. Step 2: Fire sprinkler — DCVA (low hazard, backpressure possible from the fire pump). Step 3: Chemical feed tank — RPZ or air gap (high hazard). Step 4: Laboratory faucet — SVBA (backsiphonage only, indoor, spill-resistant).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Recite the pass values for all four assemblies from memory, then check yourself against the course.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: RPZ — Check 1 ≥ 5 psid, relief valve opens ≥ 2 psid, Check 2 ≥ 1 psid. Step 2: DCVA — each check ≥ 1 psid. Step 3: PVB — air inlet opens ≥ 1 psid, check ≥ 1 psid. Step 4: SVBA — the same as the PVB: air inlet ≥ 1 psid, check ≥ 1 psid. If any number was wrong, re-read Module 3 and recite again until it is automatic.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A grease interceptor has not been pumped in two years, a sump pump's float is stuck, and a backflow assembly failed its test last year and was never repaired. What do these three failures have in common?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In each case a protection stopped working and nobody noticed — the failure was the months of unnoticed decline, not the event. Step 2: Each was discovered by damage: grease in the sewer, water in the basement, a failed assembly in service. Step 3: The common fix is the same three habits: testing on schedule, maintenance on schedule, and record-keeping, so failures are caught early when they are cheap and small.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A homeowner's basement has a toilet below the sewer line and a foundation drain collecting groundwater. A contractor proposes one sump pump for both. What is wrong, and what is the correct design?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: One pump cannot do both jobs — the toilet's water is sewage and the foundation drain's water is groundwater. Step 2: The correct design is two pumps in two pits: a sewage ejector (sealed, vented basin, discharge to the sanitary sewer) for the toilet, and a sump pump for the groundwater. Step 3: Combining them would put sewage in a sump pit (a health hazard) or groundwater in the sewer (an overload).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A student finishes this course and wants to test backflow assemblies for a living. What is the next step, and what does it require?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The next step is the ASSE 5110 credential — the backflow prevention assembly tester certification. Step 2: It requires 5 years of documented practical experience and a minimum 40-hour ASSE-approved course. Step 3: Then a 100-question written exam (70% to pass, 2 hours, closed book) and a practical exam testing all four assemblies (RPZ, DCVA, PVB, SVBA). Step 4: The credential is valid 3 years. This course teaches the procedures; the credential authorizes the work, with supervised practice.</p>"
    }
  ],
  quiz: [
    {
      q: "A chemical feed tank needs:",
      choices: ["A PVB", "A DCVA", "An RPZ or an air gap", "An SVBA"],
      answer: 2,
      explanation: "Correct: (c). A chemical tank is a high hazard and needs the strongest protection. (a) A PVB stops backsiphonage only. (b) A DCVA is for low hazards. (d) An SVBA stops backsiphonage only."
    },
    {
      q: "An RPZ Check 1 must hold at least:",
      choices: ["1 psid", "2 psid", "5 psid", "10 psid"],
      answer: 2,
      explanation: "Correct: (c). Check 1 must hold 5 psid or higher. (a) 1 psid is the Check 2 and DCVA minimum. (b) 2 psid is the relief valve opening point. (d) 10 psid is not a pass value."
    },
    {
      q: "A PVB's air inlet must open at:",
      choices: ["0.5 psid or higher", "1 psid or higher", "2 psid or higher", "5 psid or higher"],
      answer: 1,
      explanation: "Correct: (b). The air inlet must open at 1 psid or higher. (a) 0.5 psid is too late. (c) 2 psid is the relief opening point. (d) 5 psid is the RPZ Check 1 minimum."
    },
    {
      q: "The minimum air gap is:",
      choices: ["1 inch", "Twice the pipe diameter, with a minimum of 1 inch", "6 inches", "12 inches"],
      answer: 1,
      explanation: "Correct: (b). The air gap is at least twice the pipe diameter, minimum 1 inch. (a) 1 inch is the minimum, not the whole rule. (c) 6 inches is the vent rise above a flood-level rim. (d) 12 inches is the PVB's height above the highest outlet."
    },
    {
      q: "A fire sprinkler system with a fire pump needs:",
      choices: ["A PVB", "A DCVA", "An SVBA", "No protection"],
      answer: 1,
      explanation: "Correct: (b). A fire sprinkler is a low hazard with backpressure possible, so a DCVA fits. (a) A PVB cannot hold against backpressure. (c) An SVBA cannot hold against backpressure. (d) Every cross-connection needs protection."
    },
    {
      q: "Graywater comes from:",
      choices: ["Water closets", "Showers, tubs, lavatories, and laundry", "Kitchen sinks with garbage disposals", "Swimming pools"],
      answer: 1,
      explanation: "Correct: (b). Graywater is from tubs, showers, lavatories, and laundry. (a) Water closets produce blackwater. (c) Kitchen disposals produce blackwater. (d) Pool water is chemically treated waste."
    },
    {
      q: "A septic tank should be pumped:",
      choices: ["Every month", "Every 3 to 5 years", "Never", "Only when it fails"],
      answer: 1,
      explanation: "Correct: (b). Every 3 to 5 years is the typical schedule. (a) Monthly is unnecessary. (c) Never pumping guarantees failure. (d) Pumping only after failure is too late."
    },
    {
      q: "What do a failed backflow test, a failed pump, and a failed grease interceptor have in common?",
      choices: ["They are all caused by freezing", "A protection stopped working, nobody noticed, and the damage was the discovery", "They are all cheap to fix", "They all need a new building"],
      answer: 1,
      explanation: "Correct: (b). Every failure has the same shape: unnoticed decline, then damage. (a) Freezing is one cause, not the common shape. (c) They are expensive when discovered late. (d) None of them needs a new building."
    }
  ],
  studyGuide: `
<h3>Module 12 — Course Review: Quick Reference</h3>
<p><strong>Matching rule:</strong> Hazard level decides the strength · Kind of backflow decides the family · High hazard → RPZ or air gap · Backpressure possible → RPZ or DCVA · Backsiphonage only → PVB or SVBA.</p>
<p><strong>Pass values:</strong> RPZ 5, 2, 1 · DCVA 1 and 1 · PVB/SVBA air inlet 1, check 1.</p>
<p><strong>ASSE 5110:</strong> 5 years experience + 40-hour course · 100 questions, 70% to pass, 2 hours, closed book · Practical on all four assemblies · Valid 3 years.</p>
<p><strong>Other numbers:</strong> Air gap ≥ twice the diameter, minimum 1 inch · PVB 12 inches above the highest outlet · Septic pumped every 3 to 5 years · WC 1.28 gpf · Lavatory 1.5 gpm · Shower 2.0 gpm.</p>
<p><strong>Habits:</strong> Test on schedule · Maintain on schedule · Record everything. Every failure has the same shape — a protection stopped working and nobody noticed.</p>
<p><strong>Self-check:</strong> Walk a building in your mind and match every hazard to its protection. If you can do that, you are ready for the final exam.</p>
`
};
