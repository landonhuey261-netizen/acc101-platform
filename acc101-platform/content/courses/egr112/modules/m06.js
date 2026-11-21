// egr112 - Module 6: Bearings: Types & L10 Life
module.exports = {
  "number": 6,
  "slug": "bearings",
  "title": "Bearings: Types & L10 Life",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main bearing types and what each is good at.",
    "Explain the difference between radial and thrust loads.",
    "Work out a bearing's equivalent load from radial and axial loads.",
    "Work out a bearing's L10 life in millions of revolutions and in hours.",
    "Explain bearing lubrication, sealing, and mounting basics."
  ],
  "sections": [
    {
      "heading": "Bearing Types: Rolling and Sliding",
      "html": "<p>A bearing lets a shaft rotate with little friction while carrying load. Rolling-element bearings use balls or rollers between two rings: a ball bearing has point contact and runs fast with low friction, suiting light to medium loads; a roller bearing has line contact and carries heavier loads; a tapered roller bearing carries combined radial and axial loads, as in a car wheel hub. A plain (journal) bearing has no rolling elements — the shaft slides on a film of oil — and it is quiet, cheap, and good for very heavy, slow loads, such as a large engine crankshaft.</p>\n<p>Thrust bearings are built to carry axial load — force along the shaft — while radial bearings carry load across the shaft. Most real shafts have both, so a typical arrangement is a radial bearing at each end plus a thrust bearing (or a bearing that handles both) to locate the shaft axially. Choosing a bearing means matching its type to the loads, the speed, and the space available.</p>\n"
    },
    {
      "heading": "Radial, Axial, and Equivalent Load",
      "html": "<p>A bearing rarely sees a pure radial or pure axial load — it sees both at once. The equivalent load P combines them into one number the life formula can use: P = X × Fr + Y × Fa, where Fr is the radial load, Fa is the axial load, and X and Y are factors from the bearing's catalogue that depend on the bearing type and the ratio of axial to radial load. Example: X = 0.56, Y = 1.4, Fr = 2 kN, Fa = 1 kN. Then P = 0.56 × 2 + 1.4 × 1 = 1.12 + 1.4 = 2.52 kN.</p>\n<p>The X and Y factors come from the manufacturer's catalogue for the specific bearing, and they change with the load ratio — a bearing that mostly carries radial load uses different factors from one that mostly carries axial load. Always read the catalogue for the bearing you are using; the numbers in this module are examples, not universal constants.</p>\n"
    },
    {
      "heading": "L10 Life: How Long Will It Last?",
      "html": "<p>A bearing's life is rated as L10: the number of millions of revolutions that 90% of a group of identical bearings will survive under a given load. The formula is L10 = (C ÷ P)³ for a ball bearing, where C is the bearing's basic dynamic load rating from its catalogue and P is the equivalent load. Example: C = 12.7 kN and P = 3 kN. Then L10 = (12.7 ÷ 3)³ = 4.233³ = 75.9 million revolutions. At 1500 rpm, that is 75,900,000 ÷ (1500 × 60) = 843 hours.</p>\n<p>The cube in the formula is the thing to respect: halving the load multiplies the life by eight (2³), and doubling the load cuts the life to one-eighth. That is why a small overload kills bearings fast, and why a slightly bigger bearing — with a higher C — lasts dramatically longer. Another example: C = 19.5 kN and P = 4.5 kN gives L10 = (19.5 ÷ 4.5)³ = 4.333³ = 81.4 million revolutions, which at 1200 rpm is 81,400,000 ÷ (1200 × 60) = 1,130 hours. L10 is a statistical rating: 10% of bearings will fail before it, so it is a planning number, not a guarantee for one bearing.</p>\n"
    },
    {
      "heading": "Lubrication, Sealing, and Mounting",
      "html": "<p>A bearing's life depends as much on its care as on its rating. Lubrication — grease or oil — separates the rolling elements from the races so they do not touch metal to metal; too little lubricant causes wear, and too much causes churning and heat. Seals keep dirt out and lubricant in: a sealed bearing is maintenance-free but cannot be re-greased, while an open bearing needs regular greasing and clean surroundings. Contamination is the most common cause of early bearing failure — a speck of grit in a bearing is like a boulder on a road.</p>\n<p>Mounting matters too: a bearing pressed onto a shaft must be pressed on its inner ring, never through the rolling elements, or the bearing is damaged before it runs. Shafts and housings must be round and to the right tolerance, and the bearing must be aligned — a misaligned bearing carries its load on one edge and fails early. A bearing that is installed well and kept clean will usually outlive its L10 rating; one that is hammered on and left dirty will not.</p>\n"
    },
    {
      "heading": "Choosing a Bearing and Common Mistakes",
      "html": "<p>Choose a bearing by: 1) working out the radial and axial loads, 2) combining them into an equivalent load, 3) picking a bearing whose C gives the L10 life the machine needs, 4) checking the speed limit, and 5) choosing the sealing and lubrication to suit the environment. If the life is too short, pick a bigger bearing or reduce the load — do not hope the bearing will beat its rating.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Ball bearings run fast with light loads; roller bearings carry heavier loads; tapered rollers handle combined loads.</li><li>Equivalent load P = X·Fr + Y·Fa; for X = 0.56, Y = 1.4, Fr = 2 kN, Fa = 1 kN, P = 2.52 kN.</li><li>L10 = (C ÷ P)³ for ball bearings: C = 12.7 kN and P = 3 kN gives 75.9 million revolutions, 843 hours at 1500 rpm.</li><li>Halving the load multiplies life by eight; doubling it cuts life to one-eighth.</li><li>Keep bearings clean, lubricated, and correctly mounted — contamination is the top killer.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the radial load alone and forgetting the axial load. The equivalent load combines both, and the axial load can dominate the life.</p>\n<p><strong>Common mistake:</strong> Pressing a bearing on by its outer ring or through the balls. Press on the ring that is being fitted, or the bearing is damaged before it runs.</p>\n<p><strong>Ready check:</strong> If you can work out an equivalent load, an L10 life in revolutions and in hours, and explain why load matters so much, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Ball bearing",
      "def": "A bearing with balls between two rings; fast, low friction, for light to medium loads."
    },
    {
      "term": "Roller bearing",
      "def": "A bearing with cylindrical rollers; line contact, for heavier radial loads."
    },
    {
      "term": "Tapered roller bearing",
      "def": "A bearing with tapered rollers that carries combined radial and axial loads."
    },
    {
      "term": "Plain bearing",
      "def": "A bearing with no rolling elements, where the shaft slides on a film of oil; quiet and good for heavy, slow loads."
    },
    {
      "term": "Radial load",
      "def": "A load acting across the shaft, at right angles to its axis."
    },
    {
      "term": "Axial (thrust) load",
      "def": "A load acting along the shaft's axis."
    },
    {
      "term": "Equivalent load (P)",
      "def": "A single load combining radial and axial loads: P = X·Fr + Y·Fa."
    },
    {
      "term": "Basic dynamic load rating (C)",
      "def": "The load a bearing can carry for one million revolutions, from the manufacturer's catalogue."
    },
    {
      "term": "L10 life",
      "def": "The number of millions of revolutions that 90% of identical bearings will survive under a given load."
    },
    {
      "term": "Lubrication",
      "def": "Grease or oil that separates a bearing's rolling elements from its races."
    },
    {
      "term": "Seal",
      "def": "A device that keeps dirt out of a bearing and lubricant in."
    },
    {
      "term": "Misalignment",
      "def": "A shaft and housing that are not in line, causing a bearing to carry its load on one edge."
    },
    {
      "term": "Contamination",
      "def": "Dirt or grit in a bearing, the most common cause of early bearing failure."
    }
  ],
  "video": {
    "title": "How Ball Bearings Work | Working Principle Explained",
    "embedUrl": "https://www.youtube.com/embed/lIEHscqWJAk",
    "note": "Inside a ball bearing: races, balls, cage, and seals, and how they carry load. Watch how the balls roll between the races, then explain why a ball bearing suits fast, light loads.",
    "more": [
      {
        "title": "Introduction to Bearings - Types of bearings",
        "url": "https://www.youtube.com/watch?v=Mybf-XCA4H4"
      },
      {
        "title": "How do ball bearings work: Animation | Design Squad",
        "url": "https://www.youtube.com/watch?v=RihQOUNsN9c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bearing has X = 0.56, Y = 1.4, a radial load Fr = 2 kN, and an axial load Fa = 1 kN. Work out the equivalent load P.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = X × Fr + Y × Fa = 0.56 × 2 + 1.4 × 1. Step 2: 0.56 × 2 = 1.12; 1.4 × 1 = 1.4. Step 3: P = 1.12 + 1.4 = 2.52 kN. A good answer shows both products and the 2.52 kN result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A ball bearing has C = 12.7 kN and an equivalent load P = 3 kN. Work out its L10 life in millions of revolutions.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: L10 = (C ÷ P)³ = (12.7 ÷ 3)³. Step 2: 12.7 ÷ 3 = 4.233; 4.233³ = 75.9. Step 3: The L10 life is 75.9 million revolutions. A good answer shows the ratio, the cube, and the 75.9 result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The bearing in Problem 2 runs at 1500 rpm. Work out its L10 life in hours.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Revolutions per hour = 1500 × 60 = 90,000. Step 2: Life in hours = 75,900,000 ÷ 90,000 = 843 hours. A good answer shows the revolutions per hour and the 843-hour result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A ball bearing has C = 19.5 kN and P = 4.5 kN, running at 1200 rpm. Work out its L10 life in millions of revolutions and in hours.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: L10 = (19.5 ÷ 4.5)³ = 4.333³ = 81.4 million revolutions. Step 2: Revolutions per hour = 1200 × 60 = 72,000. Step 3: Life = 81,400,000 ÷ 72,000 = 1,130 hours. A good answer gives both the 81.4 million revolutions and the 1,130 hours.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bearing's load is doubled. What happens to its L10 life, and why? Give the factor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: L10 depends on (C ÷ P)³, so doubling P halves the ratio. Step 2: (1 ÷ 2)³ = 1 ÷ 8, so the life falls to one-eighth of its original value. Step 3: That is why a small overload kills bearings fast. A good answer gives the one-eighth factor and the cube explanation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A car wheel hub needs a bearing that carries a heavy radial load from the car's weight and an axial load from cornering. Which bearing type do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a tapered roller bearing, because it is designed for combined radial and axial loads. Step 2: A ball bearing would be too weak for the heavy radial load, and a plain cylindrical roller bearing cannot carry axial load. Step 3: Tapered rollers are the standard choice for wheel hubs for exactly this reason. A good answer names the tapered roller bearing and the combined-load reason.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A bearing has X = 0.56, Y = 1.4, Fr = 2 kN, Fa = 1 kN. What is the equivalent load P?",
      "choices": [
        "2.00 kN",
        "2.52 kN",
        "3.00 kN",
        "1.40 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = 0.56 × 2 + 1.4 × 1 = 1.12 + 1.4 = 2.52 kN. (a) is just the radial load. (c) is the sum of the loads, ignoring X and Y. (d) is just the axial part."
    },
    {
      "q": "A ball bearing has C = 12.7 kN and P = 3 kN. What is its L10 life in millions of revolutions?",
      "choices": [
        "4.2",
        "75.9",
        "12.7",
        "3.0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). L10 = (12.7 ÷ 3)³ = 4.233³ = 75.9 million revolutions. (a) is the ratio, not cubed. (c) is C itself. (d) is P itself."
    },
    {
      "q": "The bearing above runs at 1500 rpm. What is its L10 life in hours, approximately?",
      "choices": [
        "843 hours",
        "1,500 hours",
        "75.9 hours",
        "90 hours"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 75,900,000 revolutions ÷ (1500 × 60) = 843 hours. (b) is the speed, not the life. (c) is the life in millions of revolutions. (d) has no basis."
    },
    {
      "q": "A ball bearing has C = 19.5 kN and P = 4.5 kN. What is its L10 life in millions of revolutions?",
      "choices": [
        "4.33",
        "81.4",
        "19.5",
        "4.5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). L10 = (19.5 ÷ 4.5)³ = 4.333³ = 81.4 million revolutions. (a) is the ratio, not cubed. (c) is C itself. (d) is P itself."
    },
    {
      "q": "If a bearing's load is doubled, what happens to its L10 life?",
      "choices": [
        "It halves",
        "It falls to one-eighth",
        "It doubles",
        "It stays the same"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Life depends on (C ÷ P)³, so doubling P gives (1 ÷ 2)³ = 1 ÷ 8 of the life. (a) would be true if life depended on P, not P³. (c) is backwards. (d) is wrong: load strongly affects life."
    },
    {
      "q": "Which bearing type is best for combined radial and axial loads, such as a car wheel hub?",
      "choices": [
        "Ball bearing",
        "Tapered roller bearing",
        "Plain cylindrical roller bearing",
        "Plain (journal) bearing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tapered roller bearings are designed for combined radial and axial loads. (a) suits lighter, faster loads. (c) carries radial load only. (d) suits heavy, slow loads but not this combination."
    },
    {
      "q": "What is the most common cause of early bearing failure?",
      "choices": [
        "Overloading",
        "Contamination — dirt or grit getting into the bearing",
        "Running too fast",
        "Using the wrong grease colour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Contamination is the top killer: a speck of grit damages the races and rolling elements. (a) matters, but contamination is more common. (c) matters, but speed limits are usually respected. (d) is wrong: grease colour does not matter."
    },
    {
      "q": "When pressing a bearing onto a shaft, what must you never do?",
      "choices": [
        "Press on the inner ring",
        "Press through the rolling elements or the wrong ring, which damages the bearing before it runs",
        "Use a press",
        "Heat the bearing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Force through the balls or rollers dents the races and ruins the bearing. (a) is the correct method for a shaft fit. (c) is wrong: a press is the right tool. (d) is wrong: controlled heating is a legitimate mounting method."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Bearings: Types & L10 Life: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main bearing types and what each is good at.</p>\n<p><strong>Key terms:</strong> Ball bearing · Roller bearing · Tapered roller bearing · Plain bearing · Radial load · Axial (thrust) load · Equivalent load (P) · Basic dynamic load rating (C).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main bearing types and what each is good at.</li>\n<li>Explain the difference between radial and thrust loads.</li>\n<li>Work out a bearing's equivalent load from radial and axial loads.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
