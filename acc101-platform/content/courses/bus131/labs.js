module.exports = [
  {
    "id": "contract-review-spot-the-clause",
    "title": "Contract Review — Spot the Clause",
    "introHtml": "<p><strong>Case: the web-design agreement.</strong> A small business hires a web designer to build its website for $12,000. The designer delivers three weeks late, and the site breaks on launch day. The business signed the agreement below without reading it — and every clause that hurts them was in the document the whole time. Your task: read the agreement, spot the bad clauses, and say what each one should have said. The first scored row is the framing decision: which clause is the most dangerous to sign as written?</p><p><strong>Worked example first — the catering contract (completed for you).</strong> A catering contract for a $4,000 event required a 10% deposit: 0.10 × $4,000 = $400. Its late-delivery clause set liquidated damages of $50 a day; the caterer was 4 days late, so 4 × $50 = $200. Its liability cap was the full contract price, $4,000 — the standard this course teaches — so the customer could recover the whole price if the event failed. The lesson: a good contract states the deposit, the late fee, and a liability cap equal to the price, in plain numbers. Now review the web-design agreement yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> The web-design agreement, as signed: <strong>Clause 1 — Parties:</strong> “The Business” and “The Designer.” <strong>Clause 2 — Price and payment:</strong> $12,000, 100% payable up front before any work begins. <strong>Clause 3 — Copyright ownership:</strong> “The Designer owns all copyright in the website, including the design, code, and content.” <strong>Clause 4 — Term and termination:</strong> either side may terminate with 7 days' written notice. <strong>Clause 5 — Liability cap:</strong> the Designer's total liability is capped at $500. <strong>Clause 6 — Warranties:</strong> the Designer warrants the site will be “substantially complete” on delivery, with no warranty that it will work on all browsers. <strong>Clause 7 — Dispute resolution:</strong> all disputes must be arbitrated in the Designer's home state, 1,500 miles away. <strong>Clause 8 — Entire agreement:</strong> this document is the entire agreement between the parties. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision.</p><p><strong>The right answers, in short (for the decision rows):</strong> the liability cap is the most dangerous clause; copyright belongs to the business, assigned on full payment; payment should be staged (deposit with the balance on delivery); termination needs 30 days' notice; the liability cap should equal the contract price; disputes should be resolved where the business is, or by mediation first. The computed rows use the agreement's own numbers: $12,000 price, $500 cap, $100-a-day liquidated damages, and a $15,000 cover price.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Which clause is the most dangerous to sign as written? 1) Clause 5, the $500 liability cap on a $12,000 contract 2) Clause 8, the entire-agreement clause 3) Clause 1, naming the parties",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_framing",
            "expected": 1,
            "hint": "The $500 cap is the most dangerous: when the site breaks, the business can recover only $500 of a $12,000 loss — about 4.2% of the price. The entire-agreement clause (2) is standard and protective, and naming the parties (3) is correct and necessary."
          }
        ]
      },
      {
        "label": "WHICH CLAUSE — Which clause number says the Designer owns the copyright in the website? (Enter the clause number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_clause_copyright",
            "expected": 3,
            "hint": "Clause 3 states the Designer owns all copyright in the website, including the design, code, and content. That is the clause to find first in any contract for work you are paying for."
          }
        ]
      },
      {
        "label": "WHAT'S WRONG — What is wrong with Clause 3 (copyright ownership)? 1) The Designer owns the copyright, so the business does not own its own website 2) The price is too high 3) The term is too long",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_wrong_copyright",
            "expected": 1,
            "hint": "The business paid $12,000 for a website it does not own — it cannot sell, move, or freely change the site without the Designer's permission. Price (2) and term (3) are separate clauses and separate questions."
          }
        ]
      },
      {
        "label": "WHAT IT SHOULD SAY — What should Clause 3 say instead? 1) Copyright is assigned to the Business on full payment 2) The Designer keeps the copyright forever 3) Nobody owns the copyright",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_fix_copyright",
            "expected": 1,
            "hint": "The business should own what it paid for: the copyright is assigned to the Business when the price is paid in full. (2) keeps the problem, and (3) is not a legal outcome — someone always owns the copyright."
          }
        ]
      },
      {
        "label": "WHICH CLAUSE — Which clause number requires 100% payment up front before any work begins? (Enter the clause number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_clause_payment",
            "expected": 2,
            "hint": "Clause 2 requires the full $12,000 before any work begins. Payment terms are always in the price clause — that is where to look for them."
          }
        ]
      },
      {
        "label": "WHAT'S WRONG — What is wrong with Clause 2 (100% up front)? 1) The business loses all leverage — the Designer has been paid before doing the work 2) The price is too low 3) The Designer must be paid in cash",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_wrong_payment",
            "expected": 1,
            "hint": "Paying 100% up front removes the business's only leverage: the Designer has the money whether or not the site works. A staged split — a deposit with the balance on delivery and acceptance — keeps the incentive aligned. (2) is backwards, and (3) is not in the clause."
          }
        ]
      },
      {
        "label": "COMPUTED — The agreement's liquidated damages are $100 a day for late delivery. The Designer delivers 9 days late. What are the liquidated damages? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_late_fee",
            "expected": 900,
            "hint": "Liquidated damages = 9 × $100 = $900. The agreed daily rate times the days late — no proof of actual loss is needed, because the rate was agreed in advance."
          }
        ]
      },
      {
        "label": "COMPUTED — The liability cap is $500 and the contract price is $12,000. How many dollars short of the full price is the cap? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_cap_shortfall",
            "expected": 11500,
            "hint": "Shortfall = $12,000 − $500 = $11,500. The business can recover only $500 of a $12,000 loss — about 4.2% of the price ($500 ÷ $12,000). The cap should equal the contract price."
          }
        ]
      },
      {
        "label": "WHICH CLAUSE — Which clause number lets either side terminate with 7 days' written notice? (Enter the clause number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_clause_termination",
            "expected": 4,
            "hint": "Clause 4 is the term and termination clause: 7 days' written notice. Termination terms always live in the term clause — check there first."
          }
        ]
      },
      {
        "label": "WHAT IT SHOULD SAY — What should Clause 4 (termination) say instead? 1) 30 days' written notice 2) No termination ever, for either side 3) 1 day's notice",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_fix_termination",
            "expected": 1,
            "hint": "Thirty days is the standard the course teaches: it gives the business time to find a replacement and the Designer time to finish or hand over work. (2) locks both sides into a failing deal, and (3) is worse than the 7 days already in the clause."
          }
        ]
      },
      {
        "label": "WHICH CLAUSE — Which clause number requires arbitration in the Designer's home state, 1,500 miles away? (Enter the clause number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_clause_dispute",
            "expected": 7,
            "hint": "Clause 7 is the dispute-resolution clause: arbitration in the Designer's home state. The dispute clause decides where a fight happens — read it before you sign, not after the dispute starts."
          }
        ]
      },
      {
        "label": "WHAT'S WRONG — What is wrong with Clause 7 (dispute resolution)? 1) Arbitration 1,500 miles away makes a claim too expensive to bring 2) Mediation is too slow 3) Arbitration is always illegal",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_wrong_dispute",
            "expected": 1,
            "hint": "A claim that costs more to bring than it is worth is a claim the business will never bring — the distance is the point. Mediation first, in the Business's home state, would fix it. (2) is not the problem, and (3) is false — arbitration is lawful and common."
          }
        ]
      },
      {
        "label": "COMPUTED — The Business hires a replacement designer for $15,000 after the first Designer breaches a $12,000 contract. What are the compensatory damages (cover price minus contract price)? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_cover",
            "expected": 3000,
            "hint": "Compensatory damages = cover price − contract price = $15,000 − $12,000 = $3,000. The replacement cost more than the original deal; the difference is the loss the breach caused."
          }
        ]
      },
      {
        "label": "DECISION — The review is done and four clauses need fixing. What should the Business do before signing? 1) Fix Clauses 2, 3, 4, 5, and 7, get the changes in writing, and sign the corrected version 2) Sign as written and hope the Designer is honest 3) Rely on the Designer's oral promise to fix things later",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "contract_close",
            "expected": 1,
            "hint": "Fix it in writing before signing — that is the whole skill. Signing as written (2) accepts every bad clause, and oral promises (3) do not count against the entire-agreement clause in Clause 8."
          }
        ]
      }
    ],
    "passing": 70
  }
];
