module.exports = [
  {
    "id": "deaf-history",
    "title": "Deaf History",
    "introHtml": "<p><strong>Receptive video lab — watch Deaf history told by Deaf people, then answer.</strong> In this lab you watch the PBS documentary <a href=\"https://www.youtube.com/watch?v=PL5d8kyZUQk\">Through Deaf Eyes</a>, made with Gallaudet University, which tells the history of Deaf people in America through signed stories, interviews, and archive footage. Watch it on YouTube, then come back and answer.</p><p><strong>Worked example first — a history check (completed for you).</strong> A student is asked when Gallaudet was founded. Step 1: the Hartford school opened in 1817. Step 2: Gallaudet University came later, founded in 1864. Step 3: 1864 is the answer — the two dates are different schools, and mixing them up is the most common mistake. Now work through the history below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Open the video linked in the introduction and watch it all the way through once, following the signed stories and the history as it unfolds. Then watch it a second time, noting the dates, the names, and the events as they come up. Do not answer any row until you have watched the whole video twice. The history is told by Deaf people themselves — listen to how they tell it.</p><p><strong>The video, as you will find it:</strong> (1) Through Deaf Eyes tells the history of Deaf people in America, from the early schools to the present. (2) It covers the founding of Gallaudet University in 1864. (3) It covers the Deaf President Now protest of March 1988 and the naming of I. King Jordan as the first Deaf president. (4) It shows Deaf people telling their own history in ASL, through interviews and signed stories. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says: watch the whole signed video twice before answering. What should you do first? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice, then answer 3) Watch only the first ten seconds 4) Skip the video and guess",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_practice",
            "expected": 2,
            "hint": "Step 0 is the practice note: watch the whole signed video twice before answering. Answering from memory (1), watching only ten seconds (3), or guessing (4) all skip the practice that makes the rest of the lab possible."
          }
        ]
      },
      {
        "label": "DECISION — In what year was Gallaudet University founded? 1) 1817 2) 1864 3) 1988 4) 1910",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_gallaudet_year",
            "expected": 2,
            "hint": "Gallaudet University was founded in 1864, when President Abraham Lincoln signed the founding law. 1817 (1) is the Hartford school. 1988 (3) is Deaf President Now. 1910 (4) is not a date in this story."
          }
        ]
      },
      {
        "label": "COMPUTED — Gallaudet was founded in 1864. Deaf President Now happened in 1988. How many years passed between the founding and the protest? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_years",
            "expected": 124,
            "hint": "1988 - 1864 = 124 years. In all that time, Gallaudet had never had a Deaf president."
          }
        ]
      },
      {
        "label": "DECISION — Who opened the first permanent school for Deaf children in America, in Hartford in 1817? 1) Abraham Lincoln alone 2) Thomas Hopkins Gallaudet and Laurent Clerc 3) I. King Jordan 4) Marlee Matlin",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_hartford",
            "expected": 2,
            "hint": "Gallaudet and Clerc opened the American School for the Deaf in Hartford in 1817. Lincoln (1) signed the Gallaudet law in 1864. Jordan (3) became president in 1988. Matlin (4) is an actress."
          }
        ]
      },
      {
        "label": "DECISION — Who became the first Deaf president of Gallaudet University? 1) Elisabeth Zinser 2) I. King Jordan 3) Greg Hlibok 4) Jane Bassett Spilman",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_jordan",
            "expected": 2,
            "hint": "I. King Jordan was named the first Deaf president on March 13, 1988. Zinser (1) resigned. Hlibok (3) was a student leader. Spilman (4) was the board chair who resigned."
          }
        ]
      },
      {
        "label": "COMPUTED — The Deaf President Now protest lasted from March 6 to March 13, 1988. How many days is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_days",
            "expected": 8,
            "hint": "March 6 to March 13 is 8 days. The students won all four of their demands in that time."
          }
        ]
      },
      {
        "label": "DECISION — What were the students' four demands? 1) Free tuition, a stadium, longer holidays, and more classes 2) A Deaf president, the board chair resigns, a Deaf board majority, and no punishment for protesters 3) A new campus, new teachers, new books, and new dorms 4) Higher pay, shorter days, more holidays, and free food",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_demands",
            "expected": 2,
            "hint": "The four demands were a Deaf president, the board chair's resignation, a Deaf board majority, and no punishment. The other options were never demands of the protest."
          }
        ]
      },
      {
        "label": "COMPUTED — The students had 4 demands, and they won all 4. How many demands did they win? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_won",
            "expected": 4,
            "hint": "All 4 demands were won: a Deaf president, the board chair's resignation, a Deaf board majority, and no punishment."
          }
        ]
      },
      {
        "label": "DECISION — On Martha's Vineyard in the 1700s and 1800s, what was true? 1) No one signed 2) Nearly everyone, hearing and Deaf, used sign language in daily life 3) Sign language was banned 4) Only Deaf people signed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_vineyard",
            "expected": 2,
            "hint": "On the Vineyard, nearly everyone signed, and Deaf islanders lived as ordinary neighbors. No one signed (1) is wrong. Signing was the norm, not banned (3). Hearing islanders signed too (4)."
          }
        ]
      },
      {
        "label": "DECISION — What is audism? 1) A type of hearing aid 2) The belief that hearing is better than being Deaf, and the behavior that follows from it 3) A Deaf school 4) A sign language",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_audism",
            "expected": 2,
            "hint": "Audism is the belief that hearing is better, with behavior that follows. A hearing aid (1) is a device. A school (3) is an institution. A sign language (4) is a language."
          }
        ]
      },
      {
        "label": "COMPUTED — A Deaf history timeline has 3 events in the 1800s (1817, 1864, and one more) and 1 event in 1988. How many events is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_events",
            "expected": 4,
            "hint": "3 + 1 = 4 events on the timeline in total."
          }
        ]
      },
      {
        "label": "DECISION — What is the right way to close this lab? 1) Send in your answers without watching the video 2) Watch the video twice, answer every row, and re-watch any part you missed before deciding 3) Copy someone else's answers 4) Answer only the rows about dates",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dh_close",
            "expected": 2,
            "hint": "Close the lab by doing the work: watch twice, answer every row, and re-watch what you missed. Skipping the video (1), copying (3), or answering only the date rows (4) all leave the history unlearned."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "deaf-history.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says: watch the whole signed video twice before answering. What should you do first? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice, then answer 3) Watch only the first ten seconds 4) Skip the video and guess\",\n\"DECISION — In what year was Gallaudet University founded? 1) 1817 2) 1864 3) 1988 4) 1910\",\n\"COMPUTED — Gallaudet was founded in 1864. Deaf President Now happened in 1988. How many years passed between the founding and the protest? (Enter the number.)\",\n\"DECISION — Who opened the first permanent school for Deaf children in America, in Hartford in 1817? 1) Abraham Lincoln alone 2) Thomas Hopkins Gallaudet and Laurent Clerc 3) I. King Jordan 4) Marlee Matlin\",\n\"DECISION — Who became the first Deaf president of Gallaudet University? 1) Elisabeth Zinser 2) I. King Jordan 3) Greg Hlibok 4) Jane Bassett Spilman\",\n\"COMPUTED — The Deaf President Now protest lasted from March 6 to March 13, 1988. How many days is that? (Enter the number.)\",\n\"DECISION — What were the students' four demands? 1) Free tuition, a stadium, longer holidays, and more classes 2) A Deaf president, the board chair resigns, a Deaf board majority, and no punishment for protesters 3) A new campus, new teachers, new books, and new dorms 4) Higher pay, shorter days, more holidays, and free food\",\n\"COMPUTED — The students had 4 demands, and they won all 4. How many demands did they win? (Enter the number.)\",\n\"DECISION — On Martha's Vineyard in the 1700s and 1800s, what was true? 1) No one signed 2) Nearly everyone, hearing and Deaf, used sign language in daily life 3) Sign language was banned 4) Only Deaf people signed\",\n\"DECISION — What is audism? 1) A type of hearing aid 2) The belief that hearing is better than being Deaf, and the behavior that follows from it 3) A Deaf school 4) A sign language\",\n\"COMPUTED — A Deaf history timeline has 3 events in the 1800s (1817, 1864, and one more) and 1 event in 1988. How many events is that in total? (Enter the number.)\",\n\"DECISION — What is the right way to close this lab? 1) Send in your answers without watching the video 2) Watch the video twice, answer every row, and re-watch any part you missed before deciding 3) Copy someone else's answers 4) Answer only the rows about dates\",\n"
  }
];
