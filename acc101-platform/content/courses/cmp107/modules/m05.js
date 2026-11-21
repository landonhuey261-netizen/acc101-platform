// cmp107 - Module 5: Installing and Managing Software
module.exports = {
  "number": 5,
  "slug": "installing-and-managing-software",
  "title": "Installing and Managing Software",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what software is and how it differs from the operating system.",
    "Install software safely from official sources.",
    "Update and remove software on Windows, macOS, and Linux.",
    "Check system requirements before installing a program.",
    "Explain what a license is and why pirated software is dangerous."
  ],
  "sections": [
    {
      "heading": "Software, Apps, and the Operating System",
      "html": "<p>Software is any program that runs on a computer: web browsers, word processors, games, photo editors. The operating system is itself software, but it is the foundation; apps sit on top of it and use its services to reach the screen, the disk, and the network. A computer with no apps is useless, and an app with no operating system cannot run at all.</p>\n<p>Software comes in many forms. A desktop app installs on your computer, a web app runs in your browser, and a mobile app runs on your phone. Some software is free, some is paid, and some is open source, meaning anyone can read and change its code. Free does not always mean safe, and paid does not always mean good — the source matters more than the price.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Before installing anything, check the system requirements: the operating system version, the amount of memory, the disk space, and the processor it needs. Installing a program your computer cannot run wastes time and can cause crashes.</div></p>\n"
    },
    {
      "heading": "Installing Safely",
      "html": "<p>The safest place to get software is the official source: the Microsoft Store or the developer's own website on Windows, the App Store or the developer's site on a Mac, and your distribution's package manager on Linux. Downloading a popular program from a random search result is the most common way beginners infect their computers.</p>\n<p>On Windows, downloaded programs usually arrive as an .exe or .msi installer. Run it, read each screen instead of clicking Next blindly, and uncheck any extra toolbars or programs it tries to add. On a Mac, drag the app into Applications. On Linux, use the package manager, for example sudo apt install gimp, rather than downloading files from websites.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If an installer asks for your administrator password, stop and think: do you trust this program and its source? Administrator permission lets a program change anything on your computer, so only grant it to software you actually want.</div></p>\n"
    },
    {
      "heading": "Updating and Removing Software",
      "html": "<p>Software needs updates just like the operating system. Updates fix security holes and bugs, and most programs can check for them automatically. Turn on automatic updates where you can, and check occasionally for programs that do not update themselves.</p>\n<p>To remove a program on Windows, go to Settings, then Apps, then Installed apps, select the program, and choose Uninstall. On a Mac, drag the app from Applications to the Trash. On Linux, use sudo apt remove programname. Removing programs you no longer use frees disk space and reduces security risk.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> After uninstalling, check that the program is really gone and that no leftover startup entry remains. A clean computer is a fast computer, and it is much easier to troubleshoot.</div></p>\n"
    },
    {
      "heading": "Licenses, Trials, and Pirated Software",
      "html": "<p>A software license is the permission to use a program, and it comes with rules: how many computers it may be installed on, whether it may be used for business, and how long it lasts. A subscription license, such as Microsoft 365 or Adobe Creative Cloud, is paid monthly or yearly and stops working when you stop paying. A one-time license is paid once and lasts until a new version comes out.</p>\n<p>Free trials let you test paid software for a limited time. That is a legitimate way to try before you buy. Pirated software, downloaded from unofficial sources to avoid paying, is not: it is illegal, it often carries malware, and it cannot be updated, which leaves your computer exposed.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If you cannot afford a program, look for a free or open-source alternative first. LibreOffice replaces Microsoft Office for most people, GIMP replaces Photoshop for basic editing, and there is a free option for almost every common task.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what software is and how it differs from the operating system.</li>\n<li>Install software safely from official sources.</li>\n<li>Update and remove software on Windows, macOS, and Linux.</li>\n<li>Check system requirements before installing a program.</li>\n<li>Explain what a license is and why pirated software is dangerous.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Downloading popular programs from random websites instead of the official source. That is how most beginners pick up malware.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Clicking Next through an installer without reading. Extra toolbars and unwanted programs hide in those screens.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Software",
      "def": "Any program that runs on a computer, from browsers to games."
    },
    {
      "term": "Application (app)",
      "def": "A program built to do a specific job, such as a word processor or photo editor."
    },
    {
      "term": "Installer",
      "def": "A program that sets up another program on your computer."
    },
    {
      "term": "System requirements",
      "def": "The operating system, memory, disk space, and processor a program needs to run."
    },
    {
      "term": "Microsoft Store",
      "def": "The official store for Windows apps."
    },
    {
      "term": "App Store",
      "def": "Apple's official store for Mac and iPhone apps."
    },
    {
      "term": "License",
      "def": "The permission and rules for using a piece of software."
    },
    {
      "term": "Subscription",
      "def": "A license paid regularly, such as monthly or yearly."
    },
    {
      "term": "Free trial",
      "def": "A limited-time free test of paid software."
    },
    {
      "term": "Open source",
      "def": "Software whose code anyone may read, use, and change."
    },
    {
      "term": "Update",
      "def": "A new release of a program that fixes bugs or security holes."
    },
    {
      "term": "Uninstall",
      "def": "To remove a program from a computer."
    },
    {
      "term": "Malware",
      "def": "Malicious software that harms a computer or steals information."
    },
    {
      "term": ".exe",
      "def": "The file type of most Windows program installers and applications."
    },
    {
      "term": "Package manager",
      "def": "The tool that installs and updates software from trusted sources on Linux."
    }
  ],
  "video": {
    "title": "Installing Operating Systems - CompTIA A+ 220-1202 - 1.2",
    "embedUrl": "https://www.youtube.com/embed/SoDrALxWWTg",
    "note": "Professor Messer on installing operating systems, upgrading Windows, and installing applications. Note the checks to make before any install.",
    "more": [
      {
        "title": "Upgrading Windows - CompTIA A+ 220-1202 - 1.2",
        "url": "https://www.youtube.com/watch?v=KUD7v9nHiL4"
      },
      {
        "title": "Installing Applications - CompTIA A+ 220-1202 - 1.10",
        "url": "https://www.youtube.com/watch?v=G2Equ2pG7aY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Software” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Software — Any program that runs on a computer, from browsers to games. Step 2: It matters because it is part of: Explain what software is and how it differs from the operating system. Step 3: An example from the module is the way software shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Application (app)” and “Installer”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Application (app) — A program built to do a specific job, such as a word processor or photo editor. Step 2: Installer — A program that sets up another program on your computer. Step 3: They differ because the first is about application (app) while the second is about installer; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Install software safely from official sources.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Install software safely from official sources. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “System requirements” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: System requirements — The operating system, memory, disk space, and processor a program needs to run. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Microsoft Store — The official store for Windows apps. Step 2: App Store — Apple's official store for Mac and iPhone apps. Step 3: License — The permission and rules for using a piece of software. Step 4: Subscription — A license paid regularly, such as monthly or yearly. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Update and remove software on Windows, macOS, and Linux. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Software” mean?",
      "choices": [
        "Any program that runs on a computer, from browsers to games.",
        "A program built to do a specific job, such as a word processor or photo editor.",
        "A program that sets up another program on your computer.",
        "The operating system, memory, disk space, and processor a program needs to run."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Software means: Any program that runs on a computer, from browsers to games. (b) is the definition of Application (app), not of Software. (c) is the definition of Installer, not of Software. (d) is the definition of System requirements, not of Software."
    },
    {
      "q": "What does the term “Application (app)” mean?",
      "choices": [
        "A program that sets up another program on your computer.",
        "A program built to do a specific job, such as a word processor or photo editor.",
        "The operating system, memory, disk space, and processor a program needs to run.",
        "The official store for Windows apps."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Application (app) means: A program built to do a specific job, such as a word processor or photo editor. (a) is the definition of Installer, not of Application (app). (c) is the definition of System requirements, not of Application (app). (d) is the definition of Microsoft Store, not of Application (app)."
    },
    {
      "q": "What does the term “Installer” mean?",
      "choices": [
        "The operating system, memory, disk space, and processor a program needs to run.",
        "The official store for Windows apps.",
        "A program that sets up another program on your computer.",
        "Apple's official store for Mac and iPhone apps."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Installer means: A program that sets up another program on your computer. (a) is the definition of System requirements, not of Installer. (b) is the definition of Microsoft Store, not of Installer. (d) is the definition of App Store, not of Installer."
    },
    {
      "q": "What does the term “System requirements” mean?",
      "choices": [
        "The official store for Windows apps.",
        "Apple's official store for Mac and iPhone apps.",
        "The permission and rules for using a piece of software.",
        "The operating system, memory, disk space, and processor a program needs to run."
      ],
      "answer": 3,
      "explanation": "Correct: (d). System requirements means: The operating system, memory, disk space, and processor a program needs to run. (a) is the definition of Microsoft Store, not of System requirements. (b) is the definition of App Store, not of System requirements. (c) is the definition of License, not of System requirements."
    },
    {
      "q": "Which term means: The official store for Windows apps.",
      "choices": [
        "Microsoft Store",
        "App Store",
        "License",
        "Subscription"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Microsoft Store is the term for: The official store for Windows apps. (b) App Store means Apple's official store for Mac and iPhone apps. (c) License means The permission and rules for using a piece of software. (d) Subscription means A license paid regularly, such as monthly or yearly."
    },
    {
      "q": "Which term means: Apple's official store for Mac and iPhone apps.",
      "choices": [
        "License",
        "App Store",
        "Subscription",
        "Free trial"
      ],
      "answer": 1,
      "explanation": "Correct: (b). App Store is the term for: Apple's official store for Mac and iPhone apps. (a) License means The permission and rules for using a piece of software. (c) Subscription means A license paid regularly, such as monthly or yearly. (d) Free trial means A limited-time free test of paid software."
    },
    {
      "q": "Which term means: The permission and rules for using a piece of software.",
      "choices": [
        "Subscription",
        "Free trial",
        "License",
        "Open source"
      ],
      "answer": 2,
      "explanation": "Correct: (c). License is the term for: The permission and rules for using a piece of software. (a) Subscription means A license paid regularly, such as monthly or yearly. (b) Free trial means A limited-time free test of paid software. (d) Open source means Software whose code anyone may read, use, and change."
    },
    {
      "q": "Which term means: A license paid regularly, such as monthly or yearly.",
      "choices": [
        "Free trial",
        "Open source",
        "Update",
        "Subscription"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Subscription is the term for: A license paid regularly, such as monthly or yearly. (a) Free trial means A limited-time free test of paid software. (b) Open source means Software whose code anyone may read, use, and change. (c) Update means A new release of a program that fixes bugs or security holes."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Installing and Managing Software: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what software is and how it differs from the operating system.</p>\n<p><strong>Key terms:</strong> Software · Application (app) · Installer · System requirements · Microsoft Store · App Store · License · Subscription.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what software is and how it differs from the operating system.</li>\n<li>Install software safely from official sources.</li>\n<li>Update and remove software on Windows, macOS, and Linux.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
