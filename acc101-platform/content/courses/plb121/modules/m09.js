// Plumbing 121 - Module 9: Testing DWV: Water Test, Air Test & Smoke Test
module.exports = {
  number: 9,
  slug: "testing-dwv",
  title: "Testing DWV: Water Test, Air Test & Smoke Test",
  estTime: "3–4 hours",
  objectives: [
    "Explain why DWV piping must be tested before concealment and what a failed test means.",
    "Perform the water test: fill to a 10-foot head and hold for 15 minutes (IPC 312.2).",
    "Perform the air test: pressurize to 5 psi and hold for 15 minutes (IPC 312.3).",
    "Explain when and how a smoke test is used to find a hidden leak (IPC 312.8).",
    "Read a test result — pass or fail — and state the correct next step for each outcome."
  ],
  sections: [
    {
      heading: "Test Before the Walls Close — Always",
      html: `
<p>A DWV joint can look perfect and still leak. Solvent cement can skip a spot, a gasket can roll, a fitting can crack as it is tightened. The only way to know a system is tight is to test it — and the only time to test it is <strong>before concealment</strong>. IPC Section 312.1 requires drainage piping to be tested before it is covered by walls, floors, or earth, because a leak found after concealment costs a wall, a floor, or a yard to fix.</p>
<p>Testing is also the inspector's job, not just yours. The rough-in inspection happens with the system under test: the inspector watches the gauge or the water level and signs off only when the system holds. A plumber who closes walls before the test has not saved time — they have guaranteed rework, because the inspector will make them open the walls again.</p>
<p>The three DWV tests all answer the same question — <em>is the system tight?</em> — but they answer it with different tools. The <strong>water test</strong> is the classic method and the one most inspectors prefer for new work. The <strong>air test</strong> is faster and uses no water, but it has restrictions on plastic pipe in some jurisdictions. The <strong>smoke test</strong> is a diagnostic tool for finding a leak that the other tests have already proven exists. Choose the test the code and the inspector require, not the one that is most convenient.</p>
<div class="callout"><strong>Key idea:</strong> Test before concealment (IPC 312.1). A leak found under test costs a fitting; a leak found after the walls close costs a room.</div>`
    },
    {
      heading: "The Water Test (IPC 312.2): 10 Feet of Head, 15 Minutes",
      html: `
<p>The water test fills the drainage system with water and watches the level. The procedure: plug every opening in the section under test — fixture drains, the building drain outlet, and the vent terminal — using test plugs, test balls, or a test tee. Fill the system with water to the point of overflow at the highest opening, so the lowest joint in the test section is under at least a <strong>10-foot head of water</strong>. Then wait <strong>15 minutes</strong> and watch.</p>
<p>A 10-foot head of water exerts about <strong>4.3 psi</strong> at the lowest point (10 feet × 0.433 psi per foot). That is a gentle test — deliberately so, because DWV pipe is not pressure pipe and the test is meant to prove tightness, not to stress the system. If the water level holds for 15 minutes with no visible leakage at any joint, the section passes. If the level drops, or water appears at a joint, the section fails: find the leak, repair it, and test again from the beginning. A second test is a new test, not a continuation of the first.</p>
<p>Water testing has practical demands. The system must be filled from the highest point — usually through the vent on the roof or an upper fixture — and filling a tall stack takes time and a lot of water. In cold weather, a water-filled system can freeze if the test drags on. And a water test needs somewhere for the water to go when the test is done: drain it to a floor drain or outside, never into a finished space. Plan the fill and the drain before you start.</p>
<div class="callout"><strong>Key idea:</strong> Water test = fill to at least a 10-foot head, hold 15 minutes, no drop and no visible leak. 10 feet of water is about 4.3 psi — a gentle proof of tightness, not a pressure trial.</div>
<p><strong>Worked check:</strong> A two-story stack is 18 feet tall. Filling it to the top puts the lowest joint under 18 feet of head — more than the 10-foot minimum, which is fine. If the water level drops 2 inches in 15 minutes, the test <strong>fails</strong>: a 2-inch drop in a 3-inch stack is a real volume of water going somewhere it should not.</p>`
    },
    {
      heading: "The Air Test (IPC 312.3): 5 psi, 15 Minutes — and Know Your Local Rule",
      html: `
<p>The air test pressurizes the drainage system with air instead of water. The procedure: plug every opening, connect a compressor and a pressure gauge, and fill the system to <strong>5 psi</strong>. Shut off the air supply and watch the gauge for <strong>15 minutes</strong>. If the pressure holds at 5 psi, the system passes. Any drop means a leak.</p>
<p>Air testing is fast — no filling, no draining, no water damage if a joint lets go — which is why it is popular on rough-in work. But it carries two cautions you must respect. First, 5 psi is a low pressure, and a small leak shows as a slow gauge drop that is easy to miss if you do not watch the full 15 minutes. A gauge that falls from 5 to 4 psi has failed, even though the system "mostly held." Second, some jurisdictions restrict or prohibit air testing of plastic DWV piping, because a plastic pipe failure under air pressure can be violent — compressed air stores far more energy than water at the same pressure. <strong>Follow the local authority having jurisdiction (AHJ)</strong>: if your inspector requires a water test on plastic pipe, the air test is not an option on that job, however convenient it is.</p>
<p>Finding an air-test leak takes patience. With the system holding partial pressure, brush soapy water on each joint and watch for bubbles — the same technique used for gas piping. Work from the lowest joints upward, because air rises and a leak at the bottom shows at the top of nothing. Mark every leaking joint, repair them all, and retest from the beginning.</p>
<div class="callout"><strong>Key idea:</strong> Air test = 5 psi, hold 15 minutes, no drop. Any drop is a failure. And check the local rule first: some jurisdictions do not allow air testing of plastic DWV pipe.</div>`
    },
    {
      heading: "The Smoke Test (IPC 312.8): Finding the Leak You Cannot See",
      html: `
<p>The smoke test is not a first test — it is the test you use when the water or air test has already failed and you cannot find the leak. A smoke generator fills the drainage system with visible smoke, and the smoke escapes through the leak, marking its location. The procedure: plug every opening, fill the system with smoke until it appears at the vent terminal, then plug the terminal too. Pressurize the smoke to <strong>1 inch of water column</strong> (less than 0.04 psi) and hold for <strong>15 minutes</strong> without adding more smoke. If smoke appears anywhere it should not — at a joint, a fixture, a wall, or a roof penetration — that is the leak.</p>
<p>Smoke testing is gentle: 1 inch of water column is a whisper of pressure, far below the water and air tests. Its power is visibility. A cracked fitting inside a wall, a joint that was never cemented, a vent pipe that stops short of the roof — all of them announce themselves with a wisp of smoke. It is also the test that finds the leaks the other tests cannot explain: a system that fails the air test with no visible water, or a sewer smell with no visible leak, often gives up its secret to smoke.</p>
<p>Smoke testing has its own discipline. The smoke must be non-toxic and approved for the purpose. The building must be ventilated, and occupants warned, because smoke will find its way into rooms through any open trap or unsealed fixture. And a smoke test that finds nothing still means something: if the system holds smoke for 15 minutes, the leak is not in the piping you tested — look at the fixtures, the traps, and the connections you excluded.</p>
<div class="callout"><strong>Key idea:</strong> Smoke test = 1 inch of water column, 15 minutes, no added smoke. It does not prove tightness the way water and air tests do — it finds the leak the other tests already proved is there.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Test before concealment (IPC 312.1). The inspector watches the test at rough-in.</li>
<li>Water test (IPC 312.2): fill to at least a 10-foot head, hold 15 minutes, no drop and no visible leak. 10 feet of head ≈ 4.3 psi.</li>
<li>Air test (IPC 312.3): 5 psi, hold 15 minutes, no pressure drop. Any drop is a failure. Check the local rule on air-testing plastic pipe.</li>
<li>Smoke test (IPC 312.8): 1 inch of water column, 15 minutes, no added smoke. A diagnostic tool for finding a proven leak.</li>
<li>Any failure means repair and retest from the beginning — a retest is a new test.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Calling a test a pass when the gauge "only dropped a little." A drop is a drop. A 5-psi air test that falls to 4 psi has failed, and a water level that falls 2 inches has failed. There is no "close enough" in a tightness test.</div>
<div class="callout"><strong>Common mistake:</strong> Testing only part of the system and assuming the rest is fine. Every section that will be concealed must be tested. An untested joint behind drywall is a leak waiting for a homeowner to find it.</div>
<div class="callout"><strong>Common mistake:</strong> Using the smoke test as the first test. Smoke finds leaks; it is not the proof of tightness the inspector wants. Water or air proves the system; smoke locates the failure.</div>
<p><strong>Ready-to-Work link:</strong> Testing is a Level 2 NCCER skill (module 02204) and a guaranteed journeyman exam topic: the three test pressures and times — 10 feet / 15 minutes, 5 psi / 15 minutes, 1 inch of water column / 15 minutes — are numbers to memorize cold.</p>`
    }
  ],
  keyTerms: [
    { term: "Water test", def: "A DWV tightness test (IPC 312.2): fill the system to at least a 10-foot head of water and hold for 15 minutes with no drop or visible leak." },
    { term: "Air test", def: "A DWV tightness test (IPC 312.3): pressurize the system to 5 psi and hold for 15 minutes with no pressure drop." },
    { term: "Smoke test", def: "A diagnostic test (IPC 312.8): fill the system with smoke at 1 inch of water column for 15 minutes to locate a hidden leak." },
    { term: "Head of water", def: "The pressure exerted by a column of water; 1 foot of water equals about 0.433 psi, so a 10-foot head is about 4.3 psi." },
    { term: "Test plug", def: "A mechanical or inflatable plug that seals a pipe opening during a test." },
    { term: "Test ball", def: "An inflatable rubber ball inserted into a pipe and inflated to block flow during a water or air test." },
    { term: "Test tee", def: "A tee fitting with a cleanout-style plug that remains in the system after testing, used to fill and drain the test section." },
    { term: "Concealment", def: "Covering piping with walls, floors, or earth; IPC 312.1 requires testing before concealment." },
    { term: "AHJ", def: "Authority Having Jurisdiction — the local inspector or department whose interpretation of the code governs the job." },
    { term: "Rough-in inspection", def: "The inspection of piping before walls close, conducted with the system under test." },
    { term: "Water column", def: "A pressure measure; 1 inch of water column is less than 0.04 psi, the smoke-test pressure." },
    { term: "Soapy-water test", def: "Brushing soapy water on joints under air pressure to find leaks by the bubbles that form." }
  ],
  video: {
    title: "Plumbing System Test Plug",
    embedUrl: "https://www.youtube.com/embed/0Pxer7zCyDQ",
    note: "How a test plug seals a DWV system so it can be filled and tested. Watch how the plug is set and removed, then connect it to the water-test procedure in this module: plug every opening, fill to the 10-foot head, and watch the level.",
    more: [
      { title: "Plumbing: Rough in top out inspection in a single family residence", url: "https://www.youtube.com/watch?v=oP17jzfq_HE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A water test is run on a stack 18 feet tall, filled to the top. (a) What head of water is on the lowest joint? (b) What is that head in psi? (c) Does it meet the IPC 312.2 minimum?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The head is the full height of the water column: <strong>18 feet</strong>. Step 2: Pressure = 18 ft × 0.433 psi/ft = <strong>about 7.8 psi</strong>. Step 3: Yes — IPC 312.2 requires at least a <strong>10-foot head</strong>, and 18 feet exceeds it.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An air test is charged to 5 psi. After 15 minutes the gauge reads 4 psi and no leak is visible. Pass or fail? Explain what to do next.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Fail.</strong> IPC 312.3 requires the system to hold 5 psi for 15 minutes; any drop is a failure. Step 2: The leak is small, so brush soapy water on the joints, starting at the lowest ones, and watch for bubbles. Step 3: Repair every leaking joint, then <strong>retest from the beginning</strong> — a retest is a new 15-minute test, not a continuation.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A system fails its air test but no leak can be found by soapy water. Which test should be used next, what pressure does it use, and how long is it held?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Use a <strong>smoke test</strong> (IPC 312.8). Step 2: Fill the system with smoke and pressurize it to <strong>1 inch of water column</strong> (less than 0.04 psi). Step 3: Hold for <strong>15 minutes</strong> without adding more smoke, and watch for smoke escaping at the leak — at a joint, a fixture, or through a wall.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A water test runs 15 minutes and the water level drops 1 inch in a 4-inch stack. The helper says 'that is just evaporation.' Is the test a pass? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>No — the test fails.</strong> Step 2: IPC 312.2 requires no drop in the water level over 15 minutes; evaporation in 15 minutes is negligible and cannot explain a 1-inch drop in a 4-inch stack. Step 3: A 1-inch drop in a 4-inch stack is a real volume of water leaving the system through a leak. Find it, repair it, and retest.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A plumber wants to air-test a new PVC DWV system at 5 psi. What must they check before doing so, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: They must check the <strong>local rule (AHJ)</strong> — whether the jurisdiction allows air testing of plastic DWV piping. Step 2: Some jurisdictions restrict or prohibit it, because a plastic pipe failure under compressed air can be violent: air stores far more energy than water at the same pressure. Step 3: If the inspector requires a water test on plastic pipe, the air test is not an option on that job.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain in two sentences why testing must happen before the walls close, and who besides the plumber cares about the result.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A leak found before concealment costs a fitting to fix, while a leak found after the walls close costs a wall or floor to open and repair. Step 2: The <strong>inspector</strong> cares — the rough-in inspection happens with the system under test, and no inspection sign-off means no walls closed and no job finished.</p>"
    }
  ],
  quiz: [
    {
      q: "Under IPC 312.1, DWV piping must be tested:",
      choices: ["After the walls are closed", "Before concealment, while it is still visible and accessible", "Only if the homeowner asks for it", "Only on commercial jobs"],
      answer: 1,
      explanation: "Correct: (b). Section 312.1 requires testing before concealment. (a) reverses the rule — testing after the walls close defeats the purpose. (c) Testing is a code requirement, not an option. (d) The rule applies to residential work as well."
    },
    {
      q: "The IPC water test (312.2) requires a head of at least:",
      choices: ["5 feet of water", "10 feet of water", "15 feet of water", "20 feet of water"],
      answer: 1,
      explanation: "Correct: (b). The water test fills the system to at least a 10-foot head. (a) is below the minimum. (c) and (d) exceed the minimum and are acceptable if the system is filled higher, but they are not the requirement."
    },
    {
      q: "The IPC water test is held for:",
      choices: ["5 minutes", "10 minutes", "15 minutes", "1 hour"],
      answer: 2,
      explanation: "Correct: (c). The water test holds for 15 minutes with no drop and no visible leak. (a) and (b) are too short. (d) exceeds the requirement."
    },
    {
      q: "A 10-foot head of water exerts about how much pressure at the lowest joint?",
      choices: ["0.43 psi", "1 psi", "4.3 psi", "10 psi"],
      answer: 2,
      explanation: "Correct: (c). 10 feet × 0.433 psi per foot = about 4.3 psi. (a) is the pressure of 1 foot of water. (b) is the pressure of about 2.3 feet. (d) would require about 23 feet of head."
    },
    {
      q: "The IPC air test (312.3) pressurizes the DWV system to:",
      choices: ["1 psi", "5 psi", "15 psi", "50 psi"],
      answer: 1,
      explanation: "Correct: (b). The air test uses 5 psi, held for 15 minutes. (a) is too low to prove tightness. (c) and (d) are far above the test pressure and would stress DWV pipe dangerously."
    },
    {
      q: "An air test that falls from 5 psi to 4.5 psi in 15 minutes is:",
      choices: ["A pass — the drop is small", "A fail — any pressure drop means a leak", "A pass if no water is visible", "A fail only on plastic pipe"],
      answer: 1,
      explanation: "Correct: (b). Any drop is a failure; there is no 'close enough' in a tightness test. (a) mistakes a small drop for no drop. (c) Air tests show no water — the gauge is the evidence. (d) The hold requirement applies to all DWV materials."
    },
    {
      q: "The smoke test (IPC 312.8) pressurizes the system to:",
      choices: ["5 psi", "10 feet of head", "1 inch of water column", "50 psi"],
      answer: 2,
      explanation: "Correct: (c). The smoke test uses 1 inch of water column (less than 0.04 psi) for 15 minutes. (a) is the air test pressure. (b) is the water test head. (d) is a water supply test pressure range, not a DWV test."
    },
    {
      q: "The smoke test is used mainly to:",
      choices: ["Prove a new system is tight for the inspector", "Find the location of a leak that water or air testing already proved exists", "Test the water supply piping", "Clear a clogged drain"],
      answer: 1,
      explanation: "Correct: (b). Smoke is a diagnostic tool that marks a proven leak's location. (a) Water or air testing proves tightness for inspection. (c) Smoke testing does not test supply piping. (d) Smoke does not clear clogs."
    }
  ],
  studyGuide: `
<h3>Module 9 — Testing DWV: Quick Reference</h3>
<p><strong>Core idea:</strong> Test before concealment (IPC 312.1). A leak found under test costs a fitting; a leak found later costs a room.</p>
<div class="formula">Water test (312.2): ≥ 10-ft head, 15 min, no drop, no visible leak &nbsp;|&nbsp; 10 ft of water ≈ 4.3 psi</div>
<div class="formula">Air test (312.3): 5 psi, 15 min, no drop &nbsp;|&nbsp; Smoke test (312.8): 1 in water column, 15 min, no added smoke</div>
<p><strong>Air-test caution:</strong> Some jurisdictions restrict air testing of plastic DWV pipe — check the AHJ first.</p>
<p><strong>Finding leaks:</strong> Soapy water on joints under air pressure; smoke escaping marks a hidden leak.</p>
<p><strong>Watch out:</strong> Any drop is a failure — no "close enough." Repair and retest from the beginning. Smoke finds leaks; water and air prove tightness.</p>
<p><strong>Self-check:</strong> 18-ft stack filled to the top — head? (18 ft, about 7.8 psi — passes the 10-ft minimum.) Air test 5 → 4 psi — pass or fail? (Fail.)</p>
`
};
