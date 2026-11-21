// cmp106 - Module 7: Graphics: GPU & Displays
module.exports = {
  "number": 7,
  "slug": "graphics-gpu-and-displays",
  "title": "Graphics: GPU & Displays",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a GPU does and when you need a separate one.",
    "Explain the difference between integrated and dedicated graphics.",
    "Explain what video memory (VRAM) is.",
    "Read a monitor's size, resolution, and refresh rate and say what they mean.",
    "Connect a monitor with the right cable and port."
  ],
  "sections": [
    {
      "heading": "What the GPU Does",
      "html": "<p>The GPU (Graphics Processing Unit) draws everything on your screen: windows, photos, video, and games. It is built for doing many small calculations at once — the kind of work drawing a picture needs — while the CPU is built for doing a few complicated calculations very fast. A modern GPU has thousands of small cores working in parallel, which is also why GPUs are used for AI work.</p>\n<p>For browsing, documents, and video, the graphics built into the CPU are enough. For modern games, 3D design, and heavy video editing, a separate graphics card — a big board with its own GPU, memory, and fans that plugs into a PCIe slot — is needed. It is usually the most expensive single part in a gaming computer.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The GPU draws the screen. The CPU thinks; the GPU draws, doing thousands of small jobs at once. </div></p>\n"
    },
    {
      "heading": "Integrated vs Dedicated Graphics",
      "html": "<p>Integrated graphics live inside the CPU and share the computer's RAM. They cost nothing extra, use little power, and handle everyday work well. Dedicated graphics are a separate card with their own memory (VRAM) and their own cooling, and they are far faster for games and 3D work — but they cost money, use a lot of power, and need a case and power supply big enough to hold them.</p>\n<p>Many computers have both: the computer uses integrated graphics for light work to save power, and switches to the dedicated card when a game starts. If your computer has a monitor cable plugged into the motherboard, you are using integrated graphics; if it is plugged into the card lower down, you are using the dedicated card. Plugging into the wrong one is a classic “my games are slow” mistake.</p>\n"
    },
    {
      "heading": "VRAM and What the Numbers Mean",
      "html": "<p>VRAM (video memory) is the memory on a graphics card, holding the textures and pictures the GPU is working on. More VRAM lets a game hold more detailed pictures at once. 8 GB of VRAM suits most gaming in 2026; 12 GB or more suits high-detail play on a big screen. Like RAM, more than you use does nothing — but too little causes stuttering as textures are swapped in and out.</p>\n<p>A graphics card's model name tells you its generation and its place in the range, but the honest test is how it performs in the games and apps you actually use. Reviews that test real games are worth more than any number on the box.</p>\n"
    },
    {
      "heading": "Monitors: Size, Resolution, Refresh",
      "html": "<p>A monitor's size is measured diagonally in inches — 24 inches suits most desks. Resolution is how many dots (pixels) make up the picture: 1920 by 1080 (Full HD) is standard, 2560 by 1440 is sharper, and 3840 by 2160 (4K) is sharpest. More pixels need a stronger GPU to fill them, especially in games.</p>\n<p>Refresh rate, in hertz (Hz), is how many times a second the picture is redrawn: 60 Hz is standard, 120 Hz or 144 Hz looks smoother in games and when scrolling. And the cable matters: HDMI and DisplayPort are the modern connections; the old VGA plug is a sign of a very old monitor or computer.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>The GPU draws the screen, doing thousands of small jobs at once.</li>\n<li>Integrated graphics share RAM and suit everyday work; a dedicated card has its own VRAM for games and 3D.</li>\n<li>VRAM holds the pictures the GPU is working on; 8 GB suits most gaming.</li>\n<li>Monitor size, resolution, and refresh rate decide how sharp and smooth the picture is.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Plugging the monitor into the motherboard when a graphics card is fitted. Use the card's ports.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying a 4K monitor for a computer whose graphics cannot fill it in games.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "GPU",
      "def": "Graphics Processing Unit: the part that draws pictures, video, and games on the screen."
    },
    {
      "term": "Graphics card",
      "def": "A separate board with its own GPU, memory, and fans, plugged into a PCIe slot."
    },
    {
      "term": "Integrated graphics",
      "def": "Graphics built into the CPU, sharing the computer's RAM; fine for everyday work."
    },
    {
      "term": "Dedicated graphics",
      "def": "A separate graphics card with its own memory, for games and 3D work."
    },
    {
      "term": "VRAM",
      "def": "Video memory: the memory on a graphics card holding the pictures it is working on."
    },
    {
      "term": "Monitor",
      "def": "The screen that shows a computer's picture."
    },
    {
      "term": "Resolution",
      "def": "How many pixels make up a picture, such as 1920 by 1080."
    },
    {
      "term": "Pixel",
      "def": "A single dot of a picture on a screen."
    },
    {
      "term": "Refresh rate",
      "def": "How many times a second a monitor redraws its picture, measured in hertz (Hz)."
    },
    {
      "term": "HDMI",
      "def": "A modern cable and port for carrying picture and sound to a monitor or TV."
    },
    {
      "term": "DisplayPort",
      "def": "A modern cable and port for carrying a picture to a monitor, common on computers."
    },
    {
      "term": "PCIe slot",
      "def": "A long slot on the motherboard for a graphics card or other add-in card."
    },
    {
      "term": "Texture",
      "def": "The detailed surface picture wrapped onto a 3D shape in a game."
    },
    {
      "term": "Driver",
      "def": "Software that lets the operating system talk to a piece of hardware, such as a graphics card."
    },
    {
      "term": "Frame",
      "def": "One still picture in a moving image; more frames per second looks smoother."
    }
  ],
  "video": {
    "title": "How does a graphics card work? GPUs and Graphics cards explained.",
    "embedUrl": "https://www.youtube.com/embed/Kgcfj_KV-mo",
    "note": "Watch what a GPU does and when you need one, then check whether your own computer uses integrated or dedicated graphics.",
    "more": [
      {
        "title": "GPU Names Explained - RTX, GTX, RX...",
        "url": "https://www.youtube.com/watch?v=vjr0HcXl7Lc"
      },
      {
        "title": "GPUs Explained for Beginners | What is a GPU?",
        "url": "https://www.youtube.com/watch?v=2dFFIFn9Ct0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “GPU” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: GPU — Graphics Processing Unit: the part that draws pictures, video, and games on the screen. Step 2: It matters because it is part of: Explain what a GPU does and when you need a separate one. Step 3: An example from the module is the way gpu shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Graphics card” and “Integrated graphics”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Graphics card — A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. Step 2: Integrated graphics — Graphics built into the CPU, sharing the computer's RAM; fine for everyday work. Step 3: They differ because the first is about graphics card while the second is about integrated graphics; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between integrated and dedicated graphics.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between integrated and dedicated graphics. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Dedicated graphics” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Dedicated graphics — A separate graphics card with its own memory, for games and 3D work. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VRAM — Video memory: the memory on a graphics card holding the pictures it is working on. Step 2: Monitor — The screen that shows a computer's picture. Step 3: Resolution — How many pixels make up a picture, such as 1920 by 1080. Step 4: Graphics card — A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what video memory (VRAM) is. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “GPU” mean?",
      "choices": [
        "Graphics Processing Unit: the part that draws pictures, video, and games on the screen.",
        "A separate board with its own GPU, memory, and fans, plugged into a PCIe slot.",
        "Graphics built into the CPU, sharing the computer's RAM; fine for everyday work.",
        "A separate graphics card with its own memory, for games and 3D work."
      ],
      "answer": 0,
      "explanation": "Correct: (a). GPU means: Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (b) is the definition of Graphics card, not of GPU. (c) is the definition of Integrated graphics, not of GPU. (d) is the definition of Dedicated graphics, not of GPU."
    },
    {
      "q": "What does the term “Graphics card” mean?",
      "choices": [
        "Graphics Processing Unit: the part that draws pictures, video, and games on the screen.",
        "A separate board with its own GPU, memory, and fans, plugged into a PCIe slot.",
        "Graphics built into the CPU, sharing the computer's RAM; fine for everyday work.",
        "A separate graphics card with its own memory, for games and 3D work."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Graphics card means: A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (a) is the definition of GPU, not of Graphics card. (c) is the definition of Integrated graphics, not of Graphics card. (d) is the definition of Dedicated graphics, not of Graphics card."
    },
    {
      "q": "What does the term “Integrated graphics” mean?",
      "choices": [
        "Graphics Processing Unit: the part that draws pictures, video, and games on the screen.",
        "A separate board with its own GPU, memory, and fans, plugged into a PCIe slot.",
        "Graphics built into the CPU, sharing the computer's RAM; fine for everyday work.",
        "A separate graphics card with its own memory, for games and 3D work."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Integrated graphics means: Graphics built into the CPU, sharing the computer's RAM; fine for everyday work. (a) is the definition of GPU, not of Integrated graphics. (b) is the definition of Graphics card, not of Integrated graphics. (d) is the definition of Dedicated graphics, not of Integrated graphics."
    },
    {
      "q": "What does the term “Dedicated graphics” mean?",
      "choices": [
        "Graphics Processing Unit: the part that draws pictures, video, and games on the screen.",
        "A separate board with its own GPU, memory, and fans, plugged into a PCIe slot.",
        "Graphics built into the CPU, sharing the computer's RAM; fine for everyday work.",
        "A separate graphics card with its own memory, for games and 3D work."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Dedicated graphics means: A separate graphics card with its own memory, for games and 3D work. (a) is the definition of GPU, not of Dedicated graphics. (b) is the definition of Graphics card, not of Dedicated graphics. (c) is the definition of Integrated graphics, not of Dedicated graphics."
    },
    {
      "q": "Which term means: Video memory: the memory on a graphics card holding the pictures it is working on.",
      "choices": [
        "VRAM",
        "GPU",
        "Graphics card",
        "Integrated graphics"
      ],
      "answer": 0,
      "explanation": "Correct: (a). VRAM is the term for: Video memory: the memory on a graphics card holding the pictures it is working on. (b) GPU means Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (c) Graphics card means A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (d) Integrated graphics means Graphics built into the CPU, sharing the computer's RAM; fine for everyday work."
    },
    {
      "q": "Which term means: The screen that shows a computer's picture.",
      "choices": [
        "GPU",
        "Monitor",
        "Graphics card",
        "Integrated graphics"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Monitor is the term for: The screen that shows a computer's picture. (a) GPU means Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (c) Graphics card means A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (d) Integrated graphics means Graphics built into the CPU, sharing the computer's RAM; fine for everyday work."
    },
    {
      "q": "Which term means: How many pixels make up a picture, such as 1920 by 1080.",
      "choices": [
        "GPU",
        "Graphics card",
        "Resolution",
        "Integrated graphics"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Resolution is the term for: How many pixels make up a picture, such as 1920 by 1080. (a) GPU means Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (b) Graphics card means A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (d) Integrated graphics means Graphics built into the CPU, sharing the computer's RAM; fine for everyday work."
    },
    {
      "q": "Which term means: A single dot of a picture on a screen.",
      "choices": [
        "GPU",
        "Graphics card",
        "Integrated graphics",
        "Pixel"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Pixel is the term for: A single dot of a picture on a screen. (a) GPU means Graphics Processing Unit: the part that draws pictures, video, and games on the screen. (b) Graphics card means A separate board with its own GPU, memory, and fans, plugged into a PCIe slot. (c) Integrated graphics means Graphics built into the CPU, sharing the computer's RAM; fine for everyday work."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Graphics: GPU & Displays: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a GPU does and when you need a separate one.</p>\n<p><strong>Key terms:</strong> GPU · Graphics card · Integrated graphics · Dedicated graphics · VRAM · Monitor · Resolution · Pixel.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a GPU does and when you need a separate one.</li>\n<li>Explain the difference between integrated and dedicated graphics.</li>\n<li>Explain what video memory (VRAM) is.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
