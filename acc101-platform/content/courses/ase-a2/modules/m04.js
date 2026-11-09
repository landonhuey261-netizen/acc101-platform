// ase-a2 - Module 4: Clutches & Bands
module.exports = {
  "number": 4,
  "slug": "clutches-and-bands",
  "title": "Clutches & Bands",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain how a multi-plate clutch pack locks two parts together when pressure is applied.",
    "Explain how a band holds a drum still and when a band is used instead of a clutch.",
    "Describe the parts of a clutch pack: friction plates, steel plates, piston, return springs.",
    "Explain clutch slip, what causes it, and how it shows up on a road test.",
    "Describe how a servo applies a band and how band adjustment works."
  ],
  "sections": [
    {
      "heading": "The Multi-Plate Clutch Pack",
      "html": "<p>A clutch pack is a stack of alternating plates inside a drum. Friction plates have a rough lining and are splined to one part; steel plates are smooth and splined to the other. With no pressure, the plates float with a small clearance and the two parts turn independently. When hydraulic pressure fills the piston chamber, the piston squeezes the whole stack together, friction locks the plates, and the two parts turn as one.</p><p>Release the pressure and return springs push the piston back, the plates separate, and the parts are free again. The beauty of the design is its capacity: more plates mean more friction surface, so a pack can hold a large amount of torque in a small space. The price is heat \u2014 every engagement slips briefly as the plates come together, and that slip makes heat the fluid must carry away.</p>"
    },
    {
      "heading": "What the Plates Are Made Of",
      "html": "<p>Friction plates carry a lining bonded to a steel core. The lining material is chosen for a steady friction level across temperature and for a smooth engagement \u2014 a lining that grabs too suddenly makes harsh shifts, while one that is too slippery never fully locks. Steel plates are flat, smooth reaction plates; they must stay flat, because a warped steel plate drags even when the clutch is released and causes overheating.</p><p>Wear shows in the fluid first. As linings wear, tiny particles darken the fluid and collect in the pan and filter. A clutch that has slipped for a long time burns its linings, and the fluid smells burnt and turns dark brown or black. That is why a fluid and pan inspection is part of every transmission diagnosis: the pan tells the story of the clutches.</p>"
    },
    {
      "heading": "Bands: A Strap That Holds a Drum",
      "html": "<p>A band is a flexible steel strap lined with friction material, wrapped around the outside of a drum. A servo \u2014 a hydraulic piston \u2014 pulls one end of the band tight, and the strap grips the drum and stops it turning. Release the servo and a spring lets the band relax, freeing the drum. Bands are often used where a drum must be held against rotation, such as the reverse drum or an intermediate drum in some designs.</p><p>Bands differ from clutches in one useful way: a band can hold a drum that is already spinning by wrapping tighter as it grips, a self-energizing effect. But bands wear on a narrow strip, and the lining is thin, so many designs use a clutch pack instead where space allows. When a band is used, its adjustment matters: too loose and it slips, too tight and it drags and overheats.</p>"
    },
    {
      "heading": "Servos and Band Adjustment",
      "html": "<p>The servo is the band's muscle. Line pressure pushes its piston, and the piston's pin pulls the band end. Some servos have two pistons \u2014 one to apply and one to release \u2014 so the band can be released quickly for a clean shift. The servo's size sets how hard the band grips: a bigger piston area means more holding force from the same line pressure.</p><p>Many bands are adjustable. The adjustment sets the clearance between the band and the drum, usually by turning an adjusting screw to a set position and then backing it off a stated number of turns. The exact procedure belongs to the service information for that transmission \u2014 this course never invents the number \u2014 but the principle is universal: correct clearance gives a firm apply with a clean release, and wrong clearance gives slip or drag.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> A clutch pack locks two parts with squeezed friction plates; a band stops a drum by wrapping it. Pressure applies, springs release. Wear shows in the fluid. Bands need correct adjustment; servos supply the force.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Calling every slipping transmission a 'worn clutch' without checking pressure first. A healthy clutch pack cannot hold if line pressure is low \u2014 the clutch is the victim, not the cause.</div><div class=\"callout\"><strong>Common mistake:</strong> Adjusting a band by feel. Band clearance is a set procedure with a stated number of turns \u2014 guessing it guarantees slip or drag.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Clutch pack",
      "def": "A stack of alternating friction and steel plates that locks two parts together under hydraulic pressure."
    },
    {
      "term": "Friction plate",
      "def": "A plate with a friction lining, splined to one member of the clutch."
    },
    {
      "term": "Steel plate",
      "def": "A smooth flat plate in a clutch pack, splined to the other member; the friction plates grip it."
    },
    {
      "term": "Piston",
      "def": "The hydraulic piston that squeezes a clutch pack together when pressure fills its chamber."
    },
    {
      "term": "Return spring",
      "def": "The spring that pushes a clutch piston back and releases the pack when pressure drops."
    },
    {
      "term": "Band",
      "def": "A friction-lined steel strap that wraps a drum and holds it still when its servo tightens it."
    },
    {
      "term": "Drum",
      "def": "The cylindrical part a band wraps around, or the housing that holds a clutch pack."
    },
    {
      "term": "Servo",
      "def": "The hydraulic piston assembly that applies a band."
    },
    {
      "term": "Slip",
      "def": "A clutch or band failing to hold fully, so the two parts turn at different speeds under load."
    },
    {
      "term": "Clearance",
      "def": "The small gap between plates (or band and drum) when released; too much causes delayed engagement, too little causes drag."
    },
    {
      "term": "Self-energizing",
      "def": "A band effect where the drum's rotation helps pull the band tighter, increasing holding force."
    },
    {
      "term": "Burnt fluid",
      "def": "Dark, burnt-smelling ATF \u2014 a sign that clutches or bands have slipped and overheated."
    },
    {
      "term": "Apply",
      "def": "The act of engaging a clutch or band with hydraulic pressure."
    },
    {
      "term": "Release",
      "def": "The act of letting a clutch or band go when pressure is removed."
    }
  ],
  "video": {
    "title": "How Clutch Plates Work in Automatic Transmissions",
    "embedUrl": "https://www.youtube.com/embed/W0IrAQJ93pA",
    "note": "A look at clutch plates in an automatic transmission and how they transfer torque. Compare the plates you see with the friction and steel plates in this module, and note what happens when they slip.",
    "more": [
      {
        "title": "How a Transmission Clutch Pack Works",
        "url": "https://www.youtube.com/watch?v=TTIp7saexZQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain what happens inside a clutch pack, step by step, from pressure arriving to the two parts turning as one.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pressure fills the piston chamber. Step 2: The piston moves and squeezes friction plates against steel plates. Step 3: Friction locks the plates, so the two splined members turn together.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Why does a clutch pack use many thin plates instead of one big plate?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each plate pair adds friction surface. Step 2: Many pairs give a large holding capacity in a small space, with smooth engagement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A band and a clutch pack both hold parts still. Give one situation where a band is the natural choice.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Holding a drum still from the outside. Step 2: A band wraps the drum's outer surface and grips it, which is simpler than building a clutch pack around that drum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What does burnt-smelling, dark fluid tell you about the clutches, and what should you check next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It tells you clutches or bands have slipped and overheated, shedding lining material. Step 2: Check the pan for debris, check line pressure, and road-test to find which gear slips \u2014 the clutch may be the victim of low pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the job of the return springs in a clutch pack.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: When pressure is released, the springs push the piston back. Step 2: The plates separate with clearance, so the two parts turn freely and the clutch does not drag.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Band adjustment sets clearance. What happens if the clearance is too large, and what happens if it is too small?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Too large \u2014 the band applies late or slips because the servo travel is used up taking up the gap. Step 2: Too small \u2014 the band drags when it should be released, making heat and wear.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A clutch pack locks two parts together when:",
      "choices": [
        "The plates are separated by springs",
        "Hydraulic pressure squeezes friction plates against steel plates",
        "The band wraps the drum",
        "The pump stops"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pressure squeezes the stack and friction locks it. (a) Separation is the released state. (c) That describes a band, not a clutch pack. (d) No pressure means no apply."
    },
    {
      "q": "Friction plates are splined to one part and steel plates to the other so that:",
      "choices": [
        "They can spin at different speeds when released and lock together when squeezed",
        "They never touch",
        "The pump can drive them",
        "The fluid stays clean"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Splines let each plate turn with its own member until pressure locks the stack. (b) They must touch to create friction. (c) The pump does not drive the plates. (d) Contact wears linings, which is why fluid condition matters."
    },
    {
      "q": "Burnt, dark ATF most often means:",
      "choices": [
        "The fluid is new",
        "Clutches or bands have slipped and overheated",
        "The cooler is working too well",
        "The filter is new"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slipping friction makes heat and sheds lining into the fluid. (a) New fluid is red and clean. (c) A working cooler prevents overheating. (d) A new filter does not burn fluid."
    },
    {
      "q": "A band holds a drum by:",
      "choices": [
        "Squeezing plates together",
        "Wrapping around the drum and gripping it when the servo tightens it",
        "Locking two gearset members",
        "Blocking the pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The band is a strap that grips the drum's outside. (a) That is a clutch pack. (c) That is direct drive in a gearset. (d) The pump is never blocked."
    },
    {
      "q": "Return springs in a clutch pack:",
      "choices": [
        "Apply the clutch",
        "Push the piston back and release the clutch when pressure drops",
        "Drive the pump",
        "Hold the drum"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Springs release the pack. (a) Pressure applies it. (c) The converter hub drives the pump. (d) A band holds a drum."
    },
    {
      "q": "If band clearance is too large, the band will:",
      "choices": [
        "Apply too early",
        "Apply late or slip",
        "Never release",
        "Overheat the cooler"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Excess clearance eats servo travel and delays or weakens the apply. (a) Too little clearance causes drag. (c) Too little clearance causes drag, not late apply. (d) The cooler is not part of the band circuit."
    },
    {
      "q": "A servo's job is to:",
      "choices": [
        "Filter the fluid",
        "Apply a band with hydraulic force",
        "Drive the output shaft",
        "Shift the valve body"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The servo piston pulls the band tight. (a) The filter does that. (c) The gearsets drive the output shaft. (d) The manual valve and solenoids direct the valve body."
    },
    {
      "q": "A slipping clutch under load with normal line pressure most likely points to:",
      "choices": [
        "A worn or burnt clutch pack",
        "A broken speed sensor",
        "A loose battery cable",
        "A clogged air filter"
      ],
      "answer": 0,
      "explanation": "Correct: (a). With good pressure, slip means the friction material itself can no longer hold. (b) A sensor fault causes wrong shift timing, not slip. (c) That affects starting. (d) That affects engine power, not clutch holding."
    }
  ],
  "studyGuide": "\n<h3>Module 4 \u2014 Clutches & Bands: Quick Reference</h3>\n<p><strong>Core idea:</strong> Pressure squeezes clutch plates together; a servo tightens a band around a drum. Springs release both.</p>\n<p><strong>Clutch pack:</strong> Friction plates + steel plates + piston + return springs. More plates = more holding power.</p>\n<p><strong>Band:</strong> Strap around a drum, applied by a servo, needs correct clearance adjustment.</p>\n<p><strong>Diagnosis:</strong> Burnt fluid = slipping friction. Check pressure before condemning the clutch \u2014 low pressure makes a good clutch slip.</p>\n<p><strong>Watch out:</strong> Band adjustment is a stated procedure, never a guess.</p>\n<p><strong>Self-check:</strong> Trace a shift from pressure arriving to plates locking, then to springs releasing. If you can follow the whole cycle, you have this module.</p>\n"
};
