// bus201 - Module 8: Systems Analysis: Choosing & Implementing Software
module.exports = {
  "number": 8,
  "slug": "systems-analysis-choosing-software",
  "title": "Systems Analysis: Choosing & Implementing Software",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the systems development life cycle (SDLC) and its phases.",
    "Write a requirement that can actually be tested.",
    "Compare waterfall and agile approaches and say when each fits.",
    "Score vendor options with a weighted decision matrix.",
    "Name the implementation steps — and the change-management work — that decide whether a system is adopted."
  ],
  "sections": [
    {
      "heading": "The Systems Development Life Cycle",
      "html": "\n<p>Building or buying a system follows a life cycle — the <strong>SDLC</strong> — with the same phases whatever the method: <strong>planning</strong> (is this worth doing, and what will it cost?), <strong>analysis</strong> (what must the system do?), <strong>design</strong> (how will it do it?), <strong>implementation</strong> (build or buy, test, and go live), and <strong>maintenance</strong> (fix, improve, and eventually replace). Skipping a phase does not save time; it moves the cost into a later, more expensive phase.</p>\n<p>The phase that matters most for a small business is analysis, because it is the cheapest place to get things right. A requirement discovered during planning costs a conversation. The same requirement discovered after go-live costs rework, retraining, and lost sales. The SDLC exists to push discovery as early as possible.</p>\n<p>Maintenance is the longest phase and the one budgets forget. Every system needs updates, fixes, and small improvements for years. When comparing options, always ask what maintenance costs and who does it — a cheap system with expensive maintenance is not cheap.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The SDLC is plan, analyze, design, implement, maintain. Getting the analysis right is the cheapest quality you will ever buy.</div>"
    },
    {
      "heading": "Requirements: Writing Down What the System Must Do",
      "html": "\n<p><strong>Systems analysis</strong> is the work of understanding the business problem and writing down what the new system must do. A requirement is a statement of need, and a good one is specific and testable. \"The system must be user-friendly\" is not a requirement — nobody can test it. \"A new cashier must be able to complete a sale after 30 minutes of training, with no more than one error in twenty sales\" is a requirement: you can test it on day one.</p>\n<p>Requirements come in two kinds. <strong>Functional requirements</strong> say what the system does: record a sale, print a receipt, warn when stock is low. <strong>Non-functional requirements</strong> say how well it does it: it must work during a power cut, it must answer within two seconds, only managers may issue refunds. Both kinds matter, and the second kind is where most selection mistakes hide.</p>\n<p>Gather requirements from the people who will live with the system, not only from the manager who signs the cheque. Watch the work being done, ask what goes wrong today, and ask what a good day looks like. The best requirements are written in the users' words, then rewritten until they are testable.</p>\n<div class=\"callout\"><strong>Key idea:</strong> If you cannot test a requirement, it is not a requirement — it is a wish. Wishes do not survive contact with a vendor demo.</div>"
    },
    {
      "heading": "Waterfall vs. Agile: Two Ways to Build",
      "html": "\n<p><strong>Waterfall</strong> runs the SDLC phases in order, finishing each before the next begins: all requirements, then all design, then all building, then testing. It fits when the requirements are stable and well understood — a payroll system, a regulated filing system — and when the cost of changing direction late is high. Its risk is that the business sees the finished system only at the end, when change is most expensive.</p>\n<p><strong>Agile</strong> works in short cycles (sprints) that deliver a small working piece, get feedback, and adapt. It fits when the requirements are uncertain or will change — a new customer-facing app, a process the business is still inventing. Its risk is drift: without discipline, the project can keep changing and never finish. Agile is not \"no planning\" — it is planning in smaller, more frequent pieces.</p>\n<p>For most small-business purchases, the honest answer is a hybrid: buy a standard product (waterfall-style selection), then implement it in small steps with feedback (agile-style rollout). The method matters less than the discipline of testing each step with real users before the next one starts.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Waterfall fits stable, well-understood work; agile fits uncertain, changing work. Most small-business projects need both: a careful selection, then a step-by-step rollout with real feedback.</div>"
    },
    {
      "heading": "Choosing: The Weighted Decision Matrix",
      "html": "\n<p>Choosing software by demo alone is how businesses buy the best presentation instead of the best fit. A <strong>weighted decision matrix</strong> forces the choice onto the requirements: list what matters, weight each requirement by importance, score each option on each requirement, and multiply. The highest weighted total wins — and the reasoning is written down, so the decision can be defended and revisited.</p>\n<p><strong>Worked example.</strong> A bakery scores two systems on four requirements with weights: cost 0.30, ease of use 0.25, inventory tracking 0.25, growth 0.20. System A scores 4, 5, 3, 3. Its total = (4 × 0.30) + (5 × 0.25) + (3 × 0.25) + (3 × 0.20) = 1.20 + 1.25 + 0.75 + 0.60 = <strong>3.80</strong>. System B scores 5, 4, 4, 2. Its total = 1.50 + 1.00 + 1.00 + 0.40 = <strong>3.90</strong>. System B wins — narrowly — because its lower cost and better inventory tracking outweigh System A's ease of use. Without the weights, the demo alone would have picked System A.</p>\n<p>Two disciplines make the matrix honest. Score each option on evidence — a trial, a reference customer, a test with your own data — not on the vendor's slides. And set the weights before you see the scores, or you will unconsciously weight whatever your favorite already wins.</p>\n<div class=\"formula\">Weighted total = Σ (Score × Weight) — weights must add to 1.00</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The SDLC is plan, analyze, design, implement, maintain — and analysis is the cheapest place to get it right.</li>\n<li>A requirement is specific and testable; \"user-friendly\" is a wish, not a requirement.</li>\n<li>Waterfall fits stable requirements; agile fits uncertain ones; most small projects use both.</li>\n<li>A weighted decision matrix scores options against weighted requirements, on evidence, with weights set first.</li>\n<li>Implementation is change management: training, data migration, a pilot, and a named owner decide adoption.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Choosing by demo. The best presentation wins the meeting and loses the year. Score options on a weighted matrix, with evidence from a trial and a reference customer.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating go-live as the finish line. Implementation is where systems live or die: train the people, migrate the data carefully, pilot with one team, and keep the old way running until the new way is proven.</div>\n<p><strong>Next step:</strong> Module 9 looks at the newest tool in the box — artificial intelligence — and asks where it genuinely helps a business and where it does not.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Systems development life cycle (SDLC)",
      "def": "The phases of building or buying a system: planning, analysis, design, implementation, and maintenance."
    },
    {
      "term": "Systems analysis",
      "def": "The work of understanding the business problem and defining what a new system must do."
    },
    {
      "term": "Requirement",
      "def": "A specific, testable statement of what a system must do or how well it must do it."
    },
    {
      "term": "Functional requirement",
      "def": "A requirement about what the system does — record a sale, print a receipt, warn on low stock."
    },
    {
      "term": "Non-functional requirement",
      "def": "A requirement about how well the system performs — speed, security, reliability, usability."
    },
    {
      "term": "Waterfall",
      "def": "A development approach that runs SDLC phases in order, finishing each before the next begins."
    },
    {
      "term": "Agile",
      "def": "A development approach that delivers working software in short cycles, adapting to feedback."
    },
    {
      "term": "Sprint",
      "def": "A short, fixed cycle of work in agile development, usually one to four weeks, ending in a working increment."
    },
    {
      "term": "Weighted decision matrix",
      "def": "A table that scores options against weighted requirements, so the choice follows the evidence."
    },
    {
      "term": "Implementation",
      "def": "Putting a system into live use: configuration, data migration, testing, training, and go-live."
    },
    {
      "term": "Data migration",
      "def": "Moving existing data from old systems into a new one, cleaned and checked."
    },
    {
      "term": "Pilot",
      "def": "Trying a new system with a small group or one location before rolling it out to everyone."
    },
    {
      "term": "Change management",
      "def": "The work of helping people adopt a new way of working: communication, training, and support."
    },
    {
      "term": "Go-live",
      "def": "The moment a new system becomes the official way of working."
    }
  ],
  "video": {
    "title": "Software Development Life Cycle: Explained",
    "embedUrl": "https://www.youtube.com/embed/SaCYkPD4_K0",
    "note": "Covers the six SDLC stages — planning and analysis, design, development, testing, deployment, maintenance — and contrasts waterfall with agile and DevOps. Match each stage to this module's selection and implementation steps.",
    "more": [
      {
        "title": "Software Development Lifecycle in 9 minutes!",
        "url": "https://www.youtube.com/watch?v=i-QyW8D3ei0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Rewrite this requirement so it is testable: 'The system should be fast and easy to use.'</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Split it into two testable requirements. Step 2: Speed — 'A sale lookup must return results within 2 seconds on the shop Wi-Fi.' Step 3: Ease of use — 'A new cashier must complete a sale without help after 30 minutes of training, with no more than one error in twenty sales.' Both can now be tested on day one; the original could not be tested at all.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bakery weights four requirements: cost 0.30, ease of use 0.25, inventory tracking 0.25, growth 0.20. System A scores 4, 5, 3, 3. System B scores 5, 4, 4, 2. Compute both weighted totals and state the winner.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: System A = (4 × 0.30) + (5 × 0.25) + (3 × 0.25) + (3 × 0.20) = 1.20 + 1.25 + 0.75 + 0.60 = <strong>3.80</strong>. Step 2: System B = (5 × 0.30) + (4 × 0.25) + (4 × 0.25) + (2 × 0.20) = 1.50 + 1.00 + 1.00 + 0.40 = <strong>3.90</strong>. Step 3: <strong>System B wins</strong>, 3.90 to 3.80 — its cost and inventory strengths outweigh System A's ease of use.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A payroll system must follow tax law exactly and its rules are fully known. A customer app for a new product is still being invented. Say which approach (waterfall or agile) fits each, and why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Payroll fits <strong>waterfall</strong> — requirements are stable, known, and regulated, and the cost of a late change is high. Step 2: The new customer app fits <strong>agile</strong> — requirements are uncertain and will change as customers react, so short cycles with feedback are worth more than a complete upfront plan.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shop is choosing a point-of-sale system. Name three functional requirements and two non-functional requirements it should write down before talking to vendors.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Functional — record a sale and print a receipt; warn when any product falls below its reorder level; produce a daily sales total by product. Step 2: Non-functional — the till must keep working for at least 4 hours without internet; only a manager may issue a refund above $50. Step 3: All five are testable, which is the point — the shop can now check each one in a trial instead of trusting a demo.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A firm migrates 12,000 customer records into a new CRM. A check finds 900 records with no email and 300 duplicated customers. (a) How many clean, unique records are there? (b) What should the firm do about the rest before go-live?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Duplicates: 300 records are second copies, so unique customers = 12,000 − 300 = 11,700. Of those, 900 lack an email — but they are still real customers, so the clean unique count is <strong>11,700</strong>, with 900 flagged as missing email. Step 2: (b) Before go-live: merge the 300 duplicates into the surviving records, and chase the 900 missing emails (or mark them 'no email — phone only') instead of importing blanks and discovering the problem in front of a customer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A new system is live but half the staff still use the old spreadsheet 'because it is faster.' Name the missing implementation step and the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The missing step is <strong>change management</strong> — the rollout treated go-live as the finish line instead of the start. Step 2: The fix is to find out why the spreadsheet feels faster (probably one missing feature or one slow screen), fix that, train the holdouts on the faster way, and set a date after which the spreadsheet is read-only. Step 3: Until the new way is genuinely easier, people will keep the old way — and they are right to.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The correct order of the SDLC phases is:",
      "choices": [
        "Design, planning, analysis, maintenance, implementation",
        "Planning, analysis, design, implementation, maintenance",
        "Implementation, design, analysis, planning, maintenance",
        "Analysis, implementation, planning, design, maintenance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Plan first, analyze what is needed, design how, implement it, then maintain it. (a), (c), and (d) each put a later phase before an earlier one — you cannot design what you have not analyzed, or maintain what is not implemented."
    },
    {
      "q": "Which of these is a testable requirement?",
      "choices": [
        "The system must be user-friendly",
        "The system must be fast",
        "A new cashier must complete a sale after 30 minutes of training, with no more than one error in twenty sales",
        "The system should be modern"
      ],
      "answer": 2,
      "explanation": "Correct: (c). It names a measurable outcome and a test. (a), (b), and (d) are wishes — nobody can agree on whether they are met."
    },
    {
      "q": "A bakery weights cost 0.30, ease 0.25, inventory 0.25, growth 0.20. System A scores 4, 5, 3, 3. Its weighted total is:",
      "choices": [
        "3.50",
        "3.80",
        "3.90",
        "4.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1.20 + 1.25 + 0.75 + 0.60 = 3.80. (a) and (c) come from mis-weighting one term; (c) 3.90 is System B's total in the worked example. (d) is the simple average of the scores, not the weighted total."
    },
    {
      "q": "Waterfall fits best when:",
      "choices": [
        "Requirements are uncertain and will change often",
        "Requirements are stable, well understood, and costly to change late",
        "Nobody knows what the system should do",
        "The team wants no planning at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Waterfall's ordered phases suit stable, well-known work like payroll. (a) and (c) describe agile's territory. (d) describes no method at all."
    },
    {
      "q": "In a weighted decision matrix, weights should be set:",
      "choices": [
        "After scoring, so they match the favorite",
        "Before scoring, so the choice follows the requirements and not the demo",
        "By the vendor",
        "Only for the cheapest option"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Setting weights first prevents unconsciously weighting whatever your favorite already wins. (a) rigs the result. (c) lets the seller choose the test. (d) misunderstands weighting entirely."
    },
    {
      "q": "A non-functional requirement is about:",
      "choices": [
        "What the system does",
        "How well the system does it — speed, security, reliability",
        "The price of the system",
        "The vendor's brand"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Non-functional requirements cover performance qualities. (a) is a functional requirement. (c) is a commercial term, not a requirement type. (d) is irrelevant to requirements."
    },
    {
      "q": "A pilot rollout means:",
      "choices": [
        "Turning the old system off on day one",
        "Trying the new system with a small group or one location before full rollout",
        "Skipping training",
        "Buying the system without a trial"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A pilot limits the blast radius of problems and produces real feedback. (a) is a big-bang cutover, the riskiest option. (c) and (d) are the opposite of careful implementation."
    },
    {
      "q": "The longest SDLC phase, and the one budgets most often forget, is:",
      "choices": [
        "Planning",
        "Analysis",
        "Design",
        "Maintenance"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Maintenance runs for the system's whole life — updates, fixes, improvements. (a), (b), and (c) are all short phases at the start, and their costs are usually estimated, unlike maintenance."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Systems Analysis: Quick Reference</h3>\n<p><strong>Core idea:</strong> SDLC = plan, analyze, design, implement, maintain. Analysis is the cheapest place to get it right; maintenance is the longest phase and the most forgotten cost.</p>\n<p><strong>Requirements:</strong> functional = what it does · non-functional = how well · a requirement must be specific and testable, or it is a wish.</p>\n<div class=\"formula\">Weighted total = Σ (Score × Weight) — weights add to 1.00, set before scoring, scored on evidence</div>\n<p><strong>Methods:</strong> waterfall fits stable, well-understood work; agile fits uncertain, changing work; most small projects use both — careful selection, step-by-step rollout.</p>\n<p><strong>Watch out:</strong> Never choose by demo. Never treat go-live as the finish line — training, data migration, a pilot, and change management decide whether the system is actually adopted.</p>\n<p><strong>Self-check:</strong> Write five testable requirements for a system you use, then score two real options on a weighted matrix.</p>\n"
};
