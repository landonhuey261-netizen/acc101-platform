// ele101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "electrical-safety-walkthrough",
    "title": "Jobsite Electrical Safety Walkthrough",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #4001 — First-day walkthrough, new commercial build.</strong> Customer: a general contractor; the building is a single-story retail shell at framing stage. Site: wood-frame walls going up, a panelboard being roughed in, a trench open for the underground service. Crew on site: four carpenters, two laborers, a crane operator, and an electrician. Your task: walk the site before work starts, spot the hazards, and make the right calls — in the right order. Read the site description in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=9u4UGYhtLms\" target=\"_blank\" rel=\"noopener\">What Would You Do Next? (English)</a> — Oregon OSHA's hazard-spotting scenarios: watch a scene, spot what is wrong, and decide what to do next before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work or any walkthrough: PPE on (hard hat, safety glasses, gloves, boots), check the site for overhead work and open edges, and know where the first-aid kit and the nearest extinguisher are. Never enter a trench, a confined space, or an area under a suspended load. Never touch electrical equipment — assume every conductor is live until a qualified person has proven it dead and locked it out. Report hazards to your supervisor — and never work in an area you have not walked first. All electrical work in this lab is a paper exercise: you make decisions on paper only, and any real work on site is done de-energized, locked out and tagged out, under a licensed supervisor.</p><p><strong>The site, as you find it at 7:00 a.m.:</strong> (1) A trench for the underground service is open, 5 feet deep, with vertical walls and no shoring, sloping, or shielding — and a laborer's tools are at its edge. (2) A crane is lifting a bundle of steel beams over the work area, and a laborer walks under the load. (3) An extension ladder to the second-floor deck is 16 feet high, its base only 2 feet out from the wall, and it is not tied off. (4) A panelboard is open with exposed energized bus bars, and no one has locked it out or posted a warning. (5) An extension cord with exposed wires lies across a walkway, plugged in with no GFCI. (6) A carpenter is cutting with a circular saw whose guard is tied back. (7) An electrician's rubber insulating gloves are on the ground with a cut in one finger, and the leather protectors are missing. (8) The first-aid kit is in the trailer, and no one on site knows who the first-aider is. (9) A 12 AWG circuit is protected by a 30-amp breaker.</p><p><strong>The correct hazard order (for the order questions):</strong> Step 1 — Stop the trench work: no one enters an unprotected trench. Step 2 — Stop work under the crane load and barricade the lift zone. Step 3 — Keep everyone out of the open energized panelboard and get it locked out and covered. Step 4 — Fix or tag out the ladder (4-to-1 setup, tie off, correct rating). Step 5 — Remove the damaged cord and get GFCI protection. Step 6 — Find the first-aider and the kit location before work starts. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive and see the open 5-foot trench with vertical walls, no shoring, and tools at its edge. What do you do first? 1) Hop in quickly to check the conduit — it will only take a minute 2) Stop all trench work: no one enters an unprotected trench, and report it so shoring, sloping, or a shield is provided 3) Work from the edge, leaning in 4) Fill the trench in so no one can fall in",
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
            "hint": "Order: 1 trench, 2 crane load, 3 panelboard, 4 ladder, 5 cord, 6 first-aider. A suspended load over workers is second only to the trench."
          }
        ]
      },
      {
        "label": "ORDER — 'Keep everyone out of the open energized panelboard and get it locked out and covered.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_panel",
            "expected": 3,
            "hint": "Order: 1 trench, 2 crane, 3 panelboard, 4 ladder, 5 cord, 6 first-aider. The exposed energized bus bars are step 3."
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
            "expected": 4,
            "hint": "Order: 1 trench, 2 crane, 3 panelboard, 4 ladder, 5 cord, 6 first-aider. The ladder is step 4."
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
        "label": "SAFETY CALL — The panelboard is open with exposed energized bus bars and no lockout. What do you do? 1) Reach in and check the bus with your hand 2) Keep everyone out, report it, and have a qualified person lock it out and cover it before anyone works near it 3) Close the door and ignore it 4) Use a non-contact tester to prove it is dead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_panel",
            "expected": 2,
            "hint": "Exposed energized bus bars are a shock and arc-flash hazard. Never touch them (1). Closing the door and ignoring it (3) leaves the hazard. A non-contact tester cannot prove a circuit dead (4) — only a verified contact meter can, and only a qualified person does that work."
          }
        ]
      },
      {
        "label": "SAFETY CALL — The rubber insulating gloves on the ground have a cut finger and no leather protectors. What do you do? 1) Use them anyway — the cut is small 2) Take them out of service and get a tested, undamaged pair with leather protectors 3) Wear them without protectors 4) Tape over the cut and use them",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_gloves",
            "expected": 2,
            "hint": "A cut destroys the glove's insulation, and leather protectors are part of the system. Using them (1), wearing them without protectors (3), or taping the cut (4) all leave the worker unprotected — the gloves are out of service."
          }
        ]
      },
      {
        "label": "CALC — A 12 AWG copper circuit is protected by a 30-amp breaker. Per 2023 NEC Table 310.16, 12 AWG copper is rated 20 amps. What is the correct breaker size for this circuit, in amps?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_breaker",
            "expected": 20,
            "hint": "The breaker protects the wire: 12 AWG copper is rated 20 amps, so the breaker must be 20 amps. A 30-amp breaker lets the wire overheat before it trips."
          }
        ]
      },
      {
        "label": "ORDER — 'Remove the damaged cord and get GFCI protection.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_cord",
            "expected": 5,
            "hint": "Order: 1 trench, 2 crane, 3 panelboard, 4 ladder, 5 cord, 6 first-aider. The damaged cord with no GFCI is step 5."
          }
        ]
      },
      {
        "label": "ORDER — 'Find the first-aider and the kit location before work starts.' Which step of the hazard order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sw_ord_firstaid",
            "expected": 6,
            "hint": "Order: 1 trench, 2 crane, 3 panelboard, 4 ladder, 5 cord, 6 first-aider. Knowing the first-aider and the kit location is step 6."
          }
        ]
      }
    ]
  }
];
