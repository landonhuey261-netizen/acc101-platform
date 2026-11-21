// egr109 - Module 8: Bernoulli's Equation and Continuity
module.exports = {
  "number": 8,
  "slug": "bernoulli-continuity",
  "title": "Bernoulli's Equation and Continuity",
  "estTime": "3–4 hours",
  "objectives": [
    "State the continuity equation and use it to find velocity in a changing pipe.",
    "State Bernoulli's equation and name its three energy terms.",
    "Calculate pressure change when a pipe narrows, using Bernoulli.",
    "Explain a Venturi meter and a Pitot tube in plain words.",
    "List the assumptions behind Bernoulli and say when they break down."
  ],
  "sections": [
    {
      "heading": "Continuity: What Goes In Must Come Out",
      "html": "<p><p>For a steady flow in a pipe, the volume flow rate is the same at every cross-section: Q = A₁v₁ = A₂v₂. If the pipe narrows, the fluid must speed up to get the same volume through. A pipe of 0.1 m diameter carrying water at 2 m/s narrows to 0.05 m: the area ratio is (0.1 ÷ 0.05)² = 4, so the speed rises to 2 × 4 = 8 m/s. That is why a nozzle makes water spray fast.</p></p>\n<p><p>Volume flow rate is Q = Av, in m³/s. A flow of 0.01 m³/s is 10 litres per second (1 m³ = 1,000 L). Mass flow rate is ṁ = ρQ, in kg/s. For water at 0.01 m³/s, the mass flow is 10 kg/s. Always check whether a problem gives you volume flow or mass flow — they differ by the density.</p></p>\n"
    },
    {
      "heading": "Bernoulli's Equation: Energy Along a Streamline",
      "html": "<p><p>Bernoulli's equation says the total energy per unit weight of a flowing fluid stays constant along a streamline (for steady, incompressible, frictionless flow): p ÷ (ρg) + v² ÷ (2g) + z = constant. The three terms are pressure head, velocity head, and elevation head, all in metres. Add them at one point, and they must add to the same total at any other point.</p></p>\n<p><p>In plain words: when a fluid speeds up, its pressure falls, and when it slows down, its pressure rises. That is why an aeroplane wing lifts, why a shower curtain is pulled inward, and why a Venturi meter can measure flow. The energy is conserved — it just changes form between pressure, speed, and height.</p></p>\n"
    },
    {
      "heading": "Worked Example: A Pipe Narrows",
      "html": "<p><p>Water flows in a horizontal pipe. At section 1 the diameter is 0.1 m, the speed is 2 m/s, and the pressure is 200 kPa. At section 2 the diameter is 0.05 m. By continuity, v₂ = 8 m/s. Bernoulli (horizontal, so z is the same) gives p₂ = p₁ + ½ρ(v₁² − v₂²) = 200,000 + 500 × (4 − 64) = 200,000 − 30,000 = 170,000 Pa, or 170 kPa. The pressure fell by 30 kPa because the speed rose — exactly what Bernoulli predicts.</p></p>\n<p><p>Check the numbers: the velocity head at section 1 is v² ÷ (2g) = 4 ÷ 19.62 = 0.204 m, and at section 2 it is 64 ÷ 19.62 = 3.26 m. The pressure head fell by the same amount: 30,000 ÷ (1,000 × 9.81) = 3.06 m. The two changes balance (3.26 − 0.204 = 3.06 m). When the heads balance, the calculation is right.</p></p>\n"
    },
    {
      "heading": "Venturi Meters, Pitot Tubes, and Limits",
      "html": "<p><p>A Venturi meter is a pipe that narrows and then widens again, with pressure tappings before and at the narrow throat. The pressure drop tells you the speed, and the speed times the area tells you the flow rate — a flow meter with no moving parts. A Pitot tube points into the flow and measures the stagnation pressure; the difference from the static pressure gives the speed: v = √(2Δp ÷ ρ).</p></p>\n<p><p>Bernoulli assumes steady flow, incompressible fluid, no friction, and flow along a streamline. Real flows have friction (which is why Module 9 exists), air is compressible at high speed, and the equation does not apply across a pump or a turbine (those add or remove energy). Use Bernoulli where it fits — a short, smooth pipe run — and use the energy equation with head loss where it does not.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Continuity: A₁v₁ = A₂v₂; narrowing a pipe speeds the fluid up.</li><li>Bernoulli: pressure head + velocity head + elevation head is constant.</li><li>When speed rises, pressure falls.</li><li>Venturi meters and Pitot tubes measure flow and speed from pressure.</li><li>Bernoulli assumes steady, incompressible, frictionless flow.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using diameter ratio instead of area ratio. Speed changes with the square of the diameter ratio.</p><p><strong>Common mistake:</strong> Forgetting that Bernoulli needs the same streamline and no pump or friction between the two points.</p><p><strong>Ready check:</strong> If you can find the pressure in a narrowed pipe from the speed change, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Continuity equation",
      "def": "A₁v₁ = A₂v₂: volume flow rate is the same at every section of a pipe."
    },
    {
      "term": "Volume flow rate (Q)",
      "def": "Volume per second, in m³/s: Q = Av."
    },
    {
      "term": "Mass flow rate",
      "def": "Mass per second, in kg/s: ṁ = ρQ."
    },
    {
      "term": "Bernoulli's equation",
      "def": "Pressure head + velocity head + elevation head is constant along a streamline."
    },
    {
      "term": "Pressure head",
      "def": "Pressure expressed as a height of fluid: p ÷ (ρg), in metres."
    },
    {
      "term": "Velocity head",
      "def": "Speed expressed as a height: v² ÷ (2g), in metres."
    },
    {
      "term": "Elevation head",
      "def": "Height above a datum, z, in metres."
    },
    {
      "term": "Streamline",
      "def": "The path a fluid particle follows in steady flow."
    },
    {
      "term": "Venturi meter",
      "def": "A flow meter that uses a narrowed throat and a pressure drop."
    },
    {
      "term": "Pitot tube",
      "def": "A tube that measures flow speed from stagnation pressure."
    },
    {
      "term": "Stagnation pressure",
      "def": "The pressure when a fluid is brought to rest."
    },
    {
      "term": "Static pressure",
      "def": "The pressure of the moving fluid, measured at right angles to the flow."
    },
    {
      "term": "Incompressible",
      "def": "A fluid whose density does not change with pressure — a good model for liquids."
    },
    {
      "term": "Head",
      "def": "Energy per unit weight of fluid, expressed in metres."
    }
  ],
  "video": {
    "title": "How California Pushes Water 1,926 Feet Over a Mountain",
    "embedUrl": "https://www.youtube.com/embed/ybAt6Lm35x4",
    "note": "How California lifts water 1,926 feet over the Tehachapi Mountains — pressure, head, and pumping on a giant scale.",
    "more": [
      {
        "title": "Fluid Flow & Equipment: Crash Course Engineering #13",
        "url": "https://www.youtube.com/watch?v=bRrfsv9hiX4"
      },
      {
        "title": "How a Centrifugal Pump Moves Water",
        "url": "https://www.youtube.com/watch?v=IN5Qq1cOrco"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pipe narrows from 0.2 m to 0.1 m diameter. Water enters at 1 m/s. What is the speed in the narrow section?</p>",
      "solution": "<p><strong>Answer:</strong> Area ratio = (0.2 ÷ 0.1)² = 4. Speed = 1 × 4 = 4 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pipe carries 0.02 m³/s of water. What is the mass flow rate?</p>",
      "solution": "<p><strong>Answer:</strong> ṁ = 1,000 × 0.02 = 20 kg/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Water flows horizontally at 3 m/s with pressure 300 kPa. It enters a section where the speed is 6 m/s. What is the new pressure?</p>",
      "solution": "<p><strong>Answer:</strong> p₂ = 300,000 + 500 × (9 − 36) = 300,000 − 13,500 = 286,500 Pa, about 287 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A Pitot tube measures a pressure difference of 5,000 Pa in water. What is the flow speed?</p>",
      "solution": "<p><strong>Answer:</strong> v = √(2 × 5,000 ÷ 1,000) = √10 = 3.16 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain in plain words why pressure falls when a pipe narrows.</p>",
      "solution": "<p><strong>Answer:</strong> The fluid speeds up to get the same volume through, and Bernoulli says faster flow means lower pressure — energy moves from pressure to speed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A Venturi meter's throat pressure is lower than the inlet pressure. What does that tell you, and what is it used for?</p>",
      "solution": "<p><strong>Answer:</strong> The fluid is faster at the throat. The pressure drop is used to calculate the flow rate.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Continuity says volume flow rate is:",
      "choices": [
        "Greater in a narrow pipe",
        "The same at every section",
        "Zero in a narrow pipe",
        "Greater at the outlet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = Av is constant along the pipe. (a) flow rate is the same, only speed changes. (c) flow does not stop. (d) outlet flow equals inlet flow."
    },
    {
      "q": "A pipe narrows from 0.1 m to 0.05 m diameter. Speed changes by a factor of:",
      "choices": [
        "2",
        "4",
        "8",
        "0.5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Area ratio is (0.1 ÷ 0.05)² = 4. (a) is the diameter ratio, not the area ratio. (c) is the cube. (d) is the inverse."
    },
    {
      "q": "Bernoulli's equation has three terms: pressure head, velocity head, and:",
      "choices": [
        "Friction head",
        "Elevation head",
        "Pump head",
        "Heat head"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The three heads are pressure, velocity, and elevation. (a) friction is a loss, not a Bernoulli term. (c) pumps are not in Bernoulli's equation. (d) heat is not a head term."
    },
    {
      "q": "When a fluid speeds up in a horizontal pipe, its pressure:",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Energy moves from pressure to speed. (a) is backwards. (c) would break energy conservation. (d) pressure falls but not to zero."
    },
    {
      "q": "Water at 2 m/s and 200 kPa enters a section at 8 m/s (horizontal). The new pressure is:",
      "choices": [
        "230 kPa",
        "170 kPa",
        "200 kPa",
        "140 kPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p₂ = 200,000 + 500 × (4 − 64) = 170,000 Pa. (a) adds instead of subtracting. (c) ignores the speed change. (d) doubles the drop."
    },
    {
      "q": "A Venturi meter measures flow by:",
      "choices": [
        "Counting rotations",
        "The pressure drop at a narrowed throat",
        "Weighing the fluid",
        "Timing a float"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pressure drop gives the speed, and speed times area gives flow. (a) is a turbine meter. (c) is not a flow measurement. (d) is a rotameter, not a Venturi."
    },
    {
      "q": "A Pitot tube measures:",
      "choices": [
        "Static pressure only",
        "Stagnation pressure, from which speed is found",
        "Temperature",
        "Density"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It faces the flow and reads stagnation pressure. (a) is measured at right angles to the flow. (c) and (d) are not what a Pitot tube measures."
    },
    {
      "q": "Bernoulli's equation does NOT apply:",
      "choices": [
        "Across a pump",
        "In a short smooth pipe",
        "Along a streamline",
        "For steady flow"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A pump adds energy, which Bernoulli does not include. (b), (c), and (d) are exactly where it does apply."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Bernoulli's Equation and Continuity: Quick Reference</h3>\n<p><strong>Core idea:</strong> State the continuity equation and use it to find velocity in a changing pipe.</p>\n<p><strong>Key terms:</strong> Continuity equation · Volume flow rate (Q) · Mass flow rate · Bernoulli's equation · Pressure head · Velocity head · Elevation head · Streamline.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>State the continuity equation and use it to find velocity in a changing pipe.</li>\n<li>State Bernoulli's equation and name its three energy terms.</li>\n<li>Calculate pressure change when a pipe narrows, using Bernoulli.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
