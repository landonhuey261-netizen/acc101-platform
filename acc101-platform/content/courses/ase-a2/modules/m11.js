// ase-a2 - Module 11: Transaxle & FWD Differences
module.exports = {
  "number": 11,
  "slug": "transaxle-fwd-differences",
  "title": "Transaxle & FWD Differences",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain what a transaxle is: transmission and final drive in one case.",
    "Describe how power flows in a front-wheel-drive car, from engine to axles.",
    "Explain the differential's job inside the transaxle and how it lets wheels turn at different speeds.",
    "Describe the differences in removal, service, and diagnosis between a transaxle and a rear-wheel-drive transmission.",
    "Explain why transaxle fluid service and axle seals deserve special attention."
  ],
  "sections": [
    {
      "heading": "One Case, Two Jobs",
      "html": "<p>A transaxle is a transmission and a final drive built into a single case, and it is the standard layout for front-wheel-drive cars. The engine sits sideways (transverse), the transmission hangs beside it, and the differential lives in the same housing, driving two short axles straight to the front wheels. There is no long driveshaft and no separate rear differential \u2014 the whole drivetrain is one compact package under the hood.</p><p>That packaging is the transaxle's advantage and its challenge. It saves space and weight and gives good traction, because the engine's weight sits over the driving wheels. But it also packs the gearsets, the differential, the valve body, and the pump into one tight case, so service access is harder and heat is concentrated. A transaxle overhaul means working in a smaller, busier space than a rear-wheel-drive unit.</p>"
    },
    {
      "heading": "Power Flow in a FWD Car",
      "html": "<p>Power leaves the engine through the torque converter into the transaxle's gearsets, exactly as in a rear-wheel-drive automatic. The difference comes at the output: instead of a driveshaft running to the back, the output shaft drives a final-drive gearset \u2014 usually a pair of helical gears \u2014 and that drives the differential. The differential splits power between the two front axles, and constant-velocity (CV) joints let the axles bend as the wheels steer and the suspension moves.</p><p>The final-drive ratio in a transaxle is chosen the same way as in a rear-wheel-drive car: a lower (numerically higher) ratio gives stronger takeoff, a taller ratio gives relaxed cruising. Because the differential shares the case and the fluid with the transmission, its condition shows in the same fluid \u2014 metal particles from a worn differential end up in the same pan as clutch material, and the diagnosis must tell them apart.</p>"
    },
    {
      "heading": "The Differential Inside",
      "html": "<p>The differential's job is to let the two front wheels turn at different speeds. In a turn, the outside wheel travels farther than the inside wheel, so it must turn faster. The differential's spider gears allow that speed difference while still sending power to both wheels. Without it, the tires would scrub and skip in every turn, and the car would fight the driver.</p><p>In a transaxle the differential is a small, sturdy assembly of side gears and spider gears, often with a ring gear bolted to its carrier. It runs in the same ATF as the transmission, which is one reason fluid condition matters so much: a differential that has been run low on fluid or with contaminated fluid wears fast, and its noise \u2014 a whine or rumble that changes with road speed \u2014 is a transaxle symptom, not an engine one.</p>"
    },
    {
      "heading": "Service and Diagnosis Differences",
      "html": "<p>Removal differs most. A rear-wheel-drive transmission drops out from underneath with the driveshaft removed. A transaxle usually comes out from below after the axles are released from the differential and the suspension is partly disconnected, or it comes out with the engine as a unit on some vehicles. Either way, the axles and their seals are part of the job: axle seals are inspected and usually replaced whenever an axle is out, because a seal damaged on removal leaks from day one.</p><p>Diagnosis differs too. A vibration or noise in a front-wheel-drive car can come from the transaxle, the CV axles, or the tires \u2014 and the road test must separate them. A noise that changes with steering angle points at a CV joint; a whine that follows road speed points at the final drive; a shift complaint points at the transmission half. The transaxle rewards a technician who can tell which half of the case the symptom comes from.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> A transaxle combines transmission and final drive in one case for front-wheel drive. Power flows through the gearsets, the final-drive gears, and the differential to the CV axles. The differential shares fluid with the transmission, and axle seals are part of every removal.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Treating a transaxle noise as a transmission shift problem. A whine that follows road speed is the final drive or differential, not a clutch pack.</div><div class=\"callout\"><strong>Common mistake:</strong> Reusing axle seals after a transaxle removal. A seal nicked on the way out leaks on the new unit \u2014 replace it while the axle is out.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Transaxle",
      "def": "A transmission and final drive combined in one case, standard for front-wheel-drive cars."
    },
    {
      "term": "Transverse engine",
      "def": "An engine mounted sideways, with its crankshaft across the car \u2014 the usual layout with a transaxle."
    },
    {
      "term": "Final drive",
      "def": "The last gear reduction before the wheels; in a transaxle it is a gearset inside the same case."
    },
    {
      "term": "Differential",
      "def": "The gear assembly that splits power between two wheels while letting them turn at different speeds."
    },
    {
      "term": "Spider gears",
      "def": "The small gears in a differential that allow the two wheels to turn at different speeds."
    },
    {
      "term": "Side gears",
      "def": "The differential gears splined to each axle shaft."
    },
    {
      "term": "CV joint",
      "def": "Constant-velocity joint \u2014 lets a drive axle bend for steering and suspension while transmitting power smoothly."
    },
    {
      "term": "CV axle",
      "def": "The axle shaft with a CV joint at each end, connecting the transaxle to a front wheel."
    },
    {
      "term": "Helical gear",
      "def": "A gear with angled teeth, used for the transaxle final drive for quiet operation."
    },
    {
      "term": "Axle seal",
      "def": "The seal where a drive axle enters the transaxle case."
    },
    {
      "term": "Ring gear",
      "def": "In a transaxle differential, the large gear bolted to the differential carrier, driven by the final-drive pinion."
    },
    {
      "term": "Pinion",
      "def": "The small driving gear that turns the final-drive ring gear."
    }
  ],
  "video": {
    "title": "How an Automatic Transmission Works (FWD)",
    "embedUrl": "https://www.youtube.com/embed/LkK2XFnmfhU",
    "note": "A teardown of a front-wheel-drive automatic transmission showing the gearsets, clutch packs, valve body, and the differential in one case. Watch where the transmission half ends and the final drive begins.",
    "more": [
      {
        "title": "Front-Wheel Drive (FWD) Explained",
        "url": "https://www.youtube.com/watch?v=jT4ge485sVk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What is a transaxle, and what two jobs does it do in one case?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A transmission and a final drive combined in one case. Step 2: It selects gear ratios and provides the final reduction and the differential split to the two front wheels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Trace power flow in a front-wheel-drive car from the engine to the front wheels.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Engine \u2192 torque converter \u2192 gearsets \u2192 output shaft. Step 2: Final-drive gears \u2192 differential \u2192 CV axles \u2192 front wheels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why must the two front wheels turn at different speeds in a turn, and which part allows it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The outside wheel travels a longer path than the inside wheel. Step 2: The differential's spider gears allow the speed difference while still sending power to both wheels.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A front-wheel-drive car has a whine that follows road speed and does not change with gear selection. Which half of the transaxle do you suspect, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The final-drive/differential half. Step 2: A whine tied to road speed rather than gear points at the final drive, not a clutch pack.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why are axle seals usually replaced when a transaxle is removed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The axles must come out of the differential, and the seals are easily nicked on removal. Step 2: A damaged seal leaks from day one, so replacing it while the axle is out is cheap insurance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> How does the differential share its fluid with the transmission, and why does that matter for diagnosis?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The differential runs in the same ATF in the same case. Step 2: Metal from a worn differential lands in the same pan as clutch material, so the diagnosis must tell the two kinds of debris apart.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A transaxle is:",
      "choices": [
        "A manual gearbox only",
        "A transmission and final drive combined in one case",
        "A type of driveshaft",
        "A rear differential"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One case holds both the gear ratios and the final drive. (a) Transaxles can be automatic. (c) A driveshaft is a separate part. (d) A rear differential is separate from the transmission."
    },
    {
      "q": "In a front-wheel-drive car, the engine is usually mounted:",
      "choices": [
        "Lengthwise",
        "Transverse \u2014 sideways, with the crankshaft across the car",
        "In the trunk",
        "Vertically"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A sideways engine pairs with a transaxle beside it. (a) Lengthwise mounting suits rear-wheel drive. (c) and (d) are not car layouts."
    },
    {
      "q": "After the gearsets, power in a transaxle flows through:",
      "choices": [
        "The driveshaft to the rear",
        "The final-drive gears, then the differential, then the CV axles",
        "The torque converter again",
        "The radiator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Final drive, differential, axles \u2014 that is the FWD path. (a) There is no long driveshaft in a FWD car. (c) The converter is upstream. (d) The radiator cools, it does not carry power."
    },
    {
      "q": "The differential lets the two wheels:",
      "choices": [
        "Turn at the same speed always",
        "Turn at different speeds in a turn while both receive power",
        "Stop turning",
        "Turn in opposite directions always"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Spider gears allow the speed difference a turn requires. (a) That would make tires scrub in turns. (c) Wheels stop only when the car stops. (d) They turn opposite only if one wheel is held."
    },
    {
      "q": "A whine that follows road speed and ignores gear selection points to:",
      "choices": [
        "A clutch pack",
        "The final drive or differential",
        "A solenoid",
        "The torque converter lock-up"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Road-speed noise is final-drive territory. (a) A clutch fault follows a gear. (c) A solenoid fault sets codes and affects shifting. (d) Lock-up shudder appears at cruise, not as a road-speed whine."
    },
    {
      "q": "CV joints on a front-wheel-drive car let the axles:",
      "choices": [
        "Bend for steering and suspension movement while transmitting power",
        "Change gear ratios",
        "Pump fluid",
        "Hold the differential still"
      ],
      "answer": 0,
      "explanation": "Correct: (a). CV joints bend smoothly under power. (b) Gearsets change ratios. (c) The pump moves fluid. (d) Nothing holds the differential still while driving."
    },
    {
      "q": "The differential and the transmission in a transaxle share:",
      "choices": [
        "Nothing",
        "The same case and the same ATF",
        "The same clutch packs",
        "The same solenoid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One case, one fluid \u2014 which is why debris must be read carefully. (a) They share case and fluid. (c) The differential has gears, not clutch packs. (d) Solenoids control the transmission half."
    },
    {
      "q": "When a transaxle is removed, axle seals are usually replaced because:",
      "choices": [
        "They are the most expensive part",
        "They are easily nicked on removal and a damaged seal leaks from day one",
        "They hold the wheels on",
        "They filter the fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Replacement while the axle is out is cheap insurance. (a) Seals are inexpensive. (c) Hubs hold the wheels. (d) The filter does that."
    }
  ],
  "studyGuide": "\n<h3>Module 11 \u2014 Transaxle & FWD Differences: Quick Reference</h3>\n<p><strong>Core idea:</strong> A transaxle is a transmission + final drive in one case, built for a sideways engine and front-wheel drive.</p>\n<p><strong>Power flow:</strong> Converter \u2192 gearsets \u2192 final-drive gears \u2192 differential \u2192 CV axles \u2192 front wheels.</p>\n<p><strong>Differential:</strong> Spider gears let the wheels turn at different speeds in a turn.</p>\n<p><strong>Diagnosis:</strong> Road-speed whine = final drive \u00b7 gear-linked slip = transmission half \u00b7 steering-angle noise = CV joint.</p>\n<p><strong>Watch out:</strong> The differential shares the transmission's fluid \u2014 read pan debris carefully, and replace axle seals on removal.</p>\n<p><strong>Self-check:</strong> Trace FWD power flow and name the symptom that points at each half of the transaxle. If you can, you have this module.</p>\n"
};
