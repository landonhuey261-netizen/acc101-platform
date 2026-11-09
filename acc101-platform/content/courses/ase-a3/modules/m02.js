// ase-a3 - Module 2: Manual Transmissions
module.exports = {
  "number": 2,
  "slug": "manual-transmissions",
  "title": "Manual Transmissions",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain how a manual transmission gives different ratios with gears that are always meshed.",
    "Describe the parts: input shaft, countershaft, mainshaft, synchronizers, and shift forks.",
    "Explain how a synchronizer matches gear speeds so shifts are smooth.",
    "Describe the shift pattern and how the shift linkage moves the forks.",
    "Explain common manual transmission faults: grinding, popping out of gear, and hard shifting."
  ],
  "sections": [
    {
      "heading": "Gears That Never Leave Mesh",
      "html": "<p>A manual transmission is a box of gear pairs that are always meshed together. The input shaft carries the drive from the clutch; the countershaft (layshaft) carries a set of gears that mesh with gears on the mainshaft (output shaft). Each gear pair gives one ratio \u2014 first gear is a big reduction, top gear is near or past 1:1. The gears themselves never slide in and out of mesh; what changes is which gear pair is locked to the mainshaft.</p><p>Locking is done by sliding collars (sleeves) that move along the mainshaft and engage the dog teeth of the chosen gear, connecting that gear to the shaft. The shift lever, through the linkage and shift forks, slides the collar. In Neutral, no collar is engaged and no gear drives the mainshaft. In Reverse, an idler gear is slid into place to reverse the output direction.</p>"
    },
    {
      "heading": "Synchronizers: Matching Speeds",
      "html": "<p>If a collar simply jammed onto a gear spinning at a different speed, the shift would grind. The synchronizer prevents that. It is a small cone clutch on the gear: as the collar moves toward the gear, the synchronizer's cone presses against a matching cone on the gear and friction brings the gear and the collar to the same speed before the dog teeth engage. The driver feels this as a brief resistance that disappears as the speeds match.</p><p>That is why a healthy manual shifts smoothly and a worn one grinds. Worn synchronizer cones cannot match speeds, so the dog teeth clash. Double-clutching \u2014 releasing the clutch in Neutral to let the input shaft slow down \u2014 can help a worn synchronizer, but it is a workaround, not a repair. The synchronizer is the part that makes a modern manual pleasant to drive.</p>"
    },
    {
      "heading": "Shift Linkage and Patterns",
      "html": "<p>The shift lever's motion reaches the forks through rods or cables. Each fork slides one collar between two gears \u2014 typically first/second on one fork, third/fourth on another, fifth and Reverse on a third. The familiar H pattern is the lever's map of those forks: moving the lever left and right selects the fork, moving it forward and back slides the collar. A detent (spring-loaded ball) holds the lever in each gate so it cannot slip out of gear by itself.</p><p>Reverse has a lockout \u2014 a lift ring, a push-down, or a separate gate \u2014 so the driver cannot select it by accident while moving forward. The linkage must be adjusted so the lever's gates match the forks' positions exactly; a misadjusted linkage causes hard shifting or a gear that will not fully engage.</p>"
    },
    {
      "heading": "Grinding, Popping Out, and Hard Shifting",
      "html": "<p>Grinding on a shift usually means the synchronizer is worn or the clutch is dragging \u2014 the speeds were not matched. The test that separates them is simple: if it grinds in every gear, suspect the clutch; if it grinds in one gear only, suspect that gear's synchronizer. Popping out of gear means the collar is not staying engaged \u2014 worn dog teeth, a bent fork, or worn bearings letting the shaft move.</p><p>Hard shifting \u2014 a lever that is stiff or will not go into gear \u2014 can be a linkage fault, a bent fork, or a clutch that is not releasing fully. Noise in Neutral with the clutch out that disappears when the pedal is pressed points at the input shaft bearing; noise in one gear only points at that gear pair. Each symptom has an address, and the address is found by asking which gear, which condition, and whether the clutch is involved.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Manual gears stay meshed; sliding collars lock the chosen pair to the mainshaft. Synchronizers match speeds before the dog teeth engage. The H pattern is the lever's map of the shift forks. Grinding in one gear is a synchronizer; grinding in all gears is the clutch.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Forcing a grinding shift. Forcing it damages the dog teeth and the synchronizer \u2014 if it grinds, stop, check the clutch release, and find the cause.</div><div class=\"callout\"><strong>Common mistake:</strong> Resting a hand on the shift lever while driving. The weight loads the shift fork against the spinning collar and wears both.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Input shaft",
      "def": "The shaft driven by the clutch disc that carries power into the transmission."
    },
    {
      "term": "Countershaft",
      "def": "The shaft carrying the gears that mesh with the mainshaft gears; also called the layshaft."
    },
    {
      "term": "Mainshaft",
      "def": "The output shaft of the transmission; gears are locked to it one at a time by sliding collars."
    },
    {
      "term": "Sliding collar",
      "def": "The sleeve that slides along the mainshaft to lock a gear to the shaft; also called a synchronizer sleeve."
    },
    {
      "term": "Dog teeth",
      "def": "The small teeth on a gear that the sliding collar engages to lock the gear to the shaft."
    },
    {
      "term": "Synchronizer",
      "def": "The cone-clutch assembly that matches a gear's speed to the collar's speed before engagement."
    },
    {
      "term": "Shift fork",
      "def": "The fork that slides a collar along the mainshaft when the driver moves the lever."
    },
    {
      "term": "Shift linkage",
      "def": "The rods or cables that carry the lever's motion to the shift forks."
    },
    {
      "term": "Detent",
      "def": "A spring-loaded ball that holds the shift lever in its gate."
    },
    {
      "term": "Idler gear",
      "def": "The gear slid into place for Reverse, which reverses the output direction."
    },
    {
      "term": "Double-clutching",
      "def": "Releasing the clutch in Neutral during a shift to let the input shaft change speed \u2014 a workaround for worn synchronizers."
    },
    {
      "term": "H pattern",
      "def": "The shift lever's gate layout, mapping lever positions to gear selections."
    },
    {
      "term": "Popping out of gear",
      "def": "A gear that jumps back to Neutral under load, from worn dog teeth, a bent fork, or worn bearings."
    }
  ],
  "video": {
    "title": "Manual Transmission Operation",
    "embedUrl": "https://www.youtube.com/embed/vOo3TLgL0kM",
    "note": "WeberAuto shows a manual transmission in operation: input shaft, countershaft, mainshaft, synchronizers, and shift forks. Watch the sliding collar move and the synchronizer cone bring the gear to speed before the teeth engage.",
    "more": [
      {
        "title": "How a Manual Transmission and Clutch Works",
        "url": "https://www.youtube.com/watch?v=o1ED4FQjDGk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain why manual transmission gears never slide out of mesh, and what actually changes when you shift.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: All gear pairs stay meshed all the time. Step 2: Shifting slides a collar that locks one gear pair to the mainshaft \u2014 the locked pair is the gear you are in.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What does a synchronizer do, and what happens when its cones are worn?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Its cone clutch brings the gear and the collar to the same speed before the dog teeth engage. Step 2: Worn cones cannot match speeds, so the teeth clash and the shift grinds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Trace the path of power in third gear: input shaft to output shaft.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input shaft \u2192 countershaft \u2192 third-gear pair \u2192 sliding collar locks third gear to the mainshaft. Step 2: Mainshaft carries power to the driveshaft.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> How does Reverse work in a manual transmission?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An idler gear is slid between the countershaft and mainshaft gears. Step 2: The extra gear reverses the direction of the output shaft.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car grinds going into second gear only, and every other gear is smooth. What do you suspect, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Second gear's synchronizer. Step 2: One gear grinding while the others are smooth points at that gear's synchronizer, not the clutch \u2014 a dragging clutch would grind in every gear.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why should you not rest your hand on the shift lever while driving?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hand's weight loads the shift fork against the spinning collar. Step 2: That wears the fork and the collar, and can eventually cause the transmission to pop out of gear.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a manual transmission, the gears:",
      "choices": [
        "Slide in and out of mesh to change gear",
        "Stay meshed; a sliding collar locks the chosen pair to the mainshaft",
        "Are changed by fluid pressure",
        "Are selected by the TCM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The gears never leave mesh \u2014 the collar does the selecting. (a) That is how an old sliding-mesh box worked, not a modern manual. (c) Fluid pressure is an automatic's method. (d) Manuals have no TCM."
    },
    {
      "q": "A synchronizer's job is to:",
      "choices": [
        "Lock the gear to the shaft",
        "Match the gear's speed to the collar's speed before the dog teeth engage",
        "Drive the pump",
        "Hold the car in Park"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Its cone clutch equalizes speeds so the shift is smooth. (a) The collar locks the gear. (c) Manuals have no pump. (d) Manuals have no Park pawl."
    },
    {
      "q": "The countershaft is the shaft that:",
      "choices": [
        "Carries the gears meshing with the mainshaft gears",
        "Drives the wheels directly",
        "Holds the clutch disc",
        "Pumps the fluid"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The countershaft carries the gear set that meshes with the mainshaft. (b) The mainshaft and driveshaft do that. (c) The input shaft carries the clutch disc. (d) Manuals have no pump."
    },
    {
      "q": "Grinding in one gear only most likely means:",
      "choices": [
        "A dragging clutch",
        "That gear's synchronizer is worn",
        "Low gear oil in the whole box",
        "A bent shift lever"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One gear grinding points at its own synchronizer. (a) A dragging clutch grinds in every gear. (c) Low oil affects all gears. (d) A bent lever causes hard shifting, not single-gear grinding."
    },
    {
      "q": "Reverse is made by:",
      "choices": [
        "Sliding an idler gear into place to reverse the output direction",
        "Reversing the engine",
        "Locking two gearset members",
        "Applying a band"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The idler adds a gear mesh that reverses direction. (b) The engine never reverses. (c) That is an automatic's direct drive. (d) Bands belong to automatics."
    },
    {
      "q": "Popping out of gear under load is caused by:",
      "choices": [
        "Worn dog teeth, a bent fork, or worn bearings letting the shaft move",
        "A slipping clutch",
        "Low tire pressure",
        "A bad battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The collar cannot stay engaged. (b) A slipping clutch loses drive, it does not pop the lever out. (c) and (d) are unrelated systems."
    },
    {
      "q": "The shift fork's job is to:",
      "choices": [
        "Match gear speeds",
        "Slide a collar along the mainshaft",
        "Clamp the clutch disc",
        "Filter the gear oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fork moves the collar. (a) The synchronizer matches speeds. (c) The pressure plate clamps the disc. (d) There is no filter in a manual box."
    },
    {
      "q": "Noise in Neutral that disappears when the clutch pedal is pressed points to:",
      "choices": [
        "The output shaft bearing",
        "The input shaft bearing, which stops spinning when the clutch is released",
        "A wheel bearing",
        "The differential"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pressing the pedal stops the input shaft, so its bearing goes quiet. (a) The output shaft is still in Neutral either way. (c) Wheel bearings change with road speed. (d) The differential is downstream."
    }
  ],
  "studyGuide": "\n<h3>Module 2 \u2014 Manual Transmissions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Gears stay meshed; collars lock one pair to the mainshaft. Synchronizers match speeds first.</p>\n<p><strong>Parts:</strong> Input shaft \u00b7 countershaft \u00b7 mainshaft \u00b7 sliding collar \u00b7 dog teeth \u00b7 synchronizer \u00b7 shift fork \u00b7 linkage.</p>\n<p><strong>Symptoms:</strong> Grind in one gear = its synchronizer \u00b7 grind in all gears = dragging clutch \u00b7 pops out = worn dogs/fork/bearings \u00b7 noise in Neutral that stops with the pedal = input shaft bearing.</p>\n<p><strong>Watch out:</strong> Never force a grinding shift, and do not rest your hand on the lever.</p>\n<p><strong>Self-check:</strong> Trace power in third gear and explain why a worn synchronizer grinds. If both are clear, you have this module.</p>\n"
};
