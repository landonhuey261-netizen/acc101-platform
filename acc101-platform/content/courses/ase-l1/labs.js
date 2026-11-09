// ase-l1 - Hands-on labs
module.exports = [
  {
    "id": "composite-vehicle-cv4-case",
    "title": "Composite Vehicle (CV4) Case Lab — Work the Booklet, One Decision at a Time",
    "introHtml": "<p>The real L1 test gives you a Composite Vehicle Type 4 and a Reference Booklet with its specifications, diagrams, and reference values. This course cannot reproduce ASE's booklet, so this lab uses a <strong>fictional practice vehicle</strong> as a stand-in: a four-cylinder gasoline engine, coil-on-plug ignition, port fuel injection, automatic transmission. The vehicle is invented — do not memorize it. The <strong>skill</strong> is what transfers: read the symptom, find the reference value, compare the reading, name the next test.</p>\n<p><strong>How this lab works:</strong> the scenario below gives you the practice vehicle's data. Each row is a decision point. Work the rows in order — each one builds on the last. For rows that ask for a number, type the number only. For rows that ask for a choice, type the number of the option you choose. Every row has a hint if you get stuck.</p>\n<p><strong>Worked example:</strong> the booklet lists the normal long-term fuel trim as −5% to +5%. The scan shows +18% at idle. The reading is outside the reference range, so the engine is lean at idle — the next test is a smoke test for a vacuum leak, not a new oxygen sensor. That is the whole method: reference value, comparison, next test.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any under-hood test, park on a level surface, set the parking brake, and keep hands, hair, and loose clothing away from the fan, belts, and hot exhaust. Never reach across a running engine, and never disconnect a fuel line on a hot engine. If a test needs the engine running, keep the vehicle in Park with the brake set and a second person at the wheel.</p>\n<p><strong>The scenario.</strong> The practice vehicle is a four-cylinder gasoline car, coil-on-plug, port fuel injection, automatic transmission. The customer complains of a hesitation on acceleration, a rough idle, and poor fuel economy. The check-engine light is on. Here is the practice vehicle's data, given as the scenario's own numbers — use only these, not real-world specifications:</p>\n<ul>\n<li><strong>Codes:</strong> P0171 (system too lean, bank 1) stored; P0300 (random misfire) pending.</li>\n<li><strong>Fuel trims:</strong> long-term +18% at idle, +4% at cruise; short-term swinging.</li>\n<li><strong>Oxygen sensor:</strong> upstream switching normally; downstream steady.</li>\n<li><strong>Booklet reference values:</strong> normal long-term fuel trim −5% to +5%; normal fuel pressure 35 to 45 units; normal CAN bus resistance about 60 ohms.</li>\n<li><strong>Scan readings:</strong> fuel pressure 40 units; CAN bus resistance 60 ohms; mass air flow reading normal; coolant temperature normal.</li>\n<li><strong>Mode $06:</strong> cylinder 2 misfire count climbing; other cylinders near zero.</li>\n<li><strong>Ignition waveform:</strong> coil current ramp on cylinder 2 looks normal.</li>\n<li><strong>Smoke test:</strong> smoke escapes from a cracked vacuum hose near the intake.</li>\n</ul>\n<p><strong>Your job.</strong> Work the rows in order. The first row is a safety call — make it before any other decision. Then read the symptom, compare each reading to its reference value, and name the next test. The last rows ask you to write the repair order and the proof.</p>",
    "headers": ["Decision point", "Your call"],
    "rows": [
      {
        "label": "SAFETY CALL — The engine is running and you need to inspect the vacuum hose near the intake. Which is the safe action? 1 = Keep hands clear of the fan and belts and work from the side, 2 = Reach across the running engine to the hose",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety", "expected": 1, "hint": "Never reach across a running engine. Work from the side, keep hands clear of the fan and belts, and keep loose clothing away." }]
      },
      {
        "label": "ORDER — Which clue do you read first? 1 = The stored P0171 lean code, 2 = The pending P0300 random misfire, 3 = The fuel trim readings",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "order_first", "expected": 1, "hint": "Start with the stored code — it is the confirmed fault. The pending code and the trims confirm it, but the stored code is the anchor." }]
      },
      {
        "label": "DECISION — The long-term fuel trim is +18% at idle and +4% at cruise. The booklet range is −5% to +5%. What does the pattern mean? 1 = A vacuum leak, 2 = A weak fuel pump, 3 = A dead oxygen sensor",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trim_pattern", "expected": 1, "hint": "A leak adds unmetered air at idle, where it matters most; at cruise the leak is a smaller share of the airflow. A weak pump would show under load, not at idle." }]
      },
      {
        "label": "COMPUTED — The booklet range for long-term fuel trim is −5% to +5%. The idle reading is +18%. How many points above the top of the range is the idle reading?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trim_above_range", "expected": 13, "hint": "The top of the range is +5%. Subtract: 18 − 5 = 13 points above the range." }]
      },
      {
        "label": "DECISION — Fuel pressure reads 40 units. The booklet range is 35 to 45 units. What does this rule out? 1 = A weak fuel pump, 2 = A vacuum leak, 3 = A bad coil",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "fuel_pressure", "expected": 1, "hint": "40 units is inside the 35–45 range, so the fuel pump is delivering normally. The lean condition is not a fuel delivery fault." }]
      },
      {
        "label": "DECISION — The upstream oxygen sensor switches normally and the downstream sensor is steady. What does this tell you? 1 = The converter is working, 2 = The converter has failed, 3 = The oxygen sensors are dead",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "o2_reading", "expected": 1, "hint": "A healthy converter holds the downstream sensor steady while the upstream one switches. A failed converter lets the downstream sensor track the upstream one." }]
      },
      {
        "label": "DECISION — Mode $06 shows cylinder 2's misfire count climbing, but the coil current ramp on cylinder 2 looks normal. What does this mean? 1 = The coil is bad, 2 = The misfire is not an ignition fault on that cylinder, 3 = The computer is bad",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "misfire_ramp", "expected": 2, "hint": "A normal ramp rules out the coil. The misfire is a symptom of the lean mixture — the unmetered air is starving the cylinder, not a weak spark." }]
      },
      {
        "label": "DECISION — CAN bus resistance reads 60 ohms, and the booklet lists about 60 ohms as normal. What does this tell you? 1 = The network is healthy, 2 = The network has an open circuit, 3 = A module is dragging the bus down",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "can_resistance", "expected": 1, "hint": "About 60 ohms is the healthy reading — two terminating resistors in parallel. An open would read about 120 ohms." }]
      },
      {
        "label": "DECISION — The smoke test shows smoke escaping from a cracked vacuum hose near the intake. What is the next test? 1 = Replace the hose and recheck the trims, 2 = Replace the oxygen sensor, 3 = Replace the catalytic converter",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "smoke_test", "expected": 1, "hint": "The smoke found the leak. Replace the hose, then recheck the trims — if they fall back into the booklet range, the leak was the fault." }]
      },
      {
        "label": "COMPUTED — After the hose is replaced, the long-term fuel trim at idle falls from +18% to +3%. How many points did the trim fall?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trim_fall", "expected": 15, "hint": "Subtract the new reading from the old one: 18 − 3 = 15 points." }]
      },
      {
        "label": "DECISION — After the repair, the trim is +3% at idle. The booklet range is −5% to +5%. What is the verdict? 1 = The repair worked — the trim is back inside the reference range, 2 = The repair failed, 3 = The trim needs to be exactly zero",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "verdict", "expected": 1, "hint": "+3% is inside −5% to +5%. The trim does not need to be zero — it needs to be inside the reference range." }]
      },
      {
        "label": "FRAMING DECISION — Which is the best proof that the repair is complete? 1 = The light is off, 2 = The trims are inside the booklet range, the misfire count is near zero, and the hesitation is gone on a road test under the original conditions, 3 = The codes were cleared",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "proof", "expected": 2, "hint": "Proof is the data inside the reference range plus the symptom gone under the original conditions. A light off or codes cleared proves nothing by itself." }]
      }
    ],
    "passing": 70,
    "csvFilename": "composite-vehicle-cv4-case.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — The engine is running and you need to inspect the vacuum hose near the intake. Which is the safe action? 1 = Keep hands clear of the fan and belts and work from the side, 2 = Reach across the running engine to the hose\",\n\"ORDER — Which clue do you read first? 1 = The stored P0171 lean code, 2 = The pending P0300 random misfire, 3 = The fuel trim readings\",\n\"DECISION — The long-term fuel trim is +18% at idle and +4% at cruise. The booklet range is −5% to +5%. What does the pattern mean? 1 = A vacuum leak, 2 = A weak fuel pump, 3 = A dead oxygen sensor\",\n\"COMPUTED — The booklet range for long-term fuel trim is −5% to +5%. The idle reading is +18%. How many points above the top of the range is the idle reading?\",\n\"DECISION — Fuel pressure reads 40 units. The booklet range is 35 to 45 units. What does this rule out? 1 = A weak fuel pump, 2 = A vacuum leak, 3 = A bad coil\",\n\"DECISION — The upstream oxygen sensor switches normally and the downstream sensor is steady. What does this tell you? 1 = The converter is working, 2 = The converter has failed, 3 = The oxygen sensors are dead\",\n\"DECISION — Mode $06 shows cylinder 2's misfire count climbing, but the coil current ramp on cylinder 2 looks normal. What does this mean? 1 = The coil is bad, 2 = The misfire is not an ignition fault on that cylinder, 3 = The computer is bad\",\n\"DECISION — CAN bus resistance reads 60 ohms, and the booklet lists about 60 ohms as normal. What does this tell you? 1 = The network is healthy, 2 = The network has an open circuit, 3 = A module is dragging the bus down\",\n\"DECISION — The smoke test shows smoke escaping from a cracked vacuum hose near the intake. What is the next test? 1 = Replace the hose and recheck the trims, 2 = Replace the oxygen sensor, 3 = Replace the catalytic converter\",\n\"COMPUTED — After the hose is replaced, the long-term fuel trim at idle falls from +18% to +3%. How many points did the trim fall?\",\n\"DECISION — After the repair, the trim is +3% at idle. The booklet range is −5% to +5%. What is the verdict? 1 = The repair worked — the trim is back inside the reference range, 2 = The repair failed, 3 = The trim needs to be exactly zero\",\n\"FRAMING DECISION — Which is the best proof that the repair is complete? 1 = The light is off, 2 = The trims are inside the booklet range, the misfire count is near zero, and the hesitation is gone on a road test under the original conditions, 3 = The codes were cleared\",\n"
  }
];
