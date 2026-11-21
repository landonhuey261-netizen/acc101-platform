module.exports = {
  "number": 6,
  "slug": "a-plus-core-2-review-software-troubleshooting-ops",
  "title": "A+ Core 2 Review: Software Troubleshooting & Operational Procedures",
  "estTime": "3–4 hours",
  "objectives": [
    "Troubleshoot Windows problems: slow performance, boot failures, app crashes, and update errors.",
    "Apply the malware-removal process and know when a clean install is the right answer.",
    "Explain backup types (full, incremental, differential) and recovery options.",
    "Follow operational procedures: change management, ticketing, documentation, and incident response.",
    "Apply safety, environmental, and professionalism rules on the job."
  ],
  "sections": [
    {
      "heading": "Troubleshooting Windows, Step by Step",
      "html": "<p>Core 2 troubleshooting is the same six-step method from Module 3, applied to software. <strong>Slow performance:</strong> check Task Manager for a runaway process, check disk space (a nearly full drive slows everything), check startup programs, and scan for malware. <strong>An app crashes:</strong> restart the app, check for updates, reinstall it, then check Event Viewer for the error. <strong>Windows will not boot:</strong> try Safe Mode, roll back the last driver, run Startup Repair, then System Restore.</p>\n<p><strong>Update errors:</strong> check the connection and disk space, run the Windows Update troubleshooter, and check the error code online. <strong>Blue screen (BSOD):</strong> note the stop code, think about what changed (a new driver or new hardware is the usual suspect), and check the memory if the codes keep changing. <strong>No internet after an update:</strong> check the network adapter in Device Manager and roll back its driver. The pattern is always the same: what changed, what is the simplest cause, test it, then fix it.</p>"
    },
    {
      "heading": "Backups and Recovery: The Three Types",
      "html": "<p>There are three backup types, and the exam asks about all of them. A <strong>full backup</strong> copies everything — slowest to run, fastest to restore, because one backup holds it all. An <strong>incremental backup</strong> copies only what changed since the last backup of any kind — fastest to run, slowest to restore, because you need the full backup plus every incremental since. A <strong>differential backup</strong> copies everything changed since the last full backup — in the middle on both counts, and restores from the full backup plus the latest differential only.</p>\n<p>Test the restore: a backup you have never restored from is a hope, not a backup. Keep a copy off site or in the cloud, because a backup sitting next to the PC dies in the same fire or flood. <strong>Recovery options</strong> in Windows include System Restore (settings and system files), File History (personal files), Startup Repair (boot problems), and a full reset. A <strong>recovery drive</strong> is a USB stick that can reinstall or repair Windows when the PC will not boot at all.</p>"
    },
    {
      "heading": "Operational Procedures: Change, Tickets, and Documentation",
      "html": "<p>Real IT work runs on procedure. <strong>Change management</strong> is the formal process for changing a system: request the change, get approval, plan it, test it, schedule it (usually outside business hours), implement it, and document the result. The point is that nobody changes a working system on a whim — an unapproved change that breaks something is a career problem. A <strong>change advisory board</strong> reviews bigger changes.</p>\n<p>A <strong>ticketing system</strong> tracks every problem: the user reports it, the ticket is categorised and prioritised, it is assigned, worked, and closed — with the fix documented. <strong>Incident response</strong> is the plan for a security event: identify, contain, eradicate, recover, and learn lessons. <strong>Documentation</strong> means writing down network diagrams, passwords in a password manager (never on paper under a keyboard), asset lists, and what you changed. If it is not written down, it did not happen — and the next technician will repeat your work.</p>"
    },
    {
      "heading": "Safety, Environment, and Professionalism",
      "html": "<p>Safety first, always. <strong>ESD (electrostatic discharge)</strong> can kill components: wear an anti-static wrist strap, work on an anti-static mat, and touch the case to ground yourself before handling parts. <strong>Power safety:</strong> unplug before opening a case, and never open a PSU or a monitor — capacitors inside hold a charge. <strong>Lifting:</strong> bend your knees, not your back; a server is heavier than it looks. <strong>MSDS (material safety data sheets)</strong> tell you how to handle chemicals such as toner and cleaning solvents safely.</p>\n<p>Look after the environment too: recycle batteries, toner, and old equipment through proper e-waste channels — never bin a battery or a drive with customer data. <strong>Professionalism</strong> is part of the exam: be on time, communicate clearly, explain in plain language, respect the user's privacy, never look through their files, and follow up after the fix. When you do not know something, say so and find out — guessing and breaking something is worse than asking. Treat every user with respect, even when the problem was caused by something they did.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Windows troubleshooting: slow — Task Manager, disk space, startup, malware; crash — restart, update, reinstall, Event Viewer; will not boot — Safe Mode, roll back driver, Startup Repair, System Restore.</li><li>Backups: full (slow to run, fast to restore), incremental (fast to run, slow to restore), differential (middle, restore from full + latest differential). Test the restore.</li><li>Change management: request, approve, plan, test, schedule, implement, document. Ticketing tracks every problem. Incident response: identify, contain, eradicate, recover, learn.</li><li>Safety: ESD strap and mat, unplug before opening, never open a PSU, MSDS for chemicals, recycle e-waste. Professionalism: plain language, privacy, follow up.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Restoring an incremental backup from only the latest file — you need the full backup plus every incremental since.</div><div class=\"callout\"><strong>Common mistake:</strong> Making an unapproved change to a working system. Change management exists so one person's fix does not become everyone's outage.</div>\n<p><strong>Ready-to-Work link:</strong> If you can choose the right backup type, walk through change management, and state the safety rules, you have Core 2. Module 7 switches to Adobe: Photoshop tools, layers, and selections.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "BSOD",
      "def": "Blue Screen of Death: a Windows crash screen with a stop code; note the code and think about what changed."
    },
    {
      "term": "Full backup",
      "def": "A backup that copies everything; slowest to run, fastest to restore."
    },
    {
      "term": "Incremental backup",
      "def": "A backup of only what changed since the last backup of any kind; fastest to run, slowest to restore."
    },
    {
      "term": "Differential backup",
      "def": "A backup of everything changed since the last full backup; restores from the full plus the latest differential."
    },
    {
      "term": "File History",
      "def": "A Windows feature that keeps copies of personal files so an earlier version can be restored."
    },
    {
      "term": "Recovery drive",
      "def": "A USB stick that can reinstall or repair Windows when the PC will not boot."
    },
    {
      "term": "Change management",
      "def": "The formal process for changing a system: request, approve, plan, test, schedule, implement, document."
    },
    {
      "term": "Change advisory board",
      "def": "A group that reviews and approves bigger changes before they are made."
    },
    {
      "term": "Ticketing system",
      "def": "Software that tracks problems from report to fix, with priority, assignment, and documentation."
    },
    {
      "term": "Incident response",
      "def": "The plan for a security event: identify, contain, eradicate, recover, and learn lessons."
    },
    {
      "term": "ESD",
      "def": "Electrostatic discharge: static electricity that can destroy components; prevented with a wrist strap and mat."
    },
    {
      "term": "MSDS",
      "def": "Material safety data sheets: instructions for handling chemicals such as toner and cleaning solvents safely."
    },
    {
      "term": "E-waste",
      "def": "Electronic waste: old equipment, batteries, and toner that must be recycled through proper channels."
    },
    {
      "term": "Least privilege",
      "def": "Giving each user only the access they need for their job — no more."
    }
  ],
  "video": {
    "title": "Troubleshooting Windows — CompTIA A+ 220-1202 (Professor Messer)",
    "embedUrl": "https://www.youtube.com/embed/qIenQsBAg2U",
    "note": "Professor Messer works through Windows troubleshooting step by step. As you watch, note which tool he reaches for at each stage, and when he chooses Safe Mode.",
    "more": [
      {
        "title": "Troubleshooting Security Issues — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=OCLOLvwgdMY"
      },
      {
        "title": "Change Management — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=AhcQlR73Bo4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PC takes ten minutes to become usable after login. Task Manager shows 14 programs launching at startup. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Open Task Manager's Startup tab. Step 2: Disable the programs the user does not need at login — leave security software enabled. Step 3: Restart and time the login again. Step 4: If it is still slow, check disk space and run a malware scan. Step 5: Document what was disabled, in case the user misses one of them.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A company backs up with a full backup on Sunday, then incremental backups Monday to Friday. A file is lost on Friday. Which backups are needed to restore it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The Sunday full backup. Step 2: Every incremental from Monday through Friday — incremental restores need the full backup plus all incrementals since. Step 3: That is why incremental is fast to run but slow to restore. Step 4: If it had been a differential backup, only the full plus Friday's differential would be needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A technician wants to update the firewall rules on a Friday afternoon during business hours, without asking anyone. What is wrong with this plan?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It skips change management — no request, no approval, no plan, no test, no schedule. Step 2: A wrong rule could block the whole office during business hours. Step 3: The correct process is to request the change, get approval, test it, and schedule it outside business hours. Step 4: Then implement it and document the result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A user reports a virus warning, pop-ups, and a changed homepage. List the malware-removal steps in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Identify the symptoms. Step 2: Quarantine the system — disconnect it from the network. Step 3: Disable System Restore so malware cannot hide in restore points. Step 4: Remediate with anti-malware tools in Safe Mode. Step 5: Schedule scans and run updates. Step 6: Enable System Restore and create a new restore point. Step 7: Educate the user.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Before replacing RAM in a desktop, what safety steps do you take, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power off and unplug the PC. Step 2: Wear an anti-static wrist strap or touch the case to ground yourself — ESD can destroy the RAM. Step 3: Work on an anti-static mat if you have one. Step 4: Handle the RAM by its edges, never by the gold contacts. Step 5: Never open the PSU while you are inside the case.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A blue screen appears after a new graphics driver is installed, and the stop code is the same every time. What is the most likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The new driver is the likely cause — the fault started right after it was installed. Step 2: Boot into Safe Mode. Step 3: Roll back the driver in Device Manager. Step 4: Restart normally and verify the blue screen is gone. Step 5: If it returns, uninstall the driver and install the previous known-good version.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A full backup is taken on Sunday, then incrementals Monday to Friday. To restore Friday's data you need:",
      "choices": [
        "Only Friday's incremental",
        "The full backup plus every incremental since",
        "Only the full backup",
        "Only Monday's incremental"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Incremental restores need the full backup plus every incremental since it. (a) is wrong: a single incremental only holds one day's changes. (c) is wrong: the full backup alone only holds Sunday's data. (d) is wrong: Monday's incremental alone holds only Monday's changes."
    },
    {
      "q": "Which backup type restores from the full backup plus only the latest backup?",
      "choices": [
        "Full",
        "Incremental",
        "Differential",
        "Mirror"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A differential holds everything changed since the last full, so full plus the latest differential is enough. (a) is wrong: a full backup restores by itself. (b) is wrong: incremental needs every incremental since the full. (d) is wrong: a mirror is a copy, not a backup type in this list."
    },
    {
      "q": "What is the FIRST step of change management?",
      "choices": [
        "Implement the change",
        "Request the change and get approval",
        "Schedule it for Friday",
        "Document the result"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Change starts with a request and approval before anything is planned or done. (a) is wrong: implementing comes after planning, testing, and scheduling. (c) is wrong: scheduling comes later, and Friday during business hours is the wrong time. (d) is wrong: documenting is the last step."
    },
    {
      "q": "What does ESD stand for, and how do you prevent it?",
      "choices": [
        "Electronic system damage — unplug the PC",
        "Electrostatic discharge — wrist strap, anti-static mat, ground yourself",
        "Emergency shutdown — pull the plug",
        "External storage device — use a USB stick"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ESD is static electricity that can destroy components; a wrist strap and mat prevent it. (a) is wrong: that is not what ESD means. (c) is wrong: an emergency shutdown is not ESD prevention. (d) is wrong: an external storage device is a drive, not a safety issue."
    },
    {
      "q": "A PC blue-screens right after a new driver is installed. What is the best first fix?",
      "choices": [
        "Replace the hard drive",
        "Boot into Safe Mode and roll back the driver",
        "Reinstall Windows",
        "Buy more RAM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fault started with the driver, so Safe Mode and a roll-back is the right first fix. (a) is wrong: the hard drive did not change. (c) is wrong: reinstalling Windows is a last resort, not a first step. (d) is wrong: more RAM does not fix a bad driver."
    },
    {
      "q": "What is the correct order of incident response?",
      "choices": [
        "Recover, identify, contain, eradicate, learn",
        "Identify, contain, eradicate, recover, learn",
        "Eradicate, identify, recover, contain, learn",
        "Contain, learn, identify, recover, eradicate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Incident response runs identify, contain, eradicate, recover, then learn lessons. (a) is wrong: you cannot recover before you know what happened. (c) is wrong: eradicating before identifying wastes effort and may miss the cause. (d) is wrong: learning comes last, after recovery."
    },
    {
      "q": "Why should you test a backup restore?",
      "choices": [
        "It makes the backup smaller",
        "A backup you have never restored from is a hope, not a backup — it may fail when you need it",
        "It is required by law everywhere",
        "It speeds up the PC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Untested backups often fail; testing proves the restore works. (a) is wrong: testing does not shrink the backup. (c) is wrong: testing is best practice, not a universal legal requirement. (d) is wrong: testing a restore does not speed up the PC."
    },
    {
      "q": "A user reports a problem by phone. What should the technician do first?",
      "choices": [
        "Fix it immediately without writing anything down",
        "Log a ticket with the details, then work the problem",
        "Tell the user to email instead",
        "Restart the user's PC without asking"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Log a ticket first so the problem is tracked, categorised, and documented. (a) is wrong: fixing without a ticket loses the record. (c) is wrong: turning the user away is poor service. (d) is wrong: restarting without asking can lose the user's unsaved work."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — A+ Core 2 Review: Software Troubleshooting & Operational Procedures: Quick Reference</h3>\n<p><strong>Core idea:</strong> Same six steps, applied to software — and the procedures that stop one fix becoming everyone's outage.</p>\n<p><strong>Windows:</strong> Slow — Task Manager, disk space, startup, malware · crash — restart, update, reinstall, Event Viewer · will not boot — Safe Mode, roll back driver, Startup Repair, System Restore · BSOD — note the stop code, think what changed.</p>\n<p><strong>Backups:</strong> Full slow to run, fast to restore · incremental fast to run, slow to restore (needs all) · differential middle (full + latest) · test the restore.</p>\n<p><strong>Ops:</strong> Change — request, approve, plan, test, schedule, implement, document · tickets track everything · incident response: identify, contain, eradicate, recover, learn.</p>\n<p><strong>Safety:</strong> ESD strap and mat · unplug before opening · never open a PSU · MSDS for chemicals · recycle e-waste.</p>\n<p><strong>Watch out:</strong> Incremental restores need every incremental; unapproved changes break working systems.</p>\n<p><strong>Self-check:</strong> Choose the right backup type for a scenario, walk through change management, and state the safety rules, without looking. If you can, you have this module.</p>\n"
};
