// asl102 — Receptive video labs.
module.exports = [
  {
    "id": "family-daily-life",
    "title": "Family & Daily Life Lab",
    "introHtml": "<p><strong>Lab 1 — Watch, then recognize.</strong> This lab is a receptive video lab: you watch Dr. Bill Vicars' Lesson 5 narrative story video — a short signed story about family and daily life — and then answer from what you saw. The practice script is printed in the task so you can follow along, and every row asks about that script: who did what, when it happened, and how many signs and letters are in it. Read the task, watch the video twice, then answer each row.</p><p><strong>Worked example first — counting a sentence (completed for you).</strong> Take the sentence MY BROTHER GO SCHOOL. Step 1: MY is one sign. Step 2: BROTHER is one sign. Step 3: GO is one sign. Step 4: SCHOOL is one sign. That is 4 signs in total. Now watch the video and answer the rows below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE.</strong> Watch the whole signed video twice before answering. The first time, watch for the story — who is in the family and what happens in their day. The second time, watch for details — which family signs appear and what order the day runs in. Do not answer from memory without watching: this lab is about recognizing signs with your eyes. <a href=\"https://www.youtube.com/watch?v=T3TP65mkfQc\">Watch: American Sign Language (ASL) Lesson 05 Narrative (story) — Dr. Bill Vicars, Lifeprint.com</a>.</p><p><strong>Practice script — a family day (follow along while you watch):</strong> (1) MORNING I WAKE-UP. (2) I EAT BREAKFAST WITH MY MOTHER. (3) MY BROTHER GO SCHOOL. (4) MY SISTER STAY HOME. (5) AFTERNOON I COME HOME. (6) NIGHT MY FAMILY EAT DINNER. (7) NIGHT I SLEEP. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the first sentence 4) Skip the video and guess from the title",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the story, once for the details. Answering from memory (1), watching one sentence (3), or guessing from the title (4) skips the receptive practice the lab is for."
          }
        ]
      },
      {
        "label": "DECISION — Which sentence comes first in the family-day script? 1) I EAT BREAKFAST WITH MY MOTHER 2) MORNING I WAKE-UP 3) NIGHT I SLEEP 4) MY BROTHER GO SCHOOL",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_first",
            "expected": 2,
            "hint": "The script opens with MORNING I WAKE-UP — the day starts with waking up. Breakfast (1) is sentence 2, sleeping (3) is sentence 7, and the brother going to school (4) is sentence 3."
          }
        ]
      },
      {
        "label": "COMPUTED — How many sentences are in the family-day script as printed in the task? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_sentence_count",
            "expected": 7,
            "hint": "The script has 7 sentences: (1) MORNING I WAKE-UP, (2) I EAT BREAKFAST WITH MY MOTHER, (3) MY BROTHER GO SCHOOL, (4) MY SISTER STAY HOME, (5) AFTERNOON I COME HOME, (6) NIGHT MY FAMILY EAT DINNER, (7) NIGHT I SLEEP."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence I EAT BREAKFAST WITH MY MOTHER, who eats breakfast with the signer? 1) The mother 2) The brother 3) The sister 4) The teacher",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_breakfast_with",
            "expected": 1,
            "hint": "WITH MY MOTHER means the mother eats breakfast with the signer. The brother (2) goes to school, the sister (3) stays home, and no teacher (4) appears in the script."
          }
        ]
      },
      {
        "label": "COMPUTED — Count the signs in the sentence MY BROTHER GO SCHOOL. How many signs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_brother_signs",
            "expected": 4,
            "hint": "MY (1) BROTHER (2) GO (3) SCHOOL (4) — four signs."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence MY SISTER STAY HOME, who stays home? 1) The brother 2) The mother 3) The sister 4) The father",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_stay_home",
            "expected": 3,
            "hint": "MY SISTER STAY HOME means the sister stays home. The brother (1) goes to school, the mother (2) eats breakfast with the signer, and no father (4) appears in the script."
          }
        ]
      },
      {
        "label": "COMPUTED — If you fingerspelled the English word MOTHER letter by letter (M-O-T-H-E-R), how many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_mother_letters",
            "expected": 6,
            "hint": "M-O-T-H-E-R is 6 letters: M (1), O (2), T (3), H (4), E (5), R (6). In normal conversation MOTHER is signed, not fingerspelled — this row only counts the letters."
          }
        ]
      },
      {
        "label": "DECISION — The sentence NIGHT MY FAMILY EAT DINNER is about which meal? 1) Breakfast 2) Dinner 3) Lunch 4) A snack",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_dinner",
            "expected": 2,
            "hint": "NIGHT MY FAMILY EAT DINNER is the evening meal — dinner. Breakfast (1) is sentence 2, lunch (3) does not appear in the script, and no snack (4) is named."
          }
        ]
      },
      {
        "label": "COMPUTED — How many family members besides the signer are named in the script? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_family_count",
            "expected": 3,
            "hint": "Three family members are named besides the signer: the mother (sentence 2), the brother (sentence 3), and the sister (sentence 4). FAMILY in sentence 6 means the whole family, not a fourth person."
          }
        ]
      },
      {
        "label": "DECISION — Which sentence in the script uses the sign WITH? 1) Sentence 1 2) Sentence 2 3) Sentence 5 4) Sentence 7",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_with",
            "expected": 2,
            "hint": "Sentence 2 is I EAT BREAKFAST WITH MY MOTHER — WITH is in sentence 2. Sentence 1 (1) is MORNING I WAKE-UP, sentence 5 (3) is AFTERNOON I COME HOME, and sentence 7 (4) is NIGHT I SLEEP."
          }
        ]
      },
      {
        "label": "COMPUTED — Count the signs in the sentence NIGHT I SLEEP. How many signs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_sleep_signs",
            "expected": 3,
            "hint": "NIGHT (1) I (2) SLEEP (3) — three signs. The time sign NIGHT counts as a sign."
          }
        ]
      },
      {
        "label": "DECISION — What is the best next step after finishing this lab? 1) Sign your own family-day script with your real family and your real routine 2) Memorize this script word for word and never change it 3) Never talk about your family in ASL 4) Only fingerspell family words from now on",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fd_next",
            "expected": 1,
            "hint": "The script is a template: swap in your real family and your real routine and sign your own version. Memorizing it unchanged (2) does not describe your life, never talking about family (3) avoids the skill, and only fingerspelling (4) ignores every family sign you learned."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "family-daily-life-lab.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the first sentence 4) Skip the video and guess from the title\",\n\"DECISION — Which sentence comes first in the family-day script? 1) I EAT BREAKFAST WITH MY MOTHER 2) MORNING I WAKE-UP 3) NIGHT I SLEEP 4) MY BROTHER GO SCHOOL\",\n\"COMPUTED — How many sentences are in the family-day script as printed in the task? (Enter the number.)\",\n\"DECISION — In the sentence I EAT BREAKFAST WITH MY MOTHER, who eats breakfast with the signer? 1) The mother 2) The brother 3) The sister 4) The teacher\",\n\"COMPUTED — Count the signs in the sentence MY BROTHER GO SCHOOL. How many signs is that? (Enter the number.)\",\n\"DECISION — In the sentence MY SISTER STAY HOME, who stays home? 1) The brother 2) The mother 3) The sister 4) The father\",\n\"COMPUTED — If you fingerspelled the English word MOTHER letter by letter (M-O-T-H-E-R), how many letters is that? (Enter the number.)\",\n\"DECISION — The sentence NIGHT MY FAMILY EAT DINNER is about which meal? 1) Breakfast 2) Dinner 3) Lunch 4) A snack\",\n\"COMPUTED — How many family members besides the signer are named in the script? (Enter the number.)\",\n\"DECISION — Which sentence in the script uses the sign WITH? 1) Sentence 1 2) Sentence 2 3) Sentence 5 4) Sentence 7\",\n\"COMPUTED — Count the signs in the sentence NIGHT I SLEEP. How many signs is that? (Enter the number.)\",\n\"DECISION — What is the best next step after finishing this lab? 1) Sign your own family-day script with your real family and your real routine 2) Memorize this script word for word and never change it 3) Never talk about your family in ASL 4) Only fingerspell family words from now on\",\n"
  },
  {
    "id": "food-and-time",
    "title": "Food & Time Lab",
    "introHtml": "<p><strong>Lab 2 — Watch, then recognize.</strong> This lab is a receptive video lab: you watch Dr. Bill Vicars' Lesson 27 video — a full lesson on food, from BREAD and BUTTER to meals — and then answer from what you saw. The practice script is printed in the task so you can follow along, and every row asks about that script: which meal, which food, what time, and how many signs and letters are in it. Read the task, watch the video twice, then answer each row.</p><p><strong>Worked example first — reading a price and a time (completed for you).</strong> A price is dollars first, then cents: 3 DOLLAR is three dollars. A time is TIME plus the number: TIME 1 is 1 o'clock. Step 1: find the number. Step 2: find the word after it — DOLLAR for money, TIME for the clock. Now watch the video and answer the rows below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE.</strong> Watch the whole signed video twice before answering. The first time, watch for the foods — which signs show the food being made or eaten. The second time, watch for the times — when each meal happens. Do not answer from memory without watching: this lab is about recognizing signs with your eyes. <a href=\"https://www.youtube.com/watch?v=EQYWE1ZUt1o\">Watch: American Sign Language (ASL) Lesson 27 — Dr. Bill Vicars, Lifeprint.com</a>. For time, also watch <a href=\"https://www.youtube.com/watch?v=p_SC5CSzrLs\">American Sign Language (ASL) Lesson 16</a>.</p><p><strong>Practice script — a food-and-time day (follow along while you watch):</strong> (1) MORNING I EAT BREAKFAST. (2) I EAT BREAD, BUTTER. (3) I DRINK COFFEE. (4) AFTERNOON TIME 1 I EAT LUNCH. (5) I EAT SOUP. (6) I DRINK WATER. (7) NIGHT TIME 7 I EAT DINNER WITH MY FAMILY. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the food signs 4) Skip the video and guess from the title",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the foods, once for the times. Answering from memory (1), watching only the food signs (3), or guessing from the title (4) skips the receptive practice the lab is for."
          }
        ]
      },
      {
        "label": "DECISION — Which meal is eaten first in the food-and-time script? 1) Breakfast 2) Lunch 3) Dinner 4) A snack",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_first_meal",
            "expected": 1,
            "hint": "The script opens with MORNING I EAT BREAKFAST — breakfast is the first meal. Lunch (2) is sentence 4, dinner (3) is sentence 7, and no snack (4) is named."
          }
        ]
      },
      {
        "label": "COMPUTED — How many sentences are in the food-and-time script as printed in the task? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_sentence_count",
            "expected": 7,
            "hint": "The script has 7 sentences: (1) MORNING I EAT BREAKFAST, (2) I EAT BREAD, BUTTER, (3) I DRINK COFFEE, (4) AFTERNOON TIME 1 I EAT LUNCH, (5) I EAT SOUP, (6) I DRINK WATER, (7) NIGHT TIME 7 I EAT DINNER WITH MY FAMILY."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence I EAT BREAD, BUTTER, which two foods are eaten? 1) Bread and butter 2) Soup and salad 3) Rice and meat 4) Apple and banana",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_bread_butter",
            "expected": 1,
            "hint": "I EAT BREAD, BUTTER names bread and butter. Soup and salad (2), rice and meat (3), and apple and banana (4) do not appear in this sentence — soup appears in sentence 5."
          }
        ]
      },
      {
        "label": "COMPUTED — Lunch is eaten at TIME 1. What time is lunch? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_lunch_time",
            "expected": 1,
            "hint": "AFTERNOON TIME 1 I EAT LUNCH — lunch is at 1 o'clock."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence I DRINK COFFEE, what is the morning drink? 1) Coffee 2) Tea 3) Milk 4) Juice",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_morning_drink",
            "expected": 1,
            "hint": "I DRINK COFFEE names coffee as the morning drink. Tea (2), milk (3), and juice (4) do not appear in the script."
          }
        ]
      },
      {
        "label": "COMPUTED — Count the signs in the sentence AFTERNOON TIME 1 I EAT LUNCH. How many signs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_lunch_signs",
            "expected": 6,
            "hint": "AFTERNOON (1) TIME (2) 1 (3) I (4) EAT (5) LUNCH (6) — six signs. The number 1 counts as a sign."
          }
        ]
      },
      {
        "label": "DECISION — Dinner is eaten at what time? 1) 1 o'clock 2) 3 o'clock 3) 7 o'clock 4) 10 o'clock",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_dinner_time",
            "expected": 3,
            "hint": "NIGHT TIME 7 I EAT DINNER WITH MY FAMILY — dinner is at 7 o'clock. 1 o'clock (1) is lunch, and 3 (2) and 10 (4) do not appear in the script."
          }
        ]
      },
      {
        "label": "COMPUTED — How many meals are named in the script? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_meal_count",
            "expected": 3,
            "hint": "Three meals are named: BREAKFAST (sentence 1), LUNCH (sentence 4), and DINNER (sentence 7)."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence I DRINK WATER, what is the afternoon drink? 1) Water 2) Coffee 3) Juice 4) Milk",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_afternoon_drink",
            "expected": 1,
            "hint": "I DRINK WATER names water as the afternoon drink. Coffee (2) is the morning drink, and juice (3) and milk (4) do not appear in the script."
          }
        ]
      },
      {
        "label": "COMPUTED — If you fingerspelled the English word BUTTER letter by letter (B-U-T-T-E-R), how many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_butter_letters",
            "expected": 6,
            "hint": "B-U-T-T-E-R is 6 letters: B (1), U (2), T (3), T (4), E (5), R (6). In normal conversation BUTTER is signed, not fingerspelled — this row only counts the letters."
          }
        ]
      },
      {
        "label": "DECISION — What is the best next step after finishing this lab? 1) Sign your own food-and-time day with your real meals, foods, and times 2) Never eat again 3) Only fingerspell food words from now on 4) Skip meals so you never need the signs",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_next",
            "expected": 1,
            "hint": "The script is a template: swap in your real meals, foods, and times and sign your own version. Never eating (2), only fingerspelling (3), and skipping meals (4) all avoid the skill instead of practicing it."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "food-and-time-lab.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the food signs 4) Skip the video and guess from the title\",\n\"DECISION — Which meal is eaten first in the food-and-time script? 1) Breakfast 2) Lunch 3) Dinner 4) A snack\",\n\"COMPUTED — How many sentences are in the food-and-time script as printed in the task? (Enter the number.)\",\n\"DECISION — In the sentence I EAT BREAD, BUTTER, which two foods are eaten? 1) Bread and butter 2) Soup and salad 3) Rice and meat 4) Apple and banana\",\n\"COMPUTED — Lunch is eaten at TIME 1. What time is lunch? (Enter the number.)\",\n\"DECISION — In the sentence I DRINK COFFEE, what is the morning drink? 1) Coffee 2) Tea 3) Milk 4) Juice\",\n\"COMPUTED — Count the signs in the sentence AFTERNOON TIME 1 I EAT LUNCH. How many signs is that? (Enter the number.)\",\n\"DECISION — Dinner is eaten at what time? 1) 1 o'clock 2) 3 o'clock 3) 7 o'clock 4) 10 o'clock\",\n\"COMPUTED — How many meals are named in the script? (Enter the number.)\",\n\"DECISION — In the sentence I DRINK WATER, what is the afternoon drink? 1) Water 2) Coffee 3) Juice 4) Milk\",\n\"COMPUTED — If you fingerspelled the English word BUTTER letter by letter (B-U-T-T-E-R), how many letters is that? (Enter the number.)\",\n\"DECISION — What is the best next step after finishing this lab? 1) Sign your own food-and-time day with your real meals, foods, and times 2) Never eat again 3) Only fingerspell food words from now on 4) Skip meals so you never need the signs\",\n"
  }
];
