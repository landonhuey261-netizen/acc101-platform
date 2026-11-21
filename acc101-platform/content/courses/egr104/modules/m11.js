// egr104 - Module 11: Electrical Safety & Lockout/Tagout
module.exports = {
  "number": 11,
  "slug": "electrical-safety-lockout-tagout",
  "title": "Electrical Safety & Lockout/Tagout",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how electric shock happens and why even low voltages can be dangerous.",
    "State the steps of lockout/tagout: identify, shut down, isolate, lock, tag, release stored energy, verify.",
    "Explain test-before-touch and why “off” is not the same as “safe”.",
    "Name the PPE used for electrical work and when each item is needed.",
    "Explain what a GFCI does and why it matters."
  ],
  "sections": [
    {
      "heading": "How Shock Happens — and Why Small Numbers Still Kill",
      "html": "<p>Electric shock happens when current flows through your body. It is the current that hurts you, not the voltage by itself — but voltage is what pushes that current through your skin's resistance. Dry skin resists well (tens of thousands of ohms), but wet or sweaty skin can drop to around 1,000 Ω, and a cut drops it far lower. At 120 V, even 1,000 Ω lets 120 mA flow — and currents as small as 30 mA through the chest can interfere with the heart. That is why mains voltage kills people every year, and why “it's only 120 volts” is never a reason to be careless.</p>\n<p>Current takes every path it can find, and your body is one of them if you touch a live part while grounded. The most dangerous path is hand to hand or hand to foot, straight across the chest. Never work with both hands on live equipment, never work standing in water, and never assume a circuit is dead because a switch says OFF.</p>\n"
    },
    {
      "heading": "Lockout/Tagout: The Procedure That Saves Lives",
      "html": "<p>Lockout/tagout (LOTO) is the procedure that makes sure a machine cannot be switched back on while someone is working on it. The steps, in order, are: (1) Identify every energy source — electrical, and also stored energy such as capacitors, springs, pressure, or a raised load. (2) Notify everyone affected. (3) Shut the equipment down by its normal controls. (4) Isolate it: open the disconnect or breaker that separates it from its supply. (5) Apply your own personal lock and tag to the isolating device — only you hold the key. (6) Release or restrain stored energy: discharge capacitors, block raised loads, vent pressure. (7) Verify: test that the equipment is dead, and try the start control to confirm it cannot start. Only then do you work.</p>\n<p>The lock is the key point: a tag alone is a warning, but a lock is a physical barrier. Never remove someone else's lock, never rely on a verbal promise that something is off, and never skip the verify step. In the United States this procedure is required by OSHA's standard on the control of hazardous energy (29 CFR 1910.147); other countries have their own equivalent rules, but the steps are the same everywhere.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Off is not safe. Isolated, locked, tagged, and verified dead is safe. If you did not lock it and test it yourself, treat it as live.</div></p>\n"
    },
    {
      "heading": "Test Before Touch",
      "html": "<p>Test-before-touch means proving a circuit is dead with a meter before your hands go near it — and proving the meter works first. The routine is: test the meter on a known live source, test the circuit (it should read dead), then test the meter on the known live source again. That last re-test catches the case where the meter failed during the job. If any step does not behave as expected, stop and find out why.</p>\n<p>Use a meter with the right CAT rating for the job (CAT III or IV for distribution and mains work), check the leads for damage, and wear the PPE for the task. Never trust a panel label, a switch position, or another person's word in place of your own test.</p>\n"
    },
    {
      "heading": "PPE, Arc Flash, and GFCIs",
      "html": "<p>Personal protective equipment for electrical work includes insulated gloves (rated for the voltage, and tested before each use), safety glasses, and, where arc flash is a risk, arc-rated clothing and a face shield. An arc flash is an explosion of hot gas and molten metal when a fault creates an arc — it can cause severe burns in a fraction of a second, and it is the reason some work requires an arc-flash risk assessment and rated clothing before anyone opens a panel.</p>\n<p>A GFCI (ground fault circuit interrupter) is a device that watches the current going out and the current coming back. If they differ by more than about 5 mA — meaning current is leaking somewhere, possibly through a person — it trips in a fraction of a second. GFCIs are required in wet areas (kitchens, bathrooms, outdoors) and they save lives. They do not replace LOTO or safe practice, but they are a real layer of protection. If a GFCI keeps tripping, do not bypass it — find the fault.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Current through the body causes shock; wet skin makes it far worse.</li><li>LOTO: identify, notify, shut down, isolate, lock, tag, release stored energy, verify — then work.</li><li>A lock is a physical barrier; a tag alone is only a warning.</li><li>Test before touch: prove the meter, prove the circuit dead, prove the meter again.</li><li>PPE: insulated gloves, eye protection, arc-rated clothing where arc flash is a risk.</li><li>A GFCI trips when current leaks (about 5 mA difference) — never bypass one that keeps tripping.</li></ul></p>\n<p><strong>Common mistake:</strong> Trusting a switch that says OFF. A switch can fail, be mislabelled, or control the wrong circuit. Only isolation plus a lock plus your own test makes a circuit safe.</p>\n<p><strong>Common mistake:</strong> Removing a tag or a lock that is not yours. Only the person who fitted a lock may remove it, under the site's procedure.</p>\n<p><strong>Ready check:</strong> If you can list the LOTO steps in order and explain test-before-touch, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Electric shock",
      "def": "Current flowing through the body; as little as 30 mA through the chest can be lethal."
    },
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "The procedure of isolating energy, locking the isolating device, and tagging it so equipment cannot be restarted during work."
    },
    {
      "term": "Isolation",
      "def": "Physically separating equipment from all its energy sources, usually by opening a disconnect or breaker."
    },
    {
      "term": "Stored energy",
      "def": "Energy held in a system after switch-off: charged capacitors, springs, pressure, or a raised load."
    },
    {
      "term": "Verify (test before touch)",
      "def": "Proving a circuit is dead with a meter — and proving the meter works — before touching it."
    },
    {
      "term": "PPE",
      "def": "Personal protective equipment: insulated gloves, eye protection, arc-rated clothing."
    },
    {
      "term": "Arc flash",
      "def": "An explosive release of energy from an electrical fault, producing extreme heat, light, and molten metal."
    },
    {
      "term": "GFCI",
      "def": "Ground fault circuit interrupter: trips when outgoing and returning currents differ by about 5 mA."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking to ground through an unintended path, possibly through a person."
    },
    {
      "term": "OSHA 1910.147",
      "def": "The US standard for the control of hazardous energy (lockout/tagout)."
    },
    {
      "term": "NFPA 70E",
      "def": "The US standard for electrical safety in the workplace, including arc-flash protection."
    },
    {
      "term": "Insulated gloves",
      "def": "Rubber gloves rated for a voltage class, worn for live or test work and inspected before each use."
    }
  ],
  "video": {
    "title": "Don’t Get Zapped! Lock It, Tag It! | LOTO Electrical Safety | Engine Solution Global",
    "embedUrl": "https://www.youtube.com/embed/nGSc3RRmZTA",
    "note": "Lockout/tagout in plain steps: identify, shut down, isolate, lock, tag, release stored energy, verify.",
    "more": [
      {
        "title": "LOTO/LOTOV: Step-by-Step Energy Isolation Procedure | Lockout Tagout Safety",
        "url": "https://www.youtube.com/watch?v=Nx51f0VfAOM"
      },
      {
        "title": "The Lockout Tagout Procedures | HAZWOPER-OSHA",
        "url": "https://www.youtube.com/watch?v=Q9InwdBbRao"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the lockout/tagout steps in order, and say in one sentence why each step matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Identify all energy sources — so nothing is missed. Step 2: Notify affected people — so nobody restarts it. Step 3: Shut down by normal controls — an orderly stop. Step 4: Isolate — physically separate it from supply. Step 5: Lock and tag — only you hold the key. Step 6: Release stored energy — capacitors, springs, pressure, raised loads. Step 7: Verify — test dead and try to start it. Only then work. (Order matters: skipping ahead is how people get hurt.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A technician says “the switch is OFF, so it's safe to open the panel.” Explain why that is wrong, and what must happen instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A switch can fail, be mislabelled, or control the wrong circuit — OFF on a label is not proof. Step 2: The circuit must be isolated at a disconnect, locked and tagged, stored energy released, and then verified dead with a tested meter. Step 3: Only after all of that is it safe to open the panel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain test-before-touch as a three-step routine, and say what each step catches.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test the meter on a known live source — catches a dead or faulty meter. Step 2: Test the circuit — it should read dead. Step 3: Test the meter on the known live source again — catches a meter that failed during the job. If any step misbehaves, stop and investigate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is wet skin far more dangerous than dry skin when touching a live part? Use numbers: dry skin about 100,000 Ω, wet skin about 1,000 Ω, at 120 V.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Dry skin: I = 120 ÷ 100,000 = 1.2 mA — a tingle. Step 2: Wet skin: I = 120 ÷ 1,000 = 120 mA — well above the roughly 30 mA that can interfere with the heart. Step 3: Same voltage, a hundred times more current, because the resistance fell. That is why you never work on electrics with wet hands or standing in water.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A GFCI in a bathroom keeps tripping. A housemate suggests removing it. Explain what a GFCI does and why removing it is the wrong answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A GFCI compares current out and current back; a difference of about 5 mA means current is leaking — possibly through a person — and it trips in a fraction of a second. Step 2: Repeated tripping means there is a real fault: a damaged appliance, water in a fitting, or a wiring fault. Step 3: Removing the GFCI removes the protection and leaves the fault in place. Find and fix the fault; never bypass the device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You arrive at a machine and find a padlock and tag on its disconnect, with another worker's name on the tag. What do you do, and what must you never do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Leave the lock and tag alone — only the person who fitted them may remove them, under the site's procedure. Step 2: Find that worker (or the supervisor) and ask what work is happening and when it will be finished. Step 3: If you need to work on the same machine, fit your own lock and tag as well, and do your own verification. Never remove someone else's lock, and never assume the machine is safe because someone else is working on it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the correct order of the main lockout/tagout steps?",
      "choices": [
        "Lock, tag, shut down, verify",
        "Identify, shut down, isolate, lock and tag, release stored energy, verify",
        "Verify, lock, shut down, isolate",
        "Tag, isolate, shut down, verify"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Identify sources, shut down, isolate, lock and tag, release stored energy, then verify — in that order. (a) locks before shutting down, which is wrong. (c) verifies before isolating, which proves nothing. (d) tags before shutting down and misses the lock."
    },
    {
      "q": "Why is a lock better than a tag alone?",
      "choices": [
        "A lock is cheaper",
        "A tag is only a warning; a lock physically prevents the device from being operated",
        "A lock is easier to read",
        "A tag cannot be written on"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tag warns; a lock physically holds the isolating device open and only the key-holder can remove it. (a) is wrong: locks cost more, and cost is not the point. (c) is wrong: readability is not the difference. (d) is wrong: tags are written on all the time."
    },
    {
      "q": "What does test-before-touch require you to do FIRST?",
      "choices": [
        "Touch the circuit with the back of your hand",
        "Test your meter on a known live source",
        "Open the panel",
        "Put on insulated gloves"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Prove the meter works on a known source before trusting it on the unknown circuit. (a) is dangerous and never acceptable. (c) comes after verification, not before. (d) is good practice but does not prove the circuit is dead."
    },
    {
      "q": "Wet skin has about 1,000 Ω resistance. At 120 V, about how much current could flow through wet skin?",
      "choices": [
        "1.2 mA",
        "12 mA",
        "120 mA",
        "1,200 mA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). I = V ÷ R = 120 ÷ 1,000 = 0.12 A = 120 mA — far above the ~30 mA that can affect the heart. (a) 1.2 mA is the dry-skin figure (120 ÷ 100,000). (b) 12 mA is ten times too small. (d) 1,200 mA would need 100 Ω."
    },
    {
      "q": "A GFCI trips when…",
      "choices": [
        "the voltage gets too high",
        "the outgoing and returning currents differ by about 5 mA",
        "the circuit draws more than its rated current",
        "the power goes out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A GFCI watches for a difference between current out and current back — a leak, possibly through a person. (a) is wrong: GFCIs do not watch voltage. (c) describes a breaker or fuse, not a GFCI. (d) is wrong: a power cut is not a ground fault."
    },
    {
      "q": "What is stored energy, and why does LOTO include releasing it?",
      "choices": [
        "Energy in the battery that runs the machine — it cannot be released",
        "Energy held after switch-off, such as charged capacitors or a raised load, which can still hurt you",
        "Energy saved by switching the machine off",
        "The energy in the lock itself"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors stay charged, springs stay loaded, raised loads can fall — switching off does not remove them. (a) is wrong: stored energy is exactly what must be released or restrained. (c) is wrong: this is not about saving energy. (d) is nonsense."
    },
    {
      "q": "You find a lock and tag on a disconnect with another worker's name on it. What should you do?",
      "choices": [
        "Remove it — you need the machine",
        "Leave it alone and find that worker or the supervisor",
        "Cut it off if you are in a hurry",
        "Ignore it, since the switch is off anyway"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only the person who fitted a lock may remove it; find them or the supervisor. (a) and (c) could kill the worker who is relying on that lock. (d) is wrong: a switch position is not proof of safety."
    },
    {
      "q": "What is an arc flash?",
      "choices": [
        "A camera flash near a panel",
        "An explosive release of energy from an electrical fault, producing extreme heat and molten metal",
        "A type of fuse",
        "The spark when you plug in a phone charger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An arc flash is a violent fault event that can cause severe burns in a fraction of a second — the reason arc-rated PPE exists. (a) is wrong. (c) is wrong: a fuse is a protective device, not the event. (d) is a tiny spark, not an arc flash."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Electrical Safety & Lockout/Tagout: Quick Reference</h3>\n<p><strong>Core idea:</strong> Off is not safe. Isolate, lock, tag, release stored energy, verify dead — then work.</p>\n<p><strong>Key terms:</strong> Lockout/tagout · Isolation · Stored energy · Verify · GFCI · Arc flash.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>LOTO order: identify, shut down, isolate, lock/tag, release stored energy, verify.</li>\n<li>A tag warns; a lock physically prevents operation.</li>\n<li>Test the meter, test the circuit, test the meter again.</li>\n<li>Wet skin at 120 V can pass 120 mA — far above the ~30 mA danger level.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
