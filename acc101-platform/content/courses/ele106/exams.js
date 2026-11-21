// ele106 — Midterm and Final exams.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A 480-volt three-phase motor is connected line-to-line on a 277/480Y system. What voltage does it see?",
        "choices": [
          "120 volts",
          "208 volts",
          "277 volts",
          "480 volts"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Line-to-line on a 277/480Y system is 480 volts. (a) 120 volts is a 120/208Y phase voltage. (b) 208 volts is a 120/208Y line voltage. (c) 277 volts is the phase voltage of this system."
      },
      {
        "module": 1,
        "q": "A 208-volt load in a commercial building is connected:",
        "choices": [
          "Hot-to-neutral on a 120/208Y system",
          "Hot-to-hot on a 120/208Y system",
          "Hot-to-neutral on a 277/480Y system",
          "To the high leg only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 208 volts is the hot-to-hot voltage of a 120/208Y system. (a) Hot-to-neutral is 120 volts. (c) A 277/480Y system has no 208-volt connection. (d) The high leg is 208 volts to neutral, but a 208-volt load connects hot-to-hot, not to the high leg."
      },
      {
        "module": 2,
        "q": "A commercial service disconnect must be located:",
        "choices": [
          "In the attic",
          "At a readily accessible location, outside or nearest the point of entrance",
          "In a bedroom closet",
          "Underground"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.70 requires the service disconnect to be readily accessible, outside or nearest the point of entrance. (a) An attic is not readily accessible. (c) A closet is not the required location. (d) A disconnect is not installed underground."
      },
      {
        "module": 2,
        "q": "A large commercial service uses current transformers for metering because:",
        "choices": [
          "The meter cannot carry the full service current directly",
          "The utility requires them on every service",
          "They reduce the voltage",
          "They are cheaper than a meter"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The meter reads a small, scaled current from the CTs and multiplies by the ratio. (b) Small services use self-contained meters. (c) CTs scale current, not voltage. (d) CT metering is more complex, not cheaper."
      },
      {
        "module": 2,
        "q": "The main bonding jumper connects:",
        "choices": [
          "The hot conductors together",
          "The grounded conductor to the equipment grounding conductor at the service",
          "The ground rods together",
          "The meter to the panel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The main bonding jumper connects the grounded (neutral) conductor to the equipment grounding conductor at the service. (a) Hot conductors are never bonded together. (c) Ground rods are joined by the grounding electrode conductor. (d) The meter is not connected by the main bonding jumper."
      },
      {
        "module": 3,
        "q": "A feeder supplies a panelboard with a 10 HP motor (FLC 14 A) and 20 A of other loads. What is the minimum feeder ampacity?",
        "choices": [
          "34 A",
          "37.5 A",
          "40 A",
          "14 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 430.24: 125% of the largest motor (14 × 1.25 = 17.5 A) plus the other loads (20 A) = 37.5 A. (a) 34 A is the sum with no 125% factor. (c) 40 A exceeds the minimum. (d) 14 A is the motor's FLC alone."
      },
      {
        "module": 3,
        "q": "A feeder tap must terminate in:",
        "choices": [
          "An open splice",
          "A single overcurrent device",
          "Two overcurrent devices",
          "A junction box only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Both tap rules require the tap to terminate in a single overcurrent device. (a) An open splice is never permitted. (c) Two devices do not satisfy the rule. (d) A junction box is not an overcurrent device."
      },
      {
        "module": 3,
        "q": "The busbar phase arrangement in a panelboard is:",
        "choices": [
          "Random",
          "A, B, C from front to back, top to bottom, or left to right",
          "C, B, A from top to bottom",
          "The same on every panelboard regardless of voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 408.3(A) sets the A, B, C arrangement. (a) The arrangement is not random. (c) The order is A, B, C, not C, B, A. (d) The arrangement rule is the same, but the phases differ by system."
      },
      {
        "module": 4,
        "q": "GFCI protection is required for receptacles on a commercial rooftop because:",
        "choices": [
          "210.8(B) lists rooftops",
          "210.12 requires it",
          "All outdoor receptacles are 240 volts",
          "Rooftops are always wet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 210.8(B) lists rooftops among the non-dwelling locations requiring GFCI protection. (b) 210.12 is AFCI protection for dwellings. (c) Rooftop receptacles are usually 120 volts. (d) Rooftops are not always wet, but the Code requires GFCI there anyway."
      },
      {
        "module": 4,
        "q": "A store has 24 linear feet of show window. How many receptacles are required by 210.62?",
        "choices": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 210.62 requires one receptacle per 12 linear feet: 24 ÷ 12 = 2. (a) One is not enough. (c) and (d) Three and four exceed the minimum."
      },
      {
        "module": 4,
        "q": "A commercial building has 50 receptacles. What is the receptacle load for the load calculation?",
        "choices": [
          "5,000 VA",
          "9,000 VA",
          "10,000 VA",
          "18,000 VA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 220.14(I): 50 × 180 = 9,000 VA. (a) 5,000 VA would be 100 VA each. (c) 10,000 VA is the demand threshold, not the load. (d) 18,000 VA would be 360 VA each."
      },
      {
        "module": 4,
        "q": "A hotel contains dwelling units (guest rooms). AFCI protection is required in:",
        "choices": [
          "The hotel lobby only",
          "The dwelling units, under 210.12",
          "The parking garage only",
          "Nowhere in the building"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The guest rooms are dwelling units, so 210.12 applies to them. (a) The lobby is not a dwelling unit. (c) The garage is not a dwelling unit. (d) The dwelling units in the hotel do require AFCI protection."
      },
      {
        "module": 5,
        "q": "A 277-volt lighting circuit can feed more luminaires than a 120-volt circuit of the same wire size because:",
        "choices": [
          "The current is lower at higher voltage",
          "The wire is thicker",
          "277-volt fixtures use less power",
          "The circuit is longer"
        ],
        "answer": 0,
        "explanation": "Correct: (a). For the same power, higher voltage means lower current. (b) The wire size is the same. (c) The fixtures use the same power; the voltage changes the current, not the wattage. (d) Length is not the reason."
      },
      {
        "module": 5,
        "q": "A daylighting control does what?",
        "choices": [
          "Turns lights on when it detects motion",
          "Dims the electric lights in response to daylight from windows",
          "Turns lights on manually",
          "Measures the outdoor temperature"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A daylighting control dims electric lights in response to daylight. (a) Motion detection is an occupancy sensor. (c) Manual-on is a vacancy sensor. (d) Temperature is not a lighting control."
      },
      {
        "module": 5,
        "q": "The third harmonic is 180 hertz because:",
        "choices": [
          "It is three times the 60-hertz fundamental",
          "It is the third phase",
          "It is 180 volts",
          "It is the frequency of LED drivers"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Harmonics are multiples of the fundamental: 3 × 60 = 180 hertz. (b) It is not the third phase. (c) 180 is the frequency in hertz, not a voltage. (d) LED drivers produce harmonics, but the frequency comes from the multiple."
      },
      {
        "module": 5,
        "q": "LED drivers are nonlinear loads because:",
        "choices": [
          "They draw current in pulses",
          "They use too much power",
          "They are always 277 volts",
          "They contain a transformer"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Nonlinear loads draw current in pulses, not in a smooth sine wave. (b) LED drivers use little power. (c) They are not always 277 volts. (d) A transformer alone does not make a load nonlinear."
      },
      {
        "module": 6,
        "q": "A 5 HP, 208 V, three-phase motor has an FLC of:",
        "choices": [
          "7.6 A",
          "14 A",
          "16.7 A",
          "28 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 430.250: 5 HP at 208 V is 16.7 A. (a) 7.6 A is 5 HP at 480 V. (b) 14 A is 10 HP at 480 V. (d) 28 A is 5 HP single-phase at 230 V."
      },
      {
        "module": 6,
        "q": "A 5 HP, 480 V motor (FLC 7.6 A) needs branch-circuit conductors rated at least:",
        "choices": [
          "7.6 A",
          "8.7 A",
          "9.5 A",
          "19 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 430.22(A): 7.6 × 1.25 = 9.5 A. (a) 7.6 A is the FLC with no factor. (b) 8.7 A is 7.6 × 1.15, the overload factor. (d) 19 A is 7.6 × 2.5, the breaker factor."
      },
      {
        "module": 6,
        "q": "A dual-element time-delay fuse for motor short-circuit protection is sized at:",
        "choices": [
          "115% of FLC",
          "125% of FLC",
          "175% of FLC",
          "250% of FLC"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 430.52: dual-element fuse 175%. (a) 115% is an overload figure. (b) 125% is a conductor figure. (d) 250% is the inverse-time breaker figure."
      },
      {
        "module": 6,
        "q": "Overload protection for a motor with a service factor of 1.0 is sized at:",
        "choices": [
          "100% of nameplate",
          "115% of nameplate",
          "125% of nameplate",
          "250% of FLC"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 430.32: motors with a service factor below 1.15 (and a temperature rise above 40°C) use 125% of nameplate. (a) 100% would trip on normal load. (b) 115% applies to SF ≥ 1.15. (d) 250% is a short-circuit protection figure."
      },
      {
        "module": 6,
        "q": "The disconnecting means for a motor controller must be:",
        "choices": [
          "In the panelboard only",
          "Within sight of the controller",
          "At least 100 feet from the controller",
          "Locked in the off position"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 430.102(B) requires the controller disconnect within sight of the controller. (a) A disconnect in the panelboard is not within sight. (c) 100 feet away is not within sight. (d) Locking is good practice but not the location rule."
      },
      {
        "module": 1,
        "q": "The 2023 NEC lighting load for a warehouse is:",
        "choices": [
          "1.2 VA/ft²",
          "1.3 VA/ft²",
          "1.9 VA/ft²",
          "3.0 VA/ft²"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Table 220.42(A): warehouse is 1.2 VA/ft². (b) 1.3 VA/ft² is offices. (c) 1.9 VA/ft² is retail. (d) 3.0 VA/ft² was the 2017 value."
      },
      {
        "module": 2,
        "q": "A concrete-encased electrode is also called:",
        "choices": [
          "A ground rod",
          "A Ufer ground",
          "A ground ring",
          "A water pipe electrode"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A concrete-encased electrode is a Ufer ground. (a) A ground rod is a different electrode. (c) A ground ring is a buried ring of conductor. (d) A water pipe electrode is a metal water pipe."
      },
      {
        "module": 3,
        "q": "A panel schedule shows the phase balance so the electrician can:",
        "choices": [
          "Count the breakers",
          "Spread the loads evenly across A, B, and C",
          "Find the panel's price",
          "Skip the load calculation"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The schedule shows the balance so loads can be spread across the phases. (a) Counting breakers is not the purpose. (c) Price is not on the schedule. (d) The schedule does not replace the load calculation."
      },
      {
        "module": 4,
        "q": "A multiwire branch circuit in a commercial building shares:",
        "choices": [
          "One hot conductor across three circuits",
          "One neutral across two or three phases",
          "One breaker across three panels",
          "One ground across the building"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A multiwire branch circuit shares one neutral across two or three phases. (a) Each phase has its own hot conductor. (c) Each circuit has its own breaker. (d) The ground is shared building-wide, but that is not what defines a multiwire circuit."
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
        "q": "A 277/480Y system's line voltage is:",
        "choices": [
          "120 volts",
          "208 volts",
          "277 volts",
          "480 volts"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Line voltage is hot-to-hot: 480 volts. (a) 120 volts is a 120/208Y phase voltage. (b) 208 volts is a 120/208Y line voltage. (c) 277 volts is the phase voltage of this system."
      },
      {
        "module": 2,
        "q": "The service conductors for a commercial building with 300 A continuous and 100 A noncontinuous load must be sized for at least:",
        "choices": [
          "400 A",
          "475 A",
          "500 A",
          "300 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.42(A): 300 × 1.25 = 375 A, plus 100 A = 475 A. (a) 400 A has no 125% factor. (c) 500 A exceeds the minimum. (d) 300 A ignores both the factor and the noncontinuous load."
      },
      {
        "module": 3,
        "q": "A 225 A panelboard is protected by a 250 A breaker. Is that permitted?",
        "choices": [
          "Yes — the next higher size is always allowed",
          "No — 408.36 requires protection rated not more than the panelboard rating",
          "Yes — if the panelboard is in a commercial building",
          "No — the breaker must be 225 A exactly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 408.36: protection must not exceed the panelboard rating. (a) The next-higher-size rule does not override 408.36. (c) The building type does not change the rule. (d) A smaller breaker is permitted; it need not be exactly 225 A."
      },
      {
        "module": 4,
        "q": "A commercial kitchen has a dishwasher. What protection is required?",
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
        "module": 5,
        "q": "High-bay lighting is used for:",
        "choices": [
          "Ceilings 8 feet high",
          "Ceilings 20 feet or higher",
          "Outdoor parking lots only",
          "Residential kitchens"
        ],
        "answer": 1,
        "explanation": "Correct: (b). High-bay lighting serves ceilings 20 feet or higher, such as warehouses. (a) 8-foot ceilings use low-bay or standard fixtures. (c) Parking lots use area lighting, not high-bay. (d) Kitchens are residential, not high-bay."
      },
      {
        "module": 6,
        "q": "A 15 HP, 480 V motor has an FLC of 21 A. The maximum inverse-time breaker rating is:",
        "choices": [
          "21 A",
          "26.25 A",
          "36.75 A",
          "52.5 A"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Table 430.52: 21 × 2.5 = 52.5 A. (a) 21 A is the FLC. (b) 26.25 A is the conductor size (125%). (c) 36.75 A is the dual-element fuse size (175%)."
      },
      {
        "module": 7,
        "q": "A location with flammable gas present under normal conditions is:",
        "choices": [
          "Class I, Division 1",
          "Class I, Division 2",
          "Class II, Division 1",
          "Class III, Division 2"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Flammable gas is Class I; present under normal conditions is Division 1. (b) Division 2 is abnormal conditions only. (c) Class II is dusts. (d) Class III is fibers."
      },
      {
        "module": 8,
        "q": "A 10,000 ft² office has a lighting load of 13,000 VA. What is the lighting demand under Table 220.45?",
        "choices": [
          "6,500 VA",
          "13,000 VA",
          "16,250 VA",
          "10,000 VA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Table 220.45: most occupancies take lighting at 100%, so the demand is 13,000 VA. (a) 6,500 VA would be a 50% factor. (c) 16,250 VA would apply another 125%. (d) 10,000 VA is not the lighting load."
      },
      {
        "module": 9,
        "q": "An exit sign must stay lit during a power failure because:",
        "choices": [
          "It is on the emergency system (Article 700)",
          "It has a large battery",
          "It is wired to the normal lighting",
          "It is always on"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Exit signs are Article 700 loads, fed from the emergency system or a battery. (b) A large battery is one way to do it, not the reason. (c) Normal lighting goes out in a power failure. (d) Being always on does not explain how it stays lit without power."
      },
      {
        "module": 10,
        "q": "A hospital's life safety branch serves:",
        "choices": [
          "Patient care receptacles",
          "Egress lighting, exit signs, and fire alarms",
          "HVAC and medical gas",
          "The parking lot lights"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The life safety branch serves egress lighting, exit signs, and fire alarms. (a) Patient care receptacles are on the critical branch. (c) HVAC and medical gas are on the equipment branch. (d) Parking lot lights are normal loads."
      },
      {
        "module": 11,
        "q": "The specifications for a job require a larger wire size than the Code minimum. Which governs?",
        "choices": [
          "The Code, because it is the maximum",
          "The spec, because the Code is the minimum",
          "The cheaper one",
          "The contractor's preference"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Code is the minimum; the spec can ask for more. (a) The Code is the minimum, not the maximum. (c) Cost does not decide. (d) The contractor follows the documents."
      },
      {
        "module": 12,
        "q": "A megger test is performed:",
        "choices": [
          "After energizing, to check voltage",
          "Before energizing, to check insulation resistance",
          "Only on motors",
          "Only on residential work"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A megger test checks insulation resistance before the circuit is energized. (a) Voltage is checked after energizing with a meter. (c) Megger tests are used on feeders and circuits, not only motors. (d) Megger testing is used in commercial work."
      },
      {
        "module": 1,
        "q": "A 120/208Y system is used in commercial buildings for:",
        "choices": [
          "480-volt motors only",
          "120-V receptacles and lighting and 208-V equipment",
          "277-volt lighting only",
          "Residential ranges"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 120/208Y provides 120 V for receptacles and lighting and 208 V for larger equipment. (a) 480-volt motors need a 277/480Y system. (c) 277-volt lighting needs a 277/480Y system. (d) Residential ranges use 120/240-volt single-phase."
      },
      {
        "module": 2,
        "q": "Ground rods, building steel, and a Ufer ground are all:",
        "choices": [
          "Overcurrent devices",
          "Grounding electrodes",
          "Service conductors",
          "Transfer switches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). They are all grounding electrodes listed in 250.52. (a) Overcurrent devices are breakers and fuses. (c) Service conductors carry power. (d) Transfer switches move loads between sources."
      },
      {
        "module": 3,
        "q": "A 25-foot tap from a 300 A feeder needs tap conductors rated at least:",
        "choices": [
          "30 A",
          "100 A",
          "150 A",
          "300 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 25-foot tap rule (240.21(B)(2)) requires at least one-third of the feeder OCPD rating: 300 ÷ 3 = 100 A. (a) 30 A is one-tenth, the 10-foot rule. (c) 150 A is one-half. (d) 300 A is the full feeder rating."
      },
      {
        "module": 4,
        "q": "A meeting room requires receptacles under:",
        "choices": [
          "210.52",
          "210.62",
          "210.63",
          "210.65"
        ],
        "answer": 3,
        "explanation": "Correct: (d). 210.65 covers meeting rooms. (a) 210.52 is dwelling receptacle spacing. (b) 210.62 is show windows. (c) 210.63 is HVAC equipment."
      },
      {
        "module": 5,
        "q": "A vacancy sensor is manual-on and:",
        "choices": [
          "Manual-off",
          "Auto-off",
          "Always on",
          "Never off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A vacancy sensor is manual-on, auto-off. (a) Manual-off would be a plain switch. (c) Always on defeats the control. (d) The sensor must turn the lights off when the room is empty."
      },
      {
        "module": 6,
        "q": "Star-delta starting is used for:",
        "choices": [
          "Small motors only",
          "Large motors, to limit starting current",
          "Single-phase motors",
          "Lighting circuits"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Star-delta starting limits the starting current of large motors. (a) Small motors start direct-on-line. (c) Star-delta is a three-phase method. (d) Lighting circuits do not use motor starters."
      },
      {
        "module": 7,
        "q": "Class II, Group E is:",
        "choices": [
          "Metal dusts",
          "Carbonaceous dusts",
          "Grain dusts",
          "Acetylene"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Group E is metal dusts. (b) Carbonaceous dusts are Group F. (c) Grain dusts are Group G. (d) Acetylene is Class I, Group A."
      },
      {
        "module": 8,
        "q": "A building has 200 receptacles. What is the receptacle demand under 220.47?",
        "choices": [
          "18,000 VA",
          "23,000 VA",
          "36,000 VA",
          "10,000 VA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Receptacle load = 200 × 180 = 36,000 VA. First 10,000 VA at 100% = 10,000 VA; remaining 26,000 VA at 50% = 13,000 VA; demand = 23,000 VA. (a) 18,000 VA is 100 receptacles. (c) 36,000 VA is the load with no demand factor. (d) 10,000 VA is only the first block."
      },
      {
        "module": 9,
        "q": "A legally required standby system serves:",
        "choices": [
          "Loads the owner chooses",
          "Loads the law requires to keep running, such as smoke control",
          "Only emergency lighting",
          "Only the fire pump"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 701 serves loads the law requires to keep running. (a) The owner's choice is Article 702. (c) Emergency lighting is Article 700. (d) The fire pump is an Article 700 load."
      },
      {
        "module": 10,
        "q": "Patient bathrooms require:",
        "choices": [
          "No special protection",
          "GFCI protection (517.21)",
          "AFCI protection only",
          "A larger panelboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 517.21 requires GFCI protection in patient bathrooms. (a) Special protection is required. (c) AFCI is not the rule for patient bathrooms. (d) A larger panelboard does not protect the patient."
      },
      {
        "module": 11,
        "q": "A contractor finds the drawings and the specs disagree. What should they do?",
        "choices": [
          "Follow the cheaper document",
          "Submit an RFI and follow the written answer",
          "Guess",
          "Ignore the spec"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An RFI gets a written answer that becomes part of the documents. (a) Cost does not decide. (c) Guessing risks a violation. (d) The spec usually governs over the drawings."
      },
      {
        "module": 12,
        "q": "The adjustment factor for 4–6 current-carrying conductors is:",
        "choices": [
          "50%",
          "70%",
          "80%",
          "100%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 310.15(C)(1): 4–6 conductors at 80%. (a) 50% is for 10–20 conductors. (b) 70% is for 7–9 conductors. (d) 100% applies to three or fewer conductors."
      },
      {
        "module": 7,
        "q": "Gasoline vapor collects near the floor because:",
        "choices": [
          "It is lighter than air",
          "It is heavier than air",
          "It is attracted to concrete",
          "It is pushed down by fans"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gasoline vapor is heavier than air, so it collects near the floor — which is why the floor area of a garage is Class I, Division 2. (a) Lighter-than-air gases rise. (c) Concrete does not attract vapor. (d) Fans do not push vapor down."
      },
      {
        "module": 2,
        "q": "A 277/480-V service of 1,200 A requires:",
        "choices": [
          "No ground-fault protection",
          "GFPE under 230.95",
          "GFCI protection only",
          "A smaller service"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 230.95 requires GFPE on solidly grounded wye services of 1,000 A or more, over 150 V to ground. (a) GFPE is required at this size. (c) GFCI protects people, not equipment, and is not the 230.95 requirement. (d) The service size is not the issue."
      },
      {
        "module": 3,
        "q": "In a high-leg panelboard, the B phase conductor is:",
        "choices": [
          "The neutral",
          "The high leg, marked orange",
          "A spare",
          "The grounding conductor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 408.3(E): the high leg is connected to the B phase and marked orange. (a) The neutral is on the neutral bus. (c) It is not a spare. (d) The grounding conductor is green or bare."
      },
      {
        "module": 4,
        "q": "A commercial branch circuit's overcurrent device for a 16 A continuous load must be rated at least:",
        "choices": [
          "16 A",
          "20 A",
          "25 A",
          "30 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 16 × 1.25 = 20 A. (a) 16 A has no 125% factor. (c) and (d) 25 and 30 A exceed the minimum."
      },
      {
        "module": 5,
        "q": "The Table 220.42(A) lighting load for a school is:",
        "choices": [
          "1.2 VA/ft²",
          "1.3 VA/ft²",
          "1.5 VA/ft²",
          "1.9 VA/ft²"
        ],
        "answer": 2,
        "explanation": "Correct: (c). School is 1.5 VA/ft² in Table 220.42(A). (a) 1.2 VA/ft² is warehouses. (b) 1.3 VA/ft² is offices. (d) 1.9 VA/ft² is retail."
      },
      {
        "module": 6,
        "q": "A motor's nameplate current is 10 A and its service factor is 1.0. The maximum overload setting is:",
        "choices": [
          "10 A",
          "11.5 A",
          "12.5 A",
          "25 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 430.32: SF below 1.15 uses 125% of nameplate: 10 × 1.25 = 12.5 A. (a) 10 A would trip on normal load. (b) 11.5 A is the 115% figure for SF ≥ 1.15. (d) 25 A is the breaker figure (250% of FLC)."
      },
      {
        "module": 7,
        "q": "T3 means a maximum surface temperature of:",
        "choices": [
          "85°C",
          "135°C",
          "200°C",
          "450°C"
        ],
        "answer": 2,
        "explanation": "Correct: (c). T3 is 200°C. (a) 85°C is T6. (b) 135°C is T4. (d) 450°C is T1."
      },
      {
        "module": 8,
        "q": "The demand factor for the general lighting load in an office building under Table 220.45 is:",
        "choices": [
          "35%",
          "50%",
          "100%",
          "First 12,500 VA at 100%, remainder at 50%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 220.45: most occupancies, including offices, take lighting at 100%. (a) 35% is the dwelling lighting demand. (b) 50% is not the office factor. (d) That is the warehouse rule."
      },
      {
        "module": 9,
        "q": "The alternate source for an emergency system is usually:",
        "choices": [
          "The utility's second feed",
          "A generator, with batteries carrying the load while it starts",
          "A manual switch",
          "The normal panelboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A generator is the usual alternate source, and batteries carry the load instantly while it starts. (a) A second utility feed is a different arrangement. (c) A manual switch cannot meet the 10-second transfer time. (d) The normal panelboard is the normal source, not the alternate."
      },
      {
        "module": 10,
        "q": "Assembly occupancies are covered by:",
        "choices": [
          "Article 500",
          "Article 511",
          "Article 517",
          "Article 518"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Article 518 covers assembly occupancies. (a) Article 500 is hazardous locations. (b) Article 511 is commercial garages. (c) Article 517 is health care facilities."
      },
      {
        "module": 11,
        "q": "The title block on a drawing gives:",
        "choices": [
          "The receptacle count",
          "The project, the sheet, the scale, and the revision",
          "The wire sizes",
          "The change orders"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The title block identifies the project, the sheet, the scale, and the revision. (a) Receptacle counts are on the floor plan. (c) Wire sizes are on the schedules. (d) Change orders are separate documents."
      },
      {
        "module": 12,
        "q": "A commercial panelboard directory must be:",
        "choices": [
          "Written in pencil",
          "Legible and permanent (408.4)",
          "Kept in the office",
          "Blank until the final inspection"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 408.4 requires a legible, permanent directory identifying every circuit. (a) Pencil is not permanent. (c) The directory belongs in the panel. (d) It must be complete at the final inspection, not blank."
      },
      {
        "module": 6,
        "q": "A VFD controls a motor's speed by:",
        "choices": [
          "Changing the voltage only",
          "Changing the frequency of the power",
          "Changing the motor's size",
          "Adding a gearbox"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A variable-frequency drive changes the frequency to control speed. (a) Voltage alone does not control speed. (c) The motor's size does not change. (d) A gearbox is mechanical, not a VFD."
      },
      {
        "module": 8,
        "q": "A commercial building's total load is 86,500 VA on a 208-V three-phase service. The service current is about:",
        "choices": [
          "200 A",
          "240 A",
          "300 A",
          "400 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 86,500 ÷ (208 × 1.73) = 240 A. (a) 200 A would be 72,000 VA. (c) 300 A would be 108,000 VA. (d) 400 A would be 144,000 VA."
      },
      {
        "module": 9,
        "q": "Emergency circuits must be identified so that:",
        "choices": [
          "They look neat",
          "Anyone working on them knows they are emergency circuits",
          "They can be billed separately",
          "They are easy to remove"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Identification prevents a worker from killing the emergency system by mistake. (a) Neatness is a side benefit. (c) Billing is not the reason. (d) They are not meant to be removed."
      },
      {
        "module": 12,
        "q": "The final inspection happens:",
        "choices": [
          "Before framing",
          "After rough-in and before drywall",
          "After trim-out",
          "Before the conduit is installed"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The final inspection is after trim-out. (a) There is no wiring to inspect before framing. (b) After rough-in is the rough inspection. (d) The conduit is installed during rough-in."
      }
    ]
  }
};
