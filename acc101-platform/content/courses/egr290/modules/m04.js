// egr290 — module 4. Original review content.
module.exports = {
  "number": 4,
  "slug": "fluid-mechanics-and-heat-transfer",
  "title": "Fluid Mechanics and Heat Transfer Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply continuity and Bernoulli's equation to pipe and duct flow.",
    "Calculate Reynolds number and decide whether flow is laminar or turbulent.",
    "Calculate hydrostatic pressure and forces on submerged surfaces.",
    "Calculate conduction, convection, and radiation heat transfer.",
    "Use the log mean temperature difference for a heat exchanger."
  ],
  "sections": [
    {
      "heading": "Continuity and Bernoulli",
      "html": "<p>For steady flow of an incompressible fluid, <strong>continuity</strong> says the volume flow rate is constant: Q = A₁v₁ = A₂v₂. Water flowing at 2 m/s through a pipe of area 0.02 m² (Q = 0.04 m³/s) speeds up to 4 m/s when the area halves to 0.01 m². <strong>Bernoulli's equation</strong> — p/ρg + v²/2g + z = constant — says that where velocity rises, pressure falls. Horizontally, p₁ − p₂ = ½ρ(v₂² − v₁²): for water (ρ = 1,000 kg/m³) speeding from 2 m/s to 4 m/s, the pressure drop is ½ × 1,000 × (16 − 4) = 6,000 Pa = 6 kPa. The common FE trap is forgetting that Bernoulli needs steady, incompressible, frictionless flow along a streamline — real pipes lose head to friction, which is why the Darcy–Weisbach equation exists.</p><p><strong>Head loss</strong> in a pipe is h_f = f(L/D)(v²/2g), where f is the friction factor. The <strong>Reynolds number</strong>, Re = ρvD/μ, decides the flow regime: below about 2,300 the flow is laminar, above about 4,000 it is turbulent. Water (ρ = 1,000 kg/m³, μ = 0.001 Pa·s) at 2 m/s in a 50 mm pipe has Re = 1,000 × 2 × 0.05/0.001 = 100,000 — well into turbulent flow. Turbulent flow mixes better (good for heat transfer) but loses more head to friction.</p>"
    },
    {
      "heading": "Hydrostatics: Pressure Under a Fluid",
      "html": "<p>Pressure grows with depth: <strong>p = ρgh</strong>. Water 5 m deep exerts p = 1,000 × 9.81 × 5 = 49,050 Pa ≈ 49.1 kPa gauge at the bottom. The force on a submerged surface is the pressure at its centroid times its area, F = p_c × A, and the force acts at the <strong>centre of pressure</strong>, which sits below the centroid because pressure grows with depth. <strong>Buoyancy</strong> (Archimedes' principle) says the upward force equals the weight of the displaced fluid: a body displacing 0.1 m³ of water feels 0.1 × 1,000 × 9.81 = 981 N of buoyancy.</p><p><strong>Manometers</strong> measure pressure from a fluid column: a height difference h in a fluid of density ρ means a pressure difference ρgh. A mercury manometer (ρ = 13,600 kg/m³) with a 100 mm difference reads 13,600 × 9.81 × 0.1 = 13,342 Pa ≈ 13.3 kPa. Remember that gauge pressure is measured relative to atmosphere; absolute pressure is gauge plus atmospheric (about 101.3 kPa at sea level).</p>"
    },
    {
      "heading": "Conduction, Convection, and Radiation",
      "html": "<p>Heat moves three ways. <strong>Conduction</strong> through a wall follows Fourier's law: Q = kAΔT/L. A steel plate (k = 50 W/m·K) of area 2 m² and thickness 0.05 m with 100 K across it conducts Q = 50 × 2 × 100/0.05 = 200,000 W = 200 kW. <strong>Convection</strong> from a surface follows Newton's law of cooling: Q = hAΔT. A surface of 4 m² with h = 25 W/m²·K and a 40 K difference loses Q = 25 × 4 × 40 = 4,000 W. <strong>Radiation</strong> follows the Stefan–Boltzmann law: Q = εσAT⁴, with σ = 5.67 × 10⁻⁸ W/m²·K⁴ and T in kelvin. A surface with emissivity 0.8, area 1 m², at 500 K radiates 0.8 × 5.67 × 10⁻⁸ × 500⁴ = 0.8 × 5.67 × 10⁻⁸ × 6.25 × 10¹⁰ = 2,835 W.</p><p>Real problems combine modes: heat conducts through a wall, then convects away from the surface. The <strong>overall heat-transfer coefficient U</strong> rolls conduction and both convections into one number, Q = UAΔT, and <strong>thermal resistance</strong> adds like electrical resistance in series: R_total = L/kA + 1/hA + … . Insulation works by adding a large resistance — a thick layer of low-k material. The FE loves asking which resistance dominates: usually it is the convection on the air side, not the conduction through the metal.</p>"
    },
    {
      "heading": "Heat Exchangers and the LMTD",
      "html": "<p>A <strong>heat exchanger</strong> moves heat from one fluid to another without mixing them. Its performance is Q = UA × LMTD, where the <strong>log mean temperature difference</strong> is LMTD = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂). With end temperature differences of 80 K and 40 K, LMTD = (80 − 40)/ln(80/40) = 40/ln 2 = 40/0.693 = 57.7 K. If ΔT₁ = ΔT₂, the LMTD is just that value. <strong>Counter-flow</strong> exchangers (fluids moving in opposite directions) beat <strong>parallel-flow</strong> ones because they keep a more even temperature difference along the length, so the LMTD — and the heat transferred — is larger for the same area.</p><p><strong>Fins</strong> extend a surface to increase convection area — the fins on a radiator or a heat sink. <strong>Effectiveness</strong> is the actual heat transferred divided by the maximum possible. And a practical note that matters in the lab in this course: never touch a hot surface to test it, and always check the units on h (W/m²·K) versus k (W/m·K) — mixing them up is the single most common heat-transfer error on the FE.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Continuity: A₁v₁ = A₂v₂. Bernoulli: faster flow means lower pressure; p₁ − p₂ = ½ρ(v₂² − v₁²) horizontally.</li><li>Reynolds: Re = ρvD/μ; laminar below ~2,300, turbulent above ~4,000.</li><li>Hydrostatics: p = ρgh; buoyancy equals the weight of displaced fluid.</li><li>Conduction Q = kAΔT/L · convection Q = hAΔT · radiation Q = εσAT⁴ (kelvin!).</li><li>Heat exchanger: Q = UA × LMTD; LMTD = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂); counter-flow beats parallel-flow.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using Celsius in the Stefan–Boltzmann law. Radiation needs absolute temperature in kelvin — T⁴ with Celsius gives nonsense.</div><div class=\"callout\"><strong>Common mistake:</strong> Applying Bernoulli across a pump, a valve, or a long pipe without the head-loss term. Bernoulli alone is for frictionless flow.</div><p><strong>Ready-to-Work link:</strong> If you can find a Bernoulli pressure drop, a Reynolds number, a conduction heat rate, and an LMTD, you have this module. Module 5 moves to electrical fundamentals.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Continuity equation",
      "def": "A₁v₁ = A₂v₂: volume flow rate is constant in steady incompressible flow."
    },
    {
      "term": "Bernoulli's equation",
      "def": "p/ρg + v²/2g + z = constant along a streamline for steady, incompressible, frictionless flow."
    },
    {
      "term": "Reynolds number",
      "def": "Re = ρvD/μ: below ~2,300 laminar, above ~4,000 turbulent."
    },
    {
      "term": "Head loss",
      "def": "Energy lost to friction in a pipe: h_f = f(L/D)(v²/2g)."
    },
    {
      "term": "Hydrostatic pressure",
      "def": "p = ρgh: pressure grows linearly with depth."
    },
    {
      "term": "Buoyancy",
      "def": "The upward force equal to the weight of fluid displaced (Archimedes' principle)."
    },
    {
      "term": "Fourier's law",
      "def": "Conduction: Q = kAΔT/L."
    },
    {
      "term": "Newton's law of cooling",
      "def": "Convection: Q = hAΔT."
    },
    {
      "term": "Stefan–Boltzmann law",
      "def": "Radiation: Q = εσAT⁴, with T in kelvin and σ = 5.67 × 10⁻⁸ W/m²·K⁴."
    },
    {
      "term": "Thermal resistance",
      "def": "R = L/kA for conduction, 1/hA for convection; resistances add in series."
    },
    {
      "term": "LMTD",
      "def": "Log mean temperature difference: (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂), used for heat exchangers."
    },
    {
      "term": "Counter-flow",
      "def": "A heat-exchanger arrangement with fluids moving in opposite directions; more effective than parallel-flow."
    }
  ],
  "video": {
    "title": "First and second laws of thermodynamics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/f1OokOgtcqg",
    "note": "Khan Academy on the first and second laws — the same laws that bound every heat engine and heat exchanger in this module. Watch it, then redo the worked examples here.",
    "more": [
      {
        "title": "The Ultimate Guide to Launching your Solar Career with the NABCEP PV Associate (PVA) Credential",
        "url": "https://www.youtube.com/watch?v=reJGdhMOMJM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Water flows at 2 m/s through a pipe of area 0.02 m², then into a pipe of area 0.01 m². Find the new velocity and the pressure drop between the two sections (ρ = 1,000 kg/m³, horizontal pipe).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Continuity: v₂ = v₁A₁/A₂ = 2 × 0.02/0.01 = 4 m/s. Step 2: Bernoulli: p₁ − p₂ = ½ρ(v₂² − v₁²) = ½ × 1,000 × (16 − 4) = 6,000 Pa = 6 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Water (ρ = 1,000 kg/m³, μ = 0.001 Pa·s) flows at 2 m/s in a 50 mm pipe. Find the Reynolds number and state the flow regime.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Re = ρvD/μ = 1,000 × 2 × 0.05/0.001 = 100,000. Step 2: Re &gt; 4,000, so the flow is turbulent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Find the gauge pressure at the bottom of 5 m of water (ρ = 1,000 kg/m³, g = 9.81 m/s²).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: p = ρgh = 1,000 × 9.81 × 5 = 49,050 Pa ≈ 49.1 kPa gauge.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A steel plate (k = 50 W/m·K) of area 2 m² and thickness 0.05 m has 100 K across it. Find the conduction heat rate.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Q = kAΔT/L = 50 × 2 × 100/0.05 = 200,000 W = 200 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A heat exchanger has end temperature differences of 80 K and 40 K. Find the LMTD.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: LMTD = (80 − 40)/ln(80/40) = 40/ln 2 = 40/0.693 = 57.7 K.</p>"
    }
  ],
  "quiz": [
    {
      "module": 4,
      "q": "Water flows at 2 m/s in a pipe of area 0.02 m² into a pipe of area 0.01 m². What is the new velocity?",
      "choices": [
        "1 m/s",
        "2 m/s",
        "4 m/s",
        "8 m/s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Continuity: v₂ = 2 × 0.02/0.01 = 4 m/s. (a) is wrong: halving the area doubles the velocity, it does not halve it. (b) is wrong: the velocity must change when the area changes. (d) is wrong: that would need the area to quarter."
    },
    {
      "module": 4,
      "q": "Water at 2 m/s in a 50 mm pipe (ρ = 1,000 kg/m³, μ = 0.001 Pa·s) has a Reynolds number of:",
      "choices": [
        "1,000",
        "10,000",
        "100,000",
        "1,000,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Re = 1,000 × 2 × 0.05/0.001 = 100,000 — turbulent. (a) is wrong: that is 100 times too small. (b) is wrong: that is 10 times too small. (d) is wrong: that is 10 times too large."
    },
    {
      "module": 4,
      "q": "What is the gauge pressure at the bottom of 5 m of water?",
      "choices": [
        "4.91 kPa",
        "49.1 kPa",
        "491 kPa",
        "9.81 kPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 1,000 × 9.81 × 5 = 49,050 Pa ≈ 49.1 kPa. (a) is wrong: that is the pressure at 0.5 m. (c) is wrong: that is the pressure at 50 m. (d) is wrong: that is g alone, not ρgh."
    },
    {
      "module": 4,
      "q": "A steel plate (k = 50 W/m·K, area 2 m², thickness 0.05 m) has 100 K across it. What is the conduction heat rate?",
      "choices": [
        "20 kW",
        "200 kW",
        "2,000 kW",
        "2 kW"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = 50 × 2 × 100/0.05 = 200,000 W = 200 kW. (a) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that forgets the area and thickness."
    },
    {
      "module": 4,
      "q": "A surface (h = 25 W/m²·K, area 4 m²) is 40 K hotter than the air. What is the convection heat rate?",
      "choices": [
        "400 W",
        "4,000 W",
        "40,000 W",
        "100 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = 25 × 4 × 40 = 4,000 W. (a) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is 25 × 4, forgetting ΔT."
    },
    {
      "module": 4,
      "q": "What temperature must be used in the Stefan–Boltzmann radiation law?",
      "choices": [
        "Celsius",
        "Fahrenheit",
        "Kelvin",
        "Any scale works"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Radiation uses absolute temperature in kelvin, because T⁴ needs an absolute zero. (a) is wrong: Celsius has no absolute zero at 0 °C. (b) is wrong: Fahrenheit is not absolute either. (d) is wrong: only kelvin (or Rankine) works."
    },
    {
      "module": 4,
      "q": "A heat exchanger has end temperature differences of 80 K and 40 K. What is the LMTD?",
      "choices": [
        "60 K",
        "57.7 K",
        "40 K",
        "80 K"
      ],
      "answer": 1,
      "explanation": "Correct: (b). LMTD = 40/ln 2 = 57.7 K. (a) is wrong: that is the arithmetic mean, not the log mean. (c) is wrong: that is the smaller end difference. (d) is wrong: that is the larger end difference."
    },
    {
      "module": 4,
      "q": "Which heat-exchanger arrangement transfers more heat for the same area?",
      "choices": [
        "Parallel-flow",
        "Counter-flow",
        "They are always equal",
        "Cross-flow with no fins"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Counter-flow keeps a more even temperature difference, giving a larger LMTD. (a) is wrong: parallel-flow has a falling temperature difference and a smaller LMTD. (c) is wrong: the arrangements differ. (d) is wrong: cross-flow is a different arrangement and fins are a separate feature."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Fluid Mechanics and Heat Transfer Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Continuity and Bernoulli move the fluid; Fourier, Newton, and Stefan–Boltzmann move the heat.</p>\n<p><strong>Flow:</strong> A₁v₁ = A₂v₂ · Bernoulli: p/ρg + v²/2g + z = constant · Re = ρvD/μ (laminar &lt; ~2,300, turbulent &gt; ~4,000).</p>\n<p><strong>Hydrostatics:</strong> p = ρgh · buoyancy = weight of displaced fluid.</p>\n<p><strong>Heat:</strong> Conduction Q = kAΔT/L · convection Q = hAΔT · radiation Q = εσAT⁴ (kelvin!) · σ = 5.67 × 10⁻⁸ W/m²·K⁴.</p>\n<p><strong>Exchangers:</strong> Q = UA × LMTD · LMTD = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂) · counter-flow beats parallel-flow.</p>\n<p><strong>Watch out:</strong> Kelvin in radiation; Bernoulli needs frictionless flow — add head loss for real pipes.</p>\n<p><strong>Self-check:</strong> Find a Bernoulli pressure drop, a Reynolds number, a conduction rate, and an LMTD without looking. If you can, you have this module.</p>\n"
};
