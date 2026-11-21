// egr108 - Module 9: CNC and Automation: Computer-Controlled Making
module.exports = {
  "number": 9,
  "slug": "cnc-automation",
  "title": "CNC and Automation: Computer-Controlled Making",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what CNC means and how a CAD model becomes a machined part.",
    "Name the main CNC machines: mill, lathe, and router.",
    "Explain G-code in plain words and read a simple line of it.",
    "Compare CNC with manual machining for accuracy, repeatability, and cost.",
    "Say what a robot and a flexible cell add to a CNC shop."
  ],
  "sections": [
    {
      "heading": "What CNC Is",
      "html": "<p><p>CNC means Computer Numerical Control: a computer reads a program and drives the machine's motors to move the tool along exact paths. The designer draws the part in CAD, the CAM software turns the drawing into tool paths, and the CNC machine follows them — to a few hundredths of a millimetre, hundreds of times over, without getting tired. That repeatability is why CNC runs modern manufacturing.</p></p>\n<p><p>A CNC mill can cut pockets, holes, and 3D surfaces; a CNC lathe turns round parts; a CNC router cuts sheet and wood. The machine does not think — it follows the program exactly, including any mistakes in it. The skill is in the programming, the setup, and the checking, not in turning the handwheels.</p></p>\n"
    },
    {
      "heading": "From CAD to Part: The Chain",
      "html": "<p><p>The chain is CAD → CAM → G-code → machine. CAD is the 3D model. CAM is where the programmer chooses tools, cutting speeds, and the order of operations, and the software writes the tool paths. G-code is the language the machine reads: lines like G01 X50 Y25 F200, which means 'move in a straight line to X50, Y25 at a feed of 200 mm/min'. M-codes switch things on and off, like M03 to start the spindle.</p></p>\n<p><p>Before cutting metal, the programmer proves the program out: run it in air or in simulation, check the tool lengths, and cut the first part slowly while watching. A wrong sign or a wrong tool length can crash the tool into the work — a costly mistake. The first part is always measured against the drawing before the rest are run.</p></p>\n"
    },
    {
      "heading": "CNC Versus Manual Machining",
      "html": "<p><p>CNC wins on accuracy, repeatability, and complex shapes: it can cut a 3D surface that no human could follow by hand, and the hundredth part is identical to the first. Manual machining wins on setup speed for a one-off simple part: a skilled machinist can have a bracket done before the CNC is even programmed. The choice is about quantity and complexity, not about which is 'better'.</p></p>\n<p><p>CNC costs more to set up (programming, tooling, fixturing) but less per part once it is running. That is why CNC suits batches of ten or more and complex parts, while manual suits one-offs and repairs. A good shop has both, and the engineer picks the right one for the job — and for the budget.</p></p>\n"
    },
    {
      "heading": "Automation: Robots and Cells",
      "html": "<p><p>A robot can load and unload a CNC machine, so the machine keeps cutting while the operator does other work. A flexible cell is a group of machines served by one robot and one computer, making a family of parts with little human help. Automation does not replace the machinist — it moves them from loading parts to programming, setting up, and checking quality.</p></p>\n<p><p>Automation needs the same care as CNC: prove the program, guard the robot, and keep the work area clear. A robot that loads parts is strong and fast and does not notice a hand in its way, so light curtains and interlocked guards are mandatory. The payoff is a machine that runs overnight, making parts while the shop is dark — but only if the program and the setup are right.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>CNC is a computer driving a machine tool along programmed paths.</li><li>The chain is CAD → CAM → G-code → machine.</li><li>Prove the program before cutting metal.</li><li>CNC wins on repeatability and complex shapes; manual wins on one-off setup speed.</li><li>Robots load machines; guards and interlocks keep people safe.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Trusting a program without proving it out. One wrong number can crash the tool into the work.</p><p><strong>Common mistake:</strong> Choosing CNC for a single simple part. Programming time can cost more than the part is worth.</p><p><strong>Ready check:</strong> If you can explain the CAD → CAM → G-code chain and read a G01 line, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "CNC",
      "def": "Computer Numerical Control: a computer drives a machine tool."
    },
    {
      "term": "CAD",
      "def": "Computer-aided design: drawing a part on a computer."
    },
    {
      "term": "CAM",
      "def": "Computer-aided manufacturing: turning a CAD model into tool paths."
    },
    {
      "term": "G-code",
      "def": "The language a CNC machine reads, giving moves, speeds, and tool changes."
    },
    {
      "term": "Tool path",
      "def": "The route the cutting tool follows through the material."
    },
    {
      "term": "Work offset",
      "def": "The stored position of the workpiece zero point on the machine."
    },
    {
      "term": "Prove-out",
      "def": "Running a new program carefully (in air or slowly) to check it before cutting."
    },
    {
      "term": "Repeatability",
      "def": "Making the same part the same way, time after time."
    },
    {
      "term": "Fixture",
      "def": "A device that holds the workpiece in place on the machine."
    },
    {
      "term": "Robot",
      "def": "A programmable machine that moves parts, often loading and unloading CNC machines."
    },
    {
      "term": "Flexible cell",
      "def": "A group of machines served by one robot, making a family of parts."
    },
    {
      "term": "Interlock",
      "def": "A safety switch that stops a machine when a guard is opened."
    },
    {
      "term": "Feed rate",
      "def": "How fast the tool moves through the material, in mm/min."
    },
    {
      "term": "Spindle",
      "def": "The rotating part of a machine tool that holds the cutter."
    }
  ],
  "video": {
    "title": "DMS 5 Axis CNC Router - Precise Motion",
    "embedUrl": "https://www.youtube.com/embed/7Xuc7oaSjwc",
    "note": "A 5-axis CNC router in motion — precise, computer-controlled cutting that shows what CNC can do.",
    "more": [
      {
        "title": "CNC machining - What is it and How Does it Work? (Must Know for Engineers)",
        "url": "https://www.youtube.com/watch?v=lEyNWtM6MW4"
      },
      {
        "title": "Big CNC Mill in Super Slow Motion",
        "url": "https://www.youtube.com/watch?v=iSdhnpgtUAs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the CAD → CAM → G-code chain in three short sentences.</p>",
      "solution": "<p><strong>Answer:</strong> CAD draws the part; CAM plans the tool paths; G-code is the list of instructions the machine follows.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What does the line 'G01 X50 Y25 F200' mean?</p>",
      "solution": "<p><strong>Answer:</strong> Move in a straight line to X = 50, Y = 25 at a feed rate of 200 mm/min.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A batch of 200 identical brackets is needed. CNC or manual machining, and why?</p>",
      "solution": "<p><strong>Answer:</strong> CNC: the programming cost is spread over 200 parts and every part is identical.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> One replacement bracket is needed today. CNC or manual, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Manual: a skilled machinist can make a one-off before the CNC is programmed and set up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must a new CNC program be proved out before cutting metal?</p>",
      "solution": "<p><strong>Answer:</strong> A wrong number can crash the tool into the work, damaging the tool, the part, and the machine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A robot loads a CNC lathe. Name one safety device that must be fitted and why.</p>",
      "solution": "<p><strong>Answer:</strong> An interlocked guard or light curtain: it stops the robot when a person enters, because the robot is strong and does not notice a hand in its way.</p>"
    }
  ],
  "quiz": [
    {
      "q": "CNC stands for:",
      "choices": [
        "Computer Numerical Control",
        "Central Network Computer",
        "Cutting New Components",
        "Computerised Nut Control"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Computer Numerical Control. (b), (c), and (d) are invented expansions."
    },
    {
      "q": "The correct order of the CNC chain is:",
      "choices": [
        "G-code → CAD → CAM",
        "CAD → CAM → G-code",
        "CAM → CAD → G-code",
        "Machine → CAM → CAD"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Draw it, plan the tool paths, then write the code. (a) and (c) put the code before the design. (d) puts the machine first."
    },
    {
      "q": "In G-code, G01 means:",
      "choices": [
        "Rapid move",
        "Straight-line move at a set feed",
        "Start the spindle",
        "Change the tool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). G01 is a controlled straight move. (a) is G00. (c) is an M-code (M03). (d) is a tool-change command."
    },
    {
      "q": "CNC's biggest advantage over manual machining is:",
      "choices": [
        "Lower setup cost",
        "Accuracy and repeatability, part after part",
        "No programming needed",
        "No safety guards needed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every part is identical. (a) CNC setup costs more. (c) CNC needs programming. (d) CNC still needs guards."
    },
    {
      "q": "Prove-out means:",
      "choices": [
        "Cutting the first part at full speed",
        "Checking a new program carefully before cutting metal",
        "Proving the machine is the fastest",
        "Testing the coolant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Run it in air or slowly and check it. (a) is the opposite of safe prove-out. (c) speed is not the point. (d) coolant is a separate check."
    },
    {
      "q": "A one-off simple bracket is usually best made:",
      "choices": [
        "On a CNC mill",
        "By hand on a manual machine",
        "By a robot alone",
        "By casting only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Manual setup is faster for one simple part. (a) programming time costs more than the part. (c) a robot needs a machine to load. (d) casting suits batches, not one-offs."
    },
    {
      "q": "A flexible cell is:",
      "choices": [
        "A single manual lathe",
        "A group of machines served by one robot",
        "A type of battery",
        "A soft robot"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Machines plus a robot making a family of parts. (a) is one machine. (c) and (d) are unrelated."
    },
    {
      "q": "An interlocked guard on a robot cell:",
      "choices": [
        "Speeds up the robot",
        "Stops the machine when the guard is opened",
        "Holds the workpiece",
        "Cools the motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It keeps people safe around a strong, fast robot. (a) it slows or stops the robot. (c) that is a fixture's job. (d) that is coolant's job."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — CNC and Automation: Computer-Controlled Making: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what CNC means and how a CAD model becomes a machined part.</p>\n<p><strong>Key terms:</strong> CNC · CAD · CAM · G-code · Tool path · Work offset · Prove-out · Repeatability.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what CNC means and how a CAD model becomes a machined part.</li>\n<li>Name the main CNC machines: mill, lathe, and router.</li>\n<li>Explain G-code in plain words and read a simple line of it.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
