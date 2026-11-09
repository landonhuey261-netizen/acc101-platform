// ase-a6 - Module 12: Electrical Review
module.exports = {
  "number": 12,
  "slug": "electrical-review",
  "title": "Electrical Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Pull together the whole course: Ohm's law, testing, and the diagnostic order.",
    "Work through a full electrical diagnosis from a customer complaint to a confirmed repair.",
    "Use the wiring diagram, the multimeter, the scope, and the scan tool as one diagnostic system.",
    "Explain how to avoid the most common electrical-diagnosis mistakes.",
    "Describe what the ASE A6 test covers and how to prepare for it."
  ],
  "sections": [
    {
      "heading": "Ohm's Law Runs the Whole Course",
      "html": "<p>Every module in this course comes back to one formula: V = IR. A battery that cannot deliver current, a starter that cranks slowly, a headlight that burns dim, a module that loses communication — all of them are voltage, current, and resistance, and the formula tells you what to measure and what the measurement means. A voltage drop is Ohm's law across a connection. A parasitic draw is Ohm's law with a meter in series. A load test is Ohm's law under a heavy load. If you can work the formula, you can diagnose the circuit.</p>\n<p>The diagnostic order comes back to one habit too: <strong>test first, then repair</strong>. Check the power and the ground. Check the inputs. Check the outputs. Suspect the module last. A fuse that keeps blowing means a short to find, not a bigger fuse to fit. A module code usually means a sensor is lying, not that the module has failed. A car that will not crank in Park but cranks in Neutral has a switch fault, not a starter fault. The pattern, the diagram, and the meter — in that order — name the repair.</p>"
    },
    {
      "heading": "A Full Diagnosis, Start to Finish",
      "html": "<p>Work a case the way a technician would. A customer brings in a car that will not start in the morning, but it starts fine with a jump and runs well all day. <strong>Step 1 — Listen and look:</strong> the battery terminals are clean, the belt is tight, and the warning light goes out once the engine runs. <strong>Step 2 — Check the basics:</strong> the battery passes a load test and the charging system is healthy. <strong>Step 3 — Test:</strong> a parasitic draw test with the car asleep shows a draw that is too large. <strong>Step 4 — Find it:</strong> pulling fuses one at a time shows the draw drops when the interior-light fuse is pulled. <strong>Step 5 — Repair:</strong> the glove-box light switch is stuck, keeping the light on all night. Replace the switch, verify the draw is normal, and the car starts in the morning.</p>\n<p>Notice how each step earns the next one. The battery test ruled out the battery. The charging test ruled out the alternator. The draw test found the drain. The fuse test named the circuit. The switch was the repair — a small part, found by testing, not by guessing. That is what a diagnosis is: a chain of evidence, each link tested.</p>"
    },
    {
      "heading": "The Diagnostic System",
      "html": "<p>The tools in this course are not separate tricks — they are one system. The <strong>wiring diagram</strong> tells you how the circuit is supposed to work and where to test. The <strong>multimeter</strong> tells you the numbers: voltage, resistance, current. The <strong>scope</strong> tells you the patterns: whether a signal switches cleanly and whether a network is talking. The <strong>scan tool</strong> tells you what the modules see: fault codes and live data, and which modules are answering. Put together, they answer almost any electrical question a customer can bring you.</p>\n<p>The same system works on every car you will meet. The parts change — more modules, more networks, a high-voltage system alongside the low-voltage one — but the questions do not: is there power, is there ground, is the signal true, is the load working? If you can answer those four questions with tests, you can diagnose any electrical system.</p>"
    },
    {
      "heading": "Common Mistakes — and the ASE A6 Test",
      "html": "<p>The common mistakes are the ones this course has warned about all along: measuring resistance on a powered circuit; reading a parasitic draw before the modules have gone to sleep; replacing a module because a code mentions it; replacing a starter when the neutral safety switch has failed; fitting a larger fuse instead of finding a short; and trusting that a hybrid is dead because it is switched off, without verifying it with a meter. Each one is a test skipped or a step rushed. The cure is the same every time: slow down, test, and let the evidence decide.</p>\n<p>The ASE A6 Electrical / Electronic Systems test covers the same ground as this course: general electrical diagnosis, batteries, starting and charging systems, lighting and accessories, wiring diagrams, and electronic controls and networks. The test asks you to choose the best diagnosis or repair from a set of options — exactly the skill this course has drilled. The best preparation is not memorizing this course; it is working through the diagnosis cases until the test-first habit is automatic. That habit, plus the two years of hands-on experience ASE requires before the credential is issued, is what makes a Master Automobile Technician — and A6, sitting early in this program, is the foundation for the A8 engine-performance course that follows it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Ohm's law runs the whole course: V = IR is the voltage drop test, the load test, and the draw test.</li>\n<li>Diagnosis is a chain of evidence: listen → look → check basics → test → find the circuit → repair → verify.</li>\n<li>The diagnostic system: diagram (how it should work) · multimeter (the numbers) · scope (the patterns) · scan tool (what the modules see).</li>\n<li>Every electrical system answers the same four questions: is there power, is there ground, is the signal true, is the load working?</li>\n<li>ASE A6 covers this course's ground — general diagnosis, batteries, starting, charging, lighting, accessories, diagrams, controls, and networks.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Studying for the test by memorizing answers instead of practicing diagnosis. The test asks you to choose the best diagnosis from a set of options — the skill is the habit, not the memory.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work a dead-battery case from complaint to confirmed repair without replacing a part on a guess, you have this course. The next course, A2, builds on it: automatic transmissions, where electrical diagnosis meets hydraulics.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Diagnosis",
      "def": "The process of finding the cause of a problem by testing, not by guessing parts."
    },
    {
      "term": "Chain of evidence",
      "def": "A series of tests where each result earns the next test, until only one cause is left."
    },
    {
      "term": "Test-first habit",
      "def": "The rule that testing comes before replacing parts."
    },
    {
      "term": "ASE A6",
      "def": "The ASE Electrical / Electronic Systems certification test, covering general electrical diagnosis, batteries, starting and charging, lighting and accessories, wiring diagrams, and electronic controls and networks."
    },
    {
      "term": "Master Automobile Technician",
      "def": "The ASE credential earned by passing the A1 through A8 tests and meeting the work-experience requirement."
    },
    {
      "term": "Confirmation test",
      "def": "A second test run to confirm what the first test suggested, before a repair is made."
    },
    {
      "term": "Customer complaint",
      "def": "What the driver reports — the starting point of every diagnosis, to be verified, not taken as the diagnosis."
    },
    {
      "term": "Symptom",
      "def": "What the car does wrong — a dead battery in the morning, a dim light, a click with no crank — as distinct from the cause."
    },
    {
      "term": "Root cause",
      "def": "The actual failed part or condition behind a symptom; the repair fixes the root cause, not the symptom."
    },
    {
      "term": "Parts cannon",
      "def": "The bad habit of replacing parts one after another until the symptom goes away, instead of testing."
    },
    {
      "term": "Verification",
      "def": "Checking after a repair that the symptom is gone and the test readings are normal."
    },
    {
      "term": "General electrical diagnosis",
      "def": "The ASE A6 area covering testing and diagnosis of the electrical system as a whole, before any specific system."
    },
    {
      "term": "Work experience",
      "def": "The hands-on time ASE requires before a credential is issued — passing the tests alone does not certify you."
    },
    {
      "term": "Review",
      "def": "Going back over the whole course to connect the modules into one system."
    }
  ],
  "video": {
    "title": "Learn How to Diagnose and Fix Car Electrical Problems Series | Part 1 Basic Electrical Principals",
    "embedUrl": "https://www.youtube.com/embed/CGEd3SMsoLE",
    "note": "The Car Care Nut opens his electrical diagnosis series with the basics — the same principles this course is built on. Watch how he works a real electrical fault from symptom to repair, and compare it with the full-diagnosis case in this module.",
    "more": [
      {
        "title": "How To Read Wiring Diagrams  [an SD Premium Class]",
        "url": "https://www.youtube.com/watch?v=DMKTSGbE2eM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car will not start in the morning, but it starts with a jump and runs well all day. List the diagnostic steps in order, and say what each step rules out or finds.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Listen and look — terminals clean, belt tight, warning light out when running. Step 2: Load-test the battery — rules out the battery. Step 3: Test the charging system — rules out the alternator. Step 4: Parasitic draw test with the car asleep — finds the drain. Step 5: Pull fuses one at a time — names the circuit. Step 6: Repair the fault on that circuit and verify the draw is normal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A customer says, \"Just replace the starter — my friend had the same no-crank and a starter fixed it.\" What do you do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Thank them, then test anyway. Step 2: A friend's car is not this car — the same symptom can have a different cause. Step 3: Check the battery, the terminals, the safety switch, and the relay first — all cheaper than a starter. Step 4: A voltage drop test will show whether the starter is actually the fault. Test first, replace second.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Work this case: a car cranks slowly. The battery passes a load test. A voltage drop test shows a large drop across one battery terminal connection. What is the diagnosis, and what is the repair?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The battery is healthy, so it is not the fault. Step 2: The large drop across the connection means the connection has high resistance and is starving the starter. Step 3: The diagnosis is a corroded battery terminal connection. Step 4: The repair is to clean and tighten the connection — not a new battery and not a new starter — then verify the cranking speed is normal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Name the four questions every electrical diagnosis must answer, and the tool that answers each one.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Is there power? — the multimeter, measuring voltage. Step 2: Is there ground? — the multimeter, measuring voltage drop on the ground path. Step 3: Is the signal true? — the scope, showing the waveform, and the scan tool, showing what the modules see. Step 4: Is the load working? — the multimeter and the wiring diagram, testing at the load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> After a repair, the symptom is gone but you skip the verification step. What is the risk, and what does verification look like?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The risk is that the symptom is gone for the wrong reason — or that a second fault is still there and the car comes back. Step 2: Verification means re-running the tests: the draw is normal, the voltage drop is small, the load works, and a road test shows no return of the symptom. Step 3: Only when the readings are normal is the repair confirmed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What does the ASE A6 test cover, and what is the best way to prepare for it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A6 covers general electrical diagnosis, batteries, starting and charging systems, lighting and accessories, wiring diagrams, and electronic controls and networks. Step 2: The best preparation is practicing diagnosis — working cases from complaint to confirmed repair until the test-first habit is automatic. Step 3: Memorizing answers does not work, because the test asks you to choose the best diagnosis from a set of options.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Ohm's law runs the whole course because:",
      "choices": [
        "It is the only formula in the book",
        "A voltage drop, a load test, and a draw test are all Ohm's law with a meter in your hand",
        "It replaces the wiring diagram",
        "It fixes the car by itself"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every electrical test in this course is voltage, current, and resistance measured and compared. (a) It is the central formula, but not the only idea. (c) The diagram is still needed to know where to test. (d) A formula diagnoses; it does not repair."
    },
    {
      "q": "In a diagnosis, the module is:",
      "choices": [
        "The first suspect",
        "The last suspect, after power, ground, inputs, and outputs have been checked",
        "Never a suspect",
        "The only suspect"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Module faults are rare and modules are expensive; most module codes are sensor, wiring, or actuator faults. (a) Suspecting the module first is the most expensive mistake in this course. (c) Modules can fail, just rarely. (d) The module is one suspect among many."
    },
    {
      "q": "A car that will not start in the morning, starts with a jump, and runs well all day most likely has:",
      "choices": [
        "A dead battery",
        "A parasitic draw draining the battery overnight",
        "A failed alternator",
        "A broken starter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The battery passes a load test and the charging system is healthy, so the energy is being used after switch-off. (a) A dead battery would fail a load test. (c) A failed alternator would not let the car run well all day. (d) A broken starter would not crank even with a jump."
    },
    {
      "q": "The four questions every electrical diagnosis must answer are:",
      "choices": [
        "Is there power, is there ground, is the signal true, is the load working",
        "Is it new, is it clean, is it fast, is it quiet",
        "Does it start, does it stop, does it steer, does it brake",
        "Is the battery charged, is the fuel full, is the oil new, is the tire round"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Power, ground, signal, and load are the four things a circuit needs. (b) New, clean, fast, and quiet are not diagnostic questions. (c) Starting, stopping, steering, and braking are whole-car systems. (d) Those are maintenance items, not a diagnosis."
    },
        {
      "q": "A customer returns a week after a repair with the same symptom. What does that tell you about the verification step?",
      "choices": [
        "The repair was verified and the symptom is new",
        "The repair was not verified properly — the root cause was never confirmed fixed",
        "The customer is using the car wrong",
        "Verification is only for new cars"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A comeback with the same symptom means verification did not confirm the fix. (a) is wrong: the same symptom returning means the same fault is still there. (c) is wrong: blaming the customer skips the retest. (d) is wrong: verification applies to every repair."
    },
    {
      "q": "The most expensive habit in electrical diagnosis is:",
      "choices": [
        "Testing too much",
        "Replacing parts one after another until the symptom goes away",
        "Reading the wiring diagram",
        "Using a multimeter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The parts cannon wastes money on parts that were never the fault. (a) Testing is cheap and fast. (c) Reading the diagram prevents mistakes. (d) The multimeter is the main diagnostic tool."
    },
    {
      "q": "ASE A6 covers:",
      "choices": [
        "Only batteries",
        "General electrical diagnosis, batteries, starting and charging, lighting and accessories, wiring diagrams, and electronic controls and networks",
        "Only transmissions",
        "Only engines"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A6 covers the whole electrical system. (a) Batteries are only one area. (c) Transmissions are ASE A2 and A3. (d) Engines are ASE A1."
    },
    {
      "q": "The best preparation for the ASE A6 test is:",
      "choices": [
        "Memorizing the answers in this course",
        "Practicing diagnosis until the test-first habit is automatic",
        "Buying the most expensive tools",
        "Skipping the practice exams"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The test asks you to choose the best diagnosis from options — the skill is the habit. (a) Memorized answers do not transfer to new scenarios. (c) Tools do not take the test. (d) Practice exams are part of preparation, not something to skip."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Electrical Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Ohm's law runs the whole course — V = IR is the voltage drop test, the load test, and the draw test.</p>\n<p><strong>Diagnosis chain:</strong> Listen → look → check basics → test → find the circuit → repair the named part → verify.</p>\n<p><strong>The four questions:</strong> Is there power? Is there ground? Is the signal true? Is the load working?</p>\n<p><strong>The system:</strong> Diagram (how it should work) · Multimeter (the numbers) · Scope (the patterns) · Scan tool (what the modules see).</p>\n<p><strong>ASE A6:</strong> General diagnosis, batteries, starting, charging, lighting, accessories, diagrams, controls, networks. Passing the tests alone does not certify you — ASE also requires hands-on work experience before the credential is issued.</p>\n<p><strong>Self-check:</strong> Work a dead-battery case from complaint to confirmed repair without replacing a part on a guess. If you can, you have this course.</p>\n"
};
