// Plumbing 202 - Module 3: Testing Backflow Assemblies: Procedures Step by Step (ASSE 5110)
module.exports = {
  number: 3,
  slug: "testing-backflow-assemblies-procedures",
  title: "Testing Backflow Assemblies: Procedures Step by Step (ASSE 5110)",
  estTime: "4–5 hours",
  objectives: [
    "Name the equipment in a 5-valve differential pressure test kit and explain what each part does.",
    "State the pass values for an RPZ, a DCVA, and a PVB.",
    "Walk the RPZ test step by step: Check 1, relief valve, and Check 2.",
    "Walk the DCVA and PVB tests step by step.",
    "Explain what a failed test means and what happens next — repair, retest, and report."
  ],
  sections: [
    {
      heading: "The Test Kit and What It Measures",
      html: `
<p>A backflow assembly is tested with a <strong>differential pressure gauge test kit</strong> — a 5-valve kit with a gauge, a high-pressure hose, a low-pressure hose, and a vent hose. The gauge measures the difference in pressure between two points, in <strong>psid</strong> (pounds per square inch differential). That difference is what a check valve produces: a working check holds a pressure drop across itself, and a failing check does not. The test is therefore a measurement, not an opinion — and the pass values are numbers, not judgments.</p>
<p>The kit's five valves control the flow to the gauge. Learning to operate them — opening and closing them in the right order, bleeding air from the hoses, and keeping the gauge from being over-pressured — is a hands-on skill that takes practice, and it is the skill the ASSE 5110 practical exam measures. Reading about the valves is not a substitute for handling them; the course lab walks the procedures, and the ASSE-approved 40-hour course is where the handling is learned under supervision.</p>
<p>Before any test, the tester inspects the assembly: shutoff valves, test cocks, the relief valve's discharge, and the installation itself. A test on an assembly that is installed wrong — a PVB below its outlet, an RPZ with its relief valve piped to a floor drain that cannot take the flow — is a test of the wrong thing. The inspection comes first.</p>
<div class="callout"><strong>Key idea:</strong> The test kit measures pressure differences in psid. A working check valve holds a pressure drop across itself; a failing one does not. The pass values are numbers.</div>
<div class="callout"><strong>ASSE 5110 — read this first:</strong> Real backflow testing requires the ASSE 5110 credential and supervised practice. The procedures in this module are teaching material for the credential — they are not permission to test assemblies on your own. A test performed by an uncredentialed person is not valid, and a wrong test can leave a failed assembly in service.</div>`
    },
    {
      heading: "Pass Values You Must Memorize",
      html: `
<p>The pass values are the numbers the ASSE 5110 practical exam is graded on, and they are the numbers a tester must know cold before touching a gauge. For a <strong>reduced pressure principle assembly (RPZ)</strong>: Check Valve 1 must hold at least <strong>5 psid</strong>; the relief valve must open at <strong>2 psid or higher</strong>; and Check Valve 2 must hold at least <strong>1 psid</strong>. For a <strong>double check valve assembly (DCVA)</strong>: each check valve must hold at least <strong>1 psid</strong>. For a <strong>pressure vacuum breaker (PVB)</strong>: the air inlet must open at <strong>1 psid or higher</strong>, and the check valve must hold at least <strong>1 psid</strong>.</p>
<p>Why these numbers? The 5 psid on the RPZ's first check is the margin that keeps the zone pressure well below the supply pressure, so the relief valve stays closed in normal operation. The 2 psid relief opening point is the trip wire: if the zone pressure rises to within 2 psi of supply, the relief valve opens and dumps the water. The 1 psid minimums on the second checks and on the DCVA and PVB checks are the smallest drop that proves a check is actually seating and holding — a check that holds zero is a check that is open.</p>
<p>Memorize these as a table and say them out loud until they are automatic: RPZ — 5, 2, 1. DCVA — 1 and 1. PVB — air inlet 1, check 1. The practical exam gives no reference card; the numbers must be in your head.</p>
<div class="callout"><strong>Key idea:</strong> RPZ: Check 1 ≥ 5 psid, relief opens ≥ 2 psid, Check 2 ≥ 1 psid. DCVA: each check ≥ 1 psid. PVB: air inlet ≥ 1 psid, check ≥ 1 psid.</div>`
    },
    {
      heading: "The RPZ Test, Step by Step",
      html: `
<p>The RPZ test has three parts, and the order matters. <strong>Step 1 — Check Valve 1:</strong> With the assembly pressurized, connect the high hose to test cock 2 and the low hose to test cock 3, bleed the air, and read the differential across Check 1. It must be 5 psid or higher. <strong>Step 2 — the relief valve:</strong> Slowly lower the supply pressure (or raise the zone pressure) until the relief valve opens, and note the differential at which it opens. It must open at 2 psid or higher. <strong>Step 3 — Check Valve 2:</strong> Connect the gauge across Check 2 (test cock 3 to test cock 4) and read the differential. It must be 1 psid or higher.</p>
<p>Two details decide whether the test is valid. First, the hoses must be bled of air — air in a hose makes the gauge read wrong, and a wrong reading can pass a failed check. Second, the relief valve's discharge must be observed: if it is pouring during the test, the first check has failed and the test is telling you so. A tester who ignores a pouring relief valve and writes down a passing number has not tested the assembly; they have filled in a form.</p>
<p>If any part fails, the whole assembly fails. A Check 1 at 4 psid is a failure even if the relief valve and Check 2 pass, because the margin that keeps the relief valve closed is gone. The tester records the actual numbers, marks the assembly failed, and the repair process begins.</p>
<div class="callout"><strong>Key idea:</strong> RPZ test order: Check 1 (≥ 5 psid), then relief valve (opens ≥ 2 psid), then Check 2 (≥ 1 psid). Any part failing fails the assembly.</div>`
    },
    {
      heading: "The DCVA and PVB Tests, Step by Step",
      html: `
<p>The <strong>DCVA test</strong> measures each check valve separately. Connect the gauge across Check 1 (test cock 2 to test cock 3) and read the differential: it must be 1 psid or higher. Then connect across Check 2 (test cock 3 to test cock 4) and read again: 1 psid or higher. Because there is no relief valve, there is no third part — but there is also no backup. Both checks must hold, and the tester must be certain the reading is real: bleed the hoses, watch for a falling needle (which means a check is leaking), and repeat a doubtful reading rather than trusting it.</p>
<p>The <strong>PVB test</strong> has two parts. First, the <strong>air inlet</strong>: with the assembly pressurized and the outlet shut off, slowly lower the supply pressure and note the differential at which the air inlet opens. It must open at 1 psid or higher — that is, it must open before the pressure difference falls to zero, so air enters and breaks the siphon while there is still a margin. Second, the <strong>check valve</strong>: measure the differential across the check; it must hold 1 psid or higher. A PVB whose air inlet opens late (below 1 psid) is a failed assembly, even if its check holds.</p>
<p>The SVBA is tested the same way as the PVB — air inlet, then check — with the same pass values. The ASSE 5110 practical exam tests all four assemblies, so a tester must be able to run all four procedures without a reference card, in the right order, with the right pass values.</p>
<div class="callout"><strong>Key idea:</strong> DCVA: each check ≥ 1 psid. PVB and SVBA: air inlet opens ≥ 1 psid, then check ≥ 1 psid. Bleed the hoses and distrust a doubtful reading.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>The 5-valve differential pressure kit measures pressure differences in psid; a working check holds a drop across itself.</li>
<li>RPZ pass values: Check 1 ≥ 5 psid, relief opens ≥ 2 psid, Check 2 ≥ 1 psid.</li>
<li>DCVA pass values: each check ≥ 1 psid.</li>
<li>PVB/SVBA pass values: air inlet opens ≥ 1 psid, check ≥ 1 psid.</li>
<li>RPZ test order: Check 1, relief valve, Check 2. DCVA: Check 1, Check 2. PVB: air inlet, then check.</li>
<li>Any part failing fails the assembly. The tester records the actual numbers and marks the result honestly.</li>
<li>A failed assembly is repaired and retested; the water authority is notified on its schedule. A test by an uncredentialed person is not valid.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Testing with air in the hoses. Air makes the gauge read wrong, and a wrong reading can pass a failed check. Bleed the hoses every time.</div>
<div class="callout"><strong>Common mistake:</strong> Memorizing the procedures but not the pass values. The practical exam grades the numbers; a perfect procedure with a wrong pass value is a failed test.</div>
<p><strong>Ready-to-Work link:</strong> The course lab walks the RPZ, DCVA, PVB, and SVBA tests as valve-and-gauge step sequences — the same sequences the ASSE 5110 practical uses. The ASSE 5110 written exam is 100 questions, 70% to pass, 2 hours, closed book.</p>`
    }
  ],
  keyTerms: [
    { term: "Differential pressure gauge", def: "The test instrument in a 5-valve kit that measures the pressure difference between two points, in psid." },
    { term: "psid", def: "Pounds per square inch differential — the unit of the pressure difference across a check valve or at a relief valve's opening point." },
    { term: "5-valve test kit", def: "The backflow test kit: a differential gauge with high, low, and vent hoses and five control valves." },
    { term: "Test cock", def: "A small valve on an assembly for connecting the test kit's hoses; numbered 1 through 4 on an RPZ." },
    { term: "Check Valve 1", def: "The first (upstream) check in an RPZ or DCVA; on an RPZ it must hold at least 5 psid." },
    { term: "Check Valve 2", def: "The second (downstream) check in an RPZ or DCVA; it must hold at least 1 psid." },
    { term: "Relief valve opening point", def: "The differential at which the RPZ's relief valve opens; it must be 2 psid or higher." },
    { term: "Air inlet opening point", def: "The differential at which a PVB or SVBA's air inlet opens; it must be 1 psid or higher." },
    { term: "Bleeding the hoses", def: "Removing air from the test kit's hoses before reading the gauge; air makes the reading wrong." },
    { term: "ASSE 5110", def: "The ASSE credential for backflow prevention assembly testers: 5 years experience, a 40-hour course, a 100-question written exam (70% to pass, 2 hours), and a practical exam; valid 3 years." },
    { term: "Failed assembly", def: "An assembly that does not meet its pass values; it must be repaired and retested, not left in service." },
    { term: "Retest", def: "Testing an assembly again after repair, to prove it now meets its pass values." },
    { term: "Water authority", def: "The utility or agency that requires backflow testing and receives the test reports." }
  ],
  video: {
    title: "Backflow Testing Demonstration | RP and DCA with a 5-Valve Differential Pressure Gauge",
    embedUrl: "https://www.youtube.com/embed/ecwPDZtUs68",
    note: "A real RPZ and double-check test performed live with a 5-valve differential pressure gauge — watch the hose connections, the bleeding, and the gauge readings, and note the pass values the tester is looking for. This is the procedure the ASSE 5110 practical exam uses.",
    more: [
      { title: "Water Distribution | Cross Connection Control", url: "https://www.youtube.com/watch?v=Bo9M_1O5d1s" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An RPZ test gives: Check 1 = 6 psid, relief valve opens at 2.5 psid, Check 2 = 1.5 psid. Does the assembly pass? Explain each part.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check 1 is 6 psid — at least 5, so it passes. Step 2: The relief valve opens at 2.5 psid — at least 2, so it passes. Step 3: Check 2 is 1.5 psid — at least 1, so it passes. Step 4: All three parts pass, so the assembly passes. Record the actual numbers and the pass verdict.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An RPZ test gives: Check 1 = 4 psid, relief valve opens at 3 psid, Check 2 = 2 psid. Does the assembly pass? What happens next?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check 1 is 4 psid — below the 5 psid minimum, so it fails. Step 2: The relief valve and Check 2 pass, but any part failing fails the assembly. Step 3: The assembly is marked failed, the actual numbers are recorded, and it is repaired (usually a Check 1 rebuild) and retested. It is not left in service on a passing verdict it did not earn.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A DCVA test gives: Check 1 = 1.2 psid, Check 2 = 0.5 psid. Does the assembly pass? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check 1 is 1.2 psid — at least 1, so it passes. Step 2: Check 2 is 0.5 psid — below the 1 psid minimum, so it fails. Step 3: The assembly fails as a whole. The DCVA has no relief valve, so a failed check is a failed assembly; it is repaired and retested.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A PVB test gives: the air inlet opens at 0.5 psid, and the check holds 2 psid. Does the assembly pass? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The check holds 2 psid — at least 1, so it passes. Step 2: The air inlet opens at 0.5 psid — below the 1 psid minimum, so it fails. Step 3: An air inlet that opens late does not break the siphon in time, so the assembly fails as a whole and is repaired and retested.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> During an RPZ test, the relief valve pours water continuously. The gauge readings look fine. What should the tester do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A continuously pouring relief valve means the first check has failed — the relief valve is doing its job by dumping the water. Step 2: The tester must not write down a passing result from gauge readings that contradict what the relief valve is showing. Step 3: The assembly is marked failed, the pouring is recorded, and it is repaired and retested.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A tester skips bleeding the hoses and gets a reading of 6 psid on an RPZ Check 1. Why should the reading be distrusted, and what is the correct action?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Air in a hose makes the gauge read wrong — the reading cannot be trusted, even if it looks like a pass. Step 2: The correct action is to bleed the hoses and take the reading again. Step 3: A doubtful reading is repeated, never trusted; a wrong pass leaves a failed assembly in service.</p>"
    }
  ],
  quiz: [
    {
      q: "An RPZ Check 1 must hold at least:",
      choices: ["1 psid", "2 psid", "5 psid", "10 psid"],
      answer: 2,
      explanation: "Correct: (c). Check 1 must hold 5 psid or higher. (a) 1 psid is the Check 2 and DCVA minimum. (b) 2 psid is the relief valve opening point. (d) 10 psid is not a pass value."
    },
    {
      q: "An RPZ relief valve must open at:",
      choices: ["1 psid or higher", "2 psid or higher", "5 psid or higher", "0 psid"],
      answer: 1,
      explanation: "Correct: (b). The relief valve must open at 2 psid or higher. (a) 1 psid is the Check 2 minimum. (c) 5 psid is the Check 1 minimum. (d) 0 psid would mean it opens with no differential at all."
    },
    {
      q: "A DCVA check valve must hold at least:",
      choices: ["1 psid", "2 psid", "5 psid", "0.5 psid"],
      answer: 0,
      explanation: "Correct: (a). Each DCVA check must hold 1 psid or higher. (b) 2 psid is the relief opening point. (c) 5 psid is the RPZ Check 1 minimum. (d) 0.5 psid is below the minimum."
    },
    {
      q: "A PVB air inlet must open at:",
      choices: ["0.5 psid or higher", "1 psid or higher", "2 psid or higher", "5 psid or higher"],
      answer: 1,
      explanation: "Correct: (b). The air inlet must open at 1 psid or higher. (a) 0.5 psid is too late. (c) 2 psid is the relief opening point. (d) 5 psid is the RPZ Check 1 minimum."
    },
    {
      q: "The RPZ test order is:",
      choices: ["Check 2, relief valve, Check 1", "Check 1, relief valve, Check 2", "Relief valve, Check 1, Check 2", "Check 1, Check 2, relief valve"],
      answer: 1,
      explanation: "Correct: (b). Check 1 first, then the relief valve, then Check 2. (a) and (d) put the steps in the wrong order. (c) The relief valve is tested second, not first."
    },
    {
      q: "Why must the test kit's hoses be bled of air?",
      choices: ["Air makes the gauge read wrong", "Air damages the assembly", "Air causes water hammer", "Air voids the warranty"],
      answer: 0,
      explanation: "Correct: (a). Air in a hose makes the gauge reading unreliable. (b) Air in a hose does not damage the assembly. (c) Water hammer is a different phenomenon. (d) The warranty is not the issue — the reading is."
    },
    {
      q: "If one part of an RPZ test fails, the assembly:",
      choices: ["Passes if the other two parts pass", "Fails as a whole", "Passes if the relief valve passes", "Is retested immediately without repair"],
      answer: 1,
      explanation: "Correct: (b). Any part failing fails the assembly. (a) A passing majority does not override a failure. (c) The relief valve is one part of three. (d) A failed assembly is repaired first, then retested."
    },
    {
      q: "The ASSE 5110 written exam is:",
      choices: ["50 questions, 50% to pass", "100 questions, 70% to pass, 2 hours, closed book", "25 questions, 80% to pass", "200 questions, 60% to pass"],
      answer: 1,
      explanation: "Correct: (b). 100 questions, 70% to pass, 2-hour limit, closed book. (a), (c), and (d) are not the ASSE 5110 format."
    }
  ],
  studyGuide: `
<h3>Module 3 — Backflow Testing: Quick Reference</h3>
<p><strong>Kit:</strong> 5-valve differential pressure gauge kit, measuring in psid. Bleed the hoses every time — air makes the reading wrong.</p>
<p><strong>RPZ pass values:</strong> Check 1 ≥ 5 psid · Relief valve opens ≥ 2 psid · Check 2 ≥ 1 psid.</p>
<p><strong>DCVA pass values:</strong> Each check ≥ 1 psid.</p>
<p><strong>PVB/SVBA pass values:</strong> Air inlet opens ≥ 1 psid · Check ≥ 1 psid.</p>
<p><strong>Order:</strong> RPZ — Check 1, relief, Check 2 · DCVA — Check 1, Check 2 · PVB — air inlet, then check.</p>
<p><strong>Rule:</strong> Any part failing fails the assembly. Record the actual numbers; repair, then retest.</p>
<p><strong>ASSE 5110:</strong> 5 years experience + 40-hour course · 100 questions, 70% to pass, 2 hours, closed book · Practical on all four assemblies · Valid 3 years. Real testing requires the credential and supervised practice.</p>
<p><strong>Self-check:</strong> Recite the pass values for all four assemblies from memory. If you cannot, you are not ready for the practical.</p>
`
};
