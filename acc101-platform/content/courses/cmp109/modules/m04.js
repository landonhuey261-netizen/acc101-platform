// cmp109 - Module 4: Cutting & Trimming
module.exports = {
  "number": 4,
  "slug": "cutting-and-trimming",
  "title": "Cutting & Trimming",
  "estTime": "3–4 hours",
  "objectives": [
    "Cut a clip with the Razor tool and with Ctrl or Command + K.",
    "Trim a clip by dragging its edges and with the Ripple Edit tool.",
    "Remove a section and close the gap with Q and W.",
    "Explain the difference between cutting, trimming, and deleting.",
    "Use J-cuts and L-cuts to smooth dialogue scenes."
  ],
  "sections": [
    {
      "heading": "Cutting: Splitting Clips",
      "html": "<p>Cutting means splitting a clip into two pieces at a point. Place the playhead where you want the cut, press C for the Razor tool and click the clip, or keep the Selection tool and press Ctrl + K on Windows or Command + K on a Mac, which cuts all unlocked tracks at the playhead. The two pieces are now separate clips that can be moved, trimmed, or deleted independently.</p>\n<p>Cut before you trim. First split the clip to isolate the part you do not want, such as a pause or a mistake, then remove that piece. Cutting first and trimming second keeps the timeline organized and stops you from accidentally trimming the wrong end of a clip.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every cut should have a reason: a change of idea, a new shot, or removing dead air. A cut with no reason is a distraction, and viewers notice it even if they cannot say why.</div></p>\n"
    },
    {
      "heading": "Trimming: Adjusting the Ends",
      "html": "<p>Trimming means changing where a clip starts or ends without splitting it. Drag the edge of a clip with the Selection tool to trim it, and the clip gets shorter or longer within the limits of the original footage. Drag the edge while holding the Ripple Edit tool, shortcut B, and the gap closes automatically as you trim.</p>\n<p>The keyboard makes trimming fast. Place the playhead inside a section you want to remove and press Q to ripple-delete everything from the playhead back to the previous cut, or W to ripple-delete everything forward to the next cut. Those two keys cut hours out of trimming a long talking-head video.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Trim with the sound on and your eyes on the audio waveform, the wavy shape on audio clips. Pauses, breaths, and mistakes are visible as flat spots in the waveform, so you can cut them out without guessing.</div></p>\n"
    },
    {
      "heading": "Deleting and Closing Gaps",
      "html": "<p>To delete a clip, select it and press Delete, which leaves a gap, or Shift + Delete, which ripple-deletes it and closes the gap in one step. To delete a section between two cuts, select it and press Shift + Delete. On a Mac, the ripple delete shortcut is Option + Delete.</p>\n<p>A gap in the timeline is dead air in the finished video: the picture freezes on black while the audio keeps playing, or vice versa. After every deletion, check the timeline for gaps and close them, or use ripple delete so they never appear.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If you delete the wrong thing, press Ctrl or Command + Z to undo. Premiere Pro remembers many steps, and undo is free. Do not be afraid to experiment, because every change can be reversed.</div></p>\n"
    },
    {
      "heading": "J-Cuts and L-Cuts",
      "html": "<p>A J-cut is when the audio of the next shot starts before its picture appears: you hear the next person speak while you still see the current speaker. An L-cut is the opposite: the audio of the current shot continues over the picture of the next shot. Both make conversations feel natural, because in real life we hear people before we see them and keep hearing them after the camera moves on.</p>\n<p>To make one, turn off Linked Selection or hold Alt on Windows or Option on a Mac, then drag the audio edge of a clip separately from its video edge. A half-second overlap is a good starting point; listen to it and adjust by ear.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> J-cuts and L-cuts are the difference between an edit that feels like a lecture and one that feels like a conversation. Use them in every interview and dialogue scene you cut.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Cut a clip with the Razor tool and with Ctrl or Command + K.</li>\n<li>Trim a clip by dragging its edges and with the Ripple Edit tool.</li>\n<li>Remove a section and close the gap with Q and W.</li>\n<li>Explain the difference between cutting, trimming, and deleting.</li>\n<li>Use J-cuts and L-cuts to smooth dialogue scenes.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trimming before cutting, and losing track of which end you are changing. Cut first to isolate the unwanted part, then trim.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving gaps in the timeline after deleting clips. Use ripple delete, or close gaps before you export.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Cut",
      "def": "Splitting a clip into two pieces at a point."
    },
    {
      "term": "Trim",
      "def": "Changing where a clip starts or ends without splitting it."
    },
    {
      "term": "Razor tool",
      "def": "The tool that cuts a clip where you click; shortcut C."
    },
    {
      "term": "Ripple Edit tool",
      "def": "The tool that trims a clip and closes the gap; shortcut B."
    },
    {
      "term": "Ripple delete",
      "def": "Removing a clip or section and closing the gap in one step."
    },
    {
      "term": "Waveform",
      "def": "The wavy shape on an audio clip showing how loud the sound is over time."
    },
    {
      "term": "J-cut",
      "def": "An edit where the next clip's audio starts before its picture appears."
    },
    {
      "term": "L-cut",
      "def": "An edit where the current clip's audio continues over the next clip's picture."
    },
    {
      "term": "Linked Selection",
      "def": "The link between a clip's video and audio so they move together."
    },
    {
      "term": "Playhead",
      "def": "The line in the Timeline showing the current moment in the sequence."
    },
    {
      "term": "Dead air",
      "def": "A silent pause or gap in a video that should have been cut out."
    },
    {
      "term": "Undo",
      "def": "Reversing the last action, with Ctrl or Command + Z."
    }
  ],
  "video": {
    "title": "Premiere Pro CC : How to Trim and Cut Video (with Shortcuts)",
    "embedUrl": "https://www.youtube.com/embed/YJhJuuPAzvg",
    "note": "Tutorials on trimming and cutting, the Ripple Edit tool, and J and L cuts. Practice: cut the pauses out of a talking-head clip with Q and W.",
    "more": [
      {
        "title": "E30 - The Ripple Edit - The Tool Bar - Adobe Premiere Pro CC 2020",
        "url": "https://www.youtube.com/watch?v=iGQ6GYDlqGY"
      },
      {
        "title": "How to use J and L cuts for dialog scenes in Premiere Pro",
        "url": "https://www.youtube.com/watch?v=nk6XVcNOvjg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Cut” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cut — Splitting a clip into two pieces at a point. Step 2: It matters because it is part of: Cut a clip with the Razor tool and with Ctrl or Command + K. Step 3: An example from the module is the way cut shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Trim” and “Razor tool”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Trim — Changing where a clip starts or ends without splitting it. Step 2: Razor tool — The tool that cuts a clip where you click; shortcut C. Step 3: They differ because the first is about trim while the second is about razor tool; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Trim a clip by dragging its edges and with the Ripple Edit tool.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Trim a clip by dragging its edges and with the Ripple Edit tool. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Ripple Edit tool” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Ripple Edit tool — The tool that trims a clip and closes the gap; shortcut B. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ripple delete — Removing a clip or section and closing the gap in one step. Step 2: Waveform — The wavy shape on an audio clip showing how loud the sound is over time. Step 3: J-cut — An edit where the next clip's audio starts before its picture appears. Step 4: L-cut — An edit where the current clip's audio continues over the next clip's picture. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Remove a section and close the gap with Q and W. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Cut” mean?",
      "choices": [
        "Splitting a clip into two pieces at a point.",
        "Changing where a clip starts or ends without splitting it.",
        "The tool that cuts a clip where you click; shortcut C.",
        "The tool that trims a clip and closes the gap; shortcut B."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Cut means: Splitting a clip into two pieces at a point. (b) is the definition of Trim, not of Cut. (c) is the definition of Razor tool, not of Cut. (d) is the definition of Ripple Edit tool, not of Cut."
    },
    {
      "q": "What does the term “Trim” mean?",
      "choices": [
        "The tool that cuts a clip where you click; shortcut C.",
        "Changing where a clip starts or ends without splitting it.",
        "The tool that trims a clip and closes the gap; shortcut B.",
        "Removing a clip or section and closing the gap in one step."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Trim means: Changing where a clip starts or ends without splitting it. (a) is the definition of Razor tool, not of Trim. (c) is the definition of Ripple Edit tool, not of Trim. (d) is the definition of Ripple delete, not of Trim."
    },
    {
      "q": "What does the term “Razor tool” mean?",
      "choices": [
        "The tool that trims a clip and closes the gap; shortcut B.",
        "Removing a clip or section and closing the gap in one step.",
        "The tool that cuts a clip where you click; shortcut C.",
        "The wavy shape on an audio clip showing how loud the sound is over time."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Razor tool means: The tool that cuts a clip where you click; shortcut C. (a) is the definition of Ripple Edit tool, not of Razor tool. (b) is the definition of Ripple delete, not of Razor tool. (d) is the definition of Waveform, not of Razor tool."
    },
    {
      "q": "What does the term “Ripple Edit tool” mean?",
      "choices": [
        "Removing a clip or section and closing the gap in one step.",
        "The wavy shape on an audio clip showing how loud the sound is over time.",
        "An edit where the next clip's audio starts before its picture appears.",
        "The tool that trims a clip and closes the gap; shortcut B."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Ripple Edit tool means: The tool that trims a clip and closes the gap; shortcut B. (a) is the definition of Ripple delete, not of Ripple Edit tool. (b) is the definition of Waveform, not of Ripple Edit tool. (c) is the definition of J-cut, not of Ripple Edit tool."
    },
    {
      "q": "Which term means: Removing a clip or section and closing the gap in one step.",
      "choices": [
        "Ripple delete",
        "Waveform",
        "J-cut",
        "L-cut"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ripple delete is the term for: Removing a clip or section and closing the gap in one step. (b) Waveform means The wavy shape on an audio clip showing how loud the sound is over time. (c) J-cut means An edit where the next clip's audio starts before its picture appears. (d) L-cut means An edit where the current clip's audio continues over the next clip's picture."
    },
    {
      "q": "Which term means: The wavy shape on an audio clip showing how loud the sound is over time.",
      "choices": [
        "J-cut",
        "Waveform",
        "L-cut",
        "Linked Selection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Waveform is the term for: The wavy shape on an audio clip showing how loud the sound is over time. (a) J-cut means An edit where the next clip's audio starts before its picture appears. (c) L-cut means An edit where the current clip's audio continues over the next clip's picture. (d) Linked Selection means The link between a clip's video and audio so they move together."
    },
    {
      "q": "Which term means: An edit where the next clip's audio starts before its picture appears.",
      "choices": [
        "L-cut",
        "Linked Selection",
        "J-cut",
        "Playhead"
      ],
      "answer": 2,
      "explanation": "Correct: (c). J-cut is the term for: An edit where the next clip's audio starts before its picture appears. (a) L-cut means An edit where the current clip's audio continues over the next clip's picture. (b) Linked Selection means The link between a clip's video and audio so they move together. (d) Playhead means The line in the Timeline showing the current moment in the sequence."
    },
    {
      "q": "Which term means: An edit where the current clip's audio continues over the next clip's picture.",
      "choices": [
        "Linked Selection",
        "Playhead",
        "Dead air",
        "L-cut"
      ],
      "answer": 3,
      "explanation": "Correct: (d). L-cut is the term for: An edit where the current clip's audio continues over the next clip's picture. (a) Linked Selection means The link between a clip's video and audio so they move together. (b) Playhead means The line in the Timeline showing the current moment in the sequence. (c) Dead air means A silent pause or gap in a video that should have been cut out."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Cutting & Trimming: Quick Reference</h3>\n<p><strong>Core idea:</strong> Cut a clip with the Razor tool and with Ctrl or Command + K.</p>\n<p><strong>Key terms:</strong> Cut · Trim · Razor tool · Ripple Edit tool · Ripple delete · Waveform · J-cut · L-cut.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Cut a clip with the Razor tool and with Ctrl or Command + K.</li>\n<li>Trim a clip by dragging its edges and with the Ripple Edit tool.</li>\n<li>Remove a section and close the gap with Q and W.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
