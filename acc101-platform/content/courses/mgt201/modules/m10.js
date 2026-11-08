// mgt201 - Module 10: Scheduling & the Critical Path
module.exports = {
  "number": 10,
  "slug": "scheduling-and-the-critical-path",
  "title": "Scheduling & the Critical Path",
  "estTime": "3–4 hours",
  "objectives": [
    "Build a project network from activities and their dependencies.",
    "Run a forward pass to find early start and early finish times.",
    "Run a backward pass to find late start and late finish times and float.",
    "Find the critical path and the project duration.",
    "Explain what crashing is and when it is worth doing."
  ],
  "sections": [
    {
      "heading": "From a List to a Network",
      "html": "\n<p>A schedule is not a list of dates — it is a network of activities and their dependencies. An activity cannot start until its predecessors are finished: you cannot paint a wall until it is built, and you cannot test a system until it is installed. The <strong>critical path method (CPM)</strong> turns that network into a schedule by working out, for every activity, the earliest and latest it can happen.</p>\n<p>Each activity has a duration and a set of predecessors. The network is drawn with arrows showing which activity must finish before another can start. Activities that can run at the same time are drawn in parallel; activities that must wait are drawn in sequence. The longest chain through the network — the chain with no slack — is the critical path, and its length is the shortest time the project can possibly take.</p>\n<p><strong>The example used through this module.</strong> A small shop refit has five activities: A — Design (4 days), B — Order equipment (6 days, after A), C — Prepare site (3 days, after A), D — Install equipment (5 days, after B and C), E — Inspect and open (2 days, after D). Two chains run from A to E: A → B → D → E and A → C → D → E. Work out which is longer — that is the critical path.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A schedule is a network of dependencies, not a list of dates. The critical path is the longest chain through the network, and its length is the shortest time the project can take.</div>"
    },
    {
      "heading": "The Forward Pass: Earliest Times",
      "html": "\n<p>The <strong>forward pass</strong> works from the start to the end, finding each activity's <strong>early start (ES)</strong> and <strong>early finish (EF)</strong>. The rule is simple: an activity's early start is the latest early finish of its predecessors, and its early finish is its early start plus its duration. Where two predecessors feed one activity, the later one governs — the activity cannot start until both are done.</p>\n<p><strong>Worked forward pass for the refit.</strong> Step 1: A starts at day 0, finishes at 0 + 4 = <strong>day 4</strong>. Step 2: B starts at day 4 (after A) and finishes at 4 + 6 = <strong>day 10</strong>; C starts at day 4 and finishes at 4 + 3 = <strong>day 7</strong>. Step 3: D needs both B and C, so it starts at the later finish — day 10 — and finishes at 10 + 5 = <strong>day 15</strong>. Step 4: E starts at day 15 and finishes at 15 + 2 = <strong>day 17</strong>. The project takes 17 days.</p>\n<p>The forward pass also reveals the two chains. A → B → D → E = 4 + 6 + 5 + 2 = <strong>17 days</strong>. A → C → D → E = 4 + 3 + 5 + 2 = <strong>14 days</strong>. The longer chain is the critical path, and its length — 17 days — is the project duration.</p>\n<div class=\"formula\">Early finish = Early start + Duration &nbsp;|&nbsp; Early start = Latest early finish of the predecessors</div>"
    },
    {
      "heading": "The Backward Pass and Float",
      "html": "\n<p>The <strong>backward pass</strong> works from the end to the start, finding each activity's <strong>late finish (LF)</strong> and <strong>late start (LS)</strong>. The rule is the mirror of the forward pass: an activity's late finish is the earliest late start of its successors, and its late start is its late finish minus its duration. The project's late finish is its early finish — the project must finish when the forward pass says it can.</p>\n<p><strong>Worked backward pass for the refit.</strong> Step 1: E must finish by day 17, so its late start is 17 − 2 = <strong>day 15</strong>. Step 2: D must finish by day 15, so its late start is 15 − 5 = <strong>day 10</strong>. Step 3: B must finish by day 10, so its late start is 10 − 6 = <strong>day 4</strong>; C must finish by day 10, so its late start is 10 − 3 = <strong>day 7</strong>. Step 4: A must finish by the earliest late start of its successors — day 4 — so its late start is 4 − 4 = <strong>day 0</strong>.</p>\n<p><strong>Float (slack)</strong> is the difference between late start and early start (or late finish and early finish). For A, B, D, and E, float is 0 — any delay delays the project. For C, late start 7 minus early start 4 = <strong>3 days of float</strong>. C can slip by up to three days without affecting the project, which is why C is not on the critical path and the other four activities are.</p>\n<div class=\"formula\">Float = Late start − Early start = Late finish − Early finish &nbsp;|&nbsp; Critical path: float = 0</div>"
    },
    {
      "heading": "Gantt Charts and Crashing",
      "html": "\n<p>The <strong>Gantt chart</strong> is the schedule drawn as bars on a timeline: each activity is a bar from its start to its finish, with the critical path usually highlighted. It is the picture the team actually works from — who does what, when, and what is late. The network shows the logic; the Gantt shows the calendar. A good schedule keeps both: the network to understand the dependencies, the Gantt to run the week.</p>\n<p>When a project must finish sooner, the only way is to shorten the critical path — shortening a non-critical activity changes nothing, because it has float. <strong>Crashing</strong> shortens a critical activity by spending more: overtime, extra staff, a faster supplier. The rule is to crash the cheapest critical activity first, and to stop when the cost of crashing exceeds the value of the time saved, or when a new path becomes critical.</p>\n<p>Two warnings close the module. First, the critical path can change: crash B and C may become critical, so the schedule must be recalculated after every change. Second, estimates are uncertain — the durations in a network are estimates, and a critical path built on optimistic estimates is a promise the project cannot keep. That is why the schedule is reviewed as the work progresses, not filed away on day one.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Shortening a non-critical activity changes nothing — only the critical path sets the duration. Crash the cheapest critical activity first, and recalculate, because the critical path can change.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A schedule is a network of activities and dependencies; the critical path is the longest chain, and its length is the project duration.</li>\n<li>Forward pass: early start is the latest early finish of the predecessors; early finish is early start plus duration.</li>\n<li>Backward pass: late finish is the earliest late start of the successors; late start is late finish minus duration.</li>\n<li>Float = late start − early start. Activities with zero float are on the critical path.</li>\n<li>A Gantt chart shows the schedule as bars on a timeline; the network shows the logic behind it.</li>\n<li>Crashing shortens a critical activity by spending more — crash the cheapest critical activity first, then recalculate.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Shortening a non-critical activity to save time. It has float — the project finishes when the critical path finishes, so the saving is imaginary. Only the critical path matters.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that an activity with two predecessors cannot start until the later one finishes. The early start is the latest early finish of the predecessors, not the earliest — and getting that wrong makes the whole schedule too optimistic.</div>\n<p><strong>Next step:</strong> Module 11 brings the improvement methods together — Lean operations and continuous improvement on the shop floor.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Critical path method (CPM)",
      "def": "A scheduling method that finds the longest chain of dependent activities, which sets the project duration."
    },
    {
      "term": "Critical path",
      "def": "The longest chain of activities through a project network; any delay on it delays the project."
    },
    {
      "term": "Activity",
      "def": "A piece of work in a project, with a duration and predecessors."
    },
    {
      "term": "Predecessor",
      "def": "An activity that must finish before another activity can start."
    },
    {
      "term": "Early start (ES)",
      "def": "The earliest an activity can start, found by the forward pass."
    },
    {
      "term": "Early finish (EF)",
      "def": "The earliest an activity can finish: early start plus duration."
    },
    {
      "term": "Late finish (LF)",
      "def": "The latest an activity can finish without delaying the project, found by the backward pass."
    },
    {
      "term": "Late start (LS)",
      "def": "The latest an activity can start without delaying the project: late finish minus duration."
    },
    {
      "term": "Float (slack)",
      "def": "The time an activity can slip without delaying the project: late start minus early start."
    },
    {
      "term": "Forward pass",
      "def": "Working through the network from start to end to find early start and early finish times."
    },
    {
      "term": "Backward pass",
      "def": "Working through the network from end to start to find late start and late finish times."
    },
    {
      "term": "Gantt chart",
      "def": "A schedule drawn as bars on a timeline, one bar per activity."
    },
    {
      "term": "Crashing",
      "def": "Shortening a critical activity by spending more — overtime, extra staff, or a faster supplier."
    },
    {
      "term": "Milestone",
      "def": "A significant point in the schedule with no duration of its own, such as a phase completion."
    },
    {
      "term": "Network diagram",
      "def": "A drawing of project activities and their dependencies, showing the logic of the schedule."
    }
  ],
  "video": {
    "title": "Critical Path Method (CPM) Made Simple: A Complete Guide",
    "embedUrl": "https://www.youtube.com/embed/ijZ8AISuYZo",
    "note": "Walks through the critical path method with a worked example — forward pass, backward pass, float, and the critical path. Follow it with the module's refit example (A→B→D→E = 17 days, float of C = 3 days) and work the numbers yourself.",
    "more": [
      {
        "title": "How to Determine the Critical Path and Project Duration? Learn the Critical Path Method with Example",
        "url": "https://www.youtube.com/watch?v=aCoMEmJUSmU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A refit has five activities: A — Design (4 days), B — Order equipment (6 days, after A), C — Prepare site (3 days, after A), D — Install equipment (5 days, after B and C), E — Inspect and open (2 days, after D). (a) What is the project duration? (b) What is the critical path? (c) What is the float of C?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Forward pass — A finishes day 4; B finishes 4 + 6 = 10; C finishes 4 + 3 = 7; D starts at the later finish, day 10, and finishes 10 + 5 = 15; E finishes 15 + 2 = 17. (a) The project duration is <strong>17 days</strong>. Step 2: (b) Chains: A → B → D → E = 4 + 6 + 5 + 2 = 17; A → C → D → E = 4 + 3 + 5 + 2 = 14. The critical path is <strong>A → B → D → E</strong>. Step 3: (c) Backward pass — C must finish by day 10 (D's late start), so its late start is 10 − 3 = 7; its early start is 4. Float = 7 − 4 = <strong>3 days</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A project has activities A(3), B(4, after A), C(2, after A), D(7, after B and C), E(5, after D). (a) What is the project duration? (b) What is the critical path? (c) What is the float of C?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Forward pass — A finishes day 3; B finishes 3 + 4 = 7; C finishes 3 + 2 = 5; D starts at the later finish, day 7, and finishes 7 + 7 = 14; E finishes 14 + 5 = 19. (a) The project duration is <strong>19 days</strong>. Step 2: (b) Chains: A → B → D → E = 3 + 4 + 7 + 5 = 19; A → C → D → E = 3 + 2 + 7 + 5 = 17. The critical path is <strong>A → B → D → E</strong>. Step 3: (c) Backward pass — D's late start is 14 − 7 = 7, so C must finish by day 7; C's late start is 7 − 2 = 5; its early start is 3. Float = 5 − 3 = <strong>2 days</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In Problem 1, the owner wants the refit finished in 15 days instead of 17. Activity B can be crashed from 6 days to 4 days for $800, and activity D from 5 days to 4 days for $1,200. (a) Which should be crashed first? (b) What is the new duration after crashing it? (c) What does the second crash cost per day saved?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Crash the cheapest critical activity first — <strong>B</strong>, at $800. Step 2: (b) B becomes 4 days: A → B → D → E = 4 + 4 + 5 + 2 = 15 days, and A → C → D → E is still 14, so the new duration is <strong>15 days</strong>. Step 3: (c) D's crash saves 1 day for $1,200, so it costs <strong>$1,200 per day saved</strong> — and it is not needed, because B's crash already reaches 15 days. Step 4: Crash only what the target requires, cheapest first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A project has three activities in sequence: A(5), B(3), C(4). A second activity D(6) runs in parallel with B and C, starting after A. (a) What is the project duration? (b) What is the critical path? (c) What is the float of B?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Chains — A → B → C = 5 + 3 + 4 = 12 days; A → D = 5 + 6 = 11 days. (a) The project duration is <strong>12 days</strong>. Step 2: (b) The critical path is <strong>A → B → C</strong>. Step 3: (c) D must finish by day 12 (the project finish), so D's late start is 12 − 6 = 6; B's late start is 12 − 4 − 3 = 5, and its early start is 5, so B's float is <strong>0 days</strong> — it is on the critical path. D's float is 6 − 5 = 1 day.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An activity has early start day 6 and late start day 9. (a) What is its float? (b) If the activity is delayed by 2 days, does the project finish late? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Float = 9 − 6 = <strong>3 days</strong>. Step 2: (b) No — a 2-day delay uses 2 of the 3 days of float, leaving 1 day, so the project still finishes on time. Step 3: The delay only matters if it exceeds the float; that is what float is for.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A manager shortens a non-critical activity by 4 days and reports that the project will finish 4 days early. Explain the mistake, and say what the manager should have done instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The mistake is that a non-critical activity has float — shortening it does not change the project duration, because the project finishes when the critical path finishes. Step 2: The 4 days saved are imaginary; the project still takes the same time. Step 3: The manager should have found the critical path, shortened a critical activity (crashing), and recalculated — because the critical path can change after a change.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A refit has A(4), B(6 after A), C(3 after A), D(5 after B and C), E(2 after D). The project duration is:",
      "choices": [
        "14 days",
        "15 days",
        "17 days",
        "20 days"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A → B → D → E = 4 + 6 + 5 + 2 = 17 days; A → C → D → E = 14. The longer chain sets the duration. (a) is the shorter chain. (b) and (d) come from no correct chain."
    },
    {
      "q": "In the same refit, the critical path is:",
      "choices": [
        "A → C → D → E",
        "A → B → D → E",
        "A → B → C → E",
        "A → C → B → D → E"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A → B → D → E is 17 days, the longest chain. (a) is 14 days. (c) and (d) are not valid chains — C does not lead to E, and B does not lead to C."
    },
    {
      "q": "In the same refit, the float of C is:",
      "choices": [
        "0 days",
        "2 days",
        "3 days",
        "5 days"
      ],
      "answer": 2,
      "explanation": "Correct: (c). C's late start is 7 (D must start by day 10, so C must finish by 10, so it starts by 7); its early start is 4; float = 7 − 4 = 3. (a) is the float of the critical activities. (b) is the float in the exam network. (d) is D's duration."
    },
    {
      "q": "Activities A(3), B(4 after A), C(2 after A), D(7 after B and C), E(5 after D). The project duration is:",
      "choices": [
        "17 days",
        "19 days",
        "21 days",
        "14 days"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A → B → D → E = 3 + 4 + 7 + 5 = 19; A → C → D → E = 17. (a) is the shorter chain. (c) adds both B and C. (d) is D's finish without E."
    },
    {
      "q": "Float is calculated as:",
      "choices": [
        "Early start minus late start",
        "Late start minus early start",
        "Duration minus float",
        "Early finish plus late finish"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Float = late start − early start (or late finish − early finish). (a) reverses it and gives a negative number. (c) and (d) are not formulas."
    },
    {
      "q": "An activity with early start day 6 and late start day 9 has float of:",
      "choices": [
        "3 days",
        "6 days",
        "9 days",
        "15 days"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 9 − 6 = 3 days. (b) is the early start. (c) is the late start. (d) adds them."
    },
    {
      "q": "Crashing a project means:",
      "choices": [
        "Cancelling it",
        "Shortening a critical activity by spending more",
        "Shortening any activity for free",
        "Adding more activities"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Crashing spends more — overtime, extra staff — to shorten a critical activity. (a) is termination. (c) shortening is never free, and shortening a non-critical activity changes nothing. (d) adds work, not speed."
    },
    {
      "q": "A Gantt chart shows:",
      "choices": [
        "Only the critical path",
        "The schedule as bars on a timeline, one bar per activity",
        "The budget",
        "The risk register"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A Gantt chart draws each activity as a bar from start to finish on a timeline. (a) the network shows the logic, including the critical path; the Gantt shows the calendar. (c) and (d) are different documents."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Scheduling & the Critical Path: Quick Reference</h3>\n<p><strong>Core idea:</strong> A schedule is a network of dependencies. The critical path is the longest chain through it, and its length is the shortest time the project can take.</p>\n<div class=\"formula\">Early finish = Early start + Duration &nbsp;|&nbsp; Early start = Latest early finish of the predecessors</div>\n<div class=\"formula\">Late start = Late finish − Duration &nbsp;|&nbsp; Late finish = Earliest late start of the successors</div>\n<div class=\"formula\">Float = Late start − Early start &nbsp;|&nbsp; Critical path: float = 0</div>\n<p><strong>Refit example:</strong> A(4) → B(6) → D(5) → E(2) = 17 days (critical); A → C(3) → D → E = 14 days; float of C = 3 days.</p>\n<p><strong>Crashing:</strong> shorten a critical activity by spending more — cheapest critical activity first, then recalculate, because the critical path can change.</p>\n<p><strong>Watch out:</strong> An activity with two predecessors starts when the later one finishes — not the earlier one. And shortening a non-critical activity saves nothing.</p>\n<p><strong>Self-check:</strong> Build a five-activity network of your own, run the forward and backward passes, and name the critical path and the float of each activity.</p>\n"
};
