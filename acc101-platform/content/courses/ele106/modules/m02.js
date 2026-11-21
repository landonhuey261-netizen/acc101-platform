// ele106 - Module 2: Commercial Services & Service Equipment
module.exports = {
  "number": 2,
  "slug": "commercial-services-service-equipment",
  "title": "Commercial Services & Service Equipment",
  "estTime": "3–4 hours",
  "objectives": [
    "Size and describe a commercial service: voltage, amperage, and conductors.",
    "Explain switchboards, service disconnects, and ground-fault protection of equipment.",
    "Apply 230.95: ground-fault protection for large services.",
    "Explain grounding and bonding at a commercial service.",
    "Describe metering, surge protection, and separately derived systems in commercial work."
  ],
  "sections": [
    {
      "heading": "Sizing a Commercial Service",
      "html": "<p>A commercial service is sized from the Article 220 load calculation, just as a dwelling service is — but the loads are bigger and the choices are wider. The voltage is usually 120/208Y or 277/480Y, and the amperage runs from 200 amperes for a small shop to several thousand amperes for a large building. The service conductors are sized at 125% of the continuous load plus 100% of the noncontinuous load (230.42(A)), and the service disconnect must be rated for the calculated load.</p><p>The service equipment in a commercial building is usually a switchboard rather than a panelboard: a large, floor-standing assembly with the main disconnect, the metering, and the distribution sections. A switchboard is built to be worked on from the front, with the conductors and devices accessible behind doors, and it is listed for the purpose. Smaller commercial services may use a panelboard as service equipment, but the switchboard is the standard for services over a few hundred amperes.</p><p>The service disconnect must be at a readily accessible location, outside or nearest the point of entrance (230.70), and it must be marked as the service disconnect. In a large building there may be more than one service disconnect — up to six disconnects are permitted to constitute the service disconnecting means (230.71) — but they must be grouped in one location and each must be marked.</p><div class=\"callout\"><strong>Key idea:</strong> Size the service from the Article 220 calculation, at 125% of continuous load (230.42(A)). The switchboard is the standard commercial service equipment.</div>"
    },
    {
      "heading": "Ground-Fault Protection of Equipment (230.95)",
      "html": "<p>Section 230.95 requires ground-fault protection of equipment (GFPE) on solidly grounded wye services that are 1,000 amperes or more, where the voltage to ground is more than 150 volts — which means 277/480-volt services of 1,000 amperes and up. GFPE is not the same as the GFCI protection for people: GFPE trips at hundreds of amperes (typically set around 1,200 amperes maximum) to limit the damage from a ground fault that would otherwise burn through the switchboard before the main breaker could clear it.</p><p>A ground fault on a 480-volt system can sustain an arc that melts steel and starts a fire, and a standard breaker may not see it because the fault current is below the breaker's trip setting. GFPE senses the imbalance between the phase conductors and the neutral and trips the main disconnect when a ground fault occurs. It is the Code's answer to the most destructive fault in commercial electrical work.</p><p>GFPE must be tested when it is installed and periodically after that, and the test records must be kept. A GFPE system that has never been tested is a system that may not work — and the inspector will ask for the test record.</p><ul><li>230.95: GFPE required on solidly grounded wye services of 1,000 A or more, over 150 V to ground (277/480 V).</li><li>GFPE trips on ground faults of hundreds of amperes — it protects equipment, not people.</li><li>GFPE must be tested at installation and periodically; keep the test records.</li></ul>"
    },
    {
      "heading": "Grounding and Bonding at a Commercial Service",
      "html": "<p>Grounding at a commercial service follows the same rules as a dwelling service, at a larger scale. The grounding electrode conductor is sized by Table 250.66 from the service-entrance conductors. The main bonding jumper connects the grounded (neutral) conductor to the equipment grounding conductor at the service (250.24(B)). The grounding electrode system may include the metal water pipe, the building steel, ground rods, and a concrete-encased electrode — and in a large building it usually includes several of these.</p><p>Building steel is a common commercial electrode: the structural steel of the building is bonded to the grounding system, and it provides a low-impedance path to earth across the whole building. The connection to the steel must be made with a listed connector, and the steel must be effectively grounded. A concrete-encased electrode (a Ufer ground) is built into the foundation of many commercial buildings and is one of the best electrodes available.</p><p>Separately derived systems are common in commercial work: a transformer that steps 480 volts down to 208 volts creates a new system with its own neutral, and that neutral must be grounded and bonded at the transformer (250.30). A generator is also a separately derived system when it has no direct connection to the normal supply. Each separately derived system gets its own grounding electrode conductor and its own main bonding jumper.</p><div class=\"callout\"><strong>Key idea:</strong> Ground per Table 250.66 and bond at the service (250.24(B)). Building steel and Ufer grounds are standard commercial electrodes; transformers and generators are separately derived systems (250.30).</div>"
    },
    {
      "heading": "Metering and Surge Protection",
      "html": "<p>Commercial metering is more complex than residential metering. A small commercial service may use a self-contained meter like a house. A large service uses current transformers (CTs) — the meter measures a small, scaled current from the CTs and multiplies it by the CT ratio. The CT cabinet and the meter are the utility's equipment, and the electrician installs the CTs, the meter socket, and the wiring between them to the utility's specifications.</p><p>Surge protection is required for dwelling services (230.67), and it is standard practice — and often required by the specifications — for commercial services as well. A Type 1 surge-protective device (SPD) is installed at the service, and Type 2 SPDs may be installed at panelboards downstream. The SPD protects the building's electronics from voltage surges, and it must be installed with short, straight conductors to work properly.</p><p>The service equipment must also be labeled: the available fault current, the date the fault-current calculation was made, and the required clearances. Section 110.24 requires the service equipment in other than dwelling units to be marked with the maximum available fault current, so that anyone working on it knows what they are dealing with.</p><ul><li>Large services use current-transformer (CT) metering — the meter reads a scaled current.</li><li>SPDs at the service protect the building's electronics; keep their conductors short and straight.</li><li>110.24: non-dwelling service equipment must be marked with the maximum available fault current.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Commercial services: 120/208Y or 277/480Y, sized from the Article 220 calculation at 125% of continuous load (230.42(A)).</li><li>The switchboard is the standard commercial service equipment; up to six disconnects may form the service disconnect (230.71).</li><li>230.95: ground-fault protection of equipment on 277/480-V services of 1,000 A or more.</li><li>Ground per Table 250.66; bond at the service (250.24(B)); transformers and generators are separately derived systems (250.30).</li><li>Large services use CT metering; 110.24 requires the available fault current to be marked on non-dwelling service equipment.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Confusing GFPE with GFCI. GFPE trips at hundreds of amperes to protect equipment; GFCI trips at 4–6 milliamperes to protect people.</div><div class=\"callout\"><strong>Common mistake:</strong> Bonding the neutral at a subpanel or at a transformer that is not a separately derived system. The neutral bonds once, at the service — or once per separately derived system.</div><p><strong>Ready-to-Work link:</strong> If you can size a commercial service, state when GFPE is required, and explain separately derived systems, you have this module. Module 3 covers feeders and panelboards.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Switchboard",
      "def": "A large, floor-standing assembly of switches and overcurrent devices that distributes power in a commercial building."
    },
    {
      "term": "230.42(A)",
      "def": "Service-entrance conductors are sized at 125% of continuous load plus 100% of noncontinuous load."
    },
    {
      "term": "230.71",
      "def": "Up to six disconnects may constitute the service disconnecting means, grouped in one location."
    },
    {
      "term": "Ground-fault protection of equipment (GFPE)",
      "def": "Protection that trips the main disconnect on a ground fault of hundreds of amperes, to limit equipment damage (230.95)."
    },
    {
      "term": "230.95",
      "def": "GFPE is required on solidly grounded wye services of 1,000 A or more, over 150 V to ground."
    },
    {
      "term": "Current transformer (CT)",
      "def": "A transformer that scales a large current down for metering."
    },
    {
      "term": "Separately derived system",
      "def": "A system whose power comes from a source with no direct connection to the normal supply, such as a transformer or a generator (250.30)."
    },
    {
      "term": "Building steel",
      "def": "The structural steel of a building, used as a grounding electrode when effectively grounded."
    },
    {
      "term": "Concrete-encased electrode (Ufer)",
      "def": "A grounding electrode made of conductors encased in the concrete foundation."
    },
    {
      "term": "Surge-protective device (SPD)",
      "def": "A device that protects equipment from voltage surges; Type 1 at the service, Type 2 at panelboards."
    },
    {
      "term": "110.24",
      "def": "Non-dwelling service equipment must be marked with the maximum available fault current."
    },
    {
      "term": "Main bonding jumper",
      "def": "The connection between the grounded (neutral) conductor and the equipment grounding conductor at the service."
    }
  ],
  "video": {
    "title": "Mastering the Electrical Service Part 4",
    "embedUrl": "https://www.youtube.com/embed/3hR2zhb2uVM",
    "note": "This is part 4 of a series on mastering the electrical service — the service, the panel, and the details that make an inspection pass. Watch it with this module's service-equipment rules in mind: where is the disconnect, how is the service grounded, and what would the inspector check?",
    "more": [
      {
        "title": "Passing Your 200A Service Inspection: Sizing Main Bonding Jumpers!",
        "url": "https://www.youtube.com/watch?v=0m0gkGakPRc"
      },
      {
        "title": "3 Phase Distribution Board Connection Diagram",
        "url": "https://www.youtube.com/watch?v=c1vTsixAdxQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A commercial service is 277/480-volt, 1,200 amperes, solidly grounded wye. Is ground-fault protection of equipment required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 230.95 requires GFPE on solidly grounded wye services of 1,000 A or more, over 150 V to ground. Step 2: This service is 1,200 A at 277 V to ground. Step 3: Yes, GFPE is required.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A commercial service has a calculated continuous load of 400 amperes and a noncontinuous load of 100 amperes. What is the minimum service-entrance conductor ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Continuous load at 125%: 400 × 1.25 = 500 A. Step 2: Noncontinuous load at 100%: 100 A. Step 3: Minimum ampacity = 500 + 100 = 600 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 480-volt to 208-volt transformer feeds a panelboard in an office. Is the transformer's secondary a separately derived system, and what grounding is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — the transformer creates a separately derived system. Step 2: Its neutral must be grounded and bonded at the transformer (250.30). Step 3: It gets its own grounding electrode conductor and main bonding jumper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A building has two service disconnects grouped in one location. Is that permitted?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — 230.71 permits up to six disconnects to constitute the service disconnecting means. Step 2: They must be grouped in one location. Step 3: Each must be marked as a service disconnect.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A commercial service uses CT metering. What does the meter actually measure?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The meter measures a small, scaled current from the current transformers. Step 2: It multiplies that current by the CT ratio to get the real current. Step 3: The CTs, the meter socket, and the wiring are installed to the utility's specifications.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the difference between GFPE and GFCI protection, and what does each protect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: GFCI trips at 4–6 milliamperes to protect people from shock. Step 2: GFPE trips at hundreds of amperes to protect equipment from ground-fault damage. Step 3: GFPE is required on large 277/480-V services (230.95); GFCI is required for people in the locations listed in 210.8.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Ground-fault protection of equipment is required by 230.95 on:",
      "choices": [
        "All commercial services",
        "Solidly grounded wye services of 1,000 A or more, over 150 V to ground",
        "All dwelling services",
        "Services under 100 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.95 applies to solidly grounded wye services of 1,000 A or more, over 150 V to ground. (a) Smaller services do not require GFPE. (c) Dwelling services are not covered by 230.95. (d) Services under 100 A are far below the threshold."
    },
    {
      "q": "Service-entrance conductors are sized at:",
      "choices": [
        "100% of all loads",
        "125% of continuous load plus 100% of noncontinuous load",
        "125% of all loads",
        "80% of the calculated load"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.42(A): 125% of continuous plus 100% of noncontinuous. (a) Continuous loads need the 125% factor. (c) Noncontinuous loads are taken at 100%. (d) 80% would undersize the conductors."
    },
    {
      "q": "The standard commercial service equipment for a large service is a:",
      "choices": [
        "Panelboard",
        "Switchboard",
        "Meter base only",
        "Junction box"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A switchboard is the standard for large commercial services. (a) A panelboard is used for smaller services and distribution. (c) A meter base alone is not service equipment. (d) A junction box is not service equipment."
    },
    {
      "q": "The maximum number of disconnects that may constitute the service disconnecting means is:",
      "choices": [
        "One",
        "Two",
        "Four",
        "Six"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 230.71 permits up to six disconnects, grouped in one location. (a), (b), and (c) One, two, and four are below the maximum."
    },
    {
      "q": "A transformer that steps 480 volts down to 208 volts creates:",
      "choices": [
        "A feeder",
        "A separately derived system",
        "A branch circuit",
        "A service lateral"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The transformer creates a separately derived system (250.30). (a) A feeder is the conductors from the service to a panel. (c) A branch circuit runs from a panel to the outlets. (d) A service lateral is the utility's underground conductors."
    },
    {
      "q": "The grounding electrode conductor is sized by:",
      "choices": [
        "Table 250.66",
        "Table 250.122",
        "Table 310.16",
        "Table 220.42(A)"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Table 250.66 sizes the grounding electrode conductor. (b) Table 250.122 sizes the equipment grounding conductor. (c) Table 310.16 is ampacity. (d) Table 220.42(A) is lighting loads."
    },
    {
      "q": "Non-dwelling service equipment must be marked with the maximum available fault current by:",
      "choices": [
        "110.24",
        "210.8",
        "230.95",
        "250.66"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 110.24 requires the available fault current marking. (b) 210.8 is GFCI protection. (c) 230.95 is GFPE. (d) 250.66 is the GEC table."
    },
    {
      "q": "GFPE trips at approximately:",
      "choices": [
        "4–6 milliamperes",
        "20 milliamperes",
        "Hundreds of amperes",
        "1 ampere"
      ],
      "answer": 2,
      "explanation": "Correct: (c). GFPE trips at hundreds of amperes to limit equipment damage. (a) 4–6 mA is the GFCI trip level for people. (b) 20 mA is above the GFCI level but far below GFPE. (d) 1 ampere is far below the GFPE setting."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Commercial Services: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial services are bigger, use switchboards, and need GFPE at 1,000 A and up on 277/480-V systems.</p>\n<p><strong>Sizing:</strong> 125% of continuous + 100% of noncontinuous (230.42(A)). Up to six disconnects may form the service disconnect (230.71).</p>\n<p><strong>GFPE (230.95):</strong> Solidly grounded wye, 1,000 A or more, over 150 V to ground. Trips at hundreds of amperes — equipment protection, not people protection.</p>\n<p><strong>Grounding:</strong> GEC by Table 250.66; bond at the service (250.24(B)); transformers and generators are separately derived systems (250.30). Building steel and Ufer grounds are standard electrodes.</p>\n<p><strong>Marking:</strong> 110.24 requires the available fault current on non-dwelling service equipment.</p>\n<p><strong>Self-check:</strong> State the GFPE threshold, the 230.42(A) sizing rule, and what makes a system separately derived.</p>\n"
};
