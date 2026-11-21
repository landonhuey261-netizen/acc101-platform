// con101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "jobsite-safety-walkthrough",
    "title": "Jobsite Safety Walkthrough",
    "introHtml": "<p><strong>Job ticket #3001 — First-day walkthrough, new commercial build.</strong> Customer: a general contractor; the building is a single-story retail shell at framing stage. Site: wood-frame walls going up, steel beams being set by crane, a trench open for the water service. Crew on site: four carpenters, two laborers, a crane operator, and an electrician. Your task: walk the site before work starts, spot the hazards, and make the right calls — in the right order. Read the site description in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=9u4UGYhtLms\" target=\"_blank\" rel=\"noopener\">What Would You Do Next? (English)</a> — Oregon OSHA's hazard-spotting scenarios: watch a scene, spot what is wrong, and decide what to do next before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work or any walkthrough: PPE on (hard hat, safety glasses, gloves, boots), check the site for overhead work and open edges, and know where the first-aid kit and the nearest extinguisher are. Never enter a trench, a confined space, or an area under a suspended load. Report hazards to your supervisor — and never work in an area you have not walked first.</p><p><strong>The site, as you find it at 7:00 a.m.:</strong> (1) A trench for the water service is open, 5 feet deep, with vertical walls and no shoring, sloping, or shielding — and a laborer's tools are at its edge. (2) A crane is lifting a bundle of steel beams over the work area, and a laborer walks under the load. (3) An extension ladder to the second-floor deck is 16 feet high, its base only 2 feet out from the wall, and it is not tied off. (4) A scaffold on the front wall has a missing mid rail and a plank with a gap. (5) An extension cord with exposed wires lies across a walkway, plugged in with no GFCI. (6) A carpenter is cutting with a circular saw whose guard is tied back. (7) A laborer walks through the hard-hat zone with no hard hat. (8) The first-aid kit is in the trailer, and no one on site knows who the first-aider is. (9) The extension ladder's duty rating is 250 lb; the worker plus tools weigh 275 lb.</p><p><strong>The correct hazard order (for the order questions):</strong> Step 1 — Stop the trench work: no one enters an unprotected trench. Step 2 — Stop work under the crane load and barricade the lift zone. Step 3 — Fix or tag out the ladder (4-to-1 setup, tie off, correct rating). Step 4 — Tag out the scaffold until the competent person repairs it. Step 5 — Remove the damaged cord and get GFCI protection. Step 6 — Find the first-aider and the kit location before work starts. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive and see the open 5-foot trench with vertical walls, no shoring, and tools at its edge. What do you do first? 1) Hop in quickly to check the pipe — it will only take a minute 2) Stop all trench work: no one enters an unprotected trench, and report it so shoring, sloping, or a shield is provided 3) Work from the edge, leaning in 4) Fill the trench in so no one can fall in",
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
        "label": "ORDER — 'Stop work under the crane load and barricade the lift zone.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_crane",
            "expected": 2,
            "hint": "Order: 1 trench, 2 crane load, 3 ladder, 4 scaffold, 5 cord, 6 first-aider. A suspended load over workers is second only to the trench."
          }
        ]
      },
      {
        "label": "ORDER — 'Fix or tag out the ladder (4-to-1 setup, tie off, correct rating).' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_ladder",
            "expected": 3,
            "hint": "Order: 1 trench, 2 crane, 3 ladder, 4 scaffold, 5 cord, 6 first-aider. The ladder is step 3."
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
            "hint": "Order: 1 trench, 2 crane, 3 ladder, 4 scaffold, 5 cord, 6 first-aider. The scaffold with a missing mid rail and a gap is step 4."
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
        "label": "COMPUTED — The extension ladder reaches 16 feet high and its base is 2 feet out from the wall. The 4-to-1 rule says the base should be how many feet out? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ladder_base",
            "expected": 4,
            "hint": "4-to-1: height ÷ 4 = base distance. 16 ÷ 4 = 4 feet out. At 2 feet out the ladder is far too steep and can tip backward."
          }
        ]
      },
      {
        "label": "DECISION — The ladder's duty rating is 250 lb; the worker plus tools weigh 275 lb. Correct call? 1) Use it — 25 lb over is close enough 2) Do not use it — the load exceeds the duty rating, so get a ladder rated for the load 3) Leave the tools on the ground and climb without them 4) Use it only for a quick climb",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ladder_rating",
            "expected": 2,
            "hint": "A duty rating is a maximum, not a suggestion — 275 lb on a 250-lb ladder is overloaded. 'Close enough' (1) and 'quick' (4) do not change the rating, and climbing without tools (3) does not fix the next trip up with them."
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
        "label": "DECISION — An extension cord with exposed wires lies across a walkway, plugged in with no GFCI. Correct call? 1) Step over it and keep working 2) Remove the cord from service, tag it out, and get GFCI protection before any cord is used 3) Wrap the exposed wires in tape and keep using it 4) Move it to the side of the walkway",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_cord",
            "expected": 2,
            "hint": "Exposed wires plus no GFCI is a shock hazard — the cord comes out of service (2). Stepping over it (1) leaves the hazard for the next worker, tape (3) is not a repair, and moving it (4) does not fix the exposed wires or the missing GFCI."
          }
        ]
      },
      {
        "label": "DECISION — A laborer walks under a load of steel beams being lifted by the crane. Correct call? 1) Let him pass — the load looks stable 2) Stop the lift, barricade the lift zone, and keep everyone out from under the load 3) Tell him to walk faster 4) Wait until the load is set, then walk under the crane",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_crane",
            "expected": 2,
            "hint": "Never walk under a suspended load — the lift stops and the zone is barricaded (2). A load that 'looks stable' (1) can still fall, walking faster (3) does not make it safe, and waiting (4) still leaves a worker under the crane."
          }
        ]
      },
      {
        "label": "DECISION — A carpenter is cutting with a circular saw whose guard is tied back. Correct call? 1) Let him finish — he is experienced 2) Stop the cut: the guard must be in place and move freely, returning to cover the blade 3) Tie it back further so it stays out of the way 4) Use the saw only for short cuts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_saw",
            "expected": 2,
            "hint": "A tied-back guard leaves the blade exposed — the cut stops until the guard is fixed (2). Experience (1) does not stop a kickback, tying it further (3) makes it worse, and short cuts (4) are still cuts with an exposed blade."
          }
        ]
      },
      {
        "label": "DECISION — A laborer walks through the hard-hat zone with no hard hat. Correct call? 1) Ignore it — he is only passing through 2) Stop him: no one enters a hard-hat zone without a hard hat 3) Lend him your hard hat and work without one 4) Let him finish the walk and remind him later",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_hardhat",
            "expected": 2,
            "hint": "A hard-hat zone means a hard hat, every time, for everyone (2). Passing through (1) is still exposure, lending yours (3) leaves you unprotected, and reminding him later (4) leaves him unprotected now."
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
        "label": "COMPUTED — The site has 8 hazards in total. Four of them can kill immediately (trench, crane load, ladder, scaffold). If you fix those 4 first, how many hazards remain to fix before work starts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_remaining",
            "expected": 4,
            "hint": "Eight hazards in total; four immediately lethal fixed first leaves four to fix before work starts. All eight are fixed before work — the order is about what kills first, not what can wait."
          }
        ]
      },
      {
        "label": "DECISION — The walkthrough is done and all eight hazards are fixed. What is the right way to close the walkthrough? 1) Start work and say nothing 2) Record the hazards found, what was fixed, and who fixed it, and brief the crew before work starts 3) Tell only the foreman in private 4) Wait for the inspector to find the next ones",
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
