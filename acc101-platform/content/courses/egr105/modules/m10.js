// egr105 - Module 10: DC Motors
module.exports = {
  "number": 10,
  "slug": "dc-motors",
  "title": "DC Motors",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a DC motor turns current into rotation (Lorentz force on a coil in a magnetic field).",
    "Explain what a commutator does and why it is needed.",
    "Use back EMF to find the armature current: I = (V − E) ÷ R.",
    "Tell series, shunt, and compound DC motors apart and name one use for each.",
    "Explain why a DC motor with no load can run away, and how speed is controlled."
  ],
  "sections": [
    {
      "heading": "How a DC Motor Turns",
      "html": "<p>A DC motor is a loop of wire (the armature) sitting in a magnetic field. Current through the loop feels a force — the Lorentz force — that pushes one side up and the other side down, so the loop turns. As it turns, a commutator (a split ring on the shaft) flips the current direction every half-turn, so the push always acts in the same rotational direction and the motor keeps spinning instead of rocking back and forth. The commutator and its carbon brushes are the parts that wear out and spark — the price of DC simplicity.</p>\n<p>The same machine is also a generator: spin the shaft and it produces voltage. That dual nature is the key to understanding motor behaviour, because a running motor generates its own voltage — the back EMF — which opposes the supply.</p>\n"
    },
    {
      "heading": "Back EMF and Armature Current",
      "html": "<p>As the armature spins, it generates a voltage (the back EMF, E) that opposes the supply voltage. The current that actually flows is driven by what is left: <strong>I = (V − E) ÷ R</strong>, where R is the armature resistance. Example: a 24 V motor with an armature resistance of 2 Ω and a back EMF of 20 V draws I = (24 − 20) ÷ 2 = 2 A. At standstill the motor is not spinning, so E = 0 and the starting current is I = 24 ÷ 2 = 12 A — six times the running current. That is why large DC motors need a starter to limit the inrush, and why a stalled motor can burn out: with no back EMF, the full supply voltage drives current through a small resistance.</p>\n<p>Back EMF is also the motor's built-in speed regulator. If the load increases, the motor slows, the back EMF falls, the current rises, and the torque rises to meet the load. If the load is removed, the motor speeds up, the back EMF rises, the current falls, and the torque drops. The motor finds the speed where its torque matches the load.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> I = (V − E) ÷ R. Back EMF grows with speed, so a spinning motor draws far less current than a stalled one. A stalled motor is a short circuit with a name.</div></p>\n"
    },
    {
      "heading": "Series, Shunt, and Compound Motors",
      "html": "<p>In a series motor, the field winding is in series with the armature: the same current flows through both. It gives huge starting torque — which is why series motors start trains, trams, and cranes — but if the load is removed, the field weakens, the motor speeds up, the field weakens further, and the motor can run away and destroy itself. A series motor must never run unloaded.</p>\n<p>In a shunt motor, the field winding is in parallel with the armature and fed from the same supply: the field stays roughly constant, so the speed stays roughly constant as the load changes. Shunt motors drive machine tools and fans where steady speed matters. In a compound motor, both windings are present: it keeps the series motor's strong starting torque and the shunt motor's steadier speed.</p>\n"
    },
    {
      "heading": "Speed Control and Safety",
      "html": "<p>DC motor speed is controlled by changing the voltage (a lower voltage means a lower speed) or by weakening the field (a weaker field means a higher speed, at the cost of torque). Modern drives use pulse-width modulation (PWM) — switching the supply on and off thousands of times a second and varying the on-time — which is efficient and gives smooth control from standstill to full speed.</p>\n<p>Safety: a stalled DC motor draws its full starting current continuously, so it overheats fast — never leave a stalled motor energised. A series motor must never run without a load. Lock out and tag out before touching a motor or its drive, and remember that a motor's shaft can keep spinning after the power is off — treat it as moving until it has stopped.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A DC motor turns because current in a magnetic field feels a force; the commutator keeps the push in the same direction.</li><li>I = (V − E) ÷ R: back EMF limits the running current; at standstill E = 0 and the current is at its maximum.</li><li>Series motors give huge starting torque but can run away unloaded; shunt motors hold a steady speed; compound motors combine both.</li><li>Speed is controlled by voltage or by field weakening; modern drives use PWM.</li><li>Never leave a stalled motor energised, and never run a series motor without a load.</li></ul></p>\n<p><strong>Common mistake:</strong> Using I = V ÷ R for a running motor. That gives the starting current, not the running current — you must subtract the back EMF first. A 24 V, 2 Ω motor draws 12 A at standstill but only 2 A when its back EMF is 20 V.</p>\n<p><strong>Common mistake:</strong> Thinking the commutator is a switch that turns the motor on and off. It reverses the armature current every half-turn so the torque always acts in the same direction.</p>\n<p><strong>Ready check:</strong> If you can find the running current of a 24 V motor with E = 20 V and R = 2 Ω (2 A) and explain why a series motor must not run unloaded, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "DC motor",
      "def": "A motor that converts DC electrical energy into rotation."
    },
    {
      "term": "Armature",
      "def": "The rotating coil of a DC motor that carries the current."
    },
    {
      "term": "Commutator",
      "def": "A split ring on the motor shaft that reverses the armature current every half-turn."
    },
    {
      "term": "Brushes",
      "def": "Carbon contacts that press on the commutator to feed current to the rotating armature."
    },
    {
      "term": "Back EMF (E)",
      "def": "The voltage a spinning motor generates, opposing the supply voltage."
    },
    {
      "term": "Lorentz force",
      "def": "The force on a current-carrying conductor in a magnetic field, which makes a motor turn."
    },
    {
      "term": "Series motor",
      "def": "A DC motor with the field winding in series with the armature: huge starting torque, can run away unloaded."
    },
    {
      "term": "Shunt motor",
      "def": "A DC motor with the field winding in parallel with the armature: steady speed under varying load."
    },
    {
      "term": "Compound motor",
      "def": "A DC motor with both series and shunt field windings."
    },
    {
      "term": "Starting current",
      "def": "The high current a motor draws at standstill, when back EMF is zero."
    },
    {
      "term": "PWM",
      "def": "Pulse-width modulation: controlling motor speed by switching the supply on and off rapidly."
    },
    {
      "term": "Field weakening",
      "def": "Reducing the field strength to raise a DC motor's speed, at the cost of torque."
    }
  ],
  "video": {
    "title": "How does an Electric Motor work? DC Motor explained | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/GQatiB-JHdI",
    "note": "DC motors from first principles: the coil, the field, the commutator, and back EMF.",
    "more": [
      {
        "title": "How does an Electric Motor work? (DC Motor) | Jared Owen",
        "url": "https://www.youtube.com/watch?v=CWulQ1ZSE3c"
      },
      {
        "title": "Electric Motor - Class 10 | Physics Wallah",
        "url": "https://www.youtube.com/watch?v=6NQAwt31_Jo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 24 V DC motor has an armature resistance of 2 Ω and a back EMF of 20 V. What current does it draw?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = (V − E) ÷ R. Step 2: I = (24 − 20) ÷ 2 = 4 ÷ 2 = 2 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the starting current of the motor in Problem 1, and why is it so much larger?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At standstill the motor is not spinning, so the back EMF is zero. Step 2: I(start) = V ÷ R = 24 ÷ 2 = 12 A — six times the running current of 2 A. Step 3: With no back EMF opposing the supply, the full 24 V drives current through the 2 Ω armature.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 120 V DC motor has an armature resistance of 1.5 Ω and draws 10 A while running. What is its back EMF?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rearrange I = (V − E) ÷ R to E = V − I × R. Step 2: E = 120 − (10 × 1.5) = 120 − 15 = 105 V.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A crane needs huge starting torque to lift a load from rest. Which type of DC motor is the right choice, and what is its main danger?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A series motor — its field and armature carry the same current, so torque is very high at starting. Step 2: The danger is runaway: if the load is removed, the field weakens, the motor speeds up, and it can destroy itself. Step 3: A series motor must never run unloaded.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine tool needs a motor that holds nearly the same speed as the cutting load changes. Which type of DC motor is the right choice, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A shunt motor. Step 2: Its field winding is in parallel with the armature, so the field stays roughly constant as the load changes. Step 3: A constant field means the speed stays roughly constant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A DC motor stalls under a jammed load and is left energised. Explain what happens and what the operator should have done.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A stalled motor is not spinning, so its back EMF is zero. Step 2: The full supply voltage drives the starting current (V ÷ R) through the armature continuously, overheating the windings. Step 3: The operator should have cut the power immediately — never leave a stalled motor energised — and locked it out before clearing the jam.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 24 V DC motor has an armature resistance of 2 Ω and a back EMF of 20 V. What current does it draw?",
      "choices": [
        "12 A",
        "2 A",
        "22 A",
        "0.5 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = (24 − 20) ÷ 2 = 2 A. (a) 12 A is the starting current (24 ÷ 2), when E = 0. (c) 22 A adds the numbers. (d) 0.5 A is 2 ÷ 4 — the wrong division."
    },
    {
      "q": "What is the starting current of that same motor?",
      "choices": [
        "2 A",
        "12 A",
        "24 A",
        "0 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At standstill E = 0, so I = V ÷ R = 24 ÷ 2 = 12 A. (a) 2 A is the running current. (c) 24 A is the voltage, not a current. (d) 0 A is wrong: the motor draws its maximum at standstill."
    },
    {
      "q": "What does the commutator do in a DC motor?",
      "choices": [
        "It switches the motor on and off",
        "It reverses the armature current every half-turn so the torque always acts in the same direction",
        "It generates the magnetic field",
        "It limits the starting current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The split-ring commutator flips the current so the push never reverses. (a) is wrong: the commutator does not switch the motor on or off. (c) is the field winding's job. (d) is a starter's job."
    },
    {
      "q": "What is back EMF?",
      "choices": [
        "A voltage that adds to the supply",
        "The voltage a spinning motor generates, opposing the supply",
        "The voltage across the brushes",
        "A fault voltage from a short circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A spinning motor acts as a generator, producing a voltage that opposes the supply. (a) is backwards: back EMF opposes, not adds. (c) is wrong: the brush voltage is a small drop. (d) is wrong: back EMF is normal, not a fault."
    },
    {
      "q": "Which DC motor gives the biggest starting torque, and what is its main danger?",
      "choices": [
        "Shunt motor — it can overheat",
        "Series motor — it can run away if unloaded",
        "Compound motor — it stalls easily",
        "Shunt motor — it cannot start"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A series motor's field and armature carry the same current, giving huge starting torque, but it can run away with no load. (a) is wrong: a shunt motor's torque is modest. (c) is wrong: a compound motor starts well. (d) is wrong: shunt motors start fine."
    },
    {
      "q": "A 120 V DC motor has R = 1.5 Ω and draws 10 A running. What is its back EMF?",
      "choices": [
        "120 V",
        "105 V",
        "15 V",
        "135 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). E = V − I × R = 120 − 15 = 105 V. (a) 120 V forgets the I × R drop. (c) 15 V is the I × R drop itself. (d) 135 V adds the drop instead of subtracting."
    },
    {
      "q": "How is a DC motor's speed most commonly controlled in a modern drive?",
      "choices": [
        "By changing the supply frequency",
        "By pulse-width modulation (PWM)",
        "By swapping the brushes",
        "By adding a capacitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PWM switches the supply rapidly and varies the on-time for smooth, efficient speed control. (a) is for AC induction motors. (c) is wrong: brushes are not a control. (d) is a single-phase AC starting trick."
    },
    {
      "q": "Why must a stalled DC motor not be left energised?",
      "choices": [
        "It will run backwards",
        "With no back EMF, the full starting current flows continuously and overheats the windings",
        "It will charge the battery",
        "The commutator will stop working"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At standstill E = 0, so I = V ÷ R flows without limit — the windings overheat fast. (a) is wrong: a stalled motor does not run backwards. (c) is wrong: a motor does not charge a battery. (d) is wrong: the commutator is not the issue."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — DC Motors: Quick Reference</h3>\n<p><strong>Core idea:</strong> A DC motor turns because current in a magnetic field feels a force; the commutator keeps the push in one direction. I = (V − E) ÷ R.</p>\n<p><strong>Key terms:</strong> DC motor · Armature · Commutator · Back EMF · Series/Shunt.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>I = (V − E) ÷ R — subtract back EMF first.</li>\n<li>At standstill E = 0, so starting current is V ÷ R.</li>\n<li>Series: huge starting torque, can run away unloaded.</li>\n<li>Shunt: steady speed. Compound: both.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
