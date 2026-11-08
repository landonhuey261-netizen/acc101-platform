// bus201 - Module 11: Technology Project Basics
module.exports = {
  "number": 11,
  "slug": "technology-project-basics",
  "title": "Technology Project Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Define a project and tell it apart from routine operations.",
    "Name the five project phases: initiation, planning, execution, monitoring, and closure.",
    "Explain the triple constraint — scope, time, and cost — and what happens when one moves.",
    "Build a simple work breakdown structure and a RACI for a small technology project.",
    "Name the risks that sink small technology projects and the habit that prevents each one."
  ],
  "sections": [
    {
      "heading": "What a Project Is — and Is Not",
      "html": "\n<p>A <strong>project</strong> is a temporary effort to create something new — a new system, a new website, a new process — with a beginning, an end, and a defined result. <strong>Operations</strong> are the repeating work that keeps the business running: taking orders, paying suppliers, serving customers. A project ends; operations go on. Confusing the two is why so many system changes are run as \"something we will fit in around the real work\" — and then never finish.</p>\n<p>Projects are defined by their constraints: <strong>scope</strong> (what will be delivered), <strong>time</strong> (when it must be done), and <strong>cost</strong> (what it may spend), with quality as the standard the result must meet. The <strong>triple constraint</strong> says you cannot change one without affecting the others: add scope without adding time or money, and quality or the deadline gives way. Anyone who promises all three fixed is selling something.</p>\n<p>Every project also has a <strong>stakeholder</strong> — anyone affected by it or able to affect it: the owner who pays, the staff who will use the system, the customers who will feel the change, and the vendor who delivers it. Projects fail most often not on technology but on stakeholders: the users were never asked, the owner never decided, or nobody owned the result.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A project is temporary, unique, and constrained by scope, time, and cost. If it has no end date and no defined result, it is not a project — it is a wish with a budget.</div>"
    },
    {
      "heading": "The Five Phases",
      "html": "\n<p>Every project moves through five phases. <strong>Initiation:</strong> why are we doing this, who owns it, and is it worth doing at all? The output is a short charter — the goal, the owner, and the rough budget. <strong>Planning:</strong> what exactly will be delivered, in what order, by whom, and by when? The output is a plan with a schedule and a budget. <strong>Execution:</strong> doing the work — building, configuring, training. <strong>Monitoring and control:</strong> tracking progress against the plan and correcting course, running alongside execution. <strong>Closure:</strong> handing the result over, checking it works, writing down what was learned, and ending the project properly.</p>\n<p>The phase small projects skip most is initiation — and it is the cheapest place to kill a bad idea. A one-page charter that forces the question \"what will be different when this is done, and how will we know?\" stops half of all doomed projects before they spend anything. The second most skipped is closure: the system goes live, nobody checks whether it delivered what was promised, and the lessons are lost.</p>\n<p>Monitoring deserves its own note: it is not a weekly meeting where everyone says \"fine.\" It is comparing what was planned with what actually happened — tasks done, money spent, risks arrived — and deciding what changes this week. A project without monitoring is a hope, not a plan.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Initiation kills bad ideas cheaply; closure proves the project delivered and keeps the lesson. Both are skipped more often than any other phase.</div>"
    },
    {
      "heading": "Breaking the Work Down: WBS and RACI",
      "html": "\n<p>A <strong>work breakdown structure (WBS)</strong> splits the project into small, deliverable pieces: the website project becomes \"design,\" \"content,\" \"build,\" \"test,\" \"launch,\" and each of those splits again until every piece is small enough to estimate and assign. The rule: if a piece cannot be estimated in days and assigned to one person, it is still too big. A WBS turns a scary project into a list of manageable jobs — and exposes the work everyone forgot, like writing the content and training the staff.</p>\n<p>A <strong>RACI</strong> chart assigns each piece four possible roles: <strong>Responsible</strong> (does the work), <strong>Accountable</strong> (owns the result — exactly one person per piece), <strong>Consulted</strong> (asked before the decision), and <strong>Informed</strong> (told after it). The most common failure is two people accountable for one thing, which means nobody is; or nobody responsible, which means the work waits for someone else.</p>\n<p><strong>Worked check:</strong> A shop's new website project has 12 weeks and a $12,000 budget. The WBS shows content writing needs 3 weeks, but nobody was assigned to write it. Step 1: the gap is found in planning, not in week 11. Step 2: the owner assigns it to one staff member for 4 hours a week, and the schedule holds. Found in planning, the fix is a line in a chart; found in week 11, it is a missed launch.</p>\n<div class=\"callout\"><strong>Key idea:</strong> One person accountable per piece, one person responsible per piece. If two people own it, nobody does.</div>"
    },
    {
      "heading": "Risks: Name Them Before They Arrive",
      "html": "\n<p>A <strong>risk</strong> is an uncertain event that, if it happens, changes the project — the vendor is late, the data is dirtier than expected, the key staff member leaves, the requirements change. The habit is to list the risks early, judge each by likelihood and impact, and write a response: avoid it, reduce it, or accept it with a plan for the day it arrives.</p>\n<p>Three risks sink small technology projects more than any others. <strong>Scope creep</strong> — small additions, each reasonable, that quietly double the project: prevented by a written scope and a rule that every addition is priced and approved. <strong>Dirty data</strong> — the migration discovers the customer list is a mess: prevented by checking a sample of the data before promising a date. <strong>The missing user</strong> — the system is built for people who were never asked: prevented by involving users from initiation, not at go-live.</p>\n<p>None of these needs a formal risk register with fifty rows. A one-page list of the five biggest risks, reviewed weekly, catches almost everything that actually goes wrong. The discipline is writing them down before they happen — after they happen, they are not risks, they are the project.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Scope creep, dirty data, and the missing user sink most small technology projects. All three are preventable — by a written scope, a data sample checked early, and users involved from day one.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A project is temporary, unique, and defined by scope, time, cost, and quality; operations are the repeating work.</li>\n<li>Five phases: initiation, planning, execution, monitoring and control, closure — and initiation and closure are the most skipped.</li>\n<li>The triple constraint: move one of scope, time, or cost and another must give.</li>\n<li>A WBS breaks work into estimable, assignable pieces; a RACI gives each piece one accountable owner.</li>\n<li>List the five biggest risks early, and review them weekly — scope creep, dirty data, and the missing user first.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a system change as \"something we will fit in around the real work.\" A project needs an owner, an end date, and a defined result — or it will drift forever and be declared done the day people stop asking.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Two people accountable for the same piece of work. Accountability shared is accountability lost. One name per piece, written down, or the work waits for someone else.</div>\n<p><strong>Note on credentials:</strong> Project management has professional certifications, including PMI's CAPM — but they require formal education hours and an exam through PMI, and this course alone does not make anyone eligible. The business capstone's study guide explains the eligibility rules; this module teaches the fundamentals that make the further study make sense.</p>\n<p><strong>Next step:</strong> Module 12 pulls the whole course together — the digital business, end to end.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Project",
      "def": "A temporary effort to create a unique result, with a beginning, an end, and defined scope, time, and cost."
    },
    {
      "term": "Operations",
      "def": "The ongoing, repeating work that keeps a business running day to day."
    },
    {
      "term": "Triple constraint",
      "def": "Scope, time, and cost — changing one affects the others, with quality as the standard at stake."
    },
    {
      "term": "Stakeholder",
      "def": "Anyone affected by a project or able to affect it: owners, users, customers, vendors."
    },
    {
      "term": "Project charter",
      "def": "A short document authorizing a project: its goal, owner, and rough budget."
    },
    {
      "term": "Work breakdown structure (WBS)",
      "def": "A hierarchical split of a project into small, deliverable pieces that can be estimated and assigned."
    },
    {
      "term": "RACI",
      "def": "A chart assigning each task a Responsible doer, one Accountable owner, Consulted people, and Informed people."
    },
    {
      "term": "Scope",
      "def": "What a project will — and will not — deliver."
    },
    {
      "term": "Scope creep",
      "def": "Uncontrolled growth of a project's scope through small, unapproved additions."
    },
    {
      "term": "Milestone",
      "def": "A significant point in a project schedule, such as a delivery or a decision date."
    },
    {
      "term": "Risk",
      "def": "An uncertain event that, if it happens, changes the project's outcome."
    },
    {
      "term": "Gantt chart",
      "def": "A bar chart showing project tasks against time, used to plan and track a schedule."
    },
    {
      "term": "Sprint",
      "def": "A short, fixed cycle of work in agile delivery, usually one to four weeks."
    },
    {
      "term": "Closure",
      "def": "The final project phase: handing over the result, checking it works, and recording lessons learned."
    }
  ],
  "video": {
    "title": "What is project management?",
    "embedUrl": "https://www.youtube.com/embed/Jk-JwtScIlw",
    "note": "The Association for Project Management's plain-language answer to 'what is project management?' — what it is, when to use it, and why it matters. Watch it, then test this module's five phases against a project you have seen.",
    "more": [
      {
        "title": "What Is Project Management ?",
        "url": "https://www.youtube.com/watch?v=G4007OgrM5Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop wants to 'improve the website' with no end date, no budget, and no list of what will change. Explain why this is not a project, and rewrite it as one in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is not a project because it has no defined result, no end, and no constraints — it is ongoing improvement work. Step 2: Rewrite — 'By March 31, for $6,000, we will rebuild the website with online ordering, new product photos, and a checkout that takes under two minutes; the owner is accountable and the result is measured by online orders in April.' Step 3: Now it has scope, time, cost, an owner, and a test of success.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A website project has 12 weeks and a $12,000 budget. In week 6, the owner adds a customer forum (scope), but refuses to add time or money. Use the triple constraint to explain what must give, and name two options.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The triple constraint says scope, time, and cost are linked — adding scope with time and cost fixed means quality or the deadline must give. Step 2: Option one: extend the deadline by two weeks and keep the budget. Step 3: Option two: cut something else of equal size — for example, drop the photo gallery — to hold the date. Step 4: Pretending nothing gives is the option that produces a late, buggy launch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Build a mini-WBS for 'launch online ordering': list six work pieces, and state who is Accountable for each (one name per piece).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The six pieces are: (1) write the product list and prices — Accountable: the owner; (2) photograph the products — Accountable: the shop manager; (3) build the ordering pages — Accountable: the web developer; (4) connect payment processing — Accountable: the web developer; (5) test orders end to end — Accountable: the shop manager; (6) train staff on the new process — Accountable: the owner. Step 2: Each piece has exactly one accountable name, so nothing waits for 'someone' to do it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A project's risk list has three items: vendor may be 2 weeks late (likely, high impact), data may be dirty (very likely, medium impact), staff may resist the new system (likely, high impact). For each, name one response: avoid, reduce, or accept with a plan.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Late vendor — reduce: agree a penalty clause and a backup vendor for the critical parts. Step 2: Dirty data — reduce: check a 200-record sample now, clean it before migration, and budget the cleaning time. Step 3: Staff resistance — reduce: involve two staff in the design from week one and train them first, so they become the system's advocates. Step 4: None of these is 'accept and hope' — each has a concrete action with an owner.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A project is '95% done' for the third week in a row. Diagnose the problem and name the monitoring habit that would have caught it earlier.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The diagnosis is that progress was never measured against a plan — '95% done' is a feeling, not a count of finished deliverables. Step 2: The habit is weekly monitoring of real evidence: tasks actually completed against the WBS, money actually spent against the budget, and risks actually arrived. Step 3: If the plan says 10 of 12 pieces are done, the project is 10 of 12 done — and the missing pieces are named, not felt.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm finished a new ordering system but skipped closure: no handover check, no lessons recorded. Name two things that will go wrong, and the two closure steps that would have prevented them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Without a handover check, nobody confirms the system actually delivers what was promised — a missing report or a broken link is discovered by a customer, not by the project. Step 2: Without recorded lessons, the next project repeats the same mistakes — the same dirty data, the same late vendor. Step 3: The closure steps are a handover checklist signed by the owner (does it do what the charter promised?) and a one-page lessons note (what worked, what did not, what to do differently next time).</p>"
    }
  ],
  "quiz": [
    {
      "q": "A project differs from operations mainly because a project is:",
      "choices": [
        "Bigger",
        "Temporary and unique, with a defined end and result",
        "Done by managers only",
        "Always about technology"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Temporary and unique with a beginning, end, and defined result is the definition. (a) size is not the test — small projects exist. (c) projects involve many roles. (d) projects exist in every field."
    },
    {
      "q": "The triple constraint consists of:",
      "choices": [
        "People, process, technology",
        "Scope, time, and cost",
        "Plan, do, check",
        "Hardware, software, data"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Scope, time, and cost are linked — move one and another must give. (a) is the five parts of a system minus two. (c) is the PDCA cycle. (d) is system components."
    },
    {
      "q": "Adding scope to a project without adding time or money will:",
      "choices": [
        "Improve quality automatically",
        "Force quality or the deadline to give way",
        "Have no effect",
        "Reduce the cost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The triple constraint guarantees the trade-off. (a) is the opposite of what happens. (c) denies the constraint. (d) adding work does not reduce cost."
    },
    {
      "q": "In a RACI chart, the Accountable person is:",
      "choices": [
        "Everyone on the team",
        "The single person who owns the result of a piece of work",
        "The person who is told after the fact",
        "The vendor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exactly one person is accountable per piece — shared accountability is no accountability. (a) confuses accountable with involved. (c) describes Informed. (d) the vendor may be Responsible, rarely Accountable for the business result."
    },
    {
      "q": "The five project phases in order are:",
      "choices": [
        "Planning, initiation, execution, closure, monitoring",
        "Initiation, planning, execution, monitoring and control, closure",
        "Execution, planning, initiation, monitoring, closure",
        "Initiation, execution, planning, closure, monitoring"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Initiate, plan, execute (with monitoring alongside), then close. (a) puts planning before initiation. (c) and (d) scramble the order — you cannot execute what has not been planned."
    },
    {
      "q": "Scope creep is:",
      "choices": [
        "A project finishing early",
        "Uncontrolled growth of scope through small, unapproved additions",
        "A vendor delivering late",
        "A budget cut"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each addition seems small and reasonable, but together they double the project. (a) is early delivery. (c) is a schedule risk, not scope growth. (d) is a cost change."
    },
    {
      "q": "The cheapest place to kill a bad project idea is:",
      "choices": [
        "During execution",
        "At go-live",
        "In initiation, with a one-page charter asking what will be different",
        "During maintenance"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Initiation forces the value question before anything is spent. (a) and (b) are far too late and expensive. (d) is after the money is gone."
    },
    {
      "q": "A WBS is useful mainly because it:",
      "choices": [
        "Makes the project look bigger",
        "Splits work into small pieces that can be estimated, assigned, and tracked",
        "Replaces the need for a budget",
        "Assigns blame when things go wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Small, deliverable pieces expose forgotten work and make progress measurable. (a) is not a purpose. (c) the WBS feeds the budget, it does not replace it. (d) is not a project-management purpose."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Technology Project Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> A project is temporary, unique, and defined by scope, time, cost, and quality. Operations are the repeating work. Confusing the two is why system changes drift forever.</p>\n<p><strong>Five phases:</strong> initiation (charter — kill bad ideas cheaply) · planning (WBS, schedule, budget) · execution · monitoring and control (planned vs. actual, weekly) · closure (handover check + lessons).</p>\n<p><strong>Triple constraint:</strong> move scope, time, or cost and another must give. <strong>RACI:</strong> one Accountable owner per piece, one Responsible doer per piece.</p>\n<p><strong>Watch out:</strong> Scope creep (small additions, no approval), dirty data (check a sample before promising a date), and the missing user (involve users from initiation, not at go-live).</p>\n<p><strong>Credentials note:</strong> Project management certifications such as PMI's CAPM require formal education hours and an exam through PMI — this course teaches the fundamentals; it does not by itself make anyone eligible. The capstone study guide states the eligibility rules.</p>\n<p><strong>Self-check:</strong> Take a system change you have seen and write its one-page charter: goal, owner, scope, end date, budget, and the five biggest risks.</p>\n"
};
