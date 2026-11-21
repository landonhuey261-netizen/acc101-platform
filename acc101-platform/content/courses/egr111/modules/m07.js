// egr111 - Module 7: Hydraulics Fundamentals
module.exports = {
  "number": 7,
  "slug": "hydraulics-fundamentals",
  "title": "Hydraulics Fundamentals",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain Pascal's law in plain words.",
    "Work out cylinder force from pressure and bore area.",
    "Work out retract force using the annulus area.",
    "Work out cylinder speed from flow rate and bore area.",
    "Name the main parts of a hydraulic system and what each does."
  ],
  "sections": [
    {
      "heading": "Pascal's Law: Pressure Is Shared Everywhere",
      "html": "<p>Hydraulics moves heavy loads with pressurised oil. The whole subject rests on Pascal's law: pressure applied to a confined fluid is transmitted equally in all directions. Push on a small piston and the pressure appears everywhere in the fluid — including on a big piston, where the same pressure acting on a bigger area produces a bigger force. That is how a small pump and a modest pressure can lift tonnes: force equals pressure times area, and area is what you control.</p>\n<p>Pressure is force per unit area. In metric units it is measured in bar or megapascals (1 MPa = 10 bar = 1 N/mm²); in imperial units it is pounds per square inch (psi). Flow rate is the volume of oil moving per unit time — litres per minute or gallons per minute — and it decides speed, while pressure decides force. Keep the two separate in your thinking: pressure is how hard, flow is how fast.</p>\n"
    },
    {
      "heading": "Cylinder Force: F = P × A",
      "html": "<p>A hydraulic cylinder is a piston in a tube: oil pressure on one side pushes the piston and its rod out. The extend force is F = P × A, where A is the bore area: A = π ÷ 4 × d². Example in metric: a bore of 50 mm and a pressure of 10 MPa. The area is π ÷ 4 × 50² = 1,963.5 mm², and since 1 MPa = 1 N/mm², the force is 10 × 1,963.5 = 19,635 N, about 19.6 kN. Example in imperial: a bore of 2 in and a pressure of 2,000 psi. The area is π ÷ 4 × 2² = 3.14 in², and the force is 2,000 × 3.14 = 6,283 lbf.</p>\n<p>A bigger bore gives more force: a 63 mm bore at 16 MPa has an area of π ÷ 4 × 63² = 3,117 mm² and a force of 16 × 3,117 = 49,872 N, about 49.9 kN. That is why presses and lifts use large-bore cylinders — doubling the bore diameter quadruples the area and the force, because area goes with the square of the diameter.</p>\n"
    },
    {
      "heading": "Retract Force: The Rod Steals Area",
      "html": "<p>Retracting a cylinder is weaker than extending it, because the rod takes up part of the piston area on the rod side. The effective area is the annulus — the ring between the bore and the rod: A = π ÷ 4 × (d_bore² − d_rod²). Example: a 50 mm bore with a 28 mm rod at 10 MPa. The annulus area is π ÷ 4 × (50² − 28²) = π ÷ 4 × (2,500 − 784) = 1,347.7 mm², and the retract force is 10 × 1,347.7 = 13,477 N, about 13.5 kN — noticeably less than the 19.6 kN extend force from the same cylinder.</p>\n<p>That difference matters in design: if a cylinder must pull as hard as it pushes, it needs a bigger bore, a higher pressure, or a double-rod cylinder (a rod on both sides, so the areas are equal). Always calculate both directions, and never assume retract equals extend.</p>\n"
    },
    {
      "heading": "Cylinder Speed: v = Q ÷ A",
      "html": "<p>Cylinder speed comes from flow rate divided by area: v = Q ÷ A. Example in imperial: a flow of 10 gallons per minute and a bore area of 3.14 in². First convert the flow: 1 gallon = 231 in³, so 10 GPM = 2,310 in³/min. Then v = 2,310 ÷ 3.14 = 735 in/min, which is 61.3 ft/min or 12.3 in/s. Example in metric: a flow of 20 L/min and a 50 mm bore. The flow is 20,000,000 mm³/min = 333,333 mm³/s, and the area is 1,963.5 mm², so v = 333,333 ÷ 1,963.5 = 169.8 mm/s, about 0.170 m/s. A 200 mm stroke at that speed takes 200 ÷ 169.8 = 1.18 s.</p>\n<p>Speed and force trade against each other for a given pump: more flow means more speed but needs a bigger pump, and more pressure means more force but needs stronger components. A flow control valve (a needle valve) in the line slows a cylinder by restricting the flow — and the excess flow goes over the relief valve as heat, which is why badly set flow controls make hydraulic oil hot.</p>\n"
    },
    {
      "heading": "The Parts of a Hydraulic System and Safety",
      "html": "<p>A hydraulic system has a reservoir (tank) holding the oil, a pump that moves it, a relief valve that limits the maximum pressure, directional control valves that send oil to the cylinders, the cylinders themselves, and filters that keep the oil clean. Contaminated oil is the number one cause of hydraulic failure — a single grain of grit can jam a valve — so filtration and clean oil handling are not optional extras, they are the maintenance.</p>\n<p>Hydraulics is powerful and dangerous: pressures of 200 bar (3,000 psi) are common, and a pinhole leak can inject oil through skin. Never search for a leak with your hand — use cardboard or paper. Always depressurise and lock out a system before working on it, and remember that a raised load can fall if a hose fails, so mechanical locks or counterbalance valves are used where a falling load could hurt someone.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Force is F = P × A; speed is v = Q ÷ A. Pressure decides force, flow decides speed.</li><li>A 50 mm bore at 10 MPa extends with about 19.6 kN; a 2 in bore at 2,000 psi extends with 6,283 lbf.</li><li>Retract force is lower because the rod reduces the area — use the annulus.</li><li>Doubling the bore quadruples the force.</li><li>Keep oil clean, never feel for leaks with your hand, and lock out before maintenance.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the full bore area for retract force. The rod side area is the annulus, and the retract force is always lower.</p>\n<p><strong>Common mistake:</strong> Mixing up pressure and flow. Raising the pressure increases force, not speed; raising the flow increases speed, not force.</p>\n<p><strong>Ready check:</strong> If you can work out extend force, retract force, and speed in metric and imperial units, and name the system parts, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Pascal's law",
      "def": "Pressure applied to a confined fluid is transmitted equally in all directions."
    },
    {
      "term": "Pressure",
      "def": "Force per unit area, measured in bar, MPa, or psi; it decides how hard a cylinder pushes."
    },
    {
      "term": "Flow rate",
      "def": "The volume of fluid moving per unit time, in L/min or GPM; it decides how fast a cylinder moves."
    },
    {
      "term": "Cylinder",
      "def": "A piston in a tube that converts fluid pressure into linear force and motion."
    },
    {
      "term": "Bore",
      "def": "The inside diameter of a cylinder, which sets its piston area."
    },
    {
      "term": "Rod",
      "def": "The shaft that carries the piston's force out of the cylinder; it reduces the area on the retract side."
    },
    {
      "term": "Annulus",
      "def": "The ring-shaped area between the bore and the rod, which the retract force acts on."
    },
    {
      "term": "Pump",
      "def": "The component that moves hydraulic oil through the system, creating flow (pressure is created by resistance to that flow)."
    },
    {
      "term": "Relief valve",
      "def": "A safety valve that limits the system's maximum pressure by dumping excess oil back to the tank."
    },
    {
      "term": "Directional control valve",
      "def": "A valve that directs oil to one side of a cylinder or the other, controlling its direction."
    },
    {
      "term": "Reservoir",
      "def": "The tank that holds the hydraulic oil and lets it cool and release trapped air."
    },
    {
      "term": "Filter",
      "def": "A component that removes contamination from the oil; clean oil is essential for reliable hydraulics."
    },
    {
      "term": "Counterbalance valve",
      "def": "A valve that holds a load from falling if a hose fails or the directional valve is centred."
    },
    {
      "term": "Cavitation",
      "def": "Damage caused by vapour bubbles forming and collapsing in the oil, usually from a restricted pump inlet."
    }
  ],
  "video": {
    "title": "Basic Hydraulic System Circuit Diagram and Working Animation",
    "embedUrl": "https://www.youtube.com/embed/W2t6etP0P-E",
    "note": "An animated walk through a hydraulic circuit: reservoir, pump, relief valve, directional valve, and cylinder. Follow the oil path, then sketch the circuit from memory and label each part.",
    "more": [
      {
        "title": "PLC Basics | Programmable Logic Controller",
        "url": "https://www.youtube.com/watch?v=PbAGl_mv5XI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A hydraulic cylinder has a 50 mm bore and works at 10 MPa. Work out its extend force in kN, showing the area calculation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area A = π ÷ 4 × 50² = 1,963.5 mm². Step 2: Force F = P × A = 10 × 1,963.5 = 19,635 N. Step 3: That is about 19.6 kN. A good answer shows the area, the multiplication, and the kN conversion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same cylinder (50 mm bore) has a 28 mm rod and works at 10 MPa. Work out its retract force.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Annulus area = π ÷ 4 × (50² − 28²) = π ÷ 4 × 1,716 = 1,347.7 mm². Step 2: Retract force = 10 × 1,347.7 = 13,477 N, about 13.5 kN. Step 3: Retract is weaker than extend (19.6 kN) because the rod takes up area. A good answer shows the annulus and the comparison.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A cylinder has a 2 in bore and works at 2,000 psi. Work out its extend force in lbf.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area A = π ÷ 4 × 2² = 3.14 in². Step 2: Force F = 2,000 × 3.14 = 6,283 lbf. A good answer shows the area and the 6,283 lbf result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A cylinder with a 50 mm bore is fed 20 L/min of oil. Work out its extend speed in mm/s, and how long a 200 mm stroke takes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flow = 20 L/min = 333,333 mm³/s. Step 2: Area = 1,963.5 mm², so speed v = 333,333 ÷ 1,963.5 = 169.8 mm/s. Step 3: A 200 mm stroke takes 200 ÷ 169.8 = 1.18 s. A good answer shows the unit conversion, the speed, and the stroke time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A cylinder with a 2 in bore is fed 10 GPM. Work out its extend speed in in/min and in in/s.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flow = 10 GPM × 231 in³/gal = 2,310 in³/min. Step 2: Area = 3.14 in², so speed = 2,310 ÷ 3.14 = 735 in/min. Step 3: In inches per second that is 735 ÷ 60 = 12.3 in/s. A good answer shows the GPM conversion and both speeds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A press needs 50 kN of force at 16 MPa. What bore diameter is needed? Show your working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Needed area A = F ÷ P = 50,000 N ÷ 16 N/mm² = 3,125 mm². Step 2: Diameter d = √(4A ÷ π) = √(4 × 3,125 ÷ 3.1416) = √3,979 ≈ 63 mm. Step 3: A 63 mm bore gives 49.9 kN, so pick a 63 mm bore (or the next size up for margin). A good answer shows the area, the diameter, and the check.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does Pascal's law say?",
      "choices": [
        "Pressure increases with depth",
        "Pressure applied to a confined fluid is transmitted equally in all directions",
        "Flow rate equals pressure times area",
        "Oil is incompressible only when hot"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pascal's law is the foundation of hydraulics: pressure is shared equally throughout the fluid. (a) describes hydrostatic pressure, not Pascal's law. (c) is wrong: flow and pressure are different quantities. (d) is wrong: oil is effectively incompressible at any normal temperature."
    },
    {
      "q": "A hydraulic cylinder has a 50 mm bore and works at 10 MPa. What is its extend force, approximately?",
      "choices": [
        "19.6 kN",
        "13.5 kN",
        "49.9 kN",
        "1.96 kN"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Area is 1,963.5 mm², and 10 × 1,963.5 = 19,635 N ≈ 19.6 kN. (b) is the retract force with a 28 mm rod. (c) is the force of a 63 mm bore at 16 MPa. (d) is ten times too small."
    },
    {
      "q": "A cylinder has a 2 in bore and works at 2,000 psi. What is its extend force?",
      "choices": [
        "3,140 lbf",
        "6,283 lbf",
        "12,566 lbf",
        "628 lbf"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Area is 3.14 in², and 2,000 × 3.14 = 6,283 lbf. (a) uses the diameter instead of the area. (c) doubles the area. (d) is ten times too small."
    },
    {
      "q": "A 50 mm bore cylinder with a 28 mm rod works at 10 MPa. What is its retract force, approximately?",
      "choices": [
        "19.6 kN",
        "13.5 kN",
        "6.3 kN",
        "49.9 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The annulus area is 1,347.7 mm², and 10 × 1,347.7 = 13,477 N ≈ 13.5 kN. (a) is the extend force, using the full bore area. (c) has no basis. (d) is the force of a 63 mm bore at 16 MPa."
    },
    {
      "q": "A cylinder with a 50 mm bore is fed 20 L/min. What is its extend speed, approximately?",
      "choices": [
        "169.8 mm/s",
        "100 mm/s",
        "333 mm/s",
        "20 mm/s"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Flow is 333,333 mm³/s and area is 1,963.5 mm², so v = 169.8 mm/s. (b) is a round guess. (c) is roughly double. (d) mistakes the flow rate for the speed."
    },
    {
      "q": "A cylinder with a 2 in bore is fed 10 GPM. What is its extend speed, approximately?",
      "choices": [
        "231 in/min",
        "735 in/min",
        "1,000 in/min",
        "61 in/min"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flow is 2,310 in³/min and area is 3.14 in², so v = 735 in/min. (a) is the flow in cubic inches, not the speed. (c) is a round guess. (d) is the speed in feet per minute (61.3 ft/min), not inches per minute."
    },
    {
      "q": "What does the relief valve do in a hydraulic system?",
      "choices": [
        "It controls the cylinder's direction",
        "It limits the maximum pressure by dumping excess oil back to the tank",
        "It filters the oil",
        "It pumps the oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The relief valve is the system's pressure limit and safety device. (a) is a directional control valve's job. (c) is the filter's job. (d) is the pump's job."
    },
    {
      "q": "Why must you never search for a hydraulic leak with your hand?",
      "choices": [
        "Because the oil is hot",
        "Because a pinhole leak at high pressure can inject oil through the skin",
        "Because the oil is electrically live",
        "Because the oil will stain your skin"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High-pressure oil from a pinhole leak can penetrate skin and cause a serious injection injury. (a) is a lesser hazard — temperature is not the main danger. (c) is wrong: hydraulic oil is not electrically live. (d) is trivial compared with injection injury."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Hydraulics Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain Pascal's law in plain words.</p>\n<p><strong>Key terms:</strong> Pascal's law · Pressure · Flow rate · Cylinder · Bore · Rod · Annulus · Pump.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain Pascal's law in plain words.</li>\n<li>Work out cylinder force from pressure and bore area.</li>\n<li>Work out retract force using the annulus area.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
