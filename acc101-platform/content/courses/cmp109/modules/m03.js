// cmp109 - Module 3: The Timeline & Sequences
module.exports = {
  "number": 3,
  "slug": "the-timeline-and-sequences",
  "title": "The Timeline & Sequences",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a sequence is and how it relates to a project.",
    "Create a sequence that matches your footage.",
    "Add clips to the Timeline and arrange them on tracks.",
    "Use the Selection tool, snapping, and linked selection.",
    "Zoom the Timeline and navigate it with keyboard shortcuts."
  ],
  "sections": [
    {
      "heading": "Sequences: Your Editing Canvas",
      "html": "<p>A sequence is a timeline with settings: frame size, such as 1920 by 1080, and frame rate, such as 30 frames per second. Every edit you make happens inside a sequence, and a project can hold many sequences. The simplest way to make one is to drag your first clip onto an empty Timeline panel: Premiere Pro asks if you want the sequence to match the clip, and you say yes.</p>\n<p>Matching the sequence to your footage matters. If your footage is 1080p at 30 frames per second and your sequence is 4K at 24, Premiere Pro has to convert every frame, which slows playback and can make motion look odd. When in doubt, match the clip.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Name your sequence clearly, such as Cafe-Story-Final, and keep rough cuts as separate sequences, such as Cafe-Story-Rough, so you can always go back to an earlier version.</div></p>\n"
    },
    {
      "heading": "Tracks: Video Above, Audio Below",
      "html": "<p>The Timeline has video tracks at the top, labeled V1, V2, V3, and audio tracks below, labeled A1, A2, A3. Clips on higher video tracks appear in front of clips on lower ones, so B-roll on V2 covers the main shot on V1 while it plays. Audio tracks mix together: dialogue on A1, music on A2, sound effects on A3.</p>\n<p>A video clip and its audio are linked: select one and the other comes with it. To move or delete only the audio or only the video, hold Alt on Windows or Option on a Mac while clicking, or turn off Linked Selection in the Timeline panel. Linking keeps your picture and sound together; unlinking lets you fix one without disturbing the other.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Lock a track by clicking its padlock icon when you do not want to change it, and mute or solo audio tracks with the M and S buttons. A locked track cannot be edited by accident, which is a lifesaver on a busy timeline.</div></p>\n"
    },
    {
      "heading": "The Selection Tool and Snapping",
      "html": "<p>The Selection tool, shortcut V, is your default tool: click a clip to select it, drag it to move it, and drag its edges to trim it. The Razor tool, shortcut C, cuts a clip where you click. The Ripple Edit tool, shortcut B, trims a clip and closes the gap automatically. You will use those three tools in almost every edit.</p>\n<p>Snapping, toggled with S, makes clips snap to the playhead, to markers, and to the edges of other clips, so everything lines up neatly. Leave snapping on while you assemble a rough cut, and turn it off when you need to place a clip at an exact frame it does not want to snap to.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> To close a gap between two clips, select the gap and press Delete, or right-click the gap and choose Ripple Delete, which removes the gap and pulls everything after it to the left.</div></p>\n"
    },
    {
      "heading": "Navigating the Timeline",
      "html": "<p>The Timeline is long, and you need to move around it fast. Press Space to play and pause, click on the time ruler to jump the playhead, and drag across the ruler to scrub through footage. Press the plus key to zoom in and the minus key to zoom out, and press backslash to see the whole sequence at once.</p>\n<p>The Up and Down arrow keys jump the playhead to the previous or next edit point, which is the fastest way to check every cut. The Home key jumps to the start, and End jumps to the finish. Markers, added with M, let you note spots to return to, such as a place that needs B-roll.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Play your sequence from start to finish often. An edit that looks fine in pieces can feel wrong as a whole, and only watching it through shows you the pacing.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a sequence is and how it relates to a project.</li>\n<li>Create a sequence that matches your footage.</li>\n<li>Add clips to the Timeline and arrange them on tracks.</li>\n<li>Use the Selection tool, snapping, and linked selection.</li>\n<li>Zoom the Timeline and navigate it with keyboard shortcuts.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Building a sequence with settings that do not match the footage. Drag the first clip to the Timeline and let Premiere Pro match the sequence to it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving Linked Selection off and moving video without its audio. Keep clips linked unless you have a reason to separate them.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Sequence",
      "def": "A timeline with frame size and frame rate, holding your arranged clips."
    },
    {
      "term": "Video track",
      "def": "A row in the Timeline holding video clips, such as V1 or V2."
    },
    {
      "term": "Audio track",
      "def": "A row in the Timeline holding audio clips, such as A1 or A2."
    },
    {
      "term": "Linked selection",
      "def": "The link between a clip's video and audio so they move together."
    },
    {
      "term": "Selection tool",
      "def": "The default tool for selecting and moving clips; shortcut V."
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
      "term": "Snapping",
      "def": "The feature that makes clips snap to the playhead and to other clips; toggled with S."
    },
    {
      "term": "Marker",
      "def": "A note placed on the Timeline to mark a spot; added with M."
    },
    {
      "term": "Playhead",
      "def": "The line in the Timeline showing the current moment in the sequence."
    },
    {
      "term": "Ripple Delete",
      "def": "Removing a clip or gap and pulling everything after it to the left."
    },
    {
      "term": "Time ruler",
      "def": "The strip at the top of the Timeline showing time, which you click to move the playhead."
    }
  ],
  "video": {
    "title": "How to Quickly Navigate Timeline (Shuttle) in Adobe Premiere Pro CC",
    "embedUrl": "https://www.youtube.com/embed/mVkCY4qsoBg",
    "note": "Timeline navigation, an intro to Premiere Pro, and a full-length tutorial. Practice: build a sequence from three clips and move them on V1 and V2.",
    "more": [
      {
        "title": "Intro to Premiere Pro Video Edit",
        "url": "https://www.youtube.com/watch?v=zgc36PI1Jbc"
      },
      {
        "title": "Learn EVERYTHING about Premiere Pro | TUTORIAL",
        "url": "https://www.youtube.com/watch?v=1-sNJs-MFYo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Sequence” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sequence — A timeline with frame size and frame rate, holding your arranged clips. Step 2: It matters because it is part of: Explain what a sequence is and how it relates to a project. Step 3: An example from the module is the way sequence shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Video track” and “Audio track”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Video track — A row in the Timeline holding video clips, such as V1 or V2. Step 2: Audio track — A row in the Timeline holding audio clips, such as A1 or A2. Step 3: They differ because the first is about video track while the second is about audio track; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create a sequence that matches your footage.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create a sequence that matches your footage. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Linked selection” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Linked selection — The link between a clip's video and audio so they move together. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Selection tool — The default tool for selecting and moving clips; shortcut V. Step 2: Razor tool — The tool that cuts a clip where you click; shortcut C. Step 3: Ripple Edit tool — The tool that trims a clip and closes the gap; shortcut B. Step 4: Snapping — The feature that makes clips snap to the playhead and to other clips; toggled with S. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Add clips to the Timeline and arrange them on tracks. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Sequence” mean?",
      "choices": [
        "A timeline with frame size and frame rate, holding your arranged clips.",
        "A row in the Timeline holding video clips, such as V1 or V2.",
        "A row in the Timeline holding audio clips, such as A1 or A2.",
        "The link between a clip's video and audio so they move together."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sequence means: A timeline with frame size and frame rate, holding your arranged clips. (b) is the definition of Video track, not of Sequence. (c) is the definition of Audio track, not of Sequence. (d) is the definition of Linked selection, not of Sequence."
    },
    {
      "q": "What does the term “Video track” mean?",
      "choices": [
        "A row in the Timeline holding audio clips, such as A1 or A2.",
        "A row in the Timeline holding video clips, such as V1 or V2.",
        "The link between a clip's video and audio so they move together.",
        "The default tool for selecting and moving clips; shortcut V."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Video track means: A row in the Timeline holding video clips, such as V1 or V2. (a) is the definition of Audio track, not of Video track. (c) is the definition of Linked selection, not of Video track. (d) is the definition of Selection tool, not of Video track."
    },
    {
      "q": "What does the term “Audio track” mean?",
      "choices": [
        "The link between a clip's video and audio so they move together.",
        "The default tool for selecting and moving clips; shortcut V.",
        "A row in the Timeline holding audio clips, such as A1 or A2.",
        "The tool that cuts a clip where you click; shortcut C."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Audio track means: A row in the Timeline holding audio clips, such as A1 or A2. (a) is the definition of Linked selection, not of Audio track. (b) is the definition of Selection tool, not of Audio track. (d) is the definition of Razor tool, not of Audio track."
    },
    {
      "q": "What does the term “Linked selection” mean?",
      "choices": [
        "The default tool for selecting and moving clips; shortcut V.",
        "The tool that cuts a clip where you click; shortcut C.",
        "The tool that trims a clip and closes the gap; shortcut B.",
        "The link between a clip's video and audio so they move together."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Linked selection means: The link between a clip's video and audio so they move together. (a) is the definition of Selection tool, not of Linked selection. (b) is the definition of Razor tool, not of Linked selection. (c) is the definition of Ripple Edit tool, not of Linked selection."
    },
    {
      "q": "Which term means: The default tool for selecting and moving clips; shortcut V.",
      "choices": [
        "Selection tool",
        "Razor tool",
        "Ripple Edit tool",
        "Snapping"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Selection tool is the term for: The default tool for selecting and moving clips; shortcut V. (b) Razor tool means The tool that cuts a clip where you click; shortcut C. (c) Ripple Edit tool means The tool that trims a clip and closes the gap; shortcut B. (d) Snapping means The feature that makes clips snap to the playhead and to other clips; toggled with S."
    },
    {
      "q": "Which term means: The tool that cuts a clip where you click; shortcut C.",
      "choices": [
        "Ripple Edit tool",
        "Razor tool",
        "Snapping",
        "Marker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Razor tool is the term for: The tool that cuts a clip where you click; shortcut C. (a) Ripple Edit tool means The tool that trims a clip and closes the gap; shortcut B. (c) Snapping means The feature that makes clips snap to the playhead and to other clips; toggled with S. (d) Marker means A note placed on the Timeline to mark a spot; added with M."
    },
    {
      "q": "Which term means: The tool that trims a clip and closes the gap; shortcut B.",
      "choices": [
        "Snapping",
        "Marker",
        "Ripple Edit tool",
        "Playhead"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ripple Edit tool is the term for: The tool that trims a clip and closes the gap; shortcut B. (a) Snapping means The feature that makes clips snap to the playhead and to other clips; toggled with S. (b) Marker means A note placed on the Timeline to mark a spot; added with M. (d) Playhead means The line in the Timeline showing the current moment in the sequence."
    },
    {
      "q": "Which term means: The feature that makes clips snap to the playhead and to other clips; toggled with S.",
      "choices": [
        "Marker",
        "Playhead",
        "Ripple Delete",
        "Snapping"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Snapping is the term for: The feature that makes clips snap to the playhead and to other clips; toggled with S. (a) Marker means A note placed on the Timeline to mark a spot; added with M. (b) Playhead means The line in the Timeline showing the current moment in the sequence. (c) Ripple Delete means Removing a clip or gap and pulling everything after it to the left."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — The Timeline & Sequences: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a sequence is and how it relates to a project.</p>\n<p><strong>Key terms:</strong> Sequence · Video track · Audio track · Linked selection · Selection tool · Razor tool · Ripple Edit tool · Snapping.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a sequence is and how it relates to a project.</li>\n<li>Create a sequence that matches your footage.</li>\n<li>Add clips to the Timeline and arrange them on tracks.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
