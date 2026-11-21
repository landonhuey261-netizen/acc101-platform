// egr112 - Module 7: Fasteners & Joints: Bolts, Preload & Shear
module.exports = {
  "number": 7,
  "slug": "fasteners-joints",
  "title": "Fasteners & Joints: Bolts, Preload & Shear",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a bolted joint works and why preload matters.",
    "Work out a bolt's proof load, preload, and tightening torque.",
    "Work out the shear capacity of a bolted joint.",
    "Explain the difference between a joint loaded in tension and in shear.",
    "Explain why bolts loosen and how to prevent it."
  ],
  "sections": [
    {
      "heading": "How a Bolted Joint Works",
      "html": "<p>A bolted joint does not hold parts together by the bolt's strength alone — it holds them by clamping force. Tightening a bolt stretches it slightly, like a very stiff spring, and that stretch squeezes the parts together with a large force called preload. As long as the preload is bigger than the load trying to separate the parts, the joint stays tight and the parts do not move relative to each other. If the external load exceeds the preload, the joint opens, the parts slip, and the bolt starts carrying the load directly — which is when joints fail.</p>\n<p>That is why preload is the most important number in a bolted joint, not the bolt's breaking strength. A joint with the right preload is stiff, does not slip, and resists fatigue, because the bolt sees only a small change in load as the external load varies. A joint with too little preload slips and frets, and the bolt fails by fatigue. A joint with too much preload yields the bolt during tightening.</p>\n"
    },
    {
      "heading": "Proof Load, Preload, and Tightening Torque",
      "html": "<p>A bolt's proof load is the maximum load it can carry without permanently deforming: proof load = proof strength × tensile stress area. Example: an M12 bolt with a tensile stress area At = 84.3 mm² and a proof strength of 600 MPa. Its proof load is 600 × 84.3 = 50,580 N, about 50.6 kN. Preload is usually set to 75% of the proof load: 0.75 × 50.6 = 37.9 kN. That is the clamping force squeezing the joint together.</p>\n<p>Tightening torque is how preload is achieved in practice: torque T = K × F × d, where F is the preload, d is the bolt diameter, and K is the nut factor (about 0.2 for a lightly oiled steel bolt). For our M12 bolt: T = 0.2 × 37,900 N × 0.012 m = 91 N·m. Another example: an M10 bolt with At = 58 mm² and proof strength 600 MPa has a proof load of 600 × 58 = 34,800 N = 34.8 kN, a preload of 0.75 × 34.8 = 26.1 kN, and a tightening torque of 0.2 × 26,100 × 0.010 = 52.2 N·m. Torque is an indirect way to set preload — most of the torque overcomes friction, not stretch — so a torque wrench is approximate, and critical joints use angle or stretch control instead.</p>\n"
    },
    {
      "heading": "Joints in Shear",
      "html": "<p>A joint loaded in shear tries to slide the parts past each other, and the bolts resist by their cross-section. The shear capacity of one bolt is its shear area times the allowable shear stress. Example: four M10 bolts in single shear, each with a shear area of 78.5 mm² and an allowable shear stress of 150 MPa. Each bolt carries 78.5 × 150 = 11,775 N, and four bolts carry 4 × 11,775 = 47,100 N, about 47.1 kN. If the joint is in double shear — the bolt is cut by two shear planes — each bolt carries twice as much.</p>\n<p>In a well-designed joint, the preload's friction carries the shear, and the bolts only carry shear if the joint slips. That is why a slipping joint is a failing joint: once it slips, the bolts take the full shear load, the holes wear, and the joint loosens. Design the preload so the friction is bigger than the shear load, and the bolts never see the shear at all.</p>\n"
    },
    {
      "heading": "Why Bolts Loosen and How to Stop It",
      "html": "<p>Bolts loosen for three reasons: the joint settles (paint, dirt, or rough surfaces compress under the preload), the load vibrates the nut loose, or the bolt is stretched past its yield by over-tightening. Settling is prevented by clean, flat mating surfaces and by re-tightening after the first load cycle. Vibration loosening is prevented by lock nuts, thread-locking compound, spring washers, or — best of all — enough preload, because a well-preloaded joint does not move, and a joint that does not move does not loosen.</p>\n<p>The most reliable anti-loosening method is a correctly preloaded joint with clean surfaces. Locking devices help, but none of them fixes a joint that was under-tightened in the first place. Always tighten to the specified torque, in the specified sequence for multi-bolt joints (a star pattern, working from the centre out), and re-check after the first use.</p>\n"
    },
    {
      "heading": "Choosing a Bolted Joint and Common Mistakes",
      "html": "<p>Choose a bolt by: 1) working out the loads (tension and shear), 2) picking a bolt size and grade whose proof load gives the preload needed, 3) working out the tightening torque, and 4) checking the joint's shear capacity. Use the right grade: a property class 8.8 bolt is the standard structural choice, and a 10.9 is stronger but more brittle. Never mix grades in one joint, and never reuse a bolt that has been yielded — a stretched bolt has lost its preload.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A bolted joint holds by preload — the clamping force — not by the bolt's breaking strength.</li><li>Proof load = proof strength × At; preload is usually 75% of proof load; torque T = K·F·d.</li><li>An M12 bolt (At = 84.3 mm², 600 MPa) has a proof load of 50.6 kN, a preload of 37.9 kN, and a torque of 91 N·m.</li><li>Shear capacity is area × allowable shear stress per bolt, times the number of bolts.</li><li>A well-preloaded joint with clean surfaces resists loosening better than any locking device.</li></ul></p>\n<p><strong>Common mistake:</strong> Tightening by feel instead of by torque. Under-tightening loses preload and the joint slips; over-tightening yields the bolt and loses preload too — use a torque wrench.</p>\n<p><strong>Common mistake:</strong> Forgetting that most tightening torque overcomes friction, not stretch. A dry or rusty thread needs far more torque for the same preload — clean and lightly oil threads before tightening.</p>\n<p><strong>Ready check:</strong> If you can work out proof load, preload, tightening torque, and shear capacity, and explain why preload matters, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Bolted joint",
      "def": "Parts held together by bolts, relying on clamping force (preload) to keep them from moving."
    },
    {
      "term": "Preload",
      "def": "The clamping force in a bolted joint, created by stretching the bolt as it is tightened, usually 75% of proof load."
    },
    {
      "term": "Proof load",
      "def": "The maximum load a bolt can carry without permanently deforming: proof strength × tensile stress area."
    },
    {
      "term": "Proof strength",
      "def": "The stress a bolt can carry without permanent deformation, from its property class."
    },
    {
      "term": "Tensile stress area (At)",
      "def": "The effective cross-sectional area of a threaded bolt, smaller than its nominal diameter area."
    },
    {
      "term": "Nut factor (K)",
      "def": "A factor (about 0.2) relating tightening torque to preload: T = K × F × d."
    },
    {
      "term": "Tightening torque",
      "def": "The torque applied to a bolt to achieve its preload."
    },
    {
      "term": "Single shear",
      "def": "A bolt loaded so it is cut by one shear plane."
    },
    {
      "term": "Double shear",
      "def": "A bolt loaded so it is cut by two shear planes, carrying twice the shear of single shear."
    },
    {
      "term": "Property class",
      "def": "A bolt's strength grade, such as 8.8 or 10.9, printed on its head."
    },
    {
      "term": "Settling",
      "def": "The loss of preload as paint, dirt, or rough surfaces compress under the clamping force."
    },
    {
      "term": "Thread-locking compound",
      "def": "A liquid applied to threads that hardens and prevents a nut from vibrating loose."
    },
    {
      "term": "Torque wrench",
      "def": "A wrench that measures the torque applied, used to tighten bolts to a specified value."
    }
  ],
  "video": {
    "title": "The Incredible Strength of Bolted Joints",
    "embedUrl": "https://www.youtube.com/embed/XLzTB4KLCxU",
    "note": "How bolted joints really work: preload, friction, and why a tightened bolt is stronger than a loose one. Watch the preload demonstration, then work out this module's M12 example yourself.",
    "more": [
      {
        "title": "CruisemasterClass - Ep. 14 Bolted Joints",
        "url": "https://www.youtube.com/watch?v=xfclEMy36YY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An M12 bolt has At = 84.3 mm² and a proof strength of 600 MPa. Work out its proof load in kN.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Proof load = proof strength × At = 600 × 84.3 = 50,580 N. Step 2: That is 50.6 kN. A good answer shows the multiplication and the kN conversion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The M12 bolt in Problem 1 is preloaded to 75% of its proof load. Work out the preload, and the tightening torque with K = 0.2.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Preload = 0.75 × 50.6 = 37.9 kN (37,900 N). Step 2: Torque T = K × F × d = 0.2 × 37,900 × 0.012 = 91 N·m. A good answer shows both steps and the 91 N·m result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An M10 bolt has At = 58 mm² and a proof strength of 600 MPa. Work out its proof load, its preload at 75%, and its tightening torque with K = 0.2.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Proof load = 600 × 58 = 34,800 N = 34.8 kN. Step 2: Preload = 0.75 × 34.8 = 26.1 kN (26,100 N). Step 3: Torque = 0.2 × 26,100 × 0.010 = 52.2 N·m. A good answer gives all three numbers with working.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Four M10 bolts in single shear each have a shear area of 78.5 mm² and an allowable shear stress of 150 MPa. Work out the joint's total shear capacity.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One bolt carries 78.5 × 150 = 11,775 N. Step 2: Four bolts carry 4 × 11,775 = 47,100 N. Step 3: That is 47.1 kN. A good answer shows the per-bolt capacity and the 47.1 kN total.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A joint must resist a shear load of 30 kN. The bolts are M10 in single shear with an allowable shear stress of 150 MPa (area 78.5 mm² each). How many bolts are needed, and what would you actually use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One bolt carries 78.5 × 150 = 11,775 N = 11.8 kN. Step 2: 30 ÷ 11.8 = 2.55, so at least 3 bolts are needed. Step 3: Use 4 bolts for margin and symmetry — joints should be symmetric so the load is shared evenly. A good answer gives 3 as the minimum and 4 as the sensible choice.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A bolted joint keeps loosening in service. The bolts were tightened by feel, the mating surfaces were painted, and no locking device was used. Explain the likely causes and the fixes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Tightening by feel gives unknown preload — probably too little, so the joint slips and vibrates loose. Step 2: Paint under the joint compresses (settling) and loses preload. Step 3: Fixes — clean the mating surfaces to bare metal, tighten to the specified torque with a torque wrench in a star pattern, re-tighten after the first load cycle, and add a locking device if vibration is severe. A good answer names all three causes and the fixes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An M12 bolt has At = 84.3 mm² and a proof strength of 600 MPa. What is its proof load?",
      "choices": [
        "50.6 kN",
        "37.9 kN",
        "91 kN",
        "5.06 kN"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Proof load = 600 × 84.3 = 50,580 N = 50.6 kN. (b) is the preload at 75%. (c) is the tightening torque in N·m, not a load. (d) is ten times too small."
    },
    {
      "q": "The M12 bolt above is preloaded to 75% of proof load. What is the preload?",
      "choices": [
        "50.6 kN",
        "37.9 kN",
        "91 N·m",
        "12.7 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Preload = 0.75 × 50.6 = 37.9 kN. (a) is the proof load. (c) is the tightening torque. (d) is a quarter of the proof load."
    },
    {
      "q": "What tightening torque (K = 0.2) gives the M12 preload of 37.9 kN?",
      "choices": [
        "91 N·m",
        "52.2 N·m",
        "37.9 N·m",
        "455 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). T = 0.2 × 37,900 × 0.012 = 91 N·m. (b) is the M10 torque. (c) is the preload in kN, not a torque. (d) is five times too big."
    },
    {
      "q": "An M10 bolt has At = 58 mm² and proof strength 600 MPa. What is its proof load?",
      "choices": [
        "26.1 kN",
        "34.8 kN",
        "52.2 kN",
        "58 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Proof load = 600 × 58 = 34,800 N = 34.8 kN. (a) is the preload at 75%. (c) is the tightening torque in N·m. (d) is the area, not a load."
    },
    {
      "q": "Four M10 bolts in single shear, each 78.5 mm² with an allowable shear stress of 150 MPa. What is the joint's shear capacity?",
      "choices": [
        "11.8 kN",
        "47.1 kN",
        "23.6 kN",
        "78.5 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One bolt carries 78.5 × 150 = 11,775 N, and four carry 47,100 N = 47.1 kN. (a) is one bolt's capacity. (c) is two bolts' capacity. (d) is the area, not a load."
    },
    {
      "q": "Why does preload matter more than a bolt's breaking strength in a joint?",
      "choices": [
        "Because preload is bigger than breaking strength",
        "Because preload clamps the parts so they do not slip, and the bolt then sees only small load changes, resisting fatigue",
        "Because breaking strength is irrelevant",
        "Because preload makes the bolt lighter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Preload keeps the joint tight and unmoving, so the bolt is protected from fatigue. (a) is wrong: preload is smaller than breaking strength. (c) is wrong: breaking strength still matters as a limit. (d) is wrong: preload does not change weight."
    },
    {
      "q": "What happens if the external load on a bolted joint exceeds the preload?",
      "choices": [
        "Nothing — the joint is stronger than the load",
        "The joint opens, the parts slip, and the bolt starts carrying the load directly, which can lead to fatigue failure",
        "The bolt gets stronger",
        "The preload increases"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Once the joint opens, the preload is lost and the bolt takes the full varying load. (a) is wrong: exceeding preload is exactly when joints fail. (c) is wrong: bolts do not get stronger under load. (d) is wrong: preload does not increase with external load."
    },
    {
      "q": "Why should mating surfaces be clean bare metal before a joint is bolted?",
      "choices": [
        "To make the joint look good",
        "Because paint and dirt compress under preload (settling), losing clamping force and letting the joint loosen",
        "To save paint",
        "Because bare metal is stronger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Paint and dirt settle under load, losing preload. (a) is wrong: appearance is not the reason. (c) is wrong: saving paint is irrelevant. (d) is wrong: the metal's strength does not change."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Fasteners & Joints: Bolts, Preload & Shear: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how a bolted joint works and why preload matters.</p>\n<p><strong>Key terms:</strong> Bolted joint · Preload · Proof load · Proof strength · Tensile stress area (At) · Nut factor (K) · Tightening torque · Single shear.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how a bolted joint works and why preload matters.</li>\n<li>Work out a bolt's proof load, preload, and tightening torque.</li>\n<li>Work out the shear capacity of a bolted joint.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
