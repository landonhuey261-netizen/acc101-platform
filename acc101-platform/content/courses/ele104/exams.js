// ele104 — Midterm and Final exams.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A Michigan inspector enforces the NEC as adopted under Part 8. Which edition, and when did the adoption take effect?",
        "choices": [
          "2020 NEC, effective January 1, 2020",
          "2023 NEC, effective March 12, 2024",
          "2026 NEC, effective March 12, 2024",
          "2017 NEC, effective March 12, 2024"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Michigan adopted the 2023 NEC under Part 8, effective March 12, 2024. (a) The 2020 edition is not the Michigan adoption. (c) The 2026 NEC is never cited in this program. (d) The 2017 edition is outdated."
      },
      {
        "module": 1,
        "q": "Chapters 5, 6, and 7 of the NEC cover:",
        "choices": [
          "General rules for all installations",
          "Special occupancies, special equipment, and special conditions",
          "Communications systems",
          "The tables"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Chapters 5–7 are the special chapters. (a) Chapters 1–4 are the general chapters. (c) Chapter 8 is communications. (d) Chapter 9 holds the tables."
      },
      {
        "module": 1,
        "q": "A section states that a wiring method “shall be permitted” in a damp location. That means:",
        "choices": [
          "It must be used there",
          "It is allowed there but not required",
          "It is prohibited there",
          "It is allowed only in dwellings"
        ],
        "answer": 1,
        "explanation": "Correct: (b). “Shall be permitted” is an allowance. (a) Mandatory would be worded “shall.” (c) Prohibited would be “shall not.” (d) The permission is not limited to dwellings."
      },
      {
        "module": 2,
        "q": "The conductors between the service equipment and the final branch-circuit overcurrent device are the:",
        "choices": [
          "Branch circuit",
          "Feeder",
          "Service conductors",
          "Grounding electrode conductor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That run is a feeder. (a) A branch circuit runs from the final overcurrent device to the outlet. (c) Service conductors run from the utility to the service equipment. (d) The GEC connects the service to the electrodes."
      },
      {
        "module": 2,
        "q": "A subpanel's neutral bus must be:",
        "choices": [
          "Bonded to the enclosure",
          "Isolated from the enclosure, with the ground bus bonded to it",
          "Connected to the water pipe only",
          "Left floating with no connection"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In a subpanel the neutral is isolated and the ground bus is bonded to the enclosure. (a) Bonding the neutral in a subpanel lets neutral current flow on grounding conductors. (c) The water pipe is bonded at the service, not at the subpanel neutral. (d) The neutral must connect back to the service neutral."
      },
      {
        "module": 2,
        "q": "The minimum working-space height in front of electrical equipment is:",
        "choices": [
          "6 feet",
          "6 feet 6 inches",
          "7 feet",
          "8 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 110.26(A)(3) requires 6 feet 6 inches of headroom. (a) 6 feet is too low. (c) and (d) 7 and 8 feet exceed the minimum."
      },
      {
        "module": 3,
        "q": "A continuous load of 32 amperes needs conductors rated at least:",
        "choices": [
          "32 amperes",
          "36 amperes",
          "40 amperes",
          "50 amperes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 32 × 1.25 = 40 amperes. (a) 32 A has no 125% margin. (b) 36 A is only 112.5%. (d) 50 A exceeds the minimum."
      },
      {
        "module": 3,
        "q": "Which of these is NOT one of the required dwelling branch circuits?",
        "choices": [
          "Two 20-ampere small-appliance circuits",
          "One 20-ampere laundry circuit",
          "One 20-ampere bathroom circuit",
          "One 30-ampere garage circuit"
        ],
        "answer": 3,
        "explanation": "Correct: (d). There is no required 30-ampere garage circuit in 210.11(C). (a), (b), and (c) are all required dwelling circuits."
      },
      {
        "module": 3,
        "q": "A feeder supplies 30 amperes noncontinuous and 16 amperes continuous. Minimum feeder ampacity is:",
        "choices": [
          "46 amperes",
          "50 amperes",
          "56 amperes",
          "60 amperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 + (16 × 1.25 = 20) = 50 amperes. (a) 46 A adds the loads without the 125% factor. (c) 56 A applies 125% to both loads. (d) 60 A overstates the requirement."
      },
      {
        "module": 4,
        "q": "The 90°C ampacity of 8 AWG copper from Table 310.16 is:",
        "choices": [
          "40 amperes",
          "50 amperes",
          "55 amperes",
          "70 amperes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 8 AWG copper is 40/50/55 A at 60/75/90°C. (a) 40 A is the 60°C value. (b) 50 A is the 75°C value. (d) 70 A is the 60°C value for 4 AWG."
      },
      {
        "module": 4,
        "q": "A 10 AWG THHN conductor (40 A at 90°C) runs with 7 current-carrying conductors in a 36–40°C space. What is its derated ampacity?",
        "choices": [
          "40 × 0.91 × 0.70 = 25.5 A",
          "40 × 0.87 × 0.80 = 27.8 A",
          "40 × 0.91 × 0.80 = 29.1 A",
          "40 × 0.82 × 0.70 = 23.0 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Correction at 36–40°C is 0.91 and adjustment for 7–9 conductors is 0.70: 40 × 0.91 × 0.70 = 25.5 A. (b) Uses the wrong temperature factor and the wrong conductor-count factor. (c) Uses 0.80, which is for 4–6 conductors. (d) Uses the 46–50°C factor."
      },
      {
        "module": 4,
        "q": "NM cable ampacity is limited to the 60°C column because of:",
        "choices": [
          "Table 310.16",
          "Section 334.80",
          "Section 250.122",
          "Article 110.14(C)"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 334.80 imposes the 60°C limit on NM cable. (a) Table 310.16 lists ampacities but does not impose the NM limit. (c) 250.122 sizes EGCs. (d) 110.14(C) governs termination ratings generally."
      },
      {
        "module": 5,
        "q": "A 400-ampere service has 400 kcmil copper service-entrance conductors. Table 250.66 calls for a copper GEC of:",
        "choices": [
          "4 AWG",
          "2 AWG",
          "1/0 AWG",
          "2/0 AWG"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 250.66: 400 kcmil copper service conductors call for a 1/0 copper GEC. (a) 4 AWG is for a 200 A service with 2/0 conductors. (b) 2 AWG is the ground-ring cap. (d) 2/0 AWG is larger than required."
      },
      {
        "module": 5,
        "q": "The EGC for a 60-ampere circuit is:",
        "choices": [
          "12 AWG copper",
          "10 AWG copper",
          "8 AWG copper",
          "6 AWG copper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Table 250.122: 40–60 A calls for 10 AWG copper. (a) 12 AWG is for 20 A. (c) 8 AWG is for 100 A. (d) 6 AWG is for 200 A."
      },
      {
        "module": 5,
        "q": "A single ground rod is driven and its resistance to earth measures 40 ohms. What does 250.53(A)(2) require?",
        "choices": [
          "Nothing — one rod is always enough",
          "A supplemental electrode",
          "A larger rod",
          "A deeper rod only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A single rod over 25 ohms requires a supplemental electrode. (a) One rod is enough only if its resistance is 25 ohms or less. (c) A larger rod is not the Code's remedy. (d) Driving deeper may help resistance but is not what the section requires."
      },
      {
        "module": 5,
        "q": "The main bonding jumper is sized by:",
        "choices": [
          "Table 250.66",
          "Table 250.122",
          "Table 250.102(C)(1)",
          "Table 310.16"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 250.102(C)(1) sizes the main bonding jumper. (a) Table 250.66 sizes the GEC. (b) Table 250.122 sizes the EGC. (d) Table 310.16 is ampacity."
      },
      {
        "module": 6,
        "q": "A box holds two 14/2 cables and one receptacle, with internal clamps. What is the total fill?",
        "choices": [
          "12.0 in³",
          "14.0 in³",
          "16.0 in³",
          "18.0 in³"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Conductors 4 + yoke 2 + clamps 1 + grounds 1 = 8 allowances × 2.00 in³ = 16.0 in³. (a) 12.0 in³ counts only the conductors. (b) 14.0 in³ misses one allowance. (d) 18.0 in³ is the volume of a 4-in. square 1-1/2-in. box, not this fill."
      },
      {
        "module": 6,
        "q": "A box contains eight grounding conductors. How many volume allowances do they count under the 2023 NEC?",
        "choices": [
          "1",
          "1.5",
          "2",
          "2.5"
        ],
        "answer": 2,
        "explanation": "Correct: (c). First four = 1, four extra × 1/4 = 1, total 2. (a) 1 was the pre-2023 rule. (b) 1.5 is the count for six grounds. (d) 2.5 would be ten grounds."
      },
      {
        "module": 6,
        "q": "A straight pull box has a 3-inch conduit entering and leaving straight through. Minimum box length is:",
        "choices": [
          "18 inches",
          "24 inches",
          "30 inches",
          "36 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Straight pull: 8 × 3 in. = 24 inches. (a) 18 inches is the 6× angle-pull figure. (c) and (d) 30 and 36 inches exceed the minimum."
      },
      {
        "module": 6,
        "q": "A box in a noncombustible wall must be installed:",
        "choices": [
          "1/4 inch back from the finished surface",
          "Flush with the finished surface",
          "1/2 inch back from the finished surface",
          "1 inch proud of the finished surface"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 314.20 requires flush in noncombustible walls. (a) 1/4 inch back is allowed only in combustible walls. (c) 1/2 inch back is a violation in either wall type. (d) Proud of the surface is not permitted."
      },
      {
        "module": 1,
        "q": "The AHJ for an electrical installation is:",
        "choices": [
          "The electrical contractor",
          "The Authority Having Jurisdiction",
          "The equipment manufacturer",
          "The apprentice's instructor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The AHJ is the inspector or agency enforcing the Code. (a) The contractor performs the work. (c) The manufacturer builds the equipment. (d) The instructor teaches; the AHJ enforces."
      },
      {
        "module": 2,
        "q": "The grounded conductor must be identified by:",
        "choices": [
          "Black insulation",
          "White or gray insulation or marking",
          "Green insulation",
          "Bare copper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 200 requires white or gray identification for the grounded conductor. (a) Black is an ungrounded (hot) color. (c) Green is the grounding conductor. (d) Bare is the grounding conductor."
      },
      {
        "module": 3,
        "q": "A 20-ampere branch circuit may serve a load of 18 amperes noncontinuous. Is this compliant?",
        "choices": [
          "Yes — 18 A is below the 20 A rating",
          "No — the load must be 16 A or less",
          "No — 20 A circuits may serve only 15 A loads",
          "Yes, but only if the load is continuous"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A noncontinuous 18 A load is within a 20 A circuit's rating. (b) 16 A is the continuous-load limit (16 × 1.25 = 20). (c) 20 A circuits may serve loads up to 20 A. (d) A continuous 18 A load would need a 25 A circuit."
      },
      {
        "module": 4,
        "q": "Which of these is counted as a current-carrying conductor for adjustment factors?",
        "choices": [
          "The equipment grounding conductor",
          "A neutral carrying only unbalanced current in a 3-wire circuit",
          "A hot conductor",
          "A bonding jumper"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Hot conductors carry load current and are counted. (a) Grounding conductors are never counted. (b) That neutral is not counted. (d) A bonding jumper is not a circuit conductor."
      },
      {
        "module": 5,
        "q": "Metal water piping must be bonded under:",
        "choices": [
          "250.52",
          "250.66",
          "250.104(A)",
          "250.122"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 250.104(A) requires bonding metal water piping. (a) 250.52 lists electrodes. (b) Table 250.66 sizes the GEC. (d) Table 250.122 sizes the EGC."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "An informational note in the NEC is best described as:",
        "choices": [
          "An enforceable rule",
          "Explanatory text that is not enforceable",
          "A Michigan amendment",
          "An exception"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Informational notes explain but are not enforceable. (a) Only Code text is enforceable. (c) Amendments come from the adopting jurisdiction. (d) Exceptions are conditional permissions inside a section."
      },
      {
        "module": 1,
        "q": "Which chapter of the NEC holds the tables for conduit fill and conductor properties?",
        "choices": [
          "Chapter 2",
          "Chapter 3",
          "Chapter 8",
          "Chapter 9"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Chapter 9 holds the tables. (a) Chapter 2 is wiring and protection. (b) Chapter 3 is wiring methods. (c) Chapter 8 is communications systems."
      },
      {
        "module": 2,
        "q": "An outlet is defined in Article 100 as:",
        "choices": [
          "A receptacle only",
          "A point on the wiring system where current is taken to supply utilization equipment",
          "A switch",
          "A panelboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An outlet is the point where current is taken for utilization equipment. (a) A receptacle is one kind of outlet device. (c) A switch is a device. (d) A panelboard is equipment."
      },
      {
        "module": 2,
        "q": "Working-space depth for Condition 3 (exposed live parts on both sides) is:",
        "choices": [
          "36 inches",
          "42 inches",
          "48 inches",
          "60 inches"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Condition 3 depth is 48 inches per Table 110.26(A)(1). (a) 36 inches is Condition 1. (b) 42 inches is Condition 2. (d) 60 inches is not a working-space depth."
      },
      {
        "module": 3,
        "q": "A 30-ampere branch circuit's minimum copper conductor is:",
        "choices": [
          "12 AWG",
          "10 AWG",
          "8 AWG",
          "6 AWG"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 10 AWG copper is the minimum for 30 amperes. (a) 12 AWG is the minimum for 20 amperes. (c) 8 AWG is larger than needed. (d) 6 AWG is larger than needed."
      },
      {
        "module": 3,
        "q": "The small-appliance branch circuits are required by 210.11(C)(1) to be:",
        "choices": [
          "15 amperes",
          "20 amperes",
          "25 amperes",
          "30 amperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At least two 20-ampere circuits. (a) 15 A is too small. (c) and (d) 25 and 30 A are not the required rating."
      },
      {
        "module": 4,
        "q": "The 75°C ampacity of 6 AWG copper is:",
        "choices": [
          "55 amperes",
          "65 amperes",
          "75 amperes",
          "85 amperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6 AWG copper is 55/65/75 A at 60/75/90°C. (a) 55 A is the 60°C value. (c) 75 A is the 90°C value. (d) 85 A is the 75°C value for 4 AWG."
      },
      {
        "module": 4,
        "q": "A conductor's derated ampacity is 28 amperes and its 75°C termination ampacity is 25 amperes. The conductor may carry:",
        "choices": [
          "28 amperes",
          "25 amperes",
          "30 amperes",
          "35 amperes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The smaller governs — the termination limit of 25 A. (a) 28 A exceeds the termination limit. (c) and (d) 30 and 35 A exceed both limits."
      },
      {
        "module": 5,
        "q": "EMT, RMC, and IMC may serve as an equipment grounding conductor when:",
        "choices": [
          "They are painted",
          "They are properly installed with tight fittings",
          "They are used outdoors",
          "A ground rod is attached"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Metal raceways are EGCs under 250.118 when properly installed and tight. (a) Paint does not create a ground path. (c) Location does not matter. (d) A ground rod does not make the raceway a fault path."
      },
      {
        "module": 5,
        "q": "If circuit conductors are upsized for voltage drop, the EGC must be:",
        "choices": [
          "Left the same size",
          "Increased proportionally per 250.122(B)",
          "Decreased",
          "Removed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 250.122(B) requires a proportional increase. (a) Leaving it the same size leaves too small a fault path. (c) Decreasing it is worse. (d) Removing it leaves no fault path."
      },
      {
        "module": 6,
        "q": "The volume allowance for one 10 AWG conductor is:",
        "choices": [
          "2.00 in³",
          "2.25 in³",
          "2.50 in³",
          "3.00 in³"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 314.16(B): 10 AWG = 2.50 in³. (a) 2.00 in³ is 14 AWG. (b) 2.25 in³ is 12 AWG. (d) 3.00 in³ is 8 AWG."
      },
      {
        "module": 6,
        "q": "An angle pull box has a 2-inch conduit entering and a 1-inch conduit on the same wall. Minimum entry-to-opposite-wall distance is:",
        "choices": [
          "12 inches",
          "13 inches",
          "16 inches",
          "20 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6 × 2 in. = 12 in., plus 1 in. for the other raceway = 13 inches. (a) 12 inches forgets the other raceway. (c) 16 inches is the 8× straight-pull figure. (d) 20 inches overstates the requirement."
      },
      {
        "module": 7,
        "q": "NM cable is NOT permitted:",
        "choices": [
          "In a dwelling's interior walls",
          "Embedded in poured cement",
          "On a 15-ampere lighting circuit",
          "In a wood-framed house"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 334.12 prohibits NM embedded in poured cement. (a), (c), and (d) NM is permitted in dwelling walls, on lighting circuits, and in wood-framed houses."
      },
      {
        "module": 7,
        "q": "A conduit run has three 90-degree bends and two 45-degree bends between pull points. Total bends and compliance:",
        "choices": [
          "360° — compliant, at the limit",
          "270° — compliant",
          "450° — not compliant",
          "180° — compliant"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 3 × 90 = 270, plus 2 × 45 = 90, total 360° — exactly the limit, so compliant. (b) 270° miscounts the 45s. (c) 450° is the wrong total. (d) 180° is wrong."
      },
      {
        "module": 7,
        "q": "Under 300.4, cable through framing needs a steel plate when the hole is closer than:",
        "choices": [
          "1 inch from the edge",
          "1-1/4 inches from the edge",
          "2 inches from the edge",
          "3 inches from the edge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Holes must be 1-1/4 inches from the edge or the cable must be protected by a steel plate. (a) 1 inch is inside the protected zone. (c) and (d) 2 and 3 inches are beyond the minimum."
      },
      {
        "module": 8,
        "q": "The take-up for a 90-degree stub-up in 3/4-inch EMT is:",
        "choices": [
          "5 inches",
          "6 inches",
          "8 inches",
          "10 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3/4-inch EMT take-up is 6 inches. (a) 5 inches is for 1/2-inch. (c) 8 inches is for 1-inch. (d) 10 inches is not a standard take-up."
      },
      {
        "module": 8,
        "q": "A 2-inch offset with 45-degree bends needs bend marks:",
        "choices": [
          "2 inches apart",
          "2.8 inches apart",
          "4 inches apart",
          "5.2 inches apart"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 × 1.4 = 2.8 inches apart. (a) 2 inches ignores the multiplier. (c) 4 inches is the 30-degree layout. (d) 5.2 inches is the 22.5-degree layout."
      },
      {
        "module": 8,
        "q": "EMT must be supported at intervals of not more than:",
        "choices": [
          "3 feet",
          "5 feet",
          "8 feet",
          "10 feet"
        ],
        "answer": 3,
        "explanation": "Correct: (d). 358.30: 10-foot maximum intervals. (a) 3 feet is the distance from a box. (b) 5 feet is the wireway interval. (c) 8 feet is not an EMT rule."
      },
      {
        "module": 9,
        "q": "RMC is governed by Article:",
        "choices": [
          "342",
          "344",
          "352",
          "358"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RMC is Article 344. (a) 342 is IMC. (c) 352 is PVC. (d) 358 is EMT."
      },
      {
        "module": 9,
        "q": "PVC conduit 2 inches in trade size must be supported at intervals of not more than:",
        "choices": [
          "3 feet",
          "5 feet",
          "6 feet",
          "10 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 352.30: 1-1/4- to 2-inch PVC every 5 feet. (a) 3 feet is for 1/2- to 1-inch. (c) 6 feet is for 2-1/2- to 3-inch. (d) 10 feet is the metal-conduit interval."
      },
      {
        "module": 9,
        "q": "A PVC run outdoors will expand 3 inches over its length. The Code requires:",
        "choices": [
          "Nothing — PVC does not expand",
          "Expansion fittings per 352.44",
          "Larger conduit",
          "Metal conduit instead"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Movement over 1/4 inch requires expansion fittings (352.44). (a) PVC expands significantly with temperature. (c) Larger conduit does not absorb expansion. (d) Metal conduit is an option but not what the Code requires here."
      },
      {
        "module": 10,
        "q": "Splices and taps in a metal wireway are permitted if:",
        "choices": [
          "They are hidden inside the wall",
          "They are accessible and do not fill the wireway beyond 75% of the cross-sectional area at that point",
          "They are taped over",
          "They use only twist-on connectors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 376.56 permits splices and taps in a wireway if they are accessible and the fill at the splice point does not exceed 75% of the cross-sectional area. (a) Splices must be accessible, never hidden in a wall. (c) Tape is not the requirement. (d) The connector type is not the Code condition."
      },
      {
        "module": 10,
        "q": "Cable tray is governed by Article:",
        "choices": [
          "368",
          "376",
          "392",
          "396"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Cable tray is Article 392. (a) 368 is busways. (b) 376 is metal wireways. (d) 396 is messenger-supported wiring."
      },
      {
        "module": 10,
        "q": "A metal wireway must be supported at intervals of not more than:",
        "choices": [
          "3 feet",
          "5 feet",
          "8 feet",
          "10 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 376.30: 5-foot maximum intervals. (a) 3 feet is a PVC distance. (c) 8 feet is a PVC distance for large sizes. (d) 10 feet is the EMT interval."
      },
      {
        "module": 11,
        "q": "The multiplier for a 60-degree bend is:",
        "choices": [
          "1.2",
          "1.4",
          "2.0",
          "2.6"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 60 degrees = 1.2. (b) 1.4 is 45 degrees. (c) 2.0 is 30 degrees. (d) 2.6 is 22.5 degrees."
      },
      {
        "module": 11,
        "q": "The shrink for a 3-inch offset made with 60-degree bends is:",
        "choices": [
          "3/4 inch",
          "1 inch",
          "1-1/2 inches",
          "2 inches"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Shrink at 60° is 1/2 inch per inch, so 3 × 1/2 = 1-1/2 inches. (a) 3/4 inch is the 30-degree shrink. (b) 1 inch is not the 60-degree result. (d) 2 inches is too much."
      },
      {
        "module": 11,
        "q": "A 3-point saddle over a 2-inch obstruction has its outer marks:",
        "choices": [
          "2 inches from the center mark",
          "5.2 inches from the center mark",
          "4 inches from the center mark",
          "2.6 inches from the center mark"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 × 2.6 = 5.2 inches on each side of the center mark. (a) 2 inches ignores the multiplier. (c) 4 inches is the 30-degree result. (d) 2.6 inches is the multiplier, not the distance."
      },
      {
        "module": 12,
        "q": "The K value for aluminum in voltage-drop calculations is:",
        "choices": [
          "12.9",
          "21.2",
          "25.0",
          "10.4"
        ],
        "answer": 1,
        "explanation": "Correct: (b). K = 21.2 for aluminum. (a) 12.9 is the copper value. (c) and (d) 25.0 and 10.4 are not K values."
      },
      {
        "module": 12,
        "q": "On a 120-volt circuit, a voltage drop of 3.6 volts is:",
        "choices": [
          "2%",
          "3%",
          "4%",
          "5%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3.6 ÷ 120 = 3%. (a) 2% would be 2.4 V. (c) 4% would be 4.8 V. (d) 5% would be 6.0 V."
      },
      {
        "module": 12,
        "q": "Annex C is used to find:",
        "choices": [
          "The maximum number of conductors in a conduit",
          "Box volumes",
          "The GEC size",
          "The EGC size"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Annex C lists maximum conductor counts per conduit size. (b) Box volumes are in Table 314.16(A). (c) GEC size is in Table 250.66. (d) EGC size is in Table 250.122."
      },
      {
        "module": 2,
        "q": "Section 110.3(B) requires equipment to be installed:",
        "choices": [
          "However the installer prefers",
          "In accordance with its listing and labeling",
          "Only where the inspector approves the brand",
          "Without the manufacturer's instructions"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 110.3(B) requires installation per the listing and labeling. (a) Installer preference does not override the listing. (c) The listing, not brand approval, governs. (d) The manufacturer's instructions are part of the listing."
      },
      {
        "module": 4,
        "q": "The adjustment factor for 10–20 current-carrying conductors is:",
        "choices": [
          "80%",
          "70%",
          "50%",
          "45%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table 310.15(C)(1): 10–20 conductors = 50%. (a) 80% is for 4–6. (b) 70% is for 7–9. (d) 45% is for 21–30."
      },
      {
        "module": 5,
        "q": "The cap on a GEC to a concrete-encased (Ufer) electrode is:",
        "choices": [
          "6 AWG copper",
          "4 AWG copper",
          "2 AWG copper",
          "1/0 AWG copper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Ufer cap is 4 AWG copper. (a) 6 AWG is the rod cap. (c) 2 AWG is the ground-ring cap. (d) 1/0 AWG is larger than any cap."
      },
      {
        "module": 6,
        "q": "A device yoke counts as how many volume allowances?",
        "choices": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each yoke counts as two allowances. (a) One is a single conductor. (c) and (d) Three and four are not yoke counts."
      },
      {
        "module": 7,
        "q": "MC cable is governed by Article:",
        "choices": [
          "320",
          "330",
          "334",
          "340"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MC is Article 330. (a) 320 is AC cable. (c) 334 is NM cable. (d) 340 is UF cable."
      },
      {
        "module": 8,
        "q": "A stub-up of 30 inches in 1-inch EMT is marked at:",
        "choices": [
          "22 inches",
          "24 inches",
          "25 inches",
          "30 inches"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Take-up for 1-inch EMT is 8 inches, so 30 − 8 = 22 inches. (b) 24 inches would be the mark for a 6-inch take-up. (c) 25 inches is the mark for a 5-inch take-up. (d) 30 inches forgets the take-up."
      },
      {
        "module": 9,
        "q": "IMC is permitted in:",
        "choices": [
          "Hazardous locations per Article 500",
          "Underwater only",
          "Damp locations only",
          "Residential walls only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). IMC is permitted everywhere RMC is, including hazardous locations per Article 500. (b), (c), and (d) IMC is not limited to those uses."
      },
      {
        "module": 10,
        "q": "A surface raceway is used to:",
        "choices": [
          "Carry cables underground",
          "Add circuits to a finished wall without opening it",
          "Distribute 480-volt power in a factory",
          "Replace a panelboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Surface raceways add circuits on finished walls. (a) Underground runs use PVC or UF. (c) Busways distribute big factory power. (d) Raceways do not replace panelboards."
      },
      {
        "module": 11,
        "q": "The bender mark used for stub-ups and offsets is the:",
        "choices": [
          "Star",
          "Arrow",
          "Rim notch",
          "Degree scale"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The arrow marks stub-ups and offsets. (a) The star marks back-to-back bends. (c) The rim notch marks bend ends in some layouts. (d) The degree scale reads the angle."
      },
      {
        "module": 12,
        "q": "NCCER journey-level assessments pass at 75%. NCCER module tests pass at:",
        "choices": [
          "60%",
          "70%",
          "75%",
          "80%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Module tests pass at 70% — a different mark from the 75% journey-level mark. (a) 60% is not a pass mark. (c) 75% is the journey-level mark. (d) 80% is not a pass mark."
      }
    ]
  }
};
