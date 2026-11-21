// cmp104 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "plan-your-app",
    "title": "Plan Your App: From Problem to Screens",
    "introHtml": "<p><strong>App-planning scenario.</strong> You are planning a simple notes app for busy parents: it must let a user add a note, see all notes, and delete a note. Your task: make the planning decisions in order — problem first, then screens, then data — before any code is written.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you build anything, write the problem down in one sentence and check it with a real user. Never collect personal data you do not need, and never ask for a password or payment in a first version. If a decision would expose someone's private notes, stop and rethink it.</p><p><strong>The app:</strong> a notes app for busy parents. Jobs: (1) add a note, (2) see all notes, (3) delete a note. That is the whole first version.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you plan any screens, what do you do first? 1) Pick a programming language 2) Write the user's problem in one sentence and check it with a real user 3) Design a logo 4) Choose the app's colours",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_safety",
            "expected": 2,
            "hint": "The problem comes first: write it in one sentence and check it with a real user. A language (1), a logo (3), or colours (4) before the problem is building blind."
          }
        ]
      },
      {
        "label": "DECISION — Which sentence states the problem best? 1) Make an app 2) Help busy parents keep shopping and school notes in one place they can check in seconds 3) Use the latest technology 4) Make the prettiest notes app ever",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_problem",
            "expected": 2,
            "hint": "A good problem names the person, the job, and the benefit. (1) names no problem, (3) names a tool, and (4) names a look, not a job."
          }
        ]
      },
      {
        "label": "DECISION — Which screen list fits the three jobs (add, see all, delete)? 1) Home, Login, Settings, Profile, Shop, News, Help, About 2) Notes list, Add note, Note detail 3) Splash screen only 4) One screen with everything crammed on it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_screens",
            "expected": 2,
            "hint": "Three jobs need three screens: a list, an add screen, and a detail screen (where delete lives). (1) is eight screens for three jobs; (3) and (4) cannot do the jobs."
          }
        ]
      },
      {
        "label": "DECISION — Where should the notes be stored so they survive losing the phone? 1) Only in the page, while it is open 2) Only in localStorage on that one phone 3) On a server, behind a login, so they work on any device 4) Nowhere — notes do not need storing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_store",
            "expected": 3,
            "hint": "Notes that must survive a lost phone belong on a server, behind a login. The page (1) forgets them on close; localStorage (2) lives on one phone only."
          }
        ]
      },
      {
        "label": "COMPUTED — Your first version has 3 screens. A friend suggests adding 5 more screens (sharing, reminders, tags, themes, sync). How many screens would the app have in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_count",
            "expected": 8,
            "hint": "3 + 5 = 8 screens. That is a first version that will never ship — ship the 3-screen version first."
          }
        ]
      },
      {
        "label": "DECISION — A tester taps Save on the Add Note screen and nothing happens. What do you check first? 1) The app's logo 2) The JavaScript: the button's event listener and the console error 3) The hosting bill 4) The app store review",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_bug",
            "expected": 2,
            "hint": "Nothing happening on a click is a JavaScript problem: check the event listener and the console error. The logo (1), hosting (3), and store review (4) cannot cause it."
          }
        ]
      },
      {
        "label": "DECISION — Which test belongs in your test plan? 1) Add a note, close the app, reopen it — the note is still there 2) Check the logo looks nice 3) Count the lines of code 4) Ask the tester if they like you",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_test",
            "expected": 1,
            "hint": "A test plan checks behaviour: add a note, reopen, and it is still there. Looks (2), line counts (3), and opinions (4) are not tests."
          }
        ]
      },
      {
        "label": "DECISION — You are ready to ship the web version. What is the last check? 1) Open the app as a stranger: log in, do the main job, log out 2) Tell everyone it is perfect 3) Delete the test data from your own phone only 4) Skip testing — it worked on your computer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "app_ship",
            "expected": 1,
            "hint": "The stranger test is the last check: open it as a new user and do the main job. (2) and (4) skip testing; (3) only cleans your own phone."
          }
        ]
      }
    ]
  },
  {
    "id": "ship-checklist",
    "title": "Ship It: The Publishing Checklist",
    "introHtml": "<p><strong>Publishing scenario.</strong> Your notes app works on your own phone. Before it goes to the app store, work through the publishing checklist: what the store needs, what users need, and what must never be shipped.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you submit anything, check that no passwords, API keys, or database details are in the code you are publishing. Search the code for the word “password” and for any key. If a secret has leaked, cancel it and make a new one before you ship.</p><p><strong>The app:</strong> the 3-screen notes app from the first lab. It is ready to test, not yet ready to ship.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before submitting, you find an API key in the front-end code. What do you do? 1) Ship it — nobody will look 2) Cancel the key, make a new one, keep it on the server only, then ship 3) Hide it in a comment 4) Change one letter of the key",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_safety",
            "expected": 2,
            "hint": "A leaked key must be cancelled and replaced, and kept on the server only. Shipping it (1), hiding it in a comment (3), or changing one letter (4) leaves it usable by anyone who finds it."
          }
        ]
      },
      {
        "label": "DECISION — The store asks for a privacy policy. What must it say? 1) Nothing — skip it 2) What data the app collects and what it does with it 3) That the app is the best in the world 4) Your home address",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_privacy",
            "expected": 2,
            "hint": "A privacy policy says what data is collected and what happens to it. Skipping it (1) gets the app rejected; (3) is advertising, and (4) is private information that must never be published."
          }
        ]
      },
      {
        "label": "DECISION — A reviewer rejects the app because it crashes when a note is saved with no text. What is the right response? 1) Argue with the reviewer 2) Fix the crash, test the empty-note case, and submit again 3) Remove the Save button 4) Ship it anyway through another store",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_reject",
            "expected": 2,
            "hint": "Rejection is normal: fix the crash, test the exact case, and resubmit. Arguing (1) and shipping anyway (4) do not fix it; removing Save (3) removes the app's job."
          }
        ]
      },
      {
        "label": "COMPUTED — Your store page needs 3 screenshots. You have taken 1. How many more do you need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_shots",
            "expected": 2,
            "hint": "3 − 1 = 2 more screenshots needed."
          }
        ]
      },
      {
        "label": "DECISION — Which description belongs on the store page? 1) A notes app that saves, lists, and deletes notes 2) The greatest app ever made, with every feature you can imagine 3) No description at all 4) A copy of another app's description",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_desc",
            "expected": 1,
            "hint": "The description must say honestly what the app does: saves, lists, and deletes notes. (2) promises what it does not do, (3) says nothing, and (4) is copying someone else."
          }
        ]
      },
      {
        "label": "DECISION — After launch, users report a crash when deleting a note. What do you fix first? 1) The crash 2) A new colour scheme 3) A new feature users have not asked for 4) The logo",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_fix",
            "expected": 1,
            "hint": "Fix crashes first, before colours, features, or logos. A crashing app loses users; a plain-looking one that works keeps them."
          }
        ]
      },
      {
        "label": "COMPUTED — Version 1.0 shipped with 3 screens. Version 1.1 adds 1 screen (Settings). How many screens does version 1.1 have? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_ver",
            "expected": 4,
            "hint": "3 + 1 = 4 screens in version 1.1."
          }
        ]
      },
      {
        "label": "DECISION — A user asks for a feature you had not thought of. What do you do? 1) Add it at once, untested 2) Write it on the list, check how many users ask for it, and add the most-wanted ones after testing 3) Ignore all user feedback 4) Promise it for tomorrow",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ship_feed",
            "expected": 2,
            "hint": "Keep a list, count how many users ask, and add the most-wanted after testing. Adding untested (1) breaks things; ignoring users (3) and promising dates (4) both lose trust."
          }
        ]
      }
    ]
  }
];
