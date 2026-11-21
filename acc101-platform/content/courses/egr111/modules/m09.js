// egr111 - Module 9: Industrial Robots
module.exports = {
  "number": 9,
  "slug": "industrial-robots",
  "title": "Industrial Robots",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main types of industrial robot and what each is good at.",
    "Explain axes, degrees of freedom, payload, and repeatability.",
    "Describe how a robot is programmed with a teach pendant.",
    "Explain how robots and PLCs work together in a cell.",
    "Explain robot safety, including fencing and collaborative robots."
  ],
  "sections": [
    {
      "heading": "Types of Industrial Robot",
      "html": "<p>The most common industrial robot is the articulated arm: a chain of joints that looks and moves like a human arm, usually with six axes. It is flexible and can reach around obstacles, which makes it the standard choice for welding, painting, and machine tending. A SCARA robot has a rigid vertical axis and moves fast in a horizontal plane, which suits pick-and-place and assembly work. A delta robot hangs above the work and moves very fast over a small area, which suits sorting and packaging. A cartesian (gantry) robot moves on straight rails in X, Y, and Z, which suits large, heavy, or very precise jobs such as loading big machine tools.</p>\n<p>Collaborative robots (cobots) are a newer type: they are designed to work beside people without fencing, using force limits and sensors to stop if they touch someone. They are slower and weaker than a fenced industrial robot, but they are easier to set up and can share a workspace with an operator. Choosing a robot means matching its type to the job's speed, reach, precision, and safety needs.</p>\n"
    },
    {
      "heading": "Axes, Payload, Reach, and Repeatability",
      "html": "<p>A robot's axes are its joints: a six-axis articulated robot can position and orient its tool in any direction, which is why six axes is the standard. Payload is the maximum weight the robot can carry at its wrist — a small cobot may carry 5 kg, a large palletising robot 500 kg or more. Reach is how far the tool can get from the robot's base. Repeatability is how precisely the robot returns to the same taught point, typically within ±0.05 mm to ±0.1 mm for a good industrial robot — repeatability is not the same as accuracy, which is how close the robot gets to a position given in absolute coordinates.</p>\n<p>Those four numbers decide whether a robot fits a job. A welding robot needs reach and repeatability; a palletiser needs payload; a pick-and-place robot needs speed. Oversizing a robot wastes money and floor space; undersizing it means it cannot lift the part or reach the fixture. The robot's datasheet lists all four numbers, and reading it is the first step of any robot selection.</p>\n"
    },
    {
      "heading": "Programming a Robot: Teach and Repeat",
      "html": "<p>Most industrial robots are programmed by teaching: an operator uses a teach pendant (a handheld controller) to move the robot to each point it needs, records the point, and then strings the points together into a program with speeds, waits, and gripper commands. The robot then repeats that program exactly, thousands of times. It is simple and reliable, and it is how most robot programs in factories are still made.</p>\n<p>Newer methods include offline programming, where the program is built in a simulation on a computer and downloaded to the robot, and hand-guiding, where the operator physically moves a cobot's arm to teach it points. Whatever the method, the program is a list of moves and actions — and the PLC usually controls when the program runs, through a handshake of signals: the PLC says “part ready”, the robot says “cycle complete”, and the cell moves on.</p>\n"
    },
    {
      "heading": "Robots and PLCs in a Cell",
      "html": "<p>A robot rarely works alone: it sits in a cell with conveyors, fixtures, sensors, and a PLC that coordinates everything. The PLC is the conductor and the robot is one musician: the PLC starts the conveyor, waits for the part-present sensor, tells the robot to run its cycle, waits for the robot's cycle-complete signal, then starts the conveyor again. The signals pass between the PLC and the robot controller as digital I/O or over an industrial network.</p>\n<p>That handshake is where most cell faults live: if the PLC waits for a signal the robot never sends, the cell stops and waits forever. Good cell design uses timeouts — if the expected signal does not arrive in a set time, the PLC raises an alarm instead of waiting silently — and clear status signals so an operator can see which device the cell is waiting for.</p>\n"
    },
    {
      "heading": "Robot Safety and Common Mistakes",
      "html": "<p>A fenced industrial robot is fast and strong enough to kill: it must be inside guarding with interlocked gates, so opening a gate stops the robot. The teach pendant has a three-position enabling switch — the robot only moves while the operator holds the switch in the middle position, and releasing it or squeezing it hard stops the robot. Collaborative robots are different: they are force-limited and can work unfenced, but a risk assessment must still be done, because a cobot carrying a sharp part is still a hazard.</p>\n<p>A risk assessment for a robot cell looks at the task, the tool, the part, and the people nearby, and decides what guarding, interlocks, and speed limits are needed. Never enter a robot cell while the robot is in automatic mode, and never trust a robot's program to keep you safe — the guarding and the interlocks are the safety, not the software.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Articulated arms are the flexible standard; SCARA is fast in a plane; delta is very fast over a small area; cartesian suits large, heavy jobs.</li><li>Payload, reach, and repeatability decide whether a robot fits a job.</li><li>Robots are usually programmed by teaching points with a pendant, then repeating.</li><li>The PLC coordinates the cell through handshake signals with the robot.</li><li>Fenced robots need guarding and interlocked gates; cobots are force-limited but still need a risk assessment.</li></ul></p>\n<p><strong>Common mistake:</strong> Confusing repeatability with accuracy. Repeatability is returning to the same taught point; accuracy is hitting an absolute coordinate — a robot can be repeatable without being accurate.</p>\n<p><strong>Common mistake:</strong> Entering a robot cell in automatic mode. Never do it — the guarding and interlocks are the safety, not the robot's program.</p>\n<p><strong>Ready check:</strong> If you can pick a robot type for a job, explain payload and repeatability, and describe a PLC-robot handshake, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Articulated robot",
      "def": "A robot arm with a chain of rotary joints, usually six axes, that moves like a human arm."
    },
    {
      "term": "SCARA robot",
      "def": "A robot that moves fast in a horizontal plane with a rigid vertical axis, used for pick-and-place and assembly."
    },
    {
      "term": "Delta robot",
      "def": "A robot that hangs above the work and moves very fast over a small area, used for sorting and packaging."
    },
    {
      "term": "Cartesian robot",
      "def": "A robot that moves on straight rails in X, Y, and Z, used for large, heavy, or very precise jobs."
    },
    {
      "term": "Collaborative robot (cobot)",
      "def": "A robot designed to work beside people without fencing, using force limits and sensors to stop on contact."
    },
    {
      "term": "Axis",
      "def": "One joint or direction of movement of a robot; a six-axis robot has six joints."
    },
    {
      "term": "Degrees of freedom",
      "def": "The number of independent ways a robot can move its tool, equal to its number of axes."
    },
    {
      "term": "Payload",
      "def": "The maximum weight a robot can carry at its wrist."
    },
    {
      "term": "Reach",
      "def": "How far a robot's tool can get from its base."
    },
    {
      "term": "Repeatability",
      "def": "How precisely a robot returns to the same taught point, typically ±0.05 mm to ±0.1 mm."
    },
    {
      "term": "End effector",
      "def": "The tool at the end of a robot's arm, such as a gripper, a welding torch, or a spray gun."
    },
    {
      "term": "Teach pendant",
      "def": "A handheld controller used to move a robot and record its program points."
    },
    {
      "term": "Work envelope",
      "def": "The volume of space a robot can reach with its tool."
    },
    {
      "term": "Handshake",
      "def": "The exchange of signals between a PLC and a robot, such as “part ready” and “cycle complete”."
    },
    {
      "term": "Enabling switch",
      "def": "A three-position switch on a teach pendant: the robot only moves while it is held in the middle position."
    }
  ],
  "video": {
    "title": "How Industrial Robots Work — And How AI Helps Them Adapt",
    "embedUrl": "https://www.youtube.com/embed/gNEFS_GNnyI",
    "note": "How industrial robots are built, how they move, and how they are being taught to adapt. Note the robot types shown and match each one to the jobs in this module.",
    "more": [
      {
        "title": "Industrial Robots Arc Welding#industrialrobots",
        "url": "https://www.youtube.com/watch?v=VbMmtOXWwJM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A factory needs to pick small electronic parts from a tray and place them on a circuit board, very fast, in a small area. Which robot type do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a SCARA robot, because it moves very fast in a horizontal plane with a rigid vertical axis — ideal for pick-and-place. Step 2: A delta robot would also work for very high speed over a small area. Step 3: An articulated arm would be slower and more expensive than needed for this flat, fast job. A good answer names SCARA (or delta) and justifies it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A robot must weld car bodies on a line where the parts are large and the weld points are in awkward positions around the body. Which robot type do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a six-axis articulated robot, because its chain of joints can reach around the car body and orient the welding torch in any direction. Step 2: SCARA and delta robots cannot reach around a large part, and a cartesian robot cannot orient its tool freely. A good answer names the articulated arm and explains the reach and orientation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A robot has a repeatability of ±0.1 mm. Explain in plain words what that means, and say whether it guarantees the robot will hit a position given in absolute coordinates.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Repeatability of ±0.1 mm means that when the robot returns to a taught point, it lands within 0.1 mm of where it was taught. Step 2: It does not guarantee accuracy to an absolute coordinate — the robot can be repeatable (always landing in the same spot) without that spot being exactly the programmed coordinate. Step 3: In practice, robots are taught their points in place, so repeatability is the number that matters. A good answer distinguishes repeatability from accuracy.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Describe the handshake between a PLC and a robot in a machine-tending cell, naming the two key signals and what happens if the robot's signal never arrives.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The PLC sends “part ready” (or “cycle start”) to the robot when a part is in position. Step 2: The robot runs its cycle and sends “cycle complete” back to the PLC. Step 3: The PLC then moves the conveyor and the cell continues. Step 4: If “cycle complete” never arrives, a good program uses a timeout to raise an alarm instead of waiting silently forever. A good answer names both signals and the timeout.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A small workshop wants a robot to work beside an operator, handing over parts. Which robot type fits, and what safety point must still be checked?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a collaborative robot (cobot), because it is force-limited and designed to work beside people without fencing. Step 2: A risk assessment must still be done — the cobot's speed and force limits, the sharpness of the parts, and the operator's position all matter. Step 3: A cobot carrying a sharp part can still hurt someone, so the assessment decides the safe speed and the tool design. A good answer names the cobot and the risk assessment.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An operator needs to teach a robot new points inside its cell. Explain the three-position enabling switch and why it exists.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The enabling switch on the teach pendant has three positions: released, middle (held), and squeezed hard. Step 2: The robot only moves while the switch is held in the middle position. Step 3: Releasing it or squeezing it hard in a panic both stop the robot — so the operator's natural reactions (letting go or gripping hard) both make the robot stop. A good answer explains all three positions and the safety logic.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which robot type is best for fast pick-and-place work in a flat area?",
      "choices": [
        "Articulated arm",
        "SCARA",
        "Cartesian gantry",
        "A six-axis welding robot"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A SCARA robot moves fast in a horizontal plane with a rigid vertical axis, which suits pick-and-place. (a) is flexible but slower and more expensive for this job. (c) suits large, heavy jobs. (d) is an articulated arm, the same as (a)."
    },
    {
      "q": "Which robot type is the flexible standard for welding car bodies?",
      "choices": [
        "Delta",
        "SCARA",
        "Six-axis articulated arm",
        "Cartesian gantry"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A six-axis articulated arm can reach around a car body and orient its torch freely. (a) is for fast sorting over a small area. (b) is for flat pick-and-place. (d) cannot orient its tool freely around a large part."
    },
    {
      "q": "What does a robot's payload mean?",
      "choices": [
        "How fast it can move",
        "The maximum weight it can carry at its wrist",
        "How far it can reach",
        "How precisely it repeats a position"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Payload is the maximum load at the wrist. (a) is speed. (c) is reach. (d) is repeatability."
    },
    {
      "q": "A robot has a repeatability of ±0.1 mm. What does that mean?",
      "choices": [
        "It can lift 0.1 mm",
        "When it returns to a taught point, it lands within 0.1 mm of where it was taught",
        "It is accurate to 0.1 mm in absolute coordinates",
        "It moves at 0.1 mm per second"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Repeatability is about returning to the same taught point. (a) confuses millimetres with weight. (c) describes accuracy, which is different from repeatability. (d) is a speed, not a precision."
    },
    {
      "q": "What is the teach pendant used for?",
      "choices": [
        "To power the robot",
        "To move the robot by hand and record its program points",
        "To cool the robot's motors",
        "To fence off the robot cell"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The teach pendant is the handheld controller used to teach points and build programs. (a) is the power supply's job. (c) is the cooling system's job. (d) is the guarding's job."
    },
    {
      "q": "In a PLC-robot cell, what is a handshake?",
      "choices": [
        "A physical greeting between operators",
        "The exchange of signals between the PLC and the robot, such as “part ready” and “cycle complete”",
        "A type of gripper",
        "A safety fence"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The handshake is the signal exchange that coordinates the cell. (a) is a joke, not a technical term. (c) is an end effector. (d) is guarding."
    },
    {
      "q": "What is a collaborative robot (cobot)?",
      "choices": [
        "A robot that works with another robot",
        "A robot designed to work beside people without fencing, using force limits to stop on contact",
        "A robot that can only weld",
        "A robot with no safety requirements"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A cobot is force-limited and designed for shared workspaces. (a) is wrong: collaboration here means with people. (c) is wrong: cobots do many jobs. (d) is wrong: cobots still need a risk assessment."
    },
    {
      "q": "Why does a teach pendant have a three-position enabling switch?",
      "choices": [
        "To select three speeds",
        "So the robot only moves while the switch is held in the middle — releasing it or squeezing it hard both stop the robot",
        "To switch between three robots",
        "To save battery power"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The three-position switch makes the operator's natural reactions (letting go or gripping hard in a panic) both stop the robot. (a) is wrong: speed is set separately. (c) is wrong: one pendant controls one robot. (d) is wrong: the pendant is mains-powered, not battery-critical."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Industrial Robots: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main types of industrial robot and what each is good at.</p>\n<p><strong>Key terms:</strong> Articulated robot · SCARA robot · Delta robot · Cartesian robot · Collaborative robot (cobot) · Axis · Degrees of freedom · Payload.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main types of industrial robot and what each is good at.</li>\n<li>Explain axes, degrees of freedom, payload, and repeatability.</li>\n<li>Describe how a robot is programmed with a teach pendant.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
