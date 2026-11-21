module.exports = [
  {
    "id": "portfolio-plan-and-freelance-checklist",
    "title": "Portfolio Plan and Freelancing Checklist: Build Your Launch Plan",
    "introHtml": "<p><strong>Studio scenario — your portfolio launch.</strong> You have finished the Computer program and want to launch your portfolio website and take on your first freelance job. Your task: work through the planning decisions in order — what goes on the site, how the pieces are ordered, and how the first client job should be handled. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Tbal1mlwyPo\" target=\"_blank\" rel=\"noopener\">How to Make a Portfolio Website — Step by Step (2026)</a> — a walkthrough of planning and building a portfolio site; watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Accuracy first.</strong> Before building anything: check your brief and your facts. A portfolio with broken links, wrong contact details, or claimed work you did not do will cost you the very jobs it was meant to win. Verify every link, every email address, and every claim about your work — and never share a client's private information or passwords while setting up. If a fact is uncertain, check it before you publish.</p><p><strong>Your situation:</strong> You have six pieces to choose from: a to-do list app (finished, with a live demo), a tip calculator (finished), a half-built game, a set of five food photos, a 90-second showreel, and a library poster. Your first client is a local bakery that wants a poster and a simple menu page, with a budget and a deadline of two weeks. For each row, enter the option number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you build or publish anything, what do you do first? 1) Publish the site with whatever links and claims you have and fix them later 2) Check the brief and verify every link, contact detail, and claim about your work, and never share a client's private information or passwords 3) Copy a popular portfolio's text and swap in your name 4) Post the client's private login details in the portfolio to prove you worked on their site",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_safety",
            "expected": 2,
            "hint": "Step 0 governs: verify every link, detail, and claim before publishing, and never share a client's private information or passwords. Publishing unchecked work (1), copying text (3), and sharing logins (4) all damage trust and can harm the client."
          }
        ]
      },
      {
        "label": "DECISION — Which four pieces should lead your portfolio, in the right order? 1) The half-built game first, then the tip calculator, the photos, and the poster 2) The to-do list app first (strongest, finished, with a live demo), then the showreel, the food photos, and the library poster 3) All six pieces in whatever order you made them 4) Only the half-built game, since it is the biggest project",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_order",
            "expected": 2,
            "hint": "Lead with the strongest finished piece with a live demo, then show range: video, photos, design. Unfinished work (1, 4) should not lead — or appear at all — and six pieces in random order (3) buries the best work."
          }
        ]
      },
      {
        "label": "DECISION — The bakery asks for a poster and a menu page in two weeks. What do you do first? 1) Start designing at once and ask questions later 2) Read the brief twice, ask the missing questions (words, photos, approver, budget, revisions), and confirm the what, when, price, and revisions in writing 3) Agree to any price they name without writing it down 4) Promise delivery in three days to impress them",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_brief",
            "expected": 2,
            "hint": "Read the brief, ask the missing questions, and confirm the agreement in writing before work starts. Designing blind (1), an unwritten price (3), and an impossible deadline (4) all lead to rework or a missed promise."
          }
        ]
      },
      {
        "label": "DECISION — How should you price the bakery job? 1) Charge nothing to get the work 2) Break the job into steps, estimate the hours, add a cushion, agree a fixed price in writing, and ask for half as a deposit 3) Name a price after the work is done 4) Charge by the hour but never track the hours",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_price",
            "expected": 2,
            "hint": "Estimate by steps with a cushion, agree the price in writing before starting, and take a deposit — commonly half. Free work (1) teaches clients your work has no value, pricing after delivery (3) invites disputes, and untracked hours (4) mean you cannot know what you earned."
          }
        ]
      },
      {
        "label": "DECISION — The bakery job is done. What is the right finish? 1) Send the draft files and disappear 2) Deliver clean, checked final files with a short note on how to use them, send the invoice, keep records, and ask for a testimonial and permission to show the work 3) Hand over your editable source files without being asked 4) Post the bakery's private sales figures in your portfolio",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_deliver",
            "expected": 2,
            "hint": "Deliver checked final files with a usage note, invoice, keep records, and ask for a testimonial and permission to show the work. Disappearing (1), giving away source files by default (3), and sharing private figures (4) are all unprofessional."
          }
        ]
      },
      {
        "label": "COMPUTED — Your portfolio has 4 pieces. You plan to spend 3 hours writing descriptions, 2 hours building the site, and 1 hour checking every link. You also add a cushion of one-third of the total. How many hours should you plan in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "port_hours",
            "expected": 8,
            "hint": "3 plus 2 plus 1 equals 6 hours of work. A cushion of one-third of 6 is 2 hours. 6 plus 2 equals 8 hours planned in total."
          }
        ]
      }
    ],
    "passing": 70
  }
];
