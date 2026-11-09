// asl121 — Receptive video labs.
module.exports = [
  {
    "id": "questions-yes-no-vs-wh",
    "title": "Questions: Yes/No vs Wh-",
    "introHtml": "<p><strong>Receptive video lab — Watch Dr. Bill Vicars sign questions, then tell them apart by the face.</strong> The video is Dr. Bill Vicars of Lifeprint / ASL University signing a short story and practice questions (Lesson 1 story, https://www.youtube.com/watch?v=2OIBaHFvcP0). Watch the whole signed video twice before answering — once for the signs, once for the eyebrows. Then work through the questions below, which are the questions Dr. Bill signs in the video. For each row, enter the option number or the computed value asked for.</p><p><strong>Worked example first — one question, read two ways (completed for you).</strong> Dr. Bill signs YOU TEACHER with a neutral face: that is a statement, \"You are a teacher.\" The same signs with raised eyebrows held through them: a yes/no question, \"Are you a teacher?\" The same signs with a wh-word added and furrowed brows — TEACHER WHO? — a wh-question, \"Who is the teacher?\" Same hands, three different sentences. The face decides. Now read the eight questions in the task below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Open the video (https://www.youtube.com/watch?v=2OIBaHFvcP0) and watch it all the way through two times: the first time, watch only Dr. Bill's hands; the second time, watch only his eyebrows and head. Do not answer any row until you have watched it twice. The video is a signing demonstration — hands and face together — and this lab tests what you can read from both.</p><p><strong>The questions, as signed in the video, in order:</strong> (1) YOU STUDENT? — eyebrows raised through the signs. (2) YOU NAME WHAT? — brows furrowed, wh-word last. (3) YOU LIKE COFFEE? — eyebrows raised through the signs. (4) YOU LIVE WHERE? — brows furrowed, wh-word last. (5) MOVIE YOU LIKE? — eyebrows raised through the signs. (6) TEACHER WHO? — brows furrowed, wh-word last. (7) YOU GO SCHOOL? — eyebrows raised through the signs. (8) YOU HAPPY WHY? — brows furrowed, wh-word last. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — What must you do first, before answering any row? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice — once for the hands, once for the eyebrows — before answering 3) Watch only the first ten seconds 4) Read the task and skip the video",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the hands, once for the face. Answering from memory (1), watching only the start (3), or skipping the video (4) all miss the receptive practice this lab is built on."
          }
        ]
      },
      {
        "label": "COMPUTED — How many questions are signed in the video in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_total",
            "expected": 8,
            "hint": "The task lists eight questions, numbered 1 to 8."
          }
        ]
      },
      {
        "label": "COMPUTED — How many of the eight questions are yes/no questions (raised eyebrows)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_yesno",
            "expected": 4,
            "hint": "Questions 1, 3, 5, and 7 have raised eyebrows — four yes/no questions."
          }
        ]
      },
      {
        "label": "COMPUTED — How many of the eight questions are wh-questions (furrowed brows)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_wh",
            "expected": 4,
            "hint": "Questions 2, 4, 6, and 8 have furrowed brows — four wh-questions."
          }
        ]
      },
      {
        "label": "COMPUTED — Add the yes/no questions and the wh-questions together: 4 + 4. What is the total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_sum",
            "expected": 8,
            "hint": "4 + 4 = 8, which matches the total number of questions signed."
          }
        ]
      },
      {
        "label": "DECISION — Question 2 is YOU NAME WHAT? with furrowed brows. What kind of question is it? 1) A yes/no question 2) A wh-question 3) A statement 4) A command",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_q2",
            "expected": 2,
            "hint": "WHAT is a wh-word, it comes last, and the brows are furrowed — a wh-question, \"What is your name?\" A yes/no question (1) would have raised brows and no wh-word, a statement (3) would have a neutral face, and a command (4) would use a firm face."
          }
        ]
      },
      {
        "label": "DECISION — Question 5 is MOVIE YOU LIKE? with raised eyebrows. What kind of answer does it need? 1) A place 2) A person's name 3) YES or NO 4) A time",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_q5",
            "expected": 3,
            "hint": "Raised eyebrows mark a yes/no question, so the answer is YES or NO. A place (1) answers WHERE, a person's name (2) answers WHO, and a time (4) answers WHEN."
          }
        ]
      },
      {
        "label": "DECISION — Question 8 is YOU HAPPY WHY? with furrowed brows. What kind of answer does it need? 1) YES or NO 2) A place 3) A reason — why the person is happy 4) A time",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_q8",
            "expected": 3,
            "hint": "WHY asks for a reason, so the answer must give one. YES or NO (1) answers a yes/no question, a place (2) answers WHERE, and a time (4) answers WHEN."
          }
        ]
      },
      {
        "label": "DECISION — Which question asks for a place? 1) YOU STUDENT? 2) YOU LIKE COFFEE? 3) YOU LIVE WHERE? 4) TEACHER WHO?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_place",
            "expected": 3,
            "hint": "WHERE asks for a place — question 4, YOU LIVE WHERE? YOU STUDENT? (1) and YOU LIKE COFFEE? (2) are yes/no questions, and TEACHER WHO? (4) asks for a person."
          }
        ]
      },
      {
        "label": "DECISION — Which question asks for a person? 1) YOU NAME WHAT? 2) YOU GO SCHOOL? 3) TEACHER WHO? 4) YOU HAPPY WHY?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_person",
            "expected": 3,
            "hint": "WHO asks for a person — question 6, TEACHER WHO? YOU NAME WHAT? (1) asks for a name, YOU GO SCHOOL? (2) is a yes/no question, and YOU HAPPY WHY? (4) asks for a reason."
          }
        ]
      },
      {
        "label": "DECISION — A watcher sees question 3, YOU LIKE COFFEE?, but misses the signer's face. What is the problem? 1) The signs are wrong 2) Without the face, a question and a statement look identical 3) The signs are too slow 4) The watcher needs to fingerspell the answer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_face",
            "expected": 2,
            "hint": "The hands are the same for the statement and the question — only the raised eyebrows tell them apart. The signs (1) are correct for both, speed (3) is not the issue, and fingerspelling (4) has nothing to do with answering."
          }
        ]
      },
      {
        "label": "DECISION — What is the right way to close this lab? 1) Answer from memory and move on 2) Watch the video a third time, check your answers against the faces you saw, and note which question type still trips you up 3) Skip the wh-questions 4) Memorize the eight questions word for word",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "q_close",
            "expected": 2,
            "hint": "Receptive skill grows by watching again and checking — a third viewing to confirm the faces beats memorizing (4) or skipping (3). Answering from memory (1) skips the watching this lab is for."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "questions-yes-no-vs-wh.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — What must you do first, before answering any row? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice — once for the hands, once for the eyebrows — before answering 3) Watch only the first ten seconds 4) Read the task and skip the video\",\n\"COMPUTED — How many questions are signed in the video in total? (Enter the number.)\",\n\"COMPUTED — How many of the eight questions are yes/no questions (raised eyebrows)? (Enter the number.)\",\n\"COMPUTED — How many of the eight questions are wh-questions (furrowed brows)? (Enter the number.)\",\n\"COMPUTED — Add the yes/no questions and the wh-questions together: 4 + 4. What is the total? (Enter the number.)\",\n\"DECISION — Question 2 is YOU NAME WHAT? with furrowed brows. What kind of question is it? 1) A yes/no question 2) A wh-question 3) A statement 4) A command\",\n\"DECISION — Question 5 is MOVIE YOU LIKE? with raised eyebrows. What kind of answer does it need? 1) A place 2) A person's name 3) YES or NO 4) A time\",\n\"DECISION — Question 8 is YOU HAPPY WHY? with furrowed brows. What kind of answer does it need? 1) YES or NO 2) A place 3) A reason — why the person is happy 4) A time\",\n\"DECISION — Which question asks for a place? 1) YOU STUDENT? 2) YOU LIKE COFFEE? 3) YOU LIVE WHERE? 4) TEACHER WHO?\",\n\"DECISION — Which question asks for a person? 1) YOU NAME WHAT? 2) YOU GO SCHOOL? 3) TEACHER WHO? 4) YOU HAPPY WHY?\",\n\"DECISION — A watcher sees question 3, YOU LIKE COFFEE?, but misses the signer's face. What is the problem? 1) The signs are wrong 2) Without the face, a question and a statement look identical 3) The signs are too slow 4) The watcher needs to fingerspell the answer\",\n\"DECISION — What is the right way to close this lab? 1) Answer from memory and move on 2) Watch the video a third time, check your answers against the faces you saw, and note which question type still trips you up 3) Skip the wh-questions 4) Memorize the eight questions word for word\",\n"
  }
];
