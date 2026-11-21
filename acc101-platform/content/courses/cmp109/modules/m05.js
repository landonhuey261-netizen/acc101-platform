// cmp109 - Module 5: Transitions & Effects
module.exports = {
  "number": 5,
  "slug": "transitions-and-effects",
  "title": "Transitions & Effects",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a transition is and when to use one.",
    "Add a Cross Dissolve and adjust its duration.",
    "Add and adjust a video effect from the Effects panel.",
    "Use keyframes to animate an effect over time.",
    "Explain why most edits should use hard cuts, not fancy transitions."
  ],
  "sections": [
    {
      "heading": "What Transitions Do",
      "html": "<p>A transition is the change between two clips: a hard cut jumps instantly, a dissolve fades one out as the next fades in, and a wipe slides one across the other. Transitions live in the Effects panel, under Video Transitions. The most useful one is the Cross Dissolve, found under Dissolve, which is also the default: select an edit point and press Ctrl + D on Windows or Command + D on a Mac to add it.</p>\n<p>Transitions need extra frames to work with: a dissolve borrows frames from the end of one clip and the start of the next. If a clip has no spare frames, Premiere Pro shows a warning and the dissolve repeats frames instead, which looks like a stutter. Trim a few frames off each clip first if you see that warning.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Adjust a transition by selecting it in the Timeline and dragging its edges to make it longer or shorter, or by changing its duration in the Effect Controls panel. A dissolve of about half a second suits most edits; longer dissolves feel slow and dreamy.</div></p>\n"
    },
    {
      "heading": "Video Effects",
      "html": "<p>An effect changes one clip, such as making it black and white, blurring it, or changing its size. Find effects in the Effects panel under Video Effects, and drag one onto a clip in the Timeline. The Effect Controls panel then shows the effect's settings, which you can change.</p>\n<p>Useful beginner effects include Transform for moving and scaling a clip, Gaussian Blur for softening, Lumetri Color for color, and Warp Stabilizer for smoothing shaky footage, which you will meet properly in Module 9. The search box in the Effects panel finds any effect by name, which is faster than browsing folders.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Effects are non-destructive: removing an effect returns the clip to its original state. Try effects freely, and remove the ones that do not serve the story.</div></p>\n"
    },
    {
      "heading": "Keyframes: Change Over Time",
      "html": "<p>A keyframe is a marker that says a setting has a certain value at a certain time. Set one value at the start of a clip and a different value at the end, and Premiere Pro animates between them. That is how you make a photo slowly zoom in, a title slide across the screen, or a clip fade from black.</p>\n<p>To add a keyframe, select a clip, open the Effect Controls panel, and click the stopwatch icon next to a property such as Position or Opacity. Move the playhead, change the value, and a new keyframe appears automatically. The line between the keyframes is the animation.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Right-click a keyframe and choose Ease In or Ease Out to make the movement start and stop smoothly instead of abruptly. Smooth starts and stops are the difference between an animation that feels professional and one that feels robotic.</div></p>\n"
    },
    {
      "heading": "Less Is More",
      "html": "<p>The most common beginner mistake in transitions and effects is using too many. A video with a different flashy transition at every cut looks like a demo reel, not a story. Professional editors use hard cuts for almost everything, a dissolve for a change of time or place, and a fade to black at the very end.</p>\n<p>Before adding a transition, ask whether a hard cut would do the job. If the answer is yes, use the hard cut. Save dissolves for moments that need softening, and save special effects for moments that need emphasis. Restraint is a skill, and it is what makes the moments you do emphasize stand out.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When in doubt, cut. A hard cut is never wrong; a fancy transition often is.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a transition is and when to use one.</li>\n<li>Add a Cross Dissolve and adjust its duration.</li>\n<li>Add and adjust a video effect from the Effects panel.</li>\n<li>Use keyframes to animate an effect over time.</li>\n<li>Explain why most edits should use hard cuts, not fancy transitions.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a different flashy transition at every cut. Hard cuts do most of the work; save dissolves for time or place changes.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding a dissolve to clips with no spare frames, which makes the transition stutter. Trim a few frames first.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Transition",
      "def": "The change between two clips, such as a dissolve or a wipe."
    },
    {
      "term": "Cross Dissolve",
      "def": "The standard transition that fades one clip out as the next fades in."
    },
    {
      "term": "Hard cut",
      "def": "An instant change from one clip to the next, with no transition."
    },
    {
      "term": "Dip to Black",
      "def": "A transition that fades a clip out to black."
    },
    {
      "term": "Effect",
      "def": "A change applied to one clip, such as a blur or a color grade."
    },
    {
      "term": "Effect Controls panel",
      "def": "The panel showing the settings of the effects on the selected clip."
    },
    {
      "term": "Keyframe",
      "def": "A marker that sets a value at a point in time, used to animate changes."
    },
    {
      "term": "Ease In / Ease Out",
      "def": "Keyframe settings that make movement start and stop smoothly."
    },
    {
      "term": "Transform",
      "def": "The effect that moves, scales, and rotates a clip."
    },
    {
      "term": "Gaussian Blur",
      "def": "The effect that softens a clip evenly."
    },
    {
      "term": "Opacity",
      "def": "How see-through a clip is, from 0 to 100 percent."
    },
    {
      "term": "Handles",
      "def": "The spare frames at the ends of a clip that a transition needs to work."
    }
  ],
  "video": {
    "title": "5 FAST & EASY VISUAL EFFECTS in Premiere Pro #01",
    "embedUrl": "https://www.youtube.com/embed/jg9UbgvnLuo",
    "note": "Fast visual effects, a hyperlapse tutorial, and a zoom transition tutorial. Practice: add one Cross Dissolve where time passes, and leave the rest as hard cuts.",
    "more": [
      {
        "title": "The EASIEST Way to Make a HYPERLAPSE | Adobe Premiere Pro Tutorial",
        "url": "https://www.youtube.com/watch?v=Ul7n-FXmY74"
      },
      {
        "title": "SIMPLE ZOOM & ZOOM TRANSITION tutorial | how to zoom in Premiere Pro 2021",
        "url": "https://www.youtube.com/watch?v=Q3HBs1NFWM0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Transition” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Transition — The change between two clips, such as a dissolve or a wipe. Step 2: It matters because it is part of: Explain what a transition is and when to use one. Step 3: An example from the module is the way transition shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Cross Dissolve” and “Hard cut”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cross Dissolve — The standard transition that fades one clip out as the next fades in. Step 2: Hard cut — An instant change from one clip to the next, with no transition. Step 3: They differ because the first is about cross dissolve while the second is about hard cut; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Add a Cross Dissolve and adjust its duration.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Add a Cross Dissolve and adjust its duration. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Dip to Black” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Dip to Black — A transition that fades a clip out to black. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Effect — A change applied to one clip, such as a blur or a color grade. Step 2: Effect Controls panel — The panel showing the settings of the effects on the selected clip. Step 3: Keyframe — A marker that sets a value at a point in time, used to animate changes. Step 4: Ease In / Ease Out — Keyframe settings that make movement start and stop smoothly. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Add and adjust a video effect from the Effects panel. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Transition” mean?",
      "choices": [
        "The change between two clips, such as a dissolve or a wipe.",
        "The standard transition that fades one clip out as the next fades in.",
        "An instant change from one clip to the next, with no transition.",
        "A transition that fades a clip out to black."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Transition means: The change between two clips, such as a dissolve or a wipe. (b) is the definition of Cross Dissolve, not of Transition. (c) is the definition of Hard cut, not of Transition. (d) is the definition of Dip to Black, not of Transition."
    },
    {
      "q": "What does the term “Cross Dissolve” mean?",
      "choices": [
        "An instant change from one clip to the next, with no transition.",
        "The standard transition that fades one clip out as the next fades in.",
        "A transition that fades a clip out to black.",
        "A change applied to one clip, such as a blur or a color grade."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cross Dissolve means: The standard transition that fades one clip out as the next fades in. (a) is the definition of Hard cut, not of Cross Dissolve. (c) is the definition of Dip to Black, not of Cross Dissolve. (d) is the definition of Effect, not of Cross Dissolve."
    },
    {
      "q": "What does the term “Hard cut” mean?",
      "choices": [
        "A transition that fades a clip out to black.",
        "A change applied to one clip, such as a blur or a color grade.",
        "An instant change from one clip to the next, with no transition.",
        "The panel showing the settings of the effects on the selected clip."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Hard cut means: An instant change from one clip to the next, with no transition. (a) is the definition of Dip to Black, not of Hard cut. (b) is the definition of Effect, not of Hard cut. (d) is the definition of Effect Controls panel, not of Hard cut."
    },
    {
      "q": "What does the term “Dip to Black” mean?",
      "choices": [
        "A change applied to one clip, such as a blur or a color grade.",
        "The panel showing the settings of the effects on the selected clip.",
        "A marker that sets a value at a point in time, used to animate changes.",
        "A transition that fades a clip out to black."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Dip to Black means: A transition that fades a clip out to black. (a) is the definition of Effect, not of Dip to Black. (b) is the definition of Effect Controls panel, not of Dip to Black. (c) is the definition of Keyframe, not of Dip to Black."
    },
    {
      "q": "Which term means: A change applied to one clip, such as a blur or a color grade.",
      "choices": [
        "Effect",
        "Effect Controls panel",
        "Keyframe",
        "Ease In / Ease Out"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Effect is the term for: A change applied to one clip, such as a blur or a color grade. (b) Effect Controls panel means The panel showing the settings of the effects on the selected clip. (c) Keyframe means A marker that sets a value at a point in time, used to animate changes. (d) Ease In / Ease Out means Keyframe settings that make movement start and stop smoothly."
    },
    {
      "q": "Which term means: The panel showing the settings of the effects on the selected clip.",
      "choices": [
        "Keyframe",
        "Effect Controls panel",
        "Ease In / Ease Out",
        "Transform"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Effect Controls panel is the term for: The panel showing the settings of the effects on the selected clip. (a) Keyframe means A marker that sets a value at a point in time, used to animate changes. (c) Ease In / Ease Out means Keyframe settings that make movement start and stop smoothly. (d) Transform means The effect that moves, scales, and rotates a clip."
    },
    {
      "q": "Which term means: A marker that sets a value at a point in time, used to animate changes.",
      "choices": [
        "Ease In / Ease Out",
        "Transform",
        "Keyframe",
        "Gaussian Blur"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Keyframe is the term for: A marker that sets a value at a point in time, used to animate changes. (a) Ease In / Ease Out means Keyframe settings that make movement start and stop smoothly. (b) Transform means The effect that moves, scales, and rotates a clip. (d) Gaussian Blur means The effect that softens a clip evenly."
    },
    {
      "q": "Which term means: Keyframe settings that make movement start and stop smoothly.",
      "choices": [
        "Transform",
        "Gaussian Blur",
        "Opacity",
        "Ease In / Ease Out"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Ease In / Ease Out is the term for: Keyframe settings that make movement start and stop smoothly. (a) Transform means The effect that moves, scales, and rotates a clip. (b) Gaussian Blur means The effect that softens a clip evenly. (c) Opacity means How see-through a clip is, from 0 to 100 percent."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Transitions & Effects: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a transition is and when to use one.</p>\n<p><strong>Key terms:</strong> Transition · Cross Dissolve · Hard cut · Dip to Black · Effect · Effect Controls panel · Keyframe · Ease In / Ease Out.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a transition is and when to use one.</li>\n<li>Add a Cross Dissolve and adjust its duration.</li>\n<li>Add and adjust a video effect from the Effects panel.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
