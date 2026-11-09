module.exports = [
  {
    "id": "fingerspelling-decoding",
    "title": "Fingerspelling Decoding",
    "introHtml": "<p><strong>Receptive video lab — watch Dr. Bill fingerspell, then read what he spelled.</strong> In this lab you watch a real Lifeprint fingerspelling practice video, then answer option-number and computed rows about what you saw. The video is: <a href=\"https://www.youtube.com/watch?v=3c0xMpTgTT4\">Fingerspelling Practice (beginner level) and vocabulary review (Lesson 01 &amp; lesson 02) — Dr. Bill Vicars, Lifeprint</a>. Watch it on YouTube, then come back and answer.</p><p><strong>Worked example first — a healthy reading (completed for you).</strong> A student watches a fingerspelled word twice. Step 1: first watch — the word has 4 letters, starts with B, ends with K. Step 2: second watch — the middle letters are A and C. Step 3: the word is BACK, and the sentence is about going home, which fits. That is the watch-twice routine. Now do the same with the video below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Open the video linked in the introduction and watch it all the way through once, just to see the shape of the words. Then watch it a second time, reading each fingerspelled word as it comes. Do not answer any row until you have watched the whole video twice. Receptive reading is a skill, and the practice is the point.</p><p><strong>The video, as you will find it:</strong> (1) Dr. Bill fingerspells beginner practice words from Lifeprint Lessons 01 and 02. (2) Some words are short and common, and some have become lexicalized signs. (3) Some words have double letters, shown by a small bounce or slide. (4) The words are spelled at a steady beginner pace, and the vocabulary is reviewed as the video goes on. For each row, enter the option number or the computed value asked for.</p>",
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
            "key": "fs_practice",
            "expected": 2,
            "hint": "Step 0 is the practice note: watch the whole signed video twice before answering. Answering from memory (1), watching only ten seconds (3), or guessing (4) all skip the practice that makes the rest of the lab possible."
          }
        ]
      },
      {
        "label": "DECISION — In the video, Dr. Bill fingerspells a short word that has become a lexicalized sign. Which word is it? 1) #BUS 2) COMPUTER 3) YESTERDAY 4) HAPPY",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_lex",
            "expected": 1,
            "hint": "The video's practice words include #BUS, a short word spelled so often it has melted into one smooth sign. COMPUTER (2) is a longer word, YESTERDAY (3) and HAPPY (4) have their own signs and are not lexicalized spellings in this practice set."
          }
        ]
      },
      {
        "label": "COMPUTED — The practice video fingerspells 3 words in its first set and 4 words in its second set. How many words is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_total_words",
            "expected": 7,
            "hint": "3 + 4 = 7 words in total across the two practice sets."
          }
        ]
      },
      {
        "label": "DECISION — A word in the video is fingerspelled with a double letter. How is the double letter shown? 1) Two separate letter shapes 2) A small bounce or slide of the hand 3) By skipping the letter 4) With the other hand",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_double",
            "expected": 2,
            "hint": "A double letter is shown by a small bounce or slide, not two separate shapes. Two separate shapes (1) would read as separate letters, skipping (3) loses a letter, and the other hand (4) is not used."
          }
        ]
      },
      {
        "label": "DECISION — Which pair of letters is hardest to tell apart at speed in the video? 1) J and Z 2) E and S 3) A and B 4) C and D",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_pair",
            "expected": 2,
            "hint": "E and S are close fist shapes that differ only in thumb place, and they blur at speed. J and Z (1) are the moving letters and are easy to tell apart. A and B (3) and C and D (4) look very different."
          }
        ]
      },
      {
        "label": "COMPUTED — You watch the video twice, as Step 0 says. Each viewing takes 6 minutes. How many minutes of watching is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_minutes",
            "expected": 12,
            "hint": "2 viewings x 6 minutes = 12 minutes of watching in total."
          }
        ]
      },
      {
        "label": "DECISION — The signer spells a name, then points at the person. Why does the signer point after spelling? 1) To show off 2) To use the name sign, short form, or pointing after the full spelling — full first, short after 3) Because the name was wrong 4) Because pointing replaces the name",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_point",
            "expected": 2,
            "hint": "Full first, short after: after the full spelling, a name sign, short form, or pointing keeps the conversation moving. Showing off (1) is not the reason, the name was not wrong (3), and pointing does not replace the first spelling (4)."
          }
        ]
      },
      {
        "label": "DECISION — A word in the video starts with B and ends with K, and the sentence is about going home. Which word is it most likely? 1) BOOK 2) BACK 3) BANK 4) BARK",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_back",
            "expected": 2,
            "hint": "BACK fits the shape (four letters, B to K) and the context (going home). BOOK (1) ends in K but does not fit going home. BANK (3) is a place for money. BARK (4) is a dog sound."
          }
        ]
      },
      {
        "label": "COMPUTED — The video shows 8 fingerspelled words. You read 6 of them correctly on your first watch. How many did you miss? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_missed",
            "expected": 2,
            "hint": "8 - 6 = 2 words missed on the first watch. Watch them again, twice, and the missed ones are the ones to practice."
          }
        ]
      },
      {
        "label": "DECISION — What is the best thing to do when you miss a fingerspelled word in conversation? 1) Nod and pretend you understood 2) Sign WHAT with a questioning face and let the signer repeat it 3) Walk away 4) Guess silently and never check",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_miss",
            "expected": 2,
            "hint": "Asking for a repeat is normal, polite, and expected. Nodding and pretending (1) breaks the conversation later. Walking away (3) ends it. An unchecked guess (4) can be wrong."
          }
        ]
      },
      {
        "label": "COMPUTED — You practice fingerspelling for 5 days, 10 minutes each day. How many minutes of practice is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_practice_min",
            "expected": 50,
            "hint": "5 days x 10 minutes = 50 minutes of practice in total."
          }
        ]
      },
      {
        "label": "DECISION — What is the right way to close this lab? 1) Send in your answers without watching the video 2) Watch the video twice, answer every row, and check any word you missed by watching it again 3) Copy someone else's answers 4) Answer only the rows you are sure about",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_close",
            "expected": 2,
            "hint": "Close the lab by doing the work: watch twice, answer every row, and re-watch the words you missed. Skipping the video (1), copying (3), or answering only the easy rows (4) all leave the skill unpracticed."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "fingerspelling-decoding.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says: watch the whole signed video twice before answering. What should you do first? 1) Answer the rows from memory without watching 2) Watch the whole signed video twice, then answer 3) Watch only the first ten seconds 4) Skip the video and guess\",\n\"DECISION — In the video, Dr. Bill fingerspells a short word that has become a lexicalized sign. Which word is it? 1) #BUS 2) COMPUTER 3) YESTERDAY 4) HAPPY\",\n\"COMPUTED — The practice video fingerspells 3 words in its first set and 4 words in its second set. How many words is that in total? (Enter the number.)\",\n\"DECISION — A word in the video is fingerspelled with a double letter. How is the double letter shown? 1) Two separate letter shapes 2) A small bounce or slide of the hand 3) By skipping the letter 4) With the other hand\",\n\"DECISION — Which pair of letters is hardest to tell apart at speed in the video? 1) J and Z 2) E and S 3) A and B 4) C and D\",\n\"COMPUTED — You watch the video twice, as Step 0 says. Each viewing takes 6 minutes. How many minutes of watching is that in total? (Enter the number.)\",\n\"DECISION — The signer spells a name, then points at the person. Why does the signer point after spelling? 1) To show off 2) To use the name sign, short form, or pointing after the full spelling — full first, short after 3) Because the name was wrong 4) Because pointing replaces the name\",\n\"DECISION — A word in the video starts with B and ends with K, and the sentence is about going home. Which word is it most likely? 1) BOOK 2) BACK 3) BANK 4) BARK\",\n\"COMPUTED — The video shows 8 fingerspelled words. You read 6 of them correctly on your first watch. How many did you miss? (Enter the number.)\",\n\"DECISION — What is the best thing to do when you miss a fingerspelled word in conversation? 1) Nod and pretend you understood 2) Sign WHAT with a questioning face and let the signer repeat it 3) Walk away 4) Guess silently and never check\",\n\"COMPUTED — You practice fingerspelling for 5 days, 10 minutes each day. How many minutes of practice is that in total? (Enter the number.)\",\n\"DECISION — What is the right way to close this lab? 1) Send in your answers without watching the video 2) Watch the video twice, answer every row, and check any word you missed by watching it again 3) Copy someone else's answers 4) Answer only the rows you are sure about\",\n"
  }
];
