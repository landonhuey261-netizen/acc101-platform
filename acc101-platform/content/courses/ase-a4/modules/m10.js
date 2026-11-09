// ase-a4 - Module 10: TPMS
module.exports = {
  "number": 10,
  "slug": "tpms",
  "title": "TPMS",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what TPMS does and why it exists.",
    "Compare direct TPMS with indirect TPMS and say how each one detects low pressure.",
    "Explain what a steady TPMS light means versus a flashing TPMS light.",
    "Describe how TPMS sensors are serviced when a tire is changed.",
    "Explain why TPMS does not replace checking tire pressure by hand."
  ],
  "sections": [
    {
      "heading": "What TPMS Is For",
      "html": "<p><strong>TPMS</strong> — the Tire Pressure Monitoring System — warns the driver when a tire is dangerously low. A low tire flexes more as it rolls, builds heat, wears its shoulders, and can fail at speed, and a driver often cannot see that a tire is low just by looking at it. The system exists so the driver is warned before a low tire becomes a blowout.</p><p>The warning is a light on the dash: a horseshoe shape with an exclamation mark. It is a warning, not a gauge — it tells the driver that something is wrong, and the driver still has to check the tires with a gauge to find out what.</p>"
    },
    {
      "heading": "Direct TPMS",
      "html": "<p><strong>Direct TPMS</strong> puts a small battery-powered sensor inside each wheel, usually attached to the valve stem. The sensor measures the actual air pressure (and often the temperature) and sends it by radio to a receiver in the car. When a tire's pressure drops below the system's threshold, the light comes on. Many direct systems can show the pressure of each tire on the dash.</p><p>The sensors have batteries that last years, but they do eventually run out — and when a battery dies, the whole sensor is replaced, because the battery is sealed inside. A sensor can also be damaged when a tire is changed if the technician does not know it is there.</p>"
    },
    {
      "heading": "Indirect TPMS",
      "html": "<p><strong>Indirect TPMS</strong> has no sensor in the wheel at all. It uses the <strong>ABS wheel-speed sensors</strong>: a low tire is slightly smaller in diameter, so it has to turn faster than the others to cover the same distance. The system watches the wheel speeds, and when one wheel is consistently turning faster than the rest, it concludes that tire is low and turns the light on.</p><p>Indirect systems are simpler and have no batteries to replace, but they cannot tell the driver <em>which</em> tire is low, and they cannot detect it if all four tires lose pressure equally — because then all four turn at the same faster speed and nothing looks different.</p>"
    },
    {
      "heading": "Steady Light, Flashing Light, and Service",
      "html": "<p>A <strong>steady</strong> TPMS light means a tire is low: check all four tires with a gauge, inflate the low one to the placard pressure, and drive — the light usually goes out once the system sees the correct pressure. A <strong>flashing</strong> light (often flashing for about a minute, then staying on) means the system itself has a fault: a dead sensor battery, a sensor that is not communicating, or a receiver problem. That is a system fault, not a low tire, and it needs a scan tool to identify.</p><p>When a tire is changed, the sensor must be handled carefully, the valve stem and seal are replaced as part of the service, and the system may need a <strong>relearn</strong> — a procedure that teaches the car which sensor is on which corner — especially if a sensor was replaced or the tires were rotated.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>TPMS warns the driver when a tire is dangerously low; it is a warning, not a gauge.</li><li>Direct TPMS: a sensor in each wheel measures pressure and radios it to the car.</li><li>Indirect TPMS: uses ABS wheel-speed sensors; a low tire turns faster.</li><li>Steady light = low tire. Flashing light = system fault.</li><li>After tire work, sensors need care, and the system may need a relearn.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating a flashing TPMS light as a low tire. Flashing means the system has a fault — a dead sensor or a communication problem — and inflating the tires will not clear it.</div><div class=\"callout\"><strong>Common mistake:</strong> Thinking TPMS replaces checking tire pressure. TPMS only warns when a tire is already well below its pressure — a gauge and the placard are still the way to keep tires right.</div><p><strong>Ready-to-Work link:</strong> If you can explain the difference between direct and indirect TPMS and what a flashing light means, you have this module. Module 11 covers alignment equipment and procedures.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "TPMS",
      "def": "Tire Pressure Monitoring System: warns the driver when a tire is dangerously low."
    },
    {
      "term": "Direct TPMS",
      "def": "TPMS with a pressure sensor inside each wheel that radios its reading to the car."
    },
    {
      "term": "Indirect TPMS",
      "def": "TPMS that uses ABS wheel-speed sensors to detect a low tire, with no sensor in the wheel."
    },
    {
      "term": "TPMS sensor",
      "def": "The battery-powered sensor inside a wheel in a direct TPMS, usually on the valve stem."
    },
    {
      "term": "TPMS light",
      "def": "The dash warning light — a horseshoe shape with an exclamation mark — for low tire pressure or a TPMS fault."
    },
    {
      "term": "Relearn",
      "def": "The procedure that teaches the TPMS which sensor is on which corner of the car."
    },
    {
      "term": "Valve stem",
      "def": "The small stem a tire is inflated through; on direct TPMS it often carries the sensor."
    },
    {
      "term": "Wheel-speed sensor",
      "def": "A sensor that measures how fast each wheel is turning; used by ABS and by indirect TPMS."
    },
    {
      "term": "Placard",
      "def": "The label in the driver's door jamb giving the correct tire size and cold inflation pressure."
    },
    {
      "term": "Cold pressure",
      "def": "Tire pressure measured before the vehicle has been driven."
    },
    {
      "term": "Threshold",
      "def": "The pressure level below which the TPMS turns the warning light on."
    },
    {
      "term": "Receiver",
      "def": "The part of the car that picks up the radio signals from the TPMS sensors."
    },
    {
      "term": "Sensor battery",
      "def": "The sealed battery inside a direct TPMS sensor; when it dies, the sensor is replaced."
    },
    {
      "term": "Blowout",
      "def": "A sudden tire failure, often from heat building up in an underinflated tire."
    },
    {
      "term": "Scan tool",
      "def": "A diagnostic tool that reads fault codes and live data from a vehicle's computers."
    }
  ],
  "video": {
    "title": "Direct vs Indirect TPMS: Why Your Tire Pressure Light Came On",
    "embedUrl": "https://www.youtube.com/embed/1ZY_XRUHogU",
    "note": "A clear comparison of direct TPMS (sensors inside each wheel) and indirect TPMS (which uses the ABS wheel-speed sensors). Watch for why an indirect system cannot tell you which tire is low.",
    "more": [
      {
        "title": "How TPMS Sensors Work: Quick Explanation of Both Systems",
        "url": "https://www.youtube.com/shorts/bOLuRJaQIeI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences the difference between direct and indirect TPMS.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Direct TPMS has a pressure sensor inside each wheel that measures the pressure and radios it to the car. Step 2: Indirect TPMS has no wheel sensor — it watches the ABS wheel-speed sensors and concludes a tire is low when one wheel turns consistently faster than the others.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A car's TPMS light is flashing, then stays on. The tires are all at the correct pressure. What does the flashing mean, and what is the next step?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A flashing light means the TPMS itself has a fault, not that a tire is low. Step 2: Use a scan tool to find the fault — commonly a dead sensor battery or a sensor that is not communicating — and replace the failed sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why can an indirect TPMS not detect it when all four tires lose pressure equally?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Indirect TPMS compares wheel speeds against each other. Step 2: If all four tires lose pressure equally, all four turn faster by the same amount, so nothing looks different to the system and no warning is given.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A tire is changed and the TPMS sensor is replaced. What procedure is needed afterwards, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A relearn procedure is needed. Step 2: The car must be taught which sensor is on which corner, or it will report the new sensor's pressure against the wrong wheel — or not recognize it at all.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A steady TPMS light is on. What is the correct first action?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check all four tires with a gauge — the light does not say which tire is low on many systems. Step 2: Inflate the low tire to the placard pressure and drive; the light usually goes out once the system sees the correct pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does TPMS not replace checking tire pressure by hand?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: TPMS only warns when a tire is already well below its correct pressure. Step 2: A tire can be low enough to wear badly and use extra fuel without tripping the light, so a gauge and the placard are still the way to keep pressures right.</p>"
    }
  ],
  "quiz": [
    {
      "q": "TPMS warns the driver when:",
      "choices": [
        "A tire is dangerously low",
        "The fuel tank is empty",
        "The oil needs changing",
        "The battery is dead"
      ],
      "answer": 0,
      "explanation": "Correct: (a). TPMS monitors tire pressure. (b) Fuel level has its own gauge. (c) Oil life has its own reminder. (d) A dead battery has its own warning."
    },
    {
      "q": "Direct TPMS measures pressure with:",
      "choices": [
        "A sensor inside each wheel",
        "A camera",
        "The exhaust sensor",
        "The fuel gauge"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A battery-powered sensor in each wheel radios its pressure. (b) No camera measures tire pressure. (c) The exhaust sensor measures exhaust. (d) The fuel gauge measures fuel."
    },
    {
      "q": "Indirect TPMS detects a low tire by noticing that:",
      "choices": [
        "One wheel turns faster than the others",
        "The tire looks flat",
        "The car pulls left",
        "The radio stops working"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A smaller low tire must turn faster to cover the same distance. (b) The system does not look at the tire. (c) A pull is a symptom, not how indirect TPMS detects low pressure. (d) The radio is unrelated."
    },
    {
      "q": "A flashing TPMS light usually means:",
      "choices": [
        "A tire is low",
        "The TPMS itself has a fault",
        "The tires are overinflated",
        "The car needs fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flashing, then steady, is the system's fault warning. (a) A low tire gives a steady light. (c) Overinflation does not flash the TPMS light. (d) Fuel is unrelated."
    },
    {
      "q": "When a direct TPMS sensor's battery dies, the technician must:",
      "choices": [
        "Replace the sensor, because the battery is sealed inside",
        "Recharge the sensor",
        "Add air to the battery",
        "Ignore it"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The battery is sealed in the sensor, so the whole sensor is replaced. (b) The battery cannot be recharged. (c) Air does not charge a battery. (d) Ignoring it leaves the system faulted."
    },
    {
      "q": "After a TPMS sensor is replaced, the system usually needs a:",
      "choices": [
        "Relearn, so the car knows which sensor is on which corner",
        "Oil change",
        "New battery",
        "Wheel alignment"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The relearn teaches the car the new sensor's position. (b) An oil change is unrelated. (c) The car's battery is unrelated. (d) Alignment is unrelated to a sensor change."
    },
    {
      "q": "An indirect TPMS cannot tell the driver:",
      "choices": [
        "That a tire is low",
        "Which tire is low",
        "That the system is working",
        "That a tire is flat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It compares wheel speeds and knows one is different, but not which corner by pressure. (a) It can tell that a tire is low. (c) It can report its own status. (d) A flat tire is a low tire, which it can detect."
    },
    {
      "q": "The TPMS warning light looks like:",
      "choices": [
        "A horseshoe with an exclamation mark",
        "A battery",
        "An oil can",
        "A thermometer"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The horseshoe shape is a tire cross-section with an exclamation mark. (b) A battery shape is the charging warning. (c) An oil can is the oil warning. (d) A thermometer is the temperature warning."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — TPMS: Quick Reference</h3>\n<p><strong>TPMS:</strong> Warns when a tire is dangerously low. A warning, not a gauge — check with a gauge.</p>\n<p><strong>Direct:</strong> Sensor in each wheel measures pressure and radios it in. Battery sealed inside — when it dies, replace the sensor.</p>\n<p><strong>Indirect:</strong> Uses ABS wheel-speed sensors. A low tire is smaller, so it turns faster. Cannot say which tire is low, and cannot detect all four going low together.</p>\n<p><strong>Lights:</strong> Steady = low tire. Flashing then steady = system fault — use a scan tool.</p>\n<p><strong>Service:</strong> Handle sensors carefully during tire work; relearn after a sensor change or rotation.</p>\n<p><strong>Self-check:</strong> Explain direct vs. indirect TPMS and what a flashing light means.</p>\n"
};
