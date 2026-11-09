// Auto-generated original course content for College Without College
module.exports = {
  "number": 11,
  "slug": "hybrid-ev-hvac",
  "title": "Hybrid/EV HVAC",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a hybrid or electric car cannot heat the cabin the way a petrol car does.",
    "Describe how an electric A/C compressor differs from a belt-driven one.",
    "Explain why hybrid and EV air conditioning can run with the engine off.",
    "State the high-voltage safety rules before touching any high-voltage part.",
    "Explain what a heat pump does in an electric car."
  ],
  "sections": [
    {
      "heading": "No Engine Heat to Borrow",
      "html": "<p>A petrol car heats its cabin with waste heat from the engine, but a hybrid's engine stops often and an electric car has no engine at all. There is no steady stream of hot coolant to borrow, so heating must come from somewhere else: an electric heater, or a heat pump that moves heat from outside air into the cabin. That changes both the parts and the diagnosis — a no-heat complaint on an EV is an electrical and heat-pump problem, not a coolant problem.</p>\n<p>The high-voltage battery that powers the car runs at roughly 200 to 450 volts DC. That is far above the 12-volt system a technician is used to, and it can kill. Before any high-voltage work, the system must be de-powered by the proper procedure, the service disconnect removed where fitted, and the absence of voltage proved with a meter rated for the job. Insulated gloves and tools, and training, are not optional extras — they are the job.</p>\n"
    },
    {
      "heading": "The Electric Compressor",
      "html": "<p>In a hybrid or EV, the A/C compressor is usually driven by its own electric motor, powered from the high-voltage system through an inverter, instead of by a belt from the engine. That is why the air conditioning can keep running when the engine is off: the compressor does not need the engine to turn. It also means the compressor is a high-voltage part, and its connectors and wiring must be treated with the same respect as any other high-voltage component.</p>\n<p>An electric compressor also uses a different oil from a belt-driven one. The oil must not conduct electricity, because it circulates inside a compressor whose motor runs on high voltage. Using the wrong oil can create a path for current where none should exist, so the oil type is part of the specification, not a detail to guess at.</p>\n"
    },
    {
      "heading": "Heating with a Heat Pump",
      "html": "<p>A heat pump is the refrigeration loop run backwards: it collects heat from outside air — even cold outside air holds some heat — and dumps it into the cabin. The same parts do the work, with valves that reverse the flow. On a mild day a heat pump warms the cabin using far less battery energy than a plain electric heater, which matters because every unit of heat from the battery is a unit of driving range given up.</p>\n<p>On a very cold day, a heat pump alone may not keep up, and the car may add heat from an electric heater to help. A technician who understands the loop in both directions can tell a heat-pump fault from a heater fault, instead of replacing parts in the wrong system.</p>\n"
    },
    {
      "heading": "What Changes for the Technician",
      "html": "<p>The diagnostic thinking is the same — gauges, patterns, airflow, controls — but the power source and the safety rules are different. The compressor may be commanded on by the climate module while the engine is silent, which surprises a technician who expects a belt and a clutch click. And the first step of any high-voltage job is always the same: de-power, prove it dead, and only then touch. No diagnosis is worth skipping that step.</p>\n<p>Cabin filters, blowers, doors, and ducts are unchanged — the air side of the system is the same in every car. What is new is the heat source, the compressor drive, and the voltage. Learn those three differences and the rest of the course still applies.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Hybrids and EVs have little or no engine heat, so heating comes from an electric heater or a heat pump.</li><li>The A/C compressor is usually electric, powered from the high-voltage system, so it can run with the engine off.</li><li>High-voltage packs run roughly 200–450 V DC — de-power and prove it dead before touching anything.</li><li>Electric compressors need non-conductive oil; the wrong oil is a safety fault.</li><li>A heat pump moves heat from outside air into the cabin, saving battery range.</li></ul></p>\n<p><strong>Common mistake:</strong> Treating a hybrid or EV like a petrol car — expecting a belt-driven compressor, or touching high-voltage parts without de-powering. The system will not forgive either mistake.</p>\n<p><strong>Ready-to-Work link:</strong> If you can explain why the compressor can run with the engine off and state the high-voltage safety rule, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "High-voltage battery",
      "def": "The traction battery that powers a hybrid or EV, running at roughly 200–450 V DC."
    },
    {
      "term": "De-powering",
      "def": "The proper procedure to switch off and isolate the high-voltage system before work."
    },
    {
      "term": "Service disconnect",
      "def": "A plug or switch that isolates the high-voltage battery for service."
    },
    {
      "term": "Inverter",
      "def": "The part that changes DC from the battery into the AC that drives electric motors."
    },
    {
      "term": "Electric compressor",
      "def": "An A/C compressor driven by its own electric motor, not by an engine belt."
    },
    {
      "term": "Heat pump",
      "def": "A refrigeration loop run in reverse to move heat from outside air into the cabin."
    },
    {
      "term": "Insulated gloves",
      "def": "Gloves rated for high voltage, worn when working near high-voltage parts."
    },
    {
      "term": "Non-conductive oil",
      "def": "Compressor oil that does not conduct electricity, required in electric compressors."
    },
    {
      "term": "Electric heater",
      "def": "A heater that warms cabin air directly from electricity, used where there is no engine heat."
    },
    {
      "term": "Prove it dead",
      "def": "Testing with a suitable meter to confirm no voltage is present before touching a circuit."
    },
    {
      "term": "Regenerative braking",
      "def": "Recovering energy when slowing down, covered in the hybrid program; it also affects cabin heating demand."
    },
    {
      "term": "Range",
      "def": "How far an EV can drive on a charge; heating the cabin uses battery energy and reduces it."
    },
    {
      "term": "High-voltage wiring",
      "def": "Wiring carrying traction-battery voltage, usually marked with bright orange covers."
    },
    {
      "term": "12-volt system",
      "def": "The car's ordinary low-voltage system for lights, controls, and accessories."
    }
  ],
  "video": {
    "title": "2004-2009 Toyota Prius High Voltage System Operation",
    "embedUrl": "https://www.youtube.com/embed/UxuqHcUbSQ0",
    "note": "Professor John Kelly at Weber State explains the Toyota Prius high-voltage system. Watch how the high-voltage battery, the inverter, and the electric motor work together — and remember the safety rules in this module before anyone touches a high-voltage part.",
    "more": [
      {
        "title": "How a Car's HVAC System Works",
        "url": "https://www.youtube.com/watch?v=04MlTepEIz4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain why a hybrid car cannot heat its cabin the way a petrol car does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A petrol car borrows waste heat from an engine that runs all the time. Step 2: A hybrid's engine stops often, so there is no steady hot coolant. Step 3: Heating must come from an electric heater or a heat pump instead.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why can the air conditioning in a hybrid or EV keep running with the engine off?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The compressor is driven by its own electric motor, not by an engine belt. Step 2: That motor runs from the high-voltage battery through an inverter. Step 3: So cooling does not need the engine to be turning.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> State the high-voltage safety rule in one paragraph, as you would say it to a new apprentice.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: High-voltage packs run roughly 200–450 V DC and can kill. Step 2: De-power the system by the proper procedure, remove the service disconnect where fitted, and prove it dead with a suitable meter. Step 3: Only then touch anything, wearing insulated gloves and using insulated tools.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why must an electric compressor use non-conductive oil?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The compressor's motor runs on high voltage and the oil circulates inside it. Step 2: Conductive oil could carry current where it should not go. Step 3: The oil type is part of the specification — the wrong oil is a safety fault, not a small mistake.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain how a heat pump warms a cabin, and why it saves battery range compared with a plain electric heater.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A heat pump runs the refrigeration loop in reverse, moving heat from outside air into the cabin. Step 2: Moving heat takes less energy than making heat from electricity. Step 3: Less battery energy spent on heat means more range left for driving.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A technician hears no clutch click and sees no belt on a hybrid's compressor. Is something broken? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — there is no belt or clutch to click. Step 2: The compressor is electric and is switched on by the climate module. Step 3: Judge it by whether it runs and cools, not by listening for a clutch.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A hybrid or EV cannot heat its cabin like a petrol car because:",
      "choices": [
        "It has no heater core",
        "Its engine stops often or it has no engine, so there is no steady engine heat to borrow",
        "Its blower is electric",
        "Its windows are sealed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Without a constantly running engine there is no steady hot coolant. (a) Some hybrids still have a heater core, but it has little heat to use. (c) The blower is electric in every car. (d) Windows do not affect the heat source."
    },
    {
      "q": "In a hybrid or EV, the A/C compressor is usually:",
      "choices": [
        "Belt-driven from the engine",
        "Driven by its own electric motor from the high-voltage system",
        "Driven by the blower motor",
        "Not fitted at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An electric compressor runs from the high-voltage battery through an inverter. (a) That is the petrol-car layout. (c) The blower moves cabin air. (d) Hybrids and EVs do have air conditioning."
    },
    {
      "q": "Hybrid and EV high-voltage packs run at roughly:",
      "choices": [
        "12 V DC",
        "200–450 V DC",
        "1,000 V DC",
        "240 V AC only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Traction packs run at roughly 200–450 V DC. (a) 12 V is the ordinary low-voltage system. (c) That is far above the usual pack range. (d) The pack is DC, not AC only."
    },
    {
      "q": "Before touching any high-voltage part, a technician must:",
      "choices": [
        "Wear safety glasses only",
        "De-power the system by the proper procedure and prove it dead with a suitable meter",
        "Disconnect the 12-volt battery only",
        "Wait five minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). De-powering and proving no voltage is present is the required first step. (a) Glasses alone do not protect against high voltage. (c) The 12-volt battery is a separate system. (d) Waiting alone does not prove the system is dead."
    },
    {
      "q": "An electric compressor needs non-conductive oil because:",
      "choices": [
        "It is cheaper",
        "The oil circulates inside a compressor whose motor runs on high voltage, and conductive oil could carry current",
        "It cools better",
        "It lasts longer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conductive oil inside a high-voltage motor creates a path for current. (a) Cost is not the reason. (c) Cooling is not the issue. (d) Life is not the reason."
    },
    {
      "q": "A heat pump warms a cabin by:",
      "choices": [
        "Burning fuel in the cabin",
        "Moving heat from outside air into the cabin, running the refrigeration loop in reverse",
        "Blowing hot air from the engine",
        "Heating the battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A heat pump collects heat from outside air and dumps it inside. (a) Nothing burns in the cabin. (c) There is no engine heat to blow. (d) Heating the battery does not warm the cabin."
    },
    {
      "q": "The air conditioning in a hybrid can run with the engine off because:",
      "choices": [
        "The engine never stops",
        "The compressor is electric and does not need the engine to turn",
        "The blower drives the compressor",
        "The battery is 12 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An electric compressor runs from the high-voltage system, independent of the engine. (a) Hybrid engines stop often. (c) The blower moves air, not refrigerant. (d) The 12-volt system does not drive the compressor."
    },
    {
      "q": "High-voltage wiring in a hybrid or EV is usually marked by:",
      "choices": [
        "Black covers",
        "Bright orange covers",
        "No marking at all",
        "Blue tape"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Orange covers mark high-voltage wiring so it is easy to recognise. (a) Black covers are ordinary wiring. (c) High-voltage wiring is marked. (d) Tape is not the marking system."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Hybrid/EV HVAC: Quick Reference</h3>\n<p><strong>Heat:</strong> Little or no engine heat — heating comes from an electric heater or a heat pump.</p>\n<p><strong>Compressor:</strong> Electric, powered from the high-voltage system, so it can run with the engine off. Needs non-conductive oil.</p>\n<p><strong>Safety:</strong> Packs run roughly 200–450 V DC. De-power, remove the service disconnect, prove it dead, then touch.</p>\n<p><strong>Heat pump:</strong> Refrigeration loop in reverse — moves heat from outside air into the cabin, saving battery range.</p>\n<p><strong>Self-check:</strong> Explain why the compressor can run with the engine off and state the high-voltage safety rule.</p>\n"
};
