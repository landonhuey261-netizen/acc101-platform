// asl104 - Receptive Video Labs
// Lab 1 is grounded in Dr. Bill Vicars' Lesson 18 travel story (8 sentences).
// Lab 2 is grounded in Dr. Bill Vicars' Lesson 35 sports & games practice sentences (20 sentences, sheets 35.A-35.D).
module.exports = [
  {
    "id": "story-retelling",
    "title": "Story Retelling",
    "introHtml": "<p>In this lab you will watch a signed story and retell it — in order, with the main idea and the important details. The video is Dr. Bill Vicars' Lesson 18 travel story, signed in ASL. It has 8 sentences: the signer enjoys travel, likes riding in an airplane, a boat, a subway, and a train, thinks flying is fun, wants a helicopter or a rocket someday, has his own bike and motorcycle, needs practice riding so he does not crash, lost his truck key, and thinks he left his keys in the building garage or the elevator.</p><p>Watch the video here: <a href=\"https://www.youtube.com/watch?v=TRu39jc8Q-Q\" target=\"_blank\" rel=\"noopener\">Lesson 18 — Travel Story (Dr. Bill Vicars, YouTube)</a>.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Watch it once to follow the story, and a second time to check the details — the order of the sentences, the vehicles named, and what happened to the keys.</p><p><strong>Step 1.</strong> For each decision point below, pick the option number (1, 2, 3, or 4) that matches what was signed. Type the option number in the \"Your call\" column.</p><p><strong>Step 2.</strong> For the counted rows, work out the number from the story itself — count the sentences, the vehicles, or the sentences before the one named.</p><p><strong>Step 3.</strong> Check your answers: a good retelling keeps the story in order and keeps the main idea and the important details.</p>",
    "headers": ["Decision point", "Your call"],
    "rows": [
      {
        "label": "PRACTICE CALL — Did you do Step 0 first? (1 = Yes, I watched the whole signed video twice before answering; 2 = I watched it once; 3 = I skipped the video)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "practice-call", "expected": 1, "hint": "Step 0 says: watch the whole signed video twice before answering." }]
      },
      {
        "label": "How many sentences are in the whole travel story? (1 = 6; 2 = 7; 3 = 8; 4 = 9)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "sentence-count", "expected": 3, "hint": "Count the sentences from \"I enjoy travel\" to the keys in the garage or elevator." }]
      },
      {
        "label": "Which sentence is signed FIRST in the story? (1 = I enjoy travel; 2 = I like ride-in airplane, boat, subway, train; 3 = I think flying fun; 4 = I have my-own bike and motorcycle)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "first-sentence", "expected": 1, "hint": "The story opens with the signer's feeling about travel." }]
      },
      {
        "label": "Which sentence is signed LAST in the story? (1 = I have my-own bike and motorcycle; 2 = I think I leave-my keys this building garage or elevator; 3 = My truck key, I lost, need search find; 4 = Someday I want helicopter or rocket)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "last-sentence", "expected": 2, "hint": "The story ends where the signer thinks the keys are." }]
      },
      {
        "label": "How many vehicles are named in sentence 2 (airplane, boat, subway, train)? (1 = 2; 2 = 3; 3 = 4; 4 = 5)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vehicles-sentence-2", "expected": 3, "hint": "List them: airplane, boat, subway, train." }]
      },
      {
        "label": "Which sentence says the signer thinks flying is fun? (1 = sentence 1; 2 = sentence 2; 3 = sentence 3; 4 = sentence 4)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "flying-fun-sentence", "expected": 3, "hint": "It comes right after the sentence naming the four vehicles." }]
      },
      {
        "label": "What does the signer want someday? (1 = helicopter or rocket; 2 = airplane or boat; 3 = bike or motorcycle; 4 = truck or car)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "someday-want", "expected": 1, "hint": "Sentence 4 names two vehicles he does not have yet." }]
      },
      {
        "label": "Which two vehicles does the signer already own? (1 = airplane and boat; 2 = bike and motorcycle; 3 = helicopter and rocket; 4 = subway and train)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "owns-vehicles", "expected": 2, "hint": "Sentence 5 says \"I have my-own\" and names two vehicles." }]
      },
      {
        "label": "Why does the signer need practice riding? (1 = not-want crash; 2 = want go fast; 3 = want win race; 4 = want travel far)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "practice-why", "expected": 1, "hint": "Sentence 6 gives the reason right after \"I need practice ride-on.\"" }]
      },
      {
        "label": "What did the signer lose? (1 = bike key; 2 = truck key; 3 = house key; 4 = garage key)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lost-what", "expected": 2, "hint": "Sentence 7 names the key and the vehicle it belongs to." }]
      },
      {
        "label": "Where does the signer think the keys are? (1 = building garage or elevator; 2 = airplane; 3 = boat; 4 = pizza store)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "keys-where", "expected": 1, "hint": "The last sentence names two places in the building." }]
      },
      {
        "label": "COUNTED — How many sentences come BEFORE the sentence about losing the truck key? (1 = 5; 2 = 6; 3 = 7; 4 = 8)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "sentences-before-lost-key", "expected": 2, "hint": "The lost-key sentence is sentence 7, so count the sentences before it." }]
      }
    ],
    "passing": 70,
    "csvFilename": "story-retelling.csv",
    "csv": "Decision point,Your call\nPRACTICE CALL — Did you do Step 0 first?,\nHow many sentences are in the whole travel story?,\nWhich sentence is signed FIRST in the story?,\nWhich sentence is signed LAST in the story?,\nHow many vehicles are named in sentence 2 (airplane, boat, subway, train)?,\nWhich sentence says the signer thinks flying is fun?,\nWhat does the signer want someday?,\nWhich two vehicles does the signer already own?,\nWhy does the signer need practice riding?,\nWhat did the signer lose?,\nWhere does the signer think the keys are?,\nCOUNTED — How many sentences come BEFORE the sentence about losing the truck key?,\n"
  },
  {
    "id": "opinions",
    "title": "Opinions",
    "introHtml": "<p>In this lab you will watch signed opinion questions and match each one to the right sentence. The video is Dr. Bill Vicars' Lesson 35 — sports and games — with 20 practice sentences on sheets 35.A through 35.D. The questions ask about balls, baseball, basketball, bowling, climbing, dolls, football teams, games, hockey, running, motorcycles, snowboarding, soccer teams, softball, swings, movies, kites, roller-blading, and hearing aids.</p><p>Watch the video here: <a href=\"https://www.youtube.com/watch?v=eZlhEjfrv14\" target=\"_blank\" rel=\"noopener\">Lesson 35 — Sports & Games (Dr. Bill Vicars, YouTube)</a>.</p>",
    "taskHtml": "<p><strong>Step 0 — PRACTICE NOTE: watch the whole signed video twice before answering.</strong> Watch it once to follow the questions, and a second time to check the sentence numbers — which question is first, which one asks about the soccer team, and which one is last.</p><p><strong>Step 1.</strong> For each decision point below, pick the option number (1, 2, 3, or 4) that matches what was signed. Type the option number in the \"Your call\" column.</p><p><strong>Step 2.</strong> For the counted rows, work out the number from the lesson itself — count the sentences on a sheet, or the sentences before the one named.</p><p><strong>Step 3.</strong> Check your answers: a good opinion question asks what someone thinks or likes, and the sentence number tells you where it sits in the set.</p>",
    "headers": ["Decision point", "Your call"],
    "rows": [
      {
        "label": "PRACTICE CALL — Did you do Step 0 first? (1 = Yes, I watched the whole signed video twice before answering; 2 = I watched it once; 3 = I skipped the video)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "practice-call", "expected": 1, "hint": "Step 0 says: watch the whole signed video twice before answering." }]
      },
      {
        "label": "How many practice sentences are in the whole lesson (sheets 35.A–35.D)? (1 = 15; 2 = 18; 3 = 20; 4 = 25)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "sentence-count", "expected": 3, "hint": "Sheets 35.A, 35.B, 35.C, and 35.D each have 5 sentences." }]
      },
      {
        "label": "Which question is signed FIRST in the practice set? (1 = BALL, YOU CAN THROW, HOW FAR?; 2 = BASEBALL, YOU LIKE WATCH?; 3 = BASKETBALL, YOU LIKE PLAY?; 4 = BOWLING, YOU SKILL?)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "first-sentence", "expected": 1, "hint": "Sentence 1 on sheet 35.A asks how far you can throw a ball." }]
      },
      {
        "label": "Which sentence asks about your favorite football team? (1 = sentence 6; 2 = sentence 7; 3 = sentence 8; 4 = sentence 9)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "football-team-sentence", "expected": 3, "hint": "Sheet 35.B, third question: FOOTBALL, YOUR FAVORITE TEAM?" }]
      },
      {
        "label": "Which sentence asks \"SOCCER TEAM, HOW-MANY PLAYER?\" (1 = sentence 12; 2 = sentence 13; 3 = sentence 14; 4 = sentence 15)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "soccer-team-sentence", "expected": 3, "hint": "Sheet 35.C, fourth question — it asks how many players are on a soccer team." }]
      },
      {
        "label": "Which sentence asks \"YOU LIKE ROLLER-BLADE?\" (1 = sentence 17; 2 = sentence 18; 3 = sentence 19; 4 = sentence 20)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "rollerblade-sentence", "expected": 3, "hint": "Sheet 35.D, fourth question." }]
      },
      {
        "label": "Which sentence is about a dog chasing a cat? (1 = sentence 3; 2 = sentence 4; 3 = sentence 5; 4 = sentence 6)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "dog-chase-sentence", "expected": 3, "hint": "The last question on sheet 35.A: DOG CHASE CAT what-FOR?" }]
      },
      {
        "label": "Which sentence asks how old a child should be to swing? (1 = sentence 14; 2 = sentence 15; 3 = sentence 16; 4 = sentence 17)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "swing-age-sentence", "expected": 3, "hint": "Sheet 35.D, first question: CHILD, SWING, SHOULD how-OLD?" }]
      },
      {
        "label": "Which sentence asks about a hearing aid? (1 = sentence 18; 2 = sentence 19; 3 = sentence 20; 4 = sentence 17)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hearing-aid-sentence", "expected": 3, "hint": "The last question in the whole set: HEARING-AID, YOU SOMETIMES WISH your-SELF HAVE?" }]
      },
      {
        "label": "How many practice sentences are on sheet 35.A (sentences 1–5)? (1 = 4; 2 = 5; 3 = 6; 4 = 7)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "sheet-a-count", "expected": 2, "hint": "Sheet 35.A runs from sentence 1 to sentence 5." }]
      },
      {
        "label": "COUNTED — How many sentences come BEFORE the soccer-team question (sentence 14)? (1 = 12; 2 = 13; 3 = 14; 4 = 15)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "sentences-before-soccer", "expected": 2, "hint": "The soccer-team question is sentence 14, so count the sentences before it." }]
      },
      {
        "label": "Which sentence asks \"GAME YOU LIKE PLAY, what-NAME?\" (1 = sentence 7; 2 = sentence 8; 3 = sentence 9; 4 = sentence 10)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "game-name-sentence", "expected": 3, "hint": "Sheet 35.B, fourth question." }]
      }
    ],
    "passing": 70,
    "csvFilename": "opinions.csv",
    "csv": "Decision point,Your call\nPRACTICE CALL — Did you do Step 0 first?,\nHow many practice sentences are in the whole lesson (sheets 35.A–35.D)?,\nWhich question is signed FIRST in the practice set?,\nWhich sentence asks about your favorite football team?,\nWhich sentence asks \"SOCCER TEAM, HOW-MANY PLAYER?\",\nWhich sentence asks \"YOU LIKE ROLLER-BLADE?\",\nWhich sentence is about a dog chasing a cat?,\nWhich sentence asks how old a child should be to swing?,\nWhich sentence asks about a hearing aid?,\nHow many practice sentences are on sheet 35.A (sentences 1–5)?,\nCOUNTED — How many sentences come BEFORE the soccer-team question (sentence 14)?,\nWhich sentence asks \"GAME YOU LIKE PLAY, what-NAME?\",\n"
  }
];
