module.exports = {
  "number": 12,
  "slug": "inspection-maintenance-troubleshooting",
  "title": "Inspection, Maintenance & Troubleshooting",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe what an inspector checks on a low-voltage installation.",
    "Explain the acceptance test for a fire alarm system.",
    "Describe a maintenance schedule for low-voltage systems.",
    "Explain a structured troubleshooting method: divide and conquer.",
    "Describe the records a system must keep over its life."
  ],
  "sections": [
    {
      "heading": "What the Inspector Checks",
      "html": "<p>Before a low-voltage system is put into service, it is inspected and tested, and the inspector is not looking for perfection — they are looking for compliance and for proof. The inspector checks the permit and the approved drawings, the cable types and jacket markings, the separation from power conductors, the grounding and bonding, the terminations, the labeling, and the test results. For a fire alarm system, the inspector also checks the device placement against NFPA 72, the battery calculation, and the as-built drawings, and they witness the acceptance test.</p><p>The inspector's authority is the adopted code — in Michigan, the 2023 NEC with the Part 8 amendments adopted March 12, 2024, plus NFPA 72 for fire alarms and the local building and fire codes. The technician's job is to make the inspector's job easy: keep the work clean, keep the documentation complete, and never hide a problem behind a ceiling tile. A failed inspection is not a disaster — it is a list of corrections, and the corrections are made, the work is re-inspected, and the system is accepted. A system that is never inspected is a system nobody has verified, and that is the real disaster.</p>"
    },
    {
      "heading": "The Fire Alarm Acceptance Test",
      "html": "<p>The fire alarm acceptance test is the most formal test in low-voltage work, and it is done with the inspector and the building owner present. Every initiating device is tested: every smoke detector is tested with smoke or an approved test method, every heat detector is tested, every pull station is operated, and every waterflow switch is tested. Every notification appliance is tested: every horn sounds, every strobe flashes, and the sound level is measured. The panel is tested in every state — normal, alarm, trouble, and supervisory — and the batteries are tested under load with the normal power off.</p><p>The test is documented on a record of completion, which lists every device, every test result, and every deficiency found and corrected. The system is not accepted until every deficiency is corrected and re-tested. That record stays with the building for the life of the system, and it is the baseline for every future inspection and test. A technician who tests thoroughly and documents honestly is the person the inspector trusts — and trust is earned one acceptance test at a time.</p>"
    },
    {
      "heading": "Maintenance: The System After Acceptance",
      "html": "<p>A low-voltage system is not finished at acceptance — it is just beginning its service life, and it needs maintenance. Fire alarm systems have a defined inspection, testing, and maintenance schedule under NFPA 72: weekly, monthly, semi-annual, and annual tasks, from checking the panel for trouble signals to testing every detector and notification appliance annually and load-testing the batteries. Data cabling needs less, but it still needs periodic inspection: patch panels and racks checked for damage, labels verified, and test results kept current when cables are added or moved.</p><p>Maintenance is also where most faults are found: a detector that has drifted out of sensitivity, a battery that has lost capacity, a camera that has drifted out of aim, a cable that has been crushed by a new ceiling tile. The maintenance technician's routine is to test, to measure, and to record — and to report what they find, including the things that are not yet failures but will be. A system that is maintained is a system that works when it is needed; a system that is ignored is a system that fails at the worst possible time.</p>"
    },
    {
      "heading": "Troubleshooting: Divide and Conquer",
      "html": "<p>Every low-voltage fault can be found with one method: divide and conquer. Start by defining the fault exactly — which device, which circuit, which symptom, and when it happens. Then split the system in half: test at the midpoint and decide which half contains the fault. Test again at the midpoint of the faulty half, and keep halving until the fault is isolated to one device, one connection, or one length of cable. Then fix it, test it, and document it.</p><p>The method works because it is systematic, and it works on every system in this course: a data cable that fails certification (is it the termination or the cable?), a fire alarm zone in trouble (is it the panel, the wiring, or a device?), a camera with no picture (is it the camera, the PoE, the cable, or the recorder?), a nurse-call station that does not answer (is it the station, the wiring, or the master station?). The technician who guesses replaces parts until the problem goes away; the technician who divides and conquers finds the fault and fixes it once. And the safety rule applies to troubleshooting too: the system is de-energized, locked out and tagged out, and tested dead before any hands go into a panel or a box, under a licensed supervisor, per NFPA 70E.</p><div class=\"callout\"><strong>Key idea:</strong> Divide and conquer: define the fault, split the system in half, test, and keep halving until the fault is isolated to one device, one connection, or one length of cable.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>The inspector checks the permit, the drawings, the cable types, the separation, the grounding, the terminations, the labels, and the test results.</li><li>The fire alarm acceptance test exercises every device and every panel state, with the inspector and owner present, and produces a record of completion.</li><li>NFPA 72 sets the inspection, testing, and maintenance schedule for fire alarm systems; data and security systems need periodic inspection too.</li><li>Troubleshooting is divide and conquer: define the fault, split the system, test, and keep halving.</li><li>Records — test reports, as-builts, and the record of completion — stay with the building for the life of the system.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Hiding a problem behind a ceiling tile before the inspector arrives. The inspector will find it, the fix will cost more, and the trust is gone — fix it before the inspection, and show your work.</div><div class=\"callout\"><strong>Common mistake:</strong> Replacing parts at random until a fault goes away. Divide and conquer finds the fault once; guessing replaces good parts and leaves the real fault in place.</div><p><strong>Ready-to-Work link:</strong> If you can describe an acceptance test, outline a maintenance schedule, and walk through divide-and-conquer on a dead camera, you have this module — and this course. The final exam covers all twelve modules.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Acceptance test",
      "def": "The formal test of a new system, witnessed by the inspector and owner, proving every device and function works."
    },
    {
      "term": "Record of completion",
      "def": "The documented record of a fire alarm system's acceptance test, listing every device and result."
    },
    {
      "term": "Inspection, testing, and maintenance (ITM)",
      "def": "The scheduled routine of inspecting, testing, and maintaining a fire alarm system under NFPA 72."
    },
    {
      "term": "Divide and conquer",
      "def": "A troubleshooting method: split the system in half, test, and keep halving until the fault is isolated."
    },
    {
      "term": "Deficiency",
      "def": "A fault or non-compliance found during inspection or testing, which must be corrected and re-tested."
    },
    {
      "term": "As-built drawings",
      "def": "Drawings updated to show the installation as it was actually built, including cable routes and labels."
    },
    {
      "term": "Sensitivity",
      "def": "How much smoke a detector needs to sense before it alarms; detectors drift with dust and age."
    },
    {
      "term": "Supervisory signal",
      "def": "A panel signal reporting a condition that could prevent proper operation, such as a closed sprinkler valve."
    },
    {
      "term": "Trouble signal",
      "def": "A panel signal reporting a fault in the system, such as an open circuit or a low battery."
    },
    {
      "term": "Authority having jurisdiction (AHJ)",
      "def": "The official or agency that enforces the code and approves the installation."
    },
    {
      "term": "Witness test",
      "def": "A test performed in the presence of the inspector or owner."
    },
    {
      "term": "Maintenance schedule",
      "def": "The planned routine of inspections and tests over a system's service life."
    }
  ],
  "video": {
    "title": "How to Set Up an NVR Camera System",
    "embedUrl": "https://www.youtube.com/embed/x-C9u8floUI",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How to Use Your Security Camera System",
        "url": "https://www.youtube.com/watch?v=_5UwnFL4WvU"
      },
      {
        "title": "Fluke Networks LinkIQ Duo Copper Cable Testing Tutorial",
        "url": "https://www.youtube.com/watch?v=lbz2hNsKeVQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fire alarm acceptance test finds that one horn does not sound. List the steps to find the fault using divide and conquer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Define the fault — one horn silent, all others sound. Step 2: Check the horn's connections at the device — is power reaching it? Step 3: If no power at the device, test at the midpoint of the circuit to find which half contains the fault. Step 4: Keep halving until the fault is isolated — a bad connection, a broken wire, or a bad horn — then fix, re-test, and document.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An inspector fails a data cabling job because the test reports are missing for 20 of 120 cables. What is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test the 20 missing cables with the certifier. Step 2: File the reports with the rest of the handover package and verify every cable ID matches its label. Step 3: Request re-inspection. (The lesson: test and file every cable as you go, not at the end.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A camera shows no picture. The recorder shows the camera as offline. Walk through divide and conquer in four steps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the camera's link light and PoE — is it powered? Step 2: Swap the patch cord for a known-good one. Step 3: Test the cable with a tester or move the camera to a known-good drop. Step 4: Try a different switch port. The step that restores the picture identifies the faulty half.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does NFPA 72 require a schedule of inspection, testing, and maintenance instead of a single acceptance test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Systems degrade — detectors drift with dust, batteries lose capacity, connections loosen. Step 2: A system that passed at acceptance can fail a year later without anyone noticing. Step 3: The schedule catches degradation before it becomes a failure, so the system works when it is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A fire alarm panel shows a trouble signal every morning and clears by noon. What is your troubleshooting approach?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Define the fault — a time-dependent trouble, likely temperature or condensation related. Step 2: Read the panel's history to identify which circuit or device reports the trouble. Step 3: Check that device and its wiring for a loose connection, moisture, or a marginal battery that recovers as the building warms. Step 4: Fix, monitor, and document.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List what belongs in the handover package for a low-voltage system at the end of a job.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test reports for every cable and every device. Step 2: As-built drawings with cable routes, labels, and zone maps. Step 3: Panel schedules and the record of completion for fire alarm work. Step 4: Equipment manuals, warranty paperwork, and the maintenance schedule.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The fire alarm acceptance test is performed:",
      "choices": [
        "By the installer alone, with no witnesses",
        "With the inspector and the building owner present, testing every device and panel state",
        "Only if the system fails",
        "Only on the first device"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The acceptance test is witnessed and tests every device and every panel state. (a) The installer does not test alone — the inspector witnesses it. (c) The test happens on every new system, not only failed ones. (d) Every device is tested, not just the first."
    },
    {
      "q": "A record of completion is:",
      "choices": [
        "The installer's invoice",
        "The documented record of the fire alarm acceptance test, listing every device and result",
        "A cable label",
        "A warranty card"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The record of completion documents the acceptance test. (a) An invoice is a billing document. (c) A label identifies a cable. (d) A warranty card is separate paperwork."
    },
    {
      "q": "Divide-and-conquer troubleshooting means:",
      "choices": [
        "Replacing parts at random",
        "Splitting the system in half, testing, and keep halving until the fault is isolated",
        "Ignoring the fault until it goes away",
        "Replacing the whole system"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Split, test, halve, repeat until the fault is isolated. (a) Random replacement is guessing, not troubleshooting. (c) Ignoring a fault leaves it in place. (d) Replacing the whole system is drastic and unnecessary."
    },
    {
      "q": "NFPA 72 requires a schedule of inspection, testing, and maintenance because:",
      "choices": [
        "It creates paperwork",
        "Systems degrade over time and a system that passed at acceptance can fail later",
        "Inspectors need work",
        "Batteries never fail"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Detectors drift, batteries lose capacity, connections loosen — the schedule catches it. (a) Paperwork is a byproduct, not the reason. (c) Inspectors do not set the schedule for their own benefit. (d) Batteries do fail — that is one reason for the schedule."
    },
    {
      "q": "A deficiency found during an inspection is:",
      "choices": [
        "Ignored",
        "A fault or non-compliance that must be corrected and re-tested",
        "The installer's opinion",
        "A normal part of the system"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A deficiency must be corrected and re-tested before acceptance. (a) Ignoring it leaves a non-compliant system. (c) It is a finding, not an opinion. (d) A deficiency is a fault, not a normal feature."
    },
    {
      "q": "A camera shows no picture and the recorder shows it offline. The first divide-and-conquer step is to:",
      "choices": [
        "Replace the recorder",
        "Check whether the camera is powered (PoE and link light)",
        "Rewire the building",
        "Buy a new camera"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Check power first — the simplest cause. (a) Replacing the recorder is drastic when one camera is offline. (c) Rewiring is not a first step. (d) A new camera does not fix a power or cable fault."
    },
    {
      "q": "The as-built drawings for a low-voltage system show:",
      "choices": [
        "The original design only",
        "The installation as it was actually built, including cable routes and labels",
        "The installer's schedule",
        "The price of the job"
      ],
      "answer": 1,
      "explanation": "Correct: (b). As-builts show what was actually installed. (a) The original design is the design drawings. (c) The schedule is a separate document. (d) Price is on the invoice."
    },
    {
      "q": "During troubleshooting, before putting hands into a panel or box, the technician must:",
      "choices": [
        "Work live to save time",
        "De-energize, lock out, tag out, and test dead under a licensed supervisor",
        "Ask a coworker to watch",
        "Wear gloves only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). De-energize, lockout/tagout, test dead, per NFPA 70E. (a) This program never instructs live work. (c) A watcher is not a safety procedure. (d) Gloves alone do not make live work safe."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Inspection, Maintenance & Troubleshooting: Quick Reference</h3>\n<p><strong>Core idea:</strong> A system is not done at acceptance — it is inspected, tested, maintained, and troubleshot for its whole service life, and the records stay with the building.</p>\n<p><strong>Inspection:</strong> Permit, drawings, cable types, separation, grounding, terminations, labels, test results — all checked against the adopted code (2023 NEC + Michigan Part 8, March 12, 2024).</p>\n<p><strong>Acceptance test:</strong> Every device, every panel state, witnessed by the inspector and owner, documented on a record of completion.</p>\n<p><strong>Maintenance:</strong> NFPA 72 sets the ITM schedule for fire alarms; data and security systems need periodic inspection too. Systems degrade — detectors drift, batteries lose capacity.</p>\n<p><strong>Troubleshooting:</strong> Divide and conquer — define the fault, split the system, test, keep halving until the fault is isolated to one device, one connection, or one length of cable.</p>\n<p><strong>Self-check:</strong> Walk through a dead-camera fault and an acceptance test from memory. If you can, you have this course.</p>\n"
};
