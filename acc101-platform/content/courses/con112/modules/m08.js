// con112 - Module 8: Scheduling and the Critical Path
module.exports = {
  "number": 8,
  "slug": "scheduling-and-the-critical-path",
  "title": "Scheduling and the Critical Path",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a construction schedule is and why the contract's completion date depends on it.",
    "Describe the Gantt chart and how it shows activities, durations, and sequence.",
    "Explain the Critical Path Method: forward pass, backward pass, and float.",
    "Describe the four dependency types: finish-to-start, start-to-start, finish-to-finish, and start-to-finish.",
    "Explain how to update a schedule and what to do when the critical path slips."
  ],
  "sections": [
    {
      "heading": "Why a Schedule Matters",
      "html": "<p>A schedule is the plan for when the work happens, and it is as binding as the price. The contract names a completion date, and the schedule is the contractor's proof that the date can be met — and the tool that shows whether it is being met. A job without a schedule is a job that drifts, and a drifting job is a job that finishes late and over budget.</p>\n<p>The schedule is built from the work: every activity the job needs, how long each one takes, what must happen before it, and who does it. The estimator's quantities and the scheduler's durations come from the same takeoff — the schedule is the estimate laid out in time. A schedule built from guesses, with no link to the quantities, is a picture, not a plan.</p>\n<p>The schedule is also the communication tool. The owner sees when the building will be weather-tight; the subcontractors see when they are needed; the suppliers see when to deliver. A schedule that is not shared is a schedule that is not used, and a schedule that is not used is a schedule that fails.</p>\n"
    },
    {
      "heading": "The Gantt Chart",
      "html": "<p>The <strong>Gantt chart</strong> is the schedule's picture: time across the top, activities down the side, and a bar for each activity showing when it starts and how long it lasts. A bar that is long is a long activity; a bar that starts after another bar ends is an activity that depends on the first. The chart is read left to right, and the finish date is the right end of the last bar.</p>\n<p>The Gantt chart's strength is its clarity — anyone can read it — and its weakness is that it hides the dependencies. A bar that starts on Monday may depend on a bar that ends on Friday, or it may not; the chart alone does not say. That is why the schedule is built as a network first, with dependencies, and the Gantt chart is the picture of the network, not the network itself.</p>\n<p>The schedule is baselined — a copy is saved as the plan — and progress is tracked against it. Each week, the activities that are done, the activities that are in progress, and the activities that have not started are marked, and the remaining durations are updated. The baseline never changes; the update shows where the job really is.</p>\n"
    },
    {
      "heading": "The Critical Path Method",
      "html": "<p>The <strong>Critical Path Method (CPM)</strong> is the math behind the schedule. Every activity has a duration, and every activity depends on others. The <strong>forward pass</strong> works from the start to the finish, adding durations along each chain, and finds the earliest each activity can start and finish. The <strong>backward pass</strong> works from the finish to the start, and finds the latest each activity can start and finish without delaying the job.</p>\n<p>The chain with no slack — the longest chain of dependent activities — is the <strong>critical path</strong>. It decides the finish date: any delay on the critical path delays the whole job by the same amount. Activities not on the critical path have <strong>float</strong> — slack time they can slip by without delaying the finish. Total float is the amount an activity can slip before it delays the job; free float is the amount it can slip before it delays the next activity.</p>\n<p>The critical path is not fixed. As the job progresses and activities finish early or late, the path moves — an activity with float can become critical, and a critical activity can gain float. The scheduler updates the schedule and re-runs the CPM, and the new critical path is the new truth. A scheduler who does not update the schedule is managing last month's job.</p>\n"
    },
    {
      "heading": "Dependencies and Delays",
      "html": "<p>Activities are linked by four <strong>dependency types</strong>. <strong>Finish-to-start</strong> is the most common: the successor cannot start until the predecessor finishes — the roof cannot start until the walls are up. <strong>Start-to-start</strong> means the successor starts when the predecessor starts — drywall and taping can start together on different floors. <strong>Finish-to-finish</strong> means the successor finishes when the predecessor finishes. <strong>Start-to-finish</strong> is rare and usually a sign the logic is wrong.</p>\n<p>When the critical path slips, the scheduler has two tools: <strong>crashing</strong> — adding resources to a critical activity to shorten it, which costs money — and <strong>fast tracking</strong> — doing activities in parallel that were planned in sequence, which adds risk. Crashing is safe and expensive; fast tracking is cheap and risky. The choice is the project manager's, and it is made with the owner, because both cost something.</p>\n<p>Delays are also claimed. A delay caused by the owner — a late decision, a late drawing, a change — can extend the completion date, but only if the delay is on the critical path and only if the contractor gives notice in writing, on time, with the schedule as evidence. A delay on an activity with float does not delay the job, and it does not earn an extension. The schedule is the evidence, which is why it is kept honest and updated.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The schedule is the estimate laid out in time, and it proves the completion date can be met. The Gantt chart is the picture; the CPM network is the math. Forward pass finds earliest dates, backward pass finds latest dates, and the chain with no slack is the critical path — it decides the finish date. Float is slack; crashing adds resources, fast tracking overlaps work. Delays on the critical path, with written notice, can extend the date.</p>\n<p><strong>Common mistake:</strong> Treating the Gantt chart as the schedule. The chart hides the dependencies — the network with its logic is the schedule, and the chart is only its picture.</p>\n<p><strong>Common mistake:</strong> Claiming a delay for an activity with float. Only a delay on the critical path delays the job, and only a delay on the critical path earns an extension.</p>\n<p><strong>Ready-to-Work link:</strong> If you can explain the critical path, define float, and name the four dependencies, you have this module. Module 9 covers building codes — the IRC and IBC.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Schedule",
      "def": "The plan for when the work happens, built from activities, durations, and dependencies."
    },
    {
      "term": "Gantt chart",
      "def": "The schedule's picture: time across, activities down, bars showing when each activity runs."
    },
    {
      "term": "Critical Path Method (CPM)",
      "def": "The math that finds the longest chain of dependent activities, which decides the finish date."
    },
    {
      "term": "Critical path",
      "def": "The longest chain of dependent activities, with no slack; any delay on it delays the whole job."
    },
    {
      "term": "Forward pass",
      "def": "Working from the start to the finish, adding durations, to find the earliest each activity can start and finish."
    },
    {
      "term": "Backward pass",
      "def": "Working from the finish to the start, to find the latest each activity can start and finish without delaying the job."
    },
    {
      "term": "Float",
      "def": "Slack time an activity can slip by without delaying the job; also called slack."
    },
    {
      "term": "Total float",
      "def": "How much an activity can slip before it delays the job's finish."
    },
    {
      "term": "Free float",
      "def": "How much an activity can slip before it delays the next activity."
    },
    {
      "term": "Dependency",
      "def": "A link between activities: one must happen before, with, or after another."
    },
    {
      "term": "Finish-to-start",
      "def": "The successor cannot start until the predecessor finishes — the most common dependency."
    },
    {
      "term": "Start-to-start",
      "def": "The successor starts when the predecessor starts."
    },
    {
      "term": "Finish-to-finish",
      "def": "The successor finishes when the predecessor finishes."
    },
    {
      "term": "Crashing",
      "def": "Adding resources to a critical activity to shorten it; safe but expensive."
    },
    {
      "term": "Fast tracking",
      "def": "Doing activities in parallel that were planned in sequence; cheap but risky."
    }
  ],
  "video": {
    "title": "Critical Path Method (CPM) & Analysis in Primavera P6 | How to Find & Analyze the Critical Path P6",
    "embedUrl": "https://www.youtube.com/embed/vhovD4JnA1M",
    "note": "The Critical Path Method in Primavera P6: what the critical path is, how to find it, and how float works. Watch the definition section twice — the critical path is the longest chain of dependent work, and it decides the finish date. Everything in this module follows from that one sentence.",
    "more": [
      {
        "title": "Critical path examples - overlooked CPM technique",
        "url": "https://www.youtube.com/watch?v=rTpol4vWZbE"
      },
      {
        "title": "How to Do Construction Planning & Scheduling Step-by-Step",
        "url": "https://www.youtube.com/watch?v=ZuiVpxtkXVw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the critical path in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The critical path is the longest chain of dependent activities, with no slack. Step 2: Any delay on it delays the whole job by the same amount, so it decides the finish date.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A job has three chains: A takes 10 days, B takes 15 days, C takes 8 days. Which is the critical path, and what is the job's duration?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The longest chain is B at 15 days, so B is the critical path. Step 2: The job's duration is 15 days — the finish date is set by the longest chain. Step 3: Chains A and C have float: A has 5 days, C has 7 days.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An activity takes 5 days and has 3 days of total float. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The activity can slip by up to 3 days without delaying the job's finish. Step 2: If it slips by 4 days, it delays the job by 1 day. Step 3: Float is slack — it belongs to the job, not to any one activity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Name the four dependency types and give an example of finish-to-start.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Finish-to-start, start-to-start, finish-to-finish, start-to-finish. Step 2: Finish-to-start example: the roof cannot start until the walls are finished. Step 3: Start-to-start example: drywall and taping starting together on different floors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The critical path has slipped by 4 days. Name the two recovery tools and say what each one costs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Crashing — add resources to shorten a critical activity; it costs money. Step 2: Fast tracking — overlap activities planned in sequence; it costs risk, because work done out of order can clash. Step 3: The choice is made with the owner, because both cost something.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A subcontractor is delayed by 3 days on an activity with 5 days of float. Does the job finish late, and does the delay earn an extension?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the activity can slip 5 days without delaying the finish, so a 3-day slip does not delay the job. Step 2: No extension is earned, because only a delay on the critical path delays the job. Step 3: The schedule is the evidence, which is why it must be honest and updated.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The critical path is:",
      "choices": [
        "The shortest chain of activities",
        "The longest chain of dependent activities, with no slack",
        "The cheapest chain",
        "The first chain"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The critical path is the longest dependent chain; it decides the finish date. (a) The shortest chain has the most float. (c) Cost is not the criterion. (d) Order is not the criterion."
    },
    {
      "q": "Float is:",
      "choices": [
        "The time an activity takes",
        "Slack time an activity can slip by without delaying the job",
        "The cost of an activity",
        "The number of workers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Float is slack — the amount an activity can slip before it delays the finish. (a) That is duration. (c) That is cost. (d) That is crew size."
    },
    {
      "q": "The forward pass finds:",
      "choices": [
        "The latest dates",
        "The earliest each activity can start and finish",
        "The cost",
        "The float"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The forward pass works from the start, adding durations, to find earliest dates. (a) That is the backward pass. (c) Cost is not found by the pass. (d) Float is found by comparing the two passes."
    },
    {
      "q": "Finish-to-start means:",
      "choices": [
        "The successor starts when the predecessor starts",
        "The successor cannot start until the predecessor finishes",
        "Both finish together",
        "The predecessor starts when the successor finishes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Finish-to-start is the most common dependency: one finishes, then the next starts. (a) That is start-to-start. (c) That is finish-to-finish. (d) That is start-to-finish, which is rare."
    },
    {
      "q": "Crashing a schedule means:",
      "choices": [
        "Doing work in parallel",
        "Adding resources to a critical activity to shorten it",
        "Cutting the budget",
        "Deleting activities"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Crashing adds resources — safe but expensive. (a) That is fast tracking. (c) Cutting the budget does not shorten the schedule. (d) Deleting work changes the scope, not the schedule."
    },
    {
      "q": "A delay on an activity with float:",
      "choices": [
        "Always delays the job",
        "Does not delay the job if the delay is within the float",
        "Always earns an extension",
        "Cancels the contract"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Float absorbs the delay; only a critical-path delay delays the job. (a) Only critical delays delay the job. (c) Only critical delays earn extensions. (d) A small delay does not cancel a contract."
    },
    {
      "q": "The Gantt chart's weakness is that it:",
      "choices": [
        "Is hard to read",
        "Hides the dependencies between activities",
        "Has no dates",
        "Is always wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The chart shows bars but not the logic linking them — the network is the schedule. (a) The chart is easy to read. (c) It has dates across the top. (d) It is not always wrong."
    },
    {
      "q": "The schedule baseline is:",
      "choices": [
        "The first draft",
        "The saved copy of the plan that progress is tracked against",
        "The final schedule",
        "A guess"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The baseline is frozen as the plan; updates are compared against it. (a) A draft is not a baseline. (c) The final schedule is the as-built record. (d) It is a plan, not a guess."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Scheduling & Critical Path: Quick Reference</h3>\n<p><strong>Schedule:</strong> The estimate laid out in time. Gantt chart = the picture · CPM network = the math.</p>\n<p><strong>CPM:</strong> Forward pass = earliest dates · Backward pass = latest dates · Critical path = longest chain, no slack, decides the finish date.</p>\n<p><strong>Float:</strong> Total float = slip before the job is delayed · Free float = slip before the next activity is delayed.</p>\n<p><strong>Dependencies:</strong> Finish-to-start (most common) · Start-to-start · Finish-to-finish · Start-to-finish (rare).</p>\n<p><strong>Recovery:</strong> Crashing = add resources, costs money · Fast tracking = overlap work, costs risk. Only critical-path delays earn extensions.</p>\n<p><strong>Self-check:</strong> Explain the critical path and define float.</p>\n"
};
