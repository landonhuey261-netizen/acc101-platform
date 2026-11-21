// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 11,
  "slug": "load-calc-motor-control-review",
  "title": "Load Calculations & Motor Control Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Run the Article 220 standard and optional dwelling load calculations and size the service.",
    "Size motor branch circuits: conductors at 125% of FLC, short-circuit protection from Table 430.52, overloads at 115%/125% of nameplate.",
    "Read a motor-control ladder diagram: rungs, contacts, coils, seal-in, and interlocks.",
    "Identify control components: contactors, starters, overload relays, pushbuttons, and selector switches.",
    "Apply the disconnect and controller rules of 430.102, 430.110, and 430.83."
  ],
  "sections": [
    {
      "heading": "Load Calculations, One More Time — With the Exam in Mind",
      "html": "<p>This module is the calculation capstone: the dwelling load from Article 220, done the way the exam asks it. <strong>220.82 (standard method)</strong>: 3 VA per square foot for general lighting and receptacles, 1,500 VA per small-appliance circuit (minimum two), 1,500 VA for laundry, fixed appliances at nameplate, dryer at 5,000 VA minimum, range per Table 220.55, and the larger of heating or air conditioning. <strong>Table 220.42</strong> demands the lighting block: the first 3,000 VA at 100%, the remainder at 35%.</p><p><strong>220.83 (optional method)</strong> is the shortcut the exam may ask you to recognize: for a dwelling with a 100-amp or larger service, the demand load is the first 10 kVA at 100% and the remainder at 40%, with the range, dryer, and HVAC added by their own rules. The optional method usually gives a smaller number than the standard method — that is the point of offering it — but it may only be used where its conditions are met, and the exam tests whether you know those conditions.</p>"
    },
    {
      "heading": "Motors: FLC, Conductors, Protection — The 430 Chain",
      "html": "<p>Article 430 is a chain, and every motor question follows it in order. <strong>Step 1: FLC from the tables</strong> — Table 430.248 for single-phase, Table 430.250 for three-phase (Table 430.247 for DC). <strong>Step 2: conductors at 125% of FLC (430.22)</strong>. <strong>Step 3: branch-circuit short-circuit and ground-fault protection from Table 430.52</strong> — an inverse-time breaker at 250% of FLC, a nontime-delay fuse at 300%, a time-delay fuse at 175% (for most motors). <strong>Step 4: overload protection at 115% or 125% of nameplate current (430.32)</strong> — 115% for a motor with a service factor of 1.15 or greater or a marked temperature rise of 40°C or less; 125% for other motors.</p><p>The feeder rule ties it together: <strong>430.24</strong> sizes feeder conductors at 125% of the largest motor's FLC plus the FLC of the other motors, and <strong>430.62</strong> sizes the feeder short-circuit protection from the largest branch-circuit device plus the other motors' FLC. Work the chain in order and the numbers fall out; skip a step and the answer is wrong in a way the exam can measure.</p>"
    },
    {
      "heading": "Reading a Ladder Diagram",
      "html": "<p>A motor-control ladder diagram is read like a ladder: two vertical rails (the power rails, L1 and L2 or the control voltage) and horizontal <strong>rungs</strong>, each rung a control path. Each rung has <strong>contacts</strong> (normally open, normally closed) on the left and a <strong>coil</strong> on the right. When the contacts on a rung close, the coil energizes — and the coil's own contacts elsewhere in the diagram change state.</p><p>The classic rung is the <strong>three-wire start/stop circuit</strong>: a normally closed stop button in series with a normally open start button, feeding the motor starter coil — with a <strong>seal-in (holding) contact</strong> from the starter wired in parallel with the start button, so the motor keeps running after you release the start button. Press stop, the seal-in opens, and the motor drops out. An <strong>overload contact</strong> in series with the coil opens the rung when the motor overloads. Learn to trace that one circuit and every other ladder diagram is a variation on it.</p>"
    },
    {
      "heading": "Control Components: What Each One Does",
      "html": "<p><strong>Contactors</strong> are heavy-duty relays: a small control current energizes a coil that closes power contacts to run the motor. A <strong>motor starter</strong> is a contactor plus an overload relay in one enclosure. The <strong>overload relay</strong> senses the motor's current and opens its contact when the motor draws too much for too long — it protects against overload, not against short circuit. <strong>Pushbuttons</strong> are momentary (start) or maintained; <strong>selector switches</strong> choose between modes (Hand-Off-Auto); <strong>pilot lights</strong> show the state of the circuit.</p><p><strong>Interlocks</strong> prevent two things from happening at once: a forward/reverse starter has electrical interlocks so both contactors can never be energized together, and mechanical interlocks do the same job physically. The exam's control questions are usually ladder-tracing questions: given the diagram and a button press, what energizes and what does not.</p>"
    },
    {
      "heading": "Disconnects, Controllers, and the Rules Around Them",
      "html": "<p><strong>430.102</strong> requires a disconnecting means for the motor and for the controller, in sight of each — \"in sight\" means visible and not more than <strong>50 feet</strong> away. <strong>430.110</strong> requires the disconnect to be rated for the motor's horsepower. <strong>430.83</strong> governs the controller itself: it must be rated for the motor it controls, and it must be able to start and stop the motor under load.</p><p>The safety floor is the same as everywhere in this course: control work is done <strong>de-energized, locked out, and tagged out</strong>, and a control circuit that is energized for testing is tested by a licensed electrician with the right PPE — never by an apprentice alone, and never by bypassing the overload to \"see if it runs.\"</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "220.83",
      "def": "The optional method for a dwelling-unit load calculation: the first 10 kVA at 100%, the remainder at 40%."
    },
    {
      "term": "FLC",
      "def": "Full-load current from Tables 430.247/248/250 — used for conductor and short-circuit sizing."
    },
    {
      "term": "430.22",
      "def": "Motor branch-circuit conductors are sized at 125% of FLC."
    },
    {
      "term": "Table 430.52",
      "def": "Motor branch-circuit short-circuit and ground-fault protection: inverse-time breaker 250%, nontime-delay fuse 300%, time-delay fuse 175% of FLC."
    },
    {
      "term": "430.32",
      "def": "Motor overload protection: 115% or 125% of nameplate current, by service factor and temperature rise."
    },
    {
      "term": "430.24",
      "def": "Feeder conductors for motors: 125% of the largest motor's FLC plus the FLC of the other motors."
    },
    {
      "term": "430.62",
      "def": "Feeder short-circuit protection for motors: the largest branch-circuit device plus the other motors' FLC."
    },
    {
      "term": "Ladder diagram",
      "def": "A motor-control schematic with two vertical power rails and horizontal rungs of contacts and coils."
    },
    {
      "term": "Seal-in contact",
      "def": "A holding contact wired in parallel with the start button so the motor keeps running after the button is released."
    },
    {
      "term": "Contactor",
      "def": "A heavy-duty relay: a small control current energizes a coil that closes power contacts to run the motor."
    },
    {
      "term": "Motor starter",
      "def": "A contactor plus an overload relay in one enclosure."
    },
    {
      "term": "Overload relay",
      "def": "A device that senses motor current and opens its contact on sustained overload — it does not protect against short circuit."
    },
    {
      "term": "Interlock",
      "def": "A circuit or mechanical device that prevents two contactors (such as forward and reverse) from energizing together."
    },
    {
      "term": "430.102",
      "def": "A disconnecting means is required for the motor and for the controller, in sight of each."
    },
    {
      "term": "In sight",
      "def": "Visible and not more than 50 feet away."
    },
    {
      "term": "Three-wire control",
      "def": "A start/stop control circuit with a seal-in contact — the motor stops if control power is lost."
    }
  ],
  "video": {
    "title": "Read ladder diagrams like a pro in 10 minutes",
    "embedUrl": "https://www.youtube.com/embed/UyvAvJGWHy0",
    "note": "A fast, practical read of motor-control ladder diagrams — rungs, contacts, coils, and the seal-in circuit — the core skill of this module.",
    "more": [
      {
        "title": "Motor Controls Tutorial - How to Read Ladder Diagrams",
        "url": "https://www.youtube.com/watch?v=vrT4RH6u_LQ"
      },
      {
        "title": "Ladder Logic Documentation (Full Lecture)",
        "url": "https://www.youtube.com/watch?v=f1Lj9I0vX6U"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 7.5-hp, 460-volt, three-phase motor has a nameplate current of 10.5 amps and a service factor of 1.15. (a) What is its FLC from Table 430.250? (b) What is the minimum branch-circuit conductor ampacity under 430.22? (c) What is the overload setting under 430.32?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 11 amps. (b) 125% × 11 = 13.75 amps. (c) 115% × 10.5 = 12.075 amps, since the service factor is 1.15 or greater.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Read a motor-control ladder diagram: rungs, contacts, coils, seal-in, and interlocks.\" Write a three-sentence exam-ready explanation of the three-wire start/stop circuit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A normally closed stop button in series with a normally open start button feeds the starter coil. Step 2: A seal-in contact from the starter is wired in parallel with the start button, so the motor keeps running after the button is released. Step 3: Pressing stop (or an overload opening its contact) breaks the rung, the coil drops out, and the motor stops.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A motor will not start. The disconnect is closed, the control fuse is good, and the overload relay is tripped. What do you do, and what do you NOT do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Find and fix the cause of the overload before resetting — a tripped overload is a symptom, not the problem. Step 2: Check the motor for a mechanical jam, a single-phased condition, or a load that is too heavy. Step 3: Do NOT bypass the overload to \"see if it runs\" — that removes the motor's only overload protection and can burn the motor up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) What is the inverse-time breaker size for a 5-hp, 460-volt motor (FLC 7.6 A) under Table 430.52? (b) What is the minimum disconnect distance rule for \"in sight\"? (c) What is the FLC of a 3-hp, 230-volt, three-phase motor?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 250% × 7.6 = 19 amps, so the next standard size is 20 amps. (b) Visible and not more than 50 feet away. (c) 9.6 amps (Table 430.250).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"Motor conductors are sized at 100% of nameplate current, overloads protect against short circuits, a seal-in contact is wired in series with the start button, and the overload setting is always 125% of FLC.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Motor branch-circuit conductors are sized at 125% of FLC from the tables (430.22). Step 2: Overloads protect against overload, not short circuit — Table 430.52 devices handle short circuit. Step 3: A seal-in contact is wired in parallel with the start button, not in series. Step 4: Overload settings are 115% or 125% of nameplate current (not FLC), by service factor and temperature rise.</p>"
    }
  ],
  "quiz": [
    {
      "module": 11,
      "q": "Under the optional method (220.83), what demand factor applies to the load above the first 10 kVA?",
      "choices": [
        "35%",
        "40%",
        "50%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.83 applies 100% to the first 10 kVA and 40% to the remainder. (a) is wrong: \"35%\" — 35% is the Table 220.42 factor for the lighting block above 3,000 VA. (c) is wrong: \"50%\" — 50% is not the 220.83 factor. (d) is wrong: \"100%\" — 100% applies only to the first 10 kVA."
    },
    {
      "module": 11,
      "q": "A 5-hp, 230-volt, three-phase motor has what FLC from Table 430.250?",
      "choices": [
        "7.6 amps",
        "15.2 amps",
        "11 amps",
        "28 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 430.250 gives a 5-hp, 230-volt, three-phase motor an FLC of 15.2 amps. (a) is wrong: \"7.6 amps\" — 7.6 amps is the 5-hp, 460-volt FLC. (c) is wrong: \"11 amps\" — 11 amps is the 7.5-hp, 460-volt FLC. (d) is wrong: \"28 amps\" — 28 amps is the 10-hp, 230-volt FLC."
    },
    {
      "module": 11,
      "q": "What is the overload setting for a motor with a nameplate current of 20 amps and a service factor of 1.0?",
      "choices": [
        "23 amps",
        "25 amps",
        "20 amps",
        "30 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With a service factor below 1.15, overload protection is 125% of nameplate: 20 × 1.25 = 25 amps. (a) is wrong: \"23 amps\" — 23 amps would be 115% — that applies when the service factor is 1.15 or greater. (c) is wrong: \"20 amps\" — 20 amps is the nameplate current itself, with no factor applied. (d) is wrong: \"30 amps\" — 30 amps would be 150% of nameplate."
    },
    {
      "module": 11,
      "q": "In a three-wire start/stop circuit, what keeps the motor running after the start button is released?",
      "choices": [
        "The stop button",
        "The seal-in (holding) contact",
        "The overload relay",
        "The disconnect"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The seal-in contact, wired in parallel with the start button, holds the starter coil energized after the button is released. (a) is wrong: \"The stop button\" — The stop button opens the circuit; it does not hold it closed. (c) is wrong: \"The overload relay\" — The overload relay opens on overload; it does not hold the circuit. (d) is wrong: \"The disconnect\" — The disconnect supplies power; it does not hold the control circuit."
    },
    {
      "module": 11,
      "q": "What does 430.102 require for a motor and its controller?",
      "choices": [
        "A disconnecting means for each, in sight of each",
        "One disconnect for both, in another room",
        "No disconnect if the motor is under 5 hp",
        "A disconnect only for the controller"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 430.102 requires a disconnecting means for the motor and for the controller, in sight of each. (b) is wrong: \"One disconnect for both, in another room\" — The disconnects must be in sight of the motor and controller, not in another room. (c) is wrong: \"No disconnect if the motor is under 5 hp\" — The disconnect rule applies regardless of horsepower. (d) is wrong: \"A disconnect only for the controller\" — Both the motor and the controller need a disconnect."
    },
    {
      "module": 11,
      "q": "What is a motor starter?",
      "choices": [
        "A contactor alone",
        "A contactor plus an overload relay in one enclosure",
        "A disconnect switch",
        "A transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A motor starter is a contactor plus an overload relay in one enclosure. (a) is wrong: \"A contactor alone\" — A contactor alone has no overload protection. (c) is wrong: \"A disconnect switch\" — A disconnect switch isolates power; it does not start a motor. (d) is wrong: \"A transformer\" — A transformer changes voltage; it does not start a motor."
    },
    {
      "module": 11,
      "q": "What is the maximum inverse-time breaker size for a motor with an FLC of 11 amps under Table 430.52?",
      "choices": [
        "27.5 amps — use a 30-amp breaker",
        "11 amps",
        "16.5 amps",
        "33 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 250% × 11 = 27.5 amps, so the next standard size is a 30-amp inverse-time breaker. (b) is wrong: \"11 amps\" — 11 amps is the FLC itself, not the 250% breaker size. (c) is wrong: \"16.5 amps\" — 16.5 amps is 150% of FLC, not the Table 430.52 value. (d) is wrong: \"33 amps\" — 33 amps is 300% of FLC — the nontime-delay fuse value."
    },
    {
      "module": 11,
      "q": "What is an interlock in motor control?",
      "choices": [
        "A device that measures current",
        "A circuit or mechanical device that prevents two contactors from energizing together",
        "A type of overload relay",
        "A grounding conductor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An interlock prevents two things from happening at once — for example, forward and reverse contactors energizing together. (a) is wrong: \"A device that measures current\" — Current is measured by a meter or current transformer. (c) is wrong: \"A type of overload relay\" — An overload relay protects against overload; an interlock prevents simultaneous operation. (d) is wrong: \"A grounding conductor\" — A grounding conductor is a wire, not an interlock."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Load Calculations & Motor Control Review: Quick Reference</h3><p><strong>Focus:</strong> Load Calculations, One More Time — With the Exam in Mind — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Run the Article 220 standard and optional dwelling load calculations and size the service.; Size motor branch circuits: conductors at 125% of FLC, short-circuit protection from Table 430.52, overloads at 115%/125% of nameplate.; Read a motor-control ladder diagram: rungs, contacts, coils, seal-in, and interlocks..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> 220.83, FLC, 430.22, Table 430.52, 430.32, 430.24, 430.62, Ladder diagram</p>\n"
};
