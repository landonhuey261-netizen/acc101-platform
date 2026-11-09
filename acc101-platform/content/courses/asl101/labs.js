// asl101 — Receptive video labs.
module.exports = [
  {
    "id": "first-signs",
    "title": "First Signs Lab: Alphabet & Numbers Recognition",
    "introHtml": "<p><strong>Lab 1 — Watch, then recognize.</strong> This lab is a receptive video lab: you watch a signed video, then answer from what you saw and what you learned in Module 1. The video is Dr. Bill Vicars' beginner fingerspelling practice with vocabulary review from Lifeprint Lessons 1 and 2 — a real signer fingerspelling real words, at a beginner's speed. Read the task, watch the video twice, then answer each row.</p><p><strong>Worked example first — a signed alphabet (completed for you).</strong> The manual alphabet has 26 letters, A through Z. Step 1: most letters are still handshapes. Step 2: two letters move — J traces a J and Z traces a Z. Step 3: that means 26 minus 2 equals 24 still handshapes. Now watch the video and answer the rows below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE.</strong> Watch the whole signed video twice before answering. The first time, watch for the general idea — which letters and numbers you recognize. The second time, watch for details — which letters move, how the numbers are formed, and how slowly the signer spells. Do not answer from memory without watching: this lab is about recognizing signs with your eyes, not recalling them from a list. <a href=\"https://www.youtube.com/watch?v=3c0xMpTgTT4\">Watch: Fingerspelling Practice (beginner level) and vocabulary review (Lessons 01 & 02) — Lifeprint.com</a>. For numbers, also watch <a href=\"https://www.youtube.com/watch?v=ADhWpau22Aw\">Numbers 1 through 10 in American Sign Language (ASL)</a>.</p><p><strong>What the video covers:</strong> (1) The full manual alphabet, A–Z, fingerspelled by a real signer. (2) Words from Lessons 1 and 2, including NAME, WHAT, WHERE, and THANK-YOU. (3) Numbers 1 through 10, signed one at a time. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the first 10 seconds 4) Read the video comments instead of watching",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the general idea, once for details. Answering from memory (1), watching only 10 seconds (3), or reading comments (4) skips the receptive practice the lab is for."
          }
        ]
      },
      {
        "label": "COMPUTED — How many letters are in the manual alphabet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_alphabet_count",
            "expected": 26,
            "hint": "The manual alphabet has one handshape for each letter A–Z: 26 letters in total."
          }
        ]
      },
      {
        "label": "DECISION — Which two letters of the manual alphabet move? 1) A and B 2) J and Z 3) M and N 4) X and Y",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_moving_letters",
            "expected": 2,
            "hint": "J traces a J shape and Z traces a Z shape. Every other letter is a still handshape — A and B (1), M and N (3), and X and Y (4) all hold still."
          }
        ]
      },
      {
        "label": "COMPUTED — Fingerspell the word HELLO letter by letter: H-E-L-L-O. How many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_hello_letters",
            "expected": 5,
            "hint": "H-E-L-L-O is 5 letters: H (1), E (2), L (3), L (4), O (5). The double L counts twice — two handshapes, one after the other."
          }
        ]
      },
      {
        "label": "COMPUTED — The video shows the numbers 1 through 10. How many numbers is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_numbers_count",
            "expected": 10,
            "hint": "Numbers 1 through 10 is 10 numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10."
          }
        ]
      },
      {
        "label": "DECISION — How is the number 10 signed? 1) An open hand 2) A fist with the thumb up, shaken once 3) The index finger pointing up 4) Two hands waving",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ten",
            "expected": 2,
            "hint": "10 is a thumb-up fist shaken once. An open hand (1) is 5, an index finger up (3) is 1, and waving (4) is a greeting, not a number."
          }
        ]
      },
      {
        "label": "COMPUTED — Fingerspell the name BILL letter by letter: B-I-L-L. How many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_bill_letters",
            "expected": 4,
            "hint": "B-I-L-L is 4 letters: B (1), I (2), L (3), L (4). The double L counts twice."
          }
        ]
      },
      {
        "label": "DECISION — Which sign opens every signed introduction? 1) GOODBYE 2) HELLO 3) THANK-YOU 4) SORRY",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_opens",
            "expected": 2,
            "hint": "HELLO opens every introduction — a flat hand at the forehead moving outward. GOODBYE (1) closes a conversation, THANK-YOU (3) thanks someone, and SORRY (4) apologizes."
          }
        ]
      },
      {
        "label": "COMPUTED — Count the signs in the sentence I LEARN SIGN. How many signs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_learn_sign_count",
            "expected": 3,
            "hint": "I (1) LEARN (2) SIGN (3) — three signs. There is no sign for 'am' in ASL, so the English word 'am' adds nothing to the count."
          }
        ]
      },
      {
        "label": "DECISION — When numbers 1 through 5 are signed on their own, which way does the palm usually face? 1) Forward, away from the signer 2) Back, toward the signer 3) Down at the floor 4) Up at the ceiling",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_palm",
            "expected": 2,
            "hint": "On their own, 1–5 are usually palm-back, toward the signer. In a longer string like a phone number, the palm faces forward (1). The palm does not face down (3) or up (4) for numbers."
          }
        ]
      },
      {
        "label": "COMPUTED — Fingerspell the letters A-S-L. How many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_asl_letters",
            "expected": 3,
            "hint": "A-S-L is 3 letters: A (1), S (2), L (3)."
          }
        ]
      },
      {
        "label": "DECISION — What is the best next step after finishing this lab? 1) Practice the alphabet a little every day and fingerspell your own name until it is smooth and clear 2) Never practice the alphabet again 3) Only watch videos without signing along 4) Skip to ASL II without practicing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_next",
            "expected": 1,
            "hint": "Daily practice is how the alphabet becomes automatic — a little every day beats one long session. Never practicing (2), watching without signing (3), and skipping ahead (4) all leave the alphabet half-learned."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "first-signs-lab.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the first 10 seconds 4) Read the video comments instead of watching\",\n\"COMPUTED — How many letters are in the manual alphabet? (Enter the number.)\",\n\"DECISION — Which two letters of the manual alphabet move? 1) A and B 2) J and Z 3) M and N 4) X and Y\",\n\"COMPUTED — Fingerspell the word HELLO letter by letter: H-E-L-L-O. How many letters is that? (Enter the number.)\",\n\"COMPUTED — The video shows the numbers 1 through 10. How many numbers is that? (Enter the number.)\",\n\"DECISION — How is the number 10 signed? 1) An open hand 2) A fist with the thumb up, shaken once 3) The index finger pointing up 4) Two hands waving\",\n\"COMPUTED — Fingerspell the name BILL letter by letter: B-I-L-L. How many letters is that? (Enter the number.)\",\n\"DECISION — Which sign opens every signed introduction? 1) GOODBYE 2) HELLO 3) THANK-YOU 4) SORRY\",\n\"COMPUTED — Count the signs in the sentence I LEARN SIGN. How many signs is that? (Enter the number.)\",\n\"DECISION — When numbers 1 through 5 are signed on their own, which way does the palm usually face? 1) Forward, away from the signer 2) Back, toward the signer 3) Down at the floor 4) Up at the ceiling\",\n\"COMPUTED — Fingerspell the letters A-S-L. How many letters is that? (Enter the number.)\",\n\"DECISION — What is the best next step after finishing this lab? 1) Practice the alphabet a little every day and fingerspell your own name until it is smooth and clear 2) Never practice the alphabet again 3) Only watch videos without signing along 4) Skip to ASL II without practicing\",\n"
  },
  {
    "id": "greetings",
    "title": "Greetings Lab: Signed Introductions",
    "introHtml": "<p><strong>Lab 2 — Watch a signed introduction, then recognize it.</strong> This lab is a receptive video lab: you watch Dr. Bill Vicars sign a short narrative introduction — 'Hi, I'm John Smith!' — and then answer from what you saw. The story is printed in the task so you can follow along, and every row asks about that story: which sentence came first, which words were fingerspelled, and how many signs and letters are in it. Read the task, watch the video twice, then answer each row.</p><p><strong>Worked example first — the introduction order (completed for you).</strong> A signed introduction runs HELLO, MY NAME + fingerspelled name, NICE MEET-YOU, then a little about yourself. Step 1: HELLO opens it. Step 2: the name is fingerspelled. Step 3: NICE MEET-YOU follows the name. Now watch John's introduction and answer the rows below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE.</strong> Watch the whole signed video twice before answering. The first time, watch for the story — who John is and what he says about himself. The second time, watch for details — which words he fingerspells and how many letters each name has. Do not answer from memory without watching: this lab is about recognizing signs with your eyes. <a href=\"https://www.youtube.com/watch?v=2OIBaHFvcP0\">Watch: Hi, I'm John Smith! (brief narrative) — Dr. Bill Vicars, Lifeprint.com</a>.</p><p><strong>The story, as signed (gloss):</strong> (1) HI I JOHN SMITH. (2) NICE-MEET-YOU. (3) I HEARING. (4) I STUDENT C-E-N-T-R-A-L HS. (5) I LEARN SIGN. (6) MY TEACHER NAME B-I-L-L V-I-C-A-R-S. (7) HE TEACH WELL. (8) I UNDERSTAND HIM. In English: 'Hi! I am John Smith. It is nice to meet you. I am hearing. I am a student at Central High School. I am learning sign language. My teacher's name is Bill Vicars. He teaches well! I understand him.' For each row, enter the option number or the computed value asked for.</p>",
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
            "key": "gr_practice",
            "expected": 2,
            "hint": "Step 0 governs: watch the whole signed video twice before answering — once for the story, once for the details. Answering from memory (1), watching one sentence (3), or guessing from the title (4) skips the receptive practice the lab is for."
          }
        ]
      },
      {
        "label": "DECISION — Which sentence was signed first in John's introduction? 1) NICE-MEET-YOU 2) HI I JOHN SMITH 3) I LEARN SIGN 4) I HEARING",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_first",
            "expected": 2,
            "hint": "The story opens with HI I JOHN SMITH — greeting first, then the name. NICE-MEET-YOU (1) comes second, I LEARN SIGN (3) comes fifth, and I HEARING (4) comes third."
          }
        ]
      },
      {
        "label": "COMPUTED — John's name is fingerspelled J-O-H-N S-M-I-T-H. How many letters is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_john_smith_letters",
            "expected": 9,
            "hint": "JOHN is 4 letters (J-O-H-N) and SMITH is 5 letters (S-M-I-T-H). 4 + 5 = 9 letters in total."
          }
        ]
      },
      {
        "label": "COMPUTED — The school name is fingerspelled C-E-N-T-R-A-L. How many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_central_letters",
            "expected": 7,
            "hint": "C-E-N-T-R-A-L is 7 letters: C (1), E (2), N (3), T (4), R (5), A (6), L (7)."
          }
        ]
      },
      {
        "label": "DECISION — The sentence I STUDENT C-E-N-T-R-A-L HS means: 1) I am a student at Central High School 2) I teach at Central High School 3) I live in a town called Central 4) I am the principal of Central High School",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_student",
            "expected": 1,
            "hint": "I STUDENT C-E-N-T-R-A-L HS means 'I am a student at Central High School.' John is the student, not the teacher (2) or the principal (4), and no town called Central (3) is named."
          }
        ]
      },
      {
        "label": "COMPUTED — The teacher's last name is fingerspelled V-I-C-A-R-S. How many letters is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_vicars_letters",
            "expected": 6,
            "hint": "V-I-C-A-R-S is 6 letters: V (1), I (2), C (3), A (4), R (5), S (6)."
          }
        ]
      },
      {
        "label": "COMPUTED — Count the signs in the sentence I LEARN SIGN. How many signs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_learn_sign_count",
            "expected": 3,
            "hint": "I (1) LEARN (2) SIGN (3) — three signs. ASL has no sign for 'am', so the English 'am' adds nothing to the count."
          }
        ]
      },
      {
        "label": "DECISION — In the sentence MY TEACHER NAME B-I-L-L V-I-C-A-R-S, what is the teacher's first name? 1) John 2) Bill 3) Vicars 4) Smith",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_teacher_first",
            "expected": 2,
            "hint": "The teacher's first name is Bill — B-I-L-L comes first, then the last name V-I-C-A-R-S. John (1) is the student, Vicars (3) is the last name, and Smith (4) is John's last name."
          }
        ]
      },
      {
        "label": "DECISION — In a signed introduction, NICE-MEET-YOU comes: 1) Right after the name 2) Before HELLO 3) After GOODBYE 4) Instead of the name",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_nice_position",
            "expected": 1,
            "hint": "The order is HELLO, MY NAME + fingerspelled name, then NICE-MEET-YOU. It never comes before HELLO (2) or after GOODBYE (3), and it does not replace the name (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — How many sentences are in the story as printed in the task? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_sentence_count",
            "expected": 8,
            "hint": "The story has 8 sentences: (1) HI I JOHN SMITH, (2) NICE-MEET-YOU, (3) I HEARING, (4) I STUDENT C-E-N-T-R-A-L HS, (5) I LEARN SIGN, (6) MY TEACHER NAME B-I-L-L V-I-C-A-R-S, (7) HE TEACH WELL, (8) I UNDERSTAND HIM."
          }
        ]
      },
      {
        "label": "DECISION — The last sentence is I UNDERSTAND HIM. What does John understand? 1) His teacher's signing 2) A book he is reading 3) A map 4) Nothing — he is confused",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_understand",
            "expected": 1,
            "hint": "HIM is his teacher, Bill Vicars — John understands his teacher's signing. No book (2) or map (3) appears in the story, and UNDERSTAND is the opposite of confused (4)."
          }
        ]
      },
      {
        "label": "DECISION — What is the best next step after finishing this lab? 1) Sign your own version of the story with your real name, school, and teacher 2) Memorize John's name and use it as your own 3) Never introduce yourself in ASL 4) Only fingerspell from now on and never use signs",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gr_next",
            "expected": 1,
            "hint": "The story is a template: swap in your real name, school, and teacher and sign your own version. Memorizing John's name (2) does not introduce you, never introducing yourself (3) avoids the skill, and only fingerspelling (4) ignores every sign you learned."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "greetings-lab.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What is the right first move? 1) Answer from memory without watching 2) Watch the whole signed video twice before answering 3) Watch only the first sentence 4) Skip the video and guess from the title\",\n\"DECISION — Which sentence was signed first in John's introduction? 1) NICE-MEET-YOU 2) HI I JOHN SMITH 3) I LEARN SIGN 4) I HEARING\",\n\"COMPUTED — John's name is fingerspelled J-O-H-N S-M-I-T-H. How many letters is that in total? (Enter the number.)\",\n\"COMPUTED — The school name is fingerspelled C-E-N-T-R-A-L. How many letters is that? (Enter the number.)\",\n\"DECISION — The sentence I STUDENT C-E-N-T-R-A-L HS means: 1) I am a student at Central High School 2) I teach at Central High School 3) I live in a town called Central 4) I am the principal of Central High School\",\n\"COMPUTED — The teacher's last name is fingerspelled V-I-C-A-R-S. How many letters is that? (Enter the number.)\",\n\"COMPUTED — Count the signs in the sentence I LEARN SIGN. How many signs is that? (Enter the number.)\",\n\"DECISION — In the sentence MY TEACHER NAME B-I-L-L V-I-C-A-R-S, what is the teacher's first name? 1) John 2) Bill 3) Vicars 4) Smith\",\n\"DECISION — In a signed introduction, NICE-MEET-YOU comes: 1) Right after the name 2) Before HELLO 3) After GOODBYE 4) Instead of the name\",\n\"COMPUTED — How many sentences are in the story as printed in the task? (Enter the number.)\",\n\"DECISION — The last sentence is I UNDERSTAND HIM. What does John understand? 1) His teacher's signing 2) A book he is reading 3) A map 4) Nothing — he is confused\",\n\"DECISION — What is the best next step after finishing this lab? 1) Sign your own version of the story with your real name, school, and teacher 2) Memorize John's name and use it as your own 3) Never introduce yourself in ASL 4) Only fingerspell from now on and never use signs\",\n"
  }
];
