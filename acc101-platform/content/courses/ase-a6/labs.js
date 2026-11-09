// ase-a6 — Scenario labs.
module.exports = [
  {
    "id": "voltage-drop-numbers",
    "title": "Voltage-Drop Numbers Lab",
    "introHtml": "<p><strong>Job ticket #A6-101 — Car cranks slowly, headlight on one side is dim.</strong> Customer: a driver who says the car turns over slowly in the morning and one headlight is dimmer than the other. Your task: use Ohm's law and voltage drop tests to find where the voltage is being lost. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — a healthy circuit (completed for you).</strong> A different car has a 12-volt source and a load of 6 ohms. Step 1: Ohm's law says I = V ÷ R. Step 2: I = 12 ÷ 6 = 2 amps. Step 3: the voltage drop across the load is V = I × R = 2 × 6 = 12 volts — the full source voltage reaches the load, and nothing is lost in the wiring. That is a healthy circuit. Now test the customer's car below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any electrical test: wear eye protection, keep the meter on the right range, and never measure resistance on a powered circuit — the meter's own test current fights the circuit's voltage and the reading is meaningless, and the meter can be damaged. Never measure current on the wrong range, and never crank the engine or switch on a large load while the meter is in series on a current range — a large current will blow the meter's fuse or damage the meter. When in doubt, use the highest range first and work down.</p><p><strong>The case, as you find it:</strong> (1) The starter circuit has a 12-volt source. While cranking, the starter itself drops 9 volts and the cables and connections drop 3 volts in total. (2) A second circuit has a 12-volt source and a load of 4 ohms. (3) A third circuit carries 3 amps through a 4-ohm load. (4) A fourth circuit has a 12-volt source and carries 4 amps. (5) On the starter circuit, the voltage drop is measured in sections: the battery-to-starter section drops 2 volts and the ground return section drops 1 volt. (6) A wire in another circuit drops 4 volts while carrying 2 amps. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You are about to test a live circuit with your multimeter. What must you do first? 1) Set the meter to resistance and measure the powered circuit 2) Check the meter is on the right range for the measurement, wear eye protection, and never measure resistance on a powered circuit 3) Crank the engine with the meter in series on a current range 4) Use the lowest range first for every measurement",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_safety",
            "expected": 2,
            "hint": "Step 0 governs: the right range, eye protection, and never measuring resistance on a powered circuit. Measuring resistance powered (1) gives a meaningless reading and can damage the meter, cranking with the meter in series (3) blows its fuse, and the lowest range first (4) risks the same damage — use the highest range first and work down."
          }
        ]
      },
      {
        "label": "COMPUTED — The starter circuit has a 12-volt source. The starter drops 9 volts and the cables and connections drop 3 volts. How many volts are lost in the cables and connections? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_lost",
            "expected": 3,
            "hint": "The cables and connections drop 3 volts — that is the voltage the starter never sees. 9 + 3 = 12, which accounts for the whole source voltage."
          }
        ]
      },
      {
        "label": "DECISION — The starter drops 9 volts and the wiring loses 3 volts. What does that 3-volt loss mean? 1) The starter is new 2) The cables or connections have high resistance and are starving the starter, so it cranks slowly 3) The battery is overcharged 4) The alternator is working well",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_meaning",
            "expected": 2,
            "hint": "A 3-volt loss in the wiring is a large drop: the cables or connections have high resistance, so the starter gets only 9 of the 12 volts. A new starter (1) would still be starved, overcharging (3) is a charging-system fault, and the alternator (4) is not involved in cranking."
          }
        ]
      },
      {
        "label": "COMPUTED — A circuit has a 12-volt source and a load of 4 ohms. How much current flows? (Enter the number of amps.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_current",
            "expected": 3,
            "hint": "Ohm's law says I = V ÷ R. I = 12 ÷ 4 = 3 amps."
          }
        ]
      },
      {
        "label": "COMPUTED — A circuit carries 3 amps through a 4-ohm load. What is the voltage drop across the load? (Enter the number of volts.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_drop",
            "expected": 12,
            "hint": "Ohm's law says V = I × R. V = 3 × 4 = 12 volts."
          }
        ]
      },
      {
        "label": "COMPUTED — A circuit has a 12-volt source and carries 4 amps. What is the resistance of the load? (Enter the number of ohms.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_resistance",
            "expected": 3,
            "hint": "Ohm's law says R = V ÷ I. R = 12 ÷ 4 = 3 ohms."
          }
        ]
      },
      {
        "label": "COMPUTED — On the starter circuit, the battery-to-starter section drops 2 volts and the ground return section drops 1 volt. What is the total voltage drop in the wiring? (Enter the number of volts.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_total",
            "expected": 3,
            "hint": "The drops add up: 2 + 1 = 3 volts lost in the wiring. The total drop is the voltage the load never sees."
          }
        ]
      },
      {
        "label": "DECISION — The battery-to-starter section drops 2 volts and the ground return drops 1 volt. Which section has the fault? 1) The ground return 2) The battery-to-starter section — it has the largest drop 3) Neither, both are fine 4) The starter motor itself",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_section",
            "expected": 2,
            "hint": "The largest drop names the fault: the battery-to-starter section loses 2 volts, twice the ground return's 1 volt. The ground (1) has the smaller drop, both sections (3) cannot be fine when 3 volts are lost, and the starter (4) is the load, not the wiring."
          }
        ]
      },
      {
        "label": "COMPUTED — A wire drops 4 volts while carrying 2 amps. What is the resistance of that wire? (Enter the number of ohms.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_wire_r",
            "expected": 2,
            "hint": "Ohm's law says R = V ÷ I. R = 4 ÷ 2 = 2 ohms. A wire should have almost no resistance — 2 ohms in a wire is a fault."
          }
        ]
      },
      {
        "label": "DECISION — Why does a voltage drop test find a bad connection that a resistance test with the power off can miss? 1) The resistance test uses a bigger current 2) A corroded connection can show low resistance to the meter's tiny test current and high resistance to the real load's large current 3) The voltage drop test needs no meter 4) The resistance test is always wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_why",
            "expected": 2,
            "hint": "The meter's tiny test current does not stress the connection the way the real load does, so the resistance test can read fine while the connection fails under load. The resistance test (1) uses a tiny current, not a bigger one; the drop test (3) needs a voltmeter; and resistance tests (4) work for many things, just not for this."
          }
        ]
      },
      {
        "label": "DECISION — A headlight is dim on one side only. A voltage drop test shows a large drop across that light's ground connection. What is the fault and the fix? 1) The bulb has failed — replace it 2) The ground connection has high resistance — clean and tighten it 3) The battery is dead — replace it 4) The alternator has failed — replace it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_headlight",
            "expected": 2,
            "hint": "The large drop across the ground connection names the fault: high resistance in that ground is starving the light. A failed bulb (1) would show no drop across the ground, a dead battery (3) would dim both lights, and a failed alternator (4) would dim all the lights."
          }
        ]
      },
      {
        "label": "DECISION — The repair is done and the voltage drops are small again. What is the right way to close the job? 1) Send the car out without checking anything 2) Re-run the tests — cranking speed normal, both headlights equally bright, voltage drops small — and record what was found and fixed 3) Tell the customer to watch the lights and hope 4) Replace the starter as well, just in case",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vd_close",
            "expected": 2,
            "hint": "Close the job by proving the repair: re-run the drop tests, check the cranking and the lights, and record the findings. Sending it out unchecked (1), hoping (3), or replacing extra parts (4) all leave the repair unproven."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "voltage-drop-numbers.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — You are about to test a live circuit with your multimeter. What must you do first? 1) Set the meter to resistance and measure the powered circuit 2) Check the meter is on the right range for the measurement, wear eye protection, and never measure resistance on a powered circuit 3) Crank the engine with the meter in series on a current range 4) Use the lowest range first for every measurement\",\n\"COMPUTED — The starter circuit has a 12-volt source. The starter drops 9 volts and the cables and connections drop 3 volts. How many volts are lost in the cables and connections? (Enter the number.)\",\n\"DECISION — The starter drops 9 volts and the wiring loses 3 volts. What does that 3-volt loss mean? 1) The starter is new 2) The cables or connections have high resistance and are starving the starter, so it cranks slowly 3) The battery is overcharged 4) The alternator is working well\",\n\"COMPUTED — A circuit has a 12-volt source and a load of 4 ohms. How much current flows? (Enter the number of amps.)\",\n\"COMPUTED — A circuit carries 3 amps through a 4-ohm load. What is the voltage drop across the load? (Enter the number of volts.)\",\n\"COMPUTED — A circuit has a 12-volt source and carries 4 amps. What is the resistance of the load? (Enter the number of ohms.)\",\n\"COMPUTED — On the starter circuit, the battery-to-starter section drops 2 volts and the ground return section drops 1 volt. What is the total voltage drop in the wiring? (Enter the number of volts.)\",\n\"DECISION — The battery-to-starter section drops 2 volts and the ground return drops 1 volt. Which section has the fault? 1) The ground return 2) The battery-to-starter section — it has the largest drop 3) Neither, both are fine 4) The starter motor itself\",\n\"COMPUTED — A wire drops 4 volts while carrying 2 amps. What is the resistance of that wire? (Enter the number of ohms.)\",\n\"DECISION — Why does a voltage drop test find a bad connection that a resistance test with the power off can miss? 1) The resistance test uses a bigger current 2) A corroded connection can show low resistance to the meter's tiny test current and high resistance to the real load's large current 3) The voltage drop test needs no meter 4) The resistance test is always wrong\",\n\"DECISION — A headlight is dim on one side only. A voltage drop test shows a large drop across that light's ground connection. What is the fault and the fix? 1) The bulb has failed — replace it 2) The ground connection has high resistance — clean and tighten it 3) The battery is dead — replace it 4) The alternator has failed — replace it\",\n\"DECISION — The repair is done and the voltage drops are small again. What is the right way to close the job? 1) Send the car out without checking anything 2) Re-run the tests — cranking speed normal, both headlights equally bright, voltage drops small — and record what was found and fixed 3) Tell the customer to watch the lights and hope 4) Replace the starter as well, just in case\",\n"
  },
  {
    "id": "parasitic-draw-diagnosis",
    "title": "Parasitic-Draw Diagnosis",
    "introHtml": "<p><strong>Job ticket #A6-102 — Car will not start in the morning, but starts with a jump and runs well all day.</strong> Customer: a driver who says the car is dead every morning, starts fine with a jump, and runs perfectly all day. Your task: find the drain that flattens the battery overnight. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — a healthy car (completed for you).</strong> A different car is tested the same way: its battery holds 70 amp-hours. Step 1: with the car asleep, the meter reads 0.05 amps — that is 50 milliamps, the normal draw for the clock, the radio memory, the alarm, and the modules' memories. Step 2: at 0.05 amps, the battery would take 70 ÷ 0.05 = 1,400 hours to drain — far longer than a night. That is a healthy car. Now test the customer's car below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any parasitic draw test: wear eye protection, and never crank the engine or switch on a large load while the meter is in series with the battery — the meter is built for small currents and a large one will blow its fuse or damage the meter. Never short the battery terminals with a tool, and keep the meter on the right range: when in doubt, use the highest range first and work down. Work with the car switched off, the doors closed, and the key away from the car.</p><p><strong>The case, as you find it:</strong> (1) The battery holds 70 amp-hours and passes a load test. (2) The charging system is healthy. (3) With the car asleep, the meter reads 0.35 amps. (4) The normal draw for this car is 0.05 amps. (5) Pulling the interior-light fuse drops the reading from 0.35 amps to 0.04 amps. (6) The glove-box light switch is found stuck, keeping the glove-box light on all night. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You are about to connect the meter in series with the battery to test for parasitic draw. What must you never do? 1) Wear eye protection 2) Crank the engine or switch on a large load while the meter is in series — a large current will blow the meter's fuse or damage the meter 3) Use the highest range first 4) Keep the doors closed during the test",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_safety",
            "expected": 2,
            "hint": "Step 0 governs: the meter is built for small currents, and cranking or switching on a large load while it is in series will blow its fuse or damage it. Eye protection (1), the highest range first (3), and closed doors (4) are all things you should do."
          }
        ]
      },
      {
        "label": "COMPUTED — The meter reads 0.35 amps. How many milliamps is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_ma",
            "expected": 350,
            "hint": "0.35 amps × 1,000 = 350 milliamps. One amp is 1,000 milliamps."
          }
        ]
      },
      {
        "label": "COMPUTED — The normal draw for this car is 0.05 amps. How many milliamps is the normal draw? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_normal_ma",
            "expected": 50,
            "hint": "0.05 amps × 1,000 = 50 milliamps. The normal draw is the clock, the radio memory, the alarm, and the modules' memories."
          }
        ]
      },
      {
        "label": "COMPUTED — The measured draw is 350 milliamps and the normal draw is 50 milliamps. How many times the normal draw is the measured draw? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_times",
            "expected": 7,
            "hint": "350 ÷ 50 = 7. The car is drawing seven times its normal current with everything switched off."
          }
        ]
      },
      {
        "label": "COMPUTED — The battery holds 70 amp-hours and the draw is 0.35 amps. How many hours would it take the draw to drain the battery? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_hours",
            "expected": 200,
            "hint": "70 ÷ 0.35 = 200 hours. That is about eight days — but the battery does not need to be fully drained to fail to start the car, which is why it is dead every morning."
          }
        ]
      },
      {
        "label": "COMPUTED — If the draw were twice as large, 0.70 amps, how many hours would the same 70 amp-hour battery last? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_hours2",
            "expected": 100,
            "hint": "70 ÷ 0.70 = 100 hours. Doubling the draw halves the time the battery lasts."
          }
        ]
      },
      {
        "label": "DECISION — The battery passes a load test and the charging system is healthy, but the car is dead every morning. What is the most likely problem? 1) A dead battery 2) A parasitic draw draining the battery overnight 3) A failed alternator 4) A broken starter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_cause",
            "expected": 2,
            "hint": "The battery and the charging system are both healthy, so the energy is being used after switch-off — a parasitic draw. A dead battery (1) would fail a load test, a failed alternator (3) would not let the car run well all day, and a broken starter (4) would not crank even with a jump."
          }
        ]
      },
      {
        "label": "DECISION — Why must you wait for the car's modules to go to sleep before reading the draw? 1) The meter needs to warm up 2) Modules take many minutes to go to sleep, and while awake they draw a normal waking current that looks like a fault 3) The battery needs to charge first 4) The doors must be open",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_sleep",
            "expected": 2,
            "hint": "A reading taken too soon shows the modules' normal waking current, not a fault — and you would condemn a healthy car. The meter (1) does not need to warm up, the battery (3) does not charge during the test, and the doors (4) must be closed, not open."
          }
        ]
      },
      {
        "label": "COMPUTED — Pulling the interior-light fuse drops the reading from 350 milliamps to 40 milliamps. How many milliamps was that circuit drawing? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_fuse_draw",
            "expected": 310,
            "hint": "350 − 40 = 310 milliamps. That fuse's circuit was drawing 310 milliamps — the drain that was flattening the battery."
          }
        ]
      },
      {
        "label": "DECISION — Pulling the interior-light fuse drops the reading from 350 milliamps to 40 milliamps. What does that tell you? 1) The fuse is blown 2) That fuse's circuit is the one drawing the current 3) The battery is dead 4) The meter is broken",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_fuse",
            "expected": 2,
            "hint": "The drop names the circuit: the interior-light circuit is drawing the current. A blown fuse (1) would not change the reading when pulled, a dead battery (3) would show no draw at all, and the meter (4) is doing its job."
          }
        ]
      },
      {
        "label": "DECISION — The glove-box light switch is stuck, keeping the light on all night. What is the repair? 1) Replace the battery 2) Replace the stuck glove-box light switch, then verify the draw is back to normal 3) Replace the alternator 4) Fit a larger fuse",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_repair",
            "expected": 2,
            "hint": "The switch is the root cause — it keeps the light on all night. The battery (1) and the alternator (3) both test healthy, and a larger fuse (4) would let the wiring overheat instead of fixing anything."
          }
        ]
      },
      {
        "label": "DECISION — The switch is replaced. What is the right way to close the job? 1) Send the car out without checking anything 2) Re-run the draw test with the car asleep, confirm the reading is back to the normal 50 milliamps, and record what was found and fixed 3) Tell the customer to jump-start it every morning 4) Leave the glove-box light unplugged",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pd_close",
            "expected": 2,
            "hint": "Close the job by proving the repair: the draw test with the car asleep should read the normal 50 milliamps, and the findings go on the record. Sending it out unchecked (1), jump-starting daily (3), or leaving the light unplugged (4) all leave the repair unproven or unfinished."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "parasitic-draw-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — You are about to connect the meter in series with the battery to test for parasitic draw. What must you never do? 1) Wear eye protection 2) Crank the engine or switch on a large load while the meter is in series — a large current will blow the meter's fuse or damage the meter 3) Use the highest range first 4) Keep the doors closed during the test\",\n\"COMPUTED — The meter reads 0.35 amps. How many milliamps is that? (Enter the number.)\",\n\"COMPUTED — The normal draw for this car is 0.05 amps. How many milliamps is the normal draw? (Enter the number.)\",\n\"COMPUTED — The measured draw is 350 milliamps and the normal draw is 50 milliamps. How many times the normal draw is the measured draw? (Enter the number.)\",\n\"COMPUTED — The battery holds 70 amp-hours and the draw is 0.35 amps. How many hours would it take the draw to drain the battery? (Enter the number.)\",\n\"COMPUTED — If the draw were twice as large, 0.70 amps, how many hours would the same 70 amp-hour battery last? (Enter the number.)\",\n\"DECISION — The battery passes a load test and the charging system is healthy, but the car is dead every morning. What is the most likely problem? 1) A dead battery 2) A parasitic draw draining the battery overnight 3) A failed alternator 4) A broken starter\",\n\"DECISION — Why must you wait for the car's modules to go to sleep before reading the draw? 1) The meter needs to warm up 2) Modules take many minutes to go to sleep, and while awake they draw a normal waking current that looks like a fault 3) The battery needs to charge first 4) The doors must be open\",\n\"COMPUTED — Pulling the interior-light fuse drops the reading from 350 milliamps to 40 milliamps. How many milliamps was that circuit drawing? (Enter the number.)\",\n\"DECISION — Pulling the interior-light fuse drops the reading from 350 milliamps to 40 milliamps. What does that tell you? 1) The fuse is blown 2) That fuse's circuit is the one drawing the current 3) The battery is dead 4) The meter is broken\",\n\"DECISION — The glove-box light switch is stuck, keeping the light on all night. What is the repair? 1) Replace the battery 2) Replace the stuck glove-box light switch, then verify the draw is back to normal 3) Replace the alternator 4) Fit a larger fuse\",\n\"DECISION — The switch is replaced. What is the right way to close the job? 1) Send the car out without checking anything 2) Re-run the draw test with the car asleep, confirm the reading is back to the normal 50 milliamps, and record what was found and fixed 3) Tell the customer to jump-start it every morning 4) Leave the glove-box light unplugged\",\n"
  }
];
