// Plumbing 203 - Module 8: Medical Gas & Vacuum Systems: NFPA 99 & ASSE 6010 (intro)
module.exports = {
  number: 8,
  slug: "medical-gas-vacuum-systems",
  title: "Medical Gas & Vacuum Systems: NFPA 99 & ASSE 6010",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a medical gas system is and why it is governed by NFPA 99, not by ordinary plumbing rules.",
    "Name the gases and vacuum systems in a health care facility and what each one is used for.",
    "Describe the installer requirements: ASSE 6010 credential, training, and the brazing qualification.",
    "Explain the medical gas brazing rules: BCuP filler, nitrogen purge, and the penetration standard.",
    "Describe the testing and verification sequence: pressure tests, purity checks, and third-party verification."
  ],
  sections: [
    {
      heading: "A Different Kind of Piping",
      html: `
<p>A medical gas system carries gases that keep people alive: oxygen to help patients breathe, nitrous oxide for anesthesia, medical air for ventilators and tools, and vacuum to clear airways and surgical fields. A mistake in this piping does not cause a leak stain — it can deliver the wrong gas, a contaminated gas, or no gas at all to a patient who cannot wait. That is why medical gas work is governed by its own code and its own credential, and why this module is an introduction, not a qualification.</p>
<p>The governing standard is <strong>NFPA 99, the Health Care Facilities Code</strong>. It covers the design, installation, testing, and maintenance of medical gas and vacuum systems. The International Plumbing Code points to NFPA 99 for medical gas — ordinary plumbing rules do not apply to this piping. The people who install it must hold the <strong>ASSE 6010 Medical Gas Systems Installer</strong> credential, and the people who verify it hold a separate credential, ASSE 6030.</p>
<p>Read this carefully: <strong>completing this module does not qualify you to install medical gas systems.</strong> Real medical gas work requires the ASSE 6010 credential — a minimum of four years of documented practical experience installing plumbing or mechanical piping systems, a minimum 32-hour ASSE-approved course, a written exam of 100 multiple-choice questions, and a brazing exam — plus supervised practice. The credential is valid for three years. This module teaches you what the systems are, how they work, and what the rules require, so you understand the work and can prepare for the credential properly in the capstone.</p>
<div class="callout"><strong>Key idea:</strong> Medical gas piping is life-safety piping. It follows NFPA 99, it is installed only by ASSE 6010 credential holders, and it is verified by a separate ASSE 6030 verifier. This module is an introduction — the credential comes from the ASSE process, not from this course.</div>`
    },
    {
      heading: "The Gases and the Vacuum",
      html: `
<p>A health care facility's medical gas system is a network of separate pipelines, one for each gas, plus vacuum. Each pipeline has its own color coding, its own labeling, and its own outlets — and the outlets are designed so the wrong gas cannot be connected by mistake.</p>
<p><strong>Oxygen</strong> is the most common medical gas: it supports breathing for patients in respiratory distress, in surgery, and in recovery. It is supplied from bulk liquid oxygen tanks, cylinders, or an oxygen concentrator system, through a central supply to outlets at bedsides and in operating rooms.</p>
<p><strong>Nitrous oxide</strong> is an anesthetic gas, used in surgery and dentistry. <strong>Medical air</strong> is clean, dry, oil-free compressed air used for ventilators and for driving medical tools. <strong>Carbon dioxide</strong> is used in surgery to inflate the abdomen for laparoscopic procedures. Other gases — nitrogen, helium, and mixtures — serve specialized equipment.</p>
<p><strong>Medical vacuum</strong> is a suction system that clears airways, removes fluids during surgery, and drains wound sites. It is piped like a gas system but in reverse: it pulls rather than pushes, and its outlets and alarms are part of the same NFPA 99 system. <strong>Waste anesthetic gas disposal (WAGD)</strong> removes exhaled anesthetic gases from operating rooms so staff are not exposed to them.</p>
<p>Every pipeline is labeled along its entire run, with the gas name and its direction of flow, and every outlet is labeled and gas-specific. A cross-connection — oxygen piped to a nitrous oxide outlet, for example — is the nightmare this whole system of labeling, testing, and verification exists to prevent.</p>
<div class="callout"><strong>Key idea:</strong> One gas, one pipeline, one labeling scheme, one set of outlets — and the outlets are physically different so the wrong gas cannot be connected. Cross-connection is the failure the entire system is designed to prevent.</div>`
    },
    {
      heading: "Who May Install It: ASSE 6010",
      html: `
<p>The ASSE 6000 series sets the qualifications for the people who work on medical gas systems. The installer credential is <strong>ASSE 6010</strong>, and it has four parts.</p>
<p><strong>Experience:</strong> a minimum of four years of documented practical experience installing plumbing or mechanical piping systems. This is not a beginner's credential — it is built on a journeyman's foundation.</p>
<p><strong>Training:</strong> a minimum 32-hour course covering ASSE 6010 and the applicable parts of NFPA 99, taught by an ASSE 6050 instructor.</p>
<p><strong>Written exam:</strong> 100 multiple-choice questions. Note the pass-mark situation honestly: ASSE's own standard and some training providers state a 70% pass mark, while NITC, the main certifying body, requires 77%. If you test through NITC, aim for 77% or better. The capstone's practice exam uses 70% as a practice benchmark and tells you plainly to aim higher.</p>
<p><strong>Brazing exam:</strong> a practical brazing test under NFPA 99 rules, requiring 80% or greater penetration of the filler metal into the joint, in horizontal and vertical positions. A valid ASME Section IX brazing qualification is also required to obtain the 6010 credential. The brazing lab at the end of this course practices the procedure — the sequence, the purge, and the inspection — but the real qualification happens in an approved course under a qualified instructor.</p>
<div class="callout"><strong>Key idea:</strong> ASSE 6010 = 4 years of documented experience + a 32-hour approved course + a 100-question written exam + a brazing exam at 80% penetration. The credential is valid for three years. There is no shortcut, and there should not be — this piping keeps people alive.</div>`
    },
    {
      heading: "Brazing Medical Gas Piping: The Rules That Matter",
      html: `
<p>Medical gas copper piping is joined by <strong>brazing, not soldering</strong>. Brazing uses a higher-temperature filler metal and produces a stronger, cleaner joint — and NFPA 99 requires it for medical gas piping. The filler metal for copper-to-copper medical gas joints is the <strong>BCuP series</strong> (phosphorus-copper, often called sil-phos), and the joint must be made with the rules below.</p>
<p><strong>Cleanliness first.</strong> Tube ends are cut, reamed, and deburred, and the joint surfaces are cleaned. Medical gas piping is cleaned for oxygen service: oil, grease, and debris inside the pipe are contamination, and in an oxygen system contamination is a fire and safety hazard, not just dirt.</p>
<p><strong>Nitrogen purge during brazing.</strong> While brazing, an oil-free nitrogen purge flows through the pipe. The nitrogen displaces oxygen inside the pipe so the hot copper does not oxidize — without the purge, a flaky oxide scale forms inside the pipe and travels downstream into regulators, outlets, and patients' lungs. The purge runs before the torch is lit, through the whole braze, and until the joint has cooled.</p>
<p><strong>Heat the pipe, not the filler.</strong> The torch heats the base metal evenly until it is hot enough to melt the filler by conduction, and the filler is drawn into the joint by capillary action. The filler follows the heat, so the torch is aimed where the filler needs to go. Overheating burns the joint; underheating leaves the filler sitting on the surface instead of inside the joint.</p>
<p><strong>Penetration is the standard.</strong> The brazing exam cuts the finished joint open and measures how far the filler metal penetrated the joint: 80% or greater penetration is required to pass. A pretty joint with poor penetration fails, and a rough-looking joint with full penetration passes — penetration, not appearance, is the measure.</p>
<div class="callout"><strong>Key idea:</strong> Brazing medical gas = BCuP filler + clean joints + oil-free nitrogen purge the whole time + heat the pipe so the filler flows in + 80% penetration. The purge is not optional: without it, oxide scale forms inside the pipe and contaminates the system.</div>
<p><strong>Safety warning:</strong> Brazing uses an oxy-fuel torch at very high temperature. It causes severe burns and can start fires. Never practice brazing without proper training, supervision, PPE, and a fire-safe work area — and never braze on a live medical gas system.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Medical gas systems follow NFPA 99, not ordinary plumbing rules. They carry oxygen, nitrous oxide, medical air, carbon dioxide, and vacuum.</li>
<li>One gas, one pipeline, one labeling scheme — and gas-specific outlets so the wrong gas cannot be connected.</li>
<li>ASSE 6010 requires 4 years of documented experience, a 32-hour approved course, a 100-question written exam, and a brazing exam at 80% penetration. Valid 3 years.</li>
<li>Medical gas copper is brazed with BCuP filler, with an oil-free nitrogen purge running the whole time, and judged on penetration, not appearance.</li>
<li>Testing and verification follow a strict sequence — pressure tests, purity checks, cross-connection tests, and a separate ASSE 6030 verifier.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Thinking soldering is acceptable for medical gas piping. It is not — NFPA 99 requires brazing, and a soldered medical gas joint is a code violation and a safety failure.</div>
<div class="callout"><strong>Common mistake:</strong> Brazing without a nitrogen purge. The joint may look fine from outside while oxide scale coats the inside of the pipe — contamination that travels downstream to the patient. Purge before, during, and after the braze.</div>
<p><strong>Ready-to-work link:</strong> The medical gas brazing lab at the end of this course practices the full procedure in sequence. Module 9 turns from the hospital to the countryside: private well water systems, where the plumber is the water utility.</p>`
    }
  ],
  keyTerms: [
    { term: "NFPA 99", def: "The Health Care Facilities Code, governing medical gas and vacuum systems in health care facilities." },
    { term: "ASSE 6010", def: "The credential for medical gas systems installers: experience, a 32-hour course, a written exam, and a brazing exam." },
    { term: "ASSE 6030", def: "The credential for medical gas systems verifiers, who independently test and certify an installed system." },
    { term: "Medical gas", def: "Gases piped in a health care facility for patient care — oxygen, nitrous oxide, medical air, carbon dioxide." },
    { term: "Medical vacuum", def: "A piped suction system used to clear airways and remove fluids in health care." },
    { term: "WAGD", def: "Waste anesthetic gas disposal — the system that removes exhaled anesthetic gases from operating rooms." },
    { term: "Cross-connection", def: "A wrong connection between two gas pipelines, such as oxygen piped to a nitrous oxide outlet." },
    { term: "BCuP filler", def: "A phosphorus-copper brazing filler metal (sil-phos) used for copper-to-copper medical gas joints." },
    { term: "Nitrogen purge", def: "Flowing oil-free nitrogen through pipe during brazing to prevent oxidation inside the pipe." },
    { term: "Penetration", def: "How far brazing filler metal flows into a joint; the medical gas brazing exam requires 80% or greater." },
    { term: "Brazing", def: "Joining metal with a filler metal melted above 840°F, without melting the base metals." },
    { term: "Soldering", def: "Joining metal with a filler metal melted below 840°F; not permitted for medical gas piping." },
    { term: "ASME Section IX", def: "The welding and brazing qualification standard; a valid brazing qualification under it is required for ASSE 6010." },
    { term: "Source equipment", def: "The equipment that supplies medical gases — bulk tanks, cylinders, compressors, and vacuum pumps." },
    { term: "Zone valve box", def: "The labeled shutoff valve assembly that isolates the medical gas supply to one area of a facility." },
    { term: "Alarm system", def: "The medical gas monitoring system that warns staff of low pressure, high pressure, or supply failure." }
  ],
  video: {
    title: "Brazing Copper Pipe - Like A Pro! Soldering Copper Pipe Not Allowed Under Concrete Slab Foundation!",
    embedUrl: "https://www.youtube.com/embed/p2z4ti3cVwc",
    note: "A full copper brazing demonstration: preparation, torch work, and filler flow. Watch the preparation and the way the filler is drawn into the joint — then compare the procedure with the medical gas rules in this module, especially the nitrogen purge.",
    more: [
      { title: "How to Braze Copper to Steel", url: "https://www.youtube.com/watch?v=J0keW0INlQg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A hospital is renovating a wing and needs new oxygen piping. A plumber with 2 years of experience offers to install it. Can they legally and properly do the work? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — medical gas installation requires the ASSE 6010 credential. Step 2: The credential requires a minimum of four years of documented practical experience installing plumbing or mechanical piping systems, plus a 32-hour approved course, a 100-question written exam, and a brazing exam. Step 3: With two years of experience, this plumber does not meet the eligibility requirement. Step 4: The work must be done by an ASSE 6010 credential holder, and the finished system must be verified by a separate ASSE 6030 verifier.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> During a medical gas braze, the nitrogen purge is stopped halfway through the joint to save time. What happens inside the pipe, and why does it matter?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Without the nitrogen purge, oxygen inside the pipe reacts with the hot copper and forms a flaky oxide scale on the inside walls. Step 2: That scale breaks loose and travels downstream into regulators, outlets, and the patient's breathing circuit — contamination in an oxygen system. Step 3: The joint may look fine from outside while the inside is contaminated, so the defect is invisible without cutting the joint open. Step 4: The purge must run before the torch is lit, through the whole braze, and until the joint cools.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A brazed medical gas coupon is cut open for inspection. The joint shows filler metal through 16 of 20 measured sections. Does it pass the ASSE 6010 brazing standard? Show your work.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Penetration = 16 ÷ 20 = 0.80, or 80%. Step 2: The standard requires 80% or greater penetration. Step 3: 80% meets the standard, so the coupon passes — exactly at the line. Step 4: A coupon at 15 of 20 (75%) would fail, and the brazer would need to retest. Step 5: Note that penetration, not appearance, is the measure — a rough-looking joint with full penetration passes.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why does NFPA 99 require brazing rather than soldering for medical gas copper piping? Give two reasons.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Brazing produces a stronger joint — the higher-temperature filler and the deeper penetration give the joint the strength a life-safety system requires. Step 2: Brazing with a nitrogen purge produces a clean interior without oxide scale, which matters because the gas goes directly to patients. Step 3: Soldering cannot meet either requirement: its joints are weaker and its process does not provide the same cleanliness and penetration standard. Step 4: A soldered medical gas joint is a code violation under NFPA 99.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A medical gas installer finishes a new oxygen pipeline. Who verifies it, and why must the verifier be a different person from the installer?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The system is verified by an ASSE 6030 credentialed verifier — a separate qualification from the installer's ASSE 6010. Step 2: The verifier runs the testing sequence independently: pressure tests, purity checks, and cross-connection tests that prove the right gas reaches the right outlet. Step 3: Independence matters because the person who installed the work cannot objectively check their own work — a missed cross-connection or a contaminated joint must be caught by fresh eyes. Step 4: No system is put into patient service until the verifier signs it off.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A hospital's oxygen outlets and nitrous oxide outlets look similar to a new worker. Explain the two design features that prevent the wrong gas from being connected.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Each gas has its own labeling along the whole pipeline — gas name and flow direction — and its own labeled outlets. Step 2: The outlets are gas-specific by design: the fittings are physically different for each gas, so a connector for one gas cannot be attached to the outlet of another. Step 3: Together, labeling and gas-specific fittings make a cross-connection a deliberate act rather than an accident. Step 4: The verification sequence tests for cross-connections before the system is put into service, as the final check.</p>"
    }
  ],
  quiz: [
    {
      q: "Medical gas and vacuum systems in health care facilities are governed by:",
      choices: ["The Uniform Plumbing Code only", "NFPA 99, the Health Care Facilities Code", "The residential building code", "No code — the installer decides"],
      answer: 1,
      explanation: "Correct: (b). NFPA 99 governs medical gas systems; the plumbing code points to it for this piping. (a) The UPC does not govern medical gas — and Michigan uses the IPC, not the UPC. (c) Residential rules do not cover hospital gas systems. (d) Life-safety piping is never left to the installer's discretion."
    },
    {
      q: "To install medical gas systems, a plumber must hold:",
      choices: ["No credential — any licensed plumber may do it", "The ASSE 6010 Medical Gas Systems Installer credential", "The ASSE 5110 backflow credential", "An OSHA 10 card only"],
      answer: 1,
      explanation: "Correct: (b). ASSE 6010 is the installer credential for medical gas systems. (a) is wrong — ordinary licensure does not cover medical gas installation. (c) ASSE 5110 covers backflow testing, not medical gas. (d) OSHA 10 is safety training, not a medical gas qualification."
    },
    {
      q: "ASSE 6010 requires a minimum of how many years of documented practical experience?",
      choices: ["1 year", "2 years", "4 years", "10 years"],
      answer: 2,
      explanation: "Correct: (c). The requirement is a minimum of four years of documented practical experience installing plumbing or mechanical piping systems. (a) and (b) are too short. (d) is more than required."
    },
    {
      q: "Medical gas copper piping is joined by brazing rather than soldering because:",
      choices: ["Brazing is faster", "NFPA 99 requires brazing, which gives a stronger, cleaner joint", "Solder is too expensive", "Brazing needs no training"],
      answer: 1,
      explanation: "Correct: (b). NFPA 99 requires brazing for medical gas piping; brazed joints are stronger and, with a nitrogen purge, cleaner inside. (a) Brazing is not faster — it takes more preparation and skill. (c) Cost is not the reason. (d) Brazing requires more training, including the ASSE 6010 brazing exam."
    },
    {
      q: "The nitrogen purge during medical gas brazing exists to:",
      choices: ["Cool the joint faster", "Displace oxygen inside the pipe so hot copper does not oxidize and scale", "Pressurize the system for testing", "Clean the outside of the pipe"],
      answer: 1,
      explanation: "Correct: (b). Oil-free nitrogen displaces oxygen inside the pipe, preventing oxide scale from forming on the hot copper. (a) Cooling is not the purge's purpose — the purge runs until the joint cools, but it is there to prevent oxidation. (c) Pressure testing is a separate step. (d) The purge acts inside the pipe, not outside."
    },
    {
      q: "The ASSE 6010 brazing exam requires filler metal penetration of:",
      choices: ["50% or greater", "60% or greater", "80% or greater", "100% exactly"],
      answer: 2,
      explanation: "Correct: (c). The standard is 80% or greater penetration, measured by cutting the joint open. (a) and (b) are below the standard. (d) 100% is not required — 80% or greater passes."
    },
    {
      q: "A finished medical gas system is verified by:",
      choices: ["The installer, by signing their own work", "A separate ASSE 6030 credentialed verifier", "The hospital's maintenance staff", "No one — the installer tests it"],
      answer: 1,
      explanation: "Correct: (b). An independent ASSE 6030 verifier runs the testing sequence — pressure, purity, and cross-connection tests. (a) Self-verification defeats the purpose of independent checking. (c) Maintenance staff do not hold the verifier credential. (d) Testing by the installer alone is not verification."
    },
    {
      q: "The filler metal used for copper-to-copper medical gas joints is the:",
      choices: ["Lead solder", "BCuP series (phosphorus-copper)", "Tin solder", "Aluminum wire"],
      answer: 1,
      explanation: "Correct: (b). BCuP filler metals are required for copper-to-copper medical gas joints. (a) Lead solder is not used in medical gas or in potable water work. (c) Tin solder is a soldering filler, and soldering is not permitted for medical gas piping. (d) Aluminum wire is not a brazing filler for copper medical gas joints."
    }
  ],
  studyGuide: `
<h3>Module 8 — Medical Gas & Vacuum Systems: NFPA 99 & ASSE 6010: Quick Reference</h3>
<p><strong>Code:</strong> NFPA 99, Health Care Facilities Code. The plumbing code points to it for medical gas.</p>
<p><strong>Gases:</strong> Oxygen, nitrous oxide, medical air, carbon dioxide — plus medical vacuum and WAGD. One gas, one pipeline, one labeling scheme, gas-specific outlets.</p>
<p><strong>ASSE 6010:</strong> 4 years documented experience + 32-hour approved course + 100-question written exam + brazing exam at 80% penetration. Valid 3 years. Pass mark: ASSE states 70%; NITC requires 77% — aim for 77%+.</p>
<p><strong>Brazing:</strong> BCuP filler, clean joints, oil-free nitrogen purge before/during/after, heat the pipe so filler flows in, judged on penetration (80%+), not appearance. Never solder medical gas piping.</p>
<p><strong>Verification:</strong> A separate ASSE 6030 verifier tests and certifies the system before patient use.</p>
<p><strong>Warning:</strong> This module is an introduction only. Real medical gas brazing requires the ASSE 6010 credential and supervised practice. Brazing carries burn and fire risks.</p>
<p><strong>Self-check:</strong> A coupon shows filler in 17 of 20 sections. Compute the penetration and state pass or fail. Then list the four ASSE 6010 requirements from memory.</p>
`
};
