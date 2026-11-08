// Plumbing 202 - Module 4: Backflow Repairer Basics (ASSE 5110 → repairer)
module.exports = {
  number: 4,
  slug: "backflow-repairer-basics",
  title: "Backflow Repairer Basics (ASSE 5110 → repairer)",
  estTime: "3–4 hours",
  objectives: [
    "Explain the difference between a backflow tester and a backflow repairer.",
    "Name the common causes of a failed check valve and a failed relief valve.",
    "Describe the repair sequence: diagnose, shut down, disassemble, replace, reassemble, retest.",
    "Explain which parts are replaceable and which failures mean the assembly is replaced, not repaired.",
    "State the record-keeping and reporting duties that follow a repair."
  ],
  sections: [
    {
      heading: "Tester vs. Repairer: Two Roles, One Credential Path",
      html: `
<p>Testing a backflow assembly and repairing one are two different jobs, and the ASSE credential path treats them as two steps. The <strong>ASSE 5110 tester</strong> is qualified to test assemblies, record the results, and report them. The <strong>backflow repairer</strong> is the person qualified to open an assembly, diagnose what failed, replace parts, and put it back into service — and the repairer's qualification builds on the tester's: you cannot repair what you cannot test, because the retest after a repair is what proves the repair worked.</p>
<p>In practice, many jurisdictions let a tester perform minor repairs, and many repairers are also testers. But the distinction matters for liability and for the work itself: a tester who finds a failure and attempts a repair without the training, the parts, or the authority has made the problem worse, not better. The correct sequence is to diagnose the failure, decide whether the repair is within your qualification and your parts supply, and either repair it or refer it to a qualified repairer.</p>
<p>The most important repairer skill is not turning a wrench — it is <strong>diagnosis</strong>. A failed test tells you which part failed; the repairer's job is to find out why, because replacing a part without fixing the cause means the new part will fail the same way.</p>
<div class="callout"><strong>Key idea:</strong> A tester tests and reports; a repairer diagnoses, repairs, and proves the repair with a retest. Repair builds on testing — you cannot repair what you cannot test.</div>
<div class="callout"><strong>ASSE 5110 — read this first:</strong> Real backflow testing and repair require the ASSE 5110 credential and supervised practice. The procedures in this module are teaching material for the credential — they are not permission to open and repair assemblies on your own. A repair by an uncredentialed person is not valid, and a wrong repair can leave a failed assembly in service.</div>`
    },
    {
      heading: "Why Check Valves Fail",
      html: `
<p>Check valves fail for a small number of reasons, and a repairer learns to recognize each one by what the test showed and what the parts look like. <strong>Debris</strong> is the most common: sand, scale, rust, or a piece of solder lodged between the disc and the seat, holding the check open. The fix is cleaning, not parts — but the cause must be found, which usually means a strainer is missing or failing upstream. <strong>Wear</strong> is the second: the rubber disc or the seat erodes over years of opening and closing, until the check no longer seals. The fix is a rebuild kit with a new disc, spring, and seals.</p>
<p><strong>Corrosion and scale</strong> are the third: mineral deposits or corrosion freeze a check in place, so it cannot close at all — or cannot open fully. The fix is cleaning or replacement, and the cause is usually water chemistry or a system that has sat unused. <strong>Spring failure</strong> is the fourth: the spring that holds the check closed weakens or breaks, and the check drifts open. The fix is a new spring from the rebuild kit.</p>
<p>Every one of these failures has a signature in the test: debris and wear show as a low or falling differential; a frozen check shows as zero differential or as no flow at all. The repairer reads the test, opens the assembly, and confirms the diagnosis with their eyes before ordering a part.</p>
<div class="callout"><strong>Key idea:</strong> Check valves fail from debris, wear, corrosion/scale, or a broken spring. The test tells you which check failed; opening the assembly tells you why.</div>`
    },
    {
      heading: "Why Relief Valves Fail — and When to Replace the Assembly",
      html: `
<p>The RPZ's relief valve fails in two ways. It can <strong>fail to open</strong> — usually because its seat is fouled with scale or debris, or its diaphragm has hardened — which is the dangerous failure, because the relief valve is the assembly's last line of defense. Or it can <strong>fail to close</strong> — usually a worn seat or a damaged diaphragm — which shows as a relief valve that pours constantly. The fix for both is a relief valve rebuild kit: new diaphragm, seat, and seals, fitted to the manufacturer's instructions.</p>
<p>Some failures mean the assembly is replaced, not repaired. A cracked or corroded body, a seat that has been machined past its limit, or an assembly so old that rebuild kits are no longer made — these are replacement jobs. A repairer who rebuilds an assembly whose body is compromised has not repaired it; they have hidden a failure inside a new kit. The manufacturer's service literature and the assembly's age decide the question, not the repairer's optimism.</p>
<p>Freeze damage deserves a special note: an RPZ or DCVA that has frozen will often look fine on the outside and fail on the inside, with cracked internal parts and a body that is no longer sound. Any assembly that has frozen is inspected as a suspect, not assumed sound.</p>
<div class="callout"><strong>Key idea:</strong> A relief valve fails to open (fouled seat, hardened diaphragm) or fails to close (worn seat). A cracked body, an unrepairable seat, or freeze damage means replacement, not repair.</div>`
    },
    {
      heading: "The Repair Sequence and the Paperwork",
      html: `
<p>The repair sequence is the same for every assembly. <strong>Step 1 — diagnose:</strong> read the failed test, identify which part failed, and confirm the cause by inspection. <strong>Step 2 — shut down:</strong> close the shutoff valves, drain the assembly, and make sure the system it protects is not left unprotected longer than necessary — if the building needs water while the assembly is out, the authority's procedure for a temporary supply or a shutdown notice is followed. <strong>Step 3 — disassemble:</strong> open the assembly in the manufacturer's order, laying the parts out in sequence so reassembly is the reverse. <strong>Step 4 — replace:</strong> fit the rebuild kit or the new part, using the manufacturer's parts — never a generic substitute, because the assembly's listing depends on its own parts. <strong>Step 5 — reassemble and retest:</strong> put the assembly back together, restore pressure, and test it exactly as in Module 3. The retest is the proof: no retest, no repair.</p>
<p>The paperwork follows the repair. The test report records the original failure, the repair made, the parts used, and the retest results with the actual numbers. The water authority receives the report on its schedule, and the building owner keeps a copy. A repair with no record is a repair that cannot be proven — and in backflow work, proof is the product.</p>
<div class="callout"><strong>Key idea:</strong> Diagnose, shut down, disassemble, replace with the manufacturer's parts, reassemble, and retest. The retest is the proof, and the report is the record.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Testing and repair are two roles; repair builds on testing, and the retest proves the repair.</li>
<li>Check valves fail from debris, wear, corrosion/scale, or a broken spring — the test tells you which, the inspection tells you why.</li>
<li>Relief valves fail to open (fouled seat, hardened diaphragm) or fail to close (worn seat) — both are rebuilt with the manufacturer's kit.</li>
<li>A cracked body, an unrepairable seat, or freeze damage means the assembly is replaced, not repaired.</li>
<li>Repair sequence: diagnose, shut down, disassemble, replace with the manufacturer's parts, reassemble, retest.</li>
<li>Record the failure, the repair, the parts, and the retest numbers; report to the water authority on its schedule.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Replacing a part without finding the cause. A check fouled by debris will foul again if the missing upstream strainer is not fitted — the repair must fix the cause, not just the symptom.</div>
<div class="callout"><strong>Common mistake:</strong> Skipping the retest after a repair. A repair without a retest is unproven, and an unproven assembly is not back in service — it is a guess.</div>
<p><strong>Ready-to-Work link:</strong> The ASSE 5110 practical exam tests all four assemblies; the repairer's work is proven the same way the tester's is — by the numbers on the gauge.</p>`
    }
  ],
  keyTerms: [
    { term: "Backflow tester", def: "A person credentialed (ASSE 5110) to test backflow assemblies, record the results, and report them." },
    { term: "Backflow repairer", def: "A person qualified to open a failed assembly, diagnose the cause, replace parts, and prove the repair with a retest." },
    { term: "Rebuild kit", def: "The manufacturer's kit of replacement discs, springs, seats, diaphragms, and seals for one assembly." },
    { term: "Disc", def: "The rubber-faced moving part of a check valve that seals against the seat to stop reverse flow." },
    { term: "Seat", def: "The fixed surface a check valve's disc seals against; wear or debris on the seat causes a check to leak." },
    { term: "Diaphragm", def: "The flexible membrane in a relief valve that senses the zone pressure and opens the valve; it hardens with age." },
    { term: "Debris", def: "Sand, scale, rust, or solder lodged in an assembly — the most common cause of a failed check valve." },
    { term: "Freeze damage", def: "Cracking of an assembly's body or internal parts by freezing water; any frozen assembly is a suspect, not assumed sound." },
    { term: "Retest", def: "Testing an assembly again after repair, to prove it now meets its pass values." },
    { term: "Test report", def: "The written record of a test or a repair: the assembly, the numbers, the failure, the parts used, and the retest result." },
    { term: "Shutoff valve", def: "The valves on either side of an assembly that isolate it for testing or repair." },
    { term: "Manufacturer's parts", def: "Parts made by the assembly's manufacturer; the assembly's listing depends on them, so generic substitutes are not used." }
  ],
  video: {
    title: "How to fix a leaking backflow preventer - repair Zurn Wilkins 950 950XL 975 975XL",
    embedUrl: "https://www.youtube.com/embed/Dn95xCQ89VE",
    note: "A hands-on rebuild of a Zurn Wilkins reduced pressure assembly — disassembly, inspection, and the relief valve and check parts that fail most often. Watch the order the parts come out in, because reassembly is the reverse, and note which parts come from the rebuild kit.",
    more: [
      { title: "Repairing A Wilkins 720-A Backflow", url: "https://www.youtube.com/watch?v=qOMV3R3FZwQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A DCVA fails its test: Check 1 holds 1.2 psid, Check 2 holds 0.4 psid. The tester opens the assembly and finds sand lodged between Check 2's disc and seat. What is the diagnosis, the repair, and the cause to fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Diagnosis — Check 2 failed from debris (sand holding the disc off its seat), which matches the low differential. Step 2: Repair — clean the disc and seat; if the disc is scored, replace it from the rebuild kit. Step 3: Cause — sand in the system means a strainer is missing or failing upstream; fit or repair the strainer, or the new disc will foul the same way. Step 4: Reassemble and retest; the retest must show both checks at 1 psid or higher.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An RPZ's relief valve pours constantly. The test shows Check 1 at 6 psid and Check 2 at 1.5 psid. What is the likely fault, and what is the repair?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Both checks pass, so the fault is in the relief valve itself — it fails to close, usually a worn seat or a damaged diaphragm. Step 2: Repair — shut down, disassemble the relief valve, and fit the relief valve rebuild kit (new diaphragm, seat, and seals). Step 3: Reassemble and retest the whole assembly: Check 1 ≥ 5 psid, relief opens ≥ 2 psid, Check 2 ≥ 1 psid.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> An RPZ is ten years old and its relief valve fails to open during the test. The diaphragm is hardened and the seat is scaled. The body is sound and the rebuild kit is available. Repair or replace? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Repair — the body is sound and the kit is available, so the failure is in replaceable parts. Step 2: Fit the relief valve rebuild kit (new diaphragm, seat, and seals) and clean the scale. Step 3: Reassemble and retest; the relief valve must open at 2 psid or higher. Step 4: Replacement would be the answer only if the body were cracked, the seat unrepairable, or the kit unavailable.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A tester finds a failed assembly and, without repair training or parts, attempts to rebuild it with a generic O-ring from a hardware store. What is wrong?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The tester is working outside their qualification — repair is a separate role that builds on testing. Step 2: A generic part is not the manufacturer's part, and the assembly's listing depends on its own parts; a generic seal may not hold the pass values. Step 3: The correct action is to mark the assembly failed, record the numbers, and refer it to a qualified repairer with the right parts.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An assembly froze over the winter. It looks fine on the outside and passes a casual visual check. What should the repairer do, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Treat the assembly as a suspect, not as sound — freeze damage cracks internal parts and the body while the outside looks fine. Step 2: Test it, and open it for inspection if the test is doubtful or if the freeze was severe. Step 3: If the body or internal parts are cracked, replace the assembly; a rebuild cannot fix a compromised body.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> After a repair, the assembly tests: Check 1 = 6 psid, relief opens at 2.5 psid, Check 2 = 1.5 psid. What must the repairer do next, and what must the report contain?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The retest passes on all three parts (6 ≥ 5, 2.5 ≥ 2, 1.5 ≥ 1), so the repair is proven and the assembly can return to service. Step 2: The report must contain the original failure, the repair made, the parts used, and the retest numbers. Step 3: The report goes to the water authority on its schedule, and the building owner keeps a copy.</p>"
    }
  ],
  quiz: [
    {
      q: "The repairer's qualification builds on the tester's because:",
      choices: ["Repairers earn more money", "You cannot repair what you cannot test — the retest proves the repair", "Testers do the paperwork", "Repairers work alone"],
      answer: 1,
      explanation: "Correct: (b). The retest after a repair is what proves the repair worked, and only a tester can run it. (a) Pay is not the reason. (c) Both roles keep records. (d) Working alone is not a qualification."
    },
    {
      q: "The most common cause of a failed check valve is:",
      choices: ["A broken spring", "Debris lodged between the disc and the seat", "A cracked body", "A frozen pipe"],
      answer: 1,
      explanation: "Correct: (b). Debris — sand, scale, rust, solder — is the most common cause. (a) Spring failure happens but is less common. (c) A cracked body is a replacement fault, not a check failure. (d) Freezing damages the assembly as a whole."
    },
    {
      q: "A relief valve that pours constantly has most likely:",
      choices: ["A failed first check", "A worn seat or damaged diaphragm, so it fails to close", "A frozen body", "A clogged test cock"],
      answer: 1,
      explanation: "Correct: (b). Constant pouring means the relief valve cannot close — usually a worn seat or damaged diaphragm. (a) A failed first check makes the relief valve open, but the fault is then in the check, not the relief valve. (c) Freezing cracks the assembly. (d) A clogged test cock affects testing, not the relief valve."
    },
    {
      q: "An assembly should be replaced rather than repaired when:",
      choices: ["Its diaphragm is hardened", "Its body is cracked or its seat is unrepairable", "Its disc is worn", "Its spring is broken"],
      answer: 1,
      explanation: "Correct: (b). A cracked body or unrepairable seat cannot be fixed by a rebuild kit. (a) A hardened diaphragm is replaced by the kit. (c) A worn disc is replaced by the kit. (d) A broken spring is replaced by the kit."
    },
    {
      q: "The repair sequence is:",
      choices: ["Replace, diagnose, retest", "Diagnose, shut down, disassemble, replace, reassemble, retest", "Shut down, replace, diagnose", "Disassemble, diagnose, retest"],
      answer: 1,
      explanation: "Correct: (b). Diagnose first, then shut down, disassemble, replace, reassemble, and retest. (a) Replacing before diagnosing fixes the wrong thing. (c) Diagnosing after replacing is backwards. (d) Disassembly before diagnosis loses the evidence."
    },
    {
      q: "Why must repairs use the manufacturer's parts?",
      choices: ["They are cheaper", "The assembly's listing depends on its own parts", "Generic parts are illegal everywhere", "The manufacturer requires it for the warranty only"],
      answer: 1,
      explanation: "Correct: (b). The assembly is listed with its own parts; a generic substitute may not hold the pass values. (a) Manufacturer's parts are usually more expensive. (c) The issue is the listing and performance, not a universal ban. (d) The warranty is secondary to the listing."
    },
    {
      q: "A repair without a retest is:",
      choices: ["Acceptable if the parts are new", "Unproven — the assembly is not back in service until the retest passes", "Acceptable for a DCVA only", "Required by the manufacturer"],
      answer: 1,
      explanation: "Correct: (b). The retest is the proof; without it the repair is a guess. (a) New parts do not prove the assembly works. (c) The rule applies to every assembly. (d) The retest is required by the testing standard, not just the manufacturer."
    },
    {
      q: "After a repair, the report must contain:",
      choices: ["Only the retest numbers", "The original failure, the repair made, the parts used, and the retest numbers", "Only the parts used", "Only the owner's name"],
      answer: 1,
      explanation: "Correct: (b). The report records the failure, the repair, the parts, and the retest numbers. (a), (c), and (d) each omit part of the record."
    }
  ],
  studyGuide: `
<h3>Module 4 — Backflow Repairer Basics: Quick Reference</h3>
<p><strong>Roles:</strong> Tester tests and reports · Repairer diagnoses, repairs, and proves it with a retest. Repair builds on testing.</p>
<p><strong>Check valve failures:</strong> Debris (most common) · Wear · Corrosion/scale · Broken spring.</p>
<p><strong>Relief valve failures:</strong> Fails to open (fouled seat, hardened diaphragm — dangerous) · Fails to close (worn seat — pours constantly).</p>
<p><strong>Replace, don't repair:</strong> Cracked body · Unrepairable seat · Freeze damage · No kit available.</p>
<p><strong>Sequence:</strong> Diagnose → Shut down → Disassemble → Replace with manufacturer's parts → Reassemble → Retest.</p>
<p><strong>Paperwork:</strong> Original failure, repair made, parts used, retest numbers — to the water authority and the owner.</p>
<p><strong>Self-check:</strong> Given a failed test, can you say which part failed, why it failed, and whether it is a repair or a replacement — before you touch a wrench?</p>
`
};
