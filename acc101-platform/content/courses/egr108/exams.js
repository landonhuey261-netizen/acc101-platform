// egr108 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "Which family is light, cheap, and easy to shape, but weaker than metal?",
        "choices": [
          "Metals",
          "Polymers",
          "Ceramics",
          "Semiconductors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Polymers are light and cheap but weaker. (a) metals are strong and stiff. (c) ceramics are hard and brittle. (d) semiconductors are for electronics, not a structural family."
      },
      {
        "module": 1,
        "q": "Steel is about how many times stiffer than aluminium?",
        "choices": [
          "The same",
          "Three times",
          "Ten times",
          "Half"
        ],
        "answer": 1,
        "explanation": "Correct: (b). E is about 200 GPa against 70 GPa. (a) ignores the modulus difference. (c) overstates it. (d) has it backwards."
      },
      {
        "module": 1,
        "q": "A material's properties come from its:",
        "choices": [
          "Colour",
          "Structure at every scale",
          "Price",
          "Brand"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Structure decides properties. (a) colour is cosmetic. (c) price follows properties, not the other way round. (d) brand is marketing."
      },
      {
        "module": 1,
        "q": "Toughness means a material:",
        "choices": [
          "Is hard to scratch",
          "Absorbs energy before breaking",
          "Is heavy",
          "Conducts heat well"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Toughness is energy absorbed before fracture. (a) is hardness. (c) is density. (d) is thermal conductivity."
      },
      {
        "module": 2,
        "q": "Which bond lets metal atoms slide past each other so metal bends?",
        "choices": [
          "Ionic bond",
          "Metallic bond (shared electron sea)",
          "Covalent bond only",
          "No bond"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The electron sea lets atoms slide. (a) ionic bonds lock atoms in place. (c) covalent bonds are rigid. (d) without bonds there is no solid."
      },
      {
        "module": 2,
        "q": "Smaller grains in a metal usually give:",
        "choices": [
          "Lower strength",
          "Higher strength",
          "Lower melting point",
          "More rust"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Grain boundaries block dislocations. (a) is backwards. (c) melting point is set by bonds. (d) rust is chemistry."
      },
      {
        "module": 2,
        "q": "Austenite is:",
        "choices": [
          "Soft iron at room temperature",
          "Iron at high temperature that dissolves more carbon",
          "Iron carbide",
          "Layers of ferrite and cementite"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Austenite is the high-temperature phase. (a) is ferrite. (c) is cementite. (d) is pearlite."
      },
      {
        "module": 2,
        "q": "Why is an alloy usually stronger than a pure metal?",
        "choices": [
          "It is heavier",
          "Added atoms block dislocations",
          "It melts lower",
          "It is shinier"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Different-sized atoms resist deformation. (a) weight is not the cause. (c) melting point is unrelated. (d) appearance is irrelevant."
      },
      {
        "module": 3,
        "q": "A pull of 15,000 N on a bar of 75 mm² gives a stress of:",
        "choices": [
          "200 MPa",
          "1,125 MPa",
          "20 MPa",
          "2,000 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 15,000 ÷ 75 = 200 MPa. (b) multiplies. (c) divides by 750. (d) divides by 7.5."
      },
      {
        "module": 3,
        "q": "A 150 mm bar stretches 0.3 mm. Its strain is:",
        "choices": [
          "0.002",
          "0.02",
          "0.2",
          "45"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.3 ÷ 150 = 0.002. (b) is ten times too big. (c) is a hundred times too big. (d) multiplies length by stretch."
      },
      {
        "module": 3,
        "q": "A specimen shows 100 MPa at a strain of 0.0005. Its Young's modulus is:",
        "choices": [
          "50 GPa",
          "200 GPa",
          "500 GPa",
          "0.05 GPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 100 ÷ 0.0005 = 200,000 MPa = 200 GPa. (a) halves it. (c) multiplies by 5. (d) is a thousand times too small."
      },
      {
        "module": 3,
        "q": "A part fails at 30 kN and carries 6 kN. Its factor of safety is:",
        "choices": [
          "0.2",
          "5",
          "36",
          "180"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 ÷ 6 = 5. (a) divides the wrong way. (c) adds. (d) multiplies."
      },
      {
        "module": 4,
        "q": "High-carbon steel compared with mild steel is:",
        "choices": [
          "Softer and easier to weld",
          "Harder and more brittle",
          "Lighter",
          "Rust-proof"
        ],
        "answer": 1,
        "explanation": "Correct: (b). More carbon means harder and more brittle. (a) is backwards. (c) density is similar. (d) rust-proofing needs chromium."
      },
      {
        "module": 4,
        "q": "Which stainless grade resists salt water best?",
        "choices": [
          "304",
          "316",
          "1020",
          "4140"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 316 has molybdenum for salt resistance. (a) 304 is the general grade. (c) and (d) are carbon and alloy steels, not stainless."
      },
      {
        "module": 4,
        "q": "In AISI 4140, the '40' means:",
        "choices": [
          "40% chromium",
          "About 0.40% carbon",
          "40 mm size",
          "40% iron"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The last two digits are carbon in hundredths of a percent. (a) chromium is coded by the first digits. (c) size is not in the grade. (d) iron is the balance, not 40%."
      },
      {
        "module": 4,
        "q": "Grey cast iron is a good machine-bed material because it:",
        "choices": [
          "Is strong in tension",
          "Damps vibration and is cheap to cast",
          "Is light",
          "Welds easily"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Grey iron damps vibration and casts cheaply. (a) it is weak in tension. (c) it is heavy. (d) it is hard to weld."
      },
      {
        "module": 5,
        "q": "Annealing means heating steel and cooling it:",
        "choices": [
          "In water",
          "In oil",
          "Very slowly in the furnace",
          "In liquid nitrogen"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Slow furnace cooling softens steel. (a) and (b) are quenching. (d) is not an annealing medium."
      },
      {
        "module": 5,
        "q": "Quenching makes steel hard by forming:",
        "choices": [
          "Ferrite",
          "Pearlite",
          "Martensite",
          "Austenite"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Fast cooling forms martensite. (a) is the soft phase. (b) comes from slow cooling. (d) is the phase before quenching."
      },
      {
        "module": 5,
        "q": "Tempering is done to:",
        "choices": [
          "Make steel harder",
          "Restore toughness after quenching",
          "Soften steel for machining",
          "Remove carbon"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tempering trades a little hardness for toughness. (a) tempering reduces hardness. (c) is annealing. (d) carbon stays in the steel."
      },
      {
        "module": 5,
        "q": "A spring needs HRC 40–52. Which tempering range?",
        "choices": [
          "150–200 °C",
          "350–450 °C",
          "550–650 °C",
          "900 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Medium tempering gives HRC 40–52. (a) gives HRC 58–64 for cutting tools. (c) gives HRC 28–40 for gears. (d) is a hardening temperature, not tempering."
      },
      {
        "module": 6,
        "q": "Which plastic is a thermoset?",
        "choices": [
          "Polyethylene",
          "Polypropylene",
          "Epoxy",
          "PET"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Epoxy is cross-linked and does not melt. (a), (b), and (d) are thermoplastics that melt."
      },
      {
        "module": 6,
        "q": "Nylon is a good gear material because it is:",
        "choices": [
          "Clear and cheap",
          "Strong, wear-resistant, and a little slippery",
          "The lightest plastic",
          "Heat-proof to 300 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Those are nylon's gear properties. (a) describes PET. (c) is not nylon's claim. (d) nylon softens well below 300 °C."
      },
      {
        "module": 6,
        "q": "Creep in a plastic is:",
        "choices": [
          "Melting",
          "Slow stretch under a steady load",
          "Cracking in sunlight",
          "Dissolving in water"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Creep is continuing deformation under load. (a) needs heat. (c) is UV degradation. (d) is chemical attack."
      },
      {
        "module": 6,
        "q": "Which plastic is used for water pipes?",
        "choices": [
          "Nylon",
          "PET",
          "PE or PVC",
          "Rubber"
        ],
        "answer": 2,
        "explanation": "Correct: (c). PE and PVC are chemical-resistant and cheap for pipes. (a) nylon is for gears. (b) PET is for bottles. (d) rubber is for seals."
      },
      {
        "module": 6,
        "q": "Which plastic is used for food containers and car bumpers?",
        "choices": [
          "PET",
          "Polypropylene (PP)",
          "Nylon",
          "Epoxy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PP is stiff, heat-resistant, and used for containers and bumpers. (a) PET is for bottles. (c) nylon is for gears. (d) epoxy is a thermoset adhesive."
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
        "q": "Which family combines two materials to get the best of both?",
        "choices": [
          "Metals",
          "Polymers",
          "Ceramics",
          "Composites"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Composites combine families, like fibres in resin. (a), (b), and (c) are single families."
      },
      {
        "module": 1,
        "q": "Density of aluminium is about 2,700 kg/m³ and steel is 7,850 kg/m³. An aluminium part of the same volume weighs about:",
        "choices": [
          "The same as steel",
          "Three times steel",
          "One-third of steel",
          "Ten times steel"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 2,700 ÷ 7,850 ≈ 0.34. (a) ignores density. (b) is backwards. (d) is far too large."
      },
      {
        "module": 1,
        "q": "Stiffness is measured by:",
        "choices": [
          "Yield strength",
          "Young's modulus",
          "Density",
          "Hardness"
        ],
        "answer": 1,
        "explanation": "Correct: (b). E measures resistance to bending. (a) is strength. (c) is mass per volume. (d) is resistance to scratching."
      },
      {
        "module": 2,
        "q": "Work hardening happens when:",
        "choices": [
          "Metal is heated",
          "Dislocations tangle up during deformation",
          "Grains melt",
          "Metal rusts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tangled dislocations resist further bending. (a) heating softens metal. (c) grains do not melt in bending. (d) rust is corrosion."
      },
      {
        "module": 2,
        "q": "Pearlite forms when austenite cools:",
        "choices": [
          "Very fast",
          "Slowly",
          "In water",
          "Not at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Slow cooling gives pearlite layers. (a) fast cooling gives martensite. (c) water quenching gives martensite. (d) it forms on cooling."
      },
      {
        "module": 2,
        "q": "Cementite is:",
        "choices": [
          "Soft iron",
          "Iron carbide, hard and brittle",
          "A polymer",
          "A gas"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cementite is Fe₃C. (a) is ferrite. (c) and (d) are not steel phases."
      },
      {
        "module": 3,
        "q": "A bar of 200 mm² carries 40,000 N. The stress is:",
        "choices": [
          "200 MPa",
          "20 MPa",
          "2,000 MPa",
          "8,000 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 40,000 ÷ 200 = 200 MPa. (b) divides by 2,000. (c) divides by 20. (d) multiplies."
      },
      {
        "module": 3,
        "q": "A steel bar (E = 200 GPa) at a stress of 100 MPa has a strain of:",
        "choices": [
          "0.0005",
          "0.005",
          "0.05",
          "2"
        ],
        "answer": 0,
        "explanation": "Correct: (a). ε = 100 ÷ 200,000 = 0.0005. (b) is ten times too big. (c) is a hundred times too big. (d) divides 200 by 100."
      },
      {
        "module": 3,
        "q": "A ductile material fails with:",
        "choices": [
          "No warning",
          "Large stretch and necking",
          "A flat, shiny break",
          "No stretch at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ductile failure stretches and necks first. (a) and (d) describe brittle failure. (c) is a brittle fracture surface."
      },
      {
        "module": 4,
        "q": "Copper is chosen for busbars because it:",
        "choices": [
          "Is the cheapest metal",
          "Conducts electricity very well",
          "Is the strongest metal",
          "Does not expand"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Copper is an excellent conductor. (a) copper is expensive. (c) steel is stronger. (d) copper does expand with heat."
      },
      {
        "module": 4,
        "q": "Brass is:",
        "choices": [
          "Copper and tin",
          "Copper and zinc",
          "Iron and carbon",
          "Aluminium and magnesium"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Brass is copper plus zinc. (a) is bronze. (c) is steel. (d) is a magnesium alloy family."
      },
      {
        "module": 4,
        "q": "A 0.2% carbon steel is best described as:",
        "choices": [
          "High-carbon",
          "Medium-carbon",
          "Mild (low-carbon)",
          "Cast iron"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 0.2% is low-carbon mild steel. (a) is 0.6–1%. (b) is 0.3–0.6%. (d) is 2–4% carbon."
      },
      {
        "module": 5,
        "q": "After forging, a steel billet is heated and then left to cool in still air on a rack. Which treatment is this?",
        "choices": ["Annealing", "Normalising", "Quenching", "Tempering"],
        "answer": 1,
        "explanation": "Correct: (b). Cooling in still air after heating is normalising. (a) annealing cools very slowly in the furnace. (c) quenching cools fast in water or oil. (d) tempering reheats quenched steel to a lower temperature.",
      },
      {
        "module": 5,
        "q": "A gear tempered at 600 °C will have a hardness of about:",
        "choices": [
          "HRC 60",
          "HRC 45",
          "HRC 35",
          "HRC 70"
        ],
        "answer": 2,
        "explanation": "Correct: (c). High tempering (550–650 °C) gives HRC 28–40. (a) is a low-temper value. (b) is a medium-temper value. (d) is above any tempered steel."
      },
      {
        "module": 5,
        "q": "The riskiest quench medium for cracking is:",
        "choices": [
          "Oil",
          "Polymer",
          "Water",
          "Air"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Water cools fastest and cracks most. (a) oil is gentler. (b) polymer is between water and oil. (d) air is the slowest."
      },
      {
        "module": 6,
        "q": "PET is used for drinks bottles because it is:",
        "choices": [
          "The cheapest plastic",
          "Clear and strong",
          "Rubbery",
          "Heat-proof"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PET is clear and strong. (a) PE is cheaper. (c) describes an elastomer. (d) PET softens well below 200 °C."
      },
      {
        "module": 6,
        "q": "A thermoplastic can be recycled because it:",
        "choices": [
          "Burns cleanly",
          "Melts and can be remoulded",
          "Dissolves in water",
          "Is cross-linked"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Melting allows reshaping. (a) burning is disposal, not recycling. (c) plastics do not dissolve in water. (d) cross-linking prevents melting."
      },
      {
        "module": 6,
        "q": "UV degradation makes plastics:",
        "choices": [
          "Stronger",
          "Brittle",
          "Heavier",
          "Softer and tougher"
        ],
        "answer": 1,
        "explanation": "Correct: (b). UV breaks chains and embrittles the surface. (a) is the opposite. (c) weight is unchanged. (d) is the opposite of embrittlement."
      },
      {
        "module": 7,
        "q": "In a composite, the matrix:",
        "choices": [
          "Carries most of the load",
          "Holds the fibres and spreads the load",
          "Is always metal",
          "Makes the part heavy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The matrix binds and transfers load. (a) is the fibres' job. (c) matrices are usually resins. (d) composites are light."
      },
      {
        "module": 7,
        "q": "Ceramics are a poor choice where:",
        "choices": [
          "Heat resistance matters",
          "The part may be knocked or bent",
          "Wear resistance matters",
          "The load is steady compression"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ceramics shatter on impact or bending. (a), (c), and (d) are ceramic strengths."
      },
      {
        "module": 7,
        "q": "Carbon fibre's main advantage is:",
        "choices": [
          "Low cost",
          "High stiffness and low weight",
          "Easy repair",
          "Best impact resistance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Carbon is stiff and light. (a) it is expensive. (c) it is hard to repair. (d) aramid beats it for impact."
      },
      {
        "module": 8,
        "q": "A 60 mm bar at 100 m/min cutting speed needs a spindle speed of about:",
        "choices": [
          "531 rpm",
          "1,061 rpm",
          "60 rpm",
          "100 rpm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). N = 100,000 ÷ (π × 60) = 531 rpm. (b) is the value for a 30 mm bar. (c) is the diameter. (d) is the cutting speed."
      },
      {
        "module": 8,
        "q": "Which operation makes flat faces and slots?",
        "choices": [
          "Turning",
          "Milling",
          "Drilling",
          "Reaming"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Milling cuts flat and shaped surfaces. (a) makes round parts. (c) makes holes. (d) finishes holes."
      },
      {
        "module": 8,
        "q": "Carbide tools are:",
        "choices": [
          "Softer than high-speed steel",
          "Harder and faster, but brittle",
          "Only for wood",
          "Cheaper than high-speed steel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Carbide cuts faster but chips if shocked. (a) is backwards. (c) carbide is for metal. (d) carbide costs more."
      },
      {
        "module": 9,
        "q": "G-code G01 means:",
        "choices": [
          "Rapid move",
          "Straight move at a set feed",
          "Stop the spindle",
          "Change tool"
        ],
        "answer": 1,
        "explanation": "Correct: (b). G01 is a controlled straight move. (a) is G00. (c) is an M-code. (d) is a tool change."
      },
      {
        "module": 9,
        "q": "CNC is the best choice for:",
        "choices": [
          "One simple bracket",
          "200 identical complex parts",
          "A part that must be made by hand",
          "A wooden fence"
        ],
        "answer": 1,
        "explanation": "Correct: (b). CNC wins on repeatability at volume. (a) manual is faster for one simple part. (c) CNC is not hand work. (d) a router could cut it, but a fence is not a CNC job."
      },
      {
        "module": 9,
        "q": "Before cutting metal with a new CNC program you must:",
        "choices": [
          "Run it at full speed",
          "Prove it out carefully",
          "Skip the simulation",
          "Remove the guards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Prove-out catches wrong numbers before they crash the tool. (a) is dangerous. (c) simulation is part of prove-out. (d) guards must stay on."
      },
      {
        "module": 10,
        "q": "SLS printing fuses:",
        "choices": [
          "Filament",
          "Resin with light",
          "Powder with a laser",
          "Sheet metal"
        ],
        "answer": 2,
        "explanation": "Correct: (c). SLS fuses powder. (a) is FDM. (b) is SLA. (d) is not printing."
      },
      {
        "module": 10,
        "q": "A printed part is weakest:",
        "choices": [
          "Along the layers",
          "Across the layer lines",
          "At the top",
          "In the middle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Layers can split across the lines. (a) is the strong direction. (c) and (d) are not the weak direction."
      },
      {
        "module": 10,
        "q": "For one complex prototype, the best process is usually:",
        "choices": [
          "Injection moulding",
          "3D printing",
          "Forging",
          "Casting a mould"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Printing needs no tooling and is fast. (a) moulding needs an expensive mould. (c) forging needs dies. (d) casting needs a pattern and mould."
      },
      {
        "module": 11,
        "q": "MIG welding is best for:",
        "choices": [
          "Neat aluminium welds",
          "Fast steel fabrication",
          "Portable outdoor work with no gas",
          "Electronics"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MIG is fast for steel. (a) TIG suits aluminium. (c) stick suits outdoor work. (d) soldering suits electronics."
      },
      {
        "module": 11,
        "q": "A bolted joint is loose and slips. The likely cause is:",
        "choices": [
          "The bolt is too strong",
          "Not enough clamping force (too little torque)",
          "The washer is too big",
          "The nut is too new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Low torque means low friction between the faces. (a) a strong bolt does not cause slip. (c) a big washer spreads load, it does not cause slip. (d) age is irrelevant."
      },
      {
        "module": 11,
        "q": "The most important welding eye protection is:",
        "choices": [
          "Sunglasses",
          "A welding helmet with the right shade",
          "Safety glasses alone",
          "Closing your eyes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Only a proper shade blocks the arc. (a) sunglasses are far too weak. (c) safety glasses do not block the arc's intensity. (d) closing your eyes does not protect them from the arc's radiation through the lids in any reliable way, and you cannot work blind."
      },
      {
        "module": 12,
        "q": "The first step in material selection is:",
        "choices": [
          "Choosing the cheapest",
          "Writing requirements with numbers",
          "Ordering a sample",
          "Asking for a discount"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Requirements decide the choice. (a) cheapest may fail. (c) samples come after screening. (d) price comes after the technical choice."
      },
      {
        "module": 12,
        "q": "For 10,000 identical plastic housings, the cheapest process is:",
        "choices": [
          "3D printing",
          "CNC machining",
          "Injection moulding",
          "Hand making"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Tooling cost spreads over many parts. (a) printing is slow per part. (b) machining each part is costly. (d) hand making is slowest."
      },
      {
        "module": 12,
        "q": "Aluminium recycling is valuable because recycled aluminium:",
        "choices": [
          "Is stronger than new aluminium",
          "Takes about 5% of the energy of making it from ore",
          "Is lighter",
          "Never corrodes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Remelting saves about 95% of the energy. (a) it has the same properties, not stronger. (c) weight is the same. (d) it still forms an oxide, which protects it — but that is not the recycling point."
      },
      {
        "module": 12,
        "q": "A steel bracket weighs 500 g and costs $2; an aluminium one weighs 250 g and costs $4. If weight matters most, the better choice is:",
        "choices": [
          "Steel",
          "Aluminium",
          "Either — they are equal",
          "Neither"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Aluminium is half the weight. (a) steel is heavier. (c) they differ in weight and cost. (d) both meet the job; aluminium wins on weight."
      },
      {
        "module": 2,
        "q": "The iron–carbon diagram's horizontal axis is:",
        "choices": [
          "Temperature",
          "Carbon content",
          "Time",
          "Hardness"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Carbon content is horizontal, temperature is vertical. (a) is the vertical axis. (c) and (d) are not diagram axes."
      },
      {
        "module": 5,
        "q": "Stress-relief annealing is done at about:",
        "choices": [
          "150 °C",
          "550–650 °C",
          "900 °C",
          "1,200 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 550–650 °C removes internal stresses. (a) is too low. (c) is a hardening temperature. (d) is above steel's melting range for most grades."
      },
      {
        "module": 6,
        "q": "A plastic part that must flex repeatedly, like a living hinge, is best made from:",
        "choices": [
          "PVC",
          "Polypropylene (PP)",
          "PET",
          "Epoxy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PP hinges flex repeatedly without breaking. (a) PVC is rigid or flexible but not a hinge material. (c) PET is for bottles. (d) epoxy is a rigid thermoset."
      }
    ]
  }
};
