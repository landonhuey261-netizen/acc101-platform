// med113 — Sports Science: original scenario labs
module.exports = [
  {
    "id": "fitness-assessment-plan",
    "title": "Fitness Assessment Plan",
    "introHtml": "<p><strong>Case — a new client, a blank file.</strong> A 45-year-old man who works at a desk, has never trained, and wants general fitness books an assessment. He weighs 81 kg and is 1.80 m tall, with a resting heart rate of 72 beats per minute. Work the assessment in order: screen him, pick a test battery that matches his goal, interpret the numbers, and plan the re-test — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you test or train anyone: screen first. A client who reports chest pain, dizziness, or a known heart condition needs medical clearance before any vigorous testing, and a test must match the client's age, health, and experience — a maximal test on an untrained beginner is a risk, not a challenge. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; it cannot grade hands-on assessments, and real fitness testing is learned and practised with an instructor.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real assessment, the numbers are the plan.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — The client answers yes to a PAR-Q+ question: he has felt chest pain during physical activity. Your call: 1) Test him at maximum effort anyway 2) Stop, refer him for medical clearance, and do no vigorous testing until he is cleared 3) Ignore the answer and start training 4) Test flexibility only and skip the rest of the screening",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_parq", "expected": 2, "hint": "A yes on the PAR-Q+ about chest pain means referral and medical clearance before any vigorous testing." }]
      },
      {
        "label": "COMPUTED — The client is 45 years old. His estimated maximum heart rate is 220 minus age. Enter it in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_hrmax", "expected": 175, "hint": "220 - 45 = 175 beats per minute. This is an estimate, not an exact personal value." }]
      },
      {
        "label": "COMPUTED — You plan moderate exercise at 60% of his estimated maximum heart rate of 175. Enter the target heart rate in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_hr60", "expected": 105, "hint": "0.60 x 175 = 105 beats per minute." }]
      },
      {
        "label": "COMPUTED — For vigorous intervals you plan 80% of his estimated maximum heart rate of 175. Enter the target heart rate in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_hr80", "expected": 140, "hint": "0.80 x 175 = 140 beats per minute." }]
      },
      {
        "label": "Which test battery fits this beginner whose goal is general fitness? 1) One-repetition-maximum bench press only 2) Resting heart rate, a step test, a push-up test, sit-and-reach, and waist circumference 3) A Wingate sprint test only 4) A blood test",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_battery", "expected": 2, "hint": "General fitness needs a battery covering heart, strength, flexibility, and body composition — not one maximal test." }]
      },
      {
        "label": "COMPUTED — The client weighs 81 kg and is 1.80 m tall. Body mass index is weight divided by height squared: 81 / (1.80 x 1.80). Enter the BMI.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_bmi", "expected": 25, "hint": "1.80 x 1.80 = 3.24, and 81 / 3.24 = 25." }]
      },
      {
        "label": "His waist circumference is 94 cm. For a man, a waist at 94 cm means: 1) No health risk at all 2) Increased health risk — worth monitoring and working on 3) A medical emergency 4) He is underweight",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_waist", "expected": 2, "hint": "A waist of 94 cm in a man marks increased health risk, so it is worth monitoring and working on." }]
      },
      {
        "label": "COMPUTED — After 8 weeks of training his resting heart rate has fallen from 72 to 64 beats per minute. Enter the drop in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_rhr_drop", "expected": 8, "hint": "72 - 64 = 8 beats per minute lower — a normal endurance-training adaptation." }]
      },
      {
        "label": "COMPUTED — You suggest 1.0 gram of protein per kilogram of body weight per day. He weighs 81 kg. Enter the daily protein in grams.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_protein", "expected": 81, "hint": "81 x 1.0 = 81 grams per day." }]
      },
      {
        "label": "In the movement screen he cannot squat to parallel without his heels lifting off the floor. Your call: 1) Load a heavy barbell squat 2) Note the limitation, use a regression such as a goblet squat to a box, and work on ankle mobility 3) Ignore it — heels lifting is fine 4) Diagnose an ankle injury",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_screen", "expected": 2, "hint": "A screen finding means regress the movement and address the limitation — never load a faulty pattern or diagnose an injury." }]
      },
      {
        "label": "COMPUTED — His plan is 3 sessions per week for 8 weeks. Enter the total number of sessions.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_sessions", "expected": 24, "hint": "3 x 8 = 24 sessions." }]
      },
      {
        "label": "When should he be re-tested? 1) Never — one test is enough 2) After 8 weeks, with the same tests under the same conditions 3) The next day, with different tests 4) Only if he asks to be tested",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "assess_retest", "expected": 2, "hint": "Re-test with the same tests under the same conditions, so the results can be compared fairly." }]
      }
    ]
  },
  {
    "id": "training-program-design",
    "title": "8-Week Training Program Design",
    "introHtml": "<p><strong>Case — from 2 km to 5 km in 8 weeks.</strong> A 30-year-old woman runs 2 km comfortably twice a week and wants to run 5 km in 35 minutes within 8 weeks. Build her program with FITT-VP: set the frequency, intensity, time, and type, progress it week by week, add strength work, and taper into the event — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you build any program: a runner who reports chest pain, dizziness, or fainting during a run must stop and seek medical advice before continuing, and progression must be gradual — a sudden jump in distance is how overuse injuries happen. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; it cannot grade hands-on coaching, and a real program is adjusted in person as the runner responds.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real program, the numbers are the progression.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — In week 3 the runner reports chest pain during a run. Your call: 1) Tell her to push through it 2) Stop running, rest, and seek medical advice before she continues training 3) Tell her to run faster to get it over with 4) Switch her to maximum-effort sprints",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_chest_pain", "expected": 2, "hint": "Chest pain during exercise is a stop-and-refer sign — stop, rest, and get medical advice before training continues." }]
      },
      {
        "label": "COMPUTED — Her baseline is 2 km and her goal is 5 km. Enter the total distance increase she needs, in kilometres.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_gap", "expected": 3, "hint": "5 - 2 = 3 km of progress needed over the 8 weeks." }]
      },
      {
        "label": "COMPUTED — You progress her long run by 10% per week. Her week 1 long run is 2 km. Enter the week 2 long run distance in kilometres.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_10pct", "expected": 2.2, "hint": "2 x 1.10 = 2.2 km — a 10% increase on 2 km." }]
      },
      {
        "label": "For a beginner runner, how many run sessions per week is the sensible starting frequency? 1) 7 sessions 2) 3 sessions 3) 1 session 4) 0 sessions",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_frequency", "expected": 2, "hint": "Three sessions a week gives enough stimulus with rest days between — seven would invite injury." }]
      },
      {
        "label": "COMPUTED — She is 30, so her estimated maximum heart rate is 220 minus 30, which is 190. Her tempo runs are at 70% of maximum. Enter the target heart rate in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_hr70", "expected": 133, "hint": "0.70 x 190 = 133 beats per minute." }]
      },
      {
        "label": "COMPUTED — Her easy runs are at 60% of her estimated maximum heart rate of 190. Enter the target heart rate in beats per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_hr60", "expected": 114, "hint": "0.60 x 190 = 114 beats per minute." }]
      },
      {
        "label": "COMPUTED — Her plan adds 2 strength sessions per week for 8 weeks. Enter the total number of strength sessions.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_strength", "expected": 16, "hint": "2 x 8 = 16 strength sessions." }]
      },
      {
        "label": "COMPUTED — She runs 3 times a week and does 2 strength sessions a week. Enter the total training sessions per week.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_weekly_total", "expected": 5, "hint": "3 + 2 = 5 sessions per week." }]
      },
      {
        "label": "COMPUTED — Her long run grows by 0.5 km each week from a 2 km start: week 1 is 2 km, week 2 is 2.5 km, week 3 is 3 km, week 4 is 3.5 km. Enter the week 5 long run distance in kilometres.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_week5", "expected": 4, "hint": "2 + (4 x 0.5) = 4 km in week 5." }]
      },
      {
        "label": "In week 8, just before her 5 km event, her training volume should: 1) Double 2) Drop, so she arrives fresh 3) Stay at its maximum 4) Stop entirely two weeks out",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_taper", "expected": 2, "hint": "A taper cuts volume before the event so fatigue fades while fitness stays — doubling or stopping entirely both backfire." }]
      },
      {
        "label": "COMPUTED — Her post-run snack has 40 g of carbohydrate and 20 g of protein. Carbohydrate and protein each provide 4 kcal per gram. Enter the total kilocalories.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_snack_kcal", "expected": 240, "hint": "40 x 4 = 160, 20 x 4 = 80, and 160 + 80 = 240 kcal." }]
      },
      {
        "label": "Her goal is \"run 5 km in 35 minutes within 8 weeks\". Which part makes the goal time-bound? 1) 5 km 2) 35 minutes 3) Within 8 weeks 4) Run",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "program_smart_time", "expected": 3, "hint": "Within 8 weeks is the deadline — that is what makes the goal time-bound." }]
      }
    ]
  },
  {
    "id": "movement-screen-corrective-plan",
    "title": "Movement Screen & Corrective Plan",
    "introHtml": "<p><strong>Case — knees caving in.</strong> A client does an overhead squat in a movement screen and their knees cave inward on every rep. Work the Corrective Exercise Continuum in order: inhibit the overactive muscles, lengthen them, activate the weak ones, and integrate the fix into the squat — then plan the re-test, and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any corrective work: sharp pain, numbness, or tingling during a screen means stop and refer to a clinician — corrective exercise is for movement patterns, not for diagnosing or treating pain, and loading a painful pattern makes it worse. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; it cannot grade hands-on movement screens or corrective technique, and real corrective work is coached in person.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real screen, the numbers are the plan.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — During the screen the client reports sharp knee pain. Your call: 1) Continue the screen to finish the data 2) Stop and refer the client to a clinician before any corrective work 3) Load a heavy squat to test the knee 4) Stretch the knee hard until it loosens",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_knee_pain", "expected": 2, "hint": "Sharp pain in a screen is a stop-and-refer sign — corrective exercise never starts on a painful joint." }]
      },
      {
        "label": "The knees caving inward during the squat is called: 1) Knee valgus 2) Knee varus 3) Hyperextension 4) Normal tracking",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_valgus", "expected": 1, "hint": "Knees drifting inward is knee valgus — a compensation pattern, not normal tracking." }]
      },
      {
        "label": "COMPUTED — The Corrective Exercise Continuum has 4 phases in total. Enter the number of phases.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_phases", "expected": 4, "hint": "Inhibit, lengthen, activate, integrate — four phases in order." }]
      },
      {
        "label": "In the inhibit phase, the right tool for the overactive adductors is: 1) A heavy squat 2) Foam rolling the overactive muscles 3) Sprinting 4) A maximum bench press",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_inhibit", "expected": 2, "hint": "Inhibit uses self-myofascial release — foam rolling — on the overactive muscles." }]
      },
      {
        "label": "COMPUTED — You foam roll 2 areas for 30 seconds each. Enter the total foam-rolling time in seconds.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_smr_time", "expected": 60, "hint": "2 x 30 = 60 seconds in total." }]
      },
      {
        "label": "In the lengthen phase, a static stretch of an overactive muscle is held for: 1) 30 seconds per muscle 2) 2 seconds 3) 5 minutes of bouncing 4) No hold at all",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_stretch_hold", "expected": 1, "hint": "Static stretches in the lengthen phase are held for about 30 seconds — bouncing is not stretching." }]
      },
      {
        "label": "COMPUTED — The activate phase uses glute bridges: 2 sets of 12 repetitions. Enter the total number of repetitions.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_bridge_reps", "expected": 24, "hint": "2 x 12 = 24 repetitions in total." }]
      },
      {
        "label": "The best activate-phase exercise for weak glutes and hip abductors is: 1) Glute bridges and banded side steps 2) A heavy leg press with the knees caving in 3) Box jumps 4) Calf raises only",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_activate", "expected": 1, "hint": "Glute bridges and banded side steps strengthen the glutes and hip abductors that hold the knees out." }]
      },
      {
        "label": "In the integrate phase, the client should: 1) Squat with a band cueing the knees out, at a light load 2) Attempt a maximum back squat 3) Run a marathon 4) Skip integration entirely",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_integrate", "expected": 1, "hint": "Integrate means practising the whole movement with the fix — a light squat with the knees cued out." }]
      },
      {
        "label": "COMPUTED — The client does the corrective routine 3 times a week for 4 weeks before the re-test. Enter the total number of corrective sessions.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_sessions", "expected": 12, "hint": "3 x 4 = 12 sessions before the re-test." }]
      },
      {
        "label": "COMPUTED — The corrective routine takes 10 minutes, done 3 days a week. Enter the weekly minutes spent on correctives.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_weekly_mins", "expected": 30, "hint": "3 x 10 = 30 minutes per week." }]
      },
      {
        "label": "After 4 weeks the knees still cave in. The next step is: 1) Add heavier load anyway 2) Keep the exact same plan with no change 3) Review the plan, check technique, and refer to a clinician if there is pain or no progress 4) Stop all exercise forever",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "screen_retest_decision", "expected": 3, "hint": "No progress means review the plan and technique — and refer if pain appears or progress stalls." }]
      }
    ]
  }
];
