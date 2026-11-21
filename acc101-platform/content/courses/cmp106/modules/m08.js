// cmp106 - Module 8: Peripherals & Ports
module.exports = {
  "number": 8,
  "slug": "peripherals-and-ports",
  "title": "Peripherals & Ports",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main peripherals and what each one does.",
    "Explain what USB is and how its versions differ.",
    "Connect a printer, a second monitor, and an external drive.",
    "Explain what a driver is and when to update one.",
    "Fix the commonest peripheral problems: not detected, wrong device, no sound."
  ],
  "sections": [
    {
      "heading": "Peripherals: The Parts You Touch",
      "html": "<p>Peripherals are the devices outside the case: keyboard, mouse, monitor, printer, speakers, webcam, and external drives. They are how you get information into the computer and how the computer gets information back to you. Input devices — keyboard, mouse, microphone, webcam — send things in. Output devices — monitor, speakers, printer — send things out. Storage devices, like an external drive, do both.</p>\n<p>A computer will work with almost any keyboard and mouse, but a printer, a webcam, or a specialist device needs the right software to talk to it. That software is called a driver, and it is the subject of the next section.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Input devices send things in; output devices send things out. Storage does both. </div></p>\n"
    },
    {
      "heading": "USB: One Plug for Almost Everything",
      "html": "<p>USB (Universal Serial Bus) is the standard plug for peripherals: keyboards, mice, drives, phones, printers, and more. The familiar flat plug is USB-A; the small oval plug that fits either way up is USB-C, and it is becoming the standard on new computers and phones. USB versions differ in speed: USB 2.0 is slow but fine for a mouse, USB 3 (often with a blue tongue inside the plug) is far faster for drives, and USB-C can carry power, video, and data through one cable.</p>\n<p>If a device is slow to transfer files, check which USB port it is plugged into — a fast drive in a slow port runs at the slow port's speed. And always eject an external drive before unplugging it, so the computer finishes writing to it first.</p>\n"
    },
    {
      "heading": "Drivers: The Translators",
      "html": "<p>A driver is a small program that lets the operating system talk to a piece of hardware. Windows and macOS include drivers for common devices, so a keyboard or mouse usually just works. A printer, a graphics card, or a new webcam may need its driver installed from the maker's website. The rule for drivers is simple: get them from the maker's own site, never from a random download site that promises to “update all your drivers”.</p>\n<p>Update a driver when a device misbehaves or when the maker fixes a known problem — not just because an update exists. A working driver is a good driver. And if a device stops working after a driver update, roll the driver back to the previous version: the device manager in Windows can do that in a few clicks.</p>\n"
    },
    {
      "heading": "Common Peripheral Problems",
      "html": "<p>Device not detected? Try another USB port, then another cable — cables fail more often than devices do. Check the device manager to see whether the computer sees the device at all, and whether it reports an error. Wrong device doing the job — sound coming from the monitor instead of the speakers, for example? Check the sound settings and pick the right output.</p>\n<p>No sound at all? Check three things in order: is the volume up and not muted, is the right output chosen, and is the cable plugged into the right socket? Most peripheral problems are a cable, a port, or a setting — not a broken device. Work through the simple checks first.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Input devices send things in; output devices send things out.</li>\n<li>USB-A is the flat plug; USB-C is the oval plug that fits either way up.</li>\n<li>A driver lets the operating system talk to a device; get it from the maker.</li>\n<li>Most peripheral problems are a cable, a port, or a setting — check those first.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Downloading drivers from random sites that promise to update everything.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Unplugging an external drive without ejecting it first.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Peripheral",
      "def": "A device outside the case, such as a keyboard, mouse, monitor, or printer."
    },
    {
      "term": "Input device",
      "def": "A device that sends information into a computer, such as a keyboard or mouse."
    },
    {
      "term": "Output device",
      "def": "A device that sends information out of a computer, such as a monitor or printer."
    },
    {
      "term": "USB",
      "def": "Universal Serial Bus: the standard plug for most peripherals."
    },
    {
      "term": "USB-C",
      "def": "The small oval USB plug that fits either way up and can carry power, video, and data."
    },
    {
      "term": "USB-A",
      "def": "The familiar flat rectangular USB plug."
    },
    {
      "term": "Driver",
      "def": "Software that lets the operating system talk to a piece of hardware, such as a graphics card."
    },
    {
      "term": "Device manager",
      "def": "A Windows tool listing every device and whether it is working."
    },
    {
      "term": "Printer",
      "def": "A device that puts a computer's documents onto paper."
    },
    {
      "term": "Webcam",
      "def": "A small camera for video calls, built into a laptop or plugged in by USB."
    },
    {
      "term": "External drive",
      "def": "A drive in its own case that plugs in by USB, used for extra space or backups."
    },
    {
      "term": "Eject",
      "def": "Telling the computer to finish writing to a drive before you unplug it."
    },
    {
      "term": "Sound output",
      "def": "The device chosen to play sound, such as speakers or headphones."
    },
    {
      "term": "Bluetooth",
      "def": "A short-range wireless way for devices such as headphones and mice to connect."
    },
    {
      "term": "Port",
      "def": "A socket on a computer where a cable or device plugs in."
    }
  ],
  "video": {
    "title": "How Your PC Actually Works in 50 Second",
    "embedUrl": "https://www.youtube.com/embed/o96ZWR2JG-c",
    "note": "Watch a tour of a computer's ports and plugs, and identify each port on the back of a real computer.",
    "more": [
      {
        "title": "Inside a CPU: The Tiny Transistors Powering Modern Computing",
        "url": "https://www.youtube.com/watch?v=QBHsxX8CMb8"
      },
      {
        "title": "Gaming PC Parts Explained!",
        "url": "https://www.youtube.com/watch?v=6PvYy4_qVI0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Peripheral” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Peripheral — A device outside the case, such as a keyboard, mouse, monitor, or printer. Step 2: It matters because it is part of: Name the main peripherals and what each one does. Step 3: An example from the module is the way peripheral shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Input device” and “Output device”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input device — A device that sends information into a computer, such as a keyboard or mouse. Step 2: Output device — A device that sends information out of a computer, such as a monitor or printer. Step 3: They differ because the first is about input device while the second is about output device; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain what USB is and how its versions differ.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what USB is and how its versions differ. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “USB” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: USB — Universal Serial Bus: the standard plug for most peripherals. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: USB-C — The small oval USB plug that fits either way up and can carry power, video, and data. Step 2: USB-A — The familiar flat rectangular USB plug. Step 3: Driver — Software that lets the operating system talk to a piece of hardware, such as a graphics card. Step 4: Input device — A device that sends information into a computer, such as a keyboard or mouse. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Connect a printer, a second monitor, and an external drive. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Peripheral” mean?",
      "choices": [
        "A device outside the case, such as a keyboard, mouse, monitor, or printer.",
        "A device that sends information into a computer, such as a keyboard or mouse.",
        "A device that sends information out of a computer, such as a monitor or printer.",
        "Universal Serial Bus: the standard plug for most peripherals."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Peripheral means: A device outside the case, such as a keyboard, mouse, monitor, or printer. (b) is the definition of Input device, not of Peripheral. (c) is the definition of Output device, not of Peripheral. (d) is the definition of USB, not of Peripheral."
    },
    {
      "q": "What does the term “Input device” mean?",
      "choices": [
        "A device outside the case, such as a keyboard, mouse, monitor, or printer.",
        "A device that sends information into a computer, such as a keyboard or mouse.",
        "A device that sends information out of a computer, such as a monitor or printer.",
        "Universal Serial Bus: the standard plug for most peripherals."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Input device means: A device that sends information into a computer, such as a keyboard or mouse. (a) is the definition of Peripheral, not of Input device. (c) is the definition of Output device, not of Input device. (d) is the definition of USB, not of Input device."
    },
    {
      "q": "What does the term “Output device” mean?",
      "choices": [
        "A device outside the case, such as a keyboard, mouse, monitor, or printer.",
        "A device that sends information into a computer, such as a keyboard or mouse.",
        "A device that sends information out of a computer, such as a monitor or printer.",
        "Universal Serial Bus: the standard plug for most peripherals."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Output device means: A device that sends information out of a computer, such as a monitor or printer. (a) is the definition of Peripheral, not of Output device. (b) is the definition of Input device, not of Output device. (d) is the definition of USB, not of Output device."
    },
    {
      "q": "What does the term “USB” mean?",
      "choices": [
        "A device outside the case, such as a keyboard, mouse, monitor, or printer.",
        "A device that sends information into a computer, such as a keyboard or mouse.",
        "A device that sends information out of a computer, such as a monitor or printer.",
        "Universal Serial Bus: the standard plug for most peripherals."
      ],
      "answer": 3,
      "explanation": "Correct: (d). USB means: Universal Serial Bus: the standard plug for most peripherals. (a) is the definition of Peripheral, not of USB. (b) is the definition of Input device, not of USB. (c) is the definition of Output device, not of USB."
    },
    {
      "q": "Which term means: The small oval USB plug that fits either way up and can carry power, video, and data.",
      "choices": [
        "USB-C",
        "Peripheral",
        "Input device",
        "Output device"
      ],
      "answer": 0,
      "explanation": "Correct: (a). USB-C is the term for: The small oval USB plug that fits either way up and can carry power, video, and data. (b) Peripheral means A device outside the case, such as a keyboard, mouse, monitor, or printer. (c) Input device means A device that sends information into a computer, such as a keyboard or mouse. (d) Output device means A device that sends information out of a computer, such as a monitor or printer."
    },
    {
      "q": "Which term means: The familiar flat rectangular USB plug.",
      "choices": [
        "Peripheral",
        "USB-A",
        "Input device",
        "Output device"
      ],
      "answer": 1,
      "explanation": "Correct: (b). USB-A is the term for: The familiar flat rectangular USB plug. (a) Peripheral means A device outside the case, such as a keyboard, mouse, monitor, or printer. (c) Input device means A device that sends information into a computer, such as a keyboard or mouse. (d) Output device means A device that sends information out of a computer, such as a monitor or printer."
    },
    {
      "q": "Which term means: Software that lets the operating system talk to a piece of hardware, such as a graphics card.",
      "choices": [
        "Peripheral",
        "Input device",
        "Driver",
        "Output device"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Driver is the term for: Software that lets the operating system talk to a piece of hardware, such as a graphics card. (a) Peripheral means A device outside the case, such as a keyboard, mouse, monitor, or printer. (b) Input device means A device that sends information into a computer, such as a keyboard or mouse. (d) Output device means A device that sends information out of a computer, such as a monitor or printer."
    },
    {
      "q": "Which term means: A Windows tool listing every device and whether it is working.",
      "choices": [
        "Peripheral",
        "Input device",
        "Output device",
        "Device manager"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Device manager is the term for: A Windows tool listing every device and whether it is working. (a) Peripheral means A device outside the case, such as a keyboard, mouse, monitor, or printer. (b) Input device means A device that sends information into a computer, such as a keyboard or mouse. (c) Output device means A device that sends information out of a computer, such as a monitor or printer."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Peripherals & Ports: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main peripherals and what each one does.</p>\n<p><strong>Key terms:</strong> Peripheral · Input device · Output device · USB · USB-C · USB-A · Driver · Device manager.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main peripherals and what each one does.</li>\n<li>Explain what USB is and how its versions differ.</li>\n<li>Connect a printer, a second monitor, and an external drive.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
