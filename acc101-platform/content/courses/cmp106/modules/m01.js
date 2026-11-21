// cmp106 - Module 1: Inside the Computer: The Big Picture
module.exports = {
  "number": 1,
  "slug": "inside-the-computer",
  "title": "Inside the Computer: The Big Picture",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main parts inside a desktop computer and what each one does.",
    "Explain the difference between hardware and software.",
    "Describe how data flows between the parts when you open an app.",
    "Explain what the operating system does.",
    "Explain why this app cannot give you a virtual PC to take apart, and what to use instead."
  ],
  "sections": [
    {
      "heading": "Hardware and Software",
      "html": "<p>Hardware is the parts you can touch: the processor, the memory, the storage, the screen, the keyboard. Software is the instructions: the operating system, the apps, the files. Hardware without software does nothing; software without hardware has nowhere to run. This course is about the hardware, and about fixing it when it goes wrong.</p>\n<p>Inside a desktop computer, the parts live in a case — a metal box that holds them, keeps them cool, and keeps fingers away from live electricity. Open a case (safely, with the power off and unplugged, as Module 10 teaches) and you will see the same set of parts in almost every computer, arranged in the same way. Learn the map once, and it works for nearly every PC.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Hardware is the parts you can touch; software is the instructions. This course is about the hardware.</div></p>\n"
    },
    {
      "heading": "The Main Parts",
      "html": "<p>The CPU (processor) does the thinking: it runs the instructions. RAM (memory) is the desk where the CPU keeps what it is working on right now. Storage — a hard drive or an SSD — is the filing cabinet where everything is kept long term. The motherboard is the board everything plugs into, joining the parts together. The power supply turns wall electricity into safe low-voltage power for the parts. The graphics card (GPU) draws pictures on the screen, and the case holds it all together.</p>\n<p>Around the outside are the peripherals: keyboard, mouse, monitor, printer, and speakers. They are the parts you touch and see, and they connect through ports on the back or front of the case. Each part gets its own module in this course.</p>\n"
    },
    {
      "heading": "How Data Flows When You Open an App",
      "html": "<p>When you double-click an app, the operating system finds it on storage and loads it into RAM. The CPU reads the instructions from RAM, one at a time, and does what they say: drawing the window on the screen through the graphics card, waiting for your clicks on the mouse, and saving your work back to storage when you press Save. The whole journey — storage to RAM to CPU to screen — happens thousands of times a second.</p>\n<p>That is why a slow part slows everything down. If storage is slow, the app takes ages to open. If RAM is too small, the computer keeps shuffling data back to storage, and everything stutters. Finding the slow part is the heart of troubleshooting, and Module 12 teaches you how.</p>\n"
    },
    {
      "heading": "The Operating System",
      "html": "<p>The operating system — Windows, macOS, or Linux — is the software that manages the hardware for you. It loads apps, keeps their data separate, talks to the printer and the Wi-Fi, and shows you the desktop. You never talk to the hardware directly; you ask the operating system, and it asks the hardware.</p>\n<p>When a computer misbehaves, the cause can be hardware or software, and telling them apart is a core skill. If the same problem happens in a different operating system on the same computer, it is probably hardware. If it happens only in one app, it is probably software. Module 11 teaches a step-by-step way to tell.</p>\n<p>One honest limit of this app: it cannot give you a virtual PC to take apart. Taking a computer apart is a hands-on skill, and a screen cannot replace a real case, real screws, and real parts. The labs in this course assume you have access to a real computer — your own, a family member's old one, or a practice machine — and they always start with the safety steps in Module 10. Everything in this course — naming the parts, reading symptoms, and working through a diagnosis step by step — can be learned here, and then practised on real hardware.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> This app cannot provide a virtual PC to take apart. Hardware labs assume access to a real computer, with the power off and unplugged first.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Hardware is the parts; software is the instructions.</li>\n<li>CPU thinks, RAM is the desk, storage is the filing cabinet, motherboard joins them, power supply feeds them.</li>\n<li>Opening an app moves it from storage to RAM, and the CPU runs it from there.</li>\n<li>This app teaches hardware knowledge; taking a PC apart needs a real computer.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling the whole computer “the CPU”. The CPU is one part inside the case.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a slow computer always needs a new part. Often the slow part is just one bottleneck.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Hardware",
      "def": "The physical parts of a computer that you can touch, such as the processor and memory."
    },
    {
      "term": "Software",
      "def": "The instructions that run on a computer, such as the operating system and apps."
    },
    {
      "term": "CPU",
      "def": "Central Processing Unit: the part that runs instructions and does the thinking."
    },
    {
      "term": "RAM",
      "def": "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
    },
    {
      "term": "Storage",
      "def": "Where a computer keeps files long term, such as a hard drive or an SSD."
    },
    {
      "term": "Motherboard",
      "def": "The main board inside a computer that everything plugs into."
    },
    {
      "term": "Power supply",
      "def": "The part that turns wall electricity into safe low-voltage power for the computer's parts."
    },
    {
      "term": "GPU",
      "def": "Graphics Processing Unit: the part that draws pictures, video, and games on the screen."
    },
    {
      "term": "Case",
      "def": "The metal box that holds a computer's parts, keeps them cool, and protects them."
    },
    {
      "term": "Peripheral",
      "def": "A device outside the case, such as a keyboard, mouse, monitor, or printer."
    },
    {
      "term": "Operating system",
      "def": "The software that manages the hardware, such as Windows, macOS, or Linux."
    },
    {
      "term": "Port",
      "def": "A socket on a computer where a cable or device plugs in."
    },
    {
      "term": "Desktop computer",
      "def": "A computer built into a case that sits on or under a desk, with a separate screen."
    },
    {
      "term": "Laptop",
      "def": "A computer with its screen, keyboard, and parts built into one portable body."
    },
    {
      "term": "Bottleneck",
      "def": "The slowest part in a computer, which limits how fast the whole machine can go."
    }
  ],
  "video": {
    "title": "Every Computer Component Explained in 14 Minutes",
    "embedUrl": "https://www.youtube.com/embed/VHhAZx4EvM8",
    "note": "Watch every part inside a PC named and pointed at. Pause and name each part back before moving on.",
    "more": [
      {
        "title": "How does Computer Hardware Work?  💻🛠🔬  [3D Animated Teardown]",
        "url": "https://www.youtube.com/watch?v=d86ws7mQYIg"
      },
      {
        "title": "How do Desktop Computers Work? #pcbuild #computerhardware",
        "url": "https://www.youtube.com/watch?v=F6Z6o2ryViQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Hardware” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hardware — The physical parts of a computer that you can touch, such as the processor and memory. Step 2: It matters because it is part of: Name the main parts inside a desktop computer and what each one does. Step 3: An example from the module is the way hardware shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Software” and “CPU”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Software — The instructions that run on a computer, such as the operating system and apps. Step 2: CPU — Central Processing Unit: the part that runs instructions and does the thinking. Step 3: They differ because the first is about software while the second is about cpu; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between hardware and software.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between hardware and software. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “RAM” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: RAM — Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Storage — Where a computer keeps files long term, such as a hard drive or an SSD. Step 2: Motherboard — The main board inside a computer that everything plugs into. Step 3: Power supply — The part that turns wall electricity into safe low-voltage power for the computer's parts. Step 4: Software — The instructions that run on a computer, such as the operating system and apps. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Describe how data flows between the parts when you open an app. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Hardware” mean?",
      "choices": [
        "The physical parts of a computer that you can touch, such as the processor and memory.",
        "The instructions that run on a computer, such as the operating system and apps.",
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hardware means: The physical parts of a computer that you can touch, such as the processor and memory. (b) is the definition of Software, not of Hardware. (c) is the definition of CPU, not of Hardware. (d) is the definition of RAM, not of Hardware."
    },
    {
      "q": "What does the term “Software” mean?",
      "choices": [
        "The physical parts of a computer that you can touch, such as the processor and memory.",
        "The instructions that run on a computer, such as the operating system and apps.",
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Software means: The instructions that run on a computer, such as the operating system and apps. (a) is the definition of Hardware, not of Software. (c) is the definition of CPU, not of Software. (d) is the definition of RAM, not of Software."
    },
    {
      "q": "What does the term “CPU” mean?",
      "choices": [
        "The physical parts of a computer that you can touch, such as the processor and memory.",
        "The instructions that run on a computer, such as the operating system and apps.",
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
      ],
      "answer": 2,
      "explanation": "Correct: (c). CPU means: Central Processing Unit: the part that runs instructions and does the thinking. (a) is the definition of Hardware, not of CPU. (b) is the definition of Software, not of CPU. (d) is the definition of RAM, not of CPU."
    },
    {
      "q": "What does the term “RAM” mean?",
      "choices": [
        "The physical parts of a computer that you can touch, such as the processor and memory.",
        "The instructions that run on a computer, such as the operating system and apps.",
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
      ],
      "answer": 3,
      "explanation": "Correct: (d). RAM means: Random Access Memory: the fast short-term memory where the CPU keeps what it is working on. (a) is the definition of Hardware, not of RAM. (b) is the definition of Software, not of RAM. (c) is the definition of CPU, not of RAM."
    },
    {
      "q": "Which term means: Where a computer keeps files long term, such as a hard drive or an SSD.",
      "choices": [
        "Storage",
        "Hardware",
        "Software",
        "CPU"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Storage is the term for: Where a computer keeps files long term, such as a hard drive or an SSD. (b) Hardware means The physical parts of a computer that you can touch, such as the processor and memory. (c) Software means The instructions that run on a computer, such as the operating system and apps. (d) CPU means Central Processing Unit: the part that runs instructions and does the thinking."
    },
    {
      "q": "Which term means: The main board inside a computer that everything plugs into.",
      "choices": [
        "Hardware",
        "Motherboard",
        "Software",
        "CPU"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Motherboard is the term for: The main board inside a computer that everything plugs into. (a) Hardware means The physical parts of a computer that you can touch, such as the processor and memory. (c) Software means The instructions that run on a computer, such as the operating system and apps. (d) CPU means Central Processing Unit: the part that runs instructions and does the thinking."
    },
    {
      "q": "Which term means: The part that turns wall electricity into safe low-voltage power for the computer's parts.",
      "choices": [
        "Hardware",
        "Software",
        "Power supply",
        "CPU"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Power supply is the term for: The part that turns wall electricity into safe low-voltage power for the computer's parts. (a) Hardware means The physical parts of a computer that you can touch, such as the processor and memory. (b) Software means The instructions that run on a computer, such as the operating system and apps. (d) CPU means Central Processing Unit: the part that runs instructions and does the thinking."
    },
    {
      "q": "Which term means: Graphics Processing Unit: the part that draws pictures, video, and games on the screen.",
      "choices": [
        "Hardware",
        "Software",
        "CPU",
        "GPU"
      ],
      "answer": 3,
      "explanation": "Correct: (d). GPU is the term for: Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (a) Hardware means The physical parts of a computer that you can touch, such as the processor and memory. (b) Software means The instructions that run on a computer, such as the operating system and apps. (c) CPU means Central Processing Unit: the part that runs instructions and does the thinking."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Inside the Computer: The Big Picture: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main parts inside a desktop computer and what each one does.</p>\n<p><strong>Key terms:</strong> Hardware · Software · CPU · RAM · Storage · Motherboard · Power supply · GPU.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main parts inside a desktop computer and what each one does.</li>\n<li>Explain the difference between hardware and software.</li>\n<li>Describe how data flows between the parts when you open an app.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
