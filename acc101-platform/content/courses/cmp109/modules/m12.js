// cmp109 - Module 12: Exporting & Sharing
module.exports = {
  "number": 12,
  "slug": "exporting-and-sharing",
  "title": "Exporting & Sharing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what exporting is and why it matters.",
    "Export a video as H.264 MP4 for YouTube and social media.",
    "Choose the right preset, resolution, and frame rate.",
    "Use Media Encoder to queue exports and keep editing.",
    "Check an exported file before sharing it."
  ],
  "sections": [
    {
      "heading": "What Exporting Is",
      "html": "<p>Exporting turns your sequence into a single video file that anyone can play: an MP4 you can upload to YouTube, send to a client, or post on social media. Until you export, your video exists only inside Premiere Pro as a project file and a pile of media. The export is the finished product.</p>\n<p>Exporting is also called rendering. Premiere Pro reads every clip, effect, title, and audio track in the sequence, and writes them into one file. How long it takes depends on the length of the video, the effects used, and the power of your computer: a simple 60-second video exports in a few minutes, while a heavily graded 4K video takes much longer.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Export from the finished sequence, not from a rough cut, and double-check that the right sequence is selected. Exporting the wrong sequence is a classic mistake that wastes the whole render time.</div></p>\n"
    },
    {
      "heading": "H.264 and the YouTube Preset",
      "html": "<p>For YouTube, Instagram, and most online sharing, the right format is H.264 in an MP4 file. It is small enough to upload quickly and plays on almost every device. Open the Export tab or press Ctrl + M on Windows or Command + M on a Mac, set Format to H.264, and choose the YouTube 1080p Full HD preset, or Match Source - Adaptive High Bitrate, which matches your sequence and picks a sensible bitrate.</p>\n<p>Check the basic settings before you export: the resolution should match your sequence, usually 1920 by 1080, the frame rate should match your footage, usually 30 or 25 frames per second, and the audio should be AAC at 48 kHz. A mismatch here is the most common cause of a video that looks wrong after upload.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Bitrate controls quality and file size: a higher bitrate looks better and makes a bigger file. YouTube's own guidance suggests around 8 Mbps for 1080p at 30 frames per second and 12 Mbps at 60 frames per second. The presets already choose sensible values, so trust them until you have a reason not to.</div></p>\n"
    },
    {
      "heading": "Media Encoder and Queues",
      "html": "<p>Adobe Media Encoder is a separate program that comes with Premiere Pro, and it handles exports in the background. Instead of Export, choose Queue, and the job goes to Media Encoder, where you can keep editing in Premiere Pro while it renders. You can queue several exports at once: a YouTube version, a square version for social media, and a high-quality master.</p>\n<p>Media Encoder can also convert files without Premiere Pro: drag a batch of clips into its queue and transcode them all to one format. That is useful when a camera gives you files in a format that edits slowly.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Name your exports clearly, such as Cafe-Story-Final-1080p-2026-11-16.mp4, and save them in your project's Exports folder. A file called Sequence 01.mp4 in Downloads is a file you will lose.</div></p>\n"
    },
    {
      "heading": "Check Before You Share",
      "html": "<p>After the export finishes, watch the exported file all the way through before you share it. Check the picture, the sound, the titles, and the captions. Play it on a phone as well as on your computer, because that is how most of your audience will see it.</p>\n<p>If something is wrong, fix it in the sequence and export again. Never try to fix an exported file: go back to the project, change it there, and export a fresh copy. The project is the master; the export is a copy.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> You have now edited a video start to finish: workspace, importing, timeline, cutting, transitions, audio, titles, color, speed, captions, finishing, and export. The next step is practice: edit one short video a week, run the checklist, and your eye and ear will improve faster than any tutorial can teach them.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what exporting is and why it matters.</li>\n<li>Export a video as H.264 MP4 for YouTube and social media.</li>\n<li>Choose the right preset, resolution, and frame rate.</li>\n<li>Use Media Encoder to queue exports and keep editing.</li>\n<li>Check an exported file before sharing it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Exporting the wrong sequence. Check the sequence name and the export settings before you start a long render.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Sharing an export without watching it first. Watch the exported file all the way through, on a phone as well as a computer.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Export",
      "def": "Turning a sequence into a single video file that can be played and shared."
    },
    {
      "term": "Render",
      "def": "The process of writing a sequence out into a finished video file."
    },
    {
      "term": "H.264",
      "def": "The video format used for most online delivery, in an MP4 file."
    },
    {
      "term": "MP4",
      "def": "The container file holding video and audio for sharing online."
    },
    {
      "term": "Preset",
      "def": "A saved set of export settings, such as YouTube 1080p Full HD."
    },
    {
      "term": "Bitrate",
      "def": "How much data a video uses each second, measured in Mbps; higher means better quality and bigger files."
    },
    {
      "term": "Media Encoder",
      "def": "Adobe's program for running exports in the background and queuing several at once."
    },
    {
      "term": "Queue",
      "def": "Sending an export job to Media Encoder instead of exporting directly."
    },
    {
      "term": "Match Source",
      "def": "An export setting that matches the sequence's resolution and frame rate."
    },
    {
      "term": "AAC",
      "def": "The audio format used in most online video, at 48 kHz."
    },
    {
      "term": "Resolution",
      "def": "The width and height of the exported video, such as 1920 by 1080."
    },
    {
      "term": "Transcode",
      "def": "Converting media files from one format to another."
    }
  ],
  "video": {
    "title": "How to Export a Video in Adobe Premiere Pro (Best YouTube Settings)",
    "embedUrl": "https://www.youtube.com/embed/B9T_aPmNepA",
    "note": "Tutorials on exporting for YouTube, best export settings, and ten shortcuts. Practice: export your 60-second video as H.264 and watch the finished file.",
    "more": [
      {
        "title": "Best Video Export Settings Adobe Premiere Pro CC 2020 For Youtube",
        "url": "https://www.youtube.com/watch?v=5WAreBd9fpQ"
      },
      {
        "title": "10 Shortcuts I Use Every Time I Open Premiere Pro",
        "url": "https://www.youtube.com/watch?v=UfTqLJHfdHQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Export” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Export — Turning a sequence into a single video file that can be played and shared. Step 2: It matters because it is part of: Explain what exporting is and why it matters. Step 3: An example from the module is the way export shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Render” and “H.264”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Render — The process of writing a sequence out into a finished video file. Step 2: H.264 — The video format used for most online delivery, in an MP4 file. Step 3: They differ because the first is about render while the second is about h.264; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Export a video as H.264 MP4 for YouTube and social media.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Export a video as H.264 MP4 for YouTube and social media. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “MP4” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: MP4 — The container file holding video and audio for sharing online. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Preset — A saved set of export settings, such as YouTube 1080p Full HD. Step 2: Bitrate — How much data a video uses each second, measured in Mbps; higher means better quality and bigger files. Step 3: Media Encoder — Adobe's program for running exports in the background and queuing several at once. Step 4: Queue — Sending an export job to Media Encoder instead of exporting directly. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Choose the right preset, resolution, and frame rate. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Export” mean?",
      "choices": [
        "Turning a sequence into a single video file that can be played and shared.",
        "The process of writing a sequence out into a finished video file.",
        "The video format used for most online delivery, in an MP4 file.",
        "The container file holding video and audio for sharing online."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Export means: Turning a sequence into a single video file that can be played and shared. (b) is the definition of Render, not of Export. (c) is the definition of H.264, not of Export. (d) is the definition of MP4, not of Export."
    },
    {
      "q": "What does the term “Render” mean?",
      "choices": [
        "The video format used for most online delivery, in an MP4 file.",
        "The process of writing a sequence out into a finished video file.",
        "The container file holding video and audio for sharing online.",
        "A saved set of export settings, such as YouTube 1080p Full HD."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Render means: The process of writing a sequence out into a finished video file. (a) is the definition of H.264, not of Render. (c) is the definition of MP4, not of Render. (d) is the definition of Preset, not of Render."
    },
    {
      "q": "What does the term “H.264” mean?",
      "choices": [
        "The container file holding video and audio for sharing online.",
        "A saved set of export settings, such as YouTube 1080p Full HD.",
        "The video format used for most online delivery, in an MP4 file.",
        "How much data a video uses each second, measured in Mbps; higher means better quality and bigger files."
      ],
      "answer": 2,
      "explanation": "Correct: (c). H.264 means: The video format used for most online delivery, in an MP4 file. (a) is the definition of MP4, not of H.264. (b) is the definition of Preset, not of H.264. (d) is the definition of Bitrate, not of H.264."
    },
    {
      "q": "What does the term “MP4” mean?",
      "choices": [
        "A saved set of export settings, such as YouTube 1080p Full HD.",
        "How much data a video uses each second, measured in Mbps; higher means better quality and bigger files.",
        "Adobe's program for running exports in the background and queuing several at once.",
        "The container file holding video and audio for sharing online."
      ],
      "answer": 3,
      "explanation": "Correct: (d). MP4 means: The container file holding video and audio for sharing online. (a) is the definition of Preset, not of MP4. (b) is the definition of Bitrate, not of MP4. (c) is the definition of Media Encoder, not of MP4."
    },
    {
      "q": "Which term means: A saved set of export settings, such as YouTube 1080p Full HD.",
      "choices": [
        "Preset",
        "Bitrate",
        "Media Encoder",
        "Queue"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Preset is the term for: A saved set of export settings, such as YouTube 1080p Full HD. (b) Bitrate means How much data a video uses each second, measured in Mbps; higher means better quality and bigger files. (c) Media Encoder means Adobe's program for running exports in the background and queuing several at once. (d) Queue means Sending an export job to Media Encoder instead of exporting directly."
    },
    {
      "q": "Which term means: How much data a video uses each second, measured in Mbps; higher means better quality and bigger files.",
      "choices": [
        "Media Encoder",
        "Bitrate",
        "Queue",
        "Match Source"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bitrate is the term for: How much data a video uses each second, measured in Mbps; higher means better quality and bigger files. (a) Media Encoder means Adobe's program for running exports in the background and queuing several at once. (c) Queue means Sending an export job to Media Encoder instead of exporting directly. (d) Match Source means An export setting that matches the sequence's resolution and frame rate."
    },
    {
      "q": "Which term means: Adobe's program for running exports in the background and queuing several at once.",
      "choices": [
        "Queue",
        "Match Source",
        "Media Encoder",
        "AAC"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Media Encoder is the term for: Adobe's program for running exports in the background and queuing several at once. (a) Queue means Sending an export job to Media Encoder instead of exporting directly. (b) Match Source means An export setting that matches the sequence's resolution and frame rate. (d) AAC means The audio format used in most online video, at 48 kHz."
    },
    {
      "q": "Which term means: Sending an export job to Media Encoder instead of exporting directly.",
      "choices": [
        "Match Source",
        "AAC",
        "Resolution",
        "Queue"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Queue is the term for: Sending an export job to Media Encoder instead of exporting directly. (a) Match Source means An export setting that matches the sequence's resolution and frame rate. (b) AAC means The audio format used in most online video, at 48 kHz. (c) Resolution means The width and height of the exported video, such as 1920 by 1080."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Exporting & Sharing: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what exporting is and why it matters.</p>\n<p><strong>Key terms:</strong> Export · Render · H.264 · MP4 · Preset · Bitrate · Media Encoder · Queue.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what exporting is and why it matters.</li>\n<li>Export a video as H.264 MP4 for YouTube and social media.</li>\n<li>Choose the right preset, resolution, and frame rate.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
