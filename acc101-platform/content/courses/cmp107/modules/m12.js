// cmp107 - Module 12: Troubleshooting & Basic Admin
module.exports = {
  "number": 12,
  "slug": "troubleshooting-and-basic-admin",
  "title": "Troubleshooting & Basic Admin",
  "estTime": "3–4 hours",
  "objectives": [
    "Follow a step-by-step troubleshooting method for any computer problem.",
    "Diagnose common problems: no power, no internet, slow computer, frozen apps.",
    "Use built-in tools such as Event Viewer, Disk Management, and System Restore.",
    "Explain how to back up a computer and restore it after a failure.",
    "Document a fix so the next person can follow it."
  ],
  "sections": [
    {
      "heading": "A Method That Works Every Time",
      "html": "<p>Good troubleshooting is a method, not a talent. First, identify the problem: ask what changed, when it started, and what exactly happens. Second, form a theory about the most likely cause. Third, test the theory with the simplest check first. Fourth, fix it. Fifth, verify the fix works. Sixth, write down what you did.</p>\n<p>Always start with the simplest and cheapest checks: is it plugged in, is it switched on, is the cable firmly in, did something change recently? Experienced technicians check the obvious first, because the obvious is the cause more often than anyone admits.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Change one thing at a time. If you change three things and the problem goes away, you do not know which change fixed it, and you cannot help the next person with the same problem.</div></p>\n"
    },
    {
      "heading": "Common Problems and Their First Checks",
      "html": "<p>No power: check the power cable, the wall socket, and the power button, then try a different socket. No internet: check whether other devices are affected, restart the router, then test with a cable. Slow computer: open Task Manager, look for a program using all the memory or processor, and close it; check how full the disk is, because a disk over 90 percent full slows everything down.</p>\n<p>Frozen app: wait a few seconds, then use Task Manager to end it, then reopen it and save your work. Printer will not print: check power, paper, ink, the network connection, and the print queue for a stuck job. Sound not working: check the volume, the correct output device in Quick Settings, and whether the app is muted.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Keep a small notebook of problems you solve. The next time the same thing happens, you will have the answer in thirty seconds instead of thirty minutes.</div></p>\n"
    },
    {
      "heading": "Built-In Tools: Event Viewer, Disk Management, System Restore",
      "html": "<p>Windows includes tools for deeper problems. Event Viewer, found by typing Event Viewer in Start search, logs what the system and programs have been doing, including errors and warnings with timestamps. When a computer crashes, the log usually says why. Disk Management shows your drives and partitions, and lets you see whether a new USB drive is recognized at all.</p>\n<p>System Restore can roll Windows back to an earlier state, called a restore point, without touching your personal files. It is useful when a bad update or a bad driver breaks something. On a Mac, the equivalent safety net is Time Machine, and on Linux, your package manager can remove a bad update.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Use these tools one at a time and read what they say before clicking. A tool that can fix a computer can also damage it if used blindly, so look up any error message you do not understand before acting on it.</div></p>\n"
    },
    {
      "heading": "Backups, Restore, and Writing It Down",
      "html": "<p>The best fix for a disaster is a backup you made before it happened. On Windows, use File History or a full backup to an external drive. On a Mac, use Time Machine. On Linux, copy your home folder to an external drive regularly. Test the backup by restoring one file, because a backup you have never tested is only a hope.</p>\n<p>If Windows will not start, the recovery environment can repair the startup, roll back an update, or reset the computer while keeping your files. On a Mac, Recovery mode does the same job. Know how to reach these screens before you need them, not after.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> After every fix, write a short note: the symptom, the cause, the fix, and the date. That note is worth more than any single tool, because it turns one fix into knowledge you can reuse forever.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Follow a step-by-step troubleshooting method for any computer problem.</li>\n<li>Diagnose common problems: no power, no internet, slow computer, frozen apps.</li>\n<li>Use built-in tools such as Event Viewer, Disk Management, and System Restore.</li>\n<li>Explain how to back up a computer and restore it after a failure.</li>\n<li>Document a fix so the next person can follow it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Changing three things at once and not knowing which one fixed it. Change one thing, test, then move on.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Never testing a backup. Restore one file now, while everything works, so you know the backup is real.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Troubleshooting",
      "def": "Finding and fixing a problem by following a step-by-step method."
    },
    {
      "term": "Theory",
      "def": "A best guess about what is causing a problem, to be tested before acting."
    },
    {
      "term": "Event Viewer",
      "def": "The Windows tool that logs system and program errors and warnings."
    },
    {
      "term": "Disk Management",
      "def": "The Windows tool that shows drives and partitions."
    },
    {
      "term": "System Restore",
      "def": "The Windows feature that rolls the system back to an earlier restore point."
    },
    {
      "term": "Restore point",
      "def": "A saved snapshot of Windows settings used to undo a bad change."
    },
    {
      "term": "File History",
      "def": "The Windows backup tool that keeps copies of your files over time."
    },
    {
      "term": "Recovery environment",
      "def": "The special Windows startup mode used to repair a computer that will not start."
    },
    {
      "term": "Safe Mode",
      "def": "A Windows startup mode that loads only the essential drivers, used for diagnosis."
    },
    {
      "term": "Documentation",
      "def": "A written record of a problem, its cause, and its fix."
    },
    {
      "term": "Root cause",
      "def": "The underlying reason a problem happened, not just its symptom."
    },
    {
      "term": "Regression",
      "def": "A problem that returns after being fixed, often because the real cause was not found."
    },
    {
      "term": "Backup",
      "def": "A copy of your files kept somewhere safe, in case the original is lost."
    }
  ],
  "video": {
    "title": "Troubleshooting Windows - CompTIA A+ 220-1202 - 3.1",
    "embedUrl": "https://www.youtube.com/embed/qIenQsBAg2U",
    "note": "Professor Messer on troubleshooting Windows, Windows command line tools, and the network command line. Practice the six-step method on a real problem.",
    "more": [
      {
        "title": "Windows Command Line Tools - CompTIA A+ 220-1202 - 1.5",
        "url": "https://www.youtube.com/watch?v=iLgAwxmTSzI"
      },
      {
        "title": "The Windows Network Command Line - CompTIA A+ 220-1202 - 1.5",
        "url": "https://www.youtube.com/watch?v=FOaw5aPO0ZI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Troubleshooting” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Troubleshooting — Finding and fixing a problem by following a step-by-step method. Step 2: It matters because it is part of: Follow a step-by-step troubleshooting method for any computer problem. Step 3: An example from the module is the way troubleshooting shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Theory” and “Event Viewer”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Theory — A best guess about what is causing a problem, to be tested before acting. Step 2: Event Viewer — The Windows tool that logs system and program errors and warnings. Step 3: They differ because the first is about theory while the second is about event viewer; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Diagnose common problems: no power, no internet, slow computer, frozen apps.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Diagnose common problems: no power, no internet, slow computer, frozen apps. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Disk Management” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Disk Management — The Windows tool that shows drives and partitions. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: System Restore — The Windows feature that rolls the system back to an earlier restore point. Step 2: Restore point — A saved snapshot of Windows settings used to undo a bad change. Step 3: File History — The Windows backup tool that keeps copies of your files over time. Step 4: Recovery environment — The special Windows startup mode used to repair a computer that will not start. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use built-in tools such as Event Viewer, Disk Management, and System Restore. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Troubleshooting” mean?",
      "choices": [
        "Finding and fixing a problem by following a step-by-step method.",
        "A best guess about what is causing a problem, to be tested before acting.",
        "The Windows tool that logs system and program errors and warnings.",
        "The Windows tool that shows drives and partitions."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Troubleshooting means: Finding and fixing a problem by following a step-by-step method. (b) is the definition of Theory, not of Troubleshooting. (c) is the definition of Event Viewer, not of Troubleshooting. (d) is the definition of Disk Management, not of Troubleshooting."
    },
    {
      "q": "What does the term “Theory” mean?",
      "choices": [
        "The Windows tool that logs system and program errors and warnings.",
        "A best guess about what is causing a problem, to be tested before acting.",
        "The Windows tool that shows drives and partitions.",
        "The Windows feature that rolls the system back to an earlier restore point."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Theory means: A best guess about what is causing a problem, to be tested before acting. (a) is the definition of Event Viewer, not of Theory. (c) is the definition of Disk Management, not of Theory. (d) is the definition of System Restore, not of Theory."
    },
    {
      "q": "What does the term “Event Viewer” mean?",
      "choices": [
        "The Windows tool that shows drives and partitions.",
        "The Windows feature that rolls the system back to an earlier restore point.",
        "The Windows tool that logs system and program errors and warnings.",
        "A saved snapshot of Windows settings used to undo a bad change."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Event Viewer means: The Windows tool that logs system and program errors and warnings. (a) is the definition of Disk Management, not of Event Viewer. (b) is the definition of System Restore, not of Event Viewer. (d) is the definition of Restore point, not of Event Viewer."
    },
    {
      "q": "What does the term “Disk Management” mean?",
      "choices": [
        "The Windows feature that rolls the system back to an earlier restore point.",
        "A saved snapshot of Windows settings used to undo a bad change.",
        "The Windows backup tool that keeps copies of your files over time.",
        "The Windows tool that shows drives and partitions."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Disk Management means: The Windows tool that shows drives and partitions. (a) is the definition of System Restore, not of Disk Management. (b) is the definition of Restore point, not of Disk Management. (c) is the definition of File History, not of Disk Management."
    },
    {
      "q": "Which term means: The Windows feature that rolls the system back to an earlier restore point.",
      "choices": [
        "System Restore",
        "Restore point",
        "File History",
        "Recovery environment"
      ],
      "answer": 0,
      "explanation": "Correct: (a). System Restore is the term for: The Windows feature that rolls the system back to an earlier restore point. (b) Restore point means A saved snapshot of Windows settings used to undo a bad change. (c) File History means The Windows backup tool that keeps copies of your files over time. (d) Recovery environment means The special Windows startup mode used to repair a computer that will not start."
    },
    {
      "q": "Which term means: A saved snapshot of Windows settings used to undo a bad change.",
      "choices": [
        "File History",
        "Restore point",
        "Recovery environment",
        "Safe Mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Restore point is the term for: A saved snapshot of Windows settings used to undo a bad change. (a) File History means The Windows backup tool that keeps copies of your files over time. (c) Recovery environment means The special Windows startup mode used to repair a computer that will not start. (d) Safe Mode means A Windows startup mode that loads only the essential drivers, used for diagnosis."
    },
    {
      "q": "Which term means: The Windows backup tool that keeps copies of your files over time.",
      "choices": [
        "Recovery environment",
        "Safe Mode",
        "File History",
        "Documentation"
      ],
      "answer": 2,
      "explanation": "Correct: (c). File History is the term for: The Windows backup tool that keeps copies of your files over time. (a) Recovery environment means The special Windows startup mode used to repair a computer that will not start. (b) Safe Mode means A Windows startup mode that loads only the essential drivers, used for diagnosis. (d) Documentation means A written record of a problem, its cause, and its fix."
    },
    {
      "q": "Which term means: The special Windows startup mode used to repair a computer that will not start.",
      "choices": [
        "Safe Mode",
        "Documentation",
        "Root cause",
        "Recovery environment"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Recovery environment is the term for: The special Windows startup mode used to repair a computer that will not start. (a) Safe Mode means A Windows startup mode that loads only the essential drivers, used for diagnosis. (b) Documentation means A written record of a problem, its cause, and its fix. (c) Root cause means The underlying reason a problem happened, not just its symptom."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Troubleshooting & Basic Admin: Quick Reference</h3>\n<p><strong>Core idea:</strong> Follow a step-by-step troubleshooting method for any computer problem.</p>\n<p><strong>Key terms:</strong> Troubleshooting · Theory · Event Viewer · Disk Management · System Restore · Restore point · File History · Recovery environment.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Follow a step-by-step troubleshooting method for any computer problem.</li>\n<li>Diagnose common problems: no power, no internet, slow computer, frozen apps.</li>\n<li>Use built-in tools such as Event Viewer, Disk Management, and System Restore.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
