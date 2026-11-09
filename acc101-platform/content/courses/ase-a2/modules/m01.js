// ase-a2 - Module 1: How Automatics Work & Hydraulics
module.exports = {
  "number": 1,
  "slug": "how-automatics-work-hydraulics",
  "title": "How Automatics Work & Hydraulics",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain the job of an automatic transmission: matching engine output to road speed and load.",
    "Trace power flow from the crankshaft through the torque converter, gearsets, and final drive to the wheels.",
    "Describe how pressurized fluid does three jobs at once: transmitting power, applying clutches, and cooling and lubricating.",
    "Name the main parts of a conventional automatic transmission and state what each one does.",
    "Explain why the transmission needs a pump, a filter, and a cooler to stay alive."
  ],
  "sections": [
    {
      "heading": "What an Automatic Transmission Does",
      "html": "<p>An engine only makes useful power in a narrow speed range, but a car must crawl away from a stop, climb a hill, and cruise at highway speed. The transmission bridges that gap by giving the driver several gear ratios: a low ratio multiplies torque for takeoff, and a high ratio (overdrive) lets the engine turn slowly at road speed. The automatic picks those ratios by itself, using fluid pressure and, on modern units, electronic commands.</p><p>Power flows in a fixed chain. The crankshaft drives the torque converter, which drives the transmission input shaft. Inside the case, planetary gearsets and clutch packs select the ratio, and the output shaft carries power to the driveshaft or, in a transaxle, straight to the differential. When the driver selects Park, Reverse, Neutral, or Drive, they are really telling the hydraulic and electronic controls which clutches to apply.</p>"
    },
    {
      "heading": "Hydraulics: Fluid Under Pressure Does the Work",
      "html": "<p>Automatic transmission fluid (ATF) is the transmission's muscle. A pump driven by the engine pressurizes ATF, and the valve body routes that pressure to clutch pistons and band servos. When pressure fills a clutch piston, friction plates squeeze together and lock two parts so they turn as one; when pressure is released, springs push the piston back and the clutch releases. Every shift is a timed handoff of pressure from one clutch to another.</p><p>The same fluid also cools and lubricates. It carries heat away from the slipping clutches to the cooler, and it bathes gears, bearings, and bushings in a constant oil film. That is why fluid condition matters so much: burnt, dark, or low fluid cannot hold pressure cleanly, cannot cool, and cannot protect \u2014 and the transmission's shifts are usually the first thing to show it.</p>"
    },
    {
      "heading": "The Pump, Filter, and Cooler",
      "html": "<p>The pump is the heart of the hydraulic system. It is driven by the torque converter hub, so it turns whenever the engine runs, and it draws fluid from the pan through a filter. The filter catches wear particles before they can reach the valve body, where tiny passages and valves would jam on grit. A clogged filter starves the pump, and line pressure falls \u2014 which is why a pressure test is often the first real diagnostic step.</p><p>Hot fluid is the transmission's enemy, so most vehicles route ATF through a cooler \u2014 often a section of the radiator or a separate air-to-fluid cooler in front of it. The cooler sheds the heat made by the torque converter and by slipping clutches. A restricted cooler line or a cooler full of debris lets temperatures climb, and heat is what cooks fluid and hardens seals. Checking cooler flow is part of any serious transmission diagnosis.</p>"
    },
    {
      "heading": "Gear Ratios in Plain Words",
      "html": "<p>A gear ratio compares how many times the input turns for one turn of the output. In first gear the input may turn several times for one output turn, so the wheels get far more torque than the engine makes \u2014 that is torque multiplication, and it is what launches the car. In overdrive the output turns faster than the input, so the engine can loaf at highway speed while the wheels spin fast.</p><p>The transmission chooses ratios by holding one member of a planetary gearset still while another drives. Which member is held decides the ratio, and the clutches and bands are the hands that hold it. That is the whole secret of the automatic: a handful of gearsets, a set of clutches to hold their parts, and pressure to work the clutches at exactly the right moment.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The transmission matches engine speed to road speed through selectable ratios. ATF transmits power, applies clutches, cools, and lubricates. The pump makes pressure, the filter protects the valve body, and the cooler sheds heat. Shifts are timed pressure handoffs between clutches.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Thinking the fluid is only a lubricant. In an automatic, fluid is the control medium \u2014 low or burnt fluid is a hydraulic failure, not just a lubrication problem, and it shows up first as bad shifts.</div><div class=\"callout\"><strong>Common mistake:</strong> Blaming the electronics for a shift problem before checking fluid level and condition. The smartest scan tool in the world cannot fix a pump starved by a clogged filter.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Automatic transmission",
      "def": "A transmission that selects gear ratios by itself, using hydraulic pressure and electronic controls, with no clutch pedal."
    },
    {
      "term": "Gear ratio",
      "def": "The number of input turns for one output turn; a low ratio multiplies torque, a high ratio (overdrive) lets the engine turn slowly."
    },
    {
      "term": "Torque converter",
      "def": "The fluid coupling between the engine and the transmission input shaft; it also drives the pump."
    },
    {
      "term": "ATF",
      "def": "Automatic transmission fluid \u2014 the hydraulic medium that applies clutches, cools, and lubricates."
    },
    {
      "term": "Line pressure",
      "def": "The main hydraulic pressure produced by the pump and regulated by the valve body; it applies the clutches and bands."
    },
    {
      "term": "Valve body",
      "def": "The hydraulic control center: a block of passages and valves that routes pressure to the right clutch at the right time."
    },
    {
      "term": "Clutch pack",
      "def": "A stack of friction and steel plates that lock two parts together when hydraulic pressure squeezes them."
    },
    {
      "term": "Band",
      "def": "A steel strap that wraps a drum and holds it still when its servo applies pressure."
    },
    {
      "term": "Planetary gearset",
      "def": "A sun gear, planet gears on a carrier, and a ring gear; holding one member gives a different ratio."
    },
    {
      "term": "Pump",
      "def": "The engine-driven pump that pressurizes ATF and feeds the whole hydraulic system."
    },
    {
      "term": "Filter",
      "def": "The screen or element in the pan that catches wear particles before fluid reaches the valve body."
    },
    {
      "term": "Cooler",
      "def": "A heat exchanger that sheds ATF heat, usually in the radiator or mounted ahead of it."
    },
    {
      "term": "Overdrive",
      "def": "A gear ratio in which the output shaft turns faster than the input shaft, for relaxed highway cruising."
    },
    {
      "term": "Input shaft",
      "def": "The shaft that carries power from the torque converter into the gearsets."
    },
    {
      "term": "Output shaft",
      "def": "The shaft that carries power out of the transmission to the driveshaft or final drive."
    },
    {
      "term": "Final drive",
      "def": "The last gear reduction before the wheels; in a transaxle it lives inside the same case as the transmission."
    }
  ],
  "video": {
    "title": "Automatic Transmission, How it works?",
    "embedUrl": "https://www.youtube.com/embed/u_y1S8C0Hmc",
    "note": "Learn Engineering explains the automatic transmission with clear animation: planetary gearsets, clutch packs, and the torque converter. Watch how holding one gearset member still changes the ratio, then match each part to the power-flow chain in this module.",
    "more": [
      {
        "title": "How an Automatic Transmission Works (FWD)",
        "url": "https://www.youtube.com/watch?v=LkK2XFnmfhU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer says the car 'has no gears' because it is an automatic. In two sentences, explain where the gears are and how ratios change without a shift lever.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The gears are planetary gearsets inside the case, always meshed. Step 2: Ratios change when clutches and bands hold different gearset members still \u2014 the gears never slide in and out like a manual's.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> List the three jobs ATF does, and give one symptom that appears when it fails at each job.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Transmit power in the torque converter \u2014 slipping or no movement when fluid is low. Step 2: Apply clutches hydraulically \u2014 slipping or harsh shifts when pressure is weak. Step 3: Cool and lubricate \u2014 burnt smell and overheating when fluid is worn or low.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The pump is driven by the torque converter hub. Why does that mean line pressure exists whenever the engine runs, even in Park?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The converter hub turns with the engine, so the pump turns with the engine. Step 2: The pump makes pressure in every selector position, including Park and Neutral \u2014 Park only locks the output shaft with a parking pawl, it does not stop the pump.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain, in order, what happens inside the transmission when the driver moves the selector from Neutral to Drive.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The manual valve in the valve body moves and routes line pressure to the forward clutch circuit. Step 2: Pressure fills the forward clutch piston, the plates squeeze together, and the input shaft connects to the gearset. Step 3: The car is ready to move \u2014 the torque converter lets the engine idle while the car stands still.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A transmission overheats on long hills. Name two parts of the cooling path to check, and what each check tells you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cooler flow \u2014 restricted flow means heat cannot leave the fluid. Step 2: Fluid level and condition \u2014 low or burnt fluid cannot carry heat away from the clutches, so temperatures climb and shifts suffer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> First gear multiplies torque and overdrive does the opposite. Explain why a car needs both, using takeoff and highway cruising.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Takeoff needs torque multiplication because the engine alone cannot move the car's weight from a stop. Step 2: Highway cruising needs overdrive so the engine turns slowly, saving fuel and wear while the wheels spin fast.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The main job of an automatic transmission is to:",
      "choices": [
        "Connect the battery to the starter",
        "Match engine output to road speed and load through selectable gear ratios",
        "Cool the engine",
        "Steer the front wheels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The transmission matches engine speed and torque to what the road demands. (a) That is the starting system's job. (c) Cooling the engine is the cooling system's job. (d) Steering is a different system."
    },
    {
      "q": "In an automatic, ATF does all of the following EXCEPT:",
      "choices": [
        "Apply clutch packs with hydraulic pressure",
        "Cool the transmission",
        "Lubricate gears and bearings",
        "Ignite the fuel mixture"
      ],
      "answer": 3,
      "explanation": "Correct: (d). ATF applies clutches, cools, and lubricates \u2014 it never ignites fuel. (a), (b), and (c) are all real ATF jobs."
    },
    {
      "q": "The transmission pump is driven by:",
      "choices": [
        "The output shaft",
        "The torque converter hub, so it turns whenever the engine runs",
        "The starter motor",
        "The alternator belt"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The converter hub drives the pump, so pressure exists whenever the engine runs. (a) The output shaft stops when the car stops. (c) The starter only cranks the engine. (d) The alternator belt does not drive the pump."
    },
    {
      "q": "A shift in an automatic is best described as:",
      "choices": [
        "Gears sliding in and out of mesh",
        "A timed handoff of hydraulic pressure from one clutch to another",
        "The torque converter changing size",
        "The valve body changing the fluid type"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shifts are pressure handoffs between clutches. (a) That describes a manual gearbox. (c) The converter does not change size. (d) The fluid type never changes during a shift."
    },
    {
      "q": "The filter in the transmission pan protects:",
      "choices": [
        "The engine bearings",
        "The valve body, by catching wear particles before they reach its small passages",
        "The radiator",
        "The torque converter's lock-up clutch only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The filter keeps grit out of the valve body's tiny passages. (a) Engine bearings have their own filter. (c) The radiator is cooled by coolant. (d) The filter protects the whole hydraulic system, not one clutch."
    },
    {
      "q": "Overdrive means:",
      "choices": [
        "The output shaft turns faster than the input shaft",
        "The engine turns faster than the wheels",
        "First gear",
        "Reverse gear"
      ],
      "answer": 0,
      "explanation": "Correct: (a). In overdrive the output outruns the input for relaxed cruising. (b) That is true in low gears, not overdrive. (c) First gear is the deepest reduction. (d) Reverse turns the output backwards."
    },
    {
      "q": "When the selector is in Park, the output shaft is:",
      "choices": [
        "Disconnected from everything",
        "Locked by the parking pawl so the car cannot roll",
        "Spinning freely",
        "Driven by the pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The parking pawl locks the output shaft. (a) The clutches release, but the pawl locks the shaft. (c) A locked shaft does not spin. (d) The pump makes pressure; it does not drive the shaft."
    },
    {
      "q": "Burnt-smelling, dark ATF most likely means:",
      "choices": [
        "The fluid is brand new",
        "The transmission has been overheating and the fluid has broken down",
        "The cooler is too cold",
        "The filter is too clean"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Burnt, dark fluid is cooked fluid \u2014 heat has broken it down. (a) New fluid is red and clean-smelling. (c) A cold cooler would not burn fluid. (d) A clean filter is a good thing, not a cause of burnt fluid."
    }
  ],
  "studyGuide": "\n<h3>Module 1 \u2014 How Automatics Work: Quick Reference</h3>\n<p><strong>Core idea:</strong> The transmission matches engine speed to road speed with selectable ratios; ATF is the muscle that applies the clutches.</p>\n<p><strong>Power flow:</strong> Crankshaft \u2192 torque converter \u2192 input shaft \u2192 planetary gearsets \u2192 output shaft \u2192 final drive.</p>\n<p><strong>ATF jobs:</strong> transmit power, apply clutches, cool, lubricate.</p>\n<p><strong>Support parts:</strong> Pump makes pressure \u00b7 filter protects the valve body \u00b7 cooler sheds heat.</p>\n<p><strong>Watch out:</strong> Low or burnt fluid is a hydraulic failure first \u2014 check fluid before blaming electronics.</p>\n<p><strong>Self-check:</strong> Trace power from the crankshaft to the wheels and name what each part does. If you can do it without notes, you have this module.</p>\n"
};
