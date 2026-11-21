// cmp106 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "build-a-pc",
    "title": "Spec a PC: Parts for a Budget",
    "introHtml": "<p><strong>Build scenario.</strong> A friend has $800 to spend on a desktop computer for schoolwork, browsing, and light photo editing — no gaming. Your task: pick compatible parts that fit the budget and the job, in the right order.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before opening any PC or fitting any part: power off, unplug from the wall, wait a minute, and back up the data. Touch the metal case to discharge static, handle parts by their edges, and never open a power supply. This app cannot provide a virtual PC to take apart — these labs assume a real computer.</p><p><strong>The budget:</strong> $800 total. <strong>The job:</strong> schoolwork, browsing, light photo editing. No gaming.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you open the case to fit a part, what do you do first? 1) Open it while it is running to see the fans 2) Power off, unplug from the wall, wait a minute, and back up the data 3) Spray water inside to clean it 4) Open the power supply to check inside",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_safety",
            "expected": 2,
            "hint": "Power off, unplug, wait, and back up first. Working inside a running computer (1) is dangerous, water (3) destroys parts, and a power supply (4) must never be opened."
          }
        ]
      },
      {
        "label": "DECISION — Which part matters most for this job (schoolwork, browsing, light photo editing)? 1) The most expensive gaming graphics card 2) An SSD for fast startup, 16 GB of RAM, and a mid-range CPU 3) The biggest case with the most lights 4) A second monitor only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_pick",
            "expected": 2,
            "hint": "For this job, an SSD, 16 GB of RAM, and a mid-range CPU are what matter. A gaming graphics card (1) is wasted money here; lights (3) add nothing."
          }
        ]
      },
      {
        "label": "DECISION — The motherboard has DDR5 slots. Which RAM do you buy? 1) DDR4, because it is cheaper 2) DDR5, matching the slots 3) Any RAM — all types fit all slots 4) No RAM; the computer does not need it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_ram",
            "expected": 2,
            "hint": "DDR5, matching the slots. DDR4 (1) will not fit or work in a DDR5 slot, and (3) is wrong — types are not interchangeable."
          }
        ]
      },
      {
        "label": "COMPUTED — Parts so far: CPU $180, motherboard $120, RAM $70, SSD $60, case $60, power supply $70. How much has been spent? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_spent",
            "expected": 560,
            "hint": "180 + 120 + 70 + 60 + 60 + 70 = 560."
          }
        ]
      },
      {
        "label": "COMPUTED — The budget is $800 and $560 is spent. How much is left? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_left",
            "expected": 240,
            "hint": "800 − 560 = 240 left for the monitor, keyboard, and mouse."
          }
        ]
      },
      {
        "label": "DECISION — A graphics card costs $300 and would break the budget. What do you do? 1) Buy it anyway and go over budget 2) Use the CPU's integrated graphics, which handle this job fine 3) Leave out the power supply instead 4) Buy the card and leave out the SSD",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_gpu",
            "expected": 2,
            "hint": "Use integrated graphics: this job does not need a separate card. Going over budget (1) breaks the plan, and dropping the power supply (3) or SSD (4) breaks the computer."
          }
        ]
      },
      {
        "label": "DECISION — The parts list is ready. What is the last check before buying? 1) Check every part against the motherboard manual: socket, RAM type, size, and power 2) Buy the cheapest version of each part sight unseen 3) Skip the checks — parts always fit 4) Order two of everything",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_check",
            "expected": 1,
            "hint": "Check every part against the manual: socket, RAM type, physical fit, and power. Skipping the checks (3) is how parts end up unusable in a drawer."
          }
        ]
      },
      {
        "label": "COMPUTED — The finished list costs $560 for the computer plus a $150 monitor, a $30 keyboard, and a $20 mouse. What is the total? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_total",
            "expected": 760,
            "hint": "560 + 150 + 30 + 20 = 760, which is inside the $800 budget, with $40 to spare."
          }
        ]
      }
    ]
  },
  {
    "id": "wont-boot-no-wifi-slow-pc",
    "title": "Diagnose It: Won't Boot, No Wi-Fi, Slow PC",
    "introHtml": "<p><strong>Repair-shop scenario.</strong> Three computers arrive with three different faults. Work through each one step by step, in order, changing one thing at a time — and say when a job needs a technician.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> For every computer: back up the data before you change anything, power off and unplug before opening a case, and never open a power supply. If you smell burning, switch off at the wall and do not switch it back on.</p><p><strong>The three computers:</strong> (A) presses the power button and nothing happens — no lights, no fans. (B) turns on, but Wi-Fi shows no networks. (C) turns on and works, but is very slow, with the disk light on constantly.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Computer A will not turn on. Before you open its case, what do you do first? 1) Open the power supply to look inside 2) Back up the data if you can, power off, unplug, and wait — and never open the power supply 3) Plug it into a wet socket 4) Keep pressing the power button hard",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_safety",
            "expected": 2,
            "hint": "Back up, power off, unplug, and wait — and never open the power supply. Opening it (1) can seriously injure you; (3) and (4) are dangerous and useless."
          }
        ]
      },
      {
        "label": "DECISION — Computer A: no lights, no fans, nothing. What do you check first? 1) The motherboard 2) The power cable, the wall socket, and the power supply's own switch 3) The graphics card 4) The Wi-Fi driver",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_a1",
            "expected": 2,
            "hint": "Check the simple power path first: cable firmly in, socket on, supply switch on. The motherboard (1) and graphics card (3) cannot be the cause of no power at all."
          }
        ]
      },
      {
        "label": "DECISION — Computer A: the cable and socket are fine, and a known-good power supply still gives nothing. What next? 1) Keep buying parts at random 2) Suspect the motherboard or the power button, and take it to a technician 3) Open the old power supply 4) Throw the computer away",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_a2",
            "expected": 2,
            "hint": "A dead supply ruled out leaves the motherboard or power button — a technician's job. Buying parts at random (1) wastes money, and opening the supply (3) is dangerous."
          }
        ]
      },
      {
        "label": "DECISION — Computer B: Wi-Fi shows no networks, but other devices connect fine. What do you check first? 1) The internet provider's outage page 2) Wi-Fi on, airplane mode off, right network chosen, then restart Wi-Fi and the computer 3) Replace the router 4) Buy a new computer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_b1",
            "expected": 2,
            "hint": "Other devices work, so the fault is in this computer: Wi-Fi on, airplane mode off, right network, restart. The provider (1) and router (3) serve the working devices too."
          }
        ]
      },
      {
        "label": "DECISION — Computer B: Wi-Fi still shows nothing after a restart. What is the most likely next step? 1) Check the Wi-Fi driver in Device Manager, and update or reinstall it from the maker's site 2) Delete all the user's files 3) Open the power supply 4) Ignore it and use mobile data forever",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_b2",
            "expected": 1,
            "hint": "Check the Wi-Fi driver in Device Manager and reinstall it from the maker's site. Deleting files (2) cannot fix Wi-Fi, and (3) is dangerous."
          }
        ]
      },
      {
        "label": "DECISION — Computer C: very slow, disk light on constantly, Task Manager shows memory at 98% and the disk at 100%. What is the bottleneck? 1) The graphics card 2) Too little RAM: the computer is paging to storage, so the disk is busy 3) The monitor 4) The keyboard",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_c1",
            "expected": 2,
            "hint": "Memory at 98% with a busy disk means the computer has run out of RAM and is paging to slow storage. The graphics card (1) and monitor (3) cannot cause a busy disk."
          }
        ]
      },
      {
        "label": "COMPUTED — Computer C has 8 GB of RAM. You add a 8 GB stick. How much RAM does it have now? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_c2",
            "expected": 16,
            "hint": "8 + 8 = 16 GB, the comfortable amount for most people."
          }
        ]
      },
      {
        "label": "DECISION — Computer C is still slow after the RAM upgrade, and it still starts from a hard drive. What is the best next step? 1) Fit an SSD as the boot drive — the biggest single speed-up 2) Buy a bigger monitor 3) Add more RAM again 4) Paint the case",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dg_c3",
            "expected": 1,
            "hint": "An SSD as the boot drive is the biggest single speed-up for a computer still on a hard drive. A monitor (2) and paint (4) change nothing; more RAM (3) is not the bottleneck now."
          }
        ]
      }
    ]
  }
];
