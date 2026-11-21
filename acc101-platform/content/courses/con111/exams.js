// con111 — Midterm and Final exams.
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
        "q": "A fabrication shop needs to weld thin sheet metal quickly and cleanly indoors. The best process is:",
        "choices": [
          "SMAW",
          "Oxyfuel cutting",
          "GMAW (MIG)",
          "Brazing"
        ],
        "answer": 2,
        "explanation": "Correct: (c). MIG is fast, clean, and good on thin sheet indoors. (a) Stick is slower and better outdoors. (b) Oxyfuel cuts, it does not weld sheet. (d) Brazing melts filler only and is not a structural weld."
      },
      {
        "module": 1,
        "q": "A weld that melts the base metal into one piece is:",
        "choices": [
          "A braze",
          "A solder joint",
          "A weld",
          "A bolted joint"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Welding melts the base metal so the pieces become one. (a) Brazing melts filler only. (b) Soldering melts filler only at low temperature. (d) Bolting is mechanical, not fused."
      },
      {
        "module": 1,
        "q": "A student finishes this course and claims to be a certified welder. The correct response is:",
        "choices": [
          "Agree — the course certifies welders",
          "No — the course teaches knowledge; bead quality and puddle control need hands-on practice, and AWS Certified Welder is a performance test at an ATF",
          "No — welding needs no credential",
          "Agree — quizzes are the same as welding"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Knowledge is not skill, and AWS certification is a performance test with no written exam. (a) The course cannot certify anyone. (c) Credentials do exist and matter. (d) Quizzes cannot grade a bead."
      },
      {
        "module": 1,
        "q": "Which process uses a flux-coated rod and works well outdoors in wind?",
        "choices": [
          "GMAW",
          "SMAW (stick)",
          "TIG",
          "Soldering"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Stick uses a flux-coated rod and its flux shields the weld in wind. (a) MIG's gas blows away in wind. (c) TIG is a precision shop process. (d) Soldering is a low-temperature filler process."
      },
      {
        "module": 2,
        "q": "A welder lifts the helmet to make a quick tack weld. This is wrong because:",
        "choices": [
          "Tacks are not welds",
          "A tack is an arc, and an arc without a helmet causes arc flash",
          "Tacks do not need PPE",
          "The helmet is heavy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Any arc, even a tack, burns unprotected eyes and skin. (a) A tack is a weld. (c) Tacks need the same PPE. (d) Weight is not the reason."
      },
      {
        "module": 2,
        "q": "A fire watch must stay after hot work stops for at least:",
        "choices": [
          "5 minutes",
          "30 minutes",
          "2 hours",
          "1 minute"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At least 30 minutes, because sparks can smolder hidden before flaming up. (a) 5 minutes is too short. (c) 2 hours is longer than the rule. (d) 1 minute is far too short."
      },
      {
        "module": 2,
        "q": "A welder's gloves are wet from rain. The welder should:",
        "choices": [
          "Weld anyway — gloves dry fast",
          "Change to dry gloves and move to a dry position before welding",
          "Weld with bare hands",
          "Weld faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wet gloves conduct electricity — change them and get dry before welding. (a) Welding wet risks shock. (c) Bare hands are worse. (d) Speed does not fix conductivity."
      },
      {
        "module": 2,
        "q": "Before welding on a painted steel beam, the welder must:",
        "choices": [
          "Weld straight through the paint",
          "Remove the coating from the weld area or weld with ventilation and a respirator",
          "Paint over the weld after",
          "Use a darker helmet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Paint fume is toxic; remove it or protect against it. (a) Welding through paint puts toxic fume in the air. (c) Painting after does not remove the fume risk. (d) Helmet shade does not filter fume."
      },
      {
        "module": 3,
        "q": "A cutting torch's preheat flame should be:",
        "choices": [
          "Carburizing",
          "Neutral — one crisp inner cone",
          "Oxidizing",
          "Smoky yellow"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A neutral flame preheats evenly without adding or removing carbon. (a) Carburizing adds carbon. (c) Oxidizing burns metal. (d) A smoky flame is unburned fuel."
      },
      {
        "module": 3,
        "q": "An oxyfuel torch is lit by:",
        "choices": [
          "A cigarette lighter",
          "Opening the fuel valve slightly and lighting with a striker, then adding oxygen",
          "Opening oxygen first",
          "A match held in the hand"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fuel slightly open, striker, then oxygen to neutral. (a) A lighter is never used. (c) Oxygen first gives the wrong mix. (d) A match in the hand is unsafe — use a striker."
      },
      {
        "module": 3,
        "q": "A cut is wide, rough, and covered in heavy slag on the bottom. The cause is:",
        "choices": [
          "Travel speed too slow",
          "Travel speed too fast",
          "Tip too clean",
          "Oxygen pressure too low"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Too slow a travel speed lets the flame stay too long in one place. (b) Too fast does not cut through. (c) A clean tip helps, it does not cause a rough cut. (d) Low oxygen pressure would stall the cut, not widen it."
      },
      {
        "module": 3,
        "q": "Acetylene above 15 PSI is dangerous because:",
        "choices": [
          "It gets too hot",
          "It can decompose explosively without oxygen",
          "It runs out fast",
          "It makes the flame yellow"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Above 15 PSI acetylene can detonate in the hose. (a) Heat is not the mechanism. (c) Use rate is not the danger. (d) Flame color is not the danger."
      },
      {
        "module": 4,
        "q": "In the electrode number 6013, the '1' means:",
        "choices": [
          "1,000 PSI",
          "All welding positions",
          "One amp",
          "First use"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The third digit is position: 1 means all positions. (a) Strength is the first two digits. (c) Amperage is not in the number. (d) There is no 'first use' digit."
      },
      {
        "module": 4,
        "q": "A 7018 rod that has been sitting open on a damp shelf should be:",
        "choices": [
          "Used as is",
          "Dried in a rod oven to the manufacturer's temperature before use, or discarded if it cannot be restored",
          "Wiped with a rag",
          "Used on thin steel only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Damp 7018 absorbs moisture that causes hydrogen cracking; it must be re-dried in an oven or discarded. (a) Using it as is risks cracking. (c) Wiping does not remove absorbed moisture. (d) Thin steel does not fix hydrogen cracking."
      },
      {
        "module": 4,
        "q": "The usual polarity for stick welding is:",
        "choices": [
          "DCEN",
          "DCEP — electrode positive, deep penetration",
          "AC only",
          "No polarity"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DCEP puts more heat in the work for deep penetration. (a) DCEN is shallow penetration. (c) AC is used for arc blow, not as the usual polarity. (d) Polarity always matters."
      },
      {
        "module": 4,
        "q": "A stick bead is wide, flat, and spattery. The most likely cause is:",
        "choices": [
          "Arc too short",
          "Arc too long",
          "Travel too slow",
          "Rod too new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A long arc spatters and makes a flat weak bead. (a) A short arc makes a narrow high bead. (c) Slow travel makes a wide high bead, not a flat spattery one. (d) Rod age is not the cause."
      },
      {
        "module": 5,
        "q": "A fillet weld's work angle should be about:",
        "choices": [
          "90 degrees",
          "45 degrees",
          "10 degrees",
          "180 degrees"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 45 degrees heats both plates equally. (a) 90 degrees points at one plate. (c) 10 degrees is nearly flat to one side. (d) 180 degrees is no angle."
      },
      {
        "module": 5,
        "q": "Pushing a stick rod instead of dragging it causes:",
        "choices": [
          "A better bead",
          "Slag running ahead of the arc and trapped in the weld",
          "Deeper penetration",
          "Less spatter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pushing runs slag ahead of the arc, trapping it in the weld. (a) The bead is worse. (c) Penetration falls. (d) Spatter is not the issue."
      },
      {
        "module": 5,
        "q": "The hardest welding position is:",
        "choices": [
          "Flat",
          "Horizontal",
          "Vertical-up",
          "Overhead"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Overhead — the puddle is held up by surface tension and spatter falls on the welder. (a) Flat is the easiest. (b) Horizontal is easier than overhead. (c) Vertical-up is hard but not the hardest."
      },
      {
        "module": 5,
        "q": "A bead has weld metal rolling over the toe without fusing. The defect is:",
        "choices": [
          "Undercut",
          "Overlap",
          "Porosity",
          "Crack"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Overlap is metal rolling over the toe, from too slow a travel speed. (a) Undercut is a groove at the toe. (c) Porosity is gas holes. (d) A crack is a break, not rolled metal."
      },
      {
        "module": 6,
        "q": "In MIG welding, if the wire feeds too slowly, the arc will:",
        "choices": [
          "Stub into the work",
          "Burn back to the contact tip",
          "Go out completely",
          "Get wider"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Slow wire lets the arc burn back up the wire to the tip. (a) Stubbing happens when the wire feeds too fast. (c) The arc does not go out, it burns back. (d) Width is set by voltage, not wire speed."
      },
      {
        "module": 6,
        "q": "MIG welding in a breeze without a windbreak causes:",
        "choices": [
          "A stronger weld",
          "Porosity, because the shielding gas blows away",
          "Less spatter",
          "A hotter arc"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wind blows the gas cloud away and air enters the pool, leaving holes. (a) The weld is weaker. (c) Spatter is not reduced. (d) The arc is not hotter."
      },
      {
        "module": 6,
        "q": "Pulling a MIG gun gives:",
        "choices": [
          "A wider, flatter bead",
          "Deeper penetration and a narrower bead",
          "More porosity",
          "A colder weld"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pulling drags the gun behind the puddle for deeper penetration. (a) Pushing gives the wider flatter bead. (c) Pulling does not cause porosity. (d) Pulling is hotter at the joint, not colder."
      },
      {
        "module": 6,
        "q": "Short circuit transfer is used for:",
        "choices": [
          "Thick plate in the flat position",
          "Thin sheet metal and all positions",
          "Overhead only",
          "Pipe roots only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Short circuit is the low-heat mode for thin metal and all positions. (a) Thick plate uses spray transfer. (c) It works in all positions, not only overhead. (d) It is not limited to pipe roots."
      },
      {
        "module": 2,
        "q": "The welding helmet's lens shade is chosen by:",
        "choices": [
          "The welder's age",
          "The process and amperage",
          "The weather",
          "The metal's color"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Brighter processes and higher amperage need darker shades. (a) Age is irrelevant. (c) Weather does not change the arc. (d) Metal color does not set the shade."
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
        "q": "A site needs to cut a steel beam to length outdoors. The right tool is:",
        "choices": [
          "A MIG welder",
          "An oxyfuel cutting torch",
          "A stick welder",
          "A soldering iron"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Oxyfuel cutting is the site cutting tool for steel. (a) MIG welds, it does not cut. (c) Stick welds, it does not cut. (d) A soldering iron is for low-temperature filler joints."
      },
      {
        "module": 1,
        "q": "Brazing is used for:",
        "choices": [
          "Structural steel connections",
          "Copper pipe and dissimilar metals, where the filler melts but the base metal does not",
          "Pressure pipe roots",
          "Thick plate grooves"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Brazing joins with a filler alloy without melting the base metal. (a) Structural connections must be welded. (c) Pipe roots are welded. (d) Thick plate needs a groove weld."
      },
      {
        "module": 2,
        "q": "Spatter burns through synthetic fabric because:",
        "choices": [
          "Synthetics are thin",
          "Spatter melts synthetics onto the skin",
          "Synthetics are flammable only",
          "Synthetics conduct electricity"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Melted synthetic sticks to skin and burns deeper than the spatter alone. (a) Thickness is not the mechanism. (c) Flammability is part of it, but melting onto skin is the burn mechanism. (d) Conductivity is not the issue."
      },
      {
        "module": 2,
        "q": "A welder is about to weld on the other side of a wall from stored rags. The welder must:",
        "choices": [
          "Weld anyway — the wall blocks heat",
          "Check the other side and remove the combustibles or cover them, and post a fire watch",
          "Weld faster",
          "Use a lower amperage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Heat travels through steel and can ignite material on the other side. (a) A wall does not block conducted heat. (c) Speed does not stop heat transfer. (d) Lower amperage still heats the wall."
      },
      {
        "module": 3,
        "q": "The oxygen hose in an oxyfuel set is usually:",
        "choices": [
          "Red",
          "Green",
          "Blue",
          "Yellow"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Green is oxygen, red is fuel, in most standards. (a) Red is the fuel hose. (c) Blue is not the oxygen color. (d) Yellow is not the oxygen color."
      },
      {
        "module": 3,
        "q": "A carburizing flame is recognized by:",
        "choices": [
          "One crisp cone",
          "A feathery second cone around the inner cone",
          "A short hissing cone",
          "No cone at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A feathery second cone means excess fuel — carburizing. (a) One crisp cone is neutral. (c) A short hissing cone is oxidizing. (d) No cone means the flame is wrong."
      },
      {
        "module": 4,
        "q": "In the electrode number 6010, the '60' means:",
        "choices": [
          "60 amps",
          "Minimum tensile strength 60,000 PSI",
          "60 millimeters",
          "60 degrees"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The first two digits give tensile strength in thousands of PSI. (a) Amperage is set on the machine. (c) Length is not in the number. (d) Temperature is not in the number."
      },
      {
        "module": 4,
        "q": "Arc blow is:",
        "choices": [
          "A strong wind",
          "A magnetic effect that pushes the arc to one side, worst with DC near corners",
          "A machine fault",
          "A type of electrode"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Arc blow is magnetic deflection of the arc. (a) Wind is not arc blow. (c) It is a physical effect, not a fault. (d) It is not an electrode type."
      },
      {
        "module": 5,
        "q": "Vertical-up welding is stronger than vertical-down because:",
        "choices": [
          "It is faster",
          "The welder weaves and pauses at the sides, letting the puddle freeze and build up",
          "It uses less metal",
          "It is easier"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vertical-up builds the weld in steps with good fusion. (a) It is slower, not faster. (c) It uses more metal, not less. (d) It is harder, not easier."
      },
      {
        "module": 5,
        "q": "A welder is about to start the third pass on a thick groove weld and the second pass still has slag on it. The right move is to:",
        "choices": [
          "Weld over it — the next pass melts it away",
          "Stop, chip the slag off, and wire-brush the pass before welding on",
          "Cool the joint with water first",
          "Switch to a different process for the third pass"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Every pass is cleaned before the next, or trapped slag becomes a permanent defect inside the weld. (a) The next pass does not melt slag away — it traps it. (c) Water cooling can crack the weld. (d) Changing process does not clean the pass."
      },
      {
        "module": 6,
        "q": "The common MIG gas mix C25 is:",
        "choices": [
          "75% argon, 25% CO2",
          "25% argon, 75% CO2",
          "100% argon",
          "100% CO2"
        ],
        "answer": 0,
        "explanation": "Correct: (a). C25 is 75% argon and 25% carbon dioxide. (b) That is the reverse mix. (c) That is pure argon. (d) That is straight CO2."
      },
      {
        "module": 6,
        "q": "A MIG welder has run good beads for an hour, then the beads suddenly turn porous. The nozzle is clogged with spatter. The explanation is:",
        "choices": [
          "The wire ran out",
          "Spatter in the nozzle is blocking the shielding gas, so air is reaching the pool",
          "The voltage rose on its own",
          "The metal got thinner"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clogged nozzle blocks gas flow, the pool loses its shield, and air causes porosity. (a) The wire did not run out — beads are still being made. (c) Voltage does not rise on its own. (d) The metal thickness did not change mid-job."
      },
      {
        "module": 7,
        "q": "Flux-core wire differs from MIG wire because it is:",
        "choices": [
          "Solid",
          "Hollow and filled with flux",
          "Made of tungsten",
          "Thicker always"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FCAW wire is hollow with flux inside. (a) Solid wire is MIG wire. (c) Tungsten is the TIG electrode. (d) Thickness varies by job."
      },
      {
        "module": 7,
        "q": "A flux-core weld is rough and spattery. The first thing to check is:",
        "choices": [
          "The gas bottle",
          "The polarity — it should be DCEN",
          "The helmet",
          "The work angle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wrong polarity (DCEP) is the most common cause of a rough flux-core bead. (a) Self-shielded flux core has no gas bottle. (c) The helmet does not change the bead. (d) Angle matters, but polarity is checked first."
      },
      {
        "module": 8,
        "q": "A weld symbol above the reference line means the weld goes on the:",
        "choices": [
          "Arrow side",
          "Other side",
          "Top of the plate",
          "Bottom of the plate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Above the line is other side; below is arrow side. (a) Below the line is arrow side. (c) Top is not the term. (d) Bottom is not the term."
      },
      {
        "module": 8,
        "q": "A fillet symbol with '3/8' to its left and '4-8' to its right means:",
        "choices": [
          "A 3/8-inch fillet, 4 inches long, every 8 inches",
          "A 4-inch fillet, 3/8 long",
          "An 8-inch fillet",
          "A 3/8-inch groove"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Left is leg size (3/8 in), right is length-pitch (4 in long, every 8 in). (b) The numbers are reversed. (c) 8 is the pitch, not the length. (d) A triangle is a fillet, not a groove."
      },
      {
        "module": 9,
        "q": "The heat-affected zone is most likely to crack when it cools:",
        "choices": [
          "Slowly",
          "Fast, forming hard brittle martensite",
          "At room temperature",
          "Under water"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fast cooling forms hard brittle martensite in the HAZ. (a) Slow cooling keeps it tougher. (c) Room temperature is not a cooling rate. (d) Water quenching is a fast cool, but the mechanism is the speed."
      },
      {
        "module": 9,
        "q": "Preheat helps a weld by:",
        "choices": [
          "Making the arc brighter",
          "Slowing cooling so the HAZ stays tough, and driving moisture out of the joint",
          "Melting the steel",
          "Replacing the electrode"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Slow cooling prevents a hard brittle HAZ and dry joints keep hydrogen out. (a) Brightness is not the point. (c) Preheat does not melt steel. (d) The electrode is unchanged."
      },
      {
        "module": 10,
        "q": "A butt joint in a beam that must carry full load gets:",
        "choices": [
          "A fillet weld",
          "A groove weld, usually CJP",
          "A spot weld",
          "A braze"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A full-strength butt joint needs a groove weld, often complete joint penetration. (a) A fillet cannot carry full member strength. (c) A spot weld is not structural here. (d) A braze is weaker than a weld."
      },
      {
        "module": 10,
        "q": "The root face of a groove weld is:",
        "choices": [
          "The bevel angle",
          "The flat land at the bottom of the bevel",
          "The gap at the root",
          "The weld length"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Root face is the flat land at the bottom of the bevel. (a) That is the bevel angle. (c) That is the root opening. (d) Length is a different dimension."
      },
      {
        "module": 11,
        "q": "Which NDT method finds surface cracks in any metal using a dye?",
        "choices": [
          "MT",
          "PT",
          "UT",
          "RT"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Liquid penetrant testing uses dye that seeps into surface cracks. (a) MT uses magnetism and works only on magnetic steel. (c) UT uses sound for internal defects. (d) RT uses X-rays for internal defects."
      },
      {
        "module": 11,
        "q": "A discontinuity that is small enough to be inside the code's limits is:",
        "choices": [
          "Always a defect",
          "Accepted — a defect is only a discontinuity that exceeds the acceptance criteria",
          "A crack",
          "Ignored by the inspector"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inside the limits it is accepted; the inspector judges against the criteria. (a) Size matters — small ones pass. (c) A crack is never acceptable. (d) It is recorded and judged, not ignored."
      },
      {
        "module": 12,
        "q": "The PQR is:",
        "choices": [
          "The welder's license",
          "The record proving a welding procedure makes a sound weld",
          "A test coupon",
          "The inspection report"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Procedure Qualification Record is the test evidence for the procedure. (a) A license is different. (c) A coupon is the test sample. (d) A report records inspection."
      },
      {
        "module": 12,
        "q": "An AWS Certified Welder test coupon is judged by:",
        "choices": [
          "A written exam score",
          "Whether the weld meets the code's acceptance criteria — pass or fail, no numeric score",
          "The welder's experience",
          "The price paid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The weld either meets the code or it does not; there is no percentage. (a) There is no written exam. (c) Experience does not judge the coupon. (d) Price is irrelevant."
      },
      {
        "module": 1,
        "q": "Which process is the rugged outdoor process that works in wind and on dirty steel?",
        "choices": [
          "GMAW",
          "SMAW",
          "TIG",
          "Soldering"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Stick is the rugged outdoor process. (a) MIG's gas blows away in wind. (c) TIG is a precision shop process. (d) Soldering is a low-temperature process."
      },
      {
        "module": 2,
        "q": "Metal fume fever comes from welding:",
        "choices": [
          "Plain mild steel",
          "Galvanized steel — zinc oxide fume",
          "Aluminum",
          "Copper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Zinc oxide fume from galvanized steel causes flu-like metal fume fever. (a) Mild steel fume is harmful but does not cause metal fume fever. (c) Aluminum fume is a different hazard. (d) Copper fume is a different hazard."
      },
      {
        "module": 3,
        "q": "At oxyfuel shutdown, the welder closes:",
        "choices": [
          "Fuel first",
          "Oxygen first, then fuel",
          "Both at once",
          "The regulator first"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Oxygen first, then fuel, then bleed the lines and back off the regulators. (a) Fuel first is the wrong order. (c) Both at once is uncontrolled. (d) The regulator is backed off after the valves."
      },
      {
        "module": 4,
        "q": "A 6010 electrode is best for:",
        "choices": [
          "Thin sheet metal",
          "Pipe root passes, where deep penetration matters",
          "Aluminum",
          "Overhead only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6010 digs deep and fast-freezes — the pipe root electrode. (a) Thin sheet wants 6013 or MIG. (c) 6010 is for steel, not aluminum. (d) It works in all positions, not only overhead."
      },
      {
        "module": 6,
        "q": "Spray transfer in MIG is used for:",
        "choices": [
          "Thin sheet in all positions",
          "Thick plate in flat and horizontal positions",
          "Overhead only",
          "Root passes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Spray is the high-heat mode for thick plate, flat and horizontal. (a) Thin sheet uses short circuit. (c) Spray is not for overhead. (d) Roots use short circuit or stick."
      },
      {
        "module": 7,
        "q": "A flux-core welder is holding the gun 2 inches from the work and the arc is unstable with a rough bead. The problem is the stickout is:",
        "choices": [
          "Too short — it should be 2 inches",
          "Too long — self-shielded flux core wants about 3/4 inch, and too long makes the arc unstable",
          "Fine — stickout does not matter",
          "Too short — it should be 3 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two inches is far too long; the right stickout is about 3/4 inch, and too long preheats the wire and destabilizes the arc. (a) 2 inches is the problem, not the target. (c) Stickout matters a great deal in flux core. (d) 3 inches is even worse."
      },
      {
        "module": 8,
        "q": "AWS A2.4 governs:",
        "choices": [
          "Welding machines",
          "Welding symbols",
          "Electrode storage",
          "Safety rules"
        ],
        "answer": 1,
        "explanation": "Correct: (b). AWS A2.4 is the standard for welding symbols. (a) Machines are not A2.4. (c) Electrode storage is a manufacturer matter. (d) Safety rules are OSHA's domain."
      },
      {
        "module": 9,
        "q": "High-carbon steel is difficult to weld because:",
        "choices": [
          "It is too soft",
          "It cracks easily and needs preheat and special procedures",
          "It is too light",
          "It has no carbon"
        ],
        "answer": 1,
        "explanation": "Correct: (b). High carbon means high cracking risk without preheat and controlled cooling. (a) It is hard, not soft. (c) Weight is not the issue. (d) It has the most carbon."
      },
      {
        "module": 10,
        "q": "A lap joint is:",
        "choices": [
          "Two pieces edge to edge",
          "Two pieces overlapped, one on top of the other",
          "One piece to the face of another",
          "Two pieces at a corner"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A lap joint overlaps the pieces. (a) That is a butt joint. (c) That is a tee joint. (d) That is a corner joint."
      },
      {
        "module": 11,
        "q": "An arc strike on the base metal is a defect risk because:",
        "choices": [
          "It is ugly",
          "It leaves a hard, brittle spot that can crack",
          "It wastes electrodes",
          "It is a weld"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An arc strike hardens a small spot that can start a crack. (a) Appearance is secondary. (c) Electrode waste is not the issue. (d) It is damage, not a weld."
      },
      {
        "module": 12,
        "q": "A welder qualified in the flat position who is asked to weld overhead must:",
        "choices": [
          "Weld anyway — qualification covers all positions",
          "Qualify in the overhead position first",
          "Use a bigger electrode",
          "Weld faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each position is its own qualification. (a) Positions do not transfer. (c) Electrode size does not confer qualification. (d) Speed does not confer qualification."
      },
      {
        "module": 5,
        "q": "Undercut is caused by:",
        "choices": [
          "Too slow a travel speed",
          "Too much amperage or too long an arc",
          "Dirty metal",
          "Damp rods"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Undercut is a groove at the toe from too much heat or too long an arc. (a) Slow travel causes overlap. (c) Dirty metal causes porosity. (d) Damp rods cause porosity and hydrogen cracking."
      },
      {
        "module": 7,
        "q": "FCAW-G is also known as:",
        "choices": [
          "Gasless flux core",
          "Dual Shield",
          "Stick welding",
          "TIG"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FCAW-G is gas-shielded flux core, trade-named Dual Shield. (a) Gasless is FCAW-S. (c) Stick is SMAW. (d) TIG is GTAW."
      },
      {
        "module": 8,
        "q": "A flag on a welding symbol's reference line means:",
        "choices": [
          "Weld all around",
          "A field weld — welded on site",
          "A shop weld",
          "A groove weld"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A flag means the weld is made in the field. (a) Weld all around is a circle. (c) A shop weld has no flag. (d) A groove is shown by its groove symbol."
      },
      {
        "module": 9,
        "q": "A steel frame is welded on one side only and comes out bowed a quarter inch. The sequencing fix for the next frame is to:",
        "choices": [
          "Weld one side fully, then the other, faster",
          "Balance the welds — alternate sides and backstep in short segments, with clamps holding the joint",
          "Use a bigger electrode on one side",
          "Cool the frame with water between passes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Balanced welding on alternate sides, backstepping, and clamps control the shrinkage that causes distortion. (a) Welding one side fully is what bowed it. (c) A bigger electrode does not balance shrinkage. (d) Water cooling can crack the weld and does not balance the sequence."
      },
      {
        "module": 10,
        "q": "Fit-up must be corrected before welding because:",
        "choices": [
          "Welding is slow",
          "A bad fit-up cannot be welded into a good joint — filling gaps makes a weak, distorted joint",
          "The inspector likes it",
          "The WPS requires paint"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Filling a bad fit-up with weld metal makes a weak, distorted joint. (a) Speed is not the reason. (c) The inspector checks it, but the reason is joint quality. (d) Paint is not in the WPS."
      }
    ]
  }
};
