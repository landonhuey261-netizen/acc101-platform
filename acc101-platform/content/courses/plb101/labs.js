// plb101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "jobsite-safety-walkthrough",
    "title": "Jobsite Safety Walkthrough",
    "introHtml": "<p><strong>Job ticket #2011 — First-day walkthrough, new residential build.</strong> Customer: a home builder; the house is at rough-in stage. Site: a two-story house under construction, framing complete, plumbing rough-in in progress. Crew on site: two plumbers, a framer, and an electrician. Your task: walk the site before work starts, spot the hazards, and make the right calls — in the right order. Read the site description in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=9u4UGYhtLms\" target=\"_blank\" rel=\"noopener\">What Would You Do Next? (English)</a> — Oregon OSHA's hazard-spotting scenarios: watch a scene, spot what is wrong, and decide what to do next before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work or any walkthrough: PPE on (hard hat, safety glasses, gloves, boots), check the site for overhead work and open edges, and know where the first-aid kit and the nearest extinguisher are. Never enter a trench, a confined space, or an area under a suspended load. Report hazards to your supervisor — and never work in an area you have not walked first.</p><p><strong>The site, as you find it at 7:00 a.m.:</strong> (1) An extension ladder leans against the second-floor edge at a steep angle, its base only 1 foot out from the wall for a 12-foot height, and it is not tied off. (2) A trench for the building sewer is open, 5 feet deep, with vertical walls and no shoring, sloping, or shielding — and a plumber's tools are at its edge. (3) A solvent-cement can sits open beside a lit torpedo heater in the basement. (4) A scaffold on the stairwell has a missing mid rail and a plank with a gap. (5) A worker is carrying a 50-gallon water heater alone down the basement stairs. (6) The first-aid kit is in the trailer, and no one on site knows who the first-aider is. (7) An electrician is drilling into a stud with no check for what is behind it. (8) The extension ladder's duty rating is 225 lb; the worker plus tools weigh 240 lb.</p><p><strong>The correct hazard order (for the order questions):</strong> Step 1 — Stop the trench work: no one enters an unprotected trench. Step 2 — Move the solvent cement away from the heater and close the can. Step 3 — Fix or tag out the ladder (4-to-1 setup, tie off, correct rating). Step 4 — Tag out the scaffold until the competent person repairs it. Step 5 — Stop the solo water-heater carry and get a second person and a dolly. Step 6 — Find the first-aider and the kit location before work starts. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive and see the open 5-foot trench with vertical walls, no shoring, and tools at its edge. What do you do first? 1) Hop in quickly to check the fitting — it will only take a minute 2) Stop all trench work: no one enters an unprotected trench, and report it so shoring, sloping, or a shield is provided 3) Work from the edge, leaning in 4) Fill the trench in so no one can fall in",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_safety",
            "expected": 2,
            "hint": "Step 0 governs: an unprotected trench can collapse without warning. Entering it (1) or leaning in (3) puts you in the collapse zone, and filling it (4) is not your call — the fix is shoring, sloping, or shielding before anyone enters."
          }
        ]
      },
      {
        "label": "ORDER — 'Move the solvent cement away from the heater and close the can.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_solvent",
            "expected": 2,
            "hint": "Order: 1 stop the trench work, 2 solvent away from the heater, 3 ladder, 4 scaffold, 5 water heater, 6 first-aider. The solvent is a fire next to an ignition source — second only to the trench."
          }
        ]
      },
      {
        "label": "ORDER — 'Stop the solo water-heater carry and get a second person and a dolly.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_heater",
            "expected": 5,
            "hint": "Order: 1 trench, 2 solvent, 3 ladder, 4 scaffold, 5 water heater, 6 first-aider. The solo carry is step 5."
          }
        ]
      },
      {
        "label": "ORDER — 'Tag out the scaffold until the competent person repairs it.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_scaffold",
            "expected": 4,
            "hint": "Order: 1 trench, 2 solvent, 3 ladder, 4 scaffold, 5 water heater, 6 first-aider. The scaffold with a missing mid rail and a gap is step 4."
          }
        ]
      },
      {
        "label": "ORDER — 'Stop the trench work: no one enters an unprotected trench.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_trench",
            "expected": 1,
            "hint": "The trench is step 1 — the most immediately lethal hazard on the site. Everything else waits until no one is in or near the unprotected trench."
          }
        ]
      },
      {
        "label": "COMPUTED — The extension ladder reaches 12 feet high and its base is 1 foot out from the wall. The 4-to-1 rule says the base should be how many feet out? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ladder_base",
            "expected": 3,
            "hint": "4-to-1: height ÷ 4 = base distance. 12 ÷ 4 = 3 feet out. At 1 foot out the ladder is far too steep and can tip backward."
          }
        ]
      },
      {
        "label": "DECISION — The ladder's duty rating is 225 lb; the worker plus tools weigh 240 lb. Correct call? 1) Use it — 15 lb over is close enough 2) Do not use it — the load exceeds the duty rating, so get a ladder rated for the load 3) Leave the tools on the ground and climb without them 4) Use it only for a quick climb",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ladder_rating",
            "expected": 2,
            "hint": "A duty rating is a maximum, not a suggestion — 240 lb on a 225-lb ladder is overloaded. 'Close enough' (1) and 'quick' (4) do not change the rating, and climbing without tools (3) does not fix the next trip up with them."
          }
        ]
      },
      {
        "label": "DECISION — The scaffold has a missing mid rail and a plank with a gap. Correct call? 1) Use it carefully and step over the gap 2) Tag it out and let only the competent person repair it 3) Fix it yourself by nailing a board across the gap 4) Use it only on the side away from the gap",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_scaffold",
            "expected": 2,
            "hint": "Only the competent person builds or changes a scaffold. Using it (1, 4) risks a fall through the gap or over the missing rail, and an improvised repair (3) is not a competent person's repair."
          }
        ]
      },
      {
        "label": "DECISION — A worker is carrying a 50-gallon water heater alone down the basement stairs. Correct call? 1) Let him finish — he is strong 2) Stop him: get a second person and a dolly, and clear the stairs first 3) Help him by pushing from behind 4) Carry it yourself instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_heater",
            "expected": 2,
            "hint": "A solo carry of a water heater down stairs risks a back injury and a dropped load. The fix is two people and a dolly with clear stairs (2). Strength (1) does not change the risk, pushing from behind (3) makes it worse, and swapping the carrier (4) keeps it a solo carry."
          }
        ]
      },
      {
        "label": "DECISION — The solvent cement sits open beside a lit torpedo heater. Why is this the most urgent fire hazard on the site? 1) The can might get dusty 2) Solvent vapors are flammable and the heater is an ignition source — the fire triangle is complete 3) The cement will dry out 4) The heater will overheat",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_solvent",
            "expected": 2,
            "hint": "Fuel (solvent vapors) + oxygen (air) + heat (the heater) is the complete fire triangle. Dust (1) and drying out (3) are not fire hazards, and the heater overheating (4) is a different problem."
          }
        ]
      },
      {
        "label": "DECISION — The first-aid kit is in the trailer and no one knows who the first-aider is. Correct call before work starts? 1) Start work — someone will find the kit if needed 2) Find the kit, identify the first-aider, and make sure everyone knows both before work starts 3) Buy a new kit 4) Ask the customer to be the first-aider",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_firstaid",
            "expected": 2,
            "hint": "Know where the kit is and who the first-aider is on day one — before work starts, not after an injury. Starting without knowing (1) wastes the first minutes after an injury, buying a kit (3) does not name a first-aider, and the customer (4) is not the site's first-aider."
          }
        ]
      },
      {
        "label": "DECISION — The electrician is drilling into a stud with no check for what is behind it. What is the hazard, and what should happen? 1) None — studs are empty 2) Hidden wires and pipes run through studs; stop and check (stud finder, look at both sides) before drilling 3) Drill faster so the bit passes through quickly 4) Drill only from the other side",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_drill",
            "expected": 2,
            "hint": "Wires and pipes run through studs — a drill bit can hit either. Check before drilling (2). Studs are not empty (1), speed (3) makes a strike worse, and the other side (4) has the same hidden runs."
          }
        ]
      },
      {
        "label": "COMPUTED — The site has 3 hazards that can kill immediately (trench, fire, fall from ladder/scaffold) and 3 that injure over time or on the next job (solo carry, unknown first-aider, unchecked drilling). If you fix the 3 immediately lethal hazards first, how many hazards remain to fix before work starts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_remaining",
            "expected": 3,
            "hint": "Six hazards in total; three immediately lethal fixed first leaves three to fix before work starts. All six are fixed before work — the order is about what kills first, not what can wait."
          }
        ]
      },
      {
        "label": "DECISION — The walkthrough is done and all six hazards are fixed. What is the right way to close the walkthrough? 1) Start work and say nothing 2) Record the hazards found, what was fixed, and who fixed it, and brief the crew before work starts 3) Tell only the foreman in private 4) Wait for the inspector to find the next ones",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_close",
            "expected": 2,
            "hint": "A walkthrough closes with a record and a crew briefing (2) — so the fixes are known and the next hazard is spotted faster. Silence (1) and private telling (3) leave the crew uninformed, and waiting for the inspector (4) is not a safety plan."
          }
        ]
      }
    ],
    "passing": 70
  }
];
