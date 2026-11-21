// egr102 - Module 11: Simple Machines: Levers, Pulleys, and Gears
module.exports = {
  "number": 11,
  "slug": "simple-machines",
  "title": "Simple Machines: Levers, Pulleys, and Gears",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the six simple machines.",
    "Work out mechanical advantage: output force ÷ input force.",
    "Work out the effort needed with a lever or a pulley.",
    "Work out gear ratios and output speed.",
    "Explain why no machine is 100% efficient."
  ],
  "sections": [
    {
      "heading": "Six Machines That Change Force",
      "html": "<p>Every machine ever built is made from six simple machines: the lever, the wheel and axle, the pulley, the inclined plane, the wedge, and the screw. A simple machine does not create energy — it changes a force: making it bigger, changing its direction, or trading force for distance.</p>\n<p>The key number is mechanical advantage (MA): output force ÷ input force. A machine with MA = 4 turns a 200 N effort into an 800 N load force. But there is no free lunch: the effort must move four times as far as the load.</p>\n"
    },
    {
      "heading": "Levers: Force Times Distance",
      "html": "<p>A lever is a bar turning on a fulcrum. The mechanical advantage is the effort arm ÷ the load arm. Example: an effort arm of 1.2 m and a load arm of 0.3 m give MA = 1.2 ÷ 0.3 = 4. To lift an 800 N load, the effort is 800 ÷ 4 = 200 N (if friction is ignored).</p>\n<p>Levers come in three classes, depending on where the fulcrum, load, and effort sit. A wheelbarrow is a second-class lever (load between fulcrum and effort); tweezers are third-class (effort between fulcrum and load). The maths is the same in all three: moments balance, so effort × effort arm = load × load arm.</p>\n"
    },
    {
      "heading": "Pulleys: Sharing the Load",
      "html": "<p>A pulley is a wheel with a rope. A single fixed pulley only changes direction — MA = 1. A movable pulley shares the load between two rope sections, giving MA = 2. In general, MA equals the number of rope sections supporting the load.</p>\n<p>Example: a load of 400 N hangs from a pulley system with 4 supporting ropes. The ideal effort is 400 ÷ 4 = 100 N. But the rope must be pulled 4 m to lift the load 1 m — force is traded for distance, exactly as with a lever.</p>\n"
    },
    {
      "heading": "Gears: Trading Speed for Torque",
      "html": "<p>Gears are toothed wheels that pass motion from one shaft to another. The gear ratio is the number of teeth on the driven gear ÷ the number on the driving gear. A 12-tooth driver turning a 36-tooth gear gives a ratio of 36 ÷ 12 = 3:1.</p>\n<p>The output speed falls by the ratio and the torque rises by it. If the driver turns at 600 rpm, the driven gear turns at 600 ÷ 3 = 200 rpm, and its torque is about three times the input torque. That is how a car’s low gear gives pulling power and its high gear gives speed.</p>\n<p><strong>Efficiency: Why Nothing Is Free</strong></p>\n<p>No real machine is 100% efficient: friction turns some input work into heat. Efficiency = useful work out ÷ work in × 100%. A pulley system that needs 120 J of input to lift a load by 100 J is 100 ÷ 120 × 100% = 83% efficient.</p>\n<p>Engineers fight friction with lubrication, good bearings, and clean parts, but they never beat it completely. When you size a motor for a machine, you must allow for the losses — the motor must supply the useful work plus the wasted work.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Six simple machines: lever, wheel and axle, pulley, inclined plane, wedge, screw.</li><li>Mechanical advantage = output force ÷ input force.</li><li>Lever MA = effort arm ÷ load arm; pulley MA = number of supporting ropes.</li><li>Gear ratio = driven teeth ÷ driver teeth; output speed falls, torque rises.</li><li>Efficiency = useful work out ÷ work in × 100%.</li></ul></p>\n<p><strong>Common mistake:</strong> Thinking a machine creates force or energy. It trades force for distance — the work stays the same (minus friction).</p>\n<p><strong>Common mistake:</strong> Counting the wrong ropes in a pulley system. Only the ropes that support the moving load count.</p>\n<p><strong>Ready check:</strong> If you can work out a lever’s effort, a pulley’s effort, and a gear’s output speed, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Simple machine",
      "def": "One of the six basic devices that change a force: lever, wheel and axle, pulley, inclined plane, wedge, screw."
    },
    {
      "term": "Mechanical advantage (MA)",
      "def": "Output force divided by input force; how much a machine multiplies your effort."
    },
    {
      "term": "Lever",
      "def": "A bar that turns on a fulcrum to multiply force or change its direction."
    },
    {
      "term": "Fulcrum",
      "def": "The pivot point a lever turns on."
    },
    {
      "term": "Effort",
      "def": "The input force you apply to a machine."
    },
    {
      "term": "Load",
      "def": "The output force or weight a machine moves."
    },
    {
      "term": "Pulley",
      "def": "A wheel with a rope over it, used to lift loads or change a force’s direction."
    },
    {
      "term": "Gear ratio",
      "def": "Driven gear teeth ÷ driver gear teeth; it says how speed and torque change."
    },
    {
      "term": "Wheel and axle",
      "def": "A large wheel fixed to a smaller axle; turning the wheel multiplies force at the axle."
    },
    {
      "term": "Inclined plane",
      "def": "A slope that lets a load be raised with less force over a longer distance."
    },
    {
      "term": "Wedge",
      "def": "Two inclined planes back to back, used to split or lift, such as an axe or a chisel."
    },
    {
      "term": "Screw",
      "def": "An inclined plane wrapped around a cylinder; turning it moves a load a small distance with a big force."
    },
    {
      "term": "Efficiency",
      "def": "Useful work out divided by work in, as a percentage; always less than 100%."
    },
    {
      "term": "Friction",
      "def": "The force that resists sliding; it wastes energy as heat in machines."
    }
  ],
  "video": {
    "title": "How Levers, Pulleys and Gears Work",
    "embedUrl": "https://www.youtube.com/embed/JnYVz1TSmBQ",
    "note": "A clear tour of levers, pulleys, and gears and how each one trades force for distance. Watch it, then work out the mechanical advantage of a lever in your own home — a door handle, a wheelbarrow, or a bottle opener.",
    "more": [
      {
        "title": "Work, Energy, and Power - Basic Introduction",
        "url": "https://www.youtube.com/watch?v=tqZ6xwu2Ve8"
      },
      {
        "title": "Work and energy (part 2) | Work and energy | Physics | Khan Academy",
        "url": "https://www.youtube.com/watch?v=3mier94pbnU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Simple machine” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Simple machine — One of the six basic devices that change a force: lever, wheel and axle, pulley, inclined plane, wedge, screw. It matters because it connects directly to this module’s first goal: Name the six simple machines. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Mechanical advantage (MA)” and “Lever”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Mechanical advantage (MA) — Output force divided by input force; how much a machine multiplies your effort. Lever — A bar that turns on a fulcrum to multiply force or change its direction. They differ in what they describe: the first is about mechanical advantage (ma), the second about lever. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Name the six simple machines.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the six simple machines. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Fulcrum — The pivot point a lever turns on. Effort — The input force you apply to a machine. Load — The output force or weight a machine moves. Pulley — A wheel with a rope over it, used to lift loads or change a force’s direction. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A lever has an effort arm of 1.2 m and a load arm of 0.3 m. What is its mechanical advantage, and what effort is needed to lift an 800 N load? (Ignore friction.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MA = 1.2 ÷ 0.3 = 4. Step 2: Effort = 800 ÷ 4 = 200 N. Step 3: Check by moments: 200 × 1.2 = 240 N·m, and 800 × 0.3 = 240 N·m. They balance, so the answer is correct.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A gear with 12 teeth drives a gear with 36 teeth. The driver turns at 600 rpm. What is the gear ratio, the output speed, and what happens to the torque?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 36 ÷ 12 = 3:1. Step 2: Output speed = 600 ÷ 3 = 200 rpm. Step 3: Torque rises by about three times (minus friction losses). The gear trades speed for torque.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Simple machine” mean?",
      "choices": [
        "One of the six basic devices that change a force: lever, wheel and axle, pulley, inclined plane, wedge, screw.",
        "A bar that turns on a fulcrum to multiply force or change its direction.",
        "The pivot point a lever turns on.",
        "The input force you apply to a machine."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Simple machine means: One of the six basic devices that change a force: lever, wheel and axle, pulley, inclined plane, wedge, screw.. (b) is the definition of Lever, not of Simple machine. (c) is the definition of Fulcrum, not of Simple machine. (d) is the definition of Effort, not of Simple machine."
    },
    {
      "q": "What does the term “Lever” mean?",
      "choices": [
        "The input force you apply to a machine.",
        "A bar that turns on a fulcrum to multiply force or change its direction.",
        "The output force or weight a machine moves.",
        "A wheel with a rope over it, used to lift loads or change a force’s direction."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lever means: A bar that turns on a fulcrum to multiply force or change its direction.. (a) is the definition of Effort, not of Lever. (c) is the definition of Load, not of Lever. (d) is the definition of Pulley, not of Lever."
    },
    {
      "q": "What does the term “Effort” mean?",
      "choices": [
        "A wheel with a rope over it, used to lift loads or change a force’s direction.",
        "Driven gear teeth ÷ driver gear teeth; it says how speed and torque change.",
        "The input force you apply to a machine.",
        "A large wheel fixed to a smaller axle; turning the wheel multiplies force at the axle."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Effort means: The input force you apply to a machine.. (a) is the definition of Pulley, not of Effort. (b) is the definition of Gear ratio, not of Effort. (d) is the definition of Wheel and axle, not of Effort."
    },
    {
      "q": "What does the term “Pulley” mean?",
      "choices": [
        "A large wheel fixed to a smaller axle; turning the wheel multiplies force at the axle.",
        "A slope that lets a load be raised with less force over a longer distance.",
        "Two inclined planes back to back, used to split or lift, such as an axe or a chisel.",
        "A wheel with a rope over it, used to lift loads or change a force’s direction."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Pulley means: A wheel with a rope over it, used to lift loads or change a force’s direction.. (a) is the definition of Wheel and axle, not of Pulley. (b) is the definition of Inclined plane, not of Pulley. (c) is the definition of Wedge, not of Pulley."
    },
    {
      "q": "A lever has an effort arm of 1.2 m and a load arm of 0.3 m. What is its mechanical advantage?",
      "choices": [
        "0.25",
        "1.5",
        "4",
        "12"
      ],
      "answer": 2,
      "explanation": "Correct: (c). MA = 1.2 ÷ 0.3 = 4. (a) divides the wrong way. (b) is 1.2 + 0.3. (d) is 1.2 ÷ 0.1."
    },
    {
      "q": "A pulley system has 4 ropes supporting a 400 N load. What is the ideal effort needed?",
      "choices": [
        "400 N",
        "200 N",
        "100 N",
        "1,600 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 400 ÷ 4 = 100 N. (a) is the load itself. (b) assumes 2 ropes. (d) multiplies instead of dividing."
    },
    {
      "q": "A 12-tooth gear drives a 36-tooth gear at 600 rpm. What is the output speed?",
      "choices": [
        "200 rpm",
        "600 rpm",
        "1,800 rpm",
        "72 rpm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ratio is 3:1, so 600 ÷ 3 = 200 rpm. (b) is the input speed. (c) multiplies by 3. (d) is 600 ÷ 8.33."
    },
    {
      "q": "A machine takes in 120 J and gives out 100 J of useful work. What is its efficiency?",
      "choices": [
        "20%",
        "83%",
        "100%",
        "120%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 ÷ 120 × 100% = 83%. (a) is the wasted share. (c) would need no losses. (d) is impossible — more out than in."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Simple Machines: Levers, Pulleys, and Gears: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the six simple machines.</p>\n<p><strong>Key terms:</strong> Simple machine · Mechanical advantage (MA) · Lever · Fulcrum · Effort · Load · Pulley · Gear ratio.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the six simple machines.</li>\n<li>Work out mechanical advantage: output force ÷ input force.</li>\n<li>Work out the effort needed with a lever or a pulley.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
