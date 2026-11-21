// egr103 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "reading-a-drawing-l-bracket",
    "title": "Reading a Drawing: The L-Bracket",
    "introHtml": "<p><strong>Scenario — a drawing arrives from the design office.</strong> You are the maker. The drawing shows an L-bracket: the base is 60 mm long and 40 mm wide, the upright is 40 mm tall, the material is 10 mm thick throughout, and there are two holes in the base and two in the upright. Your task: read the drawing, work out the sizes and tolerances, and decide whether a part you are given matches it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before measuring or handling the part: check it for sharp edges and burrs, and wear safety glasses if you are going to test-fit it.</p><p><strong>The drawing says:</strong> Base 60 mm × 40 mm. Upright 40 mm tall. Thickness 10 mm. Base holes Ø10.0 ± 0.1 mm. Upright holes Ø8.0 ± 0.1 mm. Overall length 60.0 ± 0.2 mm. The drawing is at a scale of 1:2. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "COMPUTED — The base is 60.0 ± 0.2 mm long. What is the maximum allowed length in mm? (Enter the number, to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_max",
            "expected": 60.2,
            "hint": "Maximum = 60.0 + 0.2 = 60.2 mm."
          }
        ]
      },
      {
        "label": "COMPUTED — The base is 60.0 ± 0.2 mm long. What is the minimum allowed length in mm? (Enter the number, to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_min",
            "expected": 59.8,
            "hint": "Minimum = 60.0 − 0.2 = 59.8 mm."
          }
        ]
      },
      {
        "label": "COMPUTED — A base hole is Ø10.0 ± 0.1 mm. What is the largest hole allowed, in mm? (Enter the number, to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_hole_max",
            "expected": 10.1,
            "hint": "Largest = 10.0 + 0.1 = 10.1 mm."
          }
        ]
      },
      {
        "label": "COMPUTED — The drawing is at a scale of 1:2. A line on the drawing measures 25 mm. How long is the real part in mm? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_scale",
            "expected": 50,
            "hint": "At 1:2 the drawing is half size, so the real part is 25 × 2 = 50 mm."
          }
        ]
      },
      {
        "label": "DECISION — A part measures 60.3 mm long. The drawing says 60.0 ± 0.2 mm. What is the verdict? 1) Accept it 2) Reject it — it is out of tolerance 3) Accept it if it looks fine 4) Re-measure in inches and accept it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_verdict",
            "expected": 2,
            "hint": "Maximum is 60.2 mm and 60.3 mm is bigger, so the part is out of tolerance and must be rejected. Looks (3) and units (4) do not change the numbers."
          }
        ]
      },
      {
        "label": "DECISION — Which view shows a hole’s diameter correctly? 1) The view where the hole looks like two parallel lines 2) The view where the hole looks like a circle 3) The view where the hole is hidden 4) Any view — it does not matter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_view",
            "expected": 2,
            "hint": "Dimension a feature on the view that shows its true shape — for a hole, the circle view. The two-lines view shows depth, not diameter."
          }
        ]
      }
    ]
  },
  {
    "id": "solidworks-bracket-plan",
    "title": "SOLIDWORKS Bracket: Plan Your Model",
    "introHtml": "<p><strong>Scenario — plan the bracket before you model it.</strong> You will model a flat plate in SOLIDWORKS: 60 mm long, 40 mm wide, 10 mm thick, with two Ø10 mm holes through it. This lab is the plan: work out the volumes, the feature order, and the checks. Then build it in SOLIDWORKS on your own computer — this app teaches the workflow and checks your plan, but it cannot grade your live model file.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before modelling: read the drawing, list the features in order, and sketch the plan on paper. Never model without a plan.</p><p><strong>The facts:</strong> Plate 60 mm × 40 mm × 10 mm. Two holes, each Ø10 mm (π = 3.14), through the 10 mm thickness. Volume of a cylinder = π × radius² × height. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "COMPUTED — What is the volume of the solid plate in mm³? (60 × 40 × 10. Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_plate_vol",
            "expected": 24000,
            "hint": "Volume = 60 × 40 × 10 = 24,000 mm³."
          }
        ]
      },
      {
        "label": "COMPUTED — One Ø10 mm hole goes through the 10 mm plate. What is its volume in mm³? (Use π = 3.14; radius = 5 mm. Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_hole_vol",
            "expected": 785,
            "hint": "Hole volume = 3.14 × 5² × 10 = 3.14 × 25 × 10 = 785 mm³."
          }
        ]
      },
      {
        "label": "COMPUTED — The plate is 24,000 mm³ and the two holes together remove 1,570 mm³. What is the volume of the finished bracket in mm³? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_final_vol",
            "expected": 22430,
            "hint": "Finished volume = 24,000 − 1,570 = 22,430 mm³."
          }
        ]
      },
      {
        "label": "DECISION — Which feature order is correct? 1) Holes, then base plate, then fillets 2) Base plate, then holes, then fillets last 3) Fillets, then base plate, then holes 4) Holes, then fillets, then base plate",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_order",
            "expected": 2,
            "hint": "Base shape first, then the cuts, then fillets and chamfers last. Holes cannot be cut before the plate exists, and fillets must not come before the features built on their edges."
          }
        ]
      },
      {
        "label": "DECISION — A sketch shows blue lines. What does that mean? 1) The sketch is fully defined 2) The sketch is under-defined and can still move 3) The sketch is broken 4) The sketch is ready to print",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_blue",
            "expected": 2,
            "hint": "Blue lines mean under-defined: the sketch can still move. Fully defined sketches are black. Define the sketch before building on it."
          }
        ]
      },
      {
        "label": "DECISION — How do you check your finished SOLIDWORKS model, since this app cannot grade a live model file? 1) You cannot check it 2) Compare it with the drawing: sizes, holes, and the mass properties (volume) in SOLIDWORKS 3) Ask the app to open the file 4) Guess",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr103_lab_check",
            "expected": 2,
            "hint": "The drawing and SOLIDWORKS mass properties are your check: 22,430 mm³ for this bracket. The app teaches the workflow; the modelling and checking happen in SOLIDWORKS."
          }
        ]
      }
    ]
  }
];
