// ase-a3 - Module 5: Differentials
module.exports = {
  "number": 5,
  "slug": "differentials",
  "title": "Differentials",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain the differential's job: splitting power while letting wheels turn at different speeds.",
    "Name the parts: ring gear, pinion, carrier, spider gears, side gears, and axles.",
    "Explain how the gear ratio of the final drive is set by the ring and pinion.",
    "Describe the difference between an open differential and a limited-slip differential.",
    "Diagnose differential faults: whine, clunk, and leaks."
  ],
  "sections": [
    {
      "heading": "Why the Wheels Need Different Speeds",
      "html": "<p>In a turn, the outside wheel travels a longer path than the inside wheel, so it must turn faster. If both wheels were locked together, the tires would scrub and skip through every turn and the car would fight the driver. The differential solves this: it splits the engine's power between the two wheels while letting them turn at different speeds. It is the part that makes turning possible without tire scrub.</p><p>The differential lives in the rear axle housing on a rear-wheel-drive car or inside the transaxle on a front-wheel-drive car. It is driven by the driveshaft (or the transaxle's mainshaft) through the final-drive gears, and it sends power out through two axle shafts. It works every time the car turns, and it works hardest on tight, slow turns where the speed difference between the wheels is greatest.</p>"
    },
    {
      "heading": "Ring Gear, Pinion, and Spider Gears",
      "html": "<p>Power enters the differential through the pinion gear, a small gear on the end of the driveshaft (or mainshaft) that meshes with the large ring gear bolted to the differential carrier. The ring and pinion do two jobs: they turn the power through a right angle \u2014 from the lengthwise driveshaft to the crosswise axles \u2014 and they provide the final gear reduction. The ratio between them is the final-drive ratio, and it is set by the tooth counts: a ring gear with more teeth relative to the pinion gives a lower (numerically higher) ratio and stronger takeoff.</p><p>Inside the carrier sit the spider gears: two or four small bevel gears on a cross pin, meshing with a side gear on each axle shaft. When the car drives straight, the spider gears do not spin on their pin \u2014 they carry both side gears around together at the same speed. In a turn, the spider gears spin on the pin, letting one side gear turn faster than the other. The power still reaches both wheels; only the speeds differ.</p>"
    },
    {
      "heading": "Open vs. Limited-Slip",
      "html": "<p>An open differential is the standard design: it always splits torque equally between the two wheels, and it lets them turn at whatever speeds the road demands. Its weakness shows when one wheel loses grip \u2014 on ice, for example. The open differential sends equal torque to both wheels, but the spinning wheel can only take a small amount before it slips, so the wheel with grip gets only that same small amount. The car goes nowhere while one wheel spins.</p><p>A limited-slip differential fixes that with clutches or gears inside the carrier that resist the speed difference between the wheels. When one wheel starts to spin much faster than the other, the clutches bind and send more torque to the wheel with grip. It does not lock the wheels together \u2014 they can still turn at different speeds in a turn \u2014 but it limits how much they can differ. That is why cars with limited-slip differentials keep moving when one wheel is on ice and the other is on pavement.</p>"
    },
    {
      "heading": "Whine, Clunk, and Leaks",
      "html": "<p>A differential whine that rises and falls with road speed \u2014 not engine speed \u2014 is the classic final-drive symptom. It usually means the ring and pinion are worn or their mesh is misadjusted, so the teeth do not meet cleanly. The pitch changes with speed and often changes between acceleration and coasting, because the load on the teeth reverses. A whine that appears in one gear only is a transmission fault, not a differential one \u2014 the differential turns at road speed in every gear.</p><p>A clunk when changing direction \u2014 Drive to Reverse, or on takeoff \u2014 can mean excess backlash (the play between ring and pinion teeth) or worn spider gears. Leaks at the pinion seal or the axle seals let gear oil escape, and a differential run low on oil wears fast and noisily. Checking the oil level and looking for leaks is part of every differential diagnosis, because low oil is both a cause and a warning.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The differential splits power and allows different wheel speeds. The ring and pinion set the final ratio and turn power through a right angle. Spider gears allow the speed difference. An open differential splits torque equally; a limited-slip resists the difference when one wheel slips.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Calling a road-speed whine a transmission problem. If the noise follows road speed in every gear, it is the final drive, not a gearset.</div><div class=\"callout\"><strong>Common mistake:</strong> Ignoring a pinion seal leak. A differential that runs low on oil wears its ring and pinion fast \u2014 a cheap seal becomes an expensive gearset.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Differential",
      "def": "The gear assembly that splits power between two wheels while letting them turn at different speeds."
    },
    {
      "term": "Ring gear",
      "def": "The large gear bolted to the differential carrier, driven by the pinion."
    },
    {
      "term": "Pinion",
      "def": "The small driving gear that turns the ring gear; in a rear axle it is on the end of the driveshaft."
    },
    {
      "term": "Carrier",
      "def": "The housing that holds the spider gears and turns with the ring gear."
    },
    {
      "term": "Spider gears",
      "def": "The small bevel gears on the cross pin that allow the two wheels to turn at different speeds."
    },
    {
      "term": "Side gears",
      "def": "The differential gears splined to each axle shaft."
    },
    {
      "term": "Backlash",
      "def": "The small play between the ring and pinion teeth; too much means wear or misadjustment."
    },
    {
      "term": "Final-drive ratio",
      "def": "The ratio of ring-gear teeth to pinion teeth; the last reduction before the wheels."
    },
    {
      "term": "Open differential",
      "def": "A differential that always splits torque equally and lets the wheels turn at any different speeds."
    },
    {
      "term": "Limited-slip differential",
      "def": "A differential with clutches or gears that resist a large speed difference, sending more torque to the wheel with grip."
    },
    {
      "term": "Pinion seal",
      "def": "The seal where the pinion shaft enters the differential housing."
    },
    {
      "term": "Axle housing",
      "def": "The housing that holds the differential and the axle shafts on a rear-wheel-drive car."
    },
    {
      "term": "Bevel gear",
      "def": "A gear with teeth cut on a cone, used where power must turn a corner \u2014 as in a differential."
    },
    {
      "term": "Gear oil",
      "def": "The heavy lubricant for differentials and manual gearboxes."
    }
  ],
  "video": {
    "title": "How an Automotive Open Differential Works",
    "embedUrl": "https://www.youtube.com/embed/Epx74DzR-SQ",
    "note": "A clear look at an open differential in operation: ring gear, pinion, carrier, spider gears, and side gears. Watch the spider gears spin on their pin in a turn and sit still going straight.",
    "more": [
      {
        "title": "How a Car Differential Gear Works",
        "url": "https://www.youtube.com/watch?v=fJfgeaN-Egw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences why a car needs a differential.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a turn the outside wheel travels farther than the inside wheel, so it must turn faster. Step 2: The differential lets the wheels turn at different speeds while both still receive power.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Trace power through a rear differential: driveshaft to axles.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Driveshaft \u2192 pinion \u2192 ring gear \u2192 carrier. Step 2: Carrier \u2192 spider gears \u2192 side gears \u2192 axle shafts \u2192 wheels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What sets the final-drive ratio, and what does a numerically higher ratio do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The tooth counts of the ring gear and pinion set it. Step 2: A numerically higher ratio gives stronger takeoff and lower cruising speed for a given engine speed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> How do the spider gears behave going straight versus in a turn?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Going straight, they do not spin on their pin \u2014 they carry both side gears around together. Step 2: In a turn, they spin on the pin, letting one side gear turn faster than the other.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does an open differential struggle when one wheel is on ice?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It always splits torque equally. Step 2: The spinning wheel can only take a small amount of torque before it slips, so the wheel with grip gets only that same small amount.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> How does a limited-slip differential help in that situation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Its clutches or gears resist a large speed difference between the wheels. Step 2: When one wheel spins, the clutches bind and send more torque to the wheel with grip.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The differential's job is to:",
      "choices": [
        "Change gear ratios",
        "Split power between two wheels while letting them turn at different speeds",
        "Disconnect the engine",
        "Pump gear oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is the differential's whole purpose. (a) Gearsets change ratios. (c) The clutch disconnects the engine. (d) Differentials have no pump."
    },
    {
      "q": "Power enters the differential through the:",
      "choices": [
        "Spider gears",
        "Pinion gear driving the ring gear",
        "Side gears",
        "Clutch disc"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pinion to ring gear is the entry point. (a) Spider gears split the power inside. (c) Side gears drive the axles. (d) The clutch is upstream."
    },
    {
      "q": "The final-drive ratio is set by:",
      "choices": [
        "The tire size",
        "The tooth counts of the ring gear and the pinion",
        "The engine size",
        "The number of spider gears"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ring and pinion teeth set the ratio. (a) Tires affect overall gearing but not the final-drive ratio. (c) Engine size is unrelated. (d) Spider gear count does not set the ratio."
    },
    {
      "q": "Going straight, the spider gears:",
      "choices": [
        "Spin fast on their pin",
        "Do not spin on their pin \u2014 they carry both side gears around together",
        "Stop the car",
        "Lock the wheels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With equal wheel speeds there is nothing for them to do. (a) They spin only when the wheels differ. (c) They never stop the car. (d) They allow difference, they do not lock."
    },
    {
      "q": "An open differential on ice will:",
      "choices": [
        "Send all torque to the wheel with grip",
        "Split torque equally, so the spinning wheel limits what the gripping wheel gets",
        "Lock both wheels together",
        "Stop the engine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Equal split means the slipping wheel caps the torque. (a) That is what a limited-slip does. (c) Locking is a locker, not an open differential. (d) The engine keeps running."
    },
    {
      "q": "A limited-slip differential helps by:",
      "choices": [
        "Locking the wheels together permanently",
        "Resisting a large speed difference so more torque reaches the wheel with grip",
        "Disconnecting the spinning wheel",
        "Changing the final-drive ratio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Its clutches bind when one wheel spins too fast. (a) It still allows different speeds in turns. (c) It never disconnects a wheel. (d) The ratio is fixed by the gears."
    },
    {
      "q": "A whine that follows road speed in every gear most likely comes from:",
      "choices": [
        "A synchronizer",
        "The ring and pinion in the differential",
        "The clutch disc",
        "A wheel bearing only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Road-speed noise in all gears is final-drive territory. (a) A synchronizer grinds on shifts in one gear. (c) The clutch slips or chatters on takeoff. (d) A wheel bearing is possible, but a whine that changes between acceleration and coasting points at the ring and pinion."
    },
    {
      "q": "A pinion seal leak matters because:",
      "choices": [
        "It is messy",
        "The differential can run low on oil and wear its ring and pinion fast",
        "It affects the brakes",
        "It changes the gear ratio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low oil destroys gears quickly. (a) Mess is the least of it. (c) Brakes are a separate system. (d) A leak cannot change tooth counts."
    }
  ],
  "studyGuide": "\n<h3>Module 5 \u2014 Differentials: Quick Reference</h3>\n<p><strong>Core idea:</strong> The differential splits power and lets the wheels turn at different speeds \u2014 spider gears do the allowing.</p>\n<p><strong>Parts:</strong> Pinion \u2192 ring gear \u2192 carrier \u2192 spider gears \u2192 side gears \u2192 axles.</p>\n<p><strong>Final-drive ratio:</strong> Ring teeth vs. pinion teeth. Numerically higher = stronger takeoff.</p>\n<p><strong>Open vs. limited-slip:</strong> Open splits torque equally (struggles on ice) \u00b7 limited-slip resists the difference and feeds the gripping wheel.</p>\n<p><strong>Watch out:</strong> Road-speed whine in every gear is the final drive, not the gearbox. Fix seal leaks before the oil runs low.</p>\n<p><strong>Self-check:</strong> Trace power through the differential and explain the ice problem. If both are clear, you have this module.</p>\n"
};
