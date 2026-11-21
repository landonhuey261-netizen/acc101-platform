// egr107 - Module 9: Cams and Followers
module.exports = {
  "number": 9,
  "slug": "cams-followers",
  "title": "Cams and Followers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a cam turns rotation into a programmed follower motion.",
    "Compare radial, cylindrical, and face cams and their followers.",
    "Read a displacement diagram and name dwell, rise, and return.",
    "Explain why a cam profile must avoid sudden acceleration jumps.",
    "Say where cams are used: engines, packaging machines, and automation."
  ],
  "sections": [
    {
      "heading": "What a Cam Does",
      "html": "<p><p>A cam is a shaped rotating part that pushes a follower through a programmed motion. As the cam turns, its changing radius lifts the follower, holds it still, and lets it fall back — all in one revolution. The shape of the cam is the program: change the profile and you change the motion, with no electronics involved.</p></p>\n<p><p>The classic example is the engine camshaft: each cam lobe opens a valve at the right moment and lets the spring close it. Packaging machines use cams to time a sealer, a cutter, and a pusher from a single turning shaft. Wherever a repeating timed motion is needed, a cam is often the simplest answer.</p></p>\n"
    },
    {
      "heading": "Cam Types and Follower Types",
      "html": "<p><p>A radial (plate) cam is a flat shaped disc with the follower riding on its edge. A cylindrical cam has a groove cut around a drum, and the follower rides in the groove. A face cam has the profile on the flat face of a disc. Followers can be flat-faced, roller-tipped, or knife-edged: rollers are the usual choice because they roll instead of sliding, so they wear less.</p></p>\n<p><p>The follower is usually held against the cam by a spring, so it stays in contact on the falling side. Without the spring, the follower would leave the cam at speed and slam back down — that impact is called follower jump, and it damages both parts. Always check that the spring force beats the follower's inertia at the highest speed.</p></p>\n"
    },
    {
      "heading": "The Displacement Diagram",
      "html": "<p><p>A displacement diagram plots follower lift against cam angle. It has three parts: the rise (follower lifts), the dwell (follower stays still at full lift), and the return (follower falls back). The shape of the rise matters: a constant-velocity rise is simple but starts and stops with a jerk; a cycloidal or harmonic rise accelerates smoothly and is kinder to the machine at speed.</p></p>\n<p><p>Example: a cam must lift a follower 20 mm in 120° of rotation, dwell for 60°, then return in 120°. The average rise speed is 20 mm per 120°, but the peak speed depends on the profile shape — a smooth cycloidal rise peaks at twice the average speed. Designers size the spring and the follower for the peak, not the average.</p></p>\n"
    },
    {
      "heading": "Design Rules and Failure Modes",
      "html": "<p><p>Good cam design follows a few rules: keep accelerations smooth (no sudden jumps), keep the pressure angle small so the side push on the follower guide stays low, and make the cam big enough that the profile is not too sharp. A sharp point on a cam is a stress concentration and a wear hotspot.</p></p>\n<p><p>Common failures are wear on the cam nose (the highest-load point), follower jump at high speed, and noisy operation from a loose or worn follower guide. Regular checks are simple: look for scoring on the cam surface, listen for a rattle at speed, and check that the follower still meets its timing marks. A worn cam changes the machine's timing — and timing errors show up as bad parts.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>A cam turns rotation into a programmed up-and-down motion.</li><li>Radial, cylindrical, and face cams suit different layouts.</li><li>Roller followers wear less than flat or knife-edge followers.</li><li>Displacement diagrams have rise, dwell, and return.</li><li>Smooth profiles and a good return spring prevent follower jump.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Sizing the spring for average speed instead of peak speed — the follower jumps at the peak.</p><p><strong>Common mistake:</strong> Forgetting the dwell: a cam that never dwells gives the machine no time to do its work at full lift.</p><p><strong>Ready check:</strong> If you can sketch a rise–dwell–return diagram for a packaging cam, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Cam",
      "def": "A shaped rotating part that drives a follower through a programmed motion."
    },
    {
      "term": "Follower",
      "def": "The part that rides on a cam and is moved by it."
    },
    {
      "term": "Radial cam",
      "def": "A flat shaped disc with the follower riding on its edge."
    },
    {
      "term": "Cylindrical cam",
      "def": "A drum with a groove that guides the follower."
    },
    {
      "term": "Face cam",
      "def": "A cam with the profile cut on the flat face of a disc."
    },
    {
      "term": "Roller follower",
      "def": "A follower with a small roller at its tip, so it rolls on the cam instead of sliding."
    },
    {
      "term": "Displacement diagram",
      "def": "A graph of follower lift against cam angle."
    },
    {
      "term": "Rise",
      "def": "The part of the cam cycle where the follower lifts."
    },
    {
      "term": "Dwell",
      "def": "The part of the cam cycle where the follower stays still."
    },
    {
      "term": "Return",
      "def": "The part of the cam cycle where the follower falls back."
    },
    {
      "term": "Follower jump",
      "def": "When the follower leaves the cam surface at speed and slams back down."
    },
    {
      "term": "Pressure angle",
      "def": "The angle between the follower's direction of motion and the normal to the cam surface."
    },
    {
      "term": "Camshaft",
      "def": "A shaft carrying several cams, such as the one that opens engine valves."
    },
    {
      "term": "Cam profile",
      "def": "The exact shape of the cam edge that sets the follower's motion."
    },
    {
      "term": "Spring return",
      "def": "A spring that holds the follower against the cam."
    }
  ],
  "video": {
    "title": "Cam & Follower Mechanism in SOLIDWORKS | Full Assembly Tutorial",
    "embedUrl": "https://www.youtube.com/embed/JjtFHlWbjrA",
    "note": "A cam and spring-loaded follower built and assembled in SOLIDWORKS — a clear look at how the cam shape drives the follower.",
    "more": [
      {
        "title": "Internal Combustion Engine Parts, Components, and Terminology Explained!",
        "url": "https://www.youtube.com/watch?v=fw8Jfoif1BM"
      },
      {
        "title": "200 MECHANICAL MECHANIMS ENGINEER MUST MASTER",
        "url": "https://www.youtube.com/watch?v=FUvB1WxLfi0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A cam lifts a follower 15 mm in 90° of rotation. What is the average lift per degree?</p>",
      "solution": "<p><strong>Answer:</strong> 15 ÷ 90 = 0.167 mm per degree.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the three parts of a displacement diagram and say what the follower does in each.</p>",
      "solution": "<p><strong>Answer:</strong> Rise: follower lifts. Dwell: follower stays still. Return: follower falls back.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A packaging cam must dwell for 90° at full lift. Why is the dwell needed?</p>",
      "solution": "<p><strong>Answer:</strong> The machine needs time at full lift to do its work — for example, to seal or cut — before the follower returns.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain follower jump in plain words and name one way to prevent it.</p>",
      "solution": "<p><strong>Answer:</strong> The follower leaves the cam at high speed and slams back. Prevent it with a stronger return spring or a smoother cam profile.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A roller follower is chosen instead of a flat follower. Why?</p>",
      "solution": "<p><strong>Answer:</strong> The roller rolls on the cam instead of sliding, so friction and wear are much lower.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An engine cam opens a valve 10 mm. If the cam turns at 1,500 rpm, how many valve openings happen per minute for that cam?</p>",
      "solution": "<p><strong>Answer:</strong> One opening per revolution, so 1,500 openings per minute.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does a cam do?",
      "choices": [
        "Turns rotation into a programmed follower motion",
        "Turns electricity into heat",
        "Stores energy like a flywheel",
        "Changes gear ratios"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The cam profile is the program. (b) is a heater's job. (c) is a flywheel's job. (d) is a gearbox's job."
    },
    {
      "q": "In a displacement diagram, the dwell is when the follower:",
      "choices": [
        "Lifts",
        "Falls",
        "Stays still",
        "Spins"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Dwell means no movement at constant lift. (a) is the rise. (b) is the return. (d) followers do not spin."
    },
    {
      "q": "Which follower type wears least on the cam?",
      "choices": [
        "Knife-edge",
        "Flat-faced",
        "Roller",
        "Pointed"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A roller rolls instead of sliding. (a) and (d) concentrate load on a point. (b) slides across the cam face."
    },
    {
      "q": "Follower jump happens when:",
      "choices": [
        "The cam turns too slowly",
        "The follower leaves the cam surface at speed",
        "The spring is too strong",
        "The cam is too large"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inertia beats the spring force and the follower flies off the profile. (a) slow speed prevents jump. (c) a stronger spring prevents it. (d) size alone does not cause it."
    },
    {
      "q": "An engine camshaft's job is to:",
      "choices": [
        "Open and close the valves at the right time",
        "Drive the wheels",
        "Pump the oil",
        "Charge the battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each lobe times one valve. (b) is the transmission's job. (c) is the oil pump's job. (d) is the alternator's job."
    },
    {
      "q": "A smooth (cycloidal) rise is preferred at high speed because:",
      "choices": [
        "It is cheaper to make",
        "It avoids sudden acceleration jumps that cause impact and wear",
        "It lifts higher",
        "It needs no spring"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Smooth acceleration is kinder to the parts. (a) it is usually harder to make. (c) lift is set by the cam size, not the profile shape. (d) a spring is still needed."
    },
    {
      "q": "What holds the follower against the cam on the return?",
      "choices": [
        "Gravity alone",
        "A return spring",
        "The motor",
        "Friction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The spring keeps contact so the follower follows the profile down. (a) gravity is too weak and unreliable. (c) the motor drives the cam, not the follower. (d) friction opposes motion."
    },
    {
      "q": "A cylindrical cam guides its follower with:",
      "choices": [
        "A groove cut around a drum",
        "A flat disc edge",
        "A gear tooth",
        "A belt"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The follower pin rides in the groove. (b) describes a radial cam. (c) describes a gear. (d) describes a belt drive."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Cams and Followers: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how a cam turns rotation into a programmed follower motion.</p>\n<p><strong>Key terms:</strong> Cam · Follower · Radial cam · Cylindrical cam · Face cam · Roller follower · Displacement diagram · Rise.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how a cam turns rotation into a programmed follower motion.</li>\n<li>Compare radial, cylindrical, and face cams and their followers.</li>\n<li>Read a displacement diagram and name dwell, rise, and return.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
