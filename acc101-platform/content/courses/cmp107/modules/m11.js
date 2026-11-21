// cmp107 - Module 11: Sharing, Printing & Cloud Storage
module.exports = {
  "number": 11,
  "slug": "sharing-printing-and-cloud-storage",
  "title": "Sharing, Printing & Cloud Storage",
  "estTime": "3–4 hours",
  "objectives": [
    "Share a folder or a printer on a home network.",
    "Connect to a shared folder or printer from another computer.",
    "Explain how cloud storage works and when to use it.",
    "Set up a printer on Windows, macOS, and Linux.",
    "Explain file sharing permissions and why they matter."
  ],
  "sections": [
    {
      "heading": "Sharing Files on Your Network",
      "html": "<p>Sharing lets one computer's files be used by another computer on the same network. On Windows, right-click a folder, choose Properties, then the Sharing tab, and share it. Other computers on the network can then open it from File Explorer under Network, or by typing the computer's name, such as \\\\Office-PC\\Photos, into the File Explorer address bar.</p>\n<p>On a Mac, go to System Settings, then General, then Sharing, and turn on File Sharing. On Linux, the file manager's sharing option or a shared folder in the home directory does the same job. Always share with a specific person or group in mind, and give read-only access unless the other person truly needs to change the files.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Only share on networks you trust, such as your home. On a public network, turn sharing off entirely, because anyone on that network could see your shared folders.</div></p>\n"
    },
    {
      "heading": "Sharing a Printer",
      "html": "<p>A shared printer is one printer that every computer on the network can use. Most modern printers connect to the network themselves, by Wi-Fi or Ethernet, and any computer on the same network can add them. On Windows, go to Settings, then Bluetooth and devices, then Printers and scanners, and choose Add device. On a Mac, go to System Settings, then Printers and Scanners.</p>\n<p>If the printer is plugged into one computer by USB, that computer can share it: on Windows, open the printer's properties and tick Share this printer. The other computers then add it as a network printer. The host computer must be switched on for the others to print, which is why a network-connected printer is usually the better setup.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When a printer will not print, check the simple things first: is it on, does it have paper and ink, is it connected to the same network as your computer, and is it set as the default printer? Those four checks solve most printer problems.</div></p>\n"
    },
    {
      "heading": "Cloud Storage: Files That Follow You",
      "html": "<p>Cloud storage keeps your files on a company's servers and syncs copies to your devices. OneDrive comes with Windows and Microsoft accounts, iCloud comes with Apple devices, and Google Drive works everywhere through a browser or an app. You save a file into the cloud folder, and it appears on your phone, your laptop, and any other device signed in to the same account.</p>\n<p>Cloud storage is convenient and it protects against a stolen or broken computer, but it is not a backup by itself. If you delete a file, the deletion syncs everywhere, and if your account is compromised, your files are at risk. Keep a separate backup, such as an external drive, for anything you cannot afford to lose.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Check what your cloud storage actually contains and how much space you have left. Free plans are small, and it is easy to run out of space without noticing until a sync fails.</div></p>\n"
    },
    {
      "heading": "Permissions on Shared Things",
      "html": "<p>Sharing always comes with permissions: who may read, who may change, and who may not see it at all. On Windows, a shared folder has share permissions and file permissions, and the stricter of the two wins. Give the smallest access that gets the job done: read access for someone who only needs to look, and write access only for someone who needs to change files.</p>\n<p>Be careful with the Everyone group. Sharing a folder with Everyone means anyone on the network can open it, which is fine for a family photo folder at home and a bad idea for anything with personal or financial information.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Review your shares once in a while. Old shares from a project that ended months ago should be turned off, just as old user accounts should be removed.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Share a folder or a printer on a home network.</li>\n<li>Connect to a shared folder or printer from another computer.</li>\n<li>Explain how cloud storage works and when to use it.</li>\n<li>Set up a printer on Windows, macOS, and Linux.</li>\n<li>Explain file sharing permissions and why they matter.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sharing a folder with Everyone on a network you do not fully trust. Give the smallest access that does the job.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating cloud storage as a backup. A deleted file syncs everywhere, so keep a separate backup too.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "File sharing",
      "def": "Letting other computers on a network open files on your computer."
    },
    {
      "term": "Shared folder",
      "def": "A folder made available to other computers on the network."
    },
    {
      "term": "Network printer",
      "def": "A printer connected to the network so any computer can use it."
    },
    {
      "term": "Default printer",
      "def": "The printer your computer uses unless you choose another one."
    },
    {
      "term": "Cloud storage",
      "def": "Files stored on a company's servers and synced to your devices."
    },
    {
      "term": "OneDrive",
      "def": "Microsoft's cloud storage service, built into Windows."
    },
    {
      "term": "iCloud",
      "def": "Apple's cloud storage service, built into macOS and iOS."
    },
    {
      "term": "Google Drive",
      "def": "Google's cloud storage service, usable in a browser or an app."
    },
    {
      "term": "Sync",
      "def": "Keeping the same files up to date on several devices."
    },
    {
      "term": "Share permissions",
      "def": "The rules saying who may read or change a shared folder."
    },
    {
      "term": "Everyone",
      "def": "A group meaning all users on the network, used with care when sharing."
    },
    {
      "term": "Print queue",
      "def": "The list of documents waiting to be printed."
    },
    {
      "term": "Spooler",
      "def": "The Windows service that manages the print queue."
    }
  ],
  "video": {
    "title": "Windows Network Technologies - CompTIA A+ 220-1202 - 1.7",
    "embedUrl": "https://www.youtube.com/embed/1OlbYiS-xHY",
    "note": "Professor Messer on Windows network technologies and the firewall, plus a full networking walkthrough. Note where sharing permissions are set.",
    "more": [
      {
        "title": "Configuring Windows Firewall - CompTIA A+ 220-1202 - 1.7",
        "url": "https://www.youtube.com/watch?v=ZmtkzwzVDaE"
      },
      {
        "title": "🌐Full Networking for Cybersecurity Beginners | IP, DNS, TCP, HTTP, FTP & SSH Explained in 45 Minutes",
        "url": "https://www.youtube.com/watch?v=p8t-p50m1d4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “File sharing” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: File sharing — Letting other computers on a network open files on your computer. Step 2: It matters because it is part of: Share a folder or a printer on a home network. Step 3: An example from the module is the way file sharing shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Shared folder” and “Network printer”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Shared folder — A folder made available to other computers on the network. Step 2: Network printer — A printer connected to the network so any computer can use it. Step 3: They differ because the first is about shared folder while the second is about network printer; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Connect to a shared folder or printer from another computer.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Connect to a shared folder or printer from another computer. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Default printer” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Default printer — The printer your computer uses unless you choose another one. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cloud storage — Files stored on a company's servers and synced to your devices. Step 2: OneDrive — Microsoft's cloud storage service, built into Windows. Step 3: iCloud — Apple's cloud storage service, built into macOS and iOS. Step 4: Google Drive — Google's cloud storage service, usable in a browser or an app. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain how cloud storage works and when to use it. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “File sharing” mean?",
      "choices": [
        "Letting other computers on a network open files on your computer.",
        "A folder made available to other computers on the network.",
        "A printer connected to the network so any computer can use it.",
        "The printer your computer uses unless you choose another one."
      ],
      "answer": 0,
      "explanation": "Correct: (a). File sharing means: Letting other computers on a network open files on your computer. (b) is the definition of Shared folder, not of File sharing. (c) is the definition of Network printer, not of File sharing. (d) is the definition of Default printer, not of File sharing."
    },
    {
      "q": "What does the term “Shared folder” mean?",
      "choices": [
        "A printer connected to the network so any computer can use it.",
        "A folder made available to other computers on the network.",
        "The printer your computer uses unless you choose another one.",
        "Files stored on a company's servers and synced to your devices."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shared folder means: A folder made available to other computers on the network. (a) is the definition of Network printer, not of Shared folder. (c) is the definition of Default printer, not of Shared folder. (d) is the definition of Cloud storage, not of Shared folder."
    },
    {
      "q": "What does the term “Network printer” mean?",
      "choices": [
        "The printer your computer uses unless you choose another one.",
        "Files stored on a company's servers and synced to your devices.",
        "A printer connected to the network so any computer can use it.",
        "Microsoft's cloud storage service, built into Windows."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Network printer means: A printer connected to the network so any computer can use it. (a) is the definition of Default printer, not of Network printer. (b) is the definition of Cloud storage, not of Network printer. (d) is the definition of OneDrive, not of Network printer."
    },
    {
      "q": "What does the term “Default printer” mean?",
      "choices": [
        "Files stored on a company's servers and synced to your devices.",
        "Microsoft's cloud storage service, built into Windows.",
        "Apple's cloud storage service, built into macOS and iOS.",
        "The printer your computer uses unless you choose another one."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Default printer means: The printer your computer uses unless you choose another one. (a) is the definition of Cloud storage, not of Default printer. (b) is the definition of OneDrive, not of Default printer. (c) is the definition of iCloud, not of Default printer."
    },
    {
      "q": "Which term means: Files stored on a company's servers and synced to your devices.",
      "choices": [
        "Cloud storage",
        "OneDrive",
        "iCloud",
        "Google Drive"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Cloud storage is the term for: Files stored on a company's servers and synced to your devices. (b) OneDrive means Microsoft's cloud storage service, built into Windows. (c) iCloud means Apple's cloud storage service, built into macOS and iOS. (d) Google Drive means Google's cloud storage service, usable in a browser or an app."
    },
    {
      "q": "Which term means: Microsoft's cloud storage service, built into Windows.",
      "choices": [
        "iCloud",
        "OneDrive",
        "Google Drive",
        "Sync"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OneDrive is the term for: Microsoft's cloud storage service, built into Windows. (a) iCloud means Apple's cloud storage service, built into macOS and iOS. (c) Google Drive means Google's cloud storage service, usable in a browser or an app. (d) Sync means Keeping the same files up to date on several devices."
    },
    {
      "q": "Which term means: Apple's cloud storage service, built into macOS and iOS.",
      "choices": [
        "Google Drive",
        "Sync",
        "iCloud",
        "Share permissions"
      ],
      "answer": 2,
      "explanation": "Correct: (c). iCloud is the term for: Apple's cloud storage service, built into macOS and iOS. (a) Google Drive means Google's cloud storage service, usable in a browser or an app. (b) Sync means Keeping the same files up to date on several devices. (d) Share permissions means The rules saying who may read or change a shared folder."
    },
    {
      "q": "Which term means: Google's cloud storage service, usable in a browser or an app.",
      "choices": [
        "Sync",
        "Share permissions",
        "Everyone",
        "Google Drive"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Google Drive is the term for: Google's cloud storage service, usable in a browser or an app. (a) Sync means Keeping the same files up to date on several devices. (b) Share permissions means The rules saying who may read or change a shared folder. (c) Everyone means A group meaning all users on the network, used with care when sharing."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Sharing, Printing & Cloud Storage: Quick Reference</h3>\n<p><strong>Core idea:</strong> Share a folder or a printer on a home network.</p>\n<p><strong>Key terms:</strong> File sharing · Shared folder · Network printer · Default printer · Cloud storage · OneDrive · iCloud · Google Drive.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Share a folder or a printer on a home network.</li>\n<li>Connect to a shared folder or printer from another computer.</li>\n<li>Explain how cloud storage works and when to use it.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
