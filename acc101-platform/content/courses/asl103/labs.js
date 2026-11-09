// asl103 — Receptive video labs.
module.exports = [
  {
    "id": "describing-people",
    "title": "Describing People",
    "introHtml": "<p><strong>Lab — Describing People.</strong> Watch Dr. Bill describe himself in a short signed story, then answer each row from what he actually signed. The video is <a href=\"https://www.youtube.com/watch?v=EPi9XXrbun8\">ASL Lesson 20 Story — Dr. Bill describes himself, past and present (YouTube)</a>. His story, in gloss, is: PAST I YOUNG, MY HAIR CURLY, BROWN. MY BODY THIN. MYSELF HANDSOME TRUE. NOW? DIFFERENT, OLDER ME. HAIR ME WHAT? BUZZ-CUT! WHY? hair-FALL-out! NOT TRUE FAT I, BUT IT PIZZA-STORE KNOW MY FIRST NAME! Read the task, then answer each row.</p><p><strong>Worked example first — a different description (completed for you).</strong> Another signer describes her sister: SISTER, TALL, HAIR LONG, BLACK, EYES BROWN. Step 1: the topic is SISTER. Step 2: the comments are TALL, HAIR LONG BLACK, EYES BROWN. Step 3: in English, \"My sister is tall, has long black hair, and has brown eyes.\" That is how a description is read: topic first, then one feature at a time. Now watch Dr. Bill's story below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> This lab is about receptive understanding — what you can see and understand when someone signs to you. Watch the video all the way through once to get the whole story, then watch it a second time and notice each sentence in order. Do not answer from memory or from guessing: the answers are in the signing.</p><p><strong>The story, as he signs it (10 sentences):</strong> (1) PAST I YOUNG. (2) MY HAIR CURLY, BROWN. (3) MY BODY THIN. (4) MYSELF HANDSOME. (5) TRUE! (6) NOW? DIFFERENT, OLDER ME. (7) HAIR ME WHAT? BUZZ-CUT! (8) WHY? hair-FALL-out! (9) NOT TRUE FAT ME. (10) BUT IT PIZZA-STORE KNOW MY FIRST NAME! For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What should you do first? 1) Watch the whole video twice, then answer 2) Answer from memory without watching 3) Watch only the first 10 seconds and guess the rest 4) Skip the video and answer from the English translation",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_practice",
            "expected": 1,
            "hint": "Step 0 governs: this lab tests receptive understanding, so you must watch the signing itself — twice — before answering. Answering from memory (2), from 10 seconds (3), or from the translation (4) skips the skill the lab is testing."
          }
        ]
      },
      {
        "label": "COMPUTED — The story has 10 sentences. How many sentences are in the story? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_count",
            "expected": 10,
            "hint": "Count the numbered sentences in the task: (1) through (10). There are 10 sentences in the story."
          }
        ]
      },
      {
        "label": "DECISION — Which sentence is signed first? 1) MY HAIR CURLY, BROWN 2) PAST I YOUNG 3) MY BODY THIN 4) MYSELF HANDSOME",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_first",
            "expected": 2,
            "hint": "Sentence (1) is PAST I YOUNG — the time sign comes first, setting the story in the past, before any description. The hair sentence (1) is second, the body sentence (3) is third, and the handsome sentence (4) is fourth."
          }
        ]
      },
      {
        "label": "DECISION — What color was the signer's hair when he was young? 1) Black 2) Brown 3) Blond 4) Gray",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_hair_color",
            "expected": 2,
            "hint": "Sentence (2) is MY HAIR CURLY, BROWN — curly and brown. Black (1), blond (3), and gray (4) are never signed."
          }
        ]
      },
      {
        "label": "DECISION — How does the signer describe his body when he was young? 1) Fat 2) Strong 3) Thin 4) Tall",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_body",
            "expected": 3,
            "hint": "Sentence (3) is MY BODY THIN. Fat (1) is what he later says is NOT true, strong (2) is never signed, and tall (4) is never signed."
          }
        ]
      },
      {
        "label": "COMPUTED — How many sentences in the story mention his hair? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_hair_count",
            "expected": 3,
            "hint": "Three sentences mention hair: (2) MY HAIR CURLY, BROWN, (7) HAIR ME WHAT? BUZZ-CUT!, and (8) WHY? hair-FALL-out! No other sentence mentions hair."
          }
        ]
      },
      {
        "label": "DECISION — What does the signer say about his hair now? 1) It is long 2) It is a buzz-cut 3) It is curly 4) It is gone completely",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_hair_now",
            "expected": 2,
            "hint": "Sentence (7) is HAIR ME WHAT? BUZZ-CUT! — a rhetorical question answered with BUZZ-CUT. Long (1) and curly (3) describe his young hair, not his hair now. Gone completely (4) is too strong: a buzz-cut is very short hair, not no hair."
          }
        ]
      },
      {
        "label": "DECISION — Why did he get a buzz-cut? 1) He likes the style 2) His hair is falling out 3) His barber suggested it 4) It is summer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_why",
            "expected": 2,
            "hint": "Sentence (8) is WHY? hair-FALL-out! — a rhetorical question answered with the reason: his hair is falling out. Liking the style (1), the barber (3), and summer (4) are never signed."
          }
        ]
      },
      {
        "label": "DECISION — What does the signer say is NOT true about himself? 1) That he is old 2) That he is fat 3) That he is handsome 4) That he is young",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_not_true",
            "expected": 2,
            "hint": "Sentence (9) is NOT TRUE FAT ME — he says it is not true that he is fat. He does say he is older now (1), he does say he was handsome (3), and he says he was young in the past, not now (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The story has 10 sentences. How many sentences come before the sentence about the pizza store? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_before_pizza",
            "expected": 9,
            "hint": "The pizza-store sentence is sentence (10), the last one. 10 − 1 = 9 sentences come before it."
          }
        ]
      },
      {
        "label": "DECISION — What does the pizza store know? 1) His address 2) His first name 3) His phone number 4) His usual order",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_pizza",
            "expected": 2,
            "hint": "Sentence (10) is BUT IT PIZZA-STORE KNOW MY FIRST NAME! — the store knows his first name, the joke being that he goes there so often they know him. His address (1), phone number (3), and usual order (4) are never signed."
          }
        ]
      },
      {
        "label": "DECISION — What is the main point of the story? 1) The signer is describing how he has changed as he got older 2) The signer is ordering a pizza 3) The signer is teaching a recipe 4) The signer is lost and asking for directions",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dp_point",
            "expected": 1,
            "hint": "The story contrasts past and present — young with curly brown hair and a thin body, now older with a buzz-cut — and ends with a joke about the pizza store. He is not ordering a pizza (2), teaching a recipe (3), or asking for directions (4)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "describing-people.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What should you do first? 1) Watch the whole video twice, then answer 2) Answer from memory without watching 3) Watch only the first 10 seconds and guess the rest 4) Skip the video and answer from the English translation\",\n\"COMPUTED — The story has 10 sentences. How many sentences are in the story? (Enter the number.)\",\n\"DECISION — Which sentence is signed first? 1) MY HAIR CURLY, BROWN 2) PAST I YOUNG 3) MY BODY THIN 4) MYSELF HANDSOME\",\n\"DECISION — What color was the signer's hair when he was young? 1) Black 2) Brown 3) Blond 4) Gray\",\n\"DECISION — How does the signer describe his body when he was young? 1) Fat 2) Strong 3) Thin 4) Tall\",\n\"COMPUTED — How many sentences in the story mention his hair? (Enter the number.)\",\n\"DECISION — What does the signer say about his hair now? 1) It is long 2) It is a buzz-cut 3) It is curly 4) It is gone completely\",\n\"DECISION — Why did he get a buzz-cut? 1) He likes the style 2) His hair is falling out 3) His barber suggested it 4) It is summer\",\n\"DECISION — What does the signer say is NOT true about himself? 1) That he is old 2) That he is fat 3) That he is handsome 4) That he is young\",\n\"COMPUTED — The story has 10 sentences. How many sentences come before the sentence about the pizza store? (Enter the number.)\",\n\"DECISION — What does the pizza store know? 1) His address 2) His first name 3) His phone number 4) His usual order\",\n\"DECISION — What is the main point of the story? 1) The signer is describing how he has changed as he got older 2) The signer is ordering a pizza 3) The signer is teaching a recipe 4) The signer is lost and asking for directions\",\n"
  },
  {
    "id": "directions",
    "title": "Directions",
    "introHtml": "<p><strong>Lab — Directions.</strong> Watch Dr. Bill sign directions and explanations in <a href=\"https://www.youtube.com/watch?v=4l2ykuNawGA\">ASL Lesson 57 — Explain / Describe Directions (YouTube)</a>, then work the route below. The video shows how directions are signed — starting point first, one step at a time, each step ending at a landmark. The route in the task is the one you will follow, step by step, the way the video teaches. Read the task, then answer each row.</p><p><strong>Worked example first — a short route (completed for you).</strong> A different route: YOU SCHOOL HERE, GO STRAIGHT 1 BLOCK, TURN LEFT, STORE THERE. Step 1: the start is the school. Step 2: go straight 1 block. Step 3: turn left. Step 4: the store is there. One turn, one block, one destination. Now work the longer route below.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> This lab is about receptive understanding — what you can see and understand when someone signs directions to you. Watch the video all the way through once to see how directions are signed, then watch it a second time and notice how each step starts where the last one ended. Do not answer from memory or from guessing: the answers are in the route below, signed the way the video teaches.</p><p><strong>The route, as signed:</strong> (1) YOU SCHOOL, HERE. (2) GO STRAIGHT 3 BLOCKS. (3) TURN LEFT, CORNER. (4) GO STRAIGHT TO BRIDGE. (5) TURN RIGHT. (6) GO 1 BLOCK. (7) STORE RIGHT, THERE. (8) LIBRARY NEXT-TO STORE. (9) PARKING-LOT BEHIND STORE. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What should you do first? 1) Watch the whole video twice, then answer 2) Answer from memory without watching 3) Watch only the first 10 seconds and guess the rest 4) Skip the video and answer from the English translation",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_practice",
            "expected": 1,
            "hint": "Step 0 governs: this lab tests receptive understanding, so you must watch the signing itself — twice — before answering. Answering from memory (2), from 10 seconds (3), or from the translation (4) skips the skill the lab is testing."
          }
        ]
      },
      {
        "label": "COMPUTED — How many blocks do you go straight at the start of the route? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_first_blocks",
            "expected": 3,
            "hint": "Step (2) is GO STRAIGHT 3 BLOCKS. The first leg of the route is 3 blocks."
          }
        ]
      },
      {
        "label": "DECISION — Which way do you turn at the corner? 1) Right 2) Left 3) Straight on 4) Back the way you came",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_turn",
            "expected": 2,
            "hint": "Step (3) is TURN LEFT, CORNER. The turn at the corner is to the left. Right (1) is the turn after the bridge, not at the corner."
          }
        ]
      },
      {
        "label": "DECISION — After the turn at the corner, what landmark do you go straight to? 1) The school 2) The bridge 3) The store 4) The library",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_landmark",
            "expected": 2,
            "hint": "Step (4) is GO STRAIGHT TO BRIDGE. The bridge is the landmark that ends that leg of the route. The school (1) is the starting point, the store (3) comes later, and the library (4) is beside the store."
          }
        ]
      },
      {
        "label": "COMPUTED — You go 3 blocks at the start, then 1 block after the turn past the bridge. How many blocks do you travel in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_total_blocks",
            "expected": 4,
            "hint": "3 blocks at the start plus 1 block after the bridge: 3 + 1 = 4 blocks in total."
          }
        ]
      },
      {
        "label": "DECISION — Where is the store? 1) On the left 2) On the right 3) Behind the bridge 4) Across the street from the school",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_store",
            "expected": 2,
            "hint": "Step (7) is STORE RIGHT, THERE. The store is on the right after the last leg. Left (1) is the turn at the corner, not the store's side. The bridge (3) is a landmark passed earlier, and the school (4) is the starting point."
          }
        ]
      },
      {
        "label": "DECISION — What is next to the store? 1) The school 2) The library 3) The parking lot 4) The bridge",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_next_to",
            "expected": 2,
            "hint": "Step (8) is LIBRARY NEXT-TO STORE. The library is beside the store. The school (1) is the starting point, the parking lot (3) is behind the store, and the bridge (4) is a landmark passed earlier."
          }
        ]
      },
      {
        "label": "DECISION — Where is the parking lot? 1) In front of the store 2) Behind the store 3) Next to the library 4) Across the bridge",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_parking",
            "expected": 2,
            "hint": "Step (9) is PARKING-LOT BEHIND STORE. The parking lot is behind the store. In front (1) is the opposite side, next to the library (3) is the library's spot, and across the bridge (4) is not signed."
          }
        ]
      },
      {
        "label": "COMPUTED — How many turns are in the whole route? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_turns",
            "expected": 2,
            "hint": "Two turns: TURN LEFT at the corner in step (3), and TURN RIGHT after the bridge in step (5). Every other step is going straight."
          }
        ]
      },
      {
        "label": "DECISION — If you miss the turn at the corner and keep going straight, what happens? 1) You arrive at the store anyway 2) You pass the bridge on the wrong side and miss the store 3) You arrive at the library 4) You turn around automatically",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_miss",
            "expected": 2,
            "hint": "The route turns left at the corner before going to the bridge. If you keep going straight past the corner, you never reach the bridge on the right road, so you miss the turn after it and the store. The store (1) and the library (3) are both past the missed turn, and nothing turns you around automatically (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The route has 3 straight blocks at the start and 1 block after the turn past the bridge. How many more blocks are at the start than at the end? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_diff",
            "expected": 2,
            "hint": "3 blocks at the start minus 1 block at the end: 3 − 1 = 2 more blocks at the start."
          }
        ]
      },
      {
        "label": "DECISION — What is the last step of the route? 1) Turn left at the corner 2) Go straight to the bridge 3) The store is on the right, with the library next to it and the parking lot behind it 4) Go back to the school",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dr_last",
            "expected": 3,
            "hint": "The route ends at the destination: STORE RIGHT, THERE, with the library next to it and the parking lot behind it. The turn at the corner (1) is step (3), going to the bridge (2) is step (4), and going back to the school (4) is not part of the route."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "directions.csv",
    "csv": "Decision point,Your call\n\"PRACTICE CALL — Step 0 says to watch the whole signed video twice before answering. What should you do first? 1) Watch the whole video twice, then answer 2) Answer from memory without watching 3) Watch only the first 10 seconds and guess the rest 4) Skip the video and answer from the English translation\",\n\"COMPUTED — How many blocks do you go straight at the start of the route? (Enter the number.)\",\n\"DECISION — Which way do you turn at the corner? 1) Right 2) Left 3) Straight on 4) Back the way you came\",\n\"DECISION — After the turn at the corner, what landmark do you go straight to? 1) The school 2) The bridge 3) The store 4) The library\",\n\"COMPUTED — You go 3 blocks at the start, then 1 block after the turn past the bridge. How many blocks do you travel in total? (Enter the number.)\",\n\"DECISION — Where is the store? 1) On the left 2) On the right 3) Behind the bridge 4) Across the street from the school\",\n\"DECISION — What is next to the store? 1) The school 2) The library 3) The parking lot 4) The bridge\",\n\"DECISION — Where is the parking lot? 1) In front of the store 2) Behind the store 3) Next to the library 4) Across the bridge\",\n\"COMPUTED — How many turns are in the whole route? (Enter the number.)\",\n\"DECISION — If you miss the turn at the corner and keep going straight, what happens? 1) You arrive at the store anyway 2) You pass the bridge on the wrong side and miss the store 3) You arrive at the library 4) You turn around automatically\",\n\"COMPUTED — The route has 3 straight blocks at the start and 1 block after the turn past the bridge. How many more blocks are at the start than at the end? (Enter the number.)\",\n\"DECISION — What is the last step of the route? 1) Turn left at the corner 2) Go straight to the bridge 3) The store is on the right, with the library next to it and the parking lot behind it 4) Go back to the school\",\n"
  }
];
