// ele105 — Midterm and Final exams.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "The service drop crosses a public street. What is the minimum clearance?",
        "choices": [
          "10 feet",
          "12 feet",
          "18 feet",
          "24 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 230.24 requires 18 feet above public streets. (a) 10 feet is the grade clearance. (b) 12 feet is the residential driveway clearance. (d) 24 feet exceeds the requirement."
      },
      {
        "module": 1,
        "q": "The voltage between one hot leg and the neutral in a residential service is:",
        "choices": [
          "120 volts",
          "208 volts",
          "240 volts",
          "277 volts"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Hot-to-neutral is 120 volts. (b) 208 volts is a three-phase wye voltage. (c) 240 volts is hot-to-hot. (d) 277 volts is a commercial wye voltage."
      },
      {
        "module": 2,
        "q": "The main bonding jumper is sized by:",
        "choices": [
          "Table 250.66",
          "Table 250.122",
          "Table 250.102(C)(1)",
          "Table 310.16"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 250.102(C)(1) sizes the main bonding jumper. (a) Table 250.66 sizes the GEC. (b) Table 250.122 sizes the EGC. (d) Table 310.16 is ampacity."
      },
      {
        "module": 2,
        "q": "A dwelling service requires surge protection under:",
        "choices": [
          "210.8",
          "230.67",
          "250.53",
          "300.5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.67 requires an SPD at dwelling services. (a) 210.8 is GFCI protection. (c) 250.53 covers grounding electrodes. (d) 300.5 covers underground installations."
      },
      {
        "module": 2,
        "q": "Two ground rods must be spaced at least how far apart?",
        "choices": [
          "3 feet",
          "6 feet",
          "10 feet",
          "16 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ground rods must be at least 6 feet apart. (a) 3 feet is too close. (c) and (d) 10 and 16 feet exceed the minimum."
      },
      {
        "module": 3,
        "q": "A wall 20 feet long with no openings needs at least how many receptacles by the 6-foot rule?",
        "choices": [
          "Two",
          "Three",
          "Four",
          "Five"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Receptacles no more than 12 feet apart: one within 6 feet of each end and one in the middle = three. (a) Two would leave a point more than 6 feet from a receptacle. (c) and (d) Four or five exceed the minimum."
      },
      {
        "module": 3,
        "q": "Small-appliance branch circuits may serve receptacles in:",
        "choices": [
          "The kitchen, pantry, breakfast, and dining areas",
          "Any room in the house",
          "The bedrooms",
          "The garage"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.52(B) limits them to the listed areas. (b) They may not serve any room. (c) and (d) Bedrooms and garages have their own circuits."
      },
      {
        "module": 3,
        "q": "A multiwire branch circuit's two hot conductors must be on:",
        "choices": [
          "The same panel leg",
          "Opposite panel legs",
          "The same breaker",
          "Different panels"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Opposite legs, so the neutral carries only unbalanced current. (a) Same-leg hots overload the neutral. (c) They need separate overcurrent protection per leg. (d) They are in the same panel."
      },
      {
        "module": 4,
        "q": "A Class A GFCI trips at:",
        "choices": [
          "1 milliampere",
          "4 to 6 milliamperes",
          "20 milliamperes",
          "100 milliamperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Class A GFCIs trip at 4–6 mA. (a) 1 mA is below the trip range. (c) and (d) 20 and 100 mA are above the Class A level."
      },
      {
        "module": 4,
        "q": "GFCI protection is required for receptacles within 6 feet of:",
        "choices": [
          "A bedroom door",
          "The top inside edge of a sink",
          "A hallway",
          "A closet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.8(A) requires GFCI within 6 feet of a sink's top inside edge. (a), (c), and (d) Bedrooms, hallways, and closets do not trigger the 6-foot GFCI rule."
      },
      {
        "module": 4,
        "q": "On a GFCI receptacle, downstream receptacles are protected when wired to the:",
        "choices": [
          "Line terminals",
          "Load terminals",
          "Ground screw",
          "Mounting screws"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Load terminals feed the protected downstream receptacles. (a) Line terminals take power from the panel. (c) The ground screw is for the grounding conductor. (d) Mounting screws hold the device."
      },
      {
        "module": 4,
        "q": "AFCI protection is required on 120-volt, 15- and 20-ampere circuits in:",
        "choices": [
          "Garages only",
          "Kitchens, family rooms, dining rooms, living rooms, bedrooms, and similar rooms",
          "Outdoor areas only",
          "Bathrooms only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.12 lists those rooms. (a) Garages are not in the AFCI list. (c) Outdoor areas need GFCI. (d) Bathrooms need GFCI, not AFCI."
      },
      {
        "module": 5,
        "q": "A stairway with 8 risers needs a switch:",
        "choices": [
          "At the bottom only",
          "At the top only",
          "At each floor level",
          "In the middle"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 210.70(A)(2) requires a switch at each floor level for 6 or more risers. (a) and (b) One switch leaves a floor in the dark. (d) The middle is not a floor level."
      },
      {
        "module": 5,
        "q": "A light controlled from three locations needs:",
        "choices": [
          "Three single-pole switches",
          "Two 3-way switches and one 4-way switch",
          "Three 3-way switches",
          "One 3-way switch only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two 3-ways plus one 4-way in the traveler path. (a) Single-pole switches cannot do this. (c) Three 3-ways alone do not work. (d) One 3-way controls from one location."
      },
      {
        "module": 5,
        "q": "In a habitable room other than a kitchen or bathroom, the switch-controlled lighting outlet required by 210.70(A)(1) may be:",
        "choices": [
          "A switched receptacle outlet",
          "A ceiling fan only",
          "An outdoor luminaire",
          "A night light"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.70(A)(1) permits a switched receptacle outlet in habitable rooms other than kitchens and bathrooms. (b) A ceiling fan is not a lighting outlet. (c) An outdoor luminaire does not serve the room. (d) A night light is not a Code lighting outlet."
      },
      {
        "module": 6,
        "q": "A kitchen island 5 feet long needs:",
        "choices": [
          "No receptacle",
          "At least one receptacle",
          "Two receptacles",
          "A 240-volt receptacle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Islands 12 inches or longer need at least one receptacle in the 2023 NEC. (a) No receptacle is a violation. (c) Two exceeds the minimum. (d) A 240-volt receptacle is not the requirement."
      },
      {
        "module": 6,
        "q": "A bathroom receptacle must be within 3 feet of:",
        "choices": [
          "The toilet",
          "The outside edge of each basin",
          "The shower door",
          "The light switch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.52(D) requires a receptacle within 3 feet of each basin. (a), (c), and (d) The toilet, shower door, and light switch are not the measurement point."
      },
      {
        "module": 6,
        "q": "The spacing of kitchen countertop receptacles is measured:",
        "choices": [
          "Along the wall line",
          "Across the room diagonally",
          "From the floor to the countertop",
          "From the panel to the receptacle"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.52(C)(1) measures countertop receptacle spacing horizontally along the wall line. (b) Diagonal measurements are not used. (c) Height is not a spacing measurement. (d) Distance from the panel is irrelevant to spacing."
      },
      {
        "module": 1,
        "q": "The service point is:",
        "choices": [
          "The main breaker",
          "Where the utility's conductors meet the house's conductors",
          "The meter",
          "The first receptacle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The service point is where utility and premises conductors meet. (a) The main breaker is the service disconnect. (c) The meter measures energy. (d) The first receptacle is on a branch circuit."
      },
      {
        "module": 2,
        "q": "The grounding electrode conductor for a 100-ampere service with 2 AWG copper service conductors is:",
        "choices": [
          "8 AWG copper",
          "6 AWG copper",
          "4 AWG copper",
          "2 AWG copper"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Table 250.66: 2 AWG copper service conductors call for 8 AWG copper. (b) 6 AWG is the ground-rod cap, not the table value here. (c) 4 AWG is larger than required. (d) 2 AWG is much larger than required."
      },
      {
        "module": 3,
        "q": "Countertop receptacles must be no more than how far apart?",
        "choices": [
          "24 inches",
          "36 inches",
          "48 inches",
          "72 inches"
        ],
        "answer": 2,
        "explanation": "Correct: (c). No point more than 24 inches from a receptacle means 48 inches maximum spacing. (a) 24 inches is the maximum distance from a point to a receptacle. (b) 36 inches is below the maximum. (d) 72 inches exceeds it."
      },
      {
        "module": 4,
        "q": "A GFCI works by comparing:",
        "choices": [
          "Hot and ground current",
          "Hot and neutral current",
          "Voltage and resistance",
          "Two hot legs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A GFCI compares outgoing hot current with returning neutral current. (a) It does not compare hot and ground. (c) It does not measure voltage and resistance. (d) It does not compare two hot legs."
      },
      {
        "module": 5,
        "q": "The travelers in a 3-way switching circuit connect:",
        "choices": [
          "The panel to the light",
          "The two 3-way switches together",
          "The light to the neutral",
          "The switch to the ground"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Travelers carry switched current between the 3-way switches. (a) Power enters on a common terminal. (c) The neutral connects to the light directly. (d) The ground connects to the switch yoke and box."
      },
      {
        "module": 6,
        "q": "Two household ranges, one 10 kW and one 12 kW, have a combined Table 220.55 demand of:",
        "choices": [
          "10 kW",
          "11 kW",
          "12 kW",
          "22 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Table 220.55, Column C: two appliances demand 11 kW. (a) 10 kW is the smaller nameplate. (c) 12 kW is the larger nameplate. (d) 22 kW is the sum with no demand applied."
      },
      {
        "module": 1,
        "q": "The minimum dwelling service disconnect rating is:",
        "choices": [
          "60 amperes",
          "100 amperes",
          "150 amperes",
          "200 amperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.79(C) sets the minimum at 100 amperes. (a) 60 A is below the minimum. (c) and (d) 150 and 200 A exceed the minimum."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "An overhead service drop above finished grade where pedestrians walk must clear by at least:",
        "choices": [
          "8 feet",
          "10 feet",
          "12 feet",
          "18 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.24 requires 10 feet above finished grade. (a) 8 feet is too low. (c) 12 feet is the driveway clearance. (d) 18 feet is the street clearance."
      },
      {
        "module": 2,
        "q": "A 400-ampere service uses 500 kcmil copper service conductors. The minimum grounding electrode conductor is:",
        "choices": [
          "6 AWG copper",
          "4 AWG copper",
          "1/0 AWG copper",
          "3/0 AWG copper"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 250.66: 500 kcmil copper calls for 1/0 AWG copper. (a) 6 AWG is the ground-rod cap. (b) 4 AWG is too small for 500 kcmil. (d) 3/0 AWG is larger than required."
      },
      {
        "module": 3,
        "q": "The minimum copper conductor for a 15-ampere general-purpose branch circuit is:",
        "choices": [
          "14 AWG",
          "12 AWG",
          "10 AWG",
          "8 AWG"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 14 AWG copper is the minimum for 15 amperes. (b) 12 AWG is the minimum for 20 amperes. (c) 10 AWG is the minimum for 30 amperes. (d) 8 AWG is larger than needed."
      },
      {
        "module": 4,
        "q": "A GFCI receptacle that will not trip when the test button is pressed should be:",
        "choices": [
          "Left in service",
          "Replaced",
          "Rewired to the load terminals",
          "Tested again in a year"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A GFCI that will not trip has failed and must be replaced. (a) Leaving it in service gives false safety. (c) Rewiring does not fix a failed device. (d) Waiting a year leaves an unprotected circuit."
      },
      {
        "module": 5,
        "q": "A wall switch controlling a luminaire in a room must be located:",
        "choices": [
          "At the usual point of entry to the room",
          "Behind the door",
          "In the next room",
          "At the panel"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.70 requires the lighting outlet to be controlled by a wall switch at the usual point of entry. (b) A switch behind a door is not at the point of entry. (c) A switch in another room does not control the room's light from its entry. (d) The panel is not a room lighting control."
      },
      {
        "module": 6,
        "q": "A dishwasher in a dwelling requires:",
        "choices": [
          "AFCI protection only",
          "GFCI protection",
          "No protection",
          "A 30-ampere circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.8(D) requires GFCI protection for dishwashers. (a) AFCI alone does not satisfy the GFCI rule. (c) Protection is required. (d) A dishwasher is usually on a 15- or 20-ampere circuit, not 30."
      },
      {
        "module": 7,
        "q": "An electric range circuit of 8-3/4 kW or more must be supplied by a branch circuit rated at least:",
        "choices": [
          "20 amperes",
          "30 amperes",
          "40 amperes",
          "50 amperes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 210.19(A)(3) requires a minimum 40-ampere circuit for a range of 8-3/4 kW or more. (a) and (b) 20 and 30 amperes are too small. (d) 50 amperes exceeds the minimum."
      },
      {
        "module": 8,
        "q": "The general lighting load for a dwelling is:",
        "choices": [
          "1 VA per square foot",
          "2 VA per square foot",
          "3 VA per square foot",
          "5 VA per square foot"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 220.41: 3 VA per square foot. (a) and (b) 1 and 2 VA are too low. (d) 5 VA is too high for dwellings."
      },
      {
        "module": 9,
        "q": "On a floor plan, the symbol for a ceiling fan is:",
        "choices": [
          "A circle with a cross",
          "A circle with blades",
          "A circle with two lines",
          "A square with a diagonal"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ceiling fan is drawn as a circle with blades. (a) A circle with a cross is a luminaire. (c) A circle with two lines is a receptacle. (d) A square with a diagonal is a panel."
      },
      {
        "module": 10,
        "q": "NM cable run through bored holes in studs is considered supported by:",
        "choices": [
          "The holes themselves",
          "Staples between the holes",
          "The drywall",
          "The insulation"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Cable through bored holes is considered supported by the holes under 334.30. (b) Staples are not needed between close holes. (c) Drywall is not a cable support. (d) Insulation does not support cable."
      },
      {
        "module": 11,
        "q": "A receptacle's grounding terminal is identified by:",
        "choices": [
          "A brass screw",
          "A silver screw",
          "A green screw or green-colored terminal",
          "A black screw"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The grounding terminal is green. (a) Brass is the hot terminal. (b) Silver is the neutral terminal. (d) There is no black terminal screw on a receptacle."
      },
      {
        "module": 12,
        "q": "A breaker that trips after a delay under heavy load most likely indicates:",
        "choices": [
          "A short circuit",
          "An overload",
          "A ground fault",
          "An open neutral"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A delayed trip under heavy load is an overload. (a) A short circuit trips instantly. (c) A ground fault trips a GFCI. (d) An open neutral causes voltage swings."
      },
      {
        "module": 1,
        "q": "The conductors that run from the utility's overhead lines to the house are called:",
        "choices": [
          "The service lateral",
          "The service drop",
          "The feeder",
          "The branch circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Overhead service conductors from the utility to the house are the service drop. (a) A service lateral is underground. (c) A feeder runs from the service to a subpanel. (d) A branch circuit runs from the panel to the outlets."
      },
      {
        "module": 2,
        "q": "A single ground rod measuring 40 ohms to earth requires:",
        "choices": [
          "Nothing",
          "A supplemental electrode",
          "A larger rod",
          "A deeper rod only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 250.53(A)(2) requires a supplemental electrode over 25 ohms. (a) One rod is enough only at 25 ohms or less. (c) A larger rod is not the Code's remedy. (d) Driving deeper may help resistance but is not what the section requires."
      },
      {
        "module": 3,
        "q": "A foyer with an area of 60 square feet or larger needs:",
        "choices": [
          "No receptacle",
          "At least one receptacle",
          "Two receptacles",
          "A 240-volt receptacle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.52(I) requires at least one receptacle in a foyer of 60 square feet or more. (a) No receptacle is a violation. (c) Two exceeds the minimum. (d) A 240-volt receptacle is not the requirement."
      },
      {
        "module": 4,
        "q": "AFCI protection under 210.12 applies to:",
        "choices": [
          "120-volt, 15- and 20-ampere circuits",
          "240-volt circuits",
          "30-ampere circuits",
          "All circuits in the house"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.12 covers 120-volt, 15- and 20-ampere branch circuits. (b) 240-volt circuits are not in the AFCI list. (c) 30-ampere circuits are not in the AFCI list. (d) Not every circuit requires AFCI protection."
      },
      {
        "module": 5,
        "q": "To control a light from four locations, you need:",
        "choices": [
          "Two 3-way switches and two 4-way switches",
          "Four 3-way switches",
          "One 3-way switch",
          "Four single-pole switches"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Two 3-ways plus one 4-way per extra location: four locations need two 4-ways. (b) Four 3-ways alone do not work. (c) One 3-way controls from one location. (d) Single-pole switches cannot do this."
      },
      {
        "module": 6,
        "q": "A receptacle outlet for a refrigerator in a kitchen:",
        "choices": [
          "Must be on its own 30-ampere circuit",
          "May be on a small-appliance branch circuit or an individual branch circuit",
          "Must be on the bathroom circuit",
          "May not be installed in a kitchen"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.52(B)(1) permits a refrigerator receptacle on a small-appliance circuit or on an individual branch circuit. (a) 30 amperes is not required. (c) The bathroom circuit serves bathrooms only. (d) Refrigerator receptacles are normal in kitchens."
      },
      {
        "module": 7,
        "q": "An air conditioner nameplate reads MCA 22 A, MOCP 35 A. The breaker is sized at or below:",
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
        "module": 8,
        "q": "Table 220.45 applies demand to the general load as:",
        "choices": [
          "First 3,000 VA at 100%, remainder at 35%",
          "All of it at 35%",
          "First 10,000 VA at 100%, remainder at 40%",
          "All of it at 100%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Table 220.45: first 3,000 VA at 100%, the rest at 35%. (b) The first 3,000 VA is not discounted. (c) That is the optional method (220.82). (d) No demand factor would oversize the service."
      },
      {
        "module": 9,
        "q": "On a residential plan, S4 means:",
        "choices": [
          "A single-pole switch",
          "A 3-way switch",
          "A 4-way switch",
          "A switched receptacle"
        ],
        "answer": 2,
        "explanation": "Correct: (c). S4 is a 4-way switch. (a) A single-pole switch is S. (b) A 3-way switch is S3. (d) A switched receptacle has a receptacle symbol."
      },
      {
        "module": 10,
        "q": "NM cable run across the bottom of floor joists in an unfinished basement must be:",
        "choices": [
          "Left exposed",
          "Run through bored holes or protected by a running board",
          "Stapled to the bottom of the joists",
          "Run on the floor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 334.15(C) requires cable across joist bottoms to run through bored holes or be protected. (a) Exposed cable across joist bottoms is a violation. (c) Stapling to the bottom leaves the cable exposed to damage. (d) Cable on the floor is never acceptable."
      },
      {
        "module": 11,
        "q": "A luminaire weighing more than 50 pounds must be supported:",
        "choices": [
          "By the outlet box alone",
          "Independently of the outlet box",
          "By the drywall",
          "By the switch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 314.27(B) requires luminaires over 50 pounds to be supported independently of the box. (a) The box alone is not enough for a heavy luminaire. (c) Drywall is not a support. (d) The switch carries no load."
      },
      {
        "module": 12,
        "q": "A GFCI receptacle that trips every time one particular appliance is plugged in most likely indicates:",
        "choices": [
          "A tripped breaker",
          "A ground fault in that appliance",
          "An open neutral",
          "A worn receptacle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tripping only with one appliance points to a ground fault in that appliance. (a) A tripped breaker kills the whole circuit. (c) An open neutral causes voltage swings across rooms. (d) A worn receptacle causes heat or looseness, not GFCI tripping."
      },
      {
        "module": 1,
        "q": "The conductors between the meter and the panel are called:",
        "choices": [
          "The service drop",
          "The service-entrance conductors",
          "The feeder",
          "The branch circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Conductors from the service point (or meter) to the panel are service-entrance conductors. (a) The service drop is the utility's overhead conductors. (c) A feeder runs from the service to a subpanel. (d) A branch circuit runs from the panel to the outlets."
      },
      {
        "module": 2,
        "q": "A metal water pipe used as a grounding electrode must be supplemented by:",
        "choices": [
          "Nothing",
          "An additional grounding electrode",
          "A larger water pipe",
          "A second meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 250.53(D)(2) requires a metal water pipe electrode to be supplemented by an additional electrode. (a) A water pipe alone is not enough. (c) A larger pipe is not the remedy. (d) A second meter has nothing to do with grounding."
      },
      {
        "module": 3,
        "q": "A multiwire branch circuit's ungrounded conductors must disconnect:",
        "choices": [
          "One at a time",
          "All together",
          "Only at the panel",
          "Never"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.4(B) requires all ungrounded conductors to disconnect together. (a) One at a time leaves the shared neutral live. (c) The disconnect is at the panel, but the rule is simultaneity. (d) They must be disconnectable."
      },
      {
        "module": 4,
        "q": "A GFCI receptacle's test button works by:",
        "choices": [
          "Shorting hot to ground",
          "Creating a small imbalance between hot and neutral current",
          "Opening the breaker",
          "Measuring the voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The test button creates a small current imbalance that the GFCI must detect and trip on. (a) It does not short hot to ground. (c) It does not open the breaker. (d) It does not measure voltage."
      },
      {
        "module": 5,
        "q": "A light controlled from two locations uses:",
        "choices": [
          "One single-pole switch",
          "Two 3-way switches and two travelers",
          "Two 4-way switches",
          "One dimmer only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two locations need two 3-way switches connected by two travelers. (a) A single-pole switch controls from one location. (c) 4-way switches are used for three or more locations. (d) A dimmer alone controls from one location."
      },
      {
        "module": 6,
        "q": "The 20-ampere bathroom branch circuit may serve the lighting in the same bathroom if:",
        "choices": [
          "It serves only that one bathroom",
          "It also serves the kitchen",
          "It serves two bathrooms",
          "It is a 15-ampere circuit"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The bathroom circuit may serve that bathroom's lighting only when it serves no other bathroom. (b) The kitchen has its own circuits. (c) Serving two bathrooms limits the circuit to receptacles only. (d) The bathroom circuit must be 20 amperes."
      },
      {
        "module": 7,
        "q": "A 4,500-watt, 240-volt water heater draws 18.75 A. As a continuous load the circuit must be sized for at least:",
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
        "module": 8,
        "q": "In the optional load calculation method (220.82), the demand for a dwelling is:",
        "choices": [
          "The first 10 kW at 100% and the remainder at 40%",
          "The first 3,000 VA at 100% and the remainder at 35%",
          "All of it at 100%",
          "All of it at 40%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 220.82: the first 10 kW at 100%, the remainder at 40%. (b) That is the standard method's Table 220.45. (c) No demand factor would oversize the service. (d) The first 10 kW is not discounted."
      },
      {
        "module": 9,
        "q": "An elevation drawing is most useful to the electrician for finding:",
        "choices": [
          "The receptacle spacing in a room",
          "The service attachment point and the meter location",
          "The panel schedule",
          "The ceiling heights in a closet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The elevation shows the outside of the house, including the service attachment and meter. (a) Receptacle spacing is on the floor plan. (c) The panel schedule is a table, not a drawing. (d) Ceiling heights are shown in a section."
      },
      {
        "module": 10,
        "q": "NM cable run across the top of attic joists near the attic access must be:",
        "choices": [
          "Left exposed",
          "Protected by a running board or guard strips",
          "Stapled to the joists",
          "Covered with insulation"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 334.23 requires cable across attic joists within 6 feet of the access to be protected by guard strips or a running board. (a) Exposed cable near the access is a violation. (c) Stapling does not protect it from foot traffic. (d) Insulation is not protection."
      },
      {
        "module": 11,
        "q": "A receptacle installed in a kitchen countertop:",
        "choices": [
          "May be installed face-up",
          "Must not be installed in a face-up position",
          "Must be 240 volts",
          "Must be on a 30-ampere circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 406.5(E) prohibits receptacles in a face-up position in countertops. (a) Face-up installation is the violation. (c) Countertop receptacles are 120 volts. (d) A 30-ampere circuit is not required."
      },
      {
        "module": 12,
        "q": "An inspector's correction notice must be answered by:",
        "choices": [
          "Ignoring it until the final inspection",
          "Correcting the listed violations and calling for re-inspection",
          "Arguing with the inspector",
          "Covering the work with drywall"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Correct the violations and call for re-inspection. (a) Ignoring a correction notice delays the job. (c) Arguing does not correct the work. (d) Covering uncorrected work is a violation."
      },
      {
        "module": 2,
        "q": "The grounding electrode system for a dwelling may include:",
        "choices": [
          "Only ground rods",
          "A metal water pipe, ground rods, a concrete-encased electrode, or a ground ring",
          "Only the meter",
          "A ground rod and nothing else"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 250.52 lists the permitted electrodes, including water pipe, rods, concrete-encased electrodes, and ground rings. (a) and (d) Ground rods are only one permitted electrode. (c) The meter is not an electrode."
      },
      {
        "module": 4,
        "q": "A GFCI breaker protects:",
        "choices": [
          "Only the first receptacle on the circuit",
          "The entire circuit, including all receptacles downstream of the breaker",
          "Only the breaker itself",
          "Only outdoor receptacles"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A GFCI breaker protects the whole branch circuit it serves. (a) It protects more than the first receptacle. (c) It protects the circuit, not itself. (d) It protects any circuit it serves, indoor or outdoor."
      },
      {
        "module": 6,
        "q": "A hydromassage tub pump must be on a dedicated circuit because:",
        "choices": [
          "It is a large load",
          "The Code requires a dedicated GFCI-protected circuit for the pump",
          "It shares the lighting circuit",
          "It is outdoors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pump needs a dedicated GFCI-protected circuit. (a) Size alone is not the rule. (c) Sharing the lighting circuit is the violation. (d) The tub is indoors."
      },
      {
        "module": 8,
        "q": "A dwelling's calculated load is 36,000 VA at 240 volts. The service current is:",
        "choices": [
          "100 amperes",
          "125 amperes",
          "150 amperes",
          "200 amperes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 36,000 ÷ 240 = 150 amperes. (a) 100 A would be 24,000 VA. (b) 125 A would be 30,000 VA. (d) 200 A would be 48,000 VA."
      }
    ]
  }
};
