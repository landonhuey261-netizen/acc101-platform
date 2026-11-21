// ele104 - Module 12: NEC Lookup Drills & Exam Strategy
module.exports = {
  "number": 12,
  "slug": "nec-lookup-drills-exam-strategy",
  "title": "NEC Lookup Drills & Exam Strategy",
  "estTime": "3–4 hours",
  "objectives": [
    "Look up any rule in the NEC in under two minutes using the contents and index.",
    "Use Chapter 9 tables and Annex C for conduit-fill questions.",
    "Work the five calculation types: box fill, conduit fill, voltage drop, ampacity, and bending.",
    "Manage time on a timed, open-book code exam.",
    "Explain the difference between NCCER module tests (70%) and journey-level assessments (75%)."
  ],
  "sections": [
    {
      "heading": "The Lookup Drill",
      "html": "<p>Speed in the Code book is a trained skill, not a talent. The drill is simple: a partner (or a flashcard) names a topic — “box fill,” “grounding electrode conductor,” “EMT support” — and you find the article and section in under two minutes. Start with the table of contents when you know the article family, and with the index when you only know the topic. Time yourself, and keep a log of the articles that slow you down.</p><p>The high-traffic articles to drill until they are reflexes: 90, 100, 110, 200, 210, 215, 220, 230, 240, 250, 300, 310, 314, 334, 342, 344, 352, 358, 376, 392, 430. If you can open to any of those without hunting, you have bought yourself minutes on every exam question. Tab the book: colored tabs on the chapter dividers and on your most-used articles are standard practice and are allowed in most open-book exams.</p><p>When you find a section, read the whole thing: the main rule, the exceptions, and the table notes. Exam questions are written to catch the reader who stops at the first sentence. The exception is often the answer.</p><div class=\"callout\"><strong>Key idea:</strong> Drill lookups until the high-traffic articles are reflexes. Tab the book, time yourself, and always read the exceptions.</div>"
    },
    {
      "heading": "The Five Calculation Types",
      "html": "<p>Five calculation types appear on almost every electrician exam. Box fill (314.16): count allowances, multiply by the volume per conductor, compare with the box volume. Conduit fill (Chapter 9): percent fill by conductor count (53% one, 31% two, 40% more than two), or use Annex C for the maximum conductor count. Voltage drop: use Chapter 9, Table 8 for conductor resistance and the formula VD = 2 × K × I × L ÷ CM for single-phase, where K is 12.9 for copper. Ampacity: Table 310.16, then correction and adjustment factors, then the termination check. Bending: multipliers and shrink, as in Module 11.</p><p>Voltage drop deserves a worked example because it is the calculation most students skip. A 120-volt circuit carries 12 amperes over 100 feet using 12 AWG copper (6530 circular mils). VD = 2 × 12.9 × 12 × 100 ÷ 6530 = 4.74 volts, which is 3.95% of 120 volts — above the 3% branch-circuit recommendation in the informational note. The fix is larger wire: 10 AWG (10380 CM) gives VD = 2 × 12.9 × 12 × 100 ÷ 10380 = 2.98 volts, or 2.48%.</p><p>For each calculation type, write the formula and the table on a single reference card and practice with fresh numbers until the steps are automatic. On the exam, the numbers change; the steps never do.</p><ul><li>Box fill: count × volume per conductor ≤ box volume.</li><li>Conduit fill: 53% / 31% / 40%, or Annex C counts.</li><li>Voltage drop: VD = 2 × K × I × L ÷ CM (single-phase); K = 12.9 copper.</li><li>Ampacity: Table 310.16 × correction × adjustment → termination check.</li><li>Bending: multipliers and shrink.</li></ul>"
    },
    {
      "heading": "Exam Strategy: Open-Book, Timed",
      "html": "<p>A code exam is a time-management exercise with a book. Read every question twice: the first read finds the topic, the second read finds the trap — the word “except,” the “not,” the condition in the exception. Answer the calculation questions you know first, because they are worth the same as the lookup questions but take longer; leave the hardest lookup for last, when the clock pressure is off the easy points.</p><p>When a question gives you a scenario, picture the installation. A question about a subpanel is really asking whether neutral and ground are separated. A question about a hot attic is really asking for a derating calculation. A question about a box with three cables is really asking for a box-fill count. The scenario is the hint.</p><p>Never leave a question blank on a multiple-choice exam, and never change an answer unless you find the rule that proves the first answer wrong. First instincts on code questions are usually the product of study, not guessing — change them only with evidence from the book.</p><div class=\"callout\"><strong>Key idea:</strong> Read every question twice, answer the calculations you know first, and change an answer only when the book proves the first one wrong.</div>"
    },
    {
      "heading": "NCCER, Licensing, and What Comes Next",
      "html": "<p>This program is modeled on the Thaddeus Stevens College of Technology Electrical Technology AAS and the NCCER Electrical Levels 1–4 curricula. NCCER module tests pass at 70%. That is a different number from the NCCER journey-level assessment pass mark, which is 75% — never blend the two. The module tests measure what you learned in one module; the journey-level assessment measures whether you can do the trade's work at journey level.</p><p>Licensing is a separate step from training. In Michigan, electrical licensing is administered by the state, and the path runs from apprentice to journeyman to master through a combination of supervised hours and examinations. This app teaches the knowledge side of that path; the hours, the hands-on sign-offs, and the license itself come from working under a licensed electrician and applying through the state. Detroit licenses electricians separately from the rest of Michigan, and this program does not state Detroit's requirements because they were not researched here.</p><p>OSHA 10- and 30-hour training is part of the safety side of the trade. OSHA requires no test for the DOL card; the card comes from completing the required hours with an authorized trainer. Any test score attached to an OSHA outreach course is set by the training provider, not by OSHA, and it is not an OSHA pass mark.</p><p>What comes next in this program is Electrical 105 (residential wiring) and Electrical 106 (commercial wiring), which apply everything in this course to real houses and real commercial buildings. Keep this course's tables — 310.16, 250.66, 250.122, 314.16(B), Chapter 9 — close at hand. You will use them in every course that follows.</p><ul><li>NCCER module tests pass at 70%; journey-level assessments pass at 75% — different numbers.</li><li>OSHA requires no test for the DOL card; any course test score is provider-set, not an OSHA pass mark.</li><li>Licensing comes from supervised hours plus state examinations; this app teaches the knowledge side.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Lookup drill: contents for article families, index for topics, under two minutes, always read the exceptions.</li><li>Five calculation types: box fill, conduit fill, voltage drop, ampacity/derating, bending.</li><li>Voltage drop (single-phase): VD = 2 × K × I × L ÷ CM; K = 12.9 for copper.</li><li>NCCER module tests 70%, journey-level assessments 75%.</li><li>OSHA requires no test for the DOL card.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Stopping at the first sentence of a section. The exception is often the answer, and the table notes change the result.</div><div class=\"callout\"><strong>Common mistake:</strong> Blending the 70% module-test mark with the 75% journey-level mark. They are different assessments with different pass marks.</div><p><strong>Ready-to-Work link:</strong> If you can look up five rules in under two minutes each, run all five calculation types, and explain the 70/75 distinction, you have this course. Electrical 105 applies it all to houses.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Lookup drill",
      "def": "Timed practice finding Code rules by topic, using the contents and the index."
    },
    {
      "term": "Annex C",
      "def": "NEC annex listing the maximum number of conductors in each conduit size and type."
    },
    {
      "term": "Voltage drop",
      "def": "The loss of voltage along a conductor; recommended limits are 3% branch circuit, 5% total (informational note)."
    },
    {
      "term": "Circular mil (CM)",
      "def": "The unit of conductor cross-sectional area used in voltage-drop calculations."
    },
    {
      "term": "K value",
      "def": "The resistivity constant used in voltage-drop formulas: 12.9 for copper, 21.2 for aluminum."
    },
    {
      "term": "NCCER module test",
      "def": "A written test for one NCCER training module; passes at 70%."
    },
    {
      "term": "Journey-level assessment",
      "def": "An NCCER assessment of journey-level competence; passes at 75%."
    },
    {
      "term": "OSHA outreach training",
      "def": "The OSHA 10- and 30-hour courses; OSHA requires no test for the DOL card."
    },
    {
      "term": "Open-book exam",
      "def": "An exam where the Code book may be used; speed of lookup is the tested skill."
    },
    {
      "term": "Exception",
      "def": "A narrow, conditional permission inside a Code section; often the key to an exam question."
    },
    {
      "term": "Table 310.15(B)(1)",
      "def": "Ambient-temperature correction factors for conductor ampacity."
    },
    {
      "term": "Table 310.15(C)(1)",
      "def": "Adjustment factors for more than three current-carrying conductors."
    }
  ],
  "video": {
    "title": "Journeyman Electrician (NEC 2023) — Load Calculations Article 220: 4 Worked Examples + 5 Self-Test",
    "embedUrl": "https://www.youtube.com/embed/UY7Py1Ry63s",
    "note": "This NEC 2023 load-calculation masterclass works four full examples step by step, then finishes with a self-test. It is the best model in this course for how to work a calculation question under time pressure.",
    "more": [
      {
        "title": "Journeyman Electrician Exam Prep (NEC 2023) — Box Fill 314.16: 6 Worked Examples + 5 Self-Test",
        "url": "https://www.youtube.com/watch?v=ptk5wNAqHL0"
      },
      {
        "title": "You'll Finally Understand Breakers & GFCIs — and Which One Saves You",
        "url": "https://www.youtube.com/watch?v=hMiksQLHzMA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit carries 12 amperes over 100 feet on 12 AWG copper (6530 CM). Calculate the voltage drop and the percentage.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VD = 2 × 12.9 × 12 × 100 ÷ 6530 = 4.74 volts. Step 2: Percentage = 4.74 ÷ 120 = 3.95%. Step 3: That exceeds the 3% branch-circuit recommendation, so upsize to 10 AWG (VD = 2.98 V, 2.48%).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 240-volt circuit carries 20 amperes over 150 feet on 10 AWG copper (10380 CM). Calculate the voltage drop using the single-phase formula with L as the one-way length.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VD = 2 × 12.9 × 20 × 150 ÷ 10380 = 7.46 volts. Step 2: Percentage = 7.46 ÷ 240 = 3.11%. Step 3: Slightly above the 3% recommendation — consider 8 AWG for a long run like this.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You have 30 seconds per question on a lookup drill. Name the article for each: box fill, EMT support, grounding electrode conductor, NM cable uses not permitted.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Box fill — Article 314. Step 2: EMT support — Article 358 (358.30). Step 3: Grounding electrode conductor — Article 250 (Table 250.66). Step 4: NM uses not permitted — Article 334 (334.12).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A conduit run has three 12 AWG THHN conductors and one ground in 1/2-inch EMT. Use Annex C: how many 12 AWG THHN conductors fit in 1/2-inch EMT, and is the run compliant?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Annex C, Table C.1 lists 9 conductors of 12 AWG THHN in 1/2-inch EMT. Step 2: This run has three circuit conductors plus a ground. Step 3: The ground counts toward fill in Annex C, so 4 conductors total is well under 9 — the run is compliant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between the NCCER module-test pass mark and the journey-level assessment pass mark.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NCCER module tests pass at 70%. Step 2: Journey-level assessments pass at 75%. Step 3: They are different assessments — one measures a single module, the other measures journey-level competence — so the numbers must never be blended.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A classmate says, “I failed the OSHA 10-hour test, so I can't get my DOL card.” What is wrong with that statement?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: OSHA requires no test for the DOL card. Step 2: The card comes from completing the required hours with an authorized trainer. Step 3: Any test in an OSHA outreach course is set by the provider, not by OSHA, and is not an OSHA pass mark.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Annex C of the NEC lists:",
      "choices": [
        "Box volumes",
        "The maximum number of conductors in each conduit size and type",
        "Grounding electrode sizes",
        "Breaker ratings"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Annex C lists maximum conductor counts per conduit. (a) Box volumes are in Table 314.16(A). (c) GEC sizes are in Table 250.66. (d) Breaker ratings are in 240.6(A)."
    },
    {
      "q": "The single-phase voltage-drop formula is:",
      "choices": [
        "VD = K × I × L ÷ CM",
        "VD = 2 × K × I × L ÷ CM",
        "VD = I × R × 3",
        "VD = 1.73 × K × I × L ÷ CM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Single-phase: VD = 2 × K × I × L ÷ CM. (a) That omits the factor of 2 for the round trip. (c) That is not the voltage-drop formula. (d) 1.73 is the three-phase factor."
    },
    {
      "q": "The K value for copper in voltage-drop calculations is:",
      "choices": [
        "10.4",
        "12.9",
        "21.2",
        "25.0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). K = 12.9 for copper. (a) 10.4 is not a standard K value. (c) 21.2 is the K value for aluminum. (d) 25.0 is not a K value."
    },
    {
      "q": "The recommended maximum voltage drop for a branch circuit, per the informational note, is:",
      "choices": [
        "1%",
        "3%",
        "5%",
        "10%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3% for a branch circuit, 5% total. (a) 1% is stricter than the recommendation. (c) 5% is the total (feeder plus branch) recommendation. (d) 10% is far above the recommendation."
    },
    {
      "q": "NCCER module tests pass at:",
      "choices": [
        "60%",
        "70%",
        "75%",
        "80%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Module tests pass at 70%. (a) 60% is not an NCCER pass mark. (c) 75% is the journey-level assessment mark. (d) 80% is not an NCCER pass mark."
    },
    {
      "q": "NCCER journey-level assessments pass at:",
      "choices": [
        "60%",
        "70%",
        "75%",
        "90%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Journey-level assessments pass at 75%. (a) 60% is not an NCCER pass mark. (b) 70% is the module-test mark. (d) 90% is not an NCCER pass mark."
    },
    {
      "q": "OSHA requires a test for the OSHA 10-hour DOL card:",
      "choices": [
        "True — the test pass mark is 70%",
        "False — OSHA requires no test for the card",
        "True — the test pass mark is 75%",
        "False — the card is bought from OSHA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OSHA requires no test; the card comes from completing the hours with an authorized trainer. (a) and (c) There is no OSHA test or OSHA pass mark. (d) The card is not bought from OSHA."
    },
    {
      "q": "On a timed open-book code exam, the best first move is to:",
      "choices": [
        "Answer the hardest lookup first",
        "Read each question twice and answer the calculations you know first",
        "Memorize the whole book",
        "Skip all calculation questions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Read twice, bank the known calculations first, and leave the hardest lookup for last. (a) The hardest lookup first wastes time. (c) Memorizing the whole book is not possible or necessary. (d) Calculation questions are worth the same as lookups."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — NEC Lookup &amp; Exam Strategy: Quick Reference</h3>\n<p><strong>Core idea:</strong> A code exam tests lookup speed and calculation steps, not memorization. Drill the high-traffic articles and the five calculation types.</p>\n<p><strong>Five calculations:</strong> Box fill (314.16) · conduit fill (Chapter 9 / Annex C: 53% / 31% / 40%) · voltage drop (VD = 2 × K × I × L ÷ CM; K = 12.9 Cu) · ampacity/derating (310.16 × correction × adjustment) · bending (multipliers and shrink).</p>\n<p><strong>Voltage drop:</strong> Recommended 3% branch circuit, 5% total (informational note, not enforceable).</p>\n<p><strong>Pass marks:</strong> NCCER module tests 70% · journey-level assessments 75% — never blend them.</p>\n<p><strong>OSHA:</strong> OSHA requires no test for the DOL card; any course test score is provider-set.</p>\n<p><strong>Self-check:</strong> Look up five rules in under two minutes each, and run one voltage-drop calculation from scratch.</p>\n"
};
