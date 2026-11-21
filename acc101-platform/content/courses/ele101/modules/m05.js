// ele101 - Module 5: Lockout/Tagout & De-energized Work
module.exports = {
  "number": 5,
  "slug": "lockout-tagout-de-energized-work",
  "title": "Lockout/Tagout & De-energized Work",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what lockout/tagout is and why it prevents the leading cause of electrical deaths.",
    "List the steps for establishing an electrically safe work condition.",
    "Explain how to test for absence of voltage, including live-dead-live meter verification.",
    "Describe the difference between a lock and a tag, and when each is used.",
    "Explain group lockout and why each worker applies their own lock."
  ],
  "sections": [
    {
      "heading": "What Lockout/Tagout Does",
      "html": "<p><strong>Lockout/tagout (LOTO)</strong> is the procedure that keeps equipment from being re-energized while someone is working on it. A lock physically holds the disconnect in the off position so no one can turn it on; a tag warns that the equipment is locked out and must not be operated. Together they are the reason an electrician can open a panel, pull wire, and make connections knowing the power will stay off. Most electrical deaths do not happen while the power is known to be on — they happen when someone believed it was off and it was not, or when someone else turned it back on.</p>\n<p>LOTO is required by OSHA and by NFPA 70E, and it applies to every energy source, not just electricity: stored energy in capacitors, spring-loaded mechanisms, and pneumatic or hydraulic pressure must all be controlled before work begins. The procedure is written down for each piece of equipment, and the written procedure is followed exactly — no improvising, no skipping steps because the job is small.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Your lock is your life. Only you remove your lock, and only after you have finished your work and confirmed the area is clear. Nobody — not a supervisor, not a foreman — removes another worker's lock.</div>"
    },
    {
      "heading": "The Electrically Safe Work Condition",
      "html": "<p>NFPA 70E defines an <strong>electrically safe work condition</strong> as a state in which the equipment is disconnected from all energy sources, locked out and tagged out, and tested to verify the absence of voltage. The steps, in order, are: identify all sources of power; open the disconnecting means; apply locks and tags; release or restrain stored energy; and test for the absence of voltage. Only after all five steps is the equipment safe to work on.</p>\n<p>Identifying all sources matters because equipment is often fed from more than one place: a panel may have a main feed and a control feed, a motor may be fed from two panels, and a solar or generator system may back-feed a circuit. The written procedure lists every source, and the electrician checks each one. Skipping a source is how equipment that looks dead becomes live again.</p>"
    },
    {
      "heading": "Testing for Absence of Voltage: Live-Dead-Live",
      "html": "<p>Testing is done with a meter rated for the voltage being tested, and the meter itself is verified before and after the test. This is the <strong>live-dead-live</strong> check: first, test the meter on a known live source and confirm it reads voltage; then test the equipment and confirm it reads zero; then test the meter again on the known live source and confirm it still reads voltage. If the meter fails the first or the last check, the test means nothing — the meter could be broken and showing zero on a live circuit.</p>\n<p>The test is done phase-to-phase and phase-to-ground at every point where work will be done, because a single blown fuse or an open switch can leave one phase live while the others read zero. The tester wears the PPE the hazard requires during the test, stands to the side of the equipment, and treats the equipment as live until the test proves otherwise. Only after the test is complete and the lock is on does the work begin.</p>"
    },
    {
      "heading": "Locks, Tags & Group Lockout",
      "html": "<p>A <strong>lock</strong> is a physical device that holds a disconnect open; a <strong>tag</strong> is a warning label attached to the lock or the disconnect. A tag alone is never a substitute for a lock — tags can be ignored, fall off, or be removed, and a tag does not physically prevent the switch from moving. When both are used, the lock provides the protection and the tag provides the information: who locked it out, when, and why.</p>\n<p>When several workers are on the same equipment, <strong>group lockout</strong> is used: a lockbox holds the keys to the equipment locks, and every worker puts their own personal lock on the box. The equipment cannot be re-energized until every worker has removed their lock. If you leave the area, your lock stays until you return and remove it yourself. Shift changes are handled by a formal handover — the incoming worker applies their lock before the outgoing worker removes theirs, so the equipment is never unlocked, even for a moment.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Lockout/tagout keeps equipment de-energized while work is done; the lock physically prevents re-energizing, and the tag warns.</li>\n<li>An electrically safe work condition means: identify all sources, open the disconnect, lock and tag, release stored energy, and test for absence of voltage.</li>\n<li>Verify absence of voltage with live-dead-live: prove the meter on a known live source, test the equipment, prove the meter again.</li>\n<li>A tag is never a substitute for a lock.</li>\n<li>Group lockout uses a lockbox and every worker's own lock; only you remove your lock.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting that a breaker is off because someone said so. Verify it yourself, with a meter you have proven, every time — the person who said it may be wrong, or may be talking about a different breaker.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Removing another worker's lock \"to save time.\" Never remove a lock that is not yours. If the worker is gone, the supervisor follows the formal removal procedure — the lock is not yours to touch.</div>\n<p><strong>Ready-to-Work link:</strong> If you can list the five steps of an electrically safe work condition, explain live-dead-live, and state the lock vs. tag rule, you have this module. Module 6 covers hand tools.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "The procedure of locking and tagging energy-isolating devices so equipment cannot be re-energized while work is done."
    },
    {
      "term": "Electrically safe work condition",
      "def": "Equipment disconnected from all energy sources, locked out and tagged out, and tested to verify absence of voltage."
    },
    {
      "term": "Lock",
      "def": "A physical device that holds a disconnect in the off position so it cannot be operated."
    },
    {
      "term": "Tag",
      "def": "A warning label attached to a locked-out device stating who locked it out and why; never a substitute for a lock."
    },
    {
      "term": "Live-dead-live",
      "def": "Verifying a meter on a known live source, testing the equipment for zero voltage, then verifying the meter again."
    },
    {
      "term": "Absence of voltage",
      "def": "Verified zero voltage at the points where work will be done, tested phase-to-phase and phase-to-ground."
    },
    {
      "term": "Stored energy",
      "def": "Energy held in a system after disconnection, such as in capacitors, springs, or pressurized lines."
    },
    {
      "term": "Group lockout",
      "def": "A lockbox system where every worker puts their own lock on the box holding the equipment-lock keys."
    },
    {
      "term": "Lockbox",
      "def": "A box that holds the keys to equipment locks, secured by each worker's personal lock during group lockout."
    },
    {
      "term": "Disconnecting means",
      "def": "A switch or breaker that disconnects equipment from its power source."
    },
    {
      "term": "Energy-isolating device",
      "def": "A device that physically prevents the transmission or release of energy, such as a disconnect switch."
    },
    {
      "term": "Back-feed",
      "def": "Power flowing into a circuit from an unexpected source, such as a generator or solar system."
    },
    {
      "term": "Qualified person",
      "def": "A person with the skills and knowledge to perform a task safely and trained to recognize its hazards."
    },
    {
      "term": "Written LOTO procedure",
      "def": "The documented, equipment-specific steps for locking out and tagging out a piece of equipment."
    },
    {
      "term": "NFPA 70E",
      "def": "The standard for electrical safety in the workplace, including lockout/tagout and the electrically safe work condition."
    }
  ],
  "video": {
    "title": "OSHA Lockout Tagout Safety Video:  Electrical LOTO Procedure Training",
    "embedUrl": "https://www.youtube.com/embed/HcvJ_Xp-ofo",
    "note": "A walkthrough of the electrical lockout/tagout procedure. As you watch, write down the five steps of an electrically safe work condition in order.",
    "more": [
      {
        "title": "What Is Lockout Tagout? The 4 Steps Explained",
        "url": "https://www.youtube.com/watch?v=o5CWnUFsevo"
      },
      {
        "title": "The 7 Steps of LOTO: How to Perform Lockout Tagout",
        "url": "https://www.youtube.com/watch?v=ewwCl9QUMGU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the five steps for establishing an electrically safe work condition, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Identify all sources of power. Step 2: Open the disconnecting means. Step 3: Apply locks and tags. Step 4: Release or restrain stored energy. Step 5: Test for absence of voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the live-dead-live meter check in three steps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test the meter on a known live source and confirm it reads voltage. Step 2: Test the equipment and confirm it reads zero. Step 3: Test the meter again on the known live source and confirm it still reads voltage — if it fails either check, the test means nothing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A tag is on a disconnect but no lock. Can the work begin? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: A tag alone is never a substitute for a lock — tags can be ignored, fall off, or be removed, and a tag does not physically prevent the switch from moving. Step 3: The lock provides the protection; the tag provides the information.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Three electricians will work on the same motor. How does group lockout protect all three?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The keys to the equipment locks go in a lockbox. Step 2: Each worker puts their own personal lock on the box. Step 3: The equipment cannot be re-energized until every worker has removed their lock — so no one is exposed while another worker is still inside.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must absence of voltage be tested phase-to-phase AND phase-to-ground?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A single blown fuse or open switch can leave one phase live while others read zero. Step 2: Testing phase-to-phase alone could miss a phase that is live to ground. Step 3: Testing both ways at every point where work will be done catches a partially energized circuit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Your shift is ending and your lock is on a panel. The next shift's electrician has arrived. What is the correct handover?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The incoming electrician applies their lock first. Step 2: Only then do you remove yours. Step 3: The equipment is never unlocked, even for a moment, and only you remove your own lock.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Lockout/tagout exists primarily to:",
      "choices": [
        "Speed up the work",
        "Prevent equipment from being re-energized while someone is working on it",
        "Save money on breakers",
        "Keep tools organized"
      ],
      "answer": 1,
      "explanation": "Correct: (b). LOTO keeps equipment de-energized while work is done. (a) LOTO adds steps; it does not speed work up. (c) Saving money is not the purpose. (d) Tool organization is unrelated."
    },
    {
      "q": "An electrically safe work condition requires all of the following EXCEPT:",
      "choices": [
        "Identifying all power sources",
        "Locking out and tagging out",
        "Testing for absence of voltage",
        "Working quickly so the power is off for less time"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Speed is not a step of the safe work condition. (a), (b), and (c) are all required steps."
    },
    {
      "q": "The live-dead-live check is:",
      "choices": [
        "Testing the meter on a known live source, testing the equipment, then testing the meter again",
        "Testing three different meters",
        "Testing the equipment three times",
        "A test done only on live equipment"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Live-dead-live proves the meter works before and after the zero-voltage test. (b) Three meters are not involved. (c) Testing the equipment three times does not prove the meter works. (d) It is a test for absence of voltage on de-energized equipment."
    },
    {
      "q": "A tag alone is:",
      "choices": [
        "Sufficient protection",
        "Never a substitute for a lock",
        "Better than a lock",
        "Only needed on large jobs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tag warns but does not physically prevent operation; a lock is required. (a) A tag alone is not sufficient. (c) A lock is the physical protection. (d) Tags are used wherever LOTO applies."
    },
    {
      "q": "In group lockout, each worker:",
      "choices": [
        "Shares one lock",
        "Puts their own personal lock on the lockbox",
        "Removes the first worker's lock",
        "Works without a lock"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every worker puts their own lock on the lockbox holding the equipment-lock keys. (a) Sharing one lock would let one person re-energize while others are exposed. (c) No one removes another worker's lock. (d) Working without a lock defeats group lockout."
    },
    {
      "q": "Who may remove your lock from a locked-out disconnect?",
      "choices": [
        "Your supervisor, to save time",
        "Any coworker who needs the equipment",
        "Only you, after your work is finished and the area is clear",
        "The inspector"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Only you remove your own lock. (a) A supervisor must follow the formal removal procedure, not remove it casually. (b) A coworker never removes another worker's lock. (d) The inspector does not remove locks."
    },
    {
      "q": "Stored energy that must be controlled before work includes:",
      "choices": [
        "Only the main power feed",
        "Capacitors, springs, and pressurized lines",
        "The worker's lunch",
        "The building's lights"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors, springs, and pneumatic or hydraulic pressure hold energy after disconnection. (a) The main feed is one source, not the only one. (c) and (d) are not stored energy."
    },
    {
      "q": "A circuit that looks dead may still be live because of:",
      "choices": [
        "Back-feed from a generator or solar system",
        "The color of the wire",
        "The time of day",
        "The brand of the panel"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Generators and solar systems can back-feed a circuit. (b) Wire color does not energize a circuit. (c) Time of day is irrelevant. (d) Panel brand is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Lockout/Tagout & De-energized Work: Quick Reference</h3>\n<p><strong>Core idea:</strong> Your lock is your life — only you remove your lock, and only after your work is done and the area is clear.</p>\n<p><strong>Electrically safe work condition:</strong> Identify all sources → Open the disconnect → Lock and tag → Release stored energy → Test for absence of voltage.</p>\n<p><strong>Live-dead-live:</strong> Prove the meter on a known live source → Test the equipment (zero) → Prove the meter again.</p>\n<p><strong>Lock vs. tag:</strong> The lock physically prevents operation; the tag warns. A tag is never a substitute for a lock.</p>\n<p><strong>Group lockout:</strong> Lockbox holds the equipment-lock keys; every worker puts their own lock on the box.</p>\n<p><strong>Self-check:</strong> List the five steps in order and explain live-dead-live, without looking.</p>\n"
};
