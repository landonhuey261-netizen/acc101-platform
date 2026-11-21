// egr102 - Module 7: Friction & Inclined Planes
module.exports = {
  "number": 7,
  "slug": "friction-and-inclined-planes",
  "title": "Friction & Inclined Planes",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what friction is and what causes it.",
    "Use F = μN to work out friction force.",
    "Tell static friction apart from kinetic friction.",
    "Split weight into components on a slope.",
    "Work out whether a load will slide or stay put."
  ],
  "sections": [
    {
      "heading": "What Friction Is",
      "html": "<p>Friction is the force that resists sliding between two surfaces. It comes from the tiny roughness of the surfaces catching on each other, and it always acts against the direction of motion (or the direction something is trying to move). Without friction you could not walk, drive, or hold a screwdriver.</p>\n<p>Friction is useful and troublesome at once. It lets car tyres grip the road and brakes stop a wheel, but it also wastes energy as heat in engines and bearings. Engineers add friction where they need grip and remove it with lubrication where they need smooth movement.</p>\n"
    },
    {
      "heading": "The Friction Formula: F = μN",
      "html": "<p>Friction force is F = μ × N, where μ (mu) is the coefficient of friction — a number that depends on the two surfaces — and N is the normal force pressing the surfaces together. Rubber on dry road has μ around 0.7; steel on ice has μ around 0.1; oiled steel can be as low as 0.05.</p>\n<p>Worked example: a crate presses down with a normal force of 200 N on a floor with μ = 0.4. The friction force is F = 0.4 × 200 = 80 N. You must push harder than 80 N to slide it. Note: friction depends on the surfaces and the pressing force, not on the area of contact.</p>\n"
    },
    {
      "heading": "Static vs Kinetic Friction",
      "html": "<p>Static friction holds something still: it matches your push, up to a maximum, and the object does not move. Kinetic (sliding) friction acts once the object is moving, and it is usually a little smaller than the maximum static friction. That is why it is harder to start pushing a heavy crate than to keep it moving.</p>\n<p>This matters for design. A bolted joint relies on static friction to stay tight; a brake relies on kinetic friction to slow a wheel. If you size a motor to keep a load moving but forget the higher starting friction, the motor stalls on the first push.</p>\n"
    },
    {
      "heading": "Inclined Planes: Weight Splits in Two",
      "html": "<p>On a slope, weight splits into two components: one pressing into the slope (the normal component) and one pulling the object down the slope (the parallel component). For a weight W on a slope of angle θ: the parallel component is W × sin θ, and the normal component is W × cos θ.</p>\n<p>Worked example: a 100 N block on a 30° slope. The pull down the slope is 100 × sin 30° = 100 × 0.5 = 50 N. The press into the slope is 100 × cos 30° = 100 × 0.866 = 86.6 N. Friction can then be worked out from the normal component: F = μ × 86.6 N.</p>\n<p><strong>Will It Slide? The Slope Test</strong></p>\n<p>A block slides when the pull down the slope beats the maximum static friction. On a slope, that happens when tan θ is bigger than μ. So a block with μ = 0.4 starts to slide when the slope angle passes tan⁻¹(0.4) = 21.8°.</p>\n<p>Engineers use this to design safe ramps, chutes, and roofs. A ramp steeper than the sliding angle needs grip — a rough surface, cleats, or a handrail. And a load on a truck bed must be tied down, because braking tilts the effective slope and friction alone may not hold it.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Friction resists sliding and acts against the motion.</li><li>F = μN: friction = coefficient × normal force.</li><li>Static friction (holding still) is usually bigger than kinetic friction (sliding).</li><li>On a slope: down-slope pull = W sin θ; press into slope = W cos θ.</li><li>A block slides when tan θ is bigger than μ.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the full weight instead of the normal component for friction on a slope. Friction uses N = W cos θ, not W.</p>\n<p><strong>Common mistake:</strong> Thinking friction depends on contact area. It depends on the surfaces and the pressing force, not the area.</p>\n<p><strong>Ready check:</strong> If you can work out friction from μ = 0.4 and N = 200 N, and split a 100 N weight on a 30° slope, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Friction",
      "def": "The force that resists sliding between two surfaces, acting against the direction of motion."
    },
    {
      "term": "Coefficient of friction (μ)",
      "def": "A number that says how grippy two surfaces are together; rubber on road is about 0.7, steel on ice about 0.1."
    },
    {
      "term": "Normal force (N)",
      "def": "The force pressing two surfaces together, at right angles to the surfaces."
    },
    {
      "term": "Static friction",
      "def": "Friction that holds an object still; it matches the push, up to a maximum."
    },
    {
      "term": "Kinetic friction",
      "def": "Friction that acts while an object is sliding; usually a little less than maximum static friction."
    },
    {
      "term": "Inclined plane",
      "def": "A sloping surface, such as a ramp; also one of the six simple machines."
    },
    {
      "term": "Slope angle (θ)",
      "def": "The angle a slope makes with the horizontal, in degrees."
    },
    {
      "term": "Parallel component",
      "def": "The part of a weight that pulls an object down a slope: W × sin θ."
    },
    {
      "term": "Normal component",
      "def": "The part of a weight that presses an object into a slope: W × cos θ."
    },
    {
      "term": "Lubrication",
      "def": "Oil or grease put between moving surfaces to reduce friction."
    },
    {
      "term": "Grip",
      "def": "The friction that lets a tyre, shoe, or hand hold on to a surface."
    },
    {
      "term": "Wear",
      "def": "Damage caused by surfaces rubbing together over time."
    },
    {
      "term": "Braking",
      "def": "Using friction to slow or stop a moving object."
    },
    {
      "term": "Sliding",
      "def": "Moving across a surface while staying in contact with it."
    }
  ],
  "video": {
    "title": "How Clutch Plates Work in Automatic Transmissions",
    "embedUrl": "https://www.youtube.com/embed/W0IrAQJ93pA",
    "note": "Friction at work in a real machine: clutch plates use friction to connect and disconnect power. Watch how the plates press together — more pressure means more friction, exactly as F = μN says.",
    "more": [
      {
        "title": "Importance of Torque Sequence in Gasket Installation",
        "url": "https://www.youtube.com/watch?v=v3DVRBumKgo"
      },
      {
        "title": "How to Read a Tape Measure - REALLY EASY",
        "url": "https://www.youtube.com/watch?v=DqKIVmu6grM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Friction” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Friction — The force that resists sliding between two surfaces, acting against the direction of motion. It matters because it connects directly to this module’s first goal: Explain what friction is and what causes it. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Coefficient of friction (μ)” and “Normal force (N)”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Coefficient of friction (μ) — A number that says how grippy two surfaces are together; rubber on road is about 0.7, steel on ice about 0.1. Normal force (N) — The force pressing two surfaces together, at right angles to the surfaces. They differ in what they describe: the first is about coefficient of friction (μ), the second about normal force (n). A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what friction is and what causes it.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what friction is and what causes it. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Static friction — Friction that holds an object still; it matches the push, up to a maximum. Kinetic friction — Friction that acts while an object is sliding; usually a little less than maximum static friction. Inclined plane — A sloping surface, such as a ramp; also one of the six simple machines. Slope angle (θ) — The angle a slope makes with the horizontal, in degrees. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A crate presses on the floor with a normal force of 200 N. The coefficient of friction is 0.4. What is the friction force, and how hard must you push to start the crate sliding?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: F = μN = 0.4 × 200 = 80 N. Step 2: You must push with more than 80 N to beat maximum static friction and start the crate moving. Step 3: Once it slides, kinetic friction is a little less, so keeping it moving takes slightly less than 80 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 100 N block sits on a 30° slope. Work out the pull down the slope and the press into the slope. (sin 30° = 0.5, cos 30° = 0.866.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pull down the slope = 100 × sin 30° = 100 × 0.5 = 50 N. Step 2: Press into the slope = 100 × cos 30° = 100 × 0.866 = 86.6 N. Step 3: Check with Pythagoras: 50² + 86.6² = 2,500 + 7,500 = 10,000; √10,000 = 100 N. Correct.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Friction” mean?",
      "choices": [
        "The force that resists sliding between two surfaces, acting against the direction of motion.",
        "The force pressing two surfaces together, at right angles to the surfaces.",
        "Friction that holds an object still; it matches the push, up to a maximum.",
        "Friction that acts while an object is sliding; usually a little less than maximum static friction."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Friction means: The force that resists sliding between two surfaces, acting against the direction of motion.. (b) is the definition of Normal force (N), not of Friction. (c) is the definition of Static friction, not of Friction. (d) is the definition of Kinetic friction, not of Friction."
    },
    {
      "q": "What does the term “Normal force (N)” mean?",
      "choices": [
        "Friction that acts while an object is sliding; usually a little less than maximum static friction.",
        "The force pressing two surfaces together, at right angles to the surfaces.",
        "A sloping surface, such as a ramp; also one of the six simple machines.",
        "The angle a slope makes with the horizontal, in degrees."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Normal force (N) means: The force pressing two surfaces together, at right angles to the surfaces.. (a) is the definition of Kinetic friction, not of Normal force (N). (c) is the definition of Inclined plane, not of Normal force (N). (d) is the definition of Slope angle (θ), not of Normal force (N)."
    },
    {
      "q": "What does the term “Kinetic friction” mean?",
      "choices": [
        "The angle a slope makes with the horizontal, in degrees.",
        "The part of a weight that pulls an object down a slope: W × sin θ.",
        "Friction that acts while an object is sliding; usually a little less than maximum static friction.",
        "The part of a weight that presses an object into a slope: W × cos θ."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Kinetic friction means: Friction that acts while an object is sliding; usually a little less than maximum static friction.. (a) is the definition of Slope angle (θ), not of Kinetic friction. (b) is the definition of Parallel component, not of Kinetic friction. (d) is the definition of Normal component, not of Kinetic friction."
    },
    {
      "q": "What does the term “Slope angle (θ)” mean?",
      "choices": [
        "The part of a weight that presses an object into a slope: W × cos θ.",
        "Oil or grease put between moving surfaces to reduce friction.",
        "The friction that lets a tyre, shoe, or hand hold on to a surface.",
        "The angle a slope makes with the horizontal, in degrees."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Slope angle (θ) means: The angle a slope makes with the horizontal, in degrees.. (a) is the definition of Normal component, not of Slope angle (θ). (b) is the definition of Lubrication, not of Slope angle (θ). (c) is the definition of Grip, not of Slope angle (θ)."
    },
    {
      "q": "A crate presses down with a normal force of 200 N on a floor with μ = 0.4. What is the friction force?",
      "choices": [
        "50 N",
        "80 N",
        "200 N",
        "500 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = 0.4 × 200 = 80 N. (a) divides 200 by 4. (c) is the normal force. (d) divides 200 by 0.4."
    },
    {
      "q": "Why is it harder to START pushing a heavy crate than to KEEP it moving?",
      "choices": [
        "Because kinetic friction is bigger than static friction.",
        "Because maximum static friction is bigger than kinetic friction.",
        "Because the crate gets lighter as it moves.",
        "Because the floor gets smoother."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Static friction’s maximum is higher than sliding friction. (a) is backwards. (c) is wrong: mass does not change. (d) is wrong: the floor does not change."
    },
    {
      "q": "A 100 N block sits on a 30° slope. What is the pull down the slope?",
      "choices": [
        "86.6 N",
        "50 N",
        "100 N",
        "25 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 × sin 30° = 50 N. (a) is the press into the slope (100 × cos 30°). (c) is the whole weight. (d) is 100 × sin 30° ÷ 2."
    },
    {
      "q": "A block with μ = 0.4 sits on a slope. Roughly what slope angle makes it start to slide?",
      "choices": [
        "10°",
        "21.8°",
        "40°",
        "66°"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It slides when tan θ exceeds 0.4, and tan⁻¹(0.4) = 21.8°. (a) is too gentle. (c) and (d) are well past the sliding angle."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Friction & Inclined Planes: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what friction is and what causes it.</p>\n<p><strong>Key terms:</strong> Friction · Coefficient of friction (μ) · Normal force (N) · Static friction · Kinetic friction · Inclined plane · Slope angle (θ) · Parallel component.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what friction is and what causes it.</li>\n<li>Use F = μN to work out friction force.</li>\n<li>Tell static friction apart from kinetic friction.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
