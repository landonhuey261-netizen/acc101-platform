// egr108 - Module 8: Machining: Turning, Milling, and Drilling
module.exports = {
  "number": 8,
  "slug": "machining-turning-milling",
  "title": "Machining: Turning, Milling, and Drilling",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how machining removes material to make a shape.",
    "Compare turning, milling, and drilling and say what each one makes.",
    "Calculate cutting speed and spindle speed from diameter and surface speed.",
    "Choose a cutting speed and feed for a material and explain the trade-off.",
    "List the safety rules for a machine shop: guards, chips, and coolant."
  ],
  "sections": [
    {
      "heading": "What Machining Is",
      "html": "<p><p>Machining cuts material away from a block or bar to leave the shape you want. It is a subtractive process: you start with more material than you need and remove the rest as chips (swarf). It is slower and more wasteful than casting or moulding, but it gives the best accuracy and surface finish — which is why almost every precision part is machined at least once.</p></p>\n<p><p>The three basic operations are turning (the work spins, the tool is fixed), milling (the tool spins, the work moves), and drilling (a spinning drill makes a hole). Grinding is the finishing step that gives the finest surface and the tightest size. Learn what each operation does well and you can plan how to make almost any part.</p></p>\n"
    },
    {
      "heading": "Turning on a Lathe",
      "html": "<p><p>On a lathe, the workpiece spins and a single-point tool cuts a cylinder, a face, or a thread. Turning makes shafts, pins, bushes, and anything round. The cutting speed is the speed of the work surface past the tool: v = πDN ÷ 1,000, with D in mm and N in rpm, giving v in m/min. For mild steel with a carbide tool, a typical cutting speed is about 150 m/min.</p></p>\n<p><p>Example: turning a 50 mm diameter bar at 150 m/min. Spindle speed is N = (v × 1,000) ÷ (πD) = 150,000 ÷ (π × 50) = 955 rpm. Feed is how far the tool moves per revolution — a roughing feed might be 0.3 mm/rev, a finishing feed 0.1 mm/rev. Rough fast, finish slow: that is the machinist's rule.</p></p>\n"
    },
    {
      "heading": "Milling and Drilling",
      "html": "<p><p>On a milling machine, a spinning cutter with several teeth moves across the work to cut flat faces, slots, and pockets. The same cutting-speed formula applies, using the cutter diameter. A 20 mm end mill at 120 m/min spins at 120,000 ÷ (π × 20) = 1,910 rpm. Milling is the most flexible operation: with the right cutter, it can make almost any shape that is not round.</p></p>\n<p><p>Drilling makes holes with a twist drill. The drill point must be centred (use a centre drill first), the speed must suit the drill size (small drills spin fast, big drills spin slow), and the chips must clear — peck drilling (drilling a little, backing out, drilling again) clears chips from deep holes. A drilled hole is rarely accurate enough for a bearing; reaming or boring finishes it to size.</p></p>\n"
    },
    {
      "heading": "Cutting Tools, Coolant, and Safety",
      "html": "<p><p>Cutting tools are made of high-speed steel (cheap, tough) or carbide (harder, faster, more brittle). Carbide lets you cut faster but it chips if it is shocked, so use it with a rigid setup. Coolant does two jobs: it cools the tool and the work, and it washes chips away. Without coolant, the tool overheats, wears fast, and the work can expand and go out of size.</p></p>\n<p><p>Safety first: guards on, no gloves near spinning parts (they catch and drag a hand in), eye protection always, and never reach over a spinning chuck. Chips are sharp — brush them away, never with a bare hand. A machine shop is safe when the rules are followed every time, not most of the time.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Machining removes material as chips; it gives the best accuracy.</li><li>Turning makes round parts; milling makes flat and shaped parts; drilling makes holes.</li><li>Cutting speed v = πDN ÷ 1,000 (D in mm, v in m/min).</li><li>Rough fast with a big feed; finish slow with a small feed.</li><li>No gloves near spinning parts; eye protection always.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Running a big drill at the same rpm as a small one. Big tools need lower rpm for the same cutting speed.</p><p><strong>Common mistake:</strong> Dry cutting a carbide tool at high speed. Without coolant the tool overheats and wears out fast.</p><p><strong>Ready check:</strong> If you can find the spindle speed for a 50 mm bar at 150 m/min, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Machining",
      "def": "Cutting material away to make a shape, producing chips."
    },
    {
      "term": "Turning",
      "def": "Machining where the work spins and the tool is fixed; it makes round parts."
    },
    {
      "term": "Milling",
      "def": "Machining where a spinning cutter moves across the work; it makes flat and shaped parts."
    },
    {
      "term": "Drilling",
      "def": "Making a hole with a spinning drill."
    },
    {
      "term": "Lathe",
      "def": "The machine tool for turning."
    },
    {
      "term": "Cutting speed",
      "def": "The speed of the work surface past the tool, in m/min."
    },
    {
      "term": "Spindle speed",
      "def": "How fast the spindle turns, in rpm."
    },
    {
      "term": "Feed",
      "def": "How far the tool moves per revolution (turning) or per tooth (milling)."
    },
    {
      "term": "Carbide",
      "def": "A very hard tool material that allows fast cutting but can chip."
    },
    {
      "term": "High-speed steel",
      "def": "A tough tool steel, cheaper than carbide and more forgiving."
    },
    {
      "term": "Coolant",
      "def": "Fluid that cools the tool and work and washes chips away."
    },
    {
      "term": "Swarf (chips)",
      "def": "The material cut away during machining."
    },
    {
      "term": "Reaming",
      "def": "Finishing a drilled hole to an accurate size with a reamer."
    },
    {
      "term": "Boring",
      "def": "Enlarging a hole accurately on a lathe or mill."
    }
  ],
  "video": {
    "title": "CNC machining - What is it and How Does it Work? (Must Know for Engineers)",
    "embedUrl": "https://www.youtube.com/embed/lEyNWtM6MW4",
    "note": "CNC machining explained: milling and turning, how the machines work, and what they are good at.",
    "more": [
      {
        "title": "Big CNC Mill in Super Slow Motion",
        "url": "https://www.youtube.com/watch?v=iSdhnpgtUAs"
      },
      {
        "title": "Aluminum 6061 for CNC machining (Explained and Compared)",
        "url": "https://www.youtube.com/watch?v=yHEIrjjlAJ0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 40 mm bar is turned at a cutting speed of 120 m/min. What spindle speed is needed?</p>",
      "solution": "<p><strong>Answer:</strong> N = 120,000 ÷ (π × 40) = 955 rpm, about 950 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 25 mm end mill runs at 100 m/min. What is its spindle speed?</p>",
      "solution": "<p><strong>Answer:</strong> N = 100,000 ÷ (π × 25) = 1,273 rpm, about 1,270 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the difference between turning and milling in one sentence each.</p>",
      "solution": "<p><strong>Answer:</strong> Turning: the work spins and the tool is fixed, making round parts. Milling: the tool spins and the work moves, making flat and shaped parts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A hole must fit a bearing accurately. Why is drilling alone not enough?</p>",
      "solution": "<p><strong>Answer:</strong> A drilled hole is not accurate enough in size or roundness; it must be reamed or bored to size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must you not wear gloves near a spinning lathe chuck?</p>",
      "solution": "<p><strong>Answer:</strong> A glove can catch on the spinning chuck and drag a hand in.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A carbide tool is cutting dry and wearing fast. What is the likely cause and the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Overheating: use coolant, or reduce the cutting speed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Machining is best described as:",
      "choices": [
        "Adding material layer by layer",
        "Removing material as chips",
        "Melting material into a mould",
        "Joining parts with heat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Machining is subtractive. (a) is additive manufacturing. (c) is casting. (d) is welding."
    },
    {
      "q": "Turning makes:",
      "choices": [
        "Flat faces",
        "Round parts like shafts",
        "Holes only",
        "Sheet metal bends"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The work spins on a lathe. (a) is milling's job. (c) is drilling's job. (d) is forming."
    },
    {
      "q": "A 50 mm bar at 150 m/min cutting speed needs a spindle speed of about:",
      "choices": [
        "955 rpm",
        "477 rpm",
        "1,910 rpm",
        "150 rpm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). N = 150,000 ÷ (π × 50) = 955 rpm. (b) halves it. (c) is the value for a 25 mm bar. (d) is the cutting speed itself."
    },
    {
      "q": "Milling is done with:",
      "choices": [
        "A fixed tool and spinning work",
        "A spinning cutter moving across the work",
        "A drill only",
        "A grinding wheel only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The cutter spins and the work feeds. (a) describes turning. (c) is drilling. (d) is grinding."
    },
    {
      "q": "Carbide tools compared with high-speed steel are:",
      "choices": [
        "Harder and faster, but more brittle",
        "Softer and slower",
        "Cheaper and tougher",
        "Only for wood"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Carbide cuts faster but chips if shocked. (b) is backwards. (c) carbide costs more. (d) carbide is for metal."
    },
    {
      "q": "Why use coolant in machining?",
      "choices": [
        "To make the chips bigger",
        "To cool the tool and work and wash chips away",
        "To lubricate the operator's hands",
        "To speed up the spindle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Coolant controls heat and clears chips. (a) chip size is set by feed. (c) coolant is not hand lotion. (d) coolant does not change spindle speed."
    },
    {
      "q": "Deep holes are drilled by:",
      "choices": [
        "One fast plunge",
        "Peck drilling: drill a little, back out, repeat",
        "Drilling without a centre drill",
        "Using the biggest drill first"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pecking clears chips from the hole. (a) packs chips and can break the drill. (c) the drill will wander. (d) big drills need a pilot hole."
    },
    {
      "q": "The most important safety rule near a spinning chuck is:",
      "choices": [
        "Wear gloves",
        "Wear eye protection and keep hands and gloves clear",
        "Oil the chuck while it spins",
        "Reach over the chuck to measure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Guards, eye protection, and clear hands. (a) gloves catch and drag a hand in. (c) and (d) put hands near moving parts."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Machining: Turning, Milling, and Drilling: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how machining removes material to make a shape.</p>\n<p><strong>Key terms:</strong> Machining · Turning · Milling · Drilling · Lathe · Cutting speed · Spindle speed · Feed.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how machining removes material to make a shape.</li>\n<li>Compare turning, milling, and drilling and say what each one makes.</li>\n<li>Calculate cutting speed and spindle speed from diameter and surface speed.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
