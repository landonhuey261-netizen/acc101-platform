// con112 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "full-quantity-takeoff-and-estimate",
    "title": "Full Quantity Takeoff and Estimate",
    "introHtml": "<p><strong>Job: a 30-by-20-foot detached workshop, 8-foot walls, slab on grade with a perimeter footing.</strong> You are the estimator. The drawings are approved and the permit is in hand. Work through the takeoff line by line, then price the job and build the bid. Every number below comes from the drawings and the rates given — show your work on paper, then enter each answer. Round concrete to two decimal places where asked; round paint up to whole gallons; round ordered concrete up to whole yards.</p><p><strong>What you are given:</strong> Footing run 100 feet (the full perimeter), 2 feet wide, 1.5 feet deep. Slab 30 by 20 feet, 4 inches thick. Walls total 100 linear feet, 8 feet high. Concrete costs $150 per cubic yard. Rebar #5 weighs 1.043 pounds per foot. Paint covers 350 square feet per gallon per coat. Direct costs: materials $18,000, labor $12,800, equipment $2,000. Indirect costs $3,200. Overhead 10%, profit 10%.</p>",
    "taskHtml": "<p><strong>Step 1 — Concrete.</strong> Compute the footing volume and the slab volume in cubic yards (1 cubic yard = 27 cubic feet). Add them for the total concrete.</p><p><strong>Step 2 — Formwork and rebar.</strong> Compute the footing formwork (both sides) in square feet and the weight of the two continuous #5 bars in the footing.</p><p><strong>Step 3 — Walls and finishes.</strong> Compute the studs (16 inches on center), the drywall sheets (4 by 8 feet), the paint (two coats), the flooring (5% waste), and the baseboard (10% waste).</p><p><strong>Step 4 — Price it.</strong> Round the total concrete up to whole yards and price it, then build the full bid price from the direct and indirect costs with overhead and profit.</p><p><strong>Remember:</strong> this lab is a planning and calculation exercise. It does not certify you and it does not grade hands-on skill — it practices the takeoff and the bid.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The footing run is 100 feet long, 2 feet wide, and 1.5 feet deep. How many cubic yards of concrete does the footing need? (Round to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ftg_conc",
            "expected": 11.11,
            "hint": "Volume = 100 × 2 × 1.5 = 300 cubic feet. Divide by 27 cubic feet per cubic yard: 300 ÷ 27 = 11.11 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab is 30 by 20 feet and 4 inches thick. How many cubic yards of concrete does the slab need? (Round to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "slab_conc",
            "expected": 7.41,
            "hint": "Area = 30 × 20 = 600 square feet. 4 inches = 1/3 foot, so volume = 600 × 1/3 = 200 cubic feet. 200 ÷ 27 = 7.41 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — The footing needs formwork on both sides, 1.5 feet deep, along the full 100-foot run. How many square feet of formwork is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "formwork",
            "expected": 300,
            "hint": "One side = 100 × 1.5 = 150 square feet. Both sides = 150 × 2 = 300 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The footing has two continuous #5 bars running the full 100 feet. How many pounds of rebar is that? (#5 weighs 1.043 pounds per foot.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rebar_lb",
            "expected": 208.6,
            "hint": "Two bars × 100 feet = 200 feet of bar. 200 × 1.043 = 208.6 pounds."
          }
        ]
      },
      {
        "label": "COMPUTED — The four walls total 100 linear feet, framed at 16 inches on center. About how many studs are needed?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "studs",
            "expected": 76,
            "hint": "100 feet = 1,200 inches. 1,200 ÷ 16 = 75 spaces, plus 1 = 76 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — The four walls total 100 linear feet and 8 feet high. How many 4-by-8-foot drywall sheets cover them?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "drywall",
            "expected": 25,
            "hint": "Wall area = 100 × 8 = 800 square feet. Each sheet covers 4 × 8 = 32 square feet. 800 ÷ 32 = 25 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — The walls are 800 square feet and need two coats of paint at 350 square feet per gallon per coat. How many gallons must be bought? (Round up to whole gallons.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "paint",
            "expected": 5,
            "hint": "Two coats = 800 × 2 = 1,600 square feet. 1,600 ÷ 350 = 4.57 gallons, rounded up to 5 gallons — paint is bought by the whole gallon."
          }
        ]
      },
      {
        "label": "COMPUTED — The floor is 30 by 20 feet and needs flooring with 5% waste. How many square feet should be ordered?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "flooring",
            "expected": 630,
            "hint": "Area = 30 × 20 = 600 square feet. 600 × 1.05 = 630 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Baseboard runs the full 100-foot perimeter, with 10% waste. How many linear feet should be ordered?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "baseboard",
            "expected": 110,
            "hint": "Perimeter = 100 linear feet. 100 × 1.10 = 110 linear feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The footing needs 11.11 cubic yards and the slab needs 7.41 cubic yards. Rounded up to whole yards, how many cubic yards are ordered, and what do they cost at $150 per cubic yard? Enter the cost in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_cost",
            "expected": 2850,
            "hint": "Total = 11.11 + 7.41 = 18.52 cubic yards, rounded up to 19 whole yards. 19 × $150 = $2,850."
          }
        ]
      },
      {
        "label": "COMPUTED — The framing crew costs $1,600 a day and frames 100 square feet of wall a day. The walls are 800 square feet. What is the framing labor cost?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "labor_cost",
            "expected": 12800,
            "hint": "Days = 800 ÷ 100 = 8 days. Cost = 8 × $1,600 = $12,800."
          }
        ]
      },
      {
        "label": "COMPUTED — Direct costs are materials $18,000, labor $12,800, and equipment $2,000. Indirect costs are $3,200. Overhead is 10% and profit is 10%. What is the bid price in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bid_price",
            "expected": 43560,
            "hint": "Direct + indirect = $18,000 + $12,800 + $2,000 + $3,200 = $36,000. Add overhead: $36,000 × 1.10 = $39,600. Add profit: $39,600 × 1.10 = $43,560."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "schedule-and-permit-planning",
    "title": "Schedule and Permit Planning",
    "introHtml": "<p><strong>Job: the same 30-by-20-foot detached workshop.</strong> You are the project manager now. The permit application goes in on day 0. Plan review takes 15 days. Then: footing excavation 2 days, footing inspection, slab pour 3 days, concrete cure 7 days, framing 10 days, framing inspection, rough-in 8 days, rough-in inspection, drywall and finishes 12 days, final inspection, and the certificate of occupancy the day after the final inspection. Work through the timeline, then answer the planning questions. Inspections happen on their own day, after the work they inspect is finished.</p><p><strong>What you are given:</strong> Day 0 = permit application. Review = 15 days. Excavation = 2 days. Pour = 3 days. Cure = 7 days. Framing = 10 days. Rough-in = 8 days. Finishes = 12 days. Retainage = 10%. A change order adds $1,200 of materials and $800 of labor, with 10% overhead and 10% profit.</p>",
    "taskHtml": "<p><strong>Step 1 — Build the timeline.</strong> Work forward from day 0: when is the permit issued, when is each inspection, and when is the certificate of occupancy issued?</p><p><strong>Step 2 — Read the schedule.</strong> Find the total duration, the float on a non-critical activity, and the effect of a critical-path delay.</p><p><strong>Step 3 — Money and changes.</strong> Compute a retainage payment and price a change order, then work out what a failed inspection does to the finish date.</p><p><strong>Remember:</strong> this lab is a planning and calculation exercise. It does not certify you and it does not grade hands-on skill.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The permit application goes in on day 0 and plan review takes 15 days. On what day is the permit issued?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "permit_day",
            "expected": 15,
            "hint": "Day 0 + 15 days of review = day 15. Work cannot start before the permit is issued."
          }
        ]
      },
      {
        "label": "COMPUTED — Footing excavation takes 2 days after the permit is issued, and the footing inspection is the day after excavation finishes. On what day is the footing inspection?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "footing_insp",
            "expected": 18,
            "hint": "Permit day 15, excavation days 16–17, inspection day 18."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab pour takes 3 days after the footing inspection, then the concrete cures for 7 days before framing can start. On what day does framing start?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "framing_start",
            "expected": 29,
            "hint": "Pour days 19–21, then 7 days of cure (days 22–28), so framing starts on day 29."
          }
        ]
      },
      {
        "label": "COMPUTED — Framing takes 10 days, and the framing inspection is the day after framing finishes. On what day is the framing inspection?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "framing_insp",
            "expected": 39,
            "hint": "Framing days 29–38, so the framing inspection is on day 39."
          }
        ]
      },
      {
        "label": "COMPUTED — Rough-in takes 8 days after the framing inspection, and the rough-in inspection is the day after rough-in finishes. On what day is the rough-in inspection?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "roughin_insp",
            "expected": 48,
            "hint": "Rough-in days 40–47, so the rough-in inspection is on day 48."
          }
        ]
      },
      {
        "label": "COMPUTED — Drywall and finishes take 12 days after the rough-in inspection, the final inspection is the day after finishes end, and the certificate of occupancy is issued the day after the final inspection. On what day is the certificate of occupancy issued?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "co_day",
            "expected": 62,
            "hint": "Finishes days 49–60, final inspection day 61, certificate of occupancy day 62."
          }
        ]
      },
      {
        "label": "COMPUTED — From the permit application on day 0 to the certificate of occupancy, how many days does the whole project take?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "total_days",
            "expected": 62,
            "hint": "Application day 0 to certificate of occupancy day 62 is a 62-day project."
          }
        ]
      },
      {
        "label": "COMPUTED — The landscaping activity takes 4 days and can slip by 6 days without delaying the certificate of occupancy. What is its total float, in days?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "float",
            "expected": 6,
            "hint": "Total float is how much an activity can slip before it delays the job — here, 6 days."
          }
        ]
      },
      {
        "label": "COMPUTED — A payment application is for $20,000 and retainage is 10%. How many dollars does the owner pay on this application?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retainage_pay",
            "expected": 18000,
            "hint": "Retainage = 10% of $20,000 = $2,000 held back. Payment = $20,000 − $2,000 = $18,000."
          }
        ]
      },
      {
        "label": "COMPUTED — A change order adds $1,200 of materials and $800 of labor, with 10% overhead and 10% profit. What is the change order price in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "change_order",
            "expected": 2420,
            "hint": "Direct cost = $1,200 + $800 = $2,000. Add overhead: $2,000 × 1.10 = $2,200. Add profit: $2,200 × 1.10 = $2,420."
          }
        ]
      },
      {
        "label": "COMPUTED — The footing inspection fails and the re-inspection adds 2 days to the schedule. The final inspection was planned for day 61. On what day does it move to?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "delayed_final",
            "expected": 63,
            "hint": "The footing inspection is on the critical path, so a 2-day delay moves everything after it by 2 days: 61 + 2 = 63."
          }
        ]
      },
      {
        "label": "COMPUTED — The permit is issued on day 15 and the certificate of occupancy is issued on day 62. For how many days must the permit be posted on the job?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "permit_posted",
            "expected": 47,
            "hint": "The permit is posted from the day it is issued until the job closes: 62 − 15 = 47 days."
          }
        ]
      }
    ],
    "passing": 70
  }
];
