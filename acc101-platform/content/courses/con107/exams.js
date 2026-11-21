// con107 — Midterm and Final exams.
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
        "q": "A roof has a 5/12 pitch and a run of 14 ft. What is the rise?",
        "choices": [
          "5 ft 10 in",
          "7 ft",
          "5 ft",
          "3 ft 6 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rise = run × pitch = 14 × 5/12 = 5.83 ft, about 5 ft 10 in. (b) 7 ft would be a 6/12 pitch over 14 ft. (c) 5 ft is the rise for a 5/12 pitch over a 12-ft run. (d) 3 ft 6 in is the rise for a 3/12 pitch over 14 ft."
      },
      {
        "module": 1,
        "q": "Which roof shape handles high wind best, because it slopes on all four sides and has no flat gable end for wind to catch?",
        "choices": [
          "Gable roof",
          "Hip roof",
          "Flat roof",
          "Shed roof"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hip roof slopes on all four sides, so wind flows over it instead of catching a flat end wall. (a) A gable roof has a flat triangular end that catches wind. (c) A flat roof sheds neither wind nor water well. (d) A shed roof has one slope and a tall wall on one side."
      },
      {
        "module": 1,
        "q": "Snow sitting on a roof is an example of:",
        "choices": [
          "Dead load",
          "Live load",
          "Wind load",
          "Seismic load"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Live load is temporary weight — snow, people, stored items. (a) Dead load is the permanent weight of the roof itself. (c) Wind load is pressure from wind. (d) Seismic load is force from an earthquake."
      },
      {
        "module": 1,
        "q": "A house footprint is 900 sq ft and the roof pitch is 8/12 (slope factor about 1.202). What is the approximate sloped roof area?",
        "choices": [
          "900 sq ft",
          "1,082 sq ft",
          "1,200 sq ft",
          "1,000 sq ft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Slope area = footprint × slope factor = 900 × 1.202 = 1,082 sq ft. (a) 900 sq ft is the flat footprint, not the sloped area. (c) 1,200 sq ft would need a slope factor of 1.333. (d) 1,000 sq ft is a rough guess, not the calculation."
      },
      {
        "module": 2,
        "q": "A common rafter has a run of 8 ft and a rise of 6 ft. How long is the rafter?",
        "choices": [
          "10 ft",
          "14 ft",
          "12 ft",
          "8 ft"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rafter² = run² + rise² = 64 + 36 = 100, so the rafter is √100 = 10 ft. (b) 14 ft is the run plus the rise added together, not the hypotenuse. (c) 12 ft is a guess between the two. (d) 8 ft is the run alone, not the sloped length."
      },
      {
        "module": 2,
        "q": "A common rafter has a run of 16 ft and a rise of 12 ft. How long is the rafter?",
        "choices": [
          "28 ft",
          "20 ft",
          "24 ft",
          "16 ft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rafter² = 256 + 144 = 400, so the rafter is √400 = 20 ft. (a) 28 ft is run plus rise. (c) 24 ft is run plus half the rise. (d) 16 ft is the run alone."
      },
      {
        "module": 2,
        "q": "A roof has an 8/12 pitch and a run of 9 ft. What is the rise?",
        "choices": [
          "6 ft",
          "9 ft",
          "12 ft",
          "4 ft"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rise = 9 × 8/12 = 6 ft. (b) 9 ft is the run, not the rise. (c) 12 ft would be the rise for a 16/12 pitch. (d) 4 ft would be the rise for a 5.33/12 pitch."
      },
      {
        "module": 2,
        "q": "A 28-ft wall needs rafters spaced 16 in on center. How many rafters are needed on one side?",
        "choices": [
          "21",
          "22",
          "28",
          "16"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 28 ft = 336 in; 336 ÷ 16 = 21 spaces, plus 1 starter rafter = 22. (a) 21 counts the spaces but forgets the starter. (c) 28 is the wall length in feet, not the count. (d) 16 is the spacing, not the count."
      },
      {
        "module": 2,
        "q": "The birdsmouth cut on a rafter:",
        "choices": [
          "Is decorative trim",
          "Seats the rafter on the wall plate and transfers the roof load to the wall",
          "Holds the ridge board",
          "Covers the eave"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The birdsmouth is the notch that lets the rafter sit flat on the top plate and pass its load into the wall. (a) It is structural, not decorative. (c) The ridge board is held by the rafter's plumb cut, not the birdsmouth. (d) The eave is covered by the fascia and soffit."
      },
      {
        "module": 3,
        "q": "A hip rafter runs:",
        "choices": [
          "Straight across the ceiling",
          "At 45 degrees in plan, from a corner of the building to the ridge",
          "Along the eave",
          "Vertically up the gable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The hip rafter runs diagonally from the outside corner up to the ridge, at 45 degrees in plan. (a) A ceiling joist runs straight across. (c) The eave runs along the wall top. (d) Nothing structural runs vertically up a gable."
      },
      {
        "module": 3,
        "q": "A jack rafter is:",
        "choices": [
          "The longest rafter on the roof",
          "A short rafter that runs from a hip or valley rafter to the ridge or the wall plate",
          "A rafter made of steel",
          "The rafter over the front door"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Jack rafters are the short rafters that fill in between a hip or valley and the ridge or plate. (a) The longest rafter is usually a common or hip rafter. (c) Jack rafters are wood like the rest. (d) No rafter is named for a door."
      },
      {
        "module": 3,
        "q": "A valley is the place where:",
        "choices": [
          "Two roof slopes meet in an inside corner, and water from both slopes collects there",
          "The ridge meets the gable",
          "The roof meets the ground",
          "The chimney passes through the roof"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A valley is the inside corner where two slopes meet, and it carries the water from both. (b) The ridge meeting the gable is a gable end, not a valley. (c) The roof never meets the ground. (d) A chimney penetration is flashed, not a valley."
      },
      {
        "module": 3,
        "q": "The difference between a ridge board and a ridge beam is:",
        "choices": [
          "There is no difference",
          "A ridge beam carries roof load to posts or walls; a ridge board only ties the rafters together",
          "A ridge board is steel and a ridge beam is wood",
          "A ridge beam is only used on flat roofs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ridge beam is structural and carries load; a ridge board is a nailing surface that ties rafter pairs together. (a) They are different members with different jobs. (c) Both are usually wood. (d) Ridge beams are used on sloped roofs, not flat ones."
      },
      {
        "module": 4,
        "q": "A 36-ft building needs trusses spaced 24 in on center. How many trusses are needed?",
        "choices": [
          "18",
          "19",
          "36",
          "24"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 36 ft = 432 in; 432 ÷ 24 = 18 spaces, plus 1 starter truss = 19. (a) 18 counts the spaces but forgets the starter. (c) 36 is the building length in feet. (d) 24 is the spacing in inches."
      },
      {
        "module": 4,
        "q": "A truss member may be cut:",
        "choices": [
          "Whenever it is in the way",
          "Never without the truss designer's written approval",
          "If the hole is small",
          "Only on the bottom chord"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Trusses are engineered; cutting any member changes the load path and needs the designer's written approval. (a) Convenience never justifies cutting a truss. (c) Small cuts are also not allowed without approval. (d) The bottom chord is structural too."
      },
      {
        "module": 4,
        "q": "Temporary bracing on roof trusses is installed to:",
        "choices": [
          "Hold the roofing nails",
          "Keep the trusses from tipping or buckling sideways while they are being set",
          "Keep the trusses dry",
          "Make the trusses look straight"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Trusses are strong vertically but weak sideways until braced; bracing holds them plumb during installation. (a) Nails hold the roofing, not the bracing. (c) Bracing does not keep trusses dry. (d) Appearance is a side benefit, not the purpose."
      },
      {
        "module": 4,
        "q": "A fink truss differs from a king-post truss because:",
        "choices": [
          "It is made of steel",
          "Its web members form a W shape, while a king-post truss has a single central vertical member",
          "It has no bottom chord",
          "It is only used on flat roofs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fink truss has diagonal webs forming a W; a king-post truss has one central vertical post. (a) Both are wood trusses. (c) Both have a bottom chord. (d) Both are used on sloped roofs."
      },
      {
        "module": 5,
        "q": "A sloped roof area is 671 sq ft. Roof sheathing comes in 4×8-ft sheets (32 sq ft each). How many sheets are needed before waste?",
        "choices": [
          "18",
          "21",
          "24",
          "32"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 671 ÷ 32 = 20.97, so 21 sheets cover the area. (a) 18 sheets cover only 576 sq ft. (c) 24 sheets is the count with 10% waste added. (d) 32 is the square footage of one sheet."
      },
      {
        "module": 5,
        "q": "A small gap is left between roof sheathing panels because:",
        "choices": [
          "It saves material",
          "Panels expand and contract with moisture and temperature, and the gap keeps them from buckling",
          "It lets water drain through",
          "It makes nailing easier"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wood panels swell with moisture; without a gap they push against each other and buckle. (a) The gap is tiny and saves nothing. (c) Water should never drain through the sheathing. (d) The gap has nothing to do with nailing."
      },
      {
        "module": 5,
        "q": "7/16-in OSB sheathing is commonly used:",
        "choices": [
          "Only on walls",
          "Over rafters spaced 24 in apart, because it is rated for that span",
          "Only on flat roofs",
          "Only under metal roofing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 7/16-in OSB with the right span rating is standard for 24-in rafter spacing. (a) It is used on roofs as well as walls. (c) It is used on sloped roofs, not only flat ones. (d) It is used under shingles too."
      },
      {
        "module": 5,
        "q": "H-clips between roof sheathing panels are used to:",
        "choices": [
          "Hold the shingles down",
          "Support the panel edges between rafters so the edges do not deflect",
          "Seal the joints against water",
          "Space the rafters"
        ],
        "answer": 1,
        "explanation": "Correct: (b). H-clips stiffen the unsupported panel edges between rafters. (a) Shingles are nailed, not clipped. (c) Clips do not seal joints. (d) Rafters are spaced by layout, not by clips."
      },
      {
        "module": 6,
        "q": "A roof needs 1,500 sq ft of underlayment. Each roll covers 400 sq ft. How many rolls are needed?",
        "choices": [
          "3",
          "4",
          "5",
          "2"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1,500 ÷ 400 = 3.75, so 4 rolls are needed — you cannot buy three-quarters of a roll. (a) 3 rolls cover only 1,200 sq ft. (c) 5 rolls would be 2,000 sq ft, more than needed. (d) 2 rolls cover only 800 sq ft."
      },
      {
        "module": 6,
        "q": "Ice and water shield is installed:",
        "choices": [
          "On the ridge only",
          "At the eaves, in valleys, and around penetrations — the places water is most likely to get in",
          "Under the siding",
          "On the ceiling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ice and water shield is a self-sealing membrane for vulnerable spots: eaves, valleys, and penetrations. (a) The ridge gets a vent, not shield. (c) Siding has its own weather barrier. (d) The ceiling is inside the house."
      },
      {
        "module": 6,
        "q": "In a vented attic, air should:",
        "choices": [
          "Enter at the ridge and exit at the soffit",
          "Enter at the soffit vents and exit at the ridge vent",
          "Not move at all",
          "Enter through the gable only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cool air enters low at the soffits and warm, moist air exits high at the ridge. (a) That is backwards — warm air rises. (c) Still air traps moisture and heat. (d) Gable vents alone do not ventilate the whole attic."
      },
      {
        "module": 6,
        "q": "Roof underlayment is:",
        "choices": [
          "The shingles themselves",
          "A secondary water barrier installed over the sheathing and under the roofing material",
          "A type of insulation",
          "The roof flashing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Underlayment is the backup layer that sheds water if it gets past the shingles. (a) Shingles are the primary roofing, not the underlayment. (c) Insulation is inside the house, not on the roof deck. (d) Flashing is metal at joints and penetrations."
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
        "q": "A roof has a 7/12 pitch and a run of 12 ft. What is the rise?",
        "choices": [
          "6 ft",
          "7 ft",
          "12 ft",
          "5 ft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rise = 12 × 7/12 = 7 ft. (a) 6 ft would be a 6/12 pitch. (c) 12 ft is the run, not the rise. (d) 5 ft would be a 5/12 pitch."
      },
      {
        "module": 1,
        "q": "A gable roof is more vulnerable to wind than a hip roof because:",
        "choices": [
          "It is taller",
          "Its flat triangular gable end gives wind a large surface to push against",
          "It has more shingles",
          "It has no ridge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The gable end wall is a flat surface that catches wind like a sail. (a) Height alone is not the issue. (c) Shingle count does not affect wind vulnerability. (d) A gable roof does have a ridge."
      },
      {
        "module": 1,
        "q": "The dead load of a roof is:",
        "choices": [
          "The snow on it",
          "The permanent weight of the roof materials themselves — framing, sheathing, and roofing",
          "The workers on it",
          "The wind pushing on it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dead load is the roof's own permanent weight. (a) Snow is live load. (c) Workers are live load. (d) Wind is wind load."
      },
      {
        "module": 2,
        "q": "A rafter has a run of 6 ft and a rise of 8 ft. How long is the rafter?",
        "choices": [
          "10 ft",
          "14 ft",
          "12 ft",
          "8 ft"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rafter² = 36 + 64 = 100, so the rafter is 10 ft. (b) 14 ft is run plus rise. (c) 12 ft is a guess. (d) 8 ft is the rise alone."
      },
      {
        "module": 2,
        "q": "A roof has a 5/12 pitch and a run of 18 ft. What is the rise?",
        "choices": [
          "7 ft 6 in",
          "5 ft",
          "9 ft",
          "6 ft"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rise = 18 × 5/12 = 7.5 ft, or 7 ft 6 in. (b) 5 ft is the rise for a 12-ft run. (c) 9 ft would be a 6/12 pitch. (d) 6 ft would be a 4/12 pitch."
      },
      {
        "module": 2,
        "q": "A 20-ft wall needs rafters spaced 16 in on center. How many rafters are needed on one side?",
        "choices": [
          "15",
          "16",
          "20",
          "14"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 20 ft = 240 in; 240 ÷ 16 = 15 spaces, plus 1 starter = 16. (a) 15 counts the spaces but forgets the starter. (c) 20 is the wall length in feet. (d) 14 is not the result of the calculation."
      },
      {
        "module": 2,
        "q": "The plumb cut at the top of a rafter is cut:",
        "choices": [
          "Horizontally",
          "Vertically, so it sits flat against the ridge board",
          "At 45 degrees always",
          "Only on hip rafters"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The plumb cut is vertical, matching the face of the ridge board. (a) A horizontal cut is the seat cut of the birdsmouth. (c) 45 degrees is not the plumb-cut angle. (d) Every rafter has a plumb cut, not just hip rafters."
      },
      {
        "module": 3,
        "q": "A valley rafter is:",
        "choices": [
          "The longest rafter on the roof",
          "The rafter that runs along the inside corner where two slopes meet",
          "A rafter made of two pieces",
          "The rafter at the gable end"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The valley rafter runs along the valley line where two slopes meet. (a) The longest rafter is usually a hip or common rafter. (c) A valley rafter is one member. (d) The gable-end rafter is a common rafter at the end wall."
      },
      {
        "module": 3,
        "q": "Jack rafters get shorter as they approach:",
        "choices": [
          "The ridge",
          "The outside corner of the building",
          "The chimney",
          "The eave"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Jack rafters shorten toward the corner because the hip rafter angles away from the ridge. (a) They get longer toward the ridge. (c) The chimney does not change jack rafter lengths. (d) They meet the plate along the eave, not the corner."
      },
      {
        "module": 3,
        "q": "A hip roof has:",
        "choices": [
          "Two gable ends",
          "No gable ends — it slopes on all four sides",
          "One flat side",
          "No ridge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hip roof slopes on all four sides, so there are no gable-end walls. (a) Gable ends belong to gable roofs. (c) No side is flat. (d) A hip roof has a ridge, though it is shorter than a gable roof's."
      },
      {
        "module": 4,
        "q": "Roof trusses are most commonly spaced:",
        "choices": [
          "12 in on center",
          "24 in on center",
          "48 in on center",
          "8 in on center"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 24 inches on center is the standard truss spacing. (a) 12 inches is far closer than needed. (c) 48 inches is too wide for standard sheathing. (d) 8 inches is not a truss spacing."
      },
      {
        "module": 4,
        "q": "When lifting a truss into place, the crew should:",
        "choices": [
          "Lift it by a single web member",
          "Lift it by the peak or top chord, keeping it vertical, and never drag it",
          "Drop it off the truck",
          "Stand it on its side"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Trusses are lifted by the peak or top chord, kept vertical, and never dragged, which can rack them. (a) A single web member is not a lifting point. (c) Dropping a truss can break joints. (d) A truss on its side can fold."
      },
      {
        "module": 4,
        "q": "Permanent bracing on a truss roof:",
        "choices": [
          "Is optional",
          "Ties the trusses together so they act as one system and cannot rack sideways",
          "Holds the shingles",
          "Replaces the sheathing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Permanent bracing locks the trusses into a single stable system. (a) It is required, not optional. (c) Shingles are nailed to sheathing. (d) Bracing does not replace sheathing."
      },
      {
        "module": 5,
        "q": "A roof needs 21 sheets of sheathing before waste. With 10% waste added, how many sheets should be ordered?",
        "choices": [
          "21",
          "23",
          "24",
          "22"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 21 × 1.10 = 23.1, so 24 sheets are ordered. (a) 21 is the count with no waste. (b) 23 is short — 23.1 rounds up to 24. (d) 22 is short by more than a sheet."
      },
      {
        "module": 5,
        "q": "Sheathing joints should be staggered because:",
        "choices": [
          "It looks better",
          "Staggering spreads the joints so no single rafter carries a line of weak joints",
          "It uses fewer sheets",
          "It is faster to install"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Staggered joints distribute loads and keep the deck strong. (a) Appearance is not the reason. (c) Staggering does not change the sheet count. (d) Staggering is not faster."
      },
      {
        "module": 5,
        "q": "Roof sheathing is fastened:",
        "choices": [
          "Only at the corners",
          "Along the edges and into every rafter it crosses, following the panel's nailing pattern",
          "With glue only",
          "Only at the ridge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Sheathing is nailed or screwed at the edges and at each rafter crossing, per the panel's pattern. (a) Corners alone would leave the panel loose. (c) Glue alone is not the fastening method. (d) The ridge alone is not enough."
      },
      {
        "module": 6,
        "q": "Ice and water shield at the eaves commonly extends:",
        "choices": [
          "Only to the outside edge",
          "At least 24 in inside the warm wall line of the house",
          "To the ridge",
          "Under the siding only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The common rule is 24 inches inside the exterior wall line, covering the area where ice dams form. (a) The outside edge alone leaves the dam zone unprotected. (c) The ridge does not need shield. (d) Shield is a roof product, not a siding product."
      },
      {
        "module": 6,
        "q": "An attic of 1,200 sq ft needs about how much total vent area at the common 1:150 rule?",
        "choices": [
          "4 sq ft",
          "8 sq ft",
          "12 sq ft",
          "2 sq ft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1,200 ÷ 150 = 8 sq ft of vent area, split between intake and exhaust. (a) 4 sq ft would be the 1:300 rule. (c) 12 sq ft would be a 1:100 rule. (d) 2 sq ft is far too little."
      },
      {
        "module": 6,
        "q": "The purpose of attic ventilation is to:",
        "choices": [
          "Cool the house in winter",
          "Remove heat and moisture from the attic so the roof lasts longer and the house stays dry",
          "Heat the attic",
          "Keep birds out"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ventilation carries away heat and moisture that would otherwise damage the roof and structure. (a) Ventilation does not cool the house in winter. (c) Ventilation removes heat, it does not add it. (d) Screens keep birds out, not ventilation."
      },
      {
        "module": 7,
        "q": "A roof area is 1,500 sq ft. How many roofing squares are needed? (1 square = 100 sq ft.)",
        "choices": [
          "10",
          "15",
          "20",
          "45"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1,500 ÷ 100 = 15 squares. (a) 10 squares cover only 1,000 sq ft. (c) 20 squares cover 2,000 sq ft. (d) 45 is the bundle count at 3 bundles per square."
      },
      {
        "module": 7,
        "q": "At 3 bundles per square, 15 squares need how many bundles?",
        "choices": [
          "15",
          "30",
          "45",
          "60"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 15 × 3 = 45 bundles. (a) 15 is the square count, not the bundle count. (b) 30 would be 2 bundles per square. (d) 60 would be 4 bundles per square."
      },
      {
        "module": 7,
        "q": "The exposure of a standard 3-tab asphalt shingle — the part you see after installation — is about:",
        "choices": [
          "12 in",
          "5 in",
          "10 in",
          "3 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 3-tab shingle shows about 5 inches of exposure. (a) 12 inches is the full shingle height. (c) 10 inches would leave too little overlap. (d) 3 inches would waste material."
      },
      {
        "module": 7,
        "q": "A low-slope or flat roof needs a minimum slope of about:",
        "choices": [
          "1/4 in per foot, so water drains instead of ponding",
          "6 in per foot",
          "No slope at all",
          "12 in per foot"
        ],
        "answer": 0,
        "explanation": "Correct: (a). About 1/4 inch per foot is the minimum for drainage on a low-slope roof. (b) 6 inches per foot is a steep roof, not a flat one. (c) No slope means standing water. (d) 12 inches per foot is a 12/12 pitch."
      },
      {
        "module": 8,
        "q": "A stair has a total rise of 96 in. Using a 7-in riser, how many risers are needed, and how tall is each one?",
        "choices": [
          "12 risers at 8 in",
          "14 risers at about 6.86 in",
          "13 risers at 7.4 in",
          "16 risers at 6 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 96 ÷ 7 = 13.7, so 14 risers are used, each 96 ÷ 14 = 6.86 in tall. (a) 12 risers would be 8 in each — over the common 7-3/4-in maximum. (c) 13 risers would be 7.38 in each, but 13 × 7.38 is not the clean split; 14 risers is the standard rounding up. (d) 16 risers would be 6 in each, more risers than needed."
      },
      {
        "module": 8,
        "q": "A stair has a total rise of 84 in and a 7-in riser. How many risers are there?",
        "choices": [
          "10",
          "12",
          "14",
          "11"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 84 ÷ 7 = 12 risers. (a) 10 risers would be 8.4 in each. (c) 14 risers would be 6 in each. (d) 11 risers would be 7.64 in each."
      },
      {
        "module": 8,
        "q": "The comfort rule for stairs says 2 × riser + tread should be about:",
        "choices": [
          "30 in",
          "24–25 in",
          "18 in",
          "36 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two risers plus one tread of about 24–25 inches feels natural to walk. (a) 30 inches would be a very long stride. (c) 18 inches would be a very short stride. (d) 36 inches is far too long."
      },
      {
        "module": 8,
        "q": "The common minimum headroom over a stair is:",
        "choices": [
          "6 ft",
          "6 ft 8 in",
          "7 ft 6 in",
          "5 ft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Headroom of at least 6 feet 8 inches is the common code minimum. (a) 6 feet is too low. (c) 7 feet 6 inches is more than required. (d) 5 feet is far too low."
      },
      {
        "module": 9,
        "q": "A stair has 14 risers. How many treads does it have, if the upper floor is the last tread?",
        "choices": [
          "14",
          "13",
          "15",
          "12"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Treads = risers − 1 when the upper floor serves as the last tread, so 14 − 1 = 13. (a) 14 would count the upper floor as a tread too. (c) 15 is one too many. (d) 12 is one too few."
      },
      {
        "module": 9,
        "q": "A stair stringer has a total rise of 60 in and a total run of 80 in. How long is the stringer?",
        "choices": [
          "100 in",
          "140 in",
          "120 in",
          "80 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Stringer² = 60² + 80² = 3,600 + 6,400 = 10,000, so the stringer is 100 in long. (b) 140 in is rise plus run. (c) 120 in is a guess. (d) 80 in is the run alone."
      },
      {
        "module": 9,
        "q": "The bottom riser of a stair stringer is cut shorter than the others by:",
        "choices": [
          "The thickness of the tread, so the first step is the same height as the rest",
          "The width of the stringer",
          "Nothing — all risers are cut the same",
          "The thickness of the riser board"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The bottom riser is shortened by the tread thickness so the first step, with its tread on, matches the others. (b) The stringer width has nothing to do with riser height. (c) Cutting all risers the same makes the first step too tall by one tread thickness. (d) The riser board thickness does not set the cut."
      },
      {
        "module": 10,
        "q": "A window unit is 30 in wide. How wide should the rough opening be?",
        "choices": [
          "30 in",
          "30-1/2 in",
          "31-1/2 in",
          "29-1/2 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The rough opening is about 1/2 inch wider than the unit, so 30-1/2 in. (a) 30 in leaves no room to shim and square the window. (c) 31-1/2 in is a full inch over — too loose. (d) 29-1/2 in is smaller than the window itself."
      },
      {
        "module": 10,
        "q": "A window is installed plumb, level, and square because:",
        "choices": [
          "It looks better",
          "A window that is out of square will not open, close, or seal properly",
          "The inspector requires a level",
          "It saves caulk"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A racked window binds, leaks air and water, and will not operate. (a) Appearance is a side benefit. (c) The inspector checks it, but function is the reason. (d) Caulk cannot fix a racked window."
      },
      {
        "module": 10,
        "q": "When flashing a window, the sill flashing goes on:",
        "choices": [
          "Last",
          "First, so the side and head flashing lap over it",
          "Only on the inside",
          "Never — windows do not need flashing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Flashing is installed shingle-style from the bottom up, so the sill goes first and upper pieces lap over it. (a) Last would put the sill on top, directing water behind it. (c) Flashing is on the outside. (d) Every window needs flashing."
      },
      {
        "module": 11,
        "q": "An exterior door is 32 in wide and 80 in tall. What is the rough opening?",
        "choices": [
          "32 × 80 in",
          "32-1/2 × 80-1/2 in",
          "33 × 81 in",
          "31-1/2 × 79-1/2 in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The rough opening is about 1/2 inch bigger in each direction: 32-1/2 by 80-1/2 in. (a) The exact unit size leaves no room to shim. (c) A full inch over is too loose. (d) Smaller than the door cannot fit the door."
      },
      {
        "module": 11,
        "q": "The gap between a door and its frame — the reveal — is about:",
        "choices": [
          "1/8 in",
          "1 in",
          "1/2 in",
          "2 in"
        ],
        "answer": 0,
        "explanation": "Correct: (a). About 1/8 inch gives the door room to swing without binding. (b) 1 inch is a huge gap that would leak air. (c) 1/2 inch is too wide. (d) 2 inches is not a reveal, it is a hole."
      },
      {
        "module": 11,
        "q": "A sill pan under an exterior door is there to:",
        "choices": [
          "Hold the door up",
          "Catch any water that gets past the threshold and drain it outside",
          "Insulate the floor",
          "Keep the door from swinging"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The sill pan catches leaks at the threshold and drains them out. (a) The framing holds the door up. (c) Insulation is not the pan's job. (d) The hinges and closer control the swing."
      },
      {
        "module": 12,
        "q": "House wrap is lapped:",
        "choices": [
          "Top over bottom",
          "Bottom over top — upper pieces lap over lower pieces so water sheds down",
          "Side to side only",
          "It is not lapped at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Like shingles, the upper layer laps over the lower one so water runs down and out. (a) Top over bottom would direct water behind the wrap. (c) Side laps matter too, but the vertical lap is the key one. (d) Unlapped wrap leaves gaps for water and air."
      },
      {
        "module": 12,
        "q": "Flashing is installed in layers from the bottom up so that:",
        "choices": [
          "It looks neat",
          "Each upper piece laps over the lower one and water is always directed outward",
          "It is easier to nail",
          "It uses less material"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Shingle-style laps always shed water to the outside. (a) Neatness is a side benefit. (c) Ease of nailing is not the reason. (d) Layering does not save material."
      },
      {
        "module": 12,
        "q": "A wall 30 ft long and 10 ft high needs house wrap. How many square feet is that?",
        "choices": [
          "300 sq ft",
          "40 sq ft",
          "400 sq ft",
          "30 sq ft"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 30 × 10 = 300 sq ft. (b) 40 is the length plus the height. (c) 400 would be a 40-ft wall. (d) 30 is the length alone."
      },
      {
        "module": 12,
        "q": "The main job of the weather barrier on the exterior shell is to:",
        "choices": [
          "Insulate the house",
          "Keep liquid water out while letting water vapor escape",
          "Hold the siding on",
          "Support the roof"
        ],
        "answer": 1,
        "explanation": "Correct: (b). House wrap blocks liquid water from outside but lets vapor pass out from inside. (a) Insulation is a separate layer. (c) Siding is fastened to the framing. (d) The roof is supported by the framing, not the wrap."
      }
    ]
  }
};
