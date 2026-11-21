// con109 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "What do the letters HVAC stand for?",
        "choices": [
          "High Voltage Alternating Current",
          "Heating, Ventilation, and Air Conditioning",
          "Heavy Vehicle Access Control",
          "Home Ventilation and Cooling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). HVAC is heating, ventilation, and air conditioning — the system that moves heat and air through the house. (a) High voltage is electrical work. (c) Vehicle access is not a house system. (d) Home ventilation and cooling leaves out heating."
      },
      {
        "module": 1,
        "q": "The builder's role with mechanical systems is to:",
        "choices": [
          "Install the furnace, pipes, and wires personally",
          "Coordinate the trades so their work fits together in the same walls, floors, and ceilings",
          "Inspect the trades' licenses",
          "Design the duct system"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The builder coordinates — the trades install, and the builder makes sure it all fits. (a) Installing is the trades' work. (c) Licensing is the state's job. (d) Designing the duct system belongs to the HVAC contractor and designer."
      },
      {
        "module": 1,
        "q": "The three rough-in stages, in the usual order, are:",
        "choices": [
          "Electrical, plumbing, HVAC",
          "Plumbing, HVAC, electrical",
          "HVAC, electrical, plumbing",
          "Drywall, plumbing, electrical"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Plumbing first (drains are set by gravity), HVAC next (ducts are big), electrical last (wires are flexible). (a) Electrical first would put wires where drains need to go. (c) HVAC first would block the drains. (d) Drywall is not a rough-in stage."
      },
      {
        "module": 1,
        "q": "What is the honest scope of this course?",
        "choices": [
          "How to pass a trade certification exam",
          "The builder's coordination view of mechanical systems — not trade certification",
          "How to wire a panel yourself",
          "How to install a furnace"
        ],
        "answer": 1,
        "explanation": "Correct: (b). This course teaches coordination: planning, sequencing, clearances, and inspections. (a) Trade certification needs trade training beyond this course. (c) Wiring a panel is the electrician's work. (d) Installing a furnace is the HVAC installer's work."
      },
      {
        "module": 2,
        "q": "A coordination drawing shows:",
        "choices": [
          "Only the framing",
          "The framing, ducts, pipes, and wires together, so overlaps can be seen",
          "Only the electrical plan",
          "The paint colors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Overlaying all the trades' work on one drawing reveals conflicts before anyone drills a hole. (a) Framing alone hides the conflicts. (c) The electrical plan alone hides the conflicts. (d) Paint colors are on the finish schedule."
      },
      {
        "module": 2,
        "q": "A clash check is:",
        "choices": [
          "An inspection of the foundation",
          "Comparing the trades' plans against each other to find places where two things want the same space",
          "A test of the furnace",
          "A check of the paint"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clash check finds overlaps — a duct and a beam, a drain and a joist — before work starts. (a) The foundation is checked by its own inspection. (c) The furnace is tested at commissioning. (d) Paint is checked at the punch walk."
      },
      {
        "module": 2,
        "q": "When the plans do not answer a coordination question, the builder sends:",
        "choices": [
          "A text message to the homeowner",
          "An RFI — a Request for Information — to the designer",
          "A complaint to the building department",
          "Nothing — the trade decides"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An RFI is the written question to the designer when the plans are unclear. (a) The homeowner does not answer design questions. (c) The building department does not design the house. (d) Letting a trade decide a design question risks a wrong fix."
      },
      {
        "module": 2,
        "q": "The coordination meeting before rough-in is held to:",
        "choices": [
          "Set the paint colors",
          "Agree who gets which stud bay and what order the trades work in",
          "Hire the trades",
          "Order the lumber"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The meeting agrees on space and order before anyone starts drilling. (a) Paint colors are decided with the homeowner. (c) Hiring happens before the meeting. (d) Lumber is ordered during framing."
      },
      {
        "module": 3,
        "q": "A room is 10 ft by 12 ft with an 8-ft ceiling. Its volume is 960 cu ft. At 6 air changes per hour, how much air must the HVAC system deliver?",
        "choices": [
          "96 CFM",
          "160 CFM",
          "60 CFM",
          "960 CFM"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 960 × 6 = 5,760 cu ft per hour; ÷ 60 minutes = 96 CFM. (b) 160 CFM would be 10 air changes per hour. (c) 60 CFM would be about 3.75 air changes. (d) 960 CFM would be 60 air changes per hour."
      },
      {
        "module": 3,
        "q": "The working space in front of a furnace is about:",
        "choices": [
          "6 in",
          "30 in",
          "60 in",
          "12 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). About 30 inches lets a technician stand, open the service panel, and work. (a) 6 inches is a side clearance. (c) 60 inches is far more than required. (d) 12 inches is too small to work in."
      },
      {
        "module": 3,
        "q": "What should duct joints be sealed with?",
        "choices": [
          "Ordinary duct tape",
          "Mastic or approved tape",
          "Paint",
          "Nothing — ducts do not leak"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mastic stays flexible and lasts; ordinary duct tape dries out and falls off. (a) Ordinary duct tape is the classic mistake. (c) Paint does not seal ducts. (d) Ducts do leak, and the leaks waste energy."
      },
      {
        "module": 3,
        "q": "A return air grille is there to:",
        "choices": [
          "Blow warm air into the room",
          "Carry room air back to the furnace or air handler so it can be heated or cooled again",
          "Vent the attic",
          "Exhaust the bathroom"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Returns bring air back to the equipment; supply registers deliver it. (a) Supply registers blow air in. (c) The attic has its own vents. (d) The bathroom has its own exhaust fan."
      },
      {
        "module": 3,
        "q": "An air handler in an attic needs:",
        "choices": [
          "No access at all",
          "An access opening big enough for the unit and a walkway to reach it",
          "A window",
          "A second air handler"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The unit must be reachable for service and removable for replacement through the access opening. (a) No access means no service. (c) A window is not an access opening. (d) A second unit is not the answer."
      },
      {
        "module": 4,
        "q": "A 3-inch drain pipe runs 10 ft. At the correct slope of 1/8 in per foot for 3–6-in pipe, how much does it drop?",
        "choices": [
          "1-1/4 in",
          "2-1/2 in",
          "10 in",
          "1 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 10 ft × 1/8 in/ft = 1-1/4 in of drop. (b) 2-1/2 in would be the drop at 1/4 in per foot — the wrong slope for a 3-inch pipe. (c) 10 in would be 1 in per foot. (d) 1 in is not the result."
      },
      {
        "module": 4,
        "q": "A 2-inch drain pipe runs 16 ft. At 1/8 in per foot, how much does it drop?",
        "choices": [
          "4 in",
          "2 in",
          "1 in",
          "8 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 16 × 1/8 = 2 in of drop. (a) 4 in would be the drop at 1/4 in per foot. (c) 1 in would be the drop over 8 ft. (d) 8 in would be 1/2 in per foot."
      },
      {
        "module": 4,
        "q": "The toilet flange is set about:",
        "choices": [
          "6 in from the finished wall",
          "12 in from the finished wall",
          "18 in from the finished wall",
          "24 in from the finished wall"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 12 inches from the finished wall is the standard rough-in for a toilet. (a) 6 inches is too close for a standard toilet. (c) 18 inches is too far. (d) 24 inches is far too far."
      },
      {
        "module": 4,
        "q": "A plumbing vent pipe exists to:",
        "choices": [
          "Carry water to the fixtures",
          "Let air into the drain system so water flows and traps are not siphoned dry",
          "Heat the water",
          "Support the drain"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vents admit air so drains flow freely and the water seals in traps stay in place. (a) Supply pipes carry water. (c) The water heater heats water. (d) Straps and hangers support drains."
      },
      {
        "module": 5,
        "q": "A 15-amp circuit uses which wire size?",
        "choices": [
          "12-gauge",
          "14-gauge",
          "10-gauge",
          "8-gauge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 14-gauge wire is for 15-amp circuits. (a) 12-gauge is for 20-amp circuits. (c) 10-gauge is for 30-amp circuits. (d) 8-gauge is for larger loads."
      },
      {
        "module": 5,
        "q": "A 20-amp circuit uses which wire size?",
        "choices": [
          "14-gauge",
          "12-gauge",
          "10-gauge",
          "16-gauge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 12-gauge wire is for 20-amp circuits. (a) 14-gauge is for 15-amp circuits and would overheat on a 20-amp circuit. (c) 10-gauge is for 30-amp circuits. (d) 16-gauge is too small for a branch circuit."
      },
      {
        "module": 5,
        "q": "A 36-ft wall needs receptacles so no point is more than 6 ft from one. What is the minimum number of receptacles?",
        "choices": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Receptacles at 6, 18, and 30 ft cover the whole wall — each point is within 6 ft of one, and spacing is 12 ft apart. (a) 2 receptacles cannot cover 36 ft at 12-ft spacing. (c) 4 would work but is more than the minimum. (d) 6 is far more than needed."
      },
      {
        "module": 5,
        "q": "How big is the working space that must stay clear in front of an electrical panel?",
        "choices": [
          "12 in deep × 12 in wide",
          "36 in deep × 30 in wide × 6-1/2 ft high",
          "24 in deep × 24 in wide",
          "48 in deep × 48 in wide"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The panel box is about 36 inches deep, 30 inches wide, and 6-1/2 feet high. (a) 12 inches is far too small. (c) 24 inches is short on depth and width. (d) 48 inches is more than the common rule requires."
      },
      {
        "module": 6,
        "q": "A 2×6 stud is 5-1/2 in wide and load-bearing. The largest hole that may be bored through it is about:",
        "choices": [
          "2.2 in",
          "3.3 in",
          "5-1/2 in",
          "1 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The bearing-stud limit is 40% of the width: 5.5 × 0.40 = 2.2 in. (b) 3.3 in is the 60% limit for a non-bearing stud. (c) 5-1/2 in would remove the whole stud. (d) 1 in is well under the limit."
      },
      {
        "module": 6,
        "q": "The same 2×6 stud, non-load-bearing, may have a hole up to about:",
        "choices": [
          "2.2 in",
          "3.3 in",
          "5-1/2 in",
          "1 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The non-bearing limit is 60% of the width: 5.5 × 0.60 = 3.3 in. (a) 2.2 in is the bearing-stud limit. (c) 5-1/2 in would remove the whole stud. (d) 1 in is well under the limit."
      },
      {
        "module": 6,
        "q": "When is it acceptable to cut a truss member?",
        "choices": [
          "Whenever it is in the way",
          "Never without the truss designer's written approval",
          "If the hole is small",
          "Only on the bottom chord"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cutting a truss changes its engineered load path and needs written approval. (a) Convenience never justifies cutting a truss. (c) Small holes are also not allowed without approval. (d) The bottom chord is also structural."
      },
      {
        "module": 6,
        "q": "Holes in floor joists must be in the:",
        "choices": [
          "Top edge",
          "Middle third of the joist's depth",
          "Bottom edge",
          "Very end"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The middle third carries the least bending stress. (a) and (c) The top and bottom edges carry the most load and must not be holed. (d) Holes near a support are restricted too."
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
        "q": "The three mechanical systems in a house are:",
        "choices": [
          "Framing, roofing, and siding",
          "HVAC, plumbing, and electrical",
          "Concrete, steel, and wood",
          "Windows, doors, and trim"
        ],
        "answer": 1,
        "explanation": "Correct: (b). HVAC moves heat and air, plumbing moves water, electrical moves power. (a) Framing, roofing, and siding are the structure and shell. (c) Concrete, steel, and wood are materials. (d) Windows, doors, and trim are finishes."
      },
      {
        "module": 1,
        "q": "The builder coordinates mechanical work by:",
        "choices": [
          "Doing it all personally",
          "Planning space, order, clearances, and inspections so the three trades fit together",
          "Leaving the trades to sort it out",
          "Hiring the cheapest trade"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Coordination is planning and checking — space, sequence, clearances, and gates. (a) The builder does not do the trades' work. (c) Leaving trades to sort it out guarantees conflicts. (d) Price does not decide coordination."
      },
      {
        "module": 1,
        "q": "Rough-in means:",
        "choices": [
          "The final finish work",
          "Installing pipes, ducts, and wires inside open walls, before insulation and drywall",
          "Pouring the foundation",
          "Painting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rough-in is the hidden work inside open walls, before it is covered. (a) Finish work comes after drywall. (c) The foundation is poured before framing. (d) Painting is a finish trade."
      },
      {
        "module": 2,
        "q": "The best time to run a clash check is:",
        "choices": [
          "After drywall",
          "Before rough-in starts, at the coordination meeting",
          "At the final inspection",
          "After the homeowner moves in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Catching overlaps on paper before rough-in makes fixes free. (a) After drywall the fix costs tear-out. (c) At final it is far too late. (d) After move-in it costs the builder's reputation."
      },
      {
        "module": 2,
        "q": "An RFI is answered by:",
        "choices": [
          "The homeowner",
          "The designer",
          "The inspector",
          "The trade that asked it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The designer answers design questions — that is what the RFI is for. (a) The homeowner does not design the house. (c) The inspector checks the work, they do not design it. (d) The trade that asked cannot answer its own design question."
      },
      {
        "module": 2,
        "q": "Coordination drawings are most valuable when:",
        "choices": [
          "They are filed away",
          "All the trades' work is shown together, so conflicts are visible before work starts",
          "Only one trade is shown",
          "They are drawn after the work is done"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The value is seeing everything together before anyone drills. (a) Filed drawings help no one. (c) One trade alone hides the conflicts. (d) After the work, the conflicts have already happened."
      },
      {
        "module": 3,
        "q": "A room is 15 ft by 20 ft with a 9-ft ceiling. Its volume is 2,700 cu ft. At 6 air changes per hour, how much air must the system deliver?",
        "choices": [
          "270 CFM",
          "450 CFM",
          "150 CFM",
          "2,700 CFM"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2,700 × 6 = 16,200 cu ft per hour; ÷ 60 = 270 CFM. (b) 450 CFM would be 10 air changes. (c) 150 CFM would be about 3.3 air changes. (d) 2,700 CFM would be 60 air changes per hour."
      },
      {
        "module": 3,
        "q": "A duct system delivers 800 CFM but leaks 10% into the attic. How much air reaches the rooms?",
        "choices": [
          "800 CFM",
          "720 CFM",
          "880 CFM",
          "700 CFM"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 10% of 800 is 80 CFM lost, so 800 − 80 = 720 CFM reaches the rooms. (a) 800 ignores the leak. (c) 880 adds the leak instead of subtracting it. (d) 700 would be a 12.5% leak."
      },
      {
        "module": 3,
        "q": "A furnace needs combustion air because:",
        "choices": [
          "It keeps the furnace cool",
          "A gas burner cannot burn fuel safely without fresh air",
          "It makes the furnace quieter",
          "It heats the house faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Burning fuel consumes oxygen; without combustion air the burner starves and can spill exhaust. (a) Cooling is not the purpose. (c) Noise is not the issue. (d) Combustion air does not change heating speed."
      },
      {
        "module": 3,
        "q": "The filter in a furnace or air handler should be:",
        "choices": [
          "Removed to improve airflow",
          "Changed on a regular schedule, so airflow stays strong and the equipment stays clean",
          "Left in place for the life of the unit",
          "Washed in the dishwasher"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dirty filter chokes airflow and strains the equipment; regular changes are basic maintenance. (a) Removing the filter lets dirt into the equipment. (c) A filter left forever clogs completely. (d) Most filters are not dishwasher-safe."
      },
      {
        "module": 4,
        "q": "A 2-inch drain runs 6 ft. At 1/4 in per foot, how much does it drop?",
        "choices": [
          "1-1/2 in",
          "3 in",
          "6 in",
          "1 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 6 × 1/4 = 1-1/2 in of drop. (b) 3 in would be the drop at 1/2 in per foot. (c) 6 in would be 1 in per foot. (d) 1 in would be the drop over 4 ft."
      },
      {
        "module": 4,
        "q": "A lavatory drain is set about:",
        "choices": [
          "6 in above the finished floor",
          "18 in above the finished floor",
          "36 in above the finished floor",
          "At floor level"
        ],
        "answer": 1,
        "explanation": "Correct: (b). About 18 inches above the finished floor is the standard lavatory drain height. (a) 6 inches is too low for a vanity. (c) 36 inches is countertop height. (d) Floor level is a floor drain, not a lavatory drain."
      },
      {
        "module": 4,
        "q": "A shower valve is set about:",
        "choices": [
          "18 in above the floor",
          "42 in above the floor",
          "72 in above the floor",
          "12 in above the floor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). About 42 inches above the floor puts the valve within easy reach. (a) 18 inches is lavatory drain height. (c) 72 inches is near the showerhead. (d) 12 inches is too low to reach comfortably."
      },
      {
        "module": 5,
        "q": "A 40-ft wall needs receptacles so no point is more than 6 ft from one. What is the minimum number?",
        "choices": [
          "3",
          "4",
          "2",
          "5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Receptacles at 6, 18, 30, and 36 ft cover the wall — 3 receptacles reach only to 36 ft. (a) 3 receptacles at 6, 18, and 30 cover only to 36 ft, leaving the last 4 ft too far. (c) 2 cannot cover 40 ft. (d) 5 would work but is more than the minimum."
      },
      {
        "module": 5,
        "q": "Light switches are usually set about:",
        "choices": [
          "12 in above the floor",
          "48 in above the floor",
          "72 in above the floor",
          "24 in above the floor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). About 48 inches above the floor is the standard switch height. (a) 12 inches is receptacle height. (c) 72 inches is too high to reach. (d) 24 inches is too low."
      },
      {
        "module": 5,
        "q": "Receptacles in a living area are usually set about:",
        "choices": [
          "48 in above the floor",
          "12–18 in above the floor",
          "36 in above the floor",
          "At the ceiling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). About 12 to 18 inches above the floor is the standard receptacle height. (a) 48 inches is switch height. (c) 36 inches is counter height. (d) The ceiling is not a receptacle location."
      },
      {
        "module": 6,
        "q": "How deep may a notch in a load-bearing stud be, at most?",
        "choices": [
          "25% of the stud's width",
          "40% of the stud's width",
          "60% of the stud's width",
          "100% of the stud's width"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Notches in bearing studs are limited to 25%. (b) 40% is the hole limit for bearing studs. (c) 60% is the hole limit for non-bearing studs. (d) 100% would remove the stud."
      },
      {
        "module": 6,
        "q": "Where must a penetration be firestopped?",
        "choices": [
          "Any wall",
          "A fire-rated assembly, such as a garage-to-house wall",
          "A window",
          "The roof only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rated assemblies need fire-rated seals so fire and smoke cannot pass. (a) Ordinary walls do not need firestopping. (c) Windows are not penetrations for pipes. (d) The roof is one place, not the only place."
      },
      {
        "module": 6,
        "q": "What problems does an unsealed hole through a top plate cause?",
        "choices": [
          "Nothing",
          "Air leaks, a fire path between floors, and a pest path",
          "Better ventilation",
          "Stronger framing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Open plate holes leak air, let fire and smoke pass, and let pests travel. (a) An open hole is never harmless. (c) Ventilation is controlled, not through random holes. (d) A hole weakens framing, it does not strengthen it."
      },
      {
        "module": 7,
        "q": "A furnace is 24 in deep and needs 30 in of working space in front of it. How deep must its closet be?",
        "choices": [
          "24 in",
          "54 in",
          "30 in",
          "60 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 24 + 30 = 54 inches deep. (a) 24 inches is the furnace alone, with no working space. (c) 30 inches is the working space alone. (d) 60 inches is more than needed."
      },
      {
        "module": 7,
        "q": "An electrical panel is 16 in wide. The working space must be 30 in wide. How much room is beside the panel inside the working space?",
        "choices": [
          "30 in",
          "14 in",
          "16 in",
          "46 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 − 16 = 14 inches beside the panel. (a) 30 is the whole working space width. (c) 16 is the panel width. (d) 46 adds the two instead of subtracting."
      },
      {
        "module": 7,
        "q": "An attic access opening is 22 in wide. The air handler is 26 in wide. What is the problem?",
        "choices": [
          "None — it fits",
          "The unit is 4 in too wide to fit through the opening for replacement",
          "The opening is too big",
          "The unit is too small"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 26 − 22 = 4 inches too wide — the unit cannot be replaced without enlarging the opening. (a) It does not fit. (c) The opening is too small, not too big. (d) The unit is too big, not too small."
      },
      {
        "module": 7,
        "q": "A furnace closet door swings inward across the furnace's working space. The fix is to:",
        "choices": [
          "Remove the door",
          "Reverse the door to swing outward, or enlarge the closet",
          "Move the furnace",
          "Ignore it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An outward swing or a bigger closet keeps the working space clear. (a) Removing the door is not the standard fix. (c) Moving the furnace is expensive and usually unnecessary. (d) Ignoring it leaves the clearance failed."
      },
      {
        "module": 8,
        "q": "The plumber usually goes first in rough-in because:",
        "choices": [
          "Plumbers are fastest",
          "Drain pipes are the biggest and least flexible — gravity sets their path",
          "Plumbers charge the most",
          "The code requires it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Drains must slope downhill and cannot bend around a duct or wire. (a) Speed is not the reason. (c) Cost is not the reason. (d) No code sets the trade order."
      },
      {
        "module": 8,
        "q": "What happens if drywall covers rough-in work before the inspection?",
        "choices": [
          "Is fine if the work looks good",
          "Can force the drywall to be torn down so the inspector can see the work",
          "Saves a day",
          "Is the builder's choice"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The inspector can require covered work to be uncovered. (a) Looking good is not the same as passing. (c) It loses days, it does not save them. (d) The rule is absolute, not a choice."
      },
      {
        "module": 8,
        "q": "What is a punch list, and when is the job done?",
        "choices": [
          "A list of tools to buy",
          "A written list of unfinished or imperfect items; the job is not done until it is empty",
          "A schedule of inspections",
          "A list of trade phone numbers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The punch list is the final gate: every item is fixed and checked off. (a) Tools are not punch items. (c) Inspections have their own schedule. (d) Phone numbers belong in the contact list."
      },
      {
        "module": 9,
        "q": "When does the rough-in inspection take place?",
        "choices": [
          "After drywall",
          "After framing and rough-in, before insulation and drywall",
          "After the final inspection",
          "Before framing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The rough-in inspection checks the work while it is still visible, before it is covered. (a) After drywall the work is hidden. (c) The final inspection is last. (d) Before framing there is nothing to inspect."
      },
      {
        "module": 9,
        "q": "What does the insulation inspection look for?",
        "choices": [
          "Paint color",
          "Gaps, compression, and voids in insulation, plus air sealing",
          "Cabinet style",
          "Flooring type"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It checks that insulation fills each space fully and evenly and that penetrations are sealed. (a) Paint is a finish item. (c) Cabinet style is not inspected. (d) Flooring type is not an insulation matter."
      },
      {
        "module": 9,
        "q": "When does the final inspection take place?",
        "choices": [
          "Framing is done",
          "Everything is finished — fixtures, devices, trim, and paint",
          "The foundation is poured",
          "The roof is on"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The final inspection checks the finished house, including working systems and safety devices. (a) Framing is checked at rough-in. (c) The foundation is an early inspection. (d) The roof is checked long before final."
      },
      {
        "module": 9,
        "q": "What is a correction notice?",
        "choices": [
          "A bill from the inspector",
          "The inspector's written list of what failed and must be fixed",
          "A permit application",
          "A compliment"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The correction notice lists each failed item so the builder can fix it. (a) It is not a bill. (c) The permit comes before work starts. (d) It is not a compliment."
      },
      {
        "module": 10,
        "q": "A duct 10 in tall needs a soffit with 1 in of clearance above it and 1/2 in of drywall below it. How deep is the soffit?",
        "choices": [
          "10 in",
          "11-1/2 in",
          "12 in",
          "9 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 10 + 1 + 0.5 = 11.5 inches. (a) 10 inches ignores the clearance and the drywall. (c) 12 inches is more than needed. (d) 9 inches is smaller than the duct itself."
      },
      {
        "module": 10,
        "q": "A 3-in drain and a 2-in vent share a chase with 2 in of clearance on each side of the pipes. What is the minimum chase width?",
        "choices": [
          "5 in",
          "7 in",
          "9 in",
          "12 in"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 3 + 2 + 2 + 2 = 9 inches. (a) 5 inches is the two pipes with no clearance. (b) 7 inches allows clearance on only one side. (d) 12 inches is a common choice with room to work, but 9 is the minimum."
      },
      {
        "module": 10,
        "q": "In what order should things be moved to resolve a conflict?",
        "choices": [
          "Move the most expensive thing first",
          "Move the cheapest, most flexible thing first — and never cut structure",
          "Cut whatever is in the way",
          "Always build a soffit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A wire moves before a duct, a duct before a drain, and structure never moves. (a) Moving the most expensive thing wastes money. (c) Cutting structure is never the fix. (d) A soffit is one fix, not the only fix."
      },
      {
        "module": 11,
        "q": "A bathroom is 12 ft by 12 ft with an 8-ft ceiling. Its volume is 1,152 cu ft. A 50-CFM fan changes the room's air in about:",
        "choices": [
          "10 minutes",
          "23 minutes",
          "30 minutes",
          "5 minutes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1,152 ÷ 50 = 23 minutes. (a) 10 minutes would need about 115 CFM. (c) 30 minutes would need about 38 CFM. (d) 5 minutes would need about 230 CFM."
      },
      {
        "module": 11,
        "q": "Where must a bath fan exhaust to?",
        "choices": [
          "Into the attic",
          "To the outside of the house",
          "Into a wall cavity",
          "Into the crawl space"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Exhaust must go outside, or the steam grows mold where it lands. (a) The attic is the classic mistake — steam condenses on the sheathing. (c) A wall cavity traps moisture. (d) A crawl space traps moisture too."
      },
      {
        "module": 11,
        "q": "What is an HRV or ERV?",
        "choices": [
          "A type of furnace",
          "A whole-house ventilator that recovers heat (and moisture, for an ERV) from outgoing air",
          "A kind of insulation",
          "A roof vent"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It brings in fresh air while recovering energy from the air it exhausts. (a) It is not a furnace. (c) It is not insulation. (d) It is not a roof vent."
      },
      {
        "module": 11,
        "q": "What is backdrafting?",
        "choices": [
          "A fan running backwards",
          "Exhaust gases pulled backwards down a flue into the house",
          "A duct that is too long",
          "A furnace that is too big"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A powerful exhaust fan or a very tight house can pull flue gases back inside. (a) A fan running backwards is a different fault. (c) Duct length is a different problem. (d) An oversized furnace is a sizing problem."
      },
      {
        "module": 12,
        "q": "What does commissioning mean?",
        "choices": [
          "Signing the contract",
          "Starting up every system, testing it, and proving it works as designed, before handover",
          "Painting the house",
          "Filing the permit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Commissioning proves each system works before the homeowner moves in. (a) Signing the contract happens at the start. (c) Painting is a finish trade. (d) The permit is filed before work starts."
      },
      {
        "module": 12,
        "q": "What do as-built drawings show?",
        "choices": [
          "What was intended",
          "What was actually built, including every field fix and change",
          "What the next house will look like",
          "The permit application"
        ],
        "answer": 1,
        "explanation": "Correct: (b). As-builts are the plans updated to match reality. (a) The original plans show what was intended. (c) As-builts describe this house, not the next one. (d) The permit application is a different document."
      },
      {
        "module": 12,
        "q": "Why is a walkthrough checklist valuable?",
        "choices": [
          "It looks professional",
          "It proves what was taught and gives the homeowner a written reference",
          "It replaces the manual",
          "It is required for the permit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A signed checklist proves the lesson happened and serves as a reference. (a) Looking professional is a side benefit. (c) It does not replace the equipment manuals. (d) It is not a permit requirement."
      }
    ]
  }
};
