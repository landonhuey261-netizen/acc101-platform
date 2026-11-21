// cmp108 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "retouch-photo-to-client-brief",
    "title": "Retouch a Photo to a Client Brief",
    "introHtml": "<p><strong>Client brief.</strong> A local café wants a portrait of its owner for the website. The brief: remove three temporary blemishes, keep the owner's freckles and smile lines, brighten the photo slightly, and deliver a web-ready JPEG plus the layered PSD. The photo is 6000 by 4000 pixels. Your task: choose the right tool, the right order, and the right settings. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=PGrlJpYHZo4\" target=\"_blank\" rel=\"noopener\">Basic Retouching in Photoshop</a> — PHLEARN's retouching walkthrough, and <a href=\"https://www.youtube.com/watch?v=8HwUwsHb9Pc\" target=\"_blank\" rel=\"noopener\">Exporting Images in Photoshop</a> — PHLEARN on exporting. Watch them before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before editing anything: copy the original photo into your Originals folder and work only on a copy. Never retouch the only copy of a client's photo, and never edit on the Background layer.</p><p><strong>The brief in steps:</strong> (1) Duplicate the Background layer. (2) Remove the three blemishes. (3) Fix the light with an adjustment layer. (4) Check the result against the brief. (5) Export a web JPEG at 1200 pixels wide. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — Before you touch the client's photo, what do you do first? 1) Open the original and start retouching it directly 2) Copy the original into an Originals folder, work on a copy, and duplicate the Background layer before retouching 3) Delete the original once you have a JPEG 4) Flatten the image so it is simpler to work with",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_safety",
            "expected": 2,
            "hint": "Step 0 governs: keep the original untouched, work on a copy, and duplicate the Background layer. Editing the original (1), deleting it (3), and flattening (4) all destroy your safety net."
          }
        ]
      },
      {
        "label": "DECISION — Which tool removes a small blemish on a cheek? 1) Clone Stamp, copying exactly 2) Spot Healing Brush, which blends the repair with the surrounding skin 3) Eraser tool 4) Crop tool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_tool",
            "expected": 2,
            "hint": "The Spot Healing Brush is the quick tool for small blemishes: it samples the area around the spot and blends the repair. The Clone Stamp (1) copies exactly and suits sharp edges, the Eraser (3) deletes pixels, and the Crop tool (4) changes the frame, not the skin."
          }
        ]
      },
      {
        "label": "DECISION — The owner's freckles and smile lines are permanent features. What do you do with them? 1) Remove them all for a smoother look 2) Keep them — the brief says to remove temporary blemishes only, and real skin keeps its texture 3) Blur the whole face 4) Paint over them with the Brush tool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_keep",
            "expected": 2,
            "hint": "Good retouching removes temporary spots and keeps permanent features and texture. Removing freckles and smile lines (1), blurring the face (3), and painting over them (4) all make the portrait look fake."
          }
        ]
      },
      {
        "label": "DECISION — What is the correct order of steps? 1) Export the JPEG, then retouch, then fix the light 2) Retouch on a duplicate layer, then fix the light with an adjustment layer, then check against the brief, then export 3) Fix the light, export, then retouch the JPEG 4) Flatten, retouch, then save as PSD",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_order",
            "expected": 2,
            "hint": "Retouch first on a duplicate layer, then adjust light with an adjustment layer, check against the brief, and export last. Exporting before retouching (1 and 3) wastes the work, and flattening (4) destroys the layers."
          }
        ]
      },
      {
        "label": "DECISION — The photo is a little dark. Which is the safe way to brighten it? 1) Image menu, then Adjustments, then Brightness/Contrast, which changes pixels permanently 2) A Brightness/Contrast adjustment layer, which stays editable and can be masked 3) Raising the JPEG quality to 100 4) Increasing the saturation to maximum",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_light",
            "expected": 2,
            "hint": "An adjustment layer brightens without touching pixels, stays editable, and can be masked. The Image menu version (1) is destructive, JPEG quality (3) does not change brightness, and maximum saturation (4) makes skin orange."
          }
        ]
      },
      {
        "label": "DECISION — The website needs the photo at 1200 pixels wide. Which export is right? 1) JPEG, sRGB, 1200 pixels wide, quality around 70 to 80 2) TIFF at full size 3) PNG at full size 4) PSD, because the client can open it anywhere",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_export",
            "expected": 1,
            "hint": "Web delivery is a JPEG in sRGB, sized to the space it will fill, at quality 70 to 80. A full-size TIFF (2) or PNG (3) is far larger than the page needs, and a PSD (4) is your working master, not a delivery file."
          }
        ]
      },
      {
        "label": "COMPUTED — The café wants a print of the same portrait, 4 inches wide at 300 PPI. How many pixels wide must the print file be? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_print",
            "expected": 1200,
            "hint": "4 inches times 300 pixels per inch equals 1200 pixels wide."
          }
        ]
      },
      {
        "label": "COMPUTED — The original photo is 6000 pixels wide. The website version is 1200 pixels wide. What percentage of the original width is the website version? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ps_pct",
            "expected": 20,
            "hint": "1200 divided by 6000 equals 0.2, which is 20 percent."
          }
        ]
      }
    ]
  }
];
