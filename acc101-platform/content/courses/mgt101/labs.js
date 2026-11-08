module.exports = [
  {
    "id": "team-decision-case",
    "title": "Team Decision Case",
    "introHtml": "<p><strong>Case — Riverside Café, Saturday morning.</strong> You are the new manager of Riverside Café. The café has 24 staff, a morning wait averaging 12 minutes, and a shift-lead vacancy. Your task: hire the right shift lead, organize the team, and fix the morning rush — in the right order, with the numbers to prove it. Read the case in the task, then answer each decision row.</p><p><strong>Two tracks — pick how you work:</strong> <strong>Track A (worked example):</strong> study the completed bakery example in the task first — every number is shown — then do the café case yourself. <strong>Track B (do it yourself):</strong> go straight to the rows and use the hints. Either way, the gradebook scores the same rows.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Riverside Café: 24 staff, average wait 12 minutes (target 8), one shift-lead vacancy, a team that argues about who decides what, and a weekly team meeting that runs 1 hour. Your decisions, in order: define the job and criteria first; choose the shift lead on weighted scores; organize the team with the right span of control; fix the meeting; lead the new team in the right style; and close with a written plan. <strong>Good looks like:</strong> a hire chosen on evidence, a team that knows who decides what, and a wait time that falls — all measured, not guessed.</p><p><strong>Worked example (Track A) — the bakery case, completed.</strong> A bakery hires a shift lead from 3 candidates. Criteria and weights: experience 40%, service test 35%, availability 25%. Candidate A scores 8, 7, 6 → 0.40×8 + 0.35×7 + 0.25×6 = 3.20 + 2.45 + 1.50 = 7.15. Candidate B scores 6, 9, 8 → 2.40 + 3.15 + 2.00 = 7.55. Candidate C scores 9, 6, 5 → 3.60 + 2.10 + 1.25 = 6.95. Best is B (7.55). The bakery's weekly meeting: 6 people × $25/hour × 1 hour = $150. The bakery's expectancy check: 0.8 × 0.9 × 0.5 = 0.36. Study these numbers, then do the café's own numbers below.</p><p><strong>The café's numbers.</strong> Shift-lead candidates (experience 40%, service test 35%, availability 25%): Candidate A scores 8, 7, 6. Candidate B scores 6, 9, 8. Candidate C scores 9, 6, 5. The team will grow to 24 staff with a span of control of 6. The weekly meeting has 7 people at $30/hour for 1 hour. The motivation check for the new bonus is expectancy 0.8, instrumentality 0.9, valence 0.5. Last month the café filled 5,000 orders with a 4% error rate; the target is 2%. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — What is the first thing you should do about the shift-lead vacancy? 1) Hire the fastest applicant today 2) Define the job and the selection criteria first, then recruit 3) Ask the team to vote on who they like 4) Leave the vacancy open and cover it yourself",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_frame",
            "expected": 2,
            "hint": "Step 0 governs: without a job description and criteria (Module 2 of bus211, Module 3 here), hiring is guessing. Speed (1) and popularity (3) are not criteria, and covering it yourself (4) is not a hire."
          }
        ]
      },
      {
        "label": "COMPUTED — Candidate B scores 6 (experience, 40%), 9 (service test, 35%), 8 (availability, 25%). What is B's weighted score? (Enter the number, e.g. 7.55.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_score_b",
            "expected": 7.55,
            "hint": "Weighted score = 0.40×6 + 0.35×9 + 0.25×8 = 2.40 + 3.15 + 2.00 = 7.55. Work it the same way as the bakery example."
          }
        ]
      },
      {
        "label": "DECISION — Candidate A scores 7.15, Candidate B scores 7.55, Candidate C scores 6.95. Who should be hired? 1) Candidate A 2) Candidate B 3) Candidate C 4) None — start over",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_hire",
            "expected": 2,
            "hint": "Decide against the criteria on the evidence: B's 7.55 is the highest weighted score. A (7.15) and C (6.95) score lower on the same criteria."
          }
        ]
      },
      {
        "label": "COMPUTED — The team will grow to 24 staff with a span of control of 6. How many first-line managers are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_span",
            "expected": 4,
            "hint": "Managers = staff ÷ span = 24 ÷ 6 = 4. A span of 6 with 24 staff needs 4 managers."
          }
        ]
      },
      {
        "label": "COMPUTED — The weekly team meeting has 7 people at $30/hour for 1 hour. What does one meeting cost? (Enter the dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_meeting",
            "expected": 210,
            "hint": "Cost = people × rate × hours = 7 × $30 × 1 = $210 per meeting. Over 52 weeks that is $10,920 — the price of the meeting habit."
          }
        ]
      },
      {
        "label": "ORDER — The five delegation steps are: 1 define the task and result, 2 assign matching authority, 3 set limits and a deadline, 4 agree how progress will be checked, 5 hold the person accountable. 'Agree how progress will be checked' is which step?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_delegate",
            "expected": 4,
            "hint": "Delegation steps: 1 task, 2 authority, 3 limits and deadline, 4 agree the check-in, 5 accountability. The check-in is step 4."
          }
        ]
      },
      {
        "label": "DECISION — The café must decide today whether to close after a gas smell. Which conflict style fits? 1) Collaborating 2) Competing 3) Avoiding 4) Accommodating",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_conflict",
            "expected": 2,
            "hint": "Safety decisions cannot wait for consensus — competing (decide and direct) fits. Collaborating (1) spends time the situation does not have; avoiding (3) and accommodating (4) do not decide at all."
          }
        ]
      },
      {
        "label": "COMPUTED — The new bonus has expectancy 0.8, instrumentality 0.9, valence 0.5. What is the motivation score? (Enter the number, e.g. 0.36.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_motivation",
            "expected": 0.36,
            "hint": "Motivation = E × I × V = 0.8 × 0.9 × 0.5 = 0.36. Because the three multiply, the low valence (0.5) drags the whole score down."
          }
        ]
      },
      {
        "label": "DECISION — The café team is brand new and has never done the job. Which situational leadership style should you use? 1) Telling 2) Delegating 3) Participating 4) Selling",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_style",
            "expected": 1,
            "hint": "Low ability and low willingness — low readiness — needs telling: clear instructions and close supervision. Delegating (2) fits a high-readiness team; participating (3) and selling (4) fit teams further along."
          }
        ]
      },
      {
        "label": "COMPUTED — Last month the café filled 5,000 orders with a 4% error rate; the target is 2%. How many fewer errors per month is the target? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_errors",
            "expected": 100,
            "hint": "Now: 4% × 5,000 = 200 errors. Target: 2% × 5,000 = 100 errors. Fewer = 200 − 100 = 100 errors a month."
          }
        ]
      },
      {
        "label": "DECISION — In meetings, 3 people do 80% of the talking and new hires are never heard. What is the best fix? 1) Hire more people 2) Round-robin input, credit ideas by name, stop interruptions 3) Ignore it — the talkers are the experts 4) Cancel all meetings",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_inclusion",
            "expected": 2,
            "hint": "The meeting is the problem, not the headcount: round-robin, named credit, and stopped interruptions make the unheard heard. Hiring more (1) repeats the pattern; ignoring it (3) loses the new hires; cancelling meetings (4) removes decisions, not the imbalance."
          }
        ]
      },
      {
        "label": "DECISION — The case is done: the hire is made, the team is organized, the meeting is fixed. How do you close? 1) Move on and say nothing 2) Record the decisions, the numbers, and who owns what by when — and review the wait time weekly 3) Tell only the shift lead 4) Wait for the next problem",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "td_close",
            "expected": 2,
            "hint": "Close with a record and a control rhythm (2): decisions, numbers, owners, dates, and a weekly wait-time check. Silence (1) and private telling (3) leave the team uninformed, and waiting (4) is not a plan."
          }
        ]
      }
    ],
    "passing": 70
  }
];
