// egr290 — module 3. Original review content.
module.exports = {
  "number": 3,
  "slug": "mechanics-of-materials-and-thermodynamics",
  "title": "Mechanics of Materials and Thermodynamics Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate axial stress and strain, and use Hooke's law and the modulus of elasticity.",
    "Calculate torsional shear stress and bending stress in beams.",
    "Apply the first law of thermodynamics to closed systems and steady-flow devices.",
    "Use the ideal gas law and property tables for air and water.",
    "Calculate Carnot efficiency and the efficiency of heat engines, refrigerators, and heat pumps."
  ],
  "sections": [
    {
      "heading": "Stress, Strain, and Hooke's Law",
      "html": "<p><strong>Stress</strong> is force per unit area, σ = F/A, and <strong>strain</strong> is the fractional change in length, ε = ΔL/L. A 50 kN tensile force on a bar of 250 mm² cross-section gives σ = 50,000/250 = 200 N/mm² = 200 MPa. If the bar is 500 mm long and stretches 0.5 mm, ε = 0.5/500 = 0.001. In the elastic region, <strong>Hooke's law</strong> says σ = Eε, where E is the modulus of elasticity — about 200 GPa for steel and 70 GPa for aluminium. So the steel bar above, at 200 MPa, has strain ε = σ/E = 200 × 10⁶/200 × 10⁹ = 0.001, which matches the measured stretch. That cross-check is the habit to build.</p><p>Materials fail in different ways. The <strong>yield strength</strong> is where permanent deformation begins; the <strong>ultimate strength</strong> is the maximum stress before fracture. <strong>Poisson's ratio</strong>, ν, links axial strain to lateral strain: a bar stretched by 0.001 with ν = 0.3 contracts laterally by 0.0003. Thermal stress appears when expansion is prevented: σ = EαΔT, where α is the coefficient of thermal expansion. A steel bar (E = 200 GPa, α = 12 × 10⁻⁶/°C) heated 50 °C while fully restrained develops σ = 200 × 10⁹ × 12 × 10⁻⁶ × 50 = 120 MPa.</p>"
    },
    {
      "heading": "Torsion and Bending",
      "html": "<p><strong>Torsion:</strong> a torque T on a shaft of radius r and polar moment of inertia J produces shear stress τ = Tr/J. For a solid shaft 40 mm in diameter, J = πd⁴/32 = π × (0.04)⁴/32 = 2.51 × 10⁻⁷ m⁴. A torque of 200 N·m gives τ = 200 × 0.02/2.51 × 10⁻⁷ = 15.9 × 10⁶ Pa ≈ 15.9 MPa. The angle of twist is φ = TL/GJ, where G is the shear modulus (about 75 GPa for steel).</p><p><strong>Bending:</strong> a bending moment M on a beam produces stress σ = My/I, maximum at the outer fibre where y = c, so σ_max = Mc/I. A rectangular beam 100 mm wide and 200 mm deep has I = bh³/12 = 0.1 × (0.2)³/12 = 6.67 × 10⁻⁵ m⁴ and c = 0.1 m. A moment of 20 kN·m gives σ_max = 20,000 × 0.1/6.67 × 10⁻⁵ = 30 × 10⁶ Pa = 30 MPa. The <strong>section modulus</strong> S = I/c lets you write σ_max = M/S directly — for this beam S = 6.67 × 10⁻⁴ m³. Shear stress in a beam is highest at the neutral axis; bending stress is highest at the outer fibres. Do not mix them up.</p>"
    },
    {
      "heading": "The First Law and the Ideal Gas",
      "html": "<p>The <strong>first law of thermodynamics</strong> is energy conservation: for a closed system, ΔU = Q − W, where Q is heat added to the system and W is work done <em>by</em> the system (this is the engineering sign convention used in the FE Reference Handbook — watch for it, because chemistry texts use the opposite sign for work). For a cycle, the net heat equals the net work. For a steady-flow device, the first law becomes an energy balance on mass flow: heat and work in, enthalpy and kinetic and potential energy out.</p><p>The <strong>ideal gas law</strong> is PV = mRT (or PV = nR̄T). For air, R = 0.287 kJ/kg·K. A tank holding 0.5 m³ of air at 200 kPa and 300 K contains m = PV/RT = (200 × 0.5)/(0.287 × 300) = 100/86.1 = 1.16 kg. For an ideal gas, internal energy and enthalpy depend on temperature only: Δu = c_vΔT and Δh = c_pΔT, with c_p − c_v = R. For air, c_p ≈ 1.005 kJ/kg·K and c_v ≈ 0.718 kJ/kg·K. Heating 1.16 kg of air by 50 K at constant volume needs Q = mc_vΔT = 1.16 × 0.718 × 50 = 41.6 kJ.</p>"
    },
    {
      "heading": "The Second Law, Cycles, and Efficiency",
      "html": "<p>The <strong>second law</strong> says heat flows from hot to cold on its own, and no engine can convert all its heat into work. The <strong>Carnot efficiency</strong> is the ceiling for any heat engine working between two temperatures: η_Carnot = 1 − T_C/T_H, with temperatures in kelvin. Between 800 K and 300 K, η = 1 − 300/800 = 0.625, or 62.5%. A real engine always does worse. A heat engine taking Q_H = 1,000 kJ and doing W = 400 kJ of work has η = W/Q_H = 40% and rejects Q_C = 600 kJ.</p><p><strong>Refrigerators and heat pumps</strong> are judged by the coefficient of performance: COP = Q_C/W for a refrigerator (heat removed per unit of work) and COP = Q_H/W for a heat pump. The Carnot COP of a refrigerator is T_C/(T_H − T_C). The <strong>Rankine cycle</strong> (boiler, turbine, condenser, pump) is the steam power cycle; the <strong>Brayton cycle</strong> (compressor, combustor, turbine) is the gas turbine cycle; the <strong>Otto</strong> and <strong>Diesel</strong> cycles are the spark-ignition and compression-ignition engine cycles. <strong>Entropy</strong> increases in every real process; only a reversible process keeps it constant.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Axial: σ = F/A, ε = ΔL/L, σ = Eε. Thermal stress: σ = EαΔT.</li><li>Torsion: τ = Tr/J, J = πd⁴/32 for a solid shaft. Bending: σ_max = Mc/I = M/S.</li><li>First law (engineering sign): ΔU = Q − W. Ideal gas: PV = mRT, R_air = 0.287 kJ/kg·K.</li><li>Carnot: η = 1 − T_C/T_H (kelvin). Engine η = W/Q_H. Refrigerator COP = Q_C/W.</li><li>Entropy rises in real processes; reversible processes hold it constant.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using the chemistry sign convention for work (ΔU = Q + W) on an FE problem. The FE Reference Handbook uses ΔU = Q − W — work done <em>by</em> the system is positive.</div><div class=\"callout\"><strong>Common mistake:</strong> Using Celsius in the Carnot efficiency. Temperatures must be in kelvin.</div><p><strong>Ready-to-Work link:</strong> If you can find a stress, a bending stress, an ideal-gas mass, and a Carnot efficiency, you have this module. Module 4 moves to fluids and heat transfer.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Stress",
      "def": "Force per unit area, σ = F/A, measured in pascals (1 MPa = 1 N/mm²)."
    },
    {
      "term": "Strain",
      "def": "Fractional change in length, ε = ΔL/L; dimensionless."
    },
    {
      "term": "Hooke's law",
      "def": "σ = Eε in the elastic region; E is the modulus of elasticity."
    },
    {
      "term": "Yield strength",
      "def": "The stress at which a material begins to deform permanently."
    },
    {
      "term": "Poisson's ratio",
      "def": "The ratio of lateral strain to axial strain, ν."
    },
    {
      "term": "Torsion",
      "def": "Twisting of a shaft; shear stress τ = Tr/J."
    },
    {
      "term": "Section modulus",
      "def": "S = I/c; bending stress is σ_max = M/S."
    },
    {
      "term": "First law of thermodynamics",
      "def": "Energy is conserved: ΔU = Q − W (engineering sign convention)."
    },
    {
      "term": "Ideal gas law",
      "def": "PV = mRT; for air R = 0.287 kJ/kg·K."
    },
    {
      "term": "Carnot efficiency",
      "def": "The maximum possible heat-engine efficiency: η = 1 − T_C/T_H in kelvin."
    },
    {
      "term": "Coefficient of performance",
      "def": "COP: heat moved per unit of work — Q_C/W for a refrigerator, Q_H/W for a heat pump."
    },
    {
      "term": "Entropy",
      "def": "A measure of disorder; it increases in every real (irreversible) process."
    }
  ],
  "video": {
    "title": "The First Law of Thermodynamics, Explained So You Never Forget It (ΔU = Q − W)",
    "embedUrl": "https://www.youtube.com/embed/NcmeaLGfERk",
    "note": "A clear walkthrough of the first law — watch for the sign convention, and compare it with the engineering convention (ΔU = Q − W) used in this module and on the FE.",
    "more": [
      {
        "title": "Thermodynamics Explained: Entropy, Enthalpy & Gibbs Free Energy",
        "url": "https://www.youtube.com/watch?v=p6Vnxf6hmyk"
      },
      {
        "title": "Calculation of Internal Energy Change in All Processes",
        "url": "https://www.youtube.com/watch?v=bBMK_K8cBYs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 50 kN tensile force acts on a bar of 250 mm² cross-section. Find the stress in MPa.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: σ = F/A = 50,000 N / 250 mm² = 200 N/mm². Step 2: 1 N/mm² = 1 MPa, so σ = 200 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A solid steel shaft 40 mm in diameter carries a torque of 200 N·m. Find the maximum shear stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: J = πd⁴/32 = π × (0.04)⁴/32 = 2.51 × 10⁻⁷ m⁴. Step 2: τ = Tr/J = 200 × 0.02 / 2.51 × 10⁻⁷ = 15.9 × 10⁶ Pa ≈ 15.9 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A rectangular beam 100 mm wide and 200 mm deep carries a bending moment of 20 kN·m. Find the maximum bending stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = bh³/12 = 0.1 × (0.2)³/12 = 6.67 × 10⁻⁵ m⁴; c = 0.1 m. Step 2: σ = Mc/I = 20,000 × 0.1 / 6.67 × 10⁻⁵ = 30 × 10⁶ Pa = 30 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A tank holds 0.5 m³ of air at 200 kPa and 300 K. Find the mass of air (R = 0.287 kJ/kg·K).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: m = PV/RT = (200 × 0.5)/(0.287 × 300) = 100/86.1 = 1.16 kg.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A heat engine works between 800 K and 300 K. Find the Carnot efficiency, and the actual efficiency if it takes 1,000 kJ of heat and does 400 kJ of work.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: η_Carnot = 1 − 300/800 = 0.625 = 62.5%. Step 2: η_actual = W/Q_H = 400/1,000 = 40%. Step 3: The real engine is below the Carnot ceiling, as it must be.</p>"
    }
  ],
  "quiz": [
    {
      "module": 3,
      "q": "A 50 kN force acts on a bar of 250 mm² cross-section. What is the stress?",
      "choices": [
        "20 MPa",
        "200 MPa",
        "2,000 MPa",
        "125 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = 50,000/250 = 200 N/mm² = 200 MPa. (a) is wrong: that is 5,000/250. (c) is wrong: that is 500,000/250. (d) is wrong: that is 50,000/400."
    },
    {
      "module": 3,
      "q": "A steel bar is heated 50 °C while fully restrained (E = 200 GPa, α = 12 × 10⁻⁶/°C). What thermal stress develops?",
      "choices": [
        "12 MPa",
        "120 MPa",
        "1,200 MPa",
        "60 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = EαΔT = 200 × 10⁹ × 12 × 10⁻⁶ × 50 = 120 × 10⁶ Pa = 120 MPa. (a) is wrong: that is the stress for a 5 °C rise. (c) is wrong: that is ten times too large. (d) is wrong: that is half the correct value."
    },
    {
      "module": 3,
      "q": "For a solid shaft, the polar moment of inertia J is:",
      "choices": [
        "πd⁴/64",
        "πd⁴/32",
        "πd³/16",
        "bh³/12"
      ],
      "answer": 1,
      "explanation": "Correct: (b). J = πd⁴/32 for a solid shaft. (a) is wrong: πd⁴/64 is the area moment of inertia of a circle. (c) is wrong: that is a section-modulus-style term, not J. (d) is wrong: that is the rectangle bending formula."
    },
    {
      "module": 3,
      "q": "Where is bending stress highest in a beam?",
      "choices": [
        "At the neutral axis",
        "At the outer fibres",
        "At the supports only",
        "Uniformly through the depth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bending stress σ = My/I is largest where y is largest — the outer fibres. (a) is wrong: bending stress is zero at the neutral axis; shear stress is highest there. (c) is wrong: stress depends on the moment, not only on the supports. (d) is wrong: stress varies linearly with y."
    },
    {
      "module": 3,
      "q": "In the engineering sign convention used on the FE, the first law for a closed system is:",
      "choices": [
        "ΔU = Q + W",
        "ΔU = Q − W",
        "ΔU = W − Q",
        "ΔU = Q × W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The FE Reference Handbook uses ΔU = Q − W, with W the work done by the system. (a) is wrong: that is the chemistry convention. (c) is wrong: that reverses the signs. (d) is wrong: energy terms add and subtract, they do not multiply."
    },
    {
      "module": 3,
      "q": "A tank holds 0.5 m³ of air at 200 kPa and 300 K (R = 0.287 kJ/kg·K). What is the mass?",
      "choices": [
        "0.58 kg",
        "1.16 kg",
        "2.32 kg",
        "11.6 kg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). m = PV/RT = 100/86.1 = 1.16 kg. (a) is wrong: that halves the volume. (c) is wrong: that doubles the volume. (d) is wrong: that is ten times too large."
    },
    {
      "module": 3,
      "q": "What is the Carnot efficiency of an engine working between 800 K and 300 K?",
      "choices": [
        "37.5%",
        "62.5%",
        "70%",
        "27.5%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). η = 1 − 300/800 = 0.625 = 62.5%. (a) is wrong: that is T_C/T_H, not 1 − T_C/T_H. (c) is wrong: that is the practice benchmark, not an efficiency. (d) is wrong: that uses Celsius (300 °C and 800 °C would be wrong)."
    },
    {
      "module": 3,
      "q": "A heat engine takes 1,000 kJ of heat and does 400 kJ of work. How much heat is rejected?",
      "choices": [
        "400 kJ",
        "600 kJ",
        "1,400 kJ",
        "0 kJ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q_C = Q_H − W = 1,000 − 400 = 600 kJ. (a) is wrong: that is the work, not the rejected heat. (c) is wrong: that adds heat and work. (d) is wrong: an engine must reject heat."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Mechanics of Materials and Thermodynamics Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Stress is force over area, strain is stretch over length, and the first and second laws bound every thermal machine.</p>\n<p><strong>Axial:</strong> σ = F/A · ε = ΔL/L · σ = Eε · thermal σ = EαΔT.</p>\n<p><strong>Torsion:</strong> τ = Tr/J, J = πd⁴/32 · <strong>Bending:</strong> σ_max = Mc/I = M/S.</p>\n<p><strong>First law (FE sign):</strong> ΔU = Q − W · <strong>Ideal gas:</strong> PV = mRT, R_air = 0.287 kJ/kg·K.</p>\n<p><strong>Carnot:</strong> η = 1 − T_C/T_H (kelvin!) · <strong>Engine:</strong> η = W/Q_H · <strong>Refrigerator COP:</strong> Q_C/W.</p>\n<p><strong>Watch out:</strong> Work sign convention (FE: work done <em>by</em> the system is positive) and kelvin in Carnot.</p>\n<p><strong>Self-check:</strong> Find a stress, a bending stress, an ideal-gas mass, and a Carnot efficiency without looking. If you can, you have this module.</p>\n"
};
