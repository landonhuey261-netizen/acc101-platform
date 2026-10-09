// HVAC 102 - Module 9: EPA Section 608 Regulations for Technicians
module.exports = {
  number: 9,
  slug: "epa-608-regulations",
  title: "EPA Section 608 Regulations for Technicians",
  estTime: "3–4 hours",
  objectives: [
    "Describe the Section 608 certification structure: Core plus Type I, II, and III, and what Universal certification means.",
    "State the venting prohibition and its good-faith (de minimis) boundary, in plain language.",
    "Distinguish recover, recycle, and reclaim — and the purity standard that separates reclaiming from the other two.",
    "Explain recovery/recycling equipment certification and the technician certification requirement for purchasing refrigerant.",
    "Apply the sales restriction and the small-appliance (Type I) recovery rules, including passive vs. active recovery."
  ],
  sections: [
    {
      heading: "The Certification Map: Core + Types",
      html: `<p>Section 608 of the Clean Air Act, implemented in 40 CFR Part 82, is the federal rulebook for refrigerant handling. Its certification structure is simple and absolute:</p><ul><li><strong>Core</strong> — the common foundation: ozone science, the Clean Air Act, recovery fundamentals, safety. Core is required with <em>every</em> type; there is no type without it.</li><li><strong>Type I</strong> — small appliances: factory-sealed equipment with small charges, such as household refrigerators, freezers, and window units.</li><li><strong>Type II</strong> — high-pressure appliances: most comfort cooling and refrigeration work in this program (split systems, rooftops, supermarket equipment on high-pressure refrigerants).</li><li><strong>Type III</strong> — low-pressure appliances: chillers operating under vacuum on the low side.</li><li><strong>Universal</strong> — Core plus all three types passed.</li></ul><p>Each section is a 25-question multiple-choice exam, and the passing standard is 70% or better per section — on 25 questions, that means at least 18 correct. Certification does not expire. Two honesty rules govern this course's place in that world: certification is earned only through <strong>EPA-approved certifying organizations</strong> — this course prepares you, it cannot certify you — and technicians must be certified both to <strong>service appliances</strong> and to <strong>purchase refrigerant</strong>. State and local licensing is a separate layer that varies by jurisdiction and is not granted by 608 certification either.</p><div class="callout"><strong>Key idea:</strong> Core + the type(s) for the equipment you touch. No certificate, no refrigerant work — the certification is the license to be in the circuit at all.</div>`
    },
    {
      heading: "The Venting Prohibition",
      html: `<p>The rule at the center of 608 practice: <strong>knowingly venting refrigerant to the atmosphere is prohibited.</strong> Refrigerant comes out of a system into a recovery cylinder, through certified equipment — or it does not come out. 'Knowingly' is doing legal work in that sentence: the prohibition targets deliberate releases and careless practice — cutting a line to 'let it blow,' purging charge to reach a fitting, dumping a system to save the twenty minutes recovery takes.</p><p>The boundary of the rule is the <strong>de minimis</strong> concept: small releases that occur despite good faith and best practice — the puff when disconnecting a hose fitted with low-loss ends, the trace in a pump-down — are not the violations the law hunts. De minimis is a description of <em>unavoidable residue after doing everything right</em>, never a permission slip for avoidable releases: the technician who skips low-loss fittings and calls the cloud 'de minimis' has the concept backwards.</p><p>Practical corollaries you will live daily:</p><ul><li>Recover before opening any circuit, to the required evacuation level for the appliance (Section 4).</li><li>Pressure-test with dry nitrogen, never by 'cracking a little refrigerant in' as a casual tracer habit outside approved methods.</li><li>Fix the recovery machine's problems on the ground, not by venting the system's contents 'to get through the call.'</li><li>Remember the venting ban covers substitute refrigerants (HFCs such as R-410A) as well as ozone-depleting ones — 'it doesn't hurt ozone' is not a venting defense.</li></ul><div class="callout"><strong>Key idea:</strong> Deliberate release = violation. Residue despite best practice = de minimis. The difference is entirely in how you worked.</div>`
    },
    {
      heading: "Recover, Recycle, Reclaim: Three Different Verbs",
      html: `<p>The regulations define three operations that field slang blurs into one. Precision here is exam material and shop practice at once:</p><ul><li><strong>Recover</strong> — remove refrigerant from an appliance and store it in an external container, without necessarily testing or processing it. Recovered refrigerant may go back into the <em>same owner's</em> equipment under the rules for recovered material.</li><li><strong>Recycle</strong> — clean refrigerant for reuse by separating oil and reducing moisture and acidity (typically with filter-drier equipped recovery equipment), without the full laboratory analysis reclaiming demands. Recycled refrigerant is likewise restricted in how it changes hands.</li><li><strong>Reclaim</strong> — reprocess refrigerant to virgin-product purity specifications (the industry standard is AHRI Standard 700), verified by chemical analysis. Only reclaimed refrigerant may be <strong>sold or transferred to a new owner</strong>. A reclaimer is a certified operation, not a shop evaporator and a prayer.</li></ul><p>Corollaries: never mix refrigerants in a recovery cylinder (a mixed cylinder may be un-reclaimable — an expensive chemistry lesson that can render the whole contents waste); label every cylinder with the refrigerant it holds; respect cylinder fill limits (the 80% fill discipline) so liquid expansion can never hydrostatically rupture a vessel; and send contaminated/burnout refrigerant down the documented path Module 7 established. The cylinder in the truck bed is a regulated object with a biography — treat its paperwork accordingly.</p><div class="callout"><strong>Key idea:</strong> Recover = take it out. Recycle = clean it for restricted reuse. Reclaim = restore it to virgin purity, lab-verified — the only form that can be sold to someone new.</div>`
    },
    {
      heading: "Equipment Certification and Required Recovery Levels",
      html: `<p>Recovery and recycling equipment itself must be <strong>certified</strong> — tested by an EPA-approved organization and labeled as meeting the standard for its class of appliance — and equipment manufactured after the program's early-1990s start date must carry that certification to be legal for service use. Persons servicing appliances must also certify to EPA (through their equipment-acquisition certification) that they have obtained certified recovery equipment and will comply with the rules — the paperwork trail that ties a shop to its machines.</p><p>Before a system is opened for service or disposal, its refrigerant must be evacuated to the <strong>required recovery level for that appliance class</strong> — the levels vary by appliance type, refrigerant pressure class, charge size, and equipment generation, and the table lives in the regulation and the equipment's certification materials. Type II practice in this program centers on high-pressure appliances: for common high-pressure equipment with charges under 200 lb, the required level for modern certified recovery equipment is a deep system vacuum endpoint (0 inches of mercury gauge in the standard table) — the practical teaching being: recover to the table value for the machine in front of you, verify it on the gauges, and never substitute 'the recovery machine sounded empty' for a measured endpoint.</p><p>For <strong>Type I small appliances</strong>, recovery performance is expressed as percentages: equipment must recover <strong>80%</strong> of the charge when the appliance's compressor is not operating, or <strong>90%</strong> when it is operating (with the alternative of evacuating to 4 inches of mercury vacuum). Those numbers exist because small sealed systems often lack service access — which leads directly to the next section's techniques.</p><div class="callout"><strong>Key idea:</strong> Certified machine + measured endpoint + the level from the table for that appliance. 'Probably empty' is not a compliance category.</div>`
    },
    {
      heading: "Sales Restriction, Small Appliances, and Working Legally",
      html: `<p><strong>Sales restriction.</strong> Refrigerant (in the regulated classes) may be sold only to certified technicians — or to their employers/purchasers who employ certified technicians — and sellers must keep records of those sales. The practical teeth: no card, no cylinder, at any legitimate wholesaler; and a shop buying refrigerant is creating the paper trail (names, dates, amounts) that Module 10's recordkeeping extends. The restriction exists so that refrigerant flows only to people trained and legally bound to keep it in circuits.</p><p><strong>Type I technique — passive vs. active recovery.</strong> Small appliances may have no service valves. <em>Passive (system-dependent) recovery</em> uses the appliance's own compressor or ambient heat/cold to push refrigerant into a non-pressurized (or pump-evacuated) container — allowed for small appliances within its limits, and dependent on the appliance's condition. <em>Active (self-contained) recovery</em> uses a recovery machine to pull the charge out regardless of whether the appliance's compressor runs. Access is gained with piercing valves where the rules and the appliance allow — and a piercing installation that leaks makes the 'appliance' a venting source, so piercing fittings are treated as temporary access to be properly sealed or removed per the disposal rules. Final disposers (scrap yards, recyclers) must ensure and document that refrigerant was recovered before the appliance enters the waste stream.</p><p>Close the module with the habit stack that keeps a technician employable: certify before touching; recover, never vent; measure endpoints; label cylinders; keep records three years (Module 10). The rules are not paperwork draped over the real work — in 608's design, the records <em>are</em> the enforcement mechanism, and the technician who keeps them cleanly is the technician the industry can trust with a roof full of regulated refrigerant.</p><div class="callout"><strong>Key idea:</strong> Sales restricted to the certified. Small appliances: passive recovery leans on the appliance, active recovery brings its own machine. Everyone documents.</div>`
    }
  ],
  keyTerms: [
    { term: "Section 608", def: "The Clean Air Act section (40 CFR Part 82) governing refrigerant handling, technician certification, recovery, leak repair, and sales restrictions." },
    { term: "Core certification", def: "The required foundation section of 608 covering ozone, law, recovery, and safety; must accompany every type." },
    { term: "Type I", def: "608 certification for small appliances such as household refrigerators and window units." },
    { term: "Type II", def: "608 certification for high-pressure appliances — most comfort cooling and refrigeration service." },
    { term: "Type III", def: "608 certification for low-pressure appliances such as chillers operating in vacuum." },
    { term: "Universal certification", def: "Passing Core plus Types I, II, and III." },
    { term: "Passing standard", def: "70% or better per 25-question section — at least 18 of 25 correct. Certification does not expire." },
    { term: "Venting prohibition", def: "The ban on knowingly releasing refrigerant to the atmosphere during service, repair, or disposal." },
    { term: "De minimis release", def: "A small, unavoidable release occurring despite good-faith best practice; not a violation, and not a license for carelessness." },
    { term: "Recover", def: "To remove refrigerant from an appliance into an external container without necessarily processing it." },
    { term: "Recycle", def: "To clean recovered refrigerant (oil separation, moisture/acid reduction) for restricted reuse." },
    { term: "Reclaim", def: "To reprocess refrigerant to virgin purity specifications (AHRI 700), verified by analysis; required before sale to a new owner." },
    { term: "Certified recovery equipment", def: "Recovery/recycling equipment tested and labeled by an EPA-approved organization as meeting the applicable standard." },
    { term: "Sales restriction", def: "Regulated refrigerant may be sold only to certified technicians (or employers of certified technicians), with seller records kept." },
    { term: "Passive recovery", def: "System-dependent recovery relying on the appliance itself to move refrigerant; used within its limits on small appliances." },
    { term: "Active recovery", def: "Recovery using a self-contained recovery machine, independent of the appliance's compressor." },
    { term: "Required recovery level", def: "The evacuation endpoint (vacuum level or percentage) the rules specify for an appliance class before it is opened or disposed of." },
    { term: "Small appliance (Type I context)", def: "Factory-charged, hermetically sealed equipment with a small charge — household refrigerators, freezers, window units are the teaching examples." }
  ],
  video: {
    title: "EPA 608 Core Study Guide (2026) — Certification, Ozone, Laws, Recovery & Safety, Full Review",
    embedUrl: "https://www.youtube.com/embed/q7ZUEM32Jjs",
    note: "A section-by-section Core review — certification structure, laws, recovery equipment and levels, sales restriction, evacuation, and safety — directly parallel to this module. Use it as a revision pass; this course's practice questions are original, and the real exam is taken through an EPA-approved certifying organization, not through this course.",
    more: [
      { title: "What Is the Most Important HVAC Certification to Get First? (EPA 608 Explained)", url: "https://www.youtube.com/watch?v=2WhJe3kE3Io" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A technician holds Type II only. Which of these jobs may they legally perform: (a) servicing a residential split system, (b) servicing a household refrigerator, (c) servicing a low-pressure chiller? Explain the structure behind the answer.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) Yes — split systems are high-pressure Type II appliances. Step 2: (b) No — small appliances require Type I. Step 3: (c) No — low-pressure chillers require Type III. Step 4: Structure — Core is common to all, but each type authorizes only its appliance class; only <strong>Universal</strong> (Core + I + II + III) covers all three.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Classify each release as a venting violation or de minimis: (a) the puff escaping when low-loss hoses are disconnected after proper recovery; (b) cracking a liquid line open to empty a system faster; (c) purging air from a manifold by venting a charge of refrigerant through it as routine practice.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>De minimis</strong> — small residue despite correct equipment and procedure. Step 2: (b) <strong>Violation</strong> — a deliberate, knowing release of the charge. Step 3: (c) <strong>Violation as practiced</strong> — routine, avoidable releases adopted as method are 'knowing' releases; best practice (evacuated manifolds, low-loss technique) exists precisely to prevent them. Intent and avoidability decide the classification.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A shop owner proposes selling a customer 'that good used R-22 we recovered from his neighbor's changeout' after running it through the shop's recovery machine. Identify every regulatory error in the plan.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A recovery machine <em>recovers</em> (and at best, recycle-grade cleans) — it does not <strong>reclaim</strong> to virgin purity verified by laboratory analysis. Step 2: Refrigerant that changes ownership must be <strong>reclaimed</strong> first. Step 3: Recovered/recycled material is restricted to the same owner's equipment channels. Step 4: Therefore the sale is impermissible as described; the lawful path is sending the refrigerant to a certified reclaimer and documenting the transfer.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> State the Type I recovery performance standard in both compressor conditions, and the vacuum alternative.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With the appliance compressor <strong>not operating</strong>, recovery equipment must recover <strong>80%</strong> of the charge. Step 2: With the compressor <strong>operating</strong>, <strong>90%</strong>. Step 3: The alternative endpoint is evacuating the appliance to <strong>4 inches of mercury vacuum</strong>. These percentage/vacuum endpoints exist because small sealed appliances often provide no service access and limited ability to move charge.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A homeowner with no certification asks the supply house for a cylinder of R-410A 'for his cousin to install.' Walk the counter through the compliant answer.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>sales restriction</strong> limits refrigerant sales to certified technicians, or purchasers who employ certified technicians for that work. Step 2: An uncertified buyer for an uncertified installer satisfies neither branch — the sale must be declined. Step 3: The compliant path is for a certified technician to purchase and perform the refrigerant work. Step 4: The seller records legitimate sales; a declined sale like this is documented per house policy, not quietly waived.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Two technicians argue: 'HFCs don't deplete ozone, so the venting rules are really about the old refrigerants.' Settle it accurately in two or three sentences.</p>",
      solution: "<p><strong>Answer:</strong> The venting prohibition covers substitute refrigerants including HFCs such as R-410A, not only ozone-depleting CFCs/HCFCs — knowingly venting R-410A during service is prohibited, and 608 certification is required to purchase and handle it. Ozone depletion motivated the original program; climate impact and the statute's coverage keep HFC handling inside the same discipline.</p>"
    }
  ],
  quiz: [
    {
      q: "Universal 608 certification means passing:",
      choices: ["Core only, with a high score", "Core plus Type I, Type II, and Type III", "Any two types plus Core", "Type II plus five years of experience"],
      answer: 1,
      explanation: "Correct: (b). Universal = Core + all three types, each passed at 70% or better. (a) Core alone authorizes no appliance class by itself. (c) Two types leave the third class unauthorized. (d) Experience is valuable but is not a certification component."
    },
    {
      q: "Each 608 exam section contains ___ questions, and passing is ___:",
      choices: ["50 questions; 70%", "25 questions; 70% (at least 18 correct)", "25 questions; 50%", "100 questions; 70%"],
      answer: 1,
      explanation: "Correct: (b). Sections are 25 questions each with a 70% pass mark = 18 of 25. (a) describes the NATE Core exam's size, a different credential. (c) understates the standard. (d) matches no 608 section (it resembles a NATE specialty length)."
    },
    {
      q: "Which act is a clear violation of the venting prohibition?",
      choices: ["The small puff when disconnecting low-loss hoses after recovery", "Cutting a line and letting the charge blow off to save time", "Recovering into a certified machine to the required level", "Pressure-testing with dry nitrogen"],
      answer: 1,
      explanation: "Correct: (b). Deliberately releasing the charge is the textbook 'knowing vent.' (a) is de minimis — residue despite best practice. (c) is the required lawful method. (d) Nitrogen testing is standard, refrigerant-free practice."
    },
    {
      q: "Reclaimed refrigerant is defined by:",
      choices: ["Running it through a recovery machine twice", "Reprocessing to virgin purity specifications (AHRI 700), verified by chemical analysis — required before sale to a new owner", "Filtering it through a new drier", "Storing it in a new cylinder"],
      answer: 1,
      explanation: "Correct: (b). Reclaiming is a certified, lab-verified process with an ownership consequence: only reclaimed refrigerant may be sold/transferred to a new owner. (a) and (c) describe recovery/recycling-grade cleaning. (d) Packaging changes nothing chemically."
    },
    {
      q: "For Type I small appliances, recovery equipment must recover ___ of the charge with the compressor running, or ___ with it not running (or evacuate to 4 in. Hg):",
      choices: ["50% / 50%", "90% / 80%", "80% / 90%", "100% / 100%"],
      answer: 1,
      explanation: "Correct: (b). Running compressor: 90%; not running: 80%; vacuum alternative 4 in. Hg. (a) understates both. (c) reverses the two values — the running compressor helps move charge, hence the higher standard. (d) Absolute recovery is physically unattainable in sealed small systems."
    },
    {
      q: "The refrigerant sales restriction permits purchase by:",
      choices: ["Anyone with a driver's license", "Certified technicians, or purchasers who employ certified technicians", "Homeowners doing their own work", "Anyone buying less than one pound"],
      answer: 1,
      explanation: "Correct: (b). Certification (or employment of the certified) is the gate; sellers keep records. (a), (c), and (d) each invent an exemption that does not exist — there is no DIY or small-quantity carve-out in the restriction."
    },
    {
      q: "Passive recovery differs from active recovery in that passive recovery:",
      choices: ["Is illegal in all cases", "Depends on the appliance itself (its compressor/conditions) to move refrigerant, rather than on a self-contained recovery machine", "Requires no container", "Vents refrigerant slowly"],
      answer: 1,
      explanation: "Correct: (b). Passive = system-dependent, used within its limits on small appliances; active = machine-driven regardless of appliance condition. (a) Passive recovery is a recognized method in its lane. (c) Both methods store refrigerant in containers. (d) Neither method vents."
    },
    {
      q: "608 certification is issued by:",
      choices: ["This online course", "EPA-approved certifying organizations", "The equipment manufacturer", "The local supply house"],
      answer: 1,
      explanation: "Correct: (b). Only EPA-approved certifying organizations administer the credential; courses like this one prepare candidates. (a) is exactly the overclaim this program refuses to make. (c) Manufacturers certify equipment compliance, not technicians under 608. (d) Wholesalers verify and record certification for sales; they do not issue it."
    }
  ],
  studyGuide: `
<h3>Module 9 — EPA Section 608 Regulations: Quick Reference</h3>
<p><strong>Structure:</strong> Core (required with every type) + Type I small appliances, Type II high-pressure, Type III low-pressure. Universal = Core + I + II + III. Each section 25 questions; pass = 70% (≥18/25). Certification does not expire. Issued only by EPA-approved certifying organizations — this course prepares, it does not certify.</p>
<p><strong>Venting:</strong> knowingly venting refrigerant is prohibited — substitutes (HFCs) included. De minimis = small residue despite good-faith best practice only.</p>
<p><strong>Three verbs:</strong> recover (remove &amp; store), recycle (clean for restricted reuse), reclaim (virgin purity, AHRI 700, lab-verified; required before sale to a new owner). Never mix refrigerants in a cylinder; label everything; 80% fill discipline.</p>
<p><strong>Equipment &amp; levels:</strong> recovery equipment must be certified/labeled; recover to the required level for the appliance before opening. Type I: 90% (compressor running) / 80% (not running), or 4 in. Hg vacuum.</p>
<p><strong>Sales:</strong> only to certified technicians or employers of certified technicians; sellers keep records.</p>
<p><strong>Watch out:</strong> state/local licensing is separate from 608 and varies. Records are kept 3 years (Module 10).</p>
`
};
