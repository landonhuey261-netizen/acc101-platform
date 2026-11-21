// egr112 - Module 1: The Engineering Design Process
module.exports = {
  "number": 1,
  "slug": "engineering-design-process",
  "title": "The Engineering Design Process",
  "estTime": "3–4 hours",
  "objectives": [
    "List the six steps of the engineering design process in order.",
    "Explain the difference between a problem and a solution.",
    "Explain why design is iterative, not a straight line.",
    "Describe what a prototype is for and what it is not for.",
    "Explain how failure and testing improve a design."
  ],
  "sections": [
    {
      "heading": "Design Is a Process, Not a Flash of Inspiration",
      "html": "<p>Engineering design is a structured way of solving problems: define the problem, research what exists, imagine many solutions, choose the best, build a prototype, test it, and improve it. The six steps are: 1) Define the problem — what must the design do, and for whom? 2) Research — what exists already, and what do the users actually need? 3) Imagine — generate many ideas, not one. 4) Plan and choose — pick the best idea against clear criteria. 5) Build a prototype — a rough version to test. 6) Test and improve — find what fails, fix it, and repeat.</p>\n<p>The steps are not a straight line. Testing almost always sends you back: a prototype fails, and you return to imagining or to redefining the problem, because the test showed you misunderstood it. That looping back is not a failure of the process — it is the process. A design that goes through three loops is almost always better than one that goes through one, because each loop replaces a guess with evidence.</p>\n"
    },
    {
      "heading": "Define the Problem Before Solving It",
      "html": "<p>Most bad designs start with a solution, not a problem. “We need a bigger motor” is a solution; “the conveyor stalls when the load is wet” is a problem. Defining the problem means describing what must be achieved, who it is for, and what the limits are — cost, size, weight, time — without naming the answer. A good problem statement is short, specific, and testable: “Lift 50 kg boxes from a conveyor to a shelf 1.5 m high, 60 times an hour, with one operator.”</p>\n<p>Research comes next: who has solved this before, what products exist, what do the users complain about, and what standards apply? Copying an existing solution is not cheating — it is good engineering, as long as you understand why it works and adapt it to your problem. The worst designs are the ones that ignore what already exists and repeat its mistakes.</p>\n"
    },
    {
      "heading": "Imagine Many, Choose One",
      "html": "<p>Good designers generate many ideas before choosing — ten or twenty, not two. Brainstorming, sketching, and looking at how nature solves similar problems all help. The point is to avoid locking onto the first idea, which is usually the most obvious and rarely the best. Sketching matters: a rough sketch in thirty seconds can show whether an idea is even possible, before any calculation is done.</p>\n<p>Choosing is done against criteria, not gut feeling: which idea meets the requirements, which is cheapest, which is safest, which is easiest to make? The next module covers formal selection methods. The key point here is that choosing is a separate step from imagining — mix them up, and the first idea always wins, because nobody gave the better ideas a chance.</p>\n"
    },
    {
      "heading": "Prototypes and Testing",
      "html": "<p>A prototype is a rough version built to answer a question, not a finished product. A cardboard model answers “does it fit?”; a 3D-printed part answers “does it move as intended?”; a working rig answers “does it survive the load?” Each prototype is cheaper than the real thing, and each one is built to fail in a useful way — to find the weak point before the real product is made.</p>\n<p>Testing means comparing the prototype against the requirements, not against your hopes. Measure the load it carries, the time it takes, the force it needs, and write the numbers down. When it fails — and it will — the failure is data: it tells you exactly what to fix. Engineers who hide failures learn nothing; engineers who study them get better designs.</p>\n"
    },
    {
      "heading": "Iteration, Failure, and Common Mistakes",
      "html": "<p>The design process is a loop, and the loop is the point. The first design is a guess; the second is informed by the first prototype's failure; the third is informed by the second's. Famous engineering failures — bridges, aircraft, spacecraft — almost always trace back to a step that was skipped: a problem poorly defined, a test never run, or a warning ignored. The process exists to catch those mistakes while they are still cheap.</p>\n<p><p><strong>Takeaways:</strong><ul><li>The six steps are define, research, imagine, plan and choose, prototype, test and improve.</li><li>Define the problem before choosing a solution.</li><li>Generate many ideas, then choose against clear criteria.</li><li>A prototype answers a question; testing turns failure into data.</li><li>Design is iterative — looping back is the process working, not failing.</li></ul></p>\n<p><strong>Common mistake:</strong> Starting with a solution instead of a problem. “We need a bigger motor” skips the real question: why does the conveyor stall?</p>\n<p><strong>Common mistake:</strong> Building one prototype and calling the design done. One test answers one question; a good design needs several rounds.</p>\n<p><strong>Ready check:</strong> If you can list the six steps, explain why design loops back, and say what a prototype is for, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Design process",
      "def": "The structured six-step method engineers use to solve problems: define, research, imagine, choose, prototype, test and improve."
    },
    {
      "term": "Problem statement",
      "def": "A short, specific, testable description of what a design must achieve, without naming the answer."
    },
    {
      "term": "Requirements",
      "def": "The things a design must do, and the limits it must respect, such as cost, size, and weight."
    },
    {
      "term": "Criteria",
      "def": "The standards used to judge and compare design ideas, such as cost, safety, and ease of manufacture."
    },
    {
      "term": "Prototype",
      "def": "A rough version of a design built to answer a specific question, not a finished product."
    },
    {
      "term": "Iteration",
      "def": "Repeating the design loop — going back to an earlier step with new evidence — to improve a design."
    },
    {
      "term": "Brainstorming",
      "def": "Generating many ideas quickly without judging them, to avoid locking onto the first idea."
    },
    {
      "term": "Sketching",
      "def": "Rough drawing used to explore and communicate an idea quickly, before detailed design."
    },
    {
      "term": "Testing",
      "def": "Comparing a prototype against the requirements by measurement, to find what works and what fails."
    },
    {
      "term": "Constraints",
      "def": "The limits a design must respect, such as budget, size, weight, time, and materials."
    },
    {
      "term": "User needs",
      "def": "What the people who will use the design actually need, found by research and observation."
    },
    {
      "term": "Trade-off",
      "def": "A compromise where improving one thing makes another worse, such as strength versus weight."
    }
  ],
  "video": {
    "title": "The Engineering Design Process - 6 Steps, Iteration and Learning from Failure",
    "embedUrl": "https://www.youtube.com/embed/j_29FuLJ5_c",
    "note": "The six steps of the design process with real examples, including why iteration and failure matter. Watch it, then write the six steps from memory in order.",
    "more": [
      {
        "title": "Engineering Design Process",
        "url": "https://www.youtube.com/watch?v=b0ISWaNoz-c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the six steps of the engineering design process in order, and in one sentence each say what happens at each step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Define the problem — describe what must be achieved and for whom. Step 2: Research — find what exists and what users need. Step 3: Imagine — generate many ideas. Step 4: Plan and choose — pick the best idea against criteria. Step 5: Build a prototype — a rough version to test. Step 6: Test and improve — measure, find failures, and loop back. A good answer lists all six in order.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A team says, “We need a bigger motor for the conveyor.” Rewrite this as a problem statement, and explain why the rewrite is better.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The problem statement is: “The conveyor stalls when the load is wet, and it must move 60 boxes an hour without stopping.” Step 2: The rewrite is better because it describes the problem, not the answer — a bigger motor is only one possible fix, and the real cause might be a worn belt, a jammed roller, or a wet load. Step 3: A problem statement keeps all the options open. A good answer gives a testable problem statement and explains the difference.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A prototype of a lifting device fails at half its intended load. The team wants to throw it away and start over. Explain why the failure is useful and what the team should do next.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The failure is data: it tells the team exactly where the weak point is — which part bent or broke, and at what load. Step 2: The team should examine the failed part, work out why it failed, and fix that point — a stronger section, a different material, or a changed shape. Step 3: Then test again. Starting over would throw away everything the failure taught them. A good answer explains the failure-as-data idea.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A designer has one idea for a bottle opener and starts building it immediately. What has gone wrong with the process, and what should happen instead?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The designer skipped imagining — they locked onto the first idea without generating alternatives. Step 2: They should generate many ideas (ten or twenty), sketch them, and then choose against criteria such as cost, ease of use, and ease of manufacture. Step 3: The first idea is usually the most obvious, not the best. A good answer names the skipped step and the fix.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A cardboard model, a 3D-printed part, and a working test rig are three prototypes for the same product. What question does each one answer?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cardboard model answers “does it fit, and does the shape make sense?” Step 2: The 3D-printed part answers “does it move as intended, and do the parts fit together?” Step 3: The working rig answers “does it survive the load and work under real conditions?” Step 4: Each prototype is built to answer one question, and each is cheaper than the real product. A good answer matches each prototype to its question.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A team tests a prototype, finds a problem, and goes back to redefine the problem. Is that a failure of the design process? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — that is the process working as intended. Step 2: Testing showed the team misunderstood the problem, so going back to redefine it is exactly what iteration means. Step 3: A design that loops back with new evidence is better than one that pushes on with a wrong problem definition. A good answer explains iteration as the process, not a failure.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What are the six steps of the engineering design process, in order?",
      "choices": [
        "Imagine, build, test, sell, research, define",
        "Define, research, imagine, plan and choose, prototype, test and improve",
        "Research, define, build, sell, test, imagine",
        "Define, build, test, research, imagine, sell"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The order is define, research, imagine, plan and choose, prototype, test and improve. (a) starts with imagining and includes selling, which is not a design step. (c) and (d) scramble the order and add selling."
    },
    {
      "q": "Why should you define the problem before choosing a solution?",
      "choices": [
        "Because it saves time",
        "Because naming a solution too early closes off better options and may solve the wrong problem",
        "Because the problem statement is the deliverable",
        "Because research is not needed otherwise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A solution named too early locks the team into one answer, which may not fix the real problem. (a) is a side benefit, not the main reason. (c) is wrong: the problem statement is a tool, not the deliverable. (d) is wrong: research is needed regardless."
    },
    {
      "q": "What is a prototype for?",
      "choices": [
        "To sell to the first customer",
        "To answer a specific question about the design, cheaply, before the real product is made",
        "To prove the design is finished",
        "To replace testing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A prototype is built to answer a question — does it fit, does it move, does it survive the load? (a) is wrong: a prototype is not a product. (c) is wrong: a prototype is a step toward a finished design. (d) is wrong: a prototype is part of testing, not a replacement for it."
    },
    {
      "q": "A prototype fails at half its intended load. What should the team do?",
      "choices": [
        "Throw it away and start over",
        "Study the failure to find the weak point, fix that point, and test again",
        "Hide the failure and build the real product anyway",
        "Reduce the intended load and call it done"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Failure is data: it shows exactly where the design is weak. (a) wastes everything the failure taught. (c) is dangerous: it hides a known weakness. (d) changes the requirement instead of fixing the design."
    },
    {
      "q": "Why is design described as iterative?",
      "choices": [
        "Because designers repeat the same design many times",
        "Because testing sends you back to earlier steps with new evidence, improving the design each time",
        "Because it takes a long time",
        "Because prototypes are built in a loop shape"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Iteration is looping back with evidence — a failed test sends you back to imagining or redefining. (a) is wrong: iteration improves the design, it does not repeat it unchanged. (c) is wrong: time is not the point. (d) is a joke, not a definition."
    },
    {
      "q": "A designer generates twenty ideas before choosing one. Why is that better than choosing the first idea?",
      "choices": [
        "Because twenty is the required number",
        "Because the first idea is usually the most obvious, not the best, and comparing many ideas finds a better one",
        "Because it takes longer",
        "Because clients like long lists"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Generating many ideas avoids locking onto the obvious first answer. (a) is wrong: there is no required number. (c) is wrong: time spent is not the benefit. (d) is wrong: clients care about the result, not the list."
    },
    {
      "q": "Which of these is a good problem statement?",
      "choices": [
        "We need a bigger motor",
        "The conveyor stalls when the load is wet, and it must move 60 boxes an hour without stopping",
        "Make the conveyor better",
        "Buy a new conveyor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is specific, testable, and describes the problem without naming the answer. (a) is a solution, not a problem. (c) is vague. (d) is a purchase decision, not a problem."
    },
    {
      "q": "What is a trade-off in design?",
      "choices": [
        "A deal between two companies",
        "A compromise where improving one thing makes another worse, such as strength versus weight",
        "A type of prototype",
        "A design that is traded for another"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A trade-off is a compromise: more strength usually means more weight. (a) is a business deal. (c) is wrong: a trade-off is a decision, not a prototype. (d) is wrong: designs are not traded."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — The Engineering Design Process: Quick Reference</h3>\n<p><strong>Core idea:</strong> List the six steps of the engineering design process in order.</p>\n<p><strong>Key terms:</strong> Design process · Problem statement · Requirements · Criteria · Prototype · Iteration · Brainstorming · Sketching.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>List the six steps of the engineering design process in order.</li>\n<li>Explain the difference between a problem and a solution.</li>\n<li>Explain why design is iterative, not a straight line.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
