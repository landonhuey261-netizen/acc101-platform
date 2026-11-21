// ele106 - Module 3: Feeders & Panelboards
module.exports = {
  "number": 3,
  "slug": "feeders-panelboards",
  "title": "Feeders & Panelboards",
  "estTime": "3–4 hours",
  "objectives": [
    "Size feeders for commercial panelboards using Article 215.",
    "Explain panelboard types, ratings, and overcurrent protection (Article 408).",
    "Apply the feeder tap rules of 240.21(B).",
    "Explain the high-leg marking and phase arrangement in panelboards.",
    "Read a panel schedule and a riser diagram."
  ],
  "sections": [
    {
      "heading": "Feeders: From the Service to the Panelboards",
      "html": "<p>A feeder is the set of conductors between the service equipment and a panelboard (or between panelboards). In a commercial building, feeders run from the switchboard to distribution panelboards and from distribution panelboards to branch-circuit panelboards. Feeders are sized by Article 215: the conductors must carry 125% of the continuous load plus 100% of the noncontinuous load (215.2(A)(1)), and the feeder overcurrent device must be rated for the calculated load.</p><p>A feeder that serves a panelboard with a large motor load also needs the motor adder: 125% of the largest motor's full-load current plus the other loads (430.24). And a feeder in a commercial building is usually run in conduit — EMT or RMC — rather than cable, because conduit protects the conductors, lets them be replaced, and is the standard commercial wiring method.</p><p>The feeder's equipment grounding conductor is sized by Table 250.122 from the feeder overcurrent device rating. A 200-ampere feeder needs a 6 AWG copper equipment grounding conductor; a 400-ampere feeder needs a 3 AWG copper one. The grounding conductor runs with the feeder in the same raceway, so the fault path is complete.</p><div class=\"callout\"><strong>Key idea:</strong> Feeders: 125% of continuous + 100% of noncontinuous (215.2(A)(1)), plus the 125% largest-motor adder (430.24). The EGC is sized by Table 250.122.</div>"
    },
    {
      "heading": "Panelboards: Types, Ratings, and Protection",
      "html": "<p>A panelboard is an assembly of busbars and overcurrent devices in a cabinet. Commercial panelboards come in two main types: lighting and appliance branch-circuit panelboards, which have more than 10% of their overcurrent devices rated 30 amperes or less and serve lighting and receptacle loads; and power panelboards, which serve larger loads such as motors and feeders. The distinction matters because 408.36 requires overcurrent protection for the panelboard itself, rated not more than the panelboard's rating.</p><p>A panelboard's busbars are arranged in phases A, B, C from front to back, top to bottom, or left to right (408.3(A)), so that the phase arrangement is consistent across the building. In a high-leg system, the B phase is the high leg and must be marked orange (408.3(E)). The panelboard's rating — its busbar ampacity — must be at least as large as the feeder overcurrent device that supplies it.</p><p>Every panelboard needs a directory (408.4) that identifies each circuit legibly and permanently, just as in a house. In a commercial building the directory is even more important, because the person who needs to kill a circuit may be a maintenance worker who has never seen the panel before.</p><ul><li>Panelboard overcurrent protection must not exceed the panelboard rating (408.36).</li><li>Busbar phase arrangement: A, B, C from front to back, top to bottom, or left to right (408.3(A)).</li><li>High leg goes on the B phase and is marked orange (408.3(E)). Directory required (408.4).</li></ul>"
    },
    {
      "heading": "Feeder Taps (240.21(B))",
      "html": "<p>A feeder tap is a conductor that taps off a feeder to supply a smaller panelboard or piece of equipment, without its own overcurrent device at the tap point. The tap rules of 240.21(B) limit how long a tap can be and how small its conductors can be, because a tap conductor without overcurrent protection is protected only by the feeder's breaker — which may be far larger than the tap conductor's ampacity.</p><p>The 10-foot tap rule (240.21(B)(1)) permits a tap up to 10 feet long if the tap conductors have an ampacity of at least one-tenth of the feeder overcurrent device rating (and at least the calculated load), are enclosed in a raceway, and terminate in a single overcurrent device. The 25-foot tap rule (240.21(B)(2)) permits a tap up to 25 feet long if the tap conductors have an ampacity of at least one-third of the feeder overcurrent device rating and terminate in a single overcurrent device.</p><p>Feeder taps are common in commercial work: a tap off a large feeder to a small panelboard, or a tap to a transformer. The rules are strict because the tap is the weak point — a tap conductor that is too small or too long will overheat before the feeder breaker ever sees the fault.</p><div class=\"callout\"><strong>Key idea:</strong> Feeder taps: 10-foot rule — tap ampacity at least 1/10 of the feeder OCPD; 25-foot rule — at least 1/3. Both must terminate in a single overcurrent device.</div>"
    },
    {
      "heading": "The Riser Diagram and Panel Schedule",
      "html": "<p>A commercial building's electrical system is shown on a riser diagram — a vertical, schematic drawing that shows the service, the switchboard, the feeders, the panelboards, and the loads, with the sizes of every conductor and overcurrent device marked. The riser diagram is the map of the building's power system, and the electrician reads it before touching a panel.</p><p>Each panelboard also has a panel schedule: a table listing every circuit by number, with its load, wire size, breaker size, and the load it serves. The panel schedule is the wiring plan in table form, and it is what the installer uses to land the branch circuits. In a commercial building the panel schedule may also show the demand load and the phase balance — how the loads are spread across A, B, and C so the phases are balanced.</p><p>Phase balance matters because an unbalanced system wastes capacity: if phase A carries 150 amperes and phase C carries 50, the service must be sized for the heaviest phase, and the neutral carries the difference. A balanced panelboard is a panelboard that uses its full rating.</p><ul><li>Riser diagram: the map of the building's power system — service, switchboard, feeders, panelboards, loads.</li><li>Panel schedule: every circuit by number, load, wire, and breaker — plus phase balance.</li><li>Balance the loads across A, B, and C; an unbalanced system wastes capacity.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Feeders: 125% of continuous + 100% of noncontinuous (215.2(A)(1)), plus the 125% largest-motor adder (430.24).</li><li>Panelboard overcurrent protection must not exceed the panelboard rating (408.36); directory required (408.4).</li><li>Phase arrangement A, B, C (408.3(A)); high leg on B, marked orange (408.3(E)).</li><li>Feeder taps: 10-foot rule (1/10) and 25-foot rule (1/3), both ending in a single overcurrent device (240.21(B)).</li><li>The riser diagram maps the power system; the panel schedule lists every circuit and shows phase balance.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing a feeder at 100% of the continuous load. Feeders, like services, need the 125% continuous-load factor (215.2(A)(1)).</div><div class=\"callout\"><strong>Common mistake:</strong> Running a feeder tap longer than the rule allows, or with conductors too small. The tap is protected only by the feeder's breaker — the rules are the only thing keeping it safe.</div><p><strong>Ready-to-Work link:</strong> If you can size a feeder, apply the tap rules, and read a riser diagram, you have this module. Module 4 covers branch circuits in commercial work.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Feeder",
      "def": "The conductors between the service equipment and a panelboard, or between panelboards."
    },
    {
      "term": "215.2(A)(1)",
      "def": "Feeders are sized at 125% of continuous load plus 100% of noncontinuous load."
    },
    {
      "term": "Lighting and appliance branch-circuit panelboard",
      "def": "A panelboard with more than 10% of its overcurrent devices rated 30 A or less, serving lighting and receptacles."
    },
    {
      "term": "Power panelboard",
      "def": "A panelboard serving larger loads such as motors and feeders."
    },
    {
      "term": "408.36",
      "def": "Panelboard overcurrent protection must not exceed the panelboard rating."
    },
    {
      "term": "408.3(A)",
      "def": "Busbar phase arrangement: A, B, C from front to back, top to bottom, or left to right."
    },
    {
      "term": "408.3(E)",
      "def": "The high leg is connected to the B phase and marked orange."
    },
    {
      "term": "Feeder tap",
      "def": "A conductor tapped off a feeder to supply a smaller load, without overcurrent protection at the tap point."
    },
    {
      "term": "10-foot tap rule",
      "def": "240.21(B)(1): a tap up to 10 ft, with ampacity of at least 1/10 of the feeder OCPD rating."
    },
    {
      "term": "25-foot tap rule",
      "def": "240.21(B)(2): a tap up to 25 ft, with ampacity of at least 1/3 of the feeder OCPD rating."
    },
    {
      "term": "Riser diagram",
      "def": "A vertical schematic showing the service, switchboard, feeders, panelboards, and loads."
    },
    {
      "term": "Panel schedule",
      "def": "A table listing every circuit by number, load, wire size, and breaker size."
    },
    {
      "term": "Phase balance",
      "def": "Spreading loads evenly across phases A, B, and C."
    }
  ],
  "video": {
    "title": "3 Phase Distribution Board Connection Diagram",
    "embedUrl": "https://www.youtube.com/embed/c1vTsixAdxQ",
    "note": "This video walks a three-phase distribution board — the panelboard at the heart of this module. Watch how the phases, the breakers, and the loads are laid out, and compare it with the riser diagram and panel schedule in this module.",
    "more": [
      {
        "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
        "url": "https://www.youtube.com/watch?v=_SbQcswuzns"
      },
      {
        "title": "How to Add a Sub Panel to Expand the Circuit Breaker Capacity.",
        "url": "https://www.youtube.com/watch?v=_ir2ap_ft_Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A feeder serves a continuous load of 160 amperes and a noncontinuous load of 40 amperes. What is the minimum feeder conductor ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Continuous load at 125%: 160 × 1.25 = 200 A. Step 2: Noncontinuous load at 100%: 40 A. Step 3: Minimum ampacity = 200 + 40 = 240 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 400-ampere feeder supplies a panelboard. A tap 20 feet long will feed a small panelboard. What is the minimum tap conductor ampacity under the 25-foot tap rule?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 25-foot tap rule (240.21(B)(2)) requires tap ampacity of at least one-third of the feeder overcurrent device rating. Step 2: 400 ÷ 3 = 133.3 A. Step 3: The tap conductors must have an ampacity of at least 133.3 A (and at least the calculated load).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A panelboard is rated 225 amperes. What is the largest overcurrent device that may protect it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 408.36 requires panelboard overcurrent protection rated not more than the panelboard rating. Step 2: The largest permitted is 225 amperes. Step 3: A 250-ampere breaker would violate 408.36.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A feeder's overcurrent device is rated 200 amperes. What size copper equipment grounding conductor is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 250.122 sizes the EGC from the overcurrent device rating. Step 2: A 200-ampere device calls for 6 AWG copper. Step 3: The EGC runs with the feeder in the same raceway.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 10-foot tap is taken from a 600-ampere feeder. What is the minimum tap conductor ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 10-foot tap rule (240.21(B)(1)) requires tap ampacity of at least one-tenth of the feeder overcurrent device rating. Step 2: 600 ÷ 10 = 60 A. Step 3: The tap conductors must have an ampacity of at least 60 A (and at least the calculated load).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A panelboard's phase A carries 150 amperes, phase B carries 140 amperes, and phase C carries 60 amperes. What is the problem, and how is it fixed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The panel is unbalanced — phase C carries far less than A and B. Step 2: The service must be sized for the heaviest phase, so capacity is wasted, and the neutral carries the imbalance. Step 3: Move some branch circuits from phases A and B to phase C to balance the loads.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Feeders are sized at:",
      "choices": [
        "100% of all loads",
        "125% of continuous load plus 100% of noncontinuous load",
        "125% of all loads",
        "80% of the calculated load"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 215.2(A)(1): 125% of continuous plus 100% of noncontinuous. (a) Continuous loads need the 125% factor. (c) Noncontinuous loads are taken at 100%. (d) 80% would undersize the feeder."
    },
    {
      "q": "Panelboard overcurrent protection must be rated:",
      "choices": [
        "Not more than the panelboard rating",
        "At least twice the panelboard rating",
        "Exactly the panelboard rating",
        "At the next higher standard size"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 408.36: protection must not exceed the panelboard rating. (b) Twice the rating would not protect the panelboard. (c) Exactly the rating is permitted but not required. (d) The next higher size may exceed the rating."
    },
    {
      "q": "The 10-foot feeder tap rule requires tap conductors with an ampacity of at least:",
      "choices": [
        "1/2 of the feeder OCPD rating",
        "1/3 of the feeder OCPD rating",
        "1/10 of the feeder OCPD rating",
        "The full feeder OCPD rating"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 240.21(B)(1): at least 1/10 of the feeder OCPD rating. (a) and (b) 1/2 and 1/3 are larger than required for a 10-foot tap. (d) Full rating is not required for a tap."
    },
    {
      "q": "The 25-foot feeder tap rule requires tap conductors with an ampacity of at least:",
      "choices": [
        "1/10 of the feeder OCPD rating",
        "1/3 of the feeder OCPD rating",
        "1/2 of the feeder OCPD rating",
        "The full feeder OCPD rating"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 240.21(B)(2): at least 1/3 of the feeder OCPD rating. (a) 1/10 is the 10-foot rule. (c) 1/2 is larger than required. (d) Full rating is not required for a tap."
    },
    {
      "q": "In a panelboard, the high leg is connected to the:",
      "choices": [
        "A phase",
        "B phase",
        "C phase",
        "Neutral bus"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 408.3(E): the high leg goes on the B phase. (a) and (c) The A and C phases are 120 volts to neutral. (d) The high leg never connects to the neutral bus."
    },
    {
      "q": "The equipment grounding conductor for a feeder is sized by:",
      "choices": [
        "Table 250.66",
        "Table 250.122",
        "Table 310.16",
        "Table 220.42(A)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 250.122 sizes the EGC from the overcurrent device rating. (a) Table 250.66 sizes the grounding electrode conductor. (c) Table 310.16 is ampacity. (d) Table 220.42(A) is lighting loads."
    },
    {
      "q": "A riser diagram shows:",
      "choices": [
        "The floor plan of each room",
        "The service, switchboard, feeders, panelboards, and loads in a vertical schematic",
        "The ceiling heights",
        "The furniture layout"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A riser diagram is the vertical schematic of the power system. (a) Room layouts are on the floor plan. (c) Ceiling heights are in sections. (d) Furniture is not on an electrical drawing."
    },
    {
      "q": "Phase balance matters because:",
      "choices": [
        "It makes the panel look neat",
        "An unbalanced system wastes capacity and the neutral carries the difference",
        "It reduces the number of breakers",
        "It eliminates the need for grounding"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An unbalanced system must be sized for the heaviest phase, wasting capacity. (a) Neatness is a side benefit. (c) Balance does not change the breaker count. (d) Grounding is always required."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Feeders &amp; Panelboards: Quick Reference</h3>\n<p><strong>Core idea:</strong> Feeders carry power from the service to the panelboards. Size them with the 125% rule, protect the panelboard, and keep the phases balanced.</p>\n<p><strong>Feeders:</strong> 125% of continuous + 100% of noncontinuous (215.2(A)(1)) + 125% largest-motor adder (430.24). EGC by Table 250.122.</p>\n<p><strong>Panelboards:</strong> Protection ≤ panelboard rating (408.36). Phases A, B, C (408.3(A)); high leg on B, orange (408.3(E)). Directory (408.4).</p>\n<p><strong>Taps (240.21(B)):</strong> 10-ft rule = 1/10 of feeder OCPD · 25-ft rule = 1/3 of feeder OCPD. Both end in a single overcurrent device.</p>\n<p><strong>Drawings:</strong> Riser diagram = power map · panel schedule = every circuit, plus phase balance.</p>\n<p><strong>Self-check:</strong> Size a feeder, state both tap rules, and explain why phase balance matters.</p>\n"
};
