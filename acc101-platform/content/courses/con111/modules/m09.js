// con111 - Module 9: Metallurgy Basics and Base Metals
module.exports = {
  "number": 9,
  "slug": "metallurgy-basics-and-base-metals",
  "title": "Metallurgy Basics and Base Metals",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what happens to steel when it is heated and cooled in welding.",
    "Describe the heat-affected zone (HAZ) and why it is often the weakest part of a joint.",
    "Explain carbon content and how it changes weldability.",
    "Describe distortion and residual stress, and how weld sequence controls them.",
    "Explain preheat and post-weld heat treatment in plain terms."
  ],
  "sections": [
    {
      "heading": "Steel, Heated and Cooled",
      "html": "<p>Steel is mostly iron with a small amount of carbon, and that carbon decides how the steel behaves. When a weld heats steel, the metal near the arc melts, the metal beside it gets hot but does not melt, and the metal farther away stays cool. As the weld cools, the molten pool freezes into weld metal, and the hot metal beside it changes its structure — it gets harder, and sometimes more brittle. That changed metal is the <strong>heat-affected zone</strong>, the HAZ, and it is often where a weld fails.</p>\n<p>Cooling speed decides what the HAZ becomes. Fast cooling — a small weld on a thick, cold plate — makes the HAZ hard and brittle, because the steel's structure freezes into a hard form called martensite. Slow cooling — a big weld, a preheated plate, or a thin plate — lets the structure form more gently, and the HAZ stays tougher. The welder controls cooling speed with preheat, with the size of the weld, and with the travel speed.</p>\n<p>That is why a weld that looks perfect on the surface can fail beside the weld, in the HAZ. The weld metal is fine; the metal next to it is hard and brittle and cracks under load. Inspection looks at the weld and at the HAZ, because the joint is only as strong as its weakest part.</p>\n"
    },
    {
      "heading": "Carbon and Weldability",
      "html": "<p>Carbon content is the single biggest factor in whether a steel welds easily. Low-carbon steel — under about 0.30% carbon, the mild steel of construction — welds easily with any process and rarely cracks. Medium-carbon steel — 0.30% to 0.60% — welds with care: preheat, the right electrode, and controlled cooling. High-carbon steel — over 0.60% — is hard to weld and cracks easily, and it is usually not welded in construction without special procedures.</p>\n<p>The carbon equivalent is a number that combines carbon with the other alloying elements — manganese, chromium, molybdenum, vanadium — into one measure of how hard a steel is to weld. The higher the carbon equivalent, the more preheat and care the steel needs. The WPS for a job names the base metal and its preheat, and the welder follows it — the steel's chemistry is not something to guess at.</p>\n<p>Other metals weld differently. Stainless steel needs the right filler and can lose its corrosion resistance if overheated. Aluminum needs a clean surface and a different process, and it conducts heat away fast, so it needs more heat input than steel. Cast iron is the hardest of all — it cracks easily and usually needs preheat, a special electrode, and slow cooling. A construction welder's first year is mostly mild steel, and that is where this course stays.</p>\n"
    },
    {
      "heading": "Distortion and Residual Stress",
      "html": "<p>Welding moves metal. As a weld pool cools, it shrinks, and the shrinking pulls the joint — the plates bow, twist, or curl. That movement is <strong>distortion</strong>, and it is the reason a welded frame can come out of the shop a quarter inch out of square. The welder controls distortion by the weld sequence: welding alternate sides, backstepping (welding in short segments from the end toward the start), and using clamps and fixtures to hold the joint while it cools.</p>\n<p><strong>Residual stress</strong> is the stress left in the joint after it cools — the metal is pulled tight in some places and pushed in others, even though nothing is loaded. Residual stress does not show, but it adds to the stress the joint carries in service, and it can help a crack start. Preheating, the right sequence, and sometimes post-weld heat treatment reduce it.</p>\n<p>The practical rule is to weld the joint that distorts least first, to balance the welds on both sides of a member, and to let the joint cool before removing the clamps. A welder who welds one side of a beam fully before starting the other side will watch the beam bow — and will spend the next hour straightening it.</p>\n"
    },
    {
      "heading": "Preheat and Heat Treatment",
      "html": "<p><strong>Preheat</strong> is heating the base metal before welding — with a torch, a heating blanket, or an oven — to a temperature the WPS specifies, often 200°F to 400°F for thicker or higher-carbon steel. Preheat slows the cooling rate, which keeps the HAZ from getting hard and brittle, and it drives moisture out of the joint, which keeps hydrogen out of the weld. The temperature is checked with a temperature stick or an infrared thermometer, and the joint is kept at preheat until the weld is done.</p>\n<p><strong>Post-weld heat treatment</strong> is heating the finished weld — usually to a higher temperature, then cooling it slowly — to relieve residual stress and soften a hard HAZ. It is used on pressure vessels, thick sections, and high-carbon steels, and it is done to a procedure, not by feel. Interpass temperature is the related control: in a multi-pass weld, each pass must be made while the joint is still within a temperature range — too cold and the HAZ hardens, too hot and the metal's properties change.</p>\n<p>None of this is guesswork. The WPS names the preheat, the interpass range, and any post-weld treatment, and the welder follows it and records it. A weld made without the required preheat may look perfect and fail the test — and the test will find it, because the HAZ will be hard and brittle.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Welding heats steel, and the heat-affected zone beside the weld can become hard and brittle — fast cooling makes it worse. Carbon content decides weldability: mild steel is easy, high-carbon steel cracks. Welding shrinks as it cools, causing distortion and residual stress, controlled by sequence, backstepping, and clamps. Preheat slows cooling and drives out moisture; post-weld heat treatment relieves stress.</p>\n<p><strong>Common mistake:</strong> Welding high-carbon steel like mild steel. High-carbon steel needs preheat, the right electrode, and controlled cooling — without them it cracks, often in the HAZ beside a good-looking weld.</p>\n<p><strong>Common mistake:</strong> Welding one side of a beam fully before the other. The beam bows from the shrinking weld — balance the welds on both sides and weld in sequence.</p>\n<p><strong>Ready-to-Work link:</strong> If you can explain the HAZ, say how carbon changes weldability, and describe preheat, you have this module. Module 10 covers structural connections and joint design.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Metallurgy",
      "def": "The study of metals — their composition, structure, and how heat changes them."
    },
    {
      "term": "Heat-affected zone (HAZ)",
      "def": "The metal beside a weld that was heated but not melted, and whose structure changed — often the weakest part of a joint."
    },
    {
      "term": "Martensite",
      "def": "A hard, brittle form of steel that forms when steel cools very fast."
    },
    {
      "term": "Carbon content",
      "def": "The percentage of carbon in steel; higher carbon makes steel harder to weld and more crack-prone."
    },
    {
      "term": "Carbon equivalent",
      "def": "A number combining carbon and alloying elements into one measure of how hard a steel is to weld."
    },
    {
      "term": "Mild steel",
      "def": "Low-carbon steel (under about 0.30% carbon) — the common construction steel, easy to weld."
    },
    {
      "term": "Weldability",
      "def": "How easily a metal can be welded without cracking or losing strength."
    },
    {
      "term": "Distortion",
      "def": "Movement of a joint as weld metal shrinks on cooling — bowing, twisting, or curling."
    },
    {
      "term": "Residual stress",
      "def": "Stress left in a joint after welding, from uneven heating and cooling, even with no load applied."
    },
    {
      "term": "Backstepping",
      "def": "Welding in short segments from the end of a joint toward the start, to control distortion."
    },
    {
      "term": "Preheat",
      "def": "Heating the base metal before welding to slow cooling and drive out moisture."
    },
    {
      "term": "Post-weld heat treatment",
      "def": "Heating a finished weld to relieve residual stress and soften a hard HAZ, then cooling slowly."
    },
    {
      "term": "Interpass temperature",
      "def": "The temperature range a joint must stay within between passes of a multi-pass weld."
    },
    {
      "term": "Alloying element",
      "def": "An element added to steel — manganese, chromium, molybdenum — that changes its properties."
    },
    {
      "term": "Stainless steel",
      "def": "Steel with chromium that resists corrosion; it needs the right filler and careful heat control when welded."
    }
  ],
  "video": {
    "title": "Arc Welding for Beginners",
    "embedUrl": "https://www.youtube.com/embed/DIf_l8l5BkY",
    "note": "An arc welding beginner lesson that covers the metals as well as the arc: what happens to steel when it is heated and cooled, and why the metal around the weld matters as much as the weld itself. Watch it as the introduction to this module's heat-affected zone.",
    "more": [
      {
        "title": "Welding Earth (Ground) Clamps: Why you will never get a good weld using a bad clamp",
        "url": "https://www.youtube.com/watch?v=909ZcwQoKwk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the heat-affected zone in two sentences, and say why it is often the weakest part of a joint.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The HAZ is the metal beside the weld that was heated but not melted, and its structure changed. Step 2: Fast cooling can make it hard and brittle, so a crack can start there even when the weld metal itself is sound.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Why does fast cooling make the HAZ hard and brittle?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fast cooling freezes the steel's structure into a hard form called martensite. Step 2: Martensite is hard but brittle, so it cracks under load. Step 3: Slow cooling — from preheat or a bigger weld — lets the structure form more gently and stay tougher.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Rank mild steel, medium-carbon steel, and high-carbon steel by weldability, and say what each one needs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Mild steel (under 0.30% carbon) — easiest, welds with any process and rarely cracks. Step 2: Medium-carbon (0.30–0.60%) — welds with care: preheat, right electrode, controlled cooling. Step 3: High-carbon (over 0.60%) — hardest, cracks easily, needs special procedures.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is distortion, and what are two ways to control it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Distortion is the joint moving — bowing, twisting, curling — as weld metal shrinks on cooling. Step 2: Control it by welding alternate sides and balancing welds, and by backstepping in short segments. Step 3: Clamps and fixtures also hold the joint while it cools.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is preheat, and what two things does it do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Preheat is heating the base metal before welding to a temperature the WPS specifies. Step 2: It slows the cooling rate, keeping the HAZ from getting hard and brittle. Step 3: It drives moisture out of the joint, keeping hydrogen out of the weld.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A welder welds one side of a beam fully, then starts the other side — and the beam is now bowed. What went wrong, and what should have happened?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Welding one side fully shrank that side and bowed the beam. Step 2: The welds should have been balanced — alternate sides, in sequence, so the shrinkage balanced out. Step 3: Clamps and a planned sequence would have held the beam straight.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The heat-affected zone is:",
      "choices": [
        "The weld metal itself",
        "The metal beside the weld that was heated but not melted, and whose structure changed",
        "The slag",
        "The electrode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The HAZ is the heated-but-not-melted metal beside the weld, often the weakest part. (a) Weld metal is the melted pool. (c) Slag is the coating. (d) The electrode is the rod or wire."
    },
    {
      "q": "Fast cooling of a weld makes the HAZ:",
      "choices": [
        "Softer and tougher",
        "Hard and brittle, because martensite forms",
        "Stronger",
        "Unaffected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fast cooling freezes steel into hard, brittle martensite. (a) Slow cooling gives the tougher structure. (c) Hard is not stronger here — it is brittle. (d) Cooling speed directly changes the HAZ."
    },
    {
      "q": "Mild steel is easy to weld because it has:",
      "choices": [
        "High carbon",
        "Low carbon — under about 0.30%",
        "No iron",
        "High chromium"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low carbon means low cracking risk and easy welding. (a) High carbon makes welding hard. (c) Steel is mostly iron. (d) Chromium makes stainless steel, a different metal."
    },
    {
      "q": "Distortion in welding is caused by:",
      "choices": [
        "The welder's gloves",
        "Weld metal shrinking as it cools, pulling the joint",
        "The gas flow",
        "The helmet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cooling weld metal shrinks and pulls the plates — bowing, twisting, curling. (a) Gloves do not distort metal. (c) Gas flow does not shrink metal. (d) The helmet is PPE."
    },
    {
      "q": "Backstepping means:",
      "choices": [
        "Walking backward",
        "Welding in short segments from the end of a joint toward the start, to control distortion",
        "Welding backward",
        "Removing a weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Backstepping breaks the weld into short segments that shrink in a controlled way. (a) It is a welding sequence, not walking. (c) The weld still runs forward within each segment. (d) It does not remove anything."
    },
    {
      "q": "Preheat does two things:",
      "choices": [
        "Makes the weld prettier and faster",
        "Slows cooling so the HAZ stays tough, and drives moisture out of the joint",
        "Melts the steel",
        "Replaces the WPS"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slow cooling prevents a hard brittle HAZ, and dry joints keep hydrogen out. (a) Appearance and speed are not the point. (c) Preheat does not melt the steel. (d) The WPS specifies the preheat."
    },
    {
      "q": "High-carbon steel is hard to weld because:",
      "choices": [
        "It is too soft",
        "It cracks easily and needs preheat and special procedures",
        "It is too cheap",
        "It has no carbon"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High carbon means high cracking risk without preheat and controlled cooling. (a) High-carbon steel is hard, not soft. (c) Price is not the issue. (d) It has the most carbon."
    },
    {
      "q": "Residual stress is:",
      "choices": [
        "Stress from the load on the joint",
        "Stress left in a joint after welding from uneven heating and cooling, with no load applied",
        "The welder's stress",
        "A type of weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Residual stress remains after cooling and adds to the service load. (a) That is service stress. (c) That is not a metallurgy term. (d) It is a condition, not a weld type."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Metallurgy Basics: Quick Reference</h3>\n<p><strong>HAZ:</strong> The metal beside the weld, heated but not melted. Fast cooling → hard, brittle martensite → cracks. Slow cooling (preheat) keeps it tough.</p>\n<p><strong>Carbon:</strong> Mild (&lt;0.30%) welds easily · Medium (0.30–0.60%) needs care · High (&gt;0.60%) cracks easily. Carbon equivalent combines carbon and alloys.</p>\n<p><strong>Distortion:</strong> Weld metal shrinks as it cools → bowing/twisting. Control by sequence, backstepping, balancing both sides, clamps.</p>\n<p><strong>Heat:</strong> Preheat slows cooling and drives out moisture · Post-weld heat treatment relieves residual stress · Interpass temperature is the range between passes.</p>\n<p><strong>Self-check:</strong> Explain the HAZ and how carbon changes weldability.</p>\n"
};
