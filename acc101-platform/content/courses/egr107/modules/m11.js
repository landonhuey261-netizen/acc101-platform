// egr107 - Module 11: Bearings, Shafts, and Lubrication
module.exports = {
  "number": 11,
  "slug": "bearings-shafts-lubrication",
  "title": "Bearings, Shafts, and Lubrication",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main bearing types and say what loads each one carries.",
    "Explain the difference between a plain bearing and a rolling bearing.",
    "Calculate a simple bearing life estimate and explain what shortens it.",
    "Say how lubrication works and what happens when it fails.",
    "List the checks for a shaft, coupling, and bearing installation."
  ],
  "sections": [
    {
      "heading": "Why Bearings Matter",
      "html": "<p><p>Every spinning shaft needs a bearing: a part that supports the shaft, lets it turn with little friction, and carries the loads into the frame. Without bearings, a shaft would rub directly on its housing, overheat, and seize. Bearings are small, cheap parts — and when one fails, it can stop a whole production line, so they deserve respect.</p></p>\n<p><p>Loads come in two kinds: radial (pushing sideways on the shaft, like a belt pulling on a pulley) and axial or thrust (pushing along the shaft, like a helical gear's side push). A bearing must be chosen for the loads it will actually see, not just for the shaft size. A bearing that is right for a fan can be badly wrong for a gearbox.</p></p>\n"
    },
    {
      "heading": "Rolling Bearings: Ball, Roller, and Thrust",
      "html": "<p><p>Rolling bearings use balls or rollers between two rings. Ball bearings handle moderate radial and some axial load, run fast, and are the default choice for motors and fans. Roller bearings carry heavier radial loads; tapered roller bearings carry combined radial and axial loads and are common in wheel hubs. Thrust bearings are built for axial load alone, like the load on a vertical pump shaft.</p></p>\n<p><p>Plain (journal) bearings are different: the shaft rides on a thin film of oil inside a sleeve, with no rolling parts. They are quiet, cheap, and can carry huge loads — engine crankshafts run on plain bearings. But they need oil pressure from the moment the shaft starts turning; a dry start scores the bearing in seconds.</p></p>\n"
    },
    {
      "heading": "Bearing Life and What Kills Bearings",
      "html": "<p><p>Bearing life is rated as L10: the life that 90% of a batch of bearings will reach under a given load. Life falls fast as load rises — doubling the load cuts life to roughly one-eighth, because life varies with the cube of the load ratio. A bearing rated for 10,000 hours at 1,000 N lasts about 1,250 hours at 2,000 N (10,000 ÷ 2³).</p></p>\n<p><p>The usual killers are contamination (dirt in the grease), poor lubrication, misalignment, and overload. A bearing that runs hot, noisy, or rough is telling you something: check the grease, check the alignment, and check for play in the shaft. Replacing a bearing early is cheap; replacing a seized shaft and housing is not.</p></p>\n"
    },
    {
      "heading": "Shafts, Couplings, and Lubrication",
      "html": "<p><p>A shaft carries torque from one part to another and must be stiff enough not to bend under belt pull or gear loads, and strong enough not to twist. Couplings join two shafts: rigid couplings for precise alignment, flexible couplings for a little misalignment and shock absorption. Misalignment is the enemy — it wears bearings, couplings, and seals, and it wastes power.</p></p>\n<p><p>Lubrication keeps metal off metal. Grease is oil held in a thickener, good for sealed bearings that are greased for life. Oil is used where heat must be carried away or where the bearing is fed from a sump. The rules are simple: use the grade the maker specifies, keep it clean, and do not mix greases. Wrong or dirty lubricant is the most common cause of early bearing failure.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Bearings support shafts and carry radial and axial loads.</li><li>Ball bearings are the default; roller bearings carry more; plain bearings carry huge loads on an oil film.</li><li>Bearing life falls with the cube of the load.</li><li>Contamination, bad lubrication, misalignment, and overload kill bearings.</li><li>Use the maker's lubricant grade and keep it clean.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Choosing a bearing by shaft size alone. The load type and size decide the bearing, not just the bore.</p><p><strong>Common mistake:</strong> Over-greasing a bearing. Too much grease churns, overheats, and can blow out the seals.</p><p><strong>Ready check:</strong> If you can pick a bearing type for a belt-driven fan shaft and name its two biggest enemies, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Bearing",
      "def": "A part that supports a spinning shaft and lets it turn with little friction."
    },
    {
      "term": "Radial load",
      "def": "A load pushing sideways on a shaft."
    },
    {
      "term": "Axial load (thrust)",
      "def": "A load pushing along a shaft."
    },
    {
      "term": "Ball bearing",
      "def": "A rolling bearing using balls; good for moderate loads at high speed."
    },
    {
      "term": "Roller bearing",
      "def": "A rolling bearing using rollers; carries heavier radial loads than a ball bearing."
    },
    {
      "term": "Tapered roller bearing",
      "def": "A roller bearing that carries combined radial and axial loads."
    },
    {
      "term": "Thrust bearing",
      "def": "A bearing built to carry axial load."
    },
    {
      "term": "Plain bearing (journal bearing)",
      "def": "A sleeve bearing where the shaft rides on a film of oil."
    },
    {
      "term": "L10 life",
      "def": "The life that 90% of a batch of bearings will reach under a given load."
    },
    {
      "term": "Lubrication",
      "def": "Oil or grease that keeps moving metal surfaces apart."
    },
    {
      "term": "Grease",
      "def": "Oil held in a thickener, used in sealed bearings."
    },
    {
      "term": "Coupling",
      "def": "A part that joins two shafts together."
    },
    {
      "term": "Misalignment",
      "def": "Shafts that are not in line, which wears bearings and couplings."
    },
    {
      "term": "Seal",
      "def": "A part that keeps lubricant in and dirt out of a bearing."
    },
    {
      "term": "Contamination",
      "def": "Dirt or water in a bearing or lubricant that causes wear."
    }
  ],
  "video": {
    "title": "Internal Combustion Engine Parts, Components, and Terminology Explained!",
    "embedUrl": "https://www.youtube.com/embed/fw8Jfoif1BM",
    "note": "Engine parts and terminology, including bearings, camshafts, and followers — a good tour of the parts that support and drive a spinning shaft.",
    "more": [
      {
        "title": "200 MECHANICAL MECHANIMS ENGINEER MUST MASTER",
        "url": "https://www.youtube.com/watch?v=FUvB1WxLfi0"
      },
      {
        "title": "Cam & Follower Mechanism in SOLIDWORKS | Full Assembly Tutorial",
        "url": "https://www.youtube.com/watch?v=JjtFHlWbjrA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fan shaft carries mostly radial load at high speed. Which bearing type is the usual choice, and why?</p>",
      "solution": "<p><strong>Answer:</strong> A ball bearing: it handles moderate radial load, runs fast, and is cheap and standard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bearing is rated 8,000 hours at 500 N. Estimate its life at 1,000 N.</p>",
      "solution": "<p><strong>Answer:</strong> Doubling the load cuts life by 2³ = 8, so life is about 8,000 ÷ 8 = 1,000 hours.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the difference between a plain bearing and a ball bearing.</p>",
      "solution": "<p><strong>Answer:</strong> A plain bearing is a sleeve with the shaft riding on an oil film; a ball bearing uses rolling balls between rings. Plain bearings carry huge loads quietly; ball bearings run with less friction at speed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bearing runs hot and noisy. Name three things to check.</p>",
      "solution": "<p><strong>Answer:</strong> Grease condition and amount, alignment of the shaft, and contamination or play in the bearing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must a plain bearing never be started dry?</p>",
      "solution": "<p><strong>Answer:</strong> Without the oil film the shaft rubs directly on the sleeve and scores it in seconds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A helical gear pushes sideways on its shaft. Which load is that, and which bearing handles it?</p>",
      "solution": "<p><strong>Answer:</strong> It is an axial (thrust) load; use a tapered roller bearing or a thrust bearing to carry it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A belt pulling sideways on a pulley puts what kind of load on its shaft bearing?",
      "choices": [
        "Axial",
        "Radial",
        "Torsional",
        "Thermal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Radial means sideways to the shaft. (a) axial is along the shaft. (c) torsion is twisting. (d) thermal is heat, not a load direction."
    },
    {
      "q": "Which bearing carries the heaviest radial loads?",
      "choices": [
        "Ball bearing",
        "Roller bearing",
        "Thrust bearing",
        "Needle bearing at low speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rollers spread the load over a line, not a point. (a) balls carry moderate loads. (c) thrust bearings carry axial load. (d) needle bearings are compact, not the heaviest-duty choice."
    },
    {
      "q": "Doubling the load on a rolling bearing cuts its life by about:",
      "choices": [
        "Half",
        "A quarter",
        "One-eighth",
        "Nothing"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Life varies with the cube of the load ratio: 1 ÷ 2³ = 1/8. (a) and (b) understate the effect. (d) is wrong — load is the biggest factor in life."
    },
    {
      "q": "A plain bearing supports the shaft on:",
      "choices": [
        "A thin film of oil",
        "A set of balls",
        "A set of rollers",
        "A spring"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The shaft rides on oil, with no rolling parts. (b) and (c) describe rolling bearings. (d) springs do not support shafts this way."
    },
    {
      "q": "The most common cause of early bearing failure is:",
      "choices": [
        "Wrong or dirty lubricant",
        "Too little load",
        "Too slow a speed",
        "Too big a shaft"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Contaminated or wrong lubricant causes most early failures. (b) light load is rarely a problem. (c) slow speed is not a killer. (d) shaft size alone does not fail a bearing."
    },
    {
      "q": "What does L10 life mean?",
      "choices": [
        "The life 10% of bearings reach",
        "The life 90% of bearings will reach or exceed",
        "The life at 10% load",
        "10,000 hours exactly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). L10 is the life 90% survive. (a) has it backwards. (c) is not the definition. (d) is a round number, not the definition."
    },
    {
      "q": "A coupling that allows a little misalignment is called:",
      "choices": [
        "Rigid",
        "Flexible",
        "Welded",
        "Fixed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flexible couplings absorb small misalignment and shock. (a) rigid couplings need precise alignment. (c) and (d) do not allow movement."
    },
    {
      "q": "Over-greasing a bearing can:",
      "choices": [
        "Make it last longer",
        "Cause churning, heat, and blown seals",
        "Reduce friction to zero",
        "Prevent contamination completely"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Excess grease churns and overheats. (a) is the opposite of the truth. (c) friction never reaches zero. (d) grease does not seal perfectly."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Bearings, Shafts, and Lubrication: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main bearing types and say what loads each one carries.</p>\n<p><strong>Key terms:</strong> Bearing · Radial load · Axial load (thrust) · Ball bearing · Roller bearing · Tapered roller bearing · Thrust bearing · Plain bearing (journal bearing).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main bearing types and say what loads each one carries.</li>\n<li>Explain the difference between a plain bearing and a rolling bearing.</li>\n<li>Calculate a simple bearing life estimate and explain what shortens it.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
