// mgt201 - Module 11: Lean Operations & Continuous Improvement
module.exports = {
  "number": 11,
  "slug": "lean-operations-and-continuous-improvement",
  "title": "Lean Operations & Continuous Improvement",
  "estTime": "3–4 hours",
  "objectives": [
    "Map a value stream and separate value-adding steps from waste.",
    "Apply 5S and visual management to a workplace.",
    "Explain kanban and pull flow in a service or production setting.",
    "Run a PDCA improvement cycle on a real problem.",
    "Compute overall equipment effectiveness (OEE) and explain what it measures."
  ],
  "sections": [
    {
      "heading": "Seeing the Value Stream",
      "html": "\n<p>A <strong>value stream map</strong> is a drawing of every step a product or service takes from the customer's order to delivery, with the time each step takes and the time spent waiting between steps. It is the tool that makes waste visible: in most processes the value-adding time is a small fraction of the total lead time, and the rest is waiting, moving, and rework. You cannot improve what you cannot see, and the map is how you see it.</p>\n<p>Building a map is a team exercise, done on the floor where the work happens, not in a meeting room. Walk the process backwards from the customer, time each step, and mark every wait. The map then shows where to act: the longest wait, the biggest pile of inventory, the step that is reworked most often. One map, honestly drawn, is worth a month of meetings about the process.</p>\n<p>The map also shows the <strong>takt time</strong> — the pace the customer demands. Takt time = available working time ÷ customer demand. If a shift has 480 minutes and customers want 120 units, takt time is 480 ÷ 120 = <strong>4 minutes per unit</strong>: the process must produce one unit every four minutes to keep up. If demand rises to 160 units, takt time falls to 480 ÷ 160 = <strong>3 minutes per unit</strong> — the process must run faster or add capacity.</p>\n<div class=\"formula\">Takt time = Available working time ÷ Customer demand</div>"
    },
    {
      "heading": "5S and Visual Management",
      "html": "\n<p><strong>5S</strong> is the method for a workplace where problems are visible: <strong>Sort</strong> — remove what is not needed; <strong>Set in order</strong> — a place for everything, and everything in its place; <strong>Shine</strong> — clean and inspect, so problems show; <strong>Standardize</strong> — make the first three a routine; <strong>Sustain</strong> — keep it going with audits and habit. A tidy workplace is not about appearances — it is about finding a tool in seconds instead of minutes, and seeing a leak, a crack, or a missing part the moment it appears.</p>\n<p><strong>Visual management</strong> makes the state of the work obvious at a glance: shadow boards showing where each tool belongs, color-coded bins, floor markings for walkways and storage, and boards showing today's target, today's actual, and today's problems. When the state of the work is visible, anyone can see whether the process is on track and where the problem is — without asking, and without waiting for a report.</p>\n<p>The test of 5S is not a clean floor on audit day. It is whether a new starter can find what they need, whether a problem is visible within minutes, and whether the standard is still followed when nobody is watching. That is the sustain step, and it is the one most workplaces fail.</p>\n<div class=\"callout\"><strong>Key idea:</strong> 5S is sort, set in order, shine, standardize, sustain. Its purpose is not tidiness — it is making problems visible the moment they appear.</div>"
    },
    {
      "heading": "Kanban and Pull Flow",
      "html": "\n<p><strong>Kanban</strong> is the pull mechanism: a signal — a card, a bin, an empty space — that tells the previous step to make more, and only as much as was just used. Nothing is made until the signal arrives, so nothing piles up. A two-bin system is kanban in its simplest form: use from the first bin, and when it is empty, the empty bin is the signal to reorder while work continues from the second.</p>\n<p>Pull flow changes the shape of the whole operation. Instead of each step pushing work forward as fast as it can — creating piles between steps — each step makes only what the next step has asked for. Work in progress falls, lead time falls, and problems surface immediately: if a step stops, the step before it stops too, because nobody is asking it for more. That visibility is the point, not a side effect.</p>\n<p>Pull needs the foundations from earlier modules: stable processes (Module 4), reliable suppliers (Module 6), and short setup times — because small batches are only economical if changing over is quick. Without those, pull is a stockout machine. With them, it is the fastest, cheapest way to run a repetitive operation.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Kanban is a signal to make more, and only as much as was just used. Pull makes work in progress fall, lead time fall, and problems visible — but it needs stable processes and reliable suppliers underneath.</div>"
    },
    {
      "heading": "PDCA and Overall Equipment Effectiveness",
      "html": "\n<p><strong>PDCA</strong> — <strong>Plan, Do, Check, Act</strong> — is the cycle of continuous improvement. Plan: define the problem, find the root cause, and design a countermeasure. Do: try it on a small scale. Check: measure whether it worked. Act: standardize it if it worked, or go around the cycle again if it did not. A <strong>kaizen event</strong> is a short, focused burst of PDCA — a few days, a small team, one problem, a measurable improvement by the end of the week.</p>\n<p><strong>Overall equipment effectiveness (OEE)</strong> measures how well equipment is used: OEE = Availability × Performance × Quality. Availability is the share of planned time the machine actually runs; performance is how fast it runs compared with its ideal speed; quality is the share of output that is good. <strong>Worked check.</strong> A machine is available 90% of the time, runs at 95% of ideal speed, and makes 98% good parts: OEE = 0.90 × 0.95 × 0.98 = <strong>0.8379, or 83.8%</strong>. An OEE of 85% is world-class; most operations run well below it, and the three factors show exactly where the loss is.</p>\n<p>Continuous improvement is not a project with an end date. It is a habit: every day, the people who do the work find one small thing to make better, and the standard moves up a little. The improvements are small; the compounding is not.</p>\n<div class=\"formula\">OEE = Availability × Performance × Quality &nbsp;|&nbsp; PDCA: Plan, Do, Check, Act</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A value stream map shows every step and every wait — and the value-adding time is usually a small fraction of the total.</li>\n<li>Takt time = available working time ÷ customer demand: the pace the process must run at.</li>\n<li>5S (sort, set in order, shine, standardize, sustain) and visual management make problems visible the moment they appear.</li>\n<li>Kanban is a pull signal: make only what was just used, and only when asked.</li>\n<li>PDCA (plan, do, check, act) is the improvement cycle; a kaizen event is a short, focused burst of it.</li>\n<li>OEE = availability × performance × quality; 85% is world-class.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a 5S blitz and calling it Lean. A one-off tidy-up without standardize and sustain is a clean floor for a week — the standard must be maintained by habit and audit, or the waste returns.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Pulling without the foundations. Kanban with unstable processes, unreliable suppliers, and long setups is a stockout machine. Fix stability, supply, and setup first, then pull.</div>\n<p><strong>Next step:</strong> Module 12 is the course review — the whole operation, end to end, and the five-part check you can run on any business.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Value stream map",
      "def": "A drawing of every step from order to delivery, with the time each step takes and the waiting between steps."
    },
    {
      "term": "Takt time",
      "def": "The pace the customer demands: available working time divided by customer demand."
    },
    {
      "term": "5S",
      "def": "Sort, set in order, shine, standardize, sustain — the method for a workplace where problems are visible."
    },
    {
      "term": "Visual management",
      "def": "Making the state of the work obvious at a glance: shadow boards, color codes, floor markings, and status boards."
    },
    {
      "term": "Kanban",
      "def": "A signal, such as a card or an empty bin, that triggers production or replenishment only when needed."
    },
    {
      "term": "Pull flow",
      "def": "Making only what the next step or the customer has asked for, instead of pushing work forward."
    },
    {
      "term": "PDCA",
      "def": "The improvement cycle: Plan, Do, Check, Act."
    },
    {
      "term": "Kaizen event",
      "def": "A short, focused improvement burst — a few days, a small team, one problem, a measurable result."
    },
    {
      "term": "OEE",
      "def": "Overall equipment effectiveness: availability × performance × quality."
    },
    {
      "term": "Availability",
      "def": "In OEE, the share of planned time the equipment actually runs."
    },
    {
      "term": "Performance",
      "def": "In OEE, how fast equipment runs compared with its ideal speed."
    },
    {
      "term": "Quality rate",
      "def": "In OEE, the share of output that is good, first time."
    },
    {
      "term": "Continuous improvement",
      "def": "Small, ongoing improvements by everyone, every day, rather than rare large changes."
    },
    {
      "term": "Work in progress (WIP)",
      "def": "Work that has started but is not yet finished — the stock between steps in a process."
    },
    {
      "term": "Little's Law",
      "def": "The relationship between work in progress, throughput, and flow time: WIP = Throughput × Flow time."
    }
  ],
  "video": {
    "title": "Jishuken at Coloplast",
    "embedUrl": "https://www.youtube.com/embed/ovvWIEWIqsY",
    "note": "A Lean Enterprise Institute video showing a real kaizen event at a factory — a team improving a real process in a few days, using the methods of this module. Watch how the team sees the waste on the floor before changing anything.",
    "more": [
      {
        "title": "Operational Excellence in Metalforming | Webinar",
        "url": "https://www.youtube.com/watch?v=XE6xCJhsFxU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shift has 480 minutes of available time and customers want 120 units. (a) What is the takt time? (b) Demand rises to 160 units. What is the new takt time, and what must the process do?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Takt time = 480 ÷ 120 = <strong>4 minutes per unit</strong>. Step 2: (b) New takt time = 480 ÷ 160 = <strong>3 minutes per unit</strong>. Step 3: The process must produce one unit every 3 minutes instead of every 4 — it must run faster, add capacity, or remove waste, or it will fall behind the customer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A machine is available 90% of the time, runs at 95% of ideal speed, and makes 98% good parts. (a) What is its OEE? (b) Is that world-class? (c) Which factor is the biggest loss?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) OEE = 0.90 × 0.95 × 0.98 = <strong>0.8379, or 83.8%</strong>. Step 2: (b) It is just below the 85% world-class benchmark — very good, but with room to improve. Step 3: (c) Availability is the biggest loss at 10%, followed by performance at 5%, then quality at 2% — so the first improvement effort should go to downtime.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A process has 60 jobs in progress and completes 12 a day. (a) What is the average flow time (Little's Law)? (b) The business wants a 3-day flow time. What is the maximum work in progress it should allow?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Flow time = WIP ÷ Throughput = 60 ÷ 12 = <strong>5 days</strong>. Step 2: (b) WIP cap = Throughput × Flow time = 12 × 3 = <strong>36 jobs</strong>. Step 3: To cut flow time from 5 days to 3, the business must limit work in progress to 36 jobs — pulling work in only as work goes out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Walk a café's order process through PDCA: the problem is that drinks take 8 minutes at peak. Write one sentence for each of Plan, Do, Check, Act.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Plan</strong> — measure the steps and find the root cause: the milk is fetched from a fridge across the room, adding 2 minutes. Step 2: <strong>Do</strong> — move a small fridge to the bar for one week as a trial. Step 3: <strong>Check</strong> — measure the time again: it falls to 6 minutes. Step 4: <strong>Act</strong> — make the fridge move permanent, write it into the standard, and pick the next problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A workshop's tools are scattered, so a mechanic spends 15 minutes of every hour searching. Name the 5S steps that fix this, and say what changes at each step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Sort</strong> — remove broken and unused tools. Step 2: <strong>Set in order</strong> — give every tool a marked place on a shadow board, nearest the work. Step 3: <strong>Shine</strong> — clean the bench and inspect the tools, so a missing or damaged one is seen at once. Step 4: <strong>Standardize</strong> — write the layout down and check it at the end of each shift. Step 5: <strong>Sustain</strong> — audit weekly, so the standard survives when nobody is watching.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A factory runs a pull system but its supplier delivers late twice a week and its machines break down daily. Explain why pull is failing, and what must be fixed before pull can work.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pull has no buffers, so every disruption stops the line immediately — a late supplier and daily breakdowns mean constant stoppages. Step 2: Pull needs stable processes, reliable suppliers, and short setups underneath it; without them it is a stockout machine. Step 3: Fix stability first — maintenance to stop the breakdowns, and a reliable supplier (or safety stock on the critical parts) — then pull can work.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Takt time is:",
      "choices": [
        "The time a machine takes to make one unit",
        "Available working time divided by customer demand",
        "The total lead time of a process",
        "The time spent waiting between steps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Takt time is the pace the customer demands. (a) is the cycle time. (c) is the lead time. (d) is waiting, which is waste."
    },
    {
      "q": "A shift has 480 minutes and customers want 120 units. Takt time is:",
      "choices": [
        "2 minutes per unit",
        "3 minutes per unit",
        "4 minutes per unit",
        "6 minutes per unit"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 480 ÷ 120 = 4 minutes per unit. (a) would need 240 units. (b) would need 160 units. (d) would need 80 units."
    },
    {
      "q": "A machine is available 90%, runs at 95% of ideal speed, and makes 98% good parts. Its OEE is:",
      "choices": [
        "83.8%",
        "90%",
        "95%",
        "98%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.90 × 0.95 × 0.98 = 0.8379, or 83.8%. (b), (c), and (d) are the individual factors, not the product of all three."
    },
    {
      "q": "PDCA stands for:",
      "choices": [
        "Plan, Do, Check, Act",
        "Produce, Deliver, Charge, Account",
        "Prepare, Decide, Control, Audit",
        "Predict, Design, Construct, Approve"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Plan, Do, Check, Act is the improvement cycle. (b), (c), and (d) invent plausible-sounding but wrong sequences."
    },
    {
      "q": "Kanban is:",
      "choices": [
        "A way to push work forward as fast as possible",
        "A signal that triggers production only when the next step asks for more",
        "A type of warehouse",
        "A quality inspection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Kanban is the pull signal — make only what was just used. (a) describes push, the opposite. (c) and (d) are not kanban."
    },
    {
      "q": "A process has 60 jobs in progress and completes 12 a day. Its average flow time is:",
      "choices": [
        "3 days",
        "5 days",
        "12 days",
        "60 days"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Little's Law: flow time = 60 ÷ 12 = 5 days. (a) would need WIP of 36. (c) is the throughput. (d) is the WIP."
    },
    {
      "q": "The five S's in order are:",
      "choices": [
        "Sort, set in order, shine, standardize, sustain",
        "Sweep, sort, store, standardize, sell",
        "Select, sort, shine, ship, sustain",
        "Sort, store, sell, standardize, sustain"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sort, set in order, shine, standardize, sustain. (b), (c), and (d) mix in words that are not the five S's."
    },
    {
      "q": "A value stream map is most useful for:",
      "choices": [
        "Hiding problems behind averages",
        "Making every step and every wait visible so waste can be found",
        "Calculating the EOQ",
        "Setting the price"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The map shows the steps and the waiting, so the waste is visible. (a) is the opposite of its purpose. (c) is an inventory calculation. (d) is a pricing decision."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Lean Operations & Continuous Improvement: Quick Reference</h3>\n<p><strong>Core idea:</strong> See the waste, then remove it — a little at a time, every day, by the people who do the work.</p>\n<div class=\"formula\">Takt time = Available working time ÷ Customer demand &nbsp;|&nbsp; OEE = Availability × Performance × Quality</div>\n<div class=\"formula\">Little's Law: Flow time = WIP ÷ Throughput &nbsp;|&nbsp; WIP cap = Throughput × Target flow time</div>\n<p><strong>5S:</strong> sort, set in order, shine, standardize, sustain — making problems visible the moment they appear. <strong>Kanban:</strong> a pull signal — make only what was just used. <strong>PDCA:</strong> plan, do, check, act — the improvement cycle; a kaizen event is a short, focused burst of it.</p>\n<p><strong>Watch out:</strong> A one-off tidy-up is not Lean — sustain is the step that matters. And pull without stable processes and reliable suppliers is a stockout machine.</p>\n<p><strong>Self-check:</strong> Map one process you know, compute its takt time and OEE, and run one PDCA cycle on its biggest waste.</p>\n"
};
