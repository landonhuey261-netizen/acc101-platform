// egr290 — module 9. Original review content.
module.exports = {
  "number": 9,
  "slug": "mechanical-design-machine-elements",
  "title": "Mechanical Design: Machine Elements",
  "estTime": "3–4 hours",
  "objectives": [
    "Select fasteners and calculate bolt loads in tension and shear.",
    "Calculate gear ratios, speeds, and torques.",
    "Calculate belt and chain drive speeds.",
    "Estimate bearing life with the L10 rating.",
    "Apply the Goodman fatigue criterion and explain fits and tolerances."
  ],
  "sections": [
    {
      "heading": "Fasteners: Bolts in Tension and Shear",
      "html": "<p>A bolted joint carries load in tension (pulling the bolt longer) or shear (sliding across the bolt). A bolt in tension sees stress σ = F/A, where A is the tensile stress area of the thread — always use the stress area, not the nominal shank area, because the thread root is where it fails. A bolt in single shear carries the load on one cross-section; in double shear, on two, so it carries twice the load. <strong>Preload</strong> matters: a bolt tightened to a proper preload clamps the joint so the external load is shared, and the joint does not separate or slip. A bolt that is too loose fatigues; a bolt that is too tight yields. Torque is not tension — the same torque gives different preloads with different lubrication, so critical joints use tension control, not torque alone.</p><p><strong>Keys and pins:</strong> a key locks a hub to a shaft and fails in shear and in bearing (crushing). <strong>Welds:</strong> a fillet weld's throat is 0.707 times the leg size, and its strength is the throat area times the allowable shear stress. <strong>Rivets</strong> are the older answer to the same problem. On the FE, fastener questions are usually one-step: find the area, find the stress, compare with the allowable — and the trap is using the wrong area.</p>"
    },
    {
      "heading": "Gears, Belts, and Chains",
      "html": "<p><strong>Gears</strong> change speed and torque by the teeth ratio: a 20-tooth driver turning a 60-tooth gear gives a 3:1 reduction, so the output turns at one-third the input speed and (ignoring losses) three times the torque. A driver at 900 rpm gives 900/3 = 300 rpm at the output. The <strong>module</strong> (or diametral pitch) sets the tooth size — meshing gears must have the same module. Spur gears are simple and efficient; helical gears are quieter but push axially; bevel gears turn a corner; worm gears give a huge reduction in one stage but are inefficient.</p><p><strong>Belts and chains</strong> follow the same ratio rule with diameters instead of teeth: a 100 mm driver pulley at 1,200 rpm driving a 300 mm pulley gives 1,200 × 100/300 = 400 rpm. Belts slip a little and absorb shock; chains do not slip but need lubrication. <strong>Power</strong> through a rotating shaft is P = Tω = 2πNT/60. A shaft at 955 rpm carrying 100 N·m delivers P = 2π × 955 × 100/60 = 10,000 W = 10 kW. Check the units: N·m × rad/s = W.</p>"
    },
    {
      "heading": "Bearings and Shafts",
      "html": "<p><strong>Rolling-element bearings</strong> are rated by their <strong>basic dynamic load rating C</strong> and their <strong>L10 life</strong> — the life that 90% of a group of identical bearings will reach. For ball bearings, L10 = (C/P)³ million revolutions, where P is the equivalent load. A bearing with C = 10 kN carrying P = 5 kN has L10 = (10/5)³ = 8 million revolutions. Double the load and the life falls by a factor of eight — the cube is the point. At 1,000 rpm, 8 million revolutions is 8,000 minutes, or about 133 hours. Journal (plain) bearings, by contrast, ride on a film of oil and are rated by pressure and velocity (the PV value).</p><p><strong>Shafts</strong> carry torsion, bending, and sometimes axial load together. The design check combines them: the equivalent torque or the von Mises stress. A shaft's critical speed — the speed at which it resonates — must be avoided in service, with a margin on either side. <strong>Keys, splines, and couplings</strong> connect the shaft to the load; a coupling must handle misalignment, or the bearings pay for it.</p>"
    },
    {
      "heading": "Fatigue, Fits, and Tolerances",
      "html": "<p>Most machine parts fail by <strong>fatigue</strong>, not by a single overload: a crack grows a little with every cycle until the part breaks at a stress well below its ultimate strength. The <strong>endurance limit</strong> S_e is the stress below which steel can cycle forever (in theory). The <strong>Goodman criterion</strong> combines a steady (mean) stress σ_m and an alternating stress σ_a: σ_a/S_e + σ_m/S_ut = 1/n, where S_ut is the ultimate strength and n is the factor of safety. With σ_a = 100 MPa, S_e = 200 MPa, σ_m = 150 MPa, and S_ut = 600 MPa: 100/200 + 150/600 = 0.5 + 0.25 = 0.75, so n = 1/0.75 = 1.33.</p><p><strong>Fits and tolerances</strong> decide whether parts assemble and work. A <strong>clearance fit</strong> always leaves a gap (a shaft in a bearing); an <strong>interference fit</strong> always overlaps (a pressed-in bushing); a <strong>transition fit</strong> may do either. <strong>GD&T</strong> (geometric dimensioning and tolerancing) controls form, orientation, and position — flatness, perpendicularity, position — beyond simple size tolerances. A drawing that only tolerances size, and never position, will produce parts that fit the gauge and fail the assembly.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Bolts: use the tensile stress area, not the shank area. Double shear carries twice the load of single shear. Preload is the point of tightening.</li><li>Gears: speed ratio = teeth ratio (inverted). Belts/chains: speed ratio = diameter ratio (inverted). P = 2πNT/60.</li><li>Bearings: L10 = (C/P)³ million revolutions for ball bearings. Double the load, life falls eightfold.</li><li>Fatigue: Goodman σ_a/S_e + σ_m/S_ut = 1/n. Endurance limit is the stress steel can cycle forever.</li><li>Fits: clearance (gap), interference (overlap), transition (either). GD&T controls position, not just size.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using the shank area instead of the tensile stress area for a bolt. The thread root is where it fails.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the cube in bearing life. Doubling the load does not halve the life — it cuts it to one-eighth.</div><p><strong>Ready-to-Work link:</strong> If you can find a gear output speed, a bearing life, and a Goodman factor of safety, you have this module. Module 10 moves to instrumentation and control.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Tensile stress area",
      "def": "The effective area of a threaded bolt at the thread root; use it for bolt stress, not the shank area."
    },
    {
      "term": "Preload",
      "def": "The clamping force in a tightened bolt; it keeps the joint from separating or slipping."
    },
    {
      "term": "Gear ratio",
      "def": "The ratio of teeth (or speeds) between driver and driven gears; output speed = input speed / ratio."
    },
    {
      "term": "Module",
      "def": "The size of gear teeth; meshing gears must have the same module."
    },
    {
      "term": "L10 life",
      "def": "The bearing life that 90% of identical bearings reach: L10 = (C/P)³ million revolutions for ball bearings."
    },
    {
      "term": "Basic dynamic load rating (C)",
      "def": "The load a bearing can carry for one million revolutions of L10 life."
    },
    {
      "term": "Fatigue",
      "def": "Failure by repeated cycling at stresses below the ultimate strength."
    },
    {
      "term": "Endurance limit",
      "def": "The stress below which steel can cycle indefinitely without fatigue failure."
    },
    {
      "term": "Goodman criterion",
      "def": "σ_a/S_e + σ_m/S_ut = 1/n: combines alternating and mean stress into a factor of safety."
    },
    {
      "term": "Clearance fit",
      "def": "A fit that always leaves a gap between shaft and hole."
    },
    {
      "term": "Interference fit",
      "def": "A fit that always overlaps; the parts are pressed or shrunk together."
    },
    {
      "term": "GD&T",
      "def": "Geometric dimensioning and tolerancing: controls form, orientation, and position, not just size."
    }
  ],
  "video": {
    "title": "CSWA SOLIDWORKS PRACTICE PROBLEM 1.2 | 3D MODELLING TUTORIAL",
    "embedUrl": "https://www.youtube.com/embed/zl44asTq7gU",
    "note": "Modelling a real mechanical part from a drawing — the same skill the design checks in this module assume. Watch the feature order, then check it against the module's guidance.",
    "more": [
      {
        "title": "⚡ CSWP | SolidWorks tutorial | How to use SolidWorks | 18.12A",
        "url": "https://www.youtube.com/watch?v=y8jeljPthfE"
      },
      {
        "title": "⚡SolidWorks tutorial | 3D modeling | SolidWorks Practice | CSWP , 18.13",
        "url": "https://www.youtube.com/watch?v=0BHjJjwa7k0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 20-tooth gear driver at 900 rpm drives a 60-tooth gear. Find the output speed and the torque ratio (ignoring losses).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 60/20 = 3:1, so output speed = 900/3 = 300 rpm. Step 2: Torque is multiplied by the ratio, so output torque is 3 times the input torque.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 100 mm driver pulley at 1,200 rpm drives a 300 mm pulley. Find the output speed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Output speed = 1,200 × 100/300 = 400 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A ball bearing has C = 10 kN and carries P = 5 kN. Find its L10 life in millions of revolutions, and in hours at 1,000 rpm.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: L10 = (10/5)³ = 8 million revolutions. Step 2: At 1,000 rpm that is 8,000,000/1,000 = 8,000 minutes ≈ 133 hours.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A part sees σ_a = 100 MPa, S_e = 200 MPa, σ_m = 150 MPa, S_ut = 600 MPa. Find the Goodman factor of safety.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: σ_a/S_e + σ_m/S_ut = 100/200 + 150/600 = 0.5 + 0.25 = 0.75. Step 2: n = 1/0.75 = 1.33.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A shaft at 955 rpm carries 100 N·m of torque. Find the power transmitted.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = 2πNT/60 = 2π × 955 × 100/60 = 10,000 W = 10 kW.</p>"
    }
  ],
  "quiz": [
    {
      "module": 9,
      "q": "A 20-tooth gear at 900 rpm drives a 60-tooth gear. What is the output speed?",
      "choices": [
        "900 rpm",
        "600 rpm",
        "300 rpm",
        "1800 rpm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ratio 60/20 = 3, so 900/3 = 300 rpm. (a) is wrong: that is the input speed. (b) is wrong: that is 900 × 2/3. (d) is wrong: that multiplies by the ratio instead of dividing."
    },
    {
      "module": 9,
      "q": "A 100 mm pulley at 1,200 rpm drives a 300 mm pulley. What is the output speed?",
      "choices": [
        "1,200 rpm",
        "3,600 rpm",
        "400 rpm",
        "300 rpm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1,200 × 100/300 = 400 rpm. (a) is wrong: that is the input speed. (b) is wrong: that multiplies by the diameter ratio. (d) is wrong: that is the driven diameter, not a speed."
    },
    {
      "module": 9,
      "q": "A ball bearing has C = 10 kN and carries P = 5 kN. What is its L10 life?",
      "choices": [
        "2 million rev",
        "4 million rev",
        "8 million rev",
        "16 million rev"
      ],
      "answer": 2,
      "explanation": "Correct: (c). L10 = (10/5)³ = 8 million revolutions. (a) is wrong: that is C/P, forgetting the cube. (b) is wrong: that is (C/P)². (d) is wrong: that is (C/P)⁴."
    },
    {
      "module": 9,
      "q": "If the load on a ball bearing doubles, what happens to its L10 life?",
      "choices": [
        "It halves",
        "It falls to one-quarter",
        "It falls to one-eighth",
        "It stays the same"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Life goes as (C/P)³, so doubling P cuts life by 2³ = 8. (a) is wrong: that would be a linear law. (b) is wrong: that would be a square law. (d) is wrong: load strongly affects life."
    },
    {
      "module": 9,
      "q": "A part has σ_a = 100 MPa, S_e = 200 MPa, σ_m = 150 MPa, S_ut = 600 MPa. What is the Goodman factor of safety?",
      "choices": [
        "1.00",
        "1.33",
        "2.00",
        "0.75"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100/200 + 150/600 = 0.75, so n = 1/0.75 = 1.33. (a) is wrong: that would need the sum to equal 1. (c) is wrong: that is 1/0.5, ignoring the mean stress. (d) is wrong: that is the sum, not the factor of safety."
    },
    {
      "module": 9,
      "q": "A shaft at 955 rpm carries 100 N·m. What power does it transmit?",
      "choices": [
        "1 kW",
        "5 kW",
        "10 kW",
        "100 kW"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = 2π × 955 × 100/60 = 10,000 W = 10 kW. (a) is wrong: that is ten times too small. (b) is wrong: that is half. (d) is wrong: that is ten times too large."
    },
    {
      "module": 9,
      "q": "Which area should you use for the tensile stress in a bolt?",
      "choices": [
        "The shank area",
        "The tensile stress area at the thread root",
        "The head area",
        "The washer area"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bolts fail at the thread root, so the tensile stress area governs. (a) is wrong: the shank is larger than the thread root. (c) is wrong: the head does not carry the tensile load. (d) is wrong: the washer spreads load, it does not carry tension."
    },
    {
      "module": 9,
      "q": "Which fit always leaves a gap between shaft and hole?",
      "choices": [
        "Interference fit",
        "Transition fit",
        "Clearance fit",
        "Press fit"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A clearance fit always leaves a gap. (a) is wrong: an interference fit always overlaps. (b) is wrong: a transition fit may leave a gap or overlap. (d) is wrong: a press fit is an interference fit."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Mechanical Design: Quick Reference</h3>\n<p><strong>Core idea:</strong> Size the element for the load it really sees — thread-root area for bolts, the cube for bearings, and the alternating stress for fatigue.</p>\n<p><strong>Gears/belts:</strong> Output speed = input speed / ratio · ratio = teeth (or diameters) driven/driver · P = 2πNT/60.</p>\n<p><strong>Bearings:</strong> L10 = (C/P)³ million rev (ball bearings) · double the load, life falls eightfold.</p>\n<p><strong>Fatigue:</strong> Goodman σ_a/S_e + σ_m/S_ut = 1/n · endurance limit S_e is the infinite-life stress for steel.</p>\n<p><strong>Bolts:</strong> Use the tensile stress area · preload clamps the joint · torque is not tension.</p>\n<p><strong>Fits:</strong> Clearance (gap) · interference (overlap) · transition (either) · GD&T controls position, not just size.</p>\n<p><strong>Watch out:</strong> The cube in bearing life and the thread-root area in bolt stress are the two traps.</p>\n<p><strong>Self-check:</strong> Find a gear output speed, a bearing life, and a Goodman factor of safety without looking. If you can, you have this module.</p>\n"
};
