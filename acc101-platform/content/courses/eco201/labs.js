module.exports = [
  {
    "id": "game-theory-market-structure",
    "title": "Game Theory & Market Structure",
    "introHtml": "<p><strong>Case: North Roast and South Bean.</strong> Two coffee chains compete in the same town. Each week each chain chooses a High price or a Low price. Their weekly profits, in thousands of dollars, are: both charge High — (90, 90); North High, South Low — (50, 120); North Low, South High — (120, 50); both charge Low — (70, 70). The first number is always North Roast's profit and the second is always South Bean's. Your task: work the payoff table decision by decision — find best responses, dominant strategies, and the Nash equilibrium — then compare the equilibrium with what the two chains could earn by cooperating, and finish with a Cournot quantity game. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Maple Street Sandwich Shops (completed for you).</strong> Two sandwich shops face the same kind of choice, with weekly profits in thousands: both High — (60, 60); Shop A High, Shop B Low — (30, 80); Shop A Low, Shop B High — (80, 30); both Low — (45, 45). Check Shop A's best response to B charging High: High pays 60, Low pays 80, so Low is best. Against B charging Low: High pays 30, Low pays 45, so Low is best again — Low is a dominant strategy for both shops, and the Nash equilibrium is (Low, Low) paying (45, 45). Total profit at the Nash equilibrium is 45 + 45 = 90, while cooperating at (High, High) would pay 60 + 60 = 120 — cooperating is worth 120 − 90 = 30 more in total, but each shop gains 80 − 60 = 20 by undercutting, so the deal falls apart. Notice the pattern you will repeat for North Roast and South Bean: read the payoffs, find best responses, find the equilibrium, then price the gap between equilibrium and cooperation. Now do North Roast and South Bean yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> North Roast and South Bean are the only two coffee chains in town, so each one's price directly affects the other's profit — this is an oligopoly, not perfect competition. The payoff table below is the whole game: two players (North Roast, South Bean), two strategies each (High price, Low price), and four payoff pairs. The first number in each pair is North Roast's weekly profit in thousands of dollars; the second is South Bean's. A <strong>best response</strong> is the choice that pays a firm the most, given what the other firm does. A <strong>dominant strategy</strong> is best no matter what the rival does. A <strong>Nash equilibrium</strong> is a pair of choices where each firm is playing a best response to the other — neither wants to move alone. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: what is the right first step when you face a payoff table?</p><p><strong>The payoff table (weekly profit, $000 — North, South):</strong> (High, High) = (90, 90) · (North High, South Low) = (50, 120) · (North Low, South High) = (120, 50) · (Low, Low) = (70, 70). <strong>The Cournot extension (last two rows):</strong> suppose instead the two chains choose quantities in a market with demand P = 90 − Q (Q = q<sub>North</sub> + q<sub>South</sub>) and marginal cost $30 for each. Their reaction functions are q = (60 − rival's q) ÷ 2, and the Cournot equilibrium is where both are on their reaction functions.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What is the right first step when you face a payoff table? 1) List each firm's payoff for every pair of choices 2) Pick the highest single payoff in the table and go with it 3) Assume both firms will cooperate",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_framing",
            "expected": 1,
            "hint": "A payoff table is solved by comparing payoffs case by case — first map every outcome. Picking the highest single payoff (2) ignores what the rival will do, and assuming cooperation (3) ignores the incentive to cheat."
          }
        ]
      },
      {
        "label": "COMPUTED — What is North Roast's weekly profit (in $000) if both chains charge High?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_both_high_north",
            "expected": 90,
            "hint": "Read the (High, High) cell: the first number is North's profit, 90 ($90,000). The second number, also 90, is South's."
          }
        ]
      },
      {
        "label": "COMPUTED — What is North Roast's weekly profit (in $000) if North charges Low and South charges High?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_undercut_north",
            "expected": 120,
            "hint": "Read the (Low, High) cell: the first number is North's profit, 120 ($120,000). Undercutting pays — which is exactly why cooperation is hard to hold."
          }
        ]
      },
      {
        "label": "COMPUTED — What is South Bean's weekly profit (in $000) if North charges High and South charges Low?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_undercut_south",
            "expected": 120,
            "hint": "Read the (High, Low) cell: the second number is South's profit, 120 ($120,000). The game is symmetric — each firm gains the same amount by undercutting."
          }
        ]
      },
      {
        "label": "DECISION — South Bean charges High. What is North Roast's best response? 1) Charge High (profit 90) 2) Charge Low (profit 120)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_br_high",
            "expected": 2,
            "hint": "Against High, North earns 90 from High and 120 from Low — Low pays $30,000 more. A best response is the highest payoff given the rival's choice."
          }
        ]
      },
      {
        "label": "DECISION — South Bean charges Low. What is North Roast's best response? 1) Charge High (profit 50) 2) Charge Low (profit 70)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_br_low",
            "expected": 2,
            "hint": "Against Low, North earns 50 from High and 70 from Low — Low is best again. Low is North's best response to both of South's choices, which makes it a dominant strategy."
          }
        ]
      },
      {
        "label": "DECISION — Does North Roast have a dominant strategy? 1) Yes — charge Low 2) Yes — charge High 3) No dominant strategy",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_dominant",
            "expected": 1,
            "hint": "Low is best against High (120 vs. 90) and best against Low (70 vs. 50). A strategy that is best no matter what the rival does is a dominant strategy."
          }
        ]
      },
      {
        "label": "DECISION — Which cell is the Nash equilibrium? 1) (High, High) 2) (High, Low) 3) (Low, High) 4) (Low, Low)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_nash",
            "expected": 4,
            "hint": "Low is dominant for both firms, so the equilibrium is (Low, Low). (High, High) is not an equilibrium — each firm would switch to Low and gain 30. In (High, Low) the High player would switch to Low and gain 20."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the TOTAL weekly profit (both firms, in $000) at the Nash equilibrium?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_total_nash",
            "expected": 140,
            "hint": "At (Low, Low) each firm earns 70, so total profit is 70 + 70 = 140 ($140,000)."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the TOTAL weekly profit (both firms, in $000) if both chains charge High?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_total_coop",
            "expected": 180,
            "hint": "At (High, High) each firm earns 90, so total profit is 90 + 90 = 180 ($180,000) — $40,000 more than at the Nash equilibrium."
          }
        ]
      },
      {
        "label": "COMPUTED — How much more total weekly profit (in $000) would cooperating at (High, High) earn than the Nash equilibrium?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_coop_gain",
            "expected": 40,
            "hint": "Cooperation pays 180 in total; the Nash equilibrium pays 140. The gap is 180 − 140 = 40 ($40,000) — the cost of the prisoner's dilemma."
          }
        ]
      },
      {
        "label": "COMPUTED — What is South Bean's weekly profit (in $000) at the Nash equilibrium?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_south_nash",
            "expected": 70,
            "hint": "At (Low, Low) the second number is South's profit: 70 ($70,000). Both firms earn the same at the symmetric equilibrium."
          }
        ]
      },
      {
        "label": "COMPUTED — South charges High. How much more (in $000) does North earn by undercutting to Low instead of matching High?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_undercut_gain",
            "expected": 30,
            "hint": "Undercutting pays 120; matching High pays 90. The gain is 120 − 90 = 30 ($30,000) — the temptation that breaks the cooperative deal."
          }
        ]
      },
      {
        "label": "COMPUTED — How much does each firm lose (in $000) at the Nash equilibrium compared with cooperating at (High, High)?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_each_loss",
            "expected": 20,
            "hint": "Each firm earns 70 at the Nash equilibrium and 90 by cooperating: 90 − 70 = 20 ($20,000) each. The $40 total gap is $20 per firm."
          }
        ]
      },
      {
        "label": "COMPUTED — Cournot extension: demand P = 90 − Q, MC = $30 each, reaction function q = (60 − rival's q) ÷ 2. How many units does EACH firm produce at the Cournot equilibrium? (Enter the number of units.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_cournot_q",
            "expected": 20,
            "hint": "Solving q = (60 − q) ÷ 2 gives 2q = 60 − q, so 3q = 60 and q = 20 for each firm. Check: (60 − 20) ÷ 2 = 20 — each firm is on its reaction function."
          }
        ]
      },
      {
        "label": "COMPUTED — Cournot extension: at the Cournot equilibrium, what is the market price? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_cournot_p",
            "expected": 50,
            "hint": "Total output is 20 + 20 = 40, so price is P = 90 − 40 = $50. Each firm's profit is (50 − 30) × 20 = $400,000 — more than the $70,000 in the price game, because quantity competition is softer than price competition."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "game-theory-market-structure.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What is the right first step when you face a payoff table? 1) List each firm's payoff for every pair of choices 2) Pick the highest single payoff in the table and go with it 3) Assume both firms will cooperate\",\n\"COMPUTED — What is North Roast's weekly profit (in $000) if both chains charge High?\",\n\"COMPUTED — What is North Roast's weekly profit (in $000) if North charges Low and South charges High?\",\n\"COMPUTED — What is South Bean's weekly profit (in $000) if North charges High and South charges Low?\",\n\"DECISION — South Bean charges High. What is North Roast's best response? 1) Charge High (profit 90) 2) Charge Low (profit 120)\",\n\"DECISION — South Bean charges Low. What is North Roast's best response? 1) Charge High (profit 50) 2) Charge Low (profit 70)\",\n\"DECISION — Does North Roast have a dominant strategy? 1) Yes — charge Low 2) Yes — charge High 3) No dominant strategy\",\n\"DECISION — Which cell is the Nash equilibrium? 1) (High, High) 2) (High, Low) 3) (Low, High) 4) (Low, Low)\",\n\"COMPUTED — What is the TOTAL weekly profit (both firms, in $000) at the Nash equilibrium?\",\n\"COMPUTED — What is the TOTAL weekly profit (both firms, in $000) if both chains charge High?\",\n\"COMPUTED — How much more total weekly profit (in $000) would cooperating at (High, High) earn than the Nash equilibrium?\",\n\"COMPUTED — What is South Bean's weekly profit (in $000) at the Nash equilibrium?\",\n\"COMPUTED — South charges High. How much more (in $000) does North earn by undercutting to Low instead of matching High?\",\n\"COMPUTED — How much does each firm lose (in $000) at the Nash equilibrium compared with cooperating at (High, High)?\",\n\"COMPUTED — Cournot extension: demand P = 90 − Q, MC = $30 each, reaction function q = (60 − rival's q) ÷ 2. How many units does EACH firm produce at the Cournot equilibrium? (Enter the number of units.)\",\n\"COMPUTED — Cournot extension: at the Cournot equilibrium, what is the market price? (Enter the dollar amount.)\",\n"
  }
];
