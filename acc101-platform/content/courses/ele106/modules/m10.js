// ele106 - Module 10: Health Care & Special Occupancies
module.exports = {
  "number": 10,
  "slug": "health-care-special-occupancies",
  "title": "Health Care & Special Occupancies",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain Article 517: patient care spaces and the essential electrical system.",
    "State the receptacle requirements for critical care and general care areas.",
    "Explain the three branches of the essential electrical system.",
    "Explain isolated power and GFCI in wet procedure locations.",
    "Identify other special occupancies: assembly, theaters, and garages."
  ],
  "sections": [
    {
      "heading": "Health Care Facilities: Article 517",
      "html": "<p>A hospital is the most demanding commercial occupancy in the Code. Article 517 covers health care facilities because the patients in them cannot protect themselves: a patient connected to a monitor or a ventilator depends on the power staying on, and a patient in a wet procedure location is more vulnerable to shock than a healthy person. The article adds rules on top of the general rules — on receptacles, on grounding, on the essential electrical system, and on the wiring methods.</p><p>The key idea is the patient care space: the area around a patient's bed where care is given. Patient care spaces are divided into categories by the kind of care: general care areas, critical care areas (intensive care), and wet procedure locations (operating rooms and procedure rooms where the patient is wet). Each category has its own receptacle and protection requirements, and the requirements get stricter as the care gets more critical.</p><p>The wiring in a health care facility must also be redundant: the grounding must be redundant, the receptacles must be hospital-grade, and the power must come from an essential electrical system that keeps working when the normal power fails. A hospital's electrical system is designed so that no single failure can take out the care of a patient.</p><div class=\"callout\"><strong>Key idea:</strong> Article 517 covers health care because patients cannot protect themselves. The rules get stricter as the care gets more critical — and the power must never fail.</div>"
    },
    {
      "heading": "Receptacles in Patient Care Spaces (517.18)",
      "html": "<p>Section 517.18 sets the receptacle requirements for patient care spaces. Each patient bed location in a critical care area must have a minimum of 14 receptacles, and each bed location in a general care area must have a minimum of 8 receptacles. The receptacles are split between the branches of the essential electrical system, so that losing one branch does not leave a bed without power.</p><p>The receptacles must be hospital-grade — listed for hospital use, with a stronger ground contact and a more durable construction than a standard receptacle. A hospital-grade receptacle is marked with a green dot. The grounding must also be redundant: 517.13 requires an insulated equipment grounding conductor in addition to the metal raceway or cable armor, so that the ground path survives even if the raceway is damaged.</p><p>Patient bathrooms need GFCI protection (517.21), and receptacles in pediatric locations must be tamper-resistant. The receptacle count is a minimum — a modern hospital bed with a monitor, a ventilator, an infusion pump, and a bed control may need more than the minimum, and the design provides it.</p><ul><li>Critical care: minimum 14 receptacles per bed location. General care: minimum 8 receptacles per bed location (517.18).</li><li>Hospital-grade receptacles (green dot) and redundant grounding (517.13).</li><li>GFCI in patient bathrooms (517.21); tamper-resistant receptacles in pediatric locations.</li></ul>"
    },
    {
      "heading": "The Essential Electrical System (517.30)",
      "html": "<p>The essential electrical system is the hospital's emergency power system, and it has three branches. The life safety branch serves the loads that keep people safe: egress lighting, exit signs, fire alarms, and the power for elevators. The critical branch serves the loads that keep patients alive: the receptacles and equipment in patient care areas. The equipment branch serves the loads that keep the hospital running: HVAC, medical gas systems, and the equipment that supports the other two branches.</p><p>The three branches are fed from the alternate source — usually a generator — through separate transfer switches, so that a fault in one branch does not affect the others. The life safety and critical branches transfer within 10 seconds (Article 700); the equipment branch may transfer later, because its loads can wait a little longer.</p><p>The essential electrical system must be tested regularly, and the test records must be kept. A hospital that has never tested its generator under load is a hospital that may not have power when it is needed most — and the Joint Commission, which accredits hospitals, checks the test records.</p><div class=\"callout\"><strong>Key idea:</strong> Essential electrical system: life safety branch (egress, alarms), critical branch (patient care), equipment branch (HVAC, medical gas). Separate transfer switches so one fault cannot take out the others.</div>"
    },
    {
      "heading": "Wet Procedure Locations, Isolated Power & Other Special Occupancies",
      "html": "<p>A wet procedure location is a room where the patient is wet — an operating room, a delivery room, or a procedure room where fluids are used. A wet patient has lower skin resistance, so a small leakage current that a dry person would not feel can be dangerous. Section 517.19 requires wet procedure locations to have either an isolated power system or GFCI protection for the receptacles.</p><p>An isolated power system is a system with no direct connection to ground: the power comes from an isolation transformer, and the first fault to ground does not cause a shock — it only sounds an alarm on the line isolation monitor (LIM). The LIM watches for leakage and alarms before the leakage becomes dangerous, so the surgical team can finish the procedure safely. The system is the standard in operating rooms.</p><p>GFCI protection is the alternative: a GFCI receptacle or breaker that trips on a ground fault. Both methods protect the patient; the isolated power system has the advantage that it alarms instead of tripping, so the power stays on during a procedure.</p><ul><li>Wet procedure locations (517.19): isolated power system or GFCI protection.</li><li>Isolated power: an isolation transformer with a line isolation monitor (LIM) that alarms on the first fault instead of tripping.</li><li>GFCI is the alternative — it trips on a ground fault.</li></ul><p>Health care is not the only special occupancy. Article 518 covers assembly occupancies — theaters, auditoriums, and places where people gather — and it requires the wiring to be in metal raceways or metal-clad cable in most cases, because a fire in a crowded room is far more dangerous than a fire in an empty one. Article 520 covers theaters specifically: the stage, the dimmers, and the footlights, with rules for the portable equipment that a theater uses.</p><p>Article 511 covers commercial garages: repair garages and parking garages where gasoline vapor may be present. The area near the floor is a Class I, Division 2 location, because gasoline vapor is heavier than air and collects at the floor. Equipment in that area must be suitable for the classification, and the wiring must be in a method permitted for the location.</p><p>Each special occupancy has its own article, and the electrician's job is to know which article applies to the building in front of them. The general rules of Chapters 1–4 always apply; the special-occupancy articles add rules on top of them.</p><ul><li>Assembly (518): metal raceways or MC cable in most cases. Theaters (520): stage, dimmers, portable equipment.</li><li>Commercial garages (511): the area near the floor is Class I, Division 2 — gasoline vapor is heavier than air.</li><li>Special-occupancy articles add rules on top of Chapters 1–4; they never replace them.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Article 517: health care — patient care spaces, essential electrical system, redundant grounding.</li><li>Receptacles (517.18): critical care minimum 14 per bed, general care minimum 8 per bed. Hospital-grade (green dot), redundant ground (517.13).</li><li>Essential electrical system: life safety, critical, and equipment branches — separate transfer switches.</li><li>Wet procedure locations (517.19): isolated power with a line isolation monitor, or GFCI protection.</li><li>Other special occupancies: assembly (518), theaters (520), commercial garages (511) — each adds rules on top of Chapters 1–4.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Installing a standard receptacle at a hospital bed. Patient care receptacles must be hospital-grade, and the count is a minimum — 14 in critical care, 8 in general care.</div><div class=\"callout\"><strong>Common mistake:</strong> Wiring a wet procedure location with ordinary receptacles and no protection. 517.19 requires an isolated power system or GFCI protection.</div><p><strong>Ready-to-Work link:</strong> If you can name the three essential-electrical-system branches, the receptacle counts, and the wet-procedure-location rule, you have this module. Module 11 covers reading commercial plans and specs.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Patient care space",
      "def": "The area around a patient's bed where care is given."
    },
    {
      "term": "General care area",
      "def": "A patient care area for routine care."
    },
    {
      "term": "Critical care area",
      "def": "A patient care area for intensive care."
    },
    {
      "term": "Wet procedure location",
      "def": "A room where the patient is wet, such as an operating room (517.19)."
    },
    {
      "term": "517.18",
      "def": "Receptacle requirements: critical care minimum 14 per bed, general care minimum 8 per bed."
    },
    {
      "term": "Hospital-grade receptacle",
      "def": "A receptacle listed for hospital use, marked with a green dot."
    },
    {
      "term": "517.13",
      "def": "Redundant grounding in patient care areas: an insulated equipment grounding conductor plus the raceway."
    },
    {
      "term": "Essential electrical system",
      "def": "The hospital's emergency power system, with life safety, critical, and equipment branches (517.30)."
    },
    {
      "term": "Life safety branch",
      "def": "The branch serving egress lighting, exit signs, and fire alarms."
    },
    {
      "term": "Critical branch",
      "def": "The branch serving receptacles and equipment in patient care areas."
    },
    {
      "term": "Equipment branch",
      "def": "The branch serving HVAC, medical gas, and supporting equipment."
    },
    {
      "term": "Isolated power system",
      "def": "A system fed by an isolation transformer, with a line isolation monitor that alarms on the first fault."
    },
    {
      "term": "Line isolation monitor (LIM)",
      "def": "A device that watches an isolated power system for leakage and alarms before it becomes dangerous."
    },
    {
      "term": "Article 518",
      "def": "Assembly occupancies — theaters, auditoriums, places where people gather."
    },
    {
      "term": "Article 511",
      "def": "Commercial garages — the area near the floor is Class I, Division 2."
    }
  ],
  "video": {
    "title": "You'll Finally Understand Breakers & GFCIs — and Which One Saves You",
    "embedUrl": "https://www.youtube.com/embed/hMiksQLHzMA",
    "note": "This video explains what breakers and GFCIs each protect against — and which one saves you. In a hospital, that distinction is life or death: a GFCI protects the patient, and the essential electrical system keeps the power on. Watch it, then explain why a wet procedure location needs an isolated power system or GFCI protection.",
    "more": [
      {
        "title": "How a $15 Outlet Saves You From Electrocution",
        "url": "https://www.youtube.com/watch?v=rQJyvGRvt5Y"
      },
      {
        "title": "How to Wire a GFCI Outlet from a Standard Outlet",
        "url": "https://www.youtube.com/watch?v=csiik8GBVpc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A critical care bed location has 10 receptacles. Is that enough?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 517.18 requires a minimum of 14 receptacles per bed location in critical care areas. Step 2: Ten is below the minimum. Step 3: At least four more receptacles are required.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A general care bed location has 8 receptacles. Is that enough?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 517.18 requires a minimum of 8 receptacles per bed location in general care areas. Step 2: Eight meets the minimum. Step 3: Yes — though the design may provide more for the equipment the bed will serve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An operating room uses an isolated power system. A fault to ground occurs. What happens?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The first fault to ground does not trip the power — the system is isolated from ground. Step 2: The line isolation monitor (LIM) sounds an alarm. Step 3: The surgical team can finish the procedure safely, and the fault is repaired after.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A hospital's generator feeds the life safety, critical, and equipment branches through a single transfer switch. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The three branches must have separate transfer switches. Step 2: A single transfer switch means a fault in one branch can affect the others. Step 3: The fix is a separate transfer switch for each branch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A repair garage has electrical equipment installed 12 inches above the floor. What classification applies?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gasoline vapor is heavier than air and collects near the floor. Step 2: The area near the floor is a Class I, Division 2 location (Article 511). Step 3: The equipment must be suitable for Class I, Division 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hospital receptacle has a green dot on its face. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The green dot marks a hospital-grade receptacle. Step 2: It is listed for hospital use, with a stronger ground contact and more durable construction. Step 3: It is required in patient care areas.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The minimum number of receptacles per bed location in a critical care area is:",
      "choices": [
        "6",
        "8",
        "10",
        "14"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 517.18 requires a minimum of 14 receptacles in critical care. (a), (b), and (c) 6, 8, and 10 are below the minimum — 8 is the general-care minimum."
    },
    {
      "q": "The minimum number of receptacles per bed location in a general care area is:",
      "choices": [
        "4",
        "6",
        "8",
        "14"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 517.18 requires a minimum of 8 receptacles in general care. (a) and (b) 4 and 6 are below the minimum. (d) 14 is the critical-care minimum."
    },
    {
      "q": "A hospital-grade receptacle is marked with:",
      "choices": [
        "A red dot",
        "A green dot",
        "A blue dot",
        "No marking"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hospital-grade receptacles are marked with a green dot. (a) and (c) Red and blue dots are not the hospital-grade marking. (d) The marking is required."
    },
    {
      "q": "The three branches of the essential electrical system are:",
      "choices": [
        "Life safety, critical, and equipment",
        "Normal, emergency, and optional",
        "A, B, and C",
        "Lighting, receptacle, and motor"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 517.30: life safety, critical, and equipment branches. (b) Normal, emergency, and optional are the system types, not the branches. (c) A, B, and C are phases. (d) Lighting, receptacle, and motor are load types."
    },
    {
      "q": "A wet procedure location requires:",
      "choices": [
        "No special protection",
        "An isolated power system or GFCI protection",
        "AFCI protection only",
        "A larger panelboard"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 517.19 requires an isolated power system or GFCI protection. (a) Special protection is required. (c) AFCI is not the rule for wet locations. (d) A larger panelboard does not protect the patient."
    },
    {
      "q": "The line isolation monitor (LIM):",
      "choices": [
        "Trips the power on the first fault",
        "Alarms on the first fault so the procedure can continue",
        "Measures the voltage",
        "Controls the generator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The LIM alarms on the first fault instead of tripping. (a) Tripping on the first fault would cut power during surgery. (c) It monitors leakage, not voltage. (d) It does not control the generator."
    },
    {
      "q": "Redundant grounding in patient care areas is required by:",
      "choices": [
        "517.13",
        "517.18",
        "517.19",
        "517.30"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 517.13 requires an insulated equipment grounding conductor plus the raceway. (b) 517.18 is receptacles. (c) 517.19 is wet procedure locations. (d) 517.30 is the essential electrical system."
    },
    {
      "q": "In a commercial garage, the area near the floor is classified as:",
      "choices": [
        "Ordinary",
        "Class I, Division 1",
        "Class I, Division 2",
        "Class II, Division 1"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 511: the area near the floor is Class I, Division 2, because gasoline vapor is heavier than air. (a) It is not an ordinary location. (b) Division 1 would mean the hazard is present under normal conditions. (d) Gasoline vapor is Class I, not Class II."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Health Care &amp; Special Occupancies: Quick Reference</h3>\n<p><strong>Core idea:</strong> Patients cannot protect themselves, so the Code protects them: more receptacles, hospital-grade devices, redundant grounding, and power that never fails.</p>\n<p><strong>Receptacles (517.18):</strong> Critical care minimum 14 per bed · general care minimum 8 per bed · hospital-grade (green dot) · redundant ground (517.13).</p>\n<p><strong>Essential electrical system (517.30):</strong> Life safety branch · critical branch · equipment branch · separate transfer switches.</p>\n<p><strong>Wet procedure locations (517.19):</strong> Isolated power system with a line isolation monitor, or GFCI protection.</p>\n<p><strong>Other occupancies:</strong> Assembly 518 · theaters 520 · commercial garages 511 (floor area Class I, Division 2).</p>\n<p><strong>Self-check:</strong> State the receptacle counts, the three branches, and the wet-procedure-location rule.</p>\n"
};
