// cmp109 - Module 6: Audio: Levels, Music & Voice
module.exports = {
  "number": 6,
  "slug": "audio-levels-and-music",
  "title": "Audio: Levels, Music & Voice",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why audio matters as much as picture.",
    "Read audio levels and avoid clipping.",
    "Adjust clip volume and add fades with keyframes.",
    "Tag audio in the Essential Sound panel and use ducking.",
    "Add music under dialogue without drowning it out."
  ],
  "sections": [
    {
      "heading": "Sound Is Half the Video",
      "html": "<p>Viewers forgive a slightly soft picture, but they will not watch a video they cannot hear. Bad audio, a voice buried under music, a hum, a sudden loud bang, is the fastest reason people click away. Good audio is not an extra: it is half the video.</p>\n<p>The first rule is to listen with headphones while you edit. Laptop speakers hide problems that headphones reveal, such as a hum, a click, or music that is too loud under a voice. If it sounds wrong on headphones, it will sound wrong to your audience.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Record the best sound you can at the start, because no editing can fully rescue badly recorded audio. A quiet room, a microphone close to the speaker, and a test recording before the real one are worth more than any effect.</div></p>\n"
    },
    {
      "heading": "Levels and Clipping",
      "html": "<p>Audio levels are measured in decibels, or dB, and shown on the audio meters. Dialogue should sit roughly between -12 and -6 dB, with peaks that never reach 0 dB. At 0 dB the sound clips: the waveform is cut off flat at the top, and the result is a harsh distortion that cannot be fixed.</p>\n<p>To adjust a clip's volume, select it and drag the volume line on the clip in the Timeline up or down, or change the value in the Effect Controls panel. To fade audio in or out, add keyframes to the volume line with Ctrl-click on Windows or Command-click on a Mac, and drag the section between them down.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Watch the meters while the sequence plays. If the meters touch red, the audio is clipping somewhere. Lower that clip until the meters stay in the green and yellow.</div></p>\n"
    },
    {
      "heading": "The Essential Sound Panel",
      "html": "<p>The Essential Sound panel, under Window, then Essential Sound, sorts audio into four types: Dialogue, Music, Sound Effects, and Ambience. Select a clip, tag it with its type, and the panel offers the right controls for that type: clarity and loudness matching for dialogue, ducking for music.</p>\n<p>Auto-Match in the Loudness section sets a clip's loudness to a standard level for its type, which is the fastest way to make several clips recorded at different volumes sound consistent. Use it on dialogue first, then on music, and listen to the result before moving on.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Tagging audio is a habit, not a chore. Tagged clips behave predictably, and ducking, the next topic, only works on tagged clips.</div></p>\n"
    },
    {
      "heading": "Music Under Dialogue: Ducking",
      "html": "<p>Music under dialogue needs to be quiet enough to hear the words and loud enough to feel the mood. Ducking does this automatically: tag the music as Music and the voice as Dialogue, enable Ducking in the Essential Sound panel, choose Duck Against Dialogue, and click Generate Keyframes. Premiere Pro lowers the music whenever someone speaks and raises it back in the pauses.</p>\n<p>Set the Reduce By amount to how much the music should drop, often around 6 to 8 dB, and the Fades to how quickly it drops and returns. Listen to the result: if the words are still hard to hear, increase the reduction; if the music pumps up and down distractingly, lengthen the fades.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Choose music that fits the video and that you have the right to use, such as royalty-free music from a library. Using a famous song without permission can get a video removed or claimed, however good the edit is.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain why audio matters as much as picture.</li>\n<li>Read audio levels and avoid clipping.</li>\n<li>Adjust clip volume and add fades with keyframes.</li>\n<li>Tag audio in the Essential Sound panel and use ducking.</li>\n<li>Add music under dialogue without drowning it out.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Letting audio clip at 0 dB. Clipped audio cannot be repaired, so keep dialogue peaks below 0 dB.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting music at the same level as dialogue. Duck the music under speech, or the words disappear.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Decibel (dB)",
      "def": "The unit for measuring audio loudness."
    },
    {
      "term": "Clipping",
      "def": "Distortion that happens when audio goes above 0 dB and the waveform is cut off."
    },
    {
      "term": "Audio meters",
      "def": "The moving bars that show how loud the audio is as it plays."
    },
    {
      "term": "Volume line",
      "def": "The line on an audio clip in the Timeline that controls its volume."
    },
    {
      "term": "Keyframe",
      "def": "A marker that sets a volume value at a point in time."
    },
    {
      "term": "Essential Sound panel",
      "def": "The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience."
    },
    {
      "term": "Ducking",
      "def": "Automatically lowering music volume when dialogue is playing."
    },
    {
      "term": "Auto-Match",
      "def": "The Essential Sound feature that sets a clip's loudness to a standard level."
    },
    {
      "term": "Dialogue",
      "def": "Spoken words in a video, such as an interview or narration."
    },
    {
      "term": "Ambience",
      "def": "Background sound that sets a scene, such as room tone or street noise."
    },
    {
      "term": "Royalty-free music",
      "def": "Music licensed for use in videos without paying per use."
    },
    {
      "term": "Fade",
      "def": "A gradual rise or fall in volume at the start or end of a clip."
    }
  ],
  "video": {
    "title": "How to Adjust Audio Tracks in Premiere Pro | Advanced Sound Mixing Tutorial | Adobe Creative Cloud",
    "embedUrl": "https://www.youtube.com/embed/D2wv7UyZuSo",
    "note": "Tutorials on adjusting audio tracks, auto audio ducking, and syncing audio with video. Practice: tag dialogue and music, then duck the music under the voice.",
    "more": [
      {
        "title": "Tutorial: Auto Audio Ducking in Adobe Premiere Pro",
        "url": "https://www.youtube.com/watch?v=xJuofTfYVnk"
      },
      {
        "title": "How to Sync Audio with Video in Premiere Pro CC",
        "url": "https://www.youtube.com/watch?v=MBb5MUXPUPU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Decibel (dB)” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Decibel (dB) — The unit for measuring audio loudness. Step 2: It matters because it is part of: Explain why audio matters as much as picture. Step 3: An example from the module is the way decibel (db) shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Clipping” and “Audio meters”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Clipping — Distortion that happens when audio goes above 0 dB and the waveform is cut off. Step 2: Audio meters — The moving bars that show how loud the audio is as it plays. Step 3: They differ because the first is about clipping while the second is about audio meters; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Read audio levels and avoid clipping.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Read audio levels and avoid clipping. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Volume line” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Volume line — The line on an audio clip in the Timeline that controls its volume. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Keyframe — A marker that sets a volume value at a point in time. Step 2: Essential Sound panel — The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience. Step 3: Ducking — Automatically lowering music volume when dialogue is playing. Step 4: Auto-Match — The Essential Sound feature that sets a clip's loudness to a standard level. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Adjust clip volume and add fades with keyframes. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Decibel (dB)” mean?",
      "choices": [
        "The unit for measuring audio loudness.",
        "Distortion that happens when audio goes above 0 dB and the waveform is cut off.",
        "The moving bars that show how loud the audio is as it plays.",
        "The line on an audio clip in the Timeline that controls its volume."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Decibel (dB) means: The unit for measuring audio loudness. (b) is the definition of Clipping, not of Decibel (dB). (c) is the definition of Audio meters, not of Decibel (dB). (d) is the definition of Volume line, not of Decibel (dB)."
    },
    {
      "q": "What does the term “Clipping” mean?",
      "choices": [
        "The moving bars that show how loud the audio is as it plays.",
        "Distortion that happens when audio goes above 0 dB and the waveform is cut off.",
        "The line on an audio clip in the Timeline that controls its volume.",
        "A marker that sets a volume value at a point in time."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clipping means: Distortion that happens when audio goes above 0 dB and the waveform is cut off. (a) is the definition of Audio meters, not of Clipping. (c) is the definition of Volume line, not of Clipping. (d) is the definition of Keyframe, not of Clipping."
    },
    {
      "q": "What does the term “Audio meters” mean?",
      "choices": [
        "The line on an audio clip in the Timeline that controls its volume.",
        "A marker that sets a volume value at a point in time.",
        "The moving bars that show how loud the audio is as it plays.",
        "The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Audio meters means: The moving bars that show how loud the audio is as it plays. (a) is the definition of Volume line, not of Audio meters. (b) is the definition of Keyframe, not of Audio meters. (d) is the definition of Essential Sound panel, not of Audio meters."
    },
    {
      "q": "What does the term “Volume line” mean?",
      "choices": [
        "A marker that sets a volume value at a point in time.",
        "The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience.",
        "Automatically lowering music volume when dialogue is playing.",
        "The line on an audio clip in the Timeline that controls its volume."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Volume line means: The line on an audio clip in the Timeline that controls its volume. (a) is the definition of Keyframe, not of Volume line. (b) is the definition of Essential Sound panel, not of Volume line. (c) is the definition of Ducking, not of Volume line."
    },
    {
      "q": "Which term means: A marker that sets a volume value at a point in time.",
      "choices": [
        "Keyframe",
        "Essential Sound panel",
        "Ducking",
        "Auto-Match"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Keyframe is the term for: A marker that sets a volume value at a point in time. (b) Essential Sound panel means The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience. (c) Ducking means Automatically lowering music volume when dialogue is playing. (d) Auto-Match means The Essential Sound feature that sets a clip's loudness to a standard level."
    },
    {
      "q": "Which term means: The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience.",
      "choices": [
        "Ducking",
        "Essential Sound panel",
        "Auto-Match",
        "Dialogue"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Essential Sound panel is the term for: The panel that tags audio as Dialogue, Music, Sound Effects, or Ambience. (a) Ducking means Automatically lowering music volume when dialogue is playing. (c) Auto-Match means The Essential Sound feature that sets a clip's loudness to a standard level. (d) Dialogue means Spoken words in a video, such as an interview or narration."
    },
    {
      "q": "Which term means: Automatically lowering music volume when dialogue is playing.",
      "choices": [
        "Auto-Match",
        "Dialogue",
        "Ducking",
        "Ambience"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ducking is the term for: Automatically lowering music volume when dialogue is playing. (a) Auto-Match means The Essential Sound feature that sets a clip's loudness to a standard level. (b) Dialogue means Spoken words in a video, such as an interview or narration. (d) Ambience means Background sound that sets a scene, such as room tone or street noise."
    },
    {
      "q": "Which term means: The Essential Sound feature that sets a clip's loudness to a standard level.",
      "choices": [
        "Dialogue",
        "Ambience",
        "Royalty-free music",
        "Auto-Match"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Auto-Match is the term for: The Essential Sound feature that sets a clip's loudness to a standard level. (a) Dialogue means Spoken words in a video, such as an interview or narration. (b) Ambience means Background sound that sets a scene, such as room tone or street noise. (c) Royalty-free music means Music licensed for use in videos without paying per use."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Audio: Levels, Music & Voice: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain why audio matters as much as picture.</p>\n<p><strong>Key terms:</strong> Decibel (dB) · Clipping · Audio meters · Volume line · Keyframe · Essential Sound panel · Ducking · Auto-Match.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain why audio matters as much as picture.</li>\n<li>Read audio levels and avoid clipping.</li>\n<li>Adjust clip volume and add fades with keyframes.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
