module.exports = {
  "number": 10,
  "slug": "testing-certifying-data-cabling",
  "title": "Testing & Certifying Data Cabling",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between verification, qualification, and certification testing.",
    "Describe the tests a copper certification performs: wire map, length, loss, and crosstalk.",
    "Describe fiber testing: loss testing and OTDR testing.",
    "Explain how to read a test result and decide pass or fail.",
    "Describe the documentation a certified installation hands over."
  ],
  "sections": [
    {
      "heading": "Three Levels of Testing: Verify, Qualify, Certify",
      "html": "<p>Not all cable tests are the same, and the customer needs to know which one they are getting. <strong>Verification</strong> is the simplest: it checks that the cable is connected correctly — the wire map is right, the pairs are in the right order, and there is continuity. A basic wire-map tester does this, and it is the minimum check on every cable. <strong>Qualification</strong> goes further: it checks whether the installed cable can support a given network speed, such as Gigabit or 10-Gigabit Ethernet, by testing the signal quality. <strong>Certification</strong> is the full test: it measures the installed cable against the ANSI/TIA-568 limits for its category and produces a pass/fail result with a report.</p><p>Certification is what a commercial customer pays for, because it is a warranty document: if the cable passes certification, the manufacturer will warrant the system, and the owner has proof the installation meets the standard. A cable that only passes verification may still fail certification — the wire map can be perfect while the crosstalk is out of limits because the pairs were untwisted too far. That is why the technician tests with a certifier, not just a wire-map tester, and why the test results are filed with the job.</p>"
    },
    {
      "heading": "Copper Certification: What the Tester Measures",
      "html": "<p>A copper certifier runs a set of measurements on every pair. The <strong>wire map</strong> checks that each conductor goes to the right pin — no opens, no shorts, no crossed or split pairs. <strong>Length</strong> is measured by time-domain reflectometry and checked against the 100-meter channel limit. <strong>Insertion loss</strong> measures how much signal is lost along the cable — too much loss means the cable is too long, damaged, or the wrong category. <strong>Near-end crosstalk (NEXT)</strong> measures how much signal leaks from one pair into a neighboring pair at the near end, and <strong>return loss</strong> measures how much signal reflects back from impedance mismatches.</p><p>Each measurement has a limit for the cable's category, and the tester reports pass or fail against those limits, with a margin — how far inside or outside the limit the result sits. A cable that passes with a small margin is a warning: it works today, but a hot day or a moved patch cord could push it over. The technician's job is not just to get a pass — it is to understand the margin, fix the cause of a failure (usually a termination: too much untwist, a nicked conductor, or a wrong pair), and re-test until the result is solid.</p><div class=\"callout\"><strong>Key idea:</strong> A wire map that passes does not mean the cable passes. Certification measures loss and crosstalk too — and the usual cause of a failure is the termination, not the cable.</div>"
    },
    {
      "heading": "Fiber Testing: Loss Testing and OTDR",
      "html": "<p>Fiber is tested two ways. <strong>Insertion-loss testing</strong> (Tier 1) uses a light source at one end and a power meter at the other: the source sends a known amount of light, the meter measures how much arrives, and the difference is the loss of the whole link — connectors, splices, and the fiber itself. The result is compared to a loss budget calculated from the number of connectors and splices and the length of fiber. If the loss is over budget, something is wrong: a dirty connector, a bad splice, or a bend that is too tight.</p><p><strong>OTDR testing</strong> (Tier 2) uses an optical time domain reflectometer, which sends a pulse of light down the fiber and measures the light that reflects back, like radar. The OTDR produces a trace showing every event along the fiber — each connector, each splice, each bend — and the distance to each one. That makes it the troubleshooting tool: when a link fails its loss test, the OTDR trace shows exactly where the loss is. The OTDR needs a launch cable (a length of fiber between the tester and the link under test) so that the first connector can be measured, and the technician must clean and inspect every connector before testing — a dirty connector is the most common cause of a failed fiber test.</p>"
    },
    {
      "heading": "Reading a Result and Handing Over the Job",
      "html": "<p>A test result is only useful if someone reads it. A certification report shows the cable ID, the test standard and category, the date, the tester, and the pass/fail result for every measurement, with the margin. The technician checks that the cable ID on the report matches the label on the cable, that the standard matches the job specification, and that every cable in the job has a report. A missing report is a missing cable — the job is not complete until every cable is tested and documented.</p><p>The handover package for a certified installation includes the test reports, the as-built drawings showing cable routes and labels, the panel schedules, and the warranty paperwork. The owner keeps it, and the next technician uses it. A job handed over without test reports is a job that has to be re-tested before anyone can trust it — and re-testing costs more than testing did the first time, because the ceilings are closed and the furniture is in. Test it once, test it right, and file the results.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Verification checks the wire map; qualification checks whether the cable supports a speed; certification measures the cable against the TIA limits and produces a warranty report.</li><li>Copper certification measures wire map, length, insertion loss, NEXT, and return loss — each with a limit for the cable's category.</li><li>Fiber Tier 1 loss testing measures the whole link; Tier 2 OTDR testing shows where each loss event is.</li><li>Clean and inspect every fiber connector before testing — dirt is the most common cause of a failed fiber test.</li><li>The job is not done until every cable has a report and the reports are filed with the as-built drawings.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Handing over a job with a wire-map test only and calling it certified. A wire map cannot see crosstalk or loss — use a certifier and file the reports.</div><div class=\"callout\"><strong>Common mistake:</strong> Testing a dirty fiber connector. Clean and inspect first, every time — a speck of dust can fail a link that is otherwise perfect.</div><p><strong>Ready-to-Work link:</strong> If you can explain verification vs certification, name the copper measurements, and describe Tier 1 vs Tier 2 fiber testing, you have this module. Module 11 covers the places where the rules get stricter: special and hazardous locations.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Verification",
      "def": "Basic testing that checks a cable is connected correctly — wire map and continuity."
    },
    {
      "term": "Qualification",
      "def": "Testing that checks whether an installed cable can support a given network speed."
    },
    {
      "term": "Certification",
      "def": "Full testing that measures an installed cable against the ANSI/TIA-568 limits for its category and produces a pass/fail report."
    },
    {
      "term": "Wire map",
      "def": "A test showing that each conductor goes to the right pin, with no opens, shorts, or crossed pairs."
    },
    {
      "term": "Insertion loss",
      "def": "How much signal is lost along a cable or fiber link."
    },
    {
      "term": "Near-end crosstalk (NEXT)",
      "def": "Signal leaking from one pair into a neighboring pair at the near end of a cable."
    },
    {
      "term": "Return loss",
      "def": "Signal reflecting back from impedance mismatches along a cable."
    },
    {
      "term": "Loss budget",
      "def": "The maximum allowed loss for a fiber link, calculated from its connectors, splices, and length."
    },
    {
      "term": "OTDR",
      "def": "Optical time domain reflectometer — an instrument that locates loss events along a fiber by sending light pulses and measuring reflections."
    },
    {
      "term": "Launch cable",
      "def": "A length of fiber between the OTDR and the link under test, so the first connector can be measured."
    },
    {
      "term": "Tier 1 testing",
      "def": "Fiber insertion-loss testing with a light source and power meter."
    },
    {
      "term": "Tier 2 testing",
      "def": "Fiber testing with an OTDR, showing each event and its distance."
    },
    {
      "term": "Split pair",
      "def": "A wiring fault in which conductors from two different pairs are mixed at a termination."
    },
    {
      "term": "Margin",
      "def": "How far a test result sits inside (or outside) its limit."
    }
  ],
  "video": {
    "title": "Fluke Networks LinkIQ Duo Copper Cable Testing Tutorial",
    "embedUrl": "https://www.youtube.com/embed/lbz2hNsKeVQ",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How to Test Fiber Optic Cable Using an OTDR",
        "url": "https://www.youtube.com/watch?v=fsIrKGci_gU"
      },
      {
        "title": "OTDR Testing Explained: How It Works and Reading Traces",
        "url": "https://www.youtube.com/watch?v=7Tk4VctrK1s"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer asks for a \"certified\" installation but the installer only ran a wire-map test. Explain the difference and what is missing.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A wire-map test only checks continuity and pin order — it cannot see crosstalk or loss. Step 2: Certification measures wire map, length, insertion loss, NEXT, and return loss against the TIA limits for the cable's category. Step 3: The customer needs a certifier test and a report for every cable, or there is no proof the system meets the standard and no manufacturer warranty.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A Cat6A cable fails its NEXT test but passes its wire map. What is the most likely cause, and how do you fix it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The most likely cause is the termination — the pairs were untwisted too far back. Step 2: Re-terminate with the untwist kept to about half an inch. Step 3: Re-test with the certifier and confirm the NEXT result passes with a solid margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A fiber link fails its Tier 1 loss test. The loss is 1.2 dB over budget. Describe how you find the cause using an OTDR.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Clean and inspect the connectors first — dirt is the most common cause. Step 2: Connect the OTDR with a launch cable and run a Tier 2 trace. Step 3: Read the trace — each event (connector, splice, bend) shows its location and loss; repair the event with the excess loss and re-test.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A fiber link has 4 connectors (0.5 dB each allowed) and 2 splices (0.3 dB each allowed) and 300 meters of fiber (0.4 dB allowed). What is the loss budget?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Connectors: 4 × 0.5 = 2.0 dB. Step 2: Splices: 2 × 0.3 = 0.6 dB. Step 3: Fiber: 0.4 dB. Total budget = 2.0 + 0.6 + 0.4 = 3.0 dB. A measured loss above 3.0 dB fails.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does an OTDR test need a launch cable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The OTDR has a dead zone at the start of the trace where it cannot measure. Step 2: The launch cable moves that dead zone away from the first connector of the link under test. Step 3: Without it, the loss of the first connector cannot be measured.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A certification report shows a cable that passes with a 1 dB margin on NEXT. Is that a good result? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It passes, but a 1 dB margin is thin — the cable is close to the limit. Step 2: A hot day, a moved patch cord, or a little more untwist could push it over. Step 3: Check the termination, re-terminate if the untwist is long, and aim for a comfortable margin before handover.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Verification testing checks:",
      "choices": [
        "Whether the cable can support 10-Gigabit Ethernet",
        "That the cable is connected correctly — wire map and continuity",
        "The full TIA limits for the cable category",
        "The fiber's OTDR trace"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Verification is the basic wire-map and continuity check. (a) That is qualification. (c) That is certification. (d) An OTDR trace is Tier 2 fiber testing."
    },
    {
      "q": "Certification testing differs from verification because it:",
      "choices": [
        "Is faster",
        "Measures the cable against the TIA limits for its category and produces a pass/fail report",
        "Needs no tester",
        "Only checks the wire map"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Certification measures loss, crosstalk, and return loss against the category limits. (a) Certification is slower and more thorough. (c) It needs a certifier. (d) Checking only the wire map is verification."
    },
    {
      "q": "A copper cable fails NEXT but passes its wire map. The most likely cause is:",
      "choices": [
        "The cable is too short",
        "The pairs were untwisted too far at the termination",
        "The wrong label was used",
        "The cable is the wrong color"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Excess untwist destroys pair balance and causes crosstalk failures. (a) A short cable does not cause NEXT failure. (c) A label is documentation, not a test fault. (d) Color does not affect performance."
    },
    {
      "q": "Tier 1 fiber testing uses:",
      "choices": [
        "An OTDR only",
        "A light source and a power meter to measure the whole link's loss",
        "A voltmeter",
        "A wire-map tester"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tier 1 is insertion-loss testing with a source and meter. (a) An OTDR is Tier 2. (c) A voltmeter measures voltage, not light. (d) A wire-map tester is for copper."
    },
    {
      "q": "An OTDR is used to:",
      "choices": [
        "Measure voltage",
        "Locate loss events along a fiber and show their distance",
        "Crimp connectors",
        "Pull cable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The OTDR trace shows each connector, splice, and bend with its distance. (a) A voltmeter measures voltage. (c) A crimper makes connectors. (d) A pull string pulls cable."
    },
    {
      "q": "The most common cause of a failed fiber test is:",
      "choices": [
        "A dirty connector",
        "A cable that is too long",
        "The wrong color fiber",
        "A missing label"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Dirt on a connector is the most common cause — clean and inspect first. (b) Excess length adds loss but is less common as a cause. (c) Fiber color does not affect loss. (d) A missing label is a documentation error."
    },
    {
      "q": "A launch cable is used with an OTDR to:",
      "choices": [
        "Make the test faster",
        "Move the OTDR's dead zone away from the first connector so it can be measured",
        "Power the OTDR",
        "Connect the OTDR to the internet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The launch cable lets the first connector be measured. (a) Speed is not the purpose. (c) The OTDR has its own power. (d) The OTDR does not need the internet."
    },
    {
      "q": "The handover package for a certified installation includes:",
      "choices": [
        "Only the invoice",
        "Test reports for every cable, as-built drawings, panel schedules, and warranty paperwork",
        "Only the cable boxes",
        "A verbal promise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The handover is test reports, as-builts, schedules, and warranty paperwork. (a) An invoice alone proves nothing about the installation. (c) Empty boxes are not documentation. (d) A verbal promise is not a record."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Testing & Certifying: Quick Reference</h3>\n<p><strong>Core idea:</strong> Verification checks the wire map; qualification checks a speed; certification measures the cable against the TIA limits and produces the warranty report.</p>\n<p><strong>Copper:</strong> Wire map · length · insertion loss · NEXT · return loss — each with a limit for the category. Most failures are terminations: too much untwist.</p>\n<p><strong>Fiber:</strong> Tier 1 — light source and power meter, whole-link loss vs a loss budget · Tier 2 — OTDR trace, shows each event and its distance. Launch cable needed for the first connector.</p>\n<p><strong>Watch out:</strong> Clean and inspect every fiber connector before testing. File a report for every cable — a missing report is a missing cable.</p>\n<p><strong>Self-check:</strong> Explain the three levels of testing and what an OTDR trace shows. If you can, you have this module.</p>\n"
};
