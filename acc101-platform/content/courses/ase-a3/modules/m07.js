// ase-a3 - Module 7: Noise & Vibration Diagnosis
module.exports = {
  "number": 7,
  "slug": "noise-and-vibration-diagnosis",
  "title": "Noise & Vibration Diagnosis",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Separate driveline noise from engine noise, tire noise, and wheel-bearing noise.",
    "Use the condition \u2014 speed, load, gear, steering angle \u2014 to name the suspect part.",
    "Explain how vibration frequency and feel point at the driveshaft, the axles, or the tires.",
    "Plan a diagnosis road test that isolates each suspect.",
    "Write a diagnosis that names the most likely cause and the proving test."
  ],
  "sections": [
    {
      "heading": "Noise Has an Address",
      "html": "<p>Every driveline noise has a condition attached to it, and the condition is the address. A noise that follows engine speed \u2014 rising with revs in any gear \u2014 belongs to the engine or the clutch. A noise that follows road speed in every gear belongs to the final drive, the driveshaft, or the wheels. A noise that appears in one gear only belongs to that gear's parts. A noise that appears only on turns belongs to the CV joints or the differential. The first diagnostic question is always: when does it happen?</p><p>The second question is: what changes it? A noise that changes with load \u2014 louder on acceleration, quieter on coasting \u2014 points at gears under torque, such as the ring and pinion. A noise that changes with steering angle points at the CV joints. A noise that disappears when the clutch pedal is pressed points at the input shaft or the release bearing. Each change narrows the list by one part.</p>"
    },
    {
      "heading": "Vibration: Feel and Frequency",
      "html": "<p>Vibration is felt as much as heard. A vibration felt through the steering wheel usually comes from the front \u2014 tires, wheels, or front axles. A vibration felt through the floor or the seat usually comes from the middle or rear \u2014 the driveshaft, the rear differential, or the rear wheels. A vibration that grows steadily with road speed and is worst at one particular speed often means an imbalance: a tire, a wheel, or a driveshaft that has lost a balance weight.</p><p>Frequency helps too. A driveshaft spins faster than the wheels (it turns at transmission output speed), so a driveshaft vibration is a faster buzz than a wheel-speed vibration. A tire problem repeats once per wheel revolution \u2014 slow and thumping. A U-joint problem can pulse twice per driveshaft revolution. You do not need instruments to use this: you need to notice whether the vibration is fast or slow, and whether it follows road speed or engine speed.</p>"
    },
    {
      "heading": "The Isolation Road Test",
      "html": "<p>The isolation road test is a planned drive that turns suspects on and off one at a time. Drive to the speed where the noise appears, then shift to Neutral and let the engine idle while the car coasts: if the noise stays, it is road-speed related (driveshaft, differential, wheels); if it disappears, it is engine-speed related. Turn the steering wheel gently left and right: a noise that changes is a CV joint or a wheel bearing on the loaded side. Accelerate, then coast: a noise that changes with load is a gear mesh under torque.</p><p>Brake gently at the speed where the vibration appears: if braking changes it, suspect the brakes or a wheel bearing loaded by braking. Swap the front tires to the rear if the vibration is tire-suspected \u2014 a vibration that moves with the tires is a tire problem, not a driveline one. Each step costs minutes and eliminates a whole system.</p>"
    },
    {
      "heading": "Common Noise Cases",
      "html": "<p>Case one: a whine that follows road speed in every gear and changes between acceleration and coasting \u2014 the ring and pinion, whose mesh loads differently in each direction. Case two: a clicking that appears only on sharp turns \u2014 the outer CV joint, whose balls run out of their worn tracks at full angle. Case three: a clunk on takeoff \u2014 a worn U-joint with play, or a sticking slip yoke. Case four: a rumble that grows with road speed and gets louder when turning one way \u2014 a wheel bearing, loaded more on one side of the turn.</p><p>Case five: a vibration at highway speed that was not there before a tire rotation \u2014 a tire or wheel that is out of balance or out of round, moved to a new position. The pattern in every case is the same: the condition names the part, and the proving test confirms it before any part is ordered.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Noise follows a condition \u2014 engine speed, road speed, one gear, or steering angle \u2014 and the condition names the part. Vibration is felt where its source lives: wheel, floor, or seat. The isolation road test turns suspects off one at a time. A diagnosis names a cause and a proving test.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Replacing a wheel bearing for a differential whine. A whine that changes between acceleration and coasting is a gear mesh, not a bearing \u2014 and the road test would have shown it.</div><div class=\"callout\"><strong>Common mistake:</strong> Chasing a vibration without checking the tires first. A tire problem is the most common cause of road-speed vibration, and a tire swap is the cheapest proving test there is.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Isolation test",
      "def": "A road test that turns suspects on and off one at a time \u2014 coasting in Neutral, turning, accelerating, braking \u2014 to find a noise's source."
    },
    {
      "term": "Road-speed noise",
      "def": "A noise that follows how fast the car travels, in every gear \u2014 pointing at the final drive, driveshaft, or wheels."
    },
    {
      "term": "Engine-speed noise",
      "def": "A noise that follows engine revs in any gear \u2014 pointing at the engine or clutch."
    },
    {
      "term": "Load-sensitive noise",
      "def": "A noise that changes between acceleration and coasting \u2014 pointing at gears under torque."
    },
    {
      "term": "Steering-angle noise",
      "def": "A noise that appears or changes when turning \u2014 pointing at CV joints or wheel bearings."
    },
    {
      "term": "Imbalance",
      "def": "A weight distribution problem that makes a spinning part vibrate, worst at one speed."
    },
    {
      "term": "Wheel-speed vibration",
      "def": "A slow vibration that repeats once per wheel revolution \u2014 usually a tire or wheel."
    },
    {
      "term": "Driveshaft-speed vibration",
      "def": "A faster vibration at driveshaft speed \u2014 pointing at the shaft, its joints, or its balance."
    },
    {
      "term": "Rumble",
      "def": "A low, rolling noise that grows with road speed \u2014 often a wheel bearing."
    },
    {
      "term": "Whine",
      "def": "A high-pitched noise that follows road speed \u2014 often the ring and pinion mesh."
    },
    {
      "term": "Clicking",
      "def": "A sharp repeated click on turns \u2014 the classic outer CV joint symptom."
    },
    {
      "term": "Proving test",
      "def": "The next test that would confirm or rule out the suspected cause."
    }
  ],
  "video": {
    "title": "DRIVELINE VIBRATION",
    "embedUrl": "https://www.youtube.com/embed/ujyiTkIz7vE",
    "note": "A hands-on look at driveline vibration: what causes it and how it is tracked down. Watch how the technician separates a driveshaft vibration from a tire vibration, and match each step to the isolation road test in this module.",
    "more": [
      {
        "title": "Drive Shaft vibration",
        "url": "https://www.youtube.com/watch?v=QhHVr7oxFNY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A noise follows road speed in every gear. Which parts are suspects, and which are ruled out?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Suspects are the final drive, driveshaft, and wheels. Step 2: Ruled out are the engine and the clutch (they follow engine speed) and any single gear's parts (they would appear in one gear only).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the coast-in-Neutral test and what each result means.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At the noise speed, shift to Neutral and let the engine idle while coasting. Step 2: Noise stays \u2014 it is road-speed related. Noise disappears \u2014 it is engine-speed related.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A vibration is felt through the steering wheel. Where is the source most likely, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The front of the car. Step 2: Steering-wheel vibration comes from the front tires, wheels, or front axles \u2014 the parts connected to the steering.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A whine changes between acceleration and coasting. What does that tell you about the suspect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The suspect is a gear mesh under torque \u2014 the ring and pinion. Step 2: The load on the teeth reverses between acceleration and coasting, so the mesh noise changes with it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A vibration appeared right after a tire rotation. What is the cheapest proving test, and what would it show?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Swap the front tires to the rear. Step 2: If the vibration moves with the tires, it is a tire or wheel problem, not a driveline one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A clicking appears only on sharp turns. Name the suspect part and explain why the condition points at it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The outer CV joint. Step 2: Only on turns means the joint is working at full angle \u2014 its balls run out of worn tracks there, and nowhere else.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A noise that follows road speed in every gear points to:",
      "choices": [
        "The engine",
        "The final drive, driveshaft, or wheels",
        "One gear's synchronizer",
        "The clutch disc"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Road speed in all gears means the parts that turn with the road. (a) The engine follows engine speed. (c) A synchronizer appears in one gear. (d) The clutch follows engine speed."
    },
    {
      "q": "A noise that disappears when the car coasts in Neutral with the engine idling is:",
      "choices": [
        "Road-speed related",
        "Engine-speed related",
        "A tire problem",
        "A differential problem"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Coasting stops the engine's contribution, so a disappearing noise belonged to the engine side. (a) Road-speed noise stays while coasting. (c) Tires keep turning while coasting. (d) The differential keeps turning while coasting."
    },
    {
      "q": "Vibration felt through the steering wheel most likely comes from:",
      "choices": [
        "The rear differential",
        "The front tires, wheels, or front axles",
        "The driveshaft center bearing",
        "The rear brakes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The steering wheel connects to the front. (a) The rear differential is felt through the floor or seat. (c) The center bearing is mid-car. (d) Rear brakes are felt through the pedal or the car, not the wheel."
    },
    {
      "q": "A whine that changes between acceleration and coasting points to:",
      "choices": [
        "A wheel bearing",
        "The ring and pinion mesh under changing load",
        "A CV joint",
        "The clutch release bearing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The tooth load reverses, so the mesh noise changes. (a) A wheel bearing changes with steering load, not drive load. (c) A CV joint clicks on turns. (d) The release bearing is noisy with the pedal pressed."
    },
    {
      "q": "Clicking only on sharp turns is the classic symptom of:",
      "choices": [
        "A worn synchronizer",
        "A worn outer CV joint",
        "A slipping clutch",
        "A bent driveshaft"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Full steering angle exposes the worn joint. (a) A synchronizer grinds on shifts. (c) A slipping clutch raises engine speed. (d) A bent shaft vibrates with road speed."
    },
    {
      "q": "A vibration that is worst at one particular road speed and grows with speed often means:",
      "choices": [
        "A slipping clutch",
        "An imbalance \u2014 a tire, wheel, or driveshaft that has lost balance",
        "A dragging brake",
        "Low gear oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Imbalance peaks at a resonant speed. (a) A slipping clutch raises engine speed, not vibration. (c) A dragging brake heats and pulls. (d) Low oil causes gear wear and noise."
    },
    {
      "q": "The cheapest proving test for a suspected tire vibration is to:",
      "choices": [
        "Replace the differential",
        "Swap the front tires to the rear and see if the vibration moves",
        "Replace the driveshaft",
        "Rebuild the transmission"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A vibration that moves with the tires is a tire problem. (a), (c), and (d) replace parts before proving the cause."
    },
    {
      "q": "A rumble that gets louder when turning one way points to:",
      "choices": [
        "A CV joint",
        "A wheel bearing, loaded more on one side of the turn",
        "The ring and pinion",
        "The clutch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Turning loads one side's bearing more. (a) A CV joint clicks, it does not rumble. (c) The ring and pinion whine with load, not steering. (d) The clutch follows engine speed."
    }
  ],
  "studyGuide": "\n<h3>Module 7 \u2014 Noise & Vibration Diagnosis: Quick Reference</h3>\n<p><strong>Core idea:</strong> The condition names the part \u2014 engine speed, road speed, one gear, steering angle, or load.</p>\n<p><strong>Isolation tests:</strong> Coast in Neutral (engine vs. road speed) \u00b7 turn left/right (CV joint / bearing) \u00b7 accelerate vs. coast (gear mesh) \u00b7 tire swap (tire vs. driveline).</p>\n<p><strong>Feel:</strong> Steering wheel = front \u00b7 floor/seat = middle or rear \u00b7 fast buzz = driveshaft speed \u00b7 slow thump = wheel speed.</p>\n<p><strong>Cases:</strong> Road-speed whine = ring and pinion \u00b7 clicking on turns = outer CV joint \u00b7 clunk on takeoff = U-joint or slip yoke \u00b7 rumble on one turn direction = wheel bearing.</p>\n<p><strong>Watch out:</strong> Check the tires first \u2014 the cheapest proving test is a tire swap.</p>\n<p><strong>Self-check:</strong> For each of the five cases, name the condition and the part. If you can do all five, you have this module.</p>\n"
};
