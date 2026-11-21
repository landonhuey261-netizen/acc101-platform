// ele105 - Module 2: Service Entrances & Grounding (Articles 230, 250)
module.exports = {
  "number": 2,
  "slug": "service-entrances-grounding",
  "title": "Service Entrances & Grounding (Articles 230, 250)",
  "estTime": "3–4 hours",
  "objectives": [
    "Size service-entrance conductors under Article 230.",
    "Explain the service disconnect rules: location, grouping, and number.",
    "Describe the residential grounding electrode system and the GEC.",
    "Explain the main bonding jumper and the service neutral-to-ground bond.",
    "State the dwelling surge-protection requirement in 230.67."
  ],
  "sections": [
    {
      "heading": "Service-Entrance Conductors",
      "html": "<p>Service-entrance conductors run from the service point to the service equipment, and Article 230 sizes them like feeders: the noncontinuous load at 100% plus the continuous load at 125% (230.42(A)), with a minimum size from Table 310.16 and the dwelling demand in Article 220. For a 200-ampere dwelling service, the standard conductor is 2/0 copper or 4/0 aluminum service-entrance conductors — the sizes the load calculation in Module 8 will confirm.</p><p>Service-entrance conductors must be protected from physical damage and installed by an approved wiring method: SE cable, or individual conductors in a raceway such as RMC, IMC, or PVC. Overhead service-entrance conductors must be supported and must clear the building by the distances in 230.24. Underground service-entrance conductors follow Table 300.5 burial depths.</p><p>The conductors must be large enough that the service disconnect can carry the calculated load, and the overcurrent protection must match the conductor ampacity. A 200-ampere service on conductors rated 150 amperes is a violation even if the house never draws 200 amperes — the rating must match, not just the actual use.</p><div class=\"callout\"><strong>Key idea:</strong> Size service-entrance conductors like feeders: noncontinuous at 100%, continuous at 125% (230.42(A)). The rating must match the service size.</div>"
    },
    {
      "heading": "The Service Disconnect",
      "html": "<p>Section 230.70 requires the service disconnect to be at a readily accessible location, either outside the building or inside nearest the point where the service-entrance conductors enter. Inside, the conductors should be kept as short as practical — long runs of unprotected service conductors inside a house are a fire risk, because no breaker protects them until the main disconnect.</p><p>Section 230.71 allows up to six service disconnects grouped in one location, but a modern dwelling almost always uses a single main breaker. The disconnects must be grouped and marked (230.72), and each must be labeled to show what it controls. The main breaker in the panel is the disconnect most homeowners will ever touch.</p><p>The service disconnect is also the point where the system is grounded: the grounding electrode conductor connects here, the main bonding jumper connects here, and the neutral-to-ground bond happens here. Everything downstream keeps neutral and ground separate, as Electrical 104 taught.</p><ul><li>Location (230.70): readily accessible, outside or nearest the entry point.</li><li>Number (230.71): up to six disconnects, grouped; one main breaker is the modern standard.</li><li>The service disconnect is where the system is grounded and bonded.</li></ul>"
    },
    {
      "heading": "The Residential Grounding Electrode System",
      "html": "<p>Section 250.50 requires all grounding electrodes present at a building to be bonded together into one grounding electrode system. In a house that usually means the metal water pipe (if it is in contact with the earth for at least 10 feet), the concrete-encased electrode (Ufer — 20 feet of rebar or bare copper in the footing), and one or two ground rods. A new house with a concrete footing almost always has a Ufer electrode, and the water pipe and rods are added to the same system.</p><p>The grounding electrode conductor (GEC) connects the service equipment to the electrode system, sized by Table 250.66: for a 200-ampere service with 2/0 copper service conductors, the GEC is 4 AWG copper. The caps apply here too: a GEC to a ground rod never needs to be larger than 6 AWG copper, and to a Ufer never larger than 4 AWG copper.</p><p>A single ground rod must have its resistance measured: if it is over 25 ohms, a supplemental electrode is required (250.53(A)(2)). In practice, most electricians drive two rods 6 feet apart and skip the measurement, because two rods satisfy the rule without a meter. The rods must be at least 8 feet long and driven so the top is at or below grade.</p><ul><li>All electrodes present must be bonded into one system (250.50).</li><li>GEC sized by Table 250.66; caps: rod 6 AWG Cu, Ufer 4 AWG Cu.</li><li>Single rod over 25 ohms needs a supplemental electrode (250.53(A)(2)); two rods 6 ft apart is the usual practice.</li></ul>"
    },
    {
      "heading": "The Main Bonding Jumper and Surge Protection",
      "html": "<p>The main bonding jumper (250.28) connects the grounded (neutral) conductor to the equipment grounding system at the service, and it is sized by Table 250.102(C)(1). This is the one place neutral and ground meet. In the main panel, the neutral bus and the ground bus are bonded — by the main bonding jumper screw or strap. In every subpanel downstream, they are separate, and the neutral bus is isolated from the enclosure.</p><p>The most common residential grounding violation is a subpanel with the bonding screw installed. The symptom is normal neutral current flowing on the grounding conductors and the metal raceways, which can energize enclosures and confuse GFCI and AFCI breakers. The fix is to remove the bonding screw and verify with a meter that neutral and ground are separate in the subpanel.</p><p>Section 230.67 requires a surge-protective device (SPD) at the service for dwelling units in the 2023 NEC. Surges from lightning and utility switching can damage electronics throughout the house, and the service SPD is the first line of defense. A Type 1 SPD goes ahead of the service disconnect; a Type 2 SPD goes in the panel. Either way, the SPD must be listed and installed per the manufacturer's instructions.</p><div class=\"callout\"><strong>Key idea:</strong> Neutral and ground meet exactly once, at the service, through the main bonding jumper. Subpanels keep them separate — a bonding screw in a subpanel is a violation.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Service-entrance conductors: noncontinuous 100% + continuous 125% (230.42(A)); 2/0 Cu or 4/0 Al for a typical 200 A service.</li><li>Service disconnect (230.70): readily accessible, at or near the entry; up to six grouped (230.71).</li><li>Grounding electrode system (250.50): water pipe + Ufer + rods, all bonded together; GEC by Table 250.66.</li><li>Main bonding jumper (250.28): neutral and ground meet once, at the service.</li><li>Surge protection at the service is required for dwellings (230.67).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Installing the bonding screw in a subpanel. Neutral current then flows on the grounding system and can energize enclosures.</div><div class=\"callout\"><strong>Common mistake:</strong> Driving one ground rod and never checking its resistance. Over 25 ohms, a supplemental electrode is required.</div><p><strong>Ready-to-Work link:</strong> If you can size a GEC for a 200-ampere service, explain the main bonding jumper, and state the surge-protection rule, you have this module. Module 3 covers branch circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Service-entrance conductors",
      "def": "Conductors from the service point to the service equipment, sized per 230.42."
    },
    {
      "term": "SE cable",
      "def": "Service-entrance cable, Article 338; used for service-entrance conductors."
    },
    {
      "term": "Service disconnect",
      "def": "The main breaker or switch that disconnects the whole premises (230.70)."
    },
    {
      "term": "230.71",
      "def": "Up to six service disconnects are permitted, grouped in one location."
    },
    {
      "term": "Grounding electrode system",
      "def": "All electrodes present at a building, bonded together (250.50)."
    },
    {
      "term": "Ufer electrode",
      "def": "A concrete-encased electrode: 20 feet of rebar or bare copper in the footing."
    },
    {
      "term": "Grounding electrode conductor (GEC)",
      "def": "The conductor from the service equipment to the electrode system; sized by Table 250.66."
    },
    {
      "term": "Main bonding jumper",
      "def": "The connection between the neutral and the grounding system at the service (250.28)."
    },
    {
      "term": "Surge-protective device (SPD)",
      "def": "A device that limits voltage surges; required at dwelling services by 230.67."
    },
    {
      "term": "Type 1 SPD",
      "def": "A surge device installed ahead of the service disconnect."
    },
    {
      "term": "Type 2 SPD",
      "def": "A surge device installed in the panel, on the load side of the service disconnect."
    },
    {
      "term": "250.53(A)(2)",
      "def": "A single ground rod over 25 ohms requires a supplemental electrode."
    },
    {
      "term": "250.102(C)(1)",
      "def": "The table sizing the main bonding jumper."
    }
  ],
  "video": {
    "title": "Passing Your 200A Service Inspection: Sizing Main Bonding Jumpers!",
    "embedUrl": "https://www.youtube.com/embed/0m0gkGakPRc",
    "note": "This video works a 200-ampere service inspection end to end: main bonding jumper sizing, grounding electrodes, and separating grounds from neutrals downstream. Follow along and check each measurement against Article 250.",
    "more": [
      {
        "title": "Journeyman Electrician Exam Prep (NEC 2023) — Table 250.66 Explained: Grounding Electrode Conductor",
        "url": "https://www.youtube.com/watch?v=gfVWZ5YpLUE"
      },
      {
        "title": "Mastering the Electrical Service Part 4",
        "url": "https://www.youtube.com/watch?v=3hR2zhb2uVM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 200-ampere dwelling service uses 2/0 copper service-entrance conductors. What size copper GEC does Table 250.66 require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Find the 2/0 copper row in Table 250.66. Step 2: The table calls for a 4 AWG copper GEC. Step 3: If the only electrode were a ground rod, 6 AWG copper would be the maximum required, but for a water pipe or Ufer electrode the full 4 AWG applies.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Where must the service disconnect be located, and why should the service-entrance conductors be kept short inside the house?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At a readily accessible location, outside or nearest the point where the service-entrance conductors enter (230.70). Step 2: Service-entrance conductors have no overcurrent protection until the main disconnect. Step 3: A long unprotected run inside the house is a fire risk if the conductors fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A house has a metal water pipe, a Ufer electrode, and two ground rods. How many grounding electrode systems does it have?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One. Step 2: Section 250.50 requires all electrodes present to be bonded together into a single grounding electrode system. Step 3: Separate, unbonded electrodes would create different potentials and are not permitted.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A subpanel's neutral bus is bonded to the enclosure with the bonding screw installed. What is wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Neutral and ground must be separate after the service disconnect. Step 2: The bonding screw lets normal neutral current flow on grounding conductors and raceways, which can energize enclosures. Step 3: Remove the bonding screw, isolate the neutral bus, and verify separation with a meter — with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A single ground rod measures 40 ohms to earth. What does the Code require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 250.53(A)(2) requires a supplemental electrode when a single rod exceeds 25 ohms. Step 2: Drive a second rod at least 6 feet from the first. Step 3: Bond both rods into the grounding electrode system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What does 230.67 require for a dwelling unit service, and what does the device do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A surge-protective device (SPD) at the service. Step 2: It limits voltage surges from lightning and utility switching. Step 3: Without it, a surge can damage electronics throughout the house.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Service-entrance conductors are sized with continuous loads at:",
      "choices": [
        "100%",
        "110%",
        "125%",
        "150%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 230.42(A): continuous loads at 125%, noncontinuous at 100%. (a) 100% is the noncontinuous figure. (b) 110% is not a Code factor. (d) 150% is too high."
    },
    {
      "q": "The service disconnect must be at a readily accessible location:",
      "choices": [
        "In the attic",
        "Outside or nearest the point where the service conductors enter",
        "In the farthest bedroom",
        "Under the house only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.70 requires ready access at or near the entry point. (a), (c), and (d) An attic, a far bedroom, or under the house is not readily accessible near the entry."
    },
    {
      "q": "How many service disconnects are permitted, grouped in one location?",
      "choices": [
        "One only",
        "Two only",
        "Up to six",
        "Unlimited"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 230.71 allows up to six grouped disconnects. (a) and (b) One or two is common but not the limit. (d) There is a limit of six."
    },
    {
      "q": "The grounding electrode conductor for a 200-ampere service with 2/0 copper service conductors is:",
      "choices": [
        "8 AWG copper",
        "6 AWG copper",
        "4 AWG copper",
        "2 AWG copper"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Table 250.66: 2/0 copper calls for 4 AWG copper. (a) 8 AWG is too small. (b) 6 AWG is the rod cap, not the Table 250.66 size for 2/0. (d) 2 AWG is larger than required."
    },
    {
      "q": "A Ufer electrode is:",
      "choices": [
        "A ground rod",
        "A concrete-encased electrode of rebar or bare copper in the footing",
        "A metal water pipe",
        "A ground ring"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A Ufer is 20 feet of rebar or bare copper encased in concrete. (a) A ground rod is a driven rod. (c) A water pipe is a separate electrode type. (d) A ground ring is a buried bare conductor encircling the building."
    },
    {
      "q": "The main bonding jumper connects:",
      "choices": [
        "The two hot legs",
        "The grounded (neutral) conductor to the equipment grounding system at the service",
        "The water pipe to the gas pipe",
        "The meter to the transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The main bonding jumper connects neutral to ground at the service (250.28). (a) The hot legs are never bonded together. (c) Water and gas piping are bonded, but not by the main bonding jumper. (d) The meter and transformer are utility equipment."
    },
    {
      "q": "In a subpanel, the neutral bus must be:",
      "choices": [
        "Bonded to the enclosure",
        "Isolated from the enclosure",
        "Connected to the water pipe",
        "Larger than the ground bus"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Subpanel neutrals are isolated; only the ground bus is bonded to the enclosure. (a) Bonding the subpanel neutral is the classic violation. (c) The water pipe bonds at the service. (d) Size is not the issue — isolation is."
    },
    {
      "q": "Section 230.67 requires for dwelling unit services:",
      "choices": [
        "A second meter",
        "A surge-protective device",
        "A generator",
        "A larger ground rod"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.67 requires an SPD at dwelling services. (a) A second meter is not required. (c) A generator is optional standby, not required. (d) Rod size is governed by Table 250.66 caps."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Service Entrances &amp; Grounding: Quick Reference</h3>\n<p><strong>Core idea:</strong> The service is where power, grounding, and bonding all meet. Size it by the load, ground it once, and keep neutral and ground separate downstream.</p>\n<p><strong>Service conductors:</strong> Noncontinuous 100% + continuous 125% (230.42(A)). Typical 200 A service: 2/0 Cu or 4/0 Al.</p>\n<p><strong>Disconnect (230.70/230.71):</strong> Readily accessible at or near the entry; up to six grouped.</p>\n<p><strong>Electrodes (250.50):</strong> Water pipe + Ufer + rods, all bonded into one system. GEC by Table 250.66 (200 A service → 4 AWG Cu).</p>\n<p><strong>Main bonding jumper (250.28):</strong> Neutral and ground meet once, at the service. Subpanels keep them separate.</p>\n<p><strong>Surge protection (230.67):</strong> SPD required at dwelling services.</p>\n<p><strong>Self-check:</strong> Size a GEC for a 200 A service and explain why a subpanel bonding screw is a violation.</p>\n"
};
