// egr107 - Module 5: Momentum, Impulse, and Collisions
module.exports = {
  "number": 5,
  "slug": "momentum-impulse-collisions",
  "title": "Momentum, Impulse, and Collisions",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate momentum from mass and velocity and state its units.",
    "Use impulse = force × time to find the change in momentum.",
    "Apply conservation of momentum to collisions and recoil problems.",
    "Tell elastic from inelastic collisions and say what happens to kinetic energy.",
    "Explain why crumple zones and soft landings reduce peak force."
  ],
  "sections": [
    {
      "heading": "Momentum: Mass in Motion",
      "html": "<p><p>Momentum is mass times velocity: p = mv, measured in kg·m/s. A 1,000 kg car at 20 m/s has momentum 20,000 kg·m/s; a 10 kg part at the same speed has only 200 kg·m/s. Momentum has direction, like velocity. Stopping a large momentum takes a large force, a long time, or both — that is why heavy, fast machines need serious brakes.</p></p>\n<p><p>Momentum matters because it is conserved. In a closed system with no outside forces, the total momentum before an event equals the total after it. That single fact lets you predict the result of collisions, recoils, and impacts without knowing the messy forces inside the event itself.</p></p>\n"
    },
    {
      "heading": "Impulse: Force Over Time",
      "html": "<p><p>Impulse is force multiplied by the time it acts: J = F × t, and it equals the change in momentum, Δp. The same change in momentum can come from a large force for a short time or a small force for a long time. A hammer blow and a slow push can deliver the same impulse — the difference is the peak force.</p></p>\n<p><p>Example: a 2 kg part moving at 5 m/s (momentum 10 kg·m/s) is stopped in 0.1 s. The average force is 10 ÷ 0.1 = 100 N. Stop it in 0.01 s instead and the force is 1,000 N. This is why crumple zones, padding, and soft couplings matter: stretching out the stopping time cuts the peak force, even though the total impulse is the same.</p></p>\n"
    },
    {
      "heading": "Collisions: Elastic and Inelastic",
      "html": "<p><p>In an elastic collision, both momentum and kinetic energy are conserved — the classic example is steel balls clicking in a Newton's cradle. In an inelastic collision, momentum is still conserved but some kinetic energy becomes heat, sound, or deformation. In a perfectly inelastic collision the bodies stick together and move as one afterwards.</p></p>\n<p><p>Example: a 2 kg trolley at 3 m/s hits a stationary 3 kg trolley and they stick. Total momentum before is 2 × 3 = 6 kg·m/s. After, the combined mass is 5 kg, so the speed is 6 ÷ 5 = 1.2 m/s. Kinetic energy before was ½ × 2 × 9 = 9 J; after it is ½ × 5 × 1.44 = 3.6 J. The missing 5.4 J became heat and deformation in the coupling.</p></p>\n"
    },
    {
      "heading": "Recoil and Practical Impacts",
      "html": "<p><p>Recoil is conservation of momentum in action. When a nail gun drives a nail forward, the gun kicks back; when a robot arm throws a part, the arm feels a reaction. The lighter body moves faster: momentum is equal and opposite, so velocity is in inverse proportion to mass. A 0.1 kg nail at 50 m/s has momentum 5 kg·m/s; a 5 kg gun recoils at 5 ÷ 5 = 1 m/s.</p></p>\n<p><p>In machine design, impacts are everywhere: a punch press hitting sheet metal, a hammer mill, a part dropping onto a conveyor. The designer asks two questions: how much momentum must be absorbed, and over what time? Longer stopping time and a yielding support both cut the peak force. Never design a rigid stop where a spring or cushion could do the job.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Momentum p = mv, in kg·m/s, and it is conserved in a closed system.</li><li>Impulse = force × time = change in momentum.</li><li>Elastic collisions keep kinetic energy; inelastic ones lose some to heat and deformation.</li><li>Sticking collisions: add the masses, share the momentum.</li><li>Longer stopping time means lower peak force.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Thinking kinetic energy is conserved in every collision. It is conserved only in elastic collisions; momentum is conserved in all of them.</p><p><strong>Common mistake:</strong> Forgetting direction — momentum is a vector, so opposite directions need opposite signs.</p><p><strong>Ready check:</strong> If you can find the speed of two trolleys after they stick together, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Momentum",
      "def": "Mass times velocity: p = mv, in kg·m/s."
    },
    {
      "term": "Impulse",
      "def": "Force times the time it acts: J = Ft, equal to the change in momentum."
    },
    {
      "term": "Conservation of momentum",
      "def": "In a closed system, total momentum before an event equals total momentum after it."
    },
    {
      "term": "Elastic collision",
      "def": "A collision where both momentum and kinetic energy are conserved."
    },
    {
      "term": "Inelastic collision",
      "def": "A collision where momentum is conserved but some kinetic energy is lost."
    },
    {
      "term": "Perfectly inelastic collision",
      "def": "A collision where the bodies stick together afterwards."
    },
    {
      "term": "Recoil",
      "def": "The backward motion of a body when it pushes another body forward."
    },
    {
      "term": "Change in momentum",
      "def": "Final momentum minus initial momentum, equal to the impulse."
    },
    {
      "term": "Closed system",
      "def": "A system with no outside forces acting on it."
    },
    {
      "term": "Peak force",
      "def": "The largest force reached during an impact; longer stopping times lower it."
    },
    {
      "term": "Crumple zone",
      "def": "A part designed to deform slowly in a crash, stretching out the stopping time."
    },
    {
      "term": "Kinetic energy",
      "def": "Energy of motion: KE = ½mv²."
    },
    {
      "term": "Vector",
      "def": "A quantity with both size and direction, such as velocity or momentum."
    },
    {
      "term": "Coefficient of restitution",
      "def": "A number from 0 to 1 saying how bouncy a collision is; 1 is perfectly elastic."
    }
  ],
  "video": {
    "title": "How Does A NEWTONS CRADLE Work",
    "embedUrl": "https://www.youtube.com/embed/IrUw6akflf4",
    "note": "Newton's cradle shows conservation of momentum and energy in action — watch how the moving balls transfer momentum through the row.",
    "more": [
      {
        "title": "Energy, Momentum, or F = ma? How to Choose the Right Equation",
        "url": "https://www.youtube.com/watch?v=XQY2iBJDTcU"
      },
      {
        "title": "General Physics Explained | Complete Masterclass",
        "url": "https://www.youtube.com/watch?v=58CRM_xHdc0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4 kg part moves at 6 m/s. What is its momentum?</p>",
      "solution": "<p><strong>Answer:</strong> p = 4 × 6 = 24 kg·m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A force of 50 N acts for 0.4 s on a trolley. What impulse is delivered?</p>",
      "solution": "<p><strong>Answer:</strong> J = 50 × 0.4 = 20 N·s, so the momentum changes by 20 kg·m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 3 kg trolley at 4 m/s hits a stationary 1 kg trolley and they stick. Find their speed after.</p>",
      "solution": "<p><strong>Answer:</strong> Momentum before = 12 kg·m/s. Combined mass = 4 kg. Speed = 12 ÷ 4 = 3 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 0.5 kg ball moving at 10 m/s is stopped in 0.05 s. What average force acts?</p>",
      "solution": "<p><strong>Answer:</strong> Momentum = 5 kg·m/s. Force = 5 ÷ 0.05 = 100 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A nail gun fires a 0.05 kg nail at 40 m/s. The gun mass is 4 kg. What is the recoil speed?</p>",
      "solution": "<p><strong>Answer:</strong> Nail momentum = 2 kg·m/s. Recoil speed = 2 ÷ 4 = 0.5 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why landing on a thick mat hurts less than landing on concrete, using impulse.</p>",
      "solution": "<p><strong>Answer:</strong> The mat stretches the stopping time, so the same change in momentum needs a smaller average force.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Momentum is calculated as:",
      "choices": [
        "mass ÷ velocity",
        "mass × velocity",
        "mass × acceleration",
        "force × time"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = mv. (a) divides instead of multiplying. (c) is force. (d) is impulse, which changes momentum but is not momentum itself."
    },
    {
      "q": "A 2 kg part at 5 m/s has momentum:",
      "choices": [
        "2.5 kg·m/s",
        "7 kg·m/s",
        "10 kg·m/s",
        "25 kg·m/s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 2 × 5 = 10 kg·m/s. (a) divides. (b) adds. (d) multiplies 5 by 5."
    },
    {
      "q": "A force of 20 N acts for 3 s. The impulse is:",
      "choices": [
        "6.7 N·s",
        "23 N·s",
        "60 N·s",
        "17 N·s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). J = 20 × 3 = 60 N·s. (a) divides. (b) adds. (d) subtracts."
    },
    {
      "q": "In an inelastic collision, what is conserved?",
      "choices": [
        "Kinetic energy only",
        "Momentum, but not all kinetic energy",
        "Neither momentum nor energy",
        "Momentum only, energy is destroyed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Momentum is conserved; some kinetic energy becomes heat or deformation. (a) is true only for elastic collisions. (c) is wrong — momentum is conserved. (d) energy is not destroyed, it changes form."
    },
    {
      "q": "A 1 kg trolley at 6 m/s hits a stationary 2 kg trolley and they stick. Their speed after is:",
      "choices": [
        "2 m/s",
        "3 m/s",
        "6 m/s",
        "9 m/s"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Momentum 6 kg·m/s shared by 3 kg gives 2 m/s. (b) divides by 2 instead of 3. (c) is the speed before. (d) adds the speeds."
    },
    {
      "q": "Why does a crumple zone reduce injury?",
      "choices": [
        "It reduces the total momentum",
        "It increases the stopping time, so peak force falls",
        "It makes the car lighter",
        "It stops the car instantly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Same impulse over more time means less force. (a) total momentum change is the same. (c) weight is not the mechanism. (d) instant stopping would raise the force."
    },
    {
      "q": "A gun recoils because:",
      "choices": [
        "Momentum is conserved: the bullet's forward momentum is matched by the gun's backward momentum",
        "Energy is created",
        "Friction pushes it",
        "Gravity pulls it back"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Total momentum stays zero, so the gun moves back. (b) energy is not created. (c) friction is not the cause. (d) gravity acts downward, not backward."
    },
    {
      "q": "Impulse equals:",
      "choices": [
        "Change in momentum",
        "Change in mass",
        "Change in energy",
        "Change in speed only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). J = Δp. (b) mass does not change. (c) impulse is not an energy change. (d) speed alone ignores mass."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Momentum, Impulse, and Collisions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate momentum from mass and velocity and state its units.</p>\n<p><strong>Key terms:</strong> Momentum · Impulse · Conservation of momentum · Elastic collision · Inelastic collision · Perfectly inelastic collision · Recoil · Change in momentum.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate momentum from mass and velocity and state its units.</li>\n<li>Use impulse = force × time to find the change in momentum.</li>\n<li>Apply conservation of momentum to collisions and recoil problems.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
