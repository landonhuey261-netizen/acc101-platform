// bus201 - Module 10: From Spreadsheets to Systems: Automating the Routine
module.exports = {
  "number": 10,
  "slug": "spreadsheets-to-systems-automation",
  "title": "From Spreadsheets to Systems: Automating the Routine",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the spreadsheet skills that every business worker needs: formulas, lookups, pivot tables.",
    "Explain when a spreadsheet is the right tool and when it has become the wrong one.",
    "Describe how automation works: triggers, rules, and integrations between apps.",
    "Work the payback of automating one routine task in hours and dollars.",
    "Design a simple automation for a real routine task, with a named owner and a check."
  ],
  "sections": [
    {
      "heading": "The Spreadsheet: Still the Most Useful Tool in Business",
      "html": "\n<p>Before a business buys any system, it runs on spreadsheets — and the skills transfer everywhere. The essentials are <strong>formulas</strong> (a cell that computes from other cells, such as =SUM or =AVERAGE), <strong>lookups</strong> (finding a price or a name from a list, such as XLOOKUP or VLOOKUP), and <strong>pivot tables</strong> (summarizing thousands of rows into a small table by category — sales by product, by month, by region — in seconds).</p>\n<p>The discipline matters as much as the features. One tab for raw data, never typed over; one tab for the workings, with formulas visible; one tab for the results. No numbers typed into a formula — put the rate in a cell and point at it, so the next person can see it and change it. And every spreadsheet that matters gets a named owner, a backup, and a check: does this month's total tie to the bank, the till, or the system of record?</p>\n<p>A well-built spreadsheet is honest work. A spreadsheet that has grown into the company's ordering, invoicing, and stock system is a system wearing a spreadsheet's clothes — which is the subject of the next section.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Put inputs in cells, not inside formulas. A formula that hides its numbers cannot be checked, and a spreadsheet that cannot be checked cannot be trusted.</div>"
    },
    {
      "heading": "When the Spreadsheet Becomes the Problem",
      "html": "\n<p>Spreadsheets break down as systems in four predictable ways. <strong>One person:</strong> only one employee understands the file, and when they are away, nobody can run the business. <strong>One copy:</strong> the file is emailed around, versions multiply, and nobody knows which is current. <strong>One mistake:</strong> a single wrong cell — a mistyped price, a deleted row — silently flows into every total. <strong>One limit:</strong> the file cannot talk to the till, the website, or the bank, so every fact is retyped by hand.</p>\n<p>The test for graduation is simple: if more than one person updates the same facts, if an error could cost real money, or if the same facts are retyped into another system, the work has outgrown the spreadsheet. That is the moment to move the facts into a database or an application — Module 3's system of record — and keep the spreadsheet for what it is good at: analysis.</p>\n<p>Graduation is not failure. A spreadsheet that carried a business from zero to fifty customers did its job. The mistake is keeping it two years past its limit because \"it still works\" — right up to the week it does not.</p>\n<div class=\"callout\"><strong>Key idea:</strong> When more than one person updates the same facts, or the same facts are retyped elsewhere, the spreadsheet has become a system — and systems belong in a database or an application.</div>"
    },
    {
      "heading": "Automation: Triggers, Rules, and Integrations",
      "html": "\n<p><strong>Automation</strong> is a rule that does routine work without a person: when this happens, do that. A <strong>trigger</strong> starts it (a new order arrives), a <strong>rule</strong> decides what happens (if the order is over $100, add free shipping), and an <strong>action</strong> carries it out (send the confirmation email, update the stock). Tools such as Zapier, Microsoft Power Automate, and built-in app integrations connect systems that were never designed to talk to each other.</p>\n<p>The best automations are boring: copy the new order into the accounts, remind the customer the day before an appointment, file the invoice in the right folder, warn when stock falls below its reorder level. Each one saves minutes, and minutes add up. The dangerous automations are the ones nobody watches: an auto-reply that sends the wrong price, an auto-order that buys stock nobody needs. Every automation needs a named owner and a regular check that it is still doing the right thing.</p>\n<p>Start with the task that is done most often and hurts most when it is late or wrong. Automate one step, watch it for two weeks, then automate the next. A business that automates ten small things gains more than one that attempts a single grand project and abandons it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Automate the most frequent, most boring task first. Small automations that are watched beat grand projects that are abandoned.</div>"
    },
    {
      "heading": "The Payback: Hours Into Dollars",
      "html": "\n<p>Automation is justified the same way as any system: hours saved, times their cost, against the cost of building it. <strong>Worked example.</strong> A manager spends 6 hours a week assembling the weekly sales report by hand — copying numbers from the till, the website, and the card machine into a spreadsheet. An automated report pulls the same numbers itself and takes 30 minutes a week to check.</p>\n<p>Step 1: time saved per week = 6 − 0.5 = 5.5 hours. Step 2: over 50 working weeks, that is 5.5 × 50 = 275 hours a year. Step 3: at a loaded cost of $28 an hour, the saving is 275 × $28 = $7,700 a year. Step 4: if the automation costs $1,500 to set up, it pays for itself in about ten weeks — and every week after that is pure saving, plus a report that is never late and never has a copying error.</p>\n<p>Note what the money does not capture: the manager's Friday afternoons, which now go to customers instead of copying numbers. The best automations do not just save money — they return attention to the work only people can do.</p>\n<div class=\"formula\">Annual saving = (Hours before − Hours after) × Weeks × Cost per hour</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Spreadsheet essentials: formulas, lookups, pivot tables — with inputs in cells, not hidden inside formulas.</li>\n<li>A spreadsheet becomes a problem when one person owns it, versions multiply, one mistake flows everywhere, or facts are retyped into other systems.</li>\n<li>Automation is trigger → rule → action; start with the most frequent, most boring task.</li>\n<li>Justify automation in hours and dollars: (hours before − hours after) × weeks × cost per hour.</li>\n<li>Every automation needs a named owner and a regular check that it still does the right thing.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Typing numbers inside formulas, like =1200*1.2, instead of pointing at a cell that holds the rate. When the rate changes, nobody can find it — and the next person cannot check the work.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Automating a broken process. If the manual steps are confused, automation makes the confusion faster. Fix the process first — write down the steps, remove the waste — then automate the clean version.</div>\n<p><strong>Next step:</strong> Module 11 is about running technology work as a project — the basics of planning, people, and delivery that every system change needs.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Formula",
      "def": "A cell in a spreadsheet that computes a value from other cells, such as =SUM(A1:A12)."
    },
    {
      "term": "Lookup",
      "def": "A spreadsheet function that finds a value in a table, such as XLOOKUP or VLOOKUP."
    },
    {
      "term": "Pivot table",
      "def": "A spreadsheet tool that summarizes many rows into a small table grouped by categories."
    },
    {
      "term": "Automation",
      "def": "Using technology to perform a routine task without human effort, following defined rules."
    },
    {
      "term": "Trigger",
      "def": "The event that starts an automation, such as a new order arriving."
    },
    {
      "term": "Integration",
      "def": "A connection that lets two applications share data and work together automatically."
    },
    {
      "term": "Workflow",
      "def": "The defined sequence of steps by which work moves from start to finish."
    },
    {
      "term": "Macro",
      "def": "A recorded or written set of steps that a spreadsheet or application can replay automatically."
    },
    {
      "term": "Power Query",
      "def": "A tool for importing, cleaning, and reshaping data automatically before it reaches a spreadsheet."
    },
    {
      "term": "RPA",
      "def": "Robotic process automation: software that mimics human clicks and keystrokes to perform routine computer tasks."
    },
    {
      "term": "Loaded cost (of labor)",
      "def": "The full hourly cost of an employee, including wages, taxes, and benefits — not just the wage."
    },
    {
      "term": "Payback period",
      "def": "How long a saving takes to repay the cost of setting it up."
    },
    {
      "term": "System of record",
      "def": "The authoritative place where a business keeps a particular set of facts."
    }
  ],
  "video": {
    "title": "Webinar: How to Automate Manual Work in Excel Without Coding (Part 2)",
    "embedUrl": "https://www.youtube.com/embed/PS0cdWgmYvU",
    "note": "Shows real Excel workflows being automated without code — files arriving by email, data blended from spreadsheets, reports scheduled and sent. Watch for the pattern in this module: trigger, rule, action — and a check that it still works.",
    "more": [
      {
        "title": "Still Spending Hours on Excel Reports? Here's How AI Can Help You Work Faster. | ZaranTech",
        "url": "https://www.youtube.com/watch?v=7l252HqCsn8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A manager spends 6 hours a week building a sales report by hand. An automated report takes 30 minutes a week to check. (a) How many hours a year are saved over 50 weeks? (b) At $28 an hour, what is the annual dollar saving? (c) If setup costs $1,500, how many weeks until payback?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Saving per week = 6 − 0.5 = 5.5 hours. Over 50 weeks: 5.5 × 50 = <strong>275 hours a year</strong>. Step 2: (b) 275 × $28 = <strong>$7,700 a year</strong>. Step 3: (c) Weekly saving = 5.5 × $28 = $154. Payback = $1,500 ÷ $154 = 9.7 weeks, about <strong>10 weeks</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A spreadsheet formula reads =1200*1.2 and the 1.2 is the tax rate. Explain what is wrong and rewrite it properly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The rate is hidden inside the formula — nobody reading the sheet can see what 1.2 means, and when the rate changes, the person must hunt through every formula. Step 2: Rewrite: put the rate in a named cell, say B2 = 1.2 (or better, 0.2 as the rate, labelled 'Tax rate'), and write the formula as =A1*(1+B2) or =A1+A1*B2. Step 3: Now the rate is visible, labelled, and changed in one place.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A shop's order spreadsheet is emailed between three staff, and last week two different versions were used to place orders. Name the failure and the system that fixes it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The failure is <strong>one copy / version chaos</strong> — the spreadsheet has no single current version and no rules. Step 2: The fix is to move the order facts into a shared system of record (an inventory or ordering application, or a shared database) where everyone works on the same live record. Step 3: The spreadsheet can stay for analysis — reading the data, not owning it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Design an automation for appointment reminders: name the trigger, the rule, the action, the owner, and the check.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Trigger — a new appointment is booked, or the day before an appointment arrives. Step 2: Rule — if the appointment is tomorrow and no reminder has been sent, send one; if the customer has opted out of texts, send an email instead. Step 3: Action — the message goes out with the date, time, and address. Step 4: Owner — the receptionist, who checks the sent list each morning. Step 5: Check — once a month, compare no-shows before and after the automation; if reminders are bouncing or going to the wrong number, fix the contact data first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A clerk spends 45 minutes a day copying website orders into the accounts system — 5 days a week, 50 weeks a year — at $22 an hour. (a) What does the copying cost a year? (b) An integration costs $900 once. What is the first-year saving?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Hours a year = 0.75 × 5 × 50 = 187.5 hours. Cost = 187.5 × $22 = <strong>$4,125 a year</strong>. Step 2: (b) First-year saving = $4,125 − $900 = <strong>$3,225</strong>, and the copying errors disappear too.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm wants to automate its invoicing, but invoices are currently created five different ways by five people, with no agreed steps. Explain why automation should wait, and what must happen first.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Automating a confused process makes the confusion faster — the automation would have to guess which of five ways is right, and it will guess wrong. Step 2: First, agree on one invoicing process: the steps, the owner, the checks. Step 3: Run the clean process manually for a few weeks until it works, then automate that version — one step at a time, with a named owner and a check.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A pivot table is used to:",
      "choices": [
        "Store customer passwords",
        "Summarize thousands of rows into a small table grouped by categories",
        "Send emails automatically",
        "Back up a database"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pivot tables aggregate data — sales by product, by month, by region — in seconds. (a) is a security matter. (c) is automation. (d) is a backup task."
    },
    {
      "q": "A manager saves 5.5 hours a week for 50 weeks at $28 an hour. The annual saving is:",
      "choices": [
        "$154",
        "$2,750",
        "$7,700",
        "$15,400"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 5.5 × 50 = 275 hours; 275 × $28 = $7,700. (a) is one week's saving in dollars. (b) is 275 hours at $10. (d) doubles the right answer."
    },
    {
      "q": "Putting a tax rate inside a formula, like =1200*1.2, is bad because:",
      "choices": [
        "It makes the formula shorter",
        "The rate is hidden, cannot be checked, and must be hunted down in every formula when it changes",
        "Spreadsheets cannot multiply",
        "It uses too much memory"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inputs belong in labelled cells so they are visible and changed in one place. (a) brevity is not the goal — checkability is. (c) is false. (d) is irrelevant."
    },
    {
      "q": "An automation's trigger is:",
      "choices": [
        "The person who checks the automation",
        "The event that starts it, such as a new order arriving",
        "The cost of setting it up",
        "The software vendor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The trigger is the 'when this happens' that starts the rule. (a) is the owner. (c) is the setup cost. (d) is the supplier."
    },
    {
      "q": "A spreadsheet has become the wrong tool when:",
      "choices": [
        "One person uses it for a quick analysis",
        "More than one person updates the same facts, versions multiply, and facts are retyped into other systems",
        "It has more than 100 rows",
        "It uses formulas"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shared, retyped, version-chaos facts belong in a system of record. (a) is exactly what spreadsheets are for. (c) row count alone does not decide. (d) formulas are the point of a spreadsheet."
    },
    {
      "q": "Copying orders 45 minutes a day, 5 days a week, 50 weeks a year at $22 an hour costs:",
      "choices": [
        "$1,125",
        "$2,750",
        "$4,125",
        "$5,500"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 0.75 × 5 × 50 = 187.5 hours; 187.5 × $22 = $4,125. (a) is 187.5 hours at $6. (b) is 125 hours at $22. (d) is 250 hours at $22."
    },
    {
      "q": "The first step before automating a process should be:",
      "choices": [
        "Buy the automation tool",
        "Fix the process — agree one clean set of steps and run it manually first",
        "Automate everything at once",
        "Delete the old process immediately"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Automating a confused process makes the confusion faster. (a) buys the tool before knowing the job. (c) is the grand-project failure mode. (d) removes the fallback before the new way is proven."
    },
    {
      "q": "An automation costs $1,500 and saves $154 a week. Its payback is about:",
      "choices": [
        "1 week",
        "10 weeks",
        "50 weeks",
        "2 years"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $1,500 ÷ $154 = 9.7 weeks, about 10 weeks. (a) divides wrong. (c) is the working year. (d) is far beyond the payback."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — From Spreadsheets to Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Spreadsheets are for analysis — formulas, lookups, pivot tables — with inputs in labelled cells, never hidden inside formulas. When facts are shared, retyped, or version-chaotic, they graduate to a system of record.</p>\n<p><strong>Automation:</strong> trigger → rule → action. Start with the most frequent, most boring task. Every automation needs a named owner and a regular check.</p>\n<div class=\"formula\">Annual saving = (Hours before − Hours after) × Weeks × Cost per hour &nbsp;|&nbsp; Payback (weeks) = Setup cost ÷ Weekly saving</div>\n<p><strong>Watch out:</strong> Never automate a broken process — fix the steps first, run them manually, then automate the clean version. A well-built spreadsheet is honest work; a spreadsheet that has become the company's ordering system is a system in disguise.</p>\n<p><strong>Self-check:</strong> Pick one routine task you do weekly, work its payback in hours and dollars, and sketch its trigger, rule, action, owner, and check.</p>\n"
};
