// cmp109 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "cut-60-second-video-to-storyboard",
    "title": "Cut a 60-Second Video to a Storyboard",
    "introHtml": "<p><strong>Storyboard brief.</strong> A local bakery wants a 60-second video for social media. The storyboard has six shots: (1) shop front, 5 seconds; (2) baker kneading dough, 15 seconds; (3) oven and fresh bread, 15 seconds; (4) customer tasting, 10 seconds; (5) bread on display, 10 seconds; (6) logo and address, 5 seconds. Your task: assemble the clips in order, cut out the dead air, and export the finished video. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=YJhJuuPAzvg\" target=\"_blank\" rel=\"noopener\">How to Trim and Cut Video</a> — Adobe in a Minute's cutting tutorial, and <a href=\"https://www.youtube.com/watch?v=B9T_aPmNepA\" target=\"_blank\" rel=\"noopener\">How to Export a Video in Adobe Premiere Pro</a> — Think Media's export walkthrough. Watch them before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before editing anything: back up the original media files, keep them in the project folder, and never move or rename them while the project is open. Premiere Pro never changes your source files, so protect them, and save the project before you start cutting.</p><p><strong>The storyboard in order:</strong> (1) shop front, 5 seconds; (2) baker kneading dough, 15 seconds; (3) oven and fresh bread, 15 seconds; (4) customer tasting, 10 seconds; (5) bread on display, 10 seconds; (6) logo and address, 5 seconds. Total: 60 seconds. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — Before you start cutting, what do you do first? 1) Start cutting the clips right away 2) Back up the original media, keep it in the project folder, do not move or rename it, and save the project 3) Delete the clips you do not plan to use 4) Export the video first so you have something to show",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_safety",
            "expected": 2,
            "hint": "Step 0 governs: back up the originals, keep them in place, and save the project before cutting. Cutting first (1), deleting clips (3), and exporting before editing (4) all risk losing work or media."
          }
        ]
      },
      {
        "label": "DECISION — Which tool splits a clip at the playhead so you can remove a pause? 1) Selection tool (V), which moves clips 2) Razor tool (C), or Ctrl+K on Windows / Command+K on a Mac, which cuts at the playhead 3) Ripple Edit tool (B) 4) Type tool (T)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_tool",
            "expected": 2,
            "hint": "The Razor tool (C) or Ctrl/Cmd+K cuts a clip at the playhead. The Selection tool (1) moves clips, Ripple Edit (3) trims and closes gaps, and the Type tool (4) adds text."
          }
        ]
      },
      {
        "label": "DECISION — What is the correct order for the six shots? 1) Logo first, then oven, then shop front, then the rest 2) Shop front, baker kneading, oven and bread, customer tasting, bread on display, logo and address 3) Customer tasting first, then the rest in any order 4) Longest shots first, shortest shots last",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_order",
            "expected": 2,
            "hint": "Follow the storyboard: shop front, kneading, oven, tasting, display, logo. The story opens on the shop, shows the work, shows the result, and ends with the logo and address."
          }
        ]
      },
      {
        "label": "DECISION — The kneading clip has a 4-second pause in the middle. What is the fastest fix? 1) Leave the pause in 2) Cut out the pause with the Razor tool, then ripple-delete the gap with Shift+Delete so the timeline closes up 3) Speed up the whole clip to 200 percent 4) Delete the whole kneading clip",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_pause",
            "expected": 2,
            "hint": "Cut the pause out and ripple-delete the gap so the timeline closes. Leaving it (1) bores the viewer, speeding the whole clip (3) makes the work look frantic, and deleting the clip (4) loses a storyboard shot."
          }
        ]
      },
      {
        "label": "DECISION — The music is drowning out the baker's voice. What do you do? 1) Turn the music off entirely 2) Tag the voice as Dialogue and the music as Music in the Essential Sound panel, then use ducking so the music drops under the voice 3) Turn the voice up until it clips 4) Delete the music track",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_duck",
            "expected": 2,
            "hint": "Ducking lowers the music automatically whenever the voice speaks. Removing the music (1 and 4) loses the mood, and turning the voice up until it clips (3) distorts it."
          }
        ]
      },
      {
        "label": "DECISION — Which export is right for the bakery's social media post? 1) H.264 MP4, YouTube 1080p Full HD preset, matching the sequence 2) Uncompressed AVI at full size 3) A Premiere Pro project file 4) A single JPEG frame",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_export",
            "expected": 1,
            "hint": "H.264 MP4 with the YouTube 1080p preset is the standard online delivery: small, high quality, and playable everywhere. Uncompressed AVI (2) is enormous, a project file (3) needs Premiere Pro to play, and a JPEG (4) is a still image, not a video."
          }
        ]
      },
      {
        "label": "COMPUTED — The finished video is 60 seconds long at 30 frames per second. How many frames are in the whole video? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_frames",
            "expected": 1800,
            "hint": "60 seconds times 30 frames per second equals 1800 frames."
          }
        ]
      },
      {
        "label": "COMPUTED — A 12-second clip of the oven is slowed to 50 percent speed for a dramatic moment. How long does the clip last on the timeline now? (Enter the number of seconds.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pr_slow",
            "expected": 24,
            "hint": "At 50 percent speed the clip plays half as fast, so 12 seconds of footage lasts 24 seconds on the timeline."
          }
        ]
      }
    ]
  }
];
