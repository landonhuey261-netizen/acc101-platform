// cmp107 - Module 1: What an Operating System Does
module.exports = {
  "number": 1,
  "slug": "what-an-operating-system-does",
  "title": "What an Operating System Does",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an operating system is and what it does for you.",
    "Name the main desktop operating systems: Windows, macOS, and Linux.",
    "Explain the difference between 32-bit and 64-bit systems.",
    "Describe how the operating system manages hardware, files, and programs.",
    "Explain why keeping the operating system updated matters."
  ],
  "sections": [
    {
      "heading": "The Manager Between You and the Machine",
      "html": "<p>An operating system, or OS, is the software that runs your computer. It starts when you switch the computer on, and it stays running the whole time you use it. Without an operating system, your apps would have no way to talk to the screen, the keyboard, the disk, or the network.</p>\n<p>Think of the operating system as the manager of a busy office. You are the boss: you ask for things, like opening a document or playing a video. The operating system decides which program gets the processor's time, how much memory each program may use, and where files are stored. It does all of this quietly, thousands of times a second, so you can just get on with your work.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The operating system is the go-between: every app talks to the OS, and the OS talks to the hardware. If the OS stops working, nothing else works either.</div></p>\n"
    },
    {
      "heading": "Windows, macOS, and Linux",
      "html": "<p>The three main desktop operating systems are Microsoft Windows, Apple macOS, and Linux. Windows runs on most personal computers and in most offices, and it runs the widest range of software. macOS runs only on Apple computers, and it is known for a clean, consistent design and close integration with iPhones and iPads. Linux is free and open source, and it comes in many versions called distributions, such as Ubuntu and Fedora.</p>\n<p>There are also mobile operating systems: iOS on iPhones and Android on most other phones. ChromeOS runs on Chromebooks and is built mainly around the web browser. For this course, the desktop three are the focus, because that is where most office and home computer work happens.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> There is no single best operating system. The right one is the one that runs the software you need, on the computer you have, and feels comfortable to you.</div></p>\n"
    },
    {
      "heading": "32-Bit, 64-Bit, and What the Numbers Mean",
      "html": "<p>Modern computers are almost all 64-bit. The number describes how much memory the processor can work with at once. A 32-bit system can only use about 4 GB of memory, while a 64-bit system can use far more than any home computer holds. That is why 64-bit Windows 11 is the standard today, and why 32-bit versions have been retired.</p>\n<p>You can check which one you have in Windows by going to Settings, then System, then About, and looking at System type. On a Mac, click the Apple menu, then About This Mac. On Linux, the command uname -m in a terminal prints x86_64 for a 64-bit system. Most software today is written for 64-bit systems, and that is what you should install.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If a download offers you a 32-bit and a 64-bit version, pick the 64-bit one on any modern computer. The 32-bit version is only for very old machines.</div></p>\n"
    },
    {
      "heading": "Updates, Drivers, and Why the OS Needs Care",
      "html": "<p>The operating system is not finished when you buy the computer. Microsoft, Apple, and Linux makers release updates that fix security holes, repair bugs, and sometimes add features. Installing updates promptly is one of the most important security habits there is, because attackers target computers that are out of date.</p>\n<p>The OS also needs drivers, which are small pieces of software that let it talk to each piece of hardware: the printer, the graphics card, the Wi-Fi adapter. Windows usually finds drivers itself through Windows Update, and macOS bundles them with the system. When a device stops working, a missing or broken driver is a common cause, and updating it is often the fix.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Treat updates as maintenance, like servicing a car. A computer that is updated, backed up, and free of programs you do not need will run better and last longer.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what an operating system is and what it does for you.</li>\n<li>Name the main desktop operating systems: Windows, macOS, and Linux.</li>\n<li>Explain the difference between 32-bit and 64-bit systems.</li>\n<li>Describe how the operating system manages hardware, files, and programs.</li>\n<li>Explain why keeping the operating system updated matters.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking the operating system and the apps are the same thing. The OS runs underneath everything; apps sit on top of it, and an app crashing is not the same as the OS crashing.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Ignoring updates for months. Out-of-date systems are the easiest targets for malware, so install updates promptly and restart when asked.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Operating system (OS)",
      "def": "The software that manages a computer's hardware and runs its programs."
    },
    {
      "term": "Windows",
      "def": "Microsoft's operating system, used on most personal computers and in most offices."
    },
    {
      "term": "macOS",
      "def": "Apple's operating system, which runs only on Apple computers."
    },
    {
      "term": "Linux",
      "def": "A free, open-source operating system available in many versions called distributions."
    },
    {
      "term": "Distribution",
      "def": "A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools."
    },
    {
      "term": "Kernel",
      "def": "The core part of the operating system that talks directly to the hardware."
    },
    {
      "term": "64-bit",
      "def": "A system design that can use more than 4 GB of memory; the standard on modern computers."
    },
    {
      "term": "32-bit",
      "def": "An older system design limited to about 4 GB of memory."
    },
    {
      "term": "Driver",
      "def": "Software that lets the operating system talk to a piece of hardware, such as a printer."
    },
    {
      "term": "Update",
      "def": "A release from the OS maker that fixes security holes, repairs bugs, or adds features."
    },
    {
      "term": "Graphical user interface (GUI)",
      "def": "The windows, icons, and menus you click and tap to use a computer."
    },
    {
      "term": "Command line",
      "def": "A text screen where you type commands to the operating system instead of clicking."
    },
    {
      "term": "File system",
      "def": "The method the operating system uses to store and organize files on a disk."
    },
    {
      "term": "iOS",
      "def": "Apple's operating system for iPhones."
    },
    {
      "term": "Android",
      "def": "Google's operating system for most non-Apple phones and tablets."
    }
  ],
  "video": {
    "title": "Operating Systems Overview - CompTIA A+ 220-1202 - 1.1",
    "embedUrl": "https://www.youtube.com/embed/IhcZqUs1IF8",
    "note": "Professor Messer's overview of Windows, macOS, Linux, and more. As you watch, write down one job the operating system does that you had never thought about before.",
    "more": [
      {
        "title": "CompTIA A+ 220-1202 Operating Systems Explained | Exam Prep",
        "url": "https://www.youtube.com/watch?v=muNpb_iZvlo"
      },
      {
        "title": "An Overview of Windows - CompTIA A+ 220-1202 - 1.3",
        "url": "https://www.youtube.com/watch?v=B7JZ6rfH06Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Operating system (OS)” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Operating system (OS) — The software that manages a computer's hardware and runs its programs. Step 2: It matters because it is part of: Explain what an operating system is and what it does for you. Step 3: An example from the module is the way operating system (os) shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Windows” and “macOS”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Windows — Microsoft's operating system, used on most personal computers and in most offices. Step 2: macOS — Apple's operating system, which runs only on Apple computers. Step 3: They differ because the first is about windows while the second is about macos; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name the main desktop operating systems: Windows, macOS, and Linux.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the main desktop operating systems: Windows, macOS, and Linux. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Linux” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Linux — A free, open-source operating system available in many versions called distributions. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Distribution — A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools. Step 2: Kernel — The core part of the operating system that talks directly to the hardware. Step 3: 64-bit — A system design that can use more than 4 GB of memory; the standard on modern computers. Step 4: 32-bit — An older system design limited to about 4 GB of memory. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain the difference between 32-bit and 64-bit systems. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Operating system (OS)” mean?",
      "choices": [
        "The software that manages a computer's hardware and runs its programs.",
        "Microsoft's operating system, used on most personal computers and in most offices.",
        "Apple's operating system, which runs only on Apple computers.",
        "A free, open-source operating system available in many versions called distributions."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Operating system (OS) means: The software that manages a computer's hardware and runs its programs. (b) is the definition of Windows, not of Operating system (OS). (c) is the definition of macOS, not of Operating system (OS). (d) is the definition of Linux, not of Operating system (OS)."
    },
    {
      "q": "What does the term “Windows” mean?",
      "choices": [
        "Apple's operating system, which runs only on Apple computers.",
        "Microsoft's operating system, used on most personal computers and in most offices.",
        "A free, open-source operating system available in many versions called distributions.",
        "A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Windows means: Microsoft's operating system, used on most personal computers and in most offices. (a) is the definition of macOS, not of Windows. (c) is the definition of Linux, not of Windows. (d) is the definition of Distribution, not of Windows."
    },
    {
      "q": "What does the term “macOS” mean?",
      "choices": [
        "A free, open-source operating system available in many versions called distributions.",
        "A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools.",
        "Apple's operating system, which runs only on Apple computers.",
        "The core part of the operating system that talks directly to the hardware."
      ],
      "answer": 2,
      "explanation": "Correct: (c). macOS means: Apple's operating system, which runs only on Apple computers. (a) is the definition of Linux, not of macOS. (b) is the definition of Distribution, not of macOS. (d) is the definition of Kernel, not of macOS."
    },
    {
      "q": "What does the term “Linux” mean?",
      "choices": [
        "A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools.",
        "The core part of the operating system that talks directly to the hardware.",
        "A system design that can use more than 4 GB of memory; the standard on modern computers.",
        "A free, open-source operating system available in many versions called distributions."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Linux means: A free, open-source operating system available in many versions called distributions. (a) is the definition of Distribution, not of Linux. (b) is the definition of Kernel, not of Linux. (c) is the definition of 64-bit, not of Linux."
    },
    {
      "q": "Which term means: A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools.",
      "choices": [
        "Distribution",
        "Kernel",
        "64-bit",
        "32-bit"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Distribution is the term for: A version of Linux, such as Ubuntu or Fedora, packaged with its own apps and tools. (b) Kernel means The core part of the operating system that talks directly to the hardware. (c) 64-bit means A system design that can use more than 4 GB of memory; the standard on modern computers. (d) 32-bit means An older system design limited to about 4 GB of memory."
    },
    {
      "q": "Which term means: The core part of the operating system that talks directly to the hardware.",
      "choices": [
        "64-bit",
        "Kernel",
        "32-bit",
        "Driver"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Kernel is the term for: The core part of the operating system that talks directly to the hardware. (a) 64-bit means A system design that can use more than 4 GB of memory; the standard on modern computers. (c) 32-bit means An older system design limited to about 4 GB of memory. (d) Driver means Software that lets the operating system talk to a piece of hardware, such as a printer."
    },
    {
      "q": "Which term means: A system design that can use more than 4 GB of memory; the standard on modern computers.",
      "choices": [
        "32-bit",
        "Driver",
        "64-bit",
        "Update"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 64-bit is the term for: A system design that can use more than 4 GB of memory; the standard on modern computers. (a) 32-bit means An older system design limited to about 4 GB of memory. (b) Driver means Software that lets the operating system talk to a piece of hardware, such as a printer. (d) Update means A release from the OS maker that fixes security holes, repairs bugs, or adds features."
    },
    {
      "q": "Which term means: An older system design limited to about 4 GB of memory.",
      "choices": [
        "Driver",
        "Update",
        "Graphical user interface (GUI)",
        "32-bit"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 32-bit is the term for: An older system design limited to about 4 GB of memory. (a) Driver means Software that lets the operating system talk to a piece of hardware, such as a printer. (b) Update means A release from the OS maker that fixes security holes, repairs bugs, or adds features. (c) Graphical user interface (GUI) means The windows, icons, and menus you click and tap to use a computer."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — What an Operating System Does: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an operating system is and what it does for you.</p>\n<p><strong>Key terms:</strong> Operating system (OS) · Windows · macOS · Linux · Distribution · Kernel · 64-bit · 32-bit.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an operating system is and what it does for you.</li>\n<li>Name the main desktop operating systems: Windows, macOS, and Linux.</li>\n<li>Explain the difference between 32-bit and 64-bit systems.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
