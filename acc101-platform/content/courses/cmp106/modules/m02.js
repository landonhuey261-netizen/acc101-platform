// cmp106 - Module 2: The CPU: The Brain
module.exports = {
  "number": 2,
  "slug": "the-cpu-the-brain",
  "title": "The CPU: The Brain",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a CPU does, in plain words.",
    "Describe the fetch-decode-execute cycle.",
    "Explain what cores and clock speed (GHz) mean.",
    "Explain why a CPU gets hot and how it is cooled.",
    "Read a CPU's basic specifications and say what they mean."
  ],
  "sections": [
    {
      "heading": "What the CPU Does",
      "html": "<p>The CPU (Central Processing Unit) is the part that runs instructions. Every click, every calculation, every letter you type ends up as instructions the CPU carries out, one after another, billions of times a second. It does not store your files and it does not draw your screen — it thinks, and it tells the other parts what to do.</p>\n<p>A CPU is a small square chip, usually under a fan, sitting in a socket on the motherboard. It has no moving parts. Its speed comes from tiny switches called transistors opening and closing — billions of them, packed into a space smaller than a postage stamp.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The CPU runs instructions. It does not store files or draw the screen; it thinks and directs. </div></p>\n"
    },
    {
      "heading": "Fetch, Decode, Execute",
      "html": "<p>A CPU works in a loop of three steps. Fetch: it takes the next instruction from memory. Decode: it works out what the instruction means. Execute: it does it — add two numbers, compare two values, or move data somewhere. Then it fetches the next instruction, and the loop repeats, billions of times a second. That loop is all a computer ever does.</p>\n<p>Inside the CPU, a tiny bit of very fast memory called a cache holds the instructions and data the CPU is about to need, so it does not have to wait for RAM. A bigger cache usually means a faster CPU, because waiting is the enemy of speed.</p>\n"
    },
    {
      "heading": "Cores and Clock Speed",
      "html": "<p>A core is one thinking unit inside a CPU. A CPU with four cores can do four things at once; a CPU with eight cores can do eight. More cores help when many apps run together or when one app is built to split its work — video editing, for example. For simple jobs like browsing, one fast core matters more than many slow ones.</p>\n<p>Clock speed, measured in gigahertz (GHz), is how many cycles the CPU runs per second: 3 GHz means about three billion cycles a second. But GHz alone does not tell you which CPU is faster — a newer design can do more work in each cycle than an older one at the same speed. Compare cores, clock speed, and how new the design is, together.</p>\n"
    },
    {
      "heading": "Heat: The CPU's Enemy",
      "html": "<p>Running billions of instructions a second makes heat, and a CPU that gets too hot slows itself down to survive — a behaviour called throttling — or shuts the computer off. That is why a CPU sits under a cooler: a metal heatsink with a fan that carries heat away. The contact between the chip and the cooler is helped by thermal paste, a thin layer that fills the tiny gaps.</p>\n<p>If a computer is slow and the fan is roaring, heat is a prime suspect, and Module 12 shows how to check it. Never run a computer with the CPU cooler removed, and never touch a CPU while the power is on.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>The CPU runs instructions in a fetch-decode-execute loop, billions of times a second.</li>\n<li>A core is one thinking unit; more cores mean more things at once.</li>\n<li>Clock speed in GHz is cycles per second, but newer designs do more per cycle.</li>\n<li>A CPU that overheats slows itself down (throttling) or shuts off.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Judging a CPU by GHz alone. Cores and how new the design is matter too.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a computer with the CPU cooler off. It will overheat in seconds.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "CPU",
      "def": "Central Processing Unit: the part that runs instructions and does the thinking."
    },
    {
      "term": "Core",
      "def": "One thinking unit inside a CPU; a four-core CPU can do four things at once."
    },
    {
      "term": "Clock speed",
      "def": "How many cycles a CPU runs per second, measured in gigahertz (GHz)."
    },
    {
      "term": "Gigahertz",
      "def": "A billion cycles per second; the unit used for CPU clock speed."
    },
    {
      "term": "Fetch-decode-execute",
      "def": "The CPU's loop: take an instruction, work out what it means, do it, repeat."
    },
    {
      "term": "Cache",
      "def": "Very fast memory inside a CPU holding the instructions and data it is about to need."
    },
    {
      "term": "Transistor",
      "def": "A tiny switch inside a chip; billions of them make up a CPU."
    },
    {
      "term": "Socket",
      "def": "The fitting on the motherboard that a CPU sits in."
    },
    {
      "term": "Heatsink",
      "def": "A metal block with fins that carries heat away from a CPU."
    },
    {
      "term": "Thermal paste",
      "def": "A thin paste between a CPU and its cooler that helps heat move across."
    },
    {
      "term": "Throttling",
      "def": "A CPU slowing itself down because it is too hot."
    },
    {
      "term": "Fan",
      "def": "A spinning part that moves air over a heatsink to carry heat away."
    },
    {
      "term": "Instruction",
      "def": "One small step a CPU is told to do, such as adding two numbers."
    },
    {
      "term": "Multitasking",
      "def": "Running several apps at once, sharing the CPU's cores between them."
    },
    {
      "term": "Chip",
      "def": "A small square of silicon holding a processor and its transistors."
    }
  ],
  "video": {
    "title": "The Engineering that Runs the Digital World 🛠️⚙️💻 How do CPUs Work?",
    "embedUrl": "https://www.youtube.com/embed/16zrEPOsIcI",
    "note": "Watch the fetch-decode-execute loop explained simply, and say the three steps out loud before the video does.",
    "more": [
      {
        "title": "How Do CPUs Work?",
        "url": "https://www.youtube.com/watch?v=jx-w2o-Lj8g"
      },
      {
        "title": "How a CPU works... in under 3 minutes!",
        "url": "https://www.youtube.com/watch?v=dWGujFI4AYQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “CPU” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CPU — Central Processing Unit: the part that runs instructions and does the thinking. Step 2: It matters because it is part of: Explain what a CPU does, in plain words. Step 3: An example from the module is the way cpu shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Core” and “Clock speed”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Core — One thinking unit inside a CPU; a four-core CPU can do four things at once. Step 2: Clock speed — How many cycles a CPU runs per second, measured in gigahertz (GHz). Step 3: They differ because the first is about core while the second is about clock speed; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe the fetch-decode-execute cycle.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe the fetch-decode-execute cycle. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Gigahertz” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Gigahertz — A billion cycles per second; the unit used for CPU clock speed. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fetch-decode-execute — The CPU's loop: take an instruction, work out what it means, do it, repeat. Step 2: Cache — Very fast memory inside a CPU holding the instructions and data it is about to need. Step 3: Transistor — A tiny switch inside a chip; billions of them make up a CPU. Step 4: Core — One thinking unit inside a CPU; a four-core CPU can do four things at once. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what cores and clock speed (GHz) mean. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “CPU” mean?",
      "choices": [
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "One thinking unit inside a CPU; a four-core CPU can do four things at once.",
        "How many cycles a CPU runs per second, measured in gigahertz (GHz).",
        "A billion cycles per second; the unit used for CPU clock speed."
      ],
      "answer": 0,
      "explanation": "Correct: (a). CPU means: Central Processing Unit: the part that runs instructions and does the thinking. (b) is the definition of Core, not of CPU. (c) is the definition of Clock speed, not of CPU. (d) is the definition of Gigahertz, not of CPU."
    },
    {
      "q": "What does the term “Core” mean?",
      "choices": [
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "One thinking unit inside a CPU; a four-core CPU can do four things at once.",
        "How many cycles a CPU runs per second, measured in gigahertz (GHz).",
        "A billion cycles per second; the unit used for CPU clock speed."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Core means: One thinking unit inside a CPU; a four-core CPU can do four things at once. (a) is the definition of CPU, not of Core. (c) is the definition of Clock speed, not of Core. (d) is the definition of Gigahertz, not of Core."
    },
    {
      "q": "What does the term “Clock speed” mean?",
      "choices": [
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "One thinking unit inside a CPU; a four-core CPU can do four things at once.",
        "How many cycles a CPU runs per second, measured in gigahertz (GHz).",
        "A billion cycles per second; the unit used for CPU clock speed."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Clock speed means: How many cycles a CPU runs per second, measured in gigahertz (GHz). (a) is the definition of CPU, not of Clock speed. (b) is the definition of Core, not of Clock speed. (d) is the definition of Gigahertz, not of Clock speed."
    },
    {
      "q": "What does the term “Gigahertz” mean?",
      "choices": [
        "Central Processing Unit: the part that runs instructions and does the thinking.",
        "One thinking unit inside a CPU; a four-core CPU can do four things at once.",
        "How many cycles a CPU runs per second, measured in gigahertz (GHz).",
        "A billion cycles per second; the unit used for CPU clock speed."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Gigahertz means: A billion cycles per second; the unit used for CPU clock speed. (a) is the definition of CPU, not of Gigahertz. (b) is the definition of Core, not of Gigahertz. (c) is the definition of Clock speed, not of Gigahertz."
    },
    {
      "q": "Which term means: The CPU's loop: take an instruction, work out what it means, do it, repeat.",
      "choices": [
        "Fetch-decode-execute",
        "CPU",
        "Core",
        "Clock speed"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Fetch-decode-execute is the term for: The CPU's loop: take an instruction, work out what it means, do it, repeat. (b) CPU means Central Processing Unit: the part that runs instructions and does the thinking. (c) Core means One thinking unit inside a CPU; a four-core CPU can do four things at once. (d) Clock speed means How many cycles a CPU runs per second, measured in gigahertz (GHz)."
    },
    {
      "q": "Which term means: Very fast memory inside a CPU holding the instructions and data it is about to need.",
      "choices": [
        "CPU",
        "Cache",
        "Core",
        "Clock speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cache is the term for: Very fast memory inside a CPU holding the instructions and data it is about to need. (a) CPU means Central Processing Unit: the part that runs instructions and does the thinking. (c) Core means One thinking unit inside a CPU; a four-core CPU can do four things at once. (d) Clock speed means How many cycles a CPU runs per second, measured in gigahertz (GHz)."
    },
    {
      "q": "Which term means: A tiny switch inside a chip; billions of them make up a CPU.",
      "choices": [
        "CPU",
        "Core",
        "Transistor",
        "Clock speed"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Transistor is the term for: A tiny switch inside a chip; billions of them make up a CPU. (a) CPU means Central Processing Unit: the part that runs instructions and does the thinking. (b) Core means One thinking unit inside a CPU; a four-core CPU can do four things at once. (d) Clock speed means How many cycles a CPU runs per second, measured in gigahertz (GHz)."
    },
    {
      "q": "Which term means: The fitting on the motherboard that a CPU sits in.",
      "choices": [
        "CPU",
        "Core",
        "Clock speed",
        "Socket"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Socket is the term for: The fitting on the motherboard that a CPU sits in. (a) CPU means Central Processing Unit: the part that runs instructions and does the thinking. (b) Core means One thinking unit inside a CPU; a four-core CPU can do four things at once. (c) Clock speed means How many cycles a CPU runs per second, measured in gigahertz (GHz)."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — The CPU: The Brain: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a CPU does, in plain words.</p>\n<p><strong>Key terms:</strong> CPU · Core · Clock speed · Gigahertz · Fetch-decode-execute · Cache · Transistor · Socket.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a CPU does, in plain words.</li>\n<li>Describe the fetch-decode-execute cycle.</li>\n<li>Explain what cores and clock speed (GHz) mean.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
