// cmp109 - Module 9: Speed, Stabilization & Motion
module.exports = {
  "number": 9,
  "slug": "speed-stabilization-and-motion",
  "title": "Speed, Stabilization & Motion",
  "estTime": "3–4 hours",
  "objectives": [
    "Change a clip's speed with Speed/Duration and the Rate Stretch tool.",
    "Create smooth slow motion and understand frame rates.",
    "Build a speed ramp with Time Remapping and keyframes.",
    "Smooth shaky footage with Warp Stabilizer.",
    "Animate a clip's position and scale with Motion keyframes."
  ],
  "sections": [
    {
      "heading": "Changing Speed",
      "html": "<p>To change a clip's speed, right-click it and choose Speed/Duration, then type a percentage: 50 percent plays at half speed, 200 percent at double speed. The clip gets longer or shorter on the timeline to match. The Rate Stretch tool, shortcut R, does the same job by dragging: drag a clip's edge out to slow it down, or in to speed it up.</p>\n<p>Slow motion only looks smooth if the footage was shot with enough frames. A clip shot at 60 frames per second played back at 30 gives smooth half-speed slow motion, because every frame is real. A clip shot at 30 frames per second slowed to half speed has to invent frames, which looks juddery unless you use Optical Flow time interpolation, which blends frames together.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Speed changes are for emphasis: slow down the moment that matters, speed up the boring stretch. A whole video in slow motion is a whole video that drags.</div></p>\n"
    },
    {
      "heading": "Speed Ramps and Time Remapping",
      "html": "<p>A speed ramp changes speed gradually inside one clip: normal speed, then slow motion for the key moment, then back to normal. Right-click a clip, choose Show Clip Keyframes, then Time Remapping, then Speed, and a white speed line appears on the clip. Add keyframes with the Pen tool, shortcut P, and drag the line between them up to speed up or down to slow down.</p>\n<p>Drag the sides of a keyframe to ease the transition, so the speed changes smoothly instead of jumping. A ramp with eased keyframes feels like a camera move; a ramp without easing feels like a glitch.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Plan ramps around the action: start the slow motion just before the moment that matters, and return to normal speed just after it. The audience should feel the emphasis without noticing the technique.</div></p>\n"
    },
    {
      "heading": "Warp Stabilizer: Fixing Shaky Footage",
      "html": "<p>Warp Stabilizer smooths handheld camera shake. Find it in the Effects panel under Video Effects, then Distort, then Warp Stabilizer, and drag it onto a shaky clip. Premiere Pro analyzes the clip in the background, shown by a blue banner, and then steadies it. Let the analysis finish before judging the result.</p>\n<p>Its main settings are Result, Smooth Motion or No Motion, and Method, with Subspace Warp as the default. Smooth Motion keeps the camera's intended movement but removes the shake, which suits most shots. No Motion locks the shot down, which suits a static shot that should not move at all. If the result warps oddly, try the Position, Scale, and Rotation method, which is safer but less powerful.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Warp Stabilizer crops the edges of the picture to make room for the correction, so it works best on footage shot a little wider than needed. It cannot rescue violently shaky footage, and it struggles with fast pans: the best stabilization is still a steady hand or a tripod when shooting.</div></p>\n"
    },
    {
      "heading": "Motion: Position, Scale, and Keyframes",
      "html": "<p>Every clip has Motion settings in the Effect Controls panel: Position, Scale, Rotation, and Opacity. Click the stopwatch next to one to animate it with keyframes: set the starting value, move the playhead, set the ending value, and Premiere Pro animates between them. That is how you make a photo slowly zoom in, a Ken Burns effect, or a clip slide into frame.</p>\n<p>A slow zoom on a still photo is the classic use: set Scale to 100 at the start and 115 at the end, over several seconds, and the photo comes alive. Keep the movement slow and the zoom small: a fast zoom feels like a crash, and a zoom past 120 percent on a 1080p clip starts to look soft.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Right-click keyframes and choose Ease In or Ease Out so the movement starts and stops gently. Smooth movement is invisible; jerky movement is all the viewer sees.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Change a clip's speed with Speed/Duration and the Rate Stretch tool.</li>\n<li>Create smooth slow motion and understand frame rates.</li>\n<li>Build a speed ramp with Time Remapping and keyframes.</li>\n<li>Smooth shaky footage with Warp Stabilizer.</li>\n<li>Animate a clip's position and scale with Motion keyframes.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Slowing 30 fps footage to half speed and expecting it to look smooth. Shoot at 60 fps or higher if you plan slow motion.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Applying Warp Stabilizer and judging it before the analysis finishes. Wait for the blue banner to clear.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Speed/Duration",
      "def": "The dialog that changes a clip's playback speed by percentage."
    },
    {
      "term": "Rate Stretch tool",
      "def": "The tool that changes speed by dragging a clip's edge; shortcut R."
    },
    {
      "term": "Time Remapping",
      "def": "The feature that changes speed over time within one clip, using keyframes."
    },
    {
      "term": "Speed ramp",
      "def": "A gradual change of speed inside a clip, such as slowing into a key moment."
    },
    {
      "term": "Optical Flow",
      "def": "The time interpolation method that blends frames for smoother slow motion."
    },
    {
      "term": "Warp Stabilizer",
      "def": "The effect that smooths shaky footage by analyzing and countering camera movement."
    },
    {
      "term": "Smooth Motion",
      "def": "The Warp Stabilizer result that keeps intended movement and removes shake."
    },
    {
      "term": "No Motion",
      "def": "The Warp Stabilizer result that locks a shot down completely."
    },
    {
      "term": "Motion",
      "def": "The clip properties for Position, Scale, Rotation, and Opacity."
    },
    {
      "term": "Ken Burns effect",
      "def": "A slow zoom or pan across a still photo."
    },
    {
      "term": "Keyframe",
      "def": "A marker that sets a value at a point in time, used to animate changes."
    },
    {
      "term": "Frame rate",
      "def": "How many frames of video play each second, such as 30 fps."
    }
  ],
  "video": {
    "title": "how to SPEED RAMP in Premiere Pro (Full Tutorial + SUPER Slow Motion 1%)",
    "embedUrl": "https://www.youtube.com/embed/I0BjUzAlRXI",
    "note": "A speed-ramping tutorial, Warp Stabilizer, and slow motion with time remapping. Practice: speed-ramp one action clip and stabilize one shaky clip.",
    "more": [
      {
        "title": "How to Fix Shaky Video in Premiere Pro with Warp Stabilizer Effect (Tutorial)",
        "url": "https://www.youtube.com/watch?v=_ta3-imPXTc"
      },
      {
        "title": "Smooth Slow Motion, Timelapse, and Time Remapping in Adobe Premiere Pro 2020",
        "url": "https://www.youtube.com/watch?v=uFpcXSrgZbo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Speed/Duration” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Speed/Duration — The dialog that changes a clip's playback speed by percentage. Step 2: It matters because it is part of: Change a clip's speed with Speed/Duration and the Rate Stretch tool. Step 3: An example from the module is the way speed/duration shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Rate Stretch tool” and “Time Remapping”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rate Stretch tool — The tool that changes speed by dragging a clip's edge; shortcut R. Step 2: Time Remapping — The feature that changes speed over time within one clip, using keyframes. Step 3: They differ because the first is about rate stretch tool while the second is about time remapping; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create smooth slow motion and understand frame rates.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create smooth slow motion and understand frame rates. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Speed ramp” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Speed ramp — A gradual change of speed inside a clip, such as slowing into a key moment. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Optical Flow — The time interpolation method that blends frames for smoother slow motion. Step 2: Warp Stabilizer — The effect that smooths shaky footage by analyzing and countering camera movement. Step 3: Smooth Motion — The Warp Stabilizer result that keeps intended movement and removes shake. Step 4: No Motion — The Warp Stabilizer result that locks a shot down completely. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Build a speed ramp with Time Remapping and keyframes. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Speed/Duration” mean?",
      "choices": [
        "The dialog that changes a clip's playback speed by percentage.",
        "The tool that changes speed by dragging a clip's edge; shortcut R.",
        "The feature that changes speed over time within one clip, using keyframes.",
        "A gradual change of speed inside a clip, such as slowing into a key moment."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Speed/Duration means: The dialog that changes a clip's playback speed by percentage. (b) is the definition of Rate Stretch tool, not of Speed/Duration. (c) is the definition of Time Remapping, not of Speed/Duration. (d) is the definition of Speed ramp, not of Speed/Duration."
    },
    {
      "q": "What does the term “Rate Stretch tool” mean?",
      "choices": [
        "The feature that changes speed over time within one clip, using keyframes.",
        "The tool that changes speed by dragging a clip's edge; shortcut R.",
        "A gradual change of speed inside a clip, such as slowing into a key moment.",
        "The time interpolation method that blends frames for smoother slow motion."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rate Stretch tool means: The tool that changes speed by dragging a clip's edge; shortcut R. (a) is the definition of Time Remapping, not of Rate Stretch tool. (c) is the definition of Speed ramp, not of Rate Stretch tool. (d) is the definition of Optical Flow, not of Rate Stretch tool."
    },
    {
      "q": "What does the term “Time Remapping” mean?",
      "choices": [
        "A gradual change of speed inside a clip, such as slowing into a key moment.",
        "The time interpolation method that blends frames for smoother slow motion.",
        "The feature that changes speed over time within one clip, using keyframes.",
        "The effect that smooths shaky footage by analyzing and countering camera movement."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Time Remapping means: The feature that changes speed over time within one clip, using keyframes. (a) is the definition of Speed ramp, not of Time Remapping. (b) is the definition of Optical Flow, not of Time Remapping. (d) is the definition of Warp Stabilizer, not of Time Remapping."
    },
    {
      "q": "What does the term “Speed ramp” mean?",
      "choices": [
        "The time interpolation method that blends frames for smoother slow motion.",
        "The effect that smooths shaky footage by analyzing and countering camera movement.",
        "The Warp Stabilizer result that keeps intended movement and removes shake.",
        "A gradual change of speed inside a clip, such as slowing into a key moment."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Speed ramp means: A gradual change of speed inside a clip, such as slowing into a key moment. (a) is the definition of Optical Flow, not of Speed ramp. (b) is the definition of Warp Stabilizer, not of Speed ramp. (c) is the definition of Smooth Motion, not of Speed ramp."
    },
    {
      "q": "Which term means: The time interpolation method that blends frames for smoother slow motion.",
      "choices": [
        "Optical Flow",
        "Warp Stabilizer",
        "Smooth Motion",
        "No Motion"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Optical Flow is the term for: The time interpolation method that blends frames for smoother slow motion. (b) Warp Stabilizer means The effect that smooths shaky footage by analyzing and countering camera movement. (c) Smooth Motion means The Warp Stabilizer result that keeps intended movement and removes shake. (d) No Motion means The Warp Stabilizer result that locks a shot down completely."
    },
    {
      "q": "Which term means: The effect that smooths shaky footage by analyzing and countering camera movement.",
      "choices": [
        "Smooth Motion",
        "Warp Stabilizer",
        "No Motion",
        "Motion"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Warp Stabilizer is the term for: The effect that smooths shaky footage by analyzing and countering camera movement. (a) Smooth Motion means The Warp Stabilizer result that keeps intended movement and removes shake. (c) No Motion means The Warp Stabilizer result that locks a shot down completely. (d) Motion means The clip properties for Position, Scale, Rotation, and Opacity."
    },
    {
      "q": "Which term means: The Warp Stabilizer result that keeps intended movement and removes shake.",
      "choices": [
        "No Motion",
        "Motion",
        "Smooth Motion",
        "Ken Burns effect"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Smooth Motion is the term for: The Warp Stabilizer result that keeps intended movement and removes shake. (a) No Motion means The Warp Stabilizer result that locks a shot down completely. (b) Motion means The clip properties for Position, Scale, Rotation, and Opacity. (d) Ken Burns effect means A slow zoom or pan across a still photo."
    },
    {
      "q": "Which term means: The Warp Stabilizer result that locks a shot down completely.",
      "choices": [
        "Motion",
        "Ken Burns effect",
        "Keyframe",
        "No Motion"
      ],
      "answer": 3,
      "explanation": "Correct: (d). No Motion is the term for: The Warp Stabilizer result that locks a shot down completely. (a) Motion means The clip properties for Position, Scale, Rotation, and Opacity. (b) Ken Burns effect means A slow zoom or pan across a still photo. (c) Keyframe means A marker that sets a value at a point in time, used to animate changes."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Speed, Stabilization & Motion: Quick Reference</h3>\n<p><strong>Core idea:</strong> Change a clip's speed with Speed/Duration and the Rate Stretch tool.</p>\n<p><strong>Key terms:</strong> Speed/Duration · Rate Stretch tool · Time Remapping · Speed ramp · Optical Flow · Warp Stabilizer · Smooth Motion · No Motion.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Change a clip's speed with Speed/Duration and the Rate Stretch tool.</li>\n<li>Create smooth slow motion and understand frame rates.</li>\n<li>Build a speed ramp with Time Remapping and keyframes.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
