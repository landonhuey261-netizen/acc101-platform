// cmp101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "organise-your-files",
    "title": "Organise Your Files: Sort, Name, and Back Up",
    "introHtml": "<p><strong>Scenario — a messy Downloads folder.</strong> You have just downloaded ten files into your Downloads folder: holiday photos, a letter from the bank, a recipe, a work spreadsheet, and some files you do not recognise. Your task: sort them into folders, give them good names, decide what to back up, and deal with the files you do not recognise — safely. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you move, rename, or delete anything: make a backup copy of the files you care about first — copy the photos and the bank letter to a USB drive or to the cloud. Never delete a file you do not recognise, and never open an attachment or file from a stranger. If a file looks like a program (.exe) and you did not download it on purpose, do not run it.</p><p><strong>The ten files:</strong> (1) IMG_4821.jpg — a holiday photo. (2) IMG_4822.jpg — a holiday photo. (3) bank-letter.pdf — a letter from your bank. (4) recipe-chicken-soup.docx — a recipe. (5) budget-2026.xlsx — a work spreadsheet. (6) mystery.exe — a program you do not recognise. (7) shopping-list.txt — a shopping list. (8) IMG_4823.jpg — a holiday photo. (9) payslip-nov.pdf — your November payslip. (10) unknown-file.tmp — a file you do not recognise.</p><p><strong>Your folders:</strong> Pictures/Holidays, Documents/Bank, Documents/Work, Documents/Recipes, and a folder called Not sure. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you move, rename, or delete anything, what do you do first? 1) Delete the files you do not recognise right away 2) Back up the files you care about (photos, bank letter, payslip) to a USB drive or the cloud 3) Open mystery.exe to see what it is 4) Rename everything to random names",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_safety",
            "expected": 2,
            "hint": "Step 0 governs: back up what you care about before changing anything. Deleting first (1) can destroy the only copy, opening an unknown .exe (3) can install malware, and random names (4) make things worse."
          }
        ]
      },
      {
        "label": "DECISION — Where does bank-letter.pdf belong? 1) Pictures/Holidays 2) Documents/Bank 3) Documents/Recipes 4) The Recycle Bin",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_bank",
            "expected": 2,
            "hint": "A letter from the bank is a bank document, so it belongs in Documents/Bank. Pictures/Holidays is for photos, Recipes is for recipes, and the Recycle Bin is for deleting."
          }
        ]
      },
      {
        "label": "DECISION — What should you do with mystery.exe, a program you do not recognise? 1) Run it to see what it does 2) Move it to the folder called Not sure and do not run it 3) Rename it to holiday-photo.jpg 4) Email it to a friend",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_exe",
            "expected": 2,
            "hint": "Never run a program you do not recognise — it could be malware. Put it in Not sure and leave it alone. Running it (1) risks infection, renaming it (3) hides what it is, and emailing it (4) spreads the risk."
          }
        ]
      },
      {
        "label": "DECISION — Where do the three holiday photos (IMG_4821.jpg, IMG_4822.jpg, IMG_4823.jpg) belong? 1) Documents/Work 2) Documents/Bank 3) Pictures/Holidays 4) Downloads, left where they are",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_photos",
            "expected": 3,
            "hint": "Holiday photos belong in Pictures/Holidays. Documents/Work is for work files, Documents/Bank is for bank letters, and leaving them in Downloads is how folders become a mess."
          }
        ]
      },
      {
        "label": "COMPUTED — You have 10 files. 3 are holiday photos, 2 are bank documents (bank letter and payslip), 1 is a recipe, 1 is a work spreadsheet, 1 is a shopping list, and 2 are files you do not recognise. How many files go into your Documents folders (Bank + Work + Recipes)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_count",
            "expected": 4,
            "hint": "Bank gets 2 (bank letter and payslip), Work gets 1 (the spreadsheet), Recipes gets 1 (the recipe). 2 + 1 + 1 = 4. The photos go to Pictures, the shopping list is a note, and the 2 unknown files go to Not sure."
          }
        ]
      },
      {
        "label": "DECISION — You have sorted everything. What is the right backup habit for the photos and the bank letter? 1) Keep only the copies on the laptop 2) Keep a second copy on a USB drive or in the cloud, in a separate place 3) Print them and throw the files away 4) Email them to yourself and delete the originals",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "org_backup",
            "expected": 2,
            "hint": "A backup is a second copy in a separate place. One copy only (1) is one accident away from being gone. Printing (3) is not a usable backup for files, and deleting the originals after emailing (4) leaves you with only one copy again."
          }
        ]
      }
    ]
  }
];
