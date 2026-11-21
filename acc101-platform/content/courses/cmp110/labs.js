module.exports = [
  {
    "id": "poster-from-a-brief",
    "title": "Poster From a Brief: Lay Out a Library Event Poster",
    "introHtml": "<p><strong>Design studio scenario — a real brief.</strong> The local library is holding a free Saturday guitar lesson for kids aged 8 to 12, 10 a.m. to noon, and needs a poster for its notice board. Your task: work through the layout decisions below in order, choosing the right option each time. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=mQaKXbLgWyg\" target=\"_blank\" rel=\"noopener\">Anatomy of Poster Design | Design Lesson</a> — a walkthrough of how a poster's headline, details, and call to action fit together; watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Accuracy first.</strong> Before drawing anything: read the brief twice, write down the facts (free, Saturday, guitar lessons, kids 8–12, 10 a.m. to noon, at the library), and check the date, time, and place against the brief. A poster with the wrong time is worse than no poster — people show up wrong and stop trusting the library. Never guess a detail; if a fact is missing, ask the librarian.</p><p><strong>The brief in full:</strong> Audience: parents of children aged 8–12. Feeling: friendly and fun, but the details must be exact. Format: a notice-board poster plus a square social version. Content: headline, one strong picture, date/time/place, and one call to action (“Sign up at the library desk”). For each row, enter the option number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you start designing, what do you do first? 1) Open the design tool and start with a random template 2) Read the brief twice, write down the facts, and check the date, time, and place against the brief 3) Pick your favorite colors and fonts 4) Download the first guitar photo you find",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_safety",
            "expected": 2,
            "hint": "Step 0 governs: read the brief twice and verify the facts before designing. A poster with the wrong time misleads people. Starting with a template (1) or favorite colors (3) skips the brief, and the first photo found (4) may not fit or be licensed."
          }
        ]
      },
      {
        "label": "DECISION — The poster needs a color palette for a friendly kids' event that parents can read at a glance. Which is best? 1) Six bright colors at once 2) A warm yellow accent with deep blue text for strong contrast 3) Light gray text on a white background 4) Red text on a green background",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_color",
            "expected": 2,
            "hint": "Warm yellow feels friendly and fun, and deep blue text on light gives strong contrast parents can read quickly. Six bright colors (1) fight each other; light gray on white (3) and red on green (4) are hard to read and fail for many readers."
          }
        ]
      },
      {
        "label": "DECISION — Which type pairing works for this poster? 1) Four different decorative fonts 2) A friendly bold face for the headline and one plain readable face for the details 3) A script face for all the body text 4) The same tiny size for the headline and the details",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_type",
            "expected": 2,
            "hint": "Two faces are enough: a bold headline face and a plain body face, with size building the hierarchy. Four fonts (1) look messy, script body text (3) is hard to read, and equal sizes (4) give no hierarchy."
          }
        ]
      },
      {
        "label": "DECISION — How should the poster be laid out? 1) Fill every inch with text and pictures 2) A three-column grid with generous margins, headline first, one big picture as the focal point, details grouped, call to action last 3) Center every paragraph of body text 4) Put the call to action in tiny text at the very top",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_layout",
            "expected": 2,
            "hint": "A grid with margins, one focal point, grouped details, and the call to action last is the layout that reads in order. Filling every inch (1) shouts everywhere, centered long text (3) is tiring to read, and a tiny top call to action (4) will be missed."
          }
        ]
      },
      {
        "label": "DECISION — The square social version of the poster needs to work on a phone. What do you do? 1) Shrink the whole poster down as it is 2) Redesign it square: same colors and headline, shorter text, bigger type, details in the caption 3) Add three more photos to fill the square 4) Use the same small body text size as the poster",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_social",
            "expected": 2,
            "hint": "A social version is redesigned for the small screen: same identity, shorter text, bigger type, details in the caption. Shrinking the poster (1) makes text unreadable, more photos (3) add clutter, and tiny text (4) cannot be read on a phone."
          }
        ]
      },
      {
        "label": "COMPUTED — The poster will print at 300 pixels per inch. The printed poster is 10 inches wide. How many pixels wide must the background image be at minimum? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "poster_pixels",
            "expected": 3000,
            "hint": "10 inches times 300 pixels per inch equals 3000 pixels wide. A smaller image stretched to 10 inches would print blurry."
          }
        ]
      }
    ],
    "passing": 70
  }
];
