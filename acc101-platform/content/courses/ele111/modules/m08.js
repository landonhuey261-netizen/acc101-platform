module.exports = {
  "number": 8,
  "slug": "charge-controllers-dc-coupling",
  "title": "Charge Controllers & DC Coupling",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a charge controller does.",
    "Compare PWM and MPPT charge controllers.",
    "Explain DC coupling and AC coupling for battery systems.",
    "Size a charge controller for an array.",
    "Describe the charging stages: bulk, absorption, and float."
  ],
  "sections": [
    {
      "heading": "What a Charge Controller Does",
      "html": "<p>A <strong>charge controller</strong> sits between the PV array and the battery bank, and its job is to charge the batteries correctly — not too fast, not too far, and never overcharged. Without a controller, the array would push current into the battery until the battery was damaged; with a controller, the charging follows a profile the battery's chemistry needs, the battery is protected from overcharge and over-discharge, and the system's loads can be powered from the battery safely. The charge controller is the brain of an off-grid or DC-coupled system, and it is sized for the array it serves.</p><p>The controller also protects the system in the other direction: it prevents the battery from discharging back into the array at night (through a blocking diode or an electronic switch), and it can disconnect the loads if the battery voltage falls too low, so the battery is not drained to destruction. In a DC-coupled hybrid system, the charge controller's job is done by the hybrid inverter, which manages the same charging profile — but the principles are identical, and a technician who understands a standalone charge controller understands the hybrid inverter's charging too.</p>"
    },
    {
      "heading": "PWM vs MPPT Charge Controllers",
      "html": "<p>There are two kinds of charge controller. A <strong>PWM</strong> (pulse-width modulation) controller connects the array directly to the battery and switches the connection on and off rapidly to control the charging — simple, cheap, and reliable, but it forces the array to run at the battery's voltage, which is below the array's maximum power point, so some of the array's power is wasted. A PWM controller is a reasonable choice for a small system where the array voltage is close to the battery voltage.</p><p>An <strong>MPPT</strong> charge controller has a DC-to-DC converter inside: it lets the array run at its own maximum power point (a higher voltage than the battery) and converts the extra voltage into extra charging current. An MPPT controller harvests 20–30% more energy than a PWM controller from the same array in many conditions, and it is the standard choice for any system of real size. The trade-off is cost and complexity — and the technician must size the MPPT controller for the array's voltage and current, just as with an inverter.</p><div class=\"callout\"><strong>Key idea:</strong> PWM forces the array to the battery's voltage and wastes power. MPPT lets the array run at its own maximum power point and converts the extra voltage into extra charging current — 20–30% more harvest.</div>"
    },
    {
      "heading": "DC Coupling vs AC Coupling",
      "html": "<p>Batteries can be connected to a PV system in two ways. In a <strong>DC-coupled</strong> system, the battery connects on the DC side — through a charge controller or a hybrid inverter — so the array's DC charges the battery directly, with only one conversion (DC to DC) between the array and the battery. DC coupling is more efficient when the power is stored and used later, because it avoids converting DC to AC and back to DC. It is the natural choice for a new off-grid or hybrid system.</p><p>In an <strong>AC-coupled</strong> system, the battery connects on the AC side through a separate battery inverter: the array's inverter makes AC, the battery inverter converts that AC back to DC to charge the battery, and converts it back to AC again when the battery discharges. That is two extra conversions, so it is less efficient — but it is the practical way to add batteries to an existing grid-tied system without replacing the inverter. The technician's job is to know which coupling a system uses, because the wiring, the sizing, and the troubleshooting are different for each.</p>"
    },
    {
      "heading": "Sizing a Controller and the Charging Stages",
      "html": "<p>A charge controller is sized by two numbers: its maximum input voltage and its maximum output current. The input voltage must exceed the array's cold-weather open-circuit voltage (the same cold-day calculation as Module 5), and the output current must exceed the array's maximum charging current — the array's short-circuit current times the number of parallel strings, with the 125% sizing factor from Article 690. A controller that is undersized will clip the array's output or fail; a controller that is oversized costs more than it needs to.</p><p>Charging happens in three stages. <strong>Bulk</strong> is the first stage: the controller pushes as much current as the array can make into the battery, and the battery voltage rises. <strong>Absorption</strong> is the second stage: the controller holds the voltage at a set level while the current tapers off, filling the battery the rest of the way. <strong>Float</strong> is the third stage: the controller holds a lower voltage to keep the battery full without overcharging it. The setpoints for each stage depend on the battery's chemistry — lead-acid and LFP have different voltages — and they are programmed into the controller from the battery manufacturer's data. Wrong setpoints are a common cause of early battery failure.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>A charge controller charges the battery correctly — not too fast, not too far — and protects it from overcharge and over-discharge.</li><li>PWM controllers are simple and cheap but waste power; MPPT controllers harvest 20–30% more and are the standard for real systems.</li><li>DC coupling connects the battery on the DC side (efficient, best for new systems); AC coupling connects on the AC side (practical retrofit for existing grid-tied systems).</li><li>Size a controller by its maximum input voltage (cold-weather Voc) and its maximum output current (125% of Isc × strings).</li><li>Charging stages: bulk (maximum current), absorption (held voltage, tapering current), float (maintenance voltage).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using a PWM controller on a large array and losing 20–30% of the harvest. Match the controller to the system size — MPPT for any system of real size.</div><div class=\"callout\"><strong>Common mistake:</strong> Programming the wrong charging setpoints for the battery chemistry. Lead-acid and LFP need different voltages — use the battery manufacturer's data, not a guess.</div><p><strong>Ready-to-Work link:</strong> If you can compare PWM and MPPT, explain DC vs AC coupling, and size a charge controller, you have this module. Module 9 goes to the site itself: assessment, shading, and sizing.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Charge controller",
      "def": "The device between a PV array and a battery bank that manages charging and protects the battery."
    },
    {
      "term": "PWM controller",
      "def": "A pulse-width modulation charge controller that connects the array directly to the battery, switching on and off to control charging."
    },
    {
      "term": "MPPT charge controller",
      "def": "A charge controller with a DC-to-DC converter that lets the array run at its maximum power point."
    },
    {
      "term": "DC coupling",
      "def": "Connecting a battery system on the DC side of a PV system, through a charge controller or hybrid inverter."
    },
    {
      "term": "AC coupling",
      "def": "Connecting a battery system on the AC side, through a separate battery inverter."
    },
    {
      "term": "Bulk stage",
      "def": "The first charging stage: maximum current into the battery while voltage rises."
    },
    {
      "term": "Absorption stage",
      "def": "The second charging stage: voltage held steady while current tapers off."
    },
    {
      "term": "Float stage",
      "def": "The third charging stage: a lower maintenance voltage that keeps the battery full without overcharging."
    },
    {
      "term": "Overcharge",
      "def": "Charging a battery past its full point, which damages it."
    },
    {
      "term": "Low-voltage disconnect",
      "def": "A controller function that disconnects loads when the battery voltage falls too low, protecting the battery."
    },
    {
      "term": "Blocking diode",
      "def": "A device that prevents a battery from discharging back into the array at night."
    },
    {
      "term": "Charging setpoints",
      "def": "The voltage settings for the bulk, absorption, and float stages, set for the battery's chemistry."
    }
  ],
  "video": {
    "title": "String Inverters with Power Optimizers",
    "embedUrl": "https://www.youtube.com/embed/nDyZELxabI0",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Off-Grid Solar Battery Strings: Why 48-Volt Systems Matter",
        "url": "https://www.youtube.com/watch?v=FJzeXWjCqSw"
      },
      {
        "title": "Solar Inverters: Types, Benefits, and How They Work",
        "url": "https://www.youtube.com/watch?v=ip4ECSkSGgY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An array produces 40 A at its maximum power point. A PWM controller and an MPPT controller are each available. Which harvests more energy, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The MPPT controller harvests more — typically 20–30% more. Step 2: The MPPT controller lets the array run at its own maximum power point (a higher voltage than the battery) and converts the extra voltage into extra charging current. Step 3: The PWM controller forces the array to the battery's voltage, wasting the difference.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A customer has an existing grid-tied system with a string inverter and wants to add batteries without replacing the inverter. Which coupling do you recommend, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend AC coupling. Step 2: A separate battery inverter connects on the AC side, so the existing string inverter stays as it is. Step 3: DC coupling would require replacing the string inverter with a hybrid inverter — more work and more cost on an existing system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A charge controller's maximum input voltage is 150 V. The array's cold-weather Voc is 140 V. Is the controller suitable? What if the cold-weather Voc were 160 V?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 140 V the controller is suitable — the cold-weather Voc is within its 150 V maximum. Step 2: At 160 V it is not suitable — the array would exceed the controller's maximum input voltage on a cold day and could damage it. Step 3: Choose a controller with a higher input voltage rating, or shorten the string.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Describe the three charging stages in order, and say what the controller does in each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bulk — the controller pushes maximum current into the battery and the voltage rises. Step 2: Absorption — the controller holds the voltage steady while the current tapers off, filling the battery the rest of the way. Step 3: Float — the controller holds a lower maintenance voltage to keep the battery full without overcharging it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An array has 3 parallel strings, each with an Isc of 10 A. What is the minimum charge controller output current rating? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum current = 3 × 10 = 30 A. Step 2: 125% sizing: 30 × 1.25 = 37.5 A. Step 3: The controller's output current rating must be at least 37.5 A — a 40 A controller is the next standard size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A lead-acid battery bank is failing after one year. The charging setpoints were programmed for LFP. What went wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lead-acid and LFP need different charging voltages — LFP setpoints are wrong for lead-acid. Step 2: The wrong setpoints overcharged or undercharged the lead-acid bank, damaging it. Step 3: Reprogram the setpoints from the battery manufacturer's data for the actual chemistry, and replace the damaged bank.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A charge controller's job is to:",
      "choices": [
        "Convert DC to AC",
        "Charge the battery correctly and protect it from overcharge and over-discharge",
        "Mount the modules",
        "Measure sunlight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The controller manages charging and protects the battery. (a) Converting DC to AC is the inverter's job. (c) Mounting is the racking's job. (d) Measuring sunlight is a sensor's job."
    },
    {
      "q": "An MPPT charge controller harvests more energy than a PWM controller because it:",
      "choices": [
        "Is cheaper",
        "Lets the array run at its maximum power point and converts extra voltage into extra current",
        "Has no electronics",
        "Works at night"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MPPT uses a DC-to-DC converter to capture the array's full power. (a) MPPT costs more, not less. (c) MPPT has more electronics than PWM. (d) No controller works at night."
    },
    {
      "q": "DC coupling means the battery connects:",
      "choices": [
        "On the AC side through a separate battery inverter",
        "On the DC side, through a charge controller or hybrid inverter",
        "Directly to the grid",
        "To the utility meter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DC coupling is on the DC side. (a) That is AC coupling. (c) Batteries do not connect directly to the grid. (d) The meter is the utility's equipment."
    },
    {
      "q": "AC coupling is the practical choice when:",
      "choices": [
        "Building a new off-grid system",
        "Adding batteries to an existing grid-tied system without replacing the inverter",
        "The array is small",
        "There is no battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AC coupling adds a battery inverter on the AC side and leaves the existing inverter in place. (a) A new off-grid system is usually DC-coupled. (c) Array size alone does not decide the coupling. (d) AC coupling is about adding a battery."
    },
    {
      "q": "The three charging stages in order are:",
      "choices": [
        "Float, absorption, bulk",
        "Bulk, absorption, float",
        "Absorption, bulk, float",
        "Float, bulk, absorption"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bulk (maximum current), absorption (held voltage, tapering current), float (maintenance voltage). (a), (c), and (d) are the wrong order."
    },
    {
      "q": "In the absorption stage, the controller:",
      "choices": [
        "Pushes maximum current",
        "Holds the voltage steady while the current tapers off",
        "Disconnects the battery",
        "Turns off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Absorption holds the voltage while current tapers. (a) Maximum current is the bulk stage. (c) Disconnection is a protection function, not absorption. (d) The controller does not turn off."
    },
    {
      "q": "A charge controller must be sized for:",
      "choices": [
        "Only the battery voltage",
        "Its maximum input voltage (cold-weather Voc) and its maximum output current (125% of Isc × strings)",
        "Only the roof size",
        "Only the inverter brand"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both the input voltage and the output current must be sized. (a) Battery voltage alone is not enough. (c) Roof size does not size a controller. (d) Inverter brand is irrelevant to the controller's ratings."
    },
    {
      "q": "Charging setpoints must be programmed from:",
      "choices": [
        "A guess",
        "The battery manufacturer's data for the actual chemistry",
        "The inverter's color",
        "The roof's age"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Setpoints depend on the battery's chemistry and come from the manufacturer. (a) Guessing destroys batteries. (c) Inverter color is irrelevant. (d) Roof age is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Charge Controllers & DC Coupling: Quick Reference</h3>\n<p><strong>Core idea:</strong> The charge controller charges the battery correctly and protects it — not too fast, not too far, never overcharged, never drained to destruction.</p>\n<p><strong>PWM vs MPPT:</strong> PWM forces the array to battery voltage and wastes power · MPPT lets the array run at its maximum power point and harvests 20–30% more.</p>\n<p><strong>Coupling:</strong> DC coupling — battery on the DC side, efficient, best for new systems · AC coupling — battery on the AC side, practical retrofit for existing grid-tied systems.</p>\n<p><strong>Sizing:</strong> Input voltage ≥ cold-weather Voc · Output current ≥ 125% of Isc × parallel strings.</p>\n<p><strong>Stages:</strong> Bulk (max current) → Absorption (held voltage, tapering current) → Float (maintenance voltage). Setpoints from the battery manufacturer, for the actual chemistry.</p>\n<p><strong>Self-check:</strong> Size a controller for a 3-string array and name the three charging stages. If you can, you have this module.</p>\n"
};
