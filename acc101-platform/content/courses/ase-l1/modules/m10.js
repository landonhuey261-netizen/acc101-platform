// ase-l1 - Module 10: Driveability Case Studies
module.exports = {
  "number": 10,
  "slug": "driveability-case-studies",
  "title": "Driveability Case Studies",
  "estTime": "3–4 hours",
  "objectives": [
    "Work full driveability cases from complaint to confirmed repair using the L1 method.",
    "Combine fuel trim, scope, and code data into one theory on a real fault.",
    "Tell a hesitation, a stall, and a surge apart by their causes.",
    "Decide when a case needs a road test with recording and when shop testing is enough.",
    "Write up a driveability case so the next technician can follow it."
  ],
  "sections": [
    {
      "heading": "Case 1: The Hesitation on Acceleration",
      "html": "<p><strong>Complaint:</strong> the car hesitates when the driver presses the accelerator, then surges forward. <strong>Clues:</strong> no codes, fuel trims normal at idle and high and positive under load, a snap-throttle test on the scope shows a weak coil current ramp on one cylinder. <strong>Theory:</strong> one coil is failing under load — at idle the cylinder pressure is low and the weak coil keeps up; under load the pressure climbs and the spark fails.</p>\n<p><strong>Test:</strong> swap the suspect coil with another cylinder and repeat the snap-throttle test. <strong>Result:</strong> the weak ramp — and the hesitation — move with the coil. <strong>Proof:</strong> a new coil, and a road test with hard acceleration showing no hesitation.</p>\n<p>The lesson is the combination: trims said the mixture was lean under load, which could have sent the diagnosis toward fuel delivery — but the scope said one coil was weak, and the swap proved it. Two data sources, one theory, one test. A technician who trusted only the trims would have replaced a fuel pump for a coil fault.</p>\n<div class=\"callout\"><strong>Key idea:</strong> One data source can mislead; two that agree on one theory cannot. Trims plus scope plus swap equals a diagnosis — trims alone equals a guess.</div>"
    },
    {
      "heading": "Case 2: The Stall at Idle",
      "html": "<p><strong>Complaint:</strong> the engine stalls at idle, restarts easily, and runs fine at speed. <strong>Clues:</strong> a pending lean code, fuel trims high and positive at idle and near normal under load, and a hiss from the engine bay. <strong>Theory:</strong> a vacuum leak — unmetered air that matters most at idle, when total air flow is small.</p>\n<p><strong>Test:</strong> a smoke test of the intake system. <strong>Result:</strong> smoke escapes from a cracked hose behind the intake manifold — a hose the eye could not see and the ear could barely hear. <strong>Proof:</strong> a new hose, trims back near zero at idle, and a week of idling without a stall.</p>\n<p>The lesson is the trim pattern: worst at idle, better under load is the signature of a vacuum leak, and it is one of the most reliable patterns in engine diagnosis. It also shows why the pending code mattered — it was the fault caught once, before it was bad enough to confirm, and it pointed at the same system the trims did.</p>"
    },
    {
      "heading": "Case 3: The Surge at Cruise",
      "html": "<p><strong>Complaint:</strong> the car surges — speeds up and slows down by itself — at a steady cruise. <strong>Clues:</strong> the oxygen sensor waveform is slow to switch, the fuel trims swing widely, and Mode $06 shows the sensor's response time near its limit. <strong>Theory:</strong> a lazy oxygen sensor — it reports the mixture late, so the computer over-corrects, then corrects the correction, and the engine surges with the swinging mixture.</p>\n<p><strong>Test:</strong> watch the sensor's switching on the scope and compare it with a known-good sensor: the suspect switches slowly and unevenly. <strong>Result:</strong> a new sensor switches crisply, the trims steady, and the surge is gone. <strong>Proof:</strong> a cruise-speed road test with the scan tool recording steady trims.</p>\n<p>The lesson is Mode $06: the sensor had not set a code, because it was still inside its limit — but its response time was creeping toward that limit, and Mode $06 showed it. A technician who waited for the code would have waited for the customer to come back angrier. The data showed the failure before the code did.</p>"
    },
    {
      "heading": "Case 4: The Hot No-Start After a Short Stop",
      "html": "<p><strong>Complaint:</strong> the car starts fine cold, runs fine, but will not restart after a short stop when hot — then starts normally once it cools. <strong>Clues:</strong> no codes, fuel pressure falls quickly after shutdown, and the oil smells of fuel. <strong>Theory:</strong> a leaking injector — or a leaking high-pressure pump on a direct-injection engine — is flooding a cylinder after shutdown and draining fuel pressure, so the hot restart has no pressure and a flooded cylinder.</p>\n<p><strong>Test:</strong> a fuel pressure leak-down test after shutdown, watching how fast pressure falls, and checking which cylinder is wet. <strong>Result:</strong> pressure falls fast and one cylinder's plug is wet with fuel. <strong>Proof:</strong> the leaking injector is replaced, pressure holds after shutdown, and the hot restart works the first time.</p>\n<p>The lesson is the conditions: hot-only, after a short stop, fine when cold — the pattern points at heat and time, and a leak that only matters when the engine sits hot. It also shows why the oil smell mattered: fuel in the oil is the leak's fingerprint, and it was there from the first inspection.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Case 1 (hesitation on acceleration): trims lean under load plus a weak coil ramp — the swap proved the coil. Two data sources, one theory.</li>\n<li>Case 2 (stall at idle): trims worst at idle, better under load — the signature of a vacuum leak, found with a smoke test.</li>\n<li>Case 3 (surge at cruise): a lazy oxygen sensor, caught by Mode $06 before it set a code — slow switching makes the computer over-correct.</li>\n<li>Case 4 (hot no-start after a short stop): leaking injector or pump — pressure falls after shutdown, a cylinder floods, oil smells of fuel.</li>\n<li>Every case: complaint with conditions → clues from every source → one theory → one test → proof under the original conditions.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting one data source. Trims alone in Case 1 pointed at fuel delivery; the scope pointed at the coil — and the swap proved the scope right.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Waiting for a code. Case 3's sensor had not set one — Mode $06 showed the failure first, and the customer was already feeling it.</div>\n<p><strong>Ready-to-work link:</strong> If you can work a new driveability complaint by the case method — conditions, clues, theory, test, proof — you have this module. Module 11 applies the same thinking to the test lane: emissions-test failure scenarios.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Hesitation", "def": "A brief loss of power when the accelerator is pressed — often ignition or fuel delivery failing under load." },
    { "term": "Surge", "def": "The engine speeding up and slowing down by itself at a steady cruise — often a lazy sensor making the computer over-correct." },
    { "term": "Stall at idle", "def": "The engine dying at idle but running at speed — often a vacuum leak, worst when air flow is small." },
    { "term": "Snap-throttle test", "def": "A scope test that snaps the throttle open and watches the coil or sensor response under sudden load." },
    { "term": "Lazy oxygen sensor", "def": "An oxygen sensor that switches slowly, reporting the mixture late and making the computer over-correct." },
    { "term": "Leak-down test", "def": "A fuel pressure test that watches how fast pressure falls after shutdown, finding a leaking injector or pump." },
    { "term": "Smoke test", "def": "Filling the intake (or EVAP system) with smoke to find a leak by watching where the smoke escapes." },
    { "term": "Flooded cylinder", "def": "A cylinder with too much fuel in it to fire — often from a leaking injector after shutdown." },
    { "term": "Known-good comparison", "def": "Comparing a suspect reading or waveform with a healthy one — the odd one out is the fault." },
    { "term": "Driveability", "def": "How the vehicle behaves on the road — starting, idling, accelerating, cruising — as opposed to its emissions numbers." },
    { "term": "Hot restart", "def": "Starting a warm engine after a short stop; a hot no-start points at fuel pressure loss or flooding." },
    { "term": "Over-correction", "def": "The computer correcting a mixture error so hard that it creates the opposite error — the cause of a surge." }
  ],
  "video": {
    "title": "ScannerDanner uScope: Capturing a Misfire on Snap Throttle",
    "embedUrl": "https://www.youtube.com/embed/Kr8TIc820SA",
    "note": "ScannerDanner sets the uScope trigger to catch a misfire during a snap-throttle test on a Ford Taurus with a cylinder 1 misfire code — the same snap-throttle technique from Case 1. Watch how the trigger freezes the exact moment the fault happens, so it can be studied instead of chased.",
    "more": [
      { "title": "PicoScope Wiggle Test: Finding a Wiring Fault", "url": "https://www.youtube.com/watch?v=jZ8TcK9LyVc" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In Case 1, the fuel trims pointed at fuel delivery but the scope pointed at a coil. Why was the scope right, and what proved it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The trims showed a lean condition under load, which could be fuel delivery — but a weak coil also makes an incomplete burn that looks lean. Step 2: The scope showed one coil's current ramp was weak, and swapping the coil moved the hesitation with it — the swap proved the coil was the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In Case 2, why is the trim pattern — worst at idle, better under load — the signature of a vacuum leak?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A vacuum leak adds a fixed amount of unmetered air. Step 2: At idle, total air flow is small, so the leak is a large share of it and the trims climb high; under load, total flow is large, so the same leak is a small share and the trims fall toward normal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In Case 3, the oxygen sensor had not set a code. How was the fault found anyway?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Mode $06 showed the sensor's response time creeping toward its limit, and the scope showed it switching slowly and unevenly. Step 2: The data showed the failure before the code did — a lazy sensor makes the computer over-correct, which is the surge the driver felt.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In Case 4, what two clues pointed at a leaking injector before any test was run?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The conditions — a hot no-start after a short stop, fine when cold — point at heat and time, matching a leak that floods a cylinder while the engine sits hot. Step 2: The oil smelled of fuel — the leak's fingerprint, showing fuel was reaching the crankcase.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car surges at cruise and the oxygen sensor switches slowly. Explain the chain from the slow sensor to the surge.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The lazy sensor reports the mixture late, so the computer corrects for a mixture that has already changed. Step 2: It over-corrects, then corrects the correction, and the mixture swings rich and lean — and the engine's power swings with it, which the driver feels as a surge.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Write the five steps of the case method in order, using Case 2 (the stall at idle) as your example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Complaint — stalls at idle, restarts easily, fine at speed. Step 2: Clues — pending lean code, trims high at idle, hiss from the engine bay. Step 3: Theory — a vacuum leak. Step 4: Test — smoke test of the intake, finding a cracked hose. Step 5: Proof — new hose, trims near zero, a week without a stall.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In Case 1, the hesitation on acceleration was caused by:",
      "choices": ["A weak fuel pump", "One coil failing under load — the weak ramp and the swap proved it", "A vacuum leak", "A clogged catalytic converter"],
      "answer": 1,
      "explanation": "Correct: (b). The scope showed a weak coil ramp, and swapping the coil moved the hesitation with it. (a) The trims suggested fuel delivery, but the swap disproved it. (c) A vacuum leak is worst at idle, not under load. (d) A clogged converter causes lost power at all speeds, not a hesitation."
    },
    {
      "q": "Fuel trims worst at idle and better under load are the signature of:",
      "choices": ["A weak fuel pump", "A vacuum leak", "A leaking injector", "A lazy oxygen sensor"],
      "answer": 1,
      "explanation": "Correct: (b). A fixed leak is a large share of air flow at idle and a small share under load. (a) A weak pump is worst under load. (c) A leaking injector makes the mixture rich, with negative trims. (d) A lazy sensor causes a surge, not this trim pattern."
    },
    {
      "q": "In Case 3, the surge at cruise was caused by:",
      "choices": ["A vacuum leak", "A lazy oxygen sensor making the computer over-correct", "A weak fuel pump", "A misfiring cylinder"],
      "answer": 1,
      "explanation": "Correct: (b). The slow sensor reported the mixture late, so the computer swung the mixture rich and lean, and the engine surged with it. (a) A vacuum leak is worst at idle. (c) A weak pump starves the engine under load. (d) A misfire would set a misfire code and feel like a stumble, not a surge."
    },
    {
      "q": "Mode $06 found the fault in Case 3 because it showed:",
      "choices": ["A stored code", "The oxygen sensor's response time creeping toward its limit, before any code set", "The fuel pressure", "The battery voltage"],
      "answer": 1,
      "explanation": "Correct: (b). Mode $06 shows test values against their limits — the sensor was failing but still inside its limit. (a) No code had set. (c) Fuel pressure is a separate measurement. (d) Battery voltage is unrelated."
    },
    {
      "q": "In Case 4, the hot no-start after a short stop was caused by:",
      "choices": ["A dead battery", "A leaking injector flooding a cylinder and draining fuel pressure after shutdown", "A clogged air filter", "A failed starter"],
      "answer": 1,
      "explanation": "Correct: (b). The leak-down test showed pressure falling fast, one plug was wet with fuel, and the oil smelled of fuel. (a) A dead battery would affect cold starts too. (c) An air filter fault does not depend on a short stop. (d) A failed starter would not crank at all."
    },
    {
      "q": "A smoke test of the intake system is used to find:",
      "choices": ["A leaking injector", "A vacuum leak, by watching where the smoke escapes", "A lazy oxygen sensor", "A weak fuel pump"],
      "answer": 1,
      "explanation": "Correct: (b). Smoke fills the intake and escapes through the leak — including a cracked hose the eye cannot see. (a) Injectors are tested by pressure and contribution. (c) A lazy sensor is found on the scope and in Mode $06. (d) A weak pump is found by a pressure test under load."
    },
    {
      "q": "The case method's five steps are:",
      "choices": ["Guess, replace, hope, repeat, charge", "Complaint with conditions, clues, one theory, one test, proof under the original conditions", "Code, part, install, clear, deliver", "Listen, look, smell, touch, drive"],
      "answer": 1,
      "explanation": "Correct: (b). Complaint → clues → theory → test → proof. (a) is parts-replacing. (c) skips the theory and the test. (d) lists senses, not a method."
    },
    {
      "q": "Two data sources that agree on one theory are valuable because:",
      "choices": ["They make the bill longer", "One data source can mislead — trims alone in Case 1 pointed at fuel delivery, while the scope pointed at the coil", "They always agree", "They replace the test"],
      "answer": 1,
      "explanation": "Correct: (b). A single reading can be misread; agreement between independent sources is strong evidence. (a) Honest diagnosis is not about billing. (c) Sources often disagree — that is when the test decides. (d) Agreement still needs a test to prove it."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Driveability Case Studies: Quick Reference</h3>\n<p><strong>Case 1 — Hesitation on acceleration:</strong> Trims lean under load + weak coil ramp → swap proves the coil. Two sources, one theory.</p>\n<p><strong>Case 2 — Stall at idle:</strong> Trims worst at idle, better under load = vacuum leak → smoke test finds the cracked hose.</p>\n<p><strong>Case 3 — Surge at cruise:</strong> Lazy O2 sensor, caught by Mode $06 before any code → slow switching makes the computer over-correct.</p>\n<p><strong>Case 4 — Hot no-start after a short stop:</strong> Leaking injector/pump → pressure falls after shutdown, cylinder floods, oil smells of fuel.</p>\n<p><strong>Method:</strong> Complaint with conditions → clues from every source → one theory → one test → proof under the original conditions.</p>\n<p><strong>Watch out:</strong> One data source can mislead. Waiting for a code wastes the early warning in Mode $06.</p>\n<p><strong>Self-check:</strong> Work a new driveability complaint by the case method, out loud, before looking at any answer.</p>\n"
};
