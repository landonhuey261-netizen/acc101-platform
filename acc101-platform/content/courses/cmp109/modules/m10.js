// cmp109 - Module 10: Captions & Accessibility
module.exports = {
  "number": 10,
  "slug": "captions-and-accessibility",
  "title": "Captions & Accessibility",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why captions matter for accessibility and reach.",
    "Transcribe a sequence with Speech to Text.",
    "Create captions from a transcript and style them.",
    "Fix caption errors and timing by hand.",
    "Export a video with captions burned in or as a sidecar file."
  ],
  "sections": [
    {
      "heading": "Why Captions Matter",
      "html": "<p>Captions are text on screen showing what is being said. They make a video watchable for people who are deaf or hard of hearing, for people watching with the sound off, and for people watching in a language they are still learning. A large share of social video is watched muted, so captions also make your video reach people who would otherwise scroll past it.</p>\n<p>Captions are not the same as subtitles for translation, although the same tools make both. Captions show the spoken words in the video's own language, and they can also note important sounds, such as [music] or [applause]. Subtitles translate the words into another language.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Adding captions is part of finishing a video, not an afterthought. Budget time for it in every project, because a video without captions reaches fewer people and excludes some entirely.</div></p>\n"
    },
    {
      "heading": "Transcribing with Speech to Text",
      "html": "<p>Premiere Pro can transcribe your dialogue automatically. Open the Text panel, choose the Transcript tab, and click Transcribe Sequence. Choose the language spoken in the video, and Premiere Pro writes out what was said, with timecodes, while you keep working. You need an internet connection for transcription, and it works best on clear speech.</p>\n<p>The transcript is a draft, not a finished product. Automatic transcription mishears names, technical words, and fast speech, and it struggles with overlapping voices and background noise. Read the transcript through and fix the mistakes before you turn it into captions.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> You can also edit the video from the transcript: click a word in the transcript and the playhead jumps to that moment, and deleting text in the transcript can delete the matching video in a text-based edit. That is a fast way to cut an interview, but check the result before you trust it.</div></p>\n"
    },
    {
      "heading": "Creating and Styling Captions",
      "html": "<p>With the transcript ready, click Create Captions in the Text panel. Choose the caption format, usually Subtitle, and set the maximum characters per line and the minimum duration. Short lines, one line at a time, suit fast social video; two lines suit longer-form video. Premiere Pro creates a caption track on the timeline, with a caption segment for each phrase.</p>\n<p>Style captions in the Properties panel: font, size, color, and background. Keep them consistent through the whole video, place them where they do not cover faces or important action, and make them big enough to read on a phone. A common choice is white text with a dark background box.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Check every caption against the audio: the words must match what is said, and the timing must match when it is said. A caption that appears a second late is confusing, and a caption with the wrong word is worse than no caption at all.</div></p>\n"
    },
    {
      "heading": "Exporting with Captions",
      "html": "<p>When you export, the Captions section of the export settings gives you choices. Burn captions into the video to make them part of the picture, which works everywhere but cannot be turned off. Embed them in the file so players can switch them on and off. Or create a sidecar file, such as an SRT file, which is a separate text file that YouTube and other platforms accept alongside the video.</p>\n<p>For YouTube, uploading an SRT sidecar is usually the best choice: viewers can turn captions on or off, and YouTube can translate them. For social feeds where videos autoplay muted, burning captions in guarantees they are seen.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Keep the transcript and the SRT file with your project files. If the client asks for a correction later, you fix the caption file, not the whole video.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain why captions matter for accessibility and reach.</li>\n<li>Transcribe a sequence with Speech to Text.</li>\n<li>Create captions from a transcript and style them.</li>\n<li>Fix caption errors and timing by hand.</li>\n<li>Export a video with captions burned in or as a sidecar file.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Publishing auto-generated captions without reading them. Transcription mishears names and technical words, so check every caption.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Burning captions into a video when the platform accepts a sidecar file. A sidecar lets viewers switch captions on or off.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Captions",
      "def": "Text on screen showing what is being said in a video."
    },
    {
      "term": "Subtitles",
      "def": "Text translating the spoken words into another language."
    },
    {
      "term": "Speech to Text",
      "def": "Premiere Pro's automatic transcription of spoken dialogue."
    },
    {
      "term": "Transcript",
      "def": "The written text of the dialogue in a sequence, with timecodes."
    },
    {
      "term": "Caption track",
      "def": "The timeline track holding caption segments."
    },
    {
      "term": "SRT file",
      "def": "A sidecar text file holding captions with timecodes."
    },
    {
      "term": "Sidecar file",
      "def": "A separate file, such as an SRT, carrying captions alongside a video."
    },
    {
      "term": "Burn in",
      "def": "Making captions part of the video picture, so they cannot be turned off."
    },
    {
      "term": "Embed",
      "def": "Storing captions inside the video file so players can switch them on or off."
    },
    {
      "term": "Text panel",
      "def": "The panel holding the Transcript and Captions tabs."
    },
    {
      "term": "Accessibility",
      "def": "Making a video usable by people with different needs, such as captions for deaf viewers."
    },
    {
      "term": "Timecode",
      "def": "The time address of a moment in a video, such as 00:01:23:12."
    }
  ],
  "video": {
    "title": "SPEECH TO TEXT in Adobe Premiere Pro 2023 (AUTOMATIC Captions and Subtitles!)",
    "embedUrl": "https://www.youtube.com/embed/kJNqNIx5RIE",
    "note": "Tutorials on Speech to Text captions and adding subtitles in Premiere Pro. Practice: transcribe a short clip, fix the errors, and create captions.",
    "more": [
      {
        "title": "How To Make Subtitles in Premiere Pro",
        "url": "https://www.youtube.com/watch?v=UR_fgtuCB0M"
      },
      {
        "title": "FireCut: Captions",
        "url": "https://www.youtube.com/watch?v=NkCEjmI3Mbk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Captions” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Captions — Text on screen showing what is being said in a video. Step 2: It matters because it is part of: Explain why captions matter for accessibility and reach. Step 3: An example from the module is the way captions shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Subtitles” and “Speech to Text”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Subtitles — Text translating the spoken words into another language. Step 2: Speech to Text — Premiere Pro's automatic transcription of spoken dialogue. Step 3: They differ because the first is about subtitles while the second is about speech to text; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Transcribe a sequence with Speech to Text.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Transcribe a sequence with Speech to Text. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Transcript” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Transcript — The written text of the dialogue in a sequence, with timecodes. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Caption track — The timeline track holding caption segments. Step 2: SRT file — A sidecar text file holding captions with timecodes. Step 3: Sidecar file — A separate file, such as an SRT, carrying captions alongside a video. Step 4: Burn in — Making captions part of the video picture, so they cannot be turned off. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Create captions from a transcript and style them. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Captions” mean?",
      "choices": [
        "Text on screen showing what is being said in a video.",
        "Text translating the spoken words into another language.",
        "Premiere Pro's automatic transcription of spoken dialogue.",
        "The written text of the dialogue in a sequence, with timecodes."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Captions means: Text on screen showing what is being said in a video. (b) is the definition of Subtitles, not of Captions. (c) is the definition of Speech to Text, not of Captions. (d) is the definition of Transcript, not of Captions."
    },
    {
      "q": "What does the term “Subtitles” mean?",
      "choices": [
        "Premiere Pro's automatic transcription of spoken dialogue.",
        "Text translating the spoken words into another language.",
        "The written text of the dialogue in a sequence, with timecodes.",
        "The timeline track holding caption segments."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Subtitles means: Text translating the spoken words into another language. (a) is the definition of Speech to Text, not of Subtitles. (c) is the definition of Transcript, not of Subtitles. (d) is the definition of Caption track, not of Subtitles."
    },
    {
      "q": "What does the term “Speech to Text” mean?",
      "choices": [
        "The written text of the dialogue in a sequence, with timecodes.",
        "The timeline track holding caption segments.",
        "Premiere Pro's automatic transcription of spoken dialogue.",
        "A sidecar text file holding captions with timecodes."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Speech to Text means: Premiere Pro's automatic transcription of spoken dialogue. (a) is the definition of Transcript, not of Speech to Text. (b) is the definition of Caption track, not of Speech to Text. (d) is the definition of SRT file, not of Speech to Text."
    },
    {
      "q": "What does the term “Transcript” mean?",
      "choices": [
        "The timeline track holding caption segments.",
        "A sidecar text file holding captions with timecodes.",
        "A separate file, such as an SRT, carrying captions alongside a video.",
        "The written text of the dialogue in a sequence, with timecodes."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Transcript means: The written text of the dialogue in a sequence, with timecodes. (a) is the definition of Caption track, not of Transcript. (b) is the definition of SRT file, not of Transcript. (c) is the definition of Sidecar file, not of Transcript."
    },
    {
      "q": "Which term means: The timeline track holding caption segments.",
      "choices": [
        "Caption track",
        "SRT file",
        "Sidecar file",
        "Burn in"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Caption track is the term for: The timeline track holding caption segments. (b) SRT file means A sidecar text file holding captions with timecodes. (c) Sidecar file means A separate file, such as an SRT, carrying captions alongside a video. (d) Burn in means Making captions part of the video picture, so they cannot be turned off."
    },
    {
      "q": "Which term means: A sidecar text file holding captions with timecodes.",
      "choices": [
        "Sidecar file",
        "SRT file",
        "Burn in",
        "Embed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). SRT file is the term for: A sidecar text file holding captions with timecodes. (a) Sidecar file means A separate file, such as an SRT, carrying captions alongside a video. (c) Burn in means Making captions part of the video picture, so they cannot be turned off. (d) Embed means Storing captions inside the video file so players can switch them on or off."
    },
    {
      "q": "Which term means: A separate file, such as an SRT, carrying captions alongside a video.",
      "choices": [
        "Burn in",
        "Embed",
        "Sidecar file",
        "Text panel"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Sidecar file is the term for: A separate file, such as an SRT, carrying captions alongside a video. (a) Burn in means Making captions part of the video picture, so they cannot be turned off. (b) Embed means Storing captions inside the video file so players can switch them on or off. (d) Text panel means The panel holding the Transcript and Captions tabs."
    },
    {
      "q": "Which term means: Making captions part of the video picture, so they cannot be turned off.",
      "choices": [
        "Embed",
        "Text panel",
        "Accessibility",
        "Burn in"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Burn in is the term for: Making captions part of the video picture, so they cannot be turned off. (a) Embed means Storing captions inside the video file so players can switch them on or off. (b) Text panel means The panel holding the Transcript and Captions tabs. (c) Accessibility means Making a video usable by people with different needs, such as captions for deaf viewers."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Captions & Accessibility: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain why captions matter for accessibility and reach.</p>\n<p><strong>Key terms:</strong> Captions · Subtitles · Speech to Text · Transcript · Caption track · SRT file · Sidecar file · Burn in.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain why captions matter for accessibility and reach.</li>\n<li>Transcribe a sequence with Speech to Text.</li>\n<li>Create captions from a transcript and style them.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
