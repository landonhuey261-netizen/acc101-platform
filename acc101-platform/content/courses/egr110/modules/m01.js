// egr110 - Module 1: Semiconductors & the PN Junction
module.exports = {
  "number": 1,
  "slug": "semiconductors-pn-junction",
  "title": "Semiconductors & the PN Junction",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain in plain words what a semiconductor is and why silicon is used.",
    "Tell conductors, insulators, and semiconductors apart.",
    "Explain doping and the difference between n-type and p-type material.",
    "Describe the depletion region and the built-in voltage of a PN junction.",
    "Explain forward bias and reverse bias in plain words."
  ],
  "sections": [
    {
      "heading": "Conductors, Insulators, and the In-Between",
      "html": "<p>A conductor, like copper wire, lets electric current flow easily because its electrons are free to move. An insulator, like rubber or plastic, holds its electrons tightly, so almost no current flows. A semiconductor sits in between: pure silicon barely conducts at all, but its conductivity can be controlled precisely — and that control is what makes all of electronics possible.</p>\n<p>Silicon is the semiconductor used in almost every chip and diode. It is cheap, plentiful (it comes from sand), and stable over a wide temperature range. A silicon atom has four electrons in its outer shell, and in a crystal each atom shares those electrons with four neighbours, locking them in place. With no free electrons, pure silicon is nearly an insulator — until we deliberately change it.</p>\n"
    },
    {
      "heading": "Doping: Adding a Pinch of Something Else",
      "html": "<p>Doping means adding a tiny amount of another element to the silicon crystal — about one atom in a million. Add phosphorus, which has five outer electrons, and the extra electron has nowhere to bond, so it is free to move. That is n-type silicon: n for negative, because the free carriers are electrons.</p>\n<p>Add boron instead, which has only three outer electrons, and one bond is left empty. That empty spot is called a hole, and it behaves like a positive charge that can move as neighbouring electrons hop into it. That is p-type silicon: p for positive, because the moving carriers are holes. Doping does not make the crystal charged overall — it stays neutral — it just decides which kind of carrier is available to carry current.</p>\n"
    },
    {
      "heading": "The PN Junction and the Depletion Region",
      "html": "<p>Join a piece of p-type silicon to a piece of n-type silicon and you get a PN junction. Right at the join, some free electrons from the n-side wander across and fill holes on the p-side. Each electron that crosses leaves behind a positively charged atom on the n-side, and each filled hole leaves a negatively charged atom on the p-side.</p>\n<p>That thin layer of charged atoms with no free carriers left is the depletion region — depleted of carriers. The charges build an electric field that stops further crossing, and the voltage across it is the built-in voltage, about 0.7 V for silicon. Nothing is connected to a battery yet: this voltage appears on its own, simply because the two materials were joined. It acts like a small hill that carriers must climb before any real current can flow.</p>\n"
    },
    {
      "heading": "Forward Bias: Opening the Gate",
      "html": "<p>Connect the positive terminal of a battery to the p-side and the negative terminal to the n-side and you have forward bias. The battery pushes holes toward the junction from the p-side and electrons toward it from the n-side, shrinking the depletion region and flattening the hill. Once the applied voltage passes the built-in voltage of about 0.7 V, carriers pour across and a large current flows.</p>\n<p>Below about 0.7 V, almost nothing flows — the hill is still too high. That sharp turn-on is why a diode behaves like a switch: off below 0.7 V, on above it. In circuit calculations we usually treat a conducting silicon diode as a fixed 0.7 V drop, which keeps the maths simple and close enough for real design work.</p>\n"
    },
    {
      "heading": "Reverse Bias and the One-Way Street",
      "html": "<p>Swap the battery around — positive to the n-side, negative to the p-side — and you have reverse bias. Now the battery pulls carriers away from the junction, the depletion region widens, the hill gets taller, and almost no current flows. Only a tiny leakage current, millionths of an amp, sneaks through. That is the whole point of a diode: current flows easily one way and is blocked the other way.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Silicon is a semiconductor whose conductivity can be controlled by doping.</li><li>Phosphorus doping makes n-type (extra electrons); boron doping makes p-type (holes).</li><li>A PN junction forms a depletion region with a built-in voltage of about 0.7 V for silicon.</li><li>Forward bias shrinks the barrier and lets current flow; reverse bias widens it and blocks current.</li></ul></p>\n<p><strong>Common mistake:</strong> Saying holes are real particles. A hole is an empty bond that moves as electrons hop into it — it behaves like a positive charge, but no positive particle is actually moving.</p>\n<p><strong>Common mistake:</strong> Thinking a diode conducts as soon as any voltage is applied. Below about 0.7 V forward, a silicon diode is still effectively off.</p>\n<p><strong>Ready check:</strong> If you can explain doping, the depletion region, and why current flows one way but not the other, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Semiconductor",
      "def": "A material, such as silicon, whose ability to conduct electricity sits between a conductor and an insulator and can be controlled precisely."
    },
    {
      "term": "Silicon",
      "def": "The semiconductor used in almost every diode and chip; its atoms have four outer electrons and it comes from sand."
    },
    {
      "term": "Conductor",
      "def": "A material, such as copper, whose electrons move freely, so electric current flows easily."
    },
    {
      "term": "Insulator",
      "def": "A material, such as rubber or plastic, that holds its electrons tightly, so almost no current flows."
    },
    {
      "term": "Doping",
      "def": "Adding a tiny amount of another element to a semiconductor crystal to control how many free carriers it has."
    },
    {
      "term": "N-type silicon",
      "def": "Silicon doped with an element such as phosphorus, so it has extra free electrons as its main carriers."
    },
    {
      "term": "P-type silicon",
      "def": "Silicon doped with an element such as boron, so it has holes as its main carriers."
    },
    {
      "term": "Hole",
      "def": "An empty bond in a semiconductor crystal that behaves like a moving positive charge as electrons hop into it."
    },
    {
      "term": "Majority carrier",
      "def": "The type of charge carrier that does most of the conducting in a doped semiconductor: electrons in n-type, holes in p-type."
    },
    {
      "term": "PN junction",
      "def": "The boundary where p-type and n-type silicon meet, forming the heart of a diode."
    },
    {
      "term": "Depletion region",
      "def": "The thin layer around a PN junction that has no free carriers, left behind when electrons and holes recombine across the join."
    },
    {
      "term": "Built-in voltage",
      "def": "The voltage across a PN junction's depletion region, about 0.7 V for silicon, that carriers must overcome before current flows."
    },
    {
      "term": "Forward bias",
      "def": "Connecting a PN junction with positive to the p-side and negative to the n-side, shrinking the barrier so current flows."
    },
    {
      "term": "Reverse bias",
      "def": "Connecting a PN junction with positive to the n-side and negative to the p-side, widening the barrier so current is blocked."
    },
    {
      "term": "Donor",
      "def": "A doping atom, such as phosphorus, that gives up an extra free electron to the crystal."
    },
    {
      "term": "Acceptor",
      "def": "A doping atom, such as boron, that accepts an electron, leaving a hole behind."
    }
  ],
  "video": {
    "title": "Semiconductors Explained: Band Gap, Doping, p-n Junction",
    "embedUrl": "https://www.youtube.com/embed/Vy-J9dxmOPg",
    "note": "A clear illustrated walk through bands, doping, holes, and the PN junction. Watch the sections on doping and the junction, then sketch a PN junction from memory and label the depletion region.",
    "more": [
      {
        "title": "Mod-01 Lec-01 p-n diode",
        "url": "https://www.youtube.com/watch?v=g7vYop_46tU"
      },
      {
        "title": "What is Diode? Full Course | All Types of Diodes, Working, Applications",
        "url": "https://www.youtube.com/watch?v=YIPzgTHjskM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what a semiconductor is and why silicon, rather than copper, is used to make diodes. Give one example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A semiconductor is a material whose conductivity sits between a conductor and an insulator and can be controlled precisely. Step 2: Copper always conducts, so it cannot be switched or controlled — a diode made of copper would conduct both ways. Step 3: Silicon can be doped to control its carriers, and a PN junction made from it conducts one way only. A good answer names the control that doping gives and contrasts it with copper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A silicon crystal is doped with phosphorus. Is the result n-type or p-type, and why? What is the majority carrier?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Phosphorus has five outer electrons, one more than silicon's four. Step 2: The extra electron is free to move, so the material is n-type (n for negative). Step 3: The majority carriers are electrons. A good answer links the five outer electrons to the free electron and the n-type label.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 9 V battery, a silicon diode, and a 330 Ω resistor are connected in series, diode forward biased. Work out the current through the circuit, step by step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The conducting silicon diode drops about 0.7 V. Step 2: Voltage left for the resistor: 9 V − 0.7 V = 8.3 V. Step 3: Ohm's law: I = V ÷ R = 8.3 V ÷ 330 Ω = 0.0252 A, about 25 mA. A good answer shows the 0.7 V subtraction first, then the division, with the unit mA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A PN junction has 12 V applied in reverse bias. Explain in plain words why almost no current flows, and what the depletion region is doing.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reverse bias pulls holes and electrons away from the junction. Step 2: The depletion region widens and the barrier gets taller, so carriers cannot cross it. Step 3: Only a tiny leakage current flows. A good answer connects the wider depletion region to the blocked current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A classmate says, “Holes are positively charged particles that flow through the wire like electrons.” Correct them in three short sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Holes are not particles at all — a hole is an empty bond in the crystal. Step 2: It looks like it moves because neighbouring electrons hop into it, one after another. Step 3: It behaves like a positive charge in calculations, but nothing positively charged is actually travelling. A good answer corrects the particle idea without losing the useful picture of a moving positive charge.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student measures 0.2 V across a silicon diode in a circuit and concludes the diode is conducting normally. Is that right? Explain what the reading really suggests.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — a conducting silicon diode should show about 0.7 V across it. Step 2: 0.2 V is well below the turn-on voltage, so the diode is still effectively off and almost no current is flowing. Step 3: The likely cause is too little applied voltage, a wrong connection, or an open circuit elsewhere. A good answer uses the 0.7 V rule to read the measurement.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which of these materials is a semiconductor?",
      "choices": [
        "Copper wire",
        "Rubber insulation",
        "Silicon",
        "Gold contacts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Silicon is a semiconductor: its conductivity sits between a conductor and an insulator and can be controlled. (a) Copper is a conductor, not a semiconductor. (b) Rubber is an insulator. (d) Gold is a conductor used for contacts."
    },
    {
      "q": "Silicon is doped with phosphorus, which has five outer electrons. What is the result?",
      "choices": [
        "P-type silicon, with holes as majority carriers",
        "N-type silicon, with electrons as majority carriers",
        "An insulator, because the extra electrons block current",
        "Pure silicon again, because phosphorus cancels out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Phosphorus donates an extra free electron, making n-type silicon with electrons as majority carriers. (a) is wrong: boron doping makes p-type with holes. (c) is wrong: doping increases conductivity, it does not make an insulator. (d) is wrong: doping changes the crystal, it does not cancel out."
    },
    {
      "q": "What is the built-in voltage of a silicon PN junction, approximately?",
      "choices": [
        "0.07 V",
        "0.7 V",
        "7 V",
        "70 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 0.7 V for silicon. (a) 0.07 V is ten times too small. (c) 7 V is ten times too big. (d) 70 V is far beyond any junction voltage."
    },
    {
      "q": "A PN junction is forward biased when the battery is connected with…",
      "choices": [
        "Positive to the n-side and negative to the p-side",
        "Positive to the p-side and negative to the n-side",
        "Both terminals to the p-side",
        "Both terminals to the n-side"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forward bias is positive to p, negative to n, which shrinks the depletion region. (a) is reverse bias, which blocks current. (c) and (d) connect both terminals to one side, which is not a bias at all."
    },
    {
      "q": "A 9 V battery, a forward-biased silicon diode (0.7 V drop), and a 330 Ω resistor are in series. What is the current, approximately?",
      "choices": [
        "27 mA",
        "25 mA",
        "2.5 mA",
        "250 mA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resistor voltage is 9 − 0.7 = 8.3 V, and 8.3 ÷ 330 = 0.025 A, about 25 mA. (a) 27 mA comes from forgetting the 0.7 V diode drop (9 ÷ 330). (c) 2.5 mA is ten times too small. (d) 250 mA is ten times too big."
    },
    {
      "q": "In reverse bias, the depletion region…",
      "choices": [
        "Disappears completely",
        "Widens, and almost no current flows",
        "Shrinks, and a large current flows",
        "Moves to the other side of the crystal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reverse bias pulls carriers away, widening the depletion region and blocking current. (a) is wrong: it widens, it does not disappear. (c) describes forward bias. (d) is wrong: the region stays at the junction."
    },
    {
      "q": "What is a hole in a semiconductor?",
      "choices": [
        "A real positively charged particle",
        "A physical hole drilled in the silicon",
        "An empty bond that behaves like a moving positive charge",
        "A gap in the wire where current stops"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A hole is an empty bond; it appears to move as electrons hop into it. (a) is wrong: no positive particle is moving. (b) is wrong: it is not a physical drilled hole. (d) is wrong: a hole carries current in p-type material, it does not stop it."
    },
    {
      "q": "A diode is connected with its p-side to the negative terminal and its n-side to the positive terminal of a 3 V battery. What happens?",
      "choices": [
        "A large current flows, because 3 V is plenty",
        "Almost no current flows, because the diode is reverse biased",
        "The diode conducts backwards at full current",
        "The battery is shorted out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Positive to n and negative to p is reverse bias, so the diode blocks current. (a) is wrong: voltage size does not matter when the diode is reverse biased. (c) is wrong: a diode does not conduct backwards at low voltage. (d) is wrong: a blocked diode is nearly an open circuit, not a short."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Semiconductors & the PN Junction: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain in plain words what a semiconductor is and why silicon is used.</p>\n<p><strong>Key terms:</strong> Semiconductor · Silicon · Conductor · Insulator · Doping · N-type silicon · P-type silicon · Hole.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain in plain words what a semiconductor is and why silicon is used.</li>\n<li>Tell conductors, insulators, and semiconductors apart.</li>\n<li>Explain doping and the difference between n-type and p-type material.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
