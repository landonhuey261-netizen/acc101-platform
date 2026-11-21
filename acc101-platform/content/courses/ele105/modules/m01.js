// ele105 - Module 1: The Residential Service: From Pole to Panel
module.exports = {
  "number": 1,
  "slug": "residential-service-pole-to-panel",
  "title": "The Residential Service: From Pole to Panel",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace power from the utility transformer to the main panel in a house.",
    "Explain the 120/240-volt single-phase, 3-wire residential system.",
    "Identify the service drop, service lateral, meter, and service equipment.",
    "Explain overhead clearances and the drip loop.",
    "State the minimum dwelling service size and why 200 amperes is now standard."
  ],
  "sections": [
    {
      "heading": "From the Transformer to the House",
      "html": "<p>Power arrives at a house from the utility transformer, usually mounted on a pole or sitting on a pad in the yard. The transformer steps the distribution voltage down to 120/240 volts, single-phase, 3-wire: two hot legs and one neutral. The two hots are 240 volts apart, and each hot is 120 volts from the neutral. That is why a house has both 120-volt circuits for lights and receptacles and 240-volt circuits for ranges, dryers, and water heaters.</p><p>The conductors from the transformer to the house are the service drop if they run overhead, or the service lateral if they run underground. The point where the utility's conductors meet the house's conductors is the service point. From there, the service-entrance conductors run to the meter and then to the service equipment — usually the main panel with the main breaker.</p><p>The meter belongs to the utility and measures the energy used. The service equipment belongs to the homeowner and is where the power is controlled and protected. Knowing who owns what matters when something fails: a failed meter base is the homeowner's problem in most areas, while a failed transformer is the utility's.</p><div class=\"callout\"><strong>Key idea:</strong> 120/240-volt, single-phase, 3-wire: two hots 240 volts apart, each hot 120 volts from neutral. That split is what makes both 120- and 240-volt circuits possible.</div>"
    },
    {
      "heading": "Overhead Services: Clearances and the Drip Loop",
      "html": "<p>An overhead service drop must clear the ground and the building by the distances in 230.24: at least 10 feet above finished grade where pedestrians walk, 12 feet above residential driveways, and 18 feet above public streets and alleys. The drop must also clear windows and other openings by 3 feet (230.9), so a broken conductor cannot fall against a window someone might open.</p><p>The service-entrance conductors leave the weatherhead — the service head — and loop down before entering the house. That loop is the drip loop (230.54): rain running down the conductors drips off the bottom of the loop instead of following the conductors into the meter or the panel. The service head must sit above the point of attachment so water runs away from the building, not toward it.</p><p>The point of attachment is where the drop fastens to the house — a bracket, a mast, or the building itself. It must be high enough to give the required clearances and strong enough to hold the drop in wind and ice. A mast through the roof must be properly flashed and braced; a mast that leans is a service that will fail.</p><ul><li>Clearances (230.24): 10 ft above grade · 12 ft above residential driveways · 18 ft above public streets.</li><li>Clearance from openings (230.9): 3 ft from windows and doors.</li><li>Drip loop (230.54): conductors loop down so rain drips off before entering the house.</li></ul>"
    },
    {
      "heading": "Underground Services: The Service Lateral",
      "html": "<p>An underground service lateral runs from the transformer or the utility handhole to the meter in a conduit or as direct-buried cable. It avoids the clearance problems of an overhead drop and the visual clutter of a pole, which is why most new subdivisions use laterals. The trade-off is that a buried service cannot be seen, so its location must be marked and its depth must meet Table 300.5 — typically 18 inches for PVC conduit under a lawn and 24 inches for direct-buried cable in many locations.</p><p>Underground services need the same protection as overhead ones: a meter, a service disconnect, grounding, and surge protection. The conductors must be listed for wet locations, because a buried conduit is treated as a wet location even when it looks dry inside. THWN-2 is the standard conductor for underground service work.</p><p>Before digging anywhere near a service lateral, call the utility locating service. A shovel through a service lateral is a shock, an arc flash, and an expensive repair — and the person digging is usually the one who gets hurt.</p><div class=\"callout\"><strong>Key idea:</strong> A buried conduit is a wet location. Underground service conductors must be listed for wet locations, and the route must be located before anyone digs.</div>"
    },
    {
      "heading": "The Main Panel and Service Size",
      "html": "<p>The service equipment is the main panel: the main breaker, the busbars, the neutral bus, the ground bus, and the branch-circuit breakers. The main breaker is the service disconnect (230.70) — the single switch that kills power to the whole house. It must be located at a readily accessible place, either outside or nearest the point where the service-entrance conductors enter the building.</p><p>Section 230.79(C) sets the minimum service disconnect for a dwelling at 100 amperes. That is a minimum, not a recommendation: a modern house with electric cooking, laundry, air conditioning, and an electric vehicle charger needs more, and 200 amperes is now the standard new-home service in most areas. The load calculation in Module 8 is what decides the size — the service must carry the calculated load, not just meet the minimum.</p><p>The panel's busbars carry the two hot legs, and each branch breaker clips onto one leg (120 volts) or both legs (240 volts). The neutral bus collects the neutrals, the ground bus collects the grounds, and the main bonding jumper connects them at the service — and only at the service, as Electrical 104 taught.</p><ul><li>Service disconnect (230.70): readily accessible, at or near where the service conductors enter.</li><li>Minimum dwelling service: 100 amperes (230.79(C)); 200 amperes is the modern standard.</li><li>Main breaker on one leg = 120 V; on both legs = 240 V.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Power path: transformer → service drop or lateral → service point → meter → service equipment (main panel).</li><li>120/240 V single-phase 3-wire: two hots, one neutral; 240 V hot-to-hot, 120 V hot-to-neutral.</li><li>Overhead clearances (230.24): 10 ft grade, 12 ft driveway, 18 ft street; 3 ft from openings (230.9).</li><li>Drip loop (230.54) keeps rain out of the meter and panel.</li><li>Minimum dwelling service 100 A (230.79(C)); 200 A is the modern standard.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the drip loop. Without it, rain follows the conductors straight into the meter base and the panel.</div><div class=\"callout\"><strong>Common mistake:</strong> Sizing a service at the 100-ampere minimum for a house with electric range, dryer, air conditioning, and an EV charger. The load calculation decides the size, not the minimum.</div><p><strong>Ready-to-Work link:</strong> If you can trace power from the transformer to the main breaker and state the overhead clearances, you have this module. Module 2 covers service entrances and grounding in Articles 230 and 250.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Service drop",
      "def": "The overhead conductors from the utility to the house."
    },
    {
      "term": "Service lateral",
      "def": "The underground conductors from the utility to the house."
    },
    {
      "term": "Service point",
      "def": "The point where the utility's conductors meet the house's conductors."
    },
    {
      "term": "Service-entrance conductors",
      "def": "The conductors from the service point to the service equipment."
    },
    {
      "term": "Service equipment",
      "def": "The main panel: the main breaker, busbars, and branch breakers that control power to the house."
    },
    {
      "term": "Service disconnect",
      "def": "The main breaker or switch that kills power to the whole house (230.70)."
    },
    {
      "term": "Weatherhead (service head)",
      "def": "The fitting at the top of the service mast where conductors enter; it must sit above the point of attachment."
    },
    {
      "term": "Drip loop",
      "def": "The downward loop in service-entrance conductors that lets rain drip off before entering the house (230.54)."
    },
    {
      "term": "Point of attachment",
      "def": "Where the overhead service drop fastens to the building."
    },
    {
      "term": "120/240-volt single-phase",
      "def": "The standard residential system: two hot legs and one neutral."
    },
    {
      "term": "Meter",
      "def": "The utility's device that measures energy used; it belongs to the utility."
    },
    {
      "term": "230.24",
      "def": "Overhead service-drop clearances: 10 ft grade, 12 ft driveway, 18 ft street."
    },
    {
      "term": "230.79(C)",
      "def": "Minimum dwelling service disconnect: 100 amperes."
    },
    {
      "term": "THWN-2",
      "def": "A 90°C-rated conductor listed for wet locations; the standard for underground service work."
    }
  ],
  "video": {
    "title": "120V 240V Electricity explained - Split phase 3 wire electrician",
    "embedUrl": "https://www.youtube.com/embed/fJeRabV5hNU",
    "note": "This video explains 120/240-volt split-phase power from the transformer to the panel, including the hot, neutral, and ground conductors. Follow the path from the pole to the panel and name each part as it appears.",
    "more": [
      {
        "title": "Mastering the Electrical Service Part 4",
        "url": "https://www.youtube.com/watch?v=3hR2zhb2uVM"
      },
      {
        "title": "Passing Your 200A Service Inspection: Sizing Main Bonding Jumpers!",
        "url": "https://www.youtube.com/watch?v=0m0gkGakPRc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Trace the path of power from the utility transformer to a bedroom receptacle, naming each part.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Transformer steps voltage down to 120/240 V. Step 2: Service drop (overhead) or lateral (underground) to the service point. Step 3: Service-entrance conductors through the weatherhead and drip loop to the meter. Step 4: Meter to the service equipment (main panel). Step 5: Branch-circuit breaker to the bedroom receptacle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A service drop crosses a residential driveway. What is the minimum clearance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 230.24 requires 12 feet above a residential driveway. Step 2: Over a pedestrian walkway it would be 10 feet. Step 3: Over a public street it would be 18 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is a drip loop, and why does the service head sit above the point of attachment?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drip loop is the downward loop in the service-entrance conductors below the weatherhead. Step 2: Rain runs down the conductors and drips off the loop instead of entering the meter or panel. Step 3: The service head sits above the attachment point so water runs away from the building.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A house has an electric range, dryer, water heater, and air conditioning. Is a 100-ampere service enough?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 100 amperes is the minimum in 230.79(C), not a design size. Step 2: The load calculation (Module 8) decides the service size. Step 3: A house with those loads will almost always calculate above 100 amperes, so 200 amperes is the usual choice.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A homeowner wants to dig a garden bed where the service lateral runs. What must happen first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Call the utility locating service before digging. Step 2: The lateral's route must be marked. Step 3: Digging blind risks cutting a live underground service, which can shock or arc-flash the digger.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 240-volt circuit and a 120-volt circuit both leave the same panel. How does each get its voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The panel has two hot busbars, 240 volts apart, plus a neutral. Step 2: A 120-volt breaker clips onto one hot leg and the neutral. Step 3: A 240-volt breaker clips onto both hot legs.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The conductors from the utility transformer to the house, run overhead, are the:",
      "choices": [
        "Service lateral",
        "Service drop",
        "Feeder",
        "Branch circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overhead conductors are the service drop. (a) The service lateral is underground. (c) A feeder runs from the service equipment to a subpanel. (d) A branch circuit runs from the final breaker to the outlet."
    },
    {
      "q": "In a 120/240-volt residential system, the voltage between the two hot legs is:",
      "choices": [
        "120 volts",
        "208 volts",
        "240 volts",
        "480 volts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Hot-to-hot is 240 volts. (a) 120 volts is hot-to-neutral. (b) 208 volts is a three-phase wye voltage. (d) 480 volts is a commercial voltage."
    },
    {
      "q": "The minimum overhead clearance for a service drop above a residential driveway is:",
      "choices": [
        "8 feet",
        "10 feet",
        "12 feet",
        "18 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 230.24 requires 12 feet above residential driveways. (a) 8 feet is too low. (b) 10 feet is the clearance above finished grade for pedestrians. (d) 18 feet is the clearance above public streets."
    },
    {
      "q": "The drip loop required by 230.54 exists to:",
      "choices": [
        "Make the conductors look neat",
        "Let rain drip off before entering the house",
        "Support the service drop",
        "Ground the service"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The drip loop sheds rain before it can enter the meter or panel. (a) Neatness is a side benefit. (c) The point of attachment supports the drop. (d) Grounding is done by the grounding electrode system."
    },
    {
      "q": "The minimum service disconnect rating for a dwelling unit is:",
      "choices": [
        "60 amperes",
        "100 amperes",
        "150 amperes",
        "200 amperes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.79(C) sets the minimum at 100 amperes. (a) 60 amperes is below the minimum. (c) and (d) 150 and 200 amperes exceed the minimum and are common choices, but the minimum is 100."
    },
    {
      "q": "A buried service conduit is treated as:",
      "choices": [
        "A dry location",
        "A wet location",
        "A hazardous location",
        "A damp location only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Underground raceways are wet locations, so conductors must be listed for wet locations. (a) A buried conduit is never a dry location. (c) It is not a classified hazardous location. (d) Wet is the correct classification, not merely damp."
    },
    {
      "q": "The service disconnect must be located:",
      "choices": [
        "In the basement only",
        "At a readily accessible place, at or near where the service conductors enter",
        "Outside the building only",
        "In the garage only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 230.70 requires a readily accessible location at or near the entry point. (a), (c), and (d) The Code does not require a specific room; it requires ready access near the entry."
    },
    {
      "q": "A 240-volt breaker gets its voltage by connecting to:",
      "choices": [
        "One hot leg and the neutral",
        "Both hot legs",
        "The neutral and the ground",
        "One hot leg and the ground"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 240-volt breaker clips onto both hot legs. (a) One hot plus neutral gives 120 volts. (c) Neutral plus ground gives no voltage. (d) Hot plus ground is not a circuit connection."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — The Residential Service: Quick Reference</h3>\n<p><strong>Core idea:</strong> Power path: transformer → service drop (overhead) or lateral (underground) → service point → meter → service equipment (main panel).</p>\n<p><strong>System:</strong> 120/240 V single-phase, 3-wire. Hot-to-hot 240 V; hot-to-neutral 120 V.</p>\n<p><strong>Clearances (230.24):</strong> 10 ft above grade · 12 ft above residential driveways · 18 ft above public streets. 3 ft from openings (230.9).</p>\n<p><strong>Drip loop (230.54):</strong> Conductors loop down below the weatherhead so rain drips off.</p>\n<p><strong>Service size:</strong> Minimum 100 A (230.79(C)); 200 A is the modern standard. The load calculation decides.</p>\n<p><strong>Self-check:</strong> Trace power from the transformer to a bedroom receptacle, and state the three overhead clearances.</p>\n"
};
