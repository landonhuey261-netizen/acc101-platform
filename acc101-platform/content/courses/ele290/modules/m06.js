// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 6,
  "slug": "nccer-l2-review",
  "title": "NCCER Electrical Level 2 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain alternating current: sine wave, frequency, RMS values, and inductive and capacitive reactance.",
    "Identify motor types and read a motor nameplate: horsepower, voltage, full-load current, service factor, and temperature rise.",
    "Bend conduit: 90-degree stubs, offsets, back-to-back bends, and saddles, with take-up and gain.",
    "Size pull and junction boxes (314.28) and select cable tray, terminations, and splices.",
    "Apply grounding and bonding (Article 250) and select breakers and fuses for a circuit."
  ],
  "sections": [
    {
      "heading": "Alternating Current: The Sine Wave and What It Means",
      "html": "<p>Level 2 starts where Level 1 stopped: alternating current. AC voltage follows a <strong>sine wave</strong> — it rises, peaks, falls, reverses, and returns, 60 times a second in the United States. The value the exam uses is the <strong>RMS (root-mean-square) value</strong>: 120 volts RMS is the effective voltage that does the same work as 120 volts DC, even though the sine wave peaks at about 170 volts. Peak voltage is RMS times 1.414.</p><p>AC circuits have <strong>reactance</strong> as well as resistance: inductive reactance from coils and motors, capacitive reactance from capacitors. Inductance makes current lag voltage; capacitance makes current lead voltage. The combination of resistance and reactance is <strong>impedance</strong>, and the ratio of true power to apparent power is the <strong>power factor</strong> — the reason a motor's volt-amperes are always higher than its watts.</p>"
    },
    {
      "heading": "Motors: Types, Nameplates, and Starting",
      "html": "<p>Level 2's motor module covers the motors you will actually wire: the <strong>three-phase induction motor</strong> (the workhorse — no brushes, a rotating magnetic field, and slip between the field speed and the rotor speed), the <strong>single-phase induction motor</strong> (with a start winding or capacitor to get it turning), and the <strong>DC motor</strong> (series, shunt, and compound windings). Synchronous speed is 120 × frequency / poles — a 4-pole motor on 60 hertz runs at a synchronous speed of 1,800 RPM, and the rotor runs a little slower because of slip.</p><p>The <strong>nameplate</strong> is the motor's identity card: horsepower, voltage, full-load current, frequency, speed, service factor, temperature rise, and frame. The exam tests the difference between <strong>nameplate current</strong> (used for overload sizing under 430.32) and <strong>FLC from the tables</strong> (used for conductor and short-circuit sizing under 430.22 and 430.52). Confusing the two is the most common motor-calculation error.</p>"
    },
    {
      "heading": "Conduit Bending: Stubs, Offsets, and Saddles",
      "html": "<p>Level 2 bending is Level 1 bending done precisely. A <strong>90-degree stub</strong> uses the take-up — the distance the bender consumes — so the mark goes take-up inches back from the desired stub height. An <strong>offset</strong> moves the conduit around an obstacle: the distance between bends equals the offset depth times the multiplier for the bend angle (for 30-degree bends the multiplier is 2; for 45 degrees it is 1.41; for 22.5 degrees it is 2.6). A <strong>back-to-back bend</strong> is two 90s facing opposite directions; a <strong>saddle</strong> goes over an obstacle and back down.</p><p>The field rules are simple: measure twice, mark once, bend a little at a time, and check with a level. The exam's bending questions are arithmetic — offset depth times multiplier, stub height minus take-up — so learn the multipliers as a table, not as a guess.</p>"
    },
    {
      "heading": "Boxes, Cable Tray, Terminations, and Splices",
      "html": "<p><strong>Pull and junction boxes (314.28)</strong> are sized by the raceway, not by the conductor count: for a straight pull, the box must be at least 8 times the trade size of the largest raceway; for an angle or U pull, at least 6 times the largest raceway plus the sum of the other raceways on the same wall. A 2-inch raceway in a straight pull needs a box at least 16 inches long.</p><p><strong>Cable tray</strong> carries large numbers of conductors without a raceway, with its own fill and support rules. <strong>Terminations and splices</strong> must be made in a box or enclosure, with the conductor insulation stripped only as far as the connector requires, and with torque applied to the manufacturer's value — a loose termination is the most common cause of electrical fires. Crimp, wire-nut, and lug connections each have a right tool and a right torque; the exam tests the tool, not the brand.</p>"
    },
    {
      "heading": "Grounding, Bonding, Breakers, and Fuses",
      "html": "<p>Level 2 revisits Article 250 at the level the exam tests it. The <strong>equipment grounding conductor</strong> is sized by <strong>Table 250.122</strong> from the overcurrent device rating — a 20-amp circuit takes 14 AWG copper, a 100-amp circuit takes 8 AWG copper, a 200-amp circuit takes 6 AWG copper. The <strong>grounding electrode conductor</strong> is sized by <strong>Table 250.66</strong> from the largest ungrounded service conductor. <strong>Bonding</strong> connects the metal parts that could become energized — enclosures, raceways, water piping — so they stay at the same potential and fault current has a path home.</p><p><strong>Circuit breakers and fuses</strong> are the two overcurrent devices. A breaker can be reset; a fuse must be replaced. Both must interrupt the available fault current — the <strong>interrupting rating</strong> must equal or exceed the available short-circuit current at the point of installation. A breaker with a 10,000-amp interrupting rating on a service with 22,000 amps available is a violation even when it has never tripped.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "RMS value",
      "def": "Root-mean-square: the effective value of AC voltage or current — 120 V RMS does the same work as 120 V DC."
    },
    {
      "term": "Sine wave",
      "def": "The shape of AC voltage and current over time: rising, peaking, falling, and reversing 60 times a second."
    },
    {
      "term": "Reactance",
      "def": "Opposition to AC current from inductance or capacitance; combined with resistance it forms impedance."
    },
    {
      "term": "Power factor",
      "def": "True power divided by apparent power; motors draw more volt-amperes than watts."
    },
    {
      "term": "Synchronous speed",
      "def": "120 × frequency / poles — the speed of the rotating magnetic field; the rotor runs slightly slower because of slip."
    },
    {
      "term": "Slip",
      "def": "The difference between a motor's synchronous speed and its actual rotor speed."
    },
    {
      "term": "Service factor",
      "def": "The multiplier on a motor's nameplate horsepower that the motor may carry continuously without damage."
    },
    {
      "term": "Offset multiplier",
      "def": "The factor for spacing offset bends: 2 for 30°, 1.41 for 45°, 2.6 for 22.5°."
    },
    {
      "term": "Take-up",
      "def": "The distance a conduit bender consumes when making a bend."
    },
    {
      "term": "314.28",
      "def": "Pull and junction box sizing: 8× the largest raceway for a straight pull, 6× plus the others for an angle pull."
    },
    {
      "term": "Cable tray",
      "def": "A support system that carries large numbers of conductors without enclosing them in a raceway."
    },
    {
      "term": "Table 250.122",
      "def": "Equipment grounding conductor sizing, by the rating of the overcurrent device."
    },
    {
      "term": "Table 250.66",
      "def": "Grounding electrode conductor sizing, by the size of the largest ungrounded service conductor."
    },
    {
      "term": "Interrupting rating",
      "def": "The maximum fault current a breaker or fuse can safely interrupt; it must equal or exceed the available fault current."
    },
    {
      "term": "Nameplate current",
      "def": "The motor's actual full-load current as marked by the manufacturer — used for overload sizing under 430.32."
    },
    {
      "term": "FLC",
      "def": "Full-load current from Tables 430.247/248/250 — used for conductor and short-circuit sizing, not overloads."
    }
  ],
  "video": {
    "title": "How Electric Motors Work - 3 phase AC induction motors  ac motor",
    "embedUrl": "https://www.youtube.com/embed/59HBoIXzX_c",
    "note": "How a three-phase AC induction motor actually works — rotating magnetic field, rotor, slip, and synchronous speed — the theory behind Level 2's motor module.",
    "more": [
      {
        "title": "AC Basics: Learn All About Alternating Current",
        "url": "https://www.youtube.com/watch?v=OUcKJuMSSW4"
      },
      {
        "title": "Alternating Current, Motors, & Controls",
        "url": "https://www.youtube.com/watch?v=RG3eljmqyq4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4-pole motor runs on 60-hertz power. (a) What is its synchronous speed? (b) If the rotor runs at 1,740 RPM, what is the slip in RPM? (c) A 120-volt RMS sine wave peaks at about how many volts?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 120 × 60 / 4 = 1,800 RPM. (b) 1,800 − 1,740 = 60 RPM of slip. (c) 120 × 1.414 = about 170 volts peak.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Size pull and junction boxes (314.28).\" Write a three-sentence exam-ready explanation with the straight-pull and angle-pull rules and one worked example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For a straight pull, the box must be at least 8 times the trade size of the largest raceway. Step 2: For an angle or U pull, at least 6 times the largest raceway plus the sum of the other raceways entering the same wall. Step 3: Example: a 2-inch raceway in a straight pull needs a box at least 16 inches long.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A panel schedule shows a 200-amp breaker feeding a subpanel, and the equipment grounding conductor pulled with the feeder is 8 AWG copper. Is that right? What does Table 250.122 require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 250.122 sizes the equipment grounding conductor from the overcurrent device rating. Step 2: A 200-amp device requires 6 AWG copper, not 8 AWG. Step 3: The 8 AWG conductor is undersized and must be replaced with 6 AWG copper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) What is the offset multiplier for 30-degree bends? (b) An offset of 6 inches with 30-degree bends needs how much distance between bends? (c) What EGC does Table 250.122 require for a 100-amp circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 2. (b) 6 × 2 = 12 inches between bends. (c) 8 AWG copper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"RMS voltage is the peak voltage, a 4-pole motor on 60 hertz runs at 3,600 RPM, a straight pull needs a box 6 times the raceway, and the EGC for a 200-amp circuit is 8 AWG.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: RMS is the effective value — 120 V RMS peaks at about 170 V. Step 2: A 4-pole motor on 60 hertz has a synchronous speed of 1,800 RPM (3,600 RPM is a 2-pole motor). Step 3: A straight pull needs a box at least 8 times the largest raceway; 6 times is the angle-pull rule. Step 4: Table 250.122 requires 6 AWG copper for a 200-amp circuit.</p>"
    }
  ],
  "quiz": [
    {
      "module": 6,
      "q": "What is the RMS value of a 240-volt AC supply?",
      "choices": [
        "240 volts effective — the value that does the same work as 240 volts DC",
        "340 volts",
        "120 volts",
        "480 volts"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 240 volts RMS is the effective value: it does the same work as 240 volts DC, even though the sine wave peaks near 340 volts. (b) is wrong: \"340 volts\" — 340 volts is the peak voltage (240 × 1.414), not the RMS value. (c) is wrong: \"120 volts\" — 120 volts is half the supply voltage. (d) is wrong: \"480 volts\" — 480 volts is double the supply voltage."
    },
    {
      "module": 6,
      "q": "A 6-pole motor runs on 60-hertz power. What is its synchronous speed?",
      "choices": [
        "1,200 RPM",
        "1,800 RPM",
        "3,600 RPM",
        "900 RPM"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Synchronous speed = 120 × 60 / 6 = 1,200 RPM. (b) is wrong: \"1,800 RPM\" — 1,800 RPM is a 4-pole motor on 60 hertz. (c) is wrong: \"3,600 RPM\" — 3,600 RPM is a 2-pole motor on 60 hertz. (d) is wrong: \"900 RPM\" — 900 RPM is an 8-pole motor on 60 hertz."
    },
    {
      "module": 6,
      "q": "An offset of 4 inches is made with 45-degree bends. How far apart are the bends?",
      "choices": [
        "8 inches",
        "5.64 inches",
        "10.4 inches",
        "4 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 45-degree multiplier is 1.41, so 4 × 1.41 = 5.64 inches between bends. (a) is wrong: \"8 inches\" — 8 inches uses the 30-degree multiplier of 2. (c) is wrong: \"10.4 inches\" — 10.4 inches uses the 22.5-degree multiplier of 2.6. (d) is wrong: \"4 inches\" — 4 inches is the offset depth, not the bend spacing."
    },
    {
      "module": 6,
      "q": "For a straight pull, how long must a pull box be relative to the largest raceway?",
      "choices": [
        "6 times the trade size",
        "4 times the trade size",
        "8 times the trade size",
        "10 times the trade size"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 314.28 requires a straight-pull box to be at least 8 times the trade size of the largest raceway. (a) is wrong: \"6 times the trade size\" — 6 times is the angle-pull multiplier, not the straight-pull multiplier. (b) is wrong: \"4 times the trade size\" — 4 times is not the straight-pull rule. (d) is wrong: \"10 times the trade size\" — 10 times is not the straight-pull rule."
    },
    {
      "module": 6,
      "q": "What size copper equipment grounding conductor does Table 250.122 require for a 60-amp circuit?",
      "choices": [
        "14 AWG",
        "10 AWG",
        "8 AWG",
        "12 AWG"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 250.122 requires 10 AWG copper for a 60-amp overcurrent device. (a) is wrong: \"14 AWG\" — 14 AWG is for 15- and 20-amp devices. (c) is wrong: \"8 AWG\" — 8 AWG is for 80- to 150-amp devices. (d) is wrong: \"12 AWG\" — 12 AWG is not a Table 250.122 size for a 60-amp device."
    },
    {
      "module": 6,
      "q": "What is the difference between nameplate current and FLC?",
      "choices": [
        "They are the same thing",
        "Nameplate current is used for overload sizing; FLC from the tables is used for conductor and short-circuit sizing",
        "FLC is used for overload sizing; nameplate current is used for conductor sizing",
        "Nameplate current applies only to DC motors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Nameplate current is the manufacturer's actual full-load current, used for overload sizing under 430.32; FLC comes from Tables 430.247/248/250 and is used for conductor and short-circuit sizing. (a) is wrong: \"They are the same thing\" — They are different values used for different purposes. (c) is wrong: \"FLC is used for overload sizing; nameplate current is used for conductor sizing\" — This reverses the two — FLC is for conductors and short-circuit protection, nameplate is for overloads. (d) is wrong: \"Nameplate current applies only to DC motors\" — Nameplate current applies to AC motors too."
    },
    {
      "module": 6,
      "q": "In an AC circuit, inductance makes current do what relative to voltage?",
      "choices": [
        "Lead voltage",
        "Lag voltage",
        "Stay exactly in phase",
        "Reverse direction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inductance makes current lag voltage; capacitance makes current lead voltage. (a) is wrong: \"Lead voltage\" — Leading voltage is what capacitance does. (c) is wrong: \"Stay exactly in phase\" — Current and voltage are in phase only in a purely resistive circuit. (d) is wrong: \"Reverse direction\" — Current does not reverse direction because of inductance."
    },
    {
      "module": 6,
      "q": "A breaker has a 10,000-amp interrupting rating and the available fault current is 14,000 amps. What is the result?",
      "choices": [
        "It is fine — breakers always handle more than their rating",
        "It is a violation — the interrupting rating must equal or exceed the available fault current",
        "It is fine if the breaker is a GFCI type",
        "It is fine for a residential panel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The interrupting rating must equal or exceed the available short-circuit current at the point of installation — 10,000 amps is not enough for 14,000 amps available. (a) is wrong: \"It is fine — breakers always handle more than their rating\" — A breaker cannot safely interrupt more than its rating. (c) is wrong: \"It is fine if the breaker is a GFCI type\" — GFCI protection has nothing to do with interrupting rating. (d) is wrong: \"It is fine for a residential panel\" — Residential panels have the same interrupting-rating rule."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — NCCER Electrical Level 2 Review: Quick Reference</h3><p><strong>Focus:</strong> Alternating Current: The Sine Wave and What It Means — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Explain alternating current: sine wave, frequency, RMS values, and inductive and capacitive reactance.; Identify motor types and read a motor nameplate: horsepower, voltage, full-load current, service factor, and temperature rise.; Bend conduit: 90-degree stubs, offsets, back-to-back bends, and saddles, with take-up and gain..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> RMS value, Sine wave, Reactance, Power factor, Synchronous speed, Slip, Service factor, Offset multiplier</p>\n"
};
