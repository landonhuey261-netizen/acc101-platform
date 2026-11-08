// MKT101 — Scenario labs.
// Each row is checked on a single numeric input in column 1 (option number or computed value),
// except the TVM workpaper, which uses the ACC 101 multi-column workpaper pattern with a CSV download.

module.exports = [
  {
    "id": "market-research-segmentation",
    "title": "Market Research & Segmentation",
    "introHtml": "<p><strong>Case: NorthTrail Outfitters, Grand Rapids, Michigan.</strong> NorthTrail sells hiking and camping gear. It wants to launch a new line of lightweight trail gear, but it does not know which customers to serve first. It surveyed 400 adults in its trading area and has the town's population figures. Your task: work the survey numbers, size the segments, score them, and pick the target — in the right order. Read the case in the task, then answer each decision row.</p><p><strong>Worked example — study this first (a different segment, already completed):</strong> the “Downtown Commuters” segment has 20,000 people. NorthTrail expects 10% to hear about its offer (20,000 × 0.10 = 2,000 people) and 25% of those to try it (2,000 × 0.25 = 500 first-year customers). That is the exact calculation you will do for your own segments below — same steps, different numbers.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> NorthTrail Outfitters surveyed 400 adults. 280 had heard of NorthTrail, and 260 said they would try the new trail gear. The town has 50,000 adults, split into three segments: Segment A “Weekend Trail Hikers” (32%), Segment B “Family Campers” (24%), and Segment C “Budget Students” (18%); the rest (26%) are other buyers. Segment scores (1–5, higher is better) are: A — size 4, growth 5, fit 4, competition 3; B — size 4, growth 3, fit 3, competition 3; C — size 3, growth 3, fit 2, competition 3. The target segment's offer is $48 per purchase, bought twice a year. <strong>Good looks like:</strong> every number computed from the survey and the population, the highest-scoring segment chosen, and a positioning that matches that segment — not the cheapest price for everyone.</p><p><strong>The correct order:</strong> Step 1 — Define the problem and the decision (the first step of market research). Step 2 — Work the survey numbers. Step 3 — Size the segments. Step 4 — Score and pick the target. Step 5 — Estimate first-year customers and revenue. Step 6 — Position the offer for the chosen segment. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Before NorthTrail spends anything on research, what must it do first? 1) Define the problem and the decision the research must inform 2) Run a survey of 400 people 3) Launch an ad campaign 4) Pick a price for the new gear",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_framing",
            "expected": 1,
            "hint": "Step 1 of market research is defining the problem and the decision — not collecting data (2), advertising (3), or pricing (4). If you cannot state the decision the research will change, do not start collecting yet."
          }
        ]
      },
      {
        "label": "COMPUTED — 400 people were surveyed and 280 had heard of NorthTrail. What is awareness, as a percentage? (Enter the number, e.g. 70 for 70%.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_awareness",
            "expected": 70,
            "hint": "Awareness = 280 ÷ 400 = 0.70 = 70%."
          }
        ]
      },
      {
        "label": "COMPUTED — 260 of the 400 surveyed said they would try the new gear. What is the interest rate, as a percentage?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_interest",
            "expected": 65,
            "hint": "Interest = 260 ÷ 400 = 0.65 = 65%. Note it is below awareness (70%) — some people know the shop and still would not try it."
          }
        ]
      },
      {
        "label": "COMPUTED — The town has 50,000 adults. Segment A is 32% of them. How many people is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_seg_a",
            "expected": 16000,
            "hint": "50,000 × 0.32 = 16,000 people."
          }
        ]
      },
      {
        "label": "COMPUTED — Segment B is 24% of 50,000 adults. How many people is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_seg_b",
            "expected": 12000,
            "hint": "50,000 × 0.24 = 12,000 people."
          }
        ]
      },
      {
        "label": "COMPUTED — Segment C is 18% of 50,000 adults. How many people is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_seg_c",
            "expected": 9000,
            "hint": "50,000 × 0.18 = 9,000 people."
          }
        ]
      },
      {
        "label": "COMPUTED — Segment A scores size 4, growth 5, fit 4, competition 3 (1–5). What is its total score?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_score_a",
            "expected": 16,
            "hint": "4 + 5 + 4 + 3 = 16. Segment B totals 13 and Segment C totals 11, so A is the highest-scoring segment."
          }
        ]
      },
      {
        "label": "DECISION — Which segment should NorthTrail target? 1) Segment A — Weekend Trail Hikers 2) Segment B — Family Campers 3) Segment C — Budget Students",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_target",
            "expected": 1,
            "hint": "Segment A scores 16, against 13 for B and 11 for C — driven by the strongest growth (5) and fit (4). Target A."
          }
        ]
      },
      {
        "label": "COMPUTED — Segment A has 16,000 people. NorthTrail expects 20% to hear about the offer and 25% of those to try it in year one. How many first-year customers is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_customers",
            "expected": 800,
            "hint": "16,000 × 0.20 = 3,200 hear about it; 3,200 × 0.25 = 800 try it. That is 5% of the segment — the same steps as the worked example."
          }
        ]
      },
      {
        "label": "COMPUTED — The 800 first-year customers each buy twice a year at $48. What is first-year revenue from Segment A?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_revenue",
            "expected": 76800,
            "hint": "800 × 2 × $48 = $76,800. Check: 1,600 purchases × $48 = $76,800."
          }
        ]
      },
      {
        "label": "DECISION — Which positioning fits Segment A (weekend hikers who value durability and local trails)? 1) The cheapest gear for everyone 2) Trail-ready gear for weekend hikers, fitted while you wait 3) Luxury gear for professional climbers",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_position",
            "expected": 2,
            "hint": "Option 2 matches the segment: weekend hikers who value durability and local knowledge. Option 1 is a mass-market claim that fits nobody, and option 3 is for a different segment entirely."
          }
        ]
      },
      {
        "label": "COMPUTED — Worked-example check: the “Downtown Commuters” segment has 20,000 people; 10% hear about the offer and 25% of those try it. How many first-year customers is that?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mrs_worked",
            "expected": 500,
            "hint": "20,000 × 0.10 = 2,000 hear about it; 2,000 × 0.25 = 500 try it. This is the worked example from the intro, recomputed here as a check."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "marketing-budget-roi",
    "title": "Marketing Budget & ROI",
    "introHtml": "<p><strong>Case: NorthTrail Outfitters, one quarter.</strong> NorthTrail spent $20,000 on marketing last quarter: $6,000 on Google Ads, $8,000 on social ads, $2,000 on email, and $4,000 on an influencer. It tracked every lead, every customer, and every dollar of revenue. Your task: compute the cost of a lead and a customer in each channel, work out what the customers are worth, and decide what to scale, fix, or stop next quarter.</p><p><strong>Worked example — study this first (last quarter, already completed, and it lost money):</strong> NorthTrail spent $10,000, generated 300 leads, and won 60 customers. CAC = $10,000 ÷ 60 = $166.67. Average order $150, margin 40%, 2 purchases a year → gross profit per order $60, LTV $120. LTV-to-CAC = $120 ÷ $166.67 = 0.72 — below 1, so the campaign lost money on every customer it won. Revenue was 60 × $150 × 2 = $18,000, gross profit $7,200, ROI = ($7,200 − $10,000) ÷ $10,000 = −28.0%. The lesson: scale only what the numbers support.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> This quarter's numbers: Google Ads — $6,000 spent, 300 leads. Social ads — $8,000 spent, 200 leads. Email — $2,000 spent, 80 leads. Influencer — $4,000 spent, 80 leads. Total spend $20,000. 25% of leads become customers. Average order $180, margin 40%, 3 purchases a year. <strong>Good looks like:</strong> every channel judged by cost per lead and cost per conversion (not by clicks or views), the customers' lifetime value compared with what they cost to win, and a next-quarter decision that scales the winners and stops the losers.</p><p><strong>The correct order:</strong> Step 1 — Decide the approach: test small, then scale the winners. Step 2 — Cost per lead by channel. Step 3 — Total leads and blended cost per lead. Step 4 — Customers, CAC, and LTV. Step 5 — ROI and the scale-or-stop decision. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — NorthTrail has $20,000 for next quarter. What is the right approach? 1) Test small, measure, then scale the channels that work 2) Spend it all on the one channel with the most followers 3) Copy whatever the competitor is doing 4) Spend nothing and hope word of mouth is enough",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_framing",
            "expected": 1,
            "hint": "Test small, measure, then scale the winners (1) — the numbers in this lab exist to make that decision. Spending on followers (2) or copying a competitor (3) ignores your own costs, and spending nothing (4) is not a plan."
          }
        ]
      },
      {
        "label": "COMPUTED — Google Ads: $6,000 spent, 300 leads. What is the cost per lead, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_cpl_google",
            "expected": 20,
            "hint": "$6,000 ÷ 300 = $20.00 per lead — the cheapest channel in this campaign."
          }
        ]
      },
      {
        "label": "COMPUTED — Social ads: $8,000 spent, 200 leads. What is the cost per lead, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_cpl_social",
            "expected": 40,
            "hint": "$8,000 ÷ 200 = $40.00 per lead — double Google's cost."
          }
        ]
      },
      {
        "label": "COMPUTED — Email: $2,000 spent, 80 leads. What is the cost per lead, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_cpl_email",
            "expected": 25,
            "hint": "$2,000 ÷ 80 = $25.00 per lead."
          }
        ]
      },
      {
        "label": "COMPUTED — Influencer: $4,000 spent, 80 leads. What is the cost per lead, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_cpl_infl",
            "expected": 50,
            "hint": "$4,000 ÷ 80 = $50.00 per lead — the most expensive channel in this campaign."
          }
        ]
      },
      {
        "label": "COMPUTED — Total leads across all four channels. How many leads did the $20,000 buy?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_leads",
            "expected": 660,
            "hint": "300 + 200 + 80 + 80 = 660 leads."
          }
        ]
      },
      {
        "label": "COMPUTED — Blended cost per lead: $20,000 spent for 660 leads. What is it, in dollars? (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_blended_cpl",
            "expected": 30.3,
            "hint": "$20,000 ÷ 660 = $30.30 per lead."
          }
        ]
      },
      {
        "label": "COMPUTED — 25% of the 660 leads become customers. How many customers did the campaign win?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_customers",
            "expected": 165,
            "hint": "660 × 0.25 = 165 customers."
          }
        ]
      },
      {
        "label": "COMPUTED — CAC: $20,000 spent to win 165 customers. What is the customer acquisition cost, in dollars? (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_cac",
            "expected": 121.21,
            "hint": "$20,000 ÷ 165 = $121.21 per customer."
          }
        ]
      },
      {
        "label": "COMPUTED — LTV: average order $180, margin 40%, 3 purchases a year. What is the one-year lifetime value in gross profit, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_ltv",
            "expected": 216,
            "hint": "Gross profit per order = $180 × 0.40 = $72; $72 × 3 purchases = $216. LTV-to-CAC = $216 ÷ $121.21 = 1.78 — above 1, below the 3:1 guide."
          }
        ]
      },
      {
        "label": "COMPUTED — ROI: the 165 customers produce $35,640 of gross profit on $20,000 of spend. What is the ROI, as a percentage? (Enter the number, e.g. 78.2 for 78.2%.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_roi",
            "expected": 78.2,
            "hint": "ROI = ($35,640 − $20,000) ÷ $20,000 = $15,640 ÷ $20,000 = 78.2%. Revenue was 165 × $180 × 3 = $89,100; gross profit is 40% of that, $35,640."
          }
        ]
      },
      {
        "label": "DECISION — What should NorthTrail do next quarter? 1) Scale Google Ads and email, cut the influencer 2) Double the influencer spend 3) Stop all advertising 4) Spend the same on every channel",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mbr_decision",
            "expected": 1,
            "hint": "Google ($20 per lead) and email ($25) are the cheapest; the influencer ($50) is the most expensive and should be cut. Doubling the influencer (2) scales the worst channel, stopping everything (3) throws away a 78.2% ROI, and equal spending (4) ignores the evidence."
          }
        ]
      }
    ],
    "passing": 70
  }
];
