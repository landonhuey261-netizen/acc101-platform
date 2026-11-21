// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = [
  {
    "id": "load-calculation-drills",
    "title": "Load-Calculation Drills",
    "introHtml": "<p><strong>Job ticket — load-calculation day.</strong> You are sizing services and feeders for four dwellings and a small shop: lighting loads, small-appliance circuits, ranges, dryers, and motors. Work every number on paper before entering it — a wrong demand load is a wrong service size.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: all practical work in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E — never work on live equipment; treat every circuit as live until it is tested and proven dead; verify your meter live-dead-live before trusting it. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong total here is a wrong service on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are about to verify a panel is de-energized before starting load-calculation field work. Your call: 1) Trust the breaker handle position 2) Test the meter on a known live source, test the circuit, then test the meter again (live-dead-live) 3) Ask a coworker if it is off 4) Touch the bus with a gloved hand",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_loadcalc",
            "expected": 2,
            "hint": "Live-dead-live: verify the meter on a known live source, test the circuit, then verify the meter again. A breaker handle never proves a circuit is dead."
          }
        ]
      },
      {
        "label": "COMPUTED — A dwelling has 1,600 square feet of living area. Enter the general lighting and receptacle load in VA at 3 VA per square foot.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_light1600",
            "expected": 4800,
            "hint": "1,600 × 3 = 4,800 VA (Table 220.12)."
          }
        ]
      },
      {
        "label": "COMPUTED — Add two small-appliance circuits and one laundry circuit to the 4,800 VA lighting load. Enter the general-load subtotal in VA.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_subtotal",
            "expected": 9300,
            "hint": "4,800 + 2 × 1,500 + 1,500 = 9,300 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Apply Table 220.42 demand to a 9,300 VA general load. Enter the demand load in VA (first 3,000 VA at 100%, remainder at 35%).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_demand9300",
            "expected": 5205,
            "hint": "3,000 + (9,300 − 3,000) × 0.35 = 3,000 + 2,205 = 5,205 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — A dwelling has 2,400 square feet of living area. Enter the general lighting and receptacle load in VA.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_light2400",
            "expected": 7200,
            "hint": "2,400 × 3 = 7,200 VA."
          }
        ]
      },
      {
        "label": "CHOICE — A single household range is rated 12 kW. What demand does Table 220.55 allow? 1) 12 kW 2) 8 kW 3) 9.6 kW 4) 6 kW",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_range",
            "expected": 2,
            "hint": "Table 220.55 allows an 8 kW demand for a single range rated over 8-3/4 kW up to 12 kW."
          }
        ]
      },
      {
        "label": "COMPUTED — A demand load of 19,200 VA is served at 240 volts, single-phase. Enter the service current in amps.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_svc19200",
            "expected": 80,
            "hint": "I = 19,200 / 240 = 80 amps."
          }
        ]
      },
      {
        "label": "CHOICE — A 19,200 VA demand load at 240 volts draws 80 amps. What is the minimum service size for a one-family dwelling? 1) 60 amps 2) 80 amps 3) 100 amps 4) 200 amps",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_svcmin",
            "expected": 3,
            "hint": "230.79(C) requires at least a 100-amp disconnect for a one-family dwelling, even when the calculated load is smaller."
          }
        ]
      },
      {
        "label": "COMPUTED — A feeder serves a continuous load of 48 amps and a noncontinuous load of 32 amps. Enter the minimum feeder ampacity in amps.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_feeder",
            "expected": 92,
            "hint": "Continuous at 125%: 48 × 1.25 = 60, plus 32 noncontinuous = 92 amps."
          }
        ]
      },
      {
        "label": "COMPUTED — A commercial space has 50 receptacle outlets. Enter the connected receptacle load in VA at 180 VA each.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_recept50",
            "expected": 9000,
            "hint": "50 × 180 = 9,000 VA (220.14(I))."
          }
        ]
      },
      {
        "label": "COMPUTED — A 41,500 VA three-phase load is served at 480 volts. Enter the load current in amps (round to the nearest whole amp).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_3ph",
            "expected": 50,
            "hint": "I = 41,500 / (1.732 × 480) = 50 amps."
          }
        ]
      },
      {
        "label": "CHOICE — In a dwelling load calculation, the heating load is 12 kW and the air-conditioning load is 9 kW. Which is used? 1) Both are added 2) The larger — heating at 12 kW 3) The smaller — air conditioning at 9 kW 4) Neither",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_hvac",
            "expected": 2,
            "hint": "220.82(C) uses the larger of the heating or air-conditioning load, since both do not run at once."
          }
        ]
      }
    ]
  },
  {
    "id": "conduit-box-fill-drills",
    "title": "Conduit-Fill & Box-Fill Drills",
    "introHtml": "<p><strong>Job ticket — raceway day.</strong> You are pulling conductors and setting boxes for a small commercial job: conduit fill, box fill, and pull-box sizing. One wrong count and the pull jams — or the inspector red-tags the box.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: all practical work in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E — never work on live equipment; treat every circuit as live until it is tested and proven dead; ream every cut conduit end so the burr cannot cut conductor insulation. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong fill here is a jammed pull on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are about to pull conductors into a conduit that was just cut. Your call: 1) Pull immediately — the cut edge is fine 2) Ream the cut end to remove the inside burr, then pull 3) Tape over the cut end and pull 4) Pull slowly so the burr does not matter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_fill",
            "expected": 2,
            "hint": "Ream every cut end to remove the inside burr — a burr cuts conductor insulation during the pull."
          }
        ]
      },
      {
        "label": "CHOICE — What is the Chapter 9 Table 1 fill limit for a conduit with more than two conductors? 1) 53% 2) 31% 3) 40% 4) 60%",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_limit",
            "expected": 3,
            "hint": "Table 1: 53% for one conductor, 31% for two, 40% for more than two."
          }
        ]
      },
      {
        "label": "COMPUTED — Four 12 AWG THHN conductors (0.0133 sq in each) are pulled in 1/2-inch EMT (0.304 sq in). Enter the fill percentage, rounded to the nearest whole percent.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_4x12",
            "expected": 18,
            "hint": "4 × 0.0133 = 0.0532 sq in; 0.0532 / 0.304 = 0.175, about 18%."
          }
        ]
      },
      {
        "label": "COMPUTED — How many 10 AWG THHN conductors (0.0211 sq in each) fit in a 3/4-inch EMT (0.533 sq in) at the 40% fill limit? Enter the whole number.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_10awg",
            "expected": 10,
            "hint": "40% × 0.533 = 0.2132 sq in usable; 0.2132 / 0.0211 = 10.1, so 10 conductors fit."
          }
        ]
      },
      {
        "label": "COMPUTED — A box contains six 12 AWG conductors and one duplex receptacle. Enter the number of volume allowances (grounds count as 1).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_allow",
            "expected": 9,
            "hint": "6 conductors + 2 for the device + 1 for all grounds = 9 allowances."
          }
        ]
      },
      {
        "label": "COMPUTED — Nine volume allowances of 12 AWG (2.25 cu in each) need what minimum box volume? Enter the volume in cubic inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_volume",
            "expected": 20.25,
            "hint": "9 × 2.25 = 20.25 cubic inches (Table 314.16(B))."
          }
        ]
      },
      {
        "label": "CHOICE — What is the volume allowance for one 14 AWG conductor under Table 314.16(B)? 1) 2.0 cu in 2) 2.25 cu in 3) 2.5 cu in 4) 3.0 cu in",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_14awg",
            "expected": 1,
            "hint": "Table 314.16(B): 14 AWG is 2.0 cubic inches per allowance."
          }
        ]
      },
      {
        "label": "COMPUTED — A straight pull has a 2-inch raceway entering a box. Enter the minimum box length in inches under 314.28.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_straight",
            "expected": 16,
            "hint": "314.28: a straight pull needs a box at least 8 times the largest raceway — 8 × 2 = 16 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — An angle pull has a 2-inch raceway and a 1-inch raceway entering the same wall of a box. Enter the minimum wall length in inches under 314.28.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_angle",
            "expected": 13,
            "hint": "314.28: 6 × 2 + 1 = 13 inches for an angle pull."
          }
        ]
      },
      {
        "label": "CHOICE — What is the volume of a 4-inch square by 1-1/2-inch box under Table 314.16(A)? 1) 12.5 cu in 2) 18 cu in 3) 21 cu in 4) 30.3 cu in",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_boxvol",
            "expected": 2,
            "hint": "Table 314.16(A) lists a 4-inch square by 1-1/2-inch box at 18 cubic inches."
          }
        ]
      },
      {
        "label": "COMPUTED — Eight 12 AWG THHN conductors are pulled in 1-inch EMT (0.855 sq in). Enter the fill percentage, rounded to the nearest whole percent.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_8x12",
            "expected": 12,
            "hint": "8 × 0.0133 = 0.1064 sq in; 0.1064 / 0.855 = 0.124, about 12%."
          }
        ]
      },
      {
        "label": "CHOICE — A conduit fill calculation comes out to 45% with four conductors. What is the result? 1) It passes — the limit is 53% 2) It fails — the limit for more than two conductors is 40% 3) It passes — the limit is 60% 4) It fails — the limit is 31%",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_fail",
            "expected": 2,
            "hint": "Four conductors fall under the more-than-two rule: the Table 1 limit is 40%, so 45% fails."
          }
        ]
      }
    ]
  },
  {
    "id": "motor-control-ladder-drills",
    "title": "Motor-Control Ladder Drills",
    "introHtml": "<p><strong>Job ticket — motor-control day.</strong> You are sizing motor circuits and tracing ladder diagrams for a small shop: FLC lookups, conductor and breaker sizing, overload settings, and the three-wire start/stop circuit. Trace every rung before you answer.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: all practical work in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E — never work on live equipment; never bypass an overload relay to \"see if it runs\"; treat every circuit as live until it is tested and proven dead. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong overload setting here is a burned-up motor on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — A motor will not start and the overload relay is tripped. Your call: 1) Bypass the overload to see if it runs 2) Find and fix the cause of the overload, then reset 3) Replace the motor immediately 4) Hold the start button down",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_motor",
            "expected": 2,
            "hint": "A tripped overload is a symptom — find and fix the cause before resetting. Never bypass the overload."
          }
        ]
      },
      {
        "label": "COMPUTED — A 10-hp, 460-volt, three-phase motor has an FLC of 14 amps. Enter the minimum branch-circuit conductor ampacity under 430.22.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_cond10",
            "expected": 17.5,
            "hint": "430.22: 125% × 14 = 17.5 amps."
          }
        ]
      },
      {
        "label": "COMPUTED — A 5-hp, 460-volt, three-phase motor has an FLC of 7.6 amps. Enter the maximum inverse-time breaker size under Table 430.52 (use the exact 250% value).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_breaker5",
            "expected": 19,
            "hint": "Table 430.52: 250% × 7.6 = 19 amps (the next standard size is 20 amps)."
          }
        ]
      },
      {
        "label": "COMPUTED — A motor has a nameplate current of 20 amps and a service factor of 1.15. Enter the overload setting under 430.32.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_overload",
            "expected": 23,
            "hint": "Service factor 1.15 or greater: 115% × 20 = 23 amps."
          }
        ]
      },
      {
        "label": "COMPUTED — A motor has a nameplate current of 16 amps and a service factor of 1.0. Enter the overload setting under 430.32.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_overload2",
            "expected": 20,
            "hint": "Service factor below 1.15: 125% × 16 = 20 amps."
          }
        ]
      },
      {
        "label": "CHOICE — In a three-wire start/stop circuit, what keeps the motor running after the start button is released? 1) The stop button 2) The seal-in (holding) contact 3) The overload relay 4) The disconnect",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_sealin",
            "expected": 2,
            "hint": "The seal-in contact, wired in parallel with the start button, holds the starter coil energized."
          }
        ]
      },
      {
        "label": "CHOICE — How is the seal-in contact wired relative to the start button? 1) In series 2) In parallel 3) In place of it 4) It is not wired to it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_sealin2",
            "expected": 2,
            "hint": "The seal-in contact is wired in parallel with the start button."
          }
        ]
      },
      {
        "label": "COMPUTED — A feeder serves a 15-hp motor (FLC 21 A at 460 V) and a 7.5-hp motor (FLC 11 A). Enter the feeder conductor load under 430.24.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_feeder",
            "expected": 37.25,
            "hint": "430.24: 125% × 21 + 11 = 26.25 + 11 = 37.25 amps."
          }
        ]
      },
      {
        "label": "CHOICE — What does 430.102 require for a motor and its controller? 1) One disconnect for both, in another room 2) A disconnect for each, in sight of each 3) No disconnect if the motor is under 5 hp 4) A disconnect only for the controller",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_disc",
            "expected": 2,
            "hint": "430.102 requires a disconnecting means for the motor and for the controller, in sight of each."
          }
        ]
      },
      {
        "label": "CHOICE — \"In sight\" means visible and not more than how far away? 1) 25 feet 2) 50 feet 3) 100 feet 4) 10 feet",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_insight",
            "expected": 2,
            "hint": "\"In sight\" means visible and not more than 50 feet away."
          }
        ]
      },
      {
        "label": "CHOICE — Which table gives the full-load current for a three-phase AC motor? 1) Table 430.247 2) Table 430.248 3) Table 430.250 4) Table 310.16",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_table",
            "expected": 3,
            "hint": "Table 430.250 gives the FLC for three-phase AC motors."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-hp, 230-volt, three-phase motor has an FLC of 9.6 amps. Enter the minimum branch-circuit conductor ampacity under 430.22.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_cond3",
            "expected": 12,
            "hint": "430.22: 125% × 9.6 = 12 amps."
          }
        ]
      }
    ]
  },
  {
    "id": "nec-lookup-drills",
    "title": "NEC Lookup Drills",
    "introHtml": "<p><strong>Job ticket — Code-book day.</strong> You are answering lookup questions under time pressure, exactly as the open-book exams ask them: find the article, read the section, give the number. Use your 2023 NEC and your tabs — and the clock.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: all practical work in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E — never work on live equipment; treat every circuit as live until it is tested and proven dead; the Code book is a reference, not a substitute for the safety procedure. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each lookup in your Code book before entering it. A fast lookup is a passed exam.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — Your Code book says a circuit is de-energized, but you have not tested it. Your call: 1) Trust the book and touch the circuit 2) Test for absence of voltage with a meter verified live-dead-live 3) Ask the inspector 4) Read the section again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_lookup",
            "expected": 2,
            "hint": "The Code book never proves a circuit is dead — only a live-dead-live meter test does."
          }
        ]
      },
      {
        "label": "CHOICE — Which article covers branch circuits? 1) Article 210 2) Article 250 3) Article 430 4) Article 690",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_210",
            "expected": 1,
            "hint": "Article 210 covers branch circuits."
          }
        ]
      },
      {
        "label": "CHOICE — Which article covers grounding and bonding? 1) Article 210 2) Article 250 3) Article 220 4) Article 300",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_250",
            "expected": 2,
            "hint": "Article 250 covers grounding and bonding."
          }
        ]
      },
      {
        "label": "CHOICE — Which article covers solar photovoltaic systems? 1) Article 700 2) Article 760 3) Article 690 4) Article 430",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_690",
            "expected": 3,
            "hint": "Article 690 covers solar photovoltaic systems."
          }
        ]
      },
      {
        "label": "CHOICE — Which article covers fire alarm systems? 1) Article 700 2) Article 760 3) Article 725 4) Article 690",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_760",
            "expected": 2,
            "hint": "Article 760 covers fire alarm systems."
          }
        ]
      },
      {
        "label": "CHOICE — Which section requires listed equipment to be installed per its listing and labeling? 1) 90.1(A) 2) 110.3(B) 3) 210.8 4) 240.4(D)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_1103",
            "expected": 2,
            "hint": "110.3(B) requires listed equipment to be installed and used in accordance with its listing and labeling."
          }
        ]
      },
      {
        "label": "CHOICE — Which section sets the minimum service disconnect for a one-family dwelling at 100 amps? 1) 230.71 2) 230.79(C) 3) 230.9(A) 4) 210.11(C)(1)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_23079",
            "expected": 2,
            "hint": "230.79(C) requires at least a 100-amp disconnect for a one-family dwelling."
          }
        ]
      },
      {
        "label": "COMPUTED — The Michigan journeyman exam is 80 questions at 75%. Enter the number of correct answers needed to pass.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_jpass",
            "expected": 60,
            "hint": "75% × 80 = 60 correct answers."
          }
        ]
      },
      {
        "label": "COMPUTED — The Michigan master exam is 76 questions at 75%. Enter the number of correct answers needed to pass.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_mpass",
            "expected": 57,
            "hint": "75% × 76 = 57 correct answers."
          }
        ]
      },
      {
        "label": "CHOICE — The NABCEP PV Associate exam passes at what? 1) 65% correct 2) A scaled score of 65 on a 0–99 scale 3) 70% correct 4) 60 correct out of 70",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_nabcep",
            "expected": 2,
            "hint": "The PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%."
          }
        ]
      },
      {
        "label": "CHOICE — What is the pass mark for NCCER module tests? 1) 75% 2) 70% 3) 65% 4) 80%",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_nccer",
            "expected": 2,
            "hint": "Every NCCER module test passes at 70%; 75% is the journey-level assessment mark."
          }
        ]
      },
      {
        "label": "CHOICE — Which document amends the 2023 NEC for use in Michigan? 1) The Michigan Building Code 2) Michigan Part 8 amendments 3) The Detroit Electrical Code 4) The PSI Candidate Handbook",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nl_part8",
            "expected": 2,
            "hint": "Michigan adopted the 2023 NEC plus Michigan Part 8 amendments on March 12, 2024."
          }
        ]
      }
    ]
  }
];
