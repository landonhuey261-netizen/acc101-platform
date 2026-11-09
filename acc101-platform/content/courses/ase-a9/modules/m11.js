// ase-a9 - Module 11: Diesel Diagnosis Scenarios
module.exports = {
  "number": 11,
  "slug": "diesel-diagnosis-scenarios",
  "title": "Diesel Diagnosis Scenarios",
  "estTime": "3–4 hours",
  "objectives": [
    "Work a full diesel diagnosis from complaint to confirmed repair, without replacing parts on a guess.",
    "Use the scan tool, the smoke color, and the service history together on one fault.",
    "Tell a fuel-system fault from an air-system fault from an aftertreatment fault on the same truck.",
    "Decide when a test has proven a part bad and when it has only proven a system needs more testing.",
    "Write up a diagnosis so the next technician can follow it."
  ],
  "sections": [
    {
      "heading": "The Method: Complaint, Clues, Theory, Test, Proof",
      "html": "<p>Every diesel diagnosis in this module follows the same five steps. <strong>Complaint:</strong> what the driver actually experiences, in their words. <strong>Clues:</strong> smoke color, sounds, smells, warning lights, codes, service history, and the driving pattern. <strong>Theory:</strong> the most likely cause, stated plainly, with one or two alternatives. <strong>Test:</strong> the check that separates the theory from the alternatives. <strong>Proof:</strong> the repair, followed by a verification drive that shows the complaint is gone.</p>\n<p>The discipline is in the order. A theory without a test is a guess, and a guess that happens to be right still teaches nothing — and costs the customer a part they did not need when it is wrong. The scenarios below are built to reward the method: each one has a trap for the technician who skips a step.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Complaint → clues → theory → test → proof. The test is what turns a guess into a diagnosis, and the verification drive is what turns a repair into a fix.</div>"
    },
    {
      "heading": "Scenario A: The Truck That Loses Power on Hills",
      "html": "<p><strong>Complaint:</strong> a delivery truck pulls fine on flat ground but loses power and blows black smoke on hills. <strong>Clues:</strong> no warning lights, air filter changed recently, fuel filter overdue, the driver reports the problem started gradually. <strong>Theory:</strong> the engine is starved of air or fuel under load — and the overdue fuel filter is the prime suspect, with a boost leak as the alternative.</p>\n<p><strong>Test:</strong> check the air side first — intake pipes, intercooler clamps, turbo operation — then change the fuel filter and check fuel delivery. <strong>Result:</strong> the air side is sound; the old filter is heavily restricted, and a new filter restores power on the same hill. <strong>Proof:</strong> a loaded test drive up the same hill with no smoke and full power.</p>\n<p>The trap here is the recent air filter change: it tempts the technician to skip the air side entirely. But a recent change is also when a pipe gets left loose — so the air side still gets checked, quickly, before the filter is blamed. The method protects against both traps: assuming the new part is fine, and assuming the old part is the fault.</p>"
    },
    {
      "heading": "Scenarios B and C: The Cold Morning and the Warning Light",
      "html": "<p><strong>Complaint:</strong> a diesel will not start on cold mornings, but starts fine in a warm garage. <strong>Clues:</strong> cranking speed is healthy, the glow lamp behaves normally, the truck has a HEUI engine, and the oil is overdue for a change. <strong>Theory:</strong> the glow system is being commanded but a plug is dead — or the HEUI oil system cannot build pressure when cold and thick.</p>\n<p><strong>Test:</strong> measure each glow plug's resistance and current draw, and check the oil level and condition. <strong>Result:</strong> two plugs read open, and the oil is low and badly degraded. <strong>Proof:</strong> new plugs, fresh oil at the correct level, and a cold-morning start on the first crank.</p>\n<p>This scenario has two faults, and that is the point: a truck can have a dead glow plug and a neglected oil system at the same time, and fixing only one leaves a hard start that comes back on the next cold morning. When the tests reveal two problems, fix both — and note that the overdue oil was a clue the owner had been skipping service, which is why the plugs were never tested either.</p>\n<p><strong>Complaint:</strong> the aftertreatment warning light stays on, and the code points at the DPF. <strong>Clues:</strong> the truck only makes short trips, the soot load is high, and there is black smoke under load. <strong>Theory:</strong> the DPF is a symptom — the engine is making excess soot, or regenerations keep getting interrupted by short trips.</p>\n<p><strong>Test:</strong> check the air side for a boost leak and the fuel side for a dribbling injector, then run a complete parked regeneration and watch the soot load fall. <strong>Result:</strong> a loose intercooler clamp is letting boosted air escape, so the engine over-fuels and makes black smoke — and the short trips never let a regeneration finish. <strong>Proof:</strong> clamp tightened, parked regeneration completed, soot load back to normal, and a highway drive with no warning.</p>\n<p>The trap is the code: it names the DPF, and the DPF is the expensive part. Replacing it would have fixed nothing — the new filter would have clogged the same way, fed by the same boost leak and the same short trips. The code names the complaining system; the data and the smoke name the fault.</p>"
    },
    {
      "heading": "Writing It Up So the Next Technician Can Follow It",
      "html": "<p>A diagnosis is not finished until it is written down. A good write-up has five lines: the complaint in the driver's words, the clues found, the theory, the test and its result, and the repair plus the verification drive. Anyone reading it should be able to see why the part was replaced — and what to check if the complaint comes back.</p>\n<p>Write down the numbers the scan tool gave you: soot load, rail or oil pressure, sensor readings. Numbers turn a story into evidence, and they give the next technician a baseline to compare against. A complaint that returns with different numbers is a different fault, even if it sounds the same.</p>\n<p>Finally, write down what you ruled out, not just what you found. 'Air side checked, no boost leak' is as valuable as the fault itself — it stops the next technician from re-testing what is already proven good, and it shows the customer the work was thorough, not lucky.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The method: complaint → clues → theory → test → proof, with a verification drive at the end.</li>\n<li>A theory without a test is a guess — and a guess that is right still teaches nothing.</li>\n<li>One truck can have two faults at once; when the tests reveal two problems, fix both.</li>\n<li>A code names the complaining system, not the part — the DPF code in Scenario C was a boost leak.</li>\n<li>Write it up: complaint, clues, theory, test and result, repair and verification — plus what you ruled out.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the part the code names. Codes point at systems; tests point at parts. The expensive part is usually the last suspect, not the first.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Stopping at the first fault found. Scenario B had a dead glow plug and neglected oil — fixing one would have left a hard start on the next cold morning.</div>\n<p><strong>Ready-to-work link:</strong> If you can run the five-step method on a new complaint without skipping the test or the verification drive, you have this module. Module 12 is the review: the whole course in one pass.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Complaint", "def": "What the driver actually experiences, in their words — the starting point of every diagnosis." },
    { "term": "Clue", "def": "A symptom, code, smell, sound, or service-history fact that narrows the search." },
    { "term": "Theory", "def": "The most likely cause, stated plainly before testing, with one or two alternatives." },
    { "term": "Verification drive", "def": "A test drive after the repair, reproducing the original complaint's conditions to prove it is gone." },
    { "term": "Root cause", "def": "The underlying fault that produces the symptom — as opposed to the symptom itself." },
    { "term": "Symptom", "def": "What the driver or the truck shows — smoke, lost power, a warning light — not the fault behind it." },
    { "term": "Parts-replacing", "def": "Swapping parts on a guess without testing — the habit this course is built to replace." },
    { "term": "Baseline", "def": "Recorded scan-tool numbers from a healthy state, used to judge later readings." },
    { "term": "Ruled out", "def": "A suspect proven good by testing — worth recording so the next technician does not re-test it." },
    { "term": "Intermittent fault", "def": "A fault that comes and goes, often with temperature, vibration, or load — the hardest kind to prove." },
    { "term": "Comeback", "def": "A vehicle returning with the same complaint because the repair did not fix the root cause." },
    { "term": "Write-up", "def": "The written record of a diagnosis: complaint, clues, theory, test and result, repair and verification." }
  ],
  "video": {
    "title": "7.3 Diesel Starting Problems: Troubleshooting Tips for Quick Fixes",
    "embedUrl": "https://www.youtube.com/embed/NPBi6cfsM7c",
    "note": "A real 7.3L Power Stroke hard-start diagnosis, worked step by step: glow plugs, high-pressure oil pump, injectors, fuel delivery, and the sensors that tie them together. Follow the order the technician works in and compare it with the five-step method in this module — complaint, clues, theory, test, proof.",
    "more": [
      { "title": "White Smoke From Exhaust: Causes & Fixes", "url": "https://www.youtube.com/watch?v=g6ma_hEJWik" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A truck loses power on hills and blows black smoke. The fuel filter is overdue and the air filter was just changed. What is your theory, and what do you test first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Theory — the engine is starved of air or fuel under load; the overdue fuel filter is the prime suspect, with a boost leak as the alternative. Step 2: Test the air side first (pipes, clamps, turbo) even though the filter is new — a recent service is when a pipe gets left loose — then change the fuel filter and verify with a loaded hill drive.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A HEUI diesel will not start on cold mornings. Two glow plugs read open and the oil is low and degraded. Why should both problems be fixed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The dead plugs leave two cylinders with no cold-start help, and the low, degraded oil starves the high-pressure oil pump that fires the injectors. Step 2: Fixing only one leaves a hard start on the next cold morning — one truck can have two faults at once, and the tests proved both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A DPF warning light stays on and the code points at the DPF, but the truck blows black smoke under load and only makes short trips. Where is the root cause, and why not the DPF?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The root cause is upstream — an air or fuel fault making excess soot, plus short trips that never let a regeneration finish. Step 2: The DPF is the victim, not the fault; a new filter would clog the same way. Fix the boost leak or injector, complete a regeneration, and verify on a highway drive.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is a verification drive part of the diagnosis, not an optional extra?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The verification drive reproduces the original complaint's conditions — the same hill, the same load, the same cold morning. Step 2: Only a drive under those conditions proves the complaint is gone; without it, the repair is unproven and the truck may come back with the same fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write the five lines of a good diagnostic write-up for Scenario A (the truck that loses power on hills).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Complaint — loses power and blows black smoke on hills. Step 2: Clues — no warning lights, air filter recently changed, fuel filter overdue, gradual onset. Step 3: Theory — starved of air or fuel under load; filter prime suspect, boost leak alternative. Step 4: Test — air side sound; old filter heavily restricted; new filter fitted. Step 5: Repair and proof — new filter; loaded hill drive with full power and no smoke. Plus what was ruled out: no boost leak found.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician replaces a part, the complaint goes away for a week, then returns. What does that tell you about the original diagnosis?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The replaced part was probably a symptom, not the root cause — or there were two faults and only one was fixed. Step 2: The comeback means the diagnosis must be reworked from the complaint with fresh tests, not by replacing the next part on the list.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The five steps of the diagnostic method in this module are:",
      "choices": ["Guess, replace, hope, repeat, charge", "Complaint, clues, theory, test, proof", "Code, part, install, clear, deliver", "Listen, look, smell, touch, drive"],
      "answer": 1,
      "explanation": "Correct: (b). Complaint → clues → theory → test → proof, with a verification drive at the end. (a) is parts-replacing, not diagnosis. (c) skips the theory and the test. (d) lists senses, not a method."
    },
    {
      "q": "A theory without a test is:",
      "choices": ["A diagnosis", "A guess — it may be right, but it teaches nothing and costs a part when it is wrong", "A repair", "A verification"],
      "answer": 1,
      "explanation": "Correct: (b). Only the test separates the theory from its alternatives. (a) A diagnosis requires a test. (c) A repair follows proof, not a theory. (d) Verification comes after the repair."
    },
    {
      "q": "In Scenario C, the DPF code was caused by:",
      "choices": ["A failed DPF", "A loose intercooler clamp letting boosted air escape, so the engine over-fueled and made excess soot, plus short trips that never let a regeneration finish", "An empty DEF tank", "A dead glow plug"],
      "answer": 1,
      "explanation": "Correct: (b). The boost leak made the soot and the short trips prevented regeneration — the DPF was the victim. (a) The filter itself was not the fault. (c) DEF is an SCR matter, not a DPF matter. (d) Glow plugs affect cold starting, not soot load."
    },
    {
      "q": "When tests reveal two faults on one truck, the right move is to:",
      "choices": ["Fix the cheaper one and hope", "Fix both — one truck can have two faults at once", "Fix neither and wait", "Replace the most expensive part"],
      "answer": 1,
      "explanation": "Correct: (b). Scenario B proved it: a dead glow plug and neglected oil together caused the hard start. (a) Hoping is not a repair. (c) Waiting leaves the customer stranded. (d) Price does not decide the repair; tests do."
    },
    {
      "q": "A verification drive should:",
      "choices": ["Be a quick lap around the block", "Reproduce the original complaint's conditions — the same hill, load, or cold morning", "Only happen if the customer asks", "Be done before the repair"],
      "answer": 1,
      "explanation": "Correct: (b). Only the original conditions prove the complaint is gone. (a) A gentle lap may not reproduce the fault. (c) Verification is part of the job, not an option. (d) A drive before the repair is a symptom check, not a verification."
    },
    {
      "q": "A good diagnostic write-up should include what was ruled out because:",
      "choices": ["It makes the bill longer", "It stops the next technician from re-testing what is already proven good", "It is required by law", "It hides the real fault"],
      "answer": 1,
      "explanation": "Correct: (b). Recording ruled-out suspects saves the next technician's time and shows the work was thorough. (a) Honest records are not about billing. (c) It is good practice, not a legal requirement. (d) A write-up reveals the fault; it does not hide it."
    },
    {
      "q": "A vehicle returns a week after a repair with the same complaint. That most likely means:",
      "choices": ["The customer is imagining it", "The replaced part was a symptom, not the root cause — or a second fault was missed", "The repair was perfect and the truck is fine", "The scan tool is broken"],
      "answer": 1,
      "explanation": "Correct: (b). A comeback means the diagnosis must be reworked from the complaint with fresh tests. (a) Dismissing the customer loses the clue. (c) A returning complaint is by definition not fixed. (d) The scan tool is the least likely explanation."
    },
    {
      "q": "In Scenario A, why was the air side checked even though the air filter had just been changed?",
      "choices": ["Because new filters are always bad", "Because a recent service is when a pipe gets left loose — the new part does not prove the system is sound", "Because the fuel filter was fine", "Because the customer asked"],
      "answer": 1,
      "explanation": "Correct: (b). A recent change is a reason to check the work, not to skip it. (a) New filters are usually fine. (c) The fuel filter was overdue and was the eventual fault — but the air side still had to be ruled out first. (d) The check was the method's, not the customer's."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Diesel Diagnosis Scenarios: Quick Reference</h3>\n<p><strong>Method:</strong> Complaint → clues → theory → test → proof (verification drive under the original conditions).</p>\n<p><strong>Scenario A:</strong> Power loss + black smoke on hills → air side first, then overdue fuel filter.</p>\n<p><strong>Scenario B:</strong> Cold no-start on a HEUI → dead glow plugs AND low, degraded oil — fix both.</p>\n<p><strong>Scenario C:</strong> DPF code + black smoke + short trips → boost leak upstream, not the filter.</p>\n<p><strong>Rule:</strong> A code names the complaining system, not the part. A theory without a test is a guess.</p>\n<p><strong>Write-up:</strong> Complaint, clues, theory, test and result, repair and verification — plus what you ruled out.</p>\n<p><strong>Watch out:</strong> One truck can have two faults. A comeback means rework the diagnosis, not replace the next part.</p>\n<p><strong>Self-check:</strong> Run the five-step method on a complaint from your own experience.</p>\n"
};
