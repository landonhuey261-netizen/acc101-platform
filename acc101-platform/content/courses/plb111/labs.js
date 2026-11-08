// Plumbing 111 — Scenario lab (Copper Sweat-Solder Joint).
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed value.
// Two tracks: (A) do it in your shop, (B) watch and sequence from the verified video.

module.exports = [
  {
    "id": "copper-sweat-solder-joint",
    "title": "Copper Sweat-Solder Joint",
    "introHtml": "<p><strong>Job ticket #2011 — New copper branch to a laundry sink.</strong> Customer: a laundry sink is being added in a basement utility room. Equipment: 1/2-inch Type L copper tube, a 1/2-inch copper 90° elbow, lead-free solder, flux, a propane torch, a tube cutter, a reaming tool, emery cloth, and a fitting brush. Readings so far: the existing cold-water line is drained and the work area is clear. Your task: make one sweat-soldered copper joint, in the correct order, and inspect it like an inspector would.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=z1UaRPDZ8x4\" target=\"_blank\" rel=\"noopener\">How to Sweat Copper Pipe</a> — a complete sweat-joint walk-through showing cleaning, fluxing, heating, and feeding the solder before you make your calls below.</p><p><strong>Two tracks, one lab.</strong> <strong>Track A — Do it in your shop:</strong> if you have copper tube, fittings, flux, solder, and a torch, make the joint for real and answer the sequence and inspection questions from your own work. <strong>Track B — Watch and sequence:</strong> if you have no shop, watch the video above, then answer the same sequence and inspection questions from what you saw. Either track completes the lab — the sequence and the inspection calls are the same.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> A torch is an open flame that can burn you and start a fire. Wear safety glasses and gloves, clear combustibles from the work area, place a fire-resistant heat shield behind the joint, keep a fire extinguisher within reach, and stay to watch the area after the torch is off — a smoldering stud can catch fire minutes later. Work in ventilation. Never solder a line that is still connected to a gas supply or that holds water under pressure, and never point a hot torch at anything you have not checked first. Lead-free solder only on drinking-water lines.</p><p><strong>The correct soldering sequence (for the order questions):</strong> Step 1 — PPE on, work area cleared, heat shield placed, extinguisher within reach, pipe confirmed dry inside. Step 2 — Measure the run including fitting take-up, mark, and cut the tube square. Step 3 — Ream the inside burr and clean the tube end and the fitting to bright, shiny copper. Step 4 — Apply a thin, even coat of flux to the cleaned tube end and inside the fitting. Step 5 — Push the tube fully into the fitting until it bottoms out. Step 6 — Heat the fitting evenly with the torch, moving the flame around it. Step 7 — Touch solder to the joint and let capillary action draw it in all the way around. Step 8 — Remove the heat, let the joint cool undisturbed, then wipe off excess flux once the solder has solidified.</p><p><strong>Track A (shop):</strong> make the joint on a short practice piece — a 6-inch length of 1/2-inch Type L tube and one 90° elbow — and check each step against the sequence above. <strong>Track B (watch and sequence):</strong> watch the video, note the order in which the presenter cleans, fluxes, heats, and feeds solder, and answer from the video. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before the torch is lit, what do you do first? 1) Light the torch and heat the fitting right away 2) Put on safety glasses and gloves, clear combustibles, place a heat shield behind the joint, confirm the pipe is dry inside, and put a fire extinguisher within reach 3) Apply solder to the cold joint so it is ready 4) Open the water valve to keep the pipe cool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_safety",
            "expected": 2,
            "hint": "Step 0 governs: protection, cleared area, heat shield, dry pipe, and an extinguisher before any flame. Options 1 and 3 heat or load a joint before safety is settled, and option 4 puts water in a pipe that must be dry to solder."
          }
        ]
      },
      {
        "label": "ORDER — 'Clean the tube end and the fitting to bright, shiny copper.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_clean",
            "expected": 3,
            "hint": "Sequence: 1 safety/dry, 2 measure and cut square, 3 ream and clean to bright copper, 4 flux, 5 assemble, 6 heat, 7 feed solder, 8 cool and wipe."
          }
        ]
      },
      {
        "label": "ORDER — 'Heat the fitting evenly with the torch, moving the flame around it.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_heat",
            "expected": 6,
            "hint": "Heating is Step 6 — after measuring and cutting (2), cleaning (3), fluxing (4), and assembling fully (5), and before feeding solder (7)."
          }
        ]
      },
      {
        "label": "ORDER — 'Apply a thin, even coat of flux to the cleaned tube end and inside the fitting.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_flux",
            "expected": 4,
            "hint": "Fluxing is Step 4 — after cleaning to bright copper (3) and before assembling the joint (5). Flux on dirty copper does not work, so cleaning must come first."
          }
        ]
      },
      {
        "label": "ORDER — 'Touch solder to the joint and let capillary action draw it in all the way around.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_feed",
            "expected": 7,
            "hint": "Feeding solder is Step 7 — the joint must be heated (6) before the solder will melt on contact and be drawn in. Heating the solder with the flame instead is the classic beginner error."
          }
        ]
      },
      {
        "label": "ORDER — 'Measure the run including fitting take-up, mark, and cut the tube square.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_cut",
            "expected": 2,
            "hint": "Measuring and cutting is Step 2 — after safety and a dry pipe (1) and before cleaning (3). Forgetting take-up makes the piece short in both sockets."
          }
        ]
      },
      {
        "label": "ORDER — 'Push the tube fully into the fitting until it bottoms out.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_assemble",
            "expected": 5,
            "hint": "Assembly is Step 5 — after fluxing (4) and before heating (6). The tube must bottom out so the joint has its full socket depth."
          }
        ]
      },
      {
        "label": "ORDER — 'Remove the heat, let the joint cool undisturbed, then wipe off excess flux once the solder has solidified.' Which step of the soldering sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_cool",
            "expected": 8,
            "hint": "Cooling and wiping is Step 8, the final step — after the solder has been fed (7). Moving the joint while the solder is liquid breaks the bond."
          }
        ]
      },
      {
        "label": "DECISION — The joint will not reach soldering temperature no matter how long the torch is applied, and water is trickling from a valve upstream. What is the cause and the fix? 1) The torch is too small — use a bigger flame 2) Water inside the tube is boiling and stealing the heat — drain the line fully and hold back the trickle before soldering 3) The flux is bad — add more flux 4) The copper is the wrong type",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_wet_pipe",
            "expected": 2,
            "hint": "Water in the tube boils and caps the joint temperature below what solder needs (2). A bigger flame (1) cannot beat boiling water, more flux (3) does not remove water, and the copper type (4) is not the problem."
          }
        ]
      },
      {
        "label": "DECISION — Your finished joint shows a thin, even ring of solder all the way around, with the fitting fully home and the copper clean after wiping. What is the verdict? 1) Bad joint — remake it 2) Good joint — it is ready for the pressure test 3) Bad joint — it needs more solder 4) Good joint only if it was brazed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_good_joint",
            "expected": 2,
            "hint": "A thin even ring all around is the definition of a good sweat joint (2). More solder (3) would make blobs, and brazing (4) is a different process — this joint is soldered, and correctly so."
          }
        ]
      },
      {
        "label": "DECISION — Your finished joint is blackened and the solder ring is missing on half the joint. What happened and what do you do? 1) It is fine — paint over it 2) Add more solder to the bare half 3) The joint was overheated and the flux burned off — take it apart, clean to bright copper, re-flux, and remake it 4) Tighten the fitting with a wrench",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_burnt_joint",
            "expected": 3,
            "hint": "Blackened copper means a burnt joint: the flux burned off and the copper oxidized, so solder could not wet it (3). More solder (2) cannot bond to oxidized copper, paint (1) hides the failure, and a wrench (4) does nothing for a soldered joint."
          }
        ]
      },
      {
        "label": "COMPUTED — Two elbows sit 12 inches apart, face to face, on this 1/2-inch branch. Each socket is 5/8 inch deep. What length do you cut the tube? (Enter the length in inches, as a decimal: 5/8 inch = 0.625.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_cut_length",
            "expected": 13.25,
            "hint": "Cut length = gap + take-up at both ends = 12 + 0.625 + 0.625 = 13.25 inches. Cutting 12 inches would leave the tube short in both sockets."
          }
        ]
      },
      {
        "label": "DECISION — Whether you worked Track A (shop) or Track B (watch and sequence), what proves the solder was drawn in by capillary action rather than melted on by the flame? 1) A thick blob of solder on one side 2) A thin, even ring of solder all the way around the joint 3) Blackened copper 4) No visible solder at all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_track",
            "expected": 2,
            "hint": "Capillary action pulls solder evenly around the joint, leaving a thin even ring (2). A one-sided blob (1) means the torch melted the solder onto the surface. Blackened copper (3) means a burnt joint, and no visible solder (4) means the joint never filled."
          }
        ]
      },
      {
        "label": "DECISION — The joint is finished and cool. How do you close out the job? 1) Turn the water on full at once and leave 2) Turn the water on slowly, check the joint for any weep, wipe the area, and pressure-test the section before the walls close 3) Leave the torch lit for the next job 4) Cover the joint with insulation and never look at it again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_finish",
            "expected": 2,
            "hint": "Finish clean: water on slowly, inspect for weeps, and pressure-test before the walls close (2). Full pressure at once (1) hides nothing but risks a spray, a lit torch (3) is a fire hazard, and covering an untested joint (4) buries a possible leak."
          }
        ]
      }
    ],
    "passing": 70
  }
];
