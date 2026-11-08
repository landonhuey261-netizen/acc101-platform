// mgt201 - Module 2: Process Design & Capacity Planning
module.exports = {
  "number": 2,
  "slug": "process-design-and-capacity-planning",
  "title": "Process Design & Capacity Planning",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the five process types — project, job shop, batch, assembly line, continuous flow — and say when each fits.",
    "Explain the bottleneck and why it sets the pace of the whole process.",
    "Work utilization and efficiency from design capacity, effective capacity, and actual output.",
    "Apply Little's Law to find flow time from work in process and throughput.",
    "Explain takt time and the three capacity strategies: lead, lag, and match."
  ],
  "sections": [
    {
      "heading": "Five Ways to Organize Work",
      "html": "\n<p>Processes differ by volume and variety, and the right design depends on both. A <strong>project</strong> process makes one unique thing — a house, a film, a custom kitchen — with the work organized around the single job. A <strong>job shop</strong> makes small batches of varied products, like a machine shop or a print shop, with general equipment and skilled workers. A <strong>batch</strong> process makes groups of similar items — a bakery's morning run of sourdough, then its run of rye — switching the line between batches.</p>\n<p>An <strong>assembly line</strong> makes high volumes of similar products at a steady pace — cars, phones, bottled drinks — with specialized stations and a moving line. A <strong>continuous flow</strong> process never stops: oil refining, paper making, power generation. As volume rises and variety falls, processes move from project toward continuous flow — and the management problem changes from \"how do we handle this unique job?\" to \"how do we keep this line running without a stop?\"</p>\n<p>The choice is a trade-off, not a ranking. A job shop is flexible but slow and expensive per unit; an assembly line is fast and cheap per unit but inflexible. The classic mistake is running a job-shop variety of orders through an assembly-line layout, or vice versa — the process fights the product, and everyone blames the workers.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Match the process to the volume and variety. High variety, low volume wants a job shop; low variety, high volume wants a line. A mismatch punishes everyone, every day.</div>"
    },
    {
      "heading": "The Bottleneck Sets the Pace",
      "html": "\n<p>Every process has a <strong>bottleneck</strong> — the slowest step, which limits the output of the whole process. A process is only as fast as its bottleneck: improving any other step does not raise output, it only builds a pile of work in front of the bottleneck. The work that matters most is the work at the bottleneck, and the work that matters least is speeding up a step that is already waiting for it.</p>\n<p><strong>Worked check:</strong> A small factory has three stations: cutting takes 6 minutes per unit, welding takes 9 minutes, painting takes 4 minutes. Step 1: the bottleneck is welding at 9 minutes per unit. Step 2: in an 8-hour shift (480 minutes), the process can make 480 ÷ 9 = 53.33, or <strong>53 units</strong> — no more, however fast cutting and painting go. Step 3: if welding improves to 6 minutes, the new bottleneck is cutting (6 minutes), and output rises to 480 ÷ 6 = 80 units. The improvement must be at the bottleneck, or it is not an improvement at all.</p>\n<p>Finding the bottleneck is usually easy: look for the pile. Work-in-process inventory, waiting customers, and the station everyone is waiting on are the bottleneck announcing itself. Fixing it means protecting it — never let it sit idle waiting for materials, and never let defects reach it, because every minute it loses is a minute the whole process loses.</p>\n<div class=\"formula\">Process capacity = Available time ÷ Bottleneck time per unit</div>"
    },
    {
      "heading": "Capacity: Design, Effective, and Actual",
      "html": "\n<p><strong>Capacity</strong> is the maximum output a process can produce in a period. Three numbers describe it. <strong>Design capacity</strong> is the theoretical maximum under perfect conditions. <strong>Effective capacity</strong> is the realistic maximum, allowing for maintenance, changeovers, and breaks. <strong>Actual output</strong> is what really happened. The gaps between them are where management lives.</p>\n<p>Two ratios measure the gaps. <strong>Utilization</strong> = actual output ÷ design capacity. <strong>Efficiency</strong> = actual output ÷ effective capacity. <strong>Worked check:</strong> a plant has a design capacity of 1,000 units a day, an effective capacity of 850, and actual output of 765. Step 1: utilization = 765 ÷ 1,000 = 0.765 = <strong>76.5%</strong>. Step 2: efficiency = 765 ÷ 850 = 0.90 = <strong>90%</strong>. The plant is running well against what is realistic (90%), but the realistic ceiling is well below the theoretical one — the question is whether the 150-unit gap between design and effective capacity (changeovers, maintenance) can be shrunk.</p>\n<p>Low utilization is not always bad: a hospital keeps spare beds for emergencies, and a restaurant keeps spare tables for walk-ins. But sustained low utilization means the business paid for capacity it does not use, and sustained output above effective capacity means breakdowns are coming.</p>\n<div class=\"formula\">Utilization = Actual output ÷ Design capacity &nbsp;|&nbsp; Efficiency = Actual output ÷ Effective capacity</div>"
    },
    {
      "heading": "Little's Law and Takt Time",
      "html": "\n<p><strong>Little's Law</strong> is one of the most useful formulas in operations, and it is simple: the average number of items in a process equals the rate they leave multiplied by the average time each spends inside. Rearranged: flow time = work in process ÷ throughput. It holds for any stable process — a factory, a clinic, a support desk — and it is a lie detector: if the numbers do not fit, someone's count is wrong.</p>\n<p><strong>Worked check:</strong> a repair shop has 60 jobs in progress and completes 12 a day. Step 1: flow time = 60 ÷ 12 = 5 days — the average job takes five days from arrival to completion. Step 2: to cut the wait to 3 days without hiring, the shop must hold no more than 3 × 12 = 36 jobs at once — it must stop starting new jobs before old ones finish. That is the counterintuitive heart of flow: starting less work finishes more of it, faster.</p>\n<p><strong>Takt time</strong> is the pace the customer demands: available production time ÷ customer demand. If a line has 480 minutes a day and customers want 120 units, takt time = 480 ÷ 120 = 4 minutes per unit — every 4 minutes, one unit must be completed, or the day's demand is missed. Takt time is the metronome the whole process is designed around.</p>\n<div class=\"formula\">Flow time = Work in process ÷ Throughput (Little's Law) &nbsp;|&nbsp; Takt time = Available time ÷ Customer demand</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Process types run from project to continuous flow as volume rises and variety falls — match the process to the product.</li>\n<li>The bottleneck sets the pace of the whole process; improving anything else only builds a pile in front of it.</li>\n<li>Utilization measures actual against design capacity; efficiency measures actual against effective capacity.</li>\n<li>Little's Law: flow time = work in process ÷ throughput — starting less work finishes more of it faster.</li>\n<li>Takt time is the customer-demanded pace; capacity strategy is lead (build ahead), lag (build after demand), or match (build in steps).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Speeding up a non-bottleneck step and calling it an improvement. If welding takes 9 minutes and cutting takes 6, a faster saw changes nothing — output is still 53 units a shift, and the only difference is a bigger pile in front of welding.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing utilization with efficiency. A plant at 90% efficiency can still be at 76.5% utilization — the difference is the gap between design and effective capacity, and the fix for each gap is different.</div>\n<p><strong>Next step:</strong> Module 3 turns to quality — TQM, Six Sigma, and Lean — the philosophies that decide what \"good\" means and how to get there.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Process design",
      "def": "Deciding how work flows: the sequence of steps, the layout, and the type of process used."
    },
    {
      "term": "Project process",
      "def": "A process that makes one unique product or delivers one unique outcome."
    },
    {
      "term": "Job shop",
      "def": "A process making small batches of varied products with general-purpose equipment and skilled workers."
    },
    {
      "term": "Batch process",
      "def": "A process making groups of similar items, switching the line between batches."
    },
    {
      "term": "Assembly line",
      "def": "A process making high volumes of similar products at a steady pace through specialized stations."
    },
    {
      "term": "Continuous flow",
      "def": "A process that runs without stopping, such as refining or power generation."
    },
    {
      "term": "Bottleneck",
      "def": "The slowest step in a process, which limits the output of the whole process."
    },
    {
      "term": "Capacity",
      "def": "The maximum output a process can produce in a given period."
    },
    {
      "term": "Design capacity",
      "def": "The theoretical maximum output under perfect conditions."
    },
    {
      "term": "Effective capacity",
      "def": "The realistic maximum output allowing for maintenance, changeovers, and breaks."
    },
    {
      "term": "Utilization",
      "def": "Actual output divided by design capacity."
    },
    {
      "term": "Efficiency",
      "def": "Actual output divided by effective capacity."
    },
    {
      "term": "Little's Law",
      "def": "The relationship: average work in process = throughput × flow time."
    },
    {
      "term": "Takt time",
      "def": "Available production time divided by customer demand — the pace one unit must be completed."
    },
    {
      "term": "Lead capacity strategy",
      "def": "Adding capacity ahead of demand, risking idle capacity to avoid lost sales."
    },
    {
      "term": "Lag capacity strategy",
      "def": "Adding capacity only after demand arrives, risking lost sales to avoid idle capacity."
    }
  ],
  "video": {
    "title": "10 Strategy decision in operation management",
    "embedUrl": "https://www.youtube.com/embed/KUjbV_qJjUY",
    "note": "Covers the ten operations strategy decisions — including design of goods and services, quality, and process and capacity design — with everyday examples. Use it to place this module's process and capacity ideas among the ten.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A factory has three stations: cutting 6 minutes, welding 9 minutes, painting 4 minutes per unit, in an 8-hour shift. (a) What is the bottleneck? (b) How many units can the shift produce? (c) If welding improves to 6 minutes, what is the new output?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The bottleneck is <strong>welding at 9 minutes</strong> — the slowest step. Step 2: (b) Output = 480 ÷ 9 = 53.33, so <strong>53 units</strong> per shift. Step 3: (c) With welding at 6 minutes, the bottleneck becomes cutting (6 minutes) and output = 480 ÷ 6 = <strong>80 units</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A plant has design capacity 1,000 units/day, effective capacity 850, actual output 765. (a) What is utilization? (b) What is efficiency? (c) What does the gap between design and effective capacity represent?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Utilization = 765 ÷ 1,000 = <strong>76.5%</strong>. Step 2: (b) Efficiency = 765 ÷ 850 = <strong>90%</strong>. Step 3: (c) The 150-unit gap is planned losses — maintenance, changeovers, breaks — the difference between perfect conditions and realistic ones.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A repair shop has 60 jobs in progress and completes 12 a day. (a) What is the average flow time? (b) To cut flow time to 3 days at the same completion rate, how many jobs may be in progress at once?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Flow time = 60 ÷ 12 = <strong>5 days</strong> (Little's Law). Step 2: (b) Work in process = flow time × throughput = 3 × 12 = <strong>36 jobs</strong>. The shop must stop starting new jobs until old ones finish — starting less finishes more, faster.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A line has 480 minutes of available time a day and customers want 120 units. (a) What is the takt time? (b) If demand rises to 160 units, what is the new takt time, and what must change?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Takt time = 480 ÷ 120 = <strong>4 minutes per unit</strong>. Step 2: (b) New takt = 480 ÷ 160 = <strong>3 minutes per unit</strong>. Step 3: The process must complete a unit every 3 minutes instead of every 4 — faster stations, a second line, or longer hours; otherwise demand is missed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Classify each as project, job shop, batch, assembly line, or continuous flow: (a) a custom wedding cake, (b) a machine shop making 20 different brackets a week, (c) a bakery's morning run of 200 sourdough loaves, (d) a car plant, (e) an oil refinery.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>project</strong> — one unique product. Step 2: (b) <strong>job shop</strong> — small batches, high variety. Step 3: (c) <strong>batch</strong> — a group of similar items, then a switch. Step 4: (d) <strong>assembly line</strong> — high volume, steady pace. Step 5: (e) <strong>continuous flow</strong> — never stops.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A call center adds capacity only after customers complain about waiting. Name the capacity strategy, its risk, and the alternative strategy with its risk.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>lag</strong> strategy — capacity follows demand. Step 2: Its risk is lost customers: people who wait too long hang up and call a rival. Step 3: The alternative is a <strong>lead</strong> strategy — adding capacity ahead of demand — whose risk is idle staff and wasted wages if the demand never arrives. Step 4: A <strong>match</strong> strategy splits the difference, adding capacity in small steps as demand grows.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The bottleneck of a process is:",
      "choices": [
        "The fastest step",
        "The slowest step, which limits the output of the whole process",
        "The first step",
        "The most expensive machine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Output is capped by the slowest step. (a) the fastest step never limits output. (c) position does not define the bottleneck. (d) cost does not define it either."
    },
    {
      "q": "Stations take 6, 9, and 4 minutes per unit in an 8-hour shift. Maximum output is:",
      "choices": [
        "80 units",
        "120 units",
        "53 units",
        "40 units"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The bottleneck is 9 minutes, so 480 ÷ 9 = 53.33, or 53 units. (a) assumes a 6-minute bottleneck. (b) assumes 4 minutes. (d) has no basis in these numbers."
    },
    {
      "q": "Design capacity 1,000, effective 850, actual 765. Utilization is:",
      "choices": [
        "90%",
        "76.5%",
        "85%",
        "65%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Utilization = actual ÷ design = 765 ÷ 1,000 = 76.5%. (a) is the efficiency (765 ÷ 850). (c) is the effective-to-design ratio. (d) is not supported by these numbers."
    },
    {
      "q": "Efficiency for the same plant (actual 765, effective 850) is:",
      "choices": [
        "76.5%",
        "90%",
        "100%",
        "85%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Efficiency = actual ÷ effective = 765 ÷ 850 = 90%. (a) is the utilization. (c) would mean output equals effective capacity. (d) is the effective-to-design ratio."
    },
    {
      "q": "A shop has 60 jobs in progress and completes 12 a day. Average flow time is:",
      "choices": [
        "12 days",
        "5 days",
        "60 days",
        "2 days"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Little's Law: flow time = 60 ÷ 12 = 5 days. (a) is the throughput. (c) is the work in process. (d) divides the wrong way."
    },
    {
      "q": "Available time 480 minutes, demand 120 units a day. Takt time is:",
      "choices": [
        "120 minutes per unit",
        "4 minutes per unit",
        "0.25 units per minute",
        "480 minutes per unit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Takt = 480 ÷ 120 = 4 minutes per unit. (a) is the demand figure misused. (c) is the rate, not the takt time. (d) is the whole day's time."
    },
    {
      "q": "A car plant making high volumes of similar cars at a steady pace uses:",
      "choices": [
        "A project process",
        "A job shop",
        "An assembly line",
        "A batch process"
      ],
      "answer": 2,
      "explanation": "Correct: (c). High volume, low variety, steady pace is the assembly line. (a) is for unique products. (b) is for small varied batches. (d) makes groups and switches between them."
    },
    {
      "q": "A lead capacity strategy means:",
      "choices": [
        "Adding capacity only after demand arrives",
        "Adding capacity ahead of demand, risking idle capacity to avoid lost sales",
        "Never adding capacity",
        "Adding capacity in the middle of the night"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lead builds ahead; the risk is idle capacity. (a) describes lag. (c) is not a strategy. (d) is meaningless."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Process Design &amp; Capacity Planning: Quick Reference</h3>\n<p><strong>Core idea:</strong> Match the process to volume and variety — project, job shop, batch, assembly line, continuous flow. The bottleneck sets the pace of the whole process.</p>\n<div class=\"formula\">Process capacity = Available time ÷ Bottleneck time per unit &nbsp;|&nbsp; Utilization = Actual ÷ Design capacity &nbsp;|&nbsp; Efficiency = Actual ÷ Effective capacity</div>\n<div class=\"formula\">Flow time = Work in process ÷ Throughput (Little's Law) &nbsp;|&nbsp; Takt time = Available time ÷ Customer demand</div>\n<p><strong>Capacity strategies:</strong> lead (build ahead, risk idle capacity) · lag (build after demand, risk lost sales) · match (build in steps).</p>\n<p><strong>Watch out:</strong> Improving a non-bottleneck step is not an improvement — it only builds a pile. And utilization is not efficiency: one measures against design capacity, the other against effective capacity.</p>\n<p><strong>Self-check:</strong> Find the bottleneck in a process you know (look for the pile), work its capacity, and compute utilization and efficiency from its three numbers.</p>\n"
};
