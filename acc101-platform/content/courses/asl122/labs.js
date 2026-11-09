// asl122 — Receptive video labs.
module.exports = [
  {
    "id": "classifiers",
    "title": "Classifiers",
    "introHtml": "<p><strong>Receptive video lab — Watch Dr. Bill Vicars sign a story with classifiers, then name what each hand is doing.</strong> The video is Dr. Bill Vicars of Lifeprint / ASL University signing a story in Lesson 12 (https://www.youtube.com/watch?v=0OHytO5qxE8). Watch the whole signed video twice before answering — once for the handshapes, once for how they move through space. Then work through the classifier moments below, which are the moments Dr. Bill shows in the video. For each row, enter the option number or the computed value asked for.</p><p><strong>Worked example first — one classifier, read two ways (completed for you).</strong> A flat hand moving forward after CAR is named is an entity classifier: the hand IS the car, driving. The same flat hand held under a book is a handling classifier: the hand is carrying the book. Same handshape, different job — and the name signed first tells you which job it is. Now read the six classifier moments in the task below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Open the video (https://www.youtube.com/watch?v=0OHytO5qxE8) and watch it all the way through two times: the first time, watch only the handshapes; the second time, watch how the hands move through space and where they stop. Do not answer any row until you have watched it twice. The video is a signing demonstration — hands and space together — and this lab tests what you can read from both.</p><p><strong>The classifier moments, as shown in the video, in order:</strong> (1) CAR is named, then a 3-handshape drives forward and stops. (2) PERSON is named, then a 1-handshape walks forward. (3) DOG is named, then a bent-V handshape runs across the space. (4) CUP is named, then a C-hand lifts to the mouth. (5) BALL is named, then two curved hands show a big round shape. (6) BOOK is named, then a flat hand is placed on another flat hand. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — What must you do first, before answering any row? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice — once for the handshapes, once for how they move through space — before answering 3) Watch only the first ten seconds 4) Read the task and skip the video",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the handshapes, once for the movement and space. Answering from memory (1), watching only the start (3), or skipping the video (4) all miss the receptive practice this lab is built on."
          }
        ]
      },
      {
        "label": "COMPUTED — How many classifier moments are listed in the task in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_total",
            "expected": 6,
            "hint": "The task lists six classifier moments, numbered 1 to 6."
          }
        ]
      },
      {
        "label": "COMPUTED — How many of the six moments are entity classifiers (moments 1, 2, and 3)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_entity",
            "expected": 3,
            "hint": "Moments 1, 2, and 3 are entity classifiers — the hand IS the car, the person, and the dog. That is three."
          }
        ]
      },
      {
        "label": "COMPUTED — How many of the six moments are NOT entity classifiers (moments 4, 5, and 6)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_not_entity",
            "expected": 3,
            "hint": "Moments 4, 5, and 6 are handling, descriptive, and locative — three moments that are not entity classifiers. 3 + 3 = 6, the total."
          }
        ]
      },
      {
        "label": "DECISION — Moment 1: CAR is named, then a 3-handshape drives forward and stops. What kind of classifier is it? 1) Handling classifier 2) Entity classifier 3) Descriptive classifier 4) Locative classifier",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_m1",
            "expected": 2,
            "hint": "The hand IS the car, driving — an entity classifier. A handling classifier (1) would show a hand holding something, a descriptive classifier (3) would show size and shape, and a locative classifier (4) would show where things are."
          }
        ]
      },
      {
        "label": "DECISION — Moment 4: CUP is named, then a C-hand lifts to the mouth. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_m4",
            "expected": 2,
            "hint": "The C-hand is a hand holding the cup and drinking — a handling classifier. An entity classifier (1) would mean the hand IS the cup, a descriptive classifier (3) would show its size and shape, and a locative classifier (4) would show where it sits."
          }
        ]
      },
      {
        "label": "DECISION — Moment 5: BALL is named, then two curved hands show a big round shape. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_m5",
            "expected": 3,
            "hint": "Two curved hands showing how big and round the ball is — a descriptive (size-and-shape) classifier. An entity classifier (1) would show the ball moving, a handling classifier (2) would show a hand holding it, and a locative classifier (4) would show where it sits."
          }
        ]
      },
      {
        "label": "DECISION — Moment 6: BOOK is named, then a flat hand is placed on another flat hand. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_m6",
            "expected": 4,
            "hint": "The flat hand placed on another flat hand shows where the book is — on the table — a locative classifier. An entity classifier (1) would show the book moving, a handling classifier (2) would show a hand holding it, and a descriptive classifier (3) would show its size and shape."
          }
        ]
      },
      {
        "label": "DECISION — Moment 3: DOG is named, then a bent-V handshape runs across the space. Which handshape is used, and why? 1) The 1-handshape, for a person 2) The bent-V handshape, for a four-legged animal 3) The 3-handshape, for a vehicle 4) The C-handshape, for holding a cup",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_m3",
            "expected": 2,
            "hint": "The bent-V is the animal classifier — two fingers bent for four legs. The 1-handshape (1) is a person, the 3-handshape (3) is a vehicle, and the C-handshape (4) holds cup-sized things."
          }
        ]
      },
      {
        "label": "DECISION — Why must CAR be named before the 3-handshape drives forward in moment 1? 1) Because classifiers are only used after fingerspelling 2) Because a 3-handshape alone could be a car, a truck, or a bus — the name tells the watcher which one 3) Because the eyebrows must be raised first 4) Because the classifier is a question",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_name_first",
            "expected": 2,
            "hint": "Name it, then show it — without the name, the watcher cannot tell what the hand stands for. Classifiers do not require fingerspelling (1), eyebrows mark questions and topics (3), and a classifier is not a question (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The story has 3 entity classifier moments and 1 handling classifier moment. How many is that together? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_add",
            "expected": 4,
            "hint": "3 + 1 = 4. The remaining two moments are descriptive (moment 5) and locative (moment 6)."
          }
        ]
      },
      {
        "label": "DECISION — What is the right way to close this lab? 1) Answer from memory and move on 2) Watch the video a third time, check your answers against the handshapes you saw, and note which classifier type still trips you up 3) Skip the descriptive and locative moments 4) Memorize the six moments word for word",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_close",
            "expected": 2,
            "hint": "Receptive skill grows by watching again and checking — a third viewing to confirm the handshapes beats memorizing (4) or skipping (3). Answering from memory (1) skips the watching this lab is for."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "classifiers.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — What must you do first, before answering any row? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice — once for the handshapes, once for how they move through space — before answering 3) Watch only the first ten seconds 4) Read the task and skip the video\",\n\"COMPUTED — How many classifier moments are listed in the task in total? (Enter the number.)\",\n\"COMPUTED — How many of the six moments are entity classifiers (moments 1, 2, and 3)? (Enter the number.)\",\n\"COMPUTED — How many of the six moments are NOT entity classifiers (moments 4, 5, and 6)? (Enter the number.)\",\n\"DECISION — Moment 1: CAR is named, then a 3-handshape drives forward and stops. What kind of classifier is it? 1) Handling classifier 2) Entity classifier 3) Descriptive classifier 4) Locative classifier\",\n\"DECISION — Moment 4: CUP is named, then a C-hand lifts to the mouth. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier\",\n\"DECISION — Moment 5: BALL is named, then two curved hands show a big round shape. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier\",\n\"DECISION — Moment 6: BOOK is named, then a flat hand is placed on another flat hand. What kind of classifier is it? 1) Entity classifier 2) Handling classifier 3) Descriptive classifier 4) Locative classifier\",\n\"DECISION — Moment 3: DOG is named, then a bent-V handshape runs across the space. Which handshape is used, and why? 1) The 1-handshape, for a person 2) The bent-V handshape, for a four-legged animal 3) The 3-handshape, for a vehicle 4) The C-handshape, for holding a cup\",\n\"DECISION — Why must CAR be named before the 3-handshape drives forward in moment 1? 1) Because classifiers are only used after fingerspelling 2) Because a 3-handshape alone could be a car, a truck, or a bus — the name tells the watcher which one 3) Because the eyebrows must be raised first 4) Because the classifier is a question\",\n\"COMPUTED — The story has 3 entity classifier moments and 1 handling classifier moment. How many is that together? (Enter the number.)\",\n\"DECISION — What is the right way to close this lab? 1) Answer from memory and move on 2) Watch the video a third time, check your answers against the handshapes you saw, and note which classifier type still trips you up 3) Skip the descriptive and locative moments 4) Memorize the six moments word for word\",\n"
  }
];
