// ele105 - Module 5: Lighting: Layout, Switching & Controls
module.exports = {
  "number": 5,
  "slug": "lighting-layout-switching-controls",
  "title": "Lighting: Layout, Switching & Controls",
  "estTime": "3–4 hours",
  "objectives": [
    "State the lighting-outlet requirements of 210.70.",
    "Lay out lighting for a room: switching, placement, and light levels.",
    "Wire single-pole, 3-way, and 4-way switching.",
    "Explain recessed luminaire rules and clearances.",
    "Choose lighting controls: dimmers, occupancy sensors, and photocells."
  ],
  "sections": [
    {
      "heading": "Lighting Outlets Required (210.70)",
      "html": "<p>Section 210.70 requires lighting outlets in the places people need light to move safely: every habitable room, hallway, stairway, attached garage, and bathroom, plus attics, under-floor spaces, utility rooms, and basements where equipment needing service is located. The outlets must be wall-switch-controlled, with the switch at the usual entry point — except in kitchens and bathrooms, where the switch may be at the entrance or the outlet may be controlled by other listed means.</p><p>Stairways get special attention: 210.70(A)(2) requires a wall switch at each floor level for a stairway with six or more risers, so nobody walks up or down a dark stair. A stairway with fewer than six risers needs a switch at one level. Hallways, stairways, and attached garages must have at least one wall-switch-controlled lighting outlet.</p><p>A switched receptacle may substitute for a lighting outlet in a habitable room other than a kitchen or bathroom — the classic living-room floor lamp on a switched outlet. But a switched receptacle is a compromise: it depends on someone plugging a lamp in, and it is not allowed where a fixed luminaire is the safer choice, such as a stairway.</p><ul><li>Lighting outlets required (210.70): habitable rooms, hallways, stairways, garages, bathrooms, equipment spaces.</li><li>Stairways with 6+ risers: a switch at each floor level.</li><li>Switched receptacles may substitute in habitable rooms except kitchens and bathrooms.</li></ul>"
    },
    {
      "heading": "Laying Out the Lights",
      "html": "<p>A good lighting layout starts with the room's use. A kitchen needs bright, even light over counters and the sink. A living room needs layered light: a ceiling fixture for general light, lamps for reading, and accent light for art. A bedroom needs a ceiling light plus bedside switching. A bathroom needs light at the mirror, not just the ceiling — a single ceiling fixture casts shadows on a face.</p><p>Spacing follows the luminaire: a recessed downlight lights a circle roughly as wide as its mounting height, so spacing them about one mounting height apart gives even coverage without dark spots. A 9-foot ceiling gets downlights about 4 to 5 feet apart. Spacing them wider saves fixtures and leaves dark patches; spacing them closer wastes fixtures and energy.</p><p>Light levels are a design choice, not a Code rule, but the load calculation still counts: dwelling lighting is calculated at 3 VA per square foot (220.41). LED luminaires have cut the actual load far below that figure, which is why the calculation is conservative — it covers the worst case, not the LED case.</p><div class=\"callout\"><strong>Key idea:</strong> Layer the light: general, task, and accent. Space recessed lights about one mounting height apart for even coverage.</div>"
    },
    {
      "heading": "Switching: Single-Pole, 3-Way, and 4-Way",
      "html": "<p>A single-pole switch controls a light from one location: power in, switched hot out. A 3-way switch controls a light from two locations: two 3-way switches connected by a pair of travelers, with the common terminal of one switch fed by power and the common of the other feeding the light. A 4-way switch goes between the two 3-way switches to add a third (or fourth, or fifth) control point — each additional location adds one 4-way switch in the traveler path.</p><p>The wiring is logical once the travelers are understood: the travelers carry the switched current between the 3-way switches, and the commons carry power in and switched power out. The most common wiring error is landing a traveler on a common terminal, which makes the light work from one switch and not the other, or makes it work only when the other switch is in a particular position.</p><p>Section 404 governs switches: they must be listed, rated for the load, and installed in boxes with proper clearances. A switch controlling a receptacle or a luminaire must be grounded where a grounding conductor is present, and the switch's metal yoke must be bonded. Dimmer switches must be listed for the load they control — an LED dimmer for LED luminaires, not an old incandescent dimmer that flickers them.</p><ul><li>Single-pole: one location. 3-way: two locations, two travelers. 4-way: added between 3-ways for each extra location.</li><li>Travelers connect the 3-way switches; commons carry power in and switched power out.</li><li>Switches are governed by Article 404; dimmers must be listed for the load.</li></ul>"
    },
    {
      "heading": "Recessed Luminaires and Clearances",
      "html": "<p>Recessed luminaires (Article 410, Part XI) are the downlights set into a ceiling. The critical distinction is IC-rated versus non-IC-rated: an IC-rated luminaire may be in direct contact with thermal insulation, while a non-IC-rated luminaire must be kept at least 3 inches from insulation and may not be covered by it. Installing a non-IC can under insulation is a fire hazard, and it is one of the most common lighting violations.</p><p>Recessed luminaires also need clearance from combustible materials and must be installed per their listing: the trim, the lamp type, and the wattage must match the label. An LED retrofit kit listed for the housing is a compliant way to upgrade an old can, and it usually improves the light and cuts the heat at the same time.</p><p>In a bathroom, luminaires over a tub or shower must be listed for damp or wet locations, and a luminaire within the tub or shower zone must be listed for wet locations and protected by a GFCI where the Code requires it. A hanging luminaire over a tub is prohibited unless it is part of a listed assembly and installed per 410.10(D).</p><div class=\"callout\"><strong>Key idea:</strong> IC-rated cans may touch insulation; non-IC cans need 3 inches of clearance and must never be covered. Check the label before you bury a can in insulation.</div>"
    },
    {
      "heading": "Lighting Controls",
      "html": "<p>Modern lighting controls save energy and add convenience. Dimmers adjust light level and must be matched to the lamp: LED luminaires need LED-rated dimmers, and the dimmer's wattage rating must cover the total load. Occupancy and vacancy sensors turn lights off when a room is empty — required by energy codes in many commercial spaces and increasingly used in homes for closets, garages, and laundry rooms. A vacancy sensor requires the occupant to turn the light on but turns it off automatically; an occupancy sensor does both.</p><p>Photocells turn outdoor lights on at dusk and off at dawn, and they are the standard control for yard and security lighting. Timers and smart switches add scheduling and remote control, but they must be listed for the load and installed per Article 404 and the manufacturer's instructions. A smart switch that needs a neutral must have one — many older switch boxes have no neutral, and borrowing one from another circuit is a violation.</p><p>Whatever the control, the fundamentals do not change: the circuit is de-energized and locked out/tagged out before work, the device is listed for the load, the box fill is checked, and the finished installation is tested from every switch location before the job is called done.</p><div class=\"callout\"><strong>Common mistake:</strong> Installing a smart switch that needs a neutral in a box that has none, and borrowing a neutral from another circuit. Neutrals must not be shared between circuits except in a proper multiwire branch circuit.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Lighting outlet",
      "def": "An outlet intended for the direct connection of a luminaire (210.70)."
    },
    {
      "term": "Habitable room",
      "def": "A room used for living, sleeping, eating, or cooking."
    },
    {
      "term": "Single-pole switch",
      "def": "A switch that controls a load from one location."
    },
    {
      "term": "3-way switch",
      "def": "A switch that controls a load from two locations, using travelers."
    },
    {
      "term": "4-way switch",
      "def": "A switch installed between two 3-way switches to add control locations."
    },
    {
      "term": "Traveler",
      "def": "A conductor carrying switched current between 3-way (and 4-way) switches."
    },
    {
      "term": "Common terminal",
      "def": "The terminal on a 3-way switch that carries power in or switched power out."
    },
    {
      "term": "IC-rated",
      "def": "A recessed luminaire rated for direct contact with thermal insulation."
    },
    {
      "term": "Non-IC-rated",
      "def": "A recessed luminaire that must be kept at least 3 inches from insulation and never covered by it."
    },
    {
      "term": "Dimmer",
      "def": "A control that varies the light level; must be listed for the lamp type."
    },
    {
      "term": "Occupancy sensor",
      "def": "A control that turns lights on and off automatically based on presence."
    },
    {
      "term": "Vacancy sensor",
      "def": "A control that requires manual-on and turns lights off automatically when the room is empty."
    },
    {
      "term": "Photocell",
      "def": "A light-sensitive control that turns outdoor lights on at dusk and off at dawn."
    },
    {
      "term": "410.10(D)",
      "def": "Luminaires over a bathtub or shower must be listed for the location."
    }
  ],
  "video": {
    "title": "DIY Electrical Wiring Tips for Home Electrical Wiring Projects - Vol 1",
    "embedUrl": "https://www.youtube.com/embed/-9Uh48uRX4o",
    "note": "This home-wiring tips video covers lighting and switching along with the rest of a house's wiring. Watch for the switching examples and note which rooms get a switched receptacle and which get a fixed luminaire.",
    "more": [
      {
        "title": "120V 240V Electricity explained - Split phase 3 wire electrician",
        "url": "https://www.youtube.com/watch?v=fJeRabV5hNU"
      },
      {
        "title": "How to wire a new house",
        "url": "https://www.youtube.com/watch?v=qFOqV3_paFw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A stairway has 8 risers between two floors. How many switches does 210.70 require, and where?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A stairway with 6 or more risers needs a wall switch at each floor level. Step 2: One switch at the bottom and one at the top. Step 3: The two switches are wired as a 3-way pair so the light can be controlled from either floor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A living room has a switched receptacle for a floor lamp and no ceiling fixture. Is that compliant?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes, in a habitable room other than a kitchen or bathroom. Step 2: Section 210.70 allows a switched receptacle to substitute for a lighting outlet in those rooms. Step 3: A stairway or bathroom could not use a switched receptacle this way.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bedroom light must be controlled from the door and from the bed. What switches do you need, and how are they wired?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two 3-way switches, one at each location. Step 2: Power feeds the common of the first 3-way; the common of the second feeds the light. Step 3: Two travelers connect the 3-way switches together.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A hallway light must be controlled from three locations. What switches do you need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two 3-way switches and one 4-way switch. Step 2: The 4-way goes between the two 3-ways in the traveler path. Step 3: Each additional location beyond three adds one more 4-way switch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A non-IC-rated recessed can is installed in a ceiling that will be insulated. What is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The can must be kept at least 3 inches from thermal insulation. Step 2: The insulation must never cover the can. Step 3: The compliant fix is usually to replace it with an IC-rated can or to build a clearance box around it per the listing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A recessed downlight is mounted 9 feet high. About how far apart should the downlights be spaced for even coverage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A downlight covers a circle roughly as wide as its mounting height. Step 2: Spacing of about one mounting height — about 9 feet — would be the outer limit, but in practice 4 to 5 feet apart gives even coverage without dark spots. Step 3: The exact spacing follows the luminaire's photometric data and the room's use.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Section 210.70 requires a wall-switch-controlled lighting outlet in:",
      "choices": [
        "Every habitable room, hallway, stairway, garage, and bathroom",
        "Bedrooms only",
        "Kitchens only",
        "Outdoor areas only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 210.70 requires lighting outlets in all of those places. (b), (c), and (d) Each names only part of the requirement."
    },
    {
      "q": "A stairway with 6 or more risers needs a switch:",
      "choices": [
        "At the bottom only",
        "At the top only",
        "At each floor level",
        "In the middle"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 210.70(A)(2) requires a switch at each floor level. (a) and (b) One switch alone leaves one floor in the dark. (d) The middle is not a floor level."
    },
    {
      "q": "A 3-way switch controls a light from:",
      "choices": [
        "One location",
        "Two locations",
        "Three locations",
        "Four locations"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two 3-way switches control a light from two locations. (a) One location needs a single-pole switch. (c) Three locations need two 3-ways plus a 4-way. (d) Four locations need two 3-ways plus two 4-ways."
    },
    {
      "q": "To add a third control location for a light, you add:",
      "choices": [
        "Another single-pole switch",
        "A 4-way switch between the two 3-way switches",
        "Another 3-way switch only",
        "A dimmer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 4-way switch goes between the 3-ways in the traveler path. (a) A single-pole cannot add a location to a 3-way circuit. (c) A third 3-way alone does not work. (d) A dimmer controls level, not locations."
    },
    {
      "q": "An IC-rated recessed luminaire:",
      "choices": [
        "Must be kept 3 inches from insulation",
        "May be in direct contact with thermal insulation",
        "May not be used in a ceiling",
        "Must be covered by insulation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IC-rated means insulation-contact rated. (a) The 3-inch clearance applies to non-IC luminaires. (c) Recessed luminaires are made for ceilings. (d) Covering a luminaire with insulation is a fire hazard unless it is IC-rated and listed for it."
    },
    {
      "q": "A non-IC-rated recessed luminaire must be kept at least how far from thermal insulation?",
      "choices": [
        "1 inch",
        "3 inches",
        "6 inches",
        "12 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Non-IC luminaires need at least 3 inches of clearance and must never be covered. (a) 1 inch is too close. (c) and (d) 6 and 12 inches exceed the minimum."
    },
    {
      "q": "The travelers in a 3-way switching circuit:",
      "choices": [
        "Carry power from the panel to the light",
        "Carry switched current between the 3-way switches",
        "Are the grounding conductors",
        "Connect the light to the neutral"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Travelers connect the two 3-way switches. (a) Power enters on a common terminal. (c) Grounding conductors are bare or green. (d) The neutral connects to the light directly."
    },
    {
      "q": "A vacancy sensor differs from an occupancy sensor in that it:",
      "choices": [
        "Turns lights on automatically",
        "Requires the occupant to turn the light on, and turns it off automatically",
        "Never turns lights off",
        "Works only outdoors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vacancy = manual-on, auto-off. (a) That is an occupancy sensor. (c) Both sensor types turn lights off. (d) Both are used indoors."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Lighting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Every habitable room, hallway, stairway, garage, and bathroom needs a switch-controlled lighting outlet (210.70). Switches and luminaires follow the room's use.</p>\n<p><strong>Stairways:</strong> 6+ risers → a switch at each floor level.</p>\n<p><strong>Switching:</strong> Single-pole = 1 location · 3-way = 2 locations (two travelers) · 4-way = each extra location, installed between the 3-ways.</p>\n<p><strong>Recessed cans:</strong> IC-rated may touch insulation; non-IC needs 3 in. clearance and must never be covered.</p>\n<p><strong>Controls:</strong> Dimmers must match the lamp type; occupancy sensors auto-on/off; vacancy sensors manual-on/auto-off; photocells for outdoor lights.</p>\n<p><strong>Self-check:</strong> Wire a light from three locations on paper, and state the IC vs. non-IC rule.</p>\n"
};
