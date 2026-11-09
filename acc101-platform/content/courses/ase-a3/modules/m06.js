// ase-a3 - Module 6: AWD & 4WD
module.exports = {
  "number": 6,
  "slug": "awd-and-4wd",
  "title": "AWD & 4WD",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain the difference between all-wheel drive, four-wheel drive, and part-time versus full-time systems.",
    "Describe the parts: transfer case, front and rear differentials, and locking hubs or disconnects.",
    "Explain when to use 4WD high, 4WD low, and 2WD, and what happens if 4WD is used on dry pavement.",
    "Describe how modern AWD systems decide when to send power to the rear wheels.",
    "Diagnose AWD/4WD faults: binding on turns, failure to engage, and transfer-case noise."
  ],
  "sections": [
    {
      "heading": "Three Ways to Drive All Four Wheels",
      "html": "<p>All-wheel drive (AWD) and four-wheel drive (4WD) both drive all four wheels, but they work differently. AWD is usually full-time and automatic: the car drives the front wheels most of the time and sends power to the rear wheels when sensors detect slip, with no driver input. 4WD is usually part-time and driver-selected: the driver chooses 2WD, 4WD high, or 4WD low, and the system locks the front and rear driveshafts together.</p><p>The difference matters on dry pavement. A part-time 4WD system locks front and rear together, so in a turn the front and rear axles cannot turn at different speeds \u2014 and they must, because the front wheels travel a different path from the rear wheels in a turn. The result is binding: the tires skip, the steering fights, and the drivetrain winds up with stress. Part-time 4WD belongs on loose surfaces \u2014 dirt, gravel, snow, mud \u2014 where the tires can slip a little to release the binding. Full-time AWD has a center differential that allows the speed difference, so it can stay on all the time.</p>"
    },
    {
      "heading": "The Transfer Case",
      "html": "<p>The transfer case is the heart of a 4WD system. It sits behind the transmission and splits power between the rear driveshaft and the front driveshaft. Inside it are gears or a chain that drive both outputs, a shift mechanism that selects 2WD, 4WD high, or 4WD low, and \u2014 in a part-time system \u2014 a way to lock the two outputs together. 4WD low adds a gear reduction, multiplying torque for crawling over rough ground or pulling a heavy load at low speed.</p><p>The front axle in a 4WD vehicle is driven only when the transfer case sends it power. Many systems have locking hubs or an axle disconnect that free the front wheels from the drivetrain in 2WD, so the front axle does not spin unnecessarily. When the driver selects 4WD, the hubs lock or the disconnect engages, and the front axle joins the drive. A hub that will not lock means no front drive, no matter what the transfer case does.</p>"
    },
    {
      "heading": "Using the Ranges Correctly",
      "html": "<p>2WD is the normal road setting: rear wheels only, best fuel economy, no binding. 4WD high is for loose surfaces at normal speeds \u2014 snow, gravel, wet grass \u2014 where all four wheels help and the tires can slip enough to release binding. 4WD low is for slow, hard work: steep grades, deep mud, rock crawling, or pulling a load from a stop. It multiplies torque but limits speed, and it is never used on dry pavement at road speed.</p><p>Switching between ranges has its own procedure, stated in the owner's information for that vehicle: some systems shift on the fly, others need the car stopped and the transmission in Neutral. The habit to build is simple: choose the range before you need it, not after you are stuck, and get out of 4WD before you are back on dry pavement.</p>"
    },
    {
      "heading": "Modern AWD: Automatic and Electronic",
      "html": "<p>Modern AWD systems need no driver input at all. Sensors watch wheel speeds, throttle, and steering, and a control module decides how much torque the rear wheels get \u2014 through a clutch pack in the transfer case or the rear differential. On dry pavement the car may be almost entirely front-wheel drive; the moment a front wheel slips, the clutches engage and the rear wheels join in. Some systems can even send power side to side across the rear axle, helping the car turn.</p><p>Because the system is electronic, its faults are electronic too: a wheel speed sensor that lies makes the module send power at the wrong time, and a worn clutch pack in the transfer case slips under load. The diagnostic approach is the same as any electronic system \u2014 codes and scan data first, then the mechanical checks.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> AWD is full-time and automatic; part-time 4WD is driver-selected and locks front and rear together. Part-time 4WD binds on dry pavement \u2014 it belongs on loose surfaces. The transfer case splits power and provides low range. Modern AWD uses sensors and clutch packs to send power where it is needed.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Driving a part-time 4WD vehicle on dry pavement in 4WD. The binding stresses tires, axles, and the transfer case \u2014 and the fix is simply shifting back to 2WD.</div><div class=\"callout\"><strong>Common mistake:</strong> Blaming the transfer case when the front axle never engages. A hub or disconnect that will not lock means no front drive, whatever the transfer case does.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "AWD",
      "def": "All-wheel drive \u2014 usually full-time and automatic, with a center differential or clutches allowing front-to-rear speed differences."
    },
    {
      "term": "4WD",
      "def": "Four-wheel drive \u2014 usually part-time and driver-selected, locking the front and rear driveshafts together."
    },
    {
      "term": "Part-time 4WD",
      "def": "A 4WD system that must be selected by the driver and used only on loose surfaces."
    },
    {
      "term": "Full-time AWD",
      "def": "A system that drives all wheels all the time, with a center differential to allow speed differences."
    },
    {
      "term": "Transfer case",
      "def": "The unit behind the transmission that splits power between the front and rear driveshafts and provides low range."
    },
    {
      "term": "Center differential",
      "def": "The differential between the front and rear axles in a full-time system, allowing them to turn at different speeds."
    },
    {
      "term": "Binding",
      "def": "The tire skip and drivetrain stress when a locked part-time 4WD system is driven on dry pavement."
    },
    {
      "term": "4WD high",
      "def": "The 4WD range for normal speeds on loose surfaces, with no extra gear reduction."
    },
    {
      "term": "4WD low",
      "def": "The 4WD range with an extra gear reduction for slow, high-torque work."
    },
    {
      "term": "Locking hub",
      "def": "A hub that connects or disconnects a front wheel from its axle shaft."
    },
    {
      "term": "Axle disconnect",
      "def": "A device that disconnects the front axle from the drivetrain in 2WD."
    },
    {
      "term": "Driveline wind-up",
      "def": "Stress built up in a locked 4WD system when the axles cannot turn at different speeds."
    },
    {
      "term": "Torque split",
      "def": "How much of the engine's torque goes to the front axle versus the rear axle."
    }
  ],
  "video": {
    "title": "AWD VS 4x4 | How it Works | Donut Media",
    "embedUrl": "https://www.youtube.com/embed/JUqSSD0rkbU",
    "note": "Donut Media explains AWD versus 4x4: how each system splits power, why part-time 4WD binds on pavement, and when to use each range. Watch for the center differential \u2014 the part that lets full-time AWD stay on all the time.",
    "more": [
      {
        "title": "The difference between 4x4 vs 4WD vs AWD",
        "url": "https://www.youtube.com/watch?v=kjuxguJlgOU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the difference between AWD and part-time 4WD in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: AWD is usually full-time and automatic, with a center differential that allows front-to-rear speed differences. Step 2: Part-time 4WD is driver-selected and locks the front and rear driveshafts together, so it can only be used on loose surfaces.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Why does part-time 4WD bind on dry pavement?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The locked transfer case forces front and rear axles to turn together. Step 2: In a turn the front and rear wheels travel different paths, so they need different speeds \u2014 on dry pavement the tires cannot slip to release the difference, so the drivetrain winds up and the tires skip.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the transfer case, and what three selections does it usually offer?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The unit behind the transmission that splits power between the front and rear driveshafts. Step 2: 2WD, 4WD high, and 4WD low.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> When should a driver use 4WD low, and when should they never use it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use it for slow, high-torque work \u2014 steep grades, deep mud, rock crawling, or pulling a load from a stop. Step 2: Never use it on dry pavement at road speed \u2014 it multiplies torque and the locked drivetrain cannot release binding.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 4WD vehicle will not drive the front wheels even though the transfer case shifts into 4WD. What do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The locking hubs or the axle disconnect. Step 2: If a hub will not lock or the disconnect will not engage, the front axle never joins the drive, whatever the transfer case does.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> How does a modern AWD system decide when to send power to the rear wheels?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sensors watch wheel speeds, throttle, and steering. Step 2: A control module engages a clutch pack to send torque rearward when a front wheel slips \u2014 no driver input needed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The main difference between AWD and part-time 4WD is:",
      "choices": [
        "AWD has no transfer case",
        "AWD is usually full-time and automatic; part-time 4WD is driver-selected and locks front and rear together",
        "4WD has no front axle",
        "AWD only works in Reverse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is the defining difference. (a) AWD systems have a transfer case or a power transfer unit. (c) 4WD has a front axle. (d) AWD works in all gears."
    },
    {
      "q": "Part-time 4WD binds on dry pavement because:",
      "choices": [
        "The tires are too sticky",
        "The locked transfer case forces front and rear axles to turn together, but in a turn they need different speeds",
        "The engine is too powerful",
        "The brakes are applied"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The locked system cannot allow the speed difference a turn needs. (a) Stickiness is the condition, not the cause \u2014 the cause is the lock. (c) Power is not the issue. (d) Brakes are unrelated."
    },
    {
      "q": "The transfer case:",
      "choices": [
        "Changes gear ratios in the transmission",
        "Splits power between the front and rear driveshafts and provides low range",
        "Cools the engine",
        "Steers the front wheels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Splitting power and low range are its jobs. (a) The gearbox changes ratios. (c) The cooling system cools the engine. (d) Steering is separate."
    },
    {
      "q": "4WD low is used for:",
      "choices": [
        "Highway cruising",
        "Slow, high-torque work such as steep grades, deep mud, or pulling a load from a stop",
        "Dry pavement at road speed",
        "Parking"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low range multiplies torque at low speed. (a) Highway cruising uses 2WD or 4WD high. (c) Low range on dry pavement at speed causes binding and damage. (d) Parking needs no range."
    },
    {
      "q": "A full-time AWD system can stay on all the time because it has:",
      "choices": [
        "No front axle",
        "A center differential that allows front and rear axles to turn at different speeds",
        "Locked hubs",
        "No transfer case"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The center differential releases the binding. (a) It has a front axle. (c) Locked hubs are a part-time 4WD feature. (d) It has a transfer case or power transfer unit."
    },
    {
      "q": "If the transfer case shifts into 4WD but the front wheels do not drive, check:",
      "choices": [
        "The rear tires",
        "The locking hubs or axle disconnect",
        "The engine oil",
        "The battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A hub or disconnect that will not engage means no front drive. (a) Rear tires do not affect front drive. (c) Engine oil is unrelated. (d) The battery is unrelated."
    },
    {
      "q": "Modern AWD sends power to the rear wheels when:",
      "choices": [
        "The driver pulls a lever",
        "Sensors detect front-wheel slip and a control module engages a clutch pack",
        "The car is parked",
        "The headlights are on"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is automatic and sensor-driven. (a) That is part-time 4WD. (c) Parked cars need no drive. (d) Headlights are unrelated."
    },
    {
      "q": "Binding in a part-time 4WD system feels like:",
      "choices": [
        "Smooth cruising",
        "Tires skipping and steering fighting in turns, with drivetrain stress",
        "Better fuel economy",
        "A soft brake pedal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Skipping tires and fighting steering are binding. (a) Binding is the opposite of smooth. (c) 4WD uses more fuel. (d) Brakes are a separate system."
    }
  ],
  "studyGuide": "\n<h3>Module 6 \u2014 AWD & 4WD: Quick Reference</h3>\n<p><strong>Core idea:</strong> AWD is full-time and automatic (center differential allows the difference); part-time 4WD locks front and rear together and belongs only on loose surfaces.</p>\n<p><strong>Parts:</strong> Transfer case (2WD / 4WD high / 4WD low) \u00b7 center differential \u00b7 locking hubs / axle disconnect.</p>\n<p><strong>Ranges:</strong> 2WD road \u00b7 4WD high loose surfaces at speed \u00b7 4WD low slow, high torque.</p>\n<p><strong>Modern AWD:</strong> Sensors + control module + clutch pack \u2014 power goes rearward when a front wheel slips.</p>\n<p><strong>Watch out:</strong> Binding on dry pavement means get out of 4WD; no front drive with a shifted transfer case means check the hubs first.</p>\n<p><strong>Self-check:</strong> Explain binding and the three ranges to a classmate. If both are clear, you have this module.</p>\n"
};
