// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 4,
  "slug": "master-review",
  "title": "Michigan Master Review: Business, Estimating & Advanced Code",
  "estTime": "3–4 hours",
  "objectives": [
    "State the Michigan master exam format: 76 questions, 180 minutes, 75% to pass, open-book on the 2023 NEC plus Michigan Part 8 amendments.",
    "Explain the apprentice → journeyman → master licensing path and the renewal rule (by December 31).",
    "Build an estimate: takeoff, labor units, material, overhead, and markup versus margin.",
    "Size motors, transformers, and feeders under Articles 430, 450, and 220.40.",
    "Apply the special-occupancy and special-system rules of Articles 500, 517, 700, 701, and 702."
  ],
  "sections": [
    {
      "heading": "The Exam: 76 Questions, 180 Minutes, 75% to Pass",
      "html": "<p>The Michigan master electrician exam is <strong>76 questions in 180 minutes, 75% to pass</strong> — 57 correct answers. It is open-book on the 2023 NEC plus Michigan Part 8 amendments, scheduled through PSI. Compared with the journeyman exam, it leans harder on <strong>business and estimating</strong>, on <strong>advanced calculations</strong> (motors, transformers, feeders, services), and on the <strong>special chapters</strong> — hazardous locations, health care, and emergency systems. Your time budget is about <strong>2 minutes 22 seconds per question</strong>.</p><p>The master license is not just a harder test; it is a different job. A master electrician may own or run a contracting business, pull permits, and supervise journeymen and apprentices. The exam tests whether you can do the work, price the work, and run the business that does the work — and this module reviews all three.</p>"
    },
    {
      "heading": "The Licensing Path: Apprentice to Journeyman to Master",
      "html": "<p>Michigan's path runs in three steps. An <strong>apprentice</strong> works under a licensed electrician and builds the required years of practical experience. A <strong>journeyman</strong> has passed the journeyman exam (80 questions, 150 minutes, 75%) and may work independently on installations but may not contract work on their own account. A <strong>master</strong> has passed the master exam and may operate an electrical contracting business.</p><p>Two facts the exam tests directly: licenses are <strong>renewed by December 31</strong> (the renewal deadline the state sets each cycle), and <strong>Michigan has no reciprocity</strong> — a license from another state does not transfer. The city of Detroit issues its own licenses, separate from the state system; this course does not state Detroit's requirements, because they are the city's own. When a question asks where a license is valid or how it renews, answer from the state rules, not from a neighboring state's rules.</p>"
    },
    {
      "heading": "Estimating: From Takeoff to Price",
      "html": "<p>An estimate is built in order: <strong>takeoff</strong> (count every device, foot of conduit, and fixture from the plans), <strong>labor units</strong> (hours per unit — for example, hours per receptacle or per 100 feet of conduit), <strong>material</strong> (priced from current supplier quotes, never from memory), <strong>overhead</strong> (the cost of running the business — truck, insurance, office), and <strong>profit</strong>. The two ways to add profit are <strong>markup</strong> (profit added to cost: price = cost × (1 + markup)) and <strong>margin</strong> (profit as a share of the selling price: price = cost / (1 − margin)). A 20% markup is not a 20% margin — on a $1,000 cost, 20% markup gives $1,200 and a 16.7% margin.</p><p>The exam's estimating questions are usually arithmetic in disguise: count the devices, multiply by the labor unit, add the material, apply the markup. The traps are the same as on the job: forgetting the starting device, forgetting waste, pricing material at last year's price, and confusing markup with margin. Work every estimate on paper with units attached, and check the total against the story — a 20-receptacle house cannot cost the same as a 200-receptacle office.</p>"
    },
    {
      "heading": "Advanced Code: Motors, Transformers, Feeders",
      "html": "<p>Article 430 runs motors by tables, not by nameplate. The <strong>full-load current (FLC)</strong> comes from Tables 430.247 (DC), 430.248 (single-phase AC), and 430.250 (three-phase AC) — the nameplate current is used only for overload sizing in some cases. Branch-circuit conductors are sized at <strong>125% of FLC (430.22)</strong>; the branch-circuit short-circuit and ground-fault device is sized from <strong>Table 430.52</strong> (an inverse-time breaker at 250% of FLC for most motors); overload protection is <strong>115% or 125% of nameplate current (430.32)</strong>, depending on the motor's service factor and temperature rise.</p><p>Transformers follow <strong>Article 450</strong>: overcurrent protection by 450.3, with separate tables for transformers over and under 1,000 volts. Feeders and services follow <strong>220.40</strong> — the feeder or service load is the sum of the branch-circuit loads after demand factors — and <strong>Article 215</strong> for feeder sizing. When a master question gives you a motor horsepower and a voltage, the first move is always the FLC table; the nameplate is a distractor until 430.32 asks for it.</p>"
    },
    {
      "heading": "Special Occupancies and Special Systems",
      "html": "<p>The master exam reaches into the special chapters. <strong>Article 500</strong> classifies hazardous locations (Class I flammable gases/vapors, Class II combustible dust, Class III ignitable fibers; Division 1 where the hazard is normally present, Division 2 where it is present only under abnormal conditions) and requires equipment listed for the classification. <strong>Article 517</strong> covers health care facilities — patient-care spaces, essential electrical systems, and the grounding and bonding rules that protect patients. <strong>Articles 700, 701, and 702</strong> cover emergency, legally required standby, and optional standby systems: transfer equipment, the loads each system may serve, and the time each system has to come online.</p><p>The pattern to learn is the same in all three: the Code first classifies the situation, then restricts the wiring methods and equipment to what is listed for that classification, then sets the performance the system must deliver. Learn the classification first and the wiring rules follow.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Master exam",
      "def": "Michigan's master electrician exam: 76 questions, 180 minutes, 75% to pass, open-book on the 2023 NEC plus Part 8."
    },
    {
      "term": "Journeyman",
      "def": "A licensed electrician who has passed the journeyman exam and may work independently, but may not contract work on their own account."
    },
    {
      "term": "Master electrician",
      "def": "A licensed electrician who has passed the master exam and may operate an electrical contracting business."
    },
    {
      "term": "Reciprocity",
      "def": "Recognition of another state's license; Michigan has none for electricians."
    },
    {
      "term": "Takeoff",
      "def": "Counting every device, foot of conduit, and fixture from the plans to build an estimate."
    },
    {
      "term": "Labor unit",
      "def": "The hours allowed per unit of work — for example, hours per receptacle or per 100 feet of conduit."
    },
    {
      "term": "Markup",
      "def": "Profit added to cost: price = cost × (1 + markup)."
    },
    {
      "term": "Margin",
      "def": "Profit as a share of the selling price: price = cost / (1 − margin). A 20% markup is a 16.7% margin."
    },
    {
      "term": "Full-load current (FLC)",
      "def": "A motor's current from Tables 430.247, 430.248, or 430.250 — used for conductor and short-circuit sizing."
    },
    {
      "term": "430.22",
      "def": "Motor branch-circuit conductors are sized at 125% of FLC."
    },
    {
      "term": "Table 430.52",
      "def": "Motor branch-circuit short-circuit and ground-fault protection: an inverse-time breaker at 250% of FLC."
    },
    {
      "term": "430.32",
      "def": "Motor overload protection: 115% or 125% of nameplate current, by service factor and temperature rise."
    },
    {
      "term": "450.3",
      "def": "Transformer overcurrent protection, with separate tables for over and under 1,000 volts."
    },
    {
      "term": "Hazardous location",
      "def": "An area classified by the Code (Article 500) where flammable or combustible material may be present; equipment must be listed for the classification."
    },
    {
      "term": "Article 517",
      "def": "Health care facilities: patient-care spaces, essential electrical systems, and patient-protection grounding."
    },
    {
      "term": "Article 700/701/702",
      "def": "Emergency, legally required standby, and optional standby systems — transfer equipment and the loads each may serve."
    }
  ],
  "video": {
    "title": "Estimating Master Class Episode 1 of 6",
    "embedUrl": "https://www.youtube.com/embed/TITugjruGmE",
    "note": "The first episode of an estimating master class: how electrical estimators build a takeoff, price labor, and turn a set of plans into a number you can stand behind.",
    "more": [
      {
        "title": "2024 Electrical Estimating Tips & Trends from an All-Star Estimator",
        "url": "https://www.youtube.com/watch?v=63A5KCWKPgc"
      },
      {
        "title": "Over 5 Hours of Electrical Questions",
        "url": "https://www.youtube.com/watch?v=D9c_5iAJhYU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A job costs $8,000 in labor and material. (a) What is the price with a 20% markup? (b) What is the price for a 20% margin? (c) Which is higher, and by how much?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) Markup: $8,000 × 1.20 = $9,600. (b) Margin: $8,000 / (1 − 0.20) = $8,000 / 0.80 = $10,000. (c) The margin price is higher by $400. A 20% markup is only a 16.7% margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"State the Michigan master exam format.\" Write a three-sentence exam-ready explanation that includes the question count, the time, the pass mark, and the number of correct answers needed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The master exam is 76 questions in 180 minutes, 75% to pass. Step 2: 75% of 76 is 57 — you need 57 correct answers. Step 3: It is open-book on the 2023 NEC plus Michigan Part 8 amendments, scheduled through PSI.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A customer asks you, a licensed journeyman, to wire their new shop and pull the permit in your name. What is the correct answer, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Decline the contracting work — a journeyman may work independently on installations but may not contract work on their own account. Step 2: The work must be contracted by a master electrician's business, which pulls the permit. Step 3: Offer to do the work as an employee of a licensed master contractor, or refer the customer to one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) How many correct answers pass the master exam? (b) A 10-hp, 460-volt, three-phase motor has what FLC from Table 430.250? (c) What conductor ampacity does 430.22 require for that motor?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 57 correct out of 76. (b) 14 amps. (c) 125% × 14 = 17.5 amps minimum conductor ampacity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"The master exam is 80 questions at 70%, Michigan honors other states' licenses, a 20% markup equals a 20% margin, and motor conductors are sized at 100% of nameplate current.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The master exam is 76 questions at 75% (57 correct). Step 2: Michigan has no reciprocity — other states' licenses do not transfer. Step 3: A 20% markup is a 16.7% margin; they are different formulas. Step 4: Motor branch-circuit conductors are sized at 125% of FLC from the tables (430.22), not 100% of nameplate current.</p>"
    }
  ],
  "quiz": [
    {
      "module": 4,
      "q": "A job costs $5,000 and you apply a 10% markup. What is the selling price?",
      "choices": [
        "$5,500",
        "$5,556",
        "$6,000",
        "$5,250"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Markup price = cost × (1 + markup) = $5,000 × 1.10 = $5,500. (b) is wrong: \"$5,556\" — $5,556 is the price for a 10% margin, not a 10% markup. (c) is wrong: \"$6,000\" — $6,000 would be a 20% markup. (d) is wrong: \"$5,250\" — $5,250 would be a 5% markup."
    },
    {
      "module": 4,
      "q": "What does Michigan require for license renewal?",
      "choices": [
        "Renewal every five years",
        "Renewal by December 31",
        "Renewal only when changing employers",
        "No renewal is required"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Michigan electrician licenses are renewed by December 31. (a) is wrong: \"Renewal every five years\" — Michigan does not use a five-year renewal cycle for these licenses. (c) is wrong: \"Renewal only when changing employers\" — Renewal is by date, not by employer change. (d) is wrong: \"No renewal is required\" — Licenses do require renewal."
    },
    {
      "module": 4,
      "q": "A 15-hp, 460-volt, three-phase motor has what FLC from Table 430.250?",
      "choices": [
        "21 amps",
        "28 amps",
        "14 amps",
        "42 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Table 430.250 gives a 15-hp, 460-volt, three-phase motor an FLC of 21 amps. (b) is wrong: \"28 amps\" — 28 amps is the 10-hp, 230-volt FLC. (c) is wrong: \"14 amps\" — 14 amps is the 10-hp, 460-volt FLC. (d) is wrong: \"42 amps\" — 42 amps is the 15-hp, 230-volt FLC."
    },
    {
      "module": 4,
      "q": "Under Table 430.52, what is the maximum inverse-time breaker for a motor with an FLC of 28 amps?",
      "choices": [
        "70 amps",
        "56 amps",
        "84 amps",
        "35 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 250% × 28 = 70 amps for an inverse-time breaker under Table 430.52. (b) is wrong: \"56 amps\" — 56 amps is 200% of FLC, not the Table 430.52 inverse-time breaker value. (c) is wrong: \"84 amps\" — 84 amps is 300% of FLC — the nontime-delay fuse value. (d) is wrong: \"35 amps\" — 35 amps is 125% of FLC — the conductor sizing rule, not the breaker rule."
    },
    {
      "module": 4,
      "q": "Which article covers health care facilities?",
      "choices": [
        "Article 500",
        "Article 517",
        "Article 700",
        "Article 430"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 517 covers health care facilities: patient-care spaces and essential electrical systems. (a) is wrong: \"Article 500\" — Article 500 covers hazardous locations. (c) is wrong: \"Article 700\" — Article 700 covers emergency systems. (d) is wrong: \"Article 430\" — Article 430 covers motors."
    },
    {
      "module": 4,
      "q": "In a hazardous location, what does Division 1 mean?",
      "choices": [
        "The hazard is present only under abnormal conditions",
        "The hazard is normally present",
        "The area is safe for general-purpose equipment",
        "The area has no flammable material"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Division 1 means the hazardous material is normally present in the area. (a) is wrong: \"The hazard is present only under abnormal conditions\" — Present only under abnormal conditions is Division 2. (c) is wrong: \"The area is safe for general-purpose equipment\" — General-purpose equipment is not permitted in a Division 1 location. (d) is wrong: \"The area has no flammable material\" — A location with no flammable material is not classified at all."
    },
    {
      "module": 4,
      "q": "How many correct answers pass the Michigan master exam?",
      "choices": [
        "60",
        "57",
        "65",
        "52"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The master exam is 76 questions at 75%, so 57 correct answers pass. (a) is wrong: \"60\" — 60 correct is the journeyman pass count (80 questions at 75%). (c) is wrong: \"65\" — 65 is the NABCEP scaled score, not a master-exam count. (d) is wrong: \"52\" — 52 correct would be only 68% of 76."
    },
    {
      "module": 4,
      "q": "A takeoff counts 24 receptacles at 0.5 labor hours each. How many labor hours is that?",
      "choices": [
        "48 hours",
        "12 hours",
        "24 hours",
        "6 hours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 24 × 0.5 = 12 labor hours. (a) is wrong: \"48 hours\" — 48 hours would be 24 × 2, not 24 × 0.5. (c) is wrong: \"24 hours\" — 24 hours would be 1 hour per receptacle. (d) is wrong: \"6 hours\" — 6 hours would be 0.25 hours per receptacle."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Michigan Master Review: Business, Estimating & Advanced Code: Quick Reference</h3><p><strong>Focus:</strong> The Exam: 76 Questions, 180 Minutes, 75% to Pass — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> State the Michigan master exam format: 76 questions, 180 minutes, 75% to pass, open-book on the 2023 NEC plus Michigan Part 8 amendments.; Explain the apprentice → journeyman → master licensing path and the renewal rule (by December 31).; Build an estimate: takeoff, labor units, material, overhead, and markup versus margin..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> Master exam, Journeyman, Master electrician, Reciprocity, Takeoff, Labor unit, Markup, Margin</p>\n"
};
