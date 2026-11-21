// ele105 - Module 7: Laundry, HVAC & Appliance Circuits
module.exports = {
  "number": 7,
  "slug": "laundry-hvac-appliance-circuits",
  "title": "Laundry, HVAC & Appliance Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply the laundry branch-circuit and receptacle rules.",
    "Size a dryer circuit using 220.54.",
    "Explain HVAC circuit rules: air conditioning, heat pumps, and furnaces.",
    "Identify which appliances need individual branch circuits.",
    "Apply the receptacle rules for basements, garages, and outdoors."
  ],
  "sections": [
    {
      "heading": "The Laundry Area",
      "html": "<p>Section 210.11(C)(2) requires at least one 20-ampere laundry branch circuit for the laundry area, and 210.52(F) requires at least one receptacle in the laundry area. The laundry circuit serves only laundry outlets — it may not serve the bedroom next door or the hallway lights. The washing machine plugs into it, and the circuit is 20 amperes because a washer's motor draws heavily on start-up and the circuit may also serve an iron or a steamer.</p><p>The electric dryer is a separate matter: it needs its own 240-volt circuit, usually 30 amperes on 10 AWG copper. Section 220.54 sizes the dryer load at 5,000 VA or the nameplate rating, whichever is larger. A 5,000 VA dryer at 240 volts draws 20.8 amperes, so a 30-ampere circuit gives the margin the Code expects. The dryer receptacle is a 4-wire NEMA 14-30 in new work — the old 3-wire receptacle is permitted only for existing installations.</p><p>A gas dryer needs only a 120-volt receptacle for its motor and controls, and it may use the laundry circuit. An electric dryer never shares its circuit: the 240-volt dryer circuit is an individual branch circuit.</p><div class=\"callout\"><strong>Key idea:</strong> One 20 A laundry circuit for the washer (210.11(C)(2)); the electric dryer gets its own 240 V, 30 A circuit, sized at 5,000 VA or nameplate (220.54).</div>"
    },
    {
      "heading": "HVAC: Air Conditioning, Heat Pumps, and Furnaces",
      "html": "<p>Heating, ventilation, and air conditioning equipment is governed by Article 440 (air conditioning and refrigeration) and Article 422 (appliances), and the circuits are sized from the equipment nameplate — not from a table. The nameplate gives the minimum circuit ampacity (MCA) and the maximum overcurrent protection (MOCP). The conductor is sized for the MCA, and the breaker is sized at or below the MOCP. A typical residential air conditioner might show MCA 18 amperes and MOCP 30 amperes: 12 AWG copper on a 30-ampere breaker.</p><p>The reason the breaker can be larger than the wire's ordinary ampacity is that the motor's overload protection is built into the equipment. The breaker protects against short circuits and ground faults; the equipment's own overload device protects the motor and the conductors from overload. That is a different scheme from a general-purpose circuit, where the breaker does both jobs.</p><p>A furnace with electric heat is sized like a continuous load: the heat strips draw steadily for hours, so the circuit is sized at 125% of the load. A heat pump's outdoor unit and indoor air handler may be on separate circuits, each sized from its own nameplate. The disconnect for the outdoor unit must be within sight of the equipment (440.14) so a technician can kill power while working on it — and that work is always done de-energized and locked out/tagged out under a licensed supervisor.</p><ul><li>Size HVAC circuits from the nameplate: MCA for the wire, MOCP for the breaker (Article 440).</li><li>Breaker may exceed the wire's ordinary ampacity because the equipment provides overload protection.</li><li>Outdoor-unit disconnect within sight of the equipment (440.14).</li></ul>"
    },
    {
      "heading": "Individual Branch Circuits for Appliances",
      "html": "<p>Section 210.23 and Article 422 require individual branch circuits for appliances that draw heavily or that the manufacturer requires to be on their own circuit. The usual list in a house: the electric range, the electric dryer, the electric water heater, the dishwasher, the garbage disposal, the microwave (when it is a fixed, built-in unit), and the furnace or air handler. A built-in microwave on a shared circuit will trip the breaker when the coffee maker runs at the same time.</p><p>The electric water heater is a continuous load: a 4,500-watt, 240-volt water heater draws 18.75 amperes, so the circuit is sized at 125% — 23.4 amperes — calling for a 25-ampere breaker on 10 AWG copper. The dishwasher and disposal are usually 15- or 20-ampere individual circuits, and the disposal may share a circuit with the dishwasher only where the Code and the manufacturer permit it.</p><p>Fixed appliances are also covered by Article 422's disconnect rules: an appliance must have a disconnect within sight, or the breaker must be capable of being locked in the open position. The point is the same as the HVAC disconnect — a technician must be able to kill power to the machine they are working on, and know it will stay off.</p><div class=\"callout\"><strong>Key idea:</strong> Heavy or fixed appliances get individual branch circuits: range, dryer, water heater, dishwasher, disposal, built-in microwave, furnace. The nameplate decides the size.</div>"
    },
    {
      "heading": "Basements, Garages, and Outdoors",
      "html": "<p>Section 210.52(G) requires at least one receptacle in each basement and garage, and in a basement the receptacle must be GFCI-protected (210.8(A)(5)). A garage needs GFCI protection for all its receptacles (210.8(A)(2)), and a garage door opener receptacle is no exception in the 2023 NEC. Outdoor receptacles are required by 210.52(E): at least one at the front and one at the back of a dwelling, accessible from grade, GFCI-protected and weather-resistant with an in-use cover (406.9).</p><p>Outdoor receptacles must be weather-resistant (WR) and tamper-resistant (TR), mounted in a weatherproof box with a cover that protects the receptacle even when a cord is plugged in — the “in-use” or “extra-duty” cover. A cover that only protects the receptacle when nothing is plugged in is not compliant for a receptacle that will actually be used.</p><p>In an unfinished basement, the receptacles are GFCI-protected and the wiring method must suit the exposure: NM cable is permitted in an unfinished basement only where it is protected from physical damage or run through bored holes in framing. Exposed NM run across a basement ceiling at head height is a common violation.</p><ul><li>Basements and garages: at least one receptacle each (210.52(G)); GFCI-protected.</li><li>Outdoors: at least one front and one back (210.52(E)); WR + TR receptacles, in-use covers (406.9).</li><li>Unfinished basements: protect NM cable from physical damage.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Laundry: one 20 A circuit for the washer (210.11(C)(2)); dryer on its own 240 V, 30 A circuit at 5,000 VA or nameplate (220.54).</li><li>HVAC: size from the nameplate — MCA for the wire, MOCP for the breaker (Article 440); disconnect within sight (440.14).</li><li>Water heater is a continuous load: 4,500 W at 240 V needs a 25 A circuit on 10 AWG Cu.</li><li>Individual circuits: range, dryer, water heater, dishwasher, disposal, built-in microwave, furnace.</li><li>Basements, garages, outdoors: receptacles required (210.52(E), (G)); GFCI-protected; outdoor receptacles WR + TR with in-use covers.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing an air conditioner circuit from Table 310.16 instead of the nameplate. HVAC circuits use MCA and MOCP from the equipment.</div><div class=\"callout\"><strong>Common mistake:</strong> Sharing the dishwasher circuit with the disposal when the manufacturer requires an individual circuit. The listing governs.</div><p><strong>Ready-to-Work link:</strong> If you can size a dryer circuit, a water-heater circuit, and an air-conditioner circuit from a nameplate, you have this module. Module 8 is the dwelling load calculation.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Laundry branch circuit",
      "def": "A 20-ampere circuit for the laundry area (210.11(C)(2))."
    },
    {
      "term": "220.54",
      "def": "Dryer load: 5,000 VA or the nameplate rating, whichever is larger."
    },
    {
      "term": "NEMA 14-30",
      "def": "The 4-wire, 30-ampere dryer receptacle used in new work."
    },
    {
      "term": "MCA",
      "def": "Minimum circuit ampacity, from the HVAC equipment nameplate; sizes the conductors."
    },
    {
      "term": "MOCP",
      "def": "Maximum overcurrent protection, from the HVAC equipment nameplate; sizes the breaker."
    },
    {
      "term": "Article 440",
      "def": "Air-conditioning and refrigeration equipment; HVAC circuits are sized from the nameplate."
    },
    {
      "term": "440.14",
      "def": "The disconnect for HVAC equipment must be within sight of the equipment."
    },
    {
      "term": "Individual branch circuit",
      "def": "A circuit supplying only one utilization equipment, such as a range or water heater."
    },
    {
      "term": "Continuous load",
      "def": "A load running 3 hours or more at maximum current; sized at 125%."
    },
    {
      "term": "210.52(E)",
      "def": "Outdoor receptacles: at least one at the front and one at the back of a dwelling."
    },
    {
      "term": "210.52(G)",
      "def": "At least one receptacle in each basement and garage."
    },
    {
      "term": "In-use cover",
      "def": "A weatherproof cover that protects an outdoor receptacle even with a cord plugged in (406.9)."
    },
    {
      "term": "Weather-resistant (WR)",
      "def": "A receptacle listed for outdoor use."
    }
  ],
  "video": {
    "title": "Microwave Outlet GFCI Protection NEC Requirements Explained",
    "embedUrl": "https://www.youtube.com/embed/ZVw97A5Yz7M",
    "note": "This video explains when a dedicated microwave outlet needs GFCI protection under the NEC — a good example of how appliance circuits and GFCI rules interact. Apply its reasoning to the dishwasher and disposal circuits in this module.",
    "more": [
      {
        "title": "How to Add a Sub Panel to Expand the Circuit Breaker Capacity.",
        "url": "https://www.youtube.com/watch?v=_ir2ap_ft_Y"
      },
      {
        "title": "Your Electrician Said \"Upgrade Your Panel and Service\" Here's the Math That Says Otherwise.",
        "url": "https://www.youtube.com/watch?v=MxglbqA5PXs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An electric dryer is rated 5,500 VA at 240 volts. What is the load in amperes, and what size circuit does it need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 220.54 uses the larger of 5,000 VA or the nameplate — here 5,500 VA. Step 2: 5,500 ÷ 240 = 22.9 amperes. Step 3: A 30-ampere circuit on 10 AWG copper is the standard dryer circuit, with a NEMA 14-30 receptacle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 4,500-watt, 240-volt electric water heater needs what size circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current = 4,500 ÷ 240 = 18.75 amperes. Step 2: A water heater is a continuous load, so size at 125%: 18.75 × 1.25 = 23.4 amperes. Step 3: A 25-ampere breaker on 10 AWG copper is the minimum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An air conditioner nameplate reads MCA 18 amperes, MOCP 30 amperes. What size wire and breaker do you use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Size the conductors for the MCA: 18 amperes calls for 12 AWG copper. Step 2: Size the breaker at or below the MOCP: a 30-ampere breaker. Step 3: The breaker may exceed the wire's ordinary ampacity because the equipment provides overload protection.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Can the laundry circuit feed the receptacle in the hallway outside the laundry room? Why or why not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: The laundry branch circuit required by 210.11(C)(2) serves only laundry outlets. Step 3: The hallway needs its own general-purpose circuit receptacle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A house has one outdoor receptacle at the back door and none at the front. Is that compliant?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Section 210.52(E) requires at least one outdoor receptacle at the front and one at the back of a dwelling. Step 3: Both must be GFCI-protected, weather-resistant, tamper-resistant, and fitted with in-use covers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A garage door opener is plugged into a receptacle in the garage ceiling. Does it need GFCI protection?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes. Step 2: Section 210.8(A)(2) requires GFCI protection for garage receptacles, including the ceiling receptacle for the door opener, in the 2023 NEC. Step 3: The protection may be provided by a GFCI receptacle or a GFCI breaker.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The laundry branch circuit required by 210.11(C)(2) is:",
      "choices": [
        "15 amperes",
        "20 amperes",
        "25 amperes",
        "30 amperes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The laundry circuit is 20 amperes. (a) 15 A is too small. (c) and (d) 25 and 30 A exceed the required rating."
    },
    {
      "q": "Under 220.54, an electric dryer load is taken as:",
      "choices": [
        "The nameplate rating only",
        "5,000 VA or the nameplate rating, whichever is larger",
        "3,000 VA",
        "The breaker rating"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.54 uses the larger of 5,000 VA or nameplate. (a) The nameplate alone is not the rule when it is below 5,000 VA. (c) 3,000 VA is not the dryer figure. (d) The breaker rating does not set the load."
    },
    {
      "q": "An air conditioner nameplate reads MCA 22 A, MOCP 35 A. The conductors are sized for:",
      "choices": [
        "35 amperes",
        "22 amperes",
        "30 amperes",
        "The service size"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conductors are sized for the MCA (22 A). (a) 35 A is the MOCP, which sizes the breaker. (c) 30 A is neither figure. (d) The service size does not size the branch circuit."
    },
    {
      "q": "The maximum overcurrent protection for that air conditioner is:",
      "choices": [
        "22 amperes",
        "30 amperes",
        "35 amperes",
        "40 amperes"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The breaker is sized at or below the MOCP of 35 A. (a) 22 A is the MCA. (b) 30 A is below the MOCP and would work, but 35 A is the maximum. (d) 40 A exceeds the MOCP."
    },
    {
      "q": "A 4,500-watt, 240-volt water heater draws 18.75 A. Because it is a continuous load, the circuit must be sized for at least:",
      "choices": [
        "18.75 amperes",
        "20 amperes",
        "23.4 amperes",
        "30 amperes"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 18.75 × 1.25 = 23.4 amperes, so a 25-ampere circuit is the minimum. (a) 18.75 A has no 125% margin. (b) 20 A is below the required 23.4 A. (d) 30 A exceeds the minimum."
    },
    {
      "q": "The HVAC disconnect must be located:",
      "choices": [
        "In the main panel only",
        "Within sight of the equipment",
        "In the attic",
        "At the meter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 440.14 requires the disconnect within sight of the equipment. (a) The panel may be far from the equipment. (c) and (d) The attic and the meter are not within sight of the outdoor unit."
    },
    {
      "q": "Outdoor receptacles for a dwelling are required:",
      "choices": [
        "At the back only",
        "At the front and the back",
        "On every wall",
        "Only if there is a deck"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.52(E) requires at least one at the front and one at the back. (a) The front is also required. (c) Every wall is more than the minimum. (d) A deck does not trigger the requirement."
    },
    {
      "q": "A garage receptacle in the 2023 NEC needs:",
      "choices": [
        "AFCI only",
        "GFCI protection",
        "No protection",
        "A 30-ampere circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.8(A)(2) requires GFCI protection for garage receptacles. (a) Garages are not in the AFCI room list. (c) Protection is required. (d) Garage receptacles are 15- or 20-ampere circuits."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Laundry, HVAC &amp; Appliances: Quick Reference</h3>\n<p><strong>Core idea:</strong> Heavy and fixed appliances get individual circuits sized from the load or the nameplate — never shared, never guessed.</p>\n<p><strong>Laundry:</strong> One 20 A circuit for the washer (210.11(C)(2)) · dryer: 5,000 VA or nameplate (220.54), usually 30 A / 240 V, NEMA 14-30.</p>\n<p><strong>HVAC (Article 440):</strong> MCA sizes the wire, MOCP sizes the breaker; disconnect within sight (440.14).</p>\n<p><strong>Water heater:</strong> Continuous load — 4,500 W at 240 V = 18.75 A × 1.25 = 23.4 A → 25 A circuit on 10 AWG Cu.</p>\n<p><strong>Outdoors/basements/garages:</strong> Receptacles required (210.52(E), (G)); GFCI-protected; outdoor receptacles WR + TR with in-use covers.</p>\n<p><strong>Self-check:</strong> Size a dryer, a water heater, and an air conditioner from a nameplate, out loud.</p>\n"
};
