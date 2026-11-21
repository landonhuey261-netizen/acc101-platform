// cmp106 - Module 3: RAM: Short-Term Memory
module.exports = {
  "number": 3,
  "slug": "ram-short-term-memory",
  "title": "RAM: Short-Term Memory",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what RAM does and why a computer needs it.",
    "Explain the difference between RAM and storage.",
    "Explain what happens when a computer runs out of RAM.",
    "Read a RAM stick's size and type (DDR4, DDR5) and say what they mean.",
    "Explain how to check how much RAM a computer is using."
  ],
  "sections": [
    {
      "heading": "RAM Is the Desk",
      "html": "<p>RAM (Random Access Memory) is the computer's desk: the place where the CPU keeps the apps and data it is working on right now. When you open a web browser, the browser is loaded from storage into RAM. When you close it, its space on the desk is cleared. RAM is fast — far faster than storage — and it is temporary: turn the power off, and everything in RAM is gone.</p>\n<p>That temporary nature is the point. RAM is working space, not a filing cabinet. Storage keeps things forever; RAM keeps things handy for the next few seconds. A computer needs both, and mixing them up is the most common beginner confusion in hardware.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> RAM is the desk: fast, temporary working space. Storage is the filing cabinet: slow, permanent. </div></p>\n"
    },
    {
      "heading": "How Much RAM Is Enough?",
      "html": "<p>RAM is measured in gigabytes (GB). A computer with 8 GB can browse, write documents, and watch video comfortably. 16 GB is the comfortable amount for most people in 2026, and it is what you should aim for when buying or upgrading. 32 GB suits gaming, video editing, and running many heavy apps at once. More RAM than you use does nothing — the benefit stops when you have enough.</p>\n<p>RAM comes on sticks that plug into slots on the motherboard. A stick might be 8 GB or 16 GB, and its type — DDR4 or DDR5 — must match the motherboard. DDR5 is the newer type and is faster, but a DDR5 stick will not fit or work in a DDR4 slot. Matching the type is the first check when buying RAM, and Module 9 covers it in detail.</p>\n"
    },
    {
      "heading": "Running Out of RAM",
      "html": "<p>When RAM fills up, the computer starts using part of the storage as pretend RAM — a trick called paging, or swapping. Storage is far slower than RAM, so everything stutters: apps take ages to switch, the mouse lags, and the hard drive light blinks constantly. That stutter is the classic sign of too little RAM, and adding RAM is often the cheapest big speed-up a computer can get.</p>\n<p>You can see it happening in Task Manager on Windows (Ctrl + Shift + Esc) or Activity Monitor on a Mac: the memory graph sits near 100%, and the disk is busy. If RAM is full and the disk is busy, the answer is more RAM — or fewer apps open at once.</p>\n"
    },
    {
      "heading": "Checking and Upgrading RAM",
      "html": "<p>Before buying RAM, find out what is already there: how many sticks, how big, and which type. The computer's settings or Task Manager will tell you the amount; the motherboard's manual or a free system-information tool will tell you the type and how many slots are free. Buy the same type, and if you can, match the size of the sticks you already have.</p>\n<p>Fitting RAM is one of the easiest upgrades: power off, unplug, touch the metal case to discharge static, open the case, push the stick firmly into a free slot until the clips click, and close up. Module 10 gives the full safety steps. If the computer beeps and shows nothing after a RAM change, the stick is usually not seated properly — push it in again until both clips click.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>RAM is fast, temporary working space for what the CPU is doing now.</li>\n<li>Storage keeps things forever; RAM forgets everything when the power goes off.</li>\n<li>16 GB is the comfortable amount for most people; more only helps if you use it.</li>\n<li>When RAM fills up, the computer uses slow storage as pretend RAM and stutters.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing RAM with storage. “I have 1 TB of memory” usually means storage, not RAM.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying the wrong type of RAM. DDR4 and DDR5 are not interchangeable.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "RAM",
      "def": "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
    },
    {
      "term": "Gigabyte",
      "def": "A unit of memory or storage; 1 GB is about a billion bytes."
    },
    {
      "term": "DDR4",
      "def": "An older type of RAM; a DDR4 stick only works in a DDR4 slot."
    },
    {
      "term": "DDR5",
      "def": "The newer type of RAM, faster than DDR4, needing a DDR5 slot."
    },
    {
      "term": "Memory stick",
      "def": "A small board holding RAM chips, which plugs into a slot on the motherboard."
    },
    {
      "term": "Memory slot",
      "def": "A fitting on the motherboard that a RAM stick plugs into."
    },
    {
      "term": "Paging",
      "def": "Using part of storage as pretend RAM when real RAM is full; slow, and a sign more RAM is needed."
    },
    {
      "term": "Task Manager",
      "def": "A Windows tool that shows how much CPU, RAM, and disk each app is using."
    },
    {
      "term": "Storage",
      "def": "Where a computer keeps files long term, such as a hard drive or an SSD."
    },
    {
      "term": "Cache",
      "def": "Very fast memory inside a CPU holding the instructions and data it is about to need."
    },
    {
      "term": "Volatile",
      "def": "Memory that forgets everything when the power goes off, such as RAM."
    },
    {
      "term": "Upgrade",
      "def": "Replacing or adding a part to make a computer faster or more capable."
    },
    {
      "term": "Static",
      "def": "A small electric charge on your body that can damage computer parts; discharged by touching metal."
    },
    {
      "term": "Slot",
      "def": "A fitting on a board that a part plugs into."
    },
    {
      "term": "Multitasking",
      "def": "Running several apps at once, sharing the CPU's cores between them."
    }
  ],
  "video": {
    "title": "How does Computer Memory Work? 💻🛠",
    "embedUrl": "https://www.youtube.com/embed/7J7X7aZvMXQ",
    "note": "Watch how RAM works and why it forgets everything when the power goes off. Then check your own computer's RAM amount.",
    "more": [
      {
        "title": "How RAM Works 🤔",
        "url": "https://www.youtube.com/watch?v=fXpTLFTfN_w"
      },
      {
        "title": "What RAM Actually Does (Explained in 37 Seconds) #Shorts",
        "url": "https://www.youtube.com/watch?v=uZ5J-m0U5UE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “RAM” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: RAM — Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. Step 2: It matters because it is part of: Explain what RAM does and why a computer needs it. Step 3: An example from the module is the way ram shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Gigabyte” and “DDR4”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gigabyte — A unit of memory or storage; 1 GB is about a billion bytes. Step 2: DDR4 — An older type of RAM; a DDR4 stick only works in a DDR4 slot. Step 3: They differ because the first is about gigabyte while the second is about ddr4; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between RAM and storage.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between RAM and storage. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “DDR5” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: DDR5 — The newer type of RAM, faster than DDR4, needing a DDR5 slot. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Memory stick — A small board holding RAM chips, which plugs into a slot on the motherboard. Step 2: Memory slot — A fitting on the motherboard that a RAM stick plugs into. Step 3: Paging — Using part of storage as pretend RAM when real RAM is full; slow, and a sign more RAM is needed. Step 4: Gigabyte — A unit of memory or storage; 1 GB is about a billion bytes. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what happens when a computer runs out of RAM. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “RAM” mean?",
      "choices": [
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on.",
        "A unit of memory or storage; 1 GB is about a billion bytes.",
        "An older type of RAM; a DDR4 stick only works in a DDR4 slot.",
        "The newer type of RAM, faster than DDR4, needing a DDR5 slot."
      ],
      "answer": 0,
      "explanation": "Correct: (a). RAM means: Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (b) is the definition of Gigabyte, not of RAM. (c) is the definition of DDR4, not of RAM. (d) is the definition of DDR5, not of RAM."
    },
    {
      "q": "What does the term “Gigabyte” mean?",
      "choices": [
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on.",
        "A unit of memory or storage; 1 GB is about a billion bytes.",
        "An older type of RAM; a DDR4 stick only works in a DDR4 slot.",
        "The newer type of RAM, faster than DDR4, needing a DDR5 slot."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gigabyte means: A unit of memory or storage; 1 GB is about a billion bytes. (a) is the definition of RAM, not of Gigabyte. (c) is the definition of DDR4, not of Gigabyte. (d) is the definition of DDR5, not of Gigabyte."
    },
    {
      "q": "What does the term “DDR4” mean?",
      "choices": [
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on.",
        "A unit of memory or storage; 1 GB is about a billion bytes.",
        "An older type of RAM; a DDR4 stick only works in a DDR4 slot.",
        "The newer type of RAM, faster than DDR4, needing a DDR5 slot."
      ],
      "answer": 2,
      "explanation": "Correct: (c). DDR4 means: An older type of RAM; a DDR4 stick only works in a DDR4 slot. (a) is the definition of RAM, not of DDR4. (b) is the definition of Gigabyte, not of DDR4. (d) is the definition of DDR5, not of DDR4."
    },
    {
      "q": "What does the term “DDR5” mean?",
      "choices": [
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on.",
        "A unit of memory or storage; 1 GB is about a billion bytes.",
        "An older type of RAM; a DDR4 stick only works in a DDR4 slot.",
        "The newer type of RAM, faster than DDR4, needing a DDR5 slot."
      ],
      "answer": 3,
      "explanation": "Correct: (d). DDR5 means: The newer type of RAM, faster than DDR4, needing a DDR5 slot. (a) is the definition of RAM, not of DDR5. (b) is the definition of Gigabyte, not of DDR5. (c) is the definition of DDR4, not of DDR5."
    },
    {
      "q": "Which term means: A small board holding RAM chips, which plugs into a slot on the motherboard.",
      "choices": [
        "Memory stick",
        "RAM",
        "Gigabyte",
        "DDR4"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Memory stick is the term for: A small board holding RAM chips, which plugs into a slot on the motherboard. (b) RAM means Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (c) Gigabyte means A unit of memory or storage; 1 GB is about a billion bytes. (d) DDR4 means An older type of RAM; a DDR4 stick only works in a DDR4 slot."
    },
    {
      "q": "Which term means: A fitting on the motherboard that a RAM stick plugs into.",
      "choices": [
        "RAM",
        "Memory slot",
        "Gigabyte",
        "DDR4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Memory slot is the term for: A fitting on the motherboard that a RAM stick plugs into. (a) RAM means Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (c) Gigabyte means A unit of memory or storage; 1 GB is about a billion bytes. (d) DDR4 means An older type of RAM; a DDR4 stick only works in a DDR4 slot."
    },
    {
      "q": "Which term means: Using part of storage as pretend RAM when real RAM is full; slow, and a sign more RAM is needed.",
      "choices": [
        "RAM",
        "Gigabyte",
        "Paging",
        "DDR4"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Paging is the term for: Using part of storage as pretend RAM when real RAM is full; slow, and a sign more RAM is needed. (a) RAM means Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (b) Gigabyte means A unit of memory or storage; 1 GB is about a billion bytes. (d) DDR4 means An older type of RAM; a DDR4 stick only works in a DDR4 slot."
    },
    {
      "q": "Which term means: A Windows tool that shows how much CPU, RAM, and disk each app is using.",
      "choices": [
        "RAM",
        "Gigabyte",
        "DDR4",
        "Task Manager"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Task Manager is the term for: A Windows tool that shows how much CPU, RAM, and disk each app is using. (a) RAM means Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (b) Gigabyte means A unit of memory or storage; 1 GB is about a billion bytes. (c) DDR4 means An older type of RAM; a DDR4 stick only works in a DDR4 slot."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — RAM: Short-Term Memory: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what RAM does and why a computer needs it.</p>\n<p><strong>Key terms:</strong> RAM · Gigabyte · DDR4 · DDR5 · Memory stick · Memory slot · Paging · Task Manager.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what RAM does and why a computer needs it.</li>\n<li>Explain the difference between RAM and storage.</li>\n<li>Explain what happens when a computer runs out of RAM.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
