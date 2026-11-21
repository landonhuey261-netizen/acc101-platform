// egr112 - Module 5: Shafts: Torque, Bending & Combined Loading
module.exports = {
  "number": 5,
  "slug": "shafts",
  "title": "Shafts: Torque, Bending & Combined Loading",
  "estTime": "3–4 hours",
  "objectives": [
    "Work out the torque in a shaft from power and speed.",
    "Work out torsional shear stress and bending stress in a solid shaft.",
    "Combine torsion and bending into a von Mises stress.",
    "Work out a shaft's factor of safety.",
    "Work out the angle of twist of a shaft."
  ],
  "sections": [
    {
      "heading": "Torque from Power and Speed",
      "html": "<p>A shaft transmits power by rotating, and the torque it carries comes from its power and speed: T = 9550 × P ÷ n, where P is power in kilowatts, n is speed in revolutions per minute, and T is torque in newton-metres. Example: a shaft transmitting 5 kW at 300 rpm carries T = 9550 × 5 ÷ 300 = 159.2 N·m. The same power at a higher speed means less torque — that is why high-speed shafts can be thinner than slow ones carrying the same power.</p>\n<p>Torque is what twists a shaft; bending is what bends it. A real shaft usually feels both: the torque from the power it transmits, and bending from the gears, pulleys, and belts mounted on it, plus its own weight. Design must handle both, and the combination matters more than either one alone.</p>\n"
    },
    {
      "heading": "Torsional Shear Stress",
      "html": "<p>Torque twists a shaft and creates shear stress, highest at the outer surface and zero at the centre — which is why hollow shafts are so efficient: the material near the centre carries almost no stress, so removing it saves weight without losing much strength. For a solid shaft, the torsional shear stress is τ = 16 × T ÷ (π × d³), where T is torque and d is diameter.</p>\n<p>Example: a 30 mm diameter shaft carrying 159.2 N·m. First convert the torque to N·mm: 159.2 N·m = 159,200 N·mm. Then τ = 16 × 159,200 ÷ (π × 30³) = 2,547,200 ÷ (π × 27,000) = 2,547,200 ÷ 84,823 = 30.0 MPa. That is the shear stress at the shaft's surface from torsion alone.</p>\n"
    },
    {
      "heading": "Bending Stress",
      "html": "<p>Bending creates tensile stress on one side of a shaft and compressive stress on the other, again highest at the surface. For a solid shaft, the bending stress is σ = 32 × M ÷ (π × d³), where M is the bending moment. Example: the same 30 mm shaft with a bending moment of 200 N·m (200,000 N·mm). Then σ = 32 × 200,000 ÷ (π × 27,000) = 6,400,000 ÷ 84,823 = 75.5 MPa.</p>\n<p>Notice that the bending stress (75.5 MPa) is higher than the torsional stress (30.0 MPa) in this example, even though the numbers look similar — because the bending formula has a 32 where torsion has a 16. Bending is usually the bigger stress in a shaft, which is why shafts are often sized by bending first and checked for torsion second.</p>\n"
    },
    {
      "heading": "Combined Loading and Von Mises",
      "html": "<p>A shaft under torsion and bending together needs a combined check. The von Mises stress combines the bending stress σ and the torsional shear stress τ into one number: σ_vm = √(σ² + 3τ²). For our shaft: σ = 75.5 MPa and τ = 30.0 MPa, so σ_vm = √(75.5² + 3 × 30.0²) = √(5,700 + 2,700) = √8,400 = 91.6 MPa. Compared with a yield strength of 350 MPa, the factor of safety is 350 ÷ 91.6 = 3.8 — a comfortable margin.</p>\n<p>The von Mises check is the one that matters: a shaft can pass its torsion check and its bending check separately and still fail the combined check. Always combine, and always check the factor of safety on the combined stress, not on the parts.</p>\n"
    },
    {
      "heading": "Angle of Twist and Common Mistakes",
      "html": "<p>A shaft also twists under torque, and the twist matters when timing or precision is involved: a long, thin shaft can wind up like a spring. The angle of twist is φ = T × L ÷ (G × J), where L is the shaft length, G is the shear modulus (79 GPa for steel), and J is the polar second moment of area (for a solid shaft, J = π × d⁴ ÷ 32). Example: our shaft, T = 159.2 N·m, L = 500 mm, d = 30 mm. J = π × 30⁴ ÷ 32 = 79,522 mm⁴. Then φ = 159,200 × 500 ÷ (79,000 × 79,522) = 79,600,000 ÷ 6,282,238,000 = 0.0127 rad, which is 0.73°. Small, but in a precision machine even half a degree can matter.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Torque T = 9550 × P ÷ n: 5 kW at 300 rpm gives 159.2 N·m.</li><li>Torsional shear τ = 16T ÷ (πd³); bending σ = 32M ÷ (πd³).</li><li>Combine with von Mises: σ_vm = √(σ² + 3τ²), then check the factor of safety.</li><li>Hollow shafts are efficient because the centre carries little stress.</li><li>Angle of twist φ = TL ÷ (GJ); even small twists matter in precision machines.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up N·m and N·mm. The stress formulas need torque in N·mm — multiply N·m by 1,000 first.</p>\n<p><strong>Common mistake:</strong> Checking torsion and bending separately and forgetting the combined von Mises check. A shaft can pass both and still fail the combination.</p>\n<p><strong>Ready check:</strong> If you can work out torque, torsional and bending stress, von Mises stress, factor of safety, and angle of twist, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Torque",
      "def": "The twisting moment a shaft carries, in N·m, worked out from power and speed."
    },
    {
      "term": "Bending moment",
      "def": "The moment that bends a shaft, caused by gears, pulleys, belts, and weight."
    },
    {
      "term": "Torsional shear stress",
      "def": "The shear stress from torque, highest at the shaft's surface: τ = 16T ÷ (πd³)."
    },
    {
      "term": "Bending stress",
      "def": "The tensile and compressive stress from bending, highest at the surface: σ = 32M ÷ (πd³)."
    },
    {
      "term": "Von Mises stress",
      "def": "A single number combining bending and torsion: √(σ² + 3τ²)."
    },
    {
      "term": "Angle of twist",
      "def": "How much a shaft winds up under torque: φ = TL ÷ (GJ)."
    },
    {
      "term": "Shear modulus (G)",
      "def": "A material's resistance to twisting: 79 GPa for steel."
    },
    {
      "term": "Polar second moment (J)",
      "def": "A shaft's resistance to twisting, from its cross-section: J = πd⁴ ÷ 32 for a solid shaft."
    },
    {
      "term": "Hollow shaft",
      "def": "A shaft with the centre removed, saving weight with little loss of strength, because the centre carries little stress."
    },
    {
      "term": "Keyway",
      "def": "A slot cut in a shaft to hold a key that locks a gear or pulley to the shaft — and a stress raiser."
    },
    {
      "term": "Shoulder",
      "def": "A step in a shaft's diameter, used to locate a bearing or gear — and a stress concentration point."
    },
    {
      "term": "Critical speed",
      "def": "A rotational speed at which a shaft vibrates strongly; shafts must run well away from it."
    }
  ],
  "video": {
    "title": "Why Car Driveshafts Are Hollow | Torsion & Shear Stress in Shafts",
    "embedUrl": "https://www.youtube.com/embed/mT5co3Sw11M",
    "note": "Why driveshafts are hollow, how torsion creates shear stress, and where the stress is highest. Watch the hollow-shaft explanation, then work out this module's 30 mm shaft example yourself.",
    "more": [
      {
        "title": "Twisting Couple on a Cylinder | Full Derivation, Simulation, Why Drive Shafts Are Hollow",
        "url": "https://www.youtube.com/watch?v=xraEwcAoX8A"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shaft transmits 5 kW at 300 rpm. Work out the torque it carries.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T = 9550 × P ÷ n = 9550 × 5 ÷ 300. Step 2: 9550 × 5 = 47,750; 47,750 ÷ 300 = 159.2 N·m. A good answer shows the formula and the 159.2 N·m result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 30 mm diameter shaft carries 159.2 N·m of torque. Work out the torsional shear stress at its surface.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert the torque: 159.2 N·m = 159,200 N·mm. Step 2: τ = 16 × T ÷ (π × d³) = 16 × 159,200 ÷ (π × 27,000) = 2,547,200 ÷ 84,823 = 30.0 MPa. A good answer shows the unit conversion and the 30.0 MPa result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The same 30 mm shaft has a bending moment of 200 N·m. Work out the bending stress at its surface.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert the moment: 200 N·m = 200,000 N·mm. Step 2: σ = 32 × M ÷ (π × d³) = 32 × 200,000 ÷ 84,823 = 6,400,000 ÷ 84,823 = 75.5 MPa. A good answer shows the conversion and the 75.5 MPa result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Combine the stresses from Problems 2 and 3 (τ = 30.0 MPa, σ = 75.5 MPa) into a von Mises stress, and work out the factor of safety against a yield strength of 350 MPa.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: σ_vm = √(σ² + 3τ²) = √(75.5² + 3 × 30.0²) = √(5,700 + 2,700) = √8,400 = 91.6 MPa. Step 2: FoS = 350 ÷ 91.6 = 3.8. A good answer shows the von Mises combination and the 3.8 factor of safety.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The 30 mm shaft is 500 mm long, carries 159.2 N·m, and is made of steel (G = 79 GPa). Work out its angle of twist in degrees.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: J = π × d⁴ ÷ 32 = π × 810,000 ÷ 32 = 79,522 mm⁴. Step 2: φ = T × L ÷ (G × J) = 159,200 × 500 ÷ (79,000 × 79,522) = 0.0127 rad. Step 3: In degrees, 0.0127 × (180 ÷ π) = 0.73°. A good answer shows J, the twist in radians, and the 0.73° conversion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A designer wants to save weight by making a shaft hollow, keeping the same outside diameter. Explain why the strength drops only a little, and name one thing to watch out for.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Torsional and bending stress are highest at the surface and zero at the centre, so the material near the centre carries almost no load. Step 2: Removing it saves weight with little loss of strength or stiffness. Step 3: Watch out for buckling of a thin wall, and for the stress concentration where the hollow section meets a solid end. A good answer explains the stress distribution and names a watch-out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A shaft transmits 5 kW at 300 rpm. What torque does it carry?",
      "choices": [
        "159.2 N·m",
        "31.8 N·m",
        "796 N·m",
        "15.9 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). T = 9550 × 5 ÷ 300 = 159.2 N·m. (b) is ten times too small. (c) is five times too big. (d) is a hundred times too small."
    },
    {
      "q": "A 30 mm shaft carries 159.2 N·m of torque. What is the torsional shear stress at its surface?",
      "choices": [
        "30.0 MPa",
        "75.5 MPa",
        "91.6 MPa",
        "3.0 MPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). τ = 16 × 159,200 ÷ (π × 27,000) = 30.0 MPa. (b) is the bending stress for a 200 N·m moment. (c) is the combined von Mises stress. (d) is ten times too small."
    },
    {
      "q": "The same 30 mm shaft has a bending moment of 200 N·m. What is the bending stress?",
      "choices": [
        "30.0 MPa",
        "75.5 MPa",
        "91.6 MPa",
        "7.55 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = 32 × 200,000 ÷ (π × 27,000) = 75.5 MPa. (a) is the torsional stress. (c) is the combined von Mises stress. (d) is ten times too small."
    },
    {
      "q": "A shaft has bending stress 75.5 MPa and torsional shear stress 30.0 MPa. What is the von Mises stress?",
      "choices": [
        "105.5 MPa",
        "91.6 MPa",
        "75.5 MPa",
        "45.5 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ_vm = √(75.5² + 3 × 30.0²) = √8,400 = 91.6 MPa. (a) adds the stresses, which is not the von Mises formula. (c) ignores the torsion. (d) has no basis."
    },
    {
      "q": "A shaft has a von Mises stress of 91.6 MPa and a yield strength of 350 MPa. What is its factor of safety?",
      "choices": [
        "0.26",
        "3.8",
        "38",
        "91.6"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FoS = 350 ÷ 91.6 = 3.8. (a) is stress ÷ strength, the inverse. (c) is ten times too big. (d) is the stress, not the factor."
    },
    {
      "q": "A 30 mm steel shaft, 500 mm long, carries 159.2 N·m. What is its angle of twist, approximately?",
      "choices": [
        "0.73°",
        "7.3°",
        "0.073°",
        "73°"
      ],
      "answer": 0,
      "explanation": "Correct: (a). φ = TL ÷ (GJ) = 0.0127 rad = 0.73°. (b) is ten times too big. (c) is ten times too small. (d) is a hundred times too big."
    },
    {
      "q": "Why are hollow shafts efficient?",
      "choices": [
        "Because they are cheaper to make",
        "Because stress is highest at the surface and zero at the centre, so the centre material carries almost no load",
        "Because they are easier to balance",
        "Because they never fail by fatigue"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The material near the centre carries almost no stress, so removing it saves weight with little strength loss. (a) is wrong: hollow shafts cost more to make. (c) is wrong: balance is not the reason. (d) is wrong: hollow shafts can still fail by fatigue."
    },
    {
      "q": "A student works out a shaft's torsional stress using torque in N·m instead of N·mm. What happens to the answer?",
      "choices": [
        "It is correct",
        "It is 1,000 times too small",
        "It is 1,000 times too big",
        "It is 10 times too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The formulas need torque in N·mm; using N·m makes the numerator 1,000 times too small. (a) is wrong: the units must match. (c) is backwards. (d) is wrong: the factor is 1,000, not 10."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Shafts: Torque, Bending & Combined Loading: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work out the torque in a shaft from power and speed.</p>\n<p><strong>Key terms:</strong> Torque · Bending moment · Torsional shear stress · Bending stress · Von Mises stress · Angle of twist · Shear modulus (G) · Polar second moment (J).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Work out the torque in a shaft from power and speed.</li>\n<li>Work out torsional shear stress and bending stress in a solid shaft.</li>\n<li>Combine torsion and bending into a von Mises stress.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
