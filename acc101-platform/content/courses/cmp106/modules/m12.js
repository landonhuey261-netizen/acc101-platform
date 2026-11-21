// cmp106 - Module 12: Network, Slow PC & Overheating Fixes
module.exports = {
  "number": 12,
  "slug": "network-slow-pc-and-overheating",
  "title": "Network, Slow PC & Overheating Fixes",
  "estTime": "3–4 hours",
  "objectives": [
    "Fix a computer with no Wi-Fi, step by step.",
    "Fix a computer that is slow, by finding the bottleneck.",
    "Check whether a computer is overheating and cool it down.",
    "Explain what A+ Core 1 (220-1201) covers and how this course prepares you for it.",
    "Know when a problem is beyond a beginner and needs a technician."
  ],
  "sections": [
    {
      "heading": "No Wi-Fi: Work Down the Chain",
      "html": "<p>Wi-Fi problems have a chain: the device, the router, and the internet. Check the device first: is Wi-Fi switched on, is airplane mode off, and is the right network chosen? Restart the Wi-Fi on the computer, then restart the computer. If other devices work and this one does not, the fault is in this computer — often its driver, which a restart or a driver update can fix.</p>\n<p>If no device works, the fault is the router or the internet: restart the router (unplug it, wait thirty seconds, plug it back in), check its lights, and check whether the internet provider reports an outage. A cable connection (Ethernet) is a useful test: if the cable works but Wi-Fi does not, the fault is in the Wi-Fi, not the internet.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Work down the chain: device, router, internet. Find which link is broken before fixing anything. </div></p>\n"
    },
    {
      "heading": "A Slow PC: Find the Bottleneck",
      "html": "<p>A slow computer has one slow part holding the rest back — the bottleneck. Open Task Manager (Ctrl + Shift + Esc) and look at the four numbers: CPU, memory (RAM), disk, and network. The one sitting near 100% while the computer struggles is the bottleneck. Disk at 100% on a hard drive means the computer needs an SSD. Memory at 100% means it needs more RAM. CPU at 100% in one app means that app is the problem, or the CPU is too weak for the job.</p>\n<p>Before buying anything, do the free fixes: close apps you are not using, remove programs that start with the computer, and make sure the drive has free space. A computer with a full drive and twenty startup apps will be slow whatever its parts. The lab for this module walks you through the whole check.</p>\n"
    },
    {
      "heading": "Overheating: Hot, Loud, and Slow",
      "html": "<p>A computer that is hot to touch, whose fans roar constantly, and which slows down under load is probably overheating. The causes are usually simple: dust clogging the fans and heatsinks, a case with blocked vents, or a computer pushed against a wall with no air around it. Clean the dust with compressed air (outside, holding fans still), move the computer so air can flow, and check the temperatures with a free monitoring tool.</p>\n<p>If cleaning does not help, the thermal paste between the CPU and its cooler may have dried out — a job for someone confident, or a technician, because it means removing the cooler. And remember: a CPU that overheats slows itself down to survive, so a hot computer and a slow computer are often the same problem.</p>\n"
    },
    {
      "heading": "Where This Course Leads: A+ Core 1",
      "html": "<p>This course is groundwork for CompTIA A+ Core 1 (exam 220-1201), the entry-level certification for computer technicians, covering hardware, networking, mobile devices, and troubleshooting. The current A+ series is 220-1201 and 220-1202, so make sure any study material you use is for the current series.</p>\n<p>A+ is earned by passing two exams, and it also expects hands-on practice — which is why this course keeps reminding you that real hardware matters. What you have learned here — the parts, the connections, the safety rules, and the step-by-step diagnosis — is the foundation the exam builds on. Keep practising on a real computer, and the exam's hardware questions will feel familiar.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>No Wi-Fi: check the device, then the router, then the internet — in that order.</li>\n<li>A slow PC: Task Manager shows the bottleneck — disk, memory, CPU, or network.</li>\n<li>Overheating: clean the dust, clear the vents, and check the temperatures.</li>\n<li>This course is groundwork for A+ Core 1 (220-1201). Use study material for the current 220-1201/1202 series only.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Reinstalling the operating system before checking Task Manager. The bottleneck is usually one part.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using study material for an old A+ series. Use the current 220-1201/1202 series only.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Wi-Fi",
      "def": "Wireless networking: how a computer connects to a router without a cable."
    },
    {
      "term": "Router",
      "def": "The box that connects a home network to the internet and shares the connection by Wi-Fi."
    },
    {
      "term": "Airplane mode",
      "def": "A setting that switches off all wireless connections, including Wi-Fi."
    },
    {
      "term": "Ethernet",
      "def": "A wired network connection, using a cable to the router; a useful test when Wi-Fi fails."
    },
    {
      "term": "Bottleneck",
      "def": "The slowest part in a computer, which limits how fast the whole machine can go."
    },
    {
      "term": "Task Manager",
      "def": "A Windows tool that shows how much CPU, RAM, and disk each app is using."
    },
    {
      "term": "Startup app",
      "def": "A program that starts automatically when the computer starts, slowing it down."
    },
    {
      "term": "Overheating",
      "def": "A computer getting too hot, usually from dust, blocked vents, or dried thermal paste."
    },
    {
      "term": "Thermal paste",
      "def": "A thin paste between a CPU and its cooler that helps heat move across."
    },
    {
      "term": "A+ Core 1",
      "def": "CompTIA A+ exam 220-1201, the entry-level certification for computer technicians, covering hardware and troubleshooting."
    },
    {
      "term": "Certification",
      "def": "A qualification earned by passing an exam, showing a person can do a job."
    },
    {
      "term": "Outage",
      "def": "A failure of the internet service from the provider's side."
    },
    {
      "term": "Driver",
      "def": "Software that lets the operating system talk to a piece of hardware, such as a graphics card."
    },
    {
      "term": "Technician",
      "def": "A trained person who repairs computers; ask one when a job is beyond your skill."
    },
    {
      "term": "Monitoring tool",
      "def": "A program that shows a computer's temperatures and fan speeds."
    }
  ],
  "video": {
    "title": "Speed Up a Slow PC in 15 Seconds: Best Performance",
    "embedUrl": "https://www.youtube.com/embed/mwfVqqSTI88",
    "note": "Watch a slow PC diagnosed with Task Manager, and note which number points at the bottleneck before the fix is shown.",
    "more": [
      {
        "title": "If your PC is running slow do this…",
        "url": "https://www.youtube.com/watch?v=JwnVqXQdzt4"
      },
      {
        "title": "Fix Your Slow PC in 1 Minute | Speed Up Windows 11 & 10 Without Software",
        "url": "https://www.youtube.com/watch?v=MdXNgspWWKg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Wi-Fi” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wi-Fi — Wireless networking: how a computer connects to a router without a cable. Step 2: It matters because it is part of: Fix a computer with no Wi-Fi, step by step. Step 3: An example from the module is the way wi-fi shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Router” and “Airplane mode”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Router — The box that connects a home network to the internet and shares the connection by Wi-Fi. Step 2: Airplane mode — A setting that switches off all wireless connections, including Wi-Fi. Step 3: They differ because the first is about router while the second is about airplane mode; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Fix a computer that is slow, by finding the bottleneck.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Fix a computer that is slow, by finding the bottleneck. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Ethernet” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Ethernet — A wired network connection, using a cable to the router; a useful test when Wi-Fi fails. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bottleneck — The slowest part in a computer, which limits how fast the whole machine can go. Step 2: Task Manager — A Windows tool that shows how much CPU, RAM, and disk each app is using. Step 3: Startup app — A program that starts automatically when the computer starts, slowing it down. Step 4: Router — The box that connects a home network to the internet and shares the connection by Wi-Fi. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Check whether a computer is overheating and cool it down. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Wi-Fi” mean?",
      "choices": [
        "Wireless networking: how a computer connects to a router without a cable.",
        "The box that connects a home network to the internet and shares the connection by Wi-Fi.",
        "A setting that switches off all wireless connections, including Wi-Fi.",
        "A wired network connection, using a cable to the router; a useful test when Wi-Fi fails."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Wi-Fi means: Wireless networking: how a computer connects to a router without a cable. (b) is the definition of Router, not of Wi-Fi. (c) is the definition of Airplane mode, not of Wi-Fi. (d) is the definition of Ethernet, not of Wi-Fi."
    },
    {
      "q": "What does the term “Router” mean?",
      "choices": [
        "Wireless networking: how a computer connects to a router without a cable.",
        "The box that connects a home network to the internet and shares the connection by Wi-Fi.",
        "A setting that switches off all wireless connections, including Wi-Fi.",
        "A wired network connection, using a cable to the router; a useful test when Wi-Fi fails."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Router means: The box that connects a home network to the internet and shares the connection by Wi-Fi. (a) is the definition of Wi-Fi, not of Router. (c) is the definition of Airplane mode, not of Router. (d) is the definition of Ethernet, not of Router."
    },
    {
      "q": "What does the term “Airplane mode” mean?",
      "choices": [
        "Wireless networking: how a computer connects to a router without a cable.",
        "The box that connects a home network to the internet and shares the connection by Wi-Fi.",
        "A setting that switches off all wireless connections, including Wi-Fi.",
        "A wired network connection, using a cable to the router; a useful test when Wi-Fi fails."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Airplane mode means: A setting that switches off all wireless connections, including Wi-Fi. (a) is the definition of Wi-Fi, not of Airplane mode. (b) is the definition of Router, not of Airplane mode. (d) is the definition of Ethernet, not of Airplane mode."
    },
    {
      "q": "What does the term “Ethernet” mean?",
      "choices": [
        "Wireless networking: how a computer connects to a router without a cable.",
        "The box that connects a home network to the internet and shares the connection by Wi-Fi.",
        "A setting that switches off all wireless connections, including Wi-Fi.",
        "A wired network connection, using a cable to the router; a useful test when Wi-Fi fails."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Ethernet means: A wired network connection, using a cable to the router; a useful test when Wi-Fi fails. (a) is the definition of Wi-Fi, not of Ethernet. (b) is the definition of Router, not of Ethernet. (c) is the definition of Airplane mode, not of Ethernet."
    },
    {
      "q": "Which term means: The slowest part in a computer, which limits how fast the whole machine can go.",
      "choices": [
        "Bottleneck",
        "Wi-Fi",
        "Router",
        "Airplane mode"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Bottleneck is the term for: The slowest part in a computer, which limits how fast the whole machine can go. (b) Wi-Fi means Wireless networking: how a computer connects to a router without a cable. (c) Router means The box that connects a home network to the internet and shares the connection by Wi-Fi. (d) Airplane mode means A setting that switches off all wireless connections, including Wi-Fi."
    },
    {
      "q": "Which term means: A Windows tool that shows how much CPU, RAM, and disk each app is using.",
      "choices": [
        "Wi-Fi",
        "Task Manager",
        "Router",
        "Airplane mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Task Manager is the term for: A Windows tool that shows how much CPU, RAM, and disk each app is using. (a) Wi-Fi means Wireless networking: how a computer connects to a router without a cable. (c) Router means The box that connects a home network to the internet and shares the connection by Wi-Fi. (d) Airplane mode means A setting that switches off all wireless connections, including Wi-Fi."
    },
    {
      "q": "Which term means: A program that starts automatically when the computer starts, slowing it down.",
      "choices": [
        "Wi-Fi",
        "Router",
        "Startup app",
        "Airplane mode"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Startup app is the term for: A program that starts automatically when the computer starts, slowing it down. (a) Wi-Fi means Wireless networking: how a computer connects to a router without a cable. (b) Router means The box that connects a home network to the internet and shares the connection by Wi-Fi. (d) Airplane mode means A setting that switches off all wireless connections, including Wi-Fi."
    },
    {
      "q": "Which term means: A computer getting too hot, usually from dust, blocked vents, or dried thermal paste.",
      "choices": [
        "Wi-Fi",
        "Router",
        "Airplane mode",
        "Overheating"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Overheating is the term for: A computer getting too hot, usually from dust, blocked vents, or dried thermal paste. (a) Wi-Fi means Wireless networking: how a computer connects to a router without a cable. (b) Router means The box that connects a home network to the internet and shares the connection by Wi-Fi. (c) Airplane mode means A setting that switches off all wireless connections, including Wi-Fi."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Network, Slow PC & Overheating Fixes: Quick Reference</h3>\n<p><strong>Core idea:</strong> Fix a computer with no Wi-Fi, step by step.</p>\n<p><strong>Key terms:</strong> Wi-Fi · Router · Airplane mode · Ethernet · Bottleneck · Task Manager · Startup app · Overheating.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Fix a computer with no Wi-Fi, step by step.</li>\n<li>Fix a computer that is slow, by finding the bottleneck.</li>\n<li>Check whether a computer is overheating and cool it down.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
