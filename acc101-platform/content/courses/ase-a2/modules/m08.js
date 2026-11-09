// ase-a2 - Module 8: Road-Test & Pressure-Test Diagnosis
module.exports = {
  "number": 8,
  "slug": "road-test-pressure-test-diagnosis",
  "title": "Road-Test & Pressure-Test Diagnosis",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Plan a road test that checks every gear, every shift, and lock-up, and record what you find.",
    "Use a pressure gauge to test line pressure and compare readings with the expected range the service information states.",
    "Separate a hydraulic fault (low pressure) from an electrical fault (codes, solenoid commands).",
    "Read fluid condition and level as diagnostic evidence, not as an afterthought.",
    "Write a diagnosis that names the most likely cause and the next test that would prove it."
  ],
  "sections": [
    {
      "heading": "The Road Test Is the First Test",
      "html": "<p>No scan tool replaces driving the car. A road test checks what the customer actually feels: delayed engagement, slipping, harsh or late shifts, missing gears, shudder, and noise. Before moving, check fluid level and condition, note any codes, and confirm the complaint with the customer in their own words \u2014 'slips' can mean a dozen different things, and the road test pins it down.</p><p>Drive a planned route, not a random loop. Start with engagement: from Park to Drive and to Reverse, note any delay or harsh clunk. Then accelerate gently through every gear, noting the speed and feel of each shift. Repeat with firmer throttle. Test lock-up at steady cruise, test a downshift on a hill, and test manual gear selection if the car has it. Write down what happened at each step \u2014 memory is not a diagnostic record.</p>"
    },
    {
      "heading": "What Each Symptom Points To",
      "html": "<p>Delayed engagement \u2014 a pause before Drive or Reverse bites \u2014 often means low line pressure, a worn clutch pack with too much clearance, or a leaking seal that must fill before pressure builds. Slipping under load, where engine speed rises without road speed, points at a clutch that cannot hold: low pressure or worn friction. Harsh shifts point at pressure too high, a failed accumulator, or a control problem commanding full pressure.</p><p>A missing gear narrows the search fast: find which clutch or band makes that gear and test its circuit. A shudder at cruise points at the lock-up clutch. A flare \u2014 engine speed rising between gears during a shift \u2014 means the outgoing clutch released before the incoming one applied. Each symptom is a clue with a short list of causes, and the pressure test is what sorts the list.</p>"
    },
    {
      "heading": "The Pressure Test",
      "html": "<p>A pressure gauge screwed into the transmission's test port reads line pressure directly \u2014 the one number that tells you whether the hydraulics can do their job. The service information for that vehicle states the expected range for each test condition (selector position, throttle, gear); this course never invents those numbers, because they differ by transmission. Your job is to compare the gauge reading with the stated range and decide: in range, low, or high.</p><p>Low pressure in every gear points at the pump, the filter, or the regulator valve \u2014 the parts that make pressure for the whole system. Low pressure in one gear only points at that gear's clutch circuit: a leaking seal, a stuck valve, or a failed solenoid. High pressure points at a regulator fault or a control problem commanding maximum pressure. One gauge, read in the right conditions, separates a whole-system fault from a single-circuit fault in minutes.</p>"
    },
    {
      "heading": "Fluid, Codes, and the Written Diagnosis",
      "html": "<p>Fluid is evidence. Level, color, and smell go in the record before any part is ordered: low fluid explains low pressure, burnt fluid explains slipping clutches, and debris in the pan points at the worn part. Codes come next: a solenoid code means an electrical test, a ratio error code means a slipping clutch the TCM has already measured. Scan data shows what the TCM is commanding \u2014 if it commands a solenoid and the shift never happens, the fault is hydraulic, not electronic.</p><p>A good diagnosis names the most likely cause and the next test that would prove it. 'Low line pressure in all gears \u2014 test the pump and filter next' is a diagnosis. 'The transmission is bad' is not. The road test, the gauge, the fluid, and the codes each answer one question; together they point at one part.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Road-test every gear, every shift, and lock-up, and write it down. The pressure gauge separates whole-system faults from single-circuit faults. Fluid and codes are evidence, not guesses. A diagnosis names a cause and a proving test.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Replacing parts on a customer's word alone. 'It slips' needs a road test to become 'it slips in third gear under load' \u2014 and only then does the fault have an address.</div><div class=\"callout\"><strong>Common mistake:</strong> Skipping the pressure test because a scan tool showed no codes. A worn pump or a clogged filter sets no code \u2014 the gauge is the only tool that sees it.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Road test",
      "def": "A planned drive that checks engagement, every gear, every shift, lock-up, and downshifts, with findings written down."
    },
    {
      "term": "Delayed engagement",
      "def": "A pause between selecting Drive or Reverse and the gear biting \u2014 often low pressure or a worn clutch."
    },
    {
      "term": "Flare",
      "def": "Engine speed rising between gears during a shift, because the outgoing clutch released before the incoming one applied."
    },
    {
      "term": "Test port",
      "def": "The threaded port on the transmission case where a pressure gauge is connected."
    },
    {
      "term": "Line pressure test",
      "def": "Reading hydraulic pressure with a gauge and comparing it with the range the service information states."
    },
    {
      "term": "Whole-system fault",
      "def": "A fault affecting every gear, such as a weak pump or clogged filter \u2014 shown by low pressure in all gears."
    },
    {
      "term": "Single-circuit fault",
      "def": "A fault affecting one gear only, such as a leaking seal in that gear's clutch circuit."
    },
    {
      "term": "Ratio error code",
      "def": "A code the TCM sets when input and output speeds do not match the selected gear \u2014 proof a clutch is slipping."
    },
    {
      "term": "Scan data",
      "def": "Live readings from the TCM: sensor values, solenoid commands, and gear selection."
    },
    {
      "term": "Engagement",
      "def": "The moment a selected gear bites and the car is ready to move."
    },
    {
      "term": "Downshift",
      "def": "A shift to a lower gear, for acceleration or engine braking."
    },
    {
      "term": "Lock-up test",
      "def": "Checking at steady cruise whether the lock-up clutch applies and holds without shudder."
    },
    {
      "term": "Symptom",
      "def": "What the driver feels \u2014 slipping, harsh shifts, noise \u2014 the starting point of diagnosis."
    },
    {
      "term": "Proving test",
      "def": "The next test that would confirm or rule out the suspected cause."
    }
  ],
  "video": {
    "title": "ASE A2 Automatic Transmission Pressure Testing Diagnosis",
    "embedUrl": "https://www.youtube.com/embed/UsBjV9NHpxQ",
    "note": "An ASE A2-focused lesson on pressure testing diagnosis: how line pressure is tested and what the readings mean. Watch how a single gauge reading narrows the fault to the pump, the regulator, or one clutch circuit.",
    "more": [
      {
        "title": "Automatic Transmission Line Pressure Test",
        "url": "https://www.youtube.com/watch?v=cufcYG6z88s"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Plan a road test in four steps. What do you check, in order, from the moment you select Drive?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Engagement delay and harshness in Drive and Reverse. Step 2: Each upshift, gentle then firm throttle. Step 3: Lock-up at steady cruise. Step 4: Downshifts and manual gear selection.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the difference between a flare and a slip, and what each one tells you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A flare is engine speed rising between gears during a shift \u2014 the handoff was mistimed. Step 2: A slip is engine speed rising under load in a gear that should be holding \u2014 the clutch cannot hold. Step 3: Flare points at timing or pressure; slip points at holding capacity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Line pressure is low in every gear. Name the three parts you suspect, and explain why a single-gear fault is unlikely.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Suspect the pump, the filter, or the pressure regulator \u2014 they serve the whole system. Step 2: A single-gear fault would show low pressure in one gear only, because its circuit is separate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Line pressure is normal in all gears except one, where it reads low. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The pump and regulator are fine, since the other gears have normal pressure. Step 2: The fault is in that gear's circuit \u2014 a leaking seal, a stuck valve, or a failed solenoid for that clutch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The scan tool shows the TCM commanding a solenoid, but the shift never happens. Is the fault electrical or hydraulic, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hydraulic. Step 2: The command arrived, so the electronics did their job \u2014 the pressure never reached or held the clutch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is burnt fluid diagnostic evidence rather than just a maintenance item?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Burnt fluid means clutches or bands have slipped and overheated. Step 2: It points the diagnosis at the slipping clutch and warns that the fluid's cooling and hydraulic jobs are already compromised.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step of transmission diagnosis should be:",
      "choices": [
        "Replacing the solenoids",
        "Confirming the complaint with a planned road test and checking fluid",
        "Removing the transmission",
        "Clearing all codes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A road test and fluid check pin down what is actually wrong. (a) Parts come after diagnosis. (c) Removal is the last resort. (d) Clearing codes erases evidence."
    },
    {
      "q": "Delayed engagement most often points to:",
      "choices": [
        "Low line pressure, a worn clutch, or a leaking seal",
        "A bad battery",
        "Worn tires",
        "A loose exhaust"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Engagement needs pressure to fill the clutch \u2014 low pressure or excess clearance delays it. (b), (c), and (d) do not affect engagement timing."
    },
    {
      "q": "A flare during a shift means:",
      "choices": [
        "The engine is too powerful",
        "The outgoing clutch released before the incoming clutch applied",
        "The brakes are dragging",
        "The torque converter is locked"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A flare is a mistimed handoff between clutches. (a) Power is not the cause. (c) Dragging brakes slow the car, they do not raise engine speed between gears. (d) Lock-up would hold speed steady, not flare it."
    },
    {
      "q": "Low line pressure in every gear points to:",
      "choices": [
        "A single clutch circuit",
        "The pump, filter, or pressure regulator \u2014 the whole-system parts",
        "One solenoid",
        "The output speed sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Whole-system parts affect every gear. (a) A single circuit affects one gear. (c) One solenoid affects its own circuit. (d) A sensor fault sets codes, it does not drop pressure."
    },
    {
      "q": "Low pressure in one gear only, with normal pressure elsewhere, points to:",
      "choices": [
        "A weak pump",
        "That gear's clutch circuit \u2014 a leaking seal, stuck valve, or failed solenoid",
        "A clogged filter",
        "A faulty regulator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The rest of the system proves the pump and regulator work. (a), (c), and (d) would affect all gears."
    },
    {
      "q": "If the TCM commands a solenoid and the shift never happens, the fault is most likely:",
      "choices": [
        "Electrical \u2014 the TCM is bad",
        "Hydraulic \u2014 the pressure never reached or held the clutch",
        "A dead battery",
        "A worn tire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The command arrived, so the electronics worked. (a) A bad TCM would not command at all. (c) A dead battery stops everything. (d) Tires do not affect shifting."
    },
    {
      "q": "A ratio error code means:",
      "choices": [
        "The speedometer is wrong",
        "Input and output speeds do not match the selected gear \u2014 a clutch is slipping",
        "The fluid is low",
        "The battery is weak"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The TCM measured slip directly from its speed sensors. (a) The speedometer is a display. (c) Low fluid is a cause, not what the code measures. (d) Battery voltage is a different system."
    },
    {
      "q": "A good written diagnosis should:",
      "choices": [
        "Say 'the transmission is bad'",
        "Name the most likely cause and the next test that would prove it",
        "List every part in the transmission",
        "Promise a price"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A diagnosis is a cause plus a proving test. (a) That names no cause. (c) A parts list is not a diagnosis. (d) Price comes after the cause is proven."
    }
  ],
  "studyGuide": "\n<h3>Module 8 \u2014 Road-Test & Pressure-Test Diagnosis: Quick Reference</h3>\n<p><strong>Core idea:</strong> Drive it, gauge it, read the fluid, read the codes \u2014 then name the cause and the proving test.</p>\n<p><strong>Road test:</strong> Engagement \u00b7 every upshift (gentle + firm) \u00b7 lock-up \u00b7 downshifts \u00b7 manual selection. Write it down.</p>\n<p><strong>Pressure test:</strong> Low in all gears = pump/filter/regulator \u00b7 low in one gear = that gear's circuit \u00b7 high = regulator or control fault.</p>\n<p><strong>Symptoms:</strong> Delayed engagement (pressure/clearance) \u00b7 slip (holding) \u00b7 flare (timing) \u00b7 shudder at cruise (lock-up).</p>\n<p><strong>Watch out:</strong> A worn pump sets no code \u2014 only the gauge sees it.</p>\n<p><strong>Self-check:</strong> Given 'slips in third only, pressure normal elsewhere,' name the fault area and the next test. If you can, you have this module.</p>\n"
};
