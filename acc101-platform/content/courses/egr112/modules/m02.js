// egr112 - Module 2: Requirements, Specs & Concept Selection
module.exports = {
  "number": 2,
  "slug": "requirements-specs-concept-selection",
  "title": "Requirements, Specs & Concept Selection",
  "estTime": "3–4 hours",
  "objectives": [
    "Tell the difference between a requirement and a specification.",
    "Write a clear, testable requirement.",
    "Generate concepts with structured methods.",
    "Use a Pugh matrix to compare concepts.",
    "Explain the difference between must-have and nice-to-have requirements."
  ],
  "sections": [
    {
      "heading": "Requirements and Specifications",
      "html": "<p>A requirement is a statement of what the design must do: “The device must lift 50 kg.” A specification is the detailed, measurable version of a requirement: “The device must lift 50 kg from floor level to 1.5 m in under 10 seconds, using a 24 V supply, with a factor of safety of 2.” Requirements say what; specifications say how much, how fast, and under what conditions — and every specification must be testable, so you can prove the design meets it.</p>\n<p>Requirements come in two kinds. Functional requirements say what the design does: lift, cut, move, measure. Non-functional requirements say how well it does it: how fast, how quietly, how reliably, how cheaply, how safely. Both kinds matter, and both must be written down before design starts — a requirement discovered late is expensive to add, because the design is already built around the old ones.</p>\n"
    },
    {
      "heading": "Writing Good Requirements",
      "html": "<p>A good requirement is clear, testable, and free of solutions. “The device must be easy to use” is a bad requirement — it cannot be tested. “A new operator must be able to complete the task after 10 minutes of training” is a good requirement — it can be tested. Use numbers wherever possible, and state the condition: “must lift 50 kg” is weaker than “must lift 50 kg, 60 times an hour, for 8 hours, at temperatures from 0 °C to 40 °C.”</p>\n<p>Requirements also need priorities. Must-have requirements are the ones the design cannot ship without — the load, the safety, the legal standards. Nice-to-have requirements are the ones that would be good but are not essential — a nicer finish, a faster cycle, a lower weight. When time or budget runs short, the nice-to-haves are cut first, and the must-haves are protected. Write the priority next to every requirement, or the team will argue about it later.</p>\n"
    },
    {
      "heading": "Generating Concepts",
      "html": "<p>With requirements written, the team generates concepts — different ways of meeting them. Structured methods beat random brainstorming: break the problem into functions (lift, hold, release) and generate ideas for each function separately, then combine them; look at how other industries solve similar problems (a car seatbelt mechanism for a locking problem, a syringe for a dosing problem); and use TRIZ-style thinking — what would the ideal solution do, with no constraints at all?</p>\n<p>Sketch every concept, even the silly ones. A sketch makes an idea concrete enough to judge, and a silly idea often contains one good feature that a sensible idea lacks. The goal is a set of distinct concepts — not ten versions of the same idea, but genuinely different approaches, so the selection step has something real to choose between.</p>\n"
    },
    {
      "heading": "The Pugh Matrix: Choosing Fairly",
      "html": "<p>The Pugh matrix (also called a decision matrix) compares concepts fairly against the requirements. List the criteria down the side — cost, strength, safety, ease of manufacture, weight — and the concepts across the top, with one concept as the datum (the baseline to compare against). Score each concept against the datum for each criterion: +1 if it is better, 0 if it is the same, −1 if it is worse. Add the scores, and the highest total wins — but the numbers are not the decision, they are the start of a discussion.</p>\n<p>The real value of a Pugh matrix is that it forces the team to be explicit: which criteria matter, and why does one concept score better than another? It also shows which concept is strong where it matters and weak where it does not, and it often suggests a hybrid — taking the best features of two concepts into a new, better one. Never let the matrix decide alone: if the winner feels wrong, the criteria or the scores are wrong, and the team should argue about them, not obey the arithmetic.</p>\n"
    },
    {
      "heading": "From Selection to Specification and Common Mistakes",
      "html": "<p>Once a concept is chosen, the requirements become a full specification: every dimension, material, load, and tolerance that the design must meet, written so that anyone can test the finished product against it. The specification is the contract between the designer and the maker — and, later, between the maker and the customer. A vague specification is a dispute waiting to happen.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A requirement says what; a specification says how much, how fast, and under what conditions — and must be testable.</li><li>Write requirements with numbers and conditions, and mark must-haves versus nice-to-haves.</li><li>Generate genuinely different concepts, not ten versions of one idea.</li><li>A Pugh matrix compares concepts against criteria with +1, 0, and −1 scores — the discussion matters more than the total.</li><li>The specification is the contract the finished product is tested against.</li></ul></p>\n<p><strong>Common mistake:</strong> Writing untestable requirements such as “easy to use” or “good quality”. If you cannot test it, you cannot prove the design meets it.</p>\n<p><strong>Common mistake:</strong> Letting the Pugh matrix decide without discussion. If the winner feels wrong, the criteria or the scores are wrong — argue about them.</p>\n<p><strong>Ready check:</strong> If you can write a testable requirement, explain a Pugh matrix, and say why must-haves are protected, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Requirement",
      "def": "A statement of what a design must do, such as “must lift 50 kg”."
    },
    {
      "term": "Specification",
      "def": "The detailed, measurable version of a requirement, with numbers and conditions, that the finished product is tested against."
    },
    {
      "term": "Functional requirement",
      "def": "A requirement about what the design does: lift, cut, move, measure."
    },
    {
      "term": "Non-functional requirement",
      "def": "A requirement about how well the design does it: how fast, how quietly, how reliably, how cheaply."
    },
    {
      "term": "Must-have",
      "def": "A requirement the design cannot ship without, such as load capacity or safety."
    },
    {
      "term": "Nice-to-have",
      "def": "A requirement that would be good but is not essential, cut first when time or budget runs short."
    },
    {
      "term": "Concept",
      "def": "One possible way of meeting the requirements — a distinct design approach, sketched before selection."
    },
    {
      "term": "Pugh matrix",
      "def": "A decision matrix that compares concepts against criteria with +1, 0, and −1 scores relative to a baseline concept."
    },
    {
      "term": "Datum",
      "def": "The baseline concept in a Pugh matrix that all other concepts are compared against."
    },
    {
      "term": "Criteria",
      "def": "The standards used to judge concepts, such as cost, strength, safety, and ease of manufacture."
    },
    {
      "term": "Hybrid concept",
      "def": "A new concept formed by combining the best features of two or more concepts from a Pugh matrix."
    },
    {
      "term": "Testable",
      "def": "Able to be checked by measurement: a good requirement or specification can be proven true or false."
    }
  ],
  "video": {
    "title": "Pugh matrix: how to select the best solution with your team",
    "embedUrl": "https://www.youtube.com/embed/HWUyPMVau4Y",
    "note": "A Pugh matrix worked through with a real example: criteria, datum, scoring, and the discussion that follows. Try scoring the concepts yourself before the video reveals the totals.",
    "more": [
      {
        "title": "The Engineering Design Process - 6 Steps, Iteration and Learning from Failure",
        "url": "https://www.youtube.com/watch?v=j_29FuLJ5_c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Rewrite this bad requirement as a good, testable one: “The device must be easy to use.”</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A good requirement is testable, so it needs a number and a condition. Step 2: For example: “A new operator must be able to complete the loading task without help after 10 minutes of training.” Step 3: That can be tested by timing a new operator. A good answer gives a numbered, testable version.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A lifting device has these requirements: lift 50 kg (must-have), cost under $500 (must-have), weigh under 20 kg (nice-to-have), and look attractive (nice-to-have). The budget is cut. Which requirements are protected, and which are cut first? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The must-haves are protected: lifting 50 kg and costing under $500. Step 2: The nice-to-haves are cut first: weight under 20 kg and an attractive finish. Step 3: Cutting a must-have would mean the device does not do its job or cannot be sold, while cutting a nice-to-have only makes it heavier or plainer. A good answer names the protected and the cut requirements.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Three concepts for a bottle opener are scored in a Pugh matrix against a datum. The criteria are cost, ease of use, and durability. Concept A scores +1, 0, +1. Concept B scores 0, +1, −1. Concept C scores −1, +1, +1. Work out the totals and say which concept wins — and what the team should do next.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Concept A totals +2, Concept B totals 0, Concept C totals +1. Step 2: Concept A wins on the numbers. Step 3: The team should discuss the result — is cost really as important as durability, and could a hybrid of A and C be better than either alone? A good answer gives the totals and the discussion step.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A team generates ten concepts for a door latch, but all ten are variations of a spring-loaded bolt. What is wrong, and how should they generate better concepts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The concepts are not genuinely different — they are ten versions of one idea, so the selection step has nothing real to choose between. Step 2: The team should break the problem into functions (hold, release, lock) and generate ideas for each separately, then combine them. Step 3: They should also look at other industries and at nature for different mechanisms. A good answer names the lack of variety and a structured method.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write a specification for a small stool, starting from the requirement “must support a person”. Include at least three measurable specifications.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A good specification adds numbers and conditions: “Must support a 120 kg person sitting and standing, 10,000 times, without permanent deformation.” Step 2: “Must be stable on a flat floor with a 120 kg load shifted 100 mm to one side.” Step 3: “Must weigh under 5 kg and cost under $40 to make.” A good answer gives three testable specifications with numbers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A Pugh matrix says Concept B wins, but the whole team feels Concept A is better. What should the team do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not obey the arithmetic — the matrix is a tool for discussion, not a decision machine. Step 2: Argue about the criteria and the scores: is a criterion missing, is a weight wrong, or is a score wrong? Step 3: Fix the matrix and re-score, or look for a hybrid that takes the best of both. A good answer explains that a wrong-feeling result means wrong inputs.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the difference between a requirement and a specification?",
      "choices": [
        "There is no difference",
        "A requirement says what the design must do; a specification is the detailed, measurable, testable version with numbers and conditions",
        "A requirement is for the customer and a specification is secret",
        "A specification is shorter than a requirement"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A requirement says what; a specification adds how much, how fast, and under what conditions, and must be testable. (a) is wrong: they are different levels of detail. (c) is wrong: both are shared documents. (d) is wrong: specifications are longer and more detailed."
    },
    {
      "q": "Which of these is a good, testable requirement?",
      "choices": [
        "The device must be easy to use",
        "A new operator must complete the task without help after 10 minutes of training",
        "The device must be good quality",
        "The device must look nice"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It has a number and a condition, so it can be tested. (a), (c), and (d) are vague and cannot be tested — “easy”, “good”, and “nice” mean different things to different people."
    },
    {
      "q": "When the budget is cut, which requirements are cut first?",
      "choices": [
        "The must-haves",
        "The nice-to-haves",
        "The safety requirements",
        "The legal requirements"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Nice-to-haves are cut first; must-haves are protected. (a) is backwards: cutting a must-have means the design does not do its job. (c) and (d) are must-haves and are never cut."
    },
    {
      "q": "In a Pugh matrix, what does a score of +1 mean?",
      "choices": [
        "The concept is the datum",
        "The concept is better than the datum for that criterion",
        "The concept is worse than the datum",
        "The concept costs $1 more"
      ],
      "answer": 1,
      "explanation": "Correct: (b). +1 means better than the baseline datum, 0 means the same, −1 means worse. (a) is wrong: the datum is the baseline, not a score. (c) is −1. (d) is wrong: scores are not money."
    },
    {
      "q": "Three concepts score +2, 0, and +1 in a Pugh matrix. Which wins on the numbers?",
      "choices": [
        "The one scoring 0",
        "The one scoring +2",
        "The one scoring +1",
        "They tie"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The highest total wins on the numbers. (a) is the lowest. (c) is second. (d) is wrong: the totals are different."
    },
    {
      "q": "What is the datum in a Pugh matrix?",
      "choices": [
        "The winning concept",
        "The baseline concept that all others are compared against",
        "The most expensive concept",
        "The criterion list"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The datum is the baseline for comparison, usually an existing product or the simplest concept. (a) is wrong: the winner is found by scoring, not chosen as datum. (c) is wrong: cost is a criterion, not the datum. (d) is wrong: criteria are the rows, not the datum."
    },
    {
      "q": "A team generates ten concepts that are all variations of one idea. What is the problem?",
      "choices": [
        "Ten is too many",
        "The concepts are not genuinely different, so selection has nothing real to choose between",
        "Variations are not allowed",
        "The team should have generated eleven"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Selection needs genuinely different approaches, not ten versions of the same idea. (a) is wrong: ten concepts is fine if they are different. (c) is wrong: variations are allowed, they are just not enough alone. (d) is wrong: the number is not the issue."
    },
    {
      "q": "A Pugh matrix says Concept B wins, but the team feels Concept A is better. What should they do?",
      "choices": [
        "Obey the matrix — the numbers are always right",
        "Argue about the criteria and scores, fix the matrix, and look for a hybrid",
        "Throw the matrix away and pick Concept A",
        "Add more criteria until Concept A wins"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A wrong-feeling result means wrong criteria or scores — discuss and fix them. (a) is wrong: the matrix is a discussion tool, not a decision machine. (c) is wrong: discarding the analysis loses its value. (d) is wrong: rigging the criteria is dishonest."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Requirements, Specs & Concept Selection: Quick Reference</h3>\n<p><strong>Core idea:</strong> Tell the difference between a requirement and a specification.</p>\n<p><strong>Key terms:</strong> Requirement · Specification · Functional requirement · Non-functional requirement · Must-have · Nice-to-have · Concept · Pugh matrix.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Tell the difference between a requirement and a specification.</li>\n<li>Write a clear, testable requirement.</li>\n<li>Generate concepts with structured methods.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
