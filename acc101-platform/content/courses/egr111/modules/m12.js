// egr111 - Module 12: Safety: Lockout/Tagout, E-Stops, Guarding & Risk Assessment
module.exports = {
  "number": 12,
  "slug": "safety-lockout-tagout",
  "title": "Safety: Lockout/Tagout, E-Stops, Guarding & Risk Assessment",
  "estTime": "3–4 hours",
  "objectives": [
    "List the six steps of lockout/tagout in order.",
    "Explain what stored energy is and why it must be controlled.",
    "Explain E-stop design and the two stop categories.",
    "Explain guarding types and when each is used.",
    "Carry out a basic risk assessment for a machine task."
  ],
  "sections": [
    {
      "heading": "Lockout/Tagout: Making Sure It Cannot Start",
      "html": "<p>Lockout/tagout (LOTO) is the procedure that makes sure a machine cannot start while someone is working on it. It has six steps, in order: 1) Notify — tell everyone affected that the machine is being shut down. 2) Shut down — stop the machine through its normal controls. 3) Isolate — switch off and disconnect every energy source: electrical, pneumatic, hydraulic, and any other. 4) Lock and tag — fit a personal lock and tag to each isolation point, so only the person who fitted it can remove it. 5) Release stored energy — drain air and oil pressure, discharge capacitors, lower raised loads, let hot parts cool. 6) Verify — try the controls to prove the machine cannot start (tryout), then return the controls to off.</p>\n<p>Each person working on the machine fits their own lock — never rely on someone else's lock, and never remove another person's lock. The lock is personal: it says “I am in here, and this machine must not start until I say so.” LOTO is not paperwork for its own sake; it is the procedure that stops a machine from killing someone who is inside it.</p>\n"
    },
    {
      "heading": "Stored Energy: The Hidden Hazard",
      "html": "<p>Isolating the supply is not enough, because machines store energy. A raised load stores gravitational energy and can fall. Compressed air in a receiver or a cylinder stores pneumatic energy and can move a cylinder. A hydraulic accumulator stores pressure. Capacitors store electrical charge. Springs store mechanical energy, and hot parts store thermal energy. Step 5 of LOTO exists for these: each stored-energy source must be released, blocked, or restrained before work starts.</p>\n<p>The classic accident is the one where the power is off but the load falls, or the cylinder moves on trapped air. Always ask, before starting work: what energy is stored in this machine, and how do I release or restrain it? If you cannot answer that, do not start work.</p>\n"
    },
    {
      "heading": "E-Stops: Stopping in an Emergency",
      "html": "<p>An emergency stop (E-stop) is a red mushroom-headed button on a yellow background, placed where an operator can reach it quickly. Pressing it stops the machine as fast as possible, and it latches — it stays pressed until someone deliberately twists or pulls it to reset it, so the machine cannot restart by itself. An E-stop must be hard-wired, not dependent on the PLC program: it cuts power to the outputs directly, because a program fault must never be able to defeat an E-stop.</p>\n<p>There are two stop categories. A Category 0 stop cuts power immediately — the machine coasts to a stop. A Category 1 stop is a controlled stop: the machine is driven to a stop under power, and then the power is cut. Category 1 is used where an immediate power cut would be dangerous, such as a machine that must lower a load gently. The choice is made in the risk assessment, and it is designed into the safety circuit, not chosen by the operator.</p>\n"
    },
    {
      "heading": "Guarding and Safety Devices",
      "html": "<p>Guarding keeps people away from hazards. Fixed guards are bolted-on covers that are only removed with tools, used where access is never needed during normal work. Interlocked guards have a switch: opening the guard stops the machine, and the machine cannot restart until the guard is closed. Light curtains are beams of light across an opening: breaking the beam stops the machine, used where an operator must reach in frequently, such as loading a press.</p>\n<p>Safety relays and safety PLCs monitor the safety devices: they check that the E-stop, the guard switches, and the light curtain are all working, and they will not allow a restart if a device is faulty. A safety circuit is separate from the control circuit — it is built from safety-rated components and is designed so that a single fault cannot defeat it. Regular testing of safety devices is part of maintenance, not an optional extra.</p>\n"
    },
    {
      "heading": "Risk Assessment: Thinking Before Acting",
      "html": "<p>A risk assessment is the formal process of finding hazards and deciding how to control them. For each task, ask: what can hurt someone (the hazard)? How bad would it be (severity)? How often is someone exposed, and how likely is it (frequency and probability)? Can the person avoid it (avoidance)? The answers give a risk level, and the risk level decides the protection needed — from a warning sign, through guarding, to a safety-rated control system.</p>\n<p>The hierarchy of controls, in order of preference, is: eliminate the hazard, substitute something safer, engineer it out with guards and interlocks, use administrative controls such as procedures and training, and finally use personal protective equipment (PPE). PPE is the last resort, not the first — a guard that keeps a hand out of a press is better than a glove that does not. <p><strong>Takeaways:</strong><ul><li>LOTO has six steps: notify, shut down, isolate, lock and tag, release stored energy, verify.</li><li>Stored energy — raised loads, trapped air, accumulators, capacitors, springs — must be released or restrained.</li><li>An E-stop is hard-wired, latching, and independent of the PLC program.</li><li>Fixed guards, interlocked guards, and light curtains keep people away from hazards.</li><li>Risk assessment decides the protection, following the hierarchy of controls with PPE last.</li></ul></p>\n<p><strong>Common mistake:</strong> Isolating the power but forgetting stored energy. A raised load or trapped air can still move a machine with the power off.</p>\n<p><strong>Common mistake:</strong> Treating an E-stop as a normal stop button. E-stops are for emergencies only; using them for routine stops wears them out and hides the fact that the normal stop is not working.</p>\n<p><strong>Ready check:</strong> If you can list the six LOTO steps, name the stored-energy sources, and explain E-stop categories and the hierarchy of controls, you have this module — and this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "The procedure that isolates a machine from all energy sources and locks the isolation so it cannot be restarted while work is done."
    },
    {
      "term": "Stored energy",
      "def": "Energy held in a machine after isolation: raised loads, compressed air, hydraulic accumulators, capacitors, springs, and heat."
    },
    {
      "term": "Tryout",
      "def": "Trying the machine's controls after lockout to prove it cannot start, before work begins."
    },
    {
      "term": "E-stop",
      "def": "Emergency stop: a red mushroom button on a yellow background that stops a machine as fast as possible and latches until reset."
    },
    {
      "term": "Category 0 stop",
      "def": "An immediate stop that cuts power at once, letting the machine coast to a stop."
    },
    {
      "term": "Category 1 stop",
      "def": "A controlled stop: the machine is driven to a stop under power, then the power is cut."
    },
    {
      "term": "Fixed guard",
      "def": "A bolted-on cover that keeps people away from a hazard and is only removed with tools."
    },
    {
      "term": "Interlocked guard",
      "def": "A guard with a switch: opening it stops the machine, and the machine cannot restart until it is closed."
    },
    {
      "term": "Light curtain",
      "def": "A beam of light across an opening that stops the machine when the beam is broken."
    },
    {
      "term": "Safety relay",
      "def": "A safety-rated device that monitors E-stops, guards, and light curtains and controls the safety circuit."
    },
    {
      "term": "Safety PLC",
      "def": "A PLC built and certified for safety functions, separate from the control PLC."
    },
    {
      "term": "Risk assessment",
      "def": "The formal process of finding hazards, judging their severity and likelihood, and deciding the protection needed."
    },
    {
      "term": "Hierarchy of controls",
      "def": "The order of preference for controlling a hazard: eliminate, substitute, engineer, administer, then PPE."
    },
    {
      "term": "PPE",
      "def": "Personal protective equipment, such as gloves and glasses: the last resort in the hierarchy of controls."
    }
  ],
  "video": {
    "title": "OSHA Lockout Tagout Safety Video: Electrical LOTO Procedure Training",
    "embedUrl": "https://www.youtube.com/embed/HcvJ_Xp-ofo",
    "note": "A full lockout/tagout procedure shown step by step, including stored energy and verification. Watch the six steps in order, then write them from memory.",
    "more": [
      {
        "title": "How to wire a Safety Relay / Safety Relay Working Principle / The Best Video to learn all about.!",
        "url": "https://www.youtube.com/watch?v=emp0T_kTsc4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the six steps of lockout/tagout in order, and in one sentence each say what happens at each step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Notify — tell everyone affected that the machine is being shut down. Step 2: Shut down — stop the machine through its normal controls. Step 3: Isolate — switch off and disconnect every energy source. Step 4: Lock and tag — fit a personal lock and tag to each isolation point. Step 5: Release stored energy — drain air and oil, discharge capacitors, lower loads. Step 6: Verify — try the controls to prove the machine cannot start. A good answer lists all six in order.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A maintenance worker isolates the electrical supply to a press, but the press's ram is held up by a hydraulic accumulator. What is the hazard, and what must be done before work starts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hazard is stored energy: the accumulator holds pressurised oil that can drive the ram down even with the power off. Step 2: The stored energy must be released — the accumulator must be drained and the ram lowered or mechanically blocked. Step 3: Only then is the machine safe to work on. A good answer names the accumulator's stored energy and the release step.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A machine must lower a heavy load gently before its power is cut. Should its E-stop be Category 0 or Category 1? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Category 1, because it is a controlled stop: the machine is driven to a stop under power, then the power is cut. Step 2: A Category 0 stop would cut power immediately and let the load fall, which is dangerous. Step 3: The category is decided in the risk assessment and built into the safety circuit. A good answer names Category 1 and explains the falling-load risk.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A press has a fixed guard over its flywheel and an interlocked guard over its loading area. Why are the two guards different, and what happens when each is opened?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The flywheel never needs access during normal work, so a fixed guard (bolted on, removed only with tools) is right. Step 2: The loading area needs frequent access, so an interlocked guard is used: opening it stops the press, and the press cannot restart until the guard is closed. Step 3: Opening the fixed guard requires tools and a lockout; opening the interlocked guard stops the machine automatically. A good answer explains both choices.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A risk assessment finds that operators reach into a machine to clear jams several times a shift, and the hazard is a moving conveyor. Using the hierarchy of controls, suggest a better control than giving operators gloves, and explain why gloves are the wrong answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gloves are PPE — the last resort — and they do not stop a conveyor from catching a hand. Step 2: A better control is engineering: an interlocked guard or a light curtain that stops the conveyor when someone reaches in. Step 3: Even better would be eliminating the need to reach in, by redesigning the machine so jams are cleared from outside. A good answer applies the hierarchy and names an engineering control.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two maintenance workers are both working inside the same machine. How many locks should be fitted to the isolation point, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two locks — one for each worker, fitted to a hasp that takes multiple locks. Step 2: Each worker's lock is personal: the machine cannot be restarted until every lock is removed. Step 3: If only one lock were fitted, the first worker to finish could restart the machine while the second worker was still inside. A good answer gives two locks and the personal-lock rule.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What are the six steps of lockout/tagout, in order?",
      "choices": [
        "Lock, tag, isolate, shut down, verify, notify",
        "Notify, shut down, isolate, lock and tag, release stored energy, verify",
        "Shut down, notify, verify, lock, tag, isolate",
        "Isolate, notify, lock, shut down, verify, tag"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The order is notify, shut down, isolate, lock and tag, release stored energy, verify. (a) starts with locking, which is step 4. (c) and (d) scramble the order — verification must come last, after the stored energy is released."
    },
    {
      "q": "What is stored energy, and why does LOTO include a step for it?",
      "choices": [
        "Energy saved by the machine for later use",
        "Energy held in a machine after isolation — raised loads, trapped air, accumulators, capacitors — which can still move or harm someone",
        "Electrical energy in the mains supply",
        "The energy in a worker's muscles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Stored energy can move a machine with the power off, so it must be released or restrained. (a) is wrong: stored energy is a hazard, not a useful reserve. (c) is the supply, handled by isolation. (d) is not a machine hazard."
    },
    {
      "q": "How many locks should be fitted when two workers are inside the same machine?",
      "choices": [
        "One lock, shared between them",
        "Two locks — one personal lock per worker",
        "No locks, a tag is enough",
        "Three locks, one spare"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each worker fits their own personal lock, so the machine cannot restart until every worker is out. (a) is dangerous: one worker finishing could restart the machine while the other is inside. (c) is wrong: a tag alone does not prevent restarting. (d) adds a meaningless spare."
    },
    {
      "q": "What is a Category 1 stop?",
      "choices": [
        "An immediate power cut",
        "A controlled stop: the machine is driven to a stop under power, then the power is cut",
        "A stop that only works once",
        "A stop for the PLC program only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Category 1 is a controlled stop, used where an immediate power cut would be dangerous. (a) describes a Category 0 stop. (c) is wrong: E-stops are reusable after reset. (d) is wrong: E-stops are hard-wired, not program stops."
    },
    {
      "q": "Why must an E-stop be hard-wired rather than depending on the PLC program?",
      "choices": [
        "Because the PLC is too slow",
        "Because a program fault must never be able to defeat an E-stop",
        "Because hard-wiring is cheaper",
        "Because the PLC has no E-stop input"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The E-stop must work even if the PLC program fails, so it cuts power directly. (a) is wrong: PLCs are fast enough, but reliability is the issue. (c) is wrong: cost is not the reason. (d) is wrong: PLCs do have safety inputs, but the E-stop must not depend on them."
    },
    {
      "q": "What happens when an interlocked guard is opened?",
      "choices": [
        "Nothing — the machine keeps running",
        "The machine stops, and it cannot restart until the guard is closed",
        "An alarm sounds but the machine keeps running",
        "The machine speeds up"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An interlocked guard stops the machine on opening and prevents restart until it is closed. (a) describes no guard at all. (c) is wrong: an alarm alone does not stop the machine. (d) is wrong: opening a guard never speeds a machine up."
    },
    {
      "q": "In the hierarchy of controls, where does PPE sit?",
      "choices": [
        "First — it is the best control",
        "Last — it is the final resort after elimination, substitution, engineering, and administrative controls",
        "Second, after elimination",
        "It is not part of the hierarchy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PPE is the last resort: a guard that keeps a hand out of a press is better than a glove that does not. (a) has it backwards. (c) is wrong: engineering and administrative controls come before PPE. (d) is wrong: PPE is the fifth and final level."
    },
    {
      "q": "What is the purpose of the “verify” step in LOTO?",
      "choices": [
        "To check the machine runs normally",
        "To try the controls and prove the machine cannot start before work begins",
        "To verify the lock is the right colour",
        "To check the time"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Verification (tryout) proves the isolation worked before anyone is at risk. (a) is wrong: the machine must not run during maintenance. (c) is trivial: lock colour does not matter. (d) is wrong: time is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Safety: Lockout/Tagout, E-Stops, Guarding & Risk Assessment: Quick Reference</h3>\n<p><strong>Core idea:</strong> List the six steps of lockout/tagout in order.</p>\n<p><strong>Key terms:</strong> Lockout/tagout (LOTO) · Stored energy · Tryout · E-stop · Category 0 stop · Category 1 stop · Fixed guard · Interlocked guard.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>List the six steps of lockout/tagout in order.</li>\n<li>Explain what stored energy is and why it must be controlled.</li>\n<li>Explain E-stop design and the two stop categories.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
