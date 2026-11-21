// cmp106 - Module 11: Diagnosing Faults Step by Step
module.exports = {
  "number": 11,
  "slug": "diagnosing-faults-step-by-step",
  "title": "Diagnosing Faults Step by Step",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain a step-by-step method for finding a computer fault.",
    "Tell a hardware fault from a software fault.",
    "Diagnose a computer that will not turn on.",
    "Diagnose a computer that turns on but shows no display.",
    "Explain what beep codes are and how to use them."
  ],
  "sections": [
    {
      "heading": "The Method: Change One Thing at a Time",
      "html": "<p>Troubleshooting is not guessing; it is a method. One: describe the problem exactly — what happens, when, and what changed just before it started. Two: think of the simplest cause first. Three: test one thing at a time, and note the result. Four: when you find the fix, check it properly before calling the job done. Changing three things at once tells you nothing, because you will never know which change fixed it.</p>\n<p>Write down what you tried. A notebook — paper is fine — stops you repeating tests and lets someone else pick up where you left off. Professionals write everything down; beginners who do not, go in circles.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Change one thing at a time, and write down what you tried. Guessing in circles fixes nothing. </div></p>\n"
    },
    {
      "heading": "Hardware or Software?",
      "html": "<p>The first question about any fault is whether it is hardware or software. If the problem happens before the operating system loads — no power, no display, beeps — it is hardware. If it happens only in one app, it is probably that app. If it happens in every app but the computer starts fine, it could be the operating system or a driver.</p>\n<p>A useful test: does the problem follow the part or the software? A fault that stays when you try a different monitor is not the monitor. A fault that disappears when you start the computer in safe mode is probably a driver or a startup app, not the hardware. Isolate the fault by swapping one thing at a time.</p>\n"
    },
    {
      "heading": "Won't Turn On at All",
      "html": "<p>Nothing happens when you press the power button — no lights, no fans, no sound. Work through the simple checks in order. Is the power cable firmly in at both ends, and is the wall socket switched on? Try another socket, and another cable if you have one. Is the power supply's own switch (on the back) on? Is the power button cable inside the case firmly connected?</p>\n<p>If the simple checks pass and still nothing happens, the power supply is the prime suspect. A power supply tester, or a known-good spare supply, can confirm it. Do not open the supply — replace it. If a new supply still gives nothing, the fault may be the motherboard or the power button itself, and that is a job for a technician.</p>\n"
    },
    {
      "heading": "Turns On, But No Display",
      "html": "<p>The fans spin and the lights come on, but the screen stays black. Check the monitor first: is it on, is its cable firmly in at both ends, and is it set to the right input (HDMI 1, for example)? Try the monitor on another computer, or another monitor on this one, to find which side the fault is on. Check the monitor cable is plugged into the graphics card, not the motherboard, if a card is fitted.</p>\n<p>If the monitor is fine, listen. Beep codes are the motherboard's way of telling you what failed during its startup check: a pattern of short and long beeps, whose meaning is in the motherboard manual. One common cause is RAM that is not seated: power off, unplug, take the sticks out, and push them back in until both clips click. If the computer has more than one RAM stick, try one at a time — a single faulty stick is a common cause of a black screen.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Describe the fault exactly, test the simplest cause first, change one thing at a time.</li>\n<li>Faults before the operating system loads are hardware; faults in one app are usually that app.</li>\n<li>Won't turn on: check the cable, socket, and power supply switch first.</li>\n<li>No display: check the monitor, the cable, the input, and the RAM seating.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Changing three things at once and never knowing which one fixed it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Skipping the simple checks — cable, socket, monitor input — and assuming the worst.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Troubleshooting",
      "def": "Finding the cause of a computer fault step by step, testing one thing at a time."
    },
    {
      "term": "Beep code",
      "def": "A pattern of beeps from the motherboard during startup, saying what failed its check."
    },
    {
      "term": "POST",
      "def": "Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    },
    {
      "term": "Safe mode",
      "def": "Starting an operating system with only the essential parts, to test whether a driver or app is the cause."
    },
    {
      "term": "Isolate",
      "def": "Narrowing a fault down by swapping or removing one thing at a time."
    },
    {
      "term": "Power supply",
      "def": "The part that turns wall electricity into safe low-voltage power for the computer's parts."
    },
    {
      "term": "Monitor",
      "def": "The screen that shows a computer's picture."
    },
    {
      "term": "Input",
      "def": "Which socket a monitor is listening to, such as HDMI 1 or DisplayPort."
    },
    {
      "term": "RAM",
      "def": "Random Access Memory: the fast short-term memory where the CPU keeps what it is working on."
    },
    {
      "term": "Driver",
      "def": "Software that lets the operating system talk to a piece of hardware, such as a graphics card."
    },
    {
      "term": "Hardware fault",
      "def": "A fault in a physical part, such as a dead power supply or a loose cable."
    },
    {
      "term": "Software fault",
      "def": "A fault in a program, the operating system, or a driver."
    },
    {
      "term": "Technician",
      "def": "A trained person who repairs computers; ask one when a job is beyond your skill."
    },
    {
      "term": "Notebook",
      "def": "A written record of what you tried and what happened, so you do not repeat tests."
    },
    {
      "term": "Symptom",
      "def": "What you can see or hear is wrong, such as a black screen or a beeping sound."
    }
  ],
  "video": {
    "title": "His PC Turns On But No Display 😬",
    "embedUrl": "https://www.youtube.com/embed/XhbLDEBPUwY",
    "note": "Watch a no-display fault worked through in order, and write down each check before the answer is given.",
    "more": [
      {
        "title": "PC Turns ON But NO DISPLAY? 🚨 Check These FIRST!",
        "url": "https://www.youtube.com/watch?v=XR4KAQ1fUF0"
      },
      {
        "title": "Gaming PC has NO Display - Let's Fix It #shorts #pcrepair #pcgaming #pc #gamingpc",
        "url": "https://www.youtube.com/watch?v=Tkw92iiHvhM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Troubleshooting” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Troubleshooting — Finding the cause of a computer fault step by step, testing one thing at a time. Step 2: It matters because it is part of: Explain a step-by-step method for finding a computer fault. Step 3: An example from the module is the way troubleshooting shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Beep code” and “POST”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Beep code — A pattern of beeps from the motherboard during startup, saying what failed its check. Step 2: POST — Power-On Self-Test: the motherboard's check of the parts when the computer starts. Step 3: They differ because the first is about beep code while the second is about post; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Tell a hardware fault from a software fault.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Tell a hardware fault from a software fault. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Safe mode” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Safe mode — Starting an operating system with only the essential parts, to test whether a driver or app is the cause. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Isolate — Narrowing a fault down by swapping or removing one thing at a time. Step 2: Power supply — The part that turns wall electricity into safe low-voltage power for the computer's parts. Step 3: Monitor — The screen that shows a computer's picture. Step 4: Beep code — A pattern of beeps from the motherboard during startup, saying what failed its check. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Diagnose a computer that will not turn on. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Troubleshooting” mean?",
      "choices": [
        "Finding the cause of a computer fault step by step, testing one thing at a time.",
        "A pattern of beeps from the motherboard during startup, saying what failed its check.",
        "Power-On Self-Test: the motherboard's check of the parts when the computer starts.",
        "Starting an operating system with only the essential parts, to test whether a driver or app is the cause."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Troubleshooting means: Finding the cause of a computer fault step by step, testing one thing at a time. (b) is the definition of Beep code, not of Troubleshooting. (c) is the definition of POST, not of Troubleshooting. (d) is the definition of Safe mode, not of Troubleshooting."
    },
    {
      "q": "What does the term “Beep code” mean?",
      "choices": [
        "Finding the cause of a computer fault step by step, testing one thing at a time.",
        "A pattern of beeps from the motherboard during startup, saying what failed its check.",
        "Power-On Self-Test: the motherboard's check of the parts when the computer starts.",
        "Starting an operating system with only the essential parts, to test whether a driver or app is the cause."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Beep code means: A pattern of beeps from the motherboard during startup, saying what failed its check. (a) is the definition of Troubleshooting, not of Beep code. (c) is the definition of POST, not of Beep code. (d) is the definition of Safe mode, not of Beep code."
    },
    {
      "q": "What does the term “POST” mean?",
      "choices": [
        "Finding the cause of a computer fault step by step, testing one thing at a time.",
        "A pattern of beeps from the motherboard during startup, saying what failed its check.",
        "Power-On Self-Test: the motherboard's check of the parts when the computer starts.",
        "Starting an operating system with only the essential parts, to test whether a driver or app is the cause."
      ],
      "answer": 2,
      "explanation": "Correct: (c). POST means: Power-On Self-Test: the motherboard's check of the parts when the computer starts. (a) is the definition of Troubleshooting, not of POST. (b) is the definition of Beep code, not of POST. (d) is the definition of Safe mode, not of POST."
    },
    {
      "q": "What does the term “Safe mode” mean?",
      "choices": [
        "Finding the cause of a computer fault step by step, testing one thing at a time.",
        "A pattern of beeps from the motherboard during startup, saying what failed its check.",
        "Power-On Self-Test: the motherboard's check of the parts when the computer starts.",
        "Starting an operating system with only the essential parts, to test whether a driver or app is the cause."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Safe mode means: Starting an operating system with only the essential parts, to test whether a driver or app is the cause. (a) is the definition of Troubleshooting, not of Safe mode. (b) is the definition of Beep code, not of Safe mode. (c) is the definition of POST, not of Safe mode."
    },
    {
      "q": "Which term means: Narrowing a fault down by swapping or removing one thing at a time.",
      "choices": [
        "Isolate",
        "Troubleshooting",
        "Beep code",
        "POST"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Isolate is the term for: Narrowing a fault down by swapping or removing one thing at a time. (b) Troubleshooting means Finding the cause of a computer fault step by step, testing one thing at a time. (c) Beep code means A pattern of beeps from the motherboard during startup, saying what failed its check. (d) POST means Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    },
    {
      "q": "Which term means: The part that turns wall electricity into safe low-voltage power for the computer's parts.",
      "choices": [
        "Troubleshooting",
        "Power supply",
        "Beep code",
        "POST"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power supply is the term for: The part that turns wall electricity into safe low-voltage power for the computer's parts. (a) Troubleshooting means Finding the cause of a computer fault step by step, testing one thing at a time. (c) Beep code means A pattern of beeps from the motherboard during startup, saying what failed its check. (d) POST means Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    },
    {
      "q": "Which term means: The screen that shows a computer's picture.",
      "choices": [
        "Troubleshooting",
        "Beep code",
        "Monitor",
        "POST"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Monitor is the term for: The screen that shows a computer's picture. (a) Troubleshooting means Finding the cause of a computer fault step by step, testing one thing at a time. (b) Beep code means A pattern of beeps from the motherboard during startup, saying what failed its check. (d) POST means Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    },
    {
      "q": "Which term means: Which socket a monitor is listening to, such as HDMI 1 or DisplayPort.",
      "choices": [
        "Troubleshooting",
        "Beep code",
        "POST",
        "Input"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Input is the term for: Which socket a monitor is listening to, such as HDMI 1 or DisplayPort. (a) Troubleshooting means Finding the cause of a computer fault step by step, testing one thing at a time. (b) Beep code means A pattern of beeps from the motherboard during startup, saying what failed its check. (c) POST means Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Diagnosing Faults Step by Step: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain a step-by-step method for finding a computer fault.</p>\n<p><strong>Key terms:</strong> Troubleshooting · Beep code · POST · Safe mode · Isolate · Power supply · Monitor · Input.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain a step-by-step method for finding a computer fault.</li>\n<li>Tell a hardware fault from a software fault.</li>\n<li>Diagnose a computer that will not turn on.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
