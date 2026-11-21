module.exports = [
  {
    "id": "pv-array-sizing-string-design",
    "title": "PV Array Sizing & String Design",
    "introHtml": "<p><strong>Job ticket #1111 — Size a grid-tied PV array for a Michigan home and design its strings.</strong> Customer: a homeowner in Grand Rapids using 10,950 kWh a year; the roof faces south, unshaded, and the service panel has a 200-amp busbar with a 200-amp main breaker. Your task: size the array from the energy use, lay out the modules and strings, check the string voltage and the 120% rule — all on paper. This is a paper-and-calculation exercise: you are sizing and computing, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=xKxrkht7CpY\" target=\"_blank\" rel=\"noopener\">How Do Solar Panels Work? — TED-Ed</a> — how a solar cell makes electricity; watch it before you size the array.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a real PV system: remember that a sunlit array is always energized — a disconnect does not de-energize the modules. All real work is de-energized, locked out and tagged out, and tested dead with a meter rated for the DC voltage present, under a licensed supervisor, per NFPA 70E. Never work on live equipment. This lab is a paper exercise — no array is touched, no circuit is energized, and nothing here proves hands-on skill.</p><p><strong>The job, as given:</strong> (1) Annual use 10,950 kWh → 30 kWh a day. (2) Site gets 4 peak sun hours a day. (3) Loss margin 20%. (4) Modules are 400 W each, Voc 48 V, Isc 10.5 A. (5) Cold-weather correction raises Voc by 15%. (6) Inverter maximum input voltage 600 V; inverter AC rating 7,600 W; inverter output current 31.7 A at 240 V. (7) The dwelling voltage limit is 600 V. (8) Panel: 200-amp busbar, 200-amp main breaker. (9) The inverter needs a 40-amp breaker (31.7 A × 125% = 39.6 A, rounded to the next standard size, 40 A).</p><p><strong>Work the numbers before you answer:</strong> array kW = daily kWh ÷ PSH, then × 1.20 for losses; module count = array watts ÷ 400, rounded up; string Voc = modules per string × 48 V, then × 1.15 for cold weather; circuit sizing = Isc × 1.25; 120% rule: main + PV ≤ 120% of busbar.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any hands-on work on a PV array, what must you remember? 1) The disconnect makes the array safe to touch 2) A sunlit array is always energized — a disconnect does not de-energize the modules; work de-energized, locked out and tagged out, and tested dead under a licensed supervisor 3) Gloves alone make live work safe 4) Work at noon when the sun is strongest",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_safety",
            "expected": 2,
            "hint": "Step 0 governs: a sunlit module is energized and the disconnect only isolates the array from the inverter. Never work live — de-energize, lock out, tag out, test dead, per NFPA 70E."
          }
        ]
      },
      {
        "label": "COMPUTED — Annual use is 10,950 kWh. How many kWh a day is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_daily",
            "expected": 30,
            "hint": "10,950 ÷ 365 = 30 kWh per day."
          }
        ]
      },
      {
        "label": "COMPUTED — Daily use is 30 kWh and the site gets 4 peak sun hours. What array size (kW DC) is needed before the loss margin? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_kw",
            "expected": 7.5,
            "hint": "30 ÷ 4 = 7.5 kW DC before losses."
          }
        ]
      },
      {
        "label": "COMPUTED — Apply the 20% loss margin to 7.5 kW. What is the installed array size in kW DC? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_kw_margin",
            "expected": 9,
            "hint": "7.5 × 1.20 = 9.0 kW DC installed."
          }
        ]
      },
      {
        "label": "COMPUTED — The array is 9,000 W DC and each module is 400 W. How many modules are needed? (Enter the number, rounded up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_modules",
            "expected": 23,
            "hint": "9,000 ÷ 400 = 22.5 modules — round up to 23 modules. (In practice the layout would be rounded to an even string arrangement, but the count from the sizing is 23.)"
          }
        ]
      },
      {
        "label": "DECISION — The 23 modules will be wired in strings. Which string layout keeps the voltage within the inverter's 600 V maximum and the dwelling's 600 V limit? 1) One string of 23 modules 2) Two strings of 12 and 11 modules 3) Twenty-three strings of 1 module 4) No strings — wire them all in parallel",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_layout",
            "expected": 2,
            "hint": "One string of 23 modules would be 23 × 48 = 1,104 V at STC — far over the 600 V limits. Two strings of 12 and 11 keep the voltage near 12 × 48 = 576 V at STC, within limits before the cold-weather check. Twenty-three single-module strings (3) and all-parallel (4) give too little voltage for the inverter."
          }
        ]
      },
      {
        "label": "COMPUTED — The longer string has 12 modules at Voc 48 V each. What is its open-circuit voltage at STC? (Enter the number of volts.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_string_voc",
            "expected": 576,
            "hint": "12 × 48 = 576 V at STC."
          }
        ]
      },
      {
        "label": "COMPUTED — Apply the 15% cold-weather correction to 576 V. What is the cold-weather Voc? (Enter the number, rounded to the nearest whole volt.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_cold_voc",
            "expected": 662,
            "hint": "576 × 1.15 = 662.4 V, rounded to 662 V. That exceeds the 600 V dwelling limit and the inverter's 600 V maximum — so a 12-module string is too long for this module and this climate, and the strings must be shortened (for example, to 10 modules: 480 V at STC, 552 V cold)."
          }
        ]
      },
      {
        "label": "DECISION — The 12-module string's cold-weather Voc is 662 V, over the 600 V limit. What is the correct fix? 1) Install it anyway — the limit is only a guide 2) Shorten the strings (for example, to 10 modules: 480 V at STC, 552 V cold) so the cold-weather voltage is within limits 3) Use a bigger inverter 4) Cover the modules in winter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_fix",
            "expected": 2,
            "hint": "The 600 V limit is a hard code limit, not a guide. Shortening the strings brings the cold-weather voltage within limits. A bigger inverter (3) does not change the dwelling voltage limit, and covering modules (4) is not a design solution."
          }
        ]
      },
      {
        "label": "COMPUTED — Each string has an Isc of 10.5 A. What is the 125% sizing current for one string circuit? (Enter the number of amps, to one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_sizing",
            "expected": 13.1,
            "hint": "10.5 × 1.25 = 13.125 A, rounded to 13.1 A. The conductor and overcurrent device are sized for at least that."
          }
        ]
      },
      {
        "label": "DECISION — The inverter needs a 40-amp breaker. The panel has a 200-amp busbar and a 200-amp main breaker. Does the 120% rule allow the connection? 1) No — 200 + 40 = 240 A, which is over 120% of 200 A 2) Yes — 120% of 200 A is 240 A, and 200 + 40 = 240 A, exactly at the limit 3) No — the busbar is too small for any PV 4) Yes — the rule does not apply to residential work",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_120",
            "expected": 2,
            "hint": "120% of 200 A is 240 A, and 200 + 40 = 240 A — exactly at the limit, so the load-side connection is allowed. A larger PV breaker would not fit and would need a supply-side connection or a panel upgrade."
          }
        ]
      },
      {
        "label": "DECISION — The sizing and string design are done. What closes the job? 1) Order the equipment and install 2) Submit the design, string calculations, and one-line diagram for the building permit, electrical permit, and utility interconnection application, and install only after approvals 3) Install first and submit the paperwork later 4) Skip the permits — the system is small",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pv_close",
            "expected": 2,
            "hint": "The design goes through the building permit, the electrical permit, and the utility's approval to install before any work begins — and the system must not export before permission to operate. Installing first (1, 3) and skipping permits (4) are how systems fail inspection and cannot be energized."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "battery-storage-sizing",
    "title": "Battery Storage Sizing",
    "introHtml": "<p><strong>Job ticket #1112 — Size a battery bank and charge controller for a hybrid system.</strong> Customer: a homeowner in Michigan with a grid-tied array who wants backup power for critical loads during outages. The critical loads are a refrigerator (150 W), a furnace fan (400 W), a well pump (800 W), and 5 LED lights (10 W each). Your task: size the battery bank for one day of backup, size the charge controller, and check the coupling — all on paper. This is a paper-and-calculation exercise: you are sizing and computing, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=FJzeXWjCqSw\" target=\"_blank\" rel=\"noopener\">Off-Grid Solar Battery Strings: Why 48-Volt Systems Matter</a> — why a 48-volt battery bank is built from native 48-volt batteries in parallel; watch it before you size the bank.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a real battery system: a battery bank is energized whenever it is connected and can deliver hundreds or thousands of amps into a short circuit. All real work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E. Never work on live equipment. This lab is a paper exercise — no battery is touched, no circuit is energized, and nothing here proves hands-on skill.</p><p><strong>The job, as given:</strong> (1) Critical loads: refrigerator 150 W, furnace fan 400 W, well pump 800 W, 5 LED lights at 10 W each. (2) The loads run for 8 hours during an outage. (3) The battery is LFP, usable to 90% depth of discharge. (4) The system voltage is 48 V. (5) The array feeding the charge controller has 2 parallel strings, each with an Isc of 10 A. (6) The existing grid-tied system has a string inverter that will stay in place. (7) The battery bank will be built from native 48-volt batteries wired in parallel.</p><p><strong>Work the numbers before you answer:</strong> total load watts = 150 + 400 + 800 + (5 × 10); energy = watts × hours; nameplate kWh = usable kWh ÷ 0.90; amp-hours = watt-hours ÷ 48 V; controller sizing = Isc × strings × 1.25.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any hands-on work on the battery bank, what must you remember? 1) Batteries are safe to touch because they are only 48 V 2) A battery bank is energized whenever connected and can deliver huge fault current — work de-energized, locked out and tagged out, and tested dead under a licensed supervisor 3) Gloves alone make battery work safe 4) Disconnect the array first and the battery is then safe",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_safety",
            "expected": 2,
            "hint": "Step 0 governs: a connected battery bank is energized and its fault current can be enormous. Never work live — de-energize, lock out, tag out, test dead, per NFPA 70E."
          }
        ]
      },
      {
        "label": "COMPUTED — Critical loads: refrigerator 150 W, furnace fan 400 W, well pump 800 W, 5 lights at 10 W each. What is the total critical load in watts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_load",
            "expected": 1400,
            "hint": "150 + 400 + 800 + (5 × 10) = 1,400 W of critical load."
          }
        ]
      },
      {
        "label": "COMPUTED — The critical loads total 1,400 W and run for 8 hours. How many watt-hours of usable energy are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_energy",
            "expected": 11200,
            "hint": "1,400 × 8 = 11,200 Wh (11.2 kWh) of usable energy."
          }
        ]
      },
      {
        "label": "COMPUTED — The LFP battery is usable to 90% depth of discharge. What nameplate capacity in kWh is needed for 11.2 kWh usable? (Enter the number, to one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_nameplate",
            "expected": 12.4,
            "hint": "11.2 ÷ 0.90 = 12.44 kWh, rounded to 12.4 kWh of nameplate capacity."
          }
        ]
      },
      {
        "label": "COMPUTED — The bank must hold 12,400 Wh at 48 V. How many amp-hours is that? (Enter the number, rounded to the nearest whole amp-hour.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_ah",
            "expected": 258,
            "hint": "12,400 ÷ 48 = 258.3 Ah, rounded to 258 Ah."
          }
        ]
      },
      {
        "label": "DECISION — How should the 48-volt bank be built? 1) Four 12-volt batteries in series 2) Native 48-volt batteries wired in parallel, with equal-length cables to a busbar 3) One 12-volt battery 4) Batteries of mixed ages and types in series",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_build",
            "expected": 2,
            "hint": "Native 48-volt batteries in parallel share current equally and do not drift out of balance the way series-built banks do. Series 12-volt batteries (1) drift apart, one 12-volt battery (3) is the wrong voltage, and mixed batteries (4) are never combined."
          }
        ]
      },
      {
        "label": "COMPUTED — The array has 2 parallel strings at Isc 10 A each. What is the charge controller's minimum output current rating with the 125% factor? (Enter the number of amps.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_controller",
            "expected": 25,
            "hint": "Maximum current = 2 × 10 = 20 A; 20 × 1.25 = 25 A minimum output current rating."
          }
        ]
      },
      {
        "label": "DECISION — The existing grid-tied system has a string inverter that will stay in place. Which coupling adds the batteries? 1) DC coupling — replace the string inverter with a hybrid inverter 2) AC coupling — add a separate battery inverter on the AC side 3) No coupling — connect the batteries directly to the grid 4) PWM coupling",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_coupling",
            "expected": 2,
            "hint": "AC coupling adds a battery inverter on the AC side and leaves the existing string inverter in place. DC coupling (1) would require replacing the inverter. Batteries never connect directly to the grid (3), and PWM coupling (4) is not a coupling method."
          }
        ]
      },
      {
        "label": "DECISION — The battery system needs a BMS. What does the BMS do, and what happens if it fails? 1) It charges the battery; if it fails the battery charges faster 2) It monitors each cell and disconnects on over-voltage, under-voltage, over-temperature, or over-current; if it fails the system must be taken out of service until it is repaired 3) It mounts the batteries; if it fails they fall off the wall 4) It measures sunlight; if it fails the array stops",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_bms",
            "expected": 2,
            "hint": "The BMS is the guardian of every cell — without it a cell can be overcharged or over-discharged, which damages the battery and can cause a fire. A failed BMS means the system is out of service until repaired."
          }
        ]
      },
      {
        "label": "DECISION — The well pump needs 800 W running but more to start. What must the inverter be checked for? 1) Only its continuous wattage 2) Its continuous wattage and its surge (starting) capacity for the pump motor 3) Its color 4) Its weight",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_surge",
            "expected": 2,
            "hint": "Motors draw several times their running current to start. The inverter must handle the pump's starting surge as well as the 1,400 W continuous critical load — a continuous-only check (1) will leave the pump unable to start."
          }
        ]
      },
      {
        "label": "DECISION — The sizing is done. What closes the job? 1) Order the batteries and install 2) Present the sizing, the coupling choice, and the equipment list to the customer, get approval, then install to the listing and Article 706 and commission the system 3) Install the batteries in a bedroom to keep them warm 4) Skip commissioning — the system will prove itself",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_close",
            "expected": 2,
            "hint": "The sizing and the coupling are approved first, the installation follows the listing and Article 706 (batteries go in a garage or utility room, not a bedroom), and the system is commissioned and monitored before handover. Installing first (1) and skipping commissioning (4) are how systems fail."
          }
        ]
      }
    ],
    "passing": 70
  }
];
