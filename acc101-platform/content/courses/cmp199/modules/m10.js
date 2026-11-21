module.exports = {
  "number": 10,
  "slug": "acp-premiere-review-effects-color-export",
  "title": "ACP Premiere Pro Review: Effects, Color & Export",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply and adjust video and audio effects from the Effects panel, and save your own presets.",
    "Correct and grade colour with the Lumetri Color panel: Basic Correction, Creative, Curves, and Wheels.",
    "Use keyframes to animate motion, opacity, and effect settings over time.",
    "Read the video scopes (Waveform, Vectorscope) to judge exposure and colour objectively.",
    "Export correctly with H.264 presets, Media Encoder, and the right settings for each platform."
  ],
  "sections": [
    {
      "heading": "Effects and Presets: The Effects Panel",
      "html": "<p>The <strong>Effects panel</strong> (Window &gt; Effects) holds every video and audio effect, organised in folders: Video Effects, Audio Effects, Video Transitions, Audio Transitions. Drag an effect onto a clip, then adjust it in the <strong>Effect Controls panel</strong> — every effect shows its settings there, and the small stopwatch icon beside a setting turns on <strong>keyframes</strong> (see below). Common effects to know: <strong>Transform</strong> (position, scale, rotation), <strong>Gaussian Blur</strong>, <strong>Sharpen</strong>, <strong>Warp Stabilizer</strong> (smooths shaky footage), <strong>Noise Reduction</strong>, and <strong>Essential Graphics</strong> templates for titles.</p>\n<p>Two rules keep effects under control. First, <strong>less is more</strong> — one well-chosen effect beats five stacked ones, and the exam favours the simplest effect that does the job. Second, <strong>save what works</strong>: right-click an effect in Effect Controls and choose Save Preset, so a look or a title treatment can be reused on the next clip or the next project. Audio effects work the same way: <strong>DeNoise</strong> cleans a hissy recording, <strong>DeReverb</strong> reduces echo, and <strong>Parametric Equalizer</strong> shapes the tone of a voice.</p>"
    },
    {
      "heading": "Lumetri Color: Correction, Then Grading",
      "html": "<p><strong>Lumetri Color</strong> is Premiere Pro's colour toolkit, in the Color workspace. Work in order: <strong>Basic Correction</strong> first — set the white balance with the eyedropper, then Exposure, Contrast, Highlights, Shadows, Whites, and Blacks, and finish with Saturation. <strong>Creative</strong> adds a Look (a preset style) and adjusts its intensity, plus Faded Film and Vibrance. <strong>Curves</strong> gives precise control over tones and individual colour channels. <strong>Color Wheels</strong> adjust shadows, midtones, and highlights separately — warm the highlights and cool the shadows for a common cinematic feel. <strong>HSL Secondary</strong> selects one colour (for example, skin) and changes only that colour.</p>\n<p>Keep the two jobs apart. <strong>Colour correction</strong> makes shots look natural and consistent with each other — the same person's skin should match from one shot to the next. <strong>Colour grading</strong> adds a creative style on top of the correction. Always correct first, grade second, and never grade a shot that is not corrected — a Look on top of a colour cast just makes a stylish colour cast. <strong>LUTs</strong> (Look-Up Tables) are saved colour transforms: an input LUT converts log footage to a normal look, and a creative LUT applies a style. Apply a LUT in the Creative section or as an effect, and always check the result on a calibrated view — your laptop screen lies about colour.</p>"
    },
    {
      "heading": "Keyframes, Scopes, and Motion",
      "html": "<p><strong>Keyframes</strong> animate a setting over time. Click the stopwatch beside a setting (for example, Opacity or Position) to set a keyframe at the playhead, move the playhead, change the value, and Premiere Pro animates between the two. Use keyframes to fade a clip in or out, to move a title across the screen, to zoom slowly into a photo (the Ken Burns effect), or to ramp audio up and down. <strong>Speed ramping</strong> is keyframes for time: slow a clip down for a dramatic moment, then ramp back to normal speed — use Time Remapping on the clip for smooth ramps.</p>\n<p><strong>Scopes</strong> judge colour objectively, because screens lie. The <strong>Waveform</strong> shows brightness: the bottom is black, the top is white, and anything crushed against the top is clipped. The <strong>Vectorscope</strong> shows colour: skin tones should sit along the skin-tone line, and a shot with a colour cast leans toward one side. The <strong>Histogram</strong> shows the tonal spread. The exam asks which scope to use for which job: Waveform for exposure, Vectorscope for colour. <strong>Safe margins</strong> keep titles inside the frame, and <strong>nesting</strong> (Sequence &gt; Nest) groups clips into one clip so an effect applies to all of them at once.</p>"
    },
    {
      "heading": "Export: H.264, Presets, and Media Encoder",
      "html": "<p>Export is <strong>File &gt; Export &gt; Media</strong> (Ctrl/Cmd+M). For most online video the answer is <strong>H.264</strong> in an <strong>MP4</strong> container — it plays everywhere and YouTube, Instagram, and Vimeo all accept it. Pick a preset to start: <strong>YouTube 1080p Full HD</strong> or <strong>Match Source — High bitrate</strong>, which matches your sequence settings. Then check the three things that matter: <strong>resolution</strong> (1920×1080 for Full HD, 3840×2160 for 4K), <strong>frame rate</strong> (match the source — do not change it at export), and <strong>bitrate</strong> (higher means better quality and a bigger file; VBR 2-pass gives the best quality at a given size but takes longer).</p>\n<p>For a master copy to keep, use a high-quality codec such as <strong>ProRes</strong> or <strong>DNxHR</strong> — big files, but no quality loss for future edits. <strong>Adobe Media Encoder</strong> queues exports so you can keep editing while they render, and it can export several versions at once (a YouTube version and a vertical version, for example). Before exporting, check the whole timeline: render the red bars (Sequence &gt; Render Effects In to Out) if playback stutters, watch the export range (Work Area vs Entire Sequence — the wrong choice exports the wrong length), and always watch the finished file once through before you send it to anyone.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Effects: drag from the Effects panel, adjust in Effect Controls, save presets; less is more; Warp Stabilizer smooths shake.</li><li>Lumetri: Basic Correction first (white balance, exposure, contrast), then Creative Looks, Curves, Wheels, HSL Secondary; correct before you grade; LUTs are saved colour transforms.</li><li>Keyframes animate any setting over time; speed ramping uses Time Remapping; Waveform judges exposure, Vectorscope judges colour.</li><li>Export: H.264 in MP4 for online video, YouTube 1080p or Match Source preset, match the source frame rate, VBR 2-pass for quality; ProRes/DNxHR for masters; Media Encoder queues exports.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Grading before correcting — a Look on a colour cast is just a stylish colour cast.</div><div class=\"callout\"><strong>Common mistake:</strong> Exporting the wrong range (Work Area instead of Entire Sequence) and sending a 12-second clip instead of the full video.</div>\n<p><strong>Ready-to-Work link:</strong> If you can correct then grade a shot, animate a title with keyframes, and export the same sequence for YouTube and as a master, you have this module. Module 11 is the Portfolio Project Studio: shipping your app, photo, and video.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Effects panel",
      "def": "Where every video and audio effect lives, organised in folders; drag an effect onto a clip to use it."
    },
    {
      "term": "Effect Controls panel",
      "def": "Shows the settings of the effects on the selected clip; the stopwatch turns on keyframes."
    },
    {
      "term": "Keyframe",
      "def": "A marked value at a point in time; Premiere Pro animates the change between two keyframes."
    },
    {
      "term": "Lumetri Color",
      "def": "Premiere Pro's colour toolkit: Basic Correction, Creative, Curves, Color Wheels, HSL Secondary."
    },
    {
      "term": "Colour correction",
      "def": "Making shots look natural and consistent with each other."
    },
    {
      "term": "Colour grading",
      "def": "Adding a creative style on top of a corrected shot."
    },
    {
      "term": "LUT",
      "def": "Look-Up Table: a saved colour transform, used to convert log footage or apply a style."
    },
    {
      "term": "HSL Secondary",
      "def": "A Lumetri tool that selects one colour and changes only that colour."
    },
    {
      "term": "Warp Stabilizer",
      "def": "An effect that smooths shaky handheld footage."
    },
    {
      "term": "Waveform",
      "def": "A scope showing brightness from black (bottom) to white (top); clipped highlights crush against the top."
    },
    {
      "term": "Vectorscope",
      "def": "A scope showing colour; skin tones should sit along the skin-tone line."
    },
    {
      "term": "Speed ramping",
      "def": "Changing a clip's speed over time with keyframes (Time Remapping)."
    },
    {
      "term": "H.264",
      "def": "The standard codec for online video, usually in an MP4 container."
    },
    {
      "term": "VBR 2-pass",
      "def": "Variable bitrate encoding in two passes: best quality at a given file size, slower to render."
    },
    {
      "term": "ProRes / DNxHR",
      "def": "High-quality master codecs for keeping a video with no quality loss for future edits."
    },
    {
      "term": "Media Encoder",
      "def": "Adobe's queue-based exporter; renders while you keep editing and exports several versions at once."
    },
    {
      "term": "Nesting",
      "def": "Grouping clips into one nested sequence so an effect applies to all of them."
    }
  ],
  "video": {
    "title": "The Ultimate Premiere Pro Color Grading Tutorial: Master Lumetri Color",
    "embedUrl": "https://www.youtube.com/embed/925CG5IxVDU",
    "note": "A full Lumetri workflow: Basic Correction, Creative Looks, Curves, and Wheels. Follow along with your own footage and grade the same shot twice — once corrected only, once graded.",
    "more": [
      {
        "title": "Export video in Premiere — Adobe (video tutorial)",
        "url": "https://www.youtube.com/watch?v=2Tn9ZMgCk6I"
      },
      {
        "title": "Exporting in Premiere — Adobe Video Training",
        "url": "https://www.youtube.com/watch?v=Khp2bhxuNm4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Two shots of the same person look different: one is warm and bright, the other is cool and dark. What do you do, and in what order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Colour-correct first — match the white balance and exposure in Basic Correction so the shots look like the same scene. Step 2: Use the Waveform scope to match brightness objectively. Step 3: Only then add a Creative Look or grade, and apply it to both shots equally. Step 4: Check the skin tones on the Vectorscope.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A title needs to slide in from the left over 1 second, hold still, then fade out. How do you build that?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Select the title clip and open Effect Controls. Step 2: Turn on the stopwatch for Position, set a keyframe off-screen left at the start, and another at the final position 1 second later. Step 3: Turn on the stopwatch for Opacity at the end, set 100%, then 0% a second later for the fade. Step 4: Play it back — the motion should be smooth, not stepped.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Handheld footage is shaky. Which effect do you use, and what is the trade-off?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use Warp Stabilizer. Step 2: It analyses the motion and smooths it, but it crops the edges slightly and can look wobbly if the shake is extreme. Step 3: Let it analyse fully before judging the result. Step 4: If it looks warped, lower the Smoothness value or use a different shot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You must deliver the same video for YouTube (1080p) and as a master to keep. What do you export for each?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: YouTube: H.264 in MP4, YouTube 1080p Full HD preset, VBR 2-pass, frame rate matched to the source. Step 2: Master: ProRes or DNxHR at the sequence resolution — a big file with no quality loss for future edits. Step 3: Queue both in Media Encoder so you can keep working. Step 4: Watch each finished file once through before sending.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The exported video is only 12 seconds long, but the timeline is 60 seconds. What went wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The export range was set to the Work Area instead of the Entire Sequence. Step 2: Set the range to Entire Sequence (or set the Work Area to cover the whole timeline). Step 3: Re-export. Step 4: Always check the duration shown in the export dialog before clicking Export.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A clip's colours look right on your laptop but wrong on a client's screen. What do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the scopes — the Waveform and Vectorscope do not lie, even if the screen does. Step 2: Check whether the footage is log and needs an input LUT. Step 3: Export with the correct colour space (Rec. 709 for standard video). Step 4: Remember that uncalibrated screens differ; the scopes are the ground truth.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the correct order for colour work?",
      "choices": [
        "Grade first, then correct",
        "Correct first, then grade",
        "Apply a LUT and stop",
        "Export first, then correct"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Correct first so shots look natural and consistent, then grade for style. (a) is wrong: grading an uncorrected shot bakes the colour cast into the style. (c) is wrong: a LUT is one step, not the whole job. (d) is wrong: exporting comes after colour work, not before."
    },
    {
      "q": "Which scope do you use to judge exposure?",
      "choices": [
        "Vectorscope",
        "Waveform",
        "Histogram only",
        "Audio meters"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Waveform shows brightness from black to white. (a) is wrong: the Vectorscope shows colour. (c) is wrong: the histogram shows the tonal spread but not where in the frame the tones are. (d) is wrong: audio meters show sound levels."
    },
    {
      "q": "What does VBR 2-pass do?",
      "choices": [
        "Exports twice as fast",
        "Encodes in two passes for the best quality at a given file size",
        "Doubles the resolution",
        "Removes the audio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). VBR 2-pass analyses the whole video first, then encodes with the best bitrate distribution — slower, but better quality. (a) is wrong: two passes take longer, not shorter. (c) is wrong: bitrate does not change resolution. (d) is wrong: audio is unaffected."
    },
    {
      "q": "Which codec and container are the standard for online video?",
      "choices": [
        "ProRes in MOV",
        "H.264 in MP4",
        "DNxHR in MXF",
        "AVI uncompressed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). H.264 in MP4 plays everywhere and is what YouTube, Instagram, and Vimeo accept. (a) is wrong: ProRes is a master codec, not a delivery codec. (c) is wrong: DNxHR is also a master codec. (d) is wrong: uncompressed AVI files are enormous and unsuitable for the web."
    },
    {
      "q": "What is a keyframe?",
      "choices": [
        "A single still image exported from a video",
        "A marked value at a point in time, with Premiere Pro animating the change between keyframes",
        "The first frame of a clip",
        "A type of transition"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Keyframes animate a setting over time — position, opacity, or an effect value. (a) is wrong: exporting a still is a different feature. (c) is wrong: the first frame is just the first frame. (d) is wrong: a transition joins two clips."
    },
    {
      "q": "What does Warp Stabilizer do?",
      "choices": [
        "Sharpens a blurry photo",
        "Smooths shaky handheld footage",
        "Removes background noise",
        "Speeds up rendering"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Warp Stabilizer analyses motion and smooths shaky footage, at the cost of a slight crop. (a) is wrong: sharpening is a different effect. (c) is wrong: noise removal is an audio effect. (d) is wrong: stabilising adds render time, it does not speed it up."
    },
    {
      "q": "What is a LUT?",
      "choices": [
        "A saved colour transform, used to convert log footage or apply a style",
        "A type of audio effect",
        "A video file format",
        "A timeline track"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A LUT (Look-Up Table) maps colours from one look to another. (b) is wrong: audio effects are in the Audio Effects folder. (c) is wrong: video formats are codecs and containers such as H.264/MP4. (d) is wrong: tracks are the rows on the timeline."
    },
    {
      "q": "Why use Adobe Media Encoder instead of exporting directly?",
      "choices": [
        "It makes the video shorter",
        "It queues exports so you can keep editing while they render, and exports several versions at once",
        "It improves the colour",
        "It is the only way to export"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Media Encoder renders in the background and handles multiple versions in one queue. (a) is wrong: it does not change the duration. (c) is wrong: colour is set in Lumetri, not the encoder. (d) is wrong: File > Export > Media exports directly from Premiere Pro."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — ACP Premiere Pro Review: Effects, Color & Export: Quick Reference</h3>\n<p><strong>Core idea:</strong> Correct first, grade second, and export the right version for the right place.</p>\n<p><strong>Effects:</strong> Drag from the Effects panel · adjust in Effect Controls · stopwatch turns on keyframes · save presets · less is more · Warp Stabilizer smooths shake.</p>\n<p><strong>Lumetri:</strong> Basic Correction (white balance, exposure, contrast) → Creative Looks → Curves → Wheels → HSL Secondary · LUTs are saved colour transforms.</p>\n<p><strong>Keyframes:</strong> Animate position, opacity, or any effect over time · speed ramping uses Time Remapping.</p>\n<p><strong>Scopes:</strong> Waveform = exposure · Vectorscope = colour · screens lie, scopes do not.</p>\n<p><strong>Export:</strong> H.264 in MP4 for online · YouTube 1080p or Match Source preset · match the source frame rate · VBR 2-pass for quality · ProRes/DNxHR for masters · Media Encoder queues exports · check the export range.</p>\n<p><strong>Watch out:</strong> Grading before correcting; exporting the Work Area instead of the Entire Sequence.</p>\n<p><strong>Self-check:</strong> Correct then grade a shot, animate a title with keyframes, and export for YouTube and as a master, without looking. If you can, you have this module.</p>\n"
};
