// mgt201 - Module 3: Quality Management: TQM, Six Sigma & Lean
module.exports = {
  "number": 3,
  "slug": "quality-management-tqm-six-sigma-lean",
  "title": "Quality Management: TQM, Six Sigma & Lean",
  "estTime": "3–4 hours",
  "objectives": [
    "Define quality from the customer's point of view, not the producer's.",
    "Explain TQM's three principles: customer focus, process focus, and teamwork.",
    "Explain Six Sigma's goal — fewer than 3.4 defects per million — and the DMAIC cycle.",
    "Explain Lean's five principles and the eight wastes.",
    "Compare TQM, Six Sigma, and Lean and say which fits a given problem."
  ],
  "sections": [
    {
      "heading": "What Quality Means",
      "html": "\n<p><strong>Quality</strong> is how well a product or service meets the customer's needs and expectations — fitness for use, as the quality pioneer Joseph Juran put it. That definition matters because it puts the customer in charge of the judgment, not the producer. A factory can meet every internal specification and still fail on quality if the customer wanted something different.</p>\n<p>Quality has several dimensions: performance (does it do the job?), features, reliability (does it keep working?), conformance (does it match the specification?), durability, serviceability, appearance, and perceived quality. A customer weighs them differently by product — reliability matters most in a car, appearance most in a restaurant — and the business must know which dimension its customers actually judge it on.</p>\n<p>The cost of quality has four parts: <strong>prevention</strong> (training, good design), <strong>appraisal</strong> (inspection, testing), <strong>internal failure</strong> (scrap and rework before delivery), and <strong>external failure</strong> (returns, refunds, lost customers after delivery). External failure is by far the most expensive — a returned product costs the sale, the shipping, and the customer — which is why spending on prevention is usually the cheapest money in the business.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Quality is judged by the customer, not the producer. And the cheapest quality money is prevention — an external failure costs the sale, the shipping, and the customer.</div>"
    },
    {
      "heading": "TQM: Quality Is Everyone's Job",
      "html": "\n<p><strong>Total Quality Management (TQM)</strong> is the philosophy that quality is the responsibility of everyone in the organization, built into every process, all the time — not inspected in at the end. Its three principles are a <strong>customer focus</strong> (the customer's needs define quality), a <strong>process focus</strong> supported by continuous improvement and learning, and <strong>teamwork</strong> across the whole organization.</p>\n<p>TQM's founders shaped the field. <strong>W. Edwards Deming</strong> taught that most variation comes from the system, not the worker, and that managers must fix the system — his 14 points include driving out fear and breaking down barriers between departments. <strong>Joseph Juran</strong> defined quality as fitness for use and gave us the quality trilogy: plan, control, improve. <strong>Philip Crosby</strong> argued for doing it right the first time and a goal of zero defects.</p>\n<p>TQM's practical tools are simple: find the root cause (ask \"why\" five times), use data instead of opinion, involve the people who do the work, and improve in small steps forever. The idea that survives from TQM into everything else in this course is that quality is built in by the process, not inspected in by a checker at the end.</p>\n<div class=\"callout\"><strong>Key idea:</strong> TQM: everyone, every process, all the time. Quality is built in by the process — inspection at the end can only sort the good from the bad, never make the bad good.</div>"
    },
    {
      "heading": "Six Sigma: Fewer Defects by the Numbers",
      "html": "\n<p><strong>Six Sigma</strong> is a data-driven method for reducing variation and defects. Its goal is a process so consistent that defects fall below 3.4 per million opportunities — six standard deviations between the process average and the nearest specification limit, which is where the name comes from. It was developed at Motorola in the 1980s and spread because it ties quality directly to money: every defect has a cost, and removing defects removes cost.</p>\n<p>Its improvement cycle is <strong>DMAIC</strong>: <strong>Define</strong> the problem and the customer requirement; <strong>Measure</strong> the current process and collect data; <strong>Analyze</strong> the data to find the root causes; <strong>Improve</strong> the process to remove them; <strong>Control</strong> the improved process so it stays fixed. DMAIC is the method used whenever a process exists and is not good enough; its sibling DMADV designs a new process from scratch.</p>\n<p>Six Sigma's strength is rigor — decisions by data, not by the loudest opinion — and its weakness is weight: it needs trained people (Green Belts and Black Belts) and it can be overkill for a small, simple problem. Use it where variation is the enemy and the cost of defects is high; use something lighter where the problem is obvious and the fix is a day's work.</p>\n<div class=\"formula\">Six Sigma goal: fewer than 3.4 defects per million opportunities &nbsp;|&nbsp; DMAIC: Define, Measure, Analyze, Improve, Control</div>"
    },
    {
      "heading": "Lean: Value Without Waste",
      "html": "\n<p><strong>Lean</strong> comes from the Toyota Production System and asks a different question from Six Sigma: not \"how do we reduce variation?\" but \"how do we deliver more value with less waste?\" Its five principles are: define <strong>value</strong> as the customer sees it; map the <strong>value stream</strong> (every step from order to delivery); make value <strong>flow</strong> without waiting or piling up; let the customer <strong>pull</strong> work through (make only what is ordered); and pursue <strong>perfection</strong> through continuous improvement.</p>\n<p>Lean names eight wastes — remembered by the acronym DOWNTIME: <strong>Defects</strong>, <strong>Overproduction</strong>, <strong>Waiting</strong>, <strong>Non-utilized talent</strong>, <strong>Transportation</strong>, <strong>Inventory</strong>, <strong>Motion</strong>, and <strong>Extra processing</strong>. Overproduction is the worst of them, because it creates the others: too much stock hides problems, needs space, and goes obsolete. A Lean workplace uses 5S (sort, set in order, shine, standardize, sustain) and visual controls such as kanban cards so that problems are visible the moment they appear.</p>\n<p>Lean and Six Sigma are complements, not rivals: Lean removes waste and speeds flow; Six Sigma removes variation and defects. Together — Lean Six Sigma — they cover both halves of a bad process: it is slow and it is wrong. TQM is the culture underneath both: everyone, every process, all the time.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Lean asks \"what does the customer pay for?\" and removes everything else. The eight wastes are DOWNTIME: defects, overproduction, waiting, non-utilized talent, transportation, inventory, motion, extra processing.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Quality is fitness for use, judged by the customer; external failure is the most expensive cost of quality.</li>\n<li>TQM: customer focus, process focus, teamwork — quality built in by everyone, all the time.</li>\n<li>Six Sigma: reduce variation to under 3.4 defects per million, using DMAIC.</li>\n<li>Lean: five principles, eight wastes (DOWNTIME), pull flow, and continuous improvement.</li>\n<li>Choose by the problem: variation → Six Sigma; waste and flow → Lean; culture → TQM. Often all three together.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating quality as inspection. Inspection sorts good from bad after the money is spent. Quality is built in by the process — by the design, the training, and the controls that stop a defect being made at all.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Picking a method by fashion instead of by problem. Six Sigma on a problem that needs a tidy workspace is overkill; Lean on a process whose variation is killing customers misses the point. Name the problem first, then the method.</div>\n<p><strong>Next step:</strong> Module 4 makes quality measurable — statistical process control, control charts, and process capability.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Quality",
      "def": "How well a product or service meets the customer's needs and expectations — fitness for use."
    },
    {
      "term": "TQM",
      "def": "Total quality management: quality as everyone's responsibility, built into every process, all the time."
    },
    {
      "term": "Six Sigma",
      "def": "A data-driven method for reducing variation and defects, aiming below 3.4 defects per million opportunities."
    },
    {
      "term": "DMAIC",
      "def": "Six Sigma's improvement cycle: Define, Measure, Analyze, Improve, Control."
    },
    {
      "term": "Lean",
      "def": "A philosophy from the Toyota Production System: deliver more customer value with less waste."
    },
    {
      "term": "Value stream",
      "def": "All the steps, value-adding and not, that a product or service passes through from order to delivery."
    },
    {
      "term": "Waste (muda)",
      "def": "Any activity that uses resources without adding value the customer will pay for."
    },
    {
      "term": "DOWNTIME",
      "def": "The eight wastes: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra processing."
    },
    {
      "term": "5S",
      "def": "Sort, set in order, shine, standardize, sustain — the Lean method for an organized workplace."
    },
    {
      "term": "Kanban",
      "def": "A visual signal, often a card, that triggers production or replenishment only when needed — the pull mechanism."
    },
    {
      "term": "Pull system",
      "def": "Making only what the next step or the customer has actually asked for, instead of pushing work forward."
    },
    {
      "term": "Cost of quality",
      "def": "The costs of prevention, appraisal, internal failure, and external failure."
    },
    {
      "term": "External failure cost",
      "def": "The cost of defects found by the customer: returns, refunds, warranty, and lost business."
    },
    {
      "term": "Continuous improvement (kaizen)",
      "def": "Small, ongoing improvements by everyone, every day, rather than rare large changes."
    },
    {
      "term": "Root cause",
      "def": "The underlying reason a problem occurs, as opposed to its visible symptom."
    }
  ],
  "video": {
    "title": "Lean Six Sigma In 8 Minutes | What Is Lean Six Sigma? | Lean Six Sigma Explained | Simplilearn",
    "embedUrl": "https://www.youtube.com/embed/s2HCrhNVfak",
    "note": "Explains Lean and Six Sigma through a supermarket story — the eight wastes, DMAIC, and how the two methods combine. After watching, name one waste and one source of variation in a process you know, and say which method would fix each.",
    "more": [
      {
        "title": "TQM, Six Sigma, and Lean: A Comparative Analysis | iCertGlobal",
        "url": "https://www.youtube.com/watch?v=LM8eSwcVObw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bakery throws away 40 loaves a day (internal failure) and gets 5 complaints a week about stale bread (external failure). Name one prevention action, one appraisal action, and explain why prevention is cheaper.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Prevention — bake to the day's forecast and train staff on the bake schedule, so fewer loaves are made wrong. Step 2: Appraisal — check freshness on a sample of loaves before they reach the shelf. Step 3: Prevention is cheaper because a thrown-away loaf costs ingredients and labor, while a stale loaf sold to a customer costs the refund, the replacement, and the customer — external failure is always the most expensive kind.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A process produces 2 defects in every 1,000 units. (a) How many defects per million is that? (b) Is it at Six Sigma level? Explain.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 2 per 1,000 = 2,000 per million. Step 2: (b) No — Six Sigma aims below 3.4 defects per million, and 2,000 is nearly 600 times that level. Step 3: The process is roughly at a 4-sigma level, not six; the business should use DMAIC to find and remove the root causes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Walk a hospital waiting room through DMAIC: write one sentence for each of Define, Measure, Analyze, Improve, Control.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Define — patients wait more than 30 minutes to be seen, and the requirement is under 15. Step 2: Measure — record arrival, triage, and seen times for 200 patients over two weeks. Step 3: Analyze — the data shows the wait is in triage, where one nurse handles both arrivals and phone calls. Step 4: Improve — split the roles: one nurse triages, another handles calls. Step 5: Control — post the daily average wait on the wall and review it every Monday so the fix stays fixed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Name the waste (from DOWNTIME) in each case: (a) a worker walks 200 meters to fetch parts four times an hour, (b) a warehouse holds six months of a part nobody has ordered, (c) forms are filled in triplicate 'just in case,' (d) a skilled machinist spends the day sweeping.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>Motion</strong> — unnecessary movement of people. Step 2: (b) <strong>Inventory</strong> — stock beyond what is needed, tying up cash and space. Step 3: (c) <strong>Extra processing</strong> — work beyond what the customer needs. Step 4: (d) <strong>Non-utilized talent</strong> — a skilled person's ability wasted on work anyone could do.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory inspects every unit at the end of the line and throws away 8% of them. Explain, using TQM's idea, why inspection is not quality — and what should replace it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Inspection only sorts the good from the bad after the cost is spent — the 8% were already made wrong, so inspection cannot recover the materials, the time, or the lost capacity. Step 2: TQM says quality must be built in: find the root cause of the defects (ask why five times, use data), fix the process that makes them, and use control charts (Module 4) to catch drift before defects are made. Step 3: Inspection becomes a check, not the quality system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A small business has two problems: orders are often wrong (variation in picking), and pickers wait for stock that is not at the bench (flow). Say which method — Lean or Six Sigma — fits each problem, and why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wrong orders are a variation and defect problem — <strong>Six Sigma</strong> (DMAIC) fits: measure the error rate, analyze the causes, and control the fix. Step 2: Waiting for stock is a flow and waste problem — <strong>Lean</strong> fits: map the value stream, move stock to the point of use, and pull replenishment with kanban. Step 3: Together they cover both halves: the process becomes faster and more accurate at the same time.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Quality is best defined as:",
      "choices": [
        "Meeting the factory's internal specifications",
        "How well a product or service meets the customer's needs — fitness for use",
        "The most expensive materials",
        "Having no inspection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Quality is judged by the customer, not the producer. (a) internal specs can miss what the customer wants. (c) expensive materials do not guarantee fitness. (d) no inspection is not a definition of quality."
    },
    {
      "q": "DMAIC stands for:",
      "choices": [
        "Define, Measure, Analyze, Improve, Control",
        "Design, Make, Assess, Inspect, Complete",
        "Decide, Manage, Act, Inform, Close",
        "Deliver, Measure, Audit, Improve, Certify"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Define, Measure, Analyze, Improve, Control is Six Sigma's improvement cycle. (b), (c), and (d) invent plausible-sounding but wrong sequences."
    },
    {
      "q": "Six Sigma's defect goal is:",
      "choices": [
        "Zero defects, always",
        "Fewer than 3.4 defects per million opportunities",
        "Fewer than 1 defect per thousand",
        "10% defects or fewer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3.4 defects per million is the Six Sigma target. (a) zero defects is Crosby's aspiration, not the Six Sigma number. (c) is 1,000 per million — far above the target. (d) is 100,000 per million."
    },
    {
      "q": "A process makes 2 defects per 1,000 units. That is how many per million?",
      "choices": [
        "2",
        "200",
        "2,000",
        "20,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 2 per 1,000 = 2,000 per million (multiply by 1,000). (a) forgets to scale. (b) scales by 100. (d) scales by 10,000."
    },
    {
      "q": "In DOWNTIME, the 'O' stands for:",
      "choices": [
        "Overtime",
        "Overproduction",
        "Ordering",
        "Outsourcing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overproduction — making more than the customer needs — is the worst waste because it creates the others. (a), (c), and (d) are not among the eight wastes."
    },
    {
      "q": "TQM's three principles are:",
      "choices": [
        "Inspection, testing, and certification",
        "Customer focus, process focus with continuous improvement, and teamwork",
        "Speed, cost, and profit",
        "Plan, buy, and sell"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Customer focus, process focus, and teamwork define TQM. (a) describes appraisal, not TQM. (c) and (d) are unrelated lists."
    },
    {
      "q": "The most expensive cost of quality is usually:",
      "choices": [
        "Prevention",
        "Appraisal",
        "Internal failure",
        "External failure"
      ],
      "answer": 3,
      "explanation": "Correct: (d). External failure — returns, refunds, lost customers — costs the sale, the shipping, and the relationship. (a) prevention is the cheapest. (b) appraisal is a check. (c) internal failure wastes materials and time but not customers."
    },
    {
      "q": "A worker walking 200 meters to fetch parts four times an hour is the waste of:",
      "choices": [
        "Transportation",
        "Motion",
        "Inventory",
        "Waiting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Motion is unnecessary movement of people. (a) transportation is movement of materials. (c) is excess stock. (d) is idle time waiting for something."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Quality Management: Quick Reference</h3>\n<p><strong>Core idea:</strong> Quality is fitness for use, judged by the customer. External failure is the most expensive cost of quality; prevention is the cheapest.</p>\n<p><strong>TQM:</strong> customer focus · process focus with continuous improvement · teamwork — quality built in by everyone, all the time.</p>\n<p><strong>Six Sigma:</strong> reduce variation to below 3.4 defects per million, using DMAIC (Define, Measure, Analyze, Improve, Control).</p>\n<p><strong>Lean:</strong> five principles — value, value stream, flow, pull, perfection — and the eight wastes, DOWNTIME: defects, overproduction, waiting, non-utilized talent, transportation, inventory, motion, extra processing.</p>\n<p><strong>Watch out:</strong> Inspection is not quality — it sorts good from bad after the money is spent. And pick the method by the problem: variation → Six Sigma; waste and flow → Lean; culture → TQM.</p>\n<p><strong>Self-check:</strong> Walk a process you know, name one waste and one source of variation, and say which method would fix each.</p>\n"
};
