// Auto-generated original course content for College Without College
module.exports = {
  "number": 6,
  "slug": "automatic-climate-control",
  "title": "Automatic Climate Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between manual and automatic climate control.",
    "Describe the sensors an automatic system uses to hold a set temperature.",
    "Explain what blend, mode, and recirculation doors do.",
    "Diagnose a system stuck on one temperature or one vent position.",
    "Explain why automatic systems run the A/C in defrost mode."
  ],
  "sections": [
    {
      "heading": "Manual or Automatic: Who Is in Charge?",
      "html": "<p>In a manual system, the driver sets the fan speed, the temperature knob, and the vent position, and the system holds those settings until the driver changes them. In an automatic system, the driver sets a target temperature and the system does the rest: it chooses fan speed, blends hot and cold air, cycles the compressor, and switches vents to reach and hold that temperature.</p>\n<p>Automatic control is not magic — it is a loop. Sensors report what is happening, a control module compares that with what the driver asked for, and it moves doors, the blower, and the compressor to close the gap. When the loop breaks, the system usually sticks at one extreme, which is itself a clue.</p>\n"
    },
    {
      "heading": "The Sensors That See the Cabin",
      "html": "<p>An automatic system watches several temperatures at once. A cabin temperature sensor samples the air inside the car, often through a small grille with a tiny fan behind it. An outside temperature sensor reports the weather the system is fighting. A sun-load sensor on the dashboard measures sunshine hitting the cabin, because a sunny side needs more cooling than a shaded side.</p>\n<p>An evaporator temperature sensor watches the cold coil so it does not freeze, and a coolant temperature sensor tells the system when the engine is warm enough to give useful heat. If any sensor reports a value that cannot be true — such as a cabin temperature far outside any real range — the module may fall back to a fixed setting instead of trusting it.</p>\n"
    },
    {
      "heading": "Doors: Blend, Mode, and Recirculation",
      "html": "<p>Three kinds of doors shape the air. The blend door mixes heated air with cooled air to hit the target temperature. The mode door sends the finished air to the windscreen, the face vents, the floor, or a mix of them. The recirculation door chooses between fresh outside air and air already in the cabin, which cools faster on a hot day because it is already partly cooled.</p>\n<p>Each door is moved by an actuator — a small electric motor — or, on older cars, by a cable or vacuum motor. A clicking or tapping noise from behind the dashboard when the system starts up is often an actuator with stripped gears trying to move a door it can no longer drive.</p>\n"
    },
    {
      "heading": "When Automatic Control Goes Wrong",
      "html": "<p>A system stuck blowing hot air on one side and cold on the other usually has a blend-door actuator fault on one side, or a dual-zone system where one side's door has failed. A system stuck on the windscreen only has often lost its mode-door actuator or its vacuum supply, and it falls back to defrost as the safe default — because a clear windscreen matters more than comfort.</p>\n<p>Diagnosis starts with listening and watching: do the doors move when the settings change, does the fan speed change on its own as the cabin approaches the target, and does the compressor cycle? A scan tool can often read the sensor values and command the doors to move one at a time, which turns a guessing game into a test.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Manual: the driver sets everything. Automatic: the driver sets a temperature and the system does the rest.</li><li>Sensors report cabin, outside, sun-load, evaporator, and coolant temperatures.</li><li>Blend door sets temperature, mode door sets where air goes, recirculation door picks fresh or cabin air.</li><li>A stuck mode door often falls back to defrost as the safe default.</li><li>Automatic systems run the A/C in defrost because cold, dry air clears fog fastest.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing the control head when a door actuator or a sensor is at fault. The head is the brain; the doors and sensors are the hands and eyes — test them first.</p>\n<p><strong>Ready-to-Work link:</strong> If you can name the three doors, say what each one does, and explain why defrost uses the A/C, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Automatic climate control",
      "def": "A system that holds a driver-set temperature by adjusting fan, doors, and compressor itself."
    },
    {
      "term": "Manual HVAC",
      "def": "A system where the driver sets fan speed, temperature, and vent position directly."
    },
    {
      "term": "Cabin temperature sensor",
      "def": "A sensor that samples the air inside the car for the climate control module."
    },
    {
      "term": "Sun-load sensor",
      "def": "A dashboard sensor that measures sunshine hitting the cabin."
    },
    {
      "term": "Outside temperature sensor",
      "def": "A sensor reporting the temperature of the air outside the car."
    },
    {
      "term": "Evaporator temperature sensor",
      "def": "A sensor that watches the evaporator so it does not freeze."
    },
    {
      "term": "Blend door",
      "def": "The flap that mixes heated and cooled air to reach the target temperature."
    },
    {
      "term": "Mode door",
      "def": "The flap that directs airflow to the windscreen, face vents, or floor."
    },
    {
      "term": "Recirculation door",
      "def": "The flap that chooses fresh outside air or air already in the cabin."
    },
    {
      "term": "Actuator",
      "def": "A small electric motor that moves a blend, mode, or recirculation door."
    },
    {
      "term": "Dual-zone",
      "def": "A system that lets the driver and passenger sides hold different temperatures."
    },
    {
      "term": "Control module",
      "def": "The electronic brain that reads sensors and commands doors, blower, and compressor."
    },
    {
      "term": "Defrost mode",
      "def": "Directing warm, dry air to the windscreen to clear fog and ice."
    },
    {
      "term": "Fallback",
      "def": "The safe fixed setting a system uses when a sensor or door cannot be trusted."
    }
  ],
  "video": {
    "title": "How a Car's HVAC System Works",
    "embedUrl": "https://www.youtube.com/embed/04MlTepEIz4",
    "note": "This video walks through a car's HVAC system, including the doors and controls that direct air. Watch how the mode and blend doors decide where air goes and how warm it is.",
    "more": [
      {
        "title": "How Car Air Conditioning Works (Animation)",
        "url": "https://www.youtube.com/watch?v=_mIVKDBd8ts"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain the difference between manual and automatic climate control in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a manual system the driver sets fan speed, temperature, and vent position directly. Step 2: In an automatic system the driver sets only a target temperature, and the module adjusts fan, doors, and compressor to hold it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does an automatic system need a sun-load sensor as well as a cabin temperature sensor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cabin sensor reports the air temperature, but sunshine heats one side of the cabin more than the other. Step 2: The sun-load sensor tells the module to cool harder on the sunny side. Step 3: Without it, the system would under-cool on a bright day.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car blows hot air on the driver's side and cold air on the passenger side. What is the most likely fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A blend-door actuator fault on one side. Step 2: Each side of a dual-zone system has its own blend door. Step 3: If one door sticks, that side cannot mix air to the set temperature.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does an automatic system run the air conditioning when the driver selects defrost, even in winter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The evaporator cools and dries the air passing over it. Step 2: Dry air clears fog and ice from the windscreen faster than warm moist air. Step 3: The heater then warms that dry air, so the windscreen gets warm, dry air.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A mode door will not move off the windscreen position. Why is defrost the position it falls back to?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Defrost is the safe default. Step 2: A clear windscreen matters more for safety than comfort. Step 3: The system is designed so a failed door still keeps the driver's view clear.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Name three sensors an automatic system uses and say what each one reports.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cabin temperature sensor — the air temperature inside the car. Step 2: Outside temperature sensor — the weather the system is fighting. Step 3: Sun-load sensor — sunshine hitting the cabin (or evaporator sensor — the cold coil's temperature, to stop freeze-up).</p>"
    }
  ],
  "quiz": [
    {
      "q": "In an automatic climate control system, the driver sets:",
      "choices": [
        "Fan speed and vent position directly",
        "A target temperature, and the system adjusts the rest",
        "The refrigerant pressure",
        "The compressor speed directly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The driver picks a temperature; the module controls fan, doors, and compressor to hold it. (a) That is a manual system. (c) Refrigerant pressure is not a driver setting. (d) Compressor speed is not set by the driver."
    },
    {
      "q": "The sun-load sensor tells the module:",
      "choices": [
        "How much sunshine is hitting the cabin",
        "The temperature of the engine coolant",
        "How fast the blower is spinning",
        "Whether the doors are locked"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sunshine heats one side of the cabin, so the system must cool harder there. (b) That is the coolant temperature sensor. (c) Blower speed is commanded, not sensed this way. (d) Door locks are unrelated."
    },
    {
      "q": "The blend door's job is to:",
      "choices": [
        "Send air to the windscreen or the floor",
        "Mix heated air with cooled air to reach the target temperature",
        "Choose fresh or recirculated air",
        "Open the heater control valve"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The blend door mixes air streams to set temperature. (a) That is the mode door. (c) That is the recirculation door. (d) The valve controls coolant flow."
    },
    {
      "q": "The mode door's job is to:",
      "choices": [
        "Mix hot and cold air",
        "Direct airflow to the windscreen, face vents, or floor",
        "Measure cabin temperature",
        "Cycle the compressor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The mode door chooses where the finished air goes. (a) That is the blend door. (c) That is the cabin sensor. (d) The module cycles the compressor."
    },
    {
      "q": "Recirculation mode cools faster on a hot day because:",
      "choices": [
        "It brings in cold outside air",
        "It re-cools air already in the cabin, which is already partly cooled",
        "It turns the blower up",
        "It opens the windows"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cabin air is cooler than hot outside air, so re-cooling it takes less work. (a) Fresh-air mode brings in hot outside air. (c) Blower speed is separate. (d) Windows are not part of the system."
    },
    {
      "q": "Hot air on one side and cold air on the other in a dual-zone system most likely means:",
      "choices": [
        "The compressor has failed",
        "One side's blend-door actuator has failed",
        "The refrigerant is low",
        "The cabin filter is dirty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each side has its own blend door; one stuck door affects only its side. (a) A failed compressor would stop cooling on both sides. (c) Low refrigerant affects the whole system. (d) A dirty filter cuts airflow on both sides."
    },
    {
      "q": "Automatic systems run the A/C in defrost mode because:",
      "choices": [
        "It warms the engine faster",
        "Cold, dry air from the evaporator clears fog from the windscreen fastest",
        "It saves fuel",
        "It tests the compressor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The evaporator dries the air, and dry air clears fog and ice best; the heater then warms it. (a) Defrost does not warm the engine. (c) Running the A/C uses energy, not saves it. (d) Testing is not the purpose."
    },
    {
      "q": "A clicking noise from behind the dashboard at start-up often points to:",
      "choices": [
        "A failed compressor clutch",
        "An actuator with stripped gears trying to move a door",
        "A low refrigerant charge",
        "A blocked condenser"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A stripped actuator gear clicks as the motor turns without moving the door. (a) The clutch is under the hood. (c) Low charge affects cooling, not dashboard clicking. (d) The condenser is at the front of the car."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Automatic Climate Control: Quick Reference</h3>\n<p><strong>Manual vs automatic:</strong> Manual — driver sets everything. Automatic — driver sets a temperature; the module runs fan, doors, and compressor.</p>\n<p><strong>Sensors:</strong> Cabin, outside, sun-load, evaporator, and coolant temperature.</p>\n<p><strong>Doors:</strong> Blend (temperature) · Mode (where air goes) · Recirculation (fresh or cabin air).</p>\n<p><strong>Watch out:</strong> A stuck mode door falls back to defrost — the safe default. Defrost runs the A/C because dry air clears fog fastest.</p>\n<p><strong>Self-check:</strong> Name the three doors and say what each one does.</p>\n"
};
