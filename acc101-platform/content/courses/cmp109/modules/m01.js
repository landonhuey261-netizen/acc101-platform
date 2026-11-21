// cmp109 - Module 1: The Premiere Pro Workspace
module.exports = {
  "number": 1,
  "slug": "the-premiere-pro-workspace",
  "title": "The Premiere Pro Workspace",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main panels: Project, Source Monitor, Program Monitor, and Timeline.",
    "Switch workspaces for editing, color, audio, and graphics.",
    "Open, move, and reset panels to fix a messy workspace.",
    "Create a new project and choose where it is saved.",
    "Explain how Premiere Pro organizes a project without moving your media."
  ],
  "sections": [
    {
      "heading": "A First Look at Premiere Pro",
      "html": "<p>Premiere Pro can look like a cockpit the first time you open it: panels everywhere, menus across the top, and a timeline along the bottom. Every panel has one job, and you only need four of them to start: the Project panel holds your clips, the Source Monitor previews one clip, the Program Monitor shows your edited sequence, and the Timeline is where you assemble the edit.</p>\n<p>Across the top of the screen are the workspace tabs: Import, Edit, and Export in the current version, with more workspaces under the Window menu, such as Color, Audio, and Graphics. The Edit workspace is your home for most of this course. The tools sit in a toolbar on the left of the Timeline, and the Effects panel holds transitions and effects.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Premiere Pro is a paid Adobe Creative Cloud subscription, not free. You install it from the Creative Cloud desktop app and sign in with your Adobe account. A free trial is available if you want to test it first.</div></p>\n"
    },
    {
      "heading": "Projects, Sequences, and Media",
      "html": "<p>A project is a Premiere Pro file that holds your editing decisions: which clips you used, where you cut them, and what effects you added. The project file is small, because it does not contain your video. It contains references to your media files, which stay where they are on your computer. That is why moving or renaming a media file mid-project makes Premiere Pro say the media is offline.</p>\n<p>A sequence is a timeline inside your project: a set of video and audio tracks with a frame size and a frame rate. A project can hold many sequences, such as one for a rough cut and one for the final. When you drag your first clip onto an empty Timeline, Premiere Pro offers to make a sequence that matches the clip, which is the right choice for a beginner.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Create one folder per project on your computer, with subfolders for footage, audio, graphics, and exports. Keep your media in those folders before you import anything, and do not move it afterwards.</div></p>\n"
    },
    {
      "heading": "Workspaces and Panels",
      "html": "<p>A workspace is a saved arrangement of panels for a kind of work. Editing is for cutting, Color opens the Lumetri Color panel, Audio opens the Essential Sound panel and the Audio Track Mixer, and Graphics opens the Essential Graphics panel. Switch workspaces from the Window menu, then Workspaces, or from the tabs at the top of the screen.</p>\n<p>Panels can be moved by dragging their tabs, resized by dragging their edges, and closed with the X on the tab. If your screen gets messy, choose Window, then Workspaces, then Reset to Saved Layout to put the current workspace back to normal. That reset fixes most workspace panic.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Learn the panels by their questions: Project asks what media do I have, Source Monitor asks what is in this one clip, Program Monitor asks what does my edit look like so far, and the Timeline asks what happens when.</div></p>\n"
    },
    {
      "heading": "Setting Up for This Course",
      "html": "<p>Before you edit anything, make a practice folder called Premiere Practice, with folders inside for Footage, Audio, Graphics, and Exports. Copy your practice clips into Footage before you import them. That habit protects you from the most common beginner disaster: a project full of offline media because the files were moved.</p>\n<p>In Preferences, under Edit on Windows or Premiere Pro on a Mac, look at the Media section and note where cache files are stored. You do not need to change much, but know that cache files can grow large, and Premiere Pro can delete old ones from the same Preferences page.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> This app cannot grade video editing: no program can judge your storytelling. Instead, every lesson ends with a guided project and a self-check checklist, so you can compare your edit with the storyboard and see for yourself what worked.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Name the main panels: Project, Source Monitor, Program Monitor, and Timeline.</li>\n<li>Switch workspaces for editing, color, audio, and graphics.</li>\n<li>Open, move, and reset panels to fix a messy workspace.</li>\n<li>Create a new project and choose where it is saved.</li>\n<li>Explain how Premiere Pro organizes a project without moving your media.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Moving or renaming media files after importing them. Premiere Pro edits by reference, so moved files go offline.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Editing in a project with media scattered across the computer. Keep one project folder with subfolders and import from there.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Project panel",
      "def": "The panel listing all the media and sequences in your project."
    },
    {
      "term": "Source Monitor",
      "def": "The panel that previews a single source clip before you add it to the timeline."
    },
    {
      "term": "Program Monitor",
      "def": "The panel that shows your edited sequence as it plays."
    },
    {
      "term": "Timeline panel",
      "def": "The panel where clips are arranged on tracks to build the edit."
    },
    {
      "term": "Sequence",
      "def": "A timeline with a frame size and frame rate, holding your arranged clips."
    },
    {
      "term": "Workspace",
      "def": "A saved arrangement of panels for a kind of work, such as Editing or Color."
    },
    {
      "term": "Project file",
      "def": "The small file holding your editing decisions, not your video itself."
    },
    {
      "term": "Media",
      "def": "The video, audio, and image files your project refers to."
    },
    {
      "term": "Offline media",
      "def": "Media Premiere Pro cannot find because the file was moved, renamed, or deleted."
    },
    {
      "term": "Frame rate",
      "def": "How many frames of video play each second, such as 24, 25, or 30 fps."
    },
    {
      "term": "Frame size",
      "def": "The width and height of the video picture, such as 1920 by 1080."
    },
    {
      "term": "Effects panel",
      "def": "The panel holding video and audio effects and transitions."
    },
    {
      "term": "Playhead",
      "def": "The line in the Timeline showing the current moment in the sequence."
    }
  ],
  "video": {
    "title": "Premiere Pro Tutorial for Beginners (Edit Faster with AI)",
    "embedUrl": "https://www.youtube.com/embed/h6oxKf7m3OM",
    "note": "A complete beginner guide plus a custom-workspace tutorial and a 12-minute full tutorial. As you watch, find the Project panel, the two monitors, and the Timeline on your own screen.",
    "more": [
      {
        "title": "How to Create A Custom Workspace In Adobe Premiere Pro",
        "url": "https://www.youtube.com/watch?v=f2-tnS0lZFg"
      },
      {
        "title": "Premiere Pro 2020 - Full Tutorial for Beginners in 12 MINUTES!",
        "url": "https://www.youtube.com/watch?v=QfxpDVRGeBM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Project panel” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Project panel — The panel listing all the media and sequences in your project. Step 2: It matters because it is part of: Name the main panels: Project, Source Monitor, Program Monitor, and Timeline. Step 3: An example from the module is the way project panel shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Source Monitor” and “Program Monitor”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Source Monitor — The panel that previews a single source clip before you add it to the timeline. Step 2: Program Monitor — The panel that shows your edited sequence as it plays. Step 3: They differ because the first is about source monitor while the second is about program monitor; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Switch workspaces for editing, color, audio, and graphics.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Switch workspaces for editing, color, audio, and graphics. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Timeline panel” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Timeline panel — The panel where clips are arranged on tracks to build the edit. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sequence — A timeline with a frame size and frame rate, holding your arranged clips. Step 2: Workspace — A saved arrangement of panels for a kind of work, such as Editing or Color. Step 3: Project file — The small file holding your editing decisions, not your video itself. Step 4: Media — The video, audio, and image files your project refers to. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Open, move, and reset panels to fix a messy workspace. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Project panel” mean?",
      "choices": [
        "The panel listing all the media and sequences in your project.",
        "The panel that previews a single source clip before you add it to the timeline.",
        "The panel that shows your edited sequence as it plays.",
        "The panel where clips are arranged on tracks to build the edit."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Project panel means: The panel listing all the media and sequences in your project. (b) is the definition of Source Monitor, not of Project panel. (c) is the definition of Program Monitor, not of Project panel. (d) is the definition of Timeline panel, not of Project panel."
    },
    {
      "q": "What does the term “Source Monitor” mean?",
      "choices": [
        "The panel that shows your edited sequence as it plays.",
        "The panel that previews a single source clip before you add it to the timeline.",
        "The panel where clips are arranged on tracks to build the edit.",
        "A timeline with a frame size and frame rate, holding your arranged clips."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Source Monitor means: The panel that previews a single source clip before you add it to the timeline. (a) is the definition of Program Monitor, not of Source Monitor. (c) is the definition of Timeline panel, not of Source Monitor. (d) is the definition of Sequence, not of Source Monitor."
    },
    {
      "q": "What does the term “Program Monitor” mean?",
      "choices": [
        "The panel where clips are arranged on tracks to build the edit.",
        "A timeline with a frame size and frame rate, holding your arranged clips.",
        "The panel that shows your edited sequence as it plays.",
        "A saved arrangement of panels for a kind of work, such as Editing or Color."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Program Monitor means: The panel that shows your edited sequence as it plays. (a) is the definition of Timeline panel, not of Program Monitor. (b) is the definition of Sequence, not of Program Monitor. (d) is the definition of Workspace, not of Program Monitor."
    },
    {
      "q": "What does the term “Timeline panel” mean?",
      "choices": [
        "A timeline with a frame size and frame rate, holding your arranged clips.",
        "A saved arrangement of panels for a kind of work, such as Editing or Color.",
        "The small file holding your editing decisions, not your video itself.",
        "The panel where clips are arranged on tracks to build the edit."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Timeline panel means: The panel where clips are arranged on tracks to build the edit. (a) is the definition of Sequence, not of Timeline panel. (b) is the definition of Workspace, not of Timeline panel. (c) is the definition of Project file, not of Timeline panel."
    },
    {
      "q": "Which term means: A timeline with a frame size and frame rate, holding your arranged clips.",
      "choices": [
        "Sequence",
        "Workspace",
        "Project file",
        "Media"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sequence is the term for: A timeline with a frame size and frame rate, holding your arranged clips. (b) Workspace means A saved arrangement of panels for a kind of work, such as Editing or Color. (c) Project file means The small file holding your editing decisions, not your video itself. (d) Media means The video, audio, and image files your project refers to."
    },
    {
      "q": "Which term means: A saved arrangement of panels for a kind of work, such as Editing or Color.",
      "choices": [
        "Project file",
        "Workspace",
        "Media",
        "Offline media"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Workspace is the term for: A saved arrangement of panels for a kind of work, such as Editing or Color. (a) Project file means The small file holding your editing decisions, not your video itself. (c) Media means The video, audio, and image files your project refers to. (d) Offline media means Media Premiere Pro cannot find because the file was moved, renamed, or deleted."
    },
    {
      "q": "Which term means: The small file holding your editing decisions, not your video itself.",
      "choices": [
        "Media",
        "Offline media",
        "Project file",
        "Frame rate"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Project file is the term for: The small file holding your editing decisions, not your video itself. (a) Media means The video, audio, and image files your project refers to. (b) Offline media means Media Premiere Pro cannot find because the file was moved, renamed, or deleted. (d) Frame rate means How many frames of video play each second, such as 24, 25, or 30 fps."
    },
    {
      "q": "Which term means: The video, audio, and image files your project refers to.",
      "choices": [
        "Offline media",
        "Frame rate",
        "Frame size",
        "Media"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Media is the term for: The video, audio, and image files your project refers to. (a) Offline media means Media Premiere Pro cannot find because the file was moved, renamed, or deleted. (b) Frame rate means How many frames of video play each second, such as 24, 25, or 30 fps. (c) Frame size means The width and height of the video picture, such as 1920 by 1080."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — The Premiere Pro Workspace: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main panels: Project, Source Monitor, Program Monitor, and Timeline.</p>\n<p><strong>Key terms:</strong> Project panel · Source Monitor · Program Monitor · Timeline panel · Sequence · Workspace · Project file · Media.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main panels: Project, Source Monitor, Program Monitor, and Timeline.</li>\n<li>Switch workspaces for editing, color, audio, and graphics.</li>\n<li>Open, move, and reset panels to fix a messy workspace.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
