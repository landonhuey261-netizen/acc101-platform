// ele104 - Module 2: NEC Definitions & General Requirements (Articles 90, 100, 110)
module.exports = {
  "number": 2,
  "slug": "nec-definitions-general-requirements",
  "title": "NEC Definitions & General Requirements (Articles 90, 100, 110)",
  "estTime": "3–4 hours",
  "objectives": [
    "Define the key Article 100 terms: branch circuit, feeder, service, outlet, device, and utilization equipment.",
    "Explain the difference between grounded, grounding, and ungrounded conductors.",
    "Apply Article 110 requirements for approved equipment, listing, and labeling.",
    "Explain working-space and dedicated-space rules for electrical equipment.",
    "Describe how Article 110.14 governs conductor terminations and temperature ratings."
  ],
  "sections": [
    {
      "heading": "Why Definitions Decide the Answer",
      "html": "<p>Most code arguments are really definition arguments. If two electricians disagree about whether a run of wire is a feeder or a branch circuit, they will get different answers from the Code — because Article 215 governs feeders and Article 210 governs branch circuits. Article 100 exists so everyone uses the same words the same way, and on an exam the definitions are often the question hiding inside the question.</p><p>A branch circuit is the circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). A feeder is all circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device. The service is the conductors and equipment that deliver energy from the utility to the premises wiring system. Get those three right and half of Articles 210, 215, and 230 falls into place.</p><p>Other everyday terms have precise meanings too. An outlet is a point on the wiring system where current is taken to supply utilization equipment. A device is a unit of an electrical system, other than a conductor, that carries or controls electric energy as its principal function — a switch or receptacle is a device; a luminaire is utilization equipment. A receptacle outlet is an outlet where one or more receptacles are installed.</p><div class=\"callout\"><strong>Key idea:</strong> When a Code question feels confusing, check the Article 100 definition first. The definition usually decides which article applies.</div>"
    },
    {
      "heading": "Grounded, Grounding, and Ungrounded — Three Different Words",
      "html": "<p>These three words sound alike and mean different things, and mixing them up is one of the most common beginner errors. The grounded conductor is the system conductor that is intentionally grounded — in a home, the neutral (white) conductor. The grounding conductor is the conductor that connects equipment to ground — the bare or green equipment grounding conductor. The ungrounded conductor is any conductor that is not intentionally grounded — the hot (black or red) conductor.</p><p>The grounded (neutral) conductor carries normal return current. The equipment grounding conductor normally carries no current at all; it only carries fault current long enough to trip the breaker. That is why the two must be kept separate everywhere except at the service, where the main bonding jumper connects them — a rule covered in depth in Module 5.</p><p>Article 200 covers the use and identification of the grounded conductor: it must be identified (white or gray insulation, or white marking), and it must not be used as an equipment grounding conductor. Article 250 covers grounding and bonding. Keeping the two articles straight keeps the two conductors straight.</p><ul><li>Grounded conductor = neutral (white/gray); carries normal return current.</li><li>Grounding conductor = bare or green; carries fault current only.</li><li>Ungrounded conductor = hot (black/red); not intentionally grounded.</li></ul>"
    },
    {
      "heading": "Article 110: Approved, Listed, and Labeled",
      "html": "<p>Article 110.2 requires that conductors and equipment be approved — acceptable to the AHJ. Approval usually means the equipment is listed by a recognized testing laboratory such as UL and labeled for its use. A label is not decoration: it tells you the ratings, the permitted uses, and the conditions the listing depends on, and installing equipment contrary to its listing violates 110.3(B), which requires equipment to be installed and used in accordance with its listing and labeling.</p><p>That rule has everyday consequences. A breaker listed for one panel type may not be listed for another. A luminaire listed for dry locations may not go in a damp one. A cable listed for indoor use may not go underground. When the label and the job disagree, the label wins — and the fix is different equipment, not a workaround.</p><p>Article 110 also covers mechanical execution of work (110.12): neat and workmanlike installation, no damaged conductors, no abandoned cable left energized. It is the article an inspector reaches for when the work is sloppy even if no specific rule is broken.</p><div class=\"callout\"><strong>Key idea:</strong> 110.3(B): install and use equipment exactly as its listing and labeling say. The label is part of the rule.</div>"
    },
    {
      "heading": "Working Space and Dedicated Space",
      "html": "<p>Article 110.26 requires working space around electrical equipment that is likely to need examination, adjustment, servicing, or maintenance while energized. For equipment operating at 1000 volts or less, the clear working space is at least 30 inches wide (or the width of the equipment, whichever is greater), 36 inches deep in most residential and commercial cases (Condition 1), and 6 feet 6 inches high. The space must be kept clear — it is not storage.</p><p>The depth depends on the conditions: 36 inches when exposed live parts are on one side and the other side is grounded or there are no live parts, 42 inches when live parts face each other or a grounded surface in some configurations, and 48 inches for the highest-exposure condition. The table in 110.26(A)(1) gives the exact depths; the point to remember is that the depth grows as the exposure grows.</p><p>Dedicated space, 110.26(E), is the space directly above and below a panelboard or switchboard, equal to its width and depth, from the floor to 6 feet above the equipment (or to the structural ceiling, whichever is lower). No piping, ducts, or foreign systems may run through it. The rule exists so a leaking pipe cannot drip onto live busbars.</p><ul><li>Working space: 30 in. wide minimum, 36 in. deep (Condition 1), 6 ft 6 in. high; keep it clear.</li><li>Depth grows with exposure: 36 / 42 / 48 in. per Table 110.26(A)(1).</li><li>Dedicated space: above and below panelboards; no foreign piping or ducts.</li></ul>"
    },
    {
      "heading": "Terminations and Temperature Ratings (110.14)",
      "html": "<p>Article 110.14(C) is the rule behind many conductor-sizing mistakes. A conductor has a temperature rating (60°C, 75°C, or 90°C), and so does the equipment it terminates in. The lowest rating in the chain governs. Most breakers and panel terminations are rated 75°C, so even if you pull 90°C-rated THHN, you size the conductor using the 75°C column of Table 310.16 unless the equipment is marked otherwise.</p><p>The 90°C column is not wasted: it is used for derating calculations (adjustment and correction factors), and the final derated ampacity is then compared against the termination limit. The correct sequence is to derate using the 90°C ampacity, then check that the result does not exceed the 75°C (or 60°C) termination ampacity — Module 4 works this step by step.</p><p>Torque matters too. Section 110.14(D) requires terminations to be tightened to the manufacturer's torque values, and 110.14(A) requires terminals to be identified for the conductor material — copper, aluminum, or both. A loose lug is a hot spot, and a hot spot is a fire that starts slowly.</p><div class=\"callout\"><strong>Common mistake:</strong> Sizing a conductor from the 90°C column because the wire is rated 90°C, when the breaker is rated 75°C. The termination rating governs.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Branch circuit",
      "def": "The circuit conductors between the final overcurrent device and the outlet(s)."
    },
    {
      "term": "Feeder",
      "def": "All circuit conductors between the service equipment (or other source) and the final branch-circuit overcurrent device."
    },
    {
      "term": "Service",
      "def": "The conductors and equipment that deliver energy from the serving utility to the premises wiring system."
    },
    {
      "term": "Outlet",
      "def": "A point on the wiring system where current is taken to supply utilization equipment."
    },
    {
      "term": "Device",
      "def": "A unit of an electrical system, other than a conductor, that carries or controls electric energy — e.g., a switch or receptacle."
    },
    {
      "term": "Utilization equipment",
      "def": "Equipment that uses electric energy for some other purpose, such as a luminaire or an appliance."
    },
    {
      "term": "Grounded conductor",
      "def": "A system conductor that is intentionally grounded — in a home, the neutral."
    },
    {
      "term": "Grounding conductor",
      "def": "A conductor used to connect equipment to ground — the bare or green equipment grounding conductor."
    },
    {
      "term": "Ungrounded conductor",
      "def": "A conductor that is not intentionally grounded — a hot conductor."
    },
    {
      "term": "Approved",
      "def": "Acceptable to the Authority Having Jurisdiction."
    },
    {
      "term": "Listed",
      "def": "Equipment included on a list published by a recognized testing laboratory such as UL."
    },
    {
      "term": "Labeled",
      "def": "Equipment bearing a label from a recognized testing laboratory showing its ratings and permitted uses."
    },
    {
      "term": "Working space",
      "def": "The clear space required around equipment likely to need servicing while energized (110.26)."
    },
    {
      "term": "Dedicated space",
      "def": "The space above and below panelboards kept free of foreign piping and ducts (110.26(E))."
    },
    {
      "term": "Termination temperature rating",
      "def": "The temperature rating of the equipment a conductor terminates in; the lowest rating in the chain governs (110.14(C))."
    }
  ],
  "video": {
    "title": "120V 240V Electricity explained - Split phase 3 wire electrician",
    "embedUrl": "https://www.youtube.com/embed/fJeRabV5hNU",
    "note": "This video walks through a 120/240-volt split-phase service and names the hot, neutral, and ground conductors as it goes. Pause each time a conductor is named and say whether it is grounded, grounding, or ungrounded.",
    "more": [
      {
        "title": "You'll Finally Understand Breakers & GFCIs — and Which One Saves You",
        "url": "https://www.youtube.com/watch?v=hMiksQLHzMA"
      },
      {
        "title": "You'll Finally Understand Why Power Lines Have Three Wires",
        "url": "https://www.youtube.com/watch?v=BxeoCAC5t3Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A run of wire goes from the main panel to a subpanel, then from the subpanel to a receptacle. Which part is the feeder and which is the branch circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The run from the main panel to the subpanel is the feeder — it ends at the subpanel, before the final branch-circuit overcurrent device. Step 2: The run from the subpanel's breaker to the receptacle is the branch circuit — it runs from the final overcurrent device to the outlet. Step 3: Article 215 governs the feeder; Article 210 governs the branch circuit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the three conductors in a 120-volt residential circuit and say which Article 100 word describes each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The black wire is the ungrounded (hot) conductor. Step 2: The white wire is the grounded (neutral) conductor. Step 3: The bare or green wire is the grounding (equipment grounding) conductor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A breaker is listed for use in a specific panel brand, and the job's panel is a different brand. Can you use it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No, not if the listing does not cover that panel. Step 2: Section 110.3(B) requires equipment to be installed and used in accordance with its listing and labeling. Step 3: The fix is a breaker listed for the panel on the job.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is the minimum clear working space in front of a residential panel under Condition 1, and what may be stored there?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At least 30 inches wide (or the width of the equipment, whichever is greater), 36 inches deep, and 6 feet 6 inches high. Step 2: Nothing may be stored there — the working space must be kept clear. Step 3: The rule is 110.26; the depth comes from Table 110.26(A)(1), Condition 1.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A conductor is 90°C-rated THHN and the breaker termination is rated 75°C. Which temperature column do you use to size the conductor for the load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 75°C column governs the final size, because the lowest rating in the chain governs (110.14(C)). Step 2: The 90°C column may be used for derating calculations. Step 3: The derated ampacity must not exceed the 75°C ampacity of the conductor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A pipe runs directly above a panelboard inside its dedicated space. Is that allowed, and why does the rule exist?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — 110.26(E) prohibits foreign piping, ducts, and similar systems in the dedicated space above and below a panelboard. Step 2: The dedicated space is the width and depth of the equipment, from the floor to 6 feet above it (or the structural ceiling). Step 3: The rule exists so a leaking pipe cannot drip water onto live busbars.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A branch circuit is defined as the conductors between:",
      "choices": [
        "The utility transformer and the meter",
        "The final overcurrent device and the outlet(s)",
        "The service equipment and the subpanel",
        "Two receptacles on the same wall"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A branch circuit runs from the final overcurrent device to the outlet(s). (a) The utility-to-meter run is service conductors. (c) Service equipment to subpanel is a feeder. (d) Receptacle-to-receptacle wiring is part of a branch circuit, not its definition."
    },
    {
      "q": "The grounded conductor in a home is the:",
      "choices": [
        "Black hot wire",
        "Bare equipment grounding conductor",
        "White neutral conductor",
        "Green grounding wire"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The grounded conductor is the intentionally grounded neutral, identified white or gray. (a) The black wire is ungrounded. (b) and (d) The bare or green wire is the grounding conductor, which normally carries no current."
    },
    {
      "q": "Under 110.3(B), equipment must be installed and used:",
      "choices": [
        "However the installer prefers",
        "In accordance with its listing and labeling",
        "Only in dry locations",
        "Without regard to the manufacturer's instructions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 110.3(B) requires installation per the listing and labeling. (a) Installer preference does not override the listing. (c) The listing itself states the permitted locations. (d) The manufacturer's instructions are part of the listing."
    },
    {
      "q": "The minimum clear working-space depth in front of a panel under Condition 1 is:",
      "choices": [
        "24 inches",
        "30 inches",
        "36 inches",
        "48 inches"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Condition 1 depth is 36 inches per Table 110.26(A)(1). (a) 24 inches is too shallow. (b) 30 inches is the minimum width, not the depth. (d) 48 inches is the Condition 3 depth."
    },
    {
      "q": "The minimum working-space width in front of electrical equipment is:",
      "choices": [
        "12 inches",
        "24 inches",
        "30 inches or the width of the equipment, whichever is greater",
        "48 inches"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 110.26(A)(2) requires 30 inches or the equipment width, whichever is greater. (a) and (b) 12 and 24 inches are too narrow. (d) 48 inches is not the width rule."
    },
    {
      "q": "Dedicated space above a panelboard must be kept free of:",
      "choices": [
        "The panelboard itself",
        "Foreign piping, ducts, and similar systems",
        "Conduit entering the panel",
        "The working-space floor marking"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 110.26(E) prohibits foreign systems in the dedicated space. (a) The panelboard itself obviously occupies the space. (c) Conduit serving the panel may enter it. (d) Floor marking is not a foreign system."
    },
    {
      "q": "A 90°C-rated conductor terminates in a breaker rated 75°C. The conductor is sized using:",
      "choices": [
        "The 90°C column, because the wire is rated 90°C",
        "The 75°C column, because the lowest rating in the chain governs",
        "The 60°C column, to be safe",
        "Whichever column gives the smallest wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Per 110.14(C), the termination rating governs. (a) The wire rating alone does not govern. (c) 60°C is not required when the termination is 75°C. (d) The smallest wire is not the rule — the rating is."
    },
    {
      "q": "Section 110.14(D) requires terminations to be tightened to:",
      "choices": [
        "Hand-tight plus a quarter turn",
        "The manufacturer's torque values",
        "As tight as possible",
        "The torque used on the last job"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 110.14(D) requires the manufacturer's torque values. (a) Hand-tight is not a torque value. (c) Over-tightening damages the terminal. (d) The last job's torque is not the specification for this equipment."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Definitions &amp; General Requirements: Quick Reference</h3>\n<p><strong>Core idea:</strong> Definitions decide which article applies. Branch circuit = final overcurrent device to outlet; feeder = source to final branch-circuit overcurrent device; service = utility to premises wiring.</p>\n<p><strong>Three conductors:</strong> Ungrounded = hot (black/red) · Grounded = neutral (white/gray), carries return current · Grounding = bare/green, carries fault current only.</p>\n<p><strong>Article 110:</strong> Equipment must be approved and used per its listing and labeling (110.3(B)); work must be neat and workmanlike (110.12).</p>\n<p><strong>Working space (110.26):</strong> 30 in. wide (or equipment width) × 36 in. deep (Condition 1) × 6 ft 6 in. high; keep clear. Dedicated space (110.26(E)): no foreign piping or ducts above/below panelboards.</p>\n<p><strong>Terminations (110.14):</strong> Lowest temperature rating governs (usually 75°C at breakers); tighten to the manufacturer's torque.</p>\n<p><strong>Self-check:</strong> Without looking, define feeder, branch circuit, grounded conductor, and grounding conductor, and state the Condition 1 working-space depth.</p>\n"
};
