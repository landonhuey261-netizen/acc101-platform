// ase-a2 - Module 6: Electronic Controls & TCM
module.exports = {
  "number": 6,
  "slug": "electronic-controls-tcm",
  "title": "Electronic Controls & TCM",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain what the transmission control module (TCM) does and what inputs it uses.",
    "Describe the main sensors: speed sensors, throttle position, temperature, and range sensor.",
    "Explain adaptive learning: how the TCM adjusts shift timing as clutches wear.",
    "Describe how the TCM talks to the engine control module and why they must cooperate.",
    "Use scan data and codes to separate an electrical fault from a hydraulic one."
  ],
  "sections": [
    {
      "heading": "The TCM: A Computer for Shifting",
      "html": "<p>The transmission control module is the transmission's brain. It reads sensors, decides which gear the car needs, and switches solenoids to make it happen. On many vehicles the TCM is a separate module; on others its functions live inside the engine control module or a combined powertrain module. Either way, the job is the same: turn driver intent and vehicle conditions into clean, well-timed shifts.</p><p>The TCM's inputs tell it everything it needs. Input and output speed sensors tell it how fast the transmission is turning on each side of the gearsets \u2014 comparing them shows whether a clutch is slipping. Throttle position and engine load tell it how hard the driver is asking for power. Fluid temperature tells it whether to delay lock-up or soften shifts when cold. The range sensor tells it which selector position the driver chose.</p>"
    },
    {
      "heading": "Sensors That Matter Most",
      "html": "<p>The input speed sensor watches the turbine side of the transmission; the output speed sensor watches the output shaft. Their ratio should match the selected gear \u2014 if it does not, a clutch is slipping and the TCM knows it. The throttle position sensor (or the load signal from the engine module) tells the TCM whether the driver wants gentle cruising or full acceleration, which decides both shift timing and line pressure.</p><p>The fluid temperature sensor protects the transmission: when fluid is cold, the TCM may delay shifts and lock-up until the fluid can flow and seal properly. The transmission range sensor (sometimes called the neutral safety switch) reports the selector position and also prevents starting in gear. A faulty range sensor can cause a no-start, a wrong gear display, or a transmission that will not engage.</p>"
    },
    {
      "heading": "Adaptive Learning",
      "html": "<p>No two clutch packs wear exactly alike, and the same pack changes as it ages. Adaptive learning is how the TCM compensates: it watches how long each shift actually takes and adjusts the solenoid timing for the next one. If a clutch is taking a little longer to apply as it wears, the TCM starts its apply a little earlier, keeping shifts smooth for years.</p><p>That is why a battery disconnect or a module replacement can make a transmission shift oddly for a while \u2014 the learned values are gone and the TCM must relearn them over the next few drives. It is also why clearing codes and adaptations is part of the service procedure after a rebuild: the new clutches need the TCM to learn their timing from scratch, not apply the old pack's corrections.</p>"
    },
    {
      "heading": "Talking to the Engine Module",
      "html": "<p>The transmission and the engine must cooperate. During an upshift the TCM asks the engine module to briefly reduce torque \u2014 a momentary cut in spark or fuel \u2014 so the outgoing clutch can release and the incoming clutch can apply without a jolt. Without that cooperation, shifts would be harsh and clutch life would suffer. The two modules share a data network to make this happen in milliseconds.</p><p>The same cooperation runs the other way: the engine module tells the TCM the engine's load and speed, and the TCM tells the engine what gear is selected so idle speed and torque can be adjusted. When that communication breaks down \u2014 a network fault or a missing signal \u2014 the transmission may default to a single gear because it no longer trusts the data it needs to shift safely.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The TCM reads speed, throttle, temperature, and range sensors and switches solenoids to shift. Speed sensors reveal slip. Adaptive learning adjusts timing as clutches wear. The TCM and engine module cooperate on torque during shifts.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Replacing the TCM for a shift problem caused by a sensor. The module can only decide on the data it gets \u2014 a wrong speed signal makes a good module shift badly.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting to relearn after a repair. New clutches with old learned values shift harshly until the TCM relearns \u2014 always follow the relearn procedure after transmission work.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "TCM",
      "def": "Transmission control module \u2014 the computer that decides gears and commands solenoids."
    },
    {
      "term": "Input speed sensor",
      "def": "The sensor that measures transmission input (turbine) speed."
    },
    {
      "term": "Output speed sensor",
      "def": "The sensor that measures output shaft speed; compared with input speed, it reveals slip."
    },
    {
      "term": "Throttle position sensor",
      "def": "The sensor that reports how far the driver has pressed the accelerator."
    },
    {
      "term": "Fluid temperature sensor",
      "def": "The sensor that reports ATF temperature so the TCM can adjust shift behavior when cold or hot."
    },
    {
      "term": "Range sensor",
      "def": "The sensor that reports the selector position (Park, Reverse, Neutral, Drive); also part of the starting safety circuit."
    },
    {
      "term": "Adaptive learning",
      "def": "The TCM's process of adjusting shift timing over time as clutches wear."
    },
    {
      "term": "Torque reduction",
      "def": "The brief cut in engine torque during a shift, requested by the TCM so clutches can change smoothly."
    },
    {
      "term": "Data network",
      "def": "The communication link (such as CAN bus) that lets the engine and transmission modules share data."
    },
    {
      "term": "Diagnostic trouble code",
      "def": "A code the TCM stores when it detects a fault, read with a scan tool."
    },
    {
      "term": "Scan data",
      "def": "Live sensor readings and solenoid commands shown on a scan tool."
    },
    {
      "term": "Default mode",
      "def": "The safe single-gear mode the TCM uses when it cannot trust its inputs."
    },
    {
      "term": "Relearn",
      "def": "The procedure that lets the TCM learn new clutch timing after a repair or battery disconnect."
    },
    {
      "term": "Slip ratio",
      "def": "The comparison of input and output speed that shows whether a clutch is holding or slipping."
    }
  ],
  "video": {
    "title": "How Automatic Shifters Control the Gearbox",
    "embedUrl": "https://www.youtube.com/embed/l9AS4-AkZXM",
    "note": "A 3D look at how the shifter and electronic controls command the gearbox. Watch how a driver input becomes a solenoid command, and match each step to the TCM inputs in this module.",
    "more": [
      {
        "title": "Transmission Control Module (TCM) Repair \u2014 Ford Fiesta/Focus",
        "url": "https://www.youtube.com/watch?v=t15miMXA0Yc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List four inputs the TCM uses, and state what each one tells it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input and output speed \u2014 how fast each side of the gearsets turns, revealing slip. Step 2: Throttle position \u2014 how much power the driver wants. Step 3: Fluid temperature \u2014 whether shifts should be delayed or softened. Step 4: Range sensor \u2014 which selector position the driver chose.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How do the input and output speed sensors reveal a slipping clutch?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Their ratio should match the selected gear's ratio. Step 2: If the input turns faster than the gear ratio allows for the measured output, a clutch is slipping.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain adaptive learning in two sentences, and say why a transmission may shift oddly right after a battery disconnect.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The TCM watches how long each shift takes and adjusts solenoid timing to keep shifts smooth as clutches wear. Step 2: A disconnect erases those learned corrections, so the TCM must relearn them over the next few drives.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does the TCM ask the engine to cut torque briefly during an upshift?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The outgoing clutch must release and the incoming clutch must apply. Step 2: A brief torque cut removes the load during that handoff, so the shift is smooth and the clutches last longer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A transmission will not start in Park and the gear display is wrong. Which sensor do you check first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The range sensor. Step 2: It reports selector position and is part of the starting safety circuit \u2014 a wrong reading explains both the no-start and the wrong display.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The TCM and the engine module share data on a network. What happens to shifting if that communication fails?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The TCM loses the load and speed data it needs to choose gears. Step 2: It defaults to a single gear \u2014 limp mode \u2014 rather than shifting on bad data.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The TCM decides when to shift using:",
      "choices": [
        "Only the speedometer",
        "Sensor inputs including speed, throttle, temperature, and selector position",
        "The radio volume",
        "The fuel gauge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The TCM combines several sensor inputs to choose gears. (a) The speedometer is one display, not the whole input set. (c) and (d) have nothing to do with shifting."
    },
    {
      "q": "Comparing input and output speed sensor readings tells the TCM:",
      "choices": [
        "The fuel level",
        "Whether a clutch is slipping, because the ratio should match the selected gear",
        "The tire pressure",
        "The oil level"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A ratio mismatch means slip. (a), (c), and (d) are measured by other systems."
    },
    {
      "q": "Adaptive learning means the TCM:",
      "choices": [
        "Never changes its shift timing",
        "Adjusts solenoid timing over time as clutches wear, to keep shifts smooth",
        "Learns the driver's favorite radio station",
        "Changes the gear ratios"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Learned corrections compensate for wear. (a) That is the opposite of adaptive. (c) The TCM does not handle the radio. (d) Gear ratios are fixed by the gearsets."
    },
    {
      "q": "During an upshift, the TCM asks the engine module to:",
      "choices": [
        "Increase torque",
        "Briefly reduce torque so the clutches can change smoothly",
        "Turn off the headlights",
        "Open the throttle fully"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A brief torque cut unloads the clutches during the handoff. (a) More torque would make the shift harsh. (c) and (d) are unrelated to shifting."
    },
    {
      "q": "A wrong gear display and a no-start in Park most likely point to:",
      "choices": [
        "A worn clutch pack",
        "A faulty transmission range sensor",
        "A bad torque converter",
        "Low line pressure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The range sensor reports selector position and guards starting. (a) A worn clutch causes slip, not a wrong display. (c) The converter does not report position. (d) Low pressure causes slip, not a no-start with a wrong display."
    },
    {
      "q": "After a transmission rebuild, the TCM should:",
      "choices": [
        "Keep the old learned values",
        "Relearn shift timing for the new clutches",
        "Be thrown away",
        "Ignore the speed sensors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). New clutches need new learned timing. (a) Old corrections fit worn clutches, not new ones. (c) The module is reused. (d) Speed sensors are essential inputs."
    },
    {
      "q": "When fluid is cold, the TCM may:",
      "choices": [
        "Shift immediately into overdrive",
        "Delay shifts and lock-up until the fluid can flow and seal properly",
        "Apply the parking brake",
        "Turn off the pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cold fluid flows poorly, so the TCM waits. (a) Overdrive with cold fluid would be harsh. (c) The TCM does not apply the parking brake. (d) The pump runs whenever the engine runs."
    },
    {
      "q": "If the TCM loses communication with the engine module, it will usually:",
      "choices": [
        "Shift normally",
        "Default to a single gear rather than shift on bad data",
        "Reverse the car",
        "Drain the fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Missing data means a safe default gear. (a) It cannot shift safely without load data. (c) It never commands Reverse on its own. (d) It cannot drain fluid."
    }
  ],
  "studyGuide": "\n<h3>Module 6 \u2014 Electronic Controls & TCM: Quick Reference</h3>\n<p><strong>Core idea:</strong> The TCM turns sensor data into solenoid commands \u2014 and it learns as clutches wear.</p>\n<p><strong>Key inputs:</strong> Input speed \u00b7 output speed (slip check) \u00b7 throttle \u00b7 fluid temperature \u00b7 range sensor.</p>\n<p><strong>Adaptive learning:</strong> Shift timing adjusts for wear; relearn after repairs or a battery disconnect.</p>\n<p><strong>Teamwork:</strong> The TCM asks the engine for a brief torque cut during shifts; both modules share data on the network.</p>\n<p><strong>Watch out:</strong> A bad sensor makes a good TCM shift badly \u2014 test inputs before replacing the module.</p>\n<p><strong>Self-check:</strong> Explain how the TCM spots a slipping clutch and why it cuts engine torque on an upshift. If both answers are clear, you have this module.</p>\n"
};
