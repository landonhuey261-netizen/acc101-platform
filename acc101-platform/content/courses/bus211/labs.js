module.exports = [
  {
    "id": "hiring-decision",
    "title": "Hiring Decision",
    "introHtml": "<p><strong>Case — Lakeside Logistics, hiring round.</strong> You are the HR generalist at Lakeside Logistics. The warehouse needs 4 warehouse associates and 1 supervisor, and the hiring round starts now. Your task: plan the funnel, choose the candidates on evidence, check the pay and the law, and close with a fair, documented decision. Read the case in the task, then answer each decision row.</p><p><strong>Two tracks — pick how you work:</strong> <strong>Track A (worked example):</strong> study the completed depot example in the task first — every number is shown — then do the Lakeside numbers yourself. <strong>Track B (do it yourself):</strong> go straight to the rows and use the hints. Either way, the gradebook scores the same rows.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Lakeside Logistics: 40 warehouse staff, 8 leavers last year, a supervisor vacancy, and 4 associate vacancies. The hiring funnel's overall yield is 2% (2 hires per 100 applicants). Recruiting for the 4 associates costs $12,000 in total. The supervisor is paid $48,000 against a midpoint of $50,000. The supervisor works 46 hours in a week at $22/hour (non-exempt). Associates earn $40,000 with benefits worth 30% of pay. One associate asks for FMLA leave after 14 months and 1,400 hours; the company has 80 employees. <strong>Good looks like:</strong> a funnel wide enough to hire from, candidates chosen on weighted scores, pay checked against the midpoint, overtime paid correctly, and every decision documented.</p><p><strong>Worked example (Track A) — the depot case, completed.</strong> A depot needs 2 drivers and its funnel yield is 5%. Applicants needed = 2 ÷ 0.05 = 40 applicants. Recruiting costs $6,000 for the 2 hires → cost per hire = $6,000 ÷ 2 = $3,000. Candidates scored on experience 40%, skills test 40%, interview 20%: A scores 7, 8, 6 → 0.40×7 + 0.40×8 + 0.20×6 = 2.80 + 3.20 + 1.20 = 7.20. B scores 8, 7, 9 → 3.20 + 2.80 + 1.80 = 7.80. Best is B (7.80). A non-exempt worker at $20/hour working 48 hours is owed 40 × $20 + 8 × $30 = $800 + $240 = $1,040. Study these numbers, then do Lakeside's own numbers below.</p><p><strong>The Lakeside numbers.</strong> Associate candidates (experience 40%, skills test 40%, interview 20%): Candidate A scores 7, 8, 6. Candidate B scores 8, 7, 9. Candidate C scores 9, 6, 7. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — What is the first thing you should do about the 5 vacancies? 1) Post the ads today and hire the fastest applicants 2) Do the job analysis, write the descriptions and criteria, then recruit 3) Ask current staff to recommend friends only 4) Hire from the last round's rejected applicants",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_frame",
            "expected": 2,
            "hint": "Step 0 governs: without job analysis and criteria, hiring is guessing — and the funnel will attract the wrong people. Speed (1), referrals only (3), and old rejects (4) all skip the foundation."
          }
        ]
      },
      {
        "label": "COMPUTED — You need to hire 4 associates and the funnel's overall yield is 2%. How many applicants are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_funnel",
            "expected": 200,
            "hint": "Applicants = hires ÷ yield = 4 ÷ 0.02 = 200 applicants. Work the funnel backwards from the hires you need."
          }
        ]
      },
      {
        "label": "COMPUTED — Recruiting for the 4 associates costs $12,000 in total. What is the cost per hire? (Enter the dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_cph",
            "expected": 3000,
            "hint": "Cost per hire = total recruiting cost ÷ hires = $12,000 ÷ 4 = $3,000."
          }
        ]
      },
      {
        "label": "COMPUTED — Candidate B scores 8 (experience, 40%), 7 (skills test, 40%), 9 (interview, 20%). What is B's weighted score? (Enter the number, e.g. 7.8.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_score_b",
            "expected": 7.8,
            "hint": "Weighted score = 0.40×8 + 0.40×7 + 0.20×9 = 3.20 + 2.80 + 1.80 = 7.80. Work it the same way as the depot example."
          }
        ]
      },
      {
        "label": "DECISION — Candidate A scores 7.20, Candidate B scores 7.80, Candidate C scores 7.40. Who should be hired first? 1) Candidate A 2) Candidate B 3) Candidate C 4) None — start over",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_hire",
            "expected": 2,
            "hint": "Decide against the criteria on the evidence: B's 7.80 is the highest weighted score. A (7.20) and C (7.40) score lower on the same criteria."
          }
        ]
      },
      {
        "label": "COMPUTED — The supervisor earns $22/hour (non-exempt) and works 46 hours in a week. What is the total pay owed? (Enter the dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_overtime",
            "expected": 1078,
            "hint": "Regular: 40 × $22 = $880. Overtime: 6 × ($22 × 1.5) = 6 × $33 = $198. Total = $880 + $198 = $1,078. Straight time ($1,012) would underpay by $66."
          }
        ]
      },
      {
        "label": "COMPUTED — The supervisor is paid $48,000 against a pay midpoint of $50,000. What is the compa-ratio? (Enter the number, e.g. 0.96.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_compa",
            "expected": 0.96,
            "hint": "Compa-ratio = pay ÷ midpoint = $48,000 ÷ $50,000 = 0.96 — below the midpoint, as expected for a developing supervisor."
          }
        ]
      },
      {
        "label": "COMPUTED — An associate earns $40,000 with benefits worth 30% of pay. What are the benefits worth in dollars? (Enter the dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_benefits",
            "expected": 12000,
            "hint": "Benefits = 30% × $40,000 = 0.30 × $40,000 = $12,000. Total rewards are $40,000 + $12,000 = $52,000."
          }
        ]
      },
      {
        "label": "DECISION — An associate with 14 months and 1,400 hours at an 80-employee company asks for FMLA leave to care for a parent. Is the associate eligible? 1) Yes — eligible 2) No — not eligible",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_fmla",
            "expected": 1,
            "hint": "Eligible: employer has 50+ employees (80), employee worked 12+ months (14) and 1,250+ hours (1,400). FMLA gives up to 12 weeks of unpaid, job-protected leave."
          }
        ]
      },
      {
        "label": "DECISION — How should the final interviews be run? 1) A free-form chat and a gut feeling 2) Structured interviews: same questions, scored against the criteria, by a panel of two 3) One manager alone, asking whatever comes to mind 4) No interview — hire on the CV alone",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_interview",
            "expected": 2,
            "hint": "Structured interviews predict best and are the fairest: same questions, scored against the criteria, by a panel. A chat (1, 3) predicts poorly and invites bias; a CV alone (4) tests nothing about the person."
          }
        ]
      },
      {
        "label": "COMPUTED — Lakeside has 40 warehouse staff and 8 leavers last year. What is the annual turnover rate, as a percentage? (Enter the number, e.g. 20.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_turnover",
            "expected": 20,
            "hint": "Turnover = leavers ÷ headcount = 8 ÷ 40 = 0.20 = 20%."
          }
        ]
      },
      {
        "label": "DECISION — The hiring round is done: 5 hires made, all documented. How do you close? 1) Move on and say nothing 2) File the scores and reasons, tell unsuccessful candidates promptly, and start the 30/60/90-day onboarding plans 3) Tell only the hires 4) Delete the interview notes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hd_close",
            "expected": 2,
            "hint": "Close with a record and onboarding (2): file the scores and reasons, tell unsuccessful candidates promptly and kindly, and start onboarding — the hires' first 90 days decide whether they stay. Deleting notes (4) destroys the defense if a decision is ever challenged."
          }
        ]
      }
    ],
    "passing": 70
  }
];
